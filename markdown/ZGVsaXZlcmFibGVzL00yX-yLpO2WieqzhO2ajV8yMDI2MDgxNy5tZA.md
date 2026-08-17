# M2 실행 계획안 — M1 결과 정리와 두 트랙 재편

> 작성일: 2026년 8월 17일 (v1.2 초안)  
> 작성자: 카야(마켓핏랩)  
> 선행 문서: [Track 2 LMF 소구점 검증 실험 기획안 v1.2](Track2_LMF_소구점_검증_실험_기획_20260805.md), [Track 2 LMF 가설 ICE 재스코어링](Track2_LMF_가설_ICE_재스코어링_20260809.md), [Track 2 광고 실험 중간 보고](Track2_M1_중간성과분석_20260815.md), [리드 인터뷰 가이드](Track2_리드인터뷰_가이드_20260817.md)

## 한 줄 결론

M1의 1차 LMF(기존 Track2)에서 시장의 페인포인트 존재를 확인했으므로, M2는 이 축을 두 트랙으로 강화한다. 
- 새로운 **Track 1**은 **수익화 가능성 태핑**이다. 1차 LMF 리드로 지불 의향과 실제 구매 전환을 확인한다. **(데모 진행·PoC 유도)**
- 새로운 **Track 2**는 **VP 다지기**다. 1차와 결이 다른 소재로 또다른 축의 페인포인트가 있는지 같은 프로세스로 검증해 제품 경쟁력의 근거를 넓힌다. **(LMF 2차 실험)**

네트워크 인터뷰(기존 Track1)는 보조 수단으로 전환한다.

## 1. M1에서 M2로 — 트랙 재편

M1은 두 트랙으로 진행했다. **네트워크·LinkedIn 인터뷰**는 후보 46명을 정리해 발송했으나 인터뷰이 모집이 어려워 성사 건수가 미미했고, **리드 기반 VP 검증(1차 LMF)**은 소재 A·B 모두 CTR "매우 좋음"으로 시장에 페인포인트가 존재함을 확인했다.

M2는 여기서 갈린다. 모집이 막힌 인터뷰 트랙은 **보조 수단으로 내리고**, 성과가 확인된 리드 기반 축을 **강화해 두 트랙으로 나눈다.** 하나는 확인된 페인포인트를 매출까지 밀어 올리고(Track 1), 다른 하나는 결이 다른 축에서 페인포인트를 더 찾는다(Track 2). 여기에 카운티 정부 기관 리드가 유입돼 지자체 관계 구축을 별도 트랙으로 둔다.

