import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	const layer1 = vl
		.markArc({ innerRadius: 20, stroke: '#fff' })
		.encode(
			vl.theta().fieldQ('data').stack(true),
			vl.radius().field('data').scale({ type: 'sqrt', zero: true, rangeMin: 20 }),
			vl.color().fieldN('data').legend(null)
		);

	const layer2 = vl
		.markText({ radiusOffset: 10 })
		.encode(
			vl.theta().fieldQ('data').stack(true),
			vl.radius().field('data').scale({ type: 'sqrt', zero: true, rangeMin: 20 }),
			vl.color().fieldN('data').legend(null),
			vl.text().fieldQ('data')
		);

	return vl
		.layer(layer1, layer2)
		.description('A simple radial chart with embedded data.')
		.data({ values: [12, 23, 47, 6, 52, 19] })
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple radial chart with embedded data.",
  "data": {"values": [12, 23, 47, 6, 52, 19]},
  "layer": [
    {
      "mark": {"type": "arc", "innerRadius": 20, "stroke": "#fff"},
      "encoding": {
        "theta": {"field": "data", "type": "quantitative", "stack": true},
        "radius": {
          "field": "data",
          "scale": {"type": "sqrt", "zero": true, "rangeMin": 20}
        },
        "color": {"field": "data", "type": "nominal", "legend": null}
      }
    },
    {
      "mark": {"type": "text", "radiusOffset": 10},
      "encoding": {
        "theta": {"field": "data", "type": "quantitative", "stack": true},
        "radius": {
          "field": "data",
          "scale": {"type": "sqrt", "zero": true, "rangeMin": 20}
        },
        "color": {"field": "data", "type": "nominal", "legend": null},
        "text": {"field": "data", "type": "quantitative"}
      }
    }
  ]
}
*/
