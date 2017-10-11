const request = require('request');
var encodedAddress = (address) =>{
	return encodeURIComponent(address);
};
var geocodeAddress = (address,callback)=>{
	request({
	url:'https://maps.googleapis.com/maps/api/geocode/json?&address='+encodedAddress(address)
	,json:true
	},(error,response,body)=>{
		if(error){
			callback('Unabel to connect to Google Servers')
		}else if(body.status==='ZERO_RESULTS'){
			callback('Unabel to connect to Google Servers');
		}else if(body.status==='OK'){
			callback(undefined,{
				address:body.results[0].formatted_address,
				latitude:body.results[0].geometry.location.lat,
				longitude:body.results[0].geometry.location.lng
			});
		}
	}); 	
};

module.exports={
		geocodeAddress,
};
