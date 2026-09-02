# Happy Paws Kitten Rescue 사전조사

- 작성일: 2026-09-01 / 목적: Jill Coffey 콜 준비(미팅 2026-09-02) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Rescue", "role": "Executive director or founder", "system": "Rescue Groups", "fosters": "11–30"}` / 유입 소재 **B(임시보호자 업데이트 수집 — 폼에서 현재 임시보호자 수를 물었다)**
- **동일 조직 확정 / 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: 조직 사이트는 **sitemap 기재 11개 페이지 HTML 원문을 전수 내려받아 검색**했고 그 경우 출처에 `사이트 HTML`로 표기. Adopt-a-Pet·CauseIQ·GuideStar·WeRescue·Facebook·LinkedIn·UT Daily Beacon 은 서버가 자동 열람을 차단해 텍스트 프록시(r.jina.ai)로 원문을 확보했고 `(프록시)`로 표기
- 출처 주석 ②: **자동 요약기가 원문에 없는 문장을 인용부호로 반환하는 사고가 과거에 확인됐다.** 이 문서에 큰따옴표로 인용한 영문 문장은 **전부 내려받은 HTML 원문에서 문자열 일치로 재검증**한 것만 실었다. 재검증에 실패한 값은 싣지 않고 미확인으로 처리했다
- 출처 주석 ③: 조직 990 은 **전 연도 990-EZ** 다. 990-EZ 에는 임원 명단·프로그램 서술 외에 IT 지출·거버넌스·전결 관련 서식이 **존재하지 않는다.** 따라서 이 문서의 「미확인」 다수는 조사 실패가 아니라 **공개될 서식 자체가 없는 것**이다
- 출처 주석 ④: 990-EZ 원문 PDF 는 확보 실패(ProPublica 는 자동 열람 차단, CauseIQ PDF 링크는 로그인 게이트, IRS S3 e-file 키 부재). 재무 수치는 **ProPublica API(IRS 추출) + CauseIQ 재무표** 로 교차 확인했다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Happy Paws Kitten Rescue, EIN 47-3636271, Knoxville, TN**(Knox County). 501(c)(3), 면세승인 **2015-04**, NTEE **D20**, **12월 결산**, 재단분류 코드 15(509(a)(2)), 기부금 공제 가능(Pub 78), 신고요건 코드 1(990/990-EZ 제출 의무) | ProPublica API, CauseIQ(프록시) |
| **신청자 — 결정적 근거 ①** | **IRS 사업자 마스터 파일의 이 EIN `careofname` 값이 `% JILL COFFEY` 다.** 국세청 등록상 이 법인의 수신인이 신청자 본인이다 | ProPublica API (IRS BMF) |
| **신청자 — 결정적 근거 ②** | **FY2025 990-EZ 기재 임원이 `Jill Coffey / President / 보수 $0`**(CauseIQ 기준일 2026-05-14 = 해당 990-EZ IRS 접수일). 같은 표에 `Kait Lesher / Director / $0`(기준일 2025-12-31)가 함께 올라 있다 | CauseIQ(프록시) |
| **신청자 — 결정적 근거 ③** | **Adopt-a-Pet 조직 페이지(보호소 80530)의 Contact 란이 `Jill Coffey 865-765-3400`** 이고, 같은 블록의 조직 이메일이 **`h***@gmail.com`** 이다 | Adopt-a-Pet(프록시) |
| **이메일 도메인** | 리드 도메인 **gmail.com 이 조직 공식 주소와 일치한다.** `h***@gmail.com` 이 Adopt-a-Pet·Facebook·사이트 Help 페이지 3곳에 동일하게 게시돼 있다. **자체 도메인 `happypawskittenrescue.org` 를 갖고도 메일은 gmail 을 쓴다** — 도메인 MX 는 GoDaddy 기본값(`smtp.secureserver.net`)이고 SPF 레코드가 없다 | Adopt-a-Pet(프록시), Facebook(프록시), 사이트 HTML, DNS(DoH) |
| 보강 근거 | ①GuideStar 프로필 제목이 조직명이 아니라 **`Jill Coffey`** 다(EIN 47-3636271) ②CauseIQ 의 `Also known as...` 값도 **`Jill Coffey`** ③사이트 기부 페이지의 **Venmo 수취 링크가 `venmo.com/jill-coffey-0`** 다 | GuideStar(프록시), CauseIQ(프록시), 사이트 HTML |
| 동명 조직 | ProPublica `happy paws` 검색 **22건 중 `Kitten Rescue` 가 붙은 법인은 전국에 이 1건뿐**이다. TN 소재 다른 `Happy Paws` 는 **Happy Paws Foundation(Nashville, EIN 30-0611784)** 로 도시·EIN 이 다르다. 웹상 유사 브랜드(happypawscatrescue.org, Happy Paws Haven / happypawshaven.pet, Happy Paws Haven / Arab AL, Happy Paws Rescue / Yuba City CA 등)도 **전부 `Kitten Rescue` 가 아니고 소재지가 다르다.** 교차 오염 여지 없음 | ProPublica API, 검색 |
| **폼 응답 정합 — `system`** | 폼의 `"system": "Rescue Groups"` 가 **실증된다.** 사이트 `/available-cats` 페이지에 **RescueGroups 툴킷 iframe(`toolkit.rescuegroups.org/iframe/fb/v3.0/?...&ids=5195`)** 이 박혀 있고, 그 위젯이 반환하는 개체 수가 Adopt-a-Pet 등재 수와 일치한다(3절) | 사이트 HTML, RescueGroups 툴킷 |
| **폼 응답 정합 — `role`** | 폼의 `"role": "Executive director or founder"` 가 실증된다. **창업자 본인**이며(6절) 990-EZ 상 President 다 | UT Daily Beacon(프록시), CauseIQ(프록시) |
| **폼 응답 정합 — `fosters`** | **`11–30` 은 대조 가능하나 개체 수와 격차가 있다.** 실측 등재 두수는 **63마리**이고 이 조직은 **시설이 없다**(3절). 콜에서 갈라내야 한다 | RescueGroups 툴킷, Adopt-a-Pet(프록시) |

→ **IRS 수신인명·990-EZ 임원명·Adopt-a-Pet 담당자명·조직 gmail 주소·Venmo 수취 로컬파트 5개 축이 맞물려 조직·신청자 모두 확정.** 다른 조직 정보를 끌어온 부분 없음.

## 미팅에서 바로 쓸 핵심 5줄

1. **소재 B가 물은 「임시보호자 수」의 상대편 숫자가 이미 공개돼 있다 — 지금 입양 대기 중인 고양이가 63마리이고, 이 조직에는 시설이 없다. 63마리 전부가 남의 집에 있다** — RescueGroups 툴킷(orgID 5195) 원문 `Pets Found: 63`, Adopt-a-Pet(80530) 원문 `1 - 9 of 63 pets available`, WeRescue(24242) 원문 `61 available pets found`. **세 채널이 61~63 으로 수렴한다.** 조직 자기표기는 *"100% volunteer-operated and foster-based"* 이고 시설 언급이 어디에도 없다. **폼의 `11–30` 과 맞추면 한 가정이 평균 2.1~5.7마리를 데리고 있다는 뜻**이다. 콜의 첫 질문은 "임시보호자가 몇 분이세요"가 아니라 **"지금 63마리를 몇 가정이 나눠 갖고 계신가요"** 여야 한다 — 우리가 먼저 숫자를 갖고 들어가면 대화의 층이 한 칸 올라간다

