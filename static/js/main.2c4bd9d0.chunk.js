(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{386:function(e,t,n){e.exports=n(700)},391:function(e,t,n){},392:function(e,t,n){},490:function(e,t,n){},696:function(e,t,n){},700:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(14),o=n.n(i),c=(n(391),n(26)),l=n(27),m=n(29),s=n(28),u=n(30),p=n(128),h=n.n(p),d=(n(392),n(33)),b=n(125),f=n.n(b),j=n(126),O=n.n(j),v=n(53),E=n.n(v),y=n(101),k=n.n(y),g=n(314),C=n.n(g),w=n(124),I=n.n(w),N=n(97),S=n.n(N),x=n(76),D=n.n(x),L=n(123),T=n.n(L),M=n(102),B=n.n(M),W=n(98),A=n.n(W),P=n(205),q=n.n(P),R=n(75),G=n.n(R),H=n(78),J=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(n=Object(m.a)(this,(e=Object(s.a)(t)).call.apply(e,[this].concat(r)))).state={open:!1},n.handleToggle=function(){n.setState(function(e){return{open:!e.open}})},n.handleClose=function(e){n.anchorEl.contains(e.target)||n.setState({open:!1})},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.open;return r.a.createElement("div",{className:t.TopNav},r.a.createElement("div",null,r.a.createElement(G.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",buttonRef:function(t){e.anchorEl=t},"aria-owns":n?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:this.handleToggle},r.a.createElement(q.a,null)),r.a.createElement(T.a,{open:n,anchorEl:this.anchorEl,transition:!0,disablePortal:!0},function(t){var n=t.TransitionProps,a=t.placement;return r.a.createElement(S.a,Object.assign({},n,{id:"menu-list-grow",style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),r.a.createElement(D.a,null,r.a.createElement(I.a,{onClickAway:e.handleClose},r.a.createElement(A.a,null,r.a.createElement(B.a,{onClick:e.handleClose,component:H.b,to:"/"},"Home"),r.a.createElement(B.a,{onClick:e.handleClose,component:H.b,to:"/ShoppingList"},"Shopping List")))))})))}}]),t}(r.a.Component),V=Object(d.withStyles)(function(e){return{TopNav:{display:"flex"},paper:{marginRight:2*e.spacing.unit}}})(J),F=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement("div",{className:e.topMenu},r.a.createElement(f.a,{position:"static"},r.a.createElement(O.a,null,r.a.createElement(V,null),r.a.createElement(E.a,{variant:"h6",color:"inherit",className:e.grow},"Foodi"),r.a.createElement(k.a,{color:"inherit"},r.a.createElement(C.a,null)))))}}]),t}(r.a.Component),$=Object(d.withStyles)(function(e){return{topMenu:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}}})(F),z=n(60),K=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h2",null,"Home Page"))}}]),t}(a.Component),Q=n(36),U=n(99),X=n.n(U),Y=n(100),Z=n.n(Y),_=n(127),ee=n.n(_),te=n(77),ne=n.n(te),ae=n(103),re=(n(490),n(315)),ie=[];ie.push({index:1,name:"milk",category:"dairy",quantity:1,type:"gal",done:!1}),ie.push({index:2,name:"cheese",category:"dairy",quantity:2,type:"cup",done:!0}),ie.push({index:3,name:"wheat bread",category:"general",quantity:1,type:"whole",done:!0});var oe=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,n){return r.a.createElement(ce,{key:n,item:t,index:n,removeItem:e.props.removeItem,markItemDone:e.props.markItemDone})});return r.a.createElement(X.a,null,t)}}]),t}(r.a.Component),ce=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e))).onClickClose=n.onClickClose.bind(Object(Q.a)(Object(Q.a)(n))),n.onClickDone=n.onClickDone.bind(Object(Q.a)(Object(Q.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onClickClose",value:function(){var e=parseInt(this.props.index);this.props.removeItem(e)}},{key:"onClickDone",value:function(){var e=parseInt(this.props.index);this.props.markItemDone(e)}},{key:"render",value:function(){var e=this.props.item.done?"done":"undone";return r.a.createElement("div",{className:e},r.a.createElement(Z.a,null,r.a.createElement(ee.a,{primary:this.props.item.name}),r.a.createElement(ae.a,{onClick:this.onClickDone},r.a.createElement("i",{className:"material-icons"},"check")),r.a.createElement(ae.a,{onClick:this.onClickClose},r.a.createElement("i",{className:"material-icons"},"delete"))))}}]),t}(r.a.Component),le=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e))).onSubmit=n.onSubmit.bind(Object(Q.a)(Object(Q.a)(n))),n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"onSubmit",value:function(e){e.preventDefault();var t=this.refs.itemName.value;t&&(this.props.addItem({newItemName:t}),this.refs.form.reset())}},{key:"render",value:function(){return r.a.createElement("form",{ref:"form",onSubmit:this.onSubmit,className:"form-inline"},r.a.createElement(ae.b,{id:"additem",ref:"itemName",label:"add item..",margin:"dense"}),r.a.createElement(ae.a,{type:"submit",color:"primary"},"Add"))}}]),t}(r.a.Component),me=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(E.a,{variant:"h6"},this.props.name)}}]),t}(r.a.Component),se=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(m.a)(this,Object(s.a)(t).call(this,e))).addItem=n.addItem.bind(Object(Q.a)(Object(Q.a)(n))),n.removeItem=n.removeItem.bind(Object(Q.a)(Object(Q.a)(n))),n.markItemDone=n.markItemDone.bind(Object(Q.a)(Object(Q.a)(n))),n.state={ItemList:ie},n}return Object(u.a)(t,e),Object(l.a)(t,[{key:"addItem",value:function(e){ie.unshift({index:ie.length+1,name:e.newItemName,done:!1}),this.setState({ItemList:ie})}},{key:"removeItem",value:function(e){ie.splice(e,1),this.setState({ItemList:ie})}},{key:"markItemDone",value:function(e){var t=ie[e];ie.splice(e,1),t.done=!t.done,t.done?ie.push(t):ie.unshift(t),this.setState({ItemList:ie})}},{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(ne.a,{item:!0},r.a.createElement(re.a,{className:e.ListView},r.a.createElement(me,{name:"Stop & Shop"}),r.a.createElement(oe,{items:ie,removeItem:this.removeItem,markItemDone:this.markItemDone}),r.a.createElement(le,{addItem:this.addItem})))}}]),t}(r.a.Component),ue=Object(d.withStyles)(function(e){return{ListView:{width:"100%",maxWidth:500,minWidth:360,backgroundColor:e.palette.background.paper,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(se),pe=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(ne.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-start",spacing:16},r.a.createElement(ue,null),r.a.createElement(ue,null),r.a.createElement(ue,null),r.a.createElement(ue,null)))}}]),t}(a.Component),he=(n(696),function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MainWindow"},r.a.createElement(z.c,null,r.a.createElement(z.a,{exact:!0,path:"/",component:K}),r.a.createElement(z.a,{path:"/ShoppingList",component:pe}),r.a.createElement(z.a,{component:function(){return r.a.createElement("div",null,"404 Not found ")}})))}}]),t}(a.Component)),de=n(129),be=function(e){function t(){return Object(c.a)(this,t),Object(m.a)(this,Object(s.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement(de.MuiThemeProvider,{muiTheme:Object(de.getMuiTheme)()},r.a.createElement("div",{className:"App"},r.a.createElement(h.a,null),r.a.createElement($,null),r.a.createElement(he,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(H.a,null,r.a.createElement(be,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[386,1,2]]]);
//# sourceMappingURL=main.2c4bd9d0.chunk.js.map