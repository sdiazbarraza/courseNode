const expect = require('expect');
const utils=require('./utils');
describe('Utils',()=>{


it('should add two numbers',()=>{
	var res = utils.add(33,11);
	//expect(res).toBe(44).toBeA('string');
	/*if(res!==44){
		throw new Error(`Expected 44 , but got ${res}.`);
	}*/
 });

it('should  async add two numbers',(done)=>{
	utils.asyncAdd(4,3,(sum)=>{
		expect(sum).toBe(7);	
		done();
	});
});
it('should square a number',()=>{
	var res = utils.square(3);
	if(res!==9){
		throw new Error(`Expected 9 ,but  got ${res}`);	
	}
});

it('should async square a number',(done)=>{
	utils.asyncSquare(7,(res)=>{
		expect(res).toBe(49);
		done();
	});
});

});