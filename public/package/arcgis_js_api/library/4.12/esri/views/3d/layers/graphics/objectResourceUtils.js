// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/tsSupport/assignHelper ../../../../core/mathUtils ../../../../core/maybe ../../../../core/string ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../geometry/support/aaBoundingBox ../../glTF/DefaultLoadingContext ../../glTF/esriProvidedModelParameters ../../glTF/loader ../../glTF/internal/indexUtils ./wosrLoader ../../support/buffer/BufferView ../../support/buffer/math ../../support/buffer/utils ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/GeometryData ../../webgl-engine/lib/Texture ../../webgl-engine/materials/DefaultMaterial".split(" "),
function(ca,F,da,O,P,x,Q,f,R,C,L,u,D,I,S,G,T,J,U,p,q,v,V,W,E,M){function N(b){var e=b.match(/(.*\.(gltf|glb))(\?lod=([0-9]+))?$/);return e?{fileType:"gltf",url:e[1],specifiedLodIndex:null!=e[4]?Number(e[4]):null}:b.match(/(.*\.(json|json\.gz))$/)?{fileType:"wosr",url:b,specifiedLodIndex:null}:{fileType:"unknown",url:b,specifiedLodIndex:null}}function H(b,e,d){var n=b.model,w=L.mat4f64.create(),h=[],K=new Map,g=new Map;n.lods.forEach(function(A,l){if(void 0===d||l===d){var B=0,t={stageResources:{textures:[],
materials:[],geometries:[]},lodThreshold:f.isSome(A.lodThreshold)?A.lodThreshold:null,pivotOffset:[0,0,0],numberOfVertices:0,boundingBox:I.empty()};h.push(t);A.parts.forEach(function(c){var d=c.material+(c.attributes.normal?"_normal":"")+(c.attributes.color?"_color":"")+(c.attributes.texCoord0?"_texCoord0":"")+(c.attributes.tangent?"_tangent":""),a=n.materials.get(c.material),h=f.isSome(c.attributes.texCoord0),l=f.isSome(c.attributes.normal);if(!K.has(d)){if(h){if(f.isSome(a.textureColor)&&!g.has(a.textureColor)){var k=
n.textures.get(a.textureColor),r=x({},k.parameters,{preMultiplyAlpha:!0});g.set(a.textureColor,new E(k.data,a.textureColor,r))}f.isSome(a.textureNormal)&&!g.has(a.textureNormal)&&(k=n.textures.get(a.textureNormal),r=x({},k.parameters,{preMultiplyAlpha:!0}),g.set(a.textureNormal,new E(k.data,a.textureNormal,r)));f.isSome(a.textureOcclusion)&&!g.has(a.textureOcclusion)&&(k=n.textures.get(a.textureOcclusion),r=x({},k.parameters,{preMultiplyAlpha:!0}),g.set(a.textureOcclusion,new E(k.data,a.textureOcclusion,
r)));f.isSome(a.textureEmissive)&&!g.has(a.textureEmissive)&&(k=n.textures.get(a.textureEmissive),r=x({},k.parameters,{preMultiplyAlpha:!0}),g.set(a.textureEmissive,new E(k.data,a.textureEmissive,r)));f.isSome(a.textureMetallicRoughness)&&!g.has(a.textureMetallicRoughness)&&(k=n.textures.get(a.textureMetallicRoughness),r=x({},k.parameters,{preMultiplyAlpha:!0}),g.set(a.textureMetallicRoughness,new E(k.data,a.textureMetallicRoughness,r)))}var z=M.COLOR_GAMMA,k=Math.pow(a.color[0],1/z),r=Math.pow(a.color[1],
1/z),y=Math.pow(a.color[2],1/z),m=Math.pow(a.emissiveFactor[0],1/z),u=Math.pow(a.emissiveFactor[1],1/z),z=Math.pow(a.emissiveFactor[2],1/z);K.set(d,new M(x({transparent:"BLEND"===a.alphaMode,textureAlphaMode:X(a.alphaMode),textureAlphaCutoff:a.alphaCutoff,diffuse:[k,r,y],ambient:[k,r,y],opacity:a.opacity,doubleSided:a.doubleSided,doubleSidedType:"winding-order",vertexColors:!!c.attributes.color,vertexTangents:!!c.attributes.tangent,normals:l?"default":"screenDerivative",castShadows:!0,receiveSSAO:!0,
textureId:f.isSome(a.textureColor)&&h?g.get(a.textureColor).id:void 0,colorMixMode:a.colorMixMode,normalTextureId:f.isSome(a.textureNormal)&&h?g.get(a.textureNormal).id:void 0,textureAlphaPremultiplied:!0,occlusionTextureId:f.isSome(a.textureOcclusion)&&h?g.get(a.textureOcclusion).id:void 0,emissiveTextureId:f.isSome(a.textureEmissive)&&h?g.get(a.textureEmissive).id:void 0,metallicRoughnessTextureId:f.isSome(a.textureMetallicRoughness)&&h?g.get(a.textureMetallicRoughness).id:void 0,emissiveFactor:[m,
u,z],metallicFactor:a.metallicFactor,roughnessFactor:a.roughnessFactor,usePBR:!b.meta.isEsriSymbolResource},e),d))}a:{l=c.indices||c.attributes.position.count;switch(c.primitiveType){case 4:k=J.trianglesToTriangles(l);break a;case 5:k=J.triangleStripToTriangles(l);break a;case 6:k=J.triangleFanToTriangles(l);break a}k=void 0}r={};y={};l=c.attributes.position.count;m=v.createBuffer(p.BufferViewVec3f,l);q.vec3.transformMat4(m,c.attributes.position,c.transform);y.position={data:m.typedBuffer,size:m.elementCount};
r.position=k;f.isSome(c.attributes.normal)&&(m=v.createBuffer(p.BufferViewVec3f,l),C.mat4.invert(w,c.transform),C.mat4.transpose(w,w),q.vec3.transformMat4(m,c.attributes.normal,w),y.normal={data:m.typedBuffer,size:m.elementCount},r.normal=k);f.isSome(c.attributes.tangent)&&(m=v.createBuffer(p.BufferViewVec4f,l),C.mat4.invert(w,c.transform),C.mat4.transpose(w,w),q.vec4.transformMat4(m,c.attributes.tangent,w),y.aTangent={data:m.typedBuffer,size:m.elementCount},r.aTangent=k);f.isSome(c.attributes.texCoord0)&&
(m=v.createBuffer(p.BufferViewVec2f,l),v.vec2.normalizeIntegerBuffer(m,c.attributes.texCoord0),y.uv0={data:m.typedBuffer,size:m.elementCount},r.uv0=k);f.isSome(c.attributes.color)&&(m=v.createBuffer(p.BufferViewVec4u8,l),4===c.attributes.color.elementCount?c.attributes.color instanceof p.BufferViewVec4f?q.vec4.scale(m,c.attributes.color,255):c.attributes.color instanceof p.BufferViewVec4u8?v.vec4.copy(m,c.attributes.color):c.attributes.color instanceof p.BufferViewVec4u16&&q.vec4.scale(m,c.attributes.color,
1/256):(v.vec4.fill(m,255,255,255,255),u=new p.BufferViewVec3u8(m.buffer,0,4),c.attributes.color instanceof p.BufferViewVec3f?q.vec3.scale(u,c.attributes.color,255):c.attributes.color instanceof p.BufferViewVec3u8?v.vec3.copy(u,c.attributes.color):c.attributes.color instanceof p.BufferViewVec3u16&&q.vec3.scale(u,c.attributes.color,1/256)),y.color={data:m.typedBuffer,size:m.elementCount},r.color=k);c=new V(new W(y,r),"gltf_"+A.name+"_"+B++);t.stageResources.geometries.push(c);t.stageResources.materials.push(K.get(d));
h&&(f.isSome(a.textureColor)&&t.stageResources.textures.push(g.get(a.textureColor)),f.isSome(a.textureNormal)&&t.stageResources.textures.push(g.get(a.textureNormal)),f.isSome(a.textureOcclusion)&&t.stageResources.textures.push(g.get(a.textureOcclusion)),f.isSome(a.textureEmissive)&&t.stageResources.textures.push(g.get(a.textureEmissive)),f.isSome(a.textureMetallicRoughness)&&t.stageResources.textures.push(g.get(a.textureMetallicRoughness)));t.numberOfVertices+=l;d=c.boundingInfo;I.expand(t.boundingBox,
d.getBBMin());I.expand(t.boundingBox,d.getBBMax())})}});return h}function X(b){switch(b){case "BLEND":return"blend";case "MASK":return"mask";case "OPAQUE":return"opaque";default:return"blend"}}function Y(b,e){void 0===b&&(b="");void 0===e&&(e="");var d=R.endsWith(b,"Imposter");b=b.split("__")[0];if(-1!==e.indexOf("/RealisticTrees/")&&(e=G.treeParamsTable[b]))return{crownCenter:e.center,crownDimensions:e.radius,imposter:d}}function Z(b){b.meta.isEsriSymbolResource&&b.model.lods.forEach(function(e){var d=
Y(e.name,b.meta.uri);d&&(b.customMeta.esriTreeRendering=!0,e.parts.forEach(function(b){var e=b.attributes.normal,h=b.attributes.position,n=h.count;if(!f.isNone(e)){for(var g=D.vec3f64.create(),A=D.vec3f64.create(),l=D.vec3f64.create(),B=v.createBuffer(p.BufferViewVec4u8,n),t=v.createBuffer(p.BufferViewVec3f,n),c=C.mat4.invert(L.mat4f64.create(),b.transform),x=u.vec3.transformMat4(D.vec3f64.create(),d.crownCenter,c),c=u.vec3.transformMat4(D.vec3f64.create(),d.crownDimensions,c),a=0;a<n;a++){h.getVec(a,
A);e.getVec(a,g);u.vec3.subtract(l,A,x);u.vec3.divide(l,l,c);var q=Q.clamp(u.vec3.length(l),0,1),q=.6+.4*q*q;u.vec3.lerp(l,l,g,.2);t.setVec(a,l);B.set(a,0,255*q);B.set(a,1,255*q);B.set(a,2,255*q);B.set(a,3,255)}b.attributes.normal=t;b.attributes.color=B}}))})}function aa(b){var e=b.model.lods.length;b.meta.isEsriSymbolResource&&b.model.lods.forEach(function(b){if(!f.isSome(b.lodThreshold)){var d=(b.name||"").replace("Imposter","Realistic_LOD0").split("_LOD")[0],w=b.parts.reduce(function(b,d){return b+
d.attributes.position.count},0);b.lodThreshold=ba(d,w,e)}})}function ba(b,e,d){void 0===b&&(b="");if(1===d)return null;if(b in G.lodThresholdLUT){d=G.lodThresholdLUT[b].vertexCounts;b=G.lodThresholdLUT[b].thresholds;var n=d.length;if(1>=n)return null;if(e<=d[0]){var f=(d[1]-d[0])/(b[1]-b[0]);e-=d[0];return Math.max(0,b[0]+e*f)}if(e>=d[n-1])return f=(d[n-1]-d[n-2])/(b[n-1]-b[n-2]),e-=d[n-1],b[n-1]+e*f;for(var h=1;h<d.length;++h){var p=d[h-1],g=d[h],n=b[h-1],f=b[h];if(e<g)return e=(e-p)/(g-p),n*(1-
e)+f*e}}return null}Object.defineProperty(F,"__esModule",{value:!0});F.fetch=function(b,e){void 0===e&&(e={});return P(this,void 0,void 0,function(){var d,f,p,h,q,g,u,l,v,t;return O(this,function(c){switch(c.label){case 0:return d=N(b),"wosr"!==d.fileType?[3,2]:[4,U.load(d.url,e)];case 1:return f=c.sent(),[2,{lods:[f],referenceBoundingBox:f.boundingBox}];case 2:return p=new S.DefaultLoadingContext(e.streamDataRequester),[4,T.load(p,d.url,e)];case 3:h=c.sent();Z(h);aa(h);q=x({},e.materialParamsMixin,
{treeRendering:h.customMeta.esriTreeRendering});if(null!=d.specifiedLodIndex)return g=H(h,q,d.specifiedLodIndex),u=g[0].boundingBox,0!==d.specifiedLodIndex&&(l=H(h,q,d.specifiedLodIndex),u=l[0].boundingBox),[2,{lods:g,referenceBoundingBox:u}];v=H(h,q);t=v[0].boundingBox;return[2,{lods:v,referenceBoundingBox:t}]}})})};F.parseUrl=N;F.gltfToEngineResources=H});