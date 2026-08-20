# Petify for Shelters 데모: UI 전수와 기획 의도

작성일: 2026-08-20 / 대상: `prototype/` (Sarah Aguilar가 8/20 데모 콜에서 본 산출물) / 성격: 제품팀 브리핑 입력 자료

> 근거: `prototype/app.js`(1,264행) 전문 · `analysis/LMF_agent_전달브리프_ABC_통합제품구조_20260807.md` · `deliverables/Track2_LMF_데모_상태표시_정리안_20260811.md` · `deliverables/Track2_LMF_데모_B튜토리얼_분할안_20260811.md`

---

## 1. 결론 선행

- 데모의 설계 원리는 **동물 레코드 1건이 등록부터 게시까지 거치는 단일 흐름**이며, A·B·C 소재는 이 흐름의 서로 다른 진입점임
- 이 흐름은 Sarah가 인터뷰에서 요구한 **Animal Pathway Execution**과 구조적으로 동일함. 데모는 pathway 개념을 이미 구현 형태로 반영하고 있음
- 데모에 없는 요소는 pathway 개념이 아니라 **이를 실제로 동작시키는 기반 기능**임. ①데이터 반입 ②경과일 실계산 ③영속 저장 ④다중 사용자 ⑤게시 이후 입양 구간 5개 항목이 해당함
- 따라서 MVP는 신규 설계 과제가 아니라 **기존 데모 화면의 실물화 과제**로 정의할 수 있음

---

## 2. 제품 흐름 정의 (기획 원문)

```
간편 등록(C) → 현장·임보 업데이트 수집(B) → 입양 준비 상태 판단(A) → 홈페이지·외부 채널 게시(C)
```

| 단계 | 사용자 문제 | 데모 구현 기능 | 소재 |
| --- | --- | --- | --- |
| 동물 등록 | 필드가 많고 기본정보·사진 등록이 번거로움 | 3단계 Intake 위저드, 사진 업로드 | C |
| 준비 항목 관리 | 건강·행동·미디어·서류가 여러 도구에 분산 | 동물별 5항목 체크리스트, 규칙 설정 | A·C |
| 업데이트 요청 | 운영자가 반복 연락하고 여러 채널을 직접 확인해야 함 | 계정 없는 모바일 링크, 자동 리마인더 | B |
| 업데이트 검토 | 제출 정보가 문자·이메일·폼에 흩어짐 | 제출함, 변경 내용 대조, 승인·보완 요청 | B |
| 준비 상태 판단 | 준비가 완료된 동물과 누락 항목을 즉시 확인하기 어려움 | 상태 배너, 차단 사유, 담당자·다음 행동 | A |
| 게시 | 홈페이지·외부 채널에 동일 정보를 반복 게시해야 함 | 공개 프로필 미리보기, 채널별 게시 | A·C |

---

## 3. 전역 구조

### 3-1. 레이아웃

| 영역 | 구성 | 의도 |
| --- | --- | --- |
| 사이드바 | 브랜드 → 조직명(SECOND CHANCE RESCUE) → 메뉴 6종 → Reset demo · 계정(Alex Rivera · Administrator) | 조직 단위 워크스페이스임을 명시. 계정은 역할(Administrator) 병기 |
| 톱바 | 모바일 햄버거 · 전역 검색 · Share demo · Guided demo · 알림 · ＋Add animal | 검색은 동물·임보자·레코드를 통합 대상으로 함. Share·Guided는 데모 전용 장치 |
| 오버레이 | 모달 · 드로어 · 튜토리얼 레이어 · 토스트 | 모든 상태 변경 결과를 토스트로 안내 |

- 메뉴 6종: Dashboard / Animals / **Check-ins(배지 2)** / Fosters / Publishing / Settings
- 반응형 5단계(1180·1080·900·800·680px). 680px 미만에서 사이드바가 오버레이 드로어로 전환되며, **관리자 화면 전체가 모바일에서 동작함**
- 브라우저 뒤로가기 지원(`history.pushState`로 12개 내비게이션 키 보존)

