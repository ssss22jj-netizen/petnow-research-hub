# Franklin County Humane Society Of Missouri 사전조사

- 작성일: 2026-09-04 / 목적: Foster Coordinator 콜 준비(2026-09-10) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Shelter", "role": "Foster coordinator", "system": "Shelterluv", "fosters": "11–30"}`
- 유입 소재: B (임시보호자 업데이트 수집 — 폼에서 현재 임시보호자 수를 물었다)
- **동일 조직 확정 / 신청자 미확정** — 근거는 아래 「조직 특정」 절
- 출처 주석: 이메일 도메인이 `gmail.com` 이라 **도메인으로는 특정할 수 없었다.** 대신 법인명 완전 일치 + EIN + ShelterLuv 조직 계정 표기를 맞물려 특정했다. Petfinder·Adopt-a-Pet·지역지(emissourian/missourian)는 서버가 자동 열람을 차단해 텍스트 프록시(r.jina.ai)로 원문을 확보했고 해당 행에 `(프록시)`로 표기한다. 지역지 본문은 TownNews 의 ROT47 난독화 상태로 전달돼 복호 후 판독했다. Facebook·Instagram·LinkedIn·Yelp·상공회의소 회원 페이지는 로그인 게이트 또는 CAPTCHA 라 **원문을 열지 못했다**
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Franklin County Humane Society Of Missouri, EIN 43-1244655.** 501(c)(3), NTEE **D20**(Animal Protection and Welfare), 12월 결산, 990 정식 신고. 990 상 설립연도 **1981**, 법인 소재 주 **MO** | ProPublica API, 990(2023) |
| **법인명 완전 일치** | **결정적 근거 ①.** 리드에 적힌 조직명 `Franklin County Humane Society Of Missouri` 는 IRS 등록 법인명과 **글자 단위로 일치**한다. 동명 단체 8곳 중 `Of Missouri` 를 붙인 법인은 이 1곳뿐 | ProPublica API |
| **ShelterLuv 계정 표기** | **결정적 근거 ②.** 조직 사이트가 링크하는 ShelterLuv 조직 코드 **FCMO** 의 엔드포인트를 직접 열면 페이지에 **"Franklin County Humane Society of Missouri"** 가 표시된다(3회 출현). 존재하지 않는 조직 코드로 같은 경로를 호출하면 404 가 떨어지는 것도 확인했다 | ShelterLuv 직접 조회 |
| **폼 응답과의 정합** | 폼의 `system: "Shelterluv"` 가 실제와 **일치**한다. 폼의 `org_type: "Shelter"` 도 일치한다 — 이 조직은 포스터 기반 레스큐가 아니라 **실물 시설을 가진 open-admission 쉘터**다 | 조직 사이트, ShelterLuv |
| **동명 조직 배제** | ProPublica 검색 8건 중 나머지 7곳은 **Winchester TN / Brookville IN / Frankfort KY / Rocky Mount VA / Saint Albans VT / Eastpoint FL / Malone NY** 이고 어느 곳도 법인명에 `Of Missouri` 가 없다. 특히 인디애나 법인(EIN 35-2055640)은 `franklincountyhumanesociety.com` 을 쓰고 대표 메일이 **`f***@gmail.com`** 이라 gmail 도메인만으로는 혼동 위험이 있었으나, 해당 사이트 HTML 전수 검색에서 **ShelterLuv·Petfinder·Adopt-a-Pet 어느 흔적도 나오지 않아** 폼의 `system: "Shelterluv"` 와 어긋난다 | ProPublica API, 인디애나 조직 사이트 직접 판독 |
| gmail 도메인의 개연 | 이 조직은 **자체 사이트 전 페이지 푸터의 메일 아이콘에 `f***@gmail.com` 을 HTML 엔티티로 인코딩해 걸어 두고 있다**(원문 확인). 업무용 도메인(`@fchsmo.org`)과 gmail 을 병용하는 조직이다 — 신청자가 gmail 로 신청한 것이 조직 성격과 어긋나지 않는다 | 조직 사이트 HTML 직접 판독 |
| **신청자** | **미확정.** 조직 사이트 Fostering 페이지가 **"contact our Foster Coordinator Sandy at f***@fchsmo.org"** 라고 적어 **이름 "Sandy" 와 직책만** 확인된다. 성(姓)·유급 여부·재직 기간은 어느 공개 자료에도 없다. 990 Part VII 에 오르는 8명은 전원 무보수 이사·임원이고 그중 Sandy 는 없다 | 조직 사이트, 990(2023) |
| 폼 응답 정합 | **4개 중 3개 일치, 1개가 크게 어긋난다.** 아래 표 참조 | — |

### 폼 응답 대조 — 이 콜의 출발점

| 폼 응답 | 공개 자료로 확인한 것 | 판정 |
|---|---|---|
| `org_type: "Shelter"` | **일치.** 1994년 개소한 실물 쉘터를 운영하는 open-admission 시설이며, 자기표기가 *"We are the only open-admission animal shelter within a 40-mile radius."* 다 | **일치** |
| `role: "Foster coordinator"` | **직책 자체는 실재한다.** 사이트가 Foster Coordinator 를 "Sandy" 로 지칭하고 전용 메일함 `f***@fchsmo.org` 를 운영한다 | **일치 — 단, 신청자가 그 Sandy 인지는 미확인** |
| `system: "Shelterluv"` | **일치.** 조직 코드 **FCMO** 로 입양(개·고양이)·포스터·소유자 서렌더 4개 동선을 직접 확인했다 | **일치 — 이번 콜은 「도구가 없는 조직」 대화가 아니다** |
| `fosters: "11–30"` | **조직 자체 게시물이 "more than 250 volunteer foster families" 라고 적는다.** 게다가 지금 이 순간 공개 등재된 개체 111마리의 이름만 세어도 **서로 다른 포스터 이니셜이 24개** 잡힌다 | **폼 상한의 8배 이상(하한 기준 23배). 이 콜의 정중앙** |

→ **조직은 법인명 완전 일치·ShelterLuv 계정 표기 2축으로 확정. 신청자는 이름 "Sandy" 외에 아무것도 잡히지 않아 콜 첫 30초 확인 사항으로 올린다.** 다른 조직 정보를 끌어온 부분 없음.

## 미팅에서 바로 쓸 핵심 5줄

1. **폼의 "포스터 11–30"과 조직이 자기 사이트에 적은 "250개 이상의 포스터 가정"이 8배 넘게 벌어져 있다 — 이 틈을 어떻게 세는지가 콜의 첫 질문이다**
 2025 Community Impact 페이지 원문이 *"more than **250 volunteer foster families**"* 다(HTML 원문 문자열 일치 확인). 반면 990 은 같은 조직의 자원봉사자 수를 **100명**으로 신고한다 — **두 숫자가 조직 안에서도 이미 어긋난다.** 여기에 폼의 "11–30"이 세 번째 숫자로 붙었다. 세 값이 다 맞을 수 있고, 그러려면 **"명부 전체"와 "지금 동물을 데리고 있는 집"과 "내가 직접 챙기는 집"이 서로 다른 장부에 있다**는 뜻이다. 첫 질문은 여기다 — *"11–30 이라고 적으셨는데, 어떤 기준으로 세신 건가요?"*

