const INITIAL = () => ({
  view: 'dashboard',
  animalId: 'milo',
  detailTab: 'overview',
  animalFilter: 'all',
  updateFilter: 'all',
  publishFilter: 'all',
  search: '',
  modal: null,
  drawer: null,
  toast: '',
  intakeStep: 1,
  intakePhoto: false,
  cocoCreated: false,
  cocoPlaced: false,
  requestSent: true,
  requestOpened: false,
  fosterSubmitted: true,
  fosterSubmittedNow: false,
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
  taskAssigned: false
});

let state = INITIAL();
const app = document.querySelector('#app');

const BASE_ANIMALS = [
  { id:'milo', name:'Milo', img:'assets/dog1.png', meta:'Labrador mix · Male · 2 years', stage:'In foster', readiness:'blocked', label:'Blocked', blocker:'Behavior update · 18 days old', next:'Review update', owner:'Alex Rivera', updated:'12 min ago' },
  { id:'luna', name:'Luna', img:'assets/dog2.png', meta:'Terrier mix · Female · 1 year', stage:'In care', readiness:'ready', label:'Ready', blocker:'None', next:'Preview profile', owner:'Sam Chen', updated:'Today' },
  { id:'buddy', name:'Buddy', img:'assets/dog3.png', meta:'Jindo mix · Male · 3 years', stage:'Needs review', readiness:'review', label:'Needs review', blocker:'Medical clearance', next:'Review record', owner:'Morgan Kim', updated:'Yesterday' },
  { id:'daisy', name:'Daisy', img:'assets/dog4.png', meta:'Poodle mix · Female · 4 years', stage:'Published', readiness:'published', label:'Published', blocker:'None', next:'View live profile', owner:'Alex Rivera', updated:'Aug 7' }
];

const NAV = [
  ['dashboard','⌂','Dashboard'],
  ['animals','◫','Animals'],
  ['updates','↻','Updates'],
  ['fosters','♧','Fosters'],
  ['publishing','↗','Publishing'],
  ['settings','⚙','Settings']
];

const TAB_LABELS = {
  overview:'Overview', profile:'Profile', health:'Health', behavior:'Behavior',
  updates:'Foster updates', media:'Media', documents:'Documents', public:'Public profile', activity:'Activity'
};

const TUTORIALS = {
  a: {
    label:'DEMO A · READINESS',
    name:'Which dogs are ready to go?',
    steps:[
      { selector:'.table-wrap', kind:'manual', title:'Frame the readiness problem', text:'This view tells the team who is ready, what is blocking everyone else, and the next action—without asking around.' },
      { selector:'[data-animal-filter="review"]', kind:'animal-filter', value:'review', title:'Focus on decisions waiting', text:'Filter to animals whose latest information needs a staff decision.' },
      { selector:'[data-open-animal="milo"]', kind:'animal', value:'milo', title:'Open the animal behind the status', text:'Open Milo to show the evidence behind the Needs review label.' },
      { selector:'.status-banner.review', kind:'manual', title:'Show why Milo is not ready', text:'Milo’s status includes the reason, the responsible action, and the effect on publishing—not just a colored label.' },
      { selector:'.status-banner [data-action="review-milo"]', kind:'action', value:'review-milo', title:'Follow the next action', text:'Open the update that may resolve Milo’s final blocker.' },
      { selector:'.comparison', kind:'manual', title:'Review the evidence', text:'Compare the approved record with Jamie’s new observation before anything changes.' },
      { selector:'[data-action="approve-update"]', kind:'action', value:'approve-update', title:'Approve the verified change', text:'Apply only the information staff has reviewed.' },
      { selector:'.status-banner.ready', kind:'manual', title:'Show the readiness decision', text:'The behavior blocker is cleared, the checklist becomes 5 of 5, and Milo moves to Ready to publish automatically.' },
      { selector:'.status-banner [data-action="open-profile"]', kind:'action', value:'open-profile', title:'Move directly to the outcome', text:'Open the adopter-facing profile from the readiness decision.' },
      { selector:'.publish-aside', kind:'manual', title:'Check once before publishing', text:'Confirm the public profile and the channel currently available for publishing. Partner channels remain clearly marked as planned.' },
      { selector:'.publish-aside [data-action="publish-now"]', kind:'action', value:'publish-now', title:'Publish to the shelter website', text:'Send the approved profile to the shelter’s own adoption website.' },
      { selector:'.publish-aside', kind:'finish', title:'Readiness became action', text:'Milo is now live on the shelter website. The demo has connected a blocked record to an adoption-ready outcome without promising unconfirmed partner integrations.' }
    ]
  },
  b: {
    label:'DEMO B · FOSTER UPDATES',
    name:'Stop texting your fosters for updates',
    steps:[
      { selector:'.update-metrics', kind:'manual', title:'Frame the follow-up burden', text:'Every request, reminder, response, and review is visible here, so coordinators do not manage follow-ups from memory.' },
      { selector:'.page-actions [data-action="request-update"]', kind:'action', value:'request-update', title:'Create one structured request', text:'Request the exact health, behavior, medication, photo, and note fields the team needs.' },
      { selector:'.modal-card .form-grid', kind:'manual', title:'Set the follow-up once', text:'Choose the due date and reminder rule. Petify will follow up automatically if Jamie has not responded.' },
      { selector:'.modal-card [data-action="preview-message"]', kind:'action', value:'preview-message', title:'Preview before sending', text:'Check the exact request and secure link Jamie will receive.' },
      { selector:'.message-tabs [data-message-channel="email"]', kind:'channel', value:'email', title:'Show both delivery channels', text:'The same request is prepared for SMS and email, while the submission still lands in one record.' },
      { selector:'.message-drawer [data-action="return-request"]', kind:'action', value:'return-request', title:'Return to the request', text:'Go back with the message confirmed and send the request.' },
      { selector:'.modal-card [data-action="send-request"]', kind:'action', value:'send-request', title:'Send once', text:'Send the secure link by SMS and email. The automatic reminder schedule starts now.' },
      { selector:'.pending-request', kind:'manual', title:'Show the waiting state', text:'The console now shows delivery, deadline, and next reminder. Staff can see that follow-up is already handled.' },
      { selector:'.pending-request [data-action="preview-foster-form"]', kind:'action', value:'preview-foster-form', title:'Switch to Jamie’s view', text:'Open the same no-account mobile form Jamie receives from the secure link.' },
      { selector:'[data-form-choice="change"]', kind:'choice', value:'change', title:'Capture only what changed', text:'Jamie reports a behavior change first, so the form can focus on the details that matter.' },
      { selector:'[data-action="foster-upload"]', kind:'action', value:'foster-upload', title:'Attach recent evidence', text:'Add current photos to the same update instead of sending them in a separate message thread.' },
      { selector:'[data-action="submit-foster"]', kind:'action', value:'submit-foster', title:'Submit the update', text:'Jamie sends one structured response for Milo.' },
      { selector:'[data-action="return-staff"]', kind:'action', value:'return-staff', title:'Return to the shelter console', text:'Switch back to the staff view to see how the response arrived.' },
      { selector:'.comparison', kind:'manual', title:'Review before applying', text:'Petify highlights the changed field and keeps the official record untouched until staff approves it.' },
      { selector:'[data-action="approve-update"]', kind:'action', value:'approve-update', title:'Approve the verified update', text:'Apply Jamie’s reviewed behavior change and approved photos.' },
      { selector:'.status-banner.ready', kind:'manual', title:'Connect the update to readiness', text:'The latest foster information resolves Milo’s final blocker and moves him to Ready to publish.' },
      { selector:'.status-banner [data-action="open-profile"]', kind:'action', value:'open-profile', title:'Continue to the adoption outcome', text:'Open the completed public profile without re-entering Jamie’s approved information.' },
      { selector:'.publish-aside', kind:'manual', title:'Confirm the publishing handoff', text:'The same approved record is ready for the shelter website. Petfinder and Adopt a Pet are shown separately as planned integrations.' },
      { selector:'.publish-aside [data-action="publish-now"]', kind:'action', value:'publish-now', title:'Publish the profile', text:'Send Milo to the shelter’s own adoption website.' },
      { selector:'.publish-aside', kind:'finish', title:'The full loop is complete', text:'One request became a reviewed record, a readiness decision, and a profile published on the shelter website—without manual chasing.' }
    ]
  }
};

function tutorialSteps() { return TUTORIALS[state.tutorialId]?.steps || []; }

const UPDATE_SUBMISSIONS = [
  {
    id:'milo', name:'Milo', img:'assets/dog1.png', foster:'Jamie Lee', time:'12 min ago',
    status:'Needs review', statusType:'review', filter:'review', flag:'Behavior changed', photoCount:3,
    summaryTitle:'1 meaningful change detected', summaryText:'Compare the approved behavior record with Jamie’s new observation before applying it.', summaryType:'warning',
    field:'Comfort around dogs', current:'Needs slow introductions. Avoid crowded play groups.', currentMeta:'Confirmed 18 days ago',
    incoming:'Relaxed with two resident dogs and has started initiating play.', incomingMeta:'Submitted today by Jamie',
    photos:['assets/dog1.png','assets/milo-home.jpg','assets/milo-yard.jpg'], mode:'review'
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
    status:'Approved', statusType:'complete', filter:'approved', flag:'No concerns reported', photoCount:3,
    summaryTitle:'Update approved and applied', summaryText:'No readiness-impacting changes were reported. Two photos were added to Luna’s public media.', summaryType:'success',
    field:'Weekly wellbeing', current:'Eating, sleeping, and exercising normally.', currentMeta:'Confirmed Jul 31',
    incoming:'No health or behavior changes. Settling well and sleeping through the night.', incomingMeta:'Approved Aug 7 by Alex',
    photos:['assets/dog2.png','assets/luna-sleep.jpg','assets/luna-play.jpg'], mode:'approved'
  }
];

