// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/extendsHelper ../../geometry ../../core/compilerUtils ../../core/Logger ../../core/unitUtils ../../geometry/support/aaBoundingRect ../../geometry/support/contains ../../geometry/support/webMercatorUtils".split(" "),function(g,h,q,w,x,y,z,n,A,r){function t(b,d){var a=u(b,d.spatialReference);if(!a)return null;switch(b.type){case "point":b.z=d.elevationAt(a)||0;break;case "polyline":k.spatialReference=a.spatialReference;for(var l=b.hasM&&!b.hasZ,e=0;e<b.paths.length;e++)for(var c=
b.paths[e],f=a.paths[e],g=0;g<c.length;g++){var h=c[g],m=f[g];k.x=m[0];k.y=m[1];m=d.elevationAt(k)||0;l&&(h[3]=h[2]);h[2]=m}b.hasZ=!0;break;case "multipoint":k.spatialReference=a.spatialReference;l=b.hasM&&!b.hasZ;for(e=0;e<b.points.length;e++)c=b.points[e],f=a.points[e],k.x=f[0],k.y=f[1],f=d.elevationAt(k)||0,l&&(c[3]=c[2]),c[2]=f;b.hasZ=!0;break;default:x.neverReached(b)}return b}function u(b,d){var a=b.spatialReference;return a.equals(d)?b:r.canProject(a,d)?r.project(b,d):(p.error("Cannot project geometry spatial reference (wkid:"+
a.wkid+") to elevation sampler spatial reference (wkid:"+d.wkid+")"),null)}Object.defineProperty(h,"__esModule",{value:!0});var p=y.getLogger("esri.layers.support.ElevationSampler");g=function(){function b(){}b.prototype.queryElevation=function(b){return t(b.clone(),this)};b.prototype.on=function(b,a){return B};b.prototype.projectIfRequired=function(b,a){return u(b,a)};return b}();h.ElevationSamplerBase=g;var v=function(b){function d(a,l,e){var c=b.call(this)||this;c.tile=a;c.noDataValue=e;c.extent=
n.toExtent(a.tile.extent,l.spatialReference);e=z.getMetersPerUnitForSR(l.spatialReference);a=l.lodAt(a.tile.level).resolution*e;c.demResolution={min:a,max:a};return c}q(d,b);Object.defineProperty(d.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},enumerable:!0,configurable:!0});d.prototype.contains=function(a){a=this.projectIfRequired(a,this.spatialReference);return A.extentContainsPoint(this.extent,a)};d.prototype.elevationAt=function(a){var b=this.projectIfRequired(a,
this.spatialReference);if(!b)return null;if(!this.contains(a)){var e=this.extent;p.warn("#elevationAt()","Point used to sample elevation ("+a.x+", "+a.y+") is outside of the sampler extent ("+(e.xmin+", "+e.ymin+", "+e.xmax+", "+e.ymax)+")")}return this.tile.sample(b.x,b.y)};return d}(g);h.TileElevationSampler=v;g=function(b){function d(a,d,e){var c=b.call(this)||this,f;"number"===typeof d?(c.noDataValue=d,f=null):(f=d,c.noDataValue=e);c.samplers=f?a.map(function(a){return new v(a,f,c.noDataValue)}):
a;if(a=c.samplers[0])for(c.extent=a.extent.clone(),a=a.demResolution,c.demResolution={min:a.min,max:a.max},a=1;a<c.samplers.length;a++)d=c.samplers[a],c.extent.union(d.extent),c.demResolution.min=Math.min(c.demResolution.min,d.demResolution.min),c.demResolution.max=Math.max(c.demResolution.max,d.demResolution.max);else c.extent=n.toExtent(n.create(),f.spatialReference),c.demResolution={min:0,max:0};return c}q(d,b);Object.defineProperty(d.prototype,"spatialReference",{get:function(){return this.extent.spatialReference},
enumerable:!0,configurable:!0});d.prototype.elevationAt=function(a){var b=this.projectIfRequired(a,this.spatialReference);if(!b)return null;for(var d=0,c=this.samplers;d<c.length;d++){var f=c[d];if(f.contains(b))return f.elevationAt(b)}p.warn("#elevationAt()","Point used to sample elevation ("+a.x+", "+a.y+") is outside of the sampler");return null};return d}(g);h.MultiTileElevationSampler=g;h.updateGeometryElevation=t;var k=new w.Point,B={remove:function(){}}});