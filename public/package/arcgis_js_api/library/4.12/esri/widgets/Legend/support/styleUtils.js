// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/i18n!../../Legend/nls/Legend","../../../intl"],function(f,b,c,d){Object.defineProperty(b,"__esModule",{value:!0});b.attachToNode=function(a){a.appendChild(this)};b.getTitle=function(a,e){if(a){if("string"===typeof a)return a;if("value"in a||"unit"in a)return d.substitute(c.dotValue,a);var b=null;e?b=a.ratioPercentTotal?"showRatioPercentTotal":a.ratioPercent?"showRatioPercent":a.ratio?"showRatio":a.normField?"showNormField":a.field?"showField":null:e||(b=a.normField?
"showNormField":a.normByPct?"showNormPct":a.field?"showField":null);return b?d.substitute("showField"===b?"{field}":c[b],{field:a.field,normField:a.normField}):null}};b.isRendererTitle=function(a,b){return!b};b.isImageryStretchedLegend=function(a,b){return!!(b&&"Stretched"===b&&10.3<=a.version&&"esri.layers.ImageryLayer"===a.declaredClass)}});