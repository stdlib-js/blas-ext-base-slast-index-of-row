"use strict";var g=function(i,a){return function(){return a||i((a={exports:{}}).exports,a),a.exports}};var O=g(function(L,I){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(i,a,l,t,u,j,R,m,y,f,v,s){var c,p,e,w,q,n,x,r,o;if(i<=0||a<=0)return-1;if(k([t,u])){for(e=a,w=i,o=w-1;o>=0;o--){for(q=j+o*t+(e-1)*u,x=y+(e-1)*m,r=e-1;r>=0&&l[q]===R[x];r--)q-=u,x-=m;if(r===-1)return o}return-1}for(e=i,w=a,c=-t,p=e*t-u,n=s,r=0;r<e;r++)f[n]=1,n+=v;for(q=j+(e-1)*t+(w-1)*u,x=y+(w-1)*m,o=w-1;o>=0;o--){for(n=s+(e-1)*v,r=e-1;r>=0;r--)l[q]!==R[x]&&(f[n]=0),q+=c,n-=v;q+=p,x-=m}for(n=s+(e-1)*v,r=e-1;r>=0&&f[n]!==1;r--)n-=v;return r}I.exports=z
});var S=g(function(D,F){
var B=require('@stdlib/blas-base-assert-is-layout/dist'),G=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),H=require('@stdlib/ndarray-base-assert-is-column-major-string/dist'),h=require('@stdlib/strided-base-stride2offset/dist'),J=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),K=O();function P(i,a,l,t,u,j,R,m,y){var f,v,s;if(!B(i))throw new TypeError(E('nullFx',i));if(G(i)?s=l:s=a,u<J(1,s))throw new RangeError(E("invalid argument. Fifth argument must be a valid stride. Value: `%d`.",u));return H(i)?(f=1,v=u):(f=u,v=1),K(a,l,t,f,v,0,j,R,h(l,R),m,y,h(a,y))}F.exports=P
});var C=g(function(N,_){
var Q=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),U=O();Q(V,"ndarray",U);_.exports=V
});var Y=require("path").join,Z=require('@stdlib/utils-try-require/dist'),$=require('@stdlib/assert-is-error/dist'),d=C(),b,T=Z(Y(__dirname,"./native.js"));$(T)?b=d:b=T;module.exports=b;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
