# Fieldhaven Feline Center 사전조사

- 작성일: 2026-09-08 / 목적: Brandie Wingo 콜 준비(미팅 2026-09-09) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Shelter", "role": "Something else", "system": "Shelter Boos and Neo but switching to Shelter Luv", "fosters": "More than 30"}`
- **조직·신청자 모두 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석 ①: **조직 공식 사이트(`fieldhaven.com`)는 curl·WebFetch 모두 403 이다.** 본문의 사이트 인용은 전부 **리더 프록시(`r.jina.ai`) 판독값**이다. 프록시가 렌더링한 본문이므로 원문 HTML 대조는 하지 못했다 — 큰따옴표 인용은 프록시 판독 텍스트 기준임을 밝혀 둔다
- 출처 주석 ②: **조직이 자기 사이트에 올려 둔 1차 문서를 원문으로 판독**했다 — Shelter Animals Count 2025 리포트 PDF(2페이지), 2025 Annual Report PDF, 2024 Annual Report PDF, **FY2023 990 전체 공개본 PDF(97페이지, 세무대리인 작성본)**. 이 문서의 운영·재무 수치 대부분은 **조직 본인이 게시한 원문**이며 제3자 요약이 아니다
- 출처 주석 ③: **Facebook·Instagram·LinkedIn 은 열지 못했다**(로그인 게이트). Brandie Wingo 의 LinkedIn 도 마찬가지다. 조직의 실시간 소통 채널이 Facebook 인 점을 감안하면 **가장 큰 사각지대**다
- 출처 주석 ④: **FY2024·FY2025 990 원문은 확보 실패.** ProPublica `filings_with_data` 는 FY2023 까지이고, IRS e-file S3 는 404 다. FY2024 수치는 **IRS BMF 추출값**, FY2025 수치는 **조직 게시 Annual Report** 판독값이다
- 출처 주석 ⑤: **Petfinder(CA662)·Adopt-a-Pet(70068) 현재 게재 두수는 미확인.** 양쪽 다 지연 로딩·403 으로 목록 렌더링에 실패했다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다(번지 생략). 특히 이 건은 **분쟁 대상 부동산이 개인 소유지**이므로 번지를 적지 않는 것이 더 중요하다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **FieldHaven Feline Center, EIN 30-0240425, Lincoln, CA**(Placer County). 501(c)(3), **면세승인 2004-10**, **설립연도 2004**, NTEE **D20**(Animal Protection and Welfare), **12월 결산**, **정식 990** 신고 | ProPublica API, 990 FY2023 |
| **동명 조직** | ProPublica 에서 `FieldHaven` 검색 시 이 EIN 1건으로 좁혀진다. 조직명이 고유하고 캘리포니아 Placer County 단일 법인이다. **혼동 여지가 없다** | ProPublica API |
| **이메일 도메인 = 조직 공식 도메인** | 리드 도메인이 **fieldhaven.com** 이고, 990 Part I 의 `Website` 란이 **`www.fieldhaven.com`** 이다. 조직 대표 메일도 `i***@fieldhaven.com` | 990 FY2023, 사이트 |
| **신청자 = 재직 직원 본인** | **Brandie Wingo 는 조직 스태프 페이지에 「Shelter Staff — Animal Care Supervisor」로 실려 있다.** 본인 프로필 페이지에 **`b***@fieldhaven.com`** 이 공개돼 있어 리드 도메인과 일치한다 | 조직 스태프 페이지, 본인 프로필 |
| **폼의 `system` 이 결정적 대조가 됐다** | 폼 원문 `"Shelter Boos and Neo but switching to Shelter Luv"` → **ShelterBoss + Neon 의 오타로 판독되고, 셋 다 실물이 확인된다** — ①**`fieldhaven.shelterboss.com`** (개체 상세·공개 로그인 페이지 실재) ②**`fieldhavenfelinecenter.app.neoncrm.com`** ③**`new.shelterluv.com/matchme/adopt/FHFC/Cat`**(조직 코드 **FHFC**). **폼에 적힌 세 도구가 전부 외부에서 확인된다** | 검색, ShelterBoss 인스턴스, 사이트 |
| **폼 자기보고와의 일치** | `org_type: Shelter` — 자기표기가 ***"a 501(c)(3) private, non-profit limited admission shelter"*** 로 정확히 일치 · `role: Something else` — Animal Care Supervisor 는 ED·창립자도, 포스터 코디네이터도 아니어서 폼 선택지에 없다. **정직한 응답이다** · `system` — 위 3종 전부 확인 · `fosters: More than 30` — **실측 190가정. 폼 최상위 구간의 6.3배**(아래 3절) | leads 폼, 본 조사 전체 |

→ **조직 확정, 신청자 확정.** 콜 상대는 **20년 경력의 수의 임상 출신 Animal Care Supervisor** 이고, **결재자가 아니다**(ED 는 Makenna Gwaltney). 다만 **「지금 이 고양이가 어디까지 준비됐는가」를 실제로 판정하는 자리**다.

## 미팅에서 바로 쓸 핵심 5줄

1. **콜 나흘 전(2026-09-04) 이사회가 「창립자가 조직에 부지에서 나가라고 요구했다」는 공개 서한을 올렸다 — 이 조직은 지금 캠퍼스를 잃는 중이다** — 이사회 서한 원문: ***"Joy and Preston Smith chose to separate from FieldHaven, demanded that the organization vacate the buildings on their property, and submitted written resignations from the Board."*** 그리고 끝에 ***"We look forward to sharing our new location as soon as we are able."*** **2003년 창립 이래 22년간 본 캠퍼스는 창립자 소유 랜치였고, 조직은 그 땅 위에 건물을 지었다**(FY2023 감가상각 명세의 `Buildings/Structures` $211,461·`Shelter` $4,347·`2nd Chance Ranch` 및 개보수 $56,067). 서한이 그것을 그대로 쟁점으로 적는다 — ***"determining the lawful treatment of buildings and improvements on the Smiths' property that were funded, in whole or in part, with FieldHaven charitable dollars."*** **2025년 말 기준 시설 보유 개체가 235마리다. 이 콜의 배경음은 「이 아이들이 어디로 가는가」이고, 답의 상당 부분은 포스터다**(추론). **우리가 먼저 이 사건을 꺼내지 않는다** — 상대가 꺼내면 받고, 아니면 「지금 팀에서 제일 손이 많이 가는 게 뭐예요」로 우회한다.

2. **폼의 「More than 30」과 실측이 6배 넘게 벌어져 있다 — 190가정이다** — 2025 Annual Report 원문: ***"200 volunteers spent 16,946.92 hours volunteering across FieldHaven. 190 foster homes cared for 777 cats and kittens. As of the end of the year, we have 6 cats in fospice, our end-of-life foster care."*** 2024년은 **116가정 / 785마리**였다. **가정 수는 1년에 64% 늘었는데 맡은 개체 수는 오히려 8마리 줄었다** — 가정당 6.8마리 → 4.1마리. 네트워크가 커진 만큼 처리량이 안 늘었다는 뜻이고, 그 사이에 낀 것이 조율 비용이다(**추론, 직접 확인 필요**). 폼을 채운 사람이 **최상위 구간을 고르고도 실제의 1/6 을 적었다**는 사실 자체가, 그 숫자를 조회할 화면이 없다는 정황이다(**추론**).

