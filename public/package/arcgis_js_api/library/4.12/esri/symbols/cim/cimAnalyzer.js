// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../core/tsSupport/generatorHelper ../../core/tsSupport/awaiterHelper ../../Color ../../core/Logger ../../core/promiseUtils ../../support/arcadeOnDemand ./CIMSymbolHelper ./enums ./SDFHelper ./utils ../../views/2d/arcade/utils".split(" "),function(Ha,O,v,w,oa,pa,qa,T,D,C,ja,B,U){function F(a){return a?{r:a[0],g:a[1],b:a[2],a:a[3]/255}:{r:0,g:0,b:0,a:0}}function P(a){switch(a){case "Butt":return C.CapType.BUTT;case "Square":return C.CapType.SQUARE;default:return C.CapType.ROUND}}
function Q(a){switch(a){case "Bevel":return C.JoinType.BEVEL;case "Miter":return C.JoinType.MITER;default:return C.JoinType.ROUND}}function ra(a){switch(a){default:return"left";case "Right":return"right";case "Center":return"center";case "Justify":return"justify"}}function sa(a){switch(a){default:return"top";case "Center":return"middle";case "Baseline":return"baseline";case "Bottom":return"bottom"}}function ta(a,c,b,n,k){return w(this,void 0,void 0,function(){var h,f,d,m,l,e,g;return v(this,function(r){switch(r.label){case 0:if(!a)return[2];
h=a.symbolLayers;if(!h)return[2];d=D.CIMSymbolHelper.getSize(a);"CIMPointSymbol"===a.type&&"Map"===a.angleAlignment&&(f=C.Alignment.MAP);m=h.length;r.label=1;case 1:if(!m--)return[3,23];l=h[m];if(!l||!1===l.enable)return[3,1];e=[];D.OverrideHelper.findApplicableOverrides(l,c,e);g=l.type;switch(g){case "CIMSolidFill":return[3,2];case "CIMPictureFill":return[3,4];case "CIMHatchFill":return[3,6];case "CIMGradientFill":return[3,8];case "CIMSolidStroke":return[3,10];case "CIMPictureStroke":return[3,12];
case "CIMGradientStroke":return[3,14];case "CIMCharacterMarker":return[3,16];case "CIMPictureMarker":return[3,17];case "CIMVectorMarker":return[3,19]}return[3,21];case 2:return[4,ua(l,e,n,k)];case 3:return r.sent(),[3,22];case 4:return[4,va(l,e,n,k)];case 5:return r.sent(),[3,22];case 6:return[4,wa(l,e,n,k)];case 7:return r.sent(),[3,22];case 8:return[4,xa(l,e,n,k)];case 9:return r.sent(),[3,22];case 10:return[4,ya(l,e,n,k,"CIMPolygonSymbol"===a.type,d)];case 11:return r.sent(),[3,22];case 12:return[4,
za(l,e,n,k,"CIMPolygonSymbol"===a.type,d)];case 13:return r.sent(),[3,22];case 14:return[4,Aa(l,e,n,k,"CIMPolygonSymbol"===a.type,d)];case 15:return r.sent(),[3,22];case 16:return[3,22];case 17:return[4,Ba(l,e,n,k,f,d)];case 18:return r.sent(),[3,22];case 19:return[4,Ca(l,e,b,n,k,f,d)];case 20:return r.sent(),[3,22];case 21:Da.error("Cannot analyze CIM layer",l.type),r.label=22;case 22:return[3,1];case 23:return[2]}})})}function ua(a,c,b,n){return w(this,void 0,void 0,function(){var k,h,f,d,m,l;return v(this,
function(e){switch(e.label){case 0:return k=a.primitiveName,h=F(a.color),f=B.hashString(JSON.stringify(a)).toString(),m=(d=n).push,l={type:"fill",templateHash:f,materialHash:0===c.length?f:function(a,b,c){return f},cim:a,materialOverrides:null,colorLocked:a.colorLocked},[4,q(k,"Color",c,b,h,G)];case 1:return m.apply(d,[(l.color=e.sent(),l.height=0,l.angle=0,l.offsetX=0,l.offsetY=0,l.scaleX=1,l)]),[2]}})})}function va(a,c,b,n){return w(this,void 0,void 0,function(){var k,h,f,d,m,l,e;return v(this,
function(g){switch(g.label){case 0:return k=a.primitiveName,h=F(a.tintColor),f=B.hashString(JSON.stringify(a)).toString(),d=B.hashString(""+a.url+JSON.stringify(a.colorSubstitutions)).toString(),l=(m=n).push,e={type:"fill",templateHash:f,materialHash:0===c.length?d:function(a,b,c){return d},cim:a,materialOverrides:null,colorLocked:a.colorLocked},[4,q(k,"TintColor",c,b,h,G)];case 1:return e.color=g.sent(),[4,q(k,"Height",c,b,a.height)];case 2:return e.height=g.sent(),[4,q(k,"ScaleX",c,b,a.scaleX)];
case 3:return e.scaleX=g.sent(),[4,q(k,"Rotation",c,b,a.rotation)];case 4:return e.angle=g.sent(),[4,q(k,"OffsetX",c,b,a.offsetX)];case 5:return e.offsetX=g.sent(),[4,q(k,"OffsetY",c,b,a.offsetY)];case 6:return l.apply(m,[(e.offsetY=g.sent(),e)]),[2]}})})}function wa(a,c,b,n){return w(this,void 0,void 0,function(){var k,h,f,d,m,l,e,g;return v(this,function(r){switch(r.label){case 0:k=["Rotation","OffsetX","OffsetY"];h=c.filter(function(b){return b.primitiveName!==a.primitiveName&&-1===k.indexOf(b.propertyName)});
f=a.primitiveName;d=B.hashString(JSON.stringify(a)).toString();l=(m=n).push;e={type:"fill",templateHash:d};if(0!==c.length)return[3,1];g=d;return[3,3];case 1:return[4,aa(d,h,b)];case 2:g=r.sent(),r.label=3;case 3:return e.materialHash=g,e.cim=a,e.materialOverrides=h,e.colorLocked=a.colorLocked,e.color={r:128,g:128,b:128,a:1},e.height=0,e.scaleX=1,[4,q(f,"Rotation",c,b,a.rotation)];case 4:return e.angle=r.sent(),[4,q(f,"OffsetX",c,b,a.offsetX)];case 5:return e.offsetX=r.sent(),[4,q(f,"OffsetY",c,b,
a.offsetY)];case 6:return l.apply(m,[(e.offsetY=r.sent(),e)]),[2]}})})}function xa(a,c,b,n){return w(this,void 0,void 0,function(){var k,h,f,d,m;return v(this,function(l){switch(l.label){case 0:k=B.hashString(JSON.stringify(a)).toString();f=(h=n).push;d={type:"fill",templateHash:k};if(0!==c.length)return[3,1];m=k;return[3,3];case 1:return[4,aa(k,c,b)];case 2:m=l.sent(),l.label=3;case 3:return f.apply(h,[(d.materialHash=m,d.cim=a,d.materialOverrides=null,d.colorLocked=a.colorLocked,d.color={r:128,
g:128,b:128,a:1},d.height=0,d.angle=0,d.offsetX=0,d.offsetY=0,d.scaleX=1,d)]),[2]}})})}function ya(a,c,b,n,k,h){return w(this,void 0,void 0,function(){var f,d,m,l,e,g,r,y,u,t;return v(this,function(p){switch(p.label){case 0:return f=B.hashString(JSON.stringify(a)).toString(),d=a.primitiveName,m=F(a.color),l=void 0!==a.width?a.width:4,e=P(a.capStyle),g=Q(a.joinStyle),r=a.miterLimit,u=(y=n).push,t={type:"line",templateHash:f,materialHash:0===c.length?f:function(a,b,c){return f},cim:a,materialOverrides:null,
isOutline:k,colorLocked:a.colorLocked},[4,q(d,"Color",c,b,m,G)];case 1:return t.color=p.sent(),[4,q(d,"Width",c,b,l)];case 2:return t.width=p.sent(),[4,q(d,"CapStyle",c,b,e)];case 3:return t.cap=p.sent(),[4,q(d,"JoinStyle",c,b,g)];case 4:return t.join=p.sent(),[4,q(d,"MiterLimit",c,b,r)];case 5:return u.apply(y,[(t.miterLimit=p.sent(),t.referenceWidth=h,t.zOrder=R(a.name),t.isDashed=!1,t)]),[2]}})})}function za(a,c,b,n,k,h){return w(this,void 0,void 0,function(){var f,d,m,l,e,g,r,y,u,t,p;return v(this,
function(z){switch(z.label){case 0:return f=B.hashString(""+a.url+JSON.stringify(a.colorSubstitutions)).toString(),d=a.primitiveName,m=F(a.tintColor),l=void 0!==a.width?a.width:4,e=P(a.capStyle),g=Q(a.joinStyle),r=a.miterLimit,y=B.hashString(JSON.stringify(a)).toString(),t=(u=n).push,p={type:"line",templateHash:y,materialHash:0===c.length?f:function(a,b,c){return f},cim:a,materialOverrides:null,isOutline:k,colorLocked:a.colorLocked},[4,q(d,"TintColor",c,b,m,G)];case 1:return p.color=z.sent(),[4,q(d,
"Width",c,b,l)];case 2:return p.width=z.sent(),[4,q(d,"CapStyle",c,b,e)];case 3:return p.cap=z.sent(),[4,q(d,"JoinStyle",c,b,g)];case 4:return p.join=z.sent(),[4,q(d,"MiterLimit",c,b,r)];case 5:return t.apply(u,[(p.miterLimit=z.sent(),p.referenceWidth=h,p.zOrder=R(a.name),p.isDashed=!1,p)]),[2]}})})}function Aa(a,c,b,n,k,h){return w(this,void 0,void 0,function(){var f,d,m,l,e,g,r,y,u,t;return v(this,function(p){switch(p.label){case 0:f=a.primitiveName;d=void 0!==a.width?a.width:4;m=P(a.capStyle);
l=Q(a.joinStyle);e=a.miterLimit;g=B.hashString(JSON.stringify(a)).toString();y=(r=n).push;u={type:"line",templateHash:g};if(0!==c.length)return[3,1];t=g;return[3,3];case 1:return[4,aa(g,c,b)];case 2:t=p.sent(),p.label=3;case 3:return u.materialHash=t,u.cim=a,u.materialOverrides=null,u.isOutline=k,u.colorLocked=a.colorLocked,u.color={r:128,g:128,b:128,a:1},[4,q(f,"Width",c,b,d)];case 4:return u.width=p.sent(),[4,q(f,"CapStyle",c,b,m)];case 5:return u.cap=p.sent(),[4,q(f,"JoinStyle",c,b,l)];case 6:return u.join=
p.sent(),[4,q(f,"MiterLimit",c,b,e)];case 7:return y.apply(r,[(u.miterLimit=p.sent(),u.referenceWidth=h,u.zOrder=R(a.name),u.isDashed=!1,u)]),[2]}})})}function Ba(a,c,b,n,k,h){return w(this,void 0,void 0,function(){var f,d,m,l,e,g,r,y,u,t,p;return v(this,function(z){switch(z.label){case 0:return f=a.primitiveName,d=a.size,m=a.scaleX,l=a.rotation,e=a.offsetX,g=a.offsetY,r=F(a.tintColor),y=B.hashString(""+a.url+JSON.stringify(a.colorSubstitutions)).toString(),t=(u=n).push,p={type:"marker",templateHash:B.hashString(JSON.stringify(a)).toString(),
materialHash:0===c.length?y:function(a,b,c){return y},cim:a,materialOverrides:null,colorLocked:a.colorLocked,scaleSymbolsProportionally:!1,alignment:k,anchorPoint:a.anchorPoint,isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits},[4,q(f,"Size",c,b,d)];case 1:return p.size=z.sent(),[4,q(f,"ScaleX",c,b,m)];case 2:return p.scaleX=z.sent(),[4,q(f,"Rotation",c,b,l)];case 3:return p.rotation=z.sent(),[4,q(f,"OffsetX",c,b,e)];case 4:return p.offsetX=z.sent(),[4,q(f,"OffsetY",c,b,g)];case 5:return p.offsetY=
z.sent(),[4,q(f,"TintColor",c,b,r,G)];case 6:return t.apply(u,[(p.color=z.sent(),p.outlineColor={r:0,g:0,b:0,a:0},p.outlineWidth=0,p.frameHeight=0,p.rotateClockwise=a.rotateClockwise,p.referenceSize=h,p.sizeRatio=1,p)]),[2]}})})}function Ca(a,c,b,n,k,h,f){return w(this,void 0,void 0,function(){var d,m,l,e,g,r,q,u;return v(this,function(t){switch(t.label){case 0:d=a.markerGraphics;if(!d)return[2];m=0;a.scaleSymbolsProportionally&&(l=a.frame)&&(m=l.ymax-l.ymin);e=[];g=0;for(r=d;g<r.length;g++)if(q=
r[g])if(u=q.symbol)switch(u.type){case "CIMPointSymbol":case "CIMLineSymbol":case "CIMPolygonSymbol":e.push(Ea(a,q,c,n,k,h,f,m));break;case "CIMTextSymbol":e.push(Fa(a,q,c,b,n,k,h,f,m))}return[4,qa.all(e)];case 1:return t.sent(),[2]}})})}function Fa(a,c,b,n,k,h,f,d,m){return w(this,void 0,void 0,function(){var l,e,g,r,y,u,t,p,z,w,ka,C,J,G,H,S,K,L,I,M,V,A;return v(this,function(v){switch(v.label){case 0:l=[];D.OverrideHelper.findApplicableOverrides(c,b,l);e=c.geometry;if(void 0===e.x||void 0===e.y)return[2];
g=c.symbol;g.font={family:g.fontFamilyName};r=a.frame;y=e.x-.5*(r.xmin+r.xmax);u=e.y-.5*(r.ymin+r.ymax);t=a.size/m;p=a.primitiveName;z=(g.height||0)*t;w=g.angle||0;ka=((g.offsetX||0)+y)*t;C=((g.offsetY||0)+u)*t;J=F(D.CIMSymbolHelper.getFillColor(g));G=F(D.CIMSymbolHelper.getStrokeColor(g));H=D.CIMSymbolHelper.getStrokeWidth(g);H||(G=F(D.CIMSymbolHelper.getFillColor(g.haloSymbol)),H=g.haloSize*t);S="";K=0;for(L=b;K<L.length;K++)I=L[K],I.primitiveName===p&&void 0!==I.value&&(S+="|"+I.primitiveName+
"|"+I.propertyName+"|"+JSON.stringify(I.value));V=(M=h).push;A={type:"text",templateHash:B.hashString(JSON.stringify(c)+S).toString(),materialHash:function(a,b,c){return g.fontFamilyName},cim:g,materialOverrides:null,colorLocked:a.colorLocked,alignment:f,anchorPoint:{x:a.anchorPoint?a.anchorPoint.x:0,y:a.anchorPoint?a.anchorPoint.y:0},isAbsoluteAnchorPoint:"Relative"!==a.anchorPointUnits,fontName:g.fontFamilyName,decoration:"none"};return[4,q(p,"Height",b,k,z)];case 1:return A.size=v.sent(),[4,q(p,
"Rotation",b,k,w)];case 2:return A.angle=v.sent(),[4,q(p,"OffsetX",b,k,ka)];case 3:return A.offsetX=v.sent(),[4,q(p,"OffsetY",b,k,C)];case 4:return V.apply(M,[(A.offsetY=v.sent(),A.horizontalAlignment=ra(g.horizontalAlignment),A.verticalAlignment=sa(g.verticalAlignment),A.text=Ga(n,k,c.textString,g.textCase),A.color=J,A.outlineColor=G,A.outlineSize=H,A.referenceSize=d,A.sizeRatio=1,A)]),[2]}})})}function Ea(a,c,b,n,k,h,f,d){return w(this,void 0,void 0,function(){var m,l,e,g,r,y;return v(this,function(u){switch(u.label){case 0:m=
c.symbol;l=c.geometry;if(!l)return[2];e=ja.getExtent(l);g=m.symbolLayers;if(!g)return[2];r=g.length;y=function(){var m,p,u,y,w,C,J,O,H,S,K,L,I,M,V,A,P,Q,R,ba,da,N,ea,W,T,U,E,fa,ga,X,Y,Z,ha,la,ca,ma,na,x,ia;return v(this,function(t){switch(t.label){case 0:m=g[r];if(!m||!1===m.enable)return[2,"continue"];p=m.type;switch(p){case "CIMSolidFill":return[3,1];case "CIMSolidStroke":return[3,1]}return[3,13];case 1:u=ja.getSDFMetrics(e,a.frame,a.size,a.anchorPoint,"Relative"!==a.anchorPointUnits);y=u[0];w=
u[1];C=u[2];J="CIMSolidFill"===m.type;O={type:"sdf",geom:l,asFill:J};H=a.primitiveName;S=a.size;K=a.rotation;L=a.offsetX;I=a.offsetY;M=m.primitiveName;V=J?F(D.CIMSymbolHelper.getFillColor(m)):F(D.CIMSymbolHelper.getStrokeColor(m));A=J?{r:0,g:0,b:0,a:0}:F(D.CIMSymbolHelper.getStrokeColor(m));P=D.CIMSymbolHelper.getStrokeWidth(m);if(!J&&!P)return[3,20];Q=!1;R="";ba=0;for(da=b;ba<da.length;ba++)if(N=da[ba],N.primitiveName===M||N.primitiveName===H)void 0!==N.value?R+="|"+N.primitiveName+"|"+N.propertyName+
"|"+JSON.stringify(N.value):N.valueExpressionInfo&&(Q=!0);ea=B.hashString(JSON.stringify(O)).toString();W=B.hashString(JSON.stringify(m)+JSON.stringify(c)+R).toString();U=(T=k).push;E={type:"marker",templateHash:W,materialHash:Q?function(a,b,c){return ea}:ea,cim:O,materialOverrides:null,colorLocked:a.colorLocked,scaleSymbolsProportionally:a.scaleSymbolsProportionally,alignment:h,anchorPoint:{x:w,y:C},isAbsoluteAnchorPoint:!1};return[4,q(H,"Size",b,n,S)];case 2:return E.size=t.sent(),E.scaleX=1,[4,
q(H,"Rotation",b,n,K)];case 3:return E.rotation=t.sent(),[4,q(H,"OffsetX",b,n,L)];case 4:return E.offsetX=t.sent(),[4,q(H,"OffsetY",b,n,I)];case 5:return E.offsetY=t.sent(),[4,q(M,"Color",b,n,V,G)];case 6:E.color=t.sent();if(!J)return[3,7];fa={r:0,g:0,b:0,a:0};return[3,9];case 7:return[4,q(M,"Color",b,n,A,G)];case 8:fa=t.sent(),t.label=9;case 9:E.outlineColor=fa;if(!J)return[3,10];ga=0;return[3,12];case 10:return[4,q(M,"Width",b,n,P)];case 11:ga=t.sent(),t.label=12;case 12:return U.apply(T,[(E.outlineWidth=
ga,E.frameHeight=d,E.rotateClockwise=a.rotateClockwise,E.referenceSize=f,E.sizeRatio=y,E)]),[3,20];case 13:X={type:a.type,enable:!0,name:a.name,colorLocked:a.colorLocked,primitiveName:a.primitiveName,anchorPoint:a.anchorPoint,anchorPointUnits:a.anchorPointUnits,offsetX:a.offsetX,offsetY:a.offsetY,rotateClockwise:a.rotateClockwise,rotation:a.rotation,size:a.size,billboardMode3D:a.billboardMode3D,depth3D:a.depth3D,frame:a.frame,markerGraphics:[c],scaleSymbolsProportionally:a.scaleSymbolsProportionally,
respectFrame:a.respectFrame,clippingPath:a.clippingPath};Y=[];Z=["Color","Size","Rotation","OffsetX","OffsetY"];Y=b.filter(function(b){return b.primitiveName!==a.primitiveName&&-1===Z.indexOf(b.propertyName)});ha=D.CIMSymbolHelper.getTextureAnchor(X);w=ha[0];C=ha[1];la=JSON.stringify(X);ca=a.primitiveName;K=a.rotation;L=a.offsetX;I=a.offsetY;W=B.hashString(JSON.stringify(X)).toString();na=(ma=k).push;x={type:"marker",templateHash:W};if(0!==Y.length)return[3,14];ia=W;return[3,16];case 14:return[4,
aa(la,Y,n)];case 15:ia=t.sent(),t.label=16;case 16:return x.materialHash=ia,x.cim=X,x.materialOverrides=Y,x.colorLocked=a.colorLocked,x.scaleSymbolsProportionally=a.scaleSymbolsProportionally,x.alignment=h,x.anchorPoint={x:w,y:C},x.isAbsoluteAnchorPoint=!1,x.size=a.size,x.scaleX=1,[4,q(ca,"Rotation",b,n,K)];case 17:return x.rotation=t.sent(),[4,q(ca,"OffsetX",b,n,L)];case 18:return x.offsetX=t.sent(),[4,q(ca,"OffsetY",b,n,I)];case 19:return na.apply(ma,[(x.offsetY=t.sent(),x.color={r:0,g:0,b:0,a:0},
x.outlineColor={r:0,g:0,b:0,a:0},x.outlineWidth=0,x.frameHeight=d,x.rotateClockwise=a.rotateClockwise,x.referenceSize=f,x.sizeRatio=1,x)]),[3,20];case 20:return[2]}})};u.label=1;case 1:return r--?[5,y()]:[3,3];case 2:return u.sent(),[3,1];case 3:return[2]}})})}function R(a){return a&&0===a.indexOf("Level_")?parseInt(a.substr(6),10):0}function G(a){if(!a||0===a.length)return null;a=(new oa(a)).toRgba();return{r:a[0],g:a[1],b:a[2],a:a[3]}}function q(a,c,b,n,k,h){return w(this,void 0,void 0,function(){var f,
d,m,l,e;return v(this,function(g){switch(g.label){case 0:if(!a)return[3,4];f=function(b){var d,l,e;return v(this,function(g){switch(g.label){case 0:if(b.primitiveName!==a||b.propertyName!==c)return[3,2];if(void 0!==b.value)return[2,{value:b.value}];d=b.valueExpressionInfo;if(!d)return[3,2];l=d.expression;return[4,T.createRendererExpression(l,n.spatialReference,n.fields)];case 1:return e=g.sent(),[2,{value:function(a,b,c){a=U.callWithFeature(e,a,{$view:c},n.geometryType,b);null!==a&&h&&(a=h(a));return null!==
a?a:k}}];case 2:return[2]}})};d=0;m=b;g.label=1;case 1:if(!(d<m.length))return[3,4];l=m[d];return[5,f(l)];case 2:e=g.sent();if("object"===typeof e)return[2,e.value];g.label=3;case 3:return d++,[3,1];case 4:return[2,k]}})})}function Z(a,c){switch(c){case "LowerCase":return a.toLowerCase();case "Allcaps":return a.toUpperCase();default:return a}}function Ga(a,c,b,n){if(!a||-1===b.indexOf("["))return Z(b,n);c=function(a){for(var b=a.length;b--;)if(-1===" /-,\n".indexOf(a.charAt(b)))return!1;return!0};
var k=[],h=0,f=-1;do f=b.indexOf("[",h),f>=h&&(f>h&&(h=b.substr(h,f-h),k.push([h,null,c(h)])),h=f+1,f=b.indexOf("]",h),f>=h&&(f>h&&(h=b.substr(h,f-h),(h=a[h])&&k.push([null,h,!1])),h=f+1));while(-1!==f);h<b.length-1&&(h=b.substr(h),k.push([h,null,c(h)]));return function(a,b,c){b="";c=null;for(var e=0;e<k.length;e++){var g=k[e],d=g[0],f=g[1],g=g[2];if(d)g?c=d:(c&&(b+=c,c=null),b+=d);else if(d=a.attributes[f])c&&(b+=c,c=null),b+=d}return Z(b,n)}}function aa(a,c,b){return w(this,void 0,void 0,function(){var n,
k,h,f;return v(this,function(d){switch(d.label){case 0:n=function(a){var c,d,g;return v(this,function(e){switch(e.label){case 0:c=a.valueExpressionInfo;if(!c)return[3,2];d=c.expression;return[4,T.createRendererExpression(d,b.spatialReference,b.fields)];case 1:g=e.sent(),a.fn=function(a,c,d){return U.callWithFeature(g,a,{$view:d},b.geometryType,c)},e.label=2;case 2:return[2]}})},k=0,h=c,d.label=1;case 1:if(!(k<h.length))return[3,4];f=h[k];return[5,n(f)];case 2:d.sent(),d.label=3;case 3:return k++,
[3,1];case 4:return[2,function(b,d,e){for(var g=0;g<c.length;g++){var f=c[g];f.value=f.fn?f.fn(b,d,e):void 0}return B.hashString(a+D.OverrideHelper.buildOverrideKey(c)).toString()}]}})})}Object.defineProperty(O,"__esModule",{value:!0});var Da=pa.getLogger("esri.symbols.cim.cimAnalyzer");O.analyzeCIMSymbol=function(a,c,b,n){return w(this,void 0,void 0,function(){var k,h,f,d;return v(this,function(m){switch(m.label){case 0:k=n?n:[];if(!a)return[2,k];"CIMSymbolReference"===a.type?(h=a.symbol,f=a.primitiveOverrides):
(h=a,f=null);d=h.type;switch(d){case "CIMPointSymbol":return[3,1];case "CIMLineSymbol":return[3,1];case "CIMPolygonSymbol":return[3,1];case "CIMTextSymbol":return[3,3]}return[3,4];case 1:return[4,ta(h,f,c,b,k)];case 2:return m.sent(),[3,4];case 3:return[3,4];case 4:return[2,k]}})})};O.analyzeCIMResource=function(a,c,b){if(!b||0===b.length)return c;a=JSON.parse(JSON.stringify(c));D.OverrideHelper.applyOverrides(a,b);return a}});