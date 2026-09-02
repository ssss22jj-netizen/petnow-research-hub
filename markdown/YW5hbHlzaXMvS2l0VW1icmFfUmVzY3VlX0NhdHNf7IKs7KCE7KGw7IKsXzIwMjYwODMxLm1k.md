# KitUmbra Rescue Cats 사전조사

- 작성일: 2026-08-31 / 목적: Kimber Bowers 콜 준비(2026-09-07) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Foster-based rescue", "role": "Executive director or founder", "system": "Spreadsheets", "adoptions": "50–150", "fosters": ""}`
- 유입 소재: A (입양 준비 상태 추적)
- **동일 조직 확정 / 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: 조직이 배포하는 정관 PDF(26쪽, Dropbox)는 원문을 내려받아 페이지 이미지로 직접 판독했다. 이 문서에서 정관을 인용한 영문 문장은 전부 그 판독본 기준이다
- 출처 주석 ②: **자동 요약기가 Google Form 문항 목록에서 원문에 없는 표현을 반환한 사례가 2건 확인됐다**(포스터 폼 체크박스의 "adoption readiness", 입양 폼의 "Please check the album on Adopt-a-Pet"). 따라서 폼에서 큰따옴표로 인용한 문장은 **전부 내려받은 폼 HTML 원문에서 문자열 일치로 재검증**한 것만 실었다. 재검증에 실패한 값은 본문에 싣지 않았다
- 출처 주석 ③: Adopt-a-Pet·Zeffy·Square·TikTok 은 서버가 자동 열람을 차단하거나 JS 렌더링이라 텍스트 프록시(r.jina.ai)로 원문을 확보했고 `(프록시)`로 표기
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 시·주까지만 적는다. **이 조직의 등록 주소는 대표의 자택이다**

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Loving Light Holistic Wellness (Inc.), DBA KitUmbra Rescue Cats. EIN 33-4174178, Dallastown, PA**(York County). 501(c)(3), NTEE **D20**(Animal Protection and Welfare), 공익법인 분류 **170(b)(1)(A)(vi)**, **12월 결산** | ProPublica API, IRS 결정통지서(정관 PDF 첨부) |
| **신청자 — 결정적 근거** | **조직 정관 Article V Section 2 첫 줄이 "Kimber Bowers will be Executive Director until transfer of organization ownership may occur or until the Board and she may choose to appoint another to this role."** 즉 조직이 공개 배포하는 지배구조 문서가 신청자를 직책과 함께 실명으로 지정한다. 같은 PDF 말미의 2025-09-26 정관 개정 Exhibit A 서명란도 **"Kimber Bowers, Executive Director"** | 정관 PDF |
| 신청자 — 보강 | ①Adopt-a-Pet 조직 페이지의 Contact 란이 **Kimber Bowers** ②PA 주정부 LLC 설립증서(2016-04-28)의 조직자가 **Kimberly A Bowers** ③가명등록(2024-07-17) 대리인이 **Kimberly A Bowers, Ciara G Bowers** ④Square 예약 페이지 서비스 설명문에 **"Reiki Master & Ordained Reverend Kimber Bowers"**, **"Certified Clinical Hypnotherapist Kimber Bowers"**. **4개 독립 출처가 맞물린다** | Adopt-a-Pet(프록시), PA DOS 문서(정관 PDF 첨부), Square(프록시) |
| **이메일 도메인 — 주의** | 리드 도메인은 표기상 **`gmail.com.com`** 이다. 조직 공식 주소는 **`k***@gmail.com`** 이고 **로컬파트가 완전히 일치**한다. 즉 **신청자가 폼에 도메인을 잘못 입력한 것**으로 읽는 것이 유일하게 정합적이며, 동시에 **조직 특정에는 오히려 도움이 된다**(로컬파트가 조직 고유 문자열이다). 다만 이 오타는 실무상 무해하지 않다 — 아래 7절·8절 참조 | 리드 원본, 정관 PDF, Adopt-a-Pet(프록시) |
| 동명 조직 | **ProPublica 에서 "KitUmbra" 검색 결과는 3건**이고 나머지 2건은 **Kitambaa Empowering Women Inc**(New York NY, NTEE W99)와 **Grant And Carole Kitamura Family Foundation**(Fruitland ID, W99)로 **철자가 유사할 뿐 동물 단체가 아니다.** 광의 검색 "Umbra" 로도 동물 구조 단체 동명은 걸리지 않는다. **KitUmbra 는 조어이며 미국 내 동명 조직이 없다** | ProPublica API |
| 자체 도메인 | **없다.** `kitumbra.com` 은 NXDOMAIN(2026-08-31 DNS 조회). 대표의 옛 웰니스 사업 도메인 `lovinglighthw.com` 도 **NXDOMAIN 으로 소멸**했다 | DNS 실측 |
| 폼 응답 정합 | **4개 중 3개가 직접 확인되고 1개는 미검증이다** — **org_type(Foster-based rescue)**: 정관 자기 정의가 *"KitUmbra Rescue Cats is a foster-based rescue"* / **role(ED or founder)**: 정관이 ED 로 지정, 동시에 창업자 / **system(Spreadsheets)**: 입양·포스터 접수가 전부 Google Form 이므로 응답은 Google Sheets 로 떨어진다 — **정합하되 절반만 맞다**(4절) / **adoptions(50–150)**: **검증 실패**, 공개 자료에 입양 건수가 전혀 없다(3절) | 정관 PDF, Google Form 원문 |

→ **EIN·정관 실명 지정·소재지·이메일 로컬파트·조직 성격 5개 축이 맞물려 조직·신청자 모두 확정.** 다른 조직 정보를 끌어온 부분 없음.

## 미팅에서 바로 쓸 핵심 5줄

1. **콜 전에 손볼 일이 있다 — 우리가 보낸 예약 확인 메일이 신청자에게 도달하지 않았을 가능성이 매우 높다** — 리드 이메일 도메인이 `gmail.com.com` 인데, **이 도메인은 실재하고 MX 레코드가 살아 있다.** 2026-08-31 실측 결과 `gmail.com.com` 의 MX 는 **`mx203.inbound-mx.net` / `mx203.inbound-mx.org`** 이고, 상위 `com.com` 은 Cloudflare 네임서버를 쓰는 와일드카드 도메인이다. 즉 **바운스가 아니라 제3자 캐치올 서버가 우리 메일을 받아 갔다.** 결과는 둘 다 나쁘다 — ①본인은 예약 확인도 리마인드도 못 받았고 **9/7 노쇼 위험이 실재한다** ②우리 발송 내용이 타이포스쿼팅 도메인 운영자에게 넘어갔다. **콜 전 조치**: 발송 로그에서 도달 여부를 먼저 확인하고, 정확한 주소(`k***@gmail.com`) 또는 조직이 공개한 대표 번호(410-241-2635, 본인이 "text me any time" 이라고 공지한 번호)로 일정 재확인. **이건 상대에게 물을 게 아니라 우리가 처리하고 들어가야 하는 항목이다**

