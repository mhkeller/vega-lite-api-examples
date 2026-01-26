import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "An interactive visualization of connections among major U.S. airports in 2008. Based on a U.S. airports example by Mike Bostock.",
  "layer": [
    {
      "mark": {
        "type": "geoshape",
        "fill": "#ddd",
        "stroke": "#fff",
        "strokeWidth": 1
      },
      "data": {
        "url": "data/us-10m.json",
        "format": {"type": "topojson", "feature": "states"}
      }
    },
    {
      "mark": {"type": "rule", "color": "#000", "opacity": 0.35},
      "data": {"url": "data/flights-airport.csv"},
      "transform": [
        {"filter": {"param": "org", "empty": false}},
        {
          "lookup": "origin",
          "from": {
            "data": {"url": "data/airports.csv"},
            "key": "iata",
            "fields": ["latitude", "longitude"]
          }
        },
        {
          "lookup": "destination",
          "from": {
            "data": {"url": "data/airports.csv"},
            "key": "iata",
            "fields": ["latitude", "longitude"]
          },
          "as": ["lat2", "lon2"]
        }
      ],
      "encoding": {
        "latitude": {"field": "latitude"},
        "longitude": {"field": "longitude"},
        "latitude2": {"field": "lat2"},
        "longitude2": {"field": "lon2"}
      }
    },
    {
      "mark": {"type": "circle"},
      "data": {"url": "data/flights-airport.csv"},
      "transform": [
        {"aggregate": [{"op": "count", "as": "routes"}], "groupby": ["origin"]},
        {
          "lookup": "origin",
          "from": {
            "data": {"url": "data/airports.csv"},
            "key": "iata",
            "fields": ["state", "latitude", "longitude"]
          }
        },
        {"filter": "datum.state !== 'PR' && datum.state !== 'VI'"}
      ],
      "params": [{
        "name": "org",
        "select": {
          "type": "point",
          "on": "mouseover",
          "nearest": true,
          "fields": ["origin"]
        }
      }],
      "encoding": {
        "latitude": {"field": "latitude"},
        "longitude": {"field": "longitude"},
        "size": {
          "field": "routes",
          "type": "quantitative",
          "scale": {"rangeMax": 1000},
          "legend": null
        },
        "order": {
          "field": "routes",
          "sort": "descending"
        }
      }
    }
  ],
  "projection": {"type": "albersUsa"},
  "width": 900,
  "height": 500
}
*/

export default function chart() {
	// Build the spec using the builder API, but set top-level properties directly
	const spec = vl
		.layer(
			// Layer 1: US map
			vl
				.markGeoshape({
					fill: '#ddd',
					stroke: '#fff',
					strokeWidth: 1
				})
				.data({
					url: 'data/us-10m.json',
					format: { type: 'topojson', feature: 'states' }
				}),
			// Layer 2: Flight connections (rules)
			vl
				.markRule({ color: '#000', opacity: 0.35 })
				.data('data/flights-airport.csv')
				.transform(
					vl.filter({ param: 'org', empty: false }),
					vl
						.lookup('origin')
						.from(
							vl
								.data('data/airports.csv')
								.key('iata')
								.fields(['latitude', 'longitude'])
						),
					vl
						.lookup('destination')
						.from(
							vl
								.data('data/airports.csv')
								.key('iata')
								.fields(['latitude', 'longitude'])
						)
						.as(['lat2', 'lon2'])
				)
				.encode(
					vl.latitude().field('latitude'),
					vl.longitude().field('longitude'),
					vl.latitude2().field('lat2'),
					vl.longitude2().field('lon2')
				),
			// Layer 3: Airport circles
			vl
				.markCircle()
				.data('data/flights-airport.csv')
				.transform(
					{
						aggregate: [{ op: 'count', as: 'routes' }],
						groupby: ['origin']
					},
					vl
						.lookup('origin')
						.from(
							vl
								.data('data/airports.csv')
								.key('iata')
								.fields(['state', 'latitude', 'longitude'])
						),
					vl.filter(
						"datum.state !== 'PR' && datum.state !== 'VI'"
					)
				)
				.params([
					{
						name: 'org',
						select: {
							type: 'point',
							on: 'mouseover',
							nearest: true,
							fields: ['origin']
						}
					}
				])
				.encode(
					vl.latitude().field('latitude'),
					vl.longitude().field('longitude'),
					vl
						.size()
						.fieldQ('routes')
						.scale({ rangeMax: 1000 })
						.legend(null),
					vl.order().field('routes').sort('descending')
				)
		)
		.toSpec();

	// Set top-level properties directly
	spec.description =
		'An interactive visualization of connections among major U.S. airports in 2008. Based on a U.S. airports example by Mike Bostock.';
	spec.projection = { type: 'albersUsa' };
	spec.width = 900;
	spec.height = 500;
	return spec;
}
