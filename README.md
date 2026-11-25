# Enola Data — Portfolio Preview

This repository hosts an isolated GitHub Pages preview of the portfolio website from [ptevsoh-alt/Enola-data](https://github.com/ptevsoh-alt/Enola-data).

- Preview site: https://ptevsoh-alt.github.io/Enola-data-Portfolio/
- Independent review room: https://ptevsoh-alt.github.io/Enola-data-Portfolio/review/
- Source repository: https://github.com/ptevsoh-alt/Enola-data
- Source ref currently pinned (PR #28, JD-integrated portfolio, desktop/mobile/content QA approved on 2026-11-25): `e9f7601466f31b383a62e446c94edb1bb3c82d3a`
- This public site is deployed from the exact pinned source commit. The source repository and its `main` branch are not modified by this deployment.
- Release source: [PR #28](https://github.com/ptevsoh-alt/Enola-data/pull/28) (independent validated branch); [visual and content acceptance](https://github.com/ptevsoh-alt/Enola-data/blob/e9f7601466f31b383a62e446c94edb1bb3c82d3a/qa/PORTFOLIO-PR28-VISUAL-AND-CONTENT-QA-20261125.md).

## Update the preview

Open **Actions → Deploy portfolio preview → Run workflow** and provide a source branch, tag, or commit SHA in the `source_ref` input. The workflow checks out that exact source ref, runs `npm ci` and `npm test`, then publishes only the source repository's `site/` directory to GitHub Pages.

## Public preview safety

The preview is public. Do not put private, confidential, credential, or non-consented personal information in the source site's public assets.
