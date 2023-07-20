import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markBar({orient: 'vertical'})
    .data('data/cars.json')
    .encode(
      vl.x().fieldT('Year')
    )
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": {"type": "bar", "orient": "vertical"},
  "encoding": {
    "x": {
      "field": "Year",
      "type": "temporal"
    }
  }
}
*/
