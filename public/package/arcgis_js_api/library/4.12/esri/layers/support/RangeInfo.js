// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(b,e,f,d,g,c){Object.defineProperty(e,"__esModule",{value:!0});b=function(b){function a(){var a=null!==b&&b.apply(this,arguments)||this;a.name=null;a.field=null;a.currentRangeExtent=null;a.fullRangeExtent=null;a.type="rangeInfo";return a}f(a,b);d([c.property({type:String,json:{read:!0,write:!0}})],a.prototype,"name",
void 0);d([c.property({type:String,json:{read:!0,write:!0}})],a.prototype,"field",void 0);d([c.property({type:[Number],json:{read:!0,write:!0}})],a.prototype,"currentRangeExtent",void 0);d([c.property({type:[Number],json:{read:!0,write:!0}})],a.prototype,"fullRangeExtent",void 0);d([c.property({type:String,readOnly:!0,json:{read:!1,write:!0}})],a.prototype,"type",void 0);return a=d([c.subclass("esri.layers.support.RangeInfo")],a)}(c.declared(g));e.RangeInfo=b;e.default=b});