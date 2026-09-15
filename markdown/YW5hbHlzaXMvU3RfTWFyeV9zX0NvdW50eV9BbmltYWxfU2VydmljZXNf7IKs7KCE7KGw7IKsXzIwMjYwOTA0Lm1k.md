# St. Mary's County Animal Services 사전조사

- 작성일: 2026-09-04 / 목적: Hollis Lampe 콜 준비(2026-09-09) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Shelter", "role": "Shelter or rescue manager", "system": "PetPoint", "fosters": "More than 30"}`
- 유입 소재: B (임시보호자 업데이트 수집 — 폼에서 현재 임시보호자 수를 물었다)
- **동일 조직 확정 / 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석: 이메일 도메인 `stmaryscountymd.gov` 가 **St. Mary's County, Maryland 카운티 정부 공식 도메인**이라 조직 특정에 모호함이 없다. 이 리드는 비영리 레스큐가 아니라 **카운티 정부 부서**이며, 소속은 **Department of Emergency Services**다
- 미열람 출처: 카운티 웹서버가 본 조사 환경의 직접 요청을 차단해 **전 페이지·PDF 를 리더 프록시(r.jina.ai)로 판독**했다. **FY2027 승인 예산서 PDF 는 어떤 경로로도 열지 못했고**(용량 추정), Facebook(@smcanimalservices)은 로그인 게이트, 이사회 문서 포털(Diligent Community)과 Petfinder 는 JS 렌더링이라 내용 확인이 불가했다. 해당 항목은 전부 **미확인**으로 표기했다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| **이메일 도메인** | **결정적 근거 ①.** `stmaryscountymd.gov` 는 St. Mary's County, Maryland 카운티 정부 공식 도메인이다. 개인 메일이 아니라 **관청 업무용 주소로 신청**했다 | 리드 폼, 카운티 공식 사이트 |
| 조직 실체 | **St. Mary's County Animal Adoption & Resource Center(통칭 AARC)** + **Animal Control Division**. 두 기능 모두 **Department of Emergency Services** 산하다. 비영리 법인이 아니므로 **EIN·990 이 존재하지 않는다** | 카운티 공식 사이트(ES 부서 소개) |
| 소재 | **California, MD**(우편 구역 표기로는 Lexington Park 로도 적힌다). 카운티 청사는 Leonardtown, MD | 카운티 공식 사이트 |
| **신청자 — 직책** | **결정적 근거 ②.** 카운티가 직접 게시한 **Animal Control Advisory Board(ACAB) 회의록**에 `Hollis Lampe, St. Mary's County Animal Shelter Division Manager` 로 출석 기록. **2025 ACAB 연차보고서**에도 당연직 위원으로 등재. 지역 언론은 **`Animal Services Division Manager`** 로 적고 **쉘터 운영과 Animal Control 을 함께 총괄**한다고 기술 | ACAB 회의록(2025-11-05), ACAB 2025 연차보고서, The BayNet(2026-03·2026-04) |
| **부서 명칭 불일치 (주의)** | 같은 자리를 카운티 문서가 **세 가지로 부른다** — ES 부서 소개는 `Animal Control Division` 과 `Animal Services Division` 을 **별개 division 으로 병렬 표기**하고, 회의록은 `Animal Shelter Division Manager`, 언론은 `Animal Services Division Manager` 로 적는다. **조직 개편이 진행 중이거나 문서 정비가 안 된 상태로 읽힌다**(**추론**) | 카운티 공식 사이트, ACAB 회의록, The BayNet |
| **동명·인접 조직 배제** | 같은 카운티 안에 **별개 민간 비영리가 최소 3곳** 있고 전부 이 리드가 아니다 — ①**SMAWL**(St. Mary's Animal Welfare League, 민간 비영리) ②**AROO**(Animal Rescue & Outreach Organization, 카운티 쉘터 후원 비영리, EIN 33-4982804) ③**Feral Cat Rescue Inc.**(TNR 파트너). 또한 카운티 Animal Control 페이지 본문이 언급하는 **Tri-County Animal Shelter** 는 인접 Charles County 소재의 **협력 기관**이지 이 조직이 아니다 | 각 기관 사이트, ProPublica API, 카운티 공식 사이트 |
| 폼 응답 정합 | **4개 중 3개가 확인되고, 1개(포스터 수)는 공개 자료에 근거가 전혀 없다.** 아래 표 참조 | — |

### 폼 응답 대조 — 이 콜의 출발점

| 폼 응답 | 공개 자료로 확인한 것 | 판정 |
|---|---|---|
| `org_type: "Shelter"` | **맞다.** 자기표기 — *"the only shelter in St. Mary's County required to accept every animal that comes through our doors regardless of breed, temperament, health conditions, and circumstance"*. **다만 폼에 잡히지 않는 결정적 속성이 있다 — 카운티 정부 부서이며 동물 규제 단속·물림 사고 조사·동물 학대 수사 권한을 함께 갖는다** | **일치** — 단, "정부 기관"이라는 축이 폼에 없다 |
| `role: "Shelter or rescue manager"` | **정확히 맞다.** Animal Services Division Manager 로 쉘터와 Animal Control 을 함께 총괄한다. **상급자는 Jennifer Utz(Director of Emergency Services)** | **일치** |
| `system: "PetPoint"` | **직접 증거로 확인했다.** 카운티 입양 페이지가 **`ws.petango.com` 의 adoptablesearch 위젯**을 authkey 와 함께 임베드하고 있고, 개체 사진이 **`g.petango.com/photos/3650/`** 경로로 서빙된다. **Petango 는 PetPoint(Pethealth·24Pet 계열)의 공개 입양 피드**다 | **일치 — 정본이 PetPoint 계열임이 사이트 코드로 확인됨** |
| `fosters: "More than 30"` | **공개 자료에 포스터 수치가 단 하나도 없다.** 그리고 **2026-03-04 ACAB 회의록에서 본인이 "곧 시행할 새 포스터 프로그램"을 소개했다.** 즉 30 이상이라는 숫자는 **출범 반년 안팎의 프로그램에서 나온 값**이다 | **자릿수·단위·정의 전부 미확정 — 콜 1순위** |

→ **조직은 관청 도메인과 부서 구조로, 신청자는 카운티가 게시한 회의록·연차보고서로 확정.** 다른 조직 정보를 끌어온 부분 없음.

## 미팅에서 바로 쓸 핵심 5줄

1. **포스터 프로그램이 반년 전에 새로 시작됐고, 그 사이 「30명 이상」이 됐다 — 도구가 자리를 잡기 전에 규모가 먼저 붙은 상태다**
 **2026-03-04 ACAB 회의록** — Hollis Lampe 가 *"a new foster program the Shelter will soon be implementing"* 을 소개하고 **자세한 내용은 쉘터 Facebook 페이지를 보라고 안내**했다. 카운티 사이트에는 **포스터 페이지도, 포스터 신청서도 없다**(사이트맵 전수 확인: `AnimalShelter/` 하위는 Adoptable·KittyCam·LostAndFound·Volunteer 4개뿐). 반년 뒤 본인이 폼에 **"More than 30"** 을 적었다. **즉 프로그램은 굴러가는데 접수·명부·기록이 놓일 자리가 공개 자료 어디에도 없다.** 소재 B가 이 조직에 걸린 이유가 여기 있을 개연이 높다

2. **직무기술서가 이미 「포스터 대장을 손으로 관리한다」고 쓰고 있다 — 우리 제품이 겨냥하는 문장이 카운티 공식 문서에 그대로 있다**
 **Animal Shelter Volunteer Coordinator 직무기술서(판식 05/22)** 필수 업무 18번 — *"Maintains log of foster animals to ensure vaccine schedule and veterinary treatment is being followed"*. 16번은 *"Prepares various reports on volunteers, partner rescue groups and the foster network"*, 17번은 *"Prepares release documentation of animals leaving rescue or foster care"* 다. 결정적인 것은 이 직무의 **요구 지식이 `volunteer management, scheduling software and Microsoft Office Suite`** 라는 점 — 같은 부서의 Adoption Coordinator 직무기술서는 `animal management software` 를 요구한다. **카운티가 직무 설계 단계에서부터 포스터 관리를 정본(PetPoint) 밖에 놓았다.** 게다가 **카운티 직급 체계 8종 중 Foster Coordinator 직급은 존재하지 않는다** — 새 프로그램에 전담 인력이 배정되지 않았다는 뜻이다

3. **주(州) 규정상 포스터 가정에 나간 동물은 「출구」가 아니라 「재고」다 — 분기마다 숫자를 맞춰야 하고 다음 마감이 10월 15일이다**
 메릴랜드주 농무부(MDA) 분기 보고 규정 원문 — *"Animals sent into foster homes… should stay IN your inventory and should NOT be reported in outcomes until their final disposition is determined"*, *"Moving an animal to a foster home… is NOT considered an outcome."* 그리고 *"Confirm that your 'ending animal count' from the prior quarter matches the 'beginning animal count' of the next quarter, as there should be NO discrepancy."* **즉 포스터 가정에 있는 개체 하나하나가 주정부 제출 숫자에 그대로 남고, 분기 경계에서 오차 없이 이월돼야 한다.** 이 조직의 **Q3(7~9월) 보고 마감은 2026-10-15**, 콜 5주 뒤다. 우리가 파는 것이 「편의」가 아니라 **「분기 마감 때 숫자가 맞는 상태」** 로 번역되는 자리다

4. **콜 7일 전에 자문위원회가 FY28 예산을 안건으로 열었다 — 다음 회계연도 요구서를 지금 만드는 국면이다**
 **2026-09-02 ACAB 회의 안건 5.C = `FY28 Budget Discussion`**(같은 회차에 FeLV, Animal Control 조례, 부위원장·서기 보궐선거도 함께 올랐다). 카운티 회계연도는 7~6월이고 FY2027 은 이미 시행 중이며, **FY2028 예산 캘린더는 2026-11 부터 시작해 부서 요구 심의는 2027-03, 확정은 2027-05** 다. **다음 예산에 넣을 항목의 모양이 정해지는 구간이 지금부터 12월까지다.** 콜에서 이 회의 결과를 물어보는 것만으로 대화가 추상론에서 실무 일정으로 내려온다. 단, **FY2027 에는 이미 상근 수의사 정규직이 신설**돼 있어 예산 관심이 그쪽에 쏠려 있다는 점을 감안해야 한다

5. **규모가 2년 만에 1.7배가 됐고 지금이 그 최고점 시기다 — 다만 「기록이 엉망이시죠」 각도는 통하지 않는다**
 주정부 제출 실측(개·고양이 합산) **2023년 1,556 → 2024년 1,782 → 2025년 2,688두**(2025년 전년 대비 **+50.8%**). 그런데 같은 기간 성과 지표는 오히려 좋아졌다 — 이사회 보고 기준 **2026년 1~2월 라이브릴리스율 91%(조정 94%)**, 평균 체류 **개 14일·고양이 16일**(전년 23·29일). **숫자를 못 만드는 조직이 아니라, 숫자를 잘 만들고 있고 그래서 그 숫자를 지키는 데 관심이 있는 조직이다.** 겨눌 자리는 정본의 품질이 아니라 **정본이 덮지 않는 범위(시설 밖 개체·사람 관리·일정)** 다. 참고로 **현재 공개 입양 리스팅은 61마리**(2026-09-04 직접 조회)로 연간 물량의 극히 일부만 보인다

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 정식 명칭 | **St. Mary's County Animal Adoption & Resource Center**(통칭 **AARC**) + **Animal Control Division** | 카운티 공식 사이트 |
| **소속** | **St. Mary's County 정부 → Department of Emergency Services.** 같은 부서 안에 9-1-1 Emergency Communications, Emergency Management, EMS 가 함께 있다. **소방·구급과 한 지붕 아래 있는 동물 부서**다 | 카운티 공식 사이트(ES 부서 소개) |
| 법인격·EIN | **없다.** 정부 부서이므로 990 신고 의무도 EIN 도 존재하지 않는다 | — |
| 소재 | **California, MD**(카운티 청사는 Leonardtown, MD) | 카운티 공식 사이트 |
| 시설 | **2022-09-12 개관**, 약 **12,800 sqft**. 사업비는 보도에 따라 **$6.8M / $7.8M 로 엇갈린다 — 확정하지 못했다**. 설계는 동물시설 전문 사무소(RF Architects), **K-9 유닛과 마·축사 구역**을 별도로 갖는다 | 지역 언론(검색 스니펫), 설계사 프로젝트 페이지 |
| **성격** | **Open Admission.** 자기표기 — *"the only shelter in St. Mary's County required to accept every animal that comes through our doors regardless of breed, temperament, health conditions, and circumstance (from owner surrender, stray pickup, rescued or confiscated animals)"* | 카운티 공식 사이트 |
| **행정 권한 (일반 쉘터와 결정적 차이)** | Animal Control Division 이 **주법·카운티 조례 단속, 무허가 개 포획, 유해 야생동물 대응, 동물 학대 수사, 물림 사고 조사**를 수행한다 | 카운티 공식 사이트 |
| 서비스 권역 | St. Mary's County 전역. 카운티 내 유일한 개방수용 쉘터 | 카운티 공식 사이트 |
| 개방 시간 | **월·목 휴관** / 화·수·금 12:00–18:00 / 토·일 12:00–16:00. **Animal Control 사무 시간은 월~금 07:00–16:00** 로 쉘터와 다르다. 야간 긴급 회선 별도 운영 | 카운티 공식 사이트 |
| **신청자** | **Hollis Lampe — Animal Services Division Manager.** 쉘터 운영과 Animal Control 을 함께 총괄. **2024-11 경 입사**(2025-11-05 이사회에서 "1주년"이 공식 언급됨) | ACAB 회의록, The BayNet |
| **상급자** | **Jennifer Utz — Director, Department of Emergency Services.** 2026-01 ACAB 에서 FY27 예산 상황을 직접 브리핑했고, 2026-05 예산 워크세션에서 상근 수의사 필요성을 설명했다 | ACAB 회의록(2026-01-07), somdnews |
| 간부진 | **Heather Calligandes — Animal Control Supervisor**(2026-03 경 부임, 법집행·가축 경력) / **Tina James — Animal Operation Supervisor**(2026-01 이사회에서 쉘터 업데이트를 직접 보고) / **Dr. Sara Mikeska — 시간제 수의사**(2025-11 합류, 주 약 20시간, 대량 중성화 전문) | The BayNet, ACAB 회의록 |
| **현재 공석 (2026-09-04 기준 2건)** | ①**Animal Shelter Operations Supervisor** — 연 $66,102~$113,734, **2026-07-15 게시, 마감 "Continuous"**, Division Manager 직속 ②**Administrative Coordinator – Animal Services Division** — 연 $48,131, **2026-07-01 게시, "Continuous"**. **두 건 모두 상시 모집이라 충원이 쉽지 않은 상태로 읽힌다**(**추론**) | GovernmentJobs(카운티 채용) |
| 직급 체계 (동물 관련 8종) | Animal Services Division Manager / Animal Shelter Operations Supervisor / Animal Shelter Adoption Coordinator / **Animal Shelter Volunteer Coordinator** / Animal Shelter Care Attendant / Animal Shelter Health Attendant / Animal Control Officer / Supervisor III – Animal Control Officer | 카운티 HR 직급 사양 페이지 |
| **Foster Coordinator 직급** | **존재하지 않는다.** 포스터 업무는 **Volunteer Coordinator 직무기술서 안에 포함**돼 있다 | 카운티 HR 직급 사양 페이지 |
| 자원봉사 | 성인·미성년 두 갈래로 운영. **미성년은 보호자 동반 필수**(성인 1명이 미성년 2명까지 인솔) | 카운티 공식 사이트 |
| **재소자 노동** | Division Manager 직무기술서 9번에 *"Identifies clear work functions and daily assignments for volunteers and **inmates**"* 가 명시돼 있다. **시설 안에 외부 인력이 정기적으로 들어온다** | 직무기술서 |
| **자문위원회 (ACAB)** | 2019-01 설치. **7인**(시민 6 + 동물 부서 당연직 1 + 보건부 당연직 1). **홀수 달 첫 수요일 연 6회** 개최. 권한은 자문이며 **쉘터 예산·운영계획 검토, 인력 자문, 전략계획 수립 참여**를 명시적으로 포함한다 | ACAB 2025 연차보고서, ACAB 조례 |
| ACAB 2026 구성 | **Chair — Doug Isleib**(2026-01 선출) / Vice-Chair — Steve Tuttle(2026-03 사임) / Secretary — Dr. Rebecca Ironmonger(수의사) / 위원 — Mackenzie Jones, Diane Harris(Feral Cat Rescue Inc. 대표) / 당연직 — Susan Morris(보건부 환경보건과), Hollis Lampe | ACAB 회의록·연차보고서 |
| **부속 비영리 (주의: 신청자 소관 아님)** | **AROO(Animal Rescue & Outreach Organization)** — 501(c)(3), **EIN 33-4982804**, NTEE **D11**, **IRS 승인 2025-09**, 소재 Leonardtown, MD. **설립·대표가 Doug Isleib 이고 그가 곧 ACAB 의장**이다. 사이트에 *"not an official account sponsored, endorsed, or managed by St. Mary's County Government"* 를 명시한다 | ProPublica API, aroostmarys.org |
| SNS | 쉘터 **@smcanimalservices**(Facebook), 부서 **@SMCEmergencyServices**, 카운티 **@StMarysCountyGovernment**. **쉘터 페이지는 로그인 게이트라 열지 못했다 — 포스터 프로그램 상세가 여기에 있을 개연이 높다** | 카운티 공식 사이트, 직접 조회 |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 회계연도 | **7월~6월.** 콜 시점(2026-09-09)은 **FY2027 3개월 차**이며, **FY2028 편성 사이클 진입 직전**이다 | 카운티 예산 페이지 |
| **FY2027 카운티 총량** | **$372M**(전년 대비 **+6.8%**). 재원은 **세입 $360M + 잉여금 $12M**. CFO 는 **Vanetta Van Cleave** | somdnews(2026-05 예산 워크세션) |
| **FY2027 예산 사이클 실적** | 2025-11-18 1차 워크세션 → 2026-03-10 **부서 요구 심의** → 2026-03-31 권고안 의결 → 2026-04-21 **공청회(Chopticon High School)** → **2026-05-19 최종 확정·세율 결정**. **워크세션 10회 전부 유튜브 생중계** | 카운티 예산 페이지 |
| **FY2027 쉘터 관련 결정 (핵심)** | **상근 수의사 정규직 신설 승인.** 공청회에서 주민들이 "상근 수의사가 없다"를 지적했고, 위원들이 다음 워크세션에서 정규직을 승인했다. Jennifer Utz 설명 — **현재는 중성화 수술을 위해 Waldorf(인접 Charles County)로 개체를 보내고 있으며, 상근 수의사가 생기면 자체 시설에서 처리해 장기적으로 비용을 절감**한다 | somdnews |
| **Animal Services 부서 예산 라인** | **미확인.** FY2027 승인 예산서 PDF 를 열지 못했다(카운티 서버 직접 차단 + 리더 프록시 반환 실패). **콜에서 우리가 먼저 금액을 꺼내지 말 것** | — |
| 자체 수입 — 압류·보관 수수료 | 1차 압류 **$25** / 2차 **$50** / 3차 **$100** / **일 $20**. 외부 수의 진료비는 소유주가 별도 상환 | 카운티 공식 사이트 |
| 입양비 | **미확인** — 카운티 페이지에 금액이 게시돼 있지 않다 | — |
| **재원 성격 — 일반 쉘터와의 결정적 차이** | **입양비가 조직을 먹여 살리는 구조가 아니다.** 카운티 세입으로 운영되는 행정 부서이므로 **"회전을 높이면 매출이 는다" 논리가 통하지 않는다.** 통하는 언어는 **켄넬 수용 여력·직원 시간·주정부 보고 정합·감사 대응**이다(**추론**) | 추론 |
| **AROO 재정 규모** | **소액 단체다.** IRS 등록상 **990-N(전자우편엽서) 신고 요건**이고 ProPublica 에 재무 데이터가 있는 신고가 **0건**, 수입·자산이 전부 0 으로 잡혀 있다. **2025년 설립**이라 아직 신고 이력 자체가 없다 | ProPublica API |
| AROO 실제 지출 사례 | 개 4마리 응급 수의 진료비 지원, **야외 운동장 개선**(조경·차양·시선 차단·벤치). 자기표기 — 카운티 예산이 못 하는 일을 메운다 | aroostmarys.org |
| **시사점** | **지갑은 사실상 카운티 하나다.** AROO 는 990-N 규모이고 **신청자가 아니라 자문위원장이 운영**하므로, 소프트웨어 비용을 여기로 우회하자는 제안은 **금액상으로도 지배구조상으로도 우리가 먼저 꺼낼 사안이 아니다.** 조달은 카운티 절차(5절)로 짜고, AROO 활용 여부는 본인 판단을 묻기만 한다 | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **주정부 제출 실측 — 총 인테이크(개+고양이)** | **2023년 1,556두 → 2024년 1,782두 → 2025년 2,688두** | MDA 연간 쉘터 통계 보고서. **2024→2025 +50.8%**, 2년 누적 +72.7%. **개·고양이만 집계**하며 소동물·가축은 포함되지 않는다 |
| 2025년 인테이크 내역 | **개 1,103**(길거리 352·소유주 포기 517·소유주 요청 안락사 16·타기관 이관 112·기타 106) / **고양이 1,585**(600·594·5·51·335) | MDA 2025 보고서. **개 부문에서 소유주 포기가 길거리보다 많다** |
| 2025년 아웃컴 | 입양 **1,457**(개 675·고양이 782) / 소유주 반환 **295** / 타기관 이관 **295** / **기타 생존 아웃컴(TNR 방사) 369** / 케어 중 폐사 52 / 소유주 요청 안락사 6 / 그 외 안락사 269. 총 처분 **2,743** | MDA 2025 보고서 |
| 라이브릴리스율 (연간, **계산치**) | **2023년 86.1% → 2024년 80.2% → 2025년 88.1%** | MDA 원자료에서 (입양+반환+이관+기타생존)÷총처분 으로 **직접 계산**했다. 조직 공표치가 아니다 |
| **TNR 프로그램의 급성장** | 기타 생존 아웃컴(TNR) **2023년 0 → 2024년 0 → 2025년 369건** | MDA 보고서. **2025년에 사실상 새로 시작된 라인**이다 |
| 이사회 보고 — 2025년 9~10월 | 인테이크 **698두**(개 228·고양이 407·**소동물/가축 63**), 전년 동기 370두 대비 **+88.65%**. 소유주 포기 **110 → 253**. 아웃컴 637건 — 입양 309·반환 59·연합 이관 33·**TNR 137**·케어 중 폐사 25·안락사 74. **라이브릴리스율 84%**(전년 66%), 개 87%·고양이 82%·소동물 96% | The BayNet(2025-11-11, ACAB 2025-11-05 회의 보도) |
| 이사회 보고 — 평균 체류일 | **개 14일 / 고양이 16일**(2024년 동기 23일 / 29일) | 같은 보도. **회전이 실제로 빨라졌다** |
| 이사회 보고 — 2026년 1~2월 | 인테이크 **420두**(전년 328). 소유주 포기 **96 → 183**. 입양 **260건**(전년 212), 그중 **밸런타인 행사 하루 64건**. 안락사 소유주 요청 14 + 기타 24(전년 동일 항목 61). **비조정 라이브릴리스율 91%, 조정 94%**(전년 83%). TNR 방사 20, **바안캣 입양 15** | The BayNet(2026-03, ACAB 2026-03-04 회의 보도) |
| 펫 팬트리(사료 지원) | 2025년 9~10월 **94건** 요청(2024년 동기 약 50건) | The BayNet. **입소 예방 프로그램이 별도로 돌고 있다** |
| **현재 공개 입양 리스팅** | **61마리 — 고양이 36 / 개 22 / 소동물 3**(2026-09-04 Petango 위젯 직접 조회) | **연간 물량(2,688두)과 크게 차이 난다. 공개 목록은 입양 준비 완료 단계만 담는 것으로 보이나(추론) 확인 필요** |
| **포스터 가정 수 / 포스터 중인 개체 수** | **미확인 — 공개 자료 어디에도 없다.** 카운티 사이트·회의록·연차보고서·주정부 보고서 어느 곳도 포스터 수치를 담지 않는다. 폼 자기보고는 "More than 30" | **이 값의 단위(가정/마리)와 정의가 콜 1순위 확인 항목** |
| 자원봉사 시간·인원 | **미확인.** 2026-01 이사회에서 "2025년 자원봉사 시간"이 보고됐다는 기록만 있고 수치는 회의록에 없다 | ACAB 회의록(2026-01-07) |
| Animal Control 출동 건수 | **미확인.** 매 이사회에서 "call volume"이 보고되나 회의록에 수치가 남지 않는다 | ACAB 회의록 |
| **질병 이력 (콜에서 조심할 것)** | **2025년 9~10월 고양이 범백혈구감소증(panleukopenia) 발생**, 2024-05 **호흡기 질환으로 일시 폐쇄** 이력, **2026-09-02 이사회 안건에 고양이 백혈병 바이러스(FeLV)** 가 올라 있다 | The BayNet, 지역 언론, ACAB 2026-09-02 안건 |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW — 폼 자기보고** | **PetPoint.** 신청자 본인이 폼에 적었다 | 리드 폼 |
| **쉘터 관리 SW — 직접 증거** | **카운티 입양 페이지 HTML 이 `ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimals.aspx` 를 authkey 와 함께 iframe 으로 로드**한다. 개체 사진은 **`g.petango.com/photos/3650/`** 경로다. **Petango 는 PetPoint 계열의 공개 입양 피드**이므로 정본이 PetPoint 라는 자기보고와 일치한다 | 카운티 사이트 HTML 직접 판독 |
| PetPoint 계약 범위·모듈 | **미확인.** 어느 에디션인지, **포스터 모듈이 켜져 있는지**, 계약 금액이 얼마인지 전부 공개 자료에 없다 | — |
| 입양 플랫폼 (2종 확인) | **Petango**(카운티 페이지 임베드, 61마리) + **Petfinder 조직 코드 `MD112`**(카운티 Animal Control 페이지가 Lost & Found 링크를 Petfinder 로 직접 건다). Petfinder 등재 두수는 JS 렌더링이라 확인하지 못했다 | 카운티 공식 사이트, 직접 조회 |
| **자원봉사 접수 — 종이다** | **온라인 폼이 없다.** 자원봉사 페이지가 제공하는 것은 **PDF 5종**뿐 — Volunteer Agreement / Volunteer Application / Adult Volunteer Waiver / Minor Volunteer Consent Form / Minor Volunteer Waiver. **로그인 포털·자원봉사 관리 도구 링크가 사이트 전체에 없다** | 카운티 자원봉사 페이지 |
| 자원봉사 관리 도구 존재 여부 | **미확인.** Volunteer Coordinator 직무기술서가 *"volunteer management, scheduling software"* 지식을 요구하므로 **내부에 무언가 있을 수는 있으나, 대외 노출이 전혀 없다** | 직무기술서 |
| **포스터 접수 — 사이트에 존재하지 않는다** | 사이트맵 전수 확인 결과 `AnimalShelter/` 하위 페이지는 **Adoptable · KittyCam · LostAndFound · Volunteer 4개뿐**이다. 포스터 페이지도 신청서도 없다. **2026-03-04 회의록은 포스터 프로그램 안내를 Facebook 으로 돌린다** | 카운티 사이트맵, ACAB 회의록 |
| **직무 설계상 포스터는 정본 밖이다 (결정적)** | **Volunteer Coordinator** 요구 지식 = *"volunteer management, scheduling software and Microsoft Office Suite"* / **Adoption Coordinator** 요구 지식 = *"animal management software and Microsoft Office"*. **포스터·자원봉사를 맡는 직무에만 동물 관리 SW 가 빠져 있다** | 두 직무기술서 대조 |
| **주정부 보고 채널** | **Maryland OneStop 포털**(onestop.md.gov)로 **분기별 쉘터 통계**를 제출한다. 마감 4/15·7/15·10/15·1/15 | MDA 분기 보고 안내 |
| 카운티 공통 IT 지형 (참고) | 웹 CMS 는 자체.NET/Telerik Kendo 기반, **채용은 NEOGOV(GovernmentJobs)**, **위원회 명부·지원은 Granicus**, **이사회 문서는 Diligent Community**, 민원은 자체 **SM311**, 구매 요청은 **"Corporate Application"**(카운티 ERP). **카운티가 SaaS 를 상시로 도입해 쓰는 조직이라는 방증** | 각 사이트, 조달 매뉴얼 |
| KittyCam | 쉘터 페이지 하위에 **KittyCam** 이 별도로 있다. 벤더는 확인하지 못했다 | 카운티 사이트맵 |
| **미확인 — 결정적 공백** | ①**PetPoint 포스터 모듈이 켜져 있는가**, 켜져 있다면 쓰는가 ②**포스터가 직접 로그인해 상태를 남기는 화면이 있는가** ③포스터 지원자 접수를 **Facebook 메시지·이메일·종이 중 무엇으로 받는가** ④의무기록·수술 예약·투약 스케줄이 PetPoint 안인가 밖인가 | — |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **근거 문서** | **St. Mary's County Government Procurement Manual**(2020-09-08판, 본문 판식 08/2020). 전문을 확보해 직접 판독했다. 소관은 **Department of Finance 산하 Procurement Division** |
| **★ 면제 구매 — $30,000 미만** | **경쟁이 요구되지 않는다**(*"Competition is not required for purchases below $30,000"*). 단 ①**임계값을 피하려고 분할 발주 금지** ②**가능한 범위에서 복수 견적 제출 권장** ③무권한 구매자는 개인 책임을 질 수 있다. 내부적으로 **$5,000 미만 / $5,000~$29,999** 두 구간으로 다시 나뉜다 |
| **소액 구매 — $30,000~$49,999** | **서면 견적 3개 이상** 확보·문서화 → 최저 적격 견적 선정 → **부서장 또는 지정인 승인** → 견적서 전부를 요구서에 첨부. Small Procurement Posting 요구서를 Procurement 에 제출 |
| **$50,000 이상** | **Procurement 를 통한 정식 공고**(IFB 또는 경쟁협상). 전문용역은 $50,000 초과 시 **RFP 필수**. **$100,000 초과 계약은 법무 검토**가 붙고 일정이 15일 더 걸린다 |
| **★ 서명 권한 (반드시 알고 들어갈 것)** | *"Only the Procurement Officer and the Contracting Officer are authorized to sign contracts which bind the County"*, *"Signature authority for all purchase orders, external agreements, contracts, etc. lies solely with the Contracting Officer or the Procurement Officer."* **Hollis Lampe 는 계약서에 서명할 수 없다.** 다만 **Division Manager 직무기술서 5번**이 *"approves or denies requisitions and purchases, as authorized by the Director of Emergency Services"* 라고 적으므로, **부서 내 요구서 승인은 본인 권한**이다 |
| **결정 라인 (해석)** | **Hollis Lampe(요구서 발의·승인) → Jennifer Utz(Director of Emergency Services, 위임 범위 설정·예산 요구 제출) → Finance/Procurement(절차 판정·계약 서명) → 금액이 크면 CSMC.** **$1,000,000 초과 계약에만 CSMC 승인**이 명시돼 있으므로 우리 규모에서 위원회 의결은 논점이 아니다 |
| **가격 설계 시사점** | **연 $30,000 미만이 규정상 가장 짧은 경로**이며, 이 구간에서는 경쟁 절차 자체가 면제된다. $30,000 을 넘기면 견적 3개와 문서화가 붙고, $50,000 을 넘기면 공고·입찰로 몇 달 단위가 된다. **분할 발주로 임계값을 피하는 설계는 매뉴얼이 명시적으로 금지**하므로 총액 기준으로 판단해야 한다 |
| **협동조달 경로 (절차 단축 가능)** | 매뉴얼 8장 전체가 협동조달이다 — ①**메릴랜드주 DGS 주 계약** 활용 ②**타 관할 계약 승계(piggyback)** ③공동 조달 ④연방 조달. **주 계약이나 타 카운티 계약에 협동구매 조항이 있으면 그 경로가 훨씬 짧다.** 단 *"Shopping"*(타 관할 계약을 지렛대로 가격 협상)은 비윤리 관행으로 금지 |
| **예산 사이클 제약** | 자본성 구매는 **승인된 예산에 잡혀 있어야** 하고, 미편성분은 **Finance 의 예산 전용 승인**을 먼저 받아야 한다. 따라서 실질 관문은 조달 절차가 아니라 **예산 라인 확보**이며, 그 창구가 **FY2028 편성(2026-11 착수)** 이다 |
| **병목 (추정)** | ①**예산 라인이 없으면 절차 이전에 막힌다** — FY2027 은 이미 확정됐고 상근 수의사 신설로 여력이 소진됐을 개연 ②Procurement 를 거치는 순간 Hollis 혼자 결정할 수 없다 ③**PetPoint 계약이 이미 있어 중복 지출로 보일 위험** ④운영직 2개가 공석이라 새 도구 도입에 쓸 인력 시간이 부족 (**전부 추론, 직접 확인 필요**) |
| **AROO 우회 경로 — 우리가 먼저 꺼내지 말 것** | AROO 는 민간 501(c)(3) 이라 카운티 조달 규정에 묶이지 않는다. 그러나 ①**990-N 규모**로 지속 구독을 감당할 지갑이 아니고 ②**대표가 이 부서를 자문하는 ACAB 의장**이며 ③단체 스스로 카운티와 무관함을 명시한다. **구조적으로 우리가 제안할 사안이 아니다**(**추론**) |

## 6. Hollis Lampe 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **현 직책** | **Animal Services Division Manager, Department of Emergency Services** — **쉘터 운영과 Animal Control 을 함께 총괄**한다. 카운티 회의록 표기는 `Animal Shelter Division Manager` | ACAB 회의록, The BayNet |
| **재직 기간** | **약 2년(2024-11 경 입사).** 2025-11-05 이사회에서 **"one-year anniversary with county government"** 가 공식 언급됐고, 위원회가 *"leaps and bounds"* 의 개선을 인정했다 | The BayNet, ACAB 회의록 |
| **직무 범위 (직무기술서 기준)** | 인테이크·입양·안락사 총괄, **쉘터 예산 편성해 ES 국장에 제출**, 요구서·구매 승인(국장 위임 범위 내), 규제 준수, 통계 보고서 작성, **CDS(마약류) DEA 등록 유지**, 주 농무부 면허 규정 준수, 자원봉사자·재소자 업무 배정, **연민 피로(compassion fatigue) 관리** | Animal Services Division Manager 직무기술서(판식 2024-07) |
| 채용 요건 | **정부 운영 동물보호소·켄넬 운영 관리 경력 4년 이상**(감독 경력 포함) + **동물 규제 법령 집행 경력 2년 이상** | 같은 직무기술서 |
| 이전 경력 | **미확인** — LinkedIn 프로필과 임명 보도자료를 찾지 못했다. 다만 직급 요건상 **다른 관공서 쉘터에서 관리자·집행 경력을 쌓고 온 경로**로 읽힌다(**추론**) | — |
| 호칭 | 카운티 회의록이 일관되게 **she/her** 로 지칭한다(*"thanked Hollis Lampe and her team"*, *"her leadership"*) | ACAB 회의록(2026-01·2026-03) |
| 직접 인용 | *"There are a bunch of characters over there who are dedicated to their jobs, and I'm really grateful to be a part of that team."*(2026-04, 위원회 표창식) / *"We're seeing many families who can no longer afford pet care."*(2025-11, 소유주 포기 급증에 대해) / *"It's been a tough couple of months, but I'm proud of the work our staff has done to minimize losses and keep illness contained."*(2025-11, 범백 발생에 대해) | The BayNet |
| **대외 노출 성향** | **자문위원회에 격월로 직접 보고하고 지역 언론에 실명으로 인용된다.** 다만 발언 내용이 **통계·팀·지역사회 감사**로 일관되며 개인 서사나 벤더·도구 언급이 없다 | 검색 전반 |
| **읽히는 성향 (추론)** | ①**숫자로 말하는 사람**이다 — 이사회 보고가 매번 인테이크·아웃컴·라이브릴리스율·체류일·팬트리 건수 구조다. 기능 나열보다 **"이 숫자를 어떻게 지키는가"** 가 맞는 프레임이다 ②**부임 2년 차에 성과가 뚜렷**하다 — 라이브릴리스율 66%→84%→91%, 체류일 23→14일. **개선을 만든 당사자이므로 "문제가 있으시죠" 접근은 역효과**다 ③**공석 2개를 안고 물량 급증을 처리 중**이다 — 새 업무를 얹는 제안은 거부감이 크고, **사람 손을 덜어주는 프레임**만 통한다 | 추론 |
| **화법 제안** | 본인이 **부서의 결재선 시작점**이지만 **계약서에 서명하지는 못한다.** 따라서 "결재권자를 소개해 달라"가 아니라 **"이걸 카운티에서 사려면 어느 경로가 제일 짧습니까"** 로 본인을 절차 안내자로 세우고, **FY28 예산 항목의 모양을 함께 그리는 대화**로 가는 것이 맞다 | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2026-09-02** | **ACAB 정기회의 개최 — 안건에 `FY28 Budget Discussion`, `Feline Leukemia Virus (FeLV)`, `Animal Control Ordinances`, 부위원장·서기 보궐선거.** **콜 7일 전이며 회의록은 아직 게시되지 않았다** | ACAB 2026-09-02 안건(2026-08-24 게시) |
| **2026-07** | **운영직 2개 상시 공고** — Animal Shelter Operations Supervisor(07-15 게시), Administrative Coordinator – Animal Services Division(07-01 게시). 둘 다 마감 "Continuous" | GovernmentJobs |
| **2026-05-19** | **FY2027 예산 확정.** 총 **$372M**(+6.8%). **쉘터 상근 수의사 정규직 신설 승인** — 공청회 주민 의견이 직접 반영된 결과다. 현재는 중성화를 위해 Waldorf 로 개체를 보내고 있다 | somdnews, 카운티 예산 페이지 |
| **2026-05** | 지역 언론이 **포스터 가정에 있는 개 3마리**(Mamacita·Scooby·Skye)를 소개. 쉘터 표현 — *"Living in home environments has helped the shelter learn even more about their personalities and needs."* **사진 출처가 "Friends of St. Mary's County Animal Shelter" Facebook 게시물**이다 | The BayNet(2026-05) |
| **2026-04-14** | 카운티 위원회가 **4/12~18 National Animal Care and Control Week 선포**. Hollis Lampe·Heather Calligandes 가 직접 발언 | The BayNet, 카운티 위원회 회의 |
| **2026-03-09** | **드라이브업 저비용 백신 클리닉**(카운티 페어그라운드, 18:00–20:00) — 광견병·디스템퍼 접종 + 마이크로칩, **예약 불필요** | ACAB 회의록(2026-03-04) |
| **2026-03-04** | **ACAB 회의 — Hollis Lampe 가 「곧 시행할 새 포스터 프로그램」을 소개하고 상세는 쉘터 Facebook 을 보라고 안내.** 같은 회의에서 신임 Animal Control Supervisor + 추가 2명 채용으로 인력난이 해소될 전망이라고 보고. Steve Tuttle 5년 반 임기 종료 | ACAB 회의록, The BayNet |
| **2026-01-07** | ACAB 임원 개선 — **Doug Isleib 위원장 선출**(Steve Tuttle 부위원장으로 이동). **Jennifer Utz 가 FY27 예산 상황 직접 브리핑.** 2025 연차보고서 승인. **Tina James(Animal Operation Supervisor)가 2025년 통계·자원봉사 시간을 보고** | ACAB 회의록 |
| **2025-11-05** | ACAB 회의 — **9~10월 인테이크 +88.65%**, 소유주 포기 2배 이상, **범백 발생 중에도 라이브릴리스율 84%**. **시간제 수의사 Dr. Sara Mikeska 합류**(주 약 20시간). **Hollis Lampe 1주년**. Diane Harris(Feral Cat Rescue) 표창 — 올해 **길고양이 934마리** 처치, 2022년 제휴 이후 약 210마리를 안락사 대신 방사 | The BayNet, ACAB 회의록 |
| **2025-09** | **AROO(EIN 33-4982804) IRS 501(c)(3) 승인.** 설립은 2025년 초, **대표는 현 ACAB 위원장 Doug Isleib** | ProPublica API, aroostmarys.org |
| **2024-11 경** | **Hollis Lampe 부임** | ACAB 회의록·언론 역산 |
| **2024-05** | **호흡기 질환 발생으로 쉘터 일시 폐쇄 후 재개관** | 지역 언론(검색 스니펫) |
| **2022-09-12** | **신축 시설 개관**(약 12,800 sqft, K-9 유닛·마축 구역 포함). 사업비는 보도별로 **$6.8M / $7.8M 로 엇갈린다** | 지역 언론(검색 스니펫), 설계사 페이지 |
| **미확인** | Facebook(@smcanimalservices) 게시물, 이사회 문서 포털의 **Shelter Update Memo 첨부**, Petfinder 등재 현황, 지역 여론. **"문제 없음"으로 단정하지 말 것** | — |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

각 줄은 **정황에서 끌어낸 추정**이며, 확인 필요 여부를 함께 적는다.

- **★ 카운티 직무기술서가 「포스터 대장」을 명시적으로 사람 업무로 규정한다.** Volunteer Coordinator 필수 업무 18번 — *"Maintains log of foster animals to ensure vaccine schedule and veterinary treatment is being followed."* **백신 스케줄과 수의 처치 이행 여부를 한 사람이 대장으로 좇는다**는 뜻이다. 16번(*"Prepares various reports on volunteers, partner rescue groups and the foster network"*)과 17번(*"Prepares release documentation of animals leaving rescue or foster care"*)이 함께 붙어 있다 — **직접 확인 필요(이 log 가 지금 무엇인가 — 스프레드시트인가, 종이인가, PetPoint 안의 뷰인가). 소재 B 와 우리 가설의 정중앙이다**
- **★ 같은 직무기술서의 요구 지식에서 동물 관리 SW 가 빠져 있다.** Volunteer Coordinator 는 *"volunteer management, scheduling software and Microsoft Office Suite"*, Adoption Coordinator 는 *"animal management software and Microsoft Office"* 다. **포스터·자원봉사를 담당하는 자리만 정본 도구를 요구하지 않는다** — **직접 확인 필요(포스터 담당자가 PetPoint 계정을 갖고 있는가, 갖고 있다면 무엇을 입력하는가)**
- **★ 주정부 분기 보고가 포스터 개체를 「재고」로 묶는다.** MDA 규정 — 포스터 가정에 나간 동물은 **최종 처분이 날 때까지 재고에 남고 아웃컴으로 보고하지 않는다**. 그리고 **직전 분기 기말 두수와 다음 분기 기초 두수가 오차 없이 일치**해야 한다. **즉 시설 밖에 있는 개체가 분기마다 한 마리 단위로 맞아떨어져야 한다** — **직접 확인 필요(분기 마감 때 시설 밖 개체 수를 무엇으로 세는가, 그 작업에 며칠이 걸리는가). 다음 마감은 2026-10-15**
- **★ 포스터 프로그램에 웹 진입점이 없다.** 사이트맵 전수 확인 결과 쉘터 하위 페이지는 4개뿐이고 포스터 페이지가 없다. 회의록은 안내를 **Facebook 으로 돌린다.** **접수·문의·업데이트가 전부 SNS 메시지와 전화로 들어올 개연이 높다** — **직접 확인 필요(포스터 지원을 어디로 받는가, 승인 뒤 첫 배치까지 무엇을 거치는가)**
- **자원봉사 접수가 PDF 5종으로 돌아간다.** 온라인 폼도 로그인 포털도 사이트에 없다. **같은 사람이 자원봉사와 포스터를 함께 맡는 직무 구조**이므로, 종이 접수의 부담이 포스터 쪽에도 그대로 걸릴 개연 — **직접 확인 필요(자원봉사 명부와 포스터 명부가 같은 곳에 있는가)**
- **Foster Coordinator 직급이 카운티 직급 체계에 없다.** 동물 관련 직급 8종 어디에도 없고, 포스터 업무는 Volunteer Coordinator 안에 얹혀 있다. **새 프로그램이 전담 인력 없이 시작됐다는 뜻** — **직접 확인 필요(지금 포스터를 실제로 누가 굴리는가, 몇 명인가)**
- **운영직 2개가 상시 공석이다.** Operations Supervisor(Division Manager 직속)와 Administrative Coordinator 가 각각 7월 중순·7월 초부터 "Continuous" 로 열려 있다. **인력이 채워지기 전까지 관리 업무가 위로 몰린다** — **직접 확인 필요. 콜에서 "일이 늘어난다"로 들리는 제안은 피할 것**
- **질병 관리가 반복 의제다.** 2024-05 호흡기 폐쇄, 2025 가을 범백, 2026-09 이사회 FeLV 안건. **격리·경과 관찰이 시설과 가정 양쪽에서 동시에 돌아간다** — **직접 확인 필요(포스터 가정에 있는 개체의 격리 상태·투약 이행을 무엇으로 확인하는가)**
- **소동물·가축이 통계에서 갈라진다.** 이사회 보고는 2개월에 **소동물/가축 63두**를 세는데, 주정부 보고는 **개·고양이만** 받는다. 게다가 시설에 **마축 구역**이 별도로 있다. **종별로 세는 곳이 다르다** — **직접 확인 필요(두 숫자를 각각 어디서 뽑는가)**
- **TNR·바안캣이 1년 만에 큰 라인이 됐다.** 기타 생존 아웃컴이 2024년 0 → 2025년 369건이고, Feral Cat Rescue Inc. 가 별도 법인으로 파트너십을 맺고 있으며 바안캣 입양은 지역 레스큐가 지원한다. **개체가 제3자 손에 넘어가는 경로가 최소 3종**(포스터 가정 · TNR 방사 · 파트너 이관, 2025년 이관 295건) — **직접 확인 필요(각 경로의 상태값이 정본에서 구분되는가)**
- **입양비가 공개돼 있지 않고 압류 수수료만 게시돼 있다.** 요금 문의를 **전화로 하라**고 안내한다 — **사소한 건이나, 대외 정보 갱신이 수동이라는 방증**
- **주 법령상 연간 인테이크·처분 요약을 웹사이트 또는 시설 내 잘 보이는 곳에 게시해야 한다**(2017년 HB626). **카운티 웹사이트에서는 찾지 못했다.** 시설 내 게시로 요건을 충족하고 있을 수 있으므로 **미준수로 단정하지 말 것** — **직접 확인 필요**

## 미확인 요약 (콜에서 확인할 것)

1. **"More than 30"이 무엇을 센 숫자인가** — **가정 수인가 마리 수인가**, 지금 동물을 데리고 있는 집인가 명부 전체인가, 개·고양이 외 소동물·가축 위탁이 들어 있는가. 공개 자료에 포스터 수치가 **단 하나도 없어** 대조할 기준선이 아예 없다
2. **새 포스터 프로그램이 지금 어디까지 왔는가** — 2026-03 이사회에서 "곧 시행"으로 소개된 프로그램이다. **언제 시작했고, 지원자를 어디로 받으며, 승인·교육·배치가 몇 단계인가.** Facebook 이 유일한 안내 창구인지도 함께
3. **PetPoint 의 실제 사용 범위와 포스터 모듈 상태** — ①**포스터 모듈이 켜져 있는가**, 켜져 있다면 실제로 쓰는가 ②**포스터가 직접 로그인해 상태를 남기는 화면이 있는가** ③없다면 지금 업데이트가 어떤 경로로 들어오는가(문자·전화·Facebook 메시지·이메일). **접수 창구가 있는 것과 포스터가 기록을 남기는 것은 전혀 다른 문제다**
4. **직무기술서의 "log of foster animals" 가 실물로 무엇인가** — 백신 스케줄과 수의 처치 이행을 좇는 대장이다. **스프레드시트인가 종이인가 PetPoint 안인가, 누가 관리하고 며칠에 한 번 갱신하는가**
5. **분기 보고를 어떻게 맞추는가** — 포스터 개체가 재고에 남고 분기 기초·기말이 오차 없이 이어져야 한다. **시설 밖 개체 수를 무엇으로 세고, 그 작업에 얼마가 걸리는가.** 다음 마감(2026-10-15)이 5주 뒤다
6. **2026-09-02 이사회에서 FY28 예산 논의가 어떻게 정리됐는가** — 안건에 올라 있었으나 회의록이 아직 게시되지 않았다. **FY28 요구서를 언제까지 만들어 Jennifer Utz 에게 올려야 하는지**가 이 콜의 실무 산출물이 될 수 있다
7. **조달 경로 확인 (우리가 매뉴얼만 읽고 추정한 부분)** — ①**$30,000 미만 면제 구매**를 실제로 부서 단위에서 어떻게 처리하는가 ②**Director of Emergency Services 가 위임한 요구서 승인 한도가 얼마인가** ③메릴랜드주 DGS 계약이나 타 카운티 계약 승계가 절차를 단축시키는가
8. **PetPoint 계약 조건** — 에디션·연 비용·갱신 시점. **새 도구가 중복 지출로 보일 위험이 가장 큰 반론이므로, 무엇이 이미 포함돼 있는지를 먼저 알아야 한다.** 우리가 먼저 금액을 꺼내지 말 것
9. **운영직 2개 공석이 지금 업무에 어떻게 걸리는가** — Operations Supervisor 와 Administrative Coordinator 가 각각 7월부터 상시 모집이다. **충원 전망과, 그 사이 관리 업무가 어디로 몰리는지**
10. **자원봉사·포스터 명부가 한 곳인가 두 곳인가** — 자원봉사 접수는 PDF 5종이고 담당 직무가 둘을 겸한다. **두 명부의 관계와, 자원봉사 시간 집계를 무엇으로 하는지**(2026-01 이사회에 연간 자원봉사 시간이 보고된 기록이 있다)
11. **소동물·가축을 포함한 종별 집계를 어디서 뽑는가** — 이사회 보고는 소동물/가축을 세고 주정부 보고는 개·고양이만 받는다. **두 숫자의 출처가 같은가**
12. **상근 수의사 정규직 신설이 업무 흐름을 어떻게 바꾸는가** — FY2027 에 승인됐고, 지금까지 중성화를 위해 Waldorf 로 개체를 보내던 것이 자체 처리로 바뀐다. **수술 예약·의무기록이 어디에 쌓이는지**, 그리고 이 변화가 **도구 논의의 우선순위를 밀어내는지 앞당기는지**
