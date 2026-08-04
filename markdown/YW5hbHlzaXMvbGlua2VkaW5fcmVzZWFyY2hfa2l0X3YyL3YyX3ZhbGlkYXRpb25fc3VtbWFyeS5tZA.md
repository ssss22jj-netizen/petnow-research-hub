# LinkedIn 탐색환경 v2 독립 재현성 검증 요약

## 결론

- Tier A 조직 검색 완료: 20/20개(100%)
- 후보 CSV 수록: 39명
- 풀타임 직접 근거 기반 1순위: 1명
- 판정 원칙: 공개 LinkedIn 본문·활동에서 full-time을 직접 밝힌 경우에만 1순위 부여
- 비교 제한 준수: 기존 후보 목록·PROJECT_STATE·v1 결과·baseline 미열람

## 실행 범위 및 한계

- 조직별 Q001~Q005 공개 웹 검색 실행
- 결과가 부족한 8개 조직에 Q006 공개 LinkedIn 개인 프로필 색인 보완 실행
- LinkedIn 로그인 브라우저 미사용. 경력 모두 표시·추천사·전체 활동은 공개 검색 색인에 노출된 범위만 확인
- Q007/Q008은 후보별 공개 검색 결과에 노출된 개인 프로필 본문·활동을 빠른 검증에 활용. 별도 공식 자료에서 고용형태를 직접 확인하지 못한 후보는 3순위 유지
- 검색 자동 배치 실행으로 조사 시간이 매우 짧게 측정됨. 아래 시간은 조직별 검색·결과 검토 구간을 분 단위로 올림한 값

## 조직별 실제 조사 시간

| org_id | 조직 | 분 | 수록 후보 |
|---|---|---:|---:|
| ORG001 | Muddy Paws Rescue | 1 | 2 |
| ORG002 | Hearts & Bones Animal Rescue | 1 | 2 |
| ORG003 | Final Victory Animal Rescue | 1 | 2 |
| ORG004 | Badass Animal Rescue | 1 | 2 |
| ORG005 | The Sato Project | 1 | 2 |
| ORG006 | NYC Second Chance Rescue | 1 | 2 |
| ORG007 | Animal Rescue League of New Hampshire | 1 | 2 |
| ORG008 | Animal Humane Society | 1 | 2 |
| ORG009 | Pinellas County Animal Services | 1 | 2 |
| ORG010 | Lawrence Humane Society | 1 | 2 |
| ORG011 | Fresno Humane Animal Services | 1 | 2 |
| ORG012 | Nebraska Humane Society | 1 | 2 |
| ORG013 | Oklahoma Humane Society | 1 | 2 |
| ORG014 | Licking County Humane Society | 1 | 2 |
| ORG015 | Humane Society of the Pikes Peak Region | 1 | 2 |
| ORG016 | ACCT Philly | 1 | 1 |
| ORG017 | Baypath Humane Society | 1 | 2 |
| ORG018 | BARC Animal Shelter & Adoptions | 1 | 2 |
| ORG019 | Secondhand Hounds | 1 | 2 |
| ORG020 | Every Last One Rescue | 1 | 2 |

총 실제 경과: 약 5분(배치 검색 약 3분 + 후보 선별·기록 약 2분). 조직별 분 단위 올림 합계는 20분이며 병렬·배치 실행 때문에 총 경과와 다름.

## 보수 판정 결과

- 1순위 목표 15명 미달. 직접 풀타임 근거 부족에 따른 의도적 보수 판정
- 미국 현직 및 역할 관련성은 공개 프로필 검색 결과로 확인했으나, 고용형태·전체 경력·추천사 접근 제한이 주요 병목
- 후보 수 목표(30명 이상)는 충족. 조직별 `max_candidates=3` 미초과
