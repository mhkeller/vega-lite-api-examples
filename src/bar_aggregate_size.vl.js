import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markBar()
		.description(
			'A bar chart showing the US population distribution of age groups in 2000.'
		)
		.data('data/population.json')
		.transform({
			filter: 'datum.year == 2000'
		})
		.width({ step: 17 })
		.encode(
			vl.x().fieldO('age'),
			vl
				.y()
				.field('people')
				.aggregate('sum')
				.title('population'),
			vl.size({ value: 10 })
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart showing the US population distribution of age groups in 2000.",
  "data": { "url": "data/population.json"},
  "transform": [{
    "filter": "datum.year == 2000"
  }],
  "width": {"step": 17},
  "mark": "bar",
  "encoding": {
    "y": {
      "aggregate": "sum", "field": "people",
      "title": "population"
    },
    "x": {
      "field": "age", "type": "ordinal"
    },
    "size": {"value": 10}
  }
}
*/
