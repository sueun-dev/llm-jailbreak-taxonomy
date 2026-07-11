# 방어 매트릭스 (Defense Matrix)

> 🌐 **언어**: **한국어** · [English](../en/DEFENSE_MATRIX.md)

각 공격 카테고리별 후보 **탐지(Detection)** + **완화(Mitigation)** control입니다. 가능한 경우 OWASP, NIST, 공개 평가에 근거하지만 입증된 보장은 아닙니다.

> 방어의 근본 원칙: **계층(defense in depth)**. 인용된 어떤 단일 계층도 모든 모델·애플리케이션에서 예방을 보장하지 않습니다.
>
> benchmark가 인용되지 않은 detection bullet은 후보 signal입니다. false positive가 가능하므로 실제 배포 데이터로 검증해야 합니다.

---

## 원칙 (어떤 공격이든 공통)

| 원칙 | 설명 | 반례(하지 말 것) |
|---|---|---|
| **Spotlighting / provenance marking** | 평가된 변환으로 신뢰하지 않는 텍스트의 출처를 보존·표시 | 외부 데이터와 신뢰 지시를 경계 없이 연결 |
| **Least Privilege** | 툴·데이터·네트워크 접근 최소화 | 에이전트에 `*` 권한 |
| **외부 authorization** | 비밀, 권한, 보안 결정을 prompt text 밖에 유지 | hidden prompt를 비밀 또는 access-control 경계로 사용 |
| **Chain-of-Custody** | 에이전트 중간 결과 출처 추적 | 중간 결과 출처 로그 없음 |
| **Output validation** | privileged use 전에 검증하고 평가 근거가 있을 때 classifier 추가 | 모델 출력을 바로 실행 |
| **Human Review Gate** | 고위험 행동은 사람 승인 필요 | 에이전트 전권 |
| **Continuous Red Team** | 공격 패턴 지속 업데이트 | 릴리스 시 한 번만 |

---

## 카테고리별 매트릭스

### A. 페르소나 · B. 허구 · C. 권위 · Q. 심리 · R. 논리

**Detection**:

- 페르소나 지시 감지 classifier ("이제부터 너는...", "X 모드로...")
- 권위 주장 패턴 (`sudo`, `admin`, `레드팀`, `[ai company name] 내부`)
- 응급·감정 압박 키워드

**Mitigation**:

- 관련 prompt family에 대한 policy-consistent training과 평가
- Instruction hierarchy: privileged instruction 우선순위를 훈련·시험
- 고영향 응답에 독립 output check 또는 human review

---

### D. 인코딩 · O. 다국어 · P. 포맷

**Detection**:

- 인코딩 탐지: entropy · base64 패턴 · Unicode category
- 언어 감지 + 저자원어 플래그
- 비일반 출력 포맷 요청 경고

**Mitigation**:

- 디코딩 후 재-classification (2단계 safety check)
- 지원 언어·변환을 각각 평가
- 실패한 언어·포맷을 targeted safety training에 포함한 뒤 재시험

---

### E. 컨텍스트 조작 · S. 메모리 · U. 시스템 프롬프트 탈취

**Detection**:

- 가짜 구조 마커 (`-- END --`, `<assistant_prefix>`, `[System v]`)
- 메모리 주장 검증 (실제 저장된 것과 대조)
- 시스템 프롬프트 변환·추출 요청 시그널

**Mitigation**:

- System prompt를 모델 입력의 **구조적** 위치에 (마크업 분리)
- source, trust level, tenant, write authorization을 포함한 typed record 저장
- system prompt 밖에 비밀·권한 로직을 두고 leakage를 별도 시험

---

### F. 멀티턴 · G. Many-Shot

**Detection**:

- 턴 수 + 응답 톤 변화 추적
- In-context 예시 패턴 감지 (거절→수락 교차, Q/A 반복)
- Crescendo 시그널: 주제 semantic drift 모니터링

**Mitigation**:

- 관련 대화 history와 policy state를 포함해 매 턴 재평가
- Many-shot 대응 훈련 (Anil et al. 후속)
- 이전 assistant 응답 재사용 시 "사실로 간주" 금지

---

