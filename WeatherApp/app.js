
const request = require('request');
const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather');

const argv =yargs.options({
	a:{
		demand:true,
		alias:'address',
		describe:'Address to fetch weather for',
		string:true
	}
})
.help()
.alias('help','h')
.argv;
geocode.geocodeAddress(argv.address,(errorMessage,results)=>{
	if(errorMessage){
		console.log(errorMessage);
	}else{
		console.log(JSON.stringify(results,undefined,2));
		weather.getWeather(results.latitude,results.longitude,(errorMessage,weatherResults)=>{
			if(errorMessage){
			console.log(errorMessage);
			}else{
			console.log('Its currently '+ weatherResults.temperature+'.It feels like ' + weatherResults.apparentTemperature);
			}
		});
	}
});

//https://api.darksky.net/forecast/[key]/[latitude],[longitude]
//1cf04f63e68002cccd5773b3064eb75d
