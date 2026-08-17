const app = document.querySelector("#app");
const nav = document.querySelector("#main-nav");
const searchInput = document.querySelector("#global-search");
const searchPanel = document.querySelector("#search-panel");
const sidebar = document.querySelector(".sidebar");

const data = await fetch("data.json").then((response) => response.json());
const docs = data.docs;
const byId = new Map(docs.map((doc) => [doc.id, doc]));
const byPath = new Map(docs.map((doc) => [doc.path, doc]));

const routes = [
  ["문서 찾기", "/", "⌂", "전체 문서"],
  ["주제별 문서", "/library/m2", "◐", "M2 계획·현황"],
  ["주제별 문서", "/library/m1", "◷", "M1 계획·산출물"],
  ["주제별 문서", "/library/results", "◈", "실험 결과 보고서"],
  ["주제별 문서", "/library/interview", "◎", "고객 인터뷰"],
  ["주제별 문서", "/library/workflow", "◫", "쉘터 업무 플로우"],
  ["주제별 문서", "/library/competitors", "▥", "경쟁사 조사"],
  ["주제별 문서", "/library/methods", "▧", "출처·분석 방법"],
  ["주제별 문서", "/library/appendix", "◇", "별첨"],
];

nav.innerHTML = [...new Set(routes.map(([group]) => group))].map((group) =>
  `<div class="nav-section">${group}</div>${routes.filter(([item]) => item === group).map(([, path, icon, label]) =>
    `<a class="nav-link" data-route="${path}" href="#${path}"><span class="nav-icon">${icon}</span>${label}</a>`).join("")}`
).join("");

document.querySelector("#build-time").textContent = `갱신 ${new Intl.DateTimeFormat("ko", { dateStyle: "short", timeStyle: "short" }).format(new Date(data.generatedAt))}`;
document.querySelector("#menu-button").addEventListener("click", () => sidebar.classList.toggle("open"));

// 문서 목록·링크를 Markdown 뷰 대신 사이트 내 전용 페이지로 연결 (2026-08-13, Track 2 기획안 시각본 대체)
const docPageOverrides = new Map([
  ["deliverables/Track2_LMF_소구점_검증_실험_기획_20260805.md", "track2-plan.html"],
  ["deliverables/Track2_M1_중간성과분석_20260815.md", "track2-m1-report.html"],
]);

function hrefForDoc(doc) {
  return docPageOverrides.get(doc.path) ?? `#/doc/${doc.id}`;
}

function docLink(path, label, className = "") {
  const doc = byPath.get(path);
  return doc ? `<a class="${className}" href="${hrefForDoc(doc)}">${label ?? doc.title}</a>` : label ?? path;
}

function pageHeader(eyebrow, title, lead) {
  return `<p class="eyebrow">${eyebrow}</p><h1 class="page-title">${title}</h1><p class="page-lead">${lead}</p>`;
}

