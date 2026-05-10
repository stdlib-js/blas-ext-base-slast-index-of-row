"use strict";var j=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var O=j(function(L,p){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(i,a,l,f,u,g,R,m,y,q,n,o){var c,h,e,x,s,v,w,r,t;if(i<=0||a<=0)return-1;if(k([f,u])){for(e=a,x=i,t=x-1;t>=0;t--){for(s=g+t*f+(e-1)*u,w=y+(e-1)*m,r=e-1;r>=0&&l[s]===R[w];r--)s-=u,w-=m;if(r===-1)return t}return-1}for(e=i,x=a,c=-f,h=e*f-u,v=o,r=0;r<e;r++)q[v]=1,v+=n;for(s=g+(e-1)*f+(x-1)*u,w=y+(x-1)*m,t=x-1;t>=0;t--){for(v=o+(e-1)*n,r=e-1;r>=0;r--)l[s]!==R[w]&&(q[v]=0),s+=c,v-=n;s+=h,w-=m}for(v=o+(e-1)*n,r=e-1;r>=0&&q[v]!==1;r--)v-=n;return r}p.exports=z
});var S=j(function(D,F){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),I=require('@stdlib/strided-base-stride2offset/dist'),J=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),K=O();function P(i,a,l,f,u,g,R,m,y){var q,n,o;if(!B(i))throw new TypeError(E('nullFx',i));if(G(i)?o=l:o=a,u<J(1,o))throw new RangeError(E('nullIR',o,u));return H(i)?(q=1,n=u):(q=u,n=1),K(a,l,f,q,n,0,g,R,I(l,R),m,y,I(a,y))}F.exports=P
});var C=j(function(N,_){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),U=O();Q(V,"ndarray",U);_.exports=V
});var Y=require("path").join,Z=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),M=C(),b,T=Z(Y(__dirname,"./native.js"));$(T)?b=M:b=T;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
