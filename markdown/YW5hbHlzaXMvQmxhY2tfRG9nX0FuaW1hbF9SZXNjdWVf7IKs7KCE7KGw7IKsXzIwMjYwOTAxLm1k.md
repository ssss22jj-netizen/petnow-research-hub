# Black Dog Animal Rescue 사전조사

- 작성일: 2026-09-01 / 목적: Amira Spargo 콜 준비(2026-09-07) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Foster-based rescue", "role": "Foster coordinator", "system": "Shelterluv, Maddie Pet Assistant, spreadsheets", "fosters": "11–30"}`
- 유입 소재: B (임시보호자 업데이트 수집 — 폼에서 현재 임시보호자 수를 물었다)
- **동일 조직 확정 / 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석: 조직 사이트(Squarespace) 주요 15개 페이지 HTML을 직접 내려받아 문자열 검색했고, 2023·2024·2025 연차보고서 PDF 3건과 2024년 Form 990 PDF 1건을 조직 사이트에서 직접 내려받아 판독했다. ShelterLuv 엔드포인트는 직접 열어 조직명 표기까지 확인했다. Petfinder·Adopt-a-Pet 은 자동 열람을 차단해 텍스트 프록시(r.jina.ai)로 확보했고 해당 행에 `(프록시)`로 표기한다. **Facebook·Instagram·LinkedIn 은 로그인 게이트라 원문을 열지 못했다.** 지역 언론(wyomingnews.com·wyomingnewsnow.tv) 일부 기사는 HTTP 429/봇 차단으로 **원문을 열지 못했고 검색 결과 요약만 확인**했다 — 해당 행은 `검색 스니펫`으로 표기하고 신뢰도를 낮춰 다룬다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Black Dog Animal Rescue, EIN 26-2906385.** 501(c)(3), NTEE **D20**(Animal Protection & Welfare), **12월 결산**, 990 정식 신고, IRS 승인 **2010-06**, 설립(법인) **2009년**, 법적 주소지 주 **WY** | ProPublica API, 2024 Form 990 |
| 소재지 | **Cheyenne, WY**(Laramie County) | ProPublica API, 조직 사이트 |
| **이메일 도메인** | **결정적 근거 ①.** 990 J항에 신고된 웹사이트가 **www.bdar.org** 이고, 조직 대표 메일이 **b***@bdar.org** 다. **리드 폼의 도메인(bdar.org)과 정확히 일치한다** | 2024 Form 990, 조직 사이트 |
| **신청자** | **결정적 근거 ②. 조직 공식 Staff 페이지에 "Amira Spargo, Volunteer and Foster Manager and Vaccine Clinic Coordinator" 로 실명·직책이 그대로 올라와 있다** | 조직 사이트 Staff |
| 신청자 — 이름 변경 이력 | **2025 연차보고서 Staff 란에는 "Amira Zohbe, Volunteer & Foster Manager"** 로 적혀 있고, 2024 연차보고서에도 동일하게 Zohbe 다. 공개 결혼식 페이지가 **Amira Zohbe ↔ Jeremy Spargo(2026-02-07)** 를 연결한다. **동일인의 혼인 후 성 변경으로 읽는 것이 가장 단순한 설명이다**(추론). 콜에서 확인할 필요는 없고, **연차보고서를 인용할 때 이름이 다르다는 점만 기억하면 된다** | 2024·2025 연차보고서, Zola(공개 페이지) |
| **동명 조직** | ProPublica 전체 검색 `black dog animal rescue` 는 **4건**이고, 이름이 정확히 일치하는 법인은 **Cheyenne WY 1건뿐**이다. 나머지 3건은 *Black Cats & Old Dogs Animal Rescue*(Tallahassee FL), *A Dog Named Black Jack Animal Rescue Recovery*(Tarpon Springs FL), *That Black Dog Rescue Inc*(Miami FL, 별칭 "That Black Dog Animal Rescue")로 **전부 플로리다이고 도메인이 다르다.** 혼동 위험이 낮다 | ProPublica API |
| 폼 응답 정합 | **4개 중 2개가 정확히 맞고, 1개는 부분 일치, 1개는 자릿수 확인이 필요하다.** 아래 표 참조 | — |

### 폼 응답 대조 — 이 콜의 출발점

| 폼 응답 | 공개 자료로 확인한 것 | 판정 |
|---|---|---|
| `org_type: "Foster-based rescue"` | **맞다.** 조직 사이트 원문 — *"All of our adoptable dogs and kittens reside in foster homes, so we do not have adoptable dogs or kittens on-site. Some adults cats live in Kitty City on-site."* 입양 가능한 **개와 새끼고양이 전량**이 포스터 가정에 있다 | **일치** |
| `role: "Foster coordinator"` | **직함은 더 넓다. "Volunteer and Foster Manager and Vaccine Clinic Coordinator"** — 자원봉사·포스터·백신 클리닉 **3개 역할 겸직**이다. 폼에는 그중 하나만 적었다 | **부분 일치 — 겸직 폭이 콜의 재료다** |
| `system: "Shelterluv, Maddie Pet Assistant, spreadsheets"` | **세 개 다 정황으로 뒷받침된다.** ShelterLuv 는 조직 코드 **BDAR** 로 확정(아래 §4). Maddie's Pet Assistant 는 ShelterLuv 와 임포트 연동이 존재하는 앱이 맞고, **다만 iOS 앱 최종 갱신이 2020-10-01 에서 멈춰 있다**(App Store 직접 조회). spreadsheets 는 검증 불가 | **일치 — 그런데 두 번째 도구의 상태가 이 콜의 정중앙** |
| `fosters: "11–30"` | **가정 수인지 동물 수인지에 따라 뜻이 완전히 달라진다.** 2025년 인테이크 **535마리**(개 261 / 고양이 274) 전량이 포스터 경유이고, 평균 체류가 **4–6주**다. 산술적으로 **상시 40~50마리대**가 가정에 나가 있는 셈이며, 2024년 말 지역 보도도 *"about 50 dogs in foster care"* 로 적었다(검색 스니펫) | **자릿수 확인 필요 — 첫 질문** |

→ **조직은 EIN·990 신고 웹사이트·이메일 도메인 3축으로 확정. 신청자는 조직 공식 Staff 페이지에 실명·직책이 그대로 있어 확정.** 다른 조직 정보를 끌어온 부분 없음.

## 미팅에서 바로 쓸 핵심 5줄

