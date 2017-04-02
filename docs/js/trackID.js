'use strict';

var colorDiffThreshold = 10;
	colorDiffThreshold /= 100.0;
	colorDiffThreshold *= 255 * 3;

var sumPosition = 0;
function trackBadge(pixels, capture, targetColor) {
	sumPosition = createVector(0, 0);
	let w = capture.width, h = capture.height;

	let i = 0;
	let total = 0;
	for (let y = 0; y < h; y++) {
		for (let x = 0; x < w; x++) {
			let diff =
				Math.abs(pixels[i + 0] - targetColor[0]) +
				Math.abs(pixels[i + 1] - targetColor[1]) +
				Math.abs(pixels[i + 2] - targetColor[2]);

			if (diff < colorDiffThreshold) {
				sumPosition.x += x;
				sumPosition.y += y;
				total++;
			}
			i += 4;
		}
	}
	sumPosition.div(total);
};

function showColorRectangle(targetColor) {
	noStroke();
 	fill(targetColor);
 	rect(20, 20, 40, 40);
};

function showTrackingLine(sumPosition, targetColor) {
	ellipse(sumPosition.x, sumPosition.y, 8, 8);
 	noFill();
 	stroke(targetColor);
 	strokeWeight(8);
	drawTrail(sumPosition);
};

let trailPoints = [];
function drawTrail(nextPoint) {
	let trailLength = 10;

	trailPoints.push(nextPoint);

	if(trailPoints.length > trailLength) {
		trailPoints.shift();
	}

	beginShape();
	trailPoints.forEach(function (point) {
		vertex(point.x, point.y);
	});
	endShape();
};
