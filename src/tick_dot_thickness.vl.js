import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markTick()
		.data('data/cars.json')
		.encode(vl.x().fieldQ('Horsepower'))
		.config({ tick: { thickness: 2, bandSize: 10 } })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {"url": "data/cars.json"},
  "mark": "tick",
  "encoding": {
    "x": {"field": "Horsepower", "type": "quantitative"}
  },
  "config": {
    "tick": {
      "thickness": 2,
      "bandSize": 10
    }
  }
}
*/
