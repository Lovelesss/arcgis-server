// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../../Component","dojo/i18n!../../ItemCards/nls/resources","../../Buttons/SvgButton","../../Loaders/LoaderIcon","../../Dropdowns/TextOptionDropdown"],function(k,l,m,p,q){return function(f){function a(b){if(c[b])return c[b].exports;var e=c[b]={i:b,l:!1,exports:{}};return f[b].call(e.exports,e,e.exports,a),e.l=!0,e.exports}var c={};return a.m=f,a.c=c,a.d=function(b,e,c){a.o(b,e)||Object.defineProperty(b,e,{enumerable:!0,get:c})},a.r=function(b){"undefined"!=typeof Symbol&&Symbol.toStringTag&&
Object.defineProperty(b,Symbol.toStringTag,{value:"Module"});Object.defineProperty(b,"__esModule",{value:!0})},a.t=function(b,e){if((1&e&&(b=a(b)),8&e)||4&e&&"object"==typeof b&&b&&b.__esModule)return b;var c=Object.create(null);if(a.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:b}),2&e&&"string"!=typeof b)for(var f in b)a.d(c,f,function(e){return b[e]}.bind(null,f));return c},a.n=function(b){var e=b&&b.__esModule?function(){return b.default}:function(){return b};return a.d(e,"a",e),
e},a.o=function(b,e){return Object.prototype.hasOwnProperty.call(b,e)},a.p="",a(a.s=402)}({0:function(f,a,c){function b(b,a){function c(){this.constructor=b}e(b,a);b.prototype=null===a?Object.create(a):(c.prototype=a.prototype,new c)}c.d(a,"b",function(){return b});c.d(a,"a",function(){return g});var e=function(b,a){return(e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(b,a){b.__proto__=a}||function(b,a){for(var c in a)a.hasOwnProperty(c)&&(b[c]=a[c])})(b,a)},g=function(){return(g=
Object.assign||function(b){for(var a,c=1,e=arguments.length;c<e;c++)for(var f in a=arguments[c])Object.prototype.hasOwnProperty.call(a,f)&&(b[f]=a[f]);return b}).apply(this,arguments)}},113:function(f,a){f.exports=q},17:function(f,a){f.exports=l},4:function(f,a){f.exports=k},402:function(f,a,c){c.r(a);var b=c(0),e=c(17);f=c(4);var g=c(113),k=c.n(g),g=c(44),n=c.n(g),g=c(50),l=c.n(g);c=function(a){function c(d){d=a.call(this,d)||this;return d.handleShowItemDetails=d.handleShowItemDetails.bind(d),d.handleSelectionClick=
d.handleSelectionClick.bind(d),d.handleIconActionClick=d.handleIconActionClick.bind(d),d.handleCustomActionClick=d.handleCustomActionClick.bind(d),d}return b.b(c,a),c.prototype.render=function(d){var a,b=this,c=!!this.props.selectedItems[this.props.item.id],f=!!this.props.loadingItems[this.props.item.id],g=this.props.activeItem&&this.props.activeItem.id===this.props.item.id,h=this.props.customActions.filter(function(a){return a.allowed(b.props.item)}).map(function(a){return{value:a.name,text:a.name,
icon:a.icon}}),m=h.filter(function(a){return!!a.icon}),h=h.filter(function(a){return!a.icon});this.props.disableMainAction||(a=f?d(l.a,null):d(n.a,{focusable:!0,handleClick:this.handleSelectionClick,key:this.props.item.id+"-selection-btn",title:c?e.remove:e.add},d("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16"},d("g",{stroke:"none","stroke-width":"1"},c?d("g",{id:"minus-circled-1px-16"},d("g",null,d("polygon",{points:"3 7 12 7 12 8 3 8"}),d("path",{d:"M7.501,0 C3.365,0 0,3.364 0,7.5 C0,11.636 3.365,15 7.501,15 C11.636,15 15,11.636 15,7.5 C15,3.364 11.636,0 7.501,0 Z M7.501,14 C3.916,14 1,11.084 1,7.5 C1,3.916 3.916,1 7.501,1 C11.085,1 14,3.916 14,7.5 C14,11.084 11.085,14 7.501,14 Z"}))):
d("g",{id:"plus-circled-1px-16"},d("g",null,d("polygon",{points:"12 7 7.999 7 8 3 7.001 3 7 7 2.999 7 2.999 8 7 8 6.999 12 7.998 12 7.999 8 12 8"}),d("path",{d:"M7.501,0 C3.365,0 0,3.364 0,7.5 C0,11.636 3.365,15 7.501,15 C11.636,15 15,11.636 15,7.5 C15,3.364 11.636,0 7.501,0 Z M7.501,14 C3.916,14 1,11.084 1,7.5 C1,3.916 3.916,1 7.501,1 C11.085,1 14,3.916 14,7.5 C14,11.084 11.085,14 7.501,14 Z"})))))));f=m.map(function(a){return d(n.a,{focusable:!0,handleClick:b.handleIconActionClick,key:b.props.item.id+
"-"+a.text,title:a.text,value:a.value},d("div",{class:"card-mcr__custom-icon-container",innerHTML:a.icon}))});return d("div",{key:this.props.item.id,classes:{"card-mcr__container":!0,"card-mcr__container--selected":c,"card-mcr__container--active":g},onclick:this.handleShowItemDetails},d("img",{src:this.props.item.iconURI,class:"card-mcr__item-icon",title:this.props.item.displayName,alt:""}),d("button",{id:"item-"+this.props.item.id+"-card-title",class:"card-mcr__item-title",title:g?e.hideItem:e.viewItem,
tabindex:"0"},this.props.item.title),d("div",{class:"card-mcr__spacer"}),d("div",{class:"card-mcr__action-container"},a,f,0<h.length&&!this.props.hideEllipses?d(k.a,{key:this.props.item.id+"-actions",options:h,onSelect:this.handleCustomActionClick,selectedOptionValue:void 0,justify:"right"},d(n.a,{key:this.props.item.id+"-action-btn",focusable:!1,title:e.actions},d("svg",{width:"16px",height:"16px",viewBox:"0 0 16 16",style:"transform: translate(0, -2px);"},d("g",{stroke:"none","stroke-width":"1"},
d("g",{id:"ellipses-1px-16"},d("path",{d:"M1,7 L3,7 L3,9 L1,9 L1,7 Z M7,7 L9,7 L9,9 L7,9 L7,7 Z M13,7 L15,7 L15,9 L13,9 L13,7 Z"})))))):null))},c.prototype.handleShowItemDetails=function(a){this.props.onShowItemDetails(this.props.item)},c.prototype.handleSelectionClick=function(a){a.stopPropagation();this.props.onSelectionClick(this.props.item)},c.prototype.handleIconActionClick=function(a){a.stopPropagation();a.target.value&&this.props.onCustomActionClick(a.target.value,this.props.item)},c.prototype.handleCustomActionClick=
function(a){this.props.onCustomActionClick(a,this.props.item)},c}(f.Component);a.default=c},44:function(f,a){f.exports=m},50:function(f,a){f.exports=p}})});