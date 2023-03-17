import { readFileSync, writeFileSync } from 'fs';
import { readdirFilterSync } from 'indian-ocean';
import notify from 'wsk-notify';

const charts = readdirFilterSync('./specs/', {
	include: 'json'
}).map(d => d.split('.')[0]);

const templateTest = readFileSync('./template-test.txt', 'utf-8');
const templateChart = readFileSync('./template-chart.txt', 'utf-8');

charts.forEach(c => {
	const contentsTest = templateTest.replaceAll('SLUG', c);
	writeFileSync(`./test/${c}.test.js`, contentsTest, 'utf-8');
	notify({ m: 'Wrote test...', v: c, d: ['magenta'] });

	writeFileSync(`./src/${c}.vl.js`, templateChart, 'utf-8');
	notify({ m: 'Wrote chart...', v: c, d: ['blue'] });
});
