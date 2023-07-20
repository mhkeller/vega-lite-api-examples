/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/line_step.vl.js';

function convertMarkValues (obj) {
	for (const key in obj) {
		if (typeof obj[key] === 'object') {
			convertMarkValues(obj[key]);
		}
		if (key === 'mark' && typeof obj[key] === 'string') {
			obj.mark = { type: obj[key] };
		}
	}

	return obj;
}

const name = 'line_step';

let spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

// Changes mark fields that are nested in any objects from a string to an object, which is what vega-lite-api creates
spec = convertMarkValues(spec);

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
