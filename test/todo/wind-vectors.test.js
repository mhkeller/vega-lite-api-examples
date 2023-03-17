/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/wind-vectors.vg.js';

const name = 'wind-vectors';

const spec = JSON.parse(readFileSync(`./specs/${name}.vg.json`, 'utf-8'));

describe(`${name}.vg.js`, () => {
  it(`should equal spec`, () => {
    const actual = fn();
    assert.deepStrictEqual(actual, spec);
  });
});
