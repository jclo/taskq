// ESLint declarations:
/* global describe, it */
/* eslint one-var: 0, no-unused-vars: 0, semi-style: 0, no-underscore-dangle: 0 */


// -- Vendor Modules
const should     = require('chai').should()
    , { expect } = require('chai')
    ;


// -- Local Modules


// -- Local Constants


// -- Local Variables


// -- Main
module.exports = function(TaskQ) {
  describe('Test TaskQ:', () => {
    // Test the lib:
    describe('Test TaskQ.VERSION, TaskQ.noConflict and TaskQ._setTestMode:', () => {
      it('Expects TaskQ.VERSION to return a string.', () => {
        expect(TaskQ.VERSION).to.be.a('string');
      });
      it('Expects TaskQ.noConflict to return a function.', () => {
        expect(TaskQ.noConflict).to.be.a('function');
      });
      it('Expects this function to return a function.', () => {
        expect(TaskQ.noConflict()).to.be.a('function');
      });
      it('Expects TaskQ._setTestMode to return a function.', () => {
        expect(TaskQ._setTestMode).to.be.a('function');
      });
      it('Expects this function to return an empty array.', () => {
        expect(TaskQ._setTestMode()).to.be.an('array').that.has.lengthOf(0);
      });
    });

    describe('Test TaskQ constructor and methods:', () => {
      const o = TaskQ();

      it('Expects TaskQ() to return an object.', () => {
        expect(o).to.be.an('object');
      });

      it('Expects this object to own the property "pushQ" that is a function.', () => {
        expect(o).to.have.property('pushQ').that.is.a('function');
      });

      it('Expects this object to own the property "popQ" that is a function.', () => {
        expect(o).to.have.property('popQ').that.is.a('function');
      });
    });
  });
};
