// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/tsSupport/assignHelper","../../core/Error","../../core/has"],function(g,d,e,a,b){Object.defineProperty(d,"__esModule",{value:!0});var f={supportsMajorWebPerformanceCaveat:!1};d.check=function(c){c=e({},f,c);return b("esri-webgl")?!c.supportsMajorWebPerformanceCaveat&&b("esri-webgl-major-performance-caveat")?new a("webgl:major-performance-caveat-detected","Your WebGL implementation doesn't seem to support hardware accelerated rendering. Check your browser settings or if your GPU is blacklisted."):
b("esri-webgl-high-precision-fragment")?b("esri-webgl-vertex-shader-samplers")?b("esri-webgl-element-index-uint")?b("esri-webgl-standard-derivatives")?b("esri-webgl-instanced-arrays")?null:new a("webgl:instanced-arrays-required","WebGL support for instanced rendering is required but not supported."):new a("webgl:standard-derivatives-required","WebGL support for standard derivatives is required but not supported."):new a("webgl:element-index-uint-required","WebGL support for uint vertex indices is required but not supported."):
new a("webgl:vertex-shader-samplers-required","WebGL support for vertex shader samplers is required but not supported."):new a("webgl:high-precision-fragment-required","WebGL support for high precision fragment shaders is required but not supported."):new a("webgl:required","WebGL is required but not supported.")}});