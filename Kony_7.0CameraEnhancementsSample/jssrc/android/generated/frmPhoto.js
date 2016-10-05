function addWidgetsfrmPhoto() {
    frmPhoto.setDefaultUnit(kony.flex.DP);
    var lblVideoSettings = new kony.ui.Label({
        "centerX": "50%",
        "height": "10%",
        "id": "lblVideoSettings",
        "isVisible": true,
        "left": "148dp",
        "skin": "CopyslLabel0e74302c65ce742",
        "text": "Photo Settings",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "top": "0%",
        "width": "100%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var flexCameraSource = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexCameraSource",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox00a18c2518ef34e",
        "top": "2%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexCameraSource.setDefaultUnit(kony.flex.DP);
    var cameraSource = new kony.ui.Label({
        "centerY": "50%",
        "id": "cameraSource",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel00cc0523a792849",
        "text": "Camera source",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listboxCameraSource = new kony.ui.ListBox({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "height": "80%",
        "id": "listboxCameraSource",
        "isVisible": true,
        "left": "35%",
        "masterData": [
            ["1", "Default"],
            ["2", "Front"],
            ["3", "Rear"]
        ],
        "onSelection": AS_ListBox_a81d0eb7d654406ba9d2680ede40db4d,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Default"],
        "skin": "slListBox0c7759d7aeb1a46",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholder": "Select",
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flexCameraSource.add(
    cameraSource, listboxCameraSource);
    var flexFocusMode = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexFocusMode",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0679424ec6ce14c",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexFocusMode.setDefaultUnit(kony.flex.DP);
    var lblFocusMode = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblFocusMode",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0d81518ca6dc043",
        "text": "Focus Mode",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listBoxFocusMode = new kony.ui.ListBox({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "height": "80%",
        "id": "listBoxFocusMode",
        "isVisible": true,
        "left": "35%",
        "masterData": [
            ["1", "Auto"]
        ],
        "onSelection": AS_ListBox_9b7f178d1409408fa9c5000fae36eb4c,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Auto"],
        "skin": "slListBox099434be6029448",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholder": "Select",
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flexFocusMode.add(
    lblFocusMode, listBoxFocusMode);
    var flexFlashMode = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexFlashMode",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox0dca9830615764f",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexFlashMode.setDefaultUnit(kony.flex.DP);
    var lblFlashMode = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblFlashMode",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel02b73ba7f8ea748",
        "text": "Flash Mode",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": kony.flex.USE_PREFFERED_SIZE
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var listboxFlashMode = new kony.ui.ListBox({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "height": "80%",
        "id": "listboxFlashMode",
        "isVisible": true,
        "left": "35%",
        "masterData": [
            ["1", "Auto"],
            ["2", "On"],
            ["3", "Off"],
            ["4", "Always On"]
        ],
        "onSelection": AS_ListBox_0c54771670c64a1089d9782abfec174f,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Auto"],
        "skin": "slListBox043948061bff240",
        "top": "0dp",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholder": "Select",
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flexFlashMode.add(
    lblFlashMode, listboxFlashMode);
    var camera = new kony.ui.Camera({
        "cameraSource": constants.CAMERA_SOURCE_REAR,
        "captureMode": constants.CAMERA_CAPTURE_MODE_PHOTO,
        "centerX": "50%",
        "compressionLevel": 0,
        "height": "8%",
        "id": "camera",
        "isVisible": true,
        "onCapture": AS_Camera_6ed0c490cbf24068954839bdf4d557e4,
        "skin": "cameraSkinGrey",
        "text": "Capture Photo",
        "top": "5%",
        "width": "80%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "accessMode": constants.CAMERA_IMAGE_ACCESS_MODE_PUBLIC,
        "enableOverlay": true,
        "enablePhotoCropFeature": false,
        "overlayConfig": {
            "captureButtonSkin": "cameraSkinGrey",
            "captureButtonText": "Capture Image",
            "startVideoButtonText": "Start Video",
            "stopVideoButtonText": "Stop Video",
            "overlayForm": frmPhotoOverlay,
            "referenceImageToCrop": frmPhotoOverlay.imgOverlay,
            "timerControlSkin": "timerSkin",
            "startVideoButtonSkin": "startVideoSkin",
            "stopVideoButtonSkin": "stopVideoSkin",
            "tapAnywhere": false
        }
    });
    var imgData = new kony.ui.Image2({
        "centerX": "50%",
        "height": "30%",
        "id": "imgData",
        "isVisible": true,
        "skin": "slImage",
        "src": "imagedrag.png",
        "top": "5%",
        "width": "50%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmPhoto.add(
    lblVideoSettings, flexCameraSource, flexFocusMode, flexFlashMode, camera, imgData);
};

function frmPhotoGlobals() {
    frmPhoto = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPhoto,
        "enabledForIdleTimeout": false,
        "id": "frmPhoto",
        "init": AS_Form_65f067edc78e438689f084a936605b52,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "preShow": AS_Form_7b3a00983c0d48d4ae3b75972f01cd34,
        "skin": "slForm"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "footerOverlap": false,
        "headerOverlap": false,
        "menuPosition": constants.FORM_MENU_POSITION_AFTER_APPMENU,
        "retainScrollPosition": false,
        "titleBar": true,
        "titleBarSkin": "slTitleBar",
        "windowSoftInputMode": constants.FORM_ADJUST_RESIZE
    });
};