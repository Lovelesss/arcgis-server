// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../request ../../core/Accessor ../../core/Error ../../core/Handles ../../core/Logger ../../core/LRUCache ../../core/PooledArray ../../core/promiseUtils ../../core/urlUtils ../../core/watchUtils ../../core/accessorSupport/decorators ./Tilemap".split(" "),function(D,E,t,r,f,u,v,n,w,x,y,z,h,A,B,e,m){var C=x.getLogger("esri.layers.support.TilemapCache");return function(p){function b(a){a=
p.call(this)||this;a._handles=new w;a._pendingTilemapRequests={};a._availableLevels={};a.levels=5;a.cacheByteSize=2097152;a.request=u;return a}r(b,p);k=b;b.prototype.initialize=function(){var a=this;this._tilemapCache=new y(this.cacheByteSize);this._handles.add([this.watch(["layer.parsedUrl","layer.tileServers?"],function(){return a._initializeTilemapDefinition()}),B.init(this,"layer.tileInfo.lods",function(g){return a._initializeAvailableLevels(g)},!0)]);this._initializeTilemapDefinition()};b.prototype.destroy=
function(){this._handles&&(this._handles.destroy(),this._handles=null)};b.prototype.castLevels=function(a){return 2>=a?(C.error("Minimum levels for Tilemap is 3, but got ",a),3):a};Object.defineProperty(b.prototype,"size",{get:function(){return 1<<this.levels},enumerable:!0,configurable:!0});b.prototype.getTilemap=function(a,g,b){return this._tilemapFromCache(a,g,b,this._tmpTilemapDefinition)};b.prototype.fetchTilemap=function(a,g,b,c){var d=this;if(!this._availableLevels[a])return h.reject(new n("tilemap-cache:level-unavailable",
"Level "+a+" is unavailable in the service"));var e=this._tmpTilemapDefinition;if(a=this._tilemapFromCache(a,g,b,e))return h.resolve(a);var f=c&&c.signal;c=t({},c,{signal:null});return h.create(function(a,g){h.onAbort(f,function(){return g(h.createAbortError())});var b=m.tilemapDefinitionId(e),l=d._pendingTilemapRequests[b];if(!l){var l=m.Tilemap.fromDefinition(e,c).then(function(a){d._tilemapCache.put(b,a,a.byteSize);return a}),k=function(){return delete d._pendingTilemapRequests[b]};d._pendingTilemapRequests[b]=
l;l.then(k,k)}l.then(a,g)})};b.prototype.getAvailability=function(a,g,b){return this._availableLevels[a]?(a=this.getTilemap(a,g,b))?a.getAvailability(g,b):"unknown":"unavailable"};b.prototype.getAvailabilityUpsample=function(a,b,d,c){c.level=a;c.row=b;c.col=d;a=this.layer.tileInfo;for(a.updateTileInfo(c);;)if(b=this.getAvailability(c.level,c.row,c.col),"unavailable"===b){if(!a.upsampleTile(c))return"unavailable"}else return b};b.prototype.fetchAvailability=function(a,b,d,c){return this._availableLevels[a]?
this.fetchTilemap(a,b,d,c).catch(function(a){return a}).then(function(c){return c instanceof m.Tilemap?(c=c.getAvailability(b,d),"unavailable"===c?h.reject(new n("tile-map:tile-unavailable","Tile is not available",{level:a,row:b,col:d})):c):h.isAbortError(c)?h.reject(c):"unknown"}):h.reject(new n("tilemap-cache:level-unavailable","Level "+a+" is unavailable in the service"))};b.prototype.fetchAvailabilityUpsample=function(a,b,d,c,e){var g=this;c.level=a;c.row=b;c.col=d;var f=this.layer.tileInfo;f.updateTileInfo(c);
var l=!1,m=this.fetchAvailability(a,b,d,e).catch(function(a){if(h.isAbortError(a))throw a;if(f.upsampleTile(c))return g.fetchAvailabilityUpsample(c.level,c.row,c.col,c);throw a;}).then(function(a){l=!0;return a},function(a){l=!0;throw a;});if(l)return m;var q={id:c.id,level:a,row:b,col:d},n=h.createAbortController(),p=t({},e,{signal:n.signal});a=function(a){var b=r.fetchAvailability(q.level,q.row,q.col,p);k._prefetches.push(b);a=function(){k._prefetches.removeUnordered(b)};b.then(a,a)};var r=this;
for(b=0;k._prefetches.length<k._maxPrefetch&&f.upsampleTile(q);++b)a(b);m.then(function(){return n.abort()},function(){return n.abort()});return m};b.prototype._initializeTilemapDefinition=function(){if(this.layer.parsedUrl){var a=this.layer.parsedUrl,b=a.query;this._tilemapCache.clear();this._tmpTilemapDefinition={service:{url:a.path,query:b?A.objectToQuery(b):null,tileServers:this.layer.tileServers,request:this.request,type:this.layer.type},width:this.size,height:this.size,level:0,row:0,col:0}}};
b.prototype._tilemapFromCache=function(a,b,d,c){a=this._getTilemapDefinition(a,b,d,c);a=m.tilemapDefinitionId(a);return this._tilemapCache.get(a)};b.prototype._getTilemapDefinition=function(a,b,d,c){c.level=a;c.row=b-b%this.size;c.col=d-d%this.size;return c};b.prototype._initializeAvailableLevels=function(a){var b=this;this._availableLevels={};a&&a.forEach(function(a){return b._availableLevels[a.level]=!0})};var k;b._maxPrefetch=4;b._prefetches=new z({initialSize:k._maxPrefetch});f([e.property({constructOnly:!0,
type:Number})],b.prototype,"levels",void 0);f([e.cast("levels")],b.prototype,"castLevels",null);f([e.property({readOnly:!0,dependsOn:["levels"],type:Number})],b.prototype,"size",null);f([e.property({constructOnly:!0,type:Number})],b.prototype,"cacheByteSize",void 0);f([e.property({constructOnly:!0})],b.prototype,"layer",void 0);f([e.property({constructOnly:!0})],b.prototype,"request",void 0);return b=k=f([e.subclass("esri.layers.support.TilemapCache")],b)}(e.declared(v))});