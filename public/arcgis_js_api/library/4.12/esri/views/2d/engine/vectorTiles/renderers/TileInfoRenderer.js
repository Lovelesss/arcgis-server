// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/libs/gl-matrix-2/vec4f32","../../../../webgl","../GeometryUtils"],function(p,q,m,g,n){return function(){function f(a){this._initialized=!1;this._color=m.vec4f32.fromValues(1,0,0,1);this._maxWidth=0;this._programOptions={id:!1,pattern:!1};this._programCache=a}f.prototype.dispose=function(){this._outlineVertexArrayObject&&(this._outlineVertexArrayObject.dispose(),this._outlineVertexArrayObject=null);this._tileInfoVertexArrayObject&&(this._tileInfoVertexArrayObject.dispose(),
this._tileInfoVertexArrayObject=null)};f.prototype.render=function(a,b){this._initialized||this._initialize(a);var d=this._programCache.getProgram(0,0,this._programOptions);if(d&&(a.bindVAO(this._outlineVertexArrayObject),a.bindProgram(d),d.setUniformMatrix4fv("u_transformMatrix",b.tileTransform.transform),d.setUniform2fv("u_normalized_origin",b.tileTransform.displayCoord),d.setUniform1f("u_coord_range",b.coordRange),d.setUniform1f("u_depth",0),d.setUniform4fv("u_color",this._color),a.drawArrays(3,
0,4),a.bindVAO(),1E5<b.triangleCount&&(a.setStencilFunction(514,b.stencilData.reference,b.stencilData.mask),a.setStencilTestEnabled(!0),a.bindVAO(this._quadVertexArrayObject),d.setUniform4f("u_color",.9,0,0,.35),a.drawArrays(5,0,4),a.bindVAO(),a.setStencilTestEnabled(!1)),d=this._getTexture(a,b))){var c=this._programCache.getProgram(7,0,null);c&&(a.bindVAO(this._tileInfoVertexArrayObject),a.bindProgram(c),a.bindTexture(d,0),c.setUniformMatrix4fv("u_transformMatrix",b.tileTransform.transform),c.setUniform2fv("u_normalized_origin",
b.tileTransform.displayCoord),c.setUniform1f("u_depth",0),c.setUniform1f("u_coord_ratio",b.coordRange/512),c.setUniform2f("u_delta",8,8),c.setUniform2f("u_dimensions",d.descriptor.width,d.descriptor.height),a.drawArrays(5,0,4),a.bindVAO())}};f.prototype._initialize=function(a){if(this._initialized)return!0;var b={geometry:[{name:"a_pos",count:2,type:5120,offset:0,stride:2,normalized:!1,divisor:0}]},d=new Int8Array([0,0,1,0,1,1,0,1]),d=g.BufferObject.createVertex(a,35044,d),d=new g.VertexArrayObject(a,
this._programCache.getProgramAttributes(0),b,{geometry:d}),c=new Int8Array([0,0,0,1,1,0,1,1]),c=g.BufferObject.createVertex(a,35044,c),c=new g.VertexArrayObject(a,this._programCache.getProgramAttributes(0),b,{geometry:c}),e=new Int8Array([0,0,1,0,0,1,1,1]),e=g.BufferObject.createVertex(a,35044,e);a=new g.VertexArrayObject(a,this._programCache.getProgramAttributes(7),b,{geometry:e});this._outlineVertexArrayObject=d;this._quadVertexArrayObject=c;this._tileInfoVertexArrayObject=a;return this._initialized=
!0};f.prototype._getTexture=function(a,b){if(b.texture)return b.texture;this._canvas||(this._canvas=document.createElement("canvas"),this._canvas.setAttribute("id","canvas2d"),this._canvas.setAttribute("width","512"),this._canvas.setAttribute("height","32"),this._canvas.setAttribute("style","display:none"));var d=b.key.id+", "+b.triangleCount,c=this._canvas.getContext("2d");c.font="24px sans-serif";c.textAlign="left";c.textBaseline="middle";var e=c.measureText(d),e=Math.pow(2,Math.ceil(n.log2(e.width+
2)));e>this._maxWidth&&(this._maxWidth=e);c.clearRect(0,0,this._maxWidth,32);c.fillStyle="blue";var f=e=0,h;if(b.refKeys)for(var k=0,l=Object.keys(b.refKeys);k<l.length;k++)h=b.refKeys[l[k]].match(/\d+/),h=parseInt(h[0],10),isNaN(h)||(f++,b.key.level>h&&e++);e===f?c.fillStyle="red":0<e&&(c.fillStyle="purple");c.fillText(d,0,16);b.texture=new g.Texture(a,{target:3553,pixelFormat:6408,dataType:5121,samplingMode:9728},this._canvas);return b.texture};return f}()});