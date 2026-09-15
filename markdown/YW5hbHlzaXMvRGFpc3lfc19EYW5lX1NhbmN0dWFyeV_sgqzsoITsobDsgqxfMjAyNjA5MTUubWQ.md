# Daisy's Dane Sanctuary 사전조사

- 작성일: 2026-09-15 / 목적: Kelly Johnson 콜 준비 / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Foster-based rescue", "role": "Shelter or rescue manager", "system": "Buzz", "adoptions": "50–150"}` · 유입 소재 **A**(입양 준비 상태 추적) · 이메일 도메인 `daisysdanesanctuary.com` · 미팅 2026-09-18
- **조직 확정 · 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: **Facebook·Instagram·TikTok 은 열지 못했다.** 이 조직은 모금·포스터 모집을 소셜에 크게 의존하는 유형이므로 **가장 큰 사각지대**다
- 출처 주석 ②: 사이트·플랫폼 인용은 원문 HTML 또는 리더 프록시(`r.jina.ai`) 판독값이며, **큰따옴표로 인용한 영문 문자열은 원문에서 문자열 일치로 확인한 것만** 실었다
- 출처 주석 ③: 이 조직은 **Form 990 제출 대상**(IRS BMF `filing_requirement_code=1`)이나 **ProPublica 에 재무 상세가 올라와 있지 않다**(`filings_with_data` 빈 배열). 연도별 추이를 만들 수 없다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다. IRS 등록 주소가 대표 자택으로 보이는 소규모 레스큐이므로 번지를 적지 않는다
- **동명 주의**: `Dane` 계열 레스큐가 많다. 특히 **Great Danes of the Ozarks**(Granby, MO)는 이 조직이 개를 인수해 온 **가해 측 사육장**이지 관련 조직이 아니다. 이 문서는 전부 **EIN 88-2587013 · Pleasant Hill, MO** 법인 기준이다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| **IRS 법인 = 단일 특정** | **EIN `88-2587013` · Daisys Dane Sanctuary · Pleasant Hill, MO · NTEE `D20`(Animal Protection and Welfare) · 501(c)(3), 면세 인정 2023-11.** ProPublica 조직명 검색 결과가 **정확히 1건**이고 동명 타 법인이 없다 | ProPublica API |
| **이메일 도메인 = 조직 공식 도메인** | 리드 도메인 `daisysdanesanctuary.com` 이 **운영 중인 공식 사이트**이고, 사이트 자기표기 소재지(Kansas City, Missouri area / Pleasant Hill)가 IRS 등록지와 일치한다 | 사이트, ProPublica API |
| **신청자 = 조직 등재 담당자** | 팀 페이지에 **「Kelly Johnson / Intake & Rescue Program Manager」** 가 실려 있고, **원문 HTML 의 mailto 가 `K***@daisysdanesanctuary.com`** 이다 — **리드 이메일 도메인과 정확히 일치** | 사이트 Our Amazing Team 원문 HTML |
| **신청자 = 실제 시스템 사용자** | 사이트맵의 사용자 목록에 **`/author/kelly-johnson/`** 가 있다. 즉 **본인이 Buzz(워드프레스) 계정을 가진 실사용자**다 | `wp-sitemap-users-1.xml` |
| **폼의 `system: Buzz` 확인** | **Buzz to the Rescues 로 확정.** 사이트 푸터 원문 **"Powered By: Buzz"**, 테마 경로 **`wp-content/themes/buzz-rescues/`**, 개체 레코드 작성자 표기 **"Posted By: buzz"** | 사이트 원문 HTML |
| **폼의 `org_type: Foster-based rescue` 대조** | **모순 없다.** 사이트 원문 **"We are a foster-based rescue and rely on donations and our volunteers' hard work"**, About 원문 **"a foster-based, 501c3 Great Dane rescue"** | 사이트 Home·About |
| **폼의 `role: Shelter or rescue manager` 대조** | **모순 없다.** 직함이 **Intake & Rescue Program Manager** 다 | 사이트 |
| **폼의 `adoptions: 50–150` 대조** | **축소 응답으로 보인다.** 사이트맵 기준 **개체 레코드가 679건**(2022-06 개시, 약 4.3년 → 연 160건 페이스)이고, **2026-05-11 하루에 72건이 한꺼번에 생성**됐다. 아래 3절 | 사이트맵, 실측 |

→ **조직 확정, 신청자 확정.** 콜 상대는 **연 수입 $16만 규모 · 창립 4년 차 그레이트데인 전문 레스큐의 인테이크 총괄**이고, 이 조직은 **2026-05 에 단일 사건으로 75마리 이상을 한 번에 받아 지금도 법적 보전 상태로 보유 중**이다. 이 콜은 「도구 교체」 이야기가 아니라 **「법원 판단을 기다리는 70여 마리의 현재 상태를 담을 칸이 지금 도구에 없다」** 이야기다.

## 미팅에서 바로 쓸 핵심 5줄

1. **현행 도구가 이 개들의 실제 상태를 못 담는다는 사실을 조직이 공개 페이지에 직접 써 놨다 — 이 콜의 정중앙이다** — 입양 가능 목록에 올라 있는 Mission RISE 개체의 상세 페이지 하단 원문이 **"DDS is not able to remove the \"Apply to Adopt\" button at the bottom of this page. Please use this link to apply for foster instead"** 다(Clyde·Winston 두 건에서 동일 문구 확인). 앞 문장은 **"is currently available for foster or foster-to-adopt while legal proceedings continue. If the court ultimately allows these dogs to be adopted, his foster family will have the opportunity to finalize his adoption."** 이다. **「입양 신청 불가 · 포스터-투-어답트만 가능」이라는 상태를 담을 칸이 없어서, 그 설명을 소개문 맨 끝에 별표 두 개로 붙이고 버튼은 그대로 둔 것이다.** 지적이 아니라 질문으로 쓴다 — **「법원 결정 나기 전 단계를 지금 어디에 적어 두세요?」**