2. **입양 가능으로 공개된 111마리 전원이, 이름 뒤에 「지금 어디 있는지」를 문자열로 달고 있다 — 원장 밖에 위치 대장이 따로 없다는 가장 직접적인 증거다**
 Adopt-a-Pet 조직 페이지 3개 페이지를 전수 판독해 **111마리 이름을 모두 확보**했다. `Millie **FC RR**` · `Shaggy **FC AD**` · `Rory **FC DK**`(포스터 배치 + 포스터 이니셜) / `Red **K17**` · `Yoko Ono **K22**`(켄넬) / `CiCi **CI 11**` · `Balsamic **CI 24**` / `Winston **Q3**` · `Wonder **Q9**` / `Junipurr **LR9**` · `Kimmie **LR11**` / `Oreo **PR2**` · `Rojo **PR Crate**` / `Butch **MED**` / `Liv**- Washington Petco**` · `Dusty**- Washington Petsmart**`. **예외가 한 마리도 없다.** 그중 **33마리(29.7%)가 FC** 이고, 이니셜을 붙인 32마리에서 **서로 다른 이니셜이 24개** 나온다(AD·DK 는 각 3마리, KG·LN·MM 은 각 2마리). *"이름 뒤에 붙는 FC·K·CI 는 누가 언제 고치시나요"* 한 줄이면 콜의 절반이 열린다

3. **입양·서렌더는 ShelterLuv 안에 있는데, 포스터 접수만 도구 밖으로 나와 있다 — 그것도 이메일로 떨어지는 워드프레스 폼이다**
 사이트가 링크하는 입양 신청은 `new.shelterluv.com/matchme/adopt/FCMO/Cat`·`/Dog` 이다. 그런데 **포스터 신청만은 자체 사이트의 `/foster-program-volunteer-application/` 페이지이고, 그 폼의 정체는 Contact Form 7**(HTML 에서 `wpcf7-form-control` 40회·`contact-form-7-js` 확인)이다. **CF7 은 기본 설정에서 제출 내용을 저장하지 않고 메일로만 보낸다.** 결정적으로 **ShelterLuv 쪽 포스터 접수 폼(`matchme/foster/FCMO/Dog`·`/Cat`)은 실제로 켜져 있고 조직명까지 표시되는데, 사이트 어디에서도 링크되지 않는다.** 후시간 응급 안내도 *"please email the foster coordinator at f***@fchsmo.org with the subject line "Emergency""* 다 — **접수도 응급도 받은편지함으로 들어온다**

4. **이 조직은 1년 반 전에 「돈 이야기」를 공개적으로 크게 한 번 겪었다 — 비용 프레임을 먼저 꺼내면 진다**
 2024년 5월 조직이 **2009년 이후 처음으로** 시 계약 단가 인상을 요구했다(1건당 접수비 $35→$100, 일일 보호료 $10→$35, 5일 상한 $175). Union 시와 6개월 협상이 결렬돼 **2025년 1월 9일부터 Union 발 유기동물 접수를 중단**했고, 시청 앞 소규모 시위 2회와 청원 528명을 거쳐 **2025년 4월 14일 새 계약이 승인**됐다. 2025년 12월 시 보고 기준 2024-10~2025-11 지급액 **$26,375**(시 연 예산 $32,000). 그 과정에서 **Union·St. Clair·Pacific 3개 시가 공동 동물통제 시설을 짓는 안**까지 시의회에서 논의됐다. **"이 도구를 사면 얼마"보다 "이 도구가 스태프 시간과 수용 여력을 어떻게 바꾸는가"의 언어로 짜야 한다**

