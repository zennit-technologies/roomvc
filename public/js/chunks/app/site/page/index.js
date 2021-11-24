(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{AUp7:function(t,e,s){"use strict";s.r(e);var a=s("UPFT"),i={extends:s("lSlZ").a,mounted:function(){this.filters.status=!0===this.filters.status||"true"===this.filters.status}},r=s("KHd+"),n={components:{FilterForm:Object(r.a)(i,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("filter-wrapper",{attrs:{boxed:t.boxed,"is-loading":t.isLoading},on:{close:function(e){return t.$emit("close")}}},[s("div",{staticClass:"row"},[s("div",{staticClass:"col-12 col-md-4 mb-3"},[s("base-input",{attrs:{"auto-focus":"",label:t.$t("site.page.props.title"),type:"text",disabled:t.isLoading},model:{value:t.filters.title,callback:function(e){t.$set(t.filters,"title",e)},expression:"filters.title"}})],1),t._v(" "),s("div",{staticClass:"col-12 col-md-4 mb-3"},[s("base-input",{attrs:{label:t.$t("site.page.props.code"),type:"text",disabled:t.isLoading},model:{value:t.filters.code,callback:function(e){t.$set(t.filters,"code",e)},expression:"filters.code"}})],1),t._v(" "),s("div",{staticClass:"col-12 col-md-4 mb-3 d-flex justify-content-start align-items-end"},[s("base-checkbox",{staticClass:"ml-3 mb-4",model:{value:t.filters.status,callback:function(e){t.$set(t.filters,"status",e)},expression:"filters.status"}},[t._v("\n                "+t._s(t.$t("site.page.props.is_published"))+"\n            ")])],1)])])}),[],!1,null,null,null).exports},extends:a.a,data:function(){return{fields:[{key:"title",label:$t("site.page.props.title"),sort:"title"},{key:"template.name",label:$t("site.page_template.template")},{key:"parent.title",label:$t("site.page.props.parent"),thClass:"d-none",tdClass:"d-none"},{key:"slug",label:$t("site.page.props.slug"),thClass:"d-none",tdClass:"d-none"},{key:"status",label:$t("site.is_published"),sort:"status",transformer:"badgeStatusYesNo"},{key:"createdAt",label:$t("general.created_at"),sort:"created_at",transformer:"date",thClass:"d-none",tdClass:"d-none"},{key:"updatedAt",label:$t("general.updated_at"),sort:"updated_at",transformer:"date",thClass:"d-none",tdClass:"d-none"},{key:"actions",label:"",cantHide:!0,tdClass:"actions-dropdown-wrapper"}],filtersOptions:{title:"",code:"",status:""},permissionsRequired:{add:"access-page",config:"access-page-config"},routesRequired:{add:"appSitePageAdd",config:"appSitePageConfigTemplate"},initUrl:"site/pages",dataType:"page"}},mounted:function(){this.updatePageMeta()}},o=Object(r.a)(n,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"entity-list-container"},[s("collapse-transition",{attrs:{group:!0,duration:300,tag:"div"}},[t.showFilters?s("filter-form",{key:"filters",attrs:{boxed:!0,"pre-requisite":t.preRequisite,"is-loading":t.isLoading},on:{close:t.toggleFilter}}):t._e(),t._v(" "),s("base-container",{key:"list",staticClass:"p-0",attrs:{boxed:"","with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[t.isInitialized?s("table-wrapper",{attrs:{meta:t.entities.meta,filtered:t.isFiltered,"add-button-route":"appSitePageAdd","add-button-permissions":["access-page"],"entity-title":"site.page.page","entities-title":"site.page.pages","entity-description":"site.page.module_description"}},[s("b-table",{directives:[{name:"show",rawName:"v-show",value:t.entities.meta.total,expression:"entities.meta.total"}],ref:"btable",attrs:{items:t.itemsProvider,fields:t.fields,busy:t.isLoading,hover:"",striped:"",stacked:"sm","per-page":t.entities.meta.perPage,"current-page":t.entities.meta.currentPage,filters:null},on:{"update:busy":function(e){t.isLoading=e}},scopedSlots:t._u([{key:"cell(createdAt)",fn:function(e){return[s("view-date",{staticClass:"mb-0",attrs:{value:e.item.createdAt,"to-format":t.vars.defaultDateTimeFormat,tag:"span"}})]}},{key:"cell(status)",fn:function(e){return[e.item.status?s("badge",{attrs:{rounded:"",type:"primary"}},[s("i",{staticClass:"far fa-check-circle"}),t._v(" "+t._s(t.$t("general.yes")))]):s("badge",{attrs:{rounded:"",type:"dark"}},[s("i",{staticClass:"far fa-circle"}),t._v(" "+t._s(t.$t("general.no")))])]}},{key:"cell(actions)",fn:function(e){return[s("table-row-actions",[s("a",{staticClass:"dropdown-item",attrs:{href:"/pages/"+e.item.slug,target:"_blank"}},[s("i",{staticClass:"fas fa-arrow-circle-right"}),t._v(" "+t._s(t.$t("global.view",{attribute:t.$t("site.page.page")})))]),t._v(" "),s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appSitePageEdit",params:{uuid:e.item.uuid}}}},[s("i",{staticClass:"fas fa-edit"}),t._v(" "+t._s(t.$t("global.edit",{attribute:t.$t("site.page.page")})))]),t._v(" "),s("router-link",{staticClass:"dropdown-item",attrs:{to:{name:"appSitePageDuplicate",params:{uuid:e.item.uuid}}}},[s("i",{staticClass:"fas fa-copy"}),t._v(" "+t._s(t.$t("global.duplicate",{attribute:t.$t("site.page.page")})))]),t._v(" "),s("a",{staticClass:"dropdown-item",on:{click:function(s){return s.stopPropagation(),t.deleteEntity(e.item)}}},[s("i",{staticClass:"fas fa-trash"}),t._v(" "+t._s(t.$t("global.delete",{attribute:t.$t("site.page.page")})))])],1)]}}],null,!1,4052937324)})],1):t._e()],1)],1)],1)}),[],!1,null,null,null);e.default=o.exports},lSlZ:function(t,e,s){"use strict";var a=s("L2JU");function i(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function r(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?i(Object(s),!0).forEach((function(e){n(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):i(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}function n(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}var o={props:{boxed:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},computed:r(r({},Object(a.c)("common",["filters"])),Object(a.c)("config",["vars"])),methods:r(r({},Object(a.b)("common",["ResetFilters"])),{},{submit:function(){var t=r(r(r({},this.$route.query),this.filters),{},{filtered:!0,filtered_at:moment().unix()});this.$router.push({path:this.$route.path,query:t}).catch((function(t){}))},reset:function(){this.ResetFilters(),this.$route.query&&this.$route.query.filtered&&this.$router.push({path:this.$route.path})}})},l=s("KHd+"),c=Object(l.a)(o,(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("base-container",{staticClass:"mb-element",attrs:{boxed:t.boxed,"with-loader":"","is-loading":t.isLoading,"loader-color":t.vars.loaderColor}},[s("close-button",{attrs:{title:t.$t("general.close")},on:{click:function(e){return t.$emit("close")}}}),t._v(" "),s("form",{on:{submit:function(e){return e.preventDefault(),t.submit.apply(null,arguments)}}},[t._t("default"),t._v(" "),s("div",{staticClass:"form-footer mt-3"},[s("div",{staticClass:"left-side"},[s("base-button",{attrs:{type:"button",design:"light",disabled:t.isLoading},on:{click:function(e){return t.$emit("close")}}},[t._v(t._s(t.$t("general.close")))])],1),t._v(" "),s("div",{staticClass:"right-side"},[s("base-button",{attrs:{type:"button",design:"light",disabled:t.isLoading},on:{click:t.reset}},[t._v(t._s(t.$t("general.clear")))]),t._v(" "),s("base-button",{attrs:{type:"submit",design:"primary",disabled:t.isLoading}},[t._v(t._s(t.$t("general.filter")))])],1)])],2)],1)}),[],!1,null,null,null).exports;function u(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function d(t,e,s){return e in t?Object.defineProperty(t,e,{value:s,enumerable:!0,configurable:!0,writable:!0}):t[e]=s,t}e.a={components:{FilterWrapper:c},props:{preRequisite:{type:Object,default:function(){return{}}},boxed:{type:Boolean,default:!1},isLoading:{type:Boolean,default:!1}},computed:function(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?u(Object(s),!0).forEach((function(e){d(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):u(Object(s)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}({},Object(a.c)("common",["filters"]))}}}]);
//# sourceMappingURL=index.js.map?id=e05b652b5612e4d9c3c9