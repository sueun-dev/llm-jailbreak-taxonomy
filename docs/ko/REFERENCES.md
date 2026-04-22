# 참고 문헌 (References)

> 🌐 **언어**: **한국어** · [English](../en/REFERENCES.md)

주요 논문·리포트·공식 문서. 연도순 / 주제별.

> 저자명·연도는 검증 가능성 위해 유지. 본문 다른 곳에서 벤더별 명칭은 `[ai company name]` / `[ai model name]` 플레이스홀더로 추상화. arXiv ID가 최종 검증 기준.

---

## Foundational (2020-2022)

- **Perez & Ribeiro.** "Ignore Previous Prompt: Attack Techniques for Language Models." 2022. (Prompt injection 최초 정식화)
- **Perez et al.** "Red Teaming Language Models with Language Models." 2022. (자동화 red team 효시)
- **Goh et al.** "Multimodal Neurons in Artificial Neural Networks." 2021. (Typographic attack 기원)
- **Bai et al.** "Constitutional AI: Harmlessness from AI Feedback." 2022. (방어 패러다임)

---

## Jailbreak 기법 (2023)

- **Zou et al.** "Universal and Transferable Adversarial Attacks on Aligned Language Models." 2023. **(GCG)** — arXiv:2307.15043
- **Chao et al.** "Jailbreaking Black Box LLMs in Twenty Queries." 2023. **(PAIR)** — arXiv:2310.08419
- **Mehrotra et al.** "Tree of Attacks: Jailbreaking Black-Box LLMs Automatically." 2023. **(TAP)** — arXiv:2312.02119
- **Shen et al.** "Do Anything Now: Characterizing and Evaluating In-The-Wild Jailbreak Prompts on LLMs." 2023. — arXiv:2308.03825
- **Yong et al.** "Low-Resource Languages Jailbreak [ai model name]." 2023. — arXiv:2310.02446
- **Yuan et al.** "[ai model name] Is Too Smart To Be Safe: Stealthy Chat with LLMs via Cipher." 2023. — arXiv:2308.06463
- **Qi et al.** "Fine-tuning Aligned Language Models Compromises Safety." 2023. — arXiv:2310.03693
- **Sharma et al.** "Towards Understanding Sycophancy in Language Models." 2023. — arXiv:2310.13548
- **Nasr et al.** "Scalable Extraction of Training Data from (Production) Language Models." 2023. (Carlini divergence) — arXiv:2311.17035

---

## Indirect Injection · Agents (2023-2024)

- **Greshake et al.** "Not what you've signed up for: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection." 2023. — arXiv:2302.12173
- **Bailey et al.** "Image Hijacks: Adversarial Images can Control Generative Models at Runtime." 2023. — arXiv:2309.00236

---

## 2024 Research

- **Anil et al.** "Many-shot Jailbreaking." 2024. (Many-shot 기초)
- **Hughes et al.** "Best-of-N Jailbreaking." 2024. — arXiv:2412.03556
- **Russinovich et al.** "Great, Now Write an Article About That: The Crescendo Multi-Turn LLM Jailbreak Attack." 2024. — arXiv:2404.01833
- **벤더 보안 공개.** "Mitigating Skeleton Key, a new type of generative AI jailbreak technique." 2024-06.
- **벤더 위협 연구.** "Deceptive Delight: Jailbreak LLMs Through Camouflage and Distraction." 2024-10.
- **Hubinger et al.** "Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training." 2024. — arXiv:2401.05566
- **Wallace et al.** "The Instruction Hierarchy: Training LLMs to Prioritize Privileged Instructions." 2024. — arXiv:2404.13208
- **Andriushchenko et al.** "Jailbreaking Leading Safety-Aligned LLMs with Simple Adaptive Attacks." 2024. — arXiv:2404.02151

---

## Mech Interp (JJ 관련)

- **Templeton et al.** "Scaling Monosemanticity: Extracting Interpretable Features from a Frontier Model." 2024.
- **Bricken et al.** "Towards Monosemanticity: Decomposing Language Models with Dictionary Learning." 2023.

---

## 방어·표준

- **OWASP LLM Top 10.** 2024-25. https://owasp.org/www-project-top-10-for-large-language-model-applications/
- **MITRE ATLAS.** Adversarial Threat Landscape for AI Systems. https://atlas.mitre.org/
- **NIST AI RMF.** AI Risk Management Framework. NIST AI 100-1.
- **EU AI Act.** Regulation (EU) 2024/1689.
- **[ai company name] Responsible Scaling Policy (RSP).** 2023-25.
- **[ai company name] Preparedness Framework.** 2023-25.
- **[ai company name] Frontier Safety Framework.** 2024.

---

## 2025-2026 (Emerging)

> 이 섹션은 빠르게 변합니다. PR로 추가 환영.

- Multi-agent · agentic deception 관련 연구 다수 (2025+)
- Long-context needle attacks — 대부분 벤더 내부 red team 리포트
- Mirror attack · hierarchical injection — 주로 에이전트 프레임워크 보안 기술 보고서

---

## 벤더 리소스 (generic pointers)

주요 AI 벤더는 safety·security 정보를 공개합니다. 벤더명 + 관련 키워드로 검색하여 최신 연락처 확인:

- **Trust Center** / **Responsible Disclosure** 페이지 — 보통 `{vendor}.com/trust` 또는 `{vendor}.com/security`
- **System Cards** / **Model Cards** — 모델별 리스크 문서
- **Responsible Use Guide** — 오픈 웨이트 모델용

---

## 벤치마크·툴킷

- **HarmBench** (Mazeika et al. 2024) — 표준화 jailbreak 평가
- **AdvBench** (Zou et al.) — GCG 논문 데이터셋
- **JailbreakBench** (Chao et al.) — 리더보드
- **WildChat** — in-the-wild 프롬프트 데이터
- **오픈 guard model** — 공개된 safety classifier
- **PyRIT** — red team 자동화 툴킷 (벤더 공개)

---

## 더 읽을거리 (한국어)

- KISA AI 보안 가이드라인
- NIPA AI 윤리 프레임워크
- 한국인터넷진흥원 LLM 보안 보고서 (연간)

---

## 용어집

| 용어 | 설명 |
|---|---|
| **Jailbreak** | 모델의 safety 정책을 우회해 본래 거절할 응답을 얻어내기 |
| **Prompt Injection** | 외부 입력으로 모델 지시 override |
| **Indirect Injection** | 간접 채널(문서, 웹, 툴 응답)로 주입 |
| **RLHF** | Reinforcement Learning from Human Feedback |
| **ICL** | In-Context Learning |
| **Constitutional AI** | 명시적 원칙 기반 정렬 (공개 프레임워크) |
| **SAE** | Sparse Autoencoder (mech interp) |
| **GCG** | Greedy Coordinate Gradient |
| **PAIR** | Prompt Automatic Iterative Refinement |
| **TAP** | Tree of Attacks with Pruning |
| **OOD** | Out-Of-Distribution |
| **Sandbagging** | 평가 회피 / 의도적 저성능 |
| **Deceptive Alignment** | 훈련 중 순응, 배포 후 목표 추구 |
| **Spotlighting** | 외부 입력을 태그로 마킹해 instruction 아님을 표시 |

---

## PR로 추가 요청

새 논문·리포트 추가 시:
```markdown
- **Author et al.** "Title." Year. — arXiv:XXXX.XXXXX
```

저장소는 "living document". 활발한 기여 환영.
