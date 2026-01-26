import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.layer(
			vl.markRule().encode(
				vl.x().fieldO('age'),
				vl.y().aggregate('min').fieldQ('people').title('population'),
				vl.y2().aggregate('max').field('people')
			),
			vl.markTick().encode(
				vl.x().fieldO('age'),
				vl.y().aggregate('min').fieldQ('people').title('population'),
				vl.size().value(5)
			),
			vl.markTick().encode(
				vl.x().fieldO('age'),
				vl.y().aggregate('max').fieldQ('people').title('population'),
				vl.size().value(5)
			),
			vl.markPoint().encode(
				vl.x().fieldO('age'),
				vl.y().aggregate('mean').fieldQ('people').title('population'),
				vl.size().value(2)
			)
		)
		.description(
			'A error bar plot showing mean, min, and max in the US population distribution of age groups in 2000.'
		)
		.data('data/population.json')
		.transform({ filter: 'datum.year == 2000' })
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A error bar plot showing mean, min, and max in the US population distribution of age groups in 2000.",
  "data": {"url": "data/population.json"},
  "transform": [{"filter": "datum.year == 2000"}],
  "layer": [
    {
      "mark": "rule",
      "encoding": {
        "x": {"field": "age", "type": "ordinal"},
        "y": {
          "aggregate": "min",
          "field": "people",
          "type": "quantitative",
          "title": "population"
        },
        "y2": {
          "aggregate": "max",
          "field": "people"
        }
      }
    },
    {
      "mark": "tick",
      "encoding": {
        "x": {"field": "age", "type": "ordinal"},
        "y": {
          "aggregate": "min",
          "field": "people",
          "type": "quantitative",
          "title": "population"
        },
        "size": {"value": 5}
      }
    },
    {
      "mark": "tick",
      "encoding": {
        "x": {"field": "age", "type": "ordinal"},
        "y": {
          "aggregate": "max",
          "field": "people",
          "type": "quantitative",
          "title": "population"
        },
        "size": {"value": 5}
      }
    },
    {
      "mark": "point",
      "encoding": {
        "x": {"field": "age", "type": "ordinal"},
        "y": {
          "aggregate": "mean",
          "field": "people",
          "type": "quantitative",
          "title": "population"
        },
        "size": {"value": 2}
      }
    }
  ]
}
*/
