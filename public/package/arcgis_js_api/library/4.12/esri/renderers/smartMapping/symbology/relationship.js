// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/extendsHelper ../../../Color ./support/colors ./support/SymbologyBase ./support/utils".split(" "),function(m,h,q,t,f,u,v,n){function r(e,b,a){var c="mesh"!==e.geometryType&&e.worldScale?e.view:null,d=u[b];if(d){b=(e.theme||"default")+"/"+e.basemap+"/"+b;var k=[],g;for(g in d)"stops"!==g&&"name"!==g&&"tags"!==g&&k.push({numClasses:+g,colors:d[g]});switch(e.geometryType){case "point":case "multipoint":return e=a.noDataColor,
g=a.outline,a=a.size,{id:b,name:d.name,tags:d.tags.slice(),colorsForClassBreaks:l(k),noDataColor:new f(e),outline:{color:new f(g.color),width:g.width},size:c?n.toWorldScale(a,c):a,opacity:1};case "polyline":return e=a.noDataColor,a=a.width,{id:b,name:d.name,tags:d.tags.slice(),colorsForClassBreaks:l(k),noDataColor:new f(e),opacity:1,width:c?n.toWorldScale(a,c):a};case "polygon":return c=a.noDataColor,e=a.fillOpacity,a=a.outline,{id:b,name:d.name,tags:d.tags.slice(),colorsForClassBreaks:l(k),noDataColor:new f(c),
outline:{color:new f(a.color),width:a.width},opacity:e};case "mesh":return c=a.noDataColor,a=a.fillOpacity,{id:b,name:d.name,tags:d.tags.slice(),colorsForClassBreaks:l(k),noDataColor:new f(c),opacity:a}}}}function l(e){return e.map(function(b){return{numClasses:b.numClasses,colors:b.colors.map(function(a){return a.map(function(a){return new f(a)})})}})}m={color:[153,153,153,.25],width:"1px"};h="relationship-brewer-yellow-blue-black relationship-brewer-pink-blue-purple relationship-purple-green-blue relationship-blue-green-purple relationship-blue-orange-green relationship-mustard-blue-wine relationship-pink-blue-purple relationship-olive-blue-green relationship-yellow-cyan-blue relationship-blue-pink-purple relationship-purple-green-wine".split(" ");
var p="relationship-brewer-yellow-blue-black relationship-brewer-pink-blue-purple relationship-purple-green-blue relationship-blue-green-purple relationship-blue-orange-green relationship-mustard-blue-wine relationship-pink-blue-purple relationship-olive-blue-green relationship-yellow-cyan-blue relationship-blue-pink-purple relationship-purple-green-wine".split(" "),w={default:{name:"default",label:"Default",description:"Default theme for visualizing features based on relationship between two attributes.",
schemes:{point:{light:{common:{noDataColor:"#aaaaaa",outline:m,size:"8px"},primary:"relationship-blue-orange-brown",secondary:h},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[26,26,26,.25],width:"1px"},size:"8px"},primary:"relationship-blue-orange-brown",secondary:p}},polyline:{light:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"relationship-blue-orange-brown",secondary:h},dark:{common:{noDataColor:"#aaaaaa",width:"2px"},primary:"relationship-blue-orange-brown",secondary:p}},polygon:{light:{common:{noDataColor:"#aaaaaa",
outline:m,fillOpacity:.8},primary:"relationship-blue-orange-brown",secondary:h},dark:{common:{noDataColor:"#aaaaaa",outline:{color:[153,153,153,.25],width:"1px"},fillOpacity:.8},primary:"relationship-blue-orange-brown",secondary:p}}}}};return new (function(e){function b(){return e.call(this,{themeDictionary:w})||this}t(b,e);b.prototype.getSchemes=function(a){var c=this.getRawSchemes({theme:"default",basemap:a.basemap,geometryType:a.geometryType});if(c){var d=this.getBasemapId(a.basemap,"default"),
k=q({},a,{basemap:d});return{primaryScheme:r(k,c.primary,c.common),secondarySchemes:c.secondary.map(function(a){return r(k,a,c.common)}).filter(Boolean),basemapId:d}}};b.prototype.getSchemeByName=function(a){return this.filterSchemesByName(a)};b.prototype.getSchemesByTag=function(a){return this.filterSchemesByTag(a)};b.prototype.cloneScheme=function(a){if(a)return a=q({},a),a.colorsForClassBreaks=a.colorsForClassBreaks.map(function(a){return{numClasses:a.numClasses,colors:a.colors.map(function(a){return a.map(function(a){return new f(a)})})}}),
a.noDataColor&&(a.noDataColor=new f(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new f(a.outline.color),width:a.outline.width}),a};b.prototype.flatten2DArray=function(a,c){var d=[];c=(c||"HH").split("");var b=c[1];"L"===c[0]&&a.reverse();var g="H"===b;a.forEach(function(a){g&&a.reverse();d=d.concat(a)});return d};b.prototype.getColors=function(a,c,d){var b;a.colorsForClassBreaks.some(function(a){a.numClasses===c&&(b=a.colors);return!!b});return(b=b.map(function(a){return a.map(function(a){return new f(a)})}))?
this.flatten2DArray(b,d):null};b.prototype.flipColors=function(a,c){a=c?a:this.cloneScheme(a);a.colorsForClassBreaks.forEach(function(a){for(var c=a.colors.reverse(),d=[],b=function(a){var b=[];c.forEach(function(c){b.push(c[a])});d.push(b)},e=0;e<a.numClasses;e++)b(e);a.colors=d});return a};b.prototype.getMatchingSchemes=function(a){var c=this,b=a.theme||"default",e=a.geometryType,g=a.colors,f=a.numClasses;if(a=this.themes.get(b)){var h=[];a.supportedBasemaps.forEach(function(a){if(a=c.getSchemes({theme:b,
basemap:a,geometryType:e})){var d=c._compareColorsComprehensive(a.primaryScheme,g,f);d&&h.push(d);a.secondarySchemes.forEach(function(a){(d=c._compareColorsComprehensive(a,g,f))&&h.push(d)})}});return h}};b.prototype._compareColors=function(a,b,d,e){var c;(d=this.getColors(a,d,e))&&1===n.hasIdenticalColors(b,d)&&(c=a);return c};b.prototype._compareColorsByFocus=function(a,b,d,e){var c,f=1;do c=this._compareColors(a,b,d,e),c||(a=this.flipColors(a),f++);while(!c&&4>=f);return c};b.prototype._compareColorsComprehensive=
function(a,b,d){return this._compareColorsByFocus(a,b,d,"HH")||this._compareColorsByFocus(a,b,d,"HL")||this._compareColorsByFocus(a,b,d,"LH")||this._compareColorsByFocus(a,b,d,"LL")};return b}(v))});