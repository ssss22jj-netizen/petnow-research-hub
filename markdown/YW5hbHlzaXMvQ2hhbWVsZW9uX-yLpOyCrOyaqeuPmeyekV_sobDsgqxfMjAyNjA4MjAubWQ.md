# Chameleon 실사용 동작 조사 — 파일 흐름 중심

- 조사일: 2026.08.20 / 조사자: 흰둥이
- 목적: 데모 계정 접근 없이 Chameleon 사용 조직의 실제 조작·파일 흐름 재구성 (산타바바라 카운티 데모 대비)
- 방법: 벤더 1차 자료, 지방정부 절차서·감사보고서·조달문서(1차), 검증 리뷰
- 한계: 화면 직접 확인 불가. 조작 단서는 공공 절차서·감사보고서에서 역추적한 것으로, 조직별 커스터마이징 차이 있음

## 0. 결론 요약

| 항목 | 판정 |
| --- | --- |
| 제품 형태 | Windows 데스크톱 + SQL Server 2017↑ 기반 온프레미스 업무시스템. 웹 SaaS 아님 [검증됨·L0] |
| 파일 업로드의 실체 | 사용자가 앱에 파일을 올리는 방식이 아님. ①벤더 대행 채널(VetImport·Image Entry) ②자동 신디케이션(24Petconnect) ③리포트 내보내기(Crystal→CSV) 세 갈래 [검증됨·L0] |
| 일상 입력의 실체 | 코드·단축키 기반 필드 입력 + **종이 카드(hard card) 병행 이중 기입**. 사진은 켄넬카드 인쇄용으로 재촬영 [검증됨·L0, 출처는 2005~2007 시행 절차서] |
| 데이터 품질 | 복수 카운티 감사에서 입력 오류·정합성 결함 반복 확인 [검증됨·L0] |
| 2026년 최대 변수 | **2026.04.07 후속 제품 24PetShelter 출시. Chameleon은 신규 기능 개발 종료(지원만 유지), sunset 일정은 미고지** [검증됨·L0] |

## 1. 제품 구성

| 구성 | 내용 |
| --- | --- |
| 본체 Chameleon/CMS | 사람·동물·켄넬·면허·현장출동·의료·후원·회계·보고 통합. Windows + SQL Server 2017 이상 |
| 기본 포함 모듈 | Chameleon Mailbox(오류·갱신·레스큐 자동 알림), Chameleon Mapping, 24Petconnect(입양 사이트 자동 게시), PostMaster, QuickKennel(바코드 켄넬 점검) |
| 별도 과금 서비스 | WebLicensing/WebDonation(온라인 면허·기부), VetImport / Image Entry(외부 데이터·종이 폼 대행 입력) |
| 모바일 | WebChameleon — 스마트기기용 동반 앱. 입양 처리, 의료 처치, 면허 조회, 출동 콜·주소 조회, 사진 촬영·첨부. 변경사항은 기존 DB에 즉시 반영 |
| 보고 | 기본 40여 종 + Crystal Reports 기반 커스텀 리포트(조직당 수십~100건 이상 운용 사례) |

## 2. 실제 조작 방식 (공공 절차서에서 역추적)

험볼트 카운티 보안관실 동물관리 절차서(2018 개정본, 개별 조항 시행일 2005~2007) 기준. **동일 조직 문서이므로 타 조직 일반화 금지.**

- **입소**: 종이 impound card + stray intake card + booking check off sheet 작성 → 그 다음 Chameleon 입력. 면허증은 복사해 종이 카드에 첨부
- **소유자 확인**: `Owner ID` 섹션에 소유자 정보, `tag` 섹션에 면허 정보 입력. `hold` 아이콘을 `Y`로 전환하고 `Hold Notify` 지정. `Intake Type`을 `Stray`→`Owned`로 변경, subtype은 `Field`·`Counter` 등에서 선택
- **입양 전환**: 켄넬 번호 변경, 상태 `stray wait`→`available`, 이름 입력, `condition`을 `normal`로 확인 → 켄넬카드 재인쇄 → 종이 hard card도 함께 갱신
- **사진**: 켄넬카드의 사진 품질이 나쁘면 재촬영. 즉 사진은 개체 프로필용이라기보다 **인쇄물 산출용**으로 취급됨
- **리포트 실행**: Chameleon 실행 → `F3` → 팝업에서 첫 글자 키로 리포트 선택(예: `K` → Kennel Inventory) → OK → 인쇄. 종이 인벤토리에 손으로 변경사항 표기 후 반영
- **수납**: 영수증 발행·현금과부족 대조·기부 계정 지정 등 캐시어링을 Chameleon에서 수행

> 시사점: 화면 조작 자체가 **코드값 선택 + 상태 전이 + 인쇄물 출력**의 조합이며, 종이 문서가 시스템과 병렬로 계속 유지된다.

## 3. 파일이 오가는 지점 (질문 핵심)

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

## 4. 운영 현실 (지방정부 감사 근거)

