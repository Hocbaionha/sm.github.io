(this["webpackJsonp@devias-io/material-kit-pro-react"]=this["webpackJsonp@devias-io/material-kit-pro-react"]||[]).push([[85],{1258:function(e,t,a){"use strict";var n=a(0);t.a=function(){var e=Object(n.useRef)(!0);return Object(n.useEffect)((function(){return function(){e.current=!1}}),[]),e}},1278:function(e,t,a){"use strict";var n=a(225),r=a(224);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var c=r(a(0)),l=(0,n(a(227)).default)(c.createElement("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext");t.default=l},1588:function(e,t,a){"use strict";t.a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.replace(/\s+/," ").split(" ").slice(0,2).map((function(e){return e&&e[0].toUpperCase()})).join("")}},1680:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(3),l=a.n(c);function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=Object(n.forwardRef)((function(e,t){var a=e.color,n=void 0===a?"currentColor":a,c=e.size,l=void 0===c?24:c,u=i(e,["color","size"]);return r.a.createElement("svg",o({ref:t,xmlns:"http://www.w3.org/2000/svg",width:l,height:l,viewBox:"0 0 24 24",fill:"none",stroke:n,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},u),r.a.createElement("circle",{cx:"12",cy:"12",r:"10"}),r.a.createElement("line",{x1:"12",y1:"8",x2:"12",y2:"16"}),r.a.createElement("line",{x1:"8",y1:"12",x2:"16",y2:"12"}))}));u.propTypes={color:l.a.string,size:l.a.oneOfType([l.a.string,l.a.number])},u.displayName="PlusCircle",t.a=u},2237:function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return f}));var n=a(9),r=a.n(n),c=a(24),l=a(14),o=a(53),i=a(184),u=a.n(i);function s(){return m.apply(this,arguments)}function m(){return(m=Object(l.a)(r.a.mark((function e(){var t,a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.a.firestore().collection("mentors").get();case 3:return t=e.sent,a=t.docs.map((function(e){return Object(c.a)({id:e.id},e.data())})),e.abrupt("return",a);case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))).apply(this,arguments)}function f(e){return p.apply(this,arguments)}function p(){return(p=Object(l.a)(r.a.mark((function e(t){return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.forEach(function(){var e=Object(l.a)(r.a.mark((function e(t){var a,n,c;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return console.log(t),e.next=3,o.a.firestore().collection("users").doc(t).get();case 3:a=e.sent,n=a.data(),c={firstname:n.firstname,lastname:n.lastname,email:n.email,status:1},"undefined"!==typeof n.avatar_url&&(c.avatar_url=n.avatar_url),"undefined"===typeof n.display_name?c.display_name=n.lastname+" "+n.firstname:c.display_name=n.display_name,o.a.firestore().collection("mentors").doc(t).set(c),o.a.firestore().collection("users").doc(t).update({roles:u.a.firestore.FieldValue.arrayUnion("mentor")});case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),console.log("done");case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},2746:function(e,t,a){"use strict";a.r(t);var n=a(9),r=a.n(n),c=a(14),l=a(17),o=a(0),i=a.n(o),u=a(380),s=a(1180),m=a(374),f=a(390),p=a(1258),d=a(28),v=a(8),b=a(2),g=a(1188),h=a(1233),E=a(1191),O=a(84),j=a(1151),y=a(181),k=a(1278),w=a.n(k),x=a(1680),P=Object(u.a)((function(e){return{root:{},action:{marginBottom:e.spacing(1),"& + &":{marginLeft:e.spacing(1)}}}})),C=function(e){var t=e.className,a=Object(d.a)(e,["className"]),n=P();return i.a.createElement(g.a,Object.assign({className:Object(b.default)(n.root,t),container:!0,justify:"space-between",spacing:3},a),i.a.createElement(g.a,{item:!0},i.a.createElement(h.a,{separator:i.a.createElement(w.a,{fontSize:"small"}),"aria-label":"breadcrumb"},i.a.createElement(E.a,{variant:"body1",color:"inherit",to:"/hbon/management/schools",component:v.a},"Trang ch\u1ee7"),i.a.createElement(E.a,{variant:"body1",color:"inherit",to:"#",component:v.a},"Qu\u1ea3n l\xfd"),i.a.createElement(O.a,{variant:"body1",color:"textPrimary"},"N\u1ed9i dung")),i.a.createElement(O.a,{variant:"h3",color:"textPrimary"},"Danh s\xe1ch Mentor")),i.a.createElement(g.a,{item:!0},i.a.createElement(E.a,{to:"/hbon/management/mentors/create",component:v.a},i.a.createElement(j.a,{color:"secondary",variant:"contained",startIcon:i.a.createElement(y.a,{fontSize:"small"},i.a.createElement(x.a,null))},"Th\xeam Mentor"))))},N=a(57),S=a(24),_=a(78),L=a.n(_),T=a(1174),z=a(1230),I=a(1198),A=a(1187),M=a(1161),R=a(1189),B=a(1163),F=a(1155),H=a(1199),W=a(1160),q=a(1157),J=a(1156),U=a(1164),D=a(1226),G=(a(1588),[{value:"all",label:"T\u1ea5t c\u1ea3"}]),Q=[{value:0,label:"Init"},{value:2,label:"active"},{value:2,label:"canceled"}],V=[{value:"firstname|desc",label:"firstname (newest first)"},{value:"firstname|asc",label:"firstname (oldest first)"},{value:"mentorname|desc",label:"mentorname (gi\u1ea3m)"},{value:"mentorname|asc",label:"mentorname (t\u0103ng)"}],K=function(e,t,a){return t[a]<e[a]?-1:t[a]>e[a]?1:0},X=function(e,t){var a=t.split("|"),n=Object(l.a)(a,2),r=n[0],c=function(e,t){return"desc"===e?function(e,a){return K(e,a,t)}:function(e,a){return-K(e,a,t)}}(n[1],r),o=e.map((function(e,t){return[e,t]}));return o.sort((function(e,t){var a=c(e[0],t[0]);return 0!==a?a:e[1]-t[1]})),o.map((function(e){return e[0]}))},Y=Object(u.a)((function(e){return{root:{},queryField:{width:500},bulkOperations:{position:"relative"},bulkActions:{paddingLeft:4,paddingRight:4,marginTop:6,position:"absolute",width:"100%",zIndex:2,backgroundColor:e.palette.background.default},bulkAction:{marginLeft:e.spacing(2)},avatar:{height:42,width:42,marginRight:e.spacing(1)}}})),Z=function(e){var t=e.className,a=e.mentors,n=Object(d.a)(e,["className","mentors"]),r=Y(),c=Object(o.useState)("all"),u=Object(l.a)(c,2),s=u[0],f=u[1],p=Object(o.useState)([]),v=Object(l.a)(p,2),g=v[0],h=v[1],E=Object(o.useState)(0),O=Object(l.a)(E,2),k=O[0],w=O[1],x=Object(o.useState)(10),P=Object(l.a)(x,2),C=P[0],_=P[1],K=Object(o.useState)(""),Z=Object(l.a)(K,2),$=Z[0],ee=Z[1],te=Object(o.useState)(V[0].value),ae=Object(l.a)(te,2),ne=ae[0],re=ae[1],ce=Object(o.useState)({hasAcceptedMarketing:null,isProspect:null,isReturning:null}),le=Object(l.a)(ce,2),oe=le[0],ie=le[1],ue=function(e){h(e.target.checked?a.map((function(e){return e.id})):[])},se=function(e,t,a){return e.filter((function(e){var n=!0;if(t){var r=!1;["firstname","lastname","mentorname"].forEach((function(a){a in e&&e[a].toLowerCase().includes(t.toLowerCase())&&(r=!0)})),r||(n=!1)}return Object.keys(a).forEach((function(t){var r=a[t];r&&e[t]!==r&&(n=!1)})),n}))}(a,$,oe),me=function(e,t,a){return e.slice(t*a,t*a+a)}(X(se,ne),k,C),fe=g.length>0,pe=g.length>0&&g.length<a.length,de=g.length===a.length;return i.a.createElement(T.a,Object.assign({className:Object(b.default)(r.root,t)},n),i.a.createElement(z.a,{onChange:function(e,t){var a=Object(S.a)(Object(S.a)({},oe),{},{hasAcceptedMarketing:null,isProspect:null,isReturning:null});"all"!==t&&(a[t]=!0),ie(a),h([]),f(t)},scrollButtons:"auto",textColor:"secondary",value:s,variant:"scrollable"},G.map((function(e){return i.a.createElement(I.a,{key:e.value,value:e.value,label:e.label})}))),i.a.createElement(A.a,null),i.a.createElement(m.a,{p:2,minHeight:56,display:"flex",alignItems:"center"},i.a.createElement(M.a,{className:r.queryField,InputProps:{startAdornment:i.a.createElement(R.a,{position:"start"},i.a.createElement(y.a,{fontSize:"small",color:"action"},i.a.createElement(D.a,null)))},onChange:function(e){e.persist(),ee(e.target.value)},placeholder:"T\xecm ki\u1ebfm",value:$,variant:"outlined"}),i.a.createElement(m.a,{flexGrow:1}),i.a.createElement(M.a,{label:"S\u1eafp x\u1ebfp",name:"sort",onChange:function(e){e.persist(),re(e.target.value)},select:!0,SelectProps:{native:!0},value:ne,variant:"outlined"},V.map((function(e){return i.a.createElement("option",{key:e.value,value:e.value},e.label)})))),fe&&i.a.createElement("div",{className:r.bulkOperations},i.a.createElement("div",{className:r.bulkActions},i.a.createElement(B.a,{checked:de,indeterminate:pe,onChange:ue}),i.a.createElement(j.a,{variant:"outlined",className:r.bulkAction,onClick:function(){}},"H\u1ee7y vai tr\xf2 Mentor"))),i.a.createElement(L.a,null,i.a.createElement(m.a,{minWidth:700},i.a.createElement(F.a,null,i.a.createElement(H.a,null,i.a.createElement(W.a,null,i.a.createElement(q.a,{padding:"checkbox"},i.a.createElement(B.a,{checked:de,indeterminate:pe,onChange:ue})),i.a.createElement(q.a,null,"firstname"),i.a.createElement(q.a,null,"lastname"),i.a.createElement(q.a,null,"mentorname"),i.a.createElement(q.a,null,"email"),i.a.createElement(q.a,null,"uid"),i.a.createElement(q.a,null,"status"))),i.a.createElement(J.a,null,me.map((function(e){"reactions"in e&&(e.reactions.upvotes,e.reactions.downvotes);var t=g.includes(e.id);return"tags"in e||(e.tags=[""]),i.a.createElement(W.a,{hover:!0,key:e.id,selected:t},i.a.createElement(q.a,{padding:"checkbox"},i.a.createElement(B.a,{checked:t,onChange:function(t){return a=e.id,void(g.includes(a)?h((function(e){return e.filter((function(e){return e!==a}))})):h((function(e){return[].concat(Object(N.a)(e),[a])})));var a},value:t})),i.a.createElement(q.a,null,i.a.createElement(m.a,{display:"flex",alignItems:"center"},e.firstname)),i.a.createElement(q.a,null,e.lastname),i.a.createElement(q.a,null,e.display_name),i.a.createElement(q.a,null,e.email),i.a.createElement(q.a,null,e.id),i.a.createElement(q.a,null,Q[e.status].label))})))))),i.a.createElement(U.a,{component:"div",count:se.length,onChangePage:function(e,t){w(t)},onChangeRowsPerPage:function(e){_(parseInt(e.target.value))},page:k,rowsPerPage:C,rowsPerPageOptions:[5,10,25]}))};Z.defaultProps={mentors:[]};var $=Z,ee=a(2237),te=Object(u.a)((function(e){return{root:{backgroundColor:e.palette.background.dark,minHeight:"100%",paddingTop:e.spacing(3),paddingBottom:e.spacing(3)}}}));t.default=function(){var e=te(),t=Object(p.a)(),a=Object(o.useState)([]),n=Object(l.a)(a,2),u=n[0],d=n[1],v=Object(o.useCallback)(Object(c.a)(r.a.mark((function e(){var a;return r.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Object(ee.b)();case 3:a=e.sent,console.log(a),t.current&&d(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),[t]);return Object(o.useEffect)((function(){v()}),[v]),i.a.createElement(f.a,{className:e.root,title:"Tr\u01b0\u1eddng h\u1ecdc"},i.a.createElement(s.a,{maxWidth:!1},i.a.createElement(C,null),i.a.createElement(m.a,{mt:3},i.a.createElement($,{mentors:u}))))}}}]);
//# sourceMappingURL=85.9719eb61.chunk.js.map