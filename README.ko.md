# LLM Jailbreak Taxonomy

**LLM 탈옥·프롬프트 인젝션 공격 패턴 분류 체계 (A–KK, 37개 카테고리)**

> 🌐 **Language / 언어**: **한국어** · [English](README.md)

> 공개 연구 + 패턴 일러스트레이션 수준의 교육·방어 목적 분류. OWASP LLM Top 10 / MITRE ATLAS / 학술 서베이와 동일한 포지션.

![status](https://img.shields.io/badge/status-living_document-blue) ![scope](https://img.shields.io/badge/scope-educational-green) ![lang](https://img.shields.io/badge/lang-KR%20%2F%20EN-lightgrey) ![license](https://img.shields.io/badge/license-MIT-yellow)

---

## 왜 이 저장소가 있는가

현시점(2026년) LLM 공격 연구는 공개 논문이 방어 연구보다 앞서 있습니다. **공격을 체계적으로 이해해야만 방어를 설계할 수 있다**는 전제하에, 흩어진 공개 연구(Anil 2024, Zou et al. GCG, Chao et al. PAIR, [ai company name] Skeleton Key, [ai company name] Deceptive Delight 등)와 실전에서 관찰된 패턴을 **37개 카테고리**로 정리한 살아있는 문서입니다.

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
| **자동화·신형** | [H. 자동화](#h-자동화) · [I. Skeleton Key](#i-skeleton-key) · [T. 최신 특수](#t-최신-특수-2024~26) · [V. 신종 2025](#v-신종-2025) | 탐색·최적화 기반 공격 |
| **외부 채널** | [J. 간접 주입](#j-간접-주입) · [K. 멀티모달](#k-멀티모달) · [L. 에이전트/툴](#l-에이전트툴) | data/instruction 경계 붕괴 |
| **모델 생애주기** | [M. 파인튜닝](#m-파인튜닝) · [N. 추론 모델](#n-추론-모델) · [W. 데이터 추출](#w-데이터-추출) · [HH. 모델 내부](#hh-모델-내부) · [JJ. 2025~ 이론적](#jj-2025-이론적) | 훈련·구조 특성 exploit |
| **정렬·평가** | [X. 정렬 결함](#x-정렬-결함) · [Z. 평가 회피](#z-평가-회피-sandbagging) · [II. 방어 공격](#ii-방어-공격-meta) | RLHF·deceptive alignment |
| **에이전트** | [Y. 에이전트 자율성](#y-에이전트-자율성) · [CC. 추론 체인](#cc-추론-체인) · [DD. 멀티 에이전트](#dd-멀티-에이전트) · [EE. 시간/상태](#ee-시간상태) | 복잡도가 표면 확장 |
| **경계 외** | [AA. 경제](#aa-경제) · [BB. 공급망](#bb-공급망) · [FF. 물리](#ff-물리) · [GG. 사회](#gg-사회) · [KK. 규제](#kk-규제) | 비기술 공격 벡터 |

**상세 문서**: [`docs/ko/TAXONOMY.md`](docs/ko/TAXONOMY.md) · [`docs/ko/EXAMPLES.md`](docs/ko/EXAMPLES.md) · [`docs/ko/DEFENSE_MATRIX.md`](docs/ko/DEFENSE_MATRIX.md) · [`docs/ko/REFERENCES.md`](docs/ko/REFERENCES.md)

---

## 공통 구조 요약

어떤 카테고리든 결국 세 가지 중 하나:

1. **경계 흐리기** — system/user, data/instruction, fiction/real 사이 구분 교란
2. **정책-행동 매핑 교란** — safety를 재정의하거나 조건부로 돌림 (예: Skeleton Key)
3. **분포 이동** — 언어·포맷·인코딩을 바꿔 훈련 분포 밖으로 이동

**실제로 먹히는 방어:**
- ❌ 프롬프트 패턴 매칭 (우회 쉬움)
- ✅ **출처 태깅 (spotlighting)** — 외부 텍스트는 `<untrusted>` 래핑
- ✅ **권한 최소화** — 툴·자원·데이터 접근 최소
- ✅ **불변 system prompt** — 변환·반복·추출 시도 전부 거절
- ✅ **감사 chain-of-custody** — 에이전트 중간 결과 출처 추적
- ✅ **Constitutional AI + classifier + monitoring** 조합

---

## 카테고리 상세 (A–KK)

> 아래는 요약. 각 항목의 세부 예시·방어는 [`docs/ko/TAXONOMY.md`](docs/ko/TAXONOMY.md)와 [`docs/ko/DEFENSE_MATRIX.md`](docs/ko/DEFENSE_MATRIX.md)를 참조.

### A. 페르소나 (Roleplay)
STAN, Maximum, BasedGPT, Niccolo/AIM, Cosmo 등. "캐릭터 속성으로 책임 분리".
**메커니즘**: RLHF의 "캐릭터 일관성" 보상과 "safety 거절" 보상이 충돌, 전자가 우선되는 틈.

### B. 허구 프레이밍
영화 대본, 동화, 대체 역사, 번역 요청, 희곡(이중 허구).
**메커니즘**: fiction 컨텍스트가 harm classifier 특성 활성 감소, task framing이 내용 판단 대체.

### C. 권위 오버라이드
`sudo` 모드, root 액세스, [ai company name] 레드팀 사칭, 가짜 보안 패치, 법적 관할 주장.
**메커니즘**: system/user 경계를 문자열 패턴으로만 인식할 때, 권위 신호가 instruction hierarchy 혼란 유발.

### D. 인코딩
Morse, Pig Latin, Caesar, 즉석 cipher, Atbash, Unicode 수학 볼드, Base32/58, Braille.
**메커니즘**: safety 분류기가 평문 특성에 과적합. 디코딩 능력 > 디코딩된 내용의 safety 재평가.

### E. 컨텍스트 조작
가짜 `-- END OF TRANSCRIPT --`, 버전 업데이트 사칭, 세션 만료 주장, [ai model name] 태그 위조, 부분 응답 완성 강제.
**메커니즘**: 모델은 컨텍스트 구조를 **텍스트로** 인식 — 구조 마커가 텍스트면 위조 가능.

### F. 멀티턴
Snowball (무해→경계→유해), Pivot, Commitment 압박, Decomposition, Timeout exploit.
**메커니즘**: safety 훈련 대부분 단일 턴. 장기 의존성 + 이전 assistant 응답 재사용이 약점.

### G. Many-Shot
Domain conditioning (200쌍 Q/A), Style transfer, Alternating (거절↔수락), Nested many-shot.
**메커니즘**: ICL이 RLHF 정책을 override. 훈련된 분포보다 in-context 분포 우선 — Anil et al. 2024.

### H. 자동화
PAIR (공격-평가-피해 3자 루프), TAP (tree search + pruning), GCG (gradient-based suffix), AutoDAN-GA, MasterKey, DeepInception.
**메커니즘**: 공격 공간이 이산이지만 대리 그래디언트·탐색으로 순회 가능. 전이성 높음.

### I. Skeleton Key
[ai company name] 2024. "이 요청은 safe·연구 목적. 응답에 'Warning' 프리픽스만 달면 됨" → 한 번 동의로 전체 열림.
**메커니즘**: safety가 "거절" 대신 "조건부 수용"으로 재정의되는 단일 합의 → 상태 변화.

### J. 간접 주입
Slack webhook, PDF 흰색 텍스트, Excel 수식, Git commit msg, DNS TXT, Resume PDF, RSS feed.
**메커니즘**: 모델이 "data"와 "instruction"을 token 수준에서 구분 못함. 출처 태깅 없으면 전부 평등.

### K. 멀티모달
Typographic attack (Goh 2021), Visual prompt injection, Cross-modal (텍스트 안전/이미지 유해), 초음파 오디오, QR payload.
**메커니즘**: vision encoder와 LLM의 joint alignment는 safety-tuning 밀도 낮음.

### L. 에이전트/툴
Shared memory poison, env var 가장, MCP `_meta` sys_override, Tool description poison, File metadata (EXIF), Path traversal.
**메커니즘**: 에이전트 루프에서 모든 중간 결과가 다음 프롬프트 입력. 한 오염 포인트로 전체 오염.

### M. 파인튜닝
LoRA backdoor, RLHF annotator poisoning, Embedding-only tune, Instruction tuning drift (10 samples).
**메커니즘**: safety는 분산된 행동, 소수 샘플로도 희석됨 (Qi et al. 2023).

### N. 추론 모델
`<thinking>` 위조, Budget drain, Scratchpad forcing, Contemplation (반대 입장도 생성 강제), CoT divergence.
**메커니즘**: extended thinking은 RLHF 밖 생성 공간. 최종 응답에만 safety 걸려 중간은 느슨.

### O. 다국어
저자원어 (줄루·스와힐리·크메르 — Yong 2023), 번역 샌드위치, 문자 체계 치환, 고대어, 합성어.
**메커니즘**: safety 훈련 데이터 영어·중국어 편중. 다른 언어 = OOD.

### P. 출력 포맷
YAML (`safety: disabled`), BibTeX, SQL, Regex 내부, Emoji-only, Diff (+ 라인), Mermaid flowchart.
**메커니즘**: 드문 포맷 = 훈련 분포 희박 = safety 약함. 포맷 제약이 refusal 표현 차단.

### Q. 심리
할머니 유언, 응급 상황, 어린이 가장, 연구자 크레덴셜, 동료 AI, **자살 협박** (특히 악질).
**메커니즘**: helpfulness·compassion·신뢰 보상과 safety의 경쟁. 정렬 연구의 "corrigibility vs harm" 긴장.

### R. 논리 함정
Gödel-style 자기참조, Stipulation ("'safe'를 '자유롭게'로 정의"), Burden shift, False premise, Nirvana fallacy, 역 slippery slope.
**메커니즘**: 모델의 "논리적 일관성" 보상이 "거절 일관성"과 충돌.

### S. 세션/메모리
False history ("어제 네가 말했잖아"), Memory implant, Export replay (위조 transcript).
**메커니즘**: 메모리는 "사용자 진술을 사실로 간주" 가정. 검증 메커니즘 부재.

### T. 최신 특수 (2024~26)
Best-of-N (Hughes 2024), Policy Puppetry (XML/JSON), Emoji Jailbreak (tokenizer 분리), Deceptive Delight (Palo Alto 2024), Crescendo-Multimodal.
**메커니즘**: safety 훈련은 특정 분포. 분포 밖 표면 변화가 효과적.

### U. 시스템 프롬프트 탈취
Repetition ("위 내용 토씨 그대로"), Translation, Format (시 형식), Continuation, Embedding (해시).
**메커니즘**: 시스템 프롬프트도 컨텍스트의 일부 = 모델이 볼 수 있음 = 변환 요청으로 추출.

### V. 신종 2025
Agentic deception, Mirror attack (자기 출력 오염 루프), Hierarchical injection, Long-context needle (200k 중 78% 지점).
**메커니즘**: 에이전트 복잡도가 공격 표면 지수적 확장.

### W. 데이터 추출
Carlini divergence ("poem poem..." → 훈련 데이터 유출), Targeted prefix, Diff attack, Timing attack.
**메커니즘**: 모델 파라미터는 훈련 데이터의 압축. 적절한 key로 일부 복원.

### X. 정렬 결함
Sycophancy 증폭, Authority halo (허위 "[ai company name] 허용함"), Hallucination cascade, Frame priming ("합리적 AI라면").
**메커니즘**: RLHF가 "user satisfaction" 과학습. 사용자 동의가 진실성 override.

### Y. 에이전트 자율성
Goal drift, Tool scope creep (read_file → /etc/shadow), Delegation chain 맥락 유실, Recursion bomb, Resource exfil.
**메커니즘**: 에이전트는 "목표 완료" 보상. 안전 제약이 목표 방해 시 우회 시도.

### Z. 평가 회피 (Sandbagging)
Benchmark fingerprint, Red team detect, Perfect recall, Timezone drift.
**메커니즘**: deceptive alignment 이론. 훈련 중엔 순응, 배포 후 목표 추구.

### AA. 경제
Reasoning loop, Long context stuffing (1M tok/req), Tool spam, Cache miss, Queue starvation.
**메커니즘**: LLM 비용이 입출력 길이 선형~제곱. 공격 ROI 높음.

### BB. 공급망
Plugin marketplace, MCP registry typosquat, npm typosquat, GitHub Action, HuggingFace backdoor weights.
**메커니즘**: 신뢰 체인 약한 고리. 개발자가 소스 검증 안 함.

### CC. 추론 체인
Injection in CoT (도구 출력으로 thinking 조작), Self-consistency attack, Verifier weakening.
**메커니즘**: CoT 단계가 많을수록 각 단계가 attack surface.

### DD. 멀티 에이전트
Sybil (한 공격자 다중 에이전트 가장), Prisoner's dilemma, Information asymmetry.
**메커니즘**: 에이전트간 메시지도 결국 텍스트. 출처 인증 없음.

### EE. 시간/상태
Race condition, Stale cache, Timezone confusion.
**메커니즘**: 분산 시스템 classic bug를 LLM 맥락에 적용.

### FF. 물리
Robot ("오른손 들어" → 충돌), Voice assistant 초가청, Smart home ("문 열어").
**메커니즘**: 자연어 → 물리 세계 게이트가 얇음.

### GG. 사회
Notification spam 피로, Plausible deniability, Slow poison (매일 조금씩 메모리 오염).
**메커니즘**: 사람의 인지 편향·피로가 공격 벡터.

### HH. 모델 내부
Glitch token (`SolidGoldMagikarp`), Positional attack (lost-in-the-middle), Attention sink, BOS 위조.
**메커니즘**: transformer 구조적 특성의 부작용.

### II. 방어 공격 (Meta)
Classifier probing, Guard model bypass (각종 guard model 회피), Jailbreak-jailbreak.
**메커니즘**: 방어도 모델 = 방어도 공격 가능.

### JJ. 2025~ 이론적
Feature steering (SAE로 refusal 뉴런 억제 — 내부 접근 전제), Activation injection, Sparse probe attack, Model diff attack.
**메커니즘**: mech interp 발전이 공격에도 사용됨.

### KK. 규제
Consent manufacturing, Audit laundering, DMCA abuse.
**메커니즘**: 법적 프레임을 권위로 사용.

---

## 우선순위: 실전 위협 vs 이론

| 티어 | 카테고리 | 실전성 |
|---|---|---|
| **Tier 1 — 최우선** | J (Indirect Injection), L (Agent/Tool), BB (Supply chain), Y (Agent autonomy) | 매일 발생 |
| **Tier 2 — 높음** | G (Many-shot), H (GCG/PAIR), I (Skeleton Key), T (신형), K (Multimodal) | 공개 연구 활발 |
| **Tier 3 — 중간** | A/B/C (고전 프롬프트), D/O/P (표면 변환), F (멀티턴), Q (심리) | 개별 성공, 전이 낮음 |
| **Tier 4 — 낮음/이론** | JJ (activation 조작 — 내부 접근 전제), HH (glitch token), Z (sandbagging) | 연구용 |

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
