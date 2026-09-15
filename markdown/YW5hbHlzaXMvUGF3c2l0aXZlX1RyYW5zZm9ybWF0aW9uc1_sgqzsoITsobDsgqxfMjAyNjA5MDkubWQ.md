# Pawsitive Transformations 사전조사

- 작성일: 2026-09-09 / 목적: Lauren 콜 준비(미팅 2026-09-22) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Foster-based rescue", "role": "Executive director or founder", "system": "Proprietary software", "fosters": "1–10"}` · 유입 소재 **B**(임시보호자 업데이트 수집) · 폼 제출 메일 `i***@pawsitivetransformations.org`
- **조직 확정 · 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: 조직 사이트(`pawsitivetransformations.org`)는 **React SPA(Vite 번들)** 라 원문 HTML 에 본문이 없다. 본문의 사이트 인용은 전부 **리더 프록시(`r.jina.ai`) 렌더링 판독값**이다. 프록시 판독 텍스트 기준임을 밝혀 둔다
- 출처 주석 ②: **IRS·주 등록부에서 이 법인을 찾지 못했다.** ProPublica Nonprofit Explorer 는 조직명 검색 0건, EIN `42-3678960` 직접 조회도 `Organization not found` 다. IRS TEOS 는 403, California SOS bizfile 은 429(보안 차단), California AG 자선단체 등록부는 404 로 전부 열지 못했다. **따라서 재무·면세 지위는 조직 자기게시 외에 제3자 확인이 없다**
- 출처 주석 ③: **Facebook·Instagram 은 로그인 게이트로 열지 못했다.** 조직의 실시간 소통 채널이 Facebook 인 정황(개체 소개문에 "contacted rescuers on Facebook")이 있어 **가장 큰 사각지대**다
- 출처 주석 ④: **Petfinder 조직 페이지는 찾지 못했다.** Adopt-a-Pet 조직 페이지는 실재하나 게재 개체 0마리다(4절)
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다. 조직 등록 주소가 **사서함형 스위트**이고 대표가 자택에서 포스터를 운영하는 소규모 레스큐이므로 번지를 적지 않는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 도메인 = 조직 공식 도메인 | 리드 도메인 `pawsitivetransformations.org` 가 **현재 운영 중인 조직 사이트 그 자체**다. A 레코드 실재(145.79.28.103), MX 는 **Google Workspace**(`smtp.google.com`), NS 는 Bluehost | DNS(dns.google) |
| **도메인 등록일** | **2026-06-18 등록**(만료 2028-06-18, 최종변경 2026-08-12), 등록대행 Network Solutions. **2024-08 스냅샷은 파킹 랜더 페이지**였다 — 즉 이 도메인에 다른 조직이 앞서 쓰던 콘텐츠는 없다 | RDAP(PIR), Wayback CDX |
| 조직 성격 = 폼 자기보고 일치 | 자기표기 원문: ***"Pawsitive Transformations is a foster-based cat rescue in the Inland Empire."*** 폼의 `org_type: Foster-based rescue` 와 **문자 그대로 일치**한다 | 사이트 About, Adopt-a-Pet |
| **동명 조직 분리** | 검색에 걸리는 동명 3건은 **전부 다른 실체**다 — ①`PAWSitive K9 Transformations`(Chattanooga, TN, 개 훈련) ②`Pawsitive Transformations, LLC`(분리불안 원격 훈련, LLC) ③`Pawsitive Rescue Division`. 셋 다 **고양이 레스큐가 아니고 도메인이 다르다.** ProPublica CA 검색의 `Pawsitive Auto`(EIN 42-3132678)도 별개 법인 | 검색, ProPublica API |
| **신청자 = 조직 대표 본인** | Adopt-a-Pet 조직 페이지의 Contact 란이 **`Lauren Ashley Shapiro`** 다. 조직 About 의 Lauren 소개는 ***"She's also the name on the state and IRS paperwork"*** 이고, 폼의 `role: Executive director or founder` 와 맞물린다 | Adopt-a-Pet, 사이트 About |
| **신청자 신원 교차 확인** | Lauren Ashley Shapiro, **PsyD, CCTP / CA PSY #29059**, Orange County, CA 개업 임상·법정심리학자. 조직 About 의 ***"licensed psychologist by day"*** 와 일치. 결정적 교차점은 **본인 회사 Neurovana 프로필**의 문장 — ***"Lauren lives in California, where she is active in cat rescue and shares her home with two cats of her own alongside a rotating number of fosters."*** | 사이트 About, Neurovana 프로필, 본인 개업 사이트 |
| **폼의 `system: Proprietary software` 확인** | **실물이 확인된다.** 스태프 로그인 화면이 ***"Sign in to the Pawsitive EHR admin portal"***, 별도로 포스터 전용 로그인(`/portal/login`)이 ***"Foster Portal Login … Need access? Contact your foster coordinator."*** 다. `/api/*` 는 전부 `401 Authentication required`, `/api/health` 는 **`{"status":"ok","databaseConfigured":true}`** 를 반환한다 | 조직 사이트 `/login`·`/portal/login`·`/api/*` |
| 폼의 `fosters: 1–10` 대조 | 자체 사이트 게재 **40마리 중 30마리가 「In Foster Care」** 표기다. 개체 소개문 기준 배치 단위를 세면 **약 15~20가정으로 추정**된다(3절). **폼 상단값의 1.5~2배 수준으로, 크게 벌어지진 않았다** | 사이트 Adopt 목록, **추론** |

