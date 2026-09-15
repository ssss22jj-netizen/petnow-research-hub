# Final Victory Animal Rescue 사전조사

- 작성일: 2026-09-08 / 목적: Katy Cowan 콜 준비 / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Rescue", "role": "Executive director or founder", "system": "Buzz to the Rescues", "adoptions": "Over 300"}` / 유입 소재 **A(입양 준비 상태 추적 — 폼에서 연간 입양 건수를 물었다)**
- **조직 확정 · 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: **이메일 도메인이 gmail.com 이라 도메인으로는 조직을 특정할 수 없다.** 특정은 조직명 고유성(IRS 전국 1건) · 폼의 `system` 값 · 990 임원 명단 · 조직 팀 페이지 네 축을 맞물려 세웠다
- 출처 주석 ②: **자동 요약기가 원문에 없는 문장을 인용부호로 반환하는 사고가 과거에 확인됐다.** 이 문서에 큰따옴표로 인용한 영문은 **전부 내려받은 원문에서 문자열 일치로 재검증**한 것만 실었다
- 출처 주석 ③: **990 원문 PDF 는 확보하지 못했다**(ProPublica 다운로드가 403·캡차로 차단). 재무 수치는 **ProPublica API(IRS 추출 데이터)** 와 **Cause IQ 판독본**이며, 출처 열에 각각 구분해 적었다. **FY2025(FYE 2025-06)는 IRS BMF 요약 + Cause IQ 수입 항목만 있고 지출·순자산은 미확인**이다
- 출처 주석 ④: 조직 사이트는 **핵심 20개 페이지의 HTML 원문과 리더 프록시 판독본을 이중 확보**해 문자열 검색했다. 그 경우 출처에 `사이트 HTML` 또는 `사이트 원문`으로 표기
- 출처 주석 ⑤: 개체 수 집계는 **WordPress 사이트맵(`wp-sitemap-posts-*.xml`) 실측**이다. 조직이 게시한 연간 통계가 아니다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다. 원문 인용에 번지가 포함된 경우 `[주소 생략]`으로 대체했다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Final Victory Animal Rescue Inc, EIN 82-1744847**, 501(c)(3), **면세승인 2017-10**, NTEE **D20**(Animal Protection and Welfare), **6월 결산**, 정식 990 신고 | ProPublica API, Cause IQ |
| **동명 조직** | ProPublica `Final Victory Animal Rescue` 검색 결과가 **전국에 정확히 1건**이다(`total_results: 1`). 조직명 자체가 고유해 교차 오염 여지가 없다 | ProPublica API |
| **폼의 `system` — 결정적 근거 ①** | 폼 자기보고가 **`Buzz to the Rescues`** 인데, **조직 사이트가 실제로 Buzz 테마 위에 올라가 있다**. 전 페이지가 `/wp-content/themes/**buzz-rescues**/` 경로의 CSS·JS·이미지를 로드하고, 전 페이지 푸터에 **`Powered By: Buzz`** 배지가 `buzztotherescue.com` 링크로 박혀 있다. 개체 페이지 경로도 Buzz 규약대로 `/dog/`·`/kitty/` 다 | 사이트 HTML |
| **신청자 — 결정적 근거 ②** | **FY2025 990 Part VII 임원 명단에 `Kathryn Cowan / President` 가 있다**(보수 $9,200). `Katy` 는 `Kathryn` 의 통상 애칭이고, 조직 팀 페이지에는 **`Katy` / `Founder`** 로 실려 있다 | Cause IQ(990 판독), 사이트 원문 |
| **신청자 — 보조 근거 ③** | 외부 인명 DB 표기가 **`Founder & President at Final Victory Animal Rescue`**, 조직 관련 GoFundMe 캠페인 주최자가 **`Katy Cowan`** 이다 | ZoomInfo 검색 결과, GoFundMe |
| **이메일 도메인** | **gmail.com — 조직 특정에 쓸 수 없다.** 다만 조직이 실무에 gmail 주소를 병용하는 것은 확인된다. FAQ·자원봉사 페이지의 mailto 가 **`F***@gmail.com`**, **`F***@gmail.com`** 으로 걸려 있다(표시 텍스트는 `@finalvictoryrescue.com` 인데 링크 대상이 gmail 이다). **정합적이지만 결정적 근거는 아니다** | 사이트 원문 |
| 폼 자기보고 대조 | `org_type: Rescue` → **시설(sanctuary) 보유 + 포스터 네트워크 혼합형 레스큐**(맞음, 다만 순수 포스터형이 아니다) / `role: Executive director or founder` → **Founder 겸 President**(맞음. 단, **조직 안에 별도의 Executive Director 가 따로 있다** — 1·5절) / `system: Buzz to the Rescues` → **실사용 확정** / `adoptions: Over 300` → **폼 선택지의 최상단 구간이고, 실제 규모는 이 구간이 시사하는 것보다 훨씬 크다**(3절) | leads.json, 사이트 HTML, Cause IQ |

→ **조직도 신청자도 확정.** 조직명이 IRS 전국 1건이고, 폼에 적힌 도구가 사이트에서 그대로 검출되며, 990 임원 명단의 President 이름이 신청자와 일치한다. **콜에서 신원 확인에 시간을 쓸 필요가 없다.** 다만 **「누가 결재하는가」는 별개 문제이고, 그것이 이 콜의 최대 미확인이다**(5절).

## 미팅에서 바로 쓸 핵심 5줄

1. **폼의 「Over 300」은 선택지의 천장일 뿐이다. 이 조직의 실제 규모는 우리 리드 풀 상위권이고, 최근 2년 사이에 2.7배로 커졌다** — FY2025(FYE 2025-06) 수입 **$1,763,509**, 전년 대비 **+74.2%**. FY2023 $652,795 → FY2025 $1,763,509 이니 2년 만에 2.7배다. 그중 **입양·이송 등 프로그램 수입만 $672,807** 이고, 조직이 게시한 표준 입양비가 **개 로컬 $450 / 북동부 이송 $650, 고양이 $275 / $475** 다. 감액·스폰서 수수료를 넉넉히 감안해 평균 $400~600 으로 잡아도 **연 1,100~1,700건** 구간이 나온다(**추론**, 프로그램 수입에 이송료·기타가 섞였을 수 있다). 사이트 원장 쪽도 같은 방향이다 — WordPress 사이트맵 실측으로 **개 개체 레코드 5,496건 · 고양이 1,803건(합 7,299건)** 이 쌓여 있고, About 페이지 자기표기가 **"more than 5,000 rescued animals being placed in forever homes"** 다. **콜 초반에 「연 몇 마리가 나가느냐」를 정확한 숫자로 받아 적을 것.** 폼 응답은 축소가 아니라 선택지 부족이다.

2. **이 조직은 Buzz 를 쓰는데, Buzz 가 「할 수 있다」고 파는 기능의 상당 부분을 안 쓰고 있다. 그 빈자리가 정확히 우리 자리다** — Buzz 는 자기 사이트에서 **"Customize unlimited adopter, foster and volunteer applications with conditional logic"**, **"Pair animals with fosters & provide role-based, customized access to edit profiles"**, **"Showcase unlimited volunteer and foster opportunities"** 를 판다. 그런데 이 조직에서 실제로 돌아가는 것은 이렇다 — **입양·포스터·자원봉사 신청서가 전부 Gravity Forms(WordPress 폼 플러그인)** 이고(개 포스터 신청서 한 장에만 `gform_wrapper` 24개), **자원봉사 시프트 예약은 Bugle Volunteers 라는 별도 SaaS**(`app.buglevolunteers.com`)이며, **Petfinder 등재는 `Bri / Petfinder Coordinator` 라는 전담 사람**이 맡는다. 즉 **원장은 있는데 원장 밖에서 사람이 잇고 있다.** 콜에서 이걸 우리가 「안 쓰시네요」라고 짚으면 안 된다. **첫 질문은 「포스터 신청이 들어오면 그 다음은 어디로 가나요」다.**

