const expect = require('expect');


describe('App', () => {

  it('should call the spy correctly', () => {
    var spy = expect.createSpy();
    spy('Deb', 34);
    expect(spy).toHaveBeenCalledWith('Deb', 34);
  })
})
