const express = require('express');

var app= express();

app.get('/',(req,res)=>{
	res.status(404).send({error: 'Page not found',name:'Todo App v1.0'});
});
app.get('/users',(req,res)=>{
	res.send({
		name : 'Mike',
		age: 23
	},{
		name : 'Jhon',
		age: 24
	},{
		name : 'Doris',
		age: 26
	});
});

//GET /users
//Give users a name prop and age prop
app.listen(3000);
module.exports.app=app;