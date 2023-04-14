/* globals describe it */
import * as assert from 'assert';
import { readFileSync } from 'fs';

import fn from '../src/arc_color_mappings.vl.js';

const name = 'arc_color_mappings';

const spec = JSON.parse(readFileSync(`./specs/${name}.vl.json`, 'utf-8'));

describe(`${name}.vg.js`, () => {
	it(`should equal spec`, () => {
		const actual = fn();
		assert.deepStrictEqual(actual, spec);
	});
});
