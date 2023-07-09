/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/area_overlay_with_y2.vl.js';

const name = 'area_overlay_with_y2';

const spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

// Change this from a string to an object, which is what vega-lite-api creates
if (typeof spec.mark === 'string') {
	spec.mark = { type: spec.mark };
}

describe(`${name}.vg.js`, () => {
	it(`should match spec`, () => {
		const actual = fn();
		assert.deepStrictEqual(actual, spec);
	});
});
