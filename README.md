# Enola Data — Portfolio Preview

This repository hosts an isolated GitHub Pages preview of the portfolio website from [ptevsoh-alt/Enola-data](https://github.com/ptevsoh-alt/Enola-data).

- Preview site: https://ptevsoh-alt.github.io/Enola-data-preview/
- Independent review room: https://ptevsoh-alt.github.io/Enola-data-preview/review/
- Source repository: https://github.com/ptevsoh-alt/Enola-data
- Source ref currently pinned: `096c39e6ac7877af8141d865917c8da3b891c7c9`
- Production source repository and its `main` branch are not modified by this preview deployment.

## Update the preview

Open **Actions → Deploy portfolio preview → Run workflow** and provide a source branch, tag, or commit SHA in the `source_ref` input. The workflow checks out that exact source ref, runs `npm ci` and `npm test`, then publishes only the source repository's `site/` directory to GitHub Pages.

## Public preview safety

The preview is public. Do not put private, confidential, credential, or non-consented personal information in the source site's public assets.
