# Noah's Paws Animal Rescue 사전조사

- 작성일: 2026-09-15 / 목적: Amy Duncan 콜 준비(미팅 2026-09-14) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Rescue", "role": "Shelter or rescue manager", "system": "Shelter Manager", "fosters": "1–10"}`
- **조직 확정, 신청자 미확인** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: **이 건의 1차 자료는 조직이 쓰는 Shelter Manager(ASM) 공개 서비스 엔드포인트다.** `service.sheltermanager.com/asmservice?method=animal_view_adoptable_js&account=jg2990` 이 **현재 게재 중인 94마리의 전체 레코드**를 JSON 으로 반환한다(2026-09-15 판독). 본문의 두수·연령·중성화·위치 라벨·인테이크 연도는 **조직의 원장 데이터 그 자체**이며 제3자 요약이 아니다
- 출처 주석 ②: **ASM 공개 피드는 사람 이름 필드를 마스킹한다**(`CURRENTOWNERNAME`·`ORIGINALOWNERNAME`·`BROUGHTINBYOWNERNAME` 이 94건 전부 공란). 따라서 「포스터가 누구인가」는 이 피드로 알 수 없다. 다만 **이동 기록 필드는 마스킹되지 않는다** — 대조 계정(`ja0095`)에서는 77마리 중 1마리가 `ACTIVEMOVEMENTTYPENAME: "Foster"` 로 값이 나온다. 이 대조를 근거로 4절의 판정을 세웠다
- 출처 주석 ③: **위치 라벨(`DISPLAYLOCATION`)에 개인 이름이 들어 있다.** 이 문서는 공개 사이트에 게시되므로 **개인 이름 라벨은 이니셜·익명 처리**한다. 두수와 구조만 옮긴다
- 출처 주석 ④: **Facebook·Instagram 은 열지 못했다**(로그인 게이트). **Petfinder 조직 페이지는 403**, **Yelp 은 리더 프록시 차단**, **Internet Archive 는 서비스 중단 중**이라 홈페이지 문구의 게시 시점을 특정하지 못했다. 이 조직의 실시간 소통 채널이 Facebook 인 점을 감안하면 **가장 큰 사각지대**다
- 출처 주석 ⑤: **990 원문이 존재하지 않는다.** 이 법인은 **990-N(e-Postcard) 신고 대상**이고 ProPublica 의 `filings_with_data` 가 0건이다. 재무 항목은 전부 **조직 자기보고**이며 검증 경로가 없다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다(번지·사서함 번호 생략)

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Noahs Paws(IRS 등록명) / Noah's Paws Animal Rescue(통용명), EIN 92-0375061, Eustace, TX**(Henderson County). 501(c)(3), **면세승인 2023-03**, NTEE **D20**(Animal Protection and Welfare), **12월 결산**, **990-N 신고 대상** | ProPublica API, GuideStar |
| **동명 조직** | ProPublica 전문 검색 `Noah's Paws` **결과 1건**. 웹 검색으로도 타 주 동명 동물구조 법인이 검출되지 않는다. **혼동 여지가 없다** | ProPublica API, 검색 |
| **이메일 도메인 = 조직 공식 도메인 (결정적)** | **North Texas Giving Day 조직 페이지에 EIN `92-0375061` 과 website `https://www.noahspaws.org` 가 같은 레코드 안에 있다**(원문 HTML 문자열 대조 확인). 즉 리드 도메인 `noahspaws.org` 와 IRS 법인이 한 지점에서 결합한다 | NTGD 조직 페이지 원문 |
| **폼의 `system` 이 실물로 확인된다 (결정적)** | 폼 원문 `"Shelter Manager"` → **sheltermanager.com 호스티드 계정 `jg2990` 실재.** 이 계정으로 조회한 개체 소개문에 `noahspaws.org` 가 박혀 있고, 온라인 신청 폼 5종의 본문이 전부 「Noah's Paws Animal Rescue」를 명시한다. **폼에 적힌 도구가 외부에서 그대로 확인된다** | ASM 서비스 API 직접 조회 |
| **폼의 `org_type` 일치** | `Rescue` — 자기표기가 ***"a foster-based, all-volunteer cat rescue serving the DFW area and beyond"*** 로 정확히 일치 | 사이트 About |
| **폼의 `fosters` 불일치** | `1–10` — **현재 공개 게재만 94마리**이고, 조직은 ***"We don't have a physical shelter — every cat in our care lives in a volunteer's home"*** 라고 쓴다. **두 진술이 동시에 참일 수 없다**(3절·8절) | ASM 피드, 사이트 About |
| **신청자 = 미확인** | **Amy Duncan 이 공개 자료 어디에도 없다.** 조직 사이트 About 의 「Meet The Team behind the Dream」 절은 **제목만 있고 본문이 비어 있다**(HTML 원문 확인). ASM 피드 전체 문자열에 `Duncan` 0건. 검색·언론·LinkedIn 에서도 이 조직과 결합하는 Amy Duncan 이 잡히지 않는다 | 사이트 원문, ASM 피드, 검색 |

→ **조직 확정, 신청자 미확인.** 판정 기준상 조직이 한 법인으로 좁혀졌으므로 `확정` 이며, **신청자 신원은 콜 첫 2분에 직접 확인한다.**

## 미팅에서 바로 쓸 핵심 5줄

1. **폼의 「1–10 가정」과 실물이 안 맞는다 — 지금 공개 게재만 94마리이고, 조직 자기표기상 이 아이들은 전부 남의 집에 있다** — About 원문: ***"We don't have a physical shelter — every cat in our care lives in a volunteer's home until they find one of their own, which means more attention, more socialization, and a much better shot at a smooth transition into your family."*** 그런데 ASM 실시간 피드 94마리(고양이 80 / 개 14) 중 위치 라벨이 **「Foster」인 개체는 2마리뿐**이다. 39마리가 「NPAR」(조직 약칭), 16마리가 「Casual Cat Cafe」, 나머지는 파트너 매장명·개인 이름·프로그램명이 뒤섞인 **자유 문자열**이다. 가정당 2~3마리로 잡아도 **30~45가정**이 필요하다(추론). **콜 첫 질문은 「몇 가정이세요」가 아니라 「그 숫자를 어디서 세세요」다.**

