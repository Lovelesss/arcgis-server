// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/assignHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../request ../../core/promiseUtils".split(" "),function(g,h,q,r,m,n,p,l,k){Object.defineProperty(h,"__esModule",{value:!0});g=function(){function f(e,b){this.baseURL=e;this.devicePixelRatio=b;this._isRetina=!1;this._spritesData={};this.height=this.width=this.image=null;this.loadStatus="not-loaded"}
Object.defineProperty(f.prototype,"spriteNames",{get:function(){var e=[],b;for(b in this._spritesData)e.push(b);e.sort();return e},enumerable:!0,configurable:!0});f.prototype.getSpriteInfo=function(e){return this._spritesData[e]};f.prototype.load=function(e){return p(this,void 0,void 0,function(){return n(this,function(b){switch(b.label){case 0:k.throwIfAborted(e);this.loadStatus="loading";if(!this.baseURL)return[2,k.resolve(this)];b.label=1;case 1:return b.trys.push([1,3,,4]),[4,this._loadSprites(e)];
case 2:return b.sent(),this.loadStatus="loaded",[3,4];case 3:return b.sent(),this.loadStatus="failed",[3,4];case 4:return[2,this]}})})};f.prototype._loadSprites=function(e){var b=this;this._isRetina=1.15<this.devicePixelRatio?!0:!1;var f=this.baseURL,g=this._isRetina?"@2x":"",h=""+f+g+".png";return k.all([l(f+g+".json",e),l(h,m({responseType:"image"},e))]).then(function(d){var a=d[0];d=d[1];var c=Object.keys(a.data);if(!c||0===c.length||1===c.length&&"_ssl"===c[0]||!d||!d.data)return b._spritesData=
b.image=null,b.width=b.height=0,k.resolve(null);b._spritesData=a.data;a=d.data;b.width=a.width;b.height=a.height;d=document.createElement("canvas");c=d.getContext("2d");d.width=a.width;d.height=a.height;c.drawImage(a,0,0,a.width,a.height);a=c.getImageData(0,0,a.width,a.height);a=new Uint8Array(a.data);for(c=0;c<a.length;c+=4)d=a[c+3]/255,a[c]*=d,a[c+1]*=d,a[c+2]*=d;b.image=a})};return f}();h.default=g});