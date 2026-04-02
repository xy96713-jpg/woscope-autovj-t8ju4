import{r as s,j as E}from"./index-B-szq0j_.js";const C=`
attribute vec2 a_pos;
varying vec2 vUv;
void main() {
  vUv = a_pos * 0.5 + 0.5;
  gl_Position = vec4(a_pos, 0.0, 1.0);
}
`,U={crt:`precision mediump float;
uniform float u_time,u_intensity;uniform vec2 u_res;varying vec2 vUv;
void main(){
  vec2 uv=vUv;
  float scanline=sin(uv.y*u_res.y*3.14159)*0.04*u_intensity;
  float flicker=sin(u_time*8.0)*0.01*u_intensity;
  float vig=1.0-length((uv-0.5)*1.4);vig=clamp(vig,0.0,1.0);
  vec2 d=(uv-0.5)*2.0;float curve=1.0+dot(d,d)*0.06*u_intensity;
  uv=(uv-0.5)*curve+0.5;
  float r=0.5+0.5*sin(u_time*0.7+uv.x*6.0+uv.y*3.0);
  float g=0.5+0.5*sin(u_time*0.9+uv.x*5.0+uv.y*4.0+2.0);
  float b=0.5+0.5*sin(u_time*1.1+uv.x*4.0+uv.y*5.0+4.0);
  vec3 col=vec3(r,g,b);col+=scanline+flicker;col*=vig;
  float noise=fract(sin(dot(uv*u_time,vec2(12.9898,78.233)))*43758.5453)*0.08*u_intensity;
  col+=noise;
  gl_FragColor=vec4(col,1);
}`,chromatic:`precision mediump float;
uniform float u_time,u_intensity;uniform vec2 u_res;varying vec2 vUv;
void main(){
  vec2 uv=vUv;vec2 center=vec2(0.5);
  vec2 dir=uv-center;float dist=length(dir);
  float offset=dist*0.02*u_intensity*(1.0+sin(u_time)*0.5);
  float r=0.5+0.5*sin(u_time+length(uv-center+dir*offset)*12.0);
  float g=0.5+0.5*sin(u_time*1.1+length(uv-center)*10.0+1.0);
  float b=0.5+0.5*sin(u_time*0.9+length(uv-center-dir*offset)*14.0+2.0);
  vec3 col=vec3(r,g,b);
  float pulse=0.5+0.5*sin(u_time*2.0);
  col*=0.7+0.3*pulse;
  gl_FragColor=vec4(col,1);
}`,halftone:`precision mediump float;
uniform float u_time,u_intensity,u_size;uniform vec2 u_res;varying vec2 vUv;
void main(){
  vec2 uv=vUv;float s=4.0+(1.0-u_size)*12.0;
  vec2 cell=floor(uv*u_res/s);
  vec2 cellUv=fract(uv*u_res/s)-0.5;
  float val=0.5+0.5*sin(cell.x*0.3+cell.y*0.5+u_time*2.0);
  float radius=val*0.5*u_intensity;
  float d=length(cellUv);
  float dot1=smoothstep(radius+0.02,radius-0.02,d);
  vec3 col1=vec3(0.1,0.1,0.12);
  vec3 col2=vec3(0.0,1.0,0.8);
  vec3 col3=vec3(0.5,0.2,0.9);
  vec3 c=mix(col1,mix(col2,col3,sin(u_time+cell.x*0.1)*0.5+0.5),dot1);
  gl_FragColor=vec4(c,1);
}`,pixelate:`precision mediump float;
uniform float u_time,u_size;uniform vec2 u_res;varying vec2 vUv;
void main(){
  float ps=2.0+(1.0-u_size)*30.0;
  vec2 uv=floor(vUv*u_res/ps)*ps/u_res+ps/u_res*0.5;
  float r=0.5+0.5*sin(u_time+uv.x*10.0);
  float g=0.5+0.5*sin(u_time*1.3+uv.y*8.0+2.0);
  float b=0.5+0.5*sin(u_time*0.8+(uv.x+uv.y)*6.0+4.0);
  gl_FragColor=vec4(r,g,b,1);
}`,barrel:`precision mediump float;
uniform float u_time,u_intensity;uniform vec2 u_res;varying vec2 vUv;
void main(){
  vec2 uv=vUv*2.0-1.0;
  float r2=dot(uv,uv);
  float distort=1.0+r2*(0.3*u_intensity+0.1*sin(u_time*2.0)*u_intensity);
  uv*=distort;uv=uv*0.5+0.5;
  if(uv.x<0.0||uv.x>1.0||uv.y<0.0||uv.y>1.0){gl_FragColor=vec4(0,0,0,1);return;}
  float c1=0.5+0.5*sin(u_time+uv.x*12.0+uv.y*6.0);
  float c2=0.5+0.5*sin(u_time*1.2+uv.y*10.0);
  float c3=0.5+0.5*sin(u_time*0.8+length(uv-0.5)*15.0);
  float vig=1.0-length(uv-0.5)*0.8;
  gl_FragColor=vec4(c1*vig,c2*vig,c3*vig,1);
}`,colorGrade:`precision mediump float;
uniform float u_time,u_intensity;uniform vec2 u_res;varying vec2 vUv;
void main(){
  vec2 uv=vUv;
  float r=0.5+0.5*sin(u_time*0.5+uv.x*4.0+uv.y*2.0);
  float g=0.5+0.5*sin(u_time*0.7+uv.x*3.0+uv.y*3.0+1.5);
  float b=0.5+0.5*sin(u_time*0.4+uv.x*5.0+uv.y*1.5+3.0);
  vec3 col=vec3(r,g,b);
  float lum=dot(col,vec3(0.299,0.587,0.114));
  vec3 warm=vec3(1.0,0.6,0.3);vec3 cool=vec3(0.2,0.6,0.8);
  vec3 graded=mix(cool,warm,lum)*u_intensity+col*(1.0-u_intensity*0.5);
  graded=pow(graded,vec3(0.9+0.1*sin(u_time)));
  gl_FragColor=vec4(graded,1);
}`,filmGrain:`precision mediump float;
uniform float u_time,u_intensity;uniform vec2 u_res;varying vec2 vUv;
float hash(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233)))*43758.5453);}
void main(){
  vec2 uv=vUv;
  float grain=hash(uv*u_res+u_time*100.0)*0.5*u_intensity;
  float r=0.5+0.5*sin(u_time*0.3+uv.x*3.0);
  float g=0.5+0.5*sin(u_time*0.4+uv.y*3.0+1.0);
  float b=0.5+0.5*sin(u_time*0.35+uv.x*2.0+uv.y*2.0+2.0);
  vec3 col=vec3(r,g,b);
  // Sepia tint
  float lum=dot(col,vec3(0.299,0.587,0.114));
  vec3 sepia=vec3(lum*1.2,lum*1.0,lum*0.8);
  col=mix(col,sepia,0.5*u_intensity);
  col+=grain-0.25*u_intensity;
  // Vignette
  float vig=1.0-length((uv-0.5)*1.6)*0.5;
  col*=vig;
  gl_FragColor=vec4(col,1);
}`,glitch:`precision mediump float;
uniform float u_time,u_intensity;uniform vec2 u_res;varying vec2 vUv;
float hash(float n){return fract(sin(n)*43758.5453);}
void main(){
  vec2 uv=vUv;
  float t=floor(u_time*6.0);
  // Horizontal offset glitch
  float line=floor(uv.y*40.0);
  float shift=step(0.9-u_intensity*0.3,hash(line+t))*hash(line*t)*0.1*u_intensity;
  uv.x+=shift;
  // RGB shift
  float rgbShift=0.01*u_intensity*(1.0+sin(u_time*15.0)*0.5);
  float r=0.5+0.5*sin(u_time+uv.x*8.0+rgbShift*50.0);
  float g=0.5+0.5*sin(u_time*1.1+uv.x*8.0+1.0);
  float b=0.5+0.5*sin(u_time*0.9+(uv.x-rgbShift)*8.0+2.0);
  vec3 col=vec3(r,g,b);
  // Scanlines
  col*=0.95+0.05*sin(uv.y*u_res.y*1.5);
  // Random block distortion
  vec2 block=floor(uv*vec2(8.0,6.0));
  float blockNoise=step(0.95-u_intensity*0.1,hash(dot(block,vec2(12.9,78.2))+t));
  col=mix(col,1.0-col,blockNoise*0.5);
  gl_FragColor=vec4(col,1);
}`};function T(v){const t=v.getContext("webgl",{alpha:!1,antialias:!1});return t?{gl:t,compile:(c,r)=>{const o=t.createShader(c);return t.shaderSource(o,r),t.compileShader(o),t.getShaderParameter(o,t.COMPILE_STATUS)?o:(console.warn("Shader compile error:",t.getShaderInfoLog(o)),null)}}:null}const L=({params:v={},width:t=320,height:n=180,className:c})=>{const r=s.useRef(null),o=s.useRef(0),{style:f="crt",speed:m=1,intensity:_=1,size:g=1}=v;return s.useEffect(()=>{const u=r.current;if(!u)return;u.width=t,u.height=n;const d=T(u);if(!d)return;const{gl:e,compile:y}=d,l=y(e.VERTEX_SHADER,C),a=y(e.FRAGMENT_SHADER,U[f]||U.crt);if(!l||!a)return;const i=e.createProgram();e.attachShader(i,l),e.attachShader(i,a),e.linkProgram(i),e.useProgram(i);const p=e.createBuffer();e.bindBuffer(e.ARRAY_BUFFER,p),e.bufferData(e.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),e.STATIC_DRAW);const h=e.getAttribLocation(i,"a_pos");e.enableVertexAttribArray(h),e.vertexAttribPointer(h,2,e.FLOAT,!1,0,0);const S=e.getUniformLocation(i,"u_time"),A=e.getUniformLocation(i,"u_intensity"),R=e.getUniformLocation(i,"u_size"),F=e.getUniformLocation(i,"u_res");let x=0;const b=()=>{x+=.016*m,e.viewport(0,0,t,n),e.uniform1f(S,x),e.uniform1f(A,_),e.uniform1f(R,g),e.uniform2f(F,t,n),e.drawArrays(e.TRIANGLE_STRIP,0,4),o.current=requestAnimationFrame(b)};return b(),()=>{cancelAnimationFrame(o.current),e.deleteProgram(i),e.deleteShader(l),e.deleteShader(a),e.deleteBuffer(p)}},[t,n,f,m,_,g]),E.jsx("canvas",{ref:r,className:c,style:{width:"100%",height:"100%",display:"block",background:"#0a0a0f"}})};export{L as ShaderEffect};
