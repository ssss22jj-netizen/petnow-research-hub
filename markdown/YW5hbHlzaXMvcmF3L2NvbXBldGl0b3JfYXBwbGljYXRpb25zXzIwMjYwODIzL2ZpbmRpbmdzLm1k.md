# 경쟁 도구의 입양 신청 처리 기능 검증

**핵심 결론:** 작업 가설은 일부 반증됨. Petstablished는 입양 신청서 내부에 `Home Visit`·`Additional Screening` 체크리스트를 운영하고, 검토 메모와 파일·문서, 작성 팀원, 작성 시각을 신청서에 보존함. 그러나 조사 대상 5개 제품 모두에서 신청자에게 누락 자료를 요청하고 신청자의 회신을 같은 신청서에 보존하는 양방향 처리 기능은 공개 자료로 확인되지 않음.

검증일: 2026-08-23  
검증 범위: 공개 제품 페이지·공개 도움말·공개 제품 화면. 로그인, 계정 생성, 폼 제출 미수행.

## 1. 기능 판정표

| 제품 | C1 intake | C2 status | C3 message | C4 docs | C5 third-party | C6 assign | C7 post |
|---|---|---|---|---|---|---|---|
| Adopets | YES | YES | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN |
| Adopt-a-Pet.com | NO | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN |
| RescueGroups.org | YES | YES | UNKNOWN | UNKNOWN | UNKNOWN | YES | UNKNOWN |
| 24PetShelter | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN | UNKNOWN |
| Petstablished | YES | YES | UNKNOWN | UNKNOWN | **YES** | UNKNOWN | UNKNOWN |

`UNKNOWN`은 공개 자료에서 기능을 확인하거나 부재를 입증하지 못했다는 의미임. 관련 기능의 존재를 다른 기능에서 추론하지 않음.

## 2. 제품별 근거

### 2.1 Adopets

| 기능 | 판정 | evidence_type | 공개 근거 |
|---|---|---|---|
| C1_intake | YES | marketing | “Save precious time by moving applications online, and automating core activities like email responses, status updates, and application storage.” — https://www.adopets.com/ — `screenshots/adopets-01-homepage.png` |
| C2_status | YES | marketing | “Intuitive and easy to use, Adopets let’s adopters apply in person or online, and provides real-time application status updates.” — https://www.adopets.com/ — `screenshots/adopets-01-homepage.png` |
| C3_message | UNKNOWN | marketing | “Enable team members to collaborate over a private message thread for each application.” 해당 문구는 **팀 내부 스레드**이며 신청자와의 양방향 교환을 의미하지 않음. 상태별 신청자 메시지는 “automated Smart Responses”로만 설명됨. — https://www.adopets.com/ — `screenshots/adopets-01-homepage.png` |
| C4_docs | UNKNOWN | none | 제출 이후 신청자에게 자료를 요청하고 신청자의 회신·파일을 신청서에 보존하는 공개 문서 미확인. — https://knowledgebase.petloyalty.co/adopets-knowledge-base — `screenshots/adopets-02-knowledgebase.png` |
| C5_thirdparty | UNKNOWN | none | 개인 추천인, 임대인 허가, 수의사 확인, 가정 방문 결과의 수집·기록 메커니즘 미확인. — https://knowledgebase.petloyalty.co/adopets-knowledge-base — `screenshots/adopets-02-knowledgebase.png` |
| C6_assign | UNKNOWN | marketing | “Enable efficient collaboration on adoption process, paired with actionable reporting, and seamless integration with shelter software.” 담당 심사자 배정 또는 변경 이력 기능을 특정하지 않음. — https://www.adopets.com/ — `screenshots/adopets-01-homepage.png` |
| C7_post | UNKNOWN | none | 입양 완료 후 예약형 점검·후속 연락 기능 미확인. — https://knowledgebase.petloyalty.co/adopets-knowledge-base — `screenshots/adopets-02-knowledgebase.png` |

### 2.2 Adopt-a-Pet.com 보호소·구조단체용 서비스

