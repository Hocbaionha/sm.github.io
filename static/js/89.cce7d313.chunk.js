(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[89],{1258:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1278:function(e,t,a){"use strict";var n=a(225),r=a(224);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),o=(0,n(a(227)).default)(c.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=o},1315:function(e,t,a){"use strict";a(650)},1680:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(3),o=a.n(c);function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,o=void 0===c?24:c,u=i(e,["color","size"]);return r.a.createElement("svg",l({ref:t,xmlns:"http://www.w3.org/2000/svg",width:o,height:o,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),r.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));u.propTypes={color:o.a.string,size:o.a.oneOfType([o.a.string,o.a.number])},u.displayName="PlusCircle",t.a=u},2234:function(e,t,a){"use strict";a.d(t,"c",(function(){return d})),a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return p})),a.d(t,"d",(function(){return f}));var n=a(9),r=a.n(n),c=a(24),o=a(14),l=a(53),i=a(184),u=a.n(i),s=(a(1315),a(121),l.a.firestore()),d=function(){var e=Object(o.a)(r.a.mark((function e(t){var a,n;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,l.a.firestore().collection("repo/library/users").doc(t).collection("theories").get();case 3:if(!(a=e.sent).docs){e.next=7;break}return n=a.docs.map((function(e){return Object(c.a)({id:e.id},e.data())})),e.abrupt("return",n);case 7:e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t,a),e.next=3,s.collection("repo/library/users").doc(t).collection("theories").doc(a).get();case 3:return n=e.sent,e.prev=4,e.next=7,n.data();case 7:return c=e.sent,console.log(c),e.abrupt("return",c);case 12:e.prev=12,e.t0=e.catch(4),console.log(e.t0);case 15:case"end":return e.stop()}}),e,null,[[4,12]])})));return function(t,a){return e.apply(this,arguments)}}(),p=function(){var e=Object(o.a)(r.a.mark((function e(t,a,n){var c,o,l,i,d;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(t),console.log(a),console.log(n),console.log(typeof t.data),(c={name:t.name,tag:t.tag,detail:t.detail,created_by:t.created_by,author:t.author}).restart=0,c.navigate=1,c.created_time=new Date,c.trial_maxquest=5,c.trial_maxtime=30,c.trial_maxentry=1,c.random=1,c.quest_feedback=0,c.auto_next=0,o=s.batch(),console.log(c),e.next=19,s.collection("repo/library/users").doc(c.created_by).collection("theories").doc();case 19:return l=e.sent,o.set(l,c),e.next=23,s.collection("repo/library/users").doc(c.created_by).collection("catalogs").doc(a).collection("sections").doc(n);case 23:return i=e.sent,e.next=26,i.get();case 26:return e.next=28,e.sent.data();case 28:return null!=(d=e.sent)&&("activities"in d?(console.log(l),o.update(s.collection("repo/library/users").doc(c.created_by).collection("catalogs").doc(a).collection("sections").doc(n),{activities:u.a.firestore.FieldValue.arrayUnion({name:c.name,type:"theory",ref:l})})):o.update(s.collection("repo/library/users").doc(c.created_by).collection("catalogs").doc(a).collection("sections").doc(n),{activities:[{name:c.name,type:"theory",ref:l}]})),e.next=32,o.commit();case 32:return console.log("theoryid:",l.id),c.id=l.id,e.abrupt("return",!0);case 37:e.prev=37,e.t0=e.catch(0),console.log(e.t0);case 40:case"end":return e.stop()}}),e,null,[[0,37]])})));return function(t,a,n){return e.apply(this,arguments)}}(),f=function(){var e=Object(o.a)(r.a.mark((function e(t,a){var n,c,o;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,console.log(a),console.log(typeof a.data),(n={name:a.name,tag:a.tag,detail:a.detail,created_by:a.created_by,author:a.author}).restart=0,n.navigate=1,n.created_time=new Date,n.trial_maxquest=5,n.trial_maxtime=30,n.trial_maxentry=1,n.random=1,n.quest_feedback=0,n.auto_next=0,c=s.batch(),console.log(n),e.next=17,s.collection("repo/library/users").doc(n.created_by).collection("theories").doc(t);case 17:return o=e.sent,c.set(o,n),e.next=21,c.commit();case 21:return console.log("theoryid:",o.id),n.id=o.id,e.abrupt("return",!0);case 26:e.prev=26,e.t0=e.catch(0),console.log(e.t0);case 29:case"end":return e.stop()}}),e,null,[[0,26]])})));return function(t,a){return e.apply(this,arguments)}}()},2714:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(14),o=a(17),l=a(0),i=a.n(l),u=a(380),s=a(1180),d=a(374),m=a(390),p=a(1258),f=a(28),b=a(8),g=a(2),h=a(1188),v=a(1233),y=a(1191),E=a(84),O=a(1151),j=a(181),x=a(1278),k=a.n(x),w=a(1680),_=Object(u.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}}}})),P=function(e){var t=e.className,a=Object(f.a)(e,["className"]),n=_();return i.a.createElement(h.a,Object.assign({className:Object(g.default)(n.root,t),container:!0,justify:"space-between",spacing:3},a),i.a.createElement(h.a,{item:!0},i.a.createElement(v.a,{separator:i.a.createElement(k.a,{fontSize:"small"}),"aria-label":"breadcrumb"},i.a.createElement(y.a,{variant:"body1",color:"inherit",to:"/teacher/management/classes",component:b.a},"Trang ch\u1ee7"),i.a.createElement(y.a,{variant:"body1",color:"inherit",to:"#",component:b.a},"Qu\u1ea3n l\xfd"),i.a.createElement(E.a,{variant:"body1",color:"textPrimary"},"L\xfd Thuy\u1ebft")),i.a.createElement(E.a,{variant:"h3",color:"textPrimary"},"Danh s\xe1ch l\xfd thuy\u1ebft")),i.a.createElement(h.a,{item:!0},i.a.createElement(y.a,{to:"/flutter/theory/create",component:b.a},i.a.createElement(O.a,{color:"secondary",variant:"contained",startIcon:i.a.createElement(j.a,{fontSize:"small"},i.a.createElement(w.a,null))},"Th\xeam L\xfd Thuy\u1ebft"))))},C=a(57),S=a(24),T=a(78),L=a.n(T),N=a(1174),A=a(1230),z=a(1198),I=a(1187),R=a(1161),q=a(1189),M=a(1163),B=a(1155),D=a(1199),F=a(1160),W=a(1157),H=a(1156),J=a(646),G=a(1164),Q=a(1226),U=a(1224),V=[{value:"all",label:"T\u1ea5t c\u1ea3"}],K=[{value:"updatedAt|desc",label:"Last update (newest first)"},{value:"updatedAt|asc",label:"Last update (oldest first)"},{value:"name|desc",label:"T\xean (gi\u1ea3m)"},{value:"name|asc",label:"T\xean (t\u0103ng)"}],X=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},Y=function(e,t){var a=t.split("|"),n=Object(o.a)(a,2),r=n[0],c=function(e,t){return"desc"===e?function(e,a){return X(e,a,t)}:function(e,a){return-X(e,a,t)}}(n[1],r),l=e.map((function(e,t){return[e,t]}));return l.sort((function(e,t){var a=c(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),l.map((function(e){return e[0]}))},Z=Object(u.a)((function(e){return{root:{},queryField:{width:500},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},avatar:{height:42,width:42,marginRight:e.spacing(1)}}})),$=function(e){var t=e.theories,a=Object(f.a)(e,["theories"]),n=Z(),r=Object(l.useState)("all"),c=Object(o.a)(r,2),u=c[0],s=c[1],m=Object(l.useState)([]),p=Object(o.a)(m,2),h=p[0],v=p[1],y=Object(l.useState)(0),E=Object(o.a)(y,2),x=E[0],k=E[1],w=Object(l.useState)(10),_=Object(o.a)(w,2),P=_[0],T=_[1],X=Object(l.useState)(""),$=Object(o.a)(X,2),ee=$[0],te=$[1],ae=Object(l.useState)(K[0].value),ne=Object(o.a)(ae,2),re=ne[0],ce=ne[1],oe=Object(l.useState)({hasAcceptedMarketing:null,isProspect:null,isReturning:null}),le=Object(o.a)(oe,2),ie=le[0],ue=le[1],se=function(e){v(e.target.checked?t.map((function(e){return e.id})):[])},de=function(e,t,a){return e.filter((function(e){var n=!0;if(t){var r=!1;["title","description"].forEach((function(a){a in e&&e[a].toLowerCase().includes(t.toLowerCase())&&(r=!0)})),r||(n=!1)}return Object.keys(a).forEach((function(t){var r=a[t];r&&e[t]!==r&&(n=!1)})),n}))}(t,ee,ie),me=function(e,t,a){return e.slice(t*a,t*a+a)}(Y(de,re),x,P),pe=h.length>0,fe=h.length>0&&h.length<t.length,be=h.length===t.length;return i.a.createElement(N.a,Object.assign({className:Object(g.default)(n.root)},a),i.a.createElement(A.a,{onChange:function(e,t){var a=Object(S.a)(Object(S.a)({},ie),{},{hasAcceptedMarketing:null,isProspect:null,isReturning:null});"all"!==t&&(a[t]=!0),ue(a),v([]),s(t)},scrollButtons:"auto",textColor:"secondary",value:u,variant:"scrollable"},V.map((function(e){return i.a.createElement(z.a,{key:e.value,value:e.value,label:e.label})}))),i.a.createElement(I.a,null),i.a.createElement(d.a,{p:2,minHeight:56,display:"flex",alignItems:"center"},i.a.createElement(R.a,{className:n.queryField,InputProps:{startAdornment:i.a.createElement(q.a,{position:"start"},i.a.createElement(j.a,{fontSize:"small",color:"action"},i.a.createElement(Q.a,null)))},onChange:function(e){e.persist(),te(e.target.value)},placeholder:"T\xecm ki\u1ebfm",value:ee,variant:"outlined"}),i.a.createElement(d.a,{flexGrow:1}),i.a.createElement(R.a,{label:"S\u1eafp x\u1ebfp",name:"sort",onChange:function(e){e.persist(),ce(e.target.value)},select:!0,SelectProps:{native:!0},value:re,variant:"outlined"},K.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.label)})))),pe&&i.a.createElement("div",{className:n.bulkOperations},i.a.createElement("div",{className:n.bulkActions},i.a.createElement(M.a,{checked:be,indeterminate:fe,onChange:se}),i.a.createElement(O.a,{variant:"outlined",className:n.bulkAction},"Check"))),i.a.createElement(L.a,null,i.a.createElement(d.a,{minWidth:700},i.a.createElement(B.a,null,i.a.createElement(D.a,null,i.a.createElement(F.a,null,i.a.createElement(W.a,{padding:"checkbox"},i.a.createElement(M.a,{checked:be,indeterminate:fe,onChange:se})),i.a.createElement(W.a,null,"T\xean"),i.a.createElement(W.a,null,"M\xf4 t\u1ea3"),i.a.createElement(W.a,null,"Catalog"),i.a.createElement(W.a,{align:"right"},"Action"))),i.a.createElement(H.a,null,me.map((function(e){var t=h.includes(e.id);return i.a.createElement(F.a,{hover:!0,key:e.id,selected:t},i.a.createElement(W.a,{padding:"checkbox"},i.a.createElement(M.a,{checked:t,onChange:function(t){return a=e.id,void(h.includes(a)?v((function(e){return e.filter((function(e){return e!==a}))})):v((function(e){return[].concat(Object(C.a)(e),[a])})));var a},value:t})),i.a.createElement(W.a,null,i.a.createElement(d.a,{display:"flex",alignItems:"center"},e.name)),i.a.createElement(W.a,null,e.desc),i.a.createElement(W.a,null,e.catalog),i.a.createElement(W.a,{align:"right"},i.a.createElement(J.a,{component:b.a,to:"/teacher/management/theories/edit/"+e.id},i.a.createElement(j.a,{fontSize:"small"},i.a.createElement(U.a,null)))))})))))),i.a.createElement(G.a,{component:"div",count:de.length,onChangePage:function(e,t){k(t)},onChangeRowsPerPage:function(e){T(parseInt(e.target.value))},page:x,rowsPerPage:P,rowsPerPageOptions:[5,10,25]}))};$.defaultProps={theories:[]};var ee=$,te=a(2234),ae=a(25),ne=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=ne(),t=Object(p.a)(),a=Object(l.useState)([]),n=Object(o.a)(a,2),u=n[0],f=n[1],b=Object(ae.a)().user,g=Object(l.useCallback)(Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(te.c)(b.userId);case 3:a=e.sent,t.current&&(f(a),console.log(a)),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])}))),[t]);return Object(l.useEffect)((function(){g()}),[g]),i.a.createElement(m.a,{className:e.root,title:"Tr\u01b0\u1eddng h\u1ecdc"},i.a.createElement(s.a,{maxWidth:!1},i.a.createElement(P,null),i.a.createElement(d.a,{mt:3},i.a.createElement(ee,{theories:u}))))}}}]);
//# sourceMappingURL=89.cce7d313.chunk.js.map