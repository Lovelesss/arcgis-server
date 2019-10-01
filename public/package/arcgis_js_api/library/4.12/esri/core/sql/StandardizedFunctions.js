// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","dojo/regexp"],function(g,f,k){Object.defineProperty(f,"__esModule",{value:!0});g=function(){function a(){this.op="+";this.minute=this.year=this.month=this.hour=this.second=this.day=0}a.fixDefaults=function(a){if(null!==a.precision||null!==a.secondary)throw Error("Primary and Secondary SqlInterval qualifiers not supported");};a.createFromMilliseconds=function(b){var c=new a;c.second=b/1E3;return c};a.createFromValueAndQualifer=function(b,c,f){var e=null,d=new a;d.op="-"===
f?"-":"+";if("interval-period"===c.type){a.fixDefaults(c);if("year"===c.period||"month"===c.period)throw Error("Year-Month Intervals not supported");if(/^[0-9]{1,}$/.test(b))d[c.period]=parseFloat(b);else throw Error("Illegal Interval");}else{a.fixDefaults(c.start);a.fixDefaults(c.end);if("year"===c.start.period||"month"===c.start.period)throw Error("Year-Month Intervals not supported");if("year"===c.end.period||"month"===c.end.period)throw Error("Year-Month Intervals not supported");switch(c.start.period){case "day":switch(c.end.period){case "hour":e=
/^[0-9]{1,} [0-9]{1,}$/;if(e.test(b))d[c.start.period]=parseFloat(b.split(" ")[0]),d[c.end.period]=parseFloat(b.split(" ")[1]);else throw Error("Illegal Interval");break;case "minute":e=/^[0-9]{1,} [0-9]{1,2}:[0-9]{1,}$/;if(e.test(b))d[c.start.period]=parseFloat(b.split(" ")[0]),b=b.split(" ")[1].split(":"),d.hour=parseFloat(b[0]),d.minute=parseFloat(b[1]);else throw Error("Illegal Interval");break;case "second":e=/^[0-9]{1,} [0-9]{1,2}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/;if(e.test(b))d[c.start.period]=
parseFloat(b.split(" ")[0]),b=b.split(" ")[1].split(":"),d.hour=parseFloat(b[0]),d.minute=parseFloat(b[1]),d.second=parseFloat(b[2]);else throw Error("Illegal Interval");break;default:throw"Invalid Interval.";}break;case "hour":switch(c.end.period){case "minute":e=/^[0-9]{1,}:[0-9]{1,}$/;if(e.test(b))d.hour=parseFloat(b.split(":")[0]),d.minute=parseFloat(b.split(":")[1]);else throw Error("Illegal Interval");break;case "second":e=/^[0-9]{1,}:[0-9]{1,2}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/;if(e.test(b))b=
b.split(":"),d.hour=parseFloat(b[0]),d.minute=parseFloat(b[1]),d.second=parseFloat(b[2]);else throw Error("Illegal Interval");break;default:throw"Invalid Interval.";}break;case "minute":switch(c.end.period){case "second":e=/^[0-9]{1,}:[0-9]{1,}([.]{1}[0-9]{1,}){0,1}$/;if(e.test(b))b=b.split(":"),d.minute=parseFloat(b[0]),d.second=parseFloat(b[1]);else throw Error("Illegal Interval");break;default:throw"Invalid Interval.";}break;default:throw"Invalid Interval.";}}return d};a.prototype.valueInMilliseconds=
function(){return("-"===this.op?-1:1)*(1E3*this.second+6E4*this.minute+36E5*this.hour+864E5*this.day+365/12*this.month*864E5+31536E6*this.year)};return a}();f.SqlInterval=g;f.evaluateFunction=function(a,b){var c=h[a.toLowerCase()];if(null==c)throw Error("Function Not Recognised");if(b.length<c.minParams||b.length>c.maxParams)throw Error("Invalid Parameter count for call to "+a.toUpperCase());return c.evaluate(b)};f.isStandardized=function(a,b){a=h[a.toLowerCase()];return null!=a&&b>=a.minParams&&
b<=a.maxParams};var h={extract:{minParams:2,maxParams:2,evaluate:function(a){var b=a[0];a=a[1];if(null==a)return null;if(a instanceof Date)switch(b.toUpperCase()){case "SECOND":return a.getSeconds();case "MINUTE":return a.getMinutes();case "HOUR":return a.getHours();case "DAY":return a.getDate();case "MONTH":return a.getMonth()+1;case "YEAR":return a.getFullYear()}throw Error("Invalid Parameter for call to EXTRACT");}},substring:{minParams:2,maxParams:3,evaluate:function(a){if(2===a.length){var b=
a[0],c=a[1];return null==b||null==c?null:b.toString().substring(c-1)}if(3===a.length)return b=a[0],c=a[1],a=a[2],null==b||null==c||null==a?null:0>=a?"":b.toString().substring(c-1,c+a-1)}},position:{minParams:2,maxParams:2,evaluate:function(a){var b=a[0];a=a[1];return null==b||null==a?null:a.indexOf(b)+1}},trim:{minParams:2,maxParams:3,evaluate:function(a){var b=3===a.length,c=b?a[1]:" ",b=b?a[2]:a[1];if(null==c||null==b)return null;c="("+k.escapeString(c)+")";switch(a[0]){case "BOTH":return b.replace(new RegExp("^"+
c+"*|"+c+"*$","g"),"");case "LEADING":return b.replace(new RegExp("^"+c+"*","g"),"");case "TRAILING":return b.replace(new RegExp(c+"*$","g"),"")}throw Error("Invalid Parameter for call to TRIM");}},abs:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.abs(a[0])}},ceiling:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.ceil(a[0])}},floor:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.floor(a[0])}},log:{minParams:1,maxParams:1,
evaluate:function(a){return null==a[0]?null:Math.log(a[0])}},log10:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.log(a[0])*Math.LOG10E}},sin:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.sin(a[0])}},cos:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.cos(a[0])}},tan:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.tan(a[0])}},asin:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?
null:Math.asin(a[0])}},acos:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.acos(a[0])}},atan:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:Math.atan(a[0])}},sign:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:0<a[0]?1:0>a[1]?-1:0}},power:{minParams:2,maxParams:2,evaluate:function(a){return null==a[0]||null==a[1]?null:Math.pow(a[0],a[1])}},mod:{minParams:2,maxParams:2,evaluate:function(a){return null==a[0]||null==a[1]?null:a[0]%
a[1]}},round:{minParams:1,maxParams:2,evaluate:function(a){var b=a[0];a=2===a.length?Math.pow(10,a[1]):1;return null==b?null:Math.round(b*a)/a}},truncate:{minParams:1,maxParams:2,evaluate:function(a){return null==a[0]?null:1===a.length?parseInt(a[0].toFixed(0),10):parseFloat(a[0].toFixed(a[1]))}},char_length:{minParams:1,maxParams:1,evaluate:function(a){return"string"===typeof a[0]||a[0]instanceof String?a[0].length:0}},concat:{minParams:1,maxParams:Infinity,evaluate:function(a){for(var b="",c=0;c<
a.length;c++){if(null==a[c])return null;b+=a[c].toString()}return b}},lower:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:a[0].toString().toLowerCase()}},upper:{minParams:1,maxParams:1,evaluate:function(a){return null==a[0]?null:a[0].toString().toUpperCase()}}}});