(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[404,201],{1766:function(e,t,n){Promise.resolve().then(n.t.bind(n,8173,23)),Promise.resolve().then(n.t.bind(n,231,23)),Promise.resolve().then(n.bind(n,912)),Promise.resolve().then(n.bind(n,1481)),Promise.resolve().then(n.bind(n,8177))},912:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"BailoutToCSR",{enumerable:!0,get:function(){return r}});let l=n(5592);function r(e){let{reason:t,children:n}=e;if("undefined"==typeof window)throw new l.BailoutToCSRError(t);return n}},1481:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"PreloadCss",{enumerable:!0,get:function(){return a}});let l=n(7437),r=n(8512);function a(e){let{moduleIds:t}=e;if("undefined"!=typeof window)return null;let n=(0,r.getExpectedRequestStore)("next/dynamic css"),a=[];if(n.reactLoadableManifest&&t){let e=n.reactLoadableManifest;for(let n of t){if(!e[n])continue;let t=e[n].files.filter(e=>e.endsWith(".css"));a.push(...t)}}return 0===a.length?null:(0,l.jsx)(l.Fragment,{children:a.map(e=>(0,l.jsx)("link",{precedence:"dynamic",rel:"stylesheet",href:n.assetPrefix+"/_next/"+encodeURI(e),as:"style"},e))})}},8177:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return o}});var l=n(7437),r=n(2265);let a=r.forwardRef(function(e,t){let{title:n,titleId:l,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),n?r.createElement("title",{id:l},n):null,r.createElement("path",{d:"M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z"}))}),s=r.forwardRef(function(e,t){let{title:n,titleId:l,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),n?r.createElement("title",{id:l},n):null,r.createElement("path",{fillRule:"evenodd",d:"M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z",clipRule:"evenodd"}))}),i=r.forwardRef(function(e,t){let{title:n,titleId:l,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),n?r.createElement("title",{id:l},n):null,r.createElement("path",{fillRule:"evenodd",d:"M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z",clipRule:"evenodd"}))}),c=r.forwardRef(function(e,t){let{title:n,titleId:l,...a}=e;return r.createElement("svg",Object.assign({xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor","aria-hidden":"true","data-slot":"icon",ref:t,"aria-labelledby":l},a),n?r.createElement("title",{id:l},n):null,r.createElement("path",{d:"M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z"}))});var o=e=>{let{tracks:t}=e,[n,o]=(0,r.useState)(!1),[u,d]=(0,r.useState)(0),[f,h]=(0,r.useState)(0),[m,x]=(0,r.useState)(0),w=(0,r.useRef)(null),b=t[u];(0,r.useEffect)(()=>{w.current&&(w.current.src=b.audioSrc,w.current.load(),h(0),x(0),n&&w.current.play().catch(console.error))},[b,n]);let v=()=>{d(e=>(e+1)%t.length)},g=e=>isNaN(e)?"--:--":"".concat(Math.floor(e/60),":").concat(Math.floor(e%60).toString().padStart(2,"0"));return(0,l.jsxs)("div",{className:"bg-white shadow-md rounded-lg p-4",children:[(0,l.jsxs)("div",{className:"flex items-center justify-between mb-4",children:[(0,l.jsxs)("div",{children:[(0,l.jsx)("h3",{className:"text-lg font-semibold",children:b.title}),(0,l.jsxs)("p",{className:"text-sm text-gray-600",children:[b.artist," - ",b.album]})]}),(0,l.jsxs)("div",{className:"text-sm text-gray-500",children:[g(f)," / ",g(m)]})]}),(0,l.jsxs)("div",{className:"flex items-center justify-center space-x-4",children:[(0,l.jsx)("button",{onClick:()=>{d(e=>(e-1+t.length)%t.length)},className:"focus:outline-none",children:(0,l.jsx)(a,{className:"h-8 w-8 text-gray-700"})}),(0,l.jsx)("button",{onClick:()=>{o(!n)},className:"focus:outline-none",children:n?(0,l.jsx)(s,{className:"h-12 w-12 text-blue-600"}):(0,l.jsx)(i,{className:"h-12 w-12 text-blue-600"})}),(0,l.jsx)("button",{onClick:v,className:"focus:outline-none",children:(0,l.jsx)(c,{className:"h-8 w-8 text-gray-700"})})]}),(0,l.jsx)("audio",{ref:w,onTimeUpdate:()=>{w.current&&h(w.current.currentTime)},onLoadedMetadata:()=>{w.current&&x(w.current.duration)},onEnded:()=>{v()}})]})}}},function(e){e.O(0,[231,173,971,23,744],function(){return e(e.s=1766)}),_N_E=e.O()}]);