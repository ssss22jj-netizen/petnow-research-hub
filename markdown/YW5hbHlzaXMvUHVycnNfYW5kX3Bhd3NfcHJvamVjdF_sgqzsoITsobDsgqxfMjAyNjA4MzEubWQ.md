# Purrs and paws project 사전조사

- 작성일: 2026-08-31 / 목적: Liza Sotchenko 콜 준비(2026-09-02) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Foster-based rescue", "role": "Executive director or founder", "system": "Shelterluv", "fosters": "1–10"}`
- 유입 소재: B (임시보호자 업데이트 수집 — 폼에서 현재 임시보호자 수를 물었다)
- **동일 조직 확정 / 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: 조직 사이트(purrsandpawsproject.com)는 6개 페이지 HTML 과 JS 번들·sitemap 을 내려받아 전수 검색했고, 그 경우 출처에 `사이트 HTML`로 표기. Adopt-a-Pet·Chewy·Facebook·GoFundMe·Linktree·Amazon 은 서버가 자동 열람을 차단해 텍스트 프록시(r.jina.ai)로 원문을 확보했고 `(프록시)`로 표기
- 출처 주석 ②: **이 문서에 큰따옴표로 인용한 영문 문장은 전부 내려받은 원문에서 문자열 일치로 재검증한 것만 실었다.** 검색 요약기가 반환한 문장은 재검증 전까지 채택하지 않았다
- 출처 주석 ③: 사이트 Contact 페이지의 이메일은 Cloudflare 난독화(`data-cfemail`)로 감춰져 있어 XOR 복호해 확인했다. 값은 조직 공식 gmail 주소와 일치
- 소재지·연락처 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적고, 전화번호는 **지역번호만**, 이메일은 로컬파트를 가린다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| **법인** | **Purrs And Paws Project, EIN 42-2065519, Hope Mills, NC**(Cumberland County). 501(c)(3), **면세승인 2026-06**, NTEE **D20**(Animal Protection and Welfare), 재단분류 코드 16(509(a)(2)), 기부금 공제 가능, **4월 결산**, 신고요건 코드 **2**(990-N e-Postcard 구간). **990 신고 이력 0건** — 조직이 신설이다 | ProPublica API |
| **조직명 일치** | 리드가 적은 조직명 "Purrs and paws project"와 IRS 등록명이 **어절 단위로 완전 일치**한다. `Project` 가 붙은 것은 전국에 이 1건뿐이다 | ProPublica API |
| **EIN 자기 게시 — 결정적 근거 ①** | 조직 Facebook 페이지 Intro 마지막 줄이 **"EIN: 42-2065519"** 다. 조직이 스스로 IRS 등록번호를 게시했고 그 값이 위 법인과 같다. **조직 브랜드와 EIN 이 직접 맞물린다** | Facebook(프록시) |
| **신청자 — 결정적 근거 ②** | **Adopt-a-Pet 조직 페이지(보호소 번호 290478)의 Contact 란이 `Elizaveta Sotchenko`** 이고, 같은 블록에 조직 이메일·사이트·기부 링크가 함께 걸려 있다. **Liza 는 Elizaveta 의 통용 애칭**이며 성이 일치한다 | Adopt-a-Pet(프록시) |
| **신청자 — 결정적 근거 ③** | 조직 Linktree 의 **Zelle 수취 주소가 `l***@hotmail.com`(로컬파트가 `liza.sotchenko`)** 다. 조직 기부금이 신청자 본인 이름의 개인 주소로 들어간다 | Linktree(프록시) |
| 신청자 — 보강 (2건) | ①**GoFundMe 캠페인 organizer 가 `Elizaveta Sotchenko`, 소재 `Hope Mills, NC`**(캠페인 본문·Organizer 블록 모두) ②**Amazon "Puppy's WishList" 소유자명이 `Elizaveta sotchenko`** — 이 리스트는 조직 Linktree 에 조직 위시리스트로 걸려 있다. **4개 독립 채널이 같은 이름으로 맞물린다** | GoFundMe(프록시), Amazon(프록시) |
| **이메일 도메인** | 리드 도메인은 `gmail.com` 이고, **조직 공식 주소가 실제로 `p***@gmail.com`** 이다 — 사이트 Contact(Cloudflare 난독화 복호), Facebook Intro, Adopt-a-Pet, Chewy 4곳이 모두 같은 gmail 하나다. 자체 도메인(purrsandpawsproject.com)을 갖고 있으면서도 메일은 gmail 을 쓴다. **gmail 리드라는 사실이 이 조직에서는 정합적** | 사이트 HTML, Facebook·Adopt-a-Pet·Chewy(프록시) |
| **MD ↔ NC 불일치 해소** | Adopt-a-Pet 등록 전화의 **지역번호가 443(볼티모어, Maryland)** 인데 조직 소재는 NC 다. 별도로 bestcompany.com 태양광 리뷰에 **`Liza Sotchenko` / `Parkville, MD`** 가 나란히 있는 것을 **HTML 원문 문자열 일치로 확인**했다. → **메릴랜드에서 노스캐롤라이나로 옮겨 오며 휴대전화를 유지한 것으로 읽는 것이 가장 단순한 설명**이다 (**추론**, 콜에서 확인할 필요는 없고 배경으로만 둘 것) | Adopt-a-Pet(프록시), bestcompany.com HTML |
| 동명 법인 배제 | ProPublica "purrs and paws" 검색 11건 중 **`Project` 가 붙은 것은 이 1건**뿐이다. 나머지는 Pickens Paws And Purrs(Carrollton AL) / Paws And Purrs Inc(Liberty KY) / Grateful Paws And Purrs(Jacksonville AL) / Pals For Paws And Purrs(Rockwell NC) / Paws And Purrs Humane Society(Montgomery IL) / Precious Purrs And Paws(Gloucester VA) / Purrs And Paws Cat And Kitten Rescue(Tupper Lake NY) / Pawz And Purrz Sanctuary(Geneva FL) / Pawz And Purrz Animal Rescue(Painted Post NY) / Paws Up Rescue(Greenville SC) — **소재지가 전부 다르고 NC 의 Pals For Paws And Purrs(Rockwell) 는 NTEE D12 로 성격이 다르다** | ProPublica API |
| 동명 브랜드 배제 | 웹상 동명 레스큐가 최소 5곳이다 — Purrs and Paws Rescue(Bedford Hills NY) / Purrs and Paws(Lackawanna·Luzerne PA) / PURRS AND PAWS(Queensbury NY) / Purrs & Paws Rescue(Egg Harbor Township NJ) / Purrs and Paws Cat Rescue(Stockton CA). **전부 `Project` 가 없고 소재지가 다르다.** 본 조사에서 이들 정보를 끌어온 부분 없음 | 검색, Adopt-a-Pet(프록시) |
| 폼 응답 정합 | **4개 중 3개가 직접 확인되고 1개는 확인되지 않는다** — **org_type(Foster-based rescue)**: 사이트가 *"100%"* / *"foster-based, allowing more animals to be saved"* 로 명시, 시설 없음 / **role(ED or founder)**: 조직 공개 문서에 직책 표기가 전무하나 Adopt-a-Pet 유일 담당자·GoFundMe organizer·Zelle 수취인이 모두 본인 / **fosters(1–10)**: **본인이 GoFundMe 에 "one person team" 이라 적었다**(3절) / **system(Shelterluv)**: **공개 흔적 0건, 미확인**(4절) | 사이트 HTML, GoFundMe(프록시) |