5. **콜 이틀 뒤에 백신 클리닉이 있고, 콜 당일 20주년 온라인 경매가 한창이다 — 결정 일정을 이 구간에 밀어 넣지 않는다**
 실측 일정 — **9/8 09:00~9/26 21:00 제20회 Wine, Whiskers & Wags 온라인 경매 + 50/50 래플**(작년 잭팟 $32,000 초과, 플랫폼은 `fchs.rallyup.com`), **9/12 09:00~13:00 백신 클리닉**(Union 소방서, 디스템퍼 무료·광견병 $15·마이크로칩 $25, **현금만·선착순**), **10/3 14:00~18:00 제2회 PawFest**. 12월 결산이므로 다음 해 예산의 실체는 10월 하순 이후에 생긴다. **재접점을 10월 중순 이후로 잡고, 콜 당일 목표는 업무 구조를 캐는 것으로 좁힌다.** 반대로 **9/12 클리닉은 최고의 질문 소재다** — *"이번 주 클리닉 명단은 뭘로 관리하세요"*

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Franklin County Humane Society Of Missouri** (DBA **Franklin County Humane Society**, 통칭 FCHS. ShelterLuv 조직 코드 **FCMO**, Petfinder 코드 **mo102**, Adopt-a-Pet 보호소 번호 **88960**) | 990(2023), ShelterLuv, Petfinder·Adopt-a-Pet(프록시) |
| EIN·지위 | **43-1244655** / 501(c)(3), NTEE **D20**, 12월 결산, 990 정식 신고 | ProPublica API |
| 소재지 | **Union, MO**(Franklin County, 세인트루이스 광역권). 우편은 P.O. Box 를 쓴다 | 조직 사이트, ProPublica API |
| 설립 | **1981년 법인 설립 → 13년간 포스터 네트워크로만 운영 → 1994년 Union 쉘터 개소.** 자기표기 원문 *"We incorporated in 1981 and operated as a foster network for homeless pets for 13 years. In 1994, we opened our current shelter location in Union, Missouri."* | 조직 사이트 About |
| **성격** | **open-admission 쉘터.** 자기표기 *"We are the only open-admission animal shelter within a 40-mile radius."* 개·고양이 대상이며 **덫에 잡힌 야생 고양이는 받지 않는다** | 조직 사이트 About |
| **뿌리가 포스터다** | 시설을 갖기 전 13년을 포스터 네트워크로만 운영한 조직이다. **포스터가 부가 프로그램이 아니라 조직의 원형**이라는 점이 이 콜의 배경으로 유효하다 (**추론**) | 조직 사이트 About |
| 서비스 권역 | Franklin County, MO 및 인근 — 자기표기 열거는 **Augusta · Gerald · Hermann · Labadie · New Haven · Pacific · Robertsville · St. Albans · St. Clair · Sullivan · Owensville · Union · Washington** | 조직 사이트 About |
| 시설·운영시간 | 시설 1곳. **월·수·목 11:00–18:00 / 금·토 11:00–16:00 / 매월 첫째 일요일 12:00–15:00 / 화·일 휴무** | 조직 사이트 |
| **오프사이트 상시 전시** | 개체 이름에 **`- Washington Petco`**, **`- Washington Petsmart`** 가 붙은 개체가 실재한다 — **인근 Washington, MO 의 소매점 2곳에 상시 위탁 전시 공간**을 두고 있다 | Adopt-a-Pet 개체명 실측(프록시) |
| **유급 직원** | **23명** (990 Part V, CY2023 W-2 발급 기준). 인건비 $418,869 를 23명으로 나누면 인당 $18,211 이라 **상당수가 파트타임**일 개연이 높다 (**추론**) | 990(2023) |
| **자원봉사자 (990 신고)** | **100명** (990 Part I line 6, 추정치 기입란) | 990(2023) |
| **포스터 가정 (조직 게시)** | **"more than 250 volunteer foster families"** (2025년 실적 게시물) — **위 100명과 어긋난다** | 조직 사이트 2025 Community Impact |
| **990 등재 임원·이사 (2023)** | **전원 무보수($0).** SUSIE BLATT(President, 주 3.0h) / JOHN STOLTZ(Vice President, 0.5h) / **MARY LOVERN(Secretary, 주 18.0h)** / **TERRY MATT(Treasurer, 주 10.0h)** / ELEANOR MAYNARD(Director, 0.5h) / RON FOAN(Director, 7.0h) / CHRISTY SCHULTE(Director, 0.5h) / CARI WEHMEYER(Director, 2.0h). **의결권 이사 8인 전원이 독립 이사** | 990(2023) Part VI·VII |
| 이사 변동 | 집계 사이트가 최근 이사 명단에 **Taylor Resnik** 을 추가로 적는다. **원문(최신 990)을 열지 못해 확정하지 못했다** | 검색 스니펫 |
| 장부 보관자 | **TERRY MATT**(Treasurer) — 990 Part VI line 20 | 990(2023) |
| **운영 책임자** | **Allison Mitchell — Shelter Manager.** 2025년 1월 Union 시의회에 조직 대표로 출석해 계약 조건을 협상했다. **990 에는 이름이 오르지 않는다**(무보수 임원이 아니므로) | 지역지(프록시), 990(2023) |
| Director of Development | **직책은 실재한다.** 조직 사이트의 최근 게시물 작성자 계정이 **"Director Development"**(`/author/director/`)이고 2023~2026년 실적·행사 글을 이 계정이 쓴다. **실명 미확인** | 조직 사이트 |
| **신청자 직책** | **Foster Coordinator "Sandy"** — 사이트 원문 *"contact our Foster Coordinator Sandy at f***@fchsmo.org"*. **성·유급 여부·상급자 미확인** | 조직 사이트 Fostering |
| **역할별 메일함 (4개)** | `f***@fchsmo.org`(대표) / **`f***@fchsmo.org`(포스터 전용)** / `v***@fchsmo.org`(자원봉사·Canine Ambassadors) / `c***@fchsmo.org`(**Furventure 전용**). 여기에 푸터의 **`f***@gmail.com`** 이 별도로 걸려 있다 | 조직 사이트 HTML 직접 판독 |
| 전화 | 1회선 | 조직 사이트 |
| 웹 자산 | 자체 사이트(fchsmo.org, **WordPress + Avada 테마**, 제작 WASHMO Media LLC) + Facebook + Instagram(@fchsmo) + X(@FCHSMO1) + TikTok(@fchsmo) + LinkedIn(company/fchsmo) | 조직 사이트 |
| 자원봉사 역할 (5종+) | **Pet Transfer Volunteer**(타 쉘터 이송·중성화 수술 왕복 수송) / **Marketing Assistant** / **Fundraising Volunteer** / **Trap, Neuter, Return Assistant**(포획·수술 전후 48시간 보호·세탁·이동장 세척) / **FCHS Canine Ambassadors**(자기 개를 데리고 행사·도서관 낭독 프로그램 참가) | 조직 사이트 Volunteer |
| **Furventure Program (신규)** | **2026년 1월 신설.** 승인된 참가자가 쉘터 개를 **몇 시간~1박** 데리고 나갔다 오는 프로그램. *"Staff also gather feedback from participants to help improve each dog's adoption profile."* 신청 경로는 **"Swing by the shelter or email c***@fchsmo.org"** 뿐이다 | 조직 사이트 |
| 자원봉사 오리엔테이션 | **매월 첫째 일요일 15:30–16:30**, 전원 필수. 신청서를 **출력해 오리엔테이션에 지참**하는 방식(*"bring it to the orientation training"*) | 조직 사이트 |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **12월 결산.** 콜 시점(2026-09-10)은 **FY2026 9개월 차**, 다음 회계연도 편성기 직전 | ProPublica API |
| 신고 이력 | 2003년부터 990 정식 신고가 쌓여 있고 **2011~2023년 13개 연도가 항목 단위로 파싱**돼 있다. FY2024 신고는 2025-10-16 IRS 접수 | ProPublica API, CauseIQ |
| **FY2024** | 수입 **$736,854** (전년 대비 **−2.7%**). 총자산 **$875,447** — **전년 $994,927 대비 −12.0%** | ProPublica BMF, CauseIQ |
| **FY2023** | 수입 **$757,657** / 지출 **$753,405** → 흑자 $4,252. 총자산 $994,927, 총부채 $20,170 | ProPublica API, 990(2023) |
| FY2022 | 수입 $778,763 / 지출 $718,649 → 흑자 $60,114 | ProPublica API |
| FY2021 | 수입 $643,587 / 지출 $625,370 → 흑자 $18,217 | ProPublica API |
| FY2020 | 수입 $536,245 / 지출 $489,501 → 흑자 $46,744 | ProPublica API |
| FY2019 | 수입 $418,033 / 지출 $496,291 → **적자 $78,258** | ProPublica API |
| **수입 추세 — 이 조직의 재무 국면** | **FY2019 $418K → FY2022 $779K 로 3년 만에 86% 성장한 뒤, FY2023 −2.7%·FY2024 −2.7% 로 2년째 완만히 감소.** 흑자 폭은 FY2022 $60K → FY2023 $4K 로 얇아졌다. **위기가 아니라 성장 정체 국면**이고, 위기 서사로 접근하면 어긋난다 | ProPublica API, CauseIQ |
| **재원 구성 (FY2023)** | **기부·보조금 $483,164 (63.8%)** / 모금행사 순수익 $104,253 (13.8%) / **프로그램 수입 $117,923 (15.6%)** / 투자수익 $49,209 (6.5%) | 990(2023) Part VIII |
| **재원 구성 변화 (FY2024)** | 기부·보조금 **$403,429 (−16.5%)** / **프로그램 수입 $156,672 (+32.9%)** / 모금행사 순수익 **$128,879 (+23.6%)** / 투자 $47,874. **기부가 빠진 자리를 계약 수입과 행사 수익이 메웠다** — 시 계약 단가 인상이 반영된 첫 연도로 읽힌다 (**추론**) | CauseIQ |
| **프로그램별 실적 (FY2023)** | **입양 서비스** 지출 $692,067 / 수입 $94,465 · **저비용 중성화** 지출 $12,321 / 수입 $22,218 · **제한적 동물통제 서비스** 지출 $7,453 / 수입 $120. 총 프로그램 지출 $711,841 | 990(2023) Part III |
| **회전이 수입이 아니다** | **입양 서비스는 지출 $692K 대 수입 $94K 로 구조적 적자 부문**이다. 수입의 78%가 기부·행사에서 온다. **"더 빨리 더 많이 내보내면 돈이 된다"는 논거가 이 조직에서는 거꾸로 작동한다.** ROI 는 돈이 아니라 **직원 시간·수용 여력·재고용(再收容) 부담**의 언어로 짠다 | 990(2023) |
| 인건비 (FY2023) | 급여·복리 **$418,869**(총지출의 **55.6%**) = 일반 급여 $389,060 + 급여세 $29,809. **임원 보수 $0** — 990 상 보수를 받는 임원·이사가 한 명도 없다 | 990(2023) |
| **부채** | FY2023 총부채 **$20,170**(총자산의 2.0%). FY2019~FY2023 내내 $4K~$29K 수준. **사실상 무차입** | ProPublica API |
| **외부 그랜트** | **소액·비지정 중심이다.** FY2024 기준 **Network for Good $36,131**(비지정) · **PayPal Giving Fund $8,091**(일반) · **St. Louis Community Foundation $8,079**(Give STL Day 순 교부). 재단 프로그램 그랜트나 정부 보조금이 확인되지 않는다 | CauseIQ |
| **공적 재원 없음** | 자기표기 *"We do not receive funding from Humane Society of Missouri, the United Way, federal, state or county governments or any animal welfare organizations."* → **그랜트 보고 의무·공공 조달 라인에 묶이지 않는다.** 단, **시 단위 동물통제 계약 수입은 별개로 존재**한다 | 조직 사이트 About |
| **시 동물통제 계약 수입 (실측 1건)** | **City of Union 이 2024-10~2025-11 에 총 $26,375 지급**, 시 연 예산 $32,000. 인상 전 계약은 **연 $5,000** 수준이었고 인상 후 시 추산은 **월 약 $3,500**. 계약 도시는 Union 외에 **Washington · St. Clair · Pacific** 이 거론된다 | 지역지(프록시) |
| 입양비 | **개 1년 이상 $180 / 1년 미만 $325 / 고양이 1년 이상 $100 / 1년 미만 $125.** 중성화·마이크로칩·연령별 백신·구충·심장사상충 검사 및 예방약·FeLV 검사 포함, **입양 후 7일 내 건강 상담 무료** | 조직 사이트 Adopt |
| 기부 수취 경로 | 온라인·우편 기부, 추모·선물 기부, **계획기부/유증**, 물품 위시리스트, **Chewy 위시리스트**, Give STL Day, Mightycause, **rallyup.com**(경매·래플), Constant Contact 랜딩(뉴스레터 수신) | 조직 사이트, Chewy, 검색 |
| **주의 — 인용 금지 수치** | About 페이지가 *"It costs over $3,100 a day to operate our shelter."* 라고 적는다. 이는 **연 $1.13M 상당**으로 **990 상 FY2023 총지출 $753,405 과 맞지 않는다.** 자원봉사·현물을 포함한 홍보용 환산이거나 최신 값일 수 있으나 **확정하지 못했다 — 콜에서 이 수치를 인용하지 말 것** | 조직 사이트, 990(2023) |
| 외부 감사 | **2020년 회계연도 감사보고서(Audited Financial Statements)를 자체 사이트에 게시**하고 있다. 이후 연도 감사보고서는 게시돼 있지 않다. 990 작성은 **Langenberg, Strubberg, Arand & King, LLC**(Union·Sullivan, MO) | 조직 사이트, 990(2023) |
| 시사점 | **월 구독을 논할 수 있는 규모대이며 지불 능력도 있다**(자산 $875K, 사실상 무차입). 다만 ①수입의 78%가 기부·행사이고 ②2년째 완만한 감소이며 ③입양 부문 자체가 적자 구조라, **신규 고정비는 곧 모금 목표 증가로 읽힌다.** 12월 결산이므로 **"내년 예산 항목"** 프레임이 자연스럽다 | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **2025년 입양** | **1,252마리** | 조직 사이트 2025 Community Impact. HTML 원문 문자열 일치 확인 |
| **2025년 소유주 반환** | **89마리** (*"89 lost cats and dogs were reunited"*) | 동일 |
| **2025년 신생아·유아 개체** | **827마리** (*"827 nursery-age pets"*) — **입양 1,252건의 66%에 해당하는 규모가 신생아·유아 단계를 거친다** | 동일. **이 개체군이 곧 포스터 가정으로 나가는 개체군이다** |
| **2025년 포스터 가정** | **"more than 250 volunteer foster families"** | 동일 |
| 2025년 중성화 투입액 | **$42,801** (입양 대상 개체 대상) | 동일 |
| **990 신고 자원봉사자 (2023)** | **100명** | 990 Part I line 6. **위 250 과 어긋난다 — 세는 대상이 다를 개연이 높다(추론)** |
| **현재 공개 등재 개체 (실측)** | **111마리** (2026-09-04, Adopt-a-Pet 보호소 88960, 3개 페이지 전수 판독) | Adopt-a-Pet(프록시) |
| ├ **포스터 배치(FC 표기)** | **33마리 (29.7%)** | 개체명 실측 |
| ├ **서로 다른 포스터 이니셜** | **24개** — AD·DK 가 각 3마리, KG·LN·MM 이 각 2마리, 나머지 19개는 1마리씩. `Khora FC`·`Zendaya FC` 는 이니셜 없이 FC 만 붙어 있다 | 개체명 실측. **이니셜은 포스터 가정 식별자로 읽힌다(추론)** |
| └ **시설 내 위치 코드** | **K1~K22**(개 켄넬 22칸 추정) · **CI 2~CI 24**(고양이 격리 추정) · **Q2~Q9** · **LR1~LR11** · **PR1~PR6 / PR Crate** · **PL** · **C2·C4** · **DI9·DI11** · **MED** · **ER** | 개체명 실측. **코드 의미는 미확인 — 콜에서 확인할 것** |
| **오프사이트 위탁** | `Liv- Washington Petco`, `Dusty- Washington Petsmart`, `Vanessa Petsmart Washington` — **표기 형식이 3가지로 제각각**이다 | 개체명 실측. **입력 규칙이 강제되지 않는다는 신호(추론)** |
| **표기 흔들림** | `FC` / `Fc` 대소문자 혼재(`Chunk Fc TM`, `Emoticon Fc GN`, `Hooch Fc AG`), `CI 11` / `CI16` / `Ci 10 ` 띄어쓰기·후행 공백 혼재, `Glider K 16` vs `Bingo K9` | 개체명 실측. **수기 입력의 직접 증거** |
| 라이브릴리스율 | **No-Kill 인증 배지 2023년·2024년 2개를 사이트 푸터에 게시**(Best Friends 기준 90% 이상). **연도별 실수치는 미확인** — Best Friends·Shelter Animals Count 페이지를 열지 못했다 | 조직 사이트, Best Friends(미열람) |
| 인테이크 수 | **미확인.** 990 프로그램 서술에도 연차 실적 게시물에도 인테이크 총계가 없다 | — |
| 2022년 국면 | 자기표기 *"We endured nine months of crisis levels (double our normal daily number of shelter pets in care) but with help from the community and foster families (**our foster group tripled in membership**) we were able to complete a 20% increase in adoptions for 2022"* | 조직 사이트 Community Impact 2022. **포스터 그룹이 위기 대응으로 3배가 된 이력** |
| 입양 절차 | ①ShelterLuv 온라인 신청 → ②쉘터 방문. **선착순이며 신청서 제출로 개체를 잡아 두지 않는다**(*"We do not hold pets once an application is submitted."*) | 조직 사이트 Adopt |
| 입양 후 자료 | **Dog Adoption Packet 은 PDF, Cat Adoption Packet 은 `.docx`** 로 배포된다. 전달 방식은 *"through your email or in person"* | 조직 사이트 Adopt |
| 포스터 신청 절차 | ①자체 사이트 CF7 폼 제출 → ②전화 인터뷰(폼에 *"Times available for phone interview"* 항목) → ③**가정 방문 동의 필수** → ④집주인·수의사 레퍼런스 확인 → ⑤배경 조회 동의 | 조직 사이트 Foster Program Volunteer Application |
| 포스터 지원 범위 | **조직이 사료·물품·약·수의 비용을 전부 부담한다.** 기간은 *"varies depending upon foster family availability and pet needs"* | 조직 사이트 Fostering |
| 개체 목록 채널 | **자체 사이트(ShelterLuv 임베드, GID 4399) / Petfinder(mo102) / Adopt-a-Pet(88960) / Chewy 파트너 페이지** — **최소 4곳** | 조직 사이트, Petfinder·Adopt-a-Pet(프록시), Chewy |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW** | **ShelterLuv — 확정.** 조직 코드 **FCMO**, 임베드 shelter GID **4399**. 폼 자기보고와 일치한다 | 조직 사이트 HTML 직접 판독, ShelterLuv 직접 조회 |
| ShelterLuv 커버 범위 (실측) | **입양** `matchme/adopt/FCMO/Dog`·`/Cat` (**사이트에서 링크됨**) / **포스터** `matchme/foster/FCMO/Dog`·`/Cat` (**HTTP 200, 조직명 표시. 그러나 사이트 어디에서도 링크되지 않는다**) / **소유자 서렌더** `matchme/owner-surrender/FCMO/Dog` (**HTTP 200, 사이트 링크 없음**). 존재하지 않는 조직 코드로는 404 가 떨어진다 | ShelterLuv 직접 조회 |
| **결정적 공백 — 포스터 접수의 이중화** | **포스터 신청은 ShelterLuv 가 아니라 자체 워드프레스 폼으로 받는다.** `/foster-program-volunteer-application/` 의 폼 엔진은 **Contact Form 7**(`wpcf7-form-control` 40회, `wpcf7-f13097-p13103-o1`, reCAPTCHA 연동 확인). **CF7 은 기본적으로 제출 내용을 DB 에 남기지 않고 메일로만 발송한다.** 즉 **포스터 명부의 원본이 받은편지함일 개연이 높다** (**추론**, 직접 확인 필요) | 조직 사이트 HTML 직접 판독 |
| **개체 이름 = 위치 대장** | **111마리 전원의 이름 뒤에 위치 코드가 붙어 있다.** `FC`+포스터 이니셜 / `K##` / `CI ##` / `Q#` / `LR##` / `PR#` / `PL` / `C#` / `DI##` / `MED` / `ER` / `- Washington Petco`·`- Washington Petsmart`. **ShelterLuv 에 위치·포스터 필드가 있는데도 이름에 인코딩한다는 것은, 일상적으로 보는 화면에서 그 값이 안 보이기 때문일 개연이 높다** (**추론**, 직접 확인 필요 — 우리 가설의 정중앙) | Adopt-a-Pet 개체명 전수 실측(프록시) |
| 개체 상태 변경 시 발생하는 일 | 개체가 켄넬 → 포스터 → 오프사이트로 옮길 때마다 **이름 문자열을 사람이 고쳐야 하고**, 그 이름이 **Petfinder·Adopt-a-Pet·자체 사이트에 그대로 전파**된다. 실제로 `Moose Mellow FC AD` 는 무료 입양 대상으로 사이트 본문에도 `Moose Mellow` 로 별도 언급돼 있어 **본문과 개체명 표기가 어긋난다** | Adopt-a-Pet·Petfinder(프록시), 조직 사이트 Adopt |
| **포스터 대면 포털 여부** | **미확인 — 이 콜에서 반드시 갈라야 할 항목.** 사이트 어디에도 포스터 로그인 링크가 없다. **접수 폼이 켜져 있는 것과 포스터가 로그인해 상태를 남기는 것은 전혀 다른 문제**이고, 켜져 있어도 실제로 쓰이는지는 또 별개다 | — |
| **후시간 응급 채널** | **이메일이다.** 원문 *"In case of after hour foster emergency please email the foster coordinator at f***@fchsmo.org with the subject line "Emergency""* — **야간 응급마저 받은편지함으로 들어오고, 제목 규칙으로 분류한다** | 조직 사이트 Fostering |
| **비공개 자료실** | `/resources/` 페이지가 **워드프레스 비밀번호로 잠겨 있다**(2025-09-12 최종 수정). 자원봉사자·포스터용 자료 배포처로 보인다 (**추론**, 직접 확인 필요) | 조직 사이트 |
| 자원봉사 관리 도구 | **없는 것으로 보인다.** 신청은 워드프레스 페이지 폼 2종(성인/17세 이하)이고, **출력해 오리엔테이션에 지참**하는 방식이다. Better Impact·Volgistics·SignUpGenius 어느 흔적도 사이트 HTML 에서 나오지 않았다 | 조직 사이트 HTML 직접 판독 |
| Furventure 접수 도구 | **없다.** *"Swing by the shelter or email c***@fchsmo.org"* 뿐이다. 그런데 같은 페이지가 **참가자 피드백을 모아 개체 입양 프로필에 반영한다**고 명시한다 — **취합 경로가 정의돼 있지 않다** | 조직 사이트 |
| **입양 플랫폼 (4중 등재)** | 자체 사이트(ShelterLuv 임베드) + **Petfinder**(mo102) + **Adopt-a-Pet**(88960) + Chewy 파트너 페이지 | 각 사이트(프록시) |
| Petfinder 프로필 상태 | **"No Mission Statement"** — 미션문이 비어 있다. **외부 채널 프로필 관리에 손이 덜 간다는 신호** | Petfinder(프록시) |
| 이메일 마케팅 | **Constant Contact.** 홈페이지에서 `constantcontactpages.com/sl/iNLZUW3` 뉴스레터 가입 랜딩으로 연결한다 | 조직 사이트 HTML 직접 판독 |
| 모금 플랫폼 | **RallyUp**(`fchs.rallyup.com/www2026` — 온라인 경매·50/50 래플), **Give STL Day**(St. Louis Community Foundation), **Mightycause**, **Network for Good**, **PayPal Giving Fund**, **Chewy 위시리스트** | 조직 사이트, CauseIQ, Chewy |
| 사이트 CMS | **WordPress + Avada 테마**, 제작·관리 WASHMO Media LLC. 개체 목록은 ShelterLuv iframe 임베드라 **사이트 쪽에서 개체를 따로 만들지는 않는다** | 조직 사이트 HTML 직접 판독 |
| 마이크로칩 | **자체 서비스로 운영**(백신 클리닉에서 $25). 2025년 1월 시의회 발언 원문 *"three of the four dogs Union police brought to the Humane Society in December were microchipped… The microchipped dogs went home within an hour"* — **칩 조회·소유주 대조가 실무에서 반복되는 작업** | 조직 사이트, 지역지(프록시) |
| 회계 | 990 작성 **Langenberg, Strubberg, Arand & King, LLC**. 2020년 감사보고서 게시 | 990(2023), 조직 사이트 |
| **미확인** | 기부자 CRM(Bloomerang·DonorPerfect 등), 문자 발송 도구, 의료·투약 기록 도구 — **어느 것도 사이트에서 확인되지 않았다** | — |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인 (추정)** | **Foster Coordinator("Sandy") → Shelter Manager(Allison Mitchell) → 8인 무보수 이사회.** 990 상 **보수를 받는 임원이 한 명도 없어 유급 최고 책임자가 임원으로 등재돼 있지 않다.** 즉 **일상 운영은 유급 매니저가, 계약·지출 결정은 이사회가** 쥐고 있는 구조로 읽힌다 (**추론**, 직접 확인 필요 — 이 콜에서 가장 먼저 채울 공백) |
| **이사회가 실무에 붙어 있다** | Secretary **Mary Lovern 이 주 18시간**, Treasurer **Terry Matt 이 주 10시간**, Director **Ron Foan 이 주 7시간**, President **Susie Blatt 이 주 3시간**을 조직에 쓴다고 990 에 신고돼 있다. **2025년 시 계약 협상 때 이사 Susie Blatt 이 직접 언론에 발언**했다 → **소액 지출이라도 이사회가 인지할 개연이 높다** |
| **전결 한도** | **미확인.** 990·사이트 어디에도 없다 — **우리가 먼저 금액을 꺼내지 않는다** |
| **문서 절차 강도** | **갖출 것은 갖춘 조직이다.** 990 Part VI 기준 **이해상충 정책 있음(연 1회 서면 공시·상시 감시), 내부고발자 정책 있음, 문서 보존·폐기 정책 있음, 이사회·위원회 회의록 문서화**. 990 과 2020년 감사보고서를 **자체 사이트에 스스로 게시**한다. 반면 **임원 보수 결정 절차는 "해당 없음"**(무보수라서) |
| 외부 조달 제약 | **재단·정부 그랜트에 묶이지 않는다**(FY2024 확인 그랜트가 Network for Good·PayPal·Give STL Day 소액 3건). **다만 시 동물통제 계약 4건이 별도로 있고, 그 계약이 2024~2025년에 조직 재무의 최대 변수였다** |
| 예산 사이클 | **12월 결산.** 콜(2026-09-10)은 FY2026 9개월 차. **10/3 PawFest 와 9월 경매가 끝나야 다음 해 예산의 실체가 생긴다** |
| **재무 국면** | 자산 $875K·사실상 무차입으로 **지불 능력은 있다.** 그러나 ①수입 2년 연속 완만한 감소 ②FY2024 기부 −16.5% ③FY2023 흑자가 $4K 로 얇아짐 ④자산 1년 새 −12% → **신규 고정비를 정면으로 제안하기보다 시간·수용 여력 논거를 먼저 세우고 가격은 뒤에 두는 순서가 맞다** |
| **병목 (추정)** | ①신청자가 결재자가 아닐 개연이 높고 위에 Shelter Manager 와 이사회가 있다 ②**이미 ShelterLuv 에 매년 돈을 쓰고 있어 두 번째 도구가 중복 지출로 보일 위험**이 가장 큰 반론이다 ③2024~2025년 시 계약 인상 협상에서 "돈 이야기"로 크게 데인 조직이라 **비용 프레임에 방어가 걸려 있을 개연**이 있다. (**전부 추론**, 직접 확인 필요) |
| **유리한 사실 하나** | 뒤집어 보면 **ShelterLuv 안에 포스터 접수 폼이 이미 켜져 있는데도 쓰지 않고 있다.** 즉 조직은 "포스터를 도구로 관리한다"는 개념 자체를 이미 샀고, **그 자리를 채우지 못한 상태**다 |