2. **포스터 신청서가 필드 7개다. 같은 조직의 입양 신청서는 문항 라벨 58개다. 이 비대칭이 이 콜의 정중앙이다** — 포스터 신청서는 GoDaddy 네이티브 폼이고 받는 값이 **Name / Email / Phone Number / 자기소개+가구 내 다른 반려동물 수 / Home Address / `Fosters vet and phone` / `Sign and date`** 가 전부다. **동시에 몇 마리까지 가능한지, 언제부터 언제까지 가능한지, 투약·포유(bottle baby)·회복기 케어가 가능한지를 하나도 묻지 않는다.** 반면 입양 신청서(JotForm 252814841145153)는 수의사 실명·전화, 임대 관리인 이름·전화, 무관계 레퍼런스 2인, **SNS 계정명까지** 받고 *"Have you been to any additional veterinarians or animal hospitals in last 10 years that you have not already shared? This would be helpful for verifying vetting history."* 라고 대놓고 검증 의도를 적는다. **입양자는 58문항으로 거르고, 정작 개체를 맡기는 포스터는 7필드로 받는다.** 콜에서 "포스터 신청서에서 뭘 보고 어느 아이를 보낼지 정하시나요"가 가장 자연스럽고 강한 진입점이다

3. **개체 원장은 RescueGroups 로 이미 돌아간다. 없는 것은 그 뒤 — 개체가 포스터 가정에 들어간 뒤의 층이다** — 사이트 11개 페이지 전수 검색 결과 **ShelterLuv·Petstablished·Pawlytics·Chameleon·PetPoint·ShelterBuddy·Petango·Animal Shelter Manager 전부 미검출**이고, 실제로 확인되는 것은 ①**개체 원장 = RescueGroups.org(orgID 5195)** ②**공개 등재 = Petfinder(조직 UUID `361892c3-…`) + Adopt-a-Pet(80530) + WeRescue(24242)** ③**신청·계약 = JotForm 2종** ④**사이트 = GoDaddy Website Builder** ⑤**돈 = PayPal·Venmo·Amazon Wishlist·iGive** ⑥**메일 = Gmail** 이다. **자원봉사 도구도, 포스터 포털도, 도너 CRM 도 0건이다.** 즉 **"쉘터 SW 를 안 쓰는 조직"이 아니라 "개체 원장은 있는데 분산 케어를 담는 층이 없는 조직"** 이고, 이건 우리 가설이 가장 깨끗하게 성립하는 형태다. **경쟁 대체재를 파는 대화가 아니라 RescueGroups 옆의 빈자리를 말하는 대화로 가야 한다**

4. **상대는 자기 데이터가 늦게 흐른다는 걸 알고 있고, 사이트에 그렇게 적어 뒀다** — `/available-cats` 페이지 원문: ***"Note* Not all cats may be listed as it updates slow. Our original format below has all cats."*** **Petfinder 링크와 RescueGroups 위젯을 한 페이지에 둘 다 붙여 놓고, 앞의 것은 늦으니 뒤의 것을 보라고 방문자에게 안내한다.** 실제로 이 시점 실측도 Petfinder 계열(WeRescue) 61, RescueGroups 63 으로 벌어져 있다. 부수 증거로 **Adopt-a-Pet 에 걸린 입양 신청 링크가 죽은 구 URL(`/applications-and-contracts.html`)** 이고, **WeRescue 자기보고 입양비 `$65 most cats and kittens` 는 현재 사이트 값(성묘 $100 / 새끼 $125 / 10세 이상 $65)과 다르다.** **콜에서 먼저 지적하지 말고 "새 아이가 들어오면 어디어디에 올리시나요"로 물어 상대가 스스로 세게 할 것**

