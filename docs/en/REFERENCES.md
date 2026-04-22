# References

> Language: English - [Korean](../ko/REFERENCES.md)

Major papers, reports, and official documentation. Chronological / topical.

> Author names and years are preserved for verification; specific vendor affiliations are abstracted as `[ai company name]` / `[ai model name]` where they appear in body text elsewhere. ArXiv IDs are the authoritative lookup.

---

## Foundational (2020-2022)

- **Perez & Ribeiro.** "Ignore Previous Prompt: Attack Techniques for Language Models." 2022. (First formalization of prompt injection)
- **Perez et al.** "Red Teaming Language Models with Language Models." 2022. (Seminal automated red teaming)
- **Goh et al.** "Multimodal Neurons in Artificial Neural Networks." 2021. (Typographic attack origin)
- **Bai et al.** "Constitutional AI: Harmlessness from AI Feedback." 2022. (Defense paradigm)

---

## Jailbreak techniques (2023)

- **Zou et al.** "Universal and Transferable Adversarial Attacks on Aligned Language Models." 2023. **(GCG)** - arXiv:2307.15043
- **Chao et al.** "Jailbreaking Black Box LLMs in Twenty Queries." 2023. **(PAIR)** - arXiv:2310.08419
- **Mehrotra et al.** "Tree of Attacks: Jailbreaking Black-Box LLMs Automatically." 2023. **(TAP)** - arXiv:2312.02119
- **Shen et al.** "Do Anything Now: Characterizing and Evaluating In-The-Wild Jailbreak Prompts on LLMs." 2023. - arXiv:2308.03825
- **Yong et al.** "Low-Resource Languages Jailbreak [ai model name]." 2023. - arXiv:2310.02446
- **Yuan et al.** "[ai model name] Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher." 2023. - arXiv:2308.06463
- **Qi et al.** "Fine-tuning Aligned Language Models Compromises Safety." 2023. - arXiv:2310.03693
- **Sharma et al.** "Towards Understanding Sycophancy in Language Models." 2023. - arXiv:2310.13548
- **Nasr et al.** "Scalable Extraction of Training Data from (Production) Language Models." 2023. (Carlini divergence) - arXiv:2311.17035

---

## Indirect injection / Agents (2023-2024)

- **Greshake et al.** "Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection." 2023. - arXiv:2302.12173
- **Bailey et al.** "Image Hijacks: Adversarial Images can Control Generative Models at Runtime." 2023. - arXiv:2309.00236

---

## 2024 research

- **Anil et al.** "Many-shot Jailbreaking." 2024. (Many-shot foundation)
- **Hughes et al.** "Best-of-N Jailbreaking." 2024. - arXiv:2412.03556
- **Russinovich et al.** "Great, Now Write an Article About That: The Crescendo Multi-Turn LLM Jailbreak Attack." 2024. - arXiv:2404.01833
- **Vendor security disclosure.** "Mitigating Skeleton Key, a new type of generative AI jailbreak technique." 2024-06.
- **Vendor threat research.** "Deceptive Delight: Jailbreak LLMs Through Camouflage and Distraction." 2024-10.
- **Hubinger et al.** "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training." 2024. - arXiv:2401.05566
- **Wallace et al.** "The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions." 2024. - arXiv:2404.13208
- **Andriushchenko et al.** "Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks." 2024. - arXiv:2404.02151

---

## Mech interp (JJ-related)

- **Templeton et al.** "Scaling Monosemanticity: Extracting Interpretable Features from a Frontier Model." 2024.
- **Bricken et al.** "Towards Monosemanticity: Decomposing Language Models with Dictionary Learning." 2023.

---

## Defense / Standards

- **OWASP LLM Top 10.** 2024-25. https://owasp.org/www-project-top-10-for-large-language-model-applications/
- **MITRE ATLAS.** Adversarial Threat Landscape for AI Systems. https://atlas.mitre.org/
- **NIST AI RMF.** AI Risk Management Framework. NIST AI 100-1.
- **EU AI Act.** Regulation (EU) 2024/1689.
- **[ai company name] Responsible Scaling Policy (RSP).** 2023-25.
- **[ai company name] Preparedness Framework.** 2023-25.
- **[ai company name] Frontier Safety Framework.** 2024.

---

## 2025-2026 (Emerging)

> This section evolves fast. PRs welcome.

- Multi-agent / agentic-deception research (2025+)
- Long-context needle attacks - mostly vendor-internal red team reports
- Mirror attack / hierarchical injection - primarily in agent-framework security write-ups

---

## Vendor resources (generic pointers)

Each major AI vendor publishes safety and security information. Search the vendor's name with the relevant keyword to find current contacts:

- **Trust Center** / **Responsible Disclosure** pages — typically at `{vendor}.com/trust` or `{vendor}.com/security`
- **System Cards** / **Model Cards** — per-model risk documentation
- **Responsible Use Guides** — for open-weight models

---

## Benchmarks / Toolkits

- **HarmBench** (Mazeika et al. 2024) - standardized jailbreak evaluation
- **AdvBench** (Zou et al.) - GCG paper dataset
- **JailbreakBench** (Chao et al.) - leaderboard
- **WildChat** - in-the-wild prompt data
- **Open guard models** - publicly released safety classifiers
- **PyRIT** - red team automation toolkit (vendor-published)

---

## Further reading (non-English)

- KISA AI Security Guidelines (Korea)
- NIPA AI Ethics Framework (Korea)
- KISA LLM Security Report (Korea, annual)

---

## Glossary

| Term | Description |
|---|---|
| **Jailbreak** | Bypass a model's safety policy to obtain a response it would otherwise refuse |
| **Prompt Injection** | Override model instructions via external input |
| **Indirect Injection** | Injection via indirect channels (documents, web, tool responses) |
| **RLHF** | Reinforcement Learning from Human Feedback |
| **ICL** | In-Context Learning |
| **Constitutional AI** | Alignment via explicit principles (published framework) |
| **SAE** | Sparse Autoencoder (mech interp) |
| **GCG** | Greedy Coordinate Gradient |
| **PAIR** | Prompt Automatic Iterative Refinement |
| **TAP** | Tree of Attacks with Pruning |
| **OOD** | Out-Of-Distribution |
| **Sandbagging** | Evaluation evasion / deliberate underperformance |
| **Deceptive Alignment** | Compliant during training, goal-pursuing after deployment |
| **Spotlighting** | Tag external inputs to mark them as non-instructions |

---

## Requesting additions via PR

When adding a new paper / report:
```markdown
- **Author et al.** "Title." Year. - arXiv:XXXX.XXXXX
```

The repository is a "living document". Active contributions welcome.