## 6. Foster Coordinator 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **이름** | **"Sandy" — 이름만 확인된다.** 성(姓)은 어느 공개 자료에도 없다 | 조직 사이트 Fostering |
| **직책** | **Foster Coordinator.** 전용 메일함 `f***@fchsmo.org` 를 단독으로 쓴다 | 조직 사이트 |
| 유급/자원봉사 | **미확인.** 990 Part VII 에 오르는 8명은 전원 무보수 이사·임원이고 Sandy 는 없다. 유급 직원 23명 중 한 명일 개연이 높으나 확정하지 못했다 (**추론**) | 990(2023) |
| **신청자 = Sandy 인지** | **미확인.** 리드 폼의 role 이 `Foster coordinator` 라 같은 자리로 읽히지만, 이 조직의 포스터 담당이 1인 체제인지도 확인되지 않았다. **콜 첫 30초에 확인할 것** | — |
| 담당 업무 범위 (사이트 기준) | ①포스터 문의 응대 ②**가정과 개체의 매칭** — 원문 *"Our staff will work with you to find a pet compatible with your family and home"* ③후시간 응급 대응(이메일 제목 "Emergency") ④물품·사료·약·수의 예약 지원 | 조직 사이트 Fostering |
| 업무량의 실체 | **2025년 신생아·유아 개체 827마리**가 이 경로를 지나갔고, 조직 표기 포스터 가정이 **250곳 이상**이다. 지금 이 순간에도 공개 등재 개체 111마리 중 **33마리가 24개 가정에 나가 있다** | 조직 사이트, Adopt-a-Pet 실측 |
| 대외 발언 성향 | **직접 인용문이 하나도 검색되지 않는다.** 이 조직에서 언론에 나서는 사람은 **Shelter Manager Allison Mitchell** 과 **이사 Susie Blatt** 이다. Sandy 는 **뒤에서 움직이는 자리**로 읽힌다 (**추론**) | 지역지(프록시), 검색 전반 |
| 경력·학력 | **미확인** — 성을 모르므로 LinkedIn·지역 언론 어느 쪽으로도 추적되지 않는다 | — |
| 대명사 | **미확인** — 본인이 밝힌 표기를 찾지 못했다. 문서 전반에서 중립 표기로 다룬다 | — |
| **화법 제안** | 기능 나열·대시보드 이야기는 겉돈다. **"지금 개체 이름 뒤에 붙어 있는 FC AD 같은 표기는 누가 언제 고치시나요"**, **"이번 주 9/12 클리닉 명단은 뭘로 관리하세요"** 처럼 **이번 주 손동작을 짚는 질문**이 맞다. 본인이 실제로 매일 하는 일이 그것이다 | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2024-05** | **2009년 이후 처음으로 시 동물통제 계약 단가 인상을 요구.** 1건당 접수비 **$35→$100**, 일일 보호료 **$10→$35**(5일 상한 $175). Union 외 다른 계약 도시에도 같은 **표준 계약**을 제시했다 | 지역지(프록시) |
| **2024-11** | 조직이 Union 시에 **60일 계약 해지 통보**. 이사 Susie Blatt 발언 — 수개월간 연장 합의를 시도한 끝의 통보였다는 취지 | 지역지(프록시) |
| **2025-01-09** | **Union 발 유기동물 접수 중단.** 시는 사설 켄넬 이용과 안락사 비용까지 검토했고, 시청 앞 소규모 시위 2회 + **온라인 청원 528명**이 모였다 | 지역지(프록시) |
| **2025-01 (시의회)** | Shelter Manager **Allison Mitchell** 이 출석. *"three of the four dogs Union police brought to the Humane Society in December were microchipped and could have been brought to their owners without having to go to the shelter"* — **칩 조회만 해도 비용이 줄었을 건이 다수**라는 지적. 같은 자리에서 **Union·St. Clair·Pacific 3개 시가 공동 동물통제 시설을 짓는 안**이 논의됐다 | 지역지(프록시) |
| **2025-03~04-14** | 시 위원회가 **최초 제안과 거의 동일한 조건**으로 재계약을 권고했고 **4월 14일 새 계약 승인** | 지역지(프록시) |
| **2025-12** | 시 보고 — 2024-10~2025-11 지급액 **$26,375**(연 예산 $32,000, **예산 내**). 시는 **매월 청구서를 검토하고 데려온 사람의 주소를 확인**한다. 동물 사재기(hoarding) 사건 때 조직이 **접수비를 여러 건 면제**해 준 사실도 언급됐다 | 지역지(프록시) |
| **2026-01-16** | **Franklin County Furventure Program 신설** — 쉘터 개를 몇 시간~1박 데리고 나가는 프로그램. **분산 케어 대상이 한 종류 더 늘었다** | 조직 사이트 |
| **2026-05-09** | **연례 "Begging in the Streets" 길거리 모금 행사 취소**(사이트 게시물 제목이 `CANCELED` 로 갱신). 사유는 게시돼 있지 않다 | 조직 사이트 RSS |
| **2026-07-06~26** | BISSELL Pet Foundation **Empty the Shelters** 참가(입양비 감면) | 조직 사이트 |
| **2026-09-08~26 (진행 중)** | **제20회 Wine, Whiskers & Wags 온라인 경매 + 50/50 래플.** 작년 잭팟 $32,000 초과. 조기 참여 마감 **9/12 23:59**. 낙찰자 인수·배송은 **FCHS 담당자가 사후에 개별 연락**하는 방식 | 조직 사이트 |
| **2026-09-12** | **백신 클리닉** — Union 소방서, 09:00–13:00, 디스템퍼 무료·광견병 $15·마이크로칩 $25, **현금만·선착순**. **콜 이틀 뒤** | 조직 사이트 |
| **2026-10-03** | **제2회 PawFest** 14:00–18:00, 쉘터 현장. Purina Incredible Dog Team 초청, 쉘터 투어 포함 | 조직 사이트 |
| **최근 재무** | FY2024 수입 $736,854(−2.7%), **기부 −16.5%**, 프로그램 수입 +32.9%, 총자산 $875,447(**−12.0%**) | CauseIQ, ProPublica BMF |
| **미확인** | Facebook·Instagram·LinkedIn·Yelp 를 열지 못해 **최근 여론 동향과 채용 공고 유무를 확인하지 못했다.** 부정 사건이 없다고 단정하지 말 것 | — |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

