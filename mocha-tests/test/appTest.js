// const assert = require('assert')
// above if we want to use JS' own library
// const assert = require('chai').assert;
// const app = require('../app');

// describe('App', function(){
//   it('app should return hello', function(){
//     assert.equal(app(), 'hello');
//   });
// });
const assert = require('chai').assert;
const app = require('../app');
// const sayHello = require('../app').sayHello;
// const addNumbers = require('../app').addNumbers;

//results
sayHelloResult = app.sayHello();
addNumbersResult = app.addNumbers(5,5);


describe('App', function(){
  describe('sayHello()', function(){
    it('sayHello should return hello', function(){
      // let result = app.sayHello();
      // assert.equal(app.sayHello(), 'hello');
      assert.equal(sayHelloResult, 'hello');
    });
    it('sayHello should return type string', function(){
      // let result = app.sayHello();
      assert.typeOf(sayHelloResult, 'string');
    });
  });
  describe('addNumbers()', function(){
  it('addNumbers should be above 5', function(){
    // let result = app.addNumbers(5,5);
    assert.isAbove(addNumbersResult, 5);
  });
  it('addNumbers should return type number', function(){
    // let result = app.addNumbers(5,5);
    assert.typeOf(addNumbersResult, 'number');
    });
  })
  
});