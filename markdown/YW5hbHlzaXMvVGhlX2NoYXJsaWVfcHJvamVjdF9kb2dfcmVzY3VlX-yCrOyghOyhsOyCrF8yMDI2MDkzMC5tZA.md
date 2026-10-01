# The charlie project dog rescue 사전조사

- 작성일: 2026-09-30 / 목적: Mara Sabath 콜 준비 / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: {"org_type": "Foster-based rescue", "role": "Executive director or founder", "system": "Shelterluv", "fosters": "1–10"} · 유입 소재 **B**(임시보호자 업데이트 수집 — 폼에서 현재 임시보호자 수를 물었다) · 이메일 도메인 `comcast.net` · 미팅 **2026-11-03**
- **조직 특정 완료 (판정: 확정)** — IRS BMF 에 이름이 맞는 조직은 **`Charlie Project Dog Rescue Limited`(EIN 87-4433920, Twin Lakes, WI)** 한 건뿐이다. 같은 이름의 다른 주 단체는 검색되지 않았다. 여기에 **위스콘신주 DATCP 동물보호시설 라이선스 `506053`**(Kenosha County 등재, 개체 페이지에 조직이 직접 표기)이 겹쳐 조직이 한 곳으로 좁혀진다
- **신청자 개인도 특정 완료** — 조직 공식 팀 페이지에 **Mara Sabath — Director of Operations** 로 올라 있다. 다만 **폼 자기보고 `Executive director or founder` 와는 어긋난다.** 같은 페이지의 Founder 는 **Pam Stadler**, Co-Founder 는 **Richard Stadler** 이고, 990 에 등재된 유일한 임원도 **Pamela Stadler(Owner, 보수 $0)** 다. **직책 차이는 콜 초반에 확인할 사항이지 조직 특정의 결격 사유가 아니다**
- 신원 교차확인 ②: 조직 행사 목록에 **"Volunteer's Home" 에서 연 팝업 입양 행사(2026-05-17)** 가 있고, 그 장소가 **Buffalo Grove, IL 의 신청자 본인 자택과 일치**한다(부동산 기록 대조). **번지 주소는 이 문서에 적지 않는다.** 현재 게재 중인 개 가운데 2마리도 **"Fostered in Buffalo Grove, IL"** 이다 — **신청자 본인이 포스터이자 행사 장소 제공자**일 개연이 크다(추론, 직접 확인 필요)
- 출처 주석 ①: **조직 사이트는 Cloudflare 로 직접 curl 이 차단된다.** 본문·원문 문자열은 전부 리더 프록시(`r.jina.ai`)로 받았고, 플러그인 목록은 `x-return-format: html` 로 받은 원본 HTML 에서 실측했다
- 출처 주석 ②: **Facebook·Instagram·Petfinder·LinkedIn 은 판독하지 못했다**(로그인 벽·403). 팔로워 수, 최근 게시물, Petfinder 게재 실태, Mara Sabath 의 LinkedIn 이력 원문은 **미확인**이다. 본문에서 LinkedIn 직함·경력으로 적은 것은 전부 **검색 결과 요약(2차)** 이다
- 출처 주석 ③: **990 PDF 원문은 읽지 않았다.** 재무 수치는 ProPublica API 의 IRS 신고 추출값(FY2022·FY2023)과 CauseIQ 의 990 추출값(FY2024·FY2025)만 썼다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 **시·주까지만** 적는다

## 미팅에서 바로 쓸 핵심 5줄

1. **폼의 "1–10 포스터" 는 지금 사이트에 걸린 개 수(9마리)에 맞춘 답으로 보인다 — 처리량으로 역산하면 동시 위탁이 20~40마리, 활동 포스터는 15~30가정이다(폼의 2~3배)** — 조직 WordPress 의 개체 레코드가 **2026년 1~9월에 179건**(월 약 20건) 쌓였고, 포스터 페이지가 **"Most foster placements last approximately 4–8 weeks"** 라고 공표한다. 월 20건 × 1~2개월 = **동시 20~40마리**. 시설이 없으니 이 전부가 가정에 있다. **콜의 첫 앵커를 "10가정 이하" 에 두지 말고 "지금 몇 가정에 몇 마리가 나가 있는지" 를 묻는 데 둔다.** 다만 산식이므로 반드시 본인 확인을 받고 쓴다.

2. **폼에 적은 `Shelterluv` 의 흔적이 사이트 어디에도 없다 — 실제로 돌아가는 것은 Buzz 가 만든 WordPress 플러그인이다** — 입양 신청 페이지 원본 HTML 의 플러그인 경로는 **`buzz-adopters`, `buzz-hive`, `gravityforms`, `gp-nested-forms`, `gfstylespro`, `give`, `give-tributes`, `eventON`, `bbpowerpack`, `add-to-any`** 열 개뿐이다. **shelterluv·petstablished·pawlytics·rescuegroups 문자열은 한 건도 없다.** 사이트는 벤더 **Buzz to the Rescue**(`buzztotherescue.com`) 가 만든 `buzz-rescues` 테마로 돌아간다. **이 콜의 첫 갈림길은 "우리가 Shelterluv 를 대체하려는가" 가 아니라 "Shelterluv 가 실제로 켜져 있기는 한가" 다.** 먼저 확인하고 그 뒤 이야기를 갈라야 한다.

3. **가장 단단한 통증 증거는 본인들이 포스터 신청 페이지에 직접 써 붙인 문장이다** — 원문: **"If you submit a foster application prior to 2026 and did not receive email approval, we kindly ask that you submit a new application if still interested in fostering."** 곧 **2025년까지 들어온 포스터 신청 중 답을 못 받고 쌓인 것들이 있고, 조직이 그 줄을 되살리는 대신 리셋했다는 뜻이다.** 소재 B 로 들어온 리드에서 이보다 정면인 근거는 드물다. **기능 설명 없이 이 문장을 그대로 읊고 "그때 몇 건이나 쌓였었냐" 고 묻는다.**

4. **175문항짜리 신청서를 받아 놓고, 진행 단계를 담는 칸이 두세 개뿐이다** — 사이트 사이트맵에 공개된 분류 체계가 **`adopter_status` = current / dna 두 개**, **`foster_status` = current / fostering / closed 세 개**, 개체 상태 **`status` = available / happy-tails / over-the-bridge / submitted / forever-foster / clinic 여섯 개** 다. 입양 신청서는 Gravity Forms 폼 ID 70 에 **필드 175개(중첩 폼 4개 포함)** 로 짜여 있다. **받는 쪽은 정교한데 그 뒤 단계가 없다** — 심사 중·레퍼런스 확인 중·수의사 조회 중·매칭 대기 같은 칸이 존재하지 않는다.

