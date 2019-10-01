// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f32 ../../../../../core/libs/gl-matrix-2/vec3f32 ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ../GeometryUtils ./rendererUtils".split(" "),function(y,z,u,r,t,q,v,w,x){return function(){function n(e){this._viewProjMat=r.mat4f32.create();this._offsetVector=t.vec3f32.create();this._color=q.vec4f32.create();this._strokeColor=q.vec4f32.create();this._initialized=!1;this._programOptions=
{id:!1};this._programCache=e}n.prototype.dispose=function(){};n.prototype.render=function(e,d,a,k,p,f,b,n,h){if(0===d.triangleElementCount)return 0;this._initialized||this._initialize(e);var q=b.hasDataDrivenRadius?1:b.getPaintValue("circle-radius",a),c=b.hasDataDrivenColor?[1,1,1,1]:b.getPaintValue("circle-color",a),g=b.hasDataDrivenOpacity?1:b.getPaintValue("circle-opacity",a),r=b.hasDataDrivenStrokeWidth?1:b.getPaintValue("circle-stroke-width",a),l=b.hasDataDrivenStrokeColor?[1,1,1,1]:b.getPaintValue("circle-stroke-color",
a),m=b.hasDataDrivenStrokeOpacity?1:b.getPaintValue("circle-stroke-opacity",a),t=b.hasDataDrivenBlur?0:b.getPaintValue("circle-blur",a),g=g*c[3]*h;this._color[0]=g*c[0];this._color[1]=g*c[1];this._color[2]=g*c[2];this._color[3]=g;g=m*l[3]*h;this._strokeColor[0]=g*l[0];this._strokeColor[1]=g*l[1];this._strokeColor[2]=g*l[2];this._strokeColor[3]=g;h=f.tileTransform.transform;c=b.getPaintValue("circle-translate",a);if(0!==c[0]||0!==c[1])u.mat4.copy(this._viewProjMat,f.tileTransform.transform),h=c[0],
c=c[1],m=l=0,m=(1<<f.key.level)/Math.pow(2,a)*(f.coordRange/512),1===b.getPaintValue("circle-translate-anchor",a)?(p*=-w.C_DEG_TO_RAD,a=Math.sin(p),p=Math.cos(p),l=m*(h*p-c*a),m*=h*a+c*p):(l=m*h,m*=c),this._offsetVector[0]=l,this._offsetVector[1]=m,this._offsetVector[2]=0,u.mat4.translate(this._viewProjMat,this._viewProjMat,this._offsetVector),h=this._viewProjMat;a=this._getCircleVAO(e,f);if(!a)return 0;e.bindVAO(a);k=3===k;a=this._programOptions;a.id=k;a=this._programCache.getProgram(5,k?1:0,a);
e.bindProgram(a);a.setUniformMatrix4fv("u_transformMatrix",h);a.setUniformMatrix4fv("u_extrudeMatrix",n);a.setUniform2fv("u_normalized_origin",f.tileTransform.displayCoord);a.setUniform1f("u_depth",b.z);a.setUniform1f("u_radius",q);a.setUniform4fv("u_color",this._color);a.setUniform1f("u_blur",t);a.setUniform1f("u_stroke_width",r);a.setUniform4fv("u_stroke_color",this._strokeColor);a.setUniform1f("u_antialiasingWidth",1.2);k&&(f=x.int32To4Bytes(d.layerID),a.setUniform4f("u_id",f[0],f[1],f[2],f[3]));
e.drawElements(4,d.triangleElementCount,5125,12*d.triangleElementStart);e.bindVAO();return d.triangleCount()};n.prototype._initialize=function(e){if(this._initialized)return!0;this._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_color",count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,
normalized:!1,divisor:0}]};return this._initialized=!0};n.prototype._getCircleVAO=function(e,d){if(d.circleVertexArrayObject)return d.circleVertexArrayObject;var a=d.circleVertexBuffer,k=d.circleIndexBuffer;if(!a||!k)return null;d.circleVertexArrayObject=new v.VertexArrayObject(e,this._programCache.getProgramAttributes(5),this._vertexAttributes,{geometry:a},k);return d.circleVertexArrayObject};return n}()});