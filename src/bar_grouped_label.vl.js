import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.data([
			{ category: 'A', group: 'x', value: 0.1 },
			{ category: 'A', group: 'y', value: 0.6 },
			{ category: 'A', group: 'z', value: 0.9 },
			{ category: 'B', group: 'x', value: 0.7 },
			{ category: 'B', group: 'y', value: 0.2 },
			{ category: 'B', group: 'z', value: 1.1 },
			{ category: 'C', group: 'x', value: 0.6 },
			{ category: 'C', group: 'y', value: 0.1 },
			{ category: 'C', group: 'z', value: 0.2 }
		])
		.transform([{ calculate: 'datum.value/2', as: 'half' }])
		.encode({
			x: { field: 'category' },
			xOffset: { field: 'group' },
			y: { field: 'value', type: 'quantitative' }
		})
		.layer(
			vl.mark({ type: 'bar' }).encode({
				color: { field: 'group' }
			}),
			vl
				.mark({ type: 'text', color: 'black', dy: -8 })
				.encode({
					text: { field: 'value', type: 'quantitative' }
				})
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"category":"A", "group": "x", "value":0.1},
      {"category":"A", "group": "y", "value":0.6},
      {"category":"A", "group": "z", "value":0.9},
      {"category":"B", "group": "x", "value":0.7},
      {"category":"B", "group": "y", "value":0.2},
      {"category":"B", "group": "z", "value":1.1},
      {"category":"C", "group": "x", "value":0.6},
      {"category":"C", "group": "y", "value":0.1},
      {"category":"C", "group": "z", "value":0.2}
    ]
  },
  "transform": [{
    "calculate": "datum.value/2",
    "as": "half"
  }],
  "encoding": {
    "x": {"field": "category"},
    "xOffset": {"field": "group"},
    "y": {"field": "value", "type": "quantitative"}
  },
  "layer": [{
    "mark": "bar",
    "encoding": {
      "color": {"field": "group"}
    }
  }, {
    "mark": {"type": "text", "color": "black", "dy": -8},
    "encoding": {
      "text": {"field": "value", "type": "quantitative"}
    }
  }]
}
*/
