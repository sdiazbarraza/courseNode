const {ObjectID}=require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

var id= '59e2d8404e18136719d7721b';

if(!ObjectID.isValid(id)){
	console.log('Id not valid');
}
Todo.find({
	'_id':id
}).then((todos)=>{
	console.log('Todos',todos);
});

Todo.findOne({
	'_id':id
}).then((todos)=>{
	console.log('Todo',todos);
});

Todo.findById(id).then((todo)=>{
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo By Id',todo);
}).catch((e)=>console.log(e));

User.findById(id).then((todo)=>{
	if(!todo){
		return console.log('Id not found');
	}
	console.log('Todo By Id',todo);
}).catch((e)=>console.log(e));