# Enola Data — Public Portfolio

This repository publishes the public GitHub Pages portfolio from the validated source in [ptevsoh-alt/Enola-data](https://github.com/ptevsoh-alt/Enola-data).

- Portfolio: https://ptevsoh-alt.github.io/Enola-data-Portfolio/
- Independent case review: https://ptevsoh-alt.github.io/Enola-data-Portfolio/review/
- Source: https://github.com/ptevsoh-alt/Enola-data
- Deployed source commit (merged main on 2026-11-25): `7c554849b3a5b7b6736c01d885497adba407187b`
- Consolidated source PRs: [#31](https://github.com/ptevsoh-alt/Enola-data/pull/31) (recruiter copy / source CI), [#28](https://github.com/ptevsoh-alt/Enola-data/pull/28), [#29](https://github.com/ptevsoh-alt/Enola-data/pull/29) and [#30](https://github.com/ptevsoh-alt/Enola-data/pull/30)
- M3 employer review: https://ptevsoh-alt.github.io/Enola-data-Portfolio/#/case/gtm/gtm-positioning-decision

## Public review preview — PR #32 (not merged)

A separate, **noindex** review copy of [Brand PR / Campaign creative and management PR #32](https://github.com/ptevsoh-alt/Enola-data/pull/32) is available at:

- [Preview portfolio home](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr32/)
- [Brand PR / Partnerships case](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr32/#/case/brand/pr-project)
- [Campaign Creative Adaptation / Management](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr32/#/case/gtm/campaign-architecture)

The root portfolio still uses validated source commit `7c554849b3a5b7b6736c01d885497adba407187b`; the review copy is built from PR #32 commit `4f920656c4edfa37c8ddc415624e082831d8ec51`. Both are copied independently into one Pages artifact, with the preview assets and routes kept under `/preview/pr32/`. Passing CI and deployment do **not** merge the source Draft PR.

Before Pages upload, the workflow tests both sources, runs Chrome QA (desktop/mobile) and checks the nested public URL path and asset integrity. Preview HTML is marked `noindex,nofollow`; the URL is publicly reachable and should not contain private information.

## Preview — PR #33 (stacked Video/IMC / Paid / Lifecycle)

A new isolated preview of [source PR #33](https://github.com/ptevsoh-alt/Enola-data/pull/33), stacked on source PR #32, is available for content review:

- [Video Projects: Brand / IMC / Paid / Lifecycle](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr33/#/case/creative/video-projects)
- [M3 Campaign: reciprocal creative adaptation](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr33/#/case/gtm/campaign-architecture)
- [Brand PR: same inherited PR #32 version](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr33/#/case/brand/pr-project)
- [Full standalone review portfolio](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr33/)

Pinned preview commit: `7172e68908025e304c76f589f7f6576dccd20664`. The public root remains at `7c554849b3a5b7b6736c01d885497adba407187b`, and the separate PR #32 preview remains under `/preview/pr32/`. This deploy does not merge source PR #32 or PR #33. Pages previews are marked `noindex,nofollow` and require no login, but are publicly accessible.

## Preview — PR #37 (M3 / Brand PMM / Knowledge Loop only)

This isolated review is based on [source PR #37](https://github.com/ptevsoh-alt/Enola-data/pull/37), stacked on source PR #36 (which itself includes PR #33 and #32). It **removes the M3 KV chapter entirely**, and **removes the D+7 / D+30 fixed review template** across the case, summaries and review links. The archived PR #36 KV preview is intentionally **not republished**.

- [M3 Knowledge Loop — evidence, diagnosis and next marketing decisions](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr37/#/case/gtm/launch-knowledge-loop)
- [M3 Brand / PMM product positioning and campaign roles](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr37/#/case/gtm/gtm-positioning-decision)
- [Complete PR #37 review](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr37/)

Pinned source commit: `5213c2a21578186ceba70079fde1175504a07107`. The [Growth Knowledge Loop Registry](https://github.com/ptevsoh-alt/enola-marketing-skills/blob/main/2026-07-22_%E5%B8%82%E5%9C%BA-skill/references/10-growth-knowledge-loop-registry.md) is the evidence/status model. The page presents a *candidate decision example*, not unverified M3 sales/advertising results, and does not publish private R8 KV materials.

The approved public root is unchanged and still pinned at `7c554849b3a5b7b6736c01d885497adba407187b`; `/preview/pr32/` and `/preview/pr33/` remain available. The source PR stays Draft, previews use `noindex,nofollow` and independently run desktop/mobile Chrome and nested route QA before Pages deploy.

## Deployment

Pushes to this repository's `main` run `.github/workflows/deploy-preview.yml`. The workflow checks out the **exact pinned source commit** above, validates all source tests, renders desktop/mobile routes in real Chrome and only then publishes `source/site/` through GitHub Pages. A manual dispatch can optionally supply an alternative `source_ref`; no manual override is used by the standard push deployment.

## Integrity

The portfolio source `main` and public deployment repository are distinct. A source merge does not silently change the public site; publishing requires updating this exact source ref. Private material, credentials and non-consented personal information must never be added to the public source artifacts.
