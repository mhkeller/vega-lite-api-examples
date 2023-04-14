import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Minimum and maxmimum horsepower of cars from different origins.",
  "data": {"url": "data/cars.json"},
  "mark": "rule",
  "encoding": {
    "x": {"field": "Origin"},
    "y": {"field": "Horsepower", "aggregate": "min"},
    "y2": {"field": "Horsepower", "aggregate": "max"}
  }
}
*/
