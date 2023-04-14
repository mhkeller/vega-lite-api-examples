import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/disasters.csv"
  },
  "width": 600,
  "height": 400,
  "transform": [
    {"filter": "datum.Entity !== 'All natural disasters'"}
  ],
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1
  },
  "encoding": {
    "x": {
      "field": "Year",
      "type": "temporal",
      "axis": {"grid": false}
    },
    "y": {"field": "Entity", "type": "nominal", "axis": {"title": ""}},
    "size": {
      "field": "Deaths",
      "type": "quantitative",
      "title": "Annual Global Deaths",
      "legend": {"clipHeight": 30},
      "scale": {"rangeMax": 5000}
    },
    "color": {"field": "Entity", "type": "nominal", "legend": null}
  }
}
*/