const collectionDefinitions = {
  m2: { title: "M2 계획·현황", lead: "M2 실행 계획과 진행 중인 트랙별 산출물입니다.", homeLead: "M2 실행 계획과 진행 중인 트랙별 산출물입니다.", paths: ["deliverables/M2_실행계획_20260817.md"], homePaths: ["deliverables/M2_실행계획_20260817.md"] },
  m1: { title: "M1 계획·산출물", lead: "프로젝트 배경과 M1 실행 계획, Track 2 LMF 1차 라운드의 기획 산출물입니다.", homeLead: "프로젝트 배경과 M1 실행 계획, Track 2 LMF 1차 라운드의 기획 산출물입니다.", paths: ["킥오프정리_노션용_v2.md", "deliverables/Track2_LMF_소구점_검증_실험_기획_20260805.md", "meetings/2026-08-07_Track2_LMF_후속기획.md", "deliverables/Track2_LMF_가설_ICE_재스코어링_20260809.md", "deliverables/Petify_for_Shelters_PRD_v0.1_20260809.md"], homePaths: ["킥오프정리_노션용_v2.md", "deliverables/Track2_LMF_소구점_검증_실험_기획_20260805.md", "meetings/2026-08-07_Track2_LMF_후속기획.md", "deliverables/Track2_LMF_가설_ICE_재스코어링_20260809.md", "deliverables/Petify_for_Shelters_PRD_v0.1_20260809.md"] },
  results: { title: "실험 결과 보고서", lead: "집행한 실험의 성과를 사전 판정 기준으로 대조해 정리한 보고서입니다.", homeLead: "집행한 실험의 성과를 사전 판정 기준으로 대조해 정리한 보고서입니다.", paths: ["deliverables/Track2_M1_중간성과분석_20260815.md"], homePaths: ["deliverables/Track2_M1_중간성과분석_20260815.md"] },
  interview: { title: "고객 인터뷰", lead: "Gina 인터뷰 계획과 확인된 인사이트, LMF 데모 콜 진행 가이드와 사전조사 자료입니다.", paths: ["지나인터뷰_계획.md", "deliverables/중간점검_2_Gina_인터뷰_인사이트_202608.md", "deliverables/Track2_리드인터뷰_가이드_20260817.md", "analysis/SantaBarbara_카운티_사전조사_20260817.md"] },
  workflow: { title: "쉘터 업무 플로우", lead: "미국 동물보호소·레스큐의 조직 유형과 구조부터 입양까지의 업무 흐름을 정리한 문서입니다.", paths: ["미국쉘터_구조부터입양까지_업무플로우_딥리서치_20260725.md"] },
  competitors: { title: "경쟁사 조사", lead: "경쟁 4사의 제품·가격·기능, 사용자 리뷰와 4개 제품 데모 UI·UX 검증 자료입니다.", paths: ["경쟁4사_검증본_M1실무요약_20260726.md", "경쟁4사_딥리서치_20260725.md", "경쟁4사_리뷰40개_파일럿코딩_20260726.md"] },
  methods: { title: "출처·분석 방법", lead: "리뷰 출처, 데모 접근 경로와 기획·분석의 근거를 정리한 문서입니다.", paths: ["EBP_ShelterCRM_2주계획검토.md", "sources/source-index.md", "EBP_경쟁4사_리뷰전수_질적분석.md", "sources/competitor-demo-access.md", "analysis/EBP_경쟁사_리뷰_데모_UIUX_전문가패널_20260728.md", "deliverables/Track2_ICP_Persona_소재_정의_근거_20260805.md", "analysis/소재C_인테이크필드_재검증_20260809.md"] },
  appendix: { title: "별첨", lead: "실행에 필요한 설정 가이드와 Shelter CRM 본 조사 범위 밖의 참고 자료입니다.", paths: ["펫나우_비문인식_현재기능_검증_20260726.md", "deliverables/Track2_광고계정_설정가이드_Meta_LinkedIn_20260805.md", "deliverables/Track2_LMF_랜딩_구현_및_이벤트_정의서_20260810.md", "deliverables/Track2_LMF_데모_팀피드백_반영결과_20260811.md"] },
};

const primaryGroups = ["m2", "m1", "results", "interview", "workflow", "competitors", "methods", "appendix"];

const externalCollectionDocs = {
  interview: [{
    title: "인터뷰 후보·섭외 현황",
    description: "인터뷰 후보, 우선순위, 연락 진행 상태를 관리하는 Google Sheet",
    role: "섭외 현황",
    url: "https://docs.google.com/spreadsheets/d/1wkeSUFVlOBCDuR5_GCHLElfhQyS0cTswEWkXcaSp1Ho/edit?pli=1&gid=0#gid=0",
  }],
};

const documentRoles = new Map([
  ["킥오프정리_노션용_v2.md", "실행 계획"],
  ["PROJECT_STATE.md", "진행 현황"],
  ["가설_근거_반증실험_보드.md", "가설 관리"],
  ["지나인터뷰_계획.md", "인터뷰 설계"],
  ["deliverables/중간점검_2_Gina_인터뷰_인사이트_202608.md", "인터뷰 결과"],
  ["deliverables/Track2_리드인터뷰_가이드_20260817.md", "인터뷰 진행"],
  ["analysis/SantaBarbara_카운티_사전조사_20260817.md", "인터뷰 사전조사"],
  ["deliverables/Track2_M1_중간성과분석_20260815.md", "중간 성과 보고"],
  ["deliverables/Track2_LMF_소구점_검증_실험_기획_20260805.md", "Track 2 계획"],
  ["meetings/2026-08-07_Track2_LMF_후속기획.md", "상세 기획"],
  ["deliverables/Track2_ICP_Persona_소재_정의_근거_20260805.md", "기획 근거"],
  ["analysis/소재C_인테이크필드_재검증_20260809.md", "추가 검증 근거"],
  ["deliverables/Track2_LMF_가설_ICE_재스코어링_20260809.md", "ICE 재평가"],
  ["deliverables/Petify_for_Shelters_PRD_v0.1_20260809.md", "프리토타입 PRD"],
  ["deliverables/Track2_광고계정_설정가이드_Meta_LinkedIn_20260805.md", "실행 가이드"],
  ["deliverables/Track2_LMF_랜딩_구현_및_이벤트_정의서_20260810.md", "구현·이벤트 정의"],
  ["미국쉘터_구조부터입양까지_업무플로우_딥리서치_20260725.md", "업무 이해"],
  ["경쟁4사_검증본_M1실무요약_20260726.md", "먼저 읽기"],
  ["경쟁4사_딥리서치_20260725.md", "상세 자료"],
  ["경쟁4사_리뷰40개_파일럿코딩_20260726.md", "분석 근거"],
  ["sources/source-index.md", "리뷰 출처"],
  ["sources/competitor-demo-access.md", "데모 접근"],
  ["EBP_경쟁4사_리뷰전수_질적분석.md", "분석 설계"],
  ["EBP_ShelterCRM_2주계획검토.md", "계획 검토"],
  ["펫나우_비문인식_현재기능_검증_20260726.md", "참고 자료"],
  ["analysis/EBP_경쟁사_리뷰_데모_UIUX_전문가패널_20260728.md", "분석 검토"],
]);

