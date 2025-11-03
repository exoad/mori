import{j as e,B as t,a as r,r as s,R as n,b as o,c as a}from"./vendor-DL0WX_AC.js"
import{L as i,S as l,R as c,N as m}from"./pages-DDqXhvQm.js"
import"./components-D7v4JOTE.js"
function u(){const t=r(),[a,u]=s.useState(()=>t.pathname+"|"+Date.now()),[d,f]=s.useState(0)
return s.useEffect(()=>{u(t.pathname+"|"+Date.now()),f(0)
const e=requestAnimationFrame(()=>f(1))
return()=>cancelAnimationFrame(e)},[t.pathname]),e.jsx("div",{className:"relative w-full min-h-screen overflow-hidden",children:e.jsx("div",{className:"w-full h-full transform transition-all duration-400 ease-out "+(d?"translate-y-0 scale-100 opacity-100":"translate-y-5 scale-95 opacity-0"),children:e.jsxs(n,{location:t,children:[e.jsx(o,{path:"/",element:e.jsx(i,{})}),e.jsx(o,{path:"/mori",element:e.jsx(i,{})})," ",e.jsx(o,{path:"/mori/setup",element:e.jsx(l,{})}),e.jsx(o,{path:"/mori/rep",element:e.jsx(c,{})}),e.jsx(o,{path:"*",element:e.jsx(m,{})})]})},a)})}function d(){return e.jsx(t,{children:e.jsx(u,{})})}!function(){const e=document.createElement("link").relList
if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e)
new MutationObserver(e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)}).observe(document,{childList:1,subtree:1})}function t(e){if(e.ep)return
e.ep=1
const t=function(e){const t={}
return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),"use-credentials"===e.crossOrigin?t.credentials="include":"anonymous"===e.crossOrigin?t.credentials="omit":t.credentials="same-origin",t}(e)
fetch(e.href,t)}}()
const f=document.getElementById("root")
f&&a.createRoot(f).render(e.jsx(d,{}))
