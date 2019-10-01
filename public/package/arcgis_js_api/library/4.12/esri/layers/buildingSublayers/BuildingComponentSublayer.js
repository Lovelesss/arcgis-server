// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../PopupTemplate ../../renderers ../../request ../../core/Loadable ../../core/maybe ../../core/accessorSupport/decorators ../../geometry/Extent ../../geometry/SpatialReference ./BuildingSublayer ../support/commonProperties ../support/fieldProperties ../support/FieldsIndex ../support/I3SLayerDefinitions ../../renderers/support/jsonUtils ../../support/popupUtils ../../symbols/support/ElevationInfo".split(" "),
function(C,D,E,k,c,l,m,n,p,q,r,t,b,u,v,w,x,y,z,d,e,A,B){var f=y.defineFieldProperties();return function(g){function a(a){a=g.call(this)||this;a.type="building-component";a.nodePages=null;a.materialDefinitions=null;a.textureSetDefinitions=null;a.geometryDefinitions=null;a.fields=null;a.outFields=null;a.listMode="show";a.renderer=null;a.definitionExpression=null;a.popupEnabled=!0;a.popupTemplate=null;a.geometryType="mesh";a.profile="mesh-pyramids";return a}k(a,g);Object.defineProperty(a.prototype,"parsedUrl",
{get:function(){return this.layer?{path:this.layer.parsedUrl.path+"/sublayers/"+this.id,query:this.layer.parsedUrl.query}:null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"fieldsIndex",{get:function(){return new z(this.fields)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"objectIdField",{get:function(){if(null!=this.fields)for(var a=0,b=this.fields;a<b.length;a++){var c=b[a];if("oid"===c.type)return c.name}return null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,
"defaultPopupTemplate",{get:function(){return this.createPopupTemplate()},enumerable:!0,configurable:!0});a.prototype.load=function(a){a=t.isSome(a)?a.signal:null;this.addResolvingPromise(this._fetchService(a));return this.when()};a.prototype.createPopupTemplate=function(a){return A.createPopupTemplate(this,a)};a.prototype._fetchService=function(a){return m(this,void 0,void 0,function(){var b,c;return l(this,function(h){switch(h.label){case 0:return[4,q(this.parsedUrl.path,{query:{f:"json"},responseType:"json",
signal:a})];case 1:return b=h.sent(),c=b.data,this.read(c,{origin:"service",url:this.parsedUrl}),[2]}})})};a.prototype.getField=function(a){return this.fieldsIndex.get(a)};a.prototype.getFieldDomain=function(a){return(a=this.getField(a))&&a.domain?a.domain:null};c([b.property({readOnly:!0,dependsOn:["layer","id"]})],a.prototype,"parsedUrl",null);c([b.property({type:d.I3SNodePageDefinition,readOnly:!0})],a.prototype,"nodePages",void 0);c([b.property({type:[d.I3SMaterialDefinition],readOnly:!0})],a.prototype,
"materialDefinitions",void 0);c([b.property({type:[d.I3STextureSetDefinition],readOnly:!0})],a.prototype,"textureSetDefinitions",void 0);c([b.property({type:[d.I3SGeometryDefinition],readOnly:!0})],a.prototype,"geometryDefinitions",void 0);c([b.property({readOnly:!0})],a.prototype,"store",void 0);c([b.property({readOnly:!0})],a.prototype,"attributeStorageInfo",void 0);c([b.property(f.fields)],a.prototype,"fields",void 0);c([b.property({readOnly:!0,dependsOn:["fields"]})],a.prototype,"fieldsIndex",
null);c([b.property(f.outFields)],a.prototype,"outFields",void 0);c([b.property({type:String,dependsOn:["fields"],readOnly:!0})],a.prototype,"objectIdField",null);c([b.property({readOnly:!0,type:u,aliasOf:"layer.fullExtent"})],a.prototype,"fullExtent",void 0);c([b.property({readOnly:!0,type:v,aliasOf:"layer.spatialReference"})],a.prototype,"spatialReference",void 0);c([b.property({readOnly:!0,aliasOf:"layer.version"})],a.prototype,"version",void 0);c([b.property({readOnly:!0,type:B,aliasOf:"layer.elevationInfo"})],
a.prototype,"elevationInfo",void 0);c([b.property({readOnly:!0,type:Number,aliasOf:"layer.minScale"})],a.prototype,"minScale",void 0);c([b.property({readOnly:!0,type:Number,aliasOf:"layer.maxScale"})],a.prototype,"maxScale",void 0);c([b.property({type:["hide","show"],json:{write:!0}})],a.prototype,"listMode",void 0);c([b.property({types:p.webSceneRendererTypes,json:{origins:{service:{read:{source:"drawingInfo.renderer",reader:e.read}}},read:{source:"layerDefinition.drawingInfo.renderer",reader:e.read},
write:{target:"layerDefinition.drawingInfo.renderer"}},value:null})],a.prototype,"renderer",void 0);c([b.property({type:String,json:{origins:{service:{read:!1,write:!1}},read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],a.prototype,"definitionExpression",void 0);c([b.property(x.popupEnabled)],a.prototype,"popupEnabled",void 0);c([b.property({type:n,json:{read:{source:"popupInfo"},write:{target:"popupInfo"}}})],a.prototype,"popupTemplate",
void 0);c([b.property({readOnly:!0,type:String,json:{origins:{service:{read:{source:"store.normalReferenceFrame"}}},read:!1}})],a.prototype,"normalReferenceFrame",void 0);c([b.property({readOnly:!0,json:{read:!1},dependsOn:["fields","title"]})],a.prototype,"defaultPopupTemplate",null);return a=c([b.subclass("esri.layers.buildingSublayers.BuildingComponentSublayer")],a)}(b.declared(w,r))});