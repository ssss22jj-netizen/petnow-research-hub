# Eve 인터뷰 인사이트

> 2026-08-17 · 43분 · 인터뷰어 조니

## 결론 요약

소재 B가 겨냥한 **임보자 체크인 회수**가 셸터 위탁 담당자의 어려움으로 지목됐다. 다만 응답자는 그 셸터의 자원봉사자이고 셸터 소프트웨어 접근권이 없어, 이 콜은 도입 판단이 아니라 간접 증언으로 다룬다. 후속으로 카운티 실무자 소개를 수락했다.

응답자가 셸터 사용 제품으로 언급한 **PetPoint**(도구명 미확정, 응답자 회신 대기)는 신규 기능 개발이 종료되고 후속 제품 **24PetShelter**로 마이그레이션이 예고된 상태다. 후속 제품이 클라우드·모바일 퍼스트를 정면으로 내걸었으므로 예의주시가 필요하다. 상세는 부록 B.

## 1. 응답자

| 항목 | 내용 |
| --- | --- |
| 조직 | Simba's Pride Nursery — 임보 기반 고양이·새끼고양이 레스큐. 2025년 설립한 501(c)(3) |
| 역할 | 창립자·디렉터. 실질적으로 혼자 운영 |
| 규모 | 상시 고양이 10~20마리 |
| 사용 도구 | Airtable. 셸터가 제공하지 않아 **본인 비영리 자금으로 직접 결제.** 카메라·라이트박스도 자가 세팅 |
| 도구 결정권 | 자기 조직에 한해 있음 |
| 유입 | B 소재(`b2_noanswer`) |
| 배경 | 전직 컴퓨터 수리업 운영, 모친이 프로그래머, `i've done all the software development side of things`. 피드백이 기능 단위로 구체적인 배경 |

**함께 언급된 셸터** — 응답자가 자원봉사자로 참여하는 곳이며, 이 인터뷰의 셸터 관련 정보는 전부 이곳 이야기다.

- Craven County(노스캐롤라이나) 보건부 산하 **단일 셸터**. 응답자는 자기 비영리를 운영하면서 이곳 자원봉사자로 일하고, 데려오는 개체 전부를 이 셸터에서 받는다
- 위탁 프로그램에 고양이가 100마리 정도 있다고 했고, 셸터 자체는 수용 한계에 있다고 덧붙였다. 본인 추정치다
- **셸터 도구는 PetPoint라고 답했다.**
- 셸터 소프트웨어에 **접근권이 없다** — `i don't have access to their software`. 셸터 측 정보는 모두 전언과 관찰에 기반한다
- 위탁 프로그램이 공식화되지 않았고 예산도 배정되지 않았다 — `they don't have an official foster program... i don't believe they have a budget`. 응답자가 프로그램 정착을 도우며 지방정부 승인까지 끌고 가려 하고 있다
- 직접 돌보는 마릿수를 더 늘릴 수 없다고 본인이 말했다(`i'm maxed out with the physical side`). 그래서 마릿수 대신 셸터의 프로그램·워크플로우 개선으로 기여 방식을 옮기려 한다 — `if i can't help more cats than i am currently maybe i can help with workflow management`

## 2. 현재 업무 방식

- 셸터 인테이크와 **본인 인테이크가 이중으로 돈다.** 셸터가 수의 검진·투약을 하고, 데려온 뒤 본인이 벼룩·체중·체온을 다시 확인
- Airtable에 사진·성별·체중·체온·의료 이슈·백신 예정일·투약을 기록. **3개월 미만은 매일 체중을 기록**하고 이후 중단
- 입양 준비가 되면 본인 라이트박스로 촬영 → 셸터가 사진을 받아 업로드 → 셸터 소프트웨어가 **AdoptAPet에 연동**
- 셸터로 돌려보내지 않고 집에서 입양 희망자를 만나는 방식을 선호

## 3. 검증 대상 — 임보자 체크인 회수 (소재 B)

> "i love the ease that fosters can check in with. that is actually exactly why i [signed up] with these guys is because i know our foster program, our **foster lead has trouble getting fosters to check in and provide the right information**, provide the right details, provide what's needed to keep their records up to date"

- 셸터 위탁 담당자가 임보자로부터 체크인과 필요 정보를 받아내는 데 어려움을 겪는다. **이 문제를 겪는 쪽은 임보자가 아니라 셸터 담당자다**
- "그것이 신청 이유였다"는 연결은 대괄호 구간이 전사 오인식이라 **확정 전 영상 확인이 필요하다** (30분대 초반). 소재 B 가설의 검증 근거로 인용하려면 이 확인이 선행돼야 한다
- 응답자 본인은 이 문제로 크게 불편을 겪지 않는다. Airtable로 처리하고 있다 — `air table's fine if we haven't had an influx of cats`

## 4. 데모 반응

| 항목 | 반응 |
| --- | --- |
| 첫 인상 | 체크인이 쉽다는 점을 먼저 언급 |
| 현행 대비 | 모바일 대응을 최대 차이로 꼽았다. 단 Airtable의 구조적 한계가 아니라 **본인이 인터페이스를 아직 만들지 않았기 때문**이다 — `mainly because i haven't built some of the interfaces... i could fix that i just haven't done it` |
| 당장 전환 | **아니오.** 보완재로 병행하겠다 — `it's close but i would supplement` |
| 전환을 막은 갭 | ①3개월 미만 개체의 **일일 체중 추적** ②개체별로 다른 항목을 넣을 **커스터마이즈 필드** |
| 지불 의향 | 미확인 |
| 마무리 | 제품이 나오기를 기다리는 쪽에 가까운 인사로 끝났다 — `i'm really looking forward to seeing what you guys make` |

