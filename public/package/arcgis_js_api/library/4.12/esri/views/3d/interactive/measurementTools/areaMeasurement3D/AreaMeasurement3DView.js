// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define("require exports ../../../../../core/tsSupport/declareExtendsHelper ../../../../../core/tsSupport/decorateHelper ../../../../../core/Handles ../../../../../core/maybe ../../../../../core/screenUtils ../../../../../core/libs/gl-matrix-2/mat4 ../../../../../core/libs/gl-matrix-2/mat4f64 ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../directLineMeasurement3D/LaserLineRenderer ../support/Label ../support/LabelSegment ../support/labelUtils ../support/PathSegmentInterpolator ../support/viewUtils ../../../support/projectionUtils ../../../support/stack ../../../webgl-engine/lib/Geometry ../../../webgl-engine/lib/GeometryData ../../../webgl-engine/lib/GeometryUtil ../../../webgl-engine/lib/Intersector ../../../webgl-engine/lib/Layer ../../../webgl-engine/lib/Object3D ../../../webgl-engine/materials/CheckerBoardMaterial ../../../webgl-engine/materials/RibbonLineMaterial ../../../webgl-engine/parts/Model ../../../../interactive/ManipulatorCollection ../../../../interactive/manipulatorUtils".split(" "),
function(p,T,U,V,J,u,K,F,L,B,m,M,v,w,q,G,r,H,x,C,N,D,O,P,E,Q,t,e,R,I){var S={laserLineGlowColor:[1,.5,0],laserLineGlowWidth:8,laserLineInnerColor:[1,1,1],laserLineInnerWidth:1,laserLineGlobalAlpha:.75,laserLineEnabled:!0,handleColor:[1,.5,0],handleOpacity:.5,handleRadius:5,handleRadiusHovered:10,handleRadiusMouse:10,handleRadiusTouch:25,pathLineColor:[1,.5,0,1],pathLineWidth:3,intersectingLineColor:[1,.2,0,1],perimeterLineColor:[1,.5,0,1],perimeterLineWidth:2,projectionLineColor:[1,.5,0,1],projectionLineWidth:2,
projectionLineStippleSize:5,areaColor1:[1,.5,0,.5],areaColor2:[1,1,1,.5],fillColor:[1,.5,0,.5],lineSubdivisions:64,labelDistance:25};p=function(){function b(a,c,d){void 0===c&&(c=new R.ManipulatorCollection);void 0===d&&(d={});this._model=a;this._manipulators=c;this.vertexManipulators=[];this._visible=!1;this._cursorManipulator=this._laserLineRenderer=null;this._pathSegmentObjects=[];this._perimeterSegmentObjects=[];this._projectionLineObjects=[];this._areaLabel=new v(16);this._pathLengthLabel=new v(12);
this._cursorSegmentLengthLabel=new v(12);this._perimeterLengthLabel=new v(12);this._pathLabelSegments=[];this._perimeterLabelSegments=[];this._cursorSegmentLengthLabelSegment=new w;this._listenerHandles=null;this._origin=m.vec3f64.create();this._originTransform=L.mat4f64.create();this._tempStartPosition=m.vec3f64.create();this._tempEndPosition=m.vec3f64.create();this._tempHandlePosition=m.vec3f64.create();this._sceneView=this._model.sceneView;this._params=r.copyParameter(S,d);this._layer=new P("path-measurement-tool",
{isPickable:!1});this._createMaterials();this._createObjects();this._intersector=new O(this._sceneView.viewingMode);a=I.createSphereManipulator(this._sceneView,this._params.handleColor,this._params.handleOpacity);a.visible=!1;a.radius=this._params.handleRadius;a.interactive=!1;this._manipulators.add(a);this._cursorManipulator=a}b.prototype.destroy=function(){this.hide()};Object.defineProperty(b.prototype,"requiresCursorPoint",{get:function(){return("initial"===this._model.state||"drawing"===this._model.state)&&
this._model.active},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"visible",{get:function(){return this._visible},set:function(a){a?this.show():this.hide()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"testData",{get:function(){return{labels:{area:this._areaLabel,pathLength:this._pathLengthLabel,cursorSegmentLength:this._cursorSegmentLengthLabel,perimeterLength:this._perimeterLengthLabel},laserLineRenderer:this._laserLineRenderer}},enumerable:!0,configurable:!0});
b.prototype.show=function(){if(!this._visible){this._visible=!0;var a=this._sceneView._stage;this._laserLineRenderer=new M(this._sceneView.renderCoordsHelper,{glowColor:this._params.laserLineGlowColor,glowWidth:this._params.laserLineGlowWidth,innerColor:this._params.laserLineInnerColor,innerWidth:this._params.laserLineInnerWidth,globalAlpha:this._params.laserLineGlobalAlpha});a.addRenderPlugin(this._laserLineRenderer.renderSlots,this._laserLineRenderer);this._addToStage(a);this._areaLabel.addToView(this._sceneView);
this._pathLengthLabel.addToView(this._sceneView);this._cursorSegmentLengthLabel.addToView(this._sceneView);this._perimeterLengthLabel.addToView(this._sceneView);this._initializeListeners();this._updateAll(this._model.viewData)}};b.prototype.hide=function(){if(this._visible){this._visible=!1;var a=this._sceneView._stage;a.removeRenderPlugin(this._laserLineRenderer);this._laserLineRenderer=null;this._destroyListeners();this._updatePathLength(0);this._removeFromStage(a);this._areaLabel.removeFromView(this._sceneView);
this._pathLengthLabel.removeFromView(this._sceneView);this._cursorSegmentLengthLabel.removeFromView(this._sceneView);this._perimeterLengthLabel.removeFromView(this._sceneView);this._sceneView.cursor=null}};b.prototype.vertexHandleAt=function(a,c){a=this._manipulators.intersect(a,c);return u.isSome(a)?this.manipulatorIdToVertexId(a):null};b.prototype.manipulatorIdToVertexId=function(a){for(var c=0;c<this.vertexManipulators.length;c++)if(a===this.vertexManipulators[c].id)return c;return null};b.prototype.pick=
function(a){var c=this._sceneView.spatialReference;a=K.screenPointObjectToArray(a.screenPoint);a=this._sceneView.sceneIntersectionHelper.intersectToolIntersectorScreen(a,this._intersector).results.min;var d=m.vec3f64.create();if(!a.getIntersectionPoint(d))return new b.PickResult;c=this._sceneView.renderCoordsHelper.fromRenderCoords(d,c);return new b.PickResult("TerrainRenderer"===a.intersector?"surface":"feature",d,c)};b.prototype.overlappingHandles=function(a,c){return r.pointToPointScreenDistance(a,
c,this._sceneView)<=this._params.handleRadius};b.prototype._createMaterials=function(){this._pathLineMaterial=new t({width:this._params.pathLineWidth,color:this._params.pathLineColor,polygonOffset:!0},"path-line");this._pathLineMaterial.renderOccluded=4;this._intersectingPathLineMaterial=new t({width:this._params.pathLineWidth,color:this._params.intersectingLineColor,polygonOffset:!0},"intersecting-path-line");this._intersectingPathLineMaterial.renderOccluded=4;this._perimeterLineMaterial=new t({width:this._params.perimeterLineWidth,
color:this._params.perimeterLineColor,polygonOffset:!0},"perimeter-line");this._perimeterLineMaterial.renderOccluded=4;this._intersectingPerimeterLineMaterial=new t({width:this._params.perimeterLineWidth,color:this._params.intersectingLineColor,polygonOffset:!0},"intersecting-perimeter-line");this._intersectingPerimeterLineMaterial.renderOccluded=4;this._projectionLineMaterial=new t({width:this._params.projectionLineWidth,color:this._params.projectionLineColor,polygonOffset:!0,stippleLength:0},"projection-line");
this._projectionLineMaterial.renderOccluded=4;this._checkerBoardMaterial=new Q({color1:this._params.areaColor1,color2:this._params.areaColor2,transparent:!0,writeDepth:!1,polygonOffset:!0},"checker-board");this._checkerBoardMaterial.renderOccluded=4};b.prototype._createObjects=function(){this._cursorSegmentObject=new E;this._areaObject=new E};b.prototype._addToStage=function(a){a.add(e.ContentType.LAYER,this._layer);a.add(e.ContentType.MATERIAL,this._pathLineMaterial);a.add(e.ContentType.MATERIAL,
this._intersectingPathLineMaterial);a.add(e.ContentType.MATERIAL,this._perimeterLineMaterial);a.add(e.ContentType.MATERIAL,this._intersectingPerimeterLineMaterial);a.add(e.ContentType.MATERIAL,this._projectionLineMaterial);a.add(e.ContentType.MATERIAL,this._checkerBoardMaterial);a.addToViewContent([this._layer.id])};b.prototype._removeFromStage=function(a){a.removeFromViewContent([this._layer.id]);a.remove(e.ContentType.LAYER,this._layer.id);a.remove(e.ContentType.MATERIAL,this._pathLineMaterial.id);
a.remove(e.ContentType.MATERIAL,this._intersectingPathLineMaterial.id);a.remove(e.ContentType.MATERIAL,this._perimeterLineMaterial.id);a.remove(e.ContentType.MATERIAL,this._intersectingPerimeterLineMaterial.id);a.remove(e.ContentType.MATERIAL,this._projectionLineMaterial.id);a.remove(e.ContentType.MATERIAL,this._checkerBoardMaterial.id)};b.prototype._syncViewData=function(a){var c=this;if(!this._visible)return"none";var d=a.pathChanges;"full"===d.change?this._updateAll(a):"incremental"===d.change&&
(d.updatedVertices.forEach(function(d){var b=(d-1+c._model.path.length)%c._model.path.length;c._updatePathSegment(a,d);c._updatePathSegment(a,b);c._updateVertexHandle(a,d);c._updateArea(a);c._updatePerimeterSegments(a);c._updateProjectionLines(a);c._updateLaserLine();c._updateLabels(a)}),d.updatedVertices.has(this._model.path.length-1)&&this._updateCursorSegment(a));var b=d.change;d.clear();return b};b.prototype._updateAfterSyncViewData=function(a){var c=this._model.viewData;"full"!==this._syncViewData(c)&&
a&&a(c)};b.prototype._updateOrigin=function(a){r.midpoint(a.positionsRenderCoords,this._origin);F.mat4.identity(this._originTransform);F.mat4.translate(this._originTransform,this._originTransform,this._origin)};b.prototype._updateAll=function(a){this._updateOrigin(a);this._updatePathLength(a.path.length);this._updatePathSegments(a);this._updatePerimeterSegments(a);this._updateHandles(a);this._updateArea(a);this._updateProjectionLines(a);this._updateLabels(a);this._updateLaserLine()};b.prototype._updateCameraDependent=
function(a){this._updateHandles(a);this._updateProjectionLines(a);this._updateLabels(a)};b.prototype._updatePathLength=function(a){this._resizeObject3DArray(this._pathSegmentObjects,a);this._resizeObject3DArray(this._perimeterSegmentObjects,a);this._resizeManipulatorArray(this.vertexManipulators,a);r.resizeArray(this._pathLabelSegments,a,function(){return new w});r.resizeArray(this._perimeterLabelSegments,a,function(){return new w})};b.prototype._updatePathSegments=function(a){for(var c=0;c<this._pathSegmentObjects.length;++c)this._updatePathSegment(a,
c);this._updateCursorSegment(a)};b.prototype._updatePathSegment=function(a,c){var d=a.path,b=this._pathSegmentObjects[c];a.validMeasurement||c<d.length-1?(this._createInterpolatedLineGeometry(b,a.intersectingSegments.has(c)?this._intersectingPathLineMaterial:this._pathLineMaterial,"path-segment",a.positionsRenderCoords[c],a.positionsRenderCoords[(c+1)%d.length],this._origin,this._originTransform,this._model.measurementMode,this._pathLabelSegments[c],a.validMeasurement?"center":"end"),this._addObject3D(b)):
(b.removeAllGeometries(),this._removeObject3D(b))};b.prototype._updateCursorSegment=function(a){a=this._sceneView.renderCoordsHelper;var c=this._model.path,d=this._cursorSegmentObject;0<c.length&&"drawing"===this._model.state&&this._model.cursorPoint?(a.toRenderCoords(c.back,this._tempStartPosition),a.toRenderCoords(this._model.cursorPoint,this._tempEndPosition),this._createInterpolatedLineGeometry(d,this._pathLineMaterial,"path-segment",this._tempStartPosition,this._tempEndPosition,this._origin,
this._originTransform,this._model.measurementMode,this._cursorSegmentLengthLabelSegment,"end"),this._addObject3D(d)):(d.removeAllGeometries(),this._removeObject3D(d))};b.prototype._updatePerimeterSegments=function(a){for(var c=0;c<this._perimeterSegmentObjects.length;++c)this._updatePerimeterSegment(a,c)};b.prototype._updatePerimeterSegment=function(a,c){var d=a.path,b=this._perimeterSegmentObjects[c];a.validMeasurement&&"geodesic"!==this._model.measurementMode?(this._updatePerimeterSegmentObject(b,
a.positionsFittedRenderCoords[c],a.positionsFittedRenderCoords[(c+1)%d.length],this._origin,this._originTransform,a.intersectingSegments.has(c),this._perimeterLabelSegments[c]),this._addObject3D(b)):(b.removeAllGeometries(),this._removeObject3D(b))};b.prototype._updatePerimeterSegmentObject=function(a,c,d,b,f,e,k){this._createInterpolatedLineGeometry(a,e?this._intersectingPerimeterLineMaterial:this._perimeterLineMaterial,"perimeter-segment",c,d,b,f,this._model.measurementMode,k)};b.prototype._updateHandles=
function(a){for(var c=0;c<this.vertexManipulators.length;++c)this._updateVertexHandle(a,c);this._updateCursorHandle()};b.prototype._updateVertexHandle=function(a,c){this.vertexManipulators[c].manipulator.position=a.positionsRenderCoords[c]};b.prototype._updateCursorHandle=function(){var a=this._cursorManipulator;"drawing"===this._model.state&&this._model.cursorPoint?(a.visible=!0,a.mapPoint=this._model.cursorPoint):a.visible=!1};b.prototype._updateArea=function(a){switch(this._model.measurementMode){case "euclidean":this._updateAreaEuclidean(a);
break;case "geodesic":this._updateAreaGeodesic()}};b.prototype._updateAreaEuclidean=function(a){var c=this,d=this._areaObject;if(a.validMeasurement&&0===a.intersectingSegments.size&&a.triangleIndices){var b=[],f=m.vec3f64.create();a.positionsFittedRenderCoords.forEach(function(a){B.vec3.subtract(f,a,c._origin);b.push(f[0],f[1],f[2])});var e=[];a.positionsProjected.forEach(function(a){e.push(a[0],a[1])});var k=new N({position:{size:3,data:b},uv0:{size:2,data:e}},{position:a.triangleIndices,uv0:a.triangleIndices}),
k=new C(k,"area");d.removeAllGeometries();d.addGeometry(k,this._checkerBoardMaterial,this._originTransform);this._addObject3D(d);this._checkerBoardMaterial.setParameterValues({size:[a.checkerSize,a.checkerSize]})}else d.removeAllGeometries(),this._removeObject3D(d)};b.prototype._updateAreaGeodesic=function(){var a=this._areaObject;a.removeAllGeometries();this._removeObject3D(a)};b.prototype._updateProjectionLines=function(a){var c=a.path;this._resizeObject3DArray(this._projectionLineObjects,c.length);
for(var d=0;d<c.length;++d)this._updateProjectionLine(a,d);for(var b=Infinity,d=0;d<c.length;++d)b=Math.max(this._sceneView._stage.getCamera().computeScreenPixelSizeAt(a.positionsRenderCoords[d])),b=Math.max(this._sceneView._stage.getCamera().computeScreenPixelSizeAt(a.positionsFittedRenderCoords[d]));this._projectionLineMaterial.setParameterValues({stippleLength:this._params.projectionLineStippleSize*b})};b.prototype._updateProjectionLine=function(a,c){var b=this._projectionLineObjects[c];b.removeAllGeometries();
if(a.validMeasurement&&"euclidean"===this._model.measurementMode){a=m.vec3f64.create();B.vec3.subtract(a,this._model.viewData.positionsRenderCoords[c],this._origin);var n=m.vec3f64.create();B.vec3.subtract(n,this._model.viewData.positionsFittedRenderCoords[c],this._origin);c=new C(D.createPolylineGeometry([a,n]),"projected-line");b.addGeometry(c,this._projectionLineMaterial,this._originTransform);this._addObject3D(b)}else this._removeObject3D(b)};b.prototype._updateLabels=function(a){var c=this,b=
this._sceneView._stage.getCamera(),n=this._params.labelDistance,f=this._model,e="geodesic"===f.measurementMode,k="drawing"===f.state,l=function(a,b){return a.visible&&b.visible&&c._sceneView.overlay.overlaps(a.textItem,b.textItem)},g=this._areaLabel,h=q.positionLabelOnPoint(g,a.areaCentroid,b);g.text=f.areaLabel;g.visible=h&&a.validMeasurement&&0===a.intersectingSegments.size&&null!=f.areaLabel;g=this._pathLengthLabel;h=q.positionLabelOnCorner(g,this._pathLabelSegments[a.pathLengthLabelSegmentIndex],
this._cursorSegmentLengthLabelSegment,n,b);g.text=f.pathLengthLabel;g.visible=h&&k&&0<f.path.length;g=this._cursorSegmentLengthLabel;h=this._cursorSegmentLengthLabelSegment;h=q.positionLabelOnSegment(g,h,n,"bottom",b);g.text=f.cursorSegmentLengthLabel;g.visible=h&&k&&f.cursorSegmentLength&&0!==f.cursorSegmentLength.value;l(this._cursorSegmentLengthLabel,this._pathLengthLabel)&&(this._cursorSegmentLengthLabel.visible=!1);l(this._pathLengthLabel,this._areaLabel)&&(this._pathLengthLabel.visible=!1);
g=this._perimeterLengthLabel;if(f.validMeasurement&&0===a.intersectingSegments.size)for(k=0;k<a.path.length;++k)if(h=(a.perimeterLengthLabelSegmentIndex+k)%a.path.length,h=e?this._pathLabelSegments[h]:this._perimeterLabelSegments[h],h=q.positionLabelOnSegment(g,h,n,"top",b),g.text=f.perimeterLengthLabel,g.visible=h,l(g,this._areaLabel))g.visible=!1;else break;else g.visible=!1};b.prototype._getFocusPoint=function(){var a=this._model,c=this._model.lastDraggedVertex;switch(a.state){case "drawing":return a.cursorPoint?
a.cursorPoint:a.path.vertex(u.isSome(c)?c:a.path.length-1);case "editing":return u.isSome(c)?a.path.vertex(c):null;default:return a.cursorPoint}};b.prototype._updateLaserLine=function(){var a=this._model,c=this._params.laserLineEnabled&&"measured"!==a.state&&a.active;this._laserLineRenderer.focusSphereActive=!1;this._laserLineRenderer.segmentActive=!1;a=this._getFocusPoint();c&&a?(c=this._tempHandlePosition,this._sceneView.renderCoordsHelper.toRenderCoords(a,c),this._laserLineRenderer.focusPosition=
c,this._laserLineRenderer.focusPlaneActive=!0):this._laserLineRenderer.focusPlaneActive=!1};b.prototype._addObject3D=function(a){a.parentLayer||(this._layer.addObject(a),this._sceneView._stage.add(e.ContentType.OBJECT,a))};b.prototype._removeObject3D=function(a){a.parentLayer&&(this._layer.removeObject(a),this._sceneView._stage.remove(e.ContentType.OBJECT,a.id))};b.prototype._resizeObject3DArray=function(a,c){var b=this;r.resizeArray(a,c,function(){return new E},function(a){b._removeObject3D(a)})};
b.prototype._resizeManipulatorArray=function(a,c){var b=this;r.resizeArray(a,c,function(){var a=I.createSphereManipulator(b._sceneView,b._params.handleColor,b._params.handleOpacity);a.hideOnGrab=!0;a.radius=b._params.handleRadius;return{id:b._manipulators.add(a),manipulator:a}},function(a){b._manipulators.remove(a.manipulator)})};b.prototype._createInterpolatedLineGeometry=function(a,c,b,e,f,m,k,l,g,h){var d=this._sceneView.renderCoordsHelper,n=[],t=[],p=function(a,c){var b=x.sv3d.get();B.vec3.subtract(b,
a,m);n.push(b);t.push(c)};if("euclidean"===l){var y=x.sv3d.get();r.midpoint([e,f],y);l=x.sv3d.get();d.worldUpAtPosition(y,l);p(e,l);p(f,l);g&&g.update(e,f,h)}else{e=this._getSegmentInterpolator(e,f);f=this._params.lineSubdivisions+1&-2;var v=y=null,q=f/2-1,u=f/2;"start"===h?(q=0,u=1):"end"===h&&(q=f-2,u=f-1);for(var z=0;z<f;++z){var w=z/(f-1),A=x.sv3d.get();l=x.sv3d.get();e.eval(w,A);d.worldUpAtPosition(A,l);z===q&&(y=A);z===u&&(v=A);p(A,l)}g&&g.update(y,v,h)}b=new C(D.createPolylineGeometry(n,t),
b);a.removeAllGeometries();a.addGeometry(b,c,k)};b.prototype._getSegmentInterpolator=function(a,c){if(H.canProject(this._sceneView.spatialReference,H.SphericalECEFSpatialReference)){var b=this._sceneView.renderCoordsHelper.spatialReference;return new G.Spherical(a,c,b,b)}return new G.Linear(a,c)};b.prototype._initializeListeners=function(){var a=this;this._listenerHandles=new J;this._listenerHandles.add([this._model.watch(["state","lastDraggedVertex"],function(){return a._updateLaserLine()}),this._model.watch("cursorPoint",
function(){return a._updateAfterSyncViewData(function(c){a._updateCursorSegment(c);a._updateCursorHandle();"drawing"===a._model.state&&a._updateLabels(c);a._updateLaserLine()})}),this._sceneView.state.watch("camera",function(){return a._updateAfterSyncViewData(function(c){return a._updateCameraDependent(a._model.viewData)})}),this._model.watch(["unit","measurementMode"],function(){return a._updateAll(a._model.viewData)}),this._model.watch(["active"],function(){a._updateLaserLine();a._syncViewData(a._model.viewData)}),
this._model.watch("viewData",function(c){return a._syncViewData(c)})])};b.prototype._destroyListeners=function(){this._listenerHandles.destroy();this._listenerHandles=null};b._handleGeometry=new C(D.createSphereGeometry(1,32,32),"handle");return b}();(function(b){var a=function(){return function(){}}();b.PickRequest=a;a=function(){return function(a,b,e){void 0===a&&(a=null);void 0===b&&(b=null);void 0===e&&(e=null);this.type=a;this.scenePoint=b;this.mapPoint=e}}();b.PickResult=a})(p||(p={}));return p});