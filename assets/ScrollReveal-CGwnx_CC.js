import{r as R,j as a}from"./index-B-szq0j_.js";const S=({params:u={},width:h=320,height:X=180,className:b})=>{const{style:e="fadeUp",color:n="#00ffcc",color2:i="#7c3aed",speed:p=1,size:l=1,text:y="REVEAL"}=u,t=R.useMemo(()=>`sr_${Math.random().toString(36).slice(2,8)}`,[]),r=y.split(""),o=Math.max(.3,.6/p),c=Math.max(.05,.1/p),m=o+r.length*c+1,$=d=>{switch(d){case"fadeUp":return{from:"translateY(120%) rotateX(-40deg)",to:"translateY(0) rotateX(0deg)"};case"slideLeft":return{from:"translateX(-100%) skewX(15deg)",to:"translateX(0) skewX(0deg)"};case"scaleIn":return{from:"scale(0) rotate(-15deg)",to:"scale(1) rotate(0deg)"};case"blockReveal":return{from:"translateY(0)",to:"translateY(0)"};default:return{from:"translateY(120%)",to:"translateY(0)"}}},{from:x,to:k}=$(e),v={width:"100%",height:"100%",background:"#080810",borderRadius:8,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",overflow:"hidden",gap:12},g=Math.min(32,(h??320)/(r.length*.6))*l;return a.jsxs("div",{className:b,style:v,children:[a.jsx("style",{children:`
        @keyframes ${t}_reveal {
          0% {
            transform: ${x};
            opacity: 0;
            filter: blur(8px);
          }
          60% {
            opacity: 1;
            filter: blur(0px);
          }
          100% {
            transform: ${k};
            opacity: 1;
            filter: blur(0px);
          }
        }
        @keyframes ${t}_block {
          0% { transform: scaleX(0); transform-origin: left; }
          45% { transform: scaleX(1); transform-origin: left; }
          55% { transform: scaleX(1); transform-origin: right; }
          100% { transform: scaleX(0); transform-origin: right; }
        }
        @keyframes ${t}_underline {
          0% { transform: scaleX(0); }
          100% { transform: scaleX(1); }
        }
        @keyframes ${t}_loop {
          0%, 5% { opacity: 0; }
          10%, 80% { opacity: 1; }
          90%, 100% { opacity: 0; }
        }
      `}),a.jsx("div",{style:{display:"flex",gap:2,perspective:400,animation:`${t}_loop ${m+1}s ease-in-out infinite`},children:r.map((d,f)=>{const s=f*c;return r.length>1&&f/(r.length-1),a.jsxs("span",{style:{display:"inline-block",position:"relative",overflow:e==="fadeUp"?"hidden":void 0},children:[e==="blockReveal"&&a.jsx("span",{style:{position:"absolute",inset:-2,background:`linear-gradient(135deg, ${n}, ${i})`,animation:`${t}_block ${o*2}s cubic-bezier(0.77, 0, 0.175, 1) ${s}s both`,borderRadius:2,zIndex:1}}),a.jsx("span",{style:{display:"inline-block",fontSize:g,fontWeight:800,fontFamily:"'Inter', 'SF Pro Display', system-ui, sans-serif",background:`linear-gradient(135deg, ${n} 0%, ${i} 100%)`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text",animation:e!=="blockReveal"?`${t}_reveal ${o}s cubic-bezier(0.16, 1, 0.3, 1) ${s}s both`:void 0,opacity:e==="blockReveal"?0:void 0,animationDelay:e==="blockReveal"?void 0:`${s}s`,...e==="blockReveal"?{animation:`${t}_reveal ${o*.5}s ease ${s+o*.8}s both`}:{},zIndex:2,position:"relative",textShadow:"none",filter:`drop-shadow(0 0 ${6*l}px ${n}44)`},children:d})]},f)})}),a.jsx("div",{style:{width:g*r.length*.7,height:2,background:`linear-gradient(90deg, ${n}, ${i})`,borderRadius:1,transformOrigin:"left",animation:`${t}_underline ${o+r.length*c}s cubic-bezier(0.16, 1, 0.3, 1) 0s both, ${t}_loop ${m+1}s ease-in-out infinite`,boxShadow:`0 0 8px ${n}66`}}),a.jsx("div",{style:{fontSize:8*l,color:"rgba(255,255,255,0.15)",fontFamily:"monospace",letterSpacing:"0.25em",textTransform:"uppercase"},children:e==="fadeUp"?"FADE UP":e==="slideLeft"?"SLIDE LEFT":e==="scaleIn"?"SCALE IN":"BLOCK REVEAL"})]})};export{S as ScrollReveal,S as default};
