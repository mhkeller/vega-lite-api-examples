import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.
export default function chart () {
	return vl
		.markBar()
		.data([
			{ country: 'Norway', type: 'gold', count: 14 },
			{ country: 'Norway', type: 'silver', count: 14 },
			{ country: 'Norway', type: 'bronze', count: 11 },
			{ country: 'Germany', type: 'gold', count: 14 },
			{ country: 'Germany', type: 'silver', count: 10 },
			{ country: 'Germany', type: 'bronze', count: 7 },
			{ country: 'Canada', type: 'gold', count: 11 },
			{ country: 'Canada', type: 'silver', count: 8 },
			{ country: 'Canada', type: 'bronze', count: 10 }
		])
		.transform({
			pivot: 'type',
			value: 'count',
			groupby: ['country']
		})
		.encode(
			vl.x().fieldN('country'),
			vl.y().fieldQ('gold')
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"country": "Norway", "type": "gold", "count": 14},
      {"country": "Norway", "type": "silver", "count": 14},
      {"country": "Norway", "type": "bronze", "count": 11},
      {"country": "Germany", "type": "gold", "count": 14},
      {"country": "Germany", "type": "silver", "count": 10},
      {"country": "Germany", "type": "bronze", "count": 7},
      {"country": "Canada", "type": "gold", "count": 11},
      {"country": "Canada", "type": "silver", "count": 8},
      {"country": "Canada", "type": "bronze", "count": 10}
    ]
  },
  "transform": [{
    "pivot": "type",
    "value": "count",
    "groupby": ["country"]
  }],
  "mark": "bar",
  "encoding": {
    "x": {"field": "country", "type": "nominal"},
    "y": {"field": "gold", "type": "quantitative"}
  }
}

*/
