/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/circle_binned_maxbins_20.vl.js';

const name = 'circle_binned_maxbins_20';

const spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

describe(`${name}.vg.js`, () => {
  it(`should equal spec`, () => {
    const actual = fn();
    assert.deepStrictEqual(actual, spec);
  });
});
