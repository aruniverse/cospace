"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[937],{4852:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(9231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(r),d=o,m=f["".concat(s,".").concat(d)]||f[d]||p[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3382:function(e,t,r){r.r(t),r.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return l},metadata:function(){return c},toc:function(){return p}});var n=r(4380),o=r(8240),a=(r(9231),r(4852)),i=["components"],l={sidebar_label:"FAQ",sidebar_position:4},s=void 0,c={unversionedId:"faq",id:"faq",title:"faq",description:"What are the Pros & Cons?",source:"@site/docs/faq.mdx",sourceDirName:".",slug:"/faq",permalink:"/cospace/docs/faq",editUrl:"https://github.com/aruniverse/cospace/tree/master/docs/docs/docs/faq.mdx",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_label:"FAQ",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"CLI Usage",permalink:"/cospace/docs/cli-usage"},next:{title:"Acknowledgements",permalink:"/cospace/docs/ack"}},u={},p=[{value:"What are the Pros &amp; Cons?",id:"what-are-the-pros--cons",level:2},{value:"Pros",id:"pros",level:3},{value:"Cons",id:"cons",level:3}],f={toc:p};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},f,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,a.kt)("h2",{id:"what-are-the-pros--cons"},"What are the Pros & Cons?"),(0,a.kt)("h3",{id:"pros"},"Pros"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Easily link multiple (mono)repos together that use different package managers."),(0,a.kt)("li",{parentName:"ul"},"Don't have to manually link packages yourself with ",(0,a.kt)("inlineCode",{parentName:"li"},"npm link")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"yarn link")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"pnpm link"),"."),(0,a.kt)("li",{parentName:"ul"},"Ignore ",(0,a.kt)("a",{parentName:"li",href:"https://semver.org/"},"semver")," versioning, especially useful when working with pre-release versions."),(0,a.kt)("li",{parentName:"ul"},"Verify your dependencies are set up correctly.")),(0,a.kt)("h3",{id:"cons"},"Cons"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"If a package's dependencies are updated, the lockfile its apart of will not be updated, and you'll have to do that yourself outside the CoSpace unless you purge and re-install.")))}d.isMDXComponent=!0}}]);