function animals() {
  const list = BASE_ANIMALS.map(a => ({...a}));
  const milo = list.find(a => a.id === 'milo');
  if (state.updateApproved || state.miloReady) {
    Object.assign(milo, {stage:'Ready to publish', readiness:'ready', label:'Ready', blocker:'None', next:'Preview profile', updated:'Just now'});
  } else if (state.fosterSubmitted) {
    Object.assign(milo, {stage:'Needs review', readiness:'review', label:'Needs review', blocker:'New behavior update', next:'Review update'});
  }
  if (state.published) Object.assign(milo, {stage:'Published', readiness:'published', label:'Published', next:'View live profile', updated:'Just now'});
  if (state.cocoCreated) list.unshift({
    id:'coco', name:'Coco', img:'assets/dog4.png', meta:'Mixed breed · Female · 2 years',
    stage:state.cocoPlaced?'In foster':'New intake', readiness:'blocked', label:'Blocked',
    blocker:state.cocoPlaced?'Health, behavior, profile':'Foster placement + 4 items',
    next:state.cocoPlaced?'Request first update':'Place in foster', owner:'Alex Rivera', updated:'Just now'
  });
  return list;
}

function currentAnimal() { return animals().find(a => a.id === state.animalId) || animals()[0]; }
function statusPill(type, label) { return `<span class="pill ${type}"><i></i>${label}</span>`; }
function iconButton(icon, label, action) { return `<button class="icon-button" data-action="${action}" aria-label="${label}"><span>${icon}</span><em>${label}</em></button>`; }
function formatCount(n) { return `<strong class="metric-number">${n}</strong>`; }

