_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[7],{"/0+H":function(e,t,n){"use strict";t.__esModule=!0,t.isInAmpMode=i,t.useAmp=function(){return i(r.default.useContext(o.AmpStateContext))};var a,r=(a=n("q1tI"))&&a.__esModule?a:{default:a},o=n("lwAK");function i(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.ampFirst,n=void 0!==t&&t,a=e.hybrid,r=void 0!==a&&a,o=e.hasQuery;return n||r&&(void 0!==o&&o)}},0:function(e,t,n){n("74v/"),e.exports=n("nOHt")},"74v/":function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_app",function(){return n("cha2")}])},"7W2i":function(e,t,n){var a=n("SksO");e.exports=function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&a(e,t)}},"8Kt/":function(e,t,n){"use strict";n("lSNA");t.__esModule=!0,t.defaultHead=l,t.default=void 0;var a,r=function(e){if(e&&e.__esModule)return e;if(null===e||"object"!==typeof e&&"function"!==typeof e)return{default:e};var t=u();if(t&&t.has(e))return t.get(e);var n={},a=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var o=a?Object.getOwnPropertyDescriptor(e,r):null;o&&(o.get||o.set)?Object.defineProperty(n,r,o):n[r]=e[r]}n.default=e,t&&t.set(e,n);return n}(n("q1tI")),o=(a=n("Xuae"))&&a.__esModule?a:{default:a},i=n("lwAK"),s=n("FYa8"),c=n("/0+H");function u(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return u=function(){return e},e}function l(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0],t=[r.default.createElement("meta",{charSet:"utf-8"})];return e||t.push(r.default.createElement("meta",{name:"viewport",content:"width=device-width"})),t}function p(e,t){return"string"===typeof t||"number"===typeof t?e:t.type===r.default.Fragment?e.concat(r.default.Children.toArray(t.props.children).reduce((function(e,t){return"string"===typeof t||"number"===typeof t?e:e.concat(t)}),[])):e.concat(t)}var f=["name","httpEquiv","charSet","itemProp"];function d(e,t){return e.reduce((function(e,t){var n=r.default.Children.toArray(t.props.children);return e.concat(n)}),[]).reduce(p,[]).reverse().concat(l(t.inAmpMode)).filter(function(){var e=new Set,t=new Set,n=new Set,a={};return function(r){var o=!0;if(r.key&&"number"!==typeof r.key&&r.key.indexOf("$")>0){var i=r.key.slice(r.key.indexOf("$")+1);e.has(i)?o=!1:e.add(i)}switch(r.type){case"title":case"base":t.has(r.type)?o=!1:t.add(r.type);break;case"meta":for(var s=0,c=f.length;s<c;s++){var u=f[s];if(r.props.hasOwnProperty(u))if("charSet"===u)n.has(u)?o=!1:n.add(u);else{var l=r.props[u],p=a[u]||new Set;p.has(l)?o=!1:(p.add(l),a[u]=p)}}}return o}}()).reverse().map((function(e,t){var n=e.key||t;return r.default.cloneElement(e,{key:n})}))}function h(e){var t=e.children,n=(0,r.useContext)(i.AmpStateContext),a=(0,r.useContext)(s.HeadManagerContext);return r.default.createElement(o.default,{reduceComponentsToState:d,headManager:a,inAmpMode:(0,c.isInAmpMode)(n)},t)}h.rewind=function(){};var m=h;t.default=m},Bnag:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},EbDI:function(e,t){e.exports=function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}},FYa8:function(e,t,n){"use strict";var a;t.__esModule=!0,t.HeadManagerContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.HeadManagerContext=r},Ijbi:function(e,t,n){var a=n("WkPL");e.exports=function(e){if(Array.isArray(e))return a(e)}},Nsbk:function(e,t){function n(t){return e.exports=n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},n(t)}e.exports=n},PJYZ:function(e,t){e.exports=function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}},RIqP:function(e,t,n){var a=n("Ijbi"),r=n("EbDI"),o=n("ZhPi"),i=n("Bnag");e.exports=function(e){return a(e)||r(e)||o(e)||i()}},Xuae:function(e,t,n){"use strict";var a=n("RIqP"),r=n("lwsE"),o=n("W8MJ"),i=n("PJYZ"),s=n("7W2i"),c=n("a1gu"),u=n("Nsbk");function l(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,a=u(e);if(t){var r=u(this).constructor;n=Reflect.construct(a,arguments,r)}else n=a.apply(this,arguments);return c(this,n)}}t.__esModule=!0,t.default=void 0;var p=n("q1tI"),f=!1,d=function(e){s(n,e);var t=l(n);function n(e){var o;return r(this,n),(o=t.call(this,e))._hasHeadManager=void 0,o.emitChange=function(){o._hasHeadManager&&o.props.headManager.updateHead(o.props.reduceComponentsToState(a(o.props.headManager.mountedInstances),o.props))},o._hasHeadManager=o.props.headManager&&o.props.headManager.mountedInstances,f&&o._hasHeadManager&&(o.props.headManager.mountedInstances.add(i(o)),o.emitChange()),o}return o(n,[{key:"componentDidMount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.add(this),this.emitChange()}},{key:"componentDidUpdate",value:function(){this.emitChange()}},{key:"componentWillUnmount",value:function(){this._hasHeadManager&&this.props.headManager.mountedInstances.delete(this),this.emitChange()}},{key:"render",value:function(){return null}}]),n}(p.Component);t.default=d},a1gu:function(e,t,n){var a=n("cDf5"),r=n("PJYZ");e.exports=function(e,t){return!t||"object"!==a(t)&&"function"!==typeof t?r(e):t}},cha2:function(e,t,n){"use strict";n.r(t);var a=n("h4VS"),r=n("q1tI"),o=n.n(r),i=n("8Kt/"),s=n.n(i),c=n("hVfV"),u=n("vOnD"),l=o.a.createElement;function p(){var e=Object(a.a)(["\n  * {\n    font-family: 'Noto Sans KR', sans-serif;\n    font-weight: 300;\n  }\n  #__next {\n    width: 100%;\n  }\n  html, body {\n    margin: 0 !important;\n    padding: 0 !important;\n    background-color: #f5f7fb;\n    display: flex;\n    width: 100%;\n    height: 100%;\n    overflow: hidden;\n  }\n"]);return p=function(){return e},e}var f=Object(u.a)(p());t.default=function(e){var t=e.Component,n=e.pageProps;Object(r.useLayoutEffect)((function(){var e=document.createElement("link");e.href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;500&display=swap",e.rel="stylesheet",document.head.appendChild(e)}),[]);var a="Clog - \ud2b8\ub80c\ub4dc\uc640 \uc778\uc0ac\uc774\ud2b8\ub97c \uc704\ud55c \uac1c\ubc1c\uc790 \ucd9c\ud1f4\uadfc \ub274\uc2a4\ub808\ud130",i="\uac1c\ubc1c\uc790\uc758 \ucd9c\ud1f4\uadfc \uc2dc\uac04\uc744 \ucc45\uc784\uc9c0\ub294 \ub274\uc2a4\ub808\ud130 \uc571. \uac1c\ubc1c\uc790\ub4e4\uc744 \uc704\ud55c \ucd5c\uc2e0 \uac1c\ubc1c \ud2b8\ub79c\ub4dc\uc640 \uc778\uc0ac\uc774\ud2b8\ub97c \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \uc2a4\ud0c0\ud2b8\uc5c5 \uc815\ubcf4, \uae30\uc220 \ube14\ub85c\uadf8, \uc790\uae30 \uac1c\ubc1c \ub4f1 \uc5ec\ub7ec\ubd84\uc5d0\uac8c \ud544\uc694\ud55c \uc815\ubcf4\ub97c \ubaa8\uc544\uc11c \uc81c\uacf5\ud558\uace0 \uc788\uc2b5\ub2c8\ub2e4. \ucd9c\ud1f4\uadfc\uc5d0 \uc77d\uc744\uac70\ub9ac\uac00 \uac00\ub4dd! \uac1c\ubc1c\uc790\ub97c  \uc704\ud55c \ud544\uc218\uc571! \uc138\uc0c1\uc758 \ubaa8\ub4e0 \uc815\ubcf4\ub97c \ubaa8\uc544\ubcf4\ub2e4, Clog!";return l(o.a.Fragment,null,l(s.a,null,l("title",null,a),l("meta",{name:"title",content:a}),l("meta",{name:"description",content:i}),l("meta",{property:"og:url",content:"http://clog.posstree.com"}),l("meta",{property:"og:type",content:"website"}),l("meta",{property:"og:title",content:"{title}"}),l("meta",{property:"og:description",content:"{description}"}),l("meta",{property:"og:image",content:"http://clog.posstree.com/assets/images/share.jpg"}),l("meta",{name:"twitter:card",content:"summary"}),l("meta",{name:"twitter:title",content:a}),l("meta",{name:"twitter:description",content:i}),l("meta",{name:"twitter:image",content:"http://clog.posstree.com/assets/images/share.jpg"}),l("script",{async:!0,src:"https://www.googletagmanager.com/gtag/js?id=UA-125408913-4"}),l("script",{dangerouslySetInnerHTML:{__html:"\n              window.dataLayer = window.dataLayer || [];\n              function gtag(){dataLayer.push(arguments);}\n              gtag('js', new Date());\n\n              gtag('config', 'UA-125408913-4');\n              "}}),l("link",{rel:"apple-touch-icon",sizes:"57x57",href:"/assets/favicon/apple-icon-57x57.png"}),l("link",{rel:"apple-touch-icon",sizes:"60x60",href:"/assets/favicon/apple-icon-60x60.png"}),l("link",{rel:"apple-touch-icon",sizes:"72x72",href:"/assets/favicon/apple-icon-72x72.png"}),l("link",{rel:"apple-touch-icon",sizes:"76x76",href:"/assets/favicon/apple-icon-76x76.png"}),l("link",{rel:"apple-touch-icon",sizes:"114x114",href:"/assets/favicon/apple-icon-114x114.png"}),l("link",{rel:"apple-touch-icon",sizes:"120x120",href:"/assets/favicon/apple-icon-120x120.png"}),l("link",{rel:"apple-touch-icon",sizes:"144x144",href:"/assets/favicon/apple-icon-144x144.png"}),l("link",{rel:"apple-touch-icon",sizes:"152x152",href:"/assets/favicon/apple-icon-152x152.png"}),l("link",{rel:"apple-touch-icon",sizes:"180x180",href:"/assets/favicon/apple-icon-180x180.png"}),l("link",{rel:"icon",type:"image/png",sizes:"192x192",href:"/assets/favicon/android-icon-192x192.png"}),l("link",{rel:"icon",type:"image/png",sizes:"32x32",href:"/assets/favicon/favicon-32x32.png"}),l("link",{rel:"icon",type:"image/png",sizes:"96x96",href:"/assets/favicon/favicon-96x96.png"}),l("link",{rel:"icon",type:"image/png",sizes:"16x16",href:"/assets/favicon/favicon-16x16.png"}),l("link",{rel:"manifest",href:"/assets/favicon/manifest.json"}),l("meta",{name:"msapplication-TileColor",content:"#314FFD"}),l("meta",{name:"msapplication-TileImage",content:"/ms-icon-144x144.png"}),l("meta",{name:"theme-color",content:"#314FFD"})),l(f,null),l(c.j,null,l(c.v,null,l(c.n,null,l(c.p,null,l(c.x,null,l(c.r,null,l(c.z,null,l(c.l,null,l(c.h,null,l(c.b,null,l(c.t,null,l(c.f,null,l(c.d,null,l(t,n)))))))))))))))}},lSNA:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}},lwAK:function(e,t,n){"use strict";var a;t.__esModule=!0,t.AmpStateContext=void 0;var r=((a=n("q1tI"))&&a.__esModule?a:{default:a}).default.createContext({});t.AmpStateContext=r}},[[0,0,2,3,5,1,4]]]);