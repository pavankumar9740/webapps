(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1c06c232"],{"04b4":function(e,t,r){e.exports=r.p+"img/warning-message-icon.2b15a2a0.png"},"07ac":function(e,t,r){var a=r("23e7"),n=r("6f53").values;a({target:"Object",stat:!0},{values:function(e){return n(e)}})},"4de4":function(e,t,r){"use strict";var a=r("23e7"),n=r("b727").filter,c=r("1dde"),o=r("ae40"),i=c("filter"),s=o("filter");a({target:"Array",proto:!0,forced:!i||!s},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"5d56":function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"app-container sidebar-enabled"},[r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("Header")],1),r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("Sidebar")],1),r("div",{staticClass:"app-main__inner pt-5 mt-5"},[r("ReturnOrder")],1),r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("Footer")],1)],1)},n=[],c=r("0418"),o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[e._m(0),a("div",{staticClass:"container-fluid productManagement"},[a("b-modal",{attrs:{id:"deactiveItem","hide-footer":"","hide-header":"",centered:""}},[a("div",{staticClass:"d-block"},[a("div",{staticClass:"modal-body mt-4 mb-3",attrs:{align:"center"}},[a("div",{staticClass:"mt-4 mb-4"},[a("img",{attrs:{src:r("04b4")}})])])])]),a("div",{staticClass:"row mb-5"},[a("div",{staticClass:"w-100"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-sm-12"},[a("div",{staticClass:"search-tbl"},[a("div",{staticClass:"form-row col-md-12 p-3"},[a("div",{staticClass:"form-group row col-md-6 mr-2"},[a("label",{staticClass:"col-form-label mr-2 ml-3"},[e._v("Package Type")]),a("div",{staticClass:"col-md-4"},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedPackage,expression:"selectedPackage"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedPackage=t.target.multiple?r:r[0]}}},e._l(e.packageType,(function(t){return a("option",{key:t},[e._v(" "+e._s(t)+" ")])})),0)]),a("label",{staticClass:"col-form-label mr-2",attrs:{for:"username"}},[e._v("Code")]),a("div",{staticClass:"col-md-4"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.reelCartonCode,expression:"reelCartonCode"}],staticClass:"form-control",attrs:{type:"text",placeholder:""},domProps:{value:e.reelCartonCode},on:{input:function(t){t.target.composing||(e.reelCartonCode=t.target.value)}}})])]),a("div",{staticClass:"col-md-6"},[a("button",{staticClass:"btn btn-primary float-right p-2 pl-5 pr-5",attrs:{type:"button"},on:{click:e.getCodeDetails}},[e._v(" ADD ")])])])])]),a("div",{staticClass:"col-12 col-sm-12 mt-3"},[a("div",{staticClass:"table-responsive"},[e.detailsList.length?a("table",{staticClass:"table layout-secondary return-order bordered"},[e._m(1),e._l(e.detailsList,(function(t){return a("tbody",{key:t},[a("tr",[a("td",[e._v(e._s(e.selectedPackage))]),a("td",{staticClass:"ImporDome"},[e._v(e._s(t.productName))]),a("td",[e._v(e._s(t.reelCount||t.stampCount))]),a("td",[e._v(" "+e._s(t.reels?t.reels[0].reelSize:t.reelSize)+" ")]),e._m(2,!0)])])}))],2):e._e()])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"form-group  col-md-3"},[e._m(3),a("div",{},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedShipper,expression:"selectedShipper"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedShipper=t.target.multiple?r:r[0]}}},e._l(e.shipperList,(function(t,r){return a("option",{key:t,domProps:{value:{shipperId:parseInt(r),shipperName:t}}},[e._v(" "+e._s(t)+" ")])})),0)])]),a("div",{staticClass:"form-group  col-md-3"},[e._m(4),a("div",{},[a("select",{directives:[{name:"model",rawName:"v-model",value:e.selectedDeliveryParner,expression:"selectedDeliveryParner"}],staticClass:"form-control",on:{change:function(t){var r=Array.prototype.filter.call(t.target.options,(function(e){return e.selected})).map((function(e){var t="_value"in e?e._value:e.value;return t}));e.selectedDeliveryParner=t.target.multiple?r:r[0]}}},e._l(e.deliveryParnetList,(function(t,r){return a("option",{key:t,domProps:{value:{warehouseId:parseInt(r),warehouseName:t}}},[e._v(" "+e._s(t)+" ")])})),0)])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-3"},[e._m(5),a("div",{},[a("div",{},[a("b-input-group",[a("b-form-input",{attrs:{id:"expectedDate",type:"text",autocomplete:"off"},model:{value:e.expectedDate,callback:function(t){e.expectedDate=t},expression:"expectedDate"}}),a("b-input-group-append",[a("b-form-datepicker",{attrs:{"button-only":"",right:"",locale:"en-US","button-variant":"primary"},model:{value:e.expectedDate,callback:function(t){e.expectedDate=t},expression:"expectedDate"}})],1)],1)],1)])]),a("div",{staticClass:"col-md-3"},[a("div",{staticClass:"form-group"},[e._m(6),a("div",{},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.trackingId,expression:"trackingId"}],staticClass:"form-control",attrs:{name:"trackingID"},domProps:{value:e.trackingId},on:{input:function(t){t.target.composing||(e.trackingId=t.target.value)}}})])])])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col-md-6"},[a("div",{staticClass:"form-group"},[e._m(7),a("div",{},[a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],staticClass:"form-control",attrs:{rows:"5"},domProps:{value:e.comment},on:{input:function(t){t.target.composing||(e.comment=t.target.value)}}})])])])]),a("div",{staticClass:"col-md-12 float-right"},[a("button",{staticClass:"btn btn-primary float-right mt-3 mb-5 p-2 pl-5 pr-5 ",attrs:{type:"button",disabled:e.submitAllowed},on:{click:e.createReturnOrder}},[e._v(" SUBMIT ")]),a("button",{staticClass:"btn btn-outline-primary float-right mt-3 mb-5 p-2 pl-5 pr-5 mr-4",attrs:{type:"button"}},[e._v(" CANCEL ")])])])])],1)])},i=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"d-block header-section"},[r("div",{},[r("h1",[r("b",[e._v("Return Orders")])])])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("thead",[r("tr",[r("th",[e._v("Package Type")]),r("th",[e._v("Product Type")]),r("th",[e._v("No. of Reals")]),r("th",[e._v("Real Size")]),r("th")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("td",[a("img",{attrs:{src:r("a300")}})])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"col-form-label"},[r("b",[e._v("Shippers")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"col-form-label"},[r("b",[e._v("Delivery Partner")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",{},[r("label",{staticClass:"mb-0 text-dark",attrs:{for:"expectedDate"}},[e._v("Expected Date")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"col-form-label"},[r("b",[e._v("Tracking ID")])])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("label",{staticClass:"col-form-label mr-2"},[r("b",[e._v("Comment")])])}],s=(r("99af"),r("4de4"),r("caad"),r("d81d"),r("07ac"),r("2532"),r("2909")),l=r("6789"),u={data:function(){return{selectedPackage:"",reelCartonCode:"",packageType:[],detailsList:[],expectedDate:null,deliveryParnetList:{},selectedDeliveryParner:"",shipperList:{},selectedShipper:{},reelStore:[],cartonStore:[],comment:"",trackingId:"",packageDetailsForPost:[]}},created:function(){this.getShipperAndWarehouse()},methods:{getCodeDetails:function(){var e=this,t=!1;"Carton"==this.selectedPackage?this.cartonStore.includes(this.reelCartonCode)?alert("Carton already added"):(this.cartonStore.push(this.reelCartonCode),t=!0):this.reelStore.includes(this.reelCartonCode)?alert("Reel already added"):(this.reelStore.push(this.reelCartonCode),t=!0),t&&Object(l["c"])(this.selectedPackage,this.reelCartonCode).then((function(t){if("status"in t&&200==t.status){"Carton"==e.selectedPackage&&(e.reelStore=[].concat(Object(s["a"])(t.data.reels.map((function(e){return e.code}))),[e.reelStore])),e.detailsList.push(t.data);var r=t.data;"Carton"==e.selectedPackage?e.packageDetailsForPost.push({packageId:r.id,code:r.code,packageType:r.packageType,reelCount:r.reelCount}):e.packageDetailsForPost.push({packageId:r.id,code:r.code,stampCount:r.stampCount,packageType:r.packageType})}})).catch((function(e){console.log(e)}))},getShipperAndWarehouse:function(){var e=this;Object(l["g"])().then((function(t){"status"in t&&200==t.status&&(e.shipperList=t.data)})).catch((function(e){console.log(e)})),Object(l["h"])().then((function(t){"status"in t&&200==t.status&&(e.deliveryParnetList=t.data)})).catch((function(e){console.log(e)})),Object(l["f"])().then((function(t){"status"in t&&200==t.status&&(e.packageType=Object.values(t.data).filter((function(e){return"Pallet"!==e})))})).catch((function(e){console.log(e)}))},createReturnOrder:function(){var e={packageDtos:Object(s["a"])(this.packageDetailsForPost),trackingId:this.trackingId,shipper:this.selectedShipper,warehouse:this.selectedDeliveryParner,expectedDeliveryDate:this.expectedDate+"T13:20:00.207Z",comment:this.comment};Object(l["a"])(e).then((function(){console.log("return order created")})).catch((function(e){console.log(e)}))}},components:{},computed:{submitAllowed:function(){return!(this.packageDetailsForPost.length&&this.selectedShipper&&this.selectedDeliveryParner)}}},d=u,p=r("2877"),m=Object(p["a"])(d,o,i,!1,null,null,null),f=m.exports,v=r("5ea5"),h=r("fd2d"),g={name:"app",components:{Header:c["a"],ReturnOrder:f,Sidebar:v["a"],Footer:h["a"]},computed:{},methods:{}},b=g,C=Object(p["a"])(b,a,n,!1,null,null,null);t["default"]=C.exports},6789:function(e,t,r){"use strict";r.d(t,"c",(function(){return p})),r.d(t,"e",(function(){return m})),r.d(t,"i",(function(){return f})),r.d(t,"g",(function(){return v})),r.d(t,"h",(function(){return h})),r.d(t,"a",(function(){return g})),r.d(t,"d",(function(){return b})),r.d(t,"b",(function(){return C})),r.d(t,"f",(function(){return d}));r("99af");function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var o=r("bc3a"),i=r.n(o),s=r("4360"),l="https://dev-authss-order-api.azurewebsites.net/api",u={headers:{"Content-Type":"application/json",Authorization:"Bearer "+s["a"].state.clientAppToken}};function d(){return i.a.get("".concat(l,"/Packages/GetPackageTypes/"),c({},u)).then((function(e){return e})).catch((function(e){return e}))}function p(e,t){var r="GetReelDetailsForOrderReturn",n="reelCode";return"Carton"===e&&(n="cartonCode",r="GetCartonDetailsForOrderReturn"),i.a.get("".concat(l,"/Packages/").concat(r),c({params:a({},n,t)},u)).then((function(e){return e})).catch((function(e){return e}))}function m(e){return i.a.post("".concat(l,"/ReturnOrders/GetReturnOrders"),c({},e),c({},u)).then((function(e){return e})).catch((function(e){return e}))}function f(e){return i.a.get("".concat(l,"/ReturnOrders/DownloadFile"),c({params:{returnOrderNumber:e}},u)).then((function(e){return e})).catch((function(e){return e}))}function v(){return i.a.get("".concat(l,"/Meta/GetShippers"),c({},u)).then((function(e){return e})).catch((function(e){return e}))}function h(){return i.a.get("".concat(l,"/Meta/GetNtlWarehouses"),c({},u)).then((function(e){return e})).catch((function(e){return e}))}function g(e){return i.a.post("".concat(l,"/ReturnOrders/CreateReturnOrder"),c({},e),c({},u)).then((function(e){return e})).catch((function(e){return e}))}function b(e){return i.a.get("".concat(l,"/ReturnOrders/GetReturnOrderDetails"),c({params:{returnorderId:e}},u)).then((function(e){return e})).catch((function(e){return e}))}function C(e,t){return i.a.post("".concat(l,"/ReturnOrders/ApproveReturnOrderRequest"),{id:e,comments:t},c({},u)).then((function(e){return e})).catch((function(e){return e}))}},"6f53":function(e,t,r){var a=r("83ab"),n=r("df75"),c=r("fc6a"),o=r("d1e7").f,i=function(e){return function(t){var r,i=c(t),s=n(i),l=s.length,u=0,d=[];while(l>u)r=s[u++],a&&!o.call(i,r)||d.push(e?[r,i[r]]:i[r]);return d}};e.exports={entries:i(!0),values:i(!1)}},a300:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NUYyRDI0RDRBRkZBMTFFQTk0ODE5Qzg4NEMwNkY0MTYiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NUYyRDI0RDVBRkZBMTFFQTk0ODE5Qzg4NEMwNkY0MTYiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo1RjJEMjREMkFGRkExMUVBOTQ4MTlDODg0QzA2RjQxNiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo1RjJEMjREM0FGRkExMUVBOTQ4MTlDODg0QzA2RjQxNiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PhxGF0AAAAC2SURBVHjaYvz//z8DNQETA5XB4DeQARSGyBgIHgBxHpHaQeoeoejHYmAFyB4gjidgWAJUXSkhA0EgGao4EYdhScjyxBiIbGg8DpclYAs2fAaCQCpUczKUnwLlJ+GKB0IGMkC99QuIe4D4J7awJdVAEJgOddlkQimFFBf2UcOFsDBLg/LTKQnDJBxJJ4mcWIYlmRQcYZpKSjosJ5Co0V1KMKc8AeICIvNyISjvI+tnHHkFLECAAQDhzkB4ok8KgAAAAABJRU5ErkJggg=="},b64b:function(e,t,r){var a=r("23e7"),n=r("7b0b"),c=r("df75"),o=r("d039"),i=o((function(){c(1)}));a({target:"Object",stat:!0,forced:i},{keys:function(e){return c(n(e))}})},dbb4:function(e,t,r){var a=r("23e7"),n=r("83ab"),c=r("56ef"),o=r("fc6a"),i=r("06cf"),s=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(e){var t,r,a=o(e),n=i.f,l=c(a),u={},d=0;while(l.length>d)r=n(a,t=l[d++]),void 0!==r&&s(u,t,r);return u}})},e439:function(e,t,r){var a=r("23e7"),n=r("d039"),c=r("fc6a"),o=r("06cf").f,i=r("83ab"),s=n((function(){o(1)})),l=!i||s;a({target:"Object",stat:!0,forced:l,sham:!i},{getOwnPropertyDescriptor:function(e,t){return o(c(e),t)}})}}]);
//# sourceMappingURL=chunk-1c06c232.b10cb221.js.map