2. **케어 위치를 담을 자리가 시스템에 있는데 비어 있다 — 94마리 전부 활성 이동 기록이 없다** — ASM 피드에서 `ACTIVEMOVEMENTTYPENAME` 이 **94건 전부 `null`**, `ADOPTIONCOORDINATORNAME` 도 **94건 전부 공란**이다. ASM 에서 포스터 배치는 movement 레코드로 잡히는데, 그 레코드가 한 건도 없다. **이것이 「공개 피드가 가린 것」이 아니라는 근거가 있다** — 같은 엔드포인트의 대조 계정(`ja0095`)에서는 77마리 중 1마리가 `"Foster"` 로 값이 그대로 나온다(사람 이름 필드는 양쪽 다 마스킹된다). **즉 「지금 이 아이가 어느 집에 있는가」는 자유 텍스트 한 칸이 전부다.** 우리 가설의 정중앙이고, 이번 건은 **정황이 아니라 원장 데이터로** 잡혔다.

3. **사이트의 개체 리스트 위젯이 죽어 있다 — Petfinder ID 를 Shelter Manager 계정칸에 넣었다** — 홈페이지와 입양신청 페이지에 박힌 스크립트가 `asmservice?method=animal_view_adoptable_js&account=TX2701` 인데, **TX2701 은 이 조직의 Petfinder shelter ID** 다(Petfinder 조직 URL 말미가 `-tx2701`). 직접 호출하면 `ERROR: Invalid account` 를 돌려준다. **실제 ASM 계정은 `jg2990` 이고 그 계정으로 호출하면 94마리가 정상으로 나온다.** 그래서 「Available Animals」 페이지에는 개체가 한 마리도 없고 ***"CLICK HERE Adoptable Animals on Petfinder!"*** 링크만 있다. **이건 지적 카드가 아니라 선물 카드다** — 콜 말미에 「사이트에 목록이 안 뜨는 이유를 하나 찾았는데 알려드릴까요」로 쓴다.

4. **콜의 배경음은 「10월까지 나가야 한다」다** — 홈페이지 원문: ***"We are running out of space and have until October to move. We need your help finding land for a permanent rescue. You can save 2,000 lives!"*** NTGD 프로필도 ***"Our next major milestone? Securing a physical adoption center to drastically expand our intake capacity."*** 그런데 About 은 ***"We're proof that you don't need a building to save lives."*** 라고 쓴다. **두 문장이 같은 사이트에 같이 있다.** 라벨 「NPAR」 39마리·「(대표 이름) Yard」 8마리가 어딘가 물리적 공간에 있다는 뜻으로 읽힌다(**추론, 직접 확인 필요**). **이 시기에 성립하는 대화는 대시보드가 아니라 「이사하는 동안 누가 어디 갔는지 안 잃어버리기」다.** 먼저 꺼내지 않는다 — 상대가 공간 얘기를 하면 그 흐름에서만 받는다.

