import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "layer": [
    {
      "data": {"url": "data/cars.json"},
      "layer": [
        {
          "mark": "line",
          "encoding": {
            "x": {"field": "Cylinders", "type": "ordinal"},
            "y": {
              "aggregate": "max",
              "field": "Horsepower",
              "type": "quantitative"
            },
            "color": {"value": "darkred"}
          }
        },
        {
          "mark": {"type": "point", "opacity": 1, "filled": true},
          "encoding": {
            "x": {"field": "Cylinders", "type": "ordinal"},
            "y": {
              "aggregate": "max",
              "field": "Horsepower",
              "type": "quantitative"
            },
            "color": {"value": "darkred"}
          }
        }
      ]
    },
    {
      "data": {"url": "data/cars.json"},
      "layer": [
        {
          "mark": "line",
          "encoding": {
            "x": {"field": "Cylinders", "type": "ordinal"},
            "y": {
              "aggregate": "min",
              "field": "Horsepower",
              "type": "quantitative"
            }
          }
        },
        {
          "mark": {"type": "point", "opacity": 1, "filled": true},
          "encoding": {
            "x": {"field": "Cylinders", "type": "ordinal"},
            "y": {
              "aggregate": "min",
              "field": "Horsepower",
              "type": "quantitative"
            }
          }
        }
      ]
    }
  ],
  "config": {"line": {"point": true}}
}
*/
