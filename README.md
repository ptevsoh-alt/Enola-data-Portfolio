# Enola Data — Portfolio Preview

This repository hosts an isolated GitHub Pages preview of the portfolio website from [ptevsoh-alt/Enola-data](https://github.com/ptevsoh-alt/Enola-data).

- Preview site: https://ptevsoh-alt.github.io/Enola-data-Portfolio/
- Independent review room: https://ptevsoh-alt.github.io/Enola-data-Portfolio/review/
- Source repository: https://github.com/ptevsoh-alt/Enola-data
- Source ref currently pinned (PR #26 SEO planning preserved, English search topics omitted, PR #20-restored base): `b171e0b19ae86a2c86eb8debf824e4651b918a55`
- This preview repository is separate from the source repository. The source repository and its `main` branch are not modified by this deployment.

## Update the preview

Open **Actions → Deploy portfolio preview → Run workflow** and provide a source branch, tag, or commit SHA in the `source_ref` input. The workflow checks out that exact source ref, runs `npm ci` and `npm test`, then publishes only the source repository's `site/` directory to GitHub Pages.

## Public preview safety

The preview is public. Do not put private, confidential, credential, or non-consented personal information in the source site's public assets.
