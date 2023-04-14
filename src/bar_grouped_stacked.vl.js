import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": "bar",
  "encoding": {
    "x": {"field": "Cylinders", "type": "nominal"},
    "xOffset": {"field": "Origin", "type": "nominal"},
    "y": {"aggregate": "sum", "field": "Weight_in_lbs", "type": "quantitative"},
    "color": {"timeUnit": "year", "field": "Year", "type": "nominal", "scale": {"scheme": "category20"}}
  }
}
*/
