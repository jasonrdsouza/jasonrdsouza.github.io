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
a.prototype.constructor=a}function lazyOld(a,b,c,d){var t=a
a[b]=t
a[c]=function(){a[c]=function(){H.cl(b)}
var s
var r=d
try{if(a[b]===t){s=a[b]=r
s=a[b]=d()}else s=a[b]}finally{if(s===r)a[b]=null
a[c]=function(){return this[b]}}return s}}function lazy(a,b,c,d){var t=a
a[b]=t
a[c]=function(){if(a[b]===t)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var t=0;t<a.length;++t)convertToFastObject(a[t])}var y=0
function tearOffGetter(a,b,c,d,e){return e?new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"(receiver) {"+"if (c === null) c = "+"H.au"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, true, name);"+"return new c(this, funcs[0], receiver, name);"+"}")(a,b,c,d,H,null):new Function("funcs","applyTrampolineIndex","reflectionInfo","name","H","c","return function tearOff_"+d+y+++"() {"+"if (c === null) c = "+"H.au"+"("+"this, funcs, applyTrampolineIndex, reflectionInfo, false, false, name);"+"return new c(this, funcs[0], null, name);"+"}")(a,b,c,d,H,null)}function tearOff(a,b,c,d,e,f){var t=null
return d?function(){if(t===null)t=H.au(this,a,b,c,true,false,e).prototype
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
return{inherit:inherit,inheritMany:inheritMany,mixin:mixin,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:t(0,0,null,["$0"],0),_instance_1u:t(0,1,null,["$1"],0),_instance_2u:t(0,2,null,["$2"],0),_instance_0i:t(1,0,null,["$0"],0),_instance_1i:t(1,1,null,["$1"],0),_instance_2i:t(1,2,null,["$2"],0),_static_0:s(0,null,["$0"],0),_static_1:s(1,null,["$1"],0),_static_2:s(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}function getGlobalFromName(a){for(var t=0;t<w.length;t++){if(w[t]==C)continue
if(w[t][a])return w[t][a]}}var C={},H={al:function al(){},
be:function(a){var t,s=H.bd(a)
if(s!=null)return s
t="minified:"+a
return t},
b:function(a){var t
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
t=J.Q(a)
if(typeof t!="string")throw H.a(H.c4(a))
return t},
a1:function(a){return H.br(a)},
br:function(a){var t,s,r
if(a instanceof P.e)return H.h(H.D(a),null)
if(J.ad(a)===C.n||u.o.b(a)){t=C.c(a)
if(H.aJ(t))return t
s=a.constructor
if(typeof s=="function"){r=s.name
if(typeof r=="string"&&H.aJ(r))return r}}return H.h(H.D(a),null)},
aJ:function(a){var t=a!=="Object"&&a!==""
return t},
ax:function(a,b){if(a==null)J.aA(a)
throw H.a(H.c6(a,b))},
c6:function(a,b){var t,s="index"
if(!H.b2(b))return new P.r(!0,b,s,null)
t=J.aA(a)
if(b<0||b>=t)return new P.Y(t,!0,b,s,"Index out of range")
return P.a3(b,s)},
c4:function(a){return new P.r(!0,a,null,null)},
a:function(a){var t,s
if(a==null)a=new P.a0()
t=new Error()
t.dartException=a
s=H.cm
if("defineProperty" in Object){Object.defineProperty(t,"message",{get:s})
t.name=""}else t.toString=s
return t},
cm:function(){return J.Q(this.dartException)},
bc:function(a){throw H.a(a)},
ck:function(a){throw H.a(new P.T(a))},
bo:function(a,b,c,d,e,f,g){var t,s,r,q,p,o,n,m=b[0],l=m.$callName,k=e?Object.create(new H.a5().constructor.prototype):Object.create(new H.F(null,null,null,"").constructor.prototype)
k.$initialize=k.constructor
if(e)t=function static_tear_off(){this.$initialize()}
else{s=$.k
if(typeof s!=="number")return s.i()
$.k=s+1
s=new Function("a,b,c,d"+s,"this.$initialize(a,b,c,d"+s+")")
t=s}k.constructor=t
t.prototype=k
if(!e){r=H.aF(a,m,f)
r.$reflectionInfo=d}else{k.$static_name=g
r=m}k.$S=H.bk(d,e,f)
k[l]=r
for(q=r,p=1;p<b.length;++p){o=b[p]
n=o.$callName
if(n!=null){o=e?o:H.aF(a,o,f)
k[n]=o}if(p===c){o.$reflectionInfo=d
q=o}}k.$C=q
k.$R=m.$R
k.$D=m.$D
return t},
bk:function(a,b,c){var t
if(typeof a=="number")return function(d,e){return function(){return d(e)}}(H.b6,a)
if(typeof a=="string"){if(b)throw H.a("Cannot compute signature for static tearoff.")
t=c?H.bi:H.bh
return function(d,e){return function(){return e(this,d)}}(a,t)}throw H.a("Error in functionType of tearoff")},
bl:function(a,b,c,d){var t=H.aE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,t)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,t)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,t)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,t)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,t)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,t)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,t)}},
aF:function(a,b,c){var t,s,r,q,p,o,n
if(c)return H.bn(a,b)
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=27
if(p)return H.bl(s,!q,t,b)
if(s===0){q=$.k
if(typeof q!=="number")return q.i()
$.k=q+1
o="self"+q
return new Function("return function(){var "+o+" = this."+H.b(H.ak())+";return "+o+"."+H.b(t)+"();}")()}n="abcdefghijklmnopqrstuvwxyz".split("").splice(0,s).join(",")
q=$.k
if(typeof q!=="number")return q.i()
$.k=q+1
n+=q
return new Function("return function("+n+"){return this."+H.b(H.ak())+"."+H.b(t)+"("+n+");}")()},
bm:function(a,b,c,d){var t=H.aE,s=H.bj
switch(b?-1:a){case 0:throw H.a(new H.a4("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,t,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,t,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,t,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,t,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,t,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,t,s)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,t,s)}},
bn:function(a,b){var t,s,r,q,p,o,n=H.ak(),m=$.aC
if(m==null)m=$.aC=H.aB("receiver")
t=b.$stubName
s=b.length
r=a[t]
q=b==null?r==null:b===r
p=!q||s>=28
if(p)return H.bm(s,!q,t,b)
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
au:function(a,b,c,d,e,f,g){return H.bo(a,b,c,d,!!e,!!f,g)},
bh:function(a,b){return H.P(v.typeUniverse,H.D(a.a),b)},
bi:function(a,b){return H.P(v.typeUniverse,H.D(a.c),b)},
aE:function(a){return a.a},
bj:function(a){return a.c},
ak:function(){var t=$.aD
return t==null?$.aD=H.aB("self"):t},
aB:function(a){var t,s,r,q=new H.F("self","target","receiver","name"),p=Object.getOwnPropertyNames(q)
p.fixed$length=Array
t=p
for(p=t.length,s=0;s<p;++s){r=t[s]
if(q[r]===a)return r}throw H.a(new P.r(!1,null,null,"Field name "+a+" not found."))},
cl:function(a){throw H.a(new P.U(a))},
cb:function(a){return v.getIsolateTag(a)},
ch:function(a){var t,s,r,q,p,o=H.aY($.b5.$1(a)),n=$.ac[o]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ah[o]
if(t!=null)return t
s=v.interceptorsByTag[o]
if(s==null){r=H.bL($.b3.$2(a,o))
if(r!=null){n=$.ac[r]
if(n!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}t=$.ah[r]
if(t!=null)return t
s=v.interceptorsByTag[r]
o=r}}if(s==null)return null
t=s.prototype
q=o[0]
if(q==="!"){n=H.aj(t)
$.ac[o]=n
Object.defineProperty(a,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
return n.i}if(q==="~"){$.ah[o]=t
return t}if(q==="-"){p=H.aj(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}if(q==="+")return H.b9(a,t)
if(q==="*")throw H.a(P.aM(o))
if(v.leafTags[o]===true){p=H.aj(t)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:p,enumerable:false,writable:true,configurable:true})
return p.i}else return H.b9(a,t)},
b9:function(a,b){var t=Object.getPrototypeOf(a)
Object.defineProperty(t,v.dispatchPropertyName,{value:J.ay(b,t,null,null),enumerable:false,writable:true,configurable:true})
return b},
aj:function(a){return J.ay(a,!1,null,!!a.$icp)},
ci:function(a,b,c){var t=b.prototype
if(v.leafTags[a]===true)return H.aj(t)
else return J.ay(t,c,null,null)},
ce:function(){if(!0===$.av)return
$.av=!0
H.cf()},
cf:function(){var t,s,r,q,p,o,n,m
$.ac=Object.create(null)
$.ah=Object.create(null)
H.cd()
t=v.interceptorsByTag
s=Object.getOwnPropertyNames(t)
if(typeof window!="undefined"){window
r=function(){}
for(q=0;q<s.length;++q){p=s[q]
o=$.ba.$1(p)
if(o!=null){n=H.ci(p,t[p],o)
if(n!=null){Object.defineProperty(o,v.dispatchPropertyName,{value:n,enumerable:false,writable:true,configurable:true})
r.prototype=o}}}}for(q=0;q<s.length;++q){p=s[q]
if(/^[A-Za-z_]/.test(p)){m=t[p]
t["!"+p]=m
t["~"+p]=m
t["-"+p]=m
t["+"+p]=m
t["*"+p]=m}}},
cd:function(){var t,s,r,q,p,o,n=C.h()
n=H.w(C.i,H.w(C.j,H.w(C.d,H.w(C.d,H.w(C.k,H.w(C.l,H.w(C.m(C.c),n)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){t=dartNativeDispatchHooksTransformer
if(typeof t=="function")t=[t]
if(t.constructor==Array)for(s=0;s<t.length;++s){r=t[s]
if(typeof r=="function")n=r(n)||n}}q=n.getTag
p=n.getUnknownTag
o=n.prototypeForTag
$.b5=new H.ae(q)
$.b3=new H.af(p)
$.ba=new H.ag(o)},
w:function(a,b){return a(b)||b},
u:function u(){},
a8:function a8(){},
a5:function a5(){},
F:function F(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a4:function a4(a){this.a=a},
ae:function ae(a){this.a=a},
af:function af(a){this.a=a},
ag:function ag(a){this.a=a},
bt:function(a,b){var t=b.c
return t==null?b.c=H.ap(a,b.z,!0):t},
aK:function(a,b){var t=b.c
return t==null?b.c=H.y(a,"aG",[b.z]):t},
aL:function(a){var t=a.y
if(t===6||t===7||t===8)return H.aL(a.z)
return t===11||t===12},
bs:function(a){return a.cy},
b4:function(a){return H.aq(v.typeUniverse,a,!1)},
q:function(a,b,c,a0){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d=b.y
switch(d){case 5:case 1:case 2:case 3:case 4:return b
case 6:t=b.z
s=H.q(a,t,c,a0)
if(s===t)return b
return H.aU(a,s,!0)
case 7:t=b.z
s=H.q(a,t,c,a0)
if(s===t)return b
return H.ap(a,s,!0)
case 8:t=b.z
s=H.q(a,t,c,a0)
if(s===t)return b
return H.aT(a,s,!0)
case 9:r=b.Q
q=H.B(a,r,c,a0)
if(q===r)return b
return H.y(a,b.z,q)
case 10:p=b.z
o=H.q(a,p,c,a0)
n=b.Q
m=H.B(a,n,c,a0)
if(o===p&&m===n)return b
return H.an(a,o,m)
case 11:l=b.z
k=H.q(a,l,c,a0)
j=b.Q
i=H.c1(a,j,c,a0)
if(k===l&&i===j)return b
return H.aS(a,k,i)
case 12:h=b.Q
a0+=h.length
g=H.B(a,h,c,a0)
p=b.z
o=H.q(a,p,c,a0)
if(g===h&&o===p)return b
return H.ao(a,o,g,!0)
case 13:f=b.z
if(f<a0)return b
e=c[f-a0]
if(e==null)return b
return e
default:throw H.a(P.S("Attempted to substitute unexpected RTI kind "+d))}},
B:function(a,b,c,d){var t,s,r,q,p=b.length,o=[]
for(t=!1,s=0;s<p;++s){r=b[s]
q=H.q(a,r,c,d)
if(q!==r)t=!0
o.push(q)}return t?o:b},
c2:function(a,b,c,d){var t,s,r,q,p,o,n=b.length,m=[]
for(t=!1,s=0;s<n;s+=3){r=b[s]
q=b[s+1]
p=b[s+2]
o=H.q(a,p,c,d)
if(o!==p)t=!0
m.push(r)
m.push(q)
m.push(o)}return t?m:b},
c1:function(a,b,c,d){var t,s=b.a,r=H.B(a,s,c,d),q=b.b,p=H.B(a,q,c,d),o=b.c,n=H.c2(a,o,c,d)
if(r===s&&p===q&&n===o)return b
t=new H.M()
t.a=r
t.b=p
t.c=n
return t},
bb:function(a,b){a[v.arrayRti]=b
return a},
c5:function(a){var t=a.$S
if(t!=null){if(typeof t=="number")return H.b6(t)
return a.$S()}return null},
b7:function(a,b){var t
if(H.aL(b))if(a instanceof H.u){t=H.c5(a)
if(t!=null)return t}return H.D(a)},
D:function(a){var t
if(a instanceof P.e){t=a.$ti
return t!=null?t:H.as(a)}if(Array.isArray(a))return H.ar(a)
return H.as(J.ad(a))},
ar:function(a){var t=a[v.arrayRti],s=u.b
if(t==null)return s
if(t.constructor!==s.constructor)return s
return t},
cF:function(a){var t=a.$ti
return t!=null?t:H.as(a)},
as:function(a){var t=a.constructor,s=t.$ccache
if(s!=null)return s
return H.bS(a,t)},
bS:function(a,b){var t=a instanceof H.u?a.__proto__.__proto__.constructor:b,s=H.bJ(v.typeUniverse,t.name)
b.$ccache=s
return s},
b6:function(a){var t,s,r
H.aX(a)
t=v.types
s=t[a]
if(typeof s=="string"){r=H.aq(v.typeUniverse,s,!1)
t[a]=r
return r}return s},
bR:function(a){var t,s,r=this,q=u.K
if(r===q)return H.A(r,a,H.bV)
if(!H.l(r))if(!(r===u._))q=r===q
else q=!0
else q=!0
if(q)return H.A(r,a,H.bZ)
q=r.y
t=q===6?r.z:r
if(t===u.S)s=H.b2
else if(t===u.i||t===u.H)s=H.bU
else if(t===u.N)s=H.bW
else s=t===u.y?H.b0:null
if(s!=null)return H.A(r,a,s)
if(t.y===9){q=t.z
if(t.Q.every(H.cg)){r.r="$i"+q
return H.A(r,a,H.bX)}}else if(q===7)return H.A(r,a,H.bP)
return H.A(r,a,H.bN)},
A:function(a,b,c){a.b=c
return a.b(b)},
bQ:function(a){var t,s,r=this
if(!H.l(r))if(!(r===u._))t=r===u.K
else t=!0
else t=!0
if(t)s=H.bM
else if(r===u.K)s=H.bK
else s=H.bO
r.a=s
return r.a(a)},
c_:function(a){var t,s=a.y
if(!H.l(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t||a===u.A||s===7||a===u.P||a===u.T},
bN:function(a){var t=this
if(a==null)return H.c_(t)
return H.d(v.typeUniverse,H.b7(a,t),null,t,null)},
bP:function(a){if(a==null)return!0
return this.z.b(a)},
bX:function(a){var t=this,s=t.r
if(a instanceof P.e)return!!a[s]
return!!J.ad(a)[s]},
cE:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.aZ(a,t)},
bO:function(a){var t=this
if(a==null)return a
else if(t.b(a))return a
H.aZ(a,t)},
aZ:function(a,b){throw H.a(H.bA(H.aN(a,H.b7(a,b),H.h(b,null))))},
aN:function(a,b,c){var t=P.X(a),s=H.h(b==null?H.D(a):b,null)
return t+": type '"+H.b(s)+"' is not a subtype of type '"+H.b(c)+"'"},
bA:function(a){return new H.N("TypeError: "+a)},
f:function(a,b){return new H.N("TypeError: "+H.aN(a,null,b))},
bV:function(a){return a!=null},
bK:function(a){return a},
bZ:function(a){return!0},
bM:function(a){return a},
b0:function(a){return!0===a||!1===a},
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
b2:function(a){return typeof a=="number"&&Math.floor(a)===a},
cy:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw H.a(H.f(a,"int"))},
aX:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.a(H.f(a,"int"))},
cz:function(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw H.a(H.f(a,"int?"))},
bU:function(a){return typeof a=="number"},
cA:function(a){if(typeof a=="number")return a
throw H.a(H.f(a,"num"))},
cC:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"num"))},
cB:function(a){if(typeof a=="number")return a
if(a==null)return a
throw H.a(H.f(a,"num?"))},
bW:function(a){return typeof a=="string"},
cD:function(a){if(typeof a=="string")return a
throw H.a(H.f(a,"String"))},
aY:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.a(H.f(a,"String"))},
bL:function(a){if(typeof a=="string")return a
if(a==null)return a
throw H.a(H.f(a,"String?"))},
c0:function(a,b){var t,s,r
for(t="",s="",r=0;r<a.length;++r,s=", ")t+=C.a.i(s,H.h(a[r],b))
return t},
b_:function(a4,a5,a6){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){t=a6.length
if(a5==null){a5=H.bb([],u.s)
s=null}else s=a5.length
r=a5.length
for(q=t;q>0;--q)C.e.t(a5,"T"+(r+q))
for(p=u.X,o=u._,n=u.K,m="<",l="",q=0;q<t;++q,l=a3){m+=l
k=a5.length
j=k-1-q
if(j<0)return H.ax(a5,j)
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
a1+=J.az(H.h(b[q+2],a5)," ")+b[q]}a1+="}"}if(s!=null){a5.toString
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
return J.az(r===11||r===12?C.a.i("(",t)+")":t,"?")}if(m===8)return"FutureOr<"+H.b(H.h(a.z,b))+">"
if(m===9){q=H.c3(a.z)
p=a.Q
return p.length!==0?q+("<"+H.c0(p,b)+">"):q}if(m===11)return H.b_(a,b,null)
if(m===12)return H.b_(a.z,b,a.Q)
if(m===13){b.toString
o=a.z
n=b.length
o=n-1-o
if(o<0||o>=n)return H.ax(b,o)
return b[o]}return"?"},
c3:function(a){var t,s=H.bd(a)
if(s!=null)return s
t="minified:"+a
return t},
aV:function(a,b){var t=a.tR[b]
for(;typeof t=="string";)t=a.tR[t]
return t},
bJ:function(a,b){var t,s,r,q,p,o=a.eT,n=o[b]
if(n==null)return H.aq(a,b,!1)
else if(typeof n=="number"){t=n
s=H.z(a,5,"#")
r=[]
for(q=0;q<t;++q)r.push(s)
p=H.y(a,b,r)
o[b]=p
return p}else return n},
bH:function(a,b){return H.aW(a.tR,b)},
cr:function(a,b){return H.aW(a.eT,b)},
aq:function(a,b,c){var t,s=a.eC,r=s.get(b)
if(r!=null)return r
t=H.aR(H.aP(a,null,b,c))
s.set(b,t)
return t},
P:function(a,b,c){var t,s,r=b.ch
if(r==null)r=b.ch=new Map()
t=r.get(c)
if(t!=null)return t
s=H.aR(H.aP(a,b,c,!0))
r.set(c,s)
return s},
bI:function(a,b,c){var t,s,r,q=b.cx
if(q==null)q=b.cx=new Map()
t=c.cy
s=q.get(t)
if(s!=null)return s
r=H.an(a,b,c.y===10?c.Q:[c])
q.set(t,r)
return r},
p:function(a,b){b.a=H.bQ
b.b=H.bR
return b},
z:function(a,b,c){var t,s,r=a.eC.get(c)
if(r!=null)return r
t=new H.j(null,null)
t.y=b
t.cy=c
s=H.p(a,t)
a.eC.set(c,s)
return s},
aU:function(a,b,c){var t,s=b.cy+"*",r=a.eC.get(s)
if(r!=null)return r
t=H.bF(a,b,s,c)
a.eC.set(s,t)
return t},
bF:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.l(b))s=b===u.P||b===u.T||t===7||t===6
else s=!0
if(s)return b}r=new H.j(null,null)
r.y=6
r.z=b
r.cy=c
return H.p(a,r)},
ap:function(a,b,c){var t,s=b.cy+"?",r=a.eC.get(s)
if(r!=null)return r
t=H.bE(a,b,s,c)
a.eC.set(s,t)
return t},
bE:function(a,b,c,d){var t,s,r,q
if(d){t=b.y
if(!H.l(b))if(!(b===u.P||b===u.T))if(t!==7)s=t===8&&H.ai(b.z)
else s=!0
else s=!0
else s=!0
if(s)return b
else if(t===1||b===u.A)return u.P
else if(t===6){r=b.z
if(r.y===8&&H.ai(r.z))return r
else return H.bt(a,b)}}q=new H.j(null,null)
q.y=7
q.z=b
q.cy=c
return H.p(a,q)},
aT:function(a,b,c){var t,s=b.cy+"/",r=a.eC.get(s)
if(r!=null)return r
t=H.bC(a,b,s,c)
a.eC.set(s,t)
return t},
bC:function(a,b,c,d){var t,s,r
if(d){t=b.y
if(!H.l(b))if(!(b===u._))s=b===u.K
else s=!0
else s=!0
if(s||b===u.K)return b
else if(t===1)return H.y(a,"aG",[b])
else if(b===u.P||b===u.T)return u.O}r=new H.j(null,null)
r.y=8
r.z=b
r.cy=c
return H.p(a,r)},
bG:function(a,b){var t,s,r=""+b+"^",q=a.eC.get(r)
if(q!=null)return q
t=new H.j(null,null)
t.y=13
t.z=b
t.cy=r
s=H.p(a,t)
a.eC.set(r,s)
return s},
O:function(a){var t,s,r,q=a.length
for(t="",s="",r=0;r<q;++r,s=",")t+=s+a[r].cy
return t},
bB:function(a){var t,s,r,q,p,o,n=a.length
for(t="",s="",r=0;r<n;r+=3,s=","){q=a[r]
p=a[r+1]?"!":":"
o=a[r+2].cy
t+=s+q+p+o}return t},
y:function(a,b,c){var t,s,r,q=b
if(c.length!==0)q+="<"+H.O(c)+">"
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
an:function(a,b,c){var t,s,r,q,p,o
if(b.y===10){t=b.z
s=b.Q.concat(c)}else{s=c
t=b}r=t.cy+(";<"+H.O(s)+">")
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
aS:function(a,b,c){var t,s,r,q,p,o=b.cy,n=c.a,m=n.length,l=c.b,k=l.length,j=c.c,i=j.length,h="("+H.O(n)
if(k>0){t=m>0?",":""
s=H.O(l)
h+=t+"["+s+"]"}if(i>0){t=m>0?",":""
s=H.bB(j)
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
ao:function(a,b,c,d){var t,s=b.cy+("<"+H.O(c)+">"),r=a.eC.get(s)
if(r!=null)return r
t=H.bD(a,b,c,s,d)
a.eC.set(s,t)
return t},
bD:function(a,b,c,d,e){var t,s,r,q,p,o,n,m
if(e){t=c.length
s=new Array(t)
for(r=0,q=0;q<t;++q){p=c[q]
if(p.y===1){s[q]=p;++r}}if(r>0){o=H.q(a,b,s,0)
n=H.B(a,c,s,0)
return H.ao(a,o,n,c!==n)}}m=new H.j(null,null)
m.y=12
m.z=b
m.Q=c
m.cy=d
return H.p(a,m)},
aP:function(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
aR:function(a){var t,s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(t=h.length,s=0;s<t;){r=h.charCodeAt(s)
if(r>=48&&r<=57)s=H.bw(s+1,r,h,g)
else if((((r|32)>>>0)-97&65535)<26||r===95||r===36)s=H.aQ(a,s,h,g,!1)
else if(r===46)s=H.aQ(a,s,h,g,!0)
else{++s
switch(r){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(H.o(a.u,a.e,g.pop()))
break
case 94:g.push(H.bG(a.u,g.pop()))
break
case 35:g.push(H.z(a.u,5,"#"))
break
case 64:g.push(H.z(a.u,2,"@"))
break
case 126:g.push(H.z(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:q=a.u
p=g.splice(a.p)
H.am(a.u,a.e,p)
a.p=g.pop()
o=g.pop()
if(typeof o=="string")g.push(H.y(q,o,p))
else{n=H.o(q,a.e,o)
switch(n.y){case 11:g.push(H.ao(q,n,p,a.n))
break
default:g.push(H.an(q,n,p))
break}}break
case 38:H.bx(a,g)
break
case 42:m=a.u
g.push(H.aU(m,H.o(m,a.e,g.pop()),a.n))
break
case 63:m=a.u
g.push(H.ap(m,H.o(m,a.e,g.pop()),a.n))
break
case 47:m=a.u
g.push(H.aT(m,H.o(m,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:q=a.u
l=new H.M()
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
H.am(a.u,a.e,p)
a.p=g.pop()
l.a=p
l.b=k
l.c=j
g.push(H.aS(q,H.o(q,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:p=g.splice(a.p)
H.am(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:p=g.splice(a.p)
H.bz(a.u,a.e,p)
a.p=g.pop()
g.push(p)
g.push(-2)
break
default:throw"Bad character "+r}}}i=g.pop()
return H.o(a.u,a.e,i)},
bw:function(a,b,c,d){var t,s,r=b-48
for(t=c.length;a<t;++a){s=c.charCodeAt(a)
if(!(s>=48&&s<=57))break
r=r*10+(s-48)}d.push(r)
return a},
aQ:function(a,b,c,d,e){var t,s,r,q,p,o,n=b+1
for(t=c.length;n<t;++n){s=c.charCodeAt(n)
if(s===46){if(e)break
e=!0}else{if(!((((s|32)>>>0)-97&65535)<26||s===95||s===36))r=s>=48&&s<=57
else r=!0
if(!r)break}}q=c.substring(b,n)
if(e){t=a.u
p=a.e
if(p.y===10)p=p.z
o=H.aV(t,p.z)[q]
if(o==null)H.bc('No "'+q+'" in "'+H.bs(p)+'"')
d.push(H.P(t,p,o))}else d.push(q)
return n},
bx:function(a,b){var t=b.pop()
if(0===t){b.push(H.z(a.u,1,"0&"))
return}if(1===t){b.push(H.z(a.u,4,"1&"))
return}throw H.a(P.S("Unexpected extended operation "+H.b(t)))},
o:function(a,b,c){if(typeof c=="string")return H.y(a,c,a.sEA)
else if(typeof c=="number")return H.by(a,b,c)
else return c},
am:function(a,b,c){var t,s=c.length
for(t=0;t<s;++t)c[t]=H.o(a,b,c[t])},
bz:function(a,b,c){var t,s=c.length
for(t=2;t<s;t+=3)c[t]=H.o(a,b,c[t])},
by:function(a,b,c){var t,s,r=b.y
if(r===10){if(c===0)return b.z
t=b.Q
s=t.length
if(c<=s)return t[c-1]
c-=s
b=b.z
r=b.y}else if(c===0)return b
if(r!==9)throw H.a(P.S("Indexed base must be an interface type"))
t=b.Q
if(c<=t.length)return t[c-1]
throw H.a(P.S("Bad index "+c+" for "+b.h(0)))},
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
return H.d(a,H.aK(a,b),c,d,e)}if(s===7){t=H.d(a,b.z,c,d,e)
return t}if(q===8){if(H.d(a,b,c,d.z,e))return!0
return H.d(a,b,c,H.aK(a,d),e)}if(q===7){t=H.d(a,b,c,d.z,e)
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
if(!H.d(a,l,c,k,e)||!H.d(a,k,e,l,c))return!1}return H.b1(a,b.z,c,d.z,e)}if(q===11){if(b===u.g)return!0
if(t)return!1
return H.b1(a,b,c,d,e)}if(s===9){if(q!==9)return!1
return H.bT(a,b,c,d,e)}return!1},
b1:function(a1,a2,a3,a4,a5){var t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0
if(!H.d(a1,a2.z,a3,a4.z,a5))return!1
t=a2.Q
s=a4.Q
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
if(!H.d(a1,q[i],a5,h,a3))return!1}for(i=0;i<n;++i){h=m[i]
if(!H.d(a1,q[p+i],a5,h,a3))return!1}for(i=0;i<j;++i){h=m[n+i]
if(!H.d(a1,l[i],a5,h,a3))return!1}g=t.c
f=s.c
e=g.length
d=f.length
for(c=0,b=0;b<d;b+=3){a=f[b]
for(;!0;){if(c>=e)return!1
a0=g[c]
c+=3
if(a<a0)return!1
if(a0<a)continue
h=g[c-1]
if(!H.d(a1,f[b+2],a5,h,a3))return!1
break}}return!0},
bT:function(a,b,c,d,e){var t,s,r,q,p,o,n,m,l=b.z,k=d.z
if(l===k){t=b.Q
s=d.Q
r=t.length
for(q=0;q<r;++q){p=t[q]
o=s[q]
if(!H.d(a,p,c,o,e))return!1}return!0}if(d===u.K)return!0
n=H.aV(a,l)
if(n==null)return!1
m=n[k]
if(m==null)return!1
r=m.length
s=d.Q
for(q=0;q<r;++q)if(!H.d(a,H.P(a,b,m[q]),c,s[q],e))return!1
return!0},
ai:function(a){var t,s=a.y
if(!(a===u.P||a===u.T))if(!H.l(a))if(s!==7)if(!(s===6&&H.ai(a.z)))t=s===8&&H.ai(a.z)
else t=!0
else t=!0
else t=!0
else t=!0
return t},
cg:function(a){var t
if(!H.l(a))if(!(a===u._))t=a===u.K
else t=!0
else t=!0
return t},
l:function(a){var t=a.y
return t===2||t===3||t===4||t===5||a===u.X},
aW:function(a,b){var t,s,r=Object.keys(b),q=r.length
for(t=0;t<q;++t){s=r[t]
a[s]=b[s]}},
j:function j(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
M:function M(){this.c=this.b=this.a=null},
ab:function ab(){},
N:function N(a){this.a=a},
bd:function(a){return v.mangledGlobalNames[a]}},J={
ay:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
cc:function(a){var t,s,r,q,p=a[v.dispatchPropertyName]
if(p==null)if($.av==null){H.ce()
p=a[v.dispatchPropertyName]}if(p!=null){t=p.p
if(!1===t)return p.i
if(!0===t)return a
s=Object.getPrototypeOf(a)
if(t===s)return p.i
if(p.e===s)throw H.a(P.aM("Return interceptor for "+H.b(t(a,p))))}r=a.constructor
q=r==null?null:r[J.aI()]
if(q!=null)return q
q=H.ch(a)
if(q!=null)return q
if(typeof a=="function")return C.o
t=Object.getPrototypeOf(a)
if(t==null)return C.f
if(t===Object.prototype)return C.f
if(typeof r=="function"){Object.defineProperty(r,J.aI(),{value:C.b,enumerable:false,writable:true,configurable:true})
return C.b}return C.b},
aI:function(){var t=$.aO
return t==null?$.aO=v.getIsolateTag("_$dart_js"):t},
ad:function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.H.prototype
return J.Z.prototype}if(typeof a=="string")return J.m.prototype
if(a==null)return J.I.prototype
if(typeof a=="boolean")return J.G.prototype
if(a.constructor==Array)return J.i.prototype
if(typeof a!="object"){if(typeof a=="function")return J.v.prototype
return a}if(a instanceof P.e)return a
return J.cc(a)},
c8:function(a){if(typeof a=="string")return J.m.prototype
if(a==null)return a
if(a.constructor==Array)return J.i.prototype
if(!(a instanceof P.e))return J.n.prototype
return a},
c9:function(a){if(typeof a=="number")return J.J.prototype
if(typeof a=="string")return J.m.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.n.prototype
return a},
ca:function(a){if(typeof a=="string")return J.m.prototype
if(a==null)return a
if(!(a instanceof P.e))return J.n.prototype
return a},
az:function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.c9(a).i(a,b)},
aA:function(a){return J.c8(a).gj(a)},
Q:function(a){return J.ad(a).h(a)},
c:function c(){},
G:function G(){},
I:function I(){},
t:function t(){},
L:function L(){},
n:function n(){},
v:function v(){},
i:function i(a){this.$ti=a},
a_:function a_(a){this.$ti=a},
E:function E(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
J:function J(){},
H:function H(){},
Z:function Z(){},
m:function m(){}},P={
bp:function(a){if(a instanceof H.u)return a.h(0)
return"Instance of '"+H.b(H.a1(a))+"'"},
bu:function(a,b,c){var t=new J.E(b,b.length,H.ar(b).q("E<1>"))
if(!t.m())return a
if(c.length===0){do a+=H.b(t.d)
while(t.m())}else{a+=H.b(t.d)
for(;t.m();)a=a+c+H.b(t.d)}return a},
X:function(a){if(typeof a=="number"||H.b0(a)||null==a)return J.Q(a)
if(typeof a=="string")return JSON.stringify(a)
return P.bp(a)},
S:function(a){return new P.R(a)},
bg:function(a,b,c){return new P.r(!0,a,b,c)},
a3:function(a,b){return new P.a2(!0,a,b,"Value not in range")},
bv:function(a){return new P.aa(a)},
aM:function(a){return new P.a9(a)},
W:function W(){},
R:function R(a){this.a=a},
a0:function a0(){},
r:function r(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
a2:function a2(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
Y:function Y(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
aa:function aa(a){this.a=a},
a9:function a9(a){this.a=a},
T:function T(a){this.a=a},
U:function U(a){this.a=a},
x:function x(){},
e:function e(){},
a7:function a7(a){this.a=a},
bq:function(a,b,c){var t,s
if(P.bY(a))return b+"..."+c
t=new P.a7(b)
C.e.t($.C,a)
try{s=t
s.a=P.bu(s.a,a,", ")}finally{if(0>=$.C.length)return H.ax($.C,-1)
$.C.pop()}t.a+=c
s=t.a
return s.charCodeAt(0)==0?s:s},
bY:function(a){var t,s
for(t=$.C.length,s=0;s<t;++s)if(a===$.C[s])return!0
return!1}},W={V:function V(){},K:function K(){}},S={
b8:function(){var t,s=window.location.href
if(J.ca(s).w(s,"/")){t=window.location;(t&&C.p).A(t,C.a.n(s,0,s.length-1))}}}
var w=[C,H,J,P,W,S]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
H.al.prototype={}
J.c.prototype={
h:function(a){return"Instance of '"+H.b(H.a1(a))+"'"}}
J.G.prototype={
h:function(a){return String(a)},
$iat:1}
J.I.prototype={
h:function(a){return"null"}}
J.t.prototype={
h:function(a){return String(a)}}
J.L.prototype={}
J.n.prototype={}
J.v.prototype={
h:function(a){var t=a[$.bf()]
if(t==null)return this.v(a)
return"JavaScript function for "+H.b(J.Q(t))}}
J.i.prototype={
t:function(a,b){H.ar(a).c.a(b)
if(!!a.fixed$length)H.bc(P.bv("add"))
a.push(b)},
h:function(a){return P.bq(a,"[","]")},
gj:function(a){return a.length},
$iaH:1}
J.a_.prototype={}
J.E.prototype={
m:function(){var t,s=this,r=s.a,q=r.length
if(s.b!==q)throw H.a(H.ck(r))
t=s.c
if(t>=q){s.sp(null)
return!1}s.sp(r[t]);++s.c
return!0},
sp:function(a){this.d=this.$ti.q("1?").a(a)}}
J.J.prototype={
h:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a}}
J.H.prototype={$iaw:1}
J.Z.prototype={}
J.m.prototype={
i:function(a,b){if(typeof b!="string")throw H.a(P.bg(b,null,null))
return a+b},
w:function(a,b){var t=b.length,s=a.length
if(t>s)return!1
return b===this.u(a,s-t)},
n:function(a,b,c){if(c==null)c=a.length
if(b<0)throw H.a(P.a3(b,null))
if(b>c)throw H.a(P.a3(b,null))
if(c>a.length)throw H.a(P.a3(c,null))
return a.substring(b,c)},
u:function(a,b){return this.n(a,b,null)},
h:function(a){return a},
gj:function(a){return a.length},
$ia6:1}
H.u.prototype={
h:function(a){var t=this.constructor,s=t==null?null:t.name
return"Closure '"+H.be(s==null?"unknown":s)+"'"},
gB:function(){return this},
$C:"$1",
$R:1,
$D:null}
H.a8.prototype={}
H.a5.prototype={
h:function(a){var t=this.$static_name
if(t==null)return"Closure of unknown static method"
return"Closure '"+H.be(t)+"'"}}
H.F.prototype={
h:function(a){var t=this.c
if(t==null)t=this.a
return"Closure '"+H.b(this.d)+"' of "+("Instance of '"+H.b(H.a1(t))+"'")}}
H.a4.prototype={
h:function(a){return"RuntimeError: "+this.a}}
H.ae.prototype={
$1:function(a){return this.a(a)}}
H.af.prototype={
$2:function(a,b){return this.a(a,b)}}
H.ag.prototype={
$1:function(a){return this.a(H.aY(a))}}
H.j.prototype={
q:function(a){return H.P(v.typeUniverse,this,a)},
D:function(a){return H.bI(v.typeUniverse,this,a)}}
H.M.prototype={}
H.ab.prototype={
h:function(a){return this.a}}
H.N.prototype={}
P.W.prototype={}
P.R.prototype={
h:function(a){var t=this.a
if(t!=null)return"Assertion failed: "+P.X(t)
return"Assertion failed"}}
P.a0.prototype={
h:function(a){return"Throw of null."}}
P.r.prototype={
gl:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gk:function(){return""},
h:function(a){var t,s,r=this,q=r.c,p=q==null?"":" ("+q+")",o=r.d,n=o==null?"":": "+o,m=r.gl()+p+n
if(!r.a)return m
t=r.gk()
s=P.X(r.b)
return m+t+": "+s}}
P.a2.prototype={
gl:function(){return"RangeError"},
gk:function(){return""}}
P.Y.prototype={
gl:function(){return"RangeError"},
gk:function(){var t,s=H.aX(this.b)
if(typeof s!=="number")return s.C()
if(s<0)return": index must not be negative"
t=this.f
if(t===0)return": no indices are valid"
return": index should be less than "+t},
gj:function(a){return this.f}}
P.aa.prototype={
h:function(a){return"Unsupported operation: "+this.a}}
P.a9.prototype={
h:function(a){var t=this.a
return t!=null?"UnimplementedError: "+t:"UnimplementedError"}}
P.T.prototype={
h:function(a){return"Concurrent modification during iteration: "+P.X(this.a)+"."}}
P.U.prototype={
h:function(a){var t=this.a
return t==null?"Reading static variable during its initialization":"Reading static variable '"+t+"' during its initialization"}}
P.x.prototype={
h:function(a){return"null"}}
P.e.prototype={constructor:P.e,$ie:1,
h:function(a){return"Instance of '"+H.b(H.a1(this))+"'"},
toString:function(){return this.h(this)}}
P.a7.prototype={
gj:function(a){return this.a.length},
h:function(a){var t=this.a
return t.charCodeAt(0)==0?t:t}}
W.V.prototype={
h:function(a){return String(a)}}
W.K.prototype={
A:function(a,b){return a.replace(b)},
h:function(a){return String(a)}};(function aliases(){var t=J.t.prototype
t.v=t.h})();(function inheritance(){var t=hunkHelpers.inherit,s=hunkHelpers.inheritMany
t(P.e,null)
s(P.e,[H.al,J.c,J.E,H.u,P.W,H.j,H.M,P.x,P.a7])
s(J.c,[J.G,J.I,J.t,J.i,J.J,J.m,W.V,W.K])
s(J.t,[J.L,J.n,J.v])
t(J.a_,J.i)
s(J.J,[J.H,J.Z])
s(H.u,[H.a8,H.ae,H.af,H.ag])
s(H.a8,[H.a5,H.F])
s(P.W,[H.a4,H.ab,P.R,P.a0,P.r,P.aa,P.a9,P.T,P.U])
t(H.N,H.ab)
s(P.r,[P.a2,P.Y])})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{aw:"int",c7:"double",cj:"num",a6:"String",at:"bool",x:"Null",cq:"List"},mangledNames:{},getTypeFromName:getGlobalFromName,metadata:[],types:[],interceptorsByTag:null,leafTags:null,arrayRti:typeof Symbol=="function"&&typeof Symbol()=="symbol"?Symbol("$ti"):"$ti"}
H.bH(v.typeUniverse,JSON.parse('{"L":"t","n":"t","v":"t","G":{"at":[]},"i":{"aH":["1"]},"a_":{"i":["1"],"aH":["1"]},"H":{"aw":[]},"m":{"a6":[]}}'))
0
var u=(function rtii(){var t=H.b4
return{Z:t("co"),s:t("i<a6>"),b:t("i<@>"),T:t("I"),g:t("v"),P:t("x"),K:t("e"),N:t("a6"),o:t("n"),y:t("at"),i:t("c7"),S:t("aw"),A:t("0&*"),_:t("e*"),O:t("aG<x>?"),X:t("e?"),H:t("cj")}})();(function constants(){C.n=J.c.prototype
C.e=J.i.prototype
C.a=J.m.prototype
C.o=J.v.prototype
C.p=W.K.prototype
C.f=J.L.prototype
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
})();(function staticFields(){$.aO=null
$.k=0
$.aD=null
$.aC=null
$.b5=null
$.b3=null
$.ba=null
$.ac=null
$.ah=null
$.av=null
$.C=H.bb([],H.b4("i<e>"))})();(function lazyInitializers(){var t=hunkHelpers.lazy
t($,"cn","bf",function(){return H.cb("_$dart_dartClosure")})})();(function nativeSupport(){!function(){var t=function(a){var n={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({ApplicationCacheErrorEvent:J.c,DOMError:J.c,ErrorEvent:J.c,Event:J.c,InputEvent:J.c,SubmitEvent:J.c,EventTarget:J.c,MediaError:J.c,NavigatorUserMediaError:J.c,OverconstrainedError:J.c,PositionError:J.c,SensorErrorEvent:J.c,SpeechRecognitionError:J.c,Window:J.c,DOMWindow:J.c,SQLError:J.c,DOMException:W.V,Location:W.K})
hunkHelpers.setOrUpdateLeafTags({ApplicationCacheErrorEvent:true,DOMError:true,ErrorEvent:true,Event:true,InputEvent:true,SubmitEvent:true,EventTarget:true,MediaError:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,SensorErrorEvent:true,SpeechRecognitionError:true,Window:true,DOMWindow:true,SQLError:true,DOMException:true,Location:true})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var t=document.scripts
function onLoad(b){for(var r=0;r<t.length;++r)t[r].removeEventListener("load",onLoad,false)
a(b.target)}for(var s=0;s<t.length;++s)t[s].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(S.b8,[])
else S.b8([])})})()
//# sourceMappingURL=trailingSlash.dart.js.map
