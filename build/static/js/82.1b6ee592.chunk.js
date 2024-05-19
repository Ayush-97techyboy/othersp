(this["webpackJsonpdashtar-admin"]=this["webpackJsonpdashtar-admin"]||[]).push([[82],{104:function(e,t,a){"use strict";var s=a(92);const r={getAllProperyList:async e=>{let{page:t,limit:a,category:r,title:n,price:i}=e;return s.a.get("/admin/property/list?page=1&page_size=10")},getProductById:async e=>s.a.post(`/products/${e}`),addProduct:async e=>s.a.post("/products/add",e),addAllProducts:async e=>s.a.post("/products/all",e),updateProduct:async(e,t)=>s.a.patch(`/products/${e}`,t),updateManyProducts:async e=>s.a.patch("products/update/many",e),updateStatus:async(e,t)=>s.a.put(`/products/status/${e}`,t),deleteProduct:async e=>s.a.delete(`/products/${e}`),deleteManyProducts:async e=>s.a.patch("/products/delete/many",e)};t.a=r},110:function(e,t,a){"use strict";var s=a(0),r=a(36);t.a=()=>{const[e,t]=Object(s.useState)(""),[a,n]=Object(s.useState)(""),[i,c]=Object(s.useState)(""),[o,l]=Object(s.useState)([]),[d,u]=Object(s.useState)(""),{toggleDrawer:p,isDrawerOpen:b,toggleModal:g,toggleBulkDrawer:m}=Object(s.useContext)(r.a);console.log(e,"serviceId1");Object(s.useEffect)((()=>{b||(t(),n(),c())}),[b]);return{title:d,allId:o,bookingUser:a,setBookingUser:n,handleAdd:(e,t)=>{n(e),c(t),p()},serviceId:e,bookingId:i,handleUpdate:(e,a)=>{t(e),c(a),p()},setServiceId:t,handleModalOpen:(e,a)=>{console.log("DELETE","ww"),t(e),g(),u(a)},handleDeleteMany:async(e,t)=>{console.log("ww","ww"),l(e),g(),u("Selected Products")},handleUpdateMany:e=>{l(e),m()}}}},124:function(e,t,a){"use strict";a(35),a(0);var s=a(1);t.a=e=>{let{children:t}=e;return Object(s.jsx)("h1",{className:"my-6 text-lg font-bold text-gray-700 dark:text-gray-300 ",children:t})}},140:function(e,t,a){"use strict";a(0);var s=a.p+"static/media/no-result.ec22e94c.svg",r=a(1);t.a=e=>{let{title:t}=e;return Object(r.jsxs)("div",{className:"text-center align-middle mx-auto p-5 my-5",children:[Object(r.jsx)("img",{className:"my-4",src:s,alt:"no-result",width:"400"}),Object(r.jsxs)("h2",{className:"text-lg md:text-xl lg:text-2xl xl:text-2xl text-center mt-2 font-medium font-serif text-gray-600",children:["Sorry, we can not find this ",t]})]})}},141:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var s=a(0),r=a.n(s);const n=r.a.createContext({}),i=!0;function c(e){let{baseColor:t,highlightColor:a,width:s,height:r,borderRadius:n,circle:c,direction:o,duration:l,enableAnimation:d=i}=e;const u={};return"rtl"===o&&(u["--animation-direction"]="reverse"),"number"===typeof l&&(u["--animation-duration"]=`${l}s`),d||(u["--pseudo-element-display"]="none"),"string"!==typeof s&&"number"!==typeof s||(u.width=s),"string"!==typeof r&&"number"!==typeof r||(u.height=r),"string"!==typeof n&&"number"!==typeof n||(u.borderRadius=n),c&&(u.borderRadius="50%"),"undefined"!==typeof t&&(u["--base-color"]=t),"undefined"!==typeof a&&(u["--highlight-color"]=a),u}function o(e){let{count:t=1,wrapper:a,className:s,containerClassName:o,containerTestId:l,circle:d=!1,style:u,...p}=e;var b,g,m;const h=r.a.useContext(n),j={...p};for(const[r,n]of Object.entries(p))"undefined"===typeof n&&delete j[r];const y={...h,...j,circle:d},f={...u,...c(y)};let x="react-loading-skeleton";s&&(x+=` ${s}`);const O=null!==(b=y.inline)&&void 0!==b&&b,v=[],N=Math.ceil(t);for(let n=0;n<N;n++){let e=f;if(N>t&&n===N-1){const a=null!==(g=e.width)&&void 0!==g?g:"100%",s=t%1,r="number"===typeof a?a*s:`calc(${a} * ${s})`;e={...e,width:r}}const a=r.a.createElement("span",{className:x,style:e,key:n},"\u200c");O?v.push(a):v.push(r.a.createElement(r.a.Fragment,{key:n},a,r.a.createElement("br",null)))}return r.a.createElement("span",{className:o,"data-testid":l,"aria-live":"polite","aria-busy":null!==(m=y.enableAnimation)&&void 0!==m?m:i},a?v.map(((e,t)=>r.a.createElement(a,{key:t},e))):v)}},144:function(e,t,a){"use strict";var s=a(35),r=a(0),n=a(141),i=a(1);t.a=e=>{let{row:t=5,col:a=4,width:c=290,height:o=25}=e;const{mode:l}=Object(r.useContext)(s.WindmillContext),d=[];for(let s=1;s<=t;s++)d.push(s);return Object(i.jsxs)(s.TableContainer,{className:"mb-8",children:[Object(i.jsxs)("div",{className:"text-center",children:[Object(i.jsx)(n.a,{height:40,width:c,count:a,inline:!0,className:"mx-1 my-1 dark:bg-gray-800 bg-gray-200",baseColor:""+("dark"===l?"#010101":"#f9f9f9"),highlightColor:("dark"===l?"#1a1c23":"#f8f8f8")+" "}),d.map((e=>Object(i.jsx)("div",{children:Object(i.jsx)(n.a,{height:o,width:c,count:a,inline:!0,className:"mx-1 my-1 dark:bg-gray-800 bg-gray-200",baseColor:""+("dark"===l?"#010101":"#f9f9f9"),highlightColor:("dark"===l?"#1a1c23":"#f8f8f8")+" "})},e)))]}),Object(i.jsxs)(s.TableFooter,{className:"flex justify-between",children:[Object(i.jsx)(n.a,{className:"dark:bg-gray-800 bg-gray-200",baseColor:""+("dark"===l?"#010101":"#f9f9f9"),highlightColor:("dark"===l?"#1a1c23":"#f8f8f8")+" ",height:25,width:290,count:1}),Object(i.jsx)(n.a,{className:"dark:bg-gray-800 bg-gray-200",baseColor:""+("dark"===l?"#010101":"#f9f9f9"),highlightColor:("dark"===l?"#1a1c23":"#f8f8f8")+" ",height:25,width:290,count:1})]})]})}},1455:function(e,t,a){"use strict";a.r(t);var s=a(0),r=a(35),n=a(87),i=a(110),c=a(140),o=a(124),l=a(36),d=a(282),u=a(174),p=a.n(u),b=a(1);var g=e=>{let{products:t,isCheck:a,getAllFAQsList:s,setIsCheck:n,serviceId:i,setserviceId:c,lang:o,handleUpdate:l,wholeCount:d}=e;return Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(r.TableBody,{children:null===t||void 0===t?void 0:t.map(((e,t)=>{var a;return Object(b.jsxs)(r.TableRow,{children:[Object(b.jsx)(r.TableCell,{children:Object(b.jsx)("span",{className:"text-sm",children:((null===d||void 0===d?void 0:d.currentPage)-1)*(null===d||void 0===d?void 0:d.pageSize)+t+1})}),Object(b.jsx)(r.TableCell,{className:"textcorrect",children:Object(b.jsx)("span",{className:"text-sm ",children:(null===e||void 0===e?void 0:e.name)||"General FAQ"})}),Object(b.jsx)(r.TableCell,{className:"textcorrect",children:Object(b.jsx)("span",{className:"text-sm",children:null===e||void 0===e?void 0:e.email})}),Object(b.jsx)(r.TableCell,{className:"textcorrect",children:Object(b.jsx)("span",{className:"text-sm",children:null===e||void 0===e?void 0:e.mobile})}),Object(b.jsx)(r.TableCell,{className:"textcorrect",children:Object(b.jsx)("span",{className:"text-sm",children:null===e||void 0===e||null===(a=e.Property)||void 0===a?void 0:a.name})}),Object(b.jsx)(r.TableCell,{className:"textcorrect",children:Object(b.jsx)("span",{className:"text-sm",children:null===e||void 0===e?void 0:e.no_of_guest})}),Object(b.jsx)(r.TableCell,{className:"textcorrect",children:Object(b.jsx)("span",{className:"text-sm",children:(null===e||void 0===e?void 0:e.tentative_travel_date)&&p()(null===e||void 0===e?void 0:e.tentative_travel_date).format("DD-MM-YYYY")})}),Object(b.jsx)(r.TableCell,{className:"textcorrect",children:Object(b.jsx)("span",{className:"text-sm",children:null===e||void 0===e?void 0:e.message})}),Object(b.jsx)(r.TableCell,{className:"textcorrect",children:Object(b.jsx)("span",{className:"text-sm",children:p()(null===e||void 0===e?void 0:e.createdAt).format("DD-MM-YYYY hh:mm")})})]},t+1)}))})})},m=a(250),h=a(144),j=a(96);t.default=()=>{var e,t;const{serviceId:a,setServiceId:u,handleUpdate:p}=Object(i.a)(),{t:y}=Object(n.a)(),{lang:f,handleSubmitForAll:x}=Object(s.useContext)(l.a),[O,v]=Object(s.useState)([]),[N,T]=Object(s.useState)(1),[S,C]=Object(s.useState)(!1),[w,k]=Object(s.useState)([]),[A,P]=Object(s.useState)([]),{serviceData:I}=Object(m.a)(d.a),D=async function(e){var t,a;let s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";const r=await Object(j.Gb)(e,s);C(!1),k(null===r||void 0===r||null===(t=r.data)||void 0===t?void 0:t.data),P(null===(a=r.data.data)||void 0===a?void 0:a.pagination)};console.log(a,"serviceId"),Object(s.useEffect)((()=>{C(!0),D(N)}),[]);return Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(o.a,{children:y("Enquries List")}),Object(b.jsx)(r.Card,{className:"min-w-0 shadow-xs overflow-hidden bg-white dark:bg-gray-800 mb-5",children:Object(b.jsx)(r.CardBody,{className:"",children:Object(b.jsxs)("form",{onSubmit:x,className:"py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6  xl:flex",children:[Object(b.jsxs)("div",{className:"flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow",children:[Object(b.jsx)(r.Input,{className:"border h-12 text-sm focus:outline-none block w-full bg-gray-100 border-transparent focus:bg-white",type:"search",onChange:e=>{return t=e.target.value,void D(N,t);var t},name:"search",placeholder:y("StaffSearchBy")}),Object(b.jsx)("button",{type:"submit",className:"absolute right-0 top-0 mt-5 mr-1"})]}),Object(b.jsx)("div",{className:"lg:flex  md:flex xl:justify-end xl:w-1/2  md:w-full md:justify-start flex-grow-0",children:Object(b.jsx)("div",{className:"w-full md:w-48 lg:w-48 xl:w-48"})})]})})}),S?Object(b.jsx)(h.a,{row:12,col:7,width:160,height:20}):0!==(null===I||void 0===I?void 0:I.length)?Object(b.jsxs)(r.TableContainer,{className:"mb-8 rounded-b-lg",children:[Object(b.jsxs)(r.Table,{children:[Object(b.jsx)(r.TableHeader,{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)(r.TableCell,{className:"text-left",children:"s.no"}),Object(b.jsx)(r.TableCell,{children:y("Name")}),Object(b.jsx)(r.TableCell,{children:y("Email")}),Object(b.jsx)(r.TableCell,{children:y("Phone")}),Object(b.jsx)(r.TableCell,{children:y("Property")}),Object(b.jsx)(r.TableCell,{children:y("Number of guests")}),Object(b.jsx)(r.TableCell,{children:y("tentative travel date")}),Object(b.jsx)(r.TableCell,{children:y("Message")}),Object(b.jsx)(r.TableCell,{children:y("Time")})]})}),Object(b.jsx)(g,{lang:f,isCheck:O,products:null===w||void 0===w?void 0:w.contactUs,getAllEnquriesList:D,setIsCheck:v,serviceId:a,setserviceId:u,handleUpdate:p,wholeCount:A})]}),Object(b.jsx)(r.TableFooter,{children:Object(b.jsx)(r.Pagination,{totalResults:null===w||void 0===w||null===(e=w.pagination)||void 0===e?void 0:e.total,resultsPerPage:null===w||void 0===w||null===(t=w.pagination)||void 0===t?void 0:t.pageSize,onChange:e=>{console.log("clicked",e),T(e),D(e)},label:"Product Page Navigation"})})]}):Object(b.jsx)(c.a,{title:"Product"})]})}},148:function(e,t){e.exports=function(e){return e.webpackPolyfill||(e.deprecate=function(){},e.paths=[],e.children||(e.children=[]),Object.defineProperty(e,"loaded",{enumerable:!0,get:function(){return e.l}}),Object.defineProperty(e,"id",{enumerable:!0,get:function(){return e.i}}),e.webpackPolyfill=1),e}},163:function(e,t,a){"use strict";e.exports=function e(t,a){if(t===a)return!0;if(t&&a&&"object"==typeof t&&"object"==typeof a){if(t.constructor!==a.constructor)return!1;var s,r,n;if(Array.isArray(t)){if((s=t.length)!=a.length)return!1;for(r=s;0!==r--;)if(!e(t[r],a[r]))return!1;return!0}if(t.constructor===RegExp)return t.source===a.source&&t.flags===a.flags;if(t.valueOf!==Object.prototype.valueOf)return t.valueOf()===a.valueOf();if(t.toString!==Object.prototype.toString)return t.toString()===a.toString();if((s=(n=Object.keys(t)).length)!==Object.keys(a).length)return!1;for(r=s;0!==r--;)if(!Object.prototype.hasOwnProperty.call(a,n[r]))return!1;for(r=s;0!==r--;){var i=n[r];if(!e(t[i],a[i]))return!1}return!0}return t!==t&&a!==a}},250:function(e,t,a){"use strict";var s=a(165),r=a.n(s),n=a(166),i=a.n(n),c=a(0),o=a(167),l=a(36),d=a(104),u=a(37);const p={type:"object",properties:{categories:{type:"array"},image:{type:"array"},tag:{type:"array"},variants:{type:"array"},show:{type:"array"},status:{type:"string"},prices:{type:"object"},isCombination:{type:"boolean"},title:{type:"object"},productId:{type:"string"},slug:{type:"string"},category:{type:"object"},stock:{type:"number"},description:{type:"object"}},required:["categories","category","prices","title"]};t.a=e=>{const t=new r.a({allErrors:!0}),{setLoading:a,setIsUpdate:s}=Object(c.useContext)(l.a),[n]=Object(c.useState)([]),[b,g]=Object(c.useState)([]),[m,h]=Object(c.useState)(""),[j,y]=Object(c.useState)(!1);return{data:e,filename:m,isDisabled:j,handleSelectFile:async e=>{var t;e.preventDefault();const a=new FileReader,s=null===(t=e.target)||void 0===t?void 0:t.files[0];if(s&&"application/json"===s.type)h(null===s||void 0===s?void 0:s.name),y(!0),a.readAsText(s,"UTF-8"),a.onload=e=>{const t=JSON.parse(e.target.result).map((e=>({categories:e.categories,image:e.image,barcode:e.barcode,tag:e.tag,variants:e.variants,status:e.status,prices:e.prices,isCombination:e.isCombination,title:e.title,productId:e.productId,slug:e.slug,sku:e.sku,category:e.category,stock:e.stock,description:e.description})));g(t)};else if(s&&"text/csv"===s.type)h(null===s||void 0===s?void 0:s.name),y(!0),a.onload=async e=>{const t=e.target.result,a=(await i()().fromString(t)).map((e=>({categories:JSON.parse(e.categories),image:JSON.parse(e.image),barcode:e.barcode,tag:JSON.parse(e.tag),variants:JSON.parse(e.variants),status:e.status,prices:JSON.parse(e.prices),isCombination:JSON.parse(e.isCombination),title:JSON.parse(e.title),productId:e.productId,slug:e.slug,sku:e.sku,category:JSON.parse(e.category),stock:JSON.parse(e.stock),description:JSON.parse(e.description)})));g(a)},a.readAsText(s);else{h(null===s||void 0===s?void 0:s.name),y(!0);const e=!!a.readAsBinaryString;a.onload=function(t){const a=t.target.result,s=o.a(a,{type:e?"binary":"array",bookVBA:!0}),r=s.SheetNames[0],n=s.Sheets[r],i=o.b.sheet_to_json(n).map((e=>({categories:JSON.parse(e.categories),image:JSON.parse(e.image),barcode:e.barcode,tag:JSON.parse(e.tag),variants:JSON.parse(e.variants),status:e.status,prices:JSON.parse(e.prices),isCombination:JSON.parse(e.isCombination),title:JSON.parse(e.title),productId:e.productId,slug:e.slug,sku:e.sku,category:JSON.parse(e.category),stock:JSON.parse(e.stock),description:JSON.parse(e.description)})));g(i)},e?a.readAsBinaryString(s):a.readAsArrayBuffer(s)}},serviceData:e,handleOnDrop:e=>{for(let t=0;t<e.length;t++)n.push(e[t].data)},handleUploadProducts:()=>{n.length<1?Object(u.b)("Please upload/select csv file first!"):d.a.addAllProducts(n).then((e=>{Object(u.c)(e.message)})).catch((e=>Object(u.b)(e.message)))},handleRemoveSelectFile:e=>{h(""),g([]),setTimeout((()=>y(!1)),1e3)},handleUploadMultiple:e=>{if(b.length>1){a(!0);const e=e=>!0===e;b.map((e=>t.validate(p,e))).every(e)?d.a.addAllProducts(b).then((e=>{s(!0),a(!1),Object(u.c)(e.message)})).catch((e=>{a(!1),Object(u.b)(e.message)})):(a(!1),Object(u.b)("Please enter valid data!"))}else a(!1),Object(u.b)("Please select a valid json, csv & xls file first!")}}}},282:function(e,t,a){"use strict";t.a=[{_id:"612a3805ea43af2750ca33ba",property:"bangalore",couponCode:"AUGUST21",endTime:"2021-08-31T06:00:00Z",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",minimumAmount:1e3,productType:"Grocery",logo:"https://i.ibb.co/PDLPDHc/ins1.jpg",createdAt:"2021-08-15T13:20:05.898Z",updatedAt:"2021-10-15T09:21:29.795Z"},{_id:"612a3805ea43af2750ca33ba",property:"bangalore",couponCode:"AUGUST21",endTime:"2021-08-31T06:00:00Z",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",minimumAmount:1e3,productType:"Grocery",logo:"https://i.ibb.co/PDLPDHc/ins1.jpg",createdAt:"2021-08-15T13:20:05.898Z",updatedAt:"2021-10-15T09:21:29.795Z"},{_id:"612a3805ea43af2750ca33ba",property:"bangalore",couponCode:"AUGUST21",endTime:"2021-08-31T06:00:00Z",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",minimumAmount:1e3,productType:"Grocery",logo:"https://i.ibb.co/PDLPDHc/ins1.jpg",createdAt:"2021-08-15T13:20:05.898Z",updatedAt:"2021-10-15T09:21:29.795Z"},{_id:"612a3805ea43af2750ca33ba",property:"bangalore",couponCode:"AUGUST21",endTime:"2021-08-31T06:00:00Z",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",minimumAmount:1e3,productType:"Grocery",logo:"https://i.ibb.co/PDLPDHc/ins1.jpg",createdAt:"2021-08-15T13:20:05.898Z",updatedAt:"2021-10-15T09:21:29.795Z"},{_id:"612a3805ea43af2750ca33ba",property:"bangalore",couponCode:"AUGUST21",endTime:"2021-08-31T06:00:00Z",description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry.",minimumAmount:1e3,productType:"Grocery",logo:"https://i.ibb.co/PDLPDHc/ins1.jpg",createdAt:"2021-08-15T13:20:05.898Z",updatedAt:"2021-10-15T09:21:29.795Z"}]},92:function(e,t,a){"use strict";var s=a(99),r=a.n(s),n=a(17),i=a.n(n);const c=r.a.create({baseURL:"https://api.wildvalley.in",timeout:5e4,headers:{Accept:"application/json","Content-Type":"application/json"}});c.interceptors.request.use((function(e){let t,a;return i.a.get("adminInfo")&&(t=JSON.parse(i.a.get("adminInfo"))),i.a.get("company")&&(a=i.a.get("company")),{...e,headers:{authorization:t?`Bearer ${t.token}`:null,company:a||null}}}));const o=e=>e.data,l={get:(e,t,a)=>c.get(e,t,a).then(o),post:(e,t)=>c.post(e,t).then(o),put:(e,t,a)=>c.put(e,t,a).then(o),patch:(e,t)=>c.patch(e,t).then(o),delete:(e,t)=>c.delete(e,t).then(o)};t.a=l}}]);
//# sourceMappingURL=82.1b6ee592.chunk.js.map