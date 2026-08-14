# Track 2 LMF 랜딩 구현 및 이벤트 정의서

> 최종 개정: 2026-08-14 (별첨 A 개발용 사이트 구현 스펙 추가). 직전 개정: 2026-08-12 (리드 수집을 2단계로 분리)

> 결론: 랜딩 A·B·C는 공통 추적 코드와 고정 식별자를 사용하므로, 카피·이미지 수정 시 추적 코드를 재설치할 필요 없음. 섹션 식별자·CTA 식별자·제출 성공 호출만 유지 필요.

> 개정 결론: 리드 수집을 2단계로 분리. 랜딩은 조직명·이름·이메일만 받아 즉시 시트에 저장하고, 추가 문항과 일정 예약은 신설 `/book/` 화면에서 **버튼 한 번**으로 처리. 두 단계는 `lead_id`로 묶여 시트의 **같은 행**에 기록됨.

## 1. 운영 구조

| 항목 | 기준 |
| --- | --- |
| 정본 소스 | GitHub `kayamfitlab/petnow-shelter-landing`의 `main` 브랜치 |
| 운영 배포 | GitHub `main` → Cloudflare Pages 자동 배포 |
| 운영 주소 | `https://petify-for-shelters.pages.dev` |
| 랜딩 구분 | `/ready/` A, `/fosters/` B, `/intake/` C |
| 예약 화면 | `/book/` 1개 화면. `?v=a\|b\|c`로 소재별 추가 문항 분기 |
| 공통 추적 | `/tracking-config.js`, `/tracking.js` |
| 리드 저장 | Google Apps Script 성공 응답 후 Google Sheet 저장 완료 처리 |
| 일정 예약 | Cal.com. 가용 시간 조회와 예약 생성 모두 Apps Script가 서버에서 대행 |

- 세션 리플레이 QA: 2026-08-10 운영 A·B 랜딩으로 생성한 실제 리플레이가 Mixpanel에 수신·재생됨을 확인. 공개 콘텐츠는 재생되고, QA용으로 입력한 조직명·이름·이메일·자유입력 값은 재생 화면에서 노출되지 않음
- 캐시 기준: A·B·C에서 `tracking-config.js`와 `tracking.js`에 배포 버전을 부여하여 기존 방문자도 최신 수집·마스킹 설정을 불러오도록 관리

### 1.1 2단계 리드 수집 (2026-08-12 신설)

| 단계 | 화면 | 수집 항목 | 저장 동작 |
| --- | --- | --- | --- |
| 1 | 랜딩 A·B·C | 요청 유형, 조직명, 이름, 이메일 | 시트에 신규 행 생성. `lead_id`(UUID)·`landing_variant` 동시 기록 |
| 2 | `/book/` | 조직 유형, 응답자 직무, 소재별 추가 문항, 예약 일시 | `lead_id`로 1단계 행을 찾아 **같은 행에 갱신** + Cal.com 예약 생성 |

- 단계 이동: 1단계에서 `Book a session`을 선택한 제출만 `/book/`으로 이동. `Keep me posted` 선택은 1단계에서 종료
- 개인정보 경로: 이름·이메일은 URL이 아닌 동일 출처 `sessionStorage`로 전달. 2단계 화면은 `lead_id`만 URL로 받음
- 재입력 방지: Cal.com 예약 시 이름·이메일은 서버가 시트에서 읽어 전달. 사용자는 2단계에서 이름·이메일을 다시 입력하지 않음
- 버튼 수: 2단계 화면의 제출 버튼은 1개. 추가 문항 저장과 일정 예약이 같은 클릭으로 처리됨
- 슬롯 경합: 화면 노출 중 해당 시간이 마감된 경우 Cal.com이 실패를 반환. 화면은 오류 대신 캘린더를 갱신하고 재선택을 안내
- 부분 실패: Cal.com 예약이 실패해도 추가 문항은 같은 행에 저장. 리드를 유실하지 않음
- Cal.com 기준: 이벤트 타입 `30min`(ID `6641708`), 화상 도구 Cal Video. API 키는 Apps Script의 Script Properties에만 보관하며 저장소·프런트엔드에 두지 않음
- 예약 관리 링크: Cal.com 예약 생성 응답에 취소·변경 URL이 포함되지 않음. `https://cal.com/booking/{uid}` 형식의 예약 관리 페이지를 조립해 사용하며, 2026-08-12 실제 예약으로 취소·변경 버튼 노출을 확인함
- 예약 확인 메일: 생성·취소 모두 신청자와 호스트에게 각각 1통씩 발송됨. 발신자 표시가 신청자용은 Cal.com 프로필명(`petify for shelters`), 호스트용은 `Cal.com`이며 시각은 각 수신자의 타임존으로 표기됨. Gmail이 동일 제목을 스레드로 묶어 확인 메일이 1건처럼 보일 수 있음
- 예약 취소 시 캘린더 반영: Cal.com 취소가 연결된 Google Calendar 일정까지 삭제함(2026-08-12 실측)

