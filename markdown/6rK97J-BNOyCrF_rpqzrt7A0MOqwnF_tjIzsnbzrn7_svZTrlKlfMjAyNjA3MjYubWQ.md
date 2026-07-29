# 경쟁 4사 사용자 리뷰 질적분석 파일럿

- 기준일: 2026.07.26
- 목적: 고객 원문 표현을 보존한 M1 페인포인트 후보 및 인터뷰 질문 도출
- 분석 단위: 독립 리뷰 40건이 아닌 `의미 단위 40개`
- 주의: 의미 단위 여러 개가 동일 리뷰·토론에서 파생될 수 있으므로 빈도를 고객 수로 해석하지 않음

## 핵심 결론

> 기능 부족보다 기록 유지 부담, CRM 외부 우회, 예외 해결 비용, 사람·동물·조직 관계 관리가 더 유력한 문제 후보로 나타났다. 다만 의미 단위 40개만으로 발생 빈도와 경쟁사별 차이를 확정할 수는 없다.

### 현재 가장 강한 문제 후보

1. **상세 기능과 현장 유지 가능성의 불일치**
   - 기능이 없는 문제가 아니라 필드·단계·교육 부담 때문에 실제 기록이 유지되지 않을 가능성
2. **CRM 외부 우회로 인한 최신 상태 분산**
   - 시트·이메일·메신저를 병행하면서 위치·담당자·의료 상태의 최신성 저하 가능성
3. **예외 상황에서의 높은 해결 비용**
   - 정상 업무보다 데이터 이전, 중복, 일괄처리, 지원 지연, 맞춤 설정에서 큰 비용 발생
4. **사람·동물·조직 관계 관리의 마찰**
   - 임보자·입양자·봉사자 역할, 동물 위치, 조직 간 이관의 정확한 연결이 어려울 가능성

### 아직 결론 내릴 수 없는 사항

- 위 문제 중 쉘터 현장에서 가장 빈번하고 심각한 문제
- 문제별 실제 손실시간과 동물복지 영향
- 펫나우 CRM이 경쟁사보다 단계를 줄이는지
- 단순화가 필수 데이터 누락을 증가시키지 않는지
- 리뷰에 나타난 과거 불만이 현재 제품에서도 재현되는지

### M1 의사결정 기준

`리뷰에서 자주 보임`이 아니라 다음 조건을 모두 확인한 문제를 우선 검증 대상으로 선정

- 서로 다른 쉘터 3곳 이상에서 최근 사례 확인
- 주 1회 이상 반복 또는 단일 사건의 영향이 큼
- 현재 CRM 밖의 우회 행동 존재
- 시간·오류·기록 누락 중 하나를 측정 가능
- 경쟁제품 동일 과업 대비 펫나우의 개선 폭을 시험 가능

### 한눈에 보는 파일럿 결과

| 항목 | 파일럿 결과 |
| --- | --- |
| 가장 강한 문제 후보 | 상세 기능과 현장 유지 가능성의 불일치, CRM 외부 우회와 최신 상태 분산, 예외 상황의 높은 해결 비용, 사람·동물·조직 관계 관리 마찰 |
| 전환 장벽 | 불만이 있어도 데이터 이전, 재교육, 결제·마이크로칩 연계 때문에 기존 제품 잔류 |
| 해석 제한 | 40개는 독립 리뷰 수가 아닌 의미 단위 수이며 경쟁사별 발생률 비교 불가 |
| 다음 행동 | 전체 원문 확보 후 중복·인센티브를 제거하고 실제 사용자 인터뷰로 빈도·영향 검증 |

## 1. 파일럿 구성

| 경쟁사 | 의미 단위 | 주요 출처 | 표본 한계 |
| --- | ---: | --- | --- |
| Shelterluv | 10 | Capterra 검증 리뷰, Reddit 현장 토론 | 2024년 플랫폼 전환기 불만과 2026년 공급사 반론 공존 |
| Petstablished | 10 | Capterra 2건, Reddit 현장 토론, 공식 프로그램 조건 | 독립 사용자 리뷰 부족. 일부 단위는 같은 토론의 선택 기준·대안 표현 |
| Pawlytics | 10 | Capterra 검증 리뷰 42건 | 인센티브 리뷰 다수, 과거 리뷰와 현재 기능 간 시점 차이 |
| Chameleon/CMS | 10 | 동물통제 관리자 검증 리뷰 1건, Reddit 쉘터 실무자 토론 | 제품 맞춤 설정에 따라 조직별 경험 차이가 큼 |

