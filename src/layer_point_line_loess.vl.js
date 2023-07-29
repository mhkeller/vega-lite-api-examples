import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/movies.json"
  },
  "layer": [
    {
      "mark": {
        "type": "point",
        "filled": true
      },
      "encoding": {
        "x": {
          "field": "Rotten Tomatoes Rating",
          "type": "quantitative"
        },
        "y": {
          "field": "IMDB Rating",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": {
        "type": "line",
        "color": "firebrick"
      },
      "transform": [
        {
          "loess": "IMDB Rating",
          "on": "Rotten Tomatoes Rating"
        }
      ],
      "encoding": {
        "x": {
          "field": "Rotten Tomatoes Rating",
          "type": "quantitative"
        },
        "y": {
          "field": "IMDB Rating",
          "type": "quantitative"
        }
      }
    }
  ]
}
*/