<div class="track-flow">
<svg viewBox="0 0 920 356" role="img" aria-label="M1 두 트랙에서 M2 세 트랙으로 재편되는 흐름" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <marker id="fa" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 z" fill="#8d9791"/>
    </marker>
    <marker id="fad" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto">
      <path d="M0,0 L9,4.5 L0,9 z" fill="#b7c0ba"/>
    </marker>
  </defs>
  <text x="8" y="20" class="fl-col">M1 · 완료</text>
  <text x="600" y="20" class="fl-col">M2 · 진행</text>
  <rect x="8" y="36" width="290" height="98" rx="10" fill="#f3f7f4" stroke="#dce5df"/>
  <text x="24" y="58" class="fl-kicker">M1 TRACK 1</text>
  <text x="24" y="80" class="fl-title">네트워크·LinkedIn 인터뷰</text>
  <text x="24" y="101" class="fl-line">목표 · 페인포인트 수집</text>
  <text x="24" y="121" class="fl-line">결과 · 인터뷰이 모집 난항</text>
  <rect x="8" y="164" width="290" height="126" rx="10" fill="#dff4e9" stroke="#b9e3cd"/>
  <text x="24" y="186" class="fl-kicker">M1 TRACK 2</text>
  <text x="24" y="208" class="fl-title">리드 기반 VP 검증 (1차 LMF)</text>
  <text x="24" y="229" class="fl-line">목표 · 데스크리서치 가설 검증</text>
  <text x="24" y="249" class="fl-line">결과 · 소재 A·B 모두 CTR 매우 좋음</text>
  <text x="24" y="269" class="fl-line">리드 9건 · 예약 3건, 계속 유입</text>
  <path d="M298,85 H450 V60 H588" fill="none" stroke="#b7c0ba" stroke-width="1.4"
        stroke-dasharray="5 4" marker-end="url(#fad)"/>
  <text x="366" y="78" class="fl-edge fl-edge-dim">격하</text>
  <path d="M298,227 H452" fill="none" stroke="#8d9791" stroke-width="1.6"/>
  <path d="M452,146 V308" fill="none" stroke="#8d9791" stroke-width="1.6"/>
  <path d="M452,146 H588" fill="none" stroke="#8d9791" stroke-width="1.6" marker-end="url(#fa)"/>
  <path d="M452,227 H588" fill="none" stroke="#8d9791" stroke-width="1.6" marker-end="url(#fa)"/>
  <path d="M452,308 H588" fill="none" stroke="#8d9791" stroke-width="1.6" marker-end="url(#fa)"/>
  <text x="352" y="219" class="fl-edge">강화 · 분기</text>
  <rect x="592" y="36" width="320" height="52" rx="10" fill="#fff" stroke="#e3e9e5" stroke-dasharray="5 4"/>
  <text x="610" y="59" class="fl-title fl-dim">보조 수단으로 전환</text>
  <text x="610" y="78" class="fl-line fl-dim">소개 유입만 수용 · 적극 탐색 중단</text>
  <rect x="592" y="112" width="320" height="68" rx="10" fill="#e8f1fa" stroke="#a9c4e2"/>
  <text x="610" y="134" class="fl-kicker fl-blue">M2 TRACK 1</text>
  <text x="610" y="155" class="fl-title fl-blue">수익화 가능성 태핑</text>
  <text x="610" y="173" class="fl-line">지불 의향 · 실제 구매 전환 확인</text>
  <rect x="592" y="193" width="320" height="68" rx="10" fill="#dff4e9" stroke="#b9e3cd"/>
  <text x="610" y="215" class="fl-kicker fl-green">M2 TRACK 2</text>
  <text x="610" y="236" class="fl-title fl-green">VP 다지기</text>
  <text x="610" y="254" class="fl-line">또다른 축의 페인포인트 검증</text>
  <rect x="592" y="274" width="320" height="68" rx="10" fill="#fff3dc" stroke="#f0d6a4"/>
  <text x="610" y="296" class="fl-kicker fl-amber">별도 트랙</text>
  <text x="610" y="317" class="fl-title fl-amber">지자체 관계 구축</text>
  <text x="610" y="335" class="fl-line">산타바바라 카운티 · 공공 판로</text>
</svg>
<ul class="track-flow-alt">
  <li><b>M1 Track 1 · 네트워크·LinkedIn 인터뷰</b> → 보조 수단으로 전환 (소개 유입만 수용)</li>
  <li><b>M1 Track 2 · 리드 기반 VP 검증</b> → 강화 후 3개로 분기
    <ul>
      <li>M2 Track 1 · 수익화 가능성 태핑 — 지불 의향·구매 전환 확인</li>
      <li>M2 Track 2 · VP 다지기 — 또다른 축의 페인포인트 검증</li>
      <li>별도 트랙 · 지자체 관계 구축 — 산타바바라 카운티</li>
    </ul>
  </li>
</ul>
</div>

## 2. 왜 이렇게 가는가