5. **상대가 누구인지 공개 자료로 안 잡힌다 — 그리고 이 조직엔 유급 직원이 한 명도 없다** — Amy Duncan 은 사이트·ASM 피드·검색·언론 어디에도 없고, About 의 팀 소개 절은 제목만 있고 비어 있다. 공개된 임원은 **Principal Officer Marcy McAlpin(창립자)**, **Co-Principal Officer Julie Guglielmi**, **2023년 기준 이사회 의장 John Osborne** 뿐이다. 조직 자기보고 원문: ***"we are ALL volunteers and not a single person working for our rescue, board members or otherwise receive any sort of payment or compensation."*** 폼의 `role: Shelter or rescue manager` 도 **무보수 역할일 개연이 높다**(추론). **콜 첫 2분에 「조직에서 어떤 일을 맡고 계세요」를 반드시 넣는다.** 이 답에 따라 뒤의 설계가 전부 갈린다.

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Noahs Paws**(IRS 등록명) / **Noah's Paws Animal Rescue**(통용명). 내부 약칭 **NPAR**(ASM 위치 라벨·폼 본문 ***"NPAR foster animals"***) | ProPublica, ASM 피드, ASM 폼 34 |
| EIN·지위 | **92-0375061** / 501(c)(3), **면세승인 2023-03**, **12월 결산**, **990-N 신고 대상** | ProPublica API, GuideStar |
| NTEE | **D20**(Animal Protection and Welfare) | ProPublica API |
| 소재지 | **Eustace, TX**(IRS 등록 주소, Henderson County). **본 문서에는 번지·사서함 번호를 적지 않는다** | ProPublica, GuideStar |
| **주소가 세 개다** | ①**Eustace, TX** — IRS·GuideStar 등록 주소 ②**Weatherford, TX** — GuideStar 「Payment Address」 및 사이트 `<title>` ③**Fort Worth, TX** — NTGD 등록 주소이자 수표 수령지. **세 개 모두 우편 주소이며, 사이트가 명시한다** — ***"Please note this is a mailing address and not a place to visit adoptable animals."*** **물리적 거점의 실제 위치는 미확인** | GuideStar, NTGD, 사이트 |
| 설립 | **2022년 활동 시작, 2023-03 면세승인.** NTGD 프로필 원문 ***"Founded in 2022, Noah's Paws Animal Rescue is a 100% volunteer-run nonprofit giving homeless animals across North Texas a second chance."*** 사이트 푸터는 ***"© 2022 by Noah's Paws Animal Rescue."*** | NTGD, ProPublica, 사이트 |
| **성격** | **시설 없는 포스터 기반 레스큐 + 페럴 TNR + 커뮤니티 아웃리치.** 자기표기 원문: ***"We are a 501(c)(3) non-profit organization whose mission is to help animals in need through sheltering, adoption, education, feral spay & neuter, and community outreach."*** | 사이트, GuideStar |
| 취급 종 | **자기표기는 고양이 단일**(***"all-volunteer cat rescue"***, TikTok 바이오 ***"TNR and cat rescuers of Texas!"***). **실제 게재는 고양이 80 / 개 14** — 폼 34 에도 ***"I am willing to foster dog(s)"*** 항목이 있다. **자기서술과 원장이 어긋난다** | 사이트, ASM 피드 |
| **유급 인력** | **0명.** GuideStar 자기보고 원문: ***"Our rescue works tirelessly; we are ALL volunteers and not a single person working for our rescue, board members or otherwise receive any sort of payment or compensation. All donations go directly to the care of animals in need."*** | GuideStar |
| **임원** | **Principal Officer: Marcy McAlpin**(창립자). **Co Principal Officer: Julie Guglielmi.** IRS 등록 주소의 `c/o` 명의도 Marcy McAlpin 이다 | GuideStar, ProPublica API |
| **이사회** | **2023-05-02 기준 Board chair: John Osborne.** 이후 갱신 정보 없음. 이사 명단·인원 **미확인**. 거버넌스 자기평가 항목이 대부분 ***"Not applicable"*** 로 응답돼 있다 | GuideStar |
| **Julie Guglielmi 의 이중 소속(중요)** | LinkedIn 프로필이 **「Director at Whiskers Animal Rescue」**(Granville, OH / `whiskersofohio.org`)다. **Noah's Paws 사이트는 그 조직 사이트의 복제본으로 보인다** — 포스터 페이지의 문의 mailto 가 **`i***@whiskersofohio.org`** 로 남아 있고, 「Noah's Warriors」 페이지의 slug 가 **`/whiskers-fosters`**, 로고 파일명이 **`Noahs JG.png`** 다. ASM 계정 **`jg2990`** 도 같은 이니셜이다(**추론**) | LinkedIn, 사이트 원문, ASM |
| 서비스 권역 | NTGD 「Counties Served」 **20개 카운티** — Hunt, Dallas, Tarrant, Collin, Kaufman, Wise, Somervell, Rockwall, Parker, Navarro, Montague, Johnson, Palo Pinto, Hood, Grayson, Fannin, Erath, Ellis, Denton, Cooke. 사이트는 ***"based in the DFW area, serving north/east Texas"*** | NTGD, 사이트 |
| **상설 입양 거점(파트너 매장)** | **The Casual Cat Cafe**(Richland Hills, TX, 예약 권장) · **PetSmart Lewisville** · **Pet Supermarket Arlington** · **Pet Supermarket Denton**. **ASM 위치 라벨에 이 네 곳이 그대로 등장한다**(합계 27마리) | 사이트, ASM 피드 |
| 웹 자산 | **Wix 사이트**(`noahspaws.org`, 무료/기본 플랜 배너 스크립트 포함, 페이지 sitemap lastmod **2026-08-03**) + **비밀번호 보호 페이지 「Noah's Warriors」** + Wix Shop(굿즈) + Facebook + Instagram + **TikTok(@noahs_paws, 764 팔로워 / 2,948 좋아요)** | 사이트, TikTok |
| 외부 등재 | **Petfinder**(shelter ID **TX2701**) · **Adopt-a-Pet**(shelter **194266**, Richland Hills, TX) · **GuideStar/Candid** · **North Texas Giving Day** · **Henderson County United Way** · Chewy·Amazon 위시리스트 · Nextdoor · Sniffspot · Yelp | 각 플랫폼 |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **12월 결산.** 콜 시점(2026-09-14)은 **FY2026 3분기 말**, 마감까지 약 3개월 반 | ProPublica API |
| **신고 양식 = 990-N** | GuideStar 원문: ***"This organization is required to file an IRS Form 990-N."*** ProPublica 의 `filings_with_data`·`filings_without_data` **둘 다 0건**이고 BMF 의 자산·수입·수익이 전부 **0 으로 표기**된다(990-N 은 금액을 신고하지 않는다). **즉 이 조직의 재무를 외부에서 검증할 경로가 없다** | GuideStar, ProPublica API |
| **연 예산(자기보고)** | **$100,000 – $249,999** | NTGD 조직 프로필 원문 |
| **자기보고와 신고 요건이 어긋난다** | 990-N 은 통상 **연 총수입 5만 달러 이하** 조직의 신고 양식이다. 자기보고 예산 구간과 **한 자릿수 배 차이**가 난다. **어느 쪽도 콜에서 단정하지 말 것** — 회계연도 기준 차이·현물 포함 여부 등 설명 가능한 사유가 여럿이다(**추론**) | GuideStar, NTGD |
| **재원 구성** | **비율 미확인.** 확인되는 채널만 열거하면 — **PayPal 호스티드 버튼**(단일 버튼 ID) · **Venmo**(`venmo.com/u/noahspaws`) · **Amazon 위시리스트** · **Chewy 위시리스트** · **Kroger Community Rewards** · **수표 우편** · **Wix Shop 굿즈** · **추모 기부(Rainbow Bridge Tributes)** · **North Texas Giving Day** | 사이트 Donate, NTGD |
| **도너 CRM 이 없다** | 사이트·폼·결제 경로 어디에도 도너 관리 SW(Bloomerang·DonorPerfect·Neon·Givebutter·Donorbox·Classy·Salesforce) 흔적이 **0건**이다. 기부는 PayPal·Venmo·NTGD 로 흩어져 들어온다 | 사이트 전 페이지 문자열 검색 |
| **기업 후원 프로그램이 안 팔리고 있다** | Sponsors 페이지의 티어가 **$250 / $500 / $1,000 per year** 인데 **세 칸 전부 ***"Your Business Here!"*** 자리표시자**이고, 실제 로고는 1개뿐이다. **이 숫자가 이 조직이 「연간 지출」로 익숙한 금액대의 기준선이다**(추론) | 사이트 Sponsors |
| **NTGD 2026 모금 현황** | 조직 페이지 모금액 **$130**(2026-09-15 판독). 페이지 데이터 안에 목표값이 **$1,000 · $20,000 · $40,000** 세 개로 갈려 있어 **현재 활성 목표가 어느 것인지 미확인**. **행사 당일 이전 시점이라 이 숫자로 모금력을 판단하지 말 것** | NTGD 페이지 원문 |
| **자금 용처 자기서술** | NTGD `needs_statement` 원문: ***"We need funding for:\n1) A dedicated rescue space that will allow us to help even more animals in Texas!\n\n2) Feral TNR (trap/neuter/return) to decrease homeless/unwanted cat population\n\n3) Vaccinate/neuter/spay adoptable animals and place into loving indoor homes.\n\n4) Help injured/ill animals get care or surgery they need to survive.\n\n5) Support to continue rescuing and rehoming animals..."*** — **1순위가 공간이다** | NTGD 페이지 원문 |
| 단가 공개 | 홈페이지에 케어 단가를 직접 적는다 — ***"$55 spays one female cat / $45 neuters one male cat / $45 fully vaccinates one cat / $15 microchips one cat / $15 boosters one cat / $10 flea treats one cat/month / $50 feeds 8 cats per month!!"*** | 사이트 홈 |
| 정부 재원 | **없음**(공개 자료상 계약·보조금 흔적 0건). 카운티 동물관리 계약을 언급한 문서 없음 | 검색 |
| 감사 | **해당 없음.** 990-N 규모이며 외부 감사 기록 없음 | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **2025 인테이크** | **246** | 조직 게시 임팩트 그래픽(NTGD 프로필 임베드) — `246 INTAKES` |
| **2025 입양** | **150** | 같은 그래픽 — `150 ADOPTIONS` |
| **2025 TNR** | **100 이상** | 같은 그래픽 — `OVER 100 TNR` |
| **2025 인테이크 − 입양 = 96** | **유입이 아웃컴보다 96 많다** | 타기관 이관·사망·연내 잔류를 구분한 공개 자료가 없다. **라이브 릴리스율 산출 불가 — 콜에서 인용하지 말 것** |
| **현재 공개 게재 두수(실측)** | **94마리 — 고양이 80 / 개 14** | **ASM 피드 직접 판독(2026-09-15).** 「고양이 레스큐」 자기표기와 달리 **개가 14마리** 있다 |
| **현재 게재 연령 구성** | **Baby 16 / Young Adult 40 / Adult 36 / Senior 2** | ASM `AGEGROUP` |
| **중성화 상태** | **완료 79 / 미완료 15** | ASM `NEUTERED`. **조직 정책은 ***"All of our animals are spayed or neutered... before going to new homes"*** 다 — 15마리는 아직 그 조건을 못 채운 채 공개 목록에 올라 있다** |
| **예약(reserve) 걸린 개체** | **0마리** | ASM `HASACTIVERESERVE` 94건 전부 0. **입양 파이프라인이 시스템에 안 잡힌다는 뜻이다**(추론) |
| **게재 개체의 인테이크 연도** | **2026년 57 / 2025년 26 / 2024년 7 / 2023년 4** | **2년 이상 체류 11마리, 1년 이상 37마리.** 장기 체류가 실재한다 |
| **위치 라벨 분포(핵심)** | **NPAR 39 / Casual Cat Cafe 16 / (대표 이름) Yard 8 / Pet Supermarket Arlington 4 / PetSmart Lewisville 4 / 개인명 A 4 / DC College Weekly Kitties 3 / DC Semester Campus Kitties 3 / Pet Supermarket Denton 3 / PetSmart Denton 2 / 「Foster」 2 / 「Marine」 2 / 개인명 B 2 / 개인명 C 1 / 개인명 D 1** | **ASM `DISPLAYLOCATION` 실측.** **조직 약칭·파트너 매장명·개인 이름·프로그램명·「Foster」가 한 필드에 섞여 있다.** 개인 이름 라벨 4종 합계 **8마리** |
| **활성 이동(movement) 기록** | **94건 전부 없음**(`ACTIVEMOVEMENTTYPENAME` = null) | **대조 계정에서는 같은 필드가 `"Foster"` 로 값이 나온다 — 피드가 가리는 필드가 아니다**(4절) |
| **입양 코디네이터 배정** | **94건 전부 공란**(`ADOPTIONCOORDINATORNAME` = "") | ASM 의 담당자 배정 기능이 쓰이지 않는다 |
| **포스터 가정 수** | **미확인** | 폼 자기보고 `1–10`. **ASM 공개 피드가 사람 이름을 마스킹해 외부에서 셀 수 없다.** 시설이 없다는 자기표기와 94마리를 놓고 보면 **30~45가정 규모로 추정**(추론) |
| 현재 Petfinder 게재 두수 | **미확인** | 조직 페이지 403. **사이트의 「Available Animals」 페이지가 이 링크 하나로만 구성돼 있어, 실질적으로 Petfinder 가 개체 노출의 정본이다** |
| 현재 Adopt-a-Pet 게재 두수 | **미확인** | 조직 페이지(194266)에 연락처·전화가 공란이고 목록 렌더링 실패 |
| 대외 평판 | **부정 사건 미검출.** 소송·행정처분·자금 논란 검색되지 않음. **오히려 창립자가 타 단체 학대 사건의 신고자로 언론에 등장한다**(7절) | 검색, FOX 4 |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW = Shelter Manager(ASM), 계정 `jg2990` (확정)** | 폼 자기보고 `"Shelter Manager"` 와 일치. **온라인 신청 폼·개체 피드가 모두 이 계정에서 살아 있다.** 개체 소개문에 `noahspaws.org` 가 박혀 있어 **이 데이터베이스가 Noah's Paws 의 것임이 확정된다** | ASM 서비스 API 직접 조회 |
| **자체 제작 온라인 폼 5종 (확정)** | `formid=21` **Adoption Application** · `formid=34` **Volunteer Application** · `formid=42` **Surrender Form** · `formid=43` **Foster Fail Application** · `formid=44` **Foster to Adopt Application (young animals)** | ASM 폼 ID 1–50 전수 조회 |
| **나머지 폼은 ASM 기본 템플릿 그대로다** | `formid=22~40`(34 제외)이 전부 ASM 이 기본 제공하는 RSPCA 샘플 폼이다 — *RSPCA Pre Observation Sheet: Dog/Cat*, *RSPCA Entry Assessment: Dog*, *RSPCA 5 and 10 Day Observations*, *RSPCA Animal History*, *RSPCA Daily Form*, *RSPCA Staff Health Check Form*, *Customer Satisfaction Survey*, *Interactive Cat Behaviour Assessment*, *Lost/Found Animal Questionnaire*. **관찰·일일점검·건강체크 템플릿이 전부 손대지 않은 기본값으로 남아 있다** | ASM 폼 전수 조회 |
| **포스터 전용 신청 폼이 없다 (핵심)** | 사이트 「Volunteer & Foster Applications」 페이지의 **「General Volunteer」 링크와 「Fostering」 링크가 둘 다 `formid=34` 로 같다.** 폼 제목도 *Volunteer Application* 하나다. **포스터 지원이 자원봉사 지원과 한 흐름으로 들어온다** | 사이트 원문, ASM 폼 34 |
| **포스터 「업데이트」를 받는 자리가 어디에도 없다 (핵심)** | 조직이 만든 포스터 관련 폼 2종(43·44)은 **전부 「포스터를 입양자로 전환시키는」 폼**이다 — *Foster Fail*, *Foster to Adopt*. **상태·근황·의료 경과를 받는 폼은 0건**이고, ASM 기본 관찰 폼들도 쓰이지 않는다. **유입 소재 B(임시보호자 업데이트 수집)에 이 사람이 반응한 이유가 여기 있을 개연이 크다**(추론) | ASM 폼 전수 조회 |
| **포스터 수용 두수를 신청 시점 1회만 묻는다** | 폼 34 문항: ***"How many cats/kittens are you willing/able to foster at once?"*** **최초 신청서에 적힌 숫자 이후로 이 값을 갱신하는 경로가 없다** | ASM 폼 34 |
| **사이트의 개체 위젯이 죽어 있다 (핵심 증거)** | 홈페이지·입양신청 페이지에 `asmservice?method=animal_view_adoptable_js&account=TX2701` 이 박혀 있다. **TX2701 은 Petfinder shelter ID 다**(Petfinder 조직 URL 말미 `-tx2701`). 직접 호출 시 **`ERROR: Invalid account`**. 같은 엔드포인트를 정상 계정(`jg2990`·대조군 `ja0095`)으로 호출하면 정상 응답한다. **계정칸에 다른 플랫폼 ID 를 넣은 것이다** | 사이트 원문, ASM API 직접 조회 |
| **그 결과 개체 노출의 정본이 Petfinder 하나다** | 「Available Animals」 페이지 전체 본문이 ***"CLICK HERE Adoptable Animals on Petfinder!"*** 와 안내 한 단락뿐이다. ***"Our available animals will be listed on Petfinder along with a short bio."*** | 사이트 Available Animals |
| **입양 신청이 이메일 첨부와 분리돼 있다** | 폼 21 문항: ***"Drivers License -- please email a copy of your driver's license to a***@noahspaws.org (just front side) for your application to be considered complete."*** / ***"PLEASE EMAIL COPY OF YOUR LEASE showing acceptance of pets to a***@noahspaws.org to begin process of application -- your application won't be considered complete until this is received."*** **폼은 ASM 에, 첨부는 메일함에 쌓인다** | ASM 폼 21 |
| **파양 수용 여력 확인이 수기 이메일이다** | Adopt 페이지 원문: ***"Email i***@noahspaws.org to see if space available BEFORE filling out"*** → 그 다음에 `formid=42` 서식. **「지금 자리가 있는가」를 사람이 답한다** | 사이트 Adopt |
| **입양 완결 조건이 문서에 박혀 있다** | 폼 44 원문: ***"I understand that the adoption is not complete until this cat/kitten has been neutered and officially released from Noah's Paws Animal Rescue and I have paid the adoption fee in full"*** — **①중성화 ②공식 릴리스 ③입양비 완납 세 조건의 논리곱이다.** 그런데 **중성화 미완 15마리가 공개 목록에 올라 있고**, 포스터가 이 세 조건을 어디서 조회하는지는 어디에도 안 적혀 있다 | ASM 폼 44, ASM 피드 |
| **가정방문이 양쪽 다 필수다** | 폼 34: ***"Our final step in the application process is a home visit -- do you agree to a home visit?"*** / 폼 21: ***"A short homevisit is part of our adoption process."*** **무급 인력 조직에서 방문 일정 조율이 실제 비용으로 존재한다**(추론) | ASM 폼 21·34 |
| **비밀번호로 잠긴 포스터 영역이 있다** | 「Noah's Warriors」 페이지(`/whiskers-fosters`)가 Wix **Guest Area** 비밀번호 화면을 반환한다. **내용·용도 미확인 — 포스터용 자료실일 개연**(추론, 콜에서 확인) | 사이트 |
| **경쟁·인접 도구 = 미검출** | ShelterLuv · Petstablished · Pawlytics · Chameleon · ShelterBoss · PetPoint · Petango · Adopets · RescueGroups · Doobert · Volgistics · Better Impact · SignUpGenius · Airtable · Bloomerang · DonorPerfect · Classy · Givebutter · Salesforce · Mailchimp · JotForm **전부 사이트 판독 페이지에서 0건** | 사이트 전 페이지 문자열 검색 |
| **채용 공고가 없다** | 유급 직원이 0명이므로 채용 페이지 자체가 없다. **도구명이 드러나는 통상 경로 하나가 이 건에는 존재하지 않는다** | 사이트 |
| **종합 판정** | **도구를 바꾸자는 대화가 성립하지 않는 건이다.** ASM 은 이 조직의 유일한 시스템이고 무료·저가로 굴러간다. **성립하는 대화는 하나다 — ①개체 원장은 ASM 에 있고 ②신청도 ASM 폼으로 들어오는데 ③「지금 어느 집에 누가 있고, 어디까지 준비됐는가」는 자유 텍스트 한 칸과 사람의 머릿속에만 있다.** 그리고 **10월 이전이 그 빈칸을 정확히 확대한다** | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인** | **Principal Officer Marcy McAlpin(창립자) → Co Principal Officer Julie Guglielmi → 이사회.** 2023-05-02 기준 이사회 의장은 **John Osborne**. **유급 직원이 0명이므로 「스태프 제안 → 경영진 결재」 구조가 아니다** — 의사결정자와 실행자가 같은 사람일 개연이 높다(추론) |
| **콜 상대의 지위 = 미확인** | 폼의 `role` 은 `Shelter or rescue manager` 이나 **Amy Duncan 이 공개 임원 3인 중 누구도 아니다.** 무보수 운영 역할이거나, 최근 합류했거나, 임원 배우자·가족일 가능성이 모두 열려 있다. **이 콜은 결재 콜인지 챔피언 콜인지도 아직 모르는 상태로 들어간다 — 첫 2분에 확정한다** |
| **전결 한도** | **미확인.** 990-N 규모 전원 자원봉사 조직이라 문서화된 지출 규정이 없을 개연이 높다(추론). 대신 기준선이 되는 숫자는 있다 — **후원 티어 $250 / $500 / $1,000 per year**, **케어 단가 $10~$55 단위** |
| **예산 사이클** | **12월 결산.** 콜 시점은 FY2026 3분기 말이며 **North Texas Giving Day 기간과 겹친다.** 다만 **10월 이전 문제 때문에 정상 예산 논의가 돌지 않을 가능성이 크다**(추론) |
| **지금 이 조직의 자금 압력** | ①**10월 이전 — 부지 확보가 모금 1순위**(NTGD needs_statement 1번 항목) ②**94마리 상시 케어의 의료·사료 고정비** ③**유급 인력 0 → 인건비는 없으나 그만큼 시간이 병목** |
| **「돈으로 못 사는 조직」이다** | 연 예산 자기보고 $100K–$249K, 990-N 신고 대상, 유급 직원 0, 도너 CRM 없음, 후원 티어가 안 팔린다. **유료 SaaS 를 새로 얹을 여지가 크지 않다.** 현재 쓰는 ASM 도 저가 호스티드 서비스다 |
| **가격 대화 원칙** | **먼저 꺼내지 않는다.** 물으면 **①ASM 을 대체하지 않고 얹는 형태인지 ②비영리·소규모 무료 구간이 있는지** 두 가지로만 답한다. **연 $1,000 을 넘는 제안은 이 콜에서 의미가 없다** |
| **예상 반론 ①: 「우리는 이미 Shelter Manager 를 쓴다」** | 정면 반박 금지. **「원장을 바꾸자」가 아니라 「Shelter Manager 가 안 받아주는 한 칸」으로 좁힌다** — 「포스터한테서 오는 근황이 지금 어디로 오나요」 |
| **예상 반론 ②: 「전부 자원봉사라 새 도구를 배울 여력이 없다」** | 사실이다. **받는 방식은 「배울 것을 늘리는가」가 아니라 「지금 누가 몇 번 다시 물어보는가」다.** 포스터 쪽이 새 도구를 배워야 한다면 이 조직에서는 안 굴러간다 |
| **예상 반론 ③: 「지금 이사 준비 중이라 나중에」** | **가장 확실히 나올 반론이고, 사실이다.** 반박하지 말고 **이사의 리스크 쪽에서 받는다** — 「이사하는 동안 가정에 나가 있는 애들 기록은 어디에 남나요」 |
| **병목 ①: 위치 정보가 자유 텍스트 한 칸이다** | ASM `DISPLAYLOCATION` 에 조직 약칭·매장명·개인 이름·프로그램명이 섞여 있고 활성 이동 기록이 0건이다(3·4절) |
| **병목 ②: 케어 위치가 최소 다섯 갈래다** | ①「NPAR」 39마리 ②Casual Cat Cafe 16마리 ③파트너 매장 4곳 13마리 ④개인 가정 라벨 8마리 ⑤캠퍼스 프로그램(DC Kitties) 6마리. **여기에 이전이 얹히면 ①이 한동안 사라진다** |
| **병목 ③: 서류가 메일함과 시스템으로 갈린다** | 입양 신청은 ASM 폼, 면허증·임대차계약서는 `adoptions@` 메일. 파양 수용 여부는 `info@` 메일 왕복 |
| 2차 콜 후보 | **Marcy McAlpin(창립자·Principal Officer)** — 결재 축. **Julie Guglielmi(Co Principal Officer)** — **ASM 계정의 실소유자로 추정되며 시스템 결정의 실제 주인일 개연이 높다**(추론). **조직을 통하지 않은 접촉은 하지 않는다** |

