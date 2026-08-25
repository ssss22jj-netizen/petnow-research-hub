# PetPoint 종합 조사 — 소유 구조 · 가격 · 화면 판독 · 임보 기능

- 조사일: 2026.08.25 / 조사자: 흰둥이
- 대상: **PetPoint**(Pethealth Software Solutions, 24Pet 브랜드)와 후속 제품 **24PetShelter**
- 목적: CAP(Jared Carroll)·다수 리드가 쓰는 정본 시스템 파악. 공존 전략(`Petify → PDF → PetPoint`)의 상대를 정확히 알기 위함
- 근거: ①벤더 제품 페이지 브라우저 렌더링 ②PetPoint 로그인 화면 실측 ③24PetShelter 공식 데모영상 프레임 판독 ④웹 아카이브의 PetPoint 공식 헬프(2017~2021 스냅샷) ⑤Maddie's Fund 실무자 포럼 ⑥보도자료·기업정보
- 화면 이미지는 `analysis/assets/petpoint-ui-web/`
- 관련 문서: `analysis/Chameleon_UIUX_분석_20260820.md`(같은 회사의 다른 레거시), `Petszel_경쟁조사_20260825.md`(PetPoint 위에 얹히는 레이어)

---

## 0. 결론

| 항목 | 판정 |
| --- | --- |
| 제품 상태 | **`petpoint.com` 이 `24pet.com` 으로 리다이렉트되고, 공식 헬프 `help.petpoint.com` 은 오프라인**(Salesforce "URL no longer exists"). 벤더가 현재 파는 것은 후속 제품 24PetShelter [검증됨·L0] |
| 기술 스택 | ASP.NET WebForms — 로그인이 `signinout.aspx`, `__VIEWSTATE` 존재. "클라우드 기반"이지만 웹 SaaS 세대는 아님 [검증됨·L0] |
| 로그인 방식 | 이메일이 아니라 **`Shelter ID` 를 먼저 입력**하는 2단계. 조직 단위 멀티테넌트 레거시 패턴 [검증됨·L0] |
| 소유 구조 | Independence Pet Group(IPH) 산하. **PetPoint와 Chameleon이 같은 회사 제품**이며 둘 다 24PetShelter로 수렴 중 [검증됨·L0] |
| 과금 | PetPoint 비공개 견적. 24PetShelter는 **구독료 0 + 입양 1건당 $5 + 마이크로칩 무료** — 소프트웨어가 아니라 거래에서 버는 구조 [검증됨·L0] |
| 진짜 수익 지렛대 | Advantage Program — 24Petwatch 마이크로칩 도입 시 소프트웨어 할인. **소프트웨어가 마이크로칩·보험 판매의 종속 변수** [검증됨·L0 / 해석 의견·L4] |
| 임보(PetPoint) | `Foster Operation` 레코드로 존재하나, 대량 업데이트(`Follow Up for Foster`)는 **Enterprise 등급 전용** [검증됨·L0] |
| 임보(24PetShelter) | **모듈이 없음. 동물에 붙는 태그 하나(`Foster`)** [검증됨·L0 — 데모영상 대시보드] |
| 임보의 화면상 자리 | `Stage` 드롭다운 값 하나(`Foster Program`) + `Location` 이지선다(`Shelter`/`Foster`). **누가 데리고 있는지는 화면에 없음** [검증됨·L0 — 2012년판 매뉴얼] |
| 실사용자 평가 | "단계가 너무 많다" · 스프레드시트 병행 · location/sublocation만 사용 · ShelterLuv 이탈 사례 [검증됨·L0 — 실명 포럼] |

**한 줄** — PetPoint는 유지보수 국면에 들어간 레거시이고, 후속 제품은 임보를 **태그 한 칸**으로 축소했다. 소재 B(임보 체크인)의 빈자리가 Chameleon 조사에 이어 **같은 회사의 신제품에서도 재확인**됐다.

## 1. 소유 구조와 제품 계보