→ **IRS 등록명·EIN 자기 게시·Adopt-a-Pet 담당자명·Zelle 수취인·GoFundMe organizer·이메일 도메인 6개 축이 맞물려 조직·신청자 모두 확정.** 다른 조직 정보를 끌어온 부분 없음.

## 미팅에서 바로 쓸 핵심 5줄

1. **폼의 "포스터 1–10"은 위쪽이 아니라 아래쪽이다. 본인이 이틀 전 공개 모금 글에 "지금은 1인 팀"이라고 직접 적었다 — 이 콜은 「포스터 업데이트를 어떻게 모으느냐」가 아니라 「포스터가 아직 없다」에서 시작한다** — GoFundMe 원문: *"There's also an enormous need for more space within my home as I'm currently a one person team, so my husband and I are actively in search of a barn/building to add to our property and to raise money for it."* 2026-08-29경 게시다. 소재 B(임시보호자 업데이트 수집)로 들어왔지만 **수집할 임시보호자가 아직 없거나 극소수**이고, 동물은 대표 본인 집에 있다. **"몇 분이 몇 마리를 데리고 계세요"를 첫 30초에 물어 자릿수를 맞추지 않으면 콜 전체가 헛돈다.** 동시에 이건 기회다 — 포스터 네트워크를 **처음 설계하는 자리**에 우리가 들어가는 것이고, 이관할 레거시가 없다

2. **조직이 3주째다. 사이트도, 모금도, 우리 리드도 전부 최근 18일 안에 생겼다** — IRS 면세승인 **2026-06**, 사이트 게시 **2026-08-14**(schema `datePublished`), GoFundMe 개설 **2026-08-29**, 리드 제출 **2026-08-31**, 미팅 **09-02**. **990 신고 이력 0건, 990-N 구간, 4월 결산.** 지금 이 사람은 조직 인프라를 한꺼번에 세우는 중이고 우리는 그 목록의 한 줄로 들어왔다. **"이미 쓰던 걸 바꾸시라"가 아니라 "지금 정하면 나중에 옮길 게 없다"가 이 콜의 유일하게 맞는 프레임**이다

3. **폼에 적은 Shelterluv 를 실제로 쓰는 흔적이 어디에도 없다. 그리고 Shelterluv 는 이 규모에서 사실상 공짜다 — 가격으로는 절대 못 이긴다** — 사이트 6페이지 HTML·JS 번들 전수 검색에서 ShelterLuv·Petstablished·Pawlytics·Chameleon·PetPoint·RescueGroups 문자열 **0건**, 공개 ShelterLuv 입양 페이지도 검색되지 않는다. 한편 ShelterLuv 자사 블로그 원문은 **"Shelterluv costs $2.00 per adoption, billed monthly."** 이고 setup·per-user·support 비용이 없으며 **transfer·return to owner·TNR 결과는 무료**, 신규 조직을 직접 겨냥해 *"New rescues. Your first year costs what your first year earns."* 라고 적는다. **연 20건을 입양시켜도 $40 다.** 따라서 **콜에서 기능 비교나 가격 비교로 가면 진다.** 먼저 확인할 것은 "실제로 쓰고 계신가, 계정만 만드신 건가"이고, 이기는 자리는 ShelterLuv 가 다루지 않는 **포스터 가정 쪽 일상**이다

4. **실제 스택은 Google Form 1개 + gmail 1개 + Linktree 다. 그리고 그 폼 하나가 입양 신청서이자 포스터 신청서다** — Linktree 가 같은 폼 URL 을 **"Adoption/Foster Application"** 한 줄로 걸어 놓았고, 폼 본문은 *"Thank you for taking the time to fill out our foster application!"* 로 시작하는데 동의 항목에는 *"I understand that if approved, there will be an adoption fee for the animal I am adopting."* 가 함께 들어 있다. **문항 전량을 확인했는데 「동시에 몇 마리까지 가능한가」·「언제까지 가능한가」·「투약·포유(bottle baby) 케어가 가능한가」·「포스터인가 입양인가」가 하나도 없다.** 대신 수의사·임대 관리인·개인 레퍼런스 3곳에 직접 전화하겠다고 명시한다(*"we will contact them ourselves"*). **접수는 디지털인데 배치 판단에 쓸 정보가 폼에 없고, 심사는 전화 3통짜리 수작업**이다

