# Paws and Whiskers Shelter 사전조사

- 작성일: 2026-08-29 / 목적: Tawny Arnold 콜 준비(2026-09-03) / 공개 자료만 사용, 외부 접촉 없음
- 리드 폼 정보: `{"org_type": "Shelter", "role": "Executive director or founder", "system": "Shelterluv", "fosters": "More than 30"}`
- 유입 소재: B (임시보호자 업데이트 수집 — 폼에서 현재 임시보호자 수를 물었다)
- **동일 조직 확정 / 신청자 확정** — 근거는 아래 「조직 특정」 절
- 출처 주석: Toledo Blade·Adopt-a-Pet·Petfinder·toledo.com 은 서버가 자동 열람을 차단해 텍스트 프록시(r.jina.ai)로 원문을 확보했다. 해당 행은 출처에 `(프록시)`로 표기. 조직 사이트는 HTML 원문을 내려받아 전수 검색했고, 그 경우 `사이트 HTML`로 표기. ShelterLuv 엔드포인트는 존재하지 않는 코드(ZZZZ)를 대조군으로 놓고 직접 호출했다
- 소재지 표기: 이 문서는 공개 사이트에 게시되므로 시·주까지만 적는다

## 조직 특정

| 확인 축 | 내용 | 출처 |
|---|---|---|
| 법인 | **Paws And Whiskers Cat Shelter Inc, EIN 34-1852907, Toledo, OH**(Lucas County). 501(c)(3), NTEE **D122**, **12월 결산**, 990 정식 신고(990-EZ·990-N 아님) | ProPublica API |
| **이메일 도메인** | **결정적 근거다.** 폼 도메인 `pawsandwhiskers.org` 가 이 조직의 공식 사이트이고, 사이트 푸터 저작권 표기가 **"© 2020 Paws and Whiskers Shelter"** 로 **리드에 적힌 조직명과 정확히 일치**한다. gmail 계열이 아니라 자체 도메인이라 특정력이 높다 | 사이트 HTML |
| 동명 조직 | ProPublica 전체 검색 "Paws and Whiskers" 는 **14건**이 걸린다 — Atlanta GA, Keyser WV, Santa Monica CA, Mayflower AR, Cottage Grove OR, Enterprise FL, Fairfax VA, Gonzales TX, Oakton VA, Seabrook TX, Mountain View AR, National City CA, Tehachapi CA. 그중 **오하이오 소재도, "Cat Shelter" 를 법인명에 쓴 곳도 이 1건뿐**이다. 별개로 `pawsandwhiskers.us` 라는 **다른 도메인의 동명 단체**가 존재하나 우리 리드의 도메인과 다르다 | ProPublica API, 검색 |
| **신청자** | **확정.** ①조직 About 페이지가 **"Tawny Arnold, Executive Director of Operations"** 로 실명·직책을 명시 ②Toledo Blade 2025-12-09 가 **"Tawny Arnold, the shelter's executive director"** 로 인용 ③13abc 2025-11-05·2026-04-01 두 기사 모두 ED 로 인용 ④CauseIQ 가 이 EIN 의 임원으로 **"Tawny Arnold, Executive Director of Operations (as of 2024-12-17)"** 를 적고 있다. **4개 독립 출처가 이름·직책으로 맞물린다** | 사이트 HTML, Toledo Blade(프록시), 13abc, CauseIQ |
| 폼 응답 정합 | **4개 중 3개가 직접 확인된다** — **org_type(Shelter)**: 1996년 개관한 5,000sqft 실물 시설, 수용력 150마리 / **role(ED or founder)**: Executive Director of Operations / **system(Shelterluv)**: 조직 코드 **PWCS**, 임베드 위젯 **GID 8561** 로 사이트에서 직접 확인 / **fosters(More than 30)**: **대조 불가**(아래 3절) | 사이트 HTML, ShelterLuv 직접 조회, Toledo Blade(프록시) |
| 조직 성격 | 민간 비영리 **고양이 전용 no-kill 쉘터**. 개는 취급하지 않는다(ShelterLuv `matchme/foster/PWCS/**Dog**` 이 404, `/Cat` 은 200). 정부 지원금·United Way 지원 **없음** | 사이트 HTML, ShelterLuv 직접 조회 |

→ **자체 이메일 도메인·EIN·소재지·조직 성격·ED 실명 5개 축이 맞물려 조직·신청자 모두 확정.** 다른 조직 정보를 끌어온 부분 없음.

## 미팅에서 바로 쓸 핵심 5줄

1. **이 조직은 "포스터 기반 레스큐"가 아니다. 시설 쉘터인데 소재 B(임시보호자 업데이트)로 들어왔다 — 왜 들어왔는지가 이 콜의 전부다** — 5,000sqft 시설에 상시 **150마리**가 살고 2023년 한 해 **777마리를 받아 744마리를 입양**시켰다. 포스터는 이 조직 규모의 주변부다. 그런데도 **포스터 문항이 걸린 폼에 응답했고 "30명 초과"를 골랐다.** 시설 쉘터가 포스터 업데이트 소재에 반응했다는 사실 자체가 신호다 — "왜 이 폼에 답하셨나"를 콜 초반에 물어야 한다

2. **그 답이 될 만한 프로그램이 실제로 있다 — Senior to Senior** — 60세 이상 독거 시니어에게 시니어 고양이를 **장기 포스터**로 보내는데, **소유권은 P&W가 계속 갖고 사료·모래·용품·약·수의 진료를 조직이 전부 댄다.** 기간 제한이 명시돼 있지 않다. 즉 **조직이 법적·재정적 책임을 진 채로 개체가 남의 집에 무기한 있는 구조**다. 신청 경로는 **전화 + `director@` 이메일**뿐이고, ShelterLuv 공개 동선에 이 프로그램용 폼이 없다. **우리 가설이 겨냥한 자리가 이 조직에는 이름이 붙은 프로그램으로 존재한다**

