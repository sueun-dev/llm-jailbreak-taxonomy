# Claim Audit (A-KK)

> 한국어 안내: 이 표는 각 카테고리에서 **어디까지 사실로 말할 수 있는지**를
> 고정합니다. `Threat model`과 `Speculative`는 효과가 입증된 공격이라는 뜻이
> 아닙니다. 상세 출처는 [English references](en/REFERENCES.md)와
> [한국어 참고문헌](ko/REFERENCES.md)에 같은 URL 집합으로 정리했습니다.

Audit date: **2026-07-11**.

Evidence labels:

- `Empirical`: a paper reports an experiment relevant to the bounded claim.
- `Vendor/benchmark`: an official vendor test, benchmark, or security standard
  supports the bounded claim; independent replication may be absent.
- `Threat model`: a plausible engineering test category, not an efficacy or
  prevalence claim.
- `Speculative`: a research boundary that must not be described as observed in
  deployed systems without new evidence.

| Category | Evidence | Bounded claim allowed by current evidence | Primary basis / overclaim to avoid |
|---|---|---|---|
| A | Threat model | Roleplay/persona prompts occur in public jailbreak corpora. | Shen et al.; do not assert a special character-consistency reward. |
| B | Threat model | Fictional framing is a robustness-test strategy. | No cited activation study; do not claim classifier-feature suppression. |
| C | Threat model | Models can fail to prioritize privileged instructions. | Instruction Hierarchy; do not reduce the cause to string matching. |
| D | Empirical | Cipher transformations bypassed safeguards on tested models. | Yuan et al.; no universal plaintext-overfitting claim. |
| E | Threat model | Forged delimiters/control text are direct-injection tests. | OWASP/NIST prompt injection; efficacy is architecture-specific. |
| F | Empirical | Crescendo achieved gradual multi-turn jailbreaks on evaluated systems. | Russinovich et al.; no claim about most providers' training mix. |
| G | Empirical | Many-shot effectiveness scaled with demonstrations in the reported study. | Anil et al.; no universal ICL-overrides-RLHF law. |
| H | Empirical | GCG, PAIR, and TAP automate prompt search using different algorithms. | Zou, Chao, Mehrotra; transfer is target-dependent. |
| I | Vendor/benchmark | Microsoft observed Skeleton Key on several models in April-May 2024. | Microsoft report includes exceptions; no permanent state-change claim. |
| J | Empirical | Retrieved untrusted text can cause indirect prompt injection. | Greshake; Spotlighting; no claim that all tokens are inherently equal. |
| K | Empirical | Optimized images controlled behavior of a tested vision-language model. | Bailey et al.; Goh is a precursor, not itself an LLM jailbreak. |
| L | Vendor/benchmark | Tool-integrated agents in benchmarks followed injected external content. | InjecAgent/ASB; impact depends on permissions and orchestration. |
| M | Empirical | Ten adversarial examples compromised one GPT-3.5 Turbo fine-tuning setup. | Qi et al.; do not generalize to every model or tuning method. |
| N | Speculative | Reasoning-budget abuse is an application resource test. | Do not claim hidden reasoning is outside RLHF or only final output is gated. |
| O | Empirical | Low-resource translations showed safety disparities on tested models. | Yong et al.; training-language distributions remain provider-specific. |
| P | Threat model | Output-format variation is useful for robustness testing. | No basis for saying rare formats are inherently less safe. |
| Q | Threat model | Emotional/credential framing is a red-team prompt family. | No cited evidence for a compassion-versus-safety reward conflict. |
| R | Threat model | Logic traps are a prompt robustness-test family. | No cited evidence for a logical-consistency reward conflict. |
| S | Vendor/benchmark | Poisoned memory/RAG entries redirected specified agent designs. | AgentPoison; validation and isolation can change the result. |
| T | Vendor/benchmark | BoN, Deceptive Delight, and Policy Puppetry reported dated evaluations. | Scope to named versions, prompts, metrics, judges, and dates. |
| U | Vendor/benchmark | System-prompt leakage can expose information placed in prompts. | OWASP: prompts are not secrets or authorization controls. |
| V | Speculative | Agent benchmarks expose injection, memory, planning, and tool surfaces. | No evidence of exponential attack-surface growth. |
| W | Empirical | Memorized training data was extracted from several tested model families. | Nasr et al.; arbitrary records are not universally recoverable. |
| X | Empirical | Five evaluated assistants showed sycophancy; preference data contributed. | Sharma et al.; agreement does not always override truth. |
| Y | Vendor/benchmark | Excessive functionality, permission, or autonomy can amplify impact. | OWASP; no need to attribute intent or goal-directed evasion. |
| Z | Speculative | Deliberately trained conditional backdoors persisted in a proof of concept. | Sleeper Agents is not evidence of ordinary deployed-model sandbagging. |
| AA | Vendor/benchmark | Unbounded inference can create DoS and denial-of-wallet risk. | OWASP; cost scaling and attacker ROI are system-specific. |
| BB | Vendor/benchmark | Models, data, adapters, packages, and platforms create supply-chain risk. | OWASP; do not make unsupported claims about developer behavior. |
| CC | Vendor/benchmark | Agent benchmarks include planning/reasoning-stage attacks. | ASB; no proven law tying risk to chain length. |
| DD | Threat model | A compromised peer agent is a valid trust-boundary scenario. | Authentication/provenance are implementation-specific. |
| EE | Threat model | Race conditions and stale state can affect LLM applications. | Conventional application risk, not a distinct proven jailbreak mechanism. |
| FF | Threat model | Model output can have physical impact when connected to actuators. | Impact requires external permissions and missing/failed interlocks. |
| GG | Threat model | Human fatigue and social engineering belong in system threat models. | Not an LLM-internal causal mechanism. |
| HH | Empirical | Under-trained tokens caused anomalous behavior in studied models. | Land and Bartolo; do not present old model-specific tokens as portable exploits. |
| II | Vendor/benchmark | TAP bypassed one evaluated LlamaGuard configuration. | Some defenses are non-model controls; not every defense is equally attackable. |
| JJ | Speculative | Internal feature steering is a research capability. | Current cited mech-interp work is not a deployed-model jailbreak result. |
| KK | Threat model | Legal/regulatory framing can be tested as governance abuse. | Not an established independent academic jailbreak class. |

## Audit result

- Categories reviewed: **37/37**.
- Categories with direct empirical evidence: **11**.
- Categories bounded by vendor, benchmark, or standard evidence: **10**.
- Engineering threat-model categories explicitly prevented from making efficacy
  claims: **12**.
- Speculative categories explicitly prevented from making deployed-system claims:
  **4**.
- Known unsupported universal causal claims identified in this audit and retained as fact: **0**.

The last count is the repository's accuracy gate: a category may remain useful as
a threat model, but it cannot be worded as an established mechanism without a
primary source. Accuracy is not represented as a statistical confidence score;
instead, every category has an auditable evidence boundary and all empirical
claims must point to a primary source.
