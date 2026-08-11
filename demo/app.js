const INITIAL = (language='en') => ({
  language,
  view: 'dashboard',
  animalId: 'milo',
  detailTab: 'overview',
  animalFilter: 'all',
  updateFilter: 'all',
  fosterFilter: 'all',
  publishFilter: 'all',
  search: '',
  modal: null,
  drawer: null,
  toast: '',
  intakeStep: 1,
  intakePhoto: false,
  cocoCreated: false,
  cocoPlaced: false,
  placements: {},
  placementAnimalId: 'pepper',
  placementFosterId: 'casey',
  requestSent: true,
  requestOpened: false,
  fosterSubmitted: true,
  fosterSubmittedNow: false,
  formChoice: 'same',
  updateApproved: false,
  partialApproved: false,
  changesRequested: false,
  miloReady: false,
  profileSaved: false,
  publishStarted: false,
  publishFailed: false,
  published: false,
  uploads: 0,
  selectedUpdate: 'milo',
  selectedFoster: 'jamie',
  messageChannel: 'sms',
  tutorialId: null,
  tutorialStep: null,
  channels: { website: true, petfinder: false, adoptapet: false },
  settingsTab: 'readiness',
  settingsSaved: false,
  draftSaved: true,
  exceptionDone: false,
  taskAssigned: false,
  fosterFormMode: 'weekly',
  dailyCareSubmitted: false,
  dailyTasks: {breakfast:true,morningWalk:true,medication:false,dinner:false,eveningWalk:false},
  mobileNavOpen: false
});

let state = INITIAL(localStorage.getItem('petify-language') || 'en');
let tutorialHistory = [];
let tutorialStepSnapshot = null;
let tutorialStepSnapshotKey = null;
let lastRenderedView = null;
const app = document.querySelector('#app');

const NAVIGATION_KEYS = ['view','animalId','detailTab','animalFilter','updateFilter','fosterFilter','publishFilter','settingsTab','selectedUpdate','selectedFoster','fosterFormMode','search'];
let restoringNavigation = false;
let lastNavigationSignature = null;

function navigationSnapshot() {
  return NAVIGATION_KEYS.reduce((snapshot,key)=>{
    snapshot[key]=state[key];
    return snapshot;
  },{petifyNavigation:true});
}

function navigationSignature(snapshot=navigationSnapshot()) {
  return JSON.stringify(NAVIGATION_KEYS.map(key=>snapshot[key]));
}

function restoreNavigation(snapshot) {
  if(!snapshot?.petifyNavigation) return false;
  NAVIGATION_KEYS.forEach(key=>{
    if(Object.prototype.hasOwnProperty.call(snapshot,key)) state[key]=snapshot[key];
  });
  state.modal=null;
  state.drawer=null;
  state.toast='';
  return true;
}

function syncNavigationHistory() {
  const snapshot=navigationSnapshot();
  const signature=navigationSignature(snapshot);
  if(restoringNavigation){lastNavigationSignature=signature;return;}
  if(lastNavigationSignature===null){
    history.replaceState(snapshot,'');
  } else if(signature!==lastNavigationSignature) {
    if(state.tutorialStep!==null) history.replaceState(snapshot,'');
    else history.pushState(snapshot,'');
  }
  lastNavigationSignature=signature;
}

const BASE_ANIMALS = [
  { id:'pepper', recordId:'1090', name:'Pepper', img:'assets/pepper.png', meta:'Mixed breed · Female · 2 years', queue:'new', stage:'New intake', readiness:'neutral', blocker:'Foster placement', next:'Place in foster', owner:'Alex Rivera', updated:'Today' },
  { id:'nala', recordId:'1091', name:'Nala', img:'assets/nala.png', meta:'Terrier mix · Female · 1 year', queue:'new', stage:'New intake', readiness:'neutral', blocker:'Foster placement', next:'Place in foster', owner:'Sam Chen', updated:'Today' },
  { id:'scout', recordId:'1092', name:'Scout', img:'assets/scout.png', meta:'Jindo mix · Male · 3 years', queue:'new', stage:'New intake', readiness:'neutral', blocker:'Foster placement', next:'Place in foster', owner:'Morgan Kim', updated:'Yesterday' },
  { id:'olive', name:'Olive', img:'assets/olive.png', meta:'Terrier mix · Female · 5 years', queue:'care', stage:'In care', readiness:'neutral', blocker:'None', next:'Open record', owner:'Sam Chen', updated:'Today' },
  { id:'milo', name:'Milo', img:'assets/dog1.png', meta:'Labrador mix · Male · 2 years', queue:'review', stage:'In care', readiness:'review', blocker:'Behavior check-in submitted', next:'Review check-in', owner:'Alex Rivera', updated:'12 min ago' },
  { id:'luna', name:'Luna', img:'assets/dog2.png', meta:'Terrier mix · Female · 1 year', queue:'ready', stage:'In care', readiness:'ready', blocker:'None', next:'Preview profile', owner:'Sam Chen', updated:'Today' },
  { id:'buddy', name:'Buddy', img:'assets/dog3.png', meta:'Jindo mix · Male · 3 years', queue:'review', stage:'In care', readiness:'review', blocker:'Medical review pending', next:'Review record', owner:'Morgan Kim', updated:'Yesterday' },
  { id:'daisy', name:'Daisy', img:'assets/dog4.png', meta:'Poodle mix · Female · 4 years', queue:'published', stage:'In care', readiness:'published', blocker:'None', next:'View live profile', owner:'Alex Rivera', updated:'Aug 7' },
  { id:'rocky', name:'Rocky', img:'assets/rocky.png', meta:'Beagle mix · Male · 4 years', queue:'care', stage:'In care', readiness:'neutral', blocker:'Check-in overdue · 5 days', next:'Follow up with foster', owner:'Morgan Kim', updated:'5 days ago' },
  { id:'maple', name:'Maple', img:'assets/maple.png', meta:'Shepherd mix · Female · 2 years', queue:'care', stage:'In care', readiness:'neutral', blocker:'None', next:'Open record', owner:'Sam Chen', updated:'2 hr ago' },
  { id:'nori', name:'Nori', img:'assets/nori.png', meta:'Corgi mix · Female · 3 years', queue:'care', stage:'In care', readiness:'neutral', blocker:'None', next:'Open record', owner:'Alex Rivera', updated:'38 min ago' }
];

const FOSTER_PEOPLE = [
  {id:'casey',name:'Casey Brooks',initials:'CB'},
  {id:'riley',name:'Riley Park',initials:'RP'}
];

function fosterPerson(id) {
  return FOSTER_PEOPLE.find(person=>person.id===id)||FOSTER_PEOPLE[0];
}

function placementCandidates() {
  return animals().filter(animal=>animal.queue==='new'&&!state.placements[animal.id]);
}

function availablePlacementFosters() {
  const assigned=new Set(Object.values(state.placements));
  return FOSTER_PEOPLE.filter(person=>!assigned.has(person.id));
}

const NAV = [
  ['dashboard','⌂','Dashboard'],
  ['animals','◫','Animals'],
  ['updates','↻','Check-ins'],
  ['fosters','♧','Fosters'],
  ['publishing','↗','Publishing'],
  ['settings','⚙','Settings']
];

const TAB_LABELS = {
  overview:'Overview', profile:'Profile', health:'Health', behavior:'Behavior',
  updates:'Check-ins', media:'Media', documents:'Documents', public:'Public profile', activity:'Activity'
};

const TUTORIALS = {
  a: {
    label:'DEMO A · READINESS',
    name:'Which dogs are ready to go?',
    steps:[
      { selector:'.table-wrap', kind:'manual', title:'Frame the publishing status problem', text:'This view tells the team who is ready, which requirements remain unmet for everyone else, and the next action—without asking around.' },
      { selector:'[data-animal-filter="review"]', kind:'animal-filter', value:'review', title:'Focus on decisions waiting', text:'Filter to animals whose latest information needs a staff decision.' },
      { selector:'[data-open-animal="milo"]', kind:'animal', value:'milo', title:'Open the animal behind the status', text:'Open Milo to show the evidence behind the Needs review label.' },
      { selector:'.status-banner.review', kind:'manual', title:'Show why Milo is not ready', text:'Milo’s status includes the reason, the responsible action, and the effect on publishing—not just a colored label.' },
      { selector:'.status-banner [data-action="review-milo"]', kind:'action', value:'review-milo', title:'Follow the next step', text:'Open the check-in that may resolve Milo’s final unmet requirement.' },
      { selector:'.comparison', kind:'manual', title:'Review the evidence', text:'Compare the current record with Jamie’s new check-in before anything changes.' },
      { selector:'[data-action="approve-update"]', kind:'action', value:'approve-update', title:'Apply the verified change', text:'Apply only the information staff has reviewed to the official record.' },
      { selector:'.status-banner.ready', kind:'manual', title:'Show the publishing status decision', text:'The unmet behavior requirement is resolved, the checklist becomes 5 of 5, and Milo moves to Ready to publish automatically.' },
      { selector:'.status-banner [data-action="open-profile"]', kind:'action', value:'open-profile', title:'Move directly to the outcome', text:'Open the adopter-facing profile from the publishing status decision.' },
      { selector:'.publish-aside', kind:'manual', title:'Check once before publishing', text:'Confirm the public profile and the channel currently available for publishing. Partner channels remain clearly marked as planned.' },
      { selector:'.publish-aside [data-action="publish-now"]', kind:'action', value:'publish-now', title:'Publish to the shelter website', text:'Send the approved profile to the shelter’s own adoption website.' },
      { selector:'.publish-aside', kind:'finish', title:'Publishing status became action', text:'Milo is now live on the shelter website. The demo has connected a record with unmet requirements to an adoption-ready outcome without promising unconfirmed partner integrations.' }
    ]
  },
  b1: {
    label:'DEMO B-1 · CHECK-IN REQUEST',
    name:'Send one check-in request',
    steps:[
      { selector:'.care-program', kind:'manual', nextView:'updates', title:'Daily care goes out automatically', text:'Jamie receives Milo’s daily care link automatically at the scheduled time. Routine completions go straight to Milo’s care log; only a missed medication or reported concern alerts Alex.' },
      { selector:'.update-metrics', kind:'manual', title:'Frame the follow-up burden', text:'Every request, reminder, response, and review is visible here, so coordinators do not manage follow-ups from memory.' },
      { selector:'.page-actions [data-action="request-update"]', kind:'action', value:'request-update', title:'Create one structured request', text:'Request the exact health, behavior, medication, photo, and note fields the team needs.' },
      { selector:'.modal-card .form-grid', kind:'manual', title:'Set the follow-up once', text:'Choose the due date and reminder rule. Petify will follow up automatically if Jamie has not responded.' },
      { selector:'.modal-card [data-action="preview-message"]', kind:'action', value:'preview-message', title:'Preview before sending', text:'Check the exact request and secure link Jamie will receive.' },
      { selector:'.message-tabs [data-message-channel="sms"]', kind:'channel', value:'sms', title:'Switch to the text message', text:'The same request goes out by email and SMS. Most fosters answer the text, and either way the response lands in one record.' },
      { selector:'.message-drawer [data-action="return-request"]', kind:'action', value:'return-request', title:'Return to the request', text:'Go back with the message confirmed and send the request.' },
      { selector:'.modal-card [data-action="send-request"]', kind:'action', value:'send-request', title:'Send once', text:'Send the secure link by SMS and email. The automatic reminder schedule starts now.' },
      { selector:'.pending-request', kind:'manual', title:'Show the waiting state', text:'The console now shows delivery, deadline, and next reminder. Staff can see that follow-up is already handled.' },
      { selector:'.pending-request', kind:'finish', next:'b2', nextLabel:'Continue to the foster response', title:'The request is on its way', text:'See the screen Jamie receives?' }
    ]
  },
  b2: {
    label:'DEMO B-2 · FOSTER RESPONSE',
    name:'What the foster receives',
    steps:[
      { selector:'.pending-request [data-action="preview-foster-form"]', kind:'action', value:'preview-foster-form', title:'Switch to Jamie’s view', text:'Open the same no-account mobile form Jamie receives from the secure link.' },
      { selector:'[data-form-choice="same"]', kind:'choice', value:'same', title:'Report a quiet week', text:'Jamie confirms nothing changed. The form stops asking here — there is nothing else to fill in.' },
      { selector:'[data-action="submit-foster"]', kind:'action', value:'submit-foster', title:'Send the check-in', text:'One tap. No forms to chase, no reply for staff to read.' },
      { selector:'.success-screen', kind:'finish', next:'b3', nextLabel:'Continue to a week with changes', title:'The quiet week is done', text:'Nothing was sent to staff. Milo’s behavior information is current again, so he is now ready to publish. See what happens on a week when something does change?' }
    ]
  },
  b3: {
    label:'DEMO B-3 · REVIEW & APPLY',
    name:'Review and apply the check-in',
    steps:[
      { selector:'.update-metrics', kind:'manual', title:'New check-in arrived', text:'Jamie’s response is waiting in Check-ins. Staff review it before the official record changes.' },
      { selector:'.comparison', kind:'manual', title:'Review before applying', text:'Petify highlights the changed field and keeps the official record untouched until staff approves it.' },
      { selector:'[data-action="approve-update"]', kind:'action', value:'approve-update', title:'Apply the verified check-in', text:'Apply Jamie’s reviewed behavior change and selected photos to the official record.' },
      { selector:'.review-panel', kind:'finish', next:'bpublish', nextLabel:'Continue to publishing', title:'The record is updated', text:'See how the approved information is used next?' }
    ]
  },
  bpublish: {
    label:'DEMO B · PUBLISHING',
    name:'Continue to publishing',
    steps:[
      { selector:'.status-banner.ready', kind:'manual', title:'Connect the check-in to publishing status', text:'The latest foster information resolves Milo’s final unmet requirement and moves him to Ready to publish.' },
      { selector:'.status-banner [data-action="open-profile"]', kind:'action', value:'open-profile', title:'Continue to the adoption outcome', text:'Open the completed public profile without re-entering Jamie’s approved information.' },
      { selector:'.publish-aside', kind:'manual', title:'Confirm the publishing handoff', text:'The same approved record is ready for the shelter website. Petfinder and Adopt a Pet are shown separately as planned integrations.' },
      { selector:'.publish-aside [data-action="publish-now"]', kind:'action', value:'publish-now', title:'Publish the profile', text:'Send Milo to the shelter’s own adoption website.' },
      { selector:'.publish-aside', kind:'finish', title:'The full loop is complete', text:'One request became a reviewed record, a publishing status decision, and a profile published on the shelter website—without manual chasing.' }
    ]
  }
};

const KO_TUTORIALS = {
  a: {
    label:'데모 A · 입양 게시 상태',
    steps:[
      ['게시 상태 판단의 어려움 확인','누가 게시 준비를 마쳤고, 나머지 동물은 어떤 요건을 아직 충족하지 못했으며, 다음 행동이 무엇인지 팀 전체가 별도 확인 없이 파악할 수 있는 화면이다.'],
      ['판단이 필요한 동물만 확인','최신 정보를 직원이 검토해야 하는 동물만 필터링한다.'],
      ['상태의 근거가 되는 동물 열기','Milo를 열어 검토 필요 상태의 근거를 확인한다.'],
      ['Milo가 아직 준비되지 않은 이유 확인','단순한 색상 표시가 아니라 상태의 이유, 담당 행동, 게시에 미치는 영향까지 함께 보여준다.'],
      ['다음 행동으로 바로 이동','Milo의 마지막 미완료 요건을 해결할 수 있는 체크인를 연다.'],
      ['변경 근거 비교','공식 기록을 바꾸기 전에 반영된 기존 기록과 Jamie의 새 관찰을 비교한다.'],
      ['검토한 변경사항 반영','직원이 확인한 정보만 공식 기록에 반영한다.'],
      ['게시 상태 전환 확인','충족하지 못한 행동 요건이 해결되고 체크리스트가 5/5로 완료되면서 Milo가 자동으로 게시 준비 상태가 된다.'],
      ['결과 화면으로 바로 이동','게시 상태 판단 결과에서 입양자용 공개 프로필로 바로 이동한다.'],
      ['게시 전 한 번만 확인','공개 프로필과 현재 게시 가능한 채널을 확인한다. 제휴 채널은 지원 예정 상태로 명확히 구분돼 있다.'],
      ['쉘터 웹사이트에 게시','반영된 프로필을 쉘터 자체 입양 웹사이트에 게시한다.'],
      ['게시 상태가 실제 행동으로 연결','Milo가 쉘터 웹사이트에 게시됐다. 확정되지 않은 제휴 연동을 약속하지 않으면서 미충족 요건이 있던 레코드가 입양 가능한 결과로 연결됐다.']
    ]
  },
  b1: {
    label:'데모 B-1 · 체크인 요청',
    nextLabel:'임보자 응답 이어보기',
    steps:[
      ['일간 돌봄 자동 발송','Jamie는 정해진 시간에 Milo의 일간 돌봄 링크를 자동으로 받는다. 일상적인 완료 기록은 Milo의 돌봄 로그에 바로 저장되고, 투약 누락이나 우려 사항만 Alex에게 알림으로 전달된다.'],
      ['체크인 독촉 부담 확인','요청, 리마인드, 응답, 검토가 한곳에 보여 코디네이터가 기억에 의존해 후속 연락을 관리할 필요가 없다.'],
      ['구조화된 요청 만들기','팀에 필요한 건강, 행동, 투약, 사진, 메모 항목을 지정해 요청한다.'],
      ['후속 연락 규칙 한 번만 설정','기한과 리마인드 규칙을 정한다. Jamie가 응답하지 않으면 Petify가 자동으로 후속 연락한다.'],
      ['발송 전 메시지 확인','Jamie가 받을 실제 요청 문구와 보안 링크를 확인한다.'],
      ['문자 발송 화면으로 전환','같은 요청이 이메일과 문자로 함께 나간다. 임보자 대부분은 문자에 답하며, 어느 쪽이든 응답은 하나의 레코드로 들어온다.'],
      ['요청 화면으로 돌아가기','메시지를 확인한 뒤 요청 화면으로 돌아가 발송한다.'],
      ['한 번만 발송','보안 링크를 문자와 이메일로 보내면 자동 리마인드 일정이 시작된다.'],
      ['응답 대기 상태 확인','전달 여부, 기한, 다음 리마인드를 콘솔에서 확인할 수 있어 후속 연락이 이미 처리되고 있음을 알 수 있다.'],
      ['요청 발송 완료','Jamie가 받는 화면을 이어서 확인하시겠습니까?']
    ]
  },
  b2: {
    label:'데모 B-2 · 임보자 응답',
    nextLabel:'변화가 있는 주로 이어보기',
    steps:[
      ['Jamie 화면으로 전환','Jamie가 보안 링크에서 보게 되는 계정 없는 모바일 폼을 연다.'],
      ['변화 없는 주 보고','Jamie가 달라진 점이 없다고 확인하면 양식은 더 묻지 않는다. 작성할 내용이 더 없기 때문이다.'],
      ['체크인 보내기','한 번 누르면 끝난다. 독촉할 양식도, 직원이 읽을 답변도 없다.'],
      ['변화 없는 주 완료','직원에게 전달된 것은 없다. Milo의 행동 정보가 다시 최신이 되어 게시 준비 완료 상태가 됐다. 변화가 생긴 주에는 어떻게 처리되는지 이어서 확인하시겠습니까?']
    ]
  },
  b3: {
    label:'데모 B-3 · 검토 및 반영',
    nextLabel:'게시로 이어보기',
    steps:[
      ['새 체크인 도착','Jamie의 응답이 체크인에 도착했다. 직원이 검토하기 전까지 공식 기록은 변경되지 않는다.'],
      ['반영 전 비교 검토','변경된 항목을 강조하고 직원 반영 전까지 공식 기록은 그대로 유지한다.'],
      ['검토한 체크인 반영','Jamie의 행동 변화와 반영된 사진을 공식 기록에 반영한다.'],
      ['레코드 업데이트 완료','승인된 정보가 다음 업무에 사용되는 과정을 이어서 확인하시겠습니까?']
    ]
  },
  bpublish: {
    label:'데모 B · 게시',
    steps:[
      ['체크인를 게시 상태와 연결','최신 임보 정보가 Milo의 마지막 미완료 요건을 해소하고 게시 게시 상태로 전환한다.'],
      ['입양 결과로 이어가기','반영된 정보를 다시 입력하지 않고 완성된 공개 프로필을 연다.'],
      ['게시 연결 확인','동일한 반영 레코드가 쉘터 웹사이트 게시에 사용된다. Petfinder와 Adopt a Pet은 지원 예정 연동으로 구분된다.'],
      ['프로필 게시','Milo를 쉘터 자체 입양 웹사이트에 게시한다.'],
      ['전체 흐름 완료','한 번의 요청이 검토된 레코드, 게시 상태 판단 결과, 쉘터 웹사이트 게시까지 연결됐다. 수동 독촉은 필요하지 않았다.']
    ]
  }
};

const TOUR_SETUP = {
  a: {view:'animals', updateApproved:false, miloReady:false},
  b1: {view:'fosters', requestSent:false, fosterSubmitted:false, updateApproved:false, miloReady:false},
  b2: {view:'updates', requestSent:true, fosterSubmitted:false, updateApproved:false, miloReady:false},
  b3: {view:'updates', requestSent:true, fosterSubmitted:true, updateApproved:false, miloReady:false, selectedUpdate:'milo', formChoice:'change'},
  bpublish: {view:'animal', animalId:'milo', detailTab:'overview', requestSent:true, fosterSubmitted:true, updateApproved:true, miloReady:true}
};