3. **이사 중이다. 콜 날짜가 완공 예정 시점 바로 뒤다 — 먼저 물어야 할 단 하나의 근황** — 익명 후원자 한 명이 **17,000sqft 건물을 사 주고 리노베이션 비용까지 대고 있다**(2025-12-04 소유권 이전). Toledo Blade 2025-12-09 기사에서 Arnold 본인이 **"여름 완공 예정"**이라 했고, 13abc 2026-04-01 기사에서는 **"연말까지 이전"**이라 했다. **두 발언이 어긋나 있고 콜은 2026-09-03 이다.** 지금 이사 전인지 후인지 모르면 대화 전체의 전제가 틀어진다. 수용력은 **150 → 300** 으로 뛴다

4. **가격을 먼저 꺼내면 안 되는 국면이다. 지금 이 조직은 가구·장비 모금 중이다** — 건물과 공사는 후원자가 덮었지만 **케이지·캣타워·의료장비·침구는 따로 모금하고 있고 "네이밍 권리"까지 팔고 있다.** 게다가 **FY2021~FY2023 3년 연속 적자**였다(각각 -$70,657 / -$50,060 / -$140,115). 최근 연도에 흑자로 돌아섰지만 **신규 월 고정비를 정면으로 제안할 타이밍이 아니다.** 대신 "새 시설에서 무엇이 달라지느냐"는 상대가 지금 매일 하고 있는 생각이다

5. **인테이크가 막혀 있다는 것을 본인이 언론에 반복해서 말한다 — 대기 7주, 매일 수십 건 거절** — Arnold 원문: *"When we're at full capacity — 150 cats — we can't take any more. **Every single day we're getting dozens of emails and applications for intake that we unfortunately have to deny.**"* 서렌더는 **폼 제출 필수**이고 **"공간이 있을 때만 연락"**한다. 즉 **거절·대기 상태로 쌓인 신청 더미를 매일 손으로 만지고 있다.** 여기서 포스터는 수용력을 늘리는 유일한 밸브다 — 소재 B가 걸린 이유일 개연이 높다(**추론**, 직접 확인 필요)

## 1. 조직 구조

| 항목 | 내용 | 출처 |
|---|---|---|
| 법인명 | **Paws And Whiskers Cat Shelter Inc** (통칭 Paws & Whiskers, PAWS, ShelterLuv 코드 **PWCS**) | ProPublica, 사이트 HTML |
| EIN·지위 | **34-1852907** / 501(c)(3), NTEE **D122**, 12월 결산. **NTEE 코드의 정확한 분류명은 확인하지 못했다** | ProPublica API |
| 소재지 (현재) | **Toledo, OH**(Lucas County). 시 남부, South Reynolds Rd·Hill Ave 인근 | ProPublica, WTOL |
| 소재지 (이전 예정) | **Holland, OH**(Springfield Township, Lucas County) — Airport Hwy·Holloway Rd 인근, Spring Meadows 서쪽. 통칭 "Alliance Building" | Toledo Blade(프록시), WTOL |
| 설립 | **1996년 10월** 오하이오 비영리법인으로 설립. 사이트 카운터가 **"29 Years open"** 으로 표시된다 | 사이트 HTML |
| 성격 | **Toledo 유일의 고양이 전용 no-kill 시설 쉘터.** 자기 표기는 *"Toledo's only ALL FELINE NO KILL FACILITY"* | 사이트 HTML |
| 취급 종 | **고양이 전용.** ShelterLuv 동선도 `/Cat` 만 200 이고 `/Dog` 은 404 다 | ShelterLuv 직접 조회 |
| 현재 시설 | **5,000sqft.** **free roaming room 7개** + 고양이 친화적이지 않은 개체용 개별 격리 공간 + **공용 그릇으로 못 먹는 특수식이 개체용 별도 공간** + 인테이크·의료용 케이지 | Toledo Blade(프록시) |
| 신규 시설 | **17,000sqft**(현재의 3.4배). 계획: 개방형 free roaming room, **격리 유닛(isolation unit)**, **의료 격리 유닛(medical quarantine unit)**, 2층에 사무실·행사장·창고. 신규 지붕·HVAC·주차장 재포장 필요 | Toledo Blade(프록시) |
| 개관 시간 | 화~토 12:00–16:00 (여름 목요일만 17:00까지). **일·월 휴관** | 사이트 HTML |
| 유급 직원 | **17명**(CauseIQ, 2025 기준). 단 **LinkedIn 회사 페이지는 "2–10 employees"** 로 표기하고 등록 직원은 7명이다 — **두 값이 어긋난다** | CauseIQ, LinkedIn |
| 리더십 (4명) | **Tawny Arnold — Executive Director of Operations** / **Brooklyn Friscia — Shelter Manager** / **John Stanish — Volunteer/Community Service Coordinator** / **Jessica Miller — Office Administrator** | 사이트 HTML |
| **Friscia 직책 변화** | Toledo Blade 2025-12-09 기사는 **"Brooklyn Friscia, assistant shelter manager"** 로 부른다. 현재 About 페이지는 **"Shelter Manager"** 다 — **9개월 사이 승진한 것으로 읽힌다** (**추론**, 직접 확인 필요) | Toledo Blade(프록시), 사이트 HTML |
| 일반 케어 스태프 | **April B-H.(ASM) / Camryn C. / Lindsey C. / Katie L.** — 4명이 성 이니셜만 공개 | 사이트 HTML |
| **Foster Coordinator** | **Camryn C.** — **일반 케어 스태프 명단에 이미 들어 있는 같은 사람**이다. 즉 **포스터 총괄이 전임 직책이 아니라 케어 스태프가 겸임**하고 있다. 연락처는 `F***@pawsandwhiskers.org` | 사이트 HTML |
| 기타 | Chrissy Z.(Graphic Design) / **Dr. Blaisdell DVM, MS — Oversight Veterinarian**(감독 수의사, 상근 여부 미확인) | 사이트 HTML |
| 이사회 (7명 확인) | **Jan Aguilar(President) / Andrew Wettle(Treasurer, CPA) / Kayla Henderson(Secretary) / Hannah Dearth / Kimberlee Larberg / Nick Bartlett / Jennifer Juhasz** | 사이트 HTML |
| **이사회 교체 흔적** | 2022-08-09 Shumaker, Loop & Kendrick 로펌이 **소속 변호사 Carol Sobczak 의 P&W 이사 선임**을 공지했다(유산·신탁·상속 전문, Estate Planning 인증 전문변호사). **현재 이사 명단에 이 이름이 없다** — 4년 사이 교체됐다 | Shumaker, 사이트 HTML |
| 자원봉사자 수 | **미확인** — 990 공개 데이터·CauseIQ·GuideStar 어디에도 수치가 없다 | — |
| **포스터 가정 수** | **공개 자료 어디에도 수치가 없다. 폼 자기보고 "More than 30" 이 유일한 값이다** | — |
| 웹 자산 | 자체 사이트(pawsandwhiskers.org) + Facebook + Instagram(@pawsandwhiskerscatshelter) + **TikTok(@pawsandwhiskersshelter)** + LinkedIn 회사 페이지 | 사이트 HTML |
| **사이트 운영 주체** | 푸터에 **"Powered by Lighthouse IT Solutions"** — **외부 IT 업체가 사이트를 관리**한다. 저작권 표기는 **© 2020** 에 멈춰 있다 | 사이트 HTML |
| 역할 기반 메일함 | `director@` / `Sheltermanager@` / `Foster@` / `Officeadmin@` / `JStanish@` / `events@` / `info@` — **업무별로 메일함이 갈려 있다** | 사이트 HTML |
| 서비스 권역 | Toledo 및 북서 오하이오 광역. 신규 시설은 Toledo 시 경계 밖(Springfield Township) | Toledo Blade(프록시) |