3. **조직이 국가 데이터베이스에 제출한 2025년 리포트의 「TOTAL IN FOSTER」 칸이 연초·연말 모두 0 이다 — 같은 해 자기 연차보고서는 190가정 777마리라고 쓴다** — Shelter Animals Count 2025 리포트(조직 게시, 2026-03-24 생성) 고양이 시트: `BEGINNING COUNT — TOTAL IN CARE 199 / TOTAL IN FOSTER 0`, `ENDING COUNT — TOTAL IN CARE 235 / TOTAL IN FOSTER 0`. **보유 두수는 채워져 있고 포스터 칸만 비어 있다.** 미제출인지 시스템에서 안 뽑히는지는 공개 자료로 판정할 수 없다(**추론**). 다만 **「지금 몇 마리가 가정에 있는가」가 대외 보고에서 0으로 나가고 있다**는 사실은 그 자체로 우리 가설의 정중앙이다. **이 표를 콜에서 들이대며 지적하지 않는다.** 쓰는 방식은 하나다 — **「연말에 SAC 숫자 뽑으실 때 포스터에 있는 애들은 어디서 세세요?」**

4. **도구가 세 개 동시에 돌고 있고, 마이그레이션이 사이트 위에 그대로 노출돼 있다** — 같은 페이지의 **상단 메뉴는 입양신청을 `form.jotform.com/93095765417164` 로**, **하단 메뉴는 같은 항목을 `new.shelterluv.com/matchme/adopt/FHFC/Cat` 으로** 보낸다. 원장은 **ShelterBoss**(`fieldhaven.shelterboss.com`), 도너 CRM 은 **NeonCRM**(`fieldhavenfelinecenter.app.neoncrm.com`), 이관 목적지는 **ShelterLuv(FHFC)** 다. ShelterLuv 쪽에 이미 살아 있는 것은 **입양 신청 · 포스터 신청**(`new.shelterluv.com/form/volunteer/FHFC/164042-foster-application-cats-and-kittens`) **· Kitten Sitters 신청**(`new.shelterluv.com/form/cat/FHFC/63216-kitten-sitters`) **세 갈래의 접수 폼**이다. **즉 신청은 ShelterLuv 로 들어오는데 개체 원장은 아직 ShelterBoss 에 있다**(추론, 확인 필요). **「ShelterLuv 를 바꾸자」도 「ShelterBoss 를 바꾸자」도 아니다 — 이 콜에서 성립하는 유일한 대화는 「이사 중에 가정 쪽이 어디로 떨어지는가」다.**

