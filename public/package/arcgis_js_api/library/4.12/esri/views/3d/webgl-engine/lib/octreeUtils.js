// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../../core/libs/gl-matrix-2/vec3f64","./Octree"],function(p,f,k,h){function l(c,a){void 0===a&&(a=!1);var b=c instanceof h?c.root:c,d;d={};c instanceof h&&a&&(d.center=k.vec3f64.clone(c.center),d.size=c.size);0<b.terminals.length&&(d.terminals=b.terminals.map(function(a){return a.id}));null!==b.residents&&0<b.residents.length&&(d.residents=b.residents.map(function(a){return a.id}));null===b.residents&&b.children.forEach(function(a,b){a&&(d["child"+b]=l(a))});return d}
function m(c,a,b,d,g){for(var e=0;3>e;e++)if(c[e]<b[e]||c[e]>d[e])throw Error("[Octree Validation] Object is not within node bounds");c=.25*(d[0]-b[0]);if(g&&a<c)throw Error("[Octree Validation] Object is too small to be a terminal");if(!g&&a>c)throw Error("[Octree Validation] Object is too large to be a resident");}function n(c,a,b){b=b||c;b[0]=c[0]+a;b[1]=c[1]+a;b[2]=c[2]+a;return b}Object.defineProperty(f,"__esModule",{value:!0});f.stats=function(c){var a={numNodes:0,numObjects:0,numTerminals:0,
numResidents:0,numOutsiders:0,numInnerNodes:0,numTerminalNodes:0,maximumDepth:0,maxNumTerminals:0,maxNumResidents:0,maxNumObjects:0};c.forEachNode(function(b,d,g){null===b.residents?a.numInnerNodes++:a.numTerminalNodes++;a.numTerminals+=b.terminals.length;a.maxNumTerminals=Math.max(b.terminals.length,a.maxNumTerminals);d=b.terminals.length;null!==b.residents&&(a.numResidents+=b.residents.length,a.maxNumResidents=Math.max(b.residents.length,a.maxNumResidents),d+=b.residents.length);a.maxNumObjects=
Math.max(d,a.maxNumObjects);a.maximumDepth=Math.max(a.maximumDepth,Math.round(Math.log(c.size/g)*Math.LOG2E));return!0});a.numObjects=a.numOutsiders+a.numTerminals+a.numResidents;a.numNodes=a.numInnerNodes+a.numTerminalNodes;return a};f.debugDump=l;f.assert=function(c,a){c.forEachNode(function(b,d,g){var e=n(d,-g/2,k.vec3f64.create()),f=n(d,g/2,k.vec3f64.create());b.terminals.forEach(function(b){return m(a.getCenter(b),a.getRadius(b),e,f,!0)});if(null!==b.residents){if(b.residents.length>c.maximumObjectsPerNode)throw Error("[Octree Validation] Number of objects "+
b.residents.length+" exceeds maximum allowed ("+c.maximumObjectsPerNode+")");b.residents.forEach(function(b){return m(a.getCenter(b),a.getRadius(b),e,f,!1)})}var h=!1;b.children.forEach(function(a){if(a&&(h=!0,null!==b.residents))throw Error("[Octree Validation] Node has residents and children");});if(!h&&(null===b.residents||0===b.residents.length)&&0===b.terminals.length)throw Error("[Octree Validation] dangling empty node");return!0});return!0}});