// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/accessorSupport/decorators ../../../../../renderers/support/heatmapUtils ./BaseProcessor".split(" "),function(g,h,k,e,l,m,d,n,p){Object.defineProperty(h,"__esModule",{value:!0});g=function(f){function a(){var c=null!==f&&f.apply(this,arguments)||this;c.type="heatmap";c.updating=
!1;return c}k(a,f);a.prototype.update=function(c){return m(this,void 0,void 0,function(){return l(this,function(b){this._set("config",c);return[2]})})};a.prototype.onTileData=function(c,b,a){return b&&b.addOrUpdate&&0<b.addOrUpdate.length?(b=n.calculateHeatmapIntensityInfo(b.addOrUpdate,this.config.renderer,512,512),this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c.key.id,intensityInfo:b},{transferList:[b.matrix]})):this.remoteClient.invoke("tileRenderer.onTileData",{tileKey:c.key.id,
intensityInfo:null},a)};a.prototype.onTileError=function(a,b,d){return this.remoteClient.invoke("tileRenderer.onTileError",{tileKey:a.id,error:b},d)};e([d.property()],a.prototype,"config",void 0);e([d.property()],a.prototype,"updating",void 0);return a=e([d.subclass("esri.views.2d.layers.features.processors.HeatmapProcessor")],a)}(d.declared(p.default));h.default=g});