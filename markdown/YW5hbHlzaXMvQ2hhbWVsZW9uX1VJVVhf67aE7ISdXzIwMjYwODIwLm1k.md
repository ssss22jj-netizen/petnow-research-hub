# Chameleon 종합 분석 — 화면 판독 · 파일 흐름 · 운영 실태

- 조사일: 2026.08.20 / 조사자: 흰둥이
- 방법: ①벤더 배포 스크린샷·아카이브 이미지를 직접 판독(화면 구조) ②벤더 1차 자료·지방정부 절차서·감사보고서·조달문서를 역추적(조작·파일 흐름). 데모 계정 접근 없이 진행 (산타바바라 카운티 데모 대비)
- 화면 이미지는 `analysis/assets/chameleon_ui/`
- 대상 구분: **HLP(24Pet)의 동물보호소 제품 Chameleon/CMS**. 동명 SaaS(제품투어 도구 Chameleon.io, 채용 SW Chameleon-i)는 제외 — GetApp/Capterra 검색 시 혼입되므로 주의
- 근거 등급: 화면 구조·필드명·메뉴 항목은 이미지 직접 판독 [검증됨·L0]. 조작 절차는 공공 절차서에서 역추적한 것으로 조직별 커스터마이징 차이 있음. 조작 난도·업무 영향 해석은 [의견·L4]

## 0. 결론

| 항목 | 판정 |
| --- | --- |
| UI 세대 | Windows 데스크톱 MDI 폼 애플리케이션 + SQL Server 2017↑ 온프레미스. 웹 SaaS 아님 [검증됨·L0] |
| 20년 변화 | 2003~2006년 화면과 2025년 화면의 **레이아웃·색 규칙·메뉴 구조가 동일 계열**. 창 테두리만 XP→Win10 |
| 입력 패러다임 | 자유 입력이 아니라 **코드값 입력 + ID 참조**. `A024995`(동물), `P066250`(사람), `STRAY`, `NORM`, `DEBTLOOKUP` 같은 약어를 사람이 기억해 넣음 |
| 화면 단위 | 업무별 독립 창(Animal·Person·Activity·Receipt·Visual Kennel·Map)을 띄우는 방식. 하나의 대상을 따라가는 흐름이 아니라 **창 사이를 오가는 흐름** |
| 파일 업로드의 실체 | 사용자가 앱에 직접 파일을 올리는 방식이 아님. ①벤더 대행 채널(VetImport·Image Entry) ②자동 신디케이션(24Petconnect) ③리포트 내보내기(Crystal→CSV) 세 갈래 [검증됨·L0] |
| 일상 입력의 실체 | 코드·단축키 기반 필드 입력 + **종이 카드(hard card) 병행 이중 기입**. 사진은 켄넬카드 인쇄용으로 재촬영 [검증됨·L0, 출처는 2005~2007 시행 절차서] |
| 모바일 | WebChameleon은 별도 반응형 웹. 데스크톱 화면의 축소판이 아니라 과업 몇 개만 추린 별도 화면 |
| 데이터 품질 | 복수 카운티 감사에서 입력 오류·정합성 결함 반복 확인 [검증됨·L0] |
| 2026년 최대 변수 | **2026.04.07 후속 제품 24PetShelter 출시. Chameleon은 신규 기능 개발 종료(지원만 유지), sunset 일정은 미고지** [검증됨·L0] |
| 시각적 결론 | 밀도·색상·용어 모두 **훈련된 전담 인력 전제**. 자원봉사자·임보자가 직접 쓰는 화면이 아님 [의견·L4] |

## 1. 제품 구성

| 구성 | 내용 |
| --- | --- |
| 본체 Chameleon/CMS | 사람·동물·켄넬·면허·현장출동·의료·후원·회계·보고 통합. Windows + SQL Server 2017 이상 |
| 기본 포함 모듈 | Chameleon Mailbox(오류·갱신·레스큐 자동 알림), Chameleon Mapping, 24Petconnect(입양 사이트 자동 게시), PostMaster, QuickKennel(바코드 켄넬 점검) |
| 별도 과금 서비스 | WebLicensing/WebDonation(온라인 면허·기부), VetImport / Image Entry(외부 데이터·종이 폼 대행 입력) |
| 모바일 | WebChameleon — 스마트기기용 동반 앱. 입양 처리, 의료 처치, 면허 조회, 출동 콜·주소 조회, 사진 촬영·첨부. 변경사항은 기존 DB에 즉시 반영 |
| 보고 | 기본 40여 종 + Crystal Reports 기반 커스텀 리포트(조직당 수십~100건 이상 운용 사례) |

