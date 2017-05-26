var fs = require('fs');

var babelrc = fs.readFileSync('./.babelrc');
var config;

try {
  config = JSON.parse(babelrc);
} catch(error) {
  console.error('==>     ERROR: Error parsing your .babelrc.');
  console.error(error);
}

require('babel-core/register')(config);
require('../server');
