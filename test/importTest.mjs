/**
 * @license MIT
 *
 * @fileoverview
 * Test ESM imports for this project.
 */

global.SHELL_OPTIONS = {
  stdio: 'ignore',
};

import 'chai/register-expect.js';

import * as thisPackage from '../dist/node.mjs';
import * as devNode from '../dev/node.mjs';
import * as distNode from '../dist/node.mjs';

describe('ESM import', () => {
  it('should import this package', () => {
    expect(thisPackage.sayHello).to.be.a('function');
  });

  it('should import the uncompiled module [dev/node.mjs]', () => {
    expect(devNode.sayHello).to.be.a('function');
  });

  it('should import the compiled module [dist/node.mjs]', () => {
    expect(distNode.sayHello).to.be.a('function');
  });
});
