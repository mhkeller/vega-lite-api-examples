import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
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
        "fill": "lightgray",
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
        "size": {"value": 5},
        "color": {"value": "gray"}
      }
    },
    {
      "data": {
        "url": "data/flights-airport.csv"
      },
      "transform": [
        {"filter": {"field": "origin", "equal": "SEA"}},
        {
          "lookup": "origin",
          "from": {
            "data": {
              "url": "data/airports.csv"
            },
            "key": "iata",
            "fields": ["latitude", "longitude"]
          },
          "as": ["origin_latitude", "origin_longitude"]
        },
        {
          "lookup": "destination",
          "from": {
            "data": {
              "url": "data/airports.csv"
            },
            "key": "iata",
            "fields": ["latitude", "longitude"]
          },
          "as": ["dest_latitude", "dest_longitude"]
        }
      ],
      "projection": {
        "type": "albersUsa"
      },
      "mark": "rule",
      "encoding": {
        "longitude": {
          "field": "origin_longitude",
          "type": "quantitative"
        },
        "latitude": {
          "field": "origin_latitude",
          "type": "quantitative"
        },
        "longitude2": {"field": "dest_longitude"},
        "latitude2": {"field": "dest_latitude"}
      }
    }
  ]
}

*/