| 계층 | 내용 |
| --- | --- |
| 최상위 | Independence Pet Holdings(IPH) — 북미 3위 반려동물 보험 그룹 |
| 중간 | PetPlace Holdings LLC → Pethealth Services (USA) LLC · Pethealth Services Inc. · **HLP, Inc.** |
| 포트폴리오 | 24Pet · AKC Pet Insurance · ASPCA Pet Health Insurance · **Chameleon** · Figo · Hartville · Petkey · **PetPoint** · PetPlace · Pets Plus Us · Third Party Pet |
| 후속 제품 | **24PetShelter** — 2026.04.07 출시. "PetPoint와 Chameleon 같은 업계 리더가 설계" 라고 벤더가 명시. 1,500만 달러 기술 투자의 산물 |

**판독** — 자사가 상대하는 것은 서로 다른 두 벤더가 아니라 **한 회사의 두 레거시와 하나의 신제품**이다. 산타바바라(Chameleon)와 CAP(PetPoint)는 결국 같은 벤더의 이전 경로 위에 있다 `[검증됨·L0]`

## 2. 조사 방법과 한계

- **현행 PetPoint 인앱 화면은 확보하지 못했다.** 계정이 필요하고, 가짜 쉘터로 가입하지 않았다
- 공식 온라인 헬프(`help.petpoint.com`)가 **오프라인**이라 벤더 배포 스크린샷 경로가 막혔다. 웹 아카이브에 2017~2021 스냅샷이 남아 있으나 **본문 이미지가 크롤되지 않아** 텍스트만 복원됨
- 대신 **제3자 쉘터가 공개한 자체 매뉴얼**(Independent Cat Society, 2012.10, 54쪽)에서 실제 화면 다수를 확보했다. **2012년판 UI이며 2018년 홈·로그인 리디자인 이후와 다르다** — 시점을 반드시 함께 읽을 것
- 따라서 PetPoint 화면 근거는 ①로그인 화면(2026 실측) ②ICS 매뉴얼(2012) ③아카이브 헬프의 텍스트(2017~2021) 세 갈래다
- 반면 후속 제품 24PetShelter는 공식 데모영상(91초)에서 실제 UI를 확보했다
- 리뷰 플랫폼 근거도 얇다 — Capterra·Software Advice 각 **리뷰 1건**. 정량 비교 불가
- 근거 등급: 화면 구조·필드명·과금 조건은 `[검증됨·L0]`. 제품 수명주기·전략 해석은 `[의견·L4]`

> **주의** — 벤더가 자기 제품의 공식 헬프를 내린 것을 곧바로 "단종"으로 읽으면 과잉이다. 리다이렉트·헬프 오프라인은 사실이고, sunset 일정은 **미고지**다.

## 3. 가격·과금 구조

| 항목 | PetPoint | 24PetShelter |
| --- | --- | --- |
| 공개 가격 | 없음. "요청 시 견적" | **공개** |
| 구독료 | 비공개 견적 | **없음**(핵심 제품 기준) |
| 셋업비 | 비공개 | 최소 |
| 거래 과금 | — | **입양 1건당 $5** (Digital Checkout 경유) |
| 부가 | Advantage Program — 24Petwatch 마이크로칩 도입 시 **소프트웨어 할인** | 적격 개·고양이 입양당 **마이크로칩 1개 무료** |
| 온보딩 | 맞춤 프로젝트 플랜 수립 후 런치 일정 확정 | "간소한 운영 조직" 우선 개방, 대규모 조직은 추후 |

**판독** — 두 제품 모두 **소프트웨어 자체를 수익원으로 보지 않는다.** 마이크로칩 등록·보험·입양 거래가 본 수익이고 소프트웨어는 그 통로다. 이는 기존 조사에서 Shelterluv(입양당 $2 + 결제 수수료)·Petstablished(마이크로칩·결제)에서 확인된 패턴과 같은 계열이며, **쉘터 소프트웨어 시장 전반의 과금 형태** 로 볼 근거가 하나 더 늘었다 `[의견·L4]`

## 4. 화면 판독

### 4.1 PetPoint 로그인 — 조직 ID가 먼저다

