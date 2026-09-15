# Paws Up Rescue LLC 사전조사

- 작성일: 2026-09-15 / 목적: Jessica Logan 콜 준비 / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Foster-based rescue", "role": "Executive director or founder", "system": "Spreadsheet", "adoptions": "50–150"}` · 유입 소재 **A**(입양 준비 상태 추적) · 이메일 도메인 `pawsuprescuellc.com` · 미팅 2026-09-17
- **조직 확정 · 신청자 확정** — 근거는 아래 「조직 특정」 절. 조직 자체 도메인으로 들어온 리드이고, 그 도메인의 기부 페이지에 **EIN 이 직접 게시**돼 있어 IRS 법인과 한 지점에서 결합한다. 신청자는 **조직 About 페이지에 실명·직책이 있다**
- 출처 주석 ①: 소재지는 **Cullman, AL** 까지만 적는다. IRS 등록 주소와 상공회의소 등재 주소가 동일한 **카운티 도로 단독 주소**(대표 자택으로 보임)이고 이 문서는 공개 게시되므로 번지를 쓰지 않는다
- 출처 주석 ②: **전화번호는 본문에 숫자로 적지 않는다.** 두 개의 번호가 채널별로 갈려 있다는 사실만 쓴다. 그중 하나는 포스터 계약서에 **Jessica 개인 휴대폰**으로 박혀 있다
- 출처 주석 ③: **Facebook·Instagram 본문은 로그인 게이트로 열지 못했다.** Facebook 은 프로필 헤더와 About 탭(연락처·카테고리·리뷰)까지만 리더 프록시로 판독했고, **게시물·메시지 운용 실태는 최대 사각지대**다
- 출처 주석 ④: 조직 사이트·JotForm 인용은 **원문 HTML 문자열 일치로 재확인**했다. Petfinder 는 403 이라 **리더 프록시 판독값**이며, 페이지에 내장된 GraphQL 응답(개체 46건)을 그대로 읽은 것이다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| **리드 도메인 = IRS 법인** | 조직 사이트 Donations 페이지 원문에 **EIN `93-1634937`** 이 게시돼 있다. 이 EIN 의 BMF 레코드는 **Paws Up Rescue · Cullman, AL 35058 · NTEE D20 · 501(c)(3) subsection 3 · status 1 · ruling date 2023-07-01** 이다. **도메인과 EIN 이 조직 자체 페이지에서 결합**하므로 동명 조직 혼동 여지가 없다 | 조직 사이트 Donations(원문 HTML 확인), ProPublica Nonprofit Explorer API |
| **리드 이메일 도메인 = 조직 공식 메일** | Facebook About 탭 연락처란에 **`i***@pawsuprescuellc.com`** 이 조직 공식 메일로 등재돼 있다. 폼의 이메일 도메인과 일치한다 | Facebook About(리더 프록시 판독) |
| **신청자 = 창립자 본인** | About 페이지 원문: ***"Jessica Logan, founder, positive reinforcement dog trainer and canine behavior consultant has a passion and love for all dogs that is unmatched."*** 폼의 `role: Executive director or founder` 와 일치 | 조직 사이트 About(원문 HTML 확인) |
| **신청자 = 포스터 운영 책임자** | 포스터 신청서 겸 계약서(JotForm 232154634659057) 서명란 직전 원문: ***"Your Foster Home Coordinator is: Jessica Logan."*** (번호 생략) **포스터 프로그램의 단일 창구가 본인 명의로 계약서에 박혀 있다** | JotForm 232154634659057(원문 HTML 확인) |
| **폼의 `org_type` 일치** | 홈 원문: ***"Located in Cullman, Alabama, we're a 501(c)(3) foster-based dog rescue dedicated to helping dogs and the people who love them."*** Petfinder 등재도 `privateAddress: true` · `isApptOnly: true` · `isMapHidden: true` — **공개 시설이 없다** | 조직 사이트 홈, Petfinder |
| **동명·유사명 조직 분리** | ProPublica 전문 검색 `Paws Up Rescue` 결과 8건 전부 NTEE D20 동물구조다. **Paws Up Rescue Inc**(84-4924475, Whittier CA) · **Paws Up 4 Rescue Inc**(81-2004292, Joliet IL) · **Paws Up Pet Rescue Inc**(47-1262125, Sheboygan WI) · **Paws Up Rescue And Resources**(81-4248963, Greenville SC) · **A Paw Up Rescue**(35-2526514, Savoy TX) · **Tails Up Paws Down Rescue**(NJ) · **Two Paws Up Nc Shelter Rescue**(NC). **전부 EIN·주(州)가 다르고, 어느 곳도 `pawsuprescuellc.com` 을 쓰지 않는다** | ProPublica API |
| **법인격 표기 불일치(주의)** | 대외 브랜드는 **"Paws Up Rescue LLC"** 인데 **IRS BMF 등재명은 "Paws Up Rescue"**(LLC 없음)다. 사이트 푸터는 ***"©2023 by Paws Up Rescue LLC."*** 로, 기부 페이지는 **501(c)(3) + EIN** 으로 표기한다. **주(州) 법인 등록 형태는 미확인** — 비영리 요금제·그랜트 적용 요건을 따질 때 걸릴 수 있다 | 조직 사이트, ProPublica API |

