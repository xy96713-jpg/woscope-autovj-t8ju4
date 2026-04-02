import{r as m,j as e}from"./index-B-szq0j_.js";const j=({params:i={},width:h=320,height:y=180,className:o})=>{const{style:r="rainbow",color:l="#00ffcc",color2:d="#7c3aed",speed:f=1,size:n=1}=i,t=m.useMemo(()=>`hf_${Math.random().toString(36).slice(2,8)}`,[]),s=Math.max(2,6/f),p={position:"relative",width:"100%",height:"100%",background:"#111118",borderRadius:12,overflow:"hidden",isolation:"isolate"},c={position:"absolute",inset:0,background:`
      repeating-linear-gradient(
        90deg,
        rgba(255,255,255,0.03) 0px,
        rgba(255,255,255,0.01) 1px,
        transparent 1px,
        transparent 3px
      ),
      repeating-linear-gradient(
        0deg,
        rgba(255,255,255,0.02) 0px,
        transparent 1px,
        transparent 4px
      )
    `,zIndex:1},x={position:"absolute",inset:-20,background:r==="prism"?"linear-gradient(135deg, #ff000040, #ff880040, #ffff0040, #00ff0040, #00aaff40, #8800ff40)":r==="stripe"?`repeating-linear-gradient(45deg, ${l}22 0px, transparent 8px, ${d}22 16px, transparent 24px)`:`linear-gradient(var(--hf-angle, 0deg), 
        #ff000088 0%, #ff880088 16%, #ffff0088 33%, 
        #00ff0088 50%, #00aaff88 66%, #8800ff88 83%, #ff000088 100%)`,animation:`${t}_rotate ${s}s linear infinite`,mixBlendMode:r==="iridescent"?"color-dodge":"screen",zIndex:2,opacity:r==="stripe"?.7:.5},g={position:"absolute",inset:0,background:"linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.2) 45%, rgba(255,255,255,0.4) 50%, rgba(255,255,255,0.2) 55%, transparent 70%)",animation:`${t}_sweep ${s*.8}s ease-in-out infinite`,zIndex:3,mixBlendMode:"overlay"},b=["#ff006680","#00ffcc80","#7c3aed80","#ff880080","#00aaff80"];return e.jsxs("div",{className:o,style:p,children:[e.jsx("style",{children:`
        @keyframes ${t}_rotate {
          from { transform: rotate(0deg) scale(1.5); }
          to { transform: rotate(360deg) scale(1.5); }
        }
        @keyframes ${t}_sweep {
          0%, 100% { transform: translateX(-120%); }
          50% { transform: translateX(120%); }
        }
        @keyframes ${t}_float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(10px, -15px) scale(1.1); }
          50% { transform: translate(-5px, 10px) scale(0.9); }
          75% { transform: translate(15px, 5px) scale(1.05); }
        }
      `}),e.jsx("svg",{width:"0",height:"0",style:{position:"absolute"},children:e.jsxs("filter",{id:`${t}_noise`,children:[e.jsx("feTurbulence",{type:"fractalNoise",baseFrequency:"0.9",numOctaves:"4",stitchTiles:"stitch"}),e.jsx("feColorMatrix",{type:"saturate",values:"0"}),e.jsx("feBlend",{in:"SourceGraphic",mode:"overlay"})]})}),e.jsx("div",{style:c}),e.jsx("div",{style:x}),e.jsx("div",{style:g}),e.jsx("div",{style:{position:"absolute",inset:0,filter:`url(#${t}_noise)`,opacity:.3,zIndex:4,mixBlendMode:"color-dodge",background:"transparent"}}),b.map((u,a)=>e.jsx("div",{style:{position:"absolute",width:40*n+a*10,height:40*n+a*10,borderRadius:"50%",background:`radial-gradient(circle, ${u} 0%, transparent 70%)`,left:`${15+a*18}%`,top:`${20+a%3*25}%`,animation:`${t}_float ${3+a*.7}s ease-in-out infinite`,animationDelay:`${a*-.5}s`,zIndex:5,mixBlendMode:"screen",filter:`blur(${4*n}px)`}},a)),e.jsx("div",{style:{position:"absolute",inset:0,borderRadius:12,border:"1px solid rgba(255,255,255,0.12)",boxShadow:`inset 0 0 20px rgba(255,255,255,0.03), 0 0 15px rgba(${r==="rainbow"?"255,100,255":"0,255,200"},0.1)`,zIndex:6,pointerEvents:"none"}})]})};export{j as HoloFoil,j as default};
