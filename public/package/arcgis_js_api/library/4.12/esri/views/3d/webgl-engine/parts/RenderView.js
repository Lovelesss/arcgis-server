// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/assignHelper ../../../../core/tsSupport/extendsHelper ../../../../core/tsSupport/decorateHelper ../../../../core/has ../../../../core/Logger ../../../../core/now ../../../../core/scheduling ../../../../core/libs/gl-matrix-2/vec3f64 ../../support/animationUtils ../lib/AutoDisposable ../lib/Camera ../lib/DrapedRenderer ../lib/GLMaterialRep ../lib/ProgramRepository ../lib/Renderer ../lib/TextureRepository ../lib/tracer ./Model ./ScreenshotManager ../shaders/globalOptions ../../../webgl/context-util ../../../webgl/RenderingContext".split(" "),
function(G,H,l,m,f,n,p,I,q,r,t,d,u,v,w,x,y,z,h,A,B,C,D,E){var F=p.getLogger("esri.views.3d.webgl-engine.parts.View");return function(k){function a(b,a,g,e){var c=k.call(this)||this;c._camera=new u(r.vec3f64.fromValues(0,100,-100));c._needsRender=!0;c._idleSuspend=!0;c._animationTimeLast=0;c._stats={renderGeometriesTotal:0,renderGeometriesVisible:0,renderTimeTotal:0,renderTimeLast:0,frameCount:0};c._container=b;c._stage=a;c._initializeContext(e);b=C.glslifyGlobalOptions({viewingMode:e.viewingMode});
c._programRepository=new x(c._rctx,b);c._textureRepository=new z(a.getAll(A.ContentType.TEXTURE),c._programRepository,function(){return c._camera.viewport},c._rctx);c._materialRepository=new w(c._textureRepository,c._programRepository);c._initializeViewportCamera();c._drapedRenderer=new v(c._rctx,c._canvas,c._programRepository,c._materialRepository,c._textureRepository,g);c._renderer=new y(c._programRepository,c._materialRepository,c._textureRepository,c._rctx,"scene",a);c._screenshotManager=new B.ScreenshotManager(c._rctx,
c._render.bind(c),function(){return c.setNeedsRender()},e.screenshot.renderOverlay);c._registerFrameTask();return c}m(a,k);a.prototype.dispose=function(){this._container.contains(this._canvas)&&this._container.removeChild(this._canvas);this._frameTask&&(this._frameTask.remove(),this._frameTask=null);k.prototype.dispose.call(this)};Object.defineProperty(a.prototype,"isLoadingResources",{get:function(){return this._renderer.isLoadingResources},enumerable:!0,configurable:!0});a.prototype.getCombinedStats=
function(){var b=this._rctx.gl,a={},g=this._renderer.getCombinedStats(),e;for(e in g)a[e]=g[e];a.renderGeometriesTotal=this._stats.renderGeometriesTotal;a.renderGeometriesVisible=this._stats.renderGeometriesVisible;void 0!==b.getUsedTextureMemory&&(a.textureMemory=b.getUsedTextureMemory());void 0!==b.getUsedRenderbufferMemory&&(a.renderbufferMemory=b.getUsedRenderbufferMemory());void 0!==b.getUsedVBOMemory&&(a.VBOMemory=b.getUsedVBOMemory());if(void 0!==b.getUsedTextureMemoryStats){var b=b.getUsedTextureMemoryStats(),
c;for(c in b)a["texMem type: "+c]=b[c]}return a};a.prototype.setNeedsRender=function(){this._needsRender=!0};a.prototype.needsRender=function(){var b=this._canRender();return(this._needsRender||!this._idleSuspend||this._renderer.needsRender()||this._textureRepository.needsRender())&&b};a.prototype.ensureEdgeView=function(){return this._renderer.ensureEdgeView()};Object.defineProperty(a.prototype,"edgeView",{get:function(){return this._renderer.edgeView},enumerable:!0,configurable:!0});a.prototype.setRenderParameters=
function(b){this.setNeedsRender();void 0!==b.idleSuspend&&(this._idleSuspend=!!b.idleSuspend);this._renderer.setRenderParams(b)};a.prototype.getRenderParameters=function(){var b=this._renderer.getRenderParams();b.anisotropicFiltering=this._textureRepository.getMaxAnisotropy();b.idleSuspend=this._idleSuspend;return b};Object.defineProperty(a.prototype,"renderingContext",{get:function(){return this._rctx},enumerable:!0,configurable:!0});a.prototype.has=function(b){return"s3tc"===b?!!this._rctx.capabilities.compressedTextureS3TC:
"shaderTextureLOD"===b?!!this._rctx.capabilities.shaderTextureLOD:!1};a.prototype.modify=function(b,a,g,e){this._renderer.modify(b,a,g,e)};a.prototype.setCamera=function(b){this._camera.copyFrom(b);this.setNeedsRender()};a.prototype.getCamera=function(){return this._camera};a.prototype.getCanvas=function(){return this._canvas};a.prototype.getDrapedRenderer=function(){return this._drapedRenderer};a.prototype.takeScreenshot=function(b){return this._screenshotManager.takeScreenshot(b)};Object.defineProperty(a.prototype,
"renderPlugins",{get:function(){return this._renderer.renderPlugins},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"test",{get:function(){return{renderer:this._renderer,textureRepository:this._textureRepository}},enumerable:!0,configurable:!0});a.prototype.getGpuMemoryUsage=function(){return l({},this._renderer.getGpuMemoryUsage(),{draped:this._drapedRenderer?this._drapedRenderer.getGpuMemoryUsage():0})};a.prototype._registerFrameTask=function(){var b=this,a={viewCamera:this._camera,
frameHasSlicePlane:!1,drapedRenderer:this._drapedRenderer};this._frameTask=q.addFrameTask({preRender:function(a){h.begin();b._stage.processDirty();b._processAnimations(a.time)},render:function(){b.needsRender()&&(b._resetNeedsRender(),b._render(null,b._camera,!1))},postRender:function(){h.end()},update:function(){a.viewCamera=b._camera;a.frameHasSlicePlane=b._renderer.hasSlicePlane;a.drapedRenderer=b._drapedRenderer;b._screenshotManager.update(a)}})};a.prototype._resetNeedsRender=function(){this._needsRender=
!1;this._renderer.resetNeedsRender();this._textureRepository.resetNeedsRender()};a.prototype._canRender=function(){var b=this._camera;return 0<b.fullWidth&&0<b.fullHeight};a.prototype._initializeViewportCamera=function(){var b=this._container.getBoundingClientRect(),a=this.getCamera();a.viewport[2]=b.width;a.viewport[3]=b.height;this.setCamera(a)};a.prototype._initializeContext=function(b){this._canvas=b.canvas;this._canvas||(this._canvas=document.createElement("canvas"));this._canvas.setAttribute("style",
"width: 100%; height:100%; display:block;");var a=h.instrumentContext(D.createContextOrErrorHTML(this._canvas,{alpha:b.alpha||!1,premultipliedAlpha:!0,antialias:!1,depth:!0,stencil:null==b.stencil?!0:b.stencil},b.renderContext));this._rctx=new E(a,{disabledExtensions:b.deactivatedWebGLExtensions||{},debugWebGLExtensions:b.debugWebGLExtensions||{}});!b.alpha&&this._rctx.contextAttributes.alpha&&F.error("WebGL context has alpha channel even though no alpha channel was requested");!this._rctx.contextAttributes.alpha&&
11<=n("safari")&&(this._container.style.backgroundColor="black");this._container.appendChild(this._canvas)};a.prototype._processAnimations=function(b){b-this._animationTimeLast<t.DESIRED_ANIMATION_MS||(this._animationTimeLast=b,this._renderer.updateAnimations(b)&&this.setNeedsRender())};a.prototype._render=function(b,a,d){this._renderer.setLighting(this._stage.lighting);this._rctx.bindFramebuffer(b);a.setGLViewport(this._rctx);this._renderer.render({fbo:b,camera:a,disableSlice:d,lightDirection:this._stage.mainLightDirection})};
f([d.autoDispose()],a.prototype,"_rctx",void 0);f([d.autoDispose()],a.prototype,"_container",void 0);f([d.autoDispose()],a.prototype,"_canvas",void 0);f([d.autoDispose()],a.prototype,"_programRepository",void 0);f([d.autoDispose()],a.prototype,"_renderer",void 0);f([d.autoDispose()],a.prototype,"_drapedRenderer",void 0);f([d.autoDispose()],a.prototype,"_screenshotManager",void 0);return a}(d.AutoDisposable)});