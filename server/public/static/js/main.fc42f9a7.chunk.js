(this.webpackJsonpweb=this.webpackJsonpweb||[]).push([[1],{68:function(e,t,n){e.exports=n(83)},73:function(e,t,n){},83:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(31),i=n.n(o),c=n(65),l=n(84),u=(n(45),n(24)),m=n(25),h=n(28),s=n(26),p=n(29),d=n(88),b=n(91),f=n(90),v=(n(73),n(35)),E=n(19),g=n(89),O=n(52),w=n.n(O),j=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,"loading")}}]),t}(a.Component),C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:j;return w()({loader:e,loading:t})},k=C((function(){return Promise.all([n.e(0),n.e(7)]).then(n.bind(null,99))})),x=C((function(){return Promise.all([n.e(0),n.e(5)]).then(n.bind(null,101))})),y=C((function(){return Promise.all([n.e(0),n.e(6)]).then(n.bind(null,97))})),N=[{path:"/",name:"Home",exact:!0,Component:k},{path:"/detail/:id",name:"Detail",Component:x},{path:"/edit",name:"Create",exact:!0,hidden:!0,Component:y},{path:"/edit/:id",name:"Edit",Component:y},{path:"/about",name:"About",Component:C((function(){return n.e(4).then(n.bind(null,98))}))}],P=function(e){function t(){return Object(u.a)(this,t),Object(h.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return r.a.createElement(v.a,null,r.a.createElement(r.a.Fragment,null,r.a.createElement(d.a,{className:"container"},r.a.createElement(b.a,{bg:"light"},r.a.createElement(f.a,{className:"mx-auto"},N.filter((function(e){return-1===e.path.indexOf(":")&&!e.hidden})).map((function(e){return r.a.createElement(f.a.Link,{key:e.path,as:v.c,to:e.path,activeClassName:"active",exact:!0},e.name)})))),N.map((function(e){var t=e.path,n=e.Component;return r.a.createElement(E.a,{key:t,exact:!0,path:t},(function(e){var t=e.match;return r.a.createElement(g.a,{in:null!=t,timeout:300,classNames:"page",unmountOnExit:!0},r.a.createElement("div",{className:"page"},r.a.createElement(n,null)))}))})))))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var B=new c.a({uri:"http://localhost:3001/graphql"});i.a.render(r.a.createElement(l.a,{client:B},r.a.createElement(P,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[68,2,3]]]);
//# sourceMappingURL=main.fc42f9a7.chunk.js.map