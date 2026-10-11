(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&i(r)}).observe(document,{childList:!0,subtree:!0});function t(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function i(s){if(s.ep)return;s.ep=!0;const a=t(s);fetch(s.href,a)}})();const Ro="180",as={ROTATE:0,DOLLY:1,PAN:2},ns={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},lh=0,jo=1,ch=2,uc=1,hh=2,Xn=3,Nn=0,jt=1,pn=2,ui=0,rs=1,Ir=2,Jo=3,Qo=4,dh=5,Ti=100,uh=101,fh=102,ph=103,mh=104,gh=200,vh=201,_h=202,xh=203,Ur=204,Nr=205,Mh=206,Sh=207,yh=208,Eh=209,bh=210,Th=211,Ah=212,wh=213,Rh=214,Or=0,Fr=1,Br=2,cs=3,zr=4,kr=5,Hr=6,Gr=7,Co=0,Ch=1,Lh=2,fi=0,Ph=1,Dh=2,Ih=3,fc=4,Uh=5,Nh=6,Oh=7,pc=300,hs=301,ds=302,Vr=303,Wr=304,za=306,Xr=1e3,Ci=1001,qr=1002,En=1003,Fh=1004,js=1005,Pn=1006,$a=1007,Li=1008,On=1009,mc=1010,gc=1011,Ds=1012,Lo=1013,Ni=1014,$n=1015,Gs=1016,Po=1017,Do=1018,Is=1020,vc=35902,_c=35899,xc=1021,Mc=1022,yn=1023,Us=1026,Ns=1027,Sc=1028,Io=1029,yc=1030,Uo=1031,No=1033,ba=33776,Ta=33777,Aa=33778,wa=33779,Yr=35840,$r=35841,Kr=35842,Zr=35843,jr=36196,Jr=37492,Qr=37496,eo=37808,to=37809,no=37810,io=37811,so=37812,ao=37813,ro=37814,oo=37815,lo=37816,co=37817,ho=37818,uo=37819,fo=37820,po=37821,mo=36492,go=36494,vo=36495,_o=36283,xo=36284,Mo=36285,So=36286,Bh=3200,zh=3201,Oo=0,kh=1,hi="",ln="srgb",us="srgb-linear",Pa="linear",ht="srgb",ki=7680,el=519,Hh=512,Gh=513,Vh=514,Ec=515,Wh=516,Xh=517,qh=518,Yh=519,tl=35044,nl="300 es",Dn=2e3,Da=2001;class zi{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){const i=this._listeners;if(i===void 0)return;const s=i[e];if(s!==void 0){const a=s.indexOf(t);a!==-1&&s.splice(a,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const i=t[e.type];if(i!==void 0){e.target=this;const s=i.slice(0);for(let a=0,r=s.length;a<r;a++)s[a].call(this,e);e.target=null}}}const qt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let il=1234567;const Cs=Math.PI/180,Os=180/Math.PI;function vs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(qt[n&255]+qt[n>>8&255]+qt[n>>16&255]+qt[n>>24&255]+"-"+qt[e&255]+qt[e>>8&255]+"-"+qt[e>>16&15|64]+qt[e>>24&255]+"-"+qt[t&63|128]+qt[t>>8&255]+"-"+qt[t>>16&255]+qt[t>>24&255]+qt[i&255]+qt[i>>8&255]+qt[i>>16&255]+qt[i>>24&255]).toLowerCase()}function et(n,e,t){return Math.max(e,Math.min(t,n))}function Fo(n,e){return(n%e+e)%e}function $h(n,e,t,i,s){return i+(n-e)*(s-i)/(t-e)}function Kh(n,e,t){return n!==e?(t-n)/(e-n):0}function Ls(n,e,t){return(1-t)*n+t*e}function Zh(n,e,t,i){return Ls(n,e,1-Math.exp(-t*i))}function jh(n,e=1){return e-Math.abs(Fo(n,e*2)-e)}function Jh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*(3-2*n))}function Qh(n,e,t){return n<=e?0:n>=t?1:(n=(n-e)/(t-e),n*n*n*(n*(n*6-15)+10))}function ed(n,e){return n+Math.floor(Math.random()*(e-n+1))}function td(n,e){return n+Math.random()*(e-n)}function nd(n){return n*(.5-Math.random())}function id(n){n!==void 0&&(il=n);let e=il+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function sd(n){return n*Cs}function ad(n){return n*Os}function rd(n){return(n&n-1)===0&&n!==0}function od(n){return Math.pow(2,Math.ceil(Math.log(n)/Math.LN2))}function ld(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function cd(n,e,t,i,s){const a=Math.cos,r=Math.sin,o=a(t/2),l=r(t/2),c=a((e+i)/2),h=r((e+i)/2),d=a((e-i)/2),f=r((e-i)/2),p=a((i-e)/2),g=r((i-e)/2);switch(s){case"XYX":n.set(o*h,l*d,l*f,o*c);break;case"YZY":n.set(l*f,o*h,l*d,o*c);break;case"ZXZ":n.set(l*d,l*f,o*h,o*c);break;case"XZX":n.set(o*h,l*g,l*p,o*c);break;case"YXY":n.set(l*p,o*h,l*g,o*c);break;case"ZYZ":n.set(l*g,l*p,o*h,o*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+s)}}function ts(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function $t(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Oi={DEG2RAD:Cs,RAD2DEG:Os,generateUUID:vs,clamp:et,euclideanModulo:Fo,mapLinear:$h,inverseLerp:Kh,lerp:Ls,damp:Zh,pingpong:jh,smoothstep:Jh,smootherstep:Qh,randInt:ed,randFloat:td,randFloatSpread:nd,seededRandom:id,degToRad:sd,radToDeg:ad,isPowerOfTwo:rd,ceilPowerOfTwo:od,floorPowerOfTwo:ld,setQuaternionFromProperEuler:cd,normalize:$t,denormalize:ts};class He{constructor(e=0,t=0){He.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6],this.y=s[1]*t+s[4]*i+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),s=Math.sin(t),a=this.x-e.x,r=this.y-e.y;return this.x=a*i-r*s+e.x,this.y=a*s+r*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class jn{constructor(e=0,t=0,i=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=s}static slerpFlat(e,t,i,s,a,r,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3];const f=a[r+0],p=a[r+1],g=a[r+2],x=a[r+3];if(o===0){e[t+0]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d;return}if(o===1){e[t+0]=f,e[t+1]=p,e[t+2]=g,e[t+3]=x;return}if(d!==x||l!==f||c!==p||h!==g){let m=1-o;const u=l*f+c*p+h*g+d*x,R=u>=0?1:-1,w=1-u*u;if(w>Number.EPSILON){const A=Math.sqrt(w),b=Math.atan2(A,u*R);m=Math.sin(m*b)/A,o=Math.sin(o*b)/A}const y=o*R;if(l=l*m+f*y,c=c*m+p*y,h=h*m+g*y,d=d*m+x*y,m===1-o){const A=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=A,c*=A,h*=A,d*=A}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,s,a,r){const o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=a[r],f=a[r+1],p=a[r+2],g=a[r+3];return e[t]=o*g+h*d+l*p-c*f,e[t+1]=l*g+h*f+c*d-o*p,e[t+2]=c*g+h*p+o*f-l*d,e[t+3]=h*g-o*d-l*f-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,s){return this._x=e,this._y=t,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const i=e._x,s=e._y,a=e._z,r=e._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(a/2),f=l(i/2),p=l(s/2),g=l(a/2);switch(r){case"XYZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"YXZ":this._x=f*h*d+c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"ZXY":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d-f*p*g;break;case"ZYX":this._x=f*h*d-c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d+f*p*g;break;case"YZX":this._x=f*h*d+c*p*g,this._y=c*p*d+f*h*g,this._z=c*h*g-f*p*d,this._w=c*h*d-f*p*g;break;case"XZY":this._x=f*h*d-c*p*g,this._y=c*p*d-f*h*g,this._z=c*h*g+f*p*d,this._w=c*h*d+f*p*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+r)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,s=Math.sin(i);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],s=t[4],a=t[8],r=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],f=i+o+d;if(f>0){const p=.5/Math.sqrt(f+1);this._w=.25/p,this._x=(h-l)*p,this._y=(a-c)*p,this._z=(r-s)*p}else if(i>o&&i>d){const p=2*Math.sqrt(1+i-o-d);this._w=(h-l)/p,this._x=.25*p,this._y=(s+r)/p,this._z=(a+c)/p}else if(o>d){const p=2*Math.sqrt(1+o-i-d);this._w=(a-c)/p,this._x=(s+r)/p,this._y=.25*p,this._z=(l+h)/p}else{const p=2*Math.sqrt(1+d-i-o);this._w=(r-s)/p,this._x=(a+c)/p,this._y=(l+h)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(et(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const s=Math.min(1,t/i);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,s=e._y,a=e._z,r=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=i*h+r*o+s*c-a*l,this._y=s*h+r*l+a*o-i*c,this._z=a*h+r*c+i*l-s*o,this._w=r*h-i*o-s*l-a*c,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,s=this._y,a=this._z,r=this._w;let o=r*e._w+i*e._x+s*e._y+a*e._z;if(o<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,o=-o):this.copy(e),o>=1)return this._w=r,this._x=i,this._y=s,this._z=a,this;const l=1-o*o;if(l<=Number.EPSILON){const p=1-t;return this._w=p*r+t*this._w,this._x=p*i+t*this._x,this._y=p*s+t*this._y,this._z=p*a+t*this._z,this.normalize(),this}const c=Math.sqrt(l),h=Math.atan2(c,o),d=Math.sin((1-t)*h)/c,f=Math.sin(t*h)/c;return this._w=r*d+this._w*f,this._x=i*d+this._x*f,this._y=s*d+this._y*f,this._z=a*d+this._z*f,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),a=Math.sqrt(i);return this.set(s*Math.sin(e),s*Math.cos(e),a*Math.sin(t),a*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class F{constructor(e=0,t=0,i=0){F.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(sl.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(sl.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[3]*i+a[6]*s,this.y=a[1]*t+a[4]*i+a[7]*s,this.z=a[2]*t+a[5]*i+a[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=e.elements,r=1/(a[3]*t+a[7]*i+a[11]*s+a[15]);return this.x=(a[0]*t+a[4]*i+a[8]*s+a[12])*r,this.y=(a[1]*t+a[5]*i+a[9]*s+a[13])*r,this.z=(a[2]*t+a[6]*i+a[10]*s+a[14])*r,this}applyQuaternion(e){const t=this.x,i=this.y,s=this.z,a=e.x,r=e.y,o=e.z,l=e.w,c=2*(r*s-o*i),h=2*(o*t-a*s),d=2*(a*i-r*t);return this.x=t+l*c+r*d-o*h,this.y=i+l*h+o*c-a*d,this.z=s+l*d+a*h-r*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,s=this.z,a=e.elements;return this.x=a[0]*t+a[4]*i+a[8]*s,this.y=a[1]*t+a[5]*i+a[9]*s,this.z=a[2]*t+a[6]*i+a[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,s=e.y,a=e.z,r=t.x,o=t.y,l=t.z;return this.x=s*l-a*o,this.y=a*r-i*l,this.z=i*o-s*r,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Ka.copy(this).projectOnVector(e),this.sub(Ka)}reflect(e){return this.sub(Ka.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(et(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,s=this.z-e.z;return t*t+i*i+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const s=Math.sin(t)*e;return this.x=s*Math.sin(i),this.y=Math.cos(t)*e,this.z=s*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,i=Math.sqrt(1-t*t);return this.x=i*Math.cos(e),this.y=t,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Ka=new F,sl=new jn;class Ze{constructor(e,t,i,s,a,r,o,l,c){Ze.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c)}set(e,t,i,s,a,r,o,l,c){const h=this.elements;return h[0]=e,h[1]=s,h[2]=o,h[3]=t,h[4]=a,h[5]=l,h[6]=i,h[7]=r,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],f=i[2],p=i[5],g=i[8],x=s[0],m=s[3],u=s[6],R=s[1],w=s[4],y=s[7],A=s[2],b=s[5],L=s[8];return a[0]=r*x+o*R+l*A,a[3]=r*m+o*w+l*b,a[6]=r*u+o*y+l*L,a[1]=c*x+h*R+d*A,a[4]=c*m+h*w+d*b,a[7]=c*u+h*y+d*L,a[2]=f*x+p*R+g*A,a[5]=f*m+p*w+g*b,a[8]=f*u+p*y+g*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*r*h-t*o*c-i*a*h+i*o*l+s*a*c-s*r*l}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*r-o*c,f=o*l-h*a,p=c*a-r*l,g=t*d+i*f+s*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=d*x,e[1]=(s*c-h*i)*x,e[2]=(o*i-s*r)*x,e[3]=f*x,e[4]=(h*t-s*l)*x,e[5]=(s*a-o*t)*x,e[6]=p*x,e[7]=(i*l-c*t)*x,e[8]=(r*t-i*a)*x,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,s,a,r,o){const l=Math.cos(a),c=Math.sin(a);return this.set(i*l,i*c,-i*(l*r+c*o)+r+e,-s*c,s*l,-s*(-c*r+l*o)+o+t,0,0,1),this}scale(e,t){return this.premultiply(Za.makeScale(e,t)),this}rotate(e){return this.premultiply(Za.makeRotation(-e)),this}translate(e,t){return this.premultiply(Za.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<9;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const Za=new Ze;function bc(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function Fs(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function hd(){const n=Fs("canvas");return n.style.display="block",n}const al={};function Bs(n){n in al||(al[n]=!0,console.warn(n))}function dd(n,e,t){return new Promise(function(i,s){function a(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(a,t);break;default:i()}}setTimeout(a,t)})}const rl=new Ze().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),ol=new Ze().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function ud(){const n={enabled:!0,workingColorSpace:us,spaces:{},convert:function(s,a,r){return this.enabled===!1||a===r||!a||!r||(this.spaces[a].transfer===ht&&(s.r=Zn(s.r),s.g=Zn(s.g),s.b=Zn(s.b)),this.spaces[a].primaries!==this.spaces[r].primaries&&(s.applyMatrix3(this.spaces[a].toXYZ),s.applyMatrix3(this.spaces[r].fromXYZ)),this.spaces[r].transfer===ht&&(s.r=os(s.r),s.g=os(s.g),s.b=os(s.b))),s},workingToColorSpace:function(s,a){return this.convert(s,this.workingColorSpace,a)},colorSpaceToWorking:function(s,a){return this.convert(s,a,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===hi?Pa:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,a=this.workingColorSpace){return s.fromArray(this.spaces[a].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,a,r){return s.copy(this.spaces[a].toXYZ).multiply(this.spaces[r].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,a){return Bs("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,a)},toWorkingColorSpace:function(s,a){return Bs("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,a)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[us]:{primaries:e,whitePoint:i,transfer:Pa,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ln},outputColorSpaceConfig:{drawingBufferColorSpace:ln}},[ln]:{primaries:e,whitePoint:i,transfer:ht,toXYZ:rl,fromXYZ:ol,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ln}}}),n}const ot=ud();function Zn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function os(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Hi;class fd{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Hi===void 0&&(Hi=Fs("canvas")),Hi.width=e.width,Hi.height=e.height;const s=Hi.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),i=Hi}return i.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Fs("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const s=i.getImageData(0,0,e.width,e.height),a=s.data;for(let r=0;r<a.length;r++)a[r]=Zn(a[r]/255)*255;return i.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(Zn(t[i]/255)*255):t[i]=Zn(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pd=0;class Bo{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pd++}),this.uuid=vs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):t instanceof VideoFrame?e.set(t.displayHeight,t.displayWidth,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let a;if(Array.isArray(s)){a=[];for(let r=0,o=s.length;r<o;r++)s[r].isDataTexture?a.push(ja(s[r].image)):a.push(ja(s[r]))}else a=ja(s);i.url=a}return t||(e.images[this.uuid]=i),i}}function ja(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?fd.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let md=0;const Ja=new F;class Jt extends zi{constructor(e=Jt.DEFAULT_IMAGE,t=Jt.DEFAULT_MAPPING,i=Ci,s=Ci,a=Pn,r=Li,o=yn,l=On,c=Jt.DEFAULT_ANISOTROPY,h=hi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:md++}),this.uuid=vs(),this.name="",this.source=new Bo(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=a,this.minFilter=r,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Ze,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Ja).x}get height(){return this.source.getSize(Ja).y}get depth(){return this.source.getSize(Ja).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==pc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Xr:e.x=e.x-Math.floor(e.x);break;case Ci:e.x=e.x<0?0:1;break;case qr:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Xr:e.y=e.y-Math.floor(e.y);break;case Ci:e.y=e.y<0?0:1;break;case qr:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jt.DEFAULT_IMAGE=null;Jt.DEFAULT_MAPPING=pc;Jt.DEFAULT_ANISOTROPY=1;class bt{constructor(e=0,t=0,i=0,s=1){bt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,s){return this.x=e,this.y=t,this.z=i,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,s=this.z,a=this.w,r=e.elements;return this.x=r[0]*t+r[4]*i+r[8]*s+r[12]*a,this.y=r[1]*t+r[5]*i+r[9]*s+r[13]*a,this.z=r[2]*t+r[6]*i+r[10]*s+r[14]*a,this.w=r[3]*t+r[7]*i+r[11]*s+r[15]*a,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,s,a;const l=e.elements,c=l[0],h=l[4],d=l[8],f=l[1],p=l[5],g=l[9],x=l[2],m=l[6],u=l[10];if(Math.abs(h-f)<.01&&Math.abs(d-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+f)<.1&&Math.abs(d+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+u-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const w=(c+1)/2,y=(p+1)/2,A=(u+1)/2,b=(h+f)/4,L=(d+x)/4,D=(g+m)/4;return w>y&&w>A?w<.01?(i=0,s=.707106781,a=.707106781):(i=Math.sqrt(w),s=b/i,a=L/i):y>A?y<.01?(i=.707106781,s=0,a=.707106781):(s=Math.sqrt(y),i=b/s,a=D/s):A<.01?(i=.707106781,s=.707106781,a=0):(a=Math.sqrt(A),i=L/a,s=D/a),this.set(i,s,a,t),this}let R=Math.sqrt((m-g)*(m-g)+(d-x)*(d-x)+(f-h)*(f-h));return Math.abs(R)<.001&&(R=1),this.x=(m-g)/R,this.y=(d-x)/R,this.z=(f-h)/R,this.w=Math.acos((c+p+u-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=et(this.x,e.x,t.x),this.y=et(this.y,e.y,t.y),this.z=et(this.z,e.z,t.z),this.w=et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=et(this.x,e,t),this.y=et(this.y,e,t),this.z=et(this.z,e,t),this.w=et(this.w,e,t),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(et(i,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class gd extends zi{constructor(e=1,t=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Pn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=i.depth,this.scissor=new bt(0,0,e,t),this.scissorTest=!1,this.viewport=new bt(0,0,e,t);const s={width:e,height:t,depth:i.depth},a=new Jt(s);this.textures=[];const r=i.count;for(let o=0;o<r;o++)this.textures[o]=a.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const t={minFilter:Pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,i=1){if(this.width!==e||this.height!==t||this.depth!==i){this.width=e,this.height=t,this.depth=i;for(let s=0,a=this.textures.length;s<a;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=i,this.textures[s].isArrayTexture=this.textures[s].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,i=e.textures.length;t<i;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Bo(s)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fi extends gd{constructor(e=1,t=1,i={}){super(e,t,i),this.isWebGLRenderTarget=!0}}class Tc extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class vd extends Jt{constructor(e=null,t=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:s},this.magFilter=En,this.minFilter=En,this.wrapR=Ci,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Vs{constructor(e=new F(1/0,1/0,1/0),t=new F(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(gn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(gn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=gn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const a=i.getAttribute("position");if(t===!0&&a!==void 0&&e.isInstancedMesh!==!0)for(let r=0,o=a.count;r<o;r++)e.isMesh===!0?e.getVertexPosition(r,gn):gn.fromBufferAttribute(a,r),gn.applyMatrix4(e.matrixWorld),this.expandByPoint(gn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Js.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Js.copy(i.boundingBox)),Js.applyMatrix4(e.matrixWorld),this.union(Js)}const s=e.children;for(let a=0,r=s.length;a<r;a++)this.expandByObject(s[a],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,gn),gn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),Qs.subVectors(this.max,Ss),Gi.subVectors(e.a,Ss),Vi.subVectors(e.b,Ss),Wi.subVectors(e.c,Ss),ni.subVectors(Vi,Gi),ii.subVectors(Wi,Vi),_i.subVectors(Gi,Wi);let t=[0,-ni.z,ni.y,0,-ii.z,ii.y,0,-_i.z,_i.y,ni.z,0,-ni.x,ii.z,0,-ii.x,_i.z,0,-_i.x,-ni.y,ni.x,0,-ii.y,ii.x,0,-_i.y,_i.x,0];return!Qa(t,Gi,Vi,Wi,Qs)||(t=[1,0,0,0,1,0,0,0,1],!Qa(t,Gi,Vi,Wi,Qs))?!1:(ea.crossVectors(ni,ii),t=[ea.x,ea.y,ea.z],Qa(t,Gi,Vi,Wi,Qs))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,gn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(gn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(kn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),kn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),kn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),kn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),kn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),kn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),kn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),kn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(kn),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const kn=[new F,new F,new F,new F,new F,new F,new F,new F],gn=new F,Js=new Vs,Gi=new F,Vi=new F,Wi=new F,ni=new F,ii=new F,_i=new F,Ss=new F,Qs=new F,ea=new F,xi=new F;function Qa(n,e,t,i,s){for(let a=0,r=n.length-3;a<=r;a+=3){xi.fromArray(n,a);const o=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=e.dot(xi),c=t.dot(xi),h=i.dot(xi);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}const _d=new Vs,ys=new F,er=new F;class Ws{constructor(e=new F,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):_d.setFromPoints(e).getCenter(i);let s=0;for(let a=0,r=e.length;a<r;a++)s=Math.max(s,i.distanceToSquared(e[a]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ys.subVectors(e,this.center);const t=ys.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),s=(i-this.radius)*.5;this.center.addScaledVector(ys,s/i),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(er.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ys.copy(e.center).add(er)),this.expandByPoint(ys.copy(e.center).sub(er))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hn=new F,tr=new F,ta=new F,si=new F,nr=new F,na=new F,ir=new F;class Xs{constructor(e=new F,t=new F(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hn)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hn.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hn.copy(this.origin).addScaledVector(this.direction,t),Hn.distanceToSquared(e))}distanceSqToSegment(e,t,i,s){tr.copy(e).add(t).multiplyScalar(.5),ta.copy(t).sub(e).normalize(),si.copy(this.origin).sub(tr);const a=e.distanceTo(t)*.5,r=-this.direction.dot(ta),o=si.dot(this.direction),l=-si.dot(ta),c=si.lengthSq(),h=Math.abs(1-r*r);let d,f,p,g;if(h>0)if(d=r*l-o,f=r*o-l,g=a*h,d>=0)if(f>=-g)if(f<=g){const x=1/h;d*=x,f*=x,p=d*(d+r*f+2*o)+f*(r*d+f+2*l)+c}else f=a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f=-a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;else f<=-g?(d=Math.max(0,-(-r*a+o)),f=d>0?-a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c):f<=g?(d=0,f=Math.min(Math.max(-a,-l),a),p=f*(f+2*l)+c):(d=Math.max(0,-(r*a+o)),f=d>0?a:Math.min(Math.max(-a,-l),a),p=-d*d+f*(f+2*l)+c);else f=r>0?-a:a,d=Math.max(0,-(r*f+o)),p=-d*d+f*(f+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(tr).addScaledVector(ta,f),p}intersectSphere(e,t){Hn.subVectors(e.center,this.origin);const i=Hn.dot(this.direction),s=Hn.dot(Hn)-i*i,a=e.radius*e.radius;if(s>a)return null;const r=Math.sqrt(a-s),o=i-r,l=i+r;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,s,a,r,o,l;const c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,f=this.origin;return c>=0?(i=(e.min.x-f.x)*c,s=(e.max.x-f.x)*c):(i=(e.max.x-f.x)*c,s=(e.min.x-f.x)*c),h>=0?(a=(e.min.y-f.y)*h,r=(e.max.y-f.y)*h):(a=(e.max.y-f.y)*h,r=(e.min.y-f.y)*h),i>r||a>s||((a>i||isNaN(i))&&(i=a),(r<s||isNaN(s))&&(s=r),d>=0?(o=(e.min.z-f.z)*d,l=(e.max.z-f.z)*d):(o=(e.max.z-f.z)*d,l=(e.min.z-f.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,t)}intersectsBox(e){return this.intersectBox(e,Hn)!==null}intersectTriangle(e,t,i,s,a){nr.subVectors(t,e),na.subVectors(i,e),ir.crossVectors(nr,na);let r=this.direction.dot(ir),o;if(r>0){if(s)return null;o=1}else if(r<0)o=-1,r=-r;else return null;si.subVectors(this.origin,e);const l=o*this.direction.dot(na.crossVectors(si,na));if(l<0)return null;const c=o*this.direction.dot(nr.cross(si));if(c<0||l+c>r)return null;const h=-o*si.dot(ir);return h<0?null:this.at(h/r,a)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Mt{constructor(e,t,i,s,a,r,o,l,c,h,d,f,p,g,x,m){Mt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,s,a,r,o,l,c,h,d,f,p,g,x,m)}set(e,t,i,s,a,r,o,l,c,h,d,f,p,g,x,m){const u=this.elements;return u[0]=e,u[4]=t,u[8]=i,u[12]=s,u[1]=a,u[5]=r,u[9]=o,u[13]=l,u[2]=c,u[6]=h,u[10]=d,u[14]=f,u[3]=p,u[7]=g,u[11]=x,u[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,s=1/Xi.setFromMatrixColumn(e,0).length(),a=1/Xi.setFromMatrixColumn(e,1).length(),r=1/Xi.setFromMatrixColumn(e,2).length();return t[0]=i[0]*s,t[1]=i[1]*s,t[2]=i[2]*s,t[3]=0,t[4]=i[4]*a,t[5]=i[5]*a,t[6]=i[6]*a,t[7]=0,t[8]=i[8]*r,t[9]=i[9]*r,t[10]=i[10]*r,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,s=e.y,a=e.z,r=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(a),d=Math.sin(a);if(e.order==="XYZ"){const f=r*h,p=r*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=p+g*c,t[5]=f-x*c,t[9]=-o*l,t[2]=x-f*c,t[6]=g+p*c,t[10]=r*l}else if(e.order==="YXZ"){const f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f+x*o,t[4]=g*o-p,t[8]=r*c,t[1]=r*d,t[5]=r*h,t[9]=-o,t[2]=p*o-g,t[6]=x+f*o,t[10]=r*l}else if(e.order==="ZXY"){const f=l*h,p=l*d,g=c*h,x=c*d;t[0]=f-x*o,t[4]=-r*d,t[8]=g+p*o,t[1]=p+g*o,t[5]=r*h,t[9]=x-f*o,t[2]=-r*c,t[6]=o,t[10]=r*l}else if(e.order==="ZYX"){const f=r*h,p=r*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-p,t[8]=f*c+x,t[1]=l*d,t[5]=x*c+f,t[9]=p*c-g,t[2]=-c,t[6]=o*l,t[10]=r*l}else if(e.order==="YZX"){const f=r*l,p=r*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-f*d,t[8]=g*d+p,t[1]=d,t[5]=r*h,t[9]=-o*h,t[2]=-c*h,t[6]=p*d+g,t[10]=f-x*d}else if(e.order==="XZY"){const f=r*l,p=r*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=f*d+x,t[5]=r*h,t[9]=p*d-g,t[2]=g*d-p,t[6]=o*h,t[10]=x*d+f}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(xd,e,Md)}lookAt(e,t,i){const s=this.elements;return an.subVectors(e,t),an.lengthSq()===0&&(an.z=1),an.normalize(),ai.crossVectors(i,an),ai.lengthSq()===0&&(Math.abs(i.z)===1?an.x+=1e-4:an.z+=1e-4,an.normalize(),ai.crossVectors(i,an)),ai.normalize(),ia.crossVectors(an,ai),s[0]=ai.x,s[4]=ia.x,s[8]=an.x,s[1]=ai.y,s[5]=ia.y,s[9]=an.y,s[2]=ai.z,s[6]=ia.z,s[10]=an.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,s=t.elements,a=this.elements,r=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],f=i[9],p=i[13],g=i[2],x=i[6],m=i[10],u=i[14],R=i[3],w=i[7],y=i[11],A=i[15],b=s[0],L=s[4],D=s[8],S=s[12],E=s[1],P=s[5],U=s[9],H=s[13],W=s[2],K=s[6],G=s[10],ee=s[14],V=s[3],ne=s[7],fe=s[11],pe=s[15];return a[0]=r*b+o*E+l*W+c*V,a[4]=r*L+o*P+l*K+c*ne,a[8]=r*D+o*U+l*G+c*fe,a[12]=r*S+o*H+l*ee+c*pe,a[1]=h*b+d*E+f*W+p*V,a[5]=h*L+d*P+f*K+p*ne,a[9]=h*D+d*U+f*G+p*fe,a[13]=h*S+d*H+f*ee+p*pe,a[2]=g*b+x*E+m*W+u*V,a[6]=g*L+x*P+m*K+u*ne,a[10]=g*D+x*U+m*G+u*fe,a[14]=g*S+x*H+m*ee+u*pe,a[3]=R*b+w*E+y*W+A*V,a[7]=R*L+w*P+y*K+A*ne,a[11]=R*D+w*U+y*G+A*fe,a[15]=R*S+w*H+y*ee+A*pe,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],s=e[8],a=e[12],r=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],f=e[10],p=e[14],g=e[3],x=e[7],m=e[11],u=e[15];return g*(+a*l*d-s*c*d-a*o*f+i*c*f+s*o*p-i*l*p)+x*(+t*l*p-t*c*f+a*r*f-s*r*p+s*c*h-a*l*h)+m*(+t*c*d-t*o*p-a*r*d+i*r*p+a*o*h-i*c*h)+u*(-s*o*h-t*l*d+t*o*f+s*r*d-i*r*f+i*l*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],s=e[2],a=e[3],r=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],f=e[10],p=e[11],g=e[12],x=e[13],m=e[14],u=e[15],R=d*m*c-x*f*c+x*l*p-o*m*p-d*l*u+o*f*u,w=g*f*c-h*m*c-g*l*p+r*m*p+h*l*u-r*f*u,y=h*x*c-g*d*c+g*o*p-r*x*p-h*o*u+r*d*u,A=g*d*l-h*x*l-g*o*f+r*x*f+h*o*m-r*d*m,b=t*R+i*w+s*y+a*A;if(b===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/b;return e[0]=R*L,e[1]=(x*f*a-d*m*a-x*s*p+i*m*p+d*s*u-i*f*u)*L,e[2]=(o*m*a-x*l*a+x*s*c-i*m*c-o*s*u+i*l*u)*L,e[3]=(d*l*a-o*f*a-d*s*c+i*f*c+o*s*p-i*l*p)*L,e[4]=w*L,e[5]=(h*m*a-g*f*a+g*s*p-t*m*p-h*s*u+t*f*u)*L,e[6]=(g*l*a-r*m*a-g*s*c+t*m*c+r*s*u-t*l*u)*L,e[7]=(r*f*a-h*l*a+h*s*c-t*f*c-r*s*p+t*l*p)*L,e[8]=y*L,e[9]=(g*d*a-h*x*a-g*i*p+t*x*p+h*i*u-t*d*u)*L,e[10]=(r*x*a-g*o*a+g*i*c-t*x*c-r*i*u+t*o*u)*L,e[11]=(h*o*a-r*d*a-h*i*c+t*d*c+r*i*p-t*o*p)*L,e[12]=A*L,e[13]=(h*x*s-g*d*s+g*i*f-t*x*f-h*i*m+t*d*m)*L,e[14]=(g*o*s-r*x*s-g*i*l+t*x*l+r*i*m-t*o*m)*L,e[15]=(r*d*s-h*o*s+h*i*l-t*d*l-r*i*f+t*o*f)*L,this}scale(e){const t=this.elements,i=e.x,s=e.y,a=e.z;return t[0]*=i,t[4]*=s,t[8]*=a,t[1]*=i,t[5]*=s,t[9]*=a,t[2]*=i,t[6]*=s,t[10]*=a,t[3]*=i,t[7]*=s,t[11]*=a,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,s))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),s=Math.sin(t),a=1-i,r=e.x,o=e.y,l=e.z,c=a*r,h=a*o;return this.set(c*r+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*r,0,c*l-s*o,h*l+s*r,a*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,s,a,r){return this.set(1,i,a,0,e,1,r,0,t,s,1,0,0,0,0,1),this}compose(e,t,i){const s=this.elements,a=t._x,r=t._y,o=t._z,l=t._w,c=a+a,h=r+r,d=o+o,f=a*c,p=a*h,g=a*d,x=r*h,m=r*d,u=o*d,R=l*c,w=l*h,y=l*d,A=i.x,b=i.y,L=i.z;return s[0]=(1-(x+u))*A,s[1]=(p+y)*A,s[2]=(g-w)*A,s[3]=0,s[4]=(p-y)*b,s[5]=(1-(f+u))*b,s[6]=(m+R)*b,s[7]=0,s[8]=(g+w)*L,s[9]=(m-R)*L,s[10]=(1-(f+x))*L,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,i){const s=this.elements;let a=Xi.set(s[0],s[1],s[2]).length();const r=Xi.set(s[4],s[5],s[6]).length(),o=Xi.set(s[8],s[9],s[10]).length();this.determinant()<0&&(a=-a),e.x=s[12],e.y=s[13],e.z=s[14],vn.copy(this);const c=1/a,h=1/r,d=1/o;return vn.elements[0]*=c,vn.elements[1]*=c,vn.elements[2]*=c,vn.elements[4]*=h,vn.elements[5]*=h,vn.elements[6]*=h,vn.elements[8]*=d,vn.elements[9]*=d,vn.elements[10]*=d,t.setFromRotationMatrix(vn),i.x=a,i.y=r,i.z=o,this}makePerspective(e,t,i,s,a,r,o=Dn,l=!1){const c=this.elements,h=2*a/(t-e),d=2*a/(i-s),f=(t+e)/(t-e),p=(i+s)/(i-s);let g,x;if(l)g=a/(r-a),x=r*a/(r-a);else if(o===Dn)g=-(r+a)/(r-a),x=-2*r*a/(r-a);else if(o===Da)g=-r/(r-a),x=-r*a/(r-a);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=f,c[12]=0,c[1]=0,c[5]=d,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,i,s,a,r,o=Dn,l=!1){const c=this.elements,h=2/(t-e),d=2/(i-s),f=-(t+e)/(t-e),p=-(i+s)/(i-s);let g,x;if(l)g=1/(r-a),x=r/(r-a);else if(o===Dn)g=-2/(r-a),x=-(r+a)/(r-a);else if(o===Da)g=-1/(r-a),x=-a/(r-a);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=f,c[1]=0,c[5]=d,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let s=0;s<16;s++)if(t[s]!==i[s])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Xi=new F,vn=new Mt,xd=new F(0,0,0),Md=new F(1,1,1),ai=new F,ia=new F,an=new F,ll=new Mt,cl=new jn;class Tn{constructor(e=0,t=0,i=0,s=Tn.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,s=this._order){return this._x=e,this._y=t,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const s=e.elements,a=s[0],r=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],f=s[6],p=s[10];switch(t){case"XYZ":this._y=Math.asin(et(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,p),this._z=Math.atan2(-r,a)):(this._x=Math.atan2(f,c),this._z=0);break;case"YXZ":this._x=Math.asin(-et(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,a),this._z=0);break;case"ZXY":this._x=Math.asin(et(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-r,c)):(this._y=0,this._z=Math.atan2(l,a));break;case"ZYX":this._y=Math.asin(-et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(f,p),this._z=Math.atan2(l,a)):(this._x=0,this._z=Math.atan2(-r,c));break;case"YZX":this._z=Math.asin(et(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,a)):(this._x=0,this._y=Math.atan2(o,p));break;case"XZY":this._z=Math.asin(-et(r,-1,1)),Math.abs(r)<.9999999?(this._x=Math.atan2(f,c),this._y=Math.atan2(o,a)):(this._x=Math.atan2(-h,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return ll.makeRotationFromQuaternion(e),this.setFromRotationMatrix(ll,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return cl.setFromEuler(this),this.setFromQuaternion(cl,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Tn.DEFAULT_ORDER="XYZ";class zo{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Sd=0;const hl=new F,qi=new jn,Gn=new Mt,sa=new F,Es=new F,yd=new F,Ed=new jn,dl=new F(1,0,0),ul=new F(0,1,0),fl=new F(0,0,1),pl={type:"added"},bd={type:"removed"},Yi={type:"childadded",child:null},sr={type:"childremoved",child:null};class Ht extends zi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Sd++}),this.uuid=vs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Ht.DEFAULT_UP.clone();const e=new F,t=new Tn,i=new jn,s=new F(1,1,1);function a(){i.setFromEuler(t,!1)}function r(){t.setFromQuaternion(i,void 0,!1)}t._onChange(a),i._onChange(r),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Mt},normalMatrix:{value:new Ze}}),this.matrix=new Mt,this.matrixWorld=new Mt,this.matrixAutoUpdate=Ht.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new zo,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.multiply(qi),this}rotateOnWorldAxis(e,t){return qi.setFromAxisAngle(e,t),this.quaternion.premultiply(qi),this}rotateX(e){return this.rotateOnAxis(dl,e)}rotateY(e){return this.rotateOnAxis(ul,e)}rotateZ(e){return this.rotateOnAxis(fl,e)}translateOnAxis(e,t){return hl.copy(e).applyQuaternion(this.quaternion),this.position.add(hl.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(dl,e)}translateY(e){return this.translateOnAxis(ul,e)}translateZ(e){return this.translateOnAxis(fl,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gn.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?sa.copy(e):sa.set(e,t,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Es.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gn.lookAt(Es,sa,this.up):Gn.lookAt(sa,Es,this.up),this.quaternion.setFromRotationMatrix(Gn),s&&(Gn.extractRotation(s.matrixWorld),qi.setFromRotationMatrix(Gn),this.quaternion.premultiply(qi.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(pl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bd),sr.child=e,this.dispatchEvent(sr),sr.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gn),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(pl),Yi.child=e,this.dispatchEvent(Yi),Yi.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,s=this.children.length;i<s;i++){const r=this.children[i].getObjectByProperty(e,t);if(r!==void 0)return r}}getObjectsByProperty(e,t,i=[]){this[e]===t&&i.push(this);const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].getObjectsByProperty(e,t,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,e,yd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Es,Ed,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,s=t.length;i<s;i++)t[i].updateMatrixWorld(e)}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const s=this.children;for(let a=0,r=s.length;a<r;a++)s[a].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function a(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=a(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){const d=l[c];a(e.shapes,d)}else a(e.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(a(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(a(e.materials,this.material[l]));s.material=o}else s.material=a(e.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){const l=this.animations[o];s.animations.push(a(e.animations,l))}}if(t){const o=r(e.geometries),l=r(e.materials),c=r(e.textures),h=r(e.images),d=r(e.shapes),f=r(e.skeletons),p=r(e.animations),g=r(e.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),f.length>0&&(i.skeletons=f),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=s,i;function r(o){const l=[];for(const c in o){const h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const s=e.children[i];this.add(s.clone())}return this}}Ht.DEFAULT_UP=new F(0,1,0);Ht.DEFAULT_MATRIX_AUTO_UPDATE=!0;Ht.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const _n=new F,Vn=new F,ar=new F,Wn=new F,$i=new F,Ki=new F,ml=new F,rr=new F,or=new F,lr=new F,cr=new bt,hr=new bt,dr=new bt;class Sn{constructor(e=new F,t=new F,i=new F){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,s){s.subVectors(i,t),_n.subVectors(e,t),s.cross(_n);const a=s.lengthSq();return a>0?s.multiplyScalar(1/Math.sqrt(a)):s.set(0,0,0)}static getBarycoord(e,t,i,s,a){_n.subVectors(s,t),Vn.subVectors(i,t),ar.subVectors(e,t);const r=_n.dot(_n),o=_n.dot(Vn),l=_n.dot(ar),c=Vn.dot(Vn),h=Vn.dot(ar),d=r*c-o*o;if(d===0)return a.set(0,0,0),null;const f=1/d,p=(c*l-o*h)*f,g=(r*h-o*l)*f;return a.set(1-p-g,g,p)}static containsPoint(e,t,i,s){return this.getBarycoord(e,t,i,s,Wn)===null?!1:Wn.x>=0&&Wn.y>=0&&Wn.x+Wn.y<=1}static getInterpolation(e,t,i,s,a,r,o,l){return this.getBarycoord(e,t,i,s,Wn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(a,Wn.x),l.addScaledVector(r,Wn.y),l.addScaledVector(o,Wn.z),l)}static getInterpolatedAttribute(e,t,i,s,a,r){return cr.setScalar(0),hr.setScalar(0),dr.setScalar(0),cr.fromBufferAttribute(e,t),hr.fromBufferAttribute(e,i),dr.fromBufferAttribute(e,s),r.setScalar(0),r.addScaledVector(cr,a.x),r.addScaledVector(hr,a.y),r.addScaledVector(dr,a.z),r}static isFrontFacing(e,t,i,s){return _n.subVectors(i,t),Vn.subVectors(e,t),_n.cross(Vn).dot(s)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,s){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,i,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return _n.subVectors(this.c,this.b),Vn.subVectors(this.a,this.b),_n.cross(Vn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Sn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Sn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,i,s,a){return Sn.getInterpolation(e,this.a,this.b,this.c,t,i,s,a)}containsPoint(e){return Sn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Sn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,s=this.b,a=this.c;let r,o;$i.subVectors(s,i),Ki.subVectors(a,i),rr.subVectors(e,i);const l=$i.dot(rr),c=Ki.dot(rr);if(l<=0&&c<=0)return t.copy(i);or.subVectors(e,s);const h=$i.dot(or),d=Ki.dot(or);if(h>=0&&d<=h)return t.copy(s);const f=l*d-h*c;if(f<=0&&l>=0&&h<=0)return r=l/(l-h),t.copy(i).addScaledVector($i,r);lr.subVectors(e,a);const p=$i.dot(lr),g=Ki.dot(lr);if(g>=0&&p<=g)return t.copy(a);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(i).addScaledVector(Ki,o);const m=h*g-p*d;if(m<=0&&d-h>=0&&p-g>=0)return ml.subVectors(a,s),o=(d-h)/(d-h+(p-g)),t.copy(s).addScaledVector(ml,o);const u=1/(m+x+f);return r=x*u,o=f*u,t.copy(i).addScaledVector($i,r).addScaledVector(Ki,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const Ac={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ri={h:0,s:0,l:0},aa={h:0,s:0,l:0};function ur(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class it{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ln){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,ot.colorSpaceToWorking(this,t),this}setRGB(e,t,i,s=ot.workingColorSpace){return this.r=e,this.g=t,this.b=i,ot.colorSpaceToWorking(this,s),this}setHSL(e,t,i,s=ot.workingColorSpace){if(e=Fo(e,1),t=et(t,0,1),i=et(i,0,1),t===0)this.r=this.g=this.b=i;else{const a=i<=.5?i*(1+t):i+t-i*t,r=2*i-a;this.r=ur(r,a,e+1/3),this.g=ur(r,a,e),this.b=ur(r,a,e-1/3)}return ot.colorSpaceToWorking(this,s),this}setStyle(e,t=ln){function i(a){a!==void 0&&parseFloat(a)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let a;const r=s[1],o=s[2];switch(r){case"rgb":case"rgba":if(a=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(255,parseInt(a[1],10))/255,Math.min(255,parseInt(a[2],10))/255,Math.min(255,parseInt(a[3],10))/255,t);if(a=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setRGB(Math.min(100,parseInt(a[1],10))/100,Math.min(100,parseInt(a[2],10))/100,Math.min(100,parseInt(a[3],10))/100,t);break;case"hsl":case"hsla":if(a=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(a[4]),this.setHSL(parseFloat(a[1])/360,parseFloat(a[2])/100,parseFloat(a[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const a=s[1],r=a.length;if(r===3)return this.setRGB(parseInt(a.charAt(0),16)/15,parseInt(a.charAt(1),16)/15,parseInt(a.charAt(2),16)/15,t);if(r===6)return this.setHex(parseInt(a,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ln){const i=Ac[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Zn(e.r),this.g=Zn(e.g),this.b=Zn(e.b),this}copyLinearToSRGB(e){return this.r=os(e.r),this.g=os(e.g),this.b=os(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ln){return ot.workingToColorSpace(Yt.copy(this),e),Math.round(et(Yt.r*255,0,255))*65536+Math.round(et(Yt.g*255,0,255))*256+Math.round(et(Yt.b*255,0,255))}getHexString(e=ln){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=ot.workingColorSpace){ot.workingToColorSpace(Yt.copy(this),t);const i=Yt.r,s=Yt.g,a=Yt.b,r=Math.max(i,s,a),o=Math.min(i,s,a);let l,c;const h=(o+r)/2;if(o===r)l=0,c=0;else{const d=r-o;switch(c=h<=.5?d/(r+o):d/(2-r-o),r){case i:l=(s-a)/d+(s<a?6:0);break;case s:l=(a-i)/d+2;break;case a:l=(i-s)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=ot.workingColorSpace){return ot.workingToColorSpace(Yt.copy(this),t),e.r=Yt.r,e.g=Yt.g,e.b=Yt.b,e}getStyle(e=ln){ot.workingToColorSpace(Yt.copy(this),e);const t=Yt.r,i=Yt.g,s=Yt.b;return e!==ln?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(e,t,i){return this.getHSL(ri),this.setHSL(ri.h+e,ri.s+t,ri.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ri),e.getHSL(aa);const i=Ls(ri.h,aa.h,t),s=Ls(ri.s,aa.s,t),a=Ls(ri.l,aa.l,t);return this.setHSL(i,s,a),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,s=this.b,a=e.elements;return this.r=a[0]*t+a[3]*i+a[6]*s,this.g=a[1]*t+a[4]*i+a[7]*s,this.b=a[2]*t+a[5]*i+a[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Yt=new it;it.NAMES=Ac;let Td=0;class gi extends zi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Td++}),this.uuid=vs(),this.name="",this.type="Material",this.blending=rs,this.side=Nn,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Ur,this.blendDst=Nr,this.blendEquation=Ti,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new it(0,0,0),this.blendAlpha=0,this.depthFunc=cs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=el,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==rs&&(i.blending=this.blending),this.side!==Nn&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Ur&&(i.blendSrc=this.blendSrc),this.blendDst!==Nr&&(i.blendDst=this.blendDst),this.blendEquation!==Ti&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==cs&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==el&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(a){const r=[];for(const o in a){const l=a[o];delete l.metadata,r.push(l)}return r}if(t){const a=s(e.textures),r=s(e.images);a.length>0&&(i.textures=a),r.length>0&&(i.images=r)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const s=t.length;i=new Array(s);for(let a=0;a!==s;++a)i[a]=t[a].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yn extends gi{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new it(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ct=new F,ra=new He;let Ad=0;class bn{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ad++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=tl,this.updateRanges=[],this.gpuType=$n,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let s=0,a=this.itemSize;s<a;s++)this.array[e+s]=t.array[i+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)ra.fromBufferAttribute(this,t),ra.applyMatrix3(e),this.setXY(t,ra.x,ra.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix3(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyMatrix4(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.applyNormalMatrix(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Ct.fromBufferAttribute(this,t),Ct.transformDirection(e),this.setXYZ(t,Ct.x,Ct.y,Ct.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let i=this.array[e*this.itemSize+t];return this.normalized&&(i=ts(i,this.array)),i}setComponent(e,t,i){return this.normalized&&(i=$t(i,this.array)),this.array[e*this.itemSize+t]=i,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ts(t,this.array)),t}setX(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ts(t,this.array)),t}setY(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ts(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ts(t,this.array)),t}setW(e,t){return this.normalized&&(t=$t(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,s){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this}setXYZW(e,t,i,s,a){return e*=this.itemSize,this.normalized&&(t=$t(t,this.array),i=$t(i,this.array),s=$t(s,this.array),a=$t(a,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=s,this.array[e+3]=a,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==tl&&(e.usage=this.usage),e}}class wc extends bn{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Rc extends bn{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class St extends bn{constructor(e,t,i){super(new Float32Array(e),t,i)}}let wd=0;const un=new Mt,fr=new Ht,Zi=new F,rn=new Vs,bs=new Vs,Ft=new F;class wt extends zi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:wd++}),this.uuid=vs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(bc(e)?Rc:wc)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const a=new Ze().getNormalMatrix(e);i.applyNormalMatrix(a),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return un.makeRotationFromQuaternion(e),this.applyMatrix4(un),this}rotateX(e){return un.makeRotationX(e),this.applyMatrix4(un),this}rotateY(e){return un.makeRotationY(e),this.applyMatrix4(un),this}rotateZ(e){return un.makeRotationZ(e),this.applyMatrix4(un),this}translate(e,t,i){return un.makeTranslation(e,t,i),this.applyMatrix4(un),this}scale(e,t,i){return un.makeScale(e,t,i),this.applyMatrix4(un),this}lookAt(e){return fr.lookAt(e),fr.updateMatrix(),this.applyMatrix4(fr.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Zi).negate(),this.translate(Zi.x,Zi.y,Zi.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const i=[];for(let s=0,a=e.length;s<a;s++){const r=e[s];i.push(r.x,r.y,r.z||0)}this.setAttribute("position",new St(i,3))}else{const i=Math.min(e.length,t.count);for(let s=0;s<i;s++){const a=e[s];t.setXYZ(s,a.x,a.y,a.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Vs);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new F(-1/0,-1/0,-1/0),new F(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,s=t.length;i<s;i++){const a=t[i];rn.setFromBufferAttribute(a),this.morphTargetsRelative?(Ft.addVectors(this.boundingBox.min,rn.min),this.boundingBox.expandByPoint(Ft),Ft.addVectors(this.boundingBox.max,rn.max),this.boundingBox.expandByPoint(Ft)):(this.boundingBox.expandByPoint(rn.min),this.boundingBox.expandByPoint(rn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ws);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new F,1/0);return}if(e){const i=this.boundingSphere.center;if(rn.setFromBufferAttribute(e),t)for(let a=0,r=t.length;a<r;a++){const o=t[a];bs.setFromBufferAttribute(o),this.morphTargetsRelative?(Ft.addVectors(rn.min,bs.min),rn.expandByPoint(Ft),Ft.addVectors(rn.max,bs.max),rn.expandByPoint(Ft)):(rn.expandByPoint(bs.min),rn.expandByPoint(bs.max))}rn.getCenter(i);let s=0;for(let a=0,r=e.count;a<r;a++)Ft.fromBufferAttribute(e,a),s=Math.max(s,i.distanceToSquared(Ft));if(t)for(let a=0,r=t.length;a<r;a++){const o=t[a],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Ft.fromBufferAttribute(o,c),l&&(Zi.fromBufferAttribute(e,c),Ft.add(Zi)),s=Math.max(s,i.distanceToSquared(Ft))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=t.position,s=t.normal,a=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new bn(new Float32Array(4*i.count),4));const r=this.getAttribute("tangent"),o=[],l=[];for(let D=0;D<i.count;D++)o[D]=new F,l[D]=new F;const c=new F,h=new F,d=new F,f=new He,p=new He,g=new He,x=new F,m=new F;function u(D,S,E){c.fromBufferAttribute(i,D),h.fromBufferAttribute(i,S),d.fromBufferAttribute(i,E),f.fromBufferAttribute(a,D),p.fromBufferAttribute(a,S),g.fromBufferAttribute(a,E),h.sub(c),d.sub(c),p.sub(f),g.sub(f);const P=1/(p.x*g.y-g.x*p.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-p.y).multiplyScalar(P),m.copy(d).multiplyScalar(p.x).addScaledVector(h,-g.x).multiplyScalar(P),o[D].add(x),o[S].add(x),o[E].add(x),l[D].add(m),l[S].add(m),l[E].add(m))}let R=this.groups;R.length===0&&(R=[{start:0,count:e.count}]);for(let D=0,S=R.length;D<S;++D){const E=R[D],P=E.start,U=E.count;for(let H=P,W=P+U;H<W;H+=3)u(e.getX(H+0),e.getX(H+1),e.getX(H+2))}const w=new F,y=new F,A=new F,b=new F;function L(D){A.fromBufferAttribute(s,D),b.copy(A);const S=o[D];w.copy(S),w.sub(A.multiplyScalar(A.dot(S))).normalize(),y.crossVectors(b,S);const P=y.dot(l[D])<0?-1:1;r.setXYZW(D,w.x,w.y,w.z,P)}for(let D=0,S=R.length;D<S;++D){const E=R[D],P=E.start,U=E.count;for(let H=P,W=P+U;H<W;H+=3)L(e.getX(H+0)),L(e.getX(H+1)),L(e.getX(H+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new bn(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let f=0,p=i.count;f<p;f++)i.setXYZ(f,0,0,0);const s=new F,a=new F,r=new F,o=new F,l=new F,c=new F,h=new F,d=new F;if(e)for(let f=0,p=e.count;f<p;f+=3){const g=e.getX(f+0),x=e.getX(f+1),m=e.getX(f+2);s.fromBufferAttribute(t,g),a.fromBufferAttribute(t,x),r.fromBufferAttribute(t,m),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let f=0,p=t.count;f<p;f+=3)s.fromBufferAttribute(t,f+0),a.fromBufferAttribute(t,f+1),r.fromBufferAttribute(t,f+2),h.subVectors(r,a),d.subVectors(s,a),h.cross(d),i.setXYZ(f+0,h.x,h.y,h.z),i.setXYZ(f+1,h.x,h.y,h.z),i.setXYZ(f+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Ft.fromBufferAttribute(e,t),Ft.normalize(),e.setXYZ(t,Ft.x,Ft.y,Ft.z)}toNonIndexed(){function e(o,l){const c=o.array,h=o.itemSize,d=o.normalized,f=new c.constructor(l.length*h);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){o.isInterleavedBufferAttribute?p=l[x]*o.data.stride+o.offset:p=l[x]*h;for(let u=0;u<h;u++)f[g++]=c[p++]}return new bn(f,h,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new wt,i=this.index.array,s=this.attributes;for(const o in s){const l=s[o],c=e(l,i);t.setAttribute(o,c)}const a=this.morphAttributes;for(const o in a){const l=[],c=a[o];for(let h=0,d=c.length;h<d;h++){const f=c[h],p=e(f,i);l.push(p)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;const r=this.groups;for(let o=0,l=r.length;o<l;o++){const c=r[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const s={};let a=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],h=[];for(let d=0,f=c.length;d<f;d++){const p=c[d];h.push(p.toJSON(e.data))}h.length>0&&(s[l]=h,a=!0)}a&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const r=this.groups;r.length>0&&(e.data.groups=JSON.parse(JSON.stringify(r)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const s=e.attributes;for(const c in s){const h=s[c];this.setAttribute(c,h.clone(t))}const a=e.morphAttributes;for(const c in a){const h=[],d=a[c];for(let f=0,p=d.length;f<p;f++)h.push(d[f].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;const r=e.groups;for(let c=0,h=r.length;c<h;c++){const d=r[c];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const gl=new Mt,Mi=new Xs,oa=new Ws,vl=new F,la=new F,ca=new F,ha=new F,pr=new F,da=new F,_l=new F,ua=new F;class kt extends Ht{constructor(e=new wt,t=new Yn){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}getVertexPosition(e,t){const i=this.geometry,s=i.attributes.position,a=i.morphAttributes.position,r=i.morphTargetsRelative;t.fromBufferAttribute(s,e);const o=this.morphTargetInfluences;if(a&&o){da.set(0,0,0);for(let l=0,c=a.length;l<c;l++){const h=o[l],d=a[l];h!==0&&(pr.fromBufferAttribute(d,e),r?da.addScaledVector(pr,h):da.addScaledVector(pr.sub(t),h))}t.add(da)}return t}raycast(e,t){const i=this.geometry,s=this.material,a=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),oa.copy(i.boundingSphere),oa.applyMatrix4(a),Mi.copy(e.ray).recast(e.near),!(oa.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(oa,vl)===null||Mi.origin.distanceToSquared(vl)>(e.far-e.near)**2))&&(gl.copy(a).invert(),Mi.copy(e.ray).applyMatrix4(gl),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Mi)))}_computeIntersections(e,t,i){let s;const a=this.geometry,r=this.material,o=a.index,l=a.attributes.position,c=a.attributes.uv,h=a.attributes.uv1,d=a.attributes.normal,f=a.groups,p=a.drawRange;if(o!==null)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=r[m.materialIndex],R=Math.max(m.start,p.start),w=Math.min(o.count,Math.min(m.start+m.count,p.start+p.count));for(let y=R,A=w;y<A;y+=3){const b=o.getX(y),L=o.getX(y+1),D=o.getX(y+2);s=fa(this,u,e,i,c,h,d,b,L,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(o.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const R=o.getX(m),w=o.getX(m+1),y=o.getX(m+2);s=fa(this,r,e,i,c,h,d,R,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}else if(l!==void 0)if(Array.isArray(r))for(let g=0,x=f.length;g<x;g++){const m=f[g],u=r[m.materialIndex],R=Math.max(m.start,p.start),w=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=R,A=w;y<A;y+=3){const b=y,L=y+1,D=y+2;s=fa(this,u,e,i,c,h,d,b,L,D),s&&(s.faceIndex=Math.floor(y/3),s.face.materialIndex=m.materialIndex,t.push(s))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,u=x;m<u;m+=3){const R=m,w=m+1,y=m+2;s=fa(this,r,e,i,c,h,d,R,w,y),s&&(s.faceIndex=Math.floor(m/3),t.push(s))}}}}function Rd(n,e,t,i,s,a,r,o){let l;if(e.side===jt?l=i.intersectTriangle(r,a,s,!0,o):l=i.intersectTriangle(s,a,r,e.side===Nn,o),l===null)return null;ua.copy(o),ua.applyMatrix4(n.matrixWorld);const c=t.ray.origin.distanceTo(ua);return c<t.near||c>t.far?null:{distance:c,point:ua.clone(),object:n}}function fa(n,e,t,i,s,a,r,o,l,c){n.getVertexPosition(o,la),n.getVertexPosition(l,ca),n.getVertexPosition(c,ha);const h=Rd(n,e,t,i,la,ca,ha,_l);if(h){const d=new F;Sn.getBarycoord(_l,la,ca,ha,d),s&&(h.uv=Sn.getInterpolatedAttribute(s,o,l,c,d,new He)),a&&(h.uv1=Sn.getInterpolatedAttribute(a,o,l,c,d,new He)),r&&(h.normal=Sn.getInterpolatedAttribute(r,o,l,c,d,new F),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));const f={a:o,b:l,c,normal:new F,materialIndex:0};Sn.getNormal(la,ca,ha,f.normal),h.face=f,h.barycoord=d}return h}class Mn extends wt{constructor(e=1,t=1,i=1,s=1,a=1,r=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:s,heightSegments:a,depthSegments:r};const o=this;s=Math.floor(s),a=Math.floor(a),r=Math.floor(r);const l=[],c=[],h=[],d=[];let f=0,p=0;g("z","y","x",-1,-1,i,t,e,r,a,0),g("z","y","x",1,-1,i,t,-e,r,a,1),g("x","z","y",1,1,e,i,t,s,r,2),g("x","z","y",1,-1,e,i,-t,s,r,3),g("x","y","z",1,-1,e,t,i,s,a,4),g("x","y","z",-1,-1,e,t,-i,s,a,5),this.setIndex(l),this.setAttribute("position",new St(c,3)),this.setAttribute("normal",new St(h,3)),this.setAttribute("uv",new St(d,2));function g(x,m,u,R,w,y,A,b,L,D,S){const E=y/L,P=A/D,U=y/2,H=A/2,W=b/2,K=L+1,G=D+1;let ee=0,V=0;const ne=new F;for(let fe=0;fe<G;fe++){const pe=fe*P-H;for(let xe=0;xe<K;xe++){const $e=xe*E-U;ne[x]=$e*R,ne[m]=pe*w,ne[u]=W,c.push(ne.x,ne.y,ne.z),ne[x]=0,ne[m]=0,ne[u]=b>0?1:-1,h.push(ne.x,ne.y,ne.z),d.push(xe/L),d.push(1-fe/D),ee+=1}}for(let fe=0;fe<D;fe++)for(let pe=0;pe<L;pe++){const xe=f+pe+K*fe,$e=f+pe+K*(fe+1),Ye=f+(pe+1)+K*(fe+1),ve=f+(pe+1)+K*fe;l.push(xe,$e,ve),l.push($e,Ye,ve),V+=6}o.addGroup(p,V,S),p+=V,f+=ee}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function fs(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const s=n[t][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=s.clone():Array.isArray(s)?e[t][i]=s.slice():e[t][i]=s}}return e}function Kt(n){const e={};for(let t=0;t<n.length;t++){const i=fs(n[t]);for(const s in i)e[s]=i[s]}return e}function Cd(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cc(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:ot.workingColorSpace}const Ld={clone:fs,merge:Kt};var Pd=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Dd=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Jn extends gi{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Pd,this.fragmentShader=Dd,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=fs(e.uniforms),this.uniformsGroups=Cd(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const r=this.uniforms[s].value;r&&r.isTexture?t.uniforms[s]={type:"t",value:r.toJSON(e).uuid}:r&&r.isColor?t.uniforms[s]={type:"c",value:r.getHex()}:r&&r.isVector2?t.uniforms[s]={type:"v2",value:r.toArray()}:r&&r.isVector3?t.uniforms[s]={type:"v3",value:r.toArray()}:r&&r.isVector4?t.uniforms[s]={type:"v4",value:r.toArray()}:r&&r.isMatrix3?t.uniforms[s]={type:"m3",value:r.toArray()}:r&&r.isMatrix4?t.uniforms[s]={type:"m4",value:r.toArray()}:t.uniforms[s]={value:r}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Lc extends Ht{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Mt,this.projectionMatrix=new Mt,this.projectionMatrixInverse=new Mt,this.coordinateSystem=Dn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const oi=new F,xl=new He,Ml=new He;class fn extends Lc{constructor(e=50,t=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Os*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Cs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Os*2*Math.atan(Math.tan(Cs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,i){oi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(oi.x,oi.y).multiplyScalar(-e/oi.z),oi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(oi.x,oi.y).multiplyScalar(-e/oi.z)}getViewSize(e,t){return this.getViewBounds(e,xl,Ml),t.subVectors(Ml,xl)}setViewOffset(e,t,i,s,a,r){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Cs*.5*this.fov)/this.zoom,i=2*t,s=this.aspect*i,a=-.5*s;const r=this.view;if(this.view!==null&&this.view.enabled){const l=r.fullWidth,c=r.fullHeight;a+=r.offsetX*s/l,t-=r.offsetY*i/c,s*=r.width/l,i*=r.height/c}const o=this.filmOffset;o!==0&&(a+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(a,a+s,t,t-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const ji=-90,Ji=1;class Id extends Ht{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new fn(ji,Ji,e,t);s.layers=this.layers,this.add(s);const a=new fn(ji,Ji,e,t);a.layers=this.layers,this.add(a);const r=new fn(ji,Ji,e,t);r.layers=this.layers,this.add(r);const o=new fn(ji,Ji,e,t);o.layers=this.layers,this.add(o);const l=new fn(ji,Ji,e,t);l.layers=this.layers,this.add(l);const c=new fn(ji,Ji,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,s,a,r,o,l]=t;for(const c of t)this.remove(c);if(e===Dn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),a.up.set(0,0,-1),a.lookAt(0,1,0),r.up.set(0,0,1),r.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Da)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),a.up.set(0,0,1),a.lookAt(0,1,0),r.up.set(0,0,-1),r.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[a,r,o,l,c,h]=this.children,d=e.getRenderTarget(),f=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,s),e.render(t,a),e.setRenderTarget(i,1,s),e.render(t,r),e.setRenderTarget(i,2,s),e.render(t,o),e.setRenderTarget(i,3,s),e.render(t,l),e.setRenderTarget(i,4,s),e.render(t,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,s),e.render(t,h),e.setRenderTarget(d,f,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class Pc extends Jt{constructor(e=[],t=hs,i,s,a,r,o,l,c,h){super(e,t,i,s,a,r,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ud extends Fi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},s=[i,i,i,i,i,i];this.texture=new Pc(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Mn(5,5,5),a=new Jn({name:"CubemapFromEquirect",uniforms:fs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:jt,blending:ui});a.uniforms.tEquirect.value=t;const r=new kt(s,a),o=t.minFilter;return t.minFilter===Li&&(t.minFilter=Pn),new Id(1,10,this).update(e,r),t.minFilter=o,r.geometry.dispose(),r.material.dispose(),this}clear(e,t=!0,i=!0,s=!0){const a=e.getRenderTarget();for(let r=0;r<6;r++)e.setRenderTarget(this,r),e.clear(t,i,s);e.setRenderTarget(a)}}class In extends Ht{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Nd={type:"move"};class mr{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new In,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new In,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new F,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new F),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new In,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new F,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new F),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let s=null,a=null,r=null;const o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){r=!0;for(const x of e.hand.values()){const m=t.getJointPose(x,i),u=this._getHandJoint(c,x);m!==null&&(u.matrix.fromArray(m.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,u.jointRadius=m.radius),u.visible=m!==null}const h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],f=h.position.distanceTo(d.position),p=.02,g=.005;c.inputState.pinching&&f>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&f<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(a=t.getPose(e.gripSpace,i),a!==null&&(l.matrix.fromArray(a.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,a.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(a.linearVelocity)):l.hasLinearVelocity=!1,a.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(a.angularVelocity)):l.hasAngularVelocity=!1));o!==null&&(s=t.getPose(e.targetRaySpace,i),s===null&&a!==null&&(s=a),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Nd)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=a!==null),c!==null&&(c.visible=r!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new In;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class Od extends Ht{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Tn,this.environmentIntensity=1,this.environmentRotation=new Tn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const gr=new F,Fd=new F,Bd=new Ze;class li{constructor(e=new F(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,s){return this.normal.set(e,t,i),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const s=gr.subVectors(i,t).cross(Fd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(gr),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return a<0||a>1?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||Bd.getNormalMatrix(e),s=this.coplanarPoint(gr).applyMatrix4(e),a=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(a),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new Ws,zd=new He(.5,.5),pa=new F;class ko{constructor(e=new li,t=new li,i=new li,s=new li,a=new li,r=new li){this.planes=[e,t,i,s,a,r]}set(e,t,i,s,a,r){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(i),o[3].copy(s),o[4].copy(a),o[5].copy(r),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Dn,i=!1){const s=this.planes,a=e.elements,r=a[0],o=a[1],l=a[2],c=a[3],h=a[4],d=a[5],f=a[6],p=a[7],g=a[8],x=a[9],m=a[10],u=a[11],R=a[12],w=a[13],y=a[14],A=a[15];if(s[0].setComponents(c-r,p-h,u-g,A-R).normalize(),s[1].setComponents(c+r,p+h,u+g,A+R).normalize(),s[2].setComponents(c+o,p+d,u+x,A+w).normalize(),s[3].setComponents(c-o,p-d,u-x,A-w).normalize(),i)s[4].setComponents(l,f,m,y).normalize(),s[5].setComponents(c-l,p-f,u-m,A-y).normalize();else if(s[4].setComponents(c-l,p-f,u-m,A-y).normalize(),t===Dn)s[5].setComponents(c+l,p+f,u+m,A+y).normalize();else if(t===Da)s[5].setComponents(l,f,m,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(e){Si.center.set(0,0,0);const t=zd.distanceTo(e.center);return Si.radius=.7071067811865476+t,Si.applyMatrix4(e.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(e){const t=this.planes,i=e.center,s=-e.radius;for(let a=0;a<6;a++)if(t[a].distanceToPoint(i)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const s=t[i];if(pa.x=s.normal.x>0?e.max.x:e.min.x,pa.y=s.normal.y>0?e.max.y:e.min.y,pa.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(pa)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Ii extends gi{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new it(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const Ia=new F,Ua=new F,Sl=new Mt,Ts=new Xs,ma=new Ws,vr=new F,yl=new F;class qs extends Ht{constructor(e=new wt,t=new Ii){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[0];for(let s=1,a=t.count;s<a;s++)Ia.fromBufferAttribute(t,s-1),Ua.fromBufferAttribute(t,s),i[s]=i[s-1],i[s]+=Ia.distanceTo(Ua);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Line.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),ma.copy(i.boundingSphere),ma.applyMatrix4(s),ma.radius+=a,e.ray.intersectsSphere(ma)===!1)return;Sl.copy(s).invert(),Ts.copy(e.ray).applyMatrix4(Sl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,f=i.attributes.position;if(h!==null){const p=Math.max(0,r.start),g=Math.min(h.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){const u=h.getX(x),R=h.getX(x+1),w=ga(this,e,Ts,l,u,R,x);w&&t.push(w)}if(this.isLineLoop){const x=h.getX(g-1),m=h.getX(p),u=ga(this,e,Ts,l,x,m,g-1);u&&t.push(u)}}else{const p=Math.max(0,r.start),g=Math.min(f.count,r.start+r.count);for(let x=p,m=g-1;x<m;x+=c){const u=ga(this,e,Ts,l,x,x+1,x);u&&t.push(u)}if(this.isLineLoop){const x=ga(this,e,Ts,l,g-1,p,g-1);x&&t.push(x)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function ga(n,e,t,i,s,a,r){const o=n.geometry.attributes.position;if(Ia.fromBufferAttribute(o,s),Ua.fromBufferAttribute(o,a),t.distanceSqToSegment(Ia,Ua,vr,yl)>i)return;vr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(vr);if(!(c<e.near||c>e.far))return{distance:c,point:yl.clone().applyMatrix4(n.matrixWorld),index:r,face:null,faceIndex:null,barycoord:null,object:n}}const El=new F,bl=new F;class Dc extends qs{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,i=[];for(let s=0,a=t.count;s<a;s+=2)El.fromBufferAttribute(t,s),bl.fromBufferAttribute(t,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+El.distanceTo(bl);e.setAttribute("lineDistance",new St(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class kd extends qs{constructor(e,t){super(e,t),this.isLineLoop=!0,this.type="LineLoop"}}class Ic extends gi{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new it(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const Tl=new Mt,yo=new Xs,va=new Ws,_a=new F;class Hd extends Ht{constructor(e=new wt,t=new Ic){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,t){const i=this.geometry,s=this.matrixWorld,a=e.params.Points.threshold,r=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),va.copy(i.boundingSphere),va.applyMatrix4(s),va.radius+=a,e.ray.intersectsSphere(va)===!1)return;Tl.copy(s).invert(),yo.copy(e.ray).applyMatrix4(Tl);const o=a/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){const f=Math.max(0,r.start),p=Math.min(c.count,r.start+r.count);for(let g=f,x=p;g<x;g++){const m=c.getX(g);_a.fromBufferAttribute(d,m),Al(_a,m,l,s,e,t,this)}}else{const f=Math.max(0,r.start),p=Math.min(d.count,r.start+r.count);for(let g=f,x=p;g<x;g++)_a.fromBufferAttribute(d,g),Al(_a,g,l,s,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const s=t[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let a=0,r=s.length;a<r;a++){const o=s[a].name||String(a);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=a}}}}}function Al(n,e,t,i,s,a,r){const o=yo.distanceSqToPoint(n);if(o<t){const l=new F;yo.closestPointToPoint(n,l),l.applyMatrix4(i);const c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;a.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:r})}}class Uc extends Jt{constructor(e,t,i=Ni,s,a,r,o=En,l=En,c,h=Us,d=1){if(h!==Us&&h!==Ns)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const f={width:e,height:t,depth:d};super(f,s,a,r,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Bo(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Nc extends Jt{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ho extends wt{constructor(e=1,t=1,i=1,s=32,a=1,r=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:i,radialSegments:s,heightSegments:a,openEnded:r,thetaStart:o,thetaLength:l};const c=this;s=Math.floor(s),a=Math.floor(a);const h=[],d=[],f=[],p=[];let g=0;const x=[],m=i/2;let u=0;R(),r===!1&&(e>0&&w(!0),t>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new St(d,3)),this.setAttribute("normal",new St(f,3)),this.setAttribute("uv",new St(p,2));function R(){const y=new F,A=new F;let b=0;const L=(t-e)/i;for(let D=0;D<=a;D++){const S=[],E=D/a,P=E*(t-e)+e;for(let U=0;U<=s;U++){const H=U/s,W=H*l+o,K=Math.sin(W),G=Math.cos(W);A.x=P*K,A.y=-E*i+m,A.z=P*G,d.push(A.x,A.y,A.z),y.set(K,L,G).normalize(),f.push(y.x,y.y,y.z),p.push(H,1-E),S.push(g++)}x.push(S)}for(let D=0;D<s;D++)for(let S=0;S<a;S++){const E=x[S][D],P=x[S+1][D],U=x[S+1][D+1],H=x[S][D+1];(e>0||S!==0)&&(h.push(E,P,H),b+=3),(t>0||S!==a-1)&&(h.push(P,U,H),b+=3)}c.addGroup(u,b,0),u+=b}function w(y){const A=g,b=new He,L=new F;let D=0;const S=y===!0?e:t,E=y===!0?1:-1;for(let U=1;U<=s;U++)d.push(0,m*E,0),f.push(0,E,0),p.push(.5,.5),g++;const P=g;for(let U=0;U<=s;U++){const W=U/s*l+o,K=Math.cos(W),G=Math.sin(W);L.x=S*G,L.y=m*E,L.z=S*K,d.push(L.x,L.y,L.z),f.push(0,E,0),b.x=K*.5+.5,b.y=G*.5*E+.5,p.push(b.x,b.y),g++}for(let U=0;U<s;U++){const H=A+U,W=P+U;y===!0?h.push(W,W+1,H):h.push(W+1,W,H),D+=3}c.addGroup(u,D,y===!0?1:2),u+=D}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ho(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class Go extends wt{constructor(e=[new He(0,-.5),new He(.5,0),new He(0,.5)],t=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:e,segments:t,phiStart:i,phiLength:s},t=Math.floor(t),s=et(s,0,Math.PI*2);const a=[],r=[],o=[],l=[],c=[],h=1/t,d=new F,f=new He,p=new F,g=new F,x=new F;let m=0,u=0;for(let R=0;R<=e.length-1;R++)switch(R){case 0:m=e[R+1].x-e[R].x,u=e[R+1].y-e[R].y,p.x=u*1,p.y=-m,p.z=u*0,x.copy(p),p.normalize(),l.push(p.x,p.y,p.z);break;case e.length-1:l.push(x.x,x.y,x.z);break;default:m=e[R+1].x-e[R].x,u=e[R+1].y-e[R].y,p.x=u*1,p.y=-m,p.z=u*0,g.copy(p),p.x+=x.x,p.y+=x.y,p.z+=x.z,p.normalize(),l.push(p.x,p.y,p.z),x.copy(g)}for(let R=0;R<=t;R++){const w=i+R*h*s,y=Math.sin(w),A=Math.cos(w);for(let b=0;b<=e.length-1;b++){d.x=e[b].x*y,d.y=e[b].y,d.z=e[b].x*A,r.push(d.x,d.y,d.z),f.x=R/t,f.y=b/(e.length-1),o.push(f.x,f.y);const L=l[3*b+0]*y,D=l[3*b+1],S=l[3*b+0]*A;c.push(L,D,S)}}for(let R=0;R<t;R++)for(let w=0;w<e.length-1;w++){const y=w+R*e.length,A=y,b=y+e.length,L=y+e.length+1,D=y+1;a.push(A,b,D),a.push(L,D,b)}this.setIndex(a),this.setAttribute("position",new St(r,3)),this.setAttribute("uv",new St(o,2)),this.setAttribute("normal",new St(c,3))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Go(e.points,e.segments,e.phiStart,e.phiLength)}}class ka extends wt{constructor(e=1,t=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:s};const a=e/2,r=t/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=e/o,f=t/l,p=[],g=[],x=[],m=[];for(let u=0;u<h;u++){const R=u*f-r;for(let w=0;w<c;w++){const y=w*d-a;g.push(y,-R,0),x.push(0,0,1),m.push(w/o),m.push(1-u/l)}}for(let u=0;u<l;u++)for(let R=0;R<o;R++){const w=R+c*u,y=R+c*(u+1),A=R+1+c*(u+1),b=R+1+c*u;p.push(w,y,b),p.push(y,A,b)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ka(e.width,e.height,e.widthSegments,e.heightSegments)}}class zs extends wt{constructor(e=.5,t=1,i=32,s=1,a=0,r=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:e,outerRadius:t,thetaSegments:i,phiSegments:s,thetaStart:a,thetaLength:r},i=Math.max(3,i),s=Math.max(1,s);const o=[],l=[],c=[],h=[];let d=e;const f=(t-e)/s,p=new F,g=new He;for(let x=0;x<=s;x++){for(let m=0;m<=i;m++){const u=a+m/i*r;p.x=d*Math.cos(u),p.y=d*Math.sin(u),l.push(p.x,p.y,p.z),c.push(0,0,1),g.x=(p.x/t+1)/2,g.y=(p.y/t+1)/2,h.push(g.x,g.y)}d+=f}for(let x=0;x<s;x++){const m=x*(i+1);for(let u=0;u<i;u++){const R=u+m,w=R,y=R+i+1,A=R+i+2,b=R+1;o.push(w,y,b),o.push(y,A,b)}}this.setIndex(o),this.setAttribute("position",new St(l,3)),this.setAttribute("normal",new St(c,3)),this.setAttribute("uv",new St(h,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new zs(e.innerRadius,e.outerRadius,e.thetaSegments,e.phiSegments,e.thetaStart,e.thetaLength)}}class Bi extends wt{constructor(e=1,t=32,i=16,s=0,a=Math.PI*2,r=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:s,phiLength:a,thetaStart:r,thetaLength:o},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(r+o,Math.PI);let c=0;const h=[],d=new F,f=new F,p=[],g=[],x=[],m=[];for(let u=0;u<=i;u++){const R=[],w=u/i;let y=0;u===0&&r===0?y=.5/t:u===i&&l===Math.PI&&(y=-.5/t);for(let A=0;A<=t;A++){const b=A/t;d.x=-e*Math.cos(s+b*a)*Math.sin(r+w*o),d.y=e*Math.cos(r+w*o),d.z=e*Math.sin(s+b*a)*Math.sin(r+w*o),g.push(d.x,d.y,d.z),f.copy(d).normalize(),x.push(f.x,f.y,f.z),m.push(b+y,1-w),R.push(c++)}h.push(R)}for(let u=0;u<i;u++)for(let R=0;R<t;R++){const w=h[u][R+1],y=h[u][R],A=h[u+1][R],b=h[u+1][R+1];(u!==0||r>0)&&p.push(w,y,b),(u!==i-1||l<Math.PI)&&p.push(y,A,b)}this.setIndex(p),this.setAttribute("position",new St(g,3)),this.setAttribute("normal",new St(x,3)),this.setAttribute("uv",new St(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bi(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class _r extends gi{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new it(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Gd extends gi{constructor(e){super(),this.isMeshPhongMaterial=!0,this.type="MeshPhongMaterial",this.color=new it(16777215),this.specular=new it(1118481),this.shininess=30,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new it(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Oo,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Tn,this.combine=Co,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.specular.copy(e.specular),this.shininess=e.shininess,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Vd extends gi{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Bh,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Wd extends gi{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const xr={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(this.files[n]=e)},get:function(n){if(this.enabled!==!1)return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};class Xd{constructor(e,t,i){const s=this;let a=!1,r=0,o=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=i,this.abortController=new AbortController,this.itemStart=function(h){o++,a===!1&&s.onStart!==void 0&&s.onStart(h,r,o),a=!0},this.itemEnd=function(h){r++,s.onProgress!==void 0&&s.onProgress(h,r,o),r===o&&(a=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){const d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,f=c.length;d<f;d+=2){const p=c[d],g=c[d+1];if(p.global&&(p.lastIndex=0),p.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this.abortController=new AbortController,this}}}const qd=new Xd;class Vo{constructor(e){this.manager=e!==void 0?e:qd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,t){const i=this;return new Promise(function(s,a){i.load(e,s,t,a)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Vo.DEFAULT_MATERIAL_NAME="__DEFAULT";const Qi=new WeakMap;class Yd extends Vo{constructor(e){super(e)}load(e,t,i,s){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const a=this,r=xr.get(`image:${e}`);if(r!==void 0){if(r.complete===!0)a.manager.itemStart(e),setTimeout(function(){t&&t(r),a.manager.itemEnd(e)},0);else{let d=Qi.get(r);d===void 0&&(d=[],Qi.set(r,d)),d.push({onLoad:t,onError:s})}return r}const o=Fs("img");function l(){h(),t&&t(this);const d=Qi.get(this)||[];for(let f=0;f<d.length;f++){const p=d[f];p.onLoad&&p.onLoad(this)}Qi.delete(this),a.manager.itemEnd(e)}function c(d){h(),s&&s(d),xr.remove(`image:${e}`);const f=Qi.get(this)||[];for(let p=0;p<f.length;p++){const g=f[p];g.onError&&g.onError(d)}Qi.delete(this),a.manager.itemError(e),a.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),xr.add(`image:${e}`,o),a.manager.itemStart(e),o.src=e,o}}class $d extends Vo{constructor(e){super(e)}load(e,t,i,s){const a=new Jt,r=new Yd(this.manager);return r.setCrossOrigin(this.crossOrigin),r.setPath(this.path),r.load(e,function(o){a.image=o,a.needsUpdate=!0,t!==void 0&&t(a)},i,s),a}}class Oc extends Ht{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new it(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}const Mr=new Mt,wl=new F,Rl=new F;class Kd{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=On,this.map=null,this.mapPass=null,this.matrix=new Mt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ko,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new bt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;wl.setFromMatrixPosition(e.matrixWorld),t.position.copy(wl),Rl.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Rl),t.updateMatrixWorld(),Mr.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Mr,t.coordinateSystem,t.reversedDepth),t.reversedDepth?i.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Mr)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class Fc extends Lc{constructor(e=-1,t=1,i=1,s=-1,a=.1,r=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=s,this.near=a,this.far=r,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,s,a,r){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=s,this.view.width=a,this.view.height=r,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let a=i-e,r=i+e,o=s+t,l=s-t;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;a+=c*this.view.offsetX,r=a+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(a,r,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Zd extends Kd{constructor(){super(new Fc(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class jd extends Oc{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Ht.DEFAULT_UP),this.updateMatrix(),this.target=new Ht,this.shadow=new Zd}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class Jd extends Oc{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Qd extends fn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Cl=new Mt;class eu{constructor(e,t,i=0,s=1/0){this.ray=new Xs(e,t),this.near=i,this.far=s,this.camera=null,this.layers=new zo,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,(t.near+t.far)/(t.near-t.far)).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):console.error("THREE.Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Cl.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Cl),this}intersectObject(e,t=!0,i=[]){return Eo(e,this,i,t),i.sort(Ll),i}intersectObjects(e,t=!0,i=[]){for(let s=0,a=e.length;s<a;s++)Eo(e[s],this,i,t);return i.sort(Ll),i}}function Ll(n,e){return n.distance-e.distance}function Eo(n,e,t,i){let s=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(s=!1),s===!0&&i===!0){const a=n.children;for(let r=0,o=a.length;r<o;r++)Eo(a[r],e,t,!0)}}class Pl{constructor(e=1,t=0,i=0){this.radius=e,this.phi=t,this.theta=i}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class tu extends zi{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){if(e===void 0){console.warn("THREE.Controls: connect() now requires an element.");return}this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Dl(n,e,t,i){const s=nu(i);switch(t){case xc:return n*e;case Sc:return n*e/s.components*s.byteLength;case Io:return n*e/s.components*s.byteLength;case yc:return n*e*2/s.components*s.byteLength;case Uo:return n*e*2/s.components*s.byteLength;case Mc:return n*e*3/s.components*s.byteLength;case yn:return n*e*4/s.components*s.byteLength;case No:return n*e*4/s.components*s.byteLength;case ba:case Ta:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Aa:case wa:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case $r:case Zr:return Math.max(n,16)*Math.max(e,8)/4;case Yr:case Kr:return Math.max(n,8)*Math.max(e,8)/2;case jr:case Jr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Qr:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case eo:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case to:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case no:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case io:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case so:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case ao:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case ro:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case oo:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case lo:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case co:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case ho:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case uo:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case fo:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case po:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case mo:case go:case vo:return Math.ceil(n/4)*Math.ceil(e/4)*16;case _o:case xo:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Mo:case So:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function nu(n){switch(n){case On:case mc:return{byteLength:1,components:1};case Ds:case gc:case Gs:return{byteLength:2,components:1};case Po:case Do:return{byteLength:2,components:4};case Ni:case Lo:case $n:return{byteLength:4,components:1};case vc:case _c:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ro}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ro);function Bc(){let n=null,e=!1,t=null,i=null;function s(a,r){t(a,r),i=n.requestAnimationFrame(s)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(s),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(a){t=a},setContext:function(a){n=a}}}function iu(n){const e=new WeakMap;function t(o,l){const c=o.array,h=o.usage,d=c.byteLength,f=n.createBuffer();n.bindBuffer(l,f),n.bufferData(l,c,h),o.onUploadCallback();let p;if(c instanceof Float32Array)p=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?p=n.HALF_FLOAT:p=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=n.SHORT;else if(c instanceof Uint32Array)p=n.UNSIGNED_INT;else if(c instanceof Int32Array)p=n.INT;else if(c instanceof Int8Array)p=n.BYTE;else if(c instanceof Uint8Array)p=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:f,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){const h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((p,g)=>p.start-g.start);let f=0;for(let p=1;p<d.length;p++){const g=d[f],x=d[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++f,d[f]=x)}d.length=f+1;for(let p=0,g=d.length;p<g;p++){const x=d[p];n.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function a(o){o.isInterleavedBufferAttribute&&(o=o.data);const l=e.get(o);l&&(n.deleteBuffer(l.buffer),e.delete(o))}function r(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:a,update:r}}var su=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,au=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,ru=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,ou=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,lu=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,cu=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,hu=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,du=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,uu=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,fu=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,pu=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,mu=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,gu=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,vu=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,_u=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,xu=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Mu=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Su=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,yu=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Eu=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,bu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Tu=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,Au=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,wu=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Ru=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Cu=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,Lu=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Pu=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Du=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Iu=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Uu="gl_FragColor = linearToOutputTexel( gl_FragColor );",Nu=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Ou=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Fu=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Bu=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,zu=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ku=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Hu=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Gu=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Vu=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Wu=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Xu=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,qu=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Yu=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,$u=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Ku=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Zu=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,ju=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Ju=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Qu=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ef=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,tf=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,nf=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,sf=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,af=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,rf=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,of=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,lf=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,cf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,hf=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,df=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,uf=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,ff=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,pf=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,mf=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,gf=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,vf=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,_f=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,xf=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Mf=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Sf=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,yf=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Ef=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,bf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Tf=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Af=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,wf=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Rf=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Cf=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Lf=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Pf=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Df=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,If=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,Uf=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,Nf=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Of=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Ff=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Bf=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,zf=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,kf=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		float depth = unpackRGBAToDepth( texture2D( depths, uv ) );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			return step( depth, compare );
		#else
			return step( compare, depth );
		#endif
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow( sampler2D shadow, vec2 uv, float compare ) {
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		#ifdef USE_REVERSED_DEPTH_BUFFER
			float hard_shadow = step( distribution.x, compare );
		#else
			float hard_shadow = step( compare, distribution.x );
		#endif
		if ( hard_shadow != 1.0 ) {
			float distance = compare - distribution.x;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,Hf=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,Gf=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,Vf=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Wf=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Xf=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,qf=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Yf=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,$f=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,Kf=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Zf=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jf=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,Jf=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Qf=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,ep=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,tp=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,np=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ip=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const sp=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ap=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,op=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,lp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,cp=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hp=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,dp=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,up=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,fp=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,pp=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,mp=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,gp=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vp=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_p=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,xp=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mp=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Sp=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,yp=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,Ep=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,bp=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Tp=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Ap=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,wp=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Rp=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Cp=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Lp=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Pp=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Dp=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Ip=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Up=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Np=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Op=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Fp=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Qe={alphahash_fragment:su,alphahash_pars_fragment:au,alphamap_fragment:ru,alphamap_pars_fragment:ou,alphatest_fragment:lu,alphatest_pars_fragment:cu,aomap_fragment:hu,aomap_pars_fragment:du,batching_pars_vertex:uu,batching_vertex:fu,begin_vertex:pu,beginnormal_vertex:mu,bsdfs:gu,iridescence_fragment:vu,bumpmap_pars_fragment:_u,clipping_planes_fragment:xu,clipping_planes_pars_fragment:Mu,clipping_planes_pars_vertex:Su,clipping_planes_vertex:yu,color_fragment:Eu,color_pars_fragment:bu,color_pars_vertex:Tu,color_vertex:Au,common:wu,cube_uv_reflection_fragment:Ru,defaultnormal_vertex:Cu,displacementmap_pars_vertex:Lu,displacementmap_vertex:Pu,emissivemap_fragment:Du,emissivemap_pars_fragment:Iu,colorspace_fragment:Uu,colorspace_pars_fragment:Nu,envmap_fragment:Ou,envmap_common_pars_fragment:Fu,envmap_pars_fragment:Bu,envmap_pars_vertex:zu,envmap_physical_pars_fragment:Zu,envmap_vertex:ku,fog_vertex:Hu,fog_pars_vertex:Gu,fog_fragment:Vu,fog_pars_fragment:Wu,gradientmap_pars_fragment:Xu,lightmap_pars_fragment:qu,lights_lambert_fragment:Yu,lights_lambert_pars_fragment:$u,lights_pars_begin:Ku,lights_toon_fragment:ju,lights_toon_pars_fragment:Ju,lights_phong_fragment:Qu,lights_phong_pars_fragment:ef,lights_physical_fragment:tf,lights_physical_pars_fragment:nf,lights_fragment_begin:sf,lights_fragment_maps:af,lights_fragment_end:rf,logdepthbuf_fragment:of,logdepthbuf_pars_fragment:lf,logdepthbuf_pars_vertex:cf,logdepthbuf_vertex:hf,map_fragment:df,map_pars_fragment:uf,map_particle_fragment:ff,map_particle_pars_fragment:pf,metalnessmap_fragment:mf,metalnessmap_pars_fragment:gf,morphinstance_vertex:vf,morphcolor_vertex:_f,morphnormal_vertex:xf,morphtarget_pars_vertex:Mf,morphtarget_vertex:Sf,normal_fragment_begin:yf,normal_fragment_maps:Ef,normal_pars_fragment:bf,normal_pars_vertex:Tf,normal_vertex:Af,normalmap_pars_fragment:wf,clearcoat_normal_fragment_begin:Rf,clearcoat_normal_fragment_maps:Cf,clearcoat_pars_fragment:Lf,iridescence_pars_fragment:Pf,opaque_fragment:Df,packing:If,premultiplied_alpha_fragment:Uf,project_vertex:Nf,dithering_fragment:Of,dithering_pars_fragment:Ff,roughnessmap_fragment:Bf,roughnessmap_pars_fragment:zf,shadowmap_pars_fragment:kf,shadowmap_pars_vertex:Hf,shadowmap_vertex:Gf,shadowmask_pars_fragment:Vf,skinbase_vertex:Wf,skinning_pars_vertex:Xf,skinning_vertex:qf,skinnormal_vertex:Yf,specularmap_fragment:$f,specularmap_pars_fragment:Kf,tonemapping_fragment:Zf,tonemapping_pars_fragment:jf,transmission_fragment:Jf,transmission_pars_fragment:Qf,uv_pars_fragment:ep,uv_pars_vertex:tp,uv_vertex:np,worldpos_vertex:ip,background_vert:sp,background_frag:ap,backgroundCube_vert:rp,backgroundCube_frag:op,cube_vert:lp,cube_frag:cp,depth_vert:hp,depth_frag:dp,distanceRGBA_vert:up,distanceRGBA_frag:fp,equirect_vert:pp,equirect_frag:mp,linedashed_vert:gp,linedashed_frag:vp,meshbasic_vert:_p,meshbasic_frag:xp,meshlambert_vert:Mp,meshlambert_frag:Sp,meshmatcap_vert:yp,meshmatcap_frag:Ep,meshnormal_vert:bp,meshnormal_frag:Tp,meshphong_vert:Ap,meshphong_frag:wp,meshphysical_vert:Rp,meshphysical_frag:Cp,meshtoon_vert:Lp,meshtoon_frag:Pp,points_vert:Dp,points_frag:Ip,shadow_vert:Up,shadow_frag:Np,sprite_vert:Op,sprite_frag:Fp},ye={common:{diffuse:{value:new it(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Ze}},envmap:{envMap:{value:null},envMapRotation:{value:new Ze},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Ze}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Ze}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Ze},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Ze},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Ze},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Ze}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Ze}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Ze}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new it(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new it(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0},uvTransform:{value:new Ze}},sprite:{diffuse:{value:new it(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Ze},alphaMap:{value:null},alphaMapTransform:{value:new Ze},alphaTest:{value:0}}},Ln={basic:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Qe.meshbasic_vert,fragmentShader:Qe.meshbasic_frag},lambert:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshlambert_vert,fragmentShader:Qe.meshlambert_frag},phong:{uniforms:Kt([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new it(0)},specular:{value:new it(1118481)},shininess:{value:30}}]),vertexShader:Qe.meshphong_vert,fragmentShader:Qe.meshphong_frag},standard:{uniforms:Kt([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new it(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag},toon:{uniforms:Kt([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new it(0)}}]),vertexShader:Qe.meshtoon_vert,fragmentShader:Qe.meshtoon_frag},matcap:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Qe.meshmatcap_vert,fragmentShader:Qe.meshmatcap_frag},points:{uniforms:Kt([ye.points,ye.fog]),vertexShader:Qe.points_vert,fragmentShader:Qe.points_frag},dashed:{uniforms:Kt([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Qe.linedashed_vert,fragmentShader:Qe.linedashed_frag},depth:{uniforms:Kt([ye.common,ye.displacementmap]),vertexShader:Qe.depth_vert,fragmentShader:Qe.depth_frag},normal:{uniforms:Kt([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Qe.meshnormal_vert,fragmentShader:Qe.meshnormal_frag},sprite:{uniforms:Kt([ye.sprite,ye.fog]),vertexShader:Qe.sprite_vert,fragmentShader:Qe.sprite_frag},background:{uniforms:{uvTransform:{value:new Ze},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Qe.background_vert,fragmentShader:Qe.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new Ze}},vertexShader:Qe.backgroundCube_vert,fragmentShader:Qe.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Qe.cube_vert,fragmentShader:Qe.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Qe.equirect_vert,fragmentShader:Qe.equirect_frag},distanceRGBA:{uniforms:Kt([ye.common,ye.displacementmap,{referencePosition:{value:new F},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Qe.distanceRGBA_vert,fragmentShader:Qe.distanceRGBA_frag},shadow:{uniforms:Kt([ye.lights,ye.fog,{color:{value:new it(0)},opacity:{value:1}}]),vertexShader:Qe.shadow_vert,fragmentShader:Qe.shadow_frag}};Ln.physical={uniforms:Kt([Ln.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Ze},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Ze},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Ze},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Ze},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Ze},sheen:{value:0},sheenColor:{value:new it(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Ze},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Ze},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Ze},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Ze},attenuationDistance:{value:0},attenuationColor:{value:new it(0)},specularColor:{value:new it(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Ze},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Ze},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Ze}}]),vertexShader:Qe.meshphysical_vert,fragmentShader:Qe.meshphysical_frag};const xa={r:0,b:0,g:0},yi=new Tn,Bp=new Mt;function zp(n,e,t,i,s,a,r){const o=new it(0);let l=a===!0?0:1,c,h,d=null,f=0,p=null;function g(w){let y=w.isScene===!0?w.background:null;return y&&y.isTexture&&(y=(w.backgroundBlurriness>0?t:e).get(y)),y}function x(w){let y=!1;const A=g(w);A===null?u(o,l):A&&A.isColor&&(u(A,1),y=!0);const b=n.xr.getEnvironmentBlendMode();b==="additive"?i.buffers.color.setClear(0,0,0,1,r):b==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,r),(n.autoClear||y)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function m(w,y){const A=g(y);A&&(A.isCubeTexture||A.mapping===za)?(h===void 0&&(h=new kt(new Mn(1,1,1),new Jn({name:"BackgroundCubeMaterial",uniforms:fs(Ln.backgroundCube.uniforms),vertexShader:Ln.backgroundCube.vertexShader,fragmentShader:Ln.backgroundCube.fragmentShader,side:jt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(b,L,D){this.matrixWorld.copyPosition(D.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(h)),yi.copy(y.backgroundRotation),yi.x*=-1,yi.y*=-1,yi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),h.material.uniforms.envMap.value=A,h.material.uniforms.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,h.material.uniforms.backgroundBlurriness.value=y.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(Bp.makeRotationFromEuler(yi)),h.material.toneMapped=ot.getTransfer(A.colorSpace)!==ht,(d!==A||f!==A.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,d=A,f=A.version,p=n.toneMapping),h.layers.enableAll(),w.unshift(h,h.geometry,h.material,0,0,null)):A&&A.isTexture&&(c===void 0&&(c=new kt(new ka(2,2),new Jn({name:"BackgroundMaterial",uniforms:fs(Ln.background.uniforms),vertexShader:Ln.background.vertexShader,fragmentShader:Ln.background.fragmentShader,side:Nn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=A,c.material.uniforms.backgroundIntensity.value=y.backgroundIntensity,c.material.toneMapped=ot.getTransfer(A.colorSpace)!==ht,A.matrixAutoUpdate===!0&&A.updateMatrix(),c.material.uniforms.uvTransform.value.copy(A.matrix),(d!==A||f!==A.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=A,f=A.version,p=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function u(w,y){w.getRGB(xa,Cc(n)),i.buffers.color.setClear(xa.r,xa.g,xa.b,y,r)}function R(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return o},setClearColor:function(w,y=1){o.set(w),l=y,u(o,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,u(o,l)},render:x,addToRenderList:m,dispose:R}}function kp(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=f(null);let a=s,r=!1;function o(E,P,U,H,W){let K=!1;const G=d(H,U,P);a!==G&&(a=G,c(a.object)),K=p(E,H,U,W),K&&g(E,H,U,W),W!==null&&e.update(W,n.ELEMENT_ARRAY_BUFFER),(K||r)&&(r=!1,y(E,P,U,H),W!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(W).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function h(E){return n.deleteVertexArray(E)}function d(E,P,U){const H=U.wireframe===!0;let W=i[E.id];W===void 0&&(W={},i[E.id]=W);let K=W[P.id];K===void 0&&(K={},W[P.id]=K);let G=K[H];return G===void 0&&(G=f(l()),K[H]=G),G}function f(E){const P=[],U=[],H=[];for(let W=0;W<t;W++)P[W]=0,U[W]=0,H[W]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:P,enabledAttributes:U,attributeDivisors:H,object:E,attributes:{},index:null}}function p(E,P,U,H){const W=a.attributes,K=P.attributes;let G=0;const ee=U.getAttributes();for(const V in ee)if(ee[V].location>=0){const fe=W[V];let pe=K[V];if(pe===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(pe=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(pe=E.instanceColor)),fe===void 0||fe.attribute!==pe||pe&&fe.data!==pe.data)return!0;G++}return a.attributesNum!==G||a.index!==H}function g(E,P,U,H){const W={},K=P.attributes;let G=0;const ee=U.getAttributes();for(const V in ee)if(ee[V].location>=0){let fe=K[V];fe===void 0&&(V==="instanceMatrix"&&E.instanceMatrix&&(fe=E.instanceMatrix),V==="instanceColor"&&E.instanceColor&&(fe=E.instanceColor));const pe={};pe.attribute=fe,fe&&fe.data&&(pe.data=fe.data),W[V]=pe,G++}a.attributes=W,a.attributesNum=G,a.index=H}function x(){const E=a.newAttributes;for(let P=0,U=E.length;P<U;P++)E[P]=0}function m(E){u(E,0)}function u(E,P){const U=a.newAttributes,H=a.enabledAttributes,W=a.attributeDivisors;U[E]=1,H[E]===0&&(n.enableVertexAttribArray(E),H[E]=1),W[E]!==P&&(n.vertexAttribDivisor(E,P),W[E]=P)}function R(){const E=a.newAttributes,P=a.enabledAttributes;for(let U=0,H=P.length;U<H;U++)P[U]!==E[U]&&(n.disableVertexAttribArray(U),P[U]=0)}function w(E,P,U,H,W,K,G){G===!0?n.vertexAttribIPointer(E,P,U,W,K):n.vertexAttribPointer(E,P,U,H,W,K)}function y(E,P,U,H){x();const W=H.attributes,K=U.getAttributes(),G=P.defaultAttributeValues;for(const ee in K){const V=K[ee];if(V.location>=0){let ne=W[ee];if(ne===void 0&&(ee==="instanceMatrix"&&E.instanceMatrix&&(ne=E.instanceMatrix),ee==="instanceColor"&&E.instanceColor&&(ne=E.instanceColor)),ne!==void 0){const fe=ne.normalized,pe=ne.itemSize,xe=e.get(ne);if(xe===void 0)continue;const $e=xe.buffer,Ye=xe.type,ve=xe.bytesPerElement,z=Ye===n.INT||Ye===n.UNSIGNED_INT||ne.gpuType===Lo;if(ne.isInterleavedBufferAttribute){const Z=ne.data,he=Z.stride,we=ne.offset;if(Z.isInstancedInterleavedBuffer){for(let de=0;de<V.locationSize;de++)u(V.location+de,Z.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let de=0;de<V.locationSize;de++)m(V.location+de);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let de=0;de<V.locationSize;de++)w(V.location+de,pe/V.locationSize,Ye,fe,he*ve,(we+pe/V.locationSize*de)*ve,z)}else{if(ne.isInstancedBufferAttribute){for(let Z=0;Z<V.locationSize;Z++)u(V.location+Z,ne.meshPerAttribute);E.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let Z=0;Z<V.locationSize;Z++)m(V.location+Z);n.bindBuffer(n.ARRAY_BUFFER,$e);for(let Z=0;Z<V.locationSize;Z++)w(V.location+Z,pe/V.locationSize,Ye,fe,pe*ve,pe/V.locationSize*Z*ve,z)}}else if(G!==void 0){const fe=G[ee];if(fe!==void 0)switch(fe.length){case 2:n.vertexAttrib2fv(V.location,fe);break;case 3:n.vertexAttrib3fv(V.location,fe);break;case 4:n.vertexAttrib4fv(V.location,fe);break;default:n.vertexAttrib1fv(V.location,fe)}}}}R()}function A(){D();for(const E in i){const P=i[E];for(const U in P){const H=P[U];for(const W in H)h(H[W].object),delete H[W];delete P[U]}delete i[E]}}function b(E){if(i[E.id]===void 0)return;const P=i[E.id];for(const U in P){const H=P[U];for(const W in H)h(H[W].object),delete H[W];delete P[U]}delete i[E.id]}function L(E){for(const P in i){const U=i[P];if(U[E.id]===void 0)continue;const H=U[E.id];for(const W in H)h(H[W].object),delete H[W];delete U[E.id]}}function D(){S(),r=!0,a!==s&&(a=s,c(a.object))}function S(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:D,resetDefaultState:S,dispose:A,releaseStatesOfGeometry:b,releaseStatesOfProgram:L,initAttributes:x,enableAttribute:m,disableUnusedAttributes:R}}function Hp(n,e,t){let i;function s(c){i=c}function a(c,h){n.drawArrays(i,c,h),t.update(h,i,1)}function r(c,h,d){d!==0&&(n.drawArraysInstanced(i,c,h,d),t.update(h,i,d))}function o(c,h,d){if(d===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,h,0,d);let p=0;for(let g=0;g<d;g++)p+=h[g];t.update(p,i,1)}function l(c,h,d,f){if(d===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)r(c[g],h[g],f[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,h,0,f,0,d);let g=0;for(let x=0;x<d;x++)g+=h[x]*f[x];t.update(g,i,1)}}this.setMode=s,this.render=a,this.renderInstances=r,this.renderMultiDraw=o,this.renderMultiDrawInstances=l}function Gp(n,e,t,i){let s;function a(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");s=n.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function r(L){return!(L!==yn&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(L){const D=L===Gs&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(L!==On&&i.convert(L)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&L!==$n&&!D)}function l(L){if(L==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp";const h=l(c);h!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);const d=t.logarithmicDepthBuffer===!0,f=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),u=n.getParameter(n.MAX_VERTEX_ATTRIBS),R=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),y=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),A=g>0,b=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:a,getMaxPrecision:l,textureFormatReadable:r,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:f,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:u,maxVertexUniforms:R,maxVaryings:w,maxFragmentUniforms:y,vertexTextures:A,maxSamples:b}}function Vp(n){const e=this;let t=null,i=0,s=!1,a=!1;const r=new li,o=new Ze,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,f){const p=d.length!==0||f||i!==0||s;return s=f,i=d.length,p},this.beginShadows=function(){a=!0,h(null)},this.endShadows=function(){a=!1},this.setGlobalState=function(d,f){t=h(d,f,0)},this.setState=function(d,f,p){const g=d.clippingPlanes,x=d.clipIntersection,m=d.clipShadows,u=n.get(d);if(!s||g===null||g.length===0||a&&!m)a?h(null):c();else{const R=a?0:i,w=R*4;let y=u.clippingState||null;l.value=y,y=h(g,f,w,p);for(let A=0;A!==w;++A)y[A]=t[A];u.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=R}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function h(d,f,p,g){const x=d!==null?d.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const u=p+x*4,R=f.matrixWorldInverse;o.getNormalMatrix(R),(m===null||m.length<u)&&(m=new Float32Array(u));for(let w=0,y=p;w!==x;++w,y+=4)r.copy(d[w]).applyMatrix4(R,o),r.normal.toArray(m,y),m[y+3]=r.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function Wp(n){let e=new WeakMap;function t(r,o){return o===Vr?r.mapping=hs:o===Wr&&(r.mapping=ds),r}function i(r){if(r&&r.isTexture){const o=r.mapping;if(o===Vr||o===Wr)if(e.has(r)){const l=e.get(r).texture;return t(l,r.mapping)}else{const l=r.image;if(l&&l.height>0){const c=new Ud(l.height);return c.fromEquirectangularTexture(n,r),e.set(r,c),r.addEventListener("dispose",s),t(c.texture,r.mapping)}else return null}}return r}function s(r){const o=r.target;o.removeEventListener("dispose",s);const l=e.get(o);l!==void 0&&(e.delete(o),l.dispose())}function a(){e=new WeakMap}return{get:i,dispose:a}}const is=4,Il=[.125,.215,.35,.446,.526,.582],Ai=20,Sr=new Fc,Ul=new it;let yr=null,Er=0,br=0,Tr=!1;const bi=(1+Math.sqrt(5))/2,es=1/bi,Nl=[new F(-bi,es,0),new F(bi,es,0),new F(-es,0,bi),new F(es,0,bi),new F(0,bi,-es),new F(0,bi,es),new F(-1,1,-1),new F(1,1,-1),new F(-1,1,1),new F(1,1,1)],Xp=new F;class Ol{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,s=100,a={}){const{size:r=256,position:o=Xp}=a;yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(r);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,s,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=zl(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Bl(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(yr,Er,br),this._renderer.xr.enabled=Tr,e.scissorTest=!1,Ma(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===hs||e.mapping===ds?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),yr=this._renderer.getRenderTarget(),Er=this._renderer.getActiveCubeFace(),br=this._renderer.getActiveMipmapLevel(),Tr=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Pn,minFilter:Pn,generateMipmaps:!1,type:Gs,format:yn,colorSpace:us,depthBuffer:!1},s=Fl(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Fl(e,t,i);const{_lodMax:a}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=qp(a)),this._blurMaterial=Yp(a,e,t)}return s}_compileMaterial(e){const t=new kt(this._lodPlanes[0],e);this._renderer.compile(t,Sr)}_sceneToCubeUV(e,t,i,s,a){const l=new fn(90,1,t,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,f=d.autoClear,p=d.toneMapping;d.getClearColor(Ul),d.toneMapping=fi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null));const x=new Yn({name:"PMREM.Background",side:jt,depthWrite:!1,depthTest:!1}),m=new kt(new Mn,x);let u=!1;const R=e.background;R?R.isColor&&(x.color.copy(R),e.background=null,u=!0):(x.color.copy(Ul),u=!0);for(let w=0;w<6;w++){const y=w%3;y===0?(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x+h[w],a.y,a.z)):y===1?(l.up.set(0,0,c[w]),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y+h[w],a.z)):(l.up.set(0,c[w],0),l.position.set(a.x,a.y,a.z),l.lookAt(a.x,a.y,a.z+h[w]));const A=this._cubeSize;Ma(s,y*A,w>2?A:0,A,A),d.setRenderTarget(s),u&&d.render(m,l),d.render(e,l)}m.geometry.dispose(),m.material.dispose(),d.toneMapping=p,d.autoClear=f,e.background=R}_textureToCubeUV(e,t){const i=this._renderer,s=e.mapping===hs||e.mapping===ds;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=zl()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Bl());const a=s?this._cubemapMaterial:this._equirectMaterial,r=new kt(this._lodPlanes[0],a),o=a.uniforms;o.envMap.value=e;const l=this._cubeSize;Ma(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(r,Sr)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;const s=this._lodPlanes.length;for(let a=1;a<s;a++){const r=Math.sqrt(this._sigmas[a]*this._sigmas[a]-this._sigmas[a-1]*this._sigmas[a-1]),o=Nl[(s-a-1)%Nl.length];this._blur(e,a-1,a,r,o)}t.autoClear=i}_blur(e,t,i,s,a){const r=this._pingPongRenderTarget;this._halfBlur(e,r,t,i,s,"latitudinal",a),this._halfBlur(r,e,i,i,s,"longitudinal",a)}_halfBlur(e,t,i,s,a,r,o){const l=this._renderer,c=this._blurMaterial;r!=="latitudinal"&&r!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const h=3,d=new kt(this._lodPlanes[s],c),f=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(a)?Math.PI/(2*p):2*Math.PI/(2*Ai-1),x=a/g,m=isFinite(a)?1+Math.floor(h*x):Ai;m>Ai&&console.warn(`sigmaRadians, ${a}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Ai}`);const u=[];let R=0;for(let L=0;L<Ai;++L){const D=L/x,S=Math.exp(-D*D/2);u.push(S),L===0?R+=S:L<m&&(R+=2*S)}for(let L=0;L<u.length;L++)u[L]=u[L]/R;f.envMap.value=e.texture,f.samples.value=m,f.weights.value=u,f.latitudinal.value=r==="latitudinal",o&&(f.poleAxis.value=o);const{_lodMax:w}=this;f.dTheta.value=g,f.mipInt.value=w-i;const y=this._sizeLods[s],A=3*y*(s>w-is?s-w+is:0),b=4*(this._cubeSize-y);Ma(t,A,b,3*y,2*y),l.setRenderTarget(t),l.render(d,Sr)}}function qp(n){const e=[],t=[],i=[];let s=n;const a=n-is+1+Il.length;for(let r=0;r<a;r++){const o=Math.pow(2,s);t.push(o);let l=1/o;r>n-is?l=Il[r-n+is-1]:r===0&&(l=0),i.push(l);const c=1/(o-2),h=-c,d=1+c,f=[h,h,d,h,d,d,h,h,d,d,h,d],p=6,g=6,x=3,m=2,u=1,R=new Float32Array(x*g*p),w=new Float32Array(m*g*p),y=new Float32Array(u*g*p);for(let b=0;b<p;b++){const L=b%3*2/3-1,D=b>2?0:-1,S=[L,D,0,L+2/3,D,0,L+2/3,D+1,0,L,D,0,L+2/3,D+1,0,L,D+1,0];R.set(S,x*g*b),w.set(f,m*g*b);const E=[b,b,b,b,b,b];y.set(E,u*g*b)}const A=new wt;A.setAttribute("position",new bn(R,x)),A.setAttribute("uv",new bn(w,m)),A.setAttribute("faceIndex",new bn(y,u)),e.push(A),s>is&&s--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function Fl(n,e,t){const i=new Fi(n,e,t);return i.texture.mapping=za,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Ma(n,e,t,i,s){n.viewport.set(e,t,i,s),n.scissor.set(e,t,i,s)}function Yp(n,e,t){const i=new Float32Array(Ai),s=new F(0,1,0);return new Jn({name:"SphericalGaussianBlur",defines:{n:Ai,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Bl(){return new Jn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function zl(){return new Jn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wo(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function Wo(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function $p(n){let e=new WeakMap,t=null;function i(o){if(o&&o.isTexture){const l=o.mapping,c=l===Vr||l===Wr,h=l===hs||l===ds;if(c||h){let d=e.get(o);const f=d!==void 0?d.texture.pmremVersion:0;if(o.isRenderTargetTexture&&o.pmremVersion!==f)return t===null&&(t=new Ol(n)),d=c?t.fromEquirectangular(o,d):t.fromCubemap(o,d),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),d.texture;if(d!==void 0)return d.texture;{const p=o.image;return c&&p&&p.height>0||h&&p&&s(p)?(t===null&&(t=new Ol(n)),d=c?t.fromEquirectangular(o):t.fromCubemap(o),d.texture.pmremVersion=o.pmremVersion,e.set(o,d),o.addEventListener("dispose",a),d.texture):null}}}return o}function s(o){let l=0;const c=6;for(let h=0;h<c;h++)o[h]!==void 0&&l++;return l===c}function a(o){const l=o.target;l.removeEventListener("dispose",a);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function r(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:r}}function Kp(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return e[i]=s,s}return{has:function(i){return t(i)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(i){const s=t(i);return s===null&&Bs("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function Zp(n,e,t,i){const s={},a=new WeakMap;function r(d){const f=d.target;f.index!==null&&e.remove(f.index);for(const g in f.attributes)e.remove(f.attributes[g]);f.removeEventListener("dispose",r),delete s[f.id];const p=a.get(f);p&&(e.remove(p),a.delete(f)),i.releaseStatesOfGeometry(f),f.isInstancedBufferGeometry===!0&&delete f._maxInstanceCount,t.memory.geometries--}function o(d,f){return s[f.id]===!0||(f.addEventListener("dispose",r),s[f.id]=!0,t.memory.geometries++),f}function l(d){const f=d.attributes;for(const p in f)e.update(f[p],n.ARRAY_BUFFER)}function c(d){const f=[],p=d.index,g=d.attributes.position;let x=0;if(p!==null){const R=p.array;x=p.version;for(let w=0,y=R.length;w<y;w+=3){const A=R[w+0],b=R[w+1],L=R[w+2];f.push(A,b,b,L,L,A)}}else if(g!==void 0){const R=g.array;x=g.version;for(let w=0,y=R.length/3-1;w<y;w+=3){const A=w+0,b=w+1,L=w+2;f.push(A,b,b,L,L,A)}}else return;const m=new(bc(f)?Rc:wc)(f,1);m.version=x;const u=a.get(d);u&&e.remove(u),a.set(d,m)}function h(d){const f=a.get(d);if(f){const p=d.index;p!==null&&f.version<p.version&&c(d)}else c(d);return a.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function jp(n,e,t){let i;function s(f){i=f}let a,r;function o(f){a=f.type,r=f.bytesPerElement}function l(f,p){n.drawElements(i,p,a,f*r),t.update(p,i,1)}function c(f,p,g){g!==0&&(n.drawElementsInstanced(i,p,a,f*r,g),t.update(p,i,g))}function h(f,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,a,f,0,g);let m=0;for(let u=0;u<g;u++)m+=p[u];t.update(m,i,1)}function d(f,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let u=0;u<f.length;u++)c(f[u]/r,p[u],x[u]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,a,f,0,x,0,g);let u=0;for(let R=0;R<g;R++)u+=p[R]*x[R];t.update(u,i,1)}}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h,this.renderMultiDrawInstances=d}function Jp(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(a,r,o){switch(t.calls++,r){case n.TRIANGLES:t.triangles+=o*(a/3);break;case n.LINES:t.lines+=o*(a/2);break;case n.LINE_STRIP:t.lines+=o*(a-1);break;case n.LINE_LOOP:t.lines+=o*a;break;case n.POINTS:t.points+=o*a;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",r);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:i}}function Qp(n,e,t){const i=new WeakMap,s=new bt;function a(r,o,l){const c=r.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0;let f=i.get(o);if(f===void 0||f.count!==d){let S=function(){L.dispose(),i.delete(o),o.removeEventListener("dispose",S)};f!==void 0&&f.texture.dispose();const p=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],u=o.morphAttributes.normal||[],R=o.morphAttributes.color||[];let w=0;p===!0&&(w=1),g===!0&&(w=2),x===!0&&(w=3);let y=o.attributes.position.count*w,A=1;y>e.maxTextureSize&&(A=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const b=new Float32Array(y*A*4*d),L=new Tc(b,y,A,d);L.type=$n,L.needsUpdate=!0;const D=w*4;for(let E=0;E<d;E++){const P=m[E],U=u[E],H=R[E],W=y*A*4*E;for(let K=0;K<P.count;K++){const G=K*D;p===!0&&(s.fromBufferAttribute(P,K),b[W+G+0]=s.x,b[W+G+1]=s.y,b[W+G+2]=s.z,b[W+G+3]=0),g===!0&&(s.fromBufferAttribute(U,K),b[W+G+4]=s.x,b[W+G+5]=s.y,b[W+G+6]=s.z,b[W+G+7]=0),x===!0&&(s.fromBufferAttribute(H,K),b[W+G+8]=s.x,b[W+G+9]=s.y,b[W+G+10]=s.z,b[W+G+11]=H.itemSize===4?s.w:1)}}f={count:d,texture:L,size:new He(y,A)},i.set(o,f),o.addEventListener("dispose",S)}if(r.isInstancedMesh===!0&&r.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",r.morphTexture,t);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=o.morphTargetsRelative?1:1-p;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",f.texture,t),l.getUniforms().setValue(n,"morphTargetsTextureSize",f.size)}return{update:a}}function em(n,e,t,i){let s=new WeakMap;function a(l){const c=i.render.frame,h=l.geometry,d=e.get(l,h);if(s.get(d)!==c&&(e.update(d),s.set(d,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",o)===!1&&l.addEventListener("dispose",o),s.get(l)!==c&&(t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const f=l.skeleton;s.get(f)!==c&&(f.update(),s.set(f,c))}return d}function r(){s=new WeakMap}function o(l){const c=l.target;c.removeEventListener("dispose",o),t.remove(c.instanceMatrix),c.instanceColor!==null&&t.remove(c.instanceColor)}return{update:a,dispose:r}}const zc=new Jt,kl=new Uc(1,1),kc=new Tc,Hc=new vd,Gc=new Pc,Hl=[],Gl=[],Vl=new Float32Array(16),Wl=new Float32Array(9),Xl=new Float32Array(4);function _s(n,e,t){const i=n[0];if(i<=0||i>0)return n;const s=e*t;let a=Hl[s];if(a===void 0&&(a=new Float32Array(s),Hl[s]=a),e!==0){i.toArray(a,0);for(let r=1,o=0;r!==e;++r)o+=t,n[r].toArray(a,o)}return a}function Dt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function It(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function Ha(n,e){let t=Gl[e];t===void 0&&(t=new Int32Array(e),Gl[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function tm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function nm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2fv(this.addr,e),It(t,e)}}function im(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Dt(t,e))return;n.uniform3fv(this.addr,e),It(t,e)}}function sm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4fv(this.addr,e),It(t,e)}}function am(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Xl.set(i),n.uniformMatrix2fv(this.addr,!1,Xl),It(t,i)}}function rm(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Wl.set(i),n.uniformMatrix3fv(this.addr,!1,Wl),It(t,i)}}function om(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Dt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),It(t,e)}else{if(Dt(t,i))return;Vl.set(i),n.uniformMatrix4fv(this.addr,!1,Vl),It(t,i)}}function lm(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function cm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2iv(this.addr,e),It(t,e)}}function hm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3iv(this.addr,e),It(t,e)}}function dm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4iv(this.addr,e),It(t,e)}}function um(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function fm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Dt(t,e))return;n.uniform2uiv(this.addr,e),It(t,e)}}function pm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Dt(t,e))return;n.uniform3uiv(this.addr,e),It(t,e)}}function mm(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Dt(t,e))return;n.uniform4uiv(this.addr,e),It(t,e)}}function gm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let a;this.type===n.SAMPLER_2D_SHADOW?(kl.compareFunction=Ec,a=kl):a=zc,t.setTexture2D(e||a,s)}function vm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture3D(e||Hc,s)}function _m(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTextureCube(e||Gc,s)}function xm(n,e,t){const i=this.cache,s=t.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),t.setTexture2DArray(e||kc,s)}function Mm(n){switch(n){case 5126:return tm;case 35664:return nm;case 35665:return im;case 35666:return sm;case 35674:return am;case 35675:return rm;case 35676:return om;case 5124:case 35670:return lm;case 35667:case 35671:return cm;case 35668:case 35672:return hm;case 35669:case 35673:return dm;case 5125:return um;case 36294:return fm;case 36295:return pm;case 36296:return mm;case 35678:case 36198:case 36298:case 36306:case 35682:return gm;case 35679:case 36299:case 36307:return vm;case 35680:case 36300:case 36308:case 36293:return _m;case 36289:case 36303:case 36311:case 36292:return xm}}function Sm(n,e){n.uniform1fv(this.addr,e)}function ym(n,e){const t=_s(e,this.size,2);n.uniform2fv(this.addr,t)}function Em(n,e){const t=_s(e,this.size,3);n.uniform3fv(this.addr,t)}function bm(n,e){const t=_s(e,this.size,4);n.uniform4fv(this.addr,t)}function Tm(n,e){const t=_s(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Am(n,e){const t=_s(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function wm(n,e){const t=_s(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Rm(n,e){n.uniform1iv(this.addr,e)}function Cm(n,e){n.uniform2iv(this.addr,e)}function Lm(n,e){n.uniform3iv(this.addr,e)}function Pm(n,e){n.uniform4iv(this.addr,e)}function Dm(n,e){n.uniform1uiv(this.addr,e)}function Im(n,e){n.uniform2uiv(this.addr,e)}function Um(n,e){n.uniform3uiv(this.addr,e)}function Nm(n,e){n.uniform4uiv(this.addr,e)}function Om(n,e,t){const i=this.cache,s=e.length,a=Ha(t,s);Dt(i,a)||(n.uniform1iv(this.addr,a),It(i,a));for(let r=0;r!==s;++r)t.setTexture2D(e[r]||zc,a[r])}function Fm(n,e,t){const i=this.cache,s=e.length,a=Ha(t,s);Dt(i,a)||(n.uniform1iv(this.addr,a),It(i,a));for(let r=0;r!==s;++r)t.setTexture3D(e[r]||Hc,a[r])}function Bm(n,e,t){const i=this.cache,s=e.length,a=Ha(t,s);Dt(i,a)||(n.uniform1iv(this.addr,a),It(i,a));for(let r=0;r!==s;++r)t.setTextureCube(e[r]||Gc,a[r])}function zm(n,e,t){const i=this.cache,s=e.length,a=Ha(t,s);Dt(i,a)||(n.uniform1iv(this.addr,a),It(i,a));for(let r=0;r!==s;++r)t.setTexture2DArray(e[r]||kc,a[r])}function km(n){switch(n){case 5126:return Sm;case 35664:return ym;case 35665:return Em;case 35666:return bm;case 35674:return Tm;case 35675:return Am;case 35676:return wm;case 5124:case 35670:return Rm;case 35667:case 35671:return Cm;case 35668:case 35672:return Lm;case 35669:case 35673:return Pm;case 5125:return Dm;case 36294:return Im;case 36295:return Um;case 36296:return Nm;case 35678:case 36198:case 36298:case 36306:case 35682:return Om;case 35679:case 36299:case 36307:return Fm;case 35680:case 36300:case 36308:case 36293:return Bm;case 36289:case 36303:case 36311:case 36292:return zm}}class Hm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.setValue=Mm(t.type)}}class Gm{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=km(t.type)}}class Vm{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const s=this.seq;for(let a=0,r=s.length;a!==r;++a){const o=s[a];o.setValue(e,t[o.id],i)}}}const Ar=/(\w+)(\])?(\[|\.)?/g;function ql(n,e){n.seq.push(e),n.map[e.id]=e}function Wm(n,e,t){const i=n.name,s=i.length;for(Ar.lastIndex=0;;){const a=Ar.exec(i),r=Ar.lastIndex;let o=a[1];const l=a[2]==="]",c=a[3];if(l&&(o=o|0),c===void 0||c==="["&&r+2===s){ql(t,c===void 0?new Hm(o,n,e):new Gm(o,n,e));break}else{let d=t.map[o];d===void 0&&(d=new Vm(o),ql(t,d)),t=d}}}class Ra{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const a=e.getActiveUniform(t,s),r=e.getUniformLocation(t,a.name);Wm(a,r,this)}}setValue(e,t,i,s){const a=this.map[t];a!==void 0&&a.setValue(e,i,s)}setOptional(e,t,i){const s=t[i];s!==void 0&&this.setValue(e,i,s)}static upload(e,t,i,s){for(let a=0,r=t.length;a!==r;++a){const o=t[a],l=i[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,s)}}static seqWithValue(e,t){const i=[];for(let s=0,a=e.length;s!==a;++s){const r=e[s];r.id in t&&i.push(r)}return i}}function Yl(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}const Xm=37297;let qm=0;function Ym(n,e){const t=n.split(`
`),i=[],s=Math.max(e-6,0),a=Math.min(e+6,t.length);for(let r=s;r<a;r++){const o=r+1;i.push(`${o===e?">":" "} ${o}: ${t[r]}`)}return i.join(`
`)}const $l=new Ze;function $m(n){ot._getMatrix($l,ot.workingColorSpace,n);const e=`mat3( ${$l.elements.map(t=>t.toFixed(4))} )`;switch(ot.getTransfer(n)){case Pa:return[e,"LinearTransferOETF"];case ht:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function Kl(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),a=(n.getShaderInfoLog(e)||"").trim();if(i&&a==="")return"";const r=/ERROR: 0:(\d+)/.exec(a);if(r){const o=parseInt(r[1]);return t.toUpperCase()+`

`+a+`

`+Ym(n.getShaderSource(e),o)}else return a}function Km(n,e){const t=$m(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Zm(n,e){let t;switch(e){case Ph:t="Linear";break;case Dh:t="Reinhard";break;case Ih:t="Cineon";break;case fc:t="ACESFilmic";break;case Nh:t="AgX";break;case Oh:t="Neutral";break;case Uh:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sa=new F;function jm(){ot.getLuminanceCoefficients(Sa);const n=Sa.x.toFixed(4),e=Sa.y.toFixed(4),t=Sa.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Jm(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ws).join(`
`)}function Qm(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function eg(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const a=n.getActiveAttrib(e,s),r=a.name;let o=1;a.type===n.FLOAT_MAT2&&(o=2),a.type===n.FLOAT_MAT3&&(o=3),a.type===n.FLOAT_MAT4&&(o=4),t[r]={type:a.type,location:n.getAttribLocation(e,r),locationSize:o}}return t}function ws(n){return n!==""}function Zl(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function jl(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tg=/^[ \t]*#include +<([\w\d./]+)>/gm;function bo(n){return n.replace(tg,ig)}const ng=new Map;function ig(n,e){let t=Qe[e];if(t===void 0){const i=ng.get(e);if(i!==void 0)t=Qe[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return bo(t)}const sg=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Jl(n){return n.replace(sg,ag)}function ag(n,e,t,i){let s="";for(let a=parseInt(e);a<parseInt(t);a++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+a+" ]").replace(/UNROLLED_LOOP_INDEX/g,a);return s}function Ql(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function rg(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===uc?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===hh?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Xn&&(e="SHADOWMAP_TYPE_VSM"),e}function og(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case hs:case ds:e="ENVMAP_TYPE_CUBE";break;case za:e="ENVMAP_TYPE_CUBE_UV";break}return e}function lg(n){let e="ENVMAP_MODE_REFLECTION";return n.envMap&&n.envMapMode===ds&&(e="ENVMAP_MODE_REFRACTION"),e}function cg(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Co:e="ENVMAP_BLENDING_MULTIPLY";break;case Ch:e="ENVMAP_BLENDING_MIX";break;case Lh:e="ENVMAP_BLENDING_ADD";break}return e}function hg(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:i,maxMip:t}}function dg(n,e,t,i){const s=n.getContext(),a=t.defines;let r=t.vertexShader,o=t.fragmentShader;const l=rg(t),c=og(t),h=lg(t),d=cg(t),f=hg(t),p=Jm(t),g=Qm(a),x=s.createProgram();let m,u,R=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),m.length>0&&(m+=`
`),u=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(ws).join(`
`),u.length>0&&(u+=`
`)):(m=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ws).join(`
`),u=[Ql(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",f?"#define CUBEUV_TEXEL_WIDTH "+f.texelWidth:"",f?"#define CUBEUV_TEXEL_HEIGHT "+f.texelHeight:"",f?"#define CUBEUV_MAX_MIP "+f.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==fi?"#define TONE_MAPPING":"",t.toneMapping!==fi?Qe.tonemapping_pars_fragment:"",t.toneMapping!==fi?Zm("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Qe.colorspace_pars_fragment,Km("linearToOutputTexel",t.outputColorSpace),jm(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ws).join(`
`)),r=bo(r),r=Zl(r,t),r=jl(r,t),o=bo(o),o=Zl(o,t),o=jl(o,t),r=Jl(r),o=Jl(o),t.isRawShaderMaterial!==!0&&(R=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,u=["#define varying in",t.glslVersion===nl?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===nl?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+u);const w=R+m+r,y=R+u+o,A=Yl(s,s.VERTEX_SHADER,w),b=Yl(s,s.FRAGMENT_SHADER,y);s.attachShader(x,A),s.attachShader(x,b),t.index0AttributeName!==void 0?s.bindAttribLocation(x,0,t.index0AttributeName):t.morphTargets===!0&&s.bindAttribLocation(x,0,"position"),s.linkProgram(x);function L(P){if(n.debug.checkShaderErrors){const U=s.getProgramInfoLog(x)||"",H=s.getShaderInfoLog(A)||"",W=s.getShaderInfoLog(b)||"",K=U.trim(),G=H.trim(),ee=W.trim();let V=!0,ne=!0;if(s.getProgramParameter(x,s.LINK_STATUS)===!1)if(V=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,x,A,b);else{const fe=Kl(s,A,"vertex"),pe=Kl(s,b,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(x,s.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+K+`
`+fe+`
`+pe)}else K!==""?console.warn("THREE.WebGLProgram: Program Info Log:",K):(G===""||ee==="")&&(ne=!1);ne&&(P.diagnostics={runnable:V,programLog:K,vertexShader:{log:G,prefix:m},fragmentShader:{log:ee,prefix:u}})}s.deleteShader(A),s.deleteShader(b),D=new Ra(s,x),S=eg(s,x)}let D;this.getUniforms=function(){return D===void 0&&L(this),D};let S;this.getAttributes=function(){return S===void 0&&L(this),S};let E=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(x,Xm)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=qm++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=A,this.fragmentShader=b,this}let ug=0;class fg{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,s=this._getShaderStage(t),a=this._getShaderStage(i),r=this._getShaderCacheForMaterial(e);return r.has(s)===!1&&(r.add(s),s.usedTimes++),r.has(a)===!1&&(r.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new pg(e),t.set(e,i)),i}}class pg{constructor(e){this.id=ug++,this.code=e,this.usedTimes=0}}function mg(n,e,t,i,s,a,r){const o=new zo,l=new fg,c=new Set,h=[],d=s.logarithmicDepthBuffer,f=s.vertexTextures;let p=s.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(S){return c.add(S),S===0?"uv":`uv${S}`}function m(S,E,P,U,H){const W=U.fog,K=H.geometry,G=S.isMeshStandardMaterial?U.environment:null,ee=(S.isMeshStandardMaterial?t:e).get(S.envMap||G),V=ee&&ee.mapping===za?ee.image.height:null,ne=g[S.type];S.precision!==null&&(p=s.getMaxPrecision(S.precision),p!==S.precision&&console.warn("THREE.WebGLProgram.getParameters:",S.precision,"not supported, using",p,"instead."));const fe=K.morphAttributes.position||K.morphAttributes.normal||K.morphAttributes.color,pe=fe!==void 0?fe.length:0;let xe=0;K.morphAttributes.position!==void 0&&(xe=1),K.morphAttributes.normal!==void 0&&(xe=2),K.morphAttributes.color!==void 0&&(xe=3);let $e,Ye,ve,z;if(ne){const Xe=Ln[ne];$e=Xe.vertexShader,Ye=Xe.fragmentShader}else $e=S.vertexShader,Ye=S.fragmentShader,l.update(S),ve=l.getVertexShaderID(S),z=l.getFragmentShaderID(S);const Z=n.getRenderTarget(),he=n.state.buffers.depth.getReversed(),we=H.isInstancedMesh===!0,de=H.isBatchedMesh===!0,Ge=!!S.map,je=!!S.matcap,C=!!ee,Ne=!!S.aoMap,Se=!!S.lightMap,Re=!!S.bumpMap,ce=!!S.normalMap,Pe=!!S.displacementMap,ue=!!S.emissiveMap,ge=!!S.metalnessMap,Ve=!!S.roughnessMap,We=S.anisotropy>0,T=S.clearcoat>0,_=S.dispersion>0,N=S.iridescence>0,$=S.sheen>0,j=S.transmission>0,X=We&&!!S.anisotropyMap,Me=T&&!!S.clearcoatMap,ae=T&&!!S.clearcoatNormalMap,Ee=T&&!!S.clearcoatRoughnessMap,v=N&&!!S.iridescenceMap,Q=N&&!!S.iridescenceThicknessMap,oe=$&&!!S.sheenColorMap,De=$&&!!S.sheenRoughnessMap,be=!!S.specularMap,re=!!S.specularColorMap,Ie=!!S.specularIntensityMap,I=j&&!!S.transmissionMap,ie=j&&!!S.thicknessMap,se=!!S.gradientMap,Te=!!S.alphaMap,te=S.alphaTest>0,J=!!S.alphaHash,Ae=!!S.extensions;let Oe=fi;S.toneMapped&&(Z===null||Z.isXRRenderTarget===!0)&&(Oe=n.toneMapping);const Ke={shaderID:ne,shaderType:S.type,shaderName:S.name,vertexShader:$e,fragmentShader:Ye,defines:S.defines,customVertexShaderID:ve,customFragmentShaderID:z,isRawShaderMaterial:S.isRawShaderMaterial===!0,glslVersion:S.glslVersion,precision:p,batching:de,batchingColor:de&&H._colorsTexture!==null,instancing:we,instancingColor:we&&H.instanceColor!==null,instancingMorph:we&&H.morphTexture!==null,supportsVertexTextures:f,outputColorSpace:Z===null?n.outputColorSpace:Z.isXRRenderTarget===!0?Z.texture.colorSpace:us,alphaToCoverage:!!S.alphaToCoverage,map:Ge,matcap:je,envMap:C,envMapMode:C&&ee.mapping,envMapCubeUVHeight:V,aoMap:Ne,lightMap:Se,bumpMap:Re,normalMap:ce,displacementMap:f&&Pe,emissiveMap:ue,normalMapObjectSpace:ce&&S.normalMapType===kh,normalMapTangentSpace:ce&&S.normalMapType===Oo,metalnessMap:ge,roughnessMap:Ve,anisotropy:We,anisotropyMap:X,clearcoat:T,clearcoatMap:Me,clearcoatNormalMap:ae,clearcoatRoughnessMap:Ee,dispersion:_,iridescence:N,iridescenceMap:v,iridescenceThicknessMap:Q,sheen:$,sheenColorMap:oe,sheenRoughnessMap:De,specularMap:be,specularColorMap:re,specularIntensityMap:Ie,transmission:j,transmissionMap:I,thicknessMap:ie,gradientMap:se,opaque:S.transparent===!1&&S.blending===rs&&S.alphaToCoverage===!1,alphaMap:Te,alphaTest:te,alphaHash:J,combine:S.combine,mapUv:Ge&&x(S.map.channel),aoMapUv:Ne&&x(S.aoMap.channel),lightMapUv:Se&&x(S.lightMap.channel),bumpMapUv:Re&&x(S.bumpMap.channel),normalMapUv:ce&&x(S.normalMap.channel),displacementMapUv:Pe&&x(S.displacementMap.channel),emissiveMapUv:ue&&x(S.emissiveMap.channel),metalnessMapUv:ge&&x(S.metalnessMap.channel),roughnessMapUv:Ve&&x(S.roughnessMap.channel),anisotropyMapUv:X&&x(S.anisotropyMap.channel),clearcoatMapUv:Me&&x(S.clearcoatMap.channel),clearcoatNormalMapUv:ae&&x(S.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ee&&x(S.clearcoatRoughnessMap.channel),iridescenceMapUv:v&&x(S.iridescenceMap.channel),iridescenceThicknessMapUv:Q&&x(S.iridescenceThicknessMap.channel),sheenColorMapUv:oe&&x(S.sheenColorMap.channel),sheenRoughnessMapUv:De&&x(S.sheenRoughnessMap.channel),specularMapUv:be&&x(S.specularMap.channel),specularColorMapUv:re&&x(S.specularColorMap.channel),specularIntensityMapUv:Ie&&x(S.specularIntensityMap.channel),transmissionMapUv:I&&x(S.transmissionMap.channel),thicknessMapUv:ie&&x(S.thicknessMap.channel),alphaMapUv:Te&&x(S.alphaMap.channel),vertexTangents:!!K.attributes.tangent&&(ce||We),vertexColors:S.vertexColors,vertexAlphas:S.vertexColors===!0&&!!K.attributes.color&&K.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!K.attributes.uv&&(Ge||Te),fog:!!W,useFog:S.fog===!0,fogExp2:!!W&&W.isFogExp2,flatShading:S.flatShading===!0&&S.wireframe===!1,sizeAttenuation:S.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:he,skinning:H.isSkinnedMesh===!0,morphTargets:K.morphAttributes.position!==void 0,morphNormals:K.morphAttributes.normal!==void 0,morphColors:K.morphAttributes.color!==void 0,morphTargetsCount:pe,morphTextureStride:xe,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:S.dithering,shadowMapEnabled:n.shadowMap.enabled&&P.length>0,shadowMapType:n.shadowMap.type,toneMapping:Oe,decodeVideoTexture:Ge&&S.map.isVideoTexture===!0&&ot.getTransfer(S.map.colorSpace)===ht,decodeVideoTextureEmissive:ue&&S.emissiveMap.isVideoTexture===!0&&ot.getTransfer(S.emissiveMap.colorSpace)===ht,premultipliedAlpha:S.premultipliedAlpha,doubleSided:S.side===pn,flipSided:S.side===jt,useDepthPacking:S.depthPacking>=0,depthPacking:S.depthPacking||0,index0AttributeName:S.index0AttributeName,extensionClipCullDistance:Ae&&S.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Ae&&S.extensions.multiDraw===!0||de)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:S.customProgramCacheKey()};return Ke.vertexUv1s=c.has(1),Ke.vertexUv2s=c.has(2),Ke.vertexUv3s=c.has(3),c.clear(),Ke}function u(S){const E=[];if(S.shaderID?E.push(S.shaderID):(E.push(S.customVertexShaderID),E.push(S.customFragmentShaderID)),S.defines!==void 0)for(const P in S.defines)E.push(P),E.push(S.defines[P]);return S.isRawShaderMaterial===!1&&(R(E,S),w(E,S),E.push(n.outputColorSpace)),E.push(S.customProgramCacheKey),E.join()}function R(S,E){S.push(E.precision),S.push(E.outputColorSpace),S.push(E.envMapMode),S.push(E.envMapCubeUVHeight),S.push(E.mapUv),S.push(E.alphaMapUv),S.push(E.lightMapUv),S.push(E.aoMapUv),S.push(E.bumpMapUv),S.push(E.normalMapUv),S.push(E.displacementMapUv),S.push(E.emissiveMapUv),S.push(E.metalnessMapUv),S.push(E.roughnessMapUv),S.push(E.anisotropyMapUv),S.push(E.clearcoatMapUv),S.push(E.clearcoatNormalMapUv),S.push(E.clearcoatRoughnessMapUv),S.push(E.iridescenceMapUv),S.push(E.iridescenceThicknessMapUv),S.push(E.sheenColorMapUv),S.push(E.sheenRoughnessMapUv),S.push(E.specularMapUv),S.push(E.specularColorMapUv),S.push(E.specularIntensityMapUv),S.push(E.transmissionMapUv),S.push(E.thicknessMapUv),S.push(E.combine),S.push(E.fogExp2),S.push(E.sizeAttenuation),S.push(E.morphTargetsCount),S.push(E.morphAttributeCount),S.push(E.numDirLights),S.push(E.numPointLights),S.push(E.numSpotLights),S.push(E.numSpotLightMaps),S.push(E.numHemiLights),S.push(E.numRectAreaLights),S.push(E.numDirLightShadows),S.push(E.numPointLightShadows),S.push(E.numSpotLightShadows),S.push(E.numSpotLightShadowsWithMaps),S.push(E.numLightProbes),S.push(E.shadowMapType),S.push(E.toneMapping),S.push(E.numClippingPlanes),S.push(E.numClipIntersection),S.push(E.depthPacking)}function w(S,E){o.disableAll(),E.supportsVertexTextures&&o.enable(0),E.instancing&&o.enable(1),E.instancingColor&&o.enable(2),E.instancingMorph&&o.enable(3),E.matcap&&o.enable(4),E.envMap&&o.enable(5),E.normalMapObjectSpace&&o.enable(6),E.normalMapTangentSpace&&o.enable(7),E.clearcoat&&o.enable(8),E.iridescence&&o.enable(9),E.alphaTest&&o.enable(10),E.vertexColors&&o.enable(11),E.vertexAlphas&&o.enable(12),E.vertexUv1s&&o.enable(13),E.vertexUv2s&&o.enable(14),E.vertexUv3s&&o.enable(15),E.vertexTangents&&o.enable(16),E.anisotropy&&o.enable(17),E.alphaHash&&o.enable(18),E.batching&&o.enable(19),E.dispersion&&o.enable(20),E.batchingColor&&o.enable(21),E.gradientMap&&o.enable(22),S.push(o.mask),o.disableAll(),E.fog&&o.enable(0),E.useFog&&o.enable(1),E.flatShading&&o.enable(2),E.logarithmicDepthBuffer&&o.enable(3),E.reversedDepthBuffer&&o.enable(4),E.skinning&&o.enable(5),E.morphTargets&&o.enable(6),E.morphNormals&&o.enable(7),E.morphColors&&o.enable(8),E.premultipliedAlpha&&o.enable(9),E.shadowMapEnabled&&o.enable(10),E.doubleSided&&o.enable(11),E.flipSided&&o.enable(12),E.useDepthPacking&&o.enable(13),E.dithering&&o.enable(14),E.transmission&&o.enable(15),E.sheen&&o.enable(16),E.opaque&&o.enable(17),E.pointsUvs&&o.enable(18),E.decodeVideoTexture&&o.enable(19),E.decodeVideoTextureEmissive&&o.enable(20),E.alphaToCoverage&&o.enable(21),S.push(o.mask)}function y(S){const E=g[S.type];let P;if(E){const U=Ln[E];P=Ld.clone(U.uniforms)}else P=S.uniforms;return P}function A(S,E){let P;for(let U=0,H=h.length;U<H;U++){const W=h[U];if(W.cacheKey===E){P=W,++P.usedTimes;break}}return P===void 0&&(P=new dg(n,E,S,a),h.push(P)),P}function b(S){if(--S.usedTimes===0){const E=h.indexOf(S);h[E]=h[h.length-1],h.pop(),S.destroy()}}function L(S){l.remove(S)}function D(){l.dispose()}return{getParameters:m,getProgramCacheKey:u,getUniforms:y,acquireProgram:A,releaseProgram:b,releaseShaderCache:L,programs:h,dispose:D}}function gg(){let n=new WeakMap;function e(r){return n.has(r)}function t(r){let o=n.get(r);return o===void 0&&(o={},n.set(r,o)),o}function i(r){n.delete(r)}function s(r,o,l){n.get(r)[o]=l}function a(){n=new WeakMap}return{has:e,get:t,remove:i,update:s,dispose:a}}function vg(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function ec(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function tc(){const n=[];let e=0;const t=[],i=[],s=[];function a(){e=0,t.length=0,i.length=0,s.length=0}function r(d,f,p,g,x,m){let u=n[e];return u===void 0?(u={id:d.id,object:d,geometry:f,material:p,groupOrder:g,renderOrder:d.renderOrder,z:x,group:m},n[e]=u):(u.id=d.id,u.object=d,u.geometry=f,u.material=p,u.groupOrder=g,u.renderOrder=d.renderOrder,u.z=x,u.group=m),e++,u}function o(d,f,p,g,x,m){const u=r(d,f,p,g,x,m);p.transmission>0?i.push(u):p.transparent===!0?s.push(u):t.push(u)}function l(d,f,p,g,x,m){const u=r(d,f,p,g,x,m);p.transmission>0?i.unshift(u):p.transparent===!0?s.unshift(u):t.unshift(u)}function c(d,f){t.length>1&&t.sort(d||vg),i.length>1&&i.sort(f||ec),s.length>1&&s.sort(f||ec)}function h(){for(let d=e,f=n.length;d<f;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:s,init:a,push:o,unshift:l,finish:h,sort:c}}function _g(){let n=new WeakMap;function e(i,s){const a=n.get(i);let r;return a===void 0?(r=new tc,n.set(i,[r])):s>=a.length?(r=new tc,a.push(r)):r=a[s],r}function t(){n=new WeakMap}return{get:e,dispose:t}}function xg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new F,color:new it};break;case"SpotLight":t={position:new F,direction:new F,color:new it,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new F,color:new it,distance:0,decay:0};break;case"HemisphereLight":t={direction:new F,skyColor:new it,groundColor:new it};break;case"RectAreaLight":t={color:new it,position:new F,halfWidth:new F,halfHeight:new F};break}return n[e.id]=t,t}}}function Mg(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let Sg=0;function yg(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function Eg(n){const e=new xg,t=Mg(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new F);const s=new F,a=new Mt,r=new Mt;function o(c){let h=0,d=0,f=0;for(let S=0;S<9;S++)i.probe[S].set(0,0,0);let p=0,g=0,x=0,m=0,u=0,R=0,w=0,y=0,A=0,b=0,L=0;c.sort(yg);for(let S=0,E=c.length;S<E;S++){const P=c[S],U=P.color,H=P.intensity,W=P.distance,K=P.shadow&&P.shadow.map?P.shadow.map.texture:null;if(P.isAmbientLight)h+=U.r*H,d+=U.g*H,f+=U.b*H;else if(P.isLightProbe){for(let G=0;G<9;G++)i.probe[G].addScaledVector(P.sh.coefficients[G],H);L++}else if(P.isDirectionalLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),P.castShadow){const ee=P.shadow,V=t.get(P);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.directionalShadow[p]=V,i.directionalShadowMap[p]=K,i.directionalShadowMatrix[p]=P.shadow.matrix,R++}i.directional[p]=G,p++}else if(P.isSpotLight){const G=e.get(P);G.position.setFromMatrixPosition(P.matrixWorld),G.color.copy(U).multiplyScalar(H),G.distance=W,G.coneCos=Math.cos(P.angle),G.penumbraCos=Math.cos(P.angle*(1-P.penumbra)),G.decay=P.decay,i.spot[x]=G;const ee=P.shadow;if(P.map&&(i.spotLightMap[A]=P.map,A++,ee.updateMatrices(P),P.castShadow&&b++),i.spotLightMatrix[x]=ee.matrix,P.castShadow){const V=t.get(P);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,i.spotShadow[x]=V,i.spotShadowMap[x]=K,y++}x++}else if(P.isRectAreaLight){const G=e.get(P);G.color.copy(U).multiplyScalar(H),G.halfWidth.set(P.width*.5,0,0),G.halfHeight.set(0,P.height*.5,0),i.rectArea[m]=G,m++}else if(P.isPointLight){const G=e.get(P);if(G.color.copy(P.color).multiplyScalar(P.intensity),G.distance=P.distance,G.decay=P.decay,P.castShadow){const ee=P.shadow,V=t.get(P);V.shadowIntensity=ee.intensity,V.shadowBias=ee.bias,V.shadowNormalBias=ee.normalBias,V.shadowRadius=ee.radius,V.shadowMapSize=ee.mapSize,V.shadowCameraNear=ee.camera.near,V.shadowCameraFar=ee.camera.far,i.pointShadow[g]=V,i.pointShadowMap[g]=K,i.pointShadowMatrix[g]=P.shadow.matrix,w++}i.point[g]=G,g++}else if(P.isHemisphereLight){const G=e.get(P);G.skyColor.copy(P.color).multiplyScalar(H),G.groundColor.copy(P.groundColor).multiplyScalar(H),i.hemi[u]=G,u++}}m>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=ye.LTC_FLOAT_1,i.rectAreaLTC2=ye.LTC_FLOAT_2):(i.rectAreaLTC1=ye.LTC_HALF_1,i.rectAreaLTC2=ye.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=f;const D=i.hash;(D.directionalLength!==p||D.pointLength!==g||D.spotLength!==x||D.rectAreaLength!==m||D.hemiLength!==u||D.numDirectionalShadows!==R||D.numPointShadows!==w||D.numSpotShadows!==y||D.numSpotMaps!==A||D.numLightProbes!==L)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=u,i.directionalShadow.length=R,i.directionalShadowMap.length=R,i.pointShadow.length=w,i.pointShadowMap.length=w,i.spotShadow.length=y,i.spotShadowMap.length=y,i.directionalShadowMatrix.length=R,i.pointShadowMatrix.length=w,i.spotLightMatrix.length=y+A-b,i.spotLightMap.length=A,i.numSpotLightShadowsWithMaps=b,i.numLightProbes=L,D.directionalLength=p,D.pointLength=g,D.spotLength=x,D.rectAreaLength=m,D.hemiLength=u,D.numDirectionalShadows=R,D.numPointShadows=w,D.numSpotShadows=y,D.numSpotMaps=A,D.numLightProbes=L,i.version=Sg++)}function l(c,h){let d=0,f=0,p=0,g=0,x=0;const m=h.matrixWorldInverse;for(let u=0,R=c.length;u<R;u++){const w=c[u];if(w.isDirectionalLight){const y=i.directional[d];y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),d++}else if(w.isSpotLight){const y=i.spot[p];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),y.direction.setFromMatrixPosition(w.matrixWorld),s.setFromMatrixPosition(w.target.matrixWorld),y.direction.sub(s),y.direction.transformDirection(m),p++}else if(w.isRectAreaLight){const y=i.rectArea[g];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),r.identity(),a.copy(w.matrixWorld),a.premultiply(m),r.extractRotation(a),y.halfWidth.set(w.width*.5,0,0),y.halfHeight.set(0,w.height*.5,0),y.halfWidth.applyMatrix4(r),y.halfHeight.applyMatrix4(r),g++}else if(w.isPointLight){const y=i.point[f];y.position.setFromMatrixPosition(w.matrixWorld),y.position.applyMatrix4(m),f++}else if(w.isHemisphereLight){const y=i.hemi[x];y.direction.setFromMatrixPosition(w.matrixWorld),y.direction.transformDirection(m),x++}}}return{setup:o,setupView:l,state:i}}function nc(n){const e=new Eg(n),t=[],i=[];function s(h){c.camera=h,t.length=0,i.length=0}function a(h){t.push(h)}function r(h){i.push(h)}function o(){e.setup(t)}function l(h){e.setupView(t,h)}const c={lightsArray:t,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:o,setupLightsView:l,pushLight:a,pushShadow:r}}function bg(n){let e=new WeakMap;function t(s,a=0){const r=e.get(s);let o;return r===void 0?(o=new nc(n),e.set(s,[o])):a>=r.length?(o=new nc(n),r.push(o)):o=r[a],o}function i(){e=new WeakMap}return{get:t,dispose:i}}const Tg=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Ag=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function wg(n,e,t){let i=new ko;const s=new He,a=new He,r=new bt,o=new Vd({depthPacking:zh}),l=new Wd,c={},h=t.maxTextureSize,d={[Nn]:jt,[jt]:Nn,[pn]:pn},f=new Jn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:Tg,fragmentShader:Ag}),p=f.clone();p.defines.HORIZONTAL_PASS=1;const g=new wt;g.setAttribute("position",new bn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new kt(g,f),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=uc;let u=this.type;this.render=function(b,L,D){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||b.length===0)return;const S=n.getRenderTarget(),E=n.getActiveCubeFace(),P=n.getActiveMipmapLevel(),U=n.state;U.setBlending(ui),U.buffers.depth.getReversed()===!0?U.buffers.color.setClear(0,0,0,0):U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const H=u!==Xn&&this.type===Xn,W=u===Xn&&this.type!==Xn;for(let K=0,G=b.length;K<G;K++){const ee=b[K],V=ee.shadow;if(V===void 0){console.warn("THREE.WebGLShadowMap:",ee,"has no shadow.");continue}if(V.autoUpdate===!1&&V.needsUpdate===!1)continue;s.copy(V.mapSize);const ne=V.getFrameExtents();if(s.multiply(ne),a.copy(V.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(a.x=Math.floor(h/ne.x),s.x=a.x*ne.x,V.mapSize.x=a.x),s.y>h&&(a.y=Math.floor(h/ne.y),s.y=a.y*ne.y,V.mapSize.y=a.y)),V.map===null||H===!0||W===!0){const pe=this.type!==Xn?{minFilter:En,magFilter:En}:{};V.map!==null&&V.map.dispose(),V.map=new Fi(s.x,s.y,pe),V.map.texture.name=ee.name+".shadowMap",V.camera.updateProjectionMatrix()}n.setRenderTarget(V.map),n.clear();const fe=V.getViewportCount();for(let pe=0;pe<fe;pe++){const xe=V.getViewport(pe);r.set(a.x*xe.x,a.y*xe.y,a.x*xe.z,a.y*xe.w),U.viewport(r),V.updateMatrices(ee,pe),i=V.getFrustum(),y(L,D,V.camera,ee,this.type)}V.isPointLightShadow!==!0&&this.type===Xn&&R(V,D),V.needsUpdate=!1}u=this.type,m.needsUpdate=!1,n.setRenderTarget(S,E,P)};function R(b,L){const D=e.update(x);f.defines.VSM_SAMPLES!==b.blurSamples&&(f.defines.VSM_SAMPLES=b.blurSamples,p.defines.VSM_SAMPLES=b.blurSamples,f.needsUpdate=!0,p.needsUpdate=!0),b.mapPass===null&&(b.mapPass=new Fi(s.x,s.y)),f.uniforms.shadow_pass.value=b.map.texture,f.uniforms.resolution.value=b.mapSize,f.uniforms.radius.value=b.radius,n.setRenderTarget(b.mapPass),n.clear(),n.renderBufferDirect(L,null,D,f,x,null),p.uniforms.shadow_pass.value=b.mapPass.texture,p.uniforms.resolution.value=b.mapSize,p.uniforms.radius.value=b.radius,n.setRenderTarget(b.map),n.clear(),n.renderBufferDirect(L,null,D,p,x,null)}function w(b,L,D,S){let E=null;const P=D.isPointLight===!0?b.customDistanceMaterial:b.customDepthMaterial;if(P!==void 0)E=P;else if(E=D.isPointLight===!0?l:o,n.localClippingEnabled&&L.clipShadows===!0&&Array.isArray(L.clippingPlanes)&&L.clippingPlanes.length!==0||L.displacementMap&&L.displacementScale!==0||L.alphaMap&&L.alphaTest>0||L.map&&L.alphaTest>0||L.alphaToCoverage===!0){const U=E.uuid,H=L.uuid;let W=c[U];W===void 0&&(W={},c[U]=W);let K=W[H];K===void 0&&(K=E.clone(),W[H]=K,L.addEventListener("dispose",A)),E=K}if(E.visible=L.visible,E.wireframe=L.wireframe,S===Xn?E.side=L.shadowSide!==null?L.shadowSide:L.side:E.side=L.shadowSide!==null?L.shadowSide:d[L.side],E.alphaMap=L.alphaMap,E.alphaTest=L.alphaToCoverage===!0?.5:L.alphaTest,E.map=L.map,E.clipShadows=L.clipShadows,E.clippingPlanes=L.clippingPlanes,E.clipIntersection=L.clipIntersection,E.displacementMap=L.displacementMap,E.displacementScale=L.displacementScale,E.displacementBias=L.displacementBias,E.wireframeLinewidth=L.wireframeLinewidth,E.linewidth=L.linewidth,D.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const U=n.properties.get(E);U.light=D}return E}function y(b,L,D,S,E){if(b.visible===!1)return;if(b.layers.test(L.layers)&&(b.isMesh||b.isLine||b.isPoints)&&(b.castShadow||b.receiveShadow&&E===Xn)&&(!b.frustumCulled||i.intersectsObject(b))){b.modelViewMatrix.multiplyMatrices(D.matrixWorldInverse,b.matrixWorld);const H=e.update(b),W=b.material;if(Array.isArray(W)){const K=H.groups;for(let G=0,ee=K.length;G<ee;G++){const V=K[G],ne=W[V.materialIndex];if(ne&&ne.visible){const fe=w(b,ne,S,E);b.onBeforeShadow(n,b,L,D,H,fe,V),n.renderBufferDirect(D,null,H,fe,b,V),b.onAfterShadow(n,b,L,D,H,fe,V)}}}else if(W.visible){const K=w(b,W,S,E);b.onBeforeShadow(n,b,L,D,H,K,null),n.renderBufferDirect(D,null,H,K,b,null),b.onAfterShadow(n,b,L,D,H,K,null)}}const U=b.children;for(let H=0,W=U.length;H<W;H++)y(U[H],L,D,S,E)}function A(b){b.target.removeEventListener("dispose",A);for(const D in c){const S=c[D],E=b.target.uuid;E in S&&(S[E].dispose(),delete S[E])}}}const Rg={[Or]:Fr,[Br]:Hr,[zr]:Gr,[cs]:kr,[Fr]:Or,[Hr]:Br,[Gr]:zr,[kr]:cs};function Cg(n,e){function t(){let I=!1;const ie=new bt;let se=null;const Te=new bt(0,0,0,0);return{setMask:function(te){se!==te&&!I&&(n.colorMask(te,te,te,te),se=te)},setLocked:function(te){I=te},setClear:function(te,J,Ae,Oe,Ke){Ke===!0&&(te*=Oe,J*=Oe,Ae*=Oe),ie.set(te,J,Ae,Oe),Te.equals(ie)===!1&&(n.clearColor(te,J,Ae,Oe),Te.copy(ie))},reset:function(){I=!1,se=null,Te.set(-1,0,0,0)}}}function i(){let I=!1,ie=!1,se=null,Te=null,te=null;return{setReversed:function(J){if(ie!==J){const Ae=e.get("EXT_clip_control");J?Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.ZERO_TO_ONE_EXT):Ae.clipControlEXT(Ae.LOWER_LEFT_EXT,Ae.NEGATIVE_ONE_TO_ONE_EXT),ie=J;const Oe=te;te=null,this.setClear(Oe)}},getReversed:function(){return ie},setTest:function(J){J?Z(n.DEPTH_TEST):he(n.DEPTH_TEST)},setMask:function(J){se!==J&&!I&&(n.depthMask(J),se=J)},setFunc:function(J){if(ie&&(J=Rg[J]),Te!==J){switch(J){case Or:n.depthFunc(n.NEVER);break;case Fr:n.depthFunc(n.ALWAYS);break;case Br:n.depthFunc(n.LESS);break;case cs:n.depthFunc(n.LEQUAL);break;case zr:n.depthFunc(n.EQUAL);break;case kr:n.depthFunc(n.GEQUAL);break;case Hr:n.depthFunc(n.GREATER);break;case Gr:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Te=J}},setLocked:function(J){I=J},setClear:function(J){te!==J&&(ie&&(J=1-J),n.clearDepth(J),te=J)},reset:function(){I=!1,se=null,Te=null,te=null,ie=!1}}}function s(){let I=!1,ie=null,se=null,Te=null,te=null,J=null,Ae=null,Oe=null,Ke=null;return{setTest:function(Xe){I||(Xe?Z(n.STENCIL_TEST):he(n.STENCIL_TEST))},setMask:function(Xe){ie!==Xe&&!I&&(n.stencilMask(Xe),ie=Xe)},setFunc:function(Xe,yt,Et){(se!==Xe||Te!==yt||te!==Et)&&(n.stencilFunc(Xe,yt,Et),se=Xe,Te=yt,te=Et)},setOp:function(Xe,yt,Et){(J!==Xe||Ae!==yt||Oe!==Et)&&(n.stencilOp(Xe,yt,Et),J=Xe,Ae=yt,Oe=Et)},setLocked:function(Xe){I=Xe},setClear:function(Xe){Ke!==Xe&&(n.clearStencil(Xe),Ke=Xe)},reset:function(){I=!1,ie=null,se=null,Te=null,te=null,J=null,Ae=null,Oe=null,Ke=null}}}const a=new t,r=new i,o=new s,l=new WeakMap,c=new WeakMap;let h={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,R=null,w=null,y=null,A=null,b=null,L=new it(0,0,0),D=0,S=!1,E=null,P=null,U=null,H=null,W=null;const K=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let G=!1,ee=0;const V=n.getParameter(n.VERSION);V.indexOf("WebGL")!==-1?(ee=parseFloat(/^WebGL (\d)/.exec(V)[1]),G=ee>=1):V.indexOf("OpenGL ES")!==-1&&(ee=parseFloat(/^OpenGL ES (\d)/.exec(V)[1]),G=ee>=2);let ne=null,fe={};const pe=n.getParameter(n.SCISSOR_BOX),xe=n.getParameter(n.VIEWPORT),$e=new bt().fromArray(pe),Ye=new bt().fromArray(xe);function ve(I,ie,se,Te){const te=new Uint8Array(4),J=n.createTexture();n.bindTexture(I,J),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Ae=0;Ae<se;Ae++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(ie,0,n.RGBA,1,1,Te,0,n.RGBA,n.UNSIGNED_BYTE,te):n.texImage2D(ie+Ae,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,te);return J}const z={};z[n.TEXTURE_2D]=ve(n.TEXTURE_2D,n.TEXTURE_2D,1),z[n.TEXTURE_CUBE_MAP]=ve(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),z[n.TEXTURE_2D_ARRAY]=ve(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),z[n.TEXTURE_3D]=ve(n.TEXTURE_3D,n.TEXTURE_3D,1,1),a.setClear(0,0,0,1),r.setClear(1),o.setClear(0),Z(n.DEPTH_TEST),r.setFunc(cs),Re(!1),ce(jo),Z(n.CULL_FACE),Ne(ui);function Z(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function he(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function we(I,ie){return d[I]!==ie?(n.bindFramebuffer(I,ie),d[I]=ie,I===n.DRAW_FRAMEBUFFER&&(d[n.FRAMEBUFFER]=ie),I===n.FRAMEBUFFER&&(d[n.DRAW_FRAMEBUFFER]=ie),!0):!1}function de(I,ie){let se=p,Te=!1;if(I){se=f.get(ie),se===void 0&&(se=[],f.set(ie,se));const te=I.textures;if(se.length!==te.length||se[0]!==n.COLOR_ATTACHMENT0){for(let J=0,Ae=te.length;J<Ae;J++)se[J]=n.COLOR_ATTACHMENT0+J;se.length=te.length,Te=!0}}else se[0]!==n.BACK&&(se[0]=n.BACK,Te=!0);Te&&n.drawBuffers(se)}function Ge(I){return g!==I?(n.useProgram(I),g=I,!0):!1}const je={[Ti]:n.FUNC_ADD,[uh]:n.FUNC_SUBTRACT,[fh]:n.FUNC_REVERSE_SUBTRACT};je[ph]=n.MIN,je[mh]=n.MAX;const C={[gh]:n.ZERO,[vh]:n.ONE,[_h]:n.SRC_COLOR,[Ur]:n.SRC_ALPHA,[bh]:n.SRC_ALPHA_SATURATE,[yh]:n.DST_COLOR,[Mh]:n.DST_ALPHA,[xh]:n.ONE_MINUS_SRC_COLOR,[Nr]:n.ONE_MINUS_SRC_ALPHA,[Eh]:n.ONE_MINUS_DST_COLOR,[Sh]:n.ONE_MINUS_DST_ALPHA,[Th]:n.CONSTANT_COLOR,[Ah]:n.ONE_MINUS_CONSTANT_COLOR,[wh]:n.CONSTANT_ALPHA,[Rh]:n.ONE_MINUS_CONSTANT_ALPHA};function Ne(I,ie,se,Te,te,J,Ae,Oe,Ke,Xe){if(I===ui){x===!0&&(he(n.BLEND),x=!1);return}if(x===!1&&(Z(n.BLEND),x=!0),I!==dh){if(I!==m||Xe!==S){if((u!==Ti||y!==Ti)&&(n.blendEquation(n.FUNC_ADD),u=Ti,y=Ti),Xe)switch(I){case rs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFunc(n.ONE,n.ONE);break;case Jo:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Qo:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case rs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Ir:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Jo:console.error("THREE.WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Qo:console.error("THREE.WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}R=null,w=null,A=null,b=null,L.set(0,0,0),D=0,m=I,S=Xe}return}te=te||ie,J=J||se,Ae=Ae||Te,(ie!==u||te!==y)&&(n.blendEquationSeparate(je[ie],je[te]),u=ie,y=te),(se!==R||Te!==w||J!==A||Ae!==b)&&(n.blendFuncSeparate(C[se],C[Te],C[J],C[Ae]),R=se,w=Te,A=J,b=Ae),(Oe.equals(L)===!1||Ke!==D)&&(n.blendColor(Oe.r,Oe.g,Oe.b,Ke),L.copy(Oe),D=Ke),m=I,S=!1}function Se(I,ie){I.side===pn?he(n.CULL_FACE):Z(n.CULL_FACE);let se=I.side===jt;ie&&(se=!se),Re(se),I.blending===rs&&I.transparent===!1?Ne(ui):Ne(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),r.setFunc(I.depthFunc),r.setTest(I.depthTest),r.setMask(I.depthWrite),a.setMask(I.colorWrite);const Te=I.stencilWrite;o.setTest(Te),Te&&(o.setMask(I.stencilWriteMask),o.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),o.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?Z(n.SAMPLE_ALPHA_TO_COVERAGE):he(n.SAMPLE_ALPHA_TO_COVERAGE)}function Re(I){E!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),E=I)}function ce(I){I!==lh?(Z(n.CULL_FACE),I!==P&&(I===jo?n.cullFace(n.BACK):I===ch?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):he(n.CULL_FACE),P=I}function Pe(I){I!==U&&(G&&n.lineWidth(I),U=I)}function ue(I,ie,se){I?(Z(n.POLYGON_OFFSET_FILL),(H!==ie||W!==se)&&(n.polygonOffset(ie,se),H=ie,W=se)):he(n.POLYGON_OFFSET_FILL)}function ge(I){I?Z(n.SCISSOR_TEST):he(n.SCISSOR_TEST)}function Ve(I){I===void 0&&(I=n.TEXTURE0+K-1),ne!==I&&(n.activeTexture(I),ne=I)}function We(I,ie,se){se===void 0&&(ne===null?se=n.TEXTURE0+K-1:se=ne);let Te=fe[se];Te===void 0&&(Te={type:void 0,texture:void 0},fe[se]=Te),(Te.type!==I||Te.texture!==ie)&&(ne!==se&&(n.activeTexture(se),ne=se),n.bindTexture(I,ie||z[I]),Te.type=I,Te.texture=ie)}function T(){const I=fe[ne];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function _(){try{n.compressedTexImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function N(){try{n.compressedTexImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function $(){try{n.texSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function j(){try{n.texSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function X(){try{n.compressedTexSubImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Me(){try{n.compressedTexSubImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texStorage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ee(){try{n.texStorage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function v(){try{n.texImage2D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Q(){try{n.texImage3D(...arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(I){$e.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),$e.copy(I))}function De(I){Ye.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),Ye.copy(I))}function be(I,ie){let se=c.get(ie);se===void 0&&(se=new WeakMap,c.set(ie,se));let Te=se.get(I);Te===void 0&&(Te=n.getUniformBlockIndex(ie,I.name),se.set(I,Te))}function re(I,ie){const Te=c.get(ie).get(I);l.get(ie)!==Te&&(n.uniformBlockBinding(ie,Te,I.__bindingPointIndex),l.set(ie,Te))}function Ie(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),r.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},ne=null,fe={},d={},f=new WeakMap,p=[],g=null,x=!1,m=null,u=null,R=null,w=null,y=null,A=null,b=null,L=new it(0,0,0),D=0,S=!1,E=null,P=null,U=null,H=null,W=null,$e.set(0,0,n.canvas.width,n.canvas.height),Ye.set(0,0,n.canvas.width,n.canvas.height),a.reset(),r.reset(),o.reset()}return{buffers:{color:a,depth:r,stencil:o},enable:Z,disable:he,bindFramebuffer:we,drawBuffers:de,useProgram:Ge,setBlending:Ne,setMaterial:Se,setFlipSided:Re,setCullFace:ce,setLineWidth:Pe,setPolygonOffset:ue,setScissorTest:ge,activeTexture:Ve,bindTexture:We,unbindTexture:T,compressedTexImage2D:_,compressedTexImage3D:N,texImage2D:v,texImage3D:Q,updateUBOMapping:be,uniformBlockBinding:re,texStorage2D:ae,texStorage3D:Ee,texSubImage2D:$,texSubImage3D:j,compressedTexSubImage2D:X,compressedTexSubImage3D:Me,scissor:oe,viewport:De,reset:Ie}}function Lg(n,e,t,i,s,a,r){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new He,h=new WeakMap;let d;const f=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(T,_){return p?new OffscreenCanvas(T,_):Fs("canvas")}function x(T,_,N){let $=1;const j=We(T);if((j.width>N||j.height>N)&&($=N/Math.max(j.width,j.height)),$<1)if(typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&T instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&T instanceof ImageBitmap||typeof VideoFrame<"u"&&T instanceof VideoFrame){const X=Math.floor($*j.width),Me=Math.floor($*j.height);d===void 0&&(d=g(X,Me));const ae=_?g(X,Me):d;return ae.width=X,ae.height=Me,ae.getContext("2d").drawImage(T,0,0,X,Me),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+j.width+"x"+j.height+") to ("+X+"x"+Me+")."),ae}else return"data"in T&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+j.width+"x"+j.height+")."),T;return T}function m(T){return T.generateMipmaps}function u(T){n.generateMipmap(T)}function R(T){return T.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:T.isWebGL3DRenderTarget?n.TEXTURE_3D:T.isWebGLArrayRenderTarget||T.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(T,_,N,$,j=!1){if(T!==null){if(n[T]!==void 0)return n[T];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+T+"'")}let X=_;if(_===n.RED&&(N===n.FLOAT&&(X=n.R32F),N===n.HALF_FLOAT&&(X=n.R16F),N===n.UNSIGNED_BYTE&&(X=n.R8)),_===n.RED_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.R8UI),N===n.UNSIGNED_SHORT&&(X=n.R16UI),N===n.UNSIGNED_INT&&(X=n.R32UI),N===n.BYTE&&(X=n.R8I),N===n.SHORT&&(X=n.R16I),N===n.INT&&(X=n.R32I)),_===n.RG&&(N===n.FLOAT&&(X=n.RG32F),N===n.HALF_FLOAT&&(X=n.RG16F),N===n.UNSIGNED_BYTE&&(X=n.RG8)),_===n.RG_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RG8UI),N===n.UNSIGNED_SHORT&&(X=n.RG16UI),N===n.UNSIGNED_INT&&(X=n.RG32UI),N===n.BYTE&&(X=n.RG8I),N===n.SHORT&&(X=n.RG16I),N===n.INT&&(X=n.RG32I)),_===n.RGB_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGB8UI),N===n.UNSIGNED_SHORT&&(X=n.RGB16UI),N===n.UNSIGNED_INT&&(X=n.RGB32UI),N===n.BYTE&&(X=n.RGB8I),N===n.SHORT&&(X=n.RGB16I),N===n.INT&&(X=n.RGB32I)),_===n.RGBA_INTEGER&&(N===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),N===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),N===n.UNSIGNED_INT&&(X=n.RGBA32UI),N===n.BYTE&&(X=n.RGBA8I),N===n.SHORT&&(X=n.RGBA16I),N===n.INT&&(X=n.RGBA32I)),_===n.RGB&&(N===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),N===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),_===n.RGBA){const Me=j?Pa:ot.getTransfer($);N===n.FLOAT&&(X=n.RGBA32F),N===n.HALF_FLOAT&&(X=n.RGBA16F),N===n.UNSIGNED_BYTE&&(X=Me===ht?n.SRGB8_ALPHA8:n.RGBA8),N===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),N===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&e.get("EXT_color_buffer_float"),X}function y(T,_){let N;return T?_===null||_===Ni||_===Is?N=n.DEPTH24_STENCIL8:_===$n?N=n.DEPTH32F_STENCIL8:_===Ds&&(N=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===Ni||_===Is?N=n.DEPTH_COMPONENT24:_===$n?N=n.DEPTH_COMPONENT32F:_===Ds&&(N=n.DEPTH_COMPONENT16),N}function A(T,_){return m(T)===!0||T.isFramebufferTexture&&T.minFilter!==En&&T.minFilter!==Pn?Math.log2(Math.max(_.width,_.height))+1:T.mipmaps!==void 0&&T.mipmaps.length>0?T.mipmaps.length:T.isCompressedTexture&&Array.isArray(T.image)?_.mipmaps.length:1}function b(T){const _=T.target;_.removeEventListener("dispose",b),D(_),_.isVideoTexture&&h.delete(_)}function L(T){const _=T.target;_.removeEventListener("dispose",L),E(_)}function D(T){const _=i.get(T);if(_.__webglInit===void 0)return;const N=T.source,$=f.get(N);if($){const j=$[_.__cacheKey];j.usedTimes--,j.usedTimes===0&&S(T),Object.keys($).length===0&&f.delete(N)}i.remove(T)}function S(T){const _=i.get(T);n.deleteTexture(_.__webglTexture);const N=T.source,$=f.get(N);delete $[_.__cacheKey],r.memory.textures--}function E(T){const _=i.get(T);if(T.depthTexture&&(T.depthTexture.dispose(),i.remove(T.depthTexture)),T.isWebGLCubeRenderTarget)for(let $=0;$<6;$++){if(Array.isArray(_.__webglFramebuffer[$]))for(let j=0;j<_.__webglFramebuffer[$].length;j++)n.deleteFramebuffer(_.__webglFramebuffer[$][j]);else n.deleteFramebuffer(_.__webglFramebuffer[$]);_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer[$])}else{if(Array.isArray(_.__webglFramebuffer))for(let $=0;$<_.__webglFramebuffer.length;$++)n.deleteFramebuffer(_.__webglFramebuffer[$]);else n.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&n.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&n.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let $=0;$<_.__webglColorRenderbuffer.length;$++)_.__webglColorRenderbuffer[$]&&n.deleteRenderbuffer(_.__webglColorRenderbuffer[$]);_.__webglDepthRenderbuffer&&n.deleteRenderbuffer(_.__webglDepthRenderbuffer)}const N=T.textures;for(let $=0,j=N.length;$<j;$++){const X=i.get(N[$]);X.__webglTexture&&(n.deleteTexture(X.__webglTexture),r.memory.textures--),i.remove(N[$])}i.remove(T)}let P=0;function U(){P=0}function H(){const T=P;return T>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+T+" texture units while this GPU supports only "+s.maxTextures),P+=1,T}function W(T){const _=[];return _.push(T.wrapS),_.push(T.wrapT),_.push(T.wrapR||0),_.push(T.magFilter),_.push(T.minFilter),_.push(T.anisotropy),_.push(T.internalFormat),_.push(T.format),_.push(T.type),_.push(T.generateMipmaps),_.push(T.premultiplyAlpha),_.push(T.flipY),_.push(T.unpackAlignment),_.push(T.colorSpace),_.join()}function K(T,_){const N=i.get(T);if(T.isVideoTexture&&ge(T),T.isRenderTargetTexture===!1&&T.isExternalTexture!==!0&&T.version>0&&N.__version!==T.version){const $=T.image;if($===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if($.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{z(N,T,_);return}}else T.isExternalTexture&&(N.__webglTexture=T.sourceTexture?T.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,N.__webglTexture,n.TEXTURE0+_)}function G(T,_){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){z(N,T,_);return}t.bindTexture(n.TEXTURE_2D_ARRAY,N.__webglTexture,n.TEXTURE0+_)}function ee(T,_){const N=i.get(T);if(T.isRenderTargetTexture===!1&&T.version>0&&N.__version!==T.version){z(N,T,_);return}t.bindTexture(n.TEXTURE_3D,N.__webglTexture,n.TEXTURE0+_)}function V(T,_){const N=i.get(T);if(T.version>0&&N.__version!==T.version){Z(N,T,_);return}t.bindTexture(n.TEXTURE_CUBE_MAP,N.__webglTexture,n.TEXTURE0+_)}const ne={[Xr]:n.REPEAT,[Ci]:n.CLAMP_TO_EDGE,[qr]:n.MIRRORED_REPEAT},fe={[En]:n.NEAREST,[Fh]:n.NEAREST_MIPMAP_NEAREST,[js]:n.NEAREST_MIPMAP_LINEAR,[Pn]:n.LINEAR,[$a]:n.LINEAR_MIPMAP_NEAREST,[Li]:n.LINEAR_MIPMAP_LINEAR},pe={[Hh]:n.NEVER,[Yh]:n.ALWAYS,[Gh]:n.LESS,[Ec]:n.LEQUAL,[Vh]:n.EQUAL,[qh]:n.GEQUAL,[Wh]:n.GREATER,[Xh]:n.NOTEQUAL};function xe(T,_){if(_.type===$n&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Pn||_.magFilter===$a||_.magFilter===js||_.magFilter===Li||_.minFilter===Pn||_.minFilter===$a||_.minFilter===js||_.minFilter===Li)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(T,n.TEXTURE_WRAP_S,ne[_.wrapS]),n.texParameteri(T,n.TEXTURE_WRAP_T,ne[_.wrapT]),(T===n.TEXTURE_3D||T===n.TEXTURE_2D_ARRAY)&&n.texParameteri(T,n.TEXTURE_WRAP_R,ne[_.wrapR]),n.texParameteri(T,n.TEXTURE_MAG_FILTER,fe[_.magFilter]),n.texParameteri(T,n.TEXTURE_MIN_FILTER,fe[_.minFilter]),_.compareFunction&&(n.texParameteri(T,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(T,n.TEXTURE_COMPARE_FUNC,pe[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===En||_.minFilter!==js&&_.minFilter!==Li||_.type===$n&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||i.get(_).__currentAnisotropy){const N=e.get("EXT_texture_filter_anisotropic");n.texParameterf(T,N.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,s.getMaxAnisotropy())),i.get(_).__currentAnisotropy=_.anisotropy}}}function $e(T,_){let N=!1;T.__webglInit===void 0&&(T.__webglInit=!0,_.addEventListener("dispose",b));const $=_.source;let j=f.get($);j===void 0&&(j={},f.set($,j));const X=W(_);if(X!==T.__cacheKey){j[X]===void 0&&(j[X]={texture:n.createTexture(),usedTimes:0},r.memory.textures++,N=!0),j[X].usedTimes++;const Me=j[T.__cacheKey];Me!==void 0&&(j[T.__cacheKey].usedTimes--,Me.usedTimes===0&&S(_)),T.__cacheKey=X,T.__webglTexture=j[X].texture}return N}function Ye(T,_,N){return Math.floor(Math.floor(T/N)/_)}function ve(T,_,N,$){const X=T.updateRanges;if(X.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,_.width,_.height,N,$,_.data);else{X.sort((Q,oe)=>Q.start-oe.start);let Me=0;for(let Q=1;Q<X.length;Q++){const oe=X[Me],De=X[Q],be=oe.start+oe.count,re=Ye(De.start,_.width,4),Ie=Ye(oe.start,_.width,4);De.start<=be+1&&re===Ie&&Ye(De.start+De.count-1,_.width,4)===re?oe.count=Math.max(oe.count,De.start+De.count-oe.start):(++Me,X[Me]=De)}X.length=Me+1;const ae=n.getParameter(n.UNPACK_ROW_LENGTH),Ee=n.getParameter(n.UNPACK_SKIP_PIXELS),v=n.getParameter(n.UNPACK_SKIP_ROWS);n.pixelStorei(n.UNPACK_ROW_LENGTH,_.width);for(let Q=0,oe=X.length;Q<oe;Q++){const De=X[Q],be=Math.floor(De.start/4),re=Math.ceil(De.count/4),Ie=be%_.width,I=Math.floor(be/_.width),ie=re,se=1;n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ie),n.pixelStorei(n.UNPACK_SKIP_ROWS,I),t.texSubImage2D(n.TEXTURE_2D,0,Ie,I,ie,se,N,$,_.data)}T.clearUpdateRanges(),n.pixelStorei(n.UNPACK_ROW_LENGTH,ae),n.pixelStorei(n.UNPACK_SKIP_PIXELS,Ee),n.pixelStorei(n.UNPACK_SKIP_ROWS,v)}}function z(T,_,N){let $=n.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&($=n.TEXTURE_2D_ARRAY),_.isData3DTexture&&($=n.TEXTURE_3D);const j=$e(T,_),X=_.source;t.bindTexture($,T.__webglTexture,n.TEXTURE0+N);const Me=i.get(X);if(X.version!==Me.__version||j===!0){t.activeTexture(n.TEXTURE0+N);const ae=ot.getPrimaries(ot.workingColorSpace),Ee=_.colorSpace===hi?null:ot.getPrimaries(_.colorSpace),v=_.colorSpace===hi||ae===Ee?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,v);let Q=x(_.image,!1,s.maxTextureSize);Q=Ve(_,Q);const oe=a.convert(_.format,_.colorSpace),De=a.convert(_.type);let be=w(_.internalFormat,oe,De,_.colorSpace,_.isVideoTexture);xe($,_);let re;const Ie=_.mipmaps,I=_.isVideoTexture!==!0,ie=Me.__version===void 0||j===!0,se=X.dataReady,Te=A(_,Q);if(_.isDepthTexture)be=y(_.format===Ns,_.type),ie&&(I?t.texStorage2D(n.TEXTURE_2D,1,be,Q.width,Q.height):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,oe,De,null));else if(_.isDataTexture)if(Ie.length>0){I&&ie&&t.texStorage2D(n.TEXTURE_2D,Te,be,Ie[0].width,Ie[0].height);for(let te=0,J=Ie.length;te<J;te++)re=Ie[te],I?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,re.width,re.height,oe,De,re.data):t.texImage2D(n.TEXTURE_2D,te,be,re.width,re.height,0,oe,De,re.data);_.generateMipmaps=!1}else I?(ie&&t.texStorage2D(n.TEXTURE_2D,Te,be,Q.width,Q.height),se&&ve(_,Q,oe,De)):t.texImage2D(n.TEXTURE_2D,0,be,Q.width,Q.height,0,oe,De,Q.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){I&&ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,be,Ie[0].width,Ie[0].height,Q.depth);for(let te=0,J=Ie.length;te<J;te++)if(re=Ie[te],_.format!==yn)if(oe!==null)if(I){if(se)if(_.layerUpdates.size>0){const Ae=Dl(re.width,re.height,_.format,_.type);for(const Oe of _.layerUpdates){const Ke=re.data.subarray(Oe*Ae/re.data.BYTES_PER_ELEMENT,(Oe+1)*Ae/re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,Oe,re.width,re.height,1,oe,Ke)}_.clearLayerUpdates()}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,re.width,re.height,Q.depth,oe,re.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,te,be,re.width,re.height,Q.depth,0,re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?se&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,te,0,0,0,re.width,re.height,Q.depth,oe,De,re.data):t.texImage3D(n.TEXTURE_2D_ARRAY,te,be,re.width,re.height,Q.depth,0,oe,De,re.data)}else{I&&ie&&t.texStorage2D(n.TEXTURE_2D,Te,be,Ie[0].width,Ie[0].height);for(let te=0,J=Ie.length;te<J;te++)re=Ie[te],_.format!==yn?oe!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_2D,te,0,0,re.width,re.height,oe,re.data):t.compressedTexImage2D(n.TEXTURE_2D,te,be,re.width,re.height,0,re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,re.width,re.height,oe,De,re.data):t.texImage2D(n.TEXTURE_2D,te,be,re.width,re.height,0,oe,De,re.data)}else if(_.isDataArrayTexture)if(I){if(ie&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Te,be,Q.width,Q.height,Q.depth),se)if(_.layerUpdates.size>0){const te=Dl(Q.width,Q.height,_.format,_.type);for(const J of _.layerUpdates){const Ae=Q.data.subarray(J*te/Q.data.BYTES_PER_ELEMENT,(J+1)*te/Q.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,J,Q.width,Q.height,1,oe,De,Ae)}_.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,Q.width,Q.height,Q.depth,oe,De,Q.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,be,Q.width,Q.height,Q.depth,0,oe,De,Q.data);else if(_.isData3DTexture)I?(ie&&t.texStorage3D(n.TEXTURE_3D,Te,be,Q.width,Q.height,Q.depth),se&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,Q.width,Q.height,Q.depth,oe,De,Q.data)):t.texImage3D(n.TEXTURE_3D,0,be,Q.width,Q.height,Q.depth,0,oe,De,Q.data);else if(_.isFramebufferTexture){if(ie)if(I)t.texStorage2D(n.TEXTURE_2D,Te,be,Q.width,Q.height);else{let te=Q.width,J=Q.height;for(let Ae=0;Ae<Te;Ae++)t.texImage2D(n.TEXTURE_2D,Ae,be,te,J,0,oe,De,null),te>>=1,J>>=1}}else if(Ie.length>0){if(I&&ie){const te=We(Ie[0]);t.texStorage2D(n.TEXTURE_2D,Te,be,te.width,te.height)}for(let te=0,J=Ie.length;te<J;te++)re=Ie[te],I?se&&t.texSubImage2D(n.TEXTURE_2D,te,0,0,oe,De,re):t.texImage2D(n.TEXTURE_2D,te,be,oe,De,re);_.generateMipmaps=!1}else if(I){if(ie){const te=We(Q);t.texStorage2D(n.TEXTURE_2D,Te,be,te.width,te.height)}se&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,oe,De,Q)}else t.texImage2D(n.TEXTURE_2D,0,be,oe,De,Q);m(_)&&u($),Me.__version=X.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function Z(T,_,N){if(_.image.length!==6)return;const $=$e(T,_),j=_.source;t.bindTexture(n.TEXTURE_CUBE_MAP,T.__webglTexture,n.TEXTURE0+N);const X=i.get(j);if(j.version!==X.__version||$===!0){t.activeTexture(n.TEXTURE0+N);const Me=ot.getPrimaries(ot.workingColorSpace),ae=_.colorSpace===hi?null:ot.getPrimaries(_.colorSpace),Ee=_.colorSpace===hi||Me===ae?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,_.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,_.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ee);const v=_.isCompressedTexture||_.image[0].isCompressedTexture,Q=_.image[0]&&_.image[0].isDataTexture,oe=[];for(let J=0;J<6;J++)!v&&!Q?oe[J]=x(_.image[J],!0,s.maxCubemapSize):oe[J]=Q?_.image[J].image:_.image[J],oe[J]=Ve(_,oe[J]);const De=oe[0],be=a.convert(_.format,_.colorSpace),re=a.convert(_.type),Ie=w(_.internalFormat,be,re,_.colorSpace),I=_.isVideoTexture!==!0,ie=X.__version===void 0||$===!0,se=j.dataReady;let Te=A(_,De);xe(n.TEXTURE_CUBE_MAP,_);let te;if(v){I&&ie&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ie,De.width,De.height);for(let J=0;J<6;J++){te=oe[J].mipmaps;for(let Ae=0;Ae<te.length;Ae++){const Oe=te[Ae];_.format!==yn?be!==null?I?se&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Oe.width,Oe.height,be,Oe.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Ie,Oe.width,Oe.height,0,Oe.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,0,0,Oe.width,Oe.height,be,re,Oe.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae,Ie,Oe.width,Oe.height,0,be,re,Oe.data)}}}else{if(te=_.mipmaps,I&&ie){te.length>0&&Te++;const J=We(oe[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Te,Ie,J.width,J.height)}for(let J=0;J<6;J++)if(Q){I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,oe[J].width,oe[J].height,be,re,oe[J].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ie,oe[J].width,oe[J].height,0,be,re,oe[J].data);for(let Ae=0;Ae<te.length;Ae++){const Ke=te[Ae].image[J].image;I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,Ke.width,Ke.height,be,re,Ke.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Ie,Ke.width,Ke.height,0,be,re,Ke.data)}}else{I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,0,0,be,re,oe[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,0,Ie,be,re,oe[J]);for(let Ae=0;Ae<te.length;Ae++){const Oe=te[Ae];I?se&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,0,0,be,re,Oe.image[J]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+J,Ae+1,Ie,be,re,Oe.image[J])}}}m(_)&&u(n.TEXTURE_CUBE_MAP),X.__version=j.version,_.onUpdate&&_.onUpdate(_)}T.__version=_.version}function he(T,_,N,$,j,X){const Me=a.convert(N.format,N.colorSpace),ae=a.convert(N.type),Ee=w(N.internalFormat,Me,ae,N.colorSpace),v=i.get(_),Q=i.get(N);if(Q.__renderTarget=_,!v.__hasExternalTextures){const oe=Math.max(1,_.width>>X),De=Math.max(1,_.height>>X);j===n.TEXTURE_3D||j===n.TEXTURE_2D_ARRAY?t.texImage3D(j,X,Ee,oe,De,_.depth,0,Me,ae,null):t.texImage2D(j,X,Ee,oe,De,0,Me,ae,null)}t.bindFramebuffer(n.FRAMEBUFFER,T),ue(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,$,j,Q.__webglTexture,0,Pe(_)):(j===n.TEXTURE_2D||j>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&j<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,$,j,Q.__webglTexture,X),t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(T,_,N){if(n.bindRenderbuffer(n.RENDERBUFFER,T),_.depthBuffer){const $=_.depthTexture,j=$&&$.isDepthTexture?$.type:null,X=y(_.stencilBuffer,j),Me=_.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ae=Pe(_);ue(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,X,_.width,_.height):N?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,X,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,X,_.width,_.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Me,n.RENDERBUFFER,T)}else{const $=_.textures;for(let j=0;j<$.length;j++){const X=$[j],Me=a.convert(X.format,X.colorSpace),ae=a.convert(X.type),Ee=w(X.internalFormat,Me,ae,X.colorSpace),v=Pe(_);N&&ue(_)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,v,Ee,_.width,_.height):ue(_)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,v,Ee,_.width,_.height):n.renderbufferStorage(n.RENDERBUFFER,Ee,_.width,_.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function de(T,_){if(_&&_.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,T),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const $=i.get(_.depthTexture);$.__renderTarget=_,(!$.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),K(_.depthTexture,0);const j=$.__webglTexture,X=Pe(_);if(_.depthTexture.format===Us)ue(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,j,0);else if(_.depthTexture.format===Ns)ue(_)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0,X):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,j,0);else throw new Error("Unknown depthTexture format")}function Ge(T){const _=i.get(T),N=T.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==T.depthTexture){const $=T.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),$){const j=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,$.removeEventListener("dispose",j)};$.addEventListener("dispose",j),_.__depthDisposeCallback=j}_.__boundDepthTexture=$}if(T.depthTexture&&!_.__autoAllocateDepthBuffer){if(N)throw new Error("target.depthTexture not supported in Cube render targets");const $=T.texture.mipmaps;$&&$.length>0?de(_.__webglFramebuffer[0],T):de(_.__webglFramebuffer,T)}else if(N){_.__webglDepthbuffer=[];for(let $=0;$<6;$++)if(t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[$]),_.__webglDepthbuffer[$]===void 0)_.__webglDepthbuffer[$]=n.createRenderbuffer(),we(_.__webglDepthbuffer[$],T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer[$];n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}else{const $=T.texture.mipmaps;if($&&$.length>0?t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=n.createRenderbuffer(),we(_.__webglDepthbuffer,T,!1);else{const j=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,X=_.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,X),n.framebufferRenderbuffer(n.FRAMEBUFFER,j,n.RENDERBUFFER,X)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function je(T,_,N){const $=i.get(T);_!==void 0&&he($.__webglFramebuffer,T,T.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),N!==void 0&&Ge(T)}function C(T){const _=T.texture,N=i.get(T),$=i.get(_);T.addEventListener("dispose",L);const j=T.textures,X=T.isWebGLCubeRenderTarget===!0,Me=j.length>1;if(Me||($.__webglTexture===void 0&&($.__webglTexture=n.createTexture()),$.__version=_.version,r.memory.textures++),X){N.__webglFramebuffer=[];for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer[ae]=[];for(let Ee=0;Ee<_.mipmaps.length;Ee++)N.__webglFramebuffer[ae][Ee]=n.createFramebuffer()}else N.__webglFramebuffer[ae]=n.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){N.__webglFramebuffer=[];for(let ae=0;ae<_.mipmaps.length;ae++)N.__webglFramebuffer[ae]=n.createFramebuffer()}else N.__webglFramebuffer=n.createFramebuffer();if(Me)for(let ae=0,Ee=j.length;ae<Ee;ae++){const v=i.get(j[ae]);v.__webglTexture===void 0&&(v.__webglTexture=n.createTexture(),r.memory.textures++)}if(T.samples>0&&ue(T)===!1){N.__webglMultisampledFramebuffer=n.createFramebuffer(),N.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,N.__webglMultisampledFramebuffer);for(let ae=0;ae<j.length;ae++){const Ee=j[ae];N.__webglColorRenderbuffer[ae]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,N.__webglColorRenderbuffer[ae]);const v=a.convert(Ee.format,Ee.colorSpace),Q=a.convert(Ee.type),oe=w(Ee.internalFormat,v,Q,Ee.colorSpace,T.isXRRenderTarget===!0),De=Pe(T);n.renderbufferStorageMultisample(n.RENDERBUFFER,De,oe,T.width,T.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ae,n.RENDERBUFFER,N.__webglColorRenderbuffer[ae])}n.bindRenderbuffer(n.RENDERBUFFER,null),T.depthBuffer&&(N.__webglDepthRenderbuffer=n.createRenderbuffer(),we(N.__webglDepthRenderbuffer,T,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(X){t.bindTexture(n.TEXTURE_CUBE_MAP,$.__webglTexture),xe(n.TEXTURE_CUBE_MAP,_);for(let ae=0;ae<6;ae++)if(_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)he(N.__webglFramebuffer[ae][Ee],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,Ee);else he(N.__webglFramebuffer[ae],T,_,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ae,0);m(_)&&u(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let ae=0,Ee=j.length;ae<Ee;ae++){const v=j[ae],Q=i.get(v);let oe=n.TEXTURE_2D;(T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(oe=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(oe,Q.__webglTexture),xe(oe,v),he(N.__webglFramebuffer,T,v,n.COLOR_ATTACHMENT0+ae,oe,0),m(v)&&u(oe)}t.unbindTexture()}else{let ae=n.TEXTURE_2D;if((T.isWebGL3DRenderTarget||T.isWebGLArrayRenderTarget)&&(ae=T.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ae,$.__webglTexture),xe(ae,_),_.mipmaps&&_.mipmaps.length>0)for(let Ee=0;Ee<_.mipmaps.length;Ee++)he(N.__webglFramebuffer[Ee],T,_,n.COLOR_ATTACHMENT0,ae,Ee);else he(N.__webglFramebuffer,T,_,n.COLOR_ATTACHMENT0,ae,0);m(_)&&u(ae),t.unbindTexture()}T.depthBuffer&&Ge(T)}function Ne(T){const _=T.textures;for(let N=0,$=_.length;N<$;N++){const j=_[N];if(m(j)){const X=R(T),Me=i.get(j).__webglTexture;t.bindTexture(X,Me),u(X),t.unbindTexture()}}}const Se=[],Re=[];function ce(T){if(T.samples>0){if(ue(T)===!1){const _=T.textures,N=T.width,$=T.height;let j=n.COLOR_BUFFER_BIT;const X=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=i.get(T),ae=_.length>1;if(ae)for(let v=0;v<_.length;v++)t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+v,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+v,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);const Ee=T.texture.mipmaps;Ee&&Ee.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let v=0;v<_.length;v++){if(T.resolveDepthBuffer&&(T.depthBuffer&&(j|=n.DEPTH_BUFFER_BIT),T.stencilBuffer&&T.resolveStencilBuffer&&(j|=n.STENCIL_BUFFER_BIT)),ae){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Me.__webglColorRenderbuffer[v]);const Q=i.get(_[v]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Q,0)}n.blitFramebuffer(0,0,N,$,0,0,N,$,j,n.NEAREST),l===!0&&(Se.length=0,Re.length=0,Se.push(n.COLOR_ATTACHMENT0+v),T.depthBuffer&&T.resolveDepthBuffer===!1&&(Se.push(X),Re.push(X),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Re)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Se))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ae)for(let v=0;v<_.length;v++){t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+v,n.RENDERBUFFER,Me.__webglColorRenderbuffer[v]);const Q=i.get(_[v]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Me.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+v,n.TEXTURE_2D,Q,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(T.depthBuffer&&T.resolveDepthBuffer===!1&&l){const _=T.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[_])}}}function Pe(T){return Math.min(s.maxSamples,T.samples)}function ue(T){const _=i.get(T);return T.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function ge(T){const _=r.render.frame;h.get(T)!==_&&(h.set(T,_),T.update())}function Ve(T,_){const N=T.colorSpace,$=T.format,j=T.type;return T.isCompressedTexture===!0||T.isVideoTexture===!0||N!==us&&N!==hi&&(ot.getTransfer(N)===ht?($!==yn||j!==On)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",N)),_}function We(T){return typeof HTMLImageElement<"u"&&T instanceof HTMLImageElement?(c.width=T.naturalWidth||T.width,c.height=T.naturalHeight||T.height):typeof VideoFrame<"u"&&T instanceof VideoFrame?(c.width=T.displayWidth,c.height=T.displayHeight):(c.width=T.width,c.height=T.height),c}this.allocateTextureUnit=H,this.resetTextureUnits=U,this.setTexture2D=K,this.setTexture2DArray=G,this.setTexture3D=ee,this.setTextureCube=V,this.rebindTextures=je,this.setupRenderTarget=C,this.updateRenderTargetMipmap=Ne,this.updateMultisampleRenderTarget=ce,this.setupDepthRenderbuffer=Ge,this.setupFrameBufferTexture=he,this.useMultisampledRTT=ue}function Pg(n,e){function t(i,s=hi){let a;const r=ot.getTransfer(s);if(i===On)return n.UNSIGNED_BYTE;if(i===Po)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Do)return n.UNSIGNED_SHORT_5_5_5_1;if(i===vc)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===_c)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===mc)return n.BYTE;if(i===gc)return n.SHORT;if(i===Ds)return n.UNSIGNED_SHORT;if(i===Lo)return n.INT;if(i===Ni)return n.UNSIGNED_INT;if(i===$n)return n.FLOAT;if(i===Gs)return n.HALF_FLOAT;if(i===xc)return n.ALPHA;if(i===Mc)return n.RGB;if(i===yn)return n.RGBA;if(i===Us)return n.DEPTH_COMPONENT;if(i===Ns)return n.DEPTH_STENCIL;if(i===Sc)return n.RED;if(i===Io)return n.RED_INTEGER;if(i===yc)return n.RG;if(i===Uo)return n.RG_INTEGER;if(i===No)return n.RGBA_INTEGER;if(i===ba||i===Ta||i===Aa||i===wa)if(r===ht)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(i===ba)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Ta)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Aa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===wa)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(i===ba)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Ta)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Aa)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===wa)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Yr||i===$r||i===Kr||i===Zr)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(i===Yr)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===$r)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===Kr)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Zr)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===jr||i===Jr||i===Qr)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(i===jr||i===Jr)return r===ht?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(i===Qr)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===eo||i===to||i===no||i===io||i===so||i===ao||i===ro||i===oo||i===lo||i===co||i===ho||i===uo||i===fo||i===po)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(i===eo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===to)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===no)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===io)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===so)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===ao)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===ro)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===oo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===lo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===co)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ho)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===uo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===fo)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===po)return r===ht?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===mo||i===go||i===vo)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(i===mo)return r===ht?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===go)return a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===vo)return a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===_o||i===xo||i===Mo||i===So)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(i===_o)return a.COMPRESSED_RED_RGTC1_EXT;if(i===xo)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Mo)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===So)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Is?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:t}}const Dg=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Ig=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Ug{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const i=new Nc(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,i=new Jn({vertexShader:Dg,fragmentShader:Ig,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new kt(new ka(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Ng extends zi{constructor(e,t){super();const i=this;let s=null,a=1,r=null,o="local-floor",l=1,c=null,h=null,d=null,f=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new Ug,u={},R=t.getContextAttributes();let w=null,y=null;const A=[],b=[],L=new He;let D=null;const S=new fn;S.viewport=new bt;const E=new fn;E.viewport=new bt;const P=[S,E],U=new Qd;let H=null,W=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(z){let Z=A[z];return Z===void 0&&(Z=new mr,A[z]=Z),Z.getTargetRaySpace()},this.getControllerGrip=function(z){let Z=A[z];return Z===void 0&&(Z=new mr,A[z]=Z),Z.getGripSpace()},this.getHand=function(z){let Z=A[z];return Z===void 0&&(Z=new mr,A[z]=Z),Z.getHandSpace()};function K(z){const Z=b.indexOf(z.inputSource);if(Z===-1)return;const he=A[Z];he!==void 0&&(he.update(z.inputSource,z.frame,c||r),he.dispatchEvent({type:z.type,data:z.inputSource}))}function G(){s.removeEventListener("select",K),s.removeEventListener("selectstart",K),s.removeEventListener("selectend",K),s.removeEventListener("squeeze",K),s.removeEventListener("squeezestart",K),s.removeEventListener("squeezeend",K),s.removeEventListener("end",G),s.removeEventListener("inputsourceschange",ee);for(let z=0;z<A.length;z++){const Z=b[z];Z!==null&&(b[z]=null,A[z].disconnect(Z))}H=null,W=null,m.reset();for(const z in u)delete u[z];e.setRenderTarget(w),p=null,f=null,d=null,s=null,y=null,ve.stop(),i.isPresenting=!1,e.setPixelRatio(D),e.setSize(L.width,L.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(z){a=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(z){o=z,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||r},this.setReferenceSpace=function(z){c=z},this.getBaseLayer=function(){return f!==null?f:p},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(s,t)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(z){if(s=z,s!==null){if(w=e.getRenderTarget(),s.addEventListener("select",K),s.addEventListener("selectstart",K),s.addEventListener("selectend",K),s.addEventListener("squeeze",K),s.addEventListener("squeezestart",K),s.addEventListener("squeezeend",K),s.addEventListener("end",G),s.addEventListener("inputsourceschange",ee),R.xrCompatible!==!0&&await t.makeXRCompatible(),D=e.getPixelRatio(),e.getSize(L),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let he=null,we=null,de=null;R.depth&&(de=R.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,he=R.stencil?Ns:Us,we=R.stencil?Is:Ni);const Ge={colorFormat:t.RGBA8,depthFormat:de,scaleFactor:a};d=this.getBinding(),f=d.createProjectionLayer(Ge),s.updateRenderState({layers:[f]}),e.setPixelRatio(1),e.setSize(f.textureWidth,f.textureHeight,!1),y=new Fi(f.textureWidth,f.textureHeight,{format:yn,type:On,depthTexture:new Uc(f.textureWidth,f.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,he),stencilBuffer:R.stencil,colorSpace:e.outputColorSpace,samples:R.antialias?4:0,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1})}else{const he={antialias:R.antialias,alpha:!0,depth:R.depth,stencil:R.stencil,framebufferScaleFactor:a};p=new XRWebGLLayer(s,t,he),s.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),y=new Fi(p.framebufferWidth,p.framebufferHeight,{format:yn,type:On,colorSpace:e.outputColorSpace,stencilBuffer:R.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,r=await s.requestReferenceSpace(o),ve.setContext(s),ve.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function ee(z){for(let Z=0;Z<z.removed.length;Z++){const he=z.removed[Z],we=b.indexOf(he);we>=0&&(b[we]=null,A[we].disconnect(he))}for(let Z=0;Z<z.added.length;Z++){const he=z.added[Z];let we=b.indexOf(he);if(we===-1){for(let Ge=0;Ge<A.length;Ge++)if(Ge>=b.length){b.push(he),we=Ge;break}else if(b[Ge]===null){b[Ge]=he,we=Ge;break}if(we===-1)break}const de=A[we];de&&de.connect(he)}}const V=new F,ne=new F;function fe(z,Z,he){V.setFromMatrixPosition(Z.matrixWorld),ne.setFromMatrixPosition(he.matrixWorld);const we=V.distanceTo(ne),de=Z.projectionMatrix.elements,Ge=he.projectionMatrix.elements,je=de[14]/(de[10]-1),C=de[14]/(de[10]+1),Ne=(de[9]+1)/de[5],Se=(de[9]-1)/de[5],Re=(de[8]-1)/de[0],ce=(Ge[8]+1)/Ge[0],Pe=je*Re,ue=je*ce,ge=we/(-Re+ce),Ve=ge*-Re;if(Z.matrixWorld.decompose(z.position,z.quaternion,z.scale),z.translateX(Ve),z.translateZ(ge),z.matrixWorld.compose(z.position,z.quaternion,z.scale),z.matrixWorldInverse.copy(z.matrixWorld).invert(),de[10]===-1)z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse);else{const We=je+ge,T=C+ge,_=Pe-Ve,N=ue+(we-Ve),$=Ne*C/T*We,j=Se*C/T*We;z.projectionMatrix.makePerspective(_,N,$,j,We,T),z.projectionMatrixInverse.copy(z.projectionMatrix).invert()}}function pe(z,Z){Z===null?z.matrixWorld.copy(z.matrix):z.matrixWorld.multiplyMatrices(Z.matrixWorld,z.matrix),z.matrixWorldInverse.copy(z.matrixWorld).invert()}this.updateCamera=function(z){if(s===null)return;let Z=z.near,he=z.far;m.texture!==null&&(m.depthNear>0&&(Z=m.depthNear),m.depthFar>0&&(he=m.depthFar)),U.near=E.near=S.near=Z,U.far=E.far=S.far=he,(H!==U.near||W!==U.far)&&(s.updateRenderState({depthNear:U.near,depthFar:U.far}),H=U.near,W=U.far),U.layers.mask=z.layers.mask|6,S.layers.mask=U.layers.mask&3,E.layers.mask=U.layers.mask&5;const we=z.parent,de=U.cameras;pe(U,we);for(let Ge=0;Ge<de.length;Ge++)pe(de[Ge],we);de.length===2?fe(U,S,E):U.projectionMatrix.copy(S.projectionMatrix),xe(z,U,we)};function xe(z,Z,he){he===null?z.matrix.copy(Z.matrixWorld):(z.matrix.copy(he.matrixWorld),z.matrix.invert(),z.matrix.multiply(Z.matrixWorld)),z.matrix.decompose(z.position,z.quaternion,z.scale),z.updateMatrixWorld(!0),z.projectionMatrix.copy(Z.projectionMatrix),z.projectionMatrixInverse.copy(Z.projectionMatrixInverse),z.isPerspectiveCamera&&(z.fov=Os*2*Math.atan(1/z.projectionMatrix.elements[5]),z.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(f===null&&p===null))return l},this.setFoveation=function(z){l=z,f!==null&&(f.fixedFoveation=z),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=z)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(z){return u[z]};let $e=null;function Ye(z,Z){if(h=Z.getViewerPose(c||r),g=Z,h!==null){const he=h.views;p!==null&&(e.setRenderTargetFramebuffer(y,p.framebuffer),e.setRenderTarget(y));let we=!1;he.length!==U.cameras.length&&(U.cameras.length=0,we=!0);for(let C=0;C<he.length;C++){const Ne=he[C];let Se=null;if(p!==null)Se=p.getViewport(Ne);else{const ce=d.getViewSubImage(f,Ne);Se=ce.viewport,C===0&&(e.setRenderTargetTextures(y,ce.colorTexture,ce.depthStencilTexture),e.setRenderTarget(y))}let Re=P[C];Re===void 0&&(Re=new fn,Re.layers.enable(C),Re.viewport=new bt,P[C]=Re),Re.matrix.fromArray(Ne.transform.matrix),Re.matrix.decompose(Re.position,Re.quaternion,Re.scale),Re.projectionMatrix.fromArray(Ne.projectionMatrix),Re.projectionMatrixInverse.copy(Re.projectionMatrix).invert(),Re.viewport.set(Se.x,Se.y,Se.width,Se.height),C===0&&(U.matrix.copy(Re.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),we===!0&&U.cameras.push(Re)}const de=s.enabledFeatures;if(de&&de.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&x){d=i.getBinding();const C=d.getDepthInformation(he[0]);C&&C.isValid&&C.texture&&m.init(C,s.renderState)}if(de&&de.includes("camera-access")&&x){e.state.unbindTexture(),d=i.getBinding();for(let C=0;C<he.length;C++){const Ne=he[C].camera;if(Ne){let Se=u[Ne];Se||(Se=new Nc,u[Ne]=Se);const Re=d.getCameraImage(Ne);Se.sourceTexture=Re}}}}for(let he=0;he<A.length;he++){const we=b[he],de=A[he];we!==null&&de!==void 0&&de.update(we,Z,c||r)}$e&&$e(z,Z),Z.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:Z}),g=null}const ve=new Bc;ve.setAnimationLoop(Ye),this.setAnimationLoop=function(z){$e=z},this.dispose=function(){}}}const Ei=new Tn,Og=new Mt;function Fg(n,e){function t(m,u){m.matrixAutoUpdate===!0&&m.updateMatrix(),u.value.copy(m.matrix)}function i(m,u){u.color.getRGB(m.fogColor.value,Cc(n)),u.isFog?(m.fogNear.value=u.near,m.fogFar.value=u.far):u.isFogExp2&&(m.fogDensity.value=u.density)}function s(m,u,R,w,y){u.isMeshBasicMaterial||u.isMeshLambertMaterial?a(m,u):u.isMeshToonMaterial?(a(m,u),d(m,u)):u.isMeshPhongMaterial?(a(m,u),h(m,u)):u.isMeshStandardMaterial?(a(m,u),f(m,u),u.isMeshPhysicalMaterial&&p(m,u,y)):u.isMeshMatcapMaterial?(a(m,u),g(m,u)):u.isMeshDepthMaterial?a(m,u):u.isMeshDistanceMaterial?(a(m,u),x(m,u)):u.isMeshNormalMaterial?a(m,u):u.isLineBasicMaterial?(r(m,u),u.isLineDashedMaterial&&o(m,u)):u.isPointsMaterial?l(m,u,R,w):u.isSpriteMaterial?c(m,u):u.isShadowMaterial?(m.color.value.copy(u.color),m.opacity.value=u.opacity):u.isShaderMaterial&&(u.uniformsNeedUpdate=!1)}function a(m,u){m.opacity.value=u.opacity,u.color&&m.diffuse.value.copy(u.color),u.emissive&&m.emissive.value.copy(u.emissive).multiplyScalar(u.emissiveIntensity),u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.bumpMap&&(m.bumpMap.value=u.bumpMap,t(u.bumpMap,m.bumpMapTransform),m.bumpScale.value=u.bumpScale,u.side===jt&&(m.bumpScale.value*=-1)),u.normalMap&&(m.normalMap.value=u.normalMap,t(u.normalMap,m.normalMapTransform),m.normalScale.value.copy(u.normalScale),u.side===jt&&m.normalScale.value.negate()),u.displacementMap&&(m.displacementMap.value=u.displacementMap,t(u.displacementMap,m.displacementMapTransform),m.displacementScale.value=u.displacementScale,m.displacementBias.value=u.displacementBias),u.emissiveMap&&(m.emissiveMap.value=u.emissiveMap,t(u.emissiveMap,m.emissiveMapTransform)),u.specularMap&&(m.specularMap.value=u.specularMap,t(u.specularMap,m.specularMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest);const R=e.get(u),w=R.envMap,y=R.envMapRotation;w&&(m.envMap.value=w,Ei.copy(y),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,w.isCubeTexture&&w.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),m.envMapRotation.value.setFromMatrix4(Og.makeRotationFromEuler(Ei)),m.flipEnvMap.value=w.isCubeTexture&&w.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=u.reflectivity,m.ior.value=u.ior,m.refractionRatio.value=u.refractionRatio),u.lightMap&&(m.lightMap.value=u.lightMap,m.lightMapIntensity.value=u.lightMapIntensity,t(u.lightMap,m.lightMapTransform)),u.aoMap&&(m.aoMap.value=u.aoMap,m.aoMapIntensity.value=u.aoMapIntensity,t(u.aoMap,m.aoMapTransform))}function r(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform))}function o(m,u){m.dashSize.value=u.dashSize,m.totalSize.value=u.dashSize+u.gapSize,m.scale.value=u.scale}function l(m,u,R,w){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.size.value=u.size*R,m.scale.value=w*.5,u.map&&(m.map.value=u.map,t(u.map,m.uvTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function c(m,u){m.diffuse.value.copy(u.color),m.opacity.value=u.opacity,m.rotation.value=u.rotation,u.map&&(m.map.value=u.map,t(u.map,m.mapTransform)),u.alphaMap&&(m.alphaMap.value=u.alphaMap,t(u.alphaMap,m.alphaMapTransform)),u.alphaTest>0&&(m.alphaTest.value=u.alphaTest)}function h(m,u){m.specular.value.copy(u.specular),m.shininess.value=Math.max(u.shininess,1e-4)}function d(m,u){u.gradientMap&&(m.gradientMap.value=u.gradientMap)}function f(m,u){m.metalness.value=u.metalness,u.metalnessMap&&(m.metalnessMap.value=u.metalnessMap,t(u.metalnessMap,m.metalnessMapTransform)),m.roughness.value=u.roughness,u.roughnessMap&&(m.roughnessMap.value=u.roughnessMap,t(u.roughnessMap,m.roughnessMapTransform)),u.envMap&&(m.envMapIntensity.value=u.envMapIntensity)}function p(m,u,R){m.ior.value=u.ior,u.sheen>0&&(m.sheenColor.value.copy(u.sheenColor).multiplyScalar(u.sheen),m.sheenRoughness.value=u.sheenRoughness,u.sheenColorMap&&(m.sheenColorMap.value=u.sheenColorMap,t(u.sheenColorMap,m.sheenColorMapTransform)),u.sheenRoughnessMap&&(m.sheenRoughnessMap.value=u.sheenRoughnessMap,t(u.sheenRoughnessMap,m.sheenRoughnessMapTransform))),u.clearcoat>0&&(m.clearcoat.value=u.clearcoat,m.clearcoatRoughness.value=u.clearcoatRoughness,u.clearcoatMap&&(m.clearcoatMap.value=u.clearcoatMap,t(u.clearcoatMap,m.clearcoatMapTransform)),u.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=u.clearcoatRoughnessMap,t(u.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),u.clearcoatNormalMap&&(m.clearcoatNormalMap.value=u.clearcoatNormalMap,t(u.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(u.clearcoatNormalScale),u.side===jt&&m.clearcoatNormalScale.value.negate())),u.dispersion>0&&(m.dispersion.value=u.dispersion),u.iridescence>0&&(m.iridescence.value=u.iridescence,m.iridescenceIOR.value=u.iridescenceIOR,m.iridescenceThicknessMinimum.value=u.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=u.iridescenceThicknessRange[1],u.iridescenceMap&&(m.iridescenceMap.value=u.iridescenceMap,t(u.iridescenceMap,m.iridescenceMapTransform)),u.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=u.iridescenceThicknessMap,t(u.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),u.transmission>0&&(m.transmission.value=u.transmission,m.transmissionSamplerMap.value=R.texture,m.transmissionSamplerSize.value.set(R.width,R.height),u.transmissionMap&&(m.transmissionMap.value=u.transmissionMap,t(u.transmissionMap,m.transmissionMapTransform)),m.thickness.value=u.thickness,u.thicknessMap&&(m.thicknessMap.value=u.thicknessMap,t(u.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=u.attenuationDistance,m.attenuationColor.value.copy(u.attenuationColor)),u.anisotropy>0&&(m.anisotropyVector.value.set(u.anisotropy*Math.cos(u.anisotropyRotation),u.anisotropy*Math.sin(u.anisotropyRotation)),u.anisotropyMap&&(m.anisotropyMap.value=u.anisotropyMap,t(u.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=u.specularIntensity,m.specularColor.value.copy(u.specularColor),u.specularColorMap&&(m.specularColorMap.value=u.specularColorMap,t(u.specularColorMap,m.specularColorMapTransform)),u.specularIntensityMap&&(m.specularIntensityMap.value=u.specularIntensityMap,t(u.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,u){u.matcap&&(m.matcap.value=u.matcap)}function x(m,u){const R=e.get(u).light;m.referencePosition.value.setFromMatrixPosition(R.matrixWorld),m.nearDistance.value=R.shadow.camera.near,m.farDistance.value=R.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Bg(n,e,t,i){let s={},a={},r=[];const o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(R,w){const y=w.program;i.uniformBlockBinding(R,y)}function c(R,w){let y=s[R.id];y===void 0&&(g(R),y=h(R),s[R.id]=y,R.addEventListener("dispose",m));const A=w.program;i.updateUBOMapping(R,A);const b=e.render.frame;a[R.id]!==b&&(f(R),a[R.id]=b)}function h(R){const w=d();R.__bindingPointIndex=w;const y=n.createBuffer(),A=R.__size,b=R.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,A,b),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,w,y),y}function d(){for(let R=0;R<o;R++)if(r.indexOf(R)===-1)return r.push(R),R;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function f(R){const w=s[R.id],y=R.uniforms,A=R.__cache;n.bindBuffer(n.UNIFORM_BUFFER,w);for(let b=0,L=y.length;b<L;b++){const D=Array.isArray(y[b])?y[b]:[y[b]];for(let S=0,E=D.length;S<E;S++){const P=D[S];if(p(P,b,S,A)===!0){const U=P.__offset,H=Array.isArray(P.value)?P.value:[P.value];let W=0;for(let K=0;K<H.length;K++){const G=H[K],ee=x(G);typeof G=="number"||typeof G=="boolean"?(P.__data[0]=G,n.bufferSubData(n.UNIFORM_BUFFER,U+W,P.__data)):G.isMatrix3?(P.__data[0]=G.elements[0],P.__data[1]=G.elements[1],P.__data[2]=G.elements[2],P.__data[3]=0,P.__data[4]=G.elements[3],P.__data[5]=G.elements[4],P.__data[6]=G.elements[5],P.__data[7]=0,P.__data[8]=G.elements[6],P.__data[9]=G.elements[7],P.__data[10]=G.elements[8],P.__data[11]=0):(G.toArray(P.__data,W),W+=ee.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,U,P.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(R,w,y,A){const b=R.value,L=w+"_"+y;if(A[L]===void 0)return typeof b=="number"||typeof b=="boolean"?A[L]=b:A[L]=b.clone(),!0;{const D=A[L];if(typeof b=="number"||typeof b=="boolean"){if(D!==b)return A[L]=b,!0}else if(D.equals(b)===!1)return D.copy(b),!0}return!1}function g(R){const w=R.uniforms;let y=0;const A=16;for(let L=0,D=w.length;L<D;L++){const S=Array.isArray(w[L])?w[L]:[w[L]];for(let E=0,P=S.length;E<P;E++){const U=S[E],H=Array.isArray(U.value)?U.value:[U.value];for(let W=0,K=H.length;W<K;W++){const G=H[W],ee=x(G),V=y%A,ne=V%ee.boundary,fe=V+ne;y+=ne,fe!==0&&A-fe<ee.storage&&(y+=A-fe),U.__data=new Float32Array(ee.storage/Float32Array.BYTES_PER_ELEMENT),U.__offset=y,y+=ee.storage}}}const b=y%A;return b>0&&(y+=A-b),R.__size=y,R.__cache={},this}function x(R){const w={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(w.boundary=4,w.storage=4):R.isVector2?(w.boundary=8,w.storage=8):R.isVector3||R.isColor?(w.boundary=16,w.storage=12):R.isVector4?(w.boundary=16,w.storage=16):R.isMatrix3?(w.boundary=48,w.storage=48):R.isMatrix4?(w.boundary=64,w.storage=64):R.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",R),w}function m(R){const w=R.target;w.removeEventListener("dispose",m);const y=r.indexOf(w.__bindingPointIndex);r.splice(y,1),n.deleteBuffer(s[w.id]),delete s[w.id],delete a[w.id]}function u(){for(const R in s)n.deleteBuffer(s[R]);r=[],s={},a={}}return{bind:l,update:c,dispose:u}}class zg{constructor(e={}){const{canvas:t=hd(),context:i=null,depth:s=!0,stencil:a=!1,alpha:r=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:f=!1}=e;this.isWebGLRenderer=!0;let p;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");p=i.getContextAttributes().alpha}else p=r;const g=new Uint32Array(4),x=new Int32Array(4);let m=null,u=null;const R=[],w=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=fi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const y=this;let A=!1;this._outputColorSpace=ln;let b=0,L=0,D=null,S=-1,E=null;const P=new bt,U=new bt;let H=null;const W=new it(0);let K=0,G=t.width,ee=t.height,V=1,ne=null,fe=null;const pe=new bt(0,0,G,ee),xe=new bt(0,0,G,ee);let $e=!1;const Ye=new ko;let ve=!1,z=!1;const Z=new Mt,he=new F,we=new bt,de={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ge=!1;function je(){return D===null?V:1}let C=i;function Ne(M,O){return t.getContext(M,O)}try{const M={alpha:!0,depth:s,stencil:a,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Ro}`),t.addEventListener("webglcontextlost",se,!1),t.addEventListener("webglcontextrestored",Te,!1),t.addEventListener("webglcontextcreationerror",te,!1),C===null){const O="webgl2";if(C=Ne(O,M),C===null)throw Ne(O)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let Se,Re,ce,Pe,ue,ge,Ve,We,T,_,N,$,j,X,Me,ae,Ee,v,Q,oe,De,be,re,Ie;function I(){Se=new Kp(C),Se.init(),be=new Pg(C,Se),Re=new Gp(C,Se,e,be),ce=new Cg(C,Se),Re.reversedDepthBuffer&&f&&ce.buffers.depth.setReversed(!0),Pe=new Jp(C),ue=new gg,ge=new Lg(C,Se,ce,ue,Re,be,Pe),Ve=new Wp(y),We=new $p(y),T=new iu(C),re=new kp(C,T),_=new Zp(C,T,Pe,re),N=new em(C,_,T,Pe),Q=new Qp(C,Re,ge),ae=new Vp(ue),$=new mg(y,Ve,We,Se,Re,re,ae),j=new Fg(y,ue),X=new _g,Me=new bg(Se),v=new zp(y,Ve,We,ce,N,p,l),Ee=new wg(y,N,Re),Ie=new Bg(C,Pe,Re,ce),oe=new Hp(C,Se,Pe),De=new jp(C,Se,Pe),Pe.programs=$.programs,y.capabilities=Re,y.extensions=Se,y.properties=ue,y.renderLists=X,y.shadowMap=Ee,y.state=ce,y.info=Pe}I();const ie=new Ng(y,C);this.xr=ie,this.getContext=function(){return C},this.getContextAttributes=function(){return C.getContextAttributes()},this.forceContextLoss=function(){const M=Se.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=Se.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return V},this.setPixelRatio=function(M){M!==void 0&&(V=M,this.setSize(G,ee,!1))},this.getSize=function(M){return M.set(G,ee)},this.setSize=function(M,O,q=!0){if(ie.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}G=M,ee=O,t.width=Math.floor(M*V),t.height=Math.floor(O*V),q===!0&&(t.style.width=M+"px",t.style.height=O+"px"),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(G*V,ee*V).floor()},this.setDrawingBufferSize=function(M,O,q){G=M,ee=O,V=q,t.width=Math.floor(M*q),t.height=Math.floor(O*q),this.setViewport(0,0,M,O)},this.getCurrentViewport=function(M){return M.copy(P)},this.getViewport=function(M){return M.copy(pe)},this.setViewport=function(M,O,q,Y){M.isVector4?pe.set(M.x,M.y,M.z,M.w):pe.set(M,O,q,Y),ce.viewport(P.copy(pe).multiplyScalar(V).round())},this.getScissor=function(M){return M.copy(xe)},this.setScissor=function(M,O,q,Y){M.isVector4?xe.set(M.x,M.y,M.z,M.w):xe.set(M,O,q,Y),ce.scissor(U.copy(xe).multiplyScalar(V).round())},this.getScissorTest=function(){return $e},this.setScissorTest=function(M){ce.setScissorTest($e=M)},this.setOpaqueSort=function(M){ne=M},this.setTransparentSort=function(M){fe=M},this.getClearColor=function(M){return M.copy(v.getClearColor())},this.setClearColor=function(){v.setClearColor(...arguments)},this.getClearAlpha=function(){return v.getClearAlpha()},this.setClearAlpha=function(){v.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,q=!0){let Y=0;if(M){let B=!1;if(D!==null){const le=D.texture.format;B=le===No||le===Uo||le===Io}if(B){const le=D.texture.type,_e=le===On||le===Ni||le===Ds||le===Is||le===Po||le===Do,Le=v.getClearColor(),Ce=v.getClearAlpha(),ze=Le.r,Fe=Le.g,Ue=Le.b;_e?(g[0]=ze,g[1]=Fe,g[2]=Ue,g[3]=Ce,C.clearBufferuiv(C.COLOR,0,g)):(x[0]=ze,x[1]=Fe,x[2]=Ue,x[3]=Ce,C.clearBufferiv(C.COLOR,0,x))}else Y|=C.COLOR_BUFFER_BIT}O&&(Y|=C.DEPTH_BUFFER_BIT),q&&(Y|=C.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),C.clear(Y)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",se,!1),t.removeEventListener("webglcontextrestored",Te,!1),t.removeEventListener("webglcontextcreationerror",te,!1),v.dispose(),X.dispose(),Me.dispose(),ue.dispose(),Ve.dispose(),We.dispose(),N.dispose(),re.dispose(),Ie.dispose(),$.dispose(),ie.dispose(),ie.removeEventListener("sessionstart",Et),ie.removeEventListener("sessionend",me),Rt.stop()};function se(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),A=!0}function Te(){console.log("THREE.WebGLRenderer: Context Restored."),A=!1;const M=Pe.autoReset,O=Ee.enabled,q=Ee.autoUpdate,Y=Ee.needsUpdate,B=Ee.type;I(),Pe.autoReset=M,Ee.enabled=O,Ee.autoUpdate=q,Ee.needsUpdate=Y,Ee.type=B}function te(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function J(M){const O=M.target;O.removeEventListener("dispose",J),Ae(O)}function Ae(M){Oe(M),ue.remove(M)}function Oe(M){const O=ue.get(M).programs;O!==void 0&&(O.forEach(function(q){$.releaseProgram(q)}),M.isShaderMaterial&&$.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,q,Y,B,le){O===null&&(O=de);const _e=B.isMesh&&B.matrixWorld.determinant()<0,Le=At(M,O,q,Y,B);ce.setMaterial(Y,_e);let Ce=q.index,ze=1;if(Y.wireframe===!0){if(Ce=_.getWireframeAttribute(q),Ce===void 0)return;ze=2}const Fe=q.drawRange,Ue=q.attributes.position;let Je=Fe.start*ze,rt=(Fe.start+Fe.count)*ze;le!==null&&(Je=Math.max(Je,le.start*ze),rt=Math.min(rt,(le.start+le.count)*ze)),Ce!==null?(Je=Math.max(Je,0),rt=Math.min(rt,Ce.count)):Ue!=null&&(Je=Math.max(Je,0),rt=Math.min(rt,Ue.count));const ft=rt-Je;if(ft<0||ft===1/0)return;re.setup(B,Y,Le,q,Ce);let ct,st=oe;if(Ce!==null&&(ct=T.get(Ce),st=De,st.setIndex(ct)),B.isMesh)Y.wireframe===!0?(ce.setLineWidth(Y.wireframeLinewidth*je()),st.setMode(C.LINES)):st.setMode(C.TRIANGLES);else if(B.isLine){let Be=Y.linewidth;Be===void 0&&(Be=1),ce.setLineWidth(Be*je()),B.isLineSegments?st.setMode(C.LINES):B.isLineLoop?st.setMode(C.LINE_LOOP):st.setMode(C.LINE_STRIP)}else B.isPoints?st.setMode(C.POINTS):B.isSprite&&st.setMode(C.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)Bs("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),st.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(Se.get("WEBGL_multi_draw"))st.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Be=B._multiDrawStarts,ut=B._multiDrawCounts,nt=B._multiDrawCount,Ot=Ce?T.get(Ce).bytesPerElement:1,dn=ue.get(Y).currentProgram.getUniforms();for(let Vt=0;Vt<nt;Vt++)dn.setValue(C,"_gl_DrawID",Vt),st.render(Be[Vt]/Ot,ut[Vt])}else if(B.isInstancedMesh)st.renderInstances(Je,ft,B.count);else if(q.isInstancedBufferGeometry){const Be=q._maxInstanceCount!==void 0?q._maxInstanceCount:1/0,ut=Math.min(q.instanceCount,Be);st.renderInstances(Je,ft,ut)}else st.render(Je,ft)};function Ke(M,O,q){M.transparent===!0&&M.side===pn&&M.forceSinglePass===!1?(M.side=jt,M.needsUpdate=!0,Cn(M,O,q),M.side=Nn,M.needsUpdate=!0,Cn(M,O,q),M.side=pn):Cn(M,O,q)}this.compile=function(M,O,q=null){q===null&&(q=M),u=Me.get(q),u.init(O),w.push(u),q.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),M!==q&&M.traverseVisible(function(B){B.isLight&&B.layers.test(O.layers)&&(u.pushLight(B),B.castShadow&&u.pushShadow(B))}),u.setupLights();const Y=new Set;return M.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const le=B.material;if(le)if(Array.isArray(le))for(let _e=0;_e<le.length;_e++){const Le=le[_e];Ke(Le,q,B),Y.add(Le)}else Ke(le,q,B),Y.add(le)}),u=w.pop(),Y},this.compileAsync=function(M,O,q=null){const Y=this.compile(M,O,q);return new Promise(B=>{function le(){if(Y.forEach(function(_e){ue.get(_e).currentProgram.isReady()&&Y.delete(_e)}),Y.size===0){B(M);return}setTimeout(le,10)}Se.get("KHR_parallel_shader_compile")!==null?le():setTimeout(le,10)})};let Xe=null;function yt(M){Xe&&Xe(M)}function Et(){Rt.stop()}function me(){Rt.start()}const Rt=new Bc;Rt.setAnimationLoop(yt),typeof self<"u"&&Rt.setContext(self),this.setAnimationLoop=function(M){Xe=M,ie.setAnimationLoop(M),M===null?Rt.stop():Rt.start()},ie.addEventListener("sessionstart",Et),ie.addEventListener("sessionend",me),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(A===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ie.enabled===!0&&ie.isPresenting===!0&&(ie.cameraAutoUpdate===!0&&ie.updateCamera(O),O=ie.getCamera()),M.isScene===!0&&M.onBeforeRender(y,M,O,D),u=Me.get(M,w.length),u.init(O),w.push(u),Z.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),Ye.setFromProjectionMatrix(Z,Dn,O.reversedDepth),z=this.localClippingEnabled,ve=ae.init(this.clippingPlanes,z),m=X.get(M,R.length),m.init(),R.push(m),ie.enabled===!0&&ie.isPresenting===!0){const le=y.xr.getDepthSensingMesh();le!==null&&Gt(le,O,-1/0,y.sortObjects)}Gt(M,O,0,y.sortObjects),m.finish(),y.sortObjects===!0&&m.sort(ne,fe),Ge=ie.enabled===!1||ie.isPresenting===!1||ie.hasDepthSensing()===!1,Ge&&v.addToRenderList(m,M),this.info.render.frame++,ve===!0&&ae.beginShadows();const q=u.state.shadowsArray;Ee.render(q,M,O),ve===!0&&ae.endShadows(),this.info.autoReset===!0&&this.info.reset();const Y=m.opaque,B=m.transmissive;if(u.setupLights(),O.isArrayCamera){const le=O.cameras;if(B.length>0)for(let _e=0,Le=le.length;_e<Le;_e++){const Ce=le[_e];at(Y,B,M,Ce)}Ge&&v.render(M);for(let _e=0,Le=le.length;_e<Le;_e++){const Ce=le[_e];Rn(m,M,Ce,Ce.viewport)}}else B.length>0&&at(Y,B,M,O),Ge&&v.render(M),Rn(m,M,O);D!==null&&L===0&&(ge.updateMultisampleRenderTarget(D),ge.updateRenderTargetMipmap(D)),M.isScene===!0&&M.onAfterRender(y,M,O),re.resetDefaultState(),S=-1,E=null,w.pop(),w.length>0?(u=w[w.length-1],ve===!0&&ae.setGlobalState(y.clippingPlanes,u.state.camera)):u=null,R.pop(),R.length>0?m=R[R.length-1]:m=null};function Gt(M,O,q,Y){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)q=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLight)u.pushLight(M),M.castShadow&&u.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||Ye.intersectsSprite(M)){Y&&we.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Z);const _e=N.update(M),Le=M.material;Le.visible&&m.push(M,_e,Le,q,we.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||Ye.intersectsObject(M))){const _e=N.update(M),Le=M.material;if(Y&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),we.copy(M.boundingSphere.center)):(_e.boundingSphere===null&&_e.computeBoundingSphere(),we.copy(_e.boundingSphere.center)),we.applyMatrix4(M.matrixWorld).applyMatrix4(Z)),Array.isArray(Le)){const Ce=_e.groups;for(let ze=0,Fe=Ce.length;ze<Fe;ze++){const Ue=Ce[ze],Je=Le[Ue.materialIndex];Je&&Je.visible&&m.push(M,_e,Je,q,we.z,Ue)}}else Le.visible&&m.push(M,_e,Le,q,we.z,null)}}const le=M.children;for(let _e=0,Le=le.length;_e<Le;_e++)Gt(le[_e],O,q,Y)}function Rn(M,O,q,Y){const B=M.opaque,le=M.transmissive,_e=M.transparent;u.setupLightsView(q),ve===!0&&ae.setGlobalState(y.clippingPlanes,q),Y&&ce.viewport(P.copy(Y)),B.length>0&&mn(B,O,q),le.length>0&&mn(le,O,q),_e.length>0&&mn(_e,O,q),ce.buffers.depth.setTest(!0),ce.buffers.depth.setMask(!0),ce.buffers.color.setMask(!0),ce.setPolygonOffset(!1)}function at(M,O,q,Y){if((q.isScene===!0?q.overrideMaterial:null)!==null)return;u.state.transmissionRenderTarget[Y.id]===void 0&&(u.state.transmissionRenderTarget[Y.id]=new Fi(1,1,{generateMipmaps:!0,type:Se.has("EXT_color_buffer_half_float")||Se.has("EXT_color_buffer_float")?Gs:On,minFilter:Li,samples:4,stencilBuffer:a,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:ot.workingColorSpace}));const le=u.state.transmissionRenderTarget[Y.id],_e=Y.viewport||P;le.setSize(_e.z*y.transmissionResolutionScale,_e.w*y.transmissionResolutionScale);const Le=y.getRenderTarget(),Ce=y.getActiveCubeFace(),ze=y.getActiveMipmapLevel();y.setRenderTarget(le),y.getClearColor(W),K=y.getClearAlpha(),K<1&&y.setClearColor(16777215,.5),y.clear(),Ge&&v.render(q);const Fe=y.toneMapping;y.toneMapping=fi;const Ue=Y.viewport;if(Y.viewport!==void 0&&(Y.viewport=void 0),u.setupLightsView(Y),ve===!0&&ae.setGlobalState(y.clippingPlanes,Y),mn(M,q,Y),ge.updateMultisampleRenderTarget(le),ge.updateRenderTargetMipmap(le),Se.has("WEBGL_multisampled_render_to_texture")===!1){let Je=!1;for(let rt=0,ft=O.length;rt<ft;rt++){const ct=O[rt],st=ct.object,Be=ct.geometry,ut=ct.material,nt=ct.group;if(ut.side===pn&&st.layers.test(Y.layers)){const Ot=ut.side;ut.side=jt,ut.needsUpdate=!0,Qn(st,q,Y,Be,ut,nt),ut.side=Ot,ut.needsUpdate=!0,Je=!0}}Je===!0&&(ge.updateMultisampleRenderTarget(le),ge.updateRenderTargetMipmap(le))}y.setRenderTarget(Le,Ce,ze),y.setClearColor(W,K),Ue!==void 0&&(Y.viewport=Ue),y.toneMapping=Fe}function mn(M,O,q){const Y=O.isScene===!0?O.overrideMaterial:null;for(let B=0,le=M.length;B<le;B++){const _e=M[B],Le=_e.object,Ce=_e.geometry,ze=_e.group;let Fe=_e.material;Fe.allowOverride===!0&&Y!==null&&(Fe=Y),Le.layers.test(q.layers)&&Qn(Le,O,q,Ce,Fe,ze)}}function Qn(M,O,q,Y,B,le){M.onBeforeRender(y,O,q,Y,B,le),M.modelViewMatrix.multiplyMatrices(q.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),B.onBeforeRender(y,O,q,Y,M,le),B.transparent===!0&&B.side===pn&&B.forceSinglePass===!1?(B.side=jt,B.needsUpdate=!0,y.renderBufferDirect(q,O,Y,B,M,le),B.side=Nn,B.needsUpdate=!0,y.renderBufferDirect(q,O,Y,B,M,le),B.side=pn):y.renderBufferDirect(q,O,Y,B,M,le),M.onAfterRender(y,O,q,Y,B,le)}function Cn(M,O,q){O.isScene!==!0&&(O=de);const Y=ue.get(M),B=u.state.lights,le=u.state.shadowsArray,_e=B.state.version,Le=$.getParameters(M,B.state,le,O,q),Ce=$.getProgramCacheKey(Le);let ze=Y.programs;Y.environment=M.isMeshStandardMaterial?O.environment:null,Y.fog=O.fog,Y.envMap=(M.isMeshStandardMaterial?We:Ve).get(M.envMap||Y.environment),Y.envMapRotation=Y.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,ze===void 0&&(M.addEventListener("dispose",J),ze=new Map,Y.programs=ze);let Fe=ze.get(Ce);if(Fe!==void 0){if(Y.currentProgram===Fe&&Y.lightsStateVersion===_e)return Qt(M,Le),Fe}else Le.uniforms=$.getUniforms(M),M.onBeforeCompile(Le,y),Fe=$.acquireProgram(Le,Ce),ze.set(Ce,Fe),Y.uniforms=Le.uniforms;const Ue=Y.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Ue.clippingPlanes=ae.uniform),Qt(M,Le),Y.needsLights=ei(M),Y.lightsStateVersion=_e,Y.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),Y.currentProgram=Fe,Y.uniformsList=null,Fe}function hn(M){if(M.uniformsList===null){const O=M.currentProgram.getUniforms();M.uniformsList=Ra.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Qt(M,O){const q=ue.get(M);q.outputColorSpace=O.outputColorSpace,q.batching=O.batching,q.batchingColor=O.batchingColor,q.instancing=O.instancing,q.instancingColor=O.instancingColor,q.instancingMorph=O.instancingMorph,q.skinning=O.skinning,q.morphTargets=O.morphTargets,q.morphNormals=O.morphNormals,q.morphColors=O.morphColors,q.morphTargetsCount=O.morphTargetsCount,q.numClippingPlanes=O.numClippingPlanes,q.numIntersection=O.numClipIntersection,q.vertexAlphas=O.vertexAlphas,q.vertexTangents=O.vertexTangents,q.toneMapping=O.toneMapping}function At(M,O,q,Y,B){O.isScene!==!0&&(O=de),ge.resetTextureUnits();const le=O.fog,_e=Y.isMeshStandardMaterial?O.environment:null,Le=D===null?y.outputColorSpace:D.isXRRenderTarget===!0?D.texture.colorSpace:us,Ce=(Y.isMeshStandardMaterial?We:Ve).get(Y.envMap||_e),ze=Y.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,Fe=!!q.attributes.tangent&&(!!Y.normalMap||Y.anisotropy>0),Ue=!!q.morphAttributes.position,Je=!!q.morphAttributes.normal,rt=!!q.morphAttributes.color;let ft=fi;Y.toneMapped&&(D===null||D.isXRRenderTarget===!0)&&(ft=y.toneMapping);const ct=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,st=ct!==void 0?ct.length:0,Be=ue.get(Y),ut=u.state.lights;if(ve===!0&&(z===!0||M!==E)){const Wt=M===E&&Y.id===S;ae.setState(Y,M,Wt)}let nt=!1;Y.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==ut.state.version||Be.outputColorSpace!==Le||B.isBatchedMesh&&Be.batching===!1||!B.isBatchedMesh&&Be.batching===!0||B.isBatchedMesh&&Be.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Be.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Be.instancing===!1||!B.isInstancedMesh&&Be.instancing===!0||B.isSkinnedMesh&&Be.skinning===!1||!B.isSkinnedMesh&&Be.skinning===!0||B.isInstancedMesh&&Be.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Be.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Be.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Be.instancingMorph===!1&&B.morphTexture!==null||Be.envMap!==Ce||Y.fog===!0&&Be.fog!==le||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==ae.numPlanes||Be.numIntersection!==ae.numIntersection)||Be.vertexAlphas!==ze||Be.vertexTangents!==Fe||Be.morphTargets!==Ue||Be.morphNormals!==Je||Be.morphColors!==rt||Be.toneMapping!==ft||Be.morphTargetsCount!==st)&&(nt=!0):(nt=!0,Be.__version=Y.version);let Ot=Be.currentProgram;nt===!0&&(Ot=Cn(Y,O,B));let dn=!1,Vt=!1,Bn=!1;const mt=Ot.getUniforms(),tn=Be.uniforms;if(ce.useProgram(Ot.program)&&(dn=!0,Vt=!0,Bn=!0),Y.id!==S&&(S=Y.id,Vt=!0),dn||E!==M){ce.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),mt.setValue(C,"projectionMatrix",M.projectionMatrix),mt.setValue(C,"viewMatrix",M.matrixWorldInverse);const Xt=mt.map.cameraPosition;Xt!==void 0&&Xt.setValue(C,he.setFromMatrixPosition(M.matrixWorld)),Re.logarithmicDepthBuffer&&mt.setValue(C,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(Y.isMeshPhongMaterial||Y.isMeshToonMaterial||Y.isMeshLambertMaterial||Y.isMeshBasicMaterial||Y.isMeshStandardMaterial||Y.isShaderMaterial)&&mt.setValue(C,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,Vt=!0,Bn=!0)}if(B.isSkinnedMesh){mt.setOptional(C,B,"bindMatrix"),mt.setOptional(C,B,"bindMatrixInverse");const Wt=B.skeleton;Wt&&(Wt.boneTexture===null&&Wt.computeBoneTexture(),mt.setValue(C,"boneTexture",Wt.boneTexture,ge))}B.isBatchedMesh&&(mt.setOptional(C,B,"batchingTexture"),mt.setValue(C,"batchingTexture",B._matricesTexture,ge),mt.setOptional(C,B,"batchingIdTexture"),mt.setValue(C,"batchingIdTexture",B._indirectTexture,ge),mt.setOptional(C,B,"batchingColorTexture"),B._colorsTexture!==null&&mt.setValue(C,"batchingColorTexture",B._colorsTexture,ge));const nn=q.morphAttributes;if((nn.position!==void 0||nn.normal!==void 0||nn.color!==void 0)&&Q.update(B,q,Ot),(Vt||Be.receiveShadow!==B.receiveShadow)&&(Be.receiveShadow=B.receiveShadow,mt.setValue(C,"receiveShadow",B.receiveShadow)),Y.isMeshGouraudMaterial&&Y.envMap!==null&&(tn.envMap.value=Ce,tn.flipEnvMap.value=Ce.isCubeTexture&&Ce.isRenderTargetTexture===!1?-1:1),Y.isMeshStandardMaterial&&Y.envMap===null&&O.environment!==null&&(tn.envMapIntensity.value=O.environmentIntensity),Vt&&(mt.setValue(C,"toneMappingExposure",y.toneMappingExposure),Be.needsLights&&en(tn,Bn),le&&Y.fog===!0&&j.refreshFogUniforms(tn,le),j.refreshMaterialUniforms(tn,Y,V,ee,u.state.transmissionRenderTarget[M.id]),Ra.upload(C,hn(Be),tn,ge)),Y.isShaderMaterial&&Y.uniformsNeedUpdate===!0&&(Ra.upload(C,hn(Be),tn,ge),Y.uniformsNeedUpdate=!1),Y.isSpriteMaterial&&mt.setValue(C,"center",B.center),mt.setValue(C,"modelViewMatrix",B.modelViewMatrix),mt.setValue(C,"normalMatrix",B.normalMatrix),mt.setValue(C,"modelMatrix",B.matrixWorld),Y.isShaderMaterial||Y.isRawShaderMaterial){const Wt=Y.uniformsGroups;for(let Xt=0,Ms=Wt.length;Xt<Ms;Xt++){const zn=Wt[Xt];Ie.update(zn,Ot),Ie.bind(zn,Ot)}}return Ot}function en(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function ei(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return b},this.getActiveMipmapLevel=function(){return L},this.getRenderTarget=function(){return D},this.setRenderTargetTextures=function(M,O,q){const Y=ue.get(M);Y.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,Y.__autoAllocateDepthBuffer===!1&&(Y.__useRenderToTexture=!1),ue.get(M.texture).__webglTexture=O,ue.get(M.depthTexture).__webglTexture=Y.__autoAllocateDepthBuffer?void 0:q,Y.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){const q=ue.get(M);q.__webglFramebuffer=O,q.__useDefaultFramebuffer=O===void 0};const ti=C.createFramebuffer();this.setRenderTarget=function(M,O=0,q=0){D=M,b=O,L=q;let Y=!0,B=null,le=!1,_e=!1;if(M){const Ce=ue.get(M);if(Ce.__useDefaultFramebuffer!==void 0)ce.bindFramebuffer(C.FRAMEBUFFER,null),Y=!1;else if(Ce.__webglFramebuffer===void 0)ge.setupRenderTarget(M);else if(Ce.__hasExternalTextures)ge.rebindTextures(M,ue.get(M.texture).__webglTexture,ue.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const Ue=M.depthTexture;if(Ce.__boundDepthTexture!==Ue){if(Ue!==null&&ue.has(Ue)&&(M.width!==Ue.image.width||M.height!==Ue.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(M)}}const ze=M.texture;(ze.isData3DTexture||ze.isDataArrayTexture||ze.isCompressedArrayTexture)&&(_e=!0);const Fe=ue.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Fe[O])?B=Fe[O][q]:B=Fe[O],le=!0):M.samples>0&&ge.useMultisampledRTT(M)===!1?B=ue.get(M).__webglMultisampledFramebuffer:Array.isArray(Fe)?B=Fe[q]:B=Fe,P.copy(M.viewport),U.copy(M.scissor),H=M.scissorTest}else P.copy(pe).multiplyScalar(V).floor(),U.copy(xe).multiplyScalar(V).floor(),H=$e;if(q!==0&&(B=ti),ce.bindFramebuffer(C.FRAMEBUFFER,B)&&Y&&ce.drawBuffers(M,B),ce.viewport(P),ce.scissor(U),ce.setScissorTest(H),le){const Ce=ue.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_CUBE_MAP_POSITIVE_X+O,Ce.__webglTexture,q)}else if(_e){const Ce=O;for(let ze=0;ze<M.textures.length;ze++){const Fe=ue.get(M.textures[ze]);C.framebufferTextureLayer(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0+ze,Fe.__webglTexture,q,Ce)}}else if(M!==null&&q!==0){const Ce=ue.get(M.texture);C.framebufferTexture2D(C.FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Ce.__webglTexture,q)}S=-1},this.readRenderTargetPixels=function(M,O,q,Y,B,le,_e,Le=0){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ce=ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce){ce.bindFramebuffer(C.FRAMEBUFFER,Ce);try{const ze=M.textures[Le],Fe=ze.format,Ue=ze.type;if(!Re.textureFormatReadable(Fe)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Re.textureTypeReadable(Ue)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-Y&&q>=0&&q<=M.height-B&&(M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Le),C.readPixels(O,q,Y,B,be.convert(Fe),be.convert(Ue),le))}finally{const ze=D!==null?ue.get(D).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,ze)}}},this.readRenderTargetPixelsAsync=async function(M,O,q,Y,B,le,_e,Le=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ce=ue.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&_e!==void 0&&(Ce=Ce[_e]),Ce)if(O>=0&&O<=M.width-Y&&q>=0&&q<=M.height-B){ce.bindFramebuffer(C.FRAMEBUFFER,Ce);const ze=M.textures[Le],Fe=ze.format,Ue=ze.type;if(!Re.textureFormatReadable(Fe))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Re.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Je=C.createBuffer();C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.bufferData(C.PIXEL_PACK_BUFFER,le.byteLength,C.STREAM_READ),M.textures.length>1&&C.readBuffer(C.COLOR_ATTACHMENT0+Le),C.readPixels(O,q,Y,B,be.convert(Fe),be.convert(Ue),0);const rt=D!==null?ue.get(D).__webglFramebuffer:null;ce.bindFramebuffer(C.FRAMEBUFFER,rt);const ft=C.fenceSync(C.SYNC_GPU_COMMANDS_COMPLETE,0);return C.flush(),await dd(C,ft,4),C.bindBuffer(C.PIXEL_PACK_BUFFER,Je),C.getBufferSubData(C.PIXEL_PACK_BUFFER,0,le),C.deleteBuffer(Je),C.deleteSync(ft),le}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,q=0){const Y=Math.pow(2,-q),B=Math.floor(M.image.width*Y),le=Math.floor(M.image.height*Y),_e=O!==null?O.x:0,Le=O!==null?O.y:0;ge.setTexture2D(M,0),C.copyTexSubImage2D(C.TEXTURE_2D,q,0,0,_e,Le,B,le),ce.unbindTexture()};const Ut=C.createFramebuffer(),Nt=C.createFramebuffer();this.copyTextureToTexture=function(M,O,q=null,Y=null,B=0,le=null){le===null&&(B!==0?(Bs("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),le=B,B=0):le=0);let _e,Le,Ce,ze,Fe,Ue,Je,rt,ft;const ct=M.isCompressedTexture?M.mipmaps[le]:M.image;if(q!==null)_e=q.max.x-q.min.x,Le=q.max.y-q.min.y,Ce=q.isBox3?q.max.z-q.min.z:1,ze=q.min.x,Fe=q.min.y,Ue=q.isBox3?q.min.z:0;else{const nn=Math.pow(2,-B);_e=Math.floor(ct.width*nn),Le=Math.floor(ct.height*nn),M.isDataArrayTexture?Ce=ct.depth:M.isData3DTexture?Ce=Math.floor(ct.depth*nn):Ce=1,ze=0,Fe=0,Ue=0}Y!==null?(Je=Y.x,rt=Y.y,ft=Y.z):(Je=0,rt=0,ft=0);const st=be.convert(O.format),Be=be.convert(O.type);let ut;O.isData3DTexture?(ge.setTexture3D(O,0),ut=C.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ge.setTexture2DArray(O,0),ut=C.TEXTURE_2D_ARRAY):(ge.setTexture2D(O,0),ut=C.TEXTURE_2D),C.pixelStorei(C.UNPACK_FLIP_Y_WEBGL,O.flipY),C.pixelStorei(C.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),C.pixelStorei(C.UNPACK_ALIGNMENT,O.unpackAlignment);const nt=C.getParameter(C.UNPACK_ROW_LENGTH),Ot=C.getParameter(C.UNPACK_IMAGE_HEIGHT),dn=C.getParameter(C.UNPACK_SKIP_PIXELS),Vt=C.getParameter(C.UNPACK_SKIP_ROWS),Bn=C.getParameter(C.UNPACK_SKIP_IMAGES);C.pixelStorei(C.UNPACK_ROW_LENGTH,ct.width),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,ct.height),C.pixelStorei(C.UNPACK_SKIP_PIXELS,ze),C.pixelStorei(C.UNPACK_SKIP_ROWS,Fe),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Ue);const mt=M.isDataArrayTexture||M.isData3DTexture,tn=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){const nn=ue.get(M),Wt=ue.get(O),Xt=ue.get(nn.__renderTarget),Ms=ue.get(Wt.__renderTarget);ce.bindFramebuffer(C.READ_FRAMEBUFFER,Xt.__webglFramebuffer),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,Ms.__webglFramebuffer);for(let zn=0;zn<Ce;zn++)mt&&(C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ue.get(M).__webglTexture,B,Ue+zn),C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,ue.get(O).__webglTexture,le,ft+zn)),C.blitFramebuffer(ze,Fe,_e,Le,Je,rt,_e,Le,C.DEPTH_BUFFER_BIT,C.NEAREST);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else if(B!==0||M.isRenderTargetTexture||ue.has(M)){const nn=ue.get(M),Wt=ue.get(O);ce.bindFramebuffer(C.READ_FRAMEBUFFER,Ut),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,Nt);for(let Xt=0;Xt<Ce;Xt++)mt?C.framebufferTextureLayer(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,nn.__webglTexture,B,Ue+Xt):C.framebufferTexture2D(C.READ_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,nn.__webglTexture,B),tn?C.framebufferTextureLayer(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,Wt.__webglTexture,le,ft+Xt):C.framebufferTexture2D(C.DRAW_FRAMEBUFFER,C.COLOR_ATTACHMENT0,C.TEXTURE_2D,Wt.__webglTexture,le),B!==0?C.blitFramebuffer(ze,Fe,_e,Le,Je,rt,_e,Le,C.COLOR_BUFFER_BIT,C.NEAREST):tn?C.copyTexSubImage3D(ut,le,Je,rt,ft+Xt,ze,Fe,_e,Le):C.copyTexSubImage2D(ut,le,Je,rt,ze,Fe,_e,Le);ce.bindFramebuffer(C.READ_FRAMEBUFFER,null),ce.bindFramebuffer(C.DRAW_FRAMEBUFFER,null)}else tn?M.isDataTexture||M.isData3DTexture?C.texSubImage3D(ut,le,Je,rt,ft,_e,Le,Ce,st,Be,ct.data):O.isCompressedArrayTexture?C.compressedTexSubImage3D(ut,le,Je,rt,ft,_e,Le,Ce,st,ct.data):C.texSubImage3D(ut,le,Je,rt,ft,_e,Le,Ce,st,Be,ct):M.isDataTexture?C.texSubImage2D(C.TEXTURE_2D,le,Je,rt,_e,Le,st,Be,ct.data):M.isCompressedTexture?C.compressedTexSubImage2D(C.TEXTURE_2D,le,Je,rt,ct.width,ct.height,st,ct.data):C.texSubImage2D(C.TEXTURE_2D,le,Je,rt,_e,Le,st,Be,ct);C.pixelStorei(C.UNPACK_ROW_LENGTH,nt),C.pixelStorei(C.UNPACK_IMAGE_HEIGHT,Ot),C.pixelStorei(C.UNPACK_SKIP_PIXELS,dn),C.pixelStorei(C.UNPACK_SKIP_ROWS,Vt),C.pixelStorei(C.UNPACK_SKIP_IMAGES,Bn),le===0&&O.generateMipmaps&&C.generateMipmap(ut),ce.unbindTexture()},this.initRenderTarget=function(M){ue.get(M).__webglFramebuffer===void 0&&ge.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ge.setTextureCube(M,0):M.isData3DTexture?ge.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ge.setTexture2DArray(M,0):ge.setTexture2D(M,0),ce.unbindTexture()},this.resetState=function(){b=0,L=0,D=null,ce.reset(),re.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Dn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=ot._getUnpackColorSpace()}}const ic={type:"change"},Xo={type:"start"},Vc={type:"end"},ya=new Xs,sc=new li,kg=Math.cos(70*Oi.DEG2RAD),Lt=new F,sn=2*Math.PI,dt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},wr=1e-6;class Hg extends tu{constructor(e,t=null){super(e,t),this.state=dt.NONE,this.target=new F,this.cursor=new F,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:as.ROTATE,MIDDLE:as.DOLLY,RIGHT:as.PAN},this.touches={ONE:ns.ROTATE,TWO:ns.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new F,this._lastQuaternion=new jn,this._lastTargetPosition=new F,this._quat=new jn().setFromUnitVectors(e.up,new F(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Pl,this._sphericalDelta=new Pl,this._scale=1,this._panOffset=new F,this._rotateStart=new He,this._rotateEnd=new He,this._rotateDelta=new He,this._panStart=new He,this._panEnd=new He,this._panDelta=new He,this._dollyStart=new He,this._dollyEnd=new He,this._dollyDelta=new He,this._dollyDirection=new F,this._mouse=new He,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=Vg.bind(this),this._onPointerDown=Gg.bind(this),this._onPointerUp=Wg.bind(this),this._onContextMenu=jg.bind(this),this._onMouseWheel=Yg.bind(this),this._onKeyDown=$g.bind(this),this._onTouchStart=Kg.bind(this),this._onTouchMove=Zg.bind(this),this._onMouseDown=Xg.bind(this),this._onMouseMove=qg.bind(this),this._interceptControlDown=Jg.bind(this),this._interceptControlUp=Qg.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(ic),this.update(),this.state=dt.NONE}update(e=null){const t=this.object.position;Lt.copy(t).sub(this.target),Lt.applyQuaternion(this._quat),this._spherical.setFromVector3(Lt),this.autoRotate&&this.state===dt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=sn:i>Math.PI&&(i-=sn),s<-Math.PI?s+=sn:s>Math.PI&&(s-=sn),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let a=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const r=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),a=r!=this._spherical.radius}if(Lt.setFromSpherical(this._spherical),Lt.applyQuaternion(this._quatInverse),t.copy(this.target).add(Lt),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let r=null;if(this.object.isPerspectiveCamera){const o=Lt.length();r=this._clampDistance(o*this._scale);const l=o-r;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),a=!!l}else if(this.object.isOrthographicCamera){const o=new F(this._mouse.x,this._mouse.y,0);o.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),a=l!==this.object.zoom;const c=new F(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(o),this.object.updateMatrixWorld(),r=Lt.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;r!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(r).add(this.object.position):(ya.origin.copy(this.object.position),ya.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ya.direction))<kg?this.object.lookAt(this.target):(sc.setFromNormalAndCoplanarPoint(this.object.up,this.target),ya.intersectPlane(sc,this.target))))}else if(this.object.isOrthographicCamera){const r=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),r!==this.object.zoom&&(this.object.updateProjectionMatrix(),a=!0)}return this._scale=1,this._performCursorZoom=!1,a||this._lastPosition.distanceToSquared(this.object.position)>wr||8*(1-this._lastQuaternion.dot(this.object.quaternion))>wr||this._lastTargetPosition.distanceToSquared(this.target)>wr?(this.dispatchEvent(ic),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?sn/60*this.autoRotateSpeed*e:sn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Lt.setFromMatrixColumn(t,0),Lt.multiplyScalar(-e),this._panOffset.add(Lt)}_panUp(e,t){this.screenSpacePanning===!0?Lt.setFromMatrixColumn(t,1):(Lt.setFromMatrixColumn(t,0),Lt.crossVectors(this.object.up,Lt)),Lt.multiplyScalar(e),this._panOffset.add(Lt)}_pan(e,t){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Lt.copy(s).sub(this.target);let a=Lt.length();a*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*a/i.clientHeight,this.object.matrix),this._panUp(2*t*a/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=e-i.left,a=t-i.top,r=i.width,o=i.height;this._mouse.x=s/r*2-1,this._mouse.y=-(a/o)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-sn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(i,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyStart.set(0,a)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const i=this._getSecondPointerPosition(e),s=.5*(e.pageX+i.x),a=.5*(e.pageY+i.y);this._rotateEnd.set(s,a)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(sn*this._rotateDelta.x/t.clientHeight),this._rotateUp(sn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),i=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),i=e.pageX-t.x,s=e.pageY-t.y,a=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,a),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const r=(e.pageX+t.x)*.5,o=(e.pageY+t.y)*.5;this._updateZoomParameters(r,o)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new He,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,i={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function Gg(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function Vg(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function Wg(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Vc),this.state=dt.NONE;break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function Xg(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case as.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=dt.DOLLY;break;case as.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}break;case as.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=dt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=dt.PAN}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Xo)}function qg(n){switch(this.state){case dt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case dt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case dt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function Yg(n){this.enabled===!1||this.enableZoom===!1||this.state!==dt.NONE||(n.preventDefault(),this.dispatchEvent(Xo),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Vc))}function $g(n){this.enabled!==!1&&this._handleKeyDown(n)}function Kg(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case ns.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=dt.TOUCH_ROTATE;break;case ns.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=dt.TOUCH_PAN;break;default:this.state=dt.NONE}break;case 2:switch(this.touches.TWO){case ns.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=dt.TOUCH_DOLLY_PAN;break;case ns.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=dt.TOUCH_DOLLY_ROTATE;break;default:this.state=dt.NONE}break;default:this.state=dt.NONE}this.state!==dt.NONE&&this.dispatchEvent(Xo)}function Zg(n){switch(this._trackPointer(n),this.state){case dt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case dt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case dt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case dt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=dt.NONE}}function jg(n){this.enabled!==!1&&n.preventDefault()}function Jg(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function Qg(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}var An=Math.PI,xt=An*2,Rs=An/180,e0=1440,t0=398600.8,cn=6378.135,Kn=60/Math.sqrt(cn*cn*cn/t0),Rr=cn*Kn/60,n0=1/Kn,Pi=.001082616,i0=-253881e-11,s0=-165597e-11,Di=i0/Pi,ks=2/3,a0=1440/(2*An);function r0(n,e){for(var t=[31,n%4===0?29:28,31,30,31,30,31,31,30,31,30,31],i=Math.floor(e),s=1,a=0;i>a+t[s-1]&&s<12;)a+=t[s-1],s+=1;var r=s,o=i-a,l=(e-i)*24,c=Math.floor(l);l=(l-c)*60;var h=Math.floor(l),d=(l-h)*60;return{mon:r,day:o,hr:c,minute:h,sec:d}}function ac(n,e,t,i,s,a){var r=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;return 367*n-Math.floor(7*(n+Math.floor((e+9)/12))*.25)+Math.floor(275*e/9)+t+17210135e-1+((r/6e4+a/60+s)/60+i)/24}function qo(n,e,t,i,s,a){var r=arguments.length>6&&arguments[6]!==void 0?arguments[6]:0;if(n instanceof Date){var o=n;return ac(o.getUTCFullYear(),o.getUTCMonth()+1,o.getUTCDate(),o.getUTCHours(),o.getUTCMinutes(),o.getUTCSeconds(),o.getUTCMilliseconds())}return ac(n,e,t,i,s,a,r)}function Wc(n,e){var t=n.e3,i=n.ee2,s=n.peo,a=n.pgho,r=n.pho,o=n.pinco,l=n.plo,c=n.se2,h=n.se3,d=n.sgh2,f=n.sgh3,p=n.sgh4,g=n.sh2,x=n.sh3,m=n.si2,u=n.si3,R=n.sl2,w=n.sl3,y=n.sl4,A=n.t,b=n.xgh2,L=n.xgh3,D=n.xgh4,S=n.xh2,E=n.xh3,P=n.xi2,U=n.xi3,H=n.xl2,W=n.xl3,K=n.xl4,G=n.zmol,ee=n.zmos,V=e.init,ne=e.opsmode,fe=e.ep,pe=e.inclp,xe=e.nodep,$e=e.argpp,Ye=e.mp,ve,z,Z,he,we,de,Ge,je,C,Ne,Se,Re,ce,Pe,ue,ge,Ve,We,T,_,N,$=119459e-10,j=.01675,X=.00015835218,Me=.0549;N=ee+$*A,V==="y"&&(N=ee),_=N+2*j*Math.sin(N),Ve=Math.sin(_),Ne=.5*Ve*Ve-.25,Se=-.5*Ve*Math.cos(_);var ae=c*Ne+h*Se,Ee=m*Ne+u*Se,v=R*Ne+w*Se+y*Ve,Q=d*Ne+f*Se+p*Ve,oe=g*Ne+x*Se;N=G+X*A,V==="y"&&(N=G),_=N+2*Me*Math.sin(N),Ve=Math.sin(_),Ne=.5*Ve*Ve-.25,Se=-.5*Ve*Math.cos(_);var De=i*Ne+t*Se,be=P*Ne+U*Se,re=H*Ne+W*Se+K*Ve,Ie=b*Ne+L*Se+D*Ve,I=S*Ne+E*Se;return Re=ae+De,ue=Ee+be,ge=v+re,ce=Q+Ie,Pe=oe+I,V==="n"&&(Re-=s,ue-=o,ge-=l,ce-=a,Pe-=r,pe+=ue,fe+=Re,he=Math.sin(pe),Z=Math.cos(pe),pe>=.2?(Pe/=he,ce-=Z*Pe,$e+=ce,xe+=Pe,Ye+=ge):(de=Math.sin(xe),we=Math.cos(xe),ve=he*de,z=he*we,Ge=Pe*we+ue*Z*de,je=-Pe*de+ue*Z*we,ve+=Ge,z+=je,xe%=xt,xe<0&&ne==="a"&&(xe+=xt),We=Ye+$e+Z*xe,C=ge+ce-ue*xe*he,We+=C,T=xe,xe=Math.atan2(ve,z),xe<0&&ne==="a"&&(xe+=xt),Math.abs(T-xe)>An&&(xe<T?xe+=xt:xe-=xt),Ye+=ge,$e=We-Ye-Z*xe)),{ep:fe,inclp:pe,nodep:xe,argpp:$e,mp:Ye}}function o0(n){var e=n.epoch,t=n.ep,i=n.argpp,s=n.tc,a=n.inclp,r=n.nodep,o=n.np,l,c,h,d,f,p,g,x,m,u,R,w,y,A,b,L,D,S,E,P,U,H,W,K,G,ee,V,ne,fe,pe,xe,$e,Ye,ve,z,Z,he,we,de,Ge,je,C,Ne,Se,Re,ce,Pe,ue,ge,Ve,We,T,_,N,$,j,X,Me,ae,Ee,v,Q,oe,De=.01675,be=.0549,re=29864797e-13,Ie=47968065e-14,I=.39785416,ie=.91744867,se=.1945905,Te=-.98088458,te=o,J=t,Ae=Math.sin(r),Oe=Math.cos(r),Ke=Math.sin(i),Xe=Math.cos(i),yt=Math.sin(a),Et=Math.cos(a),me=J*J,Rt=1-me,Gt=Math.sqrt(Rt),Rn=0,at=0,mn=0,Qn=0,Cn=0,hn=e+18261.5+s/1440,Qt=(4.523602-.00092422029*hn)%xt,At=Math.sin(Qt),en=Math.cos(Qt),ei=.91375164-.03568096*en,ti=Math.sqrt(1-ei*ei),Ut=.089683511*At/ti,Nt=Math.sqrt(1-Ut*Ut),M=5.8351514+.001944368*hn,O=.39785416*At/ti,q=Nt*en+.91744867*Ut*At;O=Math.atan2(O,q),O+=M-Qt;var Y=Math.cos(O),B=Math.sin(O);P=se,U=Te,K=ie,G=I,H=Oe,W=Ae,R=re;for(var le=1/te,_e=0;_e<2;)_e+=1,l=P*H+U*K*W,h=-U*H+P*K*W,g=-P*W+U*K*H,x=U*G,m=U*W+P*K*H,u=P*G,c=Et*g+yt*x,d=Et*m+yt*u,f=-yt*g+Et*x,p=-yt*m+Et*u,w=l*Xe+c*Ke,y=h*Xe+d*Ke,A=-l*Ke+c*Xe,b=-h*Ke+d*Xe,L=f*Ke,D=p*Ke,S=f*Xe,E=p*Xe,v=12*w*w-3*A*A,Q=24*w*y-6*A*b,oe=12*y*y-3*b*b,T=3*(l*l+c*c)+v*me,_=6*(l*h+c*d)+Q*me,N=3*(h*h+d*d)+oe*me,$=-6*l*f+me*(-24*w*S-6*A*L),j=-6*(l*p+h*f)+me*(-24*(y*S+w*E)+-6*(A*D+b*L)),X=-6*h*p+me*(-24*y*E-6*b*D),Me=6*c*f+me*(24*w*L-6*A*S),ae=6*(d*f+c*p)+me*(24*(y*L+w*D)-6*(b*S+A*E)),Ee=6*d*p+me*(24*y*D-6*b*E),T=T+T+Rt*v,_=_+_+Rt*Q,N=N+N+Rt*oe,Pe=R*le,ce=-.5*Pe/Gt,ue=Pe*Gt,Re=-15*J*ue,ge=w*A+y*b,Ve=y*A+w*b,We=y*b-w*A,_e===1&&(ee=Re,V=ce,ne=Pe,fe=ue,pe=ge,xe=Ve,$e=We,Ye=T,ve=_,z=N,Z=$,he=j,we=X,de=Me,Ge=ae,je=Ee,C=v,Ne=Q,Se=oe,P=Y,U=B,K=ei,G=ti,H=Nt*Oe+Ut*Ae,W=Ae*Nt-Oe*Ut,R=Ie);var Le=(4.7199672+(.2299715*hn-M))%xt,Ce=(6.2565837+.017201977*hn)%xt,ze=2*ee*xe,Fe=2*ee*$e,Ue=2*V*he,Je=2*V*(we-Z),rt=-2*ne*ve,ft=-2*ne*(z-Ye),ct=-2*ne*(-21-9*me)*De,st=2*fe*Ne,Be=2*fe*(Se-C),ut=-18*fe*De,nt=-2*V*Ge,Ot=-2*V*(je-de),dn=2*Re*Ve,Vt=2*Re*We,Bn=2*ce*j,mt=2*ce*(X-$),tn=-2*Pe*_,nn=-2*Pe*(N-T),Wt=-2*Pe*(-21-9*me)*be,Xt=2*ue*Q,Ms=2*ue*(oe-v),zn=-18*ue*be,rh=-2*ce*ae,oh=-2*ce*(Ee-Me);return{snodm:Ae,cnodm:Oe,sinim:yt,cosim:Et,sinomm:Ke,cosomm:Xe,day:hn,e3:Vt,ee2:dn,em:J,emsq:me,gam:M,peo:Rn,pgho:Qn,pho:Cn,pinco:at,plo:mn,rtemsq:Gt,se2:ze,se3:Fe,sgh2:st,sgh3:Be,sgh4:ut,sh2:nt,sh3:Ot,si2:Ue,si3:Je,sl2:rt,sl3:ft,sl4:ct,s1:Re,s2:ce,s3:Pe,s4:ue,s5:ge,s6:Ve,s7:We,ss1:ee,ss2:V,ss3:ne,ss4:fe,ss5:pe,ss6:xe,ss7:$e,sz1:Ye,sz2:ve,sz3:z,sz11:Z,sz12:he,sz13:we,sz21:de,sz22:Ge,sz23:je,sz31:C,sz32:Ne,sz33:Se,xgh2:Xt,xgh3:Ms,xgh4:zn,xh2:rh,xh3:oh,xi2:Bn,xi3:mt,xl2:tn,xl3:nn,xl4:Wt,nm:te,z1:T,z2:_,z3:N,z11:$,z12:j,z13:X,z21:Me,z22:ae,z23:Ee,z31:v,z32:Q,z33:oe,zmol:Le,zmos:Ce}}function l0(n){var e=n.cosim,t=n.argpo,i=n.s1,s=n.s2,a=n.s3,r=n.s4,o=n.s5,l=n.sinim,c=n.ss1,h=n.ss2,d=n.ss3,f=n.ss4,p=n.ss5,g=n.sz1,x=n.sz3,m=n.sz11,u=n.sz13,R=n.sz21,w=n.sz23,y=n.sz31,A=n.sz33,b=n.t,L=n.tc,D=n.gsto,S=n.mo,E=n.mdot,P=n.no,U=n.nodeo,H=n.nodedot,W=n.xpidot,K=n.z1,G=n.z3,ee=n.z11,V=n.z13,ne=n.z21,fe=n.z23,pe=n.z31,xe=n.z33,$e=n.ecco,Ye=n.eccsq,ve=n.emsq,z=n.em,Z=n.argpm,he=n.inclm,we=n.mm,de=n.nm,Ge=n.nodem,je=n.irez,C=n.atime,Ne=n.d2201,Se=n.d2211,Re=n.d3210,ce=n.d3222,Pe=n.d4410,ue=n.d4422,ge=n.d5220,Ve=n.d5232,We=n.d5421,T=n.d5433,_=n.dedt,N=n.didt,$=n.dmdt,j=n.dnodt,X=n.domdt,Me=n.del1,ae=n.del2,Ee=n.del3,v=n.xfact,Q=n.xlamo,oe=n.xli,De=n.xni,be,re,Ie,I,ie,se,Te,te,J,Ae,Oe,Ke,Xe,yt,Et,me,Rt,Gt,Rn,at,mn,Qn,Cn,hn,Qt,At,en,ei,ti,Ut,Nt,M,O=17891679e-13,q=21460748e-13,Y=22123015e-14,B=17891679e-13,le=73636953e-16,_e=21765803e-16,Le=.0043752690880113,Ce=37393792e-14,ze=11428639e-14,Fe=.00015835218,Ue=119459e-10;je=0,de<.0052359877&&de>.0034906585&&(je=1),de>=.00826&&de<=.00924&&z>=.5&&(je=2);var Je=c*Ue*p,rt=h*Ue*(m+u),ft=-Ue*d*(g+x-14-6*ve),ct=f*Ue*(y+A-6),st=-Ue*h*(R+w);(he<.052359877||he>An-.052359877)&&(st=0),l!==0&&(st/=l);var Be=ct-e*st;_=Je+i*Fe*o,N=rt+s*Fe*(ee+V),$=ft-Fe*a*(K+G-14-6*ve);var ut=r*Fe*(pe+xe-6),nt=-Fe*s*(ne+fe);(he<.052359877||he>An-.052359877)&&(nt=0),X=Be+ut,j=st,l!==0&&(X-=e/l*nt,j+=nt/l);var Ot=0,dn=(D+L*Le)%xt;if(z+=_*b,he+=N*b,Z+=X*b,Ge+=j*b,we+=$*b,je!==0){if(Ut=Math.pow(de/Kn,ks),je===2){Nt=e*e;var Vt=z;z=$e;var Bn=ve;ve=Ye,M=z*ve,yt=-.306-(z-.64)*.44,z<=.65?(Et=3.616-13.247*z+16.29*ve,Rt=-19.302+117.39*z-228.419*ve+156.591*M,Gt=-18.9068+109.7927*z-214.6334*ve+146.5816*M,Rn=-41.122+242.694*z-471.094*ve+313.953*M,at=-146.407+841.88*z-1629.014*ve+1083.435*M,mn=-532.114+3017.977*z-5740.032*ve+3708.276*M):(Et=-72.099+331.819*z-508.738*ve+266.724*M,Rt=-346.844+1582.851*z-2415.925*ve+1246.113*M,Gt=-342.585+1554.908*z-2366.899*ve+1215.972*M,Rn=-1052.797+4758.686*z-7193.992*ve+3651.957*M,at=-3581.69+16178.11*z-24462.77*ve+12422.52*M,z>.715?mn=-5149.66+29936.92*z-54087.36*ve+31324.56*M:mn=1464.74-4664.75*z+3763.64*ve),z<.7?(hn=-919.2277+4988.61*z-9064.77*ve+5542.21*M,Qn=-822.71072+4568.6173*z-8491.4146*ve+5337.524*M,Cn=-853.666+4690.25*z-8624.77*ve+5341.4*M):(hn=-37995.78+161616.52*z-229838.2*ve+109377.94*M,Qn=-51752.104+218913.95*z-309468.16*ve+146349.42*M,Cn=-40023.88+170470.89*z-242699.48*ve+115605.82*M),Qt=l*l,be=.75*(1+2*e+Nt),re=1.5*Qt,I=1.875*l*(1-2*e-3*Nt),ie=-1.875*l*(1+2*e-3*Nt),Te=35*Qt*be,te=39.375*Qt*Qt,J=9.84375*l*(Qt*(1-2*e-5*Nt)+.33333333*(-2+4*e+6*Nt)),Ae=l*(4.92187512*Qt*(-2-4*e+10*Nt)+6.56250012*(1+2*e-3*Nt)),Oe=29.53125*l*(2-8*e+Nt*(-12+8*e+10*Nt)),Ke=29.53125*l*(-2-8*e+Nt*(12+8*e-10*Nt)),ei=de*de,ti=Ut*Ut,en=3*ei*ti,At=en*B,Ne=At*be*yt,Se=At*re*Et,en*=Ut,At=en*Ce,Re=At*I*Rt,ce=At*ie*Gt,en*=Ut,At=2*en*le,Pe=At*Te*Rn,ue=At*te*at,en*=Ut,At=en*ze,ge=At*J*mn,Ve=At*Ae*Cn,At=2*en*_e,We=At*Oe*Qn,T=At*Ke*hn,Q=(S+U+U-(dn+dn))%xt,v=E+$+2*(H+j-Le)-P,z=Vt,ve=Bn}je===1&&(Xe=1+ve*(-2.5+.8125*ve),Rt=1+2*ve,me=1+ve*(-6+6.60937*ve),be=.75*(1+e)*(1+e),Ie=.9375*l*l*(1+3*e)-.75*(1+e),se=1+e,se*=1.875*se*se,Me=3*de*de*Ut*Ut,ae=2*Me*be*Xe*O,Ee=3*Me*se*me*Y*Ut,Me=Me*Ie*Rt*q*Ut,Q=(S+U+t-dn)%xt,v=E+W+$+X+j-(P+Le)),oe=Q,De=P,C=0,de=P+Ot}return{em:z,argpm:Z,inclm:he,mm:we,nm:de,nodem:Ge,irez:je,atime:C,d2201:Ne,d2211:Se,d3210:Re,d3222:ce,d4410:Pe,d4422:ue,d5220:ge,d5232:Ve,d5421:We,d5433:T,dedt:_,didt:N,dmdt:$,dndt:Ot,dnodt:j,domdt:X,del1:Me,del2:ae,del3:Ee,xfact:v,xlamo:Q,xli:oe,xni:De}}function rc(n){var e=(n-2451545)/36525,t=-62e-7*e*e*e+.093104*e*e+(876600*3600+8640184812866e-6)*e+67310.54841;return t=t*Rs/240%xt,t<0&&(t+=xt),t}function Ys(n,e,t,i,s,a,r){return n instanceof Date?rc(qo(n)):rc(n)}function c0(n){var e=n.ecco,t=n.epoch,i=n.inclo,s=n.opsmode,a=n.no,r=e*e,o=1-r,l=Math.sqrt(o),c=Math.cos(i),h=c*c,d=Math.pow(Kn/a,ks),f=.75*Pi*(3*h-1)/(l*o),p=f/(d*d),g=d*(1-p*p-p*(1/3+134*p*p/81));p=f/(g*g),a/=1+p;var x=Math.pow(Kn/a,ks),m=Math.sin(i),u=x*o,R=1-5*h,w=-R-h-h,y=1/x,A=u*u,b=x*(1-e),L="n",D;if(s==="a"){var S=t-7305,E=Math.floor(S+1e-8),P=S-E,U=.017202791694070362,H=1.7321343856509375,W=5075514194322695e-30,K=U+xt;D=(H+U*E+K*P+S*S*W)%xt,D<0&&(D+=xt)}else D=Ys(t+24332815e-1);return{no:a,method:L,ainv:y,ao:x,con41:w,con42:R,cosio:c,cosio2:h,eccsq:r,omeosq:o,posq:A,rp:b,rteosq:l,sinio:m,gsto:D}}function h0(n){var e=n.irez,t=n.d2201,i=n.d2211,s=n.d3210,a=n.d3222,r=n.d4410,o=n.d4422,l=n.d5220,c=n.d5232,h=n.d5421,d=n.d5433,f=n.dedt,p=n.del1,g=n.del2,x=n.del3,m=n.didt,u=n.dmdt,R=n.dnodt,w=n.domdt,y=n.argpo,A=n.argpdot,b=n.t,L=n.tc,D=n.gsto,S=n.xfact,E=n.xlamo,P=n.no,U=n.atime,H=n.em,W=n.argpm,K=n.inclm,G=n.xli,ee=n.mm,V=n.xni,ne=n.nodem,fe=n.nm,pe=.13130908,xe=2.8843198,$e=.37448087,Ye=5.7686396,ve=.95240898,z=1.8014998,Z=1.050833,he=4.4108898,we=.0043752690880113,de=720,Ge=-720,je=259200,C,Ne,Se,Re,ce,Pe,ue,ge,Ve=0,We=0,T=(D+L*we)%xt;if(H+=f*b,K+=m*b,W+=w*b,ne+=R*b,ee+=u*b,e!==0){(U===0||b*U<=0||Math.abs(b)<Math.abs(U))&&(U=0,V=P,G=E),b>0?C=de:C=Ge;for(var _=381;_===381;)e!==2?(ue=p*Math.sin(G-pe)+g*Math.sin(2*(G-xe))+x*Math.sin(3*(G-$e)),ce=V+S,Pe=p*Math.cos(G-pe)+2*g*Math.cos(2*(G-xe))+3*x*Math.cos(3*(G-$e)),Pe*=ce):(ge=y+A*U,Se=ge+ge,Ne=G+G,ue=t*Math.sin(Se+G-Ye)+i*Math.sin(G-Ye)+s*Math.sin(ge+G-ve)+a*Math.sin(-ge+G-ve)+r*Math.sin(Se+Ne-z)+o*Math.sin(Ne-z)+l*Math.sin(ge+G-Z)+c*Math.sin(-ge+G-Z)+h*Math.sin(ge+Ne-he)+d*Math.sin(-ge+Ne-he),ce=V+S,Pe=t*Math.cos(Se+G-Ye)+i*Math.cos(G-Ye)+s*Math.cos(ge+G-ve)+a*Math.cos(-ge+G-ve)+l*Math.cos(ge+G-Z)+c*Math.cos(-ge+G-Z)+2*(r*Math.cos(Se+Ne-z)+o*Math.cos(Ne-z)+h*Math.cos(ge+Ne-he)+d*Math.cos(-ge+Ne-he)),Pe*=ce),Math.abs(b-U)>=de?_=381:(We=b-U,_=0),_===381&&(G+=ce*C+ue*je,V+=ue*C+Pe*je,U+=C);fe=V+ue*We+Pe*We*We*.5,Re=G+ce*We+ue*We*We*.5,e!==1?(ee=Re-2*ne+2*T,Ve=fe-P):(ee=Re-ne-W+T,Ve=fe-P),fe=P+Ve}return{atime:U,em:H,argpm:W,inclm:K,xli:G,mm:ee,xni:V,nodem:ne,dndt:Ve,nm:fe}}var ci;(function(n){n[n.None=0]="None",n[n.MeanEccentricityOutOfRange=1]="MeanEccentricityOutOfRange",n[n.MeanMotionBelowZero=2]="MeanMotionBelowZero",n[n.PerturbedEccentricityOutOfRange=3]="PerturbedEccentricityOutOfRange",n[n.SemiLatusRectumBelowZero=4]="SemiLatusRectumBelowZero",n[n.Decayed=6]="Decayed"})(ci||(ci={}));function Xc(n,e){var t,i,s,a,r,o,l,c,h,d,f,p,g,x,m,u,R,w,y,A,b,L,D,S,E,P,U,H=15e-13;n.t=e,n.error=ci.None;var W=n.mo+n.mdot*n.t,K=n.argpo+n.argpdot*n.t,G=n.nodeo+n.nodedot*n.t;h=K,b=W;var ee=n.t*n.t;if(D=G+n.nodecf*ee,R=1-n.cc1*n.t,w=n.bstar*n.cc4*n.t,y=n.t2cof*ee,n.isimp!==1){l=n.omgcof*n.t;var V=1+n.eta*Math.cos(W);o=n.xmcof*(V*V*V-n.delmo),u=l+o,b=W+u,h=K-u,p=ee*n.t,g=p*n.t,R=R-n.d2*ee-n.d3*p-n.d4*g,w+=n.bstar*n.cc5*(Math.sin(b)-n.sinmao),y=y+n.t3cof*p+g*(n.t4cof+n.t*n.t5cof)}L=n.no;var ne=n.ecco;if(A=n.inclo,n.method==="d"){x=n.t;var fe={irez:n.irez,d2201:n.d2201,d2211:n.d2211,d3210:n.d3210,d3222:n.d3222,d4410:n.d4410,d4422:n.d4422,d5220:n.d5220,d5232:n.d5232,d5421:n.d5421,d5433:n.d5433,dedt:n.dedt,del1:n.del1,del2:n.del2,del3:n.del3,didt:n.didt,dmdt:n.dmdt,dnodt:n.dnodt,domdt:n.domdt,argpo:n.argpo,argpdot:n.argpdot,t:n.t,tc:x,gsto:n.gsto,xfact:n.xfact,xlamo:n.xlamo,no:n.no,atime:n.atime,em:ne,argpm:h,inclm:A,xli:n.xli,mm:b,xni:n.xni,nodem:D,nm:L},pe=h0(fe);ne=pe.em,h=pe.argpm,A=pe.inclm,b=pe.mm,D=pe.nodem,L=pe.nm}if(L<=0)return n.error=ci.MeanMotionBelowZero,null;var xe=Math.pow(Kn/L,ks)*R*R;if(L=Kn/Math.pow(xe,1.5),ne-=w,ne>=1||ne<-.001)return n.error=ci.MeanEccentricityOutOfRange,null;ne<1e-6&&(ne=1e-6),b+=n.no*y,E=b+h+D,D%=xt,h%=xt,E%=xt,b=(E-h-D)%xt;var $e={am:xe,em:ne,im:A,Om:D,om:h,mm:b,nm:L},Ye=Math.sin(A),ve=Math.cos(A),z=ne;if(S=A,d=h,U=D,P=b,a=Ye,s=ve,n.method==="d"){var Z={inclo:n.inclo,init:"n",ep:z,inclp:S,nodep:U,argpp:d,mp:P,opsmode:n.operationmode},he=Wc(n,Z);if(z=he.ep,U=he.nodep,d=he.argpp,P=he.mp,S=he.inclp,S<0&&(S=-S,U+=An,d-=An),z<0||z>1)return n.error=ci.PerturbedEccentricityOutOfRange,null}n.method==="d"&&(a=Math.sin(S),s=Math.cos(S),n.aycof=-.5*Di*a,Math.abs(s+1)>15e-13?n.xlcof=-.25*Di*a*(3+5*s)/(1+s):n.xlcof=-.25*Di*a*(3+5*s)/H);var we=z*Math.cos(d);u=1/(xe*(1-z*z));var de=z*Math.sin(d)+u*n.aycof,Ge=P+d+U+u*n.xlcof*we,je=(Ge-U)%xt;c=je,m=9999.9;for(var C=1;Math.abs(m)>=1e-12&&C<=10;)i=Math.sin(c),t=Math.cos(c),m=1-t*we-i*de,m=(je-de*t+we*i-c)/m,Math.abs(m)>=.95&&(m>0?m=.95:m=-.95),c+=m,C+=1;var Ne=we*t+de*i,Se=we*i-de*t,Re=we*we+de*de,ce=xe*(1-Re);if(ce<0)return n.error=ci.SemiLatusRectumBelowZero,null;var Pe=xe*(1-Ne),ue=Math.sqrt(xe)*Se/Pe,ge=Math.sqrt(ce)/Pe,Ve=Math.sqrt(1-Re);u=Se/(1+Ve);var We=xe/Pe*(i-de-we*u),T=xe/Pe*(t-we+de*u);f=Math.atan2(We,T);var _=(T+T)*We,N=1-2*We*We;u=1/ce;var $=.5*Pi*u,j=$*u;n.method==="d"&&(r=s*s,n.con41=3*r-1,n.x1mth2=1-r,n.x7thm1=7*r-1);var X=Pe*(1-1.5*j*Ve*n.con41)+.5*$*n.x1mth2*N;if(X<1)return n.error=ci.Decayed,null;f-=.25*j*n.x7thm1*_;var Me=U+1.5*j*s*_,ae=S+1.5*j*s*a*N,Ee=ue-L*$*n.x1mth2*_/Kn,v=ge+L*$*(n.x1mth2*N+1.5*n.con41)/Kn,Q=Math.sin(f),oe=Math.cos(f),De=Math.sin(Me),be=Math.cos(Me),re=Math.sin(ae),Ie=Math.cos(ae),I=-De*Ie,ie=be*Ie,se=I*Q+be*oe,Te=ie*Q+De*oe,te=re*Q,J=I*oe-be*Q,Ae=ie*oe-De*Q,Oe=re*oe,Ke={x:X*se*cn,y:X*Te*cn,z:X*te*cn},Xe={x:(Ee*se+v*J)*Rr,y:(Ee*Te+v*Ae)*Rr,z:(Ee*te+v*Oe)*Rr};return{position:Ke,velocity:Xe,meanElements:$e}}function d0(n,e){var t=e.opsmode,i=e.epoch,s=e.xbstar,a=e.xecco,r=e.xargpo,o=e.xinclo,l=e.xmo,c=e.xno,h=e.xnodeo,d,f,p,g,x,m,u,R,w,y,A,b,L,D,S,E,P,U,H,W,K,G,ee,V,ne,fe,pe,xe,$e,Ye,ve,z,Z,he,we,de,Ge,je,C,Ne,Se,Re,ce,Pe,ue,ge,Ve,We,T,_,N,$,j,X,Me,ae,Ee=15e-13,v=n;v.isimp=0,v.method="n",v.aycof=0,v.con41=0,v.cc1=0,v.cc4=0,v.cc5=0,v.d2=0,v.d3=0,v.d4=0,v.delmo=0,v.eta=0,v.argpdot=0,v.omgcof=0,v.sinmao=0,v.t=0,v.t2cof=0,v.t3cof=0,v.t4cof=0,v.t5cof=0,v.x1mth2=0,v.x7thm1=0,v.mdot=0,v.nodedot=0,v.xlcof=0,v.xmcof=0,v.nodecf=0,v.irez=0,v.d2201=0,v.d2211=0,v.d3210=0,v.d3222=0,v.d4410=0,v.d4422=0,v.d5220=0,v.d5232=0,v.d5421=0,v.d5433=0,v.dedt=0,v.del1=0,v.del2=0,v.del3=0,v.didt=0,v.dmdt=0,v.dnodt=0,v.domdt=0,v.e3=0,v.ee2=0,v.peo=0,v.pgho=0,v.pho=0,v.pinco=0,v.plo=0,v.se2=0,v.se3=0,v.sgh2=0,v.sgh3=0,v.sgh4=0,v.sh2=0,v.sh3=0,v.si2=0,v.si3=0,v.sl2=0,v.sl3=0,v.sl4=0,v.gsto=0,v.xfact=0,v.xgh2=0,v.xgh3=0,v.xgh4=0,v.xh2=0,v.xh3=0,v.xi2=0,v.xi3=0,v.xl2=0,v.xl3=0,v.xl4=0,v.xlamo=0,v.zmol=0,v.zmos=0,v.atime=0,v.xli=0,v.xni=0,v.bstar=s,v.ecco=a,v.argpo=r,v.inclo=o,v.mo=l,v.no=c,v.nodeo=h,v.operationmode=t;var Q=78/cn+1,oe=42/cn,De=oe*oe*oe*oe;v.init="y",v.t=0;var be={ecco:v.ecco,epoch:i,inclo:v.inclo,no:v.no,method:v.method,opsmode:v.operationmode},re=c0(be),Ie=re.ao,I=re.con42,ie=re.cosio,se=re.cosio2,Te=re.eccsq,te=re.omeosq,J=re.posq,Ae=re.rp,Oe=re.rteosq,Ke=re.sinio;if(v.no=re.no,v.con41=re.con41,v.gsto=re.gsto,v.a=Math.pow(v.no*n0,-2/3),v.alta=v.a*(1+v.ecco)-1,v.altp=v.a*(1-v.ecco)-1,v.error=0,te>=0||v.no>=0){if(v.isimp=0,Ae<220/cn+1&&(v.isimp=1),pe=Q,K=De,U=(Ae-1)*cn,U<156){pe=U-78,U<98&&(pe=20);var Xe=(120-pe)/cn;K=Xe*Xe*Xe*Xe,pe=pe/cn+1}H=1/J,ge=1/(Ie-pe),v.eta=Ie*v.ecco*ge,b=v.eta*v.eta,A=v.ecco*v.eta,W=Math.abs(1-b),m=K*Math.pow(ge,4),u=m/Math.pow(W,3.5),g=u*v.no*(Ie*(1+1.5*b+A*(4+b))+.375*Pi*ge/W*v.con41*(8+3*b*(8+b))),v.cc1=v.bstar*g,x=0,v.ecco>1e-4&&(x=-2*m*ge*Di*v.no*Ke/v.ecco),v.x1mth2=1-se,v.cc4=2*v.no*u*Ie*te*(v.eta*(2+.5*b)+v.ecco*(.5+2*b)-Pi*ge/(Ie*W)*(-3*v.con41*(1-2*A+b*(1.5-.5*A))+.75*v.x1mth2*(2*b-A*(1+b))*Math.cos(2*v.argpo))),v.cc5=2*u*Ie*te*(1+2.75*(b+A)+A*b),R=se*se,ce=1.5*Pi*H*v.no,Pe=.5*ce*Pi*H,ue=-.46875*s0*H*H*v.no,v.mdot=v.no+.5*ce*Oe*v.con41+.0625*Pe*Oe*(13-78*se+137*R),v.argpdot=-.5*ce*I+.0625*Pe*(7-114*se+395*R)+ue*(3-36*se+49*R),We=-ce*ie,v.nodedot=We+(.5*Pe*(4-19*se)+2*ue*(3-7*se))*ie,Ve=v.argpdot+v.nodedot,v.omgcof=v.bstar*x*Math.cos(v.argpo),v.xmcof=0,v.ecco>1e-4&&(v.xmcof=-ks*m*v.bstar/A),v.nodecf=3.5*te*We*v.cc1,v.t2cof=1.5*v.cc1,Math.abs(ie+1)>15e-13?v.xlcof=-.25*Di*Ke*(3+5*ie)/(1+ie):v.xlcof=-.25*Di*Ke*(3+5*ie)/Ee,v.aycof=-.5*Di*Ke;var yt=1+v.eta*Math.cos(v.mo);if(v.delmo=yt*yt*yt,v.sinmao=Math.sin(v.mo),v.x7thm1=7*se-1,2*An/v.no>=225){v.method="d",v.isimp=1,Se=0,S=v.inclo;var Et={epoch:i,ep:v.ecco,argpp:v.argpo,tc:Se,inclp:v.inclo,nodep:v.nodeo,np:v.no,e3:v.e3,ee2:v.ee2,peo:v.peo,pgho:v.pgho,pho:v.pho,pinco:v.pinco,plo:v.plo,se2:v.se2,se3:v.se3,sgh2:v.sgh2,sgh3:v.sgh3,sgh4:v.sgh4,sh2:v.sh2,sh3:v.sh3,si2:v.si2,si3:v.si3,sl2:v.sl2,sl3:v.sl3,sl4:v.sl4,xgh2:v.xgh2,xgh3:v.xgh3,xgh4:v.xgh4,xh2:v.xh2,xh3:v.xh3,xi2:v.xi2,xi3:v.xi3,xl2:v.xl2,xl3:v.xl3,xl4:v.xl4,zmol:v.zmol,zmos:v.zmos},me=o0(Et);v.e3=me.e3,v.ee2=me.ee2,v.peo=me.peo,v.pgho=me.pgho,v.pho=me.pho,v.pinco=me.pinco,v.plo=me.plo,v.se2=me.se2,v.se3=me.se3,v.sgh2=me.sgh2,v.sgh3=me.sgh3,v.sgh4=me.sgh4,v.sh2=me.sh2,v.sh3=me.sh3,v.si2=me.si2,v.si3=me.si3,v.sl2=me.sl2,v.sl3=me.sl3,v.sl4=me.sl4,f=me.sinim,d=me.cosim,w=me.em,y=me.emsq,G=me.s1,ee=me.s2,V=me.s3,ne=me.s4,fe=me.s5,xe=me.ss1,$e=me.ss2,Ye=me.ss3,ve=me.ss4,z=me.ss5,Z=me.sz1,he=me.sz3,we=me.sz11,de=me.sz13,Ge=me.sz21,je=me.sz23,C=me.sz31,Ne=me.sz33,v.xgh2=me.xgh2,v.xgh3=me.xgh3,v.xgh4=me.xgh4,v.xh2=me.xh2,v.xh3=me.xh3,v.xi2=me.xi2,v.xi3=me.xi3,v.xl2=me.xl2,v.xl3=me.xl3,v.xl4=me.xl4,v.zmol=me.zmol,v.zmos=me.zmos,P=me.nm,T=me.z1,_=me.z3,N=me.z11,$=me.z13,j=me.z21,X=me.z23,Me=me.z31,ae=me.z33;var Rt={inclo:S,init:v.init,ep:v.ecco,inclp:v.inclo,nodep:v.nodeo,argpp:v.argpo,mp:v.mo,opsmode:v.operationmode},Gt=Wc(v,Rt);v.ecco=Gt.ep,v.inclo=Gt.inclp,v.nodeo=Gt.nodep,v.argpo=Gt.argpp,v.mo=Gt.mp,L=0,D=0,E=0;var Rn={cosim:d,emsq:y,argpo:v.argpo,s1:G,s2:ee,s3:V,s4:ne,s5:fe,sinim:f,ss1:xe,ss2:$e,ss3:Ye,ss4:ve,ss5:z,sz1:Z,sz3:he,sz11:we,sz13:de,sz21:Ge,sz23:je,sz31:C,sz33:Ne,t:v.t,tc:Se,gsto:v.gsto,mo:v.mo,mdot:v.mdot,no:v.no,nodeo:v.nodeo,nodedot:v.nodedot,xpidot:Ve,z1:T,z3:_,z11:N,z13:$,z21:j,z23:X,z31:Me,z33:ae,ecco:v.ecco,eccsq:Te,em:w,argpm:L,inclm:S,mm:E,nm:P,nodem:D,irez:v.irez,atime:v.atime,d2201:v.d2201,d2211:v.d2211,d3210:v.d3210,d3222:v.d3222,d4410:v.d4410,d4422:v.d4422,d5220:v.d5220,d5232:v.d5232,d5421:v.d5421,d5433:v.d5433,dedt:v.dedt,didt:v.didt,dmdt:v.dmdt,dnodt:v.dnodt,domdt:v.domdt,del1:v.del1,del2:v.del2,del3:v.del3,xfact:v.xfact,xlamo:v.xlamo,xli:v.xli,xni:v.xni},at=l0(Rn);v.irez=at.irez,v.atime=at.atime,v.d2201=at.d2201,v.d2211=at.d2211,v.d3210=at.d3210,v.d3222=at.d3222,v.d4410=at.d4410,v.d4422=at.d4422,v.d5220=at.d5220,v.d5232=at.d5232,v.d5421=at.d5421,v.d5433=at.d5433,v.dedt=at.dedt,v.didt=at.didt,v.dmdt=at.dmdt,v.dnodt=at.dnodt,v.domdt=at.domdt,v.del1=at.del1,v.del2=at.del2,v.del3=at.del3,v.xfact=at.xfact,v.xlamo=at.xlamo,v.xli=at.xli,v.xni=at.xni}v.isimp!==1&&(p=v.cc1*v.cc1,v.d2=4*Ie*ge*p,Re=v.d2*ge*v.cc1/3,v.d3=(17*Ie+pe)*Re,v.d4=.5*Re*Ie*ge*(221*Ie+31*pe)*v.cc1,v.t3cof=v.d2+2*p,v.t4cof=.25*(3*v.d3+v.cc1*(12*v.d2+10*p)),v.t5cof=.2*(3*v.d4+12*v.cc1*v.d3+6*v.d2*v.d2+15*p*(2*v.d2+p)))}Xc(v,0),v.init="n"}function u0(n){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"i",t=0,i=n.NORAD_CAT_ID.toString(),s=new Date(n.EPOCH.endsWith("Z")?n.EPOCH:n.EPOCH+"Z"),a=s.getUTCFullYear(),r=Number(a.toString().slice(-2)),o=(s.valueOf()-new Date(Date.UTC(a,0,1,0,0,0)).valueOf())/(86400*1e3)+1,l=Number(n.MEAN_MOTION_DOT),c=Number(n.MEAN_MOTION_DDOT),h=Number(n.BSTAR),d=Number(n.INCLINATION)*Rs,f=Number(n.RA_OF_ASC_NODE)*Rs,p=Number(n.ECCENTRICITY),g=Number(n.ARG_OF_PERICENTER)*Rs,x=Number(n.MEAN_ANOMALY)*Rs,m=Number(n.MEAN_MOTION)/a0,u=r0(a,o),R=u.mon,w=u.day,y=u.hr,A=u.minute,b=u.sec,L=qo(a,R,w,y,A,b),D={error:t,satnum:i,epochyr:r,epochdays:o,ndot:l,nddot:c,bstar:h,inclo:d,nodeo:f,ecco:p,argpo:g,mo:x,no:m,jdsatepoch:L};return d0(D,{opsmode:e,satn:D.satnum,epoch:D.jdsatepoch-24332815e-1,xbstar:D.bstar,xecco:D.ecco,xargpo:D.argpo,xinclo:D.inclo,xmo:D.mo,xno:D.no,xnodeo:D.nodeo}),D}function qc(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),i=1;i<e;i++)t[i-1]=arguments[i];var s=qo.apply(void 0,t),a=(s-n.jdsatepoch)*e0;return Xc(n,a)}function Yc(n,e){for(var t=6378.137,i=6356.7523142,s=Math.sqrt(n.x*n.x+n.y*n.y),a=(t-i)/t,r=2*a-a*a,o=Math.atan2(n.y,n.x)-e;o<-An;)o+=xt;for(;o>An;)o-=xt;for(var l=20,c=0,h=Math.atan2(n.z,Math.sqrt(n.x*n.x+n.y*n.y)),d;c++<l;)d=1/Math.sqrt(1-r*(Math.sin(h)*Math.sin(h))),h=Math.atan2(n.z+t*d*r*Math.sin(h),s);var f=s/Math.cos(h)-t*d;return{longitude:o,latitude:h,height:f}}function f0(n,e){var t=n.x*Math.cos(e)+n.y*Math.sin(e),i=n.x*-Math.sin(e)+n.y*Math.cos(e),s=n.z;return{x:t,y:i,z:s}}const $c=(n,e,t=[])=>{const i=document.createElementNS("http://www.w3.org/2000/svg",n);return Object.keys(e).forEach(s=>{i.setAttribute(s,String(e[s]))}),t.length&&t.forEach(s=>{const a=$c(...s);i.appendChild(a)}),i};var p0=([n,e,t])=>$c(n,e,t);const m0=n=>Array.from(n.attributes).reduce((e,t)=>(e[t.name]=t.value,e),{}),g0=n=>typeof n=="string"?n:!n||!n.class?"":n.class&&typeof n.class=="string"?n.class.split(" "):n.class&&Array.isArray(n.class)?n.class:"",v0=n=>n.flatMap(g0).map(t=>t.trim()).filter(Boolean).filter((t,i,s)=>s.indexOf(t)===i).join(" "),_0=n=>n.replace(/(\w)(\w*)(_|-|\s*)/g,(e,t,i)=>t.toUpperCase()+i.toLowerCase()),oc=(n,{nameAttr:e,icons:t,attrs:i})=>{const s=n.getAttribute(e);if(s==null)return;const a=_0(s),r=t[a];if(!r)return console.warn(`${n.outerHTML} icon name was not found in the provided icons object.`);const o=m0(n),[l,c,h]=r,d={...c,"data-lucide":s,...i,...o},f=v0(["lucide",`lucide-${s}`,o,i]);f&&Object.assign(d,{class:f});const p=p0([l,d,h]);return n.parentNode?.replaceChild(p,n)};const Tt={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"};const x0=["svg",Tt,[["path",{d:"M2 12 7 2"}],["path",{d:"m7 12 5-10"}],["path",{d:"m12 12 5-10"}],["path",{d:"m17 12 5-10"}],["path",{d:"M4.5 7h15"}],["path",{d:"M12 16v6"}]]];const M0=["svg",Tt,[["path",{d:"M7 7h10v10"}],["path",{d:"M7 17 17 7"}]]];const S0=["svg",Tt,[["path",{d:"m9 18 6-6-6-6"}]]];const y0=["svg",Tt,[["path",{d:"m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"}],["circle",{cx:"12",cy:"12",r:"10"}]]];const E0=["svg",Tt,[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"}]]];const b0=["svg",Tt,[["circle",{cx:"12",cy:"12",r:"3"}],["path",{d:"M3 7V5a2 2 0 0 1 2-2h2"}],["path",{d:"M17 3h2a2 2 0 0 1 2 2v2"}],["path",{d:"M21 17v2a2 2 0 0 1-2 2h-2"}],["path",{d:"M7 21H5a2 2 0 0 1-2-2v-2"}]]];const T0=["svg",Tt,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"}],["path",{d:"M2 12h20"}]]];const A0=["svg",Tt,[["circle",{cx:"12",cy:"12",r:"10"}],["path",{d:"M12 16v-4"}],["path",{d:"M12 8h.01"}]]];const w0=["svg",Tt,[["path",{d:"M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"}],["path",{d:"M15 5.764v15"}],["path",{d:"M9 3.236v15"}]]];const R0=["svg",Tt,[["path",{d:"M5 12h14"}]]];const C0=["svg",Tt,[["circle",{cx:"12",cy:"12",r:"3"}],["circle",{cx:"19",cy:"5",r:"2"}],["circle",{cx:"5",cy:"19",r:"2"}],["path",{d:"M10.4 21.9a10 10 0 0 0 9.941-15.416"}],["path",{d:"M13.5 2.1a10 10 0 0 0-9.841 15.416"}]]];const L0=["svg",Tt,[["rect",{x:"14",y:"4",width:"4",height:"16",rx:"1"}],["rect",{x:"6",y:"4",width:"4",height:"16",rx:"1"}]]];const P0=["svg",Tt,[["polygon",{points:"6 3 20 12 6 21 6 3"}]]];const D0=["svg",Tt,[["path",{d:"M5 12h14"}],["path",{d:"M12 5v14"}]]];const I0=["svg",Tt,[["path",{d:"M4.9 19.1C1 15.2 1 8.8 4.9 4.9"}],["path",{d:"M7.8 16.2c-2.3-2.3-2.3-6.1 0-8.5"}],["circle",{cx:"12",cy:"12",r:"2"}],["path",{d:"M16.2 7.8c2.3 2.3 2.3 6.1 0 8.5"}],["path",{d:"M19.1 4.9C23 8.8 23 15.1 19.1 19"}]]];const U0=["svg",Tt,[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"}],["path",{d:"M3 3v5h5"}]]];const N0=["svg",Tt,[["path",{d:"M13 7 9 3 5 7l4 4"}],["path",{d:"m17 11 4 4-4 4-4-4"}],["path",{d:"m8 12 4 4 6-6-4-4Z"}],["path",{d:"m16 8 3-3"}],["path",{d:"M9 21a6 6 0 0 0-6-6"}]]];const O0=["svg",Tt,[["circle",{cx:"11",cy:"11",r:"8"}],["path",{d:"m21 21-4.3-4.3"}]]];const F0=["svg",Tt,[["path",{d:"M2 20h.01"}],["path",{d:"M7 20v-4"}],["path",{d:"M12 20v-8"}],["path",{d:"M17 20V8"}],["path",{d:"M22 4v16"}]]];const B0=["svg",Tt,[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z"}],["path",{d:"M20 3v4"}],["path",{d:"M22 5h-4"}],["path",{d:"M4 17v2"}],["path",{d:"M5 18H3"}]]];const z0=["svg",Tt,[["circle",{cx:"12",cy:"12",r:"10"}],["circle",{cx:"12",cy:"12",r:"6"}],["circle",{cx:"12",cy:"12",r:"2"}]]];const k0=["svg",Tt,[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]]];const H0=({icons:n={},nameAttr:e="data-lucide",attrs:t={}}={})=>{if(!Object.values(n).length)throw new Error(`Please provide an icons object.
If you want to use all the icons you can import it like:
 \`import { createIcons, icons } from 'lucide';
lucide.createIcons({icons});\``);if(typeof document>"u")throw new Error("`createIcons()` only works in a browser environment.");const i=document.querySelectorAll(`[${e}]`);if(Array.from(i).forEach(s=>oc(s,{nameAttr:e,icons:n,attrs:t})),e==="data-lucide"){const s=document.querySelectorAll("[icon-name]");s.length>0&&(console.warn("[Lucide] Some icons were found with the now deprecated icon-name attribute. These will still be replaced for backwards compatibility, but will no longer be supported in v1.0 and you should switch to data-lucide"),Array.from(s).forEach(a=>oc(a,{nameAttr:"icon-name",icons:n,attrs:t})))}};class G0{direction=null;start(e){this.direction=e.clone().normalize()}stop(){this.direction=null}update(e,t,i){if(!this.direction||t.lengthSq()===0)return;const s=t.clone().normalize(),a=new jn().setFromUnitVectors(this.direction,s);e.sub(i).applyQuaternion(a).add(t),i.copy(t),this.direction.copy(s)}get active(){return this.direction!==null}}class V0{constructor(e=Date.now()){this.time=e,this.speed=1,this.paused=!1,this.live=!0}tick(e,t=Date.now()){return this.live&&!this.paused?this.time=t:this.paused||(this.time+=e*this.speed),this.time}setSpeed(e){this.speed=e,this.live=!1}reset(){this.time=Date.now(),this.speed=1,this.paused=!1,this.live=!0}seek(e){this.time=e,this.live=!1}}function W0(n){const e=Math.round(Math.abs(n));if(e===0)return"Maintenant";const t=Math.floor(e/60),i=e%60;return`${n>0?"+":"−"}${t} h ${i} min`}const X0=[{title:"Flotte Viasat (SEC Filing & Investor Relations)",url:"https://investors.viasat.com/"},{title:"Constellation ViaSat-3 (Americas, EMEA, APAC)",url:"https://www.viasat.com/space-innovation/satellite-fleet/viasat-3/"},{title:"Flotte Viasat / Inmarsat Global Xpress",url:"https://www.viasat.com/enterprise-mobility/satellite-network/"},{title:"Entrée en service des satellites arctiques ASBM / GX10",url:"https://investors.viasat.com/news-releases/news-release-details/viasats-arctic-broadband-dedicated-coverage-advances-payloads"},{title:"Données CelesTrak OMM / SGP4",url:"https://celestrak.org/NORAD/documentation/gp-data-formats.php"}],q0=[{id:37843,name:"ViaSat-1",alias:"Ka VHTS · Amérique du Nord",band:"Ka",status:"service",category:"viasat",capacity:"140 Gbps",orbitalSlot:"115.1° O",nominalLon:-115.1,region:"Amérique du Nord (USA & Canada)",serviceSpotRadiusDeg:24,spotBeamType:"Ka Spot Beams régionaux",coverageZone:{name:"Amérique du Nord (CONUS & Canada)",bounds:{minLat:22,maxLat:58,minLon:-128,maxLon:-64},center:{lat:39,lon:-98},countries:["États-Unis (50 États, CONUS & Hawaï)","Canada (Sud & Est)","Nord du Mexique"],services:["WiFi en vol (Delta, United, JetBlue)","Internet résidentiel Ka","Affaires & Défense"],beamArchitecture:"72 Spot Beams Ka régionaux haute densité",peakThroughput:"140 Gbps"},description:"Pionnier du très haut débit satellitaire résidentiel et mobilité aérienne aux États-Unis.",launchDate:"2011-10-19",launchVehicle:"Proton-M / Briz-M",order:1},{id:42740,name:"ViaSat-2",alias:"Ka VHTS · Amériques & Atlantique",band:"Ka",status:"service",category:"viasat",capacity:"260 Gbps",orbitalSlot:"69.9° O",nominalLon:-69.9,region:"Amériques, Caraïbes & Atlantique Nord",serviceSpotRadiusDeg:28,spotBeamType:"Ka VHTS Haute Capacité",coverageZone:{name:"Amériques, Caraïbes & Corridor Atlantique",bounds:{minLat:10,maxLat:62,minLon:-125,maxLon:-20},center:{lat:35,lon:-70},countries:["États-Unis","Canada","Mexique","Caraïbes & Amérique centrale","Corridor aérien Atlantique Nord"],services:["WiFi transatlantique en vol","Aviation commerciale","Maritime & Yachting","Gouvernemental"],beamArchitecture:"Ka VHTS dynamique & couloirs aéronautiques",peakThroughput:"260 Gbps"},description:"Doublement de capacité et extension de couverture vers les routes aériennes et maritimes transatlantiques.",launchDate:"2017-06-01",launchVehicle:"Ariane 5 ECA",order:2},{id:56370,name:"ViaSat-3 Americas",alias:"F1 · Ultra VHTS Amériques",band:"Ka",status:"service",category:"viasat",capacity:"~1 000 Gbps (partiel)",orbitalSlot:"88.9° O",nominalLon:-88.9,region:"Continent américain & Océans",serviceSpotRadiusDeg:34,spotBeamType:"Ultra VHTS Terabit Ka",coverageZone:{name:"Continent américain & Zones maritimes",bounds:{minLat:-55,maxLat:65,minLon:-135,maxLon:-35},center:{lat:10,lon:-85},countries:["Amérique du Nord (USA, Canada, Mexique)","Amérique centrale & Caraïbes","Amérique du Sud (Brésil, Colombie, Argentine)"],services:["Connectivité aérienne globale","Ultra VHTS Terabit","Défense & Sécurité","Entreprises"],beamArchitecture:"Faisceaux numériques orientables ultra-denses",peakThroughput:"~1 000 Gbps"},description:"Satellite de classe terabit fournissant de la connectivité commerciale à haute densité sur le continent américain.",launchDate:"2023-05-01",launchVehicle:"Falcon Heavy",order:3},{id:66454,name:"ViaSat-3 F2",alias:"F2 · Ultra VHTS Amériques",band:"Ka",status:"service",category:"viasat",capacity:"1 000 Gbps",orbitalSlot:"Positionnement orbital Amériques",nominalLon:-75,region:"Amériques & Océan Atlantique (Americas)",serviceSpotRadiusDeg:34,spotBeamType:"Ultra VHTS Terabit Ka",coverageZone:{name:"Amériques & Océan Atlantique (Americas)",bounds:{minLat:-55,maxLat:65,minLon:-135,maxLon:-20},center:{lat:15,lon:-75},countries:["Amérique du Nord (USA, Canada, Mexique)","Amérique centrale & Caraïbes","Amérique du Sud","Corridor Atlantique"],services:["WiFi en vol VHTS","Haut débit commercial & résidentiel","Affaires & Défense"],beamArchitecture:"Ultra VHTS Terabit Ka Amériques",peakThroughput:"1 000 Gbps"},description:"Deuxième unité de la constellation mondiale ViaSat-3, entrée en service commercial le 17 septembre 2026 pour renforcer la capacité sur le continent américain.",launchDate:"2026",launchVehicle:"Falcon Heavy",order:4},{id:68893,name:"ViaSat-3 F3",alias:"F3 · Ultra VHTS Asie-Pacifique",band:"Ka",status:"service",category:"viasat",capacity:"1 000 Gbps",orbitalSlot:"Positionnement orbital APAC",nominalLon:140,region:"Asie-Pacifique & Océanie",serviceSpotRadiusDeg:32,spotBeamType:"Ultra VHTS Terabit Ka",coverageZone:{name:"Asie-Pacifique & Océanie",bounds:{minLat:-45,maxLat:60,minLon:70,maxLon:175},center:{lat:5,lon:125},countries:["Asie de l'Est (Japon, Corée)","Asie du Sud-Est","Australie & Nouvelle-Zélande","Inde"],services:["Aviation transpacifique","Mobilité maritime APAC","Gouvernemental"],beamArchitecture:"Ultra VHTS Terabit Ka APAC",peakThroughput:"1 000 Gbps"},description:"Troisième pilier de la constellation globale terabit/s pour la couverture de la région Asie-Pacifique, entré en service en août 2026.",launchDate:"2026",launchVehicle:"Falcon Heavy",order:5},{id:29643,name:"WildBlue-1",alias:"Viasat US · Réserve opérationnelle",band:"Ka",status:"reserve",category:"viasat",capacity:"Faisceau continental",orbitalSlot:"111.1° O",nominalLon:-111.1,region:"États-Unis continentaux (CONUS)",serviceSpotRadiusDeg:20,spotBeamType:"Ka Faisceau continental US",coverageZone:{name:"États-Unis continentaux (CONUS)",bounds:{minLat:25,maxLat:50,minLon:-125,maxLon:-66},center:{lat:38,lon:-97},countries:["États-Unis continentaux (CONUS)"],services:["Internet résidentiel de secours","Télémesure & réserve"],beamArchitecture:"35 Spot Beams Ka CONUS",peakThroughput:"Faisceau continental"},launchDate:"2006-12-08",launchVehicle:"Ariane 5 ECA",order:6},{id:39476,name:"I-5 F1",alias:"GX1 · Moyen-Orient & Asie",band:"Ka",status:"service",category:"gx",capacity:"Global Xpress Ka",orbitalSlot:"62.6° E",nominalLon:62.6,region:"Moyen-Orient & Océan Indien",serviceSpotRadiusDeg:36,spotBeamType:"GX Faisceau régional Ka",coverageZone:{name:"Moyen-Orient, Océan Indien & Asie du Sud",bounds:{minLat:-35,maxLat:58,minLon:20,maxLon:105},center:{lat:18,lon:65},countries:["Moyen-Orient (Golfe, Émirats, Arabie)","Sous-continent indien","Asie centrale","Océan Indien"],services:["Global Xpress Ka commercial","Aviation (Emirates, Qatar Airways)","Maritime commercial"],beamArchitecture:"GX Ka Spot Beams + Faisceaux orientables steerable",peakThroughput:"Réseau Global Xpress"},description:"Premier satellite du réseau mondial haut débit Global Xpress (GX).",launchDate:"2013-12-08",launchVehicle:"Proton-M / Briz-M",order:7},{id:40384,name:"I-5 F2",alias:"GX2 · Amériques & Atlantique",band:"Ka",status:"service",category:"gx",capacity:"Global Xpress Ka",orbitalSlot:"55.0° O",nominalLon:-55,region:"Amériques & Océan Atlantique",serviceSpotRadiusDeg:36,spotBeamType:"GX Faisceau régional Ka",coverageZone:{name:"Amériques & Océan Atlantique",bounds:{minLat:-55,maxLat:62,minLon:-120,maxLon:-5},center:{lat:10,lon:-60},countries:["Amériques (Nord & Sud)","Océan Atlantique","Caraïbes"],services:["GX Ka Aviation & Maritime","Offshore pétrolier & gazier","Militaire & Gouvernement"],beamArchitecture:"GX Ka Spot Beams Amériques",peakThroughput:"Réseau Global Xpress"},description:"Fournit la couverture Global Xpress aux Amériques et corridors atlantiques.",launchDate:"2015-02-01",launchVehicle:"Proton-M / Briz-M",order:8},{id:40882,name:"I-5 F3",alias:"GX3 · Région Pacifique",band:"Ka",status:"service",category:"gx",capacity:"Global Xpress Ka",orbitalSlot:"179.6° E",nominalLon:179.6,region:"Région Pacifique & Océanie",serviceSpotRadiusDeg:36,spotBeamType:"GX Faisceau régional Ka",coverageZone:{name:"Région Pacifique & Océanie",bounds:{minLat:-50,maxLat:55,minLon:115,maxLon:-130},center:{lat:-10,lon:175},countries:["Australie & Nouvelle-Zélande","Pacifique Sud & Océanie","Asie de l'Est côtière"],services:["GX Ka Maritime & Aviation Pacifique","Mines, Défense & Énergie"],beamArchitecture:"GX Ka Spot Beams Pacifique",peakThroughput:"Réseau Global Xpress"},description:"Assure la connectivité Global Xpress sur le Pacifique et l’Australie.",launchDate:"2015-08-28",launchVehicle:"Proton-M / Briz-M",order:9},{id:42698,name:"I-5 F4",alias:"GX4 · Moyen-Orient & Europe",band:"Ka",status:"service",category:"gx",capacity:"Global Xpress Ka",orbitalSlot:"56.5° E",nominalLon:56.5,region:"Moyen-Orient & Europe",serviceSpotRadiusDeg:36,spotBeamType:"GX Faisceau régional Ka",coverageZone:{name:"Moyen-Orient, Europe & Asie du Sud",bounds:{minLat:10,maxLat:65,minLon:-10,maxLon:80},center:{lat:35,lon:45},countries:["Europe","Moyen-Orient","Asie du Sud","Afrique du Nord"],services:["GX Ka Capacité flexible","Aéroports européens & transit","Gouvernements"],beamArchitecture:"GX Ka Haute Capacité",peakThroughput:"Réseau Global Xpress"},description:"Capacité supplémentaire dédiée à la mobilité aérienne et aux gouvernements.",launchDate:"2017-05-15",launchVehicle:"Falcon 9",order:10},{id:44801,name:"GX5",alias:"I-5 F5 · VHTS Europe & Moyen-Orient",band:"Ka",status:"service",category:"gx",capacity:"30+ Gbps VHTS",orbitalSlot:"11.0° E",nominalLon:11,region:"Europe, Méditerranée & Moyen-Orient",serviceSpotRadiusDeg:22,spotBeamType:"VHTS Ka Europe & Moyen-Orient",coverageZone:{name:"Europe, Méditerranée & Moyen-Orient",bounds:{minLat:20,maxLat:66,minLon:-15,maxLon:55},center:{lat:46,lon:12},countries:["Europe de l'Ouest & Centrale","Royaume-Uni & Scandinavie","Bassin méditerranéen","Moyen-Orient"],services:["Aviation européenne très haute densité (Air France, Lufthansa)","Superyachts & Maritime","Gouvernement"],beamArchitecture:"Faisceaux ciblés VHTS Ka sur hubs aéroportuaires",peakThroughput:"30+ Gbps VHTS"},description:"Satellite très haute capacité (VHTS) optimisé pour le trafic aérien européen dense.",launchDate:"2019-11-26",launchVehicle:"Ariane 5 ECA",order:11},{id:60422,name:"GX10A",alias:"ASBM-1 · Partenaire Arctique",band:"Ka",status:"partner",category:"arctic",capacity:"Global Xpress Ka",orbitalSlot:"Orbite HEO Molniya",nominalLon:0,region:"Région Arctique & Pôle Nord (>65° N)",serviceSpotRadiusDeg:26,spotBeamType:"HEO Molniya Boréal Ka",coverageZone:{name:"Région Arctique & Pôle Nord (>65° N)",bounds:{minLat:62,maxLat:90,minLon:-180,maxLon:180},center:{lat:78,lon:15},countries:["Région Arctique (>65° N)","Groenland","Mer de Norvège","Passage du Nord-Ouest","Pôle Nord"],services:["Aviation polaire (routes Asie-Amérique)","Recherche scientifique & brise-glaces","Défense OTAN / Norvège"],beamArchitecture:"Orbite HEO Molniya 24/7 pôle Nord",peakThroughput:"Haut débit polaire dédié"},description:"Charge utile Viasat GX sur satellite norvégien en orbite très elliptique pour couvrir le pôle Nord.",launchDate:"2024-08-11",launchVehicle:"Falcon 9",order:12},{id:60423,name:"GX10B",alias:"ASBM-2 · Partenaire Arctique",band:"Ka",status:"partner",category:"arctic",capacity:"Global Xpress Ka",orbitalSlot:"Orbite HEO Molniya",nominalLon:0,region:"Région Arctique & Pôle Nord (>65° N)",serviceSpotRadiusDeg:26,spotBeamType:"HEO Molniya Boréal Ka",coverageZone:{name:"Région Arctique & Pôle Nord (>65° N)",bounds:{minLat:62,maxLat:90,minLon:-180,maxLon:180},center:{lat:78,lon:15},countries:["Région Arctique (>65° N)","Groenland","Mer de Norvège","Passage du Nord-Ouest","Pôle Nord"],services:["Aviation polaire continue","Surveillance boréale","Gouvernements nordiques"],beamArchitecture:"Orbite HEO Molniya 24/7 pôle Nord",peakThroughput:"Haut débit polaire dédié"},description:"Satellite jumeau en orbite Molniya assurant une continuité de service 24/7 au-delà du cercle polaire.",launchDate:"2024-08-11",launchVehicle:"Falcon 9",order:13},{id:50319,name:"I-6 F1",alias:"GX6A · Dual Bande L & Ka",band:"L / Ka",status:"service",category:"inmarsat",capacity:"Bande L & Ka",orbitalSlot:"83.7° E",nominalLon:83.7,region:"Océan Indien & Asie",serviceSpotRadiusDeg:36,spotBeamType:"Dual L-Band MSS & Ka-Band GX",slide5Color:"#b388ff",gateways:{primary:"Perth (Australie)",secondary:"Merredin (Australie)",arinc:"XXI, X4I, X5I",sita:"IOR5, IOR9, IOR7, IOR8",adcc:"B3I, B1I"},safetyDataLink:{fans:"FANS 1/A (RCP240 / RSP180)",sbs:"SwiftBroadband-Safety 1.0 & 2.0 (IOE)",voice:"Dual Voice / SATVOICE VoIP",classicAero:"Classic Aero over I-6"},coverageZone:{name:"Océan Indien, Asie & Moyen-Orient (IOR/IOE)",bounds:{minLat:-45,maxLat:60,minLon:10,maxLon:120},center:{lat:10,lon:65},countries:["Moyen-Orient","Inde & Asie du Sud-Est","Afrique de l'Est","Océan Indien"],services:["Dual-Band : Sécurité SMDSM bande L + Haut débit GX bande Ka","Aviation commerciale & d'affaires"],beamArchitecture:"MSS Bande L numérique + GX Ka",peakThroughput:"Bande L ELERA + GX Ka"},description:"Satellite hybride combinant sécurité aéronautique bande L (FANS 1/A, SB-S) et très haut débit GX bande Ka.",launchDate:"2021-12-22",launchVehicle:"H-IIA 204",order:14},{id:39215,name:"Alphasat",alias:"I-4A F4 · EMEA Bande L",band:"L",status:"service",category:"inmarsat",capacity:"Bande L avancée",orbitalSlot:"25.0° E",nominalLon:25,region:"Europe, Afrique, Moyen-Orient (EMEA)",serviceSpotRadiusDeg:36,spotBeamType:"Bande L MSS EMEA",slide5Color:"#00e676",gateways:{primary:"Fucino (Italie)",secondary:"Thermopyles (Grèce) & Burum (Pays-Bas)",arinc:"XXF, X4E, X5E",sita:"EUA1, EUA9, EUA7, EUA8",adcc:"B4E, B1E"},safetyDataLink:{fans:"FANS 1/A & FANS 3/C (Iris)",iris:"SB-S Iris ATN/OSI (ATS B2, CPDLC RCP130, ADS-C EPP, 4D TBO)",voice:"Dual Voice / SATVOICE VoIP",classicAero:"Classic Aero over I-4"},coverageZone:{name:"Europe, Afrique & Moyen-Orient (EMEA)",bounds:{minLat:-40,maxLat:68,minLon:-25,maxLon:70},center:{lat:20,lon:25},countries:["Europe entière (UE, UK)","Afrique subsaharienne & Nord","Moyen-Orient"],services:["Iris Airspace Modernization (FANS 3/C, ATS B2)","Bande L MSS de sécurité","SMDSM / GMDSS maritime"],beamArchitecture:"Grand réflecteur 12m bande L multispot",peakThroughput:"Réseau ELERA Bande L"},description:"Pilier du programme Iris en Europe pour la modernisation du trafic aérien (ATS B2, CPDLC RCP130, 4D TBO).",launchDate:"2013-07-25",launchVehicle:"Ariane 5 ECA",order:15},{id:28899,name:"I-4 F2",alias:"Asie-Pacifique · Bande L",band:"L",status:"service",category:"inmarsat",capacity:"Bande L BGAN",orbitalSlot:"143.5° E",nominalLon:143.5,region:"Asie-Pacifique & Océanie (APAC)",serviceSpotRadiusDeg:36,spotBeamType:"Bande L BGAN régional",slide5Color:"#e91e63",gateways:{primary:"Paumalu (Hawaii, US)",secondary:"Auckland / Warkworth (Nouvelle-Zélande)",arinc:"XXA, XXP, X4P, X5P",sita:"APK1, APK2, APK9, APK7, APK8",adcc:"B4P, B3P, B1P"},safetyDataLink:{fans:"FANS 1/A (RCP240 / RSP180)",sbs:"SwiftBroadband-Safety 1.0 & 2.0 (APAC)",voice:"Dual Voice / SATVOICE VoIP",classicAero:"Classic Aero over I-4"},coverageZone:{name:"Asie-Pacifique & Océanie (APAC / POR)",bounds:{minLat:-50,maxLat:65,minLon:70,maxLon:180},center:{lat:0,lon:143.5},countries:["Asie de l'Est & du Sud","Australie & Nouvelle-Zélande","Pacifique Ouest & Central"],services:["FANS 1/A Safety Data Link","BGAN voix & données IP","Sécurité maritime SMDSM/GMDSS"],beamArchitecture:"Bande L BGAN régional",peakThroughput:"BGAN Bande L"},description:"Fournit la couverture de sécurité vitale FANS 1/A et Classic Aero sur la région Asie-Pacifique.",launchDate:"2005-11-08",launchVehicle:"Ariane 5 ECA",order:16},{id:33278,name:"I-4 F3",alias:"Amériques · Bande L",band:"L",status:"service",category:"inmarsat",capacity:"Bande L BGAN",orbitalSlot:"98.0° O",nominalLon:-98,region:"Amériques & Pacifique Est",serviceSpotRadiusDeg:36,spotBeamType:"Bande L BGAN Amériques",slide5Color:"#00e5ff",gateways:{primary:"Paumalu (Hawaii, US)",secondary:"Laurentides (Canada)",arinc:"XXH, XXW, X4A, X5A",sita:"AME1, AME2, AME9, AME7, AME8",adcc:"B4A, B3W, B1A"},safetyDataLink:{fans:"FANS 1/A (RCP240 / RSP180)",sbs:"SwiftBroadband-Safety 1.0 & 2.0 (AMER)",voice:"Dual Voice / SATVOICE VoIP",classicAero:"Classic Aero over I-4"},coverageZone:{name:"Continent américain & Pacifique Est (AMER)",bounds:{minLat:-55,maxLat:65,minLon:-160,maxLon:-30},center:{lat:15,lon:-95},countries:["Amérique du Nord (USA, Canada, Mexique)","Amérique centrale & Caraïbes","Amérique du Sud","Pacifique Est"],services:["FANS 1/A Safety Data Link","SwiftBroadband-Safety 1.0 & 2.0","Affaires maritimes"],beamArchitecture:"Bande L BGAN Amériques",peakThroughput:"BGAN Bande L"},description:"Assure la couverture de sécurité aéronautique FANS 1/A et maritime sur l’ensemble des Amériques.",launchDate:"2008-08-18",launchVehicle:"Proton-M / Briz-M",order:17},{id:28628,name:"I-4 F1",alias:"Satellite de secours · Bande L",band:"L",status:"reserve",category:"inmarsat",capacity:"Bande L réserve",orbitalSlot:"143.5° E",nominalLon:143.5,region:"Région Pacifique",serviceSpotRadiusDeg:36,spotBeamType:"Bande L réserve",slide5Color:"#818cf8",coverageZone:{name:"Région Pacifique & Asie de l'Est",bounds:{minLat:-50,maxLat:60,minLon:80,maxLon:180},center:{lat:0,lon:143},countries:["Pacifique Ouest","Australie","Japon & Asie de l'Est"],services:["Bande L réserve opérationnelle","Télémesure & relais"],beamArchitecture:"Bande L réserve",peakThroughput:"Réserve opérationnelle"},description:"Déplacé pour réserve opérationnelle et résilience de secours (contingency fleet).",launchDate:"2005-03-11",launchVehicle:"Atlas V 431",order:18},{id:42814,name:"EAN",alias:"Hellas-Sat 3 · Charge utile S",band:"S",status:"partner",category:"inmarsat",capacity:"Bande S EAN",orbitalSlot:"39.0° E",nominalLon:39,region:"Espace aérien européen",serviceSpotRadiusDeg:18,spotBeamType:"Bande S EAN Aviation",slide5Color:"#38bdf8",coverageZone:{name:"Espace aérien européen (EAN)",bounds:{minLat:34,maxLat:62,minLon:-10,maxLon:35},center:{lat:48,lon:10},countries:["Union Européenne (France, Allemagne, Italie, Espagne...)","Royaume-Uni","Suisse","Norvège"],services:["European Aviation Network","WiFi en vol 4G/LTE + Bande S satellite","Compagnies UE"],beamArchitecture:"Bande S pan-européenne hybride sol/satellite",peakThroughput:"EAN Hybride air-sol"},description:"European Aviation Network : connectivité air-sol hybride haut débit pour les compagnies aériennes européennes.",launchDate:"2017-06-28",launchVehicle:"Ariane 5 ECA",order:19},{id:25153,name:"I-3 F5",alias:"Atlantique · Bande L",band:"L",status:"service",category:"inmarsat",capacity:"Bande L MSS",orbitalSlot:"54.0° O",nominalLon:-54,region:"Océan Atlantique Ouest",serviceSpotRadiusDeg:38,spotBeamType:"Bande L MSS Atlantique",slide5Color:"#e6ee28",gateways:{primary:"Laurentides (Canada)",secondary:"None",arinc:"XXN",sita:"AOE6",adcc:"B3E"},safetyDataLink:{fans:"FANS 1/A (RCP240 / RSP180)",classicAero:"Classic Aero (AORE)",voice:"Dual Voice / SATVOICE"},coverageZone:{name:"Océan Atlantique (AORE / AOR-W)",bounds:{minLat:-50,maxLat:60,minLon:-100,maxLon:0},center:{lat:10,lon:-50},countries:["Corridor Atlantique Nord & Sud","Europe de l'Ouest","Amériques côtières","Afrique de l'Ouest"],services:["Classic Aero (AORE)","Sécurité maritime SMDSM","FANS 1/A"],beamArchitecture:"Bande L MSS Atlantique",peakThroughput:"Classic Aero / MSS"},description:"Pilier du service de sécurité Classic Aero sur le corridor océanique Atlantique (AORE).",launchDate:"1998-02-04",launchVehicle:"Ariane 44LP",order:20},{id:23839,name:"I-3 F1",alias:"Satellite de secours · Océan Indien",band:"L",status:"reserve",category:"inmarsat",capacity:"Bande L MSS",orbitalSlot:"64.5° E",nominalLon:64.5,region:"Océan Indien",serviceSpotRadiusDeg:38,spotBeamType:"Bande L MSS Océan Indien",coverageZone:{name:"Océan Indien & Voies maritimes",bounds:{minLat:-50,maxLat:60,minLon:15,maxLon:120},center:{lat:5,lon:65},countries:["Océan Indien","Péninsule arabique","Inde côtière"],services:["Bande L MSS de réserve","Sécurité de navigation"],beamArchitecture:"Bande L MSS Océan Indien",peakThroughput:"MSS Héritage (Réserve)"},description:"Satellite Inmarsat-3 maintenu en orbite comme réserve opérationnelle (spare).",launchDate:"1996-04-03",launchVehicle:"Atlas IIA",order:21},{id:24307,name:"I-3 F2",alias:"Satellite de secours · Atlantique Est",band:"L",status:"reserve",category:"inmarsat",capacity:"Bande L MSS",orbitalSlot:"15.5° O",nominalLon:-15.5,region:"Atlantique Est",serviceSpotRadiusDeg:38,spotBeamType:"Bande L MSS Atlantique Est",coverageZone:{name:"Atlantique Est & Afrique de l'Ouest",bounds:{minLat:-50,maxLat:60,minLon:-60,maxLon:40},center:{lat:10,lon:-15},countries:["Atlantique Est","Europe côtière","Afrique de l'Ouest"],services:["Bande L MSS de réserve","Sécurité de navigation"],beamArchitecture:"Bande L MSS Atlantique Est",peakThroughput:"MSS Héritage (Réserve)"},description:"Satellite Inmarsat-3 maintenu en orbite comme réserve opérationnelle (spare).",launchDate:"1996-09-06",launchVehicle:"Proton-K / DM1",order:22},{id:24674,name:"I-3 F3",alias:"Satellite de secours · Pacifique",band:"L",status:"reserve",category:"inmarsat",capacity:"Bande L MSS",orbitalSlot:"178.0° E",nominalLon:178,region:"Pacifique",serviceSpotRadiusDeg:38,spotBeamType:"Bande L MSS Pacifique",coverageZone:{name:"Océan Pacifique & Océanie",bounds:{minLat:-50,maxLat:60,minLon:120,maxLon:-120},center:{lat:0,lon:178},countries:["Océan Pacifique","Océanie","Polynésie"],services:["Bande L MSS de réserve","Sécurité maritime"],beamArchitecture:"Bande L MSS Pacifique",peakThroughput:"MSS Héritage (Réserve)"},description:"Satellite Inmarsat-3 maintenu en orbite comme réserve opérationnelle (spare).",launchDate:"1996-12-18",launchVehicle:"Atlas IIA",order:23}],To=[{id:"paumalu",name:"Paumalu (Hawaii, US)",lat:21.67,lon:-158.03,role:"Gateway Primaire APAC & AMER (ACARS, SB-S)"},{id:"laurentides",name:"Laurentides (Québec, Canada)",lat:45.75,lon:-74,role:"Gateway AORE & AMER (Classic Aero, ACARS)"},{id:"fucino",name:"Fucino (Italie)",lat:41.97,lon:13.6,role:"Gateway Primaire EMEA & Iris (ATN/OSI)"},{id:"thermopylae",name:"Thermopyles (Grèce)",lat:38.8,lon:22.53,role:"Gateway Secondaire EMEA (SB-S 2.0)"},{id:"burum",name:"Burum (Pays-Bas)",lat:53.27,lon:6.23,role:"Gateway Passerelle Burum SB-S 2.0"},{id:"perth",name:"Perth (Australie Occidentale)",lat:-31.95,lon:115.86,role:"Gateway Primaire IOR / Océan Indien (Classic Aero, SB-S)"},{id:"merredin",name:"Merredin (Australie)",lat:-31.48,lon:118.28,role:"Gateway Secondaire & Rainfade IOR"},{id:"warkworth",name:"Warkworth (Nouvelle-Zélande)",lat:-36.43,lon:174.66,role:"Gateway Secours APAC (virtual I-3 POR)"},{id:"tempe",name:"Tempe (Arizona, US)",lat:33.42,lon:-111.94,role:"Gateway Passerelle SBD & IP Certus"}];function Na(n){const e=Number(n?.NORAD_CAT_ID??n?.id??n);return q0.find(t=>t.id===e)}function Kc(n){const e=Na(n);return e?!!e.band?.includes("L")&&e.status==="service":!1}function lc(n,e,t,i){const s=n*Math.PI/180,a=t*Math.PI/180,r=a-s,o=(i-e)*Math.PI/180,l=Math.sin(r/2)**2+Math.cos(s)*Math.cos(a)*Math.sin(o/2)**2;return 2*Math.atan2(Math.sqrt(l),Math.sqrt(1-l))*180/Math.PI}function Y0(n,e,t){if(!t||!t.coverageZone)return!1;const i=t.coverageZone;if(i.center&&t.serviceSpotRadiusDeg)return lc(n,e,i.center.lat,i.center.lon)<=t.serviceSpotRadiusDeg;if(t.serviceSpotRadiusDeg&&t.nominalLon!=null)return lc(n,e,0,t.nominalLon)<=t.serviceSpotRadiusDeg;if(i.bounds){const{minLat:s,maxLat:a,minLon:r,maxLon:o}=i.bounds,l=n>=s&&n<=a;let c=!1;return r<=o?c=e>=r&&e<=o:c=e>=r||e<=o,l&&c}return!1}function $0(n){const e=(n.items||[]).filter(Kc),t=e.every(s=>s.DATA_SOURCE),i=t?e.filter(s=>s.DATA_SOURCE==="celestrak").length:n.live?e.length:0;return i?i<e.length||!t&&n.degraded?{level:"degraded",label:"Données orbitales partiellement actualisées",message:`CelesTrak · ${i} / ${e.length} satellites actualisés · secours pour les autres`}:{level:"live",label:"Éléments orbitaux CelesTrak actualisés",message:`CelesTrak · ${e.length} satellites · Positions calculées par SGP4`}:{level:"offline",label:"Données orbitales de secours",message:"Hors ligne · Positions calculées depuis les éléments de secours"}}function K0(n,e){const t=new In;t.userData.satelliteId=n;const i=new _r({color:13214805,metalness:.65,roughness:.48}),s=new _r({color:12503252,metalness:.65,roughness:.35}),a=new _r({color:1193583,metalness:.45,roughness:.3}),r=new Ii({color:6851769,transparent:!0,opacity:.75}),o=(f,p,g=0,x=0,m=0)=>{const u=new kt(f,p);return u.position.set(g,x,m),t.add(u),u};o(new Mn(.52,.66,.5),i),o(new Mn(.55,.06,.53),s,0,.35),o(new Mn(.55,.06,.53),s,0,-.35);for(const f of[-1,1]){o(new Mn(.5,.035,.035),s,f*.5),o(new Mn(1.08,.75,.035),a,f*1.26);const p=[];for(let x=0;x<=6;x++){const m=f*1.26-.54+x*.18;for(const u of[-.019,.019])p.push(m,-.375,u,m,.375,u)}for(let x=0;x<=4;x++){const m=-.375+x*.1875;for(const u of[-.019,.019])p.push(f*1.26-.54,m,u,f*1.26+.54,m,u)}const g=new wt;g.setAttribute("position",new St(p,3)),t.add(new Dc(g,r))}const l=Array.from({length:13},(f,p)=>{const g=p/12*.3;return new He(g,g*g*.9)}),c=s.clone();c.side=pn;const h=o(new Go(l,24),c,0,.08,.3);h.rotation.x=Math.PI/2,o(new Ho(.012,.012,.22,8),s,0,.19,.43).rotation.x=Math.PI/2,o(new Bi(.035,8,6),s,0,.19,.54),o(new Mn(.16,.04,.06),new Yn({color:e}),0,-.3,.28);const d=new kt(new zs(.48,.5,48),new Yn({color:e,side:pn,transparent:!0,opacity:.8,depthWrite:!1}));return d.visible=!1,t.add(d),t.userData.selection=d,t.traverse(f=>{f.userData.satelliteId=n}),t}function Z0(n,e,t,i,s){if(n.visible=!!e,!e)return;n.position.copy(e),n.lookAt(0,0,0);const a=t.position.distanceTo(e),o=(s?66:38)*2*a*Math.tan(Oi.degToRad(t.fov/2))/(Math.max(1,i)*3.6);n.scale.setScalar(Oi.clamp(o,.025,.55));const l=n.userData.selection;l.visible=s,l.quaternion.copy(n.quaternion).invert().multiply(t.quaternion)}function j0(n){const e=new Set,t=new Set;n.traverse(i=>{i.geometry&&e.add(i.geometry),i.material&&t.add(i.material)}),e.forEach(i=>i.dispose()),t.forEach(i=>i.dispose())}const Cr=6371;function Ao(n,e="space"){return e==="earth"?0:Ys(n)}function J0(n,e,t="space"){const i=t==="earth"?f0(n,Ys(e)):n;return{x:i.x/Cr,y:i.z/Cr,z:-i.y/Cr}}const wi=6371,Q0=299792.458;function ps(n,e=5,t=null){const i=Math.max(100,Number(n)||35786);let s,a;if(t!=null)a=Number(t),s=a*Math.PI/180;else{const h=e*Math.PI/180,d=Math.cos(h),f=wi/(wi+i)*d;s=Math.acos(Math.max(-1,Math.min(1,f)))-h,a=s*180/Math.PI}const r=wi*s,o=Math.round(2*r),l=2*Math.PI*wi*wi*(1-Math.cos(s)),c=(1-Math.cos(s))/2*100;return{thetaRad:s,thetaDeg:Number(a.toFixed(1)),arcRadiusKm:Math.round(r),diameterKm:o,areaKm2:l,areaPctEarth:c.toFixed(1)}}function wo(n,e,t=1.003){const i=n*Math.PI/180,s=e*Math.PI/180,a=Math.cos(i),r=Math.sin(i),o=Math.cos(s),l=Math.sin(s);return new F(t*a*o,t*r,-t*a*l)}const ev=["N","NNE","NE","ENE","E","ESE","SE","SSE","S","SSO","SO","OSO","O","ONO","NO","NNO"];function tv(n){const e=(n%360+360)%360,t=Math.round(e/22.5)%16;return ev[t]}function nv(n,e,t,i,s,a=5){const r=n*Math.PI/180,o=t*Math.PI/180,l=(i-e)*Math.PI/180,c=Math.sin(r)*Math.sin(o)+Math.cos(r)*Math.cos(o)*Math.cos(l),h=Math.acos(Math.max(-1,Math.min(1,c))),d=h*180/Math.PI,f=ps(s,a),p=h<=f.thetaRad,g=wi,x=wi+Math.max(100,s),m=Math.sqrt(g*g+x*x-2*g*x*c),u=(x*Math.cos(h)-g)/m,R=Math.asin(Math.max(-1,Math.min(1,u)))*180/Math.PI,w=Math.sin(l),y=Math.cos(r)*Math.tan(o)-Math.sin(r)*Math.cos(l);let A=Math.atan2(w,y)*180/Math.PI;A=(A+360)%360;const b=Math.round(2*m/Q0*1e3);return{inFootprint:p,elevationDeg:Number(R.toFixed(1)),azimuthDeg:Number(A.toFixed(1)),compass:tv(A),slantRangeKm:Math.round(m),rttMs:b,psiDeg:Number(d.toFixed(1))}}class Zc{constructor(e,t=null,{includeGroundStations:i=!0}={}){this.scene=e,this.earth=t,this.group=new In,this.group.name="satellite-spot-group",this.scene.add(this.group),this.groundStationsGroup=new In,this.groundStationsGroup.name="viasat-ground-stations-group",this.earth?this.earth.add(this.groundStationsGroup):this.scene.add(this.groundStationsGroup),i&&this.initGroundStations(),this.visible=!1,this.showBeam=!0,this.pulseTime=0,this.capMesh=null,this.rimLine=null,this.laserLine=null,this.beamLines=null,this.mode="service",this.lastCenterDir=null,this.lastThetaRad=null,this.lastColor=null,this.lastSatPos=null,this.lastNadirPos=null,this.lastBeamColor=null,this.initNadirMarker()}setMode(e){this.mode!==e&&(this.mode=e,this.lastCenterDir=null,this.lastThetaRad=null,this.lastSatPos=null,this.lastNadirPos=null)}setEarth(e){this.earth!==e&&(this.earth&&this.groundStationsGroup.parent===this.earth&&this.earth.remove(this.groundStationsGroup),this.earth=e,this.earth&&this.earth.add(this.groundStationsGroup))}initNadirMarker(){this.nadirMarkerGroup=new In;const e=new Bi(.016,16,16),t=new Yn({color:16777215}),i=new kt(e,t);this.nadirMarkerGroup.add(i),this.nadirRings=[];for(let s=0;s<2;s++){const a=new zs(.018,.026,32),r=new Yn({color:61695,side:Nn,transparent:!0,opacity:.85}),o=new kt(a,r);o.userData={phase:s*.5},this.nadirMarkerGroup.add(o),this.nadirRings.push(o)}this.group.add(this.nadirMarkerGroup),this.nadirMarkerGroup.visible=!1}initGroundStations(){To.forEach(e=>{const t=wo(e.lat,e.lon,1.004),i=new Bi(.009,12,12),s=new Yn({color:16761095}),a=new kt(i,s);a.position.copy(t),this.groundStationsGroup.add(a);const r=new zs(.012,.016,16),o=new Yn({color:16766287,transparent:!0,opacity:.6,side:pn}),l=new kt(r,o);l.position.copy(t),l.lookAt(t.clone().multiplyScalar(2)),this.groundStationsGroup.add(l)})}createSphericalFootprint(e,t,i){if(this.capMesh&&this.rimLine&&this.lastCenterDir&&this.lastCenterDir.distanceTo(e)<2e-4&&Math.abs(this.lastThetaRad-t)<2e-4&&this.lastColor===i){this.capMesh.visible=!0,this.rimLine.visible=!0;return}this.lastCenterDir=e.clone(),this.lastThetaRad=t,this.lastColor=i,this.capMesh&&(this.group.remove(this.capMesh),this.capMesh.geometry.dispose(),this.capMesh.material.dispose(),this.capMesh=null),this.rimLine&&(this.group.remove(this.rimLine),this.rimLine.geometry.dispose(),this.rimLine.material.dispose(),this.rimLine=null);const s=1.003,a=1.0042,r=128,o=Math.max(8,Math.ceil(t/Oi.degToRad(2))),l=e.clone().normalize(),c=Math.abs(l.y)<.99?new F(0,1,0):new F(1,0,0),h=new F().crossVectors(l,c).normalize(),d=new F().crossVectors(l,h).normalize(),f=Math.cos(t),p=Math.sin(t),g=[];for(let A=0;A<r;A++){const b=A/r*Math.PI*2,L=Math.cos(b),D=Math.sin(b),S=new F(a*(f*l.x+p*(L*h.x+D*d.x)),a*(f*l.y+p*(L*h.y+D*d.y)),a*(f*l.z+p*(L*h.z+D*d.z)));g.push(S)}this.activeRimPoints=g;const x=new wt().setFromPoints(g),m=new Ii({color:i,transparent:!0,opacity:.95,linewidth:2.2});this.rimLine=new kd(x,m),this.group.add(this.rimLine);const u=[l.x*s,l.y*s,l.z*s],R=[];for(let A=1;A<=o;A++){const b=A/o,L=t*b,D=Math.cos(L),S=Math.sin(L);for(let E=0;E<r;E++){const P=E/r*Math.PI*2,U=Math.cos(P),H=Math.sin(P);u.push(s*(D*l.x+S*(U*h.x+H*d.x)),s*(D*l.y+S*(U*h.y+H*d.y)),s*(D*l.z+S*(U*h.z+H*d.z)))}}for(let A=0;A<r;A++){const b=(A+1)%r;R.push(0,1+A,1+b)}for(let A=1;A<o;A++){const b=1+(A-1)*r,L=1+A*r;for(let D=0;D<r;D++){const S=(D+1)%r,E=b+D,P=b+S,U=L+D,H=L+S;R.push(E,U,P),R.push(P,U,H)}}const w=new wt;w.setAttribute("position",new St(u,3)),w.setIndex(R),w.computeVertexNormals();const y=new Yn({color:i,transparent:!0,opacity:.16,depthWrite:!1,side:Nn,polygonOffset:!0,polygonOffsetFactor:-1,polygonOffsetUnits:-2});this.capMesh=new kt(w,y),this.group.add(this.capMesh)}updateSpot(e,t,i={}){if(!e||e.lengthSq()===0){this.hide();return}this.visible=!0,this.nadirMarkerGroup.visible=!0;const s=e.clone().normalize(),a=s.clone().multiplyScalar(1.004),r=new jn().setFromUnitVectors(new F(0,1,0),s),o=i.color||61695,l=i.mode||this.mode||"service";let c=ps(t,5).thetaDeg,h=s;l==="service"&&(i.serviceRadiusDeg&&i.serviceRadiusDeg<50&&(c=i.serviceRadiusDeg),i.coverageZone?.center&&this.earth&&(h=wo(i.coverageZone.center.lat,i.coverageZone.center.lon,1).clone().applyMatrix4(this.earth.matrixWorld).normalize()));const d=c*Math.PI/180;this.createSphericalFootprint(h,d,o),this.nadirMarkerGroup.position.copy(a),this.nadirMarkerGroup.quaternion.copy(r),this.nadirMarkerGroup.rotateX(Math.PI/2),this.updateBeam(e,a,o)}updateBeam(e,t,i){if(!this.showBeam){this.laserLine&&(this.laserLine.visible=!1),this.beamLines&&(this.beamLines.visible=!1);return}if(this.laserLine&&this.beamLines&&this.lastSatPos&&this.lastSatPos.distanceTo(e)<.001&&this.lastNadirPos&&this.lastNadirPos.distanceTo(t)<.001&&this.lastBeamColor===i){this.laserLine.visible=!0,this.beamLines.visible=!0;return}this.lastSatPos=e.clone(),this.lastNadirPos=t.clone(),this.lastBeamColor=i,this.laserLine&&(this.group.remove(this.laserLine),this.laserLine.geometry.dispose(),this.laserLine.material.dispose(),this.laserLine=null),this.beamLines&&(this.group.remove(this.beamLines),this.beamLines.geometry.dispose(),this.beamLines.material.dispose(),this.beamLines=null);const s=new wt().setFromPoints([e,t]),a=new Ii({color:16777215,transparent:!0,opacity:.8});this.laserLine=new qs(s,a),this.group.add(this.laserLine);const r=[],o=12,l=Math.floor(this.activeRimPoints.length/o)||1;for(let c=0;c<o;c++){const h=c*l%this.activeRimPoints.length,d=this.activeRimPoints[h];r.push(e.clone(),d)}if(r.length>0){const c=new wt().setFromPoints(r),h=new Dc(c,new Ii({color:i,transparent:!0,opacity:.25}));this.beamLines=h,this.group.add(this.beamLines)}}animate(e){if(this.visible&&(this.pulseTime+=e*1.5,this.nadirRings.forEach(t=>{const i=(this.pulseTime+t.userData.phase)%1,s=1+i*3.2;t.scale.set(s,s,s),t.material.opacity=Math.max(0,.9*(1-i))}),this.rimLine)){const t=.8+Math.sin(this.pulseTime*2.5)*.2;this.rimLine.material.opacity=Math.min(1,Math.max(.4,t))}}toggleBeam(e){this.showBeam=!!e,this.beamLines&&(this.beamLines.visible=this.showBeam),this.laserLine&&(this.laserLine.visible=this.showBeam)}hide(){this.visible=!1,this.nadirMarkerGroup.visible=!1,this.capMesh&&(this.capMesh.visible=!1),this.rimLine&&(this.rimLine.visible=!1),this.beamLines&&(this.beamLines.visible=!1),this.laserLine&&(this.laserLine.visible=!1)}}const iv={BASE_URL:"./",DEV:!1,MODE:"production",PROD:!0,SSR:!1},Lr=typeof import.meta<"u"&&iv&&"./"||"./",cc=Lr.endsWith("/")?Lr:Lr+"/";function sv(n){const e=n||new Date;let i=-((e.getUTCHours()+e.getUTCMinutes()/60+e.getUTCSeconds()/3600-12)*15);for(;i>180;)i-=360;for(;i<-180;)i+=360;i===0&&(i=0);const s=(e-Date.UTC(e.getUTCFullYear(),0,0))/864e5;return{subSolarLat:23.44*Math.sin((284+s)/365.25*2*Math.PI),subSolarLon:i}}function av(n,e,t,i,s,a,r,o){const l=i/n,c=r*.5,h=o*.5,d=s-c,f=a-h,p=e*l+d*(1-l),g=t*l+f*(1-l);return{zoom:i,panX:p,panY:g}}const Pr=[{id:25153,name:"I-3 F5",nominalLon:-54,color:"#e6ee28",region:"Atlantic Ocean (AORE)"},{id:28899,name:"I-4 F2",nominalLon:143.5,color:"#e91e63",region:"Asia Pacific (APAC)"},{id:33278,name:"I-4 F3",nominalLon:-98,color:"#00e5ff",region:"Americas (AMER)"},{id:39215,name:"Alphasat",nominalLon:25,color:"#00e676",region:"Europe/Mid-East/Africa (EMEA)"},{id:50319,name:"I-6 F1",nominalLon:83.7,color:"#b388ff",region:"Indian Ocean (IOR/IOE)"}];class rv{constructor(e){this.container=e,this.container.innerHTML="",this.canvas=document.createElement("canvas"),this.canvas.className="map2d-canvas",this.ctx=this.canvas.getContext("2d",{alpha:!1}),this.container.appendChild(this.canvas),this.tooltip=document.createElement("div"),this.tooltip.className="map2d-tooltip",this.tooltip.style.display="none",this.container.appendChild(this.tooltip),this.coordHud=document.createElement("div"),this.coordHud.className="map2d-coord-hud",this.coordHud.textContent="📍 --.-°N, --.-°E",this.container.appendChild(this.coordHud),this.toolsEl=document.createElement("div"),this.toolsEl.className="map2d-tools",this.toolsEl.innerHTML=`
      <button class="map2d-tool-btn" data-action="zoom-in" title="Zoom avant (Molette)">+</button>
      <button class="map2d-tool-btn" data-action="zoom-out" title="Zoom arrière (Molette)">−</button>
      <button class="map2d-tool-btn" data-action="reset" title="Réinitialiser la vue">⟲</button>
      <div class="map2d-tool-sep"></div>
      <button class="map2d-tool-btn" data-action="toggle-layer" title="Basculer fond Vectoriel / Imagerie">🗺</button>
    `,this.container.appendChild(this.toolsEl),this.zoom=1,this.panX=0,this.panY=0,this.isDragging=!1,this.dragStartX=0,this.dragStartY=0,this.hoverTarget=null,this.mouseScreenX=0,this.mouseScreenY=0,this.useVectorOnly=!1,this.earthImg=new Image,this.earthImgLoaded=!1,this.earthImg.onload=()=>{this.earthImgLoaded=!0,this.render()},this.earthImg.onerror=()=>{this.earthImgLoaded=!1,this.render()},this.earthImg.src=`${cc}textures/earth.jpg`,this.earthImg.complete&&this.earthImg.naturalWidth>0&&(this.earthImgLoaded=!0),this.geoRings=[],this.loadGeoJson(),this.satellite=null,this.fleetRecords=[],this.observer={lat:48.8566,lon:2.3522,name:"Paris"},this.groundTrack=[],this.simDate=new Date,this.spotMode="global",this.pulsePhase=0,this.showFleetOverlay=!0,this.showGateways=!0,this.showSpot=!0,this.showOrbits=!0,this.showLabels=!0,this.onSelectSatellite=null,this.legendBoxes=[],this.width=800,this.height=450,this.handleResize=()=>{const t=this.container.getBoundingClientRect();if(!t.width||!t.height)return;const i=Math.min(window.devicePixelRatio||1,2);this.width=t.width,this.height=t.height,this.canvas.width=Math.round(t.width*i),this.canvas.height=Math.round(t.height*i),this.canvas.style.width=`${t.width}px`,this.canvas.style.height=`${t.height}px`,this.ctx.setTransform(i,0,0,i,0,0),this.clampPan(),this.render()},this.resizeObserver=new ResizeObserver(()=>this.handleResize()),this.resizeObserver.observe(this.container),window.addEventListener("resize",this.handleResize),this.initInteractions()}async loadGeoJson(){try{const e=await fetch(`${cc}data/world-110m.geojson`);if(!e.ok)throw new Error("GeoJSON status "+e.status);const t=await e.json(),i=[];t.features.forEach(s=>{const a=s.geometry;if(!a)return;(a.type==="Polygon"?[a.coordinates]:a.type==="MultiPolygon"?a.coordinates:[]).forEach(o=>{o[0]&&i.push(o[0])})}),this.geoRings=i,this.render()}catch(e){console.warn("Carte vectorielle 110m : chargement en arrière-plan",e)}}initInteractions(){this.toolsEl.addEventListener("click",t=>{const i=t.target.closest("[data-action]");if(!i)return;const s=i.dataset.action;s==="zoom-in"?this.zoomAt(this.width/2,this.height/2,1.4):s==="zoom-out"?this.zoomAt(this.width/2,this.height/2,1/1.4):s==="reset"?this.resetView():s==="toggle-layer"&&(this.useVectorOnly=!this.useVectorOnly,i.classList.toggle("active",this.useVectorOnly),this.render())}),this.canvas.addEventListener("wheel",t=>{t.preventDefault();const i=this.canvas.getBoundingClientRect(),s=t.clientX-i.left,a=t.clientY-i.top,r=t.deltaY<0?1.25:1/1.25;this.zoomAt(s,a,r)},{passive:!1}),this.canvas.style.touchAction="none",this.canvas.addEventListener("pointerdown",t=>{t.button===0&&(this.isDragging||(this.isDragging=!0,this.dragPointer=t.pointerId,this.didPan=!1,this.pointerStart={x:t.clientX,y:t.clientY},this.canvas.setPointerCapture(t.pointerId),this.dragStartX=t.clientX-this.panX,this.dragStartY=t.clientY-this.panY,this.canvas.style.cursor="grabbing"))}),window.addEventListener("pointermove",t=>{if(this.isDragging&&t.pointerId===this.dragPointer&&(Math.hypot(t.clientX-this.pointerStart.x,t.clientY-this.pointerStart.y)>5&&(this.didPan=!0),this.panX=t.clientX-this.dragStartX,this.panY=t.clientY-this.dragStartY,this.clampPan(),this.render()),t.pointerType==="touch")return;const i=this.canvas.getBoundingClientRect();t.clientX>=i.left&&t.clientX<=i.right&&t.clientY>=i.top&&t.clientY<=i.bottom?(this.mouseScreenX=t.clientX-i.left,this.mouseScreenY=t.clientY-i.top,this.handleHover(this.mouseScreenX,this.mouseScreenY,t.clientX,t.clientY)):(this.tooltip.style.display="none",this.hoverTarget=null)});const e=t=>{this.isDragging&&t.pointerId===this.dragPointer&&(this.isDragging=!1,this.canvas.style.cursor="crosshair")};window.addEventListener("pointerup",e),window.addEventListener("pointercancel",e),this.canvas.addEventListener("click",t=>{if(this.didPan){this.didPan=!1;return}const i=this.canvas.getBoundingClientRect(),s=t.clientX-i.left,a=t.clientY-i.top;if(this.legendBoxes){for(const l of this.legendBoxes)if(s>=l.x&&s<=l.x+l.w&&a>=l.y&&a<=l.y+l.h){this.onSelectSatellite&&this.onSelectSatellite(l.id);return}}const r=this.findSatelliteAt(s,a,14);if(r){this.onSelectSatellite&&this.onSelectSatellite(r.data?.NORAD_CAT_ID??r.id);return}const o=this.findGatewayAt(s,a,12);o&&o.primarySatId&&this.onSelectSatellite&&this.onSelectSatellite(o.primarySatId)}),this.canvas.addEventListener("dblclick",()=>{this.resetView()})}zoomAt(e,t,i){const s=Math.max(1,Math.min(10,this.zoom*i));if(s===this.zoom)return;const a=av(this.zoom,this.panX,this.panY,s,e,t,this.width,this.height);this.panX=a.panX,this.panY=a.panY,this.zoom=a.zoom,this.zoom<=1.01&&(this.panY=0,this.zoom=1),this.clampPan(),this.render()}centerAt(e,t){this.zoom=1,this.panX=-t/360*this.width,this.panY=0,this.clampPan(),this.render()}resetView(){this.zoom=1,this.panX=0,this.panY=0,this.render()}clampPan(){const e=this.width*this.zoom;if(this.panX=((this.panX+e/2)%e+e)%e-e/2,this.zoom<=1){this.panY=0;return}const t=(this.zoom-1)*this.height*.5;this.panY=Math.max(-t,Math.min(t,this.panY))}toXY(e,t){let i=t;(t>180||t<-180)&&(i=((t+180)%360+360)%360-180);const s=this.width,a=this.height,r=(i+180)/360*s,o=(90-e)/180*a,l=s*.5,c=a*.5,h=l+(r-l)*this.zoom+this.panX+(this.drawingWorldOffset||0),d=c+(o-c)*this.zoom+this.panY;return{x:h,y:d}}fromXY(e,t){const i=this.width,s=this.height,a=i*.5,r=s*.5,o=(e-this.panX-a)/this.zoom+a,l=(t-this.panY-r)/this.zoom+r;let c=o/i*360-180,h=90-l/s*180;return c=((c+180)%360+360)%360-180,h=Math.max(-90,Math.min(90,h)),{lat:h,lon:c}}handleHover(e,t,i,s){const a=this.fromXY(e,t),r=`${Math.abs(a.lat).toFixed(1)}°${a.lat>=0?"N":"S"}`,o=`${Math.abs(a.lon).toFixed(1)}°${a.lon>=0?"E":"O"}`;this.coordHud.textContent=`📍 ${r}, ${o} ${this.zoom>1.05?`· ×${this.zoom.toFixed(1)}`:""}`;const l=this.findSatelliteAt(e,t,14);if(l){const h=l.meta||{},d=l.current||{};this.tooltip.style.display="block",this.tooltip.style.left=`${i+14}px`,this.tooltip.style.top=`${s-12}px`,this.tooltip.innerHTML=`
        <div class="tip-title">${h.name||l.data?.OBJECT_NAME}</div>
        <div class="tip-row"><span>Position :</span> <strong>${h.orbitalSlot||"GEO"}</strong></div>
        <div class="tip-row"><span>Bande :</span> <strong>${h.band||"Ka"} (${h.category||"Viasat"})</strong></div>
        <div class="tip-row"><span>Alt :</span> <strong>${Math.round(d.alt||35786).toLocaleString("fr-FR")} km</strong></div>
        <div class="tip-action">👆 Cliquez pour sélectionner</div>
      `,this.canvas.style.cursor="pointer";return}const c=this.findGatewayAt(e,t,12);if(c){this.tooltip.style.display="block",this.tooltip.style.left=`${i+14}px`,this.tooltip.style.top=`${s-12}px`,this.tooltip.innerHTML=`
        <div class="tip-title">🏢 ${c.name}</div>
        <div class="tip-row"><span>Rôle :</span> <strong>${c.role||"Passerelle Téléport Sol"}</strong></div>
        <div class="tip-row"><span>Opérateur :</span> <strong>Viasat / Inmarsat Gateways</strong></div>
      `,this.canvas.style.cursor="pointer";return}this.tooltip.style.display="none",this.canvas.style.cursor=this.isDragging?"grabbing":"crosshair"}findSatelliteAt(e,t,i=14){if(!this.fleetRecords||!this.fleetRecords.length){if(this.satellite?.current){const s=this.toXY(this.satellite.current.lat,this.satellite.current.lon);if(this.wrappedDistance(e,t,s)<=i)return this.satellite}return null}for(let s=this.fleetRecords.length-1;s>=0;s--){const a=this.fleetRecords[s],r=a.current;if(!r)continue;const o=this.toXY(r.lat,r.lon);if(this.wrappedDistance(e,t,o)<=i)return a}return null}findGatewayAt(e,t,i=12){for(const s of To){const a=this.toXY(s.lat,s.lon);if(this.wrappedDistance(e,t,a)<=i)return s}return null}wrappedDistance(e,t,i){const s=this.width*this.zoom,a=e-i.x;return Math.hypot(a-Math.round(a/s)*s,t-i.y)}setFleet(e){this.fleetRecords=e||[],this.render()}setSatellite(e,t=[]){this.satellite=e,this.groundTrack=t,this.render()}setObserver(e){this.observer=e,this.render()}setSpotMode(e){this.spotMode=e,this.render()}toggleFleetOverlay(e){this.showFleetOverlay=e,this.render()}toggleGateways(e){this.showGateways=e,this.render()}toggleSpot(e){this.showSpot=!!e,this.render()}toggleOrbits(e){this.showOrbits=!!e,this.render()}toggleLabels(e){this.showLabels=!!e,this.render()}update(e,t=null,i=.016){this.simDate=e,t&&(this.fleetRecords=t),this.pulsePhase=(this.pulsePhase+i*1.5)%1,this.render()}computeFootprintPoints(e,t,i,s=120){const a=e*Math.PI/180,r=t*Math.PI/180,o=i*Math.PI/180,l=[];for(let c=0;c<=s;c++){const h=c/s*Math.PI*2,d=Math.sin(a)*Math.cos(o)+Math.cos(a)*Math.sin(o)*Math.cos(h),f=Math.asin(Math.max(-1,Math.min(1,d))),p=Math.sin(h)*Math.sin(o),g=Math.cos(a)*Math.cos(o)-Math.sin(a)*Math.sin(o)*Math.cos(h);let m=(r+Math.atan2(p,g))*180/Math.PI;for(;m>180;)m-=360;for(;m<-180;)m+=360;l.push({lat:f*180/Math.PI,lon:m})}return l}splitAntimeridianSegments(e){const t=[];let i=[];for(let s=0;s<e.length;s++){const a=e[s];if(i.length>0){const r=i[i.length-1],o=a.lon-r.lon;if(Math.abs(o)>180){let l=r.lon,c=a.lon;o>180?c-=360:c+=360;const h=(a.lon>r.lon?-180-l:180-l)/(c-l),d=r.lat+h*(a.lat-r.lat);a.lon>r.lon?(i.push({lat:d,lon:-180}),t.push(i),i=[{lat:d,lon:180}]):(i.push({lat:d,lon:180}),t.push(i),i=[{lat:d,lon:-180}])}}i.push(a)}return i.length>0&&t.push(i),t}render(){if(!this.width||!this.height)return;const e=this.ctx;e.clearRect(0,0,this.width,this.height),e.fillStyle="#070d18",e.fillRect(0,0,this.width,this.height);const t=this.width*this.zoom,i=(this.width-t)/2+this.panX;for(const s of[-1,0,1]){const a=i+s*t;a>=this.width||a+t<=0||(e.save(),e.beginPath(),e.rect(a,0,t,this.height),e.clip(),this.drawingWorldOffset=s*t,this.drawWorld(e),e.restore())}this.drawingWorldOffset=0,this.drawSlide5Legend(e)}drawWorld(e){if(this.earthImgLoaded&&!this.useVectorOnly){e.save();const t=this.toXY(90,-180),i=this.toXY(-90,180),s=i.x-t.x,a=i.y-t.y;e.globalAlpha=.55,e.drawImage(this.earthImg,t.x,t.y,s,a),e.fillStyle="rgba(7, 13, 24, 0.40)",e.fillRect(0,0,this.width,this.height),e.restore()}this.drawVectorLandmasses(e),this.drawGrid(e),this.drawDayNightShadow(e),this.showOrbits&&this.groundTrack&&this.groundTrack.length>1&&this.drawGroundTrack(e),this.showFleetOverlay&&this.showSpot&&this.drawSlide5FleetCoverage(e),this.showGateways&&this.drawGateways(e),this.showSpot&&this.satellite?.current&&this.drawActiveSatelliteFootprint(e),this.drawAllFleetSatellites(e),this.observer&&this.drawObserver(e)}drawVectorLandmasses(e){!this.geoRings||!this.geoRings.length||(e.save(),e.beginPath(),this.geoRings.forEach(t=>{if(!t.length)return;const i=this.toXY(t[0][1],t[0][0]);e.moveTo(i.x,i.y);for(let s=1;s<t.length;s++){const a=this.toXY(t[s][1],t[s][0]);e.lineTo(a.x,a.y)}}),e.fillStyle=this.useVectorOnly?"#0e1c2e":"rgba(15, 30, 48, 0.65)",e.fill(),e.strokeStyle=this.useVectorOnly?"#1f4368":"rgba(38, 80, 122, 0.75)",e.lineWidth=1,e.stroke(),e.restore())}drawGrid(e){e.save(),e.strokeStyle="rgba(255, 255, 255, 0.08)",e.lineWidth=1,e.font='10px "Space Grotesk", monospace',e.fillStyle="rgba(180, 205, 230, 0.45)";for(let s=-180;s<=180;s+=30){const a=this.toXY(90,s),r=this.toXY(-90,s);if(e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(r.x,r.y),e.stroke(),s>-180&&s<180){const o=Math.max(16,Math.min(this.height-42,r.y-12));e.fillText(`${Math.abs(s)}°${s>=0?"E":"O"}`,a.x+3,o)}}for(let s=-60;s<=60;s+=30){const a=this.toXY(s,-180),r=this.toXY(s,180);e.beginPath(),e.moveTo(a.x,a.y),e.lineTo(r.x,r.y),e.stroke();const o=Math.max(6,Math.min(this.width-50,a.x+6));e.fillText(`${Math.abs(s)}°${s>=0?"N":"S"}`,o,a.y-4)}const t=this.toXY(0,-180),i=this.toXY(0,180);e.strokeStyle="rgba(0, 240, 255, 0.18)",e.beginPath(),e.moveTo(t.x,t.y),e.lineTo(i.x,i.y),e.stroke(),e.restore()}drawDayNightShadow(e){const t=this.simDate||new Date,{subSolarLat:i,subSolarLon:s}=sv(t);e.save(),e.fillStyle="rgba(1, 4, 10, 0.50)";const a=1;for(let h=-90;h<90;h+=a){const d=h+a/2,f=d*Math.PI/180,p=i*Math.PI/180,g=Math.tan(f)*Math.tan(p),x=this.toXY(h+a,0).y,u=this.toXY(h,0).y-x;if(g>=1||g<=-1){if(Math.sin(f)*Math.sin(p)<0){const A=this.toXY(d,-180),b=this.toXY(d,180);e.fillRect(A.x,x,b.x-A.x,u)}continue}const R=Math.acos(-g)*180/Math.PI,w=s-R,y=s+R;if(w>=-180&&y<=180){if(w>-180){const A=this.toXY(d,-180).x,b=this.toXY(d,w).x;e.fillRect(A,x,b-A,u)}if(y<180){const A=this.toXY(d,y).x,b=this.toXY(d,180).x;e.fillRect(A,x,b-A,u)}}else if(w<-180){const A=this.toXY(d,y).x,b=this.toXY(d,w+360).x;e.fillRect(A,x,b-A,u)}else if(y>180){const A=this.toXY(d,y-360).x,b=this.toXY(d,w).x;e.fillRect(A,x,b-A,u)}}const r=s>0?s-180:s+180,o=-i,l=this.computeFootprintPoints(o,r,90,180),c=this.splitAntimeridianSegments(l);e.strokeStyle="rgba(255, 180, 50, 0.35)",e.lineWidth=1.4,c.forEach(h=>{if(h.length<2)return;e.beginPath();const d=this.toXY(h[0].lat,h[0].lon);e.moveTo(d.x,d.y);for(let f=1;f<h.length;f++){const p=this.toXY(h[f].lat,h[f].lon);e.lineTo(p.x,p.y)}e.stroke()}),e.restore()}drawGroundTrack(e){e.save(),e.strokeStyle="#00f0ff",e.lineWidth=2,e.setLineDash([5,4]),e.shadowColor="#00f0ff",e.shadowBlur=6;let t=null;e.beginPath();for(const i of this.groundTrack){const{x:s,y:a}=this.toXY(i.lat,i.lon);t!==null&&Math.abs(s-t)>this.width*.4?(e.stroke(),e.beginPath(),e.moveTo(s,a)):t===null?e.moveTo(s,a):e.lineTo(s,a),t=s}e.stroke(),e.restore()}drawSlide5FleetCoverage(e){if(!this.showSpot||!this.showFleetOverlay)return;const t=Number(this.satellite?.data?.NORAD_CAT_ID??this.satellite?.id??0);for(const i of Pr){if(t===i.id)continue;const a=this.fleetRecords?.find(g=>Number(g.data?.NORAD_CAT_ID??g.id)===i.id),r=a?.current;if(!r)continue;const o=a.meta||Na(a.data||a),l=this.spotMode||"global";let c=ps(r.alt,5).thetaDeg,h=r.lat,d=r.lon;l==="service"&&(o?.serviceSpotRadiusDeg&&(c=o.serviceSpotRadiusDeg),o?.coverageZone?.center&&(h=o.coverageZone.center.lat,d=o.coverageZone.center.lon));const f=this.computeFootprintPoints(h,d,c,120),p=this.splitAntimeridianSegments(f);e.save(),e.strokeStyle=i.color,e.lineWidth=1.8,e.shadowColor=i.color,e.shadowBlur=4,p.forEach(g=>{if(g.length<2)return;e.beginPath();const x=this.toXY(g[0].lat,g[0].lon);e.moveTo(x.x,x.y);for(let m=1;m<g.length;m++){const u=this.toXY(g[m].lat,g[m].lon);e.lineTo(u.x,u.y)}e.stroke()}),e.restore()}}drawActiveSatelliteFootprint(e){if(!this.showSpot)return;const t=this.satellite?.current;if(!t)return;const i=this.satellite.meta||Na(this.satellite.data||this.satellite)||{},s=this.spotMode||"global";let a=t.lat,r=t.lon,o=ps(t.alt,5).thetaDeg;s==="service"&&(i.serviceSpotRadiusDeg&&(o=i.serviceSpotRadiusDeg),i.coverageZone?.center&&(a=i.coverageZone.center.lat,r=i.coverageZone.center.lon));const l=this.computeFootprintPoints(a,r,o,120),c=this.splitAntimeridianSegments(l),h=i.slide5Color||"#00e5ff";e.save(),e.strokeStyle=h,e.lineWidth=3,e.shadowColor=h,e.shadowBlur=12,e.fillStyle=`${h}28`,e.shadowBlur=0,this.fillSphericalFootprint(e,a,r,o),e.shadowBlur=12,c.forEach(d=>{if(d.length<2)return;e.beginPath();const f=this.toXY(d[0].lat,d[0].lon);e.moveTo(f.x,f.y);for(let p=1;p<d.length;p++){const g=this.toXY(d[p].lat,d[p].lon);e.lineTo(g.x,g.y)}e.stroke()}),e.restore()}fillSphericalFootprint(e,t,i,s){const a=t*Math.PI/180,r=Math.cos(s*Math.PI/180),o=((i+180)%360+360)%360-180;for(let l=-90;l<90;l++){const c=(l+.5)*Math.PI/180,h=Math.cos(c)*Math.cos(a),d=(r-Math.sin(c)*Math.sin(a))/h;if(d>=1)continue;const f=d<=-1?180:Math.acos(d)*180/Math.PI,p=this.toXY(l+1,0).y,g=this.toXY(l,0).y,x=(m,u)=>e.fillRect(this.toXY(l,m).x,p,this.toXY(l,u).x-this.toXY(l,m).x,g-p);f===180?x(-180,180):o-f<-180?(x(-180,o+f),x(o-f+360,180)):o+f>180?(x(o-f,180),x(-180,o+f-360)):x(o-f,o+f)}}drawAllFleetSatellites(e){const t=this.fleetRecords?.length?this.fleetRecords:this.satellite?[this.satellite]:[],i=Number(this.satellite?.data?.NORAD_CAT_ID??this.satellite?.id??0);e.save(),t.forEach(s=>{const a=s.current;if(!a)return;const o=Number(s.data?.NORAD_CAT_ID??s.id)===i,l=s.meta||{},{x:c,y:h}=this.toXY(a.lat,a.lon);let d=l.slide5Color;if(!d){const f=l.category;f==="viasat"?d="#00e5ff":f==="gx"?d="#00ff9d":f==="arctic"?d="#c09cff":d="#5bc4e3"}if(o){if(this.showSpot){const f=6+this.pulsePhase*20,p=Math.max(0,.85*(1-this.pulsePhase));e.strokeStyle=`rgba(0, 255, 204, ${p})`,e.lineWidth=2,e.beginPath(),e.arc(c,h,f,0,Math.PI*2),e.stroke(),e.strokeStyle="#ffffff",e.lineWidth=1.5,e.beginPath(),e.moveTo(c-10,h),e.lineTo(c+10,h),e.moveTo(c,h-10),e.lineTo(c,h+10),e.stroke()}if(e.fillStyle="#00ffcc",e.beginPath(),e.arc(c,h,5,0,Math.PI*2),e.fill(),this.showLabels){e.font='bold 11px "Space Grotesk", sans-serif',e.fillStyle="#ffffff",e.shadowColor="#000000",e.shadowBlur=6;const f=l.name||s.data?.OBJECT_NAME||"SATELLITE";e.fillText(f,c+12,h-5),e.font="10px monospace",e.fillStyle="#00ffcc";const p=`${Math.abs(a.lat).toFixed(1)}°${a.lat>=0?"N":"S"}`,g=`${Math.abs(a.lon).toFixed(1)}°${a.lon>=0?"E":"O"}`;e.fillText(`${p} ${g}`,c+12,h+9)}}else if(e.fillStyle=d,e.shadowColor=d,e.shadowBlur=4,e.beginPath(),e.arc(c,h,3.8,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke(),this.showLabels){e.font='10px "Space Grotesk", sans-serif',e.fillStyle="rgba(255, 255, 255, 0.75)",e.shadowColor="#000000",e.shadowBlur=4;const f=l.name||s.data?.OBJECT_NAME||"";e.fillText(f,c+8,h+3)}}),e.restore()}drawGateways(e){e.save();const t=this.satellite?.current,i=this.satellite?.meta||{};To.forEach(s=>{const{x:a,y:r}=this.toXY(s.lat,s.lon);if(e.fillStyle="#ffc107",e.beginPath(),e.arc(a,r,3.5,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1,e.stroke(),this.zoom>1.2){e.font='9px "DM Sans", sans-serif',e.fillStyle="#ffe082",e.shadowColor="#000000",e.shadowBlur=3;const o=s.name.split(" (")[0];e.fillText(o,a+5,r-3)}if(t&&i.gateways){const o=`${i.gateways.primary||""} ${i.gateways.secondary||""}`,l=s.name.split(" (")[0];if(o.toLowerCase().includes(l.toLowerCase())){const c=this.toXY(t.lat,t.lon);e.strokeStyle="rgba(255, 193, 7, 0.55)",e.lineWidth=1.5,e.setLineDash([4,3]),e.beginPath(),e.moveTo(a,r),e.lineTo(c.x,c.y),e.stroke(),e.setLineDash([])}}}),e.restore()}drawObserver(e){const{x:t,y:i}=this.toXY(this.observer.lat,this.observer.lon);if(e.save(),e.fillStyle="#ffbe3b",e.beginPath(),e.arc(t,i,4.5,0,Math.PI*2),e.fill(),e.strokeStyle="#ffffff",e.lineWidth=1.2,e.stroke(),e.font='bold 10px "Space Grotesk", sans-serif',e.fillStyle="#ffd166",e.shadowColor="#000000",e.shadowBlur=3,e.fillText(this.observer.name||"Mon Antenne",t+7,i-5),this.satellite?.current){const s=this.toXY(this.satellite.current.lat,this.satellite.current.lon);e.strokeStyle="rgba(255, 209, 102, 0.45)",e.setLineDash([3,3]),e.beginPath(),e.moveTo(t,i),e.lineTo(s.x,s.y),e.stroke()}e.restore()}drawSlide5Legend(e){const t=Number(this.satellite?.data?.NORAD_CAT_ID??this.satellite?.id??0);this.legendBoxes=[],e.save();const i=Math.max(1,Math.min(5,Math.floor((this.width-48)/105))),a=27+Math.ceil(Pr.length/i)*26;this.coordHud&&(this.coordHud.style.bottom=`${a+12}px`);const r=Math.max(10,this.height-a-6),o=Math.max(200,this.width-28);e.fillStyle="rgba(8, 15, 24, 0.92)",e.strokeStyle="rgba(255, 255, 255, 0.12)",e.lineWidth=1,e.beginPath(),e.roundRect?e.roundRect(14,r,o,a,6):e.rect(14,r,o,a),e.fill(),e.stroke(),e.font='bold 10px "Space Grotesk", sans-serif',e.fillStyle="#8fa1b0",e.fillText(this.showSpot?this.spotMode==="service"?"ZONES INDICATIVES · BANDE L":"VISIBILITÉ GÉOMÉTRIQUE · HORIZON 5°":"FLOTTE INMARSAT · EMPREINTES MASQUÉES",24,r+17),e.font='600 11px "Space Grotesk", sans-serif',Pr.forEach((l,c)=>{const h=t===l.id,d=l.name,f=(o-20)/i,p=26+c%i*f,g=r+27+Math.floor(c/i)*26;h&&(e.fillStyle=`${l.color}33`,e.strokeStyle=l.color,e.lineWidth=1.2,e.beginPath(),e.roundRect?e.roundRect(p-4,g-1,f-6,22,4):e.rect(p-4,g-1,f-6,22),e.fill(),e.stroke()),e.fillStyle=l.color,e.beginPath(),e.arc(p+6,g+10,4.5,0,Math.PI*2),e.fill(),e.fillStyle=h?"#ffffff":"#c9d6e2",e.fillText(d,p+16,g+14),this.legendBoxes.push({id:l.id,x:p-4,y:g-1,w:f-6,h:22})}),e.restore()}}const Dr="./",Ca=Dr.endsWith("/")?Dr:Dr+"/",gt=n=>`<i data-lucide="${n}"></i>`,Yo=[{id:"paris",name:"Paris (France)",lat:48.8566,lon:2.3522},{id:"toulouse",name:"Toulouse · CNES (France)",lat:43.6047,lon:1.4442},{id:"brest",name:"Brest · Façade Atlantique",lat:48.3904,lon:-4.4861},{id:"kourou",name:"Kourou · CSG Guyane",lat:5.1588,lon:-52.6499},{id:"washington",name:"Washington D.C. (USA)",lat:38.9072,lon:-77.0369},{id:"carlsbad",name:"Carlsbad · Siège Viasat (USA)",lat:33.1581,lon:-117.3506},{id:"newyork",name:"New York (USA)",lat:40.7128,lon:-74.006},{id:"miami",name:"Miami (USA)",lat:25.7617,lon:-80.1918},{id:"losangeles",name:"Los Angeles (USA)",lat:34.0522,lon:-118.2437},{id:"london",name:"Londres (UK)",lat:51.5074,lon:-.1278},{id:"tokyo",name:"Tokyo (Japon)",lat:35.6762,lon:139.6503}];let xn=Yo[0],Fn="global";document.querySelector("#app").innerHTML=`
<header>
  <a class="brand" href="/">
    ${gt("satellite")} ORBITAL
    <span>SUIVI DE FLOTTE BANDE L · SÉCURITÉ AÉRO & MARITIME</span>
  </a>
  <div class="view-switchers" role="tablist" aria-label="Mode de vue">
    <button id="view-mode-3d" class="view-btn active" role="tab" aria-selected="true">${gt("globe")} Globe 3D</button>
    <button id="view-mode-2d" class="view-btn" role="tab" aria-selected="false">${gt("map")} Carte 2D & Trace</button>
  </div>
  <div class="header-right">
    <span class="system" id="telemetry-status">${gt("radio")} <span id="status-label">Télémétrie CelesTrak SGP4</span></span>
    <button id="about" class="icon-button" aria-label="À propos des données">${gt("info")}</button>
  </div>
</header>

<main>
  <!-- Volet latéral : Constellation Bande L & Filtres -->
  <aside class="catalogue">
    <div class="eyebrow">CONSTELLATION BANDE L OPÉRATIONNELLE</div>
    <h1>Bande L<span>.</span></h1>
    <p class="intro">Satellites opérationnels de sécurité aéronautique & maritime (FIT Asia Slide 5). Hors satellites de réserve.</p>

    <!-- Filtres rapides par région / océan -->
    <div class="category-filters" role="group" aria-label="Filtres régionaux bande L">
      <button data-cat="all" class="cat-pill active">Tous (5)</button>
      <button data-cat="ior" class="cat-pill">IOR · Indien</button>
      <button data-cat="emea" class="cat-pill">EMEA · Europe-Afr</button>
      <button data-cat="apac" class="cat-pill">APAC · Pacifique</button>
      <button data-cat="amer" class="cat-pill">AMER · Amériques</button>
      <button data-cat="aore" class="cat-pill">AORE · Atlantique</button>
    </div>

    <div class="search-wrap">
      <label class="search">${gt("search")}
        <input id="search" type="search" placeholder="Rechercher par nom, NORAD, région..." aria-label="Rechercher un satellite">
      </label>
      <button id="show-all" class="all-button" title="Afficher tous les satellites ensemble">${gt("focus")} Vue flotte</button>
    </div>

    <div class="list-heading">
      <span>SATELLITES BANDE L ACTIFS</span>
      <span id="count">—</span>
    </div>

    <div id="sat-list" class="sat-list" aria-label="Objets en orbite">
      <div class="loading">Chargement des orbites Bande L…</div>
    </div>

    <div class="source">
      <span class="source-dot"></span>
      <div id="source-text">Connexion à CelesTrak…</div>
      <button id="refresh" class="icon-button" aria-label="Actualiser les données">${gt("rotate-ccw")}</button>
    </div>
  </aside>

  <!-- Zone de visualisation : Globe 3D et Carte 2D -->
  <section class="space" aria-label="Espace de visualisation">
    <div class="map-actions" role="group" aria-label="Affichage de la carte">
      <button id="show-fleet" aria-pressed="false">${gt("satellite")} Tous les satellites</button>
      <button id="toggle-menus" aria-pressed="false">${gt("focus")} <span>Masquer les menus</span></button>
    </div>
    <!-- Conteneur 3D Three.js -->
    <div id="globe"></div>
    <div id="sat-labels" aria-label="Satellites affichés sur le globe"></div>

    <!-- Conteneur 2D World Map -->
    <div id="map2d-container" class="map2d-view" hidden></div>

    <!-- En-tête des calques et réglages -->
    <div class="view-controls-bar">
      <div class="view-heading">
        <span class="live-tag" id="mode">TEMPS RÉEL</span>
        <span class="view-label">VUE GLOBALE</span>
        <label class="layer-toggle"><input id="show-spot" type="checkbox" checked> Spot au sol</label>
        <label class="layer-toggle"><input id="show-beam" type="checkbox" checked> Faisceau 3D</label>
        <label class="layer-toggle"><input id="show-fleet-lband" type="checkbox" checked> Flotte L-band</label>
        <label class="layer-toggle"><input id="show-gateways" type="checkbox" checked> Gateways sol</label>
        <label class="layer-toggle"><input id="show-labels" type="checkbox" checked> Noms</label>
        <label class="layer-toggle"><input id="show-orbits" type="checkbox" checked> Orbites</label>
      </div>

      <div class="view-settings">
        <div role="group" aria-label="Point de vue">
          <button data-frame="space" aria-pressed="true">Vue spatiale</button>
          <button data-frame="earth" aria-pressed="false">Vue terrestre</button>
        </div>
        <label class="layer-toggle"><input id="auto-view" type="checkbox" checked> Vue tournante</label>
      </div>
    </div>

    <!-- Barre d'outils caméra -->
    <div class="globe-tools">
      <button id="zoom-in" class="icon-button" aria-label="Zoom avant">${gt("plus")}</button>
      <button id="zoom-out" class="icon-button" aria-label="Zoom arrière">${gt("minus")}</button>
      <div class="tool-separator"></div>
      <button id="home-view" class="icon-button" aria-label="Recentrer la Terre">${gt("focus")}</button>
    </div>

    <!-- Légende interactive constellation Bande L -->
    <div class="globe-caption">
      <span class="legend-dot" style="background:#b388ff;box-shadow:0 0 6px #b388ff"></span>I-6 F1 (IOR)
      <span class="legend-dot" style="background:#00e676;box-shadow:0 0 6px #00e676"></span>Alphasat (EMEA)
      <span class="legend-dot" style="background:#e91e63;box-shadow:0 0 6px #e91e63"></span>I-4 F2 (APAC)
      <span class="legend-dot" style="background:#00e5ff;box-shadow:0 0 6px #00e5ff"></span>I-4 F3 (AMER)
      <span class="legend-dot" style="background:#e6ee28;box-shadow:0 0 6px #e6ee28"></span>I-3 F5 (AORE)
      <span class="legend-dot spot-dot"></span>Spot au sol
    </div>

    <div id="render-error" hidden>Le globe nécessite WebGL. Essayez un navigateur compatible avec l’accélération graphique.</div>

    <!-- Volet Télémétrie HUD / Spot & Détail Satellite -->
    <article class="detail" id="detail">
      <div class="detail-header">
        <div class="status-badge badge-reserve" id="sat-status-badge">AUCUNE SÉLECTION</div>
        <div class="sat-id-tag" id="sat-cat-id">NORAD —</div>
      </div>

      <h2 id="sat-name">Aucun satellite</h2>
      <p class="norad" id="norad">Sélectionnez un satellite dans la liste, sur le globe 3D ou sur la carte 2D.</p>

      <!-- Section SPOT AU SOL & COUVERTURE GÉOGRAPHIQUE RÉELLE -->
      <div class="hud-box spot-box">
        <div class="hud-box-header">
          <div class="hud-box-title">${gt("target")} COUVERTURE & SPOT AU SOL</div>
          <div class="spot-mode-toggle" role="group" aria-label="Mode de spot">
            <button id="spot-mode-service" class="spot-mode-btn" aria-pressed="false" title="Zone régionale simplifiée, sans garantie de réception">Zone indicative</button>
            <button id="spot-mode-global" class="spot-mode-btn active" aria-pressed="true" title="Visibilité géométrique au-dessus de 5° d’élévation">Horizon 5°</button>
          </div>
        </div>
        <div class="spot-grid">
          <div>
            <span>Point sous-satellite (Nadir)</span>
            <strong id="spot-coords" class="coord-glow">—</strong>
          </div>
          <div>
            <span>Région de référence</span>
            <strong id="spot-zone-name">—</strong>
          </div>
          <div>
            <span id="spot-mode-label">Diamètre du faisceau</span>
            <strong id="spot-diameter">—</strong>
          </div>
          <div>
            <span>Surface de l’empreinte</span>
            <strong id="spot-area">—</strong>
          </div>
        </div>

        <div class="coverage-detail-block">
          <div class="coverage-subhead">RÉGIONS ASSOCIÉES AU SATELLITE</div>
          <div class="badge-cluster" id="spot-countries">
            <span class="coverage-tag">—</span>
          </div>

          <div class="coverage-subhead">SERVICES RÉFÉRENCÉS</div>
          <div class="badge-cluster" id="spot-services">
            <span class="service-tag">—</span>
          </div>

          <div class="spot-beam-type-line">
            <span>Architecture :</span>
            <strong id="spot-beam-type">—</strong>
          </div>

          <!-- Section Spécifique Sécurité Aéronautique (FIT Asia 2025 Slide 6 & 7) -->
          <div id="satcom-datalink-block" class="satcom-datalink-block" hidden>
            <div class="coverage-subhead">LIAISON DE SÉCURITÉ AÉRONAUTIQUE (FANS / IRIS)</div>
            <div class="satcom-datalink-desc" id="satcom-datalink-desc">—</div>
            <div class="satcom-gateways" id="satcom-gateways">—</div>
            <div class="satcom-acars" id="satcom-acars">—</div>
          </div>
        </div>

        <p id="coverage-note" class="coverage-note">Visibilité théorique à partir de 5° d’élévation. La réception dépend du service et de l’antenne.</p>
        <button id="center-spot" class="hud-action-btn">${gt("target")} Centrer la vue sur le satellite et son spot</button>
      </div>

      <!-- Section TÉLÉMÉTRIE ORBITALE -->
      <div class="hud-box telemetry-box">
        <div class="hud-box-title">${gt("satellite")} POSITION ORBITALE CALCULÉE</div>
        <div class="metrics">
          <div><span>Altitude</span><strong id="altitude">—</strong></div>
          <div><span>Vitesse orbitale</span><strong id="velocity">—</strong></div>
          <div><span>Bande & Débit</span><strong id="sat-band-capacity">—</strong></div>
          <div><span>Slot orbital</span><strong id="orbital-slot">—</strong></div>
        </div>
      </div>

      <!-- Section OBSERVATEUR / MON ANTENNE -->
      <div class="hud-box antenna-box">
        <div class="hud-box-header">
          <div class="hud-box-title">${gt("antenna")} POINTAGE MON ANTENNE</div>
          <select id="obs-select" class="obs-select" aria-label="Sélectionner la station d'observation">
            ${Yo.map(n=>`<option value="${n.id}">${n.name}</option>`).join("")}
          </select>
        </div>
        <div class="antenna-verdict" id="antenna-verdict">
          <span class="verdict-dot"></span>
          <span id="verdict-text">Calcul de la visibilité…</span>
        </div>
        <div class="antenna-metrics">
          <div><span>Élévation</span><strong id="antenna-elev">—</strong></div>
          <div><span>Azimut</span><strong id="antenna-azim">—</strong></div>
          <div><span>Distance (portée)</span><strong id="antenna-range">—</strong></div>
          <div><span>Trajet radio A/R théorique</span><strong id="antenna-rtt">—</strong></div>
        </div>
      </div>

      <div class="detail-actions">
        <button class="follow" id="follow">${gt("focus")} Suivre le satellite</button>
      </div>

      <p id="epoch" class="epoch">Éléments orbitaux : —</p>
    </article>
  </section>
</main>

<!-- Barre chronologique & simulation -->
<footer class="timeline">
  <div class="time-display">
    <div class="eyebrow">TEMPS DE SIMULATION · UTC</div>
    <time id="sim-date">—</time>
  </div>
  <div class="time-controls">
    <button id="pause" class="play-button" aria-label="Mettre en pause">${gt("pause")}</button>
    <div class="speed">
      <span>VITESSE DU TEMPS</span>
      <div role="group" aria-label="Vitesse de simulation">
        ${[1,10,100,1e3].map(n=>`<button data-speed="${n}" class="${n===1?"active":""}">×${n.toLocaleString("fr-FR")}</button>`).join("")}
      </div>
    </div>
    <button id="live" class="reset-button">${gt("rotate-ccw")} Temps réel</button>
  </div>
  <div class="scrubber">
    <div>
      <span id="start-time">−12 h</span>
      <span id="offset">Maintenant</span>
      <span>+12 h</span>
    </div>
    <input id="seek" type="range" min="-720" max="720" value="0" step="1" aria-label="Décaler le temps de simulation">
  </div>
</footer>

<!-- Modale À propos & Sources -->
<dialog id="info-dialog">
  <button id="close-info" class="icon-button" aria-label="Fermer">${gt("x")}</button>
  <div class="eyebrow">MISSION CONTROL · CONSTELLATION BANDE L</div>
  <h2>Suivi orbital et empreintes terrestres Bande L en temps réel.</h2>
  <p>Cette application suit cinq satellites de la flotte <strong>Inmarsat bande L</strong> : I-6 F1, Alphasat, I-4 F2, I-4 F3 et I-3 F5. Les positions sont calculées par SGP4 à partir d’éléments orbitaux CelesTrak ; elles ne sont pas une télémétrie mesurée en direct.</p>
  
  <h3>Comment fonctionne le spot sur la Terre ?</h3>
  <p>Le point sous-satellite et les empreintes sont projetés sur la Terre. Deux représentations sont disponibles :</p>
  <ul>
    <li><strong>Zone indicative :</strong> Cercle régional simplifié pour situer la région de référence du satellite. Il ne représente pas les faisceaux commerciaux réels.</li>
    <li><strong>Horizon global (5°) :</strong> Calotte d'horizon théorique maximal pour une visibilité à 5° au-dessus de l'horizon (~17 000 km de diamètre en GEO).</li>
    <li><strong>Cible au sol (Nadir) :</strong> Localise la latitude et la longitude exactes à la verticale sous le satellite avec réticule radar pulsant.</li>
    <li><strong>Faisceau 3D :</strong> Axe laser central et rayons de guidage descendant du satellite vers son spot au sol.</li>
    <li><strong>Calculateur Mon Antenne :</strong> Affiche la visibilité géométrique, l’azimut, l’élévation, la portée et le temps de trajet radio théorique. Il ne confirme ni réception, ni abonnement, ni disponibilité commerciale.</li>
  </ul>
  <p>La <a href="https://www.icao.int/sites/default/files/APAC/Meetings/2024/2024%20FIT-Asia-14/4-Information%20Papers/IP04-Inmarsat-Aeronautical-Satellite-Safety-Communications-Update.pdf" target="_blank" rel="noopener">carte présentée par Inmarsat à l’OACI en juillet 2024 (page 2)</a> donne une vue illustrative de la flotte. Pour connaître une couverture commerciale, consultez la carte du produit concerné chez l’opérateur.</p>

  <h3>Sources officielles :</h3>
  <p>${X0.map(n=>`<a href="${n.url}" target="_blank" rel="noopener">${n.title}</a>`).join("<br>")}</p>
</dialog>
`;const ov={Search:O0,Orbit:C0,Play:P0,Pause:L0,RotateCcw:U0,Plus:D0,Minus:R0,Focus:b0,ChevronRight:S0,ArrowUpRight:M0,Radio:I0,X:k0,Info:A0,Satellite:N0,Globe:T0,Map:w0,Target:z0,Antenna:x0,Compass:y0,Signal:F0,Sparkles:B0,Filter:E0},Ga=()=>H0({icons:ov});Ga();const k=n=>document.querySelector(n),tt=new V0,Zt=new G0;let vt=[],ke=null,wn=!1,Ps="",Ri="all",hc=0,mi=0,Ea=0,pi="3d",Un,qn,on,Bt,Pt,pt,lt,As,ss=new In,di=!0,Hs=!0,Ui=!0,Oa=!0,ls="space",jc=!0,_t=null;const La=new Map;let qe=null;function ms(n){if(n.meta?.slide5Color)return new it(n.meta.slide5Color).getHex();const e=n.meta?.category;return e==="viasat"?58879:e==="gx"?65437:e==="arctic"?12623103:6014179}function gs(n,e,t=e){const i=qc(n.satrec,e);if(!i?.position||!i.velocity)return null;const s=Ys(e),a=Yc(i.position,s),r=J0(i.position,t,ls);return!Number.isFinite(a.height)||a.height<0?null:{vector:new F(r.x,r.y,r.z),alt:a.height,lat:a.latitude*180/Math.PI,lon:a.longitude*180/Math.PI,velocity:Math.hypot(i.velocity.x,i.velocity.y,i.velocity.z)}}function lv(){try{Bt=new zg({antialias:!0,alpha:!0,powerPreference:"high-performance"}),Bt.setPixelRatio(Math.min(devicePixelRatio||1,2.5)),Bt.setClearColor(396049,0),Bt.toneMapping=fc,Bt.toneMappingExposure=1.15,k("#globe").append(Bt.domElement),Pt=new Od,Pt.add(ss),pt=new fn(40,1,.01,100),pt.position.set(11,7,18),lt=new Hg(pt,Bt.domElement),lt.enableDamping=!0,lt.minDistance=1.35,lt.maxDistance=80,lt.enablePan=!1,lt.autoRotateSpeed=.45;const n=Bt.capabilities.getMaxAnisotropy(),e=new $d,t=e.load(`${Ca}textures/earth.jpg`);t.colorSpace=ln,t.anisotropy=n;const i=e.load(`${Ca}textures/specular.jpg`);i.anisotropy=n;const s=e.load(`${Ca}textures/normal.jpg`);s.anisotropy=n,Un=new kt(new Bi(1,128,96),new Gd({map:t,specularMap:i,normalMap:s,normalScale:new He(.85,.85),specular:new it(2642032),shininess:32,color:16777215})),Pt.add(Un),Pt.add(new Jd(9416393,1.35));const a=new jd(16777215,2.9);a.name="sunlight",Pt.add(a);const r=new kt(new Bi(1.032,96,64),new Jn({transparent:!0,side:jt,blending:Ir,depthWrite:!1,vertexShader:"varying vec3 n; varying vec3 v; void main(){n=normalize(normalMatrix*normal);vec4 p=modelViewMatrix*vec4(position,1.0);v=normalize(-p.xyz);gl_Position=projectionMatrix*p;}",fragmentShader:"varying vec3 n; varying vec3 v; void main(){float a=pow(1.0-abs(dot(n,v)),3.5);gl_FragColor=vec4(0.08,0.65,1.0,a*0.65);}"}));Pt.add(r);const o=new Float32Array(3600);for(let d=0;d<o.length;d+=3){let f=d*2.399963,p=Math.acos(1-2*(d/3+.5)/1200);o[d]=60*Math.sin(p)*Math.cos(f),o[d+1]=60*Math.cos(p),o[d+2]=60*Math.sin(p)*Math.sin(f)}const l=new wt;l.setAttribute("position",new bn(o,3)),Pt.add(new Hd(l,new Ic({color:9347764,size:.05,transparent:!0,opacity:.65}))),_t=new Zc(Pt,Un),_t.setMode(Fn),As=new eu,As.params.Points.threshold=.22;let c;Bt.domElement.addEventListener("pointerdown",d=>c={x:d.clientX,y:d.clientY}),Bt.domElement.addEventListener("pointerup",d=>{if(!c||Math.hypot(d.clientX-c.x,d.clientY-c.y)>5||!qn)return;const f=Bt.domElement.getBoundingClientRect();As.setFromCamera(new He((d.clientX-f.left)/f.width*2-1,-((d.clientY-f.top)/f.height)*2+1),pt);const p=As.intersectObject(qn,!0).find(g=>!As.intersectObject(Un).some(x=>x.distance<g.distance));p&&Zs(vt.find(g=>g.data.NORAD_CAT_ID===p.object.userData.satelliteId))});let h=!1;new ResizeObserver(()=>{const d=k("#globe").getBoundingClientRect();!d.width||!d.height||(Bt.setSize(d.width,d.height),pt.aspect=d.width/d.height,h||(pt.position.setLength(Math.max(21,7.4/(Math.tan(Oi.degToRad(20))*pt.aspect))),h=!0),pt.updateProjectionMatrix(),wn&&qa())}).observe(k("#globe"))}catch(n){Bt?.dispose(),Bt=null,Pt=null,pt=null,lt=null,k("#view-mode-3d").disabled=!0,k("#view-mode-3d").title="WebGL indisponible : la carte 2D reste accessible",Ya("2d"),console.error(n)}}function vi(n){if(!Bt){vt.forEach(r=>{r.current=gs(r,n)}),ke&&Math.abs(tt.time-Ea)>3e4&&(Ea=tt.time,qe.groundTrack=Fa(ke,n)),qe?.update(n,vt);return}Un.rotation.y=Ao(n,ls),Un.updateMatrixWorld(!0),vt.forEach((r,o)=>{const l=gs(r,n);r.current=l});const e=new Set;if(wn&&Ui&&pi==="3d")for(const r of vt){if(!r.current)continue;const o=r.data.NORAD_CAT_ID;let l=La.get(o);l||(l=new Zc(Pt,Un,{includeGroundStations:!1}),La.set(o,l)),l.toggleBeam(Oa),l.updateSpot(r.current.vector,r.current.alt,{color:ms(r),mode:Fn,serviceRadiusDeg:r.meta?.serviceSpotRadiusDeg||26,coverageZone:r.meta?.coverageZone}),e.add(o)}for(const[r,o]of La)e.has(r)||o.hide();const i=(12-(n.getUTCHours()+n.getUTCMinutes()/60))/24*Math.PI*2+Ao(n,ls),s=(n-Date.UTC(n.getUTCFullYear(),0,0))/864e5,a=.409*Math.sin(2*Math.PI*(s-81)/365.25);Pt.getObjectByName("sunlight").position.set(Math.cos(i)*10,Math.sin(a)*10,-Math.sin(i)*10),ke?.current?pi==="3d"&&(Ui&&_t?(_t.updateSpot(ke.current.vector,ke.current.alt,{color:ms(ke),serviceColor:65437,mode:Fn,serviceRadiusDeg:ke.meta?.serviceSpotRadiusDeg||26,coverageZone:ke.meta?.coverageZone,satLat:ke.current.lat,satLon:ke.current.lon}),_t.toggleBeam(Oa)):_t&&_t.hide()):_t&&_t.hide(),(ke||wn)&&Math.abs(tt.time-mi)>(ls==="space"?6e5:3e5)&&(mi=tt.time,$o(n),$s(n)),ke&&Math.abs(tt.time-Ea)>3e4&&(Ea=tt.time,qe&&(qe.groundTrack=Fa(ke,n))),qe&&pi==="2d"&&qe.update(n,vt)}function Fa(n,e){if(!n?.satrec)return[];const t=[],i=864e5/(n.data?.MEAN_MOTION||1),s=60,a=i/s;for(let r=-s/2;r<=s/2;r++){const o=new Date(+e+r*a),l=qc(n.satrec,o);if(l?.position){const c=Yc(l.position,Ys(o));t.push({lat:c.latitude*180/Math.PI,lon:c.longitude*180/Math.PI})}}return t}function $o(n){if(!Pt)return;if(!ke){on&&(on.visible=!1);return}on&&(Pt.remove(on),on.geometry.dispose(),on.material.dispose());const e=[],t=864e5/ke.data.MEAN_MOTION;for(let i=0;i<=180;i++){const s=gs(ke,new Date(+n+t*i/180),n);s&&e.push(s.vector)}on=new qs(new wt().setFromPoints(e),new Ii({color:ms(ke),transparent:!0,opacity:.85,linewidth:2})),on.visible=di,Pt.add(on)}function $s(n){for(const e of[...ss.children])ss.remove(e),e.geometry.dispose(),e.material.dispose();if(ss.visible=di,!(!Pt||!wn))for(const e of vt){const t=[],i=864e5/e.data.MEAN_MOTION;for(let a=0;a<=180;a++){const r=gs(e,new Date(+n+i*a/180),n);r&&t.push(r.vector)}if(t.length<2)continue;const s=new qs(new wt().setFromPoints(t),new Ii({color:ms(e),transparent:!0,opacity:.6}));ss.add(s)}}function cv(n){const e=n.meta||{},t=Number(n.data?.NORAD_CAT_ID??e.id);if(Ri==="ior"){if(t!==50319)return!1}else if(Ri==="emea"){if(t!==39215)return!1}else if(Ri==="apac"){if(t!==28899)return!1}else if(Ri==="amer"){if(t!==33278)return!1}else if(Ri==="aore"&&t!==25153)return!1;if(!Ps)return!0;const i=`${e.name||""} ${e.alias||""} ${e.region||""} ${e.band||""} ${n.data?.OBJECT_NAME||""} ${n.data?.NORAD_CAT_ID||""}`.toLowerCase();return i.includes(Ps)||i.replace(/[^a-z0-9]/g,"").includes(Ps.replace(/[^a-z0-9]/g,""))}function zt(n){return String(n||"").replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function hv(n){return n==="service"?'<span class="status-pill status-service">🟢 En service</span>':n==="testing"?'<span class="status-pill status-test">🟡 En test</span>':n==="partner"?'<span class="status-pill status-partner">🔵 Partenaire</span>':n==="reserve"?'<span class="status-pill status-reserve">⚪ Réserve</span>':'<span class="status-pill">Opérationnel</span>'}function Ks(){const n=vt.filter(cv);k("#count").textContent=`${n.length} / ${vt.length}`,k("#sat-list").innerHTML=n.length?n.map(e=>`
      <button class="sat-row ${ke===e||wn?"selected":""}" data-id="${e.data.NORAD_CAT_ID}">
        <span class="sat-symbol ${e.meta?.category||""}">${gt(e.meta?.category==="viasat"?"satellite":"orbit")}</span>
        <span class="sat-info">
          <strong class="sat-title">${zt(e.meta?.name||e.data.OBJECT_NAME)}</strong>
          <small class="sat-sub">${zt(e.meta?.orbitalSlot||"")} · <span class="band-tag">${zt(e.meta?.band||"Ka")}</span></small>
        </span>
        <span class="sat-status-col">${hv(e.meta?.status)}</span>
        ${gt("chevron-right")}
      </button>
    `).join(""):'<div class="empty">Aucun satellite trouvé pour ce filtre.<br>Essayez un autre mot-clé.</div>',Ga()}function Ba(){ke=null,wn=!1,k("#show-fleet").setAttribute("aria-pressed","false"),Wa(),k("#detail")?.classList.add("empty-selection"),k("#sat-name").textContent="Aucun satellite",k("#sat-cat-id").textContent="NORAD —";const n=k("#sat-status-badge");n.className="status-badge badge-reserve",n.textContent="AUCUNE SÉLECTION",k("#norad").textContent="Sélectionnez un satellite dans la liste ou sur la carte pour afficher sa trajectoire, ses paramètres orbitaux et sa zone de couverture.",k("#sat-band-capacity").textContent="—",k("#orbital-slot").textContent="—",k("#spot-coords").textContent="—",k("#spot-zone-name").textContent="—",k("#spot-diameter").textContent="—",k("#spot-area").textContent="—",k("#spot-countries").innerHTML='<span class="coverage-tag">—</span>',k("#spot-services").innerHTML='<span class="service-tag">—</span>',k("#spot-beam-type").textContent="—",k("#satcom-datalink-block").hidden=!0,k("#altitude").textContent="—",k("#velocity").textContent="—",k("#antenna-verdict").className="antenna-verdict",k("#verdict-text").textContent="Sélectionnez un satellite pour pointer votre antenne",k("#antenna-elev").textContent="—",k("#antenna-azim").textContent="—",k("#antenna-range").textContent="—",k("#antenna-rtt").textContent="—",k("#epoch").textContent="Éléments orbitaux : —",_t&&_t.hide(),on&&(on.visible=!1),$s(new Date(tt.time)),Ks(),Xa(),qe&&qe.setSatellite(null,[])}function Zs(n,{follow:e=!0}={}){if(!n){Ba();return}ke=n,wn=!1,k("#show-fleet").setAttribute("aria-pressed","false"),k("#detail").scrollTop=0,k("#detail")?.classList.remove("empty-selection");const t=n.meta||{};k("#sat-name").textContent=t.name||n.data.OBJECT_NAME,k("#sat-cat-id").textContent=`NORAD ${n.data.NORAD_CAT_ID}`;const i=k("#sat-status-badge");i.className="status-badge",t.status==="service"?(i.textContent="🟢 EN SERVICE COMMERCIAL",i.classList.add("badge-service")):t.status==="testing"?(i.textContent="🟡 EN COURS DE TEST / DÉPLOIEMENT",i.classList.add("badge-testing")):t.status==="partner"?(i.textContent="🔵 CHARGE UTILE PARTENAIRE",i.classList.add("badge-partner")):t.status==="reserve"?(i.textContent="⚪ RÉSERVE OPÉRATIONNELLE",i.classList.add("badge-reserve")):i.textContent="SATELLITE OPÉRATIONNEL",k("#norad").textContent=`${t.alias||""} · ${t.description||""}`,k("#sat-band-capacity").textContent=`${t.band||"Ka"} · ${t.capacity||"Haut débit"}`,k("#orbital-slot").textContent=t.orbitalSlot||"—";const s=t.coverageZone;k("#spot-zone-name").textContent=s?.name||t.region||"Couverture globale",k("#spot-beam-type").textContent=s?.beamArchitecture||t.spotBeamType||"Bande Ka Viasat",s?.countries&&s.countries.length?k("#spot-countries").innerHTML=s.countries.map(h=>`<span class="coverage-tag">${zt(h)}</span>`).join(""):k("#spot-countries").innerHTML=`<span class="coverage-tag">${zt(t.region||"Zone globale")}</span>`,s?.services&&s.services.length?k("#spot-services").innerHTML=s.services.map(h=>`<span class="service-tag">${zt(h)}</span>`).join(""):k("#spot-services").innerHTML='<span class="service-tag">Connectivité satellite</span>';const a=k("#satcom-datalink-block");if(t.gateways||t.safetyDataLink){a.hidden=!1;const h=t.safetyDataLink||{},d=[];h.fans&&d.push(`<strong>${zt(h.fans)}</strong>`),h.iris&&d.push(`<strong>Iris:</strong> ${zt(h.iris)}`),h.classicAero&&d.push(`<strong>Classic:</strong> ${zt(h.classicAero)}`),h.sbs&&d.push(`<strong>SB-S:</strong> ${zt(h.sbs)}`),h.voice&&d.push(`<strong>Voix:</strong> ${zt(h.voice)}`),k("#satcom-datalink-desc").innerHTML=d.join(" · ")||"Liaison de données aéronautique opérationnelle";const f=t.gateways;f?(k("#satcom-gateways").innerHTML=`🏢 <strong>Gateways sol (Passerelles Slide 6) :</strong> Primaire: ${zt(f.primary||"—")} · Secondaire: ${zt(f.secondary||"Aucune")}`,k("#satcom-acars").innerHTML=`📡 <strong>Codes ACARS :</strong> ARINC: <code>${zt(f.arinc||"—")}</code> | SITA: <code>${zt(f.sita||"—")}</code> | ADCC: <code>${zt(f.adcc||"—")}</code>`):(k("#satcom-gateways").innerHTML="",k("#satcom-acars").innerHTML="")}else a.hidden=!0;const r=new Date(n.data.EPOCH.endsWith("Z")?n.data.EPOCH:n.data.EPOCH+"Z"),o=Math.max(0,Math.floor((Date.now()-r.getTime())/864e5)),l=n.data.DATA_SOURCE==="fallback"?"Données de secours":"CelesTrak";k("#epoch").textContent=`${l} · Éléments OMM du ${r.toLocaleString("fr-FR",{timeZone:"UTC",day:"2-digit",month:"2-digit",year:"numeric",hour:"2-digit",minute:"2-digit"})} UTC${o?` · âge : ${o} j`:""}${o>7?" · Précision dégradée":""}`,Ks(),mi=0;const c=new Date(tt.time);if(vi(c),$o(c),$s(c),Va(),qe){const h=Fa(n,c);qe.setSatellite(n,h)}e&&th()}function Va(){const n=ke?.current;if(!n){k("#altitude").textContent="Indisponible",k("#velocity").textContent="—",k("#spot-coords").textContent="—",k("#spot-diameter").textContent="—",k("#spot-area").textContent="—";return}k("#altitude").textContent=`${Math.round(n.alt).toLocaleString("fr-FR")} km`;const e=Math.round(n.velocity*3600);k("#velocity").textContent=`${n.velocity.toFixed(2)} km/s (${e.toLocaleString("fr-FR")} km/h)`;const t=`${Math.abs(n.lat).toFixed(2)}° ${n.lat>=0?"N":"S"}`,i=`${Math.abs(n.lon).toFixed(2)}° ${n.lon>=0?"E":"O"}`;k("#spot-coords").textContent=`${t} · ${i}`;const s=ke?.meta||{},a=Fn==="global",r=a?ps(n.alt,5):ps(n.alt,5,s.serviceSpotRadiusDeg||26);k("#spot-mode-label").textContent=a?"Diamètre horizon 5°":"Diamètre indicatif",k("#coverage-note").textContent=a?"Visibilité théorique à partir de 5° d’élévation. La réception dépend du service et de l’antenne.":"Cercle régional illustratif. Ce contour ne représente pas les faisceaux commerciaux réels et ne garantit aucune réception.",k("#spot-diameter").textContent=`${r.diameterKm.toLocaleString("fr-FR")} km`;const o=(r.areaKm2/1e6).toFixed(1);k("#spot-area").textContent=`${o} M km² (${r.areaPctEarth}%)`,Jc(n)}function Jc(n){if(!xn||!n)return;const e=nv(xn.lat,xn.lon,n.lat,n.lon,n.alt,5),t=k("#antenna-verdict"),i=k("#verdict-text"),s=ke?.meta,a=Y0(xn.lat,xn.lon,s);if(e.inFootprint){t.className="antenna-verdict in-coverage";const r=Fn==="service"?` · ${a?"Dans":"Hors de"} la zone indicative`:"";i.textContent=`VISIBLE À 5° · ${xn.name}${r}. Réception non vérifiée.`}else t.className="antenna-verdict out-coverage",i.textContent=e.elevationDeg>0?`SOUS LE SEUIL DE 5° · ${xn.name} · Satellite au-dessus de l’horizon`:`SOUS L’HORIZON · ${xn.name}`;k("#antenna-elev").textContent=`${e.elevationDeg>0?"+":""}${e.elevationDeg}°`,k("#antenna-azim").textContent=`${e.azimuthDeg}° (${e.compass})`,k("#antenna-range").textContent=`${e.slantRangeKm.toLocaleString("fr-FR")} km`,k("#antenna-rtt").textContent=`${e.rttMs} ms`}k("#spot-mode-service").onclick=()=>{Fn="service",k("#spot-mode-service").classList.add("active"),k("#spot-mode-global").classList.remove("active"),k("#spot-mode-service").setAttribute("aria-pressed","true"),k("#spot-mode-global").setAttribute("aria-pressed","false"),_t&&_t.setMode("service"),qe&&qe.setSpotMode("service"),Va(),vi(new Date(tt.time))};k("#spot-mode-global").onclick=()=>{Fn="global",k("#spot-mode-global").classList.add("active"),k("#spot-mode-service").classList.remove("active"),k("#spot-mode-global").setAttribute("aria-pressed","true"),k("#spot-mode-service").setAttribute("aria-pressed","false"),_t&&_t.setMode("global"),qe&&qe.setSpotMode("global"),Va(),vi(new Date(tt.time))};async function Ko(){const n=k("#refresh");n.disabled=!0,k("#source-text").textContent="Téléchargement de la flotte Bande L…";try{let e=null;try{const o=await fetch("/api/satellites",{signal:AbortSignal.timeout(8e3)});o.ok&&(e=await o.json())}catch{}if(!e||!Array.isArray(e.items)||!e.items.length){const o=`${Ca}data/fleet-viasat.json`,l=await fetch(o);if(!l.ok)throw new Error("Impossible de charger les données orbitales");e={items:(await l.json()).map(h=>({...h,DATA_SOURCE:"fallback"})),live:!1,allLive:!1,degraded:!0,degradedSources:["static"],liveSources:[],fetchedAt:null}}let t=[];for(const o of e.items)if(Kc(o))try{const l=u0(o);gs({satrec:l},new Date(tt.time))&&t.push({data:o,satrec:l,kind:"satellite",meta:Na(o)})}catch{}if(!t.length)throw new Error("Aucun satellite valide");const i=ke?.data.NORAD_CAT_ID,s=Zt.active,a=wn;if(vt=t.sort((o,l)=>(o.meta?.order??99)-(l.meta?.order??99)),qe&&qe.setFleet(vt),Pt&&(qn&&(Pt.remove(qn),j0(qn)),qn=new In,vt.forEach(o=>qn.add(K0(o.data.NORAD_CAT_ID,ms(o)))),Pt.add(qn)),dv(),a)ih(),vi(new Date(tt.time)),$s(new Date(tt.time)),mi=tt.time;else if(i){const o=vt.find(l=>l.data.NORAD_CAT_ID===i);o?Zs(o,{follow:!1}):Ba()}else Ba();s&&ke?.current&&(Zt.update(pt.position,ke.current.vector,lt.target),Zo());const r=$0(e);k("#source-text").textContent=r.message,k("#status-label").textContent=r.label,k(".source-dot").classList.toggle("offline",r.level==="offline"),k(".source-dot").classList.toggle("degraded",r.level==="degraded"),!i&&!a&&qa()}catch(e){console.error(e),k("#source-text").textContent="Données indisponibles · réessayez",k("#status-label").textContent=vt.length?"Actualisation impossible · données précédentes":"Données orbitales indisponibles",k(".source-dot").classList.add("offline"),k(".source-dot").classList.remove("degraded"),vt.length||(k("#sat-list").innerHTML='<div class="empty">Impossible de charger la flotte Bande L.<br>Vérifiez votre connexion.</div>')}finally{n.disabled=!1}}function xs(){const n=new Date(tt.time);k("#sim-date").textContent=`${n.toLocaleString("fr-FR",{timeZone:"UTC",day:"2-digit",month:"short",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"})} UTC`,k("#mode").textContent=tt.paused?"EN PAUSE":tt.live?"TEMPS RÉEL":`SIMULATION ×${tt.speed.toLocaleString("fr-FR")}`,k("#mode").classList.toggle("simulation",!tt.live||tt.paused);const e=(tt.time-Date.now())/6e4;k("#seek").value=Math.max(-720,Math.min(720,e)),k("#offset").textContent=W0(e)}document.querySelectorAll(".cat-pill").forEach(n=>{n.onclick=()=>{document.querySelectorAll(".cat-pill").forEach(e=>e.classList.toggle("active",e===n)),Ri=n.dataset.cat,Ks()}});k("#sat-list").addEventListener("click",n=>{const e=n.target.closest("[data-id]");e&&Zs(vt.find(t=>t.data.NORAD_CAT_ID===Number(e.dataset.id)))});k("#search").addEventListener("input",n=>{Ps=n.target.value.toLowerCase(),Ks()});k("#obs-select").addEventListener("change",n=>{const e=Yo.find(t=>t.id===n.target.value);e&&(xn=e,qe&&qe.setObserver(xn),ke?.current&&Jc(ke.current))});document.querySelectorAll("[data-speed]").forEach(n=>{n.onclick=()=>{tt.setSpeed(Number(n.dataset.speed)),document.querySelectorAll("[data-speed]").forEach(e=>e.classList.toggle("active",e===n)),xs()}});function Qc(){k("#pause").innerHTML=gt(tt.paused?"play":"pause"),k("#pause").setAttribute("aria-label",tt.paused?"Reprendre":"Mettre en pause"),Ga()}k("#pause").onclick=()=>{tt.paused=!tt.paused,tt.paused&&(tt.live=!1),Qc(),xs()};k("#live").onclick=()=>{tt.reset(),Qc(),document.querySelectorAll("[data-speed]").forEach(n=>n.classList.toggle("active",n.dataset.speed==="1")),mi=0,xs()};k("#seek").addEventListener("input",n=>{tt.seek(Date.now()+Number(n.target.value)*6e4),mi=0,xs()});k("#refresh").onclick=Ko;k("#about").onclick=()=>k("#info-dialog").showModal();k("#close-info").onclick=()=>k("#info-dialog").close();k("#info-dialog").onclick=n=>{n.target===k("#info-dialog")&&k("#info-dialog").close()};function eh(n){if(!pt)return;const e=pt.position.clone().sub(lt.target);e.setLength(Oi.clamp(e.length()*n,lt.minDistance,lt.maxDistance)),pt.position.copy(lt.target).add(e),lt.update()}k("#zoom-in").onclick=()=>eh(.8);k("#zoom-out").onclick=()=>eh(1.2);k("#home-view").onclick=qa;k("#center-spot").onclick=()=>{if(pi==="2d"&&ke?.current){const i=Fn==="service"?ke.meta?.coverageZone?.center:null;qe.centerAt(i?.lat??ke.current.lat,i?.lon??ke.current.lon);return}if(!pt||!ke?.current||!Un)return;Wa();const n=Fn==="service"?ke.meta?.coverageZone:null;let e,t;if(n?.center){const s=wo(n.center.lat,n.center.lon,1).clone().applyMatrix4(Un.matrixWorld);e=s,t=s.clone().normalize().multiplyScalar(2.65)}else{const i=ke.current.vector.clone().normalize();e=i.clone().multiplyScalar(1),t=i.clone().multiplyScalar(2.85)}lt.target.copy(e),pt.position.copy(t),lt.update()};k("#follow").onclick=()=>{Zt.active?Wa():th()};function Zo(){k("#follow").innerHTML=gt("focus")+(Zt.active?" Arrêter le suivi":" Suivre le satellite"),k("#follow").setAttribute("aria-pressed",String(Zt.active)),k(".view-label").textContent=Zt.active?`SUIVI · ${ke.meta?.name||"SATELLITE"}`:wn?"VUE FLOTTE":"VUE GLOBALE",k(".view-label").classList.toggle("tracking",Zt.active),k("#auto-view").disabled=Zt.active,Ga()}function th(){if(!pt||!ke?.current)return;lt.autoRotate=!1,lt.enableDamping=!1,lt.update();const n=ke.current.vector,e=n.length();lt.target.copy(n),pt.position.copy(n).addScaledVector(n.clone().normalize(),Math.max(3,e*.9)).add(new F(0,Math.max(1,e*.28),0)),lt.update(),lt.enableDamping=!0,Zt.start(n),Zo()}function Wa(){Zt.stop(),lt&&(lt.target.set(0,0,0),lt.update()),Zo()}function dv(){k("#sat-labels").innerHTML='<svg id="label-connectors" aria-hidden="true">'+vt.map(n=>`<line data-connector="${n.data.NORAD_CAT_ID}"/>`).join("")+"</svg>"+vt.map(n=>`<button class="sat-label ${n.meta?.category||""}" data-satellite="${n.data.NORAD_CAT_ID}" aria-label="Sélectionner ${zt(n.meta?.name)}">${zt(n.meta?.name)}</button>`).join(""),k("#sat-labels").querySelectorAll("button").forEach(n=>{n.onclick=()=>Zs(vt.find(e=>e.data.NORAD_CAT_ID===Number(n.dataset.satellite)))})}function Xa(){if(!pt||pi!=="3d")return;const n=k("#globe").getBoundingClientRect();for(const e of vt){const t=k(`#sat-labels [data-satellite="${e.data.NORAD_CAT_ID}"]`),i=k(`[data-connector="${e.data.NORAD_CAT_ID}"]`);if(!t)continue;const s=e===ke,a=(s||wn)&&Hs&&e.current;if(t.hidden=!a,i&&(i.style.display=a?"":"none"),!t.hidden){const r=e.current.vector.clone().project(pt);if(r.z>1||r.z<-1){t.hidden=!0,i&&(i.style.display="none");continue}const o=(r.x+1)*n.width/2,l=(1-r.y)*n.height/2,c=t.offsetWidth||80,h=t.offsetHeight||25,d=Math.max(4,Math.min(n.width-c-4,o+9)),f=Math.max(70,Math.min(n.height-h-40,l-12));t.style.transform=`translate(${d}px,${f}px)`,t.classList.toggle("chosen",s),i&&(i.setAttribute("x1",o),i.setAttribute("y1",l),i.setAttribute("x2",d),i.setAttribute("y2",f+h/2),i.setAttribute("stroke",e.meta?.slide5Color||"#00ffcc"))}}}function qa(){if(Wa(),!pt)return;lt.target.set(0,0,0);const n=Math.max(7,...vt.map(i=>i.current?.vector.length()||7)),e=Oi.degToRad(20),t=Math.min(lt.maxDistance,Math.max(n/Math.sin(e)*1.1,n/(Math.tan(e)*pt.aspect)*1.15));pt.position.set(0,.8,1).normalize().multiplyScalar(t),lt.update()}function nh(){Ps="",k("#search").value="",Ri="all",document.querySelectorAll(".cat-pill").forEach(n=>n.classList.toggle("active",n.dataset.cat==="all")),di=!0,Hs=!0,Ui=!0,k("#show-spot").checked=!0,k("#show-labels").checked=!0,k("#show-orbits").checked=!0,k("#show-fleet-lband").checked=!0,Ba(),wn=!0,ih(),qe&&(qe.toggleSpot(!0),qe.toggleOrbits(!0),qe.toggleLabels(!0),qe.toggleFleetOverlay(!0),qe.resetView()),qa(),mi=0,vi(new Date(tt.time))}function ih(){k("#show-fleet").setAttribute("aria-pressed","true"),k("#sat-name").textContent="Toute la flotte",k("#sat-status-badge").textContent=`${vt.length} SATELLITES AFFICHÉS`,k("#norad").textContent="Tous les satellites sont affichés ensemble. Cliquez sur un satellite pour retrouver ses détails et son suivi.",k(".view-label").textContent="VUE FLOTTE",Ks()}k("#show-all").onclick=nh;k("#show-fleet").onclick=nh;function sh(n){document.body.classList.toggle("menus-hidden",n),k("#toggle-menus").setAttribute("aria-pressed",String(n)),k("#toggle-menus span").textContent=n?"Afficher les menus":"Masquer les menus",requestAnimationFrame(()=>{qe?.handleResize(),Xa()})}k("#toggle-menus").onclick=()=>sh(!document.body.classList.contains("menus-hidden"));document.addEventListener("keydown",n=>{n.key==="Escape"&&document.body.classList.contains("menus-hidden")&&sh(!1)});k("#show-labels").onchange=n=>{Hs=n.target.checked,qe&&qe.toggleLabels(Hs)};k("#show-orbits").onchange=n=>{di=n.target.checked,ss.visible=di,on&&(on.visible=di),qe&&qe.toggleOrbits(di)};k("#show-spot").onchange=n=>{Ui=n.target.checked,_t&&(Ui&&ke?.current?_t.updateSpot(ke.current.vector,ke.current.alt,{color:ms(ke),serviceColor:65437,serviceRadiusDeg:ke.meta?.serviceSpotRadiusDeg||26}):_t.hide()),qe&&qe.toggleSpot(Ui)};k("#show-beam").onchange=n=>{Oa=n.target.checked,_t&&_t.toggleBeam(Oa)};k("#show-fleet-lband").onchange=n=>{qe&&qe.toggleFleetOverlay(n.target.checked)};k("#show-gateways").onchange=n=>{qe&&qe.toggleGateways(n.target.checked),_t?.groundStationsGroup&&(_t.groundStationsGroup.visible=n.target.checked)};k("#view-mode-3d").onclick=()=>Ya("3d");k("#view-mode-2d").onclick=()=>Ya("2d");function Ya(n){pi=n,k("#view-mode-3d").classList.toggle("active",n==="3d"),k("#view-mode-2d").classList.toggle("active",n==="2d"),k("#view-mode-3d").setAttribute("aria-selected",String(n==="3d")),k("#view-mode-2d").setAttribute("aria-selected",String(n==="2d")),k("#globe").hidden=n!=="3d",k("#sat-labels").hidden=n!=="3d",k("#map2d-container").hidden=n!=="2d";const e=k(".view-settings"),t=k(".globe-tools"),i=k(".globe-caption");if(e&&(e.style.display=n==="3d"?"flex":"none"),t&&(t.style.display=n==="3d"?"flex":"none"),i&&(i.style.display=n==="3d"?"flex":"none"),k("#show-beam").closest("label").hidden=n!=="3d",k("#show-fleet-lband").closest("label").hidden=n!=="2d",k("#follow").hidden=n!=="3d",n==="2d"&&qe){qe.toggleSpot(Ui),qe.toggleOrbits(di),qe.toggleLabels(Hs),qe.setFleet(vt),qe.handleResize();const s=ke?Fa(ke,new Date(tt.time)):[];qe.setSatellite(ke,s)}else n==="3d"&&vi(new Date(tt.time))}document.querySelectorAll("[data-frame]").forEach(n=>{n.onclick=()=>{ls=n.dataset.frame,document.querySelectorAll("[data-frame]").forEach(t=>t.setAttribute("aria-pressed",String(t===n))),mi=0;const e=new Date(tt.time);vi(e),$o(e),$s(e),Zt.active&&Zt.update(pt.position,ke.current.vector,lt.target),Xa()}});k("#auto-view").onchange=n=>{jc=n.target.checked};qe=new rv(k("#map2d-container"));qe.setObserver(xn);qe.setSpotMode(Fn);qe.onSelectSatellite=n=>{const e=vt.find(t=>t.data.NORAD_CAT_ID===n);e&&Zs(e)};lv();Ya(pi);Ko();xs();setInterval(Ko,72e5);let dc=performance.now();function ah(n){const e=n-dc;if(tt.tick(e),dc=n,n-hc>100){hc=n;const t=new Date(tt.time);xs(),vi(t),Va()}_t&&_t.animate(e/1e3);for(const t of La.values())t.animate(e/1e3);if(Bt&&pi==="3d"){if(Un.rotation.y=Ao(new Date(tt.time),ls),Zt.active&&ke){const i=gs(ke,new Date(tt.time));i&&(ke.current=i,Zt.update(pt.position,i.vector,lt.target))}lt.autoRotate=jc&&!Zt.active&&!tt.paused,lt.update(e/1e3);const t=Bt.domElement.clientHeight;qn?.children.forEach((i,s)=>{const a=vt[s];Z0(i,a?.current?.vector,pt,t,a===ke)}),Bt.render(Pt,pt),Xa()}requestAnimationFrame(ah)}requestAnimationFrame(ah);