## 2. 판독한 화면 목록

| 파일 | 화면 | 시점 | 출처 |
| --- | --- | --- | --- |
| `01_동물화면_2006.png` | Animal | 2006 | 벤더 사이트 아카이브 |
| `02_사람화면_2006.png` | Person | 2006 | 동일 |
| `03_비주얼켄넬_2006.png` | Visual Kennel | 2006 | 동일 |
| `04_현장출동화면_2006.png` | Activity | 2006 | 동일 |
| `05_맵모듈_2003.jpg` | Chameleon Map v1.0.29 | 2003 | 동일 |
| `10_사람화면_슈퍼서치_2025.png` | Person + SuperSearch + 모바일 Activity Action | 2025-01 (화면 내 타임스탬프) | 24Pet 제품 페이지 |
| `11_수납화면_Procedures메뉴_2025.png` | 수납(Receipt) + Procedures 메뉴 펼침 | 현행 | 동일 |
| `20_WebChameleon_오피서_켄넬.png` | WebChameleon 태블릿·폰 | 2017~2019 데이터 | 동일 |
| `21_WebChameleon_켄넬인벤토리_확대.png` | 켄넬 인벤토리 확대 판독본 | 동일 | 확대 처리 |
| `30_24PetShelter_2026.png` | 후속 제품 24PetShelter | 2026 | 24Pet 제품 페이지 |

## 3. 데스크톱 UI 규칙 (전 화면 공통)

- **메뉴바 6개 고정**: `File` `Commands` `Procedures` `Reports` `Extras` `Help`. 업무 실행은 대부분 `Procedures` 안에 들어 있음
- **툴바 아이콘 12개 내외**: 저장·검색(돋보기)·다음(▶)·편집·추가(+)·삭제(−)·확정(✓)·취소(✗)·도움말(?) 등. **텍스트 라벨 없음**
- **색 규칙**: 키·필수 입력 필드는 **노란 배경**, 해당 라벨은 **빨간 글씨**. 나머지는 흰 배경·검은 라벨
- **폼 밀도**: 한 화면에 30~60개 필드. 그룹 박스로 구분하되 스크롤 없이 한 화면에 몰아넣는 설계
- **하단 그리드**: 각 화면 아래에 연관 레코드 목록(동물 목록·활동 목록·거래 라인)이 붙는 마스터-디테일 구조
- **리포트 실행**: 화면이 아니라 단축키·메뉴에서 리포트 목록을 띄워 이름 첫 글자로 선택 후 인쇄 (험볼트 카운티 절차서의 `F3` 절차와 일치)

### 3.1 Animal 화면 (`01`)

- 상단 식별부: `Animal ID`(노랑) · `Animal Name`(노랑) · `Type` · `Sex` · `Yr` · `Mon` · `DOB`
- 외형부: `Color`·`Breed`를 각각 **Looks Like / Primary / Secondary** 3열로 입력 (`W`, `CALICO`, `WHITE`, `SHORTHAIR`, `DOMESTIC SH`)
- 상태부: `Condition`(NORMAL) · `Status`(ACTIVE) · `Status Date` · `Bite`
- 신체·특징부: `Size` `Coat` `Ears` `Tail` `Muzzle` `Temper` `Collar Color` `Collar Type` `Markings`
- 중성화부: `Vet ID` `Due` `Completed` `Voucher No` `Contract Expires`
- **사진은 우측 고정 패널에 `Image 1 of 3` 형태**로 다중 등록. 즉 사진 기능은 존재하되 화면 한쪽의 정적 슬롯이며, 촬영·업로드 동선이 화면 흐름에 붙어 있지 않음
- 성격·행동은 `Temper` 한 칸. 임보·케어 루틴을 담는 구조가 아님 [의견·L4]

