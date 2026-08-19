# Amy 인터뷰 인사이트 — Hearts & Bones

> 2026-08-18 · 트랙 1 디스커버리 인터뷰 · 인터뷰어 조니 · Korean K9 Rescue(Gina) 네트워크 소개

## 결론 요약

이번 인터뷰는 Killer Feature를 확정한 자리가 아니라, 소규모 foster-based rescue의 운영 구조와 구매 의사결정 조건을 파악한 자리다. Amy는 foster/intake/adoption 실무자가 아닌 backend operations 및 vendor selection 담당자이며, 이 점을 여러 차례 명확히 밝혔다. 따라서 이 인터뷰의 신뢰도는 Buyer/Gatekeeper 관점에서는 높지만, 실무 pain 크기에 대해서는 간접 증언에 그친다.

가장 명확하게 확인된 것은 두 가지다. 하나는 foster update 수집 workflow가 제품화 가능성이 상대적으로 높은 pain이라는 점이다. 다른 하나는 현재 Shelterluv + Airtable + Slack 조합이 "불편하지만 굴러가는" 상태이고, 새 제품으로 전환하려면 기존 대비 명확한 operational value 또는 낮은 migration cost 중 하나를 보여줘야 한다는 점이다.

Hearts & Bones의 후속 단계로는 Amy가 아니라 Foster Program Manager와 Adoption Program Manager를 직접 만나는 것이 가장 합리적이다.

## 1. 응답자

| 항목 | 내용 |
| --- | --- |
| 조직 | Hearts & Bones — 뉴욕 기반, 100% remote/foster-based 동물 구조 단체. 501(c)(3). 물리적 shelter 없이 완전 분산 운영 |
| 역할 | Backend operations 및 vendor selection 담당자. 직접적인 foster/intake/adoption 업무는 수행하지 않으며, NY State 등록 주소가 Amy의 아파트일 정도로 완전히 분산된 운영 구조임을 Amy가 설명했다 |
| 규모 | 연 예산 $1M 미만, 직원 약 8명 |
| 사용 도구 | Shelterluv(동물·입양·custody 기록) + Airtable(foster database·medical·운영 정보) + Slack(내부 커뮤니케이션) + Google Workspace(공유 문서) |
| 도구 결정권 | Gatekeeper/Influencer 역할 — vendor criteria 설정·초기 screening·demo·후보 비교를 담당하고, 최종 결정권은 President Whitney와 CFO Kevin에게 있다 |
| 유입 | Korean K9 Rescue(Gina) 네트워크 소개(트랙 1). KK9R 소개가 없었다면 이 미팅이 성사되지 않았을 가능성이 높다고 Amy가 직접 언급했다 |

## 2. 현재 업무 방식

Hearts & Bones는 물리적 shelter 없이 완전 분산된 운영 구조다. 약 10~11일의 transport cycle을 중심으로 돌아간다.

- Texas의 partner shelter에서 구조 대상 동물을 선정하고, medical clearance·중성화를 가급적 Texas에서 완료한다
- 약 2주마다 한 번에 30~50마리를 New York으로 transport한다
- NYC에서는 foster 모집, adopter 모집, Foster-to-Adopt, adoption event가 동시에 진행된다

실제 workflow는 단순한 Intake → Adoption이 아니라, Origin shelter → Medical → Transport → Foster → Volunteer → Adoption event → Pet content/profile → Adopter → Compliance → 내부 staff coordination이 동시에 얽힌 구조다.

Foster 정보는 목적에 따라 두 시스템에 분리되어 존재한다.

- Shelterluv: 특정 dog의 temporary custodian 기록
- Airtable: foster의 위치·capacity·능력 등 person-level database

현재 조합이 다소 불편해도 실제로 굴러가고 있으며, Amy는 fragmentation 자체만으로는 새 시스템으로 갈아탈 만큼 큰 문제는 아니라고 평가했다.

## 3. 검증 대상 — Foster update 수집과 content 품질

Foster가 weekly update를 통해 사진·행동·성격·새로운 정보를 전달하는 과정에서 업무 문제가 반복적으로 발생한다.

> "the more information and photos we have, the easier it is to find fosters and adopters"