5. **돈이 처음 생긴 해다 — FY2025 수입이 전년 대비 +60.8%, 총자산이 2년 만에 $483 → $17,968 로 37배다. 다만 절대 규모는 여전히 연 $8만이고 12월 결산이다** — FY2025 수입 **$80,828** / 지출 **$68,799** / **잉여 $12,029** / 총자산 **$17,968**(990-EZ, IRS 접수 2026-05-14). 직전 9년은 $50,270~$65,490 사이에 갇혀 있었고 FY2023 은 자산이 **$483**, FY2020 은 순자산이 **-$2,725** 였다. **유급 직원 0명, 임원 보수 $0.** 즉 ①절대 지불 여력은 작고 ②그런데 지금이 10년 중 가장 여유 있는 국면이며 ③12월 결산이라 콜 시점은 **FY2026 9개월 차, FY2027 편성 직전**이다. **가격은 상대가 먼저 묻기 전에 꺼내지 않는다.** 꺼낼 때의 프레임은 "지금 결제"가 아니라 "내년 항목"이다

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Happy Paws Kitten Rescue** (IRS 등록명, 사이트·SNS 표기 동일). 자체 약칭 **HPKR** 을 신청서·계약서 본문에서 쓴다 | ProPublica API, 사이트 HTML |
| EIN·지위 | **47-3636271** / 501(c)(3), 면세승인 **2015-04**, 12월 결산, 재단분류 15(509(a)(2)), Pub 78 등재 | ProPublica API, CauseIQ(프록시) |
| NTEE | **D20**(Animal Protection and Welfare) — ProPublica·CauseIQ 일치. **GuideStar 만 `D60 Other Services` 로 다르게 적는다** — 콜에서 인용하지 않는다 | ProPublica API, CauseIQ(프록시), GuideStar(프록시) |
| 소재지 | **Knoxville, TN**(Knox County). IRS 등록지·Adopt-a-Pet·GuideStar·LinkedIn 회사 페이지가 전부 동일 | ProPublica API, Adopt-a-Pet(프록시), GuideStar(프록시), LinkedIn(프록시) |
| 설립 | **법인 설립·면세승인 2015년.** 다만 활동 시작은 그보다 앞선다 — 2024-04 기사 기준 **"Sixteen years ago"**(약 2008년) 남편이 계속 고양이를 데려온 것이 시작이라고 본인이 서술 | ProPublica API, UT Daily Beacon(프록시) |
| **성격** | **시설이 없는 100% 포스터 기반 고양이 전문 레스큐.** Facebook Intro 원문: *"Happy Paws Kitten Rescue is a Non-Profit foster based 501(c)(3) cat and kitten adoption organization in Knoxville, TN"*. 사이트 원문: *"We're a foster-based, volunteer-run rescue in East Tennessee."* **본원 건물·주소·개방 시간이 어느 채널에도 없다** | Facebook(프록시), 사이트 HTML |
| 미션문 | *"Happy Paws Kitten Rescue is a licensed organization dedicated to care for, provide medical treatment, and re-home homeless, abandoned, and abused cats in East Tennessee. We are also dedicated to promoting proper care of animals through community education and to strengthening the human-animal bond."* — 사이트 포스터 페이지·GuideStar·WeRescue 3곳이 동일 문장 | 사이트 HTML, GuideStar(프록시), WeRescue(프록시) |
| 사육 방식 | WeRescue 자기보고 원문: *"All of our cats live in a cage free indoor environment."* 포스터 가이드라인 원문: *"Indoor-only; no crating/caging"* | WeRescue(프록시), 사이트 HTML |
| **인테이크 정책** | **오픈 인테이크가 아니다.** Help 페이지 원문: ***"We receive hundreds of requests each month and can't accept every cat (we're foster-based)."*** 별도로 ***"Happy Paws does not handle feral intakes."*** | 사이트 HTML |
| **유급 직원** | **0명.** 임원 보수 $0, CauseIQ 특성 태그 `No full-time employees`. 자기표기도 *"100% volunteer-operated"* | CauseIQ(프록시), 검색 |
| **임원 (990-EZ 기준)** | **Jill Coffey — President($0, 기준일 2026-05-14) / Kait Lesher — Director($0, 기준일 2025-12-31).** 990-EZ 에 기재된 인물은 이 2인뿐이다 | CauseIQ(프록시) |
| 이사회 | **GuideStar 원문: `This organization has no recorded board members.`** 사이트·SNS 어디에도 이사 명단 페이지가 없다. **실제 이사회 구성·인원 미확인** | GuideStar(프록시), 사이트 HTML |
| 다른 인물 단서 | LinkedIn 회사 페이지가 **직원 2명**으로 표기하고 그중 1인이 **Jessica Staton** 으로 노출된다. **역할은 확인되지 않는다**(**추론** 근거로만, 직접 확인 필요) | LinkedIn(프록시) |
| 서비스 권역 | **Knox County 및 인근.** Adopt-a-Pet 자기보고 *"We serve Knoxville and surrounding areas."*, WeRescue 자기보고 *"Knox county and surrounding area."* 미션문은 광의로 *"East Tennessee"* | Adopt-a-Pet(프록시), WeRescue(프록시) |
| **파트너 클리닉 5곳** | 포스터 페이지 원문: *"transport to scheduled vet appointments at our partner clinics (Admiral Veterinary Hospital; Young-Williams for spay/neuter; plus PPAWS, Kindness Counts, Planned Pethood, and others)."* **자체 클리닉이 없고 외부 5곳 이상에 분산돼 있으며, 그 이송을 포스터가 한다** | 사이트 HTML |
| **오프사이트 입양 채널** | **PetSmart.** 포스터 페이지 원문: *"We host adoption events at PetSmart—bringing your foster helps them get adopted faster"*. 사이트 캘린더의 행사 장소는 **PetSmart Turkey Creek** | 사이트 HTML |
| 웹 자산 | 자체 사이트(**GoDaddy Website Builder**, generator 문자열 `Starfie…`) + Facebook(happypawskittenrescue) + Instagram(**@hpkrcats**) + LinkedIn 회사 페이지. 사이트 sitemap 은 정확히 **11페이지** | 사이트 HTML, sitemap |
| **소셜 규모** | **Facebook 팔로워 19K · 팔로잉 127 · 리뷰 300건 중 94% 추천.** 조회 시점 최신 게시물이 **8시간 전**(개체 `Misty` 1인칭 소개글). **연 $8만 조직 치고 청중이 크고 채널이 살아 있다** | Facebook(프록시) |
| 소셜 규모 대비 | **LinkedIn 회사 페이지는 팔로워 4명.** Instagram 은 로그인 게이트로 **미확인** | LinkedIn(프록시), Instagram |
| 사이트 갱신 상태 | sitemap 11개 페이지 전부 `lastmod` **2026-06-27** 로 동일하고, 홈 캘린더의 마지막 행사도 **06/27/26** 이다. **조회 시점(2026-09-01) 기준 약 2개월 정지** | sitemap, 사이트 HTML |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **12월 결산.** 2026-09-01 시점은 **FY2026 9개월 차**이며 **FY2027 예산 편성 직전**이다 | ProPublica API |
| 신고 양식 | **전 연도 990-EZ.** 정식 990 을 낸 적이 없다. 따라서 **기능별 지출·IT 지출·거버넌스·이사회 서식이 공개되지 않는다** | ProPublica API, CauseIQ(프록시) |
| **FY2025** | 수입 **$80,828** / 지출 **$68,799** / **잉여 $12,029** / 총자산 **$17,968**. **IRS 접수 2026-05-14** | CauseIQ(프록시), ProPublica API(BMF) |
| **FY2024** | 수입 **$50,270**. IRS 접수 2025-03-25 | CauseIQ(프록시) |
| FY2023 | 수입 $51,466 / 지출 $51,985 / **-$519** / 총자산 **$483** / 총부채 $0 | ProPublica API |
| FY2022 | 수입 $56,036 / 지출 $55,578 / +$458 / 총자산 $1,002 | ProPublica API |
| FY2021 | 수입 $65,379 / 지출 $64,835 / +$544 / 총자산 $544 | ProPublica API |
| FY2020 | 수입 $65,490 / 지출 $68,215 / **-$2,725** / **순자산 -$2,725** | ProPublica API |
| FY2019 | 수입 $57,571 / 지출 $55,447 / +$2,124 | ProPublica API |
| FY2018 | 수입 $54,694 / 지출 $54,694 / **±0** | ProPublica API |
| FY2017 | 수입 $53,925 / 지출 $51,708 / +$2,217. **이 해만 프로그램 수입 $39,558 을 별도 계상**했다 | ProPublica API |
| FY2016 | 수입 $58,652 / 지출 $72,904 / **-$14,252** | ProPublica API |
| **재무 궤적 요약** | **FY2016~FY2024 9년간 수입이 $50,270~$65,490 밴드에 갇혀 있었다. FY2025 에 $80,828 로 처음 밴드를 벗어났다(+60.8%).** 총자산은 FY2023 $483 → FY2025 $17,968. **콜 시점은 「10년 만에 처음 숨통이 트인」 국면이다** | ProPublica API, CauseIQ(프록시), 추론 |
| **수입 구성** | **FY2025·FY2024 모두 전액이 `Total grants, contributions, etc.` 다**(프로그램 수입 $0, 투자수익 $0, 행사 순수입 $0). **입양비도 회계상 기여금 라인으로 들어가 있다는 뜻**이다(FY2017 만 예외) | CauseIQ(프록시), 추론 |
| **확인된 재단 보조금** | **AmazonSmile Foundation $676 (2023-12) 1건뿐.** 그 외 재단·정부 보조금이 CauseIQ 에 없다 | CauseIQ(프록시) |
| 정부 재원 | **미확인.** 990-EZ 에는 정부 보조금 별도 라인이 없다 | — |
| **입양비 (현재)** | 사이트 원문: **`Adult Cats: $100 (or two for $185)` / `Kittens: $125 (or two for $230)` / `Senior cats over 10+ yrs $65`**. 결제 안내 원문: *"adoption fee should be paid through PayPal or Venmo."* | 사이트 HTML |
| 입양비 (외부 채널, 불일치) | **WeRescue 자기보고는 `Application and contract, $65 most cats and kittens.`** — 현재 사이트 값과 다르다. **갱신되지 않은 값**으로 본다(**추론**) | WeRescue(프록시) |
| **결제·모금 경로 4종** | **PayPal**(hosted button `XPZ3W9FJMEBWE`) / **Venmo**(`venmo.com/jill-coffey-0`) / **Amazon Wishlist**(`1150XXP1O3VR1`) / **iGive.com**(`c=66960&m=945644`). **Stripe·Givebutter·Classy·Donorbox·Zeffy 등 전용 기부 플랫폼은 미검출** | 사이트 HTML |
| **Venmo 수취처 주의** | 조직 입양비·기부의 Venmo 수취 링크가 **대표 개인 명의로 보이는 핸들(`jill-coffey-0`)** 이다. 조직 계좌와 개인 계좌의 분리 여부는 **미확인**이며, **콜에서 우리가 먼저 꺼내지 않는다** | 사이트 HTML |
| **IT 지출** | **미확인.** 990-EZ 에 `Information technology` 항목 자체가 없다. 확인되는 유료 지출 후보는 **GoDaddy 사이트 빌더·도메인, JotForm, RescueGroups** 뿐이며 금액은 공개분이 없다 | 추론 |
| 회계·감사 | **미확인.** 990-EZ 에 세무 대리인·외부 감사 관련 공개 서식이 없다 | — |
| 시사점 | **연 지출 $68,799 / 자산 $17,968 / 유급 직원 0명.** 우리 리드 풀에서 **지불 여력 하위권**이다. 다만 ①10년 만의 수입 점프 ②12월 결산 ③FB 19K 라는 모금 채널 세 조건이 겹쳐, **"지금 결제"가 아니라 "FY2027 항목"이 유일하게 맞는 프레임**이다. 가격은 상대가 먼저 묻기 전에 꺼내지 않는다 | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **현재 입양 대기 두수 — RescueGroups** | **63마리** | RescueGroups 툴킷(orgID 5195) 원문 `Pets Found: 63`, 5페이지 분량. **2026-09-01 조회** |
| **현재 입양 대기 두수 — Adopt-a-Pet** | **63마리** | Adopt-a-Pet(80530) 원문 `1 - 9 of 63 pets available`. **RescueGroups 와 정확히 일치** |
| **현재 입양 대기 두수 — WeRescue** | **61마리** | WeRescue(24242, RescueGroups 미러) 원문 `61 available pets found`. **2마리 차이 = 채널 간 동기화 지연** |
| **시설 두수** | **0마리** | **시설이 없다.** 즉 위 63마리 전원이 포스터 가정에 있다 |
| **폼 자기보고 포스터 수** | **11–30 가구** | 63마리와 대조하면 **가구당 평균 2.1~5.7마리**. 실제 값은 콜에서 확인 |
| **개체명에 상태가 박혀 있는 건** | **최소 8건** | `Fritz FIV+` · `Taylor FIV+` · `Mary ( Blind Kitty)` · `Little Bit (Bobtail)` · `Mama Indigo` · `Tangerine and Squeaks (Brothers)` · `Taylor & Tyalar` · `Wubs & Ally`. **의료 상태·본디드 페어를 구조화된 필드가 아니라 이름 문자열에 넣고 있다**(8절) |
| 동명 개체 | **`Jasper` 2건** | 63건 목록에 같은 이름이 두 번 나온다 |
| **개체 레코드 생성 시점 분포** | **RescueGroups animalID `17,931,721` ~ `22,73x,xxx`** | RescueGroups animalID 는 플랫폼 전역 순차 채번이다. **가장 오래된 레코드와 가장 최근 레코드 사이에 480만 건 이상의 간격**이 있다. **개체별 실제 등재일·체류일수는 공개되지 않아 연 단위 환산은 하지 않는다**(미확인) |
| 990-EZ 프로그램 서술 누적치 | *"Provided over 400 stray cats foster care and nutering"* / *"Cat adoptions 350"* | **CauseIQ 가 여러 연도의 990-EZ Part III 서술을 한 필드에 합쳐 놓은 값**이라 **연도 귀속이 불가능하다.** 콜에서 이 숫자를 인용하지 않는다 |
| 연간 인테이크·입양·라이브릴리스율 | **미확인** | 990-EZ 에 계량 서식이 없고, 사이트·SNS 에 연간 집계 페이지가 없다. Shelter Animals Count 등재도 확인되지 않았다 |
| 포스터 가구 수 (조직 공개분) | **미확인** | 사이트 포스터 페이지에 가구 수·모집 목표가 적혀 있지 않다 |
| 입양 완료 목록 | **부분 확인** | WeRescue `Recently Adopted` 에 **BENNY · BILLY · BUTLER · LUCKY** 4건이 노출된다. **총계·기간은 표시되지 않는다** |
| 입양자 후기 | **3건** | 사이트 `/purrfect-matches` 에 Frankie · Rue · Poppy 3건. **Poppy 는 2021년 「어미+새끼 3마리」로 들어와 새끼 입양 후 포스터 가정이 어미를 입양한 사례**이고, 같은 사례가 입양 신청서 예시 문구에도 등장한다 |
| 입양 조건 | **만 18세 이상** | 입양 계약서 원문: *"I hereby attest to all of the above and that I am over the age of 18."* |
| **입양 트라이얼** | **5일** | 계약서 원문: *"the first five days after adoption is to be considered a trial period"* — 이 기간 중 **HPKR 대리인의 방문 권한**과 **전액 환불 반환권**이 명시돼 있다 |
| 입양 포함 항목 | 중성화 · 연령별 백신 · 광견병(연령 해당 시) · **FIV/FeLV 검사** · 구충 · 벼룩 예방 | 사이트 HTML, Adopt-a-Pet(프록시) |
| 대외 평판 | **Facebook 리뷰 300건 중 94% 추천** | 부정 사례로 **「declaw 가능성을 밝혔다가 입양이 거절됐다」는 취지의 리뷰** 1건이 검색에 잡힌다. 입양 신청서에 *"Do you plan to declaw the cat?"* 문항이 실재하므로 **정책의 결과**로 읽는 것이 맞다 |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **개체 원장 = RescueGroups.org** | **폼 응답 `"system": "Rescue Groups"` 가 실증된다.** `/available-cats` 페이지가 **RescueGroups 툴킷 iframe**(`toolkit.rescuegroups.org/iframe/fb/v3.0/?breed=&age=&sex=&page=1&ids=5195&locationid=&species=`)을 임베드한다. **orgID = 5195**, 개체 사진 CDN 이 `cdn.rescuegroups.org/5195/pictures/animals/…` 다 | 사이트 HTML, RescueGroups 툴킷 |
| RescueGroups 위젯 버전 | **`v3.0` 툴킷 = RescueGroups 의 구세대 임베드**다. 반환 HTML 안에 브리드 목록 SQL 문(`select b.BreedID, b.BreedName, b.Species from AnimalsBreeds b …`)이 그대로 노출되고 GA 는 구형 `ga.js`(UA-23218855-8)를 쓴다. **벤더 쪽 레거시이며 조직 잘못이 아니다 — 콜에서 언급하지 않는다** | RescueGroups 툴킷 |
| **공개 등재 = Petfinder** | 조직 **UUID `361892c3-7de6-4c6c-bb02-1a87d4bb20b7`**, 회원 URL 슬러그 `happy-paws-kitten-rescue-tn676`. `/available-cats` 에 Petfinder 위젯 스크립트(`main-widgets-web.js`)와 조직 검색 링크가 함께 걸려 있다 | 사이트 HTML, 검색 |
| **공개 등재 = Adopt-a-Pet** | 보호소 번호 **80530**. CauseIQ 는 이 조직의 「Website URL」을 **`adoptapet.com/shelter/80530/available-pets/cats`** 로 기록하고 있다 — **외부 데이터베이스에 조직 홈페이지 대신 Adopt-a-Pet 이 등록돼 있다** | Adopt-a-Pet(프록시), CauseIQ(프록시) |
| 공개 등재 = WeRescue | 보호소 **24242**. 이미지 경로가 `images.werescue.pet/rg/shelters/24242/…` 로 **`rg` = RescueGroups 미러**임을 드러낸다 | WeRescue(프록시) |
| **조직이 스스로 적은 동기화 지연** | `/available-cats` 원문: ***"Click ( the circle) here to access our available cats through Petfinder. Note* Not all cats may be listed as it updates slow. Our original format below has all cats."*** **Petfinder 가 늦다는 것을 알고, 원장 위젯을 병행 노출하며, 방문자에게 그렇게 안내한다** | 사이트 HTML |
| **입양 신청 = JotForm** | `/adoption-application` 에 **JotForm `252814841145153`** 임베드. 폼 제목 **`Pet Rescue Adoption Application Form`**, **문항 라벨 58개** | 사이트 HTML, JotForm |
| **입양 계약 = JotForm** | `/adoption-contract-1` 에 **JotForm `252934645074159`** 임베드. 폼 제목 **`Adoption Contract`**. 구조는 **장문 약관 1개 + 입력 6개**(`Name of Cat(s) being adopted` / Name / Email / Phone Number / Address / Date) | 사이트 HTML, JotForm |
| **포스터 신청 = GoDaddy 네이티브 폼** | **JotForm 이 아니다.** `/foster-application` 은 사이트 빌더 기본 폼이고 필드가 **Name / Email / Phone Number / `Please tell us a little about yourself and your interest in fostering. Also, how many other pets you have in your houshold` / `Home Address` / `Fosters vet and phone` / `Sign and date`** 7개다. 제출 버튼은 `Send`. **제출물이 어디로 가는지는 공개되지 않으나, 사이트 빌더 기본 폼은 통상 등록 메일함으로 전달된다**(**추론**, 확인 필요) | 사이트 HTML |
| **메일 = Gmail** | 공개 창구가 전 채널 공통으로 **`h***@gmail.com`** 이다. 자체 도메인 MX 는 **GoDaddy 기본값**(`0 smtp.secureserver.net`, `10 mailstore1.secureserver.net`)이고 **SPF 레코드가 없다.** TXT 는 도메인 소유권 검증 토큰 2건뿐이다. **모든 포스터·입양·인테이크 문의가 하나의 gmail 받은편지함으로 모인다는 뜻**(**추론**) | DNS(DoH), 사이트 HTML, Adopt-a-Pet(프록시) |
| 웹 스택 | **GoDaddy Website Builder**(generator `Starfie…`, 푸터에 GoDaddy 프로모션 링크 상존). 11페이지 정적 구성 | 사이트 HTML |
| 결제·모금 | **PayPal**(hosted button) / **Venmo**(`jill-coffey-0`) / **Amazon Wishlist** / **iGive.com** | 사이트 HTML |
| 미디어 | 사이트에 **YouTube 임베드 1건**(`7vqB5PeM130`). Facebook·Instagram(@hpkrcats) 아이콘이 전 페이지 푸터에 상존 | 사이트 HTML |
| **미검출 목록** | **쉘터 SW 대체재**(ShelterLuv·Petstablished·Pawlytics·Chameleon·PetPoint·ShelterBuddy·Petango·24PetConnect·Animal Shelter Manager) / **자원봉사 도구**(Volgistics·Better Impact·SignUpGenius) / **도너 CRM**(Bloomerang·Givebutter·Classy·DonorPerfect·Zeffy·NeonCRM·Donorbox·Network for Good) / **협업·폼**(Airtable·Salesforce·HubSpot·Google Forms·Smartsheet) / **메일마케팅**(Mailchimp·Constant Contact) / **이송**(Doobert) — **사이트 11개 페이지 전수 검색에서 전부 0건** | 사이트 HTML 전수 검색 |
| **판정 시 주의** | 위 결과는 「안 쓴다」의 증거가 아니라 **「밖에서 보이는 자리에 없다」**의 증거다. 특히 **포스터 관리·자원봉사 관리·모금 관리는 내부 전용 도구(스프레드시트·문자방·SNS 그룹 포함)로 돌아가면 공개 사이트에 흔적을 남기지 않는다** | 추론 |
| **종합 판정** | **개체 원장(RescueGroups)은 갖췄고, 그 원장을 공개 채널 3곳에 뿌리는 구조도 갖췄다. 없는 것은 「개체가 포스터 가정에 들어간 뒤」의 층이다.** 접수(7필드 폼) → 배치(근거 없음) → 상태 추적(도구 없음) → 진료 이송(파트너 5곳 분산) → 입양 행사(PetSmart) 구간이 **전부 원장 밖에서 사람 손으로 돌아가는 것으로 읽힌다.** 우리 가설(분산 케어 추적)이 정확히 그 자리다 | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인** | **Jill Coffey 단독이 실질 축이다.** ①**IRS BMF 수신인이 본인** ②**990-EZ 상 President** ③**Adopt-a-Pet 유일 담당 연락처** ④**조직 Venmo 수취 핸들이 본인 이름** ⑤창업자 본인. **콜 상대가 곧 데이터 주인이자 결재자이자 실무자다** |
| 함께 있는 사람 | **Kait Lesher — Director($0, 990-EZ 기준일 2025-12-31).** 990-EZ 에 이름이 오른 두 번째이자 마지막 인물이다. **역할·관여 범위는 공개 자료에 없다.** 별도로 LinkedIn 회사 페이지가 직원 2명을 표기하고 **Jessica Staton** 1인을 노출한다 |
| **이사회** | **GuideStar 원문 `This organization has no recorded board members.`** 사이트·SNS 에도 이사 명단이 없다. 다만 **입양 계약서·행사 안내가 `a representative of HPKR`, `Directors and fosters of happy paws` 처럼 복수형을 쓴다** — **서류상 존재인지 실동 인력인지 갈린다. 콜에서 확인 필요** |
| **전결 한도** | **미확인.** 990-EZ 구간이라 지출 승인 기준이 공개되는 서식 자체가 없다. **우리가 먼저 꺼내지 않는다** |
| **거버넌스 자기보고** | GuideStar 자기보고: **신규 이사 오리엔테이션·서면 역할합의 = no** / **최근 1년 내 대표 서면 평가 = yes** / **최근 1년 내 이해충돌 정책 검토·서명 = no** / 이사 다양성 확보 = yes / 최근 3년 내 이사회 자체평가 = yes. **평가 항목은 yes 인데 문서화 항목이 no** 다 |
| 감사 | **미확인.** 990-EZ 에 해당 서식이 없다 |
| 예산 사이클 | **12월 결산.** 콜 시점(2026-09-01)은 **FY2026 9개월 차**, **FY2027 편성 직전**. 논의된 건이 내년 항목이 될 수 있는 정확한 자리 |
| **지불 여력** | **FY2025 수입 $80,828 / 지출 $68,799 / 잉여 $12,029 / 총자산 $17,968 / 유급 직원 0명.** 절대 규모는 작다. 다만 **직전 9년 밴드($50K~$65K)를 처음 벗어난 해**이고 자산이 2년 만에 37배다 |
| **비용 감각** | **990-EZ 에는 IT 지출 항목이 없다.** 지금 쓰는 유료 도구(GoDaddy·JotForm·RescueGroups)의 비용도 밖에서 안 보인다. **"이 지출을 어디서 빼느냐"가 기능 논의보다 먼저 걸릴 관문**(**추론**) |
| **경쟁 기준선** | **이 조직은 이미 RescueGroups.org 를 쓰고 있다.** 따라서 「쉘터 SW 를 처음 도입하는 대화」가 아니라 **「RescueGroups 가 안 덮는 구간」 대화**가 유일하게 성립하는 자리다. **기능 대체·가격 비교로 가면 진다.** RescueGroups 의 실제 계약 형태·비용은 **미확인**이며, 콜에서 우리가 추측해 말하지 않는다 |
| 2차 콜 후보 | **Kait Lesher**(Director — 990-EZ 기재 2인 중 1인) / **Jessica Staton**(LinkedIn 노출 직원, 역할 미확인) / **포스터 코디네이터 역할자**(존재 여부 자체가 미확인) |
| 실무 병목 | **역할 메일함이 하나다.** 입양·포스터·인테이크 문의·언론이 전부 `h***@gmail.com` 으로 들어온다. Contact 페이지 원문: *"Email and text are the best ways to reach us, as we are very busy. We are volunteers and have jobs during the day, making it difficult to answer the phone. We also get a very high volume of calls a day. We usually reply within 24 hours."* **본업이 따로 있는 사람들이 하루 다량의 전화·메일을 24시간 내 처리한다고 스스로 적어 뒀다** |

