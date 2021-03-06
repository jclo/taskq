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
/* global TQ, root */
/* eslint-disable one-var, semi-style, no-underscore-dangle */

'use strict';

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
      name: '{{lib:name}}',
      version: '{{lib:version}}',
    };
    obj._dQ = {};
    return obj;
  };

  // Attaches constants to TaskQ that provide name and version of the lib.
  TaskQ.NAME = '{{lib:name}}';
  TaskQ.VERSION = '{{lib:version}}';


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
