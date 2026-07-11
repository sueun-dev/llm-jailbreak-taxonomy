import { existsSync, readFileSync, readdirSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const expectedCategories = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "AA",
  "BB",
  "CC",
  "DD",
  "EE",
  "FF",
  "GG",
  "HH",
  "II",
  "JJ",
  "KK",
];

const failures = [];

function markdownFiles(directory) {
  return readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    if ([".git", ".codeatlas", "node_modules"].includes(entry.name)) {
      return [];
    }

    const path = join(directory, entry.name);
    if (entry.isDirectory()) return markdownFiles(path);
    return entry.isFile() && entry.name.endsWith(".md") ? [path] : [];
  });
}

function categoryHeadings(path) {
  const text = readFileSync(join(root, path), "utf8");
  return [...text.matchAll(/^#{2,3} ([A-Z]{1,2})\./gm)].map((match) => match[1]);
}

function assertSequence(path) {
  const actual = categoryHeadings(path);
  if (actual.join(",") !== expectedCategories.join(",")) {
    failures.push(
      `${path}: expected A-KK in order; found ${actual.join(",") || "none"}`,
    );
  }
}

for (const path of [
  "README.md",
  "README.ko.md",
  "docs/en/TAXONOMY.md",
  "docs/ko/TAXONOMY.md",
  "docs/en/EXAMPLES.md",
  "docs/ko/EXAMPLES.md",
]) {
  assertSequence(path);
}

for (const path of ["README.md", "docs/en/TAXONOMY.md"]) {
  const count = [...readFileSync(join(root, path), "utf8").matchAll(
    /^\*\*Evidence(?: status)?\*\*:/gm,
  )].length;
  if (count !== expectedCategories.length) {
    failures.push(`${path}: evidence boundaries=${count}; expected 37`);
  }
}
for (const path of ["README.ko.md", "docs/ko/TAXONOMY.md"]) {
  const count = [...readFileSync(join(root, path), "utf8").matchAll(
    /^\*\*근거(?: 수준)?\*\*:/gm,
  )].length;
  if (count !== expectedCategories.length) {
    failures.push(`${path}: evidence boundaries=${count}; expected 37`);
  }
}

for (const path of [
  "docs/en/DEFENSE_MATRIX.md",
  "docs/ko/DEFENSE_MATRIX.md",
]) {
  const headings = readFileSync(join(root, path), "utf8")
    .split("\n")
    .filter((line) => line.startsWith("### "))
    .join("\n");
  const actual = [...headings.matchAll(/(?:^|[\s·-])([A-Z]{1,2})\./g)].map(
    (match) => match[1],
  );
  const missing = expectedCategories.filter((category) => !actual.includes(category));
  const duplicates = actual.filter(
    (category, index) => actual.indexOf(category) !== index,
  );
  if (missing.length || duplicates.length || actual.length !== expectedCategories.length) {
    failures.push(
      `${path}: defense coverage mismatch; missing=${missing.join(",") || "none"}; duplicates=${[...new Set(duplicates)].join(",") || "none"}`,
    );
  }
}

const referenceUrl = /https?:\/\/[^\s)>]+/g;
const referenceUrls = (path) =>
  [...readFileSync(join(root, path), "utf8").matchAll(referenceUrl)]
    .map((match) => match[0].replace(/[.,;:]$/, ""))
    .sort();
const englishReferences = referenceUrls("docs/en/REFERENCES.md");
const koreanReferences = referenceUrls("docs/ko/REFERENCES.md");
if (englishReferences.join("\n") !== koreanReferences.join("\n")) {
  failures.push("English and Korean reference URL sets do not match");
}
if (englishReferences.length < 25) {
  failures.push(
    `Audited reference catalog is unexpectedly small: ${englishReferences.length} URLs`,
  );
}

const auditText = readFileSync(join(root, "docs/CLAIM_AUDIT.md"), "utf8");
const auditRows = [...auditText.matchAll(
  /^\| ([A-Z]{1,2}) \| (Empirical|Vendor\/benchmark|Threat model|Speculative) \|/gm,
)].map((match) => ({ category: match[1], evidence: match[2] }));
if (auditRows.map((row) => row.category).join(",") !== expectedCategories.join(",")) {
  failures.push(
    `docs/CLAIM_AUDIT.md: expected one A-KK row in order; found ${auditRows.map((row) => row.category).join(",") || "none"}`,
  );
}

const expectedEvidenceCounts = new Map([
  ["Empirical", 11],
  ["Vendor/benchmark", 10],
  ["Threat model", 12],
  ["Speculative", 4],
]);
for (const [evidence, expected] of expectedEvidenceCounts) {
  const actual = auditRows.filter((row) => row.evidence === evidence).length;
  if (actual !== expected) {
    failures.push(
      `docs/CLAIM_AUDIT.md: ${evidence} count=${actual}; expected ${expected}`,
    );
  }
}

const boundedClaimFiles = [
  "README.md",
  "README.ko.md",
  "docs/en/TAXONOMY.md",
  "docs/ko/TAXONOMY.md",
  "docs/en/EXAMPLES.md",
  "docs/ko/EXAMPLES.md",
];
const bannedUniversalClaims = [
  /occurs daily|매일 발생/i,
  /only the final response is safety-gated|최종 응답에만 safety/i,
  /exponential (?:attack-surface )?expansion|공격 표면 지수적 확장/i,
  /all tokens are equal|전부 평등/i,
  /attack ROI is high|공격 ROI 높/i,
  /current frontier models are patched|현재 주요 모델은 패치/i,
  /X42891/,
  /78%|200k|1M tok/i,
  /ultrasonic|초가청/i,
  /developers don't verify|개발자(?:가|는)? .*검증 안/i,
];
for (const path of boundedClaimFiles) {
  const text = readFileSync(join(root, path), "utf8");
  for (const pattern of bannedUniversalClaims) {
    if (pattern.test(text)) {
      failures.push(`${path}: unsupported universal claim matches ${pattern}`);
    }
  }
}

const inlineLink = /!?\[[^\]]*\]\(([^)]+)\)/g;
for (const path of markdownFiles(root)) {
  const text = readFileSync(path, "utf8");
  for (const match of text.matchAll(inlineLink)) {
    const rawTarget = match[1].trim().replace(/^<|>$/g, "");
    if (/^(?:https?:|mailto:|#)/i.test(rawTarget)) continue;

    const fileTarget = decodeURIComponent(rawTarget.split("#", 1)[0]);
    if (!fileTarget) continue;
    const absoluteTarget = resolve(dirname(path), fileTarget);
    if (!existsSync(absoluteTarget)) {
      failures.push(
        `${relative(root, path)}: missing internal target ${rawTarget}`,
      );
    } else if (!statSync(absoluteTarget).isFile()) {
      failures.push(
        `${relative(root, path)}: internal target is not a file: ${rawTarget}`,
      );
    }
  }
}

if (failures.length) {
  console.error(failures.map((failure) => `- ${failure}`).join("\n"));
  process.exit(1);
}

console.log(
  `Documentation checks passed: ${expectedCategories.length} categories, audited evidence rows, bilingual references, bounded claims, and internal file links.`,
);
