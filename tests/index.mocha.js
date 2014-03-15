var rework = require('rework')
  , rem2px = require('../src/index.js')
  , read = require('fs').readFileSync
  , assert = require('assert')
;

var input = read(__dirname + '/fixtures/input.css', 'utf8')
  , expectedOutput = read(__dirname + '/fixtures/output.css', 'utf8')

describe('rem2px', function() {

  it('should work', function(){
    var output = rework(input)
      .use(rem2px(16))
      .toString().trim();

    assert.equal(output.trim(), expectedOutput.trim());
  });

  it('should fail when no size given', function(){
    assert.throws(function() {
      var output = rework(input)
        .use(rem2px())
        .toString().trim();
    });

  });

});

