'use strict';

// function sendPostRequest(payload) {
// 	let url = "https://s3.us-east-2.amazonaws.com/com.nishnha.hackgsu2017/users.json";
// 	let xhttp = new XMLHttpRequest();
// 	xhttp.onreadystatechange = function() {
// 		if (this.readyState == 4 && this.status == 200) {
// 			console.log("Successfully recieved");
// 		}
// 	};
// 	xhttp.open("POST", url, true);
// 	xhttp.setRequestHeader("Content-Type", "application/xml");
// 	xhttp.send(payload);
// };

function sendPostRequest(payload) {
	let e_url = "https://s3.us-east-2.amazonaws.com/com.nishnha.hackgsu2017/users.json";

	$.ajax({
	    url: e_url,
	    method: 'PUT',
	    contentType: 'application/xml',
	    success: function() {
			console.log("Success");
	   	},
	    error: function(request,msg,error) {
			console.error(error);
	    }
	});
};
