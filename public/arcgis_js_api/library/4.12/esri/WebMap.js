// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
require({cache:{"esri/tasks/support/ProjectParameters":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/Logger ../../core/accessorSupport/decorators ../../geometry/support/jsonUtils".split(" "),function(h,m,l,a,c,e,b,f){var n=e.getLogger("esri.tasks.support.ProjectParameters");return function(g){function d(a){a=g.call(this)||this;a.geometries=null;a.outSpatialReference=null;a.transformation=null;a.transformForward=
null;return a}l(d,g);Object.defineProperty(d.prototype,"outSR",{get:function(){n.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead.");return this.outSpatialReference},set:function(a){n.warn("ProjectParameters.outSR is deprecated. Use outSpatialReference instead.");this.outSpatialReference=a},enumerable:!0,configurable:!0});d.prototype.toJSON=function(){var a=this.geometries.map(function(a){return a.toJSON()}),d=this.geometries[0],r={};r.outSR=this.outSpatialReference.wkid||
JSON.stringify(this.outSpatialReference.toJSON());r.inSR=d.spatialReference.wkid||JSON.stringify(d.spatialReference.toJSON());r.geometries=JSON.stringify({geometryType:f.getJsonType(d),geometries:a});this.transformation&&(r.transformation=this.transformation.wkid||JSON.stringify(this.transformation));null!=this.transformForward&&(r.transformForward=this.transformForward);return r};a([b.property()],d.prototype,"geometries",void 0);a([b.property({json:{read:{source:"outSR"}}})],d.prototype,"outSpatialReference",
void 0);a([b.property({json:{read:!1}})],d.prototype,"outSR",null);a([b.property()],d.prototype,"transformation",void 0);a([b.property()],d.prototype,"transformForward",void 0);return d=a([b.subclass("esri.tasks.support.ProjectParameters")],d)}(b.declared(c))})},"esri/webdoc/RangeInfo":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators".split(" "),function(h,m,l,a,c,e,b){return function(c){function f(a){a=
c.call(this,a)||this;a.activeRange=null;a.currentRangeExtent=null;a.fullRangeExtent=null;return a}l(f,c);g=f;f.prototype.clone=function(){return new g(e.clone({activeRange:this.activeRange,currentRangeExtent:this.currentRangeExtent,fullRangeExtent:this.fullRangeExtent}))};var g;a([b.property({type:String,nonNullable:!0,json:{read:{source:"activeRangeName"},write:{target:"activeRangeName",isRequired:!0}}})],f.prototype,"activeRange",void 0);a([b.property({type:[Number],json:{write:!0}})],f.prototype,
"currentRangeExtent",void 0);a([b.property({type:[Number],json:{write:!0}})],f.prototype,"fullRangeExtent",void 0);return f=g=a([b.subclass("esri.webdoc.RangeInfo")],f)}(b.declared(c))})},"esri/webdoc/Widgets":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ./widgets/Range ./widgets/TimeSlider".split(" "),function(h,m,l,a,c,e,b,f,n){return function(c){function d(a){a=c.call(this,
a)||this;a.range=null;a.timeSlider=null;return a}l(d,c);t=d;d.prototype.clone=function(){return new t(e.clone({range:this.range,timeSlider:this.timeSlider}))};var t;a([b.property({type:f,json:{write:!0}})],d.prototype,"range",void 0);a([b.property({type:n,json:{write:!0}})],d.prototype,"timeSlider",void 0);return d=t=a([b.subclass("esri.webdoc.Widgets")],d)}(b.declared(c))})},"esri/webdoc/widgets/Range":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),
function(h,m,l,a,c,e,b){var f=new c.default({slider:"slider",picker:"picker"});return function(c){function g(a){a=c.call(this,a)||this;a.interactionMode=null;a.numStops=null;a.stopInterval=null;return a}l(g,c);d=g;g.prototype.clone=function(){return new d({interactionMode:this.interactionMode,numStops:this.numStops,stopInterval:this.stopInterval})};var d;a([b.property({type:f.apiValues,nonNullable:!0,json:{type:f.jsonValues,default:null,read:{reader:f.read},write:{isRequired:!0,writer:f.write}}})],
g.prototype,"interactionMode",void 0);a([b.property({type:Number,json:{read:{source:"numberOfStops"},write:{target:"numberOfStops",overridePolicy:function(){var a=null!=this.stopInterval;return{enabled:!a,isRequired:!a}}}}})],g.prototype,"numStops",void 0);a([b.property({type:Number,json:{write:{overridePolicy:function(){return{isRequired:null==this.numStops}}}}})],g.prototype,"stopInterval",void 0);return g=d=a([b.subclass("esri.webdoc.widgets.Range")],g)}(b.declared(e))})},"esri/webdoc/widgets/TimeSlider":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../TimeExtent ../../TimeInterval ../../core/JSONSupport ../../core/lang ../../core/object ../../core/accessorSupport/decorators".split(" "),
function(h,m,l,a,c,e,b,f,n,g){return function(d){function b(a){a=d.call(this,a)||this;a.currentTimeExtent=null;a.fullTimeExtent=null;a.numStops=null;a.numThumbs=null;a.stopDelay=null;a.stopInterval=null;return a}l(b,d);q=b;b.prototype.readCurrentTimeExtent=function(a,b){if(a)return new c({start:null!=a[0]?new Date(a[0]):null,end:null!=a[1]?new Date(a[1]):null})};b.prototype.writeCurrentTimeExtent=function(a,b,c){a&&n.setDeepValue(c,[a.start?a.start.getTime():null,a.end?a.end.getTime():null],b)};b.prototype.readFullTimeExtent=
function(a,b){if(a=b.properties)return new c({start:null!=a.startTime?new Date(a.startTime):null,end:null!=a.endTime?new Date(a.endTime):null})};b.prototype.writeFullTimeExtent=function(a,b){if(a){b=b.properties=b.properties||{};var c=a.end;a=a.start;c&&(b.endTime=c?c.getTime():null);a&&(b.startTime=a?a.getTime():null)}};b.prototype.readStopInterval=function(a,b,c){return a?e.fromJSON({value:a.interval,unit:a.units},c):null};b.prototype.writeStopInterval=function(a,b,c,d){a&&(a=a.toJSON(d),n.setDeepValue(c,
{interval:a.value,units:a.unit},b))};b.prototype.clone=function(){return new q(f.clone({currentTimeExtent:this.currentTimeExtent,fullTimeExtent:this.fullTimeExtent,numStops:this.numStops,numThumbs:this.numThumbs,stopDelay:this.stopDelay,stopInterval:this.stopInterval}))};var q;a([g.property({type:c,json:{read:{source:"properties.currentTimeExtent"},write:{target:"properties.currentTimeExtent"}}})],b.prototype,"currentTimeExtent",void 0);a([g.reader("currentTimeExtent")],b.prototype,"readCurrentTimeExtent",
null);a([g.writer("currentTimeExtent")],b.prototype,"writeCurrentTimeExtent",null);a([g.property({type:c,json:{read:{source:["properties.endTime","properties.startTime"]},write:{target:{"properties.endTime":{type:Number},"properties.startTime":{type:Number}}}}})],b.prototype,"fullTimeExtent",void 0);a([g.reader("fullTimeExtent")],b.prototype,"readFullTimeExtent",null);a([g.writer("fullTimeExtent")],b.prototype,"writeFullTimeExtent",null);a([g.property({type:Number,json:{read:{source:"properties.numberOfStops"},
write:{target:"properties.numberOfStops",overridePolicy:function(){var a=!!this.stopInterval;return{enabled:!a,isRequired:!a}}}}})],b.prototype,"numStops",void 0);a([g.property({type:[1,2],nonNullable:!0,json:{read:{source:"properties.thumbCount"},write:{target:"properties.thumbCount",isRequired:!0}}})],b.prototype,"numThumbs",void 0);a([g.property({type:Number,nonNullable:!0,json:{read:{source:"properties.thumbMovingRate"},write:{target:"properties.thumbMovingRate",isRequired:!0}}})],b.prototype,
"stopDelay",void 0);a([g.property({type:e,json:{read:{source:"properties.timeStopInterval"},write:{target:"properties.timeStopInterval",overridePolicy:function(){return{isRequired:null==this.numStops}}}}})],b.prototype,"stopInterval",void 0);a([g.reader("stopInterval")],b.prototype,"readStopInterval",null);a([g.writer("stopInterval")],b.prototype,"writeStopInterval",null);return b=q=a([g.subclass("esri.webdoc.widgets.TimeSlider")],b)}(g.declared(b))})},"esri/webmap/ApplicationProperties":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ../webdoc/applicationProperties/Viewing".split(" "),
function(h,m,l,a,c,e,b,f){return function(c){function g(a){a=c.call(this,a)||this;a.editing=null;a.offline=null;a.viewing=null;return a}l(g,c);d=g;g.prototype.clone=function(){return new d(e.clone({editing:this.editing,offline:this.offline,viewing:this.viewing}))};var d;a([b.property({json:{write:!0}})],g.prototype,"editing",void 0);a([b.property({json:{write:!0}})],g.prototype,"offline",void 0);a([b.property({type:f,json:{write:!0}})],g.prototype,"viewing",void 0);return g=d=a([b.subclass("esri.webmap.ApplicationProperties")],
g)}(b.declared(c))})},"esri/webdoc/applicationProperties/Viewing":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./Search".split(" "),function(h,m,l,a,c,e,b,f){return function(c){function g(a){a=c.call(this,a)||this;a.search=null;return a}l(g,c);d=g;g.prototype.clone=function(){return new d(e.clone({search:this.search}))};var d;a([b.property({type:f,json:{write:!0}})],
g.prototype,"search",void 0);return g=d=a([b.subclass("esri.webdoc.applicationProperties.Viewing")],g)}(b.declared(c))})},"esri/webdoc/applicationProperties/Search":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Collection ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ./SearchLayer".split(" "),function(h,m,l,a,c,e,b,f,n){var g=c.ofType(n);return function(c){function d(a){a=c.call(this,a)||this;
a.addressSearchEnabled=!0;a.enabled=!0;a.hintText=null;a.layers=new g;return a}l(d,c);e=d;d.prototype.readAddressSearchEnabled=function(a,b){return!a};d.prototype.writeAddressSearchEnabled=function(a,b,c){b[c]=!a};d.prototype.clone=function(){return new e(b.clone({addressSearchEnabled:this.addressSearchEnabled,enabled:this.enabled,hintText:this.hintText,layers:this.layers}))};var e;a([f.property({type:Boolean,json:{read:{source:"disablePlaceFinder"},write:{target:"disablePlaceFinder"},default:!0,
origins:{"web-scene":{read:!1,write:!1}}}})],d.prototype,"addressSearchEnabled",void 0);a([f.reader("addressSearchEnabled")],d.prototype,"readAddressSearchEnabled",null);a([f.writer("addressSearchEnabled")],d.prototype,"writeAddressSearchEnabled",null);a([f.property({type:Boolean,json:{write:!0,default:!0}})],d.prototype,"enabled",void 0);a([f.property({type:String,json:{write:!0}})],d.prototype,"hintText",void 0);a([f.property({type:g,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"layers",
void 0);return d=e=a([f.subclass("esri.webdoc.applicationProperties.Search")],d)}(f.declared(e))})},"esri/webdoc/applicationProperties/SearchLayer":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ./SearchLayerField".split(" "),function(h,m,l,a,c,e,b,f,n){return function(c){function d(a){a=c.call(this,a)||this;a.field=null;
a.id=null;a.subLayer=null;return a}l(d,c);g=d;d.prototype.clone=function(){return new g(e.clone({field:this.field,id:this.id,subLayer:this.subLayer}))};var g;a([b.property({type:n,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"field",void 0);a([b.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],d.prototype,"id",void 0);a([b.property({type:f.Integer,json:{write:!0}})],d.prototype,"subLayer",void 0);return d=g=a([b.subclass("esri.webdoc.applicationProperties.SearchLayer")],
d)}(b.declared(c))})},"esri/webdoc/applicationProperties/SearchLayerField":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators ../../layers/support/fieldType".split(" "),function(h,m,l,a,c,e,b){return function(c){function f(a){a=c.call(this,a)||this;a.exactMatch=!1;a.name=null;a.type=null;return a}l(f,c);g=f;f.prototype.clone=function(){return new g({exactMatch:this.exactMatch,
type:this.type,name:this.name})};var g;a([e.property({type:Boolean,json:{write:!0}})],f.prototype,"exactMatch",void 0);a([e.property({type:String,json:{write:!0}})],f.prototype,"name",void 0);a([e.enumeration.serializable()(b.kebabDict)],f.prototype,"type",void 0);return f=g=a([e.subclass("esri.webdoc.applicationProperties.SearchLayerField")],f)}(e.declared(c))})},"esri/webmap/Bookmark":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Identifiable ../core/JSONSupport ../core/lang ../core/accessorSupport/decorators ../core/accessorSupport/ensureType ../geometry/Extent ../webdoc/support/Thumbnail".split(" "),
function(h,m,l,a,c,e,b,f,n,g,d){return function(c){function e(a){a=c.call(this)||this;a.extent=null;a.name=null;a.thumbnail=new d.default;return a}l(e,c);h=e;e.prototype.castThumbnail=function(a){return"string"===typeof a?new d.default({url:a}):n.ensureType(d.default,a)};e.prototype.clone=function(){return new h(b.clone({extent:this.extent,name:this.name,thumbnail:this.thumbnail}))};var h;a([f.property({type:g,nonNullable:!0,json:{write:{isRequired:!0}}})],e.prototype,"extent",void 0);a([f.property({type:String,
nonNullable:!0,json:{write:{isRequired:!0}}})],e.prototype,"name",void 0);a([f.property({type:d.default,json:{write:{overridePolicy:function(a){return{enabled:!(!a||!a.url)}}}}})],e.prototype,"thumbnail",void 0);a([f.cast("thumbnail")],e.prototype,"castThumbnail",null);return e=h=a([f.subclass("esri.webmap.Bookmark")],e)}(f.declared(e,c.Identifiable))})},"esri/webdoc/support/Thumbnail":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),
function(h,m,l,a,c,e){Object.defineProperty(m,"__esModule",{value:!0});h=function(b){function c(){var a=null!==b&&b.apply(this,arguments)||this;a.url="";return a}l(c,b);h=c;c.prototype.clone=function(){return new h({url:this.url})};var h;a([e.property({type:String,json:{write:{isRequired:!0}}})],c.prototype,"url",void 0);return c=h=a([e.subclass("esri.webdoc.support.Thumbnail")],c)}(e.declared(c));m.default=h})},"esri/webmap/InitialViewProperties":function(){define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../Viewpoint ../core/Accessor ../core/lang ../core/accessorSupport/decorators ../geometry/SpatialReference ../webdoc/RangeInfo ./background/ColorBackground".split(" "),
function(h,m,l,a,c,e,b,f,n,g,d){return function(e){function h(a){a=e.call(this,a)||this;a.background=null;a.rangeInfo=null;a.spatialReference=null;a.viewpoint=null;return a}l(h,e);m=h;h.prototype.clone=function(){return new m(b.clone({background:this.background,rangeInfo:this.rangeInfo,spatialReference:this.spatialReference,viewpoint:this.viewpoint}))};var m;a([f.property({type:d})],h.prototype,"background",void 0);a([f.property({type:g})],h.prototype,"rangeInfo",void 0);a([f.property({type:n})],
h.prototype,"spatialReference",void 0);a([f.property({type:c})],h.prototype,"viewpoint",void 0);return h=m=a([f.subclass("esri.webmap.InitialViewProperties")],h)}(f.declared(e))})},"esri/webmap/background/ColorBackground":function(){define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../Color ../../core/JSONSupport ../../core/lang ../../core/accessorSupport/decorators".split(" "),function(h,m,l,a,c,e,b,f,n){return function(c){function b(a){a=
c.call(this)||this;a.color=new e([0,0,0,1]);return a}l(b,c);g=b;b.prototype.clone=function(){return new g(f.clone({color:this.color}))};var g;a([n.property({type:e,json:{write:!0}})],b.prototype,"color",void 0);return b=g=a([n.subclass("esri.webmap.background.ColorBackground")],b)}(n.declared(b))})},"esri/webmap/Version":function(){define(["require","exports","../core/tsSupport/extendsHelper","../core/Version"],function(h,m,l,a){Object.defineProperty(m,"__esModule",{value:!0});h=function(a){function c(b,
c){return a.call(this,b,c,"webmap")||this}l(c,a);return c}(a.Version);m.Version=h;m.default=h})},"esri/core/Version":function(){define(["require","exports","./Error"],function(h,m,l){Object.defineProperty(m,"__esModule",{value:!0});h=function(){function a(a,e,b){void 0===b&&(b="");this.major=a;this.minor=e;this._context=b}a.prototype.lessThan=function(a,e){return this.major<a||a===this.major&&this.minor<e};a.prototype.since=function(a,e){return!this.lessThan(a,e)};a.prototype.validate=function(a){if(this.major!==
a.major)throw new l((this._context&&this._context+":")+"unsupported-version","Required major "+(this._context&&this._context+" ")+"version is '"+this.major+"', but got '${version.major}.${version.minor}'",{version:a});};a.prototype.clone=function(){return new a(this.major,this.minor,this._context)};a.parse=function(c,e){void 0===e&&(e="");var b=c.split("."),f=b[0],b=b[1],h=/^\s*\d+\s*$/;if(!f||!f.match||!f.match(h))throw new l((e&&e+":")+"invalid-version","Expected major version to be a number, but got '${version}'",
{version:c});if(!b||!b.match||!b.match(h))throw new l((e&&e+":")+"invalid-version","Expected minor version to be a number, but got '${version}'",{version:c});c=parseInt(f,10);f=parseInt(b,10);return new a(c,f,e)};return a}();m.Version=h})},"*noref":1}});
define("require exports ./core/tsSupport/assignHelper ./core/tsSupport/declareExtendsHelper ./core/tsSupport/decorateHelper ./core/tsSupport/generatorHelper ./core/tsSupport/awaiterHelper ./kernel ./Map ./Viewpoint ./core/asyncUtils ./core/Collection ./core/Error ./core/JSONSupport ./core/Loadable ./core/loadAll ./core/Logger ./core/promiseUtils ./core/accessorSupport/decorators ./geometry/SpatialReference ./geometry/support/webMercatorUtils ./portal/Portal ./portal/PortalItem ./tasks/support/ProjectParameters ./webdoc/RangeInfo ./webdoc/Widgets ./webmap/ApplicationProperties ./webmap/Bookmark ./webmap/InitialViewProperties ./webmap/Version ./webmap/background/ColorBackground @dojo/framework/shim/Promise".split(" "),function(h,
m,l,a,c,e,b,f,n,g,d,t,q,r,E,F,G,u,p,z,H,A,I,J,B,K,L,M,v,w,C){var x=new w.default(2,13),D=t.ofType(M),y=G.getLogger("esri.WebMap");return function(m){function k(a){a=m.call(this)||this;a.applicationProperties=null;a.authoringApp=null;a.authoringAppVersion=null;a.bookmarks=new D;a.initialViewProperties=new v;a.portalItem=null;a.presentation=null;a.sourceVersion=null;a.tables=null;a.widgets=null;return a}a(k,m);k.prototype.initialize=function(){this.when().catch(function(a){y.error("#load()","Failed to load web map",
a)});if(this.resourceInfo){var a=void 0;try{a=this._validateJSON(this.resourceInfo)}catch(N){this.addResolvingPromise(u.reject(N));return}this.read(a)}};k.prototype.writeAuthoringApp=function(a,b){b.authoringApp=a||"ArcGIS API for JavaScript"};k.prototype.writeAuthoringAppVersion=function(a,b){b.authoringAppVersion=a||f.version};k.prototype.readInitialViewProperties=function(a,b){a=new v;b.background&&(a.background=C.fromJSON(b.background));b.mapRangeInfo&&(a.rangeInfo=B.fromJSON(b.mapRangeInfo));
b.spatialReference&&(a.spatialReference=z.fromJSON(b.spatialReference));return a};k.prototype.writeInitialViewProperties=function(a,b,c,d){a&&((c=a.background)&&c.color&&(b.background=c.write(null,d)),a.rangeInfo&&(b.mapRangeInfo=a.rangeInfo.toJSON(d)),a.spatialReference&&(b.spatialReference=a.spatialReference.write(null,d)))};k.prototype.readSourceVersion=function(a,b){a=b.version.split(".");b=a[1];return new w.default(parseInt(a[0],10),parseInt(b,10))};k.prototype.writeSourceVersion=function(a,
b,c){b[c]=x.major+"."+x.minor};k.prototype.load=function(a){this.addResolvingPromise(this._loadFromSource());return this.when()};k.prototype.loadAll=function(){var a=this;return d.safeCast(F.loadAll(this,function(b){b(a.ground,a.basemap,a.layers)}))};k.prototype.write=function(a,b){if("loaded"!==this.loadStatus){var c=new q("webmap:not-loaded","Web map must be loaded before it can be serialized");y.error("#toJSON()","Web map must be loaded before it can be serialized",this.loadError||this.loadStatus);
throw c;}b=l({},b,{origin:"web-map"});return this.inherited(arguments,[a,b])};k.prototype._loadFromSource=function(){return this.resourceInfo?this._loadFromJSON(this.resourceInfo,{origin:"web-map"}):this.portalItem&&this.portalItem.id?this._loadFromItem(this.portalItem):u.resolve(null)};k.prototype._loadFromItem=function(a){var b=this;return a.load().catch(function(a){throw new q("webmap:load-portal-item","Failed to load portal item",{error:a});}).then(function(){if("Web Map"!==a.type)throw new q("webmap:invalid-portal-item",
"Invalid portal item type '${type}', expected 'Web Map'",{type:a.type});}).then(function(){return a.fetchData()}).then(function(c){b.resourceInfo=c;return b._readAndLoadFromJSON(c,{origin:"web-map",portal:a.portal||A.getDefault()})}).then(function(){return d.safeCast(b._getInitialExtent())}).then(function(a){if(a){var c=b.initialViewProperties?b.initialViewProperties.clone():new v;c.viewpoint=new g;c.viewpoint.targetGeometry=a;b.initialViewProperties=c}})};k.prototype._readAndLoadFromJSON=function(a,
b){a=this._validateJSON(a);this.read(a,b);return this._loadFromJSON(a,b)};k.prototype._validateJSON=function(a){var b=w.default.parse(a.version||"","webmap");x.validate(b);a.version=b.major+"."+b.minor;return a};k.prototype._loadFromJSON=function(a,b){var c=this,e={context:l({},b,{layerContainerType:"operational-layers"})};this.portalItem&&(e.context.portal=this.portalItem.portal||A.getDefault());return u.create(function(a){return h(["./portal/support/layersCreator"],a)}).then(function(b){var f=[],
g=a.operationalLayers;g&&g.length&&f.push(d.safeCast(b.populateOperationalLayers(c.layers,g,e)));return u.eachAlways(f).then(function(){})})};k.prototype._getInitialExtent=function(){return b(this,void 0,void 0,function(){var a,b,c;return e(this,function(e){switch(e.label){case 0:return a=this.initialViewProperties&&this.initialViewProperties.spatialReference,b=this.portalItem&&this.portalItem.extent,a&&b?a.isWGS84?[2,b.clone()]:a.isWebMercator?[2,H.geographicToWebMercator(b)]:[4,new Promise(function(a,
b){h(["./portal/support/geometryServiceUtils"],a,b)})]:[3,2];case 1:return c=e.sent(),[2,d.safeCast(c.create(this.portalItem)).then(function(c){var d=new J;d.geometries=[b];d.outSpatialReference=a;return c.project(d)}).then(function(a){return a[0]}).catch(function(a){y.error("Error projecting item's extent:",a);return null})];case 2:return[2,null]}})})};k.fromJSON=function(a){if(!a)throw new q("webmap:empty-resource","Expected a JSON resource but got nothing");return new this({resourceInfo:a})};k.VERSION=
x;c([p.property({type:L,json:{write:!0}})],k.prototype,"applicationProperties",void 0);c([p.property({type:String,json:{write:{allowNull:!0}}})],k.prototype,"authoringApp",void 0);c([p.writer("authoringApp")],k.prototype,"writeAuthoringApp",null);c([p.property({type:String,json:{write:{allowNull:!0}}})],k.prototype,"authoringAppVersion",void 0);c([p.writer("authoringAppVersion")],k.prototype,"writeAuthoringAppVersion",null);c([p.property({json:{read:{source:"baseMap"},write:{target:"baseMap"}}})],
k.prototype,"basemap",void 0);c([p.property({type:D,json:{write:{overridePolicy:function(a){return{enabled:!!(a&&0<a.length)}}}}})],k.prototype,"bookmarks",void 0);c([p.property({type:v,nonNullable:!0,json:{read:{source:["background","mapRangeInfo","spatialReference"]},write:{target:{background:{type:C},mapRangeInfo:{type:B},spatialReference:{type:z}}}}})],k.prototype,"initialViewProperties",void 0);c([p.reader("initialViewProperties")],k.prototype,"readInitialViewProperties",null);c([p.writer("initialViewProperties")],
k.prototype,"writeInitialViewProperties",null);c([p.property({type:I})],k.prototype,"portalItem",void 0);c([p.property({json:{write:!0}})],k.prototype,"presentation",void 0);c([p.property()],k.prototype,"resourceInfo",void 0);c([p.property({readOnly:!0,type:w.default,json:{read:{source:"version"},write:{allowNull:!0,target:"version",isRequired:!0}}})],k.prototype,"sourceVersion",void 0);c([p.reader("sourceVersion")],k.prototype,"readSourceVersion",null);c([p.writer("sourceVersion")],k.prototype,"writeSourceVersion",
null);c([p.property()],k.prototype,"tables",void 0);c([p.property({type:K,json:{write:!0}})],k.prototype,"widgets",void 0);return k=c([p.subclass("esri.WebMap")],k)}(p.declared(n,E,r))});