import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markPoint()
		.description(
			'A scatterplot showing horsepower and miles per gallons that opens a Google search for the car that you click on.'
		)
		.data('data/cars.json')
		.transform(
			vl
				.calculate(
					"'https://www.google.com/search?q=' + datum.Name"
				)
				.as('url')
		)
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Miles_per_Gallon'),
			vl.color().fieldN('Origin'),
			vl.tooltip().fieldN('Name'),
			vl.href().fieldN('url')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing horsepower and miles per gallons that opens a Google search for the car that you click on.",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "transform": [{
    "calculate": "'https://www.google.com/search?q=' + datum.Name", "as": "url"
  }],
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {"field": "Origin", "type": "nominal"},
    "tooltip": {"field": "Name", "type": "nominal"},
    "href": {"field": "url", "type": "nominal"}
  }
}
*/
