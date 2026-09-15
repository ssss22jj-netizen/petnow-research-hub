# Cape Ann Animal Aid 사전조사

- 작성일: 2026-09-04 / 목적: Rachel Mason 콜 준비(미팅 미정) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: **2단계 폼 미진행** (조직명·이름·이메일만). 유입 소재 **B(임시보호자 업데이트 수집 — 폼에서 현재 임시보호자 수를 물었다)**, 폼 상 의사표시는 `intent: book`
- **동일 조직 확정 / 신청자 소속은 강한 정황** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: 조직 사이트는 **sitemap 기재 59개 페이지 HTML 원문을 전수 내려받아 검색**했고 그 경우 출처에 `사이트 HTML`로 표기. Wix 페이지 구조 JSON(`thunderbolt-features`)까지 내려받아 **런타임에만 삽입되는 임베드 위젯의 실제 src 를 확인**했다
- 출처 주석 ②: **자동 요약기가 원문에 없는 문장을 인용부호로 반환하는 사고가 과거에 확인됐다.** 이 문서에 큰따옴표로 인용한 영문 문장은 **전부 내려받은 원문에서 문자열 일치로 재검증**한 것만 실었다
- 출처 주석 ③: 운영 통계는 **조직이 직접 게시한 Shelter Animals Count 기준 연간 통계 PDF 2건(2024·2025)** 을 판독한 값이다. 추정이 아니다
- 출처 주석 ④: **990 원문 PDF 는 확보 실패**(ProPublica 다운로드 403, IRS e-file XML 404). 재무 수치는 **ProPublica API(IRS 추출 데이터) + ProPublica 조직 페이지 판독** 으로 교차 확인했다. Facebook·Instagram·LinkedIn·Petfinder·Yelp·CauseIQ·GuideStar 는 자동 열람이 차단돼 **미확인**으로 처리했다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Cape Ann Animal Aid Association Inc, EIN 04-2374914, Gloucester, MA**(Essex County). 501(c)(3), **면세승인 1965-04**, NTEE **D200**, **6월 결산**, 정식 990 신고 | ProPublica API |
| **동명 조직** | ProPublica `cape ann animal aid` 검색 결과가 **전국에 정확히 1건**이다(`total_results: 1`). 교차 오염 여지 없음 | ProPublica API |
| **조직 자기표기 EIN** | 조직 About 페이지 원문에 **`Tax ID: 04-2374914`** 가 그대로 적혀 있다. IRS 등록번호와 일치 | 사이트 HTML |
| **이메일 도메인** | 리드 도메인 **capeannanimalaid.org 가 조직 공식 도메인**이다. 대표 주소 `i***@capeannanimalaid.org`, 부서 주소 `v***@capeannanimalaid.org` 가 현 사이트에 게시돼 있다 | 사이트 HTML |
| **신청자 — 정황 ①(강함)** | 리드 폼 이메일이 **`r***@capeannanimalaid.org`**(leads.json `form_meta.email`)다. **조직 직원 메일 규칙이 「이니셜+성」으로 확립돼 있다** — 아카이브된 직원 디렉토리에 `sbuck`(Sunniva Buck) · `bkothman`(Brittany Kothman) · `clewis`(Christina Lewis) · `ntarbox`(Nancy Tarbox), 현 사이트에 `jyoung`(Jane Young). **`rmason` = Rachel Mason 이 같은 규칙에 정확히 들어맞는다** | leads.json, 사이트 HTML, Wayback(2023-09-22 `directory.html`) |
| **신청자 — 정황 ②** | 조직 도메인 메일은 **자원봉사자·임시보호자에게 발급되지 않는 것이 통상**이며, 이 조직은 자원봉사·포스터 창구를 `volunteer@` 공용 주소로 운영한다. 즉 개인 도메인 계정 보유는 **유급 직원 쪽을 가리킨다**(**추론**, 직접 확인 필요) | 사이트 HTML, 추론 |
| **신청자 — 한계** | **Rachel Mason 의 직책·재직 여부를 공개 자료에서 확인하지 못했다.** 현 사이트에는 **직원 디렉토리 페이지 자체가 없고**(구 사이트에는 있었다), 2023년 아카이브 직원 명단 18명에 이 이름이 없다. LinkedIn·Facebook·Instagram 은 자동 열람 차단 | 사이트 sitemap, Wayback, 검색 |

→ **조직은 확정.** EIN 이 조직 사이트에 직접 게시돼 있고 ProPublica 검색 결과가 전국 1건이다. **신청자는 조직 도메인 메일 + 직원 메일 규칙 일치로 「이 조직 사람」까지는 사실상 확정이고, 직책만 미확인이다.** 콜 첫 문장에서 직책을 물어 여는 것이 맞다.

## 미팅에서 바로 쓸 핵심 5줄

1. **이 조직은 이미 PetPoint 를 쓴다. 그런데 입양 신청서의 「어느 아이에 지원하시나요」 목록은 사람이 손으로 다시 타이핑한 Google Forms 드롭다운이고, 조회 시점 두 목록이 실제로 어긋나 있다** — 조직 사이트 `/cats`·`/dogs` 에 박혀 있는 임베드가 **Petango 위젯**(`ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimals2.aspx`, authkey `8cyw3mw…`)이다. Petango 는 **PetPoint 의 공개 리스팅 채널**이므로 **원장은 PetPoint** 다. 그런데 신청서는 Google Forms 이고 개체 목록이 자유 텍스트 옵션이다. **2026-09-04 같은 세션에서 양쪽을 동시에 떠서 대조한 결과** — 고양이는 **폼 30개 vs Petango 26마리**, 개는 **폼 12개 vs Petango 11마리**. 폼에만 있고 원장에 없는 항목이 고양이 6건(`Rocky`, `Junie - Foster`, `Fridgie - Foster`, `Winnie - Foster`, `Toothless - Foster`, `Avett & Earl Scruggs-Bonded Pair`), 개 1건(`Hellen`). **콜의 첫 질문은 「새 아이가 들어오거나 나가면 그 목록을 누가 언제 고치시나요」다.**

2. **어긋남이 임시보호 개체에 몰려 있다. 폼이 「- Foster」라고 붙인 9마리 중 PetPoint 상태값이 실제로 `Foster Homes` 인 것은 3마리뿐이다** — Petango 가 개체마다 반환하는 상태값(stage)이 그대로 노출된다. 고양이 26마리 = `Cat Adoption` 12 · `Extended Stay` 8 · **`Foster Homes` 3** · `Cat hold` 2 · `Isolation` 1. 개 11마리 = `Kennel` 4 · `Extended Stay` 4 · **`Foster Homes` 3**. 반면 **신청 폼은 이름 문자열 뒤에 `- Foster` 를 붙이는 방식**으로 임시보호 여부를 표시하고, 그 표시가 붙은 것이 고양이 9 · 개 2다. **`Jelly Donut - Foster`·`Lemon Curd - Foster` 는 폼에선 포스터인데 PetPoint 상태는 `Extended Stay`** 이고, 폼에만 있는 `Junie`·`Fridgie`·`Winnie`·`Toothless` **4마리가 전부 포스터 표시 개체**다. **가정에 나가 있는 개체일수록 목록에서 먼저 썩는다** — 우리 가설이 이 조직에서 관찰 가능한 형태로 나와 있다.

3. **반대 방향 오류가 이미 한 건 실재한다 — 임시보호 가정에 있는 개를 폼이 「시설에 있는 개」로 안내하고 있다** — 사이트 `/cats` 원문: ***"NOTE: Names followed by 'foster' are available for adoption, but are currently in a foster home and are only available for zoom meetings."*** `/adopt` 원문: ***"In-person meetings are not available for cats/kittens in foster homes."*** 즉 **이름 뒤 「foster」 유무가 「직접 만날 수 있나 / 화상만 되나」를 가르는 유일한 표식**이다. 그런데 **개 신청 폼의 옵션 `Pop tart` 에는 그 표식이 없고, PetPoint 쪽 이름은 `Pop-Tart - Foster` 이며 상태값은 `Foster Homes`** 다. 같은 폼의 `Mancha - Foster` 도 원장 표기는 `Mancha-Foster` 로 띄어쓰기가 다르다 — **내보내기 붙여넣기가 아니라 사람이 다시 친 흔적**이다. **이건 기능 설명이 아니라 상대 조직에서 지금 일어나는 일이고, 콜에서 우리가 먼저 지적하지 말고 「지금은 어느 아이가 가정에 있는지를 어디서 보고 폼을 고치시나요」로 물어 상대가 스스로 말하게 할 것.**

