# Beatrice Humane Society — Carlee Fiddes 인터뷰 인사이트

> **한 줄 결론**: Foster check-in 누락 통증이 명확하고 ROI 논리도 강하다. 단 **PetPoint 연동 여부가 사실상 도입 조건**이며, 파일럿 의지는 있으나 유료 전환까지는 연동 구현이 선행되어야 한다.

---

## 1. 응답자

| 항목 | 내용 |
|---|---|
| 이름 | Carlee Fiddes |
| 직함 | Executive Director |
| 조직 | Beatrice Humane Society (Nebraska, 501(c)(3)) |
| 규모 | 연 ~700두 위탁·입양, 임보 풀 ~60, 동시 활성 5~15 (성수기 15~20) |
| 콜 일자 | 2026-08-27 |
| 소재 | B 추정 (PDF 미명시 — 임보 check-in 자동화 중심 내용 기반) |
| 역할 | 운영·의료·커뮤니케이션 직접 담당 (Director 1인 실무 겸임 구조) |

---

## 2. 현재 업무 방식

- **주요 도구**: PetPoint (intake·adoption·디지털 결제·개체 위치 추적에 핵심으로 활용, 임보 모듈은 최소한으로만 활용) + Facebook Messenger + Email + 셸터 전화·문자
- **Foster check-in 흐름**: 계획 타임라인에 따라 관리하나, staff 시간 부족으로 check-in이 생략되거나 누락을 **계획 대비 2~3주 후에야** 발견하는 사례 발생
- **임보자 거주지 분포**: Lincoln 소재 비중이 절반 이상 (셸터에서 45분 거리), 물품 수급은 별도 운송으로 처리

---

## 3. 검증 대상

| 가설 | 결과 |
|---|---|
| Foster check-in 누락이 실제 운영 통증인가 | **확인** — 2~3주 지연 발견 사례와 staff 생략 직접 진술 |
| 시스템 자동화 JTBD가 있는가 | **확인** — "누구에게 언제 check-in해야 하는지 사람이 기억하지 않아도 시스템이 정기적으로 실행하고 누락을 보여줬으면" |
| Add-on fit인가 CRM 교체인가 | **Add-on** — PetPoint 유지를 전제로 병행 구조 선호 |
| 입양 공고 통증이 있는가 | **약함** — PetPoint가 이미 실시간 웹 업데이트를 처리하므로 우선순위 낮음 |

---

## 4. 데모 반응

- Pilot·PoC 협력 의사 명확: *"I would be interested in seeing that"*
- 단, **Formal Pilot Commitment 없음** — 관심 단계
- **PetPoint auto-pull 연동 가능 여부를 핵심 조건으로 명시**
- Petify → PetPoint full sync가 어렵더라도, Petify로 수신한 JPEG·텍스트를 수동으로 업로드하는 방식은 **"10-second problem"으로 감당 가능**하다고 판단

---

## 5. 발언 뒤에 있는 것

- **ROI 논리가 매우 강함** [검증됨·L0]: Foster Coordinator 추가 채용 회피·지연을 비용 절감으로 규정하고, 소프트웨어 비용 정당화 논리를 직접 제시
- **PetPoint 연동 = 실질 도입 조건** [검증됨·L0]: 연동 없이는 이중 입력이 생기고, 이것이 실제 도입 장벽임을 명확히 언급
- **지불 의향: 초기-중간** [가설·L2]: ROI 논리는 강하나 가격대·예산 범위·결재 절차 미확인
- **Design Partner 가치 높음** [가설·L2]: Nebraska 소재 소규모 셸터로서 PetPoint를 주력으로 활용하며, 연동 피드백 제공에 적합

---

## 6. 언급된 기능 요청

| 기능 | 맥락 |
|---|---|
| 자동 check-in 발송 및 누락 알림 | 핵심 JTBD — 담당자가 기억하지 않아도 시스템이 정기적으로 실행 |
| PetPoint 연동 (auto-pull) | 사실상 도입 핵심 조건 |
| Foster update 수신 (JPEG·텍스트) | 수동 업로드 방식도 감당 가능한 것으로 판단 |

---

## 7. 남은 것

- **PetPoint 연동 범위 확인**: auto-pull 구현 가능 여부·일정이 도입 속도를 좌우
- **가격대·예산·결재 절차 미확인**: 유료 전환 가능성을 판단하는 데 필수
- **PoC 설계**: 기능·기간·성공 기준을 Carlee와 구체화해야 함
- **Shelter-to-Shelter Record Portability 탐색**: 개체 이관 시 기록 재입력 통증이 신규 통증 축으로 확인

---

## 부록

**신규 통증 발견 — Shelter-to-Shelter Record Portability**

개체를 타 셸터로 이관할 때 기존 medical·admin 기록을 재입력해야 하는 문제를 언급함. 현재 Petify 범위 밖이나, 중장기 포지셔닝 검토가 가능한 인접 통증 축.
