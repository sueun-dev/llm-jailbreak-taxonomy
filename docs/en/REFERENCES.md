# Audited References

> Language: English - [Korean](../ko/REFERENCES.md)

This catalog was checked against primary paper pages and official publisher or
standards pages on 2026-07-11. A citation supports only the systems, prompts,
metrics, and dates evaluated by that source. It does not prove current or
universal exploitability.

## Prompt jailbreaks and automated search

- **Shen et al. (2023), "Do Anything Now"** - in-the-wild jailbreak corpus and
  taxonomy. [arXiv:2308.03825](https://arxiv.org/abs/2308.03825)
- **Zou et al. (2023), "Universal and Transferable Adversarial Attacks on
  Aligned Language Models"** - greedy gradient-based adversarial suffix search
  and measured transfer. [arXiv:2307.15043](https://arxiv.org/abs/2307.15043)
- **Chao et al. (2023), "Jailbreaking Black Box Large Language Models in Twenty
  Queries"** - PAIR's attacker-model refinement loop.
  [arXiv:2310.08419](https://arxiv.org/abs/2310.08419)
- **Mehrotra et al. (2023/2024), "Tree of Attacks"** - TAP tree search,
  pruning, and evaluations including one LlamaGuard setup.
  [arXiv:2312.02119](https://arxiv.org/abs/2312.02119)
- **Andriushchenko et al. (2024), "Jailbreaking Leading Safety-Aligned LLMs
  with Simple Adaptive Attacks"** - adaptive attack evaluation; this is not the
  Many-shot paper. [arXiv:2404.02151](https://arxiv.org/abs/2404.02151)
- **Anil et al. (2024), "Many-shot Jailbreaking"** - long-context attacks and
  empirical scaling with the number of demonstrations.
  [Anthropic research page](https://www.anthropic.com/research/many-shot-jailbreaking)
- **Russinovich, Salem, and Eldan (2024/2025), "Crescendo"** - gradual
  multi-turn jailbreak evaluation; accepted at USENIX Security 2025.
  [arXiv:2404.01833](https://arxiv.org/abs/2404.01833)
- **Hughes et al. (2024), "Best-of-N Jailbreaking"** - repeated augmented
  sampling across modalities. [arXiv:2412.03556](https://arxiv.org/abs/2412.03556)
- **Microsoft Security (2024), "Mitigating Skeleton Key"** - vendor tests from
  April-May 2024, including reported model-specific exceptions.
  [Official report](https://www.microsoft.com/en-us/security/blog/2024/06/26/mitigating-skeleton-key-a-new-type-of-generative-ai-jailbreak-technique/)
- **Palo Alto Networks Unit 42 (2024), "Deceptive Delight"** - multi-turn
  vendor evaluation across 8,000 cases and eight anonymized models.
  [Official report](https://unit42.paloaltonetworks.com/jailbreak-llms-through-camouflage-distraction/)
- **HiddenLayer (2025), "Policy Puppetry" / "Prompt Puppetry"** - the vendor's
  public pages use both names for a structured-policy prompt attack; treat its
  cross-model claims as vendor evidence, not independent replication.
  [Official report](https://www.hiddenlayer.com/insight/why-ai-systems-are-at-risk)

## Transformations, modalities, and fine-tuning

- **Yuan et al. (2023), "GPT-4 Is Too Smart To Be Safe"** - cipher-based
  prompting evaluation. [arXiv:2308.06463](https://arxiv.org/abs/2308.06463)
- **Yong et al. (2023), "Low-Resource Languages Jailbreak GPT-4"** - measured
  safety disparities under low-resource-language translation.
  [arXiv:2310.02446](https://arxiv.org/abs/2310.02446)
- **Goh et al. (2021), "Multimodal Neurons"** - CLIP typographic observations;
  a precursor, not itself an LLM jailbreak.
  [OpenAI publication](https://openai.com/index/multimodal-neurons/)
- **Bailey et al. (2023/2024), "Image Hijacks"** - optimized adversarial images
  controlling tested LLaVA behavior. [arXiv:2309.00236](https://arxiv.org/abs/2309.00236)
- **Qi et al. (2023), "Fine-tuning Aligned Language Models Compromises
  Safety"** - 10-example adversarial fine-tuning result on one GPT-3.5 Turbo
  setup and smaller benign-data degradation.
  [arXiv:2310.03693](https://arxiv.org/abs/2310.03693)
- **Land and Bartolo (2024), "Fishing for Magikarp"** - systematic study of
  under-trained or glitch tokens. [arXiv:2405.05417](https://arxiv.org/abs/2405.05417)

## Indirect injection and agents

- **Greshake et al. (2023), "Not what you've signed up for"** - indirect
  prompt injection through retrieved data.
  [arXiv:2302.12173](https://arxiv.org/abs/2302.12173)
- **Hines et al. (2024), "Defending Against Indirect Prompt Injection Attacks
  With Spotlighting"** - provenance transformations and measured attack-rate
  reduction in its GPT-family experiments.
  [arXiv:2403.14720](https://arxiv.org/abs/2403.14720)
- **Zhan et al. (2024), "InjecAgent"** - 1,054 indirect-injection test cases
  across tool-integrated agents. [arXiv:2403.02691](https://arxiv.org/abs/2403.02691)
- **Chen et al. (2024), "AgentPoison"** - poisoning attacks against specified
  memory and RAG agent designs. [arXiv:2407.12784](https://arxiv.org/abs/2407.12784)
- **Zhang et al. (2024), "Agent Security Bench"** - prompt, memory, planning,
  and tool-stage attack/defense benchmark.
  [arXiv:2410.02644](https://arxiv.org/abs/2410.02644)

## Data extraction, alignment behavior, and conditional backdoors

- **Nasr et al. (2023), "Scalable Extraction of Training Data"** - extractable
  memorization and a divergence attack against a tested aligned chatbot.
  [arXiv:2311.17035](https://arxiv.org/abs/2311.17035)
- **Sharma et al. (2023/2025), "Towards Understanding Sycophancy"** -
  sycophancy across five assistants and evidence about preference judgments.
  [arXiv:2310.13548](https://arxiv.org/abs/2310.13548)
- **Hubinger et al. (2024), "Sleeper Agents"** - deliberately trained
  proof-of-concept conditional backdoors; not evidence of general deployed-model
  sandbagging. [arXiv:2401.05566](https://arxiv.org/abs/2401.05566)
- **Wallace et al. (2024), "The Instruction Hierarchy"** - training models to
  prioritize privileged instructions. [arXiv:2404.13208](https://arxiv.org/abs/2404.13208)

## Standards and engineering threat models

- **NIST AI 100-2e2025** - adversarial machine-learning terminology and
  taxonomy, including GenAI evasion, poisoning, privacy, and misuse attacks.
  [Official publication](https://www.nist.gov/publications/adversarial-machine-learning-taxonomy-and-terminology-attacks-and-mitigations-0)
- **OWASP LLM01:2025 Prompt Injection** - direct and indirect prompt-injection
  risk. [Official entry](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- **OWASP LLM03:2025 Supply Chain** - model, data, dependency, and platform
  provenance risks. [Official entry](https://genai.owasp.org/llmrisk/llm032025-supply-chain/)
- **OWASP LLM06:2025 Excessive Agency** - excessive functionality,
  permissions, and autonomy. [Official entry](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)
- **OWASP LLM07:2025 System Prompt Leakage** - prompts should not contain
  secrets or enforce authorization. [Official entry](https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/)
- **OWASP LLM10:2025 Unbounded Consumption** - denial-of-service and
  denial-of-wallet risks. [Official entry](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/)

## Evaluation frameworks

- **Mazeika et al. (2024), HarmBench** - standardized automated-red-teaming
  evaluation. [arXiv:2402.04249](https://arxiv.org/abs/2402.04249)
- **Chao et al. (2024), JailbreakBench** - open benchmark with explicit threat
  models, artifacts, scoring, and leaderboard.
  [arXiv:2404.01318](https://arxiv.org/abs/2404.01318)

## Evidence boundary

The sources above do **not** establish one universal jailbreak mechanism. They
also do not establish that a historical attack remains effective against a
current model. Categories marked as engineering or speculative threat models in
the taxonomy require new evidence before they can be described as observed or
effective.
