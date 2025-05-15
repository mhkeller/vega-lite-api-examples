import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.data('data/cars.json')
		.hconcat(
			vl
				.markBar()
				.transform([{ filter: { param: 'brush' } }])
				.encode(
					vl
						.y()
						.fieldN('Name')
						.sort('-x')
						.axis({ minExtent: 200, title: null }),
					vl
						.x()
						.aggregate('count')
						.axis({ orient: 'top' })
						.scale({ domain: [0, 6] })
				),
			vl
				.markBar()
				.width(50)
				.height(200)
				.params([
					{
						name: 'brush',
						select: {
							type: 'interval',
							encodings: ['y']
						}
					}
				])
				.encode(
					vl.y().fieldN('Name').sort('-x').axis(null),
					vl.x().aggregate('count').axis(null)
				)
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "hconcat": [{
    "mark": "bar",
    "transform": [{
      "filter": {"param": "brush"}
    }],
    "encoding": {
      "y": {
        "field": "Name",
        "type": "nominal",
        "axis": {"minExtent": 200, "title": null},
        "sort": "-x"
      },
      "x": {
        "aggregate": "count",
        "scale":{"domain":  [0, 6]},
        "axis": {"orient": "top"}
      }
    }
  }, {
    "height": 200,
    "width": 50,
    "params": [{
      "name": "brush",
      "select": {
        "type": "interval",
        "encodings": ["y"]
      }
    }],
    "mark": "bar",
    "encoding": {
      "y": {
        "field": "Name",
        "type": "nominal",
        "sort": "-x",
        "axis": null
      },
      "x": {
        "aggregate": "count",
        "axis": null
      }
    }
  }]
}
*/