- 좌상단 카드에 `PetPoint / A 24Pet Company` 로고, 그 아래 **`Shelter ID`** 단일 입력 필드와 `Next`
- 이메일·사용자명이 아니라 **조직 식별자를 먼저 묻는 2단계 로그인**
- 하단 고지: "PetPoint, PetPoint & Design ... property of Pethealth Software Solutions (USA) Inc."
- 페이지는 `signinout.aspx`, DOM에 `__VIEWSTATE` 존재 — ASP.NET WebForms

**판독** — 조직 ID를 외워야 로그인이 시작된다. 임보자·자원봉사자처럼 가끔 들어오는 사용자에게 적합한 진입 방식이 아니다 `[의견·L4]`

### 4.2 PetPoint 제품 페이지 — 기능이 아니라 네트워크를 판다

- 헤드라인 `Efficient Shelter Management Starts Here`
- 키 기능 3개: 데이터 관리 · 리포팅 · **전담 사용자 지원**
- 그다음 블록은 전부 생태계 — `PetPlace: Built-in adoption support`(자동 게시), `24Petwatch: Reach pet parents`(입양 시점 연락 동의 수집), `Industry data`
- **제품 화면 스크린샷 없음**

**판독** — 페이지의 절반이 마이크로칩·입양 사이트·데이터 네트워크다. 그리고 **"입양 시점에 연락 동의를 수집한다"**고 벤더가 명시한다 — 쉘터의 입양자 접점이 벤더 자산으로 흘러가는 구조 `[검증됨·L0]`

### 4.3 24PetShelter 대시보드 — 상단 메뉴가 4개다

- 상단 내비: **`Animals` · `Outcomes` · `Person` · `Settings`** (그게 전부)
- 상단 지표: `Animals In Care` 170 · `Available Online` 90
- `Animals by Tag` — *Metrics are real-time* : `New` 15 · `Hold` 50 · `Behavior` 120 · `Medical` 97 · `Quarantine` 18 · **`Foster` 42** · `Euthanasia` 7

**판독** `[검증됨·L0]`

- 내비에 **Foster도 Volunteer도 없다.** 제품 페이지 기능 목록과도 일치
- 임보는 동물에 붙는 **태그 한 개**로 표현된다. 몇 마리가 임보 중인지는 세지만, **누구 집에 있고 이번 주에 어떤지는 이 모델에 자리가 없다**
- Chameleon 조사의 "임보는 켄넬 격자의 부속" 판정과 같은 계열. 같은 회사의 20년 뒤 신제품에서 같은 축소가 반복됨

### 4.4 동물 프로필과 디지털 체크아웃

- 모바일 동물 프로필: 사진 캐러셀, `Location`, `Animal Info`(마이크로칩·품종·성별·나이·색상 등 필드 나열), 상단 탭 `Animal` / `Adoption`
- 입양자용 `Complete Your Adoption` 화면 → `Checkout Now`, 담당자 화면에는 `Payment Setup`
- 벤더 표현: *Digital Checkout Experience*

**판독** — 신제품의 완결점은 **결제**다. Chameleon 조사에서 확인된 "입양은 케어의 종결이 아니라 금전 거래의 종결" 이라는 모델링이 신제품에서도 유지된다 `[의견·L4]`

### 4.5 PetPoint 실제 화면 — 2012년판 매뉴얼

Independent Cat Society가 공개한 자체 PetPoint 매뉴얼(2012.10)에서 판독 `[검증됨·L0 / 시점 2012]`

**홈·메뉴 구조**

- 상단 녹색 메뉴바 7개: `Intake` `Outcome` `Edit` `Reports` `Admin` `Help` `Community`
- 홈 화면은 카드 6장(`Intake` `Edit` `Services` `Care` `Admin` `Reports`)에 하위 항목을 나열하는 방식
- `Intake` 하위 9개: `Search` `Stray` `Owner/Guardian Surrender` `Return` `Transfer` `Wildlife` `Clinic` `Seized/Custody` `Service` — **입소 유형별로 화면이 갈라진다**

**동물 레코드 — 탭 10개**

`Animal Search` | `Express` | `Details` | `Photos/Videos` | `Profile` | `Memos` | `Identifications` | `Vouchers/Waivers` | `Holds` | `Stage/Location`

