import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markSquare().encode(
				vl.longitude().fieldQ('longitude'),
				vl.latitude().fieldQ('latitude'),
				vl.size().value(1),
				vl.color().value('gray')
			),
			vl.markSquare().encode(
				vl.longitude().datum(-122.335167),
				vl.latitude().fieldQ('latitude'),
				vl.size().value(1),
				vl.color().value('steelblue')
			),
			vl.markSquare().encode(
				vl.longitude().fieldQ('longitude'),
				vl.latitude().datum(47.608013),
				vl.size().value(1),
				vl.color().value('firebrick')
			)
		)
		.width(500)
		.height(300)
		.data('data/airports.csv')
		.project(vl.projection('albersUsa'))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "height": 300,
  "data": {
    "url": "data/airports.csv"
  },
  "projection": {
    "type": "albersUsa"
  },
  "layer": [
    {
      "mark": "square",
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
          "value": 1
        },
        "color": {
          "value": "gray"
        }
      }
    },
    {
      "mark": "square",
      "encoding": {
        "longitude": {
          "datum": -122.335167
        },
        "latitude": {
          "field": "latitude",
          "type": "quantitative"
        },
        "size": {
          "value": 1
        },
        "color": {
          "value": "steelblue"
        }
      }
    },
    {
      "mark": "square",
      "encoding": {
        "longitude": {
          "field": "longitude",
          "type": "quantitative"
        },
        "latitude": {
          "datum": 47.608013
        },
        "size": {
          "value": 1
        },
        "color": {
          "value": "firebrick"
        }
      }
    }
  ]
}
*/
