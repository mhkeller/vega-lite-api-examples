import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { readdirFilterSync } from 'indian-ocean';
import notify from '@mhkeller/notify';
import { rimrafSync } from 'rimraf';

notify({ m: 'Making tests...', d: ['blue', 'bold', 'underline'] });
notify({ m: 'Emptying test directory...', d: 'group' });
rimrafSync('./test');
mkdirSync('./test');

const charts = readdirFilterSync('./src/', {
	include: 'js',
	fullPath: true
});

const templateTest = readFileSync('./templates/template-test.txt', 'utf-8');

// Create a test file for each src script that exports json
for (const chartPath of charts) {
	const result = await import(chartPath);
	const slug = chartPath.split('/').pop().replace('.vl.js', '');
	const spec = result?.default?.();
	if (spec) {
		const contentsTest = templateTest.replace(/SLUG/g, slug);
		writeFileSync(`./test/${slug}.test.js`, contentsTest, 'utf-8');
		notify({ m: 'Wrote test...', v: slug, d: ['green', 'bold'] });
	}
}