2. **법적 보전 중인 개체 대부분이 「영구 포스터」 칸에 들어가 있고, 그래서 사이트에서 보이지 않는다** — Buzz 의 개체 상태 분류는 사이트맵 기준 **8개**(`available`·`recovery-room`·`happy-tails`·`over-the-bridge`·`submitted`·`forever-foster`·`left-rescue`·`denied`)이고 **「보호조치·법적 보전」에 해당하는 항목이 없다.** 실측하면 Mission RISE 개체(Yoda 051126-330, Betty White 051126-304, Tax Fraud 051126-346 등)가 전부 **"I'm staying with the rescue furever!"**(= `forever-foster`) + **"I am not visible on the website."** 로 렌더된다. 한편 어떤 레코드에는 **"Legal Hold"** 라는 배지가 따로 붙어 있다 — **상태가 두 군데(분류 값 / 표시 배지)에 살고 서로 다른 말을 한다.**

3. **개체 이름 칸이 사건번호 필드를 겸하고 있고, 이미 주소와 내용이 어긋난 레코드가 나온다** — 게재명이 **`Clyde 051126-337`**, **`Jack 051126-277`**, **`Star 051126-341`**, **`Winston 051126-344`**, **`Addie 072226`** 처럼 **이름 + 인테이크 날짜(MMDDYY) + 사건 개체번호** 구조다. 그런데 **`/dog/button-051126-319/` 를 열면 레코드는 `Graham 051126-290`** 이고, **`/dog/tucker-051126-323/` 를 열면 레코드는 `Winston 051126-344`** 다. 같은 사건 안에서 **표기 규칙도 두 벌이 공존**한다(`button-051126-319` 와 `051126-319-button`, `marshmellow-051126` 와 `051126-marshmellow`). Mission RISE 레코드 72건 중 **22건이 중복 생성 흔적(`-2`~`-9` 접미사)** 을 갖고 있다.

4. **케어 경과가 전부 마케팅 산문 안에만 남아 있다 — 우리 소재 A 가 겨냥한 빈칸이 정확히 여기다** — Winston 소개문 원문: **"For the first few weeks I was the sad guy in the back of the kennel. The guy who wouldn't eat"**, **"For 3 weeks, if someone opened that door, I froze."**, **"After about four weeks at the shelter, one of DDS's wonderful fosters brought me home"**. **누군가 매일 관찰한 4주치 경과가 사후에 1인칭 이야기로 압축돼 소개문 필드에 들어가 있다.** 그런데 포스터 지원서는 **"Are you willing to provide written progress reports to the Rescue's representative?"** 와 **"Do you agree to provide the Rescue with an assessment of the dog's interaction with the potential adoptive family…"** 를 **약속 항목으로 받고 있다.** **약속은 서면화돼 있는데 그 보고를 받는 칸은 공개 자료 어디에도 없다.**