function layout(content) {
  const section = state.view === 'animal' ? 'animals' : state.view === 'fosterform' ? 'updates' : state.view;
  return `
    <div class="app-shell">
      <aside class="sidebar">
        <button class="brand" data-view="dashboard" aria-label="Petnow dashboard">
          <span class="brand-mark"><b></b></span>
          <span><strong>petnow</strong><small>Petify for Shelters</small></span>
        </button>
        <div class="workspace-label">SECOND CHANCE RESCUE</div>
        <nav>${NAV.map(([id,ico,label]) => `<button class="nav-item ${section===id?'active':''}" data-view="${id}"><span>${ico}</span><b>${label}</b>${id==='updates'?'<em>2</em>':''}</button>`).join('')}</nav>
        <div class="sidebar-bottom">
          <button class="demo-reset" data-action="reset-demo"><span>↺</span><b>Reset demo</b></button>
          <button class="account" data-action="account-menu"><span class="avatar">AR</span><span><b>Alex Rivera</b><small>Administrator</small></span><i>⌄</i></button>
        </div>
      </aside>
      <main class="main">
        <header class="topbar">
          <button class="mobile-brand" data-action="open-nav">☰</button>
          <label class="global-search"><span>⌕</span><input id="global-search" value="${state.search}" placeholder="Search animals, fosters, or records" aria-label="Search"></label>
          <div class="top-actions">
            <button class="tutorial-launch" data-action="guide"><span>▶</span> Demo tours</button>
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
  const stats = [
    ['New intake', state.cocoCreated?'4':'3', '+1 this week', 'new'],
    ['In care', '28', '6 in foster homes', 'care'],
    ['Needs review', state.updateApproved?'1':'2', 'Updates waiting', 'review'],
    ['Ready to publish', state.miloReady?'13':'12', state.miloReady?'Milo is now ready':'3 ready this week', 'ready'],
    ['Published', state.published?'25':'24', 'Shelter website', 'published']
  ];
  return `<section class="content">
    ${pageHeader('SUNDAY, AUGUST 9','Good morning, Alex','Here is what needs attention across your shelter today.',`<button class="secondary-button" data-action="export-report">Export report</button><button class="primary-button" data-action="open-intake">＋ Add animal</button>`)}
    <div class="metric-grid five">${stats.map(([label,num,note,type]) => `<button class="metric-card ${type}" data-filter-jump="${type}"><span class="metric-icon"></span><span><b>${label}</b>${formatCount(num)}<small>${note}</small></span><i>›</i></button>`).join('')}</div>
    <div class="dashboard-grid">
      <section class="surface attention-card">
        <div class="section-head"><div><p class="kicker">EXCEPTIONS</p><h2>Needs your attention</h2></div><button class="text-button" data-view="animals">View all <span>›</span></button></div>
        <div class="exception-list">
          ${exceptionRow('overdue','!','4 foster updates are overdue','Oldest request is 5 days late','Open overdue requests','updates')}
          ${exceptionRow('stale','↻',state.updateApproved?'1 animal has outdated information':'3 animals have outdated information','Behavior or health details are older than 14 days','View blocked animals','animals')}
          ${exceptionRow('publish','↑','2 profiles are ready to publish','Shelter website publishing is available','Open publishing queue','publishing')}
          ${exceptionRow('owner','＋','2 blockers have no owner','Assign the next action to a teammate','Assign owners','assign')}
        </div>
      </section>
      <section class="surface activity-card">
        <div class="section-head"><div><p class="kicker">LIVE ACTIVITY</p><h2>Recent changes</h2></div><button class="round-button" data-action="refresh-activity">↻</button></div>
        <div class="activity-list">
          ${activityItem('assets/dog1.png', state.updateApproved?'Milo became ready to publish':'Jamie submitted an update for Milo', state.updateApproved?'Behavior update approved by Alex':'Behavior changes · 3 new photos','12 min ago')}
          ${activityItem('assets/dog2.png','Luna’s profile is ready','All 5 readiness sections complete','42 min ago')}
          ${activityItem('assets/dog3.png','Medical clearance added for Buddy','Submitted by Morgan Kim','Yesterday')}
          ${activityItem('assets/dog4.png','Daisy published to shelter website','Published by Alex Rivera','Aug 7')}
        </div>
        <button class="activity-footer" data-action="activity-log">Open full activity log <span>›</span></button>
      </section>
    </div>
    <section class="surface quick-actions">
      <div><p class="kicker">QUICK START</p><h2>Move work forward</h2></div>
      <button data-action="open-intake"><span>＋</span><b>New intake</b><small>Create a record</small></button>
      <button data-view="updates"><span>✓</span><b>Review updates</b><small>2 waiting</small></button>
      <button data-view="animals" data-set-filter="blocked"><span>!</span><b>Resolve blockers</b><small>8 animals</small></button>
      <button data-view="publishing"><span>↑</span><b>Publish profiles</b><small>12 ready</small></button>
    </section>
  </section>`;
}

function exceptionRow(type, icon, title, note, action, target) {
  return `<div class="exception-row ${state.exceptionDone && type==='owner'?'done':''}"><span class="exception-icon ${type}">${state.exceptionDone&&type==='owner'?'✓':icon}</span><div><b>${state.exceptionDone&&type==='owner'?'Owners assigned':title}</b><small>${state.exceptionDone&&type==='owner'?'Alex and Morgan were notified':note}</small></div><button data-exception="${target}">${state.exceptionDone&&type==='owner'?'View assignments':action} <span>›</span></button></div>`;
}
function activityItem(img,title,note,time) { return `<button class="activity-item" data-action="activity-item"><img src="${img}" alt=""><span><b>${title}</b><small>${note}</small></span><time>${time}</time></button>`; }

function animalsView() {
  let list = animals();
  if (state.search) list = list.filter(a => `${a.name} ${a.meta} ${a.owner}`.toLowerCase().includes(state.search.toLowerCase()));
  if (state.animalFilter !== 'all') list = list.filter(a => {
    if (state.animalFilter==='stale') return a.id==='milo' && !state.updateApproved;
    return a.readiness===state.animalFilter || a.stage.toLowerCase().includes(state.animalFilter);
  });
  const counts = {all:animals().length,ready:animals().filter(a=>a.readiness==='ready').length,blocked:animals().filter(a=>a.readiness==='blocked').length,review:animals().filter(a=>a.readiness==='review').length};
  return `<section class="content">
    ${pageHeader('ANIMAL WORKSPACE','Animals','See who is ready, what is missing, and the next action for every animal.',`<button class="secondary-button" data-action="bulk-actions">Bulk actions</button><button class="primary-button" data-action="open-intake">＋ Add animal</button>`)}
    <section class="surface table-surface">
      <div class="table-toolbar">
        <div class="filter-tabs">${[['all',`All ${counts.all}`],['ready',`Ready ${counts.ready}`],['blocked',`Blocked ${counts.blocked}`],['review',`Needs review ${counts.review}`],['published','Published 1']].map(([id,label])=>`<button class="${state.animalFilter===id?'active':''}" data-animal-filter="${id}">${label}</button>`).join('')}</div>
        <div class="toolbar-actions"><button class="filter-button" data-action="filters">☷ Filters <span>2</span></button><button class="filter-button" data-action="columns">▤ Columns</button></div>
      </div>
      <div class="active-filters ${state.animalFilter==='all'?'hidden':''}"><span>Showing: ${state.animalFilter}<button data-animal-filter="all">×</button></span><button data-action="save-view">Save view</button></div>
      <div class="table-wrap"><table><thead><tr><th><input type="checkbox" data-action="select-all" aria-label="Select all"></th><th>Animal</th><th>Stage</th><th>Readiness</th><th>Primary blocker</th><th>Next action</th><th>Owner</th><th>Updated</th><th></th></tr></thead><tbody>
        ${list.length ? list.map(animalRow).join('') : `<tr><td colspan="9"><div class="empty"><span>⌕</span><h3>No animals found</h3><p>Try a different search or filter.</p><button class="secondary-button" data-action="clear-search">Clear filters</button></div></td></tr>`}
      </tbody></table></div>
      <div class="table-footer"><span>${list.length} of ${animals().length} animals</span><div><button data-action="prev-page">‹</button><b>1</b><button data-action="next-page">›</button></div></div>
    </section>
  </section>`;
}

function animalRow(a) {
  return `<tr class="clickable-row" data-open-animal="${a.id}">
    <td><input type="checkbox" data-row-check="${a.id}" aria-label="Select ${a.name}"></td>
    <td><div class="animal-cell"><img src="${a.img}" alt="${a.name}"><span><b>${a.name}</b><small>${a.meta}</small></span></div></td>
    <td><span class="stage-text">${a.stage}</span></td><td>${statusPill(a.readiness,a.label)}</td>
    <td><span class="blocker ${a.blocker==='None'?'none':''}">${a.blocker}</span></td>
    <td><button class="table-link" data-next-action="${a.id}">${a.next} <span>›</span></button></td>
    <td><span class="owner"><i>${a.owner.split(' ').map(x=>x[0]).join('')}</i>${a.owner}</span></td><td>${a.updated}</td>
    <td><button class="kebab" data-row-menu="${a.id}" aria-label="More actions">•••</button></td>
  </tr>`;
}

function animalView() {
  const a = currentAnimal();
  const isMilo = a.id === 'milo';
  const isCoco = a.id === 'coco';
  const ready = isMilo ? state.miloReady : a.readiness==='ready';
  const review = isMilo && state.fosterSubmitted && !state.updateApproved;
  return `<section class="content detail-content">
    <button class="back-link" data-view="animals">‹ Back to animals</button>
    <div class="animal-header surface">
      <img src="${a.img}" alt="${a.name}"><div class="animal-title"><div><h1>${a.name}</h1>${statusPill(ready?'ready':review?'review':a.readiness,ready?'Ready to publish':review?'Needs review':a.label)}</div><p>${a.meta} · ID PN-${a.id==='milo'?'1048':a.id==='coco'?'1092':'1051'}</p><div class="animal-facts"><span>⌂ ${isCoco&&!state.cocoPlaced?'Main shelter':'Jamie Lee · Foster home'}</span><span>♧ ${isCoco&&!state.cocoPlaced?'No foster assigned':'Foster coordinator: Alex'}</span></div></div>
      <div class="header-actions"><button class="secondary-button" data-action="animal-more">•••</button>${isCoco&&!state.cocoPlaced?`<button class="primary-button" data-action="place-foster">Place in foster</button>`:`<button class="secondary-button" data-action="request-update">Request update</button><button class="primary-button" data-action="open-profile" ${ready?'':'disabled'}>Preview & publish</button>`}</div>
    </div>
    <nav class="detail-tabs">${Object.entries(TAB_LABELS).map(([id,label])=>`<button class="${state.detailTab===id?'active':''}" data-detail-tab="${id}">${label}${id==='updates'?'<span>3</span>':''}</button>`).join('')}</nav>
    ${renderAnimalTab(a, ready, review)}
  </section>`;
}

function renderAnimalTab(a, ready, review) {
  if (state.detailTab==='overview') return overviewTab(a,ready,review);
  if (state.detailTab==='profile') return simpleFormTab('Animal profile','Core identity and intake details',[['Name',a.name],['Species','Dog'],['Breed',a.meta.split(' · ')[0]],['Sex',a.meta.includes('Female')?'Female':'Male'],['Estimated age',a.meta.split(' · ').pop()],['Intake source','Owner surrender'],['Intake date','August 3, 2026'],['Current location','Foster home · Jamie Lee']]);
  if (state.detailTab==='health') return recordTab('Health','Medical information required for publishing',[['Rabies vaccination','Complete','Aug 2, 2026'],['DHPP vaccination','Complete','Aug 2, 2026'],['Spay / neuter','Complete','Jul 28, 2026'],['Medical clearance','Complete','Dr. Casey · Aug 6']]);
  if (state.detailTab==='behavior') return recordTab('Behavior','Latest approved observations',[['People','Friendly and seeks attention','Updated 18 days ago'],['Dogs',state.updateApproved?'Relaxed with resident dogs; initiates play':'Needs slow introductions','Updated '+(state.updateApproved?'today':'18 days ago')],['Cats','Not tested','Next action required'],['Home notes','Settles well after walks','Jamie Lee']]);
  if (state.detailTab==='updates') return updatesTimelineTab();
  if (state.detailTab==='media') return mediaTab(a);
  if (state.detailTab==='documents') return recordTab('Documents','Required records and approvals',[['Intake record','Complete','Alex Rivera'],['Medical release','Complete','Dr. Casey'],['Behavior assessment','Complete','Morgan Kim'],['Adoption disclosure','Complete','Alex Rivera']]);
  if (state.detailTab==='public') return publicProfileTab(a);
  return activityTab(a);
}

function overviewTab(a, ready, review) {
  const isCoco=a.id==='coco';
  const completed = ready?5:isCoco?1:4;
  return `<div class="detail-grid">
    <div class="detail-main">
      <section class="surface status-banner ${ready?'ready':review?'review':'blocked'}">
        <div class="status-symbol">${ready?'✓':review?'↻':'!'}</div><div><p class="kicker">CURRENT READINESS</p><h2>${ready?'Ready to publish':review?'1 update waiting for review':isCoco?'4 items block publishing':'Behavior information is outdated'}</h2><p>${ready?'All required information is complete and current.':review?'Jamie’s submission may resolve the final blocker. Review it before the record changes.':isCoco?'Complete health, behavior, documents, and public profile information.':'Request a new foster update to confirm behavior before publishing.'}</p></div>
        <button class="${ready?'primary-button':'secondary-button'}" data-action="${ready?'open-profile':review?'review-milo':isCoco?'place-foster':'request-update'}">${ready?'Preview profile':review?'Review update':isCoco?'Place in foster':'Request update'} <span>›</span></button>
      </section>
      <section class="surface readiness-card">
        <div class="section-head"><div><p class="kicker">READINESS CHECKLIST</p><h2>${completed} of 5 sections complete</h2></div><div class="progress-ring" style="--progress:${completed*20}"><b>${completed*20}%</b></div></div>
        <div class="progress-track"><i style="width:${completed*20}%"></i></div>
        ${checkRow('Health','Vaccinations and medical clearance complete','Complete','complete','health')}
        ${checkRow('Behavior',ready?'Foster update approved today':review?'New foster update waiting for review':isCoco?'No behavior assessment':'Last confirmed 18 days ago',ready?'Complete':review?'Needs review':'Blocked',ready?'complete':review?'review':'blocked','behavior')}
        ${checkRow('Media',isCoco?'1 intake photo · 3 more recommended':'8 approved photos · 1 video',isCoco?'In progress':'Complete',isCoco?'review':'complete','media')}
        ${checkRow('Documents',isCoco?'Intake record only':'All required documents approved',isCoco?'Blocked':'Complete',isCoco?'blocked':'complete','documents')}
        ${checkRow('Public profile',isCoco?'Description not started':'Profile copy and adoption details complete',isCoco?'Blocked':'Complete',isCoco?'blocked':'complete','public')}
      </section>
    </div>
    <aside class="detail-aside">
      <section class="surface next-action-card"><p class="kicker">NEXT ACTION</p><h2>${ready?'Publish adoption profile':review?'Review Jamie’s update':isCoco?'Assign a foster home':'Request behavior update'}</h2><p>${ready?'Ready now':review?'Due today':isCoco?'Owner · Alex Rivera':'Owner · Alex Rivera · Due today'}</p><div class="mini-owner"><span class="avatar">AR</span><span><b>Alex Rivera</b><small>Foster coordinator</small></span></div><button class="primary-button full" data-action="${ready?'open-profile':review?'review-milo':isCoco?'place-foster':'request-update'}">${ready?'Open profile':review?'Review submission':isCoco?'Set placement':'Send request'}</button><button class="text-button centered" data-action="assign-task">Assign to someone else</button></section>
      <section class="surface side-activity"><div class="section-head"><div><p class="kicker">RECENT ACTIVITY</p><h2>Latest changes</h2></div><button class="round-button" data-detail-tab="activity">›</button></div>${activityItem(a.img,review?'Update submitted by Jamie':'Photos approved by Alex',review?'3 new photos · behavior changed':'8 public photos ready','Today')}${activityItem(a.img,'Medical clearance received','Added by Dr. Casey','Aug 6')}</section>
    </aside>
  </div>`;
}

function checkRow(title,note,label,type,tab) { return `<button class="check-row" data-detail-tab="${tab}"><span class="check-icon ${type}">${type==='complete'?'✓':type==='review'?'↻':'!'}</span><span><b>${title}</b><small>${note}</small></span>${statusPill(type,label)}<i>›</i></button>`; }

function simpleFormTab(title,desc,fields) { return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">RECORD</p><h2>${title}</h2><p>${desc}</p></div><button class="secondary-button" data-action="edit-record">Edit</button></div><div class="record-grid">${fields.map(([l,v])=>`<div><small>${l}</small><b>${v}</b></div>`).join('')}</div><div class="panel-footer"><span>Last updated by Alex Rivera · Today</span><button class="text-button" data-action="view-history">View history</button></div></section>`; }
function recordTab(title,desc,items) { return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">ANIMAL RECORD</p><h2>${title}</h2><p>${desc}</p></div><button class="primary-button" data-action="add-record">＋ Add entry</button></div><div class="record-list">${items.map(([a,b,c],i)=>`<button data-action="record-entry"><span class="check-icon ${b==='Complete'?'complete':b==='Not tested'?'blocked':'review'}">${b==='Complete'?'✓':i+1}</span><span><b>${a}</b><small>${b}</small></span><em>${c}</em><i>›</i></button>`).join('')}</div></section>`; }
function updatesTimelineTab() { return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">FOSTER UPDATES</p><h2>Requests and submissions</h2><p>Every request, response, and approval stays with Milo’s record.</p></div><button class="primary-button" data-action="request-update">Request update</button></div><div class="record-list"><button data-action="review-milo"><span class="check-icon review">↻</span><span><b>Weekly check-in submitted</b><small>Jamie Lee · Behavior changed · 3 photos</small></span><em>12 min ago</em><i>›</i></button><button data-action="request-details"><span class="check-icon complete">✓</span><span><b>Weekly check-in requested</b><small>Email + SMS · Opened in 8 minutes</small></span><em>Aug 9</em><i>›</i></button><button data-action="request-details"><span class="check-icon complete">✓</span><span><b>First foster check-in approved</b><small>No health changes · 5 photos</small></span><em>Jul 22</em><i>›</i></button></div></section>`; }
function mediaTab(a) { return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">MEDIA LIBRARY</p><h2>Photos & video</h2><p>Choose which assets can appear on public adoption profiles.</p></div><button class="primary-button" data-action="upload-media">＋ Upload</button></div><div class="media-grid">${[a.img,'assets/dog2.png','assets/dog4.png','assets/dog3.png'].map((img,i)=>`<button class="media-item ${i<3?'selected':''}" data-action="toggle-media"><img src="${img}" alt=""><span>${i<3?'✓':'＋'}</span><small>${i===0?'Cover photo':'Foster upload'}</small></button>`).join('')}</div></section>`; }
function publicProfileTab(a) { return `<section class="surface tab-panel profile-editor"><div class="section-head"><div><p class="kicker">PUBLIC PROFILE</p><h2>Adoption listing</h2><p>Internal notes are never included in the public profile.</p></div><button class="primary-button" data-action="open-profile">Preview</button></div><div class="form-grid"><label><span>Public name</span><input value="${a.name}"></label><label><span>Headline</span><input value="A gentle companion ready for a quiet home"></label><label class="full"><span>About ${a.name}</span><textarea rows="6">${a.name} is affectionate, curious, and settling beautifully into foster life. ${a.name} enjoys neighborhood walks, sunny windows, and quiet evenings with people.</textarea></label><label><span>Best home</span><select><option>Adults or older children</option></select></label><label><span>Adoption contact</span><input value="adopt@secondchance.org"></label></div><div class="panel-footer"><span>${state.profileSaved?'All changes saved':'Draft autosaved a moment ago'}</span><button class="primary-button" data-action="save-profile">Save profile</button></div></section>`; }
function activityTab(a) { return `<section class="surface tab-panel"><div class="section-head"><div><p class="kicker">AUDIT TRAIL</p><h2>Activity</h2><p>Requests, approvals, state changes, and publishing events.</p></div><button class="secondary-button" data-action="export-activity">Export</button></div><div class="timeline-list">${['Foster update submitted by Jamie Lee','Weekly update opened','Update reminder sent automatically','Medical clearance approved by Dr. Casey','Milo placed with Jamie Lee','Animal record created at intake'].map((x,i)=>`<button data-action="activity-item"><i></i><span><b>${x}</b><small>${['12 minutes ago','20 minutes ago','2 days ago','Aug 6','Jul 20','Jul 18'][i]}</small></span><em>${i<2?'AR':'System'}</em></button>`).join('')}</div></section>`; }

function updatesView() {
  const selected = state.selectedUpdate;
  const currentSubmissions = UPDATE_SUBMISSIONS.map(x=>{
    if(x.id!=='milo') return x;
    if(state.updateApproved) return {...x,status:'Approved',statusType:'complete',filter:'approved',flag:'Applied to record',time:'Just now'};
    if(state.requestSent&&!state.fosterSubmitted) return {...x,status:'Sent',statusType:'neutral',filter:'all',flag:'Waiting for response',time:'Just now'};
    if(!state.requestSent&&!state.fosterSubmitted) return {...x,status:'Due today',statusType:'failed',filter:'all',flag:'Request not sent',time:'Due today'};
    if(state.fosterSubmittedNow) return {...x,time:'Just now'};
    return x;
  });
  const submissions = currentSubmissions.filter(x=>state.updateFilter==='all'||x.filter===state.updateFilter);
  const item = submissions.find(x=>x.id===selected)||submissions[0]||UPDATE_SUBMISSIONS[0];
  const needsReviewCount=state.fosterSubmitted&&!state.updateApproved?'1':'0';
  const sentCount=state.requestSent&&!state.fosterSubmitted?'8':'7';
  return `<section class="content">
    ${pageHeader('FOSTER COMMUNICATION','Updates','Track requests, follow up automatically, and review structured submissions.',`${state.requestSent&&!state.fosterSubmitted?'<button class="secondary-button" data-action="preview-foster-form">Open foster form ↗</button>':'<button class="secondary-button" data-action="copy-link">Copy foster link</button>'}<button class="primary-button" data-action="request-update">＋ Request update</button>`)}
    <div class="update-metrics">${[['Overdue','4','overdue','requested'],['Sent',sentCount,'sent','all'],['In progress','3','progress','all'],['Needs review',needsReviewCount,'review','review']].map(([a,b,c,f])=>`<button data-update-filter="${f}"><small>${a}</small><b>${b}</b><i class="${c}"></i></button>`).join('')}</div>
    <section class="surface inbox">
      <aside class="inbox-sidebar"><div class="inbox-tabs">${[['all','All'],['review','Needs review'],['requested','Changes requested'],['approved','Approved']].map(([id,l])=>`<button class="${state.updateFilter===id?'active':''}" data-update-filter="${id}">${l}</button>`).join('')}</div><label class="inbox-search">⌕ <input placeholder="Search updates"></label><div class="submission-list">${submissions.map(s=>`<button class="submission ${item.id===s.id?'active':''}" data-select-update="${s.id}"><img src="${s.img}" alt=""><span><b>${s.name}<em class="${s.statusType}">${s.status}</em></b><small>${s.foster} · ${s.time}</small><i class="${s.statusType}">${s.flag}</i></span></button>`).join('')}</div></aside>
      ${reviewPanel(item)}
    </section>
  </section>`;
}

function reviewPanel(item) {
  if(item.id==='milo'&&!state.requestSent&&!state.fosterSubmitted) return dueRequestPanel(item);
  if(item.id==='milo'&&state.requestSent&&!state.fosterSubmitted) return pendingRequestPanel(item);
  const approved = item.id==='milo' && state.updateApproved;
  const effectiveMode = approved ? 'approved' : item.mode;
  const effectiveStatus = approved ? 'Approved' : item.status;
  const effectiveType = approved ? 'complete' : item.statusType;
  return `<article class="review-panel">
    <div class="review-head"><div><p class="kicker">WEEKLY CHECK-IN · ${item.time.toUpperCase()}</p><h2>${item.name} · submitted by ${item.foster}</h2><p>${item.flag} · ${item.photoCount} photos attached</p></div>${statusPill(effectiveType,effectiveStatus)}</div>
    <div class="change-summary ${effectiveMode==='approved'?'success':item.summaryType==='alert'?'alert':''}"><span>${effectiveMode==='approved'?'✓':effectiveMode==='requested'?'!':'↻'}</span><div><b>${approved?'Update approved and applied':item.summaryTitle}</b><p>${approved?'Milo’s behavior record and readiness checklist were updated.':item.summaryText}</p></div><button data-action="review-help">${effectiveMode==='requested'?'View request':effectiveMode==='approved'?'View audit trail':'How review works'}</button></div>
    <div class="comparison"><div><small>CURRENT APPROVED RECORD</small><b>${item.field}</b><p>${item.current}</p><em>${item.currentMeta}</em></div><div class="new ${effectiveMode==='approved'?'approved':''}"><small>${effectiveMode==='approved'?'APPROVED FOSTER UPDATE':'NEW FOSTER SUBMISSION'}</small><b>${item.field}</b><p>${item.incoming}</p><em>${item.incomingMeta}</em>${effectiveMode==='review'?'<label><input type="checkbox" checked> Approve this change</label>':''}</div></div>
    <div class="attachment-panel"><div><small>${effectiveMode==='approved'?'APPROVED MEDIA':'NEW MEDIA'}</small><b>${item.photoCount} photos from ${item.foster.split(' ')[0]}</b></div><div class="review-photos">${item.photos.map((x,i)=>`<button data-action="preview-photo"><img src="${x}" alt="${item.name} foster update photo ${i+1}"><span>⌕</span><label><input type="checkbox" ${effectiveMode==='approved'||i<2?'checked':''} ${effectiveMode==='approved'?'disabled':''}> ${effectiveMode==='approved'?'Public media':'Public use'}</label></button>`).join('')}</div></div>
    ${effectiveMode==='review'?`<div class="review-actions"><button class="danger-text" data-action="reject-update">Reject</button><span></span><button class="secondary-button" data-action="request-changes">Request changes</button><button class="secondary-button" data-action="partial-approve">Approve selected</button><button class="primary-button" data-action="approve-update">Approve all & update record</button></div>`:effectiveMode==='requested'?`<div class="review-actions resolved"><button class="secondary-button" data-action="view-message">View request message</button><span></span><button class="secondary-button" data-action="send-reminder">Send reminder</button><button class="primary-button" data-action="mark-resolved">Mark clarification received</button></div>`:`<div class="review-actions resolved"><button class="secondary-button" data-action="view-history">View approval history</button><span></span><button class="primary-button" data-action="open-update-animal" data-animal-id="${item.id}">Open ${item.name}’s record</button></div>`}
  </article>`;
}

function dueRequestPanel(item) {
  return `<article class="review-panel due-request">
    <div class="review-head"><div><p class="kicker">WEEKLY CHECK-IN · DUE TODAY</p><h2>${item.name} · ${item.foster}</h2><p>Last approved update was 7 days ago</p></div>${statusPill('failed','Due today')}</div>
    <div class="request-due"><span>!</span><div><b>Milo’s weekly update has not been requested</b><p>Send one structured request now. Petify will track delivery and follow up automatically.</p></div></div>
    <div class="request-delivery-grid"><div><small>FOSTER</small><b>${item.foster}</b><em>Active placement</em></div><div><small>SCHEDULE</small><b>Weekly</b><em>Due every Sunday</em></div><div><small>LAST APPROVED</small><b>Aug 2</b><em>7 days ago</em></div><div><small>REQUEST STATUS</small><b>Not sent</b><em>Action required</em></div></div>
    <div class="request-link-row"><div><small>NEXT ACTION</small><b>Request Milo’s weekly check-in</b><p>Health, behavior, medication, photos, and notes</p></div><button class="primary-button" data-action="request-update">Request update</button></div>
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

function fostersView() {
  const rows = [
    ['jamie','Jamie Lee','JL','Milo','assets/dog1.png','Active','Weekly · next Aug 16','98%'],
    ['taylor','Taylor Reed','TR','Luna','assets/dog2.png','Active','Every 2 weeks · next Aug 18','92%'],
    ['morgan','Morgan Kim','MK','Buddy','assets/dog3.png','Active','Weekly · overdue 2 days','86%'],
    ['riley','Riley Park','RP','No placement','', 'Available','—','100%']
  ];
  if(state.cocoPlaced) rows.unshift(['casey','Casey Brooks','CB','Coco','assets/dog4.png','Active','Weekly · starts Aug 16','New']);
  return `<section class="content">
    ${pageHeader('FOSTER NETWORK','Fosters','Keep placements, contact details, and update schedules connected.',`<button class="secondary-button" data-action="invite-foster">Invite foster</button><button class="primary-button" data-action="new-placement">＋ New placement</button>`)}
    <div class="metric-grid four">${[['Active placements',state.cocoPlaced?'19':'18','2 ending this month'],['Available fosters','12','4 match current needs'],['Updates due','7','4 overdue'],['Response rate','94%','Last 30 days']].map(([a,b,c])=>`<button class="metric-card" data-action="foster-metric"><span><b>${a}</b>${formatCount(b)}<small>${c}</small></span><i>›</i></button>`).join('')}</div>
    <section class="surface table-surface"><div class="table-toolbar"><label class="table-search">⌕ <input placeholder="Search foster people"></label><div class="toolbar-actions"><button class="filter-button" data-action="foster-filter">☷ Availability</button><button class="filter-button" data-action="foster-sort">↕ Sort</button></div></div><div class="table-wrap"><table><thead><tr><th>Foster</th><th>Current placement</th><th>Status</th><th>Update schedule</th><th>Response rate</th><th></th></tr></thead><tbody>${rows.map(([id,name,initials,pet,img,status,schedule,rate])=>`<tr class="clickable-row" data-select-foster="${id}"><td><span class="owner large"><i>${initials}</i><span><b>${name}</b><small>${name.toLowerCase().replace(' ','')}@example.com</small></span></span></td><td>${img?`<span class="mini-animal"><img src="${img}" alt="">${pet}</span>`:pet}</td><td>${statusPill(status==='Active'?'ready':'neutral',status)}</td><td>${schedule}</td><td><b>${rate}</b></td><td><button class="kebab" data-foster-menu="${id}">•••</button></td></tr>`).join('')}</tbody></table></div></section>
  </section>`;
}

function publishingView() {
  let rows = [
    {id:'milo',name:'Milo',img:'assets/dog1.png',state:state.published?'published':state.miloReady?'ready':'blocked',status:state.published?'Published':state.miloReady?'Ready':'Blocked',detail:state.published?'Shelter website live':state.miloReady?'All requirements complete':'Behavior update outdated',updated:'Just now'},
    {id:'luna',name:'Luna',img:'assets/dog2.png',state:'ready',status:'Ready',detail:'All requirements complete',updated:'42 min ago'},
    {id:'buddy',name:'Buddy',img:'assets/dog3.png',state:'blocked',status:'Blocked',detail:'Medical clearance missing',updated:'Yesterday'},
    {id:'daisy',name:'Daisy',img:'assets/dog4.png',state:'published',status:'Published',detail:'Shelter website live',updated:'Aug 7'}
  ];
  if(state.publishFilter!=='all') rows=rows.filter(r=>r.state===state.publishFilter);
  return `<section class="content">
    ${pageHeader('ADOPTION CHANNELS','Publishing','Publish approved profiles to the shelter website. Partner channels are shown as planned integrations.',`<button class="secondary-button" data-action="sync-status">↻ Sync status</button><button class="primary-button" data-action="open-channel-settings">Manage channels</button>`)}
    <div class="channel-summary"><button data-action="channel-summary"><span class="channel-logo website">S</span><span><b>Shelter website</b><small>24 live</small></span>${statusPill('ready','Available')}<i>›</i></button><button class="planned" disabled><span class="channel-logo petfinder">P</span><span><b>Petfinder</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}<i>›</i></button><button class="planned" disabled><span class="channel-logo adoptapet">A</span><span><b>Adopt a Pet</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}<i>›</i></button></div>
    <section class="surface table-surface"><div class="table-toolbar"><div class="filter-tabs">${[['all','All'],['ready','Ready'],['blocked','Blocked'],['published','Published']].map(([id,l])=>`<button class="${state.publishFilter===id?'active':''}" data-publish-filter="${id}">${l}</button>`).join('')}</div><button class="filter-button" data-action="publishing-filter">☷ Filters</button></div><div class="publish-list">${rows.map(r=>`<div class="publish-row"><div class="animal-cell"><img src="${r.img}" alt=""><span><b>${r.name}</b><small>${r.detail}</small></span></div>${statusPill(r.state,r.status)}<div class="channel-dots"><i class="on">S</i><i class="planned">P</i><i class="planned">A</i></div><span>${r.updated}</span><button class="${r.state==='ready'?'primary-button':'secondary-button'}" data-publish-action="${r.id}">${r.state==='ready'?'Preview & publish':'Open profile'}</button><button class="kebab" data-publish-menu="${r.id}">•••</button></div>`).join('')}</div></section>
  </section>`;
}

function settingsView() {
  return `<section class="content settings-content">
    ${pageHeader('WORKSPACE','Settings','Set the organization rules that drive readiness, updates, and publishing.',`<button class="primary-button" data-action="save-settings">${state.settingsSaved?'Saved ✓':'Save changes'}</button>`)}
    <div class="settings-layout"><nav class="settings-nav">${[['readiness','Readiness checklist'],['forms','Update forms'],['channels','Publishing channels'],['team','Team & roles'],['notifications','Notifications']].map(([id,l])=>`<button class="${state.settingsTab===id?'active':''}" data-settings-tab="${id}">${l}<span>›</span></button>`).join('')}</nav><section class="surface settings-panel">${settingsPanel()}</section></div>
  </section>`;
}

function settingsPanel() {
  if(state.settingsTab==='readiness') return `<div class="section-head"><div><p class="kicker">ORGANIZATION RULES</p><h2>Readiness checklist</h2><p>Petify marks an animal ready when every required section is complete and current.</p></div><button class="secondary-button" data-action="add-check">＋ Add section</button></div><div class="settings-list">${[['Health','Required · Current within 30 days',true],['Behavior','Required · Current within 14 days',true],['Media','At least 3 public photos',true],['Documents','All required documents approved',true],['Public profile','Description and adoption contact',true]].map(([a,b,on])=>`<div><span class="drag">⋮⋮</span><span><b>${a}</b><small>${b}</small></span><button class="toggle ${on?'on':''}" data-action="toggle-setting"><i></i></button><button class="kebab" data-action="edit-setting">•••</button></div>`).join('')}</div><div class="settings-note"><span>i</span><p><b>What “Ready” means</b>Ready is an operational publishing status. Medical and legal decisions remain with your team.</p></div>`;
  if(state.settingsTab==='forms') return `<div class="section-head"><div><p class="kicker">FOSTER EXPERIENCE</p><h2>Weekly check-in</h2><p>Choose the questions a foster sees from a secure mobile link.</p></div><button class="primary-button" data-action="preview-foster-form">Preview form</button></div><div class="settings-list">${['Quick status','Health changes','Behavior changes','Medication','Weight','Photos & video','Additional notes'].map((x,i)=>`<div><span class="drag">⋮⋮</span><span><b>${x}</b><small>${i===0?'Always visible':'Shown when relevant'}</small></span><button class="toggle ${i!==4?'on':''}" data-action="toggle-setting"><i></i></button><button class="kebab" data-action="edit-setting">•••</button></div>`).join('')}</div>`;
  if(state.settingsTab==='channels') return `<div class="section-head"><div><p class="kicker">PUBLISHING CHANNELS</p><h2>Publishing channels</h2><p>The shelter website is available now. Partner channels require future integration agreements.</p></div></div><div class="settings-list channel-settings"><div><span class="channel-logo website">S</span><span><b>Shelter website</b><small>petnow-demo.org/adopt</small></span>${statusPill('ready','Available')}<button class="secondary-button" data-action="channel-configure">Configure</button></div><div class="planned"><span class="channel-logo petfinder">P</span><span><b>Petfinder</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}<button class="secondary-button" disabled>Not available</button></div><div class="planned"><span class="channel-logo adoptapet">A</span><span><b>Adopt a Pet</b><small>Partner integration required</small></span>${statusPill('neutral','Planned')}<button class="secondary-button" disabled>Not available</button></div></div>`;
  return `<div class="section-head"><div><p class="kicker">WORKSPACE SETTINGS</p><h2>${state.settingsTab==='team'?'Team & roles':'Notifications'}</h2><p>${state.settingsTab==='team'?'Control who can review records and publish profiles.':'Choose which events your team receives by email.'}</p></div><button class="primary-button" data-action="invite-team">${state.settingsTab==='team'?'+ Invite member':'Save preferences'}</button></div><div class="settings-list">${(state.settingsTab==='team'?['Alex Rivera · Administrator','Morgan Kim · Reviewer','Sam Chen · Publisher']:['Overdue foster requests','New submissions','Readiness status changes','Publishing failures']).map(x=>`<div><span class="avatar">${x.split(' ').slice(0,2).map(y=>y[0]).join('')}</span><span><b>${x}</b><small>${state.settingsTab==='team'?'Active':'Email + in-app'}</small></span><button class="toggle on" data-action="toggle-setting"><i></i></button></div>`).join('')}</div>`;
}

function fosterFormView() {
  return `<section class="foster-form-page"><div class="foster-brand"><span class="brand-mark"><b></b></span><strong>petnow</strong><small>Secure foster check-in · No account required</small></div>${state.fosterSubmitted?fosterSubmittedView():fosterQuestionView()}</section>`;
}
function fosterQuestionView() { return `<div class="foster-form-card"><div class="foster-pet"><img src="assets/dog1.png" alt="Milo"><span><small>SECOND CHANCE RESCUE</small><h1>Milo’s weekly check-in</h1><p>For Jamie · Due today</p></span></div><div class="autosave"><i></i> Draft saved automatically</div><div class="question"><span>1</span><div><h2>How is Milo doing this week?</h2><p>Choose the closest answer. We’ll only ask for details when needed.</p><div class="choice-grid"><button class="selected" data-form-choice="same"><b>Doing well</b><small>No urgent concerns</small></button><button data-form-choice="change"><b>Something changed</b><small>Health or behavior</small></button><button data-form-choice="help"><b>Needs attention</b><small>Please contact me</small></button></div></div></div><div class="question"><span>2</span><div><h2>Tell us about any behavior changes</h2><textarea>Relaxed with our two resident dogs and has started initiating play.</textarea></div></div><div class="question"><span>3</span><div><h2>Add recent photos</h2><button class="upload-zone" data-action="foster-upload"><b>＋ Choose photos or video</b><small>JPG, PNG, MP4 · Up to 10 files</small></button>${state.uploads?`<div class="upload-preview">${['assets/dog1.png','assets/milo-home.jpg','assets/milo-yard.jpg'].slice(0,state.uploads).map((src)=>`<div><img src="${src}" alt="Milo foster update"><span>✓ Uploaded</span></div>`).join('')}</div>`:''}</div></div><label class="consent"><input type="checkbox" checked> Second Chance Rescue may use these photos on Milo’s public adoption profile.</label><div class="foster-form-actions"><button class="secondary-button" data-action="save-foster-draft">Save & finish later</button><button class="primary-button" data-action="submit-foster">Send update</button></div><p class="form-help"><button data-action="contact-shelter">Need help? Contact your coordinator</button></p></div>`; }
function fosterSubmittedView() { return `<div class="foster-form-card success-screen"><span class="success-icon">✓</span><h1>Your update was sent</h1><p>Thanks, Jamie. Alex will review your changes before Milo’s record is updated.</p><div class="submission-summary"><img src="assets/dog1.png" alt="Milo"><span><b>Milo · Weekly check-in</b><small>Behavior change · 3 photos · Submitted just now</small></span></div><button class="primary-button full" data-action="return-staff">Return to staff demo</button><button class="text-button" data-action="edit-submission">Edit my response</button></div>`; }

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
  return `<button class="modal-close" data-action="close-modal">×</button><div class="intake-heading"><div><p class="kicker">NEW INTAKE</p><h2>Add an animal</h2><p>Create the record now. Complete the rest as care progresses.</p></div><b>Step ${step} of 3</b></div><div class="stepper">${[1,2,3].map((n)=>`<span class="${step>=n?'active':''}"><i>${step>n?'✓':n}</i><b>${['Animal','Intake','Initial state'][n-1]}</b></span>`).join('')}</div>${step===1?`<div class="form-grid"><label class="full"><span>Primary photo</span><button class="intake-photo ${state.intakePhoto?'has-photo':''}" data-action="intake-upload">${state.intakePhoto?'<img src="assets/dog4.png" alt="Coco"><b>Photo added</b><small>Click to replace</small>':'<b>＋ Add a photo</b><small>JPG or PNG · up to 10 MB</small>'}</button></label><label><span>Name or temporary name</span><input id="intake-name" value="Coco"></label><label><span>Species</span><select><option>Dog</option><option>Cat</option></select></label><label><span>Breed</span><input value="Mixed breed"></label><label><span>Sex</span><select><option>Female</option><option>Male</option><option>Unknown</option></select></label><label><span>Estimated age</span><input value="2 years"></label></div>`:step===2?`<div class="form-grid"><label><span>Intake type</span><select><option>Owner surrender</option><option>Stray</option><option>Transfer in</option></select></label><label><span>Date & time</span><input value="Aug 9, 2026 · 10:30 AM"></label><label><span>Source</span><input value="Community member"></label><label><span>Current location</span><select><option>Main shelter</option><option>Partner clinic</option></select></label><label class="full"><span>Intake notes</span><textarea rows="3">Friendly on intake. No visible injury. Medical check requested.</textarea></label></div>`:`<div class="form-grid"><label class="full choice-line"><span>Does Coco need immediate medical attention?</span><span><button class="segmented active" data-action="medical-no">No</button><button class="segmented" data-action="medical-yes">Yes</button></span></label><label class="full choice-line"><span>Does Coco need a foster placement?</span><span><button class="segmented" data-action="foster-no">No</button><button class="segmented active" data-action="foster-yes">Yes</button></span></label><label><span>Record owner</span><select><option>Alex Rivera</option><option>Morgan Kim</option></select></label><label><span>Priority</span><select><option>Normal</option><option>Urgent</option></select></label><div class="intake-result full"><span>✓</span><p><b>Ready to create Coco’s record</b>A five-section readiness checklist will be created automatically.</p></div></div>`}<div class="modal-actions"><button class="secondary-button" data-action="${step===1?'close-modal':'intake-back'}">${step===1?'Cancel':'Back'}</button><span></span><button class="primary-button" data-action="${step===3?'save-intake':'intake-next'}">${step===3?'Save & open record':'Continue'}</button></div>`;
}

function placementModal() { return `<button class="modal-close" data-action="close-modal">×</button><p class="kicker">FOSTER PLACEMENT</p><h2>Place Coco with a foster</h2><p>Connect the animal, foster, coordinator, and update schedule.</p><div class="form-grid"><label class="full"><span>Foster person</span><select><option>Casey Brooks · Available</option><option>Riley Park · Available</option></select></label><label><span>Start date</span><input value="Aug 10, 2026"></label><label><span>Expected end date</span><input value="Sep 10, 2026"></label><label><span>Coordinator</span><select><option>Alex Rivera</option></select></label><label><span>Check-in schedule</span><select><option>Weekly</option><option>Every 2 weeks</option></select></label><div class="intake-result full"><span>↻</span><p><b>First check-in: Aug 16</b>Casey will receive a secure form link. Reminder after 2 days.</p></div></div><div class="modal-actions"><button class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" data-action="save-placement">Confirm placement</button></div>`; }
function requestModal() { return `<button class="modal-close" data-action="close-modal">×</button><p class="kicker">MILO · JAMIE LEE</p><h2>Request a foster update</h2><p>Jamie gets a secure mobile link. No account or app is required.</p><div class="form-grid"><label class="full"><span>Update form</span><select><option>Weekly check-in</option></select></label><label><span>Send now</span><select><option>Now · Email + SMS</option><option>Schedule for tomorrow</option></select></label><label><span>Due date</span><input value="Aug 12, 2026"></label><label><span>Automatic reminder</span><select><option>After 2 days · max 2</option></select></label><label><span>Coordinator</span><select><option>Alex Rivera</option></select></label><fieldset class="full"><legend>Ask for</legend><div class="check-options">${['Health','Behavior','Medication','Weight','Photos','Notes'].map((x,i)=>`<label><input type="checkbox" ${i!==3?'checked':''}> ${x}</label>`).join('')}</div></fieldset><button class="message-preview full" data-action="preview-message"><small>SMS + EMAIL PREVIEW</small><b>How is Milo doing this week?</b><span>See the exact message, secure link, and reminder schedule Jamie receives.</span><i>Open preview ›</i></button></div><div class="modal-actions"><button class="secondary-button" data-action="copy-link">Copy link</button><span></span><button class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" data-action="send-request">Send request</button></div>`; }
function assignModal() { return `<button class="modal-close" data-action="close-modal">×</button><p class="kicker">ASSIGN NEXT ACTION</p><h2>Choose an owner</h2><div class="form-grid"><label class="full"><span>Task</span><input value="Review Milo’s foster update"></label><label><span>Owner</span><select><option>Morgan Kim</option><option>Alex Rivera</option><option>Sam Chen</option></select></label><label><span>Due date</span><input value="Today"></label><label class="full"><span>Note</span><textarea rows="3">Please compare the behavior change before approval.</textarea></label></div><div class="modal-actions"><button class="secondary-button" data-action="close-modal">Cancel</button><button class="primary-button" data-action="confirm-assign">Assign task</button></div>`; }

function renderDrawer() {
  if(state.drawer==='message-preview') return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer message-drawer" onclick="event.stopPropagation()"><button class="modal-close" data-action="close-drawer">×</button><p class="kicker">RECIPIENT PREVIEW</p><h2>What Jamie receives</h2><p>Preview the request before sending it by SMS and email.</p><div class="message-tabs"><button class="${state.messageChannel==='sms'?'active':''}" data-message-channel="sms">SMS</button><button class="${state.messageChannel==='email'?'active':''}" data-message-channel="email">Email</button></div>${state.messageChannel==='sms'?smsPreview():emailPreview()}<div class="delivery-details"><div><span>↻</span><p><b>Automatic follow-up</b>Reminder after 2 days if Jamie has not submitted. Maximum 2 reminders.</p></div><div><span>⌁</span><p><b>Secure individual link</b>No account required. The link opens only Milo’s requested check-in form.</p></div></div><div class="preview-flow"><small>AFTER JAMIE SUBMITS</small><div><span><i>1</i><b>Submitted</b></span><em>›</em><span><i>2</i><b>Needs review</b></span><em>›</em><span><i>3</i><b>Approved record</b></span></div><p>The submission does not overwrite Milo’s official record until a staff member approves it.</p></div><button class="primary-button full" data-action="return-request">Back to request</button><button class="text-button centered" data-action="open-form-from-preview">Open Jamie’s form preview</button></aside></div>`;
  if(state.drawer==='guide') return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer guide-drawer" onclick="event.stopPropagation()"><button class="modal-close" data-action="close-drawer">×</button><p class="kicker">DEMO PRESENTER MODE</p><h2>Choose the story you are demonstrating</h2><p>Each tour resets the sample data, opens the right starting screen, and provides a talk track with the exact next click.</p><div class="tutorial-picker"><button class="tutorial-option" data-action="start-tutorial" data-tutorial="a"><small>MATERIAL A · 12 STEPS</small><b>Which dogs are ready to go?</b><span>Readiness overview → blocker → approval → Ready → publish</span><em>Start Demo A ›</em></button><button class="tutorial-option" data-action="start-tutorial" data-tutorial="b"><small>MATERIAL B · 20 STEPS</small><b>Stop texting your fosters for updates</b><span>Request → automatic follow-up → foster response → approval → publish</span><em>Start Demo B ›</em></button></div><div class="guide-note"><b>Presenter tip</b><p>Read the talk track, then use only the highlighted control. End tour or press Esc at any time.</p></div></aside></div>`;
  if(state.drawer==='notifications') return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer" onclick="event.stopPropagation()"><button class="modal-close" data-action="close-drawer">×</button><p class="kicker">NOTIFICATIONS</p><h2>What changed</h2><div class="notification-list">${[['New foster update','Jamie submitted Milo’s weekly check-in','12 min'],['Profile published','Daisy is live on the shelter website','42 min'],['Profile ready','Luna completed all readiness checks','1 hr']].map(([a,b,c])=>`<button data-action="notification-item"><i></i><span><b>${a}</b><small>${b}</small></span><time>${c}</time></button>`).join('')}</div><button class="text-button centered" data-action="mark-read">Mark all as read</button></aside></div>`;
  return `<div class="drawer-backdrop" data-action="close-drawer"><aside class="drawer" onclick="event.stopPropagation()"><button class="modal-close" data-action="close-drawer">×</button><p class="kicker">DETAILS</p><h2>Prepared content</h2><p>This interaction is represented in the pretotype.</p></aside></div>`;
}

function smsPreview() { return `<div class="phone-preview"><div class="phone-preview-bar"><span>‹</span><div><b>Second Chance Rescue</b><small>Text message</small></div><i>•••</i></div><div class="message-time">Today · 10:30 AM</div><div class="sms-bubble">Hi Jamie! How is Milo doing this week?<br><br>Share any health or behavior changes and add recent photos by Aug 12. It takes about 3 minutes.<br><br><strong>petnow.link/milo-8K4P</strong><br><br><small>Reply STOP to opt out.</small></div><div class="sms-input">Text message <span>↑</span></div></div>`; }
function emailPreview() { return `<div class="email-preview"><div class="email-meta"><span><small>FROM</small><b>Second Chance Rescue</b></span><span><small>TO</small><b>Jamie Lee</b></span></div><div class="email-body"><span class="brand-mark"><b></b></span><p class="kicker">MILO’S WEEKLY CHECK-IN</p><h3>How is Milo doing this week?</h3><p>Please share any health or behavior changes and add recent photos by <b>August 12</b>. Most updates take about 3 minutes.</p><button data-action="open-form-from-preview">Share Milo’s update</button><small>No account or app is required. This secure link is unique to Milo.</small></div></div>`; }

function renderTutorial() {
  const steps=tutorialSteps();
  const tutorial=TUTORIALS[state.tutorialId];
  const step=steps[state.tutorialStep];
  if(!step) return '';
  const final=step.kind==='finish';
  const interactive=!['manual','finish'].includes(step.kind);
  return `<div class="tutorial-layer" role="dialog" aria-modal="true" aria-label="Interactive product tutorial">
    <div class="tutorial-dim tutorial-dim-top"></div><div class="tutorial-dim tutorial-dim-left"></div><div class="tutorial-dim tutorial-dim-right"></div><div class="tutorial-dim tutorial-dim-bottom"></div>
    ${interactive?'<button class="tutorial-highlight interactive" data-action="tutorial-target" aria-label="Use highlighted control"></button>':'<div class="tutorial-highlight" aria-hidden="true"></div>'}
    <section class="tutorial-card">
      <div class="tutorial-card-head"><span>${tutorial.label}</span><button data-action="exit-tutorial" aria-label="Exit tutorial">×</button></div>
      <small>STEP ${state.tutorialStep+1} OF ${steps.length}</small><h3>${step.title}</h3><p>${step.text}</p>
      <div class="tutorial-card-actions"><button class="tutorial-exit" data-action="exit-tutorial">End tour</button>${step.kind==='manual'?'<button class="tutorial-next" data-action="tutorial-next">Continue</button>':final?'<button class="tutorial-next" data-action="finish-tutorial">Finish tutorial</button>':'<span>Click the highlighted control</span>'}</div>
    </section>
  </div>`;
}

function positionTutorial() {
  if(state.tutorialStep===null) return;
  const step=tutorialSteps()[state.tutorialStep];
  const layer=document.querySelector('.tutorial-layer');
  const target=step&&document.querySelector(step.selector);
  if(!layer||!target) return;
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
  if(tutorialMatches(kind,value)) state.tutorialStep=Math.min(steps.length-1,state.tutorialStep+1);
}

function render() {
  const views = {dashboard:dashboardView,animals:animalsView,animal:animalView,updates:updatesView,fosters:fostersView,publishing:publishingView,settings:settingsView,fosterform:fosterFormView,profilepreview:profilePreviewView};
  app.innerHTML = state.view==='fosterform'
    ? `${fosterFormView()}${state.tutorialStep!==null?renderTutorial():''}${state.toast?`<div class="toast"><span>✓</span>${state.toast}</div>`:''}`
    : layout((views[state.view] || dashboardView)());
  bind();
  if(state.tutorialStep!==null){requestAnimationFrame(positionTutorial);clearTimeout(tutorialPositionTimer);tutorialPositionTimer=setTimeout(positionTutorial,180);}
}

let toastTimer;
let tutorialPositionTimer;
function toast(message) { state.toast=message; render(); clearTimeout(toastTimer); toastTimer=setTimeout(()=>{state.toast='';render();},2300); }
function openAnimal(id,tab='overview') { state.animalId=id; state.detailTab=tab; state.view='animal'; state.modal=null; render(); }
function genericPrepared(message='Prepared content opened') { toast(message); }

function bind() {
  document.querySelectorAll('[data-view]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const value=el.dataset.view;if(state.tutorialStep!==null&&!tutorialMatches('view',value))return;state.view=value;state.modal=null;state.drawer=null;if(el.dataset.setFilter)state.animalFilter=el.dataset.setFilter;advanceTutorial('view',value);render();}));
  document.querySelectorAll('[data-open-animal]').forEach(el=>el.addEventListener('click',e=>{if(e.target.closest('input,button'))return;const value=el.dataset.openAnimal;if(state.tutorialStep!==null&&!tutorialMatches('animal',value))return;state.animalId=value;state.detailTab='overview';state.view='animal';state.modal=null;advanceTutorial('animal',value);render();}));
  document.querySelectorAll('[data-detail-tab]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();state.detailTab=el.dataset.detailTab;render();}));
  document.querySelectorAll('[data-animal-filter]').forEach(el=>el.addEventListener('click',()=>{const value=el.dataset.animalFilter;if(state.tutorialStep!==null&&!tutorialMatches('animal-filter',value))return;state.animalFilter=value;advanceTutorial('animal-filter',value);render();}));
  document.querySelectorAll('[data-update-filter]').forEach(el=>el.addEventListener('click',()=>{state.updateFilter=el.dataset.updateFilter;render();}));
  document.querySelectorAll('[data-publish-filter]').forEach(el=>el.addEventListener('click',()=>{state.publishFilter=el.dataset.publishFilter;render();}));
  document.querySelectorAll('[data-select-update]').forEach(el=>el.addEventListener('click',()=>{state.selectedUpdate=el.dataset.selectUpdate;render();}));
  document.querySelectorAll('[data-settings-tab]').forEach(el=>el.addEventListener('click',()=>{state.settingsTab=el.dataset.settingsTab;render();}));
  document.querySelectorAll('[data-message-channel]').forEach(el=>el.addEventListener('click',()=>{const value=el.dataset.messageChannel;if(state.tutorialStep!==null&&!tutorialMatches('channel',value))return;state.messageChannel=value;advanceTutorial('channel',value);render();}));
  document.querySelectorAll('[data-filter-jump]').forEach(el=>el.addEventListener('click',()=>{const f=el.dataset.filterJump;if(f==='review'){state.view='updates';state.updateFilter='new';}else if(f==='published'){state.view='publishing';state.publishFilter='published';}else{state.view='animals';state.animalFilter=f==='new'?'all':f;}render();}));
  document.querySelectorAll('[data-channel]').forEach(el=>el.addEventListener('change',()=>{state.channels[el.dataset.channel]=el.checked;render();}));
  const search=document.querySelector('#global-search'); if(search){search.addEventListener('input',e=>{state.search=e.target.value;});search.addEventListener('keydown',e=>{if(e.key==='Enter'){state.view='animals';render();}});}
  document.querySelectorAll('[data-action]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const action=el.dataset.action;const tutorialControl=['exit-tutorial','tutorial-next','finish-tutorial','tutorial-target'].includes(action);if(state.tutorialStep!==null&&!tutorialControl&&!tutorialMatches('action',action))return;handleAction(action,el);}));
  document.querySelectorAll('[data-next-action]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();const id=el.dataset.nextAction;if(id==='milo'&&!state.updateApproved){state.selectedUpdate='milo';state.view='updates';}else if(id==='coco')openAnimal('coco');else if(id==='luna'){state.view='profilepreview';}else openAnimal(id);render();}));
  document.querySelectorAll('[data-publish-action]').forEach(el=>el.addEventListener('click',()=>{const id=el.dataset.publishAction;if(id==='milo'&&state.miloReady){state.animalId='milo';state.view='profilepreview';render();}else if(id==='luna'||id==='daisy'){state.animalId=id;state.view='profilepreview';render();}else openAnimal(id);}));
  document.querySelectorAll('[data-exception]').forEach(el=>el.addEventListener('click',()=>{const x=el.dataset.exception;if(x==='assign'){state.modal='assign';render();}else{state.view=x;if(x==='animals')state.animalFilter='stale';render();}}));
  document.querySelectorAll('[data-row-menu],[data-foster-menu],[data-publish-menu]').forEach(el=>el.addEventListener('click',e=>{e.stopPropagation();state.drawer='more';render();}));
  document.querySelectorAll('[data-form-choice]').forEach(el=>el.addEventListener('click',()=>{const value=el.dataset.formChoice;if(state.tutorialStep!==null&&!tutorialMatches('choice',value))return;document.querySelectorAll('[data-form-choice]').forEach(x=>x.classList.remove('selected'));el.classList.add('selected');advanceTutorial('choice',value);state.toast='Response saved automatically';render();clearTimeout(toastTimer);toastTimer=setTimeout(()=>{state.toast='';render();},2300);}));
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
    case 'exit-tutorial': state.tutorialId=null;state.tutorialStep=null;render();break;
    case 'tutorial-target': document.querySelector(tutorialSteps()[state.tutorialStep]?.selector)?.click();break;
    case 'tutorial-next': state.tutorialStep=Math.min(tutorialSteps().length-1,state.tutorialStep+1);render();break;
    case 'finish-tutorial': {const name=TUTORIALS[state.tutorialId]?.name||'Demo';state.tutorialId=null;state.tutorialStep=null;toast(`${name} · tutorial complete`);break;}
    case 'notifications': drawerOpen('notifications');break;
    case 'reset-demo': modalOpen('confirm-reset');break;
    case 'confirm-reset': state=INITIAL();toast('Demo reset to its starting state');break;
    case 'intake-upload': state.intakePhoto=true;render();break;
    case 'intake-next': state.intakeStep=Math.min(3,state.intakeStep+1);render();break;
    case 'intake-back': state.intakeStep=Math.max(1,state.intakeStep-1);render();break;
    case 'save-intake': state.cocoCreated=true;state.animalId='coco';state.detailTab='overview';state.view='animal';state.modal=null;toast('Coco’s record and readiness checklist were created');break;
    case 'place-foster': modalOpen('placement');break;
    case 'save-placement': state.cocoPlaced=true;state.modal=null;toast('Coco was placed with Casey · first check-in scheduled');break;
    case 'request-update': modalOpen('request');break;
    case 'preview-message': state.messageChannel='sms';drawerOpen('message-preview');break;
    case 'return-request': state.drawer=null;render();break;
    case 'open-form-from-preview': state.drawer=null;state.modal=null;state.fosterSubmitted=false;state.fosterSubmittedNow=false;state.uploads=0;state.view='fosterform';render();break;
    case 'send-request': state.requestSent=true;state.requestOpened=false;state.fosterSubmitted=false;state.fosterSubmittedNow=false;state.modal=null;state.view='updates';toast('Secure update link sent to Jamie by email and SMS');break;
    case 'preview-foster-form': state.drawer=null;state.fosterSubmitted=false;state.fosterSubmittedNow=false;state.uploads=0;state.view='fosterform';render();break;
    case 'start-tutorial': {const id=el.dataset.tutorial;state=INITIAL();state.tutorialId=id;state.tutorialStep=0;state.view=id==='a'?'animals':'updates';if(id==='b'){state.requestSent=false;state.fosterSubmitted=false;}render();break;}
    case 'copy-link': navigator.clipboard?.writeText('https://petnow.link/milo-checkin');toast('Secure foster link copied');break;
    case 'foster-upload': state.uploads=3;toast('3 photos uploaded');break;
    case 'save-foster-draft': toast('Draft saved · Jamie can return from the same link');break;
    case 'submit-foster': state.fosterSubmitted=true;state.fosterSubmittedNow=true;state.uploads=3;render();break;
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
    case 'apply-filters': state.animalFilter='stale';state.modal=null;toast('2 filters applied');break;
    case 'clear-filters': state.animalFilter='all';state.modal=null;render();break;
    case 'clear-search': state.search='';state.animalFilter='all';render();break;
    case 'save-settings': state.settingsSaved=true;toast('Workspace settings saved');break;
    case 'toggle-setting': el.classList.toggle('on');toast('Setting updated');break;
    case 'open-channel-settings': state.view='settings';state.settingsTab='channels';render();break;
    case 'sync-status': toast('Channel status synced just now');break;
    case 'refresh-activity': toast('Activity refreshed');break;
    case 'mark-read': state.drawer=null;toast('All notifications marked as read');break;
    case 'open-nav': document.querySelector('.sidebar')?.classList.toggle('mobile-open');break;
    case 'account-menu': drawerOpen('more');break;
    case 'select-all': document.querySelectorAll('[data-row-check]').forEach(x=>x.checked=el.checked);toast(el.checked?'All visible animals selected':'Selection cleared');break;
    case 'toggle-media': el.classList.toggle('selected');toast(el.classList.contains('selected')?'Photo approved for public use':'Photo removed from public profile');break;
    case 'medical-no': case 'medical-yes': case 'foster-no': case 'foster-yes': document.querySelectorAll('.choice-line .segmented').forEach(x=>x.classList.remove('active'));el.classList.add('active');break;
    case 'export-report': case 'export-activity': toast('Demo export prepared');break;
    case 'activity-log': state.animalId='milo';state.detailTab='activity';state.view='animal';render();break;
    case 'notification-item': state.drawer=null;state.view='updates';render();break;
    case 'new-placement': modalOpen('placement');break;
    default: genericPrepared(`${(el?.innerText||'Control').trim().split('\n')[0]} · prepared interaction opened`);
  }
  if(shouldAdvance&&action!=='publish-now'&&state.tutorialStep!==null){advanceTutorial('action',action);render();}
}

window.addEventListener('resize',()=>{if(state.tutorialStep!==null)positionTutorial();});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&state.tutorialStep!==null){state.tutorialId=null;state.tutorialStep=null;render();}});

render();
