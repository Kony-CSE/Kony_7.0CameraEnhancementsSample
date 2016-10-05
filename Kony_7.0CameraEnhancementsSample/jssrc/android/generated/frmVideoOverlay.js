function addWidgetsfrmVideoOverlay() {
    frmVideoOverlay.setDefaultUnit(kony.flex.DP);
    frmVideoOverlay.add();
};

function frmVideoOverlayGlobals() {
    frmVideoOverlay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmVideoOverlay,
        "enabledForIdleTimeout": false,
        "id": "frmVideoOverlay",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "CopyslForm07039e6805bb641"
    }, {
        "displayOrientation": constants.FORM_DISPLAY_ORIENTATION_PORTRAIT,
        "layoutType": kony.flex.FREE_FORM,
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