- `Express` 탭 한 화면에 **필드 21개**: `Animal #` `Reference#` `Name` `Type` `Species` `Primary Breed` `Purebred` `Secondary Breed` `Age` `Est. Birthdate` `Age Group` `Gender` `Spayed/Neutered` `Size` `Weight` `Animal Condition` `Asilomar Status` `Primary Color` `Secondary Color` `Color Pattern` `Bitten Status`
- 사진은 **`Photo 1` `Photo 2` `Photo 3` 고정 3슬롯**. 각각 캡션·`Do Not Show on Website` 체크박스·`Browse`
- 검색 결과 그리드 컬럼 18개(`ARN` `Status` `Stage` `Species` `Primary Breed` … `On Hold` `Memo` `Location` `Sub Location`)

**판독** — 웹 기반이지만 밀도와 어휘는 Chameleon과 같은 계열이다. 한 화면에 20개 넘는 필드를 세우고, `Asilomar Status` 같은 업계 코드값을 담당자가 알아야 한다. 사진이 3장으로 고정된 것은 **레코드가 케어 기록이 아니라 게시·식별용으로 설계**됐음을 보여준다 `[의견·L4]`

### 4.6 임보가 화면에 나타나는 자리

`Stage/Location` 탭이 결정적이다. 매뉴얼의 설명은 **"고양이가 임보로 가거나 다른 방으로 옮길 때 Stage를 바꾸는 데 사용"** 이다.

| 필드 | 값 |
| --- | --- |
| `Stage` | Available · Evaluate · New Arrival · On Hold · Pending Medical Assessment · Pending Behavioral Assessment · Behavioral Treatment · Bite Quarantine · Medical Quarantine · Medical Treatment · Pending Hearing · Protective Custody · **Foster Program** · Waiting for Pick Up |
| `Location` | **`Shelter` 또는 `Foster` 이지선다** |
| `Sub Location` | 방(room) 선택 |

**판독** `[검증됨·L0]`

- 임보는 **Stage 드롭다운의 값 하나**와 **Location 이지선다**로 표현된다
- **누가 데리고 있는지, 이번 주에 어떤지는 이 화면에 자리가 없다**
- 이것이 Maddie's Fund에서 Licking County가 말한 *"`location`·`sublocation` 에 임보로 표시하는 용도로만 쓴다"* 의 실물이다
- 매뉴얼 목차 자체에도 임보 전용 절이 없다(동물 입력 / 동물 편집 / 사람 생성 / 입양 처리 / 단축키)

## 5. 임보 기능 실태

### 5.1 PetPoint — 있지만 등급이 걸려 있다

웹 아카이브의 공식 헬프(`edit_follow_up_foster.htm`, 2019 스냅샷) 기준 `[검증됨·L0]`

- 임보는 **`Foster Operation` 레코드**로 관리되며, 상태값은 `Pending` · `Scheduled` · `Started/In Progress` → `Completed` · `Cancelled`
- 대량 업데이트 기능 `Follow Up for Foster` 는 **Enterprise 클라이언트에게만 제공**
- 필터 축은 `Status`(Foster Start / Foster End) · `Foster Parent` 등
- 입소 화면은 4탭 구조(`Person Details` → `Animal Details` → `Intake Details` → `Intake Summary`) — **사람 레코드가 첫 탭**

**판독** — 임보를 **시작·종료가 있는 운영 트랜잭션**으로 모델링했다. 보호 기간 중의 상태·경과를 담는 구조가 아니다. 그리고 여러 건을 한 번에 처리하는 기능은 상위 등급을 사야 열린다 `[검증됨·L0]`

### 5.2 실사용자 증언 — Maddie's Fund 실무자 포럼

