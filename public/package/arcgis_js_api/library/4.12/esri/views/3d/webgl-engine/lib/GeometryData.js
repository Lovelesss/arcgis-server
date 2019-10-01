// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","./ComponentUtils","./geometryDataUtils","./Util"],function(q,r,n,k,b){return function(){function a(d,c,f,g){void 0===c&&(c=a.DefaultIndices);void 0===f&&(f=a.DefaultOffsets);void 0===g&&(g="triangle");this.preinterleaved=!1;var e={},h;for(h in d){var l=d[h],m=l.size;e[h]={data:l.data,size:m,offsetIdx:0,strideIdx:m}}if(c===a.DefaultIndices){c=b.getFirstObjectValue(e);d=k.generateDefaultIndexArray(c.data.length/c.size);c={};for(var p in e)c[p]=d}this._id=k.getNewId();this._vertexAttributes=
e;this._indices=c;this._componentOffsets=n.createOffsets(f);this._primitiveType=g}Object.defineProperty(a.prototype,"id",{get:function(){return this._id},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"vertexAttributes",{get:function(){return this._vertexAttributes},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"indices",{get:function(){return this._indices},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"componentOffsets",{get:function(){return this._componentOffsets},
enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"indexCount",{get:function(){return b.getFirstObjectValue(this._indices).length},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"primitiveType",{get:function(){return this._primitiveType},enumerable:!0,configurable:!0});a.prototype.getVertexAttr=function(){return this.vertexAttributes};a.prototype.toRenderData=function(){return{id:this._id.toString(),preinterleaved:!1,indices:this._indices,vertexAttr:this._vertexAttributes}};
a.prototype.getIndices=function(a){return this._indices[a]};a.prototype.getAttribute=function(a){return this._vertexAttributes[a]};a.prototype.estimateGpuMemoryUsage=function(){var a=0;this._indices[b.VertexAttrConstants.POSITION]&&(a+=12*this._indices[b.VertexAttrConstants.POSITION].length);this._indices[b.VertexAttrConstants.NORMAL]&&(a+=12*this._indices[b.VertexAttrConstants.NORMAL].length);this._indices[b.VertexAttrConstants.UV0]&&(a+=8*this._indices[b.VertexAttrConstants.UV0].length);this._indices[b.VertexAttrConstants.COLOR]&&
(a+=4*this._indices[b.VertexAttrConstants.COLOR].length);return a};a.DefaultIndices={};a.DefaultOffsets=new Uint32Array(0);return a}()});