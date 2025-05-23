import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markArc({ outerRadius: 80 })
		.description(
			'Reproducing http://robslink.com/SAS/democd91/pyramid_pie.htm'
		)
		.data({
			values: [
				{ category: 'Sky', value: 75, order: 3 },
				{
					category: 'Shady side of a pyramid',
					value: 10,
					order: 1
				},
				{
					category: 'Sunny side of a pyramid',
					value: 15,
					order: 2
				}
			]
		})
		.encode(
			vl
				.theta()
				.fieldQ('value')
				.stack(true)
				.scale({ range: [2.35619449, 8.639379797] }),
			vl
				.color()
				.fieldN('category')
				.scale({
					domain: [
						'Sky',
						'Shady side of a pyramid',
						'Sunny side of a pyramid'
					],
					range: ['#416D9D', '#674028', '#DEAC58']
				})
				.legend({
					orient: 'none',
					title: null,
					columns: 1,
					legendX: 200,
					legendY: 80
				}),
			vl.order().fieldO('order')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Reproducing http://robslink.com/SAS/democd91/pyramid_pie.htm",
  "data": {
    "values": [
      {"category": "Sky", "value": 75, "order": 3},
      {"category": "Shady side of a pyramid", "value": 10, "order": 1},
      {"category": "Sunny side of a pyramid", "value": 15, "order": 2}
    ]
  },
  "mark": {"type": "arc", "outerRadius": 80},
  "encoding": {
    "theta": {
      "field": "value", "type": "quantitative",
      "scale": {"range": [2.35619449, 8.639379797]},
      "stack": true
    },
    "color": {
      "field": "category", "type": "nominal",
      "scale": {
        "domain": ["Sky", "Shady side of a pyramid", "Sunny side of a pyramid"],
        "range": ["#416D9D", "#674028", "#DEAC58"]
      },
      "legend": {
        "orient": "none",
        "title": null,
        "columns": 1,
        "legendX": 200,
        "legendY": 80
      }
    },
    "order": {
      "field": "order",
      "type": "ordinal"
    }
  }
}
*/
