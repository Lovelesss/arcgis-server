// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/Accessor ../core/collectionUtils ../core/Logger ../core/promiseUtils ../core/accessorSupport/decorators ../layers/Layer ../layers/support/LayerCollection".split(" "),function(v,w,n,k,p,l,q,r,f,t,g){function h(e,d,a){for(var b,c=0,u=e.length;c<u;c++)if(b=e.getItemAt(c),b[d]===a||b&&"group"===b.type&&(b=h(b.layers,d,a)))return b}var m=q.getLogger("esri.support.LayersMixin");return function(e){function d(a){var b=
e.call(this,a)||this;b.layers=new g.default;b.layers.on("after-add",function(c){c=c.item;c.parent&&c.parent!==b&&"remove"in c.parent&&c.parent.remove(c);c.parent=b;b.layerAdded(c);"elevation"===c.type&&m.error("Layer '"+c.title+", id:"+c.id+"' of type '"+c.type+"' is not supported as an operational layer and will therefore be ignored.")});b.layers.on("after-remove",function(c){c=c.item;c.parent=null;b.layerRemoved(c)});return b}n(d,e);d.prototype.destroy=function(){this.layers.drain(this.layerRemoved,
this)};Object.defineProperty(d.prototype,"layers",{set:function(a){this._set("layers",l.referenceSetter(a,this._get("layers"),g.default))},enumerable:!0,configurable:!0});d.prototype.findLayerById=function(a){return h(this.layers,"id",a)};d.prototype.add=function(a,b){var c=this,d=this.layers;b=d.getNextIndex(b);a instanceof t?(a.parent===this&&this.reorder(a,b),d.add(a,b)):r.isThenable(a)?a.then(function(a){c.destroyed||c.add(a,b)}):m.error("#add()","The item being added is not a Layer or a Promise that resolves to a Layer.")};
d.prototype.addMany=function(a,b){var c=this,d=this.layers;b=d.getNextIndex(b);a.slice().forEach(function(a){a.parent===c?c.reorder(a,b):(d.add(a,b),b+=1)})};d.prototype.findLayerByUid=function(a){return h(this.layers,"uid",a)};d.prototype.remove=function(a){return this.layers.remove(a)};d.prototype.removeMany=function(a){return this.layers.removeMany(a)};d.prototype.removeAll=function(){return this.layers.removeAll()};d.prototype.reorder=function(a,b){return this.layers.reorder(a,b)};d.prototype.layerAdded=
function(a){};d.prototype.layerRemoved=function(a){};k([f.property({type:g.default,cast:l.castForReferenceSetter})],d.prototype,"layers",null);return d=k([f.subclass("esri.support.LayersMixin")],d)}(f.declared(p))});