const KO_UI = {
  'Beagle mix · Male · 4 years':'비글 믹스 · 수컷 · 4살','Shepherd mix · Female · 2 years':'셰퍼드 믹스 · 암컷 · 2살','Corgi mix · Female · 3 years':'코기 믹스 · 암컷 · 3살','Check-in overdue · 5 days':'체크인 기한 초과 · 5일','Follow up with foster':'임보자에게 후속 연락','Open record':'레코드 열기','2 hr ago':'2시간 전','38 min ago':'38분 전',
  'Petify for Shelters':'쉘터용 Petify','Dashboard':'대시보드','Animals':'동물','Check-ins':'체크인','Fosters':'임보자','Publishing':'게시','Settings':'설정','Reset demo':'데모 초기화','Administrator':'관리자','Search animals, fosters, or records':'동물, 임보자 또는 기록 검색','Search':'검색','Demo tours':'데모 튜토리얼','Notifications':'알림','Add animal':'동물 추가','Language':'언어 선택',
  'SUNDAY, AUGUST 9':'8월 9일 일요일','Good morning, Alex':'좋은 아침이에요, Alex','Here is what needs attention across your shelter today.':'오늘 쉘터에서 확인해야 할 업무입니다.','Export report':'보고서 내보내기','New intake':'신규 입소','In care':'보호 중','Needs review':'검토 필요','Ready to publish':'게시 준비 완료','Published':'게시 완료','Shelter website':'쉘터 웹사이트','Updates waiting':'대기 중인 업데이트','Milo is now ready':'Milo 게시 준비 완료','3 ready to publish this week':'이번 주 게시 준비 완료 3마리','6 in foster homes':'6마리 임보 중','+1 this week':'이번 주 +1','ANIMAL STATUS':'동물 상태','NEEDS ATTENTION':'확인 필요','LISTING STATUS':'게시 상태','Each animal appears in one status queue. Select a card to open the matching list.':'각 동물은 하나의 상태 목록에만 포함됩니다. 카드를 누르면 해당 목록이 열립니다.','Animal records':'동물 레코드','ANIMALS NEEDING ATTENTION':'확인이 필요한 동물','Review the animal, reason, and next action':'동물별 사유와 다음 행동 확인','New behavior update needs review':'새 행동 업데이트 검토 필요','Jamie Lee · Submitted 12 min ago':'Jamie Lee · 12분 전 제출','Review Milo':'Milo 검토','Medical clearance needs review':'의료 확인 검토 필요','Morgan Kim · Updated yesterday':'Morgan Kim · 어제 업데이트','Review Buddy':'Buddy 검토','Profile ready to publish':'프로필 게시 준비 완료','Open Luna':'Luna 열기','Open Milo':'Milo 열기','EXCEPTIONS':'확인 필요','Needs your attention':'확인이 필요한 항목','View all':'전체 보기','4 foster updates are overdue':'임보 업데이트 4건 기한 초과','Oldest request is 5 days late':'가장 오래된 요청은 5일 지연','Open overdue requests':'기한 초과 요청 열기','3 animals have outdated information':'동물 3마리의 정보가 오래됨','1 animal has outdated information':'동물 1마리의 정보가 오래됨','Behavior or health details are older than 14 days':'행동 또는 건강 정보가 14일 이상 지남','View blocked animals':'차단된 동물 보기','2 profiles are ready to publish':'프로필 2건 게시 준비 완료','Shelter website publishing is available':'쉘터 웹사이트에 게시 가능','Open publishing queue':'게시 대기열 열기','2 blockers have no owner':'차단 항목 2건의 담당자 없음','Assign the next action to a teammate':'다음 행동을 팀원에게 배정','Assign owners':'담당자 배정','LIVE ACTIVITY':'최근 활동','Recent changes':'최근 변경','Milo became ready to publish':'Milo 게시 준비 완료','Jamie submitted an update for Milo':'Jamie가 Milo 업데이트 제출','Behavior update approved by Alex':'Alex가 행동 업데이트 승인','Behavior changes · 3 new photos':'행동 변화 · 새 사진 3장','Luna’s profile is ready':'Luna 프로필 준비 완료','All 5 publishing requirements complete':'게시 요건 5개 모두 충족','Medical clearance added for Buddy':'Buddy 의료 확인 추가','Submitted by Morgan Kim':'Morgan Kim 제출','Daisy published to shelter website':'Daisy 쉘터 웹사이트 게시 완료','Published by Alex Rivera':'Alex Rivera 게시','Open full activity log':'전체 활동 기록 열기','QUICK START':'빠른 실행','Move work forward':'다음 업무 진행','Create a record':'레코드 생성','Review updates':'업데이트 검토','Review animal records':'동물 레코드 검토','Resolve blockers':'차단 항목 해결','Publish profiles':'프로필 게시','2 waiting':'2건 대기','8 animals':'동물 8마리','12 ready':'12마리 준비 완료','Dashboard and list counts use the same animal status.':'대시보드와 목록이 동일한 동물 상태 기준을 사용합니다.',
  'ANIMAL WORKSPACE':'동물 업무 공간','See who is ready, what is missing, and the next action for every animal.':'준비된 동물, 누락 정보, 다음 행동을 한눈에 확인합니다.','Bulk actions':'일괄 작업','All':'전체','Ready':'준비 완료','Blocked':'차단됨','Filters':'필터','Columns':'열 설정','Save view':'보기 저장','Animal':'동물','Stage':'단계','Readiness':'준비 상태','Needs attention':'확인 필요','Next action':'다음 행동','Owner':'담당자','Updated':'업데이트','No animals found':'동물을 찾지 못했습니다','Try a different search or filter.':'다른 검색어나 필터를 사용해보세요.','Clear filters':'필터 초기화','In foster':'임보 중','In care':'보호 중','None':'없음','Review update':'업데이트 검토','Review record':'레코드 검토','Preview profile':'프로필 미리보기','View live profile':'게시 프로필 보기','Medical clearance':'의료 확인','New behavior update':'새 행동 업데이트','Today':'오늘','Yesterday':'어제','Just now':'방금 전','Male':'수컷','Female':'암컷','Unknown':'알 수 없음','Mixed breed':'믹스견','Labrador mix · Male · 2 years':'래브라도 믹스 · 수컷 · 2살','Terrier mix · Female · 1 year':'테리어 믹스 · 암컷 · 1살','Jindo mix · Male · 3 years':'진도 믹스 · 수컷 · 3살','Poodle mix · Female · 4 years':'푸들 믹스 · 암컷 · 4살','Mixed breed · Female · 2 years':'믹스견 · 암컷 · 2살',
  'PUBLISHING STATUS':'게시 상태','Ready now':'현재 준비 완료',"Due today":'오늘 마감','Action required':'조치 필요','All required information is complete and current.':'필수 정보가 모두 완료됐으며 최신 상태입니다.','Jamie’s submission may resolve the final blocker. Review it before the record changes.':'Jamie의 제출 내용으로 마지막 차단 항목이 해소될 수 있습니다. 레코드 변경 전 검토하세요.','Behavior information is outdated':'행동 정보가 오래되었습니다','Review Jamie’s update':'Jamie 업데이트 검토','Request behavior update':'행동 업데이트 요청','Open profile':'프로필 열기','Review submission':'제출 내용 검토','Send request':'요청 보내기','PUBLISHING REQUIREMENTS':'게시 요건','Health':'건강','Behavior':'행동','Media':'미디어','Documents':'문서','Public profile':'공개 프로필','RECENT ACTIVITY':'최근 활동','ANIMAL RECORD':'동물 레코드','Overview':'개요','Profile':'프로필','Check-ins':'체크인','Activity':'활동','Edit':'수정','Save profile':'프로필 저장','Draft autosaved a moment ago':'초안이 방금 자동 저장됨','All changes saved':'모든 변경사항 저장됨','About Milo':'Milo 소개','Internal notes are never included in the public profile.':'내부 메모는 공개 프로필에 포함되지 않습니다.','Public name':'공개 이름','Headline':'한 줄 소개','Adoption listing':'입양 소개','Adoption contact':'입양 문의','Best home':'적합한 가정','Adults or older children':'성인 또는 연령대가 높은 자녀가 있는 가정','MEDIA LIBRARY':'미디어 라이브러리','Choose which assets can appear on public adoption profiles.':'공개 입양 프로필에 사용할 사진을 선택합니다.','Cover photo':'대표 사진','Foster upload':'임보자 업로드','Public use':'공개 사용','Public media':'공개 미디어','Upload':'업로드','Add entry':'항목 추가','AUDIT TRAIL':'변경 이력','Requests, approvals, state changes, and publishing events.':'요청, 승인, 상태 변경, 게시 이력을 확인합니다.',
  'CHECK-INS':'체크인','Requests and submissions':'요청 및 제출','Track every request, reminder, response, and review in one place.':'요청, 리마인드, 응답, 검토를 한곳에서 관리합니다.','Request check-in':'체크인 요청','Overdue':'기한 초과','Sent':'발송됨','In progress':'진행 중','Changes requested':'보완 요청','Approved':'승인됨','Latest changes':'최근 변경','CURRENT APPROVED RECORD':'현재 승인된 기록','NEW FOSTER SUBMISSION':'새 임보자 제출','APPROVED FOSTER UPDATE':'승인된 임보 업데이트','Apply this change':'변경사항 반영','Apply selected':'선택 항목 반영','Apply all to record':'전체 레코드 반영','Request changes':'보완 요청','Reject':'거절','View history':'이력 보기','How review works':'검토 방식 보기','View request':'요청 보기','View audit trail':'변경 이력 보기','Comfort around dogs':'다른 개와의 편안함','Needs slow introductions. Avoid crowded play groups.':'천천히 소개해야 합니다. 붐비는 놀이 그룹은 피하세요.','Relaxed with two resident dogs and has started initiating play.':'함께 사는 개 두 마리와 편안하게 지내며 먼저 놀이를 시작했습니다.','Confirmed 18 days ago':'18일 전 확인','Submitted today by Jamie':'오늘 Jamie 제출','Behavior changed':'행동 변화','1 meaningful change detected':'의미 있는 변경 1건 감지','Compare the approved behavior record with Jamie’s new observation before applying it.':'반영 전 승인된 행동 기록과 Jamie의 새 관찰을 비교하세요.','3 photos attached':'사진 3장 첨부',
  'FOSTER NETWORK':'임보자 네트워크','Keep placements, contact details, and update schedules connected.':'배치, 연락처, 업데이트 일정을 연결해 관리합니다.','Invite foster':'임보자 초대','New placement':'새 임보 배치','Active placements':'진행 중인 임보','Available fosters':'배치 가능한 임보자','Updates due':'업데이트 마감','Response rate':'응답률','Last 30 days':'최근 30일','FOSTER NETWORK STATUS':'임보자 네트워크 상태','Select a card to open the matching foster list. Response rate shows 29 of 31 people.':'카드를 누르면 해당 임보자 목록이 열립니다. 응답률은 31명 중 29명 응답을 기준으로 합니다.','Status tabs are mutually exclusive. Due and response metrics are cross-status operational filters.':'상태 탭은 서로 중복되지 않습니다. 업데이트 마감과 응답 지표는 상태와 별도로 조회하는 운영 기준입니다.','29 of 31 responded':'31명 중 29명 응답','Responded':'응답 완료','Current placement':'현재 배치','Status':'상태','Update schedule':'업데이트 일정','Active':'활성','Available':'배치 가능','Inactive':'비활성','No placement':'배치 없음','Weekly':'매주','Every 2 weeks':'2주마다','Availability':'가능 여부','Sort':'정렬','FOSTER PROFILE':'임보자 프로필','CURRENT PLACEMENT':'현재 임보 배치','PLACEMENT':'배치 기간','COORDINATOR':'담당 코디네이터','Open animal record ›':'동물 레코드 열기 ›','CARE & UPDATES':'돌봄 및 업데이트','Overdue · coordinator follow-up needed':'기한 초과 · 코디네이터 후속 연락 필요','Next check-in is on schedule':'다음 체크인이 일정대로 진행 중','No responses yet':'아직 제출된 응답 없음','First check-in scheduled':'첫 체크인 예정','Preferred contact channels':'선호 연락 채널','Weekly check-in reviewed':'주간 체크인 검토 완료','Routine care logged':'일간 돌봄 기록 완료','Placement started':'임보 배치 시작','Open update history':'업데이트 이력 열기','PLACEMENT AVAILABILITY':'임보 가능 조건','Available for a new placement':'새 임보 배치 가능','Small or medium dogs · Up to 1 animal':'소형·중형견 · 최대 1마리','LOCATION':'지역','HOME':'가정 환경','EXPERIENCE':'임보 경험','TRANSPORT':'이동 지원','Brooklyn, NY':'뉴욕 브루클린','No resident pets':'함께 사는 반려동물 없음','2 prior placements':'이전 임보 2회','Available weekends':'주말 가능','CONTACT & HISTORY':'연락처 및 이력','Last placement completed':'최근 임보 완료','Start a placement':'임보 배치 시작',
  'ADOPTION CHANNELS':'입양 게시 채널','Publish approved profiles to the shelter website. Partner channels are shown as planned integrations.':'승인된 프로필을 쉘터 웹사이트에 게시합니다. 제휴 채널은 지원 예정으로 표시됩니다.','Sync status':'상태 동기화','Manage channels':'채널 관리','Partner integration required':'제휴 연동 필요','Planned':'지원 예정','Open profile':'프로필 열기','Preview & publish':'미리보기 및 게시','PUBLISHING CHANNELS':'게시 채널','Publishing channels':'게시 채널','The shelter website is available now. Partner channels require future integration agreements.':'쉘터 웹사이트는 현재 사용할 수 있습니다. 제휴 채널은 향후 연동 계약이 필요합니다.','Not available':'현재 사용 불가','Configure':'설정','PUBLIC PROFILE':'공개 프로필','Preview & publish':'미리보기 및 게시','Check exactly what adopters will see before publishing to the shelter website.':'쉘터 웹사이트 게시 전 입양자가 보게 될 내용을 확인합니다.','Edit profile':'프로필 수정','Publish profile':'프로필 게시','Published ✓':'게시 완료 ✓','Ready for adoption':'입양 준비 완료','Meet Milo':'Milo를 소개합니다','A gentle companion who is ready for a quiet, loving home.':'조용하고 따뜻한 가정을 기다리는 다정한 반려견입니다.','Age':'나이','Sex':'성별','Weight':'체중','Location':'위치','About Milo':'Milo 소개','House-trained':'배변 훈련 완료','Good with dogs':'다른 개와 잘 지냄','Affectionate':'다정함','Ask about Milo':'Milo 입양 문의','CHANNELS':'채널','Publish your profile':'프로필 게시','The shelter website is available now. Partner channels can be added when integrations are available.':'쉘터 웹사이트는 현재 게시할 수 있습니다. 제휴 채널은 연동이 가능해지면 추가할 수 있습니다.','Second Chance Rescue':'Second Chance Rescue','Available channels':'사용 가능 채널','Publish to shelter website':'쉘터 웹사이트에 게시','Published to shelter website ✓':'쉘터 웹사이트 게시 완료 ✓','Schedule for later':'나중에 예약','Publishing profile…':'프로필 게시 중…','Sending to the shelter website':'쉘터 웹사이트로 전송 중',
  'WORKSPACE':'워크스페이스','Set the organization rules that drive readiness, updates, and publishing.':'준비 상태, 업데이트, 게시 기준을 설정합니다.','Save changes':'변경사항 저장','Saved ✓':'저장 완료 ✓','Publishing requirements':'게시 요건','Check-in forms':'체크인 양식','Team & roles':'팀 및 권한','ORGANIZATION RULES':'조직 기준','Petify marks an animal ready when every required section is complete and current.':'필수 항목이 모두 완료되고 최신 상태이면 게시 준비 완료로 표시합니다.','Add section':'항목 추가','Required · Current within 30 days':'필수 · 30일 이내 최신 정보','Required · Current within 14 days':'필수 · 14일 이내 최신 정보','At least 3 public photos':'공개 사진 최소 3장','All required documents approved':'필수 문서 전체 승인','Description and adoption contact':'소개문 및 입양 연락처','What “Ready” means':'준비 완료의 의미','Ready is an operational publishing status. Medical and legal decisions remain with your team.':'준비 완료는 게시 업무 상태입니다. 의료 및 법적 판단은 담당 팀이 결정합니다.','FOSTER EXPERIENCE':'임보자 경험','Weekly check-in':'주간 체크인','Choose the questions a foster sees from a secure mobile link.':'임보자가 보안 모바일 링크에서 답할 질문을 선택합니다.','Preview form':'양식 미리보기','Always visible':'항상 표시','Shown when relevant':'필요할 때 표시','Quick status':'간단 상태','Health changes':'건강 변화','Behavior changes':'행동 변화','Photos & video':'사진 및 영상','Additional notes':'추가 메모','The shelter website is available now. Partner channels require future integration agreements.':'쉘터 웹사이트는 현재 사용할 수 있습니다. 제휴 채널은 향후 연동 계약이 필요합니다.','Workspace settings saved':'워크스페이스 설정 저장 완료','Setting updated':'설정 업데이트 완료',
  'Secure foster check-in · No account required':'안전한 임보 체크인 · 계정 불필요','Milo’s weekly check-in':'Milo 주간 체크인','For Jamie · Due today':'Jamie · 오늘 마감','Draft saved automatically':'초안 자동 저장됨','How is Milo doing this week?':'이번 주 Milo는 어떻게 지냈나요?','Choose the closest answer. We’ll only ask for details when needed.':'가장 가까운 답을 선택하세요. 필요한 경우에만 세부 내용을 묻습니다.','Doing well':'잘 지내고 있어요','No urgent concerns':'긴급한 문제 없음','Something changed':'달라진 점이 있어요','Health or behavior':'건강 또는 행동','Needs attention':'확인이 필요해요','Please contact me':'연락해 주세요','Tell us about any behavior changes':'행동 변화를 알려주세요','Add recent photos':'최근 사진 추가','Choose photos or video':'사진 또는 영상 선택','Second Chance Rescue may use these photos on Milo’s public adoption profile.':'Second Chance Rescue가 이 사진을 Milo의 공개 입양 프로필에 사용할 수 있습니다.','Save & finish later':'저장 후 나중에 완료','Send update':'업데이트 보내기','Need help? Contact your coordinator':'도움이 필요한가요? 코디네이터에게 문의하세요','Your update was sent':'업데이트가 전송되었습니다','Thanks, Jamie. Alex will review your changes before Milo’s record is updated.':'감사합니다, Jamie. Milo의 레코드가 변경되기 전에 Alex가 내용을 검토합니다.','Behavior change · 3 photos · Submitted just now':'행동 변화 · 사진 3장 · 방금 제출','Return to staff demo':'직원용 데모로 돌아가기','Edit my response':'응답 수정',
  'RESET PRETOTYPE':'프리토타입 초기화','Start the demo over?':'데모를 처음부터 시작할까요?','This only resets the sample data in your browser. Nothing external is changed.':'브라우저의 샘플 데이터만 초기화됩니다. 외부 데이터는 변경되지 않습니다.','Cancel':'취소','ANIMAL FILTERS':'동물 필터','Focus the workspace':'업무 화면 좁혀 보기','Current location':'현재 위치','All locations':'모든 위치','Foster homes':'임보 가정','Main shelter':'메인 쉘터','All owners':'모든 담당자','Information age':'정보 경과 기간','Any age':'전체 기간','Older than 14 days':'14일 초과','Any stage':'모든 단계','Apply filters':'필터 적용','Clear':'초기화','PRETOTYPE':'프리토타입','Prepared interaction':'준비된 상호작용','This control is represented in the pretotype and opens the prepared state shown here.':'이 기능은 프리토타입에서 준비된 상태로 동작합니다.','Got it':'확인',
  'NEW INTAKE':'신규 입소','Add an animal':'동물 추가','Create the record now. Complete the rest as care progresses.':'지금 레코드를 만들고 나머지는 보호 과정에서 보완합니다.','Animal':'동물','Intake':'입소','Initial state':'초기 상태','Primary photo':'대표 사진','Photo added':'사진 추가됨','Click to replace':'클릭하여 교체','Add a photo':'사진 추가','Name or temporary name':'이름 또는 임시 이름','Species':'동물 종류','Dog':'개','Cat':'고양이','Breed':'품종','Estimated age':'추정 나이','Intake type':'입소 유형','Owner surrender':'소유자 인계','Stray':'유기 동물','Transfer in':'기관 이관','Date & time':'일시','Source':'접수 경로','Community member':'지역 주민','Partner clinic':'협력 동물병원','Intake notes':'입소 메모','Does Coco need immediate medical attention?':'Coco에게 즉각적인 의료 조치가 필요한가요?','Does Coco need a foster placement?':'Coco에게 임보 배치가 필요한가요?','No':'아니요','Yes':'예','Record owner':'레코드 담당자','Priority':'우선순위','Normal':'보통','Urgent':'긴급','Ready to create Coco’s record':'Coco 레코드 생성 준비 완료','A five-section readiness checklist will be created automatically.':'5개 항목의 준비 체크리스트가 자동으로 생성됩니다.','Back':'이전','Continue':'계속','Save & open record':'저장 후 레코드 열기',
  'FOSTER PLACEMENT':'임보 배치','Foster placement':'임보 배치','Place in foster':'임보자 배정','Create a foster placement':'새 임보 배치','Choose an animal without a foster, then connect the foster person and update schedule.':'임보자가 배정되지 않은 동물을 선택한 뒤 임보자와 업데이트 일정을 연결합니다.','Animal without a foster placement':'임보자 미배정 동물','Foster person':'임보자','Start date':'시작일','Expected end date':'예상 종료일','Coordinator':'코디네이터','Check-in schedule':'체크인 일정','First check-in: Aug 16':'첫 체크인: 8월 16일','No foster people are currently available':'현재 배치 가능한 임보자가 없습니다','Choose an available foster person to continue.':'계속하려면 배치 가능한 임보자를 선택하세요.','All current animals have a foster placement':'현재 모든 동물에 임보자가 배정되어 있습니다','There are no unassigned animals in the named demo records. Add a new animal or end an existing placement first.':'이름이 표시된 데모 레코드에 임보자 미배정 동물이 없습니다. 동물을 추가하거나 기존 배치를 종료해 주세요.','Confirm placement':'배치 확정','Close':'닫기',
  'Request a foster update':'임보 업데이트 요청','Jamie gets a secure mobile link. No account or app is required.':'Jamie는 보안 모바일 링크를 받습니다. 계정이나 앱이 필요하지 않습니다.','Update form':'업데이트 양식','Send now':'지금 발송','Now · Email + SMS':'지금 · 이메일 + 문자','Schedule for tomorrow':'내일 예약','Due date':'마감일','Automatic reminder':'자동 리마인드','After 2 days · max 2':'2일 후 · 최대 2회','Ask for':'요청 항목','Medication':'투약','Photos':'사진','Notes':'메모','SMS + EMAIL PREVIEW':'문자 + 이메일 미리보기','See the exact message, secure link, and reminder schedule Jamie receives.':'Jamie가 받을 실제 메시지, 보안 링크, 리마인드 일정을 확인합니다.','Open preview':'미리보기 열기','Copy link':'링크 복사','Send request':'요청 보내기','ASSIGN NEXT ACTION':'다음 행동 배정','Choose an owner':'담당자 선택','Task':'업무','Note':'메모','Assign task':'업무 배정',
  'RECIPIENT PREVIEW':'수신자 미리보기','What Jamie receives':'Jamie가 받는 내용','Preview the request before sending it by SMS and email.':'문자와 이메일로 보내기 전 요청 내용을 확인합니다.','Email':'이메일','Text message':'문자 메시지','Automatic follow-up':'자동 후속 연락','Reminder after 2 days if Jamie has not submitted. Maximum 2 reminders.':'Jamie가 제출하지 않으면 2일 후 리마인드합니다. 최대 2회 발송합니다.','Secure individual link':'개별 보안 링크','No account required. The link opens only Milo’s requested check-in form.':'계정이 필요 없으며 Milo의 요청된 체크인 양식만 열립니다.','AFTER JAMIE SUBMITS':'JAMIE 제출 후','Submitted':'제출됨','Approved record':'승인된 레코드','The submission does not overwrite Milo’s official record until a staff member approves it.':'직원이 승인하기 전에는 제출 내용이 Milo의 공식 레코드를 덮어쓰지 않습니다.','Back to request':'요청 화면으로 돌아가기','Open Jamie’s form preview':'Jamie 양식 미리보기 열기','FROM':'보낸 사람','TO':'받는 사람','Share Milo’s update':'Milo 업데이트 작성','No account or app is required. This secure link is unique to Milo.':'계정이나 앱이 필요하지 않습니다. Milo 전용 보안 링크입니다.',
  'DEMO PRESENTER MODE':'데모 시연 모드','Choose the story you are demonstrating':'시연할 소재를 선택하세요','Each tour resets the sample data, opens the right starting screen, and provides a talk track with the exact next click.':'각 튜토리얼은 샘플 데이터를 초기화하고 시작 화면과 다음 클릭 위치를 안내합니다.','MATERIAL A · 12 STEPS':'소재 A · 12단계','Which dogs are ready to go?':'어떤 동물이 입양 준비를 마쳤을까?','Readiness overview → blocker → approval → Ready → publish':'준비 현황 → 차단 사유 → 승인 → 준비 완료 → 게시','Start Demo A':'데모 A 시작','Start Demo A ›':'데모 A 시작 ›','MATERIAL B-1 · 10 STEPS':'소재 B-1 · 10단계','Send one check-in request':'체크인 요청 한 건 보내기','Automatic daily care → request and track one weekly check-in':'일간 돌봄 자동 발송 → 주간 체크인 요청·추적','Start Demo B-1 ›':'데모 B-1 시작 ›','MATERIAL B-2 · 4 STEPS':'소재 B-2 · 4단계','What the foster receives':'임보자가 받는 화면','Open Jamie’s form and submit the check-in':'임보자 화면부터 보기','Start Demo B-2 ›':'데모 B-2 시작 ›','MATERIAL B-3 · 4 STEPS':'소재 B-3 · 4단계','Review and apply the check-in':'체크인 검토 및 반영','Review the submission before the record changes':'제출 검토부터 보기','Start Demo B-3 ›':'데모 B-3 시작 ›','NOTIFICATIONS':'알림','Notifications':'알림','New foster check-in':'새 임보자 체크인','Profile published':'프로필 게시 완료','Profile ready':'프로필 준비 완료','Mark all as read':'모두 읽음 처리','DETAILS':'상세','Prepared content':'준비된 콘텐츠','This interaction is represented in the pretotype.':'이 상호작용은 프리토타입에 준비된 상태로 구현되어 있습니다.','End tour':'튜토리얼 종료','Continue':'계속','Finish tutorial':'튜토리얼 완료','Click the highlighted control':'강조된 요소를 클릭하세요','Interactive product tutorial':'제품 인터랙티브 튜토리얼','Use highlighted control':'강조된 요소 사용','Exit tutorial':'튜토리얼 종료',
  'Demo reset to its starting state':'데모가 시작 상태로 초기화되었습니다','Coco’s record and readiness checklist were created':'Coco의 레코드와 준비 체크리스트가 생성되었습니다','Coco was placed with Casey · first check-in scheduled':'Coco가 Casey에게 배치됐고 첫 체크인이 예약되었습니다','Secure update link sent to Jamie by email and SMS':'Jamie에게 이메일과 문자로 보안 업데이트 링크를 보냈습니다','Secure foster link copied':'임보자용 보안 링크를 복사했습니다','3 photos uploaded':'사진 3장을 업로드했습니다','Draft saved · Jamie can return from the same link':'초안이 저장되었습니다. Jamie는 같은 링크에서 이어서 작성할 수 있습니다','Update approved · Milo is now ready to publish':'업데이트가 승인되어 Milo가 게시 준비 상태가 되었습니다','Behavior change approved · photos remain in review':'행동 변화가 승인됐으며 사진은 검토 중입니다','Clarification request sent to Jamie':'Jamie에게 보완 요청을 보냈습니다','Submission rejected · Jamie was notified':'제출을 거절했으며 Jamie에게 알림을 보냈습니다','Milo is already live on the shelter website':'Milo는 이미 쉘터 웹사이트에 게시되어 있습니다','Milo published to the shelter website':'Milo를 쉘터 웹사이트에 게시했습니다','Public profile saved':'공개 프로필을 저장했습니다','Task assigned to Morgan Kim':'Morgan Kim에게 업무를 배정했습니다','2 filters applied':'필터 2개를 적용했습니다','Channel status synced just now':'채널 상태를 방금 동기화했습니다','Activity refreshed':'활동 내역을 새로고침했습니다','All notifications marked as read':'모든 알림을 읽음 처리했습니다','Response saved automatically':'응답이 자동 저장되었습니다','All visible animals selected':'현재 보이는 동물을 모두 선택했습니다','Selection cleared':'선택을 해제했습니다','Photo approved for public use':'사진을 공개용으로 승인했습니다','Photo removed from public profile':'공개 프로필에서 사진을 제외했습니다','Demo export prepared':'데모 내보내기가 준비되었습니다',
  'Back to animals':'동물 목록으로','Back to publishing':'게시 목록으로','Main shelter':'메인 쉘터','Jamie Lee · Foster home':'Jamie Lee · 임보 가정','No foster assigned':'배정된 임보자 없음','Foster coordinator: Alex':'임보 코디네이터: Alex','Not ready · 1 check-in waiting for review':'게시 불가 · 검토 대기 체크인 1건','Not ready · 4 requirements incomplete':'게시 불가 · 미완료 요건 4개','Complete health, behavior, documents, and public profile information.':'건강, 행동, 문서, 공개 프로필 정보를 완료하세요.','Request a new foster check-in to confirm behavior before publishing.':'게시 전 행동 정보를 확인할 수 있도록 새 임보 체크인을 요청하세요.','Vaccinations and medical clearance complete':'예방접종 및 의료 확인 완료','Complete':'완료','Foster check-in applied today':'오늘 임보 체크인 반영','New foster check-in waiting for review':'새 임보 체크인 검토 대기','No behavior assessment':'행동 평가 없음','Last confirmed 18 days ago':'18일 전 마지막 확인','1 intake photo · 3 more recommended':'입소 사진 1장 · 3장 추가 권장','8 approved photos · 1 video':'승인된 사진 8장 · 영상 1개','In progress':'진행 중','Intake record only':'입소 기록만 있음','Description not started':'소개문 작성 전','Profile copy and adoption details complete':'프로필 소개 및 입양 정보 완료','Publish adoption profile':'입양 프로필 게시','Assign a foster home':'임보 가정 배정','Owner · Alex Rivera':'담당자 · Alex Rivera','Owner · Alex Rivera · Due today':'담당자 · Alex Rivera · 오늘 마감','Foster coordinator':'임보 코디네이터','Set placement':'임보 배치','Assign to someone else':'다른 담당자에게 배정','Check-in submitted by Jamie':'Jamie가 체크인 제출','Photos approved by Alex':'Alex가 사진 승인','3 new photos · behavior changed':'새 사진 3장 · 행동 변화','8 public photos ready':'공개 사진 8장 준비 완료','Medical clearance received':'의료 확인 접수','Added by Dr. Casey':'Dr. Casey 추가','RECORD':'레코드','Animal profile':'동물 프로필','Core identity and intake details':'기본 식별 및 입소 정보','Name':'이름','Intake source':'입소 경로','Intake date':'입소일','Foster home · Jamie Lee':'임보 가정 · Jamie Lee','Medical information required for publishing':'게시를 위해 필요한 의료 정보','Rabies vaccination':'광견병 예방접종','DHPP vaccination':'종합 예방접종','Spay / neuter':'중성화','Latest approved observations':'최근 승인된 관찰','People':'사람','Friendly and seeks attention':'친근하고 관심을 원함','Dogs':'다른 개','Needs slow introductions':'천천히 소개 필요','Cats':'고양이','Not tested':'확인 전','Next step required':'다음 단계 필요','Home notes':'가정 내 메모','Settles well after walks':'산책 후 안정적으로 지냄','Required records and approvals':'필수 기록 및 승인','Intake record':'입소 기록','Medical release':'의료 확인서','Behavior assessment':'행동 평가','Adoption disclosure':'입양 고지서','Every request, response, and approval stays with Milo’s record.':'모든 요청, 응답, 승인 내역이 Milo 레코드에 남습니다.','Weekly check-in submitted':'주간 체크인 제출','Jamie Lee · Behavior changed · 3 photos':'Jamie Lee · 행동 변화 · 사진 3장','Weekly check-in requested':'주간 체크인 요청','Email + SMS · Opened in 8 minutes':'이메일 + 문자 · 8분 만에 열람','First foster check-in applied':'첫 임보 체크인 반영','No health changes · 5 photos':'건강 변화 없음 · 사진 5장','Foster check-in submitted by Jamie Lee':'Jamie Lee 임보 체크인 제출','Weekly check-in opened':'주간 체크인 열람','Check-in reminder sent automatically':'체크인 리마인드 자동 발송','Medical clearance approved by Dr. Casey':'Dr. Casey 의료 확인 승인','Milo placed with Jamie Lee':'Milo를 Jamie Lee에게 배치','Animal record created at intake':'입소 시 동물 레코드 생성','System':'시스템',
  'FOSTER COMMUNICATION':'임보자 커뮤니케이션','Track requests, follow up automatically, and review structured submissions.':'요청을 추적하고 자동으로 후속 연락하며 구조화된 제출 내용을 검토합니다.','Open foster form':'임보자 양식 열기','Copy foster link':'임보자 링크 복사','Request check-in':'체크인 요청','Search check-ins':'체크인 검색','Applied to record':'레코드 반영 완료','Waiting for response':'응답 대기','Request not sent':'요청 미발송','WEEKLY CHECK-IN · DUE TODAY':'주간 체크인 · 오늘 마감','Last approved update was 7 days ago':'마지막 승인 업데이트는 7일 전입니다','Milo’s weekly update has not been requested':'Milo 주간 업데이트가 아직 요청되지 않았습니다','Send one structured request now. Petify will track delivery and follow up automatically.':'구조화된 요청을 한 번 보내면 Petify가 전달 상태를 추적하고 자동으로 후속 연락합니다.','FOSTER':'임보자','Active placement':'임보 진행 중','SCHEDULE':'일정','Due every Sunday':'매주 일요일 마감','LAST APPROVED':'최근 승인','REQUEST STATUS':'요청 상태','Not sent':'미발송','NEXT ACTION':'다음 행동','Request Milo’s weekly check-in':'Milo 주간 체크인 요청','Health, behavior, medication, photos, and notes':'건강, 행동, 투약, 사진, 메모','WEEKLY CHECK-IN · SENT JUST NOW':'주간 체크인 · 방금 발송','Waiting for Jamie':'Jamie 응답 대기','No manual follow-up is needed. Petify will remind Jamie in 2 days if the form is still incomplete.':'직접 독촉할 필요가 없습니다. 2일 후에도 미완료 상태이면 Petify가 Jamie에게 리마인드합니다.','Delivered':'전달 완료','DUE':'마감','3 days remaining':'3일 남음','NEXT REMINDER':'다음 리마인드','Automatic · 1 of 2':'자동 · 2회 중 1회','SECURE INDIVIDUAL LINK':'개별 보안 링크','No account required · Opens only Milo’s weekly check-in':'계정 불필요 · Milo 주간 체크인만 열림','Update approved and applied':'업데이트 승인 및 반영 완료','Milo’s behavior record and readiness checklist were updated.':'Milo의 행동 기록과 준비 체크리스트가 업데이트되었습니다','NEW MEDIA':'새 미디어','APPROVED MEDIA':'승인된 미디어','View request message':'요청 메시지 보기','Send reminder':'리마인드 보내기','Mark clarification received':'보완 내용 확인 완료','View approval history':'승인 이력 보기','Post-treatment recovery':'치료 후 회복','Weekly wellbeing':'주간 상태','No concerns reported':'특이사항 없음','Health follow-up needed':'건강 후속 확인 필요','Update approved and applied':'업데이트 승인 및 반영 완료','Search foster people':'임보자 검색','2 ending this month':'이번 달 2건 종료','4 match current needs':'현재 조건과 4명 일치','4 overdue':'4건 기한 초과','Shelter website live':'쉘터 웹사이트 게시 중','All requirements complete':'필수 항목 완료','Behavior update outdated':'행동 업데이트 오래됨','Medical clearance missing':'의료 확인 누락','24 live':'24건 게시 중','Live now':'현재 게시 중','2 years':'2살','52 lb':'52파운드','Brooklyn':'브루클린','Friendly on intake. No visible injury. Medical check requested.':'입소 시 친화적이었고 눈에 띄는 부상은 없습니다. 의료 확인을 요청했습니다.','Community member':'지역 주민','JPG or PNG · up to 10 MB':'JPG 또는 PNG · 최대 10MB','JPG, PNG, MP4 · Up to 10 files':'JPG, PNG, MP4 · 최대 10개','Choose photos or video':'사진 또는 영상 선택','Uploaded':'업로드 완료','Hi Jamie! How is Milo doing this week?':'안녕하세요, Jamie! 이번 주 Milo는 어떻게 지냈나요?','Share any health or behavior changes and add recent photos by Aug 12. It takes about 3 minutes.':'건강이나 행동 변화와 최근 사진을 8월 12일까지 공유해 주세요. 약 3분 정도 걸립니다.','Reply STOP to opt out.':'수신을 거부하려면 STOP이라고 답장해 주세요.',
  'UPDATE WORKFLOW STATUS':'업데이트 업무 상태','Each request or submission appears in one status queue. Select a card to open the matching list.':'각 요청 또는 제출은 하나의 상태 목록에만 포함됩니다. 카드를 누르면 해당 목록이 열립니다.','Response overdue by 5 days':'응답 기한 5일 초과','Both automatic reminders were delivered. A coordinator follow-up is now recommended.':'자동 리마인드 2회가 모두 전달되어 코디네이터의 후속 연락이 필요합니다.','Request delivered':'요청 전달 완료','Jordan received the secure check-in link by email and SMS. No staff follow-up is needed yet.':'Jordan에게 이메일과 문자로 보안 체크인 링크가 전달됐습니다. 아직 직원의 후속 연락은 필요하지 않습니다.','Foster is completing the form':'임보자가 양식 작성 중','Taylor opened the secure link and saved a partial response. Petify will preserve the draft.':'Taylor가 보안 링크를 열어 일부 응답을 저장했습니다. Petify가 초안을 유지합니다.','DELIVERY':'전달','FORM STATUS':'양식 상태','NEXT FOLLOW-UP':'다음 후속 연락','Follow-up required':'후속 연락 필요','On schedule':'일정 내 진행','Draft saved':'초안 저장됨','Secure link tracked':'보안 링크 추적 중','Coordinator action':'코디네이터 조치','Petify managed':'Petify 자동 관리','Contact Casey Park':'Casey Park에게 연락','Wait for completion':'완료 대기','No manual follow-up needed':'직접 후속 연락 불필요','Follow up now':'지금 후속 연락','View draft':'초안 보기','View request':'요청 보기','No updates in this status':'이 상태의 업데이트 없음','Choose another status to view its requests and submissions.':'다른 상태를 선택해 요청과 제출 내용을 확인하세요.',
  'Keep placements, contact details, daily care, and update schedules connected.':'임보 배치, 연락처, 일간 돌봄, 업데이트 일정을 연결해 관리합니다.','Open foster mobile view':'임보자 모바일 화면 열기','CARE CADENCE':'돌봄 주기','Daily care and weekly updates':'일간 돌봄과 주간 업데이트','Routine care is logged each day. Health, behavior, and adoption-ready media are reviewed in the weekly check-in.':'일상 돌봄은 매일 기록하고, 건강·행동·입양 프로필용 미디어는 주간 체크인에서 검토합니다.','Preview Jamie’s mobile care':'Jamie 모바일 돌봄 화면 보기','TODAY · MILO':'오늘 · MILO','THIS WEEK · MILO':'이번 주 · MILO','Daily care':'일간 돌봄','Weekly check-in':'주간 체크인','medication due':'투약 예정','Behavior, health changes, and photos':'행동·건강 변화·사진','EXCEPTION RULE':'예외 처리 기준','Only issues need staff review':'문제가 있는 항목만 직원이 검토','Missed medication or concerns alert Alex':'투약 누락이나 우려 사항은 Alex에게 알림','Daily care and weekly check-in':'일간 돌봄과 주간 체크인','Keep routine care lightweight while sending meaningful changes to staff for review.':'일상 돌봄은 간단히 기록하고 의미 있는 변화만 직원 검토로 보냅니다.','EVERY DAY':'매일','EVERY WEEK':'매주','Meals, walks, and medication':'식사·산책·투약','Routine completions save to the care log. Missed medication and concerns alert the coordinator.':'완료한 일상 돌봄은 바로 기록되며 투약 누락과 우려 사항은 코디네이터에게 알립니다.','Health, behavior, photos, and notes':'건강·행동·사진·메모','Meaningful changes enter the staff review queue before the official record changes.':'의미 있는 변화는 공식 레코드 반영 전 직원 검토 목록으로 들어갑니다.','Two different records':'서로 다른 두 가지 기록','Daily care confirms that routines happened. Weekly check-ins capture observations that may affect Milo’s shelter record or adoption profile.':'일간 돌봄은 일상 과업의 완료를 기록하고, 주간 체크인은 Milo의 쉘터 레코드나 입양 프로필에 영향을 줄 수 있는 관찰 내용을 수집합니다.','Secure foster link · No account required':'안전한 임보자 링크 · 계정 불필요','TODAY':'오늘','THIS WEEK':'이번 주','Milo’s care today':'오늘 Milo 돌봄','For Jamie · Monday, Aug 10':'Jamie · 8월 10일 월요일','Tap a routine when it is complete.':'완료한 돌봄 항목을 누르세요.','Breakfast':'아침 식사','Morning walk':'아침 산책','Medication':'투약','Dinner':'저녁 식사','Evening walk':'저녁 산책','1 cup':'1컵','25 minutes':'25분','20 minutes':'20분','Logged':'기록 완료','Tap to log':'눌러서 기록','Only exceptions need staff attention':'예외 상황만 직원 확인 필요','Routine completions save immediately. A missed medication or reported concern alerts Alex.':'일상 돌봄 완료는 즉시 저장됩니다. 투약 누락이나 우려 사항이 접수되면 Alex에게 알립니다.','Report a concern':'우려 사항 알리기','Finish for today':'오늘 기록 마치기','Today’s care was saved':'오늘 돌봄 기록이 저장되었습니다','Thanks, Jamie. Routine care is in Milo’s log. Alex will only be alerted if something needs attention.':'감사합니다, Jamie. 일상 돌봄이 Milo 기록에 저장되었습니다. 확인이 필요한 내용이 있을 때만 Alex에게 알립니다.','Milo · Daily care':'Milo · 일간 돌봄','Saved just now':'방금 저장','Edit today’s care':'오늘 돌봄 수정','Concern form opened · Alex will be alerted':'우려 사항 양식을 열었습니다 · Alex에게 알림','Care schedule':'돌봄 일정','Daily care + weekly check-in':'일간 돌봄 + 주간 체크인','Weekly check-in only':'주간 체크인만','Daily care starts Aug 10 · first check-in Aug 16':'일간 돌봄 8월 10일 시작 · 첫 체크인 8월 16일'
  ,'Current status':'현재 상태','Next step':'다음 단계','Listing status':'게시 상태','Not ready':'게시 불가','Needs attention':'확인 필요','Behavior check-in submitted':'행동 체크인 제출됨','Review check-in':'체크인 검토','Request check-in':'체크인 요청','Request first check-in':'첫 체크인 요청','3 ready to publish this week':'이번 주 게시 준비 완료 3마리','12 ready to publish':'게시 준비 완료 12마리','Review check-ins':'체크인 검토','ANIMAL STATUS':'동물 상태','NEEDS ATTENTION':'확인 필요','LISTING STATUS':'게시 상태','New intake and animals currently in care.':'신규 입소 및 현재 보호 중인 동물','Animals that require a staff decision or action.':'직원의 판단이나 조치가 필요한 동물','Profiles ready for publishing or already published.':'게시 준비가 완료됐거나 이미 게시된 프로필','PUBLISHING STATUS':'게시 상태','PUBLISHING REQUIREMENTS':'게시 요건','Publishing requirements':'게시 요건','Check-in forms':'체크인 양식','CHECK-IN STATUS':'체크인 상태','Search check-ins':'체크인 검색','Applied':'반영 완료','Completed':'완료','Waiting':'대기 중','Apply to record':'레코드에 반영','Apply all to record':'전체 레코드 반영','Apply selected':'선택 항목 반영','Apply this change':'변경사항 반영','New foster check-in':'새 임보자 체크인','Profile ready to publish':'프로필 게시 준비 완료','Notifications':'알림','WEEKLY CHECK-IN · NOT SENT':'주간 체크인 · 미발송','Last applied check-in was 7 days ago':'마지막 반영 체크인은 7일 전입니다','Milo’s weekly check-in has not been requested':'Milo 주간 체크인이 아직 요청되지 않았습니다','LAST APPLIED':'최근 반영','Check-in form':'체크인 양식','Request a foster check-in':'임보자 체크인 요청','No check-ins in this status':'이 상태의 체크인 없음','Check-in applied to record':'체크인 레코드 반영 완료','Milo’s behavior record and publishing requirements were updated.':'Milo 행동 기록과 게시 요건이 업데이트되었습니다','CURRENT OFFICIAL RECORD':'현재 공식 기록','APPLIED FOSTER CHECK-IN':'반영된 임보자 체크인','APPLIED MEDIA':'반영된 미디어','View application history':'반영 이력 보기','Behavior information outdated':'행동 정보 오래됨','What “Ready to publish” means':'“게시 준비 완료”의 의미','LOGGED AUTOMATICALLY':'자동 기록','Came back normal':'특이사항 없이 돌아온 체크인'
  ,'Foster check-in applied today':'오늘 임보 체크인 반영','New foster check-in waiting for review':'새 임보 체크인 검토 대기'
  ,'All publishing requirements complete':'게시 요건 모두 충족','Publishing status changes':'게시 상태 변경'
  ,'A five-section publishing requirements checklist will be created automatically.':'5개 게시 요건 체크리스트가 자동으로 생성됩니다.'
  ,'Applied Aug 7 by Alex':'8월 7일 Alex가 반영','Behavior information · 18 days old':'행동 정보 · 18일 경과'
  ,'Luna completed all publishing requirements':'Luna가 게시 요건을 모두 충족했습니다','Not ready · Behavior information is outdated':'게시 불가 · 행동 정보가 오래되었습니다'
  ,'Request behavior check-in':'행동 체크인 요청','Review Jamie’s check-in':'Jamie 체크인 검토'
  ,'See each animal’s current status, what needs attention, and the next step.':'동물별 현재 상태와 확인이 필요한 항목, 다음 단계를 확인합니다.'
  ,'Set the organization rules that drive publishing requirements, check-ins, and publishing.':'게시 요건, 체크인, 게시 기준을 설정합니다.'
  ,'Continue to the foster response':'임보자 응답 이어보기'
  ,'Confirmed by foster · no changes reported':'임보자 확인 완료 · 변화 없음'
  ,'Not started':'시작 전','Out of date':'기한 경과','Awaiting review':'검토 대기'
  ,'New foster check-in received':'새 임보 체크인 도착','Add behavior assessment':'행동 평가 추가'
  ,'Add photos':'사진 추가','Upload documents':'서류 업로드','Write description':'소개문 작성'
  ,'Coco’s record and publishing requirements checklist were created':'Coco의 레코드와 게시 요건 체크리스트가 생성되었습니다'
  ,'Preview ›':'미리보기 ›'
  ,'See what needs attention and what to do next.':'확인이 필요한 항목과 다음 행동을 확인합니다.','Behavior check-in needs review':'행동 체크인 검토 필요','Medical review pending':'의료 검토 대기','ACTIVITY':'활동','Recent activity':'최근 활동','Quick actions':'빠른 실행'
  ,'Send check-in requests, follow up automatically, and review foster check-ins in one place.':'체크인 요청 발송, 자동 후속 연락, 임보자 체크인 검토를 한곳에서 관리합니다.','Copy check-in link':'체크인 링크 복사','1 change to review':'검토할 변경사항 1건','NEW FOSTER CHECK-IN':'새 임보자 체크인','Compare the current behavior note with Jamie’s new check-in before updating the record.':'레코드를 업데이트하기 전에 현재 행동 메모와 Jamie의 새 체크인을 비교합니다.','Compare the current record with Jamie’s new check-in before anything changes.':'변경사항을 반영하기 전에 현재 레코드와 Jamie의 새 체크인을 비교합니다.','Use on public profile':'공개 프로필에 사용'
  ,'Manage foster placements, contact details, care logs, and check-in schedules in one place.':'임보 배치, 연락처, 돌봄 기록, 체크인 일정을 한곳에서 관리합니다.','FOSTER OVERVIEW':'임보 현황','CARE & CHECK-IN SCHEDULE':'돌봄 및 체크인 일정','Daily care and weekly check-ins':'일간 돌봄과 주간 체크인','Routine care is logged each day. Health, behavior, and adoption photos are reviewed in the weekly check-in.':'일상 돌봄은 매일 기록하고, 건강·행동·입양 사진은 주간 체크인에서 검토합니다.','Preview Jamie’s foster view':'Jamie의 임보자 화면 미리보기','Behavior updates, health changes, and photos':'행동 업데이트·건강 변화·사진','NEEDS STAFF ATTENTION':'직원 확인 필요','Alex is alerted to missed medications or reported concerns.':'투약 누락이나 접수된 우려 사항은 Alex에게 알립니다.'
  ,'Sent automatically at 8:00 AM':'오전 8시 자동 발송','Sent automatically today at 8:00 AM':'오늘 오전 8시 자동 발송'
  ,'Publish ready profiles to your shelter website. Partner channels are shown as planned integrations.':'준비된 프로필을 쉘터 웹사이트에 게시합니다. 제휴 채널은 지원 예정 연동으로 표시됩니다.','Sync now':'지금 동기화','↻ Sync now':'↻ 지금 동기화','Live on shelter website':'쉘터 웹사이트 게시 중','Connected':'연결됨'
  ,'Petify marks a profile ready to publish when all required information is complete and up to date.':'필수 정보가 모두 완료되고 최신 상태이면 Petify가 프로필을 게시 준비 완료로 표시합니다.','Required · Updated within the last 30 days':'필수 · 최근 30일 이내 업데이트','Required · Updated within the last 14 days':'필수 · 최근 14일 이내 업데이트','At least 3 photos approved for public use':'공개 사용이 승인된 사진 최소 3장','“Ready to publish” means the profile has all information required for publishing in Petify. Medical and legal decisions remain with your team.':'“게시 준비 완료”는 Petify에서 게시에 필요한 정보가 프로필에 모두 갖춰졌음을 의미합니다. 의료 및 법적 판단은 담당 팀이 결정합니다.','Start tour':'튜토리얼 시작'
  ,'Nothing else to fill in':'더 작성할 내용이 없습니다','This week’s check-in will be logged for Milo. Staff will not be asked to review it.':'이번 주 체크인은 Milo의 레코드에 기록됩니다. 직원에게 검토를 요청하지 않습니다.'
  ,'What do you need help with?':'어떤 도움이 필요한가요?','Alex will be notified right away.':'Alex에게 즉시 알립니다.','Alex was notified right away':'Alex에게 즉시 알렸습니다'
  ,'Your check-in was logged':'체크인이 기록되었습니다','Thanks, Jamie. No changes were reported, so this is saved to Milo’s record without staff review.':'감사합니다, Jamie. 달라진 점이 없어 직원 검토 없이 Milo의 레코드에 저장되었습니다.','No changes reported · Logged just now':'달라진 점 없음 · 방금 자동 기록'
  ,'Alex has been notified':'Alex에게 알렸습니다','Thanks, Jamie. Alex will follow up with you about Milo.':'감사합니다, Jamie. Alex가 Milo에 관해 후속 연락을 드립니다.','Help requested · Alex notified just now':'도움 요청 · Alex에게 방금 알림'
  ,'No changes reported by Jamie':'Jamie가 달라진 점 없음을 보고','Weekly check-in · Logged automatically':'주간 체크인 · 자동 기록','Milo check-in logged automatically':'Milo 체크인 자동 기록','Milo · No changes reported · logged automatically':'Milo · 달라진 점 없음 · 자동 기록','No staff review requested':'직원 검토 요청 없음'
};

