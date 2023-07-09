/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/line_step.vl.js';

const name = 'line_step';

const spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

// Change this from a string to an object, which is what vega-lite-api creates
if (typeof spec.mark === 'string') {
	spec.mark = { type: spec.mark };
}

// Change spec.mark from a string to an object, which is what vega-lite-api creates
if (typeof spec.spec === 'object' && typeof spec.spec?.mark === 'string') {
	spec.spec.mark = { type: spec.spec.mark };
}

describe(`${name}.vg.js`, () => {
	it(`should match spec`, () => {
		const actual = fn();
		assert.deepStrictEqual(actual, spec);
	});
});