- 동물에 대한 정보와 사진이 많고 좋을수록 foster와 adopter를 찾기 쉽다고 Amy가 직접 밝혔다
- 문제는 foster가 volunteer이기 때문에 정보 제출을 강제할 수 없고, 계속 encourage/remind해야 하며, 사진 촬영 능력이 부족한 foster도 존재한다
- 이번 인터뷰에서 제품화 가능성이 상대적으로 가장 높은 pain으로 판단된다. 다만 Amy가 해당 업무의 daily user가 아니므로, Foster Program Manager 또는 Adoption Program Manager 인터뷰에서 재검증이 필요하다

### 3.1 함께 확인된 pain — Medical record 지연

Texas의 partner shelter가 인력 부족 등의 이유로 medical record를 pull list 완성 이후 한꺼번에 전달하는 경우가 있어, Hearts & Bones 쪽에서 정보 확보가 지연되고 foster/adopter 모집에도 영향을 준다. Amy 본인이 "상대 shelter의 프로세스 때문에 발생하므로 시스템으로 해결 가능한 문제인지 모르겠다"고 직접 인정했다. Pain 크기는 크지만 소프트웨어로 직접 해결하기 어려운 영역이다.

### 3.2 약화된 가설 — Interstate transport compliance

Amy는 평상시 interstate transit이 국제 이동과 달리 큰 regulatory burden이 아니라고 직접 설명했다. 이번 Texas→Oklahoma 운영 변경 사례는 software/system problem이 아니라 sourcing problem에 가깝다고 반복해서 강조했다. 미국 rescue의 주요 pain으로 cross-state transport compliance를 가정한 가설은 이 인터뷰에서 약화됐다.

## 4. 데모 반응

데모 미진행. 조니의 제품 방향성 소개(foster check-in, micro-customization)에 대한 반응이다.

| 항목 | 반응 |
| --- | --- |
| 제품 방향 첫인상 | Mobile-friendly foster communication 및 fragmented data를 연결하는 방향에 관심을 보였다 |
| micro-customization 소개 후 반응 | "helpful"하다고 평가했다 |
| 당장 전환 | 낮음 — 아직 상용화되지 않고 미국 고객 reference가 없는 플랫폼으로 바로 전환할 가능성은 낮다고 Amy가 명확히 밝혔다 |
| 전환을 막은 갭 | ①미국 고객 reference/case study 부재 ②US timezone 실시간 customer support 미확인 ③onboarding·migration 부담 ④명확한 가격 미확정 |
| 지불 의향 | 조니가 직접 묻지 않았다. 조니가 기준점으로 제시한 약 $99/month 수준에 Amy가 이의를 제기하지 않았으나, 가격 구조가 아직 확정되지 않은 상태임을 조니가 명시했다 |
| 마무리 | Whitney에게 내용을 전달하고 다른 staff에게 인터뷰 의향을 확인하겠다고 했다 |

## 5. 발언 뒤에 있는 것

> 여기 적은 것은 사실이 아니라 해석이다. 각 항목에 인식적 지위를 함께 표기한다 — `[검증됨·L0]` `[단일근거·L1]` `[추론·L2]` `[해석·L3]` `[의견·L4]`

- **Amy의 pain 신뢰도는 Buyer 관점에 한정됨** — Amy는 foster/intake/adoption 업무를 직접 수행하지 않는다고 여러 차례 밝혔다 [검증됨·L0]. 따라서 foster update 수집이 실제 업무에서 얼마나 빈번하고 심각한지는 Amy의 발언만으로는 확인되지 않는다 [추론·L2]. Amy의 증언은 구매 의사결정 구조와 도구 선택 기준에 관해서는 높은 신뢰도를 가지지만, 실무 pain 크기에 대해서는 간접 증언으로 다루는 편이 맞다 [해석·L3]

- **현재 stack이 진짜 경쟁자** — Hearts & Bones는 Salesforce migration을 시작했다가 비용·시간 문제로 중단한 이력이 있다 [검증됨·L0]. Amy는 Shelterluv + Airtable + Slack 조합이 불편해도 실제로 굴러가고 있다고 밝혔다 [검증됨·L0]. 기능이 더 많거나 더 modern한 제품만으로는 switching reason으로 부족하며 [추론·L2], 명확한 operational value 또는 낮은 migration cost 중 하나를 보여줘야 한다는 구매 조건을 Amy가 직접 확인했다 [검증됨·L0]

