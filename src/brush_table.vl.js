import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drag a rectangular brush to show (first 20) selected points in a table.",
  "data": {"url": "data/cars.json"},
  "transform": [{
    "window": [{"op": "row_number", "as": "row_number"}]
  }],
  "hconcat": [{
    "params": [{"name": "brush", "select": "interval"}],
    "mark": "point",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
      "color": {
        "condition": {"param": "brush", "field": "Cylinders", "type": "ordinal"},
        "value": "grey"
      }
    }
  }, {
    "transform": [
      {"filter": {"param": "brush"}},
      {"window": [{"op": "rank", "as": "rank"}]},
      {"filter": {"field": "rank", "lt": 20}}
    ],
    "hconcat": [{
      "width": 50,
      "title": "Horsepower",
      "mark": "text",
      "encoding": {
        "text": {"field": "Horsepower", "type": "nominal"},
        "y": {"field": "row_number", "type": "ordinal", "axis": null}
      }
    }, {
      "width": 50,
      "title": "MPG",
      "mark": "text",
      "encoding": {
        "text": {"field": "Miles_per_Gallon", "type": "nominal"},
        "y": {"field": "row_number", "type": "ordinal", "axis": null}
      }
    }, {
      "width": 50,
      "title": "Origin",
      "mark": "text",
      "encoding": {
        "text": {"field": "Origin", "type": "nominal"},
        "y": {"field": "row_number", "type": "ordinal", "axis": null}
      }
    }]
  }],
  "resolve": {"legend": {"color": "independent"}}
}
*/
