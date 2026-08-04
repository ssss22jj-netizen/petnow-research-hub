# LinkedIn v3 불일치 독립 재감사

- 감사일: 2026-08-03 (Asia/Seoul)
- 감사 범위: 지정 후보 2명의 LinkedIn 프로필·경력 전체 보기 및 Luanne Czesak 관련 The Sato Project 공식 원문
- 감사 방식: 지정 Chrome extension 프로필에서 새 탭으로 직접 확인. 검색결과 스니펫만으로 판정하지 않음
- 외부 행동: 메시지 발송·팔로우·친구 추가 등 없음

## 판정 요약

| 후보 | 현재 소속·직함 | 현직 여부 | 고용형태 판정 | 현재 주(state) | 현재 도시 | 최종 판정 |
|---|---|---:|---|---|---|---|
| Luanne Czesak | The Sato Project, Director of Operations | 현직 | 풀타임 | New York | Brooklyn | 풀타임 현직. 현재 위치는 Brooklyn, New York |
| Bree Leggett | Oklahoma Humane Society, Director of Finance | 현직 | 미표시 | Oklahoma | Yukon | Oklahoma Humane Society 현직. LinkedIn 경력 전체 보기에 고용형태 미표시 |

## 1. Luanne Czesak

### 판정

- 현재 고용형태: **풀타임**
- 현재 위치: **Brooklyn, New York**
- 현재 소속·직함: **Director of Operations, The Sato Project**

### 직접 화면 근거

1. LinkedIn 프로필 메인
   - URL: https://www.linkedin.com/in/luanne-czesak-16582935/
   - 화면 표시: `Director of Operations, The Sato Project`
   - 위치 표시: `Brooklyn, New York, United States` (한국어 UI: `미국 뉴욕 브루클린`)

2. LinkedIn 경력 전체 보기
   - URL: https://www.linkedin.com/in/luanne-czesak-16582935/details/experience/
   - 화면 표시: The Sato Project 경력 `6년`, 근무 위치 `Brooklyn, New York, United States`
   - 현 직함·기간: `Director Of Operations`, `Mar 2022 - Present`
   - 직전 동일 기관 직함·기간: `Operations Manager`, `Sep 2020 - Mar 2022`
   - LinkedIn 경력 화면 자체에는 고용형태 라벨이 표시되지 않음

3. The Sato Project 공식 팀 페이지 원문
   - URL: https://thesatoproject.org/ourteam
   - 화면 표시: `Luanne Czesak — DIRECTOR OF Operations`
   - 원문 핵심: `Luanne made the transition to full-time employee`
   - 공식 페이지가 Luanne의 풀타임 직원 전환을 명시하므로, LinkedIn의 고용형태 라벨 부재에도 **풀타임**으로 판정
   - 같은 공식 페이지에서 Luanne을 `Our Team in New York` 섹션에 배치. 다만 현재 도시·주는 LinkedIn 프로필의 `Brooklyn, New York` 표시를 기준으로 판정

## 2. Bree Leggett

### 판정

- 정확한 LinkedIn 개인 URL: **https://www.linkedin.com/in/bree-leggett-aaa16158/**
- Oklahoma Humane Society 현직 여부: **현직**
- 현재 직함: **Director of Finance**
- 고용형태: **미표시**

### 직접 화면 근거

1. LinkedIn 인물 검색 결과 화면
   - URL: https://www.linkedin.com/search/results/people/?keywords=Bree%20Leggett
   - 동일 이름 후보 중 `Director of Finance at Oklahoma Humane Society`, 위치 `Yukon, Oklahoma, United States`인 결과의 프로필 URL이 `https://www.linkedin.com/in/bree-leggett-aaa16158/`로 표시됨
   - 검색 결과는 URL 식별에만 사용하고, 현직·고용형태 판정은 아래 프로필 및 경력 전체 보기에서 재확인

2. LinkedIn 프로필 메인
   - URL: https://www.linkedin.com/in/bree-leggett-aaa16158/
   - 화면 표시: `Director of Finance at Oklahoma Humane Society`
   - 위치 표시: `Yukon, Oklahoma, United States` (한국어 UI: `미국 오클라호마 Yukon`)

3. LinkedIn 경력 전체 보기
   - URL: https://www.linkedin.com/in/bree-leggett-aaa16158/details/experience/
   - 화면 표시: `Director of Finance`, `Oklahoma Humane Society`
   - 기간 표시: `Mar 2019 - Present`
   - 근무 지역 표시: `Oklahoma City Metropolitan Area`
   - `Present`가 명시되어 있으므로 Oklahoma Humane Society **현직**으로 판정
   - 풀타임·시간제·봉사 등 고용형태 라벨은 화면에 표시되지 않으므로 **미표시**로 판정. 직함이나 장기 재직기간만으로 풀타임을 추정하지 않음

## 감사 제약 및 처리

- Google의 Luanne 공식 페이지 검색 과정에서 비정상 트래픽 확인 화면이 나타났으며 CAPTCHA를 우회하지 않음.
- 이후 The Sato Project 공식 사이트의 공개 내비게이션에서 `ABOUT US → Our Team` 경로와 원문 페이지를 직접 확인함.
- 두 후보 모두 검색 스니펫이 아니라 LinkedIn 프로필·경력 전체 보기 화면을 판정 근거로 사용함.