| 기능 | 판정 | evidence_type | 공개 근거 |
|---|---|---|---|
| C1_intake | NO | docs | 도움말의 신청 처리 방식은 Adopt-a-Pet 내부 신청서가 아니라 단체의 외부 신청서 연결임: “Application link Add the link to your adoption application in your Adopt-a-Pet.com account's ‘Online Application’ link field.” — https://adoptapetcom.zendesk.com/hc/en-us/articles/207226137-Change-Ask-About-Me-button-to-go-to-our-application — `screenshots/adoptapet-03-inquiries-applications.png` |
| C2_status | UNKNOWN | none | 도움말의 `Inquiries and applications` 절에서 신청 상태 대기열 미확인. — https://adoptapetcom.zendesk.com/hc/en-us/sections/25080147413147-Inquiries-and-applications — `screenshots/adoptapet-03-inquiries-applications.png` |
| C3_message | UNKNOWN | docs | 공개 문서는 문의 전달만 설명함: “Forward inquiries to multiple email addresses”. 신청서 안에서 신청자와 교환을 보존하는 기능은 확인되지 않음. — https://adoptapetcom.zendesk.com/hc/en-us/sections/25080147413147-Inquiries-and-applications — `screenshots/adoptapet-03-inquiries-applications.png` |
| C4_docs | UNKNOWN | none | 제출 이후 누락 자료 요청·회수 메커니즘 미확인. — https://adoptapetcom.zendesk.com/hc/en-us/sections/25080147413147-Inquiries-and-applications — `screenshots/adoptapet-03-inquiries-applications.png` |
| C5_thirdparty | UNKNOWN | none | 제3자 검증 기록 메커니즘 미확인. — https://adoptapetcom.zendesk.com/hc/en-us/sections/25080147413147-Inquiries-and-applications — `screenshots/adoptapet-03-inquiries-applications.png` |
| C6_assign | UNKNOWN | none | 신청 담당자 배정·처리자 이력 미확인. — https://adoptapetcom.zendesk.com/hc/en-us/sections/25080147413147-Inquiries-and-applications — `screenshots/adoptapet-03-inquiries-applications.png` |
| C7_post | UNKNOWN | none | 입양 후 예약형 점검 기능 미확인. — https://adoptapetcom.zendesk.com/hc/en-us/ — `screenshots/adoptapet-02-help-center.png` |

### 2.3 RescueGroups.org

| 기능 | 판정 | evidence_type | 공개 근거 |
|---|---|---|---|
| C1_intake | YES | marketing | “The Online Forms service allows you to create and place online forms (adoption, foster, etc) on any website.” — https://rescuegroups.org/services/online-forms-iframe-service/ — `screenshots/rescuegroups-02-online-forms.png` |
| C2_status | YES | marketing | “volunteers can change the status of the submitted forms to reflect where they are in the process.” — https://rescuegroups.org/services/online-forms-iframe-service/ — `screenshots/rescuegroups-02-online-forms.png` |
| C3_message | UNKNOWN | marketing | “Volunteers are immediately alerted (via email) when a form is completed.” 해당 문구는 내부 알림이며 신청자와의 양방향 교환을 설명하지 않음. — https://rescuegroups.org/services/online-forms-iframe-service/ — `screenshots/rescuegroups-02-online-forms.png` |
| C4_docs | UNKNOWN | none | 제출 이후 신청자에게 추가 자료를 요청하고 회수하는 메커니즘 미확인. — https://rescuegroups.org/services/online-forms-iframe-service/ — `screenshots/rescuegroups-02-online-forms.png` |
| C5_thirdparty | UNKNOWN | screen | 공개 데모 폼에 “Please provide your Vet's phone number” 필드는 있으나, 수의사에게 확인을 요청하거나 결과를 별도로 기록하는 기능은 확인되지 않음. — https://rescuegroups.org/services/online-forms-iframe-service/ — `screenshots/rescuegroups-02-online-forms.png` |
| C6_assign | YES | marketing | “You can easily add comments to a form, change the status of a form, assign the form to a volunteer to follow up, and track the progress of the form!” — https://rescuegroups.org/services/online-forms-iframe-service/ — `screenshots/rescuegroups-02-online-forms.png` |
| C7_post | UNKNOWN | none | 입양 완료 후 예약형 후속 점검 기능 미확인. — https://rescuegroups.org/services/ — `screenshots/rescuegroups-01-services.png` |

### 2.4 24PetShelter

