// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../layers/support/fieldUtils"],function(e,a,b){Object.defineProperty(a,"__esModule",{value:!0});a.defineFieldProperties=function(){return{requiredFields:{type:[String],readOnly:!0},availableFields:{type:[String],readOnly:!0,dependsOn:["layer.fields","layer.outFields","requiredFields"],get:function(){var a=this.layer,c=this.layer.fields,d=this.requiredFields;return a.outFields?b.fixFields(c,b.unpackFieldNames(c,a.outFields).concat(d)):b.fixFields(c,d)}}}}});