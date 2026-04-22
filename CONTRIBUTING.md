# Contributing

> 🌐 **English** (below) · [한국어](#기여-가이드-korean)

This repository is a **living public taxonomy**. PRs, issues, and discussions are all welcome.

## Welcomed contributions

- ✅ New attack categories / sub-patterns with **mechanism explanations**
- ✅ Summaries of published papers / reports
- ✅ Typo, link, formatting fixes
- ✅ Defense matrix additions (new detection / mitigation methods)
- ✅ Korean ↔ English translation
- ✅ Counterexamples or skepticism on existing patterns
- ✅ Benchmark results (public benches only)

## Rejected contributions

- ❌ **Working exploit payloads against currently-deployed specific models**
  (e.g., "a prompt that works on [ai model name] right now" — rejected)
- ❌ Harmful-content generation templates (CSAM, weapon synthesis, malware, etc.)
- ❌ Attacks targeting specific people, organizations, or products
- ❌ Undisclosed / non-responsibly-disclosed vulnerabilities
- ❌ Zero-days that haven't been through responsible disclosure

Contributions falling under these will not be merged, and in serious cases may be deleted and reported. If you are reporting a responsible-disclosure candidate, contact the vendor directly ([SECURITY.md](SECURITY.md)).

## Process

1. **Issue first**: discuss large changes in an Issue before PR
2. **Fork + Branch**: use clear names like `feat/A-add-persona-variant`
3. **Commit**: follow Conventional Commits (`feat:`, `docs:`, `fix:`)
4. **PR**: include related paper links, reason for change, checklist
5. **Review**: maintainer approval required before merge

## Adding a new category

- If an existing A–KK fits, add as a sub-pattern
- If a completely new axis, propose a new letter (LL, MM, …)
- Must include:
  - Sub-pattern names
  - Mechanism explanation
  - Published paper or vendor report (claims without sources rejected)
  - Placeholder example (non-operational)
  - Defense pair in [`docs/en/DEFENSE_MATRIX.md`](docs/en/DEFENSE_MATRIX.md) and [`docs/ko/DEFENSE_MATRIX.md`](docs/ko/DEFENSE_MATRIX.md)

## Style guide

- Technical English + Korean when relevant
- Concise bulleted lists
- Avoid decorative emoji (use only for status signals: ✅ / ❌ / ⚠️)
- Use relative links (`docs/en/…`)
- Code blocks fenced with triple backticks + language identifier

## Code of Conduct

- Constructive criticism welcome; no personal attacks
- Criticism of vendors / researchers should be data-driven
- Both Korean and English are acceptable. Help with translation is encouraged

Contact: GitHub Issues.

---

## 기여 가이드 (Korean)

> 🌐 [English](#contributing) · **한국어** (아래)

이 저장소는 **살아있는 공개 분류 체계**입니다. PR, 이슈, 토론 모두 환영합니다.

### 환영하는 기여

- ✅ 새 공격 카테고리·서브 패턴의 **메커니즘 설명**
- ✅ 공개된 논문·리포트 요약 추가
- ✅ 오탈자·링크·포맷 수정
- ✅ 방어 매트릭스 보강 (새 탐지·완화 방법)
- ✅ 한국어 ↔ 영어 번역
- ✅ 기존 패턴에 대한 반례·회의론
- ✅ 벤치마크 결과 (공개 벤치 한정)

### 거절되는 기여

- ❌ **특정 배포 모델에 현재 작동하는 exploit 페이로드**
- ❌ 유해 콘텐츠 생성 템플릿 (CSAM, 무기 합성, 악성코드 등)
- ❌ 개인·조직·제품 타깃 공격
- ❌ 미공개·non-responsibly disclosed 취약점
- ❌ 책임 공개 절차 미이행 zero-day

위 경우 merge 거부, 심각 시 삭제·보고. 책임 공개 대상은 해당 벤더에 직접 보고 ([SECURITY.md](SECURITY.md) 참조).

### 기여 절차

1. **Issue 먼저**: 큰 변경은 PR 전 Issue로 논의
2. **Fork + Branch**: `feat/A-add-persona-variant` 형태
3. **Commit**: Conventional Commits (`feat:`, `docs:`, `fix:`)
4. **PR**: 관련 논문 링크, 변경 이유, 체크리스트
5. **Review**: 메인테이너 승인 후 merge

### 새 카테고리 추가 시

- 기존 A–KK에 맞는 곳이 있으면 서브 패턴으로 추가
- 완전 새 축이면 새 글자 할당 (LL, MM, ...) 제안
- 반드시 포함:
  - 서브 패턴 명
  - 메커니즘 설명
  - 관련 공개 논문 or 벤더 리포트 (출처 없는 주장 거절)
  - 플레이스홀더 예시 (비기능적)
  - [`docs/en/DEFENSE_MATRIX.md`](docs/en/DEFENSE_MATRIX.md) + [`docs/ko/DEFENSE_MATRIX.md`](docs/ko/DEFENSE_MATRIX.md)에 방어 페어

### 스타일 가이드

- 한국어 + 영어 전문 용어
- 불렛 리스트 간결하게
- 이모지는 장식 용도 지양 (상태 시그널만: ✅/❌/⚠️)
- 링크는 상대 경로 (`docs/ko/...`)
- 코드 블록은 ` ``` ` + 언어 지정

### 행동 강령

- 건설적 비판 환영, 인신 공격 불가
- 모델 벤더·연구자 비판은 데이터 기반으로
- 한국어·영어 모두 사용 가능, 상대 언어로 번역 돕기 환영

문의: GitHub Issues.
