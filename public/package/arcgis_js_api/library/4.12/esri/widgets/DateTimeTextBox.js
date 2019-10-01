// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("./Widgette dojo/date/locale dojo/keys ../intl/date dijit/form/_DateTimeTextBox dijit/form/ValidationTextBox".split(" "),function(l,g,m,h,k,n){return l.createSubclass([n],{declaredClass:"esri.widgets.DateTimeTextBox",properties:{visible:!0,value:null,date:null},_timeSeparator:", ",_dateFormatOptions:{dateOptions:{formatLength:"short",selector:"date",fullYear:!0},timeOptions:{formatLength:"short",selector:"time"}},constructor:function(a,b){this._getValidDateTimeRE=this._getValidDateTimeRE.bind(this);
this.set("pattern",this._getValidDateTimeRE);this.set("invalidMessage",this._getInvalidMessage())},postCreate:function(){this.inherited(arguments);this.set("value",this.date);this.own(this.watch("date",this._dateChangeHandler.bind(this)),this.on("change",this._valueChangeHandler.bind(this)),this.on("keydown",this._keydownHandler.bind(this)))},format:function(a){return this._formatDate(a)},parse:function(a,b){a=this._parseDateString(a,b);return a.isValid?new Date(a.value):void 0},compare:k.prototype.compare,
_isInvalidDate:k.prototype._isInvalidDate,_dateChangeHandler:function(a,b,d){this.date!==this.value&&this.set("value",d)},_valueChangeHandler:function(a){this.isValid()&&this.set("date",a)},_keydownHandler:function(a){a.keyCode===m.ENTER&&this._commitValueToDate()},_commitValueToDate:function(){var a=this._parseDateString(this.textbox.value);a.isValid&&this.set("value",new Date(a.value))},_formatDate:function(a){var b="";a instanceof Date&&(a=a.getTime());"number"!==typeof a||isNaN(a)||(b=h.formatDate(a,
h.dateFormatToIntlOptions("short-date")),a=h.formatDate(a,h.dateFormatToIntlOptions("short-time")),b=this._mergeDateTime(b,a));return b},_parseDateString:function(a,b){b=b||{};var d=(a||"").split(this._timeSeparator);a=d[1];var c=g.parse(d[0],this._dateFormatOptions.dateOptions),d=g.parse(a,this._dateFormatOptions.timeOptions),e=!1,f=b.min;b=b.max;c=c&&c.getTime();"number"!==typeof c||isNaN(c)?c=null:d?(a=d&&d.getTime(),"number"!==typeof a||isNaN(a)||(a-=6E4*d.getTimezoneOffset(),c+=a,e=!0)):e=!a;
e&&(f=f&&f.getTime(),b=b&&b.getTime(),"number"!==typeof f||isNaN(f)||c<f&&(e=!1),"number"!==typeof b||isNaN(b)||c>b&&(e=!1));return{isValid:e,value:c}},_getValidDateTimeRE:function(){var a=g.regexp(this._dateFormatOptions.dateOptions),b=g.regexp(this._dateFormatOptions.timeOptions);return a+"(,\\s"+b+")?"},_getInvalidMessage:function(){return this._formatDate(new Date(0))},_mergeDateTime:function(a,b){return a+(b?this._timeSeparator+b:"")}})});