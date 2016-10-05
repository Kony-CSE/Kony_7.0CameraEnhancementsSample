function addWidgetsfrmStart() {
    frmStart.setDefaultUnit(kony.flex.DP);
    var lblVideoSettings = new kony.ui.Label({
        "centerX": "50%",
        "height": "10%",
        "id": "lblVideoSettings",
        "isVisible": true,
        "left": "148dp",
        "skin": "CopyslLabel0e74302c65ce742",
        "text": "Home Screen",
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
    var btnPhoto = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "10%",
        "id": "btnPhoto",
        "isVisible": true,
        "onClick": AS_Button_41a9c05cb31742b3bb59453752a55227,
        "skin": "slButtonGlossBlue",
        "text": "Photo",
        "top": "25%",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    var btnVideo = new kony.ui.Button({
        "centerX": "50%",
        "focusSkin": "slButtonGlossRed",
        "height": "10%",
        "id": "btnVideo",
        "isVisible": true,
        "onClick": AS_Button_bd45787f426542e680eb3d8c85c6620b,
        "skin": "slButtonGlossBlue",
        "text": "Video",
        "top": "5%",
        "width": "80%"
    }, {
        "contentAlignment": constants.CONTENT_ALIGN_CENTER,
        "displayText": true,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmStart.add(
    lblVideoSettings, btnPhoto, btnVideo);
};

function frmStartGlobals() {
    frmStart = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmStart,
        "enabledForIdleTimeout": false,
        "id": "frmStart",
        "layoutType": kony.flex.FLOW_VERTICAL,
        "needAppMenu": true,
        "preShow": AS_Form_a4a94ad6aa2e484ead78c3efef079977,
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