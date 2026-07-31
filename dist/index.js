"use strict";var j=function(i,a){return function(){try{return a||i((a={exports:{}}).exports,a),a.exports}catch(o){throw (a=0, o)}};};var O=j(function(L,p){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(i,a,o,q,u,g,R,m,y,s,n,t){var c,h,e,x,l,v,w,r,f;if(i<=0||a<=0)return-1;if(k([q,u])){for(e=a,x=i,f=x-1;f>=0;f--){for(l=g+f*q+(e-1)*u,w=y+(e-1)*m,r=e-1;r>=0&&o[l]===R[w];r--)l-=u,w-=m;if(r===-1)return f}return-1}for(e=i,x=a,c=-q,h=e*q-u,v=t,r=0;r<e;r++)s[v]=1,v+=n;for(l=g+(e-1)*q+(x-1)*u,w=y+(x-1)*m,f=x-1;f>=0;f--){for(v=t+(e-1)*n,r=e-1;r>=0;r--)o[l]!==R[w]&&(s[v]=0),l+=c,v-=n;l+=h,w-=m}for(v=t+(e-1)*n,r=e-1;r>=0&&s[v]!==1;r--)v-=n;return r}p.exports=z
});var S=j(function(D,F){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),I=require('@stdlib/strided-base-stride2offset/dist'),J=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),K=O();function P(i,a,o,q,u,g,R,m,y){var s,n,t;if(!B(i))throw new TypeError(E('2iVFx',i));if(G(i)?t=o:t=a,u<J(1,t))throw new RangeError(E('2iVIR',t,u));return H(i)?(s=1,n=u):(s=u,n=1),K(a,o,q,s,n,0,g,R,I(o,R),m,y,I(a,y))}F.exports=P
});var C=j(function(N,_){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),U=O();Q(V,"ndarray",U);_.exports=V
});var Y=require("path").join,Z=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),M=C(),b,T=Z(Y(__dirname,"./native.js"));$(T)?b=M:b=T;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
