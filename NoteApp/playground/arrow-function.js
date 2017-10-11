var square = (x)=>{
	var result =x * x;
	return result;
};

console.log(square(9));

var user ={
	name:'Andrew',
	sayHi:()=>{
		console.log(arguments);
		console.log('Hi. Im'+this.name);
	},
	sayHiAlt(){
			console.log(arguments);
			console.log('Hi. Im'+this.name);
	}
};
user.sayHi();