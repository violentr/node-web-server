// https://github.com/mjackson/expect
// https://github.com/visionmedia/supertest

const request = require('supertest');
const expect = require('expect');
var app = require('./server.js').app;

describe('root path /',()=> {
  it('should return error object in response', (done) => {
    request(app)
    .get('/')
    .expect(404)
    .expect((res) => {
      expect(res.body).toEqual({
        error: 'Page not found',
        name: "App version 1.1"
      });
    })
    .end(done);
  })
})