## 6. Jill Coffey 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| 직책 | **President** (FY2025 990-EZ). 언론·LinkedIn 스크랩 표기는 **Owner/Founder** | CauseIQ(프록시), Salesflow(프록시) |
| **표기명** | **공적 문서는 `Jill Coffey`**(IRS BMF·990-EZ·Adopt-a-Pet), **언론·LinkedIn 은 `Jill Coffey Kelley`** 다. **콜에서는 리드 폼에 적힌 Jill Coffey 를 따른다** | ProPublica API, UT Daily Beacon(프록시) |
| 이메일 | 개인 주소는 공개돼 있지 않다. 조직 창구 **`h***@gmail.com`** 이 유일한 공개 접점 | Adopt-a-Pet(프록시) |
| **보수** | **$0.** 990-EZ 상 임원 보수가 0 이고 조직에 유급 직원이 없다. **무보수 창업자 겸 실무자** | CauseIQ(프록시) |
| **공적 지위** | ①**IRS BMF 수신인(`% JILL COFFEY`)** ②**990-EZ 기재 President** ③**Adopt-a-Pet 등록 담당자** ④**조직 Venmo 수취 핸들 `jill-coffey-0`** | ProPublica API, CauseIQ(프록시), Adopt-a-Pet(프록시), 사이트 HTML |
| 학력 | **University of Tennessee 2007년 졸업** — 기사 원문 *"a UT alumna from the class of 2007"* | UT Daily Beacon(프록시) |
| 재임 기간 | **법인 기준 2015년부터 11년째.** 활동 기준으로는 2024-04 기사의 *"Sixteen years ago"*(약 2008년)부터 | ProPublica API, UT Daily Beacon(프록시) |
| **창업 계기 — 원문** | *"Sixteen years ago, Jill Coffey Kelley, a UT alumna from the class of 2007, and her husband had just recently moved in together when it seemed like everywhere her husband went he would bring home a new cat or kitten."* → 남편이 데려오는 고양이를 **재배치할 책임감**에서 시작 | UT Daily Beacon (2024-04-17, 프록시) |
| **화법 ① — 자기 역량을 「기술」로 명명한다** | 원문: *"It started off with just my friends and family saying, 'Hey, I hear you can help cats find home pretty good. Can you help me find this one a home?' … Then, before you know it, word spreads like wildfire when you're good at finding cats a home. I had people I didn't even know calling me asking me to help find cats a home. **It's a skill I didn't even know I had.**"* **「매칭을 잘한다」를 스스로의 핵심 역량으로 규정한다** | UT Daily Beacon(프록시) |
| **화법 ② — 대화체로 길게 말한다** | 위 인용은 **한 문단 안에 3~4개 문장이 이어지는 구어체**다. **딱 떨어지는 수치형 답변보다 서사형 답변이 나올 상대**로 읽는다(**추론**) | UT Daily Beacon(프록시), 추론 |
| **화법 ③ — 개체 1인칭 서사를 쓴다** | Facebook 최신 게시물(조회 8시간 전)이 *"Hi I'm Misty, and I do what I want. I'm independent, brave, endlessly curious and always the first one getting into something I probably shouldn't."* 로 시작한다. **개체마다 성격 소개문을 사람이 직접 써서 올린다** — 63마리 규모에서 이건 상당한 반복 노동이다 | Facebook(프록시) |
| **외부 협업 이력** | **LollaPAWlooza: Mewsic to the Rescue** — 지역 음악 페스티벌형 모금 행사. **2회차 2024-04-20, Open Chord Stage**, 공동 기획자 **Stephanie Manson**(UT 1995년 졸업), 티켓 $12(사전)/$15(현장), 5개 밴드 + 경품 추첨. **자기 조직 바깥의 사람과 판을 만들어 본 이력이 있다** | UT Daily Beacon(프록시) |
| **운영 문서를 직접 쓴다** | 사이트 `/help-with-cats` 는 **인테이크를 거절하면서 대신 셀프 재배치 방법을 알려주는 자체 매뉴얼**이다 — 응급 시 UT Veterinary Hospital Good Samaritan 프로그램, **입양 희망자 수의사 레퍼런스 체크 전화 스크립트**(*"I'm doing a vet check for an adoption."*), 광고 채널별 요령, 사진 촬영법, 저비용 중성화 8곳 목록까지 들어 있다. **문제를 절차로 바꿔 문서화하는 습관이 있는 사람**(**추론**) | 사이트 HTML, 추론 |
| **경력·직업** | **미확인.** LinkedIn 개인 프로필 직접 열람에 실패했다. 제3자 스크랩 사이트(salesflow.io, 2025-03-23 게시)가 **`Jill Coffey Kelley – Owner/ Founder, Happy Paws Kitten Rescue, Knoxville, Tennessee, United States`** 로 표기하나 **원본 대조 불가**다. 별도로 `Jill Coffey Kelley` 이름의 LinkedIn 프로필이 **`Northview Acadamy`** 헤드라인으로 검색에 잡히는데 **동일인 여부를 확정하지 못했다** — **콜에서 인용하지 않는다** | Salesflow(프록시), 검색 |
| 본업 유무 | 조직 Contact 페이지가 *"We are volunteers and have jobs during the day"* 라고 적는다. **본인 포함 여부는 명시돼 있지 않다**(**추론**, 확인 필요) | 사이트 HTML, 추론 |
| **대명사** | **본인이 밝힌 대명사가 확인되지 않았다.** UT Daily Beacon 기사가 `she/her` 로 지칭하나 본인 진술은 아니다. **콜 전까지 단정하지 말 것** | — |
| **성향 판정** | **①18년 활동·11년 법인의 무보수 창업자 ②「매칭 능력」을 자기 정체성으로 말하는 사람 ③개체별 서사를 직접 쓰는 사람 ④거절해야 하는 요청조차 매뉴얼로 바꿔 놓는 사람.** → **조직 지표·대시보드·ROI 언어보다, 「이 아이가 지금 어느 집에서 어떤 상태인지」 같은 개체 단위 운영 질문에 반응할 상대**로 읽는다. 동시에 **63마리라는 숫자를 우리가 이미 알고 들어가는 것이 강점**이며, 반대로 **"몇 마리나 하세요"를 묻는 것은 감점**이다 (**추론**, 직접 대면 근거 없음 — 콜 초반에 화법을 관찰해 조정할 것) | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2024-04-17** | **UT Daily Beacon 기사 — LollaPAWlooza 2회차 소개.** 조직 창업 서사와 본인 인용이 실린 **유일한 언론 보도**다 | UT Daily Beacon(프록시) |
| 2024-04-20 | **LollaPAWlooza: Mewsic to the Rescue 2회차 개최**(Open Chord Stage). 수익 전액이 조직 의료비로 | UT Daily Beacon(프록시) |
| **2025-03-25** | **FY2024 990-EZ IRS 접수.** 수입 $50,270 — **9년 밴드의 하단** | CauseIQ(프록시) |
| **2025-10-25** | **`Tails on Trails` 개최**(Baker Creek Preserve, 08:30–13:00). 사이트 설명 원문: *"Please join us for a powerful and joy-filled morning to honor the pets we love and support animals in need."* | 사이트 HTML |
| 2025-12-31 | **Kait Lesher — Director** 로 990-EZ 데이터에 기록된 기준일 | CauseIQ(프록시) |
| **2026-05-14** | **FY2025 990-EZ IRS 접수 — 수입 $80,828(+60.8%), 지출 $68,799, 총자산 $17,968.** 9년 만에 수입 밴드를 벗어났고 자산이 2년 만에 37배가 됐다 | CauseIQ(프록시), ProPublica API |
| **2026-06-27** | **PetSmart Turkey Creek 입양 행사**(12:00–15:00). 사이트 설명 원문: *"Come by and see our beautiful cats and kittens available for adoption. Directors and fosters of happy paws will be on hand to answer and qu…"* | 사이트 HTML |
| **2026-06-27** | **사이트 sitemap 의 11개 페이지 `lastmod` 가 전부 이 날짜다.** 이후 갱신 흔적이 없다 | sitemap |
| **2026-07-16** | CauseIQ 가 FY2025 990-EZ 를 반영(`Posted financials`) | CauseIQ(프록시) |
| **2026-08 (Yelp 표기)** | Yelp 리스팅이 `Updated August 2026` 로 표기된다. **본문은 자동 열람 차단으로 미확인** | 검색 |
| **2026-09-01 (조회 시점)** | **Facebook 최신 게시물이 8시간 전.** 개체 `Misty` 소개글이고 댓글이 1시간 전에 달렸다. **사이트는 2개월 정지, SNS 는 당일 가동 — 갱신의 무게가 완전히 SNS 쪽에 있다** | Facebook(프록시) |
| **사이트 캘린더 상태** | **홈 캘린더에 등록된 행사가 `06/27/26` 과 `10/25/25` 두 건뿐이고 둘 다 이미 지났다.** 조회 시점 기준 「예정 행사」로 표시되는 것이 없다 | 사이트 HTML |
| 외부 채널 노후 | **Adopt-a-Pet 에 걸린 입양 신청 링크가 현 사이트에 존재하지 않는 구 URL**(`happypawskittenrescue.org/applications-and-contracts.html`)이다. **WeRescue 자기보고 입양비 `$65` 도 현재 값과 다르다** | Adopt-a-Pet(프록시), WeRescue(프록시) |
| **부정적 사건** | **소송·행정처분·동물 압류·자금 논란·언론 부정 보도 전부 검색되지 않았다.** 확인된 부정 신호는 **「declaw 의사를 밝혔다가 입양이 거절됐다」는 취지의 개인 리뷰 1건**뿐이고, 이는 입양 신청서에 실재하는 문항(*"Do you plan to declaw the cat?"*)의 결과다. Facebook 리뷰는 **300건 중 94% 추천** | 검색, Facebook(프록시) |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

