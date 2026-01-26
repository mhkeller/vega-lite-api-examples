import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markBar().encode(
				vl.x().timeUnit('month').fieldO('date'),
				vl.y().aggregate('mean').fieldQ('precipitation')
			),
			vl.markRule().encode(
				vl.y().aggregate('mean').fieldQ('precipitation'),
				vl.color().value('red'),
				vl.size().value(3)
			)
		)
		.data('data/seattle-weather.csv')
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/seattle-weather.csv"},
  "layer": [
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
          "field": "precipitation",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": "rule",
      "encoding": {
        "y": {
          "aggregate": "mean",
          "field": "precipitation",
          "type": "quantitative"
        },
        "color": {"value": "red"},
        "size": {"value": 3}
      }
    }
  ]
}
*/
