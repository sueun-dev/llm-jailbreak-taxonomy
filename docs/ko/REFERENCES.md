# 검증된 참고 문헌

> 🌐 **언어**: **한국어** · [English](../en/REFERENCES.md)

이 목록은 2026-07-11에 논문 원문 페이지와 공식 출판사·표준 페이지를
대조했습니다. 인용은 해당 출처가 시험한 시스템, 프롬프트, 지표, 시점만
뒷받침합니다. 현재 또는 보편적 exploit 가능성을 증명하지 않습니다.

## 프롬프트 탈옥과 자동 탐색

- **Shen et al. (2023), "Do Anything Now"** - 실전형 탈옥 코퍼스와 분류.
  [arXiv:2308.03825](https://arxiv.org/abs/2308.03825)
- **Zou et al. (2023), "Universal and Transferable Adversarial Attacks on
  Aligned Language Models"** - greedy gradient 기반 suffix 탐색과 측정된 전이.
  [arXiv:2307.15043](https://arxiv.org/abs/2307.15043)
- **Chao et al. (2023), "Jailbreaking Black Box Large Language Models in Twenty
  Queries"** - PAIR의 attacker-model 반복 개선.
  [arXiv:2310.08419](https://arxiv.org/abs/2310.08419)
- **Mehrotra et al. (2023/2024), "Tree of Attacks"** - TAP tree search,
  pruning, 한 LlamaGuard 구성을 포함한 평가.
  [arXiv:2312.02119](https://arxiv.org/abs/2312.02119)
- **Andriushchenko et al. (2024), "Jailbreaking Leading Safety-Aligned LLMs
  with Simple Adaptive Attacks"** - adaptive attack 평가. Many-shot 논문과는
  다른 연구입니다. [arXiv:2404.02151](https://arxiv.org/abs/2404.02151)
- **Anil et al. (2024), "Many-shot Jailbreaking"** - long-context 공격과
  demonstration 수에 따른 실증 스케일링.
  [Anthropic 연구 페이지](https://www.anthropic.com/research/many-shot-jailbreaking)
- **Russinovich, Salem, Eldan (2024/2025), "Crescendo"** - 점진적 multi-turn
  탈옥 평가. USENIX Security 2025 채택.
  [arXiv:2404.01833](https://arxiv.org/abs/2404.01833)
- **Hughes et al. (2024), "Best-of-N Jailbreaking"** - modality별 변형 반복
  샘플링. [arXiv:2412.03556](https://arxiv.org/abs/2412.03556)
- **Microsoft Security (2024), "Mitigating Skeleton Key"** - 2024년 4~5월
  벤더 시험과 모델별 예외.
  [공식 보고서](https://www.microsoft.com/en-us/security/blog/2024/06/26/mitigating-skeleton-key-a-new-type-of-generative-ai-jailbreak-technique/)
- **Palo Alto Networks Unit 42 (2024), "Deceptive Delight"** - 익명화된 모델
  8개, 8,000개 사례의 multi-turn 벤더 평가.
  [공식 보고서](https://unit42.paloaltonetworks.com/jailbreak-llms-through-camouflage-distraction/)
- **HiddenLayer (2025), "Policy Puppetry" / "Prompt Puppetry"** - 벤더 공개
  페이지가 두 이름을 사용하는 구조화 policy 형식 프롬프트 공격입니다.
  cross-model 주장은 독립 반복 검증이 아닌 벤더 근거로 취급합니다.
  [공식 보고서](https://www.hiddenlayer.com/insight/why-ai-systems-are-at-risk)

## 변환, 멀티모달, 파인튜닝

- **Yuan et al. (2023), "GPT-4 Is Too Smart To Be Safe"** - cipher 기반
  prompting 평가. [arXiv:2308.06463](https://arxiv.org/abs/2308.06463)
- **Yong et al. (2023), "Low-Resource Languages Jailbreak GPT-4"** - 저자원어
  번역의 안전 격차 측정. [arXiv:2310.02446](https://arxiv.org/abs/2310.02446)
- **Goh et al. (2021), "Multimodal Neurons"** - CLIP typographic 관찰.
  선행 연구이지 그 자체가 LLM 탈옥은 아닙니다.
  [OpenAI 출판물](https://openai.com/index/multimodal-neurons/)
- **Bailey et al. (2023/2024), "Image Hijacks"** - 시험한 LLaVA 행동을
  제어하는 최적화 적대 이미지. [arXiv:2309.00236](https://arxiv.org/abs/2309.00236)
- **Qi et al. (2023), "Fine-tuning Aligned Language Models Compromises
  Safety"** - GPT-3.5 Turbo 한 설정의 적대적 예시 10개 결과와 더 작은
  무해 데이터 저하. [arXiv:2310.03693](https://arxiv.org/abs/2310.03693)
- **Land and Bartolo (2024), "Fishing for Magikarp"** - under-trained 또는
  glitch token의 체계적 연구. [arXiv:2405.05417](https://arxiv.org/abs/2405.05417)

## 간접 주입과 에이전트

- **Greshake et al. (2023), "Not what you've signed up for"** - 검색 데이터의
  간접 프롬프트 주입. [arXiv:2302.12173](https://arxiv.org/abs/2302.12173)
- **Hines et al. (2024), "Defending Against Indirect Prompt Injection Attacks
  With Spotlighting"** - provenance 변환과 GPT-family 실험의 공격률 감소.
  [arXiv:2403.14720](https://arxiv.org/abs/2403.14720)
- **Zhan et al. (2024), "InjecAgent"** - tool-integrated agent 대상 간접 주입
  1,054개 test case. [arXiv:2403.02691](https://arxiv.org/abs/2403.02691)
- **Chen et al. (2024), "AgentPoison"** - 특정 memory·RAG agent 설계 대상
  poisoning. [arXiv:2407.12784](https://arxiv.org/abs/2407.12784)
- **Zhang et al. (2024), "Agent Security Bench"** - prompt, memory, planning,
  tool 단계 공격·방어 benchmark.
  [arXiv:2410.02644](https://arxiv.org/abs/2410.02644)

## 데이터 추출, 정렬 행동, 조건부 백도어

- **Nasr et al. (2023), "Scalable Extraction of Training Data"** - extractable
  memorization과 시험한 정렬 챗봇 대상 divergence attack.
  [arXiv:2311.17035](https://arxiv.org/abs/2311.17035)
- **Sharma et al. (2023/2025), "Towards Understanding Sycophancy"** - 다섯
  assistant의 sycophancy와 preference judgment 근거.
  [arXiv:2310.13548](https://arxiv.org/abs/2310.13548)
- **Hubinger et al. (2024), "Sleeper Agents"** - 의도적으로 훈련한 조건부
  백도어 proof-of-concept. 일반 배포 모델의 sandbagging 증거가 아닙니다.
  [arXiv:2401.05566](https://arxiv.org/abs/2401.05566)
- **Wallace et al. (2024), "The Instruction Hierarchy"** - privileged
  instruction 우선 훈련. [arXiv:2404.13208](https://arxiv.org/abs/2404.13208)

## 표준과 엔지니어링 위협 모델

- **NIST AI 100-2e2025** - GenAI evasion, poisoning, privacy, misuse를 포함한
  adversarial ML 용어와 taxonomy.
  [공식 출판물](https://www.nist.gov/publications/adversarial-machine-learning-taxonomy-and-terminology-attacks-and-mitigations-0)
- **OWASP LLM01:2025 Prompt Injection** - direct·indirect prompt injection.
  [공식 항목](https://genai.owasp.org/llmrisk/llm01-prompt-injection/)
- **OWASP LLM03:2025 Supply Chain** - model, data, dependency, platform
  provenance 위험. [공식 항목](https://genai.owasp.org/llmrisk/llm032025-supply-chain/)
- **OWASP LLM06:2025 Excessive Agency** - 과도한 기능, 권한, 자율성.
  [공식 항목](https://genai.owasp.org/llmrisk/llm062025-excessive-agency/)
- **OWASP LLM07:2025 System Prompt Leakage** - prompt에 비밀을 두거나
  authorization을 맡기지 말라는 지침.
  [공식 항목](https://genai.owasp.org/llmrisk/llm072025-system-prompt-leakage/)
- **OWASP LLM10:2025 Unbounded Consumption** - denial-of-service와
  denial-of-wallet. [공식 항목](https://genai.owasp.org/llmrisk/llm102025-unbounded-consumption/)

## 평가 프레임워크

- **Mazeika et al. (2024), HarmBench** - 표준화된 automated-red-teaming 평가.
  [arXiv:2402.04249](https://arxiv.org/abs/2402.04249)
- **Chao et al. (2024), JailbreakBench** - 명시적 threat model, artifact,
  scoring, leaderboard를 갖춘 공개 benchmark.
  [arXiv:2404.01318](https://arxiv.org/abs/2404.01318)

## 근거 경계

위 출처들은 하나의 보편적 탈옥 기전을 입증하지 않습니다. 과거 공격이 현재
모델에서도 유효하다는 뜻도 아닙니다. taxonomy에서 엔지니어링 또는 추측적
위협 모델로 표시한 카테고리는 새 근거 없이는 관찰되었거나 효과적인 공격으로
표현하면 안 됩니다.
