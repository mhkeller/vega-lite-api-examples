/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/bar_aggregate.vl.js';

const name = 'bar_aggregate';

const spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

describe(`${name}.vg.js`, () => {
  it(`should equal spec`, () => {
    const actual = fn();
    console.log(actual);
    assert.deepStrictEqual(actual, spec);
  });
});