### 3-2. 상태 축 4개 (2026-08-11 정리안 확정)

설계 원칙은 **한 상태 값은 하나의 대상에만 귀속**임. 같은 단어를 두 대상에 재사용하지 않음.

| 축 | 대상 | 값 |
| --- | --- | --- |
| 보호 단계 | 동물 | New intake / In care / Adopted |
| 체크인 | 요청·제출 1회차 | Not sent / Sent / In progress / Overdue / Needs review / Changes requested / Applied |
| 게시 | 공개 프로필 | Not ready / Ready to publish / Published |
| 임보자 | 사람 | Active / Available / Inactive |
| (채널) | 외부 채널 | Connected / Planned |

- 정리 이전에는 `Needs review`가 동물 상태와 제출 상태에 이중으로 사용되었고, `Ready`는 4개 형태로 나뉘어 있었음
- 동물 축에서 `Needs review`를 제거하고 **`Needs attention`**으로 분리한 것이 핵심 조치임
- 체크인 축은 요청과 제출을 별도 필드로 두지 않고 한 회차의 상태 값이 순차로 전이되는 구조임. 1회 요청에 제출이 반복 누적되는 1:N 구조로 변경될 경우 재검토가 필요함

---

## 4. 화면별 전수

### 4-1. Dashboard

| 구성요소 | 내용 | 의도 |
| --- | --- | --- |
| 페이지 헤더 | "Good morning, Alex — Here is what needs attention across your shelter today." | 첫 화면의 초점을 데이터 현황 조회가 아니라 당일 처리 업무 확인에 고정 |
| 지표 카드 5종 | 그룹 헤더 3분할: **동물 현황**(New intake·In care) / **확인 필요**(Needs attention) / **게시**(Ready to publish·Published) | 축이 다른 값이 한 행에 혼재하던 문제를 해소. 카드 클릭 시 Animals의 해당 필터로 진입 |
| ANIMALS NEEDING ATTENTION | 동물별 행 = 이름 · **사유** · 부가정보(담당자·시점) · **행동 버튼** | Sarah가 요구한 핵심 형태. 상태뿐 아니라 사유와 다음 행동을 같은 행에 배치 |
| ACTIVITY | 최근 변경 4건 + 전체 활동 기록 열기 | 조직 단위 변경 이력 요약 |
| Quick actions | New intake / Review check-ins / Review animal records / Publish profiles (각 건수 표시) | 대기 건이 있는 업무로 즉시 이동 |

### 4-2. Animals (목록)

- 필터 탭 6종: All / New intake / In care / **Needs attention** / Ready to publish / Published (각 실시간 건수)
- 활성 필터 바에 "Dashboard and list counts use the same animal status."를 명시. 두 화면의 수치가 서로 다르다는 오해를 차단
- 데이터 컬럼 7종 (앞뒤에 선택 체크박스 열과 액션 메뉴 열이 별도로 배치됨)

| 컬럼 | 값 예시 (Milo) | 의도 |
| --- | --- | --- |
| Animal | 사진 · 이름 · 품종/성별/나이 | — |
| Current status | In care | 보호 단계 축 |
| **Needs attention** | Behavior check-in submitted | 진행을 막고 있는 요인 표시 |
| **Next step** | Review check-in (클릭 시 해당 업무로 이동) | 다음 행동 안내. 단순 표시가 아니라 해당 업무의 진입점 |
| Listing status | Not ready | 게시 축 |
| **Owner** | Alex Rivera | 담당자 |
| Updated | 12 min ago | 최신성 |

- 컬럼 명칭은 조니의 피드백을 반영해 내부 용어(`Stage`·`Primary blocker`·`Readiness`)를 제거한 결과임

### 4-3. Animal 상세 (탭 9종)

**Overview 탭**

