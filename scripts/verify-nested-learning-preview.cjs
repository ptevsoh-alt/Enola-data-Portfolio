#!/usr/bin/env node
"use strict";
// Verify PR37's portfolio review is truly KV-free and uses the Knowledge Loop.
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,"..");
const official=path.join(root,"public/index.html"),approved=path.join(root,"source/site/index.html");
assert.ok(fs.existsSync(official)&&fs.existsSync(approved),"Approved portfolio root missing");
assert.equal(fs.readFileSync(official,"utf8"),fs.readFileSync(approved,"utf8"),"Public root changed without approval");
for(const slug of ["pr32","pr33"])assert.ok(fs.existsSync(path.join(root,"public/preview",slug,"index.html")),"Earlier preview missing: "+slug);
assert.ok(!fs.existsSync(path.join(root,"public/preview/pr36/index.html")),"Retired KV preview must not be republished");
const dir=path.join(root,"public/preview/pr37"),html=fs.readFileSync(path.join(dir,"index.html"),"utf8");
assert.match(html,/noindex,nofollow/,"PR37 must not be indexed");
assert.match(html,/projects\.js\?v=20261126knowledge8/,"PR37 scripts not cache-busted");
for(const rel of ["projects.js","growth.css","data.js","growth.js","review/index.html","assets/favicon.svg","assets/video/creator-staircase-7s.mp4"]){
 assert.ok(fs.existsSync(path.join(dir,rel)),"Missing PR37 asset: "+rel);
}
for(const filename of ["M3_KV_16x9.png","M3_KV_4x5.png","M3_KV_9x16.png"]){
 assert.ok(!fs.existsSync(path.join(dir,"assets/projects",filename)),"Private KV file leaked: "+filename);
}
const projects=fs.readFileSync(path.join(dir,"projects.js"),"utf8");
for(const id of ['id="launch-knowledge-loop"','id="m3-knowledge-loop"','class="m3-learning-focus"','id="gtm-positioning-decision"','pr-strategy-overview','video-brand-positioning']){
 assert.ok(projects.includes(id),"Missing required PR37 content: "+id);
}
for(const needle of ['id="m3-campaign-kv"','id="launch-d7-d30"','class="m3-kv-showcase"','D+7 / EARLY SIGNAL','D+30 / BUSINESS REVIEW']){
 assert.ok(!projects.includes(needle),"Discontinued M3 chapter or fixed review date retained: "+needle);
}
const review=fs.readFileSync(path.join(dir,"review/index.html"),"utf8");
assert.ok(review.includes("#/case/gtm/launch-knowledge-loop"),"Independent review page points to obsolete case");
const src=path.join(root,"learning-source/scripts/site-visual-audit.cjs"),dst=path.join(root,"learning-source/scripts/site-visual-audit-nested.cjs");
let code=fs.readFileSync(src,"utf8");
const replacements=[
 ['const site=path.join(__dirname,"../site")','const site=path.resolve(__dirname,"../../public")'],
 ['if(rel==="/")rel="/index.html";','if(rel.endsWith("/"))rel+="index.html";'],
 ['"http://127.0.0.1:"+port+"/#/"+route','"http://127.0.0.1:"+port+"/preview/pr37/#/"+route']
];
for(const [from,to] of replacements){
 assert.equal(code.split(from).length-1,1,"Nested QA patch marker changed: "+from);
 code=code.replace(from,to);
}
fs.writeFileSync(dst,code,"utf8");
console.log("PR37_NESTED_PREVIEW_PASS: root unchanged, KV/D7-D30 sections absent, learning anchors and assets intact; Chrome deep-link audit prepared");
