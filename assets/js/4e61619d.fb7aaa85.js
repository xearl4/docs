"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8053],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>c});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=u(r),c=o,f=d["".concat(l,".").concat(c)]||d[c]||m[c]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function c(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6514:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(7462),o=(r(7294),r(3905));const a={id:"requirements",title:"System Requirements"},i=void 0,s={unversionedId:"start/requirements",id:"start/requirements",title:"System Requirements",description:"Spacemesh Genesis Candidate System Requirements",source:"@site/docs/start/requirements.md",sourceDirName:"start",slug:"/start/requirements",permalink:"/docs/start/requirements",draft:!1,tags:[],version:"current",frontMatter:{id:"requirements",title:"System Requirements"},sidebar:"start",previous:{title:"Getting Started",permalink:"/docs/start/"},next:{title:"Smesher Guide",permalink:"/docs/start/smesher"}},l={},u=[{value:"Spacemesh Genesis Candidate System Requirements",id:"spacemesh-genesis-candidate-system-requirements",level:2},{value:"System Requirements",id:"system-requirements",level:3},{value:"Minimum requirements for running a node:",id:"minimum-requirements-for-running-a-node",level:4},{value:"For smeshing in addition to running a node:",id:"for-smeshing-in-addition-to-running-a-node",level:4},{value:"To support more than the minimum space allocation for smeshing, or to allow uninterrupted use of the computer while the node is running, it\u2019s recommended to have:",id:"to-support-more-than-the-minimum-space-allocation-for-smeshing-or-to-allow-uninterrupted-use-of-the-computer-while-the-node-is-running-its-recommended-to-have",level:4},{value:"Supported Processors for proof of space setup",id:"supported-processors-for-proof-of-space-setup",level:4},{value:"Popular Supported Processors Models",id:"popular-supported-processors-models",level:4},{value:"Operational Notes",id:"operational-notes",level:2},{value:"CPU Usage",id:"cpu-usage",level:3},{value:"Network Configuration",id:"network-configuration",level:3},{value:"Laptop Usage",id:"laptop-usage",level:3},{value:"Spacemesh Full Node System Requirements",id:"spacemesh-full-node-system-requirements",level:3},{value:"About Proof of Space Data",id:"about-proof-of-space-data",level:3}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"spacemesh-genesis-candidate-system-requirements"},"Spacemesh Genesis Candidate System Requirements"),(0,o.kt)("h3",{id:"system-requirements"},"System Requirements"),(0,o.kt)("h4",{id:"minimum-requirements-for-running-a-node"},"Minimum requirements for running a node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU: Intel or AMD x86-64 or 64-bit ARM, including Apple Silicon (but not Raspberry Pi)\nMemory: 1GiB+"),(0,o.kt)("li",{parentName:"ul"},"OS: Windows 10/11, MacOS, Ubuntu 22.04+ or Fedora 36+"),(0,o.kt)("li",{parentName:"ul"},"Disk: 50GiB of free disk space"),(0,o.kt)("li",{parentName:"ul"},"An always-on, unmetered Internet connection capable of 5 mbps download and 1 mbps upload")),(0,o.kt)("h4",{id:"for-smeshing-in-addition-to-running-a-node"},"For smeshing in addition to running a node:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"CPU support for AES-NI"),(0,o.kt)("li",{parentName:"ul"},"256GiB of free disk space for PoST files"),(0,o.kt)("li",{parentName:"ul"},"Any GPU with OpenCL support")),(0,o.kt)("h4",{id:"to-support-more-than-the-minimum-space-allocation-for-smeshing-or-to-allow-uninterrupted-use-of-the-computer-while-the-node-is-running-its-recommended-to-have"},"To support more than the minimum space allocation for smeshing, or to allow uninterrupted use of the computer while the node is running, it\u2019s recommended to have:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A hard drive that can sustain at least 100MB/s of sequential read"),(0,o.kt)("li",{parentName:"ul"},"A multi-core CPU from the last 8 years")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"The Spacemesh App is an Electron App. It is supported on any Linux distribution that supports Electron apps.")),(0,o.kt)("h4",{id:"supported-processors-for-proof-of-space-setup"},"Supported Processors for proof of space setup"),(0,o.kt)("p",null,"You can create proof of space data using your computer's integrated graphics card, a discrete graphics card, or your computer's main CPU. The following processors are supported:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A modern Intel or AMD x86-64 cpu."),(0,o.kt)("li",{parentName:"ul"},"An Nvidia GPU with CUDA support (minimum compute compatibility 5.0, maximum compute compatibility 8.6), and Nvidia drivers version R450 or newer. ",(0,o.kt)("a",{parentName:"li",href:"https://developer.nvidia.com/cuda-gpus"},"Nvidia GPUs CUDA compute compatibility info"),"."),(0,o.kt)("li",{parentName:"ul"},"A GPU and drivers with Vulkan 1.2 support, such as a modern AMD, Apple M1 and M2, and Intel GPUs.")),(0,o.kt)("h4",{id:"popular-supported-processors-models"},"Popular Supported Processors Models"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Nvidia Geforce RTX 2070 / 2080."),(0,o.kt)("li",{parentName:"ul"},"Nvidia GTX 1060."),(0,o.kt)("li",{parentName:"ul"},"AMD Radeon RX ",(0,o.kt)("a",{parentName:"li",href:"https://www.newegg.com/onda-model-rx550-4g/p/1DW-00C1-00001"},"550")," / 570 / 580."),(0,o.kt)("li",{parentName:"ul"},"AMD Radeon Pro 555x."),(0,o.kt)("li",{parentName:"ul"},"Nvidia Tesla V100, T4, P100 or P4."),(0,o.kt)("li",{parentName:"ul"},"Apple M1 and M2."),(0,o.kt)("li",{parentName:"ul"},"Intel UHD Graphics 630.")),(0,o.kt)("h2",{id:"operational-notes"},"Operational Notes"),(0,o.kt)("h3",{id:"cpu-usage"},"CPU Usage"),(0,o.kt)("p",null,"As long as your system and configuration meets the recommended requirements, ongoing utilization of your CPU by the Spacemesh App should be limited during normal operation (after the initial setup phase) to 2 CPU cores."),(0,o.kt)("h3",{id:"network-configuration"},"Network Configuration"),(0,o.kt)("p",null,"Your network should allow the App to accept incoming connections on UDP port 7153 and on TCP port 7153 and your computer firewall should not block incoming UDP and TPC packets on this port. The App attempts to automatically configure your network using UPnP. In some cases you may need to configure your router and firewall manually. Follow ",(0,o.kt)("a",{parentName:"p",href:"/docs/start/smapp/netconfig"},"this guide")," to configure your network."),(0,o.kt)("h3",{id:"laptop-usage"},"Laptop Usage"),(0,o.kt)("p",null,"You can install the App, run a Smesher and produce blocks on your laptop if it meets the minimum system requirements. However, you will need to make sure you leave your laptop open and connected to power and to the Internet 24/7."),(0,o.kt)("p",null,"Occasionally shutting down your laptop or the App may prevent you from Smeshing blocks and from earning Smeshing rewards."),(0,o.kt)("h3",{id:"spacemesh-full-node-system-requirements"},"Spacemesh Full Node System Requirements"),(0,o.kt)("p",null,"Following are the requirements for running the a Spacemesh 0.2 full node without running the Spacemesh App. We recommend this setup to technical users who are comfortable with the command line."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"With this setup, your computer will be dedicated to running the Spacemesh full node and will not be used for running other interactive apps.")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A computer with a modern Intel, an AMD CPU (2 cores / 4 native threads) or an Apple M1 CPU."),(0,o.kt)("li",{parentName:"ul"},"OS: Windows 10/11, macOS, Ubuntu 22.04, Fedora 36."),(0,o.kt)("li",{parentName:"ul"},"4 GB RAM."),(0,o.kt)("li",{parentName:"ul"},"300 GiB free disk space (HDD or SSD)."),(0,o.kt)("li",{parentName:"ul"},"One of the supported processors for proof of space setup."),(0,o.kt)("li",{parentName:"ul"},"An always-on, unmetered Internet connection capable of 10 mbps download and 1 mbps upload.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"about-proof-of-space-data"},"About Proof of Space Data"),(0,o.kt)("p",null,"You only need to setup proof of space data once to smesh for an unlimited period of time. The larger your proof of space data is, the higher your smeshing rewards will be."),(0,o.kt)("p",null,"You can use any magnetic hard drive (HDD) or SSD drive for storing proof of space data. There is no significant advantage in using an SSD over HDD."),(0,o.kt)("p",null,"You do not need to have temporary disk space larger than your final proof of space data. Creating proof of space data on more than one volume is not yet supported."))}m.isMDXComponent=!0}}]);