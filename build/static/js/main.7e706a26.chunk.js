(this["webpackJsonpavionics-tools"]=this["webpackJsonpavionics-tools"]||[]).push([[0],{112:function(e,t,a){},169:function(e){e.exports=JSON.parse('[{"uname":"Patrick","pwd":"Patrick"},{"uname":"Admin","pwd":"Admin"}]')},170:function(e){e.exports=JSON.parse('[{"item":"Soldering Iron","quantity":47},{"item":"Desoldering Pump","quantity":30},{"item":"Magnifying Glass","quantity":3},{"item":"Cutter","quantity":16},{"item":"Wire Stipper","quantity":17},{"item":"Crimping Tool","quantity":4},{"item":"Bolt Cutter","quantity":13},{"item":"Needle Nose","quantity":12},{"item":"Side Cutter","quantity":17},{"item":"Gun Tucker","quantity":4},{"item":"Hammer Head","quantity":6},{"item":"Mini Nose Pliers","quantity":4},{"item":"Nose Wheel","quantity":2},{"item":"Wire Twister Pliers","quantity":5},{"item":"Allen Wrench","quantity":6},{"item":"Coil (Roll)","quantity":2},{"item":"Precision Flat Nose Flier","quantity":6},{"item":"Tape Measure","quantity":2},{"item":"Vernier Caliper","quantity":5},{"item":"Logic Trainer","quantity":17},{"item":"Analog Multitester","quantity":13},{"item":"Intercom Set","quantity":3},{"item":"Precision Screwdriver","quantity":22},{"item":"Probe","quantity":20},{"item":"AC-DC Converter","quantity":4},{"item":"Precsion Screwdriver Sets","quantity":22},{"item":"Screwdriver Sets","quantity":12},{"item":"Adjustable Circle Cutter","quantity":1},{"item":"Holesaw Set","quantity":1},{"item":"15 Precision Screwdriver Set","quantity":1},{"item":"Professional Set","quantity":3},{"item":"Electric Heat Gun","quantity":4},{"item":"Helping Hand Magnifier","quantity":4},{"item":"Claw Hammer","quantity":23},{"item":"Rubber Mallet","quantity":6},{"item":"6V Adaptor","quantity":10},{"item":"9V Adaptor","quantity":15},{"item":"12V Adaptor","quantity":3},{"item":"Socket Wrench Set","quantity":1},{"item":"Half Round File","quantity":3},{"item":"Flat File","quantity":3},{"item":"Triangle File","quantity":4},{"item":"Square File","quantity":3},{"item":"Round File","quantity":6},{"item":"Combination Wrench Set","quantity":1},{"item":"Glue Gun","quantity":20},{"item":"Measuring Tape","quantity":15},{"item":"Mini Drill","quantity":12},{"item":"Analog Oscilloscope","quantity":1},{"item":"Digital Oscilloscope","quantity":1},{"item":"DC Power Supply","quantity":6},{"item":"Battery Reacticator Automatic Charger","quantity":1},{"item":"Frequency Counter","quantity":2}]')},191:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(16),c=a.n(i),o=(a(112),a(9)),s=a(196),l=a(193),u=a(195),d=a(100),m=function(e){var t=Object(d.a)(e),a=t[0],n=t.slice(1);return"".concat(a.toUpperCase()).concat(n.join("").toLowerCase())},b=function(e){return function(e){var t=e.source,a=e.padChar,n=void 0===a?" ":a,r=e.length,i=Math.max(t.length,r),c=Array.from(Array(i-t.length).keys()).map((function(e){return n})).join("");return t.concat(c)}({source:e,length:15})},j=function(e){return/^[a-zA-Z ]+$/.test(e)},h=a(1),O=function(e){return Object(h.jsx)(s.a,{collapseOnSelect:!0,expand:"lg",bg:"primary",variant:"dark",children:Object(h.jsxs)(l.a,{children:[Object(h.jsx)(s.a.Brand,{children:"Avionics Tools"}),e.username?f(e):Object(h.jsx)(h.Fragment,{})]})})},f=function(e){var t=e.username,a=e.onLogout,n=e.onDashboard,r=e.onInventory,i=e.onBorrowers;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(s.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(h.jsx)(s.a.Collapse,{id:"responsive-navbar-nav",children:Object(h.jsxs)(u.a,{className:"me-auto",defaultActiveKey:"#dashboard",children:[Object(h.jsx)(u.a.Link,{href:"#dashboard",onClick:n,children:"Dashboard"}),Object(h.jsx)(u.a.Link,{href:"#inventory",onClick:r,children:"Inventory"}),Object(h.jsx)(u.a.Link,{href:"#borrower",onClick:i,children:"Borrower"})]})}),Object(h.jsxs)(s.a.Collapse,{className:"justify-content-end",children:[Object(h.jsx)(s.a.Text,{children:Object(h.jsxs)("small",{children:["Signed in as: ",m(t)]})}),Object(h.jsx)(u.a,{children:Object(h.jsx)(u.a.Link,{eventKey:2,onClick:a,children:"Logout"})})]})]})},y=a(2),v=a(8),x=a(69),p=a.n(x),w=a(32),g=a.n(w),N=a(194),D=function(e){var t=e.list,a=void 0===t?[]:t,n=e.fieldNames,r=void 0===n?[]:n,i=e.delimiter,c=void 0===i?" ":i;return a.reduce((function(e,t){var a=r.map((function(e){return m(t[e])})).join(c);return Object(y.a)(Object(y.a)({},e),{},Object(v.a)({},a,(e[a]||[]).concat(t)))}),{})},C=function(e){var t=e.list,a=void 0===t?[]:t,n=e.byFieldName,r=void 0===n?"":n,i=e.fieldNameToSum,c=void 0===i?"":i,o=D({list:a,fieldNames:[r]});return Object.keys(o).reduce((function(e,t){return e.concat({byFieldName:t,sum:o[t].reduce((function(e,t){return e+t[c]}),0)})}),[])},q="BORROW_TOOL",S="RETURN_TOOL",T="BORROW_AND_RETURN_TOOL",F="OUT_OF_STOCK",R=function(e){var t=e.total,a=e.available;return 0===t&&0===a?F:t>0&&0===a?S:t>0&&t===a?q:T},B={option:function(e,t){return Object(y.a)(Object(y.a)({},e),{},{whiteSpace:"pre-wrap"})}},k=a(169),L=a(170),I="LOGIN",A="LOGOUT",P="ADD_TRANSACTION",E={BORROWED:"BORROWED",RETURNED:function(e){return"RETURNED ".concat(e)},getReturnedTransactionDate:function(e){return Number(e.split(" ")[1]||0)}},U={userLoggedIn:void 0,transactions:[]},W=function(){var e="avionics_tools_state";return{set:function(t){return localStorage.setItem(e,JSON.stringify(t))},getState:function(){return JSON.parse(localStorage.getItem(e))}}}(),H=function(e,t){switch(t.type){case I:var a=Object(y.a)(Object(y.a)({},e),{},{userLoggedIn:t.payload});return W.set(a),a;case A:var n=Object(y.a)(Object(y.a)({},e),{},{userLoggedIn:void 0});return W.set(n),n;case P:var r=Object(y.a)(Object(y.a)({},e),{},{transactions:e.transactions.concat(t.payload)});return W.set(r),r}},M=Object(n.createContext)(U),_=function(){var e=Object(n.useContext)(M);if(void 0===e)throw new Error("useLocalDB must be used within a LocalDBProvider");return e},G=function(e){return e.filter((function(e){return e.type===E.BORROWED})).reduce((function(e,t){var a=t.quantity;return e+Number(a)}),0)},V=function(e){return e.filter((function(e){return e.type!==E.BORROWED})).reduce((function(e,t){var a=t.quantity;return e+Number(a)}),0)},Y=function(e){return D({list:e,fieldNames:["firstName","lastName"]})},z=function(e){var t=e.children,a=Object(n.useReducer)(H,Object(y.a)(Object(y.a)({},U),W.getState())),r=Object(o.a)(a,2),i=r[0],c=r[1],s=function(){return i.userLoggedIn},l=function(){return{approver:s(),transactionDate:(new Date).getTime()}},u=function(e){var t=e.item,a=Y(i.transactions);return Object.keys(a).reduce((function(e,n){var r=a[n],i=void 0===t?r:r.filter((function(e){return e.item.toLowerCase()===t.toLowerCase()})),c=i.filter((function(e){return e.type!==E.BORROWED})).map((function(e){var t=e.type;return E.getReturnedTransactionDate(t)})),o=i.filter((function(e){return!c.includes(e.transactionDate)&&e.type===E.BORROWED}));return 0===o.length?e:Object(y.a)(Object(y.a)({},e),{},Object(v.a)({},n,o))}),{})};return Object(h.jsx)(M.Provider,{value:{getCurrentUser:s,doesUserExists:function(e){var t=e.username,a=e.password;return k.some((function(e){var n=e.uname,r=e.pwd;return n.toLowerCase()===t.toLowerCase()&&r.toLowerCase()===a.toLowerCase()}))},login:function(e){c({type:I,payload:e})},logout:function(){c({type:A,payload:void 0})},getInventory:function(){var e=function(){var e=D({list:i.transactions,fieldNames:["item"]});return Object.keys(e).reduce((function(t,a){var n=e[a],r=(L.find((function(e){return e.item.toLowerCase()===a.toLowerCase()}))||{}).quantity,i=void 0===r?0:r,c=i-(G(n)-V(n)),o=Y(n),s=Object.keys(o).reduce((function(e,t){var a=o[t],n=G(a)-V(a);return 0===n?e:e.concat("".concat(t," (").concat(n,")"))}),[]),l=R({total:i,available:c});return t.concat({item:a,total:i,available:c,borrowers:s,action:l})}),[])}(),t=L.filter((function(t){return!e.some((function(e){return e.item.toLowerCase()===t.item.toLowerCase()}))}));return e.concat(t.map((function(e){return{item:e.item,total:e.quantity,available:e.quantity,borrowers:[],action:R({total:e.quantity,available:e.quantity})}})))},getBorrowers:u,borrowTool:function(e){var t=Object(y.a)(Object(y.a)(Object(y.a)({},e),l()),{},{type:E.BORROWED});console.log("borrowTransaction",t),c({type:P,payload:t})},returnTool:function(e){var t=e.transactionDate,a=Object(y.a)(Object(y.a)(Object(y.a)({},e),l()),{},{type:E.RETURNED(t)});console.log("returnTransaction",a),c({type:P,payload:a})},getTransaction:function(e){var t=e.transactionDate;return i.transactions.find((function(e){return e.transactionDate===t}))},getAllBorrowers:function(){var e=u({item:void 0});return Object.keys(e).reduce((function(t,a){return t.concat({name:a,items:e[a]})}),[])}},children:t})},J=a(198),K=a(90),Q=function(e){var t=e.state,a=e.handleClose,r=Object(n.useState)({selectedName:t.borrowerName,selectedTransactionDate:t.transactionDate}),i=Object(o.a)(r,2),c=i[0],s=i[1];Object(n.useEffect)((function(){s({selectedName:t.borrowerName,selectedTransactionDate:t.transactionDate})}),[t]);var l=_(),u=l.getTransaction,d=l.returnTool;return Object(h.jsxs)(J.a,{show:t.show,onHide:a,children:[Object(h.jsx)(J.a.Header,{closeButton:!0,children:Object(h.jsx)(J.a.Title,{children:t.header})}),Object(h.jsxs)(J.a.Body,{children:[Object(h.jsx)("div",{className:"w-100 mb-3",children:Object(h.jsx)(K.a,{styles:B,value:{value:c.selectedName||"Select a borrower",label:c.selectedName||"Select a borrower"},onChange:function(e){var a,n=e.value;s({selectedName:n,selectedTransactionDate:null===(a=(t.borrowers[n]||[])[0])||void 0===a?void 0:a.transactionDate}),console.log("handleNameChange ".concat(n))},options:Object.keys(t.borrowers).map((function(e){return{value:e,label:e}}))})}),Object(h.jsx)("div",{className:"w-100 mb-3",children:Object(h.jsx)(K.a,{styles:B,value:function(){var e=(t.borrowers[c.selectedName]||[]).find((function(e){var t=e.transactionDate;return"".concat(t)==="".concat(c.selectedTransactionDate)}));return{value:e?e.transactionDate:"Select an item",label:e?"".concat(e.quantity," ").concat(e.item," with return date of ").concat(e.returnDate," and transaction date ").concat(new Date(e.transactionDate)):"Select an item"}}(),onChange:function(e){var t=Number(e.value);s({selectedName:c.selectedName,selectedTransactionDate:t}),console.log("handleDetailsChange ".concat(t))},options:(t.borrowers[c.selectedName]||[]).map((function(e){return{value:e.transactionDate,label:"".concat(e.quantity," ").concat(e.item," with return date of ").concat(e.returnDate," and transaction date of ").concat(new Date(e.transactionDate))}}))})})]}),Object(h.jsxs)(J.a.Footer,{children:[Object(h.jsx)(N.a,{variant:"secondary",onClick:a,children:"Cancel"}),Object(h.jsx)(N.a,{variant:"primary",onClick:function(){var e=u({transactionDate:c.selectedTransactionDate});void 0!==e?(d(e),a()):console.error("Transaction date (".concat(c.selectedTransactionDate,") not found."))},children:"Return Tool"})]})]})},Z=(a(46),w.Search.SearchBar),$=w.Search.ClearSearchButton,X=function(){var e=_().getAllBorrowers,t=Object(n.useState)({header:"",show:!1,item:"",borrowers:{},borrowerName:"",transactionDate:0}),a=Object(o.a)(t,2),r=a[0],i=a[1],c=[{dataField:"name",text:"Borrower Name",searchable:!0,sort:!0},{dataField:"items",text:"Borrowed Items",formatter:function(e,t){return Object(h.jsx)("div",{children:C({list:e,byFieldName:"item",fieldNameToSum:"quantity"}).map((function(e,t){return Object(h.jsx)("div",{children:"".concat(e.sum," ").concat(e.byFieldName)},t)}))})},searchable:!1},{dataField:"action",text:"Action",formatter:function(e,t){return Object(h.jsx)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:Object(h.jsx)(N.a,{variant:"outline-primary",size:"sm",onClick:function(){var e=Object(v.a)({},t.name,t.items),a=t.items[0];i({header:"Return tool for ".concat(t.name),show:!0,item:a.item,borrowers:e,borrowerName:t.name,transactionDate:a.transactionDate})},children:"Return Tool"})})},searchable:!1,headerStyle:function(e,t){return{width:"20%"}}}];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(Q,{state:r,handleClose:function(){return i({header:"",show:!1,item:"",borrowers:{},borrowerName:"",transactionDate:0})}}),Object(h.jsx)(g.a,{bootstrap4:!0,keyField:"name",data:e(),columns:c,search:{defaultSearch:""},children:function(e){return Object(h.jsxs)("div",{className:"w-75 container-center",children:[Object(h.jsx)("br",{className:"mt-30"}),Object(h.jsx)(Z,Object(y.a)(Object(y.a)({},e.searchProps),{},{srText:"Search by Borrower Name",placeholder:"Borrower Name"})),Object(h.jsx)($,Object(y.a)({},e.searchProps)),Object(h.jsx)("br",{className:"mt-30"}),Object(h.jsx)("br",{className:"mt-30"}),Object(h.jsx)(p.a,Object(y.a)(Object(y.a)({},e.baseProps),{},{noDataIndication:"No Borrowers",hover:!0,condensed:!0,striped:!0,bordered:!1}))]})}})]})},ee=a(199),te=a(200),ae=function(){return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("br",{className:"mt-30"}),Object(h.jsx)("div",{className:"w-75 h-25 container-center",children:Object(h.jsxs)(ee.a,{className:"container-center",bg:"primary",text:"white",children:[Object(h.jsx)(ee.a.Header,{as:"h6",children:"About"}),Object(h.jsx)(te.a,{variant:"flush",children:Object(h.jsx)(te.a.Item,{children:" Avionics (a blend of aviation and electronics) are the electronic systems used on aircraft, artificial satellites, and spacecraft. Avionic systems include communications, navigation, the display and management of multiple systems, and the hundreds of systems that are fitted to aircraft to perform individual functions. These can be as simple as a searchlight for a police helicopter or as complicated as the tactical system for an airborne early warning platform."})})]})}),Object(h.jsx)("br",{className:"mt-30"}),Object(h.jsx)("div",{className:"w-75 container-center",children:Object(h.jsxs)(ee.a,{bg:"primary",text:"white",children:[Object(h.jsx)(ee.a.Header,{as:"h6",children:"Contacts"}),Object(h.jsxs)(te.a,{children:[Object(h.jsx)(te.a.Item,{children:"Patrick Fernandez"}),Object(h.jsx)(te.a.Item,{children:"Jen Cruz"})]})]})})]})},ne=a(77),re=a(89),ie=a.n(re),ce=a(74),oe=a(201),se=a(104),le=function(e){var t=e.state,a=e.handleClose,n=_().borrowTool;return Object(h.jsx)(ce.a,{initialValues:{firstName:"",lastName:"",quantity:1,returnDate:""},validateOnChange:!1,validateOnBlur:!1,validate:function(e){return Object(y.a)(Object(y.a)(Object(y.a)(Object(y.a)(Object(y.a)(Object(y.a)(Object(y.a)({},0===e.firstName.length?{firstName:"First name is required."}:{}),e.firstName.length>0&&!j(e.firstName)?{firstName:"First name should not have space, numeric or special character"}:{}),0===e.lastName.length?{lastName:"Last name is required."}:{}),e.lastName.length>0&&!j(e.lastName)?{lastName:"Last name should not have space, numeric or special character"}:{}),Number(e.quantity)<=0?{quantity:"Quantity is required"}:{}),0===e.returnDate.length?{returnDate:"Return date is required"}:{}),e.returnDate.length>0&&ie()(e.returnDate,"MM/DD/YYYY").isBefore(ie()(),"day")?{returnDate:"Return date cannot be from the past"}:{})},onSubmit:function(e,r){var i=r.resetForm;n(Object(y.a)(Object(y.a)({},e),{},{quantity:Number(e.quantity),item:t.item})),i(),a()},children:function(e){var n=e.handleSubmit,r=e.handleChange,i=e.resetForm,c=e.values,o=e.errors,s=function(){i(),a()};return Object(h.jsxs)(J.a,{show:t.show,onHide:s,children:[Object(h.jsx)(J.a.Header,{closeButton:!0,children:Object(h.jsx)(J.a.Title,{children:"Borrow ".concat(t.item," tool")})}),Object(h.jsxs)(J.a.Body,{children:[Object(h.jsxs)(oe.a,{className:"mb-3",children:[Object(h.jsx)(oe.a.Text,{children:b("First Name")}),Object(h.jsx)(se.a,{"aria-label":"First name",type:"text",name:"firstName",value:c.firstName,onChange:r,isInvalid:!!o.firstName}),Object(h.jsx)(se.a.Feedback,{type:"invalid",children:o.firstName})]}),Object(h.jsxs)(oe.a,{className:"mb-3",children:[Object(h.jsx)(oe.a.Text,{children:b("Last Name")}),Object(h.jsx)(se.a,{"aria-label":"Last name",type:"text",name:"lastName",value:c.lastName,onChange:r,isInvalid:!!o.lastName}),Object(h.jsx)(se.a.Feedback,{type:"invalid",children:o.lastName})]}),Object(h.jsxs)(oe.a,{className:"mb-3",children:[Object(h.jsx)(oe.a.Text,{children:"Quantity"}),Object(h.jsx)(se.a,{as:"select",name:"quantity",value:c.quantity,onChange:r,isInvalid:!!o.quantity,children:Object(ne.a)(Array(t.available).keys()).map((function(e){return e+1})).map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))}),Object(h.jsx)(se.a.Feedback,{type:"invalid",children:o.quantity})]}),Object(h.jsxs)(oe.a,{className:"mb-3",children:[Object(h.jsx)(oe.a.Text,{children:"Return Date"}),Object(h.jsx)(se.a,{"aria-label":"Return Date",type:"date",name:"returnDate",dateFormat:"YYYY-MM-DD",value:c.returnDate,onChange:r,isInvalid:!!o.returnDate}),Object(h.jsx)(se.a.Feedback,{type:"invalid",children:o.returnDate})]})]}),Object(h.jsxs)(J.a.Footer,{children:[Object(h.jsx)(N.a,{variant:"secondary",onClick:s,children:"Cancel"}),Object(h.jsx)(N.a,{variant:"primary",onClick:n,children:"Borrow Tool"})]})]})}})},ue=w.Search.SearchBar,de=w.Search.ClearSearchButton,me=function(){var e=_(),t=e.getInventory,a=e.getBorrowers,r=Object(n.useState)({show:!1,item:"",available:0}),i=Object(o.a)(r,2),c=i[0],s=i[1],l=Object(n.useState)({header:"",show:!1,item:"",borrowers:{},borrowerName:"",transactionDate:0}),u=Object(o.a)(l,2),d=u[0],m=u[1],b=[{dataField:"item",text:"Item Name",searchable:!0,sort:!0},{dataField:"total",text:"Total Stocks",searchable:!1,sort:!0,headerStyle:function(e,t){return{width:"17%"}}},{dataField:"available",text:"Available Stocks",searchable:!1,sort:!0},{dataField:"borrowers",text:"Borrowers (N tools)",formatter:function(e,t){return Object(h.jsx)("div",{children:t.borrowers.map((function(e,t){return Object(h.jsx)("div",{children:e},t)}))})},searchable:!1,headerStyle:function(e,t){return{width:"23%"}}},{dataField:"action",text:"Action",formatter:function(e,t){return Object(h.jsxs)("div",{style:{display:"flex",flexDirection:"column",justifyContent:"center"},children:[" ",(e===q||e===T)&&Object(h.jsx)(N.a,{variant:"outline-primary",size:"sm",onClick:function(){return s({show:!0,item:t.item,available:t.available})},children:"Borrow Tool"}),Object(h.jsx)("div",{style:{height:10}}),(e===S||e===T)&&Object(h.jsx)(N.a,{variant:"outline-primary",size:"sm",onClick:function(){var e=a({item:t.item}),n=Object.keys(e)[0];m({header:"Return ".concat(t.item),show:!0,item:t.item,borrowers:e,borrowerName:n,transactionDate:e[n][0].transactionDate})},children:"Return Tool"})]})},searchable:!1,headerStyle:function(e,t){return{width:"20%"}}}];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(le,{state:c,handleClose:function(){return s({show:!1,item:"",available:0})}}),Object(h.jsx)(Q,{state:d,handleClose:function(){return m({headers:"",show:!1,item:"",borrowers:{},borrowerName:"",transactionDate:0})}}),Object(h.jsx)(g.a,{bootstrap4:!0,keyField:"item",data:t(),columns:b,search:{defaultSearch:""},children:function(e){return Object(h.jsxs)("div",{className:"w-75 container-center",children:[Object(h.jsx)("br",{className:"mt-30"}),Object(h.jsx)(ue,Object(y.a)(Object(y.a)({},e.searchProps),{},{srText:"Search by Tool name",placeholder:"Tool name"})),Object(h.jsx)(de,Object(y.a)({},e.searchProps)),Object(h.jsx)("br",{className:"mt-30"}),Object(h.jsx)("br",{className:"mt-30"}),Object(h.jsx)(p.a,Object(y.a)(Object(y.a)({},e.baseProps),{},{noDataIndication:"No Inventory",hover:!0,condensed:!0,striped:!0,bordered:!1}))]})}})]})},be="DASHBOARD",je="INVENTORY",he="BORROWER",Oe=function(e){var t=e.subScreenType;switch(t){case be:return Object(h.jsx)(ae,{});case je:return Object(h.jsx)(me,{});case he:return Object(h.jsx)(X,{});default:throw new Error("subScreenType ".concat(t," not found"))}},fe=function(e){var t=e.username,a=e.onLogout,r=e.defaultSubScreenType,i=void 0===r?be:r,c=Object(n.useState)(i),s=Object(o.a)(c,2),l=s[0],u=s[1];return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{username:t,onLogout:a,onDashboard:function(){return u(be)},onInventory:function(){return u(je)},onBorrowers:function(){return u(he)}}),Object(h.jsx)(Oe,{subScreenType:l})]})},ye=a(197),ve=a(105),xe=function(){var e=_(),t=e.doesUserExists,a=e.login;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)(O,{username:void 0}),Object(h.jsx)("br",{className:"mt-30"}),Object(h.jsx)(ce.a,{initialValues:{username:"",password:""},validateOnChange:!1,validateOnBlur:!1,validate:function(e){return Object(y.a)(Object(y.a)(Object(y.a)({},0===e.username.length?{username:"Username is required."}:{}),0===e.password.length?{password:"Password is required."}:{}),e.username.length>0&&e.password.length>0&&!t({username:e.username,password:e.password})?{authentication:"Username not found."}:{})},onSubmit:function(e,t){a(e.username)},children:function(e){var t=e.handleSubmit,a=e.handleChange,n=e.values,r=(e.touched,e.isValid,e.errors);return Object(h.jsxs)(ye.a,{noValidate:!0,onSubmit:t,children:[Object(h.jsx)(ye.a.Group,{className:"mb-3 w-75 container-center",controlId:"formBasicUsername",children:Object(h.jsxs)(ve.a,{controlId:"floatingInput",label:"Username",className:"mb-3",children:[Object(h.jsx)(ye.a.Control,{placeholder:"Username",type:"text",name:"username",value:n.username,onChange:a,isInvalid:!!r.username||!!r.authentication}),Object(h.jsx)(ye.a.Control.Feedback,{type:"invalid",children:r.username||r.authentication})]})}),Object(h.jsx)(ye.a.Group,{className:"mb-3 w-75 container-center",controlId:"formBasicPassword",children:Object(h.jsxs)(ve.a,{controlId:"floatingPassword",label:"Password",children:[Object(h.jsx)(ye.a.Control,{placeholder:"Password",type:"password",name:"password",value:n.password,onChange:a,isInvalid:!!r.password}),Object(h.jsx)(ye.a.Control.Feedback,{type:"invalid",children:r.password})]})}),Object(h.jsx)("div",{className:"w-75 container-center",children:Object(h.jsx)(N.a,{variant:"primary",className:"w-100",type:"submit",size:"lg",children:"Login"})})]})}})]})},pe=function(){var e=_(),t=e.getCurrentUser,a=e.logout,n=t();return n?Object(h.jsx)(fe,{username:n,onLogout:a}):Object(h.jsx)(xe,{})},we=function(e){return Object(n.useEffect)((function(){document.title="Avionics Tools"}),[]),Object(h.jsx)(z,{children:Object(h.jsx)(pe,{})})},ge=(a(187),a(188),a(189),a(190),function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,202)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,c=t.getTTFB;a(e),n(e),r(e),i(e),c(e)}))});c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(we,{})}),document.getElementById("root")),ge()},46:function(e,t,a){}},[[191,1,2]]]);
//# sourceMappingURL=main.7e706a26.chunk.js.map