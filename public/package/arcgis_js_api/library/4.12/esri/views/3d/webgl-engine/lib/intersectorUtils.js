// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../Graphic ../../../../core/maybe ../../../../core/libs/gl-matrix-2/mat3 ../../../../core/libs/gl-matrix-2/mat3f64 ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4 ../../../../core/libs/gl-matrix-2/vec4f64 ../../support/geometryUtils ../../support/geometryUtils/boundedPlane ./Object3D".split(" "),function(g,e,x,f,y,
z,h,k,d,q,A,B,p,C,D){function u(b,a){return f.isNone(b)||null==b.layerUid?null:f.isSome(a.graphicsView)&&b.layerUid===a.graphicsView.mockLayerId?a.graphics:a.map.findLayerByUid(b.layerUid)}function v(b,a,l){if(f.isNone(b))return null;var c=u(b,a);return f.isNone(c)?null:c===a.graphics?f.isSome(a.graphicsView)?f.expect(a.graphicsView.getGraphicFromGraphicUid(b.graphicUid)):null:(a=a.allLayerViews.find(function(a){return a.layer===c}))?E(a,b,l):null}function E(b,a,l){return!b||b.suspended?null:f.isSome(l)&&
"getGraphicFromStageObject"in b?b.getGraphicFromStageObject(l.obj,l.triangleNr):"getGraphicFromGraphicUid"in b&&null!=a.graphicUid?b.getGraphicFromGraphicUid(a.graphicUid):null}Object.defineProperty(e,"__esModule",{value:!0});e.sliceFilterPredicate=function(b){return function(a,l,c){d.vec3.lerp(w,a,l,c);return!C.extrusionContainsPoint(b,w)}};g=function(){return function(){this.selectOpaqueTerrainOnly=this.hud=!0;this.invisibleTerrain=!1;this.storeAll=this.storeTerrainResults=this.backfacesTerrain=
!0}}();e.EnableIntersectorOptions=g;g=function(){function b(){this._transform=k.mat4f64.create();this._transformInverse=new r({value:this._transform},h.mat4.invert,k.mat4f64.create);this._transformInverseTranspose=new r(this._transformInverse,h.mat4.transpose,k.mat4f64.create);this._transformTranspose=new r({value:this._transform},h.mat4.transpose,k.mat4f64.create);this._transformInverseRotation=new r({value:this._transform},y.mat3.normalFromMat4Legacy,z.mat3f64.create)}b.prototype.invalidateLazyTransforms=
function(){this._transformInverse.invalidate();this._transformInverseTranspose.invalidate();this._transformTranspose.invalidate();this._transformInverseRotation.invalidate()};Object.defineProperty(b.prototype,"transform",{get:function(){return this._transform},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"inverse",{get:function(){return this._transformInverse.value},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"inverseTranspose",{get:function(){return this._transformInverseTranspose.value},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"inverseRotation",{get:function(){return this._transformInverseRotation.value},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"transpose",{get:function(){return this._transformTranspose.value},enumerable:!0,configurable:!0});b.prototype.setTransformMatrix=function(a){h.mat4.copy(this._transform,a)};b.prototype.multiplyTransform=function(a){h.mat4.multiply(this._transform,this._transform,a)};b.prototype.set=function(a){h.mat4.copy(this._transform,
a);this.invalidateLazyTransforms()};b.prototype.setAndInvalidateLazyTransforms=function(a,b){this.setTransformMatrix(a);this.multiplyTransform(b);this.invalidateLazyTransforms()};return b}();e.IntersectorTransform=g;var r=function(){function b(a,b,c){this.original=a;this.update=b;this.dirty=!0;this.transform=c()}b.prototype.invalidate=function(){this.dirty=!0};Object.defineProperty(b.prototype,"value",{get:function(){this.dirty&&(this.update(this.transform,this.original.value),this.dirty=!1);return this.transform},
enumerable:!0,configurable:!0});return b}();g=function(){function b(){this.min=new m;this.max=new m;this.hud=new m;this.terrain=new m}b.prototype.init=function(a){this.min.init(a);this.max.init(a);this.hud.init(a);this.terrain.init(a);this.all=[]};return b}();e.IntersectorResults=g;var m=function(){function b(a){this.normal=q.vec3f64.create();this.transformation=k.mat4f64.create();this._ray=p.ray.create();this.init(a)}Object.defineProperty(b.prototype,"ray",{get:function(){return this._ray},enumerable:!0,
configurable:!0});Object.defineProperty(b.prototype,"hasIntersectionPoint",{get:function(){return null!=this.dist},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"distanceInRenderSpace",{get:function(){if(null!=this.dist)return d.vec3.scale(t,this.ray.direction,this.dist),d.vec3.length(t)},enumerable:!0,configurable:!0});b.prototype.getIntersectionPoint=function(a){if(!this.hasIntersectionPoint)return!1;d.vec3.scale(t,this.ray.direction,this.dist);d.vec3.add(a,this.ray.origin,t);
return!0};b.prototype.getTransformedNormal=function(a){d.vec3.copy(n,this.normal);n[3]=0;A.vec4.transformMat4(n,n,this.transformation);d.vec3.copy(a,n);d.vec3.normalize(a,a);return a};b.prototype.set=function(a,b,c,e,f,g,k,m,n,p){a instanceof D&&(a={type:"stage",obj:a});this.dist=c;d.vec3.copy(this.normal,e);h.mat4.copy(this.transformation,f);this.target=a;this.name=b;this.drapedLayerOrder=g;this.center=k?q.vec3f64.clone(k):null;this.geometryId=m;this.triangleNr=n;this.drapedLayerGraphicOrder=p};
b.prototype.copyFrom=function(a){p.ray.copy(a._ray,this._ray);this.dist=a.dist;this.target=a.target;this.name=a.name;this.drapedLayerOrder=a.drapedLayerOrder;this.center=a.center?q.vec3f64.clone(a.center):null;this.geometryId=a.geometryId;this.triangleNr=a.triangleNr;this.intersector=a.intersector;this.drapedLayerGraphicOrder=a.drapedLayerGraphicOrder;d.vec3.copy(this.normal,a.normal);h.mat4.copy(this.transformation,a.transformation)};b.prototype.init=function(a){this.drapedLayerGraphicOrder=this.drapedLayerOrder=
this.name=this.target=this.dist=void 0;this.triangleNr=this.geometryId=this.center=null;this.intersector="Stage";a?p.ray.copy(a,this._ray):this._ray=p.ray.create()};b.prototype.toOwner=function(a){if(!this.target)return null;switch(this.target.type){case "stage":var b=this.target.obj.getMetadata();return u(b,a);case "external":switch(this.intersector){case "PointRenderer":return b=this.target.metadata.layerUid,null!=b?a.map.findLayerByUid(b):null;case "LodRenderer":case "DrapedRenderer":return u(this.target.metadata,
a);case "TerrainRenderer":return a.map&&a.map.ground}}return null};b.prototype.toGraphic=function(a){if(!this.target)return null;switch(this.target.type){case "stage":var b=this.target.obj,c=this.triangleNr,d=b.getMetadata();return v(d,a,{obj:b,triangleNr:c});case "external":switch(this.intersector){case "PointRenderer":return c=this.target,b=a.computeMapPointFromVec3d(c.point),b=new x(b),c=c.metadata.layerUid,null!=c&&(a=a.map.findLayerByUid(c),b.layer=a,b.sourceLayer=a),b;case "LodRenderer":case "DrapedRenderer":return v(this.target.metadata,
a,null)}}return null};return b}();e.IntersectorResult=m;e.TERRAIN_ID="terrain";var w=q.vec3f64.create(),t=q.vec3f64.create(),n=B.vec4f64.create()});