function translateText(value) {
  const raw=value.trim();
  if(!raw) return value;
  let translated=KO_UI[raw];
  if(!translated) {
    const rules=[
      [/^STEP (\d+) OF (\d+)$/,(_,a,b)=>`${a} / ${b}단계`],
      [/^Step (\d+) of 3$/,(_,a)=>`3단계 중 ${a}단계`],
      [/^(All|New intake|In care|Ready|Ready to publish|Not ready|Blocked|Needs review|Needs attention|Published|Overdue|Not sent|Sent|In progress|Changes requested|Approved|Applied|Active|Available|Inactive|Updates due|Responded) (\d+)$/,(_,a,b)=>`${KO_UI[a]||a} ${b}`],
      [/^(\d+) animals$/,(_,a)=>`동물 ${a}마리`],
      [/^(\d+) check-ins reported no changes this week\. Each one was saved to the animal’s record without a staff review\.$/,(_,a)=>`이번 주 특이사항 없음으로 응답한 체크인 ${a}건입니다. 각 건은 직원 검토 없이 동물 레코드에 저장됐습니다.`],
      [/^(\w+) · No changes reported · logged automatically$/,(_,a)=>`${a} · 특이사항 없음 · 자동 기록`],
      [/^(\d+) ready$/,(_,a)=>`준비 완료 ${a}마리`],
      [/^(\d+) submission$/,(_,a)=>`제출 ${a}건`],
      [/^(\d+) of (\d+) animals$/,(_,a,b)=>`동물 ${b}마리 중 ${a}마리`],
      [/^(\d+) named demo records · (\d+) animals total$/,(_,a,b)=>`전체 동물 ${b}마리 · 이름이 표시된 데모 레코드 ${a}건`],
      [/^(\d+) matching named demo records$/,(_,a)=>`검색과 일치하는 데모 레코드 ${a}건`],
      [/^(\d+) active foster profiles$/,(_,a)=>`활성 임보자 프로필 ${a}명`],
      [/^(\d+) available foster profiles$/,(_,a)=>`배치 가능한 임보자 프로필 ${a}명`],
      [/^(\d+) overdue$/,(_,a)=>`기한 초과 ${a}건`],
      [/^(\d+) of (\d+) responded$/,(_,a,b)=>`${b}명 중 ${a}명 응답`],
      [/^(\d+) updates$/,(_,a)=>`업데이트 ${a}건`],
      [/^(\d+) named demo profiles · (\d+) foster profiles total$/,(_,a,b)=>`전체 임보자 프로필 ${b}명 · 이름이 표시된 데모 프로필 ${a}명`],
      [/^Showing (\d+) of (\d+) fosters$/,(_,a,b)=>`임보자 ${b}명 중 ${a}명 표시`],
      [/^(.+) response rate$/,(_,a)=>`응답률 ${a}`],
      [/^Open (.+)’s record$/,(_,a)=>`${a} 레코드 열기`],
      [/^(\d+) of 5 sections complete$/,(_,a)=>`5개 항목 중 ${a}개 완료`],
      [/^(\d+) of 5 care tasks logged$/,(_,a)=>`돌봄 할 일 5개 중 ${a}개 기록`],
      [/^(\d+) of 5 care tasks logged · medication due$/,(_,a)=>`돌봄 할 일 5개 중 ${a}개 기록 · 투약 예정`],
      [/^Sent automatically at 8:00 AM · (\d+) of 5 care tasks logged · medication due$/,(_,a)=>`오전 8시 자동 발송 · 돌봄 할 일 5개 중 ${a}개 기록 · 투약 예정`],
      [/^(\d+) of 5 care tasks logged · Saved just now$/,(_,a)=>`돌봄 할 일 5개 중 ${a}개 기록 · 방금 저장`],
      [/^(\d+) min ago$/,(_,a)=>`${a}분 전`],
      [/^(\d+) minutes ago$/,(_,a)=>`${a}분 전`],
      [/^(\d+) days ago$/,(_,a)=>`${a}일 전`],
      [/^(\d+) hr$/,(_,a)=>`${a}시간 전`],
      [/^Showing: (.+)$/,(_,a)=>`표시 중: ${KO_UI[a]||a}`],
      [/^(\d+) photos attached$/,(_,a)=>`사진 ${a}장 첨부`],
      [/^(\d+) animals are waiting for a foster placement\.$/,(_,a)=>`임보자 배정을 기다리는 동물 ${a}마리`],
      [/^(.+) · (New intake|In foster)$/,(_,a,b)=>`${a} · ${KO_UI[b]||b}`],
      [/^(.+) · (Available|Connected)$/,(_,a,b)=>`${a} · ${KO_UI[b]}`],
      [/^(.+) will receive a secure form link for (.+). Reminder after 2 days.$/,(_,foster,animal)=>`${foster}에게 ${animal} 전용 보안 양식 링크가 발송됩니다. 2일 후 리마인드합니다.`],
      [/^(.+) was placed with (.+) · first check-in scheduled$/,(_,animal,foster)=>`${animal}가 ${foster}에게 배치됐고 첫 체크인이 예약되었습니다`],
      [/^WEEKLY CHECK-IN · (.+)$/,(_,a)=>`주간 체크인 · ${a}`],
      [/^(.+) · tutorial complete$/,(_,a)=>`${KO_UI[a]||a} · 튜토리얼 완료`],
      [/^(.+) · prepared interaction opened$/,(_,a)=>`${a} · 준비된 상호작용 열림`]
    ];
    for(const [pattern,replace] of rules){if(pattern.test(raw)){translated=raw.replace(pattern,replace);break;}}
  }
  return translated ? value.replace(raw,translated) : value;
}

