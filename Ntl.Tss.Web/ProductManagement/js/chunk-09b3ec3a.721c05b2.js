(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-09b3ec3a"],{"0418":function(e,t,a){"use strict";var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-header header-shadow"},[a("div",{staticClass:"app-header__content"},[a("div",{staticClass:"app-header-left"},[a("div",{staticClass:"header-logo"},[a("router-link",{attrs:{to:"/ViewDashboard"}})],1)]),a("div",{staticClass:"app-header-right"},[a("SearchBox")],1),a("Loader")],1),a("div",{staticClass:"app-header__mobile-menu"},[a("div",[a("button",{staticClass:"hamburger close-sidebar-btn hamburger--elastic",class:{"is-active":e.isOpen},attrs:{type:"button"},on:{click:function(t){return e.toggleMobile("closed-sidebar-open")}}},[e._m(0)])])]),a("div",{staticClass:"app-header__menu"},[a("span",[a("button",{staticClass:"btn-icon btn-icon-only",class:{active:e.isOpenMobileMenu},attrs:{variant:"primary",size:"sm"},on:{click:function(t){return e.toggleMobile2("header-menu-open")}}},[a("div",{staticClass:"btn-icon-wrapper"})])])])])},s=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("span",{staticClass:"hamburger-box"},[a("span",{staticClass:"hamburger-inner"})])}],i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[e.isUserLoggedIn?a("span",[e._v("Welcome "),a("b",[e._v(e._s(e.userName)+" ")]),e._v("("+e._s(e.getRoleDisplayName)+") ")]):e._e(),e.isUserLoggedIn?a("a",{attrs:{href:"#"},on:{click:e.logout}},[e._v("Logout")]):e._e()])])},r=[],o=(a("7db0"),a("04e1")),l=a.n(o),c=a("a9e4"),u={data:function(){return{searchOpen:!1,userName:"",userRole:"",token:null,roleDisplayName:[{role:c["a"].TsspAdmin,displayName:"Admin"},{role:c["a"].TsspIntermediate,displayName:"Intermediate Role"},{role:c["a"].TsspWarehouseIncharge,displayName:"Warehouse Incharge"},{role:c["a"].TpsafAdmin,displayName:"Admin"},{role:c["a"].TpsafFacilityAdmin,displayName:"Facility Admin"},{role:c["a"].TpsafFacilityIncharge,displayName:"Facility Incharge"},{role:c["a"].TaxAuthAdmin,displayName:"Admin"},{role:c["a"].TaxAuthRevenueOfficer,displayName:"Revenue Officer"},{role:c["a"].MfAdmin,displayName:"Admin"},{role:c["a"].MfAccountManager,displayName:"Account Manager"},{role:c["a"].MfWarehouseIncharge,displayName:"Warehouse Incharge"},{role:c["a"].PrintPartner,displayName:"Print Partner"}]}},computed:{isUserLoggedIn:function(){return null!=this.token},getRoleDisplayName:function(){var e=this;return this.roleDisplayName.find((function(t){return t.role==e.userRole})).displayName}},created:function(){this.token=this.$root.access_token;var e=l()(this.token);console.log(e),this.userName=e.GivenName,this.userRole=e.Role},methods:{logout:function(){this.$router.push("/"),window.location.href="https://dev-authss.azurewebsites.net/Account/Logout"}}},d=u,p=a("2877"),m=Object(p["a"])(d,i,r,!1,null,null,null),h=m.exports,f=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loader-container",attrs:{id:"loader"}},[a("div",{staticClass:"loader"})])}],v={data:function(){return{}},methods:{loaderFn:function(){setTimeout((function(){document.getElementById("loader").style.display="none"}),1e3)}},beforeMount:function(){this.loaderFn()}},b=v,_=Object(p["a"])(b,f,g,!1,null,null,null),y=_.exports,M={name:"Header",components:{SearchBox:h,Loader:y},data:function(){return{isOpen:!1,isOpenMobileMenu:!0}},props:{},methods:{toggleMobile:function(e){var t=document.body;this.isOpen=!this.isOpen,this.isOpen?t.classList.add(e):t.classList.remove(e)},toggleMobile2:function(e){var t=document.body;this.isOpenMobileMenu=!this.isOpenMobileMenu,this.isOpenMobileMenu?t.classList.add(e):t.classList.remove(e)}}},N=M,I=Object(p["a"])(N,n,s,!1,null,null,null);t["a"]=I.exports},bb51:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Header")],1),a("div",{staticClass:"app-main__outer"},[a("div",{staticClass:"app-main__inner"},[e.IsUserSignedIn?e._e():a("router-link",{attrs:{to:"/ProdMgmtHome"}},[e._v("SignIn")])],1)])],1)},s=[],i=a("0418"),r={name:"app",components:{Header:i["a"]},methods:{},computed:{IsUserSignedIn:function(){return null!=this.$root.access_token}},created:function(){this.IsUserSignedIn&&this.$router.push("ProductManagement")}},o=r,l=a("2877"),c=Object(l["a"])(o,n,s,!1,null,null,null);t["default"]=c.exports}}]);
//# sourceMappingURL=chunk-09b3ec3a.721c05b2.js.map