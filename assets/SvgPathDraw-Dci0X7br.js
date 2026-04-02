import{r as d,j as e}from"./index-B-szq0j_.js";const l={color:"#00ffcc",strokeWidth:4,duration:3,dashLength:1e3},u=({params:r=l,width:s=1920,height:o=1080,className:f,time:n})=>{const t=d.useRef(null);d.useEffect(()=>{if(t.current){const i=t.current.getTotalLength();t.current.style.strokeDasharray=`${i}`,t.current.style.strokeDashoffset=`${i}`}},[]);const c=n!==void 0?Math.max(0,r.dashLength-n/r.duration*r.dashLength):void 0;return e.jsxs("div",{className:f,style:{width:s,height:o,position:"relative"},children:[e.jsxs("svg",{width:s,height:o,viewBox:`0 0 ${s} ${o}`,children:[e.jsx("defs",{children:e.jsxs("filter",{id:"glow-path",children:[e.jsx("feGaussianBlur",{stdDeviation:"6",result:"coloredBlur"}),e.jsxs("feMerge",{children:[e.jsx("feMergeNode",{in:"coloredBlur"}),e.jsx("feMergeNode",{in:"SourceGraphic"})]})]})}),e.jsx("path",{ref:t,d:`M ${s*.1} ${o*.5} 
              L ${s*.3} ${o*.2} 
              L ${s*.5} ${o*.8}
              L ${s*.7} ${o*.3}
              L ${s*.9} ${o*.5}`,fill:"none",stroke:r.color,strokeWidth:r.strokeWidth,strokeLinecap:"round",strokeLinejoin:"round",filter:"url(#glow-path)",style:{strokeDasharray:r.dashLength,strokeDashoffset:c!==void 0?c:r.dashLength,transition:n!==void 0?"none":`stroke-dashoffset ${r.duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards`}})]}),n===void 0&&e.jsx("style",{children:`
            @keyframes svgDrawAnim {
              to { stroke-dashoffset: 0; }
            }
          `}),e.jsx("div",{ref:i=>{i&&n===void 0&&t.current&&(t.current.style.animation=`svgDrawAnim ${r.duration}s cubic-bezier(0.4, 0, 0.2, 1) forwards`)}})]})};export{l as SVG_PATH_DRAW_DEFAULTS,u as SvgPathDraw};
