// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/extendsHelper ../core/tsSupport/assignHelper ../request ./featureSetCollection ./featureset/polyfill/FeatureLayerAndTable ./featureset/sources/FeatureLayerDynamic ./featureset/sources/FeatureLayerMemory ./featureset/sources/FeatureLayerRelated ./featureset/support/cache ./featureset/support/FeatureSet ../core/promiseUtils ../layers/FeatureLayer ../portal/PortalItem ./featureset/actions/OrderBy ./featureset/actions/Top ./featureset/actions/SpatialFilter ./featureset/actions/AttributeFilter ./featureset/actions/GroupBy".split(" "),
function(M,q,x,y,u,z,r,C,D,E,f,F,m,A,G){function v(e,c){if(f.applicationCache){var b=f.applicationCache.getLayerInfo(e);if(b)return b.then(function(a){return m.resolve(new r({url:e,outFields:c,resourceInfo:a}))});var d=new r({url:e,outFields:c}),b=m.create(function(a,b){d.load().then(function(){a(d.resourceInfo)},function(a){b(a)})});f.applicationCache&&(f.applicationCache.setLayerInfo(e,b),b=b.catch(function(a){f.applicationCache.clearLayerInfo(e);throw a;}));return b.then(function(a){return m.resolve(d)})}return m.resolve(new r({url:e,
outFields:c}))}function w(e,c,b,d,a){return v(e,["*"]).then(function(g){return m.resolve(t(g,c,b,d,a))})}function t(e,c,b,d,a){void 0===c&&(c=null);void 0===b&&(b=null);void 0===d&&(d=!0);void 0===a&&(a=null);return!0===e._hasMemorySource()?new D({layer:e,spatialReference:c,outFields:b,includeGeometry:d,lrucache:a}):new C({layer:e,spatialReference:c,outFields:b,includeGeometry:d,lrucache:a})}function H(e){if(null!==f.applicationCache){var c=f.applicationCache.getLayerInfo(e);if(null!==c)return c}c=
u(e,{responseType:"json",query:{f:"json"}}).then(function(b){return b.data?m.resolve(b.data):m.resolve(null)});null!==f.applicationCache&&(f.applicationCache.setLayerInfo(e,c),c=c.catch(function(b){f.applicationCache.clearLayerInfo(e);throw b;}));return c}function I(e,c){var b="QUERYDATAELEMTS:"+c.toString()+":"+e;if(null!==f.applicationCache){var d=f.applicationCache.getLayerInfo(b);if(null!==d)return d}e=u(e+"/queryDataElements",{method:"post",responseType:"json",query:{layers:JSON.stringify([c.toString()]),
f:"json"}}).then(function(a){if(a.data&&(a=a.data,a.layerDataElements&&a.layerDataElements[0]))return a.layerDataElements[0];throw Error("Not Found");});null!==f.applicationCache&&(f.applicationCache.setLayerInfo(b,e),e=e.catch(function(a){f.applicationCache.clearLayerInfo(b);throw a;}));return e}function B(e){if(null!==f.applicationCache){var c=f.applicationCache.getLayerInfo(e);if(null!==c)return c}c=u(e,{responseType:"json",query:{f:"json"}}).then(function(b){return b.data?(b=b.data,b.layers||
(b.layers=[]),b.tables||(b.tables=[]),m.resolve(b)):m.resolve({layers:[],tables:[]})});null!==f.applicationCache&&(f.applicationCache.setLayerInfo(e,c),c=c.catch(function(b){f.applicationCache.clearLayerInfo(e);throw b;}));return c}Object.defineProperty(q,"__esModule",{value:!0});q.initialiseMetaDataCache=function(){null===f.applicationCache&&(f.applicationCache=new f)};q.constructFeatureSetFromUrl=w;q.constructFeatureSet=t;q.constructAssociationMetaDataFeatureSetFromUrl=function(e,c){var b=null,
d={},a=null;return B(e).then(function(g){if(g.controllerDatasetLayers&&void 0!==g.controllerDatasetLayers.utilityNetworkLayerId&&null!==g.controllerDatasetLayers.utilityNetworkLayerId){if(g.layers)for(var n=0,l=g.layers;n<l.length;n++){var f=l[n];d[f.id]=f.name}if(g.tables)for(n=0,l=g.tables;n<l.length;n++)f=l[n],d[f.id]=f.name;var k=g.controllerDatasetLayers.utilityNetworkLayerId;return I(e,k).then(function(g){if(g){b=g;a={};b.dataElement.domainNetworks||(b.dataElement.domainNetworks=[]);g=0;for(var l=
b.dataElement.domainNetworks;g<l.length;g++){for(var f=l[g],p=0,n=f.edgeSources?f.edgeSources:[];p<n.length;p++){var h=n[p],h={layerId:h.layerId,sourceId:h.sourceId,className:d[h.layerId]?d[h.layerId]:null};h.className&&(a[h.className]=h)}p=0;for(f=f.junctionSources?f.junctionSources:[];p<f.length;p++)h=f[p],h={layerId:h.layerId,sourceId:h.sourceId,className:d[h.layerId]?d[h.layerId]:null},h.className&&(a[h.className]=h)}return H(e+"/"+k).then(function(b){return b.systemLayers&&void 0!==b.systemLayers.associationsTableId&&
null!==b.systemLayers.associationsTableId?w(e+"/"+b.systemLayers.associationsTableId.toString(),c,"OBJECTID FROMNETWORKSOURCEID TONETWORKSOURCEID FROMGLOBALID TOGLOBALID TOTERMINALID FROMTERMINALID ASSOCIATIONTYPE ISCONTENTVISIBLE GLOBALID".split(" "),!1,null).then(function(a){return a.load()}).then(function(b){return{lkp:a,associations:b}}):{associations:null,lkp:null}})}return{associations:null,lkp:null}})}return{associations:null,lkp:null}})};q.constructFeatureSetFromRelationship=function(e,c,
b,d,a,g,f){void 0===d&&(d=null);void 0===a&&(a=null);void 0===g&&(g=!0);void 0===f&&(f=null);var l=e.serviceUrl();if(!l)return null;l="/"===l.charAt(l.length-1)?l+c.relatedTableId.toString():l+"/"+c.relatedTableId.toString();return w(l,d,a,g,f).then(function(h){return new E({layer:e,relatedLayer:h,relationship:c,objectId:b,spatialReference:d,outFields:a,includeGeometry:g,lrucache:f})})};F._polyfill.table=r;var K=function(e){function c(b,d,a){void 0===d&&(d=null);void 0===a&&(a=null);var g=e.call(this)||
this;g._map=b;g._overridespref=d;g.lrucache=a;g._instantLayers=[];return g}x(c,e);c.prototype.makeAndAddFeatureSet=function(b,d,a){void 0===d&&(d=!0);void 0===a&&(a=null);var g=t(b,this._overridespref,null===a?["*"]:a,d,this.lrucache);this._instantLayers.push({featureset:g,opitem:b,includeGeometry:d,outFields:JSON.stringify(a)});return g};c.prototype.featureSetByName=function(b,d,a){var g=this;void 0===d&&(d=!0);void 0===a&&(a=null);if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return this._map.load().then(function(){try{return g.featureSetByName(b,
d,a)}catch(p){return m.reject(p)}});null===a&&(a=["*"]);a=a.slice(0);a=a.sort();for(var c=JSON.stringify(a),e=0;e<this._instantLayers.length;e++){var f=this._instantLayers[e];if(f.opitem.title===b&&f.includeGeometry===d&&f.outFields===c)return this.resolvePromise(this._instantLayers[e].featureset)}if(c=this._map.layers.find(function(a){return a instanceof A&&a.title===b?!0:!1}))return this.resolvePromise(this.makeAndAddFeatureSet(c,d,a));if(this._map.tables){var k=this._map.tables.find(function(a){return a.title&&
a.title===b||a.title&&a.title===b?!0:!1});if(k)return k._materializedTable||(c=k.outFields?k:y({},k,{outFields:["*"]}),k._materializedTable=new r(c)),k._materializedTable.load().then(function(){return g.resolvePromise(g.makeAndAddFeatureSet(k._materializedTable,d,a))})}return this.resolvePromise(null)};c.prototype.featureSetById=function(b,d,a){var c=this;void 0===d&&(d=!0);void 0===a&&(a=["*"]);if(void 0!==this._map.loaded&&void 0!==this._map.load&&!1===this._map.loaded)return this._map.load().then(function(){try{return c.featureSetById(b,
d,a)}catch(p){return m.reject(p)}});null===a&&(a=["*"]);a=a.slice(0);a=a.sort();for(var e=JSON.stringify(a),f=0;f<this._instantLayers.length;f++){var h=this._instantLayers[f];if(h.opitem.id===b&&h.includeGeometry===d&&h.outFields===e)return this.resolvePromise(this._instantLayers[f].featureset)}if(e=this._map.layers.find(function(a){return a instanceof A&&a.id===b?!0:!1}))return this.resolvePromise(this.makeAndAddFeatureSet(e,d,a));if(this._map.tables){var k=this._map.tables.find(function(a){return a.id===
b?!0:!1});if(k)return k._materializedTable||(e=y({},k,{outFields:["*"]}),k._materializedTable=new r(e)),k._materializedTable.load().then(function(){return c.resolvePromise(c.makeAndAddFeatureSet(k._materializedTable,d,a))})}return this.resolvePromise(null)};return c}(z),L=function(e){function c(b,d,a){void 0===d&&(d=null);void 0===a&&(a=null);var c=e.call(this)||this;c._url=b;c._overridespref=d;c.lrucache=a;c.metadata=null;c._instantLayers=[];return c}x(c,e);Object.defineProperty(c.prototype,"url",
{get:function(){return this._url},enumerable:!0,configurable:!0});c.prototype.makeAndAddFeatureSet=function(b,c,a){void 0===c&&(c=!0);void 0===a&&(a=null);var d=t(b,this._overridespref,null===a?["*"]:a,c,this.lrucache);this._instantLayers.push({featureset:d,opitem:b,includeGeometry:c,outFields:JSON.stringify(a)});return d};c.prototype._loadMetaData=function(){var b=this;return B(this._url).then(function(c){return b.metadata=c})};c.prototype.load=function(){return this._loadMetaData()};c.prototype.clone=
function(){return new c(this._url,this._overridespref,this.lrucache)};c.prototype.featureSetByName=function(b,c,a){var e=this;void 0===c&&(c=!0);void 0===a&&(a=null);null===a&&(a=["*"]);a=a.slice(0);a=a.sort();for(var d=JSON.stringify(a),f=0;f<this._instantLayers.length;f++){var h=this._instantLayers[f];if(h.opitem.title===b&&h.includeGeometry===c&&h.outFields===d)return this.resolvePromise(this._instantLayers[f].featureset)}return this._loadMetaData().then(function(d){for(var f=null,g=0,h=d.layers?
d.layers:[];g<h.length;g++){var k=h[g];k.name===b&&(f=k)}if(!f)for(g=0,d=d.tables?d.tables:[];g<d.length;g++)k=d[g],k.name===b&&(f=k);return f?v(e._url+"/"+f.id,["*"]).then(function(b){return e.makeAndAddFeatureSet(b,c,a)}):e.resolvePromise(null)})};c.prototype.featureSetById=function(b,c,a){var f=this;void 0===c&&(c=!0);void 0===a&&(a=["*"]);null===a&&(a=["*"]);a=a.slice(0);a=a.sort();var e=JSON.stringify(a);b=null!==b&&void 0!==b?b.toString():"";for(var d=0;d<this._instantLayers.length;d++){var h=
this._instantLayers[d];if(h.opitem.id===b&&h.includeGeometry===c&&h.outFields===e)return this.resolvePromise(this._instantLayers[d].featureset)}return this._loadMetaData().then(function(d){for(var e=null,g=0,h=d.layers?d.layers:[];g<h.length;g++){var k=h[g];null!==k.id&&void 0!==k.id&&k.id.toString()===b&&(e=k)}if(!e)for(g=0,d=d.tables?d.tables:[];g<d.length;g++)k=d[g],null!==k.id&&void 0!==k.id&&k.id.toString()===b&&(e=k);return e?v(f._url+"/"+e.id,["*"]).then(function(b){return f.makeAndAddFeatureSet(b,
c,a)}):f.resolvePromise(null)})};return c}(z);q.createFeatureSetCollectionFromMap=function(e,c,b){void 0===b&&(b=null);return new K(e,c,b)};q.createFeatureSetCollectionFromService=function(e,c,b){void 0===b&&(b=null);return new L(e,c,b)};q.constructFeatureSetFromPortalItem=function(e,c,b,d,a,g,n){if(f.applicationCache){var l=f.applicationCache.getLayerInfo(e+":"+g.url);if(l)return l.then(function(e){try{var f=new r({url:e.url+"/"+c,outFields:["*"]});return m.resolve(t(f,b,d,a,n))}catch(p){return m.reject(p)}},
function(a){return m.reject(a)})}return m.create(function(h,k){var l=(new G({id:e,portal:g})).load();f.applicationCache&&f.applicationCache.setLayerInfo(e+":"+g.url,l);l.then(function(e){try{var f=new r({url:e.url+"/"+c,outFields:["*"]});h(t(f,b,d,a,n))}catch(J){k(J)}},function(a){f.applicationCache&&f.applicationCache.clearLayerInfo(e+":"+g.url);k(a)})})}});