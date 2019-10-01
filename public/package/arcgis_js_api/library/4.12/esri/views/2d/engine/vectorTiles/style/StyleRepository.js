// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../../core/has","./StyleLayer"],function(l,m,n,f){return function(){function d(a,b){this._layerByName={};this.styleJSON=a;this.version=parseFloat(a.version);this.sprite=b?b.spriteUrl:a.sprite;this.glyphs=b?b.glyphsUrl:a.glyphs;if(this.layers=(a.layers||[]).map(d._create))for(a=void 0,b=0;b<this.layers.length;b++)a=this.layers[b],this._layerByName[a.id.toLowerCase()]=a;this._identifyRefLayers()}d.prototype.isPainterDataDriven=function(a){return(a=this._layerByName[a.toLowerCase()])?
a.isPainterDataDriven():!1};d.prototype.getStyleLayerId=function(a){return a>=this.layers.length?null:this.layers[a].id};d.prototype.getLayoutProperties=function(a){return(a=this._layerByName[a.toLowerCase()])?a.layout:null};d.prototype.getPaintProperties=function(a){return(a=this._layerByName[a.toLowerCase()])?a.paint:null};d.prototype.setPaintProperties=function(a,b){a=this._layerByName[a.toLowerCase()];if(!a)return"";var g=this.layers.indexOf(a);this.styleJSON.layers[g].paint=b;b=d._recreateLayer({id:a.id,
type:a.typeName,source:a.source,sourceLayer:a["source-layer"],minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,layout:a.layout,paint:b},a);this.layers[g]=b;this._layerByName[a.id.toLowerCase()]=b;return a.id};d.prototype.setLayoutProperties=function(a,b){a=this._layerByName[a.toLowerCase()];if(!a)return"";var g=this.layers.indexOf(a);this.styleJSON.layers[g].layout=b;b=d._recreateLayer({id:a.id,type:a.typeName,source:a.source,sourceLayer:a["source-layer"],minzoom:a.minzoom,maxzoom:a.maxzoom,filter:a.filter,
layout:b,paint:a.paint},a);this.layers[g]=b;this._layerByName[a.id.toLowerCase()]=b;return a.id};d.prototype._identifyRefLayers=function(){for(var a=[],b=[],g=0,d=0,f=this.layers;d<f.length;d++){var c=f[d];if(1===c.type){var h=c,e=c.source+"|"+c.sourceLayer,e=e+("|"+JSON.stringify(c.layout&&c.layout.visibility)),e=e+("|"+JSON.stringify(c.minzoom)),e=e+("|"+JSON.stringify(c.maxzoom)),e=e+("|"+JSON.stringify(c.filter));if(h.hasDataDrivenFill||h.hasDataDrivenOutline)e+="|"+JSON.stringify(g);a.push({key:e,
layer:c})}2===c.type&&(h=c,e=c.source+"|"+c.sourceLayer,e+="|"+JSON.stringify(c.layout&&c.layout.visibility),e+="|"+JSON.stringify(c.minzoom),e+="|"+JSON.stringify(c.maxzoom),e+="|"+JSON.stringify(c.filter),e+="|"+JSON.stringify(c.layout&&c.layout["line-cap"]),e+="|"+JSON.stringify(c.layout&&c.layout["line-join"]),h.hasDataDrivenLine&&(e+="|"+JSON.stringify(g)),b.push({key:e,layer:c}));++g}this._assignRefLayers(a);this._assignRefLayers(b)};d.prototype._assignRefLayers=function(a){a.sort(function(a,
b){return a.key<b.key?-1:a.key>b.key?1:0});for(var b,d,f=a.length,k=0;k<f;k++){var c=a[k];if(c.key===b)c.layer.refLayerId=d;else if(b=c.key,d=c.layer.id,1===c.layer.type&&!c.layer.getPaintProperty("fill-outline-color"))for(var h=k+1;h<f;h++){var e=a[h];if(e.key===b){if(e.layer.getPaintProperty("fill-outline-color")){a[k]=e;a[h]=c;d=e.layer.id;break}}else break}}};d._create=function(a,b,d){b=1-1/(d.length+1)*(1+b);switch(a.type){case "background":return new f.BackgroundStyleLayer(0,a,b);case "fill":return new f.FillStyleLayer(1,
a,b);case "line":return new f.LineStyleLayer(2,a,b);case "symbol":return new f.SymbolStyleLayer(3,a,b);case "raster":throw Error("Unsupported vector tile raster layer");case "circle":return new f.CircleStyleLayer(4,a,b)}throw Error("Unknown vector tile layer");};d._recreateLayer=function(a,b){switch(a.type){case "background":return new f.BackgroundStyleLayer(0,a,b.z);case "fill":return new f.FillStyleLayer(1,a,b.z);case "line":return new f.LineStyleLayer(2,a,b.z);case "symbol":return new f.SymbolStyleLayer(3,
a,b.z);case "raster":throw Error("Unsupported vector tile raster layer");case "circle":return new f.CircleStyleLayer(4,a,b.z)}};return d}()});