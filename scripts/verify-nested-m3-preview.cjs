#!/usr/bin/env node
"use strict";
// Preserve public root + PR32 + PR33 while validating private-asset-safe PR36 review.
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const official=path.join(root,"public/index.html"),approved=path.join(root,"source/site/index.html");
assert.ok(fs.existsSync(official)&&fs.existsSync(approved),"Missing approved portfolio root");
assert.equal(fs.readFileSync(official,"utf8"),fs.readFileSync(approved,"utf8"),"Approved public home changed");
for(const slug of ["pr32","pr33"])assert.ok(fs.existsSync(path.join(root,"public/preview",slug,"index.html")),"Older preview removed: "+slug);
const dir=path.join(root,"public/preview/pr36"),html=fs.readFileSync(path.join(dir,"index.html"),"utf8");
assert.match(html,/noindex,nofollow/,"PR36 preview must be noindex");
assert.match(html,/projects\.js\?v=20261126m3kvloop6/,"M3 cache version not current");
for(const rel of ["projects.js","growth.css","selected-work.js","review/index.html","assets/favicon.svg","assets/projects/m3-yellow-main.webp","assets/video/creator-staircase-7s.mp4"]){
  assert.ok(fs.existsSync(path.join(dir,rel)),"PR36 asset missing: "+rel);
}
for(const file of ["M3_KV_16x9.png","M3_KV_4x5.png","M3_KV_9x16.png"])assert.ok(!fs.existsSync(path.join(dir,"assets/projects",file)),"Private R8 asset leaked: "+file);
const projects=fs.readFileSync(path.join(dir,"projects.js"),"utf8");
for(const id of ["m3-kv-source-layout","m3-kv-message-layers","m3-kv-format-roles","m3-knowledge-loop","launch-d7-d30","video-brand-positioning","pr-strategy-overview"]){
  assert.ok(projects.includes(id),"PR36 content missing: "+id);
}
assert.ok(!projects.includes("From grip<br>to floor."),"Fake KV headline retained");
const src=path.join(root,"m3-source/scripts/site-visual-audit.cjs"),dst=path.join(root,"m3-source/scripts/site-visual-audit-nested.cjs");
let code=fs.readFileSync(src,"utf8");
const replacements=[
  ['const site=path.join(__dirname,"../site")','const site=path.resolve(__dirname,"../../public")'],
  ['if(rel==="/")rel="/index.html";','if(rel.endsWith("/"))rel+="index.html";'],
  ['"http://127.0.0.1:"+port+"/#/"+route','"http://127.0.0.1:"+port+"/preview/pr36/#/"+route']
];
for(const [from,to] of replacements){assert.equal(code.split(from).length-1,1,"Nested test transform changed: "+from);code=code.replace(from,to)}
fs.writeFileSync(dst,code,"utf8");
console.log("PR36_NESTED_PREVIEW_PASS: approved root and old previews unchanged, M3 source and Knowledge Loop present, private R8 images absent, Chrome deep links prepared");