// 외부 호스팅 문서만 여기에 둔다. Track 2 기획안 시각본은 사이트 내 track2-plan.html로 이전(2026-08-13)
const externalDocumentUrls = new Map([]);

// 문서 페이지에서 연결할 사이트 내 시각 페이지
const documentVisualPages = new Map([
  ["analysis/경쟁사_데모_UIUX_통합분석.md", ["demo-insights.html", "UI·UX 화면 분석 보기 →"]],
  ["deliverables/Track2_LMF_소구점_검증_실험_기획_20260805.md", ["track2-plan.html", "기획안 시각본 보기 →"]],
  ["deliverables/Track2_M1_중간성과분석_20260815.md", ["track2-m1-report.html", "중간 보고 시각본 보기 →"]],
]);

function compactDocRow(doc, index) {
  const number = String(index + 1).padStart(2, "0");
  const externalUrl = externalDocumentUrls.get(doc.path);
  const href = externalUrl ?? hrefForDoc(doc);
  const externalAttributes = externalUrl ? ' target="_blank" rel="noopener noreferrer"' : "";
  const rowClass = externalUrl ? "compact-doc-row external-doc-row" : "compact-doc-row";
  const arrow = externalUrl ? "↗" : "→";
  return `<a class="${rowClass}" href="${href}"${externalAttributes}><span class="compact-doc-number">${number}</span><span class="compact-doc-copy"><strong>${doc.title}</strong><small>${doc.description}</small></span><span class="compact-doc-role">${documentRoles.get(doc.path) ?? doc.category}</span><span class="compact-doc-arrow">${arrow}</span></a>`;
}

function visualAnalysisRow(index) {
  const number = String(index + 1).padStart(2, "0");
  return `<a class="compact-doc-row" href="demo-insights.html"><span class="compact-doc-number">${number}</span><span class="compact-doc-copy"><strong>경쟁사 데모 제품 UI·UX 시각 분석</strong><small>4개 제품 데모의 과업별 검증 결과와 화면 증거</small></span><span class="compact-doc-role">화면 검증</span><span class="compact-doc-arrow">→</span></a>`;
}

function externalDocRow(doc, index) {
  const number = String(index + 1).padStart(2, "0");
  return `<a class="compact-doc-row external-doc-row" href="${doc.url}" target="_blank" rel="noopener noreferrer"><span class="compact-doc-number">${number}</span><span class="compact-doc-copy"><strong>${doc.title}</strong><small>${doc.description}</small></span><span class="compact-doc-role">${doc.role}</span><span class="compact-doc-arrow">↗</span></a>`;
}

function collectionRows(key, selectedDocs) {
  const externalDocs = externalCollectionDocs[key] ?? [];
  if (key !== "competitors") return [
    ...externalDocs.map(externalDocRow),
    ...selectedDocs.map((doc, index) => compactDocRow(doc, index + externalDocs.length)),
  ].join("");
  return [
    compactDocRow(selectedDocs[0], 0),
    visualAnalysisRow(1),
    ...selectedDocs.slice(1).map((doc, index) => compactDocRow(doc, index + 2)),
  ].join("");
}

function collectionCount(key, selectedDocs) {
  return selectedDocs.length + (externalCollectionDocs[key]?.length ?? 0) + (key === "competitors" ? 1 : 0);
}

function docsForCollection(key) {
  const definition = collectionDefinitions[key];
  return definition.paths.map((path) => byPath.get(path)).filter(Boolean);
}

function docsForHome(key) {
  const definition = collectionDefinitions[key];
  return (definition.homePaths ?? definition.paths).map((path) => byPath.get(path)).filter(Boolean);
}

