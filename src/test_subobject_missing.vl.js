import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values":[
      {
        "rank": "1"
      },
      {
        "rank": "2",
        "options": {
          "price": 16
        }
      },
      {
        "rank": "3",
        "options": {
          "price": 17
        }
      }
    ]
  },
  "transform": [{"filter": "datum.options != null"}],
  "mark": "line",
  "encoding": {
    "x": {"field": "rank", "type": "ordinal"},
    "y": {"field": "options.price", "type": "quantitative"}
  }
}
*/

export default function chart() {
	const data = [
		{ rank: '1' },
		{ rank: '2', options: { price: 16 } },
		{ rank: '3', options: { price: 17 } }
	];

	return vl
		.markLine()
		.data({ values: data })
		.transform(vl.filter('datum.options != null'))
		.encode(
			vl.x().fieldO('rank'),
			vl.y().fieldQ('options.price')
		)
		.toSpec();
}
