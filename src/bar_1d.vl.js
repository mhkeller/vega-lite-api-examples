import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markBar()
		.data('data/population.json')
		.transform(vl.filter(`datum.year == 2000`))
		.encode(
			vl
				.x()
				.aggregate('sum')
				.field('people')
				.title('population')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": { "url": "data/population.json"},
  "transform": [{
    "filter": "datum.year == 2000"
  }],
  "mark": "bar",
  "encoding": {
    "x": {
      "aggregate": "sum", "field": "people",
      "title": "population"
    }
  }
}
*/
