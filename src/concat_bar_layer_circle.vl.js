import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A dashboard with cross-highlighting.",
  "data": {"url": "data/movies.json"},
  "vconcat": [
    {
      "layer": [{
        "mark": "circle",
        "encoding": {
          "x": {
            "bin": {"maxbins": 10},
            "field": "IMDB Rating"
          },
          "y": {
            "bin": {"maxbins": 10},
            "field": "Rotten Tomatoes Rating"
          },
          "size": {
            "aggregate": "count",
            "title": "All Movies Count"
          },
          "opacity": {"value": 0.4}
        }
      }, {
        "transform": [{
          "filter": {"param": "pts"}
        }],
        "mark": "circle",
        "encoding": {
          "x": {
            "bin": {"maxbins": 10},
            "field": "IMDB Rating"
          },
          "y": {
            "bin": {"maxbins": 10},
            "field": "Rotten Tomatoes Rating"
          },
          "size": {
            "aggregate": "count",
            "title": "Selected Category Count"
          }
        }
      }],
      "resolve": {"legend": {"size": "independent"}}
    }, {
      "width": 330,
      "height": 120,
      "mark": "bar",
      "params": [{
        "name": "pts",
        "select": {"type": "point", "encodings": ["x"]}
      }],
      "encoding": {
        "x": {"field": "Major Genre", "axis": {"labelAngle": -40}},
        "y": {"aggregate": "count"},
        "color": {
          "condition": {
            "param": "pts",
            "value": "steelblue"
          },
          "value": "grey"
        }
      }
    }
  ]
}
*/
