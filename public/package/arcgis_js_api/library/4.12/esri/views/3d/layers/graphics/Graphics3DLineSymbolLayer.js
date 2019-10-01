// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/generatorHelper ../../../../core/tsSupport/awaiterHelper ../../../../core/Error ../../../../core/lang ../../../../core/maybe ../../../../core/screenUtils ../../../../core/libs/gl-matrix-2/mat4 ../../../../core/libs/gl-matrix-2/mat4f64 ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../core/libs/gl-matrix-2/vec4f32 ../../../../geometry/Polygon ../../../../geometry/support/aaBoundingBox ./ElevationAligners ./Graphics3DDrapedGraphicLayer ./Graphics3DObject3DGraphicLayer ./Graphics3DSymbolCommonCode ./Graphics3DSymbolLayer ./lineUtils ../support/FastSymbolUpdates ../../../../views/3d/support/mathUtils ../../webgl-engine/Stage ../../webgl-engine/lib/Geometry ../../webgl-engine/lib/Object3D ../../webgl-engine/lib/RenderGeometry ../../webgl-engine/materials/RibbonLineMaterial ../../webgl-engine/shaders/RibbonLinePrograms".split(" "),
function(q,A,H,I,J,K,L,B,r,C,D,v,y,M,N,E,O,P,Q,t,z,R,F,S,G,T,U,V,W,g){Object.defineProperty(A,"__esModule",{value:!0});q=function(q){function d(b,a,c,e){b=q.call(this,b,a,c,e)||this;b._lineWidthLOD=1;return b}H(d,q);d.prototype.doLoad=function(){return J(this,void 0,void 0,function(){var b,a,c,e;return I(this,function(d){this._vvConvertOptions={modelSize:[1,1,1],symbolSize:[1,1,1],unitInMeters:1,transformation:{anchor:[0,0,0],scale:[1,1,1],rotation:[0,0,0]},supportedTypes:{size:!0,color:!0,opacity:!0,
rotation:!1}};this._fastUpdates=this._context.renderer&&this._context.renderer.visualVariables&&0<this._context.renderer.visualVariables.length?F.initFastSymbolUpdatesState(this._context.renderer,this._vvConvertOptions):{enabled:!1};b=this._getCombinedOpacityAndColor(B.get(this.symbolLayer,"material","color"));a=b[3];c={width:1,color:b,polygonOffset:!0,join:this.symbolLayer.join||"miter",cap:this.symbolLayer.cap||"butt",transparent:1>a||this._isPropertyDriven("opacity"),slicePlaneEnabled:this._context.slicePlaneEnabled};
if(this._isPropertyDriven("size"))this._fastUpdates.enabled&&this._fastUpdates.visualVariables.size&&(c.width=r.pt2px(1));else{e=null!=this.symbolLayer.size?this.symbolLayer.size:r.px2pt(1);if(0>e)throw new K("graphics3dlinesymbollayer:invalid-size","Symbol sizes may not be negative values");c.width=r.pt2px(e);"round"===c.join&&(this._lineWidthLOD=1.863798+-2.0062872/Math.pow(1+e/18.2313,.8856294))}this._fastUpdates&&this._fastUpdates.visualVariables&&L.mixin(c,this._fastUpdates.materialParameters,
{});this._material=new W(c,this._getStageIdHint()+"_ribbonlinemat");this._context.stage.add(G.ModelContentType.MATERIAL,this._material);return[2]})})};d.prototype.destroy=function(){q.prototype.destroy.call(this);this._material&&(this._context.stage.remove(G.ModelContentType.MATERIAL,this._material.id),this._material=null)};d.prototype.getDrivenSize=function(b){var a=new Float32Array(1);this._isPropertyDriven("size")&&b.size?a[0]=r.pt2px(t.getSingleSizeDriver(b.size)):a[0]=1;return a};d.prototype.getSizeFeatureAttribute=
function(b){var a=new Float32Array(1);a[0]=z.getAttributeValue(this._fastUpdates.visualVariables.size.field,b);return a};d.prototype.getDrivenColor=function(b,a){a=M.vec4f32.fromValues(1,1,1,1);this._isPropertyDriven("color")&&b.color&&(a[0]=b.color[0],a[1]=b.color[1],a[2]=b.color[2],0<b.color.length&&(a[3]=b.color[3]));this._isPropertyDriven("opacity")&&b.opacity&&(a[3]=b.opacity);return a};d.prototype.getColorFeatureAttribute=function(b){var a=new Float32Array(1);a[0]=z.getAttributeValue(this._fastUpdates.visualVariables.color.field,
b);return a};d.prototype.getOpacityFeatureAttribute=function(b){var a=new Float32Array(1);a[0]=z.getAttributeValue(this._fastUpdates.visualVariables.opacity.field,b);return a};d.prototype.createGraphics3DGraphic=function(b){var a=b.graphic,c=a.geometry;if("polyline"!==c.type&&"polygon"!==c.type&&"extent"!==c.type)return this.logger.warn("unsupported geometry type for line symbol: "+c.type),null;if(!this._validateGeometry(c))return null;var c="polygon"===c.type||"extent"===c.type?"rings":"paths",e=
"graphic"+a.uid,d=this.getGraphicElevationContext(a);return"on-the-ground"===d.mode?this._createAsOverlay(b,c,d,e,this._context.layer.uid):this._createAs3DShape(b,c,d,e,a.uid)};d.prototype.applyRendererDiff=function(b,a){for(var c in b.diff)switch(c){case "visualVariables":if(F.updateFastSymbolUpdatesState(this._fastUpdates,a,this._vvConvertOptions))this._material.setParameterValues(this._fastUpdates.materialParameters);else return!1;break;default:return!1}return!0};d.prototype.layerOpacityChanged=
function(){var b=this._material.getColor(),a=B.get(this.symbolLayer,"material","color"),a=this._getCombinedOpacity(a),c=1>a||this._isPropertyDriven("opacity");this._material.setParameterValues({color:[b[0],b[1],b[2],a],transparent:c});return!0};d.prototype.layerElevationInfoChanged=function(b,a,c){var e=this._elevationContext.mode;if(null==c||null==e)return!1;if("on-the-ground"===c&&"on-the-ground"===e)return!0;if(c!==e&&("on-the-ground"===c||"on-the-ground"===e))return!1;var d=t.needsElevationUpdates2D(e);
return this.updateGraphics3DGraphicElevationInfo(b,a,function(){return d})};d.prototype.slicePlaneEnabledChanged=function(b,a){this._material.setParameterValues({slicePlaneEnabled:this._context.slicePlaneEnabled});return!0};d.prototype.pixelRatioChanged=function(b,a){return!0};d.prototype._getOutlineGeometry=function(b,a){return a};d.prototype._getGeometry=function(b){b=b.geometry;"extent"===b.type&&(b=N.fromExtent(b));return b};d.prototype._createAs3DShape=function(b,a,c,d,g){var f=this._getGeometry(b.graphic),
e=f[a],h=this._getOutlineGeometry(f,e),l=[],k=[],q=[],v=y.vec3f64.create(),m=Array(6),f=t.getGeometryVertexData3D(h,f.hasZ,f.spatialReference,this._context.renderSpatialReference,this._context.elevationProvider,this._context.renderCoordsHelper,c);this._logGeometryCreationWarnings(f,e,a,"LineSymbol3DLayer");if(0<h.length){for(var e=f.geometryData.outlines,h=f.eleVertexData,u=f.vertexData,p=0;p<e.length;++p){var x=e[p];if(!(1>=x.count)){var n=x.index,r=x.count;if(this._context.clippingExtent&&(t.computeBoundingBox(h,
n,r,m),t.boundingBoxClipped(m,this._context.clippingExtent)))continue;t.applyOrigin(u,n,r,v);x=new Float64Array(h.buffer,3*n*h.BYTES_PER_ELEMENT,3*r);n=new Float64Array(u.buffer,3*n*u.BYTES_PER_ELEMENT,3*r);n=this._createGeometryData(b,n,x,"rings"===a);n=new T(n,d+"path"+p);n.singleUse=!0;l.push(n);k.push(this._material);n=D.mat4f64.create();C.mat4.translate(n,n,v);q.push(n)}}if(0<l.length)return b=new U({geometries:l,materials:k,transformations:q,castShadow:!1,metadata:{layerUid:this._context.layer.uid,
graphicUid:g},idHint:d}),l=new Q(this,b,l,null,null,O.perVertexElevationAligner,c),l.alignedTerrainElevation=f.terrainElevation,l.needsElevationUpdates=t.needsElevationUpdates2D(c.mode),l}return null};d.prototype._createGeometryData=function(b,a,c,d){a=R.createPolylineGeometryData(a,c,d);if("round"===this._material.getParameters().join){c=a.vertexAttributes[g.VertexAttrConstants.POSITION].data;d=c.length/3;var e=new Float32Array(d),f=X,w=Y;v.vec3.set(f,0,0,0);for(var h=0;h<d-1;++h){var l=h+1;v.vec3.set(w,
c[3*l+0]-c[3*h+0],c[3*l+1]-c[3*h+1],c[3*l+2]-c[3*h+2]);v.vec3.normalize(w,w);l=1*(Math.PI-S.acos(v.vec3.dot(f,w)))*Z*this._lineWidthLOD;e[h]=Math.max(Math.floor(l),0);v.vec3.scale(f,w,-1)}a.vertexAttributes[g.VertexAttrConstants.SUBDIVISIONS]={size:1,data:e,offsetIdx:0,strideIdx:1};a.indices[g.VertexAttrConstants.SUBDIVISIONS]=a.indices[g.VertexAttrConstants.POSITION]}c=new Uint32Array(a.vertexAttributes[g.VertexAttrConstants.POSITION].data.length);a.indices[g.VertexAttrConstants.SIZE]=c;this._fastUpdates.enabled&&
this._fastUpdates.visualVariables.size?(a.vertexAttributes[g.VertexAttrConstants.SIZEFEATUREATTRIBUTE]={size:1,data:this.getSizeFeatureAttribute(b.graphic),offsetIdx:0,strideIdx:1},a.indices[g.VertexAttrConstants.SIZEFEATUREATTRIBUTE]=c):(a.vertexAttributes[g.VertexAttrConstants.SIZE]={size:1,data:this.getDrivenSize(b.renderingInfo),offsetIdx:0,strideIdx:1},a.indices[g.VertexAttrConstants.SIZE]=c);this._fastUpdates.enabled&&this._fastUpdates.visualVariables.color?(a.vertexAttributes[g.VertexAttrConstants.COLORFEATUREATTRIBUTE]=
{size:1,data:this.getColorFeatureAttribute(b.graphic),offsetIdx:0,strideIdx:1},a.indices[g.VertexAttrConstants.COLORFEATUREATTRIBUTE]=c):(a.vertexAttributes[g.VertexAttrConstants.COLOR]={size:4,data:this.getDrivenColor(b.renderingInfo,b.graphic),offsetIdx:0,strideIdx:4},a.indices[g.VertexAttrConstants.COLOR]=c);this._fastUpdates.enabled&&this._fastUpdates.visualVariables.opacity&&(a.vertexAttributes[g.VertexAttrConstants.OPACITYFEATUREATTRIBUTE]={size:1,data:this.getOpacityFeatureAttribute(b.graphic),
offsetIdx:0,strideIdx:1},a.indices[g.VertexAttrConstants.OPACITYFEATUREATTRIBUTE]=c);return a};d.prototype._createAsOverlay=function(b,a,c,d,g){c=b.graphic;var f=this._getGeometry(c);this._material.renderPriority=this._symbolLayerOrder;var e=f[a],h=this._getOutlineGeometry(f,e),l=[],k=Array(6),q=E.empty(),r=y.vec3f64.create(),f=t.getGeometryVertexDataDraped(h,f.spatialReference,this._context.overlaySR);this._logGeometryCreationWarnings(f,e,a,"LineSymbol3DLayer");if(0<h.length){e=f.vertexData;h=f.geometryData.outlines;
for(f=0;f<h.length;++f){var m=h[f],u=m.index,m=m.count;t.computeBoundingBox(e,u,m,k);if(!t.boundingBoxClipped(k,this._context.clippingExtent)){E.expand(q,k);t.applyOrigin(e,u,m,r);t.setZ(e,u,m,this._getDrapedZ());m=new Float64Array(e.buffer,3*u*e.BYTES_PER_ELEMENT,3*m);u=D.mat4f64.create();C.mat4.translate(u,u,r);var m=this._createGeometryData(b,m,null,"rings"===a),p=new V(m);p.data.layerUid=g;p.data.graphicUid=c.uid;p.material=this._material;p.center=[.5*(k[0]+k[3]),.5*(k[1]+k[4]),0];p.bsRadius=
.5*Math.sqrt((k[3]-k[0])*(k[3]-k[0])+(k[4]-k[1])*(k[4]-k[1]));p.transformation=u;p.name=d;p.uniqueName=d+"#"+m.id;l.push(p)}}return new P(this,l,q)}return null};return d}(z.Graphics3DSymbolLayer);A.Graphics3DLineSymbolLayer=q;var X=y.vec3f64.create(),Y=y.vec3f64.create(),Z=4/Math.PI;A.default=q});