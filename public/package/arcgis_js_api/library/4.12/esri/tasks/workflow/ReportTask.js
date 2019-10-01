// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["../../request","../../core/lang","./WMBaseTask","./support/Enum","./support/Util"],function(d,e,g,h,k){new h;var f=new k;return g.createSubclass({declaredClass:"esri.tasks.workflow.ReportTask",properties:{url:{},timeZoneOffset:0},getAllReports:function(a){var b=this.parsedUrl.path+"/reports",c=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"}));a=this._generateOptions(c,a);return d(b,a).then(function(a){return a.data.reports})},getReportData:function(a,b){var c=this.parsedUrl.path+
"/reports/"+a.reportId+"/data";a={user:f._formatDomainUsername(a.user),f:"json"};0!=this.timeZoneOffset&&(a.timeZoneOffset=this.timeZoneOffset);a=this._encode(e.mixin({},this.parsedUrl.query,a));b=this._generateOptions(a,b);return d(c,b).then(function(a){return a.data.reportData})},getReportStylesheet:function(a,b){a=this.parsedUrl.path+"/reports/"+a+"/stylesheet";var c=this._encode(e.mixin({},this.parsedUrl.query,{f:"json"}));b=this._generateOptions(c,b);return d(a,b).then(function(a){return a.data.stylesheet})},
generateReport:function(a,b){var c=this.parsedUrl.path+"/reports/"+a.reportId+"/generate";a={user:f._formatDomainUsername(a.user),f:"json"};0!=this.timeZoneOffset&&(a.timeZoneOffset=this.timeZoneOffset);a=this._encode(e.mixin({},this.parsedUrl.query,a));b=this._generateOptions(a,b);return d(c,b).then(function(a){return a.data.reportContent})},getReportContentUrl:function(a){var b=this.parsedUrl.path+"/reports/"+a.reportId+"/generate?f\x3dfile";a.user&&(b+="\x26user\x3d"+f._formatDomainUsername(a.user));
0!=this.timeZoneOffset&&(b+="\x26timeZoneOffset\x3d"+this.timeZoneOffset);if(this.requestOptions&&this.requestOptions.query){var c=this.requestOptions.query;(a=Object.keys(c).map(function(a){return a+"\x3d"+c[a]}).join("\x26"))&&(b+="\x26"+a)}return b},useLocalTimeZoneOffset:function(){this.timeZoneOffset=-(new Date).getTimezoneOffset()}})});