3. **「입양 나갈 준비가 됐는가」가 이 조직에서 이미 명시적 문제이고, 조직이 스스로 「밖에서는 안 보인다」고 적어 두었다. 우리 소재 A 와 문장 단위로 겹친다** — 개 목록 페이지 원문: ***"If a dog is listed on this page, it means we are still accepting applications for his/her adoption. However, there may be other applications for them already submitted and in line to adopt."*** FAQ 원문: ***"Availability status changes quickly. If you are interested in an animal, please apply to get in line for adoption."*** 그리고 결정적인 한 줄 — ***"If a dog is not listed as tested with cats or kids on our website, please request this during your application approval process."*** **개체의 「고양이·아이와 지내봤는가」를 아는 사람은 포스터인데, 그 정보가 리스팅에 올라와 있지 않아 신청자가 사람에게 따로 요청해야 한다.** 분산 케어 추적이 새고 있다는 우리 가설의 **자기 진술 증거**다.

4. **채널이 서로 안 맞는다. 그리고 같은 개 한 마리가 Petfinder 에 12번 올라가 있다** — 2026-09-08 동시 조회 기준, **조직 사이트 「Available Cats」에 고양이 72마리**가 걸려 있는데 **Adopt-a-Pet 조직 페이지는 개·고양이 합쳐 `1 - 9 of 29 pets available`** 이다. Petfinder 쪽은 더 선명하다 — 개 **Beaux** 가 SC Columbia · CT Milford · ME Boothbay · MA Jamaica Plain · DC Washington · NY Buffalo · MD Frederick · NH Northwood · NJ Howell · NY New York · PA West Chester · RI Providence **12개 도시에 각각 서로 다른 개체 UUID 로 등록**돼 있고, **Hollie** 도 같은 패턴이다. 이송 경로 도시별로 레코드를 따로 만든다는 뜻이고, **한 마리의 상태가 바뀔 때마다 사람이 12곳을 고쳐야 한다.** `Petfinder Coordinator` 라는 직함이 따로 있는 이유가 여기 있는 것으로 보인다(**추론**). **콜에서 「Petfinder 담당이 따로 계시던데, 그분이 하루에 몇 건을 만지시나요」로 열 수 있다.**

