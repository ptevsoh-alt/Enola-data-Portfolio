# Enola Data — Public Portfolio

The **official portfolio** at [ptevsoh-alt.github.io/Enola-data-Portfolio](https://ptevsoh-alt.github.io/Enola-data-Portfolio/) is published from the validated `main` source of [ptevsoh-alt/Enola-data](https://github.com/ptevsoh-alt/Enola-data), pinned to the exact release commit.

## Official recruiter-facing entry points

- [Portfolio home](https://ptevsoh-alt.github.io/Enola-data-Portfolio/)
- [Brand positioning and PMM — M3](https://ptevsoh-alt.github.io/Enola-data-Portfolio/#/case/gtm/gtm-positioning-decision)
- [Campaign strategy and cross-channel execution](https://ptevsoh-alt.github.io/Enola-data-Portfolio/#/case/gtm/campaign-architecture)
- [Brand PR and partnerships](https://ptevsoh-alt.github.io/Enola-data-Portfolio/#/case/brand/pr-project)
- [Brand / video / paid-creative / lifecycle projects](https://ptevsoh-alt.github.io/Enola-data-Portfolio/#/case/creative/video-projects)
- [M3 Knowledge Loop review](https://ptevsoh-alt.github.io/Enola-data-Portfolio/#/case/gtm/launch-knowledge-loop)
- [Recruiter reading view](https://ptevsoh-alt.github.io/Enola-data-Portfolio/review/)

## Current production release — 26 November 2026

- **Approved source `main` commit:** `0ce450daf773cdbefe57c7a548ff3ef086dcc727`.
- Brand wording-only anonymization: [source PR #40](https://github.com/ptevsoh-alt/Enola-data/pull/40). The PR photo remains the original file and loads eagerly on deep links. All original KV, PR, exhibition and video binaries are unchanged; 11 cases / 36 metrics are preserved.\n- Current content privacy revision: [PR #39](https://github.com/ptevsoh-alt/Enola-data/pull/39), validated with Chrome desktop/mobile and public-content privacy gate. It anonymizes the remaining named employer, corrects a misidentified visual, and preserves the video case and original TVC links. The 11 projects and 36 metrics are unchanged.
- Initial complete-root source release: [PR #37](https://github.com/ptevsoh-alt/Enola-data/pull/37), including the earlier work from Brand PR [#32](https://github.com/ptevsoh-alt/Enola-data/pull/32), Video/IMC [#33](https://github.com/ptevsoh-alt/Enola-data/pull/33), and the ultimately revised M3 strategy [#36](https://github.com/ptevsoh-alt/Enola-data/pull/36).
- Source PR #37 **removes** the unauthenticated M3 Campaign KV chapter, does **not** publish private R8 KV files, and replaces the fixed D+7/D+30 framework with the evidence-led Knowledge Loop. No invented sales, CPA/ROAS or validated learnings.
- The public root uses the **full final version**, not an old isolated preview. All public root files are copied from pinned source `site/` without modification. Historical review snapshots are **not republished**; their old entry URLs now contain noindex redirect stubs to the current root.
- Previous production source commit, for rollback/reference: `84fc8f303eaf373d8310df2d89d2f46979313841`.
- Previous display repository `main` before the switch: `d9408810744f008f3fe48788ae3ca4c0b9acb5a8`. Any rollback requires a fresh gated deployment; it is not automatic.

## Historical review preview retirement

The previous `/preview/pr32/`, `/preview/pr33/` and `/preview/pr37/` builds are no longer served as old page copies. These links redirect to the current anonymized official portfolio; `noindex` alone was never a privacy boundary. Source history remains available on GitHub and cannot be erased by Pages deployment.

## Deployment and verification

Pushes to the display repository's `main` run [`.github/workflows/deploy-preview.yml`](.github/workflows/deploy-preview.yml). The workflow checks out the **exact pinned source SHA**, runs `npm ci && npm test`, validates responsive pages in real Chrome (desktop 1440px / mobile 390px), retires historical preview payloads and redirects old entry links, stages `source/site/` at the root of the GitHub Pages artifact and runs `scripts/verify-public-root-release.cjs` before deployment. Deployment succeeds only after all validation jobs pass.

A manual workflow dispatch may override `source_ref`; the normal push deployment always uses the pinned production SHA. Source merges **do not** silently change the live site: the displayed source SHA is managed and reviewed in this repository.

Private source materials, credentials, non-consented personal data and unapproved creative assets must never be copied into the public site.