5. **돈이 거의 없다. 가격은 상대가 먼저 묻기 전엔 꺼내지 않는다** — 진행 중인 GoFundMe 가 **$3,000 목표에 $260, 기부 9건**(2026-08-31 조회, 개설 2일차)이다. 입양비는 **$50**, 990-N 구간(총수입 $50,000 이하), **조직 기부의 Zelle 수취처가 대표 개인 hotmail 주소**다. 게다가 지금 모으는 돈의 용도는 소프트웨어가 아니라 **집 옆에 세울 축사·건물**이다. **월 구독 제안은 이 콜에서 성립하지 않는다.** 비용 절감이 아니라 "혼자서 몇 마리까지 감당할 수 있는가"라는 **케어 역량 언어**로만 말한다

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Purrs And Paws Project**(IRS 등록명). 대외 통칭도 동일 | ProPublica API, 사이트 HTML |
| EIN·지위 | **42-2065519** / 501(c)(3), 면세승인 **2026-06**, **4월 결산**, 재단분류 16(509(a)(2)), 신고요건 코드 2, 기부금 공제 가능 | ProPublica API |
| NTEE | **D20**(Animal Protection and Welfare) | ProPublica API |
| 소재지 | **Hope Mills, NC**(IRS 등록지·Adopt-a-Pet·Chewy 일치). Facebook 페이지만 인접 도시 **Fayetteville, NC** 로 표기한다 | ProPublica API, Adopt-a-Pet·Chewy·Facebook(프록시) |
| 설립 | **면세승인 2026-06.** 그 이전의 활동 개시 시점은 공개 자료로 확인되지 않는다. Facebook 페이지 ID 체계(`615…`)만으로는 개설 시점을 단정할 수 없어 **미확인**으로 둔다 | ProPublica API, Facebook(프록시) |
| **성격** | **100% 포스터 기반, 시설 없음.** 홈페이지 자기표기 *"100%"* / *"foster-based, allowing more animals to be saved"*, Our Story *"As a small, fully foster-based rescue, every animal in our care is welcomed into a loving home environment"* | 사이트 HTML |
| **실질 인력** | **본인 1명.** GoFundMe 원문 *"I'm currently a one person team"*. 별도로 남편이 언급된다 — *"my husband and I are actively in search of a barn/building to add to our property"* | GoFundMe(프록시) |
| **이사회·팀 명단** | **없다 — 사이트 6개 페이지 어디에도 사람 이름이 한 건도 나오지 않는다.** 전부 "we"·"our team"·"the directors" 로만 쓰인다. IRS BMF 의 `careofname` 도 **비어 있다** | 사이트 HTML, ProPublica API |
| 취급 종 | **표기는 고양이 중심, 실제는 개도 받는다.** Adopt·Foster 페이지 메타는 *"Adopt a cat or kitten"* / *"Foster a cat or kitten"*, 미션문도 *"cats and kittens"* 인데, 홈페이지 본문과 GoFundMe 는 *"animals"* 로 쓰고 **Amazon 위시리스트 2종 중 하나가 "Puppy's WishList"**(강아지 분유 Esbilac·체중증가제·이유식 사료 포함)다 | 사이트 HTML, Amazon(프록시), GoFundMe(프록시) |
| **TNR 운영** | Our Story 원문 *"We also support community cats through Trap-Neuter-Return (TNR), helping reduce overpopulation."* 현재 입양 가능한 유일한 고양이도 **TNR 경유 유입**이다 | 사이트 HTML, Adopt-a-Pet(프록시) |
| 서비스 권역 | 홈페이지 원문 *"Primarily serving Cumberland, Harnett, Hoke, Robeson, and neighboring counties across NC and SC, while also partnering with rescues in other states to help animals in need across the East Coast and beyond."* | 사이트 HTML |
| 유급 직원 | **0명으로 보인다**(990 신고 이력 없어 서면 확인 불가, **추론**) | ProPublica API |
| 포스터 가구 수 | **미확인.** 폼 자기보고는 "1–10", 본인 공개 진술은 "one person team". **공개 자료에 실제 가구 수가 없다** | — |
| 수의 파트너 | **Southeastern Veterinary**(southeasternveterinary.com) 1곳. Linktree 에 *"🏥Donate Directly to Our Vet"* 로 직접 결제 링크를 걸어 뒀다 | Linktree(프록시) |
| 연락 창구 | **`p***@gmail.com` 단 하나** + 전화 1개(지역번호 **443**, 볼티모어 MD). **역할별 메일함이 없다** | 사이트 HTML, Adopt-a-Pet(프록시) |
| 웹 자산 | 자체 사이트(**GoDaddy Airo**) + **Linktree**(허브) + Facebook + Instagram + TikTok + Adopt-a-Pet + Chewy + Amazon(2) + Walmart + GoFundMe | 사이트 HTML, Linktree(프록시) |
| **소셜 규모** | **Facebook 293 팔로워 / 16 팔로잉, 리뷰 5건 100% 추천**(2026-08-31 조회). **TikTok 7 팔로워 / 8 좋아요** — 사실상 미가동. **Instagram 은 로그인 게이트로 미확인** | Facebook·TikTok(프록시) |
| **사이트 관리 주체** | **외주 흔적 없음.** GoDaddy Airo(AI 사이트 빌더) 산출물이며 대표 본인이 만든 것으로 읽힌다 (**추론**) | 사이트 HTML |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| **결산월** | **4월 결산**(IRS BMF `accounting_period: 4`). 콜 시점(2026-09-02)은 **FY2027 5개월 차**다. 일반적인 12월 결산 조직과 예산 리듬이 다르다 | ProPublica API |
| **신고 양식** | **아직 없다.** 990·990-EZ·990-N 어느 것도 제출 이력이 없고, 신고요건 코드 **2**(990-N e-Postcard, 총수입 $50,000 이하 구간)로 등록돼 있다. **재무 실측치가 공적 기록에 전혀 없다** | ProPublica API |
| **진행 중 모금 — 유일한 실측 재무 수치** | GoFundMe **"HELP US SAVE THE SICK & FORGOTTEN ANIMALS"**, organizer Elizaveta Sotchenko(Hope Mills, NC). **목표 $3,000 / 모금 $260 / 기부 9건**, 개설 **2일 차**(2026-08-31 조회). 월 정기기부가 체크아웃에서 기본 선택된 상태 | GoFundMe(프록시) |
| 프로그램 수입 | **입양비 $50**(현재 등재된 유일한 개체 기준). Adopt-a-Pet 표기 *"This helps Purrs and Paws Project with pet care costs."* | Adopt-a-Pet(프록시) |
| **기부 수취 경로 (7종)** | **PayPal**(hosted button) / **Venmo** / **Cash App**(`$purrsandpawsNC`) / **Zelle** / **GoFundMe** / **수의사 직접 결제**(Southeastern Veterinary) / 물품 위시리스트 | Linktree(프록시), 사이트 HTML |
| **Zelle 가 대표 개인 주소다** | Linktree 원문: `Zelle: l***@hotmail.com`(로컬파트 `liza.sotchenko`). **조직 gmail 이 아니라 대표 개인 hotmail 로 기부금이 들어간다.** 조직 계좌와 개인 계좌의 분리가 아직 서지 않은 정황 (**추론**, 콜에서 먼저 꺼내지 말 것) | Linktree(프록시) |
| 물품 기부 | **Chewy 위시리스트 30품목**(Chewy Gives Back 네트워크 가입, 제휴 링크로 사이트에 노출) / **Amazon 2종**(General·Puppy) / **Walmart 리스트 1종** | Chewy·Amazon(프록시), 사이트 HTML |
| 자기표기 임팩트 | 홈페이지 통계 블록: **"50+"** animals rescued and placed into our care / **"❤️ 53"** every number represents a life changed / **"Thousands of Dollars"** invested in veterinary treatment and medical care / **"100%"** foster-based / **"501(c)(3)"**. **50+ 와 53 이 같은 카드 안에서 병기돼 있어 서로 다른 지표인지 같은 수의 중복인지 불명확하다** | 사이트 HTML |
| 정부 재원 | **흔적 없음.** 보조금·시 위탁 관련 기재가 어디에도 없다 | ProPublica API, 사이트 HTML |
| **자금 용도의 우선순위** | GoFundMe 본문이 **집 안 공간 부족**을 명시하고 **부지에 세울 축사·건물 확보**를 모금 목적에 포함한다. **지금 이 조직의 자본 지출 1순위는 소프트웨어가 아니라 물리적 공간**이다 | GoFundMe(프록시) |
| 시사점 | **990-N 구간 신설 조직이고 진행 중 모금이 $260 이다. 월 구독 제안의 절대 여력이 없다.** 게다가 경쟁 도구(ShelterLuv)의 이 규모 실비가 연 수십 달러다(4절). **가격 대화로 가면 이길 수 없고, 성립하는 유일한 프레임은 "지금 정하면 나중에 옮길 게 없다"와 "혼자 감당 가능한 두수를 늘린다"이다** | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **폼 자기보고 대비 실측** | **폼 하한보다도 아래** | 폼 응답은 포스터 "1–10". 본인 공개 진술은 **"I'm currently a one person team"**(GoFundMe, 2026-08-29경). **폼 응답이 과장돼 있다기보다, 「포스터」를 「본인 포함 케어 가정」으로 셌을 가능성이 높다** (**추론**). 자릿수를 콜 초반에 갈라야 한다 |
| **현재 공개 입양 가능 두수** | **1마리** | Adopt-a-Pet **"Showing 1 - 1 of 1 available pets"**(2026-08-31 조회). 개체: **Peppy Peppercorn**, Domestic Shorthair, 암, **생후 7개월**, Brown Tabby, 입양비 **$50**, 게시 *"Posted over 2 weeks ago"*. 중성화·접종 완료, 마이크로칩 삽입, **Pet ID 공란** |
| **개체 유입 경로 (확인분)** | **TNR 경유** | Peppy 프로필 원문: *"She originally came to us through our TNR program, but Peppy had other plans—she wanted love, cuddles, and all the modern luxuries of being an indoor kitty!"* |
| **누적 자기표기** | **"50+" / "53"** | 홈페이지 통계 블록. **검증 불가**이며 기간 표기도 없다 |
| **연간 인테이크 수** | **미확인** | 990 신고가 없고 어떤 공개 자료에도 없다 |
| **입양 실적** | **미확인** | 입양 완료 개체를 모아 둔 페이지가 어디에도 없다(sitemap 6페이지 전수 확인) |
| **라이브릴리스율** | **미확인** | Shelter Animals Count 등재 확인되지 않음 |
| **현재 진행 중 케이스** | **Maxton 콜로니** | GoFundMe 원문: *"Right now, one of our biggest focuses is the colony of cats in Maxton that desperately needs our help. These cats have been surviving in horrible condition, many underweight, sick, injured and in desperate need of basic veterinary care. We've already started pulling cats from the property, but there are still more that need us."* Maxton 은 Robeson County(자체 표기 권역 안) |
| **개체당 기본 비용 자기 산정** | **$100–$150** | GoFundMe 원문: *"basic vetting alone can cost around $100–$150 to spay/neuter, test and vaccinate them. And that's assuming they're healthy."* |
| **케어 항목 자기 나열** | 중성화 / FeLV·FIV 검사 / 백신·마이크로칩 / 구충·외부기생충 / 항생제·투약 / 혈액검사·X-ray / 응급 진료 / 수술·입원 / **새끼고양이 분유와 포유 용품** / 사료·모래 / **TNR 및 커뮤니티 캣 콜로니 관리** | GoFundMe(프록시). **포유(bottle baby)와 콜로니 관리가 정규 업무에 들어 있다** |
| **용량 초과 신호** | **2026-08-31(콜 2일 전)** | Facebook 최신 글(조회 시점 기준 9시간 전): *"UPDATE: a few wonderful people stepped up and went out there to catch this baby. Please if anybody knows any rescues or anybody willing to take this baby or help financ…"* — **잡은 동물을 받아 줄 다른 레스큐를 공개적으로 찾고 있다** |
| 입양 조건 | 만 18세 이상 / 가구 구성원 전원 동의 / 임차인은 반려동물 허용 임대차 증빙 또는 임대인 승인 / **실내 사육 필수**(cats indoors only) | 사이트 HTML |
| 입양 절차 (6단계) | Submit Application → Approve Application → Meet the Pet → **Sign Adoption Contract** → **Pay Fee** → Take the Pet Home. 단 Adopt-a-Pet 의 "Their adoption process" 항목은 **N/A** 로 비어 있다 | Adopt-a-Pet(프록시) |
| 미팅 장소 | **포스터 가정**. 사이트 원문: *"We'll reach out to schedule a meet-and-greet with the animal you're interested in at their foster home."* | 사이트 HTML |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW** | **공개 흔적 0건.** 사이트 6개 페이지 HTML + JS 번들(460KB) + sitemap 을 전수 검색한 결과 **ShelterLuv·Petstablished·Pawlytics·Chameleon·PetPoint·RescueGroups·Petango·24PetConnect·Animal Shelter Manager 문자열이 하나도 없다.** 공개 ShelterLuv 입양 페이지(shelterluv.com/matchme)도 검색되지 않았다 | 사이트 HTML 전수 검색, 검색 |
| **폼의 "Shelterluv" 판정** | **미확인.** 쓰지 않는다는 증거가 아니라 **공개 자료로는 확인할 수 없다**는 뜻이다. ShelterLuv 는 내부 관리만 쓰고 공개 입양 페이지를 켜지 않는 것도 가능하다. **콜에서 반드시 먼저 확인할 것**(6절·questions) | — |
| **ShelterLuv 실비 — 경쟁 기준선** | ShelterLuv 자사 블로그 원문: **"Shelterluv costs $2.00 per adoption, billed monthly."** / *"There's no setup fee, no per-user fee, no support fee, and no charge to import your data, including your history. Every other outcome, transfers, return to owner, TNR, is free."* / 신규 조직 대상 문구 **"New rescues. Your first year costs what your first year earns."** → **이 조직 규모에서 ShelterLuv 비용은 연 수십 달러다.** 가격 경쟁이 불가능하다 | ShelterLuv 블로그(프록시) |
| **실제 시스템 = Google Form 1개 + gmail 1개 + Linktree** | Linktree 가 운영 허브다 — 소셜 2종·GoFundMe·수의사 직결제·Zelle·PayPal·Cash App·Venmo·위시리스트 4종·**신청 폼 1종**·사이트를 한 화면에 모아 뒀다. 사이트는 그 아래 홍보물이다 | Linktree(프록시), 사이트 HTML |
| **입양 신청과 포스터 신청이 같은 폼 하나** | Linktree 표기는 **"Adoption/Foster Application"** 한 줄이고 링크는 **단일 Google Form** 이다. 폼 본문은 *"Thank you for taking the time to fill out our foster application!"* 로 시작하는데, 동의 항목에 *"I understand that if approved, there will be an adoption fee for the animal I am adopting."* 가 함께 들어 있다. **한 폼이 두 목적을 겸한다** | Linktree(프록시), Google Form 원문 |
| **폼 문항 (확인된 전량)** | 성명(필수) / 주소(필수) / 전화(필수) / 이메일(필수) / **관심 개체 — 자유 서술**(*"If you are interested in a specific animal, please tell us which one."*, 선택) / 동거인 전원 이름·나이(룸메이트·아동 포함) / 기존 반려동물 전체(*"name, age, species, breed, and gender… If they are a foster please let us know what rescue or shelter they are with."*) / 기존 동물의 백신·심장사상충·중성화 상태 / 실외 사육 여부 / 알러지 / 자가·임대 / 임대 제한(체중·품종) / **임대 관리인 연락처** / 울타리 종류·높이 / 실내외 / 야간·부재 시 위치 / 여행 시 / 하루 혼자 두는 시간 / 행동 문제 대응 계획 / **수의사 연락처** / **비친족 개인 레퍼런스 1인** / **가정방문 수용 여부** / 재정 약속 / 이사 시·출산 시 / 아동 감독 / 추가 사항 / 동의 3종 | Google Form 원문 |
| **폼에 없는 문항 (핵심)** | **①동시에 몇 마리까지 맡을 수 있는가 ②언제부터 언제까지 가능한가 ③투약·포유(bottle baby)·회복기 케어가 가능한가 ④포스터 지원인가 입양 지원인가.** 조직 업무에 포유와 의료 케어가 실제로 들어 있는데(3절) **배치 판단에 필요한 정보를 접수 단계에서 받지 않는다** | Google Form 원문 |
| **심사가 전화 3통 수작업** | 폼 원문: *"What is your vet's name and contact information? Please note that we will contact them ourselves to make sure that all animals have been properly vetted."* / *"In addition to contacting your vet and your property manager (if renting) we will also contact a personal reference."* → **한 건당 수의사·임대 관리인·개인 레퍼런스 3곳에 직접 연락한다.** 1인 조직에서 이게 병목이다 (**추론**) | Google Form 원문 |
| **가정방문 주체가 복수형이다** | 폼 원문: *"Are you open to the directors coming for a home visit to see where the animal will be living?"* — **"the directors"(복수)**. 그런데 본인은 "one person team" 이라 적었고 사이트에 이사 명단이 없다. **표현과 실체가 어긋난다. 실제 방문자가 누구인지 확인 필요** | Google Form 원문, GoFundMe(프록시) |
| **사이트 문의 폼 수신처** | 사이트 Contact 폼은 JS 번들 기준 **`/api/contact/contact-us`**(GoDaddy Airo 백엔드)로 전송된다. **그 뒤 어디로 도착하는지는 공개 자료로 알 수 없다** — gmail 로 전달되는지, Airo 대시보드에만 쌓이는지 미확인 | 사이트 JS 번들 |
| **개체 기록을 담는 그릇이 없다** | sitemap 전량이 **6개 페이지**(`/`, `/our-story`, `/foster`, `/adopt`, `/donate`, `/contact`)다. **개체 페이지·CMS 컬렉션·회원 영역이 하나도 없다.** `/adopt` 페이지는 개체를 직접 싣지 않고 **Adopt-a-Pet 위젯으로 넘긴다** | sitemap, 사이트 HTML |
| **개체 식별자 부재** | Adopt-a-Pet 개체 상세의 **Pet ID 가 공란(`—`)** 이다. 쉘터 관리 SW 연동 시 통상 채워지는 값이다 (**정황**, 단정 불가) | Adopt-a-Pet(프록시) |
| **의료 정보의 실제 위치** | Peppy 의 의료 정보는 체크박스 3종(Shots current / Spayed-neutered / Microchipped)과 **마케팅 산문**뿐이다. 투약·이력을 담는 필드가 어느 채널에도 없다 | Adopt-a-Pet(프록시) |
| **채널 3중 불일치 (핵심)** | **①사이트 푸터·전 페이지의 Facebook·Instagram 아이콘 링크가 타 조직으로 나간다** — `facebook.com/pawsathomenc`, `instagram.com/pawsathomenc` 는 **Paws At Home Foundation Inc**(EIN 33-2579739, Cumberland NC, IRS 수신인 `% NICOLE LIMONGIELLO`, 면세승인 2025-01)의 계정이다 **②/contact 페이지 본문 텍스트는 또 다르게** `facebook.com/purrsandpawsproject`·`@purrsandpawsproject` 라고 적혀 있다 **③실제 계정은 세 번째다** — Facebook 은 숫자 ID(`61563670567828`) 프로필이고 Instagram 은 **`@purrsandpawsprojectnc`**(Linktree 기준)다. **사이트에서 소셜 아이콘을 누르면 남의 조직으로 간다** | 사이트 HTML, ProPublica API, Linktree·Facebook(프록시) |
| Paws at Home 과의 관계 | **확인되지 않는다.** Paws at Home 사이트에 Sotchenko·Purrs 문자열이 0건이고, 양쪽을 잇는 공개 근거가 없다. **Airo 사이트를 만들며 인접 레스큐 계정을 참고용으로 넣고 지우지 않은 것으로 읽는 편이 단순하다** (**추론**, 확인 필요하나 **콜에서 먼저 지적하지 말 것**) | Paws at Home 사이트 HTML, 검색 |
| 외부 등재 | **Adopt-a-Pet**(보호소 번호 290478) / **Chewy**(Gives Back, 30품목). **Petfinder 등재는 확인되지 않았다** | Adopt-a-Pet·Chewy(프록시), 검색 |
| 결제·기부 | PayPal / Venmo / Cash App / **Zelle(대표 개인 hotmail)** / GoFundMe / 수의사 직접 결제 / Chewy·Amazon·Walmart 위시리스트 | Linktree(프록시), 사이트 HTML |
| 웹 분석 | **사실상 없다.** `analytics.js` 는 *"C2 analytics loading is now managed by CookieBanner component"* 주석과 빈 데이터레이어뿐이고, GA4·Matomo 스크립트가 검색되지 않는다 | 사이트 JS |
| 채용 공고 | **없다.** 1인 조직이므로 자격 요건에서 도구명을 읽어 낼 창구가 원천적으로 없다 | 검색 |
| **종합 판정** | **경쟁 도구에 불만이 생긴 리드가 아니고, Fawn's 처럼 대체물을 손수 지어 굴리다 한계에 닿은 리드도 아니다. 조직 자체가 3개월 차이고 지금 인프라를 처음 세우는 중인 리드다.** 3주 사이에 사이트·모금·리드가 몰렸고, 그 인프라가 아직 **Google Form 1개 + gmail 1개 + Linktree** 다. **레거시가 없다는 것이 이 건의 성격이고**, 반대로 **아직 아플 만큼 쌓인 것도 없어서 통증이 약할 위험**이 같은 크기로 있다 | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| 결정 라인 | **Liza(Elizaveta) Sotchenko 한 사람.** 본인이 *"one person team"* 이라 적었고, 사이트 6페이지·IRS BMF 어디에도 다른 사람 이름이 없다. **콜 상대가 곧 결재자이고 동시에 유일한 실행자다** |
| 이사회 | **미확인.** 501(c)(3) 승인을 받았으므로 서류상 이사회는 존재하나 **명단이 어디에도 공개돼 있지 않다.** 폼에는 *"the directors"* 라는 복수 표현이 있는데 실체가 확인되지 않는다 |
| 전결 한도 | **미확인.** 990-N 구간이라 지출 승인 기준이 공개되는 서식 자체가 없다 |
| 예산 사이클 | **4월 결산.** 콜(2026-09-02)은 **FY2027 5개월 차**다. 다만 **신고 이력이 0건이고 조직이 3개월 차라 「예산 편성」이라는 절차가 아직 없을 가능성이 높다** (**추론**) |
| **지불 여력** | **극히 얇다.** 진행 중 모금 $260/$3,000(9건), 입양비 $50, 990-N 구간. **게다가 지금 모으는 돈의 지정 용도가 축사·건물이다** |
| **비용 감각** | GoFundMe 본문이 **$1 단위**로 설득한다 — *"If 100 people donated just $1, that's $100 toward their care."* **금액을 잘게 쪼개 정당화하는 사람**이며, 신규 고정비에 강하게 방어할 상대로 보고 접근한다 (**추론**) |
| 유료 도구 이력 | **확인되는 유료 지출은 도메인·GoDaddy Airo 구독뿐이다.** 폼의 Shelterluv 가 실제 계약인지 미확인. **"도구에 매달 돈을 쓴다"는 관문을 넘었는지 자체가 불명확하고, 넘었더라도 그 기준선이 ShelterLuv 의 $2/입양이다** |
| **경쟁 구도의 특수성** | 통상 리드는 "쓰던 도구가 불편하다"에서 출발하는데, 이 건은 **가장 강력한 경쟁자가 「아무것도 안 쓰기」와 「사실상 무료인 ShelterLuv」 둘**이다. **기능 우위가 아니라 "1인이 감당 가능한 두수를 늘린다"는 결과로만 설득이 성립한다** (**추론**) |
| IT 의사결정 | **본인.** GoDaddy Airo·Google Forms·Linktree를 직접 붙였고 외주 흔적이 없다. **새 도구 도입은 본인이 만든 것을 일부 대체하는 일이 된다** |
| 2차 콜 후보 | **남편**(부지·건물 자금 의사결정에 함께 관여, GoFundMe 명시) / **미확인 이사회 구성원** / **첫 포스터 가정 1~2인**(생기는 대로) |
| 실무 병목 | **문의·입양신청·포스터신청·기부·물품이 전부 gmail 한 곳과 Linktree 한 화면으로 들어온다.** 역할별 메일함이 없고, 사이트 문의 폼은 Airo 백엔드로 따로 빠진다 |

