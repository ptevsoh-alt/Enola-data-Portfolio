#!/usr/bin/env node
"use strict";
// Gate exact production root content before Pages artifact upload.
// This is not a substitute for the full real-Chrome suite; it verifies the public
// destination is the approved merged source, and excludes retired case content.
const fs=require("node:fs"),path=require("node:path"),assert=require("node:assert/strict");
const root=path.resolve(__dirname,".."),src=path.join(root,"source/site"),out=path.join(root,"public");
const must=(cond,label)=>assert.ok(cond,label);
for(const rel of ["index.html","projects.js","growth.js","data.js","growth.css","review/index.html","review/review.js"]){
  const a=path.join(src,rel),b=path.join(out,rel);
  must(fs.existsSync(a)&&fs.existsSync(b),"Missing root content: "+rel);
  assert.deepEqual(fs.readFileSync(a),fs.readFileSync(b),"Production root content diverged from approved merge: "+rel);
}
const index=fs.readFileSync(path.join(out,"index.html"),"utf8");
const projects=fs.readFileSync(path.join(out,"projects.js"),"utf8");
const growth=fs.readFileSync(path.join(out,"growth.js"),"utf8");
const review=fs.readFileSync(path.join(out,"review/index.html"),"utf8");
must(index.includes("projects.js?v=20261126knowledge8"),"Final release cache key is not present");
must(!/name=["']robots["'][^>]*noindex/i.test(index),"Public production root cannot be noindex");
for(const id of ['id="launch-knowledge-loop"','id="m3-knowledge-loop"','id="gtm-positioning-decision"','id="pr-strategy-overview"','id="video-brand-positioning"']){
  must(projects.includes(id),"Merged final case is missing: "+id);
}
for(const outdated of ['id="m3-campaign-kv"','id="launch-d7-d30"','D+7 / EARLY SIGNAL','D+30 / BUSINESS REVIEW','class="m3-kv-showcase"']){
  must(!projects.includes(outdated),"Discontinued case still in public root: "+outdated);
}
for(const uri of ["m3-campaign-kv","launch-d7-d30"]){
  must(!growth.includes('href="#/case/gtm/'+uri+'"'),"Deprecated link in public navigation: "+uri);
  must(!review.includes("#/case/gtm/"+uri),"Deprecated link in recruiter review: "+uri);
}
must(review.includes("#/case/gtm/launch-knowledge-loop"),"Recruiter review must link to the new Knowledge Loop");
const reviewJs=fs.readFileSync(path.join(out,"review/review.js"),"utf8");
must(growth.includes("海外 B2B 项目 · 历史 Facebook 账号"),"Anonymized B2B label not deployed");
must(!/\u745e\u97f3\u535a/.test(growth),"Named employer leaked into public root");
must(reviewJs.includes("产品局部图 · 非活动主视觉成品"),"Review product visual still mislabeled as published KV");
must(index.includes("growth.js?v=20261126privacy1"),"Latest anonymization cache key is missing");
must(review.includes("review.js?v=20261126privacy1"),"Latest reviewer JS cache key is missing");
for(const videoId of ["1xuDMGJbNw4RZt9nBuyLkjy7Hl6MZZm6y","15m5TOYZh90NUqTmSbHget8BJbeBEhLKE"]){
  must(projects.includes(videoId)&&review.includes(videoId),"Preserved full TVC link is missing: "+videoId);
}

for(const rel of ["assets/video/creator-staircase-7s.mp4","assets/video/creator-livingroom-7s.mp4","assets/projects/m3-yellow-main.webp","assets/favicon.svg"]){
  must(fs.existsSync(path.join(out,rel)),"Missing final public media: "+rel);
}
for(const slug of ["pr32","pr33","pr37"]){
  const f=path.join(out,"preview",slug,"index.html");
  must(fs.existsSync(f),"Retired preview redirect missing: "+slug);
  const page=fs.readFileSync(f,"utf8");
  must(page.includes("noindex,nofollow")&&page.includes('url=../../'),
    "Old preview does not redirect to safe root: "+slug);
  must(!fs.existsSync(path.join(out,"preview",slug,"projects.js")),
    "Archived preview source leaked into production root: "+slug);
}
must(!fs.existsSync(path.join(out,"preview/pr36/index.html")),"Retired KV / D7-D30 preview republished");
for(const name of ["M3_KV_16x9.png","M3_KV_4x5.png","M3_KV_9x16.png"]){
  must(!fs.existsSync(path.join(out,"assets/projects",name)),"Unapproved R8 visual published: "+name);
}
console.log("PUBLIC_ROOT_RELEASE_PASS: merged source==root; Knowledge Loop, PMM, Brand PR and video cases present; old KV/D7-D30 excluded; assets complete; old previews retired to safe redirects");
