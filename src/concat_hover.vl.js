import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.hconcat(
			vl
				.markPoint()
				.params({ name: 'hover', select: { type: 'point', on: 'mouseover' } })
				.encode(
					vl.x().fieldQ('Horsepower'),
					vl.y().fieldQ('Miles_per_Gallon'),
					vl.color().value('grey').condition({ param: 'hover', empty: false, field: 'Cylinders', type: 'ordinal' })
				),
			vl
				.markPoint()
				.params({ name: 'hover', select: { type: 'point', on: 'mouseover' } })
				.encode(
					vl.x().fieldQ('Horsepower'),
					vl.y().fieldQ('Acceleration'),
					vl.color().value('grey').condition({ param: 'hover', empty: false, field: 'Cylinders', type: 'ordinal' })
				)
		)
		.description('Drag out a rectangular brush to highlight points.')
		.data('data/cars.json')
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drag out a rectangular brush to highlight points.",
  "data": {"url": "data/cars.json"},
  "hconcat": [{
    "params": [{
      "name": "hover",
      "select": {"type": "point", "on": "mouseover"}
    }],
    "mark": "point",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
      "color": {
        "condition": {
          "param": "hover", "empty": false,
          "field": "Cylinders", "type": "ordinal"
        },
        "value": "grey"
      }
    }
  },{
    "params": [{
      "name": "hover",
      "select": {"type": "point", "on": "mouseover"}
    }],
    "mark": "point",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Acceleration", "type": "quantitative"},
      "color": {
        "condition": {
          "param": "hover", "empty": false,
          "field": "Cylinders", "type": "ordinal"
        },
        "value": "grey"
      }
    }

  }]
}
*/