4. **규모는 우리 리드 풀 상위권이다. 연 입양 796건, 인테이크의 76%가 타 지역에서 실어 온 개체다. 다만 2025년에 입양이 인테이크보다 두 배 빠르게 꺾였다** — 조직이 직접 게시한 Shelter Animals Count 통계 PDF 기준, **2025년 인테이크 919 / 입양 796 / 라이브릴리스율 97.8~98.8% / 연말 재고 73마리**, **2024년 인테이크 1,026 / 입양 1,009 / 연말 재고 47마리**. 전년 대비 **인테이크 −10.4%, 입양 −21.1%, 소유주 반환(RTO) +289%, 소유주 포기 +75.4%, 연말 재고 +55.3%** 다. 그리고 **현재 입양 대기 37마리 중 12마리(32.4%)의 PetPoint 상태값이 `Extended Stay`**(장기 체류) 인데, 조직 자기 설명문은 ***"It doesn't happen very often, but every now and then, an animal will go overlooked by adopters for a long period of time."*** 이다. **「들어오는 건 줄었는데 나가는 게 더 줄었다」가 이 조직의 2026년 문제**이고, 포스터 회전은 그 해법 쪽에 붙는다.

5. **돈은 있고 결재는 위에 있다. 콜 상대는 실무 확인 대화 상대이지 결재자가 아니다** — FY2025(2025-06 결산) **수입 $1,421,101 / 지출 $1,336,327 / 잉여 $84,774 / 총자산 $8,057,879 / 순자산 $7,855,588**. 인건비가 지출의 **58.7%**(급여 $698,306 + 임원보수 $85,519)다. 라인은 **Rachel Mason → (Lead Adoption Counselors / Community Outreach Coordinator) → Executive Director Sunniva Buck(FY2025 보수 $73,529) → 이사 14인 + 명예이사 2인**. **6월 결산이라 콜 시점은 FY2027 개시 2개월 차**이고, FY2027 예산은 이미 2026년 봄에 짜였다. **가격을 먼저 꺼내지 않는다.** 꺼낼 자리가 오면 프레임은 「올해 남은 예산」이 아니라 「FY2028 항목」 또는 「기존 도구 예산의 재배치」다.

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Cape Ann Animal Aid Association Inc** (IRS 등록명). 통용 표기 **Cape Ann Animal Aid**, 자체 약칭 **CAAA** 를 직무기술서·계약 문서 본문에서 쓴다 | ProPublica API, 사이트 HTML |
| 시설명 | **Christopher Cutler Rich Animal Shelter** — 조직명과 시설명이 다르고, 전 페이지 푸터에 병기된다 | 사이트 HTML |
| EIN·지위 | **04-2374914** / 501(c)(3), **면세승인 1965-04**, **6월 결산**, 재단분류 코드 16, Pub 78 등재(기부금 공제 가능) | ProPublica API |
| NTEE | **D200**(Animal Protection and Welfare) | ProPublica API |
| 소재지 | **Gloucester, MA**(Essex County). IRS 등록지·사이트 표기 동일 | ProPublica API, 사이트 HTML |
| **인허가** | **MDAR License #0102** (매사추세츠 농업자원부 동물보호소 면허). **전 페이지 푸터에 면허번호를 상시 노출한다** | 사이트 HTML |
| 설립 | **1964년**, 고 **Ruth Spoor** 와 지역 주민들이 여름 별장객이 버리고 간 개·고양이를 위해 결성. 원문: *"In 1964, the late Ruth Spoor and a group of animal lovers created the CAAA as a rescue group for the many cats and dogs often abandoned by summer residents."* | 사이트 HTML |
| **시설 이력** | 차고의 기증 케이지 몇 개 → ** 1,200 sq ft** → **현 위치 7,500 sq ft**. 원문: *"Over the years our organization grew from a few donated cages in an empty garage to occupying a 1,200 sq foot building at to our present 7,500 sq foot building"*. **2022년 6월이 현 위치 10주년** | 사이트 HTML |
| **성격** | **시설 보유 오픈형 보호소 + 포스터 병행.** 「시설 없는 레스큐」가 아니다. 개는 `Kennel`, 고양이는 `Cat Adoption` 이 기본 수용 장소이고 그 위에 포스터 가정이 얹힌다 | Petango 위젯, 사이트 HTML |
| 미션문 | *"Cape Ann Animal Aid is a non-profit, no kill organization dedicated to facilitating appropriate placement of adoptable animals and enhancing the lives of all companion animals by promoting respect and well-being through education and outreach."* | 사이트 HTML |
| **no-kill 정의** | **Best Friends 기준(90% 이상 구조)을 명시적으로 채택**하고 About 페이지에서 Best Friends 정의 페이지로 링크한다. *"We will never euthanize a healthy, adoptable animal due to age, space constraints, or an animal's length of stay."* | 사이트 HTML |
| **인테이크 구조** | **타 지역 이송(transfer in)이 주력이다.** 원문: *"Due to effective spay and neuter in New England, we are also able to take in and find homes for animals from other areas of the country and beyond that are struggling with animal overpopulation issues."* 실측도 2025년 인테이크의 **76.2%가 transfer in** | 사이트 HTML, SAC 통계 PDF |
| **자체 의료** | **Shelter Medicine Department 보유.** 원문: *"We are able to complete about 90% of all medical care in-house"*. 2018년 Director of Shelter Medicine 직위 신설, **2020년 부서 확장으로 외과 수술까지 원내 처리** | 사이트 HTML |
| **유급 인력** | **정확한 현재 인원 미확인.** FY2025 990 기준 급여 $698,306 + 임원보수 $85,519. **2023년 아카이브 직원 디렉토리에는 18명**(ED 1, 개발 1, 아웃리치 1, 수의 2, 입양 카운슬러 4, 행정 2, 애니멀 케어테이커 7)이 실려 있었다 | ProPublica, Wayback(2023-09-22) |
| **현 사이트에 직원 명단이 없다** | 구 사이트에는 `/directory.html` 에 **이름·직책·개인 메일**이 전부 공개돼 있었으나, **2025년 말 Wix 로 재구축하면서 직원 디렉토리 페이지가 사라졌다.** 현 sitemap 59페이지에 staff·team·directory 어느 것도 없다 | Wayback, 사이트 sitemap |
| 확인되는 현직자 | **Sunniva Buck — Executive Director** / **Jane Young — Director of Development**(`jyoung@`, ext 103) / **Nadia Sostek — Outreach Coordinator**(`volunteer@`, ext 104) / **Dr. Alex Becket, DVM — Director of Shelter Medicine** | ProPublica, 사이트 HTML |
| 2023년 시점 직원 (참고) | Sunniva Buck(ED) · Jennifer Dobson(Dir. of Development & Communications) · Jane Peters(Community Outreach Coordinator) · Dr. Alex Becket(Dir. of Shelter Medicine) · Cara Bren(Lead Veterinary Technician) · Brittany Kothman / Christina Lewis / Nancy Tarbox(**Lead Adoption Counselor 3인**) · Emily Lefferts(Adoption Counselor) · Vaughan Sherrill / Talia Tarbox(Administrative Assistant) · 애니멀 케어테이커 7인. **개발·아웃리치 자리는 그 뒤 사람이 바뀌었다** | Wayback(2023-09-22) |
| **이사회** | **현직 이사 14인 + 명예이사 2인.** President **Cristopher Peterson** / Vice President **Lindsy Owens** / Secretary **Emily Neish** / Treasurer **Midori Williams**, 이사 Jessica Biker · Tessa Browne · Cindy Dunn · Deborah Eliason · Kate Glidden · Stephen Howard · Susan Krupanski · Melanie Lovell · Laura O'Neill · Laura Stevens. 명예이사 Linzee Coolidge · Camilla Rich | 사이트 HTML(`/board`) |
| **임원 교체** | **FY2025 990 신고 임원과 현 사이트 명단이 다르다** — 990 은 Kate Glidden(President) / Cris Peterson(VP) / Midori Williams Iannacone(Treasurer) / Marissa Goodman(Secretary), 현 사이트는 Peterson(President) / Owens(VP) / Neish(Secretary) / Williams(Treasurer). **FY2025 결산(2025-06) 이후 임원이 한 바퀴 돌았다** | ProPublica, 사이트 HTML |
| 서비스 권역 | **포스터는 Essex County 로 명시 제한.** 폼 원문: *"City & State (Limited to Essex County addresses)"*, 페이지 원문: *"For ease of access to care, we are seeking fosters who live in Essex County."* **입양은 MA·CT·NH·NJ·NY·ME·RI·VT 8개 주**(신청서 State 드롭다운) | Google Forms, 사이트 HTML |
| 개방 시간 | 사이트 `/contact` 기준 **월·화 CLOSED / 수 12–17 / 목 12–18 / 금~일 12–17** | 사이트 HTML |
| **시간 표기 불일치** | **홈페이지는 같은 시각에 다른 값을 보여준다** — 월·화가 `APPOINTMENT ONLY` 이고, **`Friday: Aug 28th by appointment only` / `Saturday: Aug 29th by appointment only` 라는 지난 주 공지가 조회 시점(2026-09-04)까지 남아 있다.** 손으로 고치는 블록이 밀린 사례 | 사이트 HTML |
| **인증·네트워크** | **Shelter Animals Count 참여기관**(연간 통계 자발 공개) / **Best Friends Animal Society 파트너** / **Petco Love Lost 등재**(보호소 2041) / **Petfinder 회원 MA128** | 사이트 HTML, 검색 |
| 웹 자산 | 자체 사이트(**Wix**, `generator: Wix.com Website Builder`, sitemap 59페이지) + Facebook(`/capeannanimalaid`) + Instagram(`@capeannanimalaid`) + TikTok(`@capeannanimalaid`) + X(`twitter.com/capeannanimalaid`) + LinkedIn 회사 페이지 | 사이트 HTML |
| **사이트 이전** | **2025년 말 Weebly 계열 구 사이트 → Wix 로 전면 재구축.** 2025-11-12 아카이브는 구 디자인(Flipcause 연동 코드 포함), 2025-12-05 아카이브부터 Wix 동적 페이지가 잡힌다. **구 사이트의 `.html` URL(`/directory.html`·`/jobs.html` 등)은 현재 400 을 반환한다** | Wayback, 사이트 HTML |
| 소셜 규모 | **미확인.** Facebook·Instagram·LinkedIn 모두 자동 열람 차단. 홈페이지에 Instagram 피드가 임베드돼 있으나 이미지 CDN 만 노출된다 | — |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **6월 결산.** 2026-09-04 시점은 **FY2027 개시 2개월 차**이며, **FY2027 예산은 2026년 봄에 이미 확정된 상태**다(**추론**) | ProPublica API, 추론 |
| 신고 양식 | **정식 990.** 2002년분부터 열람 가능, 2011년분부터 디지털 추출 데이터 존재 | ProPublica |
| **FY2025** (2025-06 결산) | 수입 **$1,421,101** / 지출 **$1,336,327** / **잉여 $84,774** / 총자산 **$8,057,879** / 순자산 **$7,855,588** | ProPublica |
| FY2025 수입 구성 | 기부·기여 **$947,379(66.7%)** / 프로그램 수입 **$267,802(18.8%)** / 투자수익 **$126,292(8.9%)** | ProPublica |
| FY2025 지출 구성 | 급여 **$698,306(52.3%)** / 임원보수 **$85,519(6.4%)** → **인건비 합계 약 58.7%** | ProPublica |
| **FY2024** (2024-06) | 수입 **$2,587,313** / 지출 **$1,193,535** / **잉여 $1,393,778** / 총자산 $7,882,904 / 부채 $239,407. 기여금 $1,993,798, 프로그램 수입 $384,609 | ProPublica API |
| **FY2023** (2023-06) | 수입 **$2,637,667** / 지출 $1,233,504 / **잉여 $1,404,163** / 총자산 $6,406,112. 기여금 $1,973,925, 프로그램 수입 $535,894 | ProPublica API |
| FY2022 | 수입 $1,406,037 / 지출 $1,115,154 / 총자산 $4,871,779. 기여금 $754,234 | ProPublica API |
| FY2021 | 수입 $1,198,252 / 지출 $995,469 / 총자산 $4,821,981 | ProPublica API |
| FY2020 | 수입 $1,043,263 / 지출 $932,035 / 총자산 $4,410,853 | ProPublica API |
| **재무 궤적 요약** | **FY2023·FY2024 두 해가 예외적이다.** 기여금이 평년 $75만 수준에서 **$197만~$199만으로 두 배 이상** 뛰었고 그 결과 2년 연속 잉여가 각각 $1.4M 씩 났다. **총자산이 FY2022 $4.87M → FY2025 $8.06M 으로 3년 만에 +65.5%.** FY2025 에 수입이 $1.42M 로 되돌아왔다 — **평년 수준 복귀이지 악화가 아니다** | ProPublica, 추론 |
| **자본 캠페인** | 위 점프의 정체는 **「Walter & Yvonne Wood Wing of Hope」 증축 캠페인**이다. **2023년 10월 기공**(Gloucester Times 보도), **2024년 가을 완공**, **2025년 겨울 고양이 입양 구역 개선**. 즉 **FY2023~FY2024 기여금 급증 = 건축 모금**이고, FY2025 부터 정상 운영 규모로 돌아왔다 | 검색(Gloucester Times), 검색 |
| 지불 여력 판정 | **우리 리드 풀 최상위권.** 순자산 $7.86M, 연 지출 $1.34M, 유급 직원 다수, 원내 수의 부서 보유. **「도구 살 돈이 없는 조직」이 아니다.** 다만 지출의 58.7%가 인건비라 **신규 SaaS 는 「사람 시간을 얼마나 돌려주느냐」로만 정당화된다**(**추론**) | ProPublica, 추론 |
| **입양비** | Petango 개체 상세 기준 **본디드 새끼고양이 $175.00**. 전체 요금표는 사이트에 공개돼 있지 않다. 결제 수단 원문: *"We accept cash, Master Card, Visa, or American Express to pay the adoption fee. We cannot take checks."* | Petango 개체 상세, 사이트 HTML |
| **입양비에 포함되는 것** | 중성화 · 원 이송비의 일부(***"Portion of original rescue transportation fee"***) · 건강검진 · 마이크로칩 · 연령별 백신 · 광견병 증명(16주+) · **개는 SNAP 4Dx IDEXX 검사**, **고양이는 FeLV/FIV 검사** · 구충·심장사상충 예방 · 리드·목줄 · 소량 사료 · **Petco 케어팩 코드** | 사이트 HTML |
| **입양비 인하 프로그램 3종** | **Super Senior**(6세 이상 고양이 **입양비 면제**) / **Spirit Cat**(극도로 소심한 고양이, 감액 적용 가능) / **Extended Stay Club**(장기 체류 개체에 **훈련 바우처·수의 케어·특수 사료 등 사후 지원**). 별도로 **MA 거주 재향군인 할인 바우처**(재원 한도 내) | 사이트 HTML |
| 모금·결제 스택 | **Givebutter**(메인, `givebutter.com/tailsonthetrails`, 위젯 `js.givebutter.com/elements/latest.js` 전 페이지 로드) / **ejoinme.org**(Winter Ball 2026 스폰서십) / **PayPal**(hosted button `X6G42N23L5FBS`) / **Amazon Wishlist**(`2K3RAQCPXUVBC`) / **Chewy 위시리스트** / **Bonfire**(머천다이즈) / **careasy.org**(차량 기부) / **Stripe·Braintree/Venmo**(Givebutter 결제 경로) | 사이트 HTML |
| **모금 도구 교체 이력** | 구 사이트에는 **Flipcause 연동 코드**가 전 페이지에 깔려 있었다(2025-11 아카이브 주석: *"Begin Flipcause Integration Code"*). 현 사이트는 **Givebutter**. **사이트 이전과 함께 모금 플랫폼도 바뀌었다** | Wayback, 사이트 HTML |
| 기업 후원 | **Cranney Home Services**(Tails on the Trails 타이틀 스폰서) · **Cape Ann Savings Bank**(정기 meet & greet 3개 지점) · Tito's Vodka · Tile by Design · Yun's Piano Service 등이 사이트에 노출 | 사이트 HTML |
| **IT 지출** | **미확인.** 990 원문 PDF 확보 실패로 기능별 지출·IT 항목을 보지 못했다. 확인되는 유료 도구 후보는 **PetPoint · Volgistics · Wix · Constant Contact · Givebutter · ejoinme** 이며 금액은 공개분이 없다 | — |
| 감사·회계 | **미확인.** 990 원문 미확보 | — |
| 정부 재원 | **미확인.** MDAR 면허 보유 기관이나 지자체 계약 여부는 공개 자료에서 확인되지 않았다 | — |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **2025 총 인테이크** | **919** | **조직 게시 SAC 통계 PDF.** 내역 = transfer in **700** · 소유주 포기 **121** · stray/at large **26** · 기타(원내 출생·반환) **72** |
| **2025 입양** | **796** | 개 239(성견 98 + 6개월 미만 141) / 고양이 557(성묘 299 + 6개월 미만 258) |
| 2025 기타 아웃컴 | RTO **74** / transfer out **3** / 원내 폐사 **9** / 안락사(의료) **11** / 안락사(행동) **0** | 총 아웃컴 893 |
| **2025 라이브릴리스율** | **Best Friends 97.8% / Maddie's Fund 98.8% / Asilomar 97.8%** | 세 가지 산식을 전부 병기해 공개한다 |
| 2025 연초/연말 재고 | 연초 47(개 17 · 고양이 30) → **연말 73(개 19 · 고양이 54)** | **연말 재고 +55.3%** |
| **2024 총 인테이크** | **1,026** | transfer in **877** · 소유주 포기 69 · stray 27 · 기타 53 |
| **2024 입양** | **1,009** | 개 321 / 고양이 688 |
| 2024 기타 아웃컴 | RTO 19 / transfer out 11 / 폐사 6 / 안락사(의료) 12 / 안락사(행동) 2 | 총 아웃컴 1,059 |
| **2024 라이브릴리스율** | **Best Friends 98.05% / Maddie's Fund 98.67% / Asilomar 98.11%** | |
| 2024 연초/연말 재고 | 연초 80 → 연말 47 | |
| **전년 대비 변화 (2024→2025)** | **인테이크 −10.4% / 입양 −21.1% / transfer in −20.2% / 소유주 포기 +75.4% / RTO +289% / 연말 재고 +55.3%** | **들어오는 게 준 것보다 나가는 게 두 배 빠르게 줄었다.** 이 조직의 2026년 핵심 문제 |
| **현재 공개 입양 대기 두수** | **37마리 (고양이 26 + 개 11)** | **2026-09-04 조회.** Petango 위젯(PetPoint 공개 채널) 직접 조회 |
| **현재 상태값 분포 — 고양이** | `Cat Adoption` **12** · `Extended Stay` **8** · **`Foster Homes` 3** · `Cat hold` 2 · `Isolation` 1 | PetPoint 가 반환하는 stage 값 원문 |
| **현재 상태값 분포 — 개** | `Kennel` **4** · `Extended Stay` **4** · **`Foster Homes` 3** | |
| **현재 임시보호 중 (공개분)** | **6마리 / 37마리 = 16.2%** | 고양이 `Dot - Foster` · `Gene Kelly - Foster` · `PomPom - Foster`, 개 `King - Foster` · `Mancha-Foster` · `Pop-Tart - Foster` |
| **장기 체류(`Extended Stay`)** | **12마리 / 37마리 = 32.4%** | 조직 설명문은 *"It doesn't happen very often…"* 인데 **실측은 3마리 중 1마리**다. 다만 `Extended Stay` 가 Extended Stay Club 과 정확히 같은 정의인지는 **확인 필요** |
| **실제 총 임시보호 두수** | **미확인 — 그리고 공개 자료로는 확인이 불가능하다** | 공개 피드는 **「입양 가능」 개체만** 반환한다. 포스터 신청서가 명시적으로 받는 **모유수유(bottle-fed) 새끼 · 임신모 · 모자 세트 · 의료/행동 특수 케어** 개체는 입양 가능 상태가 아니어서 **피드에 아예 안 나온다.** 실제 가정에 나가 있는 개체 수는 6마리보다 상당히 클 개연이 높다(**추론**) |
| 포스터 가정 수 | **미확인** | 사이트·990·통계 PDF 어디에도 포스터 가구 수 지표가 없다 |
| **평균 포스터 체류 기간** | **약 2주** | 포스터 직무기술서 원문: *"Take animals into your home for approximately 2 weeks."* / *"Typical foster stay is about 2 weeks, but may vary."* |
| 자원봉사자 수 | **미확인** | Volgistics 를 쓰지만 인원·시간 공개분이 없다 |
| **입양 신청 처리 SLA (자기 공표)** | **48시간** | 원문: *"If you have not been contacted to schedule your visit within 48 hours of submitting your application, it is safe to assume the animal has been adopted."* |
| **입양자 대응 요구 (자기 공표)** | **24시간 내 미팅 가능해야 함** | 신청서 첫 문항 원문: *"I verify that I am available within 24 hours of submitting my application to meet my chosen prospective pet and complete the adoption process, including taking my new pet home."* |
| 미팅 시간 제한 | **승인 후 미팅 40분 / 시설 방문 20분** | 원문: *"Meetings will be scheduled once your application is approved and is limited to 40 minutes."* / *"visit time is limited to 20 minutes"* |
| **포스터 신청 심사 주기 (자기 공표)** | **월 1회 정도** | 포스터 폼 원문: ***"Foster applications are reviewed as needed, typically once per month."*** |
| Foster-to-Adopt 트라이얼 | **2주**, MA 거주자 한정, 트라이얼 기간 중 **개체를 웹사이트에서 내림** | 원문: *"Animal will be pulled off the website for 2 weeks to ensure there is no pressure on the family to decide before the deadline"* |
| 원내 의료 처리 비율 (자기 공표) | **약 90%** | 원문: *"We are able to complete about 90% of all medical care in-house"* |
| Foster-to-Adopt 누적 성사 | **19건 (2022-05 ~ 2024-04)** | 사이트에 이름·입양월이 나열돼 있다. **2024-04 Cici 이후 추가 게시가 없다** — 프로그램 중단인지 페이지 방치인지 **확인 필요** |
| 대외 평판 | **미확인** | Yelp(리뷰 22건, `Updated August 2026` 표기) · Facebook 리뷰 모두 자동 열람 차단. **소송·행정처분·부정 보도는 검색되지 않았다** |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **원장 = PetPoint (확정)** | 사이트 `/cats`·`/dogs` 의 개체 목록이 **Petango 위젯 iframe** 이다. 실제 src: `https://ws.petango.com/webservices/adoptablesearch/wsAdoptableAnimals2.aspx?species=Cat&…&authkey=8cyw3mw2bj6lvdg7nxfqmhvq33fvuxnyxotje5j7fkjynq0wio&…`. **Petango 는 PetPoint 의 공개 리스팅 채널**이므로 시스템 오브 레코드는 PetPoint 다 | 사이트 Wix 구조 JSON → `filesusr.com/html/1cadf9_ea178f34…html`, `…1c9a6009…html` |
| **확인 방법 주석** | 이 임베드는 **초기 HTML 에 안 보인다.** Wix HtmlComponent 라 런타임에 삽입된다. `thunderbolt-features` 페이지 JSON 을 직접 내려받아 컴포넌트 src 를 얻은 뒤 그 HTML 조각을 열어 확인했다. **구 사이트(2025-10 아카이브)에도 같은 authkey 의 Petango iframe 이 있었다 — 사이트를 바꿔도 원장은 그대로다** | Wix 구조 JSON, Wayback(2025-10-07) |
| **PetPoint 가 노출하는 것** | 개체별 **Animal ID(예: 61360117) · 종 · 품종 · 나이(일 단위) · 성별 · 크기 · 색 · 중성화 · 발톱제거 · 배변훈련 · 입양비 · 바이오 · 사진/영상**, 그리고 **상태값(stage)** — `Cat Adoption` / `Kennel` / `Foster Homes` / `Extended Stay` / `Cat hold` / `Isolation` | Petango 목록·상세 |
| **자원봉사 = Volgistics (확정)** | 신규 신청 `volgistics.com/appform/1472681149`, 기존 봉사자 포털 **VicNet `volgistics.com/vicnet/426366/login`**. 사이트 2개 페이지에 버튼으로 상시 노출 | 사이트 HTML |
| **자원봉사 시간을 봉사자가 직접 입력한다** | 자원봉사 직무기술서 원문 요건: ***"Track and input hours worked into the CAAA database"*** — 즉 **VicNet 자기입력 문화가 이미 있다.** 「당사자가 직접 로그인해 기록을 남기는 도구」에 이미 돈과 습관을 쓰고 있다는 뜻 | 이벤트 봉사자 PDF |
| **입양 신청 = Google Forms (확정)** | 고양이 `docs.google.com/forms/d/e/1FAIpQLScFIouwwREy2-…`(**문항 64개**, 개체 드롭다운 **30개 옵션**), 개 `…1FAIpQLSdLs6tp6b1V-…`(**문항 65개**, 드롭다운 **12개 옵션**). 사이트 `/catapp`·`/dogapp` 이 이 폼을 임베드한다 | 사이트 HTML, Google Forms |
| **포스터 신청 = Google Forms (확정)** | `docs.google.com/forms/d/e/1FAIpQLSeQRa_sfAYXLGnJzBk2-…`, 제목 **`FOSTER Application`**, **문항 41개** | 사이트 HTML, Google Forms |
| **포스터 직무기술서 = PDF** | `/foster` 의 「Foster Description」 버튼이 **PDF 다운로드**다(`_files/ugd/6b3e7e_63e50d4f….pdf`). 제목은 **`VOLUNTEER JOB DESCRIPTION — FOSTER CAREGIVER`**. **포스터가 조직 내부에서 「자원봉사 직군의 하나」로 정의돼 있다** | 사이트 HTML, PDF 판독 |
| **원장과 신청서가 연결돼 있지 않다 (핵심)** | 개체 드롭다운 옵션이 **PetPoint 조회 결과가 아니라 손으로 입력된 문자열**이다. 근거 ①띄어쓰기가 다르다(`Mancha - Foster` vs 원장 `Mancha-Foster`) ②원장에 없는 이름이 남아 있다(고양이 6건·개 1건) ③원장에만 있는 이름이 빠져 있다(`Avett - Bonded`, `Earl Scruggs - Bonded`) ④폼은 본디드 페어를 **한 옵션**으로 묶는데 원장은 **두 레코드**다 | Google Forms ↔ Petango 동시 대조(2026-09-04) |
| **원장이 신청서를 「가리키는」 방식** | Petango 개체 바이오 말미에 ***"Apply at: capeannanimalaid.org/catapp"*** 가 **사람이 타이핑해 붙여져 있다.** 시스템 연동이 없으니 자유 텍스트로 링크를 심는다 | Petango 개체 상세 |
| **폼 내부 분기도 손으로 건다** | 개 신청서에서 `Piper`·`Ranger`·`Liberty`·`King - Foster`·`Guppy` **5개 옵션만** Foster-To-Adopt 섹션(id `1265738541`)으로 분기하고 나머지 7개는 분기하지 않는다. **개체별 프로그램 자격이 폼 로직에 수기로 박혀 있다** | Google Forms 구조 판독 |
| **이메일 = Constant Contact** | 전 페이지 푸터의 「Join Our Mailing List」가 `visitor.r20.constantcontact.com/manage/optin?v=001PiGejH7uwQ74nkorHwuwx…` | 사이트 HTML |
| 모금 = Givebutter | `js.givebutter.com/elements/latest.js` 전 페이지 로드, 캠페인 `givebutter.com/tailsonthetrails`. 별도로 **ejoinme.org**(Winter Ball 2026 스폰서십), PayPal, Amazon·Chewy 위시리스트, Bonfire, careasy.org | 사이트 HTML |
| 행사·드롭인 봉사 = Wix Events | 「Drop In Volunteering」이 **Wix 이벤트 RSVP** 로 운영된다. SignUpGenius·Galaxy Digital 계열은 미검출 | 사이트 HTML |
| 사이트 = Wix | `<meta name="generator" content="Wix.com Website Builder">`, siteId `411a3dd1-…`, sitemap 59페이지. **구 사이트는 Weebly 계열**(`/uploads/1/0/6/7/106722865/…` 경로) | 사이트 HTML, Wayback |
| 잡다한 흔적 | 재회 행사 신청서 1건이 **개인 Wix 계정 폼**(`jyoung472.wixforms.com/f/7490083524997809165`)이다. **Director of Development 개인 계정으로 만든 폼이 조직 페이지에 걸려 있다**(**추론**) | 사이트 HTML, 추론 |
| **미검출 목록** | **쉘터 SW 대체재**(ShelterLuv · Petstablished · Pawlytics · Chameleon · ShelterBuddy · RescueGroups · Animal Shelter Manager · Adopets) / **포스터 전용 도구**(Doobert · Maddie's Pet Assistant · Paw Partner) / **자원봉사 대체재**(Better Impact · SignUpGenius · Galaxy Digital · VolunteerHub) / **도너 CRM**(Bloomerang · Classy · DonorPerfect · Neon · Donorbox · Zeffy · Blackbaud) / **협업·자동화**(Airtable · Smartsheet · Asana · Monday · Salesforce · HubSpot · Slack) — **59개 페이지 전수 검색에서 전부 0건** | 사이트 HTML 전수 검색 |
| **판정 시 주의** | 위 결과는 「안 쓴다」의 증거가 아니라 **「밖에서 보이는 자리에 없다」**의 증거다. **특히 포스터 상태 추적·내부 스프레드시트·문자방은 공개 사이트에 흔적을 남기지 않는다** | 추론 |
| **종합 판정** | **원장(PetPoint)도 있고 자원봉사 포털(Volgistics)도 있다. 없는 것은 그 둘 사이의 층이다.** ①포스터 접수 = Google Forms ②포스터 심사 = 월 1회 배치 ③포스터 배정 = 근거 없음 ④**개체가 가정에 나간 뒤의 상태 갱신 = PetPoint stage 를 직원이 수동 변경하는 것으로 보이고, 그 변경이 신청 폼 드롭다운에는 자동 반영되지 않는다**(실측으로 어긋남 확인) ⑤포스터↔입양희망자 화상 미팅 조율 = 근거 없음. **경쟁 대체 대화가 아니라 「PetPoint 옆의 빈자리」 대화만 성립한다** | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인** | **Rachel Mason(직책 미확인) → 부서장 → Executive Director Sunniva Buck → 이사회.** 포스터 직무기술서에 보고선이 명시돼 있다 — ***"REPORTS TO: Lead Adoption Counselors, Community Outreach Coordinator"***. 즉 **포스터 프로그램의 관리 주체는 「입양 카운슬러 리드」와 「아웃리치 코디네이터」 두 자리에 걸쳐 있다** |
| **콜 상대의 지위** | **결재자가 아닐 개연이 높다.** 연 지출 $1.34M, 유급 직원 다수, 이사 14인 + 명예이사 2인, 원내 수의 부서까지 갖춘 조직이다. **「담당자 한 명의 판단」으로 SaaS 가 들어가는 구조가 아니다.** 이 콜은 **실무 확인 대화**이고, 결재 경로와 이사회 주기를 알아내는 것 자체가 산출물이다 |
| **전결 한도** | **미확인.** 990 원문 PDF 확보 실패로 거버넌스 서식(Part VI)을 보지 못했다. **우리가 먼저 금액을 꺼내지 않는다** |
| **거버넌스 자기공개** | 미확인. 다만 **Shelter Animals Count 연간 통계를 세 가지 산식으로 병기해 자발 공개하고, 안락사 정책을 별도 문단으로 설명하며, 전 페이지에 MDAR 면허번호를 노출한다.** 대외 투명성 기준이 높은 조직이다 — **숫자로 말하면 통하고, 숫자 없이 말하면 안 통한다**(**추론**) |
| **예산 사이클** | **6월 결산.** 콜 시점(2026-09-04)은 **FY2027 개시 2개월 차**. FY2027 예산은 2026년 봄에 확정됐을 것이므로 **「지금 결제」 프레임이 가장 안 맞는 시점**이다. 논의는 **FY2028 편성(2027년 봄)** 또는 **기존 도구 예산의 재배치**로 간다 |
| **지불 여력** | **높다.** FY2025 순자산 $7,855,588, 잉여 $84,774, 총자산 $8.06M. **직전 3년에 자본 캠페인을 완주한 조직**이라 큰돈을 모으고 집행해 본 경험이 있다 |
| **비용 감각** | **인건비가 지출의 58.7%.** 따라서 ROI 서사는 **돈이 아니라 직원 시간**으로만 짜야 한다. 「입양을 더 많이 시켜 수입을 늘린다」는 논거는 위험하다 — 프로그램 수입이 총수입의 **18.8%** 뿐이고 기부·기여가 66.7%다 |
| **경쟁 기준선** | **이미 PetPoint(유료) + Volgistics(유료) + Constant Contact + Givebutter + Wix 를 쓴다. 여섯 번째 도구가 중복 지출로 보일 위험이 이 콜의 최대 반론이다.** 뒤집으면 유리하기도 하다 — **자원봉사자가 직접 로그인해 시간을 입력하는 문화가 이미 있고**(VicNet), 그 대상에서 **포스터만 빠져 있다** |
| **PetPoint 중복 우려 (선제 대비 필요)** | **PetPoint 상위 플랜에 포스터 관리 기능이 포함된다고 벤더 자료에 기술돼 있다**(24Pet 제품 페이지 계열, 검색 스니펫으로만 확인 — **원문 미열람, 콜에서 인용 금지**). 즉 상대가 **"우리 PetPoint 에 그 기능 있는데요"** 라고 답할 확률이 높다. **그 답을 반박하지 말고, 「그 기능으로 지금 무엇을 하고 계신가요 / 포스터 본인이 직접 들어가나요」로 받는다** |
| 실무 병목 (자기 공표) | 원문: ***"Due to a high volume of interest, we are unable to answer all emails or return all phone calls regarding animals available for adoption."*** 그리고 문의 폼 상단에 ***"Did you look for the answer to your question on our website?"*** 를 띄워 둔다. **문의 유입량 자체가 부담이라고 조직이 스스로 적었다** |
| 2차 콜 후보 | **Sunniva Buck**(Executive Director, 결재자) / **Lead Adoption Counselor 직군**(포스터 보고선 ①) / **Nadia Sostek — Outreach Coordinator**(포스터 보고선 ②, `volunteer@`·ext 104) / **Dr. Alex Becket**(Director of Shelter Medicine — 포스터 개체 의료 이슈의 실제 수신자) |

## 6. Rachel Mason 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **소속** | **Cape Ann Animal Aid 로 사실상 확정.** 리드 이메일 `r***@capeannanimalaid.org` 가 **조직 도메인**이고, 조직의 직원 메일 규칙(이니셜+성: `sbuck`·`bkothman`·`clewis`·`ntarbox`·`jyoung`)에 정확히 부합한다 | leads.json, 사이트 HTML, Wayback |
| **직책** | **미확인.** 현 사이트에 직원 디렉토리가 없고, 2023년 아카이브 명단 18명에 이 이름이 없다. **2024년 이후 합류했거나, 당시 명단에 오르지 않는 직군일 수 있다**(**추론**) | 사이트 sitemap, Wayback |
| **직책 후보 (추론)** | 소재 B(임시보호자 업데이트 수집)에 반응했고 포스터 보고선이 **Lead Adoption Counselor / Community Outreach Coordinator** 두 자리다. **둘 중 하나이거나, 그 아래 포스터 담당 실무자**일 개연이 높다. **단정 금지 — 콜 첫 질문으로 확인** | 포스터 직무기술서, 추론 |
| 경력·전문성 | **미확인.** LinkedIn 개인 프로필·회사 페이지 직원 목록 모두 자동 열람 차단. 지역 언론·조직 SNS 에서도 이 이름이 잡히지 않았다 | 검색 |
| **대명사** | **확인되지 않았다. 콜 전까지 단정하지 말 것** | — |
| 폼 자기보고 | **없다.** 2단계 폼을 진행하지 않아 `org_type`·`role`·`system`·`adoptions`·`fosters` 가 전부 공란이다. **다만 `intent` 가 `book` 이다 — 미팅을 잡겠다는 의사는 표시했다** | leads.json |
| **폼 미진행의 해석** | 두 갈래다. ①**시간이 없어서 끊었다**(운영 부하가 큰 조직이고, 조직 스스로 문의 대응이 벅차다고 적었다) ②**「우리 시스템은 뭐냐」류 질문에 답할 위치가 아니어서 멈췄다.** 어느 쪽이냐에 따라 콜 초반 설계가 달라진다 — **①이면 바로 본론, ②이면 결재·관리 라인 확인이 먼저**(**추론**) | 추론 |
| **콜에서 통할 언어** | **①숫자 ②이번 주 손동작.** 이 조직은 라이브릴리스율을 세 가지 산식으로 병기해 공개하고 SAC 에 보고하는 곳이다. 감성 서사보다 **「지금 37마리 중 6마리가 가정에 있고, 그중 어느 아이가 어느 집에 있는지를 어디서 보시나요」** 같은 **구체적 실무 질문**에 반응할 상대로 읽는다(**추론**, 직접 대면 근거 없음 — 콜 초반에 화법을 관찰해 조정) | 추론 |
| **먼저 꺼내지 말 것** | ①**폼 드롭다운이 원장과 어긋난 사실을 우리가 먼저 지적하지 않는다** — 본인 담당 영역이면 방어가 걸린다. 「새 아이가 들어오거나 나가면 그 목록은 누가 언제 고치시나요」로 우회한다 ②**가격** ③**2025년 입양 −21%** — 조직 자체 숫자로 먼저 꺼내면 실적 추궁으로 들린다. 상대가 「요즘 잘 안 나간다」고 말하면 그때 받는다 | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2023-10** | **「Walter & Yvonne Wood Wing of Hope」 증축 기공.** Gloucester Times 지역 보도 | 검색(Gloucester Times) |
| FY2023 (2023-06 결산) | 수입 **$2,637,667** — 기여금 $1,973,925 로 평년의 2.6배. 자본 캠페인 반영 | ProPublica API |
| FY2024 (2024-06 결산) | 수입 **$2,587,313** / 총자산 **$7,882,904**. 2년 연속 $1.4M 잉여 | ProPublica API |
| **2024-04** | Foster-to-Adopt 성사 게시의 **마지막 항목(`Cici`)**. 이후 추가 게시 없음 | 사이트 HTML |
| **2024 (연간)** | 인테이크 1,026 / 입양 **1,009** / 연말 재고 47 / LRR 98.05~98.67% | SAC 통계 PDF |
| **2024 가을** | **Wing of Hope 완공** — 시설 면적 확장 및 기존 공간 개선 | 검색 |
| **2025 겨울** | **고양이 입양 구역(Cat Adoption areas) 개선 공사** | 검색 |
| **2025 (연간)** | 인테이크 919 / 입양 **796** / 연말 재고 **73** / 소유주 포기 **121**(+75.4%) / RTO **74**(+289%) | SAC 통계 PDF |
| FY2025 (2025-06 결산) | 수입 $1,421,101 로 평년 복귀 / 잉여 $84,774 / 총자산 **$8,057,879** | ProPublica |
| **2025-11 ~ 12** | **웹사이트 전면 재구축 (Weebly 계열 → Wix).** 동시에 **모금 플랫폼도 Flipcause → Givebutter 로 교체.** 이 과정에서 **직원 디렉토리 페이지가 사라졌다** | Wayback(2025-11-12 구 디자인 / 2025-12-05 Wix 동적 페이지) |
| 2025-11-12 | 구 사이트 채용 페이지 상태: ***"Currently, we are not hiring for any positions."*** | Wayback |
| **FY2025 → 현재** | **이사회 임원 교체.** 990 상 Kate Glidden(President)·Marissa Goodman(Secretary) → 현 사이트 Cristopher Peterson(President)·Emily Neish(Secretary)·Lindsy Owens(VP) | ProPublica, 사이트 HTML |
| **2026-07** | **「Name Your Price」 입양 프로모션 + 장기 체류 개체 특전**(사후 훈련비 환급, 심장사상충·벼룩진드기 예방 6개월분) 지역 언론 보도. 같은 시기 고양이 `August`·`Jaina` 가 Extended Stay 프로그램 편입 | 검색(Gloucester Times) — **원문 미열람(HTTP 429), 인용 금지** |
| 2026 여름 | **Shelter Discovery Kids Program**(초등 3~5학년 대상) 운영 | 검색, 사이트 이벤트 페이지 |
| **2026-09-04 (조회 시점)** | **홈페이지 개방시간 블록에 `Friday: Aug 28th` / `Saturday: Aug 29th` 공지가 그대로 남아 있다.** 같은 사이트의 `/contact` 는 월·화 `CLOSED`, 홈은 `APPOINTMENT ONLY` 로 서로 다르다 | 사이트 HTML |
| **다가오는 일정 (반드시 피할 것)** | **9/10·9/23·9/30 드롭인 봉사** / **9/16 Cape Ann Savings Bank(Manchester) 강아지 meet & greet** / **9/26 Rescue Reunion 2026 (Stage Fort Park, 11–14시)** / **10/4 「Tails on the Trails」(Dogtown Commons, Cranney Home Services 협찬, Givebutter 티켓)** / **10/11 Justin Harrington Memorial Fundraiser** / **10/21·11/18 은행 지점 meet & greet** | 사이트 이벤트 페이지 |
| 부정적 사건 | **소송·행정처분·동물 압류·자금 논란·부정 보도 전부 검색되지 않았다.** Yelp 리뷰 22건은 자동 열람 차단으로 **미확인** | 검색 |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

정황에서 끌어낸 것만 적는다. 각 줄에 확인 필요 여부를 밝힌다.

- **입양 신청서의 개체 목록이 원장과 실시간으로 어긋난다 — 이 콜의 정중앙이다.** 2026-09-04 동시 대조 결과, 고양이는 **폼 30 vs 원장 26**, 개는 **폼 12 vs 원장 11**. 폼에만 남은 항목: `Rocky`, `Junie - Foster`, `Fridgie - Foster`, `Winnie - Foster`, `Toothless - Foster`, `Avett & Earl Scruggs-Bonded Pair`(원장은 2레코드), `Hellen`. 원장에만 있는 항목: `Avett - Bonded`, `Earl Scruggs - Bonded`. → **「새 아이가 들어오거나 입양이 확정되면 그 드롭다운을 누가 언제 고치는지」 확인 필요.** 폼에 남은 개체로 신청이 들어오면 그 신청서는 사람이 읽고 걸러야 한다.
- **어긋남이 포스터 개체에 몰려 있다.** 폼에만 남은 고양이 6건 중 **4건(`Junie`·`Fridgie`·`Winnie`·`Toothless`)이 전부 `- Foster` 표시 개체**다. 반대로 폼이 `- Foster` 라고 표시한 9마리 중 **PetPoint stage 가 실제 `Foster Homes` 인 것은 3마리**뿐이고, `Jelly Donut`·`Lemon Curd` 는 `Extended Stay` 다. → **「가정에 나간 개체의 상태를 원장에서 언제 바꾸는지, 그리고 그 변경이 폼에 반영되기까지 몇 단계인지」 확인 필요.**
- **표식 하나가 「직접 만날 수 있나 / 화상만 되나」를 가른다. 그 표식이 이미 한 건 틀려 있다.** 사이트 원문 ***"Names followed by 'foster' are available for adoption, but are currently in a foster home and are only available for zoom meetings."*** 인데, 개 폼의 `Pop tart` 에는 표식이 없고 원장은 `Pop-Tart - Foster` / `Foster Homes` 다. → **「이 표식을 누가 붙이는지, 붙이는 걸 잊으면 무슨 일이 생기는지」 확인 필요.** 이건 곧 방문한 입양희망자를 헛걸음시키는 문제다.
- **띄어쓰기가 다르다.** 폼 `Mancha - Foster` vs 원장 `Mancha-Foster`. **내보내기 붙여넣기라면 나올 수 없는 차이**다. 사람이 다시 친다는 뜻(**추론**). → **PetPoint 에서 입양 가능 개체 목록을 내보낼 수 있는지, 내보내기를 쓰고 있는지 확인 필요.**
- **개체별 프로그램 자격이 Google Forms 분기 로직에 수기로 박혀 있다.** 개 폼에서 `Piper`·`Ranger`·`Liberty`·`King - Foster`·`Guppy` 5개만 Foster-To-Adopt 섹션으로 분기한다. → **「어느 아이가 Foster-to-Adopt 대상인지를 어디서 정하고 어디에 적어 두는지」 확인 필요.** 사이트 원문은 *"Foster-to-adopt animals are hand-picked by CAAA staff"* 다 — **hand-picked 라고 스스로 적었다.**
- **원장의 바이오 필드가 신청서 링크를 담는 데 쓰인다.** Petango 개체 상세 마지막 줄이 ***"Apply at: capeannanimalaid.org/catapp"*** 다. **개체마다 사람이 붙인다.** → **바이오를 누가 쓰는지(포스터인지 직원인지), 붙이는 걸 잊은 개체가 있는지 확인 필요.** 포스터 직무기술서에는 ***"Help write bios and gather pictures of cat/dog for online profiles"*** 로 **포스터가 바이오를 쓴다고 적혀 있다** — 그 원고가 어떤 경로로 PetPoint 에 들어가는지가 정확히 우리 자리다.
- **입양이 화상으로 진행되고, 그 화상을 포스터가 한다.** 포스터 폼 원문: ***"Being responsive to emails is an essential component of the foster program, as our adoptions are conducted virtually."*** 직무기술서 원문: ***"Work with public adopters by conducting video calls."*** → **「포스터와 입양희망자의 화상 일정을 누가 무엇으로 잡는지」 확인 필요.** 조직은 48시간 SLA 를 공표했고 입양희망자에게 24시간 내 가능할 것을 요구한다. **일정 조율이 사람 손이면 여기가 최대 병목이다.**
- **포스터 신청 심사가 월 1회 배치다.** 폼 원문: ***"Foster applications are reviewed as needed, typically once per month."*** 반면 자원봉사 신청은 ***"we will reach out within 1 week"*** 다. **같은 조직에서 자원봉사는 1주, 포스터는 1개월이다.** → **「포스터 신청이 월 몇 건 들어오고, 심사에 무엇이 걸려 한 달이 되는지」 확인 필요.** 참고로 신청서가 **레퍼런스 3인 전화 + 본인 수의사 전화 + 임대인 전화**를 요구한다.
- **포스터 신청서는 배치에 필요한 값을 이미 다 받고 있다. 문제는 그 값이 어디에 남느냐다.** 41개 문항 중 **가능 개체 유형 체크박스 14종**(Cats / Kittens / Dogs / Puppies / Pregnant Moms(dogs) / Mom & Babies(dogs) / Pregnant Moms(cats) / Mom & Babies(cats) / **Bottle Fed Kittens** / **Bottle Fed Puppies** / **Medical Special Needs**(각 2종) / **Behavioral Special Needs**(각 2종)), 복수 마리 가능 여부, 하루 중 단독 방치 시간, 자가/임대, 응급 연락처(**집 열쇠 보유·출입 권한까지**), 레퍼런스 3인을 받는다. → **「이 답변이 Google Sheets 에 남는지, PetPoint 나 Volgistics 로 옮겨지는지, 배치할 때 실제로 다시 열어 보는지」 확인 필요.** **받는 값은 훌륭한데 그 값이 배치 시점에 조회 가능한 형태로 살아 있는지가 관건이다**(**추론**).
- **응급 시 포스터 개체 회수 절차가 「응급 연락처」 한 줄에 얹혀 있다.** 폼 헬프텍스트 원문: *"We are asking that all Fosters have an emergency contact on file with us, should the main contact need their foster pet need to be removed from the home due to emergency."* → **「그 상황이 실제로 얼마나 자주 일어나고, 일어났을 때 다음 가정을 어떻게 찾는지」 확인 필요.** 「빈 자리가 어디인지」를 아는 문제라 우리 제품의 정중앙이다.
- **포스터가 개체를 시설로 데려와 진료를 받는다.** 직무기술서 원문: ***"Bring animal to shelter for veterinary care if needed during the foster period (vaccine boosters, sick care, spay/neuter procedures, etc.)"*** 그리고 의료는 **원내 90% 처리**다. → **「가정에 있는 개체의 다음 예약이 언제인지를 포스터와 의료팀이 각각 어디서 보는지」 확인 필요.** Dr. Becket 인용문에 *"Our amazing foster care providers and staff now also have an in-shelter resource for medical questions and concerns"* 가 있다 — **문의 채널이 「사람」이라는 뜻**이다.
- **평균 체류가 2주다. 회전이 빠를수록 목록 갱신 부담이 커진다.** 직무기술서 원문 *"Take animals into your home for approximately 2 weeks."* → 2주 회전 × 연 입양 796건이면 **드롭다운 수정이 상시 업무**다(**추론**).
- **포스터는 「자원봉사 직군」으로 정의돼 있는데 자원봉사 포털(Volgistics)에는 안 들어간 것으로 보인다.** 문서 제목이 `VOLUNTEER JOB DESCRIPTION — FOSTER CAREGIVER` 인데, 포스터 신청 경로만 **Google Forms** 이고 나머지 봉사 직군은 **Volgistics 신청 폼**이다. → **「포스터가 Volgistics 명부에 들어가는지, 시간을 VicNet 에 입력하는지, 아니면 완전히 별도 명단인지」 확인 필요.** 만약 별도라면 **한 사람이 두 명부에 존재**한다.
- **장기 체류 개체가 지금 3마리 중 1마리다.** `Extended Stay` 12 / 37 = 32.4%. 조직 자기 설명은 *"It doesn't happen very often…"* 이고, 2025년 연말 재고는 전년 대비 +55.3% 다. → **「장기 체류 판정을 누가 언제 내리고, 그 뒤 무엇이 자동으로 바뀌는지」 확인 필요.** 사이트 원문은 *"at the discretion of Cape Ann Animal Aid Adoption Counselors"* 로 **사람 재량**이라고 명시한다. **여기에 포스터를 붙이면 회전이 도는데, 붙이려면 「누가 어떤 아이를 받을 수 있는지」를 알아야 한다.**
- **손으로 고치는 블록은 폼만이 아니다.** 홈페이지 개방시간에 8월 28·29일 공지가 9월 4일까지 남아 있고, `/contact` 와 홈의 월·화 표기가 다르다. Foster-to-Adopt 성사 목록은 2024-04 이후 멈춰 있다. → **「사이트 콘텐츠를 누가 갱신하는지」 확인 필요.** 갱신 담당이 콜 상대와 같은 사람이면 부하의 크기가 그대로 드러난다.

## 미확인 요약 (콜에서 확인할 것)

1. **Rachel Mason 의 직책과 포스터 프로그램에서의 역할** — 조직 도메인 메일까지는 확인했으나 직책이 공개 자료에 없다. **첫 30초 안건**
2. **지금 몇 가정이 몇 마리를 데리고 있는가** — 공개 피드에는 「입양 가능」 6마리만 나온다. **모유수유 새끼·임신모·의료 특수 케어는 피드에 아예 안 나온다.** 실제 숫자를 처음 듣는 자리가 이 콜이다
3. **PetPoint 를 어디까지 쓰는가** — 개체 원장·의료 기록까지인가, **포스터 배정·가정별 이력까지인가**. **PetPoint 에 포스터 기능이 있다는 답이 나올 가능성이 높고, 그때 「그 기능으로 지금 무엇을 하시냐 / 포스터 본인이 직접 들어가냐」로 받아야 한다**
4. **가정에 나간 개체의 상태를 원장에서 언제 누가 바꾸는가** — `Foster Homes` stage 변경이 실시간인지 배치인지
5. **입양 신청 폼의 개체 드롭다운을 누가 언제 고치는가** — 조회 시점 폼 30 vs 원장 26(고양이), 12 vs 11(개). **우리가 먼저 지적하지 말 것**
6. **포스터가 쓴 바이오·사진이 어떤 경로로 PetPoint 에 들어가는가** — 직무기술서에 포스터가 쓴다고 적혀 있다
7. **포스터와 입양희망자의 화상 미팅 일정을 무엇으로 잡는가** — 입양이 화상으로 진행되고, 48시간 SLA·24시간 대응 요구가 공표돼 있다
8. **포스터 신청 심사가 왜 월 1회인가** — 자원봉사는 1주다. 레퍼런스 3인·수의사·임대인 전화 중 무엇이 걸리는가
9. **포스터 신청서의 14종 가능 유형 체크박스 답변이 배치 시점에 조회 가능한가** — 받는 값은 훌륭하다. 남는 자리가 문제다
10. **포스터가 Volgistics 명부에 들어가는가, VicNet 에 시간을 입력하는가** — 자원봉사자는 직접 입력하는 문화가 있다
11. **응급으로 포스터 가정에서 개체를 빼야 할 때 다음 가정을 어떻게 찾는가** — 신청서가 집 열쇠 보유 여부까지 받는다
12. **가정에 있는 개체의 다음 진료 예약을 포스터와 의료팀이 각각 어디서 보는가** — 원내 90% 처리, 포스터가 데려온다
13. **장기 체류(`Extended Stay`) 판정을 누가 내리고 그 뒤 무엇이 바뀌는가** — 현재 37마리 중 12마리
14. **Foster-to-Adopt 프로그램이 지금도 도는가** — 성사 게시가 2024-04 에서 멈춰 있다
15. **소프트웨어 지출을 누가 어떤 기준으로 승인하는가 / 이사회 개최 주기** — **먼저 꺼내지 말고 상대가 비용을 물을 때만 받을 것**
16. **소재 B(임시보호자 업데이트 수집)에 반응한 이유** — 없는 것을 만들려는 것인가, 있는데 새는 것인가. **이 콜의 최대 소득**
17. **2단계 폼을 진행하지 않은 이유** — 시간인가, 답할 위치가 아니어서인가. 콜 초반 설계가 달라진다
18. **본인이 밝힌 대명사** — 확인되지 않았다. 콜 전까지 단정하지 말 것
