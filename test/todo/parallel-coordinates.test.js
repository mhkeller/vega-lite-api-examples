/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/parallel-coordinates.vg.js';

const name = 'parallel-coordinates';

const spec = JSON.parse(readFileSync(`./specs/${name}.vg.json`, 'utf-8'));

describe(`${name}.vg.js`, () => {
  it(`should equal spec`, () => {
    const actual = fn();
    assert.deepStrictEqual(actual, spec);
  });
});
