import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/movies.json"},
  "columns": 2,
  "facet": {"field": "MPAA Rating", "type": "ordinal"},
  "spec": {
    "mark": "point",
    "encoding": {
      "x": {"field": "Worldwide Gross", "type": "quantitative"},
      "y": {"field": "US DVD Sales", "type": "quantitative"}
    }
  }
}
*/