| 발언자 | 조직 규모 | 내용 |
| --- | --- | --- |
| Laura Kniffen (Michigan Humane) | 연 2,000마리 | PetPoint의 특정 프로세스가 까다로워 **"user error가 많다"**. 베스트 프랙티스를 구함 |
| Erin Robinson (Licking County) | 연 400마리 | 교육 영상까지 봤지만 전용 임보 모듈은 **"신경 쓸 추가 단계가 너무 많다"**. 결국 **스프레드시트 병행** — 임보자 이름·배정 동물·4주/8주 마일스톤·복귀일. 본인도 "임보 규모가 크면 이 방식은 부적절"이라고 인정. PetPoint는 **`location`·`sublocation` 에 임보로 표시하는 용도로만** 사용 |
| Elsa Enstrom (Asheville Humane) | 6년 전 전환 | ShelterLuv로 옮긴 이유 — **"단계가 훨씬 적고 훨씬 직관적"**. 백신 알림과 임보자 직접 연락이 붙어 있음 |
| Wendy Arnold | — | 임보 일정 캘린더 기능을 원함(현재 Outlook으로 관리) |

**판독** — 이것이 자사 소재 B의 근거 중 가장 강한 외부 증언이다. 기존 조사 결론 **"CRM이 있어도 구글 시트는 살아있다"**가 PetPoint에서 실명·조직명과 함께 재확인됐다. 특히 *"백신 알림과 임보자 직접 연락"* 을 이탈 사유로 든 것은 소재 B의 가치 약속과 정확히 겹친다 `[검증됨·L0 — 다만 포럼 게시물이라 시점·현행 여부는 미확인]`

### 5.3 24PetShelter — 모듈 자체가 없다

- 벤더 공개 기능 목록 6개 영역(동물 관리 / 의료·노트·리포팅 / 입소·아웃컴 / 사용자·조직 관리 / 입양·체크아웃 / 통합 가치) 어디에도 임보·자원봉사자 항목이 없음
- 대시보드에서 임보는 태그 `Foster` 42 로만 등장

**판독** — 신제품은 임보를 **기능이 아니라 라벨**로 다룬다. PetPoint에 있던 `Foster Operation` 조차 아직 이전되지 않았다 `[추론·L2 — 미출시 로드맵은 확인 불가]`

## 6. 규모·네트워크

- 24Pet 네트워크 자체 공표: **동물복지 조직 5,000+ · 파트너 연간 입양 100만+ · 연간 마이크로칩 220만+**
- 단, 이 수치는 **24Pet 전체**(PetPoint·Chameleon·24PetRescue·24Petwatch 합산)이며 **PetPoint 단독 점유율이 아니다** `[검증됨·L0 — 출처 표기 기준]`
- 리뷰 플랫폼 근거는 얇음: Capterra 1건, Software Advice 1건(5.0)
- Capterra·Software Advice 기능 목록에는 `Foster Management`·`Volunteer Management` 가 **표기돼 있음** — 5.1의 실제 구조와 대조하면, 목록의 존재가 곧 현장 사용성을 뜻하지 않는다는 사례

## 7. Petify for Shelters 함의

- **공존 전략의 상대가 흔들리고 있다.** Jared가 제안한 `Petify = 임보 커뮤니케이션 / PetPoint = 정본·스케줄 / PDF = 인계` 구조는 유효하나, PetPoint 자체가 이전 국면이다. 데모콜에서 **"24PetShelter 이전 계획이 있는지"** 를 물어야 한다 — 있으면 우리 도입 논의가 그 일정에 묶인다
- **임보 빈자리가 3연속 확인됐다.** Chameleon(켄넬 격자의 부속) → PetPoint(Enterprise 전용 트랜잭션) → 24PetShelter(태그 한 개). 같은 벤더의 세 제품 모두에서 같은 축소가 반복됨
- **깊은 API 연동을 서두를 이유가 줄었다.** 정본이 PetPoint→24PetShelter로 갈아타는 중이면, 지금 PetPoint API에 투자하는 것은 사라질 대상에 붙는 셈이다. Jared가 먼저 말한 **`PDF·CSV 수준 인계로 시작`** 이 기술 판단으로도 옳다 `[의견·L4]`
- **가격 대화의 기준선이 생겼다.** 24PetShelter가 입양 1건당 $5 를 공개했다. 자사 가격을 설명할 때 "쉘터 소프트웨어는 거래 과금이 표준" 이라는 시장 맥락을 쓸 수 있다
- **임보자 진입 방식이 차별점이다.** PetPoint는 조직 ID를 외워야 로그인이 시작된다. 소재 B의 "앱 없음·계정 없음·로그인 없음"은 이 대비에서 설득력이 커진다
- **Maddie's Fund 증언을 대외 문서에 쓸 때는** 포럼 게시물이라는 출처 성격과 시점 미확인을 함께 표기한다

