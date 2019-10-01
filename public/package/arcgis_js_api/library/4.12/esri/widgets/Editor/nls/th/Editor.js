// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.12/esri/copyright.txt for details.
//>>built
define({widgetLabel:"Editor",multipleFeaturesTemplate:"\u0e2b\u0e25\u0e32\u0e22\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c ({total})",untitledFeatureTemplate:"\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e17\u0e35\u0e48\u0e44\u0e21\u0e48\u0e21\u0e35\u0e0a\u0e37\u0e48\u0e2d {id}",editFeatures:"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c",editFeature:"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c",addFeature:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c",
selectTemplate:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1b\u0e23\u0e30\u0e40\u0e20\u0e17\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c",selectFeatureToEdit:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e41\u0e01\u0e49\u0e44\u0e02",selectFeature:"\u0e40\u0e25\u0e37\u0e2d\u0e01\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c",placeFeature:"\u0e27\u0e32\u0e07\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c",placeFeatureOnMap:"\u0e27\u0e32\u0e07\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e1a\u0e19\u0e41\u0e1c\u0e19\u0e17\u0e35\u0e48",
add:"\u0e40\u0e1e\u0e34\u0e48\u0e21",discardEdits:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02",discardFeature:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c",edit:"\u0e41\u0e01\u0e49\u0e44\u0e02",keepFeature:"\u0e04\u0e07\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e44\u0e27\u0e49",continueAdding:"\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e15\u0e48\u0e2d",continueEditing:"\u0e41\u0e01\u0e49\u0e44\u0e02\u0e15\u0e48\u0e2d",editing:"\u0e41\u0e01\u0e49\u0e44\u0e02",
warning:"\u0e1b\u0e23\u0e30\u0e01\u0e32\u0e28",retry:"\u0e25\u0e2d\u0e07\u0e43\u0e2b\u0e21\u0e48",ignore:"\u0e40\u0e1e\u0e34\u0e01\u0e40\u0e09\u0e22",deleteWarningTitle:"\u0e25\u0e1a\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e19\u0e35\u0e49\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",deleteWarningMessage:"\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e19\u0e35\u0e49\u0e08\u0e30\u0e16\u0e39\u0e01\u0e25\u0e1a\u0e2d\u0e2d\u0e01\u0e2d\u0e22\u0e48\u0e32\u0e07\u0e16\u0e32\u0e27\u0e23",cancelEditTitle:"\u0e25\u0e49\u0e32\u0e07\u0e01\u0e32\u0e23\u0e25\u0e1a\u0e02\u0e49\u0e2d\u0e21\u0e39\u0e25?",
cancelAddTitle:"\u0e25\u0e30\u0e17\u0e34\u0e49\u0e07\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",cancelAddWarningMessage:"\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e19\u0e35\u0e49\u0e08\u0e30\u0e2a\u0e39\u0e0d\u0e2b\u0e32\u0e22\u0e44\u0e1b",cancelEditWarningMessage:"\u0e01\u0e32\u0e23\u0e2d\u0e31\u0e1e\u0e40\u0e14\u0e15\u0e02\u0e2d\u0e07\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c\u0e19\u0e35\u0e49\u0e08\u0e30\u0e2a\u0e39\u0e0d\u0e2b\u0e32\u0e22\u0e44\u0e1b",
cancelRequestTitle:"\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e07\u0e32\u0e19\u0e2b\u0e23\u0e37\u0e2d\u0e44\u0e21\u0e48",cancelRequestWarningMessage:"\u0e21\u0e35\u0e01\u0e32\u0e23\u0e2a\u0e48\u0e07\u0e04\u0e33\u0e02\u0e2d\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e22\u0e01\u0e40\u0e25\u0e34\u0e01\u0e02\u0e31\u0e49\u0e19\u0e15\u0e2d\u0e19\u0e01\u0e32\u0e23\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e07\u0e32\u0e19\u0e19\u0e35\u0e49",
errorWarningTitle:"\u0e02\u0e2d\u0e2d\u0e20\u0e31\u0e22 \u0e40\u0e01\u0e34\u0e14\u0e02\u0e49\u0e2d\u0e1c\u0e34\u0e14\u0e1e\u0e25\u0e32\u0e14\u0e02\u0e36\u0e49\u0e19",errorWarningMessageTemplate:"\u0e44\u0e21\u0e48\u0e2a\u0e32\u0e21\u0e32\u0e23\u0e16\u0e1a\u0e31\u0e19\u0e17\u0e36\u0e01\u0e01\u0e32\u0e23\u0e41\u0e01\u0e49\u0e44\u0e02\u0e44\u0e14\u0e49: {errorMessage}",clickToFinishTemplate:"\u0e04\u0e25\u0e34\u0e01 {button} \u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e2a\u0e34\u0e49\u0e19\u0e2a\u0e38\u0e14",tips:{clickToStart:"\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e23\u0e34\u0e48\u0e21\u0e27\u0e32\u0e14",
clickToContinue:"\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e14\u0e15\u0e48\u0e2d",clickToAddPoint:"\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e08\u0e38\u0e14",clickToContinueThenDoubleClickToEnd:"\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e27\u0e32\u0e14\u0e15\u0e48\u0e2d \u0e08\u0e32\u0e01\u0e19\u0e31\u0e49\u0e19\u0e14\u0e31\u0e1a\u0e40\u0e1a\u0e34\u0e25\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e14\u0e33\u0e40\u0e19\u0e34\u0e19\u0e01\u0e32\u0e23\u0e43\u0e2b\u0e49\u0e40\u0e2a\u0e23\u0e47\u0e08",
clickToAddFeature:"\u0e04\u0e25\u0e34\u0e01\u0e40\u0e1e\u0e37\u0e48\u0e2d\u0e40\u0e1e\u0e34\u0e48\u0e21\u0e1f\u0e35\u0e40\u0e08\u0e2d\u0e23\u0e4c"}});