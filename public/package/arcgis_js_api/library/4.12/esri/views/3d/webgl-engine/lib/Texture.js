// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/compilerUtils ../../../../core/Logger ../../../../core/mathUtils ../../../../core/typedArrayUtil ../../support/imageUtils ../../support/mathUtils ./DDSUtil ./DefaultVertexBufferLayouts ./glUtil3D ./IdGen ./Util ../shaders/MiscPrograms ../../../webgl/FramebufferObject ../../../webgl/renderState ../../../webgl/Texture ../../../webgl/Util ../../../webgl/capabilities/isWebGL2Context".split(" "),function(p,H,v,w,q,k,x,n,r,y,z,A,t,B,C,u,l,D,E){var F=w.getLogger("esri.views.3d.webgl-engine.lib.Texture");
p=function(){function d(b,a,c){this.data=b;this.id=d.idGen.gen(a);this.unloadFunc=void 0;this.params=c||{};this.params.mipmap=!1!==this.params.mipmap;this.params.noUnpackFlip=this.params.noUnpackFlip||!1;this.params.preMultiplyAlpha=this.params.preMultiplyAlpha||!1;this.params.wrap=this.params.wrap||{s:10497,t:10497};this.params.powerOfTwoResizeMode=this.params.powerOfTwoResizeMode||1;this.estimatedTexMemRequired=d.estimateTexMemRequired(this.data,this.params)}d.estimateTexMemRequired=function(b,
a){return null==b?0:k.isArrayBuffer(b)||k.isUint8Array(b)?b.byteLength:b instanceof Image||b instanceof ImageData||b instanceof HTMLCanvasElement?(a.mipmap?4/3:1)*b.width*b.height*(a.components||4):(a.mipmap?4/3:1)*a.width*a.height*(a.components||4)||0};d.prototype.getEstimatedTexMemRequired=function(){return this.estimatedTexMemRequired};d.prototype.dispose=function(){this.data=void 0};d.prototype.deferredLoading=function(){return"string"===typeof this.data};d.prototype.getWidth=function(){return this.params.width};
d.prototype.getHeight=function(){return this.params.height};d.prototype.initializeThroughUpload=function(b,a,c,h,f){var e=this.data;a.flipped=!this.params.noUnpackFlip;a.samplingMode=this.params.mipmap?9987:9729;a.hasMipmap=this.params.mipmap;a.wrapMode=this.params.wrap;a.preMultiplyAlpha=this.params.preMultiplyAlpha;if("string"===typeof e)this.loadTextureFromUri(b,e,a,c,h,f);else if(e instanceof Image||e instanceof ImageData||e instanceof HTMLCanvasElement)this.loadTextureFromImageData(b,e,a,c,h,
f);else{if(k.isArrayBuffer(e)&&this.params.encoding===d.DDS_ENCODING)a=r.createDDSTexture(b,a,e,this.params.mipmap);else if(k.isUint8Array(e)&&this.params.encoding===d.DDS_ENCODING)a=r.createDDSTexture(b,a,e.buffer,this.params.mipmap);else if(k.isUint8Array(e))t.assert(0<this.params.width&&0<this.params.height),a.pixelFormat=1===this.params.components?6409:3===this.params.components?6407:6408,a.width=this.params.width,a.height=this.params.height,a=new l(b,a,e);else{if(null!==e)throw console.warn("Unsupported image data"),
Error("Unsupported image data");a=new l(b,a,null)}b.bindTexture(a);f(a)}this.data=void 0};d.prototype.loadTextureFromImageData=function(b,a,c,d,f,e){this.params.width=a.width;this.params.height=a.height;c.pixelFormat=3===this.params.components?6407:6408;var g=33071===this.params.wrap.s&&33071===this.params.wrap.t;E.default(b.gl)||!this.params.mipmap&&g||n.isPowerOfTwo(a.width)&&n.isPowerOfTwo(a.height)?(c.width=a.width,c.height=a.height,a=new l(b,c,a)):a=this.makePowerOfTwoTexture(b,a,c,d,f);b.bindTexture(a);
e(a)};d.prototype.loadTextureFromUri=function(b,a,c,d,f,e){var g=this,h=!1!==this.params.mipmap;x.requestImage(a).then(function(a){t.assert(1<=a.width&&1<=a.height);c.samplingMode=h?9987:9729;c.hasMipmap=h;!h&&33071===c.wrapMode||n.isPowerOfTwo(a.width)&&n.isPowerOfTwo(a.height)?(c.width=a.width,c.height=a.height,a=new l(b,c,a)):a=g.makePowerOfTwoTexture(b,a,c,d,f);b.bindTexture(a);e(a)}).catch(function(b){var c=200<a.length?a.slice(0,100)+"..."+a.slice(a.length-100):a;F.error("Failed to load image from uri",
c,b);e(null)})};d.prototype.makePowerOfTwoTexture=function(b,a,c,d,f){var e=a.width,g=a.height,h=q.nextHighestPowerOfTwo(e),k=q.nextHighestPowerOfTwo(g);c.width=h;c.height=k;var m;switch(this.params.powerOfTwoResizeMode){case 2:c.textureCoordinateScaleFactor=[e/h,g/k];m=new l(b,c);m.updateData(0,0,0,e,g,a);break;case 1:case null:case void 0:m=this.stretchToPowerOfTwo(b,a,c,d,f);break;default:v.neverReached(this.params.powerOfTwoResizeMode)}c.hasMipmap&&m.generateMipmap();return m};d.prototype.stretchToPowerOfTwo=
function(b,a,c,d,f){var e=new l(b,c),g=C.createWithAttachments(b,e,{colorTarget:0,depthStencilTarget:0});a=new l(b,{target:3553,pixelFormat:c.pixelFormat,dataType:5121,wrapMode:33071,samplingMode:9729,flipped:!!c.flipped,maxAnisotropy:8,preMultiplyAlpha:c.preMultiplyAlpha},a);b.bindFramebuffer(g);void 0===f&&(f=b.getViewport(),f=[f.x,f.y,f.width,f.height]);b.setViewport(0,0,c.width,c.height);c=d.getProgram(B.texOnly);b.bindProgram(c);c.setUniform4f("color",1,1,1,1);c.setUniform1i("tex",0);c=z.createQuadVAO(b,
y.Pos3Tex);b.bindTexture(a,0);b.bindVAO(c);b.setPipelineState(G);b.drawArrays(5,0,D.vertexCount(c,"geometry"));b.bindFramebuffer(null);b.setViewport(f[0],f[1],f[2],f[3]);c.dispose(!0);a.dispose();b.bindFramebuffer(null);g.detachColorTexture();g.dispose();return e};d.prototype.setUnloadFunc=function(b){this.unloadFunc=b};d.prototype.unload=function(){void 0!==this.unloadFunc&&(this.unloadFunc(this.id),this.unloadFunc=void 0)};d.createEmpty=function(b){void 0===b&&(b="emptyTexture");return new d(new Uint8Array([0,
0,0,0]),b,{width:1,height:1,wrap:{s:33071,t:33071}})};d.idGen=new A;d.DDS_ENCODING="image/vnd-ms.dds";return d}();var G=u.makePipelineState({colorWrite:u.defaultColorWriteParams});return p});