# Track 2 LMF 데모 — 팀 피드백 반영 결과

작성일: 2026-08-11 / 대상: Petify for Shelters 데모 / 피드백 출처: 조니·로라·에밀리 (2026-08-10)

---

## 요약

팀 피드백 중 **데모에 해당하는 지적을 반영 완료**했다. 조니의 상태 체계·용어 지적과 로라의 데모 길이·`Ready` 의미 지적, 에밀리의 A/B 중복 지적이 모두 처리됐다.

- 조니: 문구·용어 지적 41건 중 **41건 반영**, 상태 체계 재설계 완료
- 로라: 4건 중 **4건 반영**
- 에밀리: 데모 관련 4건 중 **2건 반영, 2건 확인 답변**
- 광고 소재·랜딩페이지 피드백은 별도 트랙에서 처리 중이며 이 문서 범위 밖

반영 항목은 모두 브라우저에서 실제 조작으로 동작을 확인했다.

---

## 1. 조니 피드백

### 1-1. 상태 체계 (핵심 지적)

> 동물의 현재 운영 상태와 외부 게시 상태가 하나의 연속된 상태처럼 보임

상태 값을 **대상별 네 축으로 분리**했다. 한 값이 두 대상에 붙지 않는다.

| 축 | 상태의 대상 | 값 |
| --- | --- | --- |
| 보호 단계 | 동물 | `New intake` / `In care` / `Adopted` |
| 체크인 | 요청·제출 한 회차 | `Not sent` / `Sent` / `In progress` / `Overdue` / `Needs review` / `Changes requested` / `Applied` |
| 게시 | 공개 프로필 | `Not ready` / `Ready to publish` / `Published` |
| 임보자 | 사람 | `Active` / `Available` / `Inactive` |

- `Needs review`는 **체크인 제출에만** 사용한다. 동물에는 `Needs attention`으로 표시해 "검토할 업무가 있음"과 "동물의 상태"를 분리했다
- `Ready` 단독 표기를 전면 제거하고 게시 맥락의 `Ready to publish`로 통일했다
- Dashboard 카드를 `동물 현황` / `확인 필요` / `게시` 세 그룹으로 나눴다

### 1-2. Animals 화면 컬럼

> Stage와 Readiness가 사실상 중복됨 / Primary blocker는 제품 내부 용어

| 이전 | 이후 |
| --- | --- |
| Stage | `Current status` |
| Readiness | **컬럼 삭제** (Stage와 중복) |
| Primary blocker | `Needs attention` |
| Next action | `Next step` |
| — | `Listing status` 컬럼 신설 |

### 1-3. 내부 용어 제거

지적된 용어를 모두 사용자 언어로 교체했다.

| 이전 | 이후 |
| --- | --- |
| `Readiness checklist` | `Publishing requirements` |
| `CARE CADENCE` | `CARE & CHECK-IN SCHEDULE` |
| `EXCEPTION RULE` | `NEEDS STAFF ATTENTION` |
| `FOSTER NETWORK STATUS` | `FOSTER OVERVIEW` |
| `Interactive Pretotype` | `Interactive Demo` |
| `Status tabs are mutually exclusive…` | 문장 삭제 |

### 1-4. `update` 용어 중복

관리자 요청·임보자 제출·기록 변경이 모두 `update`로 불리던 문제를 해소했다.

| 이전 | 이후 |
| --- | --- |
| 좌측 메뉴 `Updates` | `Check-ins` |
| `Request update` | `Request check-in` |
| `New foster submission` | `New foster check-in` |
| `Approve update` | `Apply to record` |

### 1-5. 화면별 문구

지적된 문구를 화면별로 모두 교체했다. 주요 항목은 다음과 같다.

| 화면 | 이전 | 이후 |
| --- | --- | --- |
| Dashboard | `Move work forward` | `Quick actions` |
| Dashboard | `Medical clearance needs review` | `Medical review pending` |
| Check-ins | `1 meaningful change detected` | `1 change to review` |
| Check-ins | `Public use` | `Use on public profile` |
| Fosters | `adoption-ready media` | `adoption photos` |
| Fosters | `Missed medication or concerns alert Alex` | `Alex is alerted to missed medications or reported concerns.` |
| Publishing | `Sync status` | `Sync now` |
| Publishing | `Shelter website · Available` | `Connected` |
| Settings | `Required · Current within 30 days` | `Required · Updated within the last 30 days` |
| Settings | `At least 3 public photos` | `At least 3 photos approved for public use` |