function renderLibrary(key = "all") {
  if (key === "all") {
    app.innerHTML = `${pageHeader("문서 목록", "Petnow for shelters PMF 프로젝트 문서", "카테고리별 전체 문서와 각 문서의 역할을 한 화면에서 볼 수 있습니다.")}
      <div class="library-summary"><strong>원본 문서 ${docs.length}개</strong><span>상단 검색 또는 왼쪽 주제 메뉴에서 찾아보세요</span><a class="download-all" href="Petnow_Shelter_CRM_전체_Markdown.zip" download>전체 Markdown 다운로드 ↓</a></div>
      <div class="compact-library">${primaryGroups.map((groupKey, groupIndex) => { const group = collectionDefinitions[groupKey]; const groupDocs = docsForHome(groupKey); const isReference = ["methods", "appendix"].includes(groupKey); return `<section class="compact-section ${isReference ? "reference-section" : ""}"><div class="compact-section-head"><div><span>${String(groupIndex + 1).padStart(2, "0")}</span><h2>${group.title}</h2><b>${collectionCount(groupKey, groupDocs)}개</b></div>${isReference ? `<small class="section-tier">참고 자료</small>` : ""}<p>${group.homeLead ?? group.lead}</p><div class="compact-section-links"><a href="#/library/${groupKey}">섹션 열기 →</a></div></div><div class="compact-doc-list">${collectionRows(groupKey, groupDocs)}</div></section>`; }).join("")}</div>`;
    return;
  }
  const definition = collectionDefinitions[key];
  if (!definition) return renderNotFound();
  const selectedDocs = docsForCollection(key);
  app.innerHTML = `${pageHeader("문서 분류", definition.title, definition.lead)}
    <div class="collection-list-head"><strong>문서 목록</strong><span>${collectionCount(key, selectedDocs)}개</span></div>
    <div class="collection-doc-list">${collectionRows(key, selectedDocs)}</div>`;
}

const evidence = [
  ["SL-00-dashboard.png","기준 화면","초기 대시보드","계정 진입 후 정보 구조와 주요 메뉴 확인","운영 현황과 메뉴 접근 기준 화면","중립","후속 과업의 출발점으로 사용"],
  ["SL-T1-01-intake-form.png","T1 · 등록","Stray Intake 초기 양식","동물 등록 전 발견자 주소·전화·이메일 등 사람 정보 입력 요구","단계 증가","마찰","동물 우선 긴급 등록과 사람 정보 후속 보완 검토"],
  ["SL-T1-02-intake-completed.png","T1 · 등록","첫 제출 전 전체 양식","약 37개 입력 필드와 긴 단일 흐름 확인","입력 부담 높음","마찰","역할·시점별 단계 분리와 필수 항목 최소화"],
  ["SL-T1-03-intake-validation-recovered.png","T1 · 오류 복구","검증 오류 복구 후 양식","종·견종 선택 후 일정·메모·연령 일부 초기화, 8회 이상 재입력","오류 복구 미흡","위험","조건 변경 시 기존 입력 보존과 영향 사전 안내"],
  ["SL-T1-04-intake-success.png","T1 · 결과","동물 기록 생성 성공","2세 입력 결과가 0Y/5M/0D, Puppy로 표시","입력·저장 불일치","위험","저장 전후 값 검증과 중대 필드 변경 경고"],
  ["SL-T1-05-foster-placement-success.png","T1 · 임보","Alex Kim 임보 배치 성공","동물 등록과 임보 배치가 별도 이벤트로 기록","상태 이력 가시성 확보","강점","배치 이력과 현재 담당자를 함께 표시"],
  ["SL-T3-01-payment-approval-boundary.png","T3 · 결제","$200 결제·문자 발송 직전","입양비 자동 반영, Missing Microchip 경고, 외부 문자 발송 결합","데이터 연속성·선행조건 우수","강점","가격 재입력 제거와 처리 시점 경고 적용"],
  ["SL-T3-02-checkout-sent.png","T3 · 상태","Checkout Sent 상태","결제 링크 발송 후 운영자가 발송 상태 확인 가능","상태 가시성 우수","강점","현재 상태와 다음 행동을 동시에 표시"],
  ["SL-T3-03-status-pending-payment.png","T3 · 상태","Milo 결제 대기","결제 링크 발송 후 Available Foster 유지, 입양 완료로 조기 전환되지 않음","결제 전 상태 유지 확인·결제 후 미검증","강점","외부 결제 완료 전 상태 변경 방지와 완료 후 동기화 별도 검증"],
  ["SL-M-T1-dashboard.png","모바일 · T1","모바일 동물 대시보드","데스크톱 축소가 아닌 모바일 메뉴·카드 제공","모바일 정보구조 우수","강점","역할별 모바일 첫 화면 설계"],
  ["SL-M-T1-intake-form.png","모바일 · T1","모바일 Intake 양식","약 37개 필드와 저장 버튼 접근 확인. 모바일에서 신규 기록 저장까지 재수행하지 않음","완결성 추정·입력 부담 확인","마찰","모바일 필수 입력 축소와 단계 저장 후 실제 저장 검증"],
  ["SL-M-T2-observations.png","모바일 · T2","Daily Observations 비활성","운영자 계정에서 계정 선행 설정 미완료로 비활성. 임보자 직접 입력은 미검증","설정 의존성·사용자 흐름 미검증","마찰","기본 기록 유형 제공과 임보자 계정 흐름 별도 검증"],
  ["SL-M-T2-treatments.png","모바일 · T2","투약 Treatments 화면","운영자 계정에서 Complete·Schedule 접근 확인. 임보자 직접 입력은 미검증","운영자 화면 접근 확인","중립","임보자 입력과 운영자 확인의 전체 흐름 검증"],
  ["SL-M-T3-cart-status.png","모바일 · T3","Checkout Sent 모바일 상태","운영자 계정에서 신청자·결제 발송 상태 확인. 입양자용 계약·서명·결제는 미검증","운영자 상태 확인만 완료","중립","입양자 체크아웃과 결제 후 동물 상태 변경 별도 검증"],
].map(([file, ...rest]) => [`assets/shelterluv-evidence/${file}`, "Shelterluv", file, ...rest]);

