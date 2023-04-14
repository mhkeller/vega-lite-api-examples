import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.
export default function chart() {
	return vl
		.markBar()
		.description('A bar chart that sorts the y-values by the x-values.')
		.data('data/population.json')
		.transform({
			filter: 'datum.year == 2000'
		})
		.encode(
			vl.x().field('people').aggregate('sum').title('population'),
			vl.y().fieldO('age').sort({ op: 'sum', field: 'people' })
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart that sorts the y-values by the x-values.",
  "data": {"url": "data/population.json"},
  "transform": [{"filter": "datum.year == 2000"}],
  "mark": "bar",
  "encoding": {
    "y": {
      "field": "age",
      "type": "ordinal",
      "sort": {"op": "sum", "field": "people"}
    },
    "x": {
      "aggregate": "sum",
      "field": "people",
      "title": "population"
    }
  }
}

*/
