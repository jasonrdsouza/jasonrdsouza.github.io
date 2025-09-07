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
if(a[b]!==t){A.dj(b)}a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a,b){if(b!=null)A.aT(a,b)
a.$flags=7
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t){convertToFastObject(a[t])}}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.b7(b)
return new t(c,this)}:function(){if(t===null)t=A.b7(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.b7(a).prototype
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
bc(a,b,c,d){return{i:a,p:b,e:c,x:d}},
b9(a){var t,s,r,q,p,o=a[v.dispatchPropertyName]
if(o==null)if($.ba==null){A.da()
o=a[v.dispatchPropertyName]}if(o!=null){t=o.p
if(!1===t)return o.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return o.i
if(o.e===s)throw A.l(A.bo("Return interceptor for "+A.t(t(a,o))))}r=a.constructor
if(r==null)q=null
else{p=$.aM
if(p==null)p=$.aM=v.getIsolateTag("_$dart_js")
q=r[p]}if(q!=null)return q
q=A.df(a)
if(q!=null)return q
if(typeof a=="function")return B.o
t=Object.getPrototypeOf(a)
if(t==null)return B.f
if(t===Object.prototype)return B.f
if(typeof r=="function"){p=$.aM
if(p==null)p=$.aM=v.getIsolateTag("_$dart_js")
Object.defineProperty(r,p,{value:B.a,enumerable:false,writable:true,configurable:true})
return B.a}return B.a},
a2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.ac.prototype
return J.ad.prototype}if(typeof a=="string")return J.E.prototype
if(a==null)return J.L.prototype
if(typeof a=="boolean")return J.ab.prototype
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
if(typeof a=="symbol")return J.O.prototype
if(typeof a=="bigint")return J.M.prototype
return a}if(a instanceof A.j)return a
return J.b9(a)},
d4(a){if(typeof a=="string")return J.E.prototype
if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
if(typeof a=="symbol")return J.O.prototype
if(typeof a=="bigint")return J.M.prototype
return a}if(a instanceof A.j)return a
return J.b9(a)},
d5(a){if(a==null)return a
if(Array.isArray(a))return J.n.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
if(typeof a=="symbol")return J.O.prototype
if(typeof a=="bigint")return J.M.prototype
return a}if(a instanceof A.j)return a
return J.b9(a)},
bV(a){return J.d5(a).gv(a)},
bd(a){return J.d4(a).gj(a)},
bW(a){return J.a2(a).gi(a)},
a5(a){return J.a2(a).h(a)},
a9:function a9(){},
ab:function ab(){},
L:function L(){},
N:function N(){},
w:function w(){},
ap:function ap(){},
V:function V(){},
v:function v(){},
M:function M(){},
O:function O(){},
n:function n(a){this.$ti=a},
aa:function aa(){},
aC:function aC(a){this.$ti=a},
a6:function a6(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ae:function ae(){},
ac:function ac(){},
ad:function ad(){},
E:function E(){}},A={b0:function b0(){},
de(a){var t,s
for(t=$.a4.length,s=0;s<t;++s)if(a===$.a4[s])return!0
return!1},
aD:function aD(a){this.a=a},
af:function af(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
m:function m(){},
bS(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
dv(a,b){var t
if(b!=null){t=b.x
if(t!=null)return t}return u.p.b(a)},
t(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a5(a)
return t},
aq(a){var t,s,r,q
if(a instanceof A.j)return A.p(A.a3(a),null)
t=J.a2(a)
if(t===B.n||t===B.p||u.o.b(a)){s=B.b(a)
if(s!=="Object"&&s!=="")return s
r=a.constructor
if(typeof r=="function"){q=r.name
if(typeof q=="string"&&q!=="Object"&&q!=="")return q}}return A.p(A.a3(a),null)},
c8(a){var t,s,r
if(typeof a=="number"||A.b6(a))return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
if(a instanceof A.y)return a.h(0)
t=$.bU()
for(s=0;s<1;++s){r=t[s].D(a)
if(r!=null)return r}return"Instance of '"+A.aq(a)+"'"},
bb(a,b){if(a==null)J.bd(a)
throw A.l(A.d3(a,b))},
d3(a,b){var t,s="index"
if(!A.bI(b))return new A.K(!0,b,s,null)
t=J.bd(a)
if(b<0||b>=t)return new A.aB(t,!0,b,s,"Index out of range")
return new A.ar(null,null,!0,b,s,"Value not in range")},
l(a){return A.k(a,new Error())},
k(a,b){var t
if(a==null)a=new A.aI()
b.dartException=a
t=A.dl
if("defineProperty" in Object){Object.defineProperty(b,"message",{get:t})
b.name=""}else b.toString=t
return b},
dl(){return J.a5(this.dartException)},
bR(a,b){throw A.k(a,b==null?new Error():b)},
dk(a,b,c){var t
if(b==null)b=0
if(c==null)c=0
t=Error()
A.bR(A.cE(a,b,c),t)},
cE(a,b,c){var t,s,r,q,p,o,n,m,l
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
return new A.aK("'"+t+"': Cannot "+p+" "+m+l+o)},
di(a){throw A.l(A.bj(a))},
c2(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.aF().constructor.prototype):Object.create(new A.a8(null,null).constructor.prototype)
t.$initialize=t.constructor
s=i?function static_tear_off(){this.$initialize()}:function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.bi(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.bZ(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.bi(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
bZ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.l("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.bX)}throw A.l("Error in functionType of tearoff")},
c_(a,b,c,d){var t=A.bh
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
bi(a,b,c,d){if(c)return A.c1(a,b,d)
return A.c_(b.length,d,a,b)},
c0(a,b,c,d){var t=A.bh,s=A.bY
switch(b?-1:a){case 0:throw A.l(new A.aE("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
c1(a,b,c){var t,s
if($.bf==null)$.bf=A.be("interceptor")
if($.bg==null)$.bg=A.be("receiver")
t=b.length
s=A.c0(t,c,a,b)
return s},
b7(a){return A.c2(a)},
bX(a,b){return A.aP(v.typeUniverse,A.a3(a.a),b)},
bh(a){return a.a},
bY(a){return a.b},
be(a){var t,s,r,q=new A.a8("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.$flags=1
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.l(new A.K(!1,null,null,"Field name "+a+" not found."))},
d6(a){return v.getIsolateTag(a)},
df(a){var t,s,r,q,p,o=A.aS($.bO.$1(a)),n=$.aV[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aZ[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=A.bD($.bM.$2(a,o))
if(r!=null){n=$.aV[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.aZ[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=A.b_(t)
$.aV[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.aZ[o]=t
return t}if(q==="-"){p=A.b_(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return A.bP(a,t)
if(q==="*")throw A.l(A.bo(o))
if(v.leafTags[o]===true){p=A.b_(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return A.bP(a,t)},
bP(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.bc(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
b_(a){return J.bc(a,!1,null,!!a.$io)},
dh(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return A.b_(t)
else return J.bc(t,c,null,null)},
da(){if(!0===$.ba)return
$.ba=!0
A.db()},
db(){var t,s,r,q,p,o,n,m
$.aV=Object.create(null)
$.aZ=Object.create(null)
A.d9()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bQ.$1(p)
if(o!=null){n=A.dh(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
d9(){var t,s,r,q,p,o,n=B.h()
n=A.I(B.i,A.I(B.j,A.I(B.c,A.I(B.c,A.I(B.k,A.I(B.l,A.I(B.m(B.b),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(Array.isArray(t))for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.bO=new A.aW(q)
$.bM=new A.aX(p)
$.bQ=new A.aY(o)},
I(a,b){return a(b)||b},
d2(a,b){var t=b.length,s=v.rttc[""+t+";"+a]
if(s==null)return null
if(t===0)return s
if(t===s.length)return s.apply(null,b)
return s(b)},
U:function U(){},
y:function y(){},
ax:function ax(){},
aH:function aH(){},
aF:function aF(){},
a8:function a8(a,b){this.a=a
this.b=b},
aE:function aE(a){this.a=a},
aW:function aW(a){this.a=a},
aX:function aX(a){this.a=a},
aY:function aY(a){this.a=a},
F:function F(){},
R:function R(){},
ag:function ag(){},
G:function G(){},
P:function P(){},
Q:function Q(){},
ah:function ah(){},
ai:function ai(){},
aj:function aj(){},
ak:function ak(){},
al:function al(){},
am:function am(){},
an:function an(){},
S:function S(){},
ao:function ao(){},
W:function W(){},
X:function X(){},
Y:function Y(){},
Z:function Z(){},
b1(a,b){var t=b.c
return t==null?b.c=A.a0(a,"bk",[b.x]):t},
bn(a){var t=a.w
if(t===6||t===7)return A.bn(a.x)
return t===11||t===12},
ca(a){return a.as},
b8(a){return A.aO(v.typeUniverse,a,!1)},
A(a0,a1,a2,a3){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a=a1.w
switch(a){case 5:case 1:case 2:case 3:case 4:return a1
case 6:t=a1.x
s=A.A(a0,t,a2,a3)
if(s===t)return a1
return A.bx(a0,s,!0)
case 7:t=a1.x
s=A.A(a0,t,a2,a3)
if(s===t)return a1
return A.bw(a0,s,!0)
case 8:r=a1.y
q=A.H(a0,r,a2,a3)
if(q===r)return a1
return A.a0(a0,a1.x,q)
case 9:p=a1.x
o=A.A(a0,p,a2,a3)
n=a1.y
m=A.H(a0,n,a2,a3)
if(o===p&&m===n)return a1
return A.b2(a0,o,m)
case 10:l=a1.x
k=a1.y
j=A.H(a0,k,a2,a3)
if(j===k)return a1
return A.by(a0,l,j)
case 11:i=a1.x
h=A.A(a0,i,a2,a3)
g=a1.y
f=A.d_(a0,g,a2,a3)
if(h===i&&f===g)return a1
return A.bv(a0,h,f)
case 12:e=a1.y
a3+=e.length
d=A.H(a0,e,a2,a3)
p=a1.x
o=A.A(a0,p,a2,a3)
if(d===e&&o===p)return a1
return A.b3(a0,o,d,!0)
case 13:c=a1.x
if(c<a3)return a1
b=a2[c-a3]
if(b==null)return a1
return b
default:throw A.l(A.a7("Attempted to substitute unexpected RTI kind "+a))}},
H(a,b,c,d){var t,s,r,q,p=b.length,o=A.aQ(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.A(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
d0(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.aQ(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.A(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
d_(a,b,c,d){var t,s=b.a,r=A.H(a,s,c,d),q=b.b,p=A.H(a,q,c,d),o=b.c,n=A.d0(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.at()
t.a=r
t.b=p
t.c=n
return t},
aT(a,b){a[v.arrayRti]=b
return a},
bN(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.d8(t)
return a.$S()}return null},
dc(a,b){var t
if(A.bn(b))if(a instanceof A.y){t=A.bN(a)
if(t!=null)return t}return A.a3(a)},
a3(a){if(a instanceof A.j)return A.bG(a)
if(Array.isArray(a))return A.aR(a)
return A.b5(J.a2(a))},
aR(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
bG(a){var t=a.$ti
return t!=null?t:A.b5(a)},
b5(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.cL(a,t)},
cL(a,b){var t=a instanceof A.y?Object.getPrototypeOf(Object.getPrototypeOf(a)).constructor:b,s=A.cu(v.typeUniverse,t.name)
b.$ccache=s
return s},
d8(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.aO(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
d7(a){return A.B(A.bG(a))},
cZ(a){var t=a instanceof A.y?A.bN(a):null
if(t!=null)return t
if(u.R.b(a))return J.bW(a).a
if(Array.isArray(a))return A.aR(a)
return A.a3(a)},
B(a){var t=a.r
return t==null?a.r=new A.aN(a):t},
u(a){return A.B(A.aO(v.typeUniverse,a,!1))},
cK(a){var t=this
t.b=A.cY(t)
return t.b(a)},
cY(a){var t,s,r,q,p
if(a===u.K)return A.cR
if(A.C(a))return A.cV
t=a.w
if(t===6)return A.cI
if(t===1)return A.bK
if(t===7)return A.cM
s=A.cX(a)
if(s!=null)return s
if(t===8){r=a.x
if(a.y.every(A.C)){a.f="$i"+r
if(r==="d")return A.cP
if(a===u.m)return A.cO
return A.cU}}else if(t===10){q=A.d2(a.x,a.y)
p=q==null?A.bK:q
return p==null?A.bC(p):p}return A.cG},
cX(a){if(a.w===8){if(a===u.S)return A.bI
if(a===u.i||a===u.H)return A.cQ
if(a===u.N)return A.cT
if(a===u.y)return A.b6}return null},
cJ(a){var t=this,s=A.cF
if(A.C(t))s=A.cD
else if(t===u.K)s=A.bC
else if(A.J(t)){s=A.cH
if(t===u.t)s=A.cA
else if(t===u.v)s=A.bD
else if(t===u.u)s=A.cx
else if(t===u.n)s=A.bB
else if(t===u.I)s=A.cz
else if(t===u.z)s=A.cB}else if(t===u.S)s=A.b4
else if(t===u.N)s=A.aS
else if(t===u.y)s=A.cw
else if(t===u.H)s=A.cC
else if(t===u.i)s=A.cy
else if(t===u.m)s=A.av
t.a=s
return t.a(a)},
cG(a){var t=this
if(a==null)return A.J(t)
return A.dd(v.typeUniverse,A.dc(a,t),t)},
cI(a){if(a==null)return!0
return this.x.b(a)},
cU(a){var t,s=this
if(a==null)return A.J(s)
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.a2(a)[t]},
cP(a){var t,s=this
if(a==null)return A.J(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.f
if(a instanceof A.j)return!!a[t]
return!!J.a2(a)[t]},
cO(a){var t=this
if(a==null)return!1
if(typeof a=="object"){if(a instanceof A.j)return!!a[t.f]
return!0}if(typeof a=="function")return!0
return!1},
bJ(a){if(typeof a=="object"){if(a instanceof A.j)return u.m.b(a)
return!0}if(typeof a=="function")return!0
return!1},
cF(a){var t=this
if(a==null){if(A.J(t))return a}else if(t.b(a))return a
throw A.k(A.bE(a,t),new Error())},
cH(a){var t=this
if(a==null||t.b(a))return a
throw A.k(A.bE(a,t),new Error())},
bE(a,b){return new A.au("TypeError: "+A.bp(a,A.p(b,null)))},
bp(a,b){return A.aA(a)+": type '"+A.p(A.cZ(a),null)+"' is not a subtype of type '"+b+"'"},
q(a,b){return new A.au("TypeError: "+A.bp(a,b))},
cM(a){var t=this
return t.x.b(a)||A.b1(v.typeUniverse,t).b(a)},
cR(a){return a!=null},
bC(a){if(a!=null)return a
throw A.k(A.q(a,"Object"),new Error())},
cV(a){return!0},
cD(a){return a},
bK(a){return!1},
b6(a){return!0===a||!1===a},
cw(a){if(!0===a)return!0
if(!1===a)return!1
throw A.k(A.q(a,"bool"),new Error())},
cx(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.k(A.q(a,"bool?"),new Error())},
cy(a){if(typeof a=="number")return a
throw A.k(A.q(a,"double"),new Error())},
cz(a){if(typeof a=="number")return a
if(a==null)return a
throw A.k(A.q(a,"double?"),new Error())},
bI(a){return typeof a=="number"&&Math.floor(a)===a},
b4(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.k(A.q(a,"int"),new Error())},
cA(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.k(A.q(a,"int?"),new Error())},
cQ(a){return typeof a=="number"},
cC(a){if(typeof a=="number")return a
throw A.k(A.q(a,"num"),new Error())},
bB(a){if(typeof a=="number")return a
if(a==null)return a
throw A.k(A.q(a,"num?"),new Error())},
cT(a){return typeof a=="string"},
aS(a){if(typeof a=="string")return a
throw A.k(A.q(a,"String"),new Error())},
bD(a){if(typeof a=="string")return a
if(a==null)return a
throw A.k(A.q(a,"String?"),new Error())},
av(a){if(A.bJ(a))return a
throw A.k(A.q(a,"JSObject"),new Error())},
cB(a){if(a==null)return a
if(A.bJ(a))return a
throw A.k(A.q(a,"JSObject?"),new Error())},
bL(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.p(a[r],b)
return t},
cW(a,b){var t,s,r,q,p,o,n=a.x,m=a.y
if(""===n)return"("+A.bL(m,b)+")"
t=m.length
s=n.split(",")
r=s.length-t
for(q="(",p="",o=0;o<t;++o,p=", "){q+=p
if(r===0)q+="{"
q+=A.p(m[o],b)
if(r>=0)q+=" "+s[r];++r}return q+"})"},
bF(a2,a3,a4){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0=", ",a1=null
if(a4!=null){t=a4.length
if(a3==null)a3=A.aT([],u.s)
else a1=a3.length
s=a3.length
for(r=t;r>0;--r)B.d.u(a3,"T"+(s+r))
for(q=u.X,p="<",o="",r=0;r<t;++r,o=a0){n=a3.length
m=n-1-r
if(!(m>=0))return A.bb(a3,m)
p=p+o+a3[m]
l=a4[r]
k=l.w
if(!(k===2||k===3||k===4||k===5||l===q))p+=" extends "+A.p(l,a3)}p+=">"}else p=""
q=a2.x
j=a2.y
i=j.a
h=i.length
g=j.b
f=g.length
e=j.c
d=e.length
c=A.p(q,a3)
for(b="",a="",r=0;r<h;++r,a=a0)b+=a+A.p(i[r],a3)
if(f>0){b+=a+"["
for(a="",r=0;r<f;++r,a=a0)b+=a+A.p(g[r],a3)
b+="]"}if(d>0){b+=a+"{"
for(a="",r=0;r<d;r+=3,a=a0){b+=a
if(e[r+1])b+="required "
b+=A.p(e[r+2],a3)+" "+e[r]}b+="}"}if(a1!=null){a3.toString
a3.length=a1}return p+"("+b+") => "+c},
p(a,b){var t,s,r,q,p,o,n,m=a.w
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=a.x
s=A.p(t,b)
r=t.w
return(r===11||r===12?"("+s+")":s)+"?"}if(m===7)return"FutureOr<"+A.p(a.x,b)+">"
if(m===8){q=A.d1(a.x)
p=a.y
return p.length>0?q+("<"+A.bL(p,b)+">"):q}if(m===10)return A.cW(a,b)
if(m===11)return A.bF(a,b,null)
if(m===12)return A.bF(a.x,b,a.y)
if(m===13){o=a.x
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.bb(b,o)
return b[o]}return"?"},
d1(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
cv(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
cu(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.aO(a,b,!1)
else if(typeof n=="number"){t=n
s=A.a1(a,5,"#")
r=A.aQ(t)
for(q=0;q<t;++q)r[q]=s
p=A.a0(a,b,r)
o[b]=p
return p}else return n},
cs(a,b){return A.bz(a.tR,b)},
cr(a,b){return A.bz(a.eT,b)},
aO(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.bt(A.br(a,null,b,!1))
s.set(b,t)
return t},
aP(a,b,c){var t,s,r=b.z
if(r==null)r=b.z=new Map()
t=r.get(c)
if(t!=null)return t
s=A.bt(A.br(a,b,c,!0))
r.set(c,s)
return s},
ct(a,b,c){var t,s,r,q=b.Q
if(q==null)q=b.Q=new Map()
t=c.as
s=q.get(t)
if(s!=null)return s
r=A.b2(a,b,c.w===9?c.y:[c])
q.set(t,r)
return r},
x(a,b){b.a=A.cJ
b.b=A.cK
return b},
a1(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.r(null,null)
t.w=b
t.as=c
s=A.x(a,t)
a.eC.set(c,s)
return s},
bx(a,b,c){var t,s=b.as+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.cp(a,b,s,c)
a.eC.set(s,t)
return t},
cp(a,b,c,d){var t,s,r
if(d){t=b.w
s=!0
if(!A.C(b))if(!(b===u.P||b===u.T))if(t!==6)s=t===7&&A.J(b.x)
if(s)return b
else if(t===1)return u.P}r=new A.r(null,null)
r.w=6
r.x=b
r.as=c
return A.x(a,r)},
bw(a,b,c){var t,s=b.as+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.cn(a,b,s,c)
a.eC.set(s,t)
return t},
cn(a,b,c,d){var t,s
if(d){t=b.w
if(A.C(b)||b===u.K)return b
else if(t===1)return A.a0(a,"bk",[b])
else if(b===u.P||b===u.T)return u.O}s=new A.r(null,null)
s.w=7
s.x=b
s.as=c
return A.x(a,s)},
cq(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.r(null,null)
t.w=13
t.x=b
t.as=r
s=A.x(a,t)
a.eC.set(r,s)
return s},
a_(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].as
return t},
cm(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].as}return t},
a0(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.a_(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.r(null,null)
s.w=8
s.x=b
s.y=c
if(c.length>0)s.c=c[0]
s.as=q
r=A.x(a,s)
a.eC.set(q,r)
return r},
b2(a,b,c){var t,s,r,q,p,o
if(b.w===9){t=b.x
s=b.y.concat(c)}else{s=c
t=b}r=t.as+(";<"+A.a_(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.r(null,null)
p.w=9
p.x=t
p.y=s
p.as=r
o=A.x(a,p)
a.eC.set(r,o)
return o},
by(a,b,c){var t,s,r="+"+(b+"("+A.a_(c)+")"),q=a.eC.get(r)
if(q!=null)return q
t=new A.r(null,null)
t.w=10
t.x=b
t.y=c
t.as=r
s=A.x(a,t)
a.eC.set(r,s)
return s},
bv(a,b,c){var t,s,r,q,p,o=b.as,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.a_(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.a_(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.cm(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.r(null,null)
q.w=11
q.x=b
q.y=c
q.as=s
p=A.x(a,q)
a.eC.set(s,p)
return p},
b3(a,b,c,d){var t,s=b.as+("<"+A.a_(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.co(a,b,c,s,d)
a.eC.set(s,t)
return t},
co(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.aQ(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.w===1){s[q]=p;++r}}if(r>0){o=A.A(a,b,s,0)
n=A.H(a,c,s,0)
return A.b3(a,o,n,c!==n)}}m=new A.r(null,null)
m.w=12
m.x=b
m.y=c
m.as=d
return A.x(a,m)},
br(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
bt(a){var t,s,r,q,p,o,n,m=a.r,l=a.s
for(t=m.length,s=0;s<t;){r=m.charCodeAt(s)
if(r>=48&&r<=57)s=A.ch(s+1,r,m,l)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36||r===124)s=A.bs(a,s,m,l,!1)
else if(r===46)s=A.bs(a,s,m,l,!0)
else{++s
switch(r){case 44:break
case 58:l.push(!1)
break
case 33:l.push(!0)
break
case 59:l.push(A.z(a.u,a.e,l.pop()))
break
case 94:l.push(A.cq(a.u,l.pop()))
break
case 35:l.push(A.a1(a.u,5,"#"))
break
case 64:l.push(A.a1(a.u,2,"@"))
break
case 126:l.push(A.a1(a.u,3,"~"))
break
case 60:l.push(a.p)
a.p=l.length
break
case 62:A.cj(a,l)
break
case 38:A.ci(a,l)
break
case 63:q=a.u
l.push(A.bx(q,A.z(q,a.e,l.pop()),a.n))
break
case 47:q=a.u
l.push(A.bw(q,A.z(q,a.e,l.pop()),a.n))
break
case 40:l.push(-3)
l.push(a.p)
a.p=l.length
break
case 41:A.cg(a,l)
break
case 91:l.push(a.p)
a.p=l.length
break
case 93:p=l.splice(a.p)
A.bu(a.u,a.e,p)
a.p=l.pop()
l.push(p)
l.push(-1)
break
case 123:l.push(a.p)
a.p=l.length
break
case 125:p=l.splice(a.p)
A.cl(a.u,a.e,p)
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
return A.z(a.u,a.e,n)},
ch(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
bs(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36||s===124))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.w===9)p=p.x
o=A.cv(t,p.x)[q]
if(o==null)A.bR('No "'+q+'" in "'+A.ca(p)+'"')
d.push(A.aP(t,p,o))}else d.push(q)
return n},
cj(a,b){var t,s=a.u,r=A.bq(a,b),q=b.pop()
if(typeof q=="string")b.push(A.a0(s,q,r))
else{t=A.z(s,a.e,q)
switch(t.w){case 11:b.push(A.b3(s,t,r,a.n))
break
default:b.push(A.b2(s,t,r))
break}}},
cg(a,b){var t,s,r,q=a.u,p=b.pop(),o=null,n=null
if(typeof p=="number")switch(p){case-1:o=b.pop()
break
case-2:n=b.pop()
break
default:b.push(p)
break}else b.push(p)
t=A.bq(a,b)
p=b.pop()
switch(p){case-3:p=b.pop()
if(o==null)o=q.sEA
if(n==null)n=q.sEA
s=A.z(q,a.e,p)
r=new A.at()
r.a=t
r.b=o
r.c=n
b.push(A.bv(q,s,r))
return
case-4:b.push(A.by(q,b.pop(),t))
return
default:throw A.l(A.a7("Unexpected state under `()`: "+A.t(p)))}},
ci(a,b){var t=b.pop()
if(0===t){b.push(A.a1(a.u,1,"0&"))
return}if(1===t){b.push(A.a1(a.u,4,"1&"))
return}throw A.l(A.a7("Unexpected extended operation "+A.t(t)))},
bq(a,b){var t=b.splice(a.p)
A.bu(a.u,a.e,t)
a.p=b.pop()
return t},
z(a,b,c){if(typeof c=="string")return A.a0(a,c,a.sEA)
else if(typeof c=="number"){b.toString
return A.ck(a,b,c)}else return c},
bu(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.z(a,b,c[t])},
cl(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.z(a,b,c[t])},
ck(a,b,c){var t,s,r=b.w
if(r===9){if(c===0)return b.x
t=b.y
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.x
r=b.w}else if(c===0)return b
if(r!==8)throw A.l(A.a7("Indexed base must be an interface type"))
t=b.y
if(c<=t.length)return t[c-1]
throw A.l(A.a7("Bad index "+c+" for "+b.h(0)))},
dd(a,b,c){var t,s=b.d
if(s==null)s=b.d=new Map()
t=s.get(c)
if(t==null){t=A.i(a,b,null,c,null)
s.set(c,t)}return t},
i(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(A.C(d))return!0
t=b.w
if(t===4)return!0
if(A.C(b))return!1
if(b.w===1)return!0
s=t===13
if(s)if(A.i(a,c[b.x],c,d,e))return!0
r=d.w
q=u.P
if(b===q||b===u.T){if(r===7)return A.i(a,b,c,d.x,e)
return d===q||d===u.T||r===6}if(d===u.K){if(t===7)return A.i(a,b.x,c,d,e)
return t!==6}if(t===7){if(!A.i(a,b.x,c,d,e))return!1
return A.i(a,A.b1(a,b),c,d,e)}if(t===6)return A.i(a,q,c,d,e)&&A.i(a,b.x,c,d,e)
if(r===7){if(A.i(a,b,c,d.x,e))return!0
return A.i(a,b,c,A.b1(a,d),e)}if(r===6)return A.i(a,b,c,q,e)||A.i(a,b,c,d.x,e)
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
if(!A.i(a,k,c,j,e)||!A.i(a,j,e,k,c))return!1}return A.bH(a,b.x,c,d.x,e)}if(r===11){if(b===u.g)return!0
if(q)return!1
return A.bH(a,b,c,d,e)}if(t===8){if(r!==8)return!1
return A.cN(a,b,c,d,e)}if(p&&r===10)return A.cS(a,b,c,d,e)
return!1},
bH(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.i(a2,a3.x,a4,a5.x,a6))return!1
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
if(!A.i(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!A.i(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!A.i(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!A.i(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
cN(a,b,c,d,e){var t,s,r,q,p,o=b.x,n=d.x
for(;o!==n;){t=a.tR[o]
if(t==null)return!1
if(typeof t=="string"){o=t
continue}s=t[n]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.aP(a,b,s[p])
return A.bA(a,q,null,c,d.y,e)}return A.bA(a,b.y,null,c,d.y,e)},
bA(a,b,c,d,e,f){var t,s=b.length
for(t=0;t<s;++t)if(!A.i(a,b[t],d,e[t],f))return!1
return!0},
cS(a,b,c,d,e){var t,s=b.y,r=d.y,q=s.length
if(q!==r.length)return!1
if(b.x!==d.x)return!1
for(t=0;t<q;++t)if(!A.i(a,s[t],c,r[t],e))return!1
return!0},
J(a){var t=a.w,s=!0
if(!(a===u.P||a===u.T))if(!A.C(a))if(t!==6)s=t===7&&A.J(a.x)
return s},
C(a){var t=a.w
return t===2||t===3||t===4||t===5||a===u.X},
bz(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
aQ(a){return a>0?new Array(a):v.typeUniverse.sEA},
r:function r(a,b){var _=this
_.a=a
_.b=b
_.r=_.f=_.d=_.c=null
_.w=0
_.as=_.Q=_.z=_.y=_.x=null},
at:function at(){this.c=this.b=this.a=null},
aN:function aN(a){this.a=a},
aL:function aL(){},
au:function au(a){this.a=a},
e:function e(){},
cb(a,b,c){var t=J.bV(b)
if(!t.l())return a
if(c.length===0){do a+=A.t(t.gk())
while(t.l())}else{a+=A.t(t.gk())
for(;t.l();)a=a+c+A.t(t.gk())}return a},
aA(a){if(typeof a=="number"||A.b6(a)||a==null)return J.a5(a)
if(typeof a=="string")return JSON.stringify(a)
return A.c8(a)},
a7(a){return new A.aw(a)},
bm(a,b,c,d,e){return new A.ar(b,c,!0,a,d,"Invalid value")},
c9(a,b,c){if(0>a||a>c)throw A.l(A.bm(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.l(A.bm(b,a,c,"end",null))
return b}return c},
bo(a){return new A.aJ(a)},
bj(a){return new A.ay(a)},
bl(a,b,c){var t,s
if(A.de(a))return b+"..."+c
t=new A.aG(b)
B.d.u($.a4,a)
try{s=t
s.a=A.cb(s.a,a,", ")}finally{if(0>=$.a4.length)return A.bb($.a4,-1)
$.a4.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
az:function az(){},
aw:function aw(a){this.a=a},
aI:function aI(){},
K:function K(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ar:function ar(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
aB:function aB(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aK:function aK(a){this.a=a},
aJ:function aJ(a){this.a=a},
ay:function ay(a){this.a=a},
T:function T(){},
j:function j(){},
aG:function aG(a){this.a=a},
dj(a){throw A.k(new A.aD("Field '"+a+"' has been assigned during initialization."),new Error())},
dg(){var t=v.G,s=A.aS(A.av(A.av(t.window).location).href)
if(B.e.C(s,"/"))A.av(A.av(t.window).location).replace(B.e.q(s,0,s.length-1))}},B={}
var w=[A,J,B]
var $={}
A.b0.prototype={}
J.a9.prototype={
h(a){return"Instance of '"+A.aq(a)+"'"},
gi(a){return A.B(A.b5(this))}}
J.ab.prototype={
h(a){return String(a)},
gi(a){return A.B(u.y)},
$ib:1,
$iaU:1}
J.L.prototype={
h(a){return"null"},
$ib:1}
J.N.prototype={$ih:1}
J.w.prototype={
h(a){return String(a)}}
J.ap.prototype={}
J.V.prototype={}
J.v.prototype={
h(a){var t=a[$.bT()]
if(t==null)return this.B(a)
return"JavaScript function for "+J.a5(t)}}
J.M.prototype={
h(a){return String(a)}}
J.O.prototype={
h(a){return String(a)}}
J.n.prototype={
u(a,b){A.aR(a).c.a(b)
a.$flags&1&&A.dk(a,29)
a.push(b)},
h(a){return A.bl(a,"[","]")},
gv(a){return new J.a6(a,a.length,A.aR(a).t("a6<1>"))},
gj(a){return a.length},
$if:1,
$id:1}
J.aa.prototype={
D(a){var t,s,r
if(!Array.isArray(a))return null
t=a.$flags|0
if((t&4)!==0)s="const, "
else if((t&2)!==0)s="unmodifiable, "
else s=(t&1)!==0?"fixed, ":""
r="Instance of '"+A.aq(a)+"'"
if(s==="")return r
return r+" ("+s+"length: "+a.length+")"}}
J.aC.prototype={}
J.a6.prototype={
gk(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q){r=A.di(r)
throw A.l(r)}t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
J.ae.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gi(a){return A.B(u.H)},
$ic:1,
$iD:1}
J.ac.prototype={
gi(a){return A.B(u.S)},
$ib:1,
$ia:1}
J.ad.prototype={
gi(a){return A.B(u.i)},
$ib:1}
J.E.prototype={
C(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.A(a,s-t)},
q(a,b,c){return a.substring(b,A.c9(b,c,a.length))},
A(a,b){return this.q(a,b,null)},
h(a){return a},
gi(a){return A.B(u.N)},
gj(a){return a.length},
$ib:1,
$ias:1}
A.aD.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.af.prototype={
gk(){var t=this.d
return t==null?this.$ti.c.a(t):t},
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.l(A.bj(r))
t=s.c
if(t>=q){s.d=null
return!1}s.d=r[t]
s.c=t+1
return!0}}
A.m.prototype={}
A.U.prototype={}
A.y.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.bS(s==null?"unknown":s)+"'"},
gE(){return this},
$C:"$1",
$R:1,
$D:null}
A.ax.prototype={$C:"$2",$R:2}
A.aH.prototype={}
A.aF.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.bS(t)+"'"}}
A.a8.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.aq(this.a)+"'")}}
A.aE.prototype={
h(a){return"RuntimeError: "+this.a}}
A.aW.prototype={
$1(a){return this.a(a)}}
A.aX.prototype={
$2(a,b){return this.a(a,b)}}
A.aY.prototype={
$1(a){return this.a(A.aS(a))}}
A.F.prototype={
gi(a){return B.q},
$ib:1}
A.R.prototype={}
A.ag.prototype={
gi(a){return B.r},
$ib:1}
A.G.prototype={
gj(a){return a.length},
$io:1}
A.P.prototype={$if:1,$id:1}
A.Q.prototype={$if:1,$id:1}
A.ah.prototype={
gi(a){return B.t},
$ib:1}
A.ai.prototype={
gi(a){return B.u},
$ib:1}
A.aj.prototype={
gi(a){return B.v},
$ib:1}
A.ak.prototype={
gi(a){return B.w},
$ib:1}
A.al.prototype={
gi(a){return B.x},
$ib:1}
A.am.prototype={
gi(a){return B.y},
$ib:1}
A.an.prototype={
gi(a){return B.z},
$ib:1}
A.S.prototype={
gi(a){return B.A},
gj(a){return a.length},
$ib:1}
A.ao.prototype={
gi(a){return B.B},
gj(a){return a.length},
$ib:1}
A.W.prototype={}
A.X.prototype={}
A.Y.prototype={}
A.Z.prototype={}
A.r.prototype={
t(a){return A.aP(v.typeUniverse,this,a)},
F(a){return A.ct(v.typeUniverse,this,a)}}
A.at.prototype={}
A.aN.prototype={
h(a){return A.p(this.a,null)}}
A.aL.prototype={
h(a){return this.a}}
A.au.prototype={}
A.e.prototype={
gv(a){return new A.af(a,a.length,A.a3(a).t("af<e.E>"))},
h(a){return A.bl(a,"[","]")}}
A.az.prototype={}
A.aw.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.aA(t)
return"Assertion failed"}}
A.aI.prototype={}
A.K.prototype={
gn(){return"Invalid argument"+(!this.a?"(s)":"")},
gm(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gn()+r+p
if(!t.a)return o
return o+t.gm()+": "+A.aA(t.gp())},
gp(){return this.b}}
A.ar.prototype={
gp(){return A.bB(this.b)},
gn(){return"RangeError"},
gm(){var t,s=this.e,r=this.f
if(s==null)t=r!=null?": Not less than or equal to "+A.t(r):""
else if(r==null)t=": Not greater than or equal to "+A.t(s)
else if(r>s)t=": Not in inclusive range "+A.t(s)+".."+A.t(r)
else t=r<s?": Valid value range is empty":": Only valid value is "+A.t(s)
return t}}
A.aB.prototype={
gp(){return A.b4(this.b)},
gn(){return"RangeError"},
gm(){if(A.b4(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj(a){return this.f}}
A.aK.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.aJ.prototype={
h(a){return"UnimplementedError: "+this.a}}
A.ay.prototype={
h(a){return"Concurrent modification during iteration: "+A.aA(this.a)+"."}}
A.T.prototype={
h(a){return"null"}}
A.j.prototype={$ij:1,
h(a){return"Instance of '"+A.aq(this)+"'"},
gi(a){return A.d7(this)},
toString(){return this.h(this)}}
A.aG.prototype={
gj(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}};(function aliases(){var t=J.w.prototype
t.B=t.h})();(function inheritance(){var t=hunkHelpers.mixin,s=hunkHelpers.inherit,r=hunkHelpers.inheritMany
s(A.j,null)
r(A.j,[A.b0,J.a9,A.U,J.a6,A.az,A.af,A.m,A.y,A.r,A.at,A.aN,A.e,A.T,A.aG])
r(J.a9,[J.ab,J.L,J.N,J.M,J.O,J.ae,J.E])
r(J.N,[J.w,J.n,A.F,A.R])
r(J.w,[J.ap,J.V,J.v])
s(J.aa,A.U)
s(J.aC,J.n)
r(J.ae,[J.ac,J.ad])
r(A.az,[A.aD,A.aE,A.aL,A.aw,A.aI,A.K,A.aK,A.aJ,A.ay])
r(A.y,[A.ax,A.aH,A.aW,A.aY])
r(A.aH,[A.aF,A.a8])
s(A.aX,A.ax)
r(A.R,[A.ag,A.G])
r(A.G,[A.W,A.Y])
s(A.X,A.W)
s(A.P,A.X)
s(A.Z,A.Y)
s(A.Q,A.Z)
r(A.P,[A.ah,A.ai])
r(A.Q,[A.aj,A.ak,A.al,A.am,A.an,A.S,A.ao])
s(A.au,A.aL)
r(A.K,[A.ar,A.aB])
t(A.W,A.e)
t(A.X,A.m)
t(A.Y,A.e)
t(A.Z,A.m)})()
var v={G:typeof self!="undefined"?self:globalThis,typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{a:"int",c:"double",D:"num",as:"String",aU:"bool",T:"Null",d:"List",j:"Object",dr:"Map",h:"JSObject"},mangledNames:{},types:[],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.cs(v.typeUniverse,JSON.parse('{"ap":"w","V":"w","v":"w","ds":"F","ab":{"aU":[],"b":[]},"L":{"b":[]},"N":{"h":[]},"w":{"h":[]},"n":{"d":["1"],"h":[],"f":["1"]},"aa":{"U":[]},"aC":{"n":["1"],"d":["1"],"h":[],"f":["1"]},"ae":{"c":[],"D":[]},"ac":{"c":[],"a":[],"D":[],"b":[]},"ad":{"c":[],"D":[],"b":[]},"E":{"as":[],"b":[]},"F":{"h":[],"b":[]},"R":{"h":[]},"ag":{"h":[],"b":[]},"G":{"o":["1"],"h":[]},"P":{"e":["c"],"d":["c"],"o":["c"],"h":[],"f":["c"],"m":["c"]},"Q":{"e":["a"],"d":["a"],"o":["a"],"h":[],"f":["a"],"m":["a"]},"ah":{"e":["c"],"d":["c"],"o":["c"],"h":[],"f":["c"],"m":["c"],"b":[],"e.E":"c"},"ai":{"e":["c"],"d":["c"],"o":["c"],"h":[],"f":["c"],"m":["c"],"b":[],"e.E":"c"},"aj":{"e":["a"],"d":["a"],"o":["a"],"h":[],"f":["a"],"m":["a"],"b":[],"e.E":"a"},"ak":{"e":["a"],"d":["a"],"o":["a"],"h":[],"f":["a"],"m":["a"],"b":[],"e.E":"a"},"al":{"e":["a"],"d":["a"],"o":["a"],"h":[],"f":["a"],"m":["a"],"b":[],"e.E":"a"},"am":{"e":["a"],"d":["a"],"o":["a"],"h":[],"f":["a"],"m":["a"],"b":[],"e.E":"a"},"an":{"e":["a"],"d":["a"],"o":["a"],"h":[],"f":["a"],"m":["a"],"b":[],"e.E":"a"},"S":{"e":["a"],"d":["a"],"o":["a"],"h":[],"f":["a"],"m":["a"],"b":[],"e.E":"a"},"ao":{"e":["a"],"d":["a"],"o":["a"],"h":[],"f":["a"],"m":["a"],"b":[],"e.E":"a"},"c":{"D":[]},"a":{"D":[]},"c7":{"d":["a"],"f":["a"]},"cf":{"d":["a"],"f":["a"]},"ce":{"d":["a"],"f":["a"]},"c5":{"d":["a"],"f":["a"]},"cc":{"d":["a"],"f":["a"]},"c6":{"d":["a"],"f":["a"]},"cd":{"d":["a"],"f":["a"]},"c3":{"d":["c"],"f":["c"]},"c4":{"d":["c"],"f":["c"]}}'))
A.cr(v.typeUniverse,JSON.parse('{"G":1}'))
var u=(function rtii(){var t=A.b8
return{Z:t("dq"),s:t("n<as>"),b:t("n<@>"),T:t("L"),m:t("h"),g:t("v"),p:t("o<@>"),j:t("d<@>"),P:t("T"),K:t("j"),L:t("dt"),N:t("as"),R:t("b"),o:t("V"),y:t("aU"),i:t("c"),S:t("a"),O:t("bk<T>?"),z:t("h?"),X:t("j?"),v:t("as?"),u:t("aU?"),I:t("c?"),t:t("a?"),n:t("D?"),H:t("D")}})();(function constants(){B.n=J.a9.prototype
B.d=J.n.prototype
B.e=J.E.prototype
B.o=J.v.prototype
B.p=J.N.prototype
B.f=J.ap.prototype
B.a=J.V.prototype
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

B.q=A.u("dm")
B.r=A.u("dn")
B.t=A.u("c3")
B.u=A.u("c4")
B.v=A.u("c5")
B.w=A.u("c6")
B.x=A.u("c7")
B.y=A.u("cc")
B.z=A.u("cd")
B.A=A.u("ce")
B.B=A.u("cf")})();(function staticFields(){$.aM=null
$.a4=A.aT([],A.b8("n<j>"))
$.bg=null
$.bf=null
$.bO=null
$.bM=null
$.bQ=null
$.aV=null
$.aZ=null
$.ba=null})();(function lazyInitializers(){var t=hunkHelpers.lazyFinal
t($,"dp","bT",()=>A.d6("_$dart_dartClosure"))
t($,"du","bU",()=>A.aT([new J.aa()],A.b8("n<U>")))})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ArrayBuffer:A.F,SharedArrayBuffer:A.F,ArrayBufferView:A.R,DataView:A.ag,Float32Array:A.ah,Float64Array:A.ai,Int16Array:A.aj,Int32Array:A.ak,Int8Array:A.al,Uint16Array:A.am,Uint32Array:A.an,Uint8ClampedArray:A.S,CanvasPixelArray:A.S,Uint8Array:A.ao})
hunkHelpers.setOrUpdateLeafTags({ArrayBuffer:true,SharedArrayBuffer:true,ArrayBufferView:false,DataView:true,Float32Array:true,Float64Array:true,Int16Array:true,Int32Array:true,Int8Array:true,Uint16Array:true,Uint32Array:true,Uint8ClampedArray:true,CanvasPixelArray:true,Uint8Array:false})
A.G.$nativeSuperclassTag="ArrayBufferView"
A.W.$nativeSuperclassTag="ArrayBufferView"
A.X.$nativeSuperclassTag="ArrayBufferView"
A.P.$nativeSuperclassTag="ArrayBufferView"
A.Y.$nativeSuperclassTag="ArrayBufferView"
A.Z.$nativeSuperclassTag="ArrayBufferView"
A.Q.$nativeSuperclassTag="ArrayBufferView"})()
Function.prototype.$0=function(){return this()}
Function.prototype.$1=function(a){return this(a)}
Function.prototype.$2=function(a,b){return this(a,b)}
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r){t[r].removeEventListener("load",onLoad,false)}a(b.target)}for(var s=0;s<t.length;++s){t[s].addEventListener("load",onLoad,false)}})(function(a){v.currentScript=a
var t=A.dg
if(typeof dartMainRunner==="function"){dartMainRunner(t,[])}else{t([])}})})()
//# sourceMappingURL=trailingSlash.dart.js.map
