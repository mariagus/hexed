(this.webpackJsonphexed=this.webpackJsonphexed||[]).push([[0],[,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(1),r=n.n(a),i=n(4),s=n.n(i),l=(n(10),n(11),n(2));n(12);var o=function(){var e=Object(a.useState)("decimal"),t=Object(l.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)(""),s=Object(l.a)(i,2),o=s[0],u=s[1],j=Object(a.useState)(""),d=Object(l.a)(j,2),b=d[0],h=d[1],m=function(){return h("decimal"===n?function(e){if(e.match(/\D/g)||!e)return"Enter a valid number";for(var t=e=Number(e),n=[],c={10:"A",11:"B",12:"C",13:"D",14:"E",15:"F"};t>0;){var a=t%16;a>9&&(a=c[a]),n.unshift(a),t=Math.floor(t/16)}return n.join("")}(o):function(e){if(e.match(/[^a-f|\d]/gi)||!e)return"Enter a valid number";var t={A:10,B:11,C:12,D:13,E:14,F:15},n=e.split("").reverse();return n=n.map((function(e,n){return e.match(/[A-F]/gi)&&(e=e.toUpperCase(),e=t[e]),e*Math.pow(16,n)})),String(n.reduce((function(e,t){return e+t})))}(o))};return Object(c.jsxs)("div",{className:"Converter",children:[Object(c.jsxs)("form",{className:"forms",children:[Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("label",{value:"fromLabel",children:"From"}),Object(c.jsxs)("select",{className:"dropdown",value:n,onChange:function(e){return r(e.target.value)},children:[Object(c.jsx)("option",{value:"decimal",children:"DECIMAL"}),Object(c.jsx)("option",{value:"haxadecimal",children:"HEXADECIMAL"})]})]}),Object(c.jsxs)("div",{className:"container",children:[Object(c.jsx)("label",{value:"toLabel",children:"To"}),Object(c.jsx)("select",{className:"dropdown",children:"decimal"===n?Object(c.jsx)("option",{value:"haxadecimal",children:"HEXADECIMAL"}):Object(c.jsx)("option",{value:"decimal",children:"DECIMAL"})})]})]}),Object(c.jsx)("div",{className:"inputContainer",children:Object(c.jsx)("input",{type:"text",value:o,placeholder:"enter a valid number",onChange:function(e){u(e.target.value)}})}),Object(c.jsx)("button",{className:"btn",onClick:function(){return m()},children:"CONVERT"}),Object(c.jsx)("div",{className:"resultContainer",children:Object(c.jsx)("p",{className:"resultText",children:b})}),Object(c.jsx)("button",{className:"btn",onClick:function(){return u(""),void h("")},children:"RESET"})]})};var u=function(){return Object(c.jsxs)("div",{className:"App",children:[Object(c.jsxs)("header",{className:"App-header",children:[Object(c.jsx)("h1",{children:"HEXED"}),Object(c.jsx)("h3",{children:"Hexadecimal Converter"})]}),Object(c.jsx)(o,{})]})},j=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,14)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),c(e),a(e),r(e),i(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(u,{})}),document.getElementById("root")),j()}],[[13,1,2]]]);
//# sourceMappingURL=main.0639a17e.chunk.js.map