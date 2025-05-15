import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	const hconcat1 = vl
		.markPoint()
		.params([{ name: 'brush', select: 'interval' }])
		.encode(
			vl.x().fieldQ('Horsepower'),
			vl.y().fieldQ('Miles_per_Gallon'),
			vl
				.color()
				.condition({
					param: 'brush',
					field: 'Cylinders',
					type: 'ordinal'
				})
				.value('grey')
		);

	const hconcat2C1 = vl
		.markText()
		.width(50)
		.title('Horsepower')
		.encode(
			vl.text().fieldN('Horsepower'),
			vl.y().fieldO('row_number').axis(null)
		);

	const hconcat2C2 = vl
		.markText()
		.width(50)
		.title('MPG')
		.encode(
			vl.text().fieldN('Miles_per_Gallon'),
			vl.y().fieldO('row_number').axis(null)
		);

	const hconcat2C3 = vl
		.markText()
		.width(50)
		.title('Origin')
		.encode(
			vl.text().fieldN('Origin'),
			vl.y().fieldO('row_number').axis(null)
		);

	const hconcat2 = vl
		.hconcat(hconcat2C1, hconcat2C2, hconcat2C3)
		.transform(
			vl.filter(vl.param('brush')),
			vl.window({ op: 'rank', as: 'rank' }),
			vl.filter(vl.field('rank').lt(20))
		);

	return vl
		.hconcat(hconcat1, hconcat2)
		.data('data/cars.json')
		.description(
			'Drag a rectangular brush to show (first 20) selected points in a table.'
		)
		.transform(
			vl.window({ op: 'row_number', as: 'row_number' })
		)
		.resolve({ legend: { color: 'independent' } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drag a rectangular brush to show (first 20) selected points in a table.",
  "data": {"url": "data/cars.json"},
  "transform": [{
    "window": [{"op": "row_number", "as": "row_number"}]
  }],
  "hconcat": [
    {
      "params": [{"name": "brush", "select": "interval"}],
      "mark": "point",
      "encoding": {
        "x": {"field": "Horsepower", "type": "quantitative"},
        "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
        "color": {
          "condition": {"param": "brush", "field": "Cylinders", "type": "ordinal"},
          "value": "grey"
        }
      }
    },
    {
      "transform": [
        {"filter": {"param": "brush"}},
        {"window": [{"op": "rank", "as": "rank"}]},
        {"filter": {"field": "rank", "lt": 20}}
      ],
      "hconcat": [
        {
          "width": 50,
          "title": "Horsepower",
          "mark": "text",
          "encoding": {
            "text": {"field": "Horsepower", "type": "nominal"},
            "y": {"field": "row_number", "type": "ordinal", "axis": null}
          }
        },
        {
          "width": 50,
          "title": "MPG",
          "mark": "text",
          "encoding": {
            "text": {"field": "Miles_per_Gallon", "type": "nominal"},
            "y": {"field": "row_number", "type": "ordinal", "axis": null}
          }
        },
        {
          "width": 50,
          "title": "Origin",
          "mark": "text",
          "encoding": {
            "text": {"field": "Origin", "type": "nominal"},
            "y": {"field": "row_number", "type": "ordinal", "axis": null}
          }
        }
      ]
    }
  ],
  "resolve": {"legend": {"color": "independent"}}
}
*/
