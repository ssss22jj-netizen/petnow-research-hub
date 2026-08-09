# 소재 C 인테이크 필드 재검증

> 결론: Shelterluv 테스트 화면에 약 37개 입력 항목이 있었지만 37개 전체가 법규나 보고 때문에 최초 인테이크에서 필수라는 근거는 없다. 오히려 업계 표준은 일부 정보를 최초 입력 후 갱신하도록 허용한다. 소재 C는 `필드를 없앤다`보다 `현재 아는 정보로 레코드를 먼저 열고, 나머지는 확인되는 순서대로 보완한다`는 약속으로 구체화할 수 있다.

## 1. 검증 결과

| 검증 질문 | 판정 | 근거 |
| --- | --- | --- |
| Shelterluv 테스트 흐름에 37개 입력 항목이 있었는가 | 확인 | 프로젝트 워크스루에서 Stray Intake 단일 폼의 약 37개 항목, 8분 44초, 16회 화면 전환 관찰 |
| 37개 전체가 필수였는가 | 아님 | 화면의 필수 표시(`*`)는 일부 항목에만 존재. 발견지 상세, 색상·무늬, 체중, 속성, 영상, 면허, 메모 등 다수 항목은 필수 표시 없음 |
| 37개가 미국 공통 규제 때문에 필요한가 | 근거 없음 | 미국 전역에 공통 적용되는 37개 필드 규정은 확인하지 못함. Shelter Animals Count 참여는 자발적이며, 조직·지원기관에 따라 별도 요구가 있을 수 있음 |
| 보고와 지원금 때문에 구조화 데이터가 필요한가 | 일부 확인 | Shelter Animals Count는 인테이크·아웃컴 데이터의 표준화를 요구하고, Shelterluv API 제출은 여러 지원금 데이터 요건 충족에 활용됨 |
| 모든 정보를 최초 인테이크에서 확정해야 하는가 | 아님 | Shelter Animals Count SOP는 중성화 상태와 생년월일 등을 최초 입력 후 정보가 확인되는 대로 갱신하도록 안내. 상황에 따라 `Unknown` 또는 공란 허용 |
| Shelterluv의 긴 폼이 모든 조직에 동일한가 | 단정 불가 | Shelterluv는 공식 제품 페이지에서 Intake & Outcome Forms를 구성 가능하다고 안내. 테스트 계정의 37개 항목을 모든 고객의 고정 폼으로 일반화할 수 없음 |

## 2. 37개 항목의 성격

프로젝트 화면 증거의 Stray Intake 폼은 다음 영역을 한 화면에 결합한다.

- 인테이크 사건: 날짜·시간, 하위 유형, 입소 위치, 현재 상태
- 발견 정보: 발견 일시, 주소, 도시, 주, 우편번호, 카운티, 메모
- 동물 기본 정보: 이름, 종, 견종, 성별, 중성화 상태, 색상, 무늬, 체중, 나이
- 식별 정보: 사진, 영상, 마이크로칩, 면허
- 운영 메모: 의료 메모와 추가 메모

따라서 37개라는 수치는 `레코드를 만들기 위한 법적 최소 정보 37개`가 아니라 `테스트한 Stray Intake 화면에 노출된 전체 입력 항목 약 37개`로 표현해야 한다.

## 3. 소재 C에 새로 확보된 재료

### 사용할 수 있는 문제 재료

- 한 테스트 흐름에서 약 37개 항목이 한 화면에 노출됨
- 필수 항목과 나중에 보완할 항목이 같은 긴 폼에 함께 배치됨
- 동적 항목 변경 과정에서 기존 입력값이 초기화되어 8회 이상 재입력 발생
- 최초 저장에 필요한 최소 정보와 장기적으로 필요한 전체 기록이 분리되지 않음

### 사용할 수 있는 솔루션 재료

- 현재 프리토타입은 이름, 종, 성별, 추정 나이 네 가지 기본 정보와 사진으로 레코드를 시작하는 흐름을 실제 화면으로 제시
- 저장 후 준비 체크리스트를 열고 의료, 행동, 미디어, 서류를 이후 단계에서 보완하는 흐름을 제시
- 업계 SOP도 일부 동물 정보를 최초 인테이크 이후 갱신하는 방식을 인정하므로 `나중에 보완` 자체가 보고 기준과 충돌하지 않음

### 아직 사용할 수 없는 약속

- 미국 모든 쉘터가 37개 항목을 입력한다는 주장
- Shelterluv의 37개 항목이 모두 필수라는 주장
- 펫나우 실제 제품의 최초 입력 항목이 네 개로 확정됐다는 주장
- 최초 인테이크 한 번으로 레코드가 완성된다는 주장
- 이후 추가 작업이 전혀 없다는 주장

## 4. 권장 카피 방향

프리토타입의 네 가지 기본 정보 흐름을 이번 LMF 실험의 제품 가설로 확정한다는 전제에서 다음 문구 사용 가능.

> **Start her record with four details.**  
> Add medical, behavior, photos, and paperwork as they arrive.

문제와 해결 방식을 한 번에 대비하는 버전.

> **37 fields to start a record. What if four were enough?**  
> Start with the basics. Add the rest as you learn more.

네 가지 항목을 아직 확정하지 않는 경우의 안전한 버전.

> **Intake now. Complete as you learn.**  
> Start her record with what you know. Add the rest as it arrives.

`One pass at your intake desk`와 `Nothing to finish later`는 삭제 권고. 소재 C의 차별점은 후속 입력 제거가 아니라 `최초 저장과 후속 보완의 분리`임.

## 5. 근거와 한계

| 출처 | 확인 내용 | 한계 |
| --- | --- | --- |
| 프로젝트 Shelterluv 화면 증거 `SL-T1-01`, `SL-T1-02`, `SL-T1-03` | 약 37개 항목, 일부 필수 표시, 입력 초기화, 8회 이상 재입력 | 무료 체험 계정의 한 설정과 한 과업 |
| [Shelterluv Features](https://www.shelterluv.com/product/features/) | Configurable Intake & Outcome Forms, 외부 보고·게시 연동 | 개별 폼의 필수 항목 목록은 공개하지 않음 |
| [Shelter Animals Count Animal-Level Data](https://www.shelteranimalscount.org/explore-the-data/elementor-5427/animal-level-data/) | 표준화되는 동물·인테이크 데이터 항목 | 법적 의무 목록이 아니라 업계 데이터 표준 |
| [Shelter Animals Count Animal-Level Data SOP](https://www.shelteranimalscount.org/wp-content/uploads/2024/12/ALD-SOP-Complete-Document.pdf) | 중성화 상태·생년월일의 최초 기록과 후속 갱신, Unknown·공란 허용 조건 | 주·지자체별 법규를 대체하지 않음 |
| [Shelter Animals Count Resources](https://www.shelteranimalscount.org/resources/) | 참여는 자발적이며 지원기관별 별도 요건 가능 | 개별 지원금 요건은 별도 확인 필요 |
| [Shelter Animals Count API with Shelterluv](https://www.shelteranimalscount.org/apis-with-sac/) | Shelterluv 데이터의 월별 자동 제출과 지원금 데이터 요건 활용 | 37개 화면 항목 각각의 필요성을 설명하지 않음 |

미국 주·지자체별 보호소 기록 의무는 조직 유형과 관할에 따라 달라질 수 있다. 이번 검증으로 미국 전체의 법적 최소 필드 수를 확정하지 않았으며, 소재 C에서도 법규 준수 보장을 주장하지 않는다.