[Track 2 광고 실험 중간 보고](https://ssss22jj-netizen.github.io/petnow-research-hub/#/doc/ZGVsaXZlcmFibGVzL1RyYWNrMl9NMV_spJHqsITshLHqs7zrtoTshJ1fMjAyNjA4MTUubWQ) §0 「매출까지 가는 길」의 5단계로 보면 M2의 위치가 분명해진다.

<div class="stage-ladder">
<div class="stage-ladder-head"><strong>매출까지 가는 길 — 지금 어디인가</strong><span>2026-08-17 기준</span></div>
<div class="stage-row">
  <div class="stage is-done">
    <div class="stage-no">STEP 1</div>
    <div class="stage-name">문제 인식</div>
    <div class="stage-q">이 문제를 자기 얘기로 읽는가</div>
    <div class="stage-state">확인</div>
  </div>
  <div class="stage is-watching">
    <div class="stage-no">STEP 2</div>
    <div class="stage-name">관심 강도</div>
    <div class="stage-q">시간을 내서 이야기할 만큼인가</div>
    <div class="stage-meta">신청 9건 · 예약 3건</div>
    <div class="stage-state">관찰 중</div>
  </div>
  <div class="stage is-next">
    <div class="stage-now">지금 여기</div>
    <div class="stage-no">STEP 3</div>
    <div class="stage-name">해결 방식 수용</div>
    <div class="stage-q">우리 방식을 답이라고 보는가</div>
    <div class="stage-state">M2 착수</div>
  </div>
  <div class="stage is-todo">
    <div class="stage-no">STEP 4</div>
    <div class="stage-name">지불 의향</div>
    <div class="stage-q">얼마를 낼 것인가</div>
    <div class="stage-state">미착수</div>
  </div>
  <div class="stage is-todo">
    <div class="stage-no">STEP 5</div>
    <div class="stage-name">반복 가능성</div>
    <div class="stage-q">같은 조건의 조직에 계속 팔리는가</div>
    <div class="stage-state">미착수</div>
  </div>
</div>
<div class="stage-spans">
  <div class="stage-span span-t2"><b>Track 2 — VP 다지기</b>1단계를 결이 다른 축에서 다시 확인해 반응의 폭을 넓힌다</div>
  <div class="stage-span span-t1"><b>Track 1 — 수익화 가능성 태핑</b>데모 콜과 PoC로 3 → 4 → 5단계를 밀어 올린다. 광고로는 닿을 수 없는 구간</div>
</div>
</div>


- **Track 1**: 본 프로젝트에서 실질적인 수익화 가능성을 최초로 검증하는 단계다. 1차 LMF로 문제 인식은 확인됐고, 지불 의향과 구매 전환은 리드 대상 데모 콜·PoC로만 확인 가능하다.
- **Track 2**: 소재 A·B는 "내부 운영 정보의 자동 취합"이라는 단일 축이다. 결이 다른 축까지 동일 방식으로 검증하면 총 4종의 가설 상대 강도가 드러나, 단일 축에 국한되지 않고 다른 관점에서 VP를 다질 수 있고, 제품 경쟁력의 근거가 확충된다. 실험 인프라가 이미 갖춰져 있어 소재 추가 비용은 낮다
- 두 트랙은 투입 자원이 다르고, Track 2 유입 리드가 Track 1로 이어져 상호 보완된다
- **별도 트랙**: 지자체 컨택 포인트는 사업 관점에서 그 자체가 자산이다. 위로는 주·연방 단위 공공 사업과 정책 채택으로, 옆으로는 인근 카운티와 전국 구조 네트워크로 뻗을 수 있는 노드이며, CRM에 국한되지 않고 비문 인식 등 다른 사업의 판로로도 열릴 수 있다. 따라서 이번 건은 검증 대상이 아니라 **어떤 형태로든 관계를 다지고 실제 프로젝트를 만들어 내는 것**을 목표로 별도 운영한다
- 참고: [산타바바라 카운티 사전조사](https://ssss22jj-netizen.github.io/petnow-research-hub/#/doc/YW5hbHlzaXMvU2FudGFCYXJiYXJhX-y5tOyatO2LsF_sgqzsoITsobDsgqxfMjAyNjA4MTcubWQ) · [리드 인터뷰 가이드](https://ssss22jj-netizen.github.io/petnow-research-hub/#/doc/ZGVsaXZlcmFibGVzL1RyYWNrMl_rpqzrk5zsnbjthLDrt7Bf6rCA7J2065OcXzIwMjYwODE3Lm1k) 산타바바라 커스텀 절

## 3. Track 1 — 지불 의향·구매 전환

### 3.1 대상과 흐름

- 대상: 1차 LMF 리드 전량(신청·Keep me posted 포함) + Track 2 집행 중 유입되는 리드
- 흐름: `데모 콜 30분 → 온도별 CTA → PoC 제안(정규 계약 조건 동반) → PoC 진입 → 정규 계약 전환`
- 데모 콜은 [리드 인터뷰 가이드](Track2_리드인터뷰_가이드_20260817.md)로 통일 (통증 청취 → 데모 → 반응·지불 의향 → CTA)
- 미예약·미응답 리드는 Lead Radar 팔로업 절차로 회수

### 3.2 답할 것

| 질문 | 수집 지점 |
| --- | --- |
| 광고에서 반응한 통증이 실제 업무 사례로 확인되는가 | 가이드 §2 |
| 데모가 해당 통증을 해소한다고 판단하는가 | 가이드 §5 |
| 지불 의향과 가격 범위 | 가이드 §5 (현재 지출 앵커 후 질문) |
| PoC 참여 의사 | CTA "뜨거움" 분기 |

- 성공 기준(데모 콜 N건 중 PoC 진입·정규 계약 전환 M건)은 리드 유입 속도를 확인한 뒤 펫나우와 합의해 확정한다
    -  (지금 생각으론 데모 이후 PoC 전환 30%? 대신 ICP 규모 고려 필요)
- 결과는 가설 보드 §6 갱신표와 M1 종합 보고서 부록 D에 반영한다

### 3.3 미리 고민하면 좋을 것 (PoC 관련)

<div class="decision-box">

데모 콜 CTA의 최상위 제안이 PoC이나 제공 범위가 미정의. 펫나우가 PoC를 설계할 때 고려할 사항:

- **PoC의 목적은 실제 매출 발생 실현이다.** PoC 자체는 무료로 제공하되, 착수 시 정규 계약 조건(가격·기간)을 함께 제시해 PoC 종료 시점이 곧 계약 결정 시점이 되도록 설계한다. 범위·기간·가격 설계 전부를 '매출 전환'이 성립하도록 맞춘다.
- **PoC 성공 지표는 정규 계약 전환 여부** 사용자 만족도는 보조 지표로 주간 체크인 응답률 실측 + 종료 시 만족도 및 NPS 수집 권장 또는 레퍼러 프로그램 운영도 고려하봄직함.
- **PoC용 필수 스펙과 개발 기간을 먼저 산정한다.** 데모에서 제시하는 스펙을 기준으로 실개발 스펙을 팀 내에서 합의하여 최소 형태로 스펙을 정한다. 개발 기간이 PoC 착수 시점을 결정하므로 데모 콜 진행과 병렬로 산정 권장
- **PoC 기간 정의 필요.** 임보자 체크인이 주 단위이므로 3회 이상 관측되도록 4주 권장
- **정규 계약 가격은 대표 전결 범위 안에서 정하고 데모 콜 "현재 지출" 답변으로 보정한다.** 벤치마크는 Shelterluv 입양당 $2 · Petstablished 월 $49 · 기존 가설 월 $99. 참고로 합성 소비자 인터뷰(Jeanine, 7/29)에서는 월 $99 이하가 대표 단독 결정선이고, **연 단위 일시불이 오히려 승인이 쉽다**는 합성인터뷰 발언이 있었다 — 소프트웨어를 운영비가 아니라 Petco Love·Maddie's Fund 등 보조금으로 사는데, 보조금은 월 구독이 아니라 일회성 지출에 나오기 때문. 합성 인터뷰라 근거 수준은 낮으며 데모 콜에서 확인할 항목

</div>

## 4. Track 2 — 또다른 페인포인트 축 검증 (제품 VP 다지기)

### 4.1 프로세스

1차 LMF 기획안 v1.2의 실험 설계(ICP·채널·성공 기준·조기 중단·캠페인 세팅·리드 대응·예산 스펙트럼)를 그대로 차용한다. 변경 사항은 소재뿐이며, A·B를 대조군으로 동시 집행해 상대 비교는 동일 시기 실측치 간에 수행한다.

### 4.2 검증 가설

| 항목 | 소재 F 신규 인력 즉시 투입 | 소재 H 오너 연결 |
| --- | --- | --- |
| 유즈케이스 | 신규 직원·봉사자 교육 | 입양 신청·절차 소통(접수·심사 연락·서류 안내와 회수) + 입양 후 새 가족 체크인(2일·10일·6주) |
| A·B와의 결 차이 | 사람이 **바뀔 때**의 비용 | 조직 **밖 사용자**(입양 신청자·입양자)와의 연결. 신청부터 입양 후까지 한 사람과 이어지는 소통·서류 흐름 전체. 유일하게 사용자가 쉘터 밖으로 확장 |
| ICE(8/9) | 60 (I5·C3·E4) | 72 (I6·C3·E4) |
| **당시 배제 배경** | · 근거가 Chameleon(공공기관용) 리뷰의 학습곡선 불만뿐이었는데, Chameleon이 민간 비교 대상에서 빠지며 근거 소멸<br>· Pawlytics에는 "배우기 쉽다" 리뷰가 많아 반례 존재<br>· "새 사람이 바로 쓴다"는 광고·데모로 보여주기 어렵고 실사용 테스트가 필요 | · 근거가 펫나우 내부 전언 2건뿐이고 고객 발화 없음<br>· 데스크 리서치 상 ASPCA 권고사항에 파양 다수가 입양 후 2개월 이내이므로 사후 연락 권고 등 정황이 있으나 직접 근거 부족<br>· 사용자가 쉘터 밖(입양자)까지 넓어져 제품 범위가 커짐<br>· 당시 결론: 광고·기능 대상 아님, 인터뷰 질문으로만 유지 |
| **현 시점 검증 이유** | · 반례 있는 가설을 리뷰 해석 대신 시장 반응으로 판정<br>· 민간 반응이 없으면 산타바바라(Chameleon 실사용) 트랙에만 남기면 됨 | · A도 근거가 약했으나 실험으로 니즈 존재 확인된 사례<br>· 펫나우팀 내부에서 검증 희망 <br>·기존 데모의 임보자용 플로우를 재활용할 수 있어 실현 가능성이 높은 축 |


### 4.3 데모 제품 구성

| 소재 | 데모 |
| --- | --- |
| F | **기존 데모 그대로 사용.** 전체 현황을 한 화면에서 파악하는 구성 자체가 신규 인력의 즉시 업무 파악이라는 F의 해결책에 해당. 추가 제작 없음 |
| H | **B 소재 흐름 그대로, 상태 라벨만 교체.** 목록·상태 칩·업데이트 예정·응답률·상세 화면 구조가 임보자와 동일하므로, 탭 이름을 Adopters로 바꾸고 상태값을 접수 → 서류 안내 → 서류 회수 → 입양 확정 → 체크인(2일·10일·6주)으로 치환. 신규 화면 제작 최소화 |


## 4. 예산과 일정

| 세트 | 역할 | 금액 |
| --- | --- | ---: |
| F · H | 신규 검증 | 각 15만 원 |
| A · B | 대조군 | 각 15만 원 |
| **합계** | | **60만 원** |

- 4세트 동일 예산. 소재 간 비교가 목적이므로 집행액을 맞춘다
- **A·B 증액 여부는 펫나우 판단 필요.** A·B는 검증이 끝난 소재라 2라운드에서는 Track 1에 넣을 리드를 확보하는 역할이 크다. 증액하면 리드가 늘어나는 만큼 데모 콜 수행 인원이 병목이 되므로, **인터뷰 리소스 감당 범위를 먼저 확인한 뒤 결정한다**

| 주차 | Track 1 | Track 2 |
| --- | --- | --- |
| 1주 차 | 데모 콜 진행, PoC 상품 정의 | 소재 F·H 제작, 랜딩 2종 구축, H 데모 상태 라벨 교체, 추적 QA |
| 2주 차 | 데모 콜 계속, PoC 첫 제안 | 4세트 동시 집행, 중간 점검 |
| 3주 차 | 콜 결과 가설 보드 반영, PoC 진입 집계 | 소재별 CTR·신청률 분석, F·H 리드 데모 콜 |
| 4주 차 | PoC 진입·계약 전환 결과 정리 | 가설 4종(H-A·B·F·H) 상대 위치 갱신, 3단계 방향 결정 |


## 변경 이력

| 버전 | 일자 | 변경 내용 |
| --- | --- | --- |
| v1.0 | 2026-08-17 | 최초 작성 (LMF 2차 라운드 단독) |
| v1.1 | 2026-08-17 | 트랙 1·2 재정의로 재구성 |
| v1.2 | 2026-08-17 | M2 실행 계획으로 개편. M1 결과 정리·트랙 재편 이유 추가, 소재 라벨 F·H로 통일, 1차 반복 서술 삭제, 데모 제품 구성 추가 |