## 6. Liza Sotchenko 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| 정식 표기 | **Elizaveta Sotchenko**(Adopt-a-Pet Contact, GoFundMe organizer, Amazon 리스트 소유자). 리드 폼의 "Liza"는 통용 애칭 | Adopt-a-Pet·GoFundMe·Amazon(프록시) |
| 직책 | **조직 공개 문서에 직책 표기가 전혀 없다.** 폼 자기보고는 "Executive director or founder". Adopt-a-Pet 유일 담당자·GoFundMe organizer·Zelle 수취인·위시리스트 소유자가 모두 본인이라는 사실로 **실질 대표임은 확정**되나, 창업자인지 ED 인지는 **미확인** | 사이트 HTML, 각 플랫폼 |
| **실질 역할 (원문)** | *"There's also an enormous need for more space within my home as I'm currently a one person team, so my husband and I are actively in search of a barn/building to add to our property and to raise money for it."* — **케어·모금·심사·게시가 전부 본인 한 사람이고, 동물이 본인 집에 있다** | GoFundMe(프록시) |
| 가족 | **기혼.** 남편과 함께 부지에 축사·건물 확보를 추진 중 | GoFundMe(프록시) |
| **직업 배경** | **미확정.** 검색 결과 제목 기준 **"Elizaveta Sotchenko - Certified Pharmacy Technician - Walgreens \| LinkedIn"** 프로필이 존재하나, LinkedIn 이 로그인 게이트라 **원문을 열지 못했고 동일인 확인 근거가 이름뿐**이다. **동일인이라면 투약·용량·복약 스케줄이 모국어인 상대**라 콜 화법이 크게 달라지므로, **단정하지 말고 콜에서 자연스럽게 확인할 것** | 검색(제목만), LinkedIn 미열람 |
| 거주 이력 | **Maryland → North Carolina 이주로 읽힌다** — 등록 전화 지역번호 **443**(볼티모어), 별개로 `Liza Sotchenko` / `Parkville, MD` 가 소비자 리뷰 사이트에 함께 표기(HTML 원문 문자열 일치 확인). **동일인 여부는 이름·주(州) 일치 외 근거 없음**(**추론**) | Adopt-a-Pet(프록시), bestcompany.com HTML |
| **화법 — 개체 서사형** | GoFundMe·개체 프로필 모두 한 마리의 사연으로 끌고 간다. Peppy 프로필 원문: *"And if there's ever an opening at the biscuit factory, Peppy is hired!"* / GoFundMe: *"Tomorrow, it could be the kitten found on the side of the road."* **이모지를 많이 쓰고 구어체다.** 조직 지표·대시보드·ROI 화법은 이 사람의 언어가 아니다 | GoFundMe·Adopt-a-Pet(프록시) |
| **화법 — 금액을 잘게 쪼갠다** | *"We are NOT asking everyone for $20, $50 or $100… Your $1 matters."* **비용을 최소 단위로 분해해 정당화하는 습관**이 있다. 우리 가격을 꺼내는 순간 같은 방식으로 분해당한다 (**추론**) | GoFundMe(프록시) |
| **작성 보조 도구 사용 정황** | GoFundMe 본문 **맨 마지막 줄**이 캠페인 독자가 아니라 작성자에게 하는 말이다 — *"This keeps Maxton as the immediate reason people should donate right now, while preventing you from having to create a brand-new GoFundMe every time another animal needs you."* 2인칭 `you` 가 기부자가 아니라 **본인**을 가리킨다. **초안 작성 보조 도구(또는 조력자)의 설명 문장을 지우지 않고 그대로 게시한 것으로 읽힌다** (**추론**, 다른 해석도 가능). → **새 도구에 대한 심리적 장벽이 낮은 상대**로 볼 근거이며, **콜에서는 절대 언급하지 않는다** | GoFundMe(프록시) |
| 성향 판정 | **①3개월 차 조직을 혼자 세우는 중 ②케어·모금·심사·게시를 전부 혼자 함 ③개체 단위 구체어로 말함 ④금액을 잘게 쪼갬 ⑤최근 18일에 사이트·모금·리드를 몰아서 처리** — **속도와 실행력은 있으나 시간과 돈이 없고, 지금 필요한 것은 기능이 아니라 「혼자 굴러가게 만드는 순서」다.** 컨설팅 톤이 아니라 **동료 톤**이 맞는다 (**추론**, 직접 인용 가능한 인터뷰 발언이 없어 검증도가 낮다 — 콜 초반에 화법을 관찰해 조정할 것) | 추론 |
| **언론 노출** | **없다.** 조직·개인 모두 지역 언론 보도가 검색되지 않는다. Maxton 콜로니 건도 보도가 없다 | 검색 |
| 이름 표기 주의 | **본인이 밝힌 대명사가 확인되지 않았다. 콜 전까지 단정하지 말 것** | — |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2026-06-01** | **IRS 면세 승인**(ruling date). 501(c)(3), NTEE D20, 4월 결산, 990-N 구간 | ProPublica API |
| 2026-07-22 | ProPublica Nonprofit Explorer 에 레코드 최초 생성 | ProPublica API |
| **2026-08-14** | **자체 사이트 게시**(purrsandpawsproject.com, JSON-LD `datePublished`·`dateModified` 동일). GoDaddy Airo 산출물 | 사이트 HTML |
| 2026-08 중순 | **Adopt-a-Pet 에 첫 개체 등재** — Peppy Peppercorn, *"Posted over 2 weeks ago"*(2026-08-31 조회 기준) | Adopt-a-Pet(프록시) |
| **2026-08-29경** | **GoFundMe 개설** — "HELP US SAVE THE SICK & FORGOTTEN ANIMALS", 목표 $3,000. 조회 시점 표기 *"Created 2 d ago"*. **Maxton 콜로니가 즉각적 명분** | GoFundMe(프록시) |
| **2026-08-31** | **Facebook 에 용량 초과 신호** — 조회 9시간 전 게시글에서 잡은 동물을 받아 줄 **다른 레스큐를 공개적으로 찾는다** | Facebook(프록시) |
| **2026-08-31** | **리드 폼 제출**, 미팅 2026-09-02 예약 | 리드 폼 |
| 진행 중 | **Maxton(Robeson County) 고양이 콜로니 인수** — *"We've already started pulling cats from the property, but there are still more that need us."* | GoFundMe(프록시) |
| 진행 중 | **부지 내 축사·건물 확보 모금** — 집 안 공간 부족이 명시적 제약 | GoFundMe(프록시) |
| **부정적 사건** | **소송·행정처분·동물 압류·자금 논란·언론 부정 보도 전부 검색되지 않았다.** 애초에 **이 조직에 대한 언론 보도 자체가 없다** | 검색 |

