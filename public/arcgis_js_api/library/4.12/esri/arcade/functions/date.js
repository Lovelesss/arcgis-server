// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../moment","../languageUtils"],function(n,l,m,c){function k(c){return null===c?c:isNaN(c.getTime())?null:c}Object.defineProperty(l,"__esModule",{value:!0});l.registerFunctions=function(g,h){g.today=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,0,0);a=new Date;a.setHours(0,0,0,0);return a})};g.now=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,0,0);return new Date})};g.timestamp=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,0,0);a=new Date;
return a=new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())})};g.toutc=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?null:new Date(a.getUTCFullYear(),a.getUTCMonth(),a.getUTCDate(),a.getUTCHours(),a.getUTCMinutes(),a.getUTCSeconds(),a.getUTCMilliseconds())})};g.tolocal=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?null:m.utc([a.getFullYear(),
a.getMonth(),a.getDate(),a.getHours(),a.getMinutes(),a.getSeconds(),a.getMilliseconds()]).toDate()})};g.day=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?NaN:a.getDate()})};g.month=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?NaN:a.getMonth()})};g.year=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?NaN:a.getFullYear()})};g.hour=function(e,f){return h(e,f,function(a,
d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?NaN:a.getHours()})};g.second=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?NaN:a.getSeconds()})};g.millisecond=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?NaN:a.getMilliseconds()})};g.minute=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?NaN:a.getMinutes()})};g.weekday=function(e,f){return h(e,f,function(a,
d,b){c.pcCheck(b,1,1);a=c.toDate(b[0]);return null===a?NaN:a.getDay()})};g.date=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,0,7);if(3===b.length)return k(new Date(c.toNumber(b[0]),c.toNumber(b[1]),c.toNumber(b[2]),0,0,0,0));if(4===b.length)return k(new Date(c.toNumber(b[0]),c.toNumber(b[1]),c.toNumber(b[2]),c.toNumber(b[3]),0,0,0));if(5===b.length)return k(new Date(c.toNumber(b[0]),c.toNumber(b[1]),c.toNumber(b[2]),c.toNumber(b[3]),c.toNumber(b[4]),0,0));if(6===b.length)return k(new Date(c.toNumber(b[0]),
c.toNumber(b[1]),c.toNumber(b[2]),c.toNumber(b[3]),c.toNumber(b[4]),c.toNumber(b[5]),0));if(7===b.length)return k(new Date(c.toNumber(b[0]),c.toNumber(b[1]),c.toNumber(b[2]),c.toNumber(b[3]),c.toNumber(b[4]),c.toNumber(b[5]),c.toNumber(b[6])));if(2===b.length){a=c.toString(b[1]);if(""===a)return null;a=c.standardiseDateFormat(a);b=m(c.toString(b[0]),a,!0);return!0===b.isValid()?b.toDate():null}if(1===b.length){if(c.isString(b[0])&&""===b[0].replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,""))return null;
a=c.toNumber(b[0]);return!1===isNaN(a)?k(new Date(a)):c.toDate(b[0])}if(0===b.length)return new Date})};g.datediff=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,2,3);a=c.toDateM(b[0]);d=c.toDateM(b[1]);if(null===a||null===d)return NaN;switch(c.toString(b[2]).toLowerCase()){case "days":case "day":case "d":return a.diff(d,"days",!0);case "months":case "month":return a.diff(d,"months",!0);case "minutes":case "minute":case "m":return"M"===b[2]?a.diff(d,"months",!0):a.diff(d,"minutes",!0);case "seconds":case "second":case "s":return a.diff(d,
"seconds",!0);case "milliseconds":case "millisecond":case "ms":return a.diff(d);case "hours":case "hour":case "h":return a.diff(d,"hours",!0);case "years":case "year":case "y":return a.diff(d,"years",!0);default:return a.diff(d)}})};g.dateadd=function(e,f){return h(e,f,function(a,d,b){c.pcCheck(b,2,3);a=c.toDateM(b[0]);if(null===a)return null;d="milliseconds";switch(c.toString(b[2]).toLowerCase()){case "days":case "day":case "d":d="days";break;case "months":case "month":d="months";break;case "minutes":case "minute":case "m":d=
"M"===b[2]?"months":"minutes";break;case "seconds":case "second":case "s":d="seconds";break;case "milliseconds":case "millisecond":case "ms":d="milliseconds";break;case "hours":case "hour":case "h":d="hours";break;case "years":case "year":case "y":d="years"}a.add(c.toNumber(b[1]),d);return a.toDate()})}}});