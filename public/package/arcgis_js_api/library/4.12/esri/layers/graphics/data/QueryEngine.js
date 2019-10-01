// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/tsSupport/assignHelper ../../../core/tsSupport/generatorHelper ../../../core/tsSupport/awaiterHelper @dojo/framework/shim/array @dojo/framework/shim/Map @dojo/framework/shim/Set ../../../core/Error ../../../core/lang ../../../core/Logger ../../../core/MemCache ../../../core/promiseUtils ../../../core/unitUtils ../../../geometry/support/aaBoundingBox ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/jsonUtils ../../../geometry/support/spatialReferenceUtils ./attributeSupport ./projectionSupport ./QueryEngineCapabilities ./QueryEngineResult ./spatialQuerySupport ./timeSupport ./utils ../../support/FieldsIndex ../../support/PromiseQueue".split(" "),
function(w,A,M,q,p,N,O,G,r,x,P,D,Q,E,v,B,R,H,K,t,L,S,y,F,T,m,U,V){Object.defineProperty(A,"__esModule",{value:!0});var W=P.getLogger("esri.layers.graphics.data.QueryEngine");w=function(){return function(e,a,b,c,d){this.attributes=e;this.localId=a;this.geometry=b;this.centroid=c;this.filterFlags=d}}();A.Feature=w;var z=new G.default,X=new D.MemCacheStorage(2E6),Y=0;w=function(){function e(a){var b=this;this.capabilities={query:S.queryCapabilities};this.geometryType=a.geometryType;this.hasM=a.hasM;
this.hasZ=a.hasZ;this.objectIdField=a.objectIdField;this.spatialReference=a.spatialReference;this.definitionExpression=a.definitionExpression;this.cacheSpatialQueries=a.cacheSpatialQueries||!1;this.gdbVersion=a.gdbVersion;this.historicMoment=a.historicMoment;this.featureStore=a.featureStore;this._changeHandle=this.featureStore.events.on("changed",function(){return b.clearCache()});this.timeInfo=a.timeInfo;this.cacheSpatialQueries&&(this._geometryQueryCache=new D.MemCache(Y++ +"$$",X));this.fieldsIndex=
new U(a.fields);a.scheduler&&a.priority&&(this._frameQueue=new V.PromiseQueue,this._frameTask=a.scheduler.registerTask(a.priority,function(a){return b._update(a)},function(){return 0<b._frameQueue.length}))}e.prototype.destroy=function(){this._frameTask&&(this._frameTask.remove(),this._frameTask=null,this._frameQueue.cancelAll(),this._frameQueue=null);this.clearCache();this._geometryQueryCache&&this._geometryQueryCache.destroy();this._changeHandle&&(this._changeHandle.remove(),this._changeHandle=
null);this.fieldsIndex.destroy()};Object.defineProperty(e.prototype,"featureAdapter",{get:function(){return this.featureStore.featureAdapter},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"fullExtent",{get:function(){var a=this.featureStore.fullBounds;return a?{xmin:a[0],ymin:a[1],xmax:a[2],ymax:a[3],spatialReference:m.cleanFromGeometryEngine(this.spatialReference)}:null},enumerable:!0,configurable:!0});Object.defineProperty(e.prototype,"timeExtent",{get:function(){return this.timeInfo?
this._timeExtent?this._timeExtent:this._timeExtent=T.getTimeExtent(this.timeInfo,this.featureStore):null},enumerable:!0,configurable:!0});e.prototype.clearCache=function(){this._geometryQueryCache&&this._geometryQueryCache.clear();this._timeExtent=this._allItems=null};e.prototype.executeQuery=function(a,b){void 0===a&&(a={});return p(this,void 0,void 0,function(){var c,d,b;return q(this,function(g){switch(g.label){case 0:c=x.clone(a),g.label=1;case 1:return g.trys.push([1,13,,14]),[4,m.normalizeQuery(c,
this.definitionExpression,this.spatialReference)];case 2:return c=g.sent(),[4,this._reschedule()];case 3:return g.sent(),[4,this._checkQuerySupport(c)];case 4:return c=g.sent(),[4,this._reschedule()];case 5:return g.sent(),[4,this._executeGeometryQuery(c)];case 6:return d=g.sent(),[4,this._reschedule()];case 7:return g.sent(),[4,d.executeObjectIdsQuery(c)];case 8:return d=g.sent(),[4,this._reschedule()];case 9:return g.sent(),[4,d.executeTimeQuery(c)];case 10:return d=g.sent(),[4,this._reschedule()];
case 11:return g.sent(),[4,d.executeAttributesQuery(c)];case 12:return d=g.sent(),[3,14];case 13:b=g.sent();if(b!==m.QUERY_ENGINE_EMPTY_RESULT)throw b;d=new y.default([],null,this);return[3,14];case 14:return[2,d.createQueryResponse(c)]}})})};e.prototype.executeQueryForCount=function(a,b){void 0===a&&(a={});return p(this,void 0,void 0,function(){var c,b,k;return q(this,function(d){switch(d.label){case 0:c=x.clone(a),c.returnGeometry=!1,c.returnCentroid=!1,c.outSR=null,d.label=1;case 1:return d.trys.push([1,
13,,14]),[4,m.normalizeQuery(c,this.definitionExpression,this.spatialReference)];case 2:return c=d.sent(),[4,this._reschedule()];case 3:return d.sent(),[4,this._checkQuerySupport(c)];case 4:return c=d.sent(),[4,this._reschedule()];case 5:return d.sent(),[4,this._executeGeometryQuery(c)];case 6:return b=d.sent(),[4,this._reschedule()];case 7:return d.sent(),[4,b.executeObjectIdsQuery(c)];case 8:return b=d.sent(),[4,this._reschedule()];case 9:return d.sent(),[4,b.executeTimeQuery(c)];case 10:return b=
d.sent(),[4,this._reschedule()];case 11:return d.sent(),[4,b.executeAttributesQuery(c)];case 12:return b=d.sent(),[2,b.size];case 13:k=d.sent();if(k!==m.QUERY_ENGINE_EMPTY_RESULT)throw k;return[2,0];case 14:return[2]}})})};e.prototype.executeQueryForExtent=function(a,b){void 0===a&&(a={});return p(this,void 0,void 0,function(){var c,b,k,g,e,f,h,n;return q(this,function(d){switch(d.label){case 0:c=x.clone(a),k=c.outSR,d.label=1;case 1:return d.trys.push([1,13,,14]),[4,m.normalizeQuery(c,this.definitionExpression,
this.spatialReference)];case 2:return c=d.sent(),[4,this._reschedule()];case 3:return d.sent(),[4,this._checkQuerySupport(c)];case 4:return c=d.sent(),c.returnGeometry=!0,c.returnCentroid=!1,c.outSR=null,[4,this._reschedule()];case 5:return d.sent(),[4,this._executeGeometryQuery(c)];case 6:return b=d.sent(),[4,this._reschedule()];case 7:return d.sent(),[4,b.executeObjectIdsQuery(c)];case 8:return b=d.sent(),[4,this._reschedule()];case 9:return d.sent(),[4,b.executeTimeQuery(c)];case 10:return b=d.sent(),
[4,this._reschedule()];case 11:return d.sent(),[4,b.executeAttributesQuery(c)];case 12:b=d.sent();g=b.size;if(!g)return[2,{count:g,extent:null}];v.set(l,v.NEGATIVE_INFINITY);this.featureStore.forEachBounds(b.items,function(a){return v.expand(l,a)},Z);e={xmin:l[0],ymin:l[1],xmax:l[3],ymax:l[4],spatialReference:m.cleanFromGeometryEngine(this.spatialReference)};this.hasZ&&isFinite(l[2])&&isFinite(l[5])&&(e.zmin=l[2],e.zmax=l[5]);f=L.project(e,b.spatialReference,k);f.spatialReference=m.cleanFromGeometryEngine(k||
this.spatialReference);0===f.xmax-f.xmin&&(h=E.getMetersPerUnitForSR(f.spatialReference),f.xmin-=h,f.xmax+=h);0===f.ymax-f.ymin&&(h=E.getMetersPerUnitForSR(f.spatialReference),f.ymin-=h,f.ymax+=h);this.hasZ&&null!=f.zmin&&null!=f.zmax&&0===f.zmax-f.zmin&&(h=E.getMetersPerUnitForSR(f.spatialReference),f.zmin-=h,f.zmax+=h);return[2,{count:g,extent:f}];case 13:n=d.sent();if(n===m.QUERY_ENGINE_EMPTY_RESULT)return[2,{count:0,extent:null}];throw n;case 14:return[2]}})})};e.prototype.executeQueryForIds=
function(a,b){void 0===a&&(a={});return p(this,void 0,void 0,function(){return q(this,function(c){return[2,this.executeQueryForIdSet(a,b).then(function(a){return N.from(a)})]})})};e.prototype.executeQueryForIdSet=function(a,b){void 0===a&&(a={});return p(this,void 0,void 0,function(){var b,d,k,g,e,f,h,n;return q(this,function(c){switch(c.label){case 0:b=x.clone(a),b.returnGeometry=!1,b.returnCentroid=!1,b.outSR=null,c.label=1;case 1:return c.trys.push([1,12,,13]),[4,m.normalizeQuery(b,this.definitionExpression,
this.spatialReference)];case 2:return b=c.sent(),[4,this._reschedule()];case 3:return c.sent(),[4,this._executeGeometryQuery(b)];case 4:return d=c.sent(),[4,this._reschedule()];case 5:return c.sent(),[4,d.executeObjectIdsQuery(b)];case 6:return d=c.sent(),[4,this._reschedule()];case 7:return c.sent(),[4,d.executeTimeQuery(b)];case 8:return d=c.sent(),[4,this._reschedule()];case 9:return c.sent(),[4,d.executeAttributesQuery(b)];case 10:return d=c.sent(),[4,this._reschedule()];case 11:c.sent();k=d.items;
g=new G.default;e=0;for(f=k;e<f.length;e++)h=f[e],g.add(d.featureAdapter.getObjectId(h));return[2,g];case 12:n=c.sent();if(n===m.QUERY_ENGINE_EMPTY_RESULT)return[2,new G.default];throw n;case 13:return[2]}})})};e.prototype.executeQueryForLatestObservations=function(a,b){var c=this;if(this.timeInfo)return this.executeQuery(a,b).then(function(a){return c._filterLatest(a,c.timeInfo)});W.error(new r("invalid-query","Unable to make time-based query as the underlying service does include TimeInfo"))};e.prototype._reschedule=
function(a){return p(this,void 0,void 0,function(){return q(this,function(b){return this._frameQueue?[2,this._frameQueue.push(a).then(function(a){return a})]:[2,a]})})};e.prototype._update=function(a){for(this._budget=a;!a.done&&this._frameQueue&&this._frameQueue.process();)a.madeProgress();this._budget=null};e.prototype._filterLatest=function(a,b){var c=b.trackIdField,d=b.startTimeField;b=b.endTimeField||d;for(var d=new O.default,e=[],g=0,q=a.features;g<q.length;g++){var f=q[g],h=f.attributes[c],
n=f.attributes[b];(!d.has(h)||d.get(h).attributes[b]<n)&&d.set(h,f)}d.forEach(function(a){return e.push(a)});return M({},a,{features:e})};e.prototype._getAll=function(){if(!this._allItems){var a=[];this.featureStore.forEach(function(b){return a.push(b)});this._allItems=new y.default(a,null,this)}return this._allItems};e.prototype._executeGeometryQuery=function(a){return p(this,void 0,void 0,function(){var b,c,d,e,g,m,f,h,n,l,t,u,r,J,v,w,x,z,C,A,I,E,B,D,H=this;return q(this,function(k){switch(k.label){case 0:b=
a.geometry;c=a.outSR;d=a.spatialRel;e=K.isValid(c)&&!K.equals(this.spatialReference,c);if(g=this.cacheSpatialQueries?e?JSON.stringify({geometry:b,spatialRelationship:d,outSpatialReference:c}):JSON.stringify({geometry:b,spatialRelationship:d}):null)if(m=this._geometryQueryCache.get(g),void 0!==m)return[2,m];f=function(b){return p(H,void 0,void 0,function(){var d;return q(this,function(f){switch(f.label){case 0:return e&&(a.returnGeometry||a.returnCentroid)?[4,b.project(c)]:[3,2];case 1:return d=f.sent(),
g&&this._geometryQueryCache.put(g,d,d.size||1),[2,d];case 2:return g&&this._geometryQueryCache.put(g,b,b.size||1),[2,b]}})})};if(!b)return[2,f(this._getAll())];h=this.featureAdapter;if("esriSpatialRelDisjoint"!==d)return[3,5];n=this._searchFeatures(this._getQueryBBoxes(b));if(!n.length)return[2,f(this._getAll())];u=new G.default;r=0;for(J=n;r<J.length;r++)v=J[r],u.add(h.getObjectId(v));return[4,this._reschedule(u)];case 1:return u=k.sent(),w=0,l=Array(u.size),this.featureStore.forEach(function(a){return l[w++]=
a}),t=u,[4,this._reschedule()];case 2:return k.sent(),[4,F.getSpatialQueryOperator(d,b,this)];case 3:return x=k.sent(),z=function(a){return!t.has(h.getObjectId(a))||x(h.getGeometry(a))},A=y.default.bind,[4,this._runSpatialFilter(l,z)];case 4:return C=new (A.apply(y.default,[void 0,k.sent(),b,this])),[2,f(C)];case 5:return I=this._searchFeatures(this._getQueryBBoxes(b)),I.length?(E=this._canExecuteSoloPass(b,a))?[2,f(new y.default(I,b,this))]:[4,F.getSpatialQueryOperator(d,b,this)]:(C=new y.default([],
b,this),g&&this._geometryQueryCache.put(g,C,C.size||1),[2,C]);case 6:return B=k.sent(),[4,this._runSpatialFilter(I,function(a){return B(h.getGeometry(a))})];case 7:return D=k.sent(),[2,f(new y.default(D,b,this))]}})})};e.prototype._runSpatialFilter=function(a,b){return p(this,void 0,void 0,function(){var c,d,e,g=this;return q(this,function(k){if(!b)return[2,a];if(!this._budget)return[2,a.filter(function(a){return b(a)})];c=0;d=[];e=function(){return p(g,void 0,void 0,function(){var f;return q(this,
function(g){switch(g.label){case 0:if(!(c<a.length))return[3,3];f=a[c];b(f)&&d.push(f);return this._budget.done?[4,this._reschedule()]:[3,2];case 1:return g.sent(),[2,e()];case 2:return++c,[3,0];case 3:return[2]}})})};return[2,this._reschedule().then(function(){return e()}).then(function(){return d})]})})};e.prototype._canExecuteSoloPass=function(a,b){var c=this.geometryType;b=b.spatialRel;return F.canQueryWithRBush(a)&&("esriSpatialRelEnvelopeIntersects"===b||"esriGeometryPoint"===c&&("esriSpatialRelIntersects"===
b||"esriSpatialRelContains"===b||"esriSpatialRelWithin"===b))};e.prototype._getQueryBBoxes=function(a){if(F.canQueryWithRBush(a)){if(H.isExtent(a))return[B.fromValues(a.xmin,a.ymin,a.xmax,a.ymax)];if(H.isPolygon(a))return a.rings.map(function(a){return B.fromValues(a[0][0],a[0][1],a[2][0],a[2][1])})}return[R.getBoundsXY(B.create(),a)]};e.prototype._searchFeatures=function(a){for(var b=0;b<a.length;b++)this.featureStore.forEachInBounds(a[b],function(a){z.add(a)});var c=Array(z.size),d=0;z.forEach(function(a){return c[d++]=
a});z.clear();return c};e.prototype._checkQuerySupport=function(a){return p(this,void 0,void 0,function(){return q(this,function(b){if(0>a.distance||null!=a.geometryPrecision||a.multipatchOption||a.pixelSize||a.relationParam||a.text)throw new r("feature-store:unsupported-query","Unsupported query options",{query:a});return[2,Q.all([this._checkAttributesQuerySupport(a),this._checkStatisticsQuerySupport(a),F.checkSpatialQuerySupport(a,this.geometryType,this.spatialReference),L.checkProjectionSupport(this.spatialReference,
a.outSR)]).then(function(){return a})]})})};e.prototype._checkAttributesQuerySupport=function(a){var b=a.outFields,c=a.orderByFields,d=a.returnDistinctValues;c&&0<c.length&&(c=c.map(function(a){return-1<a.indexOf(" ASC")?a.split(" ASC")[0]:-1<a.indexOf(" DESC")?a.split(" DESC")[0]:a}),t.validateFields(this.fieldsIndex,c,"orderByFields contains missing fields"));if(b&&0<b.length)t.validateFields(this.fieldsIndex,b,"outFields contains missing fields");else if(d)throw new r("feature-store:unsupported-query",
"outFields should be specified for returnDistinctValues",{query:a});t.validateWhere(this.fieldsIndex,a.where)};e.prototype._checkStatisticsQuerySupport=function(a){return p(this,void 0,void 0,function(){var b,c,d,e,g,m,f,h,n,l,p,u;return q(this,function(k){b=a.outStatistics;c=a.groupByFieldsForStatistics;d=a.having;e=c&&c.length;g=b&&b.length;if(d){if(!e||!g)throw new r("feature-store:unsupported-query","outStatistics and groupByFieldsForStatistics should be specified with having",{query:a});t.validateHaving(this.fieldsIndex,
d,b)}if(g){if(m=b.some(function(a){return"exceedslimit"===a.statisticType}))return[2];f=b.map(function(a){return a.onStatisticField});t.validateFields(this.fieldsIndex,f,"onStatisticFields contains missing fields");e&&t.validateFields(this.fieldsIndex,c,"groupByFieldsForStatistics contains missing fields");h=0;for(n=b;h<n.length;h++){l=n[h];p=l.onStatisticField;u=l.statisticType;if("exceedslimit"===u)throw new r("feature-store:unsupported-query","statistic type exceedslimit is not supported",{definition:l,
query:a});if((!e||"count"!==u)&&p&&t.hasInvalidFieldType(p,this.fieldsIndex))throw new r("feature-store:unsupported-query","outStatistics contains non-numeric fields",{definition:l,query:a});}}return[2]})})};return e}();A.default=w;var Z=v.create(),l=v.create()});