import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description:
			'A scatterplot showing horsepower and miles per gallons for various cars.',
		data: { url: 'data/cars.json' },
		layer: [
			{
				mark: { type: 'point' },
				encoding: {
					x: { field: 'Horsepower', type: 'quantitative' },
					y: { field: 'Miles_per_Gallon', type: 'quantitative', title: 'Miles per Gallon' }
				}
			},
			{
				mark: { type: 'rule' },
				encoding: { y: { aggregate: 'min', field: 'Miles_per_Gallon' } }
			},
			{
				mark: { type: 'rule' },
				encoding: { y: { aggregate: 'max', field: 'Miles_per_Gallon' } }
			},
			{
				mark: { type: 'rect' },
				encoding: {
					y: { aggregate: 'max', field: 'Miles_per_Gallon' },
					y2: { aggregate: 'min', field: 'Miles_per_Gallon' },
					opacity: { value: 0.2 }
				}
			}
		]
	};
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
  "data": {"url": "data/cars.json"},
  "layer": [{
    "mark": "point",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Miles_per_Gallon", "type": "quantitative", "title": "Miles per Gallon"}
    }
  },{
    "mark": "rule",
    "encoding": {
      "y": {"aggregate": "min", "field": "Miles_per_Gallon"}
    }
  },{
    "mark": "rule",
    "encoding": {
      "y": {"aggregate": "max", "field": "Miles_per_Gallon"}
    }
  },{
    "mark": "rect",
    "encoding": {
      "y": {"aggregate": "max", "field": "Miles_per_Gallon"},
      "y2": {"aggregate": "min", "field": "Miles_per_Gallon"},
      "opacity": {"value": 0.2}
    }
  }]
}
*/
