(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d225253"],{e2c3:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"app-container"},[a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Header")],1),a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Sidebar")],1),a("div",{staticClass:"app-main__outer"},[a("div",{staticClass:"app-main__inner"},[a("PrintOrder",{attrs:{"print-order-id":e.printOrderId}})],1)]),a("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[a("Footer")],1)],1)},s=[],i=a("0418"),n=a("5ea5"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",[a("b-modal",{attrs:{id:"modal-sm",size:"sm","no-close-on-backdrop":"",title:"Confirm"},scopedSlots:e._u([{key:"modal-footer",fn:function(t){var r=t.cancel;return[a("b-button",{staticClass:"float-right mb-3 p-2 pl-5 pr-5",attrs:{size:"sm",variant:"outline-primary"},on:{click:function(e){return r()}}},[e._v(" Cancel ")]),a("b-button",{staticClass:"float-right mb-3 p-2 pl-5 pr-5",attrs:{size:"sm",variant:"primary"},on:{click:e.placeOrder}},[e._v(" Confirm ")])]}}])},[a("p",{staticClass:"my-2"},[e._v(" The tax might differ. Are you sure you want to continue ? ")])])],1),e._m(0),a("div",{staticClass:"container-fluid productManagement"},[a("div",{staticClass:"card",staticStyle:{background:"transparent","margin-bottom":"20px"}},[a("table",{staticClass:"table manufactrer printOrderTable",staticStyle:{background:"transparent","margin-bottom":"0"},attrs:{id:"tab"}},[e._m(1),a("tbody",[a("tr",{staticClass:"manufacturer_add"},[a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.purchaseOrderNumber,expression:"purchaseOrderNumber"}],staticClass:"form-control",attrs:{type:"text"},domProps:{value:e.purchaseOrderNumber},on:{input:function(t){t.target.composing||(e.purchaseOrderNumber=t.target.value)}}})]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.noOfPrintOrders,expression:"noOfPrintOrders"}],staticClass:"form-control",attrs:{type:"number",min:"1",disabled:this.editFlow},domProps:{value:e.noOfPrintOrders},on:{input:function(t){t.target.composing||(e.noOfPrintOrders=t.target.value)}}})]),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedProductName,expression:"selectedProductName"}],staticClass:"form-control",attrs:{name:"productName"},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedProductName=t.target.multiple?a:a[0]},e.changeProductName]}},[a("option",{attrs:{disabled:"",selected:"",value:"0"}},[e._v("-select-")]),e._l(e.productNameList,(function(t){return a("option",{key:t.productId,domProps:{value:{id:t.productId,text:t.productName}}},[e._v(" "+e._s(t.productName)+" ")])}))],2)]),a("td",[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedReelSize,expression:"selectedReelSize"}],staticClass:"form-control",attrs:{name:"coilSize",disabled:!this.selectedProductName},on:{change:[function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedReelSize=t.target.multiple?a:a[0]},e.getTotalStamp]}},[a("option",{attrs:{disabled:"",selected:"",value:"0"}},[e._v("-select-")]),e._l(e.reelSizeList,(function(t){return a("option",{key:t.productId,domProps:{value:{id:t.productId,text:t.productName}}},[e._v(" "+e._s(t.productName)+" ")])}))],2)]),a("td",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.noOfReels,expression:"noOfReels"}],staticClass:"form-control",attrs:{type:"number",min:"1",disabled:!this.selectedProductName},domProps:{value:e.noOfReels},on:{change:e.getTotalStamp,input:function(t){t.target.composing||(e.noOfReels=t.target.value)}}})]),a("td",[a("span",[e._v(e._s(e.totalStamp))])])])])])]),a("div",{staticClass:"card mb-2 pb-3"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-4"},[a("p",{staticClass:"mt-4 col-md-12"},[e._v("Print Partner")]),a("div",{staticClass:"col-md-12"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedPrintPartner,expression:"selectedPrintPartner"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedPrintPartner=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",selected:"",value:"0"}},[e._v("-select-")]),e._l(e.printPartnerList,(function(t){return a("option",{key:t.productId,domProps:{value:t.productId}},[e._v(" "+e._s(t.productName)+" ")])}))],2)])]),a("div",{staticClass:"col-md-4"},[a("p",{staticClass:"mt-4 col-md-12"},[e._v("Facility Location")]),a("div",{staticClass:"col-md-12"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedFacilityLocation,expression:"selectedFacilityLocation"}],staticClass:"form-control",on:{change:function(t){var a=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedFacilityLocation=t.target.multiple?a:a[0]}}},[a("option",{attrs:{disabled:"",selected:"",value:"0"}},[e._v("-select-")]),e._l(e.facilityLocationList,(function(t){return a("option",{key:t.productId,domProps:{value:t.productId}},[e._v(" "+e._s(t.productName)+" ")])}))],2)])]),a("div",{staticClass:"col-md-4"},[e._m(2),a("div",{staticClass:"form-group row mt-3 col-md-12"},[a("div",{staticClass:"col-md-12"},[a("b-input-group",{staticClass:"mb-3"},[a("b-form-input",{attrs:{id:"expectedDate",type:"text",autocomplete:"off"},model:{value:e.expectedDate,callback:function(t){e.expectedDate=t},expression:"expectedDate"}}),a("b-input-group-append",[a("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"en-US","button-variant":"primary"},model:{value:e.expectedDate,callback:function(t){e.expectedDate=t},expression:"expectedDate"}})],1)],1)],1)])])]),a("div",{staticClass:"col-md-12"},[a("p",{staticClass:"mt-4"},[e._v("Comments")]),a("div",{staticClass:"row col-md-12"},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comments,expression:"comments"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:e.comments},on:{input:function(t){t.target.composing||(e.comments=t.target.value)}}})])])]),a("div",{staticClass:"mb-2"},[a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-sm",modifiers:{"modal-sm":!0}}],staticClass:"float-right mt-2 mb-3 p-2 pl-5 pr-5",attrs:{variant:"primary",disabled:!(this.selectedProductName&&this.purchaseOrderNumber&&this.noOfPrintOrders&&this.noOfReels&&this.selectedReelSize&&this.selectedPrintPartner&&this.selectedFacilityLocation&&this.comments&&this.expectedDate)}},[e._v(" "+e._s(this.editFlow?"UPDATE ORDER":"PLACE ORDER")+" ")]),a("b-button",{directives:[{name:"b-modal",rawName:"v-b-modal.modal-sm",modifiers:{"modal-sm":!0}}],staticClass:"float-right mt-2 mb-3 mr-2 p-2 pl-5 pr-5",attrs:{variant:"outline-primary"},on:{click:e.redirectToHome}},[e._v(" CANCEL ")])],1)])])},d=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"d-block header-section"},[a("h1",[a("b",[e._v("Print Order")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("thead",{staticStyle:{background:"#FFF"}},[a("tr",[a("th",[e._v("Purchase Order Number")]),a("th",[e._v("No of Print Orders")]),a("th",[e._v("Product")]),a("th",[e._v("Reel Size")]),a("th",[e._v("No.of Reels")]),a("th",[e._v("Total Stamps")])])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("p",{staticClass:"mt-4 col-md-12"},[a("label",{staticClass:"mb-0 text-dark",attrs:{for:"expectedDate"}},[e._v("Expected Date")])])}],c=a("bc3a"),l=a.n(c),p={data:function(){return{editEnabled:!1,purchaseOrderNumber:"",noOfPrintOrders:0,selectedProductName:null,selectedReelSize:null,noOfReels:0,pricePerStamp:.05,selectedPrintPartner:"",selectedFacilityLocation:"",totalStamp:0,totalStampPrice:0,totalCoils:0,taxPercentage:0,taxAmount:0,shippingCharges:0,productNameList:[],reelSizeList:[],printPartnerList:[],facilityLocationList:[],expectedDate:null,response:{},comments:"",editFlow:!1}},props:["printOrderId"],mounted:function(){var e=this;this.printOrderId?(this.editFlow=!0,l.a.get("/PrintOrder",{baseURL:"https://dev-authss-order-api.azurewebsites.net/api",params:{printOrderId:this.printOrderId}}).then((function(t){e.response=t.data,e.purchaseOrderNumber=t.data.poNum,e.noOfPrintOrders=t.data.noOfOrders,e.noOfReels=t.data.noOfReels,e.selectedPrintPartner=t.data.printPartnerId,e.selectedFacilityLocation=t.data.warehouseId,e.comments=t.data.comments,e.expectedDate=t.data.expectedDate,e.getProducts(),e.getReelSizes(t.data.productId)}))):this.editFlow=!1},created:function(){this.editFlow||this.getProducts(),this.getPrintPartners(),this.getWarehouses(),this.getShippingCharges(),this.getTax()},computed:{},methods:{placeOrder:function(){var e=this,t={};t=t=this.editFlow?{id:this.printOrderId,poNum:this.purchaseOrderNumber,expectedDate:this.expectedDate,noOfOrders:parseInt(this.noOfPrintOrders),productId:parseInt(this.selectedProductName.id),reelSizeId:parseInt(this.selectedReelSize.id),noOfReels:parseInt(this.noOfReels),comments:this.comments,warehouseId:parseInt(this.selectedFacilityLocation),printPartnerId:parseInt(this.selectedPrintPartner)}:{poNum:this.purchaseOrderNumber,expectedDate:this.expectedDate,noOfOrders:parseInt(this.noOfPrintOrders),productId:parseInt(this.selectedProductName.id),reelSizeId:parseInt(this.selectedReelSize.id),noOfReels:parseInt(this.noOfReels),comments:this.comments,warehouseId:parseInt(this.selectedFacilityLocation),printPartnerId:parseInt(this.selectedPrintPartner)},l.a.post("/PrintOrder",t,{baseURL:"https://dev-authss-order-api.azurewebsites.net/api"}).then((function(){e.$router.push({name:"PrintOrders"})}))},redirectToHome:function(){this.$router.push({name:"PrintOrders"})},changeProductName:function(){this.getReelSizes(this.selectedProductName.id)},getProducts:function(){var e=this;l.a.get("/Meta/GetProducts",{baseURL:"https://dev-authss-order-api.azurewebsites.net/api"}).then((function(t){var a=[];for(var r in t.data)a.push({productId:r,productName:t.data[r]});e.productNameList=a,e.editFlow&&(e.selectedProductName={id:e.response.productId,text:e.response.productName})}))},getReelSizes:function(e){var t=this;l.a.get("/Meta/GetReelSizes",{baseURL:"https://dev-authss-order-api.azurewebsites.net/api",params:{productId:e}}).then((function(e){var a=[];for(var r in e.data)a.push({productId:r,productName:e.data[r]});t.reelSizeList=a,t.editFlow&&(t.selectedReelSize={id:t.response.reelSizeId,text:t.response.reelSize},t.getTotalStamp())}))},getPrintPartners:function(){var e=this;l.a.get("/Meta/GetPrintPartners",{baseURL:"https://dev-authss-order-api.azurewebsites.net/api"}).then((function(t){var a=[];for(var r in t.data)a.push({productId:r,productName:t.data[r]});e.printPartnerList=a}))},getWarehouses:function(){var e=this;l.a.get("/Meta/GetWarehouses",{baseURL:"https://dev-authss-order-api.azurewebsites.net/api"}).then((function(t){var a=[];for(var r in t.data)a.push({productId:r,productName:t.data[r]});e.facilityLocationList=a}))},getShippingCharges:function(){var e=this;l.a.get("/Meta/GetShippingCharges",{baseURL:"https://dev-authss-order-api.azurewebsites.net/api"}).then((function(t){e.shippingCharges=parseInt(t.data)}))},getTax:function(){var e=this;l.a.get("/Meta/GetTax",{baseURL:"https://dev-authss-order-api.azurewebsites.net/api"}).then((function(t){e.taxPercentage=parseInt(t.data)}))},getTotalStamp:function(){this.totalStamp=this.noOfReels*parseInt(this.selectedReelSize.text),this.totalStampPrice=this.pricePerStamp*this.totalStamp}}},u=p,m=a("2877"),h=Object(m["a"])(u,o,d,!1,null,null,null),v=h.exports,f=a("fd2d"),b={name:"app",components:{Header:i["a"],Sidebar:n["a"],Footer:f["a"],PrintOrder:v},props:["printOrderId"],methods:{}},P=b,g=Object(m["a"])(P,r,s,!1,null,null,null);t["default"]=g.exports}}]);
//# sourceMappingURL=chunk-2d225253.22a60464.js.map