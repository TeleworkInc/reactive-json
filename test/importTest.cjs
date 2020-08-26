/**
 * @license MIT
 *
 * @fileoverview
 * Test CJS imports for this project.
 */

require('chai/register-expect');

global.SHELL_OPTIONS = {
  stdio: 'ignore',
};

describe('CJS require()', () => {
  it('should import this npm package', () => {
    expect(require('..').sayHello).to.be.a('function');
  });

  it('should import the uncompiled module [dev/node.cjs]', () => {
    expect(require('../dev/node.cjs').sayHello).to.be.a('function');
  });

  it('should import the compiled module [dist/node.cjs]', () => {
    expect(require('../dist/node.cjs').sayHello).to.be.a('function');
  });
});