→ **조직 확정, 신청자 확정.** 콜 상대는 **2023년 인가·만 2년차 조직의 창립자이자, 포스터 계약서에 단일 창구로 이름이 박힌 사람**이다. 그리고 이 조직은 **시설 없이 전량 포스터로 굴러가는데, 개체의 의료·중성화 완료 여부를 담는 칸이 어느 공개 시스템에도 채워져 있지 않다.** 소재 A(입양 준비 상태 추적)로 들어온 이유가 조사에서 그대로 보인다.

## 미팅에서 바로 쓸 핵심 5줄

1. **입양 준비 상태를 담을 칸이 이미 있는데 46건 전부 비어 있다 — 이 콜의 정중앙이다** — Petfinder 개체 레코드 46건(게재 22 + 최근 입양 24)을 전수 확인한 결과 **`spayedNeutered` 46/46 `null`, `vaccinated` 46/46 `null`, `birthDate` 46/46 `null`** 이다. 그런데 조직은 Adopt 페이지에 ***"Our donation is $300 and includes up-to-date vaccinations, heartworm & flea preventative, spay/neuter and microchip."*** 라고 **입양비에 그 네 가지가 포함된다고 공지한다.** 즉 **판정 근거는 분명히 존재하는데 시스템에는 없다.** 어디에 있는지가 첫 질문이다 — 수첩인가, Red Oak 클리닉 청구서인가, 본인 기억인가.

2. **최장 체류견을 조직이 정확히 알고 있고, 유일하게 그 개체에만 내부 ID 가 붙어 있다** — 홈 최상단 원문: ***"Mack is a 2-year old pit bull mix and the longest waiting foster with Paws Up Rescue - he's been waiting over a year to be chosen. … He's vaccinated, neutered, microchipped, and up to date on preventatives."*** 그리고 Petfinder 46건 중 **`organizationAnimalId` 가 채워진 개체는 Mack 단 1건(`Mack12025`)** 이다. **체류기간을 세고는 있으나, 그걸 세는 도구가 없어 한 마리만 손으로 표시해 둔 상태**로 읽힌다(추론, 직접 확인 필요). 콜의 문을 여는 자리는 여기다 — **"Mack 같은 애가 지금 몇 마리인지 어떻게 아세요?"**

3. **포스터를 받는 폼에 「몇 마리까지, 언제까지, 투약 가능한가」 문항이 하나도 없다** — 포스터 신청서 겸 계약서 전 문항을 확인했다. 수용 역량을 묻는 항목이 **전무**하고, 대신 계약 조항으로 ***"it can take 6 months to over 1 year to find a forever home for a foster dog. We are looking for a minimum of 3 to 6 month foster commitment"*** 를 **고지**한다. **6개월~1년+ 짜리 배치를 역량 데이터 없이 시작한다는 뜻**이다. 소재 A 로 들어왔지만 실제 통증은 여기까지 이어진다.

4. **게재 채널 두 곳의 상태가 실제로 어긋나 있다 — 콜에서 증거로 쓸 수 있다** — 2026-09-15 기준 **Petfinder 게재 22마리 vs Adopt-a-Pet 게재 9마리**다. 그리고 **Frito 는 Petfinder 에서 `adopted`, Adopt-a-Pet 에서는 `available`** 이다. 같은 개체의 이름 표기도 갈린다 — **Hollie/Holly, Brandi/Brandy, "Suki (aka Ducki)"/"Duckie (Suki)"**. **두 곳에 사람이 따로 입력하고 있다는 증거**다. 단, 이 대목은 **지적이 아니라 질문으로** 꺼낸다.

