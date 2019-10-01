// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../geometry/Point"],function(w,l,q){function u(a,b,c){var d={x:0,y:0};b&&(d.z=0);c&&(d.m=0);for(var g=0,e=a[0],f=0;f<a.length;f++){var h=a[f],k;a:if(h.length!==e.length)k=!1;else{for(k=0;k<h.length;k++)if(h[k]!==e[k]){k=!1;break a}k=!0}if(!1===k){k=v(e,h,b);var n=h,l=b,m=c,p={x:(e[0]+n[0])/2,y:(e[1]+n[1])/2};l&&(p.z=(e[2]+n[2])/2);l&&m?p.m=(e[3]+n[3])/2:m&&(p.m=(e[2]+n[2])/2);e=p;e.x*=k;e.y*=k;d.x+=e.x;d.y+=e.y;b&&(e.z*=k,d.z+=e.z);c&&(e.m*=k,d.m+=e.m);g+=k;e=h}}0<
g?(d.x/=g,d.y/=g,b&&(d.z/=g),c&&(d.m/=g)):(d.x=a[0][0],d.y=a[0][1],b&&(d.z=a[0][2]),c&&b?d.m=a[0][3]:c&&(d.m=a[0][2]));return d}function v(a,b,c){var d=b[0]-a[0];a=b[1]-a[1];return c?(b=b[2]-b[2],Math.sqrt(d*d+a*a+b*b)):Math.sqrt(d*d+a*a)}function m(a,b,c){for(void 0===c&&(c=0);a<c;)a+=b;for(c+=b;a>=c;)a-=b;return a}function r(a,b){return Math.atan2(b.y-a.y,b.x-a.x)}function t(a,b,c){var d=a.x-b.x;a=a.y-b.y;var g=c.x-b.x;b=c.y-b.y;return Math.atan2(g*a-d*b,g*d+b*a)}Object.defineProperty(l,"__esModule",
{value:!0});l.centroidPolyline=function(a){for(var b={x:0,y:0,spatialReference:a.spatialReference.toJSON()},c={x:0,y:0,spatialReference:a.spatialReference.toJSON()},d=0,g=0,e=0;e<a.paths.length;e++)if(0!==a.paths[e].length){var f;f=a.paths[e];var h=!0===a.hasZ;if(1>=f.length)f=0;else{for(var k=0,l=1;l<f.length;l++)k+=v(f[l-1],f[l],h);f=k}0===f?(h=u(a.paths[e],!0===a.hasZ,!0===a.hasM),b.x+=h.x,b.y+=h.y,!0===a.hasZ&&(b.z+=h.z),!0===a.hasM&&(b.m+=h.m),++d):(h=u(a.paths[e],!0===a.hasZ,!0===a.hasM),c.x+=
h.x*f,c.y+=h.y*f,!0===a.hasZ&&(c.z+=h.z*f),!0===a.hasM&&(c.m+=h.m*f),g+=f)}return 0<g?(c.x/=g,c.y/=g,!0===a.hasZ&&(c.z/=g),!0===a.hasM&&(c.m/=g),new q(c)):0<d?(b.x/=d,b.y/=d,!0===a.hasZ&&(c.z/=d),!0===a.hasM&&(b.m/=d),new q(b)):null};l.centroidMultiPoint=function(a){if(0===a.points.length)return null;for(var b=0,c=0,d=0,g=0,e=0;e<a.points.length;e++){var f=a.getPoint(e);!0===f.hasZ&&(d+=f.z);!0===f.hasM&&(g+=f.m);b+=f.x;c+=f.y;g+=f.m}b={x:b/a.points.length,y:c/a.points.length,spatialReference:null};
b.spatialReference=a.spatialReference.toJSON();!0===a.hasZ&&(b.z=d/a.points.length);!0===a.hasM&&(b.m=g/a.points.length);return new q(b)};l.angleRad=r;l.angle2D=function(a,b){return m(r(a,b),2*Math.PI)*(180/Math.PI)};l.bearing2D=function(a,b){return m(Math.PI/2-r(a,b),2*Math.PI)*(180/Math.PI)};l.angleBetweenRad=t;l.angleBetween2D=function(a,b,c){return m(t(a,b,c),2*Math.PI)*(180/Math.PI)};l.bearingBetween2D=function(a,b,c){return m(-1*t(a,b,c),2*Math.PI)*(180/Math.PI)}});