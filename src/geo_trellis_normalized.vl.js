import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/income.json"},
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
  "facet": {"row": {"field": "group"}},
  "spec": {
    "width": 500,
    "height": 300,
    "projection": {"type": "albersUsa"},
    "mark": "geoshape",
    "encoding": {
      "shape": {"field": "geo", "type": "geojson"},
      "color": {"field": "pct", "type": "quantitative"}
    }
  }
}
*/
