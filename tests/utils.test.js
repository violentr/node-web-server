const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () =>{
  var res = utils.add(33, 11);
  expect(res).toBe(44)
  expect(typeof res).toBe('number');
})

it('should async add two numbers', (done) => {
  utils.asyncAdd(4, 3, (sum) => {
    expect(sum).toBe(7);
    done();
  })
})
