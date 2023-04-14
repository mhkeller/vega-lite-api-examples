import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "layer": [
    {
      "mark": "rect",
      "encoding": {
        "y": {"field": "Origin", "type": "ordinal"},
        "x": {"field": "Cylinders", "type": "ordinal"},
        "color": {
          "field": "num_cars",
          "type": "quantitative",
          "title": "Count of Records",
          "legend": {"direction": "horizontal", "gradientLength": 120}
        }
      }
    },
    {
      "mark": "text",
      "encoding": {
        "y": {"field": "Origin", "type": "ordinal"},
        "x": {"field": "Cylinders", "type": "ordinal"},
        "text": {"field": "num_cars", "type": "quantitative"},
        "color": {
          "condition": {"value": "black", "test": "datum['num_cars'] < 40"},
          "value": "white"
        }
      }
    }
  ],
  "config": {"axis": {"grid": true, "tickBand": "extent"}},
  "transform": [
    {
      "aggregate": [{"op": "count", "as": "num_cars"}],
      "groupby": ["Origin", "Cylinders"]
    }
  ]
}
*/
