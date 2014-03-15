var visit = require('rework-visit');

function rem2pxPlugin(size) {

  if('number' !== typeof size) {
      throw new Error('Please provide a size to the rem2px plugin.');
  }

  function rem2px(style) {
    visit(style, function(declarations) {
      declarations.forEach(function(d) {
        if(/([0-9]+)\.?([0-9]*)\s*rem/.test(d.value)) {
          d.value = parseFloat(d.value, 10)*size + 'px';
        }
      });
    });
  }

  return rem2px;
}

module.exports = rem2pxPlugin;