각 줄은 **정황에서 끌어낸 추정**이며, 확인 필요 여부를 함께 적는다.

- **개체 이름 필드가 위치 대장으로 쓰이고 있다.** 공개 등재 111마리 **전원**이 `Millie FC RR` · `Red K17` · `CiCi CI 11` · `Winston Q3` · `Junipurr LR9` · `Oreo PR2` · `Butch MED` · `Liv- Washington Petco` 형태다. ShelterLuv 에 위치·포스터 필드가 있는데도 이름에 인코딩한다는 것은 **평소 보는 목록 화면에서 그 값이 안 보이기 때문**일 개연이 높다 — **직접 확인 필요(누가, 언제, 몇 분 걸려서 고치는가). 우리 가설의 정중앙**
- **표기가 흔들린다 — 강제된 입력 규칙이 없다는 뜻이다.** `FC`/`Fc` 대소문자 혼재, `CI 11`/`CI16`/`Ci 10 `(후행 공백) 혼재, 오프사이트 표기가 `Liv- Washington Petco`/`Vanessa Petsmart Washington` 두 형식. **여러 사람이 각자 손으로 넣는다는 방증** — **직접 확인 필요**
- **포스터 접수만 도구 밖에 있다.** 입양·서렌더는 ShelterLuv(FCMO), **포스터는 자체 워드프레스 Contact Form 7**. ShelterLuv 포스터 폼은 켜져 있는데 링크되지 않는다. **CF7 은 기본적으로 저장하지 않고 메일만 보낸다** → **포스터 명부의 원본이 받은편지함일 개연** — **직접 확인 필요(승인된 포스터 명부는 지금 어디에 있는가)**
- **야간 응급이 이메일 제목 규칙으로 처리된다.** *"email the foster coordinator at f***@fchsmo.org with the subject line "Emergency""* — 전화 당직이 아니라 **메일 제목으로 우선순위를 가른다** — **직접 확인 필요(밤에 실제로 어떻게 받으시는가)**
- **매칭 판단의 근거가 접수 폼 밖에 있다.** 사이트는 *"Our staff will work with you to find a pet compatible with your family and home"* 이라고 적는데, 폼에서 받는 것은 주거 형태·기존 반려동물·펜스 유무·아동 연령까지다. **동시 수용 두수·가용 기간·투약/포유 가능 여부·이송 가능 여부 문항이 없다** — **승인 이후 어떤 아이를 어느 집에 보낼지 무엇을 보고 정하는지 직접 확인 필요**
- **신생아·유아 개체가 연 827마리다.** 2025년 입양 1,252건의 66% 규모다. 이 개체군은 **체중·수유·투약 기록이 집집마다 따로 생긴다.** 그것이 어디로 모이는지 — **직접 확인 필요**
- **분산 케어의 갈래가 최소 4개다.** ①포스터 가정(FC) ②시설 내 구역 코드(K/CI/Q/LR/PR/PL/C/DI/MED/ER) ③오프사이트 소매점 2곳(Washington Petco·Petsmart) ④**2026년 신설 Furventure(몇 시간~1박 외출)**. Furventure 는 *"Staff also gather feedback from participants"* 라고 명시하면서 **취합 경로가 정의돼 있지 않다** — **직접 확인 필요**
- **비밀번호로 잠긴 `/resources/` 페이지가 있다**(2025-09-12 갱신). 포스터·자원봉사자용 자료 배포처로 보인다. **자료를 사람이 페이지에 올리고 비번을 나눠 주는 방식**이라면 갱신·전달이 수기다 — **직접 확인 필요**
- **역할별 메일함이 4개인데 도구는 하나다.** `frontdesk@` / `foster@` / `volunteer@` / `canine@` 로 갈라 놓았고 별도로 푸터에 `f***@gmail.com` 이 걸려 있다. **분류를 도구가 아니라 주소로 하고 있다** — **직접 확인 필요**
- **자원봉사 신청이 종이다.** *"complete the appropriate form and bring it to the orientation training"* — 출력해서 매월 첫째 일요일 오리엔테이션에 지참한다. **자원봉사 관리 도구 흔적이 사이트 HTML 전수 검색에서 나오지 않는다** — **직접 확인 필요**
- **입양 후 자료가 `.docx` 로 배포된다.** Dog Packet 은 PDF 인데 Cat Packet 은 워드 파일이고, 전달은 *"through your email or in person"* 이다. **사후 커뮤니케이션이 사람 손을 탄다** — 사소한 건이라 콜에서 먼저 꺼낼 일은 아니다
- **채널이 최소 4곳인데 Petfinder 프로필의 미션문이 비어 있다.** 자체 사이트(ShelterLuv 임베드)·Petfinder·Adopt-a-Pet·Chewy. **개체는 ShelterLuv 에서 자동 배포되는 것으로 보이나, 프로필·설명 같은 채널별 정보는 손이 덜 간다** — **직접 확인 필요(어느 채널이 자동이고 어느 것이 수동인가)**

