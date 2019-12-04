// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../tsSupport/generatorHelper ../tsSupport/awaiterHelper ../Error ../has ../promiseUtils ./Connection ./RemoteClient ./WorkerOwner".split(" "),function(x,a,q,l,y,d,k,f,z,A){function r(){return l(this,void 0,void 0,function(){var a,b,d,g;return q(this,function(c){if(e)return[2,e];m=k.createAbortController();a=t+u;b=[];d=function(a){var c=A.create(a).then(function(b){return h[a]=b});b.push(c)};for(g=0;g<a;g++)d(g);e=k.all(b);return[2,e]})})}Object.defineProperty(a,"__esModule",
{value:!0});a.Connection=f;a.RemoteClient=z;(f=d("host-browser")?navigator.hardwareConcurrency:0)||(f=d("safari")&&d("mac")||d("trident")?8:2);var t=d("esri-workers-debug")?1:Math.max(1,Math.ceil(f/2)),u=d("esri-workers-debug")?1:Math.max(1,Math.floor(f/2)),v=0,h=[];a.initialize=function(){r()};a.openWithPorts=function(c,b){return new a.Connection(c.map(function(c){return new a.RemoteClient(c,b,{})}))};a.open=function(c,b){void 0===b&&(b={});return l(this,void 0,void 0,function(){var e,g,f,l,p,m,
w;return q(this,function(n){switch(n.label){case 0:if("string"!==typeof c)throw new y("workers:undefined-module","modulePath is missing");e=b.signal;g=b.strategy||"distributed";d("host-webworker")&&!d("esri-workers")&&(g="local");return"local"!==g?[3,2]:[4,k.create(function(a){return x([c],a)})];case 1:return f=n.sent(),k.throwIfAborted(e),l=b.client||f,p=a.RemoteClient.connect(f),[2,new a.Connection([new a.RemoteClient(p,l,b)])];case 2:return[4,r()];case 3:n.sent();k.throwIfAborted(e);if("dedicated"!==
g)return[3,5];m=t+v++;v%=u;return[4,h[m].open(c,b)];case 4:return p=n.sent(),[2,new a.Connection([new a.RemoteClient(p,b.client,b)])];case 5:return[4,k.all(h.map(function(a){return a.open(c,b)}))];case 6:return w=n.sent(),[2,new a.Connection(w.map(function(c){return new a.RemoteClient(c,b.client,b)}))]}})})};a.terminate=function(){e&&(m.abort(),e=null);for(var a=0;a<h.length;a++)h[a]&&h[a].terminate();h.length=0};var e=null,m});