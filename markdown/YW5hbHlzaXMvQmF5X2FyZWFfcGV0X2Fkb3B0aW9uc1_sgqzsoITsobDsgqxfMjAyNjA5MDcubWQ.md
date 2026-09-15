# Bay area pet adoptions 사전조사

- 작성일: 2026-09-07 / 목적: Kimberly carlisle 콜 준비(미팅 미정) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Rescue", "role": "Veterinary or medical staff", "system": "Petstablished", "adoptions": "150–300"}` / 유입 소재 **A(입양 준비 상태 추적 — 폼에서 연간 입양 건수를 물었다)** / `intent: book`, `fosters` 공란
- **조직은 확정, 신청자 개인은 미확인** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: 조직 사이트는 **16개 페이지의 HTML 원문을 내려받아 문자열 검색**했다. 그 경우 출처에 `사이트 HTML`로 표기
- 출처 주석 ②: **자동 요약기가 원문에 없는 문장을 인용부호로 반환하는 사고가 과거에 확인됐다.** 이 문서에 큰따옴표로 인용한 영문은 **전부 내려받은 원문(HTML·PDF)에서 문자열 일치로 재검증**한 것만 실었다
- 출처 주석 ③: 운영·의료 실적 수치는 **조직이 직접 발행한 뉴스레터 PDF 3종**(December 2023 / Summer 2024 / Winter 2025)에서 뽑았다. 다운로드 후 `file` 로 PDF 임을 확인했고 페이지 이미지를 직접 판독했다. **조직이 연간 통계표를 게시하지는 않는다**
- 출처 주석 ④: **990 원문 PDF 는 확보하지 않았다.** 재무 수치는 **ProPublica API(IRS 추출 데이터)** 값이며, 최신 FY2025 는 ProPublica 웹페이지(리더 프록시 경유)에서 읽었다. **FY2024 는 추출 데이터에 존재하지 않는다**(FY2023 다음이 FY2025다) — 그 공백은 2절에 명시했다
- 출처 주석 ⑤: **Indeed·Glassdoor·Petfinder·Best Friends 는 자동 열람이 차단됐다.** 채용 공고 1건은 취합 사이트가 `410 Gone` 을 반환해 **원문을 확보하지 못했고**, 검색 결과 요약만 있다. 해당 줄은 전부 `검색 요약(원문 미확보)`로 표기하고 **정황**으로만 취급했다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Society For The Prevention Of Cruelty To Animals Of Galveston Co, EIN 23-7011759, San Leon, TX**(Galveston County). 501(c)(3), **면세승인 1969-04**, NTEE **D200**, **12월 결산**, 정식 990 신고(2001년분부터 열람 가능) | ProPublica API |
| **조직 자기표기 EIN — 결정적 근거** | About 페이지 원문에 **EIN 이 그대로 박혀 있다**: *"Founded in 1967 as the Society for the Prevention of Cruelty to Animals of Galveston County, we DBA as Bay Area Pet Adoptions and Bay Area SPCA. Our non-profit tax ID is 23-7011759."* IRS 등록번호와 일치하고, **통칭 두 개(Bay Area Pet Adoptions / Bay Area SPCA)가 모두 이 법인의 DBA 임을 조직이 직접 선언**한다 | 사이트 HTML |
| **이메일 도메인** | 리드 도메인은 `bayareapetadoptions.orgk` 로 **오타가 있으나**, `.orgk` 를 `.org` 로 읽으면 **bayareapetadoptions.org 가 조직 공식 도메인**이다. 대표 주소 `I***@BayAreaPetAdoptions.org` 가 전 페이지 푸터에 게시돼 있다 | leads.json, 사이트 HTML |
| **동명 조직** | **「Bay Area」가 통상 SF Bay Area 를 뜻하므로 오염 위험이 컸다.** 실제 검색에서도 Bay Area Animal Rescue Crew(Concord, CA) 등 캘리포니아 단체가 먼저 잡힌다. 그러나 **도메인이 정확히 일치하는 단체는 텍사스 San Leon 한 곳뿐**이고, ProPublica 에서 `Bay Area Pet Adoptions` 로는 **0건**, IRS 등록명으로 검색하면 **전국에 정확히 1건**이다. 교차 오염 여지 없음 | ProPublica API, 검색 |
| **성격 대조** | 폼 `org_type: Rescue` → **시설 보유 노킬 셸터이자 레스큐다.** FAQ 원문이 그 이중성을 직접 답한다: *"We are fortunate to be both. We rescue animals that are either unwanted by their owners or aren't claimed from surrounding county shelters."* **레스큐라는 자기표기가 틀린 것은 아니지만, 실체는 1967년 설립·켄넬 두 동을 보유한 셸터다** | 사이트 HTML |
| **도구 대조** | 폼 `system: Petstablished` → **실사용 확정.** 입양 신청서가 `petstablished.com/adoption_form/25348/generic`, 자원봉사 신청서가 `petstablished.com/petlover/general_form/41949` 다 | 사이트 HTML |
| **신청자 — 확인 실패** | **Kimberly carlisle 은 공개 자료 어디에도 잡히지 않는다.** ①990 상 이사·임원 명단(FY2025 7인)에 없다 ②사이트에 직원 소개 페이지 자체가 없다 ③검색·LinkedIn 에 조직과 결부된 결과가 없다. **조직 특정과는 무관한 별개 문제이며, 콜 첫머리에 본인 입으로 확인해야 한다** | ProPublica, 사이트 HTML, 검색 |

→ **조직은 확정, 신청자는 미확인.** EIN 이 조직 사이트에 직접 게시돼 있고 도메인·소재지·NTEE 가 한 법인으로 맞물린다. **다만 「누가 전화를 받는지」는 콜에서 처음 알게 된다 — 첫 3분을 여기에 쓴다.**

## 미팅에서 바로 쓸 핵심 5줄

1. **이 조직은 임시보호 프로그램에 「접수 창구」가 없다. 입양 신청도 자원봉사 신청도 Petstablished 폼인데, 포스터만 「전화하세요」다** — 포스터 페이지에 있는 지시는 두 문장뿐이다. 원문: ***"Although most of our animals live at the shelter until they find their FUR-ever homes, once in awhile we are in need of foster families for our young kittens, puppies and those recovering from medical treatments."*** / ***"If you are interested in becoming a foster parent. Please contact us."*** 링크도 폼도 없고 뒤에 이메일·전화번호만 있다. 같은 사이트의 입양 신청은 `petstablished.com/adoption_form/25348`, 자원봉사 신청은 `petstablished.com/petlover/general_form/41949` 로 **둘 다 Petstablished 폼**이다. **즉 이 조직은 폼을 만들 줄 알고 이미 쓰고 있는데, 포스터만 시스템 밖에 있다.** 콜의 첫 질문은 **「지금 임시보호 문의가 오면 어디에 적히나요」** 다. 우리가 「없으시네요」라고 먼저 말하지 않는다.

