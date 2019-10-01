// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","./compilerUtils"],function(v,c,u){function n(a){return a?72*a/c.DPI:0}function h(a,b){void 0===a&&(a=0);void 0===b&&(b=0);return{x:a,y:b}}function k(a,b){void 0===a&&(a=0);void 0===b&&(b=0);return[a,b]}function p(a,b){void 0===a&&(a=0);void 0===b&&(b=0);return{x:a,y:b}}function l(a,b){void 0===a&&(a=0);void 0===b&&(b=0);return[a,b]}function m(a,b){return b?(b[0]=a.x,b[1]=a.y,2<b.length&&(b[2]=0),b):[a.x,a.y]}function q(a){return h(a.x,a.y)}function r(a,b){a=(a instanceof
HTMLElement?a:a.surface).getBoundingClientRect();return h(b.clientX-a.left,b.clientY-a.top)}Object.defineProperty(c,"__esModule",{value:!0});var t=/^-?(\d+(\.\d+)?)\s*((px)|(pt))?$/i;c.DPI=96;c.pt2px=function(a){return a?a/72*c.DPI:0};c.px2pt=n;c.toPt=function(a){if("string"===typeof a){if(t.test(a)){var b=a.match(t),d=Number(b[1]),b=b[3]&&b[3].toLowerCase();a="-"===a.charAt(0);d="px"===b?n(d):d;return a?-d:d}console.warn("screenUtils.toPt: input not recognized!");return null}return a};c.createScreenPoint=
h;c.createScreenPointArray=k;c.createRenderScreenPoint=p;c.createRenderScreenPointArray=l;c.createRenderScreenPointArray3=function(a,b,d){void 0===a&&(a=0);void 0===b&&(b=0);void 0===d&&(d=0);return[a,b,d]};c.castRenderScreenPointArray=function(a){return a};c.castRenderScreenPointArray3=function(a){return a};c.castScreenPointArray=function(a){return a};c.screenToRender=function(a,b,d){var c,e;switch(a.type){case "2d":a=window.devicePixelRatio||1;c=b.x*a;e=b.y*a;break;case "3d":m(b,f),a.state.camera.screenToRender(f,
g),c=g[0],e=g[1]}return d?(d.x=c,d.y=e,d):p(c,e)};c.renderToScreen=function(a,b,d){var c,e;switch(a.type){case "2d":a=window.devicePixelRatio||1;c=b.x/a;e=b.y/a;break;case "3d":m(b,g),a.state.camera.renderToScreen(g,f),c=f[0],e=f[1]}return d?(d.x=c,d.y=e,d):h(c,e)};c.screenArrayToRender=function(a,b,c){var d,e;switch(a.type){case "2d":a=window.devicePixelRatio||1;d=b[0]*a;e=b[1]*a;break;case "3d":a.state.camera.screenToRender(b,g),d=g[0],e=g[1]}return c?(c[0]=d,c[1]=e,2<c.length&&(c[2]=0),c):l(d,
e)};c.renderArrayToScreen=function(a,b,c){var d,e;switch(a.type){case "2d":a=window.devicePixelRatio||1;d=b[0]/a;e=b[0]/a;break;case "3d":a.state.camera.renderToScreen(b,f),d=f[0],e=f[1]}return c?(c[0]=d,c[1]=e,c):k(d,e)};c.screenPointArrayToObject=function(a,b){return b?(b.x=a[0],b.y=a[1],b):{x:a[0],y:a[1]}};c.screenPointObjectToArray=m;c.createScreenPointFromEvent=q;c.createScreenPointFromNativeEvent=r;c.createScreenPointFromSupportedEvent=function(a,b){return b instanceof Event?r(a,b):q(b)};c.isSupportedScreenPointEvent=
function(a){if(a instanceof Event)return!0;if("object"===typeof a&&"type"in a)switch(a=a.type,a){case "click":case "double-click":case "pointer-down":case "pointer-drag":case "pointer-enter":case "pointer-leave":case "pointer-up":case "pointer-move":case "immediate-click":case "hold":case "drag":case "mouse-wheel":return!0;case "key-down":case "key-up":case "gamepad":case "focus":case "blur":break;default:u.neverReachedSilent(a)}return!1};var g=l(),f=k()});