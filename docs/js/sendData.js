'use strict';

function sendPostRequest(payload) {
	console.log(payload);
	let url = "https://s3.us-east-2.amazonaws.com/com.nishnha.hackgsu2017/users.json";
	let xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log("server ready");
		}
	};

	xhttp.open("POST", url, true);
	// xhttp.setRequestHeader("Content-Type", "application/xml");
	xhttp.send(payload);
};
