(this["webpackJsonpcurrency-exchange"]=this["webpackJsonpcurrency-exchange"]||[]).push([[0],{14:function(e,t,n){e.exports={body_container:"Charts_body_container__3J2f7",input_container:"Charts_input_container__IOZAa",pairs_table:"Charts_pairs_table__eHFiO",input_lable:"Charts_input_lable__3bBb1",chart_container:"Charts_chart_container__m8RWj"}},18:function(e,t,n){e.exports={body_container:"Currency_body_container__1GRl9",input_container:"Currency_input_container__11qib",pairs_table:"Currency_pairs_table__2zDl8",input_lable:"Currency_input_lable__FABBp"}},27:function(e,t,n){e.exports={red:"SuperButton_red__248L6"}},28:function(e,t,n){},44:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n.n(r),a=n(19),i=n.n(a),s=(n(44),n(10)),u=n(1);var o=function(){return Object(u.jsxs)("div",{className:"App",children:[Object(u.jsx)(s.b,{to:"login",children:"Login"})," \xa0",Object(u.jsx)(s.b,{to:"registration",children:"Registration"})," \xa0",Object(u.jsx)(s.b,{to:"charts",children:"Charts"})," \xa0",Object(u.jsx)(s.b,{to:"Currency",children:"Currency"})," ",Object(u.jsx)("br",{}),Object(u.jsx)("div",{children:Object(u.jsx)("br",{})})]})};var l=function(){return Object(u.jsxs)("div",{className:"App",children:["Login",Object(u.jsx)("input",{})]})};var j=function(){return Object(u.jsx)("div",{className:"App",children:"Registration form"})};n(28);var b=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsx)("h1",{children:"Page not found"})})},d=n(3);var O=function(){return Object(u.jsx)("div",{className:"App",children:"Start"})},h=n(15),f=n(18),p=n.n(f),x=n(12),y=n(39),v=n(27),_=n.n(v),g=function(e){var t=e.red,n=e.className,r=Object(y.a)(e,["red","className"]),c="".concat(t?_.a.red:_.a.default," ").concat(n);return Object(u.jsx)("button",Object(x.a)({className:c},r))},m=n(11),C=n(37),D=n.n(C).a.create({baseURL:"https://www.nbrb.by/api/exrates/"}),L=function(e){return D.get("rates?ondate=".concat(e,"&periodicity=0"))},N=function(e,t,n){return D.get("Rates/Dynamics/".concat(e,"?startDate=").concat(t,"&endDate=").concat(n))},S={list:[],date:""},A=function(e){return function(t){L(e).then((function(n){t(function(e,t){return{type:"setCurrencyList",currencyList:e,currencyListDate:t}}(Object(m.a)(n.data),e))}))}},T=n(9);var F=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(T.c)((function(e){return e.currencyListReducer})),i=Object(T.b)(),s=new Date;s.setDate(s.getDate());var o=s.toISOString().substr(0,10),l=a.list.map((function(e){return Object(u.jsxs)("div",{className:p.a.pairs_table,id:e.Cur_Abbreviation,children:[Object(u.jsx)("span",{children:e.Cur_Abbreviation}),Object(u.jsx)("span",{children:e.Cur_Name}),Object(u.jsx)("span",{children:e.Cur_OfficialRate})]})}));return console.log(o),Object(u.jsxs)("div",{className:p.a.body_container,children:[Object(u.jsxs)("div",{className:p.a.input_container,children:[Object(u.jsx)("div",{className:p.a.input_lable,children:Object(u.jsx)("span",{children:"select a date for get currency rate"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{id:"currencyListDate",value:n,type:"date",name:"currencyListDate",defaultValue:o,onChange:function(){var e=document.getElementById("currencyListDate").value;c(e)}}),Object(u.jsx)(g,{red:!0,onClick:function(){i(A(n))},children:"get"})]})]}),Object(u.jsxs)("span",{children:[" ",a.date?a.date.toLocaleDateString():o,"  "]}),l]})},I=n(14),w=n.n(I),R=function(e){var t=Object(r.useRef)(null),n=function(t,n){var r=1;for(t.lineWidth=3,t.strokeStyle="yellow";r<n.length;r++)t.beginPath(),t.moveTo.apply(t,Object(m.a)(Object(x.a)({},n)[r-1])),t.lineTo.apply(t,Object(m.a)(Object(x.a)({},n)[r])),t.stroke();var c=e.currencyList.list.filter((function(t){return t.Cur_ID===+e.currencyId}));c[0]&&(t.fillStyle="#00F",t.strokeStyle="#F00",t.font="italic 20pt Arial",t.fillText("".concat(c[0].Cur_Abbreviation),200,30))};return Object(r.useEffect)((function(){if(t.current){var r=t.current,c=r.getContext("2d");if(r.style.width="400px",r.style.background="lightgray",r.style.height="200px",e.currencyChart.value){var a=e.currencyChart.value.map((function(e){return[10*+e.Date.slice(8,10),12*e.Cur_OfficialRate]}));n(c,a)}c.strokeStyle="white",c.lineWidth=.1,c.globalAlpha=.5,function(e){e.beginPath();for(var t=0;t<800;t+=20)e.moveTo(t,0),e.lineTo(t,140),e.font="5pt Arial",e.fillText("".concat(t),t,150);for(var n=0;n<400;n+=20)e.moveTo(0,n),e.lineTo(400,n),e.font="5pt Arial",e.fillText("".concat(n),0,n);e.stroke()}(c)}}),[n]),Object(u.jsxs)("div",{className:w.a.chart_container,children:[Object(u.jsxs)("span",{children:["chart for period ",e.currencyChart.dateFrom," - ",e.currencyChart.dateTill]}),Object(u.jsx)("br",{}),Object(u.jsx)("canvas",Object(x.a)(Object(x.a)({ref:t},e),e.currencyChartValue))]})},k={value:[],currencyId:"",dateFrom:"",dateTill:""};var B=function(){var e=Object(r.useState)(""),t=Object(h.a)(e,2),n=t[0],c=t[1],a=Object(r.useState)(""),i=Object(h.a)(a,2),s=i[0],o=i[1],l=Object(r.useState)(""),j=Object(h.a)(l,2),b=j[0],d=j[1],O=Object(T.c)((function(e){return e.currencyChartReducer})),f=Object(T.c)((function(e){return e.currencyListReducer})),p=Object(T.b)(),x=new Date;x.setDate(x.getDate());var y=x.toISOString().substr(0,10);Object(r.useEffect)((function(){p(A(x))}),[]);var v=f.list.map((function(e){return Object(u.jsx)("option",{"data-currency":e.Cur_Abbreviation,value:e.Cur_ID,children:e.Cur_Name},e.Cur_Abbreviation)}));return Object(u.jsxs)("div",{className:w.a.body_container,children:[Object(u.jsxs)("div",{className:w.a.input_container,children:[Object(u.jsx)("div",{className:w.a.input_lable,children:Object(u.jsx)("span",{children:"select a date period"})}),Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{id:"dateFrom",value:n,type:"date",name:"dateFrom",defaultValue:y,onChange:function(){var e=document.getElementById("dateFrom").value;c(e)}}),Object(u.jsx)("input",{id:"dateUntil",value:s,type:"date",name:"dateUntil",defaultValue:y,onChange:function(){var e=document.getElementById("dateUntil").value;o(e)}}),Object(u.jsx)(g,{red:!0,onClick:function(){p(function(e,t,n){return function(r){N(e,t,n).then((function(c){r(function(e,t,n,r){return{type:"setCurrencyChart",rateData:e,currencyId:t,dateFrom:n,dateTill:r}}(Object(m.a)(c.data),e,t,n))}))}}(b,n,s))},children:"draw"})]})]}),Object(u.jsxs)("select",{onChange:function(e){d(e.currentTarget.value)},children:[Object(u.jsx)("option",{children:"Select currency for chart"}),v]}),Object(u.jsx)("br",{}),Object(u.jsx)(R,{currencyChart:O,currencyList:f,currencyId:b})]})},E="/start",P="/login",U="/registration",V="/charts",J="/currency";var W=function(){return Object(u.jsx)("div",{children:Object(u.jsxs)(d.d,{children:[Object(u.jsx)(d.b,{path:"/",exact:!0,render:function(){return Object(u.jsx)(d.a,{to:E})}}),Object(u.jsx)(d.b,{path:E,render:function(){return Object(u.jsx)(O,{})}}),Object(u.jsx)(d.b,{path:P,render:function(){return Object(u.jsx)(l,{})}}),Object(u.jsx)(d.b,{path:U,render:function(){return Object(u.jsx)(j,{})}}),Object(u.jsx)(d.b,{path:V,render:function(){return Object(u.jsx)(B,{})}}),Object(u.jsx)(d.b,{path:J,render:function(){return Object(u.jsx)(F,{})}}),Object(u.jsx)(d.b,{render:function(){return Object(u.jsx)(b,{})}})]})})};n(69);var q=function(){return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(s.a,{children:[Object(u.jsx)(o,{}),Object(u.jsx)(W,{})]})})},z=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,a=t.getLCP,i=t.getTTFB;n(e),r(e),c(e),a(e),i(e)}))},G=n(22),H=n(38),M=Object(G.b)({currencyListReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setCurrencyList":return{list:Object(m.a)(t.currencyList),date:t.currencyListDate};default:return e}},currencyChartReducer:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"setCurrencyChart":return{value:t.rateData,currencyId:t.currencyId,dateFrom:t.dateFrom,dateTill:t.dateTill};default:return e}}}),Z=Object(G.c)(M,Object(G.a)(H.a)),K=Z;window.store=Z,i.a.render(Object(u.jsx)(c.a.StrictMode,{children:Object(u.jsx)(T.a,{store:K,children:Object(u.jsx)(q,{})})}),document.getElementById("root")),z()}},[[70,1,2]]]);
//# sourceMappingURL=main.081b2005.chunk.js.map