import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markArea({
			line: { color: 'darkgreen' },
			color: {
				x1: 1,
				y1: 1,
				x2: 1,
				y2: 0,
				gradient: 'linear',
				stops: [
					{
						offset: 0,
						color: 'white'
					},
					{
						offset: 1,
						color: 'darkgreen'
					}
				]
			}
		})
		.data('data/stocks.csv')
		.description(`Google's stock price over time.`)
		.transform(vl.filter(`datum.symbol==='GOOG'`))
		.encode(vl.x().fieldT('date'), vl.y().fieldQ('price'))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Google's stock price over time.",
  "data": {
    "url": "data/stocks.csv"
  },
  "transform": [
    {
      "filter": "datum.symbol==='GOOG'"
    }
  ],
  "mark": {
    "type": "area",
    "line": {
      "color": "darkgreen"
    },
    "color": {
      "x1": 1,
      "y1": 1,
      "x2": 1,
      "y2": 0,
      "gradient": "linear",
      "stops": [
        {
          "offset": 0,
          "color": "white"
        },
        {
          "offset": 1,
          "color": "darkgreen"
        }
      ]
    }
  },
  "encoding": {
    "x": {
      "field": "date",
      "type": "temporal"
    },
    "y": {
      "field": "price",
      "type": "quantitative"
    }
  }
}
*/
