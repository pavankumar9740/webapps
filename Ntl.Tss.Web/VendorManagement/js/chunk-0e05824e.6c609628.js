(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0e05824e"],{"0418":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-header header-shadow"},[a("div",{staticClass:"app-header__content"},[a("div",{staticClass:"app-header-left"},[a("div",{staticClass:"header-logo"},[a("router-link",{attrs:{to:"/ViewDashboard"}})],1)]),a("div",{staticClass:"app-header-right"},[a("SearchBox")],1),a("Loader")],1)])},i=[],r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[t.isUserLoggedIn?a("span",[t._v("Welcome "),a("b",[t._v(t._s(t.userName)+" ")]),t._v("("+t._s(t.getRoleDisplayName)+") ")]):t._e(),t.isUserLoggedIn?a("a",{attrs:{href:"#"},on:{click:t.logout}},[t._v("Logout")]):t._e()])])},n=[],c=(a("7db0"),a("a9e4")),o={data:function(){return{searchOpen:!1,userName:"",userRole:"",decodedToken:null,roleDisplayName:[{role:c["a"].TsspAdmin,displayName:"Admin"},{role:c["a"].TsspIntermediate,displayName:"Intermediate Role"},{role:c["a"].TsspWarehouseIncharge,displayName:"Warehouse Incharge"},{role:c["a"].TpsafAdmin,displayName:"Admin"},{role:c["a"].TpsafFacilityAdmin,displayName:"Facility Admin"},{role:c["a"].TpsafFacilityIncharge,displayName:"Facility Incharge"},{role:c["a"].TaxAuthAdmin,displayName:"Admin"},{role:c["a"].TaxAuthRevenueOfficer,displayName:"Revenue Officer"},{role:c["a"].MfAdmin,displayName:"Admin"},{role:c["a"].MfAccountManager,displayName:"Account Manager"},{role:c["a"].MfWarehouseIncharge,displayName:"Warehouse Incharge"},{role:c["a"].PrintPartner,displayName:"Print Partner"}]}},computed:{isUserLoggedIn:function(){return null!=this.decodedToken},getRoleDisplayName:function(){var t=this;return this.roleDisplayName.find((function(e){return e.role==t.userRole})).displayName}},created:function(){this.decodedToken=this.$store.getters.clientAppDecodedToken,console.log(this.$store.getters.clientAppDecodedToken),this.userName=this.decodedToken.GivenName,this.userRole=this.decodedToken.Role},methods:{logout:function(){this.$router.push("/"),window.location.href="https://dev-authss.azurewebsites.net/Account/Logout"}}},l=o,d=a("2877"),m=Object(d["a"])(l,r,n,!1,null,null,null),u=m.exports,p=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},v=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"loader-container",attrs:{id:"loader"}},[a("div",{staticClass:"loader"})])}],f={data:function(){return{}},methods:{loaderFn:function(){setTimeout((function(){document.getElementById("loader").style.display="none"}),1e3)}},beforeMount:function(){this.loaderFn()}},_=f,C=Object(d["a"])(_,p,v,!1,null,null,null),h=C.exports,b={name:"Header",components:{SearchBox:u,Loader:h},data:function(){return{isOpen:!1,isOpenMobileMenu:!1}},methods:{toggleMobile:function(t){this.isOpen=!this.isOpen,this.isOpen?document.body.classList.add(t):document.body.classList.remove(t)},toggleMobile2:function(t){this.isOpenMobileMenu=!this.isOpenMobileMenu,this.isOpenMobileMenu?document.body.classList.add(t):document.body.classList.remove(t)}}},y=b,g=Object(d["a"])(y,s,i,!1,null,null,null);e["a"]=g.exports},"56eb":function(t,e,a){t.exports=a.p+"img/manufacture.108bf0c3.png"},"7db0":function(t,e,a){"use strict";var s=a("23e7"),i=a("b727").find,r=a("44d2"),n=a("ae40"),c="find",o=!0,l=n(c);c in[]&&Array(1)[c]((function(){o=!1})),s({target:"Array",proto:!0,forced:o||!l},{find:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),r(c)},8836:function(t,e,a){t.exports=a.p+"img/warehouse.0d50e473.png"},be3f:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Header")],1),a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Sidebar")],1),a("div",{staticClass:"app-main__outer"},[a("div",{staticClass:"app-main__inner"},[a("ViewTpsaf",{attrs:{id:t.id}})],1)]),a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Footer")],1)],1)},i=[],r=a("0418"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[t._m(0),a("div",{staticClass:"container-fluid productManagement"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"card"},[t._m(1),a("div",{staticClass:"card-body"},[a("div",{staticClass:"col-md-12 form-row mr-5 ml-5"},[a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Manufacturer Name")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(t.tpsafData.name))])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Excise Licence Number")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(t.tpsafData.exciseLicenseNumber))])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("TIN Number")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(t.tpsafData.tinNumber))])])]),a("hr",{staticClass:"dot mr-5 ml-5"}),a("div",{staticClass:"col-md-12 form-row mr-5 ml-5"},[a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Contact Name")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(t.tpsafData.contact.name))])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Email ID")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(t.tpsafData.contact.email))])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Contact Number")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(t.tpsafData.contact.countryCode)+" "+t._s(t.tpsafData.contact.phone))])])]),a("hr",{staticClass:"dot mr-5 ml-5"}),a("div",{staticClass:"col-md-12 form-row mr-5 ml-5"},[a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Address")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(" "+t._s(t.tpsafData.address.description)+" ")])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Country")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(t.tpsafData.address.country.name))])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Region")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(t.tpsafData.address.region.name))])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Postal Code")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(t.tpsafData.address.postalAddress))])])])])])]),a("div",{staticClass:"col-12 mt-3"},[a("div",{staticClass:"card"},[t._m(2),t._l(t.tpsafData.facilities,(function(e){return a("div",{key:e.id,staticClass:"card-body"},[a("div",{staticClass:"col-md-12 form-row mr-5 ml-5"},[a("div",{staticClass:"col-md-12"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Location Name")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(e.warehouse.name))])])]),a("hr",{staticClass:"dot mr-5 ml-5"}),a("div",{staticClass:"col-md-12 form-row mr-5 ml-5"},[a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Name")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(e.warehouse.contact.name))])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Email ID")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(e.warehouse.contact.email))])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Phone Number")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(e.warehouse.contact.countryCode)+" "+t._s(e.warehouse.contact.phone))])])]),a("hr",{staticClass:"dot mr-5 ml-5"}),a("div",{staticClass:"col-md-12 form-row mr-5 ml-5"},[a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Address")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(" "+t._s(e.warehouse.address.description)+" ")])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Region")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(e.warehouse.address.region.name))])]),a("div",{staticClass:"col-md-3"},[a("p",{staticClass:"mb-0 text-muted"},[t._v("Postal Code")]),a("p",{staticClass:"mb-0 text-primary"},[t._v(t._s(e.warehouse.address.postalAddress))])])])])}))],2)])])]),a("hr"),a("div",{staticClass:"comment-buttons"},[a("router-link",{staticClass:"btn btn-outline-primary mr-2 p-2 pl-5 pr-5",staticStyle:{float:"right"},attrs:{to:"/tpsaf"}},[a("i",{staticClass:"fa fa-arrow-left"}),t._v(" Back")])],1)])},c=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-block header-section"},[a("div",{staticClass:"float-left"},[a("h1",[a("b",[t._v("TPSAF")])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-header justify-content-between align-items-center"},[s("h4",{staticClass:"card-title pl-3 m-2"},[s("img",{attrs:{src:a("56eb")}}),t._v(" TPSAF Details ")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card-header justify-content-between align-items-center"},[s("h4",{staticClass:"card-title pl-3 m-2"},[s("img",{attrs:{src:a("8836")}}),t._v(" Facility Details ")])])}],o=(a("96cf"),a("1da1")),l={mounted:function(){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$store.dispatch("getTpsafByIdAsync",t.id);case 2:case"end":return e.stop()}}),e)})))()},props:["id"],computed:{tpsafData:function(){return this.$store.getters.tpsaf}}},d=l,m=a("2877"),u=Object(m["a"])(d,n,c,!1,null,null,null),p=u.exports,v=a("fd2d"),f={name:"app",components:{Header:r["a"],ViewTpsaf:p,Footer:v["a"]},props:["id"]},_=f,C=Object(m["a"])(_,s,i,!1,null,null,null);e["default"]=C.exports},fd2d:function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-footer"},[a("div",{staticClass:"app-footer__inner text-center",staticStyle:{float:"right"}},[t._v(" Copyright 2020 - NationWide Technologies Limited ")])])}],r={name:"Footer",components:{}},n=r,c=a("2877"),o=Object(c["a"])(n,s,i,!1,null,null,null);e["a"]=o.exports}}]);
//# sourceMappingURL=chunk-0e05824e.6c609628.js.map