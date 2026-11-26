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

## Preview — PR #36 (M3 KV / Brand PMM / Knowledge Loop)

A separate review version of [source PR #36](https://github.com/ptevsoh-alt/Enola-data/pull/36), stacked on source PR #33, corrects the inaccurate CSS-generated KV composites and adds evidence-led D+7 / D+30 learning:

- [M3 visual strategy and campaign channel adaptation](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr36/#/case/gtm/m3-campaign-kv)
- [D+7 / D+30 marketing data and Knowledge Loop](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr36/#/case/gtm/launch-d7-d30)
- [M3 GTM / PMM and integrated campaign](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr36/#/case/gtm/campaign-architecture)
- [Complete isolated PR #36 review](https://ptevsoh-alt.github.io/Enola-data-Portfolio/preview/pr36/)

Pinned source commit: `63105a73e84581cb09a410828e9761d2cd52e07a`. This review preview **does not** publish the private R8 KV source PNGs found in a non-shared Drive folder; it displays only already-public product visuals and truthful content/planning roles. The genuine R8 16:9 / 4:5 / 9:16 files were separately delivered to the owner as an offline review package, requiring product-truth, release-status and publication-rights confirmation before public use.

The official root remains pinned at `7c554849b3a5b7b6736c01d885497adba407187b`; the earlier `/preview/pr32/` and `/preview/pr33/` versions remain intact. This preview is `noindex,nofollow` and does not merge any source Draft PR. Real Chrome validates desktop and mobile and checks the private-media boundary before Pages deployment.

## Deployment

Pushes to this repository's `main` run `.github/workflows/deploy-preview.yml`. The workflow checks out the **exact pinned source commit** above, validates all source tests, renders desktop/mobile routes in real Chrome and only then publishes `source/site/` through GitHub Pages. A manual dispatch can optionally supply an alternative `source_ref`; no manual override is used by the standard push deployment.

## Integrity

The portfolio source `main` and public deployment repository are distinct. A source merge does not silently change the public site; publishing requires updating this exact source ref. Private material, credentials and non-consented personal information must never be added to the public source artifacts.