evidence.push(...[
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T1-01-add-pet-form.png","Pawlytics","PW2-T1-01-add-pet-form.png","T1 · 등록","동물 등록 양식","가상 동물의 기본 정보 입력","등록 경로 확인","중립","초기 필수 항목과 후속 보완 항목 분리"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T1-02-pet-created.png","Pawlytics","PW2-T1-02-pet-created.png","T1 · 결과","동물 기록 생성","동물 기본 정보 저장과 상세 화면 진입 완료","동물 등록 완료","강점","저장 성공 상태와 다음 과업 연결"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T1-03-foster-form.png","Pawlytics","PW2-T1-03-foster-form.png","T1 · 임보자","임보자 등록","가상 임보자와 Foster 태그 저장","사람 기록 생성 완료","강점","역할 태그와 가용 상태 구분"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T1-04-foster-assignment-form.png","Pawlytics","PW2-T1-04-foster-assignment-form.png","T1 · 배치","임보 위치 연결","동물 Current Location에 임보자 연결","위치 연결 완료","중립","위치·상태·담당자·시작일 동시 저장"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T1-05-foster-confirmed.png","Pawlytics","PW2-T1-05-foster-confirmed.png","T1 · 상태","임보 상태 확인","위치 지정 후 상태를 In Foster로 별도 변경","위치·상태 자동 연동 부재","마찰","불일치 경고와 단일 처리 제공"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T2-01-medical-form.png","Pawlytics","PW2-T2-01-medical-form.png","T2 · 의료","투약 메모 입력","투약명·용량·주기·보고자를 자유 텍스트로 입력","빠른 입력·구조화 부족","중립","핵심 투약 항목 구조화"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T2-02-medical-saved.png","Pawlytics","PW2-T2-02-medical-saved.png","T2 · 의료","의료 기록 저장","기록 내용과 작성자·시간 보존","저장 추적 가능","강점","작성자·시각·변경 이력 제공"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T2-03-behavior-saved.png","Pawlytics","PW2-T2-03-behavior-saved.png","T2 · 행동","행동 기록 저장","임보자 보고를 운영자가 대신 입력해 운영자 작성으로 표시","보고자·입력자 구분 부재","마찰","보고자와 시스템 입력자 별도 보존"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T3-01-adopter-form.png","Pawlytics","PW2-T3-01-adopter-form.png","T3 · 입양자","입양자 등록","가상 입양자와 역할 태그 저장","입양자 연결 준비 완료","강점","사람 역할과 과업 상태 구분"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-T3-02-adoption-email-boundary.png","Pawlytics","PW2-T3-02-adoption-email-boundary.png","T3 · 안전 경계","Outcome 실행 직전","계약 이메일 발송과 동물 상태 변경이 한 버튼에 결합","위험 동작 결합","마찰","계약·결제·상태 변경 분리와 영향 사전 안내"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-M-01-adoption-boundary.png","Pawlytics","PW2-M-01-adoption-boundary.png","모바일 · 입양","입양 Outcome 화면","내비게이션과 모달이 겹쳐 일부 필드와 안내가 가려짐","과업 완결성 낮음","마찰","모바일 내비게이션·모달 중첩 방지"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-M-02-pet-overview.png","Pawlytics","PW2-M-02-pet-overview.png","모바일 · 상세","동물 상세 화면","데스크톱 전체 화면을 작게 축소해 표시","정밀 터치 필요","마찰","390px 단일 열 재배치"],
  ["assets/competitor-evidence/pawlytics-recheck-20260729/PW2-M-03-medical.png","Pawlytics","PW2-M-03-medical.png","모바일 · 의료","의료 기록 화면","조회는 가능하나 작은 글자·터치 영역과 데스크톱 카드 폭 유지","현장 입력 부담","마찰","핵심 기록 버튼 고정과 터치 영역 확대"],
  ["assets/competitor-evidence/animal-shelter-manager/ASM-T1-01-animal-and-foster-form.png","Animal Shelter Manager","ASM-T1-01-animal-and-foster-form.png","T1 · 등록","동물·임보 정보 양식","동물과 사람 정보를 한 업무 흐름에서 입력 가능","기능 밀도는 높지만 연결성 확보","중립","관련 개체·사람 정보를 단계형 흐름으로 연결"],
  ["assets/competitor-evidence/animal-shelter-manager/ASM-T1-02-animal-created.png","Animal Shelter Manager","ASM-T1-02-animal-created.png","T1 · 결과","동물 기록 생성","약 11개 핵심 입력 후 동물 기록 생성 완료","등록 효율 확인","강점","초기 등록 항목 최소화 유지"],
  ["assets/competitor-evidence/animal-shelter-manager/ASM-T1-03-foster-confirmed.png","Animal Shelter Manager","ASM-T1-03-foster-confirmed.png","T1 · 임보","Foster 배치 확인","Milo의 위치와 Alex 임보 관계가 반영됨","임보 배치 완료","강점","현재 위치·담당자·시작일을 함께 표시"],
  ["assets/competitor-evidence/animal-shelter-manager/ASM-T2-01-medical-regimen.png","Animal Shelter Manager","ASM-T2-01-medical-regimen.png","T2 · 의료","Medical regimen 입력","투약 일정·용량 등 세부 처방 입력 기능 제공","기능 깊이 우수","강점","복잡한 처방은 고급 항목으로 분리"],
  ["assets/competitor-evidence/animal-shelter-manager/ASM-T2-02-medical-saved.png","Animal Shelter Manager","ASM-T2-02-medical-saved.png","T2 · 의료","Medical Book 저장","동물·임보 위치·활성 처방·남은 투약 정보 확인","운영 추적성 우수","강점","현재 처방과 남은 실행을 한 화면에 요약"],
  ["assets/competitor-evidence/animal-shelter-manager/ASM-T2-03-behavior-log-success.png","Animal Shelter Manager","ASM-T2-03-behavior-log-success.png","T2 · 행동","행동 이력 저장","History에 행동 기록 저장 완료","행동 기록 완료","강점","행동 기록과 상태 변화 이력 연결"],
  ["assets/competitor-evidence/animal-shelter-manager/ASM-T3-01-payment-contract-boundary.png","Animal Shelter Manager","ASM-T3-01-payment-contract-boundary.png","T3 · 입양","결제·계약 안전 경계","입양자·동물·결제·서류 옵션 확인 후 외부 영향 실행 전 중단","최종 실행 직전까지 확인","중립","결제·상태·이메일 영향을 실행 전에 요약"],
  ["assets/competitor-evidence/animal-shelter-manager/ASM-M-01-animal-detail.png","Animal Shelter Manager","ASM-M-01-animal-detail.png","모바일 · 상세","모바일 동물 상세","고정 폭 표·탭·폼이 축소되어 텍스트와 터치 대상이 작음","모바일 최적화 낮음","마찰","표를 카드로 전환하고 주요 행동을 하단 고정"],
  ["assets/competitor-evidence/pawplacer/PP-T1-01-add-pet-form.png","PawPlacer","PP-T1-01-add-pet-form.png","T1 · 등록","동물 등록 양식","약 18개 항목으로 동물 기본 정보 입력","등록 구조 명확","중립","필수 항목과 선택 항목 시각적 구분"],
  ["assets/competitor-evidence/pawplacer/PP-T1-02-pet-created.png","PawPlacer","PP-T1-02-pet-created.png","T1 · 결과","동물 기록 생성","Milo 기록 생성과 후속 상세 화면 연결 완료","동물 등록 완료","강점","생성 직후 다음 과업 바로 제안"],
  ["assets/competitor-evidence/pawplacer/PP-T1-03-foster-form.png","PawPlacer","PP-T1-03-foster-form.png","T1 · 임보","임보자 생성 양식","Alex 임보자 레코드 생성과 배치 준비 경로 확인","사람 등록 경로 명확","강점","동물 흐름 안에서 사람 생성·선택 제공"],
  ["assets/competitor-evidence/pawplacer/PP-T1-04-foster-assignment.png","PawPlacer","PP-T1-04-foster-assignment.png","T1 · 임보","임보 배치 완료","Fostered 상태와 관계 시작일이 연결되지만 별도 입력 필요","완료되나 이중 처리 존재","마찰","임보자 선택 시 상태·관계·시작일 동시 반영"],
  ["assets/competitor-evidence/pawplacer/PP-T2-02-prescription-confirmed.png","PawPlacer","PP-T2-02-prescription-confirmed.png","T2 · 의료","투약 처방 저장","처방은 저장되지만 빈도 수량과 단위 조합의 의미가 모호함","기록 완료·해석 위험","마찰","하루 2회·12시간마다 등 자연어 주기 제공"],
  ["assets/competitor-evidence/pawplacer/PP-T2-03-behavior-note-saved.png","PawPlacer","PP-T2-03-behavior-note-saved.png","T2 · 행동","행동 메모 저장","행동 관찰 내용 저장 완료","행동 기록 완료","강점","의료·행동 이력을 시간순으로 통합"],
  ["assets/competitor-evidence/pawplacer/PP-T3-03-adoption-boundary.png","PawPlacer","PP-T3-03-adoption-boundary.png","T3 · 입양","입양 완료 방식 선택","Checkout QR과 현장 즉시 완료 분기를 확인하고 외부 영향 실행 전 중단","최종 실행 직전까지 확인","중립","원격·현장 처리의 상태 차이와 영향을 명시"],
  ["assets/competitor-evidence/pawplacer/PP-M-01-adoption-boundary.png","PawPlacer","PP-M-01-adoption-boundary.png","모바일 · 입양","모바일 입양 방식 선택","390px에서 단일 열 카드로 재배치되고 가로 스크롤 없이 주요 선택 노출","모바일 최적화 우수","강점","단일 열·큰 터치 영역·단계별 선택 구조 적용"],
]);

