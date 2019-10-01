// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../../core/tsSupport/assignHelper ../../../../../../core/tsSupport/extendsHelper ../../../../../../core/tsSupport/generatorHelper ../../../../../../core/tsSupport/awaiterHelper ../../../../../../core/maybe ../../../../../../core/promiseUtils ../../../../../../core/promiseUtils ../../../../../../geometry/Point ../../../../engine".split(" "),function(n,p,q,u,r,t,v,l,w,x,k){Object.defineProperty(p,"__esModule",{value:!0});var m=k.enums.WGLDrawPhase;n=function(g){function c(a){var b=
g.call(this)||this;b._rendererInfo=new k.WGLRendererInfo;b._pointToCallbacks=new Map;b._displayWidth=0;b._displayHeight=0;b.layer=null;b.tileInfoView=a.tileInfoView;b.layer=a.layer;b._layerView=a.layerView;b.attributeView=new k.AttributeStoreView;return b}u(c,g);c.prototype.dispose=function(){this.removeAllChildren();for(var a=0,b=this.children;a<b.length;a++)b[a].dispose();this.attributeView.destroy()};c.prototype.disposeWebGLResources=function(){for(var a=0,b=this.children;a<b.length;a++)b[a].clear()};
c.prototype.displayWidth=function(){return this._displayWidth};Object.defineProperty(c.prototype,"displayHeight",{get:function(){return this._displayHeight},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"visualVariablesInfo",{get:function(){return this._visualVariablesInfo},set:function(a){this._visualVariablesInfo=a;this.requestRender()},enumerable:!0,configurable:!0});c.prototype.hitTest=function(a,b){var d=this,h=[a,b];return l.create(function(a,b){d._pointToCallbacks.set(h,
{resolve:a,reject:b});d.requestRender()},function(){d._pointToCallbacks.has(h)&&d._pointToCallbacks.delete(h)})};c.prototype.whenAttached=function(){var a=this;return this.attached?l.resolve():l.create(function(b){return a.once("attached",function(){return b()})})};c.prototype.getMaterialItems=function(a){var b=this;return this.whenAttached().then(function(){if(b.stage&&a&&0!==a.length){for(var d=[],h=b.stage.painter.textureManager,c=0;c<a.length;c++){var f=a[c];d.push(h.rasterizeItem(f.symbol,f.glyphIds))}return w.all(d).then(function(b){return b.map(function(b,
d){return{id:a[d].id,mosaicItem:b}})})}})};c.prototype.onTileData=function(a,b){return t(this,void 0,void 0,function(){var d,c,e,f;return r(this,function(h){switch(h.label){case 0:return d=!(!this.layer.labelingInfo||!this.layer.labelingInfo.length),c=b.addOrUpdate&&k.TileData.decode(b.addOrUpdate),e=q({},b,{addOrUpdate:c}),[4,this._layerView.getLocalIdsToHighlight()];case 1:return f=h.sent(),a.setData(e,d,this.layer.labelsVisible),a.buildHLList(f),this.contains(a)||this.addChild(a),this.requestRender(),
this._layerView&&this._layerView.view.labelManager.requestUpdate(),[2]}})})};c.prototype.onTileError=function(a){a.clear();this.contains(a)||this.addChild(a);this.requestRender()};c.prototype.addChild=function(a){var b=g.prototype.addChild.call(this,a);this.layer.labelingInfo&&this._layerView&&this._layerView.view.labelManager.addTile(this._layerView,a);this._buildHLList();return b};c.prototype.removeChild=function(a){var b=g.prototype.removeChild.call(this,a);this.layer.labelingInfo&&this._layerView&&
this._layerView.view.labelManager.removeTile(this._layerView,a.key.id);this._buildHLList();return b};c.prototype.renderChildren=function(a){var b=this,d=a.state,c=this.stage.painter,e=this._visualVariablesInfo&&this._visualVariablesInfo.vvRanges;this._updateTilesTransform(d,this.tileInfoView.getClosestInfoForScale(d.scale).level);this._rendererInfo.update(d,this.layer.renderer,e,this._layerView.effects);this.attributeView.update(this.stage.context);this.attributeView.bindTextures(this.stage.context);
var e=this.tileInfoView.getClosestInfoForScale(d.scale).level,d=this.tileInfoView.tileInfo.scaleToZoom(d.scale),f=q({},a,{rendererInfo:this._rendererInfo,requiredLevel:e,displayLevel:d,context:this.stage.context,painter:this.stage.painter,attributeView:this.attributeView});this.sortChildren(function(a,b){return 0!==a.key.level-b.key.level?a.key.level-b.key.level:0!==a.key.row-b.key.row?a.key.row-b.key.row:a.key.col-b.key.col});a=f.drawPhase;if(a&(m.LABEL|m.LABEL_ALPHA)){d=this.layer;if(!(d.labelsVisible&&
d.labelingInfo&&0<d.labelingInfo.length))return;this._updateTilesTransform(f.state,f.requiredLevel)}c.draw(f,this.children,a,this._painterOptions);this._layerView.hasHighlight()&&c.highlight(f,this.children);this._pointToCallbacks.forEach(function(a,d){a.resolve(b._hitTest(f,d[0],d[1]))});this._pointToCallbacks.clear();this._layerView.effects&&this._layerView.effects.some(function(a){return v.isSome(a)&&!a.done})&&this.requestRender()};c.prototype.updateHighlight=function(){this._buildHLList()};c.prototype._hitTest=
function(a,b,d){var c=this.stage,e=c.painter,c=c.context,f=a.requiredLevel,g=[0,0];a.state.toMap(g,[b,d]);b=a.state.clone();d=b.viewpoint.clone();d.targetGeometry=new x(g[0],g[1],a.state.spatialReference);b.viewpoint=d;b.size=[k.Utils.C_HITTEST_SEARCH_SIZE,k.Utils.C_HITTEST_SEARCH_SIZE];this._updateTilesTransform(b,f);return e.hitTest({globalOpacity:1,painter:e,context:c,drawPhase:m.HITTEST,pixelRatio:a.pixelRatio,displayLevel:a.displayLevel,rendererInfo:this._rendererInfo,requiredLevel:f,state:b,
stationary:a.stationary,attributeView:this.attributeView},this.children)};c.prototype._updateTilesTransform=function(a,b){b=0;for(var d=this.children;b<d.length;b++){var c=d[b],e=this.tileInfoView.tileInfo.lods[c.key.level].resolution;c.setTransform(a,e/(a.resolution*a.pixelRatio));c.setLabelTransform(a,e)}};c.prototype._buildHLList=function(){return t(this,void 0,void 0,function(){var a,b,d,c;return r(this,function(e){switch(e.label){case 0:return[4,this._layerView.getLocalIdsToHighlight()];case 1:a=
e.sent();b=0;for(d=this.children;b<d.length;b++)c=d[b],c.buildHLList(a);return[2]}})})};return c}(k.Container);p.WGLFeatureView=n});