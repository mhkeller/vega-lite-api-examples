/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/test_subobject_nested.vl.js';

const name = 'test_subobject_nested';

const spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

describe(`${name}.vg.js`, () => {
  it(`should equal spec`, () => {
    const actual = fn();
    assert.deepStrictEqual(actual, spec);
  });
});
