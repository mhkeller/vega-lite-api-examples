import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markPoint()
		.data({
			values: [
				{ 'Fighter Name': 'liukang', 'Place Rank': 1, 'Fighting Style': 'tiger' },
				{ 'Fighter Name': 'liukang', 'Place Rank': 10, 'Fighting Style': 'crane' },
				{ 'Fighter Name': 'liukang', 'Place Rank': 3, 'Fighting Style': 'shaolin' },
				{
					'Fighter Name': 'johnnycage',
					'Place Rank': 6,
					'Fighting Style': 'tiger'
				},
				{
					'Fighter Name': 'johnnycage',
					'Place Rank': 5,
					'Fighting Style': 'crane'
				},
				{
					'Fighter Name': 'johnnycage',
					'Place Rank': 4,
					'Fighting Style': 'shaolin'
				},
				{ 'Fighter Name': 'raiden', 'Place Rank': 8, 'Fighting Style': 'tiger' },
				{ 'Fighter Name': 'raiden', 'Place Rank': 12, 'Fighting Style': 'crane' },
				{ 'Fighter Name': 'raiden', 'Place Rank': 2, 'Fighting Style': 'shaolin' }
			]
		})
		.description('An example showing how to use argmin in tooltips with fields with spaces')
		.encode(
			vl.tooltip([
				vl.field('Fighter Name'),
				vl.tooltip().aggregate('min').field('Place Rank'),
				vl.tooltip().aggregate({ argmin: 'Place Rank' }).field('Fighting Style')
			]),
			vl.x().aggregate('min').field('Place Rank'),
			vl.y().field('Fighter Name')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "An example showing how to use argmin in tooltips with fields with spaces",
  "data": {
    "values": [
      {"Fighter Name": "liukang", "Place Rank": 1, "Fighting Style": "tiger"},
      {"Fighter Name": "liukang", "Place Rank": 10, "Fighting Style": "crane"},
      {"Fighter Name": "liukang", "Place Rank": 3, "Fighting Style": "shaolin"},
      {
        "Fighter Name": "johnnycage",
        "Place Rank": 6,
        "Fighting Style": "tiger"
      },
      {
        "Fighter Name": "johnnycage",
        "Place Rank": 5,
        "Fighting Style": "crane"
      },
      {
        "Fighter Name": "johnnycage",
        "Place Rank": 4,
        "Fighting Style": "shaolin"
      },
      {"Fighter Name": "raiden", "Place Rank": 8, "Fighting Style": "tiger"},
      {"Fighter Name": "raiden", "Place Rank": 12, "Fighting Style": "crane"},
      {"Fighter Name": "raiden", "Place Rank": 2, "Fighting Style": "shaolin"}
    ]
  },
  "mark": "point",
  "encoding": {
    "tooltip": [
      {"field": "Fighter Name"},
      {"aggregate": "min", "field": "Place Rank"},
      {
        "aggregate": {"argmin": "Place Rank"},
        "field": "Fighting Style"
      }
    ],
    "x": {"aggregate": "min", "field": "Place Rank"},
    "y": {"field": "Fighter Name"}
  }
}
*/
