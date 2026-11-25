# Enola Data — Portfolio Preview

This repository hosts an isolated GitHub Pages preview of the portfolio website from [ptevsoh-alt/Enola-data](https://github.com/ptevsoh-alt/Enola-data).

- Preview site: https://ptevsoh-alt.github.io/Enola-data-Portfolio/
- Independent review room: https://ptevsoh-alt.github.io/Enola-data-Portfolio/review/
- Source repository: https://github.com/ptevsoh-alt/Enola-data
- Source ref currently pinned (PR #27 removed keyword-selection displays and refined editorial copy; PR #20-restored base): `aa43194e6b125a8d6dab66a62ef73afca4a95ad9`
- This preview repository is separate from the source repository. The source repository and its `main` branch are not modified by this deployment.

## Update the preview

Open **Actions → Deploy portfolio preview → Run workflow** and provide a source branch, tag, or commit SHA in the `source_ref` input. The workflow checks out that exact source ref, runs `npm ci` and `npm test`, then publishes only the source repository's `site/` directory to GitHub Pages.

## Public preview safety

The preview is public. Do not put private, confidential, credential, or non-consented personal information in the source site's public assets.

## Portfolio content revisions

`portfolio.patch` applies the editorial changes to the pinned source checkout. For a local preview, run `git apply /absolute/path/to/portfolio.patch` in that checkout, run `npm ci` and `npm test`, then run `npm run preview`. The Pages workflow applies the same patch before validation.
