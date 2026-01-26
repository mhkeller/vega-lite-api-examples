import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.concat(
			vl.markBar().encode(
				vl.x().timeUnit('month').fieldO('date'),
				vl.y().aggregate('mean').field('precipitation')
			),
			vl.markBar().encode(
				vl.x().timeUnit('month').fieldO('date'),
				vl.y().aggregate('median').field('precipitation')
			),
			vl.markPoint().encode(
				vl.x().field('temp_min').bin(true),
				vl.y().field('temp_max').bin(true),
				vl.size().aggregate('count')
			)
		)
		.description(
			'Two horizonally concatenated charts that show a histogram of precipitation in Seattle and the relationship between min and max temperature.'
		)
		.data('data/weather.csv')
		.transform({ filter: "datum.location === 'Seattle'" })
		.columns(2)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Two horizonally concatenated charts that show a histogram of precipitation in Seattle and the relationship between min and max temperature.",
  "data": {
    "url": "data/weather.csv"
  },
  "transform": [{
    "filter": "datum.location === 'Seattle'"
  }],

  "columns": 2,
  "concat": [
    {
      "mark": "bar",
      "encoding": {
        "x": {
          "timeUnit": "month",
          "field": "date",
          "type": "ordinal"
        },
        "y": {
          "aggregate": "mean",
          "field": "precipitation"
        }
      }
    },
    {
      "mark": "bar",
      "encoding": {
        "x": {
          "timeUnit": "month",
          "field": "date",
          "type": "ordinal"
        },
        "y": {
          "aggregate": "median",
          "field": "precipitation"
        }
      }
    },
    {
      "mark": "point",
      "encoding": {
        "x": {
          "field": "temp_min",
          "bin": true
        },
        "y": {
          "field": "temp_max",
          "bin": true
        },
        "size": {
          "aggregate": "count"
        }
      }
    }
  ]
}
*/
