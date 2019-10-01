// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../webgl-engine/lib/Util"],function(r,m,n){function p(a,b,g){g&&(b/=Math.SQRT2);for(var h=new Uint8Array(4*a*a),f=0;f<a;f++)for(var e=0;e<a;e++){var c=e-.5*a+.25,d=-f+.5*a-.75,k=f*a+e;if(g)var l=(c+d)/Math.SQRT2,d=(d-c)/Math.SQRT2,c=l;c=Math.max(Math.abs(c),Math.abs(d))-.5*b;c=c/a+.5;n.packFloatRGBA(c,h,4*k)}return h}function q(a,b,g){g&&(b*=Math.SQRT2);b*=.5;for(var h=new Uint8Array(4*a*a),f=0;f<a;f++)for(var e=0;e<a;e++){var c=e-.5*a,d=-f+.5*a-1,k=f*a+e;if(g)var l=
(c+d)/Math.SQRT2,d=(d-c)/Math.SQRT2,c=l;l=void 0;c=Math.abs(c);d=Math.abs(d);l=c>d?c>b?Math.sqrt((c-b)*(c-b)+d*d):d:d>b?Math.sqrt(c*c+(d-b)*(d-b)):c;l=l/a+.5;n.packFloatRGBA(l,h,4*k)}return h}Object.defineProperty(m,"__esModule",{value:!0});m.createCircle=function(a,b){var g=new Uint8Array(4*a*a),h=a/2-.5;b/=2;for(var f=0;f<a;f++)for(var e=0;e<a;e++){var c=e+a*f,d=e-h,k=f-h,d=Math.sqrt(d*d+k*k)-b,d=d/a+.5;n.packFloatRGBA(d,g,4*c)}return g};m.createSquare=function(a,b){return p(a,b,!1)};m.createKite=
function(a,b){return p(a,b,!0)};m.createCross=function(a,b){return q(a,b,!1)};m.createX=function(a,b){return q(a,b,!0)};m.createTriangle=function(a,b){for(var g=new Uint8Array(4*a*a),h=Math.sqrt(1.25),f=(a-b)/2,e=0;e<a;e++)for(var c=0;c<a;c++){var d=(c-f)/b,k=(e-f+.75)/b;n.packFloatRGBA(Math.max(-(1*d+-.5*k)/h,(1*(d-1)+-.5*-k)/h,-k)*b/a+.5,g,4*(e*a+c))}return g}});