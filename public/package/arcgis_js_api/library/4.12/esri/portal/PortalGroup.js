// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper ../core/tsSupport/paramHelper ../core/Error ../core/JSONSupport ../core/accessorSupport/decorators ./PortalQueryParams".split(" "),function(m,n,h,d,k,f,l,c,e){return function(g){function b(a){a=g.call(this)||this;a.access=null;a.created=null;a.description=null;a.id=null;a.isInvitationOnly=!1;a.modified=null;a.owner=null;a.portal=null;a.snippet=null;a.sortField=null;a.sortOrder=null;a.tags=null;a.title=
null;return a}h(b,g);Object.defineProperty(b.prototype,"thumbnailUrl",{get:function(){var a=this.url,b=this.thumbnail;return a&&b?this.portal._normalizeUrl(a+"/info/"+b+"?f\x3djson"):null},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"url",{get:function(){var a=this.get("portal.restUrl");return a?a+"/community/groups/"+this.id:null},enumerable:!0,configurable:!0});b.prototype.fetchCategorySchema=function(a){var b=this;return this.portal._request(this.url+"/categorySchema",a).then(function(c){c=
c.categorySchema||[];return c.some(function(a){return"contentCategorySetsGroupQuery.LivingAtlas"===a.source})?b._fetchCategorySchemaSet("LivingAtlas",a):c})};b.prototype.fetchMembers=function(a){return this.portal._request(this.url+"/users",a)};b.prototype.getThumbnailUrl=function(a){var b=this.thumbnailUrl;b&&a&&(b+="\x26w\x3d"+a);return b};b.prototype.toJSON=function(){throw new f("internal:not-yet-implemented","PortalGroup.toJSON is not yet implemented");};b.prototype.queryItems=function(a,b){if(5<
parseFloat(this.portal.currentVersion))return a=a||new e,this.portal._queryPortal("/content/groups/"+this.id+"/search",a,"PortalItem",b);a=a?a.clone():new e;a.query="group:"+this.id+(a.query?" "+a.query:"");return this.portal.queryItems(a,b)};b.prototype._fetchCategorySchemaSet=function(a,b){var c=this;return this.portal._fetchSelf(this.portal.authMode,!0,b).then(function(a){if(a=a.contentCategorySetsGroupQuery){var d=new e;d.disableExtraQuery=!0;d.num=1;d.query=a;return c.portal.queryGroups(d,b)}throw new f("portal-group:fetchCategorySchema",
"contentCategorySetsGroupQuery value not found");}).then(function(c){if(c.total){c=c.results[0];var d=new e;d.num=1;d.query='typekeywords:"'+a+'"';return c.queryItems(d,b)}throw new f("portal-group:fetchCategorySchema","contentCategorySetsGroupQuery group not found");}).then(function(a){return a.total?a.results[0].fetchData("json",b).then(function(a){return(a=a&&a.categorySchema)&&a.length?a:[]}):[]})};d([c.property()],b.prototype,"access",void 0);d([c.property({type:Date})],b.prototype,"created",
void 0);d([c.property()],b.prototype,"description",void 0);d([c.property()],b.prototype,"id",void 0);d([c.property()],b.prototype,"isInvitationOnly",void 0);d([c.property({type:Date})],b.prototype,"modified",void 0);d([c.property()],b.prototype,"owner",void 0);d([c.property()],b.prototype,"portal",void 0);d([c.property()],b.prototype,"snippet",void 0);d([c.property()],b.prototype,"sortField",void 0);d([c.property()],b.prototype,"sortOrder",void 0);d([c.property()],b.prototype,"tags",void 0);d([c.property()],
b.prototype,"thumbnail",void 0);d([c.property({dependsOn:["url","thumbnail","portal.credential.token"],readOnly:!0})],b.prototype,"thumbnailUrl",null);d([c.property()],b.prototype,"title",void 0);d([c.property({dependsOn:["portal.restUrl"],readOnly:!0})],b.prototype,"url",null);d([k(0,c.cast(e))],b.prototype,"queryItems",null);return b=d([c.subclass("esri.portal.PortalGroup")],b)}(c.declared(l))});