// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/jsonMap ../../core/JSONSupport ../../core/accessorSupport/decorators".split(" "),function(k,l,f,c,g,h,b){var d=g.strict()({pointCloudValueFilter:"value",pointCloudBitfieldFilter:"bitfield",pointCloudReturnFilter:"return"});return function(e){function a(a){a=e.call(this)||this;a.field=null;a.type=null;return a}f(a,e);a.prototype.clone=function(){console.warn(".clone() is not implemented for "+
this.declaredClass);return null};c([b.property({type:String,json:{write:{enabled:!0,isRequired:!0}}})],a.prototype,"field",void 0);c([b.property({readOnly:!0,type:d.apiValues,nonNullable:!0,json:{read:!1,write:d.write}})],a.prototype,"type",void 0);return a=c([b.subclass("esri.layers.pointCloudFilters.PointCloudFilter")],a)}(b.declared(h))});