## 2. 예산·재원

| 항목 | 내용 | 출처 |
|---|---|---|
| 결산월 | **12월 결산.** 콜 시점(2026-09-03)은 **FY2026 9개월 차**이고 **다음 회계연도 예산 편성기 직전**이다 | ProPublica API |
| 신고 양식 | **990 정식 신고.** 990-EZ·990-N 이 아니다 — 재무가 항목 단위로 공개된다. ProPublica 에 **2001년부터 24개 연도**의 신고가 쌓여 있다 | ProPublica API |
| **FY2023** | 수입 **$457,409** / 지출 **$597,524** → **적자 $140,115.** 총자산 $1,028,024 | ProPublica API |
| **FY2022** | 수입 **$497,965** / 지출 **$548,025** → **적자 $50,060.** 총자산 $1,095,896 | ProPublica API |
| **FY2021** | 수입 **$439,023** / 지출 **$509,680** → **적자 $70,657.** 총자산 $1,297,323 | ProPublica API |
| FY2020 | 수입 **$583,670** / 지출 $362,252 → 흑자 $221,418 (코로나기 기부 급증) | ProPublica API |
| **3년 연속 적자** | **FY2021→FY2023 3년 내리 지출이 수입을 넘었고, 총자산이 $1,297,323 → $1,028,024 로 21% 줄었다.** 적립금을 헐어 운영한 구간이다 | ProPublica API |
| **최근 연도 (주의)** | CauseIQ 는 더 최근 2개 연도를 **수입 $558,458** 과 **수입 $625,458 / 지출 $569,894 / 총자산 $1,611,364**(흑자 $55,564)로 적는다. **다만 CauseIQ 의 연도 라벨과 ProPublica 의 tax_prd 가 맞물리지 않아 어느 회계연도인지 확정하지 못했다.** ProPublica 에 **FY2024(202412) 신고가 2026-01-13 접수로 등재돼 있으나 아직 파싱되지 않았고**, PDF 직접 내려받기는 403 으로 막힌다. **수치의 방향(적자 탈출·자산 회복)은 신뢰할 만하나 연도 대응은 콜에서 언급하지 말 것** | CauseIQ, ProPublica API |
| 재원 구성 (FY2023) | **기부·보조금 $405,276(88.6%)** / **프로그램 수입 $51,663(11.3%)** / 투자수익 $2. **모금 행사 총수입은 $0 으로 신고**돼 있다 | ProPublica API |
| **정부 재원** | **없다.** 사이트가 명시한다 — *"receives no government funding and no United Way financial support"*. Toledo Blade 도 *"relies on public donations and does not take government funding"* 로 확인 | 사이트 HTML, Toledo Blade(프록시) |
| 인건비 (FY2023) | 급여 **$235,677** + 급여세 $20,677 = **$256,354**(총지출의 42.9%) | ProPublica API |
| **임원 보수** | **990 요약 라인의 임원 보수(compnsatncurrofcr)가 FY2018~FY2023 전부 $0** 이다. FY2015~FY2017 에는 $12,597~$24,366 이 잡혀 있었다. **ED 급여가 일반 급여 항목으로 옮겨 잡혔거나 보고 방식이 바뀐 것으로 보인다** (**추론**, 이 수치를 콜에서 쓰지 말 것) | ProPublica API |
| 인건비 대비 인원 | 직원 17명(2025) 대비 FY2023 급여 $235,677 → **인당 연 $13.9K.** **대다수가 파트타임일 개연이 높다** (**추론**, 연도가 어긋나므로 직접 확인 필요) | 추론 |
| **자본 캠페인** | **건물 매입비와 주요 리노베이션은 익명 후원자 1인이 전액 부담.** 매입가는 후원자 요청으로 비공개. **조직이 따로 모금하는 것은 가구·설비다** — 케이지, 클라이밍 구조물, 침구, 의료장비 | Toledo Blade(프록시), 사이트 New Home 페이지 |
| **네이밍 권리 판매** | 고양이 방, 의료·회복 공간, 엔리치먼트 룸, **인테이크 구역**, 특수 설비에 기부자 이름을 붙이는 권리를 팔고 있다. **모금 목표액·현재 달성액은 공개되지 않는다** | 사이트 New Home 페이지 |
| 기부 수취 경로 | **Stripe**(사이트 결제), **Venmo**, **PayPal**, **Amazon 위시리스트**, **Chewy 위시리스트(53개 품목)**, iGive | 사이트 HTML, Chewy |
| 프로그램 수입 | **입양비**: 6개월 미만 새끼 **$125** / 6개월~1년 **$90** / 성묘 **$80** / 시니어 **$60**. 특수·희귀 품종은 개체별 별도 책정. **서렌더비**: 중성화 완료 **$30** / 미완료 **$50**, 새끼 litter 는 건별 책정 | 사이트 HTML |
| 입양비 표기 불일치 | Chewy 기부 페이지는 입양비를 **"$50–$110"** 으로 적는다 — **사이트 실제 표(\$60–\$125)와 다르다.** 외부 채널 정보가 갱신되지 않은 것으로 보인다 | Chewy, 사이트 HTML |
| **외부 평가** | **Charity Navigator 3성, 종합 87%.** 세부: 웹사이트 공개 100% / 자산 유용 없음 100% / 세무 서식 웹 게시 100% / **재무제표 외부감사 0%(없음)** / **기록 보존 정책(records retention policy) 0%(없음)** | Charity Navigator |
| 시사점 | **월 구독 제안은 가능한 규모대이나 지금은 타이밍이 나쁘다.** 연 지출 $57만 규모라 990-N 영세 레스큐와 다르게 도구 예산을 논할 수 있지만, ①3년 적자 직후 ②이사 자본 캠페인 진행 중 ③12월 결산 예산 편성기 직전이다. **"내년 예산에 넣을 것" 프레임이 "지금 결제" 보다 현실적이다** | 추론 |

