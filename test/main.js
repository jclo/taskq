// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0 */


// -- Vendor Modules


// -- Local Modules
const TaskQ       = require('../src/taskq').default
    , constructor = require('./int/constructor')
    , methods     = require('./int/methods')
    ;


// -- Local Constants


// -- Local Variables


// -- Main
describe('Test TaskQ:', () => {
  constructor(TaskQ);
  methods(TaskQ);
});
