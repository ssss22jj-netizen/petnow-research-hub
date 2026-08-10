# Track 2 LMF 랜딩 구현 및 이벤트 정의서

> 결론: 랜딩 A·B·C는 공통 추적 코드와 고정 식별자를 사용하므로, 카피·이미지 수정 시 추적 코드를 재설치할 필요 없음. 섹션 식별자·CTA 식별자·제출 성공 호출만 유지 필요.

## 1. 운영 구조

| 항목 | 기준 |
| --- | --- |
| 정본 소스 | GitHub `kayamfitlab/petnow-shelter-landing`의 `main` 브랜치 |
| 운영 배포 | GitHub `main` → Cloudflare Pages 자동 배포 |
| 운영 주소 | `https://petify-for-shelters.pages.dev` |
| 랜딩 구분 | `/ready/` A, `/fosters/` B, `/intake/` C |
| 공통 추적 | `/tracking-config.js`, `/tracking.js` |
| 리드 저장 | Google Apps Script 성공 응답 후 Google Sheet 저장 완료 처리 |

## 2. 측정 구성

| 도구 | 측정 항목 | 현재 기준 |
| --- | --- | --- |
| Meta Pixel | `PageView`, CTA 클릭, `Lead` | `PageView`·`Lead`에 `landing_variant`, `page_path`, `page_url` 명시. `Lead`는 CAPI와 동일한 `event_id`로 중복 제거 |
| Meta Conversions API | 서버 측 `Lead` | 폼 저장 성공 건만 전송 |
| LinkedIn Insight Tag | 페이지 방문·리드 전환 | Partner ID·Conversion ID 연결 필요 |
| Mixpanel | 섹션 열독·단계 도달·CTA·리드 | `Petify for shelters` 프로젝트 토큰 연결 완료. 직접 수집 API QA 이벤트 수신 확인. 추적 차단 확장 프로그램이 없는 세션에서 SDK 이벤트 최종 확인 필요 |

## 3. Mixpanel 이벤트 택소노미

### 3.1 섹션 및 단계

| 이벤트명 | 트리거 | 핵심 속성 |
| --- | --- | --- |
| `Landing Viewed` | 랜딩 페이지 로드 | `landing_variant`, `page_path`, `page_title`, URL에 포함된 UTM 5종 |
| `Landing 01 Hero Viewed` | Hero 섹션 진입 | `landing_variant`, `section_id`, `main_text` |
| `Landing 02 Problem Viewed` | 문제 설명 섹션 진입 | `landing_variant`, `section_id`, `main_text` |
| `Landing 03 How It Works Viewed` | 작동 방식 섹션 진입 | `landing_variant`, `section_id`, `main_text` |
| `Landing 03 How It Works Step Viewed` | 작동 방식의 1·2·3단계별 진입 | `landing_variant`, `parent_section`, `step_number`, `step_title` |
| `Landing 04 Outcomes Viewed` | 기대 변화 섹션 진입 | `landing_variant`, `section_id`, `main_text` |
| `Landing 05 Evidence Viewed` | 설계 근거 섹션 진입 | `landing_variant`, `section_id`, `main_text` |
| `Landing 06 Lead Form Viewed` | 신청 폼 섹션 진입 | `landing_variant`, `section_id`, `main_text` |

- 섹션 진입 판정: 해당 콘텐츠 영역의 15% 이상 화면 노출
- 중복 기준: 동일 페이지 세션에서 섹션별·단계별 1회 기록
- `main_text`: 사용자가 실제로 본 섹션 대표 제목의 현재 화면 문구
- Mixpanel의 퍼센트 기반 자동 스크롤 이벤트: 미사용
- UTM super property: 현재 URL의 `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`을 등록하여 같은 방문에서 발생하는 섹션·CTA·리드 이벤트에도 전달. URL에 없는 UTM 값은 이전 방문 값이 남지 않도록 해제

### 3.2 행동 및 전환

| 이벤트명 | 트리거 | 핵심 속성 |
| --- | --- | --- |
| `Main CTA Clicked` | 본문 중간 CTA 클릭 | `landing_variant`, `cta_location`, `cta_text`, `destination` |
| `Floating CTA Clicked` | 화면 하단 플로팅 CTA 클릭 | `landing_variant`, `cta_location`, `cta_text`, `destination` |
| `Lead Submitted` | Google Apps Script의 저장 성공 응답 수신 | `landing_variant`, `event_id` |

`Lead Submitted`는 제출 버튼 클릭이 아니라 폼 유효성 검사 통과 및 서버 저장 성공을 기준으로 기록. 필수값 오류, 네트워크 오류, 서버 저장 실패는 전환에서 제외.

## 4. 콘텐츠 수정 시 유지 항목

| 대상 | 유지 기준 |
| --- | --- |
| 랜딩 구분 | `<body data-landing-variant="A|B|C">` |
| 섹션 | `data-track-section="hero|problem|how_it_works|outcomes|evidence|lead_form"` |
| 작동 방식 단계 | `#how` 내부 `.step`, 단계 제목 `<h4>` |
| 메인 CTA | `data-track-cta="main"` |
| 플로팅 CTA | `data-track-cta="floating"` |
| 리드 전환 | 저장 성공 후 `petifyTracking.trackLead(eventId)` 호출 |
| Privacy Notice | 새 창 열기 `target="_blank" rel="noopener"` |

섹션 추가·삭제 또는 역할 변경 시 이벤트 택소노미와 식별자를 함께 수정. 단순 카피·이미지·스타일 변경은 추적 코드 재설치 불필요.

## 5. 배포 전 필수 QA

1. 랜딩 A·B·C의 섹션 이벤트 및 `main_text` 확인
2. 작동 방식 1·2·3단계의 `step_number`·`step_title` 확인
3. 메인 CTA와 플로팅 CTA 이벤트 분리 확인
4. 폼 성공 건의 Google Sheet 저장 및 Pixel+CAPI 중복 제거 확인
5. Mixpanel SDK 이벤트의 실시간 수신 확인. 추적 차단 브라우저는 별도 환경으로 구분