## 5. 발언 뒤에 있는 것

> 사실이 아니라 해석이다. 인식적 지위를 병기한다 — `[검증됨·L0]` `[단일근거·L1]` `[추론·L2]` `[해석·L3]` `[의견·L4]`

- **신청 동기가 자기 업무 개선이 아닐 가능성** — 신청 이유를 말할 때 주어가 자신이 아니라 `our foster lead`였고, 자기 기록 업무는 이미 Airtable로 처리해둔 상태다 [단일근거·L1]. 셸터의 위탁 프로그램 정착을 돕는 중이라고 직접 말했으므로 [검증됨·L0], **자기 도구를 찾으러 온 것이 아니라 셸터에 제안할 것을 보러 왔을 수 있다** [해석·L3]. 이 독법이 맞다면 이 리드의 가치는 구매자가 아니라 소개·전달 경로이고, 소개 요청에 즉답으로 응한 것과 방향이 맞는다 [추론·L2]
- **커스터마이즈 필드 요구는 그대로 일반화하기 어렵다** — Airtable을 직접 구성해 쓰는 사용자이고 개발 이력이 있다 [검증됨·L0]. 일반적인 셸터 담당자가 같은 것을 요구할지는 이 한 건으로 알 수 없다 [추론·L2]
- **첫인상의 호평을 채택 의향으로 읽기는 어렵다** — 10분 뒤 전환 여부를 묻자 보완재로 병행하겠다는 답이 나왔다 [검증됨·L0]. 호평은 호의를 표한 정도로 보는 편이 맞다 [추론·L2]
- **물품 추적은 응답자가 실제로 겪고 있는 문제로 보인다** — `it looks miscellaneous but very important to the foster care`라며 스스로 중요성을 덧붙여 말했다 [검증됨·L0]. 사소하게 들릴까 걱정하면서도 꺼냈다는 점에서 본인에게 우선순위가 높은 사안으로 읽힌다 [추론·L2]

## 6. 언급된 기능 요청

이 인터뷰에서 나온 것을 그대로 옮긴 목록이다. 표본 1건이므로 **반영 판단은 다른 콜과 함께 본 뒤에** 한다.

| 항목 | 발언 맥락 |
| --- | --- |
| 커스터마이즈 필드 | 개체별로 추적 항목이 다르다. 예시로 검사 결과(분변·FeLV·파보) 제시. 전환을 막은 갭 |
| 일일 체중 추적 | 3개월 미만 개체는 매일 기록. 전환을 막은 갭 |
| 예정 일정 섹션 | 합의된 방문·백신 일정 표시, 임보자가 방문 예정일을 회신하는 형태 |
| 물품 요청 | `does this cat need diapers, do you need to request diapers` — 체크인 폼 항목으로 붙이는 형태 |
| 백신 만기 조회 | 위탁 중 개체의 백신 예정일 일괄 조회. 셸터 담당자 전언 기반 |

## 7. 남은 것

1. **셸터 도구명 확인** — 응답자가 이메일로 회신 예정
2. **소개 회수** — 카운티 실무자 소개를 이메일로 요청 (콜에서 조니가 후속 메일 약속)
3. **인용 검증** — 3절 인용 구간을 영상으로 확인. 소재 B 가설 근거로 쓰려면 선행 필요

---

## 부록. 검증 범위 밖에서 나온 것

이번 라운드의 검증 대상이 아니므로 판단하지 않고 기록만 남긴다.

### A. 물품 추적 — 기존 가설에 없던 축

> "**supplies tracking is the biggest.** the shelter is not tracking how many of the fosters are kittens and need wet food, and so they're not ordering enough... therefore **fosters are having to go buy that themselves**"
>
> "it's not something that's being tracked anywhere, it would just have to be on the top of someone's mind to do. and as you guys are probably very well aware of, **if it's not written down somewhere or in software somewhere no one's going to remember**"

- "마법처럼 하나만 고칠 수 있다면"이라는 질문의 답이었다. 기존 가설 네 종이 모두 정보와 기록을 다루는 데 비해, 이것은 **물자와 재고를 다루는 문제**다
- 셸터가 위탁 물품(사료·모래·약·패드·이동장)을 공급하지만, 위탁 중인 개체가 성묘인지 새끼고양이인지 세지 않아 필요량을 산정하지 못한다. 그래서 부족분을 **임보자가 자기 돈으로 사고 있다**
- 계산 자체는 어렵지 않다 — 본인이 산식을 제안했다(`kittens × 하루 1캔 × 7일`)
- 표본 1건이고 임보자 관점이므로 **소스로 쌓아두는 선까지만** 둔다. 이후 콜에서 반복되면 판단 재료가 된다

### B. 조직·경쟁 맥락

- Craven County 셸터는 산타바바라와 같은 **카운티 정부 산하 공공 구조**다. 다만 위탁 프로그램이 공식화되지 않았고 예산도 없어 도입 예산 확보 난이도는 더 높을 수 있다
- 셸터가 PetPoint를 쓰는 것으로 확인되면, PetPoint는 신규 기능 개발이 종료되고 후속 제품(24PetShelter)으로 마이그레이션이 예고된 상태다. 도구명 확인이 선행돼야 의미가 있다

### C. 녹취록

- 콜 전문(43분): [Eve 인터뷰 녹취록](https://ssss22jj-netizen.github.io/petnow-research-hub/#/doc/YW5hbHlzaXMvRXZl7J247YSw67ewX-uFuey3qOuhnV8yMDI2MDgxNy5tZA)
- 자동 전사본이라 문장부호·고유명사에 오인식이 있다. 인용 전 원본 영상 확인 권장
