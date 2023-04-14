import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A scatterplot showing horsepower and miles per gallons for various cars.",
  "data": {"url": "data/cars.json"},
  "layer": [{
    "mark": "point",
    "encoding": {
      "x": {"field": "Horsepower", "type": "quantitative"},
      "y": {"field": "Miles_per_Gallon", "type": "quantitative", "title": "Miles per Gallon"}
    }
  },{
    "mark": "rule",
    "encoding": {
      "y": {"aggregate": "min", "field": "Miles_per_Gallon"}
    }
  },{
    "mark": "rule",
    "encoding": {
      "y": {"aggregate": "max", "field": "Miles_per_Gallon"}
    }
  },{
    "mark": "rect",
    "encoding": {
      "y": {"aggregate": "max", "field": "Miles_per_Gallon"},
      "y2": {"aggregate": "min", "field": "Miles_per_Gallon"},
      "opacity": {"value": 0.2}
    }
  }]
}
*/
