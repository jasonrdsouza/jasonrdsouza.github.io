(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}function mixinPropertiesHard(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
if(!b.hasOwnProperty(r))b[r]=a[r]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){A.bM(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t){var s=d()
if(a[b]!==t)A.bN(b)
a[b]=s}var r=a[b]
a[c]=function(){return r}
return r}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function instanceTearOffGetter(a,b){var t=null
return a?function(c){if(t===null)t=A.ah(b)
return new t(c,this)}:function(){if(t===null)t=A.ah(b)
return new t(this,null)}}function staticTearOffGetter(a){var t=null
return function(){if(t===null)t=A.ah(a).prototype
return t}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var t=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={a8:function a8(){},T:function T(a){this.a=a},
aN(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
Y(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.a7(a)
return t},
V(a){return A.aY(a)},
aY(a){var t,s,r,q,p
if(a instanceof A.d)return A.e(A.H(a),null)
t=J.G(a)
if(t===B.c||t===B.e||!1){s=B.b(a)
r=s!=="Object"&&s!==""
if(r)return s
q=a.constructor
if(typeof q=="function"){p=q.name
if(typeof p=="string")r=p!=="Object"&&p!==""
else r=!1
if(r)return p}}return A.e(A.H(a),null)},
aj(a,b){if(a==null)J.al(a)
throw A.a(A.bD(a,b))},
bD(a,b){var t,s="index"
if(!A.aJ(b))return new A.p(!0,b,s,null)
t=J.al(a)
if(b<0||b>=t)return new A.O(t,!0,b,s,"Index out of range")
return new A.W(!0,b,s,"Value not in range")},
a(a){var t,s
if(a==null)a=new A.U()
t=new Error()
t.dartException=a
s=A.bO
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
bO(){return J.a7(this.dartException)},
ak(a){throw A.a(a)},
bL(a){throw A.a(new A.K(a))},
aU(a1){var t,s,r,q,p,o,n,m,l,k,j=a1.co,i=a1.iS,h=a1.iI,g=a1.nDA,f=a1.aI,e=a1.fs,d=a1.cs,c=e[0],b=d[0],a=j[c],a0=a1.fT
a0.toString
t=i?Object.create(new A.Z().constructor.prototype):Object.create(new A.y(null,null).constructor.prototype)
t.$initialize=t.constructor
if(i)s=function static_tear_off(){this.$initialize()}
else s=function tear_off(a2,a3){this.$initialize(a2,a3)}
t.constructor=s
s.prototype=t
t.$_name=c
t.$_target=a
r=!i
if(r)q=A.aq(c,a,h,g)
else{t.$static_name=c
q=a}t.$S=A.aQ(a0,i,h)
t[b]=q
for(p=q,o=1;o<e.length;++o){n=e[o]
if(typeof n=="string"){m=j[n]
l=n
n=m}else l=""
k=d[o]
if(k!=null){if(r)n=A.aq(l,n,h,g)
t[k]=n}if(o===f)p=n}t.$C=p
t.$R=a1.rC
t.$D=a1.dV
return s},
aQ(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.a("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.aO)}throw A.a("Error in functionType of tearoff")},
aR(a,b,c,d){var t=A.ap
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
aq(a,b,c,d){var t,s
if(c)return A.aT(a,b,d)
t=b.length
s=A.aR(t,d,a,b)
return s},
aS(a,b,c,d){var t=A.ap,s=A.aP
switch(b?-1:a){case 0:throw A.a(new A.X("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,s,t)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,s,t)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,s,t)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,s,t)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,s,t)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,s,t)
default:return function(e,f,g){return function(){var r=[g(this)]
Array.prototype.push.apply(r,arguments)
return e.apply(f(this),r)}}(d,s,t)}},
aT(a,b,c){var t,s
if($.an==null)$.an=A.am("interceptor")
if($.ao==null)$.ao=A.am("receiver")
t=b.length
s=A.aS(t,c,a,b)
return s},
ah(a){return A.aU(a)},
aO(a,b){return A.a4(v.typeUniverse,A.H(a.a),b)},
ap(a){return a.a},
aP(a){return a.b},
am(a){var t,s,r,q=new A.y("receiver","interceptor"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw A.a(new A.p(!1,null,null,"Field name "+a+" not found."))},
bM(a){throw A.a(new A.L(a))},
m:function m(){},
a1:function a1(){},
Z:function Z(){},
y:function y(a,b){this.a=a
this.b=b},
X:function X(a){this.a=a},
au(a,b){var t=b.c
return t==null?b.c=A.ac(a,b.y,!0):t},
at(a,b){var t=b.c
return t==null?b.c=A.r(a,"ar",[b.y]):t},
av(a){var t=a.x
if(t===6||t===7||t===8)return A.av(a.y)
return t===11||t===12},
aZ(a){return a.at},
aL(a){return A.ad(v.typeUniverse,a,!1)},
l(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.x
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.y
s=A.l(a,t,c,a0)
if(s===t)return b
return A.aC(a,s,!0)
case 7:t=b.y
s=A.l(a,t,c,a0)
if(s===t)return b
return A.ac(a,s,!0)
case 8:t=b.y
s=A.l(a,t,c,a0)
if(s===t)return b
return A.aB(a,s,!0)
case 9:r=b.z
q=A.u(a,r,c,a0)
if(q===r)return b
return A.r(a,b.y,q)
case 10:p=b.y
o=A.l(a,p,c,a0)
n=b.z
m=A.u(a,n,c,a0)
if(o===p&&m===n)return b
return A.aa(a,o,m)
case 11:l=b.y
k=A.l(a,l,c,a0)
j=b.z
i=A.bz(a,j,c,a0)
if(k===l&&i===j)return b
return A.aA(a,k,i)
case 12:h=b.z
a0+=h.length
g=A.u(a,h,c,a0)
p=b.y
o=A.l(a,p,c,a0)
if(g===h&&o===p)return b
return A.ab(a,o,g,!0)
case 13:f=b.y
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw A.a(A.J("Attempted to substitute unexpected RTI kind "+d))}},
u(a,b,c,d){var t,s,r,q,p=b.length,o=A.a5(p)
for(t=!1,s=0;s<p;++s){r=b[s]
q=A.l(a,r,c,d)
if(q!==r)t=!0
o[s]=q}return t?o:b},
bA(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=A.a5(n)
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=A.l(a,p,c,d)
if(o!==p)t=!0
m.splice(s,3,r,q,o)}return t?m:b},
bz(a,b,c,d){var t,s=b.a,r=A.u(a,s,c,d),q=b.b,p=A.u(a,q,c,d),o=b.c,n=A.bA(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new A.D()
t.a=r
t.b=p
t.c=n
return t},
aK(a,b){a[v.arrayRti]=b
return a},
bC(a){var t=a.$S
if(t!=null){if(typeof t=="number")return A.bG(t)
return a.$S()}return null},
aM(a,b){var t
if(A.av(b))if(a instanceof A.m){t=A.bC(a)
if(t!=null)return t}return A.H(a)},
H(a){var t
if(a instanceof A.d){t=a.$ti
return t!=null?t:A.af(a)}if(Array.isArray(a))return A.ae(a)
return A.af(J.G(a))},
ae(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
c5(a){var t=a.$ti
return t!=null?t:A.af(a)},
af(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return A.bp(a,t)},
bp(a,b){var t=a instanceof A.m?a.__proto__.__proto__.constructor:b,s=A.be(v.typeUniverse,t.name)
b.$ccache=s
return s},
bG(a){var t,s=v.types,r=s[a]
if(typeof r=="string"){t=A.ad(v.typeUniverse,r,!1)
s[a]=t
return t}return r},
bo(a){var t,s,r,q,p=this
if(p===u.K)return A.o(p,a,A.bt)
if(!A.i(p))if(!(p===u._))t=!1
else t=!0
else t=!0
if(t)return A.o(p,a,A.bx)
t=p.x
s=t===6?p.y:p
if(s===u.S)r=A.aJ
else if(s===u.i||s===u.H)r=A.bs
else if(s===u.N)r=A.bu
else r=s===u.y?A.aH:null
if(r!=null)return A.o(p,a,r)
if(s.x===9){q=s.y
if(s.z.every(A.bH)){p.r="$i"+q
if(q==="aX")return A.o(p,a,A.br)
return A.o(p,a,A.bv)}}else if(t===7)return A.o(p,a,A.bm)
return A.o(p,a,A.bk)},
o(a,b,c){a.b=c
return a.b(b)},
bn(a){var t,s=this,r=A.bj
if(!A.i(s))if(!(s===u._))t=!1
else t=!0
else t=!0
if(t)r=A.bi
else if(s===u.K)r=A.bh
else{t=A.w(s)
if(t)r=A.bl}s.a=r
return s.a(a)},
a6(a){var t,s=a.x
if(!A.i(a))if(!(a===u._))if(!(a===u.A))if(s!==7)t=s===8&&A.a6(a.y)||a===u.P||a===u.T
else t=!0
else t=!0
else t=!0
else t=!0
return t},
bk(a){var t=this
if(a==null)return A.a6(t)
return A.b(v.typeUniverse,A.aM(a,t),null,t,null)},
bm(a){if(a==null)return!0
return this.y.b(a)},
bv(a){var t,s=this
if(a==null)return A.a6(s)
t=s.r
if(a instanceof A.d)return!!a[t]
return!!J.G(a)[t]},
br(a){var t,s=this
if(a==null)return A.a6(s)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
t=s.r
if(a instanceof A.d)return!!a[t]
return!!J.G(a)[t]},
bj(a){var t,s=this
if(a==null){t=A.w(s)
if(t)return a}else if(s.b(a))return a
A.aF(a,s)},
bl(a){var t=this
if(a==null)return a
else if(t.b(a))return a
A.aF(a,t)},
aF(a,b){throw A.a(A.b5(A.aw(a,A.aM(a,b),A.e(b,null))))},
aw(a,b,c){var t=A.N(a)
return t+": type '"+A.e(b==null?A.H(a):b,null)+"' is not a subtype of type '"+c+"'"},
b5(a){return new A.E("TypeError: "+a)},
c(a,b){return new A.E("TypeError: "+A.aw(a,null,b))},
bt(a){return a!=null},
bh(a){if(a!=null)return a
throw A.a(A.c(a,"Object"))},
bx(a){return!0},
bi(a){return a},
aH(a){return!0===a||!1===a},
bS(a){if(!0===a)return!0
if(!1===a)return!1
throw A.a(A.c(a,"bool"))},
bU(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.c(a,"bool"))},
bT(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.a(A.c(a,"bool?"))},
bV(a){if(typeof a=="number")return a
throw A.a(A.c(a,"double"))},
bX(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.c(a,"double"))},
bW(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.c(a,"double?"))},
aJ(a){return typeof a=="number"&&Math.floor(a)===a},
bg(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.a(A.c(a,"int"))},
bZ(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.c(a,"int"))},
bY(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.a(A.c(a,"int?"))},
bs(a){return typeof a=="number"},
c_(a){if(typeof a=="number")return a
throw A.a(A.c(a,"num"))},
c1(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.c(a,"num"))},
c0(a){if(typeof a=="number")return a
if(a==null)return a
throw A.a(A.c(a,"num?"))},
bu(a){return typeof a=="string"},
c2(a){if(typeof a=="string")return a
throw A.a(A.c(a,"String"))},
c4(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.c(a,"String"))},
c3(a){if(typeof a=="string")return a
if(a==null)return a
throw A.a(A.c(a,"String?"))},
by(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=s+A.e(a[r],b)
return t},
aG(a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2=", "
if(a5!=null){t=a5.length
if(a4==null){a4=A.aK([],u.s)
s=null}else s=a4.length
r=a4.length
for(q=t;q>0;--q)B.a.p(a4,"T"+(r+q))
for(p=u.X,o=u._,n="<",m="",q=0;q<t;++q,m=a2){l=a4.length
k=l-1-q
if(!(k>=0))return A.aj(a4,k)
n=B.d.q(n+m,a4[k])
j=a5[q]
i=j.x
if(!(i===2||i===3||i===4||i===5||j===p))if(!(j===o))l=!1
else l=!0
else l=!0
if(!l)n+=" extends "+A.e(j,a4)}n+=">"}else{n=""
s=null}p=a3.y
h=a3.z
g=h.a
f=g.length
e=h.b
d=e.length
c=h.c
b=c.length
a=A.e(p,a4)
for(a0="",a1="",q=0;q<f;++q,a1=a2)a0+=a1+A.e(g[q],a4)
if(d>0){a0+=a1+"["
for(a1="",q=0;q<d;++q,a1=a2)a0+=a1+A.e(e[q],a4)
a0+="]"}if(b>0){a0+=a1+"{"
for(a1="",q=0;q<b;q+=3,a1=a2){a0+=a1
if(c[q+1])a0+="required "
a0+=A.e(c[q+2],a4)+" "+c[q]}a0+="}"}if(s!=null){a4.toString
a4.length=s}return n+"("+a0+") => "+a},
e(a,b){var t,s,r,q,p,o,n,m=a.x
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=A.e(a.y,b)
return t}if(m===7){s=a.y
t=A.e(s,b)
r=s.x
return(r===11||r===12?"("+t+")":t)+"?"}if(m===8)return"FutureOr<"+A.e(a.y,b)+">"
if(m===9){q=A.bB(a.y)
p=a.z
return p.length>0?q+("<"+A.by(p,b)+">"):q}if(m===11)return A.aG(a,b,null)
if(m===12)return A.aG(a.y,b,a.z)
if(m===13){o=a.y
n=b.length
o=n-1-o
if(!(o>=0&&o<n))return A.aj(b,o)
return b[o]}return"?"},
bB(a){var t=v.mangledGlobalNames[a]
if(t!=null)return t
return"minified:"+a},
bf(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
be(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return A.ad(a,b,!1)
else if(typeof n=="number"){t=n
s=A.t(a,5,"#")
r=A.a5(t)
for(q=0;q<t;++q)r[q]=s
p=A.r(a,b,r)
o[b]=p
return p}else return n},
bc(a,b){return A.aD(a.tR,b)},
bR(a,b){return A.aD(a.eT,b)},
ad(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=A.az(A.ax(a,null,b,c))
s.set(b,t)
return t},
a4(a,b,c){var t,s,r=b.Q
if(r==null)r=b.Q=new Map()
t=r.get(c)
if(t!=null)return t
s=A.az(A.ax(a,b,c,!0))
r.set(c,s)
return s},
bd(a,b,c){var t,s,r,q=b.as
if(q==null)q=b.as=new Map()
t=c.at
s=q.get(t)
if(s!=null)return s
r=A.aa(a,b,c.x===10?c.z:[c])
q.set(t,r)
return r},
k(a,b){b.a=A.bn
b.b=A.bo
return b},
t(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new A.h(null,null)
t.x=b
t.at=c
s=A.k(a,t)
a.eC.set(c,s)
return s},
aC(a,b,c){var t,s=b.at+"*",r=a.eC.get(s)
if(r!=null)return r
t=A.ba(a,b,s,c)
a.eC.set(s,t)
return t},
ba(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.i(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new A.h(null,null)
r.x=6
r.y=b
r.at=c
return A.k(a,r)},
ac(a,b,c){var t,s=b.at+"?",r=a.eC.get(s)
if(r!=null)return r
t=A.b9(a,b,s,c)
a.eC.set(s,t)
return t},
b9(a,b,c,d){var t,s,r,q
if(d){t=b.x
if(!A.i(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&A.w(b.y)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.y
if(r.x===8&&A.w(r.y))return r
else return A.au(a,b)}}q=new A.h(null,null)
q.x=7
q.y=b
q.at=c
return A.k(a,q)},
aB(a,b,c){var t,s=b.at+"/",r=a.eC.get(s)
if(r!=null)return r
t=A.b7(a,b,s,c)
a.eC.set(s,t)
return t},
b7(a,b,c,d){var t,s,r
if(d){t=b.x
if(!A.i(b))if(!(b===u._))s=!1
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return A.r(a,"ar",[b])
else if(b===u.P||b===u.T)return u.O}r=new A.h(null,null)
r.x=8
r.y=b
r.at=c
return A.k(a,r)},
bb(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new A.h(null,null)
t.x=13
t.y=b
t.at=r
s=A.k(a,t)
a.eC.set(r,s)
return s},
F(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].at
return t},
b6(a){var t,s,r,q,p,o=a.length
for(t="",s="",r=0;r<o;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
t+=s+q+p+a[r+2].at}return t},
r(a,b,c){var t,s,r,q=b
if(c.length>0)q+="<"+A.F(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new A.h(null,null)
s.x=9
s.y=b
s.z=c
if(c.length>0)s.c=c[0]
s.at=q
r=A.k(a,s)
a.eC.set(q,r)
return r},
aa(a,b,c){var t,s,r,q,p,o
if(b.x===10){t=b.y
s=b.z.concat(c)}else{s=c
t=b}r=t.at+(";<"+A.F(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new A.h(null,null)
p.x=10
p.y=t
p.z=s
p.at=r
o=A.k(a,p)
a.eC.set(r,o)
return o},
aA(a,b,c){var t,s,r,q,p,o=b.at,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+A.F(n)
if(k>0){t=m>0?",":""
h+=t+"["+A.F(l)+"]"}if(i>0){t=m>0?",":""
h+=t+"{"+A.b6(j)+"}"}s=o+(h+")")
r=a.eC.get(s)
if(r!=null)return r
q=new A.h(null,null)
q.x=11
q.y=b
q.z=c
q.at=s
p=A.k(a,q)
a.eC.set(s,p)
return p},
ab(a,b,c,d){var t,s=b.at+("<"+A.F(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=A.b8(a,b,c,s,d)
a.eC.set(s,t)
return t},
b8(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=A.a5(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.x===1){s[q]=p;++r}}if(r>0){o=A.l(a,b,s,0)
n=A.u(a,c,s,0)
return A.ab(a,o,n,c!==n)}}m=new A.h(null,null)
m.x=12
m.y=b
m.z=c
m.at=d
return A.k(a,m)},
ax(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
az(a){var t,s,r,q,p,o,n,m,l,k,j,i=a.r,h=a.s
for(t=i.length,s=0;s<t;){r=i.charCodeAt(s)
if(r>=48&&r<=57)s=A.b1(s+1,r,i,h)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=A.ay(a,s,i,h,!1)
else if(r===46)s=A.ay(a,s,i,h,!0)
else{++s
switch(r){case 44:break
case 58:h.push(!1)
break
case 33:h.push(!0)
break
case 59:h.push(A.j(a.u,a.e,h.pop()))
break
case 94:h.push(A.bb(a.u,h.pop()))
break
case 35:h.push(A.t(a.u,5,"#"))
break
case 64:h.push(A.t(a.u,2,"@"))
break
case 126:h.push(A.t(a.u,3,"~"))
break
case 60:h.push(a.p)
a.p=h.length
break
case 62:q=a.u
p=h.splice(a.p)
A.a9(a.u,a.e,p)
a.p=h.pop()
o=h.pop()
if(typeof o=="string")h.push(A.r(q,o,p))
else{n=A.j(q,a.e,o)
switch(n.x){case 11:h.push(A.ab(q,n,p,a.n))
break
default:h.push(A.aa(q,n,p))
break}}break
case 38:A.b2(a,h)
break
case 42:q=a.u
h.push(A.aC(q,A.j(q,a.e,h.pop()),a.n))
break
case 63:q=a.u
h.push(A.ac(q,A.j(q,a.e,h.pop()),a.n))
break
case 47:q=a.u
h.push(A.aB(q,A.j(q,a.e,h.pop()),a.n))
break
case 40:h.push(a.p)
a.p=h.length
break
case 41:q=a.u
m=new A.D()
l=q.sEA
k=q.sEA
o=h.pop()
if(typeof o=="number")switch(o){case-1:l=h.pop()
break
case-2:k=h.pop()
break
default:h.push(o)
break}else h.push(o)
p=h.splice(a.p)
A.a9(a.u,a.e,p)
a.p=h.pop()
m.a=p
m.b=l
m.c=k
h.push(A.aA(q,A.j(q,a.e,h.pop()),m))
break
case 91:h.push(a.p)
a.p=h.length
break
case 93:p=h.splice(a.p)
A.a9(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-1)
break
case 123:h.push(a.p)
a.p=h.length
break
case 125:p=h.splice(a.p)
A.b4(a.u,a.e,p)
a.p=h.pop()
h.push(p)
h.push(-2)
break
default:throw"Bad character "+r}}}j=h.pop()
return A.j(a.u,a.e,j)},
b1(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
ay(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.x===10)p=p.y
o=A.bf(t,p.y)[q]
if(o==null)A.ak('No "'+q+'" in "'+A.aZ(p)+'"')
d.push(A.a4(t,p,o))}else d.push(q)
return n},
b2(a,b){var t=b.pop()
if(0===t){b.push(A.t(a.u,1,"0&"))
return}if(1===t){b.push(A.t(a.u,4,"1&"))
return}throw A.a(A.J("Unexpected extended operation "+A.Y(t)))},
j(a,b,c){if(typeof c=="string")return A.r(a,c,a.sEA)
else if(typeof c=="number")return A.b3(a,b,c)
else return c},
a9(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=A.j(a,b,c[t])},
b4(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=A.j(a,b,c[t])},
b3(a,b,c){var t,s,r=b.x
if(r===10){if(c===0)return b.y
t=b.z
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.y
r=b.x}else if(c===0)return b
if(r!==9)throw A.a(A.J("Indexed base must be an interface type"))
t=b.z
if(c<=t.length)return t[c-1]
throw A.a(A.J("Bad index "+c+" for "+b.h(0)))},
b(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!A.i(d))if(!(d===u._))t=!1
else t=!0
else t=!0
if(t)return!0
s=b.x
if(s===4)return!0
if(A.i(b))return!1
if(b.x!==1)t=!1
else t=!0
if(t)return!0
r=s===13
if(r)if(A.b(a,c[b.y],c,d,e))return!0
q=d.x
t=b===u.P||b===u.T
if(t){if(q===8)return A.b(a,b,c,d.y,e)
return d===u.P||d===u.T||q===7||q===6}if(d===u.K){if(s===8)return A.b(a,b.y,c,d,e)
if(s===6)return A.b(a,b.y,c,d,e)
return s!==7}if(s===6)return A.b(a,b.y,c,d,e)
if(q===6){t=A.au(a,d)
return A.b(a,b,c,t,e)}if(s===8){if(!A.b(a,b.y,c,d,e))return!1
return A.b(a,A.at(a,b),c,d,e)}if(s===7){t=A.b(a,u.P,c,d,e)
return t&&A.b(a,b.y,c,d,e)}if(q===8){if(A.b(a,b,c,d.y,e))return!0
return A.b(a,b,c,A.at(a,d),e)}if(q===7){t=A.b(a,b,c,u.P,e)
return t||A.b(a,b,c,d.y,e)}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.z
o=d.z
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!A.b(a,l,c,k,e)||!A.b(a,k,e,l,c))return!1}return A.aI(a,b.y,c,d.y,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return A.aI(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return A.bq(a,b,c,d,e)}return!1},
aI(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!A.b(a2,a3.y,a4,a5.y,a6))return!1
t=a3.z
s=a5.z
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
bq(a,b,c,d,e){var t,s,r,q,p,o,n,m=b.y,l=d.y
for(;m!==l;){t=a.tR[m]
if(t==null)return!1
if(typeof t=="string"){m=t
continue}s=t[l]
if(s==null)return!1
r=s.length
q=r>0?new Array(r):v.typeUniverse.sEA
for(p=0;p<r;++p)q[p]=A.a4(a,b,s[p])
return A.aE(a,q,null,c,d.z,e)}o=b.z
n=d.z
return A.aE(a,o,null,c,n,e)},
aE(a,b,c,d,e,f){var t,s,r,q=b.length
for(t=0;t<q;++t){s=b[t]
r=e[t]
if(!A.b(a,s,d,r,f))return!1}return!0},
w(a){var t,s=a.x
if(!(a===u.P||a===u.T))if(!A.i(a))if(s!==7)if(!(s===6&&A.w(a.y)))t=s===8&&A.w(a.y)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
bH(a){var t
if(!A.i(a))if(!(a===u._))t=!1
else t=!0
else t=!0
return t},
i(a){var t=a.x
return t===2||t===3||t===4||t===5||a===u.X},
aD(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
a5(a){return a>0?new Array(a):v.typeUniverse.sEA},
h:function h(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
D:function D(){this.c=this.b=this.a=null},
a3:function a3(){},
E:function E(a){this.a=a},
aV(a){if(a instanceof A.m)return a.h(0)
return"Instance of '"+A.V(a)+"'"},
b_(a,b,c){var t,s=A.ae(b),r=new J.x(b,b.length,s.n("x<1>"))
if(!r.l())return a
if(c.length===0){s=s.c
do{t=r.d
a+=A.Y(t==null?s.a(t):t)}while(r.l())}else{t=r.d
a+=A.Y(t==null?s.c.a(t):t)
for(s=s.c;r.l();){t=r.d
a=a+c+A.Y(t==null?s.a(t):t)}}return a},
N(a){if(typeof a=="number"||A.aH(a)||a==null)return J.a7(a)
if(typeof a=="string")return JSON.stringify(a)
return A.aV(a)},
J(a){return new A.I(a)},
b0(a){return new A.a2(a)},
M:function M(){},
I:function I(a){this.a=a},
U:function U(){},
p:function p(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
W:function W(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
O:function O(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
a2:function a2(a){this.a=a},
K:function K(a){this.a=a},
L:function L(a){this.a=a},
q:function q(){},
d:function d(){},
a0:function a0(a){this.a=a},
bK(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
bN(a){return A.ak(new A.T("Field '"+a+"' has been assigned during initialization."))},
aW(a,b,c){var t,s
if(A.bw(a))return b+"..."+c
t=new A.a0(b)
B.a.p($.v,a)
try{s=t
s.a=A.b_(s.a,a,", ")}finally{if(0>=$.v.length)return A.aj($.v,-1)
$.v.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
bw(a){var t,s
for(t=$.v.length,s=0;s<t;++s)if(a===$.v[s])return!0
return!1},
bI(){A.bK("Cork frontend active.")}},J={
G(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.B.prototype
return J.P.prototype}if(typeof a=="string")return J.n.prototype
if(a==null)return J.C.prototype
if(typeof a=="boolean")return J.A.prototype
if(a.constructor==Array)return J.f.prototype
return a},
bF(a){if(typeof a=="string")return J.n.prototype
if(a==null)return a
if(a.constructor==Array)return J.f.prototype
return a},
al(a){return J.bF(a).gi(a)},
a7(a){return J.G(a).h(a)},
z:function z(){},
A:function A(){},
C:function C(){},
S:function S(){},
f:function f(a){this.$ti=a},
R:function R(a){this.$ti=a},
x:function x(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
Q:function Q(){},
B:function B(){},
P:function P(){},
n:function n(){}},B={}
var w=[A,J,B]
var $={}
A.a8.prototype={}
J.z.prototype={
h(a){return"Instance of '"+A.V(a)+"'"}}
J.A.prototype={
h(a){return String(a)},
$iag:1}
J.C.prototype={
h(a){return"null"}}
J.S.prototype={}
J.f.prototype={
p(a,b){A.ae(a).c.a(b)
if(!!a.fixed$length)A.ak(A.b0("add"))
a.push(b)},
h(a){return A.aW(a,"[","]")},
gi(a){return a.length},
$ias:1}
J.R.prototype={}
J.x.prototype={
l(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw A.a(A.bL(r))
t=s.c
if(t>=q){s.sm(null)
return!1}s.sm(r[t]);++s.c
return!0},
sm(a){this.d=this.$ti.n("1?").a(a)}}
J.Q.prototype={
h(a){if(a===0&&1/a<0)return"-0.0"
else return""+a}}
J.B.prototype={$iai:1}
J.P.prototype={}
J.n.prototype={
q(a,b){return a+b},
h(a){return a},
gi(a){return a.length},
$ia_:1}
A.T.prototype={
h(a){return"LateInitializationError: "+this.a}}
A.m.prototype={
h(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+A.aN(s==null?"unknown":s)+"'"},
gt(){return this},
$C:"$1",
$R:1,
$D:null}
A.a1.prototype={}
A.Z.prototype={
h(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+A.aN(t)+"'"}}
A.y.prototype={
h(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.V(this.a)+"'")}}
A.X.prototype={
h(a){return"RuntimeError: "+this.a}}
A.h.prototype={
n(a){return A.a4(v.typeUniverse,this,a)},
u(a){return A.bd(v.typeUniverse,this,a)}}
A.D.prototype={}
A.a3.prototype={
h(a){return this.a}}
A.E.prototype={}
A.M.prototype={}
A.I.prototype={
h(a){var t=this.a
if(t!=null)return"Assertion failed: "+A.N(t)
return"Assertion failed"}}
A.U.prototype={
h(a){return"Throw of null."}}
A.p.prototype={
gk(){return"Invalid argument"+(!this.a?"(s)":"")},
gj(){return""},
h(a){var t=this,s=t.c,r=s==null?"":" ("+s+")",q=t.d,p=q==null?"":": "+q,o=t.gk()+r+p
if(!t.a)return o
return o+t.gj()+": "+A.N(t.b)}}
A.W.prototype={
gk(){return"RangeError"},
gj(){return""}}
A.O.prototype={
gk(){return"RangeError"},
gj(){if(A.bg(this.b)<0)return": index must not be negative"
var t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gi(a){return this.f}}
A.a2.prototype={
h(a){return"Unsupported operation: "+this.a}}
A.K.prototype={
h(a){return"Concurrent modification during iteration: "+A.N(this.a)+"."}}
A.L.prototype={
h(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.q.prototype={
h(a){return"null"}}
A.d.prototype={$id:1,
h(a){return"Instance of '"+A.V(this)+"'"},
toString(){return this.h(this)}}
A.a0.prototype={
gi(a){return this.a.length},
h(a){var t=this.a
return t.charCodeAt(0)==0?t:t}};(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(A.d,null)
s(A.d,[A.a8,J.z,J.x,A.M,A.m,A.h,A.D,A.q,A.a0])
s(J.z,[J.A,J.C,J.S,J.f,J.Q,J.n])
t(J.R,J.f)
s(J.Q,[J.B,J.P])
s(A.M,[A.T,A.X,A.a3,A.I,A.U,A.p,A.a2,A.K,A.L])
t(A.a1,A.m)
s(A.a1,[A.Z,A.y])
t(A.E,A.a3)
s(A.p,[A.W,A.O])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{ai:"int",bE:"double",bJ:"num",a_:"String",ag:"bool",q:"Null",aX:"List"},mangledNames:{},types:[],arrayRti:Symbol("$ti")}
A.bc(v.typeUniverse,JSON.parse('{"A":{"ag":[]},"f":{"as":["1"]},"R":{"f":["1"],"as":["1"]},"B":{"ai":[]},"n":{"a_":[]}}'))
var u=(function rtii(){var t=A.aL
return{Z:t("bP"),s:t("f<a_>"),b:t("f<@>"),T:t("C"),g:t("bQ"),P:t("q"),K:t("d"),N:t("a_"),y:t("ag"),i:t("bE"),S:t("ai"),A:t("0&*"),_:t("d*"),O:t("ar<q>?"),X:t("d?"),H:t("bJ")}})();(function constants(){B.c=J.z.prototype
B.a=J.f.prototype
B.d=J.n.prototype
B.e=J.S.prototype
B.b=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}})();(function staticFields(){$.ao=null
$.an=null
$.v=A.aK([],A.aL("f<d>"))})();(function nativeSupport(){hunkHelpers.setOrUpdateInterceptorsByTag({})
hunkHelpers.setOrUpdateLeafTags({})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var t=A.bI
if(typeof dartMainRunner==="function")dartMainRunner(t,[])
else t([])})})()
//# sourceMappingURL=base.dart.js.map