5. **상대는 결재자가 아니고, 가격이 1차 장벽도 아니다 — 이 콜은 통증 확인 콜로 설계해야 한다** — 결재선은 **Chrissy Scott(Founder·CEO·Board President)** 단독으로 보이고, Kelly Johnson 은 **인테이크 총괄**이다. 조직은 이미 **Buzz 에 공시가 기준 연 $1,188(월 $99 연납 / 월납 $139)** 를 쓰고 있고 연 수입은 **$164,392**(IRS BMF, 2024 과세기간)다. **「더 싼 도구」 프레임은 안 먹힌다.** 반면 Buzz 는 **웹사이트·개체·사람·기부·폼을 한 덩어리로 물고 있어** 전면 교체 비용이 크다 — **들어갈 자리는 교체가 아니라 「지금 Buzz 밖 종이·표·메신저로 새고 있는 조각」이다.**

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 조직명 | **Daisy's Dane Sanctuary**(자기 약칭 **DDS**) | 사이트 |
| 법적 지위 | **501(c)(3) 공익법인.** EIN **88-2587013**, IRS 면세 인정 **2023-11**, NTEE **D20**, 회계연도 **12월 결산**, **Form 990 제출 대상**(`filing_requirement_code=1`) | ProPublica API |
| 설립·가동 | **2022-06 활동 개시.** 창립자 소개문 원문: **"rescuing and rehoming over a 150 Great Danes since opening in June of 2022"**. 법인 면세 인정은 1년 5개월 뒤(2023-11) | 사이트 Our Amazing Team, ProPublica |
| 소재지 | **Pleasant Hill, Missouri**(IRS 등록·사이트 일치). 자기표기 권역은 **"the Kansas City, Missouri area"** | ProPublica, 사이트 |
| **성격** | **그레이트데인 단일 견종 전문 포스터 기반 레스큐.** 원문: **"a foster-based, 501c3 Great Dane rescue dedicated to rehabilitating all Danes that come through our doors"** | 사이트 About |
| **시설(중요·표기 충돌)** | **시설이 있다.** 2026-05 보도 원문: **"Half are within her Pleasant Hill operations center, the other half are at the Pleasant Hill Animal Shelter."** 개체 소개문에도 **"the quiet hallway"**, **"the party kennel room"**, **"kennel run"** 이 나온다. **다만 창립자 소개문은 여전히 "We plan to establish a physical facility"(미래형)** 이고, 2025-05 보도는 **"Chrissy has her garage transformed as home base"** 였다. **시설 확보 시점은 미확인 — 사이트 문구가 현실을 못 따라간 상태**(추론) | FOX4(2026-05), FOX4(2025-05), 사이트, 개체 페이지 |
| 서비스 권역 | **KC metro 및 인접주 우선, 타주도 가능.** 원문: **"primarily considers adoptive families in the Kansas City Metro area and surrounding states due to travel logistics and the availability of our volunteer team. However, we do adopt to other states as well—please note that out-of-state adopters are fully responsible for arranging and covering the cost of transportation."** 2025-05 시점 자기진술은 **"getting calls from all over the U.S."** | 사이트 Adoption Process, FOX4(2025-05) |
| **공개 팀(11명)** | **Chrissy Scott**(Founder and CEO, Board President) · **Denna Kilgore**(Care Specialist) · **Wendy Papes**(Placement Coordinator) · **Kelly Johnson**(Intake & Rescue Program Manager) · **Sarah Conway** · **Brettney Casey** · **Pamela Herbert** · **Abigail Paulson**(이상 Placement Coordinator) · **Tammy Minshall** · **Karen Roberts** · **Valeria Price**(이상 Board Member) | 사이트 Our Amazing Team |
| **직함 표기 불일치** | **Wendy Papes 는 직함이 "Placement Coordinator" 인데 본인 소개문은 "As Adoption Coordinator for DDS" 라고 쓴다.** 조직 내 역할 명칭이 정리돼 있지 않다는 신호(추론) | 사이트 Our Amazing Team |
| **실제 시스템 계정(10개)** | `abigail-paulson` · `chrissy` · `denna` · **`fostertest`** · `jess-pace` · **`kelly-johnson`** · `sarah-conway` · `stephanie-moore` · `taylor-scott` · `wendy-papes` | `wp-sitemap-users-1.xml` |
| **계정과 팀 명단의 어긋남(중요)** | **팀 페이지에 없는 계정 3개**(`jess-pace`·`stephanie-moore`·`taylor-scott`)와 **계정 없는 팀원 5명**(Brettney Casey·Pamela Herbert·이사 3명)이 동시에 존재한다. **Placement Coordinator 5명 중 계정이 있는 사람은 3명뿐이다** — 나머지 2명이 어디서 일하는지가 콜 확인 항목. `fostertest` 는 **테스트 계정** | 실측 대조, 추론 |
| 연락 채널 | `i***@daisysdanesanctuary.com` · `chrissy@` · `wendy.papes@` · `Kelly.Johnson@` · 대표번호 1건. **조직 도메인 메일을 개인별로 발급해 쓴다** | 사이트 About·Team·Contact |
| 소셜 | Facebook `DaisysDaneSanctuary` · Instagram `@daisys_dane_sanctuary` · TikTok `@daisys.dane.sanct`. **검색상 `@daisysdanesanctuary` TikTok 도 잡힌다 — 핸들 2개 병존 가능성, 미확인** | 사이트 푸터, 검색 |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| **IRS BMF 등재값(유일한 공개 수치)** | **수입 $164,392 · 자산 $76,536**(과세기간 `2024-12`, 데이터 소스 `current_2026_08_19`) | ProPublica API |
| **재무 공시 수준** | **990 상세를 볼 수 없다.** ProPublica 의 `filings_with_data` 가 **빈 배열**이다. GuideStar 는 **2024 재무·임원 데이터가 유료 리포트($125)** 로만 열린다. **연도별 수입/지출 추이를 만들 수 없다** | ProPublica API, GuideStar |
| 재원 구성 | **기부 + 입양비.** 자기표기: **"rely on donations and our volunteers' hard work"** | 사이트 Home |
| **입양비(고정가 공시)** | **퍼피 0–2개월 $800 · 3–12개월 $800 · 1–3세 $700 · 3–7세 $700 · 7세 이상 $700.** 특수 needs 는 건별. **포함 항목**: 광견병(1년)·DHLP-Parvo-Corona·보데텔라·ProHeart 6 or 12·심장사상충 검사·분변 검사·중성화(연령 적합 시)·마이크로칩 | 사이트 Adoption Fees |
| **입양 신청 수수료(중요)** | **$25 비환불, 신청서 작성 「전에」 결제한다.** 원문: **"A $25 non-refundable application fee is required to begin the adoption process."** 사유도 공개돼 있다 — **"We receive hundreds of applications each month, and many are never completed. The application fee helps ensure we are dedicating our limited volunteer time and resources to families who are serious"** | 사이트 Adoption Application(페이지 제목은 **"App Fee"**) |
| 기부 채널 | **사이트 내장 GiveWP 폼 + Venmo + PayPal.me + CashApp + Amazon Wishlist.** 사용처 안내를 금액대별로 공시한다($25 발톱·진통제·광견병 ~ $1,000+ 심장사상충 치료·대수술) | 사이트 Donate |
| **결제 폼 레코드 3,904건(주의 필요)** | 사이트맵상 `give_forms` 포스트가 **3,904건**이다. 구조를 보면 **개체 1마리당 후원 폼 + 입양비 폼 2종이 자동 생성**된다(`donations/alastor/`, `donations/alastor-adoption/`). 개체 레코드는 679건이므로 **폐기·삭제된 개체의 결제 폼이 그대로 남아 있을 개연**(추론). `donations/test-cat/` 같은 테스트 폼도 섞여 있다. **직접 확인 필요** | 사이트맵, 추론 |
| **현 SW 지출(참조가)** | **Buzz 공시가 월 $139, 연납 시 월 $99 = 연 $1,188.** 사용자 수·개체 수 과금 없음, 웹사이트·호스팅 포함. **DDS 가 어떤 조건으로 쓰는지는 미확인이나 이 구간이 기준선이다** | Buzz 공식 Pricing |
| **시사점** | **가격이 1차 장벽이 아니다.** 연 수입 $16만 조직이 이미 **연 $1,188 수준의 통합 SW 를 쓰고 있다.** 반면 Buzz 가 **웹사이트까지 물고 있어** 전면 교체는 사이트 이전을 동반한다. **우리가 들어갈 자리는 「Buzz 를 대체」가 아니라 「Buzz 가 안 담는 상태·경과를 담는 것」이다** | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **누적 개체 레코드** | **679건** | 2026-09-15 실측(`wp-sitemap-posts-dog-1.xml`). 2022-06 개시 기준 **연 약 160건 페이스**. 중복·테스트 레코드 포함 |
| **현재 공개 입양 가능** | **11마리** | 2026-09-15 실측(Available Danes 1·2페이지). **679건 중 공개된 것은 1.6% 뿐** |
| **공개 11마리의 상태 배지** | **I Need a Foster 5** (Clyde·Jack·Star·Tucker·Winston) · **Pending Adoption 3** (Alastor·Jesse·Penelope) · **Meet Me Now 1** (Addie) · **Ready Now! 1** (Dolly / Diamond) · **배지 없음 1** (Hank) | 실측. **입양 가능으로 걸려 있는 11마리 중 5마리가 「포스터가 없다」** |
| **Recovery Room(입양 준비 중) 공개** | **1건 — `Dog Test 091426`**(사진 없음) | 실측. **콜 전날(2026-09-14) 날짜가 박힌 테스트 레코드가 공개 페이지에 그대로 떠 있다.** 누군가 지금 Buzz 를 만지고 있다는 신호(추론) |
| **Mission RISE(2026-05-11) 레코드** | **72건** | 슬러그에 `051126` 이 박힌 개체 실측. 개·외래동물 포함 |
| **그중 중복 생성 흔적** | **22건**(슬러그 `-2`~`-9` 접미사) | 예: `butters-051126-006-2` 와 `butters-051126-006-3`, `waffles-051126-326-3`. **한 사건 코호트를 지우고 다시 넣은 흔적** |
| **그중 공개 입양 가능** | **5마리**(Clyde·Jack·Star·Tucker·Winston) | 나머지 약 67건은 **"I am not visible on the website."** |
| **비-개 개체가 dog 레코드에 들어 있다** | `el-chapo-tarantula-051126-805`(타란툴라) · `laundering-051126-800` · `dui-051126-801` · `arson-051126-802` · `narcos-051126-803` · `tax-fraud-051126-346` · `entering-051126-348` | 2026-05 압수 시 동반 구조된 **코카투 2·보아뱀 1·전갈 4·타란툴라 1·슈가글라이더 1** 로 보인다(범죄명 작명, **추론**). **개체 종류를 가릴 칸이 없어 전부 「dog」로 들어갔다** |
| **사람 레코드 — 포스터** | **current 219 · closed 410** | 2026-09-15 실측(`/foster_status/` 아카이브 페이지네이션). **누적 629건** |
| **사람 레코드 — 입양자** | **current 1,017 · DNA(Do Not Adopt) 8** | 동일 실측(`/adopter_status/`) |
| **사람 레코드 — 자원봉사자** | **current 1,182 · closed 51~100**(3~4페이지) | 동일 실측(`/volunteer_status/`). **사람 레코드 총계가 개체 레코드의 4배 이상이다** |
| 신청 유입(자기표기) | **"hundreds of applications each month"** | 사이트 App Fee. **월 수백 건이 $25 유료 관문 앞에 온다는 뜻** |
| 누적 입양(자기표기) | **"over a 150 Great Danes since opening in June of 2022"** | 창립자 소개문. **게시 시점이 명시돼 있지 않아 최신값이 아니다 — 미확인** |
| 라이브 릴리스율 | **미확인** | Shelter Animals Count 제출 흔적을 찾지 못했다 |
| **외부 입양 플랫폼 게재** | **Petfinder·Adopt-a-Pet 게재를 확인하지 못했다** | 검색 및 Adopt-a-Pet 의 Pleasant Hill 단체 목록에서 확인 안 됨. **Buzz 가 제공하는 자동 연동("automatic updates to your website, PetFinder & Adopt-a-Pet")을 안 쓰고 있을 개연**(추론). **직접 확인 필요** |
| **장기 체류 사례** | **`Dolly / Diamond`(Shepherd - German, 6세)** — 상태 **Available**, 배지 **Ready Now!**, **사진 7장이 전부 2024-01 업로드분** | 실측. **약 20개월째 같은 사진으로 「입양 가능」에 걸려 있다.** 2024-01 Miami County(KS) 사건의 Shepherd-mix 로 보인다(**추론**). **데인 전문 레스큐에 남은 유일한 비-데인 개체** |
| 입양 절차 | **4단계** — ①Apply(**$25 선결제 → 본 신청서 → 서류 업로드**) ②Review(**5–7영업일** 검토 후 이메일로 전화 인터뷰 일정) ③Home Check(**뒷마당·집 영상 전송** 또는 방문) ④Meet & Greet(**DDS 팀원이 개를 데리고 신청자 집으로 방문**) | 사이트 Adoption Process |
| 제출 서류 | **운전면허증 사본 + 집·마당 영상** | 사이트 App Fee·Foster Application |
| 공개 이벤트 | **2026년 9월 「No Events」** | 사이트 Event Calendar 실측. 등록된 이벤트 레코드 자체는 5건(`bonnie`·`chief`·`jim-s-puppy-meet-and-greet`·`dds-garage-bake-sale`·`relay-for-rescue`) — **밋앤그릿을 공개 캘린더 이벤트로 만들어 쓴 흔적** |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **개체·사람 관리 SW** | **Buzz to the Rescues(`buzztotherescues.com`) 로 확정.** 폼 자기입력 `Buzz` 와 일치. 푸터 **"Powered By: Buzz"**, 테마 `wp-content/themes/buzz-rescues/`, 아카이브의 작성자 표기 **"Posted By: buzz"** | 사이트 원문 HTML |
| **Buzz 의 커버 범위(중요)** | **경쟁 구도가 Chameleon·ShelterLuv·Pawlytics·Petstablished 가 아니다.** Buzz 는 **개체관리 + 사람(입양자·포스터·자원봉사자) + 모금 + 리포팅 + 웹사이트**를 한 덩어리로 판다. 자기표기에 **"Pair animals with fosters & provide role-based, customized access to edit profiles"**, **"Attach files, write notes & record all actions in each animal's Timeline"**, **"Track milestones & communication in detailed timelines"** 가 이미 들어 있다. **우리 가설(분산 케어 추적)을 정면으로 주장하는 제품이다** | Buzz 공식 사이트 |
| **Buzz 의 개체 상태 분류(핵심)** | 사이트맵 taxonomy 기준 **8개** — `available` · `recovery-room` · `happy-tails` · `over-the-bridge` · `submitted` · `forever-foster` · `left-rescue` · `denied`. **「보호조치·법적 보전」·「의료 격리」·「입양 보류」에 해당하는 값이 없다** | `wp-sitemap-taxonomies-status-1.xml` |
| **그래서 벌어진 일 ①** | **법적 보전 개체가 `forever-foster` 에 들어가 있다.** `Yoda 051126-330`·`Betty White 051126-304`·`Tax Fraud 051126-346`·`Button 051126-319` 등이 전부 **"I'm staying with the rescue furever!"** + **"I am not visible on the website."** 로 렌더된다 | 개체 페이지 실측 |
| **그래서 벌어진 일 ②** | **표시 배지로 별도 땜질했다.** `/dog/button-051126-319/` 에는 **"Legal Hold"** 배지가 붙어 있다. **분류 값(영구 포스터)과 배지(법적 보전)가 서로 다른 말을 한다** | 개체 페이지 실측 |
| **그래서 벌어진 일 ③(가장 중요)** | **버튼을 못 지워서 소개문 끝에 안내문을 붙였다.** Clyde·Winston 페이지 공통 원문: **"DDS is not able to remove the \"Apply to Adopt\" button at the bottom of this page. Please use this link to apply for foster instead"** / **"…to apply to Foster-to-Adopt instead"** | 개체 페이지 실측 |
| **개체 식별 규칙** | **이름 + 인테이크 날짜(MMDDYY) + 사건 개체번호.** `Clyde 051126-337`, `Addie 072226`, `Penelope 081626`. **같은 사건 안에서 순서가 뒤집힌 두 벌이 공존** — `button-051126-319` vs `051126-319-button`, `marshmellow-051126` vs `051126-marshmellow`. 번호 체계도 제각각(3자리 270–348 / 앞자리 0 붙은 002·003·004·006 / 500·518 / 800번대 / 한 자리 7·8 / 번호 없음 `051126-kiwi`) | 사이트맵·개체 페이지 실측 |
| **레코드 정체성 어긋남(2건 확인)** | **`/dog/button-051126-319/` → 레코드는 `Graham 051126-290`** · **`/dog/tucker-051126-323/` → 레코드는 `Winston 051126-344`**. 별도로 `tucker-051126-323-2` 에 진짜 Tucker 가 있다. **레코드를 재활용해 다른 개를 덮어쓴 흔적**(추론) | 개체 페이지 실측 |
| **중복·테스트 레코드** | `alastor` 와 **`alastordonotuse`** 가 **둘 다 살아 있다**(후자도 공개 렌더됨). `dog-test-091426` 는 Recovery Room 공개 목록에 떠 있다. 결제 폼에도 `donations/test-cat/`, 사용자 계정에도 `fostertest` 가 있다 | 사이트맵·개체 페이지 실측 |
| **필수 필드 누락** | `Graham 051126-290` 의 나이 표기가 **"0 Days Old"**(생년월일 공란). `Addie 072226` 의 생년월일은 **"01/01/2024"**(1월 1일 = 자리 채움값으로 보임, **추론**) | 개체 페이지 실측 |
| **문서 업로드 = JotForm(외부)** | **3종 확인.** ①포스터·입양 서류 **`form.jotform.com/DDSUser/uploadportal`**(운전면허 + 집·마당 영상) ②자원봉사 **`form.jotform.com/DDSUser/VolunteerUploadPortal`**(운전면허) ③Mission RISE 제보·소유권 주장 **`form.jotform.com/261307712615048`**. **신원 서류와 홈체크 영상이 Buzz 밖 별도 계정에 쌓인다** | 사이트 원문, KCTV 보도 |
| **자원봉사 교대 = SignUpGenius(외부)** | Mission RISE 자원봉사 모집이 **`signupgenius.com/go/10C0A4FAAAE2CA1FBC43-64032983-mission`** 로 나간다. **Buzz 의 자원봉사 기능과 별도로 돈다** | KCTV·FOX4 보도 |
| **기부 = GiveWP(사이트 내장) + 외부 4종** | Venmo · PayPal.me · CashApp · Amazon Wishlist 를 병렬로 건다 | 사이트 Donate |
| **이벤트 = All-in-One Event Calendar** | `ajde_events` 포스트 타입. 레코드 5건 | 사이트맵 |
| **포스터 신청 폼이 3벌이고 1벌은 죽어 있다(중요)** | ①**`/foster-application/`**(메뉴, 200) — **업로드 포털 안내 있음** ②**`/foster-app/`**(개체 페이지에서 링크, 200) — **업로드 포털 안내 없음** ③**`/dog-foster/`** — **404**. 그런데 **③은 「Consider Fostering」의 "DDS Foster Application" 과 「Is Fostering Right For Me?」의 "Apply to Foster a DDS Dane" 두 개의 포스터 모집 페이지가 가리키는 링크다** | HTTP 실측 |
| **그 결과** | **포스터를 모집하는 안내 페이지 두 곳의 신청 버튼이 404 로 떨어지고, 개체 페이지가 보내는 폼에는 서류 업로드 안내가 빠져 있다.** 조직이 **Mission RISE 개체 5마리의 포스터를 공개적으로 찾고 있는 중**이다 | 실측 조합 |
| **입양 신청 동선이 3단 분리** | ①`/dog-adoption/`(제목 **"App Fee"**)에서 **$25 카드 결제** → ②본 신청서 → ③**"you will be prompted to upload required documents to our secure portal"**. **결제·문항·서류가 각각 다른 화면(그리고 최소 1개는 다른 서비스)에 있다** | 사이트 App Fee |
| **포스터가 서면 약속한 항목** | 포스터 지원서 원문: **"Are you willing to provide written progress reports to the Rescue's representative?"**, **"Do you agree to provide the Rescue with an assessment of the dog's interaction with the potential adoptive family and give an impression of the likely success of such adoption?"**, **"Are you willing and able to evaluate the personality and temperament of a foster dog to determine the best type of adoptive home?"** | 사이트 Foster Application |
| **그 보고를 받는 경로** | **공개 자료에서 전용 폼·채널을 찾지 못했다.** 신청 시점 폼만 있고 **배치 이후 경과를 받는 창구가 없다. 우리 소재 A 가 겨냥한 빈칸이 정확히 여기다** | 실측(부재 확인) |
| **사람 레코드가 공개 인덱싱된다** | `/adopter_status/current/` 같은 taxonomy 아카이브가 **로그인 없이 열리고 검색엔진에도 걸린다.** 다만 **표시되는 것은 이름(First name)과 레코드 생성일까지**이고, 개별 `/adopter/…/` 페이지는 홈 내용으로 대체 렌더돼 상세는 노출되지 않는다. **개체 `status` 아카이브는 반대로 전부 404 다** | 실측 |
| **정리** | 상대는 **연 $1,188 짜리 통합 플랫폼을 이미 쓰고 있고**, 그 플랫폼이 **웹사이트까지 쥐고 있다.** 그럼에도 **서류(JotForm 3종)·교대(SignUpGenius)·법적 보전 상태(소개문 안내문)·케어 경과(소개문 산문)** 는 전부 그 밖으로 새고 있다. **우리 자리는 교체가 아니라 「새는 네 조각」이다** | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| 결정 라인 | **Chrissy Scott(Founder and CEO, Board President) 단독으로 보인다.** 창립자이자 CEO 이자 이사회 의장을 겸한다. **콜 상대인 Kelly Johnson 은 Intake & Rescue Program Manager 로 실무 총괄이며, 결재자가 아닐 개연이 높다**(추론). **이 콜은 결재 확보 콜이 아니라 통증 확인 콜로 설계한다** |
| 이사회 | 사이트 표기 기준 **Tammy Minshall · Karen Roberts · Valeria Price 3인**. **990 상세가 공개돼 있지 않아 법적 이사회와의 일치 여부는 미확인** |
| 전결 범위 | **미확인.** 지출 승인 규정을 확인할 공개 문서가 없다 |
| **병목 ①(전환 비용)** | **현행 Buzz 가 웹사이트를 함께 쥐고 있다.** 도메인 `daisysdanesanctuary.com` 전체가 Buzz 테마로 돌아간다. **개체 679건 + 사람 레코드 2,400여 건 + 결제 폼 3,904건**이 같은 시스템 안에 있다. **「대체」 제안은 사이트 이전 이야기가 되어 즉시 무거워진다** |
| **병목 ②(기준 가격이 낮지 않다)** | **이미 연 $1,188(공시가) 수준을 쓰고 있다.** 반대로 말하면 **추가 지출 여력의 기준선이 그 근처**라는 뜻이고, 연 수입 $164k 대비 이미 1% 가까이 SW 에 들어간다. **두 번째 구독을 붙이려면 「Buzz 가 안 하는 일」이 명확해야 한다** |
| **병목 ③(실무 분산)** | **Placement Coordinator 가 5명인데 시스템 계정은 3명분뿐이다.** 반대로 팀 페이지에 없는 계정이 3개 있다. **누가 실제로 매일 레코드를 만지는지가 외부에서 안 잡힌다** — 콜에서 먼저 잡아야 한다 |
| **병목 ④(시점)** | **Mission RISE 법적 절차가 진행 중이다.** 70여 마리의 처분이 법원에 걸려 있는 동안은 **조직 전체가 그 사건에 물려 있다.** 새 도구 검토에 쓸 여력이 크지 않을 개연(추론) |