5. **상대는 결재자가 아니라 판정자이고, 본인 프로필에 「번아웃」을 두 번 적어 둔 사람이다** — 본인 소개 원문: ***"Recognizing the very real impact of burnout in veterinary medicine, Brandie is dedicated to fostering a culture that prioritizes balance, sustainability, and well-being."*** 그리고 ***"She also enjoys developing and implementing protocols that promote consistency, safety, and excellence in patient care."*** **20년 수의 임상, 그중 16년 고양이 전문, Fear Free Level 3, Cat Friendly 인증.** 이 사람에게 먹히는 언어는 라이브 릴리스율(이미 94%)도 대시보드도 아니다 — **「같은 걸 몇 번 다시 물어보게 되는가」, 「밤에 오는 문자가 몇 통인가」, 「프로토콜을 만들어 놨는데 지켜지는지 어떻게 아는가」** 쪽이다(**추론**, 초반 화법을 관찰해 조정).

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **FieldHaven Feline Center**(IRS 등록명). 조직 코드로 **FHFC** 를 쓴다(ShelterLuv 조직 코드, SAC 리포트 파일명 `fhfc-sac-report-*`) | ProPublica, 사이트 |
| EIN·지위 | **30-0240425** / 501(c)(3), **면세승인 2004-10**, **12월 결산**, **정식 990**. 990 Part I 의 `Year of formation` 이 **2004**, `State of legal domicile` 가 **CA** | ProPublica API, 990 FY2023 |
| NTEE | **D20**(Animal Protection and Welfare) | ProPublica API |
| 소재지 | **Lincoln, CA**(Placer County). **본 캠퍼스는 창립자 부부 소유 랜치이며 현재 퇴거 요구를 받은 상태다**(7절). **본 문서에는 번지를 적지 않는다** | ProPublica, 이사회 서한 |
| 설립 | **2003년 시작, 2004년 법인화.** 사이트 About 원문: ***"It all started in 2003 with a barn and a handful of feral cats. Word got out that sisters Jann Flanagan and Joy Smith were on a mission to rescue cats. Operating out of a trailer located on a private horse ranch in a rural area of Lincoln, CA, the sisters established FieldHaven Feline Rescue"*** | 사이트 |
| **성격** | **제한 인테이크(limited admission) 민간 쉘터 + 자체 수의 클리닉 + 포스터 네트워크 + 커뮤니티 캣 프로그램.** 자기표기 원문: ***"FieldHaven Feline Center is a 501(c)(3) private, non-profit limited admission shelter. We do not have a government sheltering contract, but we do partner with several municipal agencies to transfer animals into our program or other network partner shelters."*** | 사이트 Statistics |
| 취급 종 | **고양이 단일**(SAC 리포트 CANINE 전 항목 0). 다만 **저가 백신·마이크로칩 클리닉은 개도 받는다** — 2025년 `397 Cats / 546 Dogs` | SAC 2025, 2025 Annual Report |
| **캠퍼스·거점(현재 표기)** | ①**본 캠퍼스**(rural Lincoln, CA) ②**FieldHaven Marketplace** 중고매장(Lincoln 다운타운) ③**Marysville Cat Resource Center**(2026-07-01 폐쇄) ④**FieldHaven Hathaway Spay/Neuter Clinic**(Lincoln 캠퍼스) ⑤**FieldHaven Spay/Neuter Clinic – Citrus Heights Campus**(2026 개소, 시의회 승인) | 2025 Annual Report, 사이트 |
| 상설 입양 거점 | 본 쉘터(매일 11–16시) · Marketplace(매일 10–17시) · **PetSmart Lincoln**(매월 마지막 토, 예약제) · **PetFood Express Roseville**(매월 둘째 토) | 사이트 Adoptable Cats |
| 서비스 권역 | **포스터 자격 요건이 곧 권역이다** — 원문: ***"Live in Placer, Yuba, or Sacramento County"***. 클리닉·이관은 그보다 넓고, 2025년에는 **마우이 Kitty Charm Farm Sanctuary 와 제휴**, 남캘리포니아 레스큐 지원 이력도 있다 | 사이트 Foster Requirements, 2025 Annual Report |
| **유급 인력** | **FY2023 신고 기준 24명**(990 Part I 5행). **현재 스태프 페이지 등재 20명** — Executive Staff & Management 8 · Shelter Staff 4 · Clinic Staff 3 · Mission Support 5 | 990 FY2023, 스태프 페이지 |
| **인건비 규모** | FY2023 `Salaries, other compensation, employee benefits` **$654,893** — 총지출 $1,392,215 의 **47.0%**. 세부는 임원 $60,000 + 기타 급여 $541,872 + 복리후생 $5,301 + 급여세 $47,720 | 990 FY2023 Part I·IX |
| **자원봉사** | **FY2023 신고 484명.** 2024 Annual Report **434명 / 16,133시간**, 2025 Annual Report **200명 / 16,946.92시간**. **인원은 반으로 줄었는데 시간은 오히려 늘었다** — 집계 기준 변경인지 실제 이탈인지 **미확인** | 990 FY2023, 연차보고서 2종 |
| **경영진** | **Executive Director: Makenna Gwaltney, BS, EMT.** 2022년 Hathaway 클리닉 매니저로 입사 → Operations Director → **2024년 ED 취임**(2024 Annual Report `New in 2024` 항목: ***"Welcomed Makenna Gwaltney as our new executive director"***). 전직은 Itsie Bitsie Rescue 이사·ED, Donate Life California | 스태프 페이지, 본인 프로필, 2024 Annual Report |
| **의료 라인** | **Medical Director 2인** — Dr. Jen Yee(Lincoln Campus), Dr. Krissy Netherwood, DVM(Citrus Heights Campus). 2024년 기준 **로테이션 수의사 13명** 운영 | 스태프 페이지, 2024 Annual Report |
| **현재 이사회(4인)** | **Lisa Graetz(President) / Brooke Anderson(Vice President) / Sarah Parnell(Board Secretary) / Stacy Rea Thomas(Board Treasurer).** Treasurer 프로필 이미지가 **2026년 9월 업로드**분이다 — **최근 충원으로 보인다**(추론) | 이사회 페이지 |
| **직전 이사회(FY2023, 6인)** | Joy Smith(Executive Dir., 주 40시간, 보수 **$60,000**) / Kathy Leonard(President) / Kate Marden(Vice President) / Debra Hopking(Treasurer) / **Sarah Parnell(Secretary)** / **Preston Smith(Director)**. **현재까지 남은 사람은 Sarah Parnell 한 명뿐이다** | 990 FY2023 Part VII, 이사회 페이지 |
| **창립자** | **Joy Smith.** 2003년 자매 Jann Flanagan 과 공동 시작, 2004년 법인화. **2024년 ED 에서 물러나 Founder & Ambassador 로 전환**(승계 계획은 2020년부터 약 5년 일정으로 준비됐다고 공개돼 있다). **2026년 배우자 Preston Smith 와 함께 이사 사임 및 조직과 결별** | 사이트 About, 이사회 서한, 검색 |
| **스태프 구성상의 공백(중요)** | **스태프 페이지에 「Foster Care Manager」가 없다.** 그런데 포스터 FAQ 는 그 직책을 **6회** 호명한다 — 신청 심사·배치 결정·기간 안내·반환 접수가 전부 그 자리로 수렴한다. 현재 등재된 인접 직책은 **Brandie Wingo(Animal Care Supervisor)** 와 **Emma Owsten(Temporary Volunteer Coordinator, 2026-08 등재)** 뿐이고, 채용 공고에도 포스터 담당은 없다. **공석·겸임·페이지 미갱신 중 무엇인지 미확인 — 콜 초반에 가장 먼저 확인할 것** | 스태프 페이지, 포스터 FAQ, 채용 페이지 |
| 웹 자산 | **WordPress 사이트**(`fieldhaven.com`, 사이트맵 보유) + 별도 Marketplace 사이트(`fieldhavenmarketplace.com`, 2025년 신규) + Facebook + Instagram + TikTok + X + YouTube + eBay for Charity(114255). **전담 Webmaster(Vic Morgan)를 스태프로 둔다** | 사이트, 스태프 페이지 |
| 외부 네트워크 | **Best Friends Animal Society 파트너**, Shelter Animals Count 상시 제출, Lincoln Area Chamber of Commerce 회원, **UC Davis 수의대 제휴**(Adams Sisters Critical Care Fund), Placer County Animal Services 협력 | bestfriends.org, 사이트, placer.ca.gov |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **12월 결산.** 콜 시점(2026-09-09)은 **FY2026 3분기 중반**, 마감까지 약 3개월 반 | ProPublica API |
| 신고 양식 | **정식 990**(990-EZ 아님). Schedule A·B·D·G·O + **990-T**(비관련 사업소득) + Form 4562·3800 + 캘리포니아 Form 199·RRF-1 까지 낸다. **세무대리인은 Jensen Smith, CPA(Lincoln, CA)** 이고 **FY2023 준비 수수료 $1,000 을 전액 기부 처리**했다 | 990 FY2023 |
| **FY2025**(2025-12) | **수입 $1,907,644 / 지출 $1,749,067 / 순이익 +$158,577.** Marketplace 순이익 $128,394. **990 원문 미확보** — 조직 게시 연차보고서 판독값 | 2025 Annual Report |
| FY2025 수입 구성 | 일반기부 **52%** / 클리닉 **16.2%** / 중고매장 **13.1%** / 모금행사 **10.1%** / 투자 **4%** / 입양비 **3.3%** / 그랜트 **1%** | 2025 Annual Report |
| **FY2024**(2024-12) | **IRS BMF: 수입 $1,787,622 / 매출(revenue) $1,701,563 / 총자산 $1,784,916.** **조직 연차보고서 표기는 수입 $1,809,886 / 지출 $1,575,872 / 순이익 +$234,014** — **기준이 달라 두 숫자가 어긋난다. 콜에서 어느 쪽도 단정하지 말 것** | ProPublica BMF, 2024 Annual Report |
| FY2024 수입 구성 | 일반기부 **49%** / 중고매장 **14%** / **그랜트 12%** / 클리닉 **12%** / 모금행사 **6%** / 투자 **4%** / 입양비 **2%** / 기타 1%. **FY2024→FY2025 에 그랜트가 12% → 1% 로 급감했다** | 연차보고서 2종 |
| **FY2023**(2023-12) | 총수입 **$1,217,134** / 총지출 **$1,392,215** / **순손익 −$175,081** / 총자산 $1,629,124 / 총부채 $343,788 / 순자산 $1,285,336 | 990 FY2023 Part I |
| FY2023 수입 구성 | 기부·그랜트 **$705,444(58.0%)** / 프로그램 수입 **$466,710(38.3%)** / 투자수익 $3,751 / 기타 $41,229 | 990 FY2023 |
| **FY2023 지출 구성(중요)** | 프로그램 **$1,209,552(86.9%)** / 관리 $91,338 / 모금 $91,325. 세부 주요 항목 — **정보기술 $22,588** · **점유비 $20,830** · **수도광열 $23,103** · 보험 $32,812 · 감가상각 $52,344 · 이자 $11,982 · 광고·홍보 $5,572 · 사무비 $2,250 · 법률 $8,203 · 회계 $2,505 · **자원봉사 경비 $9,504** · 클리닉 경비 $167,077 | 990 FY2023 Part IX |
| **IT 지출 = 조달 대화의 기준선** | **연 $22,588 = 월 약 $1,882.** 여기에 ShelterBoss·NeonCRM·ShelterLuv 3종이 들어 있고(추론), **ShelterLuv 마이그레이션 비용이 FY2026 에 얹힌다**. 우리 제품이 놓일 자리의 상대적 크기가 이 숫자로 잡힌다 | 990 FY2023, 추론 |
| **점유비가 비정상적으로 싸다** | 총지출 $1.39M 짜리 조직의 **점유비가 연 $20,830** 이다. **본 캠퍼스가 창립자 소유지였기 때문으로 읽힌다**(추론). **퇴거 후 이 항목이 어디까지 오르는지가 FY2026~FY2027 재무의 최대 변수다** — 그리고 **그 압력이 「임대료 대신 포스터」로 흐를 개연이 있다**(추론, 직접 확인 필요) | 990 FY2023, 이사회 서한, 추론 |
| **자산 = 남의 땅 위의 건물** | FY2023 감가상각 명세의 취득원가: `Buildings/Structures` **$211,461**(2012) · `Shelter` **$4,347**(2018) · `Marketplace` **$425,957**(2019) · `2nd Chance Ranch` **$8,310** + 개보수 **$47,757** · `Solar` **$53,856**(2023-08) 외. 총 감가상각 대상 **$915,809**, 누계상각 $271,710. **이 중 어느 것이 창립자 부지 위에 있고 어느 것이 다운타운 Marketplace 인지는 명세로 갈리지 않는다(추론).** 다만 이사회 서한이 「Smiths' property 위의 buildings and improvements」를 쟁점으로 적었다는 사실만은 확정이다 | 990 FY2023 감가상각 명세, 이사회 서한 |
| 재무 궤적 | **$754,490(FY2017) → $879,000 → $1,000,759 → $1,308,198 → $1,040,661 → $1,420,294 → $1,217,134(FY2023) → 약 $1.7~1.8M(FY2024) → $1,907,644(FY2025).** **FY2023 한 해만 −$175,081 적자였고 그 뒤 흑자로 돌아섰다** | ProPublica, 연차보고서 |
| 부채 | FY2022 $328,231 → **FY2023 $343,788**. 이자 지출 연 $11,982 로 **차입금이 있다**(용도·잔액 미확인) | 990 FY2023 |
| 모금·결제 스택 | **PayPal 호스티드 버튼**(기금별로 별도 버튼) / **NeonCRM**(도너 CRM) / **JotForm**(문의·도움 요청 폼) / Amazon·Chewy 위시리스트 / eBay for Charity / 사이트 자체 뉴스레터 가입 폼 / 중고매장(Marketplace) / 유증 프로그램(Legacy of Love) | 사이트, 검색 |
| **감사** | **미확인.** 지출 $1.4M 규모이고 연방 단일감사 기준($750,000 연방자금)은 정부 재원 여부에 달렸는데 **정부 계약이 없다고 조직이 명시**한다. **캘리포니아 RRF-1(Registry of Charities) 은 매년 낸다** | 990 FY2023, 사이트 |
| 정부 재원 | **직접 계약 없음**(자기표기). 다만 **Marysville 는 시와 협력 관계였고**, 폐쇄 사유가 ***"municipal budgets are stretched thin, making it difficult to secure the funding necessary"*** 였다 | 사이트, Marysville 서한 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **2025 인테이크(SAC 원문)** | **총 939**(전량 고양이) — Stray/At Large **677** · 소유주 파양 **128** · 주내 기관 이관 **106** · 주외 이관 **10** · 미분류 이관 **12** · 기타 **6** | 조직 게시 SAC 2025 리포트(생성 2026-03-24) |
| **2025 인테이크 연령 구성(핵심)** | **5개월 이하 597 / 성묘 330**(고양이 시트 합계 927). **인테이크의 64.4%가 자묘다** | **포스터 수요의 구조적 원인.** 봄~가을 키튼 시즌에 집중된다 |
| 2025 아웃컴 | **입양 737** / 소유주 반환 22 / 타기관 이관 52 / RTF 2 = **생존 아웃컴 813**. 사내 사망 31 / 안락사 26 = **57** | **라이브 릴리스율 = 813 / 870 = 93.4%**(계산값). 조직 자기표기는 **94%** |
| **2025 연말 보유** | **시설 보유 235**(연초 199) | **연중 보유량이 늘었다** |
| **2025 「TOTAL IN FOSTER」** | **연초 0 / 연말 0** | **같은 해 연차보고서는 190가정 777마리라고 적는다. 이 칸이 왜 0인지는 미확인 — 콜에서 확인할 것(지적 아님)** |
| **2025 포스터(연차보고서)** | **190가정 / 777마리 케어 / 연말 fospice 6마리** | 원문: ***"190 foster homes cared for 777 cats and kittens."*** **폼 응답 `More than 30` 의 6.3배** |
| **2024 포스터** | **116가정 / 785마리** | **가정 수 +63.8%, 개체 수 −1.0%. 가정당 6.8 → 4.1마리** |
| 2025 입양(연차보고서) | **865마리** | **SAC 의 737 과 다르다** — 집계 범위(클리닉·Meow & Forever 포함 여부)가 다른 것으로 보인다(추론). **콜에서 어느 쪽도 단정하지 말 것** |
| 2024 입양 | **827마리** — 자묘 68% / 성묘 31%, **75%가 본 쉘터에서 발생** | 2024 Annual Report |
| 연간 인테이크(연차보고서) | **2024년 1,035 / 2025년 1,050** | SAC 의 939 와 차이. 위와 같은 이유(추론) |
| **라이브 릴리스율 이력** | 2015 95% · 2016 93% · 2017 93% · 2018 93% · 2019 95% · 2020 95% · 2021 95.61% · 2022 92% · 2023 92% · **2024 94%** · **2025 는 사이트에 LRR 표기가 없다** | 사이트 Statistics 페이지 링크 라벨. **2025만 라벨이 비어 있다 — 콜에서 언급하지 말 것** |
| 클리닉 규모 | **2025년 중성화 4,145마리(월평균 375)** — 소유주 고양이 40% / 커뮤니티 캣 38% / FieldHaven 고양이 16% / 타기관 6%. 2024년은 3,005마리(월 243) | 연차보고서 2종 |
| 저가 백신·마이크로칩 클리닉 | **2025년 943마리**(고양이 397 / **개 546**) | 2025 Annual Report |
| **CAT 헬프데스크** | **2025년 5,077건**, 자원봉사 **20명**이 운영. 73%가 커뮤니티·소유주 고양이 및 클리닉 문의. 2024년은 자원봉사 15명 / 월평균 375건 | 연차보고서 2종. **전담 스태프 「CAT Help Desk Coordinator」가 있다** |
| **Kitten Sitters(포스터와 별개의 분산 케어)** | **2025년 354마리 / 2024년 247마리.** 신청이 **ShelterLuv 폼**(`FHFC/63216-kitten-sitters`)으로 들어간다 | **쉘터에 넣지 않고 지역 주민 집에 두는 프로그램 — 「가정에 흩어진 개체」가 포스터 190가정 밖에 또 있다** |
| Meow & Forever(파양 유예·재입양) | **2025년 250마리**(전년의 2배), 59마리 새 가정, 24마리 원소유주 잔류. 2024년 123마리 | 연차보고서 2종 |
| 이관(Transfer) | **2025년 파양 완화 목적 342건 유입 / 171마리 타기관 이관.** 2024년 370건 | 연차보고서 2종 |
| 특수 의료 | **2025년 FIP 직접 치료 20마리** + FIP Stars 프로그램 지원. 안구수술 12 · 치과 48 · 링웜 60 | 2025 Annual Report |
| **현재 공개 입양 두수** | **미확인** | Petfinder(CA662)·Adopt-a-Pet(70068) 모두 목록 렌더링 실패. **조직 사이트의 「Adoptable Cats」 페이지에는 개체 리스팅 위젯이 아예 없다 — 신청 폼 링크와 방문 안내만 있다** |
| 대외 평판 | **부정 사건 미검출**(소송·행정처분·자금 논란 검색되지 않음). Yelp 리뷰 42건 존재하나 판독 안 함. **다만 이사회 서한 자체가 ***"inaccurate and incomplete information about recent events at FieldHaven is circulating publicly"*** 라고 적는다 — SNS 상 논란이 진행 중이다** | 검색, 이사회 서한 |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW ① = ShelterBoss (확정)** | **`fieldhaven.shelterboss.com` 인스턴스가 실재한다.** 공개 로그인 페이지(`/Public/AccountLogin`)와 개체 상세 페이지(`/Public/AnimalDetails/24397`)가 검색에 색인돼 있고, 후자는 현재 ***"We're sorry, this animal is not available."*** 를 반환한다(세션 만료 카운터까지 정상 동작 — **인스턴스는 살아 있다**) | 검색, 직접 조회 |
| **도너 CRM = NeonCRM (확정)** | **`fieldhavenfelinecenter.app.neoncrm.com`** 서브도메인 실재. 폼의 `Neo` 가 이것이다 | 검색 |
| **이관 목적지 = ShelterLuv, 조직 코드 FHFC (확정)** | 사이트에서 확인된 ShelterLuv 엔드포인트 3종 — ①입양 신청 `new.shelterluv.com/matchme/adopt/FHFC/Cat` ②**포스터 신청** `new.shelterluv.com/form/volunteer/FHFC/164042-foster-application-cats-and-kittens` ③**Kitten Sitter 신청** `new.shelterluv.com/form/cat/FHFC/63216-kitten-sitters` | 사이트 Adopt·Foster·Kitten Sitters 페이지 |
| **마이그레이션이 사이트 위에 노출돼 있다 (핵심 증거)** | **동일 페이지의 상단 메뉴와 하단 메뉴가 「Cat Adoption Application Form」을 서로 다른 곳으로 보낸다** — 상단 `form.jotform.com/93095765417164`, 하단 `new.shelterluv.com/matchme/adopt/FHFC/Cat`. 본문(Adopt·Adoptable Cats 페이지)은 ShelterLuv 쪽을 쓴다. **전담 Webmaster 가 있는 조직인데도 메뉴 한 벌이 안 갈아엎어졌다 — 전환이 진행 중이라는 뜻이다**(추론) | 사이트 전 페이지 |
| **JotForm 도 아직 살아 있다** | 입양 신청(구) `form.jotform.com/93095765417164` + **기부 페이지·입양 페이지의 「Need help? Click here!」** `form.jotform.com/261895281504159`(**2026년 생성 폼번호**). **구형만 남은 게 아니라 새 폼도 JotForm 으로 만들고 있다** | 사이트 Donate·Adopt 페이지 |
| **ShelterLuv 포스터 포털 활성 여부 = 판정 불가** | `new.shelterluv.com/public_foster_profile/FHFC` 가 「Fosterluv Login」을 렌더링하지만, **이 경로는 조직 코드와 무관하게 로그인 화면을 반환하는 것으로 보인다.** **활성화 근거로 쓰지 않는다 — 콜에서 확인** | 직접 조회 |
| **경쟁·인접 도구 = 미검출** | Petstablished · Pawlytics · Chameleon · ShelterBuddy · PetPoint · Petango · Adopets · RescueGroups · Doobert · Volgistics · Better Impact · SignUpGenius · Airtable · Bloomerang · DonorPerfect · Classy · Givebutter · Salesforce · Mailchimp **전부 판독 페이지에서 0건** | 사이트 판독 페이지 문자열 검색 |
| **공개 리스팅 채널** | **Petfinder(CA662) · Adopt-a-Pet(70068) · WeRescue(Clear The Shelters 2026 참가) · nokillnetwork · petshelters.org.** **게재 건수는 전부 미확인** | 검색 |
| **조직 사이트에는 개체가 없다** | 「Adoptable Cats」 페이지에 **리스팅 위젯이 없다.** 안내 문구는 ***"If you see a cat or kitten who catches your eye, please complete our Adoption Form. Our Adoption Team will contact you within 24 hours of receiving your submission."*** — **개체를 어디서 보라는 말이 없다** | 사이트 |
| **채용 공고에는 도구명이 없다** | 현재 공고 2건(Development Manager · Veterinarian). Development Manager 자격 요건이 ***"Proficiency with Microsoft Windows and Office (Word, PowerPoint, and Excel). Comfortable learning and using new programs/information systems."*** 뿐이고 **CRM 이름이 안 박혀 있다.** 도너 CRM 이 NeonCRM 인데 공고에 없다는 점은 **채용 문서가 도구를 반영하지 않는다는 뜻**이다(추론) | 채용 페이지 |
| **포스터 운영에 소프트웨어가 등장하지 않는다 (핵심)** | 포스터 FAQ 가 서술하는 동선에서 도구 이름은 **한 번도 나오지 않고, 대신 「Foster Care Manager」가 6회 나온다** — 신청 심사 ***"Your application will be reviewed by the Foster Care Manager who will contact you by phone or email"*** / 명부 등재 ***"You will then be added to the foster list."*** / **배치 결정** ***"The Foster Care Manager will review available foster families at the time of cat/kitten intake, and then determine which family 'gets the call.'"*** / 기간 안내 ***"The Foster Care Manager will have a 'rough' idea to give you"*** / 반환 ***"Call the Foster Care Manager who will arrange for you to bring the cat/kitten back"*** | 포스터 FAQ |
| **업데이트가 두 갈래로 흘러간다** | 포스터가 제공해야 하는 것 원문: ***"Regular reports on the foster feline's progress and personality to the foster care manager and medical staff"***. 요건 목록도 ***"provide regular reports to the foster manager on your foster's health and overall well-being"***. **수신자가 코디네이터 한 명이 아니라 「매니저 + 의료팀」 둘이다 — 같은 정보를 두 곳에 보내야 한다**(추론) | 포스터 페이지·요건 페이지 |
| **주기가 박힌 반복 일정이 있다** | ***"Kittens need to be brought to the shelter every three weeks when they are between three and 16 weeks old. After that, they only need to visit once every month until they reach one year, and then once per year unless there is an issue."*** **개체마다 주령에 따라 3주·1개월·1년 주기가 갈리고, 190가정 × 각 개체 주령으로 곱해진다** | 포스터 FAQ |
| **입양 준비 판정 기준이 문서에 있다** | ***"Just make sure you never give your foster to a potential adopter until the kitten/cat is medically cleared and the adoption paperwork is complete. You are responsible for your foster until the adoption paperwork is 100% complete."*** **판정 조건이 「medically cleared」 + 「paperwork complete」 둘인데, 포스터가 그것을 어디서 조회하는지가 안 적혀 있다** | 포스터 FAQ |
| **판정 시 주의** | 위 결과는 「안 쓴다」가 아니라 **「밖에서 보이는 자리에 없다」**의 증거다. **ShelterBoss 내부에 포스터 배치·의료 기록이 얼마나 들어가 있는지는 공개 자료로 알 수 없다.** 다만 **①포스터 FAQ 전체에 도구가 한 번도 안 나오고 ②SAC 리포트의 「in foster」 칸이 0이며 ③폼을 채운 스태프가 190가정을 「More than 30」으로 적었다** — 세 가지가 같은 방향을 가리킨다 | 추론 |
| **종합 판정** | **도구 교체 대화는 이미 상대가 시작해 두었고 우리 차례가 아니다.** ShelterBoss → ShelterLuv 전환이 진행 중이고 NeonCRM 은 별개로 돈다. 성립하는 대화는 하나다 — **①원장은 ShelterLuv 로 옮겨가고 있고 ②접수 폼도 이미 ShelterLuv 인데 ③「지금 어느 집에 누가 있고 어디까지 준비됐는가」는 세 시스템 어디에도 온전히 없다.** 그리고 **캠퍼스를 잃는 이사가 그 빈칸을 정확히 확대한다.** 「원장을 바꾸자」가 아니라 **「이사 중에 가정 쪽을 놓치지 않게 하자」** | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인** | **Executive Director(Makenna Gwaltney) → 이사회 4인(Lisa Graetz 회장 / Brooke Anderson 부회장 / Sarah Parnell 서기 / Stacy Rea Thomas 재무).** FY2023 990 상 의결권 이사 5인 중 독립이사 4인이었고, 현재는 **창립자 부부가 빠져 4인 체제**다. 재무 라인에 **상근 Accountant(Shirley Loss)** 와 **외부 CPA(Jensen Smith, Lincoln, CA)** 가 있다 |
| **콜 상대의 지위 = 결재자가 아니다** | **Brandie Wingo 는 Animal Care Supervisor 이고 스태프 조직도상 「Shelter Staff」 섹션이다.** 폼의 `role` 을 **`Something else`** 로 고른 것 자체가 그 사실을 보여준다. **다만 우리 제품이 실제로 닿는 자리(개체 케어·의료 준비 상태 판정)의 책임자이므로, 이 콜은 결재 콜이 아니라 「내부 챔피언 확보 콜」로 설계한다** |
| **전결 한도** | **미확인.** 990-EZ 규모가 아니라 정식 990·이사회·상근 회계 체제라 내부 지출 권한 규정이 있을 개연이 높으나 **공개 자료에 없다**. 대신 기준선이 되는 숫자는 있다 — **FY2023 정보기술 지출 연 $22,588(월 약 $1,882)**, 사무비 $2,250, 광고·홍보 $5,572 |
| **예산 사이클** | **12월 결산.** 콜 시점은 FY2026 3분기 중반이고, **FY2027 예산 편성 시기(가을)와 겹친다** — 다만 **이사·이전 때문에 정상 편성 사이클이 돌지 않을 가능성이 크다**(추론) |
| **지금 이 조직의 자금 압력 3가지** | ①**Marysville 폐쇄**(2026-07-01, 누적 투입 $1.5M, 지속 손실) ②**Citrus Heights 신규 클리닉 개소**(2026, 고정비 증가) ③**본 캠퍼스 퇴거·이전**(2026-09~, 점유비가 FY2023 기준 연 $20,830 에 불과했다). **세 개가 전부 「고정비」 방향이다** |
| **그런데 「돈이 없어 못 사는 조직」은 아니다** | FY2025 순이익 +$158,577, FY2024 +$234,014, 총자산 $1.78M. **유료 SaaS 를 최소 3종(ShelterBoss·NeonCRM·ShelterLuv) 동시에 굴리고 있고 전담 Webmaster 를 스태프로 둔다.** 도구 구매에 심리적 저항이 있는 유형이 아니다(추론) |
| **가격 대화 원칙** | **먼저 꺼내지 않는다.** 물으면 **①ShelterLuv 전환을 방해하지 않고 얹을 수 있는지 ②이전이 끝날 때까지 무료·저가로 붙일 수 있는지** 두 가지로만 답한다 |
| **예상 반론 ①: 「지금 ShelterLuv 로 옮기는 중이라 여력이 없다」** | **가장 확실히 나올 반론이고, 사실이다.** 반박하지 말고 **전환의 리스크 쪽에서 받는다** — 「전환하는 동안 가정에 나가 있는 애들 기록은 어느 쪽에 남나요?」. **마이그레이션 중에 가장 잘 새는 데이터가 「지금 밖에 있는 개체」다**(추론) |
| **예상 반론 ②: 「우리는 이미 시스템이 세 개다. 네 번째는 못 늘린다」** | 정면 반박 금지. **「늘리자」가 아니라 「190가정이 지금 무엇으로 보고하는지」를 먼저 묻는다.** 답이 문자·이메일·페이스북 메신저면 우리는 도구를 늘리는 게 아니라 없는 것을 채우는 쪽이다 |
| **병목 ①: 포스터 담당 자리가 안 보인다** | 포스터 FAQ 는 「Foster Care Manager」에 신청 심사·배치·기간·반환을 전부 걸어 두었는데 **현재 스태프 페이지에 그 직책이 없다.** 공석이면 그 업무가 어딘가로 흡수됐다는 뜻이고, **Animal Care Supervisor(우리 콜 상대) 가 유력 후보다**(추론, **콜 초반에 확인**) |
| **병목 ②: 케어 위치가 최소 다섯 갈래다** | 본 캠퍼스(235마리) · 190 포스터 가정 · fospice 가정 · Kitten Sitters 가정(연 354마리) · Marketplace 상설 전시. **여기에 이전이 얹히면 「본 캠퍼스」가 한동안 사라진다** |
| **병목 ③: 대외 보고와 내부 실측이 갈린다** | 입양 737(SAC) vs 865(연차보고서), 인테이크 939 vs 1,050, 포스터 0(SAC) vs 190가정. **어느 것도 틀렸다고 단정할 수 없지만, 같은 해 숫자가 문서마다 다르다는 사실 자체는 확정이다.** 이 조직에 「보고서 만드는 시간」이 실제 비용으로 존재한다(추론) |
| 2차 콜 후보 | **Makenna Gwaltney(Executive Director)** — 결재 축. **Emma Owsten(Temporary Volunteer Coordinator)** — 자원봉사·포스터 접점. **Dr. Jen Yee(Medical Director, Lincoln)** — 「medically cleared」 판정의 반대편. **조직을 통하지 않은 접촉은 하지 않는다** |

