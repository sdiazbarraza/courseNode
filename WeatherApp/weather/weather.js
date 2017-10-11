const request = require('request');

var getWeather =(lat,lng,callback)=>{
	request({
	url:'https://api.darksky.net/forecast/1cf04f63e68002cccd5773b3064eb75d/'+lat+','+lng,
	json:true
},(error,response,body)=>{
	if(!error && response.statusCode==200){
		callback(undefined,{
			temperature:body.currently.temperature,
			apparentTemperature:body.currently.apparentTemperature
		});
	}else{
		callback('Unable to fetch server');
	}
	
});
};
module.exports.getWeather=getWeather;