| 사례 | 확인 내용 |
| --- | --- |
| 오렌지 카운티 성과감사(2015) | 데이터는 SQL, 리포트는 Crystal Reports. 전사 리포트를 만들 수 있는 인원이 소수로 축소. **리포트 계산식 오류로 현장 대응시간이 실제와 다르게 보고됨**. 사망 상태 입소 개체가 입양·야생 방사로 기록되는 등 정합성 결함. 회계시스템(CAPS+)과 미연동 |
| 브라워드 카운티(2023) | Chameleon 입력 오류로 규제약품 처방자 특정 불가 |
| 웨버 카운티(2025~2026) | 2024년 DOA 개체가 Chameleon에는 4건, 배차시스템(Spillman)에는 442건. 감사 요청 |
| 마이애미데이드 조달(2025.07 개정) | 현행 Chameleon으로 일 100건 입소·일 100건 이상 처치·상시 300두 운영. **커스텀 리포트·자동화 워크플로 100건 이상**을 신규 시스템에서 재현하도록 요구 |
| 검증 리뷰(Capterra) | "익히면 강력하나 배우기 어렵고 매뉴얼이 없다", "부분 일치 검색 불가로 정확한 철자 필요", "지원은 유료" 반복 |

## 5. 2026년 변화 — 데모 전략에 직결

- 2026.04.07 24Pet by PetPlace가 **24PetShelter** 출시. 클라우드·모바일 우선, PetPoint·Chameleon의 후속 세대로 명시
- 벤더 공식 입장: **현행 PetPoint/Chameleon은 신규 기능 개발 종료**, 버그·보안 수정만 유지, sunset 일정은 현재 미고지. 전환은 고객 주도, 마이그레이션 계획은 개별 수립
- 24PetShelter 가격: 소프트웨어 정기 요금 없음, **입양 1건당 $5**(모바일 체크아웃 처리분) + 입양당 무료 마이크로칩. 초기 대상은 소규모·단순 운영 조직이며, 대규모 기관 등록은 순차 개방
- 초기 릴리스 기능 목록에 사진·영상 업로드, 가이드형 입소 플로우, 표준 의료 템플릿, 역할 기반 권한이 포함. **포스터(임보) 관리·온라인 리스팅·창구 수납은 향후 추가 예정**

> 해석: 기존 Chameleon 고객은 "당장 강제 이전은 없으나 제품은 정지 상태"라는 위치에 놓였고, 벤더가 제시한 다음 목적지는 **임보 관리가 아직 없는 초기 제품**이다. 임보·현장 기록 축을 파고드는 펫나우에게는 진입 창이 열린 국면 [의견·L4].

## 6. 데모콜 확인 질문 (미확인 항목)

1. 개체 레코드에 문서·사진을 직접 첨부하는 기능을 실제로 쓰는가, 아니면 종이·별도 폴더로 관리하는가
2. 종이 카드(hard card)와의 이중 기입이 지금도 유지되는가, 하루 몇 건·몇 분인가
3. 임보 배치·데이 트립 로테이션은 Chameleon 안에서 처리되는가, 스프레드시트인가
4. 월별 SAC 보고에 실제로 몇 시간이 드는가, 누가 Crystal Report를 다룰 수 있는가
5. 24PetShelter 전환 안내를 받았는가, 조직의 판단은 무엇인가 (계약 갱신 시점 포함)
6. WebChameleon을 현장에서 실제로 쓰는가, 오프라인·통신 음영 지역 대응은 어떻게 하는가

## 7. 출처

- 벤더 1차: [Chameleon/CMS](https://chameleonbeach.com/Products/Chameleon), [제품 목록](https://chameleonbeach.com/Products), [WebChameleon](https://chameleonbeach.com/Products/WebChameleon), [VetImport·Image Entry](https://chameleonbeach.com/Products/VetImport), [WebLicensing](https://chameleonbeach.com/Products/WebLicensing), [24Petconnect](https://chameleonbeach.com/Products/24Petconnect), [QuickKennel](https://chameleonbeach.com/Products/QuickKennel), [24Pet 제품 소개](https://www.24pet.com/products/chameleon)
- 후속 제품: [24PetShelter 제품 페이지](https://www.24pet.com/products/24petshelter), [출시 보도자료 2026.04.07](https://www.prnewswire.com/news-releases/24pet-by-petplace-launches-24petshelter-introducing-a-more-powerful-way-to-support-shelters-302735199.html), [사전 발표 2025.06.17](https://www.prnewswire.com/news-releases/24pet-by-petplace-announces-plans-for-24petshelter-an-innovative-software-evolution-designed-to-better-assist-animal-welfare-organizations-302482877.html)
- 공공 1차: [험볼트 카운티 동물관리 절차서](https://humboldtgov.org/DocumentCenter/View/84316/Animal-Control-Procedural-Manual), [오렌지 카운티 성과감사 2015](https://www.ocgov.com/sites/default/files/import/data/files/43008.pdf), [마이애미데이드 RFP EVN0022869](https://www.miamidade.gov/Apps/ISD/StratProc/ProcurementNAS/pdf_Files/FutureSolicitations/RFP_Solicitation_EVN-0022869.pdf), [브라워드 감사 23-17](https://www.broward.org/Auditor/Reports/Documents/Reports-Issued-FY-2023/Additional%20Follow-up%20Review%20of%20the%20Animal%20Care%20Division%20-%20Report%20No.%2023-17.pdf), [웨버 카운티 보도](https://www.abc4.com/news/northern-utah/weber-county-animal-services-audit-data/)
- 보고 체계: [SAC 소프트웨어별 내보내기 안내](https://www.shelteranimalscount.org/faqs/how-do-i-export-a-report-from-my-shelter-software-to-upload-to-sac/)
- 리뷰: [Capterra Chameleon-CMS](https://www.capterra.com/p/233330/Chameleon-CMS/), [Software Advice](https://www.softwareadvice.com/kennel/chameleon-cms-profile/)
