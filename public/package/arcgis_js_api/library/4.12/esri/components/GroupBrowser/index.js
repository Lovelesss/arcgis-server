// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("../Component dojo/promise/all dojo/_base/kernel ../Loaders/LoaderBars dojo/i18n!../GroupBrowser/nls/resources ../Navigation/Pager/index ../Dropdowns/SortDropdown/index ../Buttons/Ago2018Checkbox ../Badges/Chip ../GroupCards/GroupCheckCard/index".split(" "),function(p,q,u,v,w,x,y,z,A,B){return function(e){function b(c){if(a[c])return a[c].exports;var d=a[c]={i:c,l:!1,exports:{}};return e[c].call(d.exports,d,d.exports,b),d.l=!0,d.exports}var a={};return b.m=e,b.c=a,b.d=function(a,d,e){b.o(a,
d)||Object.defineProperty(a,d,{enumerable:!0,get:e})},b.r=function(a){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:"Module"});Object.defineProperty(a,"__esModule",{value:!0})},b.t=function(a,d){if((1&d&&(a=b(a)),8&d)||4&d&&"object"==typeof a&&a&&a.__esModule)return a;var c=Object.create(null);if(b.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:a}),2&d&&"string"!=typeof a)for(var e in a)b.d(c,e,function(b){return a[b]}.bind(null,e));
return c},b.n=function(a){var d=a&&a.__esModule?function(){return a.default}:function(){return a};return b.d(d,"a",d),d},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p="",b(b.s=395)}({0:function(e,b,a){function c(a,b){function c(){this.constructor=a}d(a,b);a.prototype=null===b?Object.create(b):(c.prototype=b.prototype,new c)}a.d(b,"b",function(){return c});a.d(b,"a",function(){return f});var d=function(a,b){return(d=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(a,
b){a.__proto__=b}||function(a,b){for(var d in b)b.hasOwnProperty(d)&&(a[d]=b[d])})(a,b)},f=function(){return(f=Object.assign||function(a){for(var b,d=1,c=arguments.length;d<c;d++)for(var e in b=arguments[d])Object.prototype.hasOwnProperty.call(b,e)&&(a[e]=b[e]);return a}).apply(this,arguments)}},1:function(e,b){e.exports=p},108:function(e,b){e.exports=x},109:function(e,b){e.exports=y},12:function(e,b,a){function c(a){return a.reduce(function(a,b){return b&&b.relatedItems?a.concat(b.relatedItems.map(function(a){return a})):
a},[])}function d(a,b,d){return a(b,{query:f.a({f:"json"},d)}).then(function(a){return a.data})}a.d(b,"k",function(){return h});a.d(b,"f",function(){return l});a.d(b,"c",function(){return m});a.d(b,"d",function(){return n});a.d(b,"g",function(){return k});a.d(b,"i",function(){return C});a.d(b,"h",function(){return D});a.d(b,"j",function(){return E});a.d(b,"a",function(){return r});a.d(b,"b",function(){return t});a.d(b,"l",function(){return F});a.d(b,"m",function(){return G});a.d(b,"n",function(){return p});
a.d(b,"e",function(){return q});a.d(b,"o",function(){return d});var f=a(0);e=a(9);var g=a.n(e),h=function(a,b,c){return d(a,b.restUrl+"/portals/self",{culture:c,default:!0})},l=function(a,b,c){return d(a,b.restUrl+"/content/items/"+c+"/data")},m=function(a,b,c){return d(a,b.restUrl+"/community/groups",{q:c})},n=function(a,b,c){return d(a,b.restUrl+"/community/groups/"+c+"/categorySchema")},k=function(a,b,c){return d(a,b.restUrl+"/portals/"+(c||b.id)+"/categorySchema")},C=function(a,b,d,c){return a(b.restUrl+
"/portals/"+(d||b.id)+"/collaborationsSummary",c)},D=function(a,b,d,c){return a(b.restUrl+"/portals/"+(d||b.id)+"/collaboratedItems",c)},E=function(a,b,c){return d(a,location.protocol+"//"+b.portalHostname+"/sharing/rest/portals/"+(c||b.id))},r=function(a,b,d){return a(b.restUrl+"/community/groups",{query:{f:"json",q:"orgid:"+b.id+" AND access:public",num:100,start:d||1,sortField:"title",sortOrder:"asc"}}).then(function(d){return d.data.total>d.data.start+d.data.num?r(a,b,d.data.start+d.data.num).then(function(a){return f.a({},
a,{data:f.a({},a.data,{results:d.data.results.concat(a.data.results)})})}):d})},t=function(a,b,e,k){return a(b.restUrl+"/community/users/"+e+"/provisionedListings",{query:{f:"json",num:100,start:k||1}}).then(function(k){var f=g()(k.data.provisionedListings.filter(function(a){return!!a.itemId}).map(function(c){return d(a,b.restUrl+"/content/items/"+c.itemId)})),h=k.data.provisionedListings.map(function(c){return d(a,b.restUrl+"/content/items/"+(c.id||c.itemId)+"/relatedItems?relationshipType\x3dListed2ImplicitlyListed\x26direction\x3dforward").then(function(a){return a},
function(a){})});return k.data.total>k.data.start+k.data.num?t(a,b,e,k.data.start+k.data.num).then(function(a){return g()([f].concat(h)).then(function(b){return b[0].results.concat(c(b.slice(1))).concat(a)})}):g()([f].concat(h)).then(function(a){return a[0].concat(c(a.slice(1)))})})},F=function(a,b,c){return d(a,b.restUrl+"/community/users/"+(c||b.user.username))},G=function(a,b,c){return d(a,b.restUrl+"/content/users/"+(c||b.user.username),{num:1})},p=function(a,b,c){return d(a,b.restUrl+"/content/groups/"+
c)},q=function(a,b,c){return d(a,b.restUrl+"/community/groups",c)}},125:function(e,b,a){function c(){g("gb__select-all-input")}function d(){g("gb__clear-selection-btn")}function f(){setTimeout(function(){var a=document.querySelector(".gcard-gcc__container");a&&(a=a.querySelector(".btn-2018check__input"))&&a.focus()},h)}function g(a){setTimeout(function(){var b=document.querySelector("#"+a);b&&b.focus()},h)}a.d(b,"c",function(){return c});a.d(b,"a",function(){return d});a.d(b,"b",function(){return f});
var h=50},128:function(e,b,a){a.d(b,"a",function(){return d});var c=a(0);e=a(5);var d=Object(e.a)(function(a,b){return c.a({},b,{thumbURI:function(a,b){var d;return b.thumbnail&&(d=a.restUrl+"/community/groups/"+b.id+"/info/"+b.thumbnail+(a.credential?"?token\x3d"+a.credential.token:"")),d}(a,b)})})},138:function(e,b){e.exports=z},141:function(e,b,a){a.d(b,"a",function(){return g});a.d(b,"b",function(){return h});e=a(1);b=a(160);var c=a(150),d=a(153),f=a(156);a=a(149);var g={config:a.b,parameters:c.b,
results:d.b,ui:f.b,utils:b.b},h=Object(e.combineReducers)({config:a.a,parameters:c.a,results:d.a,ui:f.a,utils:b.a})},142:function(e,b,a){var c=a(49);a.d(b,"b",function(){return c.d});var d=a(67);a.d(b,"a",function(){return d.e});a.d(b,"c",function(){return d.f})},149:function(e,b,a){a.d(b,"b",function(){return c});var c={groupsPerPage:10,baseQ:""};b.a=function(a){return void 0===a&&(a=c),a}},150:function(e,b,a){a.d(b,"b",function(){return d});e=a(1);var c=a(151);a=a(152);var d={searchString:c.b,sort:a.b};
b.a=Object(e.combineReducers)({searchString:c.a,sort:a.a})},151:function(e,b,a){a.d(b,"b",function(){return f});var c=a(0),d=a(350),f={current:"",previous:""};b.a=function(a,b){switch(void 0===a&&(a=f),b.type){case d.a:return c.a({},a,{current:b.payload,previous:a.current});default:return a}}},152:function(e,b,a){a.d(b,"b",function(){return f});var c=a(0),d=a(82),f={field:"title",order:"asc"},g={relevance:"desc",title:"asc",created:"desc",owner:"asc",modified:"desc",numviews:"desc",avgrating:"desc"};
b.a=function(a,b){switch(void 0===a&&(a=f),b.type){case d.a:return c.a({},a,{field:b.payload,order:g[b.payload]});case d.b:return c.a({},a,{order:b.payload});default:return a}}},153:function(e,b,a){a.d(b,"b",function(){return d});e=a(1);var c=a(154);a=a(155);var d={currentQuery:c.b,groups:a.b};b.a=Object(e.combineReducers)({currentQuery:c.a,groups:a.a})},154:function(e,b,a){a.d(b,"b",function(){return d});var c=a(49),d={start:1,total:0};b.a=function(a,b){switch(void 0===a&&(a=d),b.type){case c.c:return{start:b.payload.start,
total:b.payload.total};default:return a}}},155:function(e,b,a){a.d(b,"b",function(){return g});var c=a(0),d=a(67),f=a(49),g={displayGroups:[],selectedGroups:{},status:"loading"};b.a=function(a,b){switch(void 0===a&&(a=g),b.type){case d.b:return c.a({},a,{selectedGroups:b.payload.reduce(function(a,b){return a[b.id]&&delete a[b.id],a},a.selectedGroups)});case d.c:return c.a({},a,{selectedGroups:b.payload.reduce(function(a,b){return a[b.id]=b,a},a.selectedGroups)});case d.a:return c.a({},a,{selectedGroups:{}});
case f.a:return c.a({},a,{status:"loading"});case f.c:return c.a({},a,{displayGroups:b.payload.results,status:"loaded"});case f.b:return c.a({},a,{displayGroups:[],status:"failed"});default:return a}}},156:function(e,b,a){a.d(b,"b",function(){return f});e=a(1);var c=a(157),d=a(158);a=a(159);var f={page:c.b,sort:d.b,focus:a.b};b.a=Object(e.combineReducers)({page:c.a,sort:d.a,focus:a.a})},157:function(e,b,a){a.d(b,"b",function(){return g});var c=a(0),d=a(352),f=a(49),g={number:1};b.a=function(a,b){switch(void 0===
a&&(a=g),b.type){case d.a:return c.a({},a,{number:b.payload});case f.c:return c.a({},a,{number:b.payload.num>b.payload.total?1:Math.ceil(b.payload.start/b.payload.num)});case f.b:return c.a({},a,{number:1});default:return a}}},158:function(e,b,a){a.d(b,"b",function(){return f});var c=a(82),d=a(353),f=!1;b.a=function(a,b){switch(void 0===a&&(a=f),b.type){case c.a:case c.b:case d.a:return!a;default:return a}}},159:function(e,b,a){a.d(b,"b",function(){return g});var c=a(0),d=a(49),f=a(82),g={focusSelectAll:!1};
b.a=function(a,b){switch(b.type){case d.b:case d.c:return c.a({},a,{focusSelectAll:!1});case f.a:case f.b:return c.a({},a,{focusSelectAll:!0});default:return a}}},16:function(e,b,a){function c(){for(var a=[],b=0;b<arguments.length;b++)a[b]=arguments[b];return function(b){return a.reduceRight(function(a,b){return b(a)},b)}}a.d(b,"a",function(){return c})},160:function(e,b,a){a.d(b,"b",function(){return d});var c=a(27),d={portal:{},request:function(a){return null}};b.a=function(a,b){return void 0===
a&&(a=d),b.type,a.portal.portalHostname&&!a.portal.baseUrl&&(a.portal.baseUrl=Object(c.a)(a.portal)),a}},216:function(e,b,a){var c=a(0),d=a(68);e=a(1);var f=a(350),g=a(82),h=a(49),l=a(353),m=a(109),n=a.n(m);a=function(a){function b(b){b=a.call(this,b)||this;return b.handleInputChange=b.handleInputChange.bind(b),b.handleInputKeyDown=b.handleInputKeyDown.bind(b),b.handleSortFieldChange=b.handleSortFieldChange.bind(b),b.handleSortOrderChange=b.handleSortOrderChange.bind(b),b.handleSortClick=b.handleSortClick.bind(b),
b}return c.b(b,a),b.prototype.render=function(a){return a("div",{class:"gb-search-area__container"},a("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},a("path",{d:"M19.205 18.295l-7.036-7.035A6.874 6.874 0 0 0 6.875 0 6.874 6.874 0 0 0 0 6.875a6.874 6.874 0 0 0 11.286 5.27l7.035 7.034.884-.884zM1.25 6.875A5.632 5.632 0 0 1 6.875 1.25 5.632 5.632 0 0 1 12.5 6.875 5.632 5.632 0 0 1 6.875 12.5 5.632 5.632 0 0 1 1.25 6.875z",fill:"#595959","fill-rule":"nonzero"})),a("input",{class:"gb-search-area__input",
title:d.searchGroups,"aria-label":d.searchGroups,type:"search",oninput:this.handleInputChange,onkeydown:this.handleInputKeyDown,value:this.props.currentSearchString,placeholder:d.searchGroups}),a("div",{class:"gb-search-area__btn-section"},a(n.a,{active:this.props.sortActive,key:"gb-sort-dropdown",field:this.props.sortField,order:this.props.sortOrder,availableFields:["title","owner","created","modified"],onFieldChange:this.handleSortFieldChange,onOrderChange:this.handleSortOrderChange,onClick:this.handleSortClick})))},
b.prototype.handleInputChange=function(a){this.props.changeSearchString(a.target.value);""===a.target.value&&this.props.search()},b.prototype.handleInputKeyDown=function(a){13===a.keyCode&&this.props.search()},b.prototype.handleSortFieldChange=function(a){this.props.changeSortField(a);this.props.search()},b.prototype.handleSortOrderChange=function(a){this.props.changeSortOrder(a);this.props.search()},b.prototype.handleSortClick=function(){this.props.toggleSortDropdown()},b}(e.Component);b.a=Object(e.connect)(function(a){return{currentSearchString:a.parameters.searchString.current,
sortActive:a.ui.sort,sortField:a.parameters.sort.field,sortOrder:a.parameters.sort.order}},function(a){return{changeSearchString:function(b){return a(Object(f.b)(b))},changeSortField:function(b){return a(Object(g.c)(b))},changeSortOrder:function(b){return a(Object(g.d)(b))},search:function(){return a(Object(h.d)())},toggleSortDropdown:function(){return a(Object(l.b)())}}})(a)},217:function(e,b,a){var c=a(0);e=a(1);var d=a(48),f=a.n(d),g=a(220),h=a(218),l=a(67);a=function(a){function b(b){b=a.call(this,
b)||this;return b.handleGroupCheck=b.handleGroupCheck.bind(b),b.handleGroupUncheck=b.handleGroupUncheck.bind(b),b}return c.b(b,a),b.prototype.render=function(a){var b="loading"===this.props.status,d={"gb-results-panel__section-container":!0,"gb-results-panel__section-container--loading":b},c=this.props.resultTotal,e=0===c?0:this.props.groupsPerPage*(this.props.pageNumber-1)+1,k=c<this.props.groupsPerPage*this.props.pageNumber?c:this.props.groupsPerPage*this.props.pageNumber;return a("div",{class:"gb-results-panel__container"},
b?a(f.a,{key:"group-browser-loader-bars"}):null,a("section",{classes:d},a(h.a,{key:"group-browser-totals",startNum:e,endNum:k,totalItems:c})),a("section",{classes:d},a(g.a,{key:"groups-area",displayGroups:this.props.displayGroups,selectedGroups:this.props.selectedGroups,sortField:this.props.sortField,handleGroupCheck:this.handleGroupCheck,handleGroupUncheck:this.handleGroupUncheck,portal:this.props.portal})))},b.prototype.handleGroupCheck=function(a){this.props.selectGroups([a])},b.prototype.handleGroupUncheck=
function(a){this.props.deselectGroups([a])},b}(e.Component);b.a=Object(e.connect)(function(a){return{status:a.results.groups.status,resultTotal:a.results.currentQuery.total,groupsPerPage:a.config.groupsPerPage,pageNumber:a.ui.page.number,displayGroups:a.results.groups.displayGroups,selectedGroups:a.results.groups.selectedGroups,sortField:a.parameters.sort.field,portal:a.utils.portal}},function(a){return{selectGroups:function(b){return a(Object(l.f)(b))},deselectGroups:function(b){return a(Object(l.e)(b))}}})(a)},
218:function(e,b,a){var c=a(0),d=a(68),f=a(47);e=a(1);var g=a(67),h=a(219),l=a.n(h),h=a(138),m=a.n(h);a=function(a){function b(b){b=a.call(this,b)||this;return b.handleCheckClick=b.handleCheckClick.bind(b),b.handleClearSelection=b.handleClearSelection.bind(b),b}return c.b(b,a),b.prototype.render=function(a){var b=this.props,c=b.displayGroups,e=b.selectedGroups,b=Object.keys(e),g=c.reduce(function(a,b){return!!e[b.id]||a},!1),c=c.reduce(function(a,b){return!!e[b.id]&&a},!0);if(0<b.length)return a("div",
{class:"gb-total-area__container",key:"gb-total-area-checked"},a(m.a,c?{key:"gb-total-area__checked-input",id:"gb__select-all-input",checked:!0,indeterminate:!1,onChange:this.handleClearSelection}:{key:"gb-total-area__indeterminate-input",id:"gb__select-all-input",checked:!1,indeterminate:g,onChange:this.handleCheckClick}),a("span",{class:"gb-total-area__result"},a(l.a,{color:"green",text:b.length+" "+d.selected}),a("button",{id:"gb__clear-selection-btn",class:"gb-total-area__clear-btn",onclick:this.props.clearAll},
d.clearSelection)));c="en"===f.locale.slice(0,2)?d.pageRange.en.replace("${start}",this.props.startNum).replace("${end}",this.props.endNum).replace("${total}",this.props.totalItems):d.pageRange.other.replace("${start}",this.props.startNum).replace("${end}",this.props.endNum).replace("${total}",this.props.totalItems);return a("div",{class:"gb-total-area__container",key:"gb-total-area"},a(m.a,{key:"gb-total-area__select-all-input",id:"gb__select-all-input",checked:!1,onChange:this.handleCheckClick,
title:d.selectAll}),a("label",{class:"gb-total-area__label"},c),a("span",{class:"gb-total-area__result"},c))},b.prototype.handleCheckClick=function(){this.props.selectGroups(this.props.displayGroups)},b.prototype.handleClearSelection=function(){var a=this;this.props.deselectGroups(this.props.displayGroups.filter(function(b){return a.props.selectedGroups[b.id]}))},b}(e.Component);b.a=Object(e.connect)(function(a){return{displayGroups:a.results.groups.displayGroups,selectedGroups:a.results.groups.selectedGroups}},
function(a){return{selectGroups:function(b){return a(Object(g.f)(b))},deselectGroups:function(b){return a(Object(g.e)(b))},clearAll:function(){return a(Object(g.d)())}}})(a)},219:function(e,b){e.exports=A},220:function(e,b,a){e=a(221);var c=a.n(e);b.a=function(a,b){var d=a.handleGroupCheck,e=a.handleGroupUncheck,f=a.selectedGroups,m=a.sortField,n=a.portal;return a.displayGroups.map(function(a){return b(c.a,{checked:!!f[a.id],group:a,key:a.id,sortField:m,onCheckGroup:d,onUncheckGroup:e,portal:n})})}},
221:function(e,b){e.exports=B},23:function(e,b,a){function c(a){return 0===Object.keys(a).length&&a.constructor===Object}function d(a,b){return l.apply(null,arguments)}function f(a,b){return m.apply(null,arguments)}a.d(b,"a",function(){return c});a.d(b,"d",function(){return h});a.d(b,"b",function(){return d});a.d(b,"c",function(){return f});var g=a(0);e=a(5);var h=Object(e.a)(function(a,b){b=g.a({},b);return delete b[a],b}),l=Object(e.a)(function(a,b){return Object.keys(b).reduce(function(c,d){return c[d]=
a(b[d],d,b),c},{})}),m=Object(e.a)(function(a,b){return Object.keys(b).reduce(function(c,d){return a(b[d],d,b)&&(c[d]=b[d]),c},{})})},27:function(e,b,a){a.d(b,"a",function(){return d});a.d(b,"b",function(){return f});var c=a(0),d=function(a){return a.urlKey?location.protocol+"//"+a.urlKey+"."+a.customBaseUrl:location.protocol+"//"+a.portalHostname},f=function(a){return c.a({},a,{baseUrl:d(a)})}},350:function(e,b,a){a.d(b,"a",function(){return c});a.d(b,"b",function(){return d});var c="CHANGE_SEARCH_STRING",
d=function(a){return{type:c,payload:a}}},351:function(e,b,a){a.d(b,"a",function(){return f});a.d(b,"b",function(){return g});var c=a(16);e=a(23);var d=a(128),f=function(a,b){return Object(c.a)(Object(d.a)(a))(b)},g=Object(c.a)(Object(e.d)("thumbURI"))},352:function(e,b,a){a.d(b,"a",function(){return d});a.d(b,"b",function(){return f});var c=a(49),d="GOTO_PAGE",f=function(a){return function(b,e){e=e();b({type:d,payload:a});b(Object(c.d)({start:(a-1)*e.config.groupsPerPage+1}))}}},353:function(e,b,
a){a.d(b,"a",function(){return c});a.d(b,"b",function(){return d});var c="TOGGLE_SORT_DROPDOWN",d=function(){return{type:c}}},395:function(e,b,a){a.r(b);a.d(b,"GroupBrowser",function(){return k});var c=a(0);e=a(1);var d=a(141);a.d(b,"reducers",function(){return d.b});a.d(b,"initialState",function(){return d.a});var f=a(40);a.d(b,"deselectGroups",function(){return f.a});a.d(b,"selectGroups",function(){return f.c});a.d(b,"search",function(){return f.b});var g=a(352),h=a(108),l=a.n(h),m=a(216),n=a(217),
k=function(a){function b(b){b=a.call(this,b)||this;return b.handlePageChange=b.handlePageChange.bind(b),b}return c.b(b,a),b.prototype.render=function(a){return a("div",{class:"group-browser__container"},a(m.a,{key:"group-browser-search-area"}),a(n.a,{key:"group-browser-results-panel"}),a(l.a,{key:"group-browse-pager",numPages:this.props.groupsPerPage>this.props.currentTotal?1:Math.ceil(this.props.currentTotal/this.props.groupsPerPage),currentPage:this.props.currentPage,onPageChange:this.handlePageChange}))},
b.prototype.handlePageChange=function(a){this.props.gotoPage(a)},b}(e.Component);b.default=Object(e.connect)(function(a){return{currentPage:a.ui.page.number,groupsPerPage:a.config.groupsPerPage,currentTotal:a.results.currentQuery.total}},function(a){return{gotoPage:function(b){return a(Object(g.b)(b))}}})(k)},40:function(e,b,a){var c=a(142);a.d(b,"a",function(){return c.a});a.d(b,"b",function(){return c.b});a.d(b,"c",function(){return c.c})},47:function(e,b){e.exports=u},48:function(e,b){e.exports=
v},49:function(e,b,a){a.d(b,"a",function(){return h});a.d(b,"c",function(){return l});a.d(b,"b",function(){return m});a.d(b,"d",function(){return n});var c=a(0),d=a(351),f=a(12),g=a(125),h="LOADING_GROUPS",l="LOAD_GROUPS_SUCCESS",m="LOAD_GROUPS_FAILED",n=function(a){return function(b,e){b({type:h});b(k(a)).then(function(a){var f=e();f.ui.focus.focusSelectAll&&Object(g.c)();b({type:l,payload:c.a({},a,{results:a.results.map(function(a){return Object(d.a)(f.utils.portal,a)})})})},function(a){e().ui.focus.focusSelectAll&&
Object(g.c)();b({type:m,payload:a})})}},k=function(a){return function(b,d){b=d();d=b.utils;return Object(f.e)(d.request,d.portal,{q:b.config.baseQ+" "+b.parameters.searchString.current,num:b.config.groupsPerPage,sortField:b.parameters.sort.field,sortOrder:b.parameters.sort.order,start:a&&a.start?a.start:1})}}},5:function(e,b,a){function c(a){return function g(){for(var b=this,d=[],c=0;c<arguments.length;c++)d[c]=arguments[c];return d.length>=a.length?a.call.apply(a,[this].concat(d)):function(){for(var a=
[],c=0;c<arguments.length;c++)a[c]=arguments[c];return g.call.apply(g,[b].concat(d,a))}}}a.d(b,"a",function(){return c})},67:function(e,b,a){a.d(b,"c",function(){return f});a.d(b,"b",function(){return g});a.d(b,"a",function(){return h});a.d(b,"f",function(){return l});a.d(b,"e",function(){return m});a.d(b,"d",function(){return n});var c=a(351),d=a(125),f="SELECT_GROUPS",g="DESELECT_GROUPS",h="CLEAR_SELECTION",l=function(a){return 1<a.length&&Object(d.a)(),{type:f,payload:a.map(function(a){return Object(c.b)(a)})}},
m=function(a){return 1<a.length&&Object(d.b)(),{type:g,payload:a}},n=function(){return Object(d.c)(),{type:h}}},68:function(e,b){e.exports=w},82:function(e,b,a){a.d(b,"b",function(){return c});a.d(b,"a",function(){return d});a.d(b,"c",function(){return f});a.d(b,"d",function(){return g});var c="CHANGE_SORT_ORDER",d="CHANGE_SORT_FIELD",f=function(a){return{type:d,payload:a}},g=function(a){return{type:c,payload:a}}},9:function(e,b){e.exports=q}})});