- **GTM에서 warm referral의 역할** — Amy가 KK9R 소개 없이는 이 미팅을 하지 않았을 가능성이 높다고 직접 언급했다 [검증됨·L0]. Rescue community 안에서 소개와 도움을 주고받는 구조가 있다고 설명했다 [검증됨·L0]. 다만 이 관찰은 한 조직에서 나온 것이므로, 시장 전체의 acquisition model로 확정하기에는 이르다 [추론·L2]

- **AI photo manipulation에 대한 부정적 반응** — Amy는 rescue dog는 "cute but real"해야 하며, 실제 환경을 왜곡한 사진은 adoption marketing에 적절하지 않다고 명확히 말했다 [검증됨·L0]. 반면 촬영 가이드나 photo quality coaching 방향에 대해서는 가능성 있는 아이디어로 반응했다 [단일근거·L1]

## 6. 언급된 기능 요청

Amy가 언급하거나 관심을 보인 기능 방향이다. Amy는 일상 실무자가 아니므로, 제품에 반영할지는 Foster/Adoption 담당자 인터뷰와 함께 본 뒤에 판단한다.

| 항목 | 발언 맥락 |
| --- | --- |
| Mobile-friendly foster check-in | Amy가 가장 명확하게 관심을 표한 방향이다. fragmented data를 연결하는 접근과 함께 언급했다 |
| Photo quality coaching | dog photography training을 해본 적은 없지만 Amy가 가능성 있는 아이디어로 반응했다. AI로 조작하지 않은 authentic 사진을 지원하는 방향이다 |
| Shelterluv/Airtable 연동 | 별도 교체보다 기존 환경과 연결하는 방향에 Amy가 관심을 보였다. migration risk 최소화가 전제다 |
| Micro-customization | intake field 추가·제거 등 rescue별 workflow 차이를 반영하는 기능에 대해 Amy가 "helpful"하다고 평가했다 |

## 7. 남은 것

1. **Foster Program Manager 인터뷰** — foster 모집·선정·matching·update reminder·missing update 처리·시스템 간 중복 작업을 직접 담당하는 실무자. Amy가 언급한 foster update pain을 재검증하는 가장 중요한 다음 단계다
2. **Adoption Program Manager 인터뷰** — 어떤 foster 정보가 실제 adoption에 중요한지, pet profile 작성에 걸리는 시간, content 부족이 inquiry에 미치는 영향을 확인
3. **Hearts & Bones 내부 후속** — Amy가 Whitney에게 내용을 전달하고 다른 staff 인터뷰 의향을 확인하겠다고 했다. 후속 연락 시 소규모 rescue를 대상으로 설계 중이며 enterprise pricing이 아니라는 점을 사전에 전달하면 접근 barrier를 낮출 수 있다

---

## 부록. 검증 범위 밖에서 나온 것

이번 라운드의 검증 대상이 아니므로 판단하지 않고 기록만 남긴다.

### A. Foster matching — 추가 검증 필요

Airtable로 location·capacity 등을 관리하면서, 동시에 staff가 경험적으로 "누가 nursing mom을 잘 맡는지" "누가 특정 needs의 dog에 적합한지"를 알고 직접 연결하는 형태도 존재한다. Amy는 적합한 foster가 많을수록 Texas에서 더 많은 dog를 데려올 수 있다고 언급했다. Foster capability/history를 구조화하는 방향은 검증 가치가 있으나, 다음을 먼저 확인해야 한다: 실제 matching에 몇 분/시간이 걸리는가, 실패가 얼마나 자주 발생하는가, 담당자 개인 기억에 의존하는 것이 실제 operational risk인가.

### B. Pricing 맥락

다른 staff를 인터뷰에 참여시키기 전에 Amy가 먼저 가격 수준을 확인했다. 가격이 감당할 수 없는 수준이라면 staff의 업무 시간을 vendor의 market research에 쓰고 싶지 않다는 취지였다. 소규모 rescue에서 staff attention 자체가 희소 자원임을 보여주는 신호다. 이후 인터뷰 접근 시 enterprise pricing이 아니라는 점을 사전에 전달하면 초기 접근 barrier를 낮출 수 있다.
