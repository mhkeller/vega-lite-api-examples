import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl
		.markBar()
		.description('A bar chart that sorts the y-values by the x-values.')
		.data('data/population.json')
		.transform({
			filter: 'datum.year == 2000'
		})
		.height({ step: 17 })
		.encode(
			vl.x().field('people').aggregate('sum').title('population'),
			vl.y().fieldO('age').sort('-x')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart that sorts the y-values by the x-values.",
  "data": {"url": "data/population.json"},
  "transform": [{"filter": "datum.year == 2000"}],
  "height": {"step": 17},
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "age",
      "type": "ordinal",
      "sort": "-x"
    },
    "x": {
      "aggregate": "sum",
      "field": "people",
      "title": "population"
    }
  }
}
*/
