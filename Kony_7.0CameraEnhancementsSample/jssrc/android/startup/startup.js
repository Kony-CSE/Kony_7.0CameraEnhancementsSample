//startup.js file
var globalhttpheaders = {};
var appConfig = {
    appId: "Camera",
    appName: "Camera",
    appVersion: "1.0.0",
    platformVersion: null,
    serverIp: "10.37.129.2",
    serverPort: "80",
    secureServerPort: "443",
    isDebug: false,
    middlewareContext: "Camera",
    isMFApp: false,
    eventTypes: [],
    url: "http://kh177.kitspl.com:8585/Camera/MWServlet",
    secureurl: "http://kh177.kitspl.com:8585/Camera/MWServlet"
};
sessionID = "";

function appInit(params) {
    skinsInit();
    frmPhotoGlobals();
    frmPhotoOverlayGlobals();
    frmStartGlobals();
    frmVideoGlobals();
    frmVideoOverlayGlobals();
    setAppBehaviors();
};

function setAppBehaviors() {
    kony.application.setApplicationBehaviors({
        applyMarginPaddingInBCGMode: false,
        adherePercentageStrictly: true,
        retainSpaceOnHide: true,
        marginsIncludedInWidgetContainerWeight: true,
        APILevel: 6900
    })
};

function themeCallBack() {
    callAppMenu();
    initializeGlobalVariables();
    kony.application.setApplicationInitializationEvents({
        init: appInit,
        showstartupform: function() {
            frmStart.show();
        }
    });
};

function loadResources() {
    globalhttpheaders = {};
    sdkInitConfig = {
        "appConfig": appConfig,
        "isMFApp": appConfig.isMFApp,
        "eventTypes": appConfig.eventTypes,
    }
    kony.setupsdks(sdkInitConfig, onSuccessSDKCallBack, onSuccessSDKCallBack);
};

function onSuccessSDKCallBack() {
    kony.theme.setCurrentTheme("default", themeCallBack, themeCallBack);
}
kony.application.setApplicationMode(constants.APPLICATION_MODE_NATIVE);
//If default locale is specified. This is set even before any other app life cycle event is called.
loadResources();