정황에서 끌어낸 것만 적는다. 각 줄에 확인 필요 여부를 밝힌다.

- **포스터 신청서가 배치 판단에 필요한 값을 하나도 받지 않는다 — 이 콜의 중심이다.** 필드 7개(Name / Email / Phone / 자기소개+가구 내 반려동물 수 / Home Address / `Fosters vet and phone` / `Sign and date`)에 **①동시 가능 두수 ②가용 기간 ③투약·포유·회복기 케어 가능 여부 ④선호 연령대**가 전부 없다. 그런데 실제 개체군에는 **`Fritz FIV+`·`Taylor FIV+`·`Mary ( Blind Kitty)`** 같은 특수 케어와 **본디드 페어 3쌍**이 들어 있다. → **승인된 포스터에게 어느 아이를 보낼지 무엇을 보고 정하는지 반드시 확인.**
- **개체의 의료 상태와 관계가 「이름 문자열」에 들어가 있다.** 63건 중 최소 8건이 `Fritz FIV+`, `Mary ( Blind Kitty)`, `Little Bit (Bobtail)`, `Mama Indigo`, `Tangerine and Squeaks (Brothers)`, `Taylor & Tyalar`, `Wubs & Ally` 처럼 **상태·본디드 여부를 이름 칸에 적어 두는 방식**이다. **구조화된 필드로 관리하면 이름에 넣을 이유가 없다.** → **RescueGroups 에서 어느 필드까지 실제로 채우는지, 검색·필터에 쓰는지 확인 필요**(**추론**).
- **개체별 진료가 최소 5개 외부 클리닉으로 흩어지고, 그 이송을 포스터가 한다.** 포스터 페이지 원문에 **Admiral Veterinary Hospital / Young-Williams(중성화) / PPAWS / Kindness Counts / Planned Pethood** 가 나열돼 있고, 포스터의 역할이 *"transport to scheduled vet appointments at our partner clinics"* 로 명시돼 있다. → **「어느 아이가 어느 클리닉에 언제 예약돼 있고 갔는지」를 무엇으로 보는지 확인 필요.** 조직이 비용을 전부 부담(*"We cover all veterinary care for our foster cats and kittens."*)하므로 **미이행이 곧 재예약·재지출**이다.
- **포스터 신청 접수와 개체 원장이 서로 모른다.** 포스터 신청은 GoDaddy 네이티브 폼(제출처 비공개), 입양 신청은 JotForm, 개체 원장은 RescueGroups 로 **세 시스템이 분리**돼 있다. 입양 신청서의 개체 지정 문항도 **`Name of the cat of interest` 자유 입력**이라 원장 레코드와 연결되지 않는다. → **접수 후 어느 개체 건인지를 사람이 붙이는지 확인 필요**(**추론**).
- **모든 유입이 하나의 gmail 받은편지함으로 모인다.** 입양·포스터·인테이크 요청·언론이 전부 `h***@gmail.com` 이고, 조직이 스스로 *"We also get a very high volume of calls a day. We usually reply within 24 hours."* 라고 적는다. **월 「hundreds of requests」의 인테이크 요청이 여기에 섞여 들어온다.** → **포스터에게서 오는 상태 보고와 인테이크 요청이 같은 함에 섞이는지, 섞인다면 무엇으로 갈라내는지 확인 필요.**
- **조직이 「인테이크 거절」을 절차로 문서화했다는 것 자체가 부하의 크기를 말한다.** `/help-with-cats` 는 응급 경로·수의사 레퍼런스 체크 스크립트·광고 채널·사진 촬영법·저비용 중성화 8곳까지 담은 **셀프 재배치 매뉴얼**이다. **거절 응대에 드는 시간이 매뉴얼을 쓸 만큼 컸다는 신호**(**추론**).
- **입양 심사가 한 건당 다중 전화 검증이다.** 신청서가 **수의사 실명·전화**, **임대 관리인 이름·전화**, **무관계 레퍼런스 2인**, 그리고 *"Have you been to any additional veterinarians or animal hospitals in last 10 years…"* 까지 받는다. 조직이 별도 문서에 통화 스크립트까지 적어 뒀다. **유급 인력 0명 조직에서 이건 확정적 병목**이다. → **한 건 심사에 며칠이 걸리는지, 대기 중인 신청이 몇 건인지 확인 필요**(**추론**).
- **반환이 곧 재배치이고, 그 재배치가 포스터 네트워크에서 일어난다.** 입양 계약서 원문: ***"If a foster home cannot be located, I agree to work with Happy Paws to place the animal with another foster within the organization."*** 그리고 **5일 트라이얼** 조항이 있다. → **트라이얼 중 반환이 얼마나 나오고, 그때 다음 포스터를 어떻게 찾는지 확인 필요.** 「빈 자리가 어디인지」를 아는 문제라서 우리 제품의 정중앙이다.
- **Petfinder 가 늦다는 것을 조직이 알면서 두 채널을 병행 노출한다.** `/available-cats` 원문 *"Not all cats may be listed as it updates slow. Our original format below has all cats."* 실측도 RescueGroups 63 / Adopt-a-Pet 63 / WeRescue 61 로 벌어져 있다. → **새 개체가 들어오면 어디어디에 무엇을 입력하는지 확인. 콜에서 먼저 지적하지 말고 "새 아이가 들어오면 어디어디에 올리시나요"로 물어 상대가 스스로 세게 할 것.**
- **입양 행사가 개체를 다시 이동시킨다.** PetSmart 행사에 *"bringing your foster helps them get adopted faster"* 로 **포스터가 직접 아이를 데려오게** 한다. → **행사 당일 어느 포스터가 어느 아이를 데려오는지를 무엇으로 취합하는지 확인 필요.** 문자·댓글로 모으고 있을 개연이 높다(**추론**).
- **개체 소개문을 사람이 개체마다 쓴다.** Facebook 게시물이 1인칭 성격 서사(`Hi I'm Misty, and I do what I want.`)이고, 63마리 규모로 이걸 유지 중이다. → **그 문안이 RescueGroups 설명 필드와 같은 것인지, 따로 쓰는 것인지 확인 필요**(**추론**).
- **사이트는 6월에 멈췄는데 개체 데이터는 살아 있다.** sitemap 11페이지 `lastmod` 가 전부 2026-06-27 이고 캘린더의 마지막 행사도 같은 날인데, RescueGroups 피드는 현재 값을 반환하고 Facebook 은 당일 게시물이 있다. → **「관리되는 자산」과 「방치된 자산」이 갈려 있다.** 우리가 붙을 자리는 전자 쪽이다.
- **자원봉사 관리 도구가 0건이다.** 100% 자원봉사 조직인데 Volgistics·Better Impact·SignUpGenius 어느 것도 없다. → **자원봉사자와 포스터를 구분해서 관리하는지, 같은 명단인지 확인 필요**(**추론**).
- **990-EZ 상 수입 전액이 기여금 라인이다.** 입양비($100/$125/$65)를 받으면서도 FY2025·FY2024 프로그램 수입이 $0 이다. → **입양비 수납·정산을 별도로 집계하지 않을 개연**이 있다(**추론**, 회계 처리 방식일 수도 있으므로 단정 금지 — 콜에서 회계 얘기를 먼저 꺼내지 않는다).

