(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{385:function(e,t,n){e.exports=n(699)},390:function(e,t,n){},488:function(e,t,n){},695:function(e,t,n){},699:function(e,t,n){"use strict";n.r(t);var a=n(0),i=n.n(a),r=n(14),o=n.n(r),c=(n(390),n(24)),s=n(25),l=n(27),m=n(26),u=n(28),p=n(128),h=n.n(p),d=n(32),b=n(126),f=n.n(b),j=n(127),O=n.n(j),v=n(54),y=n.n(v),E=n(125),g=n.n(E),k=n(100),I=n.n(k),w=n(81),C=n.n(w),L=n(124),x=n.n(L),S=n(103),N=n.n(S),D=n(101),F=n.n(D),T=n(206),q=n.n(T),M=n(80),V=n.n(M),B=n(64),W=function(e){function t(){var e,n;Object(c.a)(this,t);for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return(n=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1},n.handleToggle=function(){n.setState(function(e){return{open:!e.open}})},n.handleClose=function(e){n.anchorEl.contains(e.target)||n.setState({open:!1})},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,n=this.state.open;return i.a.createElement("div",{className:t.TopNav},i.a.createElement("div",null,i.a.createElement(V.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",buttonRef:function(t){e.anchorEl=t},"aria-owns":n?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:this.handleToggle},i.a.createElement(q.a,null)),i.a.createElement(x.a,{open:n,anchorEl:this.anchorEl,transition:!0,disablePortal:!0},function(t){var n=t.TransitionProps,a=t.placement;return i.a.createElement(I.a,Object.assign({},n,{id:"menu-list-grow",style:{transformOrigin:"bottom"===a?"center top":"center bottom"}}),i.a.createElement(C.a,null,i.a.createElement(g.a,{onClickAway:e.handleClose},i.a.createElement(F.a,null,i.a.createElement(N.a,{onClick:e.handleClose,component:B.b,to:"/"},"Home"),i.a.createElement(N.a,{onClick:e.handleClose,component:B.b,to:"/ShoppingList"},"Shopping List")))))})))}}]),t}(i.a.Component),A=Object(d.withStyles)(function(e){return{TopNav:{display:"flex"},paper:{marginRight:2*e.spacing.unit}}})(W),P=n(65),R=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("div",{className:e.topMenu},i.a.createElement(f.a,{position:"static"},i.a.createElement(O.a,null,i.a.createElement(A,null),i.a.createElement(y.a,{variant:"h6",color:"inherit",ml:100,className:e.grow},i.a.createElement(P.c,null,i.a.createElement(P.a,{path:"/ShoppingList",exact:!0,render:function(){return i.a.createElement("div",null,"Foodi - Shopping Lists")}}),i.a.createElement(P.a,{path:"/",render:function(){return i.a.createElement("div",null,"Foodi")}}))))))}}]),t}(i.a.Component),G=Object(d.withStyles)(function(e){return{topMenu:{flexGrow:1},grow:{flexGrow:1},menuButton:{marginLeft:-12,marginRight:20}}})(R),H=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement("h2",null,"Home Page"),i.a.createElement("p",null,"Test area for the home page"))}}]),t}(a.Component),J=n(314),$=n(30),z=n(55),K=n.n(z),Q=(n(488),n(207)),U=n(43),X=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).state={textFieldValue:""},n.onSubmit=n.onSubmit.bind(Object($.a)(Object($.a)(n))),n.handleTextFieldChange=n.handleTextFieldChange.bind(Object($.a)(Object($.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleTextFieldChange",value:function(e){this.setState({textFieldValue:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.textFieldValue;t&&(this.props.addItem({newItemName:t}),this.refs.form.reset(),this.setState({textFieldValue:""}))}},{key:"render",value:function(){return i.a.createElement(U.b,{item:!0},i.a.createElement("form",{ref:"form",onSubmit:this.onSubmit,className:"form-inline"},i.a.createElement(U.c,{id:"additem",ref:"itemName",label:"add item..",margin:"dense",value:this.state.textFieldValue,onChange:this.handleTextFieldChange}),i.a.createElement(U.a,{type:"submit",color:"primary"},"Add")))}}]),t}(i.a.Component),Y=n(62),Z=n.n(Y),_=n(63),ee=n.n(_),te=n(102),ne=n.n(te),ae=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).onClickClose=n.onClickClose.bind(Object($.a)(Object($.a)(n))),n.onClickDone=n.onClickDone.bind(Object($.a)(Object($.a)(n))),n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onClickClose",value:function(){var e=parseInt(this.props.index);this.props.removeItem(e)}},{key:"onClickDone",value:function(){var e=parseInt(this.props.index);this.props.markItemDone(e)}},{key:"render",value:function(){var e=this.props.item.done?"done":"undone";return i.a.createElement("div",{className:e},i.a.createElement(ee.a,null,i.a.createElement(ne.a,{primary:this.props.item.name}),i.a.createElement(U.a,{onClick:this.onClickDone},i.a.createElement("i",{className:"material-icons"},"check")),i.a.createElement(U.a,{onClick:this.onClickClose},i.a.createElement("i",{className:"material-icons"},"delete"))))}}]),t}(i.a.Component),ie=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,n){return i.a.createElement(ae,{key:n,item:t,index:n,removeItem:e.props.removeItem,markItemDone:e.props.markItemDone})});return i.a.createElement(U.b,{item:!0},i.a.createElement(Z.a,null,t))}}]),t}(i.a.Component),re=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(K.a,{item:!0},i.a.createElement(y.a,{variant:"h6",align:"center"},this.props.name))}}]),t}(i.a.Component),oe=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).addItem=n.addItem.bind(Object($.a)(Object($.a)(n))),n.removeItem=n.removeItem.bind(Object($.a)(Object($.a)(n))),n.markItemDone=n.markItemDone.bind(Object($.a)(Object($.a)(n))),n.state={ItemList:n.props.ItemList},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"addItem",value:function(e){this.props.ItemList.unshift({index:this.props.ItemList.length+1,name:e.newItemName,done:!1}),this.setState({ItemList:this.props.ItemList})}},{key:"removeItem",value:function(e){this.props.ItemList.splice(e,1),this.setState({ItemList:this.props.ItemList})}},{key:"markItemDone",value:function(e){var t=this.props.ItemList[e];this.props.ItemList.splice(e,1),t.done=!t.done,t.done?this.props.ItemList.push(t):this.props.ItemList.unshift(t),this.setState({ItemList:this.props.ItemList})}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(K.a,{item:!0},i.a.createElement(Q.a,{className:e.ListView},i.a.createElement(K.a,{container:!0,direction:"column",justify:"flex-start"},i.a.createElement(re,{name:this.props.ListName}),i.a.createElement(ie,{items:this.props.ItemList,removeItem:this.removeItem,markItemDone:this.markItemDone}),i.a.createElement(X,{addItem:this.addItem}))))}}]),t}(i.a.Component),ce=Object(d.withStyles)(function(e){return{ListView:{width:"100%",maxWidth:500,minWidth:360,backgroundColor:e.palette.background.paper,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(oe),se=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).fetchData=function(){n.setState(Object(J.a)({},n.state,{isFetching:!0}));var e=[];e.push({index:1,name:"milk",category:"dairy",quantity:1,type:"gal",done:!1}),e.push({index:2,name:"cheese",category:"dairy",quantity:2,type:"cup",done:!0}),e.push({index:3,name:"wheat bread",category:"general",quantity:1,type:"whole",done:!0});var t=[];t.push({index:1,name:"soda",category:"general",quantity:2,type:"L",done:!1}),t.push({index:2,name:"sour worms",category:"general",quantity:1,type:"unit",done:!1}),t.push({index:3,name:"ground beef",category:"meat",quantity:1,type:"lb",done:!0});var a=function e(t,n){var a=this;Object(c.a)(this,e),this.ListName=t,this.ItemList=[],n.forEach(function(e){a.ItemList.push({index:e.index,name:e.name,category:e.category,quantity:e.quantity,type:e.type,done:e.done})})},i=[];i.push(new a("Stop & Shop",e)),i.push(new a("Shaws",t)),i.push(new a("Stop & Shop",e)),i.push(new a("Shaws",t)),n.setState({listgroup:i,isFetching:!1})},n.state={isFetching:!1,listgroup:[]},n}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this.state.listgroup.map(function(e,t){return i.a.createElement(ce,{key:t,ListName:e.ListName,ItemList:e.ItemList})});return i.a.createElement("div",null,i.a.createElement(K.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-start",spacing:16},e))}}]),t}(a.Component),le=(n(695),function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"MainWindow"},i.a.createElement(P.c,null,i.a.createElement(P.a,{exact:!0,path:"/",component:H}),i.a.createElement(P.a,{path:"/ShoppingList",component:se}),i.a.createElement(P.a,{component:function(){return i.a.createElement("div",null,"404 Not found ")}})))}}]),t}(a.Component)),me=n(129),ue=function(e){function t(){return Object(c.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(me.MuiThemeProvider,{muiTheme:Object(me.getMuiTheme)()},i.a.createElement("div",{className:"App"},i.a.createElement(h.a,null),i.a.createElement(G,null),i.a.createElement(le,null)))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(i.a.createElement(B.a,null,i.a.createElement(ue,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[385,1,2]]]);
//# sourceMappingURL=main.685306fa.chunk.js.map