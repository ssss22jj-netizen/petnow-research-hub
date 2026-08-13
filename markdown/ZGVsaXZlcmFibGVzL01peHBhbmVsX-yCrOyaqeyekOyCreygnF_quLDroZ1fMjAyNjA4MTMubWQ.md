# Mixpanel 사용자 삭제 기록 — `$device:a2bc241b`

- 작성일: 2026-08-13
- 요청자: 카야
- 근거: Distinct ID Deletion API (GDPR/CCPA Data Deletion v3.0) 사용 지시
- 성격: **비가역 작업.** 삭제 전 상태를 이 문서로 보존

## 1. 삭제 대상

| 항목 | 값 |
| --- | --- |
| Distinct ID | `$device:a2bc241b-c911-4708-8497-7b6815803c4b` |
| 소속 프로젝트 | `Petify for shelters_Live` (ID 4053441) |
| 프로젝트 토큰 | `77426ba0438bad37f8ac6a0f127a1af5` |
| 병합된 다른 ID | 없음 (랜딩 `tracking.js`에 `identify`·`alias` 호출 부재, 익명 ID 단건) |
| `_Dev`(4052594) 존재 여부 | 없음 (동일 필터로 조회 결과 0건) |

## 2. 삭제 전 활동 스냅샷

조회 조건: 프로젝트 4053441, 최근 3개월, `$distinct_id` 값이 위 대상과 일치하는 이벤트

| 이벤트명 | 발생 건수 |
| --- | --- |
| Landing Viewed | 9 |
| Landing 01 Hero Viewed | 9 |
| Landing 02 Problem Viewed | 7 |
| Landing 03 How It Works Viewed | 7 |
| Landing 03 How It Works Step Viewed | 21 |
| Landing 04 Outcomes Viewed | 7 |
| Landing 05 Evidence Viewed | 7 |
| Landing 06 Lead Form Viewed | 7 |
| Inline CTA Clicked | 4 |
| Floating CTA Clicked | 5 |
| Lead Submitted | 6 |
| Booking Page Viewed | 5 |
| Booking Completed | 2 |
| `$session_start` | 1 |
| `$session_end` | 1 |
| `$mp_session_record` (세션 리플레이 체크포인트) | 61 |
| **합계** | **159** |

### 판정 근거 — QA 트래픽으로 추정

- 같은 기간 프로젝트 전체 `Landing Viewed` 발생 건수는 36건이며, 그중 9건이 이 대상 하나에서 발생 (약 25%)
- `Lead Submitted` 6건·`Booking Completed` 2건은 2026-08-13 최종 QA 기록(리드 폼·Cal.com 예약 검증, 예약 3건 생성 후 전량 취소)과 정합
- 즉 삭제는 실사용자 데이터가 아니라 **자체 QA 트래픽 제거**에 해당

### 함께 사라지는 것

- 위 이벤트 전량 + 해당 사용자 프로필
- 세션 리플레이 녹화 (프로젝트 리플레이 수집률이 100%라 이 세션도 녹화됨)

## 3. 실행 명령

```bash
curl -sS "https://mixpanel.com/api/app/data-deletions/v3.0/?token=77426ba0438bad37f8ac6a0f127a1af5" \
  -H "Authorization: Bearer <GDPR_OAUTH_TOKEN>" \
  -H "Content-Type: application/json" \
  -d '{"compliance_type":"GDPR","distinct_ids":["$device:a2bc241b-c911-4708-8497-7b6815803c4b"]}'
```

- 인증 토큰: Mixpanel `Profile & Preferences → Data & Privacy`에서 발급 (프로젝트 Owner/Admin 권한 필요)
- 응답으로 `tracking_id` 수령 → 상태 조회는 동일 경로에 GET
- 상태값: `PENDING` → `STAGING` → `STARTED` → `SUCCESS`
- **취소 가능 구간은 `STARTED` 진입 전까지.** 그 이후는 되돌릴 수 없음
- 실제 데이터 삭제 완료까지 최대 30일 소요

## 4. 실행 상태

- [x] **실행 완료** (2026-08-13 06:06:22 UTC, 생성 응답 HTTP 201)
- tracking_id: `e8bcd37b-abcf-4aef-860a-3bbfc0701959` (내부 id 27936810)
- 요청 계정: `kaya@mfitlab.com`
- 접수 시점 상태: `PENDING`
- 서버가 회신한 대상 확인: `project_id` 값이 4053441, `distinct_ids` 배열에 대상 ID 1건 (요청 내용과 일치)

### 상태 재조회 명령

```bash
curl -sS "https://mixpanel.com/api/app/data-deletions/v3.0/e8bcd37b-abcf-4aef-860a-3bbfc0701959?token=77426ba0438bad37f8ac6a0f127a1af5" \
  -H "Authorization: Bearer <GDPR_OAUTH_TOKEN>"
```

### 취소 명령 (`STARTED` 진입 전까지만 유효)

```bash
curl -sS -X DELETE "https://mixpanel.com/api/app/data-deletions/v3.0/e8bcd37b-abcf-4aef-860a-3bbfc0701959?token=77426ba0438bad37f8ac6a0f127a1af5" \
  -H "Authorization: Bearer <GDPR_OAUTH_TOKEN>"
```

## 5. 대안 (참고)

분석에서 제외하는 것이 목적이라면 삭제 대신 Mixpanel 코호트·필터로 이 ID를 배제하는 방법이 있으며, 이쪽은 되돌릴 수 있음. 카야 지시는 삭제 API 사용이므로 위 절차대로 진행 예정.
