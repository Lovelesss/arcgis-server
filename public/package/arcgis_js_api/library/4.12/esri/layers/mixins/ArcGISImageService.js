// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/tsSupport/declareExtendsHelper ../../core/tsSupport/decorateHelper ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../Graphic ../../renderers ../../request ../../core/asyncUtils ../../core/Error ../../core/jsonMap ../../core/lang ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/urlUtils ../../core/accessorSupport/decorators ../../core/accessorSupport/ensureType ../../geometry/Extent ../../geometry/Point ../../geometry/SpatialReference ./ArcGISService ../support/commonProperties ../support/DimensionalDefinition ../support/ExportImageServiceParameters ../support/Field ../support/imageryRendererUtils ../support/MosaicRule ../support/PixelBlock ../support/RasterFunction ../support/RasterInfo ../support/RasterJobHandler ../support/rasterFormats/RasterCodec ../../renderers/support/jsonUtils ../../tasks/ImageServiceIdentifyTask ../../tasks/QueryTask ../../tasks/support/FeatureSet ../../tasks/support/ImageServiceIdentifyParameters".split(" "),
function(fa,ga,m,M,d,D,E,N,O,k,P,v,w,F,Q,y,n,R,c,S,A,T,B,U,V,W,X,p,Y,x,Z,z,G,aa,C,ba,ca,da,H,ea){var I=Q.getLogger("esri.layers.mixins.ArcGISImageService"),J=w.strict()({RSP_NearestNeighbor:"nearest",RSP_BilinearInterpolation:"bilinear",RSP_CubicConvolution:"cubic",RSP_Majority:"majority"}),K=w.strict()({esriNoDataMatchAny:"any",esriNoDataMatchAll:"all"}),L=w.strict()({U1:"u1",U2:"u2",U4:"u4",U8:"u8",S8:"s8",U16:"u16",S16:"s16",U32:"u32",S32:"s32",F32:"f32",F64:"f64",C64:"c64",C128:"c128",UNKNOWN:"unknown"});
return function(w){function b(a){a=w.call(this)||this;a._functionRasterInfos={};a._rasterJobHandler=null;a._defaultServiceMosaicRule=null;a.rasterAttributeTableFieldPrefix="Raster.";a.adjustAspectRatio=null;a.bandCount=null;a.bandIds=void 0;a.capabilities=null;a.compressionQuality=void 0;a.compressionTolerance=.01;a.copyright=null;a.exportImageServiceParameters=null;a.rasterInfo=null;a.fields=null;a.fullExtent=null;a.hasMultidimensions=!1;a.hasRasterAttributeTable=!1;a.imageMaxHeight=4100;a.imageMaxWidth=
4100;a.interpolation=void 0;a.multidimensionalInfo=null;a.noData=null;a.noDataInterpretation=void 0;a.objectIdField=null;a.pixelSizeX=null;a.pixelSizeY=null;a.pixelFilter=null;a.raster=void 0;a.viewId=void 0;a.renderer=null;a.rasterAttributeTable=null;a.rasterFunctionInfos=null;a.serviceDataType=null;a.spatialReference=null;a.pixelType=null;a.serviceRasterInfo=null;a.url=null;a.version=null;return a}M(b,w);b.prototype.initialize=function(){this._set("exportImageServiceParameters",new X.ExportImageServiceParameters({layer:this}))};
Object.defineProperty(b.prototype,"queryTask",{get:function(){return new da({url:this.url})},enumerable:!0,configurable:!0});b.prototype.readCapabilities=function(a,e,b){return a&&a.split(",").map(function(a){return a.trim()})};b.prototype.writeCompressionQuality=function(a,e,b){null!=a&&"lerc"!==this.format&&(e[b]=a)};b.prototype.writeCompressionTolerance=function(a,e,b){"lerc"===this.format&&null!=a&&(e[b]=a)};Object.defineProperty(b.prototype,"definitionExpression",{get:function(){return this._get("definitionExpression")||
this.mosaicRule&&this.mosaicRule.where},set:function(a){this._set("definitionExpression",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"domainFields",{get:function(){I.warn("domainFields is deprecated, filter it out from ImageryLayer.fields instead.");return this.fields&&this.fields.filter(function(a){return a.domain&&"coded-value"===a.domain.type})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"format",{get:function(){return this._get("format")||(null!=
this.pixelFilter?"lerc":"jpgpng")},set:function(a){a&&-1<"png png8 png24 png32 jpg bmp jpgpng lerc tiff".split(" ").indexOf(a.toLowerCase())&&this._set("format",a.toLowerCase())},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"mosaicRule",{set:function(a){a&&a.mosaicMethod&&(a=x.fromJSON(m({},a.toJSON(),{mosaicMethod:a.mosaicMethod,mosaicOperation:a.mosaicOperation})));this._set("mosaicRule",a)},enumerable:!0,configurable:!0});b.prototype.readMosaicRule=function(a,e){return x.fromJSON(a||
e.mosaicRule||e)};b.prototype.writeMosaicRule=function(a,e,b,f){a=this.mosaicRule;f=this.definitionExpression;a?f!==a.where&&(a=a.clone(),a.where=f):f&&(a=new x({where:f}));this._isValidCustomizedMosaicRule(a)&&(e[b]=a.toJSON())};b.prototype.writeNoData=function(a,e,b){null!=a&&"number"===typeof a&&(e[b]=a)};b.prototype.readObjectIdField=function(a,b){a||(a=(a=b.fields.filter(function(a){return"esriFieldTypeOID"===a.type||"oid"===a.type}))&&a[0]&&a[0].name);return a};Object.defineProperty(b.prototype,
"parsedUrl",{get:function(){return this.url?R.urlToObject(this.url):null},enumerable:!0,configurable:!0});b.prototype.readRenderer=function(a,b,l){a=ba.read(a,b&&b.layerDefinition,l)||void 0;Y.isSupportedRendererType(a)||I.warn("ArcGISImageService","Imagery layer doesn't support given renderer type.");return a};Object.defineProperty(b.prototype,"rasterFields",{get:function(){var a=this.rasterAttributeTableFieldPrefix||"Raster.",b=new p({name:"Raster.ItemPixelValue",alias:"Item Pixel Value",domain:null,
editable:!1,length:50,type:"string"}),l=new p({name:"Raster.ServicePixelValue",alias:"Service Pixel Value",domain:null,editable:!1,length:50,type:"string"}),f=new p({name:"Raster.ServicePixelValue.Raw",alias:"Raw Service Pixel Value",domain:null,editable:!1,length:50,type:"string"}),c=this.fields?F.clone(this.fields):[];c.push(l);this.capabilities&&this.capabilities.some(function(a){return"catalog"===a.toLowerCase()})&&this.fields&&0<this.fields.length&&c.push(b);10.4<=this.version&&this.rasterFunctionInfos&&
this.rasterFunctionInfos.some(function(a){return"none"===a.name.toLowerCase()})&&c.push(f);this.rasterFunctionInfos&&this.rasterFunctionInfos.filter(function(a){return"none"!==a.name.toLowerCase()}).forEach(function(a){c.push(new p({name:"Raster.ServicePixelValue."+a.name,alias:a.name,domain:null,editable:!1,length:50,type:"string"}))});null==this.pixelFilter||"esriImageServiceDataTypeVector-UV"!==this.serviceDataType&&"esriImageServiceDataTypeVector-MagDir"!==this.serviceDataType||(c.push(new p({name:"Raster.Magnitude",
alias:"Magnitude",domain:null,editable:!1,type:"double"})),c.push(new p({name:"Raster.Direction",alias:"Direction",domain:null,editable:!1,type:"double"})));(b=this.rasterInfo.attributeTable&&this.rasterInfo.attributeTable.fields||null)&&0<b.length&&(b=b.filter(function(a){return"esriFieldTypeOID"!==a.type&&"value"!==a.name.toLowerCase()}).map(function(b){var e=F.clone(b);e.name=a+b.name;return e}),c=c.concat(b));return c},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"renderingRule",
{set:function(a){a&&a.rasterFunction&&(a=z.fromJSON(m({},a.toJSON(),{rasterFunction:a.rasterFunction,rasterFunctionArguments:a.rasterFunctionArguments})));this._set("renderingRule",a)},enumerable:!0,configurable:!0});b.prototype.readRenderingRule=function(a,b){a=b.rasterFunctionInfos;return b.renderingRule||a&&a.length&&"None"!==a[0].name?z.fromJSON(b.renderingRule||{rasterFunctionInfos:b.rasterFunctionInfos}):null};b.prototype.readSpatialReference=function(a,b){return(a=a||b.extent.spatialReference)?
B.fromJSON(a):null};b.prototype.readPixelType=function(a,b){return L.fromJSON(a)||a};b.prototype.writePixelType=function(a,b,c){if(y.isNone(this.serviceRasterInfo)||this.pixelType!==this.serviceRasterInfo.pixelType)b[c]=L.toJSON(a)};b.prototype.readVersion=function(a,b){(a=b.currentVersion)||(a=b.hasOwnProperty("fields")||b.hasOwnProperty("timeInfo")?10:9.3);return a};b.prototype.applyFilter=function(a){if(!this.pixelFilter)return a;a=this._clonePixelData(a);this.pixelFilter(a);return a};b.prototype.fetchImage=
function(a,b,c,f){var e=this;void 0===f&&(f={});if(null==a||null==b||null==c)return n.reject(new v("imagery-layer:fetch-image","Insufficient parameters for requesting an image. A valid extent, width and height values are required."));var l=this.renderer||this.popupEnabled?this.generateRasterInfo(this.renderingRule,{signal:f.signal}):this.generateRasterInfo(null);return P.safeCast(l).then(function(g){g&&(e.rasterInfo=g);g={imageServiceParameters:e.getExportImageServiceParameters(a,b,c,f.timeExtent),
imageProps:{extent:a,width:b,height:c,format:e.format},requestAsImageElement:f.requestAsImageElement&&!e.pixelFilter||!1,signal:f.signal};return e._requestArrayBuffer(g)})};b.prototype.fetchKeyProperties=function(a){a=a&&a.renderingRule&&a.renderingRule.toJSON();return k(this.parsedUrl.path+"/keyProperties",{query:this._getQueryParams({renderingRule:10.3<=this.version&&a?JSON.stringify(a):null})}).then(function(a){return a.data})};b.prototype.fetchRasterAttributeTable=function(a){a=a&&a.renderingRule&&
a.renderingRule.toJSON();return 10.1>this.version||!this.hasRasterAttributeTable?n.reject(new v("#fetchRasterAttributeTable()","Failed to get rasterAttributeTable")):k(this.parsedUrl.path+"/rasterAttributeTable",{query:this._getQueryParams({renderingRule:10.3<=this.version&&a?JSON.stringify(a):null})}).then(function(a){return H.fromJSON(a.data)})};b.prototype.generateRasterInfo=function(a,b){return E(this,void 0,void 0,function(){var e,c;return D(this,function(f){switch(f.label){case 0:return a?this._functionRasterInfos[a.functionName]?
[2,this._functionRasterInfos[a.functionName]]:[4,k(this.parsedUrl.path,m({query:this._getQueryParams({renderingRule:a}),responseType:"json"},b))]:[2,null];case 1:return e=f.sent().data,[4,this._fetchRasterAux(m({serviceInfo:e,renderingRule:a},b))];case 2:return c=f.sent(),this._functionRasterInfos[a.functionName]=c,[2,c]}})})};b.prototype.getExportImageServiceParameters=function(a,b,c,f){a=a.clone().shiftCentralMeridian();var e=a.spatialReference&&(a.spatialReference.wkid||JSON.stringify(a.spatialReference.toJSON()));
y.isSome(this.serviceRasterInfo)&&this.pixelType!==this.serviceRasterInfo.pixelType&&(this.exportImageServiceParameters.pixelType=this.pixelType);var d=this.exportImageServiceParameters.toJSON(),g=d.bandIds,l=d.noData,h=d.mosaicRule,k=d.renderingRule;g instanceof Array&&0<g.length&&(d.bandIds=g.join(","));l instanceof Array&&0<l.length&&(d.noData=l.join(","));var r=this.timeInfo;h&&h.multidimensionalDefinition&&f&&r&&r.startField&&(h.multidimensionalDefinition=h.multidimensionalDefinition.filter(function(a){return a.dimensionName!==
r.startField}));d.mosaicRule=h&&JSON.stringify(h);d.renderingRule=k&&JSON.stringify(k);g={};if(f)if(l=f.toJSON(),f=l.start,l=l.end,f&&l&&f===l)g.time=""+f;else if(null!=f||null!=l)g.time=(null==f?"null":f)+","+(null==l?"null":l);return m({bbox:a.xmin+","+a.ymin+","+a.xmax+","+a.ymax,bboxSR:e,imageSR:e,size:b+","+c},d,g)};b.prototype.queryRasters=function(a){return this.queryTask.execute(a)};b.prototype.queryVisibleRasters=function(a,b){var c=this;if(!a)return n.reject(new v("imagery-layer: query-visible-rasters",
"missing query parameter"));var e=b||{pixelSize:null,returnDomainValues:!1,returnTopmostRaster:!1,showNoDataRecords:!1};b=e.pixelSize;var d=e.returnDomainValues,q=e.returnTopmostRaster,g=e.showNoDataRecords,e=!1,u=null;a.outFields&&10.4<=this.version&&(u=a.outFields.filter(function(a){return-1<a.toLowerCase().indexOf("raster.servicepixelvalue")&&24<a.length}).map(function(a){return new z({functionName:a.slice(25).replace("Raw","None")})}),e=a.outFields.some(function(a){return-1===a.toLowerCase().indexOf("raster.servicepixelvalue")}),
0===u.length&&(u=null));var h=!a.outSpatialReference||a.outSpatialReference.equals(this.spatialReference),k=new ea({geometry:a.geometry,timeExtent:a.timeExtent,mosaicRule:this.mosaicRule,renderingRule:this.renderingRule,renderingRules:u,pixelSize:b,returnCatalogItems:e,returnGeometry:h,maxItemCount:q?1:null}),r=new ca({url:this.url}),m=this.generateRasterInfo(this.renderingRule);return n.create(function(a,b){m.then(function(){r.execute(k).then(function(b){return a(c._processVisibleRastersResponse(b,
{returnDomainValues:d,renderingRules:u,showNoDataRecords:g}))}).catch(function(){throw new v("imagery-layer:query-visible-rasters","encountered error when querying visible rasters");})})})};b.prototype._fetchService=function(a){return E(this,void 0,void 0,function(){var b,c,d,t,q,g,u,h=this;return D(this,function(e){switch(e.label){case 0:return(b=this.resourceInfo)?[3,2]:[4,k(this.parsedUrl.path,{query:this._getQueryParams(),responseType:"json",signal:a})];case 1:c=e.sent(),d=c.data,t=c.ssl,b=d,
t&&(this.url=this.url.replace(/^http:/i,"https:")),e.label=2;case 2:return this.read(b,{origin:"service",url:this.parsedUrl}),this._defaultServiceMosaicRule=x.fromJSON(b),this._rasterJobHandler=new aa,q=this._rasterJobHandler.initialize(),y.isSome(this.serviceRasterInfo)&&!this.rasterInfo&&(this.rasterInfo=this.serviceRasterInfo),g=this.serviceRasterInfo?n.resolve(this.serviceRasterInfo):this._fetchRasterAux({serviceInfo:b,signal:a}).then(function(a){h._set("serviceRasterInfo",a);h._set("rasterInfo",
a)}),u=this.renderingRule?this.generateRasterInfo(this.renderingRule,{signal:a}):null,[2,n.all([q,g,u]).then(function(a){(a=y.isSome(h.serviceRasterInfo)&&h.serviceRasterInfo.multidimensionalInfo)&&h._updateMultidimensionalDefinition(a)})]}})})};b.prototype._clonePixelData=function(a){return null==a?a:{extent:a.extent&&a.extent.clone(),pixelBlock:a.pixelBlock&&a.pixelBlock.clone()}};b.prototype._getQueryParams=function(a){return m({raster:this.raster,viewId:this.viewId,f:"json"},a)};b.prototype._decodePixelBlock=
function(a,b,c){return this._rasterJobHandler?this._rasterJobHandler.decode({data:a,options:b}):C.decode(a,b,c)};b.prototype._fetchRasterAux=function(a){var b=a&&a.serviceInfo;if(!b)return n.reject(new v("imagery-layer:fetch-metadata","valid serviceInfo is required"));var c=a.renderingRule?JSON.stringify(a.renderingRule.toJSON()):null,d=a.signal;a=b.hasRasterAttributeTable&&10.1<=this.version?k(this.parsedUrl.path+"/rasterAttributeTable",{query:this._getQueryParams({renderingRule:10.1<=this.version?
c:null}),signal:d}).then(function(a){return H.fromJSON(a.data)}).catch(function(a){return null}):!1;var t=b.hasColormap&&10.1<=this.version?k(this.parsedUrl.path+"/colormap",{query:this._getQueryParams({renderingRule:10.6<=this.version?c:null}),signal:d}).then(function(a){return a.data&&a.data.colormap}):!1,q=b.hasHistograms&&10.1<=this.version?k(this.parsedUrl.path+"/histograms",{query:this._getQueryParams({renderingRule:10.1<=this.version?c:null}),signal:d}).then(function(a){return a.data&&a.data.histograms}):
!1,c=10.3<=this.version?k(this.parsedUrl.path+"/keyProperties",{query:this._getQueryParams({renderingRule:c}),signal:d}).then(function(a){return a.data}).catch(function(a){}):!1,d=b.hasMultidimensions&&10.3<=this.version?k(this.parsedUrl.path+"/multidimensionalInfo",{query:this._getQueryParams(),signal:d}).then(function(a){return a.data&&a.data.multidimensionalInfo}):!1;return n.all([a,t,q,c,d]).then(function(a){var c=null;if(b.minValues&&b.minValues.length===b.bandCount)for(var c=[],d=0;d<b.minValues.length;d++)c.push({min:b.minValues[d],
max:b.maxValues[d],avg:b.meanValues[d],stddev:b.stdvValues[d]});d=B.fromJSON(b.spatialReference||b.extent.spatialReference);return new G({bandCount:b.bandCount,extent:A.fromJSON(b.extent),spatialReference:d,pixelSize:new T({x:b.pixelSizeX,y:b.pixelSizeY,spatialReference:d}),pixelType:b.pixelType.toLowerCase(),statistics:c,attributeTable:a[0]||null,colormap:a[1]||null,histograms:a[2]||null,keyProperties:a[3]||null,multidimensionalInfo:a[4]||null})})};b.prototype._requestArrayBuffer=function(a){var b=
this,c=a.imageProps,d=a.signal;return a.requestAsImageElement&&!this.pixelFilter&&c.format&&-1<c.format.indexOf("png")?k(this.parsedUrl.path+"/exportImage",{responseType:"image",query:this._getQueryParams(m({f:"image"},a.imageServiceParameters)),signal:d}).then(function(a){return{imageElement:a.data,params:c}}):k(this.parsedUrl.path+"/exportImage",{responseType:"array-buffer",query:this._getQueryParams(m({f:"image"},a.imageServiceParameters)),signal:d}).then(function(a){a=a.data;var e=c.format||"jpgpng",
f=e;"bsq"!==f&&"bip"!==f&&(f=C.getFormat(a));if(!f)throw new v("imagery-layer:fetch-image","unsupported format signature "+String.fromCharCode.apply(null,new Uint8Array(a)));var f=-1<e.indexOf("png")&&("png"===f||"jpg"===f),l={signal:d};return f?C.decode(a,m({useCanvas:!0},c),l).then(function(a){return{pixelData:{pixelBlock:a,extent:c.extent},params:c}}):b._decodePixelBlock(a,{width:c.width,height:c.height,planes:null,pixelType:null,noDataValue:null,format:e},l).then(function(a){return{pixelData:{pixelBlock:a,
extent:c.extent},params:c}})})};b.prototype._isValidCustomizedMosaicRule=function(a){return a&&JSON.stringify(a.toJSON())!==JSON.stringify(this._defaultServiceMosaicRule&&this._defaultServiceMosaicRule.toJSON())};b.prototype._updateMultidimensionalDefinition=function(a){if(!this._isValidCustomizedMosaicRule(this.mosaicRule)){var b=a.variables[0].dimensions;a=[];for(var c in b)if(b.hasOwnProperty(c)){var d=b[c],t=d.extent,q=!0,g=[t[0]];d.hasRanges&&!0===d.hasRanges?(q=!1,g=[d.values[0]]):"stdz"===
d.name.toLowerCase()&&Math.abs(t[1])<=Math.abs(t[0])&&(g=[t[1]]);a.push(new W({variableName:"",dimensionName:b[c].name,isSlice:q,values:g}))}0<a.length&&(this.mosaicRule=this.mosaicRule||new x,c=this.mosaicRule.multidimensionalDefinition,!c||c&&0>=c.length)&&(this.mosaicRule.multidimensionalDefinition=a)}};b.prototype._processVisibleRastersResponse=function(a,b){b=b||{};var c=a.value,d=b.renderingRules,e=b.showNoDataRecords;b=b.returnDomainValues;var q=a.processedValues,g=a.catalogItems&&a.catalogItems.features,
k=a.properties&&a.properties.Values&&a.properties.Values.map(function(a){return a.replace(/ /gi,", ")})||[],h=this.objectIdField||"ObjectId";a=-1<c.toLowerCase().indexOf("nodata");var m=[];!c||g||a||(g={},g[h]=0,g=new N(this.fullExtent,null,g),k=[c],g=[g]);if(!g)return[];for(var r,n=0;n<g.length;n++){h=g[n];if(null!=c&&!a){r=k[n];if("nodata"===r.toLowerCase()&&!e)continue;h.attributes["Raster.ItemPixelValue"]=r;h.attributes["Raster.ServicePixelValue"]=c;this._updateFeatureWithMagDirValues(h,r);this._updateFeatureWithRasterAttributeTableValues(h,
r)}h.sourceLayer=this;b&&this._updateFeatureWithDomainValues(h);if(d&&q&&d.length===q.length)for(var p=0;p<d.length;p++)r="none"===d[p].functionName.toLowerCase()?"Raw":d[p].functionName,h.attributes["Raster.ServicePixelValue."+r]=q[p];m.push(g[n])}return m};b.prototype._updateFeatureWithRasterAttributeTableValues=function(a,b){var c=this,d=this.rasterInfo&&this.rasterInfo.attributeTable,e=d&&d.features;if(e){var d=d.fields,k=d.map(function(a){return a.name}).filter(function(a){return"value"===a.toLowerCase()}),
g=k&&k[0];if(g){var m=e.filter(function(a){return a.attributes[g]===(null!=b?parseInt(b,10):null)});m&&m[0]&&d.forEach(function(b){a.attributes[c.rasterAttributeTableFieldPrefix+b.name]=m[0].attributes[b.name]})}}};b.prototype._updateFeatureWithMagDirValues=function(a,b){if(this.pixelFilter&&("esriImageServiceDataTypeVector-UV"===this.serviceDataType||"esriImageServiceDataTypeVector-MagDir"===this.serviceDataType)){var c=b.replace(" ",",").split(",").map(function(a){return parseFloat(a)});b=c.map(function(a){return[a]});
c=c.map(function(a){return{minValue:a,maxValue:a,noDataValue:null}});b=new Z({height:1,width:1,pixelType:"f32",pixels:b,statistics:c});this.pixelFilter({pixelBlock:b,extent:new A(0,0,0,0,this.spatialReference)});a.attributes["Raster.Magnitude"]=b.pixels[0][0];a.attributes["Raster.Direction"]=b.pixels[1][0]}};b.prototype._updateFeatureWithDomainValues=function(a){var b=this.fields&&this.fields.filter(function(a){return a.domain&&"coded-value"===a.domain.type});null!=b&&b.forEach(function(b){var c=
a.attributes[b.name];if(null!=c){var d=b.domain.codedValues.filter(function(a){return a.code===c})[0];d&&(a.attributes[b.name]=d.name)}})};d([c.property()],b.prototype,"_functionRasterInfos",void 0);d([c.property()],b.prototype,"_rasterJobHandler",void 0);d([c.property()],b.prototype,"_defaultServiceMosaicRule",void 0);d([c.property()],b.prototype,"rasterAttributeTableFieldPrefix",void 0);d([c.property({readOnly:!0,dependsOn:["url"]})],b.prototype,"queryTask",null);d([c.property()],b.prototype,"adjustAspectRatio",
void 0);d([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.bandCount")],b.prototype,"bandCount",void 0);d([c.property({type:[S.Integer],json:{write:!0}})],b.prototype,"bandIds",void 0);d([c.property({readOnly:!0})],b.prototype,"capabilities",void 0);d([c.reader("capabilities")],b.prototype,"readCapabilities",null);d([c.property({type:Number})],b.prototype,"compressionQuality",void 0);d([c.writer("compressionQuality")],b.prototype,"writeCompressionQuality",null);d([c.property({type:Number})],
b.prototype,"compressionTolerance",void 0);d([c.writer("compressionTolerance")],b.prototype,"writeCompressionTolerance",null);d([c.property({json:{read:{source:"copyrightText"}}})],b.prototype,"copyright",void 0);d([c.property({json:{read:{source:"layerDefinition.definitionExpression"},write:{target:"layerDefinition.definitionExpression"}}})],b.prototype,"definitionExpression",null);d([c.property({type:[p],dependsOn:["fields"]})],b.prototype,"domainFields",null);d([c.property({readOnly:!0,constructOnly:!0})],
b.prototype,"exportImageServiceParameters",void 0);d([c.property()],b.prototype,"rasterInfo",void 0);d([c.property({readOnly:!0,type:[p]})],b.prototype,"fields",void 0);d([c.property({type:String,json:{write:!0}})],b.prototype,"format",null);d([c.property({type:A})],b.prototype,"fullExtent",void 0);d([c.property({readOnly:!0})],b.prototype,"hasMultidimensions",void 0);d([c.property({readOnly:!0})],b.prototype,"hasRasterAttributeTable",void 0);d([c.property({json:{read:{source:"maxImageHeight"}}})],
b.prototype,"imageMaxHeight",void 0);d([c.property({json:{read:{source:"maxImageWidth"}}})],b.prototype,"imageMaxWidth",void 0);d([c.property({type:String,json:{read:{reader:J.read},write:{writer:J.write}}})],b.prototype,"interpolation",void 0);d([c.property({type:x})],b.prototype,"mosaicRule",null);d([c.reader("mosaicRule",["mosaicRule","defaultMosaicMethod"])],b.prototype,"readMosaicRule",null);d([c.writer("mosaicRule")],b.prototype,"writeMosaicRule",null);d([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.multidimensionalInfo")],
b.prototype,"multidimensionalInfo",void 0);d([c.property()],b.prototype,"noData",void 0);d([c.writer("noData")],b.prototype,"writeNoData",null);d([c.property({type:String,json:{read:{reader:K.read},write:{writer:K.write}}})],b.prototype,"noDataInterpretation",void 0);d([c.property({type:String,readOnly:!0,json:{read:{source:["fields"]}}})],b.prototype,"objectIdField",void 0);d([c.reader("objectIdField")],b.prototype,"readObjectIdField",null);d([c.property({readOnly:!0,dependsOn:["url"]})],b.prototype,
"parsedUrl",null);d([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.pixelSize.x")],b.prototype,"pixelSizeX",void 0);d([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.pixelSize.y")],b.prototype,"pixelSizeY",void 0);d([c.property({type:Function})],b.prototype,"pixelFilter",void 0);d([c.property()],b.prototype,"raster",void 0);d([c.property()],b.prototype,"viewId",void 0);d([c.property({types:O.rasterRendererTypes,json:{read:{source:"layerDefinition.drawingInfo.renderer"},write:{target:"layerDefinition.drawingInfo.renderer"}}})],
b.prototype,"renderer",void 0);d([c.reader("renderer")],b.prototype,"readRenderer",null);d([c.property({readOnly:!0}),c.aliasOf("serviceRasterInfo.attributeTable")],b.prototype,"rasterAttributeTable",void 0);d([c.property({readOnly:!0,dependsOn:["fields","rasterInfo"]})],b.prototype,"rasterFields",null);d([c.property({readOnly:!0})],b.prototype,"rasterFunctionInfos",void 0);d([c.property({type:z,json:{write:!0}})],b.prototype,"renderingRule",null);d([c.reader("renderingRule",["renderingRule","rasterFunctionInfos"])],
b.prototype,"readRenderingRule",null);d([c.property()],b.prototype,"serviceDataType",void 0);d([c.property({readOnly:!0,type:B})],b.prototype,"spatialReference",void 0);d([c.reader("spatialReference",["spatialReference","extent"])],b.prototype,"readSpatialReference",null);d([c.property()],b.prototype,"pixelType",void 0);d([c.reader("pixelType")],b.prototype,"readPixelType",null);d([c.writer("pixelType")],b.prototype,"writePixelType",null);d([c.property()],b.prototype,"resourceInfo",void 0);d([c.property({constructOnly:!0,
type:G})],b.prototype,"serviceRasterInfo",void 0);d([c.property(V.url)],b.prototype,"url",void 0);d([c.property({readOnly:!0})],b.prototype,"version",void 0);d([c.reader("version",["currentVersion","fields","timeInfo"])],b.prototype,"readVersion",null);return b=d([c.subclass("esri.layers.mixins.ArcGISImageService")],b)}(c.declared(U))});