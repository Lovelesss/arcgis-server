// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper @dojo/framework/shim/array @dojo/framework/shim/Set ../../../Graphic ../../../core/arrayUtils ../../../core/asyncUtils ../../../core/Logger ../../../core/maybe ../../../core/promiseUtils ../../../core/watchUtils ../../../core/accessorSupport/decorators ../../../core/libs/gl-matrix-2/vec3f64 ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/contains ../../../layers/graphics/dehydratedFeatures ../../../layers/graphics/controllers/I3SOnDemandController ../../../layers/support/fieldUtils ../../../renderers/support/renderingInfoUtils ../../../tasks/support/Query ./LayerView3D ./graphics/Graphics3DFeatureLikeLayerView ./graphics/Graphics3DVerticalScale ./graphics/QueryEngine ./i3s/I3SUtil ./support/DefinitionExpressionSceneLayerView ./support/fieldProperties ./support/layerViewUpdatingProperties ./support/PopupSceneLayerView ../support/GraphicsMap ../support/orientedBoundingBox ../support/projectionUtils ../../layers/support/FeatureFilter".split(" "),
function(l,na,R,f,I,J,w,K,S,T,r,U,x,D,m,d,V,L,W,X,G,Y,t,Z,M,aa,ba,ca,da,y,ea,fa,ga,ha,ia,ja,E,ka){function N(d,b){for(var a=0;a<d.length;a++)for(var c=0,A=d[a].graphics;c<A.length;c++){var g=A[c];g.attributes||(g.attributes={});if(b&&b.loadedAttributes)for(var h=0,f=b.loadedAttributes;h<f.length;h++){var u=f[h].name;b.attributeData[u]&&(g.attributes[u]=y.getCachedAttributeValue(b.attributeData[u],a))}}}var B=U.getLogger("esri.views.3d.layers.SceneLayerGraphicsView3D"),O=fa.defineFieldProperties();
l=function(l){function b(a){a=l.call(this)||this;a._nodesAddedToStage=new Map;a.overlayUpdating=!1;a.supportsDraping=!0;a._queryEngine=null;a._memCache=null;a.loadedGraphics=new ia.GraphicsMap;a.progressiveLoadFactor=1;a.supportsHeightUnitConversion=!0;a._coordinatesOutsideExtentErrors=0;a._maxCoordinatesOutsideExtentErrors=20;return a}R(b,l);b.prototype.initialize=function(){var a=this;y.checkSpatialReferences(this.layer,this.view.spatialReference,this.view.viewingMode);this.handles.add([m.init(this,
["layer.renderer","layer.labelingInfo","layer.labelsVisible","definitionExpressionFields","filter"],function(){return a._updateRequiredFields()}),m.init(this.layer,"rangeInfos",function(c){return a._rangeInfosChanged(c)}),this.layer.watch("renderer",function(c,b){return a._rendererChange(c,b)}),this.watch(["layer.objectIdFilter","parsedDefinitionExpression"],function(){return a._filterChange()})]);this._set("graphics3d",new ba({owner:this,layer:this.layer,asyncGraphicsUpdates:!0,scaleVisibilityEnabled:!0,
filterVisibilityEnabled:!0,timeExtentVisibilityEnabled:!1,frustumVisibilityEnabled:!1,elevationAlignmentEnabled:!0,elevationFeatureExpressionEnabled:!1,suspendResumeExtentMode:"data",dataExtent:this.layer.fullExtent,updateClippingExtent:function(c){return a._updateClippingExtent(c)}}));if(this.graphics3d.elevationAlignment)this.graphics3d.elevationAlignment.events.on("invalidate-elevation",function(c){return a._invalidateElevation(c.extent,c.spatialReference)});this.supportsHeightUnitConversion&&
(this._verticalScale=new ca({sourceSpatialReference:this.layer.spatialReference,destSpatialReference:this.view.spatialReference}));this.addResolvingPromise(this.graphics3d.setup());this.drawingOrder=this.view.getDrawingOrder(this.layer.uid);this._memCache=this.view.resourceController.memoryController.getMemCache(this.layer.uid);this._controller=new Y({layerView:this,scaleVisibilityEnabled:!1});this.when(function(){a._queryEngine=new da.default({layerView:a,priority:4});a.handles.add([m.init(a,"maximumNumberOfFeatures",
function(c){return a._controller.featureTarget=c}),m.whenTrue(a,"suspended",function(){return a._removeAllNodeData()})])})};b.prototype.destroy=function(){this.graphics3d&&(this.graphics3d.destroy(),this._set("graphics3d",null));this._controller&&(this._controller.destroy(),this._controller=null);this._queryEngine&&(this._queryEngine.destroy(),this._queryEngine=null);this._memCache.destroy();this._nodesAddedToStage=this._memCache=null};Object.defineProperty(b.prototype,"maximumNumberOfFeatures",{get:function(){var a=
this.graphics3d&&this.graphics3d.graphicsCore&&this.graphics3d.graphicsCore.displayFeatureLimit;return a?a.maximumNumberOfFeatures:0},set:function(a){null!=a?(this._override("maximumNumberOfFeatures",a),this._controller.fixedFeatureTarget=!0):(this._clearOverride("maximumNumberOfFeatures"),this._controller.fixedFeatureTarget=!1)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"maximumNumberOfFeaturesExceeded",{get:function(){return this.suspended?!1:!!this._controller&&!this._controller.leafsReached},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasM",{get:function(){return!1},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasZ",{get:function(){return!0},enumerable:!0,configurable:!0});b.prototype.whenGraphicAttributes=function(a,c){var b=this;return y.whenGraphicAttributes(this.layer,a,this._getObjectIdField(),c,function(a){for(var c=new Map,A=[],g=0;g<a.length;g++){var d=a[g],e=b._findGraphicNodeAndIndex(d),k=c.get(e.node);k||(k={node:e.node,indices:[],
graphics:[]},A.push(k));k.indices.push(e.index);k.graphics.push(d)}return A},{ignoreUnavailableFields:!0,populateObjectId:!0})};b.prototype.getGraphicFromGraphicUid=function(a){if(!this.loadedGraphics)return null;var c=G.hydrateGraphic(this.loadedGraphics.find(function(c){return c.uid===a}),this.layer),b=this._getObjectIdField();if(!c||!c.attributes||!c.attributes[b])return null;c.layer=this.layer;c.sourceLayer=this.layer;return c};b.prototype.whenGraphicBounds=function(a,c){return this.graphics3d.graphicsCore.whenGraphicBounds(a,
c)};b.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)};b.prototype.isUpdating=function(){return this.overlayUpdating||this._controller&&this._controller.updating||this.graphics3d&&this.graphics3d.updating};b.prototype.getRenderingInfo=function(a,c){(a=Z.getRenderingInfo(a,{renderer:c}))&&a.color&&(c=a.color,c[0]/=255,c[1]/=255,c[2]/=255);return a};Object.defineProperty(b.prototype,"symbolUpdateType",{get:function(){return this.graphics3d.graphicsCore.symbolUpdateType},
enumerable:!0,configurable:!0});b.prototype._findGraphicNodeAndIndex=function(a){a=a.attributes[this.layer.objectIdField];for(var c=0,b=T.keysOfMap(this._nodesAddedToStage);c<b.length;c++){var g=this._nodesAddedToStage.get(b[c]),h=this._findGraphicIndex(g.bundle,a);if(0<=h)return{node:g.node,index:h}}return null};b.prototype._findGraphicIndex=function(a,c){for(var b=0;b<a.length;b++)for(var g=0,h=a[b].featureIds;g<h.length;g++)if(h[g]===c)return b;return-1};b.prototype.highlight=function(a,c){void 0===
c&&(c={});return this.graphics3d.highlight(a,c,this.layer.objectIdField)};b.prototype.addNodeData=function(a,c){if(this._nodesAddedToStage.has(a.index))B.error("I3S node "+a.id+" already added");else{var b=c.allGeometryData,g=c.attributeDataInfo,h=this._controller.crsIndex;c=this.view.spatialReference;var d=[0,0,0],f=this._getObjectIdField(),P=[],e;if(e=this.layer.fullExtent)e=this.layer.fullExtent.clone(),e.xmin-=.5,e.ymin-=.5,e.xmax+=.5,e.ymax+=.5,e.hasZ&&(e.zmin-=.5,e.zmax+=.5),e.hasM&&(e.mmin-=
.5,e.mmax+=.5);var k=e;e=[];for(var q=[],l=0;l<b.length;l++){var n=b[l],r=n.featureDataPosition,m=r.length,w=n.geometries||[la[m]],x=n.featureIds;k&&!X.extentContainsCoords3D(k,r)&&(this._coordinatesOutsideExtentErrors<this._maxCoordinatesOutsideExtentErrors&&B.error("Service Error: Coordinates outside of layer extent"),this._coordinatesOutsideExtentErrors+1===this._maxCoordinatesOutsideExtentErrors&&B.error("Maximum number of errors reached. Further errors are ignored."),this._coordinatesOutsideExtentErrors++);
for(var C=0;C<w.length;C++){var v=w[C];if("points"===v.params.type){var t=[],z=x[C<x.length?C:0],y={};null!=z&&(y[f]=z);var z=null==z?S.generateUID():z,H=void 0;"Embedded"===v.type&&(H=v.params.vertexAttributes.position);for(v=0;v<H.length;v+=m){for(var p=0;p<m;p++)d[p]=r[p]+H[v+p];E.bufferToBuffer(d,h,0,F,c,0,1);p=G.makeDehydratedPoint(F[0],F[1],F[2],c);3>m&&(p.z=void 0);t.push({uid:z,geometry:p,attributes:y,visible:!0});a.obb||q.push(p.x,p.y,p.z?p.z:0)}e.push.apply(e,t);P.push({featureIds:n.featureIds,
graphics:t})}}}a.numFeatures=e.length;this._updateNodeMemory(a);b={bundle:P,attributeInfo:g,node:a};N(b.bundle,b.attributeInfo);0<q.length&&(g=this.view.renderSpatialReference,h=this._controller.crsVertex,E.bufferToBuffer(q,c,0,q,g,0,q.length/3),a.obb=ja.compute({data:q,size:3,offsetIdx:0,strideIdx:3}),E.vectorToVector(a.obb.center,g,a.obb.center,h),this._controller.updateVisibility(a.index));if(!this._controller.isGeometryVisible(a))return this._cacheNodeData(b),D.resolve();this._verticalScale&&
this._verticalScale.adjust(e);this._nodesAddedToStage.set(a.index,b);this.loadedGraphics.addMany(e);this._filterNode(b);return D.resolve()}};b.prototype.isNodeLoaded=function(a){return this._nodesAddedToStage.has(a)};b.prototype._updateNodeMemory=function(a){a.memory=4096+a.numFeatures*this.graphics3d.graphicsCore.usedMemoryPerGraphic};b.prototype._cacheNodeData=function(a){var c=a.bundle.reduce(function(a,c){return c.graphics.reduce(function(a,c){return G.estimateSize(c)+a},512+8*c.featureIds.length+
a)},1024);this._memCache.put(this._getMemCacheKey(a.node),a,c)};b.prototype._getMemCacheKey=function(a){return""+a.index};b.prototype._removeAllNodeData=function(){var a=this;this._nodesAddedToStage.forEach(function(c){c&&(a._updateNodeMemory(c.node),a._cacheNodeData(c))});this._nodesAddedToStage.clear();this.loadedGraphics.clear()};b.prototype.removeNodeData=function(a,c){for(;0<a.length&&!c.done;){var b=a.pop();if(b=this._removeNodeStageData(b))this._updateNodeMemory(b.node),this._cacheNodeData(b);
c.madeProgress()}};b.prototype._removeNodeStageData=function(a){var c=this._nodesAddedToStage.get(a);if(!c)return null;for(var b=0,g=c.bundle;b<g.length;b++)this.loadedGraphics.removeMany(g[b].graphics);this._nodesAddedToStage.delete(a);return c};b.prototype.loadCachedNodeData=function(a){return D.resolve(this._memCache.pop(this._getMemCacheKey(a)))};b.prototype.addCachedNodeData=function(a,b,d){if(this._nodesAddedToStage.has(a.index))B.error("I3S node "+a.id+" already added");else{for(var c=0,h=
b.bundle;c<h.length;c++)this.loadedGraphics.addMany(h[c].graphics);this._nodesAddedToStage.set(a.index,b);this._updateNodeMemory(a);this.setAttributeData(a.index,d);this._filterNode(b);return D.resolve()}};b.prototype.getLoadedNodeIds=function(){var a=[];this._nodesAddedToStage.forEach(function(b){return a.push(b.node.id)});return a.sort()};b.prototype.getLoadedNodeIndices=function(a){this._nodesAddedToStage.forEach(function(b,d){return a.push(d)})};b.prototype.getLoadedAttributes=function(a){if((a=
this._nodesAddedToStage.get(a))&&a.attributeInfo)return a.attributeInfo.loadedAttributes};b.prototype.getAttributeData=function(a){if((a=this._nodesAddedToStage.get(a))&&a.attributeInfo)return a.attributeInfo.attributeData};b.prototype.setAttributeData=function(a,b){if(a=this._nodesAddedToStage.get(a))a.attributeInfo=b,N(a.bundle,b),this._filterNode(a),this.graphics3d.graphicsCore.labelsEnabled&&(b=a.bundle.map(function(a){return a.graphics.length&&a.graphics[0].uid}),this.graphics3d.graphicsCore.updateLabelingInfo(b))};
b.prototype._updateClippingExtent=function(a){this._controller&&this._controller.updateClippingArea(a);return!1};b.prototype._getObjectIdField=function(){return this.layer.objectIdField||"OBJECTID"};b.prototype._rendererChange=function(a,b){return J(this,void 0,void 0,function(){var c,d,h,f;return I(this,function(g){switch(g.label){case 0:return c=this.layer.fields,d=new K.default,a?[4,a.collectRequiredFields(d,c)]:[3,2];case 1:return g.sent(),h=w.from(d).sort(),[3,3];case 2:h=[],g.label=3;case 3:return d.clear(),
b?[4,b.collectRequiredFields(d,c)]:[3,5];case 4:return g.sent(),f=w.from(d).sort(),[3,6];case 5:f=[],g.label=6;case 6:if(h.length===f.length&&h.every(function(a,b){return h[b]===f[b]}))return[2];this._reloadAllNodes();return[2]}})})};b.prototype._rangeInfosChanged=function(a){null!=a&&0<a.length&&B.warn("Unsupported property: rangeInfos are currently only serialized to and from web scenes but do not affect rendering.")};b.prototype._filterChange=function(){var a=this;this._nodesAddedToStage.forEach(function(b){return a._filterNode(b)})};
b.prototype._reloadAllNodes=function(){this._removeAllNodeData();this._controller&&this._controller.restartNodeLoading()};b.prototype._filterNode=function(a){var b=this._getObjectIdField(),d=null;if(this.layer.objectIdFilter)var g=this.layer.objectIdFilter.ids,f="include"===this.layer.objectIdFilter.method,d=function(a){return 0<=g.indexOf(a)===f};var l=this.parsedDefinitionExpression,u=0;for(a=a.bundle;u<a.length;u++)for(var m=0,e=a[u].graphics;m<e.length;m++){var k=e[m],q=k.visible;d&&!d(k.attributes[b])?
k.visible=!1:k.visible=l?this._evaluateClause(l,k):!0;q!==k.visible&&(n.graphic=k,n.property="visible",n.oldValue=q,n.newValue=k.visible,this.graphics3d.graphicsCore.graphicUpdateHandler(n))}};b.prototype._updateRequiredFields=function(){return J(this,void 0,void 0,function(){var a,b,d,g,f,m,l,n,e;return I(this,function(c){switch(c.label){case 0:return a=this,d=b=a.layer,g=d.fields,f=d.renderer,m=d.labelsVisible,l=a.filter,n=a.definitionExpressionFields,e=new K.default,f?[4,f.collectRequiredFields(e,
g)]:[3,2];case 1:c.sent(),c.label=2;case 2:return m?[4,t.collectLabelingFields(e,b)]:[3,4];case 3:c.sent(),c.label=4;case 4:return x.isSome(l)?[4,t.collectFilterFields(e,b,l)]:[3,6];case 5:c.sent(),c.label=6;case 6:return t.collectFields(e,g,n),this._set("requiredFields",w.from(e).sort()),[2]}})})};b.prototype._invalidateElevation=function(a,b){var c=this._controller.crsIndex;E.boundingRectToBoundingRect(a,b,Q,c);a=ma;L.fromRect(a,Q);a[2]=-Infinity;a[5]=Infinity;this._controller.updateElevationChanged(a,
c)};b.prototype.createQuery=function(){var a={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference};return x.isSome(this.filter)?this.filter.createQuery(a):new M(a)};b.prototype.queryFeatures=function(a,b){return r.safeCast(this._queryEngine.executeQuery(this._ensureQuery(a),b&&b.signal))};b.prototype.queryObjectIds=function(a,b){return r.safeCast(this._queryEngine.executeQueryForIds(this._ensureQuery(a),b&&b.signal))};b.prototype.queryFeatureCount=function(a,b){return r.safeCast(this._queryEngine.executeQueryForCount(this._ensureQuery(a),
b&&b.signal))};b.prototype.queryExtent=function(a,b){return r.safeCast(this._queryEngine.executeQueryForExtent(this._ensureQuery(a),b&&b.signal))};b.prototype._ensureQuery=function(a){return this._addDefinitionExpressionToQuery(x.isNone(a)?this.createQuery():M.from(a))};b.prototype.getUsedMemory=function(){var a=this.graphics3d&&this.graphics3d.graphicsCore;return a?a.usedMemory:0};b.prototype.getUnloadedMemory=function(){var a=this.graphics3d&&this.graphics3d.graphicsCore;return.8*((this._controller?
this._controller.unloadedMemoryEstimate:0)+(a?a.unprocessedMemoryEstimate:0))};b.prototype.ignoresMemoryFactor=function(){return this._controller&&this._controller.fixedFeatureTarget};b.prototype.getNumberOfNodes=function(){return this._nodesAddedToStage.size};b.prototype.getNumberOfFeatures=function(){return this.loadedGraphics.length};b.prototype.getStats=function(){var a=this.graphics3d.graphicsCore.getStats();a.nodes=this.getNumberOfNodes();a.features=this.loadedGraphics.length;this._controller&&
this._controller.updateStats(a);return a};f([d.property()],b.prototype,"graphics3d",void 0);f([d.property()],b.prototype,"drawingOrder",void 0);f([d.property({aliasOf:"graphics3d.graphicsCore.hasDraped"})],b.prototype,"hasDraped",void 0);f([d.property({type:Boolean})],b.prototype,"overlayUpdating",void 0);f([d.property({type:Boolean})],b.prototype,"supportsDraping",void 0);f([d.property({type:ka})],b.prototype,"filter",void 0);f([d.property()],b.prototype,"loadedGraphics",void 0);f([d.property()],
b.prototype,"layer",void 0);f([d.property()],b.prototype,"_controller",void 0);f([d.property({dependsOn:["_controller.updating","graphics3d.updating","overlayUpdating"]})],b.prototype,"updating",void 0);f([d.property({dependsOn:["_controller.rootNodeVisible"]})],b.prototype,"suspended",void 0);f([d.property(ga.updatingPercentage)],b.prototype,"updatingPercentage",void 0);f([d.property({aliasOf:"_controller.updatingPercentage"})],b.prototype,"updatingPercentageValue",void 0);f([d.property(O.requiredFields)],
b.prototype,"requiredFields",void 0);f([d.property(O.availableFields)],b.prototype,"availableFields",void 0);f([d.property({type:Number,dependsOn:["graphics3d.graphicsCore.displayFeatureLimit"]})],b.prototype,"maximumNumberOfFeatures",null);f([d.property({readOnly:!0,dependsOn:["suspended","_controller.leafsReached"]})],b.prototype,"maximumNumberOfFeaturesExceeded",null);f([d.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.point.lodFactor"})],b.prototype,"lodFactor",void 0);f([d.property({readOnly:!0})],
b.prototype,"hasM",null);f([d.property({readOnly:!0})],b.prototype,"hasZ",null);return b=f([d.subclass("esri.views.3d.layers.SceneLayerGraphicsView3D")],b)}(d.declared(aa,ha.PopupSceneLayerView,ea.DefinitionExpressionSceneLayerView));var la={2:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0]}}},3:{type:"Embedded",params:{type:"points",vertexAttributes:{position:[0,0,0]}}}},F=V.vec3f64.create(),n={graphic:null,property:null,oldValue:null,newValue:null},ma=L.create(),Q=W.create();
return l});