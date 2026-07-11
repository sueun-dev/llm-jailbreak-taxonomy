# Defense Matrix

> Language: English - [Korean](../ko/DEFENSE_MATRIX.md)

Candidate detection and mitigation controls for each category, grounded where possible in OWASP, NIST, and published evaluations. These are engineering recommendations, not proven guarantees.

> Fundamental principle: **defense in depth**. No cited single layer guarantees prevention across models and applications.
>
> Detection bullets are candidate signals unless a benchmark is cited. They can create false positives and must be validated on the deployment's own data.

---

## Universal principles (applies to any attack)

| Principle | Description | Anti-pattern |
|---|---|---|
| **Spotlighting / provenance marking** | Preserve and mark the source of untrusted text using an evaluated transformation | Concatenate external data with trusted instructions without a boundary |
| **Least Privilege** | Minimize tool, data, and network access | Agents with wildcard permissions |
| **External authorization** | Keep secrets, permissions, and security decisions outside prompt text | Treat a hidden prompt as a secret or access-control boundary |
| **Chain-of-Custody** | Track origin of intermediate agent outputs | No provenance logs |
| **Output validation** | Validate outputs before privileged use; add classifiers where evaluation supports them | Execute model output directly |
| **Human Review Gate** | High-risk actions require human approval | Full agent autonomy |
| **Continuous Red Team** | Update against new attack patterns | One-time eval at release |

---

## Category-by-category matrix

### A. Persona - B. Fiction - C. Authority - Q. Psychological - R. Logic

**Detection**:

- Persona-instruction classifier ("from now on you are...", "X mode...")
- Authority claim patterns (`sudo`, `admin`, `red team`, `[ai company name] internal`)
- Emergency/emotional pressure keywords

**Mitigation**:

- Policy-consistent training and evaluation on the relevant prompt families
- Instruction hierarchy: train and test prioritization of privileged instructions
- Independent output checks or human review for high-impact responses

---

### D. Encoding - O. Multilingual - P. Format

**Detection**:

- Encoding detection: entropy, base64 patterns, Unicode categories
- Language detection + low-resource flag
- Warn on non-standard output format requests

**Mitigation**:

- Re-classify after decoding (2-stage safety check)
- Evaluate every supported language and transformation separately
- Include failing languages and formats in targeted safety training, then re-test

---

### E. Context Manipulation - S. Memory - U. System Prompt Exfil

**Detection**:

- Fake structure markers (`-- END --`, `<assistant_prefix>`, `[System v]`)
- Memory-claim verification (compare to actual store)
- System prompt transform/exfil request signals

**Mitigation**:

- Place system prompt at **structural** position in model input (markup-separated)
- Store typed records with source, trust level, tenant, and write authorization
- Keep secrets and authorization logic out of system prompts; test leakage separately

---

### F. Multi-turn - G. Many-shot

**Detection**:

- Track turn count + response tone drift
- Detect in-context example patterns (refuse/accept alternation, Q/A repetition)
- Crescendo signal: semantic drift monitoring across turns

**Mitigation**:

- Re-evaluate each turn with the relevant conversation history and policy state
- Many-shot-resistant training (post-Anil et al. work)
- Do not treat "prior assistant responses" as facts when referenced

---

### H. Automated (GCG/PAIR/TAP)

**Detection**:

- Suffix perplexity anomaly (GCG produces gibberish suffix)
- Repeated probing pattern (PAIR/TAP)
- Request embedding cluster match to attack patterns

**Mitigation**:

- Adversarial training (include GCG samples)
- Rate-limit repeated automated probing where appropriate
- Safety classifier ensemble

---

### I. Skeleton Key

**Detection**:

- "Satisfy condition X then bypass safety" patterns
- "Only prefix with Warning" style agreement traps

**Mitigation**:

- Train and evaluate that user text cannot redefine application policy
- Apply independent output checks for high-risk content
- Re-test named model versions; historical disclosure does not prove current mitigation

---

### J. Indirect Injection

**Detection**:

- Tag external data sources (web, file, tool, MCP)
- Detect hidden text (color contrast, 0pt, zero-width, metadata)
- Alert when instruction-like patterns appear in "data" zone

**Mitigation**:

- **Spotlighting**: `<untrusted_source src="pdf:resume.pdf">...</untrusted_source>`
- Treat external data as "observations" never "instructions"
- Human approval after reading external data for high-risk actions
- Domain allowlist for link/URL fetches

---

### K. Multimodal

**Detection**:

- Image OCR -> text safety check
- "Ignore previous..." patterns inside images

**Mitigation**:

- Evaluate and safety-train the complete multimodal stack
- Image text tagged as `<image_text>` for spotlighting
- Cross-modal consistency check

---

### L. Agent/Tool

**Detection**:

- Instruction patterns within tool responses
- Metadata scan (`_meta`, EXIF)
- Path traversal, URL scheme anomalies

**Mitigation**:

- Tool outputs wrapped as `<tool_result>` only, never "instructions"
- Tool permissions minimized (`read_only`, path whitelist)
- Sanitize metadata
- Agent action logs + human audit

---

### M. Fine-tuning

**Detection**:

