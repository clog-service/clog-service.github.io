_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[15],{AYiX:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/newspaper",function(){return n("pFzP")}])},"hGi/":function(e,t,n){"use strict";function i(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",(function(){return i}))},pFzP:function(e,t,n){"use strict";n.r(t);var i=n("hGi/"),o=n("q1tI"),s=n.n(o),a=n("vOnD"),r=n("wJMO"),u=n("hVfV"),c=n("m/eG"),l=s.a.createElement,p=a.b.div.withConfig({displayName:"newspaper__Container",componentId:"sc-16tutwc-0"})(["display:flex;flex:1;height:100%;justify-content:center;"]),d=a.b.div.withConfig({displayName:"newspaper__Contents",componentId:"sc-16tutwc-1"})(["width:calc(100% - 32px);max-width:500px;height:100%;"]);t.default=function(e){Object(i.a)(e);Object(o.useContext)(u.i).language;var t=Object(o.useContext)(u.m),n=t.currentNewspaper,a=t.selectNewspaper,w=t.list,f=Object(o.useContext)(u.o),h=f.posts,_=f.initPosts,g=f.getNextPosts;return Object(o.useEffect)((function(){0===h.length&&w.length>0&&(a(w[0]),_(w[0].ids))}),[w]),l(r.a,{currentPage:"newspaper",loadNext:g},l(p,null,l(d,null,n&&l(c.d,{newspaper:n}),h.length>0?h.map((function(e,t){if("Ads"!==e)return l(c.h,{key:"explorer-post-item-".concat(e.id),index:t,post:e,authorDescription:e.published_at.substring(0,e.published_at.length-3)})})):l(s.a.Fragment,null,l(c.h,{index:0}),l(c.h,null)))))}},wJMO:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),s=n("vOnD"),a=n("m/eG"),r=o.a.createElement,u=s.b.div.withConfig({displayName:"Main__Container",componentId:"sc-1uwa45w-0"})(["display:flex;flex:1;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0;"]);t.a=function(e){var t=e.isHeadless,n=e.currentPage,i=e.loadNext,o=e.children;return r(u,null,r(a.g,{currentPage:n,isHeadless:t}),r(a.e,{loadNext:i},o),r(a.f,null))}}},[["AYiX",0,2,3,5,1,4]]]);