5. **담당자는 30년차 이벤트 플래너이고, 이 조직의 입양은 월 1회 행사로 돌아간다 — 행사 운영 언어가 먹힌다** — 검색 요약에 따르면 Mara Sabath 는 Buffalo Grove 의 이벤트 기획사 **Memorable Events**(1996년 설립) 대표다(2차, 원문 미확인). 조직 행사 페이지는 입양 절차를 **①Meet & Greet → ②Selection(팀이 검토·매칭해 선정자에게 연락) → ③Adoption(선정자가 돌아와 서류 쓰고 당일 데려감)** 세 단계로 못박아 놨다. **행사 당일에 팀이 실시간으로 매칭 심사를 돌린다는 뜻이다.** 다음 행사는 **2026-10-24(시카고)** 로 콜 열흘 전이다. **"지난 행사 어땠어요" 로 열면 본인 언어로 시작한다.**

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법적 지위 | **501(c)(3) 공익법인.** subsection 3, deductibility 1, 지위코드 1(정상). foundation code 15 = 509(a)(1) 공공지원형 | ProPublica API(IRS BMF, `current_2026_09_16`) |
| EIN | **87-4433920** | ProPublica API |
| 면세 인정일 | **2022-04-01.** 다만 CauseIQ 는 **법인 설립 연도를 2018년**으로 적는다. 사이트 최초 업로드 파일이 **2022년 10월**이므로 **대외 활동은 2022년부터로 보이고, 2018~2022 사이의 공백은 미확인**이다 | ProPublica API, CauseIQ, 실측(업로드 경로) |
| 등재명 불일치 | **IRS 등재명은 `Charlie Project Dog Rescue Limited`, CauseIQ 는 `The Charlie Project Dog Rescue Corporation`, 대외 브랜드는 `The Charlie Project Dog Rescue`** 다. **경위 미확인 — 콜에서 캐묻지 않는다** | ProPublica API vs CauseIQ vs 조직 사이트 |
| 소재지 | **법인 등록지는 Twin Lakes, Wisconsin**(Kenosha County). CauseIQ 가 분류한 광역권은 **Chicago-Naperville-Elgin, IL-IN-WI**. **번지 주소는 이 문서에 적지 않는다** | ProPublica API, CauseIQ |
| **실질 운영 중심** | **등록지는 위스콘신인데 활동은 시카고권이다.** 2026년 행사 9건이 전부 시카고·노스쇼어(Roscoe Village, Lincoln Park, Highland Park, Glencoe, Elston Ave)에서 열렸고, **Lakeview Roscoe Village Chamber of Commerce 회원사**로 등재돼 있다 | 조직 행사 페이지, Chamber 회원 목록 |
| NTEE | **D01**(BMF) / **D20 Animal Protection and Welfare**(CauseIQ 분류) | ProPublica API, CauseIQ |
| **주 라이선스** | **위스콘신 DATCP 동물보호시설 라이선스 `506053`.** 개체 상세 페이지에 조직이 직접 **"Licensed by WI DACPT #506053"** 로 표기(원문 표기 오타 포함). DATCP 공개 명부에서 **Kenosha County 항목으로 확인**된다 | 조직 사이트(개체 페이지), WI DATCP 라이선스 명부 PDF |
| **성격** | **시설 없는 포스터 기반 레스큐.** 개체 카드마다 **"Fostered in ○○"** 이 붙고, About 원문은 **"a nonprofit all volunteer run dog rescue"**. **폼 자기보고 `Foster-based rescue` 와 일치** | 조직 사이트(About·개체 목록) |
| 시설 | **보호소 없음.** 상설 접점이 없고, **월 1회 상업시설·자원봉사자 자택에서 여는 팝업 입양 행사**가 유일한 대면 창구다 | 조직 사이트(Events) |
| 인테이크 경로 | **보호소 pull + 소유자 파양 + 브리더 유래.** About 원문 "We rescue dogs from shelters, owner surrenders, and breeder situations—including those often overlooked due to age, medical needs, or appearance". 입양비 설명에 **"shelter pull fees"** 가 항목으로 들어 있다. 개체 사례로 **밀워키 소유자 파양**, **남부에서 올라온 이송** 건이 확인된다 | 조직 사이트(About·입양 정보·개체 페이지) |
| **서비스 권역** | **일리노이·위스콘신 한정, 입양자 만 25세 이상.** 원문 "We currently only consider adopters in Illinois and Wisconsin over the age of 25." 포스터 지원은 만 21세 이상 | 조직 사이트(입양 정보·포스터 신청) |
| 포스터 분포 | 현재 게재 개체 기준 확인된 위탁지 — **Twin Lakes WI, Kansasville WI, Rubicon WI, Buffalo Grove IL, Chicago IL.** **주(州)를 걸친 분산 배치**이고 Rubicon 은 Twin Lakes 에서 100km 이상 떨어져 있다 | 조직 사이트(개체 목록) |
| 종 구성 | **개 전용** | 조직 사이트 |
| 인력 — 유급 | **0명.** CauseIQ 특성 태그 "No full-time employees", 990 상 Pamela Stadler 보수 $0. About 도 "all volunteer run" | CauseIQ, 조직 사이트 |
| **인력 — 팀(5인)** | **Pam Stadler — Founder / Richard Stadler — Co-Founder / Mara Sabath — Director of Operations / Mallory Sherwood — Foster & Event Director / Sydney Feldman — Medical Assistant.** **포스터와 행사를 한 사람이 겸한다**(Mallory Sherwood) | 조직 사이트(Our Team) |
| 이사회 | **990 에 등재된 임원은 Pamela Stadler(Owner) 1인뿐이다.** 실질 이사회 구성은 **미확인** | CauseIQ(990 추출) |
| 웹 | `thecharlieprojectdogrescue.com` — **WordPress.** 테마 `buzz-rescues`, 제작·운영 벤더 **Buzz to the Rescue**(사이트 푸터에 "Powered By: Buzz" 명기) | 실측(원본 HTML) |
| SNS | Facebook 페이지·Instagram 계정·LinkedIn 게시물 링크 존재. **셋 다 판독 실패**(로그인 벽). 팔로워·게시 빈도 **미확인** | 실측(판독 실패) |
| 입양 플랫폼 등재 | **Adopt-a-Pet 조직 페이지 확인**(Twin Lakes WI, 대표 메일 `t***@gmail.com`). **Petfinder 조직 페이지도 존재**(멤버 ID `wi565`)하나 **403 으로 판독 실패.** Chewy 기부 페이지도 있다. **자동 연동인지 수기 입력인지 미확인** | Adopt-a-Pet, 검색 결과(2차), 실측(판독 실패) |
| 대표 연락처 | 공개된 것은 **gmail 대표 메일 1개**와 전화 2개(CauseIQ 630번대 / Chamber 847번대). **847 은 시카고 북부 교외 국번**이다. 번호별 담당자는 **미확인** | Adopt-a-Pet, CauseIQ, Chamber |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| **연 수입 추이** | FY2022 **$103,392** → FY2023 **$128,813** → FY2024 **$217,133** → FY2025 **$198,966**. FY2024 는 전년 대비 **+68.6%**, FY2025 는 **−8.4%** | ProPublica API(FY22·23), CauseIQ(FY24·25) |
| 연 지출 | FY2022 **$93,533** / FY2023 **$188,608**. **FY2023 은 $59,795 적자.** FY2024·FY2025 지출액은 **미확인**(990 원문 미판독) | ProPublica API |
| **순자산** | FY2022 말 **+$9,859**(자산 $38,009 / 부채 $28,150) → FY2023 말 **−$59,795**(자산 $37,636 / 부채 **$97,431**). 최신 BMF 자산액은 **$61,462**(tax period 2025-10)로 회복 흐름이나, **FY2024·FY2025 부채는 미확인** | ProPublica API, ProPublica BMF |
| **재원 구성(중요)** | **990 상 프로그램 서비스 수입이 4개 연도 모두 $0 이고, 전액이 "기부·후원금"으로 신고돼 있다.** 그런데 조직은 입양비 $200~800 을 실제로 받는다. **입양비가 기부금 항목에 합산돼 신고되는 구조**로 보인다(추론). **곧 공개 재무로는 입양 건수를 역산할 수 없다** — 다른 조직 사전조사에서 쓰던 "프로그램 수입 ÷ 입양비" 방식이 여기서는 막힌다 | CauseIQ, ProPublica API, 조직 사이트 / 추론 |
| 입양비 | **$200~800, 개체별 차등.** 포함 항목 — 수의검진, 백신, 중성화, 심장사상충 검사·치료, 예방약, 구충, 치료, **건강증명서(health certificate)**, 마이크로칩, 미용, 사료·용품, 이송, **보호소 pull 비용**. 실제 게재 사례에서 **10주령 강아지 $800** 확인 | 조직 사이트(입양 정보·개체 페이지) |
| **강아지 입양비의 특이 구조** | 중성화 **전에** 내보내고 비용을 선불로 받는다 — 원문 "**future boosters provided by one of our rescue volunteers, as well as future alteration surgery and rabies vaccination at one of our partner veterinary clinics. Alternatively, we offer a $100 reimbursement if you prefer to use your own primary veterinarian**". **입양 이후에도 조직이 갚아야 할 의무가 개체마다 남는다** | 조직 사이트(개체 페이지) |
| 기부 채널 | **GiveWP(사이트 내 결제) + Give Tributes(추모 기부)**, 수표, 고용주 매칭기프트, **유가증권·생명보험·유증** 안내, **Amazon 위시리스트**, Chewy 기부 페이지 | 실측(플러그인), 조직 사이트(Donate), Chewy |
| **그랜트** | **Gurtz Family Foundation(Arlington Heights, IL) $20,000**(2025-12 과세기간, 용도 "Exempt Purpose Operations"). **연매출의 약 10% 를 한 지역 가족재단이 댄다.** 그 밖에 AmazonSmile $74(2023) | CauseIQ(그랜트메이커 990 추출) |
| 스폰서 | 사이트 전 페이지 사이드바에 **Vet Naturals** 배너(제휴 링크 파라미터 포함) | 실측 |
| **현 SW 지출** | **금액 미확인이나 유료 소프트웨어를 이미 여러 개 산다.** 확인된 유료 라이선스·구독 — **Gravity Forms**, **Gravity Perks Nested Forms**(`gp-nested-forms`), **GF Styles Pro**, **GiveWP**(+Tributes 애드온), **EventON**, **BB PowerPack**, 그리고 **Buzz to the Rescue 의 커스텀 테마·플러그인 유지보수**. **통상 합계 연 수백~천 달러대**(추론) | 실측(원본 HTML), 추론 |
| 회계연도 | **10월 결산**(`accounting_period: 10`). 신고 의무는 **정식 990**. FY2024·FY2025 는 **990-EZ 에서 정식 990 으로 올라섰다** | ProPublica API, CauseIQ |
| **시사점** | ①**"소프트웨어를 안 사는 조직" 이 아니다.** 웹 스택에 매년 돈을 쓰고, 벤더에게 커스텀 개발까지 맡긴다 — 설득 축은 "지출 시작" 이 아니라 **"산 도구가 못 덮는 자리"** 다. ②**돈의 절대 규모는 작다**(연 $199k, 유급 0명). 월 구독을 먼저 말하면 닫힌다. ③**회계연도가 10월 결산이라 콜(11/3)은 FY2027 첫 주다** — 새 예산을 그리는 자리로는 1년 중 가장 유리한 타이밍이다. ④**FY2025 매출이 8.4% 줄었다.** 우리가 먼저 지적하지 않는다 | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **개체 레코드 누적(핵심)** | **875건**(2023~2026-09). 최종수정일 기준 연도 분포 — **2023년 169 / 2024년 276 / 2025년 251 / 2026년 179**(9월 말까지) | **실측**(WordPress 개체 사이트맵 `wp-sitemap-posts-dog-1.xml`). **주의 — 최종수정일이지 인테이크일이 아니다.** 재게재·수정으로 연도가 밀릴 수 있다. 다만 **"연 200~280개체 규모" 라는 자릿수는 이 값으로 지지된다** |
| **개체 일련번호** | 공개 게재명에 **`(#226)`~`(#381)`** 형식의 번호가 붙는다. 2026년 9월 시점 최대 **#381** | **실측.** 단 **2024년 개체(예: Wolverine)에는 번호가 없다** — 곧 **통산 번호가 아니라 도중에 도입된 체계**다. **#381 을 누적 구조 두수로 읽으면 안 된다.** 언제부터 매겼는지는 미확인 |
| **연간 처리량(추정)** | **연 200~280개체.** 2026년 1~9월 179건 → 월 약 20건 → 연 환산 **약 240건** | **추론(레코드 수 기준).** 990 프로그램 수입이 $0 로 신고돼 **재무로 교차검증이 불가능하다.** 콜에서 본인 수치를 받아야 한다 |
| **현재 게재 두수** | **약 9마리**(목록 1페이지 8 + 2페이지 1). 그중 **2마리가 "Pending Adoption"** | 실측(개체 목록 1·2페이지) |
| **동시 위탁 두수(추정)** | **20~40마리.** 산식 — 월 유입 약 20건 × 위탁 기간 4~8주(조직 공표) | **추론.** 게재 9마리와 벌어지는 이유는 **clinic·submitted 등 미게재 상태 개체**가 있기 때문으로 본다(상태 분류에 `clinic` 이 실재한다). **직접 확인 필요** |
| **활동 포스터 가정 수(추정)** | **15~30가정.** 동시 위탁 20~40마리 ÷ 가정당 1~2마리 | **추론. 폼 자기보고 `1–10` 의 2~3배다.** 게재 9마리만 보면 "1–10" 이 맞지만, **처리량을 기준으로 보면 맞지 않는다.** 이 간극이 이번 콜의 첫 질문이다 |
| 위탁 기간 | **평균 4~8주**(개체별 편차 있음) | 조직 사이트(포스터 신청 페이지, 원문 "Most foster placements last approximately 4–8 weeks") |
| **개체 상태 분류(전부)** | **available / happy-tails / over-the-bridge / submitted / forever-foster / clinic — 6개** | **실측**(사이트맵 `taxonomies-status`). **의료·입양 준비 단계를 담는 칸이 `clinic` 하나뿐이다.** 중성화 예정·백신 회차·심장사상충 치료 중 같은 구분이 없다 |
| **포스터 상태 분류(전부)** | **current / fostering / closed — 3개** | **실측**(`taxonomies-foster_status`). **"신청 접수 → 심사 → 승인 → 배치" 의 중간 단계가 없다** |
| **입양 신청자 상태 분류(전부)** | **current / dna — 2개** | **실측**(`taxonomies-adopter_status`). `dna` 는 통상 Do Not Adopt 의 약어다(추론). **175문항 신청서의 결과가 두 칸으로 접힌다** |
| 입양 절차 | ①웹 신청(특정 개체 또는 일반) → ②서류 검토·추가 문의 → ③승인 후 매칭 → ④**행사 참석 또는 포스터와 개별 미팅** → ⑤입양. **승인 이력은 유지된다** — 원문 "Approved applications remain on file, so you do not need to reapply each time" | 조직 사이트(입양 정보) |
| **행사 진행 방식** | **①Meet & Greet → ②Selection(팀이 검토·매칭해 선정자에게 연락) → ③Adoption(선정자가 돌아와 서류 작성·당일 인계).** 원문 주의문 "Arrive on time, as dogs may be adopted before the event ends" / "Approved adopters should refer to their approval email for the schedule" | 조직 사이트(Events). **행사 당일에 실시간 경합 심사가 돈다** |
| 행사 빈도 | **월 1회 전후.** 2023년 2회 / 2024년 6회 / 2025년 12회 / **2026년 9회**(2월~10월). 다음 행사 **2026-10-24**(시카고) | 실측(행사 페이지 ICS 링크 30건의 날짜 파라미터) |
| 파양 접수 | ①gmail 로 연락 → ②**"our team will review to determine if we have a foster available and if your dog is a fit"** → ③결과 통보 → ④수용 시 인계 / 불가 시 대체 자원 안내 | 조직 사이트(Surrender). **인테이크 가부가 포스터 가용성으로 결정된다고 명문화돼 있다** |
| 라이브 릴리스율 | **미확인.** WI DATCP 는 시설을 라이선스하나, **개별 시설의 인테이크·처분 통계를 공개하는 데이터셋을 찾지 못했다** | 실측(DATCP 사이트 확인) |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW — 폼과 실측이 어긋난다** | **폼 자기보고는 `Shelterluv` 인데, 사이트 원본 HTML 어디에도 shelterluv 문자열이 없다.** petstablished·pawlytics·rescuegroups·chameleon·doobert 도 마찬가지로 0건. **airtable·google forms·jotform·mailchimp 도 없다.** 발견된 외부 서비스 언급은 Petfinder·Adopt-A-Pet 두 건뿐이고, 그것도 **입양 신청서의 "How Did You Hear About Us?" 드롭다운 선택지**로 들어 있을 뿐이다 | 실측(원본 HTML 문자열 검색) |
| **웹 스택(확정)** | **WordPress** + 테마 `buzz-rescues` + 플러그인 **`buzz-adopters`, `buzz-hive`, `gravityforms`, `gp-nested-forms`, `gfstylespro`, `give`, `give-tributes`, `eventON`, `bbpowerpack`, `add-to-any`** | 실측(`wp-content/plugins/*`·`wp-content/themes/*` 경로) |
| **핵심 — 벤더 커스텀 플러그인이 실질 시스템이다** | `buzz-adopters`·`buzz-hive` 는 범용 플러그인이 아니라 **Buzz to the Rescue 가 레스큐용으로 만든 것**이다. 사이트맵에 **`adopter_status`, `foster_status`, `volunteer_status`, `status`(개체), `energy_level`, `event_location`** 여섯 개 분류 체계가 공개돼 있다 — 곧 **입양자·포스터·자원봉사자·개체가 WordPress 안에 레코드로 존재한다** | 실측(사이트맵, 플러그인 경로) |
| **그런데 단계가 없다(결정적)** | `adopter_status` **2개**(current / dna), `foster_status` **3개**(current / fostering / closed), 개체 `status` **6개**(available / happy-tails / over-the-bridge / submitted / forever-foster / clinic). **"누가 어느 개를 어느 단계에서 보고 있는지" 를 담는 칸이 존재하지 않는다.** 시스템이 없는 게 아니라 **시스템의 해상도가 낮다** | 실측(사이트맵 분류 체계 전수) |
| **입양 신청서 = Gravity Forms 폼 ID 70** | 필드 구성 — `post_custom_field` **119개**, `choice` 36개, `section` 12개, `html` 8개, **중첩 폼(`gfield--type-form`) 4개**(성인·아동·기존 개·기타 반려동물), `post_title` 1개, 허니팟 1개. **총 175개 필드가 한 폼에 들어 있고, 제출하면 WordPress 게시물 한 건이 만들어진다**(`post_title` + `post_custom_field` 구성) | 실측(원본 HTML) |
| **신청서 항목 밀도** | 5단계(Applicant / Family / Home / Care / Preferences). 고용·재학 상태와 근속, 가구원 성인·아동 개별 등록, 기존 개·기타 반려동물 개별 등록, 주거 형태·임대 시 **집주인 이름과 전화번호**, 울타리 높이·최저점·재질, 수영장 유무와 펜스, 파양 이력, **동물학대법 위반 이력**, 지역 반려동물 법규 숙지 여부, 홀로 있는 장소와 최장 시간, **비가족 레퍼런스 2인(연락처·관계·알고 지낸 햇수)**, 수의사 정보 | 조직 사이트(입양 신청) |
| **포스터 신청서도 같은 구조** | 동일한 5단계에 서약 문항이 붙는다 — 만 21세 확인, 소유권이 레스큐에 있음, 예고 없이 회수 가능, 실내 사육, 번식 금지, **수의 처치·배치 결정은 레스큐 승인 없이 불가**, 기초 훈련 제공, 즉시 통지 의무 | 조직 사이트(포스터 신청) |
| **포스터에게 보고를 요구한다 — 그런데 받는 곳이 없다(핵심)** | 서약 문항 원문 두 줄 — **"Are you willing to provide written progress reports to the Rescue's representative?"**, **"Do you agree to provide the Rescue with an assessment of the dog's interaction with the potential adoptive family and give an impression of the likely success of such adoption?"** **보고 주기·양식·제출처는 공개 자료 어디에도 없다.** 소재 B 가 정확히 이 지점을 겨눈다 | 조직 사이트(포스터 신청) |
| **포스터 파이프라인 리셋 자백** | 포스터 신청 페이지 상단 안내 원문 — **"If you submit a foster application prior to 2026 and did not receive email approval, we kindly ask that you submit a new application if still interested in fostering."** | 조직 사이트(포스터 신청). **원문 문자열 대조 확인** |
| **사진·근황 경로** | 게재 썸네일 **203장 중 78장**이 휴대폰·메신저 유래 파일명이다 — `IMG_`, `Screenshot_`, **`Messenger_creation_`**, **`Photoroom_`**, `received_`, `FB_IMG_`, `image0000`. **포스터가 문자·메신저로 보낸 사진을 사람이 받아 WordPress 에 올린다**는 경로가 파일명에 남았다. `Photoroom` 은 배경 제거 앱으로, **올리기 전 수작업 보정까지 한다**는 뜻이다 | 실측(업로드 경로, 중복 제거 후 집계) |
| **입양 후 추적 의무(핵심)** | 개체 페이지 원문 — 강아지는 **중성화 전에 입양 보내고** 입양비에 **"future boosters provided by one of our rescue volunteers"**, **"future alteration surgery and rabies vaccination at one of our partner veterinary clinics"**, 또는 **"$100 reimbursement if you prefer to use your own primary veterinarian"** 이 포함된다. **부스터 회차·중성화·광견병 접종·환급 처리가 개체마다 따로 굴러가는데 이를 담는 상태값이 없다**(개체 status 6개 중 해당 없음) | 조직 사이트(개체 페이지), 실측(사이트맵) |
| **행사 관리** | **EventON** 플러그인. 행사마다 장소·시간·ICS·Google Calendar 링크가 자동 생성된다. 다만 **어느 개·어느 포스터·어느 자원봉사자가 그 행사에 나가는지를 담는 필드는 공개 자료에서 확인되지 않는다** | 실측, 조직 사이트(Events) |
| **자원봉사 관리** | `volunteer_status` 분류가 존재하나 **값 목록이 비어 있고 공개 신청 페이지도 없다.** Volgistics·SignUpGenius 등 외부 도구 흔적은 **0건** | 실측 |
| **기부·결제** | **GiveWP** + Give Tributes. 개체 페이지마다 **"Help us take care of ○○" 개체별 기부 버튼**이 붙는다 — **기부가 개체 단위로 걸린다** | 실측, 조직 사이트(개체 페이지) |
| **입양 플랫폼 연동** | Adopt-a-Pet·Petfinder 조직 페이지가 **존재**한다. 다만 **자사 사이트에 두 서비스의 임베드·API 흔적이 전혀 없다** — 곧 **연동이 아니라 별도 입력일 개연이 크다**(추론). 게다가 개체 페이지는 **"only respond to applications made on our website"** 라고 못박는다 — **외부 플랫폼은 노출 창구일 뿐 접수는 자사 폼으로 모은다** | Adopt-a-Pet, 실측, 조직 사이트(개체 페이지) / 추론 |
| **채용 공고** | **없다.** 유급 직원 0명이므로 당연하다 | 실측, CauseIQ |
| **정리** | **이 리드는 「도구가 없다」 가 아니라 「웹사이트 플러그인을 쉘터 시스템처럼 쓰고 있다」 다.** 접수(175문항)와 공개 게재는 잘 돌아가는데, **그 사이의 운영 상태 — 어느 포스터가 어느 개를, 어느 단계에서, 어떤 의료 일정으로 보고 있는지 — 를 담는 칸이 분류 체계 전수 확인 결과 존재하지 않는다.** 우리 가설(분산 케어 추적이 샌다)이 **벤더 시스템의 스키마 수준에서 확인되는** 드문 사례다 | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| **결정 라인 — 두 갈래이고 아직 안 갈렸다** | 990 에 등재된 유일한 임원은 **Pamela Stadler(Owner, 보수 $0)** 이고, 사이트 팀 페이지의 Founder 도 Pam Stadler 다. **신청자 Mara Sabath 는 Director of Operations** 다. **폼 자기보고 `Executive director or founder` 와 공개 직함이 어긋난다.** 실무 운영 결정은 Mara 가, 지출 승인은 Pam 이 쥐고 있을 개연이 크나 **미확인 — 콜 초반에 반드시 가른다** |
| 함께 볼 사람 | **Mallory Sherwood(Foster & Event Director)** — 포스터와 행사를 겸한다. 우리 제품이 실제로 닿는 업무를 이 사람이 쥐고 있다. **데모·파일럿 단계에서는 이 사람이 진짜 사용자**다(추론) |
| 이사회 | **공개 자료로 확인되는 이사회 구성이 없다.** 990 등재 임원 1인, 팀 5인. **실질 심의 이사회로 보기 어렵다**(추론) |
| 전결 범위 | **미확인.** 연매출 $199k · 유급 0명 규모에서는 **월 수십 달러도 실질 판단 대상**이다 |
| **병목 ①(벤더 종속)** | **사이트 전체가 Buzz to the Rescue 의 테마·커스텀 플러그인 위에 올라가 있다.** 입양자·포스터·개체 레코드가 전부 그 플러그인 안에 있다. **우리 도구를 넣는다는 것은 "Buzz 에 기능 추가를 요청할 것인가, 밖에 따로 둘 것인가" 의 문제로 곧장 번역된다.** 콜에서 Buzz 를 깎아내리면 안 된다 — 이 조직은 그 벤더를 골라 돈을 내고 있다 |
| **병목 ②(시간)** | **유급 직원이 0명이고 팀이 5명이다.** 도입 부담이 돈이 아니라 **세팅할 사람의 시간**이다. 제안은 **"기능이 늘어난다" 가 아니라 "지금 손으로 하는 단계가 없어진다"** 로 말해야 한다 |
| **병목 ③(Shelterluv 불확실성)** | **폼과 실측이 어긋나 있어 현 상태를 우리가 모른다.** ①정말 Shelterluv 를 쓰는데 웹에 연동을 안 한 것인지 ②검토만 하고 이름을 적은 것인지 ③Buzz 시스템을 Shelterluv 로 통칭한 것인지에 따라 **제안의 위치가 완전히 달라진다.** 이걸 모른 채 데모를 틀면 콜을 버린다 |
| 전환 비용 | **중간.** 개체·신청자 레코드가 이미 WordPress 안에 있어 옮길 데이터가 존재하나, 규모가 작고(개체 875·신청자 미상) 계약으로 묶인 쉘터 SW 벤더는 없다 |
| **예산 사이클(유리)** | **10월 결산.** 콜(**11/3**)은 **FY2027 첫 주**다. 직전 회계연도가 막 닫혔고 새 예산을 그리는 자리다. **"내년에 뭘 바꿔 보려고 하시냐" 가 자연스럽게 먹히는 유일한 시기** |
| 외부 자금 | **Gurtz Family Foundation(Arlington Heights, IL) $20,000** — 연매출의 약 10%. **지역 가족재단 한 곳에 의존도가 있다.** 그랜트 보고에 쓸 실적 수치 수요가 있을 수 있다(추론) |

