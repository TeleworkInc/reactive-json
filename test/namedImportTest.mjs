/**
 * @license MIT
 *
 * @fileoverview
 * Test named ESM imports for this project.
 */

global.SHELL_OPTIONS = {
  stdio: 'ignore',
};

import 'chai/register-expect.js';

import { ReactiveJSON as devNode } from '../dev/node.mjs';
import { ReactiveJSON as distNode } from '../dist/node.mjs';

describe('ESM import', () => {
  it('should import this package', () => {
    expect(devNode).to.be.a('function');
  });

  it('should import the uncompiled module [dev/node.mjs]', () => {
    expect(distNode).to.be.a('function');
  });
});
