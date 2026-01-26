import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markText()
		.data('data/cars.json')
		.transform({ calculate: 'datum.Origin[0]', as: 'OriginInitial' })
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Miles_per_Gallon'),
			vl.color().fieldN('Origin'),
			vl.text().fieldN('OriginInitial')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "transform": [{
    "calculate": "datum.Origin[0]",
    "as": "OriginInitial"
  }],
  "mark": "text",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {"field": "Origin", "type": "nominal"},
    "text": {"field": "OriginInitial", "type": "nominal"}
  }
}
*/
