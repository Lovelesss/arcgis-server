// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/tsSupport/assignHelper ../../../core/Error ../../../core/accessorSupport/decorators ./LayerView3D ./support/layerViewUpdatingProperties ../terrain/terrainUtils".split(" "),function(m,n,h,d,p,e,c,k,g,l){return function(f){function a(){var b=null!==f&&f.apply(this,arguments)||this;b._isUpdating=!1;return b}h(a,f);Object.defineProperty(a.prototype,"imageFormatIsOpaque",{get:function(){return!1},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"isOpaque",{get:function(){return 1<=this.fullOpacity&&this.imageFormatIsOpaque},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"dataLevelRange",{get:function(){var b=this.tileInfo.lods;return this.levelRangeFromScaleRange(b[0].scale,b[b.length-1].scale)},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"displayLevelRange",{get:function(){var b=this.tileInfo.lods,b=this.levelRangeFromScaleRange(this.layer.minScale||
b[0].scale,this.layer.maxScale||b[b.length-1].scale);this.layer.maxScale&&b.maxLevel++;return b},enumerable:!0,configurable:!0});a.prototype.getTileUrl=function(b,a,c){return this.layer.getTileUrl(b,a,c)};a.prototype.updatingChanged=function(b){this._isUpdating=b;this.notifyChange("updating")};a.prototype.isUpdating=function(){return this._isUpdating};a.prototype._getTileInfoSupportError=function(b,a){if(b=l.checkIfTileInfoSupportedForView(b,a,this.view.spatialReference,this.view.basemapTerrain.manifold)){a=
{layer:this.layer,error:b};var c=void 0;switch(b.name){case "tilingscheme:local-gcs-not-supported":c=new e("layerview:local-gcs-not-supported","Geographic coordinate systems are not supported in local scenes",a);break;case "tilingscheme:spatial-reference-mismatch":case "tilingscheme:global-unsupported-spatial-reference":c=new e("layerview:spatial-reference-incompatible","The spatial reference of this layer does not meet the requirements of the view",a);break;default:c=new e("layerview:tiling-scheme-unsupported",
"The tiling scheme of this layer is not supported by SceneView",a)}return c}return null};a.prototype._getTileInfoCompatibilityError=function(a,c){return c.compatibleWith(a)?null:new e("layerview:tiling-scheme-incompatible","The tiling scheme of this layer is incompatible with the tiling scheme of the surface")};a.prototype.levelRangeFromScaleRange=function(a,c){var b={minLevel:0,maxLevel:Infinity},d=this.view.basemapTerrain&&this.view.basemapTerrain.tilingScheme;if(!d)return b;var e=d.levels[0],d=
function(a){a=Math.log(e.scale/a)/Math.LN2;return 1E-9>.5-Math.abs(.5-a%1)?Math.round(a):Math.ceil(a)};null!=a&&0<a&&(b.minLevel=Math.max(0,d(a)));null!=c&&0<c&&(b.maxLevel=Math.max(0,d(c)));return b};d([c.property({readOnly:!0})],a.prototype,"imageFormatIsOpaque",null);d([c.property(g.updatingPercentage)],a.prototype,"updatingPercentage",void 0);d([c.property(g.updatingPercentageValue)],a.prototype,"updatingPercentageValue",void 0);d([c.property({readOnly:!0})],a.prototype,"fullExtent",void 0);d([c.property({readOnly:!0,
dependsOn:["fullOpacity","imageFormatIsOpaque"]})],a.prototype,"isOpaque",null);d([c.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme"]})],a.prototype,"dataLevelRange",null);d([c.property({readOnly:!0,dependsOn:["tileInfo","view.basemapTerrain.tilingScheme","layer.minScale","layer.maxScale"]})],a.prototype,"displayLevelRange",null);d([c.property()],a.prototype,"layer",void 0);d([c.property({readOnly:!0})],a.prototype,"tileInfo",void 0);return a=d([c.subclass("esri.views.3d.layers.TiledLayerView3D")],
a)}(c.declared(k))});