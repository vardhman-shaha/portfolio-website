(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{4861:(e,t,i)=>{Promise.resolve().then(i.bind(i,220))},220:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>u});var a=i(7437),n=i(9591),s=i(2265),r=i(552);function l(){return(0,a.jsxs)("footer",{className:"p-4 text-center bg-gray-900 text-white",children:["\xa9 ",new Date().getFullYear()," svardhman.dev. All rights reserved."]})}var o=i(7138);function c(){let e=["\uD83C\uDF19","\uD83C\uDF1B","\uD83C\uDF1C","\uD83C\uDF1D","\uD83C\uDF1A"],[t,i]=(0,s.useState)(""),[n,r]=(0,s.useState)({x:20,y:20}),[l,o]=(0,s.useState)(!1);(0,s.useEffect)(()=>{i(e[Math.floor(Math.random()*e.length)])},[e]);let c=(0,s.useCallback)(()=>{o(!1)},[]),d=(0,s.useCallback)(e=>{l&&r({x:e.clientX,y:e.clientY})},[l]);return(0,s.useEffect)(()=>(l?(window.addEventListener("mousemove",d),window.addEventListener("mouseup",c)):(window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",c)),()=>{window.removeEventListener("mousemove",d),window.removeEventListener("mouseup",c)}),[l,d,c]),(0,a.jsx)("div",{className:"fixed text-2xl cursor-pointer",style:{top:n.y,left:n.x,transform:"translate(-50%, -50%)"},onMouseDown:()=>{o(!0)},children:t})}var d=i(1266),x=i(5263);function m(){let e=(0,s.useCallback)(async e=>{await (0,x.R)(e)},[]);return(0,a.jsx)("div",{className:"absolute top-0 left-0 w-full h-full -z-10",children:(0,a.jsx)(d.Z,{init:e,options:{fpsLimit:60,particles:{color:{value:"#ffffff"},links:{enable:!0,color:"#ffffff",distance:150},move:{enable:!0,speed:.5},number:{value:50},size:{value:3}}}})})}function u(){return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(r.Z,{}),(0,a.jsx)(m,{}),(0,a.jsx)(c,{}),(0,a.jsxs)("main",{className:"flex flex-col items-center justify-center min-h-screen p-6 bg-gradient-to-br from-[#1e1e1e] via-[#2b2b2b] to-[#121212] text-white relative z-10",children:[(0,a.jsxs)(n.E.div,{className:"flex flex-col items-center text-center space-y-6",initial:{opacity:0,scale:.95},animate:{opacity:1,scale:1},transition:{duration:1.2,ease:"easeInOut"},children:[(0,a.jsx)(n.E.h1,{className:"text-6xl font-extrabold bg-gradient-to-r from-purple-500 via-indigo-500 to-cyan-500 bg-clip-text text-transparent",initial:{opacity:0,y:-30},animate:{opacity:1,y:0},transition:{duration:1.5,delay:.3},children:"Vardhman Shaha"}),(0,a.jsx)(n.E.p,{className:"text-xl max-w-3xl text-gray-300 font-light tracking-wide leading-relaxed",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{duration:1.5,delay:.5},children:"DevOps Engineer with 8+ years of experience in building robust infrastructure for high-performance applications. Skilled in Kubernetes, CI/CD, cloud automation, and modern web technologies."})]}),(0,a.jsxs)(n.E.div,{className:"mt-10 flex flex-wrap justify-center gap-6",initial:{opacity:0},animate:{opacity:1},transition:{duration:1.6,delay:.8},children:[(0,a.jsx)(o.default,{href:"/projects",children:(0,a.jsx)(n.E.button,{className:"p-3 px-8 rounded-full bg-gradient-to-r from-teal-400 to-blue-500 text-white font-semibold shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl",whileHover:{scale:1.1},transition:{duration:.3},children:"View My Projects"})}),(0,a.jsx)(o.default,{href:"/experience",children:(0,a.jsx)(n.E.button,{className:"p-3 px-8 rounded-full bg-gradient-to-r from-gray-700 to-gray-900 text-white font-semibold shadow-xl transform transition-transform hover:scale-105 hover:shadow-2xl",whileHover:{scale:1.1},transition:{duration:.3},children:"My Experience"})})]}),(0,a.jsxs)(n.E.section,{className:"mt-16 max-w-4xl p-10 rounded-2xl bg-white bg-opacity-5 backdrop-blur-md shadow-2xl text-center text-white",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:1.8,delay:1},children:[(0,a.jsx)("h2",{className:"text-4xl font-bold bg-gradient-to-r from-cyan-300 to-purple-400 bg-clip-text text-transparent mb-6",children:"Technical Skills"}),(0,a.jsxs)("div",{className:"grid grid-cols-3 md:grid-cols-4 gap-6",children:[(0,a.jsx)(h,{skill:"Kubernetes"}),(0,a.jsx)(h,{skill:"Docker"}),(0,a.jsx)(h,{skill:"AWS"}),(0,a.jsx)(h,{skill:"Terraform"}),(0,a.jsx)(h,{skill:"CI/CD"}),(0,a.jsx)(h,{skill:"Python"}),(0,a.jsx)(h,{skill:"JavaScript"}),(0,a.jsx)(h,{skill:"Node.js"})]})]}),(0,a.jsx)(p,{}),(0,a.jsx)(f,{})]}),(0,a.jsx)(l,{})]})}function h(e){let{skill:t}=e;return(0,a.jsx)(n.E.div,{className:"flex flex-col items-center p-4 bg-gray-900 bg-opacity-80 rounded-lg shadow-lg transform transition-transform hover:scale-105 hover:shadow-xl",whileHover:{scale:1.05},children:(0,a.jsx)("div",{className:"text-2xl font-semibold text-teal-300",children:t})})}function p(){let e=[{text:"Working with Vardhman was a pleasure; his DevOps skills are top-notch!",name:"John Doe",title:"CTO at TechCorp"},{text:"Vardhman brought our deployment pipeline to the next level with his expertise.",name:"Jane Smith",title:"Lead Engineer at DevSolutions"},{text:"Thanks to Vardhman, our infrastructure is now more resilient than ever.",name:"Mike Johnson",title:"Cloud Architect at Cloudify"}],[t,i]=(0,s.useState)(0);return(0,s.useEffect)(()=>{let a=setInterval(()=>{i((t+1)%e.length)},5e3);return()=>clearInterval(a)},[t,e.length]),(0,a.jsxs)(n.E.section,{className:"mt-16 max-w-4xl p-10 rounded-2xl bg-gray-800 bg-opacity-90 shadow-2xl text-center text-white",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:2},children:[(0,a.jsx)("h2",{className:"text-4xl font-bold text-teal-400 mb-6",children:"Testimonials"}),(0,a.jsxs)(n.E.div,{initial:{opacity:0,y:20},animate:{opacity:1,y:0},exit:{opacity:0,y:-20},transition:{duration:.8},children:[(0,a.jsxs)("p",{className:"text-xl italic text-gray-300",children:['"',e[t].text,'"']}),(0,a.jsxs)("p",{className:"mt-4 text-lg font-bold text-cyan-400",children:["- ",e[t].name,", ",e[t].title]})]},t)]})}function f(){return(0,a.jsxs)(n.E.section,{className:"mt-16 max-w-5xl p-10 rounded-2xl bg-gray-800 bg-opacity-80 shadow-2xl text-white text-center",initial:{opacity:0,y:30},animate:{opacity:1,y:0},transition:{duration:2.5},children:[(0,a.jsx)("h2",{className:"text-4xl font-bold bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent mb-6",children:"DevOps Workflow"}),(0,a.jsx)("div",{className:"flex flex-wrap justify-center gap-8",children:[{title:"Code",description:"Version control and collaborative coding with Git and GitHub."},{title:"Build",description:"Automated builds using Docker and CI/CD pipelines."},{title:"Test",description:"Automated testing to ensure reliability and security."},{title:"Deploy",description:"Containerized deployments on Kubernetes and cloud platforms."},{title:"Monitor",description:"Continuous monitoring to ensure uptime and performance."}].map((e,t)=>(0,a.jsxs)(n.E.div,{className:"w-60 p-4 bg-gradient-to-br from-[#1a1a1a] to-[#292929] rounded-lg shadow-lg text-left transform transition-transform hover:scale-105 hover:shadow-xl",whileHover:{scale:1.05},children:[(0,a.jsx)("h3",{className:"text-xl font-bold text-purple-300",children:e.title}),(0,a.jsx)("p",{className:"mt-2 text-gray-300 text-sm leading-relaxed",children:e.description})]},t))})]})}},552:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var a=i(7437),n=i(7138),s=i(9591);let r={initial:{opacity:0,y:-10},animate:{opacity:1,y:0,transition:{duration:.5}},hover:{scale:1.1,color:"#00bfff"}};function l(){return(0,a.jsxs)("nav",{className:"flex items-center justify-between px-6 py-4 bg-gray-800 text-white",children:[(0,a.jsx)("div",{className:"flex items-center space-x-4",children:(0,a.jsx)("div",{className:"text-2xl font-bold",children:"My Portfolio"})}),(0,a.jsx)("div",{className:"flex items-center space-x-8",children:["Home","About","Projects","Skills","Contact"].map((e,t)=>(0,a.jsx)(s.E.div,{variants:r,initial:"initial",animate:"animate",whileHover:"hover",transition:{delay:.1*t},children:(0,a.jsx)(n.default,{href:"Home"===e?"/":"/".concat(e.toLowerCase()),children:(0,a.jsx)("span",{className:"cursor-pointer font-semibold",children:e})})},e))})]})}}},e=>{var t=t=>e(e.s=t);e.O(0,[858,96,130,215,744],()=>t(4861)),_N_E=e.O()}]);