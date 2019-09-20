/* ***************************************************************************
 *
 * A library that processes job tasks sequentially.
 *
 * prototypal.js is built upon the Prototypal Instantiation pattern. It
 * returns an object by calling its constructor. It doesn't use the new
 * keyword.
 *
 * Private Functions:
 *  . none,
 *
 *
 * Constructor:
 *  . TaskQ                      creates and returns the TaskQ object,
 *
 *
 * Public Static Methods:
 *  . noConflict                  returns a reference to this TaskQ object,
 *
 *
 * Public Methods:
 *  . _pushQ                      adds the least priority task to the task queue,
 *  . _popQ                       adds the most priority task to the tasks queue,
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
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

(function() {
  // IIFE

  // -- Module path


  // -- Local modules


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
   * @param {}              -,
   * @returns {Object}      returns the TaskQ object,
   * @since 0.0.0
   */
  TaskQ = function() {
    const obj = Object.create(methods);
    obj._dQ = {};
    return obj;
  };

  // Attaches a constant to ESLib that provides the version of the lib.
  TaskQ.VERSION = '{{lib:version}}';


  // -- Public Static Methods ------------------------------------------------

  /**
   * Returns a reference to this TaskQ object.
   *
   * Nota:
   * Running TaskQ in noConflic mode, returns the TaskQ variable to its
   _ previous owner.
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
}());
/* eslint-enable one-var, semi-style, no-underscore-dangle */
