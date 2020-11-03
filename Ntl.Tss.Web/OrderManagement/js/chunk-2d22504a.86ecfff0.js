(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d22504a"],{e339:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"app-container"},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Header")],1),a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Sidebar")],1),a("div",{staticClass:"app-main__outer"},[a("div",{staticClass:"app-main__inner"},[a("InternalStockRequest")],1)]),a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Footer")],1)],1)},o=[],r=a("0418"),i=a("5ea5"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",[a("b-modal",{attrs:{id:"modal-sm",size:"sm","no-close-on-backdrop":"",title:"Confirm"},scopedSlots:t._u([{key:"modal-footer",fn:function(e){var s=e.cancel;return[a("b-button",{staticClass:"float-right mb-3 p-2 pl-5 pr-5",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(t){return s()}}},[t._v("Cancel")]),a("b-button",{staticClass:"float-right mb-3 p-2 pl-5 pr-5",attrs:{size:"sm",variant:"primary"},on:{click:t.saveInternalStockRequest}},[t._v("Confirm")])]}}])},[a("p",{staticClass:"my-2"},[t._v("Are you sure to raise the internal stock request?")])])],1),t._m(0),a("div",{staticClass:"container-fluid productManagement"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12"},[a("div",{staticClass:"card"},[a("div",{staticClass:"card-header p-0"},[a("div",{staticClass:"col-12 col-sm-11 ml-5 mr-4 mt-5"},[a("div",{staticClass:"form-row ml-3 mb-4"},[a("div",{staticClass:"form-group row col-md-6"},[a("label",{staticClass:"col-sm-3 col-form-label pr-0 pl-0",attrs:{for:"username"}},[t._v("Product")]),a("div",{staticClass:"col-sm-8"},[a("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedProduct,expression:"selectedProduct"}],staticClass:"form-control",on:{change:function(e){var a=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedProduct=e.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",selected:"",value:""}},[t._v("-select-")]),t._l(t.products,(function(e){return a("option",{key:e.productId,domProps:{value:{id:e.productId,text:e.productName}}},[t._v(t._s(e.productName))])}))],2)])]),a("div",{staticClass:"form-group row col-md-6"},[a("label",{staticClass:"col-sm-3 col-form-label pr-0 pl-0",attrs:{for:"username"}},[t._v("No of Stamps Required")]),a("div",{staticClass:"col-sm-8"},[a("input",{directives:[{name:"model",rawName:"v-model.number",value:t.noOfStamps,expression:"noOfStamps",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"number",max:"100000",min:"1000",placeholder:""},domProps:{value:t.noOfStamps},on:{input:function(e){e.target.composing||(t.noOfStamps=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),a("div",{staticClass:"invalid-feedback"})])])]),a("div",{staticClass:"form-row ml-3 mb-4"},[a("div",{staticClass:"form-group row col-md-6"},[a("label",{staticClass:"col-sm-3 col-form-label pr-0 pl-0",attrs:{for:"username"}},[t._v("Requesting Facility")]),t._v(" "+t._s(this.requestingFacilityName)+" ")])]),a("div",{staticClass:"form-row ml-3"},[a("div",{staticClass:"form-group row col-md-6"},[a("label",{staticClass:"col-sm-3 col-form-label pr-0 pl-0",attrs:{for:"username"}},[t._v("Notes")]),a("div",{staticClass:"col-sm-8"},[a("textarea",{directives:[{name:"model",rawName:"v-model.trim",value:t.notes,expression:"notes",modifiers:{trim:!0}}],staticClass:"form-control",attrs:{placeholder:""},domProps:{value:t.notes},on:{input:function(e){e.target.composing||(t.notes=e.target.value.trim())},blur:function(e){return t.$forceUpdate()}}})])])]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-sm",modifiers:{"modal-sm":!0}}],staticClass:"float-right mt-3 mb-3 p-2 pl-5 pr-5",attrs:{variant:"primary",disabled:!t.selectedProduct||!t.noOfStamps||!t.notes}},[t._v("SUBMIT")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-sm",modifiers:{"modal-sm":!0}}],staticClass:"float-right mt-3 mb-3 mr-2 p-2 pl-5 pr-5",attrs:{variant:"outline-primary"},on:{click:t.redirectToStockRequests}},[t._v("CANCEL")])],1),a("div",{staticClass:"clearfix"})])])])])])])},l=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"d-block header-section"},[a("div",{staticClass:"py-3 px-3 align-self-center d-sm-flex w-100 rounded"},[a("div",{staticClass:"w-sm-100 mr-auto"},[a("h1",[a("b",[t._v("Stock Transfer Request")])])])])])}],c=a("bc3a"),d=a.n(c),m={data:function(){return{products:[],selectedProduct:"",requestingFacilityId:null,requestingFacilityName:"",noOfStamps:1e3,notes:""}},created:function(){this.requestingFacilityId=this.$store.state.clientAppDecodedToken.LocationId,this.requestingFacilityName=this.$store.state.clientAppDecodedToken.LocationName,this.getProducts()},components:{},methods:{getProducts:function(){var t=this;d.a.get("/Meta/GetProducts",{baseURL:"https://dev-authss-order-api.azurewebsites.net/api"}).then((function(e){var a=[];for(var s in e.data)a.push({productId:s,productName:e.data[s]});t.products=a}))},saveInternalStockRequest:function(){var t=this,e={productId:parseInt(this.selectedProduct.id),noOfStamps:this.noOfStamps,notes:this.notes};d.a.post("/InternalStock",e,{baseURL:"https://dev-authss-order-api.azurewebsites.net/api"}).then((function(){t.$router.push({name:"StockRequestList"})}))},redirectToStockRequests:function(){this.$router.push({name:"StockRequestList"})}}},u=m,p=a("2877"),v=Object(p["a"])(u,n,l,!1,null,null,null),f=v.exports,b=a("fd2d"),C={name:"app",components:{Header:r["a"],Sidebar:i["a"],Footer:b["a"],InternalStockRequest:f},methods:{}},h=C,_=Object(p["a"])(h,s,o,!1,null,null,null);e["default"]=_.exports}}]);
//# sourceMappingURL=chunk-2d22504a.86ecfff0.js.map