import{u as _,i as te,l as le,m as U,p as se,P as ae,q as re,s as oe,k as S,v as H,x as ie,y as Y,j as l,z as ue,R as $,A as ne,B as ce,C as de,D as ve,E as Ee,G as he,H as me,I as pe,J as ye,K as D,L as Ae,M as Be,N as ge,O as j,Q as I,S as fe}from"./app-DbKYsi2O.js";const ke=["/","/blogMe.html","/portfolio.html","/about/aboutMe.html","/about/aboutSite.html","/demo/","/demo/disable.html","/demo/layout.html","/demo/markdown.html","/demo/page.html","/leetcode/1-%E4%B8%A4%E6%95%B0%E4%B9%8B%E5%92%8C.html","/leetcode/142-linked-list-cycle-ii.html","/leetcode/15-3sum.html","/leetcode/18-4sum.html","/leetcode/19-remove-nth-node-from-end-of-list.html","/leetcode/202-%E5%BF%AB%E4%B9%90%E6%95%B0.html","/leetcode/203-remove-linked-list-elements.html","/leetcode/206-reverse-linked-list.html","/leetcode/209-minium-size-subarray.html","/leetcode/24-swap-nodes-in-pairs.html","/leetcode/242-%E6%9C%89%E6%95%88%E7%9A%84%E5%AD%97%E6%AF%8D%E5%BC%82%E4%BD%8D%E8%AF%8D.html","/leetcode/27-removeElement.html","/leetcode/349-%E4%B8%A4%E4%B8%AA%E6%95%B0%E7%BB%84%E7%9A%84%E4%BA%A4%E9%9B%86.html","/leetcode/383-ransom-note.html","/leetcode/454-4sum-ii.html","/leetcode/59-spiral-matrix-ii.html","/leetcode/704-binarysearch.html","/leetcode/707-design-linked-list.html","/leetcode/977-squares-of-a-sorted-array.html","/leetcode/","/leetcode/%E5%93%88%E5%B8%8C%E8%A1%A8%E5%9F%BA%E7%A1%80%E7%90%86%E8%AE%BA.html","/leetcode/%E6%95%B0%E7%BB%84%E6%80%BB%E7%BB%93%E7%AF%87.html","/leetcode/%E9%93%BE%E8%A1%A8%E6%80%BB%E7%BB%93%E7%AF%87.html","/leetcode/%E9%93%BE%E8%A1%A8%E7%90%86%E8%AE%BA%E5%9F%BA%E7%A1%80.html","/leetcode/%E9%9D%A2%E8%AF%95%E9%A2%9802.07-intersection-of-two-linked-lists-lcci.html","/404.html","/about/","/category/","/category/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/category/%E6%8C%87%E5%8D%97/","/tag/","/tag/%E7%A6%81%E7%94%A8/","/tag/%E5%8A%A0%E5%AF%86/","/tag/%E5%B8%83%E5%B1%80/","/tag/markdown/","/tag/%E9%A1%B5%E9%9D%A2%E9%85%8D%E7%BD%AE/","/tag/%E4%BD%BF%E7%94%A8%E6%8C%87%E5%8D%97/","/tag/%E5%93%88%E5%B8%8C%E8%A1%A8/","/tag/%E9%93%BE%E8%A1%A8/","/tag/%E5%8F%8C%E6%8C%87%E9%92%88/","/tag/%E6%95%B0%E7%BB%84/","/tag/%E6%BB%91%E5%8A%A8%E7%AA%97%E5%8F%A3/","/tag/%E6%A8%A1%E6%8B%9F%E8%A1%8C%E4%B8%BA/","/tag/%E4%BA%8C%E5%88%86%E6%9F%A5%E6%89%BE/","/article/","/star/","/timeline/"],Ce="SEARCH_PRO_QUERY_HISTORY",y=_(Ce,[]),He=()=>{const{queryHistoryCount:s}=D,a=s>0;return{enabled:a,queryHistory:y,addQueryHistory:r=>{a&&(y.value=Array.from(new Set([r,...y.value.slice(0,s-1)])))},removeQueryHistory:r=>{y.value=[...y.value.slice(0,r),...y.value.slice(r+1)]}}},L=s=>ke[s.id]+("anchor"in s?`#${s.anchor}`:""),De="SEARCH_PRO_RESULT_HISTORY",{resultHistoryCount:M}=D,A=_(De,[]),Re=()=>{const s=M>0;return{enabled:s,resultHistory:A,addResultHistory:a=>{if(s){const r={link:L(a),display:a.display};"header"in a&&(r.header=a.header),A.value=[r,...A.value.slice(0,M-1)]}},removeResultHistory:a=>{A.value=[...A.value.slice(0,a),...A.value.slice(a+1)]}}},Fe=s=>{const a=ve(),r=U(),R=Ee(),i=S(0),f=H(()=>i.value>0),h=he([]);return me(()=>{const{search:m,terminate:F}=pe(),B=ye(c=>{const g=c.join(" "),{searchFilter:w=E=>E,splitWord:Q,suggestionsFilter:O,...p}=a.value;g?(i.value+=1,m(c.join(" "),r.value,p).then(E=>w(E,g,r.value,R.value)).then(E=>{i.value-=1,h.value=E}).catch(E=>{console.warn(E),i.value-=1,i.value||(h.value=[])})):h.value=[]},D.searchDelay-D.suggestDelay);Y([s,r],([c])=>B(c),{immediate:!0}),Ae(()=>{F()})}),{isSearching:f,results:h}};var Qe=te({name:"SearchResult",props:{queries:{type:Array,required:!0},isFocusing:Boolean},emits:["close","updateQuery"],setup(s,{emit:a}){const r=le(),R=U(),i=se(ae),{enabled:f,addQueryHistory:h,queryHistory:m,removeQueryHistory:F}=He(),{enabled:B,resultHistory:c,addResultHistory:g,removeResultHistory:w}=Re(),Q=f||B,O=re(s,"queries"),{results:p,isSearching:E}=Fe(O),o=oe({isQuery:!0,index:0}),d=S(0),v=S(0),P=H(()=>Q&&(m.value.length>0||c.value.length>0)),b=H(()=>p.value.length>0),q=H(()=>p.value[d.value]||null),z=()=>{const{isQuery:e,index:t}=o;t===0?(o.isQuery=!e,o.index=e?c.value.length-1:m.value.length-1):o.index=t-1},G=()=>{const{isQuery:e,index:t}=o;t===(e?m.value.length-1:c.value.length-1)?(o.isQuery=!e,o.index=0):o.index=t+1},J=()=>{d.value=d.value>0?d.value-1:p.value.length-1,v.value=q.value.contents.length-1},K=()=>{d.value=d.value<p.value.length-1?d.value+1:0,v.value=0},N=()=>{v.value<q.value.contents.length-1?v.value+=1:K()},V=()=>{v.value>0?v.value-=1:J()},x=e=>e.map(t=>fe(t)?t:l(t[0],t[1])),W=e=>{if(e.type==="customField"){const t=Be[e.index]||"$content",[u,C=""]=ge(t)?t[R.value].split("$content"):t.split("$content");return e.display.map(n=>l("div",x([u,...n,C])))}return e.display.map(t=>l("div",x(t)))},k=()=>{d.value=0,v.value=0,a("updateQuery",""),a("close")},X=()=>f?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},i.value.queryHistory),m.value.map((e,t)=>l("div",{class:["search-pro-result-item",{active:o.isQuery&&o.index===t}],onClick:()=>{a("updateQuery",e)}},[l(j,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},e),l("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:u=>{u.preventDefault(),u.stopPropagation(),F(t)}})]))])):null,Z=()=>B?l("ul",{class:"search-pro-result-list"},l("li",{class:"search-pro-result-list-item"},[l("div",{class:"search-pro-result-title"},i.value.resultHistory),c.value.map((e,t)=>l($,{to:e.link,class:["search-pro-result-item",{active:!o.isQuery&&o.index===t}],onClick:()=>{k()}},()=>[l(j,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[e.header?l("div",{class:"content-header"},e.header):null,l("div",e.display.map(u=>x(u)).flat())]),l("button",{class:"search-pro-remove-icon",innerHTML:I,onClick:u=>{u.preventDefault(),u.stopPropagation(),w(t)}})]))])):null;return ie("keydown",e=>{if(s.isFocusing){if(b.value){if(e.key==="ArrowUp")V();else if(e.key==="ArrowDown")N();else if(e.key==="Enter"){const t=q.value.contents[v.value];h(s.queries.join(" ")),g(t),r.push(L(t)),k()}}else if(B){if(e.key==="ArrowUp")z();else if(e.key==="ArrowDown")G();else if(e.key==="Enter"){const{index:t}=o;o.isQuery?(a("updateQuery",m.value[t]),e.preventDefault()):(r.push(c.value[t].link),k())}}}}),Y([d,v],()=>{var e;(e=document.querySelector(".search-pro-result-list-item.active .search-pro-result-item.active"))==null||e.scrollIntoView(!1)},{flush:"post"}),()=>l("div",{class:["search-pro-result-wrapper",{empty:s.queries.length?!b.value:!P.value}],id:"search-pro-results"},s.queries.length?E.value?l(ue,{hint:i.value.searching}):b.value?l("ul",{class:"search-pro-result-list"},p.value.map(({title:e,contents:t},u)=>{const C=d.value===u;return l("li",{class:["search-pro-result-list-item",{active:C}]},[l("div",{class:"search-pro-result-title"},e||i.value.defaultTitle),t.map((n,ee)=>{const T=C&&v.value===ee;return l($,{to:L(n),class:["search-pro-result-item",{active:T,"aria-selected":T}],onClick:()=>{h(s.queries.join(" ")),g(n),k()}},()=>[n.type==="text"?null:l(n.type==="title"?ne:n.type==="heading"?ce:de,{class:"search-pro-result-type"}),l("div",{class:"search-pro-result-content"},[n.type==="text"&&n.header?l("div",{class:"content-header"},n.header):null,l("div",W(n))])])})])})):i.value.emptyResult:Q?P.value?[X(),Z()]:i.value.emptyHistory:i.value.emptyResult)}});export{Qe as default};
