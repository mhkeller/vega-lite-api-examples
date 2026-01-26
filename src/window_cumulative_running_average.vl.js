import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markCircle().encode(
				vl.x().timeUnit('year').field('Year'),
				vl.y().fieldQ('Miles_per_Gallon')
			),
			vl.markLine({ color: 'red' }).encode(
				vl.x().timeUnit('year').field('Year'),
				vl.y().fieldQ('Average_MPG').title('Miles Per Gallon')
			)
		)
		.description(
			'A line graph showing how the overall average Miles Per Gallon for how the MPG has changed over the years. The red line shows the average, and is layered on top of all the raw data.'
		)
		.data('data/cars.json')
		.transform(
			{ filter: 'datum.Miles_per_Gallon !== null' },
			{ timeUnit: 'year', field: 'Year', as: 'year' },
			{
				window: [
					{ op: 'mean', field: 'Miles_per_Gallon', as: 'Average_MPG' }
				],
				sort: [{ field: 'year', order: 'ascending' }],
				ignorePeers: false,
				frame: [null, 0]
			}
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A line graph showing how the overall average Miles Per Gallon for how the MPG has changed over the years. The red line shows the average, and is layered on top of all the raw data.",
  "data": {"url": "data/cars.json"},
  "transform": [
    {"filter": "datum.Miles_per_Gallon !== null"},
    {"timeUnit": "year", "field": "Year", "as": "year"},
    {
      "window": [{
        "op": "mean",
        "field": "Miles_per_Gallon",
        "as": "Average_MPG"
      }],
      "sort": [{"field": "year", "order": "ascending"}],
      "ignorePeers": false,
      "frame": [null, 0]
    }
  ],
  "layer": [
    {
      "mark": "circle",
      "encoding": {
        "x": {"timeUnit": "year", "field": "Year"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
      }
    },
    {
      "mark": {"type":"line", "color": "red"},
      "encoding": {
        "x": {"timeUnit": "year", "field": "Year"},
        "y": {
          "field": "Average_MPG",
          "type": "quantitative",
          "title": "Miles Per Gallon"
        }
      }
    }
  ]
}
*/