5. **지금 $400,000 짜리 신축 프로젝트가 시 인허가 대기 중이고, 목표 모금액의 26%만 모였다. 유보는 얇다** — Midlands Gives 2026(**2026-05-05, 하루짜리 행사**) 조직 페이지 원문: ***"We are raising funds to build a NEW 4,800 square foot animal rescue facility on our current property at [주소 생략] in West Columbia."*** / ***"The estimated building project cost is $400,000"*** / ***"to help move this vision forward as soon as city permit approvals are complete."*** 실적은 **$26,280 / 목표 $100,000(26%), 후원자 282명**이다. 재무 쪽도 얇다 — **FY2024 순자산 $64,878 은 같은 해 지출($955,521)의 약 25일치**다. FY2025 에 수입이 74% 뛰었지만 **지출·순자산은 아직 공개 자료가 없다**. → **가격을 먼저 꺼내지 않는다.** 꺼낼 자리가 오면 프레임은 「또 하나의 도구값」이 아니라 **「시설이 두 배가 되면 지금 사람이 하는 이 동작이 몇 배가 되는가」** 다. 그리고 **신축 얘기를 우리가 먼저 꺼내면 오지랖이 된다** — 상대가 꺼낼 때만 받는다.

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Final Victory Animal Rescue Inc**(IRS 등록명). 통용 약칭 **FVAR**. 2018년 지역방송 표기는 **"Final Victory Animal Rescue and Rescue Services"** 로 또 다르다 | ProPublica API, wistv.com |
| EIN·지위 | **82-1744847** / 501(c)(3), **면세승인 2017-10**, **6월 결산**, 정식 990 신고(FY2018분부터 열람 가능), 공제 가능(Pub 78) | ProPublica API, Cause IQ |
| NTEE·NAICS | **D20**(Animal Protection and Welfare) / NAICS 813312 | Cause IQ |
| 소재지 — 운영 | **West Columbia, SC**(Lexington County). 시설 자기표기: ***"We are a nonprofit dog and cat rescue located in West Columbia, South Carolina."*** | 사이트 원문 |
| **소재지 — IRS 등록** | **Eastover, SC**(Richland County)로 최신 BMF 에 등록돼 있다. 과거 ProPublica 조직 레코드의 등록지는 **Columbia, SC** 였다. **운영지(West Columbia)와 등록지(Eastover)가 다르다** — 소규모 레스큐에서 흔한 대표 자택·신규 부지 등록으로 보이며 **직접 확인 필요** | ProPublica API, Cause IQ, 추론 |
| **성격 — 핵심** | **시설(sanctuary)을 보유한 이송형 레스큐다. 시립 보호소가 아니다.** 자기표기 원문: ***"Our rescue receives no government funding."*** / ***"Through our large sanctuary, expansive fostering community, incredible volunteers, and transport connections, we give pets final victories."*** **인테이크의 주 경로는 지역 카운티 보호소에서 안락사 위기 개체를 끌어오는 것**이다 — 포스터 페이지 원문: ***"foster homes help us determine how many animals we can pull from county shelters, who may be long term residents and/or at risk of euthanasia due to overcrowding."*** | 사이트 원문, Petfinder |
| **사업 모델** | **남부에서 받아 동북부로 보낸다.** 990 프로그램 설명: ***"Rescueing, transporting, boarding, and providing medical care and adoption/foster placement for abandoned dogs & cats within the surrounding communities."*** 입양 페이지: ***"We offer transport to adopters up the east coast and located in the Northeastern United States!"*** | Cause IQ(990 판독), 사이트 원문 |
| **서비스 권역** | **인테이크 = South Carolina 지역 카운티 보호소** / **배출 = SC 로컬 입양 + 동북부 이송.** Petfinder 등재 도시로 확인되는 이송 목적지는 **CT · ME · MA · DC · NY · MD · NH · NJ · PA · RI** 10개 주다 | 사이트 원문, Petfinder |
| 설립 | **2017년 5월**. 원문: ***"Final Victory Animal Rescue was founded in May 2017 to serve a need for the animal rescue community."*** IRS 면세승인은 같은 해 10월 | 사이트 원문, ProPublica API |
| **설립자 겸 최고 책임자** | **Katy(Kathryn) Cowan — Founder / President.** 2018년 지역방송 표기는 ***"founder and director"*** | 사이트 원문, Cause IQ, wistv.com |
| **집행 책임자** | **Michael Sniezek — Executive Director(팀 페이지 표기 `Michael / Executive Director`) 겸 Treasurer 겸 Board Chair.** FY2025 보수 **$48,121** — **조직 내 최고 보수자다** | 사이트 원문, Cause IQ(990 판독) |
| **운영·마케팅 책임자** | **Karen Gregory — Marketing + Operations Manager 겸 Board Member.** FY2025 보수 **$42,660** | 사이트 원문, Cause IQ(990 판독) |
| **집행부가 곧 이사회다** | **990 Part VII 에 잡힌 3인 중 2인이 「이사 + 상근 관리자」 겸직**이다(Michael = Treasurer·Board Chair·ED / Karen = Board Member·Marketing & Ops Manager). **이사회 전체 명단·인원은 사이트·공개 자료 어디에도 없다 — 미확인** | Cause IQ, 사이트 원문 |
| **우리 제품이 실제로 닿는 자리** | **Stephanie — `Local Adoptions Manager + Foster Coordinator`.** 로컬 입양과 포스터 조율이 **한 사람에게 묶여 있다.** 포스터 페이지·FAQ 가 반복해서 지시하는 대상이 이 사람이다 — ***"please contact our foster coordinator directly to check current availability and discuss the best match for your home."*** / ***"Just let our foster coordinator know what type of living environment you have when being paired with a dog."*** | 사이트 원문 |
| 팀 구성(사이트 게시) | **8명** — Katy(Founder) · Michael(Executive Director) · Leslie(Medical Manager) · **Stephanie(Local Adoptions Manager + Foster Coordinator)** · Karen(Marketing + Operations Manager) · Miriam(Volunteer + Event Coordinator) · **Bri(Petfinder Coordinator)** · Riley(Cat Coordinator). **성은 팀 페이지에 공개돼 있지 않다** | 사이트 원문 |
| **재택 자원봉사 신청서 처리팀** | **25명**(이름만 게시: Ashley, Patty, Liesl, Krystal, Briahna, Sarah, Zach, Emma, Erica, Brittany, Amie, Ashlund, Alexandra, Karl, Summer, Meghan, Hamilton, Caitlin, Liesbeth, Katheryn, Jaime, Savannah, Ryn, Lindsey, Rebecca). 팀 페이지 원문: ***"They review apps, check references, connect with fosters and adopters, and set up meet-and-greet appointments to help get our cats + dogs into forever homes."*** **out-of-town 자원봉사자도 받는다** | 사이트 원문 |
| **유급 인력 규모** | **정확한 인원 미확인.** FY2024 급여 지표만 있다 — 임원 보수 $51,462 + 기타 급여 $272,967 + 급여세 $24,955 = **$349,384**(지출의 36.6%). FY2025 는 임원 3인 합계 $99,981 만 확인 | ProPublica API, Cause IQ |
| 개방 정책 | **완전 예약제.** About 원문: ***"We are open by appointment only in order to provide the best care and attention to both people and animals."*** FAQ 원문: ***"Our facility is open by appointment only, so drop-in walkthroughs are not permitted except when we have scheduled Open Houses."*** | 사이트 원문 |
| **현장 인원 상한** | **동시 10명.** 원문: ***"Due to our limited space, we are only able to have 10 volunteers on site at a time."*** 그룹 Doggy Day Out 도 ***"up to 10 people may pick up the dogs... one dog per car, for a maximum of 10 dogs in total."*** | 사이트 원문, Bugle |
| **인증·네트워크** | **Best Friends Animal Society 네트워크 파트너** / **Petfinder 회원 SC497** / **Adopt-a-Pet 조직 143212** / **Petco Love Lost** / **Chewy Shelter & Rescue 파트너** / **CUDDLY 파트너** / **Rehome(Adopt-a-Pet) 등록** | bestfriends.org, 사이트 HTML, 검색 |
| 웹 자산 | 자체 사이트(**WordPress + Buzz to the Rescues 테마 + Gravity Forms + GiveWP + Beaver Builder + EventON**) + Facebook(`/finalvictoryrescue`) + Instagram(`@finalvictoryrescue`) + TikTok(`@finalvictoryanimalrescue`) + Patreon + Bonfire 스토어 + `linktr.ee/FVAR` | 사이트 HTML |
| **소셜 규모** | **미확인.** Facebook·Instagram·TikTok 모두 자동 열람 차단 | — |
| **대외 평판** | **미확인.** Yelp(리뷰 20건 표기) · BBB 프로필 존재하나 자동 열람 차단. **소송·행정처분은 검색되지 않았다** | 검색 |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **6월 결산.** 콜 시점 2026-09-08 은 **FY2027 1분기 초반**이다. 「올해 남은 예산」이 아니라 **「이제 막 시작한 회계연도의 새 항목」 프레임이 맞는다**(**추론**) | ProPublica API(accounting_period 6), 추론 |
| 신고 양식 | **FY2021 이후 정식 990**(FY2018~FY2020 은 990-EZ) | ProPublica API |
| **FY2025** (2025-06) | **총수입 $1,763,509 (+74.2%)** / 기여·보조금 **$1,091,033 (+142.4%)** / 프로그램 수입 **$672,807 (+19.6%)** / 투자수익 $549 / 자산매각손 −$880. **총자산 $444,123**(BMF). **지출·순자산·급여 총액은 미확인 — 항목별 추출 데이터가 아직 없다.** 990 IRS 접수일 **2025-11-11** | Cause IQ(990 판독), ProPublica API(BMF) |
| **FY2024** (2024-06) | 수입 **$1,012,542** / 지출 **$955,521** / **흑자 +$57,021** / 총자산 $97,717 / 부채 $32,839 / **순자산 $64,878** / 기여 $450,099 / **프로그램 수입 $562,437(수입의 55.6%)** / 임원보수 $51,462 / 기타급여 $272,967 / 급여세 $24,955 | ProPublica API |
| **FY2023** (2023-06) | 수입 **$652,795** / 지출 **$668,248** / **적자 −$15,453** / 총자산 $18,492 / 부채 $10,635 / **순자산 $7,857** / 기여 $266,473 / 프로그램 수입 $386,318 / 임원보수 $50,326 / 기타급여 $153,480 | ProPublica API |
| FY2022 (2022-06) | 수입 $569,327 / 지출 $568,255 / **흑자 +$1,072** / 순자산 $23,310 / 프로그램 수입 $340,916 / 임원보수 $7,171 / 기타급여 $126,677 | ProPublica API |
| FY2021 (2021-06) | 수입 $308,114 / 지출 $306,325 / 순자산 $22,238 / **프로그램 수입 $27,541**(비중 8.9%) / 임원보수 $7,009 | ProPublica API |
| FY2020 (2020-06, 990-EZ) | 수입 **$39,950** / 지출 $31,327 / 순자산 $20,449. **전년 대비 78% 급감한 이상치다.** COVID 영향인지 신고 방식 차이인지 **원인 미확인 — 콜에서 언급하지 않는다** | ProPublica API |
| FY2019 (2019-06, 990-EZ) | 수입 $183,854 / 지출 $172,646 / 프로그램 수입 $119,676 | ProPublica API |
| FY2018 (2018-06, 990-EZ) | 수입 $140,461 / 지출 $139,843 / 순자산 $618 | ProPublica API |
| **재무 궤적 요약** | **FY2018 $140,461 → FY2025 $1,763,509 로 7년간 12.6배.** 특히 **FY2023 → FY2025 2년 만에 2.7배**다. 적자는 FY2023 한 해(−$15,453)뿐이다. **성장 곡선이 가파른 조직이고, 지금이 그 곡선의 가장 가파른 구간**이다 | ProPublica API, Cause IQ |
| **유보 수준 — 주의** | **FY2024 순자산 $64,878 은 같은 해 지출 $955,521 의 약 25일치**다. FY2023 은 순자산 $7,857 로 **4일치**였다. **성장은 빠른데 완충은 거의 없는 구조**다. FY2025 총자산이 $444,123 으로 뛰었으나 **부채·순자산 구성이 미확인**이라 완충이 두꺼워졌다고 단정할 수 없다 | ProPublica API, 계산값 |
| **수입 구조** | **정부 지원이 없다**(자기 진술: ***"Our rescue receives no government funding."***). 구성은 **기여·보조금 61.9% + 프로그램 수입 38.1%**(FY2025). **프로그램 수입 비중이 FY2021 8.9% → FY2024 55.6% 로 급등**했다 — 로컬 입양·이송 사업이 본격화된 궤적이다 | Cause IQ, ProPublica API, 사이트 원문 |
| **확인된 재단 보조금** | **PayPal Giving Fund $68,094**(2024-12, General Support) / **Leslie L Alexander Foundation $55,000**(2024-12, Animal Rescue) / **Central Carolina Community Foundation $28,189**(2025-06, General Support — Midlands Gives 정산으로 보인다, **추론**) / **The Velaj Foundation $2,000**(2025-04). Cause IQ 표기상 **5건 더 있으나 유료 구간이라 미확인** | Cause IQ |
| **입양비** | **개 — 로컬 $450 / 북동부 이송 $650.** **고양이 — 로컬 $275(2마리 $500) / 북동부 이송 $475(2마리 $800).** 단서 원문: ***"The following fees apply to the majority (but not ALL) animals at our rescue"*** / ***"Several dogs do have reduced and sponsored fees!"*** / ***"Please verify adoption fee with your application processor prior to scheduling your meet and greet."*** | 사이트 원문 |
| 입양비 포함 항목 | 개 = 광견병·디스템퍼/Neopar/Neovac · 심장사상충 음성 · 중성화 · 마이크로칩+등록 · 구충 · 벼룩/진드기 예방 · 심장사상충 예방 / 고양이 = 광견병·FVRCP · 중성화 · 구충 · 벼룩/진드기 · 마이크로칩+등록 | 사이트 원문 |
| **모금·결제 스택** | **GiveWP**(사이트 내장 기부·입양비 결제) / **Zeffy**(Giving Tuesday 캠페인) / **Patreon** / **GoFundMe** / **Bonfire**(굿즈) / **Midlands Gives**(Mightycause 플랫폼) / **CUDDLY** / **Chewy·Amazon 위시리스트** / **PayPal Giving Fund** | 사이트 HTML, 검색 |
| **GiveWP 폼이 개체 단위로 자동 생성된다** | 사이트맵 실측 **`give_forms` 게시물 약 65,100건**(사이트맵 33개 파일, 1번=2,000건·33번=1,100건 실측, 중간은 WP 기본 2,000/파일 가정). URL 패턴이 개체명과 1:1 이다 — `/donations/izzy/`(스폰서) + `/donations/izzy-adoption/`(입양비 결제). **개체 레코드 7,299건 대비 약 8.9배**인데 **그 배수의 원인은 미확인**이다. 콜에서 이 숫자를 들이대지 말 것 | 사이트맵 실측 |
| **도너 CRM** | **미확인.** Bloomerang · DonorPerfect · Neon · Blackbaud · Classy · Donorbox · Little Green Light · Kindful · Virtuous 전부 0건. **GiveWP 가 사실상 도너 기록의 자리로 보인다**(**추론**) | 사이트 HTML 검색, 추론 |
| **IT 지출** | **미확인**(990 원문 미확보). 확인되는 유료 도구 후보는 **Buzz to the Rescues · Bugle Volunteers · Gravity Forms · GiveWP · Petfinder/Adopt-a-Pet 등재** 이며, 그중 **Buzz 정가만 공개돼 있다 — $139/월, 연간 결제 시 $99/월($1,188/년)** | 사이트 HTML, buzztotherescues.com |
| **가격 감각 환산** | **개 로컬 입양비 $450 = 연 $600 짜리 도구 1.3마리분.** 그리고 이 조직은 **이미 연 $1,188 규모의 SaaS(Buzz)를 쓰고 있다.** 「소프트웨어에 돈을 안 쓰는 조직」이 아니다 — 다만 **유보가 얇고 신축에 $400K 가 걸려 있어 고정비 추가에 예민할 개연도 그만큼 크다**(**추론**) | 계산값, buzztotherescues.com, 추론 |
| 감사·거버넌스 서식 | **미확인.** 990 원문 미확보 | — |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **누적 배치(자기표기)** | **5,000마리 초과** | About 페이지 원문: ***"our expansive foster network and successful adoption process has led to more than 5,000 rescued animals being placed in forever homes"***. Petfinder 조직 소개도 ***"we have successfully moved over 5,000 dogs into safe, loving homes"*** |
| **사이트 원장 개체 레코드(실측)** | **개 5,496 · 고양이 1,803 · 합 7,299** | **2026-09-08 WordPress 사이트맵 실측**(`wp-sitemap-posts-dog-1~3.xml` = 2,000+2,000+1,496 / `wp-sitemap-posts-kitty-1.xml` = 1,803). **입양 완료·현재 보유를 모두 포함한 누적 레코드**이며 연간 통계가 아니다. 설립(2017-05)부터 약 8.4년이니 **단순 평균 연 869건**, 성장 곡선을 감안하면 최근 연도는 이보다 훨씬 크다(**추론**) |
| **연간 입양 건수 — 재무 역산** | **연 1,100~1,700건 구간(추정)** | FY2025 프로그램 수입 **$672,807** ÷ 평균 실수령 입양비 가정치. $600 → 1,121건 / $500 → 1,346건 / $400 → 1,682건. **표준 수수료가 개 $450~650 · 고양이 $275~475 이고 감액·스폰서 건이 있으므로 평균은 표준보다 낮다.** **한계 — 프로그램 수입에 이송료·기타 수입이 섞였을 수 있어 상한 추정이다. 콜에서 실측치를 받아야 한다** |
| **폼 자기보고 대비** | 폼 `adoptions: Over 300` 은 **선택지의 최상단 구간**이다. 위 두 갈래 근거를 함께 놓으면 **실제는 폼 구간의 최소 3배, 개연적으로 4~5배**다(**추론**) | leads.json, Cause IQ, 사이트맵 실측 |
| **현재 공개 두수 — 고양이** | **72마리** | 2026-09-08 `/available-cats/` 서버 렌더링 HTML 실측(고유 `/kitty/` 링크 72개) |
| **현재 공개 두수 — 개** | **미확인** | `/available-dogs/` 는 개체 그리드를 **JS 로 지연 로딩**한다(원본 HTML 에 `/dog/` 링크 0건). 리더 프록시로도 **첫 8마리(A 로 시작하는 이름)까지만** 렌더링됐다. **사이트 자체 필터 UI 는 성별·색·행동·특수요구·연령·주(state)·한배(litter)로 검색하게 돼 있다** |
| **채널 간 불일치(핵심)** | **사이트 고양이만 72마리 vs Adopt-a-Pet 조직 페이지 총 `1 - 9 of 29 pets available`** | 2026-09-08 동시 조회. **개까지 합치면 격차는 더 벌어진다.** 두 채널이 동기화돼 있지 않다 |
| **Petfinder 중복 등재(핵심)** | **같은 개체가 이송 목적지 도시마다 별도 UUID 로 등재된다 — 실측 12건/마리** | 개 **Beaux**: SC Columbia(`2c55be6d…`) · CT Milford(`e69adcf4…`) · ME Boothbay(`c45b5de2…`) · MA Jamaica Plain(`1f2da808…`) · DC Washington(`b262d980…`) · NY Buffalo(`9eaf0b7e…`) · MD Frederick(`0fde4887…`) · NH Northwood(`d76bf56d…`) · NJ Howell(`a4a4f272…`) · NY New York(`b94c1065…`) · PA West Chester(`e26888c7…`) · RI Providence(`89ba56a6…`). 개 **Hollie** 도 동일 패턴. 조직 페이지 1면에 보이는 고유 레코드 28건 중 대부분이 이 중복이다 |
| **한배(litter) 단위 작명·관리** | 확인되는 litter 태그 — `Videogames`(Among Us) · `Streaming Services`(Apple TV). 다른 개체 이름에도 배치 테마가 뚜렷하다(`Boston Creme`·`Munchkin`·`Stuffed Mini Bagel`·`Snackin' Bacon` 등 도넛·간식 계열, `Concrete`·`Shement` 등) | 사이트 원문. **한배를 한 번에 받아 이름을 묶어 붙인다는 뜻이고, 새끼 유입량이 크다는 방증**(**추론**) |
| **감액 수수료 뱃지가 개체 카드에 붙는다** | `August` 카드에 **`REDUCED ADOPTION FEE`** 뱃지 | 사이트 원문. **장기 체류 개체에 감액을 붙이는 운영이 이미 있다** — 즉 **「얼마나 오래 있었나」가 실무 판단에 쓰인다** |
| **인테이크 정책** | **카운티 보호소 우선, 소유자 파양은 대기열** | 파양 페이지 원문: ***"Submitting the form does not guarantee that we will take your pet. We cannot accept all owner surrenders, as we prioritize dogs facing the threat of euthanasia at local shelters. Our facility is regularly at full capacity, so there is typically a waiting list."*** |
| **포스터가 캐파를 결정한다(자기 진술)** | 원문: ***"foster homes help us determine how many animals we can pull from county shelters"*** | **포스터 가정 수가 곧 구조 가능 두수**라고 조직이 명시했다. 우리 제품의 ROI 서사가 「편의」가 아니라 **「구조 가능 두수」**로 연결되는 근거다 |
| **포스터 가정 수** | **미확인** | 사이트·990 어디에도 포스터 가구 수 지표가 없다. **폼에도 `fosters` 항목이 없었다** |
| 자원봉사자 수 | **미확인**(신청서 처리팀 25명 + 팀 8명만 이름으로 확인) | 사이트 원문 |
| **연간 인테이크·라이브릴리스율** | **미확인 — 공개 자료에 없다** | 조직이 연간 임팩트 리포트를 게시하지 않는다. Shelter Animals Count 개별 조직 데이터는 조회하지 못했다 |
| **역사적 대조점** | **2018년 시점 "more than 300 dogs so far"** | 2018년 지역방송(WIS) 원문: ***"Final Victory has aided in the rescue of more than 300 dogs so far."*** 당시 시설은 Columbia 시내였다. **8년 만에 누적 300 → 5,000+ 이다** |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **원장 = Buzz to the Rescues (확정)** | 전 페이지가 `/wp-content/themes/**buzz-rescues**/assets/{css,js,img}` 를 로드하고, 푸터에 **`Powered By: Buzz`** 배지가 `buzztotherescue.com` 링크로 박혀 있다. 개체 CPT 도 Buzz 규약대로 **`dog` · `kitty`**, 개체 URL 이 `/dog/<slug>/` · `/kitty/<slug>/` 다. 홈페이지에 `buzz-dog` · `buzz-team` · `buzz-newsletters` · `buzz-volunteer-opportunities` · `buzz-local-resources` 등 Buzz 블록 클래스가 그대로 나온다. **폼 자기보고 `system: Buzz to the Rescues` 는 실사용으로 확정** | 사이트 HTML |
| **Buzz 제품 사양(대조용)** | **웹사이트 + 백엔드 통합형 SaaS**, The Buzz Group Inc.(Redondo Beach, CA), 2018년 출시. **$139/월 · 연간 결제 시 $99/월($1,188/년)**. 자기 홍보 문구: ***"Pair animals with fosters & provide role-based, customized access to edit profiles"*** / ***"Customize unlimited adopter, foster and volunteer applications with conditional logic"*** / ***"Showcase unlimited volunteer and foster opportunities"*** / ***"Email adopters, fosters or volunteers directly from an animal's record"*** | buzztotherescues.com |
| **신청서는 Buzz 가 아니라 Gravity Forms 다 (핵심)** | 개 포스터 신청서 한 장에 **`gform_wrapper` 24개 · `gform-field-label` 251개 · `gravityforms` 19회**가 검출된다. 자원봉사 신청서·입양 신청서·뉴스레터 폼도 모두 Gravity Forms(폼 ID 69·74·75·76·79·87·97 등 확인). **Buzz 가 파는 「conditional logic 신청서」 기능을 쓰는 대신 WordPress 폼 플러그인으로 받고 있다** | 사이트 HTML |
| **Gravity Forms 의 구조적 한계** | Gravity Forms 는 **엔트리를 자기 DB 에 쌓을 뿐 개체 원장과 연결되지 않는다.** 즉 **「이 포스터 신청서 → 어느 개체에 배치」가 도구 안에서 이어지지 않는다.** 조직 문구가 이 구조를 그대로 드러낸다 — ***"If you have already been approved as a foster, you do not need to submit another application... Instead, please contact our foster coordinator directly to check current availability and discuss the best match for your home."*** | 사이트 HTML, 사이트 원문, 추론 |
| **자원봉사 시프트 = Bugle Volunteers (확정, 별도 도구)** | `app.buglevolunteers.com/directory?id=c16c4eda-6d77-4cfb-924f-bebd9db3048d`. **온사이트·이벤트·Doggy Day Out 3종 슬롯을 여기서 예약**한다. 원문: ***"Once approved as a volunteer, reserve your slot for on-site volunteering, adoption event help, or a Doggy Day Out on our Bugle Volunteers page."*** 2026-09-08 조회 시 **당일·익일 슬롯이 실제로 열려 있다**(On Site Volunteering - Weekday, Doggy Day Out) | 사이트 원문, Bugle |
| **접수와 스케줄이 다른 도구다** | **자원봉사 지원 접수 = Gravity Forms, 시프트 배정 = Bugle, 개체 원장 = Buzz.** 세 도구 사이를 사람이 잇는다. 원문: ***"Before reserving a slot, be sure you have a Volunteer Application on file"*** — **「on file」 이 어디인지는 어디에도 없다** | 사이트 원문, 추론 |
| **Petfinder 등재 = 전담 사람** | 팀 페이지에 **`Bri / Petfinder Coordinator`** 라는 직함이 따로 있다. 그리고 Petfinder 에는 **같은 개체가 이송 목적지 도시마다 별도 UUID 로 12건씩 올라가 있다**(3절). **Buzz → Petfinder 자동 연동이 있다면 전담 직함이 필요할 이유가 약하다**(**추론**, 직접 확인 필요) | 사이트 원문, Petfinder, 추론 |
| **포스터 업데이트 = 사람에게 보낸다** | 포스터 의무 원문: ***"Communicate with staff (updated bio info, new pictures, any concerns, etc.)"*** — **포스터가 개체 정보를 직접 고치는 것이 아니라 스태프에게 보낸다.** Buzz 가 파는 ***"role-based, customized access to edit profiles"*** 를 쓰지 않고 있다는 뜻이다(**추론**) | 사이트 원문, buzztotherescues.com, 추론 |
| **Doggy Day Out 도 같은 패턴** | Bugle 안내 원문: ***"You'll discuss your outing plans... and complete a short form while a dog is selected."*** / ***"We also encourage taking photos/videos to share on social media (tag @finalvictoryrescue) or send to us to help promote adoptability."*** — **개체 선정은 현장에서 사람이, 산출물(사진·영상)은 사람에게 전달** | Bugle |
| **포스터 커뮤니케이션 채널 = Facebook 그룹** | 원문: ***"We have a Facebook group devoted to supporting our fosters."*** **포스터 전용 포털·페이지는 사이트맵 어디에도 없다**(사이트맵 메인 메뉴 전수 확인 — Foster 하위는 「프로그램 소개 / 개 신청서 / 고양이 신청서」 3개뿐) | 사이트 원문, 사이트맵 |
| **이송 자원봉사 = 문자방** | 원문: ***"If you are interested in being added to this text group, please apply as a volunteer then email your interest in transporting to v***@finalvictoryrescue.com"*** | 사이트 원문 |
| **입양 신청 처리 = 25명 분산 수기** | 원문: ***"A volunteer processor will reach out when they begin processing your application... The processor will contact your vet and references and request a virtual home visit as part of our approval procedures."*** / ***"Adoption fees vary based on the age and breed of individual animals, as well as the adopter's location. Please confirm adoption fees with your processor prior to the meet & greet."*** **입양비조차 개체별로 처리자에게 물어야 확정된다** | 사이트 원문 |
| **결제·기부 = GiveWP** | WordPress REST `types` 에 `give_forms` CPT 노출. 사이트맵상 `give_forms` 게시물이 **약 65,100건**이고 URL 이 개체명 기반이다(`/donations/<개체명>/`, `/donations/<개체명>-adoption/`) | WordPress REST, 사이트맵 실측 |
| 이벤트 | **EventON**(WordPress 플러그인). 확인되는 예정 이벤트 — 2026-09-12 Fathom 4th Annual Community Dog Wash(시설), 2026-09-17 East Bay Deli 25th Anniversary(Cayce, SC) | 사이트 원문 |
| 사이트 스택 | **WordPress + Buzz to the Rescues 테마 + Gravity Forms + GiveWP + Beaver Builder(`fl-builder-template`) + EventON** | 사이트 HTML, WordPress REST |
| **웹 유지보수 상태의 단서** | FAQ 의 mailto 링크가 **표시 텍스트와 대상이 다르고 오타가 있다** — 표시 `v***@gmail.com` / 대상 `mailto:F***@gmail.com`(volunteers 오타), 표시 `v***@finalvictoryrescue.com` / 대상 `mailto:F***@gmail.com`. **사이트 수정이 손으로 이뤄지고 검수 여력이 없다는 신호**(**추론**) | 사이트 원문, 추론 |
| **미검출 목록** | **쉘터 SW 대체재**(ShelterLuv · Petstablished · Pawlytics · Chameleon · ShelterBuddy · PetPoint · Petango · RescueGroups · Adopets · Animal Shelter Manager) / **포스터 전용 도구**(Doobert · Maddie's Pet Assistant · Paw Partner) / **자원봉사 대체재**(Volgistics · Better Impact · SignUpGenius · Galaxy Digital · VolunteerHub) / **도너 CRM**(Bloomerang · Donorbox · Classy · DonorPerfect · Neon · Blackbaud · Little Green Light · Kindful · Virtuous) / **폼·협업**(Jotform · Typeform · Airtable · Smartsheet · Salesforce · HubSpot) / **이메일**(Mailchimp · Constant Contact) — **전부 0건** | 사이트 HTML 검색 |
| **판정 시 주의** | 위 결과는 「안 쓴다」의 증거가 아니라 **「밖에서 보이는 자리에 없다」**의 증거다. **내부 스프레드시트·Google Sheets·문자방·Facebook 그룹은 공개 사이트에 흔적을 남기지 않는다** | 추론 |
| **종합 판정** | **원장(Buzz)은 깔려 있고 자원봉사 포털(Bugle)도 있다. 없는 것은 「가정에 나간 개체」와 「입양 준비 상태」가 사람 손 없이 채널로 흘러가는 층이다.** ①포스터 접수 = Gravity Forms → 그 다음은 **Foster Coordinator 개인 연락** ②포스터 업데이트 = **스태프에게 보내는 방식** ③포스터 커뮤니티 = **Facebook 그룹** ④이송 자원봉사 = **문자방** ⑤입양 신청 처리 = **25명 재택 자원봉사자 개별 처리** ⑥Petfinder 등재 = **전담자 + 개체당 12건 중복** ⑦입양비 조회 = **처리자에게 문의**. **경쟁 대체 대화가 아니라 「Buzz 옆의 빈자리」 대화만 성립한다** | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인 — 이 콜의 최대 미확인** | **신청자 Katy Cowan 은 Founder 겸 President 이지만, 990 상 최고 보수자도 재무 책임자도 이사회 의장도 아니다.** FY2025 990 Part VII 기준 — **Kathryn Cowan / President / $9,200**, **Michael Sniezek / Treasurer and Board Chair / $48,121**, **Karen Gregory / Board Member and Marketing and Operations Manager / $42,660**. 그리고 조직 팀 페이지는 Michael 을 **`Executive Director`** 로 소개한다. 즉 **집행 책임 · 재무 · 이사회 의장이 Michael Sniezek 한 사람에게 몰려 있다.** **콜 초반에 「도구 도입은 누구와 함께 정하시나요」를 반드시 확인해야 한다** |
| **다만 결재가 느릴 구조는 아니다** | **990 에 잡힌 임원 3인 중 2인이 「이사 + 상근 관리자」 겸직**이다. 이사회와 집행부가 사실상 같은 방에 있다는 뜻이고, **소액 SaaS 가 이사회 일정에 묶일 개연은 낮다**(**추론**). 다만 **이사회 전체 명단·인원은 공개 자료에 없다 — 미확인** |
| **전결 한도** | **미확인.** 정관·거버넌스 서식을 확보하지 못했고 990 원문 PDF 도 못 열었다. **우리가 먼저 금액을 꺼내지 않는다** |
| **예산 사이클** | **6월 결산.** 콜 시점 2026-09-08 은 **FY2027 1분기 초반**이다. 회계연도가 막 시작된 자리이므로 **「올해 예산에 넣을 항목」 프레임이 자연스럽다**(**추론**). Midlands Gives 는 매년 **5월 초 하루짜리 행사**(2026년은 05-05)이므로 **모금 정점은 5월, 콜은 그 4개월 뒤**다 |
| **지불 여력** | **중간, 단 완충이 얇다.** FY2025 수입 $1,763,509(+74.2%), 총자산 $444,123. 그러나 **FY2024 순자산 $64,878 은 연 지출의 약 25일치**였고 FY2025 순자산은 미확인이다. **성장은 빠르지만 유보로 사는 조직이 아니다** |
| **비용 감각** | **FY2024 인건비 $349,384(지출의 36.6%)** 이고, 그 위에 **25명의 무보수 신청서 처리자**가 얹혀 있다. **이 조직에서 「사람 시간」의 상당 부분은 자원봉사 시간이다** — 즉 돈으로 환산되지 않는다. 그러므로 ROI 서사는 **「인건비 절감」이 아니라 「자원봉사자가 그만두지 않게 하는 것」과 「구조 가능 두수」** 로 짜야 한다. 조직이 직접 적은 문장이 그 다리를 놓아준다 — ***"foster homes help us determine how many animals we can pull from county shelters"*** |
| **경쟁 기준선** | **이미 Buzz(연 $1,188 정가) + Bugle Volunteers + Gravity Forms + GiveWP + Petfinder/Adopt-a-Pet 등재를 쓴다. 「여섯 번째 도구」로 보일 위험이 이 콜의 최대 반론이다.** 뒤집으면 유리하기도 하다 — **자원봉사자가 직접 로그인해 시프트를 잡는 문화가 이미 있고(Bugle), 그 대상에서 「포스터」와 「개체 상태」만 빠져 있다** |
| **Buzz 중복 우려 (선제 대비 필요)** | 상대는 **`system: Buzz to the Rescues` 라고 스스로 적은 사람**이고, **Buzz 는 자기 사이트에서 포스터 페어링·역할별 프로필 편집 권한·포스터 신청서를 판다.** **"우리 Buzz 에 그 기능 있는데요" 가 나올 확률이 높다. 반박하지 말고 「그 기능으로 지금 무엇을 하고 계신가요 / 포스터 본인이 직접 로그인해서 보나요」로 받는다.** 그리고 **신청서가 Gravity Forms 로 나가 있고 시프트가 Bugle 로 나가 있다는 사실 자체가 「원장에 있어도 실무가 밖으로 새는 구간」이 실재한다는 증거**다. 단, **우리가 먼저 「Buzz 기능을 안 쓰시네요」라고 말하지 않는다** |
| **신축이라는 새 변수** | **$400,000 신축이 시 인허가 대기 중**이고 모금은 목표의 26%다(7절). **양날이다** — ①지금 현금이 그쪽으로 묶여 있어 신규 고정비에 방어가 걸릴 수 있다 ②동시에 **켄넬이 두 배가 되면 지금의 수기 동선이 그대로 두 배가 된다.** ②쪽이 우리 서사인데, **상대가 신축을 먼저 꺼낼 때만 받는다** |
| 2차 콜 후보 | **Michael Sniezek**(Executive Director 겸 Treasurer 겸 Board Chair — **실질 결재선일 개연이 가장 높다**) / **Stephanie**(Local Adoptions Manager + Foster Coordinator — **제품이 실제로 닿는 자리**) / **Bri**(Petfinder Coordinator — 채널 동기화 실무) / **Miriam**(Volunteer + Event Coordinator — Bugle 운영) |

## 6. Katy Cowan 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **성명·직책** | **Katy Cowan** — 조직 팀 페이지 표기 **`Katy / Founder`**. 990 Part VII 등재명은 **`Kathryn Cowan / President`**. 외부 인명 DB 표기는 **`Founder & President`** | 사이트 원문, Cause IQ(990 판독), ZoomInfo 검색 결과 |
| **소속 확정 근거** | ①990 Part VII 임원 명단 ②조직 팀 페이지 ③조직 명의 GoFundMe 캠페인 주최자 ④2018년 지역방송이 **"founder and director"** 로 소개 | Cause IQ, 사이트 원문, GoFundMe, wistv.com |
| **보수** | **FY2025 $9,200.** FY2022~FY2023 조직 전체 임원 보수가 $7,171~$50,326 사이였음을 감안하면 **창업 이후 오랫동안 사실상 무보수에 가까웠던 것으로 보인다**(**추론** — 연도별 개인 배분은 990 원문 미확보로 확인 불가) | Cause IQ, ProPublica API, 추론 |
| **경력·학력** | **미확인.** LinkedIn 프로필 2건이 검색에 잡히나(`katy-cowan-989990239` = "Founder/Director", `katy-cowan-49a8a037` = "Founder/President and Animal Welfare Specialist") **로그인 게이트로 본문을 열지 못했다.** 2010년대 이전 경력·학력은 공개 자료에 없다 | 검색, LinkedIn(차단) |
| **성향 — ①현장 서사로 말한다** | 2018년 지역방송 인터뷰 원문: ***"There is always an urgency to rescue dogs out of the municipal shelters due to overpopulation and the threat of euthanasia."*** / ***"We act as their ears and eyes on the ground here where the dogs are in need and can provide immediate assistance to rescue the dogs."*** / ***"Watching a dog become happy and healthy while in our care is the ultimate in rewarding."*** **원가표가 아니라 개체와 현장의 언어로 말하는 유형이다**(**추론**) | wistv.com, 추론 |
| **성향 — ②직접 모금을 연다** | 조직 명의가 아니라 **본인 이름으로 GoFundMe 를 개설**했다(`BUILD OUR RESCUE MAMA BARN`, 주최자 `Katy Cowan`). 캠페인 본문도 1인칭 서사다 — ***"We're moving to our newest location outside the city in Camden, SC."*** / ***"We physically cannot do this without you."*** | GoFundMe |
| **성향 — ③확장을 밀어붙인다** | 7년간 수입 12.6배, 최근 2년 2.7배. 그 위에 **$400,000 신축**과 **별도 부지 이전 계획**이 동시에 걸려 있다(7절). **「지금 있는 것을 정리하자」보다 「더 받자」가 기본값인 유형으로 보인다**(**추론**) | Cause IQ, Midlands Gives, GoFundMe, 추론 |
| **직책 표기가 자리마다 다르다** | 팀 페이지 `Founder` / 990 `President` / 외부 DB `Founder & President` / 2018년 방송 `founder and director`. **폼 응답 `Executive director or founder` 를 조직 내부 호칭과 1:1로 대응시키면 안 된다** — 이 조직에는 **`Executive Director` 라는 직함을 가진 다른 사람(Michael)이 있다.** 콜 첫머리에 본인 표현으로 확인할 것 | 사이트 원문, Cause IQ, wistv.com |
| **대명사** | **미확인.** 조직 사이트·990·지역방송 어디에도 3인칭 대명사가 나오지 않는다(방송 기사는 `Cowan explained` / `says Cowan` 으로만 지칭). **콜 전까지 단정하지 않는다 — 상대 표현을 따를 것** | wistv.com, 사이트 원문 |
| 폼 자기보고 | **4개 항목 전부 기입**(`org_type`·`role`·`system`·`adoptions`). 미팅 **2026-09-08** | leads.json |
| **콜에서 통할 언어** | **①이번 주 손동작 ②구조 가능 두수.** 이 사람은 원가로 말하는 유형이 아니고, 조직이 스스로 **「포스터 가정 수가 곧 구조 가능 두수」**라고 적어 두었다. **「대시보드가 생깁니다」가 아니라 「포스터가 보내주는 사진과 근황이 지금 어디로 가나요, 그게 웹사이트까지 오는 데 며칠 걸리나요」** 로 들어가야 한다(**추론**, 직접 대면 근거 없음 — 콜 초반에 화법을 관찰해 조정) | 사이트 원문, 추론 |
| **먼저 꺼내지 말 것** | ①**Buzz 의 포스터 기능을 안 쓴다는 지적** — 「포스터 신청이 들어오면 그 다음은 어디로 가나요」로 우회 ②**Petfinder 12건 중복** — 「Petfinder 담당이 따로 계시던데 하루에 몇 건 만지시나요」로 우회 ③**가격** ④**신축·이전 계획** — 상대가 먼저 꺼낼 때만 받는다 ⑤**Camden 이전 GoFundMe 가 목표의 12.6%에서 「Donations paused」 로 멈춰 있는 사실**(7절) — 절대 언급 금지 ⑥**FY2020 수입 급감(78%)·FY2023 적자** ⑦**mailto 오타 등 사이트 유지보수 상태** ⑧**조직 등록지(Eastover)와 운영지(West Columbia)가 다른 사실** — 사적 주소일 수 있으므로 우리가 짚지 않는다 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2024-12** | **PayPal Giving Fund $68,094**, **Leslie L Alexander Foundation $55,000** 수령. 두 건만으로 FY2025 기여 증가분($640,934)의 19% | Cause IQ |
| **FY2025 (2024-07~2025-06)** | **수입이 74.2% 뛰었다** — $1,012,542 → $1,763,509. 기여·보조금이 **+142.4%**($450,099 → $1,091,033)로 견인했고 프로그램 수입도 +19.6%($562,437 → $672,807). **이 조직 역사상 가장 큰 도약** | Cause IQ |
| **2025-08~09** | 포스터·자원봉사 모집 자료를 새로 만들어 배포(`Fostering-flyer-8.2025.png`, `FVAR-Volunteer-Opportunities-8.2025.png` 업로드). **2025-09 에 팀 페이지 헤드샷 5장을 일괄 교체**(`KatyHeadshot.jpg`·`MichaelHeadshot`·`LeslieHeadshot`·`StephHeadshot`·`RileyHeadshot`) — **팀 개편 또는 대외 정비가 이 시점에 있었던 것으로 보인다**(**추론**) | 사이트 이미지 업로드 경로 |
| **2025-10** | FAQ 페이지를 새로 구성(`FAQ-Jeff.jpg`, `FVAR-Adoptions-Real-Estate-Flyer.jpeg`, `FVAR-Fostering-flyer.jpeg`, `FVAR-Volunteer-Opportunities-with-QR.jpeg` 업로드). **QR 코드를 넣은 자원봉사 안내물**이 이때 생겼다 | 사이트 이미지 업로드 경로 |
| **2025-11-11** | **FY2025 990 IRS 접수** | Cause IQ |
| **2026-01** | 자원봉사 면책 서약서 갱신(`FVAR-WAIVER-AND-RELEASE-OF-LIABILITY-final-victory.pdf`, 2026/01 업로드) | 사이트 원문 |
| **2026-03** | **팀 3명 추가 게시** — Karen(Marketing + Operations Manager) · Miriam(Volunteer + Event Coordinator) · **Bri(Petfinder Coordinator)**. 같은 시기 **Doggy Day Out 프로그램 자료 신설**(`Doggy-Day-Out-FVAR-NEW-scaled.png`, `Doggy-Day-Out-FVAR-flyer`). **역할 분화가 최근 6개월 안에 일어났다** | 사이트 이미지 업로드 경로, 사이트 원문 |
| **2026-05-05** | **Midlands Gives 2026 참여(하루짜리 행사, Central Carolina Community Foundation 주최).** 조직 목표 **$100,000**, 실적 **$26,280 / 282명(26%)**. 캠페인 문구 원문: ***"We are raising funds to build a NEW 4,800 square foot animal rescue facility on our current property at [주소 생략] in West Columbia."*** / ***"The new structure being built by Plow Mule will more than double kennel space for each dog, from 50 to 100 square"*** / ***"The estimated building project cost is $400,000"*** / ***"to help move this vision forward as soon as city permit approvals are complete."*** | midlandsgives.org |
| **2026-09-08(콜 당일)** | **Bugle 에 당일·익일 슬롯이 열려 있다**(On Site Volunteering - Weekday, Doggy Day Out). **평일에도 자원봉사 동선이 돌아가는 조직**이다 | Bugle |
| **2026-09-12 / 09-17** | 예정 이벤트 2건 — **Fathom 4th Annual Community Dog Wash**(시설, 10:00–13:00), **East Bay Deli 25th Anniversary**(Cayce, SC, 17:00–20:00). **콜 직후 열흘 안에 대외 행사가 두 건 있다** | 사이트 원문 |
| **시점 미상 — 취급 주의** | **별도 부지 이전 계획이 있었다.** Katy Cowan 명의 GoFundMe `BUILD OUR RESCUE MAMA BARN` 본문 원문: ***"Final Victory Animal Rescue is moving to a new location!!!... We're moving to our newest location outside the city in Camden, SC."*** 목표 **$25,000**, 실적 **$3,140 / 17건(12.6%)**, 현재 상태 **`Donations paused`**. **그런데 2026-05 Midlands Gives 캠페인은 「현재 부지(West Columbia)에 신축」이라고 적는다.** 두 계획의 관계·선후는 공개 자료로 판정할 수 없다. **IRS 최신 등록지가 Eastover, SC 인 점도 함께 놓이지만 어느 것도 확정되지 않는다. 콜에서 절대 먼저 꺼내지 않는다** | GoFundMe, midlandsgives.org, Cause IQ |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

- **포스터가 아는 것이 리스팅에 없다.** FAQ 원문 ***"If a dog is not listed as tested with cats or kids on our website, please request this during your application approval process."*** — 개체의 「고양이·아이와 지내봤는가」는 포스터 가정에서만 생기는 정보인데, 그것이 웹 리스팅에 반영되지 않아 **신청자가 사람에게 따로 요청하고 사람이 다시 포스터에게 묻는 3단 왕복**이 발생한다. **우리 소재 A 와 가장 직접적으로 겹치는 한 줄.** → **콜에서 정면으로 확인할 것**(단, 「빠져 있더라」가 아니라 「그 정보는 어디서 오나요」로)
- **포스터 → 스태프 단방향 보고.** 포스터 의무 원문 ***"Communicate with staff (updated bio info, new pictures, any concerns, etc.)"*** — **포스터가 개체 프로필을 직접 고치지 않는다.** Buzz 가 파는 역할별 편집 권한을 안 쓰고 있을 개연이 높다. → **직접 확인 필요**
- **포스터 매칭이 사람 머릿속에 있다.** 원문 ***"please contact our foster coordinator directly to check current availability and discuss the best match for your home"*** / ***"Just let our foster coordinator know what type of living environment you have when being paired with a dog."*** — **「지금 배치 가능한 개체」와 「이 가정에 맞는 개체」 조회가 조회 도구가 아니라 대화**다. → **직접 확인 필요**
- **입양 가능 여부가 웹 게시 여부로 표현된다.** 원문 ***"If a dog is listed on this page, it means we are still accepting applications for his/her adoption. However, there may be other applications for them already submitted and in line to adopt. Dogs are removed from the website once their adoptions have been finalized."*** — **상태값이 아니라 「페이지에 있느냐 없느냐」가 상태다.** 그래서 대기열은 밖에서 안 보이고, FAQ 가 ***"Availability status changes quickly"*** 라고 적는다. → **직접 확인 필요**
- **채널이 손으로 유지된다.** 사이트 고양이 72마리 vs Adopt-a-Pet 29마리(동시 조회), Petfinder 는 개체당 이송 도시별 12건 중복, 그리고 **`Petfinder Coordinator` 라는 전담 직함**. **한 마리의 상태 변화가 최소 3개 채널 × 최대 12개 레코드로 번진다.** → **직접 확인 필요**(자동 연동이 있는데도 전담자를 둔 것일 수 있다)
- **신청 → 배치 사이가 도구로 이어지지 않는다.** 신청서는 Gravity Forms(WordPress DB), 개체 원장은 Buzz, 시프트는 Bugle. **세 곳의 키가 서로 다르다.** 자원봉사 안내문의 ***"be sure you have a Volunteer Application on file"*** 에서 **「on file」이 어디인지 조직도 명시하지 못한다.** → **직접 확인 필요**
- **입양비가 개체별로 사람에게 물어야 확정된다.** 원문 ***"Please confirm adoption fees with your processor prior to the meet & greet."*** + 카드에 붙는 `REDUCED ADOPTION FEE` 뱃지. **감액·스폰서 여부가 개체 단위로 갈리는데 그 판단이 리스팅에 붙어 있지 않다.** → **직접 확인 필요**
- **입양 신청 처리가 25명에게 분산돼 있다.** 각자 vet·레퍼런스 확인, 가상 홈비지트, meet & greet 일정 조율까지 한다. **out-of-town 자원봉사자도 받는다**(원문 ***"open to out-of-town volunteers"***). **25명이 같은 개체 정보를 각자 어디서 보는지**가 우리 질문이다. → **직접 확인 필요**
- **커뮤니케이션이 Facebook 그룹과 문자방으로 나가 있다.** 포스터 지원 = ***"We have a Facebook group devoted to supporting our fosters."*** / 이송 자원봉사 = ***"If you are interested in being added to this text group"***. **둘 다 검색·조회가 안 되는 채널**이다. → **직접 확인 필요**
- **Doggy Day Out 이 매일 돌아간다.** Bugle 에 평일 슬롯이 상시 열려 있고, 픽업 08:00–11:00 / 반납 14:00–16:00 규칙에 **현장에서 「짧은 폼」을 쓰고 개는 스태프가 고른다**(원문 ***"complete a short form while a dog is selected"***). **매일 발생하는 개체 이동이 종이 또는 별도 폼으로 남는다.** → **직접 확인 필요**
- **캐파가 포스터 수로 결정된다고 조직이 명시했다.** 원문 ***"foster homes help us determine how many animals we can pull from county shelters"*** + 파양 페이지 ***"Our facility is regularly at full capacity, so there is typically a waiting list."*** — **「지금 몇 가정이 비어 있나」가 곧 「이번 주에 몇 마리를 구할 수 있나」다.** 이 조회를 지금 무엇으로 하는지가 우리 제품의 존재 이유와 직결된다. → **콜의 중심 질문**

## 미확인 요약 (콜에서 확인할 것)

1. **결재선.** 도구 도입을 Katy 혼자 정하는가, 아니면 Michael Sniezek(Executive Director 겸 Treasurer 겸 Board Chair)이 함께 보는가. **990 상 재무·집행·이사회 의장이 한 사람에게 몰려 있는데 콜 상대는 그 사람이 아니다.** 이 콜에서 가장 먼저 확인해야 할 항목이다
2. **연간 입양 건수의 실제 값과 정의.** 폼의 「Over 300」이 무엇의 300인가 — 로컬 입양인가, 동북부 이송 배치를 포함한 총계인가, 연간 인테이크인가. **재무 역산으로는 연 1,100~1,700건 구간이 나오는데 폼과 3배 이상 벌어진다**
3. **포스터 가정 수와 회전.** 지금 활동 중인 포스터 가정이 몇 곳인가, 그중 이번 주에 새 아이를 받을 수 있는 곳이 몇 곳인지 어디를 보면 아는가. **폼에 이 항목이 없었다**
4. **Buzz 의 포스터 모듈을 쓰는가.** 포스터 신청이 Gravity Forms 로 들어온 다음 Buzz 개체 레코드와 어떻게 연결되는가. **포스터 본인이 Buzz 에 로그인해 프로필을 고치는가, 아니면 스태프에게 보내는가**
5. **Petfinder·Adopt-a-Pet 등재가 자동인가 수동인가.** 전담 코디네이터가 따로 있는 이유는 무엇인가. **이송 도시별 중복 레코드는 누가 만들고 누가 지우는가**
6. **「입양 준비됨」 판정 주체와 게이트.** 중성화·수의 클리어·기질 평가 중 무엇이 게이트이고, 그 판정을 누가 어디에 기록하는가. **웹 게시/비게시 말고 상태값이 원장에 있는가**
7. **25명 신청서 처리자가 개체 정보를 어디서 보는가.** 각자 Buzz 계정이 있는가, 아니면 공유 문서·이메일인가
8. **자원봉사·포스터 도구 만족도.** Bugle 을 언제 왜 도입했는가(Buzz 에 자원봉사 기능이 있는데도 별도 도구를 붙인 이유). **여기에 「도구를 하나 더 늘리는 것」에 대한 이 조직의 실제 태도가 들어 있다**
9. **이사회 구성.** 인원과 의결 방식. 공개 자료에 명단이 전혀 없다
10. **FY2025 지출·순자산.** 수입만 확인됐고 지출·완충은 미확인이다. **다만 우리가 재무를 직접 묻지 않는다 — 「올해 계획 중인 큰 지출이 있으신가요」 수준으로만**
11. **시설 확장 일정.** 신축 인허가와 착공 시점(**상대가 먼저 꺼낼 때만**). 확장 후 켄넬이 두 배가 되면 지금의 동선이 어떻게 되는지가 우리 서사의 자리다