| 구성요소 | 내용 | 의도 |
| --- | --- | --- |
| 상태 배너 | `PUBLISHING STATUS` + 상태 문장 + 사유 설명 + 해소 버튼. 3색(ready·review·blocked) | 색상 라벨 표시에 그치지 않고 **사유·해소 행동·영향**을 함께 제시 |
| PUBLISHING REQUIREMENTS | `N of 5 sections complete` + 진행률 링·바 + 5행 체크리스트 | 준비 완료의 정의를 조직별 규칙으로 규정 |
| 체크리스트 5행 | Health / Behavior / Media / Documents / Public profile (각 행에 상태 아이콘·현재 상태 설명·상태 pill·**다음 행동**·이동 화살표) | 각 행이 곧 태스크에 해당. 클릭 시 해당 탭으로 이동 |
| NEXT STEP 카드 | 다음 행동 제목 + 담당자(아바타·역할) + 실행 버튼 + **"Assign to someone else"** | 다음 행동에 담당자를 반드시 지정 |
| RECENT ACTIVITY | 최근 변경 2건 + 전체 이력 이동 | — |

- 체크리스트의 상태 문구에 적용 규칙을 함께 표시함. 예: Behavior = "Last confirmed 18 days ago"(14일 규칙 초과) / Media = "1 intake photo · 3 more recommended"(3장 규칙 미달)

**나머지 8탭**

| 탭 | 내용 | 의도 |
| --- | --- | --- |
| Profile | 8필드 레코드(이름·종·품종·성별·나이·입소경로·입소일·현재 위치) | 기본 신원 정보 |
| Health | 광견병·DHPP·중성화·의료 클리어런스 (완료 여부·날짜·담당) | 게시 요건 ①의 근거 |
| Behavior | People / Dogs / Cats / Home notes (각 항목에 **경과일 표기**) | 게시 요건 ②의 근거. 승인 시 값과 경과일이 동시에 갱신됨 |
| Check-ins (배지 3) | 요청·제출 타임라인 | 회차별 이력 |
| Media | 사진 그리드 + 공개 사용 토글 | 게시 요건 ③ |
| Documents | 입소기록·의료동의·행동평가·입양고지 | 게시 요건 ④ |
| Public profile | 공개 필드 편집 + **"Internal notes are never included in the public profile."** | 내부·공개 정보 경계 명시 |
| **Activity** | `AUDIT TRAIL`: 요청·승인·상태 변경·게시 이벤트 6건 + Export | 완료 이력 추적. 행위자(AR/System) 병기 |

### 4-4. Check-ins

| 구성요소 | 내용 | 의도 |
| --- | --- | --- |
| 지표 4종 | Overdue / Sent / In progress / Needs review (클릭 = 필터) | 회차 상태 축 전체를 대기열 형태로 제시 |
| 좌측 목록 패널 | 탭(All·Needs review·Changes requested·Applied) + 검색 + **그룹 3단**(Needs review / Waiting / Completed) | 판단이 필요한 건을 최상단에 고정 |
| 우측 패널 4형태 | ①검토 ②추적 ③미발송 ④발송대기(회차 상태에 따라 자동 전환) | 한 화면에서 상태별 필요 정보만 제시 |
| **검토 패널** | 현재 공식 기록 ↔ 새 체크인 **좌우 대조** + 사진 3장(공개 사용 개별 선택) + 액션 4종(Reject / Request changes / **Apply selected** / Apply all to record) | 승인 전까지 공식 기록 불변. 부분 승인 지원 |
| 추적 패널 | 발송 수단 · 마감 · 폼 진행 상태 · 다음 리마인더 4칸 + 다음 행동 | 독촉 업무의 자동화 진행 상태를 가시화 |
| **Came back normal** | 변화가 없는 체크인은 검토 대기열에 포함하지 않고 이 영역에 자동 기록 | 스태프 검토 대상과 자동 기록 대상을 분리 |

### 4-5. Fosters

