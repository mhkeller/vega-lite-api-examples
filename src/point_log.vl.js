import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markPoint()
		.data([
			{ x: 0, y: 1 },
			{ x: 1, y: 10 },
			{ x: 2, y: 100 },
			{ x: 3, y: 1000 },
			{ x: 4, y: 10000 },
			{ x: 5, y: 100000 },
			{ x: 6, y: 1000000 },
			{ x: 7, y: 10000000 }
		])
		.encode(
			vl.x().fieldQ('x'),
			vl.y().field('y').scale({ type: 'log' })
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "mark": "point",
  "data": {
    "values": [
      {"x": 0, "y": 1}, {"x": 1, "y": 10},
      {"x": 2, "y": 100}, {"x": 3, "y": 1000},
      {"x": 4, "y": 10000}, {"x": 5, "y": 100000},
      {"x": 6, "y": 1000000}, {"x": 7, "y": 10000000}
    ]
  },
  "encoding": {
    "x": {"field": "x", "type": "quantitative"},
    "y": {"field": "y", "scale": {"type": "log"}}
  }
}
*/