## 6. Mara Sabath 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| 성명 | **Mara Sabath.** 검색 결과에 **Mara Solomon Sabath** 표기도 보인다(SNS 계정명, 원문 미판독) | 조직 사이트(Our Team), 검색 결과(2차) |
| **직책 — 폼과 어긋난다** | **조직 공식 팀 페이지 직함은 `Director of Operations`.** 폼 자기보고는 `Executive director or founder` 다. **Founder 는 Pam Stadler**, 990 등재 임원도 Pamela Stadler 1인이다. **"창업자" 로 부르지 말 것** | 조직 사이트(Our Team), CauseIQ(990 추출) |
| **본업(중요)** | **이벤트 플래너.** 검색 요약에 따르면 Buffalo Grove 의 **Memorable Events**(1996년 설립) 대표이며, 결혼식·바르미츠바 기획과 청첩장 디자인 실적이 언급된다. **LinkedIn 프로필 원문은 판독하지 못했다 — 2차 요약 기반이며 직접 확인 필요** | 검색 결과(2차, LinkedIn·Manta 요약) |
| 소재 | **Buffalo Grove, Illinois**(시카고 북부 교외). 조직 등록지 Twin Lakes, WI 에서 차로 1시간 거리 | 부동산 기록, 조직 사이트(개체 위탁지) |
| **본인도 포스터로 보인다** | 현재 게재 중인 개 2마리가 **"Fostered in Buffalo Grove, IL"** 이고, 2026-05-17 **"Volunteer's Home" 팝업 입양 행사 장소가 본인 자택과 일치**한다(부동산 기록 대조, 번지 미기재). **본인이 개를 맡고 자기 집을 행사장으로 내놓는 실무자**로 보인다(추론, 직접 확인 필요) | 조직 사이트(개체 목록·행사), 부동산 기록 / 추론 |
| 보수 | **$0 로 추정.** 990 에는 Pamela Stadler 만 등재되고 보수 $0, 조직 전체가 "all volunteer run" 이다 | CauseIQ, 조직 사이트 |
| 경력 — 레스큐 | **재직 기간 미확인.** 조직 활동이 2022년경부터이므로 최대 4년 | — |
| **행동에서 읽히는 것** | ①**소재 B(임시보호자 업데이트 수집)에 반응했고, 폼의 포스터 수 문항에 `1–10` 을 골랐다** — 지금 눈앞에 걸린 게재 두수(9마리) 기준으로 답했을 개연이 크다(추론). ②**`system` 에 `Shelterluv` 를 적었다** — 도구 이름을 아는 사람이다. 아무것도 안 쓴다고 하지 않았다. ③**직책을 실제보다 높여 적었다**(Director of Operations → ED or founder) — **결정권이 있다고 스스로 생각하거나, 폼 선택지에 맞는 항목이 없었거나** 둘 중 하나다(추론). 어느 쪽이든 **"결정은 누가 하시냐" 를 정면으로 묻지 말고 "Pam 이랑 어떻게 나눠서 보시냐" 로 우회한다.** ④**행사 기획이 본업이고, 이 조직의 입양은 행사로 돌아간다** — 운영 업무를 자기 직업 언어로 이해하는 사람이다 | 추론 |
| **먹힐 언어** | ①**행사 운영으로 연다** — "10월 24일 MegMade 행사 끝나셨죠, 그날 어느 개를 데리고 나갈지랑 누가 데려올지는 어떻게 정하세요?" **본업 언어이고, 우리 제품이 닿는 자리이며, 방어가 안 걸린다.** ②**본인들이 쓴 문장을 그대로 읊는다** — "포스터 신청 페이지에 '2026년 전에 낸 신청은 다시 내 달라' 고 적어 두셨던데, 그때 몇 건이나 쌓여 있었어요?" ③**포스터 서약 문항을 인용한다** — "신청서에 'written progress reports' 에 동의하시겠냐고 물으시던데, 실제로는 그 보고가 어디로 들어와요?" ④**강아지 중성화 환급을 짚는다** — "중성화 전에 내보내고 나중에 제휴 병원에서 하거나 $100 환급해 주신다고 돼 있던데, 그 남은 일정은 개별로 어디에 적어 두세요?" ⑤**비용은 시간으로 묻는다** — "행사 한 번 돌리는 데 준비가 며칠 걸려요?" | 추론 |
| 피할 언어 | ①**"창업자" 호칭**(Founder 는 Pam Stadler) ②**"결정권 있으세요?" 류 직접 질문** ③**Buzz to the Rescue 를 깎아내리기** — 조직이 고르고 돈을 내는 벤더다 ④**"Shelterluv 를 갈아타시죠"** — 실제로 쓰는지부터 모른다. 먼저 묻는다 ⑤**FY2025 매출 −8.4% 를 우리가 먼저 지적하기** ⑥**가격 제시**(연매출 $199k, 유급 0명) ⑦**"체계가 없다" 류 진단** — 175문항 신청서와 여섯 개 분류 체계를 갖춘 조직이다. **절차는 있고 중간 단계를 담을 칸이 없는 것**이다 ⑧**번지 주소·자택 언급** — 행사장이 본인 집이라는 걸 우리가 안다는 티를 내지 않는다 |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| 2018 | **법인 설립 연도로 기록된 해.** 다만 활동 흔적은 2022년부터다 — **공백 구간 미확인** | CauseIQ |
| 2022-04-01 | **IRS 501(c)(3) 면세 인정** | ProPublica API |
| 2022-10 | **사이트 최초 업로드 파일**(현재도 헤더 로고로 쓰이는 이미지). 대외 활동 개시 시점으로 보인다 | 실측(업로드 경로) |
| FY2022 (~2022-10) | 수입 **$103,392**, 지출 $93,533, 순자산 **+$9,859** | ProPublica API |
| FY2023 (~2023-10) | 수입 **$128,813**, 지출 **$188,608** → **$59,795 적자**, 순자산 **−$59,795**, 부채 **$97,431** | ProPublica API |
| 2023-09 | **Foster Handbook PDF 제작·게시** — 포스터 교육 자료를 문서로 갖췄다 | 조직 사이트(Foster Resources) |
| **FY2024 (~2024-10)** | **수입 $217,133 (+68.6%).** 신고 서식이 **990-EZ 에서 정식 990 으로 올라갔다** | CauseIQ |
| 2024~2025 | **행사 빈도가 급격히 올라간다** — 2023년 2회 → 2024년 6회 → **2025년 12회**(월 1회 리듬 정착) | 실측(행사 페이지) |
| **FY2025 (~2025-10)** | **수입 $198,966 (−8.4%).** 자산 $61,462 | CauseIQ, ProPublica BMF |
| 2025-12 | **Gurtz Family Foundation 그랜트 $20,000** 집행(재단 과세기간 기준). 연매출의 약 10% | CauseIQ(그랜트메이커 990) |
| **2026년 중** | **포스터 신청 파이프라인 리셋.** 페이지에 "2026년 이전 신청분 중 이메일 승인을 못 받았으면 재제출해 달라" 는 안내를 붙였다. **정확한 시점 미확인** | 조직 사이트(포스터 신청) |
| 2026-07~08 | **팀 페이지 사진을 새로 올렸다**(업로드 2026/07·2026/08). **팀 구성을 최근에 정리했다**는 정황 | 실측(업로드 경로) |
| 2026년 내내 | **입양 행사 9회**(2/21 Glencoe → 3/29 Roscoe Village → 4/19 Lincoln Park → 5/17 자원봉사자 자택 → 7/11 → 8/1 Denim Lounge → 8/29 Highland Park → **10/24 MegMade**). **전부 시카고·노스쇼어** | 실측(행사 ICS 파라미터) |
| **2026-10-24** | **다음 입양 행사(MegMade, 시카고) — 콜 열흘 전** | 조직 사이트(Events) |
| **2026-10-31** | **FY2026 회계연도 종료 — 콜(11/3)은 FY2027 첫 주** | ProPublica API(10월 결산) |
| — | **행정처분·소송·부정 보도는 확인되지 않았다.** 평판 자료도 확인된 것이 없다(GreatNonprofits·Yelp 미확인, SNS 판독 실패). **「이슈 없음」이 아니라 「확인 범위가 좁음」이다** | 실측 |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