## 3. 운영 통계

| 지표 | 수치 | 비고 |
|---|---|---|
| **2023 인테이크** | **777마리** | Charity Navigator 가 990 프로그램 실적란에서 인용 — *"took on 777 cats and found forever homes for 744"*. **조직이 IRS 에 신고한 자기 수치** |
| **2023 입양** | **744마리** | 같은 출처. 인테이크 대비 **95.8%** — 다만 이 비율은 **입양 outcome 만** 계산한 것이고, 반환·이관·자연사·안락사를 포함한 정식 **라이브릴리스율이 아니다** |
| 연간 구조 규모 (자기표기) | 사이트 카운터 **"1,000+ Annual Cats saved"** | 사이트 HTML 의 `data-count="1000"` 값. **990 신고 777 과 어긋난다** — 카운터는 반올림 홍보 수치로 보인다 (**추론**) |
| 누적 규모 | **1996년 이후 14,000마리 이상** 구조·재입양 (2022-08 기준) | Shumaker 로펌 이사 선임 공지 |
| **현재 수용력** | **150마리** | Toledo Blade 2025-12-09, Arnold 직접 발언 — *"When we're at full capacity — 150 cats — we can't take any more"* |
| 신규 수용력 | **300마리 즉시**, 향후 수백 마리 추가 여지 | 13abc 2026-04-01, Arnold 발언 |
| **2026 kitten season 실측** | **2026-04-01 기준 100마리 이상 재원, 주말 하루에 새끼 18마리 출생, 그 주 안에 155마리 도달 예상** | 13abc 2026-04-01. **수용력 150을 넘긴 상태를 스스로 예고한 것** |
| **인테이크 대기** | **7주 대기열** | 13abc 2025-11-05 |
| **일일 거절 규모** | **"매일 수십 건의 인테이크 이메일·신청을 거절한다"** | Toledo Blade(프록시), Arnold 직접 발언 |
| 마리당 케어 비용 | 사이트 카운터 **$400**(`data-count="400"`). About 페이지 서술은 **"$350 초과"**. 13abc 는 **건강한 고양이 $350~600, 아픈 고양이는 수천 달러**로 보도 | 사이트 HTML, 13abc. **세 값이 조금씩 다르다** |
| **공개 등재 개체** | **Adopt-a-Pet 53마리**(2026-08-29 조회, 보호소 번호 74375, 6쪽 페이지네이션, "1 - 9 of 53 pets available") | Adopt-a-Pet(프록시). **시설 수용력 150 대비 약 35%만 외부 플랫폼에 노출돼 있다** |
| Petfinder 등재 | **수량 미확인** — 조직 페이지(oh122)는 존재하나 개체 목록이 JS 렌더라 프록시로 판독되지 않았다 | Petfinder(프록시) |
| 인테이크 처치 | 체중 측정, 구충, 벼룩 처치, **FeLV·FIV 혈액검사**, 심장사상충 검사, 마이크로칩, 백신. 입양 전 전원 중성화 | 사이트 HTML |
| **거부 기준** | 야생묘(feral), 취급 곤란한 개체, 행동 문제 개체, 즉각적 응급 수술이 필요한 개체는 **받지 않는다.** 의료 이슈 개체는 **의료 예산 잔액에 따라 건별 판단** | 사이트 HTML |
| **반환 정책** | 30일 이내 반환은 서렌더비 면제 — 단 **"입양 폴더(adoption folder)를 함께 반납"** 해야 한다. 30일 초과는 $30 + **입양·수의 기록 지참 필수**. 양쪽 다 **예약 필수, 워크인 불가** | 사이트 HTML |
| 상시 프로그램 (4개) | **Senior to Senior**(장기 포스터) / **Forever Family**(사후 인수 약정) / **Operation Cat Connect**(재향군인 매칭) / **Reading with Cats**(아동 낭독 사회화) | 사이트 프로그램 페이지 |
| **Senior to Senior 규모** | **미확인** — 참여 가정 수·현재 배치 개체 수가 어디에도 없다 | — |
| 라이브릴리스율 | **미확인** — Best Friends 파트너 페이지에도 수치가 없고, Shelter Animals Count 등재도 확인되지 않았다 | Best Friends |
| 자원봉사 인원 | **미확인** | — |
| 소모품 소진 | **"우리는 모래를 퍼내지 않는다. 매일 통째로 비우고 소독하고 다시 채운다"**(Arnold). 최우선 필요 물품이 **점토 고양이모래**, 다음이 Hill's 건사료·습식·Purina FortiFlora | Toledo Blade(프록시) |

