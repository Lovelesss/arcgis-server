// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../../request","../../core/lang","./WMBaseTask","./support/Util"],function(d,e,b,f){var g=new f;return b.createSubclass({declaredClass:"esri.tasks.workflow.TokenTask",properties:{url:{}},parseTokens:function(a,c){var b=this.parsedUrl.path+"/tokens/parseTokens";a={job:a.jobId,stringtoparse:a.stringToParse,user:g._formatDomainUsername(a.user),f:"json"};a=this._encode(e.mixin({},this.parsedUrl.query,a));c=this._generateOptions(a,c);return d(b,c).then(function(a){return a.data.output})}})});