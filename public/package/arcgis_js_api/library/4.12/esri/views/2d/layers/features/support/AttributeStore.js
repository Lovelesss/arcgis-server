// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/generatorHelper ../../../../../core/tsSupport/awaiterHelper ../../../../../core/Error ../../../../../core/has ../../../../../core/Logger ../../../../../core/mathUtils ../../../../../core/maybe ../../../../../core/promiseUtils ../../../../../layers/support/FieldsIndex ../../../../../support/arcadeOnDemand ../../../../webgl ../../../engine ../../../arcade/utils ../tileRenderers/support/visualVariablesUtils @dojo/framework/shim/Map @dojo/framework/shim/Promise".split(" "),
function(B,A,r,h,v,u,C,D,m,q,E,F,K,g,G,H){Object.defineProperty(A,"__esModule",{value:!0});var p=C.getLogger("esri.views.layers.2d.features.support.AttributeStore"),t=g.debug.createDebugLogger(g.debug.DEBUG_ATTR_UPDATES,p),x=function(c,a){return function(b,d,e){var f;try{f=a(b,d,e)}catch(n){f=NaN}return(null===f||isNaN(f)||Infinity===f)&&c||f}},y=u("esri-shared-array-buffer"),z=u("esri-webgl-texture-float"),I=u("esri-webgl-max-texture-size"),J=function(){function c(a,b,d,e){this.texelSize=4;this.descriptors=
[];var f=e.pixelType;e=e.layout;this.data=this._initData(f,d,a,b);this.pixelType=f;this.layout=e;this._resetRange();this._shared=a;this._ctype=b}Object.defineProperty(c.prototype,"buffer",{get:function(){return this.data.buffer},enumerable:!0,configurable:!0});c.prototype.getData=function(a,b){return this.data[a*this.texelSize+b]};c.prototype.setData=function(a,b,d){0===(this.layout&1<<b)?p.error("mapview-attributes-store","Tried to set a value for a texel's readonly component"):(this.data[a*this.texelSize+
b]=d,this.dirtyStart=Math.min(this.dirtyStart,a),this.dirtyEnd=Math.max(this.dirtyEnd,a))};c.prototype.expand=function(a){a=this._initData(this.pixelType,a,this._shared,this._ctype);a.set(this.data);this.data=a};c.prototype.toMessage=function(){var a=this.dirtyStart,b=this.dirtyEnd,d=this.texelSize;if(a>b)return null;this._resetRange();var e=!this._shared&&"local"!==this._ctype,f=this.pixelType,c=this.layout;if(!this.data.slice){if(!e)return{start:a,end:b,data:null,pixelType:f,layout:c};d=new (g.Utils.getPixelArrayCtor(this.pixelType))(Array.prototype.slice.call(this.data,
a*d,(b+1)*d));return{start:a,end:b,data:d,pixelType:f,layout:c}}d=e&&this.data.slice(a*d,(b+1)*d)||null;return{start:a,end:b,data:d,pixelType:f,layout:c}};c.prototype._initData=function(a,b,d,e){d=d&&"local"!==e?SharedArrayBuffer:ArrayBuffer;a=g.Utils.getPixelArrayCtor(a);b=new a(new d(b*b*4*a.BYTES_PER_ELEMENT));for(a=0;a<b.length;a+=4)b[a+1]=255;return b};c.prototype._resetRange=function(){this.dirtyStart=this.data.length/4;this.dirtyEnd=0};return c}();u=function(){function c(a){this._attributeComputeMap=
new Map;this._blocks=[];this._idMap=new Map;this._localToObjectId=new Map;this._filters=Array(g.definitions.MAX_FILTERS);this._freeList=[];this._abortController=q.createAbortController();this._hasScaleExpr=!1;this._size=32;this._idCounter=0;var b=z?5126:5121;t("Creating AttributeStore "+(y?"with":"without")+" shared memory");this._client=a;this._blockDescriptors=[{pixelType:5121,layout:7},{pixelType:b,layout:15},{pixelType:b,layout:15}];this._blocks=this._blockDescriptors.map(function(a){return null})}
c.prototype.destroy=function(){this._abortController.abort()};Object.defineProperty(c.prototype,"hasScaleExpr",{get:function(){return this._hasScaleExpr},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"_signal",{get:function(){return this._abortController.signal},enumerable:!0,configurable:!0});c.prototype.createLocalId=function(a){if(!this._idMap.has(a)){var b=this._getFreeId();this._idMap.set(a,-1===b?0:b);this._localToObjectId.set(b,a)}return this._idMap.get(a)};c.prototype.freeLocalId=
function(a){var b=this._idMap.get(a);this._idMap.delete(a);this._localToObjectId.delete(b);this._freeList.push(b)};c.prototype.getFeatureId=function(a){return this._localToObjectId.get(a)};c.prototype.getLocalId=function(a){return this._idMap.has(a)?this._idMap.get(a):null};c.prototype.updateFilters=function(a){return h(this,void 0,void 0,function(){var b,d,e,c,n,l,k=this;return r(this,function(f){switch(f.label){case 0:return b=a.config,d=a.service,e=a.spatialReference,c=b.filters,n=b.definitionExpression,
l=c.map(function(b,c){return k._updateFilter(a,b,c,d,n,e)}),[4,q.all(l)];case 1:return f.sent(),[2]}})})};c.prototype.setAttributeBindings=function(a,b){return h(this,void 0,void 0,function(){return r(this,function(d){this._hasScaleExpr=!1;switch(a.type){case "simple":case "class-breaks":case "unique-value":case "dictionary":return[2,this._bindVVEvaluators(a.visualVariables,b)];case "dot-density":return[2,this._bindDDEvaluators(a.attributes,b)];case "heatmap":break;default:p.error(v("attribute-store",
"Found invalid renderer type: "+a))}return[2]})})};c.prototype.setData=function(a,b,d,e){this._getBlock(b).setData(a,d,e)};c.prototype.setAttributeData=function(a,b,d,e){var c=this;this._getBlock(0).setData(a,0,this._getFilterFlags(b));var n=z?1:2;this._attributeComputeMap.forEach(function(f,k){var l=k*n%4;k=c._getBlock(Math.floor(k*n/4)+1);f=f(b,{$view:e},d);if(z)k.setData(a,l,f);else if(f===g.definitions.NAN_MAGIC_NUMBER)k.setData(a,l,255),k.setData(a,l+1,255);else{f=D.clamp(Math.round(f),-32767,
32766)+32768;var m=(f&65280)>>8;k.setData(a,l,f&255);k.setData(a,l+1,m)}})};c.prototype.sendUpdates=function(){var a=this;if(this._nextUpdate)return this._nextUpdate.promise;if(this._currUpdate)return this._nextUpdate=q.createResolver(),this._nextUpdate.promise;var b={blocks:this._blocks.map(function(a){return m.isSome(a)?a.toMessage():null})};return this._currUpdate=this._createResources().then(function(){var d=a._client.update(b,a._signal).then(function(){a._currUpdate=null;if(a._nextUpdate){var b=
a._nextUpdate;a._nextUpdate=null;a.sendUpdates().then(function(){return b.resolve()})}});a._client.render();return d})};c.prototype._createResources=function(){var a=this;if(m.isSome(this._createResourcesPromise))return this._createResourcesPromise;t("Initializing AttributeStore");var b={shared:y||"local"===this._client.type,size:this._size,blocks:m.mapMany(this._blocks,function(a){return{buffer:a.buffer,pixelType:a.pixelType}})};this._createResourcesPromise=b=this._client.initialize(b,this._signal);
b.then(function(){if(m.isNone(a._createResourcesPromise))return a._createResources()});return b};c.prototype._getBlock=function(a){var b=this._blocks[a];if(m.isSome(b))return b;t("Initializing AttributeBlock at index "+a);b=new J(y,this._client.type,this._size,this._blockDescriptors[a]);this._blocks[a]=b;this._createResourcesPromise=null;return b};c.prototype._expand=function(){if(this._size<I){var a=this._size<<=1;t("Expanding block size to",a,this._blocks);m.forEachSome(this._blocks,function(b){return b.expand(a)});
this._createResourcesPromise=null;this._size=a;return 0}p.error(v("mapview-limitations","Maximum number of onscreen features exceeded."));return-1};c.prototype._getFreeId=function(){return this._freeList.length?this._freeList.pop():this._idCounter>=this._size*this._size&&this._expand()?-1:this._idCounter++};c.prototype._updateFilter=function(a,b,d,e,c,n){return h(this,void 0,void 0,function(){var f,k,g,h,p,u,q,t,v,w=this;return r(this,function(l){switch(l.label){case 0:f=this._filters[d];k=m.isSome(f)&&
f.hash;if(k===JSON.stringify(b))return[2];g=1<<d;return m.isNone(b)?(this._filters[d]=null,this._idMap.forEach(function(a){var b=w._getBlock(0).getData(a,0);w._getBlock(0).setData(a,0,b|g)}),[2]):[4,a.queryObjectIds(b)];case 1:return h=l.sent(),b.hiddenIds&&b.hiddenIds.length&&(h=h.filter(function(a){return-1===b.hiddenIds.indexOf(a)})),p=h.map(function(a){return w._idMap.get(a)}),[4,this._getFilter(d,e)];case 2:u=l.sent();u.update(b,c,n);this._idMap.forEach(function(a){var b=w._getBlock(0).getData(a,
0);w._getBlock(0).setData(a,0,b&~g)});for(q=0;q<p.length;q++)t=p[q],null!=t&&(v=this._getBlock(0).getData(t,0),this._getBlock(0).setData(t,0,v|g));return[2]}})})};c.prototype._getFilter=function(a,b){return h(this,void 0,void 0,function(){var d,e,c;return r(this,function(f){switch(f.label){case 0:return d=this._filters[a],m.isSome(d)?[2,d]:[4,new Promise(function(a,b){B(["../../../../../layers/graphics/data/FeatureFilter"],a,b)})];case 1:return e=f.sent().default,c=new e({geometryType:b.geometryType,
hasM:!1,hasZ:!1,timeInfo:b.timeInfo,fieldsIndex:new E(b.fields)}),this._filters[a]=c,[2,c]}})})};c.prototype._getFilterFlags=function(a){for(var b=0,d=0;d<this._filters.length;d++)var c=this._filters[d],c=m.isNone(c)||c.check(a),b=b|(c?1:0)<<d;return b};c.prototype._bindVVEvaluators=function(a,b){return h(this,void 0,void 0,function(){var c,e=this;return r(this,function(d){switch(d.label){case 0:this._attributeComputeMap.clear();if(!m.isSome(a))return[3,2];c=q.all(a.map(function(a){return h(e,void 0,
void 0,function(){var c,d;return r(this,function(e){switch(e.label){case 0:return c=g.Utils.getVVType(a.type),[4,this._createGetValueFunction(a,b)];case 1:return d=e.sent(),m.isSome(d)&&this._attributeComputeMap.set(c,d),[2]}})})}));return[4,c];case 1:d.sent(),d.label=2;case 2:return[2]}})})};c.prototype._bindDDEvaluators=function(a,b){return h(this,void 0,void 0,function(){var c,e,f,n=this;return r(this,function(d){switch(d.label){case 0:return this._attributeComputeMap.clear(),a.length>g.definitions.DOT_DENSITY_MAX_FIELDS&&
p.warn("mapview-invalid-value","DotDensityRenderer supports a maximum of "+g.definitions.DOT_DENSITY_MAX_FIELDS+" attribtues, but found "+a.length),[4,q.all(a.map(function(a){return n._createNormalizedFunction(a,b)}))];case 1:c=d.sent().map(function(a){return x(0,a)});for(e=0;e<g.definitions.DOT_DENSITY_MAX_FIELDS;e++)(f=e<a.length&&c[e])?this._attributeComputeMap.set(e,f):this._attributeComputeMap.has(e)&&this._attributeComputeMap.delete(e);return[2]}})})};c.prototype._createGetValueFunction=function(a,
b){return h(this,void 0,void 0,function(){var c,e,f,n,l,k,h;return r(this,function(d){switch(d.label){case 0:if("size"!==a.type)return[3,2];c=g.getTypeOfSizeVisualVariable(a);if(c===g.enums.WGLVVFlag.SIZE_SCALE_STOPS)return[2,null];f=(e=c===g.enums.WGLVVFlag.SIZE_UNIT_VALUE)&&function(b){return H.getVisualVariableSizeValueRepresentationRatio(b,a.valueRepresentation)};n=x;l=[g.definitions.NAN_MAGIC_NUMBER];return[4,this._createNormalizedFunction(a,b,f)];case 1:return[2,n.apply(void 0,l.concat([d.sent()]))];
case 2:return k=x,h=[g.definitions.NAN_MAGIC_NUMBER],[4,this._createNormalizedFunction(a,b)];case 3:return[2,k.apply(void 0,h.concat([d.sent()]))]}})})};c.prototype._createNormalizedFunction=function(a,b,c){return h(this,void 0,void 0,function(){var d,f,g;return r(this,function(e){switch(e.label){case 0:if(d=a.field){if("string"===typeof d)return(f=a.normalizationField)?[2,function(a){if(a.attributes[d]&&a.attributes[f])return a=a.attributes[d]/a.attributes[f],c?c(a):a}]:[2,c?function(a){return c(a.attributes[d])}:
function(a){return a.attributes[d]}];p.error(v("mapview-rendering:invalid-type","The field for a vv must be a string or a number, but got "+typeof d));return[2,function(a){}]}if(!a.valueExpression)return[3,2];this._hasScaleExpr=this._hasScaleExpr||-1!==a.valueExpression.indexOf("scale");return[4,F.createVVExpression(a.valueExpression,b.spatialReference,b.fields)];case 1:return g=e.sent(),[2,G.callWithOptimizedFeature.bind(null,g)];case 2:return p.error("Unable to create a normalized function for visual variable: "+
a),[2,function(a){}]}})})};return c}();A.default=u});