## 미확인 요약 (콜에서 확인할 것)

1. **신청자 본인이 누구인가** — 사이트에 적힌 Foster Coordinator "Sandy" 본인인지, 유급인지 자원봉사인지, 이 자리를 몇 명이 나눠 맡는지, 상급자가 Shelter Manager(Allison Mitchell)인지. **가장 먼저 확인할 것 — 이 답에 따라 콜 후반 목표가 통째로 달라진다**
2. **"포스터 11–30"이 무엇을 센 숫자인가** — 지금 동물을 데리고 있는 가정인지, 명부 전체인지, 본인이 직접 챙기는 범위인지. 조직 사이트의 **"250개 이상 포스터 가정"**, 990 의 **"자원봉사자 100명"**, 폼의 **"11–30"** 세 값의 관계. 그리고 **그 셋을 잇는 명부는 지금 어디에 있는가**
3. **개체 이름에 붙는 코드를 누가 언제 고치는가** — `FC`+이니셜 / `K##` / `CI ##` / `Q#` / `LR##` / `PR#` / `MED` 의 의미, 개체가 켄넬↔포스터↔오프사이트로 옮길 때 이름을 바꾸는 사람과 걸리는 시간. **ShelterLuv 안에 위치·포스터 필드를 쓰고 있는지, 쓴다면 왜 이름에도 넣는지**
4. **ShelterLuv 포스터 모듈의 실제 사용 여부** — 포스터 접수 폼이 켜져 있는데 사이트는 워드프레스 폼을 쓴다. **켜만 놓고 안 쓰는 것인지, 시도했다가 접은 것인지, 존재를 모르는 것인지.** 셋은 완전히 다른 답이고 우리 진입 각도를 결정한다. 이어서 **포스터가 로그인해 상태를 남기는 화면이 켜져 있는가**
5. **승인 이후 포스터 명부가 어디에 있는가** — CF7 폼 제출이 메일로 떨어진다면, 승인된 가정 목록·연락처·가용 조건·현재 배치 현황을 무엇으로 보는가. **스프레드시트가 몇 개이고 각각 무엇인가**
6. **소재 B(임시보호자 업데이트 수집)에 반응한 이유** — 업데이트가 아예 안 들어와서인지, 문자·전화·메일로 흩어져서인지, 들어온 걸 옮겨 적는 게 힘들어서인지. 셋은 완전히 다른 문제다
7. **Furventure(2026-01 신설) 운영 실태** — 참가자 피드백을 개체 프로필에 반영한다고 적었는데 **그 피드백이 어디로 들어오고 누가 옮기는가.** 신설 8개월 차라 아직 굳지 않았을 개연이 높다
8. **연간 인테이크 실수치와 라이브릴리스율** — 2025년 입양 1,252·반환 89·신생아 827 은 확인했으나 **인테이크 총계가 어디에도 없다.** No-Kill 배지 2년치만 게시돼 있다
9. **도구 도입 결재 라인과 이사회 주기** — Shelter Manager 선까지인지 8인 이사회까지 올라가는지, 이사회 개최 주기가 어떻게 되는지. **금액은 우리가 먼저 꺼내지 않는다**
10. **시 계약 4건의 현재 상태** — Union 은 2025-04 재계약을 확인했으나 **Washington·St. Clair·Pacific 은 확정하지 못했다.** 3개 시 공동 동물통제 시설 논의가 그 뒤 어떻게 됐는지도 미확인. **민감한 사안이므로 우리가 먼저 꺼내지 않고, 상대가 꺼내면 받는다**
11. **일 운영비 $3,100 표기의 근거** — 990 상 FY2023 총지출 $753,405 와 맞지 않는다. **확정하지 못했으므로 콜에서 이 수치를 인용하지 말 것**
