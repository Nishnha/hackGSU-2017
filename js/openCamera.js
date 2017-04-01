'use strict';

(function checkForUserMedia() {
	var _getUserMedia = navigator.mozGetUserMedia || navigator.webkitGetUserMedia;
	if (!_getUserMedia) {
		return Promise.reject(new Error("This device doesn't support getUserMedia"));
	};
})();

// navigator.getUserMedia = navigator.getUserMedia ||
// 						 navigator.mozGetUserMedia ||
// 						 navigator.webkitGetUserMedia;

var constraints = {
	audio: false,
	video: {
		facingMode: "environment",
		frameRate: {ideal: 16, max: 30}
	}
};

var video = document.querySelector('video');

function successCallback(stream) {
	video.srcObject = stream;
};

function errorCallback(error) {
	console.error('navigator.getUserMedia error: ' + error)
};

navigator.mediaDevices
	.getUserMedia(constraints)
	.then(successCallback)
	.catch(errorCallback);
