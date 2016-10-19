function ufme3() {
	url='https://api.medium.com/v1/users/1c123266ecc936248045a92b88d18b6b33850a845d206a3c0ec1d26219970db89/publications'
	//Load the request module
var request = require('request');

//Lets configure and request
request({
    url: url, //URL to hit
    qs: {from: 'blog example', time: +new Date()}, //Query string data
    method: 'GET', //Specify the method
    headers: { //We can define headers too
        'Authorization': 'Bearer 2a10abcef75a2c24bcb414d940143e86c4b1b4212460b32e1eec4be7f48f0a4cf'
    }
}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        //console.log(response.statusCode, JSON.parse(data).imageUrl;
        var new_body = JSON.parse(body)
		console.log(new_body.data)
    }
});
	}
    ufme3() 