(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{387:function(e,t,a){e.exports=a(698)},392:function(e,t,a){},663:function(e,t,a){},696:function(e,t,a){},698:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(14),l=a.n(r),o=(a(392),a(27)),s=a(28),c=a(31),m=a(29),u=a(30),p=a(130),d=a.n(p),h=a(131),b=a(65),g=a(25),y=a(128),f=a.n(y),v=a(129),E=a.n(v),j=a(45),O=a.n(j),w=a(204),k=a.n(w),C=a(127),F=a.n(C),L=a(100),N=a.n(L),I=a(80),S=a.n(I),x=a(126),D=a.n(x),T=a(46),G=a.n(T),q=a(101),V=a.n(q),B=a(313),A=a.n(B),R=a(44),Q=a.n(R),W=a(82),K=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).state={open:!1},a.handleToggle=function(){a.setState(function(e){return{open:!e.open}})},a.handleClose=function(e){a.anchorEl.contains(e.target)||a.setState({open:!1})},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes,a=this.state.open;return i.a.createElement("div",{className:t.TopNav},i.a.createElement("div",null,i.a.createElement(Q.a,{className:t.menuButton,color:"inherit","aria-label":"Menu",buttonRef:function(t){e.anchorEl=t},"aria-owns":a?"menu-list-grow":void 0,"aria-haspopup":"true",onClick:this.handleToggle},i.a.createElement(A.a,null)),i.a.createElement(D.a,{open:a,anchorEl:this.anchorEl,transition:!0,disablePortal:!0},function(t){var a=t.TransitionProps,n=t.placement;return i.a.createElement(N.a,Object.assign({},a,{id:"menu-list-grow",style:{transformOrigin:"bottom"===n?"center top":"center bottom"}}),i.a.createElement(S.a,null,i.a.createElement(F.a,{onClickAway:e.handleClose},i.a.createElement(V.a,null,i.a.createElement(G.a,{onClick:e.handleClose,component:W.b,to:"/"},"Home"),i.a.createElement(G.a,{onClick:e.handleClose,component:W.b,to:"/Shopping"},"Shopping List")))))})))}}]),t}(i.a.Component),M=Object(g.withStyles)(function(e){return{TopNav:{display:"flex"},paper:{marginRight:2*e.spacing.unit}}})(K),P=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(c.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(i)))).handleClick=function(){a.props.addButton&&a.props.addButton()},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.props.addButton?e.show:e.hide;return i.a.createElement("div",{className:e.topMenu},i.a.createElement(f.a,{position:"static"},i.a.createElement(E.a,null,i.a.createElement(M,null),i.a.createElement(O.a,{variant:"h6",color:"inherit",ml:100,className:e.grow},this.props.title),i.a.createElement(Q.a,{color:"inherit",onClick:this.handleClick,className:t},i.a.createElement(k.a,null)))))}}]),t}(i.a.Component),J=Object(g.withStyles)(function(e){return{topMenu:{flexGrow:1},grow:{flexGrow:1,textAlign:"center"},menuButton:{marginLeft:-12,marginRight:20},hide:{display:"none"}}})(P),H=(a(152),a(105)),_=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null,i.a.createElement(J,{title:"Foodi"}),i.a.createElement(H.a,null,i.a.createElement("p",null,"Test Home Page paper")))}}]),t}(n.Component),$=a(315),z=a(57),U=a.n(z),X=(a(663),a(35)),Y=a(26),Z=a(102),ee=a.n(Z),te=a(103),ae=a.n(te),ne=a(104),ie=a.n(ne),re=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).state={textFieldValue:"",quantityFieldValue:"",typeFieldValue:""},a.onSubmit=a.onSubmit.bind(Object(X.a)(Object(X.a)(a))),a.handleTextFieldChange=a.handleTextFieldChange.bind(Object(X.a)(Object(X.a)(a))),a.handleQuantityFieldChange=a.handleQuantityFieldChange.bind(Object(X.a)(Object(X.a)(a))),a.handleTypeFieldChange=a.handleTypeFieldChange.bind(Object(X.a)(Object(X.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"handleTextFieldChange",value:function(e){this.setState({textFieldValue:e.target.value})}},{key:"handleQuantityFieldChange",value:function(e){this.setState({quantityFieldValue:e.target.value})}},{key:"handleTypeFieldChange",value:function(e){this.setState({typeFieldValue:e.target.value})}},{key:"onSubmit",value:function(e){e.preventDefault();var t=this.state.textFieldValue,a=this.state.quantityFieldValue,n=this.state.typeFieldValue;if(t){var i={};i.name=t,i.quantity=a,i.type=n,this.props.addItem(this.props.listKey,i),this.refs.form.reset(),this.setState({textFieldValue:"",quantityFieldValue:"",typeFieldValue:""})}}},{key:"render",value:function(){var e=this.props.classes;return i.a.createElement("form",{ref:"form",onSubmit:this.onSubmit,className:"form-inline"},i.a.createElement(Y.a,{item:!0,container:!0,direction:"row"},i.a.createElement(Y.a,{item:!0,className:e.nameFieldWrap},i.a.createElement(Y.b,{className:e.nameField,id:"itemName",ref:"itemName",label:"add item..",value:this.state.textFieldValue,onChange:this.handleTextFieldChange,fullWidth:!0})),i.a.createElement(Y.a,{item:!0},i.a.createElement(Y.b,{className:e.quantityField,id:"itemQuantity",ref:"itemQuantity",label:"qty",value:this.state.quantityFieldValue,onChange:this.handleQuantityFieldChange})),i.a.createElement(Y.a,{item:!0},i.a.createElement(ae.a,{className:e.typeField},i.a.createElement(ee.a,{htmlFor:"type"},"unit"),i.a.createElement(ie.a,{value:this.state.typeFieldValue,onChange:this.handleTypeFieldChange},i.a.createElement(G.a,{value:""},i.a.createElement("em",null,"none")),i.a.createElement(G.a,{value:"gal"},"gal"),i.a.createElement(G.a,{value:"lb"},"lb"),i.a.createElement(G.a,{value:"box"},"box"),i.a.createElement(G.a,{value:"L"},"L")))),i.a.createElement(Y.a,{item:!0},i.a.createElement(Q.a,{className:e.addButton,type:"submit",color:"primary",variant:"contained"},i.a.createElement("i",{className:"material-icons"},"add_shopping_cart")))))}}]),t}(i.a.Component),le=Object(g.withStyles)(function(e){return{nameField:{marginRight:e.spacing.unit},nameFieldWrap:{marginLeft:2*e.spacing.unit,flexGrow:1},quantityField:{marginLeft:e.spacing.unit,width:40},typeField:{marginLeft:e.spacing.unit,width:60},addButton:{marginRight:2*e.spacing.unit}}})(re),oe=a(64),se=a.n(oe),ce=a(81),me=a.n(ce),ue=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).onClickDel=a.onClickDel.bind(Object(X.a)(Object(X.a)(a))),a.onClickDone=a.onClickDone.bind(Object(X.a)(Object(X.a)(a))),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"onClickDel",value:function(){var e=parseInt(this.props.index),t=parseInt(this.props.listKey);this.props.removeItem(t,e)}},{key:"onClickDone",value:function(){var e=parseInt(this.props.index),t=parseInt(this.props.listKey);this.props.markItemDone(t,e)}},{key:"render",value:function(){var e=this.props.classes,t=this.props.item.done?"done":"undone";return console.log(this.props.item.type),i.a.createElement("div",{className:t},i.a.createElement(me.a,{className:e.itemRow},i.a.createElement(Y.a,{container:!0,direction:"row",alignItems:"center"},i.a.createElement(Y.a,{item:!0,className:e.itemName},i.a.createElement(O.a,{variant:"subheading"},this.props.item.name)),i.a.createElement(Y.a,{item:!0,className:e.itemQuantity},i.a.createElement(O.a,{variant:"subheading"},this.props.item.quantity)),i.a.createElement(Y.a,{item:!0,className:e.itemType},i.a.createElement(O.a,{variant:"subheading"},this.props.item.type)),i.a.createElement(Y.a,{item:!0},i.a.createElement(Q.a,{onClick:this.onClickDone},i.a.createElement("i",{className:"material-icons"},"check"))),i.a.createElement(Y.a,{item:!0},i.a.createElement(Q.a,{onClick:this.onClickDel},i.a.createElement("i",{className:"material-icons"},"delete"))))))}}]),t}(i.a.Component),pe=Object(g.withStyles)(function(e){return{itemRow:{paddingTop:0,paddingBottom:0},itemName:{flexGrow:1,textOverflow:"ellipsis",whiteSpace:"nowrap",overflow:"hidden"},itemQuantity:{width:40,paddingLeft:0,paddingRight:e.spacing.unit,textAlign:"right"},itemType:{width:40,padding:0,textAlign:"left",paddingRight:e.spacing.unit}}})(ue),de=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props.items.map(function(t,a){return i.a.createElement(pe,{item:t,index:a,listKey:e.props.listKey,removeItem:e.props.removeItem,markItemDone:e.props.markItemDone})});return i.a.createElement(Y.a,{item:!0},i.a.createElement(se.a,null,t))}}]),t}(i.a.Component),he=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(U.a,{item:!0},i.a.createElement(O.a,{variant:"h6",align:"center"},this.props.name))}}]),t}(i.a.Component),be=function(e){function t(e){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).call(this,e))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes;return i.a.createElement(U.a,{item:!0,className:e.ListGrid},i.a.createElement(H.a,{className:e.ShoppingList},i.a.createElement(U.a,{container:!0,direction:"column",justify:"flex-start"},i.a.createElement(he,{name:this.props.ListName}),i.a.createElement(de,{listKey:this.props.index,items:this.props.ItemList,removeItem:this.props.itemDel,markItemDone:this.props.itemDone}),i.a.createElement(le,{listKey:this.props.index,addItem:this.props.itemAdd}))))}}]),t}(i.a.Component),ge=Object(g.withStyles)(function(e){return{ListGrid:{width:"100%",maxWidth:500,minWidth:360},ShoppingList:{backgroundColor:e.palette.background.paper,paddingTop:2*e.spacing.unit,paddingBottom:2*e.spacing.unit}}})(be),ye=(a(696),function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(c.a)(this,Object(m.a)(t).call(this,e))).addList=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"New Shopping List",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=a.state.listGroup;n.push({ListName:e,ItemList:t}),a.setState({listGroup:n})},a.removeList=function(e){var t=a.state.listGroup;t.splice(e,1),a.setState({listGroup:t})},a.removeItem=function(e,t){var n=a.state.listGroup,i=a.state.listGroup[e].ItemList;i.splice(t,1),n[e].ItemList=i,a.setState({listGroup:n})},a.addItem=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{quantity:"",type:""},n=a.state.listGroup,i=a.state.listGroup[e].ItemList;i.unshift({name:t.name,quantity:t.quantity,type:t.type,done:!1}),n[e].ItemList=i,a.setState({listGroup:n})},a.markItemDone=function(e,t){var n=a.state.listGroup,i=a.state.listGroup[e].ItemList,r=i[t];r.done=!r.done,i[t]=r,n[e].ItemList=i,a.setState({listGroup:n})},a.fetchData=function(){a.setState(Object($.a)({},a.state,{isFetching:!0}));var e=[];e.push({name:"milk",quantity:1,type:"gal",done:!1}),e.push({name:"cheese",quantity:2,type:"cup",done:!0}),e.push({name:"wheat bread",quantity:1,type:"",done:!0});var t=[];t.push({name:"soda",quantity:2,type:"L",done:!1}),t.push({name:"sour worms",quantity:1,type:"",done:!1}),t.push({name:"ground beef",quantity:1,type:"lb",done:!0}),a.addList("Trader Joes",e),a.addList("Shaws",t),a.setState({isFetching:!1})},a.state={isFetching:!1,listGroup:[]},a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.fetchData()}},{key:"render",value:function(){var e=this,t=this.state.listGroup.map(function(t,a){return i.a.createElement(ge,{index:a,ListName:t.ListName,ItemList:t.ItemList,listDel:e.removeList,itemAdd:e.addItem,itemDel:e.removeItem,itemDone:e.markItemDone})});return i.a.createElement("div",null,i.a.createElement(J,{title:"Foodi - Shopping Lists",addButton:this.addList}),i.a.createElement("div",{className:"MainWindow"},i.a.createElement(U.a,{container:!0,direction:"row",justify:"space-evenly",alignItems:"flex-start",spacing:16},t)))}}]),t}(i.a.Component)),fe=function(e){function t(){return Object(o.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return i.a.createElement(h.MuiThemeProvider,{muiTheme:Object(h.getMuiTheme)()},i.a.createElement("div",{className:"App"},i.a.createElement(d.a,null),i.a.createElement(b.c,null,i.a.createElement(b.a,{exact:!0,path:"/",component:_}),i.a.createElement(b.a,{path:"/Shopping",component:ye}),i.a.createElement(b.a,{component:function(){return i.a.createElement("div",null,"404 Not found ")}}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(i.a.createElement(W.a,null,i.a.createElement(fe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[387,1,2]]]);
//# sourceMappingURL=main.04744246.chunk.js.map