| 구성요소 | 내용 | 의도 |
| --- | --- | --- |
| CARE & CHECK-IN SCHEDULE | **일일 케어**(매일 08:00 자동 발송, N/5 기록) / **주간 체크인**(건강·행동·사진) / **"예외만 스태프 검토"** 3분할 | 루틴과 판단을 다른 주기로 분리 |
| 지표 4종 | Active placements / Available fosters / Updates due / Response rate | 응답률까지 운영 지표에 포함 |
| 테이블 | 임보자 · 현재 배치 동물 · 상태 · 업데이트 일정 · 응답률 | — |
| 상세 드로어 | 활성: 현재 배치·기간·코디네이터 / 케어·업데이트 / 최근 활동 · 미배치: **배치 가능 조건**(지역·가정환경·경험·이동 지원) + Start a placement | 배치 의사결정에 필요한 정보를 한 화면에 집약 |

### 4-6. Publishing

- 채널 요약 3종: **Shelter website(Connected · 24 live)** / Petfinder(Planned) / Adopt a Pet(Planned)
- 행별: 동물·사유 / 게시 상태 / 채널 점 3개 / 갱신 시각 / 액션
- 의도: 제휴 미체결 채널을 **비활성 + "Partner integration required"**로 명시. 미구현 기능을 구현된 것처럼 보이지 않게 하는 것이 이 화면의 설계 기준임

### 4-7. Settings (맞춤 설정 기능 집약 화면)

| 탭 | 내용 | 의도 |
| --- | --- | --- |
| **Publishing requirements** | 5행 규칙 편집: Health(필수·**최근 30일 이내**) / Behavior(필수·**최근 14일 이내**) / Media(공개용 **3장 이상**) / Documents(전 서류 승인) / Public profile(설명·문의처). 순서 변경·개별 토글·편집·**＋Add section** | 조직별로 다른 준비 완료 기준을 사용자가 직접 규정 |
| 안내문 | "'Ready to publish'는 Petify 기준 게시 정보 완비를 뜻하며, 의료·법적 판단은 팀의 몫" | 제품이 판단을 대신하지 않음을 명시 |
| Check-in forms | Daily care / Weekly check-in 두 템플릿 미리보기 + "두 기록의 성격이 다름" 안내 | 일일 기록과 주간 관찰의 용도 구분 |
| Publishing channels | 4-6과 동일 | — |
| Team & roles | Administrator / Reviewer / Publisher 3역할 | 권한 분리를 전제 |
| Notifications | 4종 이벤트별 수신 설정 | — |

### 4-8. 임보자 화면 (별도 페이지 · 사이드바 없음)

- 상단 고지: **"Secure foster link · No account required"**
- 모드 스위치: `TODAY 일일 케어` / `THIS WEEK 주간 체크인`

| 모드 | 구성 | 의도 |
| --- | --- | --- |
| 일일 케어 | 루틴 5종(아침 식사·아침 산책·투약·저녁 식사·저녁 산책) 탭 토글 + N/5 진행률 + Report a concern | 한 번의 탭으로 완료 기록. 누락 투약·우려 사항만 코디네이터에게 전달 |
| 주간 체크인 | **Q1 3지선다** → `Doing well` 선택 시 **즉시 종료**("Nothing else to fill in") / `Something changed` 선택 시 서술+사진+공개 동의 / `Needs attention` 선택 시 도움 요청 | 임보자 부담 최소화가 응답률 확보의 전제. 변화가 없는 주는 1회 탭으로 제출 완료 |
| 제출 완료 | 선택 분기별 문구 3종(자동 기록 / 검토 예정 / 담당자 통보) | 제출 이후의 처리 절차를 임보자에게 안내 |

### 4-9. 공개 프로필 미리보기

- 좌: 브라우저 목업 안의 입양 프로필(대표사진·이름·한 줄 소개·4팩트·소개글·특성 태그·문의 버튼)
- 우: 채널 선택(웹사이트만 활성) + 게시 진행 표시 + 예약 게시
- 의도: 게시 직전에 **입양자가 보게 될 화면을 그대로** 확인. 내부 화면과 외부 공개 화면을 최종 대조하는 단계

---

## 5. 모달·드로어 전수