### 1.2 예약 취소·변경 반영 (2026-08-12 신설)

| 항목 | 기준 |
| --- | --- |
| 트리거 | Cal.com 웹훅 `BOOKING_CANCELLED`, `BOOKING_RESCHEDULED` |
| 수신 경로 | Apps Script 웹 앱 `?action=calhook&token=...` (POST) |
| 취소 처리 | **행을 삭제하지 않음.** `booking_status`를 `cancelled`(+취소 사유)로 기록하고 해당 행 전체에 취소선 서식 적용 |
| 변경 처리 | `booking_start`·`booking_uid`·`meeting_url`·`manage_url`을 새 값으로 갱신하고 취소선 해제, `booking_status`는 `rescheduled` |
| 재예약 | 같은 행에 새 예약이 생성되면 `booking_status`는 `booked`, 취소선 해제 |
| 행 식별 | `booking_uid` 기준. 변경 건은 이전 uid로 먼저 조회 |

- 리드 행을 보존하는 이유: 취소는 리드 유실이 아니므로 리드 수 집계에서 빠지면 안 되고, 취소 이력 자체가 시간대·소재 평가의 재료가 됨
- 웹훅 인증: Cal.com은 HMAC 서명 헤더를 보내지만 Apps Script `doPost`는 요청 헤더를 읽을 수 없음. 따라서 공유 비밀값을 쿼리스트링(`token`)으로 전달함. 위조 시 영향은 행의 취소 표시뿐이며 데이터 삭제·외부 발송은 발생하지 않음
- 미대응 트리거는 200으로 응답해 Cal.com의 재시도 누적을 방지함

## 2. 측정 구성

| 도구 | 측정 항목 | 현재 기준 |
| --- | --- | --- |
| Meta Pixel | `PageView`, `InlineCTAClick`, `FloatingCTAClick`, `Lead`, `BookingCompleted` | Meta 자동 이벤트 감지 비활성화. 수동 이벤트에 랜딩·경로·URL·UTM 속성 명시. `Lead`는 CAPI와 동일한 `event_id`로 중복 제거 |
| Meta Conversions API | 서버 측 `Lead` | 폼 저장 성공 건만 전송 |
| LinkedIn Insight Tag | 페이지 방문·리드 전환 | Partner ID·Conversion ID 연결 필요 |
| Mixpanel | 섹션 열독·단계 도달·CTA·리드·세션 리플레이 | `Petify for shelters` 프로젝트 토큰 및 공식 브라우저 SDK 연결. A·B·C 방문 세션 100% 녹화, 폼 입력값 마스킹. 페이지·섹션·CTA 이벤트와 랜딩·UTM 속성 실수신 확인 |

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
| `Booking Page Viewed` | `/book/` 화면 로드 | `landing_variant`, `page_path`, `page_title`, UTM 5종 |

- `Booking Page Viewed`는 `<body data-page-type="booking">` 선언으로 `Landing Viewed`와 분리됨. 두 이벤트의 차이가 곧 1단계 제출 후 2단계 도달률
- 섹션 진입 판정: 해당 콘텐츠 영역의 15% 이상 화면 노출
- 중복 기준: 동일 페이지 세션에서 섹션별·단계별 1회 기록
- `main_text`: 사용자가 실제로 본 섹션 대표 제목의 현재 화면 문구
- Mixpanel의 퍼센트 기반 자동 스크롤 이벤트: 미사용
- UTM super property: 현재 URL의 `utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`을 등록하여 같은 방문에서 발생하는 섹션·CTA·리드 이벤트에도 전달. URL에 없는 UTM 값은 이전 방문 값이 남지 않도록 해제

### 3.2 행동 및 전환

