// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/declareExtendsHelper ../../../core/tsSupport/decorateHelper ../../../core/accessorSupport/decorators ./I3SMeshView3D ./LayerView3D ./support/layerViewUpdatingProperties".split(" "),function(k,l,m,e,c,b,f,g,h){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.lodFactor=1;a._elevationContext="im";a._isIntegratedMesh=!0;return a}e(a,d);Object.defineProperty(a.prototype,"progressiveLoadFactor",
{get:function(){return 1<=this.lodFactor?.2:1},enumerable:!0,configurable:!0});a.prototype.initialize=function(){};a.prototype.destroy=function(){};a.prototype._createLayerGraphic=function(a){return null};a.prototype.canResume=function(){return this.inherited(arguments)&&(!this._controller||this._controller.rootNodeVisible)};a.prototype.isUpdating=function(){return!(!this._controller||!this._controller.updating)};c([b.property()],a.prototype,"layer",void 0);c([b.property({dependsOn:["_controller.updating"]})],
a.prototype,"updating",void 0);c([b.property({dependsOn:["_controller.rootNodeVisible"]})],a.prototype,"suspended",void 0);c([b.property(h.updatingPercentage)],a.prototype,"updatingPercentage",void 0);c([b.property({readOnly:!0,aliasOf:"_controller.updatingPercentage"})],a.prototype,"updatingPercentageValue",void 0);c([b.property({readOnly:!0,aliasOf:"view.qualitySettings.sceneService.integratedMesh.lodFactor"})],a.prototype,"lodFactor",void 0);c([b.property({readOnly:!0,dependsOn:["lodFactor"]})],
a.prototype,"progressiveLoadFactor",null);return a=c([b.subclass("esri.views.3d.layers.SceneLayerView3D")],a)}(b.declared(g,f.I3SMeshView3D))});