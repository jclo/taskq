// ESLint declarations
/* global define */
/* eslint strict: ["error", "function"] */
(function(root, factory) {
  'use strict';

  /* istanbul ignore next */
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define([''], factory);
  } else if (typeof exports === 'object') {
    // Node. Does not work with strict CommonJS, but
    // only CommonJS-like environments that support module.exports,
    // like Node.
    /* eslint-disable-next-line no-param-reassign */
    module.exports = factory(root);
    // This is a hack to attach the lib to the browser root when this lib is
    // included inside another lib and the whole is browserifyied:
    /* eslint-disable-next-line no-param-reassign */
    if (root.TaskQ === null) root.TaskQ = factory(root);
  } else {
    // Browser globals.
    /* eslint-disable-next-line no-param-reassign */
    root.TaskQ = factory(root);
  }
}(this, (root) => {
  'use strict';

  // This is the list of the constants that are defined at the global level of
  // this module and are accessible to all. So, they are considered as reserved
  // words for this library.
  /* eslint-disable one-var, semi-style */
  let TaskQ
    ;
  /* eslint-enable one-var, semi-style */

  /* ***************************************************************************
   *
   * Tree is an object that links all the internal IIFE modules.
   *
   * ************************************************************************ */
  /* eslint-disable-next-line */
  let $__TREE = {"src":{"taskq":{},"private":{"taskq":{}}}};
  /* eslint-disable-next-line */
  $__TREE.extend=function(o,m){var k=Object.keys(m);for(var i=0;i<k.length;i++){o[k[i]]=m[k[i]]}};

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
   *  . TaskQ                  creates and returns the TaskQ object,
   *
   *
   * Public Static Methods:
   *  . noConflict                  returns a reference to this TaskQ object,
   *
   *
   * Public Methods:
   *  . getString                   returns a string,
   *  . getArray                    returns an array,
   *
   *
   *
   * @namespace    TaskQ
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE START


    // -- Local modules
    const TQ = $__TREE.src.private.taskq;


    // -- Local constants
    // Saves the previous value of the library variable, so that it can be
    // restored later on, if noConflict is used.
    const previousTaskQ = root.TaskQ
        ;


    // -- Local variables
    let methods
      ;


    // -- Public ---------------------------------------------------------------

    /**
     * Returns the TaskQ object.
     * (Prototypal Instantiation Pattern)
     *
     * @constructor (arg1)
     * @public
     * @param {}                -,
     * @returns {Object}        returns the TaskQ object,
     * @since 0.0.0
     */
    TaskQ = function() {
      const obj = Object.create(methods);
      obj._dQ = {};
      return obj;
    };

    // Attaches a constant to TaskQ that provides the version of the lib.
    TaskQ.VERSION = '0.0.3';


    // -- Public Static Methods ------------------------------------------------

    /**
     * Returns a reference to this TaskQ object.
     *
     * Nota:
     * Running TaskQ in noConflic mode, returns the TaskQ variable to
     * its previous owner.
     *
     * @method ()
     * @public
     * @param {}              -,
     * @returns {String}      returns the TaskQ object,
     * @since 0.0.0
     */
    /* istanbul ignore next */
    TaskQ.noConflict = function() {
      /* eslint-disable-next-line no-param-reassign */
      root.TaskQ = previousTaskQ;
      return this;
    };


    // -- Public Methods -------------------------------------------------------

    methods = {

      /**
       * Adds the least priority task to the task queue,.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}        the event name,
       * @param {Function}      the event handler,
       * @returns {Object}      returns this,
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
       * @param {String}        the event name,
       * @param {Function}      the event handler,
       * @returns {Object}      returns this,
       * @since 0.0.0
       */
      popQ(event, listener) {
        TQ.popQ(this._dQ, event, listener);
        return this;
      },
    };


    // -- Export
    // none (TaskQ is attached to the global window)

    // IIFE END
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
   *  . _fireQ                      fires the least recent task in the queue,
   *  . _fireQL                     fires the most recent task in the queue,
   *
   *
   * Public Static Methods:
   *  . _pushQ                      adds the least priority task to the task queue,
   *  . _popQ                       adds the most priority task to the tasks queue,
   *
   *
   *
   * @namespace    TaskQ.src.private.taskq
   * @dependencies none
   * @exports      -
   * @author       -
   * @since        0.0.0
   * @version      -
   * ************************************************************************ */
  /* - */
  /* eslint-disable one-var, semi-style, no-underscore-dangle */

  (function() {
    // IIFE START


    // -- Local modules


    // -- Local constants


    // -- Local variables


    // -- Private Functions ----------------------------------------------------

    /**
     * Returns the schema to the task queue.
     *
     * @function ()
     * @private
     * @param {}                -,
     * @returns {Object}        the task queue schema,
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
     * @param {Object}          the task queue,
     * @param {Function}        the event handler,
     * @returns {}              -,
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
     * @param {Object}          the task queue,
     * @param {String}          the event name,
     * @param {Object}          the handler scope,
     * @returns {}              -,
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
     * @param {Object}          the task queue,
     * @param {String}          the event name,
     * @param {Object}          the handler scope,
     * @returns {}              -,
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

    const TQ = {

      /**
       * Adds the least priority task to a task queue.
       *
       * @method (arg1, arg2)
       * @public
       * @param {String}        the event name,
       * @param {Function}      the event handler,
       * @returns {}            -,
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
       * @param {String}        the event name,
       * @param {Function}      the event handler,
       * @returns {}            -,
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


    // -- Export
    $__TREE.extend($__TREE.src.private.taskq, TQ);

    // IIFE END
  }());
  /* eslint-enable one-var, semi-style, no-underscore-dangle */

  // Returns the library name:
  return TaskQ;
}));
