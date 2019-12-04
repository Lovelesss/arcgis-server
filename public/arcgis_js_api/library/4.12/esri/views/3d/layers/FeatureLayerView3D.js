// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/asyncUtils ../../../core/compilerUtils ../../../core/Error ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/controllers/FeatureTileController3D ./FeatureLikeLayerView3D ./support/layerViewUpdatingProperties ../support/EventedSet ../../layers/FeatureLayerView".split(" "),
function(D,E,r,e,t,l,f,p,u,v,w,h,d,x,y,z,A,B,C){return function(q){function b(a){a=q.call(this)||this;a._controllerTotal=0;a._graphicsCoreTotal=0;a.suspendResumeExtentMode="data";return a}r(b,q);Object.defineProperty(b.prototype,"updatingPercentageValue",{get:function(){var a=0,c=0;this.controller&&this.controller.updating&&(a+=this.controller.updatingRemaining,c=this.controller.updatingTotal);var b=0;this.graphics3d&&this.graphics3d.graphicsCore&&(a+=this.graphics3d.graphicsCore.updatingRemaining,
b=this.graphics3d.graphicsCore.updatingTotal);0===c&&0===b?this._graphicsCoreTotal=this._controllerTotal=0:(this._controllerTotal=Math.max(c,this._controllerTotal),this._graphicsCoreTotal=Math.max(b,this._graphicsCoreTotal));return(c=this._controllerTotal+this._graphicsCoreTotal)?(c-a)/c*100:100},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return this.controller?!(this.suspended||!this.controller.maximumNumberOfFeaturesExceeded):
!1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"asyncGraphicsUpdates",{get:function(){if(this.controller)switch(this.controller.mode){case "snapshot":return 5E3<this.controller.serviceDataCount;case "tiles":break;default:u.neverReached(this.controller.mode)}return!0},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasZ",{get:function(){var a=this.layer,c=a.capabilities&&a.capabilities.data;return c&&c.supportsZ?null!=a.returnZ?a.returnZ:c.supportsZ:!1},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"hasM",{get:function(){var a=this.layer,c=a.capabilities&&a.capabilities.data;return c&&c.supportsM?"returnM"in a&&null!=a.returnM?a.returnM:!1:!1},enumerable:!0,configurable:!0});b.prototype.fetchPopupFeatures=function(a,c){return f(this,void 0,void 0,function(){var a;return l(this,function(b){return(a=this.validateFetchPopupFeatures(c))?[2,w.reject(a)]:[2,this.fetchClientPopupFeatures(c)]})})};b.prototype.setVisibility=function(a,c){this.graphics3d.graphicsCore.setObjectIdVisibility(a,
c)};b.prototype.createQuery=function(){return this.inherited(arguments)};b.prototype.queryFeatures=function(a,c){var b=this,m=arguments,d=function(){return b.inherited(m)};return"mesh"===this.layer.geometryType?p.safeCast(this._queryFeaturesMesh(this._ensureQuery(a),d)):p.safeCast(d())};b.prototype.createController=function(){return f(this,void 0,void 0,function(){var a,c=this;return l(this,function(b){a=new y({layerView:this,graphics:new B.EventedSet,extent:this.clippingExtent,hasZ:this.hasZ,hasM:this.hasM});
this.handles.add(h.init(a,"serviceDataExtent",function(a){c.graphics3d&&(c.graphics3d.dataExtent=a)}));this.handles.add(h.init(this,"suspended",function(c){c?a.suspend():a.resume()},!0));this.handles.add(h.init(this.graphics3d.graphicsCore,"displayFeatureLimit",function(){return c.updateDisplayFeatureLimit(a)}));this.handles.add(this.view.resourceController.memoryController.events.on("quality-changed",function(){return c.updateDisplayFeatureLimit()}));return[2,a]})})};b.prototype.doRefresh=function(a){return f(this,
void 0,void 0,function(){return l(this,function(a){!this.suspended&&this.controller&&this.controller.refresh();return[2]})})};b.prototype.getStats=function(){var a=this.inherited(arguments);if(this.controller&&a.features){var c=this.controller.debug;a.features+="/"+c.storedFeatures+"/"+c.totalFeatures;a.totalVertices=c.totalVertices}c=(c=this.controller&&this.controller.displayFeatureLimit)&&c.maximumSymbolComplexity;a.numTiles=this.controller?this.controller.tileDescriptors.length:0;a.partial=this.maximumNumberOfFeaturesExceeded;
a.mode=this.controller?this.controller.mode:"n/a";a.symbolComplexity=c?"f:"+c.primitivesPerFeature+",v:"+c.primitivesPerCoordinate:"n/a";var b=this.graphics3d&&this.graphics3d.graphicsCore,c=b?b.unprocessedMemoryEstimate:0,b=this.controller?this.controller.expectedFeatureDiff*b.usedMemoryPerGraphic:0;a.memory="u:"+(this.getUsedMemory()/1024/1024).toFixed(1)+", pc:"+(""+(c/1024/1024).toFixed(1))+", pf:"+(""+(b/1024/1024).toFixed(1))+" MB";return a};b.prototype.getUsedMemory=function(){var a=this.graphics3d&&
this.graphics3d.graphicsCore;return(a?a.usedMemory:0)+(this.controller?this.controller.memoryForUnusedFeatures:0)};b.prototype.getUnloadedMemory=function(){var a=this.graphics3d&&this.graphics3d.graphicsCore;return(a?a.unprocessedMemoryEstimate:0)+(this.controller?this.controller.expectedFeatureDiff*a.usedMemoryPerGraphic:0)};b.prototype.ignoresMemoryFactor=function(){return this.controller&&this.controller.hasMaximumNumberOfFeaturesOverride};b.prototype.updateDisplayFeatureLimit=function(a){void 0===
a&&(a=this.controller);if(a&&this.graphics3d&&this.graphics3d.graphicsCore){var c=this.graphics3d.graphicsCore.displayFeatureLimit,b=this.view.resourceController.memoryController.memoryFactor;a.displayFeatureLimit=1===b?c:t({},c,{maximumNumberOfFeatures:Math.ceil(c.maximumNumberOfFeatures*b),maximumTotalNumberOfFeatures:Math.ceil(c.maximumTotalNumberOfFeatures*b),minimumTotalNumberOfFeatures:Math.ceil(c.minimumTotalNumberOfFeatures*b)})}};b.prototype._queryFeaturesMesh=function(a,c){return f(this,
void 0,void 0,function(){var b,d,e,g,f,n,k,h;return l(this,function(m){switch(m.label){case 0:return[4,this._validateQueryFeaturesMesh(a)];case 1:return m.sent(),[4,c()];case 2:b=m.sent();if(a&&a.outStatistics)return[2,b];d=this.layer.objectIdField;e=this.graphics3d.graphicsCore.graphics3DGraphicsByObjectID;g=[];f=0;for(n=b.features;f<n.length;f++)if(k=n[f],k.geometry){if(h=e.get(k.attributes[d]))k.geometry=x.hydrateGeometry(h.graphic.geometry),g.push(k)}else g.push(k);b.features=g;return[2,b]}})})};
b.prototype._validateQueryFeaturesMesh=function(a){return f(this,void 0,void 0,function(){var b,d,e,f,g;return l(this,function(c){if(!a)return[2];b=function(a){throw new v("feature-layer-view:unsupported-query","Queries on Mesh feature collection layers do not support '"+a+"'");};d=["quantizationParameters","geometryPrecision","maxAllowableOffset"];e=0;for(f=d;e<f.length;e++)g=f[e],null!=a[g]&&b(g);"returnM"in a&&a.returnM&&b("returnM");"returnCentroid"in a&&a.returnCentroid&&b("returnCentroid");
a.outSpatialReference&&!a.outSpatialReference.equals(this.view.spatialReference)&&b("outSpatialReference");return[2]})})};e([d.property()],b.prototype,"layer",void 0);e([d.property()],b.prototype,"controller",void 0);e([d.property({readOnly:!0,dependsOn:["controller.updatingRemaining","controller.updatingTotal","graphics3d.graphicsCore.updatingRemaining","graphics3d.graphicsCore.updatingTotal"]})],b.prototype,"updatingPercentageValue",null);e([d.property({aliasOf:"controller.maximumNumberOfFeatures",
set:null,get:null})],b.prototype,"maximumNumberOfFeatures",void 0);e([d.property({dependsOn:["suspended","controller.maximumNumberOfFeaturesExceeded"]})],b.prototype,"maximumNumberOfFeaturesExceeded",null);e([d.property(A.updatingPercentage)],b.prototype,"updatingPercentage",void 0);e([d.property({readOnly:!0,dependsOn:["controller.mode"]})],b.prototype,"asyncGraphicsUpdates",null);e([d.property({readOnly:!0})],b.prototype,"hasZ",null);e([d.property({readOnly:!0})],b.prototype,"hasM",null);e([d.property()],
b.prototype,"suspendResumeExtentMode",void 0);return b=e([d.subclass("esri.views.3d.layers.FeatureLayerView3D")],b)}(d.declared(z,C))});