→ **면세승인(6월)·사이트(8/14)·첫 등재(8월 중순)·모금(8/29)·리드(8/31)가 3개월, 특히 최근 18일에 몰려 있다. 조직 인프라를 지금 한꺼번에 세우는 국면이고 우리는 그 창 안에 들어왔다.**

## 8. 워크플로 힌트 (수기 업무 추정 단서)

정황에서 끌어낸 것만 적는다. 각 줄에 확인 필요 여부를 밝힌다.

- **포스터가 아직 없거나 극소수다 — 이것이 이 콜의 중심이다.** 본인 진술이 *"I'm currently a one person team"* 이고, 그 문장의 문맥이 **"집 안 공간이 부족하다"** 다. 즉 동물이 여러 가정에 흩어져 있는 게 아니라 **한 집에 쌓여 있다.** → **소재 B(임시보호자 업데이트 수집)가 겨냥한 통증이 아직 발생하지 않았을 수 있다. 대신 「포스터를 어떻게 처음 모으고 배치하느냐」가 실제 통증이다. 콜 첫 30초에 확인.**
- **입양 신청서와 포스터 신청서가 같은 Google Form 하나다.** Linktree 표기가 *"Adoption/Foster Application"* 한 줄이고 폼 안에 포스터 안내문과 입양비 동의가 함께 들어 있다. → **들어온 신청이 포스터 지원인지 입양 지원인지 폼 자체로는 구분되지 않는다. 어떻게 갈라 보고 계신지 확인 필요.**
- **배치 판단에 쓸 문항이 접수 폼에 하나도 없다.** 문항 전량을 확인했는데 **동시 가능 두수·가용 기간·투약 가능 여부·포유(bottle baby) 가능 여부**가 없다. 그런데 조직 업무에는 포유와 투약이 실제로 들어 있다(GoFundMe 케어 항목). → **"승인된 포스터에게 어떤 아이를 보낼지"를 무엇을 보고 정하는지가 비어 있다. 확인 필요.**
- **심사가 한 건당 전화 3통이다.** 폼 원문이 수의사·임대 관리인·개인 레퍼런스 3곳에 *"we will contact them ourselves"* 라고 못 박는다. → **1인 조직에서 신청 1건당 전화 3통이면 포스터를 늘리려는 순간 본인이 병목이 된다. 지금 신청이 몇 건 들어오고 처리에 얼마나 걸리는지 확인 필요.**
- **가정방문 주체가 "the directors"(복수)로 적혀 있는데 본인은 1인 팀이라고 썼다.** → **실제로 누가 방문하는지, 이사회가 서류상 존재인지 실동 인력인지 확인 필요.** 조달 결정 라인과도 직결된다.
- **개체 기록을 담는 그릇이 조직 자산 안에 없다.** 사이트 sitemap 6페이지 전량에 개체 페이지가 0건이고, 개체 정보는 **Adopt-a-Pet 한 곳**에만 있으며 그 **Pet ID 는 공란**이다. 의료 정보도 체크박스 3종과 마케팅 산문뿐이다. → **"지금 몇 마리를 데리고 있고 각각 어느 단계인가"를 어디서 보는지가 비어 있다. 종이인지, 휴대폰 메모인지, 스프레드시트인지 확인 필요.**
- **폼에 적은 Shelterluv 의 흔적이 공개 채널에 0건이다.** 사이트·JS 번들·공개 입양 페이지 어디에도 없다. → **실제 계정을 운용 중인지, 만들어만 뒀는지, 다른 도구와 혼동한 것인지. 답에 따라 우리 제안의 자리가 통째로 바뀐다. 콜 초반 필수 확인.**
- **입양 가능 목록이 한 채널에만 있고 그마저 1마리다.** Adopt-a-Pet 1마리, Petfinder 미등재, 사이트 개체 페이지 0. 그런데 자기표기는 "50+ rescued" 이고 Maxton 콜로니에서 계속 끌어오는 중이다. → **끌어온 아이들이 지금 어디에 어떤 상태로 있고 왜 공개 목록에 안 올라오는지가 비어 있다. 콜에서 먼저 지적하지 말고 "새 아이가 들어오면 어디어디에 올리시나요"로 물어 상대가 스스로 세게 할 것.**
- **사이트 소셜 링크가 전부 다른 조직으로 나간다.** 푸터 아이콘이 `pawsathomenc`(Paws At Home Foundation Inc, 별개 법인), Contact 본문 텍스트는 또 다른 값, 실제 계정은 세 번째다. → **사이트가 운영 자산이 아니라 홍보물이고, 실제 허브는 Linktree라는 방증**(**추론**). **콜에서 먼저 지적하지 말 것** — 무례하게 들리고 얻는 것도 없다.
- **문의가 두 갈래로 들어온다.** 사이트 Contact 폼은 GoDaddy Airo 백엔드(`/api/contact/contact-us`)로, 나머지는 전부 gmail 로 간다. → **Airo 로 들어온 문의를 실제로 보고 계신지 확인 필요.** 안 보고 있으면 그 자체가 콜에서 가치 있는 발견이 된다.
- **기부가 7개 경로로 흩어지고 그중 Zelle 는 대표 개인 주소다.** PayPal·Venmo·Cash App·Zelle·GoFundMe·수의사 직결제·위시리스트 4종. → **어느 채널로 얼마가 들어왔는지 합산하는 방법이 있는지 미확인.** 단, **개인 계좌 얘기는 우리가 먼저 꺼내지 않는다.**
- **콜로니·TNR 이 정규 업무인데 그 기록 구조가 어디에도 없다.** GoFundMe 가 *"TNR and care for community cat colonies"* 를 케어 항목에 명시하고, 현재 유일한 입양 개체도 TNR 유입이다. → **콜로니 단위 개체(포획·중성화·방사·보류)를 무엇으로 세는지 확인 필요.** 우리 제품이 이 축을 다루는지는 별개 문제이므로 **억지로 끌어오지 말 것.**
- **인테이크 압력이 이미 용량을 넘었다.** 콜 2일 전 Facebook 글에서 잡은 동물을 받아 줄 다른 레스큐를 공개적으로 찾고 있다. → **"지금 못 받고 돌려보내는 케이스가 얼마나 되는가"가 이 조직의 진짜 지표다. 확인 필요.**

