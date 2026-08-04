# LinkedIn 후보 탐색 독립 재현 실행 로그

## 실행 요약

| 항목 | 기록 |
| --- | --- |
| 절차 | `LinkedIn 인터뷰 후보 탐색·검증 표준 절차 v1` |
| 실행일 | 2026-08-03 |
| 기준 시간대 | Asia/Seoul |
| 독립성 통제 | 절차 문서 외 PROJECT_STATE.md, 기존 LinkedIn 후보 문서, Google Sheet, 기존 CSV/TSV 및 다른 프로젝트 산출물 미열람 |
| 검색 환경 | 일반 검색엔진 `site:linkedin.com/in` 공개 결과 중심, Chrome LinkedIn 연결 가능 여부 확인 |
| 완료 후보 | 23명 |
| 중복 LinkedIn URL | 0건 |
| 중단 사유 | 검색엔진 공개 결과가 과거 경력·비관련 본업·캐나다/영국·채용공고를 반복 노출하여 신규 합격 후보가 2개 결과 페이지 연속 0명인 검색어가 증가. 50명 미달 상태에서 지정 역할 검색어를 소진한 것으로 종료 |

## 검색어별 기록

검색 결과 페이지 수는 검색엔진이 반환한 공개 결과 묶음을 1페이지로 계산함. LinkedIn 내부 사람 검색은 로그인 세션 연결은 가능했으나, 대량 개인 프로필 탐색보다 공개 검색 결과가 더 안정적으로 이름·URL·경력 설명을 제공하여 공개 결과를 우선 사용함. 검색 개인화와 크롤링 시점 차이를 재현성 한계로 기록함.

| 순서 | 묶음 | 검색어 | 확인 페이지 | 신규 검증 후보 | 제외 | 중단·제외 사유 |
| ---: | --- | --- | ---: | ---: | ---: | --- |
| 1 | A | animal shelter director of operations | 1 | 2 | 2 | 과거 경력·현재 역할 불명 |
| 2 | A | humane society shelter operations manager | 1 | 1 | 2 | 직함 불일치·개인 URL 부족 |
| 3 | A | animal rescue executive director | 1 | 3 | 2 | 마케팅 전담·과거 경력 |
| 4 | A | animal services director shelter | 1 | 1 | 2 | 채용공고·현재 역할 불명 |
| 5 | A | animal shelter chief operating officer | 1 | 1 | 3 | 타 산업 COO·채용 게시물 |
| 6 | A | animal rescue director of finance facilities | 1 | 0 | 5 | 비관련 본업·과거 봉사·개인명 부재 |
| 7 | A | animal shelter outcome programs manager | 1 | 0 | 4 | 채용공고·개인 URL 부재 |
| 8 | B | animal rescue foster program manager | 1 | 0 | 4 | 과거 경력·지원 역할 |
| 9 | B | animal rescue foster coordinator | 1 | 2 | 4 | 과거 역할·미국 외·단순 임보자 |
| 10 | B | humane society foster manager | 1 | 0 | 4 | 후보 이름이 조직 게시물에만 표시되고 개인 URL 미확보 |
| 11 | B | animal shelter volunteer program manager | 1 | 1 | 4 | 과거 역할·일반 봉사자 |
| 12 | B | animal rescue volunteer coordinator | 1 | 3 | 5 | 과거 경력·일반 기업 본업만 확인 |
| 13 | B | foster and adoption manager animal rescue | 1 | 0 | 4 | 채용공고·개인 프로필 미확보 |
| 14 | C | animal shelter adoptions manager | 1 | 2 | 4 | 과거 경력·채용공고 |
| 15 | C | animal rescue placement manager | 1 | 0 | 4 | 비관련 placement 직무·미국 외 |
| 16 | C | animal shelter intake manager | 1 | 1 | 4 | 과거 경력·채용공고 |
| 17 | C | animal shelter outcomes manager | 1 | 0 | 4 | 채용공고 중심·개인 URL 부재 |
| 18 | C | animal rescue transport coordinator | 1 | 6 | 5 | 과거 역할·미국 외·운전 봉사만 수행 |
| 19 | C | animal rescue transport operations director | 1 | 0 | 4 | 개인 URL 없는 조직/채용 결과 |
| 20 | C | animal rescue transport coordinator 추가 공개 결과 | 1 | 1 | 4 | 조직 미상·역할 현재성 불명 |

## 지역 보완 기록

지역 보완은 A~C에서 후보가 0~1명인 주를 우선하여 수행함. 검색엔진 결과가 동일 인물과 채용공고를 반복 노출했고, 아래 각 권역에서 두 연속 결과 페이지 기준 신규 이름 표시 개인 프로필 0명이 되어 종료함.

| 권역 | 결합 지역 | 확인 페이지 | 신규 검증 후보 | 제외 | 중단 사유 |
| --- | --- | ---: | ---: | ---: | --- |
| 북동부 | New York, New Jersey, Massachusetts, Pennsylvania | 2 | 2 | 14 | 기존 URL 중복·과거 경력·채용공고가 2페이지 연속 반복 |
| 남동부 | Florida, Georgia, North Carolina, South Carolina | 2 | 2 | 13 | 현재 조직 불명·일반 봉사·동일 후보 반복 |
| 중남부 | Texas, Oklahoma, Kansas, Nebraska | 2 | 1 | 15 | 개인 LinkedIn URL 미확보·조직 페이지 중심 |
| 서부 | California, Washington, Oregon, Colorado | 2 | 2 | 14 | 과거 경력·일반 봉사자·채용공고 반복 |
| 중서부 | Ohio, Illinois, Minnesota, Wisconsin, Michigan | 2 | 1 | 15 | 역할 관련성 낮음·과거 경력·동일 후보 반복 |

## 품질관리 결과

- 필수 28개 열 포함
- 후보명 공란 0건
- LinkedIn 개인 URL 공란 0건
- 정규화 LinkedIn URL 중복 0건
- 미국 외 후보 0건
- 공란 대신 `미확인` 사용
- 1순위 후보 0명: 풀타임 직접 확인 근거를 확보하지 못했으므로 직함만으로 상향하지 않음
- 2순위 후보 0명: 유급 직원 확인 또는 시간제 직접 근거를 확보하지 못함
- 3순위 후보 23명: 현직 봉사 직접 확인 또는 고용형태 미확인 실무자·조직 총괄
- 외부 공식 개인 근거를 확보하지 못한 행은 모두 `LinkedIn만 확인`으로 표시
- 공개 LinkedIn 결과의 크롤링 시점과 실제 로그인 화면 간 차이 가능성 존재

## 한계 및 종료 판단

목표 50명에 도달하지 못함. 공개 검색 결과에서 현직성·개인 URL·미국 소재·관련 역할 네 조건을 동시에 충족하는 후보가 빠르게 고갈되었고, 고용형태와 외부 공식 개인 근거까지 확보 가능한 후보는 더 적었음. 절차의 중단 조건인 지정 검색어 소진과 신규 후보 2페이지 연속 0명 조건을 적용하여 23명으로 종료함.
