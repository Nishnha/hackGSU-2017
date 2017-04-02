'use strict';

var capture, backgroundPixels = 0;
var threshold = 20;	// 0 to 100
var targetColor = [255, 0, 0, 255];

function setup() {
	let constraints = {
		audio: false,
		video: {
			facingMode: "environment",
			frameRate: {ideal: 32, max: 32},
		}
	};

	capture = createCapture(constraints, function(stream) {
		console.log(stream);
	});
	capture.size(640, 480);
	capture.mousePressed(function() {
		targetColor = capture.get(capture.width + mouseX, mouseY);
		console.log("Updated targetColor to: " + targetColor + " at mouseX:" + (capture.width + mouseX) + " and mouseY:" + mouseY);
	});
	// capture.hide();
	createCanvas(640, 480);
};

function resetBackground() {
	backgroundPixels = 0;
};

function copyImage(src, dst) {
	var n = src.length;
	if(!dst || dst.length != n) {
    	dst = new src.constructor(n);
	}
	while(n--) {
	  dst[n] = src[n];
	}
	return dst;
};

var presence = 0;
function draw() {
	capture.loadPixels();
	let pixels = capture.pixels;
	let objectPresent = false;

	if (capture.pixels.length > 0) {
		if (backgroundPixels == 0) {
	  		backgroundPixels = copyImage(capture.pixels, backgroundPixels);
		}
	}

	let objectThreshold = 15;
	if (presence > objectThreshold) {
		trackBadge(pixels, capture, targetColor);
		objectPresent = true;
	}

	let thresholdAmount = threshold * 255.0 / 100.0;

	let w = capture.width, h = capture.height;
	let total = 0;
	let i = 0;
	for (let y = 0; y < h; y++) {
		for (let x = 0; x < w; x++) {
		  	let r_diff = Math.abs(pixels[i+0] - backgroundPixels[i+0]) > thresholdAmount;
		  	let g_diff = Math.abs(pixels[i+1] - backgroundPixels[i+1]) > thresholdAmount;
		  	let b_diff = Math.abs(pixels[i+1] - backgroundPixels[i+1]) > thresholdAmount;

		  	let anydiff = r_diff || g_diff || b_diff;
			let output = 0;

		  	if (anydiff) {
				output = 255;
				total++;
			}

		  	pixels[i++] = output;	// Red
		  	pixels[i++] = output;	// Green
		  	pixels[i++] = output;	// Blue
		  	i++; 					// Skip alpha
		}
	}

	let ratio = total / (w * h);
	presence = int(100 * ratio);	// 0 is no change from bg, 100 is no similarity to bg

	capture.updatePixels();
	image(capture, 0, 0, w, h);

	if (objectPresent) {
		showColorRectangle(targetColor);
		showTrackingLine(sumPosition, targetColor);
	}
};