import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Bar chart with text labels. Set domain to make the frame cover the labels.",
  "data": {
    "values": [{"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43}]
  },
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "y": {"field": "a", "type": "nominal"},
        "x": {
          "field": "b",
          "type": "quantitative",
          "scale": {"domain": [0, 60]}
        }
      }
    },
    {
      "mark": {"type": "text", "align": "left", "baseline": "middle", "dx": 3},
      "encoding": {
        "y": {"field": "a", "type": "nominal"},
        "x": {
          "field": "b",
          "type": "quantitative",
          "scale": {"domain": [0, 60]}
        },
        "text": {"field": "b", "type": "quantitative"}
      }
    }
  ]
}
*/
