// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper ../core/Error ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators ./Layer ./mixins/ScaleRangeLayer ./mixins/SceneService ./support/commonProperties ./support/I3SLayerDefinitions".split(" "),function(k,w,l,m,d,n,p,e,q,g,c,r,t,u,v,f){return function(h){function b(a,b){a=h.call(this)||this;a.geometryType=
"mesh";a.operationalLayerType="IntegratedMeshLayer";a.type="integrated-mesh";a.nodePages=null;a.materialDefinitions=null;a.textureSetDefinitions=null;a.geometryDefinitions=null;a.profile="mesh-pyramids";a.elevationInfo=null;a.path=null;return a}m(b,h);b.prototype.normalizeCtorArgs=function(a,b){return"string"===typeof a?l({url:a},b):a};b.prototype.load=function(a){var b=this,c=q.isSome(a)?a.signal:null;a=this.loadFromPortal({supportedTypes:["Scene Service"]},a).then(function(){return b._fetchService(c)},
function(){return b._fetchService(c)}).then(function(){return b._verifyRootNodeAndUpdateExtent(c)});this.addResolvingPromise(a);return this.when()};b.prototype.importLayerViewModule=function(a){return p(this,void 0,void 0,function(){return n(this,function(b){switch(a.type){case "2d":return[2,g.reject(new e("integrated-mesh-layer:view-not-supported","IntegratedMeshLayer is only supported in 3D"))];case "3d":return[2,g.create(function(a){return k(["../views/3d/layers/IntegratedMeshLayerView3D"],a)})]}return[2]})})};
b.prototype._validateLayer=function(a){if(a.layerType&&"IntegratedMesh"!==a.layerType)throw new e("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:a.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new e("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(1<this.version.major)throw new e("layer:service-version-too-new",
"Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});};d([c.shared("esri.layers.IntegratedMeshLayer")],b.prototype,"declaredClass",void 0);d([c.property({type:String,readOnly:!0})],b.prototype,"geometryType",void 0);d([c.property({type:["show","hide"]})],b.prototype,"listMode",void 0);d([c.property({type:["IntegratedMeshLayer"]})],b.prototype,"operationalLayerType",void 0);d([c.property({json:{read:!1},readOnly:!0})],b.prototype,"type",void 0);d([c.property({type:f.I3SNodePageDefinition,
readOnly:!0})],b.prototype,"nodePages",void 0);d([c.property({type:[f.I3SMaterialDefinition],readOnly:!0})],b.prototype,"materialDefinitions",void 0);d([c.property({type:[f.I3STextureSetDefinition],readOnly:!0})],b.prototype,"textureSetDefinitions",void 0);d([c.property({type:[f.I3SGeometryDefinition],readOnly:!0})],b.prototype,"geometryDefinitions",void 0);d([c.property(v.elevationInfo)],b.prototype,"elevationInfo",void 0);d([c.property({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},
read:!1}})],b.prototype,"path",void 0);return b=d([c.subclass("esri.layers.IntegratedMeshLayer")],b)}(c.declared(r,u,t))});