5. **지갑은 990-N 구간이고 전원이 겸업이다 — 가격은 먼저 꺼내지 않는다** — IRS 신고 요건 코드 2(990 정식신고 면제 구간), ProPublica 에 990 데이터 0건. 조직 About 원문이 상황을 그대로 말한다: ***"Jessica is the core to this rescue and works tirelessly to make sure all email and messages are answered. Please be patient with us, we also work, have our own dogs, take care of foster dogs and have families."*** **모든 문의가 대표 한 사람의 인박스로 들어가고, 그 사람은 다른 직업이 있다.** 제안은 「예산」이 아니라 **「본인 인박스에서 나가는 일」** 프레임으로 들어가야 한다(추론, 초반 반응 보고 조정).

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 조직명 | 대외 브랜드 **Paws Up Rescue LLC** · IRS BMF 등재명 **Paws Up Rescue** | 조직 사이트, ProPublica API |
| 법적 지위 | **IRS 인가 501(c)(3)**(subsection 3, status 1), **ruling date 2023-07-01**, deductibility code 1. **주(州) 법인 등록 형태는 미확인** | ProPublica API |
| EIN | **93-1634937** — 조직 자체 Donations 페이지에 직접 게시 | 조직 사이트 Donations |
| 시설 | **없다.** Petfinder 등재 속성 `privateAddress: true` · `isMapHidden: true` · `isApptOnly: true`, 운영시간 전 요일 `notes: null`. 상공회의소 등재도 **"By appointment only"** | Petfinder, Cullman Chamber |
| 소재지 | **Cullman, AL**. IRS BMF 우편번호 구역 35058, Facebook 등재는 35055 — **둘 다 Cullman 시내 구역이다** | ProPublica API, Facebook About |
| 성격 | **포스터 기반 개 전문 레스큐 + 지역 주민 대상 반려 유지 지원(벳케어·중성화·무료 훈련) 병행.** 홈 원문: ***"We offer vet care assistance, free training, and essential support to keep pets with their families—while giving abandoned dogs a second chance at a loving forever home."*** | 조직 사이트 홈 |
| 사명(자기표기) | Petfinder 등재 원문: ***"To Rescue, rehabilitate and rehome dogs in our community. We work with local citizens and local agencies to offer spay and neuter assistance. Keeping dogs in homes is our goal."*** | Petfinder |
| **서비스 권역** | **7개 카운티** — Adopt-a-Pet 등재 원문: ***"Cullman, Winston, Morgan, Walker, Marshall, Blount. Lawerence."***(`Lawerence` 는 Lawrence 오타, 원문 그대로) | Adopt-a-Pet |
| **인력(공개 전원)** | **1명.** About 페이지에 실명이 나오는 사람은 **Jessica Logan** 뿐이다. 그 외 이름·직책·이사회 공개 **없음** | 조직 사이트 About |
| 유급 인력 | **미확인.** 명시적 "all volunteer" 문구는 없으나 About 원문 ***"we also work, have our own dogs, take care of foster dogs and have families"*** 가 **전원 겸업**을 시사한다(추론, 직접 확인 필요) | 조직 사이트 About |
| 자원봉사 조직 | 별도 Volunteer Form(JotForm 232154587292057). 선택지: **Doggie day out / Play time with foster dogs / Vet appointments / Weekend adoption events / Fundraising events / Foster Coordinator / Other**. **"Foster Coordinator" 가 자원봉사 모집 항목으로 올라와 있다** — 현재는 Jessica 본인이 그 역할이다 | JotForm 232154587292057 |
| 설립·전개 | **Petfinder 계정 생성 2023-05-15** → **IRS 인가 2023-07-01** → 사이트 푸터 **©2023** → 지역 언론 첫 노출 2023-10 → **Petfinder 최종 활동 2026-08-27**. **만 2년 3개월차** | Petfinder 메타데이터, ProPublica API, Cullman Tribune |
| **연락 채널(4갈래)** | ①메일 **`i***@pawsuprescuellc.com`**(Facebook 등재·리드 도메인) ②메일 **`p***@gmail.com`**(Petfinder·Chewy 등재) ③**전화 2개**(Facebook·Adopt-a-Pet 용 / Petfinder·상공회의소·포스터 계약서 용, 번호 생략) ④**Wix 문의 폼**(Contact 페이지에 메일 주소 없이 ***"Questions about adoption or how you can help? Message us."*** 만) + Facebook 메시지 | Facebook About, Petfinder, Chewy, 조직 사이트 Contact |
| 소셜 | **Facebook 12K 팔로워 / 55 팔로잉 / 리뷰 15건 96% 추천** · **TikTok `@paws.up.rescue` 186 팔로워 · 1,563 좋아요** · Instagram `@pawsuprescue256`(로그인 게이트, 수치 미확인) · Linktree `pawsuprescue256` | Facebook·TikTok(리더 프록시), Linktree |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| **연 수입/예산** | **미확인.** ProPublica 에 **990 신고 데이터 0건**, `asset_amount`·`income_amount`·`revenue_amount` 전부 0/`null`. ProPublica 안내 원문: ***"Nonprofit Explorer has no Form 990 data for Paws Up Rescue."*** | ProPublica API·조직 페이지 |
| **IRS 신고 요건** | BMF `filing_requirement_code = 2`, `accounting_period = 12`(**12월 결산**), `tax_period = 2025-12-01`. **코드 2 는 「총수입 소액으로 990 정식신고 면제」 구분**이다 — 통상 연 총수입 5만 달러 이하 구간(코드값은 확정, **실제 수입 규모 해석은 추론**) | ProPublica API |
| **누적 지출(자기게시)** | **수의 서비스 $79,626** — 홈 원문 ***"$79,626"*** + ***"in veterinary services provided."*** 설립 2023 기준 약 2.4년 누적이므로 **연 $33,000 내외**(계산값, **추론**) | 조직 사이트 홈 |
| **중성화 프로그램 지출(자기게시)** | **$12,949** — 아웃리치 페이지 ***"spay/neuter funds used"***. 시술 **92건** | 조직 사이트 Community outreach |
| **재원 구성 — 그랜트·파트너십** | 아웃리치 페이지에 **PetSmart Charities · Big Hearts Big Barks Foundation · Spay & Neuter Coalition of the Southeast · RedOak Veterinary Clinic · Pet Supplies Plus** 로고 게시. 원문: ***"We are thrilled to announce our partnership with Big Hearts Big Barks Foundation and the Spay & Neuter Coalition of the Southeast. Their dedicated efforts enable us to secure funding and sustain this vital program for our community."*** **개별 그랜트 금액·기간은 미확인** | 조직 사이트 Community outreach |
| 기부 수단 | **PayPal 기부 버튼**(`V3PXP5JB7PNVJ`) · **Venmo `@Pawsuprescue`** · **Cash App `$pawsuprescue`** · 수표 우편 · **Amazon 위시리스트** · **Chewy 위시리스트 15종**(eGift Card $25–$500, VICTOR·Purina Pro Plan 사료 등) · PetSmart / Pet Supplies Plus 기프트카드 | 조직 사이트 Donations, Linktree, Chewy |
| 제휴 수익 | **Kuranda**(파트너 ID 27840) · **Tractive** 제휴 링크. Shop 페이지 원문: ***"When you shop through our affiliate links, proceeds go directly to Paws Up."*** **자체 스토어는 없다** | 조직 사이트 Shop to Save Paws, Linktree |
| **정기후원·스폰서 티어** | **없다.** Donorbox·Givebutter 같은 모금 플랫폼도, 개체 스폰서 티어도 확인되지 않는다(Petfinder 기본 제공 Sponsor-a-Pet 링크는 자동 생성분) | 조직 사이트 Donations |
| 입양 수수료 | **$300 표준.** Adopt 페이지 원문: ***"Our donation is $300 and includes up-to-date vaccinations, heartworm & flea preventative, spay/neuter and microchip."*** Adopt-a-Pet 등재에 예외 규정 추가: ***"In some cases, fees may be sponsored or donated based on individual circumstances."*** 입양 신청서에도 **스폰서 요청 항목**이 있다 | 조직 사이트 Adopt, Adopt-a-Pet, JotForm 232132764560149 |
| **시사점** | **조직 예산에서 구독료를 뽑는 대화는 성립이 어렵다.** 990-N 구간이고 현금은 입양비·소액 기부·물품 위시리스트로 들어온다. 반면 **그랜트·재단 파트너십은 실제로 작동 중**이므로, 유료화가 필요하면 「도구 구독」이 아니라 **「프로그램 예산에 붙는 항목」** 경로가 현실적이다(**추론, 직접 확인 필요**) | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **누적 입양(자기게시)** | **204건** | 홈 원문 ***"204"*** + ***"dogs adopted,"***. 집계 기준일 표기 없음 |
| **연 환산 입양** | **약 85건/년** | 204건 ÷ 약 2.4년(2023-05 Petfinder 개설 기준). **폼 자기보고 `50–150` 밴드 안에 들어온다** — **자기보고와 실측이 어긋나지 않는 드문 리드다**(계산값, **추론**) |
| **현재 게재 개체(Petfinder)** | **22마리 게재 / 24마리 최근 입양** | Petfinder 페이지 내장 GraphQL 응답 46건 전수 판독. `adoptionStatus` 대소문자 표기가 `ADOPTABLE`·`Adoptable`·`adoptable` 세 가지로 섞여 있다 |
| **현재 게재 개체(Adopt-a-Pet)** | **9마리** | 원문 ***"1 - 9 of 9 pets available"***. **Petfinder 22 와 13마리 차이** |
| **채널 간 상태 불일치(실례)** | **Frito** | Petfinder `Adopted` / Adopt-a-Pet `available`. 한배 7마리(**Gypsy & the Parsonage Pups**)는 Petfinder 에만 있고 Adopt-a-Pet 에는 없다 |
| **전량 포스터 가정 케어** | **22/22** | 시설이 없으므로 예외가 없다. **따라서 현재 최소 22가정에 분산돼 있다**(추론 없음, 구조상 하한) |
| **최장 체류** | **1년 초과 1마리 확인(Mack)** | 홈 원문 ***"the longest waiting foster with Paws Up Rescue - he's been waiting over a year to be chosen."*** 다른 개체의 체류기간은 **미확인**(Petfinder 응답에 인테이크·게재일 필드가 없다) |
| **중성화 지원 실적** | **92건 / $12,949** | 아웃리치 페이지. **입양 파이프라인 밖의 별도 케이스 볼륨** |
| **포스터 가정 수** | **미확인** | 조직 어느 화면에도 포스터 수·모집 현황 수치가 없다. **폼에 포스터 문항이 없어 리드 폼 자기보고도 없다** |
| 입양 소요 | **최대 7일**(Adopt-a-Pet) vs **"days or weeks"**(자체 사이트) | Adopt-a-Pet 원문 ***"From start to finish, the adoption process can take up to 7 days."*** / About 원문 ***"Multiple meet and greets with you, your family and your pets are required. This can take days or weeks."*** **두 곳의 공지가 다르다** |
| 반환 정책 | **명시 없음 / "zero returns" 목표만 게시** | Adopt-a-Pet 원문 ***"we are committed to lifelong placements and strive for zero returns."*** 반환 기간·환불 조건은 **미확인** |
| 라이브 릴리스율 | **미확인 / 해당 없음** | 시설이 없고 지자체 통계 제출 대상이 아니다. **Cullman County Animal Control·Shelter 공식 페이지에도 파트너 레스큐 명단·통계가 없다** |
| 소셜 도달 | **Facebook 12K 팔로워 · 리뷰 15건 96% 추천** / **TikTok 186 팔로워** | **도달이 Facebook 한 곳에 몰려 있다** |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW** | **없다.** Chameleon·ShelterLuv·Pawlytics·Petstablished·RescueGroups·Shelter Manager 등 어떤 쉘터 관리 SW 의 흔적도 사이트·폼·등재 페이지 전수에서 검출되지 않았다. **폼 자기보고 `system: "Spreadsheet"` 와 정합한다** | 조직 사이트 전 페이지·JotForm 4종 원문 문자열 검색 |
| **웹사이트** | **Wix**(thunderbolt 런타임, metaSiteId `bd681d57-…`). 페이지 11개: Home / About / Adopt / Foster / Volunteer / Donations / Community outreach / Shop to Save Paws / Contact / Privacy / Accessibility | 조직 사이트 HTML |
| **폼 — JotForm 4종(전수)** | `232132764560149` **Adoption Application**(43문항) · `232154634659057` **Foster Home Form and Contract**(신청서+계약서 일체형) · `232154587292057` **Volunteer Form** · `233347450221043` **Vet Care Assistant Form** | 조직 사이트 각 페이지, JotForm 원문 |
| **폼 제출물의 종착지** | **미확인 — 콜 초반 필수 확인 항목.** JotForm 제출은 기본적으로 JotForm Tables(스프레드시트형) 또는 메일 알림으로 떨어진다. 폼의 `system: "Spreadsheet"` 응답과 맞물리지만 **연결 대상(Google Sheets·Excel·JotForm Tables)은 밖에서 볼 수 없다** | 추론 |
| **입양 플랫폼** | **Petfinder**(member `AL517`, organizationId `df631428-…`, 계정 생성 **2023-05-15**, 최종 활동 **2026-08-27**) · **Adopt-a-Pet**(shelter `286125`). **두 곳의 게재 수가 22 vs 9 로 어긋난다 — 피드 연동이 아니라 개별 입력으로 보인다**(추론, 직접 확인 필요) | Petfinder, Adopt-a-Pet |
| **개체 레코드 완성도(결정적)** | Petfinder 46건 전수: **`spayedNeutered` 46/46 `null` · `vaccinated` 46/46 `null` · `birthDate` 46/46 `null` · `organizationAnimalId` 45/46 `null`**(유일 예외 `Mack12025`). 채워진 필드는 `houseTrained`(Yes 21 / No 25)와 품종·성별·크기 정도다 | Petfinder 내장 GraphQL 응답 |
| **개체 동일성 관리 흔적** | 이름 칸에 별명·한배 정보를 우겨 넣고 있다 — **`Lola (aka Gabby)` · `Suki (aka Ducki)` · `Gurdy (aka Gertie, short for Gertrude)`**, 한배 7마리를 **`Caleb (Gypsy & the Parsonage Pups)`** 식으로 묶음. 같은 한배를 **`& the Parsonage Pups`** 와 **`and the Parsonage Pups`** 두 표기로 쓴다 | Petfinder |
| **웹사이트 개체 데이터(정지 상태)** | Wix 내부 컬렉션에 개 **9건**이 들어 있다(필드: Name / Gender / Description / **Petfinder ID** / 사진 4종 / URL / Published Date / **Testimonial**). 게재일은 2024-04 ~ 2025-10, **레코드 최종 갱신 2025-12-02**. 수록된 9마리 중 **현재 Petfinder 게재 목록과 겹치는 개체는 Mack 하나뿐**이다 — **웹 화면 쪽 데이터는 약 9개월 방치**(추론, 직접 확인 필요) | 조직 사이트 홈 내장 데이터 |
| **개체 목록 페이지 — 없다** | Adopt 페이지에 개체 레코드가 **0건**이다(`petfinderId` 미출현). **입양 가능 개체를 보려면 Petfinder 로 나가야 한다** | 조직 사이트 Adopt HTML |
| **포스터 전용 도구·포털** | **없다.** 포스터용 로그인·상태 입력란·업데이트 제출 경로가 어디에도 없다. 계약서는 ***"contact Paws Up Rescue's foster home coordinator"*** · ***"contact Paws Up Team member"*** 라고만 쓰고 **수단을 지정하지 않는다** | JotForm 232154634659057 |
| **의료 연동** | **Red Oak Vet clinic 단일 지정.** 포스터 계약 원문: ***"ALL vetting must be done at Red Oak Vet clinic and must be approved prior to taking the foster dog, unless emergency."*** **즉 의료 이력의 1차 원본은 외부 클리닉에 있다** | JotForm 232154634659057, 조직 사이트 Community outreach |
| 결제 | **PayPal · Venmo · Cash App** 각각 독립. 개체·입양 레코드와 연결될 구조가 아니다 | 조직 사이트 Donations, Linktree |
| 물품 조달 | **Chewy 위시리스트(15종) · Amazon 위시리스트 · 기프트카드**. 재고·배분 기록 도구는 확인되지 않는다 | Chewy, 조직 사이트 Donations |
| 훈련 콘텐츠 | Linktree 에 **"Namaste Dog Training Downloads → The Namaste Dog Library"**(namastedogtraining.gumroad.com) 섹션을 얹어 두고 있다. **조직 자체 콘텐츠가 아니라 외부 트레이너 스토어 링크**다 | Linktree |
| **정리** | **경쟁 구도가 Chameleon·ShelterLuv 가 아니다.** 상대는 **도구를 안 쓰는 상태**이고, 지금 그 자리를 **JotForm 제출물 + Petfinder 게재 화면 + 대표의 인박스**가 나눠 메우고 있다. 우리가 겨눌 자리는 **「개체별 입양 준비 상태」와 「포스터 배치 현황」 두 칸**이며, 둘 다 현재 **어느 화면에도 없다** | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| 결정 라인 | **사실상 Jessica Logan 단독으로 보인다.** 공개된 실명이 본인 하나뿐이고, 이사회·임원 명단이 어디에도 없다. About 원문 ***"Jessica is the core to this rescue"*** (**추론, 직접 확인 필요**) |
| 두 번째 이해관계자 | **공개 자료상 없다.** 다만 About 의 ***"we also work … take care of foster dogs and have families"*** 와 Volunteer Form 의 **"Foster Coordinator"** 선택지는 **이름이 공개되지 않은 실무자가 존재하거나, 그 자리를 채우려 모집 중임**을 시사한다. **콜에서 「Jessica 외에 이 기록을 만지는 사람」을 반드시 물을 것** |
| 전결 범위 | **미확인.** 정관·이사회 구성·승인 기준선이 공개되지 않는다 |
| 회계 사이클 | **12월 결산**(BMF `accounting_period = 12`). 미팅 시점 2026-09-17 은 **FY2026 3분기 말** |
| **병목 ①(현금)** | **990-N 구간**이고 정기후원 프로그램이 없다. 현금은 **입양비 $300 × 연 85건 내외 + 소액 기부**가 전부로 보인다. **월 구독형 SW 지출을 감당할 구조가 아니다** — 가격을 먼저 꺼내지 않는다 |
| **병목 ②(가용 시간)** | **대표가 겸업 중이고 모든 문의가 본인에게 들어온다.** About 원문 ***"works tirelessly to make sure all email and messages are answered. Please be patient with us"*** — **응답 지연을 조직이 선제적으로 사과하는 상태**다. **온보딩에 쓸 수 있는 시간이 매우 적다** |
| **병목 ③(법인격 표기)** | 대외 브랜드 **"LLC"** 와 IRS 등재명 **"Paws Up Rescue"** 가 다르고, 주(州) 등록 형태가 확인되지 않는다. **비영리 할인·그랜트 요건을 따질 때 실무 문제가 될 수 있다** — 지적이 아니라 **요건 확인 문맥에서만** 꺼낸다 |
| **병목 ④(기존 계약)** | **Wix · JotForm 은 이미 쓰고 있다**(폼 4종 운용). **유료 플랜 여부·비용은 미확인.** 새 도구는 「대체」가 아니라 **「JotForm 제출물이 떨어진 다음 칸」** 으로 제시해야 성립한다 |
| 자금 경로(대안) | **PetSmart Charities · Big Hearts Big Barks Foundation · Spay & Neuter Coalition of the Southeast** 와의 파트너십이 실제로 작동 중이다. **프로그램 예산·그랜트 라인에 붙는 경로를 별도로 확인할 가치가 있다**(추론) |

