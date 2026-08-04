# Track 2 Meta·LinkedIn 광고 계정 설정 가이드

> 관련 문서: [Track 2 LMF 소구점 검증 실험 기획안](Track2_LMF_소구점_검증_실험_기획_20260805.md)  
> 주의: 플랫폼 화면과 권한 명칭은 변경될 수 있으므로 실제 설정 화면에서 최종 확인 필요

## 한 줄 결론

펫나우 담당자는 Meta 기존 광고 계정과 LinkedIn 회사 페이지의 접근 권한을 부여하고, 카야는 초대 수락 후 캠페인·결제·전환 추적 설정을 확인한다.

## 1. 사전 준비

| 구분 | 펫나우 담당자 | 카야 |
| --- | --- | --- |
| Meta | Business Manager와 광고 계정 보유 여부 확인, 관리자 초대 | 업무용 이메일로 초대 수락, 광고 계정 접근 확인 |
| LinkedIn | 회사 페이지 보유 여부 확인, 페이지·광고 계정 권한 부여, 결제 수단 준비 | Campaign Manager 접근, 캠페인과 Insight Tag 설정 확인 |

공개 문서에는 개인 이메일을 기재하지 않는다. 실제 권한 부여 시 펫나우와 합의한 카야의 업무용 이메일과 LinkedIn 계정을 사용한다.

## 2. Meta 광고 계정 접근 권한

예상 소요 시간은 약 5분이며, 아래 절차는 펫나우 담당자가 진행한다.

1. [Meta Business Manager](https://business.facebook.com/)에 펫나우 계정으로 로그인
2. `Business Settings → Accounts → Ad Accounts` 이동
3. Track 2에 사용할 광고 계정 선택
4. `Add People`에서 카야의 업무용 이메일 입력
5. 캠페인 생성·수정, 예산 집행, 결과 확인이 가능한 권한 부여
6. 카야가 초대 메일을 수락한 뒤 광고 계정 접근 여부 확인

초대 메일은 이메일 서비스의 프로모션 또는 스팸함으로 분류될 수 있다. 캠페인 제작에 착수하기 전에 양측이 접근 완료 여부를 확인한다.

## 3. LinkedIn Campaign Manager 신규 설정

LinkedIn 광고 집행에는 LinkedIn 회사 페이지와 Campaign Manager 광고 계정이 필요하다. 회사 페이지가 이미 있으면 3.2부터 진행한다.

### 3.1 LinkedIn 회사 페이지 생성

1. LinkedIn 상단 `Work` 메뉴에서 `Create a Company Page` 선택
2. 회사명, 업종, 웹사이트(`petnow.ai`) 입력
3. 회사 정보를 확인하고 페이지 생성

관리자 권한이 있는 개인 LinkedIn 계정으로 진행한다.

### 3.2 카야에게 회사 페이지 광고 권한 부여

1. 회사 페이지 관리자 화면에서 `Settings → Page admins` 이동
2. `Add admin` 선택
3. 카야의 LinkedIn 계정 검색
4. 광고 운영에 필요한 페이지 역할 부여

원문 가이드에는 `Sponsored content poster` 또는 `Super admin`이 제시되어 있다. 실제 화면의 최신 역할 명칭과 최소 필요 권한을 확인한 뒤 부여한다.

### 3.3 Campaign Manager 광고 계정 생성

1. [LinkedIn Campaign Manager](https://www.linkedin.com/campaignmanager/) 접속
2. `Create account` 선택
3. 계정 이름 입력: 예시 `Petnow Ads`
4. 통화 `USD` 선택
5. 펫나우 회사 페이지 연결 후 저장

광고 계정의 통화는 생성 후 변경이 제한될 수 있으므로 저장 전에 확인한다.

### 3.4 카야에게 광고 계정 권한 부여

1. `Account settings → Manage access → Add user` 이동
2. 카야의 LinkedIn 계정 검색
3. 캠페인 생성·수정과 성과 확인에 필요한 광고 계정 역할 부여

원문 가이드에는 `Account Manager` 또는 `Campaign Manager` 역할이 제시되어 있다. 최신 권한 체계에서 결제 관리 포함 여부를 확인한다.

### 3.5 결제 수단 등록

1. `Account settings → Billing center → Add payment method` 이동
2. Track 2 집행에 사용할 법인 또는 승인된 신용카드 등록
3. 청구 통화, 결제 담당자, 예산 한도 확인

원문 기준 LinkedIn 최소 일 예산은 미화 10달러로 기재돼 있다. 실제 집행 시점의 최소 예산과 과금 조건을 Campaign Manager에서 다시 확인한다.

### 3.6 Insight Tag 설치

1. `Analyze → Insight Tag` 이동
2. 직접 설치 방식의 스크립트 복사
3. Petnow 랜딩페이지 3종의 `<head>` 영역에 삽입
4. Campaign Manager의 태그 상태와 브라우저 검증 도구로 설치 확인
5. 랜딩페이지 제출 완료 이벤트를 전환으로 설정

## 4. 완료 확인표

| 확인 항목 | 담당 | 완료 기준 |
| --- | --- | --- |
| Meta 광고 계정 접근 | 펫나우·카야 | 카야 계정에서 대상 광고 계정 조회 가능 |
| LinkedIn 회사 페이지 | 펫나우 | 회사 페이지 공개 및 관리자 접근 가능 |
| LinkedIn 광고 계정 | 펫나우·카야 | USD 광고 계정과 회사 페이지 연결 완료 |
| 결제 수단 | 펫나우 | 승인된 카드 등록과 청구 정보 확인 |
| Insight Tag | 카야·개발 담당 | 랜딩페이지 3종에서 태그 활성 상태 확인 |
| 전환 이벤트 | 카야·개발 담당 | 폼 제출 테스트가 Campaign Manager에 기록됨 |

## 원문

- [Claude 아티팩트: Meta·LinkedIn 광고 계정 설정 가이드](https://claude.ai/code/artifact/43d79a85-45d4-4083-b770-701cbe40ad08)
