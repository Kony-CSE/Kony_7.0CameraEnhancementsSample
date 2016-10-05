function setDefaultPhotoOptions() {
    frmPhoto.camera.cameraSource = constants.CAMERA_SOURCE_DEFAULT;
    frmPhoto.camera.focusMode = constants.CAMERA_FOCUS_MODE_AUTO;
    frmPhoto.camera.cameraOptions = {
        flashMode: constants.FLASH_MODE_AUTO
    };
}

function setDefaultVideoOptions() {
    frmVideo.camera.cameraSource = constants.CAMERA_SOURCE_DEFAULT;
    frmVideo.camera.focusMode = constants.CAMERA_FOCUS_MODE_CONTINUOUS;
    frmVideo.camera.cameraOptions = {
        flashMode: constants.FLASH_MODE_AUTO
    };
    frmVideo.camera.videoQualityLevel = frmVideo.listboxVideoQuality.masterData[0][0]
}

function setCameraSource() {
    if (currentForm.listboxCameraSource.selectedKeyValue[1] == "Default") currentForm.camera.cameraSource = constants.CAMERA_SOURCE_DEFAULT;
    else if (currentForm.listboxCameraSource.selectedKeyValue[1] == "Front") currentForm.camera.cameraSource = constants.CAMERA_SOURCE_FRONT;
    else currentForm.camera.cameraSource = constants.CAMERA_SOURCE_REAR;
}

function setCameraFocusMode() {
    if (currentForm.id == "frmVideo") currentForm.camera.focusMode = constants.CAMERA_FOCUS_MODE_CONTINUOUS;
    else currentForm.camera.focusMode = constants.CAMERA_FOCUS_MODE_AUTO;
}

function setCameraFlashMode() {
    /* if (currentForm.id == "frmVideo"){
     	if(currentForm.listboxFlashMode.selectedKeyValue[1] == "Auto")
          	currentForm.camera.cameraOptions={flashMode: constants.FLASH_MODE_AUTO};
     	 else
        	currentForm.camera.cameraOptions={flashMode:constants.FLASH_MODE_ALWAYS_ON}; 
   }
  else{*/
    if (currentForm.listboxFlashMode.selectedKeyValue[1] == "Auto") currentForm.camera.cameraOptions = {
        flashMode: constants.FLASH_MODE_AUTO
    };
    else if (currentForm.listboxFlashMode.selectedKeyValue[1] == "On") currentForm.camera.cameraOptions = {
        flashMode: constants.FLASH_MODE_ON
    };
    else if (currentForm.listboxFlashMode.selectedKeyValue[1] == "Off") currentForm.camera.cameraOptions = {
        flashMode: constants.FLASH_MODE_OFF
    };
    else currentForm.camera.cameraOptions = {
        flashMode: constants.FLASH_MODE_ALWAYS_ON
    };
    //}
}

function setVideoQuality() {
    currentForm.camera.videoQualityLevel = currentForm.listboxVideoQuality.selectedKeyValue[0];
}
// Applicable for only iPhone
function setVideoType() {}

function setVideoDuration() {
    currentForm.camera.videoDuration = currentForm.sliderVideoDuration.selectedValue;
    currentForm.lblVideoDuration.text = "Video Duration = " + currentForm.camera.videoDuration + " Seconds";
}

function setSupportedVideoQualities() {
    // alert("Supported video qualities are " + JSON.stringify(currentForm.camera.supportedVideoQualityLevels));
    /*alert("constant0" + constants.CAMERA_VIDEO_QUALITY_HIGH);
  alert("constant1" + constants.CAMERA_VIDEO_QUALITY_2160P);
  alert("constant2" + constants.CAMERA_VIDEO_QUALITY_1080P);
  alert("constant3" +constants.CAMERA_VIDEO_QUALITY_720P);
  alert("constant4" + constants.CAMERA_VIDEO_QUALITY_480P);
  alert("constant5" + constants.CAMERA_VIDEO_QUALITY_CIF);
  alert("constant6" + constants.CAMERA_VIDEO_QUALITY_QVGA);
  alert("constant7" + constants.CAMERA_VIDEO_QUALITY_LOW);
  alert("constant8" + constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_HIGH);
  alert("constant9" + constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_2160P);
  alert("constant10" + constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_1080P);
  alert("constant11" + constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_720P);
  alert("constant12" + constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_480P);
  alert("constant13" + constants.CAMERA_VIDEO_QUALITY_HIGH_SPEED_LOW);*/
    var totalVideoQualities = [
        [0, "CAMERA_VIDEO_QUALITY_HIGH"],
        [1, "CAMERA_VIDEO_QUALITY_2160P"],
        [2, "CAMERA_VIDEO_QUALITY_1080P"],
        [3, "CAMERA_VIDEO_QUALITY_720P"],
        [4, "CAMERA_VIDEO_QUALITY_480P"],
        [5, "CAMERA_VIDEO_QUALITY_CIF"],
        [6, "CAMERA_VIDEO_QUALITY_QVGA"],
        [7, "CAMERA_VIDEO_QUALITY_LOW"],
        [8, "CAMERA_VIDEO_QUALITY_HIGH_SPEED_HIGH"],
        [9, "CAMERA_VIDEO_QUALITY_HIGH_SPEED_2160P"],
        [10, "CAMERA_VIDEO_QUALITY_HIGH_SPEED_1080P"],
        [11, "CAMERA_VIDEO_QUALITY_HIGH_SPEED_720P"],
        [12, "CAMERA_VIDEO_QUALITY_HIGH_SPEED_480P"],
        [13, "CAMERA_VIDEO_QUALITY_HIGH_SPEED_LOW"]
    ]
    var supportedVideoQualities = currentForm.camera.supportedVideoQualityLevels;
    var listboxVideoQualityMasterData = [];
    for (i = 0; i < supportedVideoQualities.length; i++) {
        listboxVideoQualityMasterData.push([totalVideoQualities[supportedVideoQualities[i]][0], totalVideoQualities[supportedVideoQualities[i]][1]]);
    }
    currentForm.listboxVideoQuality.masterData = listboxVideoQualityMasterData;
}

function setPhoto() {
    frmPhoto.imgData.rawBytes = frmPhoto.camera.rawBytes;
    frmPhoto.show();
}

function displayVideoForm() {
    frmVideo.show();
    alert("Video captured - Go to gallery to view the captured video")
}