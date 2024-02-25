"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[746],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=o.createContext({}),p=function(e){var t=o.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return o.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},h=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),h=p(n),m=a,d=h["".concat(i,".").concat(m)]||h[m]||u[m]||r;return n?o.createElement(d,s(s({ref:t},c),{},{components:n})):o.createElement(d,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,s=new Array(r);s[0]=h;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<r;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}h.displayName="MDXCreateElement"},4349:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(7462),a=(n(7294),n(3905));const r={id:"install",title:"Install Smapp"},s="Joining the Network",l={unversionedId:"start/smapp/install",id:"start/smapp/install",title:"Install Smapp",description:"To join the Spacemesh network, you can either run the Spacemesh App on your desktop computer, or run go-spacemesh with our CLI tools. This guide is for using Smapp, which is simpler and recommended for most smeshers.",source:"@site/docs/start/smapp/install.md",sourceDirName:"start/smapp",slug:"/start/smapp/install",permalink:"/docs/start/smapp/install",draft:!1,tags:[],version:"current",frontMatter:{id:"install",title:"Install Smapp"},sidebar:"start",previous:{title:"Getting Started",permalink:"/docs/start/"},next:{title:"System Requirements",permalink:"/docs/start/smapp/requirements"}},i={},p=[{value:"About Smapp (The Spacemesh App)",id:"about-smapp-the-spacemesh-app",level:2},{value:"Smesher",id:"smesher",level:3},{value:"Wallet",id:"wallet",level:3},{value:"Spacemesh Application",id:"spacemesh-application",level:3},{value:"Step 1 - Downloading the Installer",id:"step-1---downloading-the-installer",level:2},{value:"Security Notes",id:"security-notes",level:3},{value:"Step 2 - Installing the App",id:"step-2---installing-the-app",level:2},{value:"Windows",id:"windows",level:3},{value:"OS X",id:"os-x",level:3},{value:"Linux",id:"linux",level:3}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"joining-the-network"},"Joining the Network"),(0,a.kt)("p",null,"To join the Spacemesh network, you can either run the Spacemesh App on your desktop computer, or run go-spacemesh with our CLI tools. This guide is for using Smapp, which is simpler and recommended for most smeshers."),(0,a.kt)("h2",{id:"about-smapp-the-spacemesh-app"},"About Smapp (The Spacemesh App)"),(0,a.kt)("p",null,'Smapp includes a Spacemesh full p2p node (which we call a Smesher), and a basic Smesh wallet which we call the "Wallet."'),(0,a.kt)("h3",{id:"smesher"},"Smesher"),(0,a.kt)("p",null,"The Smesher is the software that creates and updates the Smesh (SMH) distributed ledger. It also creates and maintains your disk space commitment to the Spacemesh network. The Spacemesh decentralized platform is created by people just like you who run a Smesher on their own desktop computers."),(0,a.kt)("p",null,"Your Smesher participates in the Spacemesh decentralized consensus protocol and is responsible for the block-Smeshing process. Smeshing is the process of submitting eligible block proposals that are used to generate a block, for which you receive rewards. Here is a ",(0,a.kt)("a",{parentName:"p",href:"https://spacemesh.io/blog/requirements-for-spacemesh-rewards/"},"full explanation")," of what is required of a node in order to earn these rewards."),(0,a.kt)("p",null,"Before you can produce block proposals, you need to commit a minimum of 256GiB of free storage on your hard drive to Spacemesh. The commitment process only happens once, when you first set up Smapp, and is used indefinitely to produce more blocks."),(0,a.kt)("h3",{id:"wallet"},"Wallet"),(0,a.kt)("p",null,"The Wallet is a basic Smesh (SMH) coin wallet that you use to maintain your Smesh (SMH) coins account, execute transactions and check the status of incoming transactions initiated by other accounts. You can run your app in wallet-only mode, if you'd rather not set up a node."),(0,a.kt)("h3",{id:"spacemesh-application"},"Spacemesh Application"),(0,a.kt)("p",null,"Smapp integrates a Smesher and a Wallet into one package, which we hope you find delightful and easy to use, even without deep technical understanding of cryptocurrency terms and concepts."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You do NOT need to run any additional software to join the network, besides running Smapp on your computer.")),(0,a.kt)("p",null,"Follow the instructions on this page to download, install and run the App."),(0,a.kt)("h2",{id:"step-1---downloading-the-installer"},"Step 1 - Downloading the Installer"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Before installing, please confirm that your computer meets the ",(0,a.kt)("a",{parentName:"p",href:"/docs/start/smapp/requirements"},"minimum system requirements"),".")),(0,a.kt)("p",null,"Next, download the App Installer for your OS by visiting our ",(0,a.kt)("a",{parentName:"p",href:"https://spacemesh.io/start"},"main website"),"."),(0,a.kt)("p",null,"?> If your Linux system does not support Electron apps then you can build a Spacemesh full node and a CLI wallet from source code. For more information see the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh"},"go-spacemesh README")),(0,a.kt)("h3",{id:"security-notes"},"Security Notes"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"All software released by Spacemesh is 100% open source. The Smapp Installer you are downloading was packaged from code in the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos"},"Spacemesh Open Source software repositories")," available on Github. We provide the Installer to make it convenient for non-developers to join the Spacemesh .")),(0,a.kt)("h2",{id:"step-2---installing-the-app"},"Step 2 - Installing the App"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Locate the Installer you downloaded and double-click it")," to install Smapp."),(0,a.kt)("h3",{id:"windows"},"Windows"),(0,a.kt)("p",null,"Follow the on screen instructions. The installer defaults to launch Spacemesh as soon as it is the installation is complete."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"If you see a Windows security alert then check the checkbox 'Priave networks' and click 'Allow access'.")),(0,a.kt)("h3",{id:"os-x"},"OS X"),(0,a.kt)("p",null,"Drag the Smapp icon in the installer window to the Applications folder shortcut. Next, open your Applications directory and double-click ",(0,a.kt)("inlineCode",{parentName:"p"},"Spacemesh")," to launch it."),(0,a.kt)("h3",{id:"linux"},"Linux"),(0,a.kt)("p",null,"For easiest installation, we recommend installing the AppImage version of Smapp on your Linux system."),(0,a.kt)("p",null,"Double-click the installer to install Smapp."),(0,a.kt)("p",null,"The app should be installed in ",(0,a.kt)("inlineCode",{parentName:"p"},"/opt/Spacemesh"),", and you should see the app listed under the Applications menu in your window manager. You can now launch the app."))}u.isMDXComponent=!0}}]);