2. **이 조직의 진짜 문제는 회전이 아니라 체류다. 자기 뉴스레터에 「1,054일」이라고 적어 놓았다** — Summer 2024 뉴스레터 원문: ***"Zoola holds the record among these six dogs, having spent a staggering 1,054 days in the shelter."*** 같은 기사에 **Ash 768일 · Thomas 742일 · Milk Dud 618일 · Argos 581일 · Dani 421일**이 이어지고, Winter 2025 에는 고양이 Yoshi 가 ***"a shelter long timer, residing there for 35 months"*** 로 나온다. 노킬이고 공간 때문에 안락사하지 않는다(*"Our shelter does not euthanize for space."*). **「입양 준비 상태 추적」이라는 우리 소재 A 를 이 조직 언어로 번역하면 「준비는 진작 됐는데 안 나가는 아이를 어떻게 계속 보이게 두느냐」다.** 콜에서 「입양 회전율을 올려드립니다」로 들어가면 안 된다.

3. **의료가 이 조직의 병목이고, 신청자는 그 의료 쪽 사람이다. 자체 수술실을 돌린다** — December 2023 뉴스레터 원문: ***"In 2021 and 2022 we received several grants to refurbish our Med Room and acquire equipment needed to perform surgeries - specifically, spay/neuters. In 2023 we reaped the full benefits of this project. Year to date we have performed 332 spay/neuters of which 135 were shelter pets and 197 were community pets or other rescue pets. We also treated 42 heartworm positive dogs of which 16 were shelter pets."*** 여기에 **10건의 치과, 3건의 위고정술, 안구 적출, 종괴 제거**가 더 붙는다. Winter 2025 에는 ***"BAPA has had multiple cases diagnosed."***(Heterobilharzia americana 기생충)와 파보 치료 사례가 나온다. **폼의 `role: Veterinary or medical staff` 는 이 조직에서 가장 무거운 라인이다.** 입양 게이트가 전부 의료 통과 여부이고, **그 상태를 지금 누가 어디에 적는지가 이 콜의 핵심 질문**이다.

4. **접수와 배정이 다른 도구이고 그 사이를 사람이 잇는다. 그 「사람」을 자원봉사자로 모집하고 있다** — 자원봉사 신청은 Petstablished 폼으로 받고, 시프트 배정은 **Volgistics**(계정 `volgistics.com/vicnet/489401`)로 넘어간다. 사이에 **월 1회 대면 오리엔테이션**이 끼어 있다(*"Schedule and attend a monthly General Volunteer Orientation."*). 그리고 사무 자원봉사 모집 문구가 이것이다 — ***"Volunteer indoors assisting with data entry, document scanning shredding etc… Basic office skills are needed for this volunteer opportunity. This opportunity is as needed."*** **데이터 입력을 자원봉사에 맡기고 있다고 조직이 직접 적어 두었다.** 이보다 명확한 수기 업무 자백은 드물다. **다만 이 문장을 인용해서 들이대지 말 것 — 「사무실 쪽 일은 누가 하시나요」로 우회한다.**