## 6. Kelly Johnson 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| 성명·직책 | **Kelly Johnson · Intake & Rescue Program Manager** | 사이트 Our Amazing Team |
| 이메일 | **`K***@daisysdanesanctuary.com`** — 리드 도메인과 일치 | 사이트 원문 HTML(mailto) |
| **시스템 계정** | **있다 — `/author/kelly-johnson/`.** 본인이 Buzz 를 직접 쓰는 실사용자다 | `wp-sitemap-users-1.xml` |
| **소개문** | **없다.** 팀 페이지에서 사진·자기소개문이 실린 사람은 **Chrissy Scott · Denna Kilgore · Wendy Papes 3명뿐**이고, Kelly 는 **이름·직함만** 올라 있다. **비교적 최근 합류했거나 소개문을 아직 안 낸 상태**(추론). **직접 확인 필요** | 사이트 |
| **담당 업무 범위(직함 기준)** | **인테이크(들어오는 쪽) + 레스큐 프로그램.** 이 조직에서 인테이크는 ①개인 surrender(`/surrender-your-dane/`) ②재홈 상담(`/rehome-your-pet/`) ③**대형 압수 사건 대응** 세 갈래다. **2026-05 Mission RISE 는 본인 직무의 정중앙이다**(추론) | 사이트 메뉴 구조, 추론 |
| 조직 내 인테이크 조직 언급 | 창립자 인용에 **"From transport teams, intake coordinators, fosters, veterinary partners, cleaners and volunteers... every single person stepped up"** — **인테이크 코디네이터가 복수로 존재한다** | KCTV(2026-05-13) |
| 경력·전문성 | **미확인.** LinkedIn 프로필을 확인하지 못했다 | — |
| 보수 | **미확인.** 990 상세가 공개돼 있지 않다. 조직 자기표기는 **"our volunteers' hard work"** 로 자원봉사 기반이다 | 사이트, ProPublica |
| **콜 화법 판단** | **인테이크 담당에게 먹히는 축은 「입양 성사」가 아니라 「들어온 뒤 어디까지 왔는지」다.** 조직의 공개 언어도 그렇다 — 상태 배지가 **"I Need a Foster" / "Meet Me Now" / "Ready Now!"** 로 **준비 단계** 어휘다. **「지금 몇 마리가 어느 단계인지 한 화면에서 보시나요」가 이 상대에게 가장 자연스러운 진입점**(추론, 초반 반응 보고 조정) | 사이트, 추론 |
| **다루는 순서 주의** | 결재선이 Chrissy 이므로 **가격·계약 이야기를 이 콜에서 앞세우면 「대표에게 물어보겠다」로 끝난다.** 이 콜의 성과 기준은 **①실제 워크플로 확보 ②Chrissy 가 들어오는 2차 접점 합의** 두 가지다 | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| 2022-06 | **활동 개시.** 창립자 소개문의 기점 | 사이트 |
| 2023-11 | **IRS 501(c)(3) 면세 인정** | ProPublica |
| **2024-01~02** | **Miami County, Kansas(Louisburg) 동물학대 사건.** 그레이트데인 **사체 10구** 확인, **생존 데인 9마리 + Shepherd-mix 1마리** 를 DDS 가 인수. 창립자가 **"the worst case of neglect she's ever seen"** 로 표현. **이 사건으로 Denna Kilgore 가 합류**(본인 소개문: **"My journey with DDS began during the Miami County case"**) | KCTV(2024-02), KSNT, 사이트 |
| 2025-05-06 | **FOX4 「Pay it Forward」 수상.** 자원봉사자 인용: **"Chrissy has her garage transformed as home base, but Scott is looking to expand."** 그리고 **"Now she's getting calls from all over the U.S."** | FOX4(2025-05-06) |
| **2026-05-06** | **대규모 인테이크 예고 통보.** 창립자 진술: 5일 전부터 물자 조달·조율 시작 | KCTV |
| **2026-05-11** | **Granby(Newton County, MO) 압수.** 8시간 작업으로 **개 75마리(그레이트데인 퍼피 36 + Doodle 1 포함)** + **외래동물 9종** 보호조치. 일부 보도는 **83마리·사체 5구** 로 전한다. 사육자 **동물학대·방치 기소**. 창립자 진술: **"I didn't know it was going to happen so fast, but the judge signed it. The conditions were so bad, the judge signed it immediately and we were given two days' notice."** 그리고 **"I've taken a lot of Great Danes from the breeder before…"**(이전부터 거래가 있던 사육장) | KCTV, FOX4, KOAM |
| **2026-05-13** | **약 99% 가 의료 처치 필요.** 수용을 **Pleasant Hill 운영센터 + Pleasant Hill Animal Shelter 두 곳**으로 분산. **전 개체 입양 금지**(보호조치 유지). 창립자: **"This setup is temporary while we work to clear the dogs medically, monitor for contagious illness, and begin safely moving dogs into foster homes."** | KCTV |
| **2026-09-15(콜 3일 전, 실측)** | **Mission RISE 개체 5마리가 「포스터 / 포스터-투-어답트」 로 공개 전환**돼 있다. 개체 페이지 원문: **"currently available for foster or foster-to-adopt while legal proceedings continue."** **즉 법적 절차는 아직 안 끝났고, 배치만 시작됐다.** 나머지 약 67건은 비공개 상태 | 개체 페이지 실측 |
| **2026-09-14(콜 전날)** | **Recovery Room 공개 목록에 `Dog Test 091426` 테스트 레코드가 생성돼 그대로 떠 있다** | 실측 |
| — | **조직에 대한 부정 보도·분쟁은 확인되지 않았다.** 다만 **Facebook·Instagram·TikTok 을 열지 못해 완전 확인은 아니다** | 검색 |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

