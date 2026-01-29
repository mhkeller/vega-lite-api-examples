import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markPoint()
		.description('Drag out a rectangular brush to highlight points.')
		.data('data/cars.json')
		.params({ name: 'brush', select: 'interval', value: { x: [55, 160], y: [13, 37] } })
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Miles_per_Gallon'),
			vl.color().value('grey').condition({ param: 'brush', field: 'Cylinders', type: 'ordinal' })
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drag out a rectangular brush to highlight points.",
  "data": {"url": "data/cars.json"},
  "params": [{
    "name": "brush",
    "select": "interval",
    "value": {"x": [55, 160], "y": [13, 37]}
  }],
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {
      "condition": {"param": "brush", "field": "Cylinders", "type": "ordinal"},
      "value": "grey"
    }
  }
}
*/