| 기능 | 판정 | evidence_type | 공개 근거 |
|---|---|---|---|
| C1_intake | UNKNOWN | marketing | “Manage your operations from intake to adoption with our mobile-friendly platform.” 온라인 입양 신청 접수를 특정하지 않음. — https://www.24pet.com/products/24petshelter — `screenshots/24petshelter-01-product.png` |
| C2_status | UNKNOWN | marketing | “managing intake, medical, and adoptions in one cloud-based system.” 신청 대기열·단계 상태를 특정하지 않음. — https://www.24pet.com/products/24petshelter — `screenshots/24petshelter-01-product.png` |
| C3_message | UNKNOWN | none | 신청자와의 도구 내 메시지 및 신청서별 교환 보존 기능 미확인. — https://www.24pet.com/products/24petshelter — `screenshots/24petshelter-01-product.png` |
| C4_docs | UNKNOWN | none | 제출 이후 추가 자료 요청·회수 기능 미확인. — https://www.24pet.com/products/24petshelter — `screenshots/24petshelter-01-product.png` |
| C5_thirdparty | UNKNOWN | none | 제3자 검증 기록 기능 미확인. — https://www.24pet.com/products/24petshelter — `screenshots/24petshelter-01-product.png` |
| C6_assign | UNKNOWN | none | 신청 담당자 배정·처리 이력 기능 미확인. — https://www.24pet.com/products/24petshelter — `screenshots/24petshelter-01-product.png` |
| C7_post | UNKNOWN | none | 입양 후 예약형 점검 기능 미확인. — https://www.24pet.com/products/24petshelter — `screenshots/24petshelter-01-product.png` |

### 2.5 Petstablished

| 기능 | 판정 | evidence_type | 공개 근거 |
|---|---|---|---|
| C1_intake | YES | docs | “To add an offline (paper application) to your account, click on My Applications, then click Applications.” 온라인·오프라인 신청을 구분하며 온라인 신청 처리 절차를 전제로 함. — https://petstablished.com/faq — `screenshots/petstablished-02-checklist-thirdparty.png` |
| C2_status | YES | docs | “You will also see the applications under the following tabs at the top of the page: Pending, Denied, On Hold … Approved … Adopted … Fostered … and Returned.” — https://petstablished.com/faq — `screenshots/petstablished-02-checklist-thirdparty.png` |
| C3_message | UNKNOWN | docs | “When an application record is created, the applicant receives an automatic email telling them that their application has been received.” 자동 이메일은 확인됐으나, 직원과 신청자의 양방향 교환 및 신청서 내 보존은 미확인. — https://petstablished.com/faq — `screenshots/petstablished-02-checklist-thirdparty.png` |
| C4_docs | UNKNOWN | docs | 직원이 체크리스트에 문서를 붙이는 기능은 확인됨: “When reviewing applications you can add notes and files/documents to your checklist items as you review the application.” 신청자에게 자료를 요청하고 신청자가 추가 제출하는 메커니즘은 미확인. — https://petstablished.com/faq — `screenshots/petstablished-02-checklist-thirdparty.png` |
| C5_thirdparty | **YES** | docs | “They are specific to your organization, and can be assigned to any of four phases of the application process: Initial Application Review, Home Visit, Additional Screening, and Finalized Application.” 또한 “Each note indicates which team member entered it and has a date and time stamp as well.” — https://petstablished.com/faq — `screenshots/petstablished-02-checklist-thirdparty.png` |
| C6_assign | UNKNOWN | docs | 체크리스트 메모별 팀원·시각 기록은 확인됐으나 신청서의 단일 담당 심사자 배정은 미확인: “Each note indicates which team member entered it and has a date and time stamp as well.” — https://petstablished.com/faq — `screenshots/petstablished-02-checklist-thirdparty.png` |
| C7_post | UNKNOWN | none | 입양 완료 후 예약형 후속 점검·체크인 기능 미확인. — https://petstablished.com/faq — `screenshots/petstablished-02-checklist-thirdparty.png` |

## 3. Adopets 운영 상태

**판정: 2026년 현재 운영 중. sunset·Adopt-a-Pet.com 합병·개명으로 판정할 근거 없음. 현재 공개 표면은 Pet Loyalty 체계에 편입된 상태로 보임.**

