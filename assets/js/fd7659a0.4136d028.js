"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7478],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=a,f=h["".concat(l,".").concat(d)]||h[d]||p[d]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8354:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const o={id:"economics",title:"Spacemesh Economic Model"},i=void 0,s={unversionedId:"learn/economics",id:"learn/economics",title:"Spacemesh Economic Model",description:"Big Picture",source:"@site/docs/learn/economics.md",sourceDirName:"learn",slug:"/learn/economics",permalink:"/docs/learn/economics",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/learn/economics.md",tags:[],version:"current",frontMatter:{id:"economics",title:"Spacemesh Economic Model"},sidebar:"learn",previous:{title:"Spacemesh Coin",permalink:"/docs/learn/coin"},next:{title:"PoST (Proof of Space-time)",permalink:"/docs/learn/post"}},l={},c=[{value:"Big Picture",id:"big-picture",level:2},{value:"Issuance",id:"issuance",level:2},{value:"Premine?",id:"premine",level:2}],u={toc:c};function p(e){let{components:t,...o}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"big-picture"},"Big Picture"),(0,a.kt)("p",null,"Like Bitcoin, Smesh\u2014the Spacemesh native coin\u2014will be issued over time according to an exponential decay function with a hard supply cap. Issuance will be roughly 7.3x more gradual than Bitcoin, with a half-life of around 29 years. At ten years post-genesis, 25% of total issuance up to that point will be reserved for early investors and builders. However, issuance will continue for a long, long time after that, and eventually this share will fall to 6.25% of total supply. The remaining 94.75% will be issued permissionlessly to Smeshers (Spacemesh miners). Spacemesh does not have a traditional premine: on the day the network goes live, and for the first year thereafter, zero coins will be issued to early supporters. ",(0,a.kt)("strong",{parentName:"p"},"The only coins in circulation and tradable for the first year are those that were mined permissionlessly by Smeshers.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(8203).Z,width:"2024",height:"1012"})),(0,a.kt)("h2",{id:"issuance"},"Issuance"),(0,a.kt)("p",null,"Rather than having abrupt \u201chalvenings\u201d, Spacemesh issuance decays predictably and gradually with every layer. The second is that, whereas Bitcoin has a half-life of about four years, the half-life of Spacemesh issuance will be about 29 years. This means that, while the last full Bitcoin will be issued around 2140, the last Smesh coin will be issued hundreds of years after genesis, in around 2899. The third is that a small portion of Spacemesh issuance, 6.25% of the total, flows into \u201cvaults\u201d for early investors and builders, with multi-year vesting."),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(7871).Z,width:"2024",height:"1012"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(9227).Z,width:"2024",height:"1012"})),(0,a.kt)("h2",{id:"premine"},"Premine?"),(0,a.kt)("p",null,"In the name of transparency and accountability, it\u2019s very important that the entire community understands how the project\u2019s earliest supporters are compensated. The most important thing to know is that, as described above, Spacemesh does not have a traditional premine: ",(0,a.kt)("strong",{parentName:"p"},"on the day the network goes live, and for the first year thereafter, zero coins will be issued to early supporters.")," The only coins in circulation and tradable for the first year are those that were mined permissionlessly by Smeshers."),(0,a.kt)("p",null,"All of the coins granted to early supporters are subject to a four year vesting schedule. At the launch of the network, we will lock 150M coins into smart contracts called Vaults that are owned by the project\u2019s early investors and core team. These coins will begin to vest after one year. For the following three years, these coins will slowly unlock, and they will be fully vested and spendable at the four year mark."),(0,a.kt)("p",null,"Ten years post-genesis, these coins will represent 25% of total issuance up to that point. Since issuance will continue for a long, long time after that, this share will eventually fall to 6.25% of the supply cap."))}p.isMDXComponent=!0},7871:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/First-10-Years-a704cc69480da0fc313815de3cb9cf0a.png"},9227:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/First-200-Years-4ec74327dcc1caef62ef46fd0ee95225.png"},8203:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/Inflation-NO-HEADLINE-fc914d2421e468addafcaff2c35c9c91.png"}}]);