function evidenceCard(item) {
  const [asset,product,file,task,title,observation,verdict,tone,implication] = item;
  const toneClass = tone === "위험" ? "red" : tone === "마찰" ? "amber" : tone === "강점" ? "" : "blue";
  return `<article class="evidence-detail"><button class="evidence-image" data-image="${asset}" aria-label="${title} 확대"><img loading="lazy" src="${asset}" alt="${title}"/></button><div class="evidence-copy"><div class="evidence-meta"><span class="tag">${product}</span><span class="tag blue">${task}</span><span class="tag ${toneClass}">${tone}</span></div><h3>${title}</h3><dl><div><dt>검증 관찰</dt><dd>${observation}</dd></div><div><dt>판정</dt><dd>${verdict}</dd></div><div><dt>펫나우 적용</dt><dd>${implication}</dd></div></dl><small>${file}</small></div></article>`;
}

function wireLightbox() {
  document.querySelectorAll(".evidence-image").forEach((button) => button.addEventListener("click", () => {
    const box = document.createElement("div"); box.className = "lightbox"; box.innerHTML = `<img src="${button.dataset.image}" alt="화면 증거 확대"/>`;
    box.addEventListener("click", () => box.remove()); document.body.append(box);
  }));
}

function insertEvidenceGallery(headingText, product) {
  const body = document.querySelector(".markdown-body");
  const heading = [...body.querySelectorAll("h3")].find((item) => item.textContent.includes(headingText));
  if (!heading) return;
  let boundary = heading.nextElementSibling;
  while (boundary && !["H2", "H3"].includes(boundary.tagName)) boundary = boundary.nextElementSibling;
  const items = evidence.filter((item) => item[1] === product);
  const gallery = document.createElement("section");
  gallery.className = "inline-evidence";
  gallery.innerHTML = `<div class="section-head"><h3>${product} 화면 증거</h3><span class="tag blue">${items.length}개 화면</span></div><div class="evidence-stack">${items.map(evidenceCard).join("")}</div>`;
  if (boundary) boundary.before(gallery); else body.append(gallery);
}