## 2. 포함·제외 기준

### 포함

- 실제 사용 역할·업무·제품 선택·전환 경험 중 하나가 드러나는 내용
- 구체적인 작업, 문제, 우회 행동, 결과, 선택·잔류 이유를 포함한 내용
- 작성 시점·출처·제품을 식별할 수 있는 내용
- 공급사 추천·인센티브 여부를 구분할 수 있는 경우 해당 정보 병기

### 제외

- Chameleon/CMS와 무관한 동명 고객 온보딩 SaaS 리뷰
- 제품 홍보 계정의 기능 주장만 있는 게시물
- 제품을 사용하지 않은 입양자의 소비자 경험
- 같은 문장을 복제한 게시물
- 업무 맥락 없이 평점이나 “좋다·나쁘다”만 제시한 내용

## 3. Shelterluv 의미 단위 코딩

| ID | 원문 표현 | 맥락 | In Vivo 1차 코드 | 업무·문제·행동·결과 | 2차 주제 | 근거 |
| --- | --- | --- | --- | --- | --- | --- |
| SL-01 | “Setup was super quick and a breeze.” | 비영리 조직, 사용 6개월 미만 | `super quick`, `a breeze` | 초기 설정·도입이 빠름 | 온보딩 편의 | [Capterra](https://www.capterra.com/p/179205/Shelterluv/reviews/) |
| SL-02 | “hassle of switching was too high” | 사용 2년 이상, 신버전 불만 리뷰 | `hassle of switching` | 심각한 불만에도 교체 수고 때문에 잔류 | 전환 비용 | [Capterra](https://www.capterra.com/p/179205/Shelterluv/reviews/) |
| SL-03 | “support is abysmal or non-existent” | 쉘터 이전 작업 자원봉사자, 2025 | `abysmal`, `non-existent` | 문제 발생 후 지원을 받지 못했다고 인식 | 장애 대응 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1i94z1o/weve_been_volunteering_to_get_a_shelter_moved/) |
| SL-04 | “one size fits all” | 동일 현장 사례 | `one size fits all` | 조직 업무에 맞춘 설정이 부족하다고 인식 | 맞춤화 제약 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1i94z1o/weve_been_volunteering_to_get_a_shelter_moved/) |
| SL-05 | “clear everything a few times” | 데이터 이전 반복 실패 | `clear everything`, `a few times` | 가져오기 실패 후 데이터 초기화·재시도 | 데이터 이전 위험 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1i94z1o/weve_been_volunteering_to_get_a_shelter_moved/) |
| SL-06 | “purely over email” | 온보딩 이후 지원 채널 | `purely over email` | 긴급 문제도 이메일로만 문의 | 지원 채널 제약 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1i94z1o/weve_been_volunteering_to_get_a_shelter_moved/) |
| SL-07 | “get all the staff up to par” | Airtable·Google Docs에서 전환 | `staff up to par` | 직원이 독립적으로 일할 때까지 교육 필요 | 도입·교육 비용 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1i94z1o/weve_been_volunteering_to_get_a_shelter_moved/) |
| SL-08 | “unable to make changes” | 쉘터·임보·병원 간 동물 이동 | `unable to make changes` | 지원 지연 중 임보자가 위치 변경 기록 불가 | 분산 운영·인계 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1i94z1o/weve_been_volunteering_to_get_a_shelter_moved/) |
| SL-09 | “a powerhouse of a program” | Chameleon에서 Shelterluv로 전환한 사용자 | `powerhouse` | 사용 편의보다 이전 제품의 기능 깊이를 그리워함 | 단순성·기능 깊이 절충 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1i94z1o/weve_been_volunteering_to_get_a_shelter_moved/) |
| SL-10 | “moving it in system” | 다수 파트너가 Shelterluv 사용 | `move it in system` | 같은 제품을 쓰는 조직 간 동물 이관이 쉬움 | 네트워크 전환 장벽 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |

