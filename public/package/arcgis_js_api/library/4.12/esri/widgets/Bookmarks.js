// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../core/tsSupport/declareExtendsHelper ../core/tsSupport/decorateHelper dojo/i18n!../nls/common dojo/i18n!./Bookmarks/nls/Bookmarks ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ./Widget ./Bookmarks/BookmarksViewModel ./support/widget".split(" "),function(r,t,n,f,g,d,p,k,e,q,l,c){return function(m){function a(b){b=m.call(this)||this;b._handles=new p;b._addInputNode=null;b._editInputNode=null;b._addBookmarkButtonNode=null;b._focusAddBookmarkButton=!1;
b._addBookmark=!1;b._editBookmark=null;b._invalidEntry=!1;b._creatingBookmark=!1;b.bookmarks=null;b.editingEnabled=!1;b.goToOverride=null;b.iconClass="esri-icon-bookmark";b.label=d.widgetLabel;b.view=null;b.viewModel=new l;return b}n(a,m);a.prototype.postInitialize=function(){var b=this;this.own([k.init(this,"viewModel.bookmarks",function(){return b._bookmarksInitialized()})])};a.prototype.destroy=function(){this._handles.destroy();this._handles=null};a.prototype.goTo=function(b){return null};a.prototype.render=
function(){var b,h=this.viewModel.state,a="disabled"===h?this._renderDisabled():"loading"===h?this._renderLoading():this._renderBookmarks(),h=(b={},b["esri-disabled"]="disabled"===h,b);return c.tsx("div",{class:this.classes(h,"esri-bookmarks esri-widget--panel","esri-widget")},a)};a.prototype._renderLoading=function(){return c.tsx("div",{class:"esri-bookmarks__loader-container",key:"loader"},c.tsx("div",{class:"esri-bookmarks__loader"}))};a.prototype._renderDisabled=function(){return c.tsx("div",
{key:"bookmarks-disabled",class:this.classes("esri-widget__content--empty","esri-bookmarks__disabled-container")},c.tsx("h1",{class:"esri-widget__heading"},d.disabledHeading),c.tsx("p",{class:"esri-bookmarks__disabled-description"},d.disabledDescription))};a.prototype._renderNoBookmarksContainer=function(){return c.tsx("div",{class:"esri-widget__content--empty",key:"no-bookmarks"},c.tsx("span",{"aria-hidden":"true",class:this.classes("esri-widget__no-bookmark-icon","esri-icon-bookmark")}),c.tsx("h1",
{class:this.classes("esri-widget__heading","esri-bookmarks__no-bookmarks-heading")},d.noBookmarksHeading),c.tsx("p",{class:"esri-bookmarks__no-bookmarks-description"},d.noBookmarksDescription))};a.prototype._renderAddBookmarkLoading=function(){return c.tsx("li",{key:"adding-bookmark",class:"esri-bookmarks__adding-bookmark"},c.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-loading-indicator","esri-rotating")}),d.addingBookmark)};a.prototype._renderBookmarkItems=function(b){var a=this;
return b?b.map(function(b){return a.editingEnabled&&a._editBookmark&&b&&a._editBookmark===b?a._renderEditingBookmark(b):a._renderBookmark(b)}).toArray():null};a.prototype._renderBookmarksContainer=function(b){var a=this.editingEnabled?this._creatingBookmark?this._renderAddBookmarkLoading():this._addBookmark?this._renderAddingBookmark():this._renderAddBookmarkButton():null;return c.tsx("ul",{key:"bookmark-list","aria-label":d.widgetLabel,class:"esri-bookmarks__list"},this._renderBookmarkItems(b),a)};
a.prototype._renderAddBookmarkButton=function(){return c.tsx("li",{key:"add-bookmark-item",class:"esri-bookmarks__add-bookmark"},c.tsx("button",{class:this.classes("esri-button","esri-button--tertiary","esri-bookmarks__add-bookmark-button"),onclick:this._showAddBookmarkForm,afterCreate:this._storeAddBookmarkButton,afterUpdate:this._storeAddBookmarkButton,"data-node-ref":"_addBookmarkButtonNode",bind:this},c.tsx("span",{"aria-hidden":"true",class:this.classes("esri-bookmarks__add-bookmark-icon","esri-icon-plus")}),
d.addBookmark))};a.prototype._renderBookmarks=function(){var b=this.viewModel.bookmarks,a=b&&b.filter(Boolean),a=(b=a&&a.length)||this.editingEnabled?this._renderBookmarksContainer(a):null;return[b?null:this._renderNoBookmarksContainer(),a]};a.prototype._renderBookmark=function(b){var a,d=this.viewModel.activeBookmark,e=b.thumbnail,f=b.name||g.untitled,d=(a={},a["esri-bookmarks__bookmark--active"]=d===b,a);a=(a=e&&e.url||"")?c.tsx("img",{src:a,alt:"",class:"esri-bookmarks__image"}):c.tsx("span",{"aria-hidden":"true",
class:this.classes("esri-bookmarks__bookmark-icon","esri-icon-bookmark")});a=c.tsx("div",{class:"esri-bookmarks__bookmark-image-container"},a);e=this.editingEnabled?c.tsx("div",{key:"edit-container"},c.tsx("button",{title:g.edit,"aria-label":g.edit,"data-bookmark-item":b,onclick:this._showEditBookmarkForm,bind:this,class:this.classes("esri-button","esri-button--tertiary")},c.tsx("span",{"aria-hidden":"true",class:"esri-icon-edit"}))):null;return c.tsx("li",{key:b,class:this.classes("esri-bookmarks__bookmark",
d)},c.tsx("button",{bind:this,"data-bookmark-item":b,onclick:this._goToBookmark,class:"esri-bookmarks__bookmark-button"},a,c.tsx("span",{class:"esri-bookmarks__bookmark-name"},f),e))};a.prototype._renderEditingBookmark=function(b){return c.tsx("li",{key:"edit-bookmark-form",class:"esri-bookmarks__authoring-card"},c.tsx("form",{class:"esri-bookmarks__authoring-form",onsubmit:this._editBookmarkSubmit,bind:this},c.tsx("label",{class:"esri-bookmarks__authoring-label"},d.title,c.tsx("input",{required:!0,
bind:this,class:this.classes("esri-input",this._invalidEntry?"esri-bookmarks__authoring-input--invalid":null),type:"text",value:b.name,afterCreate:this._storeEditInput,afterUpdate:this._focusEditInput,"data-bookmark-item":b,"data-node-ref":"_editInputNode",placeholder:d.addPlaceholder})),c.tsx("div",{class:"esri-bookmarks__authoring-actions"},c.tsx("input",{type:"button",value:g.delete,class:this.classes("esri-button","esri-button--tertiary","esri-bookmarks__authoring-delete-button"),"data-bookmark-item":b,
onclick:this._deleteBookmark,bind:this}),c.tsx("input",{type:"button",value:g.cancel,class:this.classes("esri-button","esri-button--tertiary"),onclick:this._hideEditBookmarkForm,bind:this}),c.tsx("input",{class:"esri-button",type:"submit",value:g.save}))))};a.prototype._renderAddingBookmark=function(){return c.tsx("li",{key:"add-bookmark-form",class:"esri-bookmarks__authoring-card"},c.tsx("form",{class:"esri-bookmarks__authoring-form",onsubmit:this._addBookmarkSubmit,bind:this},c.tsx("label",{class:"esri-bookmarks__authoring-label"},
d.title,c.tsx("input",{required:!0,bind:this,class:this.classes("esri-input",this._invalidEntry?"esri-bookmarks__authoring-input--invalid":null),type:"text",afterCreate:this._storeAddInput,afterUpdate:this._focusAddInput,"data-node-ref":"_addInputNode",value:"",placeholder:d.addPlaceholder})),c.tsx("div",{class:this.classes("esri-bookmarks__authoring-actions")},c.tsx("input",{type:"button",value:g.cancel,class:this.classes("esri-button","esri-button--tertiary","esri-bookmarks__authoring-cancel-button"),
onclick:this._hideAddBookmarkForm,bind:this}),c.tsx("input",{class:"esri-button",type:"submit",value:g.add}))))};a.prototype._bookmarksInitialized=function(){var b=this,a=this._handles;a.remove("bookmarks-init");a.add(k.on(this,"viewModel.bookmarks","change",function(){return b._bookmarksChanged()}),"bookmarks-init")};a.prototype._bookmarksChanged=function(){var b=this,a=this.viewModel.bookmarks,c=this._handles;c.remove("bookmarks-change");a=a.map(function(a){return k.watch(a,["active","name","thumbnail.url"],
function(){return b.scheduleRender()})});c.add(a,"bookmarks-change");this.scheduleRender()};a.prototype._showAddBookmarkForm=function(){this._editBookmark=null;this._addBookmark=!0;this.scheduleRender()};a.prototype._hideAddBookmarkForm=function(){this._creatingBookmark=this._addBookmark=this._invalidEntry=!1;this._focusAddBookmarkButton=!0;this.scheduleRender()};a.prototype._showEditBookmarkForm=function(b){b.stopPropagation();b=b.currentTarget["data-bookmark-item"];this._addBookmark=!1;this._editBookmark=
b;this.scheduleRender()};a.prototype._hideEditBookmarkForm=function(){this._invalidEntry=!1;this._editBookmark=null;this.scheduleRender()};a.prototype._addBookmarkSubmit=function(b){var a=this;b.preventDefault();var c=(b=this._addInputNode)&&b.value.trim();c?(this._creatingBookmark=!0,this.scheduleRender(),this.viewModel.createBookmark().then(function(b){b.name=c;a.viewModel.bookmarks.add(b);a._hideAddBookmarkForm()})):(this._invalidEntry=!0,this.scheduleRender())};a.prototype._editBookmarkSubmit=
function(b){b.preventDefault();var a=this._editInputNode;b=this._editBookmark;(a=a&&a.value.trim())?(b.name=a,this._hideEditBookmarkForm()):(this._invalidEntry=!0,this.scheduleRender())};a.prototype._storeAddBookmarkButton=function(a){this._addBookmarkButtonNode=a;this._focusAddBookmark()};a.prototype._storeEditInput=function(a){this._editInputNode=a;this._focusEditInput()};a.prototype._storeAddInput=function(a){this._addInputNode=a;this._focusAddInput()};a.prototype._focusAddInput=function(){this._addInputNode&&
this._addInputNode.focus()};a.prototype._focusAddBookmark=function(){this._addBookmarkButtonNode&&this._focusAddBookmarkButton&&(this._focusAddBookmarkButton=!1,this._addBookmarkButtonNode.focus())};a.prototype._focusEditInput=function(){this._editInputNode&&this._editInputNode.focus()};a.prototype._deleteBookmark=function(a){a.stopPropagation();this.viewModel.bookmarks.remove(a.currentTarget["data-bookmark-item"])};a.prototype._goToBookmark=function(a){a=a.currentTarget["data-bookmark-item"];this._hideAddBookmarkForm();
this._hideEditBookmarkForm();this.viewModel.goTo(a)};f([e.aliasOf("viewModel.bookmarks")],a.prototype,"bookmarks",void 0);f([c.renderable(),e.property()],a.prototype,"editingEnabled",void 0);f([e.aliasOf("viewModel.goToOverride")],a.prototype,"goToOverride",void 0);f([e.property()],a.prototype,"iconClass",void 0);f([e.property()],a.prototype,"label",void 0);f([e.aliasOf("viewModel.view")],a.prototype,"view",void 0);f([e.property({type:l}),c.renderable(["activeBookmark","state","bookmarks"]),c.vmEvent(["select-bookmark"])],
a.prototype,"viewModel",void 0);f([e.aliasOf("viewModel.goTo")],a.prototype,"goTo",null);return a=f([e.subclass("esri.widgets.Bookmarks")],a)}(e.declared(q))});