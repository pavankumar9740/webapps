(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-27f1d7e4"],{"159d":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container"},[r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("Header")],1),r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("Sidebar")],1),r("div",{staticClass:"app-main__outer"},[r("div",{staticClass:"app-main__inner"},[r("OrderListing",{attrs:{"org-type":3}})],1)]),r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("Footer")],1)],1)},i=[],s=r("0418"),n=r("5ea5"),o=r("2b6e"),l=r("fd2d"),d={name:"app",components:{Header:s["a"],Sidebar:n["a"],Footer:l["a"],OrderListing:o["a"]},methods:{}},c=d,u=r("2877"),p=Object(u["a"])(c,a,i,!1,null,null,null);e["default"]=p.exports},"2b6e":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-block header-section"},[a("h1",[a("b",[t._v(t._s(t.title))])]),a("b-col",{staticClass:"mb-2 col-md-6 float-right search-section"},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[a("b-input-group",[a("b-form-input",{staticClass:"form-control",attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[a("img",{attrs:{src:r("e055"),alt:""}})])],1)],1)],1)],1)],1),a("div",{staticClass:"container-fluid order-list"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 mt-3 mb-5"},[a("div",{staticClass:"card pb-3"},[a("div",{staticClass:"p-3 list-filter"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-dark rounded-btn mr-2 mob-mar",class:{active:this.Alltab},attrs:{type:"button"},on:{click:function(e){return t.onStatusFilterClicked("All")}}},[t._v(t._s(this.AllText))])]),a("div",{staticClass:"btn-group"},[a("input",{attrs:{type:"checkbox",id:"submitted",name:"orderlist",hidden:""}}),a("label",{staticClass:"btn btn-outline-info rounded-btn mr-2 mob-mar",attrs:{for:"submitted",type:"button"},on:{click:function(e){return t.onStatusFilterClicked("1")}}},[t._v(t._s(this.SubmittedText))])]),a("div",{staticClass:"btn-group"},[a("input",{attrs:{type:"checkbox",id:"approved",name:"orderlist",hidden:""}}),a("label",{staticClass:"btn btn-outline-success rounded-btn mr-2 mob-mar",attrs:{for:"approved",type:"button"},on:{click:function(e){return t.onStatusFilterClicked("2")}}},[t._v(t._s(this.ApprovedText))])]),a("div",{staticClass:"btn-group"},[a("input",{attrs:{type:"checkbox",id:"rejected",name:"orderlist",hidden:""}}),a("label",{staticClass:"btn btn-outline-danger rounded-btn mr-2 mob-mar",attrs:{for:"rejected",type:"button"},on:{click:function(e){return t.onStatusFilterClicked("3")}}},[t._v(t._s(this.RejectedText))])]),a("div",{staticClass:"btn-group"},[a("input",{attrs:{type:"checkbox",id:"resubmitted",name:"orderlist",hidden:""}}),a("label",{staticClass:"btn btn-outline-warning rounded-btn mr-2 mob-mar",attrs:{for:"resubmitted",type:"button"},on:{click:function(e){return t.onStatusFilterClicked("4")}}},[t._v(t._s(this.ResubmittedText))])]),t.canCreateOrder?a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-info rounded-btn mr-2 mob-mar",attrs:{type:"button"},on:{click:t.createOrder}},[t._v(" Create Order ")])]):t._e()]),a("div",{staticClass:"overflow-auto"},[a("b-table",{staticClass:"table order",attrs:{id:"orderList",items:this.getOrders,filter:t.filter,"filter-debounce":"1000",fields:t.getfields,"current-page":t.currentPage,"per-page":t.perPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-icon-left":""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"cell(Order_Number)",fn:function(e){return[a("span",[t._v(t._s(e.item.Order_Number))])]}},{key:"cell(actionMf)",fn:function(e){return["InConsideration"==e.item.status?a("router-link",{attrs:{to:{name:"OrderPayment",params:{orderId:e.item.orderId}}}},[t._v("Pay")]):"Rejected"==e.item.status?a("router-link",{attrs:{to:{name:"Order",params:{orderId:e.item.orderId}}}},[t._v("Edit")]):"Submitted"==e.item.status||"Resubmitted"==e.item.status||"Fullfilled"==e.item.status?a("router-link",{attrs:{to:{name:"FulFillOrder",params:{orderId:e.item.orderId}}}},[t._v("View")]):a("span",[t._v(t._s(e.item.status))])]}},{key:"cell(actionAdmin)",fn:function(e){return["Submitted"==e.item.status||"Resubmitted"==e.item.status?a("router-link",{attrs:{to:{name:"OrderReview",params:{orderId:e.item.orderId}}}},[t._v("Review")]):t.isNtlUser()&&"InConsideration"==e.item.status?a("router-link",{staticClass:"ml-3",attrs:{to:{name:"FulFillOrder",params:{orderId:e.item.orderId}}}},[t._v("Fulfill")]):a("router-link",{staticClass:"ml-3",attrs:{to:{name:"OrderView",params:{orderId:e.item.orderId}}}},[t._v("View")])]}}])}),a("b-pagination",{staticClass:"float-right mr-4",attrs:{"total-rows":20,"per-page":t.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])},i=[],s=(r("4de4"),r("c975"),r("a434"),r("a9e3"),r("bc3a")),n=r.n(s),o=r("a9e4"),l={data:function(){return{filter:"",entityIds:[],orderStatus:[],orderFrom:null,orderTill:null,locations:[],perPage:10,currentPage:1,totalRows:0,sortBy:"requestedOn",sortDesc:!0,AllText:"",SubmittedText:"",ApprovedText:"",RejectedText:"",ResubmittedText:"",Alltab:!0,role:"",mfFields:[{key:"orderNumber"},{key:"requestedOn",sortable:!0},{key:"status"},{key:"paymentStatus"},{key:"location",sortable:!0},{key:"actionMf",label:"Actions"}],adminFields:[{key:"orderNumber"},{key:"orgName",label:"Organization",sortable:!0},{key:"requestedOn",sortable:!0},{key:"status"},{key:"paymentStatus"},{key:"location",sortable:!0},{key:"actionAdmin",label:"Actions"}]}},props:{orgType:Number},created:function(){this.role=this.$store.state.clientAppDecodedToken.Role},components:{},computed:{getfields:function(){return this.canCreateOrder?this.mfFields:this.adminFields},canCreateOrder:function(){switch(this.role){case o["a"].MfAdmin:case o["a"].MfWarehouseIncharge:case o["a"].TpsafAdmin:case o["a"].TpsafFacilityAdmin:case o["a"].TpsafFacilityIncharge:return!0;default:return!1}},title:function(){if(this.isNtlUser())switch(this.orgType){case 3:return"Manufacturer Orders";case 4:return"Stock Orders";default:return"Orders"}return"Orders"}},methods:{createOrder:function(){this.$router.push({name:"Order"})},isNtlUser:function(){return this.role==o["a"].TsspAdmin||this.role==o["a"].TsspIntermediate||this.role==o["a"].TsspWarehouseIncharge},isTaxAuthUser:function(){return this.role==o["a"].TaxAuthAdmin||this.role==o["a"].TaxAuthRevenueOfficer},onStatusFilterClicked:function(t){if("All"!=t){var e=parseInt(t),r=this.orderStatus.indexOf(e);r>-1?(this.orderStatus.splice(r,1),this.Alltab=!1):(this.orderStatus.push(e),this.Alltab=!1),this.$root.$emit("bv::refresh::table","orderList")}else{this.orderStatus=[],this.$root.$emit("bv::refresh::table","orderList"),this.Alltab=!0;for(var a=document.getElementsByName("orderlist"),i=0;i<a.length;i++)"checkbox"==a[i].type&&(a[i].checked=!1)}},getOrders:function(t){var e=this;this.role=this.$store.state.clientAppDecodedToken.Role;var r=n()({url:"/Orders/GetOrders",method:"post",baseURL:"https://dev-authss-order-api.azurewebsites.net/api",data:{entityIds:this.entityIds,searchText:t.filter,locations:this.locations,orderStatuses:this.orderStatus,ordersFrom:this.orderFrom,ordersTill:this.orderTill,sortBy:t.sortBy,sortByDesc:t.sortDesc,pageNo:t.currentPage,pageSize:t.perPage,orgType:this.orgType}});return r.then((function(t){var r=t.data.miniOrderDtos;return e.totalRows=t.data.totalCount,e.AllText="All("+t.data.totalCount+")",e.SubmittedText="Submitted("+t.data.submittedCount+")",e.ApprovedText="Approved("+t.data.approvedCount+")",e.RejectedText="Rejected("+t.data.rejectedCount+")",e.ResubmittedText="Resubmitted("+t.data.resubmittedCount+")",r||[]}))}}},d=l,c=r("2877"),u=Object(c["a"])(d,a,i,!1,null,null,null);e["a"]=u.exports},"4de4":function(t,e,r){"use strict";var a=r("23e7"),i=r("b727").filter,s=r("1dde"),n=r("ae40"),o=s("filter"),l=n("filter");a({target:"Array",proto:!0,forced:!o||!l},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),i=r("5899"),s="["+i+"]",n=RegExp("^"+s+s+"*"),o=RegExp(s+s+"*$"),l=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(n,"")),2&t&&(r=r.replace(o,"")),r}};t.exports={start:l(1),end:l(2),trim:l(3)}},7156:function(t,e,r){var a=r("861d"),i=r("d2bb");t.exports=function(t,e,r){var s,n;return i&&"function"==typeof(s=e.constructor)&&s!==r&&a(n=s.prototype)&&n!==r.prototype&&i(t,n),t}},a434:function(t,e,r){"use strict";var a=r("23e7"),i=r("23cb"),s=r("a691"),n=r("50c4"),o=r("7b0b"),l=r("65f0"),d=r("8418"),c=r("1dde"),u=r("ae40"),p=c("splice"),b=u("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,f=Math.min,h=9007199254740991,A="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!p||!b},{splice:function(t,e){var r,a,c,u,p,b,g=o(this),v=n(g.length),y=i(t,v),I=arguments.length;if(0===I?r=a=0:1===I?(r=0,a=v-y):(r=I-2,a=f(m(s(e),0),v-y)),v+r-a>h)throw TypeError(A);for(c=l(g,a),u=0;u<a;u++)p=y+u,p in g&&d(c,u,g[p]);if(c.length=a,r<a){for(u=y;u<v-a;u++)p=u+a,b=u+r,p in g?g[b]=g[p]:delete g[b];for(u=v;u>v-a+r;u--)delete g[u-1]}else if(r>a)for(u=v-a;u>y;u--)p=u+a-1,b=u+r-1,p in g?g[b]=g[p]:delete g[b];for(u=0;u<r;u++)g[u+y]=arguments[u+2];return g.length=v-a+r,c}})},a9e3:function(t,e,r){"use strict";var a=r("83ab"),i=r("da84"),s=r("94ca"),n=r("6eeb"),o=r("5135"),l=r("c6b6"),d=r("7156"),c=r("c04e"),u=r("d039"),p=r("7c73"),b=r("241c").f,m=r("06cf").f,f=r("9bf2").f,h=r("58a8").trim,A="Number",g=i[A],v=g.prototype,y=l(p(v))==A,I=function(t){var e,r,a,i,s,n,o,l,d=c(t,!1);if("string"==typeof d&&d.length>2)if(d=h(d),e=d.charCodeAt(0),43===e||45===e){if(r=d.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(d.charCodeAt(1)){case 66:case 98:a=2,i=49;break;case 79:case 111:a=8,i=55;break;default:return+d}for(s=d.slice(2),n=s.length,o=0;o<n;o++)if(l=s.charCodeAt(o),l<48||l>i)return NaN;return parseInt(s,a)}return+d};if(s(A,!g(" 0o1")||!g("0b1")||g("+0x1"))){for(var C,k=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof k&&(y?u((function(){v.valueOf.call(r)})):l(r)!=A)?d(new g(I(e)),r,k):I(e)},N=a?b(g):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),T=0;N.length>T;T++)o(g,C=N[T])&&!o(k,C)&&f(k,C,m(g,C));k.prototype=v,v.constructor=k,n(i,A,k)}},e055:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQwNThBQThBNzBBMTFFQUE3NTVFMDQ5Qzg5RDBGQzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQwNThBQTlBNzBBMTFFQUE3NTVFMDQ5Qzg5RDBGQzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRDA1OEFBNkE3MEExMUVBQTc1NUUwNDlDODlEMEZDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRDA1OEFBN0E3MEExMUVBQTc1NUUwNDlDODlEMEZDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuT+QyAAAAD9SURBVHja7JfBCsIwDIY7b4KPr6JQ2+2gKPpIgoI3PYhPMBNooYhrs6adE/pD2GVtvuVPs61q21aMQRMxEhWQAlJAegvniC9AD4gtM80O4unNQwA5IS+EjISQZv2eC4LSkTDSXZcCBFWbTRURQpn7N5Q26AOCaoiVkZ8QqUHcykiKHTlBfDapb5XICeLaNIeYQix8EDlBUGuT/Gyuy9iZxQVB3QzElTM8U1Xk8suK2B5ZQcwcqEF7xJ6apgNukFNjx30dgMw6R+wT60Dv6JyTtcuOUA8lfdeE7BAUm7ggR6IdIZsOXJAXbsL8QsP1d1+eqvxyFpAC8q8gbwEGAA5jqcJl9/crAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-27f1d7e4.a62e5d3e.js.map