function applyLanguage() {
  document.documentElement.lang=state.language==='ko'?'ko':'en';
  if(state.language!=='ko') return;
  const walker=document.createTreeWalker(app,NodeFilter.SHOW_TEXT);
  const nodes=[];
  while(walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node=>{node.nodeValue=translateText(node.nodeValue);});
  app.querySelectorAll('[placeholder],[aria-label],[title]').forEach(el=>{
    ['placeholder','aria-label','title'].forEach(attr=>{if(el.hasAttribute(attr))el.setAttribute(attr,translateText(el.getAttribute(attr)));});
  });
  app.querySelectorAll('input[value]').forEach(el=>{const translated=translateText(el.value);if(translated!==el.value)el.value=translated;});
}

function tutorialSteps() { return TUTORIALS[state.tutorialId]?.steps || []; }

const UPDATE_SUBMISSIONS = [
  {
    id:'milo', name:'Milo', img:'assets/dog1.png', foster:'Jamie Lee', time:'12 min ago',
    status:'Needs review', statusType:'review', filter:'review', flag:'Behavior changed', photoCount:3,
    summaryTitle:'1 change to review', summaryText:'Compare the current behavior note with Jamie’s new check-in before updating the record.', summaryType:'warning',
    field:'Comfort around dogs', current:'Needs slow introductions. Avoid crowded play groups.', currentMeta:'Confirmed 18 days ago',
    incoming:'Relaxed with two resident dogs and has started initiating play.', incomingMeta:'Submitted today by Jamie',
    photos:['assets/dog1.png','assets/milo-home.jpg','assets/milo-yard.jpg'], mode:'review'
  },
  {
    id:'rocky', name:'Rocky', img:'assets/rocky.png', foster:'Casey Park', time:'5 days late',
    status:'Overdue', statusType:'failed', filter:'overdue', flag:'Reminder 2 of 2 sent', mode:'tracking',
    trackingTitle:'Response overdue by 5 days', trackingText:'Both automatic reminders were delivered. A coordinator follow-up is now recommended.',
    due:'Aug 4', delivery:'Email + SMS delivered', nextReminder:'Manual follow-up', progress:'Not started'
  },
  {
    id:'maple', name:'Maple', img:'assets/maple.png', foster:'Jordan Lee', time:'2 hr ago',
    status:'Sent', statusType:'neutral', filter:'sent', flag:'Waiting for response', mode:'tracking',
    trackingTitle:'Request delivered', trackingText:'Jordan received the secure check-in link by email and SMS. No staff follow-up is needed yet.',
    due:'Aug 12', delivery:'Email + SMS delivered', nextReminder:'Automatic · Aug 11', progress:'Not opened'
  },
  {
    id:'nori', name:'Nori', img:'assets/nori.png', foster:'Taylor Reed', time:'38 min ago',
    status:'In progress', statusType:'review', filter:'progress', flag:'Form opened · draft saved', mode:'tracking',
    trackingTitle:'Foster is completing the form', trackingText:'Taylor opened the secure link and saved a partial response. Petify will preserve the draft.',
    due:'Aug 10', delivery:'Secure link opened', nextReminder:'Paused while active', progress:'3 of 5 sections'
  },
  {
    id:'buddy', name:'Buddy', img:'assets/dog3.png', foster:'Morgan Kim', time:'Yesterday',
    status:'Changes requested', statusType:'failed', filter:'requested', flag:'Health follow-up needed', photoCount:3,
    summaryTitle:'Clarification requested from Morgan', summaryText:'Buddy skipped one meal after treatment. Confirm appetite and bandage condition before approval.', summaryType:'alert',
    field:'Post-treatment recovery', current:'Eating normally. No swelling or mobility concerns reported.', currentMeta:'Confirmed 7 days ago',
    incoming:'Skipped dinner after treatment and is licking the bandaged paw. Morning walk was normal.', incomingMeta:'Submitted yesterday by Morgan',
    photos:['assets/dog3.png','assets/buddy-recovery.jpg','assets/buddy-walk.jpg'], mode:'requested'
  },
  {
    id:'luna', name:'Luna', img:'assets/dog2.png', foster:'Taylor Reed', time:'Aug 7',
    status:'Applied', statusType:'complete', filter:'approved', flag:'No concerns reported', photoCount:3,
    summaryTitle:'Check-in applied to record', summaryText:'No publishing-impacting changes were reported. Two photos were added to Luna’s public media.', summaryType:'success',
    field:'Weekly wellbeing', current:'Eating, sleeping, and exercising normally.', currentMeta:'Confirmed Jul 31',
    incoming:'No health or behavior changes. Settling well and sleeping through the night.', incomingMeta:'Applied Aug 7 by Alex',
    photos:['assets/dog2.png','assets/luna-sleep.jpg','assets/luna-play.jpg'], mode:'approved'
  }
];

function animals() {
  const list = BASE_ANIMALS.map(a => ({...a}));
  list.filter(animal=>animal.queue==='new'&&state.placements[animal.id]).forEach(animal=>{
    Object.assign(animal, {queue:'care', stage:'In care', readiness:'neutral', blocker:'None', next:'Request first check-in', updated:'Just now'});
  });
  const milo = list.find(a => a.id === 'milo');
  if (state.updateApproved || state.miloReady) {
    Object.assign(milo, {queue:'ready', stage:'In care', readiness:'ready', blocker:'None', next:'Preview profile', updated:'Just now'});
  } else if (hasReviewableMiloSubmission()) {
    Object.assign(milo, {queue:'review', stage:'In care', readiness:'review', blocker:'Behavior check-in submitted', next:'Review check-in'});
  } else if (state.fosterSubmittedNow && state.formChoice === 'same') {
    Object.assign(milo, {queue:'care', stage:'In care', readiness:'neutral', blocker:'None', next:'Open record', updated:'Just now'});
  } else {
    Object.assign(milo, {queue:'care', stage:'In care', readiness:'neutral', blocker:'Behavior information · 18 days old', next:'Request check-in'});
  }
  if (state.published) Object.assign(milo, {queue:'published', stage:'In care', readiness:'published', next:'View live profile', updated:'Just now'});
  const cocoAssigned=Boolean(state.placements.coco);
  if (state.cocoCreated) list.unshift({
    id:'coco', recordId:'1093', name:'Coco', img:'assets/coco.png', meta:'Mixed breed · Female · 2 years',
    queue:cocoAssigned?'care':'new', stage:cocoAssigned?'In care':'New intake', readiness:'neutral',
    blocker:cocoAssigned?'Health, behavior, profile':'Foster placement + 4 items',
    next:cocoAssigned?'Request first check-in':'Place in foster', owner:'Alex Rivera', updated:'Just now'
  });
  return list;
}

function miloQuietConfirmed() {
  return state.fosterSubmittedNow && state.formChoice === 'same';
}

function hasReviewableMiloSubmission() {
  return state.fosterSubmitted && (!state.fosterSubmittedNow || state.formChoice === 'change');
}

function animalQueueTotals() {
  return animals().reduce((totals,animal)=>{
    totals[animal.queue]=(totals[animal.queue]||0)+1;
    return totals;
  },{new:0,care:0,review:0,ready:0,published:0});
}

function animalQueueLabel(queue) {
  return {new:'New intake',care:'In care',review:'Needs attention',ready:'Ready to publish',published:'Published'}[queue]||'All';
}

function listingStatus(animal) {
  return animal.readiness==='ready'?'Ready to publish':animal.readiness==='published'?'Published':'Not ready';
}

function currentAnimal() { return animals().find(a => a.id === state.animalId) || animals()[0]; }
function statusPill(type, label) { return `<span class="pill ${type}"><i></i>${label}</span>`; }
function iconButton(icon, label, action) { return `<button class="icon-button" data-action="${action}" aria-label="${label}"><span>${icon}</span><em>${label}</em></button>`; }
function formatCount(n) { return `<strong class="metric-number">${n}</strong>`; }
function languageSwitch() { return `<div class="language-switch" role="group" aria-label="Language"><button class="${state.language==='ko'?'active':''}" data-language="ko">한국어</button><button class="${state.language==='en'?'active':''}" data-language="en">English</button></div>`; }

function layout(content) {
  const section = state.view === 'animal' ? 'animals' : state.view === 'fosterform' ? 'updates' : state.view;
  return `
    <div class="app-shell">
      <aside class="sidebar ${state.mobileNavOpen?'mobile-open':''}">
        <button class="brand" data-view="dashboard" aria-label="Petify for Shelters dashboard">
          <span class="brand-mark"><b></b></span>
          <span><strong>Petify</strong><small>for Shelters</small></span>
        </button>
        <div class="workspace-label">SECOND CHANCE RESCUE</div>
        <nav>${NAV.map(([id,ico,label]) => `<button class="nav-item ${section===id?'active':''}" data-view="${id}"><span>${ico}</span><b>${label}</b>${id==='updates'?'<em>2</em>':''}</button>`).join('')}</nav>
        <div class="sidebar-bottom">
          <button class="demo-reset" data-action="reset-demo"><span>↺</span><b>Reset demo</b></button>
          <button class="account" data-action="account-menu"><span class="avatar">AR</span><span><b>Alex Rivera</b><small>Administrator</small></span><i>⌄</i></button>
        </div>
      </aside>
      ${state.mobileNavOpen?'<button class="mobile-nav-backdrop" data-action="close-nav" aria-label="Close navigation"></button>':''}
      <main class="main">
        <header class="topbar">
          <button class="mobile-brand" data-action="open-nav" aria-label="Open navigation"><span class="mobile-menu-icon">☰</span><span class="brand-mark mobile-logo-mark"><b></b></span><span class="mobile-logo-type"><strong>Petify</strong><small>for Shelters</small></span></button>
          <label class="global-search"><span>⌕</span><input id="global-search" value="${state.search}" placeholder="Search animals, fosters, or records" aria-label="Search"></label>
          <div class="top-actions">
            ${languageSwitch()}
            <button class="tutorial-launch" data-action="guide"><span>▶</span> Start tour</button>
            ${iconButton('◌','Notifications','notifications')}
            <button class="add-button" data-action="open-intake"><span>＋</span> Add animal</button>
          </div>
        </header>
        ${content}
      </main>
    </div>
    ${state.modal ? renderModal() : ''}
    ${state.drawer ? renderDrawer() : ''}
    ${state.tutorialStep!==null ? renderTutorial() : ''}
    ${state.toast ? `<div class="toast"><span>✓</span>${state.toast}</div>` : ''}
  `;
}

function pageHeader(kicker, title, description, actions='') {
  return `<div class="page-header"><div><p class="kicker">${kicker}</p><h1>${title}</h1><p class="page-description">${description}</p></div><div class="page-actions">${actions}</div></div>`;
}

function dashboardView() {
  const totals=animalQueueTotals();
  const miloNeedsReview=hasReviewableMiloSubmission()&&!state.updateApproved&&!state.published;
  const stats = [
    ['New intake', totals.new, 'Animal records', 'new'],
    ['In care', totals.care, '6 in foster homes', 'care'],
    ['Needs attention', totals.review, 'Animal records', 'review'],
    ['Ready to publish', totals.ready, state.miloReady&&!state.published?'Milo is now ready':'3 ready to publish this week', 'ready'],
    ['Published', totals.published, 'Shelter website', 'published']
  ];
  return `<section class="content">
    ${pageHeader('SUNDAY, AUGUST 9','Good morning, Alex','Here is what needs attention across your shelter today.',`<button class="secondary-button" data-action="export-report">Export report</button><button class="primary-button" data-action="open-intake">＋ Add animal</button>`)}
    <div class="metric-grid five metric-grouped">
      <span class="metric-group" style="--span:2">ANIMAL STATUS</span><span class="metric-group" style="--span:1">NEEDS ATTENTION</span><span class="metric-group" style="--span:2">LISTING STATUS</span>
      ${stats.map(([label,num,note,type]) => `<button class="metric-card ${type}" data-filter-jump="${type}"><span class="metric-icon"></span><span><b>${label}</b>${formatCount(num)}<small>${note}</small></span><i>›</i></button>`).join('')}</div>
    <div class="dashboard-grid">
      <section class="surface attention-card">
        <div class="section-head"><div><p class="kicker">ANIMALS NEEDING ATTENTION</p><h2>See what needs attention and what to do next.</h2></div><button class="text-button" data-view="animals" data-set-filter="review">View all <span>›</span></button></div>
        <div class="exception-list">
          ${miloNeedsReview?attentionAnimalRow('milo','assets/dog1.png','Milo','Behavior check-in needs review','Jamie Lee · Submitted 12 min ago','Review Milo'):state.updateApproved||state.published?attentionAnimalRow('milo','assets/dog1.png','Milo',state.published?'Profile published':'Ready to publish','All publishing requirements complete','Open Milo'):''}
          ${attentionAnimalRow('buddy','assets/dog3.png','Buddy','Medical review pending','Morgan Kim · Updated yesterday','Review Buddy')}
          ${attentionAnimalRow('luna','assets/dog2.png','Luna','Profile ready to publish','All 5 publishing requirements complete','Open Luna')}
        </div>
      </section>
      <section class="surface activity-card">
        <div class="section-head"><div><p class="kicker">ACTIVITY</p><h2>Recent activity</h2></div><button class="round-button" data-action="refresh-activity">↻</button></div>
        <div class="activity-list">
          ${activityItem('assets/dog1.png', state.updateApproved?'Milo became ready to publish':state.fosterSubmittedNow&&state.formChoice==='same'?'Milo check-in logged automatically':'Jamie submitted an update for Milo', state.updateApproved?'Behavior update approved by Alex':state.fosterSubmittedNow&&state.formChoice==='same'?'No changes reported by Jamie':'Behavior changes · 3 new photos','12 min ago')}
          ${activityItem('assets/dog2.png','Luna’s profile is ready','All 5 publishing requirements complete','42 min ago')}
          ${activityItem('assets/dog3.png','Medical clearance added for Buddy','Submitted by Morgan Kim','Yesterday')}
          ${activityItem('assets/dog4.png','Daisy published to shelter website','Published by Alex Rivera','Aug 7')}
        </div>
        <button class="activity-footer" data-action="activity-log">Open full activity log <span>›</span></button>
      </section>
    </div>
    <section class="surface quick-actions">
      <div><p class="kicker">QUICK START</p><h2>Quick actions</h2></div>
      <button data-action="open-intake"><span>＋</span><b>New intake</b><small>Create a record</small></button>
      <button data-view="updates"><span>✓</span><b>Review check-ins</b><small>${miloNeedsReview?'1':'0'} submission</small></button>
      <button data-view="animals" data-set-filter="review"><span>!</span><b>Review animal records</b><small>${totals.review} animals</small></button>
      <button data-view="animals" data-set-filter="ready"><span>↑</span><b>Publish profiles</b><small>${totals.ready} ready to publish</small></button>
    </section>
  </section>`;
}

function attentionAnimalRow(id,img,name,title,note,action) {
  return `<div class="exception-row animal-attention"><img src="${img}" alt="${name}"><div><b>${name} · ${title}</b><small>${note}</small></div><button data-attention-animal="${id}">${action} <span>›</span></button></div>`;
}
function activityItem(img,title,note,time) { return `<button class="activity-item" data-action="activity-item"><img src="${img}" alt=""><span><b>${title}</b><small>${note}</small></span><time>${time}</time></button>`; }