5. **돈이 지금 켄넬에 가 있다. 그리고 상근 최고 책임자가 없다** — Safe Place for Paws 자본 캠페인 원문: ***"Our kennels – now more than thirty years old – are structurally failing."*** / ***"Our Safe Place for Paws goal is to raise $300,000 to renovate and replace kennels in both the large and small dog kennel buildings. A generous gift of $150,000 has already been donated."*** 재무는 **FY2025 수입 $459,580 / 지출 약 $504,000 으로 약 $44,000 적자**, 유급 급여 총액은 FY2023 기준 **$197,419** 이고 **990 상 임원 보수는 전 연도 $0**, 이사 7인 전원 무보수다. **결재 라인이 무보수 이사회이고, 예산의 우선순위가 이미 정해져 있다.** → **가격을 먼저 꺼내지 않는다.** 꺼낼 자리가 오면 프레임은 「돈」이 아니라 **「의료 스태프와 자원봉사자의 시간」** 이다.

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Society For The Prevention Of Cruelty To Animals Of Galveston Co**(IRS 등록명). ProPublica 정렬명은 **Bay Area Spca**. 통용 표기 **Bay Area Pet Adoptions**, 자기 약칭 **BAPA** | ProPublica API, 뉴스레터 |
| **DBA 관계** | 조직 자기 선언 원문: *"Founded in 1967 as the Society for the Prevention of Cruelty to Animals of Galveston County, we DBA as Bay Area Pet Adoptions and Bay Area SPCA."* **한 법인이 통칭 두 개를 병행한다** | 사이트 HTML |
| EIN·지위 | **23-7011759** / 501(c)(3), **면세승인 1969-04**, **12월 결산** | ProPublica API, 사이트 HTML |
| NTEE | **D200**(Animal Protection and Welfare) | ProPublica API |
| 소재지 | **San Leon, TX**(Galveston County). 자기 표기: *"We are located in the Galveston Bay Area, southeast of Houston near NASA."* | ProPublica API, Adopt-a-Pet |
| **성격** | **시설 보유 노킬 셸터 겸 레스큐.** 자기 표기: *"Bay Area Pet Adoptions is a non-profit, 501(c)3 No-Kill shelter, pet rescue, and adoption organization"* / *"Oldest No-Kill Shelter in Galveston County"* / *"We are the only no-kill shelter in Galveston County."* | 사이트 HTML, Adopt-a-Pet |
| **안락사 정책** | 원문: *"Our shelter does not euthanize for space."* | Adopt-a-Pet |
| 설립 | **1967년** | 사이트 HTML |
| **서비스 권역** | **Galveston County 및 인근 Houston Bay Area.** 자기 표기상 *"rescue animals that are either unwanted by their owners or aren't claimed from surrounding county shelters."* — **시·카운티 계약 보호소가 아니라 인근 카운티 셸터에서 인수하는 구조**다 | 사이트 HTML |
| **자금 성격** | **공공 계약 수입이 없다.** 자기 표기 원문: *"100% Dependent on Public Donations"* / *"We are not operated or funded by any national animal group and must rely on contributions from people like you to keep our shelter open."* **WAGS 같은 시 계약형 조직과 자금 구조가 정반대다** | 사이트 HTML, Adopt-a-Pet |
| **인력 구성 — 핵심** | 원문: ***"The primary care-givers of the animals in our adoption program and daily administrators of our organization and shelter are staff members. Our organization is governed by an all-volunteer Board of Directors. Volunteers in our canine and feline crews perform all other duties and functions that are necessary to sustain our organization."*** → **유급 스태프가 일상 운영을, 무보수 이사회가 거버넌스를, 자원봉사 「crew」가 나머지를 맡는 3층 구조** | 사이트 HTML |
| **상근 최고 책임자** | **없는 것으로 보인다.** 990 상 **임원 보수가 확인 가능한 전 연도 $0**(FY2016~FY2023, FY2025)이고, 사이트에 ED·CEO 소개 페이지가 없다. **가장 상위 유급 직책으로 확인되는 것은 「Manager of Operations & Development」** 인데 이는 채용 공고 검색 요약에서만 확인됐다(**원문 미확보**) | ProPublica, 검색 요약(원문 미확보) |
| **이사회 (FY2025 990 기재)** | **7인, 전원 보수 $0** — **Roland Garcia**(President) · **Mary Kaye Murski**(Vice President) · **Annie Lamont**(Treasurer) · **Jeff Tave**(Secretary) · **Ann Traynor-Plowman**(Grants) · **Alysa Chiles**(Member) · **Tammy Petruna**(Member) | ProPublica(FY2025 990 추출) |
| **이사회가 최근 크게 바뀌었다** | FY2021~FY2023 990 에 오른 이름은 **Annie Lamont(President/Treasurer) · Ann Traynor-Plowman(VP) · Carole Bertsche(Secretary) · Janet Hawes** 4인뿐이다. **FY2025 명단 7인 중 2명만 남았고 President 가 Annie Lamont → Roland Garcia 로 바뀌었다.** 신규 4인은 이 사이에 합류했다 | ProPublica |
| 실무자 겸 이사 | **Jeff Tave**(Secretary)가 **사이트 뉴스 게시글의 작성자**로 표기된다. 이사이면서 대외 커뮤니케이션을 직접 쓰는 사람이다 | 사이트 HTML |
| **직군 호칭** | 확인되는 것 — **Kennel Technician** · **Cattery Technician** · **Manager of Operations & Development** · **Veterinary Services Manager**. 뒤 두 개는 **채용 공고 검색 요약에만 있고 원문을 확보하지 못했다** | 검색 요약(원문 미확보) |
| 자원봉사 역할(자기 게시) | **Cat Cuddler** / **Cattery Cleaning & Feeding**(개장 전 오전) / **Canine Crew**(*"exercise, socialize and keep the dogs behaviorally healthy"*) / **Office Help**(*"data entry, document scanning shredding etc"*) / 시설 유지·모금·사진·마케팅·정원·펫푸드 팬트리 | 사이트 HTML |
| 자원봉사 최소 연령 | 원문: *"You must be 16 years of age to volunteer."* 16~17세는 보호자 동반 필수 | 사이트 HTML |
| 개방 시간 | **월·화·목·금·토·일 11:00–17:00 / 수요일 휴관** | 사이트 HTML |
| 시설 | **대형견·소형견 켄넬 2개 동 + 캐터리 + Med Room(자체 수술실) + Catio + 스크린 파티오**. Catio·파티오·벤치는 **이글스카우트·걸스카우트 프로젝트로 지어졌다**(December 2023 뉴스레터) | 뉴스레터 PDF |
| 웹 자산 | 자체 사이트(**WordPress + Divi 테마 + Yoast SEO + Gravity Forms 3.1.1 + The Events Calendar**) + Facebook(`/BayAreaPetAdoptions`, **팔로워 약 11,000명**) + Bonfire 굿즈 스토어 | 사이트 HTML, Facebook |
| 사이트 유지 주체 | 푸터에 **A Visual Business** · **Tipton Creative** · **Sign Shop LC** 링크. 외주 제작으로 보인다(**추론**) | 사이트 HTML, 추론 |
| **인증·네트워크** | **Best Friends Animal Society 네트워크 파트너** / **Petfinder 회원 TX128** / **Adopt-a-Pet 조직 86661** / **Petco Love Lost** / **PetSmart Charities** / **American Humane** / **Houston PetSet** / **ASPCA The Rescue Effect**(2026) | 사이트 HTML, 검색 |
| 소셜 규모 | **Facebook 팔로워 약 11,000명 / 팔로잉 214.** Instagram·X 계정은 사이트에서 확인되지 않는다 | Facebook(리더 프록시) |
| 대외 평판 | **미확인.** Yelp(리뷰 25건 표기, `Updated May 2026`)·Google 리뷰 모두 자동 열람 차단. **소송·행정처분은 검색되지 않았다** | 검색 |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **12월 결산.** 콜 시점 2026-09 은 **FY2026 3분기**이고 **FY2027 편성이 10~12월에 도는 자리**다(**추론**) | ProPublica, 추론 |
| 신고 양식 | **정식 990.** 2001년분부터 열람 가능. **FY2025 분이 2026-05-12 에 접수됐다** — 최신 데이터가 이미 공개돼 있다 | ProPublica |
| **FY2025** (2025-12) | **수입 약 $460,000 / 지출 약 $504,000 → 약 −$44,000 적자** / **총자산 약 $1.1M**. IRS BMF 요약치는 **수입 $459,580 / 자산 $1,095,721** | ProPublica |
| **FY2024** (2024-12) | **데이터 없음.** ProPublica 추출에 **FY2023 다음이 곧바로 FY2025** 다. 신고 누락인지 추출 지연인지 공개 자료로는 판별 불가 — **미확인** | ProPublica |
| **FY2023** (2023-12) | 수입 **$365,178** / 지출 **$428,679** / **적자 −$63,501** / 총자산·순자산 **$604,203**(부채 $0) / 급여 **$197,419**(지출의 46.1%) / **임원보수 $0** / 프로그램 수입 $64,865 / 기여·보조금 $299,245 | ProPublica API |
| FY2022 (2022-12) | 수입 $399,148 / 지출 $400,942 / **−$1,794** / 순자산 $667,702 / 급여 $194,849 / 프로그램 수입 $45,052 | ProPublica API |
| FY2021 (2021-12) | 수입 **$606,299** / 지출 $424,347 / **+$181,952** / 순자산 $669,496 / 급여 $210,517 | ProPublica API |
| FY2020 (2020-12) | 수입 $313,831 / 지출 $409,252 / **−$95,421** / 순자산 $487,546 / 급여 **$216,816** | ProPublica API |
| FY2019 (2019-12) | 수입 $332,007 / 지출 $363,152 / −$31,145 / 순자산 $582,963 / 급여 $201,406 | ProPublica API |
| **재무 궤적 요약** | **10년째 연 수입 $30만~$60만 대의 소형 조직이다.** FY2019·FY2020·FY2023·FY2025 가 적자, FY2021 만 크게 흑자(코로나기 기부 급증으로 보임, **추론**). **성장 곡선이 없다 — 규모가 평평하다** | ProPublica, 추론 |
| **자산이 최근 급증했다** | 총자산 **$604,203(FY2023) → 약 $1.1M(FY2025)**, **+81%**. 같은 기간 손익은 적자다. **자본 캠페인 지정기부가 자산으로 쌓인 것으로 보인다**(**추론** — 990 원문 미확보로 순자산 제한 구분은 확인 못 함) | ProPublica, 추론 |
| **유보 수준** | **FY2025 자산 약 $1.1M 은 연 지출($504k)의 약 26개월분.** 다만 **상당액이 Safe Place for Paws 켄넬 공사에 묶인 지정기금일 개연이 크다**(**추론**). **「현금이 많은 조직」으로 읽고 접근하면 안 된다** | 계산값, 추론 |
| **부채** | **FY2019·FY2021·FY2022·FY2023 전부 $0.** FY2020 만 $41,900. **차입이 없는 조직이다** | ProPublica API |
| **수입 구조** | FY2023 기준 **기여·보조금 $299,245(81.9%) + 프로그램 수입 $64,865(17.8%) + 투자수익 $1,068**. **공개 모금 비용(`grsincfndrsng`·`lessdirfndrsng`)이 전 연도 $0 으로 신고돼 있다** — 행사 수익을 별도 항목으로 잡지 않는다는 뜻이다 | ProPublica API |
| **입양비** | **개 — 1세 미만 $200 / 1~8세 $150 / 9세 이상 $100 / 순종 $250. 고양이 — 4세 이하 $100 / 5세 이상 $50** | 사이트 HTML |
| 입양비 포함 항목 | 원문: *"Health Evaluation, Spay/Neuter, Vaccinations including rabies, De-worming, FeLV/FIV testing for cats, Heartworm testing for canines 6 months and older, Micro-chipping with lifetime registration, Flea prevention for cats and dogs, Heartworm prevention for dogs"* | 사이트 HTML |
| **파양비** | **최소 $125**(relinquishment fee). 원문: *"There is a minimum relinquishment fee of $125.00 due at the time of intake."* | 사이트 HTML |
| **지역 유료 서비스** | 저가 예방접종(개 Da2ppv·Bordetella·Lepto / 고양이 Fvrcp·Felv), 심장사상충 검사, FeLV/FIV 검사, 마이크로칩, 벼룩 예방, 발톱 손질, **화장(유골 반환 시 각인 3줄 목함)**. **예약 방법이 사이트에 없다 — 전화·이메일뿐** | 사이트 HTML |
| **새끼고양이 1마리 원가 (자기 공개)** | **$270** — 원문: *"The cost to provide 3 rounds of vaccines, to spay/neuter, and to microchip a kitten is $270."* Kitten Sponsorship 프로그램으로 매칭 기부를 받는다 | 뉴스레터 PDF(Summer 2024) |
| 모금·결제 스택 | **PayPal**(`hosted_button_id=CWTMZNC34U456`) / **Paw Partner**(월정기 후원 프로그램 — 조직 자체 명칭이며 동명의 SaaS 와 무관) / **Bonfire** 굿즈 / **종이 기부 양식**(뉴스레터 마지막 장) / **Google Forms**(`forms.gle/gTgQufzmwPBhNLL8` — Kitten Sponsorship) / Amazon·Chewy 위시리스트 | 사이트 HTML, 뉴스레터 PDF |
| **도너 CRM** | **미확인.** Bloomerang·Donorbox·Classy·DonorPerfect·Neon·Blackbaud·Zeffy·Givebutter 전부 **0건**. **뉴스레터에 종이 기부 양식이 붙어 있고 온라인은 PayPal 버튼 하나뿐이다** — 전용 도너 CRM 이 없을 개연이 크다(**추론**) | 사이트 HTML 검색, 추론 |
| **주요 지원처(자기 게시)** | **PetSet(Houston PetSet — 2025 중성화 프로그램 그랜트)** · **PetcoLove** · **ASPCA(The Rescue Effect, 2026)** · Nearly New Thrift Shop · Boondoggles · Jackie's Bar and Grille · Chelsea Wine Bar · Barrios Technology · **Bay Area Veterinary House Call** · US Coast Guard Sector Houston-Galveston MST's | 뉴스레터 PDF(Winter 2025) |
| **IT 지출** | **미확인.** 990 원문 미확보. 확인되는 유료 도구 후보는 **Petstablished · Volgistics · Gravity Forms · WordPress/Divi** 이며 금액 공개분은 없다 | — |
| **가격 감각 환산** | 성견(1~8세) 입양비 $150, 성묘(5세 이상) $50 기준. **연 $600 짜리 도구 = 성견 4마리 또는 성묘 12마리 입양비**이고, **연 지출 $504k 의 0.12%** 다. 다만 이 조직은 **켄넬 공사에 $15만을 더 모아야 하는 상태**다 — 금액이 작아도 「지금은 아니다」가 자연스러운 국면이다(**추론**) | 계산값, 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **현재 공개 입양 두수** | **74마리** | **2026-09-07 Adopt-a-Pet 조직 페이지(ID 86661) 실측 — 표기 `1 - 9 of 74 pets available`.** 조직 사이트의 「Available Animals」 페이지도 **같은 Adopt-a-Pet 위젯**(`searchtools.adoptapet.com/.../portable_pet_list?shelter_id=86661`)을 임베드한다 |
| **주의 — 종별 분해 못 함** | Adopt-a-Pet 위젯이 페이지당 9마리만 반환하고 자동 페이지네이션이 막혀 **개·고양이 비율은 확인하지 못했다** | 첫 9마리는 개 4 · 고양이 5 였다(표본 과소, 근거로 쓰지 말 것) |
| **연간 입양 건수** | **조직이 게시하지 않는다 — 미확인.** 폼 자기보고는 `150–300` | leads.json |
| **폼 자기보고 대조 — 삼각 검증** | **폼의 `150–300` 은 부풀림으로 보이지 않고, 오히려 구간 하단(150 안팎)이 실제에 가까울 개연이 크다.** 근거 ①2023년 자기 발표 **원내 중성화 332건 중 셸터 동물은 135건**이고, 이 조직은 **전 개체 중성화 후 입양**이므로 셸터 중성화 건수가 연 입양 규모의 하한선을 준다 ②현재 공개 두수 74마리에 극단적 장기 체류가 섞여 있다 ③프로그램 수입 FY2023 $64,865 를 평균 입양비 $100~150 으로 나누면 400~650건이 되지만, **이 항목에는 지역 대상 중성화·예방접종·화장 수입이 함께 들어 있어 입양 건수로 환산할 수 없다**. **결론: 실제 연 입양은 150~200 구간으로 추정한다**(**추론**, 직접 확인 필요) | 뉴스레터 PDF, 계산값, 추론 |
| **의료 처리량 — 2023년 자기 발표** | **중성화 332건**(셸터 동물 **135** / 지역·타 구조단체 동물 **197**) · **심장사상충 양성견 42마리 치료**(셸터견 **16**) · 치과 10 · 위고정술 3 · 안구 적출 1 · 종괴 제거 1 · 피모 정리 1 | **원문 재검증 완료.** *"Year to date we have performed 332 spay/neuters of which 135 were shelter pets and 197 were community pets or other rescue pets. We also treated 42 heartworm positive dogs of which 16 were shelter pets."* **자기 동물보다 외부 동물을 더 많이 수술한다** |
| **2024년 의료 부하 (자기 발표)** | **심장사상충 양성견 12마리 이상 구조**, 파보 양성 강아지 2마리 완치 | 원문: *"This year alone, we have rescued more than 12 heartworm positive dogs"* / *"successfully treating and curing two Parvo-positive puppies"* |
| **2025년 의료 부하 (자기 발표)** | 파보 강아지 2마리(Lainey·Samson) 집중 치료, 눈 감염 새끼고양이 1마리, **Heterobilharzia americana(민물달팽이 매개 기생충) 다수 진단** | 원문: *"BAPA has had multiple cases diagnosed."* / *"the care and love provided by our dedicated medical team"* |
| **체류 기간 — 이 조직의 핵심 지표** | **Zoola 1,054일 · Ash 768일 · Thomas 742일 · Milk Dud 618일 · Argos 581일 · Dani 421일**(2024년 입양 완료 6마리) / **Yoshi(고양이) 35개월** / **Ace 약 1년** | **전부 조직이 뉴스레터에 자랑으로 게시한 숫자다.** 원문: *"Zoola holds the record among these six dogs, having spent a staggering 1,054 days in the shelter."* / *"Yoshi is a shelter long timer, residing there for 35 months before finding his forever home."* |
| **재입양(반환) 사례** | **Dino — 2회 반환 후 3번째 가정에 입양.** 원문: *"despite all his sweetness, he was adopted and returned twice for reasons that never quite made sense"* | 뉴스레터 PDF(Winter 2025) |
| **인테이크 정책** | **공간 여유 시·예약제.** 원문: *"As one of the only No-Kill shelters in our area, demand is high for placing an animal with us. We can only take in an adoptable cat or dog when space is available and it is by appointment only."* | 사이트 HTML |
| **인테이크 경로** | ①소유자 파양(예약제, 최소 $125) ②**인근 카운티 셸터에서 미인수 동물 인수** ③유기·구조. 원문: *"We rescue animals that are either unwanted by their owners or aren't claimed from surrounding county shelters."* | 사이트 HTML |
| **입양 절차 (자기 공표)** | ①신청서 제출 ②승인 ③직원이 연락해 예약 ④대면 만남 ⑤계약 ⑥수수료 ⑦귀가. 원문: *"Everyone is required to complete an application (which can be found under the adopt tab), then you will be contacted by staff for an appointment."* / *"We do not do same day adoptions, so the adoption process can take a few days while your application is processed."* | 사이트 HTML, Adopt-a-Pet |
| **당일 입양 없음** | **명시적으로 금지돼 있다.** 신청 → 심사 → 예약 → 만남까지 **며칠**이 걸린다고 조직이 직접 적었다 | 사이트 HTML |
| **켄넬 상태** | 원문: *"Our kennels – now more than thirty years old – are structurally failing. Many are no longer safe to house animals waiting for a home, and more will fail soon."* **수용 능력이 물리적으로 줄고 있다** | 사이트 HTML |
| 연간 구조 규모(자기 표현) | *"Bay Area Pet Adoptions rescues hundreds of dogs and cats every year."* — **숫자 없이 「수백」로만 표현한다** | 사이트 HTML |
| 포스터 가정 수 | **미확인.** 사이트·990·뉴스레터 어디에도 지표가 없다. **폼의 `fosters` 항목도 공란**이다 | — |
| 자원봉사자 수 | **미확인** | — |
| 라이브 릴리스율 | **미확인 — 공개 자료에 없다.** Shelter Animals Count·Best Friends 대시보드는 자동 조회에 실패했다 | — |
| 유급 인력 수 | **미확인.** FY2023 급여 총액 $197,419 만 있다. **Manager of Operations & Development 직급 급여가 연 $39,500–41,600(파트타임)로 검색 요약에 나오나 원문 미확보** — 이 수준이면 유급 인원은 **5~7명 규모로 추정**(**추론**) | ProPublica, 검색 요약(원문 미확보), 추론 |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **원장 = Petstablished (확정)** | 조직 계정 ID **`25348`**. 입양 신청서 링크가 **`https://petstablished.com/adoption_form/25348/generic`** 다. **폼 자기보고 `system: Petstablished` 는 실사용으로 확정** | 사이트 HTML |
| **Petstablished 두 번째 폼** | 자원봉사 신청서가 **`https://petstablished.com/petlover/general_form/41949`** 다. **같은 벤더의 범용 폼 모듈을 자원봉사 접수에 전용하고 있다** | 사이트 HTML |
| **공개 동물 목록 = Adopt-a-Pet 위젯 (핵심)** | 「Available Animals」 페이지에 임베드된 것은 **Petstablished 의 자체 목록 위젯이 아니라 Adopt-a-Pet 의 `portable_pet_list` 위젯**이다(`shelter_id=86661`). 2026-09-07 실측 **74마리** | 사이트 HTML, Adopt-a-Pet |
| **그 의미** | **원장(Petstablished) → 배급처(Adopt-a-Pet/Petfinder) → 자기 사이트 순으로 데이터가 한 바퀴 돌아 들어온다.** 자기 사이트가 자기 원장을 직접 보여주지 않는다. **동기화 지연이 생기면 조직이 그것을 인지할 경로가 없다**(**추론**, 직접 확인 필요) | 추론 |
| **자원봉사 스케줄 = Volgistics (확정)** | 전용 페이지 `/volgistics-volunteer-scheduling/` 와 로그인 링크 **`https://www.volgistics.com/vicnet/489401/login`**. 자기 설명 원문: ***"Welcome to our Volgistics Volunteer sign in schedule. Please login and sign up for the shifts that you would like to volunteer."*** | 사이트 HTML |
| **접수와 스케줄이 다른 도구다** | **지원 접수 = Petstablished 폼 → 서약서 → 월 1회 대면 오리엔테이션 → Volgistics 초대.** 원문: *"Schedule and attend a monthly General Volunteer Orientation."* **네 단계 사이를 사람이 잇는다**(**추론**) | 사이트 HTML, 추론 |
| **임시보호 = 도구가 없다 (핵심)** | 포스터 페이지에 **폼도 링크도 없다.** 전문 원문: ***"Although most of our animals live at the shelter until they find their FUR-ever homes, once in awhile we are in need of foster families for our young kittens, puppies and those recovering from medical treatments."*** / ***"If you are interested in becoming a foster parent. Please contact us."*** 뒤에 이메일·전화만 붙는다. **같은 사이트가 입양·자원봉사에는 Petstablished 폼을 쓰는데 포스터만 예외다** | 사이트 HTML |
| **포스터 대상이 명시돼 있다** | **①어린 새끼고양이 ②강아지 ③의료 치료 회복 중인 개체.** 세 번째가 우리 제품의 정중앙이다 — **의료 회복 상태를 가정에서 추적해야 하는 케이스** | 사이트 HTML |
| **Google Forms 사용** | Kitten Sponsorship 신청이 **`https://forms.gle/gTgQufzmwPBhNLL8`** 다. **후원자–개체 매칭을 구글폼으로 받는다** | 뉴스레터 PDF(Summer 2024) |
| **Gravity Forms 사용** | WordPress 플러그인 **Gravity Forms 3.1.1** 이 자본 캠페인 페이지에 로드된다. **개·고양이 파양 신청서가 사이트 내장 페이지**(`/surrendering-a-dog2/`, `/cat-surrender-form/`)인 것으로 보아 파양 접수도 여기로 들어온다(**추론**) | 사이트 HTML, 추론 |
| **폼이 세 벤더로 흩어져 있다** | **입양·자원봉사 = Petstablished / 파양 = Gravity Forms / 후원 매칭 = Google Forms / 임시보호 = 없음.** 신청 데이터가 네 갈래로 들어와 한 곳에 모이지 않는다(**추론**) | 사이트 HTML, 추론 |
| 분실 반려동물 | **24PetConnect**(외부 링크) · **Petco Love Lost** 안내. 자체 데이터베이스는 없다 | 사이트 HTML |
| 재홈 | 파양 페이지에서 **Adopt-a-Pet Rehome** 로 내보낸다(`rehome.adoptapet.com`) — **인테이크 부담을 외부 도구로 흘려보내는 구조** | 사이트 HTML |
| 입양 플랫폼 | **Petfinder 회원 TX128** / **Adopt-a-Pet 조직 86661**(74건) | 검색, Adopt-a-Pet |
| 사이트 스택 | **WordPress + Divi + Yoast SEO + Gravity Forms 3.1.1 + The Events Calendar(tribe_events)**. 이벤트 페이지가 sitemap 에 정상 갱신되고 있다 | 사이트 HTML, sitemap |
| **채용 지원 경로** | **Indeed 경유로 보인다**(자동 열람 차단으로 원문 미확보). **사이트에 채용 페이지가 없다** | 검색 |
| **미검출 목록** | **쉘터 SW 대체재**(ShelterLuv · Pawlytics · Chameleon · ShelterBuddy · PetPoint · Petango · RescueGroups · Adopets · Animal Shelter Manager) / **포스터 전용 도구**(Doobert · Maddie's Pet Assistant · Paw Partner ※조직의 「Paw Partner」는 자체 월정기 후원 프로그램 명칭이며 동명 SaaS 가 아니다) / **자원봉사 대체재**(Better Impact · SignUpGenius · Galaxy Digital · VolunteerHub) / **도너 CRM**(Bloomerang · Donorbox · Classy · DonorPerfect · Neon · Blackbaud · Zeffy · Givebutter) / **협업**(Airtable · Smartsheet · Salesforce · HubSpot) / **이메일**(Mailchimp · Constant Contact) — **전부 0건** | 사이트 HTML 검색 |
| **판정 시 주의** | 위 결과는 「안 쓴다」의 증거가 아니라 **「밖에서 보이는 자리에 없다」**의 증거다. **포스터 상태 추적·의료 기록·내부 스프레드시트·문자방은 공개 사이트에 흔적을 남기지 않는다** | 추론 |
| **종합 판정** | **원장(Petstablished)은 깔려 있고 자원봉사 포털(Volgistics)도 있다. 없는 것은 ①임시보호의 입구 자체 ②「의료가 끝났는가」를 개체 단위로 밖에서 보는 층이다.** 이 조직은 **자체 수술실을 돌리고 외부 동물까지 수술하는 의료 조직**인데, 그 의료 상태를 원장이 어디까지 담고 있는지는 공개 자료로 알 수 없다. **경쟁 대체(Petstablished 를 갈아치우자) 대화가 아니라 「Petstablished 옆의 빈자리」 대화만 성립한다** | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인** | **무보수 이사회 7인 → (상근 최고 책임자 없음) → 유급 매니저.** 조직 자기 표기: *"Our organization is governed by an all-volunteer Board of Directors."* 990 상 임원 보수가 확인 가능한 전 연도 $0 이므로 **유급 ED·CEO 가 존재하지 않는다.** 검색 요약(원문 미확보)에 따르면 **Manager of Operations & Development 가 이사회를 직접 상대하는 라인**이다 |
| **콜 상대의 지위 — 이 콜의 최대 변수** | **Kimberly carlisle 은 이사회 명단 7인에 없다.** 폼 자기보고는 `Veterinary or medical staff` 다. **즉 결재자가 아니라 「가장 아프고 가장 잘 아는 실무자」일 개연이 크다.** 이 콜의 목표는 계약이 아니라 **①본인의 실제 직책·권한 파악 ②내부 챔피언 확보 ③이사회로 가져갈 근거를 함께 만들기**다 |
| **전결 한도** | **미확인.** 990 원문 미확보로 거버넌스 서식·조달 규정을 보지 못했다. **우리가 먼저 금액을 꺼내지 않는다** |
| **속도 요인 — 양방향** | 유리한 쪽: 부채 $0, 차입 없음, 이사 7인 소규모, 시·카운티 조달 규정에 묶이지 않는 순수 민간 비영리다. **소액 SaaS 라면 이사회 정식 안건까지 안 갈 수 있다**(**추론**). 불리한 쪽: **상근 결재자가 없어 「결정할 사람」을 찾는 데 시간이 걸린다.** 이사회 개최 주기도 미확인 |
| **예산 사이클** | **12월 결산.** 콜 시점은 FY2026 3분기이고 **FY2027 편성이 10~12월에 도는 자리**다. 「올해 남은 예산」보다 **「내년 항목」 프레임이 맞는다**(**추론**) |
| **지불 여력** | **낮음~중간.** FY2025 수입 $459,580 에 약 $44,000 적자. 총자산은 약 $1.1M 로 커 보이지만 **FY2023 $604K → FY2025 $1.1M 의 증가분은 자본 캠페인 지정기부로 보이며**, 조직 스스로 **$300,000 목표 중 $150,000 을 더 모아야 한다**고 공개 모금 중이다. **「현금 여유가 있다」로 읽지 말 것**(**추론**) |
| **비용 감각** | **급여가 지출의 46.1%(FY2023)이고 임원 보수는 $0**, 이사 7인 전원 무보수, **데이터 입력까지 자원봉사로 모집**한다. **이 조직에서 「사람 시간」의 상당 부분은 무보수 시간이다.** ROI 서사는 돈이 아니라 **「지금 스태프·자원봉사자가 손으로 하는 어떤 동작이 사라지는가」** 로만 짜야 한다 |
| **경쟁 기준선** | **이미 Petstablished(유료) + Volgistics(유료) + Gravity Forms(유료) 를 쓴다. 네 번째 도구가 중복 지출로 보일 위험이 이 콜의 반론 1번이다.** 뒤집으면 유리하기도 하다 — **자원봉사자가 직접 로그인해 시프트를 잡는 문화가 이미 있고(Volgistics), 그 대상에서 포스터의 「개체 상태」만 빠져 있다** |
| **Petstablished 중복 우려 (선제 대비 필요)** | 상대는 **`system: Petstablished` 라고 스스로 적은 사람**이고, **Petstablished 는 마케팅에서 `fosters` 와 `medical records` 를 명시적으로 내세운다**(벤더 페이지 메타 설명 원문: *"We help animal shelters and rescues manage their pets, adoptions, fosters, pet history, medical records, and donations -- all in ONE place."*). **"우리 Petstablished 에 그 기능 있는데요" 가 나올 확률이 매우 높다. 반박하지 말고 「그 기능으로 지금 무엇을 하고 계신가요 / 포스터 본인이 직접 들어가서 보나요」로 받는다.** 그리고 **포스터 지원 폼이 사이트에 없다는 사실 자체가 「기능이 있어도 안 쓰이는 구간」의 증거**다 |
| **자본 캠페인이라는 변수** | **켄넬 공사에 $150,000 이 더 필요하다고 공개 모금 중이다.** 소프트웨어 지출은 이 우선순위와 직접 경쟁한다. **다만 우리가 먼저 「그건 나중에 하시고」라고 말하면 오지랖이다. 상대가 켄넬을 꺼낼 때만 받는다** |
| 2차 콜 후보 | **Manager of Operations & Development**(일상 운영 총괄, 이사회 라인) / **Veterinary Services Manager**(의료 게이트의 실제 주체 — **두 직책 모두 검색 요약에만 있고 원문 미확보**) / **Jeff Tave**(이사회 Secretary이자 대외 게시글 작성자) / **Roland Garcia**(이사회 President) |

## 6. Kimberly carlisle 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **성명·직책** | **미확인.** 폼 자기보고는 `role: Veterinary or medical staff` 뿐이다 | leads.json |
| **소속 확인 실패 — 확인한 것** | ①**FY2025 990 임원·이사 7인 명단에 없다**(Roland Garcia · Mary Kaye Murski · Annie Lamont · Jeff Tave · Ann Traynor-Plowman · Alysa Chiles · Tammy Petruna) ②**조직 사이트에 직원 소개 페이지가 아예 없다** — 이름이 실릴 자리가 없다 ③검색·LinkedIn 에 조직과 결부된 결과 0건 ④뉴스레터 3종에 직원 실명이 등장하지 않는다 | ProPublica, 사이트 HTML, 검색 |
| **해석** | **「없다」가 아니라 「이 조직은 직원 이름을 대외에 안 쓴다」로 읽는 것이 맞다.** 뉴스레터도 *"our dedicated medical team"* 처럼 집합명사로만 쓴다. **이사회 명단에 없는 것은 그가 유급 스태프라는 폼 자기보고와 정합한다**(**추론**) | 뉴스레터 PDF, 추론 |
| **있을 법한 직책** | 채용 공고 검색 요약에 **「Veterinary Services Manager」** 라는 직책이 존재한다고 나온다 — Manager of Operations & Development 가 *"collaboration with the Veterinary Services Manager to manage staff assignments"* 를 한다는 설명이다. **다만 공고 원문이 `410 Gone` 이라 확보하지 못했고, 이 직책이 Kimberly 인지도 확인되지 않았다. 정황일 뿐이다 — 콜에서 직접 확인 필요** | 검색 요약(원문 미확보) |
| **대명사** | **미확인.** 본인 선언도 3인칭 기록도 없다. **콜에서 상대 표현을 그대로 따를 것** | — |
| 폼 자기보고 | **4개 항목 기입**(`org_type`·`role`·`system`·`adoptions`), **`fosters` 만 공란**. `intent: book`, **미팅 미정** | leads.json |
| **`fosters` 공란의 해석** | 두 갈래다. ①**포스터 가정 수를 즉답할 수 없어서 비웠다** — 이 조직은 포스터 접수 폼조차 없으므로 「몇 가정」이라는 숫자가 어디에도 집계되지 않을 개연이 크다 ②단순 누락. **①이면 그 자체가 우리 제품의 근거다 — 콜 초반에 「지금 활동 중인 포스터 가정이 몇 곳인가요」를 던져 답이 즉시 나오는지를 본다**(**추론**) | leads.json, 추론 |
| **이메일 도메인 오타** | `k***@bayareapetadoptions.orgk` — **`.org` 뒤에 `k` 가 붙었다.** 조직 특정에는 지장이 없었으나 **회신 메일이 반송될 수 있다.** 콜에서 정확한 주소를 받아 적을 것 | leads.json |
| **콜에서 통할 언어** | **①의료 파이프라인 ②이번 주 손동작.** 상대는 의료·수의 라인 사람이고, 이 조직은 자체 수술실에서 연 300건대 중성화와 심장사상충·파보·기생충을 처리한다. **「대시보드가 생깁니다」가 아니라 「지금 어떤 아이가 수술 끝났고 어떤 아이가 아직인지, 그걸 지금은 어디서 보시나요」** 로 들어가야 한다(**추론**, 직접 대면 근거 없음 — 콜 초반에 화법을 관찰해 조정) | 추론 |
| **먼저 꺼내지 말 것** | ①**포스터 폼이 없다는 사실을 우리가 먼저 지적하지 않는다** — 「임시보호 문의가 오면 어디에 적히나요」로 우회 ②**자원봉사 모집 문구의 "data entry" 를 인용하지 않는다** — 「사무실 쪽 일은 누가 하시나요」로 우회 ③**가격** ④**켄넬이 구조적으로 무너지고 있다는 자본 캠페인 문구** — 상대가 먼저 꺼내면 받되 우리가 열지 않는다 ⑤**FY2025 적자·FY2024 990 공백** ⑥**2024년 허리케인 Beryl 피해**(6일 정전·단수) — 감정이 붙은 사건이다 ⑦**이사회 물갈이**(FY2023 대비 FY2025 에 5명 중 3명 교체) — 우리가 알 이유가 없는 정보다 | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2021–2022** | **그랜트로 Med Room 개보수 및 수술 장비 확보.** 원문: *"In 2021 and 2022 we received several grants to refurbish our Med Room and acquire equipment needed to perform surgeries - specifically, spay/neuters."* | 뉴스레터 PDF(December 2023) |
| **2023년** | **개보수 효과 실현 — 중성화 332건(셸터 135 / 외부 197), 심장사상충 42마리 치료.** 이글스카우트 2팀·걸스카우트 1팀이 Catio·파티오·벤치 시공 | 뉴스레터 PDF(December 2023) |
| FY2023 (2023-12) | 수입 $365,178 / 지출 $428,679 — **적자 $63,501**, 순자산 $604,203 | ProPublica API |
| **2024년 상반기** | **세 차례 폭풍, 특히 카테고리 1 허리케인 Beryl 로 시설 피해.** 원문: *"The most critical issue was the loss of power, which lasted for six days during Beryl's rampage, rendering our water well inoperable and leaving us without water."* 이후 **A/C 2대 교체 + 정화조 대규모 투자 + 발전기 연동 검토** | 뉴스레터 PDF(Summer 2024) |
| **2024년** | 심장사상충 양성견 12마리 이상 구조, 파보 2마리 완치, **새끼고양이 20마리 이상 동시 보호**(*"We have over 20 kittens at the shelter"*) | 뉴스레터 PDF(Summer 2024) |
| **FY2024 (2024-12)** | **990 추출 데이터가 존재하지 않는다.** FY2023 다음이 FY2025 다 — **미확인** | ProPublica |
| **2025-01** | **Houston PetSet 그랜트 수령 — 2025년 중성화 프로그램용.** 게시글 제목: `BAPA scores Houston PetSet grant for our 2025 spay/neuter program` | 사이트 sitemap, 게시글 |
| FY2025 (2025-12) | 수입 약 **$460,000** / 지출 약 **$504,000** — **약 $44,000 적자**. 총자산 약 **$1.1M**(FY2023 대비 +81%) | ProPublica |
| **2026-01-12** | **Winter 2025 뉴스레터 발행** — 파보 강아지 2마리, 신종 기생충 Heterobilharzia americana 경보, 장기 체류 고양이 Yoshi(35개월) 입양 | 사이트 sitemap, 뉴스레터 PDF |
| **2026-04-11** | **Woofstock 2026**(연례 최대 모금 행사, Boondoggles·Chelsea Wine Bar 주차장) | 사이트 sitemap |
| **2026-05-12** | **FY2025 990 접수** | ProPublica |
| **2026-06-11** | The Cat's Pajamas Bingo 모금 행사(Boondoggles Pub) | 사이트 sitemap |
| **2026-08-01** | **ASPCA 「The Rescue Effect」 캠페인 파트너 겸 그랜트 수령처로 선정.** 원문: *"The Rescue Effect, a national campaign that helps shelters and rescues increase adoptions, engage their communities, and connect more animals with loving homes."* 게시자는 이사회 Secretary **Jeff Tave** | 사이트 게시글 |
| **2026-08-08~09** | **BAPAdoptapalooza — ASPCA 후원 무료 입양 행사.** 원문: *"All adoption fees are WAIVED pending approved application!"* **콜 시점 기준 한 달 전이다** | 사이트 sitemap, 게시글 |
| **2026-09-03** | BowWow Bingo 모금 행사(Jackie's Bar & Grill) | 사이트 sitemap |
| **2026-10-17** | **Barktoberfest 2026**(Galveston Bay Brewing Company) — **콜 이후 6주 내 행사** | 사이트 sitemap |
| **진행 중** | **Safe Place for Paws 자본 캠페인** — 목표 $300,000, 수령 $150,000. 켄넬이 30년 넘어 구조적으로 파손 중 | 사이트 HTML |
| **사이트 갱신 상태** | page-sitemap 상 **대부분의 안내 페이지가 2023-07~2024-04 에서 멈춰 있다.** 최근 갱신은 wish-list(2026-07-12) · happy-tails(2025-10-05) · owner-surrenders(2025-01-11) 정도이고, **행사·게시글만 활발히 갱신된다** — 관리 인력이 대외 홍보에 쏠려 있음을 시사(**추론**) | sitemap, 추론 |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

- **임시보호 접수가 대화형이다.** 입양은 Petstablished 폼, 자원봉사도 Petstablished 폼인데 **포스터만 *"If you are interested in becoming a foster parent. Please contact us."*** 다. **확인 필요: 임시보호 문의가 오면 누가 받고, 그 사람이 어디에 적는가. 지금 활동 중인 포스터 가정 목록은 어떤 파일에 있는가.**
- **포스터 대상이 「의료 회복 중인 개체」로 명시돼 있다.** 원문: *"we are in need of foster families for our young kittens, puppies and those recovering from medical treatments."* **가정에 나간 개체의 치료 경과를 누가 언제 확인하는지가 정의돼 있지 않다. 확인 필요.**
- **데이터 입력을 자원봉사로 모집한다.** 원문: *"Volunteer indoors assisting with data entry, document scanning shredding etc… Basic office skills are needed for this volunteer opportunity. This opportunity is as needed."* **「as needed」는 상시 인력이 아니라는 뜻이다 — 밀리면 밀린 채로 쌓인다.** 확인 필요: 무엇을 입력하고, 밀리면 어디에 티가 나는가.
- **신청 데이터가 네 벤더로 흩어진다.** 입양·자원봉사 = Petstablished / 파양 = 사이트 내장 Gravity Forms / 후원 매칭 = Google Forms(`forms.gle/gTgQufzmwPBhNLL8`) / 임시보호 = 없음. **네 갈래를 합치는 곳이 어디인지 확인 필요.**
- **자기 사이트가 자기 원장을 안 보여준다.** 공개 동물 목록이 **Adopt-a-Pet 위젯**이다. 즉 Petstablished → Adopt-a-Pet → 자기 사이트로 한 바퀴 돈다. **확인 필요: 새 아이를 올리고 사이트에 뜨기까지 얼마나 걸리는가. 입양 나간 아이가 사이트에서 사라지는 데는.**
- **접수와 배정 사이에 대면 관문이 있다.** 자원봉사 온보딩이 **폼 → 서약서 → 월 1회 대면 오리엔테이션 → Volgistics 초대** 4단계다. **월 1회라는 것은 타이밍이 안 맞으면 최대 4주가 뜬다는 뜻이다.** 포스터도 같은 관문을 지나는지 확인 필요.
- **의료 게이트가 논리곱인데 그 상태를 밖에서 볼 수 없다.** 입양 전 필수 항목이 **건강 평가 · 중성화 · 광견병 포함 예방접종 · 구충 · 고양이 FeLV/FIV 검사 · 6개월 이상 개 심장사상충 검사 · 마이크로칩 · 벼룩 예방 · 개 심장사상충 예방**으로 아홉 개다. **아홉 개가 다 끝났는지를 개체별로 지금 어디서 보는지가 이 콜의 중심 질문이다.**
- **심장사상충 치료는 몇 주~몇 달짜리 상태다.** 2023년 42마리, 2024년 12마리 이상. **치료 중인 개는 「입양 불가」가 아니라 「아직 아님」이고, 그 「언제쯤」을 묻는 문의가 반드시 있다.** 확인 필요: 그 질문에 지금 누가 답하는가.
- **당일 입양이 금지돼 있고 심사가 며칠 걸린다.** 원문: *"We do not do same day adoptions, so the adoption process can take a few days while your application is processed."* **신청과 승인 사이에 대기열이 존재한다.** 확인 필요: 한 마리에 신청이 여러 건 붙으면 어떻게 고르는가.
- **장기 체류가 상시 상태라 「재고 관리」 성격이 강하다.** 1,054일·768일·742일짜리가 실제로 있었고 조직이 그것을 자랑으로 쓴다. **오래된 아이의 사진·소개·상태를 언제 갱신하는지가 실무 부담일 개연이 크다.** 확인 필요.
- **뉴스레터가 손으로 만들어진다.** 4페이지 PDF, 마지막 장에 **종이 기부 양식**이 붙어 있고 온라인 기부는 PayPal 버튼 하나다. 발행 주기가 연 1~2회로 불규칙하다(2023-12 → 2024 여름 → 2026-01). **확인 필요: 누가 만들고 사진·사연은 어디서 모으는가.**
- **수의 파트너가 왕진 업체다.** Winter 2025 감사 명단에 **Bay Area Veterinary House Call** 이 있다. 자체 Med Room 과 병행하는 구조로 보인다(**추론**). **확인 필요: 원내에서 처리하는 것과 외부에 보내는 것의 경계가 어디인가 — 그 경계에서 기록이 갈릴 개연이 크다.**
- **외부 동물이 자기 동물보다 많다.** 2023년 중성화 332건 중 **197건이 지역·타 구조단체 동물**이다. **즉 의료 일정표에 「우리 아이」와 「남의 아이」가 섞여 있다.** 확인 필요.

## 미확인 요약 (콜에서 확인할 것)

1. **Kimberly carlisle 본인의 직책과 권한.** 이사회 7인 명단에 없고 공개 자료에 이름이 전혀 없다. 폼은 `Veterinary or medical staff` 뿐이다. **누구에게 무엇을 보고하고, 도구 도입을 누가 결정하는지까지 첫 3분에 받아 적을 것.**
2. **활동 중인 임시보호 가정 수, 그리고 그 목록이 어디 있는가.** 폼의 `fosters` 가 공란이고 접수 폼 자체가 없다.
3. **Petstablished 를 어디까지 쓰는가.** 의료 기록·포스터 배치·개체별 준비 상태가 안에 들어가는지, 아니면 입양 신청 접수와 공개 목록 배급까지인지. **포스터·자원봉사자가 직접 로그인해 볼 수 있는 포털을 켜 두었는지.**
4. **아홉 개 입양 전 필수 항목의 완료 여부를 개체별로 지금 어디서 보는가.** 종이 차트·화이트보드·엑셀·Petstablished 중 무엇인가.
5. **연간 인테이크·입양·라이브 릴리스율.** 조직이 게시하지 않는다. 폼의 `150–300` 이 어느 쪽 끝인지 본인 입으로 확인할 것.
6. **유급 인력 수와 구성.** FY2023 급여 총액 $197,419 만 있다. 의료 라인에 몇 명이 있는지가 특히 중요하다.
7. **FY2024 990 이 왜 없는가.** ProPublica 추출에 FY2023 다음이 FY2025 다. **재무 질문으로 던지지 말고, 필요할 때 「작년 사정」 정도로만 우회할 것.**
8. **이사회 개최 주기와 소액 지출의 결재 경로.** 이사 7인 전원 무보수이고 상근 최고 책임자가 없다.
9. **Safe Place for Paws 켄넬 공사의 일정.** 소프트웨어 지출과 직접 경쟁하는 우선순위다. **상대가 먼저 꺼낼 때만 받는다.**
10. **ASPCA The Rescue Effect 참여로 무엇이 바뀌었는가.** 8월 무료 입양 행사 직후다 — **입양이 몰린 뒤 무엇이 가장 먼저 밀렸는지**가 우리 제품의 정중앙 질문이다.
11. **심장사상충·파보 치료 중인 개체의 「언제 나갈 수 있나요」 문의를 하루에 몇 건 받는가.**
12. **원내 수술 일정에 외부(지역·타 구조단체) 동물이 섞이는 방식.** 2023년 332건 중 197건이 외부 동물이었다.
