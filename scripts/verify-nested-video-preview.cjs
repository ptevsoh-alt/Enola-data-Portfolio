#!/usr/bin/env node
"use strict";
// PR #33 Video/IMC standalone Pages staging: preserve the approved portfolio
// at the root and the separately reviewable PR #32 under /preview/pr32/.
const fs=require("node:fs");
const path=require("node:path");
const assert=require("node:assert/strict");

const root=path.resolve(__dirname,"..");
const official=path.join(root,"public","index.html");
const expected=path.join(root,"source","site","index.html");
const previous=path.join(root,"public","preview","pr32","index.html");
const latest=path.join(root,"public","preview","pr33");
assert.ok(fs.existsSync(official)&&fs.existsSync(expected),"Official portfolio index absent");
assert.equal(fs.readFileSync(official,"utf8"),fs.readFileSync(expected,"utf8"),"Official portfolio home overwritten");
assert.ok(fs.existsSync(previous),"PR #32 preview missing");
const html=fs.readFileSync(path.join(latest,"index.html"),"utf8");
assert.match(html,/noindex,nofollow/,"Preview must not be indexed");
assert.match(html,/projects\.js\?v=20261125videoimc5/,"Video preview asset cache version wrong");
for(const rel of ["index.html","projects.js","growth.css","selected-work.js","review/index.html","assets/favicon.svg","assets/video/creator-staircase-7s.mp4","assets/video/creator-livingroom-7s.mp4"]){
  assert.ok(fs.existsSync(path.join(latest,rel)),"Preview missing asset: "+rel);
}
const projects=fs.readFileSync(path.join(latest,"projects.js"),"utf8");
for(const anchor of ["video-brand-positioning","video-awareness-lifecycle","video-paid-creative-architecture","video-production-management","pr-strategy-overview"]){
  assert.ok(projects.includes(anchor),"Page section absent: "+anchor);
}
const src=path.join(root,"video-source","scripts","site-visual-audit.cjs");
const dst=path.join(root,"video-source","scripts","site-visual-audit-nested.cjs");
let script=fs.readFileSync(src,"utf8");
for(const [from,to] of [
  ['const site=path.join(__dirname,"../site")','const site=path.resolve(__dirname,"../../public")'],
  ['if(rel==="/")rel="/index.html";','if(rel.endsWith("/"))rel+="index.html";'],
  ['"http://127.0.0.1:"+port+"/#/"+route','"http://127.0.0.1:"+port+"/preview/pr33/#/"+route']
]){
  assert.equal(script.split(from).length-1,1,"Nested Chrome test patch anchor missing/duplicated: "+from);
  script=script.replace(from,to);
}
fs.writeFileSync(dst,script,"utf8");
console.log("PR33_NESTED_PREVIEW_PASS: official root and PR32 preserved, video creative assets present, Chrome deep-link QA ready");