## 6. Amy Duncan 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **이름·직책** | **미확인.** 폼 자기보고는 `Shelter or rescue manager` | 리드 폼 |
| **조직 사이트 등재 여부** | **없음.** About 페이지의 **「Meet The Team behind the Dream」 절이 제목만 있고 본문이 비어 있다**(HTML 원문에 제목 `<h2>` 다음이 바로 닫힌다). **이 조직은 팀을 대외에 공개하지 않는다** | 사이트 About 원문 |
| **ASM 원장 등장 여부** | **없음.** 94마리 전체 레코드 문자열에 `Duncan` **0건**. `ADOPTIONCOORDINATORNAME` 은 94건 전부 공란 | ASM 피드 |
| **검색·언론·LinkedIn** | **이 조직과 결합하는 Amy Duncan 이 검출되지 않는다.** 동명이인 다수(Texas Premier Title, Fort Worth Museum of Science and History 등)가 나오나 **동물구조와의 접점이 없다 — 연결하지 말 것** | 검색, LinkedIn |
| **연락처 도메인** | `noahspaws.org` — **조직 공식 도메인과 일치.** 조직이 쓰는 공개 주소는 `info@`·`adoptions@` 두 개가 확인된다. **개인 메일박스가 발급됐다는 것은 최소한 상시 역할이라는 뜻이다**(추론) | 리드 폼, 사이트 |
| **폼 응답에서 읽히는 것** | ①`org_type: Rescue` — 조직 자기표기와 정확히 일치 ②`system: Shelter Manager` — **실물 계정이 확인된다. 시스템 이름을 정확히 아는 사람이다** ③`role: Shelter or rescue manager` — 유급 직원 0인 조직이므로 **무보수 운영 역할**로 읽힌다 ④`fosters: 1–10` — **실물과 크게 벌어진다**(1·3절) | 리드 폼, 본 조사 전체 |
| **「1–10」을 고른 것의 해석(중요)** | 두 갈래다 — ①**본인이 직접 관리하는 포스터 가정이 1~10곳**이고 조직 전체 숫자가 아니거나 ②**조직 전체 숫자를 조회할 화면이 없어서 체감으로 적었거나**. **전자면 이 사람은 부분 담당자이고, 후자면 우리 가설의 정중앙이다.** 어느 쪽인지가 이 콜의 첫 갈림길이다(**추론, 콜 초반에 확인**) | 추론 |
| **대명사** | **확인된 기록 없음.** 콜에서 확인되기 전까지 단정 표현을 쓰지 않는다 | — |
| **콜에서 통할 언어(가설)** | 이 조직에 라이브 릴리스율·대시보드·「더 많이 구조하자」는 의미가 없다. **전원 무급이고 지금 집이 없어지는 중이다.** 먹힐 만한 질문은 **동작·횟수 단위**다 — 「지금 어느 집에 누가 있는지는 뭘 열면 보세요」, 「포스터한테 근황 받을 때 문자로 오나요 그룹챗인가요」, 「중성화 끝난 애인지 포스터가 직접 볼 수 있나요, 물어봐야 하나요」, 「이사하면 지금 NPAR 에 있는 애들은 어디로 가나요」. **다만 상대의 역할을 모른 채 들어가므로 초반 화법을 관찰해 조정한다** | 추론 |
| **먼저 꺼내지 말 것** | ①**가격** ②**Shelter Manager 대체** — 「원장은 그대로 두고 가정 쪽만」을 첫 문장에 못 박는다 ③**10월 이전·부지 문제** — 상대가 꺼내면 받되 우리가 먼저 묻지 않는다 ④**2025년 Van Zandt County 학대 사건**(7절) — **창립자가 신고자 측이지만 진행 중일 수 있는 법률 사안이고 직원 개인이 답할 주제가 아니다. 어떤 형태로도 언급하지 않는다** ⑤**사이트 위젯 오류 지적** — 콜 말미에 「알려드릴까요」로만, 초반에 꺼내면 방어가 걸린다 ⑥**중성화 미완 15마리가 목록에 올라 있는 것** ⑦**990-N 과 자기보고 예산의 불일치** | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| 2022년 | **활동 시작.** NTGD 프로필 ***"Founded in 2022"***, 사이트 푸터 ***"© 2022"*** | NTGD, 사이트 |
| 2023-03 | **IRS 면세승인**(ruling date). GuideStar 프로필 생성 2023-04, 이사회 정보 기준일 2023-05-02 | ProPublica, GuideStar |
| **2025-05~06 (중요·언급 금지)** | **창립자 Marcy McAlpin 이 Van Zandt County(Eustace, TX)의 동물학대 사건을 SPCA of Texas 에 신고했다.** FOX 4 원문: ***"Marcy McAlpin, founder of Noah's Paws Animal Rescue, reported the alleged animal cruelty, according to the SPCA of Texas."*** 수의테크니션 Hayley Hull 이 출타 중 동물 돌봄을 부탁했고, McAlpin 이 2025-05-02 에 약 15마리 개와 47마리 고양이를 불결한 환경에서 발견해 05-03 보안관서에 신고했다. 05-05 압수영장 집행으로 **개 10·고양이 56 = 66마리** 압수, Hull 은 05-29 체포·기소, **2025-06-11 판결로 SPCA 에 양육권 및 $22,090.75 배상**. **Noah's Paws 는 신고자 측이며 피고가 아니다.** 사건 발생지가 이 조직의 IRS 등록 도시와 같다 | FOX 4 Dallas-Fort Worth(2025-06-19), SPCA of Texas |
| 2025년 (연간) | **인테이크 246 / 입양 150 / TNR 100 이상** | 조직 게시 임팩트 그래픽 |
| 2026-08-03 | **사이트 전 페이지 최종 갱신**(pages-sitemap lastmod). About 문구가 현재의 「시설 없는 포스터 기반」 서술로 정리돼 있다 | 사이트 sitemap |
| **2026년 (시점 미확인)** | **홈페이지 공간 호소 게시.** 원문: ***"We are running out of space and have until October to move. We need your help finding land for a permanent rescue. You can save 2,000 lives! If you know someone with land they are willing to sell at a discounted price or lease please contact us at i***@noahspaws.org"*** **게시 시점은 Internet Archive 서비스 중단으로 확인하지 못했다** | 사이트 홈 |
| **2026년 9월** | **North Texas Giving Day 2026 참가 중.** 프로필 원문: ***"Our next major milestone? Securing a physical adoption center to drastically expand our intake capacity."*** 조직 페이지 모금액 $130(2026-09-15 판독) | NTGD |
| 현재 | **공개 게재 94마리**(고양이 80 / 개 14), 그중 **2년 이상 체류 11마리**, **중성화 미완 15마리** | ASM 피드 |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

