// ESLint declarations:
/* global describe */
/* eslint one-var: 0, semi-style: 0 */

'use strict';

// -- Vendor Modules


// -- Local Modules
const TaskQ   = require('../index')
    , pack    = require('../package.json')
    , testlib = require('./int/lib')
    , methods = require('./int/methods')
    ;


// -- Local Constants
const libname = 'TaskQ';


// -- Local Variables


// -- Main
describe('Test TaskQ:', () => {
  testlib(TaskQ, libname, pack.version, 'without new');
  methods(TaskQ);
});
