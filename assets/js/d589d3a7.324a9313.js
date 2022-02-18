"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[162],{4852:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(9231);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=c(r),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},7129:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return p},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(5086),o=r(9126),a=(r(9231),r(4852)),i=["components"],p={sidebar_position:2},l="Getting Started",c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Prerequisites",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/cospace/docs/getting-started",editUrl:"https://github.com/aruniverse/cospace/tree/master/docs/docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/cospace/docs/intro"},next:{title:"CLI Usage",permalink:"/cospace/docs/cli-usage"}},s=[{value:"Prerequisites",id:"prerequisites",children:[],level:2},{value:"Create a new <code>CoSpace</code>",id:"create-a-new-cospace",children:[{value:"Initialize",id:"initialize",children:[],level:3},{value:"Link your (mono)repos",id:"link-your-monorepos",children:[],level:3}],level:2}],u={toc:s};function d(e){var t=e.components,r=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting Started"),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://pnpm.io/installation"},"pnpm"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"If you're using ",(0,a.kt)("a",{parentName:"li",href:"https://nodejs.org/en/download/"},"Node.js")," version ^14.19 or ^16.9 you just need to enable pnpm via ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/nodejs/corepack"},"corepack"),".")))),(0,a.kt)("h2",{id:"create-a-new-cospace"},"Create a new ",(0,a.kt)("inlineCode",{parentName:"h2"},"CoSpace")),(0,a.kt)("h3",{id:"initialize"},"Initialize"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npx cospace@latest init my-cospace\n")),(0,a.kt)("h3",{id:"link-your-monorepos"},"Link your (mono)repos"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd my-cospace\n")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Clone all the repos you want to link together under the ",(0,a.kt)("inlineCode",{parentName:"p"},"repos")," sub directory.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm-workspace.yaml")," file with all the packages you want to add to your CoSpace. By default all packages under the ",(0,a.kt)("inlineCode",{parentName:"p"},"repos")," directory will be added to your CoSpace, but you probably want to be more specific.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Update the ",(0,a.kt)("inlineCode",{parentName:"p"},"cospace.code-workspace")," file with all the repos you want to add to your ",(0,a.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/docs/editor/multi-root-workspaces"},"vscode multi-root workspace"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm install")," to install all the packages you've added to your CoSpace.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run ",(0,a.kt)("inlineCode",{parentName:"p"},"pnpm build")," to build all the packages you've added to your CoSpace using your monorepo task runner. By default we use ",(0,a.kt)("a",{parentName:"p",href:"https://microsoft.github.io/lage/"},"lage"),", but ",(0,a.kt)("a",{parentName:"p",href:"https://turborepo.org/docs"},"turborepo")," should theoretically work."))))}d.isMDXComponent=!0}}]);