import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.data('data/normal-2d.json')
		.transform(
			vl.quantile('u').step(0.01).as(['p', 'v']),
			vl.calculate('quantileUniform(datum.p)').as('unif'),
			vl.calculate('quantileNormal(datum.p)').as('norm')
		)
		.hconcat(
			vl
				.markPoint()
				.encode(vl.x().fieldQ('unif'), vl.y().fieldQ('v')),
			vl
				.markPoint()
				.encode(vl.x().fieldQ('norm'), vl.y().fieldQ('v'))
		)
		.toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/normal-2d.json"
  },
  "transform": [
    {
      "quantile": "u",
      "step": 0.01,
      "as": [
        "p",
        "v"
      ]
    },
    {
      "calculate": "quantileUniform(datum.p)",
      "as": "unif"
    },
    {
      "calculate": "quantileNormal(datum.p)",
      "as": "norm"
    }
  ],
  "hconcat": [
    {
      "mark": "point",
      "encoding": {
        "x": {
          "field": "unif",
          "type": "quantitative"
        },
        "y": {
          "field": "v",
          "type": "quantitative"
        }
      }
    },
    {
      "mark": "point",
      "encoding": {
        "x": {
          "field": "norm",
          "type": "quantitative"
        },
        "y": {
          "field": "v",
          "type": "quantitative"
        }
      }
    }
  ]
}
*/