- **법적 보전 상태를 담을 칸이 없어 「영구 포스터」로 대신 쓰고 있다** — Mission RISE 개체가 `forever-foster`(= "I'm staying with the rescue furever!")로 들어가 있고, 일부에만 "Legal Hold" 배지가 따로 붙는다. **분류 값과 표시 배지가 어긋난다.** **이 콜 제품 접점의 정중앙. 반드시 확인.**
- **「입양 신청 불가」를 버튼이 아니라 소개문 안내문으로 처리하고 있다** — 원문 **"DDS is not able to remove the \"Apply to Adopt\" button…"**. **도구가 못 하는 일을 사람이 문장으로 메운 자리다. 이 문구를 누가 개체마다 붙이는지가 접점.** 확인 필요.
- **약 67마리가 「사이트에 안 보이는」 상태로 시스템 안에 있다** — 그러면 **그 67마리의 오늘 상태는 어디서 보는가.** 별도 표·문서가 있을 개연이 매우 높다(추론). **여기서 스프레드시트가 나오면 우리 가설이 맞는 것이고, 안 나오면 Buzz 내부 뷰를 쓰는 것이다.** 확인 필요.
- **개체 이름이 사건번호 필드를 겸한다** — `Clyde 051126-337`. 같은 코호트에서 **표기 순서가 두 벌**(`button-051126-319` / `051126-319-button`), **번호 체계가 최소 5종**. 확인 필요.
- **레코드 정체성이 어긋난 사례가 2건 나왔다** — `/dog/button-051126-319/` → `Graham 051126-290`, `/dog/tucker-051126-323/` → `Winston 051126-344`. **기존 레코드를 재활용해 다른 개를 덮어쓴 흔적**(추론). 확인 필요.
- **한 코호트 72건 중 22건에 중복 생성 흔적이 있다** — `butters-…-2` 와 `butters-…-3` 처럼 같은 개체가 3번까지 만들어진 자국. **72마리를 하루에 넣는 작업이 한 번에 안 끝났다는 뜻**(추론). 확인 필요.
- **비-개 개체가 dog 레코드에 들어가 있다** — 타란툴라·전갈·보아뱀·슈가글라이더로 보이는 800번대 레코드. **종을 가릴 칸이 없어 전부 개로 들어갔다.** 사건 대응에서만 생기는 문제이나, **같은 사건이 또 오면 반복된다.** 먼저 꺼내지 않는다.
- **케어 경과가 소개문 산문 안에만 있다** — Winston 원문 **"For 3 weeks, if someone opened that door, I froze."**, **"After about four weeks at the shelter, one of DDS's wonderful fosters brought me home"**. **매일의 관찰이 사후에 한 명의 글로 압축된다. 그 관찰이 그때그때 어디에 적히는지가 빈칸.** 확인 필요.
- **포스터가 「서면 경과 보고」를 지원서에서 약속한다** — **"Are you willing to provide written progress reports to the Rescue's representative?"** **약속 문항은 있는데 보고를 받는 폼·채널이 공개 자료에 없다.** 확인 필요(1순위).
- **포스터가 「입양 후보 가정과의 상호작용 평가」까지 약속한다** — **"…give an impression of the likely success of such adoption"**. **입양 결정의 근거 절반이 포스터 머릿속에 있다는 뜻이다. 그 판단이 어디에 적혀 코디네이터에게 넘어가는가.** 확인 필요.
- **포스터 모집 동선이 지금 끊겨 있다** — `/dog-foster/` 가 **404** 인데 포스터 안내 페이지 두 곳이 그 링크를 건다. 반면 개체 페이지는 `/foster-app/` 로 보내고, 그 폼에는 **서류 업로드 안내가 빠져 있다**(`/foster-application/` 에만 있다). **폼이 3벌인 상태로 관리되고 있다.** 확인 필요.
- **신원 서류·홈체크 영상이 JotForm 3개 포털에 따로 쌓인다** — `uploadportal`·`VolunteerUploadPortal`·Mission RISE 제보 폼. **개체·사람 레코드와 연결되지 않는다. 나중에 다시 찾을 일이 있는지가 접점.** 확인 필요.
- **자원봉사 교대가 SignUpGenius 로 나간다** — Buzz 에 자원봉사 기능이 있는데도 별도로 돈다. **사건 대응 때만 그런지, 상시인지** 확인 필요.
- **입양 신청이 3단으로 쪼개져 있다** — $25 결제 → 본 신청서 → 서류 포털. **월 수백 건이 들어온다("hundreds of applications each month"). 세 조각을 누가 합치는가.** 확인 필요.
- **Placement Coordinator 5명 중 시스템 계정은 3명분뿐이다** — Brettney Casey·Pamela Herbert 계정이 없다. 반대로 팀 페이지에 없는 계정 3개(`jess-pace`·`stephanie-moore`·`taylor-scott`)가 있다. **도구를 바꾸면 같이 바뀌어야 하는 사람이 몇 명인지가 안 잡힌다.** 확인 필요.
- **테스트 레코드가 운영 데이터에 섞여 있다** — `Dog Test 091426`(공개 목록 노출) · `alastordonotuse` · `donations/test-cat/` · 계정 `fostertest`. **콜 전날 만들어진 것이 하나 있다 — 지금 뭔가를 시험 중일 개연**(추론). **지적이 아니라 "요즘 뭐 정리 중이세요?" 로 여는 재료.**
- **필수 필드가 비어 있는 레코드가 있다** — `Graham 051126-290` 나이 **"0 Days Old"**, `Addie 072226` 생년월일 **"01/01/2024"**. **사건 개체는 생년월일을 알 수 없는 게 정상이므로, 그 공란을 어떻게 다루는지가 접점.** 확인 필요.
- **20개월째 같은 사진으로 「입양 가능」에 걸린 개체가 있다** — `Dolly / Diamond`, 사진 전부 2024-01. **장기 체류 개체를 언제 다시 들여다보는 장치가 있는지.** 민감하므로 사례를 특정해 지적하지 않는다.
- **외부 입양 플랫폼 게재를 확인하지 못했다** — Buzz 가 Petfinder·Adopt-a-Pet 자동 연동을 제공하는데도 게재가 안 잡힌다. **안 쓰는 것인지, 우리가 못 찾은 것인지** 확인 필요.

