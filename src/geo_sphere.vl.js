import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markGeoshape({ fill: 'aliceblue' }).data({ sphere: true }),
			vl.markGeoshape({ stroke: 'black', strokeWidth: 0.5 }).data({ graticule: true })
		)
		.width(200)
		.height(200)
		.project(vl.projection('orthographic').scale(100).translate([100, 100]))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 200,
  "height": 200,
  "projection": {
    "type": "orthographic",
    "scale": 100,
    "translate": [
      100,
      100
    ]
  },
  "layer": [
    {
      "data": {
        "sphere": true
      },
      "mark": {
        "type": "geoshape",
        "fill": "aliceblue"
      }
    },
    {
      "data": {
        "graticule": true
      },
      "mark": {
        "type": "geoshape",
        "stroke": "black",
        "strokeWidth": 0.5
      }
    }
  ]
}
*/
