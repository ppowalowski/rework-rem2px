var visit = require('rework-visit');

function rem2pxPlugin(size) {

  if('number' !== typeof size) {
      throw new Error('Please provide a size to the rem2px plugin.');
  }

  function rem2px(style) {
    visit(style, function(declarations) {
      declarations.forEach(function(d) {
        if(/\d*\.?\d+rem/.test(d.value)) {
		  d.value = d.value.replace(/(\d*\.?\d+)rem/g,function(match,m1){
			return parseFloat(m1, 10)*size + 'px';
		  });
        }
      });
    });
  }
  return rem2px;
}

module.exports = rem2pxPlugin;