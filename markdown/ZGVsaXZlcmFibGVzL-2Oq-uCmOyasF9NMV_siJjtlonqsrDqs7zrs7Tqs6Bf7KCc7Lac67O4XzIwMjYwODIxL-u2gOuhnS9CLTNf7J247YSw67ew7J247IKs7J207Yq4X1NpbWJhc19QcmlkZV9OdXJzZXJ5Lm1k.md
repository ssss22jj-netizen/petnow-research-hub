# Eve 인터뷰 인사이트

> 2026-08-17 · 43분 · 인터뷰어 조니 · [인터뷰 영상](https://app.notion.com/p/petnow/2026-08-17-Eve-Simba-s-Pride-Nursery-3c0a083a5cff80abbc8cc9cd1a41ba1a?source=copy_link)

## 결론 요약

응답자는 소재 B가 겨냥한 **임보자 체크인 회수**를 셸터 위탁 담당자가 겪는 어려움으로 짚었고, 이것이 데모를 신청한 이유라고 직접 밝혔다. 다만 응답자는 그 셸터의 자원봉사자이고 셸터 소프트웨어에 접근할 권한이 없으므로, 이 콜은 도입 여부를 판단하는 자리가 아니라 간접 증언으로 다룬다. 후속으로는 카운티 실무자를 소개해 주겠다는 제안을 응답자가 받아들였다.

응답자가 셸터에서 쓰는 제품으로 언급한 **PetPoint**는 신규 기능 개발을 이미 종료했고, 후속 제품인 **24PetShelter**로 마이그레이션한다고 예고한 상태다(도구명은 아직 확정되지 않았고, 응답자 회신을 기다리고 있다). 그 후속 제품이 클라우드·모바일 퍼스트를 정면으로 내걸었으므로 계속 지켜볼 필요가 있다. 상세는 부록 B.

## 1. 응답자

| 항목 | 내용 |
| --- | --- |
| 조직 | Simba's Pride Nursery — 임보를 기반으로 하는 고양이·새끼고양이 레스큐 단체. 2025년에 설립한 501(c)(3) |
| 역할 | 창립자 겸 디렉터. 사실상 혼자 운영한다 |
| 규모 | 상시로 고양이 10~20마리를 돌본다 |
| 사용 도구 | Airtable을 쓴다. 셸터가 제공해 주지 않아 **본인 비영리 자금으로 직접 결제한다.** 카메라와 라이트박스도 직접 갖췄다 |
| 도구 결정권 | 자기 조직 안에서만 있다 |
| 유입 | B 소재(`b2_noanswer`)를 보고 들어왔다 |
| 배경 | 전에 컴퓨터 수리업을 운영했고 모친이 프로그래머다. 본인도 `i've done all the software development side of things`라고 말했다. 피드백이 기능 단위로 구체적인 이유가 여기에 있다 |

**함께 언급된 셸터** — 응답자가 자원봉사자로 참여하는 곳이며, 이 인터뷰에 나오는 셸터 관련 정보는 전부 이곳 이야기다.

- Craven County(노스캐롤라이나) 보건부 산하의 **단일 셸터**다. 응답자는 자기 비영리를 운영하면서 이곳 자원봉사자로도 일하고, 데려오는 개체는 전부 이 셸터에서 받는다
- 응답자는 위탁 프로그램에 고양이가 100마리 정도 있다고 했고, 셸터 자체도 수용 한계에 와 있다고 덧붙였다. 본인의 추정치다
- **셸터가 쓰는 도구는 PetPoint라고 답했다.**
- 응답자는 셸터 소프트웨어에 **접근할 권한이 없다** — `i don't have access to their software`. 따라서 셸터 쪽 정보는 모두 응답자의 전언과 관찰에 기반한다
- 셸터의 위탁 프로그램은 아직 공식화되지 않았고 예산도 배정되지 않았다 — `they don't have an official foster program... i don't believe they have a budget`. 응답자는 이 프로그램이 자리 잡도록 도우면서 지방정부 승인까지 받아내려 하고 있다
- 응답자는 자기가 직접 돌보는 마릿수를 더 늘릴 수는 없다고 말했다(`i'm maxed out with the physical side`). 그래서 마릿수를 늘리는 대신, 셸터의 프로그램과 워크플로우를 개선하는 쪽으로 기여 방식을 옮기려 한다 — `if i can't help more cats than i am currently maybe i can help with workflow management`

## 2. 현재 업무 방식

- 셸터의 인테이크와 응답자 본인의 인테이크가 **이중으로 돌아간다.** 셸터가 수의 검진과 투약을 하고, 개체를 데려온 뒤에 응답자가 벼룩·체중·체온을 다시 확인한다
- Airtable에 사진·성별·체중·체온·의료 이슈·백신 예정일·투약을 기록한다. **생후 3개월 미만인 개체는 매일 체중을 기록**하고, 3개월이 지나면 중단한다
- 입양 준비가 끝나면 본인이 라이트박스로 촬영한다 → 셸터가 그 사진을 받아 업로드한다 → 셸터 소프트웨어가 **AdoptAPet으로 연동한다**
- 개체를 셸터로 돌려보내지 않고 자기 집에서 입양 희망자를 만나는 방식을 선호한다. 입양이 확정되면 중성화 예약을 잡는다
- 입양되지 않고 **주(州) 밖의 다른 셸터로 이송**되는 개체도 있다
- 셸터에는 디렉터를 겸하는 상근 수의사가 있어서, 인테이크 단계의 검진과 투약 준비를 맡는다. 임보자는 그 뒤에 벼룩 처리와 행동 교정(발톱깎이·청소기·사람 접촉 적응)을 담당한다

## 3. 검증 대상 — 임보자 체크인 회수 (소재 B) `31:03`

> "i love the ease that fosters can check in with. that is actually exactly why i [signed up] with these guys is because i know our foster program, our **foster lead has trouble getting fosters to check in and provide the right information**, provide the right details, provide what's needed to keep their records up to date"

- 셸터의 위탁 담당자는 임보자에게서 체크인과 필요한 정보를 받아내는 데 어려움을 겪는다. **이 문제를 겪는 쪽은 임보자가 아니라 셸터 담당자다**
- **응답자는 이 문제를 데모 신청 이유로 직접 밝혔다**
- 응답자 본인의 임보 업무는 Airtable로 처리하고 있으나, **개체 유입이 몰리거나 바쁠 때는 그것으로 감당되지 않는다고 조건을 달았다** — `air table's fine if we haven't had an influx of cats or busy`

### 3.1 함께 확인된 통증 — 백신 만기 조회 `22:38`

"최근에 추적이 어려워진 순간"을 묻자, 응답자가 첫 답으로 꺼낸 것이 백신이다. 검증 대상과 마찬가지로 **임보 중 기록 관리**에 속하는 문제다.

> "the foster lead for them doesn't think it's necessarily very easy to find **which vaccine they're due for the fosters all at once**... if we miss the day of the vaccine, looking up who's due — yes you can figure that out, **it just takes a bit more work**"

- 셸터의 위탁 담당자는 임보 중인 개체의 접종 예정일을 **한 번에 모아 보기 어려워한다**
- 응답자 본인도 접종일을 놓친 뒤 대상을 찾을 때는 수작업이 더 든다고 말했다. 못 할 일은 아니지만 손이 간다는 뜻이다
- 즉 이 통증은 셸터 담당자와 임보자 양쪽에 걸쳐 있다

## 4. 데모 반응

| 항목 | 반응 |
| --- | --- |
| 첫 인상 | 체크인이 쉽다는 점을 먼저 언급했다 |
| 현행 대비 `32:10` | 지금 쓰는 도구와의 가장 큰 차이로 모바일 대응을 꼽았다. 다만 이는 Airtable이 구조적으로 못 하는 일이어서가 아니라 **응답자가 아직 인터페이스를 만들어 두지 않았기 때문**이다 — `mainly because i haven't built some of the interfaces... i could fix that i just haven't done it` |
| 당장 전환 `37:15` | **아니오.** 기존 도구와 병행하는 보완재로 쓰겠다고 답했다 — `it's close but i would supplement` |
| 전환을 막은 갭 `33:43` | ①생후 3개월 미만 개체의 **일일 체중 추적** ②개체마다 다른 항목을 넣을 수 있는 **커스터마이즈 필드** |
| 지불 의향 | 묻지 않았다. 당장 쓰겠느냐는 질문에 아니라고 답해 가격까지 전개하지 않았다 |
| 마무리 | 제품이 나오기를 기다리는 쪽에 가까운 인사로 끝났다 — `i'm really looking forward to seeing what you guys make` |

## 5. 발언 뒤에 있는 것

> 여기 적은 것은 사실이 아니라 해석이다. 각 항목에 인식적 지위를 함께 표기한다 — `[검증됨·L0]` `[단일근거·L1]` `[추론·L2]` `[해석·L3]` `[의견·L4]`

- **신청 동기가 자기 업무 개선이 아닐 가능성** — 신청 이유를 말할 때 응답자가 주어로 세운 것은 자신이 아니라 `our foster lead`였고, 자기 기록 업무는 이미 Airtable로 처리해 둔 상태다 [단일근거·L1]. 셸터의 위탁 프로그램을 정착시키는 일을 돕고 있다고 직접 말했으므로 [검증됨·L0], **자기가 쓸 도구를 찾으러 온 것이 아니라 셸터에 제안할 것을 보러 왔을 수 있다** [해석·L3]. 이 독법이 맞다면 이 리드의 가치는 구매자에 있지 않고 소개와 전달의 경로에 있으며, 응답자가 소개 요청에 즉답으로 응한 것도 그 방향과 맞는다 [추론·L2]
- **커스터마이즈 필드 요구는 그대로 일반화하기 어렵다** — 응답자는 Airtable을 직접 구성해 쓰는 사용자이고 개발 이력도 있다 [검증됨·L0]. 일반적인 셸터 담당자도 같은 것을 요구할지는 이 한 건으로 알 수 없다 [추론·L2]
- **첫인상의 호평을 채택 의향으로 읽기는 어렵다** — 10분 뒤에 전환할 생각이 있는지 묻자, 보완재로 병행하겠다는 답이 돌아왔다 [검증됨·L0]. 첫인상의 호평은 호의를 표한 정도로 보는 편이 맞다 [추론·L2]
- **물품 추적은 응답자가 실제로 겪고 있는 문제로 보인다** — 부족분을 자기 돈으로 사고 있고 [검증됨·L0], "하나만 고칠 수 있다면"이라는 질문에 이것을 답으로 골랐다 [검증됨·L0]. 셸터에 산식까지 이미 제안해 둔 상태이므로 [검증됨·L0], 여러 번 생각해 온 사안으로 읽힌다 [추론·L2]

## 6. 언급된 기능 요청

이 인터뷰에서 나온 요청을 그대로 옮긴 목록이다. 사례가 한 건뿐이므로 **제품에 반영할지는 다른 콜과 함께 본 뒤에** 판단한다.

| 항목 | 발언 맥락 |
| --- | --- |
| 커스터마이즈 필드 | 개체마다 추적할 항목이 다르다고 했다. 예시로 검사 결과(분변·FeLV·파보)를 들었다. 전환을 막은 갭 가운데 하나다 |
| 일일 체중 추적 | 생후 3개월 미만 개체는 체중을 매일 기록한다. 전환을 막은 갭 가운데 하나다 |
| 예정 일정 섹션 | 합의된 방문·백신 일정을 보여 주고, 임보자가 방문 예정일을 회신하는 형태다 |
| 물품 요청 | `maybe a supplies section like hey this specific dog or cat needs diapers so do you need more diapers` — 체크인 폼에 항목으로 붙이는 형태다 |
| 백신 만기 조회 | 위탁 중인 개체의 백신 예정일을 한 번에 모아 보는 화면이다. 3.1 참조 |

## 7. 남은 것

1. **셸터 도구명 확인** — 응답자가 이메일로 회신하기로 했다 (`08:52`에 약속)
2. **카운티 실무자 소개 요청** — 소개를 이메일로 요청한다 (콜에서 조니가 후속 메일을 보내기로 약속했다)
3. **제품 업데이트 후속 연락** — 콜에서 조니가 계속 연락해도 되겠느냐고 물어 응답자의 동의를 받았다 (`41:02`)

---

## 부록. 검증 범위 밖에서 나온 것

이번 라운드의 검증 대상이 아니므로 판단하지 않고 기록만 남긴다.

### A. 물품 추적 — 기존 가설에 없던 축 `38:52`

> "**supplies tracking is the biggest.** the shelter is not tracking how many of the fosters are kittens and need wet food, and so they're not ordering enough... therefore **fosters are having to go buy that themselves**"
>
> "it's not something that's being tracked anywhere, it would just have to be on the top of someone's mind to do. and as you guys are probably very well aware of, **if it's not written down somewhere or in software somewhere no one's going to remember**"

- "마법처럼 하나만 고칠 수 있다면"이라는 질문에 응답자가 내놓은 답이다. 기존 가설 네 종이 모두 정보와 기록을 다루는 데 비해, 이 문제는 **물자와 재고를 다룬다**
- 셸터가 위탁 물품(사료·모래·약·패드·이동장)을 공급하기는 하지만, 위탁 중인 개체가 성묘인지 새끼고양이인지를 세지 않아 필요량을 산정하지 못한다. 그래서 모자라는 만큼을 **임보자가 자기 돈으로 사고 있다**
- 계산 자체는 어렵지 않다. 응답자가 셸터에 산식을 이미 제안해 뒀다 — `let's say one wet food can a day times that and that should be your weekly input`
- 사례가 한 건뿐이고 임보자 관점이므로, 지금은 **소스로 쌓아 두는 선까지만** 둔다. 이후 콜에서 같은 이야기가 반복되면 그때 판단 재료가 된다

### B. 조직·경쟁 맥락

- Craven County 셸터는 산타바바라와 마찬가지로 **카운티 정부 산하의 공공 구조**다. 다만 위탁 프로그램이 공식화되지 않았고 예산도 없어서, 도입 예산을 확보하는 난이도는 더 높을 수 있다
- 셸터가 PetPoint를 쓰는 것으로 확인된다면, PetPoint는 신규 기능 개발을 종료하고 후속 제품(24PetShelter)으로 마이그레이션한다고 예고한 상태다. 도구명을 먼저 확인해야 의미가 있는 이야기다

### C. 녹취록

- 콜 전문(43분): [Eve 인터뷰 녹취록](https://ssss22jj-netizen.github.io/petnow-research-hub/#/doc/YW5hbHlzaXMvRXZl7J247YSw67ewX-uFuey3qOuhnV8yMDI2MDgxNy5tZA)
- 자동 전사본이라 문장부호와 고유명사에 오인식이 있다. 인용하기 전에 원본 영상을 확인하기를 권한다