## 6. Brandie Wingo 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| **이름·직책** | **Brandie Wingo, Animal Care Supervisor.** 스태프 페이지 「Shelter Staff」 섹션 소속 | 스태프 페이지, 본인 프로필 |
| **연락처 도메인** | `b***@fieldhaven.com` — **리드 도메인과 일치**(신원 확정 근거) | 본인 프로필 |
| **경력** | **수의 의료 20년 이상, 그중 고양이 전용 진료 16년 이상.** 원문: ***"With over 20 years of experience in veterinary medicine, including more than 16 years in feline-only practice, she brings a strong background in leadership and a commitment to high-quality feline medicine to her position as Animal Care Supervisor."*** | 본인 프로필 |
| **자격** | **Cat Friendly Certified Veterinary Professional**, **Fear Free Certified Veterinary Professional (Level 3)**, **Veterinary Controlled Substance Permit(2017년부터 보유)** | 본인 프로필 |
| **입사 시점** | **미확인.** 프로필 페이지 게시일이 **2026-04-15**, 프로필 이미지 업로드 경로가 `2026/04` 다. 본인 소개에 ***"She is excited to support FieldHaven's continued growth"*** 라는 미래형 문장이 있어 **2026년 상반기 합류로 읽힌다(추론). 즉 창립자 이탈·Marysville 폐쇄·ShelterLuv 전환을 전부 입사 직후에 겪는 중이다** | 본인 프로필, 추론 |
| **전문 관심사** | **Fear Free 핸들링 · 통증 관리 · 통합의학.** 그리고 **프로토콜 설계** — 원문: ***"She also enjoys developing and implementing protocols that promote consistency, safety, and excellence in patient care."*** | 본인 프로필 |
| **자기 서술의 두 번째 축 = 사람** | ***"A dedicated cat advocate at heart, Brandie is passionate about improving the lives of cats while supporting and uplifting the people who care for them."*** 그리고 ***"She has a special interest in veterinary team culture and is a strong advocate for continued education, mental health awareness, and the destigmatization of challenges within the field."*** | 본인 프로필 |
| **번아웃을 명시적으로 말한다 (콜 설계의 핵심)** | ***"Recognizing the very real impact of burnout in veterinary medicine, Brandie is dedicated to fostering a culture that prioritizes balance, sustainability, and well-being."*** 그리고 마지막 문장이 ***"She believes in modeling a healthy work-life balance to help create a more sustainable and supportive future for those who care for animals."*** — **자기 소개문의 마지막 줄이 「지속가능성」이다** | 본인 프로필 |
| **개인 배경(본인 공개분)** | 취미는 베이킹·사진. 가족으로 **남편 Mike, 아들 Michael, 닥스훈트 Pinkman** 을 본인이 프로필에 적었다. **학력·전직 기관명은 미공개** | 본인 프로필 |
| **LinkedIn** | 프로필 실재(`/in/brandie-wingo-464305184/`)하나 **로그인 게이트로 판독 실패.** 재직 기간·전직 확인 못 함 | LinkedIn |
| **대명사** | **본인이 명시적으로 선언한 기록은 없다.** 조직이 게시한 본인 소개문이 일관되게 she/her 로 지칭한다. **콜에서 확인되기 전까지 단정 표현을 쓰지 않는다** | 본인 프로필 |
| **폼을 이 사람이 채운 이유(추정)** | 소재 B(임시보호자 업데이트 수집)에 반응했고 `role` 을 `Something else` 로 골랐다. **ED 도 포스터 매니저도 아닌 사람이 포스터 업데이트 소재에 반응했다** — ①포스터 담당이 공석이라 업무가 넘어왔거나 ②의료 준비 상태 판정 때문에 포스터 보고를 가장 많이 받는 자리이거나 둘 중 하나다(**추론, 콜 초반에 확인**) | 추론 |
| **콜에서 통할 언어** | **①프로토콜이 지켜지는지 확인하는 비용 ②같은 걸 다시 묻는 횟수 ③사람의 지속가능성.** 이 조직에 라이브 릴리스율(94%)이나 「더 많이 구조하자」는 무의미하다 — 이미 잘한다. 반면 **「190집한테 상태 확인하는 데 일주일에 몇 번 다시 연락하세요」**, **「medically cleared 인지를 포스터가 직접 볼 수 있나요, 아니면 물어봐야 하나요」**, **「3주 주기 검진 놓친 애가 있는지는 어디서 아세요」** 같은 **동작·횟수 단위 질문**에 반응할 상대로 읽는다(**추론**, 초반 화법을 관찰해 조정) | 추론 |
| **먼저 꺼내지 말 것** | ①**창립자 이탈·퇴거 분쟁** — 상대가 꺼내면 받되 **우리가 먼저 묻지 않는다.** 진행 중인 법률 사안이고 직원 개인이 답할 수 있는 주제가 아니다 ②**SAC 리포트의 「in foster 0」** — 지적하면 방어가 걸린다. 「연말에 그 숫자 뽑으실 때 포스터 쪽은 어디서 세세요」로 우회 ③**입양 737 vs 865 등 문서 간 숫자 불일치** ④**2025년 LRR 라벨이 사이트에 없는 것** ⑤**Marysville 폐쇄** — 본인 소속 사업장이 아니고 조직에 아픈 주제다 ⑥**가격** ⑦**ShelterLuv·ShelterBoss 대체** — 「전환은 그대로 두고 가정 쪽만」을 첫 문장에 못 박는다 | 추론 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| 2020년경 | **창립자 승계 계획 착수.** 이사회와 함께 약 5년 일정으로 Joy Smith 은퇴를 준비하기 시작 | 검색(조직 공개분) |
| 2024년 | **Makenna Gwaltney ED 취임.** Joy Smith 은 ED 에서 물러나 **Founder & Ambassador** 로 전환. 같은 해 Fungal Jungle(링웜 43마리)·FIP Stars(18마리) 시작, 1회 Fun Fair·Holiday Faire 개최 | 2024 Annual Report, 검색 |
| 2024년 (연간) | **인테이크 1,035 / 입양 827 / 포스터 116가정 785마리 / 자원봉사 434명 16,133시간 / LRR 94% / 중성화 3,005.** 수입 약 $1.8M | 2024 Annual Report, ProPublica BMF |
| 2025-08 | **Marysville 시가 FieldHaven 의 지역 기여를 공식 인정** | Marysville 서한 |
| 2025년 (연간) | **인테이크 1,050 / 입양 865 / 포스터 190가정 777마리 / 자원봉사 200명 16,946.92시간 / 중성화 4,145 / Kitten Sitters 354 / CAT 헬프데스크 5,077건.** 수입 $1,907,644 · 지출 $1,749,067. **Citrus Heights 신규 클리닉 시의회 승인**, 브리더 압류 **Scottish Fold 110마리 지원**, 마우이 Kitty Charm Farm Sanctuary 제휴 | 2025 Annual Report |
| 2026년 상반기 | **Brandie Wingo 합류로 추정**(프로필 게시 2026-04-15). Emma Owsten 이 **Temporary** Volunteer Coordinator 로 합류(프로필 이미지 2026-08) | 스태프 페이지, 추론 |
| **2026-06-26** | **Marysville Cat Resource Center 폐쇄 공고, 2026-07-01 효력.** 8년간 4,650마리 이상 서비스, 누적 투입 **$1.5M 초과**, ***"the program has operated at a significant loss despite years of fundraising, grant writing, and organizational support."*** 서한이 **창립자 Joy Smith 을 ***"our fearless founder"*** 로 감사하며 끝난다 — 6월까지는 관계가 유지되고 있었다** | 조직 블로그 |
| **2026-09-04 (콜 나흘 전)** | **이사회 공개 서한 — 창립자 부부 이탈·퇴거 요구·이사 사임.** 원문: ***"Joy and Preston Smith chose to separate from FieldHaven, demanded that the organization vacate the buildings on their property, and submitted written resignations from the Board."*** 변호사 선임 사실 명시(***"Counsel was retained not to remove the Smiths, but to guide the organization through this transition"***), 자선자산 사적 이익 금지 언급, **부지 위 건물·개보수의 법적 처리를 쟁점으로 적시**, 그리고 ***"We look forward to sharing our new location as soon as we are able."*** 서두에 ***"inaccurate and incomplete information about recent events at FieldHaven is circulating publicly"*** — **SNS 상 논란 진행 중** | 조직 블로그 |
| 현재 | **채용 공고 2건 게시 중** — Development Manager, Veterinarian. **포스터 담당 공고는 없다** | 채용 페이지 |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