### 3.2 Person 화면 + SuperSearch (`02`, `10`)

- `Person ID`(P번호, 노랑) 중심. 주소를 `No` `Dir` `Name` `Type` `Qdt` `Apt` 로 **파편 필드 분해 입력** — 도로명 구성요소를 칸마다 나눠 넣는 방식
- 플래그 체크박스 줄: `Bad Check` `Blue` `Orange` `Donor` `No Adopt` `Danger`
- 하단 그리드에 해당 사람과 연결된 동물 목록(`Animal ID` + 설명 문자열)
- 2025 화면의 우측 **SuperSearch** 패널: 검색어 입력 후 `StreetNoLastName` / `Anything` 버튼으로 검색 범위를 바꿔 결과 그리드 표시. 최신 화면에서 추가된 개선점으로 보임 [추정·L2]
- `Procedures` 메뉴 실제 항목: `Submit Person Duplicate` `Fix Person Duplicate Now` `Submit Animal Dup - Select Correct AnimalId` `Match Duplicate ID` `Copy Primary Address to Address2` — **중복 레코드 처리가 상시 업무로 메뉴에 상주**

### 3.3 수납 화면 (`11`)

- 상단: `Receipt No` `Date` `Person`(P번호) `Received From` `Comment` `ReferenceNo` `Extra1` `Extra2`, 우측에 해당 인물의 과거 영수증 목록
- 라인아이템 그리드: `Qty` `Item Code` `Price` `Subtotal` `ItemName` `Extra3` `Extra4` `Source` `Account`
  - 실제 코드 예: `LINK` `EXAM` `FVRCP` `SPAY` `DHLPP` `FRONTL` `BORDETELLA` `RABIES` `ALBON` — **약어 코드 직접 입력**
- 하단 결제바: `Total` `Cash` `Check` `Credit` `Tendered` `Card No` `Exp` `Auth` `Trans` `Change` `Balance`
- `Procedures` 메뉴에 `Debt Lookup` `Journal Entry` `Bad Check` `Tag Refund Item` `Finish Refund` `Finalize Adoption` `Clerk Close` `License Renewal` `Show Batch Summary` `Find Animal` `Match Lost` `Show Foster Animals` `Lookup Breed` `Visual Kennel` `Visual Schedule`
  - **입양 확정(`Finalize Adoption`)이 수납 화면의 메뉴 항목**이라는 점이 이 제품의 성격을 보여줌. 입양은 케어의 종결이 아니라 **금전 거래의 종결**로 모델링돼 있음 [의견·L4]

### 3.4 Activity 화면 — 현장출동 (`04`)

- `Activity No` `Seq` `Type`(STRAY) `Subtype`(ROAM) `Priority`(NORM) `Total` `Type`(DOG) `Tag No`
- 신고자: `Caller ID`(P번호) → 파란 굵은 글씨로 이름·전화·주소 요약 표시
- 주소 파편 필드 + `Geo` 좌표, `Comment`, `Danger` 플래그, `Owner ID`·`Animal ID` 연결
- 처리 결과: `Qty`/`Result` 네 쌍, `Clerk ID` `Officer ID` `Status`(NEW)
- 우측 타임스탬프 스택: `Call` `New` `Dispatch` `Working` `Complete` — 출동 단계별 시각 기록
- 우측 버튼: `Activity Search` `License Search`

### 3.5 Visual Kennel (`03`)

- 켄넬을 **색상 블록 격자**로 표시. `page 1 of 10` 페이징
- 구역: Dog Kennels 001~075, Cat Building A(A01~A25)·B(B01~B25), Misc Kennels(`BARN` `WILD` `FOSTER` `SMALL ANIM` `RECEIVING` `LOST/HOME` `FREEZER` `VET` `ISO`)
- 색은 상태 코드(진파랑·하늘·연분홍 등)로만 구분되고 **칸 안에 동물 이름·경과일 같은 정보 없음**. 색 의미는 별도 학습 필요
- 임보(`FOSTER`)가 켄넬 격자의 한 칸으로 취급됨 — 시설 밖 배치를 시설 안 공간과 같은 축으로 다룸 [의견·L4]

