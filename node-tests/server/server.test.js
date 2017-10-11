const request = require('supertest');
const expect = require('expect');
var app=require('./server').app;
//const utils = require('utils');
describe('Server',()=>{
	describe('Get /',()=>{
		it('should hello wordl response',(done)=>{
			request(app)
			.get('/')
			.expect(404)
			.expect((res)=>{
				expect(res.body).toInclude({
					error: 'Page not found'
				});
			})
			.end(done);
		});
	});


it('should return my user object',(done)=>{
	request(app)
	 .get('/users')
	 .expect(200)
	 .expect((res)=>{
	 	expect(res.body).toInclude({
	 		name:'Mike',
	 		age:23
	 	});
	 })
	 .end(done);
});
});