// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../symbols","../../core/Error"],function(h,f,b,g){Object.defineProperty(f,"__esModule",{value:!0});f.to3D=function(a,d,e,c){void 0===d&&(d=!1);void 0===e&&(e=!1);void 0===c&&(c=!0);if(!a)return{symbol:null};if(b.isSymbol3D(a)||a instanceof b.WebStyleSymbol)c=a.clone();else if(a instanceof b.SimpleLineSymbol)c=b.LineSymbol3D.fromSimpleLineSymbol(a);else if(a instanceof b.SimpleMarkerSymbol)c=b.PointSymbol3D.fromSimpleMarkerSymbol(a);else if(a instanceof b.PictureMarkerSymbol)c=
b.PointSymbol3D.fromPictureMarkerSymbol(a);else if(a instanceof b.SimpleFillSymbol)c=b.PolygonSymbol3D.fromSimpleFillSymbol(a);else if(a instanceof b.TextSymbol)c=c?b.LabelSymbol3D.fromTextSymbol(a):b.PointSymbol3D.fromTextSymbol(a);else return{error:new g("symbol-conversion:unsupported-2d-symbol","2D symbol of type '"+(a.type||a.declaredClass)+"' is unsupported in 3D",{symbol:a})};d&&(c.id=a.id);if(e&&b.isSymbol3D(c))for(a=0;a<c.symbolLayers.length;++a)c.symbolLayers.getItemAt(a)._ignoreDrivers=
!0;return{symbol:c}}});