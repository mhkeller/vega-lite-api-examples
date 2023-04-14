import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple pie chart with labels.",
  "data": {
    "values": [
      {"category": "a", "value": 4},
      {"category": "b", "value": 6},
      {"category": "c", "value": 10},
      {"category": "d", "value": 3},
      {"category": "e", "value": 7},
      {"category": "f", "value": 8}
    ]
  },
  "encoding": {
    "theta": {"field": "value", "type": "quantitative", "stack": true},
    "color": {"field": "category", "type": "nominal", "legend": null}
  },
  "layer": [{
    "mark": {"type": "arc", "outerRadius": 80}
  }, {
    "mark": {"type": "text", "radius": 90},
    "encoding": {
      "text": {"field": "category", "type": "nominal"}
    }
  }]
}
*/
