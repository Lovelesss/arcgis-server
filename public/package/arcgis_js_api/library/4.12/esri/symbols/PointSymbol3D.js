// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Collection ../core/Error ../core/lang ../core/accessorSupport/decorators ./IconSymbol3DLayer ./ObjectSymbol3DLayer ./Symbol3D ./TextSymbol3DLayer ./callouts/calloutUtils ./support/Symbol3DVerticalOffset".split(" "),function(v,w,q,c,f,r,g,d,h,l,t,m,k,u){var n=f.ofType({base:null,key:"type",typeMap:{icon:h,object:l,text:m}}),p=f.ofType({base:null,key:"type",typeMap:{icon:h,object:l}});return function(f){function b(a){a=
f.call(this)||this;a.verticalOffset=null;a.callout=null;a.symbolLayers=new n;a.type="point-3d";return a}q(b,f);e=b;b.prototype.writeSymbolLayers=function(a,b,d,c){var e=a.filter(function(a){return"text"!==a.type});c&&c.messages&&e.length<a.length&&(a=a.find(function(a){return"text"===a.type}),c.messages.push(new r("symbol-layer:unsupported","Symbol layers of type 'text' cannot be persisted in PointSymbol3D",{symbolLayer:a})));b[d]=e.map(function(a){return a.write({},c)}).toArray()};b.prototype.supportsCallout=
function(){if(1>(this.symbolLayers?this.symbolLayers.length:0))return!1;for(var a=0,b=this.symbolLayers.items;a<b.length;a++)switch(b[a].type){case "icon":case "text":case "object":continue;default:return!1}return!0};b.prototype.hasVisibleCallout=function(){return k.hasVisibleCallout(this)};b.prototype.hasVisibleVerticalOffset=function(){return k.hasVisibleVerticalOffset(this)};b.prototype.clone=function(){return new e({verticalOffset:g.clone(this.verticalOffset),callout:g.clone(this.callout),styleOrigin:g.clone(this.styleOrigin),
symbolLayers:g.clone(this.symbolLayers),thumbnail:g.clone(this.thumbnail)})};b.fromSimpleMarkerSymbol=function(a){return new e({symbolLayers:[h.fromSimpleMarkerSymbol(a)]})};b.fromPictureMarkerSymbol=function(a){return new e({symbolLayers:[h.fromPictureMarkerSymbol(a)]})};b.fromTextSymbol=function(a){return new e({symbolLayers:[m.fromTextSymbol(a)]})};var e;c([d.property({type:u.default,json:{write:!0}})],b.prototype,"verticalOffset",void 0);c([d.property(k.calloutProperty)],b.prototype,"callout",
void 0);c([d.property({type:n,json:{type:p,origins:{"web-scene":{type:p}}}})],b.prototype,"symbolLayers",void 0);c([d.writer("web-scene","symbolLayers")],b.prototype,"writeSymbolLayers",null);c([d.enumeration.serializable()({PointSymbol3D:"point-3d"})],b.prototype,"type",void 0);return b=e=c([d.subclass("esri.symbols.PointSymbol3D")],b)}(d.declared(t))});