- 활동 이력의 `Medical clearance approved by Dr. Casey`처럼 **실제로 승인이 일어난 기록**은 의미가 달라지므로 그대로 두었다

---

## 2. 로라 피드백

### 2-1. B 랜딩과 데모가 서로 다른 문제를 이야기함 (핵심 지적)

> 하나는 매일의 예외를 찾는 흐름이고 다른 하나는 정기적으로 상세 정보를 모으는 흐름

**데모를 랜딩에 맞추는 방향으로 해소했다.** 원인은 임보자 폼의 선택지가 화면을 전혀 분기하지 않았던 것이다. `문제 없음`을 선택해도 상세 질문이 그대로 표시되고 제출하면 운영자 검토로 넘어갔다.

반영 내용은 다음과 같다.

| 임보자 선택 | 이전 | 이후 |
| --- | --- | --- |
| `Doing well` (문제 없음) | 상세 질문 표시 → 제출 → 운영자 검토 | **질문 1개로 종료 → 자동 기록 → 운영자 검토 생성 안 함** |
| `Something changed` | 동일 | 상세 질문 → 제출 → 운영자 검토 |
| `Needs attention` | 동일 | 도움 요청 입력 → 운영자 즉시 알림 |

`문제 없음`으로 제출한 경우 운영자 화면에서 확인 가능한 결과는 다음과 같다.

- Animals 목록: `Needs attention` = `None`
- Dashboard `확인 필요` 카드: 증가하지 않음
- Check-ins 검토 목록: **표시되지 않음**
- 활동 이력: `Milo · No changes reported · logged automatically`

로라가 제안한 최소 흐름 4단계와 동일한 구조이며, 주간 상세 업데이트는 삭제하지 않고 **변화가 보고된 경우의 흐름**으로 남겼다.

#### 일간 돌봄 자동 발송 보완 (2026-08-12)

소재 B의 `일간 돌봄은 정해진 시간에 자동으로 발송된다`는 기능을 B-1 첫 단계에 추가했다. 일간 돌봄과 주간 체크인이 서로 다른 입력 주기임을 화면과 튜토리얼 문구에서 구분했다.

| 확인 지점 | 반영 내용 |
| --- | --- |
| B-1 시작 화면 | Fosters 화면의 `Daily care and weekly check-ins` 영역에서 시작 |
| 운영자 화면 | `Sent automatically at 8:00 AM` 표시로 당일 일간 돌봄 링크의 자동 발송 확인 |
| 임보자 화면 | `Sent automatically today at 8:00 AM` 표시로 수신 시점 확인 |
| 다음 단계 | 첫 단계의 `Continue` 선택 시 기존 Check-ins 화면의 주간 체크인 요청·추적 흐름으로 전환 |
| 예외 처리 | 일상적인 돌봄 완료는 Milo의 돌봄 로그에 저장하고, 투약 누락·우려 사항만 Alex에게 알림 |

### 2-2. A의 `Ready` 의미

> 이 승인만으로 입양 가능한 상태가 된 건가

- `Ready` 단독 표기를 전면 제거하고 `Ready to publish`로 통일했다
- 동물 상세의 상태 영역 명칭을 `CURRENT READINESS`에서 `PUBLISHING STATUS`로 바꿔 대상이 게시임을 명시했다
- 게시 요건 체크리스트를 **상태 + 확인 필요 내용 + 다음 할 일** 3단으로 재구성해, 무엇이 남았고 다음에 무엇을 해야 하는지가 항목별로 보이게 했다

| 요건 | 상태 | 확인 필요 | 다음 할 일 |
| --- | --- | --- | --- |
| Behavior | `Out of date` | Last confirmed 18 days ago | Request check-in |
| Documents | `In progress` | Intake record only | Upload documents |
| Public profile | `Not started` | Description not started | Write description |

- `Blocked`·`Incomplete` 같이 "완료가 아님"만 알리는 표현을 없애고, **어떤 종류의 미완료인지**를 표시한다

### 2-3. 데모 흐름의 길이

> A는 12단계, B는 20단계… 5~7분 안에 끝나는 흐름으로

**B를 역할별 3개 투어로 분할했다.** 실측 결과 기존 B의 뒤 7단계가 A의 후반부와 완전히 동일했다.

| 투어 | 내용 | 단계 |
| --- | --- | --- |
| B-1 | 일간 돌봄 자동 발송 확인 → 주간 체크인 요청·추적 (운영자) | 10 |
| B-2 | 임보자 응답 (변화 없는 주) | 4 |
| B-3 | 제출 검토·반영 (운영자) | 4 |
| 선택형 확장 | 게시까지 이어보기 | 5 |

