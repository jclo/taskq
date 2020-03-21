// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
const TaskQ       = require('../index.js')
    , constructor = require('./int/constructor.js')
    , methods     = require('./int/methods.js')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
describe('Test TaskQ:', () => {
  constructor(TaskQ);
  methods(TaskQ);
});