## 미확인 요약 (콜에서 확인할 것)

1. **사이트에 안 보이는 약 67마리(Mission RISE)의 오늘 상태를 지금 어디서 조회하는가** — Buzz 안의 내부 화면인가, 별도 스프레드시트·문서인가. **누가 갱신하고 누가 보는가.** (이 콜의 1순위)
2. **포스터 가정이 「지금 이 아이 상태」를 무슨 경로로 보내오는가** — 지원서에서 **"written progress reports"** 를 약속받는데, 배치 이후 그 보고를 받는 폼·채널이 공개 자료에 없다. 문자·메일·Facebook 메신저 중 어디인가, **받아서 정리하는 사람이 누구인가.**
3. **포스터의 입양 적합성 판단이 코디네이터에게 어떻게 넘어가는가** — 지원서 원문이 **"give an impression of the likely success of such adoption"** 이다. **말로 넘기는가, 적어서 넘기는가, 어디에 남는가.**
4. **법적 보전 상태를 지금 무엇으로 구분하는가** — `forever-foster` 분류와 "Legal Hold" 배지가 어긋난다. **둘 중 어느 쪽이 내부 기준인가, 법원 결정이 나면 무엇을 몇 군데 고쳐야 하는가.**
5. **개체 이름의 날짜·번호 규칙을 누가 정하고 누가 입력하는가** — 72건을 하루에 넣을 때 규칙이 두 벌로 갈렸다. **압수 현장에서 붙는 번호인가, DDS 가 붙이는가.**
6. **포스터 신청 폼 3벌 중 어느 것이 정본인가** — `/foster-application/` · `/foster-app/` · **404 인 `/dog-foster/`**. **두 개의 포스터 모집 페이지가 죽은 링크를 걸고 있다는 사실을 알고 있는가.** (지적이 아니라 "어느 쪽으로 받으시는 게 맞아요?" 로 묻는다)
7. **입양 신청 3단(결제 → 신청서 → JotForm 업로드)을 누가 합치는가** — 월 수백 건이 온다. **$25 결제자와 신청서 제출자와 서류 업로드자를 어떻게 매칭하는가.**
8. **Placement Coordinator 5명의 업무 분담과 계정 현황** — 계정 있는 3명과 없는 2명의 차이가 무엇인가. **신청 건 배정은 어떻게 되는가.**
9. **Petfinder·Adopt-a-Pet 에 올리는가** — Buzz 연동을 쓰는지, 안 쓴다면 이유가 무엇인지. **개를 보여주는 창구가 자체 사이트 + Facebook 뿐인가.**
10. **결재·예산** — Buzz 계약 갱신 시점이 언제인가(공시가 연 $1,188 기준). **Chrissy Scott 승인이 필요한 금액 기준선이 있는가.** 금액은 먼저 꺼내지 않고 **「여기에 주당 몇 시간 쓰시나요」로 우회**한다.
11. **다루지 말 것** — ①Mission RISE 의 **법적 절차 전망·결과 예측**을 묻거나 논평하기(진행 중인 형사 사건이다) ②"Apply to Adopt 버튼"·404 링크·테스트 레코드를 **틀렸다고 지적**하기 ③2026-05 수용 규모를 **감당 못 할 일을 벌였다**는 뉘앙스로 프레이밍하기 ④`Dolly / Diamond` 의 장기 체류를 **사례로 특정**해 언급하기 ⑤무급·자원봉사 운영을 **인력 부족**으로 규정하기.
