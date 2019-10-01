// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../core/tsSupport/assignHelper ../../Graphic ../../core/Error ../../core/lang ../../core/promiseUtils ../../geometry/support/normalizeUtils".split(" "),function(B,f,q,r,v,w,t,x,n,y){function z(b,a){return r(this,void 0,void 0,function(){return q(this,function(g){if(!a||!(a.addFeatures||a.deleteFeatures||a.updateFeatures||a.addFeatures.length||a.deleteFeatures.length||a.updateFeatures.length))return[2,
n.reject(new t(b.type+"-layer:missing-parameters","'addFeatures', 'updateFeatures' or 'deleteFeatures' parameter is required"))];a=v({},a);a.addFeatures=a.addFeatures||[];a.updateFeatures=a.updateFeatures||[];a.deleteFeatures=a.deleteFeatures||[];a.addFeatures=a.addFeatures.map(u);a.updateFeatures=a.updateFeatures.map(u);return[2,A(a)]})})}function A(b){return r(this,void 0,void 0,function(){var a,g,l,k,d,m;return q(this,function(e){switch(e.label){case 0:return a=b.addFeatures,g=b.updateFeatures,
l=a.concat(g).map(function(a){return a.geometry}),[4,y.normalizeCentralMeridian(l)];case 1:return k=e.sent(),d=a.length,m=g.length,k.slice(0,d).forEach(function(a,c){b.addFeatures[c].geometry=a}),k.slice(d,d+m).forEach(function(a,c){b.updateFeatures[c].geometry=a}),[2,b]}})})}function u(b){var a=new w;b.attributes||(b.attributes={});a.geometry=b.geometry;a.attributes=b.attributes;return a}Object.defineProperty(f,"__esModule",{value:!0});f.isEditableLayer=function(b){return!0===b.get("capabilities.operations.supportsEditing")};
f.applyEdits=function(b,a){return r(this,void 0,void 0,function(){var g,l,k,d,m,e,p,c,f;return q(this,function(h){switch(h.label){case 0:return k={edits:a,result:n.create(function(a,b){g=a;l=b})},b.emit("apply-edits",k),[4,b.load()];case 1:return h.sent(),(d=b.source)&&null!=d.applyEdits?b.editingEnabled?[4,z(b,a)]:[2,n.reject(new t(b.type+"-layer:editing-disabled","Editing is disabled for layer",{layer:b}))]:[2,n.reject(new t(b.type+"-layer:no-editing-support","Layer source does not support applyEdits capability",
{layer:b}))];case 2:m=h.sent(),h.label=3;case 3:return h.trys.push([3,5,,6]),[4,d.applyEdits(m)];case 4:return e=h.sent(),p=function(a){return a.filter(function(a){return!a.error}).map(x.clone)},c={addedFeatures:p(e.addFeatureResults),updatedFeatures:p(e.updateFeatureResults),deletedFeatures:p(e.deleteFeatureResults)},(c.addedFeatures.length||c.updatedFeatures.length||c.deletedFeatures.length)&&b.emit("edits",c),g(c),[2,e];case 5:throw f=h.sent(),l(f),f;case 6:return[2]}})})}});