- 제품 홈페이지 활성: “Adoption Software Built for Shelter Success” — https://www.adopets.com/ — `screenshots/adopets-01-homepage.png`
- 조직용 로그인 링크 활성: 홈페이지가 `https://rescue.adopets.com/login`을 `Login`으로 연결 — https://www.adopets.com/ — `screenshots/adopets-01-homepage.png`
- 2026년 도움말 활성: “Adopets Knowledge Base”, 하단 “Copyright © 2026, Pet Loyalty” — https://knowledgebase.petloyalty.co/adopets-knowledge-base — `screenshots/adopets-02-knowledgebase.png`
- 현재 소유·브랜드 관계 표기: “Pet Loyalty, makers of Adopets & ShelterBuddy” — https://knowledgebase.petloyalty.co/adopets-knowledge-base — `screenshots/adopets-02-knowledgebase.png`
- 기존 `help.adopets.com/en/` 404는 제품 종료 근거가 아님. 공개 도움말이 Pet Loyalty 지식베이스로 이전된 상태.
- 2022년 Adopt-a-Pet.com 인수설은 현재 공식 공개 표면과 일치하지 않으며, 이번 공개 제품 검증 범위에서 공식 인수 근거 미확인. 현재 확인 가능한 관계는 Pet Loyalty와의 관계임.

## 4. 가격

| 제품 | 보호소·구조단체 가격 | 근거 |
|---|---|---|
| Adopets | 공개 가격 미확인. 데모 문의형 | 홈페이지 CTA “GET A DEMO” — https://www.adopets.com/ — `screenshots/adopets-01-homepage.png` |
| Adopt-a-Pet.com | **무료** | “Adopt a Pet is a free service for shelters and rescues; it's free to open a shelter/rescue account, free to list your organization's pets, and free for pet seekers to use.” — https://adoptapetcom.zendesk.com/hc/en-us/articles/201233750-Are-there-any-fees-to-list-our-pets-on-Adopt-a-Pet — `screenshots/adoptapet-02-help-center.png` |
| RescueGroups.org | Online Forms Service **$59/year**; Website Service **$100/year**에 Online Forms 포함; 3개월 무료 체험 | “Online Forms Service $59/year”; “Website Service* $100/year $60/6-months Includes the Pet Adoption Portal, Data Management Service, Online Forms Service, and Website Service”; “*Billing begins after free 3-month trial” — https://www.rescuegroups.org/services/service-pricing — `screenshots/rescuegroups-03-pricing.png` |
| 24PetShelter | 공개 가격 미확인 | 공개 제품 페이지에 가격표 없이 “Get 24PetShelter” CTA만 제공 — https://www.24pet.com/products/24petshelter — `screenshots/24petshelter-01-product.png` |
| Petstablished | 연 100건 초과 단체 $49/month, 월 10건 조건 충족 시 면제. 연 100건 미만 단체 $24/month, 월 5건 조건 충족 시 면제 | “For groups with over (100) adoptions per year, we simply require (10) monthly microchip registrations or adoptions payments processed to waive the $49 monthly fee. For groups with under (100) adoptions per year, we simply require (5) monthly microchip registrations or adoption payments processed to waive the $24 monthly fee.” — https://petstablished.com/plans/promotion — `screenshots/petstablished-03-pricing.png` |

## 5. 확인하지 못한 항목과 사유

- Adopets: 공개 도움말에 일부 사용자 가이드만 노출. 신청자 양방향 메시지, 추가 자료 회수, 제3자 검증, 담당자 배정, 입양 후 점검의 실제 화면·절차는 로그인 또는 비공개 지원 자료 없이는 확인 불가.
- Adopt-a-Pet.com: 공개 도움말은 문의 이메일 전달과 외부 신청서 링크 설정 중심. 신청 상태·검증 기능은 제공 근거가 없으나, 기능 부재를 단정할 실제 관리자 화면은 로그인 제한.
- RescueGroups.org: 공개 서비스 페이지에서 접수·상태·담당자 배정까지 확인. 신청자 양방향 메시지, 추가 파일 회수, 제3자 확인 결과 전용 기록, 입양 후 자동 점검은 관리자 화면 로그인 제한.
- 24PetShelter: 공개 기능 목록이 “intake, medical, and adoptions” 수준으로 제한됨. C1~C7의 구체 화면·도움말은 공개되지 않아 전부 `UNKNOWN` 처리.
- Petstablished: 공개 FAQ에서 대기열·상태·체크리스트·Home Visit·Additional Screening·메모 감사 기록까지 확인. 신청자 회신 보존, 신청자 추가 업로드, 신청서 담당자 지정, 입양 후 예약형 체크인은 공개 FAQ에서 미확인.

