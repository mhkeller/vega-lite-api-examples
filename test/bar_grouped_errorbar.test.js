/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/bar_grouped_errorbar.vl.js';

function convertMarkValues(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "object") {
        convertMarkValues(obj[key]);
    }
    if (key === "mark" && typeof obj[key] === 'string') {
      obj.mark = { type: obj[key] }
    }
  }

	return obj
}

const name = 'bar_grouped_errorbar';

let spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

// Changes mark fields that are nested in any objects from a string to an object, which is what vega-lite-api creates
spec = convertMarkValues(spec)

describe(`${name}.vg.js`, () => {
	it(`should match spec`, () => {
		const actual = fn();
		assert.deepStrictEqual(actual, spec);
	});
});