## 8. 미확인 항목

| 항목 | 확인 경로 |
| --- | --- |
| PetPoint sunset 일정 | 벤더 미고지. 사용 조직(CAP 등)에 공지 여부 확인 |
| PetPoint 실제 견적 수준 | 데모콜 리드에게 질문 |
| Enterprise 등급의 범위와 가격 | 동일 |
| 24PetShelter 대규모 조직 개방 시점 | 벤더 공지 |
| **현행** PetPoint 인앱 화면 | 확보분은 2012년판. 2018 리디자인 이후 화면은 사용 조직 데모콜에서 화면 공유 요청 |
| 24PetShelter의 임보 로드맵 | 벤더 문의 또는 사용 조직 |
| PetPoint 단독 도입 조직 수 | 공개 자료 없음(24Pet 합산치만 공표) |

---

## 화면 이미지 목록

| 파일 | 화면 | 출처 |
| --- | --- | --- |
| `01-petpoint-login.jpg` | PetPoint 로그인(Shelter ID) | 실측 2026-08-25 |
| `02-petpoint-product.jpg` | PetPoint 제품 페이지 | 렌더링 2026-08-25 |
| `03-24petshelter-hero.jpg` | 24PetShelter 제품 페이지 상단 | 동일 |
| `04-24petshelter-pricing.jpg` | 24PetShelter 과금·기능 구간 | 동일 |
| `05-shelter-dashboard.jpg` | 24PetShelter 대시보드 | 데모영상 |
| `06-dashboard-tags.jpg` | 대시보드 태그 확대(Foster 42) | 동일·확대 |
| `07-animal-profile.jpg` | 모바일 동물 프로필 | 데모영상 |
| `08-adoption-checkout.jpg` | 디지털 입양 체크아웃 | 데모영상 |
| `09-network-brands.jpg` | 24Pet 브랜드 네트워크 | 데모영상 |
| `10-petpoint-home-2012.jpg` | PetPoint 홈·메뉴 구조 | ICS 매뉴얼 2012.10 |
| `11-petpoint-search-2012.jpg` | 동물 검색·결과 그리드 | 동일 |
| `12-petpoint-express-2012.jpg` | Express 탭 필드 21개·사진 3슬롯 | 동일 |
| `13-petpoint-stage-location-2012.jpg` | Stage/Location 탭 — 임보가 나타나는 자리 | 동일 |

## 출처

- 벤더: `24pet.com/products/petpoint` · `24pet.com/products/24petshelter` 브라우저 렌더링(2026-08-25) · PetPoint 로그인 `sms.petpoint.com/sms3` 실측
- 공식 데모영상: `vimeo.com/1187343400`(24PetShelter, 91초) 프레임 직접 판독
- 웹 아카이브: `help.petpoint.com` 2017~2021 스냅샷 — `Redesigned_PetPoint_Login_and_Home_Screens.htm` · `intake_owner_surrender.htm` · `iphone/edit_follow_up_foster.htm`
- 제3자 매뉴얼: [Independent Cat Society — PetPoint Manual (2012.10, 54쪽)](https://www.catsociety.org/images/ICSPetPointManual.pdf)
- 실무자 포럼: [Maddie's Fund — Using PetPoint to track and manage foster animals](https://forum.maddiesfund.org/discussion/using-petpoint-to-track-and-manage-foster-animals)
- 보도자료: [24PetShelter 출시(2026.04)](https://www.prnewswire.com/news-releases/24pet-by-petplace-launches-24petshelter-introducing-a-more-powerful-way-to-support-shelters-302735199.html) · [24PetShelter 계획 발표](https://www.prnewswire.com/news-releases/24pet-by-petplace-announces-plans-for-24petshelter-an-innovative-software-evolution-designed-to-better-assist-animal-welfare-organizations-302482877.html)
- 리뷰 플랫폼: [Capterra](https://www.capterra.com/p/232708/PetPoints/) · [Software Advice](https://www.softwareadvice.com/data-management/petpoints-profile/)
