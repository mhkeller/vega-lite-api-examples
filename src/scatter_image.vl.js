import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"x": 0.5, "y": 0.5, "img": "data/ffox.png"},
      {"x": 1.5, "y": 1.5, "img": "data/gimp.png"},
      {"x": 2.5, "y": 2.5, "img": "data/7zip.png"}
    ]
  },
  "mark": {"type": "image", "width": 50, "height": 50},
  "encoding": {
    "x": {"field": "x", "type": "quantitative"},
    "y": {"field": "y", "type": "quantitative"},
    "url": {"field": "img", "type": "nominal"}
  }
}
*/
