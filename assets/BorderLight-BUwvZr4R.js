import{r as g,j as o}from"./index-B-szq0j_.js";const S=({params:f={},width:R=320,height:I=180,className:m})=>{const{style:r="trace",color:e="#00ffcc",color2:i="#7c3aed",speed:x=1,size:a=1}=f,p=g.useRef(null);g.useRef(0);const t=g.useMemo(()=>`bl_${Math.random().toString(36).slice(2,8)}`,[]),c=Math.max(1.5,2*a),s=10,d=Math.max(1,4/x);g.useEffect(()=>{if(!p.current)return;let n=document.getElementById(t);n||(n=document.createElement("style"),n.id=t,document.head.appendChild(n));const v=r==="pulse"?`
      @keyframes ${t}_pulse {
        0%, 100% { opacity: 0.5; filter: blur(12px); }
        50% { opacity: 1; filter: blur(20px); }
      }
    `:r==="dual"?`
      @keyframes ${t}_counter {
        from { transform: rotate(360deg); }
        to { transform: rotate(0deg); }
      }
    `:"";return n.textContent=`
      @keyframes ${t}_spin {
        from { transform: rotate(0deg); }
        to { transform: rotate(360deg); }
      }
      ${v}
    `,()=>{n?.remove()}},[t,r]);const l=r==="trace"?`conic-gradient(from 0deg, transparent 0deg, ${e} 60deg, ${i} 120deg, transparent 180deg)`:r==="dual"?`conic-gradient(from 0deg, transparent 0deg, ${e} 40deg, transparent 90deg, transparent 180deg, ${i} 220deg, transparent 270deg)`:r==="glow"?`conic-gradient(from 0deg, ${e} 0deg, ${i} 90deg, ${e} 180deg, ${i} 270deg, ${e} 360deg)`:r==="pulse"?`conic-gradient(from 0deg, transparent 0deg, ${e} 30deg, ${i} 60deg, transparent 90deg, transparent 180deg, ${e} 210deg, ${i} 240deg, transparent 270deg)`:`conic-gradient(from 0deg, transparent 0deg, ${e} 60deg, ${i} 120deg, transparent 180deg)`,b={position:"relative",width:"100%",height:"100%",background:"#080810",borderRadius:s,overflow:"hidden",display:"flex",alignItems:"center",justifyContent:"center"},$={position:"absolute",inset:-c*20,background:l,animation:`${t}_spin ${d}s linear infinite`,zIndex:1},y={position:"absolute",inset:0,borderRadius:s,WebkitMask:"linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",WebkitMaskComposite:"xor",maskComposite:"exclude",padding:c,background:l,animation:`${t}_spin ${d}s linear infinite`,zIndex:2},h={position:"absolute",inset:-4,borderRadius:s+4,background:l,animation:`${t}_spin ${d}s linear infinite${r==="pulse"?`, ${t}_pulse ${d*.5}s ease-in-out infinite`:""}`,filter:`blur(${12*a}px)`,opacity:r==="glow"?.6:.35,zIndex:0},k={position:"absolute",inset:c,borderRadius:s-1,background:"linear-gradient(135deg, #0c0c1a 0%, #0a0a14 50%, #0e0e1c 100%)",zIndex:3,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4},j=[{top:-1,left:-1},{top:-1,right:-1},{bottom:-1,left:-1},{bottom:-1,right:-1}];return o.jsxs("div",{ref:p,className:m,style:b,children:[o.jsx("div",{style:h}),o.jsx("div",{style:$}),o.jsx("div",{style:y}),o.jsxs("div",{style:k,children:[j.map((u,n)=>o.jsx("div",{style:{position:"absolute",...u,width:6*a,height:6*a,borderRadius:"50%",background:n%2===0?e:i,boxShadow:`0 0 ${8*a}px ${n%2===0?e:i}`,opacity:.7,zIndex:4}},n)),o.jsx("div",{style:{position:"absolute",inset:0,borderRadius:s-1,backgroundImage:`
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,backgroundSize:"20px 20px",pointerEvents:"none"}})]})]})};export{S as BorderLight,S as default};