## 4. WebChameleon UX (`20`, `21`)

- 형태: 모바일 브라우저에서 여는 반응형 웹(아이패드 사파리·안드로이드 화면 캡처로 확인). 네이티브 앱이 아님
- **오피서 화면**: 상단에 담당자 이름, `Go Off Duty [on for 1.67 hrs]` · `Go Out of Service [now in service]` 토글, `New Activity` · `View Officers`, 탭 `Assigned` `New` `Pending` `Completed`
  - 활동 리스트 카드: 유형 헤더(`INV - COUNTY (DOG)`), 상태 배지(`WORKING [14 min.]` 초록 / `DISPATCHED 12/4/2017 11:42:00 AM` 노랑), `ACTIVITY DANGER FLAG`, `PRIORITY`, `LOCATION`, `CALLER`, `PHONE`, `COMMENTS`
  - 상태·경과시간을 색으로 강조하는 방식이 데스크톱보다 진일보 [의견·L4]
- **켄넬 인벤토리 화면**: `Kennel Inventory` → `"D" Kennels` → 켄넬 그룹 `D001` → `Add Animal(Click to add an animal to this kennel)` → 개체 행
  - 개체 행 구성: 동물 ID 링크(`A024995`, 이름이 있으면 `CHARLIE (A021075)`), 썸네일 사진, `Status: STRAY WAIT`, `Last Checked: 73 days 2 hrs and 36 min`(빨강), `Due Out: 5/30/2019`, 우측 담당자명·빨간 액션 버튼
  - **`Last Checked` 경과시간을 빨간색으로 노출** — 점검 누락을 화면에서 드러내는 설계
- **Activity Action 메뉴**(모바일 팝업): `Working` `Complete` `Pending` `Make New` `Activity Image` `Activity Memo` `Address Search` `View Activity` `Open Maps`
  - `Activity Image` = 현장 사진 첨부 경로 확인. 다만 **동물 개체가 아니라 활동(출동 건)에 붙는 이미지**
- 벤더 자체 홍보 사진에서도 현장 직원이 **클립보드 종이 서식과 스마트폰을 동시에** 들고 있음

## 5. 실제 조작 방식 (공공 절차서에서 역추적)

험볼트 카운티 보안관실 동물관리 절차서(2018 개정본, 개별 조항 시행일 2005~2007) 기준. **동일 조직 문서이므로 타 조직 일반화 금지.**

- **입소**: 종이 impound card + stray intake card + booking check off sheet 작성 → 그 다음 Chameleon 입력. 면허증은 복사해 종이 카드에 첨부
- **소유자 확인**: `Owner ID` 섹션에 소유자 정보, `tag` 섹션에 면허 정보 입력. `hold` 아이콘을 `Y`로 전환하고 `Hold Notify` 지정. `Intake Type`을 `Stray`→`Owned`로 변경, subtype은 `Field`·`Counter` 등에서 선택
- **입양 전환**: 켄넬 번호 변경, 상태 `stray wait`→`available`, 이름 입력, `condition`을 `normal`로 확인 → 켄넬카드 재인쇄 → 종이 hard card도 함께 갱신
- **사진**: 켄넬카드의 사진 품질이 나쁘면 재촬영. 즉 사진은 개체 프로필용이라기보다 **인쇄물 산출용**으로 취급됨
- **리포트 실행**: Chameleon 실행 → `F3` → 팝업에서 첫 글자 키로 리포트 선택(예: `K` → Kennel Inventory) → OK → 인쇄. 종이 인벤토리에 손으로 변경사항 표기 후 반영
- **수납**: 영수증 발행·현금과부족 대조·기부 계정 지정 등 캐시어링을 Chameleon에서 수행

> 시사점: 화면 조작 자체가 **코드값 선택 + 상태 전이 + 인쇄물 출력**의 조합이며, 종이 문서가 시스템과 병렬로 계속 유지된다.

## 6. 파일이 오가는 지점

