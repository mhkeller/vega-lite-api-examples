import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 75,
  "height": 75,
  "data": {"url": "data/movies.json"},
  "mark": "point",
  "encoding": {
    "column": {"field": "MPAA Rating"},
    "x": {"field": "Worldwide Gross", "type": "quantitative"},
    "y": {"field": "US DVD Sales", "type": "quantitative"}
  }
}

*/
