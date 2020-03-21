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
/* global */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

// IIFE_START


// -- Local Modules


// -- Local Constants


// -- Local Variables


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
export default TQ;

// IIFE_END
/* eslint-enable one-var, semi-style, no-underscore-dangle */