## 4. 도구 사용 근거

| 항목 | 확인 내용 | 출처 |
|---|---|---|
| **쉘터 관리 SW** | **ShelterLuv — 확정.** 조직 코드 **PWCS**, 임베드 **GID 8561**. 폼 자기보고에 그치지 않고 **사이트 소스와 엔드포인트 직접 호출로 이중 확인**했다 | 사이트 HTML, ShelterLuv 직접 조회 |
| **입양 개체 위젯** | Adopt 페이지에 **ShelterLuv 공식 임베드 스크립트**(`new.shelterluv.com/misc/shelterluv_embed.js`)가 붙어 `EmbedAvailablePets("shelterluv_wrap_1733849900", 8561, [], 1,...)` 를 호출한다. **자기 사이트에 개체 목록이 도구에서 자동으로 흘러들어온다** | 사이트 HTML |
| **임베드 설치 시점** | 위젯 DOM id 의 숫자 `1733849900` 은 **유닉스 타임스탬프 2024-12-10** 이다. **ShelterLuv 위젯을 약 1년 9개월 전에 붙였다** | 사이트 HTML (**추론**, 타임스탬프 해석) |
| ShelterLuv 접점 (3개) | **입양** `matchme/adopt/PWCS/Cat`(Adopt 페이지 버튼) / **소유자 서렌더** `matchme/owner-surrender/PWCS/Cat`(**Surrender 페이지에 iframe 으로 직접 임베드**, height 600px) / **포스터** `matchme/foster/PWCS/Cat`(**HTTP 200, 살아 있음**) | 사이트 HTML, ShelterLuv 직접 조회 |
| **포스터 신청 동선** | **ShelterLuv 포스터 신청서가 실제로 열려 있다.** 대조군 `matchme/foster/ZZZZ/Cat` 은 404, `matchme/foster/PWCS/**Dog**` 도 404 인데 `/PWCS/Cat` 만 200 이다. 프록시로 읽히는 범위는 **연락처 블록까지**(이름·배우자/동거인·주소·전화·이메일) — 그 뒤는 CAPTCHA 로 막힌다. **단 이 폼은 사이트 어느 페이지에서도 링크되지 않는다** | ShelterLuv 직접 조회 + 대조군 테스트, 사이트 HTML 전수 검색 |
| **Fosterluv 포스터 포털** | **활성.** `shelterluv.com/public_foster_profile/PWCS` 가 **HTTP 200**, 존재하지 않는 코드 **ZZZZ 는 404** 다. **포스터가 직접 로그인해 개체를 보는 포털이 조직 단위로 켜져 있다** | ShelterLuv 직접 조회 + 대조군 테스트 |
| **자원봉사는 ShelterLuv 밖이다** | `form/volunteer/PWCS` 가 **404**. 대신 Volunteer 페이지는 **"화~목 12–4시에 쉘터에 들러 신청서를 작성하라"** 고 안내한다 — **종이 신청서 + 대면 접수**다. 오리엔테이션도 *"매달 수시로 편성"* 이라고만 적혀 있다 | ShelterLuv 직접 조회, 사이트 HTML |
| **입양 동선 이중화 흔적** | Adopt 페이지에 **Google Form 입양 신청서 링크**(`docs.google.com/forms/d/e/1FAIpQLSfoaPI…`)가 남아 있다. **단 이 링크가 든 div 의 클래스가 `hide-lg hide-md hide-sm` 이라 데스크톱·태블릿·모바일 전 화면에서 숨겨져 있다** — 지우지 않고 감춰 둔 구 동선이다 | 사이트 HTML |
| **입양의 실제 1차 경로는 대면이다** | Adopt 페이지 본문이 **신분증·수의 기록·임대차 계약서를 들고 오라**고 안내하고 **"짧은 양식을 작성하시게 됩니다"** 로 끝난다. ShelterLuv 신청서는 그 위에 얹힌 보조 경로로 읽힌다 (**추론**, 직접 확인 필요) | 사이트 HTML, 추론 |
| **종이 산출물 존재** | 반환 정책이 **"adoption folder 를 함께 반납"** 을 요구한다. **입양 건마다 물리 폴더가 만들어져 입양자에게 건네진다** | 사이트 HTML |
| **프로그램은 전부 이메일·전화 접수** | **Senior to Senior** → 전화 예약 + `director@` / **Forever Family** → `director@` / **Reading with Cats** → `Sheltermanager@` / **Operation Cat Connect** → Lucas County Veterans Service Commission 과 제휴. **4개 프로그램 어디에도 폼이 없다** | 사이트 프로그램 페이지 |
| 뉴스레터·마케팅 | **HubSpot** 폼(portal `7496030`, form `ebc449bd-…`)이 전 페이지 푸터에 임베드돼 있다. **도너 CRM 으로 쓰이는지는 확인되지 않았다 — 확인된 것은 뉴스레터 구독 폼 하나뿐이다** | 사이트 HTML |
| 웹 분석 | **GA4**(`G-XHTFS85NVF`) + **Matomo/Piwik 자체 호스팅**(page-stats.de, siteId 12047) **이중 설치**. GA opt-out 스크립트까지 붙어 있다 | 사이트 HTML |
| 결제·기부 | **Stripe**(사이트), Venmo, PayPal, Amazon·Chewy 위시리스트, iGive | 사이트 HTML |
| 외부 등재 | **Adopt-a-Pet**(74375, 53마리) / **Petfinder**(oh122) / **Best Friends Animal Society 파트너** / Chewy 기부 페이지 / nokillnetwork / Idealist(2003년 가입) | 각 플랫폼 |
| 사이트 CMS | Wix·Squarespace 계열이 아니다 — `ed-element` 클래스 체계와 `inter-cdn.com` CDN 을 쓰는 **비주류 빌더**이며, **Lighthouse IT Solutions 라는 외주 업체가 관리**한다. 저작권 표기 **© 2020** | 사이트 HTML |
| **채용 공고** | **없다.** Careers 페이지에 **이력서 업로드 폼만 있고 직무 게시가 하나도 없다.** Indeed 회사 페이지는 존재하나 현재 공고가 확인되지 않는다. **자격 요건에서 도구명을 읽어 낼 창구가 없다** | 사이트 HTML, Indeed |
| 경쟁 도구 흔적 | **Chameleon·Petstablished·Pawlytics·PetPoint·Petango·RescueGroups·24PetConnect·Animal Shelter Manager 전부 흔적 없음.** 자원봉사 도구(Volgistics·Better Impact·SignUpGenius)도 없고, 모금 플랫폼(Givebutter·Donorbox·Classy·Zeffy)·도너 CRM(Bloomerang·Little Green Light)도 없다 | 사이트 HTML 전수 검색 |
| **종합 판정** | **ShelterLuv 가 입양·서렌더·포스터 접수와 대외 개체 노출까지 덮고 있고 포스터 포털도 켜져 있다. 도구 밖으로 새는 것은 ①자원봉사(종이) ②4개 상시 프로그램 전부(전화·이메일) ③인테이크 대기열·거절 처리(이메일) ④입양 폴더(종이) 네 갈래다. 그중 ②가 이 콜의 표적이다** | 추론 |

