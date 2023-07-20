import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markBar()
    .data('data/cars.json')
    .encode(
      vl.x().fieldN('Cylinders'),
      vl.xOffset().fieldN('Origin'),
      vl.y().aggregate('sum').fieldQ('Weight_in_lbs'),
      vl.color().timeUnit('year').fieldN('Year').scale({scheme: 'category20'})
    )
    .toSpec();
}

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
