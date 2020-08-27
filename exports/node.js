/**
 * @license MIT
 */
/**
 * @fileoverview
 * Specify the exports for this project's Node interface.
 */

import { readFileSync, writeFileSync } from 'fs';

/**
 * Export our ReactiveJSON class.
 */
export class ReactiveJSON {
  /**
   * Create a new `ReactiveJSON` object.
   *
   * @param {{
   *  file: string,
   *  source: string
   * }} options
   */
  constructor({
    file = '',
    source = '',
  }) {
    /** @type {string} */
    this.file = file;
    /** @type {string} */
    this.source = source;

    /**
     * Read from file if non-null.
     */
    if (this.file) {
      this.source = readFileSync(this.file);
    }

    /**
     * Set parsed object.
     */
    this.object = JSON.parse(this.source);
  }

  /**
   * Mutate this object.
   *
   * @param {Function} fn
   * A function that takes `this.object` as an argument and mutates it.
   *
   * @return {ReactiveJSON} this
   */
  mutate(fn) {
    /**
     * Call mutate fn.
     */
    fn(this.object);
    return this.update();
  }

  /**
   * Update source and write back to file if non-null.
   *
   * @return {ReactiveJSON} this
   */
  update() {
    this.source = this.toString();
    if (this.file) writeFileSync(this.file, this.source);
    return this;
  }

  /**
   * Convert to string with `JSON.stringify`.
   *
   * @param {number} [spaces=2]
   * Number of spaces to use for formatting.
   *
   * @return {string}
   */
  toString(spaces = 2) {
    return JSON.stringify(this.object, null, spaces);
  }
}