## 미확인 요약 (콜에서 확인할 것)

1. **지금 63마리를 몇 가정이 나눠 갖고 있는가** — 폼 자기보고는 `11–30`. 시설이 없으므로 전원이 남의 집에 있다. **첫 30초 안건**
2. **RescueGroups 를 어디까지 쓰는가** — 개체 등재·사진·설명까지인가, 의료 기록·포스터 배정·체류일수까지인가. 답에 따라 우리 제안의 자리가 통째로 바뀐다
3. **포스터에게서 오는 상태 보고를 무엇으로 받는가** — 문자인가, Facebook 메신저인가, 전화인가. 지금 도구가 0건이다
4. **승인된 포스터에게 어느 아이를 보낼지 무엇을 보고 정하는가** — 신청서에 동시 가능 두수·기간·투약 가능 여부가 없다
5. **포스터를 늘리려 할 때 지금 무엇이 막고 있는가** — 신청 유입인가, 심사인가, 배치 후 가시성인가. 셋은 완전히 다른 문제다
6. **입양 신청 58문항 심사를 누가 며칠에 처리하는가** — 수의사·임대인·레퍼런스 2인 전화가 한 건에 붙는다. 대기 중인 신청이 몇 건인가
7. **5일 트라이얼 중 반환이 얼마나 나오고, 그때 다음 포스터를 어떻게 찾는가** — 계약서에 조직 내 재배치 조항이 명시돼 있다
8. **파트너 클리닉 5곳의 예약·이행을 무엇으로 보는가** — 이송은 포스터가 하고 비용은 조직이 낸다. 미이행이 곧 재지출이다
9. **새 개체가 들어오면 어디어디에 입력하는가** — RescueGroups·Petfinder·Adopt-a-Pet·Facebook. 조직이 이미 지연을 인지하고 사이트에 적어 뒀다
10. **PetSmart 행사 당일 누가 어느 아이를 데려오는지를 어떻게 취합하는가**
11. **`Kait Lesher` 와 `Jessica Staton` 이 각각 무엇을 하는가** — 990-EZ 기재 2인 중 1인, LinkedIn 노출 직원 1인. 역할이 공개 자료에 없다
12. **이사회가 실재하는가** — GuideStar 는 「기록된 이사 없음」인데 계약서·행사 안내는 `Directors` 복수형을 쓴다. **도구 예산 전결과 직결된다**
13. **연간 인테이크·입양·라이브릴리스율** — 990-EZ 구간이라 어떤 계량치도 공개되지 않는다
14. **월 「hundreds of requests」의 인테이크 요청을 어떻게 처리하는가** — 거절 매뉴얼까지 만들었다. 그 응대에 실제로 얼마가 드는가
15. **소재 B(임시보호자 업데이트 수집)에 반응한 이유** — 지금 없는 것을 만들려는 것인가, 있는데 새는 것인가. **이 콜의 최대 소득**
16. **소프트웨어 지출을 누가 어떤 기준으로 승인하는가** — 990-EZ 에 IT 항목이 없고 유급 직원이 0명이다. **먼저 꺼내지 말고 상대가 비용을 물을 때만 받을 것**
17. **본인이 밝힌 대명사** — 확인되지 않았다. 콜 전까지 단정하지 말 것
