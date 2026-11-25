# Enola Data — Public Portfolio

This repository publishes the public GitHub Pages portfolio from the validated source in [ptevsoh-alt/Enola-data](https://github.com/ptevsoh-alt/Enola-data).

- Portfolio: https://ptevsoh-alt.github.io/Enola-data-Portfolio/
- Independent case review: https://ptevsoh-alt.github.io/Enola-data-Portfolio/review/
- Source: https://github.com/ptevsoh-alt/Enola-data
- Deployed source commit (merged main on 2026-11-25): `d1caddb076a5ef47d64d6906233c94c42ae28e0f`
- Consolidated source PRs: [#28](https://github.com/ptevsoh-alt/Enola-data/pull/28), [#29](https://github.com/ptevsoh-alt/Enola-data/pull/29) and [#30](https://github.com/ptevsoh-alt/Enola-data/pull/30)
- M3 employer review: https://ptevsoh-alt.github.io/Enola-data-Portfolio/#/case/gtm/gtm-positioning-decision

## Deployment

Pushes to this repository's `main` run `.github/workflows/deploy-preview.yml`. The workflow checks out the **exact pinned source commit** above, validates all source tests, renders desktop/mobile routes in real Chrome and only then publishes `source/site/` through GitHub Pages. A manual dispatch can optionally supply an alternative `source_ref`; no manual override is used by the standard push deployment.

## Integrity

The portfolio source `main` and public deployment repository are distinct. A source merge does not silently change the public site; publishing requires updating this exact source ref. Private material, credentials and non-consented personal information must never be added to the public source artifacts.
