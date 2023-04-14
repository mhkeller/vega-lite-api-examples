import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate the vega-lite JSON spec below.
 * The function should return the vega-lite-api object.
 */


/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 400,
  "height": 100,
  "data": {"url": "data/cars.json"},
  "mark": "area",
  "transform": [
    {
      "fold": [
        "Displacement",
        "Horsepower"
      ],
      "as": ["Measurement", "value"]
    },
    {
      "density": "value",
      "bandwidth": 10,
      "groupby": ["Measurement"],
      "extent": [10, 500],
      "counts": true,
      "steps": 200
    }
  ],
  "encoding": {
    "x": {
      "field": "value",
      "type": "quantitative"
    },
    "y": {
      "field": "density",
      "type": "quantitative",
      "stack": "zero"
    },
    "color": {
      "field": "Measurement",
      "type": "nominal"
    }
  }
}
*/
