const {MongoClient,ObjectID}= require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err){
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	//deleteMany
	//db.collection('Todos').deleteMany({text:'Eat lunch'}).then((result)=>{
//		console.log(result);
//	});
	
	//db.collection('Todos').deleteOne({text:'Eat lunch'}).then((result)=>{
	//	console.log(result);
	//});
	//db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
	//	console.log(result);
	//});
	
	/*db.collection('Users').deleteMany({name:'caca'}).then((result)=>{
     	console.log(result);
 	});*/
 	db.collection('Users').deleteOne({name:'Marylin'}).then((result)=>{
     	console.log(result);
 	});
 	db.collection('Users').findOneAndDelete({location:'Coquimbo'}).then((result)=>{
		console.log(result);
	});
	db.close();
});