function wireDocumentToc() {
  const body = document.querySelector(".markdown-body");
  const toc = document.querySelector(".toc");
  if (!body || !toc) return;
  const headings = [...body.querySelectorAll("h2, h3")].filter((heading) => heading.id);
  toc.innerHTML = `<strong>문서 목차</strong><div class="toc-links">${headings.map((heading) =>
    `<a class="toc-link ${heading.tagName === "H3" ? "toc-sub" : ""}" href="#${heading.id}" data-target="${heading.id}">${heading.textContent.trim()}</a>`
  ).join("")}</div>`;
  const links = [...toc.querySelectorAll(".toc-link")];
  links.forEach((link) => link.addEventListener("click", (event) => {
    event.preventDefault();
    const target = document.getElementById(link.dataset.target);
    target?.scrollIntoView({ behavior: "smooth", block: "start" });
  }));
  const setActive = (id) => links.forEach((link) => {
    const active = link.dataset.target === id;
    link.classList.toggle("active", active);
    if (active) link.setAttribute("aria-current", "location"); else link.removeAttribute("aria-current");
  });
  const observer = new IntersectionObserver((entries) => {
    const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
    if (visible[0]) {
      setActive(visible[0].target.id);
      toc.querySelector(".toc-link.active")?.scrollIntoView({ block: "nearest" });
    }
  }, { rootMargin: "-82px 0px -72% 0px", threshold: 0 });
  headings.forEach((heading) => observer.observe(heading));
  if (headings[0]) setActive(headings[0].id);
}

