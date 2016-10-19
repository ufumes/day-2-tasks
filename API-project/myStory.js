function poststory(){
	//Load the request module
	var request = require('request');
//Lets configure and request
request({
	   url: 'https://api.medium.com/v1/users/1c123266ecc936248045a92b88d18b6b33850a845d206a3c0ec1d26219970db89/posts',
    method: 'POST',
    Host: 'api.medium.com',
	 headers: { //We can define headers too
		'Authorization': 'Bearer 2a10abcef75a2c24bcb414d940143e86c4b1b4212460b32e1eec4be7f48f0a4cf',
		'Content-Type': 'application/json',
		'Accept': 'application/json',
		'Accept-Charset': 'utf-8'
    },

    //Lets post the following key/values as form
    json: {
      title: "Testing post by Api",
      contentFormat: "html",
      content: "<h1>This is working FC</h1><p>Thank God.</p>",
      canonicalUrl: "",
      tags: ["API", "TESTING", "ANDELA"],
      publishStatus: "public"
}


}, function(error, response, body){
    if(error) {
        console.log(error);
    } else {
        console.log(response.statusCode, body);
}
});
}



poststory();