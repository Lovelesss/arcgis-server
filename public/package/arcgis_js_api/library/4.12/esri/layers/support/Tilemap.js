// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../request ../../core/Error ../../core/lang ../../core/promiseUtils".split(" "),function(l,g,n,p,d,q,r){function m(a){var b;"vector-tile"===a.service.type?b=a.service.url+"/tilemap/"+a.level+"/"+a.row+"/"+a.col+"/"+a.width+"/"+a.height:(b=a.service.tileServers,b=(b&&b.length?b[a.row%b.length]:a.service.url)+"/tilemap/"+a.level+"/"+a.row+"/"+a.col+"/"+a.width+"/"+a.height);(a=a.service.query)&&(b=b+"?"+a);return b}Object.defineProperty(g,
"__esModule",{value:!0});l=function(){function a(){this.location={left:0,top:0,width:0,height:0};this.byteSize=40}a.prototype.getAvailability=function(b,a){if(this._isAllAvailable)return"available";if(this._isAllUnvailable)return"unavailable";b=(b-this.location.top)*this.location.width+(a-this.location.left);a=b>>3;var c=this._tileAvailabilityBitSet;return 0>a||a>c.length?"unknown":c[a]&1<<b%8?"available":"unavailable"};a.prototype._updateFromData=function(a){for(var b=!0,d=!0,f=new Uint8Array(Math.ceil(this.location.width*
this.location.height/8)),h=0,e=0;e<a.length;e++){var k=e%8;a[e]?(d=!1,f[h]|=1<<k):b=!1;7===k&&++h}this._isAllUnvailable=d;this._isAllAvailable=b;this._isAllAvailable||this._isAllUnvailable||(this._tileAvailabilityBitSet=f,this.byteSize+=f.length)};a.fromDefinition=function(b,c){var g=b.service.request||p,f=b.row,h=b.col,e=b.width,k=b.height,l={query:{f:"json"}};c=c?n({},l,c):l;return g(m(b),c).then(function(a){return a.data}).catch(function(a){if(a&&a.details&&422===a.details.httpStatus){a=[];for(var b=
0,c=e*k;b<c;b++)a[b]=0;return{location:{top:f,left:h,width:e,height:k},valid:!0,data:a}}return r.reject(a)}).then(function(b){if(b.location&&(b.location.top!==f||b.location.left!==h||b.location.width!==e||b.location.height!==k))throw new d("tilemap:location-mismatch","Tilemap response for different location than requested",{response:b,definition:{top:f,left:h,width:e,height:k}});return a.fromJSON(b)})};a.fromJSON=function(b){a.validateJSON(b);var c=new a;c.location=Object.freeze(q.clone(b.location));
c._updateFromData(b.data);return Object.freeze(c)};a.validateJSON=function(a){if(!a||!a.location)throw new d("tilemap:missing-location","Location missing from tilemap response");if(!1===a.valid)throw new d("tilemap:invalid","Tilemap response was marked as invalid");if(!a.data)throw new d("tilemap:missing-data","Data missing from tilemap response");if(!Array.isArray(a.data))throw new d("tilemap:data-mismatch","Data must be an array of numbers");if(a.data.length!==a.location.width*a.location.height)throw new d("tilemap:data-mismatch",
"Number of data items does not match width/height of tilemap");};return a}();g.Tilemap=l;g.tilemapDefinitionId=function(a){return a.level+"/"+a.row+"/"+a.col+"/"+a.width+"/"+a.height};g.tilemapDefinitionUrl=m;g.default=l});