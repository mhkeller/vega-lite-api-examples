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
		.height({ step: 17 })
		.data('data/population.json')
		.transform({
			filter: 'datum.year == 2000'
		})
		.encode(
			vl.y().field('age'),
			vl
				.x()
				.field('people')
				.title('population')
				.aggregate('sum')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart showing the US population distribution of age groups in 2000.",
  "height": {"step": 17},
  "data": { "url": "data/population.json"},
  "transform": [{"filter": "datum.year == 2000"}],
  "mark": { "type": "bar" },
  "encoding": {
    "y": {"field": "age"},
    "x": {
      "aggregate": "sum", "field": "people",
      "title": "population"
    }
  }
}
*/
