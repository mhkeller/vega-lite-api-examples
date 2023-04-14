import * as vl from 'vega-lite-api';

// Write a Node.JS function that uses the vega-lite-api library to generate the vega-lite JSON spec below. The function should return the vega-lite-api object. Call the function `chart` and export as the es6 module default export.

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Top-K plot with \"others\" by Trevor Manz, adapted from https://observablehq.com/@manzt/top-k-plot-with-others-vega-lite-example.",
  "title": "Top Directors by Average Worldwide Gross",
  "data": {"url": "data/movies.json"},
  "mark": "bar",
  "transform": [
    {
      "aggregate": [{"op": "mean", "field": "Worldwide Gross", "as": "aggregate_gross"}],
      "groupby": ["Director"]
    },
    {
      "window": [{"op": "row_number", "as": "rank"}],
      "sort": [{ "field": "aggregate_gross", "order": "descending" }]
    },
    {
      "calculate": "datum.rank < 10 ? datum.Director : 'All Others'", "as": "ranked_director"
    }
  ],
  "encoding": {
    "x": {
      "aggregate": "mean",
      "field": "aggregate_gross",
      "type": "quantitative",
      "title": null
    },
    "y": {
      "sort": {"op": "mean", "field": "aggregate_gross", "order": "descending"},
      "field": "ranked_director",
      "type": "ordinal",
      "title": null
    }
  }
}

*/