## 5. 조달 절차

| 항목 | 내용 |
|---|---|
| 결정 라인 | **Executive Director of Operations(Tawny Arnold) → 이사회(7명 확인).** 창업자가 아니라 **고용된 ED** 이므로, 창업자 겸 대표인 소규모 레스큐와 달리 **이사회 보고 의무가 실재할 개연이 높다** (**추론**, 직접 확인 필요) |
| 재무 감시 | **이사회 Treasurer 인 Andrew Wettle 이 CPA** 다. 회계 전문성이 이사회 안에 있다는 뜻이며, 도구 지출도 검토를 거칠 가능성이 있다 |
| 전결 한도 | **미확인.** 990 공개 데이터에도, 사이트에도 지출 승인 기준이 없다 |
| **재무 통제 수준 (외부 평가)** | Charity Navigator 기준 **외부 감사받은 재무제표 없음(0%)**, **기록 보존 정책 없음(0%)**. 연 지출 $57만 규모 조직으로는 통제 문서가 얇은 편이다 — **역으로 도입 결정이 문서 절차에 덜 묶여 있다는 뜻이기도 하다** (**추론**) |
| 예산 사이클 | **12월 결산.** 콜은 **FY2026 9개월 차**로 **FY2027 예산 편성 직전**이다. 지금 논의된 건이 내년 예산 항목이 될 수 있는 자리 |
| **현재 자금 우선순위** | **이사·자본 캠페인이 지금 모든 여유 자금을 먹고 있다.** 건물·공사는 후원자가 덮었지만 케이지·의료장비·가구는 조직이 모금 중이고, 네이밍 권리까지 팔고 있다 |
| 실무 병목 | 프로그램 문의가 **전부 `director@` 로 직접 들어온다**(Senior to Senior·Forever Family 양쪽 다). **ED 개인 메일함이 프로그램 접수창구**라는 뜻이다 |
| 2차 콜 후보 | **Brooklyn Friscia(Shelter Manager)** — 일상 운영 / **Camryn C.(Foster Coordinator 겸 케어 스태프)** — 포스터 실무 / **Andrew Wettle(Treasurer, CPA)** — 지출 승인 |
| IT 의사결정 | **사이트를 외부 업체(Lighthouse IT Solutions)가 관리**한다. 신규 도구 도입 시 이 업체가 관여하는지 여부가 변수다 (**추론**, 직접 확인 필요) |

## 6. Tawny Arnold 프로필

| 항목 | 내용 | 출처 |
|---|---|---|
| 직책 | **Executive Director of Operations.** 언론은 대체로 **"executive director"** 로 줄여 쓴다 | 사이트 HTML, Toledo Blade(프록시), 13abc |
| 재임 확인 시점 | **최소 2024-12-17 이전부터 현재까지.** CauseIQ 가 이 EIN 임원으로 해당 일자와 함께 기재. 2025-11, 2025-12, 2026-04 언론 인터뷰로 연속 확인된다 | CauseIQ, 13abc, Toledo Blade(프록시) |
| **부임 시점** | **미확인.** 언제 부임했는지, 전임 ED 가 누구였는지 확인하지 못했다 | — |
| **경력·학력** | **미확인.** LinkedIn 개인 프로필이 검색되지 않는다. 조직 LinkedIn 페이지 등록 직원 4명(Jen Pollard, Sareena Harb, Jessica Miller, Hailey Thompson) 중에도 없다 | LinkedIn |
| **창업자 여부** | **아니다.** 조직 설립은 1996년이고 본인은 고용된 ED 다. **폼에서 "Executive director or founder" 를 고른 것은 ED 쪽**이다 | 사이트 HTML |
| 대외 노출 | **적극적이다.** 9개월 사이 지역 언론 3건(13abc 2회, Toledo Blade 1회)에서 주 인용자로 등장하고, Blade 기사에는 고양이를 안고 있는 사진이 3장 실렸다 | 13abc, Toledo Blade(프록시) |
| **화법 ① — 거절의 감정을 말한다** | *"If you find a stray or your family situation changes and you can't keep it, we want to help you, but we can't say yes to everyone. **We internalize it. It bothers us.**"* — **못 받아 주는 것을 조직의 스트레스로 표현한다** | 13abc 2025-11-05 |
| **화법 ② — 수용력을 숫자로 못박는다** | *"When we're at full capacity — **150 cats** — we can't take any more. Every single day we're getting **dozens of emails and applications** for intake that we unfortunately have to deny."* — **숫자를 먼저 대고 그 다음에 상황을 붙인다** | Toledo Blade(프록시) |
| **화법 ③ — 확장을 지역 수요로 정당화한다** | *"We are ready for an expansion. Not only are we ready, but **the community's needs are a lot larger**."* | Toledo Blade(프록시) |
| **화법 ④ — 운영 디테일을 직접 안다** | 모래 처리 방식(*"We don't scoop our boxes. They get emptied, sterilized and refilled every single day"*), 사료 브랜드, 프로바이오틱 제품명(FortiFlora), 신규 건물의 지붕·HVAC·주차장까지 **본인이 직접 나열한다.** **현장 실무를 손으로 아는 관리자다** | Toledo Blade(프록시) |
| 성향 판정 | **기능 나열·비전 화법보다 "지금 몇 마리를 어떻게 처리하고 있는가"에 반응할 사람이다.** 숫자와 절차를 스스로 먼저 꺼내는 화자이므로, **우리가 숫자를 물으면 답이 나온다** (**추론**) | 추론 |
| 이름 표기 주의 | 언론이 **"Ms. Arnold"** 로 지칭한다. **본인이 밝힌 대명사는 확인되지 않았으므로 콜 전까지 단정하지 말 것** | Toledo Blade(프록시) |

