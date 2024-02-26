"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1380],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),p=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),d=p(a),m=i,u=d["".concat(l,".").concat(m)]||d[m]||h[m]||o;return a?n.createElement(u,s(s({ref:t},c),{},{components:a})):n.createElement(u,s({ref:t},c))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,s=new Array(o);s[0]=d;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:i,s[1]=r;for(var p=2;p<o;p++)s[p]=a[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4706:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>p});var n=a(7462),i=(a(7294),a(3905));const o={id:"setup",title:"Advanced Setup"},s=void 0,r={unversionedId:"start/smesher/setup",id:"start/smesher/setup",title:"Advanced Setup",description:"Compiling",source:"@site/docs/start/smesher/setup.md",sourceDirName:"start/smesher",slug:"/start/smesher/setup",permalink:"/docs/start/smesher/setup",draft:!1,tags:[],version:"current",frontMatter:{id:"setup",title:"Advanced Setup"},sidebar:"start",previous:{title:"Network and Dashboard",permalink:"/docs/start/smapp/net-dash"},next:{title:"PoST Initialization",permalink:"/docs/start/smesher/post_init"}},l={},p=[{value:"Compiling",id:"compiling",level:2},{value:"Running",id:"running",level:2},{value:"Configuring",id:"configuring",level:2},{value:"Coinbase",id:"coinbase",level:3},{value:"Multiple nodes",id:"multiple-nodes",level:3},{value:"System Service on Linux",id:"system-service-on-linux",level:2},{value:"Parallel Initialization",id:"parallel-initialization",level:2},{value:"Multiple Drives",id:"multiple-drives",level:2},{value:"Multiple Identities",id:"multiple-identities",level:3},{value:"Joining Filesystems",id:"joining-filesystems",level:3},{value:"State Managament",id:"state-managament",level:2},{value:"Reading the State Database",id:"reading-the-state-database",level:3},{value:"Backing up State",id:"backing-up-state",level:3},{value:"Clearing State",id:"clearing-state",level:3},{value:"Copying State",id:"copying-state",level:3}],c={toc:p};function h(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"compiling"},"Compiling"),(0,i.kt)("p",null,"go-spacemesh has a very limited set of dependencies and requirements, the main one being a Go toolchain. It also requires ",(0,i.kt)("inlineCode",{parentName:"p"},"make")," and ",(0,i.kt)("a",{parentName:"p",href:"https://docs.github.com/en/repositories/working-with-files/managing-large-files/installing-git-large-file-storage"},"Git Large File Storage"),". Make sure you have a ",(0,i.kt)("a",{parentName:"p",href:"https://go.dev/dl/"},"recent version of Go")," installed, clone the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh"},"go-spacemesh repository"),", then run ",(0,i.kt)("inlineCode",{parentName:"p"},"make install"),", which will install the other dependencies for you automatically. Note that this includes a compiled version of the Spacemesh PoST library, but as long as your Go toolchain is set up correctly, this should work out of the box."),(0,i.kt)("p",null,"You can see the minimum required version of Go in a few places including ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/989682a9f574e9860912287634a47bb0db2d0640/go.mod#L3"},(0,i.kt)("inlineCode",{parentName:"a"},"go.mod"))," and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/989682a9f574e9860912287634a47bb0db2d0640/README.md?plain=1#L89"},"README"),"."),(0,i.kt)("p",null,"Assuming you intend to run your node on mainnet, ",(0,i.kt)("strong",{parentName:"p"},"make certain that you compile using the tag that matches the ",(0,i.kt)("a",{parentName:"strong",href:"https://github.com/spacemeshos/go-spacemesh/releases"},"latest release")),", e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> git clone --depth 1 --branch v1.1.1 https://github.com/spacemeshos/go-spacemesh.git\n> make install\n> make build\n")),(0,i.kt)("p",null,"This builds the ",(0,i.kt)("inlineCode",{parentName:"p"},"go-spacemesh")," binary in the ",(0,i.kt)("inlineCode",{parentName:"p"},"build/")," directory."),(0,i.kt)("p",null,"For the most up to date information on compiling check the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh#readme"},"README"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/Makefile"},"Makefile")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/Makefile-libs.Inc"},"Makefile-libs"),", and the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh/blob/develop/.github/workflows/release.yml"},"release workflow"),"."),(0,i.kt)("h2",{id:"running"},"Running"),(0,i.kt)("p",null,"The node features a set of reasonable default parameters that should work well out of the box for most users and most use cases, but you can change all of them using command line flags and/or the config file. The exact command you use to run ",(0,i.kt)("inlineCode",{parentName:"p"},"go-spacemesh")," will depend upon your local configuration and requirements. See the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/go-spacemesh#readme"},"README")," and run ",(0,i.kt)("inlineCode",{parentName:"p"},"go-spacemesh -h")," for the full list of arguments:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> go-spacemesh -h\nstart node\n\nUsage:\n  node [flags]\n  node [command]\n\nAvailable Commands:\n  completion  Generate the autocompletion script for the specified shell\n  help        Help about any command\n  version     Show version info\n\nFlags:\n  -a, --accounts string=uint64                        List of prefunded accounts\n      --advertise-address string                      libp2p address with identity (example: /dns4/bootnode.spacemesh.io/tcp/5003)\n      --beacon-first-voting-round-duration duration   First voting round duration in milliseconds (default 30m0s)\n      --beacon-grace-period-duration duration         Grace period duration in milliseconds (default 10m0s)\n      --beacon-kappa int                              Security parameter (for calculating ATX threshold) (default 40)\n      --beacon-proposal-duration duration             Proposal duration in milliseconds (default 4m0s)\n      --beacon-q *big.Rat                             Ratio of dishonest spacetime (for calculating ATX threshold). It should be a string representing a rational number. (default 1/3)\n      --beacon-rounds-number uint32                   Amount of rounds in every epoch (default 300)\n      --beacon-sync-weight-units int                  Numbers of weight units to wait before determining beacon values from them. (default 800)\n      --beacon-theta *big.Rat                         Ratio of votes for reaching consensus (default 1/4)\n      --beacon-votes-limit uint32                     Maximum allowed number of votes to be sent (default 100)\n...\n")),(0,i.kt)("p",null,"Assuming everything else is set up correctly in your config file (see next section), the only CLI flag you need is to specify the location of the config file, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> go-spacemesh -c node-config.json\n")),(0,i.kt)("h2",{id:"configuring"},"Configuring"),(0,i.kt)("p",null,"The node currently does not need any config to run with mainnet. You can however request the config and override any needed value. To request the current mainnet compatible config please run:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> curl -s https://configs.spacemesh.network/networks.json | jq '.[0].conf'\n\"https://configs.spacemesh.network/config.mainnet.json\"\n")),(0,i.kt)("p",null,"Most users will want to start with the existing network config file as a template and add customizations to match their local environment and preferences. Note that ",(0,i.kt)("strong",{parentName:"p"},"it's essential you not change existing config parameters unless you know what you're doing.")," Some config sections, like ",(0,i.kt)("inlineCode",{parentName:"p"},"genesis"),", must not be changed under any circumstances or ",(0,i.kt)("strong",{parentName:"p"},"your node will not be compatible with mainnet.")," Your messages will be dropped and your node may be banned by its peers. Some, like ",(0,i.kt)("inlineCode",{parentName:"p"},"p2p")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"smeshing"),", may be tweaked by power users who know what they're doing, but can also cause problems for your node. Others such as ",(0,i.kt)("inlineCode",{parentName:"p"},"api")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"logging")," are safe to change. When in doubt, ",(0,i.kt)("a",{parentName:"p",href:"https://chat.spacemesh.io"},"ask for help"),"!"),(0,i.kt)("p",null,"Assuming you're starting with the default network config file, you'll want to add something like the following to start smeshing:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'  "smeshing": {\n    "smeshing-opts": {\n      "smeshing-opts-datadir": "/data/post/7c8cef2b/",\n      "smeshing-opts-maxfilesize": 4294967296,\n      "smeshing-opts-numunits": 15\n    },\n    "smeshing-proving-opts": {\n      "smeshing-opts-proving-nonces": 144,\n      "smeshing-opts-proving-threads": 0\n    },\n    "smeshing-coinbase": "<your coinbase here>",\n    "smeshing-start": true\n  },\n')),(0,i.kt)("p",null,"For more information on choosing the ",(0,i.kt)("inlineCode",{parentName:"p"},"smeshing-opts")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"smeshing-proving-opts"),", see ",(0,i.kt)("a",{parentName:"p",href:"#fine-tuning-proving"},"fine-tuning proving"),", ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli"},"the postcli README")," and ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/post-rs/blob/main/docs/profiler.md"},"the profiler README"),", respectively, and the sections below on these topics."),(0,i.kt)("h3",{id:"coinbase"},"Coinbase"),(0,i.kt)("p",null,"The coinbase account (specified in the config, above, as ",(0,i.kt)("inlineCode",{parentName:"p"},"smeshing-coinbase"),") is the account that will receive the rewards from smeshing. The coinbase account is fixed per smesher, per epoch, as the smesher commits to it in an ATX for an entire epoch. However, it can be changed at any time, and the change will take effect in the epoch that the next published ATX targets. Note that many smeshers can also use the same coinbase (although to do so would reduce privacy since those smeshers could be associated via the shared coinbase address), and also that there's no requirement that a smesher even provide a coinbase that they control. In theory the coinbase could be set to someone else's account, or even to a burn account."),(0,i.kt)("p",null,"The simplest way to generate a coinbase account is to install and open ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/smapp/releases"},"Smapp"),"; it'll automatically generate a new account the first time it's opened, assuming one doesn't already exist (make sure to backup the recovery mnemonic!)."),(0,i.kt)("p",null,"If you prefer you can use the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/smcli"},(0,i.kt)("inlineCode",{parentName:"a"},"smcli")," tool")," to generate and display a new wallet containing one or more accounts from the command line. See the README in that repository for more information on the tool."),(0,i.kt)("p",null,"Either way, you should now have a Spacemesh-compatible address in bech32 format that starts with ",(0,i.kt)("inlineCode",{parentName:"p"},"sm1"),"."),(0,i.kt)("h3",{id:"multiple-nodes"},"Multiple nodes"),(0,i.kt)("p",null,"It's possible to run multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"go-spacemesh")," processes on a single system. This is of course subject to the ",(0,i.kt)("a",{parentName:"p",href:"https://docs.spacemesh.io/docs/start/requirements"},"resource requirements")," outlined above; in particular, make sure that the system has high enough bandwidth to support many nodes. You'll need to change a few parameters to enable this:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Node data directory: each node must have its own data directory to store network state. Specify it on the command line using the ",(0,i.kt)("inlineCode",{parentName:"li"},"-d datadir")," flag or in the config in ",(0,i.kt)("inlineCode",{parentName:"li"},'{"main":{"data-folder":"<node-data-location>"}}'),"."),(0,i.kt)("li",{parentName:"ol"},"Smeshing data directory: each smeshing node must point to a different PoST data directory. Specify in the config using ",(0,i.kt)("inlineCode",{parentName:"li"},'{"smeshing":{"smeshing-opts":{"smeshing-opts-datadir":"<post-data-location>"}}}'),". ",(0,i.kt)("strong",{parentName:"li"},"See note below about avoiding equivocation!")),(0,i.kt)("li",{parentName:"ol"},"Lockfile: each running node must specify a different lockfile. Specify it on the command line using ",(0,i.kt)("inlineCode",{parentName:"li"},"--filelock")," or in the config with ",(0,i.kt)("inlineCode",{parentName:"li"},'{"main":{"filelock":"<lock-file-location>"}}'),", e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"/tmp/go-spacemesh-01.lock"),"."),(0,i.kt)("li",{parentName:"ol"},"GRPC API ports: assuming you have GRPC enabled, each running node must use a different set of ports for the public and private GRPC services. Specify them in the config with ",(0,i.kt)("inlineCode",{parentName:"li"},'{"api":{"grpc-public-listener":"<ip_addr>:<port>","grpc-private-listener":"<ip_addr>:<port>"}}"'),". Use ",(0,i.kt)("inlineCode",{parentName:"li"},'"0.0.0.0"')," to listen on all interfaces, or specify an IP address attached to a particular interface. See next section for more information on the API and the difference between public and private services."),(0,i.kt)("li",{parentName:"ol"},"P2P listen port: you can specify a different port for each node using the ",(0,i.kt)("inlineCode",{parentName:"li"},"--listen")," CLI flag or in the config file using ",(0,i.kt)("inlineCode",{parentName:"li"},'"p2p": {"listen": "/ip4/0.0.0.0/tcp/6100"}'),".")),(0,i.kt)("h2",{id:"system-service-on-linux"},"System Service on Linux"),(0,i.kt)("p",null,"On compatible Linux-based systems, we strongly recommend running ",(0,i.kt)("inlineCode",{parentName:"p"},"go-spacemesh")," as a ",(0,i.kt)("a",{parentName:"p",href:"https://linuxhandbook.com/create-systemd-services/"},"systemd service"),". This makes log management easier, and it ensures that the node will automatically restart if it dies or is killed, and that it automatically starts when the system is restarted. Each Linux distribution is different, so please check the documentation for your distribution to determine precisely where to create the service file. On most distributions the file should live in ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system"),". Here's a sample service file - please read the ",(0,i.kt)("a",{parentName:"p",href:"https://www.freedesktop.org/software/systemd/man/systemd.service.html"},"systemd documentation")," for more information and update paths, users, etc. to suit your particular system:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"[Unit]\nDescription=go-spacemesh (Mainnet)\nWants=network-online.target\nAfter=network-online.target\nStartLimitIntervalSec=60\nStartLimitBurst=5\n\n[Service]\nType=simple\nUser=spacemesh\nGroup=spacemesh\nRestart=always\nRestartSec=5\nExecStart=go-spacemesh -c /home/spacemesh/node-config.json\n\n[Install]\nWantedBy=multi-user.target\n")),(0,i.kt)("p",null,"With the service file in place, assuming it's called ",(0,i.kt)("inlineCode",{parentName:"p"},"spacemesh.service"),", you simply need to run the following commands to enable and start it:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> sudo systemctl daemon-reload\n> sudo systemctl enable spacemesh.service\n")),(0,i.kt)("p",null,"You can then view the logs of the running service by running:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> journalctl --unit spacemesh -f\n")),(0,i.kt)("h2",{id:"parallel-initialization"},"Parallel Initialization"),(0,i.kt)("p",null,"While by default initialization occurs using a single GPU, it's possible to initialize a single identity using many GPUs in parallel, on a single system or on multiple systems. This can be done using ",(0,i.kt)("inlineCode",{parentName:"p"},"postcli"),": specify the desired number of units, count the total number of init files, then initialize a subset on each GPU/each system, e.g.:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./postcli -numUnits 100 -printNumFiles\n1600\n")),(0,i.kt)("p",null,"On Machine A:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./postcli -numUnits 100 -id <id> -commitmentAtxId <id> -toFile 799 -datadir ./dataA\n")),(0,i.kt)("p",null,"On Machine B:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"./postcli -numUnits 100 -id <id> -commitmentAtxId <id> -fromFile 800 -datadir ./dataB\n")),(0,i.kt)("p",null,"When combining the files, care must be taken to manually merge the metadata contained in the ",(0,i.kt)("inlineCode",{parentName:"p"},"post_metadata.json")," files since each will contain a different nonce value and the smallest nonce must be chosen. For the same reason we strongly recommend that you not perform initialization ",(0,i.kt)("strong",{parentName:"p"},"using multiple GPUs on a single system using the same PoST data directory,")," because the nonces found by one process will be overwritten by those found by another."),(0,i.kt)("p",null,"See ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/spacemeshos/post/tree/develop/cmd/postcli"},"the postcli README")," for more information."),(0,i.kt)("h2",{id:"multiple-drives"},"Multiple Drives"),(0,i.kt)("p",null,"At present it's not possible to naively split a single identity across multiple drives or filesystems. We hope to add this feature soon. In the meantime you have two possibilities: run multiple identities, or join multiple filesystems into a single logical filesystem at the hardware or OS level."),(0,i.kt)("h3",{id:"multiple-identities"},"Multiple Identities"),(0,i.kt)("p",null,"Running multiple identities is explained in ",(0,i.kt)("a",{parentName:"p",href:"#identity-management"},"Identity Management")," and ",(0,i.kt)("a",{parentName:"p",href:"#multiple-nodes"},"Multiple Nodes"),". This has the advantage that you don't need to mess with your filesystem configuration at all, and that you can ",(0,i.kt)("a",{parentName:"p",href:"#post-initialization-2"},"initialize")," and ",(0,i.kt)("a",{parentName:"p",href:"#proof-generation"},"generate proofs")," for each identity more easily in parallel. It has the downside that you need to run multiple nodes, which will consume multiples of the ",(0,i.kt)("a",{parentName:"p",href:"#requirements"},"required resources")," that a single node consumes. Also, since it's in the interest of the network to reduce the number of identities as much as possible, we'll be adding incentives for larger ATXs (generated by larger identities) and disincentives for many small ATXs. Please bear this in mind when you decide how many identities to run."),(0,i.kt)("h3",{id:"joining-filesystems"},"Joining Filesystems"),(0,i.kt)("p",null,'There are many ways to combine multiple, physical filesystems into a single "logical" filesystem and the best way to do this will depend on your hardware, your operating systems, you degree of technical expertise, and your needs. Some miners have had success with ',(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Standard_RAID_levels#RAID_5"},"RAID5"),"; bear in mind that it's possible to run RAID in either ",(0,i.kt)("a",{parentName:"p",href:"https://www.techtarget.com/searchstorage/tip/Key-differences-in-software-RAID-vs-hardware-RAID"},"hardware or software"),", with various tradeoffs. Linux users can rely on ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Logical_Volume_Manager_(Linux)"},"LVM"),", which has wide support in modern distributions."),(0,i.kt)("p",null,"This has the advantage that you can run a single node, rather than many, and that, if configured correctly, you may achieve much faster read speed (see ",(0,i.kt)("a",{parentName:"p",href:"#very-large-identities"},"Very Large Identities"),") than you can with a single drive. It has the disadvantage of requiring more configuring at the operating system and filesystem level; miners who aren't comfortable doing so may prefer to instead run multiple identities."),(0,i.kt)("h2",{id:"state-managament"},"State Managament"),(0,i.kt)("p",null,"The node stores all of the network state in a ",(0,i.kt)("a",{parentName:"p",href:"https://www.sqlite.org/index.html"},"SQLite")," database called ",(0,i.kt)("inlineCode",{parentName:"p"},"state.sql")," (along with a couple of auxiliary files) in the node's data directory:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"> ls -1 data/7c8cef2b/state.*\ndata/7c8cef2b/state.sql\ndata/7c8cef2b/state.sql-shm\ndata/7c8cef2b/state.sql-wal\n")),(0,i.kt)("p",null,"It's possible to explore the contents of this database to understand a node's view of the network, especially when the desired data isn't available via the API. First, two important notes about working with the state database:"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note 1: Unlike the API, we make no guarantees that the state database schema will remain the same.")," It will likely evolve over time. Thus, while it's perfectly okay to explore the state database for troubleshooting, we strongly recommend against building or deploying any production applications that rely on it."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Note 2: Never, under any circumstances, modify the state of a running node.")," Making even a small change runs the risk of totally corrupting the state database, which in the worst case would require that a node be resynced from scratch, a process that can take a long time (and during which time a miner node isn't eligible for rewards). As such, before even opening the state database, ",(0,i.kt)("strong",{parentName:"p"},"make a copy of the file")," and work with the copy only to make sure you don't accidentally modify the live database."),(0,i.kt)("h3",{id:"reading-the-state-database"},"Reading the State Database"),(0,i.kt)("p",null,"There are multiple ways to read data from a SQLite database. We recommend either using the official ",(0,i.kt)("a",{parentName:"p",href:"https://sqlite.org/cli.html"},(0,i.kt)("inlineCode",{parentName:"a"},"sqlite3"))," program, or else the cross-platform, open source UI alternative ",(0,i.kt)("a",{parentName:"p",href:"https://sqlitebrowser.org/"},"DB Browser"),". If you open the state database in the DB Browser you should see something like the following:"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://github.com/spacemeshos/wiki/assets/3316532/ad3eb4f3-af7b-49eb-8842-f46fe707f545",alt:"image"})),(0,i.kt)("p",null,"The full extent of queries you can run against this database is beyond the scope of this document, but as a simple example, here's how you'd look up the coinbase associated with a given smesher, and thus find that smesher's rewards using the coinbase:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-sql"},'SELECT DISTINCT HEX(coinbase) FROM atxs WHERE HEX(id)="F353545DB955F5A359F406ACAB847408D40530A6782BE436553FE521033A42EC";\n000000006EE7C594D665EABFD653CF6920C7E24A3B8562C7\nSELECT layer, total_reward FROM rewards WHERE HEX(coinbase)="000000006EE7C594D665EABFD653CF6920C7E24A3B8562C7";\n8090 | 266137048118\n')),(0,i.kt)("h3",{id:"backing-up-state"},"Backing up State"),(0,i.kt)("p",null,"It can be helpful to create snapshots or backup versions of a node's state so that data may be restored more quickly in case of corruption or failure (rather than needing to resync from scratch, which is time consuming). This process is very straightforward: just create a copy of the files shown above, i.e., the ",(0,i.kt)("inlineCode",{parentName:"p"},"state.*")," files inside the node's data directory."),(0,i.kt)("p",null,"Due to SQLite's ",(0,i.kt)("a",{parentName:"p",href:"https://www.sqlite.org/atomiccommit.html"},"atomic commit")," feature it shouldn't be necessary to stop the node before taking a snapshot, but if you want to be extra careful you may do so."),(0,i.kt)("p",null,"Also note that ",(0,i.kt)("a",{parentName:"p",href:"https://serverfault.com/questions/307296/which-filesystems-offer-snapshot-functionality-for-users-to-recover-data"},"certain filesystems")," make snapshotting easier or even automatic."),(0,i.kt)("h3",{id:"clearing-state"},"Clearing State"),(0,i.kt)("p",null,"From time to time, such as if the state database becomes corrupt or if you simply want to resync your node from genesis, it becomes necessary to clear the state entirely. In order to do this, you should:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Stop the node. Ensure that it's exited cleanly and completely."),(0,i.kt)("li",{parentName:"ol"},"Remove the files shown above, i.e., the ",(0,i.kt)("inlineCode",{parentName:"li"},"state.*")," files inside the node's data directory. Note: don't remove the other contents of the data directory as it also contains, e.g., P2P data."),(0,i.kt)("li",{parentName:"ol"},"Restart the node. You should see it begin to sync from genesis.")),(0,i.kt)("h3",{id:"copying-state"},"Copying State"),(0,i.kt)("p",null,'There\'s no "private" data, i.e., data that\'s specific to one miner or one node, in the state database. This means that you can copy one trusted node\'s database to another node as a quick-and-dirty "quick sync" option, rather than letting the nodes sync the old fashioned way. To do this:'),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Make sure both nodes are running the same version of go-spacemesh."),(0,i.kt)("li",{parentName:"ol"},"Stop ",(0,i.kt)("strong",{parentName:"li"},"both nodes.")," Ensure that they've exited cleanly and completely."),(0,i.kt)("li",{parentName:"ol"},"Remove the state files entirely from node B, i.e., the destination node, by following the instructions above."),(0,i.kt)("li",{parentName:"ol"},"Copy the same files, i.e., the ",(0,i.kt)("inlineCode",{parentName:"li"},"state.*")," files inside the data directory of node A (i.e., the source node) to the data directory of node B. It's safe to do this from one system to another even if the two systems are on different architectures or different operating systems."),(0,i.kt)("li",{parentName:"ol"},"Restart both nodes.")),(0,i.kt)("p",null,"Note: by directly copying the state database you bypass the protections in the protocol and the node that would prevent your node from accepting bad state or bad transactions. For this reason it's essential that you ",(0,i.kt)("strong",{parentName:"p"},"only copy the state from a trusted node,")," i.e., a node that you run yourself, and that you ",(0,i.kt)("strong",{parentName:"p"},"never blindly accept state data from a third party.")," Otherwise, you may end up with corrupt or incorrect state."))}h.isMDXComponent=!0}}]);