### Shelterluv 1차 해석

- 긍정 언어: `quick`, `breeze`, `simple`, `move it in system`
- 부정 언어: `abysmal`, `non-existent`, `one size fits all`, `clear everything`
- 핵심 긴장: 빠른 도입·쉬운 일상 사용과 예외 상황·이전·고객지원의 취약성 공존
- M1 확인 대상: 정상 과업보다 데이터 이전, 위치 변경, 지원 지연 등 예외 상황에서 업무가 멈추는지

## 4. Petstablished 의미 단위 코딩

| ID | 원문 표현 | 맥락 | In Vivo 1차 코드 | 업무·문제·행동·결과 | 2차 주제 | 근거 |
| --- | --- | --- | --- | --- | --- | --- |
| PS-01 | “wayyyy too detailed” | 임보 기반 개 레스큐, 4인 팀 | `wayyyy too detailed` | 소규모 팀에 필요한 수준보다 상세하다고 인식 | 입력 복잡성 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |
| PS-02 | “too many steps” | 동일 사용자 | `too many steps` | 과업 완료까지 단계가 많음 | 조작 단계 과다 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |
| PS-03 | “takes too much time” | 동일 사용자 | `too much time` | 4인 팀이 시스템을 유지할 시간이 부족 | 유지 업무량 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |
| PS-04 | “currently using google spreadsheets” | Petstablished 보유 조직 | `using google spreadsheets` | CRM을 보유하고도 시트로 우회 | 기능 미사용·우회 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |
| PS-05 | “something SUPER simple” | 의료 리마인더가 필요한 조직 | `SUPER simple` | 기능 깊이보다 낮은 관리 부담을 우선 | 기대 결과 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |
| PS-06 | “medical reminders” | NexGard·Heartgard·백신 관리 | `medical reminders` | 반복 의료 업무 알림이 핵심 필요 | 의료 루틴 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |
| PS-07 | “microchips and keeping a database” | 소프트웨어 탐색 중인 레스큐 | `keeping a database` | 칩 등록과 이전 개체 이력 보존 필요 | 식별·기록 연속성 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |
| PS-08 | “tracking vaccinations” | 동일 탐색 사례 | `tracking vaccinations` | 예방접종 상태 추적 필요 | 의료 기록 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |
| PS-09 | “place to keep adoption agreements” | 동일 탐색 사례 | `keep adoption agreements` | 계약서 보관 위치 필요 | 문서 통합 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1awp6t8/software_advice/) |
| PS-10 | “Free usually comes at a cost.” | 300마리 이상 레스큐의 도입 검토 | `comes at a cost` | 무료 제품의 숨은 제약·의존성 우려 | 무료 모델 불신 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/1sru0l5/dog_rescue_software/) |

### Petstablished 1차 해석

- 고객 언어는 `기능 부족`보다 `too detailed`, `too many steps`, `too much time`에 집중
- 동일 사용자가 세 표현을 연속 사용했으므로 독립 고객 3명의 반복 불만이 아니라 한 조직의 강한 사건으로 판정
- 사용자가 원하는 제품은 단순한 DB가 아니라 `SUPER simple`하면서 의료 리마인더·칩·백신·계약서를 유지하는 도구
- M1 확인 대상: 필수 데이터와 선택 데이터를 분리하면 실제 유지시간과 우회율이 감소하는지

## 5. Pawlytics 의미 단위 코딩