- **포스터 신청이 답을 못 받고 쌓였고, 조직이 그 줄을 되살리는 대신 리셋했다** — 포스터 신청 페이지 원문 "If you submit a foster application prior to 2026 and did not receive email approval, we kindly ask that you submit a new application". **승인 대기 목록을 되짚을 수 있었다면 리셋할 이유가 없다.** `foster_status` 값이 current / fostering / closed 세 개뿐인 것과 정확히 맞물린다. **확인 필요 — "그때 재제출 안내를 붙이신 건 신청서가 어디서 막혔던 거예요?"**
- **포스터에게 문서로 보고를 요구하는데 받는 곳이 정의돼 있지 않다** — 서약 문항에 "written progress reports" 와 "assessment of the dog's interaction with the potential adoptive family" 두 줄이 있다. **주기·양식·제출처가 공개 자료 어디에도 없다.** **소재 B 가 정확히 이 자리를 겨눈다.** 확인 필요 — "그 progress report 는 지금 어디로 들어와요? 문자예요, 메일이예요?"
- **사진·근황이 휴대폰·메신저에서 손으로 넘어온다** — 게재 썸네일 203장 중 78장이 `IMG_`·`Screenshot_`·`Messenger_creation_`·`Photoroom_`·`received_`·`FB_IMG_` 파일명이다. **포스터가 보낸 사진을 받아 배경을 지우고(Photoroom) WordPress 에 올린다**는 3~4단계가 개체마다 돈다. 연 200~280개체면 **주당 4~5마리**가 이 경로를 통과한다. 확인 필요 — "홈페이지 사진은 포스터가 보내 준 걸 직접 올리시는 거죠? 한 마리당 몇 분 걸려요?"
- **강아지를 중성화 전에 내보내고, 남은 의무가 개체마다 따로 굴러간다** — 부스터(자원봉사자가 접종), 중성화 수술, 광견병 접종(제휴 병원), 또는 $100 환급. **개체 상태값 6개 중 이걸 담는 칸이 없다.** 입양자가 자기 병원을 쓰면 **영수증을 받아 환급까지 처리**해야 한다. 확인 필요 — "부스터랑 중성화 남은 일정은 개별로 어디에 적어 두세요? $100 환급은 몇 건이나 돌아요?"
- **인테이크 가부가 포스터 가용성으로 결정되는데, 그 가용성을 어디서 보는지가 안 보인다** — 파양 절차 원문 "our team will review to determine **if we have a foster available**". **곧 "지금 빈 포스터가 누구냐" 를 아는 일이 인테이크 의사결정의 전제**다. 그런데 `foster_status` 로는 fostering / current 구분까지만 가능하다. 확인 필요 — "파양 문의가 오면 빈 포스터가 있는지는 어떻게 확인하세요?"
- **행사 하나마다 개·포스터·자원봉사자 배치가 새로 짜인다** — 절차가 Meet & Greet → Selection → Adoption 세 단계로 고정돼 있고, **팀이 행사 당일에 실시간으로 매칭 심사를 돌린다.** 승인 이력은 유지되고("Approved applications remain on file") 불발된 승인자는 다음 행사로 이월된다. **곧 "승인됐지만 아직 매칭 안 된 사람" 목록이 상시로 존재하는데, `adopter_status` 에는 current / dna 두 값뿐이다.** 확인 필요 — "승인은 났는데 아직 매칭 안 된 분들은 어디에 모아 두세요?"
- **위탁지가 주를 건너 흩어져 있다** — Twin Lakes WI, Kansasville WI, Rubicon WI, Buffalo Grove IL, Chicago IL. **Rubicon 과 Twin Lakes 는 100km 넘게 떨어져 있고, 행사는 전부 시카고에서 열린다.** 포스터가 개를 행사장까지 데려와야 한다(포스터 신청서 명시). **배차·출석이 어딘가에서 돌고 있다**(추론). 확인 필요.
- **접수는 자사 폼으로 모으는데 노출은 세 군데에 걸려 있다** — 개체 페이지가 "only respond to applications made on our website" 라고 못박는데, Adopt-a-Pet·Petfinder 조직 페이지는 살아 있다. **연동 흔적이 없어 별도 입력일 개연이 크다**(추론). 확인 필요 — "Petfinder 랑 Adopt-a-Pet 은 따로 올리세요, 자동으로 넘어가요?"
- **기부가 개체 단위로 걸린다** — 개체 페이지마다 "Help us take care of ○○" 버튼이 있다. **특정 개에게 들어온 기부와 그 개의 의료비를 맞춰 보는 일**이 어딘가에서 돌고 있을 수 있다(추론). 그랜트 보고 수요($20k 재단)와도 이어진다. 확인 필요.
- **하지 말 것** — ①Buzz to the Rescue 를 깎아내리기 ②"Shelterluv 를 갈아타시죠" (실제 사용 여부부터 미확인) ③가격 먼저 말하기 ④"창업자" 호칭 ⑤"체계가 없다" 류 진단 ⑥FY2025 매출 감소를 우리가 먼저 지적하기 ⑦번지 주소·자택 언급.

