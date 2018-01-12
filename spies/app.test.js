// https://github.com/jhnns/rewire
const expect = require('expect');
const rewire = require('rewire');

var app = rewire('./app');


describe('App', () => {
  var db = {
    saveUser: expect.createSpy()
  }
  app.__set__('db', db)

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Deb', 34);
    expect(spy).toHaveBeenCalledWith('Deb', 34);
  });

  it('should call saveUser with user object', () => {
    var email = 'example@email.com'
    var password = '1234c';
    app.handleSignup(email, password)
    expect(db.saveUser).toHaveBeenCalledWith({email, password})
  })
})
