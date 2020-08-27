/**
 * @license MIT
 *
 * @fileoverview
 * Test named CJS imports for this project.
 */

global.SHELL_OPTIONS = {
  stdio: 'ignore',
};

require('chai/register-expect');

const devNode = require('../dev/node.cjs');
const distNode = require('../dist/node.cjs');

describe('ESM import', () => {
  it('should import this package', () => {
    expect(devNode.ReactiveJSON).to.be.a('function');
  });

  it('should import the uncompiled module [dev/node.mjs]', () => {
    expect(distNode.ReactiveJSON).to.be.a('function');
  });
});
