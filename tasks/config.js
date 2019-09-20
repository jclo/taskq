/* eslint */

'use strict';

module.exports = {
  dist: './_dist',
  libdir: './lib',
  libname: 'TaskQ',
  parent: 'this',
  noparent: '-noparent',
  index: './index.js',
  // These are the Javascript files required to build the library.
  /* eslint-disable no-multi-spaces */
  src: [
    // The file _header must be declared the first because it creates the head
    // of the umd module.
    './src/_header',

    './src/taskq.js',
    './src/private/taskq.js',

    // This file must always be the last one as it closes the umd module.
    './src/_footer',
  ],
  /* eslint-enable no-multi-spaces */
  license: ['/*! ****************************************************************************',
    ' * {{lib:name}} v{{lib:version}}',
    ' *',
    ' * {{lib:description}}.',
    ' * (you can download it from npm or github repositories)',
    ' * Copyright (c) 2019 {{lib:author}} <{{lib:email}}> ({{lib:url}}).',
    ' * Released under the MIT license. You may obtain a copy of the License',
    ' * at: http://www.opensource.org/licenses/mit-license.php).',
    ' * ************************************************************************** */',
    ''].join('\n'),
};