| 이벤트명 | 트리거 | 핵심 속성 |
| --- | --- | --- |
| `Inline CTA Clicked` | 본문 중간 CTA 클릭 | `landing_variant`, `cta_location`, `cta_text`, `destination` |
| `Floating CTA Clicked` | 화면 하단 플로팅 CTA 클릭 | `landing_variant`, `cta_location`, `cta_text`, `destination` |
| `Lead Submitted` | 1단계. Google Apps Script의 저장 성공 응답 수신 | `landing_variant`, `event_id`, `lead_intent` |
| `Booking Completed` | 2단계. Cal.com 예약 생성과 같은 행 갱신이 모두 성공한 응답 수신 | `landing_variant`, `organization_type`, `respondent_role`, `animal_record_system`, `annual_adoptions`, `active_fosters`, `animal_origin`, `current_tools`, `booked_start`, `booked_timezone` |

Meta는 이벤트명 제약과 표준 `Lead` 최적화를 고려하여 Mixpanel과 동일한 트리거를 `InlineCTAClick`, `FloatingCTAClick`, `Lead`, `BookingCompleted`로 수집. Meta 자동 감지 이벤트(`SubscribedButtonClick` 등)는 사용하지 않음.

`Lead Submitted`는 제출 버튼 클릭이 아니라 폼 유효성 검사 통과 및 서버 저장 성공을 기준으로 기록. 필수값 오류, 네트워크 오류, 서버 저장 실패는 전환에서 제외.

- **속성 이관 (2026-08-12)**: 프로필 속성 7종(`organization_type`·`respondent_role`·`animal_record_system`·`annual_adoptions`·`active_fosters`·`animal_origin`·`current_tools`)이 `Lead Submitted`에서 `Booking Completed`로 이동. 해당 문항을 2단계에서 받으므로 1단계 시점에는 값이 존재하지 않음. 속성명은 변경하지 않아 기존 리포트의 속성 참조는 유지되며, 참조 이벤트만 교체 필요
- Mixpanel 리드 속성: 조직명·이름·이메일·허니팟은 두 이벤트 모두에서 제외. `organization_type`은 조직 유형, `respondent_role`은 응답자 직무, `animal_record_system`은 현재 동물 기록 관리 도구를 의미
- **Meta 최적화 이벤트는 1단계 `Lead` 유지**: 2단계로 옮기면 전환 발생 건수가 줄어 광고 학습이 지연됨. 2단계는 최적화에 쓰지 않는 커스텀 이벤트 `BookingCompleted`로 분리해 퍼널 분석 용도로만 사용
- Meta `Lead`·`BookingCompleted`: 광고 최적화용 표준 이벤트와 기존 랜딩·URL·UTM 속성만 유지. 폼 자유입력값은 Meta에 전송하지 않음
- 퍼널 정의: `Landing Viewed` → `Lead Submitted` → `Booking Page Viewed` → `Booking Completed`. 2단계 이탈은 `Booking Page Viewed` 대비 `Booking Completed`로 측정

## 4. 콘텐츠 수정 시 유지 항목

| 대상 | 유지 기준 |
| --- | --- |
| 랜딩 구분 | `<body data-landing-variant="A|B|C">` |
| 섹션 | `data-track-section="hero|problem|how_it_works|outcomes|evidence|lead_form"` |
| 작동 방식 단계 | `#how` 내부 `.step`, 단계 제목 `<h4>` |
| 본문 Inline CTA | `data-track-cta="main"` |
| 플로팅 CTA | `data-track-cta="floating"` |
| 리드 전환 | 저장 성공 후 `petifyTracking.trackLead(eventId)` 호출 |
| 예약 화면 구분 | `/book/`의 `<body data-page-type="booking">` 및 `?v=`로 설정되는 `data-landing-variant` |
| 예약 전환 | 예약 성공 후 `petifyTracking.trackBooking(속성)` 호출 |
| 단계 연결 | 1단계가 발급하는 `lead_id`, `sessionStorage`의 `petifyLead`, `/book/?lid=&v=` 파라미터 |
| Privacy Notice | 새 창 열기 `target="_blank" rel="noopener"` |

- 제출 상태: 제출 요청 즉시 버튼을 비활성화하고 `Submitting…`으로 변경. 실패 시 선택한 요청 유형의 원래 버튼명으로 복구
- 제출 완료: 저장 성공 후 폼·제출 버튼을 숨기고 `Thanks — we've got it.` 안내 노출. 완료 상태는 랜딩 경로별 `sessionStorage`에 저장하여 현재 탭 세션 동안 유지하고 새 탭·새 브라우저 세션에서는 폼 재노출
- 중복 방지: 제출 중 버튼 연속 클릭 차단, 완료 후 플로팅 CTA 숨김. 서버의 동일 이메일 2분 제한은 다른 탭·세션 중복 요청에 대한 보조 방어로 유지

