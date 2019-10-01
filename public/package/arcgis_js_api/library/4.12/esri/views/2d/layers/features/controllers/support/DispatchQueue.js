// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../../core/promiseUtils"],function(c,d,b){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function a(){this._action=null;this._queue=[];this._abortController=b.createAbortController();this._refs=1}a.prototype.up=function(){this._refs++};a.prototype.down=function(){this._refs--;return 0===this._refs};a.prototype.clear=function(){this._abortController.abort();this._abortController=b.createAbortController()};a.prototype.destroy=function(){this._queue.length=
0;this._action&&(this._action=null)};a.prototype.enqueue=function(a){this._action?this._queue.push(a):this._setAction(a)};a.prototype.flush=function(){var a=this._action;if(!a)return b.resolve();var c=this._abortController.signal,a=this._queue.reduce(function(a,b){return a.then(function(){return b(c)})},a);this._action=a.then(this._handleNext.bind(this));this._queue.length=0;return a};a.prototype.hasAction=function(){return!!this._action};a.prototype._setAction=function(a){this._action=a(this._abortController.signal).then(this._handleNext.bind(this))};
a.prototype._handleNext=function(){this._queue.length?this._setAction(this._queue.shift()):this._action=null};return a}();d.default=c});