## 7. 최근 1~2년 이슈

| 시기 | 이슈 | 출처 |
|---|---|---|
| 2024-12-10 | **ShelterLuv 개체 임베드 위젯을 사이트에 설치**(위젯 id 타임스탬프 기준, **추론**) | 사이트 HTML |
| 2024-12-17 | Tawny Arnold 가 임원 기록상 ED 로 확인되는 시점 | CauseIQ |
| **2025-11-04** | **무단 유기 사건.** 성묘 2마리가 캐리어에 담긴 채 아무 준비물 없이 새벽에 쉘터 앞에 버려졌고, **기온이 떨어지는 밤을 12시간 밖에서 보냈다.** 직원이 발견해 **마지막 남은 인테이크 케이지**에 넣었다. 검은 옷을 입은 인물이 CCTV 에 찍혔고 **경찰에 영상·사진 증거를 제출**했다 | 13abc 2025-11-05 |
| 2025-11-05 | 같은 보도에서 **인테이크 대기 7주**, 건강한 고양이 마리당 $350~600 공개 | 13abc |
| **2025-12-04** | **신규 건물 소유권 이전 완료.** 익명 후원자 1인이 17,000sqft 건물 매입 + 리노베이션 비용 부담. Arnold: *"Now we have the keys and it's officially our building."* | Toledo Blade(프록시) |
| 2025-12-06·09 | WTOL·Toledo Blade 보도. Blade 기사에서 **"향후 8개월간 리노베이션"**, **"여름 완공 예정"** 명시 | WTOL, Toledo Blade(프록시) |
| **2026-04-01** | **kitten season 보도.** 100마리 이상 재원, **주말 하루에 새끼 18마리 출생**, 그 주 안에 155마리 도달 예상. 같은 기사에서 **"연말까지 이전 예정"** 및 **저비용 웰니스 클리닉 개설 계획** 언급 | 13abc |
| **2026 여름** | **Summer Vendor Extravaganza** — Events 페이지의 **유일한 게시 행사**다. 2025년에는 Plant Bingo, Show Me the Money, Tatts for Cats, Yoga with Cats 등 다수 행사가 있었는데 **2026년 게시물은 이 하나뿐**이다 | 사이트 Events, sitemap |
| **2026-09-03 (콜 당일)** | **이사 예정 시기와 겹친다.** 2025-12 발언("여름 완공")과 2026-04 발언("연말 이전")이 어긋나 있어 **현재 상태를 공개 자료로 판정할 수 없다** | — |
| 부정적 사건 | **소송·행정처분·동물 압류·자금 논란은 검색되지 않았다.** 언론 논조는 3건 모두 우호적이다. 2025-11 유기 사건도 **조직이 피해자 쪽**이다 | 검색 |

## 8. 워크플로 힌트 (수기 업무 추정 단서)

정황에서 끌어낸 것만 적는다. 각 줄에 확인 필요 여부를 밝힌다.

