// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../ensureType ./serializableProperty/originAliases ./serializableProperty/reader ./serializableProperty/shorthands ./serializableProperty/writer".split(" "),function(n,d,k,l,g,m,h){function f(a,b,c){var e=a&&a.json;a&&a.json&&a.json.origins&&c&&(a=a.json.origins[c.origin])&&("any"===b||b in a)&&(e=a);return e}Object.defineProperty(d,"__esModule",{value:!0});d.originSpecificReadPropertyDefinition=function(a,b){return f(a,"read",b)};d.originSpecificWritePropertyDefinition=function(a,
b){return f(a,"write",b)};d.originSpecificPropertyDefinition=f;d.SerializablePropertyExtension={processPrototypePropertyMetadata:function(a,b,c,e){if(m.process(b)){l.process(b);c=b.type;for(e=0;Array.isArray(c)&&!k.isOneOf(c);)c=c[0],e++;if(b.json.origins)for(var d in b.json.origins){var f=b.json.origins[d];g.create(c,e,a,f);h.create(c,e,a,f)}g.create(c,e,a,b.json);h.create(c,e,a,b.json)}}};d.default=d.SerializablePropertyExtension});