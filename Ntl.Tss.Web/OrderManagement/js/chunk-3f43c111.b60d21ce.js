(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f43c111"],{"44b0":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"app-container sidebar-enabled"},[r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("Header")],1),r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("Sidebar")],1),r("div",{staticClass:"app-main__inner pt-5 mt-5"},[r("Changeskulisting")],1),r("transition",{attrs:{name:"fade",mode:"out-in",appear:""}},[r("Footer")],1)],1)},i=[],s=r("0418"),n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"d-block header-section"},[t._m(0),a("b-col",{staticClass:"mb-2 col-md-6 float-right search-section"},[a("b-form-group",{staticClass:"mb-0",attrs:{label:"","label-cols-sm":"3","label-align-sm":"right","label-size":"sm","label-for":"filterInput"}},[a("b-input-group",[a("b-form-input",{staticClass:"form-control",attrs:{type:"search",id:"filterInput",placeholder:"Type to Search"},model:{value:t.filter,callback:function(e){t.filter=e},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!t.filter},on:{click:function(e){t.filter=""}}},[a("img",{attrs:{src:r("e055"),alt:""}})])],1)],1)],1)],1)],1),a("div",{staticClass:"container-fluid order-list"},[a("div",{staticClass:"row"},[a("div",{staticClass:"col-12 col-md-12 mt-3 mb-5"},[a("div",{staticClass:"card pb-3"},[a("div",{staticClass:"p-3 list-filter"},[a("div",{staticClass:"btn-group"},[a("button",{staticClass:"btn btn-outline-dark rounded-btn mr-2 mob-mar",class:{active:this.Alltab},attrs:{type:"button"},on:{click:function(e){return t.onStatusFilterClicked("All")}}},[t._v(t._s(this.AllText))])]),a("div",{staticClass:"btn-group"},[a("input",{attrs:{type:"checkbox",id:"submitted",name:"orderlist",hidden:""}}),a("label",{staticClass:"btn btn-outline-info rounded-btn mr-2 mob-mar",attrs:{for:"submitted",type:"button"},on:{click:function(e){return t.onStatusFilterClicked("1")}}},[t._v(t._s(this.SubmittedText))])]),a("div",{staticClass:"btn-group"},[a("input",{attrs:{type:"checkbox",id:"approved",name:"orderlist",hidden:""}}),a("label",{staticClass:"btn btn-outline-success rounded-btn mr-2 mob-mar",attrs:{for:"approved",type:"button"},on:{click:function(e){return t.onStatusFilterClicked("2")}}},[t._v(t._s(this.ApprovedText))])]),a("div",{staticClass:"btn-group"},[a("input",{attrs:{type:"checkbox",id:"rejected",name:"orderlist",hidden:""}}),a("label",{staticClass:"btn btn-outline-danger rounded-btn mr-2 mob-mar",attrs:{for:"rejected",type:"button"},on:{click:function(e){return t.onStatusFilterClicked("3")}}},[t._v(t._s(this.RejectedText))])])]),a("div",{staticClass:"overflow-auto"},[a("b-table",{staticClass:"table order",attrs:{id:"orderList",items:this.getOrders,filter:t.filter,"filter-debounce":"1000",fields:t.getfields,"current-page":t.currentPage,"per-page":t.perPage,"sort-by":t.sortBy,"sort-desc":t.sortDesc,"sort-icon-left":""},on:{"update:sortBy":function(e){t.sortBy=e},"update:sort-by":function(e){t.sortBy=e},"update:sortDesc":function(e){t.sortDesc=e},"update:sort-desc":function(e){t.sortDesc=e}},scopedSlots:t._u([{key:"cell(poNum)",fn:function(e){return[a("span",[t._v(t._s(e.item.poNum))])]}},{key:"cell(actionMF)",fn:function(e){return[a("router-link",{attrs:{to:{name:"changeSkuProductNameView",params:{requestId:e.item.id}}}},[t._v("View")])]}},{key:"cell(actionAdmin)",fn:function(e){return["Submitted"==e.item.status?a("router-link",{staticClass:"mr-3",attrs:{to:{name:"changeSkuProductNameReview",params:{requestId:e.item.id}}}},[t._v("Review")]):a("router-link",{attrs:{to:{name:"changeSkuProductNameView",params:{requestId:e.item.id}}}},[t._v("View")])]}}])}),a("b-pagination",{staticClass:"float-right mr-4",attrs:{"total-rows":this.totalRows,"per-page":t.perPage,"first-text":"First","prev-text":"Prev","next-text":"Next","last-text":"Last"},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)])])])])])},l=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("h1",[r("b",[t._v("Change SKU/Product Name")])])}],o=(r("4de4"),r("c975"),r("a434"),r("bc3a")),c=r.n(o),d={data:function(){return{filter:"",mfIds:[],orderStatus:[],orderFrom:null,orderTill:null,locations:[],perPage:3,currentPage:1,totalRows:0,sortBy:"requestedDate",sortDesc:!0,AllText:"",SubmittedText:"",ApprovedText:"",InTransitText:"",RejectedText:"",ClosedText:"",Alltab:!0,MFFields:[{key:"number",label:"Requisition Number"},{key:"orgName",label:"Manufacturer"},{key:"requestedDate",label:"Date",sortable:!0},{key:"status",sortable:!0},{key:"actionMF",label:"Actions"}],adminFields:[{key:"number",label:"Requisition Number"},{key:"orgName",label:"Manufacturer"},{key:"requestedDate",label:"Date",sortable:!0},{key:"status",sortable:!0},{key:"actionAdmin",label:"Actions"}]}},created:function(){},components:{},computed:{getfields:function(){return"TsspAdmin"==this.$store.state.clientAppDecodedToken.Role?this.adminFields:this.MFFields}},methods:{onStatusFilterClicked:function(t){if("All"!=t){var e=parseInt(t),r=this.orderStatus.indexOf(e);r>-1?(this.orderStatus.splice(r,1),this.Alltab=!1):(this.orderStatus.push(e),this.Alltab=!1),this.$root.$emit("bv::refresh::table","orderList")}else{this.orderStatus=[],this.$root.$emit("bv::refresh::table","orderList"),this.Alltab=!0;for(var a=document.getElementsByName("orderlist"),i=0;i<a.length;i++)"checkbox"==a[i].type&&(a[i].checked=!1)}},getOrders:function(t){var e=this,r=c()({url:"/ReelChange/GetReelChangeRequests",method:"post",baseURL:"https://dev-authss-order-api.azurewebsites.net/api",data:{searchText:t.filter,statuses:this.orderStatus,requestsFrom:this.orderFrom,requestsTill:this.orderTill,sortBy:t.sortBy,sortByDesc:t.sortDesc,pageNo:t.currentPage,pageSize:t.perPage}});return r.then((function(t){var r=t.data.miniReelChangeRequeustDtos;return e.totalRows=t.data.totalCount,e.AllText="All("+t.data.totalCount+")",e.SubmittedText="Submitted("+t.data.submittedCount+")",e.ApprovedText="Approved("+t.data.approvedCount+")",e.RejectedText="Rejected("+t.data.rejectedCount+")",r||[]}))}}},u=d,b=r("2877"),p=Object(b["a"])(u,n,l,!1,null,null,null),m=p.exports,h=r("5ea5"),f=r("fd2d"),g={name:"app",components:{Header:s["a"],Changeskulisting:m,Sidebar:h["a"],Footer:f["a"]},methods:{}},A=g,v=Object(b["a"])(A,a,i,!1,null,null,null);e["default"]=v.exports},"4de4":function(t,e,r){"use strict";var a=r("23e7"),i=r("b727").filter,s=r("1dde"),n=r("ae40"),l=s("filter"),o=n("filter");a({target:"Array",proto:!0,forced:!l||!o},{filter:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}})},a434:function(t,e,r){"use strict";var a=r("23e7"),i=r("23cb"),s=r("a691"),n=r("50c4"),l=r("7b0b"),o=r("65f0"),c=r("8418"),d=r("1dde"),u=r("ae40"),b=d("splice"),p=u("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,h=Math.min,f=9007199254740991,g="Maximum allowed length exceeded";a({target:"Array",proto:!0,forced:!b||!p},{splice:function(t,e){var r,a,d,u,b,p,A=l(this),v=n(A.length),k=i(t,v),C=arguments.length;if(0===C?r=a=0:1===C?(r=0,a=v-k):(r=C-2,a=h(m(s(e),0),v-k)),v+r-a>f)throw TypeError(g);for(d=o(A,a),u=0;u<a;u++)b=k+u,b in A&&c(d,u,A[b]);if(d.length=a,r<a){for(u=k;u<v-a;u++)b=u+a,p=u+r,b in A?A[p]=A[b]:delete A[p];for(u=v;u>v-a+r;u--)delete A[u-1]}else if(r>a)for(u=v-a;u>k;u--)b=u+a-1,p=u+r-1,b in A?A[p]=A[b]:delete A[p];for(u=0;u<r;u++)A[u+k]=arguments[u+2];return A.length=v-a+r,d}})},e055:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACIAAAAiCAYAAAA6RwvCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQwNThBQThBNzBBMTFFQUE3NTVFMDQ5Qzg5RDBGQzQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQwNThBQTlBNzBBMTFFQUE3NTVFMDQ5Qzg5RDBGQzQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFRDA1OEFBNkE3MEExMUVBQTc1NUUwNDlDODlEMEZDNCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFRDA1OEFBN0E3MEExMUVBQTc1NUUwNDlDODlEMEZDNCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuT+QyAAAAD9SURBVHja7JfBCsIwDIY7b4KPr6JQ2+2gKPpIgoI3PYhPMBNooYhrs6adE/pD2GVtvuVPs61q21aMQRMxEhWQAlJAegvniC9AD4gtM80O4unNQwA5IS+EjISQZv2eC4LSkTDSXZcCBFWbTRURQpn7N5Q26AOCaoiVkZ8QqUHcykiKHTlBfDapb5XICeLaNIeYQix8EDlBUGuT/Gyuy9iZxQVB3QzElTM8U1Xk8suK2B5ZQcwcqEF7xJ6apgNukFNjx30dgMw6R+wT60Dv6JyTtcuOUA8lfdeE7BAUm7ggR6IdIZsOXJAXbsL8QsP1d1+eqvxyFpAC8q8gbwEGAA5jqcJl9/crAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=chunk-3f43c111.b60d21ce.js.map