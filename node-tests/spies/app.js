var db =require('./db.js');
module.exports.handleSignup=(email,password)=>{
	//Check if emailr already exist
	//Save the user to the database
	db.saveUser({
		email,
		password
	});
	//Send the welcome mail
};