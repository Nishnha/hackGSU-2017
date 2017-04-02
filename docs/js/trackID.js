function getID(targetColor) {
	let id;
	let highest = "R";

	let max = targetColor[0];
	if (targetColor[1] > max) {
		max = targetColor[1];
		highest = "G";
	}
	if (targetColor[2] > max) {
		max = targetColor[2];
		highest = "B"
	}

	switch (highest) {
		case("R"):
			id = "10101010";
			break;
		case("G"):
			id = "11001100";
			break;
		case("B"):
			id = "10001000";
			break;
	}

	createReport(id);
};

function createReport(id) {
	var selectTag = document.querySelector("select");
	var value = selectTag.options[selectTag.selectedIndex].value;

	let data = new Object();

	switch(value) {
		case ("Room1"):
			data.Room1 = id;
			data.Room2 = '';
			data.Room3 = '';
			break;
		case ("Room2"):
			data.Room1 = '';
			data.Room2 = id;
			data.Room3 = '';
			break;
		case ("Room3"):
			data.Room1 = '';
			data.Room2 = '';
			data.Room3 = id;
			break;
	}

	let payload = JSON.stringify(data);
	console.log(payload);
	sendPostRequest(payload);
};
