// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Node modules


// -- Local modules
const TaskQ       = require('../index.js')
    , constructor = require('./int/constructor.js')
    , methods     = require('./int/methods.js')
    ;


// -- Local constants


// -- Local variables

// -- Main
describe('Test TaskQ:', () => {
  constructor(TaskQ);
  methods(TaskQ);
});
