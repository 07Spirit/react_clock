(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),a=n.n(c),o=n(2),s=n(3),i=n(5),r=n(4),l=n(1),u=n.n(l),d=n(0);function m(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}function h(t){return t.toUTCString().slice(-12,-4)}var k=function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={today:new Date,clockName:"Clock-0"},t.timerId=function(){t.props.status&&t.setState({clockName:m()})},t.updateDate=function(){t.setState({today:new Date}),t.props.status&&console.info(h(t.state.today))},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){window.setInterval(this.timerId,3300),window.setInterval(this.updateDate,1e3)}},{key:"componentDidUpdate",value:function(t,e){e.clockName!==this.state.clockName&&console.debug("Renamed from ".concat(e.clockName," to ").concat(this.state.clockName," "))}},{key:"render",value:function(){return Object(d.jsx)(d.Fragment,{children:this.props.status&&Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.state.clockName})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:h(this.state.today)})]})})}}]),n}(u.a.Component),p=(n(13),function(t){Object(i.a)(n,t);var e=Object(r.a)(n);function n(){var t;Object(o.a)(this,n);for(var c=arguments.length,a=new Array(c),s=0;s<c;s++)a[s]=arguments[s];return(t=e.call.apply(e,[this].concat(a))).state={hasClock:!0},t.handleDocumentClick=function(e){e.preventDefault(),0===e.button?t.setState({hasClock:!0}):2===e.button&&t.setState({hasClock:!1})},t}return Object(s.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick),document.addEventListener("contextmenu",this.handleDocumentClick)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleDocumentClick),document.removeEventListener("contextmenu",this.handleDocumentClick)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),Object(d.jsx)(k,{status:this.state.hasClock})]})}}]),n}(u.a.Component));a.a.render(Object(d.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.dd4b54d8.chunk.js.map