import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.markBar({
			yOffset: 5,
			cornerRadiusEnd: 2,
			height: { band: 0.5 }
		})
		.data('data/cars.json')
		.height({ step: 50 })
		.description('Bar Chart with a spacing-saving y-axis')
		.encode(
			vl.y().field('Origin').scale({ padding: 0 }).axis({
				bandPosition: 0,
				grid: true,
				domain: false,
				ticks: false,
				labelAlign: 'left',
				labelBaseline: 'middle',
				labelPadding: -5,
				labelOffset: -15,
				titleX: 5,
				titleY: -5,
				titleAngle: 0,
				titleAlign: 'left'
			}),
			vl
				.x()
				.aggregate('count')
				.axis({ grid: false })
				.title('Number of Cars')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Bar Chart with a spacing-saving y-axis",
  "data": {"url": "data/cars.json"},
  "height": {"step": 50},
  "mark": {"type": "bar", "yOffset": 5, "cornerRadiusEnd": 2, "height": {"band": 0.5}},
  "encoding": {
    "y": {
      "field": "Origin",
      "scale": {"padding": 0},
      "axis": {
        "bandPosition": 0,
        "grid": true,
        "domain": false,
        "ticks": false,
        "labelAlign": "left",
        "labelBaseline": "middle",
        "labelPadding": -5,
        "labelOffset": -15,
        "titleX": 5,
        "titleY": -5,
        "titleAngle": 0,
        "titleAlign": "left"
      }
    },
    "x": {
      "aggregate": "count",
      "axis": {"grid": false},
      "title": "Number of Cars"
    }
  }
}
*/
