// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/assignHelper ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/cookie dojo/regexp ../config ../kernel ../request ../core/Accessor ../core/Error ../core/Evented ../core/global ../core/has ../core/lang ../core/object ../core/promiseUtils ../core/urlUtils ../core/urlUtils ../core/accessorSupport/decorators ./OAuthCredential ./OAuthInfo ./ServerInfo".split(" "),function(I,F,J,K,p,L,U,V,f,z,W,r,M,X,N,B,D,x,u,y,m,O,P,G){Object.defineProperty(F,
"__esModule",{value:!0});var E={},R=function(f){var c=(new y.Url(f.owningSystemUrl)).host;f=(new y.Url(f.server)).host;var a=/.+\.arcgis\.com$/i;return a.test(c)&&a.test(f)},H=function(f,c){return!!(R(f)&&c&&c.some(function(a){return a.test(f.server)}))};I=function(Q){function c(){var a=Q.call(this)||this;a._portalConfig=X.esriGeowConfig;a.serverInfos=[];a.oAuthInfos=[];a.credentials=[];a._soReqs=[];a._xoReqs=[];a._portals=[];a.defaultOAuthInfo=null;a.defaultTokenValidity=60;a.tokenValidity=null;
a.signInPage=null;a.useSignInPage=!0;a.normalizeWebTierAuth=!1;a._busy=null;a._rejectOnPersistedPageShow=!1;a._oAuthHash=null;a._gwTokenUrl="/sharing/rest/generateToken";a._agsRest="/rest/services";a._agsPortal=/\/sharing(\/|$)/i;a._agsAdmin=/(https?:\/\/[^\/]+\/[^\/]+)\/admin\/?(\/.*)?$/i;a._adminSvcs=/\/rest\/admin\/services(\/|$)/i;a._agolSuffix=".arcgis.com";a._gwDomains=[{regex:/https?:\/\/www\.arcgis\.com/i,tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"},{regex:/https?:\/\/dev\.arcgis\.com/i,
tokenServiceUrl:"https://dev.arcgis.com/sharing/rest/generateToken"},{regex:/https?:\/\/.*dev[^.]*\.arcgis\.com/i,tokenServiceUrl:"https://devext.arcgis.com/sharing/rest/generateToken"},{regex:/https?:\/\/.*qa[^.]*\.arcgis\.com/i,tokenServiceUrl:"https://qaext.arcgis.com/sharing/rest/generateToken"},{regex:/https?:\/\/.*\.arcgis\.com/i,tokenServiceUrl:"https://www.arcgis.com/sharing/rest/generateToken"}];a._legacyFed=[];a._regexSDirUrl=/http.+\/rest\/services\/?/gi;a._regexServerType=/(\/(MapServer|GeocodeServer|GPServer|GeometryServer|ImageServer|NAServer|FeatureServer|GeoDataServer|GlobeServer|MobileServer|GeoenrichmentServer|VectorTileServer|SceneServer)).*/gi;
a._gwUser=/http.+\/users\/([^\/]+)\/?.*/i;a._gwItem=/http.+\/items\/([^\/]+)\/?.*/i;a._gwGroup=/http.+\/groups\/([^\/]+)\/?.*/i;a._rePortalTokenSvc=/\/sharing(\/rest)?\/generatetoken/i;a._createDefaultOAuthInfo=!0;a._hasTestedIfAppIsOnPortal=!1;a._getOAuthHash();window.addEventListener("pageshow",function(b){a._pageShowHandler(b)});return a}K(c,Q);c.prototype.registerServers=function(a){var b=this,d=this.serverInfos;d?(a=a.filter(function(a){return!b.findServerInfo(a.server)}),this.serverInfos=d.concat(a)):
this.serverInfos=a;a.forEach(function(a){a.owningSystemUrl&&b._portals.push(a.owningSystemUrl);a.hasPortal&&b._portals.push(a.server)})};c.prototype.registerOAuthInfos=function(a){var b=this,d=this.oAuthInfos;d?(a=a.filter(function(a){return!b.findOAuthInfo(a.portalUrl)}),this.oAuthInfos=d.concat(a)):this.oAuthInfos=a};c.prototype.registerToken=function(a){a=J({},a);var b=this._sanitizeUrl(a.server),d=this._isServerRsrc(b),e=this.findServerInfo(b),k=!0,c;e||(e=new G,e.server=this._getServerInstanceRoot(b),
d?e.hasServer=!0:(e.tokenServiceUrl=this._getTokenSvcUrl(b),e.hasPortal=!0),this.registerServers([e]));(c=this._findCredential(b))?(delete a.server,B.mixin(c,a),k=!1):(c=new v({userId:a.userId,server:e.server,token:a.token,expires:a.expires,ssl:a.ssl,scope:d?"server":"portal"}),c.resources=[b],this.credentials.push(c));c.emitTokenChange(!1);k||c.refreshServerTokens()};c.prototype.toJSON=function(){return B.fixJson({serverInfos:this.serverInfos.map(function(a){return a.toJSON()}),oAuthInfos:this.oAuthInfos.map(function(a){return a.toJSON()}),
credentials:this.credentials.map(function(a){return a.toJSON()})})};c.prototype.initialize=function(a){var b=this;if(a){"string"===typeof a&&(a=JSON.parse(a));var d=a.serverInfos,e=a.oAuthInfos;a=a.credentials;if(d){var k=[];d.forEach(function(a){a.server&&a.tokenServiceUrl&&k.push(a.declaredClass?a:new G(a))});k.length&&this.registerServers(k)}if(e){var c=[];e.forEach(function(a){a.appId&&c.push(a.declaredClass?a:new P(a))});c.length&&this.registerOAuthInfos(c)}a&&a.forEach(function(a){a.server&&
a.token&&a.expires&&a.expires>Date.now()&&(a=a.declaredClass?a:new v(a),a.emitTokenChange(),b.credentials.push(a))})}};c.prototype.findServerInfo=function(a){var b;a=this._sanitizeUrl(a);for(var d=0,e=this.serverInfos;d<e.length;d++){var k=e[d];if(this._hasSameServerInstance(k.server,a)){b=k;break}}return b};c.prototype.findOAuthInfo=function(a){var b;a=this._sanitizeUrl(a);for(var d=0,e=this.oAuthInfos;d<e.length;d++){var k=e[d];if(this._hasSameServerInstance(k.portalUrl,a)){b=k;break}}return b};
c.prototype.findCredential=function(a,b){var d,e;a=this._sanitizeUrl(a);e=this._isServerRsrc(a)?"server":"portal";if(b)for(var k=0,c=this.credentials;k<c.length;k++){var g=c[k];if(this._hasSameServerInstance(g.server,a)&&b===g.userId&&g.scope===e){d=g;break}}else for(b=0,k=this.credentials;b<k.length;b++)if(g=k[b],this._hasSameServerInstance(g.server,a)&&-1!==this._getIdenticalSvcIdx(a,g)&&g.scope===e){d=g;break}return d};c.prototype.getCredential=function(a,b){var d,e,k=!0;b&&(d=!!b.token,e=b.error,
k=!1!==b.prompt);b=J({},b);a=this._sanitizeUrl(a);var c=x.createAbortController(),g=x.createResolver(function(){c.abort()});if(b&&b.signal)x.onAbort(b.signal,function(){c.abort()});x.onAbort(c,function(){g.reject(new r("identity-manager:user-aborted","ABORTED"))});if(x.isAborted(c))return g.promise;b.signal=c.signal;var t=this._isAdminResource(a),f=d&&this._doPortalSignIn(a)?this._getEsriAuthCookie():null;if((d=d?this.findCredential(a):null)&&e&&e.details&&498===e.details.httpStatus)d.destroy(),f&&
f.token===b.token&&L("esri_auth",null,{expires:-1,path:"/",domain:document.domain});else if(f||d)return a=new r("identity-manager:not-authorized","You are currently signed in as: '"+(f&&f.email||d&&d.userId)+"'. You do not have access to this resource: "+a,{error:e}),g.reject(a),g.promise;if(e=this._findCredential(a,b))return g.resolve(e),g.promise;e=this.findServerInfo(a);if(e)!e.hasServer&&this._isServerRsrc(a)&&(e._restInfoPms=this._getTokenSvcUrl(a),e.hasServer=!0);else{f=this._getTokenSvcUrl(a);
if(!f)return a=new r("identity-manager:unknown-resource","Unknown resource - could not find token service endpoint."),g.reject(a),g.promise;e=new G;e.server=this._getServerInstanceRoot(a);"string"===typeof f?(e.tokenServiceUrl=f,e.hasPortal=!0):(e._restInfoPms=f,e.hasServer=!0);this.registerServers([e])}k&&e.hasPortal&&void 0===e._selfReq&&!this._findOAuthInfo(a)&&(e._selfReq={owningTenant:b&&b.owningTenant,selfDfd:this._getPortalSelf(e.tokenServiceUrl.replace(this._rePortalTokenSvc,"/sharing/rest/portals/self"),
a)});return this._enqueue(a,e,b,g,t)};c.prototype.getResourceName=function(a){return this._isRESTService(a)?a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"")||"":this._gwUser.test(a)&&a.replace(this._gwUser,"$1")||this._gwItem.test(a)&&a.replace(this._gwItem,"$1")||this._gwGroup.test(a)&&a.replace(this._gwGroup,"$1")||""};c.prototype.generateToken=function(a,b,d){var e=this._rePortalTokenSvc.test(a.tokenServiceUrl),c=new y.Url(window.location.href.toLowerCase()),n=this._getEsriAuthCookie(),
g=a.shortLivedTokenValidity,t,A,h,l,w,S,T,C;b&&(C=f.id.tokenValidity||g||f.id.defaultTokenValidity,C>g&&0<g&&(C=g));d&&(A=d.isAdmin,h=d.serverUrl,l=d.token,S=d.signal,T=d.ssl,a.customParameters=d.customParameters);A?g=a.adminTokenServiceUrl:(g=a.tokenServiceUrl,w=new y.Url(g.toLowerCase()),n&&(t=(t=n.auth_tier)&&t.toLowerCase()),("web"===t||a.webTierAuth)&&d&&d.serverUrl&&!T&&"http"===c.scheme&&(u.hasSameOrigin(c.uri,g,!0)||"https"===w.scheme&&c.host===w.host&&"7080"===c.port&&"7443"===w.port)&&(g=
g.replace(/^https:/i,"http:").replace(/:7443/i,":7080")));d=B.mixin({query:B.mixin({request:"getToken",username:b&&b.username,password:b&&b.password,serverUrl:h,token:l,expiration:C,referer:A||e?window.location.host:null,client:A?"referer":null,f:"json"},a.customParameters),method:"post",authMode:"anonymous",useProxy:this._useProxy(a,d),responseType:"json",signal:S},d&&d.ioArgs);e||(d.withCredentials=!1);return z(g,d).then(function(d){d=d.data;if(!d||!d.token)return new r("identity-manager:authentication-failed",
"Unable to generate token");var e=a.server;E[e]||(E[e]={});b&&(E[e][b.username]=b.password);d.validity=C;return d})};c.prototype.isBusy=function(){return!!this._busy};c.prototype.checkSignInStatus=function(a){return this.checkAppAccess(a,"").then(function(a){return a.credential})};c.prototype.checkAppAccess=function(a,b,d){var e=this;return this.getCredential(a,{prompt:!1}).then(function(c){var k,g={f:"json"};if("portal"===c.scope)if(b&&(e._doPortalSignIn(a,!0)||d&&d.force))k=c.server+"/sharing/rest/oauth2/validateAppAccess",
g.client_id=b;else if(c.token)k=c.server+"/sharing/rest";else return{credential:c};else if(c.token)k=c.server+"/rest/services";else return{credential:c};c.token&&(g.token=c.token);return z(k,{query:g,authMode:"anonymous"}).then(function(a){if(!1===a.data.valid)throw new r("identity-manager:not-authorized","You are currently signed in as: '"+c.userId+"'.");return{credential:c}}).catch(function(a){if("identity-manager:not-authorized"===a.name)throw a;a=a.details&&a.details.httpStatus;if(498===a)throw c.destroy(),
new r("identity-manager:not-authenticated","User is not signed in.");if(400===a)throw new r("identity-manager:invalid-request");return{credential:c}})})};c.prototype.setRedirectionHandler=function(a){this._redirectFunc=a};c.prototype.setProtocolErrorHandler=function(a){this._protocolFunc=a};c.prototype.destroyCredentials=function(){this.credentials&&this.credentials.slice().forEach(function(a){a.destroy()});this.emit("credentials-destroy")};c.prototype._getOAuthHash=function(){var a=window.location.hash;
if(a){"#"===a.charAt(0)&&(a=a.substring(1));var a=u.queryToObject(a),b=!1;a.access_token&&a.expires_in&&a.state&&a.hasOwnProperty("username")?(a.state=JSON.parse(a.state),this._oAuthHash=a,b=!0):a.error&&a.error_description&&(console.log("IdentityManager OAuth Error: ",a.error," - ",a.error_description),"access_denied"===a.error&&(b=!0));b&&(!N("ie")||8<N("ie"))&&(window.location.hash="")}};c.prototype._pageShowHandler=function(a){a.persisted&&this.isBusy()&&this._rejectOnPersistedPageShow&&(a=new r("identity-manager:user-aborted",
"ABORTED"),this._errbackFunc(a))};c.prototype._findCredential=function(a,b){var d=this,e=-1,c,n,g,f=b&&b.token;b=b&&b.resource;var A=this._isServerRsrc(a)?"server":"portal",h=this.credentials.filter(function(b){return d._hasSameServerInstance(b.server,a)&&b.scope===A});a=b||a;if(h.length)if(1===h.length)if(b=h[0],n=(c=(g=this.findServerInfo(b.server))&&g.owningSystemUrl)&&this.findCredential(c,b.userId),e=this._getIdenticalSvcIdx(a,b),f)-1!==e&&(b.resources.splice(e,1),this._removeResource(a,n));
else return-1===e&&b.resources.push(a),this._addResource(a,n),b;else{var l,w;h.some(function(b){w=d._getIdenticalSvcIdx(a,b);return-1!==w?(l=b,n=(c=(g=d.findServerInfo(l.server))&&g.owningSystemUrl)&&d.findCredential(c,l.userId),e=w,!0):!1});if(f)l&&(l.resources.splice(e,1),this._removeResource(a,n));else if(l)return this._addResource(a,n),l}};c.prototype._findOAuthInfo=function(a){var b=this.findOAuthInfo(a);if(!b)for(var d=0,e=this.oAuthInfos;d<e.length;d++){var c=e[d];if(this._isIdProvider(c.portalUrl,
a)){b=c;break}}return b};c.prototype._addResource=function(a,b){b&&-1===this._getIdenticalSvcIdx(a,b)&&b.resources.push(a)};c.prototype._removeResource=function(a,b){var d=-1;b&&(d=this._getIdenticalSvcIdx(a,b),-1<d&&b.resources.splice(d,1))};c.prototype._useProxy=function(a,b){return b&&b.isAdmin&&!u.hasSameOrigin(a.adminTokenServiceUrl,window.location.href)||!this._isPortalDomain(a.tokenServiceUrl)&&"10.1"===String(a.currentVersion)&&!u.hasSameOrigin(a.tokenServiceUrl,window.location.href)};c.prototype._getOrigin=
function(a){a=new y.Url(a);return a.scheme+"://"+a.host+(null!=a.port?":"+a.port:"")};c.prototype._getServerInstanceRoot=function(a){var b=a.toLowerCase(),d=b.indexOf(this._agsRest);-1===d&&this._isAdminResource(a)&&(d=this._agsAdmin.test(a)?a.replace(this._agsAdmin,"$1").length:a.search(this._adminSvcs));-1===d&&(d=b.indexOf("/sharing"));-1===d&&"/"===b.substr(-1)&&(d=b.length-1);return-1<d?a.substring(0,d):a};c.prototype._hasSameServerInstance=function(a,b){"/"===a.substr(-1)&&(a=a.slice(0,-1));
a=a.toLowerCase();b=this._getServerInstanceRoot(b).toLowerCase();a=this._normalizeAGOLorgDomain(a);b=this._normalizeAGOLorgDomain(b);a=a.substr(a.indexOf(":"));b=b.substr(b.indexOf(":"));return a===b};c.prototype._normalizeAGOLorgDomain=function(a){var b=/^https?:\/\/.+\.maps\.arcgis\.com/i,d=/^https?:\/\/.+\.mapsdevext\.arcgis\.com/i,e=/^https?:\/\/.+\.mapsqa\.arcgis\.com/i;b.test(a)?a=a.replace(b,"https://www.arcgis.com"):d.test(a)?a=a.replace(d,"https://devext.arcgis.com"):e.test(a)&&(a=a.replace(e,
"https://qaext.arcgis.com"));return a};c.prototype._sanitizeUrl=function(a){var b=(V.request.proxyUrl||"").toLowerCase(),d=b?a.toLowerCase().indexOf(b+"?"):-1;-1!==d&&(a=a.substring(d+b.length+1));a=u.normalize(a);return u.urlToObject(a).path};c.prototype._isRESTService=function(a){return-1<a.indexOf(this._agsRest)};c.prototype._isAdminResource=function(a){return this._agsAdmin.test(a)||this._adminSvcs.test(a)};c.prototype._isServerRsrc=function(a){return this._isRESTService(a)||this._isAdminResource(a)};
c.prototype._isIdenticalService=function(a,b){var d;this._isRESTService(a)&&this._isRESTService(b)?(a=this._getSuffix(a).toLowerCase(),b=this._getSuffix(b).toLowerCase(),d=a===b,d||(d=/(.*)\/(MapServer|FeatureServer).*/gi,d=a.replace(d,"$1")===b.replace(d,"$1"))):this._isAdminResource(a)&&this._isAdminResource(b)?d=!0:this._isServerRsrc(a)||this._isServerRsrc(b)||!this._isPortalDomain(a)||(d=!0);return d};c.prototype._isPortalDomain=function(a){var b=this;a=a.toLowerCase();var d=(new y.Url(a)).authority,
e=this._portalConfig,d=d&&-1!==d.indexOf(this._agolSuffix);!d&&e&&(d=this._hasSameServerInstance(this._getServerInstanceRoot(e.restBaseUrl),a));d||(d=this._portals.some(function(d){return b._hasSameServerInstance(d,a)}));return d=d||this._agsPortal.test(a)};c.prototype._isIdProvider=function(a,b){var d=-1,e=-1;this._gwDomains.forEach(function(c,k){-1===d&&c.regex.test(a)&&(d=k);-1===e&&c.regex.test(b)&&(e=k)});var c=!1;if(-1<d&&-1<e)if(0===d||4===d){if(0===e||4===e)c=!0}else if(1===d){if(1===e||2===
e)c=!0}else 2===d?2===e&&(c=!0):3===d&&3===e&&(c=!0);if(!c){var f=this.findServerInfo(b),g=f&&f.owningSystemUrl;g&&R(f)&&this._isPortalDomain(g)&&this._isIdProvider(a,g)&&(c=!0)}return c};c.prototype._getIdenticalSvcIdx=function(a,b){for(var d=-1,e=0;e<b.resources.length;e++)if(this._isIdenticalService(a,b.resources[e])){d=e;break}return d};c.prototype._getSuffix=function(a){return a.replace(this._regexSDirUrl,"").replace(this._regexServerType,"$1")};c.prototype._getTokenSvcUrl=function(a){var b=
this,d,e;if(this._isRESTService(a)||this._isAdminResource(a))return e=this._getServerInstanceRoot(a),d=e+"/admin/generateToken",a=e+"/rest/info",e=z(a,{query:{f:"json"},responseType:"json"}).then(function(a){return a.data}),{adminUrl:d,promise:e};if(this._isPortalDomain(a)){var c="";this._gwDomains.some(function(b){b.regex.test(a)&&(c=b.tokenServiceUrl);return!!c});c||this._portals.some(function(d){b._hasSameServerInstance(d,a)&&(c=d+b._gwTokenUrl);return!!c});c||(d=a.toLowerCase().indexOf("/sharing"),
-1!==d&&(c=a.substring(0,d)+this._gwTokenUrl));c||(c=this._getOrigin(a)+this._gwTokenUrl);c&&(d=(new y.Url(a)).port,/^http:\/\//i.test(a)&&"7080"===d&&(c=c.replace(/:7080/i,":7443")),c=c.replace(/http:/i,"https:"));return c}if(-1!==a.toLowerCase().indexOf("premium.arcgisonline.com"))return"https://premium.arcgisonline.com/server/tokens"};c.prototype._getPortalSelf=function(a,b){"https:"===window.location.protocol?a=a.replace(/^http:/i,"https:").replace(/:7080/i,":7443"):/^http:/i.test(b)&&(a=a.replace(/^https:/i,
"http:").replace(/:7443/i,":7080"));return z(a,{query:{f:"json"},authMode:"anonymous",responseType:"json",withCredentials:!0}).then(function(a){return a.data})};c.prototype._hasPortalSession=function(){return!!this._getEsriAuthCookie()};c.prototype._getEsriAuthCookie=function(){var a=null;if(navigator.cookieEnabled)for(var b=this._getAllCookies("esri_auth"),d=0;d<b.length;d++){var c=JSON.parse(b[d]);if(c.portalApp){a=c;break}}a&&(b=null,a.expires&&("number"===typeof a.expires?b=a.expires:"string"===
typeof a.expires&&(b=Date.parse(a.expires)),isNaN(b)&&(b=null),a.expires=b),b&&b<Date.now()&&(a=null));return a};c.prototype._getAllCookies=function(a){var b=[];if(a=document.cookie.match(new RegExp("(?:^|; )"+U.escapeString(a)+"\x3d([^;]*)","g")))for(var d=0;d<a.length;d++){var c=a[d],k=c.indexOf("\x3d");-1<k&&(c=c.substring(k+1),b.push(decodeURIComponent(c)))}return b};c.prototype._doPortalSignIn=function(a,b){if(L.isSupported()){var d=this._getEsriAuthCookie(),c=this._portalConfig,k=window.location.href,
f=this.findServerInfo(a);if((b||this.useSignInPage)&&(c||this._isPortalDomain(k)||d)&&(f?f.hasPortal||f.owningSystemUrl&&this._isPortalDomain(f.owningSystemUrl):this._isPortalDomain(a))&&(this._isIdProvider(k,a)||c&&(this._hasSameServerInstance(this._getServerInstanceRoot(c.restBaseUrl),a)||this._isIdProvider(c.restBaseUrl,a))||u.hasSameOrigin(k,a,!0)))return!0}return!1};c.prototype._canUsePortalSignInWorkflow=function(a){return this._doPortalSignIn(a)&&(window===window.top||this._hasPortalSession())};
c.prototype._checkProtocol=function(a,b,d,c){var e=!0;c=c?b.adminTokenServiceUrl:b.tokenServiceUrl;0===c.trim().toLowerCase().indexOf("https:")&&0!==window.location.href.toLowerCase().indexOf("https:")&&u.getProxyRule(c)&&(e=this._protocolFunc?!!this._protocolFunc({resourceUrl:a,serverInfo:b}):!1,e||(a=new r("identity-manager:aborted","Aborted the Sign-In process to avoid sending password over insecure connection."),d(a)));return e};c.prototype._enqueue=function(a,b,d,c,f,n){c||(c=x.createResolver());
c.resUrl_=a;c.sinfo_=b;c.options_=d;c.admin_=f;c.refresh_=n;this._busy?this._hasSameServerInstance(this._getServerInstanceRoot(a),this._busy.resUrl_)?(this._oAuthDfd&&this._oAuthDfd.oAuthWin_&&this._oAuthDfd.oAuthWin_.focus(),this._soReqs.push(c)):this._xoReqs.push(c):this._doSignIn(c);return c.promise};c.prototype._doSignIn=function(a){var b=this;this._busy=a;this._rejectOnPersistedPageShow=!1;var c=function(c){var d=a.options_&&a.options_.resource,e=a.resUrl_,h=a.refresh_,f=!1;-1===b.credentials.indexOf(c)&&
(h&&-1!==b.credentials.indexOf(h)?(h.userId=c.userId,h.token=c.token,h.expires=c.expires,h.validity=c.validity,h.ssl=c.ssl,h.creationTime=c.creationTime,f=!0,c=h):b.credentials.push(c));c.resources||(c.resources=[]);c.resources.push(d||e);c.scope=b._isServerRsrc(e)?"server":"portal";c.emitTokenChange();var d=b._soReqs,g={};b._soReqs=[];d.forEach(function(a){if(!b._isIdenticalService(e,a.resUrl_)){var d=b._getSuffix(a.resUrl_);g[d]||(g[d]=!0,c.resources.push(a.resUrl_))}});a.resolve(c);d.forEach(function(a){b._hasSameServerInstance(b._getServerInstanceRoot(e),
a.resUrl_)?a.resolve(c):b._soReqs.push(a)});b._busy=a.resUrl_=a.sinfo_=a.refresh_=null;f||b.emit("credential-create",{credential:c});b._soReqs.length?b._doSignIn(b._soReqs.shift()):b._xoReqs.length&&b._doSignIn(b._xoReqs.shift())},e=function(c){a.reject(c);b._busy=a.resUrl_=a.sinfo_=a.refresh_=null;b._soReqs.length?b._doSignIn(b._soReqs.shift()):b._xoReqs.length&&b._doSignIn(b._xoReqs.shift())},f=function(d,f,g,k){var h=a.sinfo_,l=!a.options_||!1!==a.options_.prompt,q=h.hasPortal&&b._findOAuthInfo(a.resUrl_);
b._canUsePortalSignInWorkflow(a.resUrl_)?(d=b._getEsriAuthCookie(),q=b._portalConfig,d?(h.webTierAuth||"web"!==(d.auth_tier&&d.auth_tier.toLowerCase())||(h.webTierAuth=!0),c(new v({userId:d.email,server:h.server,token:h.webTierAuth?null:d.token,expires:d.expires}))):l?(l="",d=window.location.href,l=b.signInPage?b.signInPage:q?q.baseUrl+q.signin:b._isIdProvider(d,a.resUrl_)?b._getOrigin(d)+"/home/signin.html":h.tokenServiceUrl.replace(b._rePortalTokenSvc,"")+"/home/signin.html",l=l.replace(/http:/i,
"https:"),q&&!1===q.useSSL&&(l=l.replace(/https:/i,"http:")),0===d.toLowerCase().replace("https","http").indexOf(l.toLowerCase().replace("https","http"))?(h=new r("identity-manager:unexpected-error","Cannot redirect to Sign-In page from within Sign-In page. URL of the resource that triggered this workflow: "+a.resUrl_),e(h)):(b._rejectOnPersistedPageShow=!0,b._redirectFunc?b._redirectFunc({signInPage:l,returnUrlParamName:"returnUrl",returnUrl:d,resourceUrl:a.resUrl_,serverInfo:h}):window.location.href=
l+"?returnUrl\x3d"+encodeURIComponent(d))):(h=new r("identity-manager:not-authenticated","User is not signed in."),e(h))):d?c(new v({userId:d,server:h.server,token:g,expires:null!=k?Number(k):null,ssl:!!f})):q?(d=q._oAuthCred,d||(f=new O(q,window.localStorage),g=new O(q,window.sessionStorage),f.isValid()&&g.isValid()?f.expires>g.expires?(d=f,g.destroy()):(d=g,f.destroy()):d=f.isValid()?f:g,q._oAuthCred=d),d.isValid()?c(new v({userId:d.userId,server:h.server,token:d.token,expires:d.expires,ssl:d.ssl,
_oAuthCred:d})):b._oAuthHash&&b._oAuthHash.state.portalUrl===q.portalUrl?(l=b._oAuthHash,h=new v({userId:l.username,server:h.server,token:l.access_token,expires:Date.now()+1E3*Number(l.expires_in),ssl:"true"===l.ssl,oAuthState:l.state,_oAuthCred:d}),d.storage=l.persist?window.localStorage:window.sessionStorage,d.token=h.token,d.expires=h.expires,d.userId=h.userId,d.ssl=h.ssl,d.save(),b._oAuthHash=null,c(h)):l?a._pendingDfd=b.oAuthSignIn(a.resUrl_,h,q,a.options_).then(c,e):(h=new r("identity-manager:not-authenticated",
"User is not signed in."),e(h))):l?b._checkProtocol(a.resUrl_,h,e,a.admin_)&&(l=a.options_,a.admin_&&(l=l||{},l.isAdmin=!0),a._pendingDfd=b.signIn(a.resUrl_,h,l).then(c,e)):(h=new r("identity-manager:not-authenticated","User is not signed in."),e(h))},n=function(){var d=a.sinfo_,f=d.owningSystemUrl,g=a.options_,k,n,t,q;g&&(k=g.token,n=g.error,t=g.prompt);q=b._findCredential(f,{token:k,resource:a.resUrl_});if(!q)for(var g=0,m=b.credentials;g<m.length;g++){var p=m[g];if(b._isIdProvider(f,p.server)){q=
p;break}}q?(f=b.findCredential(a.resUrl_,q.userId))?c(f):H(d,b._legacyFed)?(p=q.toJSON(),p.server=d.server,p.resources=null,c(new v(p))):(a._pendingDfd=b.generateToken(b.findServerInfo(q.server),null,{serverUrl:a.resUrl_,token:q.token,signal:a.options_.signal,ssl:q.ssl})).then(function(b){c(new v({userId:q.userId,server:d.server,token:b.token,expires:null!=b.expires?Number(b.expires):null,ssl:!!b.ssl,isAdmin:a.admin_,validity:b.validity}))},e):(b._busy=null,k&&(a.options_.token=null),(a._pendingDfd=
b.getCredential(f.replace(/\/?$/,"/sharing"),{resource:a.resUrl_,owningTenant:d.owningTenant,signal:a.options_.signal,token:k,error:n,prompt:t})).then(function(c){b._enqueue(a.resUrl_,a.sinfo_,a.options_,a,a.admin_)},function(a){e(a)}))};this._errbackFunc=e;var g=a.sinfo_.owningSystemUrl,t=this._isServerRsrc(a.resUrl_),m=a.sinfo_._restInfoPms;m?m.promise.then(function(c){var d=a.sinfo_;d.adminTokenServiceUrl=d._restInfoPms.adminUrl;d._restInfoPms=null;d.tokenServiceUrl=D.getDeepValue("authInfo.tokenServicesUrl",
c)||D.getDeepValue("authInfo.tokenServiceUrl",c)||D.getDeepValue("tokenServiceUrl",c);d.shortLivedTokenValidity=D.getDeepValue("authInfo.shortLivedTokenValidity",c);d.currentVersion=c.currentVersion;d.owningTenant=c.owningTenant;(c=d.owningSystemUrl=c.owningSystemUrl)&&b._portals.push(c);t&&c?n():f()},function(){a.sinfo_._restInfoPms=null;var b=new r("identity-manager:server-identification-failed","Unknown resource - could not find token service endpoint.");e(b)}):t&&g?n():a.sinfo_._selfReq?a.sinfo_._selfReq.selfDfd.then(function(c){var d=
{},e,f,g,h;c&&(e=c.user&&c.user.username,d.username=e,d.allSSL=c.allSSL,f=c.supportsOAuth,g=c.currentVersion,"multitenant"===c.portalMode&&(h=c.customBaseUrl));a.sinfo_.webTierAuth=!!e;return e&&b.normalizeWebTierAuth?b.generateToken(a.sinfo_,null,{ssl:d.allSSL}).catch(function(){return null}).then(function(a){d.portalToken=a&&a.token;d.tokenExpiration=a&&a.expires;return d}):!e&&f&&4.4<=parseFloat(g)&&!b._canUsePortalSignInWorkflow(a.resUrl_)?b._generateOAuthInfo({portalUrl:a.sinfo_.server,customBaseUrl:h,
owningTenant:a.sinfo_._selfReq.owningTenant}).catch(function(){return null}).then(function(){return d}):d}).catch(function(){return null}).then(function(b){a.sinfo_._selfReq=null;b?f(b.username,b.allSSL,b.portalToken,b.tokenExpiration):f()}):f()};c.prototype._generateOAuthInfo=function(a){var b=this,c,e=a.portalUrl,f=a.customBaseUrl,n=a.owningTenant;if(a=!this.defaultOAuthInfo&&this._createDefaultOAuthInfo&&!this._hasTestedIfAppIsOnPortal){c=window.location.href;var g=c.indexOf("?");-1<g&&(c=c.slice(0,
g));g=c.search(/\/(apps|home)\//);c=-1<g?c.slice(0,g):null}a&&c?(this._hasTestedIfAppIsOnPortal=!0,a=z(c+"/sharing/rest",{query:{f:"json"},responseType:"json"}).then(function(){b.defaultOAuthInfo=new P({appId:"arcgisonline",popup:!0,popupCallbackUrl:c+"/home/oauth-callback.html"})})):a=x.resolve();return a.then(function(){if(b.defaultOAuthInfo)return e=e.replace(/^http:/i,"https:"),z(e+"/sharing/rest/oauth2/validateRedirectUri",{query:{accountId:n,client_id:b.defaultOAuthInfo.appId,redirect_uri:u.makeAbsolute(b.defaultOAuthInfo.popupCallbackUrl),
f:"json"},responseType:"json"}).then(function(a){if(a.data.valid){var c=b.defaultOAuthInfo.clone();c.portalUrl=a.data.urlKey&&f?"https://"+a.data.urlKey+"."+f:e;b.oAuthInfos.push(c)}})})};return c=p([m.subclass("esri.identity.IdentityManagerBase")],c)}(m.declared(M));F.IdentityManagerBase=I;var v=function(r){function c(a){var b=r.call(this)||this;b._oAuthCred=null;b.tokenRefreshBuffer=2;a&&a._oAuthCred&&(b._oAuthCred=a._oAuthCred);return b}K(c,r);c.prototype.initialize=function(){this.resources=this.resources||
[];null==this.creationTime&&(this.creationTime=Date.now())};c.prototype.refreshToken=function(){var a=this,b=f.id.findServerInfo(this.server),c=b&&b.owningSystemUrl,e=!!c&&"server"===this.scope,k=e&&H(b,f.id._legacyFed),n=b.webTierAuth,g=n&&f.id.normalizeWebTierAuth,m=E[this.server],p=m&&m[this.userId],m=this.resources&&this.resources[0],h=e&&f.id.findServerInfo(c),l={username:this.userId,password:p},r;if(!n||g)if(e&&!h&&f.id.serverInfos.some(function(a){f.id._isIdProvider(c,a.server)&&(h=a);return!!h}),
n=h&&f.id.findCredential(h.server,this.userId),!e||n)if(k)n.refreshToken();else{if(e)r={serverUrl:m,token:n&&n.token,ssl:n&&n.ssl};else if(g)l=null,r={ssl:this.ssl};else if(p)this.isAdmin&&(r={isAdmin:!0});else return e=void 0,m&&(m=f.id._sanitizeUrl(m),this._enqueued=1,e=f.id._enqueue(m,b,null,null,this.isAdmin,this),e.then(function(){a._enqueued=0;a.refreshServerTokens()}).catch(function(){a._enqueued=0})),e;return f.id.generateToken(e?h:b,e?null:l,r).then(function(b){a.token=b.token;a.expires=
null!=b.expires?Number(b.expires):null;a.creationTime=Date.now();a.validity=b.validity;a.emitTokenChange();a.refreshServerTokens()}).catch(function(){})}};c.prototype.refreshServerTokens=function(){var a=this;"portal"===this.scope&&f.id.credentials.forEach(function(b){var c=f.id.findServerInfo(b.server),e=c&&c.owningSystemUrl;b!==a&&b.userId===a.userId&&e&&"server"===b.scope&&(f.id._hasSameServerInstance(a.server,e)||f.id._isIdProvider(e,a.server))&&(H(c,f.id._legacyFed)?(b.token=a.token,b.expires=
a.expires,b.creationTime=a.creationTime,b.validity=a.validity,b.emitTokenChange()):b.refreshToken())})};c.prototype.emitTokenChange=function(a){clearTimeout(this._refreshTimer);var b=this.server&&f.id.findServerInfo(this.server),c=(b=b&&b.owningSystemUrl)&&f.id.findServerInfo(b);!1===a||b&&"portal"!==this.scope&&(!c||!c.webTierAuth||f.id.normalizeWebTierAuth)||null==this.expires&&null==this.validity||this._startRefreshTimer();this.emit("token-change")};c.prototype.destroy=function(){this.userId=this.server=
this.token=this.expires=this.validity=this.resources=this.creationTime=null;this._oAuthCred&&(this._oAuthCred.destroy(),this._oAuthCred=null);var a=f.id.credentials.indexOf(this);-1<a&&f.id.credentials.splice(a,1);this.emitTokenChange();this.emit("destroy")};c.prototype.toJSON=function(){var a=B.fixJson({userId:this.userId,server:this.server,token:this.token,expires:this.expires,validity:this.validity,ssl:this.ssl,isAdmin:this.isAdmin,creationTime:this.creationTime,scope:this.scope}),b=this.resources;
b&&0<b.length&&(a.resources=b.slice());return a};c.prototype._startRefreshTimer=function(){clearTimeout(this._refreshTimer);var a=6E4*this.tokenRefreshBuffer,b=(this.validity?this.creationTime+6E4*this.validity:this.expires)-Date.now();0>b&&(b=0);this._refreshTimer=setTimeout(this.refreshToken.bind(this),b>a?b-a:b)};p([m.property()],c.prototype,"creationTime",void 0);p([m.property()],c.prototype,"expires",void 0);p([m.property()],c.prototype,"isAdmin",void 0);p([m.property()],c.prototype,"oAuthState",
void 0);p([m.property()],c.prototype,"resources",void 0);p([m.property()],c.prototype,"scope",void 0);p([m.property()],c.prototype,"server",void 0);p([m.property()],c.prototype,"ssl",void 0);p([m.property()],c.prototype,"token",void 0);p([m.property()],c.prototype,"tokenRefreshBuffer",void 0);p([m.property()],c.prototype,"userId",void 0);p([m.property()],c.prototype,"validity",void 0);return c=p([m.subclass("esri.identity.Credential")],c)}(m.declared(W,M));F.Credential=v});