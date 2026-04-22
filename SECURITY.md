# Security Policy

> 🌐 **English** (below) · [한국어](#보안-정책-korean)

## Scope

This repository is a **document / classification system** with no executable code, so traditional "vulnerability reports" do not apply.

Use the procedures below if the following cases apply.

### 1. Repository content issues

If the repository content:
- Accidentally includes working exploits
- Exposes harmful templates
- Poses immediate risk to specific models / vendors

→ **Before opening a GitHub Issue**, email first: `sueun.dev@gmail.com`

Target response within 48 hours. Content will be reviewed, corrected, or removed.

### 2. LLM model vulnerability discovery

This repository is **not** a reporting channel. Do Responsible Disclosure directly with the vendor:

| Vendor | Channel |
|---|---|
| **Anthropic** | `security@anthropic.com` · HackerOne `anthropic` |
| **OpenAI** | `security@openai.com` · Bugcrowd |
| **Google DeepMind** | `security@google.com` · Google VRP |
| **Meta** | Meta Bug Bounty |
| **Microsoft** | MSRC — `secure@microsoft.com` |

Public disclosure recommended after vendor patch. Standard timeline ~90 days (Project Zero norm).

### 3. Agent / integrated-system vulnerabilities

- MCP server security: report to MCP registry or that server's maintainer
- LangChain / LlamaIndex etc. frameworks: GitHub Security Advisories

### 4. Reporting misuse of this repository

If you discover this repo's content being used in an attack:
- GitHub abuse report
- Platform report (if on a third-party site)
- Law enforcement (serious cases)

## Security principles of this project

- **Minimum exposure**: no working payloads, no harmful targets
- **Public research only**: we do not handle undisclosed vulnerabilities
- **Responsible disclosure**: document new findings only after vendor patches
- **Transparency**: record policy changes in CHANGELOG

## Acknowledgments

This repository is indebted to OWASP, MITRE, public research by Anthropic / OpenAI / Google, and the academic community's culture of responsible disclosure.

---

## 보안 정책 (Korean)

> 🌐 [English](#security-policy) · **한국어** (아래)

### 범위

이 저장소는 **문서·분류 체계**이며 실행 가능한 코드가 없으므로, 전통적인 "취약점 보고"는 해당되지 않습니다. 다음 경우에 해당 시 아래 절차를 따라주세요.

### 1. 저장소 콘텐츠 이슈

저장소 내용이:
- 작동하는 exploit을 실수로 포함
- 유해 템플릿을 노출
- 특정 모델·벤더에 즉각적 위험 야기

→ **GitHub Issue 열기 전에** 이메일로 먼저 알려주세요: `sueun.dev@gmail.com`

48시간 내 응답 목표. 확인 후 콘텐츠 수정·삭제.

### 2. LLM 모델 취약점 발견 시

이 저장소는 신고 채널이 **아닙니다**. 해당 벤더에 직접 책임 공개:

| 벤더 | 채널 |
|---|---|
| **Anthropic** | `security@anthropic.com` · HackerOne `anthropic` |
| **OpenAI** | `security@openai.com` · Bugcrowd |
| **Google DeepMind** | `security@google.com` · Google VRP |
| **Meta** | Meta Bug Bounty |
| **Microsoft** | MSRC — `secure@microsoft.com` |

공개는 벤더 패치 이후 권장. 공개 타임라인 보통 90일 (Project Zero 기준).

### 3. 에이전트·통합 시스템 취약점

- MCP 서버 보안: MCP registry 및 해당 서버 메인테이너
- LangChain/LlamaIndex 등 프레임워크: GitHub Security Advisories

### 4. 저장소 오용 신고

이 저장소 콘텐츠가 공격에 사용되는 사례:
- GitHub abuse report
- 해당 플랫폼 신고
- 심각 시 법집행기관

### 이 프로젝트의 보안 원칙

- **최소 노출**: 작동 페이로드 · 유해 타깃 제외
- **공개 연구만**: 미공개 취약점은 다루지 않음
- **책임 공개**: 새 발견은 벤더 패치 후 문서화
- **투명성**: 정책 변경 시 CHANGELOG 기록

### 감사

이 저장소는 OWASP, MITRE, Anthropic·OpenAI·Google의 공개 연구, 학술 커뮤니티의 책임 있는 공개 문화에 빚지고 있습니다.
