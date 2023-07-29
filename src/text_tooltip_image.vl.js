import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
   "view": {"stroke": null},
  "description": "A simple chart with an image tooltip.",
  "data": {
    "values": [
      {"image": "data/ffox.png"},
      {"image": "data/gimp.png"},
      {"image": "data/7zip.png"}
    ]
  },
  "mark": "text",
  "encoding": {
    "text": {"field": "image"},
    "y": {"field": "image", "axis": null},
    "tooltip": [{"field": "image"}]
  }
}
*/
