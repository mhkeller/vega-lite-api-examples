/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/stacked_area.vl.js';

function * iter(obj) {
	for (let [key, value] of Object.entries(obj)) {
			if (Object(value) !== value) yield [obj, key, value];
			else yield * iter(value);
	}
}

const name = 'stacked_area';

const spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

// Changes mark fields that are nested in any objects from a string to an object, which is what vega-lite-api creates
for (let [obj] of iter(spec)) {
	if (typeof obj.mark === "string") {
		obj.mark = { type: obj.mark } 
	}
}

describe(`${name}.vg.js`, () => {
	it(`should match spec`, () => {
		const actual = fn();
		assert.deepStrictEqual(actual, spec);
	});
});
