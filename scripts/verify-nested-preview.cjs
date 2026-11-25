#!/usr/bin/env node
"use strict";
// Verify that the PR preview is deployed under its own nested project path.
// The canonical public home stays byte-identical to the pinned approved source.
const fs = require("node:fs");
const path = require("node:path");
const assert = require("node:assert/strict");

const root = path.resolve(__dirname, "..");
const preview = path.join(root, "public", "preview", "pr32");
const liveIndex = path.join(root, "public", "index.html");
const pinnedIndex = path.join(root, "source", "site", "index.html");
const previewIndex = path.join(preview, "index.html");

assert.ok(fs.existsSync(liveIndex), "Production root missing");
assert.ok(fs.existsSync(previewIndex), "Nested preview index missing");
assert.equal(fs.readFileSync(liveIndex, "utf8"), fs.readFileSync(pinnedIndex, "utf8"), "Official home page changed");
const html = fs.readFileSync(previewIndex, "utf8");
assert.match(html, /noindex,nofollow/, "Preview must opt out of search indexing");
assert.match(html, /projects\.js\?v=20261125brandearned4/, "Preview asset version mismatch");
for (const rel of ["projects.js", "growth.css", "assets/favicon.svg", "review/index.html", "assets/projects/pr-home-scene.webp"]) {
  assert.ok(fs.existsSync(path.join(preview, rel)), "Nested preview asset missing: " + rel);
}
assert.match(fs.readFileSync(path.join(preview, "projects.js"), "utf8"), /pr-strategy-overview/, "PR strategy not present in preview");
assert.match(fs.readFileSync(path.join(preview, "projects.js"), "utf8"), /campaign-management-sequence/, "Campaign management not present in preview");

// Use the already validated full Chrome audit on the actual staged nested URL.
// Rewriting only its test-server root and initial navigation keeps the same
// assertions for routes, loaded images, PR positioning, mobile viewport and overflow.
const sourceScript = path.join(root, "preview-source", "scripts", "site-visual-audit.cjs");
const outputScript = path.join(root, "preview-source", "scripts", "site-visual-audit-nested.cjs");
let script = fs.readFileSync(sourceScript, "utf8");
const patches = [
  ['const site=path.join(__dirname,"../site")', 'const site=path.resolve(__dirname,"../../public")'],
  ['if(rel==="/")rel="/index.html";', 'if(rel.endsWith("/"))rel+="index.html";'],
  ['"http://127.0.0.1:"+port+"/#/"+route', '"http://127.0.0.1:"+port+"/preview/pr32/#/"+route']
];
for (const [before, after] of patches) {
  assert.equal(script.split(before).length - 1, 1, "Nested QA patch anchor changed: " + before);
  script = script.replace(before, after);
}
fs.writeFileSync(outputScript, script, "utf8");
console.log("NESTED_PREVIEW_STAGING_PASS: official root unchanged, /preview/pr32/ asset paths present; real Chrome deep-link QA prepared");