## 6. Jessica Logan 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| 성명·직책 | **Jessica Logan · Founder** | 조직 사이트 About |
| **두 번째 직책(결정적)** | **Foster Home Coordinator.** 포스터 계약서 서명 직전에 ***"Your Foster Home Coordinator is: Jessica Logan."*** 이 본인 휴대폰 번호와 함께 박혀 있다. **포스터가 문제를 만나면 연락하는 단일 창구가 본인이다** | JotForm 232154634659057 |
| 전문성(자기표기) | ***"positive reinforcement dog trainer and canine behavior consultant"*** | 조직 사이트 About |
| 실제 수행 업무 | ***"Jessica is the core to this rescue and works tirelessly to make sure all email and messages are answered."*** — **문의 응대를 본인 업무로 명시한다** | 조직 사이트 About |
| 겸업 여부 | ***"we also work, have our own dogs, take care of foster dogs and have families"*** — **레스큐가 본업이 아니다**(주어가 "we" 라 본인 포함 여부는 **추론**) | 조직 사이트 About |
| **외부 경력(정황, 확정 아님)** | 같은 Cullman 소재 **Namaste Dog Training** 의 Meet the Trainers 에 **"Trainer Jessica – DPF Dog Training"** 이 실려 있다. 원문: ***"Jessica has a background in working with horses … Jessica and her husband decided to take on a foster named Kira … she has joined us to earn the training hours needed to pursue the goal of becoming an animal behaviorist … Jessica has completed her apprenticeship with us and started offering her own services."*** 연락처 `D***@gmail.com`. **Paws Up 의 Linktree 가 이 Namaste 의 유료 다운로드 스토어를 자기 링크 목록에 얹어 두고 있다.** ①같은 소도시 ②"포스터를 계기로 훈련에 입문" ③"positive reinforcement" ④상호 링크 — **네 갈래가 겹치지만 성(姓) 표기가 없어 동일인 확정은 못 한다** | namastedogtraining.com Meet the Trainers, Linktree · **추론, 직접 확인 필요** |
| **외부 이력(그 외)** | **미확인.** LinkedIn·언론 인터뷰·강연 등 공개 프로필을 찾지 못했다. 동명이인이 많아 추정으로 붙이지 않는다 | 검색(0건) |
| **성향(콜 화법 판단용)** | **조항형 사고를 한다.** 포스터 계약서가 동의 조항 10여 개로 구성돼 있고(소유권 유보, 지정 병원, 목줄·펜스 한정, 수의 진료 전 사전 연락, 물품 반납), 입양 신청서는 **43문항**에 ***"Rule of 3"*** · ***"18-year commitment"*** · 연 $300–500 양육비 고지까지 넣어 두었다. 반면 **대외 공지는 서로 어긋난다**(입양 절차가 자체 사이트 5단계 / Adopt-a-Pet 7단계, 소요기간 "days or weeks" / "up to 7 days"). **규칙은 촘촘하게 설계하지만 그것을 여러 화면에 동기화할 여력이 없는 사람**으로 읽힌다(**추론**, 초반 반응 보고 조정) | JotForm 4종, 조직 사이트, Adopt-a-Pet |
| **먹히는 언어(가설)** | **"프로토콜", "관찰", "행동", "단계"**. 안 먹힐 언어는 **"대시보드", "라이브 릴리스율", "데이터 기반 의사결정"**. 포스터 계약서에 ***"Paws Up Rescue will provide you a protocol and guide for your rescue dog. This must be followed in order to ensure a smooth transition from one placement to the next."*** 라는 문장이 이미 있다 — **"프로토콜이 지켜지는지 보이나요"** 가 본인 어휘로 들어가는 질문이다(**추론**) | JotForm 232154634659057, 추론 |
| 동석 가능성 | **미확인.** 공개된 두 번째 실명이 없다 | — |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| 2023-05-15 | **Petfinder 조직 계정 개설**(AL517) — 확인 가능한 가장 이른 활동 기록 | Petfinder 메타데이터 |
| **2023-07-01** | **IRS 501(c)(3) 인가(ruling date).** 등재명 **Paws Up Rescue**, Cullman AL | ProPublica API |
| 2023-10-06 | **지역 언론 유일 노출** — Cullman Tribune, ***"3Sixty Jeep Club offering 'paw up' this Halloween"***(지역 지프 클럽의 trunk-or-treat 모금 행사 파트너로 등장) | Cullman Tribune 태그 페이지 |
| 2024-04 ~ 2025-10 | 웹사이트 내부 개체 컬렉션에 9건 게재(Ginger, Buttercup, Christy, George, Mack, Chase, Pongo, Poli, Lily) | 조직 사이트 홈 내장 데이터 |
| **2025-12-02** | **웹사이트 개체 컬렉션 최종 갱신.** 이후 약 9개월간 갱신 없음 | 조직 사이트 홈 내장 데이터 |
| **2026-08-27** | **Petfinder 계정 최종 활동**(`lastActiveTime`). **실무 채널은 Petfinder 쪽이 살아 있다** | Petfinder 메타데이터 |
| **현재 진행 중 ①** | **Mack — 1년 넘게 대기 중인 최장 체류견을 홈 최상단에 배치.** 46건 중 유일하게 내부 ID(`Mack12025`)가 붙은 개체다 | 조직 사이트 홈, Petfinder |
| **현재 진행 중 ②** | **게재 채널 불일치가 해소되지 않은 상태** — Petfinder 22 vs Adopt-a-Pet 9, Frito 상태 반대 | Petfinder, Adopt-a-Pet |
| — | **부정 이슈·분쟁·행정처분은 확인되지 않았다.** Facebook 리뷰 **15건 96% 추천**, 지역 언론 부정 보도 0건 | Facebook About, 검색 |
| — | **Cullman County Animal Control·Shelter 와의 공식 계약 관계는 미확인.** 카운티 공식 페이지에 파트너 레스큐 명단이 없다. 조직은 ***"We work with local citizens and local agencies"*** 라고만 쓴다 | co.cullman.al.us, Petfinder |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

