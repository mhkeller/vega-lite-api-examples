import { mkdirSync, readFileSync, writeFileSync } from 'fs';
import { readdirFilterSync } from 'indian-ocean';
import notify from '@mhkeller/notify';
import { rimrafSync } from 'rimraf';
import { commas } from '@mhkeller/utils';

notify({ m: 'Making tests...', d: ['blue', 'bold', 'underline'] });
notify({ m: 'Emptying test directory...', d: 'group' });
rimrafSync('./test');
mkdirSync('./test');

const charts = readdirFilterSync('./src/', {
	include: 'js',
	fullPath: true
});

const templateReadme = readFileSync('./templates/template-README.md', 'utf-8');
const templateTest = readFileSync('./templates/template-test.js', 'utf-8');

// Create a test file for each src script that exports json
let testCount = 0;
let exampleList = '\n';
for (const chartPath of charts) {
	const result = await import(chartPath);
	const slug = chartPath.split('/').pop().replace('.vl.js', '');
	const spec = result?.default?.();
	if (spec) {
		testCount += 1;
		const contentsTest = templateTest.replace(/SLUG/g, slug);
		writeFileSync(`./test/${slug}.test.js`, contentsTest, 'utf-8');
		notify({ m: 'Wrote test...', v: slug, d: ['green', 'bold'] });
	}

	exampleList += `* ${spec ? '&nbsp; ✅' : '- [ ]'} [${slug}](${chartPath})\n`;
}

let readme = templateReadme
	.replace('TK\\_TESTS', 'TK_TESTS')
	.replace('TK\\_TOTAL', 'TK_TOTAL')
	.replace(/TK_TOTAL/gi, commas(charts.length))
	.replace(/TK_TESTS/gi, commas(testCount))
	.replace(/(\[Example list \().+?(\)\])/g, '$1$2')
	.replace(' ()]', ']');

// write a replacement regex that converts "[Example list (Completed: 19 / 703)]" to "[Example list]"

readme += exampleList;

writeFileSync('./README.md', readme, 'utf-8');
