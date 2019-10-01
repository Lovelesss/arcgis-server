// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/arrayUtils","../../../../geometry/support/aaBoundingRect","../../../../layers/graphics/dehydratedFeatures"],function(e,h,g,c,d){e=function(){function b(a){this.descriptor=a;this.fetchRequest=null;this.fetchStatus=0;this._features=null;this._featureLimit=this._numVertices=0;this.featuresMissing=!0;this._shuffled=!1;this._numFeatures=b.UNKNOWN_COUNT;this._emptyFeatureRatio=0;this._estimatedSize=-1;this._estimatedUnusedSize=0;this._estimatedUnusedSizeDirty=
!1;this.displayingFeatures=null;this.alive=!0;this.filtered=!1}Object.defineProperty(b.prototype,"perTileMaximumNumberOfFeaturesExceeded",{get:function(){return!this.filtered&&(this.featuresMissing||this.features&&this.featureLimit!==this.features.length)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"features",{get:function(){return this._features},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"featureLimit",{get:function(){return this._featureLimit},set:function(a){this._featureLimit!==
a&&(this._featureLimit=a,this._estimatedUnusedSizeDirty=!0)},enumerable:!0,configurable:!0});b.prototype.setFeatures=function(a,b){this._features=a;this._shuffled=!1;this._estimatedSize=-1;this._estimatedUnusedSizeDirty=!0;a&&0<a.length?(this._emptyFeatureRatio=b/(a.length+b),this._numVertices=a.reduce(function(a,b){return a+d.numVertices(b.geometry)},0)):this._numVertices=this._emptyFeatureRatio=0};Object.defineProperty(b.prototype,"emptyFeatureRatio",{get:function(){return this._emptyFeatureRatio},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"numFeatures",{get:function(){return this._numFeatures!==b.UNKNOWN_COUNT?this._numFeatures:this._features?this._features.length:0},set:function(a){this._numFeatures=a},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"numVertices",{get:function(){return this._numVertices},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasPreciseFeatureCount",{get:function(){return this._numFeatures!==b.UNKNOWN_COUNT},
enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"id",{get:function(){return this.descriptor.id},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"estimatedSize",{get:function(){this.updateMemoryEstimates();return this._estimatedSize},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"estimatedUnusedSize",{get:function(){return this._estimatedUnusedSize},enumerable:!0,configurable:!0});b.prototype.updateMemoryEstimates=function(){if(0>this._estimatedSize){this._estimatedUnusedSize=
this._estimatedSize=0;if(this._features)for(var a=0;a<this._features.length;++a){var b=d.estimateSize(this._features[a]);this._estimatedSize+=b;a>=this.featureLimit&&(this._estimatedUnusedSize+=b)}return!0}if(this._estimatedUnusedSizeDirty){this._estimatedUnusedSize=0;this._estimatedUnusedSizeDirty=!1;if(this._features)for(a=this.featureLimit;a<this._features.length;++a)this._estimatedUnusedSize+=d.estimateSize(this._features[a]);return!0}return!1};Object.defineProperty(b.prototype,"isFetching",{get:function(){return 2===
this.fetchStatus||3===this.fetchStatus},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isRefetching",{get:function(){return 3===this.fetchStatus},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"needsFetching",{get:function(){return 0===this.fetchStatus||1===this.fetchStatus},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"needsRefetching",{get:function(){return 1===this.fetchStatus},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,
"isFetched",{get:function(){return 4===this.fetchStatus||5===this.fetchStatus},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"needsDisplayUpdate",{get:function(){var a;if(a=!!this._features){a:{a=this._features;var b=this.displayingFeatures,c=this.featureLimit;if(!b||!a||c!==b.length||c>a.length)a=!1;else{for(var d=0;d<c;++d)if(a[d]!==b[d]){a=!1;break a}a=!0}}a=!a}return a},enumerable:!0,configurable:!0});b.prototype.intersects=function(a){if(!a||!this.descriptor.extent)return!0;
c.fromExtent(a,f);return c.intersects(this.descriptor.extent,f)};b.prototype.intersection=function(a,b){if(!a&&!this.descriptor.extent)return c.set(b,c.POSITIVE_INFINITY),b;a?(c.fromExtent(a,b),this.descriptor.extent&&c.intersection(b,this.descriptor.extent,b)):c.set(b,this.descriptor.extent);return b};b.prototype._shuffle=function(a){this._features.sort(function(b,c){return d.getObjectId(b,a)-d.getObjectId(c,a)});g.shuffle(this._features,16438);this._estimatedUnusedSizeDirty=this._shuffled=!0};b.prototype.reduceFeatures=
function(a,b){if(0>=a)return!1;var c=!1;this._features?(this.featureLimit=Math.ceil(this.numFeatures*a),this.featureLimit>this._features.length&&(this.featureLimit=this._features.length,4===this.fetchStatus&&0<this._features.length&&(this.fetchStatus=1,c=!0)),!this._shuffled&&1>a&&this._shuffle(b)):this.featureLimit=0;return c};Object.defineProperty(b.prototype,"cacheItem",{get:function(){return{features:this.features,numFeatures:this._numFeatures,emptyFeatureRatio:this._emptyFeatureRatio,fetchStatus:this.fetchStatus,
featuresMissing:this.featuresMissing}},enumerable:!0,configurable:!0});b.prototype.loadCache=function(a){this.fetchRequest=null;this._features=a.features;this._numFeatures=a.numFeatures;this._emptyFeatureRatio=a.emptyFeatureRatio;this.fetchStatus=a.fetchStatus;this.featuresMissing=a.featuresMissing;this._estimatedSize=-1;this._estimatedUnusedSizeDirty=!0};return b}();(e||(e={})).UNKNOWN_COUNT=-1;var f=c.create();return e});