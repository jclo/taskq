/*! ****************************************************************************
 * TaskQ v1.0.2
 *
 * A library that processes tasks sequentially.
 * (you can download it from npm or github repositories)
 * Copyright (c) 2024 Mobilabs <contact@mobilabs.fr> (http://www.mobilabs.fr).
 * Released under the MIT license. You may obtain a copy of the License
 * at: http://www.opensource.org/licenses/mit-license.php).
 * Built from ES6lib v2.2.0.
 * ************************************************************************** */
// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  'use strict';

  /* c8 ignore start */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.TaskQ = factory(root);
  }
  /* c8 ignore stop */
}(this, (root) => {
  'use strict';

  /** **************************************************************************
   * _head provides the list of the constants that are defined at the global
   * level of this module and are accessible to all. So, they are considered
   * as reserved words for this library.
   * ************************************************************************ */
  /* eslint-disable one-var, no-unused-vars, semi-style */

  let TaskQ
    ;

  // Tree is an internal object that links all the internal modules.
  let TQ = {};

  /* eslint-enable one-var, no-unused-vars, semi-style */

  /** **************************************************************************
   *
   * A library that processes job tasks sequentially.
   *
   * taskq.js is built upon the Prototypal Instantiation pattern. It
   * returns an object by calling its constructor. It doesn't use the new
   * keyword.
   *
   * Private Functions:
   *  . none,
   *
   *
   * Constructor:
   *  . TaskQ                       creates and returns the TaskQ object,
   *
   *
   * Private Static Methods:
   *  . _setTestMode                returns internal objects for testing purpose,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this TaskQ object,
   *
   *
   * Public Methods:
   *  . whoami                      returns the library name and version,
   *  . pushQ                       adds the least priority task to the task queue,
   *  . popQ                        adds the most priority task to the tasks queue,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousTaskQ = root.TaskQ
        ;


    // -- Local Variables
    let methods
      ;


    // -- Public ---------------------------------------------------------------

    /**
     * Returns the TaskQ object.
     * (Prototypal Instantiation Pattern)
     *
     * @constructor ()
     * @public
     * @param {}              -,
     * @returns {Object}      returns the TaskQ object,
     * @since 0.0.0
     */
    TaskQ = function() {
      const obj = Object.create(methods);
      obj._library = {
        name: 'TaskQ',
        version: '1.0.2',
      };
      obj._dQ = {};
      return obj;
    };

    // Attaches constants to TaskQ that provide name and version of the lib.
    TaskQ.NAME = 'TaskQ';
    TaskQ.VERSION = '1.0.2';


    // -- Private Static Methods -----------------------------------------------

    /**
     * Returns the internal objects for testing purpose.
     * (must not be deleted)
     *
     * @method ()
     * @private
     * @param {}              -,
     * @returns {Object}      returns a list of internal objects,
     * @since 0.0.0
     */
    TaskQ._setTestMode = function() {
      return [];
    };


    // -- Public Static Methods ------------------------------------------------

    /**
     * Returns a reference to this TaskQ object.
     * (must not be deleted)
     *
     * Nota:
     * Running TaskQ in noConflict mode, returns the TaskQ variable to its
     * _ previous owner.
     *
     * @method ()
     * @public
     * @param {}              -,
     * @returns {Object}      returns the TaskQ object,
     * @since 0.0.0
     */
    TaskQ.noConflict = function() {
      /* eslint-disable-next-line no-param-reassign */
      root.TaskQ = previousTaskQ;
      return this;
    };


    // -- Public Methods -------------------------------------------------------

    methods = {

      /**
       * Returns the library name and version.
       * (must not be deleted)
       *
       * @method ()
       * @public
       * @param {}            -,
       * @returns {Object}    returns the library name and version,
       * @since 0.0.0
       */
      whoami() {
        return this._library;
      },

      /**
       * Adds the least priority task to the task queue.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event name,
       * @param {Function}    the event handler,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      pushQ(event, listener) {
        TQ.pushQ(this._dQ, event, listener);
        return this;
      },

      /**
       * Adds the most priority task to the tasks queue.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event name,
       * @param {Function}    the event handler,
       * @returns {Object}    returns this,
       * @since 0.0.0
       */
      popQ(event, listener) {
        TQ.popQ(this._dQ, event, listener);
        return this;
      },
    };

    // END OF IIFE
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

  /** **************************************************************************
   *
   * Implements the TaskQ methods.
   *
   * taskq.js is just a literal object that contains a set of functions. It
   * can't be intantiated.
   *
   * Private Functions:
   *  . _schema                     returns the schema to the task queue,
   *  . _addEvent                   adds a non registered event to the task queue,
   *  . _fireQ                      fires the least recent tasks in the tasq queue,
   *  . _fireQL                     fires the most recent task in the task queue,
   *
   *
   * Public Static Methods:
   *  . pushQ                       adds the least priority task to a task queue,
   *  . popQ                        adds the most priority task to the tasks queue,
   *
   *
   *
   * @namespace    -
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable semi-style, no-underscore-dangle */

  (function() {
    // START OF IIFE


    // -- Module Path


    // -- Local Modules


    // -- Local Constants


    // -- Local Variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Returns the schema to the task queue.
     *
     * @function ()
     * @private
     * @param {}              -,
     * @returns {Object}      the task queue schema,
     * @since 0.0.0
     */
    function _schema() {
      return {
        firing: false,
        listeners: [],
      };
    }

    /**
     * Adds a non registered event to the task queue.
     *
     * @function (arg1, arg2)
     * @private
     * @param {Object}        the task queue,
     * @param {Function}      the event handler,
     * @returns {}            -,
     * @since 0.0.0
     */
    /* eslint-disable no-param-reassign */
    function _addEvent(dQ, event) {
      if (typeof event === 'string' && !Object.prototype.hasOwnProperty.call(dQ, event)) {
        dQ[event] = _schema();
      }
    }
    /* eslint-enable no-param-reassign */

    /**
     * Fires the least recent tasks in the tasq queue.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}        the task queue,
     * @param {String}        the event name,
     * @param {Object}        the handler scope,
     * @returns {}            -,
     * @since 0.0.0
     */
    /* eslint-disable no-param-reassign, prefer-rest-params */
    function _fireQ(dQ, event, scope) {
      const funcs = dQ[event].listeners;

      dQ[event].firing = true;
      (function next() {
        if (funcs.length > 0) {
          funcs
            .shift()
            .apply(scope || {}, [next].concat(Array.prototype.slice.call(arguments, 0)));
        } else {
          dQ[event].firing = false;
        }
      }());
    }
    /* eslint-enable no-param-reassign, prefer-rest-params */

    /**
     * Fires the most recent task in the task queue.
     *
     * @function (arg1, arg2, arg3)
     * @private
     * @param {Object}        the task queue,
     * @param {String}        the event name,
     * @param {Object}        the handler scope,
     * @returns {}            -,
     * @since 0.0.0
     */
    /* eslint-disable no-param-reassign, prefer-rest-params */
    function _fireQL(dQ, event, scope) {
      const funcs = dQ[event].listeners;

      dQ[event].firing = true;
      (function next() {
        if (funcs.length > 0) {
          while (funcs.length > 1) { funcs.shift(); }
          funcs
            .shift()
            /* eslint-disable-next-line prefer-rest-params */
            .apply(scope || {}, [next].concat(Array.prototype.slice.call(arguments, 0)))
          ;
        } else {
          dQ[event].firing = false;
        }
      }());
    }
    /* eslint-enable no-param-reassign, prefer-rest-params */


    // -- Public Static Methods ------------------------------------------------

    TQ = {

      /**
       * Adds the least priority task to a task queue.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event name,
       * @param {Function}    the event handler,
       * @returns {}          -,
       * @since 0.0.0
       */
      pushQ(dQ, event, listener) {
        _addEvent(dQ, event);

        if (typeof event === 'string' && typeof listener === 'function') {
          dQ[event].listeners.push(listener);

          // Fire the event if _fireQ is not running:
          if (!dQ[event].firing) {
            _fireQ(dQ, event);
          }
        }
      },

      /**
       * Adds the most priority task to the tasks queue.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}      the event name,
       * @param {Function}    the event handler,
       * @returns {}          -,
       * @since 0.0.0
       */
      popQ(dQ, event, listener) {
        _addEvent(dQ, event);

        if (typeof event === 'string' && typeof listener === 'function') {
          dQ[event].listeners.push(listener);

          // Fire the event if _fireQ is not running:
          if (!dQ[event].firing) {
            _fireQL(dQ, event);
          }
        }
      },
    };


    // END OF IIFE
  }());
  /* eslint-enable semi-style, no-underscore-dangle */

  // Returns the library name:
  return TaskQ;
}));