| ID | 원문 표현 또는 원문 기반 사실 | 맥락 | In Vivo 1차 코드 | 업무·문제·행동·결과 | 2차 주제 | 근거 |
| --- | --- | --- | --- | --- | --- | --- |
| PW-01 | 학습이 쉽다는 평가 | 소규모 레스큐 사용자, 2025 | `easy` | 신규 사용자가 빠르게 익힘 | 학습 편의 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |
| PW-02 | 보고 기능 확대 요청 | Co-treasurer, 2025 | `reporting` | 현재 보고 기능보다 추가 분석 필요 | 보고 기능 공백 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |
| PW-03 | FeLV/FIV 전용 체크 항목 필요 | 소규모 레스큐, 2025 | `FeLV/FIV` | 반복 검사정보를 구조화 필드로 기록하고 싶음 | 종별 의료 필드 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |
| PW-04 | 사람 기록 관리가 쉽지 않음 | Animal Health Director, 1~2년 사용 | `people records` | 임보자·입양자·봉사자 필터와 역할 구분 혼동 | 사람·역할 기록 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |
| PW-05 | 일부 기능에 학습 곡선 존재 | 장기 사용자 리뷰 | `learning curve` | 익숙해지면 쉽지만 초기 학습 필요 | 초기 학습 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |
| PW-06 | 동일 인물 중복 생성이 쉬움 | 비영리 조직 Founder, 2020 | `duplicate` | 사람 DB에 중복 레코드 발생 가능 | 데이터 품질 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |
| PW-07 | 신청서 일괄 처리 제약 | 인센티브 리뷰, 2022 | `batch applications` | 대량 신청 처리에서 반복 작업 발생 | 배치 처리 공백 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |
| PW-08 | 의료 영역의 조작과 상태 갱신이 번거로움 | Vice President, 1~2년 사용 | `cumbersome` | 수술 기록과 개체 상태를 중복 갱신 | 의료·상태 동기화 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |
| PW-09 | 웹사이트 위젯 로딩 지연 | Managing Director, 1~2년 사용 | `slow` | 많은 정보가 있는 외부 게시에서 지연 | 외부 게시 성능 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |
| PW-10 | foster·adopter·animal 정보가 한곳에 있음 | Treasurer, 1~2년 사용 | `all in one place` | 종이·복수 시트를 줄이고 기록 접근 개선 | 통합 가시성 | [Capterra](https://www.capterra.com/p/194354/Pawlytics/reviews/) |

### Pawlytics 1차 해석

- 강점 언어: `easy to learn`, `all in one place`, `responsive`, `affordable`
- 불만은 전면적 사용 실패보다 의료 필드·보고·사람 중복·배치 처리 등 구체적인 확장 요구에 집중
- 과거 모바일 불만은 공식 모바일 친화형 웹 개선 이후의 현행 문제로 단정 불가
- M1 확인 대상: 소규모 레스큐가 만족하는 단순성을 유지하면서 사람·의료·대량업무의 오류를 줄일 수 있는지

## 6. Chameleon/CMS 의미 단위 코딩

| ID | 원문 표현 | 맥락 | In Vivo 1차 코드 | 업무·문제·행동·결과 | 2차 주제 | 근거 |
| --- | --- | --- | --- | --- | --- | --- |
| CH-01 | “doesn’t feel intuitive” | 지방정부 쉘터 신규 행정직원, 교육 1주 | `doesn’t feel intuitive` | 전화·면허·입양 업무에서 독립 사용 어려움 | 학습 난도 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/11cm0qq/does_anyone_use_chameleon_shelter_software/) |
| CH-02 | “asked for a manual or a tutorial” | 동일 신규 직원 | `manual or tutorial` | 복합 업무 교육자료 탐색 | 교육자료 공백 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/11cm0qq/does_anyone_use_chameleon_shelter_software/) |
| CH-03 | “a few months” | 이전 사용자 | `a few months` | 편안하게 사용할 때까지 장기 반복학습 필요 | 숙련 기간 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/11cm0qq/does_anyone_use_chameleon_shelter_software/) |
| CH-04 | “fake dog entered into the system” | 신규 직원 연습 방식 | `fake dog` | 실제 데이터 오류를 피하려고 연습용 레코드 생성 | 교육 우회법 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/11cm0qq/does_anyone_use_chameleon_shelter_software/) |
| CH-05 | “CLEAR function was right next to UPDATE” | 현장 오류 사례 | `CLEAR next to UPDATE` | 기능키 혼동으로 입력 삭제 오인·실제 오류 발생 | 오류 유발 UI | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/11cm0qq/does_anyone_use_chameleon_shelter_software/) |
| CH-06 | “doing it over and over again” | 입양 부서 사용자 | `over and over again` | 반복과 키 암기로 과업 습득 | 암기 중심 숙련 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/11cm0qq/does_anyone_use_chameleon_shelter_software/) |
| CH-07 | “only as good as how you've set it up” | 숙련 사용자 | `how you've set it up` | 제품 성능이 조직별 설정 품질에 좌우 | 구축 품질 의존 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/11cm0qq/does_anyone_use_chameleon_shelter_software/) |
| CH-08 | “our own TS had to do it” | 7년 사용 조직 | `our own TS` | 공급사 대신 내부 기술지원이 맞춤 설정 | 내부 IT 의존 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/11cm0qq/does_anyone_use_chameleon_shelter_software/) |
| CH-09 | “made lots of mistakes” | 4년 사용자 | `lots of mistakes` | 온보딩 교육 후에도 Receiving 실무 전까지 오류 반복 | 실무 기반 학습 | [Reddit](https://www.reddit.com/r/AnimalShelterStories/comments/11cm0qq/does_anyone_use_chameleon_shelter_software/) |
| CH-10 | “handle most challenges in-house” | Animal Control Division Manager, 사용 2년 이상 | `in-house` | 높은 맞춤화의 대가로 내부 IT·운영 대응 필요 | 총소유비용 | [Capterra](https://www.capterra.com/p/153079/Chameleon/reviews/) |

### Chameleon/CMS 1차 해석

- 반복 언어: `not intuitive`, `a few months`, `over and over`, `in-house`
- 문제의 중심은 기능 부족보다 기능키·조직별 설정·교육자료·내부 IT 의존
- 숙련 이후에는 `powerhouse`, `nearly any report`, `customized`라는 긍정 표현이 등장
- M1 확인 대상: 복합 공공업무 전체를 대체하기보다 신규·현장 사용자의 빈번한 과업을 단순화할 여지가 있는지

## 7. 교차 경쟁사 2차 주제

| 2차 주제 | 고객 원문 표현 | 관련 경쟁사 | 반례·긴장 | M1 판정 |
| --- | --- | --- | --- | --- |
| 빠른 학습과 기능 깊이의 충돌 | `a breeze`, `too detailed`, `a few months`, `powerhouse` | 4사 | 기능이 깊을수록 반드시 나쁜 것은 아니며 숙련 후 만족 증가 | 역할별 필수 과업 분리 검증 |
| CRM 보유 후 외부 도구 우회 | `using google spreadsheets`, `purely over email` | Petstablished, Shelterluv | Pawlytics는 `all in one place`가 강점 | 우회율과 우회 이유 측정 |
| 데이터 이전·연속성 위험 | `clear everything`, `keeping a database` | Shelterluv, Petstablished 탐색자 | 성공적인 이전 경험도 존재 | 실제 샘플 이전 검증 필요 |
| 사람·조직 간 인계 | `unable to make changes`, `people records`, `move it in system` | Shelterluv, Pawlytics | 동일 제품 네트워크에서는 이관이 쉬움 | 조직 간 인계보다 조직 내 최신성부터 분리 측정 |
| 의료 루틴과 상태 동기화 | `medical reminders`, `medical section is cumbersome`, `FeLV/FIV checkboxes` | Petstablished, Pawlytics | 기본 의료 기능은 이미 제공 | 반복 기록·자동 상태변경의 효과 검증 |
| 지원·내부 IT 의존 | `non-existent`, `purely over email`, `our own TS`, `in-house` | Shelterluv, Chameleon | Pawlytics는 지원을 강점으로 평가 | 예외 해결시간과 업무 중단 측정 |
| 가격보다 총 운영비용 | `comes at a cost`, `hassle of switching`, `staff up to par` | 4사 | 저가·무료가 강한 도입 동기이기도 함 | 구독료보다 교육·우회·오류·이전 비용 측정 |

## 8. 반례 및 해석 주의사항

1. Shelterluv는 부정적인 플랫폼 전환기 리뷰와 높은 Capterra 평점·최근 공급사 개선 주장이 공존
2. Petstablished의 `too detailed`, `too many steps`, `too much time`은 한 작성자의 연속 표현. 독립 고객 3명의 반복 증거가 아님
3. Pawlytics에서 채택한 일부 불만은 2020~2023년 리뷰. 전자서명·모바일·맞춤 폼 등 현재 공식 기능과 충돌하는 과거 불만은 현행 결함에서 제외
4. Chameleon/CMS는 조직별 설정이 달라 동일 제품에서도 화면·기능키·보고 방식이 다를 수 있음
5. 긍정 리뷰는 공급사 추천·인센티브의 영향을, 부정 커뮤니티 글은 강한 사건을 가진 사용자의 자기선택 영향을 받을 수 있음
6. 의미 단위 수는 언급 빈도이며 고객 수·발생률·시장 크기가 아님

## 9. M1 인터뷰 질문으로 변환

| 리뷰 표현 | 인터뷰 질문·관찰 요청 | 확보할 증거 |
| --- | --- | --- |
| `too many steps` | “가장 최근 Intake 한 건을 처음부터 완료해 주세요. 건너뛴 필드와 나중에 다시 입력한 항목을 표시해 주세요.” | 단계·필드·시간·중단·재입력 |
| `using google spreadsheets` | “CRM이 있는데도 시트에서 관리하는 업무를 전부 열어 주세요. 각 도구를 쓰는 이유를 최근 사례로 설명해 주세요.” | 우회도구·업무·빈도·원인 |
| `unable to make changes` | “최근 임보·병원·쉘터 간 이동 한 건에서 누가 어떤 정보를 언제 변경했는지 재현해 주세요.” | 인계자·수신자·지연·재확인 |
| `medical reminders` | “지난 7일간 투약·백신·검사 누락을 어떻게 찾았는지 보여주세요.” | 알림·누락·독촉·확인시간 |
| `people records` | “임보자 한 명의 연락처, 수용 조건, 현재 동물, 과거 동물을 찾아 변경해 주세요.” | 검색시간·중복·역할 혼동 |
| `clear everything` | “최근 데이터 이전·일괄수정·병합에서 누락되거나 되돌린 사례를 보여주세요.” | 손실 필드·복구시간·검수법 |
| `a few months` | “신규 직원이 도움 없이 Intake·의료·입양을 끝낼 때까지 실제 교육 과정을 보여주세요.” | 교육시간·오류·도움 요청 |
| `support is non-existent` | “최근 지원 요청 3건의 문의·첫 응답·해결 시각과 업무 중단을 확인해 주세요.” | 응답시간·해결시간·영향 |
| `hassle of switching` | “현재 제품을 교체할 때 가장 잃기 두려운 데이터·기능·관계를 순서대로 말씀해 주세요.” | 잔류 이유·필수 보존 대상 |
| `all in one place` | “한 화면 또는 한 시스템에 모여 있어 실제로 줄어든 연락·검색·오류의 최근 사례를 보여주세요.” | 통합의 실질 효과 |

## 10. 경쟁제품 동일 과업 테스트

| 우선순위 | 과업 | 비교 지표 | 선정 근거 |
| ---: | --- | --- | --- |
| 1 | 신규 동물 Intake와 기존 기록 확인 | 완료시간·필드·재입력·오류 | `too many steps`, `too detailed` |
| 2 | 동물 위치·담당자 변경 및 인계 확인 | 변경시간·누락·재확인 연락 | `unable to make changes`, `move it in system` |
| 3 | 투약·백신 기록과 다음 일정 생성 | 단계·상태 자동갱신·누락 | `medical reminders`, `cumbersome` |
| 4 | 임보자·입양자·봉사자 검색과 역할 변경 | 검색시간·중복·역할 오류 | `people records` |
| 5 | 신규 직원의 기본 과업 수행 | 도움 없는 완료율·교육시간 | `a breeze`, `a few months` |
| 6 | 오류·예외 해결 | 복구시간·지원 의존·데이터 손실 | `clear everything`, `in-house` |