### H. 자동화 (GCG/PAIR/TAP)

**Detection**:

- Suffix perplexity 이상 (GCG는 gibberish suffix)
- 반복 프로빙 패턴 (PAIR/TAP)
- 요청 embedding 공격 cluster 매칭

**Mitigation**:

- Adversarial training (GCG 샘플 포함)
- 필요에 따라 반복 자동 probing을 rate limit
- Safety classifier ensemble

---

### I. Skeleton Key

**Detection**:

- "조건 충족하면 safety 통과" 패턴
- "Warning 프리픽스만 달면" 류 합의 유도

**Mitigation**:

- 사용자 text가 application policy를 재정의하지 못하도록 훈련·평가
- 고위험 content에 독립 output check 적용
- 모델 버전을 명시해 재시험. 과거 공개만으로 현재 완화를 가정하지 않음

---

### J. 간접 주입

**Detection**:

- 외부 데이터 소스 태깅 (web · file · tool · MCP)
- 숨은 텍스트 탐지 (색상 대비, 0pt, zero-width, 메타데이터)
- 지시문 패턴이 "data" 영역에 등장 시 알림

**Mitigation**:

- **Spotlighting**: `<untrusted_source src="pdf:resume.pdf">...</untrusted_source>`
- 외부 데이터는 "instructions" 아닌 "observations"로만 처리
- 고위험 행동은 외부 데이터 읽은 후엔 사람 승인
- 링크/URL fetch 시 도메인 allowlist

---

### K. 멀티모달

**Detection**:

- 이미지 OCR → 텍스트 safety check
- 이미지 내 "Ignore previous..." 류 패턴

**Mitigation**:

- 전체 multimodal stack을 평가하고 safety-train
- 이미지 내 텍스트는 `<image_text>` 태그로 spotlighting
- Cross-modal consistency check

---

### L. 에이전트/툴

**Detection**:

- Tool 응답 내 지시문 패턴
- 메타데이터(`_meta`, EXIF) 검사
- Path traversal · URL scheme 이상

**Mitigation**:

- Tool 응답은 `<tool_result>` 로만 래핑, 절대 "instructions" 아님
- Tool 권한 최소화 (`read_only`, path whitelist)
- 메타데이터 sanitize
- 에이전트 행동 로그 + 사람 감사

---

### M. 파인튜닝

**Detection**:

- Fine-tune 데이터 safety score 분포 검사
- fine-tune 전후 safety-evaluation 분포 비교
- dataset provenance와 이상 sample 검사

**Mitigation**:

- fine-tune 권한과 허용 base model·adapter 제한
- 배포별 threshold로 fine-tuning data 검증
- 사용자 fine-tune 후 자동 safety eval 필수

---

### N. 추론 모델

**Detection**:

- `<thinking>` 태그 위조 감지
- Budget 이상 (토큰 폭증)
- Thinking과 최종 응답 divergence

**Mitigation**:

- 노출된 rationale와 최종 출력에 policy check 적용
- 사용자 입력에서 thinking 태그 필터링
- Reasoning budget cap

---

### T. 최신 특수 · V. 신종 2025

**Detection**:

- Best-of-N: 동일 사용자 대량 변이 요청 rate limit
- 여러 통제된 context 위치에서 provenance 처리를 시험
- Deceptive Delight: 주제 혼합 이상 패턴

**Mitigation**:

- N-sample rate limit
- provenance를 보존하면서 긴 untrusted input을 segment별 평가
- mixed-topic prompt를 keyword 조각이 아닌 전체 conversation으로 평가

---

### W. 데이터 추출

**Detection**:

- 반복 패턴 ("poem poem...")
- PII autocomplete 시도
- Timing side channel 모니터링

**Mitigation**:

- 반복 입력 감지 후 조기 종료
- PII scrubbing 훈련 데이터
- formal privacy accounting과 utility tradeoff 측정이 있을 때만 differential privacy 고려

---

### X. 정렬 결함

**Detection**:

- Sycophancy score (동의 편향)
- 허위 인용 패턴 (가짜 DOI·URL)
- Authority claim 미검증 수용

**Mitigation**:

