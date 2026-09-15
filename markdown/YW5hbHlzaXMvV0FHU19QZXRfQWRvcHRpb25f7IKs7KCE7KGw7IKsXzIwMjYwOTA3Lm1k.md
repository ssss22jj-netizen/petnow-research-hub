# WAGS Pet Adoption 사전조사

- 작성일: 2026-09-07 / 목적: Michelle 콜 준비(미팅 2026-09-17) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Shelter", "role": "Executive director or founder", "system": "Shelterluv", "adoptions": "Over 300"}` / 유입 소재 **A(입양 준비 상태 추적 — 폼에서 연간 입양 건수를 물었다)** / `intent: book`
- **조직·신청자 모두 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: 조직 사이트는 **page-sitemap 기재 48개 페이지 중 핵심 16개의 HTML 원문을 내려받아 문자열 검색**했다. 그 경우 출처에 `사이트 HTML`로 표기
- 출처 주석 ②: **자동 요약기가 원문에 없는 문장을 인용부호로 반환하는 사고가 과거에 확인됐다.** 이 문서에 큰따옴표로 인용한 영문은 **전부 내려받은 원문에서 문자열 일치로 재검증**한 것만 실었다
- 출처 주석 ③: 운영 통계는 **ShelterLuv 공개 임베드 API(`/api/v3/available-animals/16808`)를 2026-09-07 직접 호출해 얻은 255건 레코드**를 집계한 값이다. 조직이 게시한 연간 통계가 아니다. 그 한계는 3절에 명시했다
- 출처 주석 ④: **990 원문 PDF 는 확보하지 않았다.** 재무 수치는 **ProPublica API(IRS 추출 데이터)** 값이다. **FY2024 는 IRS BMF 요약(수입·자산)만 잡히고 상세 항목이 아직 없다.** Facebook·Instagram·LinkedIn·Yelp·Petfinder(Akamai 차단)는 자동 열람이 막혀 **미확인**으로 처리했다
- 출처 주석 ⑤: 검색 결과에 잡힌 `bdpets.com` 기사는 **AI 생성 오보**(「WAGS = Walk and Grow Service」, 「2024년 3월」 등)라 **인용하지 않았다**
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Westminster Adoption Group And Services Inc, EIN 45-2740601, Westminster, CA**(Orange County). 501(c)(3), **면세승인 2011-11**, NTEE **D20**, **12월 결산**, 정식 990 신고(2011년분부터 열람 가능) | ProPublica API |
| **동명 조직** | ProPublica `Westminster Adoption Group` 검색 결과가 **전국에 정확히 1건**이다(`total_results: 1`). 통칭인 `WAGS Pet Adoption` 으로는 IRS 등록명이 다르므로 0건이고, `WAGS Pet Adoption` 검색 시 나오는 유일한 건은 **Live-love-wag Pet Rescue(EIN 47-5007107, Ainsworth, NE)** 로 주·성격이 전혀 다르다. 교차 오염 여지 없음 | ProPublica API |
| **조직 자기표기 EIN** | 조직 **전 페이지 푸터에 `Westminster Adoption Group and Services, Inc. | EIN: 45-2740601`** 이 그대로 박혀 있다. IRS 등록번호와 일치 | 사이트 HTML |
| **이메일 도메인** | 리드 도메인 **wagspetadoption.org 가 조직 공식 도메인**이다. 대표 주소 `i***@wagspetadoption.org` 가 전 페이지 푸터에 게시돼 있다 | 사이트 HTML |
| **신청자 — 결정적 근거 ①** | **IRS BMF 의 care-of name 이 `% MICHELLE RUSSILLO`** 다. 즉 IRS 가 이 법인의 수신 담당자로 등록해 둔 이름이 신청자 이름과 같다 | ProPublica API(BMF) |
| **신청자 — 결정적 근거 ②** | **Costa Mesa 시 공식 보도자료가 이름·직책을 명시한다** — 원문: *"Dr. Michelle Russillo, the President and CEO of WAGS Pet Adoption said she looks forward to the partnership with Costa Mesa."* | cityofcostamesanews.com |
| **신청자 — 결정적 근거 ③** | 조직 팀 페이지에 **`MICHELLE RUSSILLO, D.B.A.` / `President`** 로, 개인 상세 페이지에는 **`CEO`** 로 실려 있다. 개인 페이지 이미지 alt 도 `CEO Michelle Russillo` | 사이트 HTML |
| **신청자 — 보조 근거** | 조직 푸터의 **Pinterest 링크가 `pinterest.com/mrussillo/`** 다. 조직 계정이 아니라 **본인 개인 계정이 조직 소셜 채널로 걸려 있다** | 사이트 HTML |
| 폼 자기보고 대조 | `org_type: Shelter` → **4개 시 계약 시립 보호소**(맞음) / `role: Executive director or founder` → **President 겸 CEO**(사실상 맞음, 다만 조직 내 「Executive Director」 표기는 Cortney Dorney 쪽에 붙어 있다) / `system: Shelterluv` → **ShelterLuv 실사용 확정**(GID 16808, 조직 코드 `WAGS`) / `adoptions: Over 300` → **폼 최상단 구간. 실제 규모는 이 구간이 시사하는 것보다 훨씬 크다**(3절) | leads.json, 사이트 HTML, ShelterLuv API |

→ **조직도 신청자도 확정.** EIN 이 조직 사이트에 직접 게시돼 있고, IRS BMF care-of name 과 시 공식 보도자료가 신청자 이름·직책을 동시에 확인해 준다. **콜에서 신원 확인에 시간을 쓸 필요가 없다.**

## 미팅에서 바로 쓸 핵심 5줄

1. **이 조직은 ShelterLuv 를 제대로 쓴다. 그런데 자기 사이트 메뉴의 「Adoptable Dogs」는 ShelterLuv 가 아니라 사람이 만든 Google Slides 59장짜리 덱이고, 같은 시각 ShelterLuv 에는 개가 64마리 있다** — 사이트 상단 메뉴 `Adopt > Adoptable Pets > Adoptable Dogs` 의 링크가 `docs.google.com/presentation/d/1r3ATGBV6pWaMrCKPW17Kvj2IvMdJrS0zHQC_D0tPuOU/present?slide=id.g2ee743dd9fe_0_228` 다. 덱 제목은 **`WAGS Dogs`**, **슬라이드 59장**, 이미지가 전부 Google Drive 에 업로드된 원본이라 **pptx 내보내기 용량이 431MB** 다(2026-09-07 실측). 같은 시각 ShelterLuv 공개 API 는 **개 64마리**를 반환한다. **덱과 원장을 잇는 연동은 존재하지 않는다** — Google Slides 에는 ShelterLuv 커넥터가 없다. **콜의 첫 질문은 「새 아이가 들어오거나 나가면 그 슬라이드는 누가 언제 고치시나요」다.** 우리가 「어긋나 있다」고 먼저 말하지 않는다.

2. **개 임시보호 프로그램이 지금 멈춰 있고, 멈춘 이유를 조직이 「포스터 절차를 검토·갱신 중」이라고 스스로 적어 두었다** — `/wags-dog-fostering/` 페이지 원문: ***"Dog Fostering Program Temporarily On Hold"*** / ***"Our Dog Fostering Program is temporarily on hold while we review and update our foster procedures."*** / ***"We appreciate your understanding and look forward to reopening the program in the future."*** 그 페이지의 sitemap `lastmod` 가 **2026-06-25** 다. **콜 시점 기준 약 2개월 반째 중단**이고, **절차를 다시 짜는 중인 조직에 절차 도구를 파는 자리**다. 이보다 좋은 타이밍은 우리 리드 풀에 거의 없다. 다만 **「왜 멈췄나」를 우리가 캐묻는 순간 방어가 걸린다.** 여는 말은 **「지금 포스터 절차를 다시 만드시는 중이라고 사이트에서 봤습니다. 어디를 바꾸려고 하시는 건가요」** 한 줄이다.