function animalsView() {
  const realAnimals=animals();
  const counts=animalQueueTotals();
  const totalAnimals=Object.values(counts).reduce((sum,count)=>sum+count,0);
  let list=state.animalFilter==='all'?realAnimals:realAnimals.filter(a=>a.queue===state.animalFilter);
  if (state.search) list = list.filter(a => `${a.name} ${a.meta} ${a.owner}`.toLowerCase().includes(state.search.toLowerCase()));
  const footerText=state.search
    ? `${list.length} matching named demo records`
    : `${list.length} of ${list.length} animals`;
  return `<section class="content">
    ${pageHeader('ANIMAL WORKSPACE','Animals','See each animal’s current status, what needs attention, and the next step.',`<button class="secondary-button" data-action="bulk-actions">Bulk actions</button><button class="primary-button" data-action="open-intake">＋ Add animal</button>`)}
    <section class="surface table-surface">
      <div class="table-toolbar">
        <div class="filter-tabs">${[['all',`All ${totalAnimals}`],['new',`New intake ${counts.new}`],['care',`In care ${counts.care}`],['review',`Needs attention ${counts.review}`],['ready',`Ready to publish ${counts.ready}`],['published',`Published ${counts.published}`]].map(([id,label])=>`<button class="${state.animalFilter===id?'active':''}" data-animal-filter="${id}">${label}</button>`).join('')}</div>
        <div class="toolbar-actions"><button class="filter-button" data-action="filters">☷ Filters ${state.animalFilter==='all'?'':'<span>1</span>'}</button><button class="filter-button" data-action="columns">▤ Columns</button></div>
      </div>
      <div class="active-filters ${state.animalFilter==='all'?'hidden':''}"><span>Showing: ${animalQueueLabel(state.animalFilter)}<button data-animal-filter="all">×</button></span><small>Dashboard and list counts use the same animal status.</small><button data-action="save-view">Save view</button></div>
      <div class="table-wrap"><table><thead><tr><th><input type="checkbox" data-action="select-all" aria-label="Select all"></th><th>Animal</th><th>Current status</th><th>Needs attention</th><th>Next step</th><th>Listing status</th><th>Owner</th><th>Updated</th><th></th></tr></thead><tbody>
        ${list.length ? list.map(animalRow).join('') : `<tr><td colspan="9"><div class="empty"><span>⌕</span><h3>No animals found</h3><p>Try a different search or filter.</p><button class="secondary-button" data-action="clear-search">Clear filters</button></div></td></tr>`}
      </tbody></table></div>
      <div class="table-footer"><span>${footerText}</span></div>
    </section>
  </section>`;
}

function animalRow(a) {
  return `<tr class="clickable-row" data-open-animal="${a.id}">
    <td><input type="checkbox" data-row-check="${a.id}" aria-label="Select ${a.name}"></td>
    <td><div class="animal-cell"><img src="${a.img}" alt="${a.name}"><span><b>${a.name}</b><small>${a.meta}</small></span></div></td>
    <td><span class="stage-text">${a.stage}</span></td>
    <td><span class="blocker ${a.blocker==='None'?'none':''}">${a.blocker}</span></td>
    <td><button class="table-link" data-next-action="${a.id}">${a.next} <span>›</span></button></td>
    <td>${statusPill(a.readiness,listingStatus(a))}</td>
    <td><span class="owner"><i>${a.owner.split(' ').map(x=>x[0]).join('')}</i>${a.owner}</span></td><td>${a.updated}</td>
    <td><button class="kebab" data-row-menu="${a.id}" aria-label="More actions">•••</button></td>
  </tr>`;
}

function animalView() {
  const a = currentAnimal();
  const isMilo = a.id === 'milo';
  const assignedFosterId=state.placements[a.id];
  const assignedFoster=assignedFosterId?fosterPerson(assignedFosterId):null;
  const needsPlacement=a.queue==='new'&&!assignedFosterId;
  const ready = isMilo ? state.miloReady : a.readiness==='ready';
  const review = isMilo && hasReviewableMiloSubmission() && !state.updateApproved;
  return `<section class="content detail-content">
    <button class="back-link" data-view="animals">‹ Back to animals</button>
    <div class="animal-header surface">
      <img src="${a.img}" alt="${a.name}"><div class="animal-title"><div><h1>${a.name}</h1>${statusPill(ready?'ready':review?'review':a.readiness,listingStatus(a))}</div><p>${a.meta} · ID PN-${a.recordId||(a.id==='milo'?'1048':'1051')}</p><div class="animal-facts"><span>⌂ ${needsPlacement?'Main shelter':assignedFoster?`${assignedFoster.name} · Foster home`:'Jamie Lee · Foster home'}</span><span>♧ ${needsPlacement?'No foster assigned':'Foster coordinator: Alex'}</span></div></div>
      <div class="header-actions"><button class="secondary-button" data-action="animal-more">•••</button>${needsPlacement?`<button class="primary-button" data-action="place-foster">Place in foster</button>`:`<button class="secondary-button" data-action="request-update">Request check-in</button><button class="primary-button" data-action="open-profile" ${ready?'':'disabled'}>Preview & publish</button>`}</div>
    </div>
    <nav class="detail-tabs">${Object.entries(TAB_LABELS).map(([id,label])=>`<button class="${state.detailTab===id?'active':''}" data-detail-tab="${id}">${label}${id==='updates'?'<span>3</span>':''}</button>`).join('')}</nav>
    ${renderAnimalTab(a, ready, review)}
  </section>`;
}

function renderAnimalTab(a, ready, review) {
  if (state.detailTab==='overview') return overviewTab(a,ready,review);
  if (state.detailTab==='profile') return simpleFormTab('Animal profile','Core identity and intake details',[['Name',a.name],['Species','Dog'],['Breed',a.meta.split(' · ')[0]],['Sex',a.meta.includes('Female')?'Female':'Male'],['Estimated age',a.meta.split(' · ').pop()],['Intake source','Owner surrender'],['Intake date','August 3, 2026'],['Current location',a.queue==='new'?'Main shelter':state.placements[a.id]?`Foster home · ${fosterPerson(state.placements[a.id]).name}`:'Foster home · Jamie Lee']]);
  if (state.detailTab==='health') return recordTab('Health','Medical information required for publishing',[['Rabies vaccination','Complete','Aug 2, 2026'],['DHPP vaccination','Complete','Aug 2, 2026'],['Spay / neuter','Complete','Jul 28, 2026'],['Medical clearance','Complete','Dr. Casey · Aug 6']]);
  if (state.detailTab==='behavior') return recordTab('Behavior','Latest approved observations',[['People','Friendly and seeks attention','Updated 18 days ago'],['Dogs',state.updateApproved?'Relaxed with resident dogs; initiates play':'Needs slow introductions','Updated '+(state.updateApproved?'today':'18 days ago')],['Cats','Not tested','Next step required'],['Home notes','Settles well after walks','Jamie Lee']]);
  if (state.detailTab==='updates') return updatesTimelineTab();
  if (state.detailTab==='media') return mediaTab(a);
  if (state.detailTab==='documents') return recordTab('Documents','Required records and approvals',[['Intake record','Complete','Alex Rivera'],['Medical release','Complete','Dr. Casey'],['Behavior assessment','Complete','Morgan Kim'],['Adoption disclosure','Complete','Alex Rivera']]);
  if (state.detailTab==='public') return publicProfileTab(a);
  return activityTab(a);
}

function overviewTab(a, ready, review) {
  const needsPlacement=a.queue==='new'&&!state.placements[a.id];
  const completed = ready?5:needsPlacement?1:4;
  return `<div class="detail-grid">
    <div class="detail-main">
      <section class="surface status-banner ${ready?'ready':review?'review':'blocked'}">
        <div class="status-symbol">${ready?'✓':review?'↻':'!'}</div><div><p class="kicker">PUBLISHING STATUS</p><h2>${ready?'Ready to publish':review?'Not ready · 1 check-in waiting for review':needsPlacement?'Not ready · 4 requirements incomplete':'Not ready · Behavior information is outdated'}</h2><p>${ready?'All required information is complete and current.':review?'Jamie’s submission may resolve the final unmet requirement. Review it before the record changes.':needsPlacement?'Complete health, behavior, documents, and public profile information.':'Request a new foster check-in to confirm behavior before publishing.'}</p></div>
        <button class="${ready?'primary-button':'secondary-button'}" data-action="${ready?'open-profile':review?'review-milo':needsPlacement?'place-foster':'request-update'}">${ready?'Preview profile':review?'Review check-in':needsPlacement?'Place in foster':'Request check-in'} <span>›</span></button>
      </section>
      <section class="surface readiness-card">
        <div class="section-head"><div><p class="kicker">PUBLISHING REQUIREMENTS</p><h2>${completed} of 5 sections complete</h2></div><div class="progress-ring" style="--progress:${completed*20}"><b>${completed*20}%</b></div></div>
        <div class="progress-track"><i style="width:${completed*20}%"></i></div>
        ${checkRow('Health','Vaccinations and medical clearance complete','Complete','complete','health','')}
        ${checkRow('Behavior',ready?(miloQuietConfirmed()?'Confirmed by foster · no changes reported':'Foster check-in applied today'):review?'New foster check-in received':needsPlacement?'No behavior assessment':'Last confirmed 18 days ago',ready?'Complete':review?'Awaiting review':needsPlacement?'Not started':'Out of date',ready?'complete':review?'review':'blocked','behavior',ready?'':review?'Review check-in':needsPlacement?'Add behavior assessment':'Request check-in')}
        ${checkRow('Media',needsPlacement?'1 intake photo · 3 more recommended':'8 approved photos · 1 video',needsPlacement?'In progress':'Complete',needsPlacement?'review':'complete','media',needsPlacement?'Add photos':'')}
        ${checkRow('Documents',needsPlacement?'Intake record only':'All required documents approved',needsPlacement?'In progress':'Complete',needsPlacement?'blocked':'complete','documents',needsPlacement?'Upload documents':'')}
        ${checkRow('Public profile',needsPlacement?'Description not started':'Profile copy and adoption details complete',needsPlacement?'Not started':'Complete',needsPlacement?'blocked':'complete','public',needsPlacement?'Write description':'')}
      </section>
    </div>
    <aside class="detail-aside">
      <section class="surface next-action-card"><p class="kicker">NEXT STEP</p><h2>${ready?'Publish adoption profile':review?'Review Jamie’s check-in':needsPlacement?'Assign a foster home':'Request behavior check-in'}</h2><p>${ready?'Ready now':review?"Due today":needsPlacement?'Owner · Alex Rivera':'Owner · Alex Rivera · Due today'}</p><div class="mini-owner"><span class="avatar">AR</span><span><b>Alex Rivera</b><small>Foster coordinator</small></span></div><button class="primary-button full" data-action="${ready?'open-profile':review?'review-milo':needsPlacement?'place-foster':'request-update'}">${ready?'Open profile':review?'Review submission':needsPlacement?'Set placement':'Send request'}</button><button class="text-button centered" data-action="assign-task">Assign to someone else</button></section>
      <section class="surface side-activity"><div class="section-head"><div><p class="kicker">RECENT ACTIVITY</p><h2>Latest changes</h2></div><button class="round-button" data-detail-tab="activity">›</button></div>${activityItem(a.img,review?'Update submitted by Jamie':'Photos approved by Alex',review?'3 new photos · behavior changed':'8 public photos ready','Today')}${activityItem(a.img,'Medical clearance received','Added by Dr. Casey','Aug 6')}</section>
    </aside>
  </div>`;
}

function checkRow(title,note,label,type,tab,next) { return `<button class="check-row" data-detail-tab="${tab}"><span class="check-icon ${type}">${type==='complete'?'✓':type==='review'?'↻':'!'}</span><span><b>${title}</b><small>${note}</small></span>${statusPill(type,label)}<em class="check-next">${next||''}</em><i>›</i></button>`; }

