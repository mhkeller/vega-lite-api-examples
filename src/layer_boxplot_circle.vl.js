import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 500,
  "description": "A horizontal box plot showing median, min, and max in the US population distribution of age groups in 2000 and all raw data on the top.",
  "data": {"url": "data/population.json"},
  "layer": [{
    "mark": {"type": "boxplot", "outliers": false},
    "encoding": {
      "y": {"field": "age", "type": "ordinal"},
      "x": {
        "field": "people",
        "type": "quantitative",
        "title": "population"
      }
    }
  },{
    "mark": "circle",
    "encoding": {
      "y": {"field": "age", "type": "ordinal"},
      "x": {
        "field": "people",
        "type": "quantitative",
        "title": "population"
      },
      "color": {"value": "black"},
      "opacity": {"value": 0.2}
    }
  }]
}
*/