- **포스터 배치가 사람의 판단이다.** FAQ 원문 ***"The Foster Care Manager will review available foster families at the time of cat/kitten intake, and then determine which family 'gets the call.'"*** — 190가정 중 「지금 자리 있는 집」을 인테이크 시점에 사람이 훑는다. **그 명부가 무엇인지 확인 필요.**
- **포스터 명부가 「list」로 불린다.** ***"You will then be added to the foster list."*** — 시스템 레코드가 아니라 목록이다. **스프레드시트인지 ShelterBoss 레코드인지 확인 필요.**
- **업데이트 수신자가 둘이다.** ***"...to the foster care manager and medical staff"***. 포스터가 같은 내용을 두 곳에 보내야 하는 구조로 읽힌다. **수단(메일·문자·앱)과 실제 이중 전송 여부 확인 필요.**
- **주기 일정이 개체 주령별로 갈린다.** 3~16주령은 3주마다, 이후 1년까지 월 1회, 그 뒤 연 1회. **190가정 × 각 개체 주령의 곱을 무엇으로 관리하는지 확인 필요.**
- **입양 준비 판정이 두 조건의 논리곱인데 조회 경로가 안 적혀 있다.** ***"medically cleared and the adoption paperwork is complete"***. **포스터가 직접 볼 수 있는지 확인 필요.**
- **SAC 국가 보고의 「in foster」가 0이다.** 시스템에서 안 뽑히는 것인지 제출 시 비운 것인지 **확인 필요**(지적 아닌 질문으로).
- **폼 응답이 실측의 1/6 이다.** 「More than 30」 vs 190가정. 폼 선택지 상한이 30이었을 가능성도 있으나, **최상위 구간을 고르고도 실제와 6배 벌어졌다는 사실은 조회 화면 부재의 정황이다. 확인 필요.**
- **가정 수는 64% 늘었는데 개체 수는 그대로다**(116→190가정 / 785→777마리). 신규 포스터가 실제로 개체를 받고 있는지, 명부에만 있는지 **확인 필요.**
- **Kitten Sitters 가 포스터 밖의 또 다른 분산 케어다.** 연 354마리가 지역 주민 집에 있다. **포스터와 같은 도구로 관리하는지 확인 필요.**
- **입양 신청 폼이 두 개 살아 있다**(JotForm·ShelterLuv). 두 경로로 들어온 신청이 어디서 합쳐지는지 **확인 필요.**
- **연차보고서와 SAC 리포트의 숫자가 서로 다르다.** 보고서 작성이 재집계 작업일 개연이 있다. **확인 필요**(지적 아닌 질문으로).

