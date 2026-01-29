import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl
				.markGeoshape({ fill: '#eee', stroke: 'white' })
				.data(vl.topojson('data/us-10m.json').feature('states'))
				.project(vl.projection('albersUsa')),
			vl
				.markCircle()
				.data('data/airports.csv')
				.project(vl.projection('albersUsa'))
				.encode(
					vl.longitude().fieldQ('longitude'),
					vl.latitude().fieldQ('latitude'),
					vl.size().value(5),
					vl.color().value('gray')
				),
			vl
				.markLine()
				.data([
					{ airport: 'SEA', order: 1 },
					{ airport: 'SFO', order: 2 },
					{ airport: 'LAX', order: 3 },
					{ airport: 'LAS', order: 4 },
					{ airport: 'DFW', order: 5 },
					{ airport: 'DEN', order: 6 },
					{ airport: 'ORD', order: 7 },
					{ airport: 'JFK', order: 8 }
				])
				.transform(
					vl.lookup('airport').from(vl.data('data/airports.csv').key('iata').fields(['latitude', 'longitude']))
				)
				.project(vl.projection('albersUsa'))
				.encode(
					vl.longitude().fieldQ('longitude'),
					vl.latitude().fieldQ('latitude'),
					vl.order().field('order')
				)
		)
		.description('Line drawn between airports in the U.S. simulating a flight itinerary')
		.width(800)
		.height(500)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Line drawn between airports in the U.S. simulating a flight itinerary",
  "width": 800,
  "height": 500,
  "layer": [
    {
      "data": {
        "url": "data/us-10m.json",
        "format": {
          "type": "topojson",
          "feature": "states"
        }
      },
      "projection": {
        "type": "albersUsa"
      },
      "mark": {
        "type": "geoshape",
        "fill": "#eee",
        "stroke": "white"
      }
    },
    {
      "data": {
        "url": "data/airports.csv"
      },
      "projection": {
        "type": "albersUsa"
      },
      "mark": "circle",
      "encoding": {
        "longitude": {
          "field": "longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "latitude",
          "type": "quantitative"
        },
        "size": {
          "value": 5
        },
        "color": {
          "value": "gray"
        }
      }
    },
    {
      "data": {
        "values": [
          {"airport": "SEA", "order": 1},
          {"airport": "SFO", "order": 2},
          {"airport": "LAX", "order": 3},
          {"airport": "LAS", "order": 4},
          {"airport": "DFW", "order": 5},
          {"airport": "DEN", "order": 6},
          {"airport": "ORD", "order": 7},
          {"airport": "JFK", "order": 8}
        ]
      },
      "transform": [
        {
          "lookup": "airport",
          "from": {
            "data": {
              "url": "data/airports.csv"
            },
            "key": "iata",
            "fields": [
              "latitude",
              "longitude"
            ]
          }
        }
      ],
      "projection": {
        "type": "albersUsa"
      },
      "mark": "line",
      "encoding": {
        "longitude": {
          "field": "longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "latitude",
          "type": "quantitative"
        },
        "order": {
          "field": "order"
        }
      }
    }
  ]
}
*/
