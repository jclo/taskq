// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0,
  dot-notation: 0 */


// -- Node modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;

// -- Local modules


// -- Local constants


// -- Local variables


// -- Main
module.exports = function(TaskQ) {
  // { _dQ: { aaa: { firing: true, listeners: [] } } }

  describe('Test TaskQ Methods:', () => {
    describe('Test TaskQ().pushQ():', () => {
      const taskQ = TaskQ();

      it('Expects TaskQ().pushQ() to return an object.', () => {
        expect(taskQ.pushQ()).to.be.an('object');
      });

      it('Expects TaskQ().pushQ("aaa", fn) to add the event "aaa".', () => {
        taskQ.pushQ('aaa', () => {});
        const events = Object.keys(taskQ._dQ);
        expect(events).to.be.an('array').that.has.lengthOf(1);
        expect(events[0]).to.be.a('string').that.is.equal('aaa');
      });
    });


    describe('Test TaskQ().popQ():', () => {
      const taskQ = TaskQ();

      it('Expects TaskQ().popQ() to return an object.', () => {
        expect(taskQ.popQ()).to.be.an('object');
      });

      it('Expects TaskQ().popQ("aaa", fn) to add the event "aaa".', () => {
        taskQ.popQ('aaa', () => {});
        taskQ.popQ('aaa', () => {});
        const events = Object.keys(taskQ._dQ);
        expect(events).to.be.an('array').that.has.lengthOf(1);
        expect(events[0]).to.be.a('string').that.is.equal('aaa');
      });
    });
  });
};