| # | 지점 | 주체 | 대상 파일·데이터 | 경로·형식 | 주기 |
| --- | --- | --- | --- | --- | --- |
| 1 | 도입·전환 | 기존 벤더·조직 IT | 레거시 시스템 추출 데이터 | 상호 합의 형식 파일 → 필드 단위 매핑 후 적재 | 1회(구축) |
| 2 | VetImport | 지역 수의사·면허 대행 판매처 | 광견병 접종·면허 판매 데이터 | 각 기관 SW에서 export한 데이터 파일을 **HLP 운영 웹사이트에 로그인해 업로드** → Chameleon 레코드로 자동 변환 | 월 단위 |
| 3 | Image Entry | 조직 자체 | 종이 접종증명·신청서 | **배치 스캔 후 HLP로 전송 → HLP 인력이 대신 키펀치** | 상시 |
| 4 | WebChameleon | 현장 직원 | 동물·현장 사건 사진 | 스마트기기 촬영 → 즉시 DB 반영 | 상시 |
| 5 | 24Petconnect | 자동 | 동물 정보 + 사진 | Chameleon에서 자동 업로드 → 24Petconnect 및 연계 입양 사이트 게시, 유실·발견 자동 매칭 메일 | 실시간(수동 개입 없음) |
| 6 | Shelter Animals Count 보고 | 조직 데이터 담당 | 월별 입·출소 집계 | **전용 SAC Crystal Report를 벤더에 요청 → CSV로 내보내기 → SAC에 SFTP 업로드**(또는 SAC 화면에서 CSV 템플릿 수동 업로드) | 월 단위 |
| 7 | 결제 인터페이스 | 시스템 | 수납·환불·취소 거래 | 캐시어링 시스템(예: iNovah) 및 카운티 결제 게이트웨이와 HTTPS/XML 연동 | 실시간 |
| 8 | 외부 시스템 조회 | 타 부서 시스템 | 소유자·동물·태그 정보 | **Chameleon DB에 읽기전용 계정으로 직접 접속**(311 Salesforce, 입양 후 서비스 업체 등) | 상시 |

**핵심 해석**: "파일을 올린다"는 행위의 대부분이 ①벤더 대행(2·3) ②자동화(5) ③리포트 산출물(6)이다. 사용자가 개체 레코드에 문서를 첨부하는 일상적 동선은 공개 자료에서 확인되지 않았다 [미확인·L3 — 데모콜 확인 항목].

## 7. 운영 현실 (지방정부 감사 근거)

| 사례 | 확인 내용 |
| --- | --- |
| 오렌지 카운티 성과감사(2015) | 데이터는 SQL, 리포트는 Crystal Reports. 전사 리포트를 만들 수 있는 인원이 소수로 축소. **리포트 계산식 오류로 현장 대응시간이 실제와 다르게 보고됨**. 사망 상태 입소 개체가 입양·야생 방사로 기록되는 등 정합성 결함. 회계시스템(CAPS+)과 미연동 |
| 브라워드 카운티(2023) | Chameleon 입력 오류로 규제약품 처방자 특정 불가 |
| 웨버 카운티(2025~2026) | 2024년 DOA 개체가 Chameleon에는 4건, 배차시스템(Spillman)에는 442건. 감사 요청 |
| 마이애미데이드 조달(2025.07 개정) | 현행 Chameleon으로 일 100건 입소·일 100건 이상 처치·상시 300두 운영. **커스텀 리포트·자동화 워크플로 100건 이상**을 신규 시스템에서 재현하도록 요구 |
| 검증 리뷰(Capterra) | "익히면 강력하나 배우기 어렵고 매뉴얼이 없다", "부분 일치 검색 불가로 정확한 철자 필요", "지원은 유료" 반복 |

## 8. 후속 제품 24PetShelter — UI 대조와 전환 국면

| 축 | Chameleon/CMS | 24PetShelter (2026.04 출시) |
| --- | --- | --- |
| 형태 | Windows 데스크톱 창 | 브라우저 카드형 레이아웃 |
| 네비게이션 | 메뉴바 6개 + 창 전환 | 상단 탭 `Animals` `Action Center` `People` `Resources` |
| 정보 밀도 | 한 화면 수십 개 필드 | 카드 단위 요약(`Outcome Details`·`Transaction Details`·`Person`·`Files`) |
| 상태 표현 | 코드 문자열 | 문장형(`Outcome Complete! Your outcome was processed`) |
| 파일 | 화면 우측 이미지 슬롯 | 카드에 `Files` 영역 존재 |
| 결제 | 수납 화면 라인아이템 | `Payment Method: Mobile Checkout`, 체크아웃 링크 발송·수신 시각 표기 |

