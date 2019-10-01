// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/assignHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper @dojo/framework/shim/Set ../../../../../core/asyncUtils ../../../../../core/Error ../../../../../core/has ../../../../../core/Logger ../../../../../core/promiseUtils ../../../../../core/accessorSupport/decorators ../../../../../geometry/Extent ../../../../../layers/graphics/featureConversionUtils ../../../../../layers/graphics/data/executeTileQuery ../../../../../tasks/operations/query ../../../engine ./BaseController ../support/DataTile ../support/DataTileFeaturesIndex ../support/Tile ../support/TileUpdateQueue ../../../tiling/TileQueue ../../../../support/OrderedQueueProcessor".split(" "),
function(f,J,N,v,w,t,g,B,A,O,y,P,z,q,Q,C,K,D,R,S,E,T,F,U,L,V){Object.defineProperty(J,"__esModule",{value:!0});var G=P.getLogger("esri.views.2d.layers.features.controllers.OnDemandController");f=y("esri-featurelayer-webgl");y=y("esri-mobile");var H=f&&"object"===typeof f&&null!=f.maxDrillLevel?f.maxDrillLevel:y?1:4,M=f&&"object"===typeof f&&null!=f.maxRecordCountFactor?f.maxRecordCountFactor:y?1:3,W=f&&"object"===typeof f&&null!=f.enablePBFQuery?f.enablePBFQuery:!0,I=new B.default,u=[];B=function(f){function c(){var a=
null!==f&&f.apply(this,arguments)||this;a.type="on-demand";a._queryInfoHash=null;a._dataTileIndex=new T.default;a._editsQueue=new V.OrderedQueueProcessor({concurrency:1,process:function(b,d){return a._processEditsEvent(b,d)}});a._featuresInFlight=new Map;return a}N(c,f);c.prototype.initialize=function(){var a=this;this._set("queryEngine",this._createQueryEngine());this._set("featureStore",this.queryEngine.featureStore);this._dataTileIndex.featureStore=this.featureStore;this._dataTileIndex.forEach(function(a){return a.done=
!1});this._fetchQueue=new L({concurrency:10,strategy:"center-first",tileInfoView:this.tileStore.tileScheme,process:function(b,d){return a._fetchTile(b,a.queryInfo,d)}});this._patchQueue=new L({concurrency:10,strategy:"center-first",tileInfoView:this.tileStore.tileScheme,process:function(b,d){return a._fetchTile(b.dataTile,b.queryInfo,d)}});this._updateQueue=new U.default({tileInfoView:this.tileStore.tileScheme,process:function(b,d,n){return a._updateTile(b,d,n)}})};c.prototype.destroy=function(){this._fetchQueue.clear();
this._patchQueue.clear();this._updateQueue.clear();this._editsQueue.destroy();this.queryEngine.destroy()};Object.defineProperty(c.prototype,"updating",{get:function(){return this._fetchQueue.updating||this._updateQueue.updating},enumerable:!0,configurable:!0});c.prototype.update=function(a,b){return g(this,void 0,void 0,function(){var d,n,e=this;return t(this,function(c){switch(c.label){case 0:return this.validateConfig(a,b),d=this.renderer.getAttributeHash(),n=a.availableFields.filter(function(a){return-1===
e.availableFields.indexOf(a)}),this._set("config",a),[4,this.updatePixelBuffer()];case 1:return c.sent(),b?d===this.renderer.getAttributeHash()?[3,3]:[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)]:[3,5];case 2:c.sent(),c.label=3;case 3:return[4,this.attributeStore.updateFilters(this)];case 4:return c.sent(),this.refresh(),[2];case 5:return n.length?[4,this._handleAttributeChange(n)]:[3,7];case 6:c.sent(),c.label=7;case 7:return"heatmap"===this.renderer.type?[2]:d===this.renderer.getAttributeHash()?
[3,9]:[4,this.attributeStore.setAttributeBindings(this.renderer,this.arcadeInfo)];case 8:c.sent(),this.featureStore.forEach(function(a){return e.attributeStore.setAttributeData(a.localId,a,e.geometryInfo,e.viewParams)}),c.label=9;case 9:return[4,this.attributeStore.updateFilters(this)];case 10:return c.sent(),[4,this.attributeStore.sendUpdates()];case 11:return c.sent(),[2]}})})};c.prototype.invalidate=function(){for(var a=0,b=this.tileStore.tiles;a<b.length;a++)this._updateQueue.push(b[a].id,Date.now())};
c.prototype.onEdits=function(a){var b=this;this._fetchQueue.pause();this._fetchQueue.reset();this._editsQueue.push(a).then(function(){0===b._editsQueue.length&&b._fetchQueue.resume()})};c.prototype.queryFeatures=function(a){return A.safeCast(this.queryEngine.executeQuery(a))};c.prototype.queryFeatureCount=function(a){return A.safeCast(this.queryEngine.executeQueryForCount(a))};c.prototype.queryObjectIds=function(a){return A.safeCast(this.queryEngine.executeQueryForIds(a))};c.prototype.queryExtent=
function(a){return A.safeCast(this.queryEngine.executeQueryForExtent(a))};c.prototype.redraw=function(){this._updateQueue.pause();this._manageTiles(this.tileStore.tiles);this._updateQueue.resume()};c.prototype.refresh=function(){this._queryInfoHash=Math.random().toString();this.queryEngine&&this.queryEngine.destroy();this.featureStore&&this.featureStore.clear();this._set("queryEngine",this._createQueryEngine());this._set("featureStore",this.queryEngine.featureStore);this._dataTileIndex.featureStore=
this.featureStore;this._dataTileIndex.forEach(function(a){return a.done=!1});this._editsQueue.pause();this._fetchQueue.pause();this._updateQueue.pause();this._editsQueue.clear();this._fetchQueue.clear();this._updateQueue.clear();this._manageTiles(this.tileStore.tiles);this._fetchQueue.resume();this._editsQueue.resume();this._updateQueue.resume()};c.prototype.setViewState=function(a){var b=this,d=this.viewState&&this.viewState.scale;this.inherited(arguments);this._fetchQueue.state=a;this._updateQueue.state=
a;d!==this.viewState.scale&&this.attributeStore.hasScaleExpr&&(this.featureStore.forEach(function(a){return b.attributeStore.setAttributeData(a.localId,a,b.geometryInfo,b.viewParams)}),this.attributeStore.sendUpdates())};c.prototype.onTileUpdate=function(a){this._manageTiles(a.added,a.removed)};c.prototype.onFeatureAdd=function(a){if(this._featuresInFlight.has(a.objectId)){var b=this._featuresInFlight.get(a.objectId).attributes;a.attributes=w({},b,a.attributes);this._featuresInFlight.delete(a.objectId)}a.localId=
this.attributeStore.createLocalId(a.objectId);this.attributeStore.setAttributeData(a.localId,a,this.geometryInfo,this.viewParams)};c.prototype._handleAttributeChange=function(a){return g(this,void 0,void 0,function(){return t(this,function(b){switch(b.label){case 0:return[4,this._fetchChangedFields(a)];case 1:return b.sent(),[2]}})})};c.prototype._fetchChangedTileFields=function(a,b){return g(this,void 0,void 0,function(){var d;return t(this,function(c){return(d=this._dataTileIndex.get(a.id))?[2,
this._fetchChangedTileFieldsDrill(d,b)]:[2]})})};c.prototype._fetchChangedTileFieldsDrill=function(a,b,d){void 0===d&&(d=0);return g(this,void 0,void 0,function(){var c,e,x,l,f,k,h,r,m,p,g=this;return t(this,function(n){switch(n.label){case 0:return c=w({},this.queryInfo,{returnGeometry:!1,returnCentroid:!1,outFields:b.concat([this.service.objectIdField])}),a.returnExceeded=a.returnExceeded||d>=H,e=a.key,x={key:e,dataTile:a,queryInfo:c},[4,this._patchQueue.push(x)];case 1:l=n.sent();if(!(l.exceededTransferLimit&&
d<H))return[3,3];f=a.tile.createChildTiles();k=f.map(function(b){var d=new E.default;d.tile=b;d.displayTile=a.displayTile;return d});return[4,z.all(k.map(function(a){return g._fetchChangedTileFieldsDrill(a,b,d+1)}))];case 2:return n.sent(),[2];case 3:h=0;for(r=l.features;h<r.length;h++)m=r[h],this.featureStore.has(m.objectId)?(p=this.featureStore.getFeature(m.objectId),p.attributes=w({},p.attributes,m.attributes)):this._featuresInFlight.set(m.objectId,m);return[2]}})})};c.prototype._fetchChangedTileFieldsPaged=
function(a,b,d){void 0===d&&(d=0);return g(this,void 0,void 0,function(){var c,e,x,l,f,k,h,r,m,p,g;return t(this,function(n){switch(n.label){case 0:return c=this.service.capabilities.query.supportsMaxRecordCountFactor,e=this.service.tileMaxRecordCount,x=e*(c?1:M),l=w({},this.queryInfo,{returnGeometry:!1,returnCentroid:!1,outFields:b.concat([this.service.objectIdField]),resultOffset:d*x,num:x}),a.returnExceeded=!0,f=a.key,k={key:f,dataTile:a,queryInfo:l},[4,this._patchQueue.push(k)];case 1:h=n.sent();
r=0;for(m=h.features;r<m.length;r++)p=m[r],this.featureStore.has(p.objectId)?(g=this.featureStore.getFeature(p.objectId),g.attributes=w({},g.attributes,p.attributes)):this._featuresInFlight.set(p.objectId,p);return h.exceededTransferLimit?[2,this._fetchChangedTileFieldsPaged(a,b,d+1)]:[2]}})})};c.prototype._fetchChangedFields=function(a){return g(this,void 0,void 0,function(){var b,d,c=this;return t(this,function(e){switch(e.label){case 0:return b=this.tileStore.tiles,d=b.map(function(b){return c._fetchChangedTileFields(b,
a)}),[4,z.all(d)];case 1:return e.sent(),[2]}})})};c.prototype._manageTiles=function(a,b){void 0===b&&(b=null);for(var d=this._dataTileIndex,c=this._fetchQueue,e=this._updateQueue,f="esriGeometryPoint"===this.service.geometryType,l=function(a){var b=d.get(a.id);b?(b.displayTile=a,f?d.forEach(function(d){F.isChildOf(d,b)&&(d.displayTile=a)}):b.done=!1):(b=new E.default,b.tile=a.clone(),b.displayTile=a,d.add(b));g._processDataTile(b)},g=this,k=0;k<a.length;k++){var h=a[k];l(h)}if(b)for(a=0;a<b.length;a++)h=
b[a],I.add(h),e.abort(h.id);d.forEach(function(a){I.has(a.displayTile)&&u.push(a)});for(e=0;e<u.length;e++)h=u[e],c.abort(h.id),d.delete(h);u.length=0;I.clear()};c.prototype._processDataTile=function(a){var b=this,d=a.key,c=this._fetchQueue,e=d.id,f=this._queryInfoHash,d=d.level-a.displayTile.key.level>=H;this._dataTileIndex.add(a);if(a.done||c.has(e)){if(a.queryInfoHash!==f||a.returnExceeded!==d)if(a.done)a.done=!1;else if(c.isOngoing(e))c.abort(e);else{a.queryInfoHash=f;a.returnExceeded=d;return}}else a.queryInfoHash=
f,a.returnExceeded=d;a.done?this._invalidateTile(a.displayTile):c.has(e)||c.push(a).then(function(d){return b._handleResponse(a,d)}).catch(function(b){z.isAbortError(b)||G.error(new O("featurelayer-controller:tile-error","Encountered an error when handling tile response",b));a.done=!0})};c.prototype._handleResponse=function(a,b){a.done=!0;C.hydrateOptimizedFeatureSet(b);if(b.exceededTransferLimit)if(a.returnExceeded)this._dataTileIndex.setTileFeatures(a,b.features),this._deleteChildrenDataTiles(a);
else{b=0;for(var d=a.tile.createChildTiles();b<d.length;b++){var c=d[b],e=new E.default;e.tile=c;e.displayTile=a.displayTile;this._processDataTile(e)}}else this._dataTileIndex.setTileFeatures(a,b.features),this._deleteChildrenDataTiles(a);this._invalidateTile(a.tile);this.attributeStore.sendUpdates()};c.prototype._deleteChildrenDataTiles=function(a){this._dataTileIndex.forEach(function(b){F.isChildOf(b,a)&&u.push(b)});for(var b=0;b<u.length;b++){var d=u[b];this._fetchQueue.abort(d.id);this._dataTileIndex.delete(d)}u.length=
0};c.prototype._fetchTile=function(a,b,d){return g(this,void 0,void 0,function(){var c,e,f,l,g,k,h,r,m,p=this;return t(this,function(n){c=new Q({xmin:a.bounds[0],ymin:a.bounds[1],xmax:a.bounds[2],ymax:a.bounds[3],spatialReference:this.spatialReference});e="esriGeometryPoint"===this.service.geometryType?a.tile:a.displayTile;f=e.extent;l=e.resolution;g=a.returnExceeded;k=this._createQuery(c,f,l,b,M,g);h=this.service.source;r=W&&this.service.capabilities.query.supportsFormatPBF;m=d.signal;return[2,r?
D.executeQueryPBF(h,k,{type:"optimized"},{signal:m}).then(function(a){return a.data}):D.executeQuery(h,k,{signal:m}).then(function(a){return C.convertFromFeatureSet(a.data,p.service.objectIdField)})]})})};c.prototype._invalidateTile=function(a){var b=this._updateQueue,c=0;for(a=this.tileStore.intersections(a,this._pixelBuffer);c<a.length;c++){var f=a[c].tile;b.push(f.id,f.updateTimestamp)}};c.prototype._updateTile=function(a,b,c){var d=this,e=this.tileStore.get(a);a=this.queryInfo;a=K.executeTileQuery(this.queryEngine,
e,{pixelBuffer:this._pixelBuffer,returnGeometry:a.returnGeometry,returnCentroid:a.returnCentroid});var f=a.objectIds;return this._applyProcessing({geometryType:this.service.geometryType,features:a.features,fields:this.service.fields,objectIdFieldName:this.service.objectIdField,transform:e.transform},c).then(function(a){var g=[],k=!0;d._dataTileIndex.forEach(function(a){e.id!==a.id&&F.isChildOf(a,e)&&k&&!a.done&&(k=!1)});k&&e&&e.objectIds.forEach(function(a){f.has(a)||(a=d.attributeStore.getLocalId(a),
g.push(a))});f.forEach(function(a){e.objectIds.add(a)});e.updateTimestamp=b;d.attributeStore.sendUpdates();return d.processor.onTileData(e,{clear:!0,addOrUpdate:a.features,remove:g,transformParams:R.Utils.getTransformParams(a)},c).catch(function(a){z.isAbortError(a)||G.error("update-tile",a)})})};c.prototype._processEditsEvent=function(a,b){return g(this,void 0,void 0,function(){var c,f,e,g,l,q,k,h=this;return t(this,function(d){switch(d.label){case 0:return c=function(a){return a.objectId},f=a.addedFeatures.concat(a.updatedFeatures).map(c),
e=a.deletedFeatures.map(c),g=this._createTempQueryEngine(),l=this._createObjectIdsQuery(f),f.length?[4,D.executeQuery(this.service.source,l)]:[3,2];case 1:q=d.sent().data,k=C.convertFromFeatureSet(q,this.service.objectIdField).features,this._dataTileIndex.addOrUpdateFeatures(k),g.featureStore.addMany(k),d.label=2;case 2:return this._dataTileIndex.deleteFeaturesById(e),this.attributeStore.sendUpdates(),this.tileStore.tiles.map(function(a){var c=K.executeTileQuery(g,a,w({},h.queryInfo,{pixelBuffer:h._pixelBuffer})).features,
d=e.concat(f).map(function(a){return h.attributeStore.getLocalId(a)});return h.processor.onTileData(a,{addOrUpdate:c,remove:d,transformParams:{transform:a.transform,hasZ:!1,hasM:!1}},{signal:b}).catch(function(a){z.isAbortError(a)||G.error("update-tile",a)})}),g.destroy(),[2]}})})};c.prototype._createObjectIdsQuery=function(a){var b=this._createDefaultQuery(this.queryInfo);b.objectIds=a;return b};v([q.property()],c.prototype,"_fetchQueue",void 0);v([q.property()],c.prototype,"_patchQueue",void 0);
v([q.property()],c.prototype,"_updateQueue",void 0);v([q.property({readOnly:!0})],c.prototype,"queryEngine",void 0);v([q.property({readOnly:!0})],c.prototype,"featureStore",void 0);v([q.property({dependsOn:["_fetchQueue.updating","_updateQueue.updating"]})],c.prototype,"updating",null);return c=v([q.subclass("esri.views.2d.layers.features.controllers.OnDemandController")],c)}(q.declared(S.default));J.default=B});