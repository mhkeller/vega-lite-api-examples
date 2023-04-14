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
  "transform": [
    {
      "aggregate": [{"op": "count", "as": "num_cars"}],
      "groupby": ["Origin", "Cylinders"]
    }
  ],
  "encoding": {
    "y": {"field": "Origin", "type": "ordinal"},
    "x": {"field": "Cylinders", "type": "ordinal"}
  },
  "layer": [
    {
      "mark": "rect",
      "encoding": {
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
        "text": {"field": "num_cars", "type": "quantitative"},
        "color": {
          "condition": {"test": "datum['num_cars'] < 40", "value": "black"},
          "value": "white"
        }
      }
    }
  ],
  "config": {
    "axis": {"grid": true, "tickBand": "extent"}
  }
}
*/
