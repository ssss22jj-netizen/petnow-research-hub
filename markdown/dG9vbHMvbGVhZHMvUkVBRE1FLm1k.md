# 리드 프로파일 자동 갱신

리드 시트에 새 신청이 들어오면 조직을 조사해 [Track 2 리드 프로파일](../../deliverables/Track2_리드프로파일.md) 문서에 추가하고 리서치 허브에 배포한다.

## 구성

| 파일 | 역할 |
| --- | --- |
| `sync.py` | 리드 시트 → `analysis/raw/leads.json` 병합. 폼 값만 갱신하고 조사 결과는 건드리지 않음 |
| `research.py` | 미조사 리드를 `claude -p` 로 공개자료 조사. 출처 URL 없는 값은 저장하지 않음 |
| `../../site/build-leads.py` | `leads.json` → 마크다운 렌더 |
| `pipeline.sh` | 위 셋 + `site/deploy-github.sh` 를 순서대로 실행 |
| `kr.petnow.leads.plist` | launchd 스케줄 (09:30 · 21:30) |
| `../../apps-script/Leads.gs` *(랜딩 저장소)* | 시트를 읽기 전용 JSON 으로 내보내는 라우트 |

정본은 `analysis/raw/leads.json` 하나다. 마크다운을 직접 고치면 다음 실행에서 덮어쓰인다.

## 켜기 전 필요한 것

### 1. Apps Script 배포 *(카야·조니 확인 필요)*

랜딩 저장소의 `apps-script/Leads.gs` 와 `Code.gs` 2줄 수정이 라이브 웹앱에 반영되어야 한다. `doPost`(리드 수집)는 손대지 않았으나, 웹앱 재배포 자체가 라이브 동작이라 광고 트래픽이 적은 시간에 한다.

```
cd ~/Projects/petnow-shelter-landing/apps-script
clasp push
# Apps Script 편집기 → 배포 → 배포 관리 → 기존 배포 편집 → 새 버전 → 배포
# (/exec URL 은 유지된다. 새 배포를 만들면 URL 이 바뀌어 랜딩이 끊긴다)
```

### 2. Script Property

Apps Script 프로젝트 설정 → 스크립트 속성에 `LEADS_READ_TOKEN` 을 추가한다. 값은 임의의 긴 문자열. **속성이 없으면 라우트가 꺼져 있으므로 코드를 먼저 배포해도 안전하다.**

### 3. 로컬 설정 파일

```
mkdir -p ~/.config/petnow
cat > ~/.config/petnow/leads.env <<'EOF'
PETNOW_WEBAPP_URL=https://script.google.com/macros/s/AKfycbx.../exec
PETNOW_LEADS_TOKEN=<위에서 넣은 값>
EOF
chmod 600 ~/.config/petnow/leads.env
```

토큰은 저장소에 커밋하지 않는다. 응답에 신청자 이메일이 들어간다.

### 4. 스케줄 등록

```
cp tools/leads/kr.petnow.leads.plist ~/Library/LaunchAgents/
launchctl bootstrap gui/$(id -u) ~/Library/LaunchAgents/kr.petnow.leads.plist
```

## 손으로 돌리기

```
tools/leads/pipeline.sh                    # 전체
python3 tools/leads/sync.py                # 시트 병합만
python3 tools/leads/research.py --lead 13  # 특정 리드만 조사
python3 site/build-leads.py                # 렌더만
```

로그: `tmp/logs/leads.log`

## 멈추는 조건

- **조직명 충돌** — 시트의 새 조직명이 기존 리드와 비슷하면 합치지도 추가하지도 않고 종료코드 2로 멈춘다. 같은 곳인지 사람이 판단해야 한다
- **동일 조직 미확정** — 조사에서 대상 조직을 확정하지 못하면 결과를 저장하되 `미조사` 로 남긴다. 동명 단체가 흔해 잘못 붙으면 콜에서 틀린 전제를 말하게 된다
- **출처 없는 값** — 조사가 URL 을 대지 못한 항목은 버리고 `미확인` 에만 이름을 남긴다
- **변경 없음** — 문서에 실제 차이가 없으면 배포하지 않는다
