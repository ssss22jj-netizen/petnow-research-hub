# Reddit 원본 아카이브 위치

대용량 원본(`comments_*.jsonl`, `posts_*.jsonl`)은 VSCode 검색·git 추적 부하를 피해
워크스페이스 밖으로 옮겼다. 삭제하지 않았다.

- 위치: `/Users/kaya/.local/share/petnow-reddit-archive/`
- 출처: Arctic Shift (Reddit 공개 아카이브 API), 2019-01-01 이후
- 용도: 인용문 원문 대조

## 수집 범위 (중요)

전량 수집이 아니다. `r/rescuedogs` 수집 도중 중단했다.

| 서브레딧 | 댓글 | 게시물 | 상태 |
|---|---:|---:|---|
| AnimalShelterStories | 60,295 | 4,821 | 완료 |
| AnimalRescue | 39,998 | 11,228 | 완료 |
| rescuedogs | 498,697 | 0 | **부분** (게시물 미수집) |
| shelterdogs | — | — | 미수집 |
| AnimalWelfare | — | — | 미수집 |

중단 사유: `r/rescuedogs`가 앞의 두 서브레딧 합계의 5배 규모인데 일반 반려인 커뮤니티라
운영자 발화 밀도가 낮다. 관련성 최상위인 `AnimalShelterStories`는 완료된 상태다.

## 대조 방법

```bash
grep -F "인용문 일부" /Users/kaya/.local/share/petnow-reddit-archive/comments_AnimalShelterStories.jsonl
```