2. **정관에 우리 제품 기능 명세가 사람 직무로 적혀 있다 — 이 콜은 「도구 비교」가 아니라 「아직 사람으로 못 채운 역할」 상담이다** — 조직이 공개 배포하는 26쪽 정관의 **Foster Chair** 직무 원문: *"Keeps track of all current foster placement and all individual feline veterinary schedules. Schedules vaccination and neuter/spay appointments as well as antiparasitic treatments and foster supply pick-up."* 그리고 그 자리에 요구하는 도구 역량이 **"Competent with Word, Google Calendar, and Adobe"** 다. 한편 **Secretary** 직무에는 *"Maintains feline health records."* 가 별도로 박혀 있다. → **①포스터 배치 추적 ②개체별 수의 일정 ③건강기록**이 세 사람 몫으로 갈라져 문서에 정의돼 있는데, **정관에 적힌 역할과 실제 채워진 사람이 일치하는지는 어디에도 공개돼 있지 않다.** 콜의 첫 실질 안건은 "정관에 있는 이 자리들이 지금 누구인가"이고, 상대는 설명 없이 이 질문을 알아듣는다

3. **폼의 "50–150"을 그대로 믿고 들어가면 자릿수가 어긋난다 — 이 조직은 13개월 됐다** — 레스큐 브랜드(가명) 등록이 **2024-07-17**, 비영리 전환이 **2025-02-26**, IRS 면세 결정통지가 **2025-10-07** 이다. 990 신고 이력은 **0건**이고 IRS BMF 신고요건 코드는 **2**(통상 990-N 전자엽서 대상, 총수입 소액 구간)다. 공개된 유일한 규모 지표는 **현재 입양 가능 26마리**(Adopt-a-Pet, 2026-08-31)와 **연간 운영 모금 목표 $5,000**(Zeffy Cat Care Fund 2026)이다. 입양비가 **$125/$100/$75** 이므로 만약 연 50~150건이 사실이면 입양비 수입만 $6,250~$18,750로 **연 모금 목표보다 크다.** 둘 중 하나다 — 폼 숫자가 누적·희망치이거나, 아니면 이 조직의 현금 흐름이 사실상 입양비로 굴러가고 모금은 보조다. **어느 쪽이냐에 따라 이후 대화가 통째로 갈리므로 초반에 단위부터 가른다**

4. **결재는 Kimber 혼자가 아니다 — 정관이 ED 에게 일반 의결권을 주지 않았다** — 원문: ED 는 *"Does not have a regular vote in matters addressed by board other than appointment of President"*, 가부동수일 때만 캐스팅보트를 던진다. 이사회는 **5~9인**, 의결은 **이사 1인 1표 과반**, 회의는 **60일 전 통지**와 **21일 전 안건 배포**가 요건이고 긴급 선포 시에만 48시간/12시간으로 줄어든다. **9/7 콜에서 나온 건을 정식 의결에 부치면 산술적으로 11월이다.** 게다가 연말 잉여금은 *"used for purchases in preparation of the upcoming year, paid out in compensation... or donated to one of our partner 501(c)(3) nonprofit TNR organizations by January 30th"* 로 **남기지 않는 구조**다. → **실질 진입점은 "지금 결제"가 아니라 "FY2027 예산 항목"이고, 그 앞단에 이사회 일정이 하나 더 있다**