## 미확인 요약 (콜에서 확인할 것)

1. **지금 몇 가구가 몇 마리를 데리고 있고, 그중 본인 집에 몇 마리인가** — 폼은 "1–10", 본인 공개 진술은 "one person team". **첫 30초 안건**
2. **Shelterluv 를 실제로 쓰고 있는가, 계정만 만든 것인가, 다른 도구와 혼동한 것인가** — 공개 흔적 0건. 답에 따라 제안의 자리가 통째로 바뀐다
3. **포스터를 늘리려 할 때 무엇이 막고 있는가** — 신청이 안 들어오는가, 들어오는데 심사(전화 3통)가 밀리는가, 배치 후 상태를 못 보는가. 셋은 완전히 다른 문제다
4. **승인된 포스터에게 어떤 아이를 보낼지 무엇을 보고 정하는가** — 접수 폼에 동시 가능 두수·가용 기간·투약/포유 가능 여부가 없다
5. **지금 데리고 있는 아이들의 상태를 어디서 보는가** — 개체 기록을 담는 그릇이 조직 자산 안에 없다. 종이·메모·스프레드시트 중 무엇인가
6. **입양 신청과 포스터 신청을 같은 폼으로 받는데 어떻게 갈라 보는가**
7. **가정방문을 실제로 누가 하는가 — "the directors" 는 누구인가** — 조달 결정 라인과 직결
8. **이사회가 서류상 존재인가, 실동 인력인가** — 도구 예산이 대표 재량인가 동의가 필요한가
9. **새 아이가 들어오면 어디어디에 올리는가** — 현재 Adopt-a-Pet 1마리뿐이고 Petfinder 미등재다. 먼저 지적하지 말고 물어서 상대가 세게 할 것
10. **Maxton 콜로니에서 지금까지 몇 마리를 끌어왔고 그 아이들은 지금 어디 있는가** — 조직의 현재 최우선 과제
11. **TNR·콜로니 개체를 무엇으로 세는가** — 우리 제품 적합성과 별개로 업무 구조 파악에 필요
12. **못 받고 돌려보내는 케이스가 얼마나 되는가** — 콜 2일 전 공개 인계 요청이 있었다
13. **사이트 Contact 폼으로 들어온 문의를 보고 있는가** — Airo 백엔드로 따로 빠진다
14. **본인의 직업 배경** — 검색 결과 제목상 Certified Pharmacy Technician(Walgreens) 프로필이 있으나 동일인 미확정. **투약 관리 전문성이 있다면 콜 화법이 크게 달라진다**
15. **조직을 언제부터 실제로 굴리기 시작했는가** — 면세승인은 2026-06 이나 그 이전 활동 개시 시점이 확인되지 않는다. "50+ rescued" 가 어느 기간의 수인지와 함께 확인
16. **소재 B(임시보호자 업데이트 수집)로 들어온 이유** — 아직 포스터가 없는데 그 광고에 반응했다면, **지금 없는 것을 만들려는 의도**일 가능성이 높다. 그 의도를 직접 듣는 것이 이 콜의 최대 소득이다
