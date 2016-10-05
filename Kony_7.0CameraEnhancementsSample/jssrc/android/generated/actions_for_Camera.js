//actions.js file 
function AS_Button_41a9c05cb31742b3bb59453752a55227(eventobject) {
    frmPhoto.show();
}
function AS_Button_bd45787f426542e680eb3d8c85c6620b(eventobject) {
    frmVideo.show();
}
function AS_Button_e3235856a5ff476280bbf2ab3442bf08(eventobject) {
    openGalleryVideo();
}
function AS_Camera_6ed0c490cbf24068954839bdf4d557e4(eventobject) {
    setPhoto();
}
function AS_Camera_b82348e99d1b4114a7459036657f38b5(eventobject) {
    displayVideoForm();
}
function AS_Form_049b101d9c2e48438a121b8ae96e21be(eventobject) {
    setDefaultVideoOptions();
}
function AS_Form_071df7fe4481426bbb76294cbbb1b889(eventobject) {}
function AS_Form_573f21e8d1104b5da838044bb9879b9b(eventobject) {
    frmStart.dummycamera.cameraOptions = {
        flashMode: constants.FLASH_MODE_ON
    }
}
function AS_Form_60806357f078419aac694b130321bba5(eventobject) {
    setSupportedVideoQualities()
}
function AS_Form_65f067edc78e438689f084a936605b52(eventobject) {
    setDefaultPhotoOptions();
}
function AS_Form_7b3a00983c0d48d4ae3b75972f01cd34(eventobject) {
    currentForm = frmPhoto;
}
function AS_Form_9b5c2755c2594edf88331e5a3070c078(eventobject) {}
function AS_Form_9bc1a417c48946cfb1f06a2b0d7678ed(eventobject) {}
function AS_Form_a4a94ad6aa2e484ead78c3efef079977(eventobject) {}
function AS_Form_b375e306d2584ffe866c90eadd233c02(eventobject) {
    currentForm = frmVideo;
}
function AS_Form_df5e565222de4dad81aff0d0aeb66a02(eventobject) {
    currentForm = frmVideo;
    setSupportedVideoQualities();
    setDefaultVideoOptions();
}
function AS_Form_f895c8d05a6c413492755c47ac4554e1(eventobject) {
    setSupportedVideoQualities();
}
function AS_Form_fe55996fd668472086c4d667f0c0b3f3(eventobject) {
    frmVideo.show();
}
function AS_ListBox_008e143d8e87434eae3db53b7079eccc(eventobject) {
    setCameraFocusMode();
}
function AS_ListBox_0c54771670c64a1089d9782abfec174f(eventobject) {
    setCameraFlashMode();
}
function AS_ListBox_142c0c8c217f4afda07ca54e0490b6d2(eventobject) {
    setCameraSource();
}
function AS_ListBox_20a4cc7860324b749d1e30f788bf0a1f(eventobject) {
    setVideoQuality();
}
function AS_ListBox_2c819910082d43adb4349e1bf44d86ad(eventobject) {
    setVideoQuality();
}
function AS_ListBox_771412d582224f839aecffce9c11f633(eventobject) {
    setVideoType();
}
function AS_ListBox_9b7f178d1409408fa9c5000fae36eb4c(eventobject) {
    setCameraFocusMode();
}
function AS_ListBox_a81d0eb7d654406ba9d2680ede40db4d(eventobject) {
    setCameraSource();
}
function AS_ListBox_b97e256243014ca0b0886ca4da01a31e(eventobject) {}
function AS_ListBox_ee65959ef04b4a3b885d2e13b2b2d565(eventobject) {
    setVideoType();
}
function AS_ListBox_f7561d18e5a24f0592f57814bad99865(eventobject) {
    setCameraFlashMode();
}
function AS_ListBox_f7a1856e097648d1910dcaa73a0d88f0(eventobject) {}
function AS_Slider_780a8b75e773406ab0a60b412375d9ab(eventobject, selectedvalue) {
    setVideoDuration();
}
function AS_Slider_7876092dd9a84cf4ba180c476495840f(eventobject, selectedvalue) {
    setVideoDuration();
}
function AS_TitleBar_b8cf366fb1ef480894eb8d5558e317da(eventobject) {
    frmVideo.show();
}