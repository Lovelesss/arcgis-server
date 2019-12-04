// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/assignHelper ../../core/colorUtils ../../core/compilerUtils ../../core/Error ../../core/Logger ../../core/maybe ../../core/promiseUtils ../../core/screenUtils ./gfxUtils ./IconSymbol3DLayerResource ./ObjectSymbol3DLayerResource ./previewUtils ./renderUtils ./styleUtils ./utils".split(" "),function(N,B,F,G,H,I,O,t,w,v,P,Q,R,r,z,S,J){function y(b){var a=b.outline,c=t.isSome(b.material)?b.material.color:null,c=t.isSome(c)?c.toRgba().toString():null;if(t.isNone(a))return"fill"===
b.type&&"255,255,255,1"===c?{color:"#bdc3c7",width:.75}:null;b=v.pt2px(a.size)||0;return{color:"rgba("+(t.isSome(a.color)?a.color.toRgba():"255,255,255,1")+")",width:Math.min(b,80)}}function T(b,a){var c=a&&a.resource,c=c&&c.href;return b.thumbnail&&b.thumbnail.url?w.resolve(b.thumbnail.url):c&&"object"!==a.type?w.resolve(J.getIconHref(b,a)):b.styleOrigin&&(b.styleOrigin.styleName||b.styleOrigin.styleUrl)?S.resolveWebStyleSymbol(b.styleOrigin,{portal:b.styleOrigin.portal},"webRef").catch(function(a){return a}).then(function(a){return a&&
a.thumbnail&&a.thumbnail.url||K}):w.resolve(K)}function C(b,a){void 0===a&&(a=1);var c=b.a;b=G.toHSV(b);a=G.toRGB({h:b.h,s:b.s/a,v:100-(100-b.v)/a});return[a.r,a.g,a.b,c]}function x(b,a){return Math.round(Math.min(Math.max(b+191.25*a,0),255))}function D(b){return"water"===b.type?t.isNone(b.color)?null:b.color:t.isNone(b.material)||t.isNone(b.material.color)?null:b.material.color}function f(b,a){void 0===a&&(a=0);b=D(b);if(!b)return a=x(P.defaultThematicColor.r,a),[a,a,a,100];b=b.toRgba();for(var c=
0;3>c;c++)b[c]=x(b[c],a);return b}function L(b){return b.outline?y(b):{color:"rgba(0, 0, 0, 1)",width:1.5}}function M(b,a){b=D(b);if(!b)return null;var c;c="rgba("+(x(b.r,a)+",");c+=x(b.g,a)+",";c+=x(b.b,a)+",";return c+b.a+");"}function E(b,a){a=M(b,a);if(!a)return{};b=Math.min(b.size?v.pt2px(b.size):.75,80);return{color:a,width:b}}function A(b,a,c){c*=.75;return{type:"linear",x1:c?.25*c:0,y1:c?.5*c:0,x2:c||4,y2:c?.5*c:4,colors:[{color:b,offset:0},{color:a,offset:1}]}}function U(b){var a=b.depth,
c=b.height;return(b=b.width)&&a&&c&&b===a&&b<c}function V(b,a,c){var d=[];if(!b)return d;switch(b.type){case "icon":var l=b.resource&&b.resource.primitive||Q.defaultPrimitive;switch(l){case "circle":d.push({shape:{type:"circle",cx:0,cy:0,r:.5*a},fill:f(b,0),stroke:y(b)});break;case "square":d.push({shape:{type:"path",path:[{command:"M",values:[0,a]},{command:"L",values:[0,0]},{command:"L",values:[a,0]},{command:"L",values:[a,a]},{command:"Z",values:[]}]},fill:f(b,0),stroke:y(b)});break;case "triangle":d.push({shape:{type:"path",
path:[{command:"M",values:[0,a]},{command:"L",values:[.5*a,0]},{command:"L",values:[a,a]},{command:"Z",values:[]}]},fill:f(b,0),stroke:y(b)});break;case "cross":d.push({shape:{type:"path",path:[{command:"M",values:[.5*a,0]},{command:"L",values:[.5*a,a]},{command:"M",values:[0,.5*a]},{command:"L",values:[a,.5*a]},{command:"E",values:[]}]},stroke:L(b)});break;case "x":d.push({shape:{type:"path",path:[{command:"M",values:[0,0]},{command:"L",values:[a,a]},{command:"M",values:[a,0]},{command:"L",values:[0,
a]},{command:"E",values:[]}]},stroke:L(b)});break;case "kite":d.push({shape:{type:"path",path:[{command:"M",values:[0,.5*a]},{command:"L",values:[.5*a,0]},{command:"L",values:[a,.5*a]},{command:"L",values:[.5*a,a]},{command:"Z",values:[]}]},fill:f(b,0),stroke:y(b)});break;default:H.neverReached(l)}break;case "object":switch(l=b.resource&&b.resource.primitive||R.defaultPrimitive,l){case "cone":l=f(b,0);b=f(b,-.6);b=A(l,b,c?20:a);a=r.getConeShapes(a,c);d.push({shape:a[0],fill:b});d.push({shape:a[1],
fill:b});break;case "inverted-cone":c=f(b,0);b=f(b,-.6);b=A(c,b,a);a=r.getInvertedConeShapes(a);d.push({shape:a[0],fill:b});d.push({shape:a[1],fill:c});break;case "cube":a=r.getCubeShapes(a,c);d.push({shape:a[0],fill:f(b,0)});d.push({shape:a[1],fill:f(b,-.3)});d.push({shape:a[2],fill:f(b,-.5)});break;case "cylinder":var l=f(b,0),W=f(b,-.6),l=A(l,W,c?20:a);a=r.getCylinderShapes(a,c);d.push({shape:a[0],fill:l});d.push({shape:a[1],fill:l});d.push({shape:a[2],fill:f(b,0)});break;case "diamond":a=r.getDiamondShapes(a);
d.push({shape:a[0],fill:f(b,-.3)});d.push({shape:a[1],fill:f(b,0)});d.push({shape:a[2],fill:f(b,-.3)});d.push({shape:a[3],fill:f(b,-.7)});break;case "sphere":c=f(b,0);b=f(b,-.6);b=A(c,b);b.x1=0;b.y1=0;b.x2=.25*a;b.y2=.25*a;d.push({shape:{type:"circle",cx:0,cy:0,r:.5*a},fill:b});break;case "tetrahedron":a=r.getTetrahedronShapes(a);d.push({shape:a[0],fill:f(b,-.3)});d.push({shape:a[1],fill:f(b,0)});d.push({shape:a[2],fill:f(b,-.6)});break;default:H.neverReached(l)}}return d}function X(b,a){var c=a&&
a.size?v.pt2px(a.size):null,d=a&&a.maxSize?v.pt2px(a.maxSize):null,f=a&&a.disableUpsampling,r=b.symbolLayers,p=[],m=0,q=0,n=r.getItemAt(r.length-1),g;n&&"icon"===n.type&&(g=n.size&&v.pt2px(n.size));r.forEach(function(h,e){if("icon"===h.type||"object"===h.type){e="icon"===h.type?h.size&&v.pt2px(h.size):0;var k=c||e?Math.ceil(Math.min(c||e,d||120)):22,n="icon"===h.type?y(h):null,l=n?n.width:0;h&&h.resource&&h.resource.href?(e=T(b,h).then(function(a){var b=h.get("material.color"),c;c="icon"===h.type?
"multiply":"tint";return z.tintImageWithColor(a,k,b,c,f)}).then(function(a){var b=a.width,c=a.height;m=Math.max(m,b+l+1);q=Math.max(q,c+l+1);return[{shape:{type:"image",x:0,y:0,width:b,height:c,src:a.url},fill:null,stroke:null}]}),p.unshift(e)):(n=k,"icon"===h.type&&g&&c&&(n=e/g*k),e=a&&"tall"===a.symbolConfig||("object"===h.type?U(h):!1),m=Math.max(m,e?20:n+l+1),q=Math.max(q,n+l+1),p.unshift(w.resolve(V(h,n,e))))}});return w.eachAlways(p).then(function(b){var c=[];b.forEach(function(a){a.value?c.push(a.value):
a.error&&Y.warn("error while building swatchInfo!",a.error)});return z.renderSymbol(c,[m,q],{node:a&&a.node,scale:!1,opacity:a&&a.opacity})})}function Z(b,a){var c=b.symbolLayers,d=[];b=J.isVolumetricSymbol(b);var l=a&&a.size?v.pt2px(a.size):null,t=(a&&a.maxSize?v.pt2px(a.maxSize):null)||80,p=0,m=0,q;c.forEach(function(a,b){if(a&&("line"===a.type||"path"===a.type)){var c=[];switch(a.type){case "line":var e=E(a,0),k=e&&e.width||0;0===b&&(q=k);var g=Math.min(l||k,t);b=0===b?g:l?k/q*g:g;m=Math.max(m,
b);p=Math.max(p,22<b?b+1:40);e.width=b;c.push({shape:{type:"path",path:[{command:"M",values:[0,.5*m]},{command:"L",values:[p,.5*m]},{command:"E",values:[]}]},stroke:e});break;case "path":b=Math.min(l||22,t);k=f(a,0);g=f(a,-.2);e=(e=M(a,-.4))?{color:e,width:1}:{};if("quad"===a.profile){var n=a.width||a.size;a=a.height||a.size;a=r.getPathSymbolShapes(n&&a?n/a:1);n=F({},e,{join:"bevel"});c.push({shape:a[0],fill:g,stroke:n});c.push({shape:a[1],fill:g,stroke:n});c.push({shape:a[2],fill:k,stroke:n})}else c.push({shape:r.shapes.pathSymbol3DLayer[0],
fill:g,stroke:e}),c.push({shape:r.shapes.pathSymbol3DLayer[1],fill:k,stroke:e});p=m=Math.max(m,b+(e.width||0)+1)}d.push(c)}});return w.resolve(z.renderSymbol(d,[p,m],{node:a&&a.node,scale:b,opacity:a&&a.opacity}))}Object.defineProperty(B,"__esModule",{value:!0});var K=N.toUrl("../../images/Legend/legend3dsymboldefault.png"),Y=O.getLogger("esri.symbols.support.previewSymbol3D");B.getSymbolLayerFill=f;B.previewSymbol3D=function(b,a){if(0===b.symbolLayers.length)return w.reject(new I("symbolPreview: renderPreviewHTML3D",
"No symbolLayers in the symbol."));var c=null;switch(b.type){case "point-3d":c=X(b,a);break;case "line-3d":c=Z(b,a);break;case "polygon-3d":case "mesh-3d":c="mesh-3d"===b.type;b=b.symbolLayers;for(var d=a&&a.size?v.pt2px(a.size):null,l=a&&a.maxSize?v.pt2px(a.maxSize):null,d=d||22,t=[],p=0,m=0,q=!1,n=0;n<b.length;n++){var g=b.getItemAt(n),h=[];if(!c||"fill"===g.type){var e=r.shapes.fill[0];switch(g.type){case "fill":var k=y(g),q=k&&k.width||0,u=Math.min(d,l||120),p=Math.max(p,u+q),m=Math.max(m,u+q),
q=!0;h.push({shape:e,fill:f(g,0),stroke:k});break;case "line":g=(k=E(g,0))&&k.width||0;e={stroke:k,shape:e};p=Math.max(p,22+g);m=Math.max(m,22+g);h.push(e);break;case "extrude":var k=F({join:"round"},E(g,-.4)),e=f(g,0),g=f(g,-.2),u=Math.min(d,l||120),x=r.getExtrudeSymbolShapes(u);k.width=1;h.push({shape:x[0],fill:g,stroke:k});h.push({shape:x[1],fill:g,stroke:k});h.push({shape:x[2],fill:e,stroke:k});e=22*.7+.5*u;p=Math.max(p,22+k.width+1);m=Math.max(m,e+k.width+1);break;case "water":q=D(g),e=C(q),
g=C(q,2),k=C(q,3),u=r.getWaterSymbolShapes(),q=!0,h.push({shape:u[0],fill:e}),h.push({shape:u[1],fill:g}),h.push({shape:u[2],fill:k}),u=Math.min(d,l||120),p=Math.max(p,u),m=Math.max(m,u)}t.push(h)}}c=w.resolve(z.renderSymbol(t,[p,m],{node:a&&a.node,scale:q,opacity:a&&a.opacity}))}return c?c:w.reject(new I("symbolPreview: swatchInfo3D","symbol not supported."))}});