- **입양 준비 상태를 담을 칸이 비어 있다.** Petfinder 46건 전부 `spayedNeutered`·`vaccinated`·`birthDate` 가 `null` 인데, Adopt 페이지는 **$300 에 백신·예방약·중성화·마이크로칩이 포함**된다고 공지한다. → **판정 근거가 시스템 밖(클리닉 청구서·본인 기억·종이)에 있다.** **이 문서에서 가장 중요한 질문이다. 반드시 확인.**
- **내부 개체 ID 체계가 없다.** 46건 중 `organizationAnimalId` 가 채워진 건 `Mack12025` 하나뿐이다. → **개체 식별이 「이름」으로만 이뤄진다.** 동명 개체가 생기거나 이름을 바꾸면 이력이 끊긴다. 확인 필요.
- **실제로 이름이 흔들리고 있다.** `Lola (aka Gabby)`, `Suki (aka Ducki)`(Adopt-a-Pet 은 `Duckie (Suki)`), `Gurdy (aka Gertie, short for Gertrude)`, `Hollie`/`Holly`, `Brandi`/`Brandy`, 같은 한배를 `&` 와 `and` 두 표기로. → **별명·한배 정보를 이름 칸에 우겨 넣고, 채널마다 따로 친다.** 확인 필요.
- **한배(litter) 를 묶는 단위가 없다.** Gypsy 와 새끼 7마리를 **각 개체 이름 뒤 괄호**로만 묶고 있다. → 한배 단위의 접종 일정·중성화 시점·분양 진행을 **괄호 문자열로 관리**한다는 뜻. 확인 필요.
- **두 게재 채널에 사람이 따로 입력한다.** Petfinder 22 vs Adopt-a-Pet 9, `Frito` 상태 반대. → **입양 확정 시 내려야 할 화면이 최소 두 곳**이고 그중 하나가 자주 남는다. 확인 필요.
- **포스터 역량 데이터를 아예 수집하지 않는다.** 포스터 폼에 동시 수용 두수·가능 기간·투약 가능 여부 항목이 **0개**. 있는 건 `Describe your ideal foster dog or dogs:` 자유서술과 `What type of foster home are you applying for?` 뿐. → **배치 판단이 대표의 기억과 대화로 이뤄진다.** 확인 필요.
- **포스터 접수와 계약이 한 폼이다.** `Foster Home Form and Contract` 하나가 신청·심사·법적 계약을 겸한다. → **「신청 중 / 승인 / 활성 / 휴면」 같은 포스터 상태 구분이 존재할 자리가 없다.** 확인 필요.
- **포스터 업데이트의 수단이 지정돼 있지 않다.** 계약 조항은 ***"contact Paws Up Rescue's foster home coordinator"*** · ***"contact Paws Up Team member with any behavior, training and/or medical concerns PRIOR to going to the vet"*** 라고만 쓴다. → **문자·전화·Facebook 메시지가 섞여 들어오고, 그 내용이 개체 레코드로 옮겨지는 경로가 없다.** 확인 필요.
- **의료 원본이 외부 클리닉에 있다.** ***"ALL vetting must be done at Red Oak Vet clinic and must be approved prior to taking the foster dog"*** → **접종·중성화 완료 사실을 조직이 알려면 클리닉에 묻거나 영수증을 봐야 한다.** 확인 필요.
- **연락 창구가 4갈래다.** `i***@pawsuprescuellc.com` / `p***@gmail.com` / 전화 2개(채널별로 다른 번호) / Wix 문의 폼 + Facebook 메시지. Contact 페이지에는 **메일 주소조차 없고 폼만 있다**. → **입양 문의·포스터 연락·벳케어 신청이 서로 다른 입구로 들어와 한 사람에게 모인다.** 확인 필요.
- **입양 후 훈련이 요금에 포함돼 있다.** About 원문 ***"we follow up with continued training as part of the adoption fee."*** → **누적 204명의 입양자에 대해 기한 없는 사후 의무가 쌓여 있다.** 누가 언제 받았는지 추적하는 수단이 없다. 확인 필요.
- **벳케어 지원이 별도 케이스 워크로드다.** Vet Care Assistant Form 에 ***"How much $ are you able to contribute to the total bill?"*** 와 ***"What day would you like to come?"*** 가 있다. → **입양 파이프라인과 무관한 예약·본인부담·소득 확인 절차가 병행**되고, 92건이 이미 처리됐다. 확인 필요.
- **대외 공지가 서로 어긋난다.** 입양 절차가 자체 사이트 **5단계**(신청→미팅→가정방문→계약→사후지원) / Adopt-a-Pet **7단계**(+전화 인터뷰, +24시간 쿨오프, +"Rescue brings pet to you"), 소요기간이 ***"days or weeks"*** / ***"up to 7 days"***. → **절차의 정본이 문서가 아니라 사람 머릿속에 있다.** 확인 필요.
- **웹 화면 쪽 데이터가 멈춰 있다.** Wix 내부 개체 컬렉션 9건이 **2025-12-02 이후 갱신 없음**이고, 그중 현재 게재 개체와 겹치는 건 Mack 하나다. 반면 Petfinder 는 **2026-08-27** 까지 활성이다. → **손이 닿는 화면과 방치되는 화면이 갈렸다.** 확인 필요.

