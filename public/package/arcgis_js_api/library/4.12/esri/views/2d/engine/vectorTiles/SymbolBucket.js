// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/tsSupport/extendsHelper dojox/string/BidiEngine ./Bucket ./GeometryUtils ./Placement ./style/StyleLayer ../webgl/Geometry ../webgl/TextShaping".split(" "),function(Q,R,L,M,N,v,F,I,B,O){function P(v,h){return v.iconMosaicItem&&h.iconMosaicItem?v.iconMosaicItem.page===h.iconMosaicItem.page?0:v.iconMosaicItem.page<h.iconMosaicItem.page?-1:1:v.iconMosaicItem&&!h.iconMosaicItem?1:!v.iconMosaicItem&&h.iconMosaicItem?-1:0}(function(){return function(){}})();return function(K){function h(a,
b,f,c,g,d,e,q){b=K.call(this,a,b)||this;b._markerMap=new Map;b._glyphMap=new Map;b._glyphBufferDataStorage=new Map;b._sdfMarkers=!1;if(a.hasDataDrivenIcon!==f.isDataDriven())throw Error("incompatible icon buffer");if(a.hasDataDrivenText!==g.isDataDriven())throw Error("incompatible text buffer");b._iconVertexBuffer=f;b._iconIndexBuffer=c;b._textVertexBuffer=g;b._textIndexBuffer=d;b._placementEngine=e;b._workerTileHandler=q;return b}L(h,K);Object.defineProperty(h.prototype,"markerPageMap",{get:function(){return this._markerMap},
enumerable:!0,configurable:!0});Object.defineProperty(h.prototype,"glyphsPageMap",{get:function(){return this._glyphMap},enumerable:!0,configurable:!0});Object.defineProperty(h.prototype,"sdfMarker",{get:function(){return this._sdfMarkers},enumerable:!0,configurable:!0});h.prototype.copy=function(a,b,f,c,g){a=new h(this.layer,this.zoom,a,b,f,c,g,this._workerTileHandler);a.layerIndex=this.layerIndex;a.layerExtent=this.layerExtent;a._iconIndexStart=b.index;a._textIndexStart=c.index;a._iconIndexCount=
0;a._textIndexCount=0;a._symbolInstances=this._symbolInstances;a._workerTileHandler=this._workerTileHandler;a._fontArray=this._fontArray;a._textLayout=this._textLayout;a._iconLayout=this._iconLayout;a._isLinePlacement=this._isLinePlacement;a._avoidEdges=this._avoidEdges;return a};h.prototype.getResources=function(a,b,f){var c=this.layer,g=this.zoom,d=c.hasDataDrivenIcon,e=c.hasDataDrivenText;a&&a.setExtent(this.layerExtent);for(var q=c.getLayoutProperty("icon-image"),k=c.getLayoutProperty("text-field"),
D=c.getLayoutValue("text-font",g),m=c.getLayoutValue("text-transform",g),u=[],l=[1,1,1,1],x=1,r=1,n=[1,1,1,1],z=1,t=1,p=0,y=this._features;p<y.length;p++){var w=y[p],C=w.getGeometry(a);if(C&&0!==C.length){var v=void 0;q&&(v=c.getLayoutValue("icon-image",g,w),q.isDataDriven||(v=this._replaceKeys(v,w.values)),v&&b.add(v));var A=void 0,E=!1;if(k&&(A=c.getLayoutValue("text-field",g,w),k.isDataDriven||(A=this._replaceKeys(A,w.values)),A=A.replace(/\\n/g,"\n"))){switch(m){case 2:A=A.toLowerCase();break;
case 1:A=A.toUpperCase()}h._bidiEngine.hasBidiChar(A)&&(E=void 0,E="rtl"===h._bidiEngine.checkContextual(A)?"IDNNN":"ICNNN",A=h._bidiEngine.bidiTransform(A,E,"VLYSN"),E=!0);var B=A.length;if(0<B)for(var G=0,F=D;G<F.length;G++){var H=F[G],J=f[H];J||(J=f[H]=new Set);for(H=0;H<B;H++){var I=A.charCodeAt(H);J.add(I)}}}if(v||A)B=c.getLayoutValue("icon-size",g,w),G=c.getLayoutValue("text-size",g,w),c.hasDataDrivenIconColor&&(l=c.getPaintValue("icon-color",g,w)),c.hasDataDrivenIconOpacity&&(x=c.getPaintValue("icon-opacity",
g,w)),c.hasDataDrivenIconSize&&(r=B),c.hasDataDrivenTextColor&&(n=c.getPaintValue("text-color",g,w)),c.hasDataDrivenTextOpacity&&(z=c.getPaintValue("text-opacity",g,w)),c.hasDataDrivenTextSize&&(t=G),w={sprite:v,label:A,rtl:E,type:w.type,geometry:C,iconSize:B,iconRotate:c.getLayoutValue("icon-rotate",g,w),ddIconValues:d?{color:l,opacity:x,size:r}:null,textSize:G,textRotate:c.getLayoutValue("text-rotate",g,w),ddTextValues:e?{color:n,opacity:z,size:t}:null},u.push(w)}}this._symbolFeatures=u};h.prototype.processFeatures=
function(a,b){a&&a.setExtent(this.layerExtent);var f=this.layer,c=this.zoom;b=this._isLinePlacement=1===f.getLayoutValue("symbol-placement",c);a=this._avoidEdges=f.getLayoutValue("symbol-avoid-edges",c)&&!b;var g=8*f.getLayoutValue("symbol-spacing",c),d=f.getLayoutProperty("icon-image"),e=f.getLayoutProperty("text-field"),q=this._workerTileHandler,k,D;d&&(this._iconLayout=new I.IconLayout(f,c,b),k=q.getSpriteItems(),D=this._getTranslate(!0));var m,u,l;if(e){m=this._textLayout=new I.TextLayout(f,c,
b);this._fontArray=m.fontArray;l=.5;switch(m.anchor){case 5:case 1:case 7:l=0;break;case 6:case 2:case 8:l=1}u=.5;switch(m.anchor){case 5:case 3:case 6:u=0;break;case 7:case 4:case 8:u=1}f=.5;switch(m.justify){case 0:f=0;break;case 2:f=1}var c=24*m.letterSpacing,d=b?0:24*m.maxWidth,e=24*m.lineHeight,x=[24*m.offset[0],24*m.offset[1]];m=this._fontArray.map(function(a){return q.getGlyphItems(a)});u=new O.TextShaping(m,d,e,c,x,l,u,f);l=this._getTranslate(!1)}this._iconIndexStart=this._iconIndexBuffer.index;
this._textIndexStart=this._textIndexBuffer.index;this._textIndexCount=this._iconIndexCount=0;this._markerMap.clear();this._glyphMap.clear();this._symbolInstances=f=[];c=this._textLayout;d=1;c&&c.size&&(d=c.size/24);e=c?c.maxAngle*v.C_DEG_TO_RAD:0;m=c?8*c.size:0;for(var x=0,r=this._symbolFeatures;x<r.length;x++){var n=r[x],z=void 0;n.sprite&&(z=k[n.sprite])&&z.sdf&&(this._sdfMarkers=!0);var t=void 0,p=n.label,y=0;if(p&&(t=u.getShaping(p,n.rtl))&&0<t.length){for(var y=1E30,p=-1E30,w=0,C=t;w<C.length;w++)var B=
C[w],y=Math.min(y,B.x),p=Math.max(p,B.x);y=(p-y+48)*d*8}p=0;for(w=n.geometry;p<w.length;p++){var C=w[p],A=void 0;b?(t&&0<t.length&&c&&c.size&&h._smoothVertices(C,8*c.size*(2+Math.min(2,4*Math.abs(c.offset[1])))),A=h._findAnchors(C,g,y)):A=3===n.type?h._findCentroid(C):[new F.Anchor(C[0].x,C[0].y)];for(B=0;B<A.length;B++){var E=A[B];0>E.x||4096<E.x||0>E.y||4096<E.y||b&&0<y&&0===c.rotationAlignment&&!h._honorsTextMaxAngle(C,E,y,e,m)||f.push({shaping:t,line:C,iconMosaicItem:z,anchor:E,iconSize:n.iconSize,
iconRotate:n.iconRotate,ddIconValues:n.ddIconValues,textSize:n.textSize,textRotate:n.textRotate,ddTextValues:n.ddTextValues})}}}f.sort(P);for(k=0;k<f.length;k++)this._processFeature(f[k],D,l,a);this._addPlacedGlyphs()};h.prototype.updateSymbols=function(){this._iconIndexStart=this._iconIndexBuffer.index;this._textIndexStart=this._textIndexBuffer.index;this._textIndexCount=this._iconIndexCount=0;this._markerMap.clear();this._glyphMap.clear();var a=this._avoidEdges,b=this.layer,f;b.getLayoutProperty("icon-image")&&
(f=this._getTranslate(!0));var c;b.getLayoutProperty("text-field")&&(c=this._getTranslate(!1));for(var b=0,g=this._symbolInstances;b<g.length;b++)this._processFeature(g[b],f,c,a);this._addPlacedGlyphs()};h.prototype._getTranslate=function(a){var b=this.layer.getPaintValue(a?"icon-translate":"text-translate",this.zoom);if(0!==b[0]||0!==b[1]){var f=this._placementEngine.mapAngle;return 0!==f&&0===this.layer.getPaintValue(a?"icon-translate-anchor":"text-translate-anchor",this.zoom)?(a=Math.sin(f),f=
Math.cos(f),[8*(b[0]*f-b[1]*a),8*(b[0]*a+b[1]*f)]):[8*b[0],8*b[1]]}};h.prototype._replaceKeys=function(a,b){return a.replace(/{([^{}]+)}/g,function(a,c){return c in b?b[c]:""})};h.prototype._processFeature=function(a,b,f,c){var g=a.line,d=a.iconMosaicItem,e=a.shaping,q=a.anchor,k=this._iconLayout,D=k&&!!d,m=!0,u=1;D&&(k.size=a.iconSize,k.rotate=a.iconRotate,u=8*k.size,m=k.optional||!d);var l=this._textLayout,h=l&&e&&0<e.length,r;r=1;var n=!0;h&&(l.size=a.textSize,l.rotate=a.textRotate,r=l.size/24,
r*=8,n=l.optional||!e||0===e.length);var z=new B.Point(0,-17),t;D&&(t=this._placementEngine.getIconPlacement(q,b,d,u,g,k,c),q.minzoom>t.footprint.minzoom&&(t.footprint.minzoom=q.minzoom),t.footprint.minzoom===v.C_INFINITY&&(t=null));if(t||m){var p;h&&(p=this._placementEngine.getTextPlacement(q,f,z,e,r,g,l,c))&&(q.minzoom>p.footprint.minzoom&&(p.footprint.minzoom=q.minzoom),p.footprint.minzoom===v.C_INFINITY&&(p=null));if(p||n)t&&p||(n||m?n||p?m||t||(p=null):t=null:p=t=null),t&&p&&!n&&!m&&(b=Math.max(t.footprint.minzoom,
p.footprint.minzoom),t.footprint.minzoom=b,p.footprint.minzoom=b),p&&(l.ignorePlacement||this._placementEngine.add(p),this._storePlacedGlyphs(p.shapes,p.footprint.minzoom,this.zoom,a.ddTextValues)),t&&(k.ignorePlacement||this._placementEngine.add(t),this._addPlacedIcons(t.shapes,t.footprint.minzoom,this.zoom,d.page,a.ddIconValues))}};h.prototype._addPlacedIcons=function(a,b,f,c,g){b=Math.max(f+v.log2(b),0);for(var d=this._iconVertexBuffer,e=this._iconIndexBuffer,q=0;q<a.length;q++){var k=a[q],D=Math.max(f+
v.log2(k.minzoom),b),m=Math.min(f+v.log2(k.maxzoom),25);if(!(m<=D)){var u=k.tl,l=k.tr,h=k.bl,r=k.br,n=k.mosaicRect,z=k.labelAngle,k=k.anchor,t=d.index,p=n.x,y=n.y,w=p+n.width,n=y+n.height;d.add(k.x,k.y,u.x,u.y,p,y,z,D,m,b,g);d.add(k.x,k.y,l.x,l.y,w,y,z,D,m,b,g);d.add(k.x,k.y,h.x,h.y,p,n,z,D,m,b,g);d.add(k.x,k.y,r.x,r.y,w,n,z,D,m,b,g);e.add(t+0,t+1,t+2);e.add(t+1,t+2,t+3);this._markerMap.has(c)?this._markerMap.get(c)[1]+=6:this._markerMap.set(c,[this._iconIndexStart+this._iconIndexCount,6]);this._iconIndexCount+=
2}}};h.prototype._addPlacedGlyphs=function(){var a=this,b=this._textVertexBuffer,f=this._textIndexBuffer;this._glyphBufferDataStorage.forEach(function(c,g){for(var d=0;d<c.length;d++){var e=c[d],q=b.index;b.add(e.glyphAnchor[0],e.glyphAnchor[1],e.tl[0],e.tl[1],e.xmin,e.ymin,e.labelAngle,e.minLod,e.maxLod,e.placementLod,e.ddValues);b.add(e.glyphAnchor[0],e.glyphAnchor[1],e.tr[0],e.tr[1],e.xmax,e.ymin,e.labelAngle,e.minLod,e.maxLod,e.placementLod,e.ddValues);b.add(e.glyphAnchor[0],e.glyphAnchor[1],
e.bl[0],e.bl[1],e.xmin,e.ymax,e.labelAngle,e.minLod,e.maxLod,e.placementLod,e.ddValues);b.add(e.glyphAnchor[0],e.glyphAnchor[1],e.br[0],e.br[1],e.xmax,e.ymax,e.labelAngle,e.minLod,e.maxLod,e.placementLod,e.ddValues);f.add(q+0,q+1,q+2);f.add(q+1,q+2,q+3);a._glyphMap.has(g)?a._glyphMap.get(g)[1]+=6:a._glyphMap.set(g,[a._textIndexStart+a._textIndexCount,6]);a._textIndexCount+=2}});this._glyphBufferDataStorage.clear()};h.prototype._storePlacedGlyphs=function(a,b,f,c){b=Math.max(f+v.log2(b),0);for(var g=
0;g<a.length;g++){var d=a[g],e=Math.max(f+v.log2(d.minzoom),b),q=Math.min(f+v.log2(d.maxzoom),25);if(!(q<=e)){var k=d.tl,h=d.tr,m=d.bl,u=d.br,l=d.labelAngle,x=d.anchor,r=d.mosaicRect;this._glyphBufferDataStorage.has(d.page)||this._glyphBufferDataStorage.set(d.page,[]);this._glyphBufferDataStorage.get(d.page).push({glyphAnchor:[x.x,x.y],tl:[k.x,k.y],tr:[h.x,h.y],bl:[m.x,m.y],br:[u.x,u.y],xmin:r.x,ymin:r.y,xmax:r.x+r.width,ymax:r.y+r.height,labelAngle:l,minLod:e,maxLod:q,placementLod:b,ddValues:c})}}};
h._findAnchors=function(a,b,f){b+=f;for(var c=0,g=a.length-1,d=0;d<g;d++)c+=B.Point.distance(a[d],a[d+1]);d=.5*(f||b);if(c<=d)return[];f=d/c;b=c/Math.max(Math.round(c/b),1);for(var c=0,g=-b/2,e=[],q=a.length-1,d=0;d<q;d++){for(var k=a[d],h=a[d+1],m=h.x-k.x,u=h.y-k.y,l=Math.sqrt(m*m+u*u),x=void 0;g+b<c+l;){var g=g+b,r=(g-c)/l,n=v.interpolate(k.x,h.x,r),r=v.interpolate(k.y,h.y,r);void 0===x&&(x=Math.atan2(u,m));e.push(new F.Anchor(n,r,x,d,f))}c+=l}return e};h._deviation=function(a,b,f){return Math.atan2((b.x-
a.x)*(f.y-b.y)-(b.y-a.y)*(f.x-b.x),(b.x-a.x)*(f.x-b.x)+(b.y-a.y)*(f.y-b.y))};h._honorsTextMaxAngle=function(a,b,f,c,g){var d=0;f/=2;for(var e=new B.Point(b.x,b.y),q=b.segment+1;d>-f;){--q;if(0>q)return!1;d-=B.Point.distance(a[q],e);e=a[q]}d+=B.Point.distance(a[q],a[q+1]);b=[];for(var e=0,k=a.length;d<f;){var h=a[q],m=void 0;do{++q;if(q===k)return!1;m=a[q]}while(m.isEqual(h));var u=q,l=void 0;do{++u;if(u===k)return!1;l=a[u]}while(l.isEqual(m));h=this._deviation(h,m,l);b.push({deviation:h,distToAnchor:d});
for(e+=h;d-b[0].distToAnchor>g;)e-=b.shift().deviation;if(Math.abs(e)>c)return!1;d+=B.Point.distance(m,l)}return!0};h._smoothVertices=function(a,b){if(!(0>=b)){var f=a.length;if(!(3>f)){var c=[],g=0;c.push(0);for(var d=1;d<f;d++)g+=B.Point.distance(a[d],a[d-1]),c.push(g);b=Math.min(b,.2*g);g=[];g.push(a[0].x);g.push(a[0].y);var e=a[f-1].x,h=a[f-1].y,d=B.Point.sub(a[0],a[1]);d.normalize();a[0].x+=b*d.x;a[0].y+=b*d.y;d.assignSub(a[f-1],a[f-2]);d.normalize();a[f-1].x+=b*d.x;a[f-1].y+=b*d.y;for(d=1;d<
f;d++)c[d]+=b;c[f-1]+=b;for(var k=.5*b,d=1;d<f-1;d++){for(var v=0,m=0,u=0,l=d-1;0<=l&&!(c[l+1]<c[d]-k);l--){var x=k+c[l+1]-c[d],r=c[l+1]-c[l],n=c[d]-c[l]<k?1:x/r;if(1E-6>Math.abs(n))break;var z=n*n,t=n*x-.5*z*r,p=n*r/b,y=a[l+1],w=a[l].x-y.x,C=a[l].y-y.y,v=v+p/t*(y.x*n*x+.5*z*(x*w-r*y.x)-z*n*r*w/3),m=m+p/t*(y.y*n*x+.5*z*(x*C-r*y.y)-z*n*r*C/3),u=u+p}for(l=d+1;l<f&&!(c[l-1]>c[d]+k);l++){x=k-c[l-1]+c[d];r=c[l]-c[l-1];n=c[l]-c[d]<k?1:x/r;if(1E-6>Math.abs(n))break;z=n*n;t=n*x-.5*z*r;p=n*r/b;y=a[l-1];w=
a[l].x-y.x;C=a[l].y-y.y;v+=p/t*(y.x*n*x+.5*z*(x*w-r*y.x)-z*n*r*w/3);m+=p/t*(y.y*n*x+.5*z*(x*C-r*y.y)-z*n*r*C/3);u+=p}g.push(v/u);g.push(m/u)}g.push(e);g.push(h);for(l=d=0;d<f;d++)a[d].x=g[l++],a[d].y=g[l++]}}};h._findCentroid=function(a){var b=a.length-1,f=0,c=0,g=0,d=a[0].x,e=a[0].y;4096<d&&(d=4096);0>d&&(d=0);4096<e&&(e=4096);0>e&&(e=0);for(var h=1;h<b;h++){var k=a[h].x,v=a[h].y,m=a[h+1].x,u=a[h+1].y;4096<k&&(k=4096);0>k&&(k=0);4096<v&&(v=4096);0>v&&(v=0);4096<m&&(m=4096);0>m&&(m=0);4096<u&&(u=
4096);0>u&&(u=0);var l=(k-d)*(u-e)-(m-d)*(v-e),f=f+l*(d+k+m),c=c+l*(e+v+u),g=g+l}f/=3*g;c/=3*g;return isNaN(f)||isNaN(c)?[]:[new F.Anchor(f,c)]};h._bidiEngine=new M;return h}(N)});