3. **폼의 「Over 300」은 폼 선택지의 천장일 뿐이고, 실제 규모는 우리 리드 풀 상위권이다. 지금 이 순간 입양 공개 두수가 255마리다** — ShelterLuv 공개 API 2026-09-07 실측 **255마리(고양이 190 · 개 64 · 토끼 1)**, Adopt-a-Pet 조직 페이지 표기도 **`1 - 9 of 255 pets available`** 로 정확히 일치한다. 그리고 이 조직은 **Westminster · Stanton · Seal Beach · Costa Mesa 4개 시의 시립 보호소**다(자기 표기: ***"WAGS is the city shelter for Westminster, Stanton, Seal Beach and Costa Mesa California"***). 2019년 자기 진술 기준으로도 인테이크가 **연 1,500 → 약 3,000마리**로 늘었고 **상시 보유가 300~600마리**였다. **폼 응답은 축소가 아니라 선택지 부족이다 — 콜에서 「연 몇 마리 나가느냐」를 먼저 정확히 받아 적을 것.**

4. **「입양 나갈 준비가 됐는가」가 이 조직에서는 이미 명시적 개념이고, 조회 방법이 전화다. 우리 소재 A 와 문장 단위로 겹친다** — FAQ 원문 셋: ***"Verify that the animal is still at WAGS, and verify the available date."*** / ***"If a pet you are interested in is not yet available, WAGS will take applications until the day of availability and select the best home based on the applications."*** / ***"no pet will be released for adoption until after the spay and neuter has been completed."*** 즉 **「available date」라는 상태값이 실무에 존재하고, 그 앞에 입양 신청 대기열이 쌓이며, 게이트는 중성화 완료 + 수의 클리어의 논리곱**이다. 그런데 그 날짜를 밖에서 볼 방법이 없어서 **조직이 스스로 「전화해서 확인하라」고 안내한다.** 포스터 쪽 정의도 똑같다 — 포스터 역할 원문이 ***"Foster the animal(s) until they are ready for adoption"*** / ***"Return the animal to WAGS for adoption"*** 인데, **누가 「ready」를 판정하고 포스터가 그걸 어디서 보는지는 어디에도 없다.**

