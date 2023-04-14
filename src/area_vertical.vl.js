import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Area chart showing weight of cars over time (vertical).",
  "data": {"url": "data/cars.json"},
  "mark": {
    "type": "area",
    "interpolate": "monotone"
  },
  "encoding": {
    "x": {"aggregate": "sum", "field": "Weight_in_lbs"},
    "y": {"timeUnit": "year", "field": "Year"}
  }
}
*/