> 같은 벤더가 **UI 패러다임을 완전히 갈아엎은 제품을 내놓았다**는 사실 자체가, 기존 Chameleon UI의 한계를 벤더가 인정한 근거로 쓸 수 있다 [의견·L4].

- 2026.04.07 24Pet by PetPlace가 **24PetShelter** 출시. 클라우드·모바일 우선, PetPoint·Chameleon의 후속 세대로 명시
- 벤더 공식 입장: **현행 PetPoint/Chameleon은 신규 기능 개발 종료**, 버그·보안 수정만 유지, sunset 일정은 현재 미고지. 전환은 고객 주도, 마이그레이션 계획은 개별 수립
- 24PetShelter 가격: 소프트웨어 정기 요금 없음, **입양 1건당 $5**(모바일 체크아웃 처리분) + 입양당 무료 마이크로칩. 초기 대상은 소규모·단순 운영 조직이며, 대규모 기관 등록은 순차 개방
- 초기 릴리스 기능 목록에 사진·영상 업로드, 가이드형 입소 플로우, 표준 의료 템플릿, 역할 기반 권한이 포함. **포스터(임보) 관리·온라인 리스팅·창구 수납은 향후 추가 예정**

> 해석: 기존 Chameleon 고객은 "당장 강제 이전은 없으나 제품은 정지 상태"라는 위치에 놓였고, 벤더가 제시한 다음 목적지는 **임보 관리가 아직 없는 초기 제품**이다. 임보·현장 기록 축을 파고드는 펫나우에게는 진입 창이 열린 국면 [의견·L4].

## 9. UX 진단 (판독 기반)

| 문제 | 화면 근거 | 업무 영향 가설 |
| --- | --- | --- |
| 코드 암기 의존 | 색·품종·품목·상태 전부 약어 코드 입력 | 신규 인력·자원봉사자 투입 불가, 교육 부담. 리뷰의 "배우기 어렵다"와 일치 |
| 중복 레코드 상시화 | `Procedures`에 중복 제출·수정 항목 상주 | 사람·동물 레코드 정합성 관리가 별도 업무로 존재 |
| 검색의 경직성 | 리뷰: 부분 일치 검색 불가, 정확한 철자 필요. SuperSearch는 최근 완화 시도 | 전화 응대·현장 조회 시 지연 |
| 사진의 주변부 배치 | Animal 화면 우측 정적 슬롯, 모바일은 활동 단위 이미지 | 개체 상태 기록을 사진으로 남기는 흐름이 약함 |
| 상태 코드 중심 켄넬뷰 | 색 블록만 있고 개체 정보 없음 | 현황 파악에 별도 인벤토리 인쇄물 필요 |
| 임보 취급 | 켄넬 격자의 한 칸, 메뉴의 `Show Foster Animals` | 임보 가정에서 일어나는 일상은 시스템 밖으로 밀림 |
| 종이 병행 | 벤더 홍보 이미지의 클립보드, 험볼트 절차서의 hard card 이중 기입 | 동일 정보를 두 번 쓰는 구조 |

## 10. 펫나우 적용 (제안, 확정 아님)

- **경쟁 축을 "기능 유무"가 아니라 "화면당 조작 수"로 잡을 근거가 확보됨** — 동일 과업을 Chameleon에서 몇 창·몇 필드로 처리하는지 대비해 보여줄 수 있음
- 데모에서 대조 화면으로 쓸 수 있는 실물 이미지 확보. 단 **벤더 배포 이미지이므로 인용 표기 필요**, 외부 배포 자료에 무단 게재는 지양
- 임보·현장 사진 기록은 Chameleon UI에서 가장 얇은 지점 → 펫나우 진입 지점 가설과 정합

## 11. 데모콜 확인 항목

