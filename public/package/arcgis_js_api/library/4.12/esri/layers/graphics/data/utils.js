// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper ../../../core/jsonMap ../../../core/maybe ../../../core/promiseUtils ../../../core/unitUtils ../../../geometry/support/extentUtils ../../../geometry/support/jsonUtils ../../../geometry/support/normalizeUtils ../../../geometry/support/spatialReferenceUtils ../centroid ../featureConversionUtils ../OptimizedGeometry ./projectionSupport ./spatialQuerySupport".split(" "),function(M,f,p,k,z,A,B,C,D,E,F,
q,G,e,t,r,H){function x(a,b,d){d&&(b=e.quantizeOptimizedGeometry(u,b,a.hasZ,a.hasM,"esriGeometryPoint",d));return e.convertToPoint(b,a.hasZ,a.hasM)}function v(a,b,d){return k(this,void 0,void 0,function(){var g,h,m,n,c,e;return p(this,function(l){switch(l.label){case 0:if(!a)return[2,null];g=a.where;a.where=g=g&&g.trim();if(!g||/^1 *= *1$/.test(g)||b&&b===g)a.where=null;return a.geometry?[4,I(a)]:[2,a];case 1:return h=l.sent(),a.distance=0,a.units=null,"esriSpatialRelEnvelopeIntersects"===a.spatialRel&&
(m=a.geometry.spatialReference,h=D.getGeometryExtent(h),h.spatialReference=m),a.geometry=h,[4,r.checkProjectionSupport(h.spatialReference,d)];case 2:return l.sent(),[4,F.normalizeCentralMeridian(E.fromJSON(h))];case 3:n=l.sent()[0];if(A.isNone(n))throw f.QUERY_ENGINE_EMPTY_RESULT;c=n.toJSON();return[4,r.project(c,c.spatialReference,d)];case 4:e=l.sent();if(!e)throw f.QUERY_ENGINE_EMPTY_RESULT;e.spatialReference=d;a.geometry=e;return[2,a]}})})}function I(a){return k(this,void 0,void 0,function(){var b,
d,g,h,e,n,c,f,l,k;return p(this,function(m){switch(m.label){case 0:b=a.geometry;d=a.distance;g=a.units;if(null==d)return[2,B.resolve(b)];h=b.spatialReference;e=g&&J.fromJSON(g)||C.getUnitString(h);n=h&&(q.isGeographic(h)||q.isWebMercator(h));if(!n)return[3,1];f=b;return[3,3];case 1:return[4,r.checkProjectionSupport(h,q.WGS84).then(function(){return r.project(b,q.WGS84)})];case 2:f=m.sent(),m.label=3;case 3:return c=f,[4,H.getGeodesicBufferOperator()];case 4:return l=m.sent(),k=l(c,d,e),[2,k?k.toJSON():
null]}})})}Object.defineProperty(f,"__esModule",{value:!0});var J=new z.default({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"});f.QUERY_ENGINE_EMPTY_RESULT=Object.freeze({});var K=new t.default,u=new t.default,w={esriGeometryPoint:e.convertToPoint,esriGeometryPolyline:e.convertToPolyline,esriGeometryPolygon:e.convertToPolygon,esriGeometryMultipoint:e.convertToMultipoint};
f.transformCentroid=x;f.getCentroid=function(a,b,d){if("esriGeometryPolygon"!==a.geometryType||!b||!b.centroid&&!b.geometry)return null;b.centroid||(b.centroid=G.getCentroidOptimizedGeometry(new t.default,b.geometry,a.hasZ,a.hasM));return x(a,b.centroid,d)};f.getGeometry=function(a,b,d,g){b=b?"coords"in b?b:b.geometry:null;return b?d?(d=e.generalizeOptimizedGeometry(K,b,a.hasZ,a.hasM,a.geometryType,d),g&&(d=e.quantizeOptimizedGeometry(u,d,a.hasZ,a.hasM,a.geometryType,g)),w[a.geometryType](d,a.hasZ,
a.hasM)):g?(d=e.quantizeOptimizedGeometry(u,b,a.hasZ,a.hasM,a.geometryType,g),w[a.geometryType](d,a.hasZ,a.hasM)):w[a.geometryType](b,a.hasZ,a.hasM):null};f.normalizeQuery=function(a,b,d){return k(this,void 0,void 0,function(){var g,h,e,f,c;return p(this,function(k){g=a.outFields;h=a.orderByFields;e=a.groupByFieldsForStatistics;f=a.outStatistics;if(g)for(c=0;c<g.length;c++)g[c]=g[c].trim();if(h)for(c=0;c<h.length;c++)h[c]=h[c].trim();if(e)for(c=0;c<e.length;c++)e[c]=e[c].trim();if(f)for(c=0;c<f.length;c++)f[c].onStatisticField&&
(f[c].onStatisticField=f[c].onStatisticField.trim());a.geometry&&!a.outSR&&(a.outSR=a.geometry.spatialReference);return[2,v(a,b,d)]})})};f.normalizeFilter=function(a,b,d){return k(this,void 0,void 0,function(){return p(this,function(e){return[2,v(a,b,d)]})})};f.normalizeQueryLike=v;f.cleanFromGeometryEngine=function(a){return a&&y in a?JSON.parse(JSON.stringify(a,L)):a};var y="_geVersion",L=function(a,b){return a!==y?b:void 0}});