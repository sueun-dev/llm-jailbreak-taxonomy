# Disclaimer

> 🌐 **English** (below) · [한국어](#면책-조항-korean)

## Nature of this work

This repository is a **taxonomy of publicly known attack patterns** against large language models. It is an **educational and defensive reference** comparable to:

- OWASP LLM Top 10 — https://owasp.org/www-project-top-10-for-large-language-model-applications/
- MITRE ATLAS — https://atlas.mitre.org/
- NIST AI RMF (AI 100-1)
- Academic jailbreak surveys (NeurIPS, ICML, USENIX Security, ACL, etc.)

All content is abstracted to pattern level. Specific vendor companies and model names are represented by placeholders (`[ai company name]`, `[ai model name]`) in attack examples and body text. Only academic author names, arXiv IDs, and years are preserved — these are the minimum necessary for verification of cited research, consistent with academic integrity norms.

## Not provided

- Working exploit payloads against any currently-deployed model
- Harmful content generation templates (CSAM, weapons, malware, etc.)
- Attacks targeting specific people, organizations, or products
- Tools or scripts to execute attacks
- Undisclosed (zero-day) vulnerabilities

## Intended audience

- Red teams assessing LLM-integrated applications
- Blue teams designing detection and mitigation
- AI safety researchers
- Compliance and risk officers (OWASP / NIST / EU AI Act)
- Students of AI security

## Not legal advice

The contents of this repository are **not legal advice**. Applicable laws vary by jurisdiction. Users are responsible for ensuring their use complies with:

- The law of their own jurisdiction (including criminal code, computer-misuse statutes)
- The law of any jurisdiction in which they conduct research or testing
- The Terms of Service of any vendor whose systems they interact with
- The Acceptable Use Policies of any AI provider whose tools they use
- Applicable frameworks such as the EU AI Act, GDPR, US CFAA, Korean 정보통신망법, etc.

Consult a qualified attorney for specific questions.

## No affiliation

This repository is an independent work. It does not represent, speak for, or claim affiliation with any AI company, academic institution, or government agency. All references to published research, frameworks, and vendor programs are for educational citation only.

## No warranty

Provided "AS IS" under the MIT license. See [LICENSE](LICENSE). The maintainer is not liable for any use, misuse, or consequences thereof.

## Responsible disclosure

If you discover something in this repository that you believe crosses the line — for example, an example that is unintentionally functional, or text that identifies a live vulnerability — please follow the procedure in [SECURITY.md](SECURITY.md) before public discussion.

---

## 면책 조항 (Korean)

> 🌐 [English](#disclaimer) · **한국어** (아래)

### 이 저장소의 성격

본 저장소는 **공개적으로 알려진 LLM 공격 패턴의 분류 체계**입니다. 다음과 비교 가능한 **교육·방어 목적 레퍼런스**입니다:

- OWASP LLM Top 10
- MITRE ATLAS
- NIST AI RMF (AI 100-1)
- 학술 jailbreak 서베이 (NeurIPS, ICML, USENIX Security, ACL 등)

모든 내용은 패턴 수준으로 추상화되어 있으며, 공격 예시와 본문에서 특정 벤더 회사·모델명은 플레이스홀더(`[ai company name]`, `[ai model name]`)로 표기됩니다. 학술 저자명·arXiv ID·연도만 검증 가능성 유지 위해 보존 — 학술 무결성 원칙에 따른 최소 인용 정보.

### 포함하지 않는 것

- 현재 배포 모델에 작동하는 exploit 페이로드
- 유해 콘텐츠 생성 템플릿 (CSAM, 무기, 악성코드 등)
- 개인·조직·제품 타깃 공격
- 공격 실행 도구·스크립트
- 미공개(zero-day) 취약점

### 의도된 독자

- LLM 통합 애플리케이션 레드팀
- 탐지·완화 설계 블루팀
- AI 안전 연구자
- OWASP / NIST / EU AI Act 컴플라이언스·리스크 담당자
- AI 보안 학습자

### 법률 자문이 아님

본 저장소의 내용은 **법률 자문이 아닙니다**. 적용 법령은 관할에 따라 다릅니다. 이용자는 본인의 사용이 다음을 준수하는지 스스로 확인할 책임이 있습니다:

- 본인 관할 법령 (형법, 컴퓨터 오용 관련 법령 포함)
- 연구·테스트 수행 지역 법령
- 상호작용하는 시스템 제공자의 이용약관
- 사용하는 AI 도구 제공자의 허용 사용 정책 (AUP)
- EU AI Act, GDPR, 미국 CFAA, 한국 정보통신망법 등 해당 프레임워크

구체적 질문은 자격 있는 법률 전문가에게 문의.

### 무 관계

이 저장소는 **독립 저작물**입니다. 어떤 AI 회사·학술 기관·정부 기관도 대표하거나 소속되어 있다고 주장하지 않습니다. 공개 연구·프레임워크·벤더 프로그램에 대한 모든 언급은 교육적 인용 목적에 한합니다.

### 무 보증

MIT 라이선스에 따라 "있는 그대로" 제공. [LICENSE](LICENSE) 참조. 메인테이너는 사용·오용·그 결과에 대해 책임지지 않습니다.

### 책임 공개

본 저장소에서 선을 넘는다고 판단되는 내용 — 의도치 않게 기능성 있는 예시, 활성 취약점을 노출하는 텍스트 등 — 을 발견하면 공개 토론 전에 [SECURITY.md](SECURITY.md) 절차를 따라주세요.
