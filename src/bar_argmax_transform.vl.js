import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "The production budget of the movie that has the highest US Gross in each major genre.",
  "data": {"url": "data/movies.json"},
  "transform": [{
    "aggregate": [{
      "op": "argmax",
      "field": "US Gross",
      "as": "argmax_US_Gross"
    }],
    "groupby": ["Major Genre"]
  }],
  "mark": "bar",
  "encoding": {
    "x": {"field": "argmax_US_Gross['Production Budget']", "type": "quantitative"},
    "y": {"field": "Major Genre", "type": "nominal"}
  }
}
*/
