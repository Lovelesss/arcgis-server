// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/Handles ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../engine ./LayerView2D ./graphics/GraphicsView2D".split(" "),function(q,r,g,h,k,e,f,l,m,n){return function(d){function b(){var a=null!==d&&d.apply(this,arguments)||this;a._handles=new k;a._popupTemplates=new Map;a.container=new l.Container;a.graphicsViews=[];return a}g(b,d);b.prototype.hitTest=function(a,
b){var c=this;if(this.suspended||!this.graphicsViews.length)return e.resolve();var p=this.graphicsViews.map(function(c){return c.hitTest(a,b)});return e.all(p).then(function(a){return a.filter(function(a,b){a&&(a.popupTemplate=c._popupTemplates.get(c.graphicsViews[b]),a.layer=c.layer,a.sourceLayer=c.layer);return!!a})[0]||null})};b.prototype.update=function(a){if(this.graphicsViews)for(var b=0,c=this.graphicsViews;b<c.length;b++)c[b].update(a)};b.prototype.attach=function(){var a=this;this.layer.featureCollections.forEach(function(b){var c=
new n.default({view:a.view,graphics:b.source});c.renderer=b.renderer;a._popupTemplates.set(c,b.popupTemplate);a.graphicsViews.push(c);a.container.addChild(c.container)})};b.prototype.detach=function(){this.container.removeAllChildren();this.graphicsViews.forEach(function(a){a.destroy();a.view=null;a.renderer=null});this.graphicsViews.length=0;this._handles.removeAll();this._popupTemplates=null};b.prototype.moveStart=function(){this.requestUpdate()};b.prototype.viewChange=function(){this.requestUpdate()};
b.prototype.moveEnd=function(){this.requestUpdate()};return b=h([f.subclass("esri.views.2d.layers.MapNotesLayerView2D")],b)}(f.declared(m))});