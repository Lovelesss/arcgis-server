// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/extendsHelper ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ../definitions ./WGLBrush ../shaders/BackgroundPrograms".split(" "),function(b,e,g,h,d,k,l,f){Object.defineProperty(e,"__esModule",{value:!0});b=function(b){function c(){var a=b.call(this)||this;a._color=h.vec4f32.fromValues(1,0,0,1);a._initialized=!1;return a}g(c,b);c.prototype.dispose=function(){this._solidProgram&&(this._solidProgram.dispose(),this._solidProgram=null);
this._solidVertexArrayObject&&(this._solidVertexArrayObject.dispose(),this._solidVertexArrayObject=null)};c.prototype.draw=function(a,b){a=a.context;this._initialized||this._initialize(a);a.setStencilFunctionSeparate(1032,519,b.stencilRef,255);a.bindVAO(this._solidVertexArrayObject);a.bindProgram(this._solidProgram);this._solidProgram.setUniformMatrix3fv("u_dvsMat3",b.dvsMat3);this._solidProgram.setUniform1f("u_coord_range",k.TILE_SIZE);this._solidProgram.setUniform1f("u_depth",0);this._solidProgram.setUniform4fv("u_color",
this._color);a.drawArrays(5,0,4);a.bindVAO()};c.prototype._initialize=function(a){if(this._initialized)return!0;var b=d.createProgram(a,f.background);if(!b)return!1;var c=new Int8Array([0,0,1,0,0,1,1,1]),c=d.BufferObject.createVertex(a,35044,c);a=new d.VertexArrayObject(a,f.background.attributes,{geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},{geometry:c});this._solidProgram=b;this._solidVertexArrayObject=a;return this._initialized=!0};return c}(l.default);
e.default=b});