5. **스택 전체가 무료 도구다 — 유료 소프트웨어라는 관문을 아직 한 번도 넘지 않았다. 가격은 상대가 묻기 전엔 꺼내지 않는다** — 확인된 스택: **Google Forms**(입양·포스터 접수) / **Zeffy**(모금·입양비 수납, 수수료 0을 표방하는 무료 플랫폼) / **Square**(예약·결제) / **PayPal**(버튼 2종) / **Bitly**(링크 7개, link-in-bio 페이지가 사실상 홈페이지) / **Dropbox**(정관 배포) / **Amazon 위시리스트** / **Adopt-a-Pet**(Zeffy 조직 페이지가 "Our website" 로 등재한 주소가 바로 이 Adopt-a-Pet 조직 페이지다). **자체 도메인도 없다.** 동시에 모금 실적은 전 캠페인이 목표의 **12~25%** 에서 멈춘다(2절 표). → **비용 절감이나 ROI 화법이 아니라 "지금 사람 손으로 하는 일"의 언어로만 말한다. 유료화 가능성은 콜 후반에 「내년 예산에 항목이 서는가」로만 탐색한다**

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Loving Light Holistic Wellness (Inc.)** / 대외 통칭 **KitUmbra Rescue Cats**(등록 가명, DBA). 정관 표제도 *"Bylaws of Loving Light Holistic Wellness & DBA KitUmbra Rescue Cats"* | 정관 PDF, ProPublica |
| EIN·지위 | **33-4174178** / 501(c)(3), **면세 발효일 2025-02-26**, **결정통지 2025-10-07**, 공익법인 분류 170(b)(1)(A)(vi), 기부금 공제 가능, 12월 결산 | IRS 결정통지서(정관 PDF 첨부), ProPublica API |
| NTEE | **D20**(Animal Protection and Welfare) | ProPublica API |
| 소재지 | **Dallastown, PA**(York County). **등록 주소·사무소·물품 픽업 장소가 모두 동일한 한 곳**이며 대표의 자택이다. 정관 원문도 *"The principal office of the Organization shall be located in the Municipality of Dallastown, County of York"* | ProPublica API, 정관 PDF |
| **연혁 (4단계)** | ①**2016-04-28** Loving Light Holistic Wellness **LLC** 설립(영리, 조직자 Kimberly A Bowers, 발효 2016-05-14) ②**2024-07-17** 가명 **"KitUmbra Rescue Cats"** 등록, 사업 내용 *"Foster, vaccination, spay/neuter and adoption services for stray cats/kittens in York, PA and surrounding areas"* ③**2025-02-26** LLC → **비영리법인 전환**(Statement of Conversion), **같은 날 이해상충정책 이사회 의결** ④**2025-09-26/27** 정관 개정으로 501(c)(3) 목적조항 정비 | PA DOS 문서(정관 PDF 첨부) |
| **조직 나이** | **레스큐 브랜드 기준 약 13개월, 비영리법인 기준 약 18개월, IRS 결정통지 기준 약 11개월.** 콜 시점(2026-09-07)에 **아직 첫 회계연도 결산 공개 이력이 없다** | 위 연혁 종합 |
| **전신이 영리 웰니스 사업이다** | 레스큐가 새 법인으로 태어난 게 아니라 **대표의 최면치료·리키 사업체(LLC)가 그대로 비영리로 전환**됐다. 그래서 법인명이 지금도 웰니스 사업명이고, **Square 예약 페이지에 레스큐 서비스와 웰니스·예술 서비스가 한 계정에 섞여 있다**(2절·4절) | PA DOS 문서, Square(프록시) |
| 성격 | **100% 포스터 기반 고양이 전용 레스큐.** 정관 요약 미션 원문: *"KitUmbra Rescue Cats is a foster-based rescue working toward a healthier, safer future for both community and companion cats and the community at large."* | 정관 PDF |
| 시설 | **물리적 보호소 없음.** Square 예약 안내문이 이를 직접 드러낸다 — *"Not all visits take place in Dallastown, some will be at other foster homes."* | Square(프록시) |
| 취급 종 | **고양이 전용.** 단 대표 개인 부업(펫 초상화)은 *"DOGS also available!"* | Adopt-a-Pet(프록시), Square(프록시) |
| 사업 영역 (4개) | ①구조·재활·사회화·입양 ②**모든 개체 중성화·백신·마이크로칩** ③**커뮤니티 TNVR 조직·감독·모금** ④저비용 백신·마이크로칩·구충 제공과 시민 교육(책임 있는 고양이 사육, 홀리스틱 행동 훈련) | Adopt-a-Pet(프록시), 정관 PDF |
| **차별화 자기 규정** | 정관이 자기 자리를 **"다른 단체가 못 받는 케이스를 받는 곳"** 으로 정의한다 — 원문: *"To partner with and relieve local TNR organizations who find themselves overwhelmed with time-consuming young felines found during TNR efforts"*, 그리고 *"like motherless neonates, mothers with neonates, or kits and cats past the age of prime socialization"* | 정관 PDF |
| **서비스 권역 (2개 주)** | 자기 표기 그대로: **"York, Cumberland, Manchester & Adams Counties, PA"** + **"Baltimore, Harford, and Carroll Counties, MD"**. **Manchester 는 PA 의 카운티가 아니라 York County 내 자치구다** — 자기 기재 권역이 행정 단위로 정확하지 않다 | Adopt-a-Pet(프록시) |
| **이사회 정원** | **5~9인**, 홀수 선호(정관 원문 *"no less than 5 and no more than 9 directors at all times. Preferred odd number to ease majority vote"*). **현재 실제 인원과 명단은 어디에도 공개돼 있지 않다** | 정관 PDF |
| **정관상 임원 8직** | President / Vice President / Secretary / Treasurer / **Fundraising Chair** / **Veterinary Advisor** / **Marketing Chair** / **Foster Manager**(직무 기술에서는 Foster Chair). 별도로 **Committee Chair** 직무도 규정돼 있다. **한 사람이 복수 역할 겸임 가능**(원문 *"Any one director may fill more than one role at a time... One director serving 2 roles is only to cast 1 vote"*) | 정관 PDF |
| **Executive Director** | **Kimber Bowers.** 정관이 실명으로 지정. 조직의 얼굴이자 전반 운영 책임자이되 **일반 의결권 없음**. 추가 직무로 *"Assists with intake policies, veterinary scheduling, and foster assignment"*, *"Provides role-specific director training"*, *"Currently takes responsibility for managing email"*, **"Will assist in fulfillment of responsibilities for any roles not currently assigned"** | 정관 PDF |
| **승계 지정** | 원문: *"During times of illness due to disability, responsibility of this role will fall on Wren (Ciara) Bowers until transfer of organization ownership may occur."* **Ciara G Bowers 는 2024년 가명등록의 공동 대리인**이기도 하다 | 정관 PDF, PA DOS 문서 |
| 유급 직원 | **0명.** 정관상 이사·포스터 모두 자원봉사이며 잉여금이 있을 때만 보상 가능(2절) | 정관 PDF |
| 회원 제도 | **일반 회원 없음.** 재정 후원자는 "Donor", 봉사자는 "Volunteer". **다만 「Foster Home Member」는 별도 신분**이고 배경조사와 이사회 과반 승인을 거쳐 등록되며, **1년 활동 후 포스터 정책 사안에 대한 의결권을 얻는다** | 정관 PDF |
| **포스터 가구 수** | **미확인.** 공개 자료에 수치가 전혀 없고 **리드 폼의 `fosters` 항목도 공란**이다 | — |
| 연락 창구 | **`k***@gmail.com` 단 하나** + 대표 번호 **410-241-2635**. 정관이 이 gmail 주소를 **사전지출승인·이사 지명·사임 통지·부재자 투표·정관 개정 제안**의 공식 접수처로 지정한다. **역할별 메일함이 없고, 그 메일함 관리 책임자도 ED 본인**이다 | 정관 PDF, Adopt-a-Pet(프록시) |
| 웹 자산 | **자체 사이트 없음.** 「웹사이트」 자리에 **Bitly link-in-bio 페이지**(`bit.ly/m/KitUmbra`)가 들어가 있고 링크 7개로 구성 — Adoptable Cats / ByLaws / Holistic Service & Cat Visit Booking / Donate Now! / Apply To Adopt / Apply To Foster / Urgent Needs. **Zeffy 조직 페이지는 "Our website" 로 Adopt-a-Pet 조직 페이지 URL 을 등록해 두었다** | Bitly(프록시), Zeffy(프록시) |
| 소셜 채널 (4개) | Instagram **@kitumbra** / TikTok **@kitumbra_rescue.cats** / Threads **@accidentalcatladee** / Facebook 페이지 1개 | Bitly(프록시) |
| 소셜 규모 | **TikTok 팔로워 1,458명 · 좋아요 37.3K · 팔로잉 1,679명**(2026-08-31 조회). 프로필 소개는 *"501(c)(3) Charity York PA centered rescue"*. **Instagram·Threads·Facebook 은 로그인 게이트로 미확인** | TikTok(프록시) |
| **투명성 수준** | **정관 전문(26쪽)과 PA 주정부 등록서류·IRS 결정통지서를 하나의 PDF 로 묶어 링크-인-바이오에 공개**해 두었다. **이 규모의 레스큐에서는 드문 수준**이며, 이 조사에서 확인된 지배구조·조달 정보의 대부분이 여기서 나왔다 | Dropbox 정관 PDF |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **12월 결산**(정관 원문 *"The fiscal year of the organization shall be from Jan 1st to Dec 31st."*). 콜 시점(2026-09-07)은 **FY2026 9개월 차**, **FY2027 편성기 직전** | 정관 PDF |
| **990 신고 이력** | **0건.** ProPublica 에 재무 데이터가 있는 신고도, 없는 신고도 등재돼 있지 않다. IRS BMF 의 자산·수입·수익 값이 전부 **0**(= 미신고) | ProPublica API |
| **신고 요건** | IRS BMF **신고요건 코드 2** — 통상 **990-N(전자엽서)** 대상 구간을 뜻한다. 결정통지서 자체는 *"Form 990/990-EZ/990-N required: Yes"* 로 일반 문구만 적혀 있다. → **재무가 항목 단위로 공개되는 서식 자체가 없을 가능성이 높다** (**추론**, 코드 해석은 IRS BMF 표준 정의 기준) | ProPublica API, IRS 결정통지서 |
| **연간 운영 모금 목표** | **$5,000** — Zeffy `Cat Care Fund 2026`. **2026-08-31 기준 $1,025 모금(21%)**. 최근 기부는 26일 전 $100 | Zeffy(프록시) |
| **캠페인별 달성률 (전수)** | **Cat Care Fund 2026** $1,025 / $5,000 (**21%**, 진행 중) / **Hoagies for Hope** $116 / $1,000 (**12%**, 판매 종료) / **Serenita's Dental Fund** $300 / $1,181 (**25%**, 종료, 기부자 4인) / **Calico Amputation** $220 / $490 (**45%**, 진행 중). → **네 캠페인 모두 목표의 절반을 넘지 못했다** | Zeffy(프록시) |
| **개체 단위 의료 모금** | 캠페인이 **개체 이름으로 열린다** — Serenita(치과, 원문 *"to prevent infection and keep her diabetes in check"*), Calico(절단 수술). **한 마리의 의료비가 곧 하나의 모금 캠페인**이다 | Zeffy(프록시) |
| **입양비 (3단)** | **Standard $125** / **Discounted $100**("Pre approved discounted rate for specific cats only") / **Discounted $75**(동일 문구). **개체별로 어느 단가인지 사전 승인된다** | Zeffy(프록시) |
| **레스큐 서비스 수입** | Square 예약 기준 — **FVRCP 백신(Nobivac) $15** / **마이크로칩 $15** / **구충 $10** / **행동 훈련 상담 $10**. 무료 항목: **Kit Cat Visit**(1시간), **Kit Cat Consult**(15분), **TNVR Advice**(45분) | Square(프록시) |
| **웰니스·예술 수입 (동일 계정)** | **Custom Hypnotherapy MP3 $80** / **Virtual Toe Reading $65** / **Custom Pet Acrylic $65** / **Custom Pet Water Color $55** / **Digital Pet Cartoon $40** / **Distant Reiki $35** / **Custom Watercolor Small $35** / **Custom Memorial Ash Painting**(가변, $65~) / **Ministerial Services**(가변, 기부 권장). **레스큐 예약 페이지와 같은 Square 계정·같은 목록에 있다** | Square(프록시) |
| 모금 이벤트 | **KitUmbra Raffle July 2026**(7/10~7/15, 티켓 $2/$6/$9/$12/$20, 경품 $35~$75) / **Hoagies for Hope**(7/26~8/12 주문, 8/15 픽업, 호기 $8·프레첼 샌드위치 $6, Sue's Market 공급, 픽업지 4곳) | Zeffy(프록시) |
| **결제 경로 (6종)** | **Zeffy**(모금·입양비·이벤트) / **PayPal**(버튼 2개 — Adopt-a-Pet 등재분과 link-in-bio 분이 서로 다른 버튼 ID다) / **Square**(카드·CashApp·Apple Pay·Google Pay) / **Venmo** / **현금·현장 태그 결제** / **Amazon 위시리스트**(물품). **입양비 수납만 해도 Adopt-a-Pet 안내상 "Cash or tap to pay onsite. Paypal or Venmo also accepted." 이고 Zeffy 폼이 별도로 있다** | Zeffy·Square·Adopt-a-Pet(프록시), Bitly(프록시) |
| 정부 재원 | **흔적 없음.** 보조금·시 위탁 계약 기재가 어디에도 없다 | 정관 PDF, ProPublica |
| 그랜트 | **흔적 없음.** 다만 정관에 **Fundraising Chair** 직이 규정돼 있고, 이해상충 조항이 *"serving on the staff of a philanthropic foundation from which the organization receives or intends to solicit funds"* 를 상정한다 — **재단 모금을 염두에 둔 문서**다 | 정관 PDF |
| 이사 보상 | **원칙 무보수.** 예외 요건이 촘촘하다 — 이해당사자를 제외한 이사회 과반 승인, **주 20시간 이상을 6주 연속 문서로 입증**, 시장 임률 조사, **시급 상한 $25**, 예산 범위 내, 이해상충 정책 준수, 회의록 기재 | 정관 PDF |
| **포스터 보상** | **연 상한 $100.** 지급 조건이 매우 후순위다 — 당해 청구 정산, 익년 백신 구매, **전년 취급 두수의 최소 절반을 돌볼 초기 자금 적립**, 이사 보상까지 모두 끝난 뒤 **남는 돈이 있을 때만** 활동 1년 이상 포스터에게 **균등 분배** | 정관 PDF |
| 감사 | **연 1회 독립 제3자에 의한 감사 또는 재무 검토**를 정관이 요구한다. 실제 수행 여부는 **미확인** | 정관 PDF |
| 시사점 | **연 운영 모금 목표가 $5,000 인 조직이다. 유료 구독 제안의 절대 여력이 극히 얇다.** 동시에 스택 전체가 무료 도구이므로 **"기능이 더 좋은가"가 아니라 "돈을 내는 첫 도구가 될 수 있는가"가 관문**이다. 다만 입양비가 $75~$125 이므로 **입양 1건당 단가로 환산하는 화법**은 이 조직의 회계 감각과 맞는다 | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **현재 입양 가능 두수** | **26마리** | Adopt-a-Pet 조직 페이지 표기 *"1 - 9 of 26 pets available"*, 전체 목록 교차 확인 결과 리스팅 26건(2026-08-31 조회). **다른 입양 플랫폼 등재가 확인되지 않아 채널 간 불일치 검증은 불가**(4절) |
| **연령 분포 — 압도적 자묘 편중** | **26마리 중 22마리(85%)가 만 1세 이하** | 실측 분포(26마리 전수): **만 1세 미만 12마리**(4개월 6 / 5개월 4 / 7개월 1 / 10개월 1), **만 1세 10마리, 2세 1마리, 3세 3마리**. **최고령이 3세이고 시니어가 0마리다.** 정관이 자기 역할을 "다른 단체가 못 받는 어린 개체를 받는 곳"으로 규정한 것과 일치한다 |
| **본디드 페어** | **3건 표기** | Adopt-a-Pet 리스팅의 "Bonded Pair" 배지 기준. **함께 나가야 하는 조합이 개체 기록 밖에서 관리된다** |
| **연 입양 건수** | **미확인 — 폼 자기보고 "50–150" 외에 근거가 전혀 없다** | Adopt-a-Pet 에 "See Adopted Pets" 영역이 있으나 클라이언트 렌더링이라 자동 열람으로 건수를 얻지 못했다. 990 신고가 없어 재무 역산도 불가능하다. **한편 조직 나이가 13개월이고 연 운영 모금 목표가 $5,000 이므로 "50–150"은 단위 확인이 필요하다**(핵심 5줄 3번) |
| **연간 인테이크 수** | **미확인** | 어떤 공개 자료에도 없다 |
| **라이브릴리스율** | **미확인** | Shelter Animals Count 등재 확인되지 않음 |
| **포스터 가구 수** | **미확인** | 공개 자료에 없고 리드 폼 `fosters` 항목도 공란 |
| **TNVR 실적** | **미확인** | 사업 영역으로 명시돼 있으나 수치가 없다 |
| 저비용 클리닉 실적 | **미확인** | 백신 $15·마이크로칩 $15·구충 $10 로 시민에게 제공한다는 사실만 확인 |
| **개체 상태 값** | **공개 자료로는 확인 불가** | 개체 프로필이 Adopt-a-Pet 에만 있어 조직 내부 상태 구분(입양 대기·의료 보류·공개 전 등)을 알 수 없다 |
| **입양 판정 기준** | **선착순에 가깝다** | 입양 신청서 안내문 원문: **"All applications will be equally considered with timeliness as the major factor."** 조건 심사가 아니라 **도착 순서가 주된 변수**임을 조직이 명시했다 |
| 입양 절차 (5단계) | ①Google Form 신청 → **"You will receive both email & text notification when it has been processed."** ②입양 계약 서명(**신청서에 포함**) ③이메일·문자로 방문 조율 ④결제 ⑤인계 | Adopt-a-Pet(프록시) |
| 신청서 확인 항목 | 이메일 / **"Which animal"**(희망 개체, **"check the album"** 안내) / **"Where did you hear aout us"**(원문 오탈자 그대로, 선택지 Facebook·TikTok·Instagram·Next Door·Adopt A Pet·기타) / 성명 / 전화 / **"Preferred Pronoun"** / 주소 / **운전면허·주 ID 번호** / **"2 character references"**. **총 4페이지** | Google Form 원문 |
| 포스터 신청서 | 거주 형태·추천인·임대차·동거인·기존 반려동물·**케어 경험 체크박스**(확인된 항목: **"Bottle Feeding"**, **"Fading Kitten Syndrome"**, **"Semi-feral"**, **"Quarantine"**, 수술 관련) / 희望 연령대 / **동시 수용 가능 두수** / 격리 공간 / 투약 가능 여부 / 병원 이송 가능 여부 / 홈비짓 수용 / 사진 공유 / 물품 대여 필요 항목. **선택지 전체 목록은 자동 요약기 값이 원문과 어긋나 채택하지 않았다** | Google Form 원문 |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW** | **자체 도입 흔적 없음.** 조직이 공개한 전 채널(Bitly 링크 7개 전량, Adopt-a-Pet 조직 페이지, Zeffy 조직·캠페인 페이지 6개, Square 예약 페이지, Google Form 2종, 정관 PDF 26쪽)을 열람했으나 **ShelterLuv·Petstablished·Pawlytics·Chameleon·PetPoint·RescueGroups·Animal Shelter Manager 계정이 하나도 없다** | 전 채널 열람 |
| **⚠ ShelterLuv 문자열 1건 — 오독 주의** | 정관 Article I 에 **"as seen in attached receipts of expenses paid to Shelter Luv & Shadow Cats"** 라는 문장이 있다. **그러나 맥락은 「다른 공익법인을 지원한 증빙」**이며 같은 문단이 파트너로 **Shadow Cats TNR**·**Precious Paws Community Cats** 를 든다. 확인해 보니 **Shadow Cats TNR(Abingdon, MD — KitUmbra 의 MD 권역인 Harford County)이 자기 저비용 중성화 접수를 `new.shelterluv.com` 폼으로 받고 있다.** → **KitUmbra 가 파트너 단체의 ShelterLuv 폼을 통해 수술비를 결제했고 그 영수증에 ShelterLuv 가 찍힌 것**으로 읽는 편이 정합하다. **즉 자기 도구가 아니라 남의 도구를 결제자로서 스쳐 본 것** (**추론**, 콜에서 반드시 확인 — 만약 실제 구독이라면 우리 제안의 자리가 통째로 바뀐다) | 정관 PDF, ShelterLuv 폼 원문(프록시) |
| **실제 시스템 = Google Forms** | 입양 신청과 포스터 신청이 **둘 다 Google Form** 이다(입양 `1FAIpQLScr8J3k…` 4페이지, 포스터 `1FAIpQLSdIiJgl…`). **입양 계약도 이 폼 안에 포함**된다(Adopt-a-Pet 안내 *"Sign Adoption Contract — It is included in the application"*). → **폼 응답의 저장소는 Google Sheets 이고, 폼의 "Spreadsheets" 자기보고는 여기서 나온 것**이다 | Google Form 원문, Adopt-a-Pet(프록시) |
| **정관이 도구를 명시한다 — 채용 공고 대체 자료** | 유급 직원이 0명이라 채용 공고가 없지만, **정관의 임원 자격 요건이 도구명을 직접 박아 놓았다.** **Marketing Chair**: *"Must have relevant marketing experience, be competent in Adobe, Krita, Google Docs & Forms, and Canva"* / **Foster Chair**: *"Must have experience managing schedules and documenting information. Competent with Word, Google Calendar, and Adobe."* / **Secretary**: *"Should have secretarial or data entry experience of any kind."* → **조직이 스스로 규정한 운영 도구는 Google Docs·Forms·Calendar, Word, Adobe/Krita/Canva 다. 쉘터 도메인 도구는 한 개도 없다** | 정관 PDF |
| **개체 기록의 실제 위치** | **Adopt-a-Pet 리스팅이 사실상 유일한 개체 카탈로그**다. Zeffy 조직 페이지의 "Our website" 가 Adopt-a-Pet 조직 페이지 URL 이고, Bitly 의 "Adoptable Cats" 링크도 같은 곳으로 간다. 입양 신청 폼도 지원자에게 그 목록을 보고 이름을 적으라고 안내한다. → **입양 마케팅 채널이 개체 정본 노릇을 하고 있다** | Zeffy·Bitly·Google Form(프록시·원문) |
| **예약·결제 = Square Appointments** | 별도 Square 사이트(`kitumbra-rescue-cats.square.site`)와 예약 페이지가 운영된다. **레스큐 서비스(백신·칩·구충·행동상담·고양이 방문)와 대표 개인의 웰니스·예술 서비스(리키·최면·토우 리딩·목회·초상화)가 한 목록에 섞여 있다** | Square(프록시) |
| **모금·수납 = Zeffy** | 조직 페이지 1개, 상시 모금 폼 2개(Cat Care Fund·Calico Amputation), 종료 캠페인 1개(Serenita's Dental Fund), 이벤트 2개(Raffle·Hoagies), **입양비 수납 폼 1개**. 뉴스레터 구독 폼도 Zeffy | Zeffy(프록시) |
| **링크 관리 = Bitly** | 단축 링크 7개(`KitUmbraCats`·`ByLawsKRC`·`KitUmbraDonate`·`KitumbraAdopt`·`KitUmbraFoster`·`UrgentSupplies` + link-in-bio). **홈페이지 자리를 Bitly 페이지가 대신한다** | Bitly(프록시) |
| **문서 배포 = Dropbox** | 정관·주정부 등록서류·IRS 결정통지서를 묶은 PDF 1개(`LLKCRByLaws-1.pdf`) | Dropbox |
| 자원봉사·포스터 관리 도구 | **없다.** Volgistics·Better Impact·SignUpGenius 흔적 없음. 정관이 규정한 포스터 통지 수단은 **"both email and text"** 뿐이다 | 전 채널 열람, 정관 PDF |
| 도너 CRM | **없다.** Bloomerang·Little Green Light·Donorbox·Givebutter·Classy 흔적 없음. **기부자 명단은 Zeffy 안에만 있다** | 전 채널 열람 |
| 입양 플랫폼 | **Adopt-a-Pet(보호소 번호 272718)** 단일. **Petfinder 조직 페이지는 확인되지 않았다.** 별도로 **PetSmart Charities** 사이트에 개체가 신디케이션돼 노출된다(조직 정보·연락처가 그대로 실린다) | Adopt-a-Pet(프록시), PetSmart Charities |
| 웹 분석 | **확인 불가.** 자체 사이트가 없어 분석 스크립트를 심을 자리 자체가 없다 | — |
| **채용 공고** | **없다.** 유급 직원 0명 조직이라 존재하지 않는다. **대신 정관의 임원 자격 요건이 그 역할을 한다**(위 항목) | 검색, 정관 PDF |
| **종합 판정** | **경쟁 도구를 쓰다 불만이 생긴 리드가 아니다. 도구를 한 번도 안 써 본 조직이 무료 SaaS 6~7개를 이어 붙여 운영 체계를 만든 리드다.** 특징은 두 가지다 — ①**제도 문서는 대기업 수준으로 촘촘한데**(26쪽 정관, 이해상충 정책, 감사 조항, 보상 상한) ②**그 제도를 굴릴 데이터 레이어가 통째로 비어 있다.** 정관은 "현재 포스터 배치 전원과 개체별 수의 일정을 추적하라"고 명령하지만, 그 명령을 담을 시스템은 Google Calendar 와 Word 다. **문서와 도구의 격차가 이 조직의 통증 지점**이다 | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인** | **콜 상대는 결재자가 아니다 — 정관이 그렇게 설계했다.** ED 인 Kimber Bowers 는 *"Does not have a regular vote in matters addressed by board other than appointment of President"* 이고, 가부동수 시에만 캐스팅보트를 던진다. **의결 주체는 이사회(5~9인, 1인 1표, 과반)** 다. 다만 실질은 다르게 읽힌다 — 정관이 ED 에게 **미배정 역할 전부의 대행**, **공식 메일함 관리**, **인테이크 정책·수의 일정·포스터 배정 보조**를 지웠고, 이사 명단은 공개돼 있지 않다 |
| **의결 소요 시간 (핵심)** | 회의는 **60일 전 통지**, 안건·정책·표결 항목은 **21일 전 배포**가 요건이다. 긴급은 President 또는 Veterinary Advisor 가 선포할 때만 **48시간 통지·12시간 안건**으로 줄어든다. 정족수 미달 시 **60일 통지 규칙대로 재소집**한다. → **9/7 콜 건을 정식 안건으로 올리면 산술적으로 11월 이후다** |
| 정기 회의 | **연 1회 이상.** 연례회의에서 **정책·예산·보상**을 함께 검토하며 **가상 회의**가 원칙(전화 참여 허용). 대면 회의도 반드시 가상·전화·서면 참여 경로를 함께 열어야 한다 |
| 부재자 투표 | 이메일로 **회의 15분 전까지** 제출, 제목 "Absentee Vote", 접수처는 조직 gmail |
| **전결 한도** | **금액 기준 전결 한도는 규정돼 있지 않다.** 정관이 규정한 유일한 사전승인 절차는 **포스터 케어 관련 지출**이다 — *"Requests for prior authorization for health and well being services should be submitted to the President for review with the Treasurer"*, 제목 "Prior Authorization request". → **의료비는 President+Treasurer 2인 검토 라인이 있고, 소프트웨어 같은 운영비는 절차가 비어 있다** (**추론**, 직접 확인 필요) |
| **예산 사이클** | **12월 결산.** 정관이 **연말 잉여금을 남기지 못하게** 한다 — 익년 준비 구매, 이사·포스터 보상, 또는 **1월 30일까지 파트너 TNR 단체에 기부**로 소진. → **연중 여유 자금으로 신규 구독을 시작하는 그림이 성립하지 않는다. FY2027 예산에 항목으로 서야 한다** |
| **지불 여력** | **연간 운영 모금 목표 $5,000, 현재 21% 달성.** 990 신고 이력이 없어 총수입 실측치는 없다. **월 구독 제안의 절대 여력이 매우 얇다** |
| **비용 감각** | **스택 전체가 무료 도구다**(Google Forms·Zeffy·Bitly·Adopt-a-Pet·Amazon 위시리스트). 유료는 Square 결제 수수료와 Dropbox 정도이며 **둘 다 무료 티어로 운영 가능한 범위**다. 게다가 Zeffy 는 "수수료 0"을 전면에 내세우는 플랫폼이다. → **가격 협상 이전에 「유료 소프트웨어를 쓴다」는 관문 자체를 넘은 적이 없는 조직** (**추론**) |
| IT 의사결정 | **Marketing Chair** 가 정관상 도구 역량 보유자로 규정돼 있으나(**Adobe·Krita·Google Docs & Forms·Canva**) **현재 그 자리에 누가 있는지 미확인**. **Foster Chair**(Word·Google Calendar·Adobe)도 마찬가지다. **두 자리가 실제로 채워져 있는지가 도입 논의의 전제** |
| 실무 병목 | **모든 공식 절차의 접수처가 gmail 한 곳이다** — 사전지출승인, 이사 지명, 임원 사임, 부재자 투표, 정관 개정 제안, 입양·포스터 문의, 기부 문의가 전부 같은 메일함으로 들어오고 **그 메일함 관리 책임자가 ED 본인**이다 |
| 2차 콜 후보 | **Treasurer**(재무·세무 신고 담당, 정관상 "PA 주 재무 실무 2년 이상" 요건) / **Foster Chair**(포스터 배치·수의 일정 실무자, 우리 제품의 실사용자) / **Wren(Ciara) Bowers**(ED 승계 지정자·가족) |

## 6. Kimber Bowers 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| 직책 | **Executive Director**(정관 실명 지정) 겸 **창업자**. 법적 명의는 **Kimberly Anne Bowers** | 정관 PDF, PA DOS 문서 |
| 폼 응답 정합 | 폼의 "Executive director or founder"는 **둘 다 해당**한다 — 2016년 LLC 를 세웠고 2024~2025년 그 법인을 레스큐 비영리로 전환한 당사자다 | PA DOS 문서 |
| **본업 — 홀리스틱 웰니스** | **Certified Clinical Hypnotherapist, Reiki Master, 코치, 서품 목사(Rev.)**. 2016년부터 Loving Light Holistic Wellness LLC 를 운영했고 **그 법인이 그대로 지금의 레스큐 법인**이다. 현재도 Square 에서 최면치료 MP3($80)·원격 리키($35)·토우 리딩($65)·목회 서비스를 판매한다 | Square(프록시), PA DOS 문서 |
| 작가 활동 | 저서 *Awaken Your Joy*, *Healing Together*, 공저 *Goodness Abounds* | Goodreads·Amazon 저자 페이지 |
| **장애 당사자** | 조직 자기소개 원문: **"We are a disabled and family owned business started by a hopeless creative & compassionate soul who accidentally fell into cat rescue and decided to stay here."** 정관도 **"During times of illness due to disability"** 상황을 명시적으로 규정하고 승계자를 지정해 두었다 | Adopt-a-Pet(프록시), 정관 PDF |
| 가족 관여 | **Ciara G Bowers**(정관 표기 **Wren**) — 2024년 가명등록 공동 대리인, ED 부재 시 직무 승계자 | PA DOS 문서, 정관 PDF |
| 지리적 배경 | 서비스 권역에 **Baltimore·Harford·Carroll County, MD** 가 포함되고 조직 대표 번호도 **410 국번(볼티모어권)** 이다. 파트너 단체 Shadow Cats TNR 도 Harford County MD 소재다. → **PA 남부와 MD 북부를 하나의 생활권으로 다루는 사람** | Adopt-a-Pet(프록시), 검색 |
| **화법 — 두 개의 목소리** | **①대외 소개문은 이모지·구어체·자기희화**(*"It's what happens when the neighborhood labels you 'cat lady' and you answer the call😂"*) **②지배구조 문서는 26쪽 규모의 정식 정관**(이해상충 정책, 감사 조항, 시급 상한, 정족수, 부재자 투표까지). **제도를 스스로 설계해 문서로 만든 사람**이며, 동시에 그 제도를 **혼자 굴리고 있을 가능성이 높다** | Adopt-a-Pet(프록시), 정관 PDF |
| **성향 판정** | ①현장 유입(자칭 "우연히 고양이 구조에 발을 들였다") ②치유·예술 직업군 ③그런데 정관은 이례적으로 촘촘하다. → **기능 나열·대시보드·효율 화법보다 「이 고양이, 이 집, 이 접종 회차」 같은 개체 단위 구체어에 반응**하되, **제도·절차 언어도 그대로 알아듣는 드문 상대**로 읽는다. 정관 문장을 그대로 인용해 들어가면 설명이 필요 없다 (**추론**, 직접 인용 가능한 인터뷰 발언이 없어 검증도가 낮다 — 콜 초반에 화법을 관찰해 조정할 것) | 추론 |
| **대명사 — 반드시 지킬 것** | **본인이 밝힌 대명사가 확인되지 않았다. 콜 전까지 단정하지 말 것.** 특히 이 조직은 **입양 신청서·포스터 신청서·기부 폼 세 곳 모두에서 "Preferred Pronoun" 을 묻는다**(입양 폼은 필수 항목). **상대는 이 사안에 민감하며, 우리 쪽 호칭 실수가 바로 신뢰 손실로 이어질 수 있는 자리다** | Google Form 원문, Zeffy(프록시) |
| 경력·학력 상세 | **미확인.** LinkedIn 개인 프로필이 검색되지 않는다 | 검색 |
| 언론 노출 | **없다.** 지역 언론 인용·인터뷰가 검색되지 않는다. **인용할 발언은 조직 자기소개문·정관·Square 서비스 설명문뿐이다** | 검색 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2024-07-17** | **가명 "KitUmbra Rescue Cats" 등록** — 레스큐 브랜드의 공식 출발점 | PA DOS 문서 |
| **2025-02-26** | **LLC → 비영리법인 전환.** 같은 날 **이해상충 정책을 이사회가 의결**했다 — **이사회가 이 시점에 실재했다는 뜻** | PA DOS 문서, 정관 PDF |
| 2025-09-19 | Square 사이트 로고 이미지 업로드 시점(파일 타임스탬프 기준). **예약·결제 채널 정비 시기로 읽힌다** (**추론**) | Square |
| **2025-09-26 / 09-27** | 정관 개정(501(c)(3) 목적조항 정비) 이사회 의결 및 주정부 접수. 서명 **"Kimber Bowers, Executive Director"** | PA DOS 문서 |
| **2025-10-07** | **IRS 501(c)(3) 결정통지 수령**(면세 발효일 2025-02-26 소급). **콜 시점 기준 11개월 차** | IRS 결정통지서 |
| **2026-03경** | **Serenita's Dental Fund** 캠페인 — 당뇨 관리 중인 개체의 치과 치료비. **$300 / $1,181(25%)로 종료**, 기부자 4인 | Zeffy(프록시) |
| **2026-07-10 ~ 07-15** | **KitUmbra Raffle July 2026.** 7/11 에 **York 시내 Vibrissae groomers(N King St)에서 입양 행사**를 열고 경품을 현장 전시. 경품 수령은 7/16~17 Dallastown | Zeffy(프록시) |
| **2026-07-26 ~ 08-12** | **Hoagies for Hope**(Sue's Market 공급, 호기 $8·프레첼 샌드위치 $6). **8/15 에 Wrightsville·Windsor·East York·York City 4곳에서 픽업.** 결과 **$116 / $1,000(12%)** | Zeffy(프록시) |
| **진행 중** | **Calico Amputation** 모금 $220 / $490. **한 마리의 절단 수술 비용을 지금 모으고 있다** | Zeffy(프록시) |
| **진행 중** | **Cat Care Fund 2026** $1,025 / $5,000(21%). 최근 기부 26일 전 | Zeffy(프록시) |
| **2026-08-31** | **본 리드 유입**(소재 A, 미팅 2026-09-07 예약). **이메일 도메인 오기 상태로 접수됨**(조직 특정 절 참조) | 리드 원본 |
| **부정적 사건** | **소송·행정처분·동물 압류·자금 논란·언론 부정 보도 전부 검색되지 않았다.** 애초에 **이 조직에 대한 언론 보도 자체가 확인되지 않는다** | 검색 |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

정황에서 끌어낸 것만 적는다. 각 줄에 확인 필요 여부를 밝힌다.

- **정관이 "포스터 배치 전원과 개체별 수의 일정을 추적하라"고 직무로 명령해 두었고, 그 일을 할 도구로 Google Calendar 와 Word 를 지정했다.** 원문: *"Keeps track of all current foster placement and all individual feline veterinary schedules. Schedules vaccination and neuter/spay appointments as well as antiparasitic treatments and foster supply pick-up."* / 자격 요건 *"Competent with Word, Google Calendar, and Adobe."* → **우리가 팔려는 기능이 조직 문서에 사람 직무로 적혀 있다. 이 자리가 지금 채워져 있는지, 안 채워졌다면 ED 가 대행 중인지(정관상 미배정 역할은 ED 대행)가 콜의 중심.**
- **건강기록 보관자와 일정 관리자가 서로 다른 사람으로 규정돼 있다.** Secretary 직무가 *"Maintains feline health records."* 이고 Foster Chair 가 수의 일정을 잡는다. → **한 마리의 의료 정보가 조직 설계상 이미 두 사람에게 갈라져 있다. 실제로 어떻게 합쳐지는지 확인 필요.**
- **개체 26마리 중 22마리가 만 1세 이하다. 이 연령대는 접종 회차 추적이 필수 업무다.** 조직 스스로 공지한 프로토콜: *"All kittens indoor or outdoor should get a series of 3 of this vaccine by 16 weeks old. At one year there is a required booster. It is needed every 3 years after that."* → **"지금 몇 번째 접종이 언제인 아이가 몇 마리인가"를 조회할 자리가 공개 스택 어디에도 없다. 확인 필요.**
- **고양이를 보러 가는 사람이 어느 집으로 갈지 매번 사람이 매칭한다.** Square 예약 안내 원문: *"Not all visits take place in Dallastown, some will be at other foster homes. Please be prepared with names of cats you want to meet."* → **예약 시스템은 시간만 잡고 장소는 사람 머릿속에 있다. 방문 1건마다 배치 조회가 발생한다.**
- **입양비가 개체별로 다르고 그 판정이 "사전 승인"으로 시스템 밖에 있다.** Zeffy 폼 원문: **"Pre approved discounted rate for specific cats only"**($100·$75). → **어느 고양이가 어느 단가인지 아는 사람이 따로 있다. 어디에 적혀 있는지 확인 필요.**
- **입양 판정 기준이 도착 순서다.** 신청서 원문: **"All applications will be equally considered with timeliness as the major factor."** → **Google Form 응답 시트의 타임스탬프가 사실상 판정 근거다. 인기 개체에 신청이 몰릴 때 누가 언제 무엇을 보고 자르는지 확인 필요.**
- **신청 처리 결과를 이메일과 문자로 각각 보낸다.** Adopt-a-Pet 안내 원문: **"You will receive both email & text notification when it has been processed."** → **1건당 2회 발송이고 자동화 흔적이 없다. 26마리 규모에서 이미 수기 부하다. 확인 필요.**
- **정관이 포스터 통지 의무를 시간 단위로 못 박아 두었다.** 투표 안건은 **60일 전 이메일+문자**, 활성 자격 소멸은 **30일 전 이메일+문자**, 물품 픽업은 **최소 7일 전 이메일+문자**. → **각 포스터의 「마지막 활동일」을 알아야 30일 전 통지가 가능하다. 활성 상태 소멸 기준은 "10개월 무활동"(정관)인데, 이 시계를 무엇으로 재는지가 완전히 비어 있다. 확인 필요.**
- **포스터 자격 관리에 만 1년 시점 이벤트가 두 개 걸려 있다.** ①포스터 정책 의결권 취득(활동 1년, **훈련 개시일 기준**) ②보상 자격(활동 1년) → **가입일이 아니라 훈련 개시일을 개인별로 보관해야 한다. 어디에 있는지 확인 필요.**
- **모금이 개체 단위로 열린다.** Serenita(치과·당뇨), Calico(절단 수술)처럼 **한 마리의 의료 사건이 곧 하나의 캠페인**이다. → **의료 이벤트 → 모금 캠페인 → 치료 → 결과 보고가 사람 손으로 이어지고 있고, 그 사이 개체 상태 변화가 Adopt-a-Pet 리스팅과 별개로 흐른다. 확인 필요.**
- **수납 경로가 6개로 흩어져 있다.** Zeffy·PayPal(버튼 2개)·Square·Venmo·현금·Amazon. **입양비 하나만 해도 현장 태그 결제, PayPal, Venmo, Zeffy 폼 네 갈래**다. → **"이 고양이가 얼마에 나갔는지"를 한 곳에서 볼 수 없다. 확인 필요.**
- **PayPal 기부 버튼이 채널별로 다르다.** Adopt-a-Pet 등재 버튼과 link-in-bio 버튼의 hosted_button_id 가 서로 다르다. → **채널을 늘릴 때마다 결제 링크가 하나씩 늘어나는 구조** (**추론**, 의도적 분리인지 갱신 누락인지 확인 필요).
- **본부 인박스가 gmail 하나이고, 그 하나가 지배구조 접수창구까지 겸한다.** 사전지출승인·이사 지명·사임·부재자 투표·정관 개정 제안이 입양 문의·기부 문의와 같은 함으로 들어온다(5절). → **역할별 메일함이 없다.**
- **입양 신청서에 개체 이름을 자유 입력으로 받는다.** 원문 **"Which animal"** 문항이 목록 참조 안내와 함께 텍스트로 들어온다. → **표기 흔들림이 발생하고, 신청서와 리스팅을 사람이 대조한다** (**추론**, 확인 필요).
- **입양 계약이 신청 폼 안에 들어 있다.** 즉 **아직 승인되지 않은 지원자도 계약 조항에 동의한 상태로 접수**된다. → **승인 전후 상태 구분이 폼 하나 안에 뭉쳐 있다. 확인 필요.**
- **조직이 스스로 정한 감사 의무가 있다.** 정관: *"An annual audit or financial review shall be conducted by an independent party."* → **연 1회 외부에 내보일 재무·활동 기록을 만들어야 하는 조직**이고, 그 원자료가 지금 6개 결제 채널과 Google Sheets 에 흩어져 있다 (**추론**, 실제 감사 수행 여부 확인 필요).

## 미확인 요약 (콜에서 확인할 것)

1. **우리 예약 확인 메일이 도달했는가** — 리드 도메인 `gmail.com.com` 은 MX 가 살아 있는 제3자 캐치올이다. **상대에게 물을 게 아니라 콜 전에 우리 발송 로그로 확인하고, 필요하면 정확한 주소나 문자로 재확인할 것**
2. **폼의 "50–150"이 무엇을 센 숫자인가** — 연간 입양인가, 창립 이래 누적인가, 목표치인가. 자릿수가 안 맞으면 이후 대화가 전부 어긋난다
3. **지금 몇 가구가 몇 마리를 데리고 있는가** — 포스터 가구 수는 공개 자료에 전혀 없고 리드 폼도 공란이다
4. **어느 고양이가 누구 집에 있는지를 무엇으로 보는가** — 정관은 Foster Chair 의 직무라고 적어 뒀다. 그 자리가 채워져 있는가, 아니면 ED 가 대행 중인가
5. **정관의 임원 8직 중 실제로 채워진 자리는 몇 개인가** — 특히 **Foster Chair·Secretary·Marketing Chair·Treasurer**. 이사회 실제 인원(정관 정원 5~9인)
6. **접종 회차와 중성화 일정을 무엇으로 관리하는가** — 현재 26마리 중 22마리가 만 1세 이하이고 FVRCP 3회 시리즈가 동시에 돌고 있다
7. **포스터에게서 오는 일상 보고가 어떤 경로로 들어오고 어디에 남는가** — 정관이 지정한 채널은 이메일·문자뿐이다
8. **포스터의 「훈련 개시일」과 「마지막 활동일」을 어디에 적어 두는가** — 의결권 취득(1년)·보상 자격(1년)·활성 소멸(10개월) 세 규칙이 전부 이 날짜에 걸려 있다
9. **정관의 "Shelter Luv" 지출이 무엇이었는가** — "혹시 Shadow Cats 쪽 중성화 예약 결제였을까요"로 한 번에 확인된다. **만약 자체 구독이라면 우리 제안의 자리가 통째로 바뀌므로 콜 초반에 확인**
10. **"Spreadsheets" 가 구체적으로 무엇을 담고 있는가** — Google Form 응답 시트 그 자체인가, 별도로 만든 시트가 있는가, 누가 여는가
11. **입양비 할인 단가($100/$75) 판정 근거를 어디에 적는가**
12. **입양 신청 처리 후 이메일·문자 2회 발송을 누가 어떻게 보내는가** — 자동화가 전혀 확인되지 않는다
13. **연간 인테이크 수와 라이브릴리스율** — 입양 건수조차 실측치가 없다
14. **TNVR 실적 규모** — 사업 영역으로 명시돼 있으나 수치가 전무하다
15. **소프트웨어 같은 운영비 지출의 승인 절차** — 정관에 규정된 사전승인 절차는 포스터 의료비 건뿐이다. 이사회 의결 사안인가, ED 재량인가
16. **다음 이사회가 언제인가** — 60일 통지·21일 안건 규칙 때문에 이 답이 후속 일정 전체를 결정한다
17. **FY2027 예산 편성을 언제 어떻게 하는가** — 연말 잉여금을 남기지 못하는 정관 구조상 이것이 유일한 진입점이다
18. **Kimber Bowers 의 대명사** — 조직이 세 개 폼에서 상대의 대명사를 묻는다. **우리가 먼저 틀리지 않도록 콜 초반에 자연스럽게 확인할 것**
