/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/arc_pie_normalize_tooltip.vl.js';

const name = 'arc_pie_normalize_tooltip';

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
