import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A Wilkinson Dot Plot created by generating an id and stacking data points",
  "height": 100,
  "data": {
    "values": [
      1,1,1,1,1,1,1,1,1,1,
      2,2,2,
      3,3,
      4,4,4,4,4,4
    ]
  },
  "transform": [{
    "window": [{"op": "rank", "as": "id"}]
  }],
  "mark": "circle",
  "encoding": {
    "x": {"field": "data", "type": "ordinal"},
    "y": {"aggregate": "count", "stack": true, "bandPosition": 0.5},
    "detail": {"field": "id"}
  }
}
*/
