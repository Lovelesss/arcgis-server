// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/accessorSupport/watch"],function(g,h,d){function e(a,b){function c(){d()?setTimeout(c,16):b()}var d=function(){return!a.ready||a.updating||!a.stationary||!0===a.get("layerViewManager.updating")||!0===a.get("labelManager.updating")||!0===a.get("graphicsView.updating")||a.allLayerViews.some(function(a){return!0===a.updating})||a.allLayerViews.find(function(a){var b=!a.isFulfilled(),c=a.updating&&!a.suspended;a=a.rendering;return b||c||a})?!0:!1};setTimeout(c,
16)}function f(a,b){function c(){a.destroyed||(d.dispatch(),!a.ready||a.updating||a._stage.renderView.isLoadingResources||a.basemapTerrain&&a.basemapTerrain.tilingScheme&&a._stage.renderView.needsRender()||0<a._stage.renderView.test.textureRepository.getLoadingCount()?setTimeout(c,16):b())}a?setTimeout(c,16):b()}return function(a,b){switch(a.type){case "2d":return e(a,b);case "3d":return f(a,b);default:b()}}});