| 유형 | 명칭 | 구성 | 의도 |
| --- | --- | --- | --- |
| 모달 | **Intake** | 3단계 위저드(①동물 정보·사진 ②입소 정보 ③초기 상태·담당자·우선순위) → "5개 항목 체크리스트가 자동 생성됩니다" | 등록 즉시 pathway가 시작됨을 명시 |
| 모달 | **Placement** | 미배치 동물 카드 선택 → 임보자 선택 → 기간·코디네이터·케어 일정 → "첫 체크인 예정일" 안내 | 배치 등록이 체크인 일정의 시작임을 명시 |
| 모달 | **Request check-in** | 폼 종류·발송 시점·마감일·자동 리마인더·코디네이터 + **요청 항목 6종 체크**(건강·행동·투약·체중·사진·메모) + 메시지 미리보기 | 이번 주 필요한 정보만 선택적으로 요청 |
| 모달 | **Assign** | 태스크명 · **담당자 선택**(3인) · 마감일 · 메모 → 배정 완료 | 임의 태스크의 담당자 배정 |
| 모달 | Filters / Reset | 위치·담당자·**정보 경과일**·단계 필터 / 데모 초기화 | 경과일을 필터 축으로 제공 |
| 드로어 | **Message preview** | SMS·이메일 탭 전환 + 전달 세부(자동 리마인더·보안 링크) + **제출 후 3단계 흐름**(Submitted → Needs review → Applied) | 발송 전 실물 확인. 승인 전까지 기록이 변경되지 않음을 재안내 |
| 드로어 | Foster detail / Guide / Notifications | 4-5 참조 / 투어 선택 4종 / 알림 3건 | — |

---

## 6. 가이드 투어 4종

로라(PM)의 "5~7분 축약" 권고와 에밀리(디자이너)의 "A와 B 후반부 중복" 지적을 반영해 단일 20스텝 투어를 역할별로 분할한 결과임.

| 투어 | 이름 | 주 사용자 | 스텝 | 서사 |
| --- | --- | --- | ---: | --- |
| **A** | Which dogs are ready to go? | 관리자 | 12 | 목록 → 검토 필요 필터 → 상태 사유 확인 → 체크인 대조·승인 → 자동 상태 전환 → 게시 |
| **B-1** | Send one check-in request | 관리자 | 10 | 자동 일일 케어 → 요청 생성 → 리마인더 설정 → 메시지 확인 → 발송 → 대기 상태 |
| **B-2** | What the foster receives | 임보자 | 4 | 모바일 폼 → "변화 없음" 선택 → 1탭 제출 |
| **B-3** | Review and apply the check-in | 관리자 | 4 | 제출 도착 → 좌우 대조 → 승인 → 기록 반영 |
| **B-publish** | Continue to publishing | 관리자 | 5 | 승인이 상태를 바꾸는 지점 → 공개 프로필 → 게시 |

- 투어 종료 시 다음 파트로 이어갈지 묻는 방식으로 연결함. 역할별 데모 버전을 따로 만들지 않은 이유임
- 각 스텝은 대상 요소를 하이라이트하고 나머지를 딤 처리하며, 지정된 컨트롤 외 클릭을 차단함

---

## 7. 데모 장치 (제품 기능 아님)

| 장치 | 구현 | 목적 |
| --- | --- | --- |
| 프리토타입 고지 | 미구현 컨트롤 클릭 시 "This control is represented in the pretotype" 모달 | 구현 범위를 넘어서는 기대 형성을 차단 |
| Reset demo | 상태 초기화 | 반복 시연 |
| 한·영 전환 | 전체 UI 번역맵 + localStorage 유지 | 펫나우팀(한국)·쉘터(미국) 양쪽 시연에 대응 |
| Mixpanel 계측 | `Demo Viewed`(3초 체류 또는 상호작용 발생 시 집계) · `Demo Button Clicked`(13개 버튼) · 투어 시작·완료·이탈 · 공유 클릭 | 데모 내 행동 데이터를 리드 관심도 지표로 수집 |
| 크롤러 방어 | 구글 데이터센터발 자동 조회 17건 오탐(8/19) 이후 체류 시간 조건 도입 | 지표 오염 차단 |