1. 2025년 현행 버전에서 Animal 화면이 위 구조 그대로인지 (확보된 최신 이미지는 Person·수납 화면)
2. 개체 레코드에 문서·사진을 직접 첨부하는 기능을 실제로 쓰는가 — 이미지 슬롯뿐인지, 데스크톱 업로드인지 모바일 촬영인지
3. 종이 카드(hard card)와의 이중 기입이 지금도 유지되는가, 하루 몇 건·몇 분인가
4. WebChameleon을 현장에서 실제로 쓰는가, 오프라인·통신 음영 지역 대응은 어떻게 하는가
5. 임보 배치·데이 트립 로테이션은 Chameleon 안에서 처리되는가, 스프레드시트인가
6. 월별 SAC 보고에 실제로 몇 시간이 드는가, 누가 Crystal Report를 다룰 수 있는가
7. 24PetShelter 전환 안내를 받았는가, 조직의 판단은 무엇인가 (계약 갱신 시점 포함) — 임보 기능 부재를 어떻게 보는가

## 12. 조사 방법과 출처

- 리뷰 사이트(GetApp·Capterra·SoftwareAdvice·SourceForge)에는 **이 제품의 스크린샷이 사실상 없음**. GetApp 호주판 `software/127411/chameleon`은 동명의 제품투어 SaaS(Chameleon.io) 페이지로, 동물보호소 제품과 무관
- 실효가 있던 경로: ①벤더 제품 페이지 이미지 직접 수집 ②Wayback Machine CDX로 과거 스크린샷 파일 복원 ③공공 절차서·감사보고서의 조작 절차 기술
- 이미지 검색엔진(Bing·DuckDuckGo)은 봇 차단·노이즈로 실효 없었음
- 벤더 1차: [Chameleon/CMS](https://chameleonbeach.com/Products/Chameleon), [제품 목록](https://chameleonbeach.com/Products), [WebChameleon](https://chameleonbeach.com/Products/WebChameleon), [VetImport·Image Entry](https://chameleonbeach.com/Products/VetImport), [WebLicensing](https://chameleonbeach.com/Products/WebLicensing), [24Petconnect](https://chameleonbeach.com/Products/24Petconnect), [QuickKennel](https://chameleonbeach.com/Products/QuickKennel), [24Pet 제품 소개](https://www.24pet.com/products/chameleon)
- 후속 제품: [24PetShelter 제품 페이지](https://www.24pet.com/products/24petshelter), [출시 보도자료 2026.04.07](https://www.prnewswire.com/news-releases/24pet-by-petplace-launches-24petshelter-introducing-a-more-powerful-way-to-support-shelters-302735199.html), [사전 발표 2025.06.17](https://www.prnewswire.com/news-releases/24pet-by-petplace-announces-plans-for-24petshelter-an-innovative-software-evolution-designed-to-better-assist-animal-welfare-organizations-302482877.html)
- 공공 1차: [험볼트 카운티 동물관리 절차서](https://humboldtgov.org/DocumentCenter/View/84316/Animal-Control-Procedural-Manual), [오렌지 카운티 성과감사 2015](https://www.ocgov.com/sites/default/files/import/data/files/43008.pdf), [마이애미데이드 RFP EVN0022869](https://www.miamidade.gov/Apps/ISD/StratProc/ProcurementNAS/pdf_Files/FutureSolicitations/RFP_Solicitation_EVN-0022869.pdf), [브라워드 감사 23-17](https://www.broward.org/Auditor/Reports/Documents/Reports-Issued-FY-2023/Additional%20Follow-up%20Review%20of%20the%20Animal%20Care%20Division%20-%20Report%20No.%2023-17.pdf), [웨버 카운티 보도](https://www.abc4.com/news/northern-utah/weber-county-animal-services-audit-data/)
- 보고 체계: [SAC 소프트웨어별 내보내기 안내](https://www.shelteranimalscount.org/faqs/how-do-i-export-a-report-from-my-shelter-software-to-upload-to-sac/)
- 리뷰: [Capterra Chameleon-CMS](https://www.capterra.com/p/233330/Chameleon-CMS/), [Software Advice](https://www.softwareadvice.com/kennel/chameleon-cms-profile/)
