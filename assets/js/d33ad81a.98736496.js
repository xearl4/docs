"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4334],{3905:(e,t,o)=>{o.d(t,{Zo:()=>u,kt:()=>m});var n=o(7294);function a(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function r(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function l(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(t){a(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,a=function(e,t){if(null==e)return{};var o,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||(a[o]=e[o]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)o=r[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(a[o]=e[o])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),o=t;return e&&(o="function"==typeof e?e(t):l(l({},t),e)),o},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=p(o),m=a,h=d["".concat(i,".").concat(m)]||d[m]||c[m]||r;return o?n.createElement(h,l(l({ref:t},u),{},{components:o})):n.createElement(h,l({ref:t},u))}));function m(e,t){var o=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=o.length,l=new Array(r);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var p=2;p<r;p++)l[p]=o[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},1587:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>p});var n=o(7462),a=(o(7294),o(3905));const r={id:"setup",title:"Smapp Setup"},l=void 0,s={unversionedId:"start/smapp/setup",id:"start/smapp/setup",title:"Smapp Setup",description:"Step 1 - Setting up a Wallet",source:"@site/docs/start/smapp/setup.md",sourceDirName:"start/smapp",slug:"/start/smapp/setup",permalink:"/docs/start/smapp/setup",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/start/smapp/setup.md",tags:[],version:"current",frontMatter:{id:"setup",title:"Smapp Setup"},sidebar:"start",previous:{title:"Network Configuration",permalink:"/docs/start/smapp/netconfig"},next:{title:"Smeshing",permalink:"/docs/start/smapp/smeshing"}},i={},p=[{value:"Step 1 - Setting up a Wallet",id:"step-1---setting-up-a-wallet",level:2},{value:"About the Wallet",id:"about-the-wallet",level:2},{value:"Step 2 - Setting Up Your Smesher",id:"step-2---setting-up-your-smesher",level:2},{value:"About Smeshing",id:"about-smeshing",level:2},{value:"Disable Computer Sleep Mode",id:"disable-computer-sleep-mode",level:3},{value:"Windows 10",id:"windows-10",level:2},{value:"OS X",id:"os-x",level:2},{value:"Linux",id:"linux",level:2}],u={toc:p};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"step-1---setting-up-a-wallet"},"Step 1 - Setting up a Wallet"),(0,a.kt)("p",null,"Follow the installer's on-screen instruction and proceed to launch the App."),(0,a.kt)("p",null,"You should now see this welcome screen:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(9260).Z,width:"2784",height:"1624"})),(0,a.kt)("p",null,"Let's now proceed to set up the Smesher, Smeshing, and the Wallet. But first, some definitions."),(0,a.kt)("h2",{id:"about-the-wallet"},"About the Wallet"),(0,a.kt)("p",null,"A Wallet holds one or more Smesh accounts. An account is identified by a long, unique hexidecimal number, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"0x20a5...3a1f"),"."),(0,a.kt)("p",null,"The Wallet enables you to send and receive Smesh, and in the future, it will enable you to run decentralized applications (dapps) built on Spacemesh. Each account has a balance of Smesh coins (SMH)."),(0,a.kt)("p",null,"You can send SMH from your account up to your coin balance. So for example, if your account coin balance is 10 SMH then you can send up 10 SMH from it to other accounts by executing transactions."),(0,a.kt)("p",null,"?> We call the Spacemesh full p2p node a ",(0,a.kt)("em",{parentName:"p"},"Smesher.")),(0,a.kt)("p",null,"?> We call the process of producing blocks ",(0,a.kt)("em",{parentName:"p"},"Smeshing.")),(0,a.kt)("p",null,"?> A ",(0,a.kt)("em",{parentName:"p"},"Rewards Account")," is a wallet account you set up and use to receive Smesh coins in exchange for Smeshing."),(0,a.kt)("p",null,"Your wallet's main account will be used as your Smesher's rewards account. You will receive rewards to this account."),(0,a.kt)("p",null,"Let's now set up a new wallet to manage your Smesh and provide your Smesher with a ",(0,a.kt)("inlineCode",{parentName:"p"},"Rewards Account"),"."),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Click on ",(0,a.kt)("inlineCode",{parentName:"p"},"SETUP")," to start the setup process."),(0,a.kt)("p",null,"The next screen should look like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(861).Z,width:"2784",height:"1624"})),(0,a.kt)("p",null,"The App prompts you to enter a password to protect access to your newly-created wallet and to your Smesher. Proceed by choosing a password (8 or more characters) and confirming it."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"You will need to use the newly-created password to access your Wallet after you have locked access to the App. We recommend saving the password in a password manager, such as ",(0,a.kt)("a",{parentName:"p",href:"https://1password.com"},"1Password"),".")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Until you back up your Wallet using the 12 words backup method, you will not be able to access it without your password. ",(0,a.kt)("strong",{parentName:"p"},"There is no way to restore a wallet that wasn't backed up, if the password has been forgotten."))),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT"),". You should now see this screen:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(7369).Z,width:"2324",height:"1680"})),(0,a.kt)("h2",{id:"step-2---setting-up-your-smesher"},"Step 2 - Setting Up Your Smesher"),(0,a.kt)("h2",{id:"about-smeshing"},"About Smeshing"),(0,a.kt)("p",null,"Spacemesh uses a novel consensus protocol. Instead of constantly solving computational puzzles with your CPU while you participate in a blockchain, as in Proof of Work, it utilizes free space on your hard drive, following a one-time setup phase."),(0,a.kt)("p",null,"The storage you commit to Spacemesh is attached to your identity on the Spacemesh decentralized ledger. It determines your eligibility to submit blocks with transactions to the Spacemesh Testnet and to receive rewards for your contribution. ",(0,a.kt)("strong",{parentName:"p"},"The more free disk space you commit, the more frequently you will produce blocks and receive Smesh rewards.")),(0,a.kt)("p",null,"This one-time storage commitment enables Spacemesh to reach consensus on a distributed ledger without using Proof-of-Work or Proof-of-Stake algorithms."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The free space you commit to your Smesher is not used to store any useful data. It will be filled with cryptographic data that is only used to establish your node identity and your block Smeshing eligibility.")),(0,a.kt)("p",null,"You should now see this screen:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(3149).Z,width:"2784",height:"1624"})),(0,a.kt)("p",null,"The App prompts you to set up block Smeshing on your computer. You need to specify the directory that you want Spacemesh to save your PoST init file."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(8751).Z,width:"2784",height:"1624"})),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"Select Folder")," and locate a directory on one of your hard drives. Click ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT"),"."),(0,a.kt)("p",null,"You should now see this screen:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(8265).Z,width:"2784",height:"1624"})),(0,a.kt)("p",null,"Select the amount of free space you would like to commit to Spacemesh and click ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT"),"."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The more storage you allocate for Spacemesh on your drive, the higher your Smesh rewards will be.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"During this stage of Testnet 0.2, you can only allocate up to 4kb.")),(0,a.kt)("p",null,"You should now see this screen, prompting you to choose your preferred method of POS data generation."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(1540).Z,width:"2784",height:"1624"})),(0,a.kt)("p",null,"Once you've chosen, click ",(0,a.kt)("inlineCode",{parentName:"p"},"NEXT"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(2557).Z,width:"2784",height:"1624"})),(0,a.kt)("p",null,"This will bring you to a confirmation screen. If everything is as you like it, click ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE DATA"),"."),(0,a.kt)("p",null,"And finally, you should end up here:"),(0,a.kt)("p",null,(0,a.kt)("img",{src:o(5972).Z,width:"2784",height:"1624"})),(0,a.kt)("p",null,"The one-time storage commitment setup process has now begun. At this stage, due to the small size, it should only take a moment."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Do not turn off your computer before you get a notification about setup completion.")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The account currently selected in your wallet will be used as the ",(0,a.kt)("inlineCode",{parentName:"p"},"Rewards Address")," for block smeshing rewards.")),(0,a.kt)("p",null,"Click ",(0,a.kt)("inlineCode",{parentName:"p"},"GOT IT"),"."),(0,a.kt)("hr",null),(0,a.kt)("h3",{id:"disable-computer-sleep-mode"},"Disable Computer Sleep Mode"),(0,a.kt)("p",null,"To finish the one-time Smeshing process and have your Smesher participate in the Spacemesh protocol so you can earn ",(0,a.kt)("inlineCode",{parentName:"p"},"Smeshing rewards"),", ",(0,a.kt)("strong",{parentName:"p"},"you need to make sure that your desktop computer does not go to sleep or hibernate"),"."),(0,a.kt)("h2",{id:"windows-10"},"Windows 10"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Type ",(0,a.kt)("inlineCode",{parentName:"li"},"Power")," in the taskbar search box and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Power & sleep settings")," in the results."),(0,a.kt)("li",{parentName:"ol"},"Navigate to the drop-down titled ",(0,a.kt)("inlineCode",{parentName:"li"},"When plugged in, PC goes to sleep after")," and chose ",(0,a.kt)("inlineCode",{parentName:"li"},"Never")," from the drop-down.")),(0,a.kt)("h2",{id:"os-x"},"OS X"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Open the ",(0,a.kt)("inlineCode",{parentName:"li"},"System Preferences")," control panel and click on ",(0,a.kt)("inlineCode",{parentName:"li"},"Energy Saver"),"."),(0,a.kt)("li",{parentName:"ol"},"Click on the ",(0,a.kt)("inlineCode",{parentName:"li"},"Power Adapter")," tab if you see one."),(0,a.kt)("li",{parentName:"ol"},"Check the checkbox labeled ",(0,a.kt)("inlineCode",{parentName:"li"},"Prevent computer from sleeping automatically when the display is off"),".")),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"linux"},"Linux"),(0,a.kt)("p",null,"Please refer to the Power Settings, Hibernation and Sleep topics in your Linux distribution documentation."))}c.isMDXComponent=!0},3149:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/POS_setup_1_light-b367f379446941eacb78583c65f11c4c.png"},8751:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/POS_setup_2_light-cbd80e92bcbb6d1d220d3ee282a4f81e.png"},8265:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/POS_setup_3_light-d4e59c036126d132df6afa4f07eb6f8f.png"},1540:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/POS_setup_4_light-6a200c906998fbe1390555f38215163e.png"},2557:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/POS_setup_5_light-2ff8f494037f3736cdffcc86f7408454.png"},5972:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/POS_setup_done-7f1d56f69a779aa3179b3ab1052e327a.png"},861:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/create_wallet_password-89d2e529379177fe2c9810c29c63e4a2.png"},7369:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/protect_wallet_confirmed-9650d7c6ff4bd43e76cda3c8211ccdeb.png"},9260:(e,t,o)=>{o.d(t,{Z:()=>n});const n=o.p+"assets/images/welcome-dbf46f2d293352f7d09b69ce162f60f1.png"}}]);