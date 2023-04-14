import { existsSync, readFileSync, writeFileSync } from 'fs';
import { readdirFilterSync } from 'indian-ocean';
import notify from '@mhkeller/notify';

const chartSlugs = readdirFilterSync('./specs/', {
	include: 'json'
}).map(d => d.split('.')[0]);

const templateChart = readFileSync('./templates/template-chart.txt', 'utf-8');

chartSlugs.forEach(slug => {
	const spec = readFileSync(`./specs/${slug}.vl.json`, 'utf-8');
	const contentsChart = templateChart.replace('SPEC', spec);
	const filepath = `./src/${slug}.vl.js`;
	if (!existsSync(filepath)) {
		writeFileSync(filepath, contentsChart, 'utf-8');
		notify({ m: 'Wrote chart...', v: slug, d: ['blue'] });
	} else {
		// notify({ m: 'Exists...', v: slug, d: ['note'] });
	}
});
