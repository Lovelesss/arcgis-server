// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../tsSupport/generatorHelper ../tsSupport/awaiterHelper ../../kernel ../Error ../Logger ../promiseUtils ./utils ./workerFactory".split(" "),function(A,B,l,n,q,r,t,h,f,u){var v=t.getLogger("esri.core.workers"),p=f.MessageType.ABORT,w=f.MessageType.INVOKE,x=f.MessageType.OPEN,y=f.MessageType.OPENED,m=f.MessageType.RESPONSE;return function(){function e(a,b){this._outJobs=new Map;this._inJobs=new Map;this.worker=a;this.id=b;a.addEventListener("message",this._onMessage.bind(this));
a.addEventListener("error",function(a){a.preventDefault();v.error(a)})}e.create=function(a){return n(this,void 0,void 0,function(){var b;return l(this,function(c){switch(c.label){case 0:return[4,u.createWorker()];case 1:return b=c.sent(),[2,new e(b,a)]}})})};e.prototype.terminate=function(){this.worker.terminate()};e.prototype.open=function(a,b){void 0===b&&(b={});return n(this,void 0,void 0,function(){var c,d,e=this;return l(this,function(k){c=b.signal;d=f.newJobId();return[2,h.create(function(b,
f){b={resolve:b,reject:f};h.onAbortOrThrow(c,function(){e._outJobs["delete"](d);e._post({type:p,jobId:d})});e._outJobs.set(d,b);e._post({type:x,jobId:d,modulePath:a})})]})})};e.prototype._onMessage=function(a){if(a=f.receiveMessage(a))switch(a.type){case y:case m:this._onResponse(a);break;case p:this._onCancel(a);break;case w:this._onInvoke(a)}};e.prototype._onCancel=function(a){var b=this._inJobs;a=a.jobId;var c=b.get(a);c&&(c.controller&&c.controller.abort(),b["delete"](a))};e.prototype._onInvoke=
function(a){var b=this,c=a.methodName,d=a.jobId,e=a.data;a=a.abortable?h.createAbortController():null;var k=this._inJobs,l=q.workerMessages[c],g;try{if("function"!==typeof l)throw new TypeError(c+" is not a function");g=l.call(null,e,{signal:a?a.signal:null})}catch(z){this._post({type:m,jobId:d,error:f.toInvokeError(z)});return}if(h.isThenable(g)){k.set(d,{controller:a,promise:g});if(a&&"cancel"in g)h.onAbort(a.signal,function(){return g.cancel()});g.then(function(a){k.has(d)&&(k["delete"](d),b._post({type:m,
jobId:d},a))}).catch(function(a){k.has(d)&&(k["delete"](d),a||(a={message:"Error encountered at method"+c}),h.isAbortError(a)||b._post({type:m,jobId:d,error:f.toInvokeError(a||{message:"Error encountered at method "+c})}))})}else this._post({type:m,jobId:d},g)};e.prototype._onResponse=function(a){var b=a.jobId,c=a.error;a=a.data;var d=this._outJobs.get(b);d&&(this._outJobs["delete"](b),c?d.reject(r.fromJSON(JSON.parse(c))):d.resolve(a))};e.prototype._post=function(a,b,c){return f.postMessage(this.worker,
a,b,c)};return e}()});