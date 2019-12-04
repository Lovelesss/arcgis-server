// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/assignHelper ../core/tsSupport/generatorHelper ../core/tsSupport/awaiterHelper @dojo/framework/shim/Set ../Color ../request ../core/Error ../core/lang ../core/Logger ../core/promiseUtils ../core/accessorSupport/decorators ./Renderer ./mixins/VisualVariablesRenderer ../support/arcadeOnDemand ../symbols/CIMSymbol ../symbols/support/cimSymbolUtils".split(" "),function(T,U,F,d,G,q,r,H,I,J,
K,e,L,M,b,N,O,P,Q,R){var D=L.getLogger("esri.renderers.DictionaryRenderer"),S=function(b,a){return b.replace(/\{itemName\}/gi,a)};return function(E){function a(a){a=E.call(this)||this;a._arcadeUtils=null;a.config=null;a.description=null;a.label=null;a.type="dictionary";return a}F(a,E);t=a;a.prototype.clone=function(){return new t({config:e.clone(this.config),description:e.clone(this.description),fieldMap:e.clone(this.fieldMap),label:e.clone(this.label),url:e.clone(this.url),visualVariables:e.clone(this.visualVariables)})};
a.prototype.collectRequiredFields=function(a,g){return r(this,void 0,void 0,function(){var c;return q(this,function(f){switch(f.label){case 0:return[4,this.collectVVRequiredFields(a,g)];case 1:f.sent();for(c in this.fieldMap)a.add(this.fieldMap[c]);return[2]}})})};a.prototype.fetchResources=function(a){return r(this,void 0,void 0,function(){var g,c,f,b,k,x,u,v,l,h,m;return q(this,function(w){switch(w.label){case 0:if(!this.url)return D.error("no valid URL!"),[2];this._dictionaryPromise=J(this.url+
"/resources/styles/dictionary-info.json",G({responseType:"json",query:{f:"json"}},a));return[4,M.all([this._dictionaryPromise,P.loadArcade()])];case 1:g=w.sent();c=g[0].data;f=g[1].arcadeUtils;if(!c)throw new K("esri.renderers.DictionaryRenderer","Bad dictionary data!");b=c.expression;k=c.authoringInfo;x=k.configuration;this._refSymbolUrlTemplate=c.cimRefTemplateUrl;this._itemNames=new H.default(c.itemsNames);u=new Map;this._symbolAttributes=k.symbol;this._syntaxTree=f.createSyntaxTree(b);v=0;for(l=
x;v<l.length;v++)h=l[v],u.set("$"+h.name,h.value);if(m=this.config)for(h in m)u.set("$"+h,m[h]);this._configurationAttributes=u;this._arcadeUtils=f;return[2]}})})};a.prototype.fetchSymbol=function(a,b){return r(this,void 0,void 0,function(){var c,f,g,k,d,u,v,l,h,m,w,e,x,n,y,r,A,p,z,B,t,C;return q(this,function(q){switch(q.label){case 0:return this._dictionaryPromise||this.fetchResources(b),[4,this._dictionaryPromise];case 1:q.sent();c={};this._configurationAttributes.forEach(function(a,b){c[b]=a});
f=0;for(g=this._symbolAttributes;f<g.length;f++)k=g[f],(d=this.fieldMap[k])&&null!==a.attributes[d]&&void 0!==a.attributes[d]?(u=""+a.attributes[d],c["$"+k]=u):c["$"+k]="";v=this._arcadeUtils;l=v.evalSyntaxTree(this._syntaxTree,{vars:c,spatialReference:null});if(!l||"string"!==typeof l)return[2,null];h=l.split(";");m=[];w=[];e=0;for(x=h;e<x.length;e++)if((n=x[e])&&0!==n.length)if(-1!==n.indexOf("po:"))y=n.substr(3).split("|"),3===y.length&&(r=y[0],A=y[1],p=y[2],"DashTemplate"===A?p=p.split(" ").map(function(a){return Number(a)}):
"Color"===A?(z=(new I(p)).toRgba(),p={r:z[0],g:z[1],b:z[2],a:z[3]}):p=Number(p),w.push({primitiveName:r,propertyName:A,value:p}));else if(-1!==n.indexOf("|"))for(B=0,t=n.split("|");B<t.length;B++)C=t[B],this._itemNames.has(C)&&m.push(C);else this._itemNames.has(n)&&m.push(n);return[2,R.expandSymbol(new Q({styleUrl:this.url+"/"+this._refSymbolUrlTemplate,styleName:m}),S).then(function(a){var b=function(a){if(!a)return D.error("CIM Symbol has no data!"),null;a.primitiveOverrides=w};a&&a.data&&0<w.length&&
(Array.isArray(a.data)?a.data.forEach(function(a){return b(a)}):a.data&&b(a.data));return a})]}})})};a.prototype.getSymbol=function(a,b){return null};a.prototype.getSymbolAsync=function(a,b){return r(this,void 0,void 0,function(){return q(this,function(a){return[2,null]})})};a.prototype.getSymbols=function(){return[]};a.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(function(a,b){return a+b.getAttributeHash()},"")};a.prototype.getMeshHash=function(){return this.url+
"-"+JSON.stringify(this.fieldMap)};var t;d([b.property({type:Object,json:{write:!0}})],a.prototype,"config",void 0);d([b.property({type:String,json:{write:!0}})],a.prototype,"description",void 0);d([b.property({type:Object,json:{write:!0}})],a.prototype,"fieldMap",void 0);d([b.property({type:String,json:{write:!0}})],a.prototype,"label",void 0);d([b.property({type:String,json:{write:!0}})],a.prototype,"url",void 0);return a=t=d([b.subclass("esri.renderers.DictionaryRenderer")],a)}(b.declared(N,O))});