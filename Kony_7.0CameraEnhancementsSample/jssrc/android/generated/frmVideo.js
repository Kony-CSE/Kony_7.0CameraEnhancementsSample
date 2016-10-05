function addWidgetsfrmVideo() {
    frmVideo.setDefaultUnit(kony.flex.DP);
    var lblVideoSettings = new kony.ui.Label({
        "centerX": "50%",
        "height": "10%",
        "id": "lblVideoSettings",
        "isVisible": true,
        "left": "148dp",
        "skin": "CopyslLabel0e74302c65ce742",
        "text": "Video Settings",
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
        "onSelection": AS_ListBox_142c0c8c217f4afda07ca54e0490b6d2,
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
            ["1", "Continuous"]
        ],
        "onSelection": AS_ListBox_008e143d8e87434eae3db53b7079eccc,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Continuous"],
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
            ["2", "Always On"]
        ],
        "onSelection": AS_ListBox_f7561d18e5a24f0592f57814bad99865,
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
    var flexVideoQuality = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "8%",
        "id": "flexVideoQuality",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox03bcb4cb6208f40",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexVideoQuality.setDefaultUnit(kony.flex.DP);
    var lblVideoQuality = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblVideoQuality",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0aa42658ab9e742",
        "text": "Video Quality",
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
    var listboxVideoQuality = new kony.ui.ListBox({
        "accessibilityConfig": {
            "a11yHidden": false,
            "a11yHint": "",
            "a11yLabel": "",
            "a11yValue": ""
        },
        "centerY": "50%",
        "height": "80%",
        "id": "listboxVideoQuality",
        "isVisible": true,
        "left": "35%",
        "masterData": [
            ["1", "Medium"],
            ["2", "High"],
            ["3", "Low"],
            ["4", "640x480"],
            ["5", "1280x720"],
            ["6", "960x540"]
        ],
        "onSelection": AS_ListBox_20a4cc7860324b749d1e30f788bf0a1f,
        "selectedKey": "1",
        "selectedKeyValue": ["1", "Medium"],
        "skin": "slListBox01653046a648349",
        "width": "60%",
        "zIndex": 1
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "applySkinsToPopup": true,
        "placeholder": "Select Quality Level",
        "popupTitle": "Please Select",
        "viewType": constants.LISTBOX_VIEW_TYPE_LISTVIEW
    });
    flexVideoQuality.add(
    lblVideoQuality, listboxVideoQuality);
    var flexVideoDuration = new kony.ui.FlexContainer({
        "autogrowMode": kony.flex.AUTOGROW_NONE,
        "clipBounds": true,
        "height": "12%",
        "id": "flexVideoDuration",
        "isVisible": true,
        "layoutType": kony.flex.FREE_FORM,
        "left": "0dp",
        "skin": "CopyslFbox08682a51b38ea46",
        "top": "5%",
        "width": "100%",
        "zIndex": 1
    }, {}, {});
    flexVideoDuration.setDefaultUnit(kony.flex.DP);
    var lblVideoDuration = new kony.ui.Label({
        "centerY": "50%",
        "id": "lblVideoDuration",
        "isVisible": true,
        "left": "5%",
        "skin": "CopyslLabel0e86951e15d7540",
        "text": "Video Duration",
        "textStyle": {
            "letterSpacing": 0,
            "strikeThrough": false
        },
        "width": "30%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_MIDDLE_LEFT,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {
        "textCopyable": false
    });
    var sliderVideoDuration = new kony.ui.Slider({
        "centerY": "50%",
        "height": "80%",
        "id": "sliderVideoDuration",
        "isVisible": true,
        "left": "35%",
        "leftSkin": "slSliderLeftBlue",
        "max": 100,
        "min": 0,
        "onSlide": AS_Slider_780a8b75e773406ab0a60b412375d9ab,
        "rightSkin": "slSliderRightBlue",
        "selectedValue": 0,
        "step": 1,
        "thumbImage": "slider_android.png",
        "width": "60%",
        "zIndex": 1
    }, {}, {
        "thickness": 15
    });
    flexVideoDuration.add(
    lblVideoDuration, sliderVideoDuration);
    var camera = new kony.ui.Camera({
        "cameraSource": constants.CAMERA_SOURCE_REAR,
        "captureMode": constants.CAMERA_CAPTURE_MODE_VIDEO,
        "centerX": "50%",
        "compressionLevel": 0,
        "height": "8%",
        "id": "camera",
        "isVisible": true,
        "onCapture": AS_Camera_b82348e99d1b4114a7459036657f38b5,
        "skin": "cameraSkinGrey",
        "text": "Capture Video",
        "top": "2%",
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
            "captureButtonText": "",
            "startVideoButtonText": "Start Video",
            "stopVideoButtonText": "Stop Video",
            "overlayForm": frmVideoOverlay,
            "timerControlSkin": "timerSkin",
            "startVideoButtonSkin": "startVideoSkin",
            "stopVideoButtonSkin": "stopVideoSkin",
            "tapAnywhere": false
        }
    });
    frmVideo.add(
    lblVideoSettings, flexCameraSource, flexFocusMode, flexFlashMode, flexVideoQuality, flexVideoDuration, camera);
};

function frmVideoGlobals() {
    frmVideo = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmVideo,
        "enabledForIdleTimeout": false,
        "id": "frmVideo",
        "init": AS_Form_df5e565222de4dad81aff0d0aeb66a02,
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": false,
        "preShow": AS_Form_b375e306d2584ffe866c90eadd233c02,
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