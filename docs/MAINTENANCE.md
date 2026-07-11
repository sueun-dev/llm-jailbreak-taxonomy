# Repository Maintenance

> Language: [English](#english) · [한국어](#한국어)

## English

### Validate the documents

Node.js 22 or newer is required. Install the pinned development dependency
and run the complete documentation check:

```sh
npm install
npm test
```

`npm test` runs Markdown lint plus repository-specific checks for internal file
targets, A-KK category ordering and coverage, and parity between the English and
Korean reference lists. External URL availability can change independently of
this repository; check it separately when updating references:

```sh
for file in $(git ls-files '*.md'); do
  npx --yes markdown-link-check@3.13.7 --quiet "$file"
done
```

`.codeatlas/` is generated local analysis output. It is intentionally ignored
and is not source data.

### Regenerate a disposable audit mirror

The maintained checkout is the source of truth. An audit mirror must start from
the maintained checkout's current branch and commit, not from an older mirror.
Set paths for the local machine, and make sure the destination does not exist:

```sh
canonical=/path/to/maintained/llm-jailbreak-taxonomy
mirror=/path/to/disposable/audit-mirror/llm-jailbreak-taxonomy
branch=$(git -C "$canonical" branch --show-current)
remote=$(git -C "$canonical" remote get-url origin)

test -n "$branch"
test ! -e "$mirror"
git clone --no-hardlinks --single-branch --branch "$branch" "$canonical" "$mirror"
git -C "$mirror" remote set-url origin "$remote"
test "$(git -C "$canonical" rev-parse HEAD)" = "$(git -C "$mirror" rev-parse HEAD)"
```

Do not develop in the mirror. Before replacing an existing mirror, inspect its
status, untracked files, stashes, worktrees, and refs so unique work is not lost.

## 한국어

### 문서 검사

Node.js 22 이상이 필요합니다. 고정된 개발 의존성을 설치한 뒤 전체 문서
검사를 실행합니다.

```sh
npm install
npm test
```

`npm test`는 Markdown lint와 함께 내부 파일 대상, A-KK 카테고리 순서·누락,
영문·국문 참고문헌 URL 대응을 검사합니다. 외부 URL은 저장소와 무관하게 바뀔
수 있으므로 참고문헌을 수정할 때 별도로 검사합니다.

```sh
for file in $(git ls-files '*.md'); do
  npx --yes markdown-link-check@3.13.7 --quiet "$file"
done
```

`.codeatlas/`는 로컬에서 생성되는 분석 결과입니다. 원본 데이터가 아니며 Git
추적 대상에서도 제외합니다.

### 일회용 감사 미러 재생성

관리되는 체크아웃만 기준본으로 사용합니다. 감사 미러는 오래된 미러가 아니라
기준본의 현재 브랜치와 커밋에서 새로 만듭니다. 아래 경로를 해당 환경에 맞게
지정하고, 대상 경로가 존재하지 않는지 먼저 확인합니다.

```sh
canonical=/path/to/maintained/llm-jailbreak-taxonomy
mirror=/path/to/disposable/audit-mirror/llm-jailbreak-taxonomy
branch=$(git -C "$canonical" branch --show-current)
remote=$(git -C "$canonical" remote get-url origin)

test -n "$branch"
test ! -e "$mirror"
git clone --no-hardlinks --single-branch --branch "$branch" "$canonical" "$mirror"
git -C "$mirror" remote set-url origin "$remote"
test "$(git -C "$canonical" rev-parse HEAD)" = "$(git -C "$mirror" rev-parse HEAD)"
```

감사 미러에서는 개발하지 않습니다. 기존 미러를 교체하기 전에는 status,
미추적 파일, stash, worktree, ref를 확인해 고유 작업이 없는지 검사해야 합니다.