1. **본인이 적은 세 도구 중 두 번째(Maddie's Pet Assistant)가 2020년 10월 이후 갱신이 멈춘 앱이고, 그 앱은 ShelterLuv 로 데이터를 되돌려 주지 않는다 — 그래서 세 번째 도구가 spreadsheets 다**
 App Store 원문을 직접 판독했다. **버전 14.0, 버전 이력의 마지막 날짜가 2020-10-01, 개발사 Pethealth Inc., 평점 69건.** 2020-10-01 부로 Maddie's Fund 가 손을 떼고 Pethealth 전담으로 넘어간 뒤 **6년째 업데이트가 없다.** 그리고 ShelterLuv↔MPA 연동은 **ShelterLuv → MPA 단방향 임포트**다 — ShelterLuv 사용자 커뮤니티에 *"MPA 가 포스터에게 받은 체중을 ShelterLuv 로 되돌려 줬으면 좋겠다"*는 요청이 남아 있다(검색 스니펫). **즉 포스터가 앱에 남긴 기록이 개체 원장으로 돌아오지 않고, 그 틈을 사람이 스프레드시트로 메우고 있다는 구조가 폼 답변 세 단어에 이미 적혀 있다.** 콜의 첫 축은 여기다 — *"MPA 로 들어온 답변은 그다음 어디로 옮기세요?"*

2. **포스터 가정이 3개 도시에 걸쳐 있고 그중 2곳에는 사무실이 없다 — 여기에 교도소 위탁 9주까지 더하면 개체가 네 종류 장소에 흩어진다**
 조직 사이트 원문 — *"We also have active foster homes in Laramie and Casper, but they do not have a physical office."* Cheyenne 기준 Laramie 약 50마일, **Casper 약 180마일**이다(추론, 지도 개략). 여기에 **P.A.C.K. 프로그램**이 겹친다 — Torrington, WY 의 **Wyoming Medium Correctional Institution** 에서 재소자 훈련사와 **9주**를 보내는 프로그램이고, 조직 추정으로 **연 약 70마리**가 통과한다. 즉 한 마리의 위치가 *본부 Kitty City / Cheyenne 포스터 / Laramie·Casper 포스터 / 교도소* 넷 중 하나다. **분산 케어 추적이라는 우리 가설이 이 조직에서는 가설이 아니라 운영 그 자체다**

3. **자원봉사자에게는 로그인 포털이 있는데 포스터에게는 없다 — 조직은 이미 "당사자가 직접 기록을 남기는 시스템"에 돈을 쓰고 있고, 그 대상에서 포스터만 빠져 있다**
 사이트 **전 페이지 헤더에 "Volunteer Login"** 이 있고 그 링크가 **Better Impact**(`myimpactpage.com` / `betterimpact.com/Application?OrganizationGuid=6645ffd8-…`)로 나간다. 반면 **포스터용 로그인·포털 링크는 사이트 어디에도 없다.** 포스터 지원은 ShelterLuv 폼(`shelterluv.com/matchme/foster/BDAR/Dog`)으로 **접수만** 받고, 그 이후 지원 방식으로 사이트가 명시하는 것은 *"BDAR staff is available on call 24/7"* — **사람이 전화로 받는다**는 뜻이다. **"자원봉사자는 로그인해서 남기는데, 포스터는 어디에 남기세요?"** 한 줄이면 이 콜의 절반이 열린다

4. **작년 한 해에 활동 자원봉사자가 143명 → 97명으로 32% 줄었고, 개 입양은 253건 → 207건으로 18% 줄었다. 그 두 축을 한 사람이 겸직한다**
 연차보고서 실측이다. 자원봉사 **143명·14,821시간(2024) → 97명·10,505시간(2025)**. 1인당 시간은 104시간 → 108시간으로 거의 그대로다 — **몰입도가 아니라 사람 수가 빠졌다.** 같은 해 개는 **인테이크 253→261(+8)**, **입양 253→207(−46)**, 전출 6→23. 산술적으로 **개가 연중 약 31마리 더 쌓였다**(추론 — 연차보고서에 소유주 반환·폐사 항목이 없어 정확한 잔량은 아니다). **들어오는 건 그대로인데 나가는 게 줄고, 그걸 받쳐야 할 자원봉사 인력은 3분의 1이 빠졌다.** 그 한가운데 있는 자리가 Amira 의 자리다

5. **콜 5일 뒤 본인이 운영하는 백신 클리닉이 있고, 19일 뒤 Volunteer Bash, 40일 뒤 연간 최대 모금 갈라다 — 지금은 검토 시간이 없는 구간이다**
 조직 캘린더 실측 — **9/12 Vaccine Clinic**(본인이 Coordinator), **9/20 Empty Dish 배포일**, **9/26 Volunteer Bash**, **10/17 Bark and Wine 갈라**(연간 최대 모금 행사, presented by Dyno Nobel). **12월 결산**이므로 예산 논의는 갈라가 끝나는 10월 하순 이후에야 실체가 생긴다. 콜에서 결정을 재촉하면 진다 — **"클리닉 끝나고 10월에 다시"** 가 자연스러운 착지점이고, 대신 콜 당일에는 **업무 구조를 최대한 캐내는 것**이 목표다

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Black Dog Animal Rescue** (통칭 BDAR — ShelterLuv 조직 코드도 **BDAR**, Adopt-a-Pet 등록명은 "Black Dog Animal Rescue, Inc.") | ProPublica, ShelterLuv 직접 조회, Adopt-a-Pet(프록시) |
| EIN·지위 | **26-2906385** / 501(c)(3), NTEE **D20**, 12월 결산, IRS 승인 **2010-06** | ProPublica API |
| 설립 | 990 L항 **Year of formation 2009**. 창립자는 **Britney Tennant**(구 Britney Wallesch — IRS BMF 수신인 표기가 `% BRITNEY E WALLESCH` 다) | 2024 Form 990, ProPublica API, KGAB |
| **창립자의 현재 위치** | **2021-10 부로 Cheyenne Animal Shelter CEO 로 옮겼다.** 같은 카운티의 다른 대형 보호소 수장이 됐고, **2025년 BDAR 기부자 명단에 본인 이름과 Cheyenne Animal Shelter 가 모두 올라 있다**(각각 $500–$999, $1,000–$4,999 구간). **두 조직은 경쟁이 아니라 협력 관계로 읽힌다**(추론) | KGAB(2021-09-01), 2025 연차보고서 |
| 소재지 | **Cheyenne, WY** — 단일 시설 | 조직 사이트, 990 |
| **분산 운영 (핵심)** | 조직 사이트 원문 — *"We also have active foster homes in **Laramie and Casper**, but they do not have a physical office."* **포스터 네트워크가 3개 도시에 걸쳐 있고 2곳에는 사무실이 없다** | 조직 사이트 Location |
| 시설 성격 | **개·새끼고양이는 시설에 없다.** 원문 — *"All of our adoptable dogs and kittens reside in foster homes… Some adults cats live in Kitty City on-site."* 즉 **시설은 성묘 전용 공간 + 사무실 + 프로그램 거점** | 조직 사이트 Location |
| 개방 시간 | **월–금 09:00–17:00 / 토·일 휴무.** 방문은 사전 전화 예약 요청. **특정 개체를 만나려면 입양 신청서를 먼저 내야 미팅이 잡힌다** | 조직 사이트, Adopt-a-Pet(프록시) |
| 자기표기 규모 | **"Wyoming's largest rescue"** — 조직 사이트·Petfinder·Adopt-a-Pet 모두 동일 표기. 2025 연차보고서 표현은 *"Wyoming's largest private animal rescue"* | 조직 사이트, Petfinder(프록시), 2025 연차보고서 |
| 미션 | *"The mission of Black Dog Animal Rescue is to promote, provide, and advocate for the needs of companion animals."* | 조직 사이트, 조직 사이트 Reports |
| **유급 직원 (990)** | **2024년 중 고용 인원 10명.** 다만 현재 Staff 페이지에 올라 있는 인원은 **6명**이다 — 파트타임·연중 교체가 있다는 뜻(추론) | 2024 Form 990, 조직 사이트 Staff |
| 현재 Staff (6인) | **Emilee Intlekofer — Executive Director** / **Maddi Delach — Director of Programs** / **Paige Russell — Marketing & Development Manager** / **Amira Spargo — Volunteer and Foster Manager and Vaccine Clinic Coordinator** / **Tracy Duck — Animal Care Assistant** / **Natalie Sarters — Animal Care Assistant** | 조직 사이트 Staff |
| **staff 회전** | **1년 사이에 상당히 바뀌었다.** 2025 연차보고서 명단은 Emilee / Maddi Delach / Paige / Amira Zohbe / **Michele Cesa** / Tracy Duck 였고, 2024 명단은 Emilee / **Maddi Haak(Intake and Animal Care Manager)** / Paige / Amira / Michele Cesa / **Skyler Perry** 였다. **Maddi 는 2년 사이 직함이 Intake Manager → Director of Programs 로 올라갔다** | 2024·2025 연차보고서, 조직 사이트 Staff |
| ED | **Emilee Intlekofer.** 2011년 이사로 합류 → 자원봉사자·포스터 부모 → **2021년 Executive Director.** 990 신고 주당 근무 **50시간**, 보수 **$72,500 + 기타 $2,100**(2024) | 조직 사이트 Staff, 2024 Form 990 |
| **이사회** | **7인, 전원 독립.** 2025 연차보고서 기준 — **Mat Brost(Chair) / Molly Box McCarty(Vice Chair) / Jenessa Dame(Secretary) / Lee Dickinson(Treasurer) / Paige Anderson / Janelle Martin**(6명 게재). 990(2024) Part VII 에는 9인이 올라 있다 — Erin Benskin(President), Lee Dickinson(VP), Layna Officer(Secretary), Pat Rudd(Treasurer), Jenessa Washburn, Serenity Moffitt, Rob Killan, Kristen Blume, Matthew Brost. **주당 1시간 표기, 전원 무보수** | 2025 연차보고서, 2024 Form 990 |
| **이사회 회전** | **1년 사이 의장이 바뀌고 명단 절반이 교체됐다**(2024 Chair Erin Benskin → 2025 Chair Mat Brost). 도입 결정을 이사회까지 올려야 한다면 **누가 지금 앉아 있는지부터 확인해야 한다** | 2024·2025 연차보고서 |
| 회계 담당 | 990 작성자 **William L Benskin, LLC**(Cheyenne). **2024년 이사회 의장 Erin Benskin 과 성이 같다** — 관계는 확인하지 못했고 990 Part VI 2번(가족·사업 관계)에는 "No" 로 신고돼 있다. **콜에서 꺼낼 사안이 아니다** | 2024 Form 990 |
| 웹 자산 | 자체 사이트(**bdar.org, Squarespace**) + Facebook(BlackDogAnimalRescue) + Instagram(**@bdarwy**) | 조직 사이트 HTML |
| 사이트 제작 | 푸터에 **prairiesagecreative.com** 표기. Squarespace 내부 식별자가 `molly-donnell-bdar` 다 — **외주 제작 사이트** | 조직 사이트 HTML |
| 사이트 갱신 | Squarespace 메타데이터 `contentModifiedOn` 이 **2026-08 중순경**으로 찍힌다 — 사이트 자체는 최근까지 손대고 있다 | 조직 사이트 HTML |
| **자체 뉴스 블로그** | **2024-10-25 이후 새 글이 없다.** 최근 3건이 2024-10-25 / 2024-07-23 / 2024-07-09 다. **대외 소통이 사이트에서 SNS 로 완전히 옮겨간 상태**(추론) | 조직 사이트 News |
| 공용 메일함 | **b***@bdar.org 단일.** 다만 스폰서 문의는 **p***@bdar.org** 로 따로 안내한다 — **역할별 개인 메일이 존재한다** | 조직 사이트 |
| 전화 | (307) 514-4024 — 단일 회선 | 조직 사이트 |
| 서비스 권역 | Laramie County 중심(Empty Dish 펫 푸드 팬트리는 **Laramie County 거주자 한정**), 포스터 네트워크는 Laramie·Casper 까지, PACK 은 Torrington 교도소 | 조직 사이트 |
| 외부 소속 | **Socially Conscious Sheltering 파트너**로 등재. 조직 사이트에도 별도 페이지가 있다 | scsheltering.org, 조직 사이트 |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **12월 결산.** 콜 시점(2026-09-07)은 **FY2026 9개월 차**이자 **다음 연도 예산 편성 논의 직전** | ProPublica API, 2024 Form 990 |
| 신고 양식 | **990 정식 신고.** 조직 사이트 Reports 페이지에 **2021~2024년 990 4개 연도**와 **2023~2025년 연차보고서 3건**을 스스로 게시하고 있다 | 조직 사이트 Reports |
| **FY2024 (990)** | 수입 **$555,057** / 지출 **$525,933** → **흑자 $29,124.** 총자산 $1,069,057 / 총부채 **$401,705** / 순자산 $667,352. 총수입(gross receipts) $601,541 | 2024 Form 990 |
| **FY2023 (990)** | 수입 **$627,830** / 지출 $539,044 → 흑자 $88,786. 총자산 $932,566 / 총부채 $292,186 | ProPublica API |
| FY2022 (990) | 수입 $541,127 / 지출 $502,459 → 흑자 $38,668 | ProPublica API |
| FY2021 (990) | 수입 $566,395 / 지출 $501,136 → 흑자 $65,259 | ProPublica API |
| **연차보고서 기준 (총액)** | **2023 수입 $643,313 / 지출 $547,562** → **2024 수입 $592,842 / 지출 $541,551** → **2025 수입 $595,134 / 지출 $536,610.** 990 수치와 다른 것은 모금 행사 직접비를 상계하기 전후 차이로 보인다(추론) | 2023·2024·2025 연차보고서 |
| **수입 추세** | **2023 정점 이후 약 7% 낮아진 수준에서 2년째 평평하다.** 감소가 아니라 **정체**다. 3년 내리 흑자이고 폭은 $46K~$96K 다 | 연차보고서, 990 |
| **재원 구성 (2025)** | **기부 $227,220(38.2%) / 모금행사 $246,188(41.4%) / 프로그램 $98,946(16.6%) / 투자 $22,281(3.7%) / 그랜트 $785(0.1%)** | 2025 연차보고서 |
| **재원 구성의 뜻 — 중요** | **프로그램 수입(입양비)이 총수입의 17%뿐이고, 기부+모금이 80%다.** 게다가 조직 스스로 *"average expense to BDAR per animal can range from $500-$1,000"* 라고 적는데, 2025년 프로그램 수입 $98,946 ÷ 입양 461건 = **건당 약 $215**다. → **한 마리를 더 내보낼수록 재무적으로는 비용이 는다.** 따라서 **"회전을 늘려 매출을 늘린다"는 논거가 이 조직에는 통하지 않는다.** ROI 는 돈이 아니라 **직원 시간과 수용 여력**의 언어로 짜야 한다 | 2025 연차보고서, 조직 사이트 Adoption Program, 계산 |
| 그랜트 | **거의 없다.** 2024·2025 모두 **$785** 로 동일하다. 재단·정부 조달 라인에 묶여 있지 않다 | 2024·2025 연차보고서 |
| **지출 구성 (2025)** | 동물·커뮤니티 케어 **$306,202(57.1%)** / 모금 $83,515 / 관리 $74,957 / 대외·커뮤니티 $38,689 / 사업·보험 $33,247 | 2025 연차보고서 |
| 인건비 (2024, 990) | 급여·보수·복리 **$306,172** — 총지출의 58%. 임원 보수는 그중 $72,500 | 2024 Form 990 |
| **부채 — 유일한 재무 리스크** | **총부채가 FY2023 $292,186 → FY2024 $401,705 로 1년 만에 $109,519 늘었다.** 과거 990 에 담보부 부동산 대출(secured mortgages)이 $288K~$301K 로 계속 잡혀 있었다. **시설 관련 차입으로 보이나 증가분의 성격은 확인하지 못했다**(추론). 자산 $1.07M 대비 부채 비율 37.6% | ProPublica API, 2024 Form 990 |
| 주요 기부처 (2025, $10,000+) | Andrew Allen Charitable Trust / H Fort Flowers Foundation / Jeff and Lynne Carlton / Kevin O'Hare / Marjorie Bremer / Robert Geha — **전부 개인·소규모 재단이다** | 2025 연차보고서 |
| 기업·기관 기부처 | Petco Love, Microsoft, Walmart Spark Good, Kroger, Dr Elsey's, Blue Cross Blue Shield of Wyoming, Wyoming Community Foundation, Wyoming Nonprofit Network, **Cheyenne Animal Shelter**, Wyoming Medium Correctional Institution 등 | 2025 연차보고서 |
| 모금 채널 | **Bloomerang**(기부자 CRM, 사이트 전 페이지에 위젯 로드) + **Bark & Wine 갈라**(10/17) + **Black Dog Bingo**(3월) + **Football Raffle** + **Endowment** + **Sponsor** + **WyoGives**(Wyoming Nonprofit Network 주관 주(州) 기부의 날, **매년 7월 15일**) | 조직 사이트 HTML, capcity.news, wyogives.org |
| 시사점 | **월 구독을 논할 수 있는 규모대이고 3년 연속 흑자라 지불 능력은 있다.** 다만 ①수입의 80%가 기부·모금이라 **신규 고정비는 곧 모금 목표 증가**로 읽히고 ②부채가 1년 새 $110K 늘었으며 ③연간 최대 모금 행사가 **10/17** 이라 그 전까지는 예산 이야기의 실체가 없다. **콜에서는 가격을 꺼내지 않고, 10월 하순 이후를 재접점으로 잡는 것이 맞다** | 추론 |

## 3. 운영 통계

연차보고서 3개 연도가 같은 지표를 같은 형식으로 싣는다. **이 조직은 자기 숫자를 공개적으로 관리하는 조직이다.**

| 지표 | 수치 | 비고 |
|---|---|---|
| **인테이크 (2025)** | **개 261 / 고양이 274 = 535** | 2025 연차보고서 |
| 인테이크 (2024 / 2023) | 개 253·고양이 303 = **556** / 개 276·고양이 286 = **562** | 3년 내리 **535~562 사이**로 안정적 |
| **입양 (2025)** | **개 207 / 고양이 254 = 461** | 2025 연차보고서 |
| 입양 (2024 / 2023) | 개 253·고양이 269 = **522** / 개 235·고양이 261 = **496** | **개 입양이 253→207 로 1년 새 18.2% 줄었다** |
| 전출 (2025 / 2024 / 2023) | 개 23·고양이 24 = **47** / 개 6·고양이 12 = **18** / 개 17·고양이 15 = **32** | **1년 새 2.6배** — 자체 소화가 어려워진 신호로 읽힌다(추론) |
| **개 수급 불균형 (2025)** | 개 인테이크 **261**, 개 출구(입양+전출) **230** → **차이 31마리** | **추론.** 연차보고서에 소유주 반환·폐사 항목이 없어 정확한 잔량은 아니다. 2024년은 인테이크 253 · 출구 259 로 오히려 −6 이었다 — **방향이 뒤집혔다는 사실만 취한다** |
| 라이브릴리스율 | **2025 98% / 2024 98% / 2023 97%** | 2025·2024·2023 연차보고서 |
| **990 프로그램 실적 서술 (2024)** | *"Obtain veterinary care and vaccinations for homeless dogs and cats. Spay and neuter animals prior to placement in foster homes and/or permanent homes. **Provided services for over 600 animals during year.**"* | 2024 Form 990 |
| **활동 자원봉사자 (2025)** | **97명 / 약 10,505시간 (자체 표기 "5 Full Time Employees" 상당)** | 2025 연차보고서 |
| 활동 자원봉사자 (2024 / 2023) | **143명 / 14,821시간 (6 FTE 상당)** / **124명 / 11,996시간 (6 FTE 상당)** | **2025에 143→97 로 32% 감소.** 1인당 시간은 104→108시간으로 유지 — **몰입도가 아니라 사람 수가 빠졌다** |
| 자원봉사자 (990 신고) | **2024년 추정 140명** | 2024 Form 990. 연차보고서 143명과 정합 |
| **포스터 가정 수** | **미확인.** 연차보고서에도 990 에도 포스터 **가정 수** 지표가 없다. 폼 자기보고는 **11–30** | — |
| 포스터 중 동물 수 (외부 보도) | **"about 50 dogs in foster care"** (2024년 말 지역 보도) | **검색 스니펫으로만 확인.** 원문을 열지 못했다(HTTP 429). 수치를 콜에서 그대로 인용하지 말 것 |
| 포스터 평균 체류 | **"The average stay in a foster home is about 4-6 weeks."** 다만 *"some dogs and cats may stay only a few days. Others may stay much longer."* | 조직 사이트 Foster FAQ |
| **개별 포스터 누적 기록** | 한 부부(Amy and Steve Nelson)가 **7년간 100마리째** 포스터를 달성했다는 자체 게시물이 있다(2022-04). **동물 수이지 가정 수가 아니다** | 조직 사이트 News |
| PACK 졸업 (2025 / 2024 / 2023) | **49마리 / 37마리 / 57마리** — 조직 추정 연간 통과 규모는 **약 70마리** | 연차보고서, 조직 사이트 Programs |
| 저비용 백신 (2025) | **327마리 / 690개 접종 / 마이크로칩 59개** (2024 426마리 / 2023 355마리) | 연차보고서 |
| 이송 거리 (2025 / 2024 / 2023) | **13,210마일 / 14,717마일 / 20,008마일** | 연차보고서. **연 1.3만 마일을 직접 운전한다** |
| Empty Dish 펫 푸드 팬트리 (2025) | **232가구 / 18,775파운드** (2024 201가구·13,134lb / 2023 258가구·17,250lb). 누적 자기표기 **6만 파운드 이상** | 연차보고서, 조직 사이트 |
| **현재 공개 등재 개체 (2026-09-01 실측)** | **Adopt-a-Pet 조직 페이지(보호소 76206) — "48 adoptable pets at this rescue"** | Adopt-a-Pet(프록시) |
| Petfinder 등재 | **조직 코드 wy47.** 첫 페이지에서 개 17 / 고양이 7 = **24건** 확인. **페이지네이션을 끝까지 넘기지 못해 총수는 미확정** | Petfinder(프록시) |
| 채널 구성 | **자체 사이트 /dogs·/cats 는 ShelterLuv 임베드 위젯**이므로 ShelterLuv 원장과 자동 일치한다. **Petfinder·Adopt-a-Pet 두 곳이 추가 채널**이다 | 조직 사이트 HTML, Petfinder·Adopt-a-Pet(프록시) |
| 입양비 | **금액 미공개.** 조직 표기는 *"variable pricing"* (개체의 인기·나이·훈련·의료 투입에 따라 다름). **역산치는 2025년 건당 약 $215** | 조직 사이트 Adoption Program, 계산 |
| 서렌더 처리 | 접수 후 **72시간(영업일 3일) 내 연락**, 수락 보장 없음. 비환불 등록비 **$50** + 마이크로칩 **$25** | 조직 사이트 Rehoming |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW** | **ShelterLuv — 확정. 조직 코드 BDAR.** 폼 자기보고와 일치한다 | ShelterLuv 직접 조회 |
| ShelterLuv 커버 범위 (실측 4종) | **포스터 신청** `matchme/foster/BDAR/Dog`(사이트에서 링크) · `…/BDAR/Cat`(HTTP 200, 사이트 미링크) / **소유주 서렌더** `matchme/owner-surrender/BDAR/Dog`·`/Cat` / **입양 신청** `matchme/adopt/BDAR/Dog`(HTTP 200) / **개체 목록 임베드** `shelterluv.com/misc/shelterluv_embed.js`(사이트 /dogs·/cats). **네 동선 모두 직접 열어 조직명 "Black Dog Animal Rescue" 표기까지 확인했다** | ShelterLuv 직접 조회, 조직 사이트 HTML |
| ShelterLuv 포스터 폼 내용 | 이름·배우자/동거인·주소·시·주·**카운티**·우편번호·주/보조 전화·주/보조 이메일 — **연락처 수집 단계까지만 확인했다.** 이 단계에는 **동시 수용 두수·가용 기간·투약/포유 가능 여부 문항이 없다** | ShelterLuv 직접 조회 |
| **Maddie's Pet Assistant — 이 콜의 핵심** | 폼에 적힌 두 번째 도구. **iOS App Store 원문 직접 판독 — 버전 14.0, 버전 이력의 마지막 날짜 2020-10-01, 개발사 Pethealth Inc., 평점 69건.** 즉 **약 6년째 갱신이 없다.** 2020-10-01 부로 Maddie's Fund 가 손을 떼고 Pethealth 전담으로 넘어간 시점과 정확히 겹친다 | App Store 직접 조회, 검색 스니펫 |
| **MPA ↔ ShelterLuv 연동 방향** | **ShelterLuv → MPA 단방향 임포트다.** Maddie's Fund 안내는 *"Shelterluv will work with Maddie's Pet Assistant on the back-end to get your data importing"*(1~2영업일 소요) 이고, ShelterLuv 사용자 쪽에는 *"MPA 가 포스터에게 받은 체중을 ShelterLuv 로 되돌려 줬으면 좋겠다"*는 요청이 남아 있다. **연동 안내 문서 자체가 2018-03-06 판이다** | 검색 스니펫(maddiesfund.org·shelterluv 커뮤니티). **원문 페이지는 Cloudflare 차단·404 로 열지 못했다 — 방향성만 취하고 문구를 콜에서 인용하지 말 것** |
| MPA 가 하는 일 | 앱 설명 원문 — *"If you indicate a concern in one of our check-in surveys, you'll receive an immediate response in the app and in email… You can also receive vaccination reminders, track your pet's weight, post questions to a community forum"*. **체크인 설문·체중 기록·백신 알림 — 정확히 우리가 파는 영역이다** | App Store 직접 조회 |
| **자원봉사 관리 도구** | **Better Impact — 확정.** 사이트 **전 페이지 헤더에 "Volunteer Login"** 이 있고 `myimpactpage.com` 으로 나간다. 신청 폼은 `betterimpact.com/Application?OrganizationGuid=6645ffd8-5a4a-49c6-9a6c-5cf0bc080931&ApplicationFormNumber=1` | 조직 사이트 HTML |
| **포스터용 포털 — 결정적 공백** | **사이트 어디에도 포스터 로그인·포털 링크가 없다.** 전 페이지 HTML 문자열 검색 결과 로그인 링크는 **"Volunteer Login" 하나뿐**이다. **ShelterLuv 의 포스터 대면 기능이 계정 안에서 켜져 있는지는 확인할 방법이 없다 — 콜에서 반드시 갈라야 한다** | 조직 사이트 HTML |
| 포스터 지원 방식 (명시된 것) | 조직 사이트 원문 — *"BDAR staff is available on call 24/7 for try it once foster families."* **사람이 전화로 받는 구조**다 | 조직 사이트 Foster |
| **기부자 CRM** | **Bloomerang — 확정.** 사이트 전 페이지에 위젯 스크립트가 로드된다 (`s3-us-west-2.amazonaws.com/bloomerang-public-cdn/**blackdoganimalrescue**/.widget-js/209920.js`) | 조직 사이트 HTML |
| 입양 플랫폼 (2중 외부 등재) | **Petfinder**(wy47) + **Adopt-a-Pet**(76206). 자체 사이트는 ShelterLuv 임베드이므로 별도 채널로 세지 않는다 | Petfinder·Adopt-a-Pet(프록시) |
| 리호밍 (제3자 도구) | **Rehome by Adopt-a-Pet** — 조직이 소유주에게 리퍼럴 코드를 발급해 등록비를 최대 90% 감면해 준다 (`adoptapet.com/r/76206`) | 조직 사이트 Rehoming |
| 사이트 CMS | **Squarespace**(템플릿 v7, 내부 식별자 `molly-donnell-bdar`) | 조직 사이트 HTML |
| 분석·광고 태그 | **GA4 (G-4XS083QGV5)** + **Facebook Pixel (2418500005057416)** | 조직 사이트 HTML |
| 백신 클리닉 예약 | **온라인 예약 시스템이 확인되지 않는다.** 사이트 안내는 *"walk-ins accepted. Appointments preferred: Appointments will open in August!"* 이고, 커뮤니티 서비스 페이지의 예약 방법은 **"Call us at 307-514-4024"** 하나뿐이다 | 조직 사이트 Clinic·Community Services |
| 펫 푸드 팬트리 신청 | **현장 종이 신청 또는 온라인**, 그리고 **"Enrollment forms must be renewed at the beginning of each year"** — **연 단위 갱신 서류가 232가구분 있다** | 조직 사이트 Community Services |
| **미확인** | 이메일 마케팅 도구, 문자 발송 도구, 이송 배차 도구, 회계 소프트웨어 — 사이트에서 어느 것도 확인되지 않았다. **Bloomerang 이 이메일 발송까지 겸할 개연이 있으나 확인하지 못했다**(추론) | — |
| **검증 불가** | **spreadsheets** — 폼 자기보고뿐이고 외부에서 확인할 방법이 없다. **다만 위 도구 지형(단방향 임포트 + 포스터 포털 부재)이 스프레드시트의 존재를 강하게 설명한다** | 리드 폼 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인** | **신청자는 최종 결재자가 아니다.** Amira 는 Volunteer and Foster Manager 이고, 그 위에 **Maddi Delach(Director of Programs)**, 그 위에 **Emilee Intlekofer(Executive Director)** 가 있다. ED 는 990 신고 기준 **주 50시간 상근**이고 조직 장부 보관자로도 등재돼 있다. **콜은 실무 확인 대화이지 결재 대화가 아니다**(추론, 직접 확인 필요) |
| 이사회 | **7인 전원 독립.** 990 Part VI 8a·8b 에 **이사회 및 위원회 회의록을 문서로 남긴다**고 신고돼 있다. 회의 주기는 미확인 |
| **문서 절차 강도 — 두껍다** | 990 Part VI 기준 **이해상충 정책 있음(연 1회 서면 공시)**, **내부고발자 정책 있음**, **문서 보존·폐기 정책 있음**, **ED 보수는 독립 인사의 검토·비교자료·동시 문서화 절차를 거쳐 결정**. 990 을 **자체 사이트에 스스로 게시**하고 연차보고서를 3년치 공개한다. → **PawSafe 류의 "사람 몇 명의 판단" 조직이 아니다. 절차가 있는 조직이므로 도입 결정도 절차를 탄다**(추론) |
| **전결 한도** | **미확인.** 공개 자료 어디에도 없다 — **우리가 먼저 꺼내지 않는다** |
| 외부 조달 제약 | **없다.** 그랜트가 연 $785 에 그쳐 재단 보고 의무·공공 조달 라인에 묶이지 않는다. **대신 신규 고정비는 곧 모금 목표 증가로 읽힌다** |
| **예산 사이클** | **12월 결산.** 콜(2026-09-07)은 FY2026 9개월 차. **연간 최대 모금 행사 Bark & Wine 이 10/17** 이므로 **다음 해 예산의 실체는 10월 하순 이후에 생긴다.** "내년 예산 항목" 프레임이 자연스럽고, **9월 중 결정을 요구하면 무리다** |
| **9월 업무 밀도** | 콜 이후 3주가 본인 업무로 꽉 차 있다 — **9/12 Vaccine Clinic**(본인이 Coordinator) · **9/20 Empty Dish 배포** · **9/26 Volunteer Bash** · **10/17 Bark and Wine**. **시연·검토 일정을 이 구간에 잡자고 하면 안 된다** |
| 재무 국면 | 3년 연속 흑자·자산 $1.07M 이라 지불 능력은 있으나 **부채가 1년 새 $110K 늘었고** 수입은 2년째 평평하다. **비용 논거보다 "직원 시간" 논거가 안전하다** |
| 병목 (추정) | ①**Amira 가 원해도 ED·이사회 라인을 타야 한다** ②**이미 ShelterLuv(원장) + Better Impact(자원봉사) + Bloomerang(기부자) 3개 SaaS 를 쓰고 있어 네 번째 도구가 중복 지출로 보일 위험이 크다** ③입양 1건당 수입이 비용보다 작은 구조라 **"회전을 늘려 돈을 번다"는 논거가 통하지 않는다** (전부 추론, 직접 확인 필요) |

## 6. Amira Spargo 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **직책** | **Volunteer and Foster Manager and Vaccine Clinic Coordinator**, Black Dog Animal Rescue. **자원봉사·포스터·백신 클리닉 3개 역할 겸직** | 조직 사이트 Staff |
| 폼 자기표기와의 차이 | 폼에는 **"Foster coordinator"** 만 적었다. **자원봉사 관리와 클리닉이 빠져 있다** — 본인이 이번 대화의 범위를 포스터로 좁혀서 잡고 있다는 뜻으로 읽힌다(추론) | 리드 폼, 조직 사이트 Staff |
| 연차보고서 표기 | **2024·2025 연차보고서 모두 "Amira Zohbe, Volunteer & Foster Manager"**. 현재 성은 Spargo — 혼인 후 변경으로 읽힌다(추론) | 2024·2025 연차보고서, Zola(공개 페이지) |
| **재직 기간** | **최소 2024년 초부터**(2024 연차보고서 Staff 명단에 이미 있다). **2년 이상 같은 자리에 있고, 자원봉사자가 143→97 로 빠진 해를 이 자리에서 겪었다** | 2024·2025 연차보고서 |
| 배경 | 조직 사이트 소개 — **Atlanta, Georgia 에서 Cheyenne 으로 왔다.** 이전에 **양어장(fish hatchery)** 을 포함해 다양한 동물을 다뤘다고 적혀 있다. 취미는 요가·코바늘뜨기 | 조직 사이트 Staff |
| **다른 직원과 대비되는 점** | 다른 5명은 전원 **Cheyenne·Wyoming·Colorado 연고**로 소개된다(ED 는 *"fourth generation Cheyenne-ite"*, Maddi 는 와이오밍대 학·석사, Paige 는 *"Cheyenne native, born and bred"*). **Amira 만 외지 출신이다** — 지역 인맥 기반 자원봉사 모집에서 상대적으로 불리한 위치일 수 있다(추론, 콜에서 꺼내지 말 것) | 조직 사이트 Staff |
| 대명사 | **미확인** — 본인이 밝힌 표기를 찾지 못했다. 조직 Staff 페이지는 다른 3명에 대해서만 (she/her)를 병기하고 **Amira 소개에는 대명사 표기가 없다.** 문서 전반에서 중립 표기로 다룬다 | 조직 사이트 Staff |
| 경력·학력 | **미확인** — LinkedIn 프로필을 특정하지 못했다. 검색에서 동명이인만 나온다 | — |
| 대외 발언 | **직접 인용문이 하나도 검색되지 않는다.** 지역 언론에 인용된 BDAR 관계자는 확인되는 범위에서 전부 다른 직원이다 | 검색 전반 |
| **화법 제안** | 도구 기능 나열은 겉돈다. **본인이 지금 실제로 하는 일**을 짚는 질문이 맞다 — *"Laramie·Casper 포스터한테서 소식은 어떻게 받으세요?"*, *"MPA 로 들어온 체크인은 그다음 어디로 옮기세요?"*, *"9/12 클리닉 명단은 뭘로 관리하세요?"*. **겸직 3개 중 어느 것이 가장 시간을 먹는지 본인 입으로 말하게 하는 것이 이 콜의 최대 소득이다** | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2026-09-12 (예정)** | **Community Vaccine Clinic 09:00–13:00.** 신청자 본인이 Coordinator 다. **콜 5일 뒤** | 조직 사이트 Calendar |
| **2026-09-20 (예정)** | Empty Dish Distribution Day 10:00–12:00 | 조직 사이트 Calendar |
| **2026-09-26 (예정)** | **Volunteer Bash 13:00–15:00** — 자원봉사 담당이 본인이다. **자원봉사자 32% 감소 뒤에 열리는 행사** | 조직 사이트 Calendar |
| **2026-10-17 (예정)** | **Bark and Wine 17:00–21:00 — 연간 최대 모금 갈라, presented by Dyno Nobel.** 조직 표기 *"Bark and Wine is our largest annual fundraising event"* | 조직 사이트 2026barkandwine·Calendar |
| **2026-08 중순경** | 사이트 콘텐츠 최종 수정 시각이 이 무렵으로 찍힌다 | 조직 사이트 HTML 메타데이터 |
| **2026-03-28** | **제2회 Black Dog Bingo** — East Lincolnway Event Hall, presented by Cheyenne Dog Food Co. 입장 $20(빙고카드 15장), 8인 테이블 $400. 수익은 *"medical care and shelter for rescue dogs"* | capcity.news(2026-03-15) |
| **2026 연중** | **Michele Hankins Memorial Play Yard 공사** — 2025년 Giving Tuesday 모금으로 재원을 만들었고 ED 가 *"Construction will begin in the spring"* 이라 적었다. **현장 공사가 진행 중일 수 있다** | 2025 연차보고서, 조직 사이트 |
| **2025년 (연차보고서 요약)** | **신규 인테이크 500마리 이상 / 포스터 네트워크 확대 / 훨씬 큰 신규 이송용 밴 도입 / 첫 Black Dog Bingo 개최 / Giving Tuesday 로 플레이야드 재원 마련.** ED 원문 — *"we grew our foster network, got a brand new, much larger transport van"* | 2025 연차보고서 |
| **2025년 (수치)** | 자원봉사 **143→97명(−32%)**, 개 입양 **253→207건(−18%)**, 전출 **18→47건(2.6배)**, 저비용 백신 **426→327마리**. 수입은 $592,842→$595,134 로 사실상 동일 | 2024·2025 연차보고서 |
| **2024회계연도 (990)** | 부채가 $292,186 → **$401,705** 로 **$109,519 증가**. 수입 $555,057 / 지출 $525,933 / 흑자 $29,124 | 2024 Form 990, ProPublica API |
| **2024년 말** | **"Walk-In Wednesday" 프로그램 신설** — 매주 수요일 포스터견 **3~4마리를 본부로 데려와** 예약 없이 만날 수 있게 했다. 당시 보도가 **"about 50 dogs in foster care"**, 평소에는 만나려면 예약이 필요하다고 적었다 | **검색 스니펫.** wyomingnews.com·wyomingnewsnow.tv 원문은 HTTP 429 로 열지 못했다 |
| 2024~2026 (지역 보도) | 포스터 가정 모집 오픈하우스, Cheyenne Artists Guild 입양 드라이브, 월 1회 오픈하우스 및 18시까지 연장 운영 등이 반복 보도된다 — **포스터 모집이 상시 과제**임을 시사 | 검색 스니펫 |
| **2021-10** | **창립자 Britney Tennant 가 Cheyenne Animal Shelter CEO 로 이동.** 현재 두 조직은 상호 기부 관계로 보인다 | KGAB(2021-09-01), 2025 연차보고서 |
| **2015 가을~** | **P.A.C.K. 프로그램** 시작 — Torrington, WY 의 Wyoming Medium Correctional Institution 과 제휴, 재소자 훈련사와 **9주** 프로그램, 연 약 70마리 | 조직 사이트 Programs |
| **미확인** | Facebook·Instagram(@bdarwy) **로그인 게이트로 최근 게시물을 확인하지 못했다.** Yelp 리뷰, GreatNonprofits 등 여론 채널도 열지 못했다. **최근 1~2년 소송·행정처분·자금 논란은 검색되지 않았으나, 부정 사건이 없다고 단정하지 말 것** | — |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

각 줄은 **정황에서 끌어낸 추정**이며, 확인 필요 여부를 함께 적는다.

- **포스터 도구 스택이 구조적으로 끊겨 있다.** ShelterLuv(원장) → MPA(포스터 체크인)가 **단방향**이고, MPA 는 **6년째 미갱신**이며, 포스터가 로그인할 곳이 조직 자산에 없다. **그래서 세 번째 도구가 spreadsheets 라는 것이 가장 단순한 설명이다** — **무엇을 그 시트에 적는지 직접 확인 필요(우리 가설의 정중앙)**
- **자원봉사자에게는 Better Impact 포털이 있고 포스터에게는 없다.** 조직은 이미 "당사자가 직접 로그인해 기록을 남기는 도구"에 매년 돈을 쓰고 있다. **즉 개념 자체는 이미 팔려 있고, 대상만 빠져 있다** — **왜 포스터에는 안 붙였는지 직접 확인 필요(가격 저항인지, 시도했다 실패한 것인지가 완전히 다른 이야기다)**
- **포스터 접수 폼에 배치 판단용 문항이 안 보인다.** ShelterLuv 포스터 폼의 확인 가능한 단계는 연락처 수집까지이고, **동시 수용 두수·가용 기간·투약/포유 가능 여부·개 대 고양이 선호**가 그 단계에 없다. 반면 조직이 실제로 필요로 하는 조건은 사이트에 명시돼 있다 — *"homes that can accept dogs 35lbs+, cat free households, and homes that can quarantine puppies for 10-14 days."* **필요 조건은 아는데 접수 단계에서 그걸 묻는지 직접 확인 필요**
- **"Try It Once" 프로그램이 단기·비정형 배치를 계속 만든다.** 오리엔테이션·정식 교육 전에 먼저 한 마리를 맡겨 보는 프로그램이고, 성사되면 **멘토 배정 + 오리엔테이션 편성**이 뒤따른다. **정식 포스터와 체험 포스터가 명부에서 어떻게 구분되는지 직접 확인 필요 — 폼의 "11–30"이 어느 쪽을 센 숫자인지와 직결된다**
- **매주 수요일 포스터견 3~4마리를 본부로 데려온다(Walk-In Wednesday).** 픽업·수송·귀가를 매주 조율해야 하고, 그날 어느 개를 데려올지 고르는 판단이 매주 반복된다 — **누가 무엇을 보고 고르는지 직접 확인 필요**
- **연 1.3만 마일을 직접 운전한다.** 2025년 이송 거리 13,210마일(2023년은 20,008마일)이고 2025년에 **더 큰 이송용 밴을 새로 들였다.** Laramie·Casper 포스터 방문, 교도소 왕복, 입양 드라이브가 전부 여기 들어간다 — **배차·일정 관리를 무엇으로 하는지 직접 확인 필요**
- **개체가 네 종류 장소 사이를 오간다.** 본부 Kitty City / Cheyenne 포스터 / Laramie·Casper 포스터 / Torrington 교도소(9주). **교도소 위탁 9주 동안의 상태 기록이 어디에 남는지 직접 확인 필요** — 재소자 훈련사가 직접 입력할 수 없는 환경이므로 **여기가 가장 아플 자리로 보인다**
- **채널이 3중이고 그중 2개는 외부다.** 자체 사이트는 ShelterLuv 임베드라 자동이지만 **Petfinder(wy47)·Adopt-a-Pet(76206)** 두 곳이 별도로 있고, **오늘 실측한 등재 수가 Adopt-a-Pet 48건 / Petfinder 첫 페이지 24건**이다 — **자동 연동인지 수동 갱신인지 직접 확인 필요**
- **백신 클리닉 예약에 온라인 시스템이 안 보인다.** 안내가 *"Appointments will open in August!"* 인데 예약 경로는 **전화 한 통**뿐이고, 2025년 실적이 **327마리·690개 접종**이다. **콜 5일 뒤가 클리닉이므로, 지금 그 명단이 어디에 있는지 물으면 답이 바로 나온다** — **직접 확인 필요**
- **펫 푸드 팬트리가 연 단위 종이 갱신을 요구한다.** *"Enrollment forms must be renewed at the beginning of each year"* 이고 2025년 수혜가 **232가구**다. 매년 1월에 232건의 서류 갱신이 발생한다 — **직접 확인 필요(우리 제품 범위 밖일 수 있으나 담당자 업무량을 가늠할 재료다)**
- **자체 뉴스 블로그가 2024-10 이후 멈춰 있다.** 사이트 자체는 2026-08 까지 손대고 있는데 스토리 게시만 멈췄다 — **소통이 SNS 로 옮겨갔고, 개체 스토리 작성이 후순위로 밀린 상태로 읽힌다.** 사소한 건이라 콜에서 먼저 꺼낼 일은 아니다

## 미확인 요약 (콜에서 확인할 것)

1. **"포스터 11–30"이 무엇을 센 숫자인가** — 가정 수인가 동물 수인가, 지금 동물을 데리고 있는 집인가 명부 전체인가, Cheyenne 만인가 Laramie·Casper 포함인가, "Try It Once" 체험 가정이 포함되는가. **2025년 인테이크 535마리가 전량 포스터를 거치고 평균 체류가 4–6주인데 11–30 이라면 한 집이 여러 마리를 동시에 데리고 있다는 뜻이다.** 첫 30초 안건
2. **Maddie's Pet Assistant 를 실제로 쓰고 있는가, 켜만 놓고 방치된 상태인가** — 앱이 2020-10 이후 갱신이 없다. 포스터가 실제로 체크인 설문에 답하고 있는지, **그 답변을 담당자가 어디서 보는지**, 그것이 ShelterLuv 개체 기록으로 옮겨지는지. **답에 따라 우리 제안의 자리가 통째로 바뀐다** — 쓰고 있다면 "그 답변이 원장으로 안 돌아오는 문제", 안 쓰고 있다면 "그 자리가 비어 있는 문제"다
3. **spreadsheets 에 정확히 무엇을 적는가** — 포스터 명부인가, 개체별 상태인가, 투약 일정인가, 클리닉 예약자 명단인가, 자원봉사 배치인가. **본인이 지금 열어 놓고 있는 시트가 몇 개인지**부터 묻는다
4. **Laramie·Casper 포스터에게서 소식이 어떻게 들어오는가** — 문자인가 전화인가 앱인가. **Cheyenne 밖 가정을 마지막으로 직접 본 것이 언제인지**. 사무실이 없는 두 도시가 이 조직의 분산 케어 문제를 가장 날카롭게 드러내는 자리다
5. **교도소(PACK) 위탁 9주 동안의 기록이 어디에 남는가** — 재소자 훈련사가 시스템에 직접 입력할 수 없는 환경이다. 연 약 70마리가 이 경로를 지난다
6. **자원봉사자가 143→97명으로 빠진 원인을 본인이 어떻게 보고 있는가** — 이 질문은 조심스럽게. **"자원봉사와 포스터를 겸직하시는데 시간이 어느 쪽으로 더 쏠리나요"** 로 우회해 묻는 것이 안전하다
7. **ShelterLuv 안에서 포스터 대면 기능(포스터 로그인·상태 입력)이 켜져 있는가** — 사이트에는 링크가 없지만 계정 내부 설정은 외부에서 볼 수 없다. **접수 폼이 있는 것과 포스터가 들어가 기록을 남기는 것은 전혀 다른 문제다**
8. **Better Impact 를 포스터에게 확장하는 것을 검토해 봤는가** — 이미 쓰는 도구가 있는데 왜 포스터에는 안 붙였는지. **가격 때문인지, 맞지 않아서인지, 생각해 본 적이 없는지**가 전부 다른 답이다
9. **도구 도입 결정을 누가 하는가** — Amira → Maddi Delach(Director of Programs) → Emilee Intlekofer(ED) → 이사회 중 어디까지 올라가는가. 이사회 개최 주기는 언제인가. **12월 결산이고 최대 모금 행사가 10/17 이므로 예산 논의 시점도 함께 확인**
10. **Petfinder·Adopt-a-Pet 등재를 누가 갱신하는가** — 자체 사이트는 ShelterLuv 임베드라 자동인데 외부 두 채널도 자동인지, 오늘 실측 수치(Adopt-a-Pet 48건)가 실제 보유 두수와 맞는지
11. **9/12 백신 클리닉 예약자 명단을 무엇으로 관리하는가** — 콜 5일 뒤 일이라 답이 구체적으로 나온다. **도구 이야기를 추상론이 아니라 이번 주 업무로 끌어내리는 가장 쉬운 질문**
12. **소재 B(임시보호자 업데이트 수집)에 반응한 이유** — 지금 업데이트가 안 들어와서인지, 들어오는데 흩어져서인지, 들어온 걸 옮겨 적는 게 힘들어서인지. **세 가지가 완전히 다른 문제이고 우리 제품이 닿는 자리도 다르다**
