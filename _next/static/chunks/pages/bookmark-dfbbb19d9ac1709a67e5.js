_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[9],{"hGi/":function(e,t,n){"use strict";function i(e){if(null==e)throw new TypeError("Cannot destructure undefined")}n.d(t,"a",(function(){return i}))},ig0e:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/bookmark",function(){return n("ptqf")}])},ptqf:function(e,t,n){"use strict";n.r(t);var i=n("hGi/"),o=n("q1tI"),r=n.n(o),a=n("nOHt"),u=n("vOnD"),l=n("wJMO"),s=n("hVfV"),c=n("m/eG"),p=r.a.createElement,d=u.b.div.withConfig({displayName:"bookmark__Container",componentId:"sc-1imip7s-0"})(["display:flex;flex:1;height:100%;justify-content:center;"]),f=u.b.div.withConfig({displayName:"bookmark__Contents",componentId:"sc-1imip7s-1"})(["width:calc(100% - 32px);max-width:500px;height:100%;"]);t.default=function(e){Object(i.a)(e);var t=Object(a.useRouter)(),n=Object(o.useContext)(s.w).isLogin,u=Object(o.useContext)(s.i).language,m=Object(o.useContext)(s.g),b=m.isLoading,h=m.bookmarks,g=m.getNextBookmarks,w=m.getBookmarks;return Object(o.useEffect)((function(){n?b||w():t.push("/newspaper")}),[b]),n?p(l.a,{currentPage:"bookmark",loadNext:g},p(d,null,p(f,null,b?h.length>0?h.map((function(e,t){return"Ads"!==e?p(c.i,{key:"explorer-post-item-".concat(e.id),post:e,authorDescription:e.published_at.substring(0,e.published_at.length-3)}):p(c.h,{key:"explorer-banner-item-".concat(t)})})):p(c.a,{description:u["\ubd81\ub9c8\ud06c\uac00 \uc5c6\uc2b5\ub2c8\ub2e4.\nExplorer\uc5d0\uc11c \ubd81\ub9c8\ud06c\ud560 \ud3ec\uc2a4\ud2b8\ub97c \ucc3e\uc544\ubcf4\uc138\uc694."],link:"/explorer",buttonLabel:u.Explorer}):p(r.a.Fragment,null,p(c.i,null),p(c.i,null))))):p(c.c,null)}},wJMO:function(e,t,n){"use strict";var i=n("q1tI"),o=n.n(i),r=n("vOnD"),a=n("m/eG"),u=o.a.createElement,l=r.b.div.withConfig({displayName:"Main__Container",componentId:"sc-1uwa45w-0"})(["display:flex;flex:1;flex-direction:column;position:absolute;top:0;bottom:0;left:0;right:0;"]);t.a=function(e){var t=e.isHeadless,n=e.currentPage,i=e.loadNext,o=e.children;return u(l,null,u(a.g,{currentPage:n,isHeadless:t}),u(a.e,{loadNext:i},o),u(a.f,null))}}},[["ig0e",0,2,3,5,1,4]]]);