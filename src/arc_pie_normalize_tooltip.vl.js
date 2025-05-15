import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markArc({ tooltip: true })
		.description('Pie Chart with percentage_tooltip')
		.data([
			{ category: 1, value: 4 },
			{ category: 2, value: 6 },
			{ category: 3, value: 10 },
			{ category: 4, value: 3 },
			{ category: 5, value: 7 },
			{ category: 6, value: 8 }
		])
		.encode(
			vl.theta().fieldQ('value').stack('normalize'),
			vl.color().fieldN('category')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Pie Chart with percentage_tooltip",
  "data": {
    "values": [
      {"category": 1, "value": 4},
      {"category": 2, "value": 6},
      {"category": 3, "value": 10},
      {"category": 4, "value": 3},
      {"category": 5, "value": 7},
      {"category": 6, "value": 8}
    ]
  },
  "mark": {"type": "arc", "tooltip": true},
  "encoding": {
    "theta": {"field": "value", "type": "quantitative", "stack": "normalize"},
    "color": {"field": "category", "type": "nominal"}
  }
}
*/
