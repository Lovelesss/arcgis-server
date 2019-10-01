// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/tsSupport/extendsHelper","../../../core/Evented"],function(d,e,f,g){Object.defineProperty(e,"__esModule",{value:!0});d=function(c){function b(){var a=null!==c&&c.apply(this,arguments)||this;a._renderRequestedCalled=!1;a._attached=!1;a._isReady=!1;a._opacity=1;a.renderRequested=!1;a._visible=!0;return a}f(b,c);Object.defineProperty(b.prototype,"attached",{get:function(){return this._attached},set:function(a){this._attached!==a&&((this._attached=a)?this.hasEventListener("attach")&&
this.emit("attach"):this.hasEventListener("detach")&&this.emit("detach"))},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isReady",{get:function(){return this._attached&&this._isReady},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"opacity",{get:function(){return this._opacity},set:function(a){this._opacity!==a&&(this._opacity=a,this.requestRender())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{get:function(){return this._visible},
set:function(a){this._visible!==a&&(this._visible=a,this.requestRender())},enumerable:!0,configurable:!0});b.prototype.attach=function(){this.ready();return!0};b.prototype.detach=function(){};b.prototype.processRender=function(a){this.visible&&this.attached&&(this._renderRequestedCalled=!1,this.doRender(a),this._renderRequestedCalled||(this.renderRequested=!1),this.hasEventListener("post-render")&&this.emit("post-render"))};b.prototype.requestRender=function(){var a=this.renderRequested;this.renderRequested=
this._renderRequestedCalled=!0;this.parent&&this.parent.requestChildRender(this);a!==this.renderRequested&&this.hasEventListener("will-render")&&this.emit("will-render")};b.prototype.dispose=function(){};b.prototype.ready=function(){this._isReady=!0;this.emit("isReady")};return b}(g);e.DisplayObject=d});