- **Senior to Senior 가 이 조직의 「분산 케어」다.** 60세 이상 독거 시니어에게 시니어 고양이를 장기 배치하는데 **소유권은 P&W 가 유지**하고 **사료·모래·용품·약·수의 진료를 조직이 계속 공급**한다. 기간 상한이 명시돼 있지 않다. 즉 **개체가 남의 집에 무기한 있고 조직이 계속 비용과 책임을 진다.** 접수는 전화 + `director@` 뿐이고 ShelterLuv 공개 동선에 이 프로그램용 폼이 없다. → **몇 가정에 몇 마리가 나가 있는지, 약을 언제까지 먹이는지, 다음 수의 예약이 언제인지를 무엇으로 보는가가 열려 있다. 콜에서 반드시 확인.**
- **Forever Family 는 만기가 수십 년 뒤인 약정을 조직이 떠안는 프로그램이다.** 생전 기증자의 고양이를 사후에 인수하겠다는 약속이며, 발동 시점이 언제일지 알 수 없다. **약정자 명부와 대상 개체가 어디에 남아 있는지 확인 필요.** 참고로 **2022년에 유산·신탁 전문 변호사를 이사로 영입**했으나 **현재 이사 명단에는 없다**.
- **인테이크 대기열이 이메일 더미로 존재한다.** *"매일 수십 건의 이메일과 신청을 거절한다"* + **7주 대기**. 서렌더 폼은 ShelterLuv 로 받지만 **"공간이 나면 그때 연락"** 하는 구조라, **폼 제출과 실제 수용 사이에 몇 주짜리 대기 상태가 끼어 있다.** ShelterLuv 가 이 대기열을 관리하는지, 별도 스프레드시트·메일함인지 **확인 필요**.
- **서렌더 페이지가 "상태를 알려 줄 의무 없음"을 대문자로 명시한다.** 원문: *"Once a cat is surrendered, the shelter is under no obligation to update the surrendering Person of the cats status."* **이런 문장을 굳이 사이트에 박아 넣었다는 것은 사후 문의가 실제로 부담이 되고 있다는 방증**이다 (**추론**, 콜에서 먼저 지적하지 말 것).
- **자원봉사 접수가 종이다.** ShelterLuv 자원봉사 폼(`form/volunteer/PWCS`)이 404 이고, 대신 **"화~목 12–4시에 쉘터에 들러 신청서를 작성"** 하라고 안내한다. **직원 17명 규모 조직에서 자원봉사 인력 관리가 도구 밖에 있다** — 오리엔테이션 일정도 *"매달 수시 편성"* 이라고만 적혀 있다. **확인 필요.**
- **입양 건마다 물리 폴더가 만들어진다.** 반환 정책이 **"adoption folder 반납"** 을 요구하는 것으로 보아, 입양자에게 건네는 종이 묶음이 존재하고 **그것이 반환 처리의 전제 조건**이다. 도구 기록과 종이 폴더가 병행되고 있다는 뜻 (**추론**, 직접 확인 필요).
- **포스터 신청서가 있는데 사이트 어디에도 링크가 없다.** `matchme/foster/PWCS/Cat` 이 200 으로 살아 있는데, 사이트 HTML 전수 검색 결과 **이 URL 로 가는 링크가 한 곳도 없다.** Volunteer 페이지에도 포스터 안내가 전혀 없다. **포스터 모집이 공개 동선이 아니라 내부 인맥·SNS 로 이뤄지고 있을 개연** (**추론**, 확인 필요).
- **Fosterluv 포털이 켜져 있는 것과 포스터가 실제로 쓰는 것은 다르다.** `public_foster_profile/PWCS` 가 200 이라 조직 단위로 열려 있는 것은 확정이지만, 포스터가 거기 들어가 상태를 남기는지는 공개 자료로 알 수 없다. **"도구가 있으니 문제없다"로 넘어가면 콜이 비는 자리가 여기다.**
- **이사 자체가 대량의 임시 이동을 만든다.** 150마리를 5,000sqft 에서 17,000sqft 로 옮기는 과정에서 **공사 기간 동안 개체를 어디에 두는지**가 문제가 된다. 임시 포스터 위탁이 늘었다면 폼의 "30명 초과"가 그 결과일 수 있다 (**추론**, 이것이 사실인지가 이 콜의 핵심 분기).
- **프로그램 접수가 ED 개인 메일함에 몰려 있다.** Senior to Senior 와 Forever Family 둘 다 `director@` 다. 역할 메일함이 7개나 갈려 있는데도 **가장 손이 많이 가는 두 프로그램이 ED 에게 직접 간다.**
- **외부 채널 정보가 갱신되지 않는다.** Chewy 기부 페이지의 입양비(\$50–\$110)가 사이트 실제 표(\$60–\$125)와 다르고, 사이트 저작권 표기는 © 2020 에 멈춰 있으며, Adopt-a-Pet 등재는 53마리로 시설 수용력의 35% 수준이다. **한 곳을 고치면 다른 곳이 남는 구조** (**추론**).

## 미확인 요약 (콜에서 확인할 것)

1. **폼의 "포스터 30명 초과"가 무엇을 센 숫자인가** — 지금 고양이를 데리고 있는 가정인가, 승인된 신청서 누적인가. **Senior to Senior 장기 배치 가정이 여기 포함되는가, 별개로 세는가.** 시설 쉘터가 소재 B 에 반응한 이유가 여기서 갈린다
2. **그 가정들에서 오는 소식을 지금 무엇으로 받는가** — Fosterluv 포털인가, 문자·전화·Facebook 메신저인가. 특히 **Senior to Senior 의 투약 이행·체중 변화·수의 예약**이 어디에 기록되는가
3. **이사가 지금 어느 단계인가** — 2025-12 "여름 완공" 과 2026-04 "연말 이전" 중 어느 쪽이 유효한가. 공사 기간에 150마리를 어디에 두(었)는가
4. **Senior to Senior 참여 가정 수와 현재 배치 개체 수** — 공개 자료에 수치가 전혀 없다
5. **Forever Family 약정자 명부가 어디에 있는가** — 발동 시점이 수년~수십 년 뒤인 약속을 무엇으로 보관하는가
6. **인테이크 대기 7주 대기열을 무엇으로 관리하는가** — ShelterLuv 안인가, 별도 메일함·스프레드시트인가
7. **자원봉사 인원 수와 종이 신청서 처리 방식** — 왜 ShelterLuv 자원봉사 폼을 안 쓰는가
8. **연간 라이브릴리스율** — 2023 인테이크 777·입양 744 는 확인했으나 반환·이관·자연사를 포함한 정식 지표가 없다
9. **도구 예산 결정 라인과 전결 한도** — ED 재량 범위, 이사회 승인선, Treasurer(CPA)의 관여 정도
10. **Tawny Arnold 의 부임 시점과 이전 경력** — LinkedIn 프로필을 찾지 못했다
11. **최근 회계연도 수치의 연도 대응** — CauseIQ 와 ProPublica 의 연도 라벨이 어긋나 어느 FY 인지 확정하지 못했다. **콜에서 재무 수치를 인용하지 말 것**
12. **HubSpot 이 뉴스레터 전용인가, 도너 관리까지 하는가** — 확인된 것은 구독 폼 하나뿐이다
13. **사이트 관리 외주사(Lighthouse IT Solutions)가 신규 도구 도입에 관여하는가**
