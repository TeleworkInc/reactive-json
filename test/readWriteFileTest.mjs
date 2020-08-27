/**
 * @license MIT
 */
/**
 * @fileoverview
 * Test ReactiveJSON file read/write functionality.
 */
import 'chai/register-expect.js';
import { ReactiveJSON } from '../dist/node.mjs';

const reactiveJson = new ReactiveJSON({
  file: './test.json',
});

describe('mutate() to behave as expected', () => {
  it('should change object on mutate', () => {
    reactiveJson.mutate((obj) => obj.test = 4242);
    expect(reactiveJson.test, 4242);
  });

  it('should change object on mutate', () => {
    reactiveJson.mutate((obj) => obj.test = 4242);
    expect(reactiveJson.test, 4242);
  });
});