function simpleFormTab(title,desc,fields) { return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">RECORD</p><h2>${title}</h2><p>${desc}</p></div><button class="secondary-button" data-action="edit-record">Edit</button></div><div class="record-grid">${fields.map(([l,v])=>`<div><small>${l}</small><b>${v}</b></div>`).join('')}</div><div class="panel-footer"><span>Last updated by Alex Rivera · Today</span><button class="text-button" data-action="view-history">View history</button></div></section>`; }
function recordTab(title,desc,items) { return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">ANIMAL RECORD</p><h2>${title}</h2><p>${desc}</p></div><button class="primary-button" data-action="add-record">＋ Add entry</button></div><div class="record-list">${items.map(([a,b,c],i)=>`<button data-action="record-entry"><span class="check-icon ${b==='Complete'?'complete':b==='Not tested'?'blocked':'review'}">${b==='Complete'?'✓':i+1}</span><span><b>${a}</b><small>${b}</small></span><em>${c}</em><i>›</i></button>`).join('')}</div></section>`; }
function updatesTimelineTab() { return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">CHECK-INS</p><h2>Requests and submissions</h2><p>Every request, response, and application stays with Milo’s record.</p></div><button class="primary-button" data-action="request-update">Request check-in</button></div><div class="record-list">${state.fosterSubmittedNow&&state.formChoice==='same'?'<button data-action="request-details"><span class="check-icon complete">✓</span><span><b>No changes reported by Jamie</b><small>Weekly check-in · Logged automatically</small></span><em>Just now</em><i>›</i></button>':'<button data-action="review-milo"><span class="check-icon review">↻</span><span><b>Weekly check-in submitted</b><small>Jamie Lee · Behavior changed · 3 photos</small></span><em>12 min ago</em><i>›</i></button>'}<button data-action="request-details"><span class="check-icon complete">✓</span><span><b>Weekly check-in requested</b><small>Email + SMS · Opened in 8 minutes</small></span><em>Aug 9</em><i>›</i></button><button data-action="request-details"><span class="check-icon complete">✓</span><span><b>First foster check-in applied</b><small>No health changes · 5 photos</small></span><em>Jul 22</em><i>›</i></button></div></section>`; }
function mediaTab(a) { return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">MEDIA LIBRARY</p><h2>Photos & video</h2><p>Choose which assets can appear on public adoption profiles.</p></div><button class="primary-button" data-action="upload-media">＋ Upload</button></div><div class="media-grid">${[a.img,'assets/dog2.png','assets/dog4.png','assets/dog3.png'].map((img,i)=>`<button class="media-item ${i<3?'selected':''}" data-action="toggle-media"><img src="${img}" alt=""><span>${i<3?'✓':'＋'}</span><small>${i===0?'Cover photo':'Foster upload'}</small></button>`).join('')}</div></section>`; }
function publicProfileTab(a) { return `<section class="surface tab-panel profile-editor"><div class="section-head"><div><p class="kicker">PUBLIC PROFILE</p><h2>Adoption listing</h2><p>Internal notes are never included in the public profile.</p></div><button class="primary-button" data-action="open-profile">Preview</button></div><div class="form-grid"><label><span>Public name</span><input value="${a.name}"></label><label><span>Headline</span><input value="A gentle companion ready for a quiet home"></label><label class="full"><span>About ${a.name}</span><textarea rows="6">${a.name} is affectionate, curious, and settling beautifully into foster life. ${a.name} enjoys neighborhood walks, sunny windows, and quiet evenings with people.</textarea></label><label><span>Best home</span><select><option>Adults or older children</option></select></label><label><span>Adoption contact</span><input value="adopt@secondchance.org"></label></div><div class="panel-footer"><span>${state.profileSaved?'All changes saved':'Draft autosaved a moment ago'}</span><button class="primary-button" data-action="save-profile">Save profile</button></div></section>`; }
function activityTab(a) {
  const items=state.fosterSubmittedNow&&state.formChoice==='same'
    ? [['No changes reported by Jamie','Just now'],['Weekly check-in opened','20 minutes ago'],['Check-in reminder sent automatically','2 days ago'],['Medical clearance approved by Dr. Casey','Aug 6'],['Milo placed with Jamie Lee','Jul 20'],['Animal record created at intake','Jul 18']]
    : [['Foster check-in submitted by Jamie Lee','12 minutes ago'],['Weekly check-in opened','20 minutes ago'],['Check-in reminder sent automatically','2 days ago'],['Medical clearance approved by Dr. Casey','Aug 6'],['Milo placed with Jamie Lee','Jul 20'],['Animal record created at intake','Jul 18']];
  return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">AUDIT TRAIL</p><h2>Activity</h2><p>Requests, applications, state changes, and publishing events.</p></div><button class="secondary-button" data-action="export-activity">Export</button></div><div class="timeline-list">${items.map(([text,time],i)=>`<button data-action="activity-item"><i></i><span><b>${text}</b><small>${time}</small></span><em>${i<2?'AR':'System'}</em></button>`).join('')}</div></section>`;
}

function updateQueueTotals(submissions) {
  return submissions.reduce((totals,submission)=>{
    totals[submission.filter]=(totals[submission.filter]||0)+1;
    return totals;
  },{overdue:0,sent:0,progress:0,review:0,due:0,requested:0,approved:0});
}

function updateQueueLabel(queue) {
  return {overdue:'Overdue',sent:'Sent',progress:'In progress',review:'Needs review',due:'Not sent',requested:'Changes requested',approved:'Applied'}[queue]||'All';
}

function updateSubmissionCard(item,selectedId) {
  return `<button class="submission ${selectedId===item.id?'active':''}" data-select-update="${item.id}"><img src="${item.img}" alt=""><span><b>${item.name}<em class="${item.statusType}">${item.status}</em></b><small>${item.foster} · ${item.time}</small><i class="${item.statusType}">${item.flag}</i></span></button>`;
}

function updatesView() {
  const selected = state.selectedUpdate;
  const currentSubmissions = UPDATE_SUBMISSIONS.map(x=>{
    if(x.id!=='milo') return x;
    if(state.updateApproved) return {...x,status:'Applied',statusType:'complete',filter:'approved',flag:'Applied to record',time:'Just now'};
    if(state.requestSent&&!state.fosterSubmitted) return {...x,status:'Sent',statusType:'neutral',filter:'sent',flag:'Waiting for response',time:'Just now'};
    if(!state.requestSent&&!state.fosterSubmitted) return {...x,status:'Not sent',statusType:'failed',filter:'due',flag:'Request not sent',time:"Due today"};
    if(state.fosterSubmittedNow) return {...x,time:'Just now'};
    return x;
  }).filter(x=>!(x.id==='milo'&&state.fosterSubmittedNow&&state.formChoice!=='change'));
  const totals=updateQueueTotals(currentSubmissions);
  const queueOrder=['review','due','overdue','sent','progress','requested','approved'];
  const visibleQueues=state.updateFilter==='all'?queueOrder.filter(queue=>totals[queue]>0):[state.updateFilter];
  const realSubmissions=visibleQueues.flatMap(queue=>currentSubmissions.filter(item=>item.filter===queue));
  const submissions=realSubmissions;
  const item = realSubmissions.find(x=>x.id===selected)||realSubmissions[0]||null;
  const allCount=Object.values(totals).reduce((sum,count)=>sum+count,0);
  const groupForQueue=queue=>queue==='review'?'Needs review':queue==='approved'?'Completed':'Waiting';
  const groupOrder=['Needs review','Waiting','Completed'];
  const groupedSubmissions=groupOrder.map(group=>{
    const cards=submissions.filter(submission=>groupForQueue(submission.filter)===group);
    return cards.length?`<div class="submission-count"><b>${group}</b></div>${cards.map(submission=>updateSubmissionCard(submission,item?.id)).join('')}`:'';
  }).join('');
  return `<section class="content">
    ${pageHeader('FOSTER COMMUNICATION','Check-ins','Send check-in requests, follow up automatically, and review foster check-ins in one place.',`${state.requestSent&&!state.fosterSubmitted?'<button class="secondary-button" data-action="preview-foster-form">Open foster form ↗</button>':'<button class="secondary-button" data-action="copy-link">Copy check-in link</button>'}<button class="primary-button" data-action="request-update">＋ Request check-in</button>`)}
    <div class="update-context"><span>CHECK-IN STATUS</span><small>Each check-in appears in one status queue. Select a card to open the matching list.</small></div>
    <div class="update-metrics">${[['Overdue',totals.overdue,'overdue','overdue'],['Sent',totals.sent,'sent','sent'],['In progress',totals.progress,'progress','progress'],['Needs review',totals.review,'review','review']].map(([a,b,c,f])=>`<button class="${state.updateFilter===f?'active':''}" data-update-filter="${f}"><small>${a}</small><b>${b}</b><i class="${c}"></i></button>`).join('')}</div>
    <section class="surface inbox">
      <aside class="inbox-sidebar"><div class="inbox-tabs">${[['all',`All ${allCount}`],['review',`Needs review ${totals.review}`],['requested',`Changes requested ${totals.requested}`],['approved',`Applied ${totals.approved}`]].map(([id,l])=>`<button class="${state.updateFilter===id?'active':''}" data-update-filter="${id}">${l}</button>`).join('')}</div><label class="inbox-search">⌕ <input placeholder="Search check-ins"></label><div class="submission-count"><b>${submissions.length}</b> ${state.updateFilter==='all'?'check-ins':updateQueueLabel(state.updateFilter).toLowerCase()}</div><div class="submission-list">${groupedSubmissions}</div></aside>
      ${reviewPanel(item)}
    </section>
    ${quietCheckinCard()}
  </section>`;
}

// 특이사항 없이 돌아온 체크인은 검토 큐에 서지 않는다. 사라지는 게 아니라 여기 남는다.
function quietCheckins() {
  const rows = [
    ['assets/olive.png','Olive','Yesterday'],
    ['assets/dog4.png','Daisy','Aug 8']
  ];
  return miloQuietConfirmed() ? [['assets/dog1.png','Milo','Just now'],...rows] : rows;
}

function quietCheckinCard() {
  const rows = quietCheckins();
  return `<section class="surface activity-card">
    <div class="section-head"><div><p class="kicker">LOGGED AUTOMATICALLY</p><h2>Came back normal</h2><p>${rows.length} check-ins reported no changes this week. Each one was saved to the animal’s record without a staff review.</p></div></div>
    <div class="activity-list">${rows.map(([img,name,time])=>activityItem(img,`${name} · No changes reported · logged automatically`,'No staff review requested',time)).join('')}</div>
  </section>`;
}

function reviewPanel(item) {
  if(!item) return `<article class="review-panel empty-review"><div class="empty"><span>✓</span><h3>No check-ins in this status</h3><p>Choose another status to view its requests and submissions.</p></div></article>`;
  if(item.id==='milo'&&!state.requestSent&&!state.fosterSubmitted) return dueRequestPanel(item);
  if(item.id==='milo'&&state.requestSent&&!state.fosterSubmitted) return pendingRequestPanel(item);
  if(item.mode==='tracking') return requestTrackingPanel(item);
  const approved = item.id==='milo' && state.updateApproved;
  const effectiveMode = approved ? 'approved' : item.mode;
  const effectiveStatus = approved ? 'Applied' : item.status;
  const effectiveType = approved ? 'complete' : item.statusType;
  return `<article class="review-panel">
    <div class="review-head"><div><p class="kicker">WEEKLY CHECK-IN · ${item.time.toUpperCase()}</p><h2>${item.name} · submitted by ${item.foster}</h2><p>${item.flag} · ${item.photoCount} photos attached</p></div>${statusPill(effectiveType,effectiveStatus)}</div>
    <div class="change-summary ${effectiveMode==='approved'?'success':item.summaryType==='alert'?'alert':''}"><span>${effectiveMode==='approved'?'✓':effectiveMode==='requested'?'!':'↻'}</span><div><b>${approved?'Check-in applied to record':item.summaryTitle}</b><p>${approved?'Milo’s behavior record and publishing requirements were updated.':item.summaryText}</p></div><button data-action="review-help">${effectiveMode==='requested'?'View request':effectiveMode==='approved'?'View audit trail':'How review works'}</button></div>
    <div class="comparison"><div><small>CURRENT OFFICIAL RECORD</small><b>${item.field}</b><p>${item.current}</p><em>${item.currentMeta}</em></div><div class="new ${effectiveMode==='approved'?'approved':''}"><small>${effectiveMode==='approved'?'APPLIED FOSTER CHECK-IN':'NEW FOSTER CHECK-IN'}</small><b>${item.field}</b><p>${item.incoming}</p><em>${item.incomingMeta}</em>${effectiveMode==='review'?'<label><input type="checkbox" checked> Apply this change</label>':''}</div></div>
    <div class="attachment-panel"><div><small>${effectiveMode==='approved'?'APPLIED MEDIA':'NEW MEDIA'}</small><b>${item.photoCount} photos from ${item.foster.split(' ')[0]}</b></div><div class="review-photos">${item.photos.map((x,i)=>`<button data-action="preview-photo"><img src="${x}" alt="${item.name} foster check-in photo ${i+1}"><span>⌕</span><label><input type="checkbox" ${effectiveMode==='approved'||i<2?'checked':''} ${effectiveMode==='approved'?'disabled':''}> ${effectiveMode==='approved'?'Public media':'Use on public profile'}</label></button>`).join('')}</div></div>
    ${effectiveMode==='review'?`<div class="review-actions"><button class="danger-text" data-action="reject-update">Reject</button><span></span><button class="secondary-button" data-action="request-changes">Request changes</button><button class="secondary-button" data-action="partial-approve">Apply selected</button><button class="primary-button" data-action="approve-update">Apply all to record</button></div>`:effectiveMode==='requested'?`<div class="review-actions resolved"><button class="secondary-button" data-action="view-message">View request message</button><span></span><button class="secondary-button" data-action="send-reminder">Send reminder</button><button class="primary-button" data-action="mark-resolved">Mark clarification received</button></div>`:`<div class="review-actions resolved"><button class="secondary-button" data-action="view-history">View application history</button><span></span><button class="primary-button" data-action="open-update-animal" data-animal-id="${item.id}">Open ${item.name}’s record</button></div>`}
  </article>`;
}

function requestTrackingPanel(item) {
  const isOverdue=item.filter==='overdue';
  const isProgress=item.filter==='progress';
  return `<article class="review-panel tracking-panel">
    <div class="review-head"><div><p class="kicker">WEEKLY CHECK-IN · ${item.status.toUpperCase()}</p><h2>${item.name} · requested from ${item.foster}</h2><p>${item.flag}</p></div>${statusPill(item.statusType,item.status)}</div>
    <div class="request-waiting ${isOverdue?'overdue':''}"><span>${isOverdue?'!':isProgress?'◔':'↗'}</span><div><b>${item.trackingTitle}</b><p>${item.trackingText}</p></div></div>
    <div class="request-delivery-grid"><div><small>DELIVERY</small><b>${item.delivery}</b><em>${item.time}</em></div><div><small>DUE</small><b>${item.due}</b><em>${isOverdue?'Follow-up required':'On schedule'}</em></div><div><small>FORM STATUS</small><b>${item.progress}</b><em>${isProgress?'Draft saved':'Secure link tracked'}</em></div><div><small>NEXT FOLLOW-UP</small><b>${item.nextReminder}</b><em>${isOverdue?'Coordinator action':'Petify managed'}</em></div></div>
    <div class="request-link-row"><div><small>NEXT ACTION</small><b>${isOverdue?'Contact '+item.foster:isProgress?'Wait for completion':'No manual follow-up needed'}</b><p>${isOverdue?'Review the delivery history, then choose SMS, email, or phone.':isProgress?'The saved draft remains available from the same secure link.':'Petify will send the scheduled reminder automatically.'}</p></div><button class="${isOverdue?'primary-button':'secondary-button'}" data-action="tracking-follow-up">${isOverdue?'Follow up now':isProgress?'View draft':'View request'}</button></div>
  </article>`;
}

function dueRequestPanel(item) {
  return `<article class="review-panel due-request">
    <div class="review-head"><div><p class="kicker">WEEKLY CHECK-IN · NOT SENT</p><h2>${item.name} · ${item.foster}</h2><p>Last applied check-in was 7 days ago</p></div>${statusPill('failed','Not sent')}</div>
    <div class="request-due"><span>!</span><div><b>Milo’s weekly check-in has not been requested</b><p>Send one structured request now. Petify will track delivery and follow up automatically.</p></div></div>
    <div class="request-delivery-grid"><div><small>FOSTER</small><b>${item.foster}</b><em>Active placement</em></div><div><small>SCHEDULE</small><b>Weekly</b><em>Due every Sunday</em></div><div><small>LAST APPLIED</small><b>Aug 2</b><em>7 days ago</em></div><div><small>REQUEST STATUS</small><b>Not sent</b><em>Action required</em></div></div>
    <div class="request-link-row"><div><small>NEXT STEP</small><b>Request Milo’s weekly check-in</b><p>Health, behavior, medication, photos, and notes</p></div><button class="primary-button" data-action="request-update">Request check-in</button></div>
  </article>`;
}

function pendingRequestPanel(item) {
  return `<article class="review-panel pending-request">
    <div class="review-head"><div><p class="kicker">WEEKLY CHECK-IN · SENT JUST NOW</p><h2>${item.name} · requested from ${item.foster}</h2><p>Health, behavior, medication, photos, and notes</p></div>${statusPill('neutral','Sent')}</div>
    <div class="request-waiting"><span>↻</span><div><b>Waiting for Jamie</b><p>No manual follow-up is needed. Petify will remind Jamie in 2 days if the form is still incomplete.</p></div></div>
    <div class="request-delivery-grid"><div><small>SMS</small><b>Delivered</b><em>Just now</em></div><div><small>EMAIL</small><b>Delivered</b><em>Just now</em></div><div><small>DUE</small><b>Aug 12</b><em>3 days remaining</em></div><div><small>NEXT REMINDER</small><b>Aug 11</b><em>Automatic · 1 of 2</em></div></div>
    <div class="request-link-row"><div><small>SECURE INDIVIDUAL LINK</small><b>petnow.link/milo-8K4P</b><p>No account required · Opens only Milo’s weekly check-in</p></div><button class="primary-button" data-action="preview-foster-form">Open Jamie’s form preview</button></div>
  </article>`;
}

function fosterRows() {
  const rows = [
    {id:'jamie',name:'Jamie Lee',initials:'JL',pet:'Milo',img:'assets/dog1.png',status:'Active',schedule:'Daily care + weekly check-in',rate:'98%',responded:true},
    {id:'taylor',name:'Taylor Reed',initials:'TR',pet:'Luna',img:'assets/dog2.png',status:'Active',schedule:'Every 2 weeks · next Aug 18',rate:'92%',responded:true},
    {id:'morgan',name:'Morgan Kim',initials:'MK',pet:'Buddy',img:'assets/dog3.png',status:'Active',schedule:'Weekly · overdue 2 days',rate:'86%',responded:true,due:true}
  ];
  FOSTER_PEOPLE.forEach(person=>{
    const animalId=Object.keys(state.placements).find(id=>state.placements[id]===person.id);
    const animal=animalId?animals().find(item=>item.id===animalId):null;
    rows.push(animal
      ? {id:person.id,name:person.name,initials:person.initials,pet:animal.name,img:animal.img,status:'Active',schedule:'Weekly · starts Aug 16',rate:'New',responded:false}
      : {id:person.id,name:person.name,initials:person.initials,pet:'No placement',img:'',status:'Available',schedule:'—',rate:'—',responded:false});
  });
  return rows;
}

function fostersView() {
  const rows=fosterRows();
  const matches=(row,filter)=>filter==='active'?row.status==='Active':filter==='available'?row.status==='Available':filter==='inactive'?row.status==='Inactive':filter==='due'?row.due===true:filter==='responded'?row.responded===true:true;
  const totals={
    active:rows.filter(row=>matches(row,'active')).length,
    available:rows.filter(row=>matches(row,'available')).length,
    inactive:rows.filter(row=>matches(row,'inactive')).length,
    due:rows.filter(row=>matches(row,'due')).length,
    responded:rows.filter(row=>matches(row,'responded')).length,
    all:rows.length
  };
  const realRows=state.fosterFilter==='all'?rows:rows.filter(row=>matches(row,state.fosterFilter));
  const responseRate=totals.all?`${Math.round(totals.responded/totals.all*100)}%`:'0%';
  const footerText=`Showing ${realRows.length} of ${realRows.length} fosters`;
  return `<section class="content">
    ${pageHeader('FOSTER NETWORK','Fosters','Manage foster placements, contact details, care logs, and check-in schedules in one place.',`<button class="secondary-button" data-action="open-daily-care">Open foster mobile view</button><button class="primary-button" data-action="new-placement">＋ New placement</button>`)}
    <div class="update-context"><span>FOSTER OVERVIEW</span></div>
    <section class="surface care-program"><div class="care-program-head"><div><p class="kicker">CARE & CHECK-IN SCHEDULE</p><h2>Daily care and weekly check-ins</h2><p>Routine care is logged each day. Health, behavior, and adoption photos are reviewed in the weekly check-in.</p></div><button class="secondary-button" data-action="open-daily-care">Preview Jamie’s foster view</button></div><div class="care-cadence-grid"><button data-action="open-daily-care"><span class="care-icon">☀</span><span><small>TODAY · MILO</small><b>Daily care</b><em>Sent automatically at 8:00 AM · ${Object.values(state.dailyTasks).filter(Boolean).length} of 5 care tasks logged · medication due</em></span><i>›</i></button><button data-action="open-weekly-checkin"><span class="care-icon weekly">↻</span><span><small>THIS WEEK · MILO</small><b>Weekly check-in</b><em>Behavior updates, health changes, and photos</em></span><i>›</i></button><div><span class="care-icon exception">!</span><span><small>NEEDS STAFF ATTENTION</small><b>Only issues need staff review</b><em>Alex is alerted to missed medications or reported concerns.</em></span></div></div></section>
    <div class="metric-grid four foster-metrics">${[['Active placements',totals.active,`${totals.active} active foster profiles`,'active'],['Available fosters',totals.available,`${totals.available} available foster profiles`,'available'],['Updates due',totals.due,`${totals.due} overdue`,'due'],['Response rate',responseRate,`${totals.responded} of ${totals.all} responded`,'responded']].map(([a,b,c,f])=>`<button class="metric-card ${state.fosterFilter===f?'active':''}" data-foster-filter="${f}"><span><b>${a}</b>${formatCount(b)}<small>${c}</small></span><i>›</i></button>`).join('')}</div>
    <section class="surface table-surface"><div class="table-toolbar"><div class="filter-tabs">${[['all',`All ${totals.all}`],['active',`Active ${totals.active}`],['available',`Available ${totals.available}`],['inactive',`Inactive ${totals.inactive}`]].map(([id,label])=>`<button class="${state.fosterFilter===id?'active':''}" data-foster-filter="${id}">${label}</button>`).join('')}</div><div class="toolbar-actions"><button class="filter-button" data-action="foster-filter">☷ Filters ${state.fosterFilter==='all'?'':'<span>1</span>'}</button><button class="filter-button" data-action="foster-sort">↕ Sort</button></div></div><div class="table-wrap"><table><thead><tr><th>Foster</th><th>Current placement</th><th>Status</th><th>Update schedule</th><th>Response rate</th><th></th></tr></thead><tbody>${realRows.map(fosterRow).join('')}</tbody></table></div><div class="table-footer"><span>${footerText}</span></div></section>
  </section>`;
}

function fosterRow(row) {
  return `<tr class="clickable-row" data-select-foster="${row.id}"><td><span class="owner large"><i>${row.initials}</i><span><b>${row.name}</b><small>${row.name.toLowerCase().replace(' ','')}@example.com</small></span></span></td><td>${row.img?`<span class="mini-animal"><img src="${row.img}" alt="">${row.pet}</span>`:row.pet}</td><td>${statusPill(row.status==='Active'?'ready':'neutral',row.status)}</td><td>${row.schedule}</td><td><b>${row.rate}</b></td><td><button class="kebab" data-foster-menu="${row.id}">•••</button></td></tr>`;
}

function fosterDetailDrawer() {
  const row=fosterRows().find(item=>item.id===state.selectedFoster)||fosterRows()[0];
  const animal=row.img?animals().find(item=>item.name===row.pet):null;
  const active=row.status==='Active';
  const hasUpdate=Boolean(animal&&UPDATE_SUBMISSIONS.some(item=>item.id===animal.id));
  const responseSummary=row.rate==='New'?'<b>No responses yet</b><small>First check-in scheduled</small>':`<b>${row.rate} response rate</b><small>Last 30 days</small>`;
  const recentActivity=hasUpdate?`<p><i></i><b>Weekly check-in ${row.id==='jamie'?'submitted':'reviewed'}</b><small>${row.id==='jamie'?'12 min ago':'Aug 7'}</small></p><p><i></i><b>Routine care logged</b><small>Today · 9:02 AM</small></p><p><i></i><b>Placement started</b><small>Aug 1</small></p>`:'<p><i></i><b>First check-in scheduled</b><small>Aug 16</small></p><p><i></i><b>Placement started</b><small>Today</small></p>';
  const email=`${row.name.toLowerCase().replace(' ','')}@example.com`;
  return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer foster-detail-drawer" onclick="event.stopPropagation()"><button class="modal-close" data-action="close-drawer">×</button><p class="kicker">FOSTER PROFILE</p><div class="foster-detail-head"><span class="avatar">${row.initials}</span><div><h2>${row.name}</h2><p>${email} · (718) 555-01${row.id==='jamie'?'42':'86'}</p></div>${statusPill(active?'ready':'neutral',row.status)}</div>${active?`<section class="foster-detail-section"><small>CURRENT PLACEMENT</small><button class="foster-placement-card" data-action="open-foster-animal" data-animal-id="${animal?.id||'milo'}"><img src="${row.img}" alt="${row.pet}"><span><b>${row.pet}</b><p>${animal?.meta||'Current foster animal'}</p><em>Open animal record ›</em></span></button><div class="foster-detail-facts"><span><small>PLACEMENT</small><b>Aug 1 – Sep 15</b></span><span><small>COORDINATOR</small><b>Alex Rivera</b></span></div></section><section class="foster-detail-section"><small>CARE & UPDATES</small><div class="foster-detail-list"><div><span>↻</span><p><b>${row.schedule}</b><small>${row.due?'Overdue · coordinator follow-up needed':'Next check-in is on schedule'}</small></p></div><div><span>✓</span><p>${responseSummary}</p></div><div><span>◌</span><p><b>Email + SMS</b><small>Preferred contact channels</small></p></div></div></section><section class="foster-detail-section"><small>RECENT ACTIVITY</small><div class="foster-activity">${recentActivity}</div></section><div class="drawer-actions ${hasUpdate?'':'single'}">${hasUpdate?`<button class="secondary-button" data-action="open-foster-updates" data-update-id="${animal.id}">Open update history</button>`:''}<button class="primary-button" data-action="open-foster-animal" data-animal-id="${animal?.id||'milo'}">Open ${row.pet}’s record</button></div>`:`<section class="foster-detail-section availability-section"><small>PLACEMENT AVAILABILITY</small><div class="availability-card"><span>✓</span><div><b>Available for a new placement</b><p>Small or medium dogs · Up to 1 animal</p></div></div><div class="foster-detail-facts"><span><small>LOCATION</small><b>Brooklyn, NY</b></span><span><small>HOME</small><b>No resident pets</b></span><span><small>EXPERIENCE</small><b>2 prior placements</b></span><span><small>TRANSPORT</small><b>Available weekends</b></span></div></section><section class="foster-detail-section"><small>CONTACT & HISTORY</small><div class="foster-detail-list"><div><span>◌</span><p><b>Email + SMS</b><small>Preferred contact channels</small></p></div><div><span>✓</span><p><b>Last placement completed</b><small>Jul 18 · 6-week placement</small></p></div></div></section><button class="primary-button full" data-action="place-with-foster" data-foster-id="${row.id}">Start a placement</button>`}</aside></div>`;
}

function publishingView() {
  let rows = [
    {id:'milo',name:'Milo',img:'assets/dog1.png',state:state.published?'published':state.miloReady?'ready':'blocked',status:state.published?'Published':state.miloReady?'Ready to publish':'Not ready',detail:state.published?'Live on shelter website':state.miloReady?'All requirements complete':'Behavior information outdated',updated:'Just now'},
    {id:'luna',name:'Luna',img:'assets/dog2.png',state:'ready',status:'Ready to publish',detail:'All requirements complete',updated:'42 min ago'},
    {id:'buddy',name:'Buddy',img:'assets/dog3.png',state:'blocked',status:'Not ready',detail:'Medical review pending',updated:'Yesterday'},
    {id:'daisy',name:'Daisy',img:'assets/dog4.png',state:'published',status:'Published',detail:'Live on shelter website',updated:'Aug 7'}
  ];
  if(state.publishFilter!=='all') rows=rows.filter(r=>r.state===state.publishFilter);
  return `<section class="content">
    ${pageHeader('ADOPTION CHANNELS','Publishing','Publish ready profiles to your shelter website. Partner channels are shown as planned integrations.',`<button class="secondary-button" data-action="sync-status">↻ Sync now</button><button class="primary-button" data-action="open-channel-settings">Manage channels</button>`)}
    <div class="channel-summary"><button data-action="channel-summary"><span class="channel-logo website">S</span><span><b>Shelter website</b><small>24 live</small></span>${statusPill('ready','Connected')}<i>›</i></button><button class="planned" disabled><span class="channel-logo petfinder">P</span><span><b>Petfinder</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}<i>›</i></button><button class="planned" disabled><span class="channel-logo adoptapet">A</span><span><b>Adopt a Pet</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}<i>›</i></button></div>
    <section class="surface table-surface"><div class="table-toolbar"><div class="filter-tabs">${[['all','All'],['ready','Ready to publish'],['blocked','Not ready'],['published','Published']].map(([id,l])=>`<button class="${state.publishFilter===id?'active':''}" data-publish-filter="${id}">${l}</button>`).join('')}</div><button class="filter-button" data-action="publishing-filter">☷ Filters</button></div><div class="publish-list">${rows.map(r=>`<div class="publish-row"><div class="animal-cell"><img src="${r.img}" alt=""><span><b>${r.name}</b><small>${r.detail}</small></span></div>${statusPill(r.state,r.status)}<div class="channel-dots"><i class="on">S</i><i class="planned">P</i><i class="planned">A</i></div><span>${r.updated}</span><button class="${r.state==='ready'?'primary-button':'secondary-button'}" data-publish-action="${r.id}">${r.state==='ready'?'Preview & publish':'Open profile'}</button><button class="kebab" data-publish-menu="${r.id}">•••</button></div>`).join('')}</div></section>
  </section>`;
}

function settingsView() {
  return `<section class="content settings-content">
    ${pageHeader('WORKSPACE','Settings','Set the organization rules that drive publishing requirements, check-ins, and publishing.',`<button class="primary-button" data-action="save-settings">${state.settingsSaved?'Saved ✓':'Save changes'}</button>`)}
    <div class="settings-layout"><nav class="settings-nav">${[['readiness','Publishing requirements'],['forms','Check-in forms'],['channels','Publishing channels'],['team','Team & roles'],['notifications','Notifications']].map(([id,l])=>`<button class="${state.settingsTab===id?'active':''}" data-settings-tab="${id}">${l}<span>›</span></button>`).join('')}</nav><section class="surface settings-panel">${settingsPanel()}</section></div>
  </section>`;
}

function settingsPanel() {
  if(state.settingsTab==='readiness') return `<div class="section-head"><div><p class="kicker">ORGANIZATION RULES</p><h2>Publishing requirements</h2><p>Petify marks a profile ready to publish when all required information is complete and up to date.</p></div><button class="secondary-button" data-action="add-check">＋ Add section</button></div><div class="settings-list">${[['Health','Required · Updated within the last 30 days',true],['Behavior','Required · Updated within the last 14 days',true],['Media','At least 3 photos approved for public use',true],['Documents','All required documents approved',true],['Public profile','Description and adoption contact',true]].map(([a,b,on])=>`<div><span class="drag">⋮⋮</span><span><b>${a}</b><small>${b}</small></span><button class="toggle ${on?'on':''}" data-action="toggle-setting"><i></i></button><button class="kebab" data-action="edit-setting">•••</button></div>`).join('')}</div><div class="settings-note"><span>i</span><p><b>What “Ready to publish” means</b>“Ready to publish” means the profile has all information required for publishing in Petify. Medical and legal decisions remain with your team.</p></div>`;
  if(state.settingsTab==='forms') return `<div class="section-head"><div><p class="kicker">FOSTER EXPERIENCE</p><h2>Daily care and weekly check-in</h2><p>Keep routine care lightweight while sending meaningful changes to staff for review.</p></div></div><div class="form-template-grid"><button data-action="open-daily-care"><span class="care-icon">☀</span><span><small>EVERY DAY</small><b>Daily care</b><em>Meals, walks, and medication</em><p>Routine completions save to the care log. Missed medication and concerns alert the coordinator.</p></span><i>Preview ›</i></button><button data-action="preview-foster-form"><span class="care-icon weekly">↻</span><span><small>EVERY WEEK</small><b>Weekly check-in</b><em>Health, behavior, photos, and notes</em><p>Meaningful changes enter the staff review queue before the official record changes.</p></span><i>Preview ›</i></button></div><div class="settings-note"><span>i</span><p><b>Two different records</b>Daily care confirms that routines happened. Weekly check-ins capture observations that may affect Milo’s shelter record or adoption profile.</p></div>`;
  if(state.settingsTab==='channels') return `<div class="section-head"><div><p class="kicker">PUBLISHING CHANNELS</p><h2>Publishing channels</h2><p>The shelter website is available now. Partner channels require future integration agreements.</p></div></div><div class="settings-list channel-settings"><div><span class="channel-logo website">S</span><span><b>Shelter website</b><small>petnow-demo.org/adopt</small></span>${statusPill('ready','Connected')}<button class="secondary-button" data-action="channel-configure">Configure</button></div><div class="planned"><span class="channel-logo petfinder">P</span><span><b>Petfinder</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}<button class="secondary-button" disabled>Not available</button></div><div class="planned"><span class="channel-logo adoptapet">A</span><span><b>Adopt a Pet</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}<button class="secondary-button" disabled>Not available</button></div></div>`;
  return `<div class="section-head"><div><p class="kicker">WORKSPACE SETTINGS</p><h2>${state.settingsTab==='team'?'Team & roles':'Notifications'}</h2><p>${state.settingsTab==='team'?'Control who can review records and publish profiles.':'Choose which events your team receives by email.'}</p></div><button class="primary-button" data-action="invite-team">${state.settingsTab==='team'?'+ Invite member':'Save preferences'}</button></div><div class="settings-list">${(state.settingsTab==='team'?['Alex Rivera · Administrator','Morgan Kim · Reviewer','Sam Chen · Publisher']:['Overdue foster requests','New submissions','Publishing status changes','Publishing failures']).map(x=>`<div><span class="avatar">${x.split(' ').slice(0,2).map(y=>y[0]).join('')}</span><span><b>${x}</b><small>${state.settingsTab==='team'?'Active':'Email + in-app'}</small></span><button class="toggle on" data-action="toggle-setting"><i></i></button></div>`).join('')}</div>`;
}

function fosterFormView() {
  const content=state.fosterFormMode==='daily'
    ? (state.dailyCareSubmitted?dailyCareSubmittedView():dailyCareView())
    : (state.fosterSubmitted?fosterSubmittedView():fosterQuestionView());
  return `<section class="foster-form-page"><div class="foster-brand"><span class="brand-mark"><b></b></span><span class="foster-brand-name"><strong>Petify</strong><small>for Shelters</small></span><span class="foster-security">Secure foster link · No account required</span>${languageSwitch()}</div><nav class="foster-mode-switch" aria-label="Foster update type"><button class="${state.fosterFormMode==='daily'?'active':''}" data-foster-mode="daily"><small>TODAY</small>Daily care</button><button class="${state.fosterFormMode==='weekly'?'active':''}" data-foster-mode="weekly"><small>THIS WEEK</small>Weekly check-in</button></nav>${content}</section>`;
}
function dailyCareView() {
  const tasks=[
    ['breakfast','Breakfast','8:00 AM','1 cup'],
    ['morningWalk','Morning walk','9:00 AM','25 minutes'],
    ['medication','Medication','12:00 PM','Carprofen 25 mg'],
    ['dinner','Dinner','6:00 PM','1 cup'],
    ['eveningWalk','Evening walk','8:00 PM','20 minutes']
  ];
  const completed=Object.values(state.dailyTasks).filter(Boolean).length;
  return `<div class="foster-form-card daily-care-card"><div class="foster-pet"><img src="assets/dog1.png" alt="Milo"><span><small>SECOND CHANCE RESCUE</small><h1>Milo’s care today</h1><p>For Jamie · Monday, Aug 10</p></span></div><div class="autosave"><i></i> Sent automatically today at 8:00 AM</div><div class="daily-progress"><span><b>${completed} of 5 care tasks logged</b><small>Tap a routine when it is complete.</small></span><strong>${completed}/5</strong></div><div class="daily-task-list">${tasks.map(([id,name,time,detail])=>`<button class="daily-task ${state.dailyTasks[id]?'complete':''}" data-daily-task="${id}" aria-pressed="${state.dailyTasks[id]}"><i>${state.dailyTasks[id]?'✓':''}</i><span><b>${name}</b><small>${time} · ${detail}</small></span><em>${state.dailyTasks[id]?'Logged':'Tap to log'}</em></button>`).join('')}</div><div class="daily-care-note"><span>!</span><p><b>Only exceptions need staff attention</b>Routine completions save immediately. A missed medication or reported concern alerts Alex.</p></div><div class="foster-form-actions"><button class="secondary-button" data-action="report-concern">Report a concern</button><button class="primary-button" data-action="submit-daily-care">Finish for today</button></div><p class="form-help"><button data-action="contact-shelter">Need help? Contact your coordinator</button></p></div>`;
}
function dailyCareSubmittedView() {
  const completed=Object.values(state.dailyTasks).filter(Boolean).length;
  return `<div class="foster-form-card success-screen"><span class="success-icon">✓</span><h1>Today’s care was saved</h1><p>Thanks, Jamie. Routine care is in Milo’s log. Alex will only be alerted if something needs attention.</p><div class="submission-summary"><img src="assets/dog1.png" alt="Milo"><span><b>Milo · Daily care</b><small>${completed} of 5 care tasks logged · Saved just now</small></span></div><button class="primary-button full" data-action="return-fosters">Return to staff demo</button><button class="text-button" data-action="edit-daily-care">Edit today’s care</button></div>`;
}
function fosterQuestionView() {
  const detailQuestions=state.formChoice==='same'?'':`<div class="question"><span>2</span><div><h2>Tell us about any behavior changes</h2><textarea>Relaxed with our two resident dogs and has started initiating play.</textarea></div></div><div class="question"><span>3</span><div><h2>Add recent photos</h2><button class="upload-zone" data-action="foster-upload"><b>＋ Choose photos or video</b><small>JPG, PNG, MP4 · Up to 10 files</small></button>${state.uploads?`<div class="upload-preview">${['assets/dog1.png','assets/milo-home.jpg','assets/milo-yard.jpg'].slice(0,state.uploads).map((src)=>`<div><img src="${src}" alt="Milo foster update"><span>✓ Uploaded</span></div>`).join('')}</div>`:''}</div></div><label class="consent"><input type="checkbox" checked> Second Chance Rescue may use these photos on Milo’s public adoption profile.</label>${state.formChoice==='help'?'<div class="question"><span>4</span><div><h2>What do you need help with?</h2><textarea></textarea><div class="daily-care-note"><span>!</span><p>Alex will be notified right away.</p></div></div></div>':''}`;
  return `<div class="foster-form-card"><div class="foster-pet"><img src="assets/dog1.png" alt="Milo"><span><small>SECOND CHANCE RESCUE</small><h1>Milo’s weekly check-in</h1><p>For Jamie · Due today</p></span></div><div class="autosave"><i></i> Draft saved automatically</div><div class="question"><span>1</span><div><h2>How is Milo doing this week?</h2><p>Choose the closest answer. We’ll only ask for details when needed.</p><div class="choice-grid"><button class="${state.formChoice==='same'?'selected':''}" data-form-choice="same"><b>Doing well</b><small>No urgent concerns</small></button><button class="${state.formChoice==='change'?'selected':''}" data-form-choice="change"><b>Something changed</b><small>Health or behavior</small></button><button class="${state.formChoice==='help'?'selected':''}" data-form-choice="help"><b>Needs attention</b><small>Please contact me</small></button></div>${state.formChoice==='same'?'<div class="daily-care-note"><span>✓</span><p><b>Nothing else to fill in</b>This week’s check-in will be logged for Milo. Staff will not be asked to review it.</p></div>':''}</div></div>${detailQuestions}<div class="foster-form-actions"><button class="secondary-button" data-action="save-foster-draft">Save & finish later</button><button class="primary-button" data-action="submit-foster">Send update</button></div><p class="form-help"><button data-action="contact-shelter">Need help? Contact your coordinator</button></p></div>`;
}
function fosterSubmittedView() {
  const copy=state.formChoice==='same'
    ? {title:'Your check-in was logged',body:'Thanks, Jamie. No changes were reported, so this is saved to Milo’s record without staff review.',summary:'No changes reported · Logged just now'}
    : state.formChoice==='help'
      ? {title:'Alex has been notified',body:'Thanks, Jamie. Alex will follow up with you about Milo.',summary:'Help requested · Alex notified just now'}
      : {title:'Your update was sent',body:'Thanks, Jamie. Alex will review your changes before Milo’s record is updated.',summary:'Behavior change · 3 photos · Submitted just now'};
  return `<div class="foster-form-card success-screen"><span class="success-icon">✓</span><h1>${copy.title}</h1><p>${copy.body}</p><div class="submission-summary"><img src="assets/dog1.png" alt="Milo"><span><b>Milo · Weekly check-in</b><small>${copy.summary}</small></span></div><button class="primary-button full" data-action="return-staff">Return to staff demo</button><button class="text-button" data-action="edit-submission">Edit my response</button></div>`;
}

function profilePreviewView() {
  const published=state.published;
  return `<section class="content">
    <button class="back-link" data-view="publishing">‹ Back to publishing</button>
    ${pageHeader('PUBLIC PROFILE','Preview & publish','Check exactly what adopters will see before publishing to the shelter website.',`<button class="secondary-button" data-action="edit-profile">Edit profile</button><button class="primary-button" data-action="publish-now">${published?'Published ✓':'Publish profile'}</button>`)}
    <div class="preview-layout"><article class="adoption-preview"><div class="browser-bar"><i></i><i></i><i></i><span>secondchance.org/adopt/milo</span></div><img class="preview-hero" src="assets/dog1.png" alt="Milo"><div class="preview-body">${statusPill('ready','Ready for adoption')}<h1>Meet Milo</h1><p class="preview-lead">A gentle companion who is ready for a quiet, loving home.</p><div class="preview-facts"><span><small>Age</small><b>2 years</b></span><span><small>Sex</small><b>Male</b></span><span><small>Weight</small><b>52 lb</b></span><span><small>Location</small><b>Brooklyn</b></span></div><h2>About Milo</h2><p>Milo is affectionate, curious, and settling beautifully into foster life. He enjoys neighborhood walks, sunny windows, and quiet evenings with his people.</p><div class="trait-list"><span>House-trained</span><span>Good with dogs</span><span>Affectionate</span></div><button class="adopt-button" data-action="adopt-cta">Ask about Milo</button></div></article><aside class="publish-aside surface"><p class="kicker">CHANNELS</p><h2>Publish your profile</h2><p>The shelter website is available now. Partner channels can be added when integrations are available.</p><label class="channel-select"><input type="checkbox" checked disabled><span class="channel-logo website">S</span><span><b>Shelter website</b><small>${published?'Live now':'Second Chance Rescue'}</small></span>${published?statusPill('published','Published'):'<i></i>'}</label><label class="channel-select planned"><input type="checkbox" disabled><span class="channel-logo petfinder">P</span><span><b>Petfinder</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}</label><label class="channel-select planned"><input type="checkbox" disabled><span class="channel-logo adoptapet">A</span><span><b>Adopt a Pet</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}</label><div class="publish-summary"><span>Available channels</span><b>1</b></div>${state.publishStarted&&!published?`<div class="publishing-progress"><i></i><span><b>Publishing profile…</b><small>Sending to the shelter website</small></span></div>`:''}<button class="primary-button full" data-action="publish-now" ${published?'disabled':''}>${published?'Published to shelter website ✓':'Publish to shelter website'}</button><button class="text-button centered" data-action="schedule-publish">Schedule for later</button></aside></div>
  </section>`;
}

function renderModal() {
  const wrap = body => `<div class="modal-backdrop" data-action="close-modal"><div class="modal-card" role="dialog" aria-modal="true" onclick="event.stopPropagation()">${body}</div></div>`;
  if(state.modal==='intake') return wrap(intakeModal());
  if(state.modal==='placement') return wrap(placementModal());
  if(state.modal==='request') return wrap(requestModal());
  if(state.modal==='assign') return wrap(assignModal());
  if(state.modal==='confirm-reset') return wrap(`<button class="modal-close" data-action="close-modal">×</button><p class="kicker">RESET PRETOTYPE</p><h2>Start the demo over?</h2><p>This only resets the sample data in your browser. Nothing external is changed.</p><div class="modal-actions"><button class="secondary-button" data-action="close-modal">Cancel</button><button class="danger-button" data-action="confirm-reset">Reset demo</button></div>`);
  if(state.modal==='filters') return wrap(`<button class="modal-close" data-action="close-modal">×</button><p class="kicker">ANIMAL FILTERS</p><h2>Focus the workspace</h2><div class="form-grid"><label><span>Current location</span><select><option>All locations</option><option>Foster homes</option><option>Main shelter</option></select></label><label><span>Owner</span><select><option>All owners</option><option>Alex Rivera</option><option>Morgan Kim</option></select></label><label><span>Information age</span><select><option>Any age</option><option>Older than 14 days</option></select></label><label><span>Stage</span><select><option>Any stage</option><option>In foster</option><option>Ready to publish</option></select></label></div><div class="modal-actions"><button class="text-button" data-action="clear-filters">Clear</button><span></span><button class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" data-action="apply-filters">Apply filters</button></div>`);
  return wrap(`<button class="modal-close" data-action="close-modal">×</button><p class="kicker">PRETOTYPE</p><h2>Prepared interaction</h2><p>This control is represented in the pretotype and opens the prepared state shown here.</p><div class="modal-actions"><button class="primary-button" data-action="close-modal">Got it</button></div>`);
}

function intakeModal() {
  const step=state.intakeStep;
  return `<button class="modal-close" data-action="close-modal">×</button><div class="intake-heading"><div><p class="kicker">NEW INTAKE</p><h2>Add an animal</h2><p>Create the record now. Complete the rest as care progresses.</p></div><b>Step ${step} of 3</b></div><div class="stepper">${[1,2,3].map((n)=>`<span class="${step>=n?'active':''}"><i>${step>n?'✓':n}</i><b>${['Animal','Intake','Initial state'][n-1]}</b></span>`).join('')}</div>${step===1?`<div class="form-grid"><label class="full"><span>Primary photo</span><button class="intake-photo ${state.intakePhoto?'has-photo':''}" data-action="intake-upload">${state.intakePhoto?'<img src="assets/coco.png" alt="Coco"><b>Photo added</b><small>Click to replace</small>':'<b>＋ Add a photo</b><small>JPG or PNG · up to 10 MB</small>'}</button></label><label><span>Name or temporary name</span><input id="intake-name" value="Coco"></label><label><span>Species</span><select><option>Dog</option><option>Cat</option></select></label><label><span>Breed</span><input value="Mixed breed"></label><label><span>Sex</span><select><option>Female</option><option>Male</option><option>Unknown</option></select></label><label><span>Estimated age</span><input value="2 years"></label></div>`:step===2?`<div class="form-grid"><label><span>Intake type</span><select><option>Owner surrender</option><option>Stray</option><option>Transfer in</option></select></label><label><span>Date & time</span><input value="Aug 9, 2026 · 10:30 AM"></label><label><span>Source</span><input value="Community member"></label><label><span>Current location</span><select><option>Main shelter</option><option>Partner clinic</option></select></label><label class="full"><span>Intake notes</span><textarea rows="3">Friendly on intake. No visible injury. Medical check requested.</textarea></label></div>`:`<div class="form-grid"><label class="full choice-line"><span>Does Coco need immediate medical attention?</span><span><button class="segmented active" data-action="medical-no">No</button><button class="segmented" data-action="medical-yes">Yes</button></span></label><label class="full choice-line"><span>Does Coco need a foster placement?</span><span><button class="segmented" data-action="foster-no">No</button><button class="segmented active" data-action="foster-yes">Yes</button></span></label><label><span>Record owner</span><select><option>Alex Rivera</option><option>Morgan Kim</option></select></label><label><span>Priority</span><select><option>Normal</option><option>Urgent</option></select></label><div class="intake-result full"><span>✓</span><p><b>Ready to create Coco’s record</b>A five-section publishing requirements checklist will be created automatically.</p></div></div>`}<div class="modal-actions"><button class="secondary-button" data-action="${step===1?'close-modal':'intake-back'}">${step===1?'Cancel':'Back'}</button><span></span><button class="primary-button" data-action="${step===3?'save-intake':'intake-next'}">${step===3?'Save & open record':'Continue'}</button></div>`;
}

function placementModal() {
  const candidates=placementCandidates();
  if(!candidates.length) return `<button class="modal-close" data-action="close-modal">×</button><p class="kicker">FOSTER PLACEMENT</p><h2>All current animals have a foster placement</h2><p>There are no unassigned animals in the named demo records. Add a new animal or end an existing placement first.</p><div class="modal-actions"><span></span><button class="primary-button" data-action="close-modal">Close</button></div>`;
  const selectedAnimal=candidates.find(animal=>animal.id===state.placementAnimalId)||candidates[0];
  const availableFosters=availablePlacementFosters();
  const selectedFoster=availableFosters.find(person=>person.id===state.placementFosterId)||availableFosters[0];
  return `<button class="modal-close" data-action="close-modal">×</button><p class="kicker">FOSTER PLACEMENT</p><h2>Create a foster placement</h2><p>Choose an animal without a foster, then connect the foster person and update schedule.</p><div class="form-grid"><div class="placement-animal-field full"><span>Animal without a foster placement</span><small>${candidates.length} animals are waiting for a foster placement.</small><div class="placement-animal-grid" role="radiogroup" aria-label="Animal without a foster placement">${candidates.map(animal=>`<button type="button" class="placement-animal-card ${animal.id===selectedAnimal.id?'selected':''}" data-placement-animal="${animal.id}" role="radio" aria-checked="${animal.id===selectedAnimal.id}" aria-label="Select ${animal.name}"><img src="${animal.img}" alt="${animal.name}"><span><b>${animal.name}</b><small>${animal.meta}</small><em>${animal.stage}</em></span><i>${animal.id===selectedAnimal.id?'✓':''}</i></button>`).join('')}</div></div><label class="full"><span>Foster person</span><select data-placement-foster ${availableFosters.length?'':'disabled'}>${availableFosters.length?availableFosters.map(person=>`<option value="${person.id}" ${person.id===selectedFoster?.id?'selected':''}>${person.name} · Available</option>`).join(''):'<option>No foster people are currently available</option>'}</select></label><label><span>Start date</span><input value="Aug 10, 2026"></label><label><span>Expected end date</span><input value="Sep 10, 2026"></label><label><span>Coordinator</span><select><option>Alex Rivera</option></select></label><label><span>Care schedule</span><select><option>Daily care + weekly check-in</option><option>Weekly check-in only</option><option>Every 2 weeks</option></select></label><div class="intake-result full"><span>↻</span><p><b>Daily care starts Aug 10 · first check-in Aug 16</b>${selectedFoster?`${selectedFoster.name} will receive a secure form link for ${selectedAnimal.name}. Reminder after 2 days.`:'Choose an available foster person to continue.'}</p></div></div><div class="modal-actions"><button class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" data-action="save-placement" ${selectedFoster?'':'disabled'}>Confirm placement</button></div>`;
}
function requestModal() { return `<button class="modal-close" data-action="close-modal">×</button><p class="kicker">MILO · JAMIE LEE</p><h2>Request a foster check-in</h2><p>Jamie gets a secure mobile link. No account or app is required.</p><div class="form-grid"><label class="full"><span>Check-in form</span><select><option>Weekly check-in</option></select></label><label><span>Send now</span><select><option>Now · Email + SMS</option><option>Schedule for tomorrow</option></select></label><label><span>Due date</span><input value="Aug 12, 2026"></label><label><span>Automatic reminder</span><select><option>After 2 days · max 2</option></select></label><label><span>Coordinator</span><select><option>Alex Rivera</option></select></label><fieldset class="full"><legend>Ask for</legend><div class="check-options">${['Health','Behavior','Medication','Weight','Photos','Notes'].map((x,i)=>`<label><input type="checkbox" ${i!==3?'checked':''}> ${x}</label>`).join('')}</div></fieldset><button class="message-preview full" data-action="preview-message"><small>SMS + EMAIL PREVIEW</small><b>How is Milo doing this week?</b><span>See the exact message, secure link, and reminder schedule Jamie receives.</span><i>Open preview ›</i></button></div><div class="modal-actions"><button class="secondary-button" data-action="copy-link">Copy link</button><span></span><button class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" data-action="send-request">Send request</button></div>`; }
function assignModal() { return `<button class="modal-close" data-action="close-modal">×</button><p class="kicker">ASSIGN NEXT ACTION</p><h2>Choose an owner</h2><div class="form-grid"><label class="full"><span>Task</span><input value="Review Milo’s foster update"></label><label><span>Owner</span><select><option>Morgan Kim</option><option>Alex Rivera</option><option>Sam Chen</option></select></label><label><span>Due date</span><input value="Today"></label><label class="full"><span>Note</span><textarea rows="3">Please compare the behavior change before approval.</textarea></label></div><div class="modal-actions"><button class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" data-action="confirm-assign">Assign task</button></div>`; }

function renderDrawer() {
  if(state.drawer==='message-preview') return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer message-drawer" onclick="event.stopPropagation()"><button class="modal-close" data-action="close-drawer">×</button><p class="kicker">RECIPIENT PREVIEW</p><h2>What Jamie receives</h2><p>Preview the request before sending it by SMS and email.</p><div class="message-tabs"><button class="${state.messageChannel==='sms'?'active':''}" data-message-channel="sms">SMS</button><button class="${state.messageChannel==='email'?'active':''}" data-message-channel="email">Email</button></div>${state.messageChannel==='sms'?smsPreview():emailPreview()}<div class="delivery-details"><div><span>↻</span><p><b>Automatic follow-up</b>Reminder after 2 days if Jamie has not submitted. Maximum 2 reminders.</p></div><div><span>⌁</span><p><b>Secure individual link</b>No account required. The link opens only Milo’s requested check-in form.</p></div></div><div class="preview-flow"><small>AFTER JAMIE SUBMITS</small><div><span><i>1</i><b>Submitted</b></span><em>›</em><span><i>2</i><b>Needs review</b></span><em>›</em><span><i>3</i><b>Applied</b></span></div><p>The submission does not overwrite Milo’s official record until a staff member applies it.</p></div><button class="primary-button full" data-action="return-request">Back to request</button><button class="text-button centered" data-action="open-form-from-preview">Open Jamie’s form preview</button></aside></div>`;
  if(state.drawer==='foster-detail') return fosterDetailDrawer();
  if(state.drawer==='guide') return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer guide-drawer" onclick="event.stopPropagation()"><button class="modal-close" data-action="close-drawer">×</button><p class="kicker">DEMO PRESENTER MODE</p><h2>Choose the story you are demonstrating</h2><p>Each tour resets the sample data, opens the right starting screen, and provides a talk track with the exact next click.</p><div class="tutorial-picker"><button class="tutorial-option" data-action="start-tutorial" data-tutorial="a"><small>MATERIAL A · ${TUTORIALS.a.steps.length} STEPS</small><b>Which dogs are ready to go?</b><span>Publishing requirements → unmet item → apply → Ready to publish → publish</span><em>Start Demo A ›</em></button><button class="tutorial-option" data-action="start-tutorial" data-tutorial="b1"><small>MATERIAL B-1 · ${TUTORIALS.b1.steps.length} STEPS</small><b>Send one check-in request</b><span>Automatic daily care → request and track one weekly check-in</span><em>Start Demo B-1 ›</em></button><button class="tutorial-option" data-action="start-tutorial" data-tutorial="b2"><small>MATERIAL B-2 · ${TUTORIALS.b2.steps.length} STEPS</small><b>What the foster receives</b><span>Open Jamie’s form and submit the check-in</span><em>Start Demo B-2 ›</em></button><button class="tutorial-option" data-action="start-tutorial" data-tutorial="b3"><small>MATERIAL B-3 · ${TUTORIALS.b3.steps.length} STEPS</small><b>Review and apply the check-in</b><span>Review the submission before the record changes</span><em>Start Demo B-3 ›</em></button></div></aside></div>`;
  if(state.drawer==='notifications') return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer" onclick="event.stopPropagation()"><button class="modal-close" data-action="close-drawer">×</button><p class="kicker">NOTIFICATIONS</p><h2>Notifications</h2><div class="notification-list">${[['New foster check-in','Jamie submitted Milo’s weekly check-in','12 min'],['Profile published','Daisy is live on the shelter website','42 min'],['Profile ready to publish','Luna completed all publishing requirements','1 hr']].map(([a,b,c])=>`<button data-action="notification-item"><i></i><span><b>${a}</b><small>${b}</small></span><time>${c}</time></button>`).join('')}</div><button class="text-button centered" data-action="mark-read">Mark all as read</button></aside></div>`;
  return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer" onclick="event.stopPropagation()"><button class="modal-close" data-action="close-drawer">×</button><p class="kicker">DETAILS</p><h2>Prepared content</h2><p>This interaction is represented in the pretotype.</p></aside></div>`;
}

function smsPreview() {
  if(state.language==='ko') return `<div class="phone-preview"><div class="phone-preview-bar"><span>‹</span><div><b>Second Chance Rescue</b><small>문자 메시지</small></div><i>•••</i></div><div class="message-time">오늘 · 오전 10:30</div><div class="sms-bubble">안녕하세요, Jamie! 이번 주 Milo는 어떻게 지냈나요?<br><br>건강이나 행동 변화와 최근 사진을 8월 12일까지 공유해 주세요. 약 3분 정도 걸립니다.<br><br><strong>petnow.link/milo-8K4P</strong><br><br><small>수신을 거부하려면 STOP이라고 답장해 주세요.</small></div><div class="sms-input">문자 메시지 <span>↑</span></div></div>`;
  return `<div class="phone-preview"><div class="phone-preview-bar"><span>‹</span><div><b>Second Chance Rescue</b><small>Text message</small></div><i>•••</i></div><div class="message-time">Today · 10:30 AM</div><div class="sms-bubble">Hi Jamie! How is Milo doing this week?<br><br>Share any health or behavior changes and add recent photos by Aug 12. It takes about 3 minutes.<br><br><strong>petnow.link/milo-8K4P</strong><br><br><small>Reply STOP to opt out.</small></div><div class="sms-input">Text message <span>↑</span></div></div>`;
}
function emailPreview() {
  if(state.language==='ko') return `<div class="email-preview"><div class="email-meta"><span><small>보낸 사람</small><b>Second Chance Rescue</b></span><span><small>받는 사람</small><b>Jamie Lee</b></span></div><div class="email-body"><span class="brand-mark"><b></b></span><p class="kicker">MILO 주간 체크인</p><h3>이번 주 Milo는 어떻게 지냈나요?</h3><p>건강이나 행동 변화와 최근 사진을 <b>8월 12일</b>까지 공유해 주세요. 대부분의 업데이트는 약 3분이면 완료할 수 있습니다.</p><button data-action="open-form-from-preview">Milo 업데이트 작성</button><small>계정이나 앱이 필요하지 않습니다. Milo 전용 보안 링크입니다.</small></div></div>`;
  return `<div class="email-preview"><div class="email-meta"><span><small>FROM</small><b>Second Chance Rescue</b></span><span><small>TO</small><b>Jamie Lee</b></span></div><div class="email-body"><span class="brand-mark"><b></b></span><p class="kicker">MILO’S WEEKLY CHECK-IN</p><h3>How is Milo doing this week?</h3><p>Please share any health or behavior changes and add recent photos by <b>August 12</b>. Most updates take about 3 minutes.</p><button data-action="open-form-from-preview">Share Milo’s update</button><small>No account or app is required. This secure link is unique to Milo.</small></div></div>`;
}

function renderTutorial() {
  const steps=tutorialSteps();
  const tutorial=TUTORIALS[state.tutorialId];
  const step=steps[state.tutorialStep];
  if(!step) return '';
  const koTutorial=KO_TUTORIALS[state.tutorialId];
  const koStep=koTutorial?.steps[state.tutorialStep];
  const tutorialLabel=state.language==='ko'&&koTutorial?koTutorial.label:tutorial.label;
  const stepTitle=state.language==='ko'&&koStep?koStep[0]:step.title;
  const stepText=state.language==='ko'&&koStep?koStep[1]:step.text;
  const nextLabel=state.language==='ko'&&koTutorial?.nextLabel?koTutorial.nextLabel:step.nextLabel;
  const final=step.kind==='finish';
  const interactive=!['manual','finish'].includes(step.kind);
  return `<div class="tutorial-layer" role="dialog" aria-modal="true" aria-label="Interactive product tutorial">
    <div class="tutorial-dim tutorial-dim-top"></div><div class="tutorial-dim tutorial-dim-left"></div><div class="tutorial-dim tutorial-dim-right"></div><div class="tutorial-dim tutorial-dim-bottom"></div>
    ${interactive?'<button class="tutorial-highlight interactive" data-action="tutorial-target" aria-label="Use highlighted control"></button>':'<div class="tutorial-highlight" aria-hidden="true"></div>'}
    <section class="tutorial-card">
      <div class="tutorial-card-head"><span>${tutorialLabel}</span><button data-action="exit-tutorial" aria-label="Exit tutorial">×</button></div>
      <small>STEP ${state.tutorialStep+1} OF ${steps.length}</small><h3>${stepTitle}</h3><p>${stepText}</p>
      <div class="tutorial-card-actions"><button class="tutorial-back" data-action="tutorial-back" ${tutorialHistory.length===0?'disabled':''}>Back</button><button class="tutorial-exit" data-action="${step.next?'finish-tutorial':'exit-tutorial'}">End tour</button>${step.kind==='manual'?'<button class="tutorial-next" data-action="tutorial-next">Continue</button>':final?step.next?`<button class="tutorial-next" data-action="continue-tutorial" data-tutorial="${step.next}">${nextLabel}</button>`:'<button class="tutorial-next" data-action="finish-tutorial">Finish tutorial</button>':'<span>Click the highlighted control</span>'}</div>
    </section>
  </div>`;
}

function leaveTutorialSurface() {
  state.modal=null;state.drawer=null;
  if(state.view==='fosterform'){state.view='updates';state.fosterFormMode='weekly';}
}

function positionTutorial() {
  if(state.tutorialStep===null) return;
  const step=tutorialSteps()[state.tutorialStep];
  const layer=document.querySelector('.tutorial-layer');
  const target=step&&document.querySelector(step.selector);
  if(!layer) return;
  if(!target){window.scrollTo(0,0);layer.querySelectorAll('.tutorial-dim').forEach(el=>Object.assign(el.style,{width:'0px',height:'0px'}));const hl=layer.querySelector('.tutorial-highlight');if(hl)Object.assign(hl.style,{width:'0px',height:'0px',left:'0px',top:'0px'});const c=layer.querySelector('.tutorial-card');if(c)Object.assign(c.style,{left:'50%',top:'50%',transform:'translate(-50%,-50%)',visibility:'visible'});return;}
  const viewport={w:window.innerWidth,h:window.innerHeight};
  const initial=target.getBoundingClientRect();
  if(initial.top<12||initial.bottom>viewport.h-12) target.scrollIntoView({block:'center',inline:'nearest'});
  requestAnimationFrame(()=>{
    if(!document.body.contains(target)) return;
    const rect=target.getBoundingClientRect();
    const pad=8;
    const top=Math.max(0,rect.top-pad), left=Math.max(0,rect.left-pad);
    const right=Math.min(viewport.w,rect.right+pad), bottom=Math.min(viewport.h,rect.bottom+pad);
    const set=(selector,styles)=>Object.assign(layer.querySelector(selector).style,styles);
    set('.tutorial-dim-top',{left:'0px',top:'0px',width:'100vw',height:`${top}px`});
    set('.tutorial-dim-bottom',{left:'0px',top:`${bottom}px`,width:'100vw',height:`${Math.max(0,viewport.h-bottom)}px`});
    set('.tutorial-dim-left',{left:'0px',top:`${top}px`,width:`${left}px`,height:`${Math.max(0,bottom-top)}px`});
    set('.tutorial-dim-right',{left:`${right}px`,top:`${top}px`,width:`${Math.max(0,viewport.w-right)}px`,height:`${Math.max(0,bottom-top)}px`});
    set('.tutorial-highlight',{left:`${left}px`,top:`${top}px`,width:`${Math.max(1,right-left)}px`,height:`${Math.max(1,bottom-top)}px`});
    const card=layer.querySelector('.tutorial-card');
    const cardW=Math.min(360,viewport.w-24), gap=18;
    card.style.width=`${cardW}px`;card.style.visibility='hidden';card.style.left='12px';card.style.top='12px';
    const cardH=card.offsetHeight;
    let x,y;
    if(right+gap+cardW<=viewport.w-12){x=right+gap;y=rect.top+(rect.height-cardH)/2;}
    else if(left-gap-cardW>=12){x=left-gap-cardW;y=rect.top+(rect.height-cardH)/2;}
    else {x=Math.min(Math.max(12,rect.left),viewport.w-cardW-12);y=bottom+gap+cardH<=viewport.h?bottom+gap:top-gap-cardH;}
    card.style.left=`${Math.max(12,Math.min(x,viewport.w-cardW-12))}px`;
    card.style.top=`${Math.max(12,Math.min(y,viewport.h-cardH-12))}px`;
    card.style.visibility='visible';
    target.focus({preventScroll:true});
  });
}

function tutorialMatches(kind,value) {
  if(state.tutorialStep===null) return false;
  const step=tutorialSteps()[state.tutorialStep];
  return step&&step.kind===kind&&step.value===value;
}

function advanceTutorial(kind,value) {
  const steps=tutorialSteps();
  if(tutorialMatches(kind,value)) {
    tutorialHistory.push(JSON.parse(JSON.stringify(tutorialStepSnapshot||state)));
    state.tutorialStep=Math.min(steps.length-1,state.tutorialStep+1);
  }
}

function render() {
  const viewChanged=lastRenderedView!==null&&lastRenderedView!==state.view;
  lastRenderedView=state.view;
  if(viewChanged) window.scrollTo(0,0);
  syncNavigationHistory();
  const views = {dashboard:dashboardView,animals:animalsView,animal:animalView,updates:updatesView,fosters:fostersView,publishing:publishingView,settings:settingsView,fosterform:fosterFormView,profilepreview:profilePreviewView};
  app.innerHTML = state.view==='fosterform'
    ? `${fosterFormView()}${state.tutorialStep!==null?renderTutorial():''}${state.toast?`<div class="toast"><span>✓</span>${state.toast}</div>`:''}`
    : layout((views[state.view] || dashboardView)());
  applyLanguage();
  bind();
  if(state.tutorialStep!==null){
    const snapshotKey=`${state.tutorialId}:${state.tutorialStep}`;
    if(snapshotKey!==tutorialStepSnapshotKey){tutorialStepSnapshot=JSON.parse(JSON.stringify(state));tutorialStepSnapshotKey=snapshotKey;}
    requestAnimationFrame(positionTutorial);clearTimeout(tutorialPositionTimer);tutorialPositionTimer=setTimeout(positionTutorial,180);
  } else {tutorialStepSnapshot=null;tutorialStepSnapshotKey=null;}
}

let toastTimer;
let tutorialPositionTimer;
function toast(message) { state.toast=message; render(); clearTimeout(toastTimer); toastTimer=setTimeout(()=>{state.toast='';render();},2300); }
function openAnimal(id,tab='overview') { state.animalId=id; state.detailTab=tab; state.view='animal'; state.modal=null; render(); }
function genericPrepared(message='Prepared content opened') { toast(message); }

function bind() {
  document.querySelectorAll('[data-language]').forEach(el=>el.addEventListener('click',()=>{state.language=el.dataset.language;localStorage.setItem('petify-language',state.language);render();}));
  document.querySelectorAll('[data-view]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const value=el.dataset.view;if(state.tutorialStep!==null&&!tutorialMatches('view',value))return;state.view=value;state.modal=null;state.drawer=null;state.mobileNavOpen=false;if(el.dataset.setFilter)state.animalFilter=el.dataset.setFilter;advanceTutorial('view',value);render();}));
  document.querySelectorAll('[data-open-animal]').forEach(el=>el.addEventListener('click',e=>{if(e.target.closest('input,button'))return;const value=el.dataset.openAnimal;if(state.tutorialStep!==null&&!tutorialMatches('animal',value))return;state.animalId=value;state.detailTab='overview';state.view='animal';state.modal=null;advanceTutorial('animal',value);render();}));
  document.querySelectorAll('[data-detail-tab]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();state.detailTab=el.dataset.detailTab;render();}));
  document.querySelectorAll('[data-animal-filter]').forEach(el=>el.addEventListener('click',()=>{const value=el.dataset.animalFilter;if(state.tutorialStep!==null&&!tutorialMatches('animal-filter',value))return;state.animalFilter=value;advanceTutorial('animal-filter',value);render();}));
  document.querySelectorAll('[data-update-filter]').forEach(el=>el.addEventListener('click',()=>{state.updateFilter=el.dataset.updateFilter;render();}));
  document.querySelectorAll('[data-foster-filter]').forEach(el=>el.addEventListener('click',()=>{state.fosterFilter=el.dataset.fosterFilter;render();}));
  document.querySelectorAll('[data-publish-filter]').forEach(el=>el.addEventListener('click',()=>{state.publishFilter=el.dataset.publishFilter;render();}));
  document.querySelectorAll('[data-select-update]').forEach(el=>el.addEventListener('click',()=>{state.selectedUpdate=el.dataset.selectUpdate;render();}));
  document.querySelectorAll('[data-select-foster]').forEach(el=>el.addEventListener('click',e=>{if(e.target.closest('button'))return;state.selectedFoster=el.dataset.selectFoster;state.drawer='foster-detail';render();}));
  document.querySelectorAll('[data-placement-animal]').forEach(el=>el.addEventListener('click',()=>{state.placementAnimalId=el.dataset.placementAnimal;render();}));
  document.querySelectorAll('[data-placement-foster]').forEach(el=>el.addEventListener('change',()=>{state.placementFosterId=el.value;render();}));
  document.querySelectorAll('[data-settings-tab]').forEach(el=>el.addEventListener('click',()=>{state.settingsTab=el.dataset.settingsTab;render();}));
  document.querySelectorAll('[data-foster-mode]').forEach(el=>el.addEventListener('click',()=>{state.fosterFormMode=el.dataset.fosterMode;state.dailyCareSubmitted=false;if(state.fosterFormMode==='weekly')state.fosterSubmitted=false;render();}));
  document.querySelectorAll('[data-daily-task]').forEach(el=>el.addEventListener('click',()=>{const task=el.dataset.dailyTask;state.dailyTasks={...state.dailyTasks,[task]:!state.dailyTasks[task]};render();}));
  document.querySelectorAll('[data-message-channel]').forEach(el=>el.addEventListener('click',()=>{const value=el.dataset.messageChannel;if(state.tutorialStep!==null&&!tutorialMatches('channel',value))return;state.messageChannel=value;advanceTutorial('channel',value);render();}));
  document.querySelectorAll('[data-filter-jump]').forEach(el=>el.addEventListener('click',()=>{state.view='animals';state.animalFilter=el.dataset.filterJump;state.search='';render();}));
  document.querySelectorAll('[data-attention-animal]').forEach(el=>el.addEventListener('click',()=>{openAnimal(el.dataset.attentionAnimal);}));
  document.querySelectorAll('[data-channel]').forEach(el=>el.addEventListener('change',()=>{state.channels[el.dataset.channel]=el.checked;render();}));
  const search=document.querySelector('#global-search'); if(search){search.addEventListener('input',e=>{state.search=e.target.value;});search.addEventListener('keydown',e=>{if(e.key==='Enter'){state.view='animals';render();}});}
  document.querySelectorAll('[data-action]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const action=el.dataset.action;const tutorialControl=['exit-tutorial','tutorial-back','tutorial-next','finish-tutorial','continue-tutorial','tutorial-target'].includes(action);if(state.tutorialStep!==null&&!tutorialControl&&!tutorialMatches('action',action))return;handleAction(action,el);}));
  document.querySelectorAll('[data-next-action]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const id=el.dataset.nextAction;if(id==='milo'&&!state.updateApproved){state.selectedUpdate='milo';state.view='updates';}else if(id==='coco')openAnimal('coco');else if(id==='luna'){state.view='profilepreview';}else openAnimal(id);render();}));
  document.querySelectorAll('[data-publish-action]').forEach(el=>el.addEventListener('click',()=>{const id=el.dataset.publishAction;if(id==='milo'&&state.miloReady){state.animalId='milo';state.view='profilepreview';render();}else if(id==='luna'||id==='daisy'){state.animalId=id;state.view='profilepreview';render();}else openAnimal(id);}));
  document.querySelectorAll('[data-foster-menu]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();state.selectedFoster=el.dataset.fosterMenu;state.drawer='foster-detail';render();}));
  document.querySelectorAll('[data-row-menu],[data-publish-menu]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();state.drawer='more';render();}));
  document.querySelectorAll('[data-form-choice]').forEach(el=>el.addEventListener('click',()=>{const value=el.dataset.formChoice;if(state.tutorialStep!==null&&!tutorialMatches('choice',value))return;state.formChoice=value;advanceTutorial('choice',value);state.toast='Response saved automatically';render();clearTimeout(toastTimer);toastTimer=setTimeout(()=>{state.toast='';render();},2300);}));
}

function handleAction(action, el) {
  const modalOpen = m => {state.modal=m;render();};
  const drawerOpen = d => {state.drawer=d;render();};
  const shouldAdvance=tutorialMatches('action',action);
  switch(action) {
    case 'open-intake': state.intakeStep=1;state.modal='intake';render();break;
    case 'close-modal': state.modal=null;render();break;
    case 'close-drawer': state.drawer=null;render();break;
    case 'guide': drawerOpen('guide');break;
    case 'exit-tutorial': tutorialHistory=[];state.tutorialId=null;state.tutorialStep=null;leaveTutorialSurface();render();break;
    case 'tutorial-back': if(!tutorialHistory.length)return;state=tutorialHistory.pop();render();break;
    case 'tutorial-target': document.querySelector(tutorialSteps()[state.tutorialStep]?.selector)?.click();break;
    case 'tutorial-next': {const currentStep=tutorialSteps()[state.tutorialStep];tutorialHistory.push(JSON.parse(JSON.stringify(state)));if(currentStep?.nextView){state.view=currentStep.nextView;state.modal=null;state.drawer=null;state.mobileNavOpen=false;}state.tutorialStep=Math.min(tutorialSteps().length-1,state.tutorialStep+1);render();break;}
    case 'continue-tutorial': {const nextId=el.dataset.tutorial;tutorialHistory=[];Object.assign(state,TOUR_SETUP[nextId]||{});state.modal=null;state.drawer=null;state.tutorialId=nextId;state.tutorialStep=0;render();break;}
    case 'finish-tutorial': {const name=TUTORIALS[state.tutorialId]?.name||'Demo';tutorialHistory=[];state.tutorialId=null;state.tutorialStep=null;leaveTutorialSurface();toast(`${name} · tutorial complete`);break;}
    case 'notifications': drawerOpen('notifications');break;
    case 'reset-demo': modalOpen('confirm-reset');break;
    case 'confirm-reset': {const language=state.language;state=INITIAL(language);toast('Demo reset to its starting state');break;}
    case 'intake-upload': state.intakePhoto=true;render();break;
    case 'intake-next': state.intakeStep=Math.min(3,state.intakeStep+1);render();break;
    case 'intake-back': state.intakeStep=Math.max(1,state.intakeStep-1);render();break;
    case 'save-intake': state.cocoCreated=true;state.animalId='coco';state.detailTab='overview';state.view='animal';state.modal=null;toast('Coco’s record and publishing requirements checklist were created');break;
    case 'place-foster': {
      state.placementAnimalId=state.animalId;
      state.placementFosterId=availablePlacementFosters()[0]?.id||'';
      modalOpen('placement');break;
    }
    case 'save-placement': {
      const candidates=placementCandidates();
      const animal=candidates.find(item=>item.id===state.placementAnimalId)||candidates[0];
      const fosters=availablePlacementFosters();
      const foster=fosters.find(person=>person.id===state.placementFosterId)||fosters[0];
      if(!animal||!foster){state.modal=null;toast('No unassigned animal or available foster person was found');break;}
      state.placements={...state.placements,[animal.id]:foster.id};
      if(animal.id==='coco') state.cocoPlaced=true;
      state.modal=null;
      toast(`${animal.name} was placed with ${foster.name} · first check-in scheduled`);
      break;
    }
    case 'request-update': modalOpen('request');break;
    case 'preview-message': state.messageChannel='email';drawerOpen('message-preview');break;
    case 'return-request': state.drawer=null;render();break;
    case 'open-form-from-preview': state.drawer=null;state.modal=null;state.fosterFormMode='weekly';state.fosterSubmitted=false;state.fosterSubmittedNow=false;state.formChoice='same';state.uploads=0;state.view='fosterform';render();break;
    case 'send-request': state.requestSent=true;state.requestOpened=false;state.fosterSubmitted=false;state.fosterSubmittedNow=false;state.modal=null;state.view='updates';toast('Secure update link sent to Jamie by email and SMS');break;
    case 'preview-foster-form': state.drawer=null;state.fosterFormMode='weekly';state.fosterSubmitted=false;state.fosterSubmittedNow=false;state.formChoice='same';state.uploads=0;state.view='fosterform';render();break;
    case 'open-weekly-checkin': state.fosterFormMode='weekly';state.fosterSubmitted=false;state.fosterSubmittedNow=false;state.formChoice='same';state.uploads=0;state.view='fosterform';render();break;
    case 'open-daily-care': state.fosterFormMode='daily';state.dailyCareSubmitted=false;state.view='fosterform';render();break;
    case 'start-tutorial': {const id=el.dataset.tutorial;const language=state.language;tutorialHistory=[];state=INITIAL(language);Object.assign(state,TOUR_SETUP[id]);state.tutorialId=id;state.tutorialStep=0;render();break;}
    case 'copy-link': navigator.clipboard?.writeText('https://petnow.link/milo-checkin');toast('Secure foster link copied');break;
    case 'foster-upload': state.uploads=3;toast('3 photos uploaded');break;
    case 'save-foster-draft': toast('Draft saved · Jamie can return from the same link');break;
    case 'submit-foster': state.fosterSubmitted=true;state.fosterSubmittedNow=true;if(state.formChoice==='same'){state.uploads=0;state.miloReady=true;}else if(state.formChoice==='change')state.uploads=3;if(state.formChoice==='help')state.toast='Alex was notified right away';render();break;
    case 'submit-daily-care': state.dailyCareSubmitted=true;render();break;
    case 'edit-daily-care': state.dailyCareSubmitted=false;render();break;
    case 'return-fosters': state.view='fosters';state.fosterFormMode='daily';render();break;
    case 'report-concern': toast('Concern form opened · Alex will be alerted');break;
    case 'open-foster-animal': state.drawer=null;openAnimal(el.dataset.animalId);break;
    case 'open-foster-updates': state.drawer=null;state.selectedUpdate=el.dataset.updateId;state.updateFilter='all';state.view='updates';render();break;
    case 'place-with-foster': {const candidates=placementCandidates();state.drawer=null;state.placementFosterId=el.dataset.fosterId;state.placementAnimalId=candidates[0]?.id||'';modalOpen('placement');break;}
    case 'return-staff': state.selectedUpdate='milo';state.view='updates';render();break;
    case 'edit-submission': state.fosterSubmitted=false;render();break;
    case 'review-milo': state.selectedUpdate='milo';state.view='updates';render();break;
    case 'open-update-animal': openAnimal(el.dataset.animalId);break;
    case 'approve-update': state.updateApproved=true;state.miloReady=true;state.fosterSubmitted=true;state.animalId='milo';state.detailTab='overview';state.view='animal';toast('Update approved · Milo is now ready to publish');break;
    case 'partial-approve': state.partialApproved=true;toast('Behavior change approved · photos remain in review');break;
    case 'request-changes': state.changesRequested=true;toast('Clarification request sent to Jamie');break;
    case 'reject-update': toast('Submission rejected · Jamie was notified');break;
    case 'open-profile': state.view='profilepreview';render();break;
    case 'publish-now':
      if(state.published){toast('Milo is already live on the shelter website');break;}
      state.publishStarted=true;render();setTimeout(()=>{state.published=true;state.publishStarted=false;if(tutorialMatches('action','publish-now'))advanceTutorial('action','publish-now');toast('Milo published to the shelter website');},1100);break;
    case 'edit-profile': state.view='animal';state.detailTab='public';render();break;
    case 'save-profile': state.profileSaved=true;toast('Public profile saved');break;
    case 'assign-task': case 'assign': modalOpen('assign');break;
    case 'confirm-assign': state.taskAssigned=true;state.exceptionDone=true;state.modal=null;toast('Task assigned to Morgan Kim');break;
    case 'filters': modalOpen('filters');break;
    case 'apply-filters': state.animalFilter='review';state.modal=null;toast('2 filters applied');break;
    case 'clear-filters': state.animalFilter='all';state.modal=null;render();break;
    case 'clear-search': state.search='';state.animalFilter='all';render();break;
    case 'save-settings': state.settingsSaved=true;toast('Workspace settings saved');break;
    case 'toggle-setting': el.classList.toggle('on');toast('Setting updated');break;
    case 'open-channel-settings': state.view='settings';state.settingsTab='channels';render();break;
    case 'sync-status': toast('Channel status synced just now');break;
    case 'refresh-activity': toast('Activity refreshed');break;
    case 'mark-read': state.drawer=null;toast('All notifications marked as read');break;
    case 'open-nav': state.mobileNavOpen=true;render();break;
    case 'close-nav': state.mobileNavOpen=false;render();break;
    case 'account-menu': drawerOpen('more');break;
    case 'select-all': document.querySelectorAll('[data-row-check]').forEach(x=>x.checked=el.checked);toast(el.checked?'All visible animals selected':'Selection cleared');break;
    case 'toggle-media': el.classList.toggle('selected');toast(el.classList.contains('selected')?'Photo approved for public use':'Photo removed from public profile');break;
    case 'medical-no': case 'medical-yes': case 'foster-no': case 'foster-yes': document.querySelectorAll('.choice-line .segmented').forEach(x=>x.classList.remove('active'));el.classList.add('active');break;
    case 'export-report': case 'export-activity': toast('Demo export prepared');break;
    case 'activity-log': state.animalId='milo';state.detailTab='activity';state.view='animal';render();break;
    case 'notification-item': state.drawer=null;state.view='updates';render();break;
    case 'new-placement': {
      const candidates=placementCandidates();
      state.placementAnimalId=candidates[0]?.id||'';
      state.placementFosterId=availablePlacementFosters()[0]?.id||'';
      modalOpen('placement');break;
    }
    default: genericPrepared(`${(el?.innerText||'Control').trim().split('\n')[0]} · prepared interaction opened`);
  }
  if(shouldAdvance&&action!=='publish-now'&&state.tutorialStep!==null){advanceTutorial('action',action);render();}
}

window.addEventListener('popstate',event=>{
  if(!restoreNavigation(event.state)) return;
  restoringNavigation=true;
  render();
  restoringNavigation=false;
});
window.addEventListener('resize',()=>{if(state.tutorialStep!==null)positionTutorial();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.tutorialStep!==null){state.tutorialId=null;state.tutorialStep=null;render();}});

restoreNavigation(history.state);
render();
