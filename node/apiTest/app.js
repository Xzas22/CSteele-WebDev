const request = require("request");

const url = "https://query.yahooapis.com/v1/public/yql?q=select%20astronomy.sunset%20from%20weather.forecast%20where%20woeid%20in%20(select%20woeid%20from%20geo.places(1)%20where%20text%3D%22maui%2C%20hi%22)&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys";

request(url, function(err, res, body){
	if(!err && res.statusCode == 200){
		let parsedBody = JSON.parse(body);
		console.log(parsedBody.query.results.channel.astronomy.sunset);
	}
});