5. **결재는 한 사람에게 모여 있는데 그 사람이 30년째 무보수다. 그리고 조직은 2년 연속 적자를 지나 방금 네 번째 시를 떠안았다** — Michelle Russillo 는 **President 겸 CEO** 이고 정관상 President 가 **chief executive officer 로서 계약에 서명**한다(원문: *"The President shall be the chief executive officer of [WAGS] and, in general, shall supervise and control all of the business and affairs"*). 이사는 **5~10인, 전원 무보수**, **서면 동의로 의결 가능**하다. 990 상 **임원 보수는 FY2016~FY2023 전 연도 $0** 이고, 본인도 2019년 공개 글에 ***"As the CEO, I am a volunteer. I have never received a paycheck from WAGS for the past 8 years."*** 라고 썼다. 재무는 **FY2022 −$85,981 · FY2023 −$178,481 로 2년 연속 적자**, FY2023 순자산 $360,547(연 지출의 약 3.4개월). FY2024 수입은 $1,398,654 로 +27.2% 회복. **2026-06-11 Costa Mesa 임시 계약이 붙었고 그 계약은 「임시」이며 시가 정식 RFP 를 낸다.** → **가격은 절대 먼저 꺼내지 않는다.** 꺼낼 자리가 오면 프레임은 「돈」이 아니라 **「직원 시간」과 「RFP 에 낼 수 있는 운영 근거」** 다.

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Westminster Adoption Group And Services Inc**(IRS 등록명). 통용 표기 **WAGS Pet Adoption**, 정관 표기는 **Westminster Adoption Group Services (WAGS Pet Adoption)** 로 또 다르다 | ProPublica API, 정관 PDF |
| EIN·지위 | **45-2740601** / 501(c)(3), **면세승인 2011-11**(EIN 부여 통지 **2011-07-14**), **12월 결산**, 재단분류 코드 15, 신고요건 코드 1 | ProPublica API, 정관 PDF 첨부 IRS CP 575 A |
| NTEE | **D20**(Animal Protection and Welfare) | ProPublica API |
| 소재지 | **Westminster, CA**(Orange County). IRS 등록지·사이트 표기 동일 | ProPublica API, 사이트 HTML |
| **성격 — 핵심** | **시설 보유 오픈형 「시립 보호소」다. 레스큐가 아니다.** 자기 표기 원문: ***"WAGS is the city shelter for Westminster, Stanton, Seal Beach and Costa Mesa California"*** / ***"Every companion animal in need of shelter and care from the City of Westminster, Stanton, Seal Beach and Costa Mesa is welcome here whether or not we believe the animal is 'adoptable.'"*** | 사이트 HTML |
| **서비스 권역** | **Westminster · Stanton · Seal Beach · Costa Mesa 4개 시.** 시 인구 합계는 대략 26만 명 규모다(**추론**, 개별 시 인구는 별도 확인 필요) | 사이트 HTML, 추론 |
| 설립 | **2011년**, **Dr. Tia Greenberg**(수의사)가 설립. 원문: *"In 2011, Dr. Greenberg as a veterinarian saw a need to change the way the city of Westminster did animal shelter care, so she opened WAGS."* | 사이트 HTML |
| **설립자 겸 의료 총괄** | **Dr. Tia Greenberg — Founder of WAGS Pet Adoption / Owner of Westminster Veterinary Group / Medical Director.** 즉 **설립자가 소유한 동물병원이 보호소의 진료를 맡는 구조**다. FAQ 원문도 *"Most medical issues have been either resolved By Westminster Veterinary Group doctors by time the pet is ready for adoption."* **정관에 별도 「Conflict of Interest Policy」(2011-09-30 채택)가 붙어 있는 이유가 이 구조로 보인다**(**추론**). **콜에서 절대 언급하지 않는다** | 사이트 HTML, 정관 PDF, 추론 |
| **최고 책임자** | **Michelle Russillo, D.B.A. — President(팀 페이지) / CEO(개인 페이지) / President and CEO(Costa Mesa 시 보도자료)** | 사이트 HTML, cityofcostamesanews.com |
| **운영 책임자** | **Cortney Dorney — Executive Director(팀 페이지) / Director of Operations(개인 페이지 헤더 및 2019년 공개 서한 서명)**. 25년 이상 수의 업계 경력, veterinary technician 출신. 원문: *"She is responsible for the overall compliance to standards and protocols"* | 사이트 HTML |
| **직책 표기가 페이지마다 다르다** | **두 사람 모두 목록 페이지와 상세 페이지의 직책이 다르다.** Michelle = President / CEO, Cortney = Executive Director / Director of Operations. **폼 응답 `Executive director or founder` 를 조직 내부 호칭과 1:1로 대응시키면 안 된다 — 콜 첫머리에 본인 표현으로 확인할 것** | 사이트 HTML |
| **이사회** | **정관상 5~10인**(원문에 `[five (4) members]` 라는 템플릿 오탈자가 그대로 남아 있다), **이사 보수 없음**(*"Directors as such shall not receive any stated salaries for their services"*), **회의 없이 전원 서면 동의로 의결 가능**(Section 11 Informal Action). **현재 이사 명단은 사이트에 없다 — 미확인** | 정관 PDF |
| **유급 인력** | **정확한 현재 인원 미확인.** FY2023 급여 **$625,250**, **임원 보수 $0**. 2019년 자기 진술 기준 시급 **$11–15**, **보험·401K·유급휴가 없음**(원문: *"The WAGS hourly staff don't have insurance benefits, 401K plans or paid vacation."*). 이후 개선 여부는 **미확인** | ProPublica, 사이트 뉴스 게시글(2019-04-22) |
| 확인되는 직군 호칭 | **Adoption Coordinator**(입양 신청 승인) / **Care Center Coordinator**(기질 평가) / **Animal Caretaker**(포스터 매칭 대면) / **center coordinator**(포스터 예외 처리) | 사이트 HTML |
| **시설 구역명(원장 location 값)** | **18종.** 개 = `Bark Avenue` · `Dog Den1` · `Dog Den 2` · `Hound Hall ` / 고양이 = `Cat Cafe` · `Meryls Manor` · `Cat Castle` · `Kitten Cabana ` · `Cat Corner Front` · `Litterbox Lounge` · `Nursery` · `Back Corner` · `Reception` / 공통 = `Treatment 1` · `Treatment 2` · `Treatment Cages` · `Foster Home` · `Pet Supplies Plus`(외부 위성 입양처) | ShelterLuv API |
| **후행 공백** | 구역명 `Hound Hall ` · `Kitten Cabana ` 에 **후행 공백**이 붙어 있다. 개체 이름에도 12건 이상 후행 공백이 있다(`Maverick `, `Aurora `, `Daphne ` 등) | ShelterLuv API |
| 개방 시간 | 사이트 전 페이지 푸터 기준 **월 CLOSED / 화~일 13:00–17:00** | 사이트 HTML |
| **시간 표기 불일치** | **계약 시 페이지와 조직 사이트의 개방 시간이 다르다** — Costa Mesa 시 공식 페이지 원문은 ***"The shelter service hours are Monday – Sunday | 9am-5pm."*** 인데 WAGS 사이트는 월 휴관·13~17시다. **「업무 시간」과 「일반 공개 시간」을 구분한 것일 수 있으므로 오류로 단정하지 말 것**(**추론**) | costamesaca.gov, 사이트 HTML |
| **인증·네트워크** | **Best Friends Animal Society 네트워크 파트너** / **Petfinder 회원 CA1902** / **Adopt-a-Pet 조직 ID 82194** / **Petco Love Lost** / **Finding Rover** / **PawBoost** | bestfriends.org, 사이트 HTML |
| 응급 진료 파트너 | **Love Animal Hospital and Urgent Care**(Huntington Beach). 사이트에 전용 소개 페이지를 두고 있다. Seal Beach 계약서상 「WAGS 지정 의료 제공자를 통한 시간 외 응급 진료」에 대응하는 것으로 보인다(**추론**) | 사이트 HTML, sunnews.org, 추론 |
| 웹 자산 | 자체 사이트(**WordPress + Divi 테마 + Yoast SEO + BunnyCDN `wagspetadoption.b-cdn.net`**, page-sitemap 48페이지, 제작사 표기 **Smart Works Intl.**, 푸터 저작권 표기가 **`© Copyright 2020`** 로 고정) + Facebook(`/wagspetadoption.org`) + Instagram(`@wagspetadoptiongroup`) + X(`@WAGS_WVG`) + YouTube(`user/4fWAGSFUN`) + Pinterest(`/mrussillo/`) | 사이트 HTML |
| 다국어 | **Google Translate 위젯으로 영어·스페인어·베트남어 3종 제공.** Westminster 는 Little Saigon 권역이다 | 사이트 HTML |
| 소셜 규모 | **미확인.** Facebook·Instagram·X 모두 자동 열람 차단 | — |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **12월 결산**(정관 Article X 명시). 콜 시점 2026-09-17 은 **FY2026 3분기 말**이고, **FY2027 예산 편성이 10~12월에 도는 자리**다(**추론**) | 정관 PDF, 추론 |
| 신고 양식 | **정식 990.** 2011년분부터 열람 가능 | ProPublica |
| **FY2024** (2024-12) | **수입 $1,398,654 / 총자산 $388,203.** **IRS BMF 요약치만 존재하고 항목별 추출 데이터는 아직 없다** — 지출·순자산·급여는 **미확인** | ProPublica API(BMF) |
| **FY2023** (2023-12) | 수입 **$1,099,456** / 지출 **$1,277,937** / **적자 −$178,481** / 총자산 $390,505 / 부채 $29,958 / **순자산 $360,547** / 급여 **$625,250**(지출의 48.9%) / **임원보수 $0** | ProPublica API |
| **FY2022** (2022-12) | 수입 **$951,208** / 지출 **$1,037,189** / **적자 −$85,981** / 순자산 $539,670 / 급여 $562,497 / 임원보수 $0 | ProPublica API |
| FY2021 | 수입 $1,025,748 / 지출 $874,950 / **잉여 +$150,798** / 순자산 $625,651 / 급여 $446,877 | ProPublica API |
| FY2020 | 수입 $918,990 / 지출 $793,085 / 잉여 +$125,905 / 순자산 $474,853 / 급여 $360,284 | ProPublica API |
| FY2019 | 수입 $876,053 / 지출 $792,548 / 잉여 +$83,505 / 순자산 $348,948 / 급여 $330,336 | ProPublica API |
| FY2018 | 수입 $768,230 / 지출 $825,956 / **적자 −$57,726** / 순자산 $266,171 | ProPublica API |
| **재무 궤적 요약** | **수입은 2015년 $319,605 → 2024년 $1,398,654 로 10년간 4.4배 늘었다.** 다만 **FY2022·FY2023 두 해 연속 적자**로 순자산이 $625,651 → $360,547 로 **42% 깎였다.** FY2024 에 수입이 **+27.2%** 뛰며 반등. **FY2025·FY2026 은 아직 공개 자료가 없다** | ProPublica API |
| **유보 수준** | **FY2023 순자산 $360,547 은 같은 해 지출($1,277,937)의 약 3.4개월분**이다. 자산 대부분이 현금성으로 보이나 **990 원문 미확보로 구성은 미확인** | ProPublica, 계산값 |
| **수입 구조의 특이점** | **990 상 프로그램 서비스 수입(`totprgmrevnue`)이 2011년 이후 전 연도 $0** 이고, **수입 전액이 「기여·보조금(contributions & grants)」 한 줄에 들어가 있다.** 즉 **시 계약금도 입양비도 같은 칸에 묶여 있어, 공개 자료만으로는 「시 계약 비중」과 「기부 비중」을 분리할 수 없다** | ProPublica API |
| **Seal Beach 계약 (실측)** | **월 $6,000 → 월 $9,000 으로 증액**, **2년차 NTE $163,000.** 내역 = **진료·케어 $108,000 + 시간 외 응급 $40,000 + 시티매니저 재량 $10,000 + TNR $5,000.** 원문: *"Amendment No. 1 extends the agreement... not-to-exceed amount of $163,000 for the second year of the Term"* / *"Initially, the City compensated WAGS at a rate of $6,000 per month. However, due to the substantial increase in their workload, this amount is now being increased to $9,000 per month"*. **기사 게재일 미확인**(Seal Beach 자체 동물통제는 2023-07 개시이므로 2년차는 대략 2024년 중반으로 추정) | sunnews.org |
| **Seal Beach 계약의 통제 조항** | 원문: *"All decisions regarding emergency care, beyond basic triage and assessment, will require approval from a member of the Seal Beach Police Department Command Staff."* **응급 진료가 트리아지를 넘어가면 시 경찰 지휘부 승인이 필요하다** — 케이스 단위로 외부 승인이 끼는 워크플로가 이미 존재한다 | sunnews.org |
| **Westminster 계약 이력** | **2011년 연 $70K → 2019년 $320,000.** 2019년 WAGS 가 **+$120,000** 증액을 요구했으나 시는 **2%(월 $533)** 만 제시해 결렬 위기 → GoFundMe $120,000 캠페인. **현재 계약 금액은 미확인** | 사이트 뉴스 게시글(2019-04-22) |
| **2018년 비용 구조 (자기 공개)** | 급여·산재 **$386,299.61** / 임차·간접 **$222,427.71** / 의료·동물 **$180,714.92** / 기타 **$35,513.14** = **총 $824,955.38.** 같은 해 **$56K 부족분을 유보에서 충당**했고 잔여 유보가 **$130,000** 이었다 | 사이트 뉴스 게시글(2019-04-22) |
| **입양비** | **성견(7개월 초과) $200 / 강아지(7개월 이하) $350 / 성묘(7개월 이상) $50 / 새끼고양이(6개월 이하) $150(두 번째 $50) / 소형 조류·소동물 $25 / 토끼 $55 / 특수 품종 $600–700.** 전 건에 **캘리포니아 법정 수수료 $5** 가 붙는다. 단서 원문: *"adoption fees are subject to change for some pets. Management reserves the right to change adoption fees as needed."* | 사이트 HTML |
| **파양비** | **$350**(cost-of-care fee) | 사이트 HTML |
| 입양비 포함 항목 | 중성화(전 개체 필수) · 마이크로칩 · 수의 기록 사본 일체 | 사이트 HTML |
| **결제 정책** | **현금을 받지 않는다.** 전 페이지 푸터 원문: ***"*No Cash Accepted*"*** / ***"We only accept - money orders, debit cards or credit cards."*** | 사이트 HTML |
| 모금·결제 스택 | **Givebutter**(`givebutter.com/walkforwags` — Walk for WAGS 티켓) / **PayPal**(`paypal.me/wagspetadoption`) / **Zelle**(대표 전화번호) / **Amazon 위시리스트** / **Chewy 위시리스트** / **careasy.org**(차량 기부) / **Cost of Care Sponsorship**(월 $20 후원) | 사이트 HTML |
| **도너 CRM** | **미확인.** Bloomerang **Volunteer** 모듈은 확정 검출됐으나(4절), **Bloomerang 도너 CRM 모듈 사용 여부는 공개 자료에서 확인되지 않았다.** Donorbox·Classy·DonorPerfect·Neon·Blackbaud·Zeffy 는 전부 0건 | 사이트 HTML 검색 |
| **IT 지출** | **미확인.** 990 원문 PDF 미확보로 기능별 지출을 보지 못했다. 확인되는 유료 도구 후보는 **ShelterLuv · Bloomerang Volunteer · Givebutter · BunnyCDN · WordPress/Divi** 이며 금액 공개분은 없다 | — |
| 감사·거버넌스 서식 | **미확인.** 990 원문 미확보 | — |
| **가격 감각 환산** | 성견 입양비 $200, 성묘 $50 기준. **연 $600 짜리 도구 = 성견 3마리 또는 성묘 12마리 입양비**다. 다만 이 조직은 프로그램 수입을 990 에 따로 잡지도 않는 구조라 **입양비로 환산한 설득은 오히려 약하다** — 시 계약 이행 능력과 직원 시간으로 말할 것(**추론**) | 계산값, 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **현재 공개 입양 두수** | **255마리 (고양이 190 · 개 64 · 토끼 1)** | **2026-09-07 ShelterLuv 공개 API 직접 호출.** Adopt-a-Pet 조직 페이지 표기 **`1 - 9 of 255 pets available`** 와 **정확히 일치** → 두 채널은 동기화돼 있다 |
| **`adoptable` 플래그** | **입양 가능 245 / 불가 10** | ShelterLuv 가 반환하는 boolean. **불가 10마리는 전부 이름이 `WAGS-Stray-#####` 또는 `puppy` 인 신규 입소 개체**다 — 스트레이 보호기간(Costa Mesa 시 안내 기준 **7일**) 중인 개체로 보인다(**추론**) |
| **케어 위치 — 시설 vs 가정** | **시설 227마리(89.0%) / `Foster Home` 28마리(11.0%)** | 포스터 28 = **고양이 20 · 개 7 · 토끼 1** |
| **개 위치 분포** | `Bark Avenue` **22** · `Dog Den1` **17** · `Dog Den 2` **9** · `Hound Hall ` **7** · **`Foster Home` 7** · `Treatment Cages` **2** | 개 64마리 중 **포스터 10.9%** |
| **고양이 위치 분포** | `Cat Cafe` **35** · `Reception` **34** · `Meryls Manor` **29** · **`Foster Home` 20** · `Kitten Cabana ` **13** · `Cat Castle` **12** · `Back Corner` **12** · `Nursery` **9** · `Cat Corner Front` **8** · `Treatment 1` **6** · `Litterbox Lounge` **5** · `Treatment Cages` **3** · `Treatment 2` **3** · `Pet Supplies Plus` **1** | 고양이 190마리 중 **포스터 10.5%**. **`Pet Supplies Plus` 는 소매점 위성 입양처**로 보인다(**추론**) |
| **인테이크일 기준 체류 기간** | **최장 221일 / 90분위 93일 / 중앙값 66일 / 25분위 32일 / 최단 1일** | 인테이크일 분포: 최고령 **2026-01-29**, 25분위 2026-06-06, 중앙값 2026-07-03, 75분위 2026-08-06, 90분위 2026-08-28, 최신 2026-09-06. **`intake_date` 가 「입양 가능 전환일」이 아니라 「보호소 입소일」이므로, 실제 입양 대기 기간은 이보다 짧다**(**주의**) |
| **최장기 개체 2마리가 둘 다 개다** | **① Frita(`WAGS-A-20607`, 암컷, 인테이크 2026-01-29, 221일) — 위치 `Foster Home`** / **② Spitfire(`WAGS-A-20616`, 수컷, 인테이크 2026-01-30, 220일) — 위치 `Bark Avenue`** | **전체 255마리 중 가장 오래 남아 있는 개체가 임시보호 가정에 있는 개**다. 그리고 개 임시보호 프로그램은 지금 중단 상태다(7절) |
| **포스터 중인 개 7마리의 입소일** | Frita 2026-01-29(221일) · Wendy 2026-05-07(123일) · Aurora 2026-06-01(98일) · Lucky 2026-06-11(88일) · Maverick 2026-06-27(72일) · Fraud Claude 2026-07-23(46일) · Peace 2026-08-11(27일) | **입소일이지 가정 배치일이 아니다.** 다만 8월 입소 개체까지 포스터에 있으므로 **「중단」은 신규 포스터 모집·온보딩에 걸린 것이지 기존 배치 해제는 아닌 것으로 보인다**(**추론**, 직접 확인 필요) |
| **재입소로 보이는 개체** | **Maverick(`WAGS-A-5790`)** — 개체 ID 가 5790 인데(현재 신규는 22900번대) 인테이크일이 **2026-06-27**, 첨부 사진 파일명은 **`20210411162217.png`**(2021년) | **과거 입양 후 반환된 개체로 보인다**(**추론**). 같은 패턴이 **Nina(`WAGS-A-6607`)** 에도 있다 |
| **사진이 한 장도 없는 개체** | **7마리 / 255마리 (2.7%)** | ShelterLuv `photos` 배열이 비어 있다 |
| **이름 대신 인테이크 ID 가 공개된 개체** | **15마리 / 255마리 (5.9%)** — `WAGS-Stray-` 접두 **13건** + `puppy` + `Kitten` | 목록: `WAGS-Stray-22103_2` · `-22891` · `-22896` · `-22906` · `-22909` · `-22919` · `-22920` · `-22921` · `-22921_2` · `-22923` · `-22930` · `-22931` · `-22932` |
| **그중 4마리는 이미 「입양 가능」인데 이름이 그대로다** | **`WAGS-Stray-22103_2`(`WAGS-A-22104`, 수컷, 위치 `Cat Cafe`, 인테이크 2026-06-20 → 79일)** / `WAGS-Stray-22921`(`WAGS-A-22921`) / `WAGS-Stray-22921_2`(`WAGS-A-22922`) / `WAGS-Stray-22932`(`WAGS-A-22932`) | **`Cat Cafe` 는 일반 관람 구역이다. 79일째 공개 입양 중인 고양이가 아직 인테이크 ID 를 이름으로 달고 있다.** 상태 전이(스트레이 → 입양 가능)는 원장에서 일어났는데 **이름 필드는 따라오지 못했다** |
| **`_2` 접미 레코드** | `WAGS-Stray-22103_2`(개체 ID 는 **22104**) · `WAGS-Stray-22921_2`(개체 ID 는 **22922**) | **이름의 숫자와 개체 ID 가 1씩 어긋난다.** 한배 새끼를 한 인테이크로 받아 개체 레코드를 늘릴 때 이름을 손으로 복사한 흔적으로 보인다(**추론**) |
| 이름 짓기 관행 | 배치 테마 작명이 뚜렷하다 — 베트남 음식(`Pho`·`Banh Xeo`·`Com Ga`·`Chao`·`Hanoi`·`Ninh Binh`), 약 이름(`Benadryl`·`Claritin`·`Zyrtec`·`Fluticasone`), 가전(`Built-In Microwave`·`George Forman Grill`·`Air Fryer `·`Pressure Cooker`), 90년대 유행어(`As If`·`Totally`·`Talk to the hand`·`Alrighty Then`) | **한배 단위로 한 번에 이름을 붙인다는 뜻이고, 새끼고양이 유입량이 크다는 방증**이다(**추론**) |
| 중복 이름 | `Bruno` 2마리(`WAGS-A-22566`, `WAGS-A-22805`) — 둘 다 개 | ShelterLuv API |
| **연간 인테이크·입양·라이브릴리스율** | **미확인 — 공개 자료에 없다** | 조직이 연간 통계를 게시하지 않는다. Shelter Animals Count 개별 조직 데이터·Best Friends 대시보드(shelterpetdata.org) 는 자동 조회에 실패했다. **2019년 자기 진술만 있다 — 인테이크 「1500 to almost 3000 animals a year」, 상시 보유 「300-600 animals in our care」** |
| **폼 자기보고 대비** | 폼 `adoptions: Over 300` 은 **선택지의 최상단 구간**이다. 실측 공개 두수 255마리와 4개 시 권역, 2019년 자기 진술을 함께 놓으면 **연간 입양은 이 구간을 크게 상회할 개연이 높다**(**추론**) | leads.json, ShelterLuv API, 추론 |
| 포스터 가정 수 | **미확인.** 사이트·990 어디에도 포스터 가구 수 지표가 없다. **폼의 `fosters` 항목도 공란**이다 | — |
| 자원봉사자 수 | **미확인** | — |
| **인테이크 정책** | **Managed Intakes.** 파양 페이지 원문: ***"All surrendered animals are happening under the system of Managed Intakes. This means WAGS will only take in animals as capacity allows. The owner of the relinquished animal will be given a scheduled appointment of when it is acceptable to bring in the animal to WAGS."*** | 사이트 HTML |
| **스트레이 보호기간** | **7일** — Costa Mesa 시 페이지 원문: *"Stray pets are held for seven days before they are made available for adoption."* | costamesaca.gov |
| 입양 홀드 정책 (자기 공표) | **승인된 신청자에 한해 24시간 홀드.** 원문: *"we will hold the pet for 24 hours if you want some time to think about it"* | 사이트 HTML |
| **미래 개체 신청 대기열 (자기 공표)** | 원문: ***"If a pet you are interested in is not yet available, WAGS will take applications until the day of availability and select the best home based on the applications."*** | 사이트 HTML |
| 입양 이벤트 빈도 (자기 공표) | **월 1~2회.** 원문: *"some animals appear at one to two adoption events per month. Visit our events calendar for dates."* — **그런데 사이트에 events calendar 페이지가 없다**(page-sitemap 48건에 이벤트 페이지 0건) | 사이트 HTML, sitemap |
| 대외 평판 | **미확인.** Yelp(리뷰 192건, `Updated August 2026` 표기) · BBB · Facebook 리뷰 모두 자동 열람 차단. **소송·행정처분은 검색되지 않았다** | 검색 |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **원장 = ShelterLuv (확정)** | 조직 코드 **`WAGS`**, 임베드 **`GID = 16808`**. 홈페이지·`/adopt`·`/adoptable-cats` 에 임베드 스크립트 `misc/shelterluv_embed.js` 가 실려 있고, 컨테이너 변수가 그대로 노출된다 — `var GID = 16808; filters = {"species":"Dog"};`(홈페이지) / `filters = {"species":"Cat"};`(`/adoptable-cats`) | 사이트 HTML |
| **확인 방법 주석** | 임베드 스크립트가 만드는 iframe 경로(`/embed/16808`)는 Vue SPA 라 HTML 에 개체가 없다. **번들 JS(`iframe-CcR7uPuM.js`)에서 실제 데이터 경로 `/api/v3/available-animals/` 를 찾아 직접 호출**해 255건 레코드를 얻었다. **폼 자기보고 `system: Shelterluv` 는 실사용으로 확정** | ShelterLuv 번들 JS, API |
| **ShelterLuv 가 노출하는 필드** | 개체별 **`nid` · 이름 · `uniqueId`(WAGS-A-#####) · 성별 · **`location`**(시설 구역/`Foster Home`) · 생일 · 연령그룹 · 종 · 품종 · 색 · 체중그룹 · `attributes` · 사진 배열 · `public_url` · **`intake_date`** · **`adoptable`** · `campus`(전부 `Main Campus`)** | ShelterLuv API |
| **ShelterLuv 사용 모듈 — 신청 접수** | 입양 **5종**(`matchme/adopt/WAGS/Cat` · `/Dog` · `/Bird` · `/Rabbit` · `/Small mammal`), 포스터 **2종**(`matchme/foster/WAGS/Cat` · `/Dog`) | 사이트 HTML |
| **ShelterLuv 사용 모듈 — 자원봉사 폼** | **4종** — `form/volunteer/WAGS/324-volunteer-application`(포스터 지원 겸용) · `44371-classroom-foster` · `44388-dog-foster-dde` · `80046-doggie-day-explorer` | 사이트 HTML |
| **자원봉사 스케줄 = Bloomerang Volunteer (확정)** | `volunteer.bloomerang.co/volunteer/#/join-party?k=…` 3건(**WAGS Walker** `q2srymuuis2g7v` · **General Volunteers** `vq0xgb1z2scv2k` · **Reading to Cats** `7rk7ro67wey5dn`). 조직 자기 설명 원문: ***"You will be asked to join Bloomerang our application used for scheduling training and volunteer shifts."*** | 사이트 HTML |
| **접수와 스케줄이 다른 도구다** | **지원 접수는 ShelterLuv, 교육·시프트 배정은 Bloomerang.** 조직이 명시한 승인 SLA 는 **24~72시간**(원문: *"Once you complete your application, you should receive approval within 24-72 hours."*). **두 도구 사이를 사람이 잇는다** | 사이트 HTML, 추론 |
| **개 목록 = Google Slides (핵심)** | 사이트 상단 메뉴 `Adopt > Adoptable Pets > **Adoptable Dogs**` 의 링크가 **`docs.google.com/presentation/d/1r3ATGBV6pWaMrCKPW17Kvj2IvMdJrS0zHQC_D0tPuOU/present?slide=id.g2ee743dd9fe_0_228`** 다. 덱 제목 **`WAGS Dogs`**, **슬라이드 59장**, 이미지 호스트는 `lh7-us.googleusercontent.com`(ShelterLuv S3 가 아니다), **pptx 내보내기 431MB** | 사이트 HTML, Google Slides |
| **덱과 원장이 어긋나 있다** | **덱 59슬라이드 vs ShelterLuv 개 64마리**(2026-09-07 동시 조회). **덱의 이미지가 Google Drive 업로드본이라 ShelterLuv 자동 연동은 구조적으로 불가능하다** — 사람이 만든다. 다만 **슬라이드 텍스트가 이미지로만 들어 있어 개별 개체명 대조는 하지 못했다**(**한계**, 콜에서 「59장 대 64마리」를 단정적으로 들이대지 말 것) | Google Slides, ShelterLuv API |
| **같은 사이트가 개를 두 가지로 보여준다** | **홈페이지에는 ShelterLuv 라이브 임베드(`filters={"species":"Dog"}`)가 있고, 상단 메뉴의 「Adoptable Dogs」는 Google Slides 덱으로 간다.** 홈페이지 임베드 바로 위 문구는 ***"This page is powered by Shelterluv."*** 다 | 사이트 HTML |
| **고양이는 라이브다** | `/adoptable-cats/` 는 ShelterLuv 임베드(`filters={"species":"Cat"}`). **개만 수제 덱으로 갈라져 있다** | 사이트 HTML |
| **채용 지원서 = 자체 WordPress 폼** | `/employment-application/` 이 사이트 내장 폼이다(ATS 미검출). **직무 요건에 도구명이 없어 소프트웨어 단서로 쓸 수 없다** | 사이트 HTML |
| 입양 플랫폼 | **Petfinder 회원 CA1902** / **Adopt-a-Pet 조직 82194**(255건, ShelterLuv 와 일치) | 사이트 HTML, Adopt-a-Pet |
| 분실 반려동물 | **Finding Rover** · **Petco Love Lost**(캠페인 ID 2233) · **PawBoost** 3종을 병행 안내. 홈페이지에 ***"Help Wags increase our return to home by matching our daily found posts to Online Losts Posts"*** 라는 자원봉사 모집 블록이 따로 있다 — **분실·발견 매칭을 사람이 수작업으로 돌린다는 자기 진술** | 사이트 HTML |
| 모금 | **Givebutter**(`givebutter.com/walkforwags`) / PayPal / Zelle / Amazon·Chewy 위시리스트 / careasy.org | 사이트 HTML |
| 사이트 스택 | **WordPress + Divi(+ Dipi 플러그인) + Yoast SEO + BunnyCDN + GA4 `G-F2QXYYNSP1` + GTM `GTM-N5RQ6T7` + Google Translate 위젯(EN/ES/VI)**. 제작·유지 **Smart Works Intl.**(외주) | 사이트 HTML |
| **「Dashboard」 라는 빈 페이지** | `/educate/resources/organization-data-dashboards/` 페이지가 존재하고 제목이 **`Dashboard`** 인데 **본문이 완전히 비어 있다.** 임베드·iframe·외부 링크 0건. sitemap `lastmod` 는 **2024-04-01** | 사이트 HTML, sitemap |
| **미검출 목록** | **쉘터 SW 대체재**(Petstablished · Pawlytics · Chameleon · ShelterBuddy · PetPoint · Petango · RescueGroups · Adopets · Animal Shelter Manager) / **포스터 전용 도구**(Doobert · Maddie's Pet Assistant · Paw Partner) / **자원봉사 대체재**(Volgistics · Better Impact · SignUpGenius · Galaxy Digital · VolunteerHub) / **도너 CRM**(Donorbox · Classy · DonorPerfect · Neon · Blackbaud · Zeffy) / **폼·협업**(Google Forms · Jotform · Typeform · Airtable · Smartsheet · Salesforce · HubSpot) / **이메일**(Mailchimp · Constant Contact) — **전부 0건** | 사이트 HTML 검색 |
| **판정 시 주의** | 위 결과는 「안 쓴다」의 증거가 아니라 **「밖에서 보이는 자리에 없다」**의 증거다. **포스터 상태 추적·내부 스프레드시트·문자방은 공개 사이트에 흔적을 남기지 않는다** | 추론 |
| **종합 판정** | **원장(ShelterLuv)은 제대로 깔려 있고 자원봉사 포털(Bloomerang)도 있다. 없는 것은 「가정에 나간 개체」와 「입양 준비 상태」를 사람 없이 보는 층이다.** ①포스터 접수 = ShelterLuv, 시프트 배정 = Bloomerang, **그 사이를 사람이 잇는다** ②포스터 업데이트 = 주 1회 이상 사진·영상·글을 **사람에게 보내는 방식** ③사진 가공 = **Canva 수제 템플릿**(8절) ④개 목록 대외 게시 = **Google Slides 수제 덱** ⑤「입양 가능 날짜」 조회 = **전화**. **경쟁 대체 대화가 아니라 「ShelterLuv 옆의 빈자리」 대화만 성립한다** | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인** | **Michelle Russillo(President 겸 CEO) → 이사회(5~10인).** 정관 Article VII Section 5 원문: *"The President shall be the chief executive officer of [WAGS] and, in general, shall supervise and control all of the business and affairs of [WAGS]. He may sign, with the Secretary or any other proper Officer... authorized by the Board of Directors, any deeds, mortgages, bonds, contracts, or other instruments which the Board of Directors has authorized to be executed."* 즉 **계약 체결권은 이사회 수권 → President 서명 구조**다 |
| **콜 상대의 지위** | **결재자 본인이다.** 우리 리드 풀에서 드물게 「담당자를 거치지 않는 콜」이다. 이 콜의 목표는 결재 경로를 알아내는 것이 아니라 **문제 정의를 상대와 함께 만드는 것**이다 |
| **전결 한도** | **미확인.** 정관 Article VIII Section 1 은 *"The Board of Directors may authorize any Officer or Officers, agent or agents... to enter into a contract... and such authority may be general or confined to specific instances."* 라고만 적혀 있고 **금액 기준선이 없다.** 990 원문 미확보로 거버넌스 서식도 보지 못했다. **우리가 먼저 금액을 꺼내지 않는다** |
| **속도 요인** | 정관 Section 11(Informal Action) — *"Any action may be taken without a meeting of the Directors if a consent in writing setting forth the action so taken shall be signed by all of the Directors."* **이사 전원 서면 동의로 정식 회의 없이 의결이 된다.** 이사 5~10인, 전원 무보수. **소액 SaaS 는 이사회 일정에 묶이지 않을 개연이 높다**(**추론**) |
| **예산 사이클** | **12월 결산.** 콜 시점은 FY2026 3분기 말이고 **FY2027 편성이 10~12월에 도는 자리**다. 「올해 남은 예산」보다 **「내년 항목」 프레임이 맞는다**(**추론**) |
| **지불 여력** | **중간.** FY2024 수입 $1,398,654, 총자산 $388,203. 다만 **FY2022·FY2023 연속 적자로 순자산이 42% 깎였고** FY2023 순자산은 연 지출의 약 3.4개월분이다. **「돈이 아예 없는 조직」은 아니지만 「여유가 있는 조직」도 아니다** |
| **비용 감각** | **급여가 지출의 48.9%(FY2023)이고 임원 보수는 $0** 이다. 최고 책임자가 30년째 무보수인 조직에서 **「사람 시간」은 곧 「무보수 시간」이다.** ROI 서사는 돈이 아니라 **「지금 사람이 손으로 하는 어떤 동작이 사라지는가」** 로만 짜야 한다 |
| **경쟁 기준선** | **이미 ShelterLuv(유료) + Bloomerang Volunteer(유료) + Givebutter + BunnyCDN + 외주 웹 유지보수를 쓴다. 여섯 번째 도구가 중복 지출로 보일 위험이 이 콜의 최대 반론이다.** 뒤집으면 유리하기도 하다 — **자원봉사자가 직접 로그인해 시프트를 잡는 문화가 이미 있고(Bloomerang), 그 대상에서 포스터의 「개체 상태」만 빠져 있다** |
| **ShelterLuv 중복 우려 (선제 대비 필요)** | 상대는 **`system: Shelterluv` 라고 스스로 적은 사람**이고, ShelterLuv 에는 포스터 관련 기능이 있다. **"우리 ShelterLuv 에 그 기능 있는데요" 가 나올 확률이 높다. 반박하지 말고 「그 기능으로 지금 무엇을 하고 계신가요 / 포스터 본인이 직접 들어가서 보나요」로 받는다.** 그리고 **개 목록이 Google Slides 로 빠져 있다는 사실 자체가 「원장에 있어도 밖으로 못 나오는 구간」이 실재한다는 증거**다 |
| **RFP 라는 새 변수** | Costa Mesa 계약이 **임시**이고 시가 **정식 RFP** 를 낸다. 원문: *"The WAGS contract with the city is a temporary agreement and city officials will issue a formal request for proposal (RFP) to secure a permanent shelter provider."* **RFP 는 운영 데이터를 문서로 요구한다.** 우리 제품을 「입찰 서류에 넣을 숫자를 만들어 주는 것」으로 연결할 자리가 있다 — **다만 우리가 먼저 「RFP 준비하셔야죠」라고 말하면 오지랖이 된다. 상대가 Costa Mesa 를 꺼낼 때만 받는다** |
| 2차 콜 후보 | **Cortney Dorney**(Executive Director / Director of Operations — 프로토콜·컴플라이언스 담당, 포스터 절차 재설계의 실무 주체일 개연이 가장 높다) / **Adoption Coordinator**(입양 신청 승인 라인) / **Care Center Coordinator**(기질 평가·준비 판정) / **Dr. Tia Greenberg**(Medical Director — 「수의 클리어」 게이트의 실제 주체) |

## 6. Michelle 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **성명·직책** | **Dr. Michelle Denise Russillo, D.B.A. — President 겸 CEO.** LinkedIn 검색 결과 표기도 `Chief Executive Officer - WAGS Pet Adoption` | 사이트 HTML, cityofcostamesanews.com, 검색 |
| **소속 확정 근거** | ①**IRS BMF care-of name `% MICHELLE RUSSILLO`** ②**Costa Mesa 시 공식 보도자료의 직책 명시** ③조직 팀 페이지 게재 ④조직 Pinterest 링크가 개인 계정 `mrussillo` | ProPublica, costamesaca.gov 계열, 사이트 HTML |
| 학력·경력 | **2015년 경영학 박사(D.B.A.) 취득. 501(c)(3) 운영 경력 30년 이상. 2010년 수의 업계 진입.** 원문: *"Michelle Russillo Graduated with her Doctorate in Business in 2015. She has been managing 501c3 corporations for over 30 years. Michelle began working in the veterinary industry in 2010."* | 사이트 HTML |
| **보수** | **무보수.** 990 상 **임원 보수가 FY2016~FY2023 전 연도 $0**. 본인 진술 원문(2019-04-22): ***"As the CEO, I am a volunteer. I have never received a paycheck from WAGS for the past 8 years."*** **콜 시점 기준으로는 약 15년째다**(**추론** — 2019년 이후 보수 발생 여부는 FY2024 상세 미공개로 확인 불가) | ProPublica, 사이트 뉴스 게시글 |
| **성향 — ①숫자로 싸워 본 사람** | 2019년 시 계약 협상 국면에서 **연간 비용 4개 항목을 금액 단위까지 공개 게시**했다(급여 $386,299.61 / 임차·간접 $222,427.71 / 의료·동물 $180,714.92 / 기타 $35,513.14). **감성 서사가 아니라 원가표로 말하는 사람이다** | 사이트 뉴스 게시글 |
| **성향 — ②시 상대 협상이 본업** | 4개 시 계약을 유지·확대해 왔고, 2019년에는 시 제안을 거부하고 공개 캠페인까지 갔다. 동시에 같은 글에서 ***"WAGS is asking the supporting public to not do anything that is harmful, offensive and assaultive in action or words to any City of Westminster personnel."*** 라고 지지자를 제어했다 — **압박은 걸되 관계는 끊지 않는 유형**(**추론**) | 사이트 뉴스 게시글, 추론 |
| **성향 — ③도구를 사는 사람이다** | ShelterLuv(다중 모듈) · Bloomerang Volunteer · Givebutter · BunnyCDN · 외주 웹 유지보수. **「소프트웨어에 돈을 안 쓰는 조직」이 아니다.** 반대로 **중복 지출에 예민할 개연도 그만큼 크다**(**추론**) | 사이트 HTML, 추론 |
| **대명사** | **she/her.** Costa Mesa 시 공식 보도자료가 3인칭으로 *"Dr. Russillo said she looks forward..."* 라고 적는다. 조직 사이트도 일관되게 she/her. **본인 선언 기록은 아니므로 콜에서 어색해지면 즉시 상대 표현을 따를 것** | costamesaca.gov 계열, 사이트 HTML |
| 폼 자기보고 | **4개 항목 전부 기입**(`org_type`·`role`·`system`·`adoptions`). **`fosters` 만 공란**이다. `intent: book`, 미팅 **2026-09-17** 확정 | leads.json |
| **`fosters` 공란의 해석** | 두 갈래다. ①**포스터 가정 수를 즉답할 수 없어서 비웠다**(개 프로그램이 중단 중이고 고양이·개가 다른 트랙이라 「몇 가정」이라는 단일 숫자가 없을 수 있다) ②단순 누락. **①이면 그 자체가 우리 제품의 근거다 — 콜에서 「지금 활동 중인 포스터 가정이 몇 곳인가요」를 초반에 던져 답이 즉시 나오는지를 본다**(**추론**) | leads.json, 추론 |
| **콜에서 통할 언어** | **①이번 주 손동작 ②원가·시간.** 이 사람은 원가표로 시와 싸워 본 사람이고 30년째 무보수다. **「대시보드가 생깁니다」가 아니라 「그 슬라이드를 누가 언제 고치는지, 그게 주에 몇 번인지」** 로 들어가야 한다(**추론**, 직접 대면 근거 없음 — 콜 초반에 화법을 관찰해 조정) | 추론 |
| **먼저 꺼내지 말 것** | ①**개 목록 Google Slides 덱이 원장과 어긋난 사실을 우리가 먼저 지적하지 않는다** — 「누가 언제 고치시나요」로 우회 ②**개 포스터 중단의 「사유」를 캐묻지 않는다** — 「어디를 바꾸려고 하시는지」로 우회 ③**가격** ④**설립자가 소유한 동물병원과의 관계**(정관에 별도 이해충돌 정책이 붙어 있는 사안이다) ⑤**2019년 재정 위기·2020년 Westminster 계약 분쟁** — 상대가 먼저 꺼내면 받되 우리가 열지 않는다 ⑥**Priceless Pets** — Costa Mesa 전임 사업자다. 비교·언급 금지 | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| **2023-07** | **Seal Beach 가 Long Beach 위탁을 끝내고 자체 동물통제 프로그램 개시** → WAGS 와 보호소 계약 체결(월 $6,000) | sealbeachca.gov 보도자료, sunnews.org |
| **2024년경**(정확 일자 미확인) | **Seal Beach 계약 Amendment No. 1** — 월 $6,000 → **$9,000**, 2년차 **NTE $163,000**. 사유가 *"the number of animals taken or delivered to WAGS by residents within Seal Beach has more than doubled the initial estimates, even within the first six (6) months"* 다. **Consent Calendar 로 토론 없이 통과** | sunnews.org |
| FY2022 (2022-12) | 수입 $951,208 / 지출 $1,037,189 — **적자 $85,981** | ProPublica API |
| FY2023 (2023-12) | 수입 $1,099,456 / 지출 $1,277,937 — **적자 $178,481**, 순자산 $625,651 → $360,547 | ProPublica API |
| **2024-04-01** | `/educate/resources/organization-data-dashboards/`(제목 **Dashboard**) 페이지 마지막 수정. **본문이 비어 있는 상태로 남아 있다** | sitemap |
| FY2024 (2024-12) | 수입 **$1,398,654**(+27.2%) / 총자산 $388,203. **상세 항목은 아직 미공개** | ProPublica API(BMF) |
| **2026-06-11** | **Costa Mesa 시가 Priceless Pets 와의 계약을 종료하고 WAGS 와 「임시」 보호소·수의 서비스 계약 체결.** 시장 John Stephens 원문: *"I personally visited their facility and was very impressed. They have an outdoor play area for dogs, a large kennel capacity, another play area for cats and veterinary services onsite."* **시는 정식 RFP 를 낼 예정**이라고 명시 | cityofcostamesanews.com |
| **2026-06-20** | ShelterLuv 상 개체 `WAGS-A-22104` 입소(현재까지 79일, `Cat Cafe`, 입양 가능, **이름이 아직 `WAGS-Stray-22103_2`**) | ShelterLuv API |
| **2026-06-25** | **`/wags-dog-fostering/` 페이지 마지막 수정 = 「Dog Fostering Program Temporarily On Hold」 공지.** Costa Mesa 계약 발표 **14일 뒤**다 | sitemap, 사이트 HTML |
| **2026-08-26** | page-sitemap 전체 마지막 수정 시각 | sitemap |
| **2026-10-25** | **Walk for WAGS**(첫 개최로 보임). 목적이 *"transform our current outdoor space into a **safe, welcoming dog play and meet-and-greet yard** — giving shelter dogs more room to exercise, decompress and meet potential families outside of their kennels."* **티켓 판매 중(Givebutter)** | 사이트 HTML |
| **참고 — 2019~2020 (오래됐지만 조직 기억에 남아 있는 사건)** | **2019-04**: Westminster 계약 증액 결렬 → **GoFundMe $120,000** 긴급 캠페인, CEO 명의 공개 서한 게시. **2020-02**: Westminster 시의회가 동물 관리 계약 심의를 연기, 3시간 가까운 주민 발언·오렌지 티셔츠 지지 집회. 사이트 뉴스 원문: *"its your last chance to be heard and try to save WAGS"* | 사이트 뉴스 게시글 |
| **뉴스 페이지 자체가 방치돼 있다** | `/educate/news/` 최신 게시물이 **2020년 전후**에서 멈춰 있다. 가장 눈에 띄는 항목이 ***"'He's a Good Boy': Bruce the Dog Gets Adopted After 423 Days in Shelter"*** 다 — **장기 체류를 조직이 직접 이야기 소재로 쓴 전례가 있다** | 사이트 HTML |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

- **개 대외 목록은 Canva 로 한 마리씩 만든다.** ShelterLuv 에 붙은 개 사진 파일명이 **`Wendy (8.5 x 11 in) (Instagram Post) (2).png`**, **`Spitfire (8.5 x 11 in) (Instagram Post).png`**, **`Mamas (8.5 x 11 in) (Instagram Post) (1).png`** 형태다. **8.5×11인치 = 전단 규격이고 파일명에 `(Instagram Post)` 가 붙어 있다** — 한 마리마다 전단과 인스타 카드를 손으로 만든다는 뜻이다. **확인 필요: 그 카드를 누가, 한 마리당 몇 분에 만드는가.**
- **템플릿을 복사하면서 원래 개 이름이 남는다.** **Maverick** 의 사진 파일명이 **`Copy of Crimson (8.5 x 11 in) (Instagram Post).png`**, **Aurora** 의 사진 파일명이 **`Copy of Laika (8.5 x 11 in) (Instagram Post).png`** 다. Crimson 은 현재 재고에 있는 다른 개이고 Laika 는 목록에 없다. **「이전 개 파일을 복사해 덮어쓰는」 작업 방식이 파일명에 화석으로 남아 있다.** **콜에서 지적하지 말 것 — 「사진 카드는 누가 만드세요」로만 묻는다.**
- **사진이 Facebook 을 한 바퀴 돌아 원장으로 들어온다.** `Mamas`·`Goose ` 의 사진 파일명이 **`685779966_1449872053849464_5492358751619906415_n.jpg`**, **`686461871_1449872123849457_7456025043708767427_n.jpg`** 로 **Facebook CDN 파일명 형식**이다. 즉 페이스북에 올라간 사진을 다시 내려받아 ShelterLuv 에 올렸다. **확인 필요.**
- **고양이·새끼고양이 사진은 포스터의 폰 원본 그대로다.** `IMG_0312.png` · `IMG_4311.jpeg` · `20260524_131839.jpg` · `C8E7EEE8-C0D2-45AD-81C9-A3E6FF8CB078.jpeg` 같은 파일명이 다수다. **개는 가공된 카드, 고양이는 원본 — 두 트랙의 손질 수준이 다르다.** 확인 필요.
- **포스터 업데이트가 「주 1회 이상, 사람에게 보내는 방식」이라고 명문화돼 있다.** 원문: ***"report back to WAGS weekly (at least) with updated photos/videos and a story about how they are doing in your home."*** / ***"we require weekly (at least) photo/video updates with stories that we can post."*** **소재 A 로 들어왔지만 이 조직에는 소재 B(임시보호자 업데이트 수집) 축도 그대로 살아 있다.**
- **장기 포스터는 업데이트를 「모아서」 낸다.** 원문: ***"they would have to accumulate pictures throughout the week and write a story for Foster Friday posts as well as be able to bring the dog back and forth to the shelter as adoption intros needed to happen"*** — **주간 「Foster Friday」 게시 주기가 있고, 그 주기에 맞춰 사람이 자료를 모은다.** 확인 필요: Foster Friday 를 누가 편집하고 몇 시간 걸리는가.
- **포스터 역할 정의가 우리 제품 정의와 같은 문장이다.** 원문: ***"Foster the animal(s) until they are ready for adoption"*** / ***"Return the animal to WAGS for adoption"*** — **「ready for adoption」이 역할 종료 조건인데, 누가 언제 그걸 판정하고 포스터가 어디서 보는지는 어디에도 적혀 있지 않다.**
- **입양 준비 게이트가 논리곱이다.** ①중성화 완료(*"no pet will be released for adoption until after the spay and neuter has been completed"*) ②수의 클리어(*"the pet will remain in our care until our vet has given a clean bill of health. This may include kennel cough, skin issues, and parasites."*) ③연령·체중(*"If the pet is too young or doesn't weigh enough, the adoption process will put on hold."*) — **세 조건이 다 맞아야 「available date」가 생긴다.**
- **그 날짜의 조회 방법이 전화다.** FAQ 원문: ***"Verify that the animal is still at WAGS, and verify the available date."*** 그리고 홈페이지·푸터에 반복되는 문구가 ***"It's best to text us."*** / ***"Text us now!"*** 다. **문의 채널의 기본값이 문자다.** 확인 필요: 하루에 「이 아이 언제 나가나요」 문의가 몇 통 오는가.
- **원장의 상태 전이가 이름 필드까지 따라오지 못한다.** 입양 가능 플래그가 켜졌는데 이름이 아직 `WAGS-Stray-#####` 인 개체가 4마리, 그중 하나는 **79일째 `Cat Cafe` 에서 공개 중**이다. **지적하지 말고 「이름은 언제 누가 붙이세요」로 우회한다.**
- **계약 도시가 늘었는데 사이트가 따라오지 못했다.** 파양 안내 페이지는 여전히 ***"If you are a resident of Westminster, Stanton and Seal Beach"*** 로 **Costa Mesa 가 빠져 있고**, 설립자 소개 페이지도 ***"WAGS which now supports two cities; Westminster, Stanton and Seal Beach CA."*** 로 **「두 개 시」라고 써 놓고 세 개를 나열한다.** Costa Mesa 계약 3개월째다. **확인 필요: 시가 늘 때 사내 절차·문서·시스템을 무엇으로 갱신하는가.**
- **없는 것을 안내하고 있다.** FAQ 가 *"Visit our events calendar for dates."* 라고 하는데 **사이트에 이벤트 캘린더 페이지가 없다.** 「Dashboard」 페이지도 2024-04 이후 **빈 채로** 남아 있다.
- **지원 접수와 시프트 배정이 다른 도구다.** ShelterLuv 로 받고 → 24~72시간 내 승인 → **Bloomerang 에 다시 초대**. **그 사이의 이관을 사람이 한다.** 확인 필요.

## 미확인 요약 (콜에서 확인할 것)

1. **연간 인테이크·입양·라이브릴리스율.** 조직이 연간 통계를 게시하지 않는다. 2019년 자기 진술(인테이크 1,500 → 약 3,000, 상시 보유 300–600)이 유일한 값이고 **Costa Mesa 가 붙은 지금은 무의미하다.** 폼의 `Over 300` 은 선택지의 천장이다.
2. **활동 중인 포스터 가정 수 — 고양이·개 각각.** 폼의 `fosters` 가 공란이다. 공개 자료에 지표 자체가 없다.
3. **개 임시보호 프로그램 중단의 범위와 재개 시점.** 신규 모집만 멈춘 것인지, 기존 배치까지 정리 중인지. 「검토·갱신 중인 foster procedures」가 구체적으로 무엇인지.
4. **「입양 가능 날짜」를 지금 어디서 보는가.** ShelterLuv 안에 상태값이 있는지, 별도 표·화이트보드·머릿속인지. 포스터·입양 희망자가 각각 어떻게 조회하는지.
5. **Google Slides 개 덱의 갱신 주체·주기.** 누가, 얼마나 자주, 한 번에 몇 분이 드는가. 왜 개만 덱인가.
6. **ShelterLuv 를 어디까지 쓰는가.** 포스터 배치·의료 기록·주간 업데이트가 안에 들어가는지, 아니면 신청 접수와 공개 목록까지인지. **포스터 본인이 로그인해 볼 수 있는 포털을 켜 두었는지.**
7. **현재 총 보호 두수(공개 목록 밖 포함).** 실측 255마리는 「입양 공개」만이다. 스트레이 보호 중·의료 대기·신생아는 이 숫자에 없다.
8. **현재 유급 인력 수와 구성.** FY2023 급여 $625,250 만 있고 인원·직군·시급 수준은 2019년 진술(시급 $11–15, 무보험)이 마지막이다.
9. **현재 이사 명단과 이사회 주기.** 사이트에 이사 명단이 없다. 정관상 5~10인·서면 동의 의결 가능.
10. **Westminster·Stanton·Costa Mesa 각 계약의 금액과 만료일.** Seal Beach 만 실측(NTE $163,000)이 있다. **Costa Mesa 는 「임시」이고 시가 RFP 를 예고했다 — 만료·전환 시점이 이 조직의 2027년을 좌우한다.**
11. **Foster Friday 게시 운영.** 누가 편집하고 어디에 올리는가. 사진·글이 어떤 경로로 도착하는가(문자·이메일·Facebook 그룹).
12. **FY2024·FY2025 재무 상세.** FY2024 는 IRS 요약치만 있고 FY2025 는 공개분이 없다. **2년 연속 적자 이후 무엇이 바뀌어 수입이 27% 늘었는지.**
