# Sacramento Animal Services 사전조사

- 작성일: 2026-09-15 / 목적: April Stevenson 콜 준비(2026-09-18) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Shelter", "role": "Executive director or founder", "system": "Chameleon", "adoptions": "Over 300"}`
- 유입 소재: A (입양 준비 상태 추적 — 폼에서 연간 입양 건수를 물었다)
- **동일 조직 확정 / 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석: 이메일 도메인 `cityofsacramento.org` 는 **City of Sacramento(캘리포니아주 새크라멘토 시) 공식 업무 도메인**이다. 이 리드는 비영리 레스큐가 아니라 **시 정부 부서**이며, 정식 명칭은 **Community Development Department → Animal Care Services Division**, 운영 시설명이 **Front Street Animal Shelter** 다
- 1차 출처의 질이 이례적으로 높다 — **시 감사관실이 발주한 94쪽 성과감사 보고서**(GPP Analytics Inc., Report #2024/25-14, 2025-04), **FY2026/27 제안 예산서**, **Animal Wellbeing Commission 공식 Follow-Up Log**(2026-02-11), **2025 연차보고서**, **2024 시설 needs assessment**, **Dog Foster Handbook** 을 전부 원문으로 판독했다. 이 문서의 핵심 주장은 대부분 시가 직접 쓴 문장이다
- 미열람 출처: 시 웹사이트가 Adobe AEM 기반이라 리더 프록시·WebFetch 로는 본문이 렌더링되지 않아 **전 페이지를 직접 HTML 로 받아 판독**했다. **Power BI 통계 대시보드**(`app.powerbigov.us`)와 **Adopets·Better Impact·Formstack 로그인 내부**는 열 수 없어 미확인으로 남겼다. **Davis Vanguard·Fix Our Shelters 경유 의혹 보도는 원문 접근이 차단(403)돼 검색 요약만 확보**했고, 그 부분은 전부 「원문 미열람」으로 표기했다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| **이메일 도메인** | **결정적 근거 ①.** `cityofsacramento.org` 는 City of Sacramento 시 정부 업무 도메인이다. 시 공식 문서·핸드북에 등장하는 직원 주소가 전부 `@cityofsacramento.org` 형식이다(예: `d***@cityofsacramento.org`, `v***@cityofsacramento.org`). **개인 메일이 아니라 관청 업무 주소로 신청**했다 | 리드 폼, 시 공식 사이트, Dog Foster Handbook |
| 조직 실체 | **Animal Care Services Division**(통칭 **Front Street Animal Shelter**). 소속은 **Community Development Department**. 시 정부 부서이므로 **EIN·990 이 존재하지 않는다** | 시 공식 사이트, FY2026/27 제안 예산서 |
| 소재 | **Sacramento, CA** | 시 공식 사이트 |
| **신청자 — 직책** | **결정적 근거 ②.** 시 공식 뉴스룸(Sacramento City Express)이 **2026-07-20** 자로 신임 매니저를 소개했다 — `April Stevenson`, **Manager of the Community Development Department's Animal Care Services Division**, **2026-07-27 부임**. 지역 언론(Sacramento Bee 계열)도 같은 인사를 보도했다 | Sacramento City Express(2026-07-20), Sacramento Bee 계열 보도 |
| **신청자 — 경력 교차확인** | 시 뉴스룸과 Save The Snakes 팀 페이지가 서로 맞물린다 — **City of Rancho Cordova**(Management Analyst II / Senior Animal Services Officer, 동물서비스과 총괄·$5M 예산 관리) → **Placer SPCA**(Shelter Operations Manager) → **City of Berkeley Animal Care Services**(10년 이상, **자원봉사·포스터·레스큐·커뮤니티 아웃리치 프로그램 관리**). **본인이 파충류 레스큐를 창립**한 이력이 별도로 확인된다 | Sacramento City Express, savethesnakes.org |
| **동명·인접 조직 배제 (중요)** | **같은 지역에 별개의 큰 조직이 있고 이 리드가 아니다** — ①**Sacramento County Animal Care Services**(Bradshaw Animal Shelter, 도메인 `saccounty.gov`) 는 **카운티 정부**의 별개 부서다. 카운티는 FY2026-27 예산 $9B 규모의 별도 자치단체이며, 시·카운티가 서로 다른 쉘터를 운영한다 ②**Friends of Front Street Shelter**(EIN **68-0477042**, NTEE D20, 501(c)(3), Sacramento) 는 이 쉘터의 **후원 비영리**이지 신청자 소속이 아니다 ③**Front Street Animal Shelter** 이름으로 검색되는 Petfinder·Adopt-a-Pet 페이지는 같은 조직의 외부 리스팅이다 | saccounty.gov, ProPublica API, 각 사이트 |
| 폼 응답 정합 | **4개 중 3개가 확인되고, 1개(입양 건수)는 실측과 자릿수가 다르다.** 아래 표 참조 | — |

### 폼 응답 대조 — 이 콜의 출발점

| 폼 응답 | 공개 자료로 확인한 것 | 판정 |
|---|---|---|
| `org_type: "Shelter"` | **맞다.** 개방수용 시립 쉘터이며 1910년부터 같은 부지에서 동물 수용 기능을 해 왔다. **다만 폼에 잡히지 않는 결정적 속성이 두 개 있다 — ①시 정부 부서이고(63 FTE·연 예산 $10.28M) ②Animal Control 단속·물림 사고 조사·학대 수사 권한을 함께 갖는다** | **일치** — 단, "정부 부서"·"규모" 축이 폼에 없다 |
| `role: "Executive director or founder"` | **절반만 맞다.** 현 직책은 **Animal Care Services Division Manager** 로 ED 가 아니다. 다만 **본인이 파충류 레스큐를 창립**했고 비영리 이사(Treasurer) 경력이 있어 자기표기가 허위는 아니다. **실무상 중요한 것은 직함이 아니라 부임 7주차라는 사실**이다(2026-07-27 시작) | **부분 일치 — 결재 권한은 시 조달 규정에 묶인다(5절)** |
| `system: "Chameleon"` | **시의 공식 문서 두 곳이 직접 확인해 준다.** ①성과감사 보고서 — *"Reports from Animal Care Services' information system, Chameleon"*, 그림 다수의 출처가 *"Division's Chameleon database"* ②Animal Wellbeing Commission Follow-Up Log(2026-02) — *"the shelter's data expert on Chameleon (the shelter's management software)"*. **정본이 Chameleon 이라는 자기보고는 사실이며, 2026년 2월 기준으로도 현행이다** | **일치 — 시 공식 문서로 이중 확인** |
| `adoptions: "Over 300"` | **폼 최상단 구간으로 보이나 실측은 그 19.6배다.** 2025 연차보고서 — 입양 **개 3,380 + 고양이 2,472 + 기타 40 = 5,892건**. 연 인테이크는 **10,416두**. **폼의 구간 체계가 이 규모를 표현하지 못한다** | **자릿수 불일치 — 폼 응답을 규모 판정에 쓰면 안 된다** |

→ **조직은 시 도메인과 부서 구조로, 신청자는 시 공식 뉴스룸의 임명 발표로 확정.** 다른 조직 정보를 끌어온 부분 없음. 카운티 쉘터(Bradshaw)와 후원 비영리(Friends of Front Street)는 명시적으로 배제했다.

## 미팅에서 바로 쓸 핵심 5줄

1. **이 조직은 「포스터가 본진」이다 — 시설 안보다 가정에 있는 개체가 5배 많고, 그 사실을 시 감사관이 실측으로 확정해 놨다**
 성과감사 원문 — *"As of 2024, a median of 1,116 animals were fostered at any one time, or about five times as many as held in the shelter at a given time."* 그리고 *"Foster homes account for the placement of about 70 percent of dogs and 84 percent of cats. On average, 367 dogs and 397 cats are in foster care each month."* 대조로 **시설 내 월평균은 개 145·고양이 83두**다. 2025 연차보고서 기준 연간 포스터 송출은 **개 1,083 + 고양이 1,800 = 2,883마리**. **소재 A(입양 준비 상태 추적)가 이 리드에 걸린 이유가 여기 있다 — 입양 준비가 되는 장소 자체가 시설이 아니라 1,000여 가정이다.**

2. **「분산 케어 추적이 새고 있다」를 우리가 주장할 필요가 없다 — 시가 공식 문서에 그 비용을 항목별로 적어 놨다**
 **Animal Wellbeing Commission Follow-Up Log(2026-02-11)** 에 개 포스터 정책을 설명하며 시가 직접 쓴 문장이다 — *"Sending a dog to foster requires staff time to prepare supplies, make an appointment, meet the foster, send and organize paperwork, and have back and forth communication to answer questions and coordinate all this."* / *"When a dog is placed in foster, medical or behavioral concerns can arise that then require significant communication and coordination to resolve or schedule them to come back to the shelter."* / *"Not all fosters will expediently work with adopters to get them out of the system, and we can experience challenges getting animals back for spay/neuter or prolonged stays in the foster system."* 그리고 같은 문단에 **`foster team capacity`** 라는 표현이 나온다. **콜에서 할 일은 설득이 아니라 이 세 문장을 순서대로 짚고 각각이 지금 무엇으로 처리되는지 묻는 것이다.**

3. **도구는 이미 9개가 돌고 있다 — 빠진 것은 시스템이 아니라 「시스템 사이의 빈칸」이다**
 직접 확인한 스택 — **Chameleon**(정본·시 감사 확인) / **Better Impact**(자원봉사·포스터 명부·지원서·시간 기록, `app.betterimpact.com` 조직 GUID 노출) / **easygenerator**(개 포스터 온라인 교육 45~60분) / **Formstack**(고양이 포스터 폼 **5종**: 물품 요청·Foster-On-Deck·멘터 방문·성격 프로필·이관 동의서) / **Adopets**(입양, `adopt.adopets.com` 개체 링크 실물 확인) / **Power BI for Government**(통계 대시보드) / **Salesforce**(311 콜센터 → Chameleon 이관) / **DocuPet**(라이선스) / **Network for Good**(Friends 후원). **그런데 「포스터 가정에 있는 이 아이가 지금 어떤가」를 받는 경로는 여전히 전화와 이메일 한 개다** — 핸드북은 Foster Care Coordinator 에게 **전화(월~금 9-6)**, 의료는 **`veterinaryservices@`**, 주말은 **당직 전화**, 웹페이지의 문의 창구는 **`dogfoster@`** 하나뿐이다.

4. **상대는 부임 7주차이고, 물려받은 판이 「숫자로 증명해야 하는」 판이다 — 프레임은 효율이 아니라 감사 대응과 목표 달성이다**
 **2026-07-27 부임.** 물려받은 것 — ①**시 감사관실 성과감사**(2025-04, 10개 finding, 권고 31건·보도 기준)에 데이터 정합성 지적이 포함 ②**전임 매니저 Phillip Zimmerman 이 예정 은퇴(2026-05-29)보다 약 두 달 일찍 사퇴** ③**Shelter Operations Manager 공석 상태로 모집 중** ④**FY2026/27 부서 성과목표가 라이브릴리스율 90%** 인데 **FY2025 실적은 79.6%**(FY23 87% → FY24 81.9% → FY25 79.6% 로 3년 연속 하락) ⑤부서 FY2026/27 목표에 **"Complete the development of policies and procedures for the Front Street Animal Shelter"** 가 명시. **「10%p 를 무엇으로 만들 것인가」가 이 사람의 올해 과제이고, 포스터 회전이 그 계산의 가장 큰 변수다.**

5. **돈은 있지만 인원은 동결이고, 규정상 가장 짧은 길은 연 $15,000 미만이다**
 FY2026/27 제안 예산 — **Animal Care Services Division $10,280,755**(전년 수정 대비 **+$1,151,196**), **FTE 63.00 동결**(FY2023/24부터 4년 연속 63). 조달은 전문용역 정책 기준 **①$15,000 이하 = 마이크로퍼처스, 견적 수 요건 없음, Project Manager 재량 ②$15,000~$100,000 = 3곳 이상 비공식 견적 ③$100,000~$250,000 = 정식 경쟁 공고 ④$250,000 이상 = 시의회 의결 필수**. **즉 연 $15k 미만으로 설계하면 절차가 사실상 없다.** 단 감사 권고 일부에 부서가 *"Agree. However, this will not be possible due to the City's current budget deficit"* 로 답했다 — **신규 고정비에는 방어선이 있다.**

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 정식 명칭 | **Animal Care Services Division**, 운영 시설명 **Front Street Animal Shelter** | 시 공식 사이트, 예산서 |
| **소속** | **City of Sacramento → Community Development Department.** 같은 부서 안에 Planning, Building, Code Compliance, Administrative Services 가 함께 있다. **동물 부서가 도시계획·건축허가와 한 지붕 아래 있다** | FY2026/27 제안 예산서 |
| 법인격·EIN | **없다.** 시 정부 부서이므로 990·EIN 이 존재하지 않는다 | — |
| 소재 | **Sacramento, CA** | 시 공식 사이트 |
| 시설 이력 | **1910년부터 동물 수용 부지**로 사용. 1992~1993 대규모 확장, 2007 Cattery 개축, 2012 Animal Care Surgery Center 신축, 2019 ACO 모듈러 건물 추가 | 2024 needs assessment |
| **시설 판정 (2024)** | needs assessment 결론 — *"It is determined to be infeasible for full remodel of the existing facility… The site is too small to allow for a building addition based on the recommended program area."* 권고는 **①최소 7 net acre 신규 부지 확보 ②약 50,000 sf 신축 ③모금 캠페인 착수 ④현 시설 임시 개선**. 비용·기간은 **개축·확장 $30~50M / 6~8년**, **신축 $40~60M / 3~5년** | 2024 needs assessment(Indigo Hammond+Playle Architects, Koret Shelter Medicine Program Dr. Denae Wagner 참여) |
| 수용 규모 | 위원회 Follow-Up Log(2026-02) 원문 — *"'Full' often happens around 170 dogs, but could be over 200 dogs depending on the number of each type of dog…"*. **고정된 최대 수용 두수가 없고 크기·짝짓기 가능 여부로 정해진다**고 시가 직접 설명한다. 2026-05 지역 보도는 **개 켄넬 약 102·고양이 109칸, 통상 개 150~175두 수용**으로 적었다(보도 기준) | 위원회 Follow-Up Log, hoodline(2026-05-15) |
| **성격** | **개방수용 + 행정 단속 겸용.** 인테이크의 압도적 다수가 길거리 개체다 — FY2023-24 기준 **총 10,047두 중 8,648두(86.1%)가 stray** | 성과감사 |
| **행정 권한** | Animal Control Unit 이 시 조례 집행, 학대·잔혹행위 수사, 물림 사고 조사, 공공안전 대응을 수행한다. **2025년 물림 신고 1,133건 처리** | 시 공식 사이트, 2025 연차보고서 |
| 서비스 권역 | City of Sacramento 시역. **카운티 지역은 별개 기관(Bradshaw)** 이 담당한다 | 시 공식 사이트, saccounty.gov |
| **인력 — 예산 정원** | **63.00 FTE**(FY2023/24·FY2024/25·FY2025/26·FY2026/27 전부 63.00 동결) | FY2026/27 제안 예산서 |
| **인력 — 실제 충원 (감사 시점)** | 2024-10-01 기준 **48명**, 보고서 작성 시점 **47명 충원 / 63 정원**. 당시 공석 — **수의사 3석 중 1석, Animal Control Officer 12석 중 7석, Animal Care Technician 18석 중 4석, RVT 7석 중 3석**. *"This has been an ongoing challenge since at least 2021, if not earlier."* | 성과감사 |
| **Chief Animal Control Officer 공석 이력** | **2023-06 ~ 2025-01-27** 까지 공석. 그 기간 ACO 조직이 감독 없이 운영됐다고 감사가 지적 | 성과감사 |
| **포스터·자원봉사 전담 인력** | **Volunteer Coordinator 2명**이 자원봉사 프로그램과 **포스터 프로그램을 함께** 총괄한다. FY2023-24 에 **861명 모집·교육**을 이 2명이 관리했다 | 성과감사, 2025 연차보고서 |
| 포스터 실무 담당 (2022·2024 기준) | **Lori Rhoades — Dog Foster & Rescue Coordinator**(핸드북 연락처표, 2024 needs assessment 참여자 명단에도 동일 직함으로 등재). **핸드북이 2022-06-06 판이므로 현재 재직 여부는 미확인** | Dog Foster Handbook, 2024 needs assessment |
| 별도 팀 구성 (핸드북 기준) | **Dog Foster Team**(`dogfoster@`) · **Foster Placement Team** · **Veterinary Services**(Front Street 내 수의팀) · **Behavior Department** · **Supervisor on duty**(Sr. Animal Care Technician) | Dog Foster Handbook |
| **신청자** | **April Stevenson — Animal Care Services Division Manager**(2026-07-27 부임). Front Street 쉘터 운영 + 현장 서비스 + 동물 케어 프로그램 총괄 | Sacramento City Express |
| **직전 리더십 (콜에서 조심할 것)** | **Phillip Zimmerman**(Animal Services Manager, 2019년 말 부임, 공직 29.5년) — 2025 연차보고서에 **2026-05-29 은퇴 예정**을 직접 적었으나 **약 두 달 일찍 사퇴**했고, 보도는 본인이 *"safely or effectively"* 계속할 수 없다고 말한 것으로 전한다. **Staycee Dains**(Shelter Operations Manager) 도 같은 시기 이임. **Ryan Hinderman**(Communications and Customer Service Manager)이 **interim 매니저**를 맡았다 | 2025 연차보고서, Sacramento Bee 계열 보도 |
| **현재 공석** | **Shelter Operations Manager — 모집 중**(보도 기준). 이 자리가 **개 포스터 프로그램을 총괄**하는 자리다(위원회 Follow-Up Log 가 *"The Shelter Operations Manager, who oversees the dog foster program"* 이라 명시) | 보도, 위원회 Follow-Up Log |
| **FY2026/27 신설 직위** | **Animal Services Coordinator 1.0 FTE 신설**(Animal Care Technician 1석 삭제와 교환, Measure U 재원). 목적은 *"provide behavior evaluations and training to dogs housed in the shelter to decrease length of stay and increase the live release rate"* | FY2026/27 제안 예산서 |
| **자문위원회 (Animal Wellbeing Commission)** | 설치 목적 — *"providing advice and recommendations to the city council on strategies, policies, and programs designed to ensure and enhance animal care services provided by the city."* **13석**(구·시장 지명 + **쉘터 전문가석·자원봉사자석·청소년석 16~22세** 포함). **매월 둘째 수요일 17:30, City Hall**. 영상 중계·eComment 운영 | OnBoardGOV 위원회 페이지, 위원회 회의록 |
| **위원회 구성 (2026)** | **Chair — Jamie McDole / Vice Chair — Hilary Bagley-Franzoia** / 위원 — Ignacio Barragan, Denise Bell, Kellee Benedict, Samantha Christie, Kathleen Garcia, Julia Hayes, Leah Morris, Noemi Phew, Douglas Snell, Paula Treat, **Julie Virga** | 2026-02-11 회의록 |
| **주의 — 위원회에 비판자가 상주한다** | **Julie Virga 는 Fix Our Shelters 소속으로 언론에 이 쉘터를 비판해 온 인물**이고, **Hilary Bagley-Franzoia(부위원장)는 인테이크 거부의 위법성을 주장한 변호사**로 지역 언론에 인용된 바 있다. 2026-02 회의는 안건 분리 표결에서 **찬 7 / 반 3 / 기권 2** 로 갈리고 **2시간 연장 동의**를 거쳐 20:15 에 산회했다. **운영진과 위원회의 관계가 우호적이라고 가정하면 안 된다** | 2026-02-11 회의록, Inside Sacramento, CBS Sacramento |
| 위원회 담당 스태프 | **Ryan Hinderman**(Communications and Customer Service Manager) / **Carsen Van der Linden**(Deputy City Attorney) | 2026-02-11 회의록 |
| **후원 비영리** | **Friends of Front Street Shelter** — 501(c)(3), **EIN 68-0477042**, NTEE **D20**, Sacramento. CY2023 모금 수입 **약 $700,000**, 2019~2022 는 연 **$530,000~$725,000**. **2022년부터 5년 계약으로 수의사를 시간당 $125~225 에 공급**한다. 이 수의사들이 **시설 내 개체와 포스터 가정 개체를 함께 진료**한다 | 성과감사 |
| **Friends 관계의 리스크 (감사 지적)** | 성과감사 **Finding 8** — *"The informal relationship with Friends of Front Street poses risks around ethics and procurement."* 위원회 Follow-Up Log(2026-02)는 **MOU 완료 전에는 Friends 발표를 진행하지 않겠다**고 기록. **즉 이 비영리를 우회 지갑으로 쓰자는 제안은 지금 가장 예민한 사안이다** | 성과감사, 위원회 Follow-Up Log |
| 자원봉사 규모 | **2025년 803명 / 80,000시간 초과**. FY2023-24 기준 **861명 / 93,710시간** | 2025 연차보고서, 성과감사 |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 회계연도 | **7월~6월.** 콜 시점(2026-09-18)은 **FY2026/27 3개월 차**다 | 시 예산 문서 |
| **부서 예산 추이** | **FY2023/24 실적 $8,152,789 → FY2024/25 실적 $8,773,789 → FY2025/26 승인 $9,436,277(수정 $9,129,559) → FY2026/27 제안 $10,280,755**. 전년 수정 대비 **+$1,151,196** | FY2026/27 제안 예산서 |
| 정원 | **63.00 FTE 4년 연속 동결.** 예산은 26% 늘었는데 사람 수는 그대로다 | 같은 예산서 |
| **재원 구성 (Measure U 비중이 크다)** | Measure U(주민투표 판매세) 프로그램 라인 — **Animal Care Administration 14.00 FTE $1,212,774 / Animal Care/Shelter 34.00 FTE $5,668,124 / Animal Enforcement·Field Services 15.00 FTE $2,019,613**. **부서 예산의 상당 부분이 일반회계가 아니라 Measure U 에서 나온다** | 같은 예산서 |
| FY2026/27 신규 배정 | **citywide 중성화 클리닉 일회성 $500,000**(Measure U). 사유 — *"Due to funding, staffing, and spay and neuter surgery space, Animal Care Services does not have the ability to provide community spay and neuter services to the community in-house."* 위원회 기록상 **10회 행사로 2,000마리 처치** 목표 | 예산서, 위원회 Follow-Up Log |
| 자체 수입 — 라이선스 | FY2023-24 라이선스·연체료 수입 **약 $500,000**, 이는 **부서 예산 수입의 6.5%**. 요금은 개 연 약 $20 / 고양이 $15. **준수율이 개 14% · 고양이 7% 뿐**이다 | 성과감사 |
| 자체 수입 — 그 외 | 시 Master Fee Schedule 에 **56개 요금**이 승인돼 있으나 *"many of these fees, aside from licensing fees, are routinely waived"* — **수용 한계에 가까워지면 입양비를 면제**하는 것이 정책적 관행이다 | 성과감사 |
| 실제 요금 면제 사례 | **2026-05-15~17 개 입양비 전액 면제**, 대상에 **시설 내 개체와 포스터 가정 개체 모두 포함**. 2026년 4월 입양은 전년 283건 → 255건으로 약 12% 감소한 상태였다(보도 기준) | hoodline(2026-05-15) |
| 라이선스 벤더 | **DocuPet**(시의 license management vendor). 2024-10 기준 유효 라이선스 개 17,991·고양이 6,352 | 성과감사 |
| **시 전체 재정 상황** | 시의회가 **2026-06-10 에 FY2026/27 예산 총 $1.7B(일반회계 $898.3M)를 의결**했고, 보도는 재정 안정화 중심 예산으로 평가한다. **감사 권고 응답 중 최소 2건에 부서가 "현 재정 적자로 불가"라고 답했다** | Sacramento City Express(2026-06-10), 성과감사 |
| **시사점** | **입양비가 조직을 먹여 살리는 구조가 아니다.** 시 세입·Measure U 로 운영되는 행정 부서이므로 **"회전을 높이면 매출이 는다" 논리가 통하지 않는다.** 통하는 언어는 **켄넬 수용 여력 · 직원 시간 · 라이브릴리스율 목표 · 감사 권고 이행**이다(**추론**) | 추론 |
| **시사점 — 가격 설계** | 부서 예산이 $10M 대지만 **신규 고정비 방어선과 $15,000 마이크로퍼처스 임계값이 실질 기준선**이다. **연 $15k 미만이면 조달 절차가 사실상 없고, $250k 이상이면 시의회 안건이 된다**(5절) | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **2025 인테이크** | **개 6,030 / 고양이 4,148 / 기타 가축·소동물 238 = 10,416두** | 2025 연차보고서 |
| **2025 입양** | **개 3,380 / 고양이 2,472 / 기타 40 = 5,892건** | 2025 연차보고서. **폼 응답 "Over 300" 의 19.6배** |
| 2025 소유주 반환(RTH) | **개 1,611 / 고양이 88 / 기타 25 = 1,724두** | 2025 연차보고서 |
| **2025 라이브릴리스율 (연차보고서 표기)** | **개 86% / 고양이 64%** | 2025 연차보고서. 산식 명시 — *100 − (Non-Live Outcomes ÷ Total Intake × 100)* |
| **라이브릴리스율 (예산서 성과지표, 회계연도)** | **FY23 87% → FY24 81.9% → FY25 79.6% → FY26 추정 82% → FY27 목표 90%** | FY2026/27 제안 예산서. **연차보고서(역년·종별)와 예산서(회계연도·통합)의 숫자가 다르다 — 창구별 값이 갈린다** |
| 2023 라이브릴리스율 (감사 표기) | **개 88% / 고양이 79%** — 개는 동종 기관 대비 높고 고양이는 낮다고 감사가 평가 | 성과감사 |
| **2025 포스터 송출** | **개 1,083 / 고양이 1,800 = 2,883마리** | 2025 연차보고서 |
| **상시 포스터 중 개체 (감사 실측)** | **2024년 기준 중위값 1,116마리** — *"about five times as many as held in the shelter at a given time"* | 성과감사 |
| **포스터 경유 비율** | **개 배치의 약 70% / 고양이의 약 84%.** 월평균 **포스터 개 367 · 고양이 397** vs **시설 내 개 145 · 고양이 83** | 성과감사 |
| **포스터 시즌성** | 포스터 중 고양이 **2024년 3월 167 → 4월 418 → 5월 590 → 6월 695**. 연차보고서도 *"several hundred kittens at a time are housed offsite in volunteers' homes"* | 성과감사, 2025 연차보고서 |
| 포스터 하위 유형 | **traditional foster** + **foster to adopt**(중성화 대기 중 예비 입양자가 데리고 있는 형태). 2025-03 말까지 foster-to-adopt 필요성을 없애겠다는 계획이 감사 시점에 보고됐다 | 성과감사 |
| **중성화 대기 (극적 개선)** | **2024-09 백로그 772건 → 2026-03 백로그 1건.** 수의사 2명 채용 + 외부 중성화 확대 결과이며, 예산서는 *"These additional resources reduced the number of animals in foster-to-adopt homes and reduced costs"* 라 적었다. 감사 시점에는 **대기가 최장 6개월**이었다 | FY2026/27 제안 예산서, 성과감사 |
| 2025 의료 처리량 | **중성화 수술 4,319건 / 검진 6,535건**, 보호 백신 12,000회 초과, 구충·벼룩 처치 9,189건 | 2025 연차보고서 |
| **2025 자원봉사** | **803명 / 80,000시간 초과** | 2025 연차보고서 |
| **자원봉사 시간의 63%가 포스터다 (FY2023-24)** | 총 **93,710시간** 중 **Foster Care 58,591.80시간** / In-Shelter 14,335.74 / Dog Handling(입양 상담 포함) 7,677.79 / Training 2,867.71 / Veterinary Care 2,331.18 / 백신 클리닉 1,835.57 / 특별 프로젝트 1,183.12 / 특별 행사 1,087.08. **Foster Care 수치에는 Foster to Adopt 참가자가 빠져 있다** | 성과감사 |
| 자원봉사 분포 (FY2023-24) | 5~10시간 149명 / 10~99시간 489명 / 100~250시간 125명 / 250~499시간 52명 / 500~999시간 35명 / **1,000시간 이상 11명**. **활동 자원봉사자 정의 = 연 5시간 초과** | 성과감사 |
| **포스터 시간 환산식 (중요)** | 고양이 1~2마리 하루 = **1시간** / 고양이 3마리 이상 = **3시간** / 성견 1마리 = **1.5시간** / 강아지 1~2마리 = **2시간** / 강아지 3마리 이상(모견 포함 여부 무관) = **3시간**. 핸드북은 **bottle babies = 하루 6시간**으로 따로 적는다 | 성과감사, Dog Foster Handbook |
| FY2023-24 인테이크·안락사 | 총 인테이크 **10,047두**(stray 8,648 = 86.1%). **안락사 1,312두** — 고양이는 주로 치료 불가 의학적 사유, 개는 주로 행동 사유 | 성과감사 |
| 인테이크 10년 추이 (FY) | 2013-14 **9,756** → 2016-17 11,012 → 2019-20 8,391 → **2020-21 5,953(최저)** → 2021-22 7,232 → 2022-23 9,153 → **2023-24 10,047** | 성과감사 |
| **안락사 추이 (교차 확인 필요)** | 감사 원문 **FY2023-24 1,312두**. 지역 칼럼은 **2022년 747 → 2024년 1,462**(검색 요약 경유, 칼럼 원문 일부만 확인). 위원회 위원 발언은 **"작년 약 2,000마리"**(CBS). **2025년 1,823두라는 값이 검색 요약에 나오나 원문을 확인하지 못했다** | 성과감사(확정), Inside Sacramento·CBS(보도), 일부 **원문 미열람** |
| 2025 현장 활동 | 서비스 요청 **21,232건**(노숙 관련 1,944 포함), 실물 출동 **11,989건**, 복지 점검 3,310건, 물림 신고 **1,133건**, 동물 수거 3,625두 | 2025 연차보고서 |
| 2025 고객 응대 | 요청 **13,263건**, 공용 카운터 인테이크 **6,849두**, 분실 반환 1,597두 | 2025 연차보고서 |
| 2025 HOAP(노숙인 지원) | **반려동물 1,888두(전년 대비 +43%) / 보호자 1,028명(+38%)**, 중성화 505건, 벼룩 처치 1,162, 백신 1,957, 기타 처치 1,042. **이동 진료 밴 도입** | 2025 연차보고서, 예산서 |
| 2025 커뮤니티 프로그램 | Doggie Day Out **717건** + Pups and PJs 130건 + Jog-A-Dog 163건 / 클리닉 백신·마이크로칩 **5,113두** / 커뮤니티 중성화 1,122두 + 커뮤니티 고양이 2,000두 초과 / 펫 푸드 팬트리 **약 72,000 lbs** | 2025 연차보고서, 예산서 |
| **현재 공개 입양 리스팅** | 시 웹사이트 개 입양 페이지에 **Adopets 개체 카드 13개**(2026-09-15 직접 조회). **연 입양 5,892건과 자릿수가 크게 다르다 — 이 페이지가 전량 목록이 아니라 일부 노출로 보이나(추론) 확인 필요** | 직접 조회 |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW — 폼 자기보고** | **Chameleon.** 신청자 본인이 폼에 적었다 | 리드 폼 |
| **쉘터 관리 SW — 시 공식 문서로 이중 확인** | ①성과감사 — *"Reports from Animal Care Services' information system, Chameleon"*, 다수 도표 출처가 *"Division's Chameleon database"* ②위원회 Follow-Up Log(**2026-02**) — *"the shelter's data expert on Chameleon (the shelter's management software)"*. **2026년 현재도 정본이다** | 성과감사, 위원회 Follow-Up Log |
| **Chameleon 의 한계가 공식 기록에 남아 있다** | 위원회가 과거 켄넬 재고를 요청했을 때 답변 — *"After consulting with the shelter's data expert on Chameleon…, it is not possible to run a report to determine what the kennel inventory was for a specific day 7+ years ago. We have been tracking this information for the past couple years, but that wouldn't fulfill this request."* **①Chameleon 에서 못 뽑는 값이 있고 ②최근 몇 년 치는 정본 밖에서 별도로 추적해 왔다는 자기진술이다** | 위원회 Follow-Up Log(2026-02) |
| **Chameleon 데이터 입력 품질 (감사 지적)** | 권고 4.6 — *"Develop standardized data-entry protocols… At a minimum, include a data dictionary for Chameleon, periodic quality checks, and staff training."* 드롭다운 다중 결과 필드가 설계돼 있는데 *"typically only the 'Result 1' field was used"*, 주소 입력 방식 편차로 중복 민원 집계가 과소 산출됐다고 적었다 | 성과감사 |
| **★ 포스터 상태값이 정본에서 썩는다 (감사 각주)** | 오픈데이터 오류를 설명하는 각주 원문 — *"This includes Animal's whose outcome field was blank, and animals whose outcome field was listed as **foster even though other outcomes had been realized** and logged in the Division's database system."* **「포스터」로 걸린 채 실제로는 다른 결말이 난 개체가 존재한다고 시 감사관이 문서화했다. 우리 가설의 직접 증거다** | 성과감사 |
| **자원봉사·포스터 명부 — Better Impact** | 시 자원봉사 페이지가 **`app.betterimpact.com/Login/Login?agencyGuid=370cf94f-…`** 를 "Online account for registered volunteers" 로 링크하고 **모바일 앱 설치 안내(`siteguide.betterimpact.com`)** 까지 건다. 개 포스터 지원 경로도 **Better Impact 지원서 폼(`ApplicationFormNumber=3`)** 이다. 핸드북(2022)은 같은 시스템을 **MyVolunteerPage** 로 부른다(Better Impact 의 자원봉사자 화면 이름) | 시 자원봉사 페이지, 포스터 지원 페이지, 핸드북 |
| **자원봉사 SW 의 한계 (감사 응답, 결정적)** | Finding 10 권고에 부서가 직접 답했다 — *"Agree. Although we can track the number of volunteers and the hours they serve, **our current volunteer management software does not provide retention data.** We will investigate whether our existing software has a feature for this or if we will nee[d]…"* **①명부·시간은 되고 리텐션은 안 된다 ②신규 구매 전에 기존 도구 기능을 먼저 확인하는 절차 습성이 있다** | 성과감사 |
| **포스터 교육 — easygenerator** | 개 포스터 1단계가 **`elearning.easygenerator.com`** 의 온라인 수업(**45~60분**)이다. 2단계가 Better Impact 지원서, 3단계는 *"Our dedicated staff will pair you with a shelter dog"* — **매칭은 사람이 한다** | 포스터 지원 페이지 |
| **고양이 포스터 — Formstack 폼 5종** | 시 도메인의 Formstack 계정(`sacramento.formstack.com`)에 **`animal_care_feline_foster_supply_request`(물품 요청) / `animal_care_cat_foster_on_deck`(Ready to foster · Foster-On-Deck) / `animalcare_catmentorvisitform`(멘터 방문) / `animalcare_foster_personality`(성격 프로필) / `animal_care_foster_cat_transfer_agreement`(이관 동의서)** 가 걸려 있다 | 고양이 포스터 자료 페이지 |
| **개 포스터 — 폼이 0개다 (비대칭)** | 개 포스터 자료 페이지에는 **Formstack 폼이 하나도 없고** PDF 5종(핸드북·퀵 레퍼런스·수의 방문 기준·물림 프로토콜·세금 팁)과 **Adopets 가이드**, Maddie's Fund 외부 강의만 있다. **같은 조직 안에서 고양이 쪽은 폼으로, 개 쪽은 문서와 전화로 돌아간다** | 개·고양이 포스터 자료 페이지 |
| **문서 관리 상태** | 고양이 포스터 핸드북 카드가 **"Temporarily Unavailable"** 로 표시되고 링크가 자기 페이지로 돌아온다. 개 핸드북은 **2022-06-06 판**이며 본문이 **이미 사라진 도메인(`sacpetsearch.com`, `frontstreetshelter.org`)으로 로그인 절차를 안내**한다 | 각 자료 페이지, Dog Foster Handbook |
| **입양 플랫폼 — Adopets** | 시 개 입양 페이지가 **`adopt.adopets.com/pet/<uuid>?tracking=<uuid>`** 로 개체를 직접 링크한다(13건 실물 확인). 핸드북 — *"We will upload info to our adoption site Adopets and link you as the foster parent."* **포스터가 Adopets 에서 자기 개체의 신청서를 보고 meet and greet 을 잡는다** | 개 입양 페이지, 핸드북 |
| **★ 포스터가 입양 의사결정을 한다** | 핸드북 원문 — *"You will get emails when your foster has an application filled out. You will be able to look at the application and contact the possible adopter. If the phone conversation goes well set up a meet and greet. Once the meet and greet is done, you can recommend adoption or archive."* FAQ 도 *"Do I get to choose the adopter of the dog? — Yes."* **입양 단계는 이미 포스터에게 위임돼 있다. 위임되지 않은 것은 「케어 경과」쪽이다** | 핸드북, 포스터 지원 페이지 |
| **통계 공표 — Power BI for Government** | Shelter Statistics 페이지의 실질 콘텐츠가 **`app.powerbigov.us/view?r=…` 링크 하나**다. 감사는 이 대시보드를 *"does appear to be complete and more consistent"* 로 평가하며 **시 오픈데이터 포털 쪽 값이 부정확했다**고 지적했다 | 시 통계 페이지 직접 판독, 성과감사 |
| **오픈데이터 포털 문제** | 감사 원문 — *"the technology staff within the Division were not familiar with how the open data portal is administered or how it sources the data from the Division's databases."* 부서 응답은 *"they have confirmed that our shelter management software is now accurately reporting data to the Animal Care Services' open data portals"* | 성과감사 |
| 311 → Chameleon 연동 | *"the information gets transferred from the 311 Center database (Salesforce) to the Animal Care Services database (Chameleon)."* 311 은 4단계 분류로 민원을 접수한다 | 성과감사 |
| 그 외 확인된 SaaS | **DocuPet**(라이선스) / **Formstack**(시 전사 폼, 웹 피드백 포함) / **Network for Good**(Friends of Front Street 이메일·후원) / NEOGOV 계열 채용·Granicus 회의 시스템(시 공통) | 시 페이지, 감사, 입양 페이지 |
| **★ 「지금 상태」를 받는 경로는 전화·이메일이다** | 핸드북 — *"CALL! The Foster Care Coordinator (916-709-7991) during normal business hours Monday-Friday from 9-6. If you have medical concerns for your foster dog, email v***@cityofsacramento.org. If your concerns are urgent on the weekends, you can call the supervisor on duty…"*. 웹 포스터 페이지의 문의 창구는 **`d***@cityofsacramento.org`** 하나. **포스터가 상태를 직접 기록하는 화면은 공개 자료 어디에도 없다** | 핸드북, 포스터 지원 페이지 |
| **★ 배치가 주간 일괄 메일 + 선착순이다** | 핸드북 — *"Each week, as foster-care animals are identified, the Foster Care Coordinator (FCC) will email FCPs with a list of animals in need of fostering. This email goes out to everyone, even if you already have a foster. Selection is based on a first come-first served basis…"* | 핸드북 |
| **★ 입양 전환에 사람이 낀다** | 핸드북 — *"When your foster dog is ready to be adopted. Please send a bio about his or her personality along with a good photo to our dog foster team… We will update your fosters profile and make him or her available for adoption."* **포스터가 메일로 보낸 사진·소개문을 스태프가 옮겨 싣는 구간이 설계에 박혀 있다** | 핸드북 |
| **★ 월간 보고 통계를 회의 전날 손으로 뽑는다** | 위원회 Follow-Up Log — *"Since the manager's report focuses on statistics pulled the day before the meeting… it has been created the day before the commission."* 규칙 변경으로 사전 제출이 강제되면 *"the data/updates will be old by the time of the meeting"* 라 시가 직접 적었다 | 위원회 Follow-Up Log(2026-02) |
| **미확인 — 결정적 공백** | ①**Chameleon 포스터 모듈이 켜져 있는가**, 켜져 있다면 실제로 쓰는가 ②Better Impact 에 개체·배치 이력을 넣는가, 사람 정보만 넣는가 ③고양이 Formstack 폼 제출물이 **Chameleon 으로 들어가는가, 받은편지함에 남는가** ④Chameleon 계약 에디션·연 비용·갱신 시점 ⑤신규 SaaS 도입에 시 IT 부서의 보안·개인정보 검토가 별도로 붙는가 | — |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **근거 문서** | **City of Sacramento — Professional Services Policy**(시 정책·절차, 24쪽) 전문을 확보해 직접 판독했다. 소관은 **Finance Department → Procurement Services Division** |
| **★ $15,000 이하 — 마이크로퍼처스** | *"Micropurchasing (the procurement of professional services at a cost of $15,000 or less) does not require the use of an RFQ or RFP, and the contractor may be selected at the discretion of the Project Manager provided that the Contracts Manager shall approve the procurement process. **No minimum number of price quotations is required.**"* 단 **견적은 서면**이어야 하고, LBE(지역업체) 요건은 적용되지 않는다 |
| **$15,000 초과 ~ $100,000 — 비공식 견적** | 정식 공고는 불필요하나 **최소 3곳**에 제안을 요청해야 하고(3곳 확보가 불가하면 Contracts Manager 가 문서화), **그중 1곳은 지역업체**여야 하며 **5% LBE 우대**가 적용된다. 자격·제안은 서면으로 받고 동일 기준으로 평가한다 |
| **$100,000 초과 ~ $250,000 미만 — 정식 경쟁 공고** | 정식 경쟁 solicitation 필요. **$100,000 이상 공고는 공개 열람 대상이며 시 Contracting Opportunities 페이지에 게시**된다. 단 **시의회 의결은 불필요** |
| **★ $250,000 이상 — 시의회 의결 필수** | *"Contracts of $250,000 or more must be awarded by the City Council."* 갱신·연장을 포함한 **총액** 기준이며, 이 구간에서는 제안 거부 권한도 시의회에만 있고 계약 서명 전 시 법무 검토가 선행된다 |
| **서명·전결 권한** | *"Contracts less than $250,000 do not require the approval of the City Council and may be executed on behalf of the City by the City Manager or authorized designee. Delegations of approval authority are specified in the Signing Authority Policy."* **즉 $250k 미만은 시 매니저 또는 위임받은 자가 집행하며, 부서장 위임 한도는 별도 문서(Signing Authority Policy)에 있다 — 그 한도는 미확인이다** |
| 시 조례 조문 (참고) | 시 조례 **3.56.080(시 매니저 권한)·3.56.090(시의회의 계약 승인)** 이 같은 임계값 체계를 규정한다고 확인되나, **조문 원문은 코드 호스팅 사이트 접근 차단(403)으로 열지 못했다**. 이 문서의 임계값 판단은 **전문용역 정책 원문**을 근거로 한다 |
| **결정 라인 (해석)** | **April Stevenson(부서 내 요구 발의·Project Manager 역할) → Community Development Department 부서장 → Finance/Procurement(절차 판정) → City Manager(서명, $250k 미만) → City Council($250k 이상).** **신청자 단독으로 시를 구속하는 계약을 체결할 수 없다** |
| **★ 가격 설계 시사점** | **연 $15,000 미만이 규정상 가장 짧은 경로이며, 이 구간은 견적 수 요건조차 없다.** $15k 를 넘기면 3곳 견적과 지역업체 1곳 요건이 붙고, $100k 를 넘기면 공개 공고가 붙고, $250k 를 넘기면 시의회 안건이 된다 |
| 경쟁 면제 (참고) | sole source 는 *"After conducting a good faith review of available sources, the Project Manager determines there is only one reasonable and practicable source"* 인 경우에 한하며, 특정 독점 제품을 원한다는 사유만으로는 인정되지 않는다. **어떤 면제도 $250k 이상의 시의회 승인 요건은 면제하지 못한다** |
| **조달 선례 — 이 부서에서 실제로 돌아간 경로** | 위원회 Follow-Up Log(2026-02) — 쉘터 정책·절차 집필을 **외부 업체에 위탁**하는 건이 *"a request of the former city manager, **the cost of which will not come out of the shelter's budget**"* 로 기록됐고, *"The proposal review process will begin late January/early February"*, 선정 후 **위원회 앞 발표 1회 이상** 이 예정됐다. **①부서 예산 밖 재원으로 외주를 붙이는 경로가 실존하고 ②선정 업체가 자문위원회에 공개 발표하는 절차가 붙는다** |
| **병목 (추정)** | ①**시 재정 적자** — 감사 권고에 부서가 *"this will not be possible due to the City's current budget deficit"* 로 답한 항목이 있다 ②**FTE 63 동결** — 새 업무를 얹는 제안은 수용 여력이 없다 ③**Chameleon 계약이 이미 있어 중복 지출로 보일 위험** ④**Shelter Operations Manager 공석** — 포스터 프로그램 총괄 자리가 비어 있어 실무 오너를 지정하기 어렵다 ⑤**Friends of Front Street 를 우회 지갑으로 쓰는 설계는 감사 Finding 8·MOU 미완 때문에 지금 가장 예민하다** (**전부 추론, 직접 확인 필요**) |

## 6. April Stevenson 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **현 직책** | **Manager, Animal Care Services Division**(Community Development Department). Front Street Animal Shelter 운영 + 현장 서비스 + 동물 케어 프로그램 총괄 | Sacramento City Express(2026-07-20) |
| **부임일** | **2026-07-27.** 콜 시점(2026-09-18)에 **재직 7주 3일** | 같은 기사 |
| **경력 — 직전** | **City of Rancho Cordova** — Management Analyst II 겸 Senior Animal Services Officer. **동물서비스과를 총괄하고 $5M 예산을 관리**했다 | 같은 기사 |
| **경력 — 그 전** | **Placer SPCA** — Shelter Operations Manager(일상 운영·직원·자원봉사자·동물 케어 총괄) | 같은 기사 |
| **★ 경력 — 핵심** | **City of Berkeley Animal Care Services 10년 이상**, 그 기간 **자원봉사·포스터·레스큐·커뮤니티 아웃리치 프로그램을 관리**했다. **포스터 운영을 직접 굴려 본 사람이다 — 이 리드에서 가장 중요한 한 줄** | 같은 기사 |
| **창립 이력 (폼의 "founder" 근거)** | 펫 스토어 근무로 시작해 쉘터로 이동, **본인이 파충류 레스큐를 창립**했고 이후 Animal Control 에서 근무하며 방울뱀 보호 문제를 인식했다 | savethesnakes.org 팀 페이지 |
| 학력 | **William Jessup University, 경영학(Management) 학사** — *"to better support human-animal relationships"* 취지로 진학 | Sacramento City Express, savethesnakes.org |
| 대외 활동 | **Save The Snakes 재무(Treasurer)**. 2022년 코스타리카 ecotour 참가 | 두 출처 |
| 호칭 | 시 뉴스룸·지역 언론·비영리 소개 모두 **she/her** 로 지칭한다 | 세 출처 |
| **직접 인용 (취임)** | *"I am honored to join the City of Sacramento and lead the Animal Care Services Division"* / *"I look forward to working alongside our dedicated staff, volunteers, rescue partners and community"* / 우선순위는 **직원·자원봉사팀 지원, 커뮤니티 파트너 협업, 동물 성과를 극대화하는 프로그램, 연민 있고 투명하며 반응하는 서비스** | Sacramento City Express, Sacramento Bee 계열 |
| **읽히는 성향 (추론)** | ①**포스터·자원봉사 프로그램이 본인의 전문 영역**이다 — 개념 설명이나 "포스터 관리가 어렵죠" 같은 접근은 시간 낭비다. **화면·필드·상태값 수준의 구체적 대화가 먹힌다** ②**예산 관리 경력($5M)과 경영학 배경**이 있어 비용 대비 효과를 숫자로 따진다 ③취임 메시지가 **직원·자원봉사자 먼저, 투명성**으로 구성돼 있다 — **"스태프 시간을 돌려준다"와 "보고가 맞아떨어진다"가 본인 언어에 가장 가깝다** ④**부임 7주차에 공석·감사·비판적 위원회를 동시에 안고 있다** — 새 업무를 얹는 제안은 즉시 거부된다 | 추론 |
| **화법 제안** | 본인은 **요구를 발의하는 자리이지 계약 서명 주체가 아니다.** 따라서 "결재권자를 소개해 달라"가 아니라 **"이걸 시에서 사려면 어느 경로가 제일 짧습니까"** 로 절차 안내자로 세우고, **FY2027 라이브릴리스율 90% 목표와 감사 권고 이행을 무엇으로 증명할 것인가**를 함께 그리는 대화로 가는 것이 맞다. **전임자 사퇴·Dains 논란·Fix Our Shelters 의혹은 우리가 먼저 꺼내지 않는다** | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2026-09** | **콜 6일 전(2026-09-09)이 Animal Wellbeing Commission 정기회 일자다**(매월 둘째 수요일 규칙 기준 **추정**). 매 회차에 **Animal Care Services Monthly Report** 가 올라간다 | 위원회 페이지·회의록(일자는 규칙 기준 추정) |
| **2026-08~09** | **Final Plea 6개월 파일럿** — 안락사 예정 고위험·노령 개체를 소셜·디지털 채널로 사전 공개하는 제도. **위원회가 지지하고 시의회 승인 대기 중**. 위원 Ignacio Barragan 발언 — 목적은 시 차원의 투명성 제고, 배경은 안락사 증가(본인 표현 "작년 약 2,000마리"). **카운티 Bradshaw 쉘터는 이미 운영 중** | CBS Sacramento |
| **2026-07-27** | **April Stevenson 부임.** 시 뉴스룸이 2026-07-20 에 사전 공지 | Sacramento City Express |
| **2026-06-10** | **시의회가 FY2026/27 예산 총 $1.7B(일반회계 $898.3M) 의결.** Animal Care Services Division 제안액 **$10,280,755**, FTE 63 동결, **라이브릴리스율 FY27 목표 90%**, 부서 목표에 **쉘터 정책·절차 완성** 명시 | Sacramento City Express, 제안 예산서 |
| **2026-05-15~17** | **개 입양비 전액 면제** — 수용 압박 대응. **시설 내 개체와 포스터 가정 개체 모두 대상**. 당시 4월 입양이 전년 283 → 255건으로 약 12% 감소한 상태였고, interim 매니저 Ryan Hinderman 이 언론에 응대했다 | hoodline(2026-05-15) |
| **2026-03 경** | **Phillip Zimmerman 사퇴** — 2025 연차보고서에 본인이 **2026-05-29 은퇴 예정**이라 적었으나 **약 두 달 일찍** 떠났고, 보도는 *"safely or effectively"* 계속할 수 없다고 말한 것으로 전한다. **Staycee Dains(Shelter Operations Manager)도 같은 시기 이임**. **Ryan Hinderman 이 interim 매니저** | 2025 연차보고서, Sacramento Bee 계열 보도 |
| **2026-03** | 2026-03-11 위원회 정기회. **2026-02-11 회의록 승인 안건**이 상정됐다 | 위원회 보고서 |
| **2026-02-11** | **위원회 Follow-Up Log 채택** — 이 문서에 **개 포스터 정책 논란 해명**(배치에 드는 스태프 시간 3가지), **Chameleon 조회 한계**, **매니저 월간 보고를 전날 수작업으로 만든다는 설명**, **정책·절차 외주 조달 진행 상황**이 전부 기록됐다. 안건 분리 표결이 **찬 7·반 3·기권 2** 로 갈리고 **2시간 연장** 후 20:15 산회 | 위원회 회의록·Follow-Up Log |
| **2026-01-21** | 위원회 정기회 — **분기 안락사 수치 발표**(다음 발표는 2026-05 예정). **개 포스터 정책 우려**(Benedict·Virga), **매니저 PPT 사전 공유 요구**(McDole), **정책·절차 집필 주체 논쟁**(Bagley-Franzoia), **중성화 행사 추가 $500,000 요청**이 올라왔다 | 위원회 Follow-Up Log |
| **2026-01** | 위원회 2026년 의장으로 **Jamie McDole** 선출 | 위원회 기록 |
| **2025-11-12** | 위원회가 **감사 이행 상황 월간 보고**를 요구(이후 분기 보고로 조정될 수 있다고 답변) | 위원회 Follow-Up Log |
| **2025-05-09 / 05-13** | **성과감사 공표 및 시의회 보고.** GPP Analytics Inc. 수행, Report #2024/25-14(2025-04), 94쪽, **Finding 1~10**(권고 31건 — 시 뉴스룸·보도 기준). 3대 축은 **과밀·인력 부족·낮은 수입** | 성과감사 원문, Sacramento City Express |
| **2024~2025** | **2024 needs assessment** 완료 — 현 시설 전면 개축은 **infeasible**, **신규 7 acre 부지 + 50,000 sf 신축** 권고, 비용 **개축 $30~50M / 신축 $40~60M** | 2024 needs assessment |
| **2023-06 ~ 2025-01-27** | **Chief Animal Control Officer 공석 19개월** | 성과감사 |
| **미확인 / 원문 미열람 (콜에서 먼저 꺼내지 말 것)** | **Fix Our Shelters 및 일부 대안 언론이 제기한 의혹** — 안락사 실태 은폐, HOAP 연방 ARPA 자금 오용, 위법한 인테이크 제한(Hayden's Law 위반 주장), 캘리포니아 시립 쉘터 140여 곳에 보낸 cease and desist 등. **해당 기사들은 접근 차단(403)으로 원문을 열지 못했고 검색 요약만 확보했다.** 사실관계가 확인되지 않았고, 확인됐더라도 **부임 7주차 신임 매니저에게 전임자 사안을 묻는 것은 콜을 망치는 가장 빠른 길이다** | 검색 요약 경유, **원문 미열람** |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

각 줄은 **정황에서 끌어낸 추정**이며, 확인 필요 여부를 함께 적는다. 다만 이 리드는 **시가 직접 쓴 문장이 근거인 항목이 많아** 추정의 강도가 평소보다 높다.

- **★ 시가 포스터 배치 비용을 항목으로 적어 놨다.** 위원회 Follow-Up Log(2026-02) 원문 — 배치에 필요한 스태프 시간이 *"prepare supplies, make an appointment, meet the foster, send and organize paperwork, and have back and forth communication to answer questions and coordinate all this"* 이고, 배치 후에는 *"medical or behavioral concerns can arise that then require significant communication and coordination"*, 그리고 *"challenges getting animals back for spay/neuter or prolonged stays in the foster system"* 이 발생한다. **「고도로 입양 가능한 개는 포스터로 보내지 않는다」는 정책 결정의 근거가 이 세 가지 비용이었다** — **직접 확인 필요(이 세 가지가 지금 각각 무엇으로 처리되는가, 한 건당 몇 분이 드는가). 소재 A 와 우리 가설의 정중앙이다**
- **★ 배치가 주간 일괄 메일 + 선착순이다.** 핸드북 — FCC 가 매주 필요 개체 목록을 **전체 포스터에게 일괄 메일**로 보내고 **선착순**으로 배정한다. **1,000여 마리 규모의 배치가 메일 회신 순서로 정해진다** — **직접 확인 필요(이 방식이 2026년에도 유지되는가, 회신을 누가 정리하는가)**
- **★ 포스터가 상태를 직접 기록하는 화면이 없다.** 공개 자료의 모든 경로가 **전화(FCC 916-709-7991, 월~금 9-6) · 의료 메일(`veterinaryservices@`) · 팀 메일(`dogfoster@`) · 주말 당직 전화**로 끝난다. 핸드북은 증상 발생 시 *"Be ready to state when a problem began, how often it occurs and whether the condition tends to happen at specific times"* 라고 **구두 보고를 준비하라**고 지시한다 — **직접 확인 필요(그 통화 내용이 Chameleon 개체 레코드에 적히는가, 코디네이터 메모로만 남는가)**
- **★ 정본에 포스터 상태값이 썩은 흔적이 감사에 기록됐다.** *"animals whose outcome field was listed as foster even though other outcomes had been realized"* — **시설 밖 개체의 상태 갱신이 누락되는 구조라는 뜻이다** — **직접 확인 필요(포스터 종료·복귀·입양 시 누가 어느 화면에서 상태를 바꾸는가)**
- **★ 입양 준비 전환에 사람이 낀다.** 포스터가 **사진과 소개문을 메일로** 보내면 스태프가 프로필을 갱신하고 Adopets 에 올린다. 그 뒤 신청서 검토·연락·meet and greet 은 포스터가 하고 최종 승인은 스태프가 한다 — **직접 확인 필요(메일→Adopets 사이를 누가 며칠에 한 번 처리하는가, 대기 중인 개체가 몇 마리 쌓이는가). 소재 A 가 정확히 이 구간이다**
- **★ 개 프로그램과 고양이 프로그램이 서로 다른 도구로 돌아간다.** 고양이는 **Formstack 폼 5종**(물품 요청·Foster-On-Deck·멘터 방문·성격 프로필·이관 동의서)이 있고 개는 **폼이 0개**다. 같은 2명의 Volunteer Coordinator 가 둘을 함께 관리한다 — **직접 확인 필요(두 프로그램의 명부가 한 곳인가, Formstack 제출물이 어디로 떨어지는가)**
- **★ 월간 위원회 보고 통계를 회의 전날 수작업으로 만든다.** 시 기록 — *"statistics pulled the day before the meeting… it has been created the day before the commission"*, 사전 제출이 강제되면 *"the data/updates will be old by the time of the meeting"*. **매달 반복되는 수작업 보고가 확정돼 있고, 그 보고를 비판적 위원회가 받는다** — **직접 확인 필요(그 PPT 를 누가 몇 시간에 걸쳐 만드는가, 포스터 관련 숫자가 그 안에 있는가)**
- **★ 정본에서 못 뽑는 값을 정본 밖에서 따로 추적해 왔다.** *"it is not possible to run a report to determine what the kennel inventory was for a specific day 7+ years ago. **We have been tracking this information for the past couple years**, but that wouldn't fulfill this request."* — **최근 몇 년 치 켄넬 재고를 Chameleon 밖 어딘가에 쌓아 왔다는 자기진술** — **직접 확인 필요(그게 스프레드시트인가, 누가 매일 채우는가). 스프레드시트가 존재한다면 우리 제품의 진입점이다**
- **★ 자원봉사 SW 가 리텐션을 못 낸다고 부서가 감사에 답했다.** *"our current volunteer management software does not provide retention data. We will investigate whether our existing software has a feature for this or if we will nee[d]…"* — **①포스터 리텐션도 같은 공백일 개연 ②신규 구매 전 기존 도구 기능 확인이 선행 절차** — **직접 확인 필요(Better Impact 에서 포스터 활동 이력·재참여를 볼 수 있는가)**
- **포스터 시간을 「환산식」으로 센다.** 고양이 1~2마리 하루 1시간, 3마리 이상 3시간, 성견 1.5시간, 강아지 2~3시간, bottle baby 6시간. **실제 케어 기록이 아니라 마리 수 × 계수로 시간을 만든다** — **직접 확인 필요(그래서 개체별 실제 케어 경과가 어디에도 안 남는 것인지)**
- **포스터 문서가 낡아 있다.** 개 핸드북은 **2022-06-06 판**이고 본문이 **지금 존재하지 않는 도메인으로 등록 절차를 안내**한다(`sacpetsearch.com`, `frontstreetshelter.org`). 고양이 핸드북 카드는 **"Temporarily Unavailable"** 이다 — **직접 확인 필요. 다만 부서 FY2026/27 목표가 "쉘터 정책·절차 완성"이므로 지금이 문서·절차를 손대는 국면이다**
- **중성화 백로그가 사라지면서 병목이 이동했다.** 2024-09 **772건** → 2026-03 **1건**. 예산서는 이 개선으로 **foster-to-adopt 가정 수가 줄었다**고 적었다. **즉 「중성화 대기 때문에 가정에 오래 머무는」 문제는 해소됐고, 남은 체류는 다른 이유(입양 전환 지연·행동 문제)다** — **직접 확인 필요(지금 포스터 체류를 늘리는 주된 이유가 무엇인가). 옛 자료를 근거로 "중성화 대기가 문제죠"라고 말하면 정보가 낡았다는 신호가 된다**
- **라이브릴리스율 수치가 창구마다 다르다.** 2025 연차보고서는 **개 86% / 고양이 64%**(역년·종별), 예산서 성과지표는 **FY25 79.6%**(회계연도·통합), 감사는 **2023년 개 88% / 고양이 79%** 다. **산식과 기간이 문서마다 다르다** — **직접 확인 필요. 우리가 숫자를 인용할 때 어느 문서 기준인지 밝히지 않으면 신뢰를 잃는다**
- **고양이 라이브릴리스율 64% 가 가장 약한 지표이고, 고양이가 포스터 물량의 62%(1,800/2,883)다.** FY27 목표 90% 를 만들려면 고양이 쪽을 건드려야 하고, 고양이는 대부분 가정에 있다 — **직접 확인 필요(90% 목표를 종별로 어떻게 쪼개 놨는가)**
- **Adopets 는 입양 쪽만 덮는다.** 포스터가 신청서를 보고 meet and greet 을 잡는 화면은 있는데, **그 개체가 그날 어떤 상태인지 적는 화면은 없다.** 같은 포스터가 같은 개체로 두 시스템을 쓰지 않는다 — **직접 확인 필요(Adopets 에 케어 메모 기능을 쓰고 있는가)**

## 미확인 요약 (콜에서 확인할 것)

1. **포스터 가정에 있는 1,000여 마리의 「지금 상태」가 어디에 적히는가** — ①**Chameleon 포스터 모듈이 켜져 있는가**, 켜져 있다면 실제로 쓰는가 ②**포스터가 직접 로그인해 상태를 남기는 화면이 있는가**(Better Impact? Adopets? 없음?) ③없다면 전화·메일로 들어온 내용을 누가 어디에 옮기는가. **접수 창구가 있는 것과 포스터가 기록을 남기는 것은 전혀 다른 문제다**
2. **FY2027 라이브릴리스율 90% 목표를 무엇으로 만들 계획인가** — FY25 실적 79.6%, 3년 연속 하락, 고양이 64%. **10%p 를 종별로 어떻게 쪼갰고, 그 계산에서 포스터 회전이 차지하는 몫이 얼마인가.** 이것이 이 콜에서 우리 제품이 붙을 자리를 결정한다
3. **지금 포스터 체류를 늘리는 주된 이유가 무엇인가** — 중성화 백로그는 772 → 1 로 해소됐다. 남은 이유가 **입양 전환 지연인지, 행동 문제인지, 포스터와의 연락 지연인지**. 시가 직접 쓴 *"Not all fosters will expediently work with adopters to get them out of the system"* 이 지금도 유효한가
4. **Chameleon 밖에서 별도로 추적하고 있는 값이 무엇인가** — 위원회 답변의 *"We have been tracking this information for the past couple years"* 가 실물로 무엇인가(스프레드시트? 수기 대장?), **누가 매일 채우고 어디에 보관하는가**
5. **월간 위원회 보고 PPT 를 만드는 데 실제로 얼마가 드는가** — 전날 통계를 뽑아 하루에 만든다고 기록돼 있다. **그 안에 포스터 관련 숫자가 들어가는가, 그 숫자를 어디서 뽑는가**, 그리고 사전 제출 규칙 변경이 이 작업을 어떻게 바꿨는가
6. **고양이 Formstack 폼 5종의 제출물이 어디로 가는가** — 메일 알림인가, 시트인가, Chameleon 연동인가. 그리고 **개 프로그램에는 왜 폼이 없는가**(정책 차이인가, 담당자 차이인가)
7. **Better Impact 를 어디까지 쓰는가** — 지원서·시간·교육 이수까지인가, 포스터 배치 이력·개체 배정까지 들어가는가. 감사 응답의 **"리텐션 데이터가 안 나온다"** 는 지금 해결됐는가
8. **Chameleon 계약 조건** — 에디션·연 비용·갱신 시점·포함 모듈. **새 도구가 중복 지출로 보일 위험이 가장 큰 반론이므로, 무엇이 이미 포함돼 있는지를 먼저 알아야 한다. 우리가 먼저 금액을 꺼내지 말 것**
9. **신규 SaaS 도입에 시 IT 검토가 별도로 붙는가** — 조달 임계값(전문용역 정책)과 별개로 **시 정보기술부서의 보안·개인정보·접근성(ADA) 검토**가 붙는지, 붙는다면 통상 몇 주인가. 시가 Formstack·Better Impact·Adopets·DocuPet 을 이미 쓰고 있으므로 **선례로 물어보기 좋다**
10. **부서장 전결 한도가 얼마인가** — $250k 미만은 시의회가 불필요하나 실제 위임 한도는 **Signing Authority Policy** 에 있고 열지 못했다. **본인이 어디까지 스스로 진행할 수 있는가**
11. **포스터 프로그램의 실무 오너가 지금 누구인가** — 개 포스터를 총괄하는 **Shelter Operations Manager 가 공석**이고, 핸드북의 **Lori Rhoades(Dog Foster & Rescue Coordinator)** 는 2022·2024 자료 기준이다. **현재 담당자와 인원, 충원 전망**
12. **감사 권고 31건 중 데이터·기록 관련 항목의 이행 상태** — 특히 **4.6(Chameleon 데이터 딕셔너리·주기적 품질 점검·직원 교육)**, **5절 오픈데이터 정합성**, **Finding 10(자원봉사·포스터 성과지표 신설)**. 위원회가 이행 상황을 정기적으로 요구하고 있어 **"권고 이행을 증명하는 도구"라는 프레임이 성립하는지** 확인할 자리다
13. **정책·절차 외주 업체가 선정됐는가** — 2026년 1~2월에 제안 검토가 시작됐고 **비용이 쉘터 예산 밖**이라고 기록됐다. 선정됐다면 **그 업체가 포스터 절차까지 다루는지**, 그리고 **부서 예산 밖 재원으로 도구를 붙이는 경로가 우리에게도 열려 있는지**
14. **Final Plea 파일럿이 승인됐는가** — 승인되면 **고위험 개체를 공개 채널로 사전 노출하는 새 업무**가 생기고, 그 대상 중 다수가 가정에 있는 개체일 수 있다. **일이 늘어나는 국면이므로 우리 제품이 그 업무를 덜어주는 쪽으로 붙을 수 있는지**
