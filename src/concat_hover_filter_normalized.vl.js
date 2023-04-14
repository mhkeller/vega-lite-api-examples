import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Drag out a rectangular brush to highlight points.",
  "data": {"url": "data/cars.json"},
  "hconcat": [
    {
      "layer": [
        {
          "params": [
            {"name": "hover", "select": {"type": "point", "on": "mouseover"}}
          ],
          "mark": "point",
          "encoding": {
            "x": {"field": "Horsepower", "type": "quantitative"},
            "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
          }
        },
        {
          "mark": {"type": "point", "color": "goldenrod"},
          "transform": [{"filter": {"param": "hover", "empty": false}}],
          "encoding": {
            "x": {"field": "Horsepower", "type": "quantitative"},
            "y": {"field": "Miles_per_Gallon", "type": "quantitative"}
          }
        }
      ]
    },
    {
      "layer": [
        {
          "params": [
            {"name": "hover", "select": {"type": "point", "on": "mouseover"}}
          ],
          "mark": "point",
          "encoding": {
            "x": {"field": "Horsepower", "type": "quantitative"},
            "y": {"field": "Acceleration", "type": "quantitative"}
          }
        },
        {
          "mark": {"type": "point", "color": "goldenrod"},
          "transform": [{"filter": {"param": "hover", "empty": false}}],
          "encoding": {
            "x": {"field": "Horsepower", "type": "quantitative"},
            "y": {"field": "Acceleration", "type": "quantitative"}
          }
        }
      ]
    }
  ]
}
*/
