(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[77],{101:function(e,t,a){"use strict";var n=a(92);const r={addGlobalSetting:async e=>n.a.post("/setting/global/add",e),getGlobalSetting:async()=>n.a.get("/setting/global/all"),updateGlobalSetting:async e=>n.a.put("/setting/global/update",e)};t.a=r},104:function(e,t,a){"use strict";var n=a(92);const r={getAllProperyList:async e=>{let{page:t,limit:a,category:r,title:s,price:o}=e;return n.a.get("/admin/property/list?page=1&page_size=10")},getProductById:async e=>n.a.post(`/products/${e}`),addProduct:async e=>n.a.post("/products/add",e),addAllProducts:async e=>n.a.post("/products/all",e),updateProduct:async(e,t)=>n.a.patch(`/products/${e}`,t),updateManyProducts:async e=>n.a.patch("products/update/many",e),updateStatus:async(e,t)=>n.a.put(`/products/status/${e}`,t),deleteProduct:async e=>n.a.delete(`/products/${e}`),deleteManyProducts:async e=>n.a.patch("/products/delete/many",e)};t.a=r},109:function(e,t,a){"use strict";var n=a(92);const r={getAllLanguages:async()=>n.a.get("/language/all"),getShowingLanguage:async()=>n.a.get("/language/show"),getLanguageById:async e=>n.a.get(`/language/${e}`),addLanguage:async e=>n.a.post("/language/add",e),addAllLanguage:async e=>n.a.post("/language/add/all",e),updateLanguage:async(e,t)=>n.a.put(`/language/${e}`,t),updateManyLanguage:async e=>n.a.patch("language/update/many",e),updateStatus:async(e,t)=>n.a.put(`/language/status/${e}`,t),deleteLanguage:async(e,t)=>n.a.patch(`/language/${e}`,t),deleteManyLanguage:async e=>n.a.patch("/language/delete/many",e)};t.a=r},116:function(e,t,a){"use strict";var n=a(92);const r={getAllCategory:async()=>n.a.get("/category"),getAllCategories:async()=>n.a.get("/category/all"),getCategoryById:async e=>n.a.get(`/category/${e}`),addCategory:async e=>n.a.post("/category/add",e),addAllCategory:async e=>n.a.post("/category/add/all",e),updateCategory:async(e,t)=>n.a.put(`/category/${e}`,t),updateStatus:async(e,t)=>n.a.put(`/category/status/${e}`,t),deleteCategory:async(e,t)=>n.a.delete(`/category/${e}`,t),updateManyCategory:async e=>n.a.patch("/category/update/many",e),deleteManyCategory:async e=>n.a.patch("/category/delete/many",e)};t.a=r},122:function(e,t,a){"use strict";var n=a(92);const r={getAllCurrency:async()=>n.a.get("/currency"),getShowingCurrency:async()=>n.a.get("/currency/show"),getCurrencyById:async e=>n.a.get(`/currency/${e}`),addCurrency:async e=>n.a.post("/currency/add",e),addAllCurrency:async e=>n.a.post("/currency/add/all",e),updateCurrency:async(e,t)=>n.a.put(`/currency/${e}`,t),updateManyCurrencies:async e=>n.a.patch("currency/update/many",e),updateEnabledStatus:async(e,t)=>n.a.put(`/currency/status/enabled/${e}`,t),updateLiveExchangeRateStatus:async(e,t)=>n.a.put(`/currency/status/live-exchange-rates/${e}`,t),deleteCurrency:async(e,t)=>n.a.delete(`/currency/${e}`,t),deleteManyCurrency:async e=>n.a.patch("/currency/delete/many",e)};t.a=r},124:function(e,t,a){"use strict";a(35),a(0);var n=a(1);t.a=e=>{let{children:t}=e;return Object(n.jsx)("h1",{className:"my-6 text-lg font-bold text-gray-700 dark:text-gray-300 ",children:t})}},127:function(e,t,a){"use strict";var n=a(92);const r={getAllAttributes:async e=>{let{type:t,option:a,option1:r}=e;return n.a.get(`/attributes?type=${t}&option=${a}&option1=${r}`)},getShowingAttributes:async e=>n.a.get("/attributes/show",e),addAttribute:async e=>n.a.post("/attributes/add",e),addChildAttribute:async(e,t)=>n.a.put(`/attributes/add/child/${e}`,t),addAllAttributes:async e=>n.a.post("/attributes/add/all",e),getAttributeById:async e=>n.a.get(`/attributes/${e}`),getChildAttributeById:async e=>{let{id:t,ids:a}=e;return n.a.get(`/attributes/child/${t}/${a}`)},updateAttributes:async(e,t)=>n.a.put(`/attributes/${e}`,t),updateChildAttributes:async(e,t)=>{let{id:a,ids:r}=e;return n.a.put(`/attributes/update/child/${r}/${a}`,t)},updateStatus:async(e,t)=>n.a.put(`/attributes/status/${e}`,t),updateChildStatus:async(e,t)=>n.a.put(`/attributes/status/child/${e}`,t),deleteAttribute:async(e,t)=>n.a.delete(`/attributes/${e}`,t),deleteChildAttribute:async(e,t)=>{let{id:a,ids:r}=e;return n.a.put(`/attributes/delete/child/${r}/${a}`,t)},updateManyAttribute:async e=>n.a.patch("/attributes/update/many",e),updateManyChildAttribute:async e=>n.a.patch("/attributes/update/child/many",e),deleteManyAttribute:async e=>n.a.patch("/attributes/delete/many",e),deleteManyChildAttribute:async e=>n.a.patch("/attributes/delete/child/many",e)};t.a=r},128:function(e,t,a){"use strict";var n=a(92);const r={addCoupon:async e=>n.a.post("/coupon/add",e),addAllCoupon:async e=>n.a.post("/coupon/add/all",e),getAllCoupons:async()=>n.a.get("/coupon"),getCouponById:async e=>n.a.get(`/coupon/${e}`),updateCoupon:async(e,t)=>n.a.put(`/coupon/${e}`,t),updateManyCoupons:async e=>n.a.patch("/coupon/update/many",e),updateStatus:async(e,t)=>n.a.put(`/coupon/status/${e}`,t),deleteCoupon:async e=>n.a.delete(`/coupon/${e}`),deleteManyCoupons:async e=>n.a.patch("/coupon/delete/many",e)};t.a=r},1432:function(e,t,a){"use strict";a.r(t);a(0);var n=a(3),r=a(35),s=a(378),o=a(97),i=a(267),u=a(252),c=a(124),l=a(297),d=a(298),p=a(389),h=a(299),g=a(1);var m=e=>{let{orders:t}=e;const{globalSetting:a}=Object(u.a)();return Object(g.jsx)(g.Fragment,{children:Object(g.jsx)(r.TableBody,{children:null===t||void 0===t?void 0:t.map((e=>{var t,n,s;return Object(g.jsxs)(r.TableRow,{children:[Object(g.jsx)(r.TableCell,{children:Object(g.jsx)("span",{className:"font-semibold uppercase text-xs",children:null===e||void 0===e||null===(t=e._id)||void 0===t?void 0:t.substring(20,24)})}),Object(g.jsx)(r.TableCell,{children:Object(g.jsx)("span",{className:"text-sm",children:Object(h.a)(e.createdAt,null===a||void 0===a?void 0:a.default_date_format)})}),Object(g.jsx)(r.TableCell,{children:Object(g.jsx)("span",{className:"text-sm",children:null===e||void 0===e||null===(n=e.user_info)||void 0===n?void 0:n.address})}),Object(g.jsxs)(r.TableCell,{children:[" ",Object(g.jsx)("span",{className:"text-sm",children:null===(s=e.user_info)||void 0===s?void 0:s.contact})," "]}),Object(g.jsx)(r.TableCell,{children:Object(g.jsx)("span",{className:"text-sm font-semibold",children:e.paymentMethod})}),Object(g.jsxs)(r.TableCell,{children:[" ",Object(g.jsxs)("span",{className:"text-sm font-semibold",children:["$",parseFloat(e.total).toFixed(2)]})," "]}),Object(g.jsx)(r.TableCell,{className:"text-center",children:Object(g.jsx)(d.a,{status:e.status})}),Object(g.jsx)(r.TableCell,{className:"text-right",children:Object(g.jsx)(p.a,{id:e._id})})]},e._id)}))})})},y=a(87);t.default=()=>{const{id:e}=Object(n.useParams)(),{t:t}=Object(y.a)(),{data:a,loading:d,error:p}=Object(o.a)((()=>i.a.getOrderCustomer(e))),{handleChangePage:h,totalResults:f,resultsPerPage:b,dataTable:v}=Object(u.a)(a);return Object(g.jsxs)(g.Fragment,{children:[Object(g.jsx)(c.a,{children:t("CustomerOrderList")}),d&&Object(g.jsx)(l.a,{loading:d}),!p&&!d&&0===v.length&&Object(g.jsx)("div",{className:"w-full bg-white rounded-md dark:bg-gray-800",children:Object(g.jsxs)("div",{className:"p-8 text-center",children:[Object(g.jsx)("span",{className:"flex justify-center my-30 text-red-500 font-semibold text-6xl",children:Object(g.jsx)(s.a,{})}),Object(g.jsx)("h2",{className:"font-medium text-base mt-4 text-gray-600",children:t("CustomerOrderEmpty")})]})}),a.length>0&&!p&&!d?Object(g.jsxs)(r.TableContainer,{className:"mb-8",children:[Object(g.jsxs)(r.Table,{children:[Object(g.jsx)(r.TableHeader,{children:Object(g.jsxs)("tr",{children:[Object(g.jsxs)(r.TableCell,{children:[" ",t("CustomerOrderId")," "]}),Object(g.jsx)(r.TableCell,{children:t("CustomerOrderTime")}),Object(g.jsx)(r.TableCell,{children:t("CustomerShippingAddress")}),Object(g.jsxs)(r.TableCell,{children:[t("Phone")," "]}),Object(g.jsxs)(r.TableCell,{children:[t("CustomerOrderMethod")," "]}),Object(g.jsx)(r.TableCell,{children:t("Amount")}),Object(g.jsxs)(r.TableCell,{className:"text-center",children:[" ",t("CustomerOrderStatus")," "]}),Object(g.jsx)(r.TableCell,{className:"text-center",children:t("CustomerOrderAction")})]})}),Object(g.jsx)(m,{orders:v})]}),Object(g.jsx)(r.TableFooter,{children:Object(g.jsx)(r.Pagination,{totalResults:f,resultsPerPage:b,onChange:h,label:"Table navigation"})})]}):null]})}},163:function(e,t,a){"use strict";e.exports=function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var n,r,s;if(Array.isArray(t)){if((n=t.length)!=a.length)return!1;for(r=n;0!==r--;)if(!e(t[r],a[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((n=(s=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(r=n;0!==r--;)if(!Object.prototype.hasOwnProperty.call(a,s[r]))return!1;for(r=n;0!==r--;){var o=s[r];if(!e(t[o],a[o]))return!1}return!0}return t!==t&&a!==a}},164:function(e,t,a){e.exports=function(){"use strict";var e=1e3,t=6e4,a=36e5,n="millisecond",r="second",s="minute",o="hour",i="day",u="week",c="month",l="quarter",d="year",p="date",h="Invalid Date",g=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,y={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],a=e%100;return"["+e+(t[(a-20)%10]||t[a]||t[0])+"]"}},f=function(e,t,a){var n=String(e);return!n||n.length>=t?e:""+Array(t+1-n.length).join(a)+e},b={s:f,z:function(e){var t=-e.utcOffset(),a=Math.abs(t),n=Math.floor(a/60),r=a%60;return(t<=0?"+":"-")+f(n,2,"0")+":"+f(r,2,"0")},m:function e(t,a){if(t.date()<a.date())return-e(a,t);var n=12*(a.year()-t.year())+(a.month()-t.month()),r=t.clone().add(n,c),s=a-r<0,o=t.clone().add(n+(s?-1:1),c);return+(-(n+(a-r)/(s?r-o:o-r))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:c,y:d,w:u,d:i,D:p,h:o,m:s,s:r,ms:n,Q:l}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},v="en",j={};j[v]=y;var O="$isDayjsObject",$=function(e){return e instanceof w||!(!e||!e[O])},C=function e(t,a,n){var r;if(!t)return v;if("string"==typeof t){var s=t.toLowerCase();j[s]&&(r=s),a&&(j[s]=a,r=s);var o=t.split("-");if(!r&&o.length>1)return e(o[0])}else{var i=t.name;j[i]=t,r=i}return!n&&r&&(v=r),r||!n&&v},S=function(e,t){if($(e))return e.clone();var a="object"==typeof t?t:{};return a.date=e,a.args=arguments,new w(a)},x=b;x.l=C,x.i=$,x.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var w=function(){function y(e){this.$L=C(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[O]=!0}var f=y.prototype;return f.parse=function(e){this.$d=function(e){var t=e.date,a=e.utc;if(null===t)return new Date(NaN);if(x.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var n=t.match(g);if(n){var r=n[2]-1||0,s=(n[7]||"0").substring(0,3);return a?new Date(Date.UTC(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)):new Date(n[1],r,n[3]||1,n[4]||0,n[5]||0,n[6]||0,s)}}return new Date(t)}(e),this.init()},f.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},f.$utils=function(){return x},f.isValid=function(){return!(this.$d.toString()===h)},f.isSame=function(e,t){var a=S(e);return this.startOf(t)<=a&&a<=this.endOf(t)},f.isAfter=function(e,t){return S(e)<this.startOf(t)},f.isBefore=function(e,t){return this.endOf(t)<S(e)},f.$g=function(e,t,a){return x.u(e)?this[t]:this.set(a,e)},f.unix=function(){return Math.floor(this.valueOf()/1e3)},f.valueOf=function(){return this.$d.getTime()},f.startOf=function(e,t){var a=this,n=!!x.u(t)||t,l=x.p(e),h=function(e,t){var r=x.w(a.$u?Date.UTC(a.$y,t,e):new Date(a.$y,t,e),a);return n?r:r.endOf(i)},g=function(e,t){return x.w(a.toDate()[e].apply(a.toDate("s"),(n?[0,0,0,0]:[23,59,59,999]).slice(t)),a)},m=this.$W,y=this.$M,f=this.$D,b="set"+(this.$u?"UTC":"");switch(l){case d:return n?h(1,0):h(31,11);case c:return n?h(1,y):h(0,y+1);case u:var v=this.$locale().weekStart||0,j=(m<v?m+7:m)-v;return h(n?f-j:f+(6-j),y);case i:case p:return g(b+"Hours",0);case o:return g(b+"Minutes",1);case s:return g(b+"Seconds",2);case r:return g(b+"Milliseconds",3);default:return this.clone()}},f.endOf=function(e){return this.startOf(e,!1)},f.$set=function(e,t){var a,u=x.p(e),l="set"+(this.$u?"UTC":""),h=(a={},a[i]=l+"Date",a[p]=l+"Date",a[c]=l+"Month",a[d]=l+"FullYear",a[o]=l+"Hours",a[s]=l+"Minutes",a[r]=l+"Seconds",a[n]=l+"Milliseconds",a)[u],g=u===i?this.$D+(t-this.$W):t;if(u===c||u===d){var m=this.clone().set(p,1);m.$d[h](g),m.init(),this.$d=m.set(p,Math.min(this.$D,m.daysInMonth())).$d}else h&&this.$d[h](g);return this.init(),this},f.set=function(e,t){return this.clone().$set(e,t)},f.get=function(e){return this[x.p(e)]()},f.add=function(n,l){var p,h=this;n=Number(n);var g=x.p(l),m=function(e){var t=S(h);return x.w(t.date(t.date()+Math.round(e*n)),h)};if(g===c)return this.set(c,this.$M+n);if(g===d)return this.set(d,this.$y+n);if(g===i)return m(1);if(g===u)return m(7);var y=(p={},p[s]=t,p[o]=a,p[r]=e,p)[g]||1,f=this.$d.getTime()+n*y;return x.w(f,this)},f.subtract=function(e,t){return this.add(-1*e,t)},f.format=function(e){var t=this,a=this.$locale();if(!this.isValid())return a.invalidDate||h;var n=e||"YYYY-MM-DDTHH:mm:ssZ",r=x.z(this),s=this.$H,o=this.$m,i=this.$M,u=a.weekdays,c=a.months,l=a.meridiem,d=function(e,a,r,s){return e&&(e[a]||e(t,n))||r[a].slice(0,s)},p=function(e){return x.s(s%12||12,e,"0")},g=l||function(e,t,a){var n=e<12?"AM":"PM";return a?n.toLowerCase():n};return n.replace(m,(function(e,n){return n||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return x.s(t.$y,4,"0");case"M":return i+1;case"MM":return x.s(i+1,2,"0");case"MMM":return d(a.monthsShort,i,c,3);case"MMMM":return d(c,i);case"D":return t.$D;case"DD":return x.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(a.weekdaysMin,t.$W,u,2);case"ddd":return d(a.weekdaysShort,t.$W,u,3);case"dddd":return u[t.$W];case"H":return String(s);case"HH":return x.s(s,2,"0");case"h":return p(1);case"hh":return p(2);case"a":return g(s,o,!0);case"A":return g(s,o,!1);case"m":return String(o);case"mm":return x.s(o,2,"0");case"s":return String(t.$s);case"ss":return x.s(t.$s,2,"0");case"SSS":return x.s(t.$ms,3,"0");case"Z":return r}return null}(e)||r.replace(":","")}))},f.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},f.diff=function(n,p,h){var g,m=this,y=x.p(p),f=S(n),b=(f.utcOffset()-this.utcOffset())*t,v=this-f,j=function(){return x.m(m,f)};switch(y){case d:g=j()/12;break;case c:g=j();break;case l:g=j()/3;break;case u:g=(v-b)/6048e5;break;case i:g=(v-b)/864e5;break;case o:g=v/a;break;case s:g=v/t;break;case r:g=v/e;break;default:g=v}return h?g:x.a(g)},f.daysInMonth=function(){return this.endOf(c).$D},f.$locale=function(){return j[this.$L]},f.locale=function(e,t){if(!e)return this.$L;var a=this.clone(),n=C(e,t,!0);return n&&(a.$L=n),a},f.clone=function(){return x.w(this.$d,this)},f.toDate=function(){return new Date(this.valueOf())},f.toJSON=function(){return this.isValid()?this.toISOString():null},f.toISOString=function(){return this.$d.toISOString()},f.toString=function(){return this.$d.toUTCString()},y}(),D=w.prototype;return S.prototype=D,[["$ms",n],["$s",r],["$m",s],["$H",o],["$W",i],["$M",c],["$y",d],["$D",p]].forEach((function(e){D[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,w,S),e.$i=!0),S},S.locale=C,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=j[v],S.Ls=j,S.p={},S}()},193:function(e,t,a){"use strict";var n=a(92);const r={getAllCustomers:async e=>{let{searchText:t=""}=e;return n.a.get(`/customer?searchText=${t}`)},addAllCustomers:async e=>n.a.post("/customer/add/all",e),createCustomer:async e=>n.a.post("/customer/create",e),filterCustomer:async e=>n.a.post(`/customer/filter/${e}`),getCustomerById:async e=>n.a.get(`/customer/${e}`),updateCustomer:async(e,t)=>n.a.put(`/customer/${e}`,t),deleteCustomer:async e=>n.a.delete(`/customer/${e}`)};t.a=r},252:function(e,t,a){"use strict";var n=a(165),r=a.n(n),s=a(166),o=a.n(s),i=a(164),u=a(255),c=a.n(u),l=a(256),d=a.n(l),p=a(0),h=a(3),g=a(167),m=a(36),y=(a(127),a(116),a(128),a(122),a(193),a(109),a(104)),f=a(101),b=a(37),v=a(97);t.a=e=>{new r.a({allErrors:!0});const[t,a]=Object(p.useState)(""),[n,s]=Object(p.useState)(""),[u,l]=Object(p.useState)(""),[j,O]=Object(p.useState)(""),[$,C]=Object(p.useState)(""),[S,x]=Object(p.useState)(""),[w,D]=Object(p.useState)(""),[A,T]=Object(p.useState)(""),[L,M]=Object(p.useState)(""),[N,P]=Object(p.useState)(""),[_,R]=Object(p.useState)(""),[B,I]=Object(p.useState)(""),[k,J]=Object(p.useState)([]),[F,Y]=Object(p.useState)([]),[U,H]=Object(p.useState)([]),[W,z]=Object(p.useState)(""),[V,E]=Object(p.useState)(""),[Z,G]=Object(p.useState)(""),[q,Q]=Object(p.useState)(1),[K,X]=Object(p.useState)([]),[ee,te]=Object(p.useState)(""),[ae,ne]=Object(p.useState)(""),[re,se]=Object(p.useState)(""),[oe,ie]=Object(p.useState)([]),[ue,ce]=Object(p.useState)(""),[le,de]=Object(p.useState)(!1),[pe,he]=Object(p.useState)(""),[ge]=Object(p.useState)([]),me=Object(p.useRef)(""),ye=Object(p.useRef)(""),fe=Object(p.useRef)(""),be=Object(p.useRef)(""),ve=Object(p.useRef)(""),je=Object(p.useRef)(""),Oe=Object(p.useRef)(""),$e=Object(p.useRef)(""),Ce=Object(p.useRef)(""),Se=Object(p.useRef)(""),xe=Object(p.useRef)("");i.extend(c.a),i.extend(d.a);const we=Object(h.useLocation)(),{lang:De,setIsUpdate:Ae,setLoading:Te}=Object(p.useContext)(m.a),{data:Le}=Object(v.a)(f.a.getGlobalSetting),Me=Object(p.useMemo)((()=>{const a=new Date;a.setDate(a.getDate()-Z);let r=null===e||void 0===e?void 0:e.map((e=>{const t=new Date(null===e||void 0===e?void 0:e.updatedAt).toLocaleString("en-US",{timeZone:null===Le||void 0===Le?void 0:Le.default_time_zone});return{...e,updatedDate:"Invalid Date"===t?"":t}}));if("/dashboard"===we.pathname){var s,o,c,l,d,p;const e=null===(s=r)||void 0===s?void 0:s.filter((e=>"Pending"===e.status));J(e);const t=null===(o=r)||void 0===o?void 0:o.filter((e=>"Processing"===e.status));Y(t);const a=null===(c=r)||void 0===c?void 0:c.filter((e=>"Delivered"===e.status));H(a);const n=null===(l=r)||void 0===l?void 0:l.filter((e=>i(e.createdAt).isToday())),u=null===n||void 0===n?void 0:n.reduce(((e,t)=>e+t.total),0);te(u);const h=null===(d=r)||void 0===d?void 0:d.filter((e=>i(e.createdAt).isBetween((new Date).setDate((new Date).getDate()-30),new Date))),g=null===h||void 0===h?void 0:h.reduce(((e,t)=>e+t.total),0);ne(g);const m=null===(p=r)||void 0===p?void 0:p.reduce(((e,t)=>e+t.total),0);se(m)}var h;(t&&(r=r.filter((e=>e.parent===t))),"Low"===n&&(r=r.sort(((e,t)=>e.price<t.price&&-1))),"High"===n&&(r=r.sort(((e,t)=>e.price>t.price&&-1))),u&&(r=r.filter((e=>{var t;return null===e||void 0===e||null===(t=e.title)||void 0===t?void 0:t.toLowerCase().includes(u.toLowerCase())}))),A&&(console.log("asss"),r=r.filter((e=>{var t,a,n;return(null===e||void 0===e||null===(t=e.title[De])||void 0===t||null===(a=t.toLowerCase())||void 0===a?void 0:a.includes(null===A||void 0===A?void 0:A.toLowerCase()))||(null===e||void 0===e||null===(n=e.attribute)||void 0===n?void 0:n.toLowerCase().includes(null===A||void 0===A?void 0:A.toLowerCase()))}))),w&&(r=r.filter((e=>{var t,a,n;return(null===e||void 0===e||null===(t=e.name[De])||void 0===t||null===(a=t.toLowerCase())||void 0===a?void 0:a.includes(null===w||void 0===w?void 0:w.toLowerCase()))||(null===e||void 0===e||null===(n=e.category)||void 0===n?void 0:n.toLowerCase().includes(null===w||void 0===w?void 0:w.toLowerCase()))}))),V&&(console.log(V,"role",r),r=r.filter((e=>e.designation===V)),console.log(r,"role")),j&&(r=r.filter((e=>{var t,a,n;return(null===e||void 0===e||null===(t=e.name[De])||void 0===t?void 0:t.toLowerCase().includes(j.toLowerCase()))||(null===e||void 0===e||null===(a=e.phone)||void 0===a?void 0:a.toLowerCase().includes(j.toLowerCase()))||(null===e||void 0===e||null===(n=e.email)||void 0===n?void 0:n.toLowerCase().includes(j.toLowerCase()))}))),$)&&(r=null===(h=r)||void 0===h?void 0:h.filter((e=>{var t,a,n;return(null===e||void 0===e||null===(t=e.title[De])||void 0===t||null===(a=t.toLowerCase())||void 0===a?void 0:a.includes(null===$||void 0===$?void 0:$.toLowerCase()))||(null===e||void 0===e||null===(n=e.couponCode)||void 0===n?void 0:n.toLowerCase().includes(null===$||void 0===$?void 0:$.toLowerCase()))})));return W&&(r=r.filter((e=>e.status===W))),S&&(r=r.filter((e=>e.contact.toLowerCase().includes(S.toLowerCase())))),Z&&(r=r.filter((e=>i(e.createdAt).isBetween(a,new Date)))),L&&(r=r.filter((e=>{var t,a;return(null===e||void 0===e||null===(t=e.name)||void 0===t?void 0:t.toLowerCase().includes(L.toLowerCase()))||(null===e||void 0===e||null===(a=e.iso_code)||void 0===a?void 0:a.toLowerCase().includes(L.toLowerCase()))}))),pe&&(r=r.filter((e=>null===e||void 0===e?void 0:e.name.toLowerCase().includes(pe.toLowerCase())))),_&&(r=r.filter((e=>e.name.toLowerCase().includes(_.toLowerCase())||e.iso_code.toLowerCase().includes(_.toLowerCase())||e.language_code.toLowerCase().includes(_.toLowerCase())))),B&&(r=r.filter((e=>e.iso_code.toLowerCase().includes(B.toLowerCase())))),r}),[Z,e,we.pathname,t,n,u,A,w,V,j,$,W,S,L,pe,_,B,null===Le||void 0===Le?void 0:Le.default_time_zone,De]),Ne=null===Me||void 0===Me?void 0:Me.length;Object(p.useEffect)((()=>{X(null===Me||void 0===Me?void 0:Me.slice(20*(q-1),20*q))}),[Me,q,20]);return{userRef:fe,searchRef:ye,couponRef:be,orderRef:ve,categoryRef:je,attributeRef:Oe,pending:k,processing:F,delivered:U,todayOrder:ee,monthlyOrder:ae,totalOrder:re,setFilter:a,setSortedField:s,setStatus:z,setRole:E,time:Z,setTime:G,handleChangePage:e=>{Q(e)},totalResults:Ne,resultsPerPage:20,dataTable:K,serviceData:Me,handleSubmitUser:e=>{console.log(fe.current.value,"userRef.current.value"),e.preventDefault(),O(fe.current.value)},handleSubmitForAll:e=>{console.log(e),e.preventDefault(),l(ye.current.value)},handleSubmitCoupon:e=>{e.preventDefault(),C(be.current.value)},handleSubmitOrder:e=>{e.preventDefault(),x(ve.current.value)},handleSubmitCategory:e=>{e.preventDefault(),D(je.current.value)},handleSubmitAttribute:e=>{e.preventDefault(),T(Oe.current.value)},handleOnDrop:e=>{for(let t=0;t<e.length;t++)ge.push(e[t].data)},handleUploadProducts:()=>{ge.length<1?Object(b.b)("Please upload/select csv file first!"):y.a.addAllProducts(ge).then((e=>{Object(b.c)(e.message)})).catch((e=>Object(b.b)(e.message)))},countryRef:$e,country:L,setCountry:M,zone:N,setZone:P,handleSubmitCountry:e=>{e.preventDefault(),M($e.current.value)},languageRef:Ce,handleSubmitLanguage:e=>{e.preventDefault(),R(Ce.current.value)},handleSelectFile:e=>{var t;e.preventDefault();const a=new FileReader,n=null===(t=e.target)||void 0===t?void 0:t.files[0];if(n&&"application/json"===n.type)ce(null===n||void 0===n?void 0:n.name),de(!0),a.readAsText(n,"UTF-8"),a.onload=e=>{let t=JSON.parse(e.target.result),a=[];"/categories"===we.pathname&&(a=t.map((e=>({_id:e._id,id:e.id,status:e.status,name:e.name,description:e.description,parentName:e.parentName,parentId:e.parentId,icon:e.icon})))),"/attributes"===we.pathname&&(a=t.map((e=>({_id:e._id,status:e.status,title:e.title,name:e.name,variants:e.variants,option:e.option,type:e.type})))),"/coupons"===we.pathname&&(a=t.map((e=>({title:e.title,couponCode:e.couponCode,endTime:e.endTime,discountPercentage:e.discountPercentage,minimumAmount:e.minimumAmount,productType:e.productType,logo:e.logo,discountType:e.discountType,status:e.status})))),"/customers"===we.pathname&&(a=t.map((e=>({name:e.name,email:e.email,password:e.password,phone:e.phone})))),ie(a)};else if(n&&"text/csv"===n.type)ce(null===n||void 0===n?void 0:n.name),de(!0),a.onload=async e=>{const t=e.target.result,a=await o()().fromString(t);console.log("json",a);let n=[];"/categories"===we.pathname&&(n=a.map((e=>({_id:e._id,id:e.id,status:e.status,name:JSON.parse(e.name),description:JSON.parse(e.description),parentName:e.parentName,parentId:e.parentId,icon:e.icon})))),"/attributes"===we.pathname&&(n=a.map((e=>({status:e.status,title:JSON.parse(e.title),name:JSON.parse(e.name),variants:JSON.parse(e.variants),option:e.option,type:e.type})))),"/coupons"===we.pathname&&(n=a.map((e=>({title:JSON.parse(e.title),couponCode:e.couponCode,endTime:e.endTime,discountPercentage:e.discountPercentage?JSON.parse(e.discountPercentage):0,minimumAmount:e.minimumAmount?JSON.parse(e.minimumAmount):0,productType:e.productType,logo:e.logo,status:e.status})))),"/customers"===we.pathname&&(n=a.map((e=>({name:e.name,email:e.email,password:e.password,phone:e.phone})))),ie(n)},a.readAsText(n);else{ce(null===n||void 0===n?void 0:n.name),de(!0);const e=!!a.readAsBinaryString;a.onload=function(t){const a=t.target.result,n=g.a(a,{type:e?"binary":"array",bookVBA:!0}),r=n.SheetNames[0],s=n.Sheets[r],o=g.b.sheet_to_json(s);let i=[];"/categories"===we.pathname&&(i=o.map((e=>({_id:e._id,id:e.id,status:e.status,name:JSON.parse(e.name),description:JSON.parse(e.description),parentName:e.parentName,parentId:e.parentId,icon:e.icon})))),"/attributes"===we.pathname&&(i=o.map((e=>({status:e.status,title:JSON.parse(e.title),name:JSON.parse(e.name),variants:JSON.parse(e.variants),option:e.option,type:e.type})))),"/coupons"===we.pathname&&(i=o.map((e=>({title:JSON.parse(e.title),couponCode:e.couponCode,endTime:e.endTime,discountPercentage:e.discountPercentage,minimumAmount:e.minimumAmount,productType:e.productType,logo:e.logo,status:e.status})))),"/customers"===we.pathname&&(i=o.map((e=>({name:e.name,email:e.email,password:e.password?e.password:"null",phone:e.phone?e.phone:"null"})))),ie(i)},e?a.readAsBinaryString(n):a.readAsArrayBuffer(n)}},handleUploadMultiple:e=>{Object(b.b)("This feature is disabled for demo!")},filename:ue,isDisabled:le,handleRemoveSelectFile:e=>{ce(""),ie([]),setTimeout((()=>de(!1)),1e3)},taxRef:Se,currencyRef:me,handleSubmitCurrency:e=>{e.preventDefault(),I(me.current.value)},handleSubmitShipping:e=>{e.preventDefault(),he(xe.current.value)},shippingRef:xe,globalSetting:Le}}},255:function(e,t,a){e.exports=function(){"use strict";return function(e,t,a){t.prototype.isBetween=function(e,t,n,r){var s=a(e),o=a(t),i="("===(r=r||"()")[0],u=")"===r[1];return(i?this.isAfter(s,n):!this.isBefore(s,n))&&(u?this.isBefore(o,n):!this.isAfter(o,n))||(i?this.isBefore(s,n):!this.isAfter(s,n))&&(u?this.isAfter(o,n):!this.isBefore(o,n))}}}()},256:function(e,t,a){e.exports=function(){"use strict";return function(e,t,a){t.prototype.isToday=function(){var e="YYYY-MM-DD",t=a();return this.format(e)===t.format(e)}}}()},267:function(e,t,a){"use strict";var n=a(92);const r={getAllOrders:async e=>{let{body:t,headers:a,customerName:r,status:s,page:o=1,limit:i=8,day:u,startDate:c,endDate:l}=e;const d=null!==r?r:"",p=null!==s?s:"",h=null!==u?u:"",g=null!==c?c:"",m=null!==l?l:"";return n.a.get(`/orders?customerName=${d}&status=${p}&day=${h}&page=${o}&limit=${i}&startDate=${g}&endDate=${m}`,t,a)},getAllOrdersTwo:async e=>{let{invoice:t,body:a,headers:r}=e;const s=null!==t?t:"";return n.a.get(`/orders/all?invoice=${s}`,a,r)},getRecentOrders:async e=>{let{page:t=1,limit:a=8,startDate:r="1:00",endDate:s="23:59"}=e;return n.a.get(`/orders/recent?page=${t}&limit=${a}&startDate=${r}&endDate=${s}`)},getOrderCustomer:async(e,t)=>n.a.get(`/orders/customer/${e}`,t),getOrderById:async(e,t)=>n.a.get(`/orders/${e}`,t),updateOrder:async(e,t,a)=>n.a.put(`/orders/${e}`,t,a),deleteOrder:async e=>n.a.delete(`/orders/${e}`),getDashboardOrdersData:async e=>{let{page:t=1,limit:a=8,endDate:r="23:59"}=e;return n.a.get(`/orders/dashboard?page=${t}&limit=${a}&endDate=${r}`)},getDashboardAmount:async()=>n.a.get("/orders/dashboard-amount"),getDashboardCount:async()=>n.a.get("/orders/dashboard-count"),getDashboardRecentOrder:async e=>{let{page:t=1,limit:a=8}=e;return n.a.get(`/orders/dashboard-recent-order?page=${t}&limit=${a}`)},getBestSellerProductChart:async()=>n.a.get("/orders/best-seller/chart")};t.a=r},297:function(e,t,a){"use strict";a(0);var n=a(316),r=a.n(n),s=a(1);t.a=e=>{let{loading:t}=e;return Object(s.jsx)("div",{className:"text-lg text-center py-6",children:Object(s.jsx)(r.a,{color:"#34D399",loading:t,height:25,width:3,radius:3,margin:4})})}},298:function(e,t,a){"use strict";var n=a(35),r=a(1);t.a=e=>{let{status:t}=e;return Object(r.jsx)(r.Fragment,{children:Object(r.jsxs)("span",{className:"font-serif",children:[("Pending"===t||"Inactive"===t)&&Object(r.jsx)(n.Badge,{type:"warning",children:t}),"Waiting for Password Reset"===t&&Object(r.jsx)(n.Badge,{type:"warning",children:t}),"Processing"===t&&Object(r.jsx)(n.Badge,{children:t}),("Delivered"===t||"Active"===t)&&Object(r.jsx)(n.Badge,{type:"success",children:t}),"Cancel"===t&&Object(r.jsx)(n.Badge,{type:"danger",children:t}),"POS-Completed"===t&&Object(r.jsx)(n.Badge,{className:"dark:bg-teal-900 bg-teal-100",children:t})]})})}},299:function(e,t,a){"use strict";a.d(t,"a",(function(){return r})),a.d(t,"b",(function(){return s}));var n=a(164);const r=(e,t)=>n(e).format(t),s=(e,t,a)=>n(e).format(`${t} ${a}`)},389:function(e,t,a){"use strict";var n=a(0),r=a(35),s=a(267),o=a(37),i=a(36),u=a(1);t.a=e=>{let{id:t,order:a}=e;const{setIsUpdate:c}=Object(n.useContext)(i.a);return Object(u.jsx)(u.Fragment,{children:Object(u.jsxs)(r.Select,{onChange:e=>((e,t)=>{s.a.updateOrder(e,{status:t}).then((e=>{Object(o.c)(e.message),c(!0)})).catch((e=>Object(o.b)(e.message)))})(t,e.target.value),className:"border border-gray-50 bg-gray-50 dark:border-gray-700 h-8 rounded-md text-xs focus:border-gray-400 focus:outline-none",children:[Object(u.jsx)("option",{value:"status",defaultValue:!0,hidden:!0,children:null===a||void 0===a?void 0:a.status}),Object(u.jsx)("option",{defaultValue:"Delivered"===(null===a||void 0===a?void 0:a.status),value:"Delivered",children:"Delivered"}),Object(u.jsx)("option",{defaultValue:"Pending"===(null===a||void 0===a?void 0:a.status),value:"Pending",children:"Pending"}),Object(u.jsx)("option",{defaultValue:"Processing"===(null===a||void 0===a?void 0:a.status),value:"Processing",children:"Processing"}),Object(u.jsx)("option",{defaultValue:"Cancel"===(null===a||void 0===a?void 0:a.status),value:"Cancel",children:"Cancel"})]})})}},92:function(e,t,a){"use strict";var n=a(99),r=a.n(n),s=a(17),o=a.n(s);const i=r.a.create({baseURL:"https://api.wildvalley.in",timeout:5e4,headers:{Accept:"application/json","Content-Type":"application/json"}});i.interceptors.request.use((function(e){let t,a;return o.a.get("adminInfo")&&(t=JSON.parse(o.a.get("adminInfo"))),o.a.get("company")&&(a=o.a.get("company")),{...e,headers:{authorization:t?`Bearer ${t.token}`:null,company:a||null}}}));const u=e=>e.data,c={get:(e,t,a)=>i.get(e,t,a).then(u),post:(e,t)=>i.post(e,t).then(u),put:(e,t,a)=>i.put(e,t,a).then(u),patch:(e,t)=>i.patch(e,t).then(u),delete:(e,t)=>i.delete(e,t).then(u)};t.a=c},97:function(e,t,a){"use strict";var n=a(99),r=a.n(n),s=a(0),o=a(36);t.a=e=>{const[t,a]=Object(s.useState)([]||!1),[n,i]=Object(s.useState)(""),[u,c]=Object(s.useState)(!0),{isUpdate:l,setIsUpdate:d,currentPage:p,category:h,searchText:g,invoice:m,status:y,zone:f,time:b,sortedField:v,source:j,limitData:O,startDate:$,endDate:C}=Object(s.useContext)(o.a);return Object(s.useEffect)((()=>{let t=!1,n=r.a.CancelToken.source();return(async()=>{try{const r=await e({cancelToken:n.token});t||(a(r),i(""),c(!1))}catch(s){t||(i(s.message),r.a.isCancel(s),i(s.message),c(!1),a([]))}})(),d(!1),()=>{t=!0,n.cancel("Cancelled in cleanup")}}),[l,p,h,g,m,y,f,b,v,j,O,$,C]),{data:t,error:n,loading:u}}}}]);
//# sourceMappingURL=77.0ad10a3e.chunk.js.map