- **「어느 집에 있는가」가 자유 텍스트 한 칸이다.** `DISPLAYLOCATION` 에 조직 약칭(NPAR 39) · 매장명(Casual Cat Cafe 16 등) · 개인 이름 4종(8) · 프로그램명(DC Kitties 6) · 「Foster」(2) · 「Marine」(2)가 뒤섞여 있다. **이 필드가 어떤 규칙으로 채워지는지 확인 필요.**
- **활성 이동 기록이 94건 전부 없다.** ASM 의 포스터 배치 기능이 쓰이지 않는 것으로 읽힌다. **대조 계정에서 같은 필드가 값을 반환하므로 피드 마스킹이 아니다.** **원장 안에 포스터 배치를 넣는 관행이 있는지 확인 필요.**
- **포스터 신청이 자원봉사 신청과 같은 폼이다**(둘 다 `formid=34`). **포스터만의 심사·명부가 따로 있는지 확인 필요.**
- **포스터 수용 두수를 신청서에서 한 번만 묻는다** — ***"How many cats/kittens are you willing/able to foster at once?"*** **그 숫자가 바뀔 때 어디에 반영되는지 확인 필요.**
- **포스터에게서 상태를 받는 폼이 없다.** 조직이 만든 포스터 관련 폼은 *Foster Fail* 과 *Foster to Adopt* 뿐이고, 둘 다 「입양으로 전환」 폼이다. **근황·의료 경과가 실제로 어떤 수단으로 오는지 확인 필요**(문자·그룹챗·Facebook 메신저 가능성).
- **ASM 기본 관찰 폼이 전부 손대지 않은 채 남아 있다**(*5 and 10 Day Observations*, *Daily Form*, *Staff Health Check* 등). **관찰 기록 자체를 시스템에 안 남기는 것으로 읽힌다. 확인 필요.**
- **입양 준비 판정이 세 조건의 논리곱인데 조회 경로가 없다** — ***"neutered and officially released from Noah's Paws Animal Rescue and I have paid the adoption fee in full"***. **포스터·입양희망자가 이 상태를 직접 볼 수 있는지 확인 필요.**
- **중성화 미완 15마리가 공개 목록에 올라 있다.** 정책은 「입양 전 전부 중성화」다. **게재 기준과 준비 상태가 연동되지 않는 것으로 읽힌다. 확인 필요.**
- **예약(reserve)이 0건이다.** 신청이 들어와도 개체 레코드에 반영되지 않는 것으로 읽힌다. **신청 접수부터 입양 완결까지의 상태를 어디서 보는지 확인 필요.**
- **서류가 메일함으로 따로 온다.** 면허증·임대차계약서가 `a***@noahspaws.org` 로, Foster to Adopt 의 계약서는 `i***@noahspaws.org` 로. **폼과 첨부를 사람이 손으로 맞춰 보는 구조로 읽힌다. 확인 필요.**
- **파양 수용 여력 확인이 이메일 왕복이다** — ***"Email i***@noahspaws.org to see if space available BEFORE filling out"***. **「지금 자리가 있는가」를 무엇을 보고 답하는지 확인 필요.**
- **사이트 위젯이 죽은 채로 방치돼 있다**(Petfinder ID 오입력). **개체 노출을 Petfinder 한 곳에만 의존하는 상태이며, 그 게재를 누가 어떻게 갱신하는지 확인 필요.**
- **2년 이상 체류 11마리, 1년 이상 37마리.** **장기 체류 개체를 주기적으로 다시 보는 절차가 있는지 확인 필요.**
- **고양이 레스큐를 표방하는데 개가 14마리 있다.** **개 포스터가 별도 라인인지 확인 필요.**
- **비밀번호로 잠긴 「Noah's Warriors」 페이지가 있다.** **포스터용 자료실인지, 무엇이 들어 있는지 확인 필요.**
- **가정방문이 입양·포스터 양쪽 모두 필수다.** 전원 무급 조직에서 **방문 일정 조율의 부담이 어디에 걸리는지 확인 필요.**

