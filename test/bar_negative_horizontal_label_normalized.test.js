/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/bar_negative_horizontal_label_normalized.vl.js';

const name = 'bar_negative_horizontal_label_normalized';

const spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

// Change this from a string to an object, which is what vega-lite-api creates
if (typeof spec.mark === 'string') {
	spec.mark = { type: spec.mark };
}

// Change spec.mark from a string to an object, which is what vega-lite-api creates
if (typeof spec.spec === 'object' && typeof spec.spec?.mark === 'string') {
	spec.spec.mark = { type: spec.spec.mark };
}

// Change layer[i].mark from a string to an object, which is what vega-lite-api creates
if (typeof spec.layer === 'object' && spec.layer.length) {
	spec.layer.forEach(l => {
		if (typeof l.mark === 'string') {
			l.mark = { type: l.mark };
		}
	});
}

describe(`${name}.vg.js`, () => {
	it(`should match spec`, () => {
		const actual = fn();
		assert.deepStrictEqual(actual, spec);
	});
});
