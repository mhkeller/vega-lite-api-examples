import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bubbleplot showing horsepower on x, miles per gallons on y, and weight with a diverging color scale.",
  "data": {"url": "data/cars.json"},
  "mark": "point",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {
      "field": "Weight_in_lbs",
      "type": "quantitative",
      "scale": {
        "domainMid": 3250,
        "range": "diverging"
      }
    }
  }
}
*/
