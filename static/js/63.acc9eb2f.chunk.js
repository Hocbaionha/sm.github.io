(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[63],{1258:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1278:function(e,t,a){"use strict";var n=a(225),r=a(224);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(227)).default)(c.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=o},1389:function(e,t,a){"use strict";var n=a(50),r=a(28),c=a(0),o=a.n(c),s=a(2),l=a(1552),i=a(78),u=a.n(i),d=a(380),f=a(84),m=a(374),p=a(1191),h=a(1133),b=a(1134),v=a(1193),g=a(1153),y=a(1162),j=a(646),x=a(1151),O=a(1550),E=a.n(O),w=a(1551),k=a.n(w),S=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:2;if(0===e)return"0 Bytes";var a=1024,n=t<0?0:t,r=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],c=Math.floor(Math.log(e)/Math.log(a));return"".concat(parseFloat((e/Math.pow(a,c)).toFixed(n))," ").concat(r[c])},N=Object(d.a)((function(e){return{root:{},dropZone:{border:"1px dashed ".concat(e.palette.divider),padding:e.spacing(6),outline:"none",display:"flex",justifyContent:"center",flexWrap:"wrap",alignItems:"center","&:hover":{backgroundColor:e.palette.action.hover,opacity:.5,cursor:"pointer"}},dragActive:{backgroundColor:e.palette.action.active,opacity:.5},image:{width:130},info:{marginTop:e.spacing(1)},list:{maxHeight:320},actions:{marginTop:e.spacing(2),display:"flex",justifyContent:"flex-end","& > * + *":{marginLeft:e.spacing(2)}}}}));t.a=function(e){var t,a=e.className,c=e.handleDrop,i=e.files,d=e.handleRemoveAll,O=Object(r.a)(e,["className","handleDrop","files","handleRemoveAll"]),w=N(),B=Object(l.a)({onDrop:c}),_=B.getRootProps,A=B.getInputProps,M=B.isDragActive;return o.a.createElement("div",Object.assign({className:Object(s.default)(w.root,a)},O),o.a.createElement("div",Object.assign({className:Object(s.default)((t={},Object(n.a)(t,w.dropZone,!0),Object(n.a)(t,w.dragActive,M),t))},_()),o.a.createElement("input",A()),o.a.createElement("div",null,o.a.createElement("img",{alt:"Select file",className:w.image,src:"/static/images/undraw_add_file2_gvbb.svg"})),o.a.createElement("div",null,o.a.createElement(f.a,{gutterBottom:!0,variant:"h3"},"T\u1ea3i file l\xean"),o.a.createElement(m.a,{mt:2},o.a.createElement(f.a,{color:"textPrimary",variant:"body1"},"B\u1eb1ng c\xe1ch k\xe9o th\u1ea3 ho\u1eb7c click"," ",o.a.createElement(p.a,{underline:"always"},"v\xe0o \u0111\xe2y")," ","\u0111\u1ec3 ch\u1ecdn file tr\xean m\xe1y c\u1ee7a b\u1ea1n")))),i.length>0&&o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,{options:{suppressScrollX:!0}},o.a.createElement(h.a,{className:w.list},i.map((function(e,t){return o.a.createElement(b.a,{divider:t<i.length-1,key:t},o.a.createElement(v.a,null,o.a.createElement(E.a,null)),o.a.createElement(g.a,{primary:e.name,primaryTypographyProps:{variant:"h5"},secondary:S(e.size)}),o.a.createElement(y.a,{title:"More options"},o.a.createElement(j.a,{edge:"end"},o.a.createElement(k.a,null))))})))),o.a.createElement("div",{className:w.actions},o.a.createElement(x.a,{onClick:d,size:"small"},"Remove all"))))}},1391:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a(231);function r(e){if("undefined"===typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=Object(n.a)(e))){var t=0,a=function(){};return{s:a,n:function(){return t>=e.length?{done:!0}:{done:!1,value:e[t++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,c,o=!0,s=!1;return{s:function(){r=e[Symbol.iterator]()},n:function(){var e=r.next();return o=e.done,e},e:function(e){s=!0,c=e},f:function(){try{o||null==r.return||r.return()}finally{if(s)throw c}}}}},1660:function(e,t){},1662:function(e,t){},1663:function(e,t){},1940:function(e,t,a){"use strict";a.d(t,"a",(function(){return m})),a.d(t,"b",(function(){return p})),a.d(t,"e",(function(){return h})),a.d(t,"d",(function(){return b})),a.d(t,"c",(function(){return v})),a.d(t,"f",(function(){return g}));a(1391);var n=a(24),r=a(9),c=a.n(r),o=a(14),s=a(53),l=a(121),i=a.n(l),u=a(1560),d=a.n(u),f=a(130),m=function(){var e=Object(o.a)(c.a.mark((function e(t){var a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.firestore().collection("schools").doc(t.id);case 3:if(a=e.sent,t.total_student=0,t.total_teacher=0,t.lms_url=t.id.trim()+".dschool.vn",!a.get().exists){e.next=13;break}return console.log("doc exist"),e.abrupt("return","existed");case 13:return console.log(t),e.next=16,s.a.firestore().collection("schools").doc(t.id).set(t);case 16:e.sent,console.log("add school success");case 18:e.next=23;break;case 20:e.prev=20,e.t0=e.catch(0),console.log(e.t0);case 23:case"end":return e.stop()}}),e,null,[[0,20]])})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.firestore().collection("schools").doc(t).get();case 3:return a=e.sent,(n=a.data()).id=t,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a=t.id,e.next=4,s.a.firestore().collection("schools").doc(a).update(t);case 4:return n=e.sent,e.abrupt("return",n);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.firestore().collection("schools").get();case 3:return a=e.sent,r=a.docs.map((function(e){return Object(n.a)({id:e.id},e.data())})),e.abrupt("return",r);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(c.a.mark((function e(t){var a,r;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.firestore().collection("commands").where("data.school_id","==",t).where("type","==","school").where("action","==","upload").where("status","==",1).get();case 3:return a=e.sent,r=a.docs.map((function(e){return Object(n.a)({id:e.id},e.data())})),console.log(r),e.abrupt("return",r);case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(c.a.mark((function e(t,a,n){var r,l,u;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,(r={school_id:n}).year="2021_2022",l=new FileReader,u=!!l.readAsBinaryString,l.onabort=function(){return console.log("file reading was aborted")},l.onerror=function(){return console.log("file reading has failed")},l.onload=function(){var e=Object(o.a)(c.a.mark((function e(a){var n,o,l,m,p,h,b,v,g,y,j;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=a.target.result,o=d.a.read(n,{type:u?"binary":"array"}),l={type:"school",action:"upload",status:0,executer:t},console.log(o.Sheets),m=Object.keys(o.Sheets).length,console.log("length",m),2!=m){e.next=17;break}p=o.SheetNames[0],h=d.a.utils.sheet_to_json(o.Sheets[p],{raw:!1,dateNF:"MM-DD-YYYY",header:1,blankrows:!1,defval:""}),r.hs=JSON.stringify(h),b=o.SheetNames[1],v=d.a.utils.sheet_to_json(o.Sheets[b],{raw:!1,dateNF:"MM-DD-YYYY",header:1,blankrows:!1,defval:""}),r.gv=JSON.stringify(v),r.template=2,l.data=r,e.next=20;break;case 17:if(3!=m){e.next=20;break}return console.log("not use 3 temp"),e.abrupt("return","please review template");case 20:return e.next=22,s.a.firestore().collection("commands").add(l);case 22:return g=e.sent,e.next=25,g.get();case 25:return e.next=27,e.sent.id;case 27:return y=e.sent,console.log(y),l.data.commandid=y,j="".concat(f.a,"/api/upload_school"),i.a.post(j,{id:y}).then((function(e){console.log(e.data)})),e.abrupt("return","success");case 33:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),!u){e.next=13;break}return e.next=11,l.readAsBinaryString(a);case 11:e.next=15;break;case 13:return e.next=15,l.readAsArrayBuffer(a);case 15:e.next=21;break;case 17:return e.prev=17,e.t0=e.catch(0),console.log(e.t0),e.abrupt("return","L\u1ed7i r\u1ed3i !!!");case 21:case"end":return e.stop()}}),e,null,[[0,17]])})));return function(t,a,n){return e.apply(this,arguments)}}()},2767:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(380),o=a(1180),s=a(374),l=a(390),i=a(9),u=a.n(i),d=a(14),f=a(17),m=a(28),p=a(2),h=(a(1363),a(1355)),b=a(62),v=a(1151),g=a(1174),y=a(1176),j=a(188),x=a(1389),O=a(25),E=a(1940),w=a(55),k=a(1258),S=Object(c.a)((function(){return{root:{}}})),N=function(e){var t=e.className,a=Object(m.a)(e,["className"]),c=Object(w.g)(),o=localStorage.getItem("schoolid"),l=Object(n.useState)(null),i=Object(f.a)(l,2),N=i[0],B=i[1],_=Object(k.a)(),A=Object(n.useCallback)(Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(E.c)(o);case 3:t=e.sent,console.log(t),_.current&&B(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[_]);Object(n.useEffect)((function(){A()}),[A]);var M=Object(n.useState)([]),T=Object(f.a)(M,2),D=T[0],C=T[1],Y=Object(O.a)().user;console.log(Y.name);var R=function(){C([])},F=Object(n.useCallback)((function(e){C((function(t){return e}))}),[]),P=S(),I=Object(b.b)().enqueueSnackbar;return null!=N&&N.length>0?(console.log(N),r.a.createElement("div",null,r.a.createElement("h1",null,"Running"),N.map((function(e){return r.a.createElement("h5",{key:e.id},e.data.school_id)})))):r.a.createElement(h.a,{initialValues:{submit:null},onSubmit:function(){var e=Object(d.a)(u.a.mark((function e(t,a){var n,s,l,i;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:n=a.resetForm,s=a.setErrors,l=a.setStatus,i=a.setSubmitting;try{console.log("click save"),fetch("https://geolocation-db.com/json/").then((function(e){return e.json()})).then(function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"undefined"==typeof Y.name?t.name=Y.firstname+" "+Y.lastname:t.name=Y.name,t.userid=Y.userId,t.created_at=(new Date).getTime(),e.next=5,Object(E.f)(t,D[0],o);case 5:if("success"!=(a=e.sent)){e.next=18;break}return e.next=9,Object(j.a)(500);case 9:return n(),l({success:!0}),i(!1),I("B\u1eaft \u0111\u1ea7u ch\u1ea1y \u0111\u1ed3ng b\u1ed9",{variant:"success",action:r.a.createElement(v.a,null,"start")}),e.next=15,Object(j.a)(500);case 15:c.push("/school/management/classes"),e.next=27;break;case 18:return e.next=20,Object(j.a)(500);case 20:return n(),l({success:!0}),i(!1),I(a,{variant:"resultUp",action:r.a.createElement(v.a,null,"start")}),e.next=26,Object(j.a)(500);case 26:c.push("/school/management/classes");case 27:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}catch(t){console.error(t),l({success:!1}),s({submit:t.message}),i(!1)}case 2:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){e.errors,e.handleBlur,e.handleChange;var n=e.handleSubmit,c=e.isSubmitting;e.touched,e.values;return r.a.createElement("form",Object.assign({className:Object(p.default)(P.root,t),onSubmit:n},a),r.a.createElement(g.a,null,r.a.createElement(y.a,null,r.a.createElement(y.a,null,r.a.createElement(x.a,{handleDrop:F,files:D,handleRemoveAll:R})),r.a.createElement(s.a,{mt:2},r.a.createElement(v.a,{variant:"contained",color:"secondary",type:"submit",disabled:c},"L\u01b0u")))))}))},B=a(8),_=a(1233),A=a(1191),M=a(84),T=a(1278),D=a.n(T),C=Object(c.a)((function(){return{root:{}}})),Y=function(e){var t=e.className,a=Object(m.a)(e,["className"]),n=C();return r.a.createElement("div",Object.assign({className:Object(p.default)(n.root,t)},a),r.a.createElement(_.a,{separator:r.a.createElement(D.a,{fontSize:"small"}),"aria-label":"breadcrumb"},r.a.createElement(A.a,{variant:"body1",color:"inherit",to:"/hbon/management/schools",component:B.a},"Trang ch\u1ee7"),r.a.createElement(A.a,{variant:"body1",color:"inherit",to:"/hbon/management/schools",component:B.a},"Tr\u01b0\u1eddng h\u1ecdc")),r.a.createElement(M.a,{variant:"h3",color:"textPrimary"},"Th\xeam tr\u01b0\u1eddng h\u1ecdc"))},R=Object(c.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=R();return console.log("creating school"),r.a.createElement(l.a,{className:e.root,title:"Th\xeam tr\u01b0\u1eddng h\u1ecdc"},r.a.createElement(o.a,{maxWidth:!1},r.a.createElement(Y,null)),r.a.createElement(s.a,{mt:3},r.a.createElement(o.a,{maxWidth:"lg"},r.a.createElement(N,null))))}}}]);
//# sourceMappingURL=63.acc9eb2f.chunk.js.map