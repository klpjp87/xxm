webpackJsonp([3],{NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),r=(t("u2FG"),{render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]});var u=t("VU/8")({name:"App"},r,!1,function(e){t("s+DK")},null,null).exports,a=t("/ocq");o.default.use(a.a);var i=function(e){return t.e(0).then(function(){return e(t("5DkM"))}.bind(null,t)).catch(t.oe)},s=new a.a({routes:[{path:"/",component:u,children:[{path:"",redirect:"/index"},{path:"/index",children:[{path:"WareHouse",component:i}],component:function(e){return t.e(1).then(function(){return e(t("Fw7Z"))}.bind(null,t)).catch(t.oe)}},{path:"/WareHouse",component:i}]}]}),l=t("NYxO");o.default.use(l.a);var c=new l.a.Store({state:{}}),d=t("zL8q"),m=t.n(d);t("tvR6");o.default.config.productionTip=!1,o.default.use(m.a),new o.default({el:"#app",router:s,store:c,components:{App:u},template:"<App/>"})},"s+DK":function(e,n){},tvR6:function(e,n){},u2FG:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=[{name:"基本信息",index:"1",m:[{name:"供应商管理",index:"/index/WareHouse"},{name:"客户管理",index:"/WareHouse"}]},{name:"业务处理",index:"2",m:[{name:"入库",index:"/index/WareHouse"},{name:"出库",index:"/WareHouse"}]}],r={data:function(){return{items:[{name:"",index:"",m:[{name:"",index:""}]}]}},methods:{handleOpen:function(e,n){console.log(e,n)},handleClose:function(e,n){console.log(e,n)}},mounted:function(){this.items=o}},u={render:function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",[t("el-menu",{staticClass:"ul",attrs:{"default-active":"2",router:""},on:{open:e.handleOpen,close:e.handleClose}},e._l(e.items,function(n){return t("el-submenu",{key:n.id,attrs:{index:n.index}},[t("template",{slot:"title"},[e._v(e._s(n.name))]),e._v(" "),e._l(n.m,function(n){return t("el-menu-item",{key:n.index,attrs:{index:n.index}},[t("router-link",{attrs:{to:n.index}},[e._v(e._s(n.name))])],1)})],2)}))],1)},staticRenderFns:[]};var a=t("VU/8")(r,u,!1,function(e){t("xmo+")},null,null);n.default=a.exports},"xmo+":function(e,n){}},["NHnr"]);
//# sourceMappingURL=app.1035bf7c145ef2b6374b.js.map