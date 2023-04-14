import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
  "data": {"url": "data/cars.json"},
  "mark": "line",
  "encoding": {
    "y": {"aggregate": "mean", "field": "Horsepower"},
    "x": {"field": "Year", "type": "temporal"},
    "color": {"bin": true, "field": "Acceleration"}
  }
}
*/