---

## 8. 실물화 시 신규 개발이 필요한 범위

데모는 백엔드·DB 없이 화면 시나리오를 Boolean 플래그로 구현한 상태임. 화면과 개념은 존재하나 아래 항목은 실제로 동작하지 않음.

| # | 항목 | 데모의 현재 상태 | 필요 작업 |
| --- | --- | --- | --- |
| 1 | **데이터 반입** | 동물 11마리·임보자 2인 하드코딩 | Chameleon 커스텀 리포트 CSV import + 필드 매핑 |
| 2 | **규칙 계산 엔진** | "18 days ago"·"3 more recommended"가 고정 문자열 | 경과일·충족 여부 실계산 → 상태 자동 판정 |
| 3 | **영속 저장** | 배정·승인·게시가 세션 메모리에서만 유지 | DB·API |
| 4 | **다중 사용자** | Alex Rivera 단일 계정 고정, 로그인 없음 | 인증 + 역할 3종(Administrator·Reviewer·Publisher) |
| 5 | **임보자 등록** | 배치 화면은 있으나 임보자 신규 등록 화면 없음 | 등록·초대 절차 구현 |
| 6 | **임의 태스크 생성** | 배정 모달은 있으나 태스크명이 고정값 | 임의 태스크 생성·목록 기능 |
| 7 | **알림 실발송** | SMS·이메일 미리보기만 존재 | 발송 연동 + 리마인더 스케줄러 |
| 8 | **게시 이후 구간** | 게시에서 흐름 종료 | 입양 문의 접수 → 매칭 → 결과 기록 |

- 1~4는 알파 성립의 전제 조건임
- 5~7은 알파 운영에 필요하나 범위 조정이 가능함
- 8은 Sarah 인터뷰에서도 확인되지 않은 구간으로, 알파 범위 밖의 검토 대상임

---

## 9. Sarah 인터뷰 요구와의 대조

| Sarah의 요구 (인터뷰 근거) | 데모 대응 | 판정 |
| --- | --- | --- |
| "다음 행동"이 누락되지 않는 구조 | 상태 배너·Next step 컬럼·NEXT STEP 카드 3중 배치 | 개념·화면 존재 |
| 한 달간 사진 없는 동물, 평가 미실시 동물 자동 탐지 | Settings의 경과일 규칙(30일·14일)·사진 3장 규칙 + 대시보드의 확인 필요 대기열 | **개념 존재, 실계산 미구현** |
| specific to-do list · giant checklist | 게시 요건 5행 체크리스트 + 각 행의 다음 행동 | 존재 (게시 준비 축으로 한정) |
| 담당자 지정 | Assign 모달(담당자·마감·메모) + Owner 컬럼 | 존재 (태스크명 고정) |
| staff·volunteer의 모바일 확인 | 관리자 화면 반응형 5단계 + 임보자 전용 모바일 폼 | 존재 |
| 완료 확인·이력 | Activity 탭(AUDIT TRAIL) + 대시보드 활동 + 동물별 최근 변경 | 존재 |
| 맞춤 설정 가능 여부 | Settings의 게시 요건 규칙 편집 | 존재 (필드 단위) |
| Chameleon 유지, spreadsheet 대체 | — | **미대응. CSV import 필요** |
| Meeting → Decision → Assignment → Follow-up → Completion | 체크인 검토 흐름이 유사 구조로 존재하나 **회의 단위 검토 화면은 없음** | 부분 대응 |

---

## 10. 참고

- 원본: `/Users/kaya/Projects/202607_펫나우CRM/prototype/` (app.js · index.html · styles.css · demo-tracking.js · assets/)
- 배포본: `site/public/demo/`, `site/github-pages/demo/` (`build.mjs`가 `prototype/`을 복사한 산출물이므로 직접 수정 금지)
- 반영 절차: `prototype/` 수정 → `site/deploy-github.sh` 실행
