import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markBar()
		.width({ step: 50, for: 'position' })
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
		.encode(
			vl.x().field('category').scale({ padding: 0.2 }),
			vl.y().fieldQ('value'),
			vl
				.xOffset()
				.field('group')
				.scale({ paddingInner: 0.2 }),
			vl.color().field('group')
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
  "width": {"step": 50, "for": "position"},
  "mark": "bar",
  "encoding": {
    "x": {"field": "category", "scale": {"padding": 0.2}},
    "y": {"field": "value", "type": "quantitative"},
    "xOffset": {"field": "group", "scale": {"paddingInner": 0.2}},
    "color": {"field": "group"}
  }
}
*/
