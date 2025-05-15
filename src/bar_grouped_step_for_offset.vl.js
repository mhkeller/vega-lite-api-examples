import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const bar = vl.markBar().toString();
	console.log('MARKBAR', bar);
	return vl
		.markBar()
		.width({ step: 24 })
		.data({
			values: [
				{ category: 'A', group: 'x', value: 0.1 },
				{ category: 'A', group: 'y', value: 0.6 },
				{ category: 'A', group: 'z', value: 0.9 },
				{ category: 'B', group: 'x', value: 0.7 },
				{ category: 'B', group: 'y', value: 0.2 },
				{ category: 'B', group: 'z', value: 1.1 },
				{ category: 'C', group: 'x', value: 0.6 },
				{ category: 'C', group: 'y', value: 0.1 },
				{ category: 'C', group: 'z', value: 0.2 }
			]
		})
		.encode(
			vl.x().field('category'),
			vl
				.y()
				.fieldQ('value')
				.axis({ title: 'population', grid: false }),
			vl.xOffset().field('group'),
			vl.color().field('group')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {category:"A", group: "x", value:0.1},
      {category:"A", group: "y", value:0.6},
      {category:"A", group: "z", value:0.9},
      {category:"B", group: "x", value:0.7},
      {category:"B", group: "y", value:0.2},
      {category:"B", group: "z", value:1.1},
      {category:"C", group: "x", value:0.6},
      {category:"C", group: "y", value:0.1},
      {category:"C", group: "z", value:0.2}
    ]
  },
  "width": {"step": 24},
  "mark": "bar",
  "encoding": {
    "x": {"field": category},
    "y": {
      "field": value, "type": "quantitative",
      "axis": {"title": "population", "grid": false}
    },
    "xOffset": {"field": group},
    "color": {"field": group}
  }
}
*/