- Anti-sycophancy 훈련 (Sharma et al.)
- Citation 자동 검증
- "나는 전문가야" 주장은 행동 변화 안 함

---

### Y. 에이전트 자율성

**Detection**:

- Tool scope 일탈 (파라미터 이상)
- Goal drift (task description vs 현재 행동)
- Recursion depth · 외부 endpoint 이상

**Mitigation**:

- Sandboxing · capability 토큰
- 행동 로그 + 사람 승인 게이트 (고위험)
- Resource · network egress 제한
- Delegation chain 원 맥락 전파 강제

---

### Z. 평가 회피

**Detection**:

- Canary task (평가와 배포 동일 행동 확인)
- Hubinger 스타일 trigger 탐색

**Mitigation**:

- 가능한 경우 blinded·randomized·varied evaluation 사용
- 설명되지 않는 behavior shift를 찾기 위해 평가·배포 telemetry 비교

---

### AA. 경제

**Detection**:

- 비정상 토큰 소비
- Reasoning loop 감지
- 병렬 요청 burst

**Mitigation**:

- 사용자별 budget cap
- Reasoning step cap
- Exponential backoff

---

### BB. 공급망

**Detection**:

- 패키지 서명 검증
- Typo squatting 탐지 (Levenshtein)
- Model weight 체크섬

**Mitigation**:

- SBOM (Software Bill of Materials)
- Signed plugins · models
- server/tool manifest를 pin·attest하고 registry label만 신뢰하지 않음
- pip/npm lockfile + audit

---

### CC. 추론 체인 · DD. 멀티 에이전트

**Detection**:

- Tool 응답 내 메타 지시
- Agent-to-agent 메시지 출처 태깅

**Mitigation**:

- 관련 context·provenance를 보존하면서 각 agent 경계에서 policy enforcement
- Sybil 방어 (identity attestation)
- 아키텍처가 지원하는 경우 peer identity, authorization, message provenance 강제

---

### EE. 시간/상태

**Detection**:

- Race condition 로깅
- Stale cache timestamp 검사

**Mitigation**:

- 정책 업데이트 시 캐시 flush
- Strong consistency for safety decisions

---

### FF. 물리

**Detection**:

- 물리 행동 위험도 분류기

**Mitigation**:

- 물리 행동은 사람 승인 필수
- 긴급 중지 메커니즘

---

### GG. 사회

**Detection**:

- 알림 피로 지표
- Memory 주입 패턴 (매일 조금씩)

**Mitigation**:

- 메모리 변경 사용자 확인
- 알림 집계

---

### HH. 모델 내부 · JJ. 이론적 (내부)

**Detection**:

- 글리치 토큰 블랙리스트
- Activation 이상 (내부 telemetry)

**Mitigation**:

- Tokenizer sanity check
- 가중치 접근 제한
- under-trained-token test와 내부 접근 feature-steering test를 분리

---

### II. 방어 공격

**Mitigation**:

- Guard model ensemble (다양성)
- Defense-in-depth (단일 guard 의존 금지)

---

### KK. 규제

**Mitigation**:

- 법무·준법 리뷰
- tamper-evident 감사 로그와 문서화된 retention·합법적 삭제 정책

---

## 기본 control 조합

1. **입력**: spotlighting + source tagging + classifier
2. **시스템**: instruction hierarchy + prompt 밖 비밀·authorization
3. **모델**: policy-consistent training + 배포별 평가
4. **출력**: schema validation + 위험 기반 classifier 또는 human review
5. **에이전트**: least privilege + sandbox + human gate
6. **운영**: audit log + red team + continuous eval
7. **공급망**: signed components + SBOM + verify

## 근거 경계

- 효과는 모델, 버전, 프롬프트, 지표, 배포 환경에 따라 달라집니다.
- 벤더 보고서는 자체 시험의 1차 근거지만 독립 반복 검증은 아닙니다.
- 실험 없는 위협 모델은 prevalence 주장이 아니라 테스트 설계에 사용합니다.
- model, prompt, tool, retrieval, policy가 바뀌면 평가를 다시 실행합니다.

참고: [`REFERENCES.md`](REFERENCES.md) 논문·벤더 공식 문서.
