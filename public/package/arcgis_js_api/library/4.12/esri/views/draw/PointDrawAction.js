// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/Accessor ../../core/Evented ../../core/Handles ../../core/maybe ../../core/screenUtils ../../core/accessorSupport/decorators ./DrawAction ./input/Keys ../input/recognizers/PointerClickHoldAndDrag".split(" "),function(v,w,k,g,l,m,n,e,h,f,p,q,r){var t=function(){function d(b,a,c){this.view=b;this.native=a;this.coordinates=c;this.defaultPrevented=!1;this.type="cursor-update"}d.prototype.preventDefault=
function(){this.defaultPrevented=!0};return d}(),u=function(){function d(b,a){this.native=b;this.coordinates=a;this.defaultPrevented=!1;this.type="draw-complete"}d.prototype.preventDefault=function(){this.defaultPrevented=!0};return d}();return function(d){function b(a){a=d.call(this,a)||this;a._clickDelay=r.DefaultParameters.maximumClickDelay;a._cursorMoved=!1;a._cursorScreenPoint=null;a._pointerDownEvent=null;a._viewHandles=new n;a.coordinates=[];a.view=null;return a}k(b,d);b.prototype.initialize=
function(){this._addViewHandles()};b.prototype.destroy=function(){this._removeViewHandles();this._viewHandles.destroy();this.emit("destroy")};b.prototype.complete=function(){if(this._cursorScreenPoint){var a=this.getCoordsFromScreenPoint(this._cursorScreenPoint);e.isSome(a)&&(this._set("coordinates",a),this._completeDrawing())}};b.prototype._addViewHandles=function(){var a=this;this._removeViewHandles();this._viewHandles.add([this.view.on("click",function(c){c.stopPropagation();var b=a.getCoordsFromScreenPoint(c.screenPoint);
e.isSome(b)&&(a._set("coordinates",b),a._drawCompleteHandler(c))}),this.view.on("pointer-down",function(b){a._pointerDownEvent=b;a._cursorMoved=!1}),this.view.on("pointer-move",function(b){a._cursorMoved=!0;a._cursorScreenPoint=h.createScreenPointFromEvent(b);a._cursorUpdateHandler(b)}),this.view.on("pointer-up",function(b){if(a._pointerDownEvent&&!a._cursorMoved&&b.timestamp-a._pointerDownEvent.timestamp>a._clickDelay){a._cursorScreenPoint=h.createScreenPointFromEvent(b);var c=a.getCoordsFromScreenPoint(a._cursorScreenPoint);
e.isSome(c)&&(a._set("coordinates",c),a._drawCompleteHandler(b))}}),this.view.on("key-down",function(b){if(b.key===q.KEYS.drawCompleteKey&&a._cursorScreenPoint){var c=a.getCoordsFromScreenPoint(a._cursorScreenPoint);e.isSome(c)&&(a._set("coordinates",c),a._drawCompleteHandler(b))}})])};b.prototype._removeViewHandles=function(){this._viewHandles.removeAll()};b.prototype._updateCursor=function(a,b){this.emit("cursor-update",new t(this.view,b,a))};b.prototype._completeDrawing=function(a){this._cursorMoved=
!1;this._pointerDownEvent=null;a=new u(a,this.coordinates);this.emit("draw-complete",a);a.defaultPrevented||this._removeViewHandles()};b.prototype._cursorUpdateHandler=function(a){this._updateCursor(this.getCoordsFromScreenPoint(this._cursorScreenPoint),a.native)};b.prototype._drawCompleteHandler=function(a){this._completeDrawing(a.native)};g([f.property({readOnly:!0})],b.prototype,"coordinates",void 0);g([f.property()],b.prototype,"view",void 0);return b=g([f.subclass("esri.views.draw.PointDrawAction")],
b)}(f.declared(p,l,m))});