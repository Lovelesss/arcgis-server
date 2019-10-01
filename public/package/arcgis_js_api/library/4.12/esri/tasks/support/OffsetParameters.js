// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../../core/Accessor","../../core/jsonMap","../../geometry/support/jsonUtils"],function(c,b,d){var e=new b.JSONMap({esriGeometryOffsetBevelled:"bevelled",esriGeometryOffsetMitered:"mitered",esriGeometryOffsetRounded:"rounded"}),f=new b.JSONMap({9001:"meters",9002:"feet",9036:"kilometers",9093:"miles",109012:"nautical-miles",109001:"yards"});return c.createSubclass({declaredClass:"esri.tasks.support.OffsetParameters",properties:{bevelRatio:null,geometries:null,offsetDistance:null,offsetHow:null,
offsetUnit:null},toJSON:function(){var a={};if(this.geometries&&0<this.geometries.length){var b=this.geometries.map(function(a){return a.toJSON()});a.geometries=JSON.stringify({geometryType:d.getJsonType(this.geometries[0]),geometries:b});a.sr=JSON.stringify(this.geometries[0].spatialReference.toJSON())}this.bevelRatio&&(a.bevelRatio=this.bevelRatio);this.offsetDistance&&(a.offsetDistance=this.offsetDistance);this.offsetHow&&(a.offsetHow=e.toJSON(this.offsetHow));this.offsetUnit&&(a.offsetUnit=f.toJSON(this.offsetUnit));
return a}})});