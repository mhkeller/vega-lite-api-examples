import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	const flights = vl.markCircle()
    .data(vl.url('data/flights-airport.csv'))
    .transform(
      vl.aggregate({ op: 'count', as: 'routes' }).groupby(['origin']),
      vl.lookup('origin')
        .from(vl.url('data/airports.csv'))
        .key('iata')
        .fields(['state', 'latitude', 'longitude']),
      vl.filter('datum.state !== "PR" && datum.state !== "VI"')
    )
    .params(vl.selectPoint('org')
      .on('mouseover')
      .nearest(true)
      .fields(['origin'])
    )
    .encode(
      vl.latitude().fieldQ('latitude'),
      vl.longitude().fieldQ('longitude'),
      vl.size().fieldQ('routes').scale({ rangeMax: 1000 }).legend(null),
      vl.order().fieldQ('routes').sort('descending')
    );

  const routes = vl.markRule({ color: '#000', opacity: 0.35 })
    .data(vl.url('data/flights-airport.csv'))
    .transform(
      vl.filter(vl.param('org').empty(false)),
      vl.lookup('origin')
        .from(vl.url('data/airports.csv'))
        .key('iata')
        .fields(['latitude', 'longitude']),
      vl.lookup('destination')
        .from(vl.url('data/airports.csv'))
        .key('iata')
        .fields(['latitude', 'longitude'])
        .as(['lat2', 'lon2'])
    )
    .encode(
      vl.latitude().fieldQ('latitude'),
      vl.longitude().fieldQ('longitude'),
      vl.latitude2().fieldQ('lat2'),
      vl.longitude2().fieldQ('lon2')
    );

  const states = vl.markGeoshape({ fill: '#ddd', stroke: '#fff', strokeWidth: 1 })
    .data(
      vl.url('data/us-10m.json'),
      { format: { type: 'topojson', feature: 'states' } }
    );

  const vegaLiteSpec = vl.layer(states, routes, flights)
    .projection(vl.projection('albersUsa'))
    .width(900)
    .height(500)
    .description('An interactive visualization of connections among major U.S. airports in 2008. Based on a U.S. airports example by Mike Bostock.');

  return vegaLiteSpec.toJSON();
}

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
      },
      "projection": {"type": "albersUsa"}
    },
    {
      "mark": {"type": "rule", "color": "#000", "opacity": 0.35},
      "data": {"url": "data/flights-airport.csv"},
      "encoding": {
        "latitude": {"field": "latitude"},
        "longitude": {"field": "longitude"},
        "latitude2": {"field": "lat2"},
        "longitude2": {"field": "lon2"}
      },
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
      "projection": {"type": "albersUsa"}
    },
    {
      "mark": {"type": "circle"},
      "data": {"url": "data/flights-airport.csv"},
      "params": [
        {
          "name": "org",
          "select": {
            "type": "point",
            "on": "mouseover",
            "nearest": true,
            "fields": ["origin"]
          }
        }
      ],
      "encoding": {
        "latitude": {"field": "latitude"},
        "longitude": {"field": "longitude"},
        "size": {
          "field": "routes",
          "type": "quantitative",
          "scale": {"rangeMax": 1000},
          "legend": null
        },
        "order": {"field": "routes", "sort": "descending"}
      },
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
      "projection": {"type": "albersUsa"}
    }
  ],
  "width": 900,
  "height": 500
}
*/
