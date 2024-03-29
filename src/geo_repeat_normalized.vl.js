import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "data": {"url": "data/population_engineers_hurricanes.csv"},
  "align": "all",
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "the population per state, engineers per state, and hurricanes per state",
  "resolve": {"scale": {"color": "independent"}},
  "columns": 1,
  "concat": [
    {
      "width": 500,
      "height": 300,
      "projection": {"type": "albersUsa"},
      "mark": "geoshape",
      "encoding": {
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "population", "type": "quantitative"}
      },
      "transform": [
        {
          "lookup": "id",
          "from": {
            "data": {
              "url": "data/us-10m.json",
              "format": {"type": "topojson", "feature": "states"}
            },
            "key": "id"
          },
          "as": "geo"
        }
      ],
      "name": "child__row_population"
    },
    {
      "width": 500,
      "height": 300,
      "projection": {"type": "albersUsa"},
      "mark": "geoshape",
      "encoding": {
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "engineers", "type": "quantitative"}
      },
      "transform": [
        {
          "lookup": "id",
          "from": {
            "data": {
              "url": "data/us-10m.json",
              "format": {"type": "topojson", "feature": "states"}
            },
            "key": "id"
          },
          "as": "geo"
        }
      ],
      "name": "child__row_engineers"
    },
    {
      "width": 500,
      "height": 300,
      "projection": {"type": "albersUsa"},
      "mark": "geoshape",
      "encoding": {
        "shape": {"field": "geo", "type": "geojson"},
        "color": {"field": "hurricanes", "type": "quantitative"}
      },
      "transform": [
        {
          "lookup": "id",
          "from": {
            "data": {
              "url": "data/us-10m.json",
              "format": {"type": "topojson", "feature": "states"}
            },
            "key": "id"
          },
          "as": "geo"
        }
      ],
      "name": "child__row_hurricanes"
    }
  ]
}
*/