- Check safety-score distribution of fine-tune data
- Compare pre/post-tune safety-evaluation distributions
- Inspect dataset provenance and anomalous samples

**Mitigation**:

- Restrict who can fine-tune and which base models or adapters may be used
- Validate fine-tuning data with deployment-specific thresholds
- Mandatory automated safety eval after user fine-tuning

---

### N. Reasoning Models

**Detection**:

- Detect forged `<thinking>` tags
- Token-budget anomalies
- Thinking-vs-final-response divergence

**Mitigation**:

- Apply policy checks to any exposed rationale and to the final output
- Filter user-input thinking tags
- Cap reasoning budget

---

### T. Novel - V. Emerging 2025

**Detection**:

- Best-of-N: rate-limit bulk-variant requests from single user
- Test provenance handling across multiple controlled context positions
- Deceptive Delight: detect topic-mixture anomaly

**Mitigation**:

- N-sample rate limit
- Segment and evaluate long untrusted inputs while preserving provenance
- Evaluate mixed-topic prompts as complete conversations, not isolated keywords

---

### W. Data Extraction

**Detection**:

- Repetition patterns ("poem poem...")
- PII autocomplete attempts
- Monitor timing side channels

**Mitigation**:

- Detect repetition input, early-terminate
- PII-scrub training data
- Consider differential privacy only with formal privacy accounting and measured utility tradeoffs

---

### X. Alignment Flaws

**Detection**:

- Sycophancy score (agreement bias)
- False-citation patterns (fake DOI, URL)
- Authority-claim acceptance without verification

**Mitigation**:

- Anti-sycophancy training (Sharma et al.)
- Automated citation verification
- "I am an expert" claims do not change behavior

---

### Y. Agent Autonomy

**Detection**:

- Tool scope deviation (anomalous parameters)
- Goal drift (task description vs current action)
- Anomalous recursion depth, external endpoints

**Mitigation**:

- Sandboxing + capability tokens
- Action log + human approval gate (high-risk)
- Resource/network egress limits
- Propagate original context through delegation chains

---

### Z. Evaluation Evasion

**Detection**:

- Canary task (verify eval and deployment behave identically)
- Hubinger-style trigger search

**Mitigation**:

- Use blinded, randomized, and varied evaluations where feasible
- Compare evaluation and deployment telemetry for unexplained behavior shifts

---

### AA. Economic

**Detection**:

- Abnormal token consumption
- Detect reasoning loops
- Burst of parallel requests

**Mitigation**:

- Per-user budget cap
- Reasoning step cap
- Exponential backoff

---

### BB. Supply Chain

**Detection**:

- Package signature verification
- Typo-squatting detection (Levenshtein)
- Model weight checksums

**Mitigation**:

- SBOM (Software Bill of Materials)
- Signed plugins and models
- Pin and attest server/tool manifests; do not rely on a registry label alone
- pip/npm lockfile + audit

---

### CC. Reasoning Chain - DD. Multi-agent

**Detection**:

- Meta-instructions inside tool responses
- Agent-to-agent message provenance tagging

**Mitigation**:

- Enforce policy at each agent boundary while preserving relevant context and provenance
- Sybil defense (identity attestation)
- Enforce peer identity, authorization, and message provenance where the architecture supports them

---

### EE. Time/State

**Detection**:

- Log race conditions
- Stale-cache timestamp checks

**Mitigation**:

- Flush cache on policy update
- Strong consistency for safety decisions

---

### FF. Physical

**Detection**:

- Physical-action risk classifier

**Mitigation**:

- Physical actions require human approval
- Emergency-stop mechanism

---

### GG. Social

**Detection**:

- Notification fatigue metrics
- Memory-injection patterns (drip-feed)

**Mitigation**:

- User confirmation for memory changes
- Aggregate notifications

---

### HH. Model Internals - JJ. Theoretical (internal)

**Detection**:

- Glitch-token blacklist
- Activation anomalies (internal telemetry)

**Mitigation**:

- Tokenizer sanity check
- Restrict weight access
- Scope under-trained-token tests separately from internal-access feature-steering tests

---

### II. Defense Attack

**Mitigation**:

- Guard model ensemble (diversity)
- Defense-in-depth (no single-guard dependency)

---

### KK. Regulatory

**Mitigation**:

- Legal and compliance review
- Tamper-evident audit logs with a documented retention and lawful-deletion policy

---

## Baseline control set

1. **Input**: spotlighting + source tagging + classifier
2. **System**: instruction hierarchy + secrets and authorization outside prompts
3. **Model**: policy-consistent training + deployment-specific evaluation
4. **Output**: schema validation + risk-based classifier or human review
5. **Agent**: least privilege + sandbox + human gate
6. **Operations**: audit log + red team + continuous eval
7. **Supply chain**: signed components + SBOM + verify

## Evidence boundary

- Effectiveness is model-, version-, prompt-, metric-, and deployment-specific.
- Vendor reports are useful primary evidence for their own tests but are not independent replication.
- Threat-model categories without experiments should drive testing, not prevalence claims.
- Re-run evaluations after model, prompt, tool, retrieval, or policy changes.

See [`REFERENCES.md`](REFERENCES.md) for papers and vendor documentation.
