(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[106],{1258:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1938:function(e,t,a){"use strict";a.d(t,"f",(function(){return d})),a.d(t,"b",(function(){return p})),a.d(t,"a",(function(){return h})),a.d(t,"d",(function(){return f})),a.d(t,"g",(function(){return b})),a.d(t,"e",(function(){return v})),a.d(t,"c",(function(){return g}));var n=a(9),r=a.n(n),c=a(24),o=a(14),s=a(1286),u=a(184),i=a.n(u),l=a(53),d=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.firestore().collection("students").where("school_id","==",t).where("status","==",0).get();case 3:if(a=e.sent,console.log(a.empty),console.log(a.size),!a.docs){e.next=9;break}return n=a.docs.map((function(e){return Object(c.a)({id:e.id},e.data())})),e.abrupt("return",n);case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.username,n=t.email,e.next=4,l.a.firestore().collection("users").where("username","==",a).get();case 4:if(!(c=e.sent).docs){e.next=8;break}if(!(c.docs.length>0)){e.next=8;break}return e.abrupt("return","username_exited");case 8:return e.next=10,l.a.firestore().collection("users").where("email","==",n).get();case 10:if(!(o=e.sent).docs){e.next=14;break}if(!(o.docs.length>0)){e.next=14;break}return e.abrupt("return","email_exited");case 14:return e.abrupt("return","success");case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,c,o,s;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,m(a);case 3:if(n=e.sent,console.log("error:",n),"success"==n){e.next=7;break}return e.abrupt("return",n);case 7:return c={type:"student",action:"create",status:0,executer:t,data:a},console.log(c),e.next=11,l.a.firestore().collection("commands").add(c);case 11:return o=e.sent,e.next=14,o.get();case 14:return e.next=16,e.sent.id;case 16:return s=e.sent,console.log("add command success",s),e.abrupt("return","success");case 21:e.prev=21,e.t0=e.catch(0),console.log(e.t0);case 24:case"end":return e.stop()}}),e,null,[[0,21]])})));return function(t,a){return e.apply(this,arguments)}}(),h=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,a.birthdate._isAMomentObject&&(a.birthdate=i.a.firestore.Timestamp.fromDate(a.birthdate.toDate())),a.products=[],console.log(a.birthdate),n={type:"student",action:"add",status:0,executer:t,data:a},console.log(n),e.next=8,l.a.firestore().collection("commands").add(n);case 8:e.sent,console.log("add command success"),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t,a){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n,c,o,u,i,d,m,p,h,f;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.firestore().collection("students").doc(t).get();case 3:if(a=e.sent,(n=a.data()).id=t,c=[],"undefined"!==typeof n.products){e.next=10;break}return n.products=c,e.abrupt("return",n);case 10:o=!0,u=!1,e.prev=12,d=Object(s.a)(n.products);case 14:return e.next=16,d.next();case 16:return m=e.sent,o=m.done,e.next=20,m.value;case 20:if(p=e.sent,o){e.next=30;break}return h=p,e.next=25,h.get();case 25:f=e.sent,c.push(f.id);case 27:o=!0,e.next=14;break;case 30:e.next=36;break;case 32:e.prev=32,e.t0=e.catch(12),u=!0,i=e.t0;case 36:if(e.prev=36,e.prev=37,o||null==d.return){e.next=41;break}return e.next=41,d.return();case 41:if(e.prev=41,!u){e.next=44;break}throw i;case 44:return e.finish(41);case 45:return e.finish(36);case 46:return n.products=c,e.abrupt("return",n);case 50:e.prev=50,e.t1=e.catch(0),console.log(e.t1);case 53:case"end":return e.stop()}}),e,null,[[0,50],[12,32,36,46],[37,,41,45]])})));return function(t){return e.apply(this,arguments)}}(),b=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.birthdate._isAMomentObject&&(t.birthdate=i.a.firestore.Timestamp.fromDate(t.birthdate.toDate())),e.prev=1,a=t.id,e.next=5,l.a.firestore().collection("students").doc(a).update(t);case 5:return n=e.sent,e.abrupt("return",n);case 9:e.prev=9,e.t0=e.catch(1),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.firestore().collection("students").where("school_id","==",t).where("status","==",0).where("products",">",[]).get();case 3:if(!(a=e.sent).docs){e.next=7;break}return n=a.docs.map((function(e){return Object(c.a)({id:e.id},e.data())})),e.abrupt("return",n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),g=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,n={type:"enrole_student",action:"add",status:0,executer:t,data:a},console.log(n),e.next=5,l.a.firestore().collection("commands").add(n);case 5:console.log("add command success"),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(t,a){return e.apply(this,arguments)}}()},2304:function(e,t,a){"use strict";var n=a(50),r=a(28),c=a(0),o=a.n(c),s=a(2),u=a(380),i=a(15),l=Object(u.a)((function(e){return{root:{fontFamily:e.typography.fontFamily,alignItems:"center",borderRadius:2,display:"inline-flex",flexGrow:0,whiteSpace:"nowrap",cursor:"default",flexShrink:0,fontSize:e.typography.pxToRem(12),fontWeight:e.typography.fontWeightMedium,height:20,justifyContent:"center",letterSpacing:.5,minWidth:20,padding:e.spacing(.5,1),textTransform:"uppercase"},primary:{color:e.palette.primary.main,backgroundColor:Object(i.d)(e.palette.primary.main,.08)},secondary:{color:e.palette.secondary.main,backgroundColor:Object(i.d)(e.palette.secondary.main,.08)},error:{color:e.palette.error.main,backgroundColor:Object(i.d)(e.palette.error.main,.08)},success:{color:e.palette.success.main,backgroundColor:Object(i.d)(e.palette.success.main,.08)},warning:{color:e.palette.warning.main,backgroundColor:Object(i.d)(e.palette.warning.main,.08)}}}));t.a=function(e){var t=e.className,a=void 0===t?"":t,c=e.color,u=void 0===c?"secondary":c,i=e.children,d=(e.style,Object(r.a)(e,["className","color","children","style"])),m=l();return o.a.createElement("span",Object.assign({className:Object(s.default)(m.root,Object(n.a)({},m[u],u),a)},d),i)}},2710:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(14),o=a(17),s=a(0),u=a.n(s),i=a(380),l=a(1180),d=a(374),m=a(390),p=a(1258),h=a(28);var f=a(2),b=a(1363),v=a(1355),g=a(62),x=a(1151),j=a(1174),k=a(1176),y=a(1188),O=a(1161),w=a(2411),E=a(188),_=a(1938),S=(a(2304),a(6)),C=a.n(S),N=Object(i.a)((function(){return{root:{}}})),T=[{id:"male",name:"Nam"},{id:"female",name:"N\u1eef"}],B=function(e){var t=e.className,a=e.student,n=Object(h.a)(e,["className","student"]),o=null;a.birthdate&&(function(e){throw new Error('"'+e+'" is read-only')}("birthdate"),o=1e3*a.birthdate.seconds);var s=N(),i=Object(g.b)().enqueueSnackbar;return u.a.createElement(v.a,{initialValues:{id:a.id||"",name:a.name||"",class_code:a.class_code||"",birthdate:C()(o)||new Date,parent_name:a.parent_name||"",parent_phone:a.parent_phone||"",submit:null},validationSchema:b.e().shape({name:b.g().max(255).required("Name is required"),code:b.g().max(15),years:b.g().max(15)}),onSubmit:function(){var e=Object(c.a)(r.a.mark((function e(t,a){var n,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=a.setErrors,c=a.setStatus,o=a.setSubmitting,e.prev=1,t.school_id=localStorage.getItem("schoolid"),console.log(t),Object(_.g)(t),e.next=7,Object(E.a)(500);case 7:c({success:!0}),o(!1),i("Class updated",{variant:"success",action:u.a.createElement(x.a,null,"See all")}),e.next=18;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),c({success:!1}),n({submit:e.t0.message}),o(!1);case 18:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a){return e.apply(this,arguments)}}()},(function(e){var a=e.errors,r=e.handleBlur,c=e.handleChange,o=e.handleSubmit,i=e.isSubmitting,l=e.setFieldValue,m=e.setFieldTouched,p=e.touched,h=e.values;return u.a.createElement("form",Object.assign({className:Object(f.default)(s.root,t),onSubmit:o},n),u.a.createElement(j.a,null,u.a.createElement(k.a,null,u.a.createElement(y.a,{container:!0,spacing:3},u.a.createElement(y.a,{item:!0,md:6,xs:12},u.a.createElement(O.a,{error:Boolean(p.name&&a.name),fullWidth:!0,helperText:p.name&&a.name,label:"T\xean h\u1ecdc sinh",name:"name",onBlur:r,onChange:c,required:!0,value:h.name,variant:"outlined"})),u.a.createElement(y.a,{item:!0,md:6,xs:12},u.a.createElement(O.a,{error:Boolean(p.class_code&&a.class_code),fullWidth:!0,helperText:p.class_code&&a.class_code,label:"L\u1edbp",name:"class_code",onBlur:r,onChange:c,required:!0,value:h.class_code,disabled:!0,variant:"outlined"})),u.a.createElement(y.a,{item:!0,md:6,xs:12},u.a.createElement(O.a,{fullWidth:!0,label:"Gi\u1edbi t\xednh",name:"gender",onChange:c,select:!0,SelectProps:{native:!0},value:h.gender,variant:"outlined"},T.map((function(e){return u.a.createElement("option",{key:e.id,value:e.id},e.name)})))),u.a.createElement(y.a,{item:!0,md:6,xs:12},u.a.createElement(w.a,{className:s.datePicker,label:"Ng\xe0y sinh (ng\xe0y/th\xe1ng/n\u0103m)",format:"DD/MM/YYYY",name:"birthdate",inputVariant:"outlined",value:h.birthdate,onBlur:function(){return m("birthdate")},onClose:function(){return m("birthdate")},onAccept:function(){return m("birthdate")},onChange:function(e){return l("birthdate",e)}})),u.a.createElement(y.a,{item:!0,md:6,xs:12},u.a.createElement(O.a,{error:Boolean(p.parent_name&&a.parent_name),fullWidth:!0,helperText:p.parent_name&&a.parent_name,label:"T\xean ph\u1ee5 huynh",name:"parent_name",onBlur:r,onChange:c,value:h.parent_name,variant:"outlined"})),u.a.createElement(y.a,{item:!0,md:6,xs:12},u.a.createElement(O.a,{error:Boolean(p.parent_phone&&a.parent_phone),fullWidth:!0,helperText:p.parent_phone&&a.parent_phone,label:"S\u1ed1 \u0111i\u1ec7n tho\u1ea1i ph\u1ee5 huynh",name:"parent_phone",onBlur:r,onChange:c,value:h.parent_phone,variant:"outlined"})),u.a.createElement(y.a,{item:!0})),u.a.createElement(d.a,{mt:2},u.a.createElement(x.a,{variant:"contained",color:"secondary",type:"submit",disabled:i},"L\u01b0u")))))}))},W=a(8),D=a(1233),q=a(1191),M=a(84),F=a(1278),I=a.n(F),Y=Object(i.a)((function(){return{root:{}}})),z=function(e){var t=e.className,a=Object(h.a)(e,["className"]),n=localStorage.getItem("schoolname"),r=Y();return u.a.createElement("div",Object.assign({className:Object(f.default)(r.root,t)},a),u.a.createElement(D.a,{separator:u.a.createElement(I.a,{fontSize:"small"}),"aria-label":"breadcrumb"},u.a.createElement(q.a,{variant:"body1",color:"inherit",to:"/hbon/management/schools",component:W.a},"Tr\u01b0\u1eddng: ",n),u.a.createElement(q.a,{variant:"body1",color:"inherit",to:"/school/management/classes",component:W.a},"L\u1edbp h\u1ecdc")),u.a.createElement(M.a,{variant:"h3",color:"textPrimary"},"Ch\u1ec9nh s\u1eeda l\u1edbp h\u1ecdc"))},A=Object(i.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(e){var t=e.match.params.studentId,a=A(),n=Object(p.a)(),i=Object(s.useState)(null),h=Object(o.a)(i,2),f=h[0],b=h[1],v=Object(s.useCallback)(Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(_.d)(t);case 3:a=e.sent,console.log(a),n.current&&b(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[n]);return Object(s.useEffect)((function(){v()}),[v]),f?u.a.createElement(m.a,{className:a.root,title:"Th\xeam h\u1ecdc sinh"},u.a.createElement(l.a,{maxWidth:!1},u.a.createElement(z,null)),u.a.createElement(d.a,{mt:3},u.a.createElement(l.a,{maxWidth:"lg"},u.a.createElement(B,{student:f})))):null}}}]);
//# sourceMappingURL=106.c6a57945.chunk.js.map