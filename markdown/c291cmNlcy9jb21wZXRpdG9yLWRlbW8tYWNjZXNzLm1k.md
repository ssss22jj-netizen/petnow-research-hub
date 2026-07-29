# 경쟁사 데모·무료 체험 접근 경로

> 확인일: 2026-07-29

## 현재 판단

| 제품 | 접근 상태 | 다음 행동 |
| --- | --- | --- |
| Shelterluv | 운영자 계정 1차 분석 완료 | 임보자 직접 입력, 입양자 계약·서명·결제 및 결제 후 상태 변경, 모바일 T1 저장, Daily Observations 재검증 |
| Pawlytics | 실제 운영 계정 과업 검증 완료 | T1 완료, T2 운영자 대리입력 기준 부분 완료, T3 계약 이메일·상태 변경 실행 직전까지 확인. 임보자 직접 입력과 최종 계약·결제·상태 변경 검증 필요 |
| Animal Shelter Manager | 로그인 데모 분석 완료 | 임보자 Daily Observations 경로와 승인된 환경의 최종 입양 실행 검증 |
| PawPlacer | 로그인 데모 분석 완료 | Checkout 이후 상태 변경과 투약 빈도 단위의 사용자 이해 검증 |
| Petstablished | KK9R 실제 운영 계정 읽기 전용 워크스루 완료 | 승인된 테스트 레코드에서 T1~T3 저장·상태 변경·오류 복구 검증 |
| Chameleon/CMS | 공개 체험 미확보 | 공공기관용 과업을 별도 설계한 뒤 영업 데모 요청 |

## 1. 접근 현황

| 제품 | 접근 방식 | 공식 링크 | 확인된 조건 | 분석 가능성 |
| --- | --- | --- | --- | --- |
| Petstablished | KK9R 실제 운영 계정 | 로그인 계정 별도 제공 | 실제 운영 데이터 포함. 동물 등록·임보·의료·신청·계약 구조를 읽기 전용으로 확인 | 저장·상태 변경·외부 발송은 테스트 레코드 승인 후 가능 |
| Petstablished | 예약형 데모 | [데모 예약](https://calendly.com/petstablished-team/demo) | Calendly 일정 예약 | 제품 설명 확인 가능. 자유 과업 수행 가능 여부 미확인 |
| Pawlytics | 펫나우팀 제공 실제 운영 계정 | 로그인 계정 별도 제공 | 가상 테스트 레코드로 등록·임보·의료·행동·입양 Outcome 직전까지 검증 | 임보자 직접 입력과 외부 발송·최종 상태 변경은 승인 후 가능 |
| Pawlytics | 예약형 전체 데모 | [전체 데모 예약](https://learn.pawlytics.com/meetings/nisha23/full-pawlytics-demo) | 일정 예약 | 제품 설명 및 질문 가능 |
| Shelterluv | 14일 무료 체험 | [무료 체험 활성화](https://www.shelterluv.com/activate/) | 신용카드 불필요. 실제 가입 양식의 기관 정보 요구 범위는 가입 진행 시 추가 확인 필요 | 셀프서비스 분석 우선 후보 |
| Shelterluv | 셀프 가이드 제품 투어 | [제품 투어](https://www.shelterluv.com/product/tour/) | 가입 없이 주요 기능 영상 확인 가능 | 무료 체험 전 정보 구조·기능 사전 분석 가능 |
| Chameleon/CMS | 영업 데모 요청 | [데모 요청](https://services.24pet.com/requestDemo.php) | 영업팀 연락 및 일정 조율 | 공개 셀프서비스 체험 미확인. 공공기관형 별도 트랙 적용 |

## 2. 권장 접근 순서

| 순서 | 제품 | 실행 |
| --- | --- | --- |
| 1 | Shelterluv | 셀프 가이드 투어 분석 후 14일 무료 체험 신청 |
| 2 | Pawlytics | 실제 운영 계정에서 남은 외부 발송·최종 상태 변경 과업만 승인 후 검증 |
| 3 | Petstablished | 펫나우·KK9R과 사용할 실제 기관 정보와 승인 범위 확인 후 가입 또는 데모 예약 |
| 4 | Chameleon/CMS | 민간 레스큐용 세 제품 분석과 분리하여 영업 데모 요청 여부 결정 |

## 3. 계정 생성 시 유의사항

- 존재하지 않는 동물복지기관 정보나 검증 ID를 사용하지 않음
- 펫나우, KK9R 또는 다른 기관의 이름·주소·식별정보는 해당 기관 승인 후 사용
- 결제수단 입력, 유료 전환, 계약 동의가 필요한 경우 사용자 확인 후 진행
- 실제 동물·입양자·임보자 개인정보 대신 분석 설계 문서의 가상 테스트 데이터 사용
- 가입일과 무료 체험 종료일 기록
- 무료 체험의 자동 유료 전환 여부와 해지 방법 확인

## 4. 분석 연결 문서

- `../analysis/경쟁사_데모_UIUX_통합분석.md`
- `../analysis/Pawlytics_정식계정_과업재검증_20260729.md`
- `../analysis/competitor-evidence/pawlytics-recheck-20260729/`: Pawlytics 정식 계정 화면 증거 13개
- `../analysis/competitor-evidence/`: Animal Shelter Manager·PawPlacer 등 경쟁 제품 화면 증거
