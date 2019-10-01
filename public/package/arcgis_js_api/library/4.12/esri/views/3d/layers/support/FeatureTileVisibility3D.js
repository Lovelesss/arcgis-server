// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/ObjectPool ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ./FeatureTileDescriptor3D ../../state/Frustum ../../support/FrustumExtentIntersection ../../support/geometryUtils ../../support/mathUtils".split(" "),function(m,n,r,g,t,l,h,u,p,v){Object.defineProperty(n,"__esModule",{value:!0});m=function(){function b(a){this.surfaceElevation=0;this.cache=new Map;a=a.renderCoordsHelper;this.frustum=new h.Frustum({renderCoordsHelper:a});
this.extendedFrustum=new h.Frustum({renderCoordsHelper:a});this.intersector=new u.FrustumExtentIntersection({renderCoordsHelper:a});this.renderCoordsHelper=a}b.prototype.begin=function(a,d){this.surfaceElevation=d;this.aboveGround=this.renderCoordsHelper.getAltitude(a.eye)>d;this.frustum.update(a);this.shortenFrustumFarPlane(this.frustum);this.updateExtendedFrustum(a,d)};b.prototype.end=function(){this.cache.clear()};b.prototype.calculate=function(a){if(this.allTilesInvisible)return 0;var d="global"===
this.renderCoordsHelper.type&&a.lij[0]>=w&&a.lij[0]<x,c=this.getOrCalculateSingleTileVisibility(a,!d);return 0!==c&&d?this.calculateAggregatedChildrenVisibility(a):c};b.prototype.shortenFrustumFarPlane=function(a){for(var d=a.mutablePoints,c=0,b=h.Frustum.nearFarLineIndices;c<b.length;c++){var f=b[c],k=f[1],f=d[f[0]];g.vec3.subtract(e,d[k],f);g.vec3.scale(e,e,y);g.vec3.add(d[k],f,e)}a.updatePoints(d)};b.prototype.calculateAggregatedChildrenVisibility=function(a){var d=0,c=this.cache.get(a.id);if(null!=
c)return c;c=q.acquire();a.getChildren(c);for(var b=0;b<c.length;b++){var e=this.calculate(c[b]);if(0!==e&&(d=e,2===e))break}q.release(c);this.cache.set(a.id,d);return d};b.prototype.getOrCalculateSingleTileVisibility=function(a,b){var c=this.cache.get(a.id);if(null!=c)return c;c=this.calculateSingleTileVisibility(a);b&&this.cache.set(a.id,c);return c};b.prototype.calculateSingleTileVisibility=function(a){if(!this.aboveGround&&"global"===this.renderCoordsHelper.type&&a.lij[0]<z){if(0===this.calculateSingleTileVisibilitySided(a,
!1))return this.calculateSingleTileVisibilitySided(a,!0)}else return this.calculateSingleTileVisibilitySided(a,this.aboveGround)};b.prototype.calculateSingleTileVisibilitySided=function(a,b){this.intersector.update(a.extent,a.tilingScheme.spatialReference,this.surfaceElevation,b);return this.intersector.isVisibleInFrustum(this.extendedFrustum)?this.intersector.isVisibleInFrustum(this.frustum,!0)?2:1:0};b.prototype.updateExtendedFrustum=function(a,b){var c=this.renderCoordsHelper;this.extendedFrustum.update(a);
this.shortenFrustumFarPlane(this.extendedFrustum);var d=this.renderCoordsHelper.worldUpAtPosition(a.eye,e);this.aboveGround||g.vec3.negate(d,d);d=v.acos(-g.vec3.dot(d,a.viewForward));this.allTilesInvisible=d>(Math.PI+a.fovY)/2;if(!this.allTilesInvisible&&(this.hasExtendedFrustum=d>a.fovY/2)){a=this.extendedFrustumParameters(b);b=this.extendedFrustum.mutablePoints;for(d=0;4>d;d++){var f=a.pointIndices[d],k=b[f],h=c.getAltitude(k);if(a.needsAltitudeAdjustment(h)){this.renderCoordsHelper.worldUpAtPosition(k,
e);switch(f){case 4:case 7:case 0:case 3:p.plane.projectVector(this.extendedFrustum.planes[0],e,e);break;case 5:case 6:case 1:case 2:p.plane.projectVector(this.extendedFrustum.planes[1],e,e)}g.vec3.scale(e,e,a.direction);this.renderCoordsHelper.intersectInfiniteManifold(p.ray.wrap(k,e),a.zWithMargin,k)}}this.extendedFrustum.updatePoints(b);0>g.vec3.dot(this.extendedFrustum.planes[4],this.frustum.planes[4])&&(c=this.extendedFrustum.mutablePoints,this.aboveGround?(a=[c[1],c[0]],c[0]=a[0],c[1]=a[1]):
(a=[c[2],c[3]],c[3]=a[0],c[2]=a[1]),this.extendedFrustum.updatePoints(c))}};b.prototype.extendedFrustumParameters=function(a){return this.aboveGround?this.extendedFrustumParametersAboveSurface(a,1):this.extendedFrustumParametersBelowSurface(a,1)};b.prototype.extendedFrustumParametersAboveSurface=function(a,b){var c=a-b;return{zWithMargin:c,pointIndices:h.Frustum.planePointIndices.bottom,direction:-1,needsAltitudeAdjustment:function(a){return a>c}}};b.prototype.extendedFrustumParametersBelowSurface=
function(a,b){var c=a+b;return{zWithMargin:c,pointIndices:h.Frustum.planePointIndices.top,direction:1,needsAltitudeAdjustment:function(a){return a<c}}};return b}();n.FeatureTileVisibility3D=m;var w=2,x=6,z=12,y=.95,e=t.vec3f64.create(),q=new r(Array,function(b){4!==b.length&&(b[0]=new l.FeatureTileDescriptor3D,b[1]=new l.FeatureTileDescriptor3D,b[2]=new l.FeatureTileDescriptor3D,b[3]=new l.FeatureTileDescriptor3D)},function(b){b[0].release();b[1].release();b[2].release();b[3].release()});n.default=
m});