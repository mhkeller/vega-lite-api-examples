import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markGeoshape({ fill: '#ccc', stroke: '#fff' })
				.data(vl.topojson('data/us-10m.json').feature('states')),
			vl.markCircle()
				.data('data/airports.csv')
				.encode(
					vl.longitude().fieldQ('longitude'),
					vl.latitude().fieldQ('latitude'),
					vl.size().value(10)
				)
		)
		.width(900)
		.height(560)
		.project(vl.projection('albersUsa').scale(3000).translate([1200, 700]))
		.config({ view: { stroke: null } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 900,
  "height": 560,
  "projection": {
    "type": "albersUsa",
    "scale": 3000,
    "translate": [
      1200,
      700
    ]
  },
  "layer": [
    {
      "data": {
        "url": "data/us-10m.json",
        "format": {
          "type": "topojson",
          "feature": "states"
        }
      },
      "mark": {
        "type": "geoshape",
        "fill": "#ccc",
        "stroke": "#fff"
      }
    },
    {
      "data": {
        "url": "data/airports.csv"
      },
      "mark": "circle",
      "encoding": {
        "longitude": {
          "field": "longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "latitude",
          "type": "quantitative"
        },
        "size": {
          "value": 10
        }
      }
    }
  ],
  "config": {
    "view": {
      "stroke": null
    }
  }
}
*/
