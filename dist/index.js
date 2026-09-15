"use strict";var O=function(n,a){return function(){try{return a||n((a={exports:{}}).exports,a),a.exports}catch(o){throw (a=0, o)}};};var b=O(function(L,p){
var k=require('@stdlib/ndarray-base-assert-is-row-major/dist');function z(n,a,o,l,u,j,y,m,g,q,i,t){var x,h,e,w,s,v,R,r,f;if(n<=0||a<=0)return-1;if(k([l,u])){for(e=a,w=n,f=w-1;f>=0;f--){for(s=j+f*l+(e-1)*u,R=g+(e-1)*m,r=e-1;r>=0&&o[s]===y[R];r--)s-=u,R-=m;if(r===-1)return f}return-1}for(e=n,w=a,x=-l,h=e*l-u,v=t,r=0;r<e;r++)q[v]=1,v+=i;for(s=j+(e-1)*l+(w-1)*u,R=g+(w-1)*m,f=w-1;f>=0;f--){for(v=t+(e-1)*i,r=e-1;r>=0;r--)o[s]!==y[R]&&(q[v]=0),s+=x,v-=i;s+=h,R-=m}for(v=t+(e-1)*i,r=e-1;r>=0&&q[v]!==1;r--)v-=i;return r}p.exports=z
});var S=O(function(M,F){
var B=require('@stdlib/blas-base-layout-resolve-str/dist'),C=require('@stdlib/ndarray-base-assert-is-row-major-string/dist'),I=require('@stdlib/strided-base-stride2offset/dist'),G=require('@stdlib/math-base-special-fast-max/dist'),E=require('@stdlib/error-tools-fmtprodmsg/dist'),H=b();function J(n,a,o,l,u,j,y,m,g){var q,i,t,x;if(x=B(n),x===null)throw new TypeError(E('2iVFx',n));if(C(x)?(t=o,q=u,i=1):(t=a,q=1,i=u),u<G(1,t))throw new RangeError(E('2iVIR',t,u));return H(a,o,l,q,i,0,j,y,I(o,y),m,g,I(a,g))}F.exports=J
});var T=O(function(D,_){
var K=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),V=S(),P=b();K(V,"ndarray",P);_.exports=V
});var Q=require("path").join,U=require('@stdlib/utils-try-require/dist'),Y=require('@stdlib/assert-is-error/dist'),Z=T(),c,d=U(Q(__dirname,"./native.js"));Y(d)?c=Z:c=d;module.exports=c;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
