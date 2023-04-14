import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/movies.json"
  },
  "mark": {"size": 80, "type": "circle"},
  "encoding": {
    "x": {
      "aggregate": "mean",
      "axis": {
        "labelExpr": "datum.label == 0 ? 'Poor' : datum.label == 5 ? 'Neutral' : 'Great'",
        "labelFlush": false,
        "values": [0, 5, 10]
      },
      "field": "IMDB Rating",
      "scale": {"domain": [0, 10]},
      "title": null
    },
    "y": {"field": "Major Genre", "sort": "x", "title": null}
  }
}
*/
