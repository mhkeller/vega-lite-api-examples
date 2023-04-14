import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing average horsepower and displacement for cars from different origins.",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "encoding": {
    "x": {"aggregate": "mean", "field": "Horsepower"},
    "y": {"aggregate": "mean", "field": "Displacement"},
    "detail": {"field": "Origin"}
  }
}
*/
