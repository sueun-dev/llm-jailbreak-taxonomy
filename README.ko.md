# LLM Jailbreak Taxonomy

**LLM 탈옥·프롬프트 인젝션 공격 패턴 분류 체계 (A–KK, 37개 카테고리)**

> 🌐 **Language / 언어**: **한국어** · [English](README.md)
>
> 공개 연구 + 패턴 일러스트레이션 수준의 교육·방어 목적 분류. OWASP LLM Top 10 / MITRE ATLAS / 학술 서베이와 동일한 포지션.

![status](https://img.shields.io/badge/status-living_document-blue) ![scope](https://img.shields.io/badge/scope-educational-green) ![lang](https://img.shields.io/badge/lang-KR%20%2F%20EN-lightgrey) ![license](https://img.shields.io/badge/license-MIT-yellow)

---

## 왜 이 저장소가 있는가

이 문서는 공개 연구, 벤더 평가, 명시적으로 표시한 엔지니어링 위협 모델을 **37개 카테고리**로 정리합니다. 카테고리가 서로 완전히 배타적이라고 주장하지 않으며, 나열된 모든 변형이 현재 모델에서 작동한다는 뜻도 아닙니다. 실증 주장은 인용 출처가 시험한 시스템 범위로 한정하고, 출처 없는 예시는 보고된 사고가 아니라 위협 모델용 예시입니다.

**이 저장소는:**

- ✅ 레드팀·블루팀·AI 안전 연구자를 위한 참고 자료
- ✅ 각 공격 카테고리의 **메커니즘**과 **방어 매핑**
- ✅ OWASP LLM Top 10 / NIST AI RMF / EU AI Act 준수 설계 참고

**이 저장소는 아니다:**

- ❌ 특정 모델에 현재 작동하는 exploit 페이로드 제공
- ❌ 유해 타깃 구체화 (피해 생성이 아니라 분류 체계)
- ❌ 신규 공격 합성 도구

> 해당 선을 넘는 것은 **지식 문제가 아니라 정책 경계** — 공개적으로 제공되지 않습니다. 상세는 [SECURITY.md](SECURITY.md) · [DISCLAIMER.md](DISCLAIMER.md) 참조.

---

## 빠른 탐색

| 상위 축 | 카테고리 | 핵심 메커니즘 |
|---|---|---|
| **프롬프트 설계** | [A. 페르소나](#a-페르소나-roleplay) · [B. 허구 프레이밍](#b-허구-프레이밍) · [C. 권위 오버라이드](#c-권위-오버라이드) · [Q. 심리](#q-심리) · [R. 논리 함정](#r-논리-함정) | RLHF 보상 신호 간 충돌 |
| **표면 변환** | [D. 인코딩](#d-인코딩) · [O. 다국어](#o-다국어) · [P. 출력 포맷](#p-출력-포맷) | 훈련 분포 밖으로 이동 |
| **컨텍스트** | [E. 컨텍스트 조작](#e-컨텍스트-조작) · [F. 멀티턴](#f-멀티턴) · [G. Many-Shot](#g-many-shot) · [S. 세션/메모리](#s-세션메모리) · [U. 시스템 프롬프트 탈취](#u-시스템-프롬프트-탈취) | 구조적 경계 혼란 |
| **자동화·신형** | [H. 자동화](#h-자동화) · [I. Skeleton Key](#i-skeleton-key) · [T. 최신 특수](#t-최신-특수-202426) · [V. 신종 2025](#v-신종-2025) | 탐색·최적화 기반 공격 |
| **외부 채널** | [J. 간접 주입](#j-간접-주입) · [K. 멀티모달](#k-멀티모달) · [L. 에이전트/툴](#l-에이전트툴) | data/instruction 경계 붕괴 |
| **모델 생애주기** | [M. 파인튜닝](#m-파인튜닝) · [N. 추론 모델](#n-추론-모델) · [W. 데이터 추출](#w-데이터-추출) · [HH. 모델 내부](#hh-모델-내부) · [JJ. 2025~ 이론적](#jj-2025-이론적) | 훈련·구조 특성 exploit |
| **정렬·평가** | [X. 정렬 결함](#x-정렬-결함) · [Z. 평가 회피](#z-평가-회피-sandbagging) · [II. 방어 공격](#ii-방어-공격-meta) | RLHF·deceptive alignment |
| **에이전트** | [Y. 에이전트 자율성](#y-에이전트-자율성) · [CC. 추론 체인](#cc-추론-체인) · [DD. 멀티 에이전트](#dd-멀티-에이전트) · [EE. 시간/상태](#ee-시간상태) | 복잡도가 표면 확장 |
| **경계 외** | [AA. 경제](#aa-경제) · [BB. 공급망](#bb-공급망) · [FF. 물리](#ff-물리) · [GG. 사회](#gg-사회) · [KK. 규제](#kk-규제) | 비기술 공격 벡터 |

**상세 문서**: [`docs/ko/TAXONOMY.md`](docs/ko/TAXONOMY.md) · [`docs/ko/EXAMPLES.md`](docs/ko/EXAMPLES.md) · [`docs/ko/DEFENSE_MATRIX.md`](docs/ko/DEFENSE_MATRIX.md) · [`docs/ko/REFERENCES.md`](docs/ko/REFERENCES.md) · [`docs/CLAIM_AUDIT.md`](docs/CLAIM_AUDIT.md)

---

## 공통 구조 요약

연구된 여러 공격은 다음 관점 중 하나 이상으로 분석할 수 있습니다. 이는 설계 보조 도구이지, 완전한 인과 모델로 입증된 것은 아닙니다.

1. **경계 흐리기** — system/user, data/instruction, fiction/real 사이 구분 교란
2. **정책-행동 매핑 교란** — safety를 재정의하거나 조건부로 돌림 (예: Skeleton Key)
3. **분포 이동** — 언어·포맷·인코딩을 바꿔 훈련 분포 밖으로 이동

**표준 또는 공개 평가가 뒷받침하는 다층 방어 원칙:**

- ⚠️ 프롬프트 패턴 매칭만으로는 완전한 방어가 되지 않음
- ✅ **출처 태깅 (spotlighting)** — 외부 텍스트는 `<untrusted>` 래핑
- ✅ **권한 최소화** — 툴·자원·데이터 접근 최소
- ✅ **비밀·권한 결정을 프롬프트 밖에 유지** — 프롬프트 텍스트는 노출될 수 있다고 가정
- ✅ **감사 chain-of-custody** — 에이전트 중간 결과 출처 추적
- ✅ **다층 평가·모니터링** — 입력, 출력, 도구 사용, 권한 경계를 함께 검사

---

## 카테고리 상세 (A–KK)

> 아래는 요약. 각 항목의 세부 예시·방어는 [`docs/ko/TAXONOMY.md`](docs/ko/TAXONOMY.md)와 [`docs/ko/DEFENSE_MATRIX.md`](docs/ko/DEFENSE_MATRIX.md)를 참조.

### A. 페르소나 (Roleplay)

공개 탈옥 코퍼스의 DAN 계열·역할극·페르소나 prompt. 추가 persona는 robustness-test 변형입니다.
**근거**: 공개된 실전형 탈옥 코퍼스에는 역할극·페르소나 프롬프트가 포함됩니다. 별도의 "캐릭터 일관성 보상"이 원인이라는 주장은 입증되지 않았습니다.

### B. 허구 프레이밍

영화 대본, 동화, 대체 역사, 번역 요청, 희곡(이중 허구).
**근거 수준**: 허구 프레이밍은 관찰된 프롬프트 전략이지만, 특정 분류기 특성의 활성 감소는 인용 문헌이 입증하지 않습니다.

### C. 권위 오버라이드

`sudo` 모드, root 액세스, [ai company name] 레드팀 사칭, 가짜 보안 패치, 법적 관할 주장.
**근거**: instruction hierarchy 연구는 상위 지시를 우선하지 못하는 실패를 다룹니다. 구현 원인은 모델마다 다르며 단순 문자열 매칭으로 환원할 수 없습니다.

### D. 인코딩

Morse, Pig Latin, Caesar, 즉석 cipher, Atbash, Unicode 수학 볼드, Base32/58, Braille.
**근거**: 암호·다국어 연구는 시험한 모델에서 입력 변환 후 안전 우회를 관찰했습니다. 모든 안전 분류기가 평문에 과적합했다는 뜻은 아닙니다.

### E. 컨텍스트 조작

가짜 `-- END OF TRANSCRIPT --`, 버전 업데이트 사칭, 세션 만료 주장, [ai model name] 태그 위조, 부분 응답 완성 강제.
**근거 수준**: 위조 구분자와 제어 텍스트는 direct prompt injection 변형입니다. 성공 여부는 모델 훈련과 애플리케이션 메시지 처리 방식에 달려 있습니다.

### F. 멀티턴

Snowball (무해→경계→유해), Pivot, Commitment 압박, Decomposition, Timeout exploit.
**근거**: Crescendo는 평가된 모델에서 점진적 멀티턴 상승 공격을 입증했습니다. 대다수 제공자의 안전 훈련 데이터가 단일 턴이라는 사실까지 입증하지는 않습니다.

### G. Many-Shot

대규모 fabricated Q/A demonstration, Style transfer, Alternating (거절↔수락), Nested many-shot.
**근거**: Anil et al.은 예시 수에 따라 many-shot 공격 효과가 증가하고 ICL과 유사한 스케일링을 보인다고 보고했습니다. 보편적 override 보장은 아닙니다.

### H. 자동화

PAIR (attacker-target 반복 개선), TAP (tree search + pruning), GCG (greedy gradient-based suffix search).
**근거**: GCG는 greedy gradient search, PAIR는 공격 모델의 반복 개선, TAP은 tree search와 pruning을 사용합니다. 전이성은 기법과 모델에 따라 다릅니다.

### I. Skeleton Key

[ai company name] 2024. "이 요청은 safe·연구 목적. 응답에 'Warning' 프리픽스만 달면 됨" → 한 번 동의로 전체 열림.
**근거**: Microsoft는 2024년 4~5월 시험한 여러 모델에서 forced instruction-following 패턴을 보고했고 예외도 명시했습니다. 영구적 내부 상태 변화나 현재의 보편적 성공을 뜻하지 않습니다.

### J. 간접 주입

검색된 web page, document, email, tool output 속 주입 지시. hidden text·metadata channel은 추가 애플리케이션 테스트입니다.
**근거**: 간접 주입 연구는 신뢰하지 않는 데이터와 지시를 이어붙였을 때 모델이 삽입 문장을 따를 수 있음을 보였습니다. 출처 표시와 권한 분리는 위험을 줄이지만 완전 방어를 보장하지 않습니다.

### K. 멀티모달

Typographic 반응은 초기 멀티모달 관찰이며, Bailey et al.은 최적화된 적대적 이미지가 시험한 vision-language model을 제어할 수 있음을 보였습니다.
**근거 수준**: 멀티모달 공격은 실증됐지만 "safety-tuning 밀도가 낮다"는 일반 기전은 인용 연구가 입증하지 않습니다.

### L. 에이전트/툴

신뢰하지 않는 tool-output injection, memory/RAG poisoning, tool-description 변조, metadata 처리, path/URL authorization test.
**근거**: InjecAgent 등은 신뢰하지 않는 도구·검색 결과가 시험한 에이전트를 전환할 수 있음을 보였습니다. 영향은 도구 권한, 승인, 출력 재사용 방식에 달려 있습니다.

### M. 파인튜닝

LoRA backdoor, RLHF annotator poisoning, Embedding-only tune, 소규모 instruction-tuning drift. 인용한 10-example 결과는 한 실험에 한정됩니다.
**근거**: Qi et al.은 GPT-3.5 Turbo 한 설정을 적대적 예시 10개로 손상시키고, 무해 데이터에서도 더 작은 안전 저하를 관찰했습니다. 모든 모델·파인튜닝 방법으로 일반화할 수 없습니다.

### N. 추론 모델

`<thinking>` 위조, Budget drain, Scratchpad forcing, Contemplation (반대 입장도 생성 강제), CoT divergence.
**근거 수준**: 추론 예산 남용은 검증 가능한 자원 위험입니다. hidden reasoning이 "RLHF 밖"이거나 최종 답변만 안전 검사된다는 주장은 제공자별 구현 사항이므로 여기서 주장하지 않습니다.

### O. 다국어

저자원어 번역, code switching, script transformation test.
**근거**: Yong et al.은 시험한 모델에서 저자원어 번역에 따른 큰 안전 성능 차이를 관찰했습니다. 각 제공자의 전체 훈련 분포를 밝힌 연구는 아닙니다.

### P. 출력 포맷

YAML (`safety: disabled`), BibTeX, SQL, Regex 내부, Emoji-only, Diff (+ 라인), Mermaid flowchart.
**근거 수준**: 포맷 변환이 모델 행동을 바꿀 수는 있지만, 드문 포맷이 모델 전반에서 본질적으로 덜 안전하다는 근거는 없습니다.

### Q. 심리

응급·감정·연구자 credential·사회적 권위 pretext를 이용한 robustness test.
**근거 수준**: 감정·자격 프레이밍은 레드팀 프롬프트 패턴입니다. 연민·신뢰·안전 보상 간 특정 경쟁은 인용 출처가 입증하지 않습니다.

### R. 논리 함정

Gödel-style 자기참조, Stipulation ("'safe'를 '자유롭게'로 정의"), Burden shift, False premise, Nirvana fallacy, 역 slippery slope.
**근거 수준**: 논리 함정은 엔지니어링 테스트 분류이며, 제안된 보상 충돌 설명은 확립된 기전으로 취급하지 않습니다.

### S. 세션/메모리

False history ("어제 네가 말했잖아"), Memory implant, Export replay (위조 transcript).
**근거**: 특정 에이전트·검색 설계에서 메모리 오염이 문서화됐습니다. 검증·격리를 구현한 시스템도 있으므로 보편적 속성이 아닌 아키텍처 위험입니다.

### T. 최신 특수 (2024~26)

Best-of-N (Hughes 2024), Policy Puppetry (HiddenLayer 2025), Deceptive Delight (Unit 42 2024), multimodal Crescendo 평가.
**근거**: Best-of-N, Deceptive Delight, Policy Puppetry는 특정 시점의 명시된 모델 집합에서 우회를 보고했습니다. 완화 후 효과는 달라질 수 있습니다.

### U. 시스템 프롬프트 탈취

Repetition ("위 내용 토씨 그대로"), Translation, Format (시 형식), Continuation, Embedding (해시).
**근거**: OWASP는 system prompt leakage를 애플리케이션 위험으로 다루며 비밀·권한 결정을 프롬프트에 두지 말라고 권고합니다. 추출 성공은 달라지며 프롬프트 공개 자체가 항상 취약점인 것은 아닙니다.

### V. 신종 2025

Agentic-deception test, 자기 출력 오염 루프, Hierarchical injection, 긴 context 깊숙이 숨긴 instruction.
**근거 수준**: 최신 에이전트 벤치마크는 injection, memory, tool-use 표면을 문서화합니다. 공격면이 일반적으로 지수 증가한다는 근거는 없습니다.

### W. 데이터 추출

Nasr et al.의 divergence 기반 추출과 기존 prefix 기반 memorization test. differential·timing probe는 출처가 추가되기 전까지 별도 위협 모델입니다.
**근거**: Nasr et al.은 여러 시험 모델군에서 기억된 훈련 데이터를 추출하고 정렬된 챗봇용 divergence attack을 개발했습니다. 모든 모델에서 임의의 레코드를 복원할 수 있다는 뜻은 아닙니다.

### X. 정렬 결함

Sycophancy 증폭, Authority halo (허위 "[ai company name] 허용함"), Hallucination cascade, Frame priming ("합리적 AI라면").
**근거**: Sharma et al.은 다섯 assistant에서 sycophancy를 관찰하고 human preference가 일부 원인이라는 근거를 제시했습니다. 사용자 동의가 항상 진실성을 이기는 것은 아닙니다.

### Y. 에이전트 자율성

Goal drift, Tool scope creep (read_file → /etc/shadow), Delegation chain 맥락 유실, Recursion bomb, Resource exfil.
**근거**: OWASP Excessive Agency는 과도한 기능, 권한, 자율성을 원인으로 봅니다. 에이전트가 의도적으로 안전을 우회한다고 가정할 필요가 없습니다.

### Z. 평가 회피 (Sandbagging)

조건부 backdoor proof-of-concept 근거와 evaluation context 인식에 대한 추측적 test.
**근거**: Sleeper Agents는 의도적으로 훈련한 조건부 백도어 모델의 proof-of-concept입니다. 배포된 assistant가 일반적으로 deceptive alignment나 sandbagging을 보인다는 증거가 아닙니다.

### AA. 경제

Reasoning loop, context 한계에 가까운 stuffing, Tool spam, Cache-miss 증폭, Queue starvation.
**근거**: OWASP는 unbounded consumption과 denial-of-wallet 위험을 문서화합니다. 계산량·비용은 아키텍처, 서빙, 캐시, 워크로드에 따라 달라지며 공격 ROI를 가정하지 않습니다.

### BB. 공급망

Model, dataset, adapter, dependency, CI workflow, plugin, registry provenance 위험.
**근거 수준**: 모델, 데이터셋, 패키지, 플러그인, Action 출처는 공급망 보안 문제입니다. 이는 개발자 행동에 대한 실증 주장이 아닙니다.

### CC. 추론 체인

Injection in CoT (도구 출력으로 thinking 조작), Self-consistency attack, Verifier weakening.
**근거**: 에이전트 벤치마크에는 계획·추론 단계 공격이 포함됩니다. 중간 데이터 흐름은 신뢰 경계를 추가하지만 단계 수에 따른 위험 법칙이 입증된 것은 아닙니다.

### DD. 멀티 에이전트

Sybil (한 공격자 다중 에이전트 가장), Prisoner's dilemma, Information asymmetry.
**근거 수준**: 손상된 peer agent는 excessive-agency 위협 모델에 포함됩니다. 인증·출처 추적은 구현 선택이며 보편적으로 없는 것이 아닙니다.

### EE. 시간/상태

Race condition, Stale cache, Timezone confusion.
**근거 수준**: stale state와 race condition은 LLM 주변 애플리케이션의 전통적 보안 위험이며, 독립된 실증 탈옥 기전은 아닙니다.

### FF. 물리

모델 출력이 physical actuator에 연결된 robot·smart-home action.
**근거 수준**: 애플리케이션이 모델 출력을 actuator에 연결할 때만 물리 영향이 가능합니다. 위험은 외부 승인과 안전 interlock에 달려 있습니다.

### GG. 사회

Notification spam 피로, Plausible deniability, Slow poison (매일 조금씩 메모리 오염).
**근거 수준**: 인간 요인·사회공학 위협 모델 분류이며 LLM 내부 기전에 대한 주장이 아닙니다.

### HH. 모델 내부

Under-trained-token 행동과 positional·long-context robustness test. 후자는 자동으로 jailbreak로 간주하지 않습니다.
**근거**: under-trained 또는 "glitch" token이 연구된 모델에서 이상 행동을 일으킨 사례가 있습니다. 위치 효과·attention 현상을 자동으로 탈옥으로 분류해서는 안 됩니다.

### II. 방어 공격 (Meta)

Classifier probing, Guard model bypass (각종 guard model 회피), Jailbreak-jailbreak.
**근거**: TAP은 시험한 LlamaGuard 구성 우회를 보고했습니다. 비모델 방어도 있으므로 모든 방어에 적용되는 문장은 아닙니다.

### JJ. 2025~ 이론적

내부 feature intervention, activation injection, sparse probe, model-difference test. 특정 refusal feature나 jailbreak 결과는 주장하지 않습니다.
**근거 수준**: sparse autoencoder와 feature steering 연구는 내부 특성 조작 가능성을 보이지만, 여기 인용한 연구는 배포 모델 탈옥을 입증하지 않습니다. 내부 접근이 필요한 추측적 분류입니다.

### KK. 규제

Consent manufacturing, Audit laundering, DMCA abuse.
**근거 수준**: 규제·법률 프레이밍은 거버넌스 악용 위협 모델로만 유지합니다. 독립된 학술 탈옥 분류로 확립된 것은 아닙니다.

---

## 우선순위: 실전 위협 vs 이론

| 근거 단계 | 카테고리 | 해석 |
|---|---|---|
| **1 — 반복 실증 또는 표준화된 우려** | D, F, G, H, J, K, M, O, W, X | 실험 또는 표준; 범위는 시험 모델에 한정 |
| **2 — 벤더·벤치마크 근거** | I, L, S, T, U, Y, AA, HH, II | 공개 벤더 시험, 에이전트 벤치마크, OWASP 위협 모델 |
| **3 — 엔지니어링 위협 모델** | A, B, C, E, P, Q, R, BB, CC, DD, EE, FF, GG | 단일 인과 기전이 확립되지 않은 테스트 분류 |
| **4 — 추측적 경계** | N, V, Z, JJ, KK | 새 근거 없이 배포 시스템의 관찰 행동으로 표현하면 안 됨 |

자세한 방어 매핑: [`docs/ko/DEFENSE_MATRIX.md`](docs/ko/DEFENSE_MATRIX.md)

---

## 기여

PR 환영. 단, 다음은 거절됩니다:

- 특정 배포 모델에 현재 작동하는 exploit 페이로드
- 유해 콘텐츠 생성 템플릿
- 개인·조직 타깃 공격

자세한 범위는 [`CONTRIBUTING.md`](CONTRIBUTING.md) · [`SECURITY.md`](SECURITY.md) 참조.

## 라이선스

[MIT](LICENSE) — 교육·연구·방어 목적. 오용 시 책임은 이용자.

## 참고 문헌

주요 논문·연도·기여는 [`docs/ko/REFERENCES.md`](docs/ko/REFERENCES.md).