## 미확인 요약 (콜에서 확인할 것)

1. **「Foster Care Manager」가 지금 누구인가 — 공석인가, 겸임인가, Brandie 본인인가.** 스태프 페이지에 없고 채용 공고도 없다. 이 답이 콜의 나머지 설계를 결정한다.
2. **190가정 중 「지금 어느 집에 누가 있는가」를 무엇을 열면 보는가.** ShelterBoss 인가, 스프레드시트인가, 매니저의 메일함인가.
3. **ShelterBoss → ShelterLuv 전환이 어디까지 왔는가.** 개체 원장의 정본이 지금 어느 쪽인가, 완료 목표 시점이 있는가, 포스터 데이터도 옮기는가.
4. **SAC 리포트의 「in foster」 0.** 시스템에서 안 뽑히는지, 제출 관행인지.
5. **포스터 업데이트가 실제로 어떤 수단으로 오는가**, 그리고 **매니저와 의료팀 두 곳에 따로 가는가**.
6. **입양 준비 상태(medically cleared + paperwork)를 포스터가 직접 조회할 수 있는가.**
7. **캠퍼스 이전이 포스터 수요에 어떤 영향을 주는가** — 우리가 먼저 묻지 않고, 상대가 이전을 언급하면 그 흐름에서만 묻는다.
8. **Brandie 의 입사 시점과 현재 담당 범위** — 어디까지가 본인 결정이고 어디부터 ED 결재인가.
9. **연간 입양 수치의 정의**(SAC 737 vs 연차보고서 865) — 어느 쪽이 내부 운영 기준인가.
10. **자원봉사 434명 → 200명** 이 집계 기준 변경인지 실제 감소인지.
11. **Petfinder·Adopt-a-Pet 현재 게재 두수**(외부 판독 실패) 및 **어느 채널이 정본인가**.
12. **IT 예산 $22,588(FY2023) 안에 무엇이 들어 있는가** — 세 시스템의 실제 연간 비용 구조.