## 미확인 요약 (콜에서 확인할 것)

1. **Amy Duncan 이 이 조직에서 무슨 일을 하는가.** 공개 자료에 전혀 없다. **이 답이 콜의 나머지 설계를 전부 결정한다 — 첫 2분에 확인한다.**
2. **폼의 「1–10」이 본인 담당분인가 조직 전체인가.** 조직 전체라면 94마리와 어떻게 맞는지.
3. **「지금 어느 집에 누가 있는가」를 무엇을 열면 보는가.** Shelter Manager 인가, 스프레드시트인가, 누군가의 메일함·문자인가.
4. **ASM 의 「Foster」 이동 기능을 쓰는가.** 안 쓴다면 대신 무엇을 쓰는가. 위치 라벨(`DISPLAYLOCATION`)을 누가 언제 고치는가.
5. **포스터가 근황·의료 경과를 어떤 수단으로 보내오는가.** 그리고 그것이 개체 레코드로 옮겨지는가, 사람의 머릿속에 남는가.
6. **입양 준비 상태(중성화 + 공식 릴리스 + 입양비)를 포스터가 직접 조회할 수 있는가.**
7. **중성화 미완 15마리가 목록에 올라 있는 것이 의도인가**(예약 접수용) **누락인가.**
8. **결정은 누가 하는가.** Marcy McAlpin 인가 Julie Guglielmi 인가, 이사회 의결이 필요한 지출 기준선이 있는가.
9. **10월 이전이 어디까지 진행됐는가.** 지금 「NPAR」에 있는 39마리가 어디로 가는가. **상대가 먼저 꺼낼 때만 묻는다.**
10. **Petfinder 게재를 누가 어떻게 갱신하는가.** ASM 과 연동돼 있는가, 사람이 이중 입력하는가.
11. **개 14마리가 별도 라인인가.** 고양이 레스큐 자기표기와의 관계.
12. **「Noah's Warriors」 잠금 페이지의 용도.**
13. **연 예산 규모와 소프트웨어 지출의 현재 기준선** — 990-N 신고와 자기보고 $100K–$249K 의 간극. **예민한 주제이므로 예산이 아니라 「비영리 요금 적용 요건」 실무 문맥으로만 접근한다.**