- 각 파트가 끝나면 **다음 파트로 이어갈지 묻는 화면**이 나오며, 원하는 지점부터 시작할 수도 있다
- 게시 구간은 별도 확장으로 분리해, 리드가 궁금해할 때만 이어서 보여준다
- A는 기존 12단계를 유지했다

### 2-4. 스크린 확인 사항

| 지적 | 처리 |
| --- | --- |
| 시연자용 기능(`Demo tours` 등)이 제품 기능처럼 보임 | `Start tour`로 명칭 변경, 투어 선택은 별도 화면으로 분리 |
| 모바일 Animals 표의 가로 스크롤 사용성 | **미반영.** 모바일 레이아웃 개선은 별도 작업으로 분리 |

---

## 3. 에밀리 피드백

| 지적 | 처리 |
| --- | --- |
| 튜토리얼 A가 B에서 반복되는 것이 의도인지 | **실제 중복이 맞았고 해소했다.** B의 뒤 7단계가 A의 6~12단계와 동일했으며, 해당 구간을 선택형 확장으로 분리했다 |
| 임보자는 가입 없이 SMS·메일 링크로 업데이트하는 구조가 맞는지 | **맞다.** 데모에서 두 채널의 실제 발송 화면을 확인할 수 있으며, B-1에서 이메일과 문자 미리보기를 모두 보여준 뒤 문자 화면으로 마무리하도록 조정했다 |
| 임보자 피드백이 없으면 운영될 수 없는 구조로 보임. 쉘터가 직접 입력·관리할 수 있는 포인트 필요 | **제품 요구사항으로 접수.** 현재 데모에서도 운영자가 동물 기록을 직접 수정할 수 있으나 흐름으로 시연되지는 않는다. 반영 여부는 제품 범위 결정 사항 |
| 광고 이미지·랜딩 관련 (로고, 그라디언트, 줄바꿈, Before/After 등) | 이 문서 범위 밖. 소재·랜딩 트랙에서 처리 |

---

## 4. 함께 개선한 사항

시연 중 확인된 문제를 함께 처리했다.

| 항목 | 이전 | 이후 |
| --- | --- | --- |
| 튜토리얼 되돌리기 | 없음. 놓치면 처음부터 다시 시작 | `Back` 버튼 신설. 화면 상태까지 함께 되돌아감 |
| 화면 전환 시 스크롤 | 이전 화면의 스크롤 위치가 남아 빈 영역이 보임 | 화면이 바뀌면 상단으로 이동 |
| 목록의 더미 행 | 동물 34행 중 26행, 임보자 31명 중 28명이 빈 회색 행 | **더미 전면 제거.** 실제 데이터만 표시하고 모든 집계를 실제 수에서 계산 |
| 동작하지 않는 페이지 이동 버튼 | 목록 하단에 표시되나 동작하지 않음 | 삭제 |
| Check-ins와 Animals 불일치 | Rocky·Maple·Nori의 체크인은 있으나 동물 목록에 없음 | 세 마리를 목록에 추가해 정합성 회복 |

---

## 5. 미반영 항목

| 항목 | 사유 |
| --- | --- |
| 모바일 Animals 화면의 카드형 개선 | 레이아웃 재설계가 필요해 별도 작업으로 분리 |
| `Next step` 컬럼에서 화면 이동 명령과 업무 동사 분리 | 컬럼 의미 재정의가 필요한 사안으로, 결정 후 진행 |
| 쉘터 직원의 직접 입력 흐름 시연 | 제품 범위 결정 사항 |
| 한국어 모드 일부 문구 미번역 | 데모 시연은 영문 기준이므로 후순위로 분리 |
| A 투어의 종료 지점 조정 | A의 검증 범위 결정과 함께 판단 |

---

## 6. 확인 방법

- 데모 우측 상단 `Start tour`에서 **A · B-1 · B-2 · B-3** 네 개 중 선택
- B의 전체 흐름을 보려면 B-1에서 시작해 각 파트 종료 시 이어보기를 선택
- 로라 피드백 2-1의 반영 결과는 **B-2**에서 확인 가능 (`Doing well` 제출 후 운영자 화면에 검토 항목이 생기지 않음)
- 소재 B의 일간 돌봄 자동 발송은 **B-1 1단계**에서 확인 가능
- 에밀리 피드백의 SMS·메일 발송 화면은 **B-1 6단계**에서 확인 가능