## 미확인 요약 (콜에서 확인할 것)

1. **[최우선] 폼에 적은 `Shelterluv` 의 실체** — 실제로 계정이 살아 있는가, 무엇을 거기서 하는가, 아니면 검토만 했거나 Buzz 시스템을 그렇게 부른 것인가. **이 답에 따라 우리가 대체재인지 보완재인지가 갈린다.** 사이트 실측에는 흔적이 0건이다.
2. **현재 활동 포스터 가정 수와 동시 위탁 두수** — 폼은 `1–10`, 처리량 역산은 15~30가정·20~40마리다. **어느 쪽이 맞는가, 그리고 "어느 개가 어느 집에 어느 단계로 있는지" 를 지금 어디서 여는가.**
3. **실제 연간 인테이크·입양 건수와 그 출처** — WordPress 레코드로는 연 200~280개체로 보이나, **990 에 프로그램 수입이 $0 로 신고돼 재무 교차검증이 불가능하다.** 조직이 그 숫자를 어디서 뽑는지까지 묻는다.
4. **2026년 포스터 신청 재제출 안내의 경위** — 얼마나 쌓였고 어디서 막혔는가. **재제출 안내 이후 실제로 돌아온 사람이 있는가.**
5. **포스터 progress report 의 실제 경로** — 문자인가 메신저인가 메일인가. 주기가 있는가. 받는 사람이 누구인가(Mallory Sherwood?). **안 들어오면 어떻게 되는가.**
6. **입양 후 의무 추적** — 부스터 회차·중성화 수술·광견병 접종·$100 환급을 개체별로 무엇으로 관리하는가. **기한을 넘긴 건이 실제로 있는가.**
7. **결정 라인 분담** — Mara Sabath(Director of Operations)와 Pam Stadler(Founder / 990 등재 Owner)가 무엇을 각각 정하는가. **도구 구입 결정은 어느 쪽인가.** 폼에는 `Executive director or founder` 로 적혀 있다.
8. **Buzz to the Rescue 와의 관계** — 유지보수 계약인가 일회성 제작인가. **기능 추가를 요청할 수 있는 관계인가.** 이 답이 우리 제품의 위치를 정한다.
9. **행사 운영 실무** — 어느 개·포스터·자원봉사자를 행사에 배치할지 어떻게 정하고 공지하는가. **승인됐지만 매칭 안 된 입양 희망자 목록을 어디에 두는가.**
10. **Petfinder·Adopt-a-Pet 게재 방식** — 연동인가 별도 입력인가. **몇 채널에 같은 개를 몇 번 올리는가.**
11. **팀 5인의 실제 분업과 주당 투입 시간** — 유급 0명은 확정. **도구를 매일 열 사람이 몇 명인가.**
12. **FY2027 예산 계획** — 10월 결산이 막 끝났다. **내년에 바꾸려는 것이 무엇인가.** Gurtz Family Foundation 그랜트 갱신 여부와 보고 요구사항도 함께 본다.