→ **조직 확정, 신청자 확정.** 콜 상대는 **설립 1년 미만 3인 레스큐의 창립자이자 유일한 법적 명의자**이고, 동시에 **본업으로 회사 3개를 운영하는 임상심리학자**다. 이 콜은 규모 이야기가 아니라 **「석 달 전에 띄운 자체 시스템이 지금 무엇을 못 담고 있는가」** 이야기다.

## 미팅에서 바로 쓸 핵심 5줄

1. **이 조직은 우리가 팔려는 것을 이미 자기 손으로 만들어 놨다 — 그리고 그 화면이 비어 있다** — 스태프 포털의 자칭이 ***"Pawsitive EHR admin portal"*** 이고, 포스터 전용 로그인(`/portal/login`)이 따로 있다. 즉 폼의 `Proprietary software` 는 스프레드시트의 완곡어법이 아니라 **DB 를 가진 실제 웹 애플리케이션**이다(`/api/health` → `databaseConfigured: true`). 그런데 **공개된 개체 상세 페이지 40건을 확인한 결과, 표본 4건(#33·#46·#104·#124) 전부가 「Recent Updates → No public updates yet」 「Wishlist → No wishlist yet」 다.** 개체별 업데이트 피드를 **만들어 두고 채우지 못하고 있다.** 이 콜의 유일한 정중앙이 여기다 — **「업데이트 칸을 누가 채우기로 돼 있었나요」**.

2. **유입 소재 B 가 정확히 맞아 들어간 건이다 — 폼에서 포스터 수를 물었더니 이 사람이 왔다** — 우리 폼이 물은 것은 「현재 임시보호자 수」이고, 이 조직은 **케어의 100%가 포스터 가정에서 일어나는 구조**다. 자기표기 원문: ***"Every cat goes into a foster home, not a cage."*** 그리고 ***"Fostering is the whole engine."*** **시설이 없다. 그러니 「지금 상태」를 아는 유일한 경로가 포스터 본인의 보고다.** 우리 가설(분산 케어 추적)을 억지로 끼워 넣을 필요가 없는 몇 안 되는 리드다.

3. **자체 사이트에는 40마리가 떠 있는데, Adopt-a-Pet 조직 페이지는 0마리다** — Adopt-a-Pet 원문: ***"This shelter doesn't have any adoptable pets right now"*** (조직 ID 293124, Corona, CA). 같은 시점 자기 사이트 Adopt 페이지에는 **40마리**가 게재돼 있고 그중 **30마리가 「In Foster Care」** 다. Petfinder 조직 페이지는 아예 찾지 못했다. **자체 EHR 과 외부 입양 플랫폼이 이어져 있지 않다는 뜻이다**(추론, **직접 확인 필요**). 콜에서 쓰는 방식은 지적이 아니라 질문이다 — **「Adopt-a-Pet 쪽 목록은 지금 누가 올려요?」**

4. **시스템은 조직이 만든 게 아니라 외주 개발사가 만들었다 — 텍사스의 Odoo ERP 전문 업체다** — 모든 페이지 푸터가 ***"Engineered by Wolke Consultancy LLC"*** 다. 이 업체 자기소개 원문: ***"Wolke Consultancy delivers Odoo customization (v8–v19), AI-powered automation, full-stack development, and GDPR & NIST-aligned solutions — US-registered in Katy, Texas."*** **레스큐 도메인 전문 업체가 아니다.** 그리고 **도메인 등록이 2026-06-18, 콜이 2026-09-22 — 시스템이 세상에 나온 지 석 달 남짓이다.** 여기서 성립하는 대화는 「그 시스템을 바꾸자」가 절대 아니다. **「기능 하나 더 붙이려면 지금 며칠 걸리고 얼마 드나요」** 다.

5. **의사결정은 한 사람에게 모여 있고, 그 사람은 소프트웨어를 사 본 사람이다 — 다만 이 조직의 지갑은 아직 얇다** — 임원이 **3명 전부**다(Lauren·Danielle·Maggie). 이사회 공개 없음. Lauren 본인 소개가 ***"the name on the state and IRS paperwork"*** 이고, 본업에서는 **Neurovana(TMS 클리닉) 공동창업자 겸 대표 · Mosaic Mental Health Group 소유주 · 개인 개업** 세 개를 동시에 운영한다. **B2B 소프트웨어 구매 대화에 익숙한 상대다.** 반면 조직 재정은 **Givebutter 캠페인 「Labor Day No More」가 2026-08-22 개설, 목표 $2,500, 현재 $0 · 후원자 0명** 이다. **이 숫자를 콜에서 언급하지 않는다.** 가격 대화는 「조직 예산」이 아니라 「Wolke 에 이미 나가는 개발비의 대체·절감」 프레임으로 들어가야 한다(추론, 초반 반응 보고 조정).

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 조직명 | **Pawsitive Transformations** · 부제 표기 **"Cat Rescue & Human Wellness"**(전 페이지 푸터) | 사이트 |
| 소속·법적 지위 | 자기게시 **"501(c)(3) non-profit organization"**, 자기표기 **"a California nonprofit"**. **단, IRS BMF·ProPublica·주 등록부에서 확인되지 않는다**(출처 주석 ②) | 사이트, ProPublica API |
| **EIN(자기게시)** | 사이트 Contact·Donate·개체 상세 푸터에 **`42-3678960`**. **그런데 Education Hub 계열 페이지 푸터는 여전히 `EIN [PENDING]` 를 출력한다** — 같은 사이트 안에서 두 값이 공존한다. 어느 쪽이 현행인지 **미확인** | 사이트 Contact·Donate·`/kittens/*`·`/education/*` |
| 시설 | **없다.** 자기표기 원문: ***"Every cat goes into a foster home, not a cage."*** **전량 포스터 가정 케어** | 사이트 Home |
| 소재지 | **Mira Loma, CA**(사이트 Contact, **사서함형 스위트 번호**) / **Corona, CA 92878**(Adopt-a-Pet 등재). 대표 Lauren 이 **Corona 의 콜로니를 직접 돌본다** | 사이트 Contact, Adopt-a-Pet, 사이트 About |
| 성격 | **포스터 기반 고양이 단독 레스큐.** 자기표기: ***"a foster-based cat rescue in the Inland Empire"*** | 사이트 About |
| **서비스 권역** | Adopt-a-Pet 등재 원문: **"Riverside, San Bernardino, Corona, Norco, Los Angeles, Orange, Tustin, Anaheim"**. 입양은 ***"We prioritize homes in the Inland Empire and greater Southern California."*** | Adopt-a-Pet, 사이트 Adopt FAQ |
| **인력(전원 등재)** | **3명.** ①**Lauren** · Chief Cat Herder(Director of Strategy) — ***"Vision, business direction, technology, and execution."*** ②**Danielle** · Chief of Purrs & Partnerships(Director of Development) — ***"Community partnerships, grants, fundraising, and donor relationships, plus the corporate record-keeping and people side"*** ③**Maggie** · Chief of Rescue Ops(Director of Operations) — ***"intake, foster development, and medical protocols, keeping cats moving safely from pull to placement"*** | 사이트 About |
| **인력의 결정적 성격** | **3명 전원이 본업이 따로 있고, 3명 전원이 본인도 포스터다.** Lauren=임상심리학자·***"fosters full time"***, Danielle=HR 전문가·전직 연방공무원·***"She fosters too"***, Maggie=위기간호 10년 경력·***"medical and neonate foster"***. **조율자와 케어 제공자가 같은 사람이다** | 사이트 About |
| 이사회 | **공개 없음.** About 에 이사회 절이 없고 성(姓) 표기도 없다 | 사이트 About |
| 설립 | **2025년.** Lauren 소개 원문: ***"fell into cat rescue by accident in 2025 and hasn't looked back"***. 사이트·시스템은 **2026-06 이후** | 사이트 About, RDAP |
| 유급 인력 | **미확인.** 급여 관련 표기가 어디에도 없다. 3인이 전부 무급 자원 활동일 가능성이 있으나 **직접 확인 필요** | — |
| 연락 채널 | Call/Text **(951) 830-1825**(사이트) · **(714) 584-5840**(Adopt-a-Pet 등재) · `hello@` / `info@` 두 메일 병행. **번호 2개·메일 2개가 동시에 노출돼 있다** | 사이트 Contact·푸터·Privacy, Adopt-a-Pet |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| **연 수입/예산** | **미확인.** 990 신고 이력 없음(ProPublica 미등재). 설립 1년 미만이라 첫 회계연도 신고 자체가 아직 없을 가능성이 크다 | ProPublica API |
| **기부 플랫폼** | **Givebutter** — `givebutter.com/pawsitivetransformations`(Verified 배지). Adopt-a-Pet 의 Donation 링크도 같은 곳으로 간다 | Givebutter, Adopt-a-Pet |
| **캠페인 4종(현행)** | ①**Labor Day No More**(2026-08-22 개설, 커뮤니티 캣 중성화) ②**Drag Queen Bingo at Hamburger Mary's Ontario**(행사 2026-09-10) ③**Nine Lives Club**(월정기) ④**Sponsor a Kitten**(개체 후원) | Givebutter 허브 |
| **모금 실적(공개분)** | **Labor Day No More: 목표 $2,500 / 모금 $0 / 후원자 0명**(2026-09-09 기준). 원문 표기 ***"0% of $2,500 goal"*** · ***"Be the first supporter"*** | Givebutter 캠페인 페이지 |
| 재원 구성 | **개인 소액 기부 중심으로 추정.** 제시 금액대가 **$15 / $40 / $75 / $135 / $350 / $1,000** 이고 각각 ***"Kickstart Kitty" "Shots & Chips" "Belly & Box" "The Big Fix" "The Whole Kitten Caboodle" "The Whole Litter"*** 로 **비용 단위 그대로 이름 붙여져 있다**. 그랜트·정부 계약 흔적 없음 | Givebutter |
| 입양 수수료 | **$150**(spay/neuter·백신·구충·마이크로칩 포함). 자기표기: ***"It's an adoption fee, not a purchase price"*** | 사이트 Adopt FAQ |
| **확인된 유일한 지출 라인** | **외주 개발비(Wolke Consultancy LLC).** 금액·계약 형태 **미확인** | 사이트 푸터 |
| **시사점** | **조직 예산에서 SW 구독료를 뽑아내기는 현 시점 어렵다.** 대신 **이미 나가고 있는 외주 개발비**가 유일하게 실재하는 SW 예산이며, 우리 제안은 그 예산과 경쟁하거나 그 예산을 줄이는 위치에 서야 한다(**추론, 직접 확인 필요**) | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **현재 게재 개체** | **40마리**(전량 고양이) | 자체 사이트 Adopt 페이지 실측 카운트(2026-09-09) |
| **그중 「In Foster Care」 표기** | **30마리** | 같은 페이지. 나머지 10마리는 입양 준비 완료로 보임(**추론**) |
| **내부 개체 레코드 ID 범위** | **#33 ~ #132** | URL 경로 `/kittens/<id>`. **자체 EHR 의 연번으로 보이며, 개설 이후 최소 130건 내외의 레코드가 생성됐다는 뜻**(**추론**, 결번·비공개분 포함 가능) |
| **확인 가능한 인테이크 기간** | **2026-04-26 ~ 2026-08-01** | 개체 소개문에 적힌 구조·풀 날짜. 약 **3개월에 40마리 이상**이 공개 목록에 남아 있다 |
| **주 인테이크 경로** | **SEAACA 안락사 리스트**(압도적 다수) + 거리·콜로니·시민 제보 | 개체 소개문. 예: ***"Smudge was rescued from SEAACA's euthanasia list on 06/03/2026."*** |
| **포스터 가정 수** | **미확인 — 약 15~20가정으로 추정** | 개체 소개문의 배치 단위(모자 동거·형제 동거·bonded pair)를 세어 낸 **추론**. **폼 자기보고 「1–10」의 1.5~2배 수준으로, 크게 벌어지지 않았다.** 이 건은 규모가 아니라 시스템이 쟁점이다 |
| **포스터 교체 발생** | **최소 1건 문서화됨** | Clover(#54) 소개문 원문: ***"Clover's previous foster care placement was unable to keep her and she was placed with a new foster on 06/11/2026."*** **배치 중 이동이 실제로 일어나는 조직이다** |
| 입양 건수 | **미확인** | 「Success Stories」 절이 비어 있어 실적 집계가 대외 공개되지 않는다(4절) |
| 라이브 릴리스율 | **미확인 / 해당 없음** | 시설이 없고 SAC 제출 흔적도 없다 |
| 자원봉사자 수 | **미확인** | `/volunteer`·`/getinvolved` 경로는 렌더링 결과가 비어 있다 |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW** | **자체 구축 시스템.** 스태프 로그인 화면 원문 ***"Sign in to the Pawsitive EHR admin portal"***. **조직 스스로 자기 시스템을 「EHR」이라 부른다** | 사이트 `/login` |
| **백엔드 실재 확인** | `/api/cats`·`/api/animals`·`/api/kittens`·`/api/fosters`·`/api/public/cats` **전부 `401 {"error":"Authentication required"}"`**, `/api/health` 는 **`{"status":"ok","databaseConfigured":true}`**. **인증이 걸린 DB 기반 애플리케이션이 실제로 돌고 있다** | 조직 사이트 API 응답 |
| **포스터 전용 도구** | **전용 포털이 별도로 존재한다.** `/portal/login` 원문 ***"Foster Portal Login — Sign in to your foster account … Need access? Contact your foster coordinator."*** **「foster coordinator」라는 역할명이 시스템 문구에 박혀 있다** | 사이트 `/portal/login` |
| **개체별 업데이트 기능** | **기능은 있고, 내용이 없다.** 개체 상세 페이지 구조가 `About Me` / `Photos` / **`Recent Updates`** / **`Wishlist`** 인데, 확인한 4건(#33·#46·#104·#124) 전부 ***"No public updates yet. Check back soon!"*** 와 ***"No wishlist yet. Check back soon!"*** 다 | 사이트 `/kittens/*` |
| **콘텐츠 관리 기능** | **관리자 안내문이 공개 페이지에 그대로 노출돼 있다.** Adopt 페이지 Success Stories 절 원문: ***"No success stories published yet"*** ***"Staff can add them in Admin → Content Manager using the Success Story category."*** **관리자용 문구가 대외 화면으로 새어 나온 상태** | 사이트 `/available` |
| **AI 기능 내장** | 자체 시스템에 **AI 초안 작성 기능**이 들어 있다. Privacy 원문: ***"Our organization uses AI-assisted tools to help staff draft marketing copy, social media captions, and certain administrative materials."*** 그리고 ***"administrators may disable those features organization-wide at any time."*** 조직이 보유한 데이터로 **"foster contact data, medical records"** 를 명시한다 | 사이트 `/privacy` |
| **개발 주체** | **Wolke Consultancy LLC**(전 페이지 푸터 ***"Engineered by Wolke Consultancy LLC"***). 업체 자기소개: **Odoo ERP(v8–v19) 커스터마이징 · AI 자동화 · React/Next/Node 풀스택 · GDPR/NIST 컴플라이언스**, **미국 텍사스 Katy 등록**. **레스큐 도메인 전문 업체가 아니다** | 사이트 푸터, wolkeconsultancy.com |
| 기술 스택 | React + Vite SPA(`assets/index-*.js`), Node 계열 서버(helmet 계열 보안 헤더 + `ratelimit-policy: 8000;w=900`), 호스팅 IP 145.79.28.103, NS Bluehost, 메일 **Google Workspace** | HTTP 헤더, DNS |
| **입양 플랫폼** | **Adopt-a-Pet 조직 페이지 실재(ID 293124), 그러나 게재 개체 0마리** — ***"This shelter doesn't have any adoptable pets right now"***. **Petfinder 조직 페이지는 확인하지 못했다** | Adopt-a-Pet, 검색 |
| 기부·이벤트 | **Givebutter**(기부 폼·정기후원·개체 후원·**이벤트 티켓팅**까지 한 곳에서 처리) | Givebutter |
| 신청 접수 | **입양·포스터 신청 폼 모두 자체 사이트 내장.** 외부 폼 도구(JotForm·Google Forms 등)로 넘어가지 않는다. 포스터 폼은 **집 사진 1~3장 필수 업로드**, 반려동물 개체 추가 UI, ***"How many cats/kittens can you foster at once?"*** 항목 포함 | 사이트 `/foster` |
| **정리** | **경쟁 구도가 Chameleon·ShelterLuv·Pawlytics·Petstablished 가 아니다.** 상대는 **3개월 된 자기 시스템과 그것을 만든 외주 개발사**다. 우리 자리는 「대체」가 아니라 **「그 시스템이 아직 못 하는 한 칸」** 이다 | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| 결정 라인 | **사실상 Lauren 단독.** 임원 3명 중 본인이 ***"Vision, business direction, technology, and execution"*** 담당이자 ***"the name on the state and IRS paperwork"*** 다. **기술 결정과 법적 결재가 한 사람에게 겹쳐 있다** |
| 전결 범위 | **미확인.** 이사회 구성이 공개되지 않아 승인 기준선을 확인할 수 없다. 3인 조직·이사회 비공개 구조에서는 **Lauren 이 곧 결재선**일 가능성이 높다(**추론, 직접 확인 필요**) |
| 재무 담당 | **Danielle** — ***"grants, fundraising, and donor relationships, plus the corporate record-keeping"***. **자금 조달 쪽 대화가 필요해지면 이 사람이 두 번째 이해관계자다** |
| 실사용 판정자 | **Maggie** — ***"intake, foster development, and medical protocols"***. **포스터 배치와 의료 프로토콜을 실제로 돌리는 사람. 도구 도입의 성패는 이 사람 손에 있다**(추론) |
| **병목 ①(구조)** | **예산 자체가 얇다.** 확인된 공개 모금 실적이 $0 다. **유상 계약 대화는 조직 예산이 아니라 「이미 나가는 외주 개발비」에 붙어야 한다** |
| **병목 ②(기술)** | **이미 외주 개발사와 결속돼 있다.** 우리 도구를 넣으려면 **Wolke 가 만든 EHR 과의 관계**(대체·연동·병행)를 반드시 정리해야 한다. 계약 형태·잔여 기간 **미확인 — 콜 초반에 확인할 것** |
| **병목 ③(법적)** | **면세 지위가 불명확하다.** 사이트가 자칭 501(c)(3) 이나 IRS 등록부 미등재이고 자기 사이트 일부 푸터가 여전히 `EIN [PENDING]` 를 출력한다. **비영리 할인·그랜트 자금 사용 가부가 여기 걸린다.** 조심스럽게, 그러나 반드시 확인해야 할 항목 |

## 6. Lauren 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| 성명 | **Lauren Ashley Shapiro** | Adopt-a-Pet 조직 페이지 Contact 란 |
| 조직 내 직책 | **Chief Cat Herder(Director of Strategy)** — 담당 원문 ***"Vision, business direction, technology, and execution."*** | 사이트 About |
| **법적 지위** | ***"She's also the name on the state and IRS paperwork, which is a filing technicality, not a hierarchy."*** — **본인이 명의자임을 인정하면서 위계를 부정하는 문장이다.** 폼의 `role: Executive director or founder` 와 일치 | 사이트 About |
| **본업** | **PsyD, CCTP / CA PSY #29059 · 면허 임상-법정심리학자**, Orange County, CA. Alliant International University California School of Forensic Studies 석·박사. **현재 원격 진료만 제공** | Neurovana, 본인 개업 사이트 |
| **경영 이력** | **회사 3곳을 동시에 운영한다** — ①**Neurovana**(TMS 클리닉) **공동창업자 겸 President** — ***"guides organizational leadership, clinical strategy, and program development"*** ②**Mosaic Mental Health Group**(그룹 프랙티스) 소유주 ③개인 개업. **경력 15년 이상** | Neurovana 프로필 |
| **기술 성향(중요)** | Neurovana 프로필 원문: ***"she integrates her background in forensic and clinical psychology with her commitment to advancing technology and innovation in mental health, a drive that led her to Neurovana and the transformative potential of Transcranial Magnetic Stimulation (TMS)."*** **신기술 도입을 자기 정체성으로 내세우는 사람이다.** 레스큐 시스템을 직접 발주해 만든 것도 같은 성향의 연장으로 보인다(**추론**) | Neurovana |
| 전문 영역 | 트라우마, 약물사용, LGBTQ+, **후기진단 신경다양성 성인**. 심리·신경인지 검사, 법정 감정, 신경재활, 임상 자문. 박사논문 *Contemporary Attitudes Towards Psychopathy* | Neurovana, 본인 사이트 |
| 레스큐 경력 | **2025년 시작.** 조직 About 원문: ***"a Canadian by origin who fell into cat rescue by accident in 2025 and hasn't looked back."*** **Corona 의 콜로니를 직접 돌보고, 트래핑에 직접 나가고, 상시 포스터를 한다** | 사이트 About |
| 교차 검증 | Neurovana 프로필: ***"active in cat rescue and shares her home with two cats of her own alongside a rotating number of fosters."*** **본업 프로필과 레스큐 프로필이 서로를 가리킨다** | Neurovana |
| **성향(콜 화법 판단용)** | **평가·측정을 직업으로 하는 사람이다**(심리검사·법정 감정). 동시에 **조직 문구 전체가 정확하고 감정적으로 절제돼 있다** — 예: 입양 FAQ 의 ***"Everything we know, you know: full medical records, history, and quirks. Rescue cats come from unknown backgrounds, so we can't guarantee the future, but we never hide the past."*** **모호한 효익 주장·과장 수치는 역효과가 난다. 「무엇이 기록으로 남는가」 「그 기록을 누가 신뢰할 수 있는가」 쪽 언어가 맞다**(**추론**, 초반 반응 보고 조정) | 사이트 전반, 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2025년** | Lauren 이 고양이 구조에 유입 — ***"fell into cat rescue by accident in 2025"***. **조직의 실질 출발점** | 사이트 About |
| 2026-04-26 | 공개 목록에 남아 있는 **최초 인테이크 날짜**(SEAACA 안락사 리스트에서 6마리 한배 구조) | 개체 소개문 #82·#86·#87 |
| 2026-05-07~08 | 건설 현장(Walsh Group 제보) 새끼 4마리 구조, **Lauren 이 직접 재방문해 어미 트래핑 → 모자 재결합 후 중성화·방사** | 개체 소개문 #43~#46 |
| **2026-06-18** | **`pawsitivetransformations.org` 도메인 등록.** 자체 사이트·EHR 의 실질 출범 시점 | RDAP(PIR) |
| 2026-07-25 | 첫 공개 행사 **"Cats at the Studio Spay/Neuter Event"**(과거 이벤트로 1건만 등재) | 사이트 `/events` |
| 2026-08-01 | SEAACA 안락사 예정 새끼 다수(Bixby·Echo·Firefox·Java·Roku·Siri·Pixel·Xerox 등) 일괄 인수 — **공개 목록상 최대 규모 단일 인테이크** | 개체 소개문 |
| 2026-08-12 | 도메인 레코드 최종 변경 | RDAP |
| **2026-08-22** | Givebutter **「Labor Day No More」 캠페인 개설**(목표 $2,500). **2026-09-09 현재 $0 · 후원자 0명.** 같은 캠페인의 교육 아티클도 사이트에 게시돼 있다 | Givebutter, 사이트 Education Hub |
| **2026-09-10** | **「Drag Queen Bingo at Hamburger Mary's Ontario」 모금 행사**(Ontario, CA, 목요일 17:00 PDT). **콜 12일 전** | Givebutter |
| **2026-09-22** | **본 콜** | 리드 폼 |
| — | **부정 이슈·분쟁·언론 보도는 확인되지 않았다.** 지역 언론 검색에서 이 조직에 관한 기사를 찾지 못했다 | 검색 |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

- **개체별 「Recent Updates」가 전수 비어 있다.** 확인한 4건 모두 ***"No public updates yet."*** — **포스터 업데이트를 받아 개체 페이지에 올리는 루프가 아직 안 돌고 있다.** 받고는 있는데 못 옮기는 것인지, 애초에 안 받고 있는 것인지가 갈림길이다. **콜에서 반드시 확인.**
- **「Wishlist」도 전수 비어 있다.** 포스터가 「지금 이 아이한테 뭐가 필요한가」를 올리는 자리로 설계된 기능으로 보이는데(**추론**) 한 건도 없다. **물자 요청이 여전히 문자·그룹챗으로 오간다는 정황.** 확인 필요.
- **관리자 안내문이 공개 페이지에 노출돼 있다** — ***"Staff can add them in Admin → Content Manager using the Success Story category."*** 조건 분기 문구가 대외 화면까지 나온 상태다. **시스템 운영에 손이 부족하다는 신호.** 확인 필요.
- **Adopt-a-Pet 0마리 vs 자체 사이트 40마리.** 외부 플랫폼 게재가 자체 EHR 과 자동 연동되지 않고 **사람이 따로 올려야 하는 구조**로 보인다. **확인 필요 — 이 조직에서 가장 눈에 보이는 이중입력 지점이다.**
- **Education Hub 4개 섹션 중 2개가 비어 있다** — 「Becoming a Foster」·「Kitten Care」·「Health & Emergency Care」에 아티클이 하나도 없다. **포스터에게 줄 교육 자료를 시스템 안이 아니라 다른 데(PDF·메일·구두)로 주고 있을 가능성.** 확인 필요.
- **포스터 온보딩이 「30분 미만 온라인 교육」으로 표준화돼 있다** — ***"You can complete our short online training, under 30 minutes, before your first placement."*** **이수 여부를 어디서 확인하는지**가 우리 제품 접점이다. 확인 필요.
- **연락 채널이 이미 갈라져 있다** — 전화번호 2개(951/714), 메일 2개(`hello@`/`info@`), 게다가 폼은 `info@` 로 들어왔다. **포스터 연락이 어느 채널로 들어오는지 자체가 불확실하다.** 확인 필요.
- **의료 판단·비용을 조직이 100% 지고 있다** — ***"Medical decisions are ours to make and ours to pay for"*** ***"You call us, day or night, and we take it from there."* **24시간 의료 콜을 3명이 받는다는 뜻이다.** 이 통화들이 어디에 기록되는지가 핵심 질문. 확인 필요.
- **배치 중 이동이 실제로 발생한다** — Clover(#54) 사례 문서화됨. 소규모 조직에서 재배치가 일어나면 **케어 이력의 연속성**이 가장 먼저 끊긴다(**추론**). 확인 필요.
- **Wolke 는 Odoo ERP 전문 업체다.** EHR 이 Odoo 기반인지 별도 풀스택인지는 **미확인**. 이것에 따라 연동 가능성 판단이 완전히 달라진다. **확인 필요.**

## 미확인 요약 (콜에서 확인할 것)

1. **오늘 포스터 30가정(추정)이 「지금 이 아이 상태」를 무슨 경로로 보내오는가** — 포스터 포털에 직접 쓰는가, 문자·그룹챗·Facebook 메신저인가. 그리고 **그걸 개체 페이지 「Recent Updates」로 옮기는 사람이 누구인가.**
2. **실제 포스터 가정 수와 동시 케어 두수** — 폼은 「1–10」이라 답했으나 게재 개체만 40마리다. **본인이 그 숫자를 어디서 조회하는지**까지 함께 확인.
3. **Wolke Consultancy 와의 계약 형태** — 프로젝트 종료인가 월 유지보수인가, 기능 하나 추가에 걸리는 리드타임과 비용, 그리고 **EHR 이 Odoo 기반인가 별도 스택인가**.
4. **Adopt-a-Pet·Petfinder 게재를 누가 어떻게 올리는가** — 자체 EHR 과 연동돼 있는가, 사람이 이중 입력하는가.
5. **의사결정·예산** — Lauren 단독 결재인가, 이사회가 존재하는가, SW 지출을 승인할 수 있는 상한이 있는가.
6. **501(c)(3) 면세 지위와 EIN 현행값** — 자기 사이트에 `42-3678960` 과 `[PENDING]` 이 공존한다. 비영리 요금제·그랜트 자금 사용 가부가 여기 달려 있다.
7. **Maggie(Director of Operations)가 콜에 들어오는가** — 배치·의료 프로토콜의 실사용 판정자다. 안 들어온다면 2차 미팅 대상으로 확보.
8. **다루지 말 것** — Givebutter 「Labor Day No More」의 $0·후원자 0명. 먼저 꺼내지 않는다. 9/10 Drag Queen Bingo 행사는 **결과를 묻는 게 아니라 안부로만** 여는 것이 안전하다.
