(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r)){b[r]=a[r]}}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(Object.getPrototypeOf(s)&&Object.getPrototypeOf(s).p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){Object.setPrototypeOf(a.prototype,b.prototype)
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++){inherit(b[t],a)}}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){a[b]=d()}a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t){A.cL(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.ar(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.aJ(b)
return new t(c,this)}:function(){if(t===null)t=A.aJ(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.aJ(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number"){h+=x}return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var s=staticTearOffGetter(t)
a[b]=s}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var t=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var s=instanceTearOffGetter(c,t)
a[b]=s}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var J={
aN(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cy(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.aL==null){A.cC()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.e(A.aY("Return interceptor for "+A.k(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.am
if(p==null)p=$.am=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.cH(a)
if(q!=null)return q
if(typeof a=="function")return B.o
t=Object.getPrototypeOf(a)
if(t==null)return B.f
if(t===Object.prototype)return B.f
if(typeof r=="function"){p=$.am
if(p==null)p=$.am=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.a,enumerable:false,writable:true,configurable:true})
return B.a}return B.a},
J(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.U.prototype
return J.V.prototype}if(typeof a=="string")return J.v.prototype
if(a==null)return J.D.prototype
if(typeof a=="boolean")return J.T.prototype
if(Array.isArray(a))return J.h.prototype
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
if(typeof a=="symbol")return J.ac.prototype
if(typeof a=="bigint")return J.ab.prototype
return a}if(a instanceof A.d)return a
return J.cy(a)},
cw(a){if(typeof a=="string")return J.v.prototype
if(a==null)return a
if(Array.isArray(a))return J.h.prototype
if(!(a instanceof A.d))return J.x.prototype
return a},
aO(a){return J.cw(a).gj(a)},
bv(a){return J.J(a).gi(a)},
M(a){return J.J(a).h(a)},
R:function R(){},
T:function T(){},
D:function D(){},
a:function a(){},
n:function n(){},
Y:function Y(){},
x:function x(){},
w:function w(){},
ab:function ab(){},
ac:function ac(){},
h:function h(a){this.$ti=a},
S:function S(){},
aa:function aa(a){this.$ti=a},
N:function N(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
W:function W(){},
U:function U(){},
V:function V(){},
v:function v(){}},A={aA:function aA(){},
cG(a){var t,s
for(t=$.L.length,s=0;s<t;++s)if(a===$.L[s])return!0
return!1},
ad:function ad(a){this.a=a},
bs(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
k(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.M(a)
return t},
Z(a){var t,s,r,q
if(a instanceof A.d)return A.f(A.a3(a),null)
t=J.J(a)
if(t===B.n||t===B.p||u.o.b(a)){s=B.b(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.f(A.a3(a),null)},
bE(a){var t,s,r
if(typeof a=="number"||A.aI(a))return J.M(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.p)return a.h(0)
t=$.bu()
for(s=0;s<1;++s){r=t[s].C(a)
if(r!=null)return r}return"Instance of '"+A.Z(a)+"'"},
aM(a,b){if(a==null)J.aO(a)
throw A.e(A.cv(a,b))},
cv(a,b){var t,s="index"
if(!A.bh(b))return new A.C(!0,b,s,null)
t=J.aO(a)
if(b<0||b>=t)return new A.a9(t,!0,b,s,"Index out of range")
return new A.a_(null,null,!0,b,s,"Value not in range")},
e(a){return A.c(a,new Error())},
c(a,b){var t
if(a==null)a=new A.ai()
b.dartException=a
t=A.cN
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
cN(){return J.M(this.dartException)},
br(a,b){throw A.c(a,b==null?new Error():b)},
cM(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.br(A.c5(a,b,c),t)},
c5(a,b,c){var t,s,r,q,p,o,n,m,l
if(typeof b=="string")t=b
else{s="[]=;add;removeWhere;retainWhere;removeRange;setRange;setInt8;setInt16;setInt32;setUint8;setUint16;setUint32;setFloat32;setFloat64".split(";")
r=s.length
q=b
if(q>r){c=q/r|0
q%=r}t=s[q]}p=typeof c=="string"?c:"modify;remove from;add to".split(";")[c]
o=u.j.b(a)?"list":"ByteData"
n=a.$flags|0
m="a "
if((n&4)!==0)l="constant "
else if((n&2)!==0){l="unmodifiable "
m="an "}else l=(n&1)!==0?"fixed-length ":""
return new A.ak("'"+t+"': Cannot "+p+" "+m+l+o)},
cK(a){throw A.e(new A.a6(a))},
bC(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.af().constructor.prototype):Object.create(new A.P(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.aT(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.by(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.aT(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
by(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.bw)}throw A.e("Error in functionType of tearoff")},
bz(a,b,c,d){var t=A.aS
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
aT(a,b,c,d){if(c)return A.bB(a,b,d)
return A.bz(b.length,d,a,b)},
bA(a,b,c,d){var t=A.aS,s=A.bx
switch(b?-1:a){case 0:throw A.e(new A.ae("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
bB(a,b,c){var t,s
if($.aQ==null)$.aQ=A.aP("interceptor")
if($.aR==null)$.aR=A.aP("receiver")
t=b.length
s=A.bA(t,c,a,b)
return s},
aJ(a){return A.bC(a)},
bw(a,b){return A.ao(v.typeUniverse,A.a3(a.a),b)},
aS(a){return a.a},
bx(a){return a.b},
aP(a){var t,s,r,q=new A.P("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.e(new A.C(!1,null,null,"Field name "+a+" not found."))},
cx(a){return v.getIsolateTag(a)},
cX(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
cH(a){var t,s,r,q,p,o=A.aG($.bo.$1(a)),n=$.at[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ay[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.bc($.bl.$2(a,o))
if(r!=null){n=$.at[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ay[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.az(t)
$.at[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.ay[o]=t
return t}if(q==="-"){p=A.az(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.bp(a,t)
if(q==="*")throw A.e(A.aY(o))
if(v.leafTags[o]===true){p=A.az(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.bp(a,t)},
bp(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.aN(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
az(a){return J.aN(a,!1,null,!!a.$icS)},
cJ(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.az(t)
else return J.aN(t,c,null,null)},
cC(){if(!0===$.aL)return
$.aL=!0
A.cD()},
cD(){var t,s,r,q,p,o,n,m
$.at=Object.create(null)
$.ay=Object.create(null)
A.cB()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bq.$1(p)
if(o!=null){n=A.cJ(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
cB(){var t,s,r,q,p,o,n=B.h()
n=A.z(B.i,A.z(B.j,A.z(B.c,A.z(B.c,A.z(B.k,A.z(B.l,A.z(B.m(B.b),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bo=new A.au(q)
$.bl=new A.av(p)
$.bq=new A.aw(o)},
z(a,b){return a(b)||b},
cu(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
F:function F(){},
p:function p(){},
a5:function a5(){},
ah:function ah(){},
af:function af(){},
P:function P(a,b){this.a=a
this.b=b},
ae:function ae(a){this.a=a},
au:function au(a){this.a=a},
av:function av(a){this.a=a},
aw:function aw(a){this.a=a},
aB(a,b){var t=b.c
return t==null?b.c=A.H(a,"aU",[b.x]):t},
aX(a){var t=a.w
if(t===6||t===7)return A.aX(a.x)
return t===11||t===12},
bG(a){return a.as},
aK(a){return A.aE(v.typeUniverse,a,!1)},
t(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.t(a0,t,a2,a3)
if(s===t)return a1
return A.b6(a0,s,!0)
case 7:t=a1.x
s=A.t(a0,t,a2,a3)
if(s===t)return a1
return A.b5(a0,s,!0)
case 8:r=a1.y
q=A.y(a0,r,a2,a3)
if(q===r)return a1
return A.H(a0,a1.x,q)
case 9:p=a1.x
o=A.t(a0,p,a2,a3)
n=a1.y
m=A.y(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.aC(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.y(a0,k,a2,a3)
if(j===k)return a1
return A.b7(a0,l,j)
case 11:i=a1.x
h=A.t(a0,i,a2,a3)
g=a1.y
f=A.cr(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.b4(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.y(a0,e,a2,a3)
p=a1.x
o=A.t(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.aD(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.e(A.O("Attempted to substitute unexpected RTI kind "+a))}},
y(a,b,c,d){var t,s,r,q,p=b.length,o=A.ap(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.t(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
cs(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.ap(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.t(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
cr(a,b,c,d){var t,s=b.a,r=A.y(a,s,c,d),q=b.b,p=A.y(a,q,c,d),o=b.c,n=A.cs(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.a1()
t.a=r
t.b=p
t.c=n
return t},
ar(a,b){a[v.arrayRti]=b
return a},
bm(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.cA(t)
return a.$S()}return null},
cE(a,b){var t
if(A.aX(b))if(a instanceof A.p){t=A.bm(a)
if(t!=null)return t}return A.a3(a)},
a3(a){if(a instanceof A.d)return A.bf(a)
if(Array.isArray(a))return A.aq(a)
return A.aH(J.J(a))},
aq(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bf(a){var t=a.$ti
return t!=null?t:A.aH(a)},
aH(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.cc(a,t)},
cc(a,b){var t=a instanceof A.p?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.bV(v.typeUniverse,t.name)
b.$ccache=s
return s},
cA(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.aE(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
cz(a){return A.A(A.bf(a))},
cq(a){var t=a instanceof A.p?A.bm(a):null
if(t!=null)return t
if(u.R.b(a))return J.bv(a).a
if(Array.isArray(a))return A.aq(a)
return A.a3(a)},
A(a){var t=a.r
return t==null?a.r=new A.an(a):t},
cb(a){var t=this
t.b=A.cp(t)
return t.b(a)},
cp(a){var t,s,r,q,p
if(a===u.K)return A.ci
if(A.u(a))return A.cm
t=a.w
if(t===6)return A.c9
if(t===1)return A.bj
if(t===7)return A.cd
s=A.co(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.u)){a.f="$i"+r
if(r==="X")return A.cg
if(a===u.m)return A.cf
return A.cl}}else if(t===10){q=A.cu(a.x,a.y)
p=q==null?A.bj:q
return p==null?A.bb(p):p}return A.c7},
co(a){if(a.w===8){if(a===u.S)return A.bh
if(a===u.i||a===u.H)return A.ch
if(a===u.N)return A.ck
if(a===u.y)return A.aI}return null},
ca(a){var t=this,s=A.c6
if(A.u(t))s=A.c4
else if(t===u.K)s=A.bb
else if(A.B(t)){s=A.c8
if(t===u.t)s=A.c0
else if(t===u.v)s=A.bc
else if(t===u.u)s=A.bY
else if(t===u.n)s=A.ba
else if(t===u.I)s=A.c_
else if(t===u.z)s=A.c2}else if(t===u.S)s=A.aF
else if(t===u.N)s=A.aG
else if(t===u.y)s=A.bX
else if(t===u.H)s=A.c3
else if(t===u.i)s=A.bZ
else if(t===u.m)s=A.c1
t.a=s
return t.a(a)},
c7(a){var t=this
if(a==null)return A.B(t)
return A.cF(v.typeUniverse,A.cE(a,t),t)},
c9(a){if(a==null)return!0
return this.x.b(a)},
cl(a){var t,s=this
if(a==null)return A.B(s)
t=s.f
if(a instanceof A.d)return!!a[t]
return!!J.J(a)[t]},
cg(a){var t,s=this
if(a==null)return A.B(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.d)return!!a[t]
return!!J.J(a)[t]},
cf(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.d)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
bi(a){if(typeof a=="object"){if(a instanceof A.d)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
c6(a){var t=this
if(a==null){if(A.B(t))return a}else if(t.b(a))return a
throw A.c(A.bd(a,t),new Error())},
c8(a){var t=this
if(a==null||t.b(a))return a
throw A.c(A.bd(a,t),new Error())},
bd(a,b){return new A.a2("TypeError: "+A.aZ(a,A.f(b,null)))},
aZ(a,b){return A.a8(a)+": type '"+A.f(A.cq(a),null)+"' is not a subtype of type '"+b+"'"},
i(a,b){return new A.a2("TypeError: "+A.aZ(a,b))},
cd(a){var t=this
return t.x.b(a)||A.aB(v.typeUniverse,t).b(a)},
ci(a){return a!=null},
bb(a){if(a!=null)return a
throw A.c(A.i(a,"Object"),new Error())},
cm(a){return!0},
c4(a){return a},
bj(a){return!1},
aI(a){return!0===a||!1===a},
bX(a){if(!0===a)return!0
if(!1===a)return!1
throw A.c(A.i(a,"bool"),new Error())},
bY(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.c(A.i(a,"bool?"),new Error())},
bZ(a){if(typeof a=="number")return a
throw A.c(A.i(a,"double"),new Error())},
c_(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.i(a,"double?"),new Error())},
bh(a){return typeof a=="number"&&Math.floor(a)===a},
aF(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.c(A.i(a,"int"),new Error())},
c0(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.c(A.i(a,"int?"),new Error())},
ch(a){return typeof a=="number"},
c3(a){if(typeof a=="number")return a
throw A.c(A.i(a,"num"),new Error())},
ba(a){if(typeof a=="number")return a
if(a==null)return a
throw A.c(A.i(a,"num?"),new Error())},
ck(a){return typeof a=="string"},
aG(a){if(typeof a=="string")return a
throw A.c(A.i(a,"String"),new Error())},
bc(a){if(typeof a=="string")return a
if(a==null)return a
throw A.c(A.i(a,"String?"),new Error())},
c1(a){if(A.bi(a))return a
throw A.c(A.i(a,"JSObject"),new Error())},
c2(a){if(a==null)return a
if(A.bi(a))return a
throw A.c(A.i(a,"JSObject?"),new Error())},
bk(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.f(a[r],b)
return t},
cn(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.bk(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.f(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
be(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.ar([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.d.q(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.aM(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.f(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.f(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.f(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.f(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.f(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
f(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.f(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.f(a.x,b)+">"
if(m===8){q=A.ct(a.x)
p=a.y
return p.length>0?q+("<"+A.bk(p,b)+">"):q}if(m===10)return A.cn(a,b)
if(m===11)return A.be(a,b,null)
if(m===12)return A.be(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.aM(b,o)
return b[o]}return"?"},
ct(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
bW(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
bV(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.aE(a,b,!1)
else if(typeof n=="number"){t=n
s=A.I(a,5,"#")
r=A.ap(t)
for(q=0;q<t;++q)r[q]=s
p=A.H(a,b,r)
o[b]=p
return p}else return n},
bT(a,b){return A.b8(a.tR,b)},
cV(a,b){return A.b8(a.eT,b)},
aE(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.b2(A.b0(a,null,b,!1))
s.set(b,t)
return t},
ao(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.b2(A.b0(a,b,c,!0))
r.set(c,s)
return s},
bU(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.aC(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
o(a,b){b.a=A.ca
b.b=A.cb
return b},
I(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.j(null,null)
t.w=b
t.as=c
s=A.o(a,t)
a.eC.set(c,s)
return s},
b6(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.bR(a,b,s,c)
a.eC.set(s,t)
return t},
bR(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.u(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.B(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.j(null,null)
r.w=6
r.x=b
r.as=c
return A.o(a,r)},
b5(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.bP(a,b,s,c)
a.eC.set(s,t)
return t},
bP(a,b,c,d){var t,s
if(d){t=b.w
if(A.u(b)||b===u.K)return b
else if(t===1)return A.H(a,"aU",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.j(null,null)
s.w=7
s.x=b
s.as=c
return A.o(a,s)},
bS(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.j(null,null)
t.w=13
t.x=b
t.as=r
s=A.o(a,t)
a.eC.set(r,s)
return s},
G(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
bO(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
H(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.G(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.j(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.o(a,s)
a.eC.set(q,r)
return r},
aC(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.G(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.j(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.o(a,p)
a.eC.set(r,o)
return o},
b7(a,b,c){var t,s,r="+"+(b+"("+A.G(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.j(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.o(a,t)
a.eC.set(r,s)
return s},
b4(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.G(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.G(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.bO(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.j(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.o(a,q)
a.eC.set(s,p)
return p},
aD(a,b,c,d){var t,s=b.as+("<"+A.G(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.bQ(a,b,c,s,d)
a.eC.set(s,t)
return t},
bQ(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.ap(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.t(a,b,s,0)
n=A.y(a,c,s,0)
return A.aD(a,o,n,c!==n)}}m=new A.j(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.o(a,m)},
b0(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
b2(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.bJ(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.b1(a,s,m,l,!1)
else if(r===46)s=A.b1(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.r(a.u,a.e,l.pop()))
break
case 94:l.push(A.bS(a.u,l.pop()))
break
case 35:l.push(A.I(a.u,5,"#"))
break
case 64:l.push(A.I(a.u,2,"@"))
break
case 126:l.push(A.I(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.bL(a,l)
break
case 38:A.bK(a,l)
break
case 63:q=a.u
l.push(A.b6(q,A.r(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.b5(q,A.r(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.bI(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.b3(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.bN(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-2)
break
case 43:o=m.indexOf("(",s)
l.push(m.substring(s,o))
l.push(-4)
l.push(a.p)
a.p=l.length
s=o+1
break
default:throw"Bad character "+r}}}n=l.pop()
return A.r(a.u,a.e,n)},
bJ(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
b1(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.bW(t,p.x)[q]
if(o==null)A.br('No "'+q+'" in "'+A.bG(p)+'"')
d.push(A.ao(t,p,o))}else d.push(q)
return n},
bL(a,b){var t,s=a.u,r=A.b_(a,b),q=b.pop()
if(typeof q=="string")b.push(A.H(s,q,r))
else{t=A.r(s,a.e,q)
switch(t.w){case 11:b.push(A.aD(s,t,r,a.n))
break
default:b.push(A.aC(s,t,r))
break}}},
bI(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.b_(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.r(q,a.e,p)
r=new A.a1()
r.a=t
r.b=o
r.c=n
b.push(A.b4(q,s,r))
return
case-4:b.push(A.b7(q,b.pop(),t))
return
default:throw A.e(A.O("Unexpected state under `()`: "+A.k(p)))}},
bK(a,b){var t=b.pop()
if(0===t){b.push(A.I(a.u,1,"0&"))
return}if(1===t){b.push(A.I(a.u,4,"1&"))
return}throw A.e(A.O("Unexpected extended operation "+A.k(t)))},
b_(a,b){var t=b.splice(a.p)
A.b3(a.u,a.e,t)
a.p=b.pop()
return t},
r(a,b,c){if(typeof c=="string")return A.H(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.bM(a,b,c)}else return c},
b3(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.r(a,b,c[t])},
bN(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.r(a,b,c[t])},
bM(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.e(A.O("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.e(A.O("Bad index "+c+" for "+b.h(0)))},
cF(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.b(a,b,null,c,null)
s.set(c,t)}return t},
b(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.u(d))return!0
t=b.w
if(t===4)return!0
if(A.u(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.b(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.b(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.b(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.b(a,b.x,c,d,e))return!1
return A.b(a,A.aB(a,b),c,d,e)}if(t===6)return A.b(a,q,c,d,e)&&A.b(a,b.x,c,d,e)
if(r===7){if(A.b(a,b,c,d.x,e))return!0
return A.b(a,b,c,A.aB(a,d),e)}if(r===6)return A.b(a,b,c,q,e)||A.b(a,b,c,d.x,e)
if(s)return!1
q=t!==11
if((!q||t===12)&&d===u.Z)return!0
p=t===10
if(p&&d===u.L)return!0
if(r===12){if(b===u.g)return!0
if(t!==12)return!1
o=b.y
n=d.y
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.b(a,k,c,j,e)||!A.b(a,j,e,k,c))return!1}return A.bg(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.bg(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.ce(a,b,c,d,e)}if(p&&r===10)return A.cj(a,b,c,d,e)
return!1},
bg(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.b(a2,a3.x,a4,a5.x,a6))return!1
t=a3.y
s=a5.y
r=t.a
q=s.a
p=r.length
o=q.length
if(p>o)return!1
n=o-p
m=t.b
l=s.b
k=m.length
j=l.length
if(p+k<o+j)return!1
for(i=0;i<p;++i){h=r[i]
if(!A.b(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.b(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.b(a2,l[i],a6,h,a4))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
a1=g[c-2]
if(a0<a){if(a1)return!1
continue}h=f[b+1]
if(a1&&!h)return!1
h=g[c-1]
if(!A.b(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
ce(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.ao(a,b,s[p])
return A.b9(a,q,null,c,d.y,e)}return A.b9(a,b.y,null,c,d.y,e)},
b9(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.b(a,b[t],d,e[t],f))return!1
return!0},
cj(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.b(a,s[t],c,r[t],e))return!1
return!0},
B(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.u(a))if(t!==6)s=t===7&&A.B(a.x)
return s},
u(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
b8(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
ap(a){return a>0?new Array(a):v.typeUniverse.sEA},
j:function j(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
a1:function a1(){this.c=this.b=this.a=null},
an:function an(a){this.a=a},
al:function al(){},
a2:function a2(a){this.a=a},
bH(a,b,c){var t,s=A.aq(b),r=new J.N(b,b.length,s.v("N<1>"))
if(!r.n())return a
if(c.length===0){s=s.c
do{t=r.d
a+=A.k(t==null?s.a(t):t)}while(r.n())}else{t=r.d
a+=A.k(t==null?s.c.a(t):t)
for(s=s.c;r.n();){t=r.d
a=a+c+A.k(t==null?s.a(t):t)}}return a},
a8(a){if(typeof a=="number"||A.aI(a)||a==null)return J.M(a)
if(typeof a=="string")return JSON.stringify(a)
return A.bE(a)},
O(a){return new A.a4(a)},
aW(a,b,c,d,e){return new A.a_(b,c,!0,a,d,"Invalid value")},
bF(a,b,c){if(0>a||a>c)throw A.e(A.aW(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.aW(b,a,c,"end",null))
return b}return c},
aY(a){return new A.aj(a)},
bD(a,b,c){var t,s
if(A.cG(a))return b+"..."+c
t=new A.ag(b)
B.d.q($.L,a)
try{s=t
s.a=A.bH(s.a,a,", ")}finally{if(0>=$.L.length)return A.aM($.L,-1)
$.L.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
a7:function a7(){},
a4:function a4(a){this.a=a},
ai:function ai(){},
C:function C(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a_:function a_(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
a9:function a9(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ak:function ak(a){this.a=a},
aj:function aj(a){this.a=a},
a6:function a6(a){this.a=a},
E:function E(){},
d:function d(){},
ag:function ag(a){this.a=a},
Q:function Q(){},
q:function q(){},
cL(a){throw A.c(new A.ad("Field '"+a+"' has been assigned during initialization."),new Error())},
cI(){var t=u.F,s=t.a(window.location).href
s.toString
if(B.e.A(s,"/"))B.q.B(t.a(window.location),B.e.p(s,0,s.length-1))}},B={}
var w=[A,J,B]
var $={}
A.aA.prototype={}
J.R.prototype={
h(a){return"Instance of '"+A.Z(a)+"'"},
gi(a){return A.A(A.aH(this))}}
J.T.prototype={
h(a){return String(a)},
gi(a){return A.A(u.y)},
$il:1,
$ias:1}
J.D.prototype={
h(a){return"null"},
$il:1}
J.a.prototype={$im:1}
J.n.prototype={
h(a){return String(a)}}
J.Y.prototype={}
J.x.prototype={}
J.w.prototype={
h(a){var t=a[$.bt()]
if(t==null)return this.u(a)
return"JavaScript function for "+J.M(t)}}
J.ab.prototype={
h(a){return String(a)}}
J.ac.prototype={
h(a){return String(a)}}
J.h.prototype={
q(a,b){A.aq(a).c.a(b)
a.$flags&1&&A.cM(a,29)
a.push(b)},
h(a){return A.bD(a,"[","]")},
gj(a){return a.length},
$iaV:1,
$iX:1}
J.S.prototype={
C(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.Z(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.aa.prototype={}
J.N.prototype={
n(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.cK(r)
throw A.e(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.W.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){return A.A(u.H)},
$iK:1}
J.U.prototype={
gi(a){return A.A(u.S)},
$il:1,
$iax:1}
J.V.prototype={
gi(a){return A.A(u.i)},
$il:1}
J.v.prototype={
A(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.t(a,s-t)},
p(a,b,c){return a.substring(b,A.bF(b,c,a.length))},
t(a,b){return this.p(a,b,null)},
h(a){return a},
gi(a){return A.A(u.N)},
gj(a){return a.length},
$il:1,
$ia0:1}
A.ad.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.F.prototype={}
A.p.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.bs(s==null?"unknown":s)+"'"},
gD(){return this},
$C:"$1",
$R:1,
$D:null}
A.a5.prototype={$C:"$2",$R:2}
A.ah.prototype={}
A.af.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.bs(t)+"'"}}
A.P.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.Z(this.a)+"'")}}
A.ae.prototype={
h(a){return"RuntimeError: "+this.a}}
A.au.prototype={
$1(a){return this.a(a)}}
A.av.prototype={
$2(a,b){return this.a(a,b)}}
A.aw.prototype={
$1(a){return this.a(A.aG(a))}}
A.j.prototype={
v(a){return A.ao(v.typeUniverse,this,a)},
E(a){return A.bU(v.typeUniverse,this,a)}}
A.a1.prototype={}
A.an.prototype={
h(a){return A.f(this.a,null)}}
A.al.prototype={
h(a){return this.a}}
A.a2.prototype={}
A.a7.prototype={}
A.a4.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.a8(t)
return"Assertion failed"}}
A.ai.prototype={}
A.C.prototype={
gl(){return"Invalid argument"+(!this.a?"(s)":"")},
gk(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gl()+r+p
if(!t.a)return o
return o+t.gk()+": "+A.a8(t.gm())},
gm(){return this.b}}
A.a_.prototype={
gm(){return A.ba(this.b)},
gl(){return"RangeError"},
gk(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.k(r):""
else if(r==null)t=": Not greater than or equal to "+A.k(s)
else if(r>s)t=": Not in inclusive range "+A.k(s)+".."+A.k(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.k(s)
return t}}
A.a9.prototype={
gm(){return A.aF(this.b)},
gl(){return"RangeError"},
gk(){if(A.aF(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.ak.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aj.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.a6.prototype={
h(a){return"Concurrent modification during iteration: "+A.a8(this.a)+"."}}
A.E.prototype={
h(a){return"null"}}
A.d.prototype={$id:1,
h(a){return"Instance of '"+A.Z(this)+"'"},
gi(a){return A.cz(this)},
toString(){return this.h(this)}}
A.ag.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
A.Q.prototype={
h(a){var t=String(a)
t.toString
return t}}
A.q.prototype={
B(a,b){return a.replace(b)},
h(a){var t=String(a)
t.toString
return t},
$iq:1};(function aliases(){var t=J.n.prototype
t.u=t.h})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(A.d,null)
s(A.d,[A.aA,J.R,A.F,J.N,A.a7,A.p,A.j,A.a1,A.an,A.E,A.ag])
s(J.R,[J.T,J.D,J.a,J.ab,J.ac,J.W,J.v])
s(J.a,[J.n,J.h,A.Q,A.q])
s(J.n,[J.Y,J.x,J.w])
t(J.S,A.F)
t(J.aa,J.h)
s(J.W,[J.U,J.V])
s(A.a7,[A.ad,A.ae,A.al,A.a4,A.ai,A.C,A.ak,A.aj,A.a6])
s(A.p,[A.a5,A.ah,A.au,A.aw])
s(A.ah,[A.af,A.P])
t(A.av,A.a5)
t(A.a2,A.al)
s(A.C,[A.a_,A.a9])})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{ax:"int",bn:"double",K:"num",a0:"String",as:"bool",E:"Null",X:"List",d:"Object",cT:"Map",m:"JSObject"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.bT(v.typeUniverse,JSON.parse('{"Y":"n","x":"n","w":"n","cO":"a","cQ":"a","T":{"as":[],"l":[]},"D":{"l":[]},"a":{"m":[]},"n":{"m":[]},"h":{"X":["1"],"m":[],"aV":["1"]},"S":{"F":[]},"aa":{"h":["1"],"X":["1"],"m":[],"aV":["1"]},"W":{"K":[]},"U":{"ax":[],"K":[],"l":[]},"V":{"K":[],"l":[]},"v":{"a0":[],"l":[]},"Q":{"m":[]},"q":{"m":[]}}'))
var u=(function rtii(){var t=A.aK
return{Z:t("cR"),s:t("h<a0>"),b:t("h<@>"),T:t("D"),m:t("m"),g:t("w"),j:t("X<@>"),F:t("q"),P:t("E"),K:t("d"),L:t("cU"),N:t("a0"),R:t("l"),o:t("x"),y:t("as"),i:t("bn"),S:t("ax"),O:t("aU<E>?"),z:t("m?"),X:t("d?"),v:t("a0?"),u:t("as?"),I:t("bn?"),t:t("ax?"),n:t("K?"),H:t("K")}})();(function constants(){B.n=J.R.prototype
B.d=J.h.prototype
B.e=J.v.prototype
B.o=J.w.prototype
B.p=J.a.prototype
B.q=A.q.prototype
B.f=J.Y.prototype
B.a=J.x.prototype
B.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.h=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof HTMLElement == "function";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.m=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var userAgent = navigator.userAgent;
    if (typeof userAgent != "string") return hooks;
    if (userAgent.indexOf("DumpRenderTree") >= 0) return hooks;
    if (userAgent.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.i=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.l=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.k=function(hooks) {
  if (typeof navigator != "object") return hooks;
  var userAgent = navigator.userAgent;
  if (typeof userAgent != "string") return hooks;
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.j=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.c=function(hooks) { return hooks; }
})();(function staticFields(){$.am=null
$.L=A.ar([],A.aK("h<d>"))
$.aR=null
$.aQ=null
$.bo=null
$.bl=null
$.bq=null
$.at=null
$.ay=null
$.aL=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"cP","bt",()=>A.cx("_$dart_dartClosure"))
t($,"cW","bu",()=>A.ar([new J.S()],A.aK("h<F>")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
n[a]=1
return Object.keys(hunkHelpers.convertToFastObject(n))[0]}
v.getIsolateTag=function(a){return t("___dart_"+a+v.isolateTag)}
var s="___dart_isolate_tags_"
var r=Object[s]||(Object[s]=Object.create(null))
var q="_ZxYxX"
for(var p=0;;p++){var o=t(q+"_"+p+"_")
if(!(o in r)){r[o]=1
v.isolateTag=o
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.a,DOMError:J.a,ErrorEvent:J.a,Event:J.a,InputEvent:J.a,SubmitEvent:J.a,EventTarget:J.a,MediaError:J.a,NavigatorUserMediaError:J.a,OverconstrainedError:J.a,PositionError:J.a,GeolocationPositionError:J.a,SensorErrorEvent:J.a,SpeechRecognitionError:J.a,Window:J.a,DOMWindow:J.a,DOMException:A.Q,Location:A.q})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,EventTarget:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,Window:true,DOMWindow:true,DOMException:true,Location:true})})()
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.cI
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=trailingSlash.dart.js.map