function renderDocument(id) {
  const doc = byId.get(id);
  if (!doc) return renderNotFound();
  const visualPage = documentVisualPages.get(doc.path);
  const visualAnalysisLink = visualPage ? `<a class="document-visual-link" href="${visualPage[0]}">${visualPage[1]}</a>` : "";
  const markdownUrl = new URL(doc.markdown, window.location.href).href;
  const downloadName = doc.path.split("/").pop();
  const bodyClass = doc.path === "deliverables/Track2_LMF_소구점_검증_실험_기획_20260805.md" ? " track2-plan" : "";
  app.innerHTML = `<div class="doc-layout"><article class="document${bodyClass}"><header class="document-header"><div class="evidence-meta"><span class="tag">${doc.category}</span></div><h1>${doc.title}</h1><div class="source-path">${doc.path}</div><div class="document-actions" aria-label="원본 Markdown 공유"><a href="${doc.markdown}" target="_blank" rel="noopener">Markdown 열기 ↗</a><a href="${doc.markdown}" download="${downloadName}">Markdown 다운로드 ↓</a><button type="button" data-copy-markdown="${markdownUrl}">AI용 링크 복사</button></div><p class="document-actions-help">SPA 화면 대신 원본 Markdown 주소를 AI 도구에 전달할 수 있습니다.</p>${visualAnalysisLink}</header><div class="markdown-body">${doc.html}</div></article><aside class="toc"><strong>문서 목차</strong></aside></div>`;
  app.querySelector("[data-copy-markdown]")?.addEventListener("click", async (event) => {
    const button = event.currentTarget;
    const originalLabel = button.textContent;
    try {
      await navigator.clipboard.writeText(button.dataset.copyMarkdown);
      button.textContent = "링크 복사 완료";
    } catch {
      window.prompt("아래 Markdown 링크를 복사해 주세요.", button.dataset.copyMarkdown);
    }
    window.setTimeout(() => { button.textContent = originalLabel; }, 1800);
  });
  app.querySelectorAll(".markdown-body a[href^='#']").forEach((a) => {
    a.addEventListener("click", (e) => {
      const target = document.getElementById(a.getAttribute("href").slice(1));
      if (target) { e.preventDefault(); target.scrollIntoView({ behavior: "smooth" }); }
    });
  });
  if (doc.path === "analysis/경쟁사_데모_UIUX_통합분석.md") {
    insertEvidenceGallery("3.5 화면 증거", "Shelterluv");
    insertEvidenceGallery("4.2 Pawlytics", "Pawlytics");
    insertEvidenceGallery("4.3 Animal Shelter Manager", "Animal Shelter Manager");
    insertEvidenceGallery("4.4 PawPlacer", "PawPlacer");
    wireLightbox();
  }
  wireDocumentToc();
}

function renderNotFound() { app.innerHTML = pageHeader("404", "페이지를 찾을 수 없습니다", "전역 메뉴에서 다른 화면을 선택해 주세요."); }

function route() {
  const path = location.hash.slice(1) || "/";
  let activePath = path;
  if (path.startsWith("/doc/")) {
    const currentDoc = byId.get(path.split("/")[2]);
    const groupKey = currentDoc && primaryGroups.find((key) => collectionDefinitions[key].paths.includes(currentDoc.path));
    if (groupKey) activePath = `/library/${groupKey}`;
  }
  document.querySelectorAll(".nav-link").forEach((link) => link.classList.toggle("active", activePath === link.dataset.route || (link.dataset.route !== "/" && activePath.startsWith(link.dataset.route + "/"))));
  sidebar.classList.remove("open");
  if (path === "/") renderLibrary();
  else if (path.startsWith("/library/")) renderLibrary(path.slice("/library/".length));
  else if (path.startsWith("/doc/")) renderDocument(path.split("/")[2]);
  else renderNotFound();
  window.scrollTo(0, 0);
}

function search(query) {
  const value = query.trim().toLocaleLowerCase("ko");
  if (!value) { searchPanel.classList.add("hidden"); return; }
  const results = docs.filter((doc) => `${doc.title} ${doc.description} ${doc.text}`.toLocaleLowerCase("ko").includes(value)).slice(0,12);
  searchPanel.innerHTML = results.length ? results.map((doc) => `<a class="search-result" href="${hrefForDoc(doc)}"><strong>${doc.title}</strong><small>${doc.category} · ${doc.description}</small></a>`).join("") : `<div class="search-result"><strong>검색 결과 없음</strong><small>다른 검색어를 입력해 주세요.</small></div>`;
  searchPanel.classList.remove("hidden");
}

searchInput.addEventListener("input", (event) => search(event.target.value));
searchPanel.addEventListener("click", () => { searchInput.value = ""; searchPanel.classList.add("hidden"); });
document.addEventListener("keydown", (event) => { if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") { event.preventDefault(); searchInput.focus(); } if (event.key === "Escape") searchPanel.classList.add("hidden"); });
window.addEventListener("hashchange", route);
route();
