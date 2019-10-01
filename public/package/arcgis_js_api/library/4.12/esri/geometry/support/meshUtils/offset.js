// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/libs/gl-matrix-2/mat3 ../../../core/libs/gl-matrix-2/mat3f64 ../../../core/libs/gl-matrix-2/mat4f64 ../../../core/libs/gl-matrix-2/vec3 ../../../core/libs/gl-matrix-2/vec3f64 ./projection ../../../views/3d/support/projectionUtils".split(" "),function(A,h,u,v,w,x,y,d,l){function m(b,d){if(b)for(var c=0;c<b.length;c+=3)for(var a=0;3>a;a++)b[c+a]+=d[a]}Object.defineProperty(h,"__esModule",{value:!0});h.offset=function(b,h,c){if(b.vertexAttributes&&b.vertexAttributes.position){var a=
b.spatialReference;if(a.isWGS84||a.isWebMercator&&(!c||!1!==c.geographic)){c=b.spatialReference;var a=b.vertexAttributes.position,f=b.vertexAttributes.normal,g=b.vertexAttributes.tangent,e=new Float64Array(a.length),n=new Float32Array(f?f.length:0),p=new Float32Array(g?g.length:0),k=b.extent.center,q=z;l.computeLinearTransformation(c,[k.x,k.y,k.z],r,l.SphericalECEFSpatialReference);u.mat3.fromMat4(t,r);x.vec3.transformMat3(q,h,t);d.projectToECEF(a,c,e);f&&d.projectNormalToECEF(f,a,e,c,n);g&&d.projectTangentToECEF(g,
a,e,c,p);m(e,q);d.projectFromECEF(e,a,c);f&&d.projectNormalFromECEF(n,a,e,c,f);g&&d.projectTangentFromECEF(p,a,e,c,g)}else m(b.vertexAttributes.position,h);b.clearCache()}};var z=y.vec3f64.create(),r=w.mat4f64.create(),t=v.mat3f64.create()});