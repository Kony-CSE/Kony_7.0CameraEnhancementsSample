function addWidgetsfrmPhotoOverlay() {
    frmPhotoOverlay.setDefaultUnit(kony.flex.DP);
    var imgOverlay = new kony.ui.Image2({
        "centerX": "50%",
        "centerY": "40%",
        "height": "60%",
        "id": "imgOverlay",
        "isVisible": true,
        "skin": "slImage",
        "src": "frame.png",
        "width": "60%"
    }, {
        "imageScaleMode": constants.IMAGE_SCALE_MODE_MAINTAIN_ASPECT_RATIO,
        "padding": [0, 0, 0, 0],
        "paddingInPixel": false
    }, {});
    frmPhotoOverlay.add(
    imgOverlay);
};

function frmPhotoOverlayGlobals() {
    frmPhotoOverlay = new kony.ui.Form2({
        "addWidgets": addWidgetsfrmPhotoOverlay,
        "enabledForIdleTimeout": false,
        "id": "frmPhotoOverlay",
        "layoutType": kony.flex.FREE_FORM,
        "needAppMenu": true,
        "skin": "slForm"
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