섹션 추가·삭제 또는 역할 변경 시 이벤트 택소노미와 식별자를 함께 수정. 단순 카피·이미지·스타일 변경은 추적 코드 재설치 불필요.

## 5. 배포 전 필수 QA

1. 랜딩 A·B·C의 섹션 이벤트 및 `main_text` 확인
2. 작동 방식 1·2·3단계의 `step_number`·`step_title` 확인
3. 메인 CTA와 플로팅 CTA 이벤트 분리 확인
4. 폼 성공 건의 Google Sheet 저장 및 Pixel+CAPI 중복 제거 확인
5. Mixpanel SDK 이벤트의 실시간 수신 확인. 추적 차단 브라우저는 별도 환경으로 구분
6. Mixpanel 세션 리플레이 생성·재생 및 폼 입력값 마스킹 확인
7. 1단계 제출 후 `/book/?lid=&v=` 자동 이동 및 이름 표시 확인
8. `/book/` 캘린더에 Cal.com 실제 가용 시간 표시 및 사용자 타임존 기준 시각 확인
9. 예약 확정 1건의 시트 반영 확인. **신규 행이 아니라 1단계 행이 갱신**되어야 하며 `booking_start`·`booking_uid`·`manage_url` 기록
10. Cal.com 확인 메일·캘린더 초대 수신 및 예약 관리 페이지 동작 확인. QA 예약은 확인 후 취소
11. `Booking Page Viewed`·`Booking Completed`의 Mixpanel 수신 및 Meta `BookingCompleted` 수신 확인
12. `Keep me posted` 선택 시 `/book/`으로 이동하지 않고 1단계에서 완료되는지 확인
13. 예약 취소 1건으로 해당 행의 취소선 표시와 `booking_status=cancelled` 기록 확인. 행이 삭제되지 않아야 함

---

## 별첨 A. 개발용 사이트 구현 스펙 (2026-08-14 신설)

> 결론: 라이브와 화면·동작이 같고, 되돌릴 수 없는 것만 목적지를 개발용으로 바꾼 판. 라이브 파일과의 차이는 `tracking-config.js` 한 개뿐이며 나머지는 바이트 단위로 동일.

### A.1 배치

| 항목 | 기준 |
| --- | --- |
| 주소 | `https://petify-internal.pages.dev` |
| 배포 | Cloudflare Pages 별도 프로젝트에 wrangler 직접 업로드. 연결된 저장소 없음 |
| 원본 | 로컬 작업 폴더 (git 저장소 아님) |
| 라이브 영향 | 없음. 이 사이트 수정은 운영 배포 경로와 분리됨 |
| 하위 경로 배포 | 금지. HTML이 자산을 절대 경로로 참조하므로 하위 경로에 올리면 추적 코드와 폼 전송이 운영 것으로 해석되어 실제 리드·예약이 생성됨. 반드시 별도 도메인 루트에만 배포 |

### A.2 라이브와의 차이

| 대상 | 라이브 | 개발용 |
| --- | --- | --- |
| Google Apps Script | 운영 시트에 저장 | 개발용 시트에 저장 |
| Cal.com | 운영 이벤트 타입에 예약 생성 | 개발용 이벤트 타입에 예약 생성 |
| Meta 픽셀 | PageView·CTA·Lead 전송 | 픽셀 ID를 공란으로 두어 미로드 |
| Meta CAPI | Apps Script가 서버에서 전송 | 개발용 스크립트에 토큰을 넣지 않아 미전송 |
| Mixpanel | `Petify for shelters_Live` | `Petify for shelters_Dev`, 세션 리플레이 100% |
| LinkedIn Insight | ID 미확보로 미로드 | 동일 |
| 화면·모션·폼 검증·단계 전환·추적 코드 | — | 라이브와 동일 |

- 광고 플랫폼으로 나가는 신호는 브라우저(픽셀)와 서버(CAPI) 두 경로다. 픽셀 차단만으로는 서버 경로가 남으므로 두 경로를 각각 차단함

### A.3 백엔드 전환 방식

| 항목 | 기준 |
| --- | --- |
| 전환 지점 | `tracking-config.js`의 `DEV_ENDPOINT` 한 값 |
| 값이 있을 때 | Apps Script 요청 주소를 개발용 웹 앱 주소로 치환하여 실제 전송 |
| 값이 없을 때 | `window.fetch`를 가로채 브라우저 안에서 응답을 생성. 시트 저장·예약 생성 없음 |
| HTML 수정 | 없음. 주소 치환 방식이므로 세 페이지 모두 라이브와 파일이 동일하게 유지됨 |
| 안전장치 | 주소가 운영과 같거나 `https://script.google.com/macros/s/…/exec` 형식이 아니면 전환하지 않고 가로채기 유지 |
| 상태 표시 | 화면 좌하단 배지에 `시트·예약 없음` 또는 `데브 시트·데브 캘린더` 표기 |

### A.4 가상 슬롯 생성 규칙 (전환 전 상태에서만 적용)

- 운영 예약 창(KST 09:00~13:00 · 21:00~23:00)과 같은 형태로 생성
- 평일만 생성. 조회 시점 기준 2일 뒤부터 개방 (표준시 편차 ±14시간을 고려한 하한)
- 담당자 실제 일정 충돌은 반영하지 않으므로 창 전체가 항상 비어 있는 상태로 표시
- 페이지가 응답을 방문자 표준시로 다시 묶으므로 어느 지역에서 열어도 운영과 같은 형태로 표시

### A.5 `/book/` 검토용 시안 2종 (라이브 미반영)

- 배경: 예약 창이 미 서부 기준 현지 새벽으로만 보여 실유입 리드 2건이 시간 미선택으로 이탈

| 시안 | 경로 | 구성 | 서버 요구사항 |
| --- | --- | --- | --- |
| 1안 캘린더 제거 | `/book/` | 추가 문항만 수집, 일정은 담당자가 메일로 조율. 완료 화면은 영업일 1일 내 회신 안내 | `details` 액션 신설 필요 (기존 `book`은 슬롯 점유 동작이므로 분리) |
| 2안 추천 시간 | `/book-picks/` | 기존 화면 유지 + 캘린더 위에 방문자 현지 시각 기준 추천 3개 | 없음. 기존 `slots`·`book` 액션 사용 |

- 2안 추천 규칙: 저녁 17~21시 → 오전 8~11시 → 낮 11~17시 → 그 외 순으로 순위를 매겨 상위 3개. 같은 날은 1개만 선정. 캘린더는 화면에 표시된 달만 보유하므로 추천은 조회 시점부터 45일 범위를 별도 요청
- 2안 예외 처리: 상위 3개가 모두 새벽·심야 구간이면 제목을 `The soonest we can do`로 전환하고 안내 문구를 조정. 새벽 시간대를 추천으로 제시하지 않음
- 2안 표준시 표기: 방문자 브라우저 표준시를 읽어 추천 시각·라벨·캘린더를 함께 전환. 미국 외 표준시는 기존 규칙대로 Eastern으로 대체 표시

### A.6 개발용 환경에서 확인한 동작

| 항목 | 결과 |
| --- | --- |
| 1안 필수값 검증 | 미입력 3건 차단, 완료 화면 미전환 |
| 1안 제출 전문 | `action=details`, 방문자 브라우저 표준시, 답변 5개 전송 |
| 1안 모바일 첫 화면 | 390×664 기준 첫 입력칸 하단 603px, 가로 넘침 없음 |
| 2안 추천 산출 | 태평양시 접속 시 17:00대 3건, 동부시 접속 시 20:00대 3건. 동일 데이터에서 방문자 기준으로 분기 확인 |
| 2안 추천 선택 | 칩 선택 시 캘린더 날짜·슬롯·요약·제출 버튼 활성화까지 연동 확인 |
| 전환 안전장치 | `DEV_ENDPOINT` 공란 상태에서 Apps Script 방향 외부 요청 0건 |

### A.7 적용 대기 항목

| 항목 | 내용 |
| --- | --- |
| 개발용 Apps Script | 개발용 시트 기준 웹 앱 배포 및 개발용 Cal.com 이벤트 타입 연결 |
| `details` 액션 | 1안 적용 시 서버에 신설. 예약을 생성하지 않고 해당 행의 답변과 상태만 갱신 |
| 예약 미완료 알림 | 1안 적용 시 기존 "30분 내 예약 미완료" 조건이 성립하지 않으므로 기준 재정의 |
| 이벤트 명칭 | 1안은 `Booking Completed`에 `booking_mode=email_followup`을 부여해 유지 중. 명칭 변경 시 공통 추적 파일을 라이브·개발용 양쪽에서 함께 수정 |
| 취소 웹훅 | 개발용 Cal.com 이벤트 타입에 별도 설정 |