## 미확인 요약 (콜에서 확인할 것)

1. **입양 준비 완료를 무엇을 열어서 판정하는가** — 백신·중성화·마이크로칩·예방약 네 가지가 끝났는지 확인할 때 무엇을 보는지. Red Oak 클리닉에 묻는지, 영수증 뭉치인지, 스프레드시트인지, 기억인지. **소재 A 로 들어온 리드의 정중앙이며 이 콜의 첫 질문이다.**
2. **오늘 포스터가 몇 가정이고, 그 명부가 어디에 있는가** — 폼에 포스터 문항이 없어 자기보고조차 없다. 새 개체가 들어왔을 때 어느 집이 비었는지 **무엇을 보고 정하는지**까지 물을 것.
3. **포스터가 「지금 이 아이 상태」를 어떤 경로로 보내오고, 그게 어디에 남는가** — 계약서가 수단을 지정하지 않는다. 문자인지 전화인지 Facebook 메시지인지, 그리고 그 내용을 **누가 어디에 옮겨 적는지**.
4. **JotForm 제출물이 떨어지는 곳이 정확히 어디인가** — JotForm Tables 인지 Google Sheets 인지 메일 알림인지. 폼의 `system: "Spreadsheet"` 응답이 가리키는 실체를 특정한다. **여기가 우리 제품이 붙을 접점이다.**
5. **Petfinder 와 Adopt-a-Pet 을 각각 누가 언제 고치는가** — 22 vs 9 차이와 Frito 의 상태 불일치를 **지적이 아니라 질문으로** 꺼낼 것. "두 군데 다 손으로 치시나요" 정도.
6. **Jessica 외에 이 기록을 만지는 사람이 있는가** — 공개된 실명이 본인 하나뿐이다. Volunteer Form 의 "Foster Coordinator" 자리가 채워졌는지, SW 도입을 혼자 결정할 수 있는지, 상한이 있는지.
7. **입양 후 계속 훈련(입양비 포함분)을 누가 어떻게 추적하는가** — 누적 204명에 대한 기한 없는 의무다. 실제로 몇 건이 살아 있는지.
8. **벳케어·중성화 지원 프로그램의 운영 실태** — 92건이 어떤 절차로 처리되는지, 예약·본인부담·사후 확인을 무엇으로 관리하는지. **입양 업무와 별개의 두 번째 워크로드이므로 시간 소모원으로서 크기를 볼 것.**
9. **연간 처리량·회계·도구 비용** — 12월 결산은 확인됐으나 990 신고 이력이 없어 예산 사이클을 알 수 없다. Wix·JotForm 의 현재 플랜과 비용도 함께.
10. **다루지 말 것** — ①**"LLC vs 501(c)(3)" 표기 불일치**(비영리 요금 적용 요건을 확인하는 실무 문맥에서만, 지적으로 꺼내지 않는다) ②**두 게재 채널의 불일치를 「관리 부실」로 프레이밍하는 것** ③**Namaste Dog Training 과의 관계를 확정된 사실처럼 말하는 것**(성 표기가 없어 동일인 미확정, 본인이 먼저 꺼내면 받는다) ④**연락 창구가 네 갈래로 갈린 점**(상대가 이미 사과 문구를 사이트에 걸어 둔 사안이다).
