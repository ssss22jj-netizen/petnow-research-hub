# Reddit shelter/rescue archive harvest — blocked run

## Outcome

Raw archive objects could not be written safely in this run. No quotes were selected or reconstructed from rendered HTML.

## Source/access findings

- Arctic Shift root and search UI were accessible in the attached browser.
- The search UI successfully rendered archived results for `AnimalShelterStories` when opened with `fun=posts_search&subreddit=AnimalShelterStories&limit=5&sort=asc`; the first rendered result was dated `2015-05-30T15:03:37Z`.
- Direct navigation to `/api/posts/search?subreddit=AnimalShelterStories&limit=5` was blocked by the browser-control security layer before an HTTP response was exposed (`net::ERR_BLOCKED_BY_CLIENT`). Adding `meta-app=search-tool` produced the same browser-layer block.
- The browser's page-inspection context exposed neither `fetch` nor `XMLHttpRequest`, so the JSON response could not be read from page context.
- Arctic Shift's search UI internally uses `/api/{posts|comments}/search` and supports result paging with `after`/`before`. Its download button creates a JSON blob in the page, but the attached browser did not expose the resulting download as a readable file event.
- Arctic Shift's `/download-tool` was accessible, but automated input did not activate its validation/start state, so its File System Access workflow could not be used to save JSONL into this working directory.

## Step 1 parameter probes

No keyword-filter syntax was claimed as working because the raw API status/body could not be observed directly.

| Probe | Result |
| --- | --- |
| `/api/posts/search?subreddit=AnimalShelterStories&limit=5` | Browser-layer block before HTTP status was exposed |
| `/api/posts/search?subreddit=AnimalShelterStories&limit=5&meta-app=search-tool` | Browser-layer block before HTTP status was exposed |
| Search UI: `fun=posts_search&subreddit=AnimalShelterStories&limit=5&sort=asc` | UI rendered five archived posts; raw JSON was not exportable to the working directory |

## Pull summary

| Subreddit | Posts pulled | Comments pulled | Quotes kept |
| --- | ---: | ---: | ---: |
| AnimalShelterStories | 0 | 0 | 0 |
| AnimalRescue | 0 | 0 | 0 |
| rescuedogs | 0 | 0 | 0 |
| shelterdogs | 0 | 0 | 0 |
| AnimalWelfare | 0 | 0 | 0 |
| AnimalsBeingRescued | 0 | 0 | 0 |
| nonprofit | 0 | 0 | 0 |

## Category and perspective counts

No quotes retained; all category and perspective counts are zero.

## Date ranges

No complete subreddit archive was pulled, so no actual coverage range can be reported.

## What we did NOT find

This run did not produce an evidence base from which absence or scarcity of `A_status`, `B_response`, `C_documents`, `D_postadoption`, or `E_tools` material could be assessed. Reporting category scarcity from the few rendered UI records would be unsupported.
