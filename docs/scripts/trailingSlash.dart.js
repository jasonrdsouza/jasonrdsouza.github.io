(function dartProgram(){function copyProperties(a,b){var t=Object.keys(a)
for(var s=0;s<t.length;s++){var r=t[s]
b[r]=a[r]}}var z=function(){var t=function(){}
t.prototype={p:{}}
var s=new t()
if(!(s.__proto__&&s.__proto__.p===t.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var r=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(r))return true}}catch(q){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var t=0;t<a.length;t++){var s=a[t]
var r=Object.keys(s)
for(var q=0;q<r.length;q++){var p=r[q]
var o=s[p]
if(typeof o=='function')o.name=p}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var t=Object.create(b.prototype)
copyProperties(a.prototype,t)
a.prototype=t}}function inheritMany(a,b){for(var t=0;t<b.length;t++)inherit(b[t],a)}function mixin(a,b){copyProperties(b.prototype,a.prototype)
a.prototype.constructor=a}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.cm(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.az"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.az"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.az(this,a,b,c,true,false,e).prototype
return t}:tearOffGetter(a,b,c,e,f)}var x=0
function installTearOff(a,b,c,d,e,f,g,h,i,j){var t=[]
for(var s=0;s<h.length;s++){var r=h[s]
if(typeof r=='string')r=a[r]
r.$callName=g[s]
t.push(r)}var r=t[0]
r.$R=e
r.$D=f
var q=i
if(typeof q=="number")q+=x
var p=h[0]
r.$stubName=p
var o=tearOff(t,j||0,q,c,p,d)
a[b]=o
if(c)r.$tearOff=o}function installStaticTearOff(a,b,c,d,e,f,g,h){return installTearOff(a,b,true,false,c,d,e,f,g,h)}function installInstanceTearOff(a,b,c,d,e,f,g,h,i){return installTearOff(a,b,false,c,d,e,f,g,h,i)}function setOrUpdateInterceptorsByTag(a){var t=v.interceptorsByTag
if(!t){v.interceptorsByTag=a
return}copyProperties(a,t)}function setOrUpdateLeafTags(a){var t=v.leafTags
if(!t){v.leafTags=a
return}copyProperties(a,t)}function updateTypes(a){var t=v.types
var s=t.length
t.push.apply(t,a)
return s}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var t=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e)}},s=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={ar:function ar(){},
bh:function(a){var t,s=H.bg(a)
if(s!=null)return s
t="minified:"+a
return t},
b:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.W(a)
if(typeof t!="string")throw H.a(H.c7(a))
return t},
a8:function(a){return H.bu(a)},
bu:function(a){var t,s,r
if(a instanceof P.e)return H.h(H.G(a),null)
if(J.aj(a)===C.n||u.o.b(a)){t=C.c(a)
if(H.aM(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.aM(r))return r}}return H.h(H.G(a),null)},
aM:function(a){var t=a!=="Object"&&a!==""
return t},
aB:function(a,b){if(a==null)J.aE(a)
throw H.a(H.c9(a,b))},
c9:function(a,b){var t,s="index"
if(!H.b5(b))return new P.r(!0,b,s,null)
t=J.aE(a)
if(b<0||b>=t)return new P.a3(t,!0,b,s,"Index out of range")
return P.aa(b,s)},
c7:function(a){return new P.r(!0,a,null,null)},
a:function(a){var t,s
if(a==null)a=new P.a7()
t=new Error()
t.dartException=a
s=H.cn
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
cn:function(){return J.W(this.dartException)},
bf:function(a){throw H.a(a)},
cl:function(a){throw H.a(new P.Z(a))},
br:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.ac().constructor.prototype):Object.create(new H.J(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.k
if(typeof s!=="number")return s.i()
$.k=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.aJ(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.bn(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.aJ(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
bn:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.b9,a)
if(typeof a=="string"){if(b)throw H.a("Cannot compute signature for static tearoff.")
t=c?H.bl:H.bk
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.a("Error in functionType of tearoff")},
bo:function(a,b,c,d){var t=H.aI
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
aJ:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.bq(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.bo(s,!q,t,b)
if(s===0){q=$.k
if(typeof q!=="number")return q.i()
$.k=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.b(H.aq())+";return "+o+"."+H.b(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.k
if(typeof q!=="number")return q.i()
$.k=q+1
n+=q
return new Function("return function("+n+"){return this."+H.b(H.aq())+"."+H.b(t)+"("+n+");}")()},
bp:function(a,b,c,d){var t=H.aI,s=H.bm
switch(b?-1:a){case 0:throw H.a(new H.ab("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
bq:function(a,b){var t,s,r,q,p,o,n=H.aq(),m=$.aG
if(m==null)m=$.aG=H.aF("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.bp(s,!q,t,b)
if(s===1){q="return function(){return this."+H.b(n)+"."+H.b(t)+"(this."+m+");"
p=$.k
if(typeof p!=="number")return p.i()
$.k=p+1
return new Function(q+p+"}")()}o="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s-1).join(",")
q="return function("+o+"){return this."+H.b(n)+"."+H.b(t)+"(this."+m+", "+o+");"
p=$.k
if(typeof p!=="number")return p.i()
$.k=p+1
return new Function(q+p+"}")()},
az:function(a,b,c,d,e,f,g){return H.br(a,b,c,d,!!e,!!f,g)},
bk:function(a,b){return H.U(v.typeUniverse,H.G(a.a),b)},
bl:function(a,b){return H.U(v.typeUniverse,H.G(a.c),b)},
aI:function(a){return a.a},
bm:function(a){return a.c},
aq:function(){var t=$.aH
return t==null?$.aH=H.aF("self"):t},
aF:function(a){var t,s,r,q=new H.J("self","target","receiver","name"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw H.a(new P.r(!1,null,null,"Field name "+a+" not found."))},
cm:function(a){throw H.a(new P.a_(a))},
cd:function(a){return v.getIsolateTag(a)},
cj:function(a){var t,s,r,q,p,o=H.b0($.b8.$1(a)),n=$.ai[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.an[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.bO($.b6.$2(a,o))
if(r!=null){n=$.ai[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.an[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.ap(t)
$.ai[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.an[o]=t
return t}if(q==="-"){p=H.ap(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.bc(a,t)
if(q==="*")throw H.a(P.aP(o))
if(v.leafTags[o]===true){p=H.ap(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.bc(a,t)},
bc:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.aC(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
ap:function(a){return J.aC(a,!1,null,!!a.$icq)},
ck:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.ap(t)
else return J.aC(t,c,null,null)},
cg:function(){if(!0===$.aA)return
$.aA=!0
H.ch()},
ch:function(){var t,s,r,q,p,o,n,m
$.ai=Object.create(null)
$.an=Object.create(null)
H.cf()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.bd.$1(p)
if(o!=null){n=H.ck(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
cf:function(){var t,s,r,q,p,o,n=C.h()
n=H.x(C.i,H.x(C.j,H.x(C.d,H.x(C.d,H.x(C.k,H.x(C.l,H.x(C.m(C.c),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.b8=new H.ak(q)
$.b6=new H.al(p)
$.bd=new H.am(o)},
x:function(a,b){return a(b)||b},
v:function v(){},
ae:function ae(){},
ac:function ac(){},
J:function J(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
ab:function ab(a){this.a=a},
ak:function ak(a){this.a=a},
al:function al(a){this.a=a},
am:function am(a){this.a=a},
bw:function(a,b){var t=b.c
return t==null?b.c=H.av(a,b.z,!0):t},
aN:function(a,b){var t=b.c
return t==null?b.c=H.B(a,"aK",[b.z]):t},
aO:function(a){var t=a.y
if(t===6||t===7||t===8)return H.aO(a.z)
return t===11||t===12},
bv:function(a){return a.cy},
b7:function(a){return H.aw(v.typeUniverse,a,!1)},
q:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.q(a,t,c,a0)
if(s===t)return b
return H.aX(a,s,!0)
case 7:t=b.z
s=H.q(a,t,c,a0)
if(s===t)return b
return H.av(a,s,!0)
case 8:t=b.z
s=H.q(a,t,c,a0)
if(s===t)return b
return H.aW(a,s,!0)
case 9:r=b.Q
q=H.E(a,r,c,a0)
if(q===r)return b
return H.B(a,b.z,q)
case 10:p=b.z
o=H.q(a,p,c,a0)
n=b.Q
m=H.E(a,n,c,a0)
if(o===p&&m===n)return b
return H.at(a,o,m)
case 11:l=b.z
k=H.q(a,l,c,a0)
j=b.Q
i=H.c4(a,j,c,a0)
if(k===l&&i===j)return b
return H.aV(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.E(a,h,c,a0)
p=b.z
o=H.q(a,p,c,a0)
if(g===h&&o===p)return b
return H.au(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.a(P.Y("Attempted to substitute unexpected RTI kind "+d))}},
E:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.q(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
c5:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.q(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
c4:function(a,b,c,d){var t,s=b.a,r=H.E(a,s,c,d),q=b.b,p=H.E(a,q,c,d),o=b.c,n=H.c5(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.R()
t.a=r
t.b=p
t.c=n
return t},
be:function(a,b){a[v.arrayRti]=b
return a},
c8:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.b9(t)
return a.$S()}return null},
ba:function(a,b){var t
if(H.aO(b))if(a instanceof H.v){t=H.c8(a)
if(t!=null)return t}return H.G(a)},
G:function(a){var t
if(a instanceof P.e){t=a.$ti
return t!=null?t:H.ay(a)}if(Array.isArray(a))return H.ax(a)
return H.ay(J.aj(a))},
ax:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
cF:function(a){var t=a.$ti
return t!=null?t:H.ay(a)},
ay:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.bV(a,t)},
bV:function(a,b){var t=a instanceof H.v?a.__proto__.__proto__.constructor:b,s=H.bM(v.typeUniverse,t.name)
b.$ccache=s
return s},
b9:function(a){var t,s,r
H.b_(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.aw(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
bU:function(a){var t,s,r=this,q=u.K
if(r===q)return H.D(r,a,H.bY)
if(!H.l(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.D(r,a,H.c1)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.b5
else if(t===u.i||t===u.H)s=H.bX
else if(t===u.N)s=H.bZ
else s=t===u.y?H.b3:null
if(s!=null)return H.D(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.ci)){r.r="$i"+q
return H.D(r,a,H.c_)}}else if(q===7)return H.D(r,a,H.bS)
return H.D(r,a,H.bQ)},
D:function(a,b,c){a.b=c
return a.b(b)},
bT:function(a){var t,s,r=this
if(!H.l(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.bP
else if(r===u.K)s=H.bN
else s=H.bR
r.a=s
return r.a(a)},
c2:function(a){var t,s=a.y
if(!H.l(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
bQ:function(a){var t=this
if(a==null)return H.c2(t)
return H.d(v.typeUniverse,H.ba(a,t),null,t,null)},
bS:function(a){if(a==null)return!0
return this.z.b(a)},
c_:function(a){var t=this,s=t.r
if(a instanceof P.e)return!!a[s]
return!!J.aj(a)[s]},
cE:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.b1(a,t)},
bR:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.b1(a,t)},
b1:function(a,b){throw H.a(H.bD(H.aQ(a,H.ba(a,b),H.h(b,null))))},
aQ:function(a,b,c){var t=P.a2(a),s=H.h(b==null?H.G(a):b,null)
return t+": type '"+H.b(s)+"' is not a subtype of type '"+H.b(c)+"'"},
bD:function(a){return new H.S("TypeError: "+a)},
f:function(a,b){return new H.S("TypeError: "+H.aQ(a,null,b))},
bY:function(a){return a!=null},
bN:function(a){return a},
c1:function(a){return!0},
bP:function(a){return a},
b3:function(a){return!0===a||!1===a},
cs:function(a){if(!0===a)return!0
if(!1===a)return!1
throw H.a(H.f(a,"bool"))},
cu:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.a(H.f(a,"bool"))},
ct:function(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw H.a(H.f(a,"bool?"))},
cv:function(a){if(typeof a=="number")return a
throw H.a(H.f(a,"double"))},
cx:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"double"))},
cw:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"double?"))},
b5:function(a){return typeof a=="number"&&Math.floor(a)===a},
cy:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.a(H.f(a,"int"))},
b_:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.a(H.f(a,"int"))},
cz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.a(H.f(a,"int?"))},
bX:function(a){return typeof a=="number"},
cA:function(a){if(typeof a=="number")return a
throw H.a(H.f(a,"num"))},
cC:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"num"))},
cB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"num?"))},
bZ:function(a){return typeof a=="string"},
cD:function(a){if(typeof a=="string")return a
throw H.a(H.f(a,"String"))},
b0:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.a(H.f(a,"String"))},
bO:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.a(H.f(a,"String?"))},
c3:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.a.i(s,H.h(a[r],b))
return t},
b2:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.be([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.e.t(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.aB(a5,j)
m=C.a.i(m,a5[j])
i=a6[q]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===p))if(!(i===o))k=i===n
else k=!0
else k=!0
if(!k)m+=C.a.i(" extends ",H.h(i,a5))}m+=">"}else{m=""
s=null}p=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=H.h(p,a5)
for(a1="",a2="",q=0;q<e;++q,a2=a3)a1+=C.a.i(a2,H.h(f[q],a5))
if(c>0){a1+=a2+"["
for(a2="",q=0;q<c;++q,a2=a3)a1+=C.a.i(a2,H.h(d[q],a5))
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",q=0;q<a;q+=3,a2=a3){a1+=a2
if(b[q+1])a1+="required "
a1+=J.aD(H.h(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
a5.length=s}return m+"("+a1+") => "+H.b(a0)},
h:function(a,b){var t,s,r,q,p,o,n,m=a.y
if(m===5)return"erased"
if(m===2)return"dynamic"
if(m===3)return"void"
if(m===1)return"Never"
if(m===4)return"any"
if(m===6){t=H.h(a.z,b)
return t}if(m===7){s=a.z
t=H.h(s,b)
r=s.y
return J.aD(r===11||r===12?C.a.i("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.b(H.h(a.z,b))+">"
if(m===9){q=H.c6(a.z)
p=a.Q
return p.length!==0?q+("<"+H.c3(p,b)+">"):q}if(m===11)return H.b2(a,b,null)
if(m===12)return H.b2(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.aB(b,o)
return b[o]}return"?"},
c6:function(a){var t,s=H.bg(a)
if(s!=null)return s
t="minified:"+a
return t},
aY:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
bM:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.aw(a,b,!1)
else if(typeof n=="number"){t=n
s=H.C(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.B(a,b,r)
o[b]=p
return p}else return n},
bK:function(a,b){return H.aZ(a.tR,b)},
cr:function(a,b){return H.aZ(a.eT,b)},
aw:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.aU(H.aS(a,null,b,c))
s.set(b,t)
return t},
U:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.aU(H.aS(a,b,c,!0))
r.set(c,s)
return s},
bL:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.at(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
p:function(a,b){b.a=H.bT
b.b=H.bU
return b},
C:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.j(null,null)
t.y=b
t.cy=c
s=H.p(a,t)
a.eC.set(c,s)
return s},
aX:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.bI(a,b,s,c)
a.eC.set(s,t)
return t},
bI:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.l(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.j(null,null)
r.y=6
r.z=b
r.cy=c
return H.p(a,r)},
av:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.bH(a,b,s,c)
a.eC.set(s,t)
return t},
bH:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.l(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.ao(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.ao(r.z))return r
else return H.bw(a,b)}}q=new H.j(null,null)
q.y=7
q.z=b
q.cy=c
return H.p(a,q)},
aW:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.bF(a,b,s,c)
a.eC.set(s,t)
return t},
bF:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.l(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.B(a,"aK",[b])
else if(b===u.P||b===u.T)return u.O}r=new H.j(null,null)
r.y=8
r.z=b
r.cy=c
return H.p(a,r)},
bJ:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.j(null,null)
t.y=13
t.z=b
t.cy=r
s=H.p(a,t)
a.eC.set(r,s)
return s},
T:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
bE:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
B:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.T(c)+">"
t=a.eC.get(q)
if(t!=null)return t
s=new H.j(null,null)
s.y=9
s.z=b
s.Q=c
if(c.length>0)s.c=c[0]
s.cy=q
r=H.p(a,s)
a.eC.set(q,r)
return r},
at:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.T(s)+">")
q=a.eC.get(r)
if(q!=null)return q
p=new H.j(null,null)
p.y=10
p.z=t
p.Q=s
p.cy=r
o=H.p(a,p)
a.eC.set(r,o)
return o},
aV:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.T(n)
if(k>0){t=m>0?",":""
s=H.T(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.bE(j)
h+=t+"{"+s+"}"}r=o+(h+")")
q=a.eC.get(r)
if(q!=null)return q
p=new H.j(null,null)
p.y=11
p.z=b
p.Q=c
p.cy=r
s=H.p(a,p)
a.eC.set(r,s)
return s},
au:function(a,b,c,d){var t,s=b.cy+("<"+H.T(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.bG(a,b,c,s,d)
a.eC.set(s,t)
return t},
bG:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.q(a,b,s,0)
n=H.E(a,c,s,0)
return H.au(a,o,n,c!==n)}}m=new H.j(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.p(a,m)},
aS:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
aU:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.bz(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.aT(a,s,h,g,!1)
else if(r===46)s=H.aT(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.o(a.u,a.e,g.pop()))
break
case 94:g.push(H.bJ(a.u,g.pop()))
break
case 35:g.push(H.C(a.u,5,"#"))
break
case 64:g.push(H.C(a.u,2,"@"))
break
case 126:g.push(H.C(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.as(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.B(q,o,p))
else{n=H.o(q,a.e,o)
switch(n.y){case 11:g.push(H.au(q,n,p,a.n))
break
default:g.push(H.at(q,n,p))
break}}break
case 38:H.bA(a,g)
break
case 42:m=a.u
g.push(H.aX(m,H.o(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.av(m,H.o(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.aW(m,H.o(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.R()
k=q.sEA
j=q.sEA
o=g.pop()
if(typeof o=="number")switch(o){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(o)
break}else g.push(o)
p=g.splice(a.p)
H.as(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.aV(q,H.o(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.as(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.bC(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.o(a.u,a.e,i)},
bz:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
aT:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.aY(t,p.z)[q]
if(o==null)H.bf('No "'+q+'" in "'+H.bv(p)+'"')
d.push(H.U(t,p,o))}else d.push(q)
return n},
bA:function(a,b){var t=b.pop()
if(0===t){b.push(H.C(a.u,1,"0&"))
return}if(1===t){b.push(H.C(a.u,4,"1&"))
return}throw H.a(P.Y("Unexpected extended operation "+H.b(t)))},
o:function(a,b,c){if(typeof c=="string")return H.B(a,c,a.sEA)
else if(typeof c=="number")return H.bB(a,b,c)
else return c},
as:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.o(a,b,c[t])},
bC:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.o(a,b,c[t])},
bB:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.a(P.Y("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.a(P.Y("Bad index "+c+" for "+b.h(0)))},
d:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l,k
if(b===d)return!0
if(!H.l(d))if(!(d===u._))t=d===u.K
else t=!0
else t=!0
if(t)return!0
s=b.y
if(s===4)return!0
if(H.l(b))return!1
if(b.y!==1)t=b===u.P||b===u.T
else t=!0
if(t)return!0
r=s===13
if(r)if(H.d(a,c[b.z],c,d,e))return!0
q=d.y
if(s===6)return H.d(a,b.z,c,d,e)
if(q===6){t=d.z
return H.d(a,b,c,t,e)}if(s===8){if(!H.d(a,b.z,c,d,e))return!1
return H.d(a,H.aN(a,b),c,d,e)}if(s===7){t=H.d(a,b.z,c,d,e)
return t}if(q===8){if(H.d(a,b,c,d.z,e))return!0
return H.d(a,b,c,H.aN(a,d),e)}if(q===7){t=H.d(a,b,c,d.z,e)
return t}if(r)return!1
t=s!==11
if((!t||s===12)&&d===u.Z)return!0
if(q===12){if(b===u.g)return!0
if(s!==12)return!1
p=b.Q
o=d.Q
n=p.length
if(n!==o.length)return!1
c=c==null?p:p.concat(c)
e=e==null?o:o.concat(e)
for(m=0;m<n;++m){l=p[m]
k=o[m]
if(!H.d(a,l,c,k,e)||!H.d(a,k,e,l,c))return!1}return H.b4(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.b4(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.bW(a,b,c,d,e)}return!1},
b4:function(a2,a3,a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1
if(!H.d(a2,a3.z,a4,a5.z,a6))return!1
t=a3.Q
s=a5.Q
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
if(!H.d(a2,q[i],a6,h,a4))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.d(a2,q[p+i],a6,h,a4))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.d(a2,l[i],a6,h,a4))return!1}g=t.c
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
if(!H.d(a2,f[b+2],a6,h,a4))return!1
break}}for(;c<e;){if(g[c+1])return!1
c+=3}return!0},
bW:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.d(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.aY(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.d(a,H.U(a,b,m[q]),c,s[q],e))return!1
return!0},
ao:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.l(a))if(s!==7)if(!(s===6&&H.ao(a.z)))t=s===8&&H.ao(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
ci:function(a){var t
if(!H.l(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
l:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
aZ:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
j:function j(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
R:function R(){this.c=this.b=this.a=null},
ah:function ah(){},
S:function S(a){this.a=a},
bg:function(a){return v.mangledGlobalNames[a]}},J={
aC:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
ce:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.aA==null){H.cg()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.a(P.aP("Return interceptor for "+H.b(t(a,p))))}r=a.constructor
q=r==null?null:r[J.aL()]
if(q!=null)return q
q=H.cj(a)
if(q!=null)return q
if(typeof a=="function")return C.o
t=Object.getPrototypeOf(a)
if(t==null)return C.f
if(t===Object.prototype)return C.f
if(typeof r=="function"){Object.defineProperty(r,J.aL(),{value:C.b,enumerable:false,writable:true,configurable:true})
return C.b}return C.b},
aL:function(){var t=$.aR
return t==null?$.aR=v.getIsolateTag("_$dart_js"):t},
aj:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.L.prototype
return J.a5.prototype}if(typeof a=="string")return J.m.prototype
if(a==null)return J.M.prototype
if(typeof a=="boolean")return J.K.prototype
if(a.constructor==Array)return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.w.prototype
return a}if(a instanceof P.e)return a
return J.ce(a)},
ca:function(a){if(typeof a=="string")return J.m.prototype
if(a==null)return a
if(a.constructor==Array)return J.i.prototype
if(!(a instanceof P.e))return J.n.prototype
return a},
cb:function(a){if(typeof a=="number")return J.N.prototype
if(typeof a=="string")return J.m.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.n.prototype
return a},
cc:function(a){if(typeof a=="string")return J.m.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.n.prototype
return a},
aD:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.cb(a).i(a,b)},
aE:function(a){return J.ca(a).gj(a)},
W:function(a){return J.aj(a).h(a)},
c:function c(){},
K:function K(){},
M:function M(){},
t:function t(){},
Q:function Q(){},
n:function n(){},
w:function w(){},
i:function i(a){this.$ti=a},
a6:function a6(a){this.$ti=a},
I:function I(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
N:function N(){},
L:function L(){},
a5:function a5(){},
m:function m(){}},P={
bs:function(a){if(a instanceof H.v)return a.h(0)
return"Instance of '"+H.b(H.a8(a))+"'"},
bx:function(a,b,c){var t=new J.I(b,b.length,H.ax(b).q("I<1>"))
if(!t.m())return a
if(c.length===0){do a+=H.b(t.d)
while(t.m())}else{a+=H.b(t.d)
for(;t.m();)a=a+c+H.b(t.d)}return a},
a2:function(a){if(typeof a=="number"||H.b3(a)||null==a)return J.W(a)
if(typeof a=="string")return JSON.stringify(a)
return P.bs(a)},
Y:function(a){return new P.X(a)},
bj:function(a,b,c){return new P.r(!0,a,b,c)},
aa:function(a,b){return new P.a9(!0,a,b,"Value not in range")},
by:function(a){return new P.ag(a)},
aP:function(a){return new P.af(a)},
y:function y(){},
V:function V(){},
a1:function a1(){},
X:function X(a){this.a=a},
a7:function a7(){},
r:function r(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a9:function a9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a3:function a3(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
ag:function ag(a){this.a=a},
af:function af(a){this.a=a},
Z:function Z(a){this.a=a},
a_:function a_(a){this.a=a},
z:function z(){},
O:function O(){},
A:function A(){},
H:function H(){},
e:function e(){},
u:function u(){},
ad:function ad(a){this.a=a},
bt:function(a,b,c){var t,s
if(P.c0(a))return b+"..."+c
t=new P.ad(b)
C.e.t($.F,a)
try{s=t
s.a=P.bx(s.a,a,", ")}finally{if(0>=$.F.length)return H.aB($.F,-1)
$.F.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
c0:function(a){var t,s
for(t=$.F.length,s=0;s<t;++s)if(a===$.F[s])return!0
return!1}},W={a0:function a0(){},P:function P(){}},S={
bb:function(){var t,s=window.location.href
if(J.cc(s).w(s,"/")){t=window.location;(t&&C.p).A(t,C.a.n(s,0,s.length-1))}}}
var w=[C,H,J,P,W,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.ar.prototype={}
J.c.prototype={
h:function(a){return"Instance of '"+H.b(H.a8(a))+"'"}}
J.K.prototype={
h:function(a){return String(a)},
$iy:1}
J.M.prototype={
h:function(a){return"null"}}
J.t.prototype={
h:function(a){return String(a)}}
J.Q.prototype={}
J.n.prototype={}
J.w.prototype={
h:function(a){var t=a[$.bi()]
if(t==null)return this.v(a)
return"JavaScript function for "+H.b(J.W(t))}}
J.i.prototype={
t:function(a,b){H.ax(a).c.a(b)
if(!!a.fixed$length)H.bf(P.by("add"))
a.push(b)},
h:function(a){return P.bt(a,"[","]")},
gj:function(a){return a.length},
$ia4:1}
J.a6.prototype={}
J.I.prototype={
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.a(H.cl(r))
t=s.c
if(t>=q){s.sp(null)
return!1}s.sp(r[t]);++s.c
return!0},
sp:function(a){this.d=this.$ti.q("1?").a(a)}}
J.N.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a}}
J.L.prototype={$iz:1}
J.a5.prototype={}
J.m.prototype={
i:function(a,b){if(typeof b!="string")throw H.a(P.bj(b,null,null))
return a+b},
w:function(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.u(a,s-t)},
n:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.a(P.aa(b,null))
if(b>c)throw H.a(P.aa(b,null))
if(c>a.length)throw H.a(P.aa(c,null))
return a.substring(b,c)},
u:function(a,b){return this.n(a,b,null)},
h:function(a){return a},
gj:function(a){return a.length},
$iu:1}
H.v.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.bh(s==null?"unknown":s)+"'"},
gB:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.ae.prototype={}
H.ac.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.bh(t)+"'"}}
H.J.prototype={
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.a8(t))+"'")}}
H.ab.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.ak.prototype={
$1:function(a){return this.a(a)}}
H.al.prototype={
$2:function(a,b){return this.a(a,b)}}
H.am.prototype={
$1:function(a){return this.a(H.b0(a))}}
H.j.prototype={
q:function(a){return H.U(v.typeUniverse,this,a)},
D:function(a){return H.bL(v.typeUniverse,this,a)}}
H.R.prototype={}
H.ah.prototype={
h:function(a){return this.a}}
H.S.prototype={}
P.y.prototype={
h:function(a){return this?"true":"false"}}
P.V.prototype={}
P.a1.prototype={}
P.X.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.a2(t)
return"Assertion failed"}}
P.a7.prototype={
h:function(a){return"Throw of null."}}
P.r.prototype={
gl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gk:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gl()+p+n
if(!r.a)return m
t=r.gk()
s=P.a2(r.b)
return m+t+": "+s}}
P.a9.prototype={
gl:function(){return"RangeError"},
gk:function(){return""}}
P.a3.prototype={
gl:function(){return"RangeError"},
gk:function(){var t,s=H.b_(this.b)
if(typeof s!=="number")return s.C()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj:function(a){return this.f}}
P.ag.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.af.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.Z.prototype={
h:function(a){return"Concurrent modification during iteration: "+P.a2(this.a)+"."}}
P.a_.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.z.prototype={}
P.O.prototype={$ia4:1}
P.A.prototype={
h:function(a){return"null"}}
P.H.prototype={}
P.e.prototype={constructor:P.e,$ie:1,
h:function(a){return"Instance of '"+H.b(H.a8(this))+"'"},
toString:function(){return this.h(this)}}
P.u.prototype={}
P.ad.prototype={
gj:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.a0.prototype={
h:function(a){return String(a)}}
W.P.prototype={
A:function(a,b){return a.replace(b)},
h:function(a){return String(a)}};(function aliases(){var t=J.t.prototype
t.v=t.h})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.e,null)
s(P.e,[H.ar,J.c,J.I,H.v,P.a1,H.j,H.R,P.y,P.H,P.O,P.A,P.u,P.ad])
s(J.c,[J.K,J.M,J.t,J.i,J.N,J.m,W.a0,W.P])
s(J.t,[J.Q,J.n,J.w])
t(J.a6,J.i)
s(J.N,[J.L,J.a5])
s(H.v,[H.ae,H.ak,H.al,H.am])
s(H.ae,[H.ac,H.J])
s(P.a1,[H.ab,H.ah,P.X,P.a7,P.r,P.ag,P.af,P.Z,P.a_])
t(H.S,H.ah)
s(P.H,[P.V,P.z])
s(P.r,[P.a9,P.a3])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{z:"int",V:"double",H:"num",u:"String",y:"bool",A:"Null",O:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.bK(v.typeUniverse,JSON.parse('{"Q":"t","n":"t","w":"t","K":{"y":[]},"i":{"a4":["1"]},"a6":{"i":["1"],"a4":["1"]},"L":{"z":[]},"m":{"u":[]},"O":{"a4":["1"]}}'))
0
var u=(function rtii(){var t=H.b7
return{Z:t("cp"),s:t("i<u>"),b:t("i<@>"),T:t("M"),g:t("w"),P:t("A"),K:t("e"),N:t("u"),o:t("n"),y:t("y"),i:t("V"),S:t("z"),A:t("0&*"),_:t("e*"),O:t("aK<A>?"),X:t("e?"),H:t("H")}})();(function constants(){C.n=J.c.prototype
C.e=J.i.prototype
C.a=J.m.prototype
C.o=J.w.prototype
C.p=W.P.prototype
C.f=J.Q.prototype
C.b=J.n.prototype
C.c=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.h=function() {
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
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
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
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.m=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
C.i=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.j=function(hooks) {
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
C.l=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
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
C.k=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
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
C.d=function(hooks) { return hooks; }
})();(function staticFields(){$.aR=null
$.k=0
$.aH=null
$.aG=null
$.b8=null
$.b6=null
$.bd=null
$.ai=null
$.an=null
$.aA=null
$.F=H.be([],H.b7("i<e>"))})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"co","bi",function(){return H.cd("_$dart_dartClosure")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.c,DOMError:J.c,ErrorEvent:J.c,Event:J.c,InputEvent:J.c,SubmitEvent:J.c,EventTarget:J.c,MediaError:J.c,NavigatorUserMediaError:J.c,OverconstrainedError:J.c,PositionError:J.c,SensorErrorEvent:J.c,SpeechRecognitionError:J.c,Window:J.c,DOMWindow:J.c,SQLError:J.c,DOMException:W.a0,Location:W.P})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,EventTarget:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,Window:true,DOMWindow:true,SQLError:true,DOMException:true,Location:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.bb,[])
else S.bb([])})})()
//# sourceMappingURL=trailingSlash.dart.js.map
