import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
	return vl
		.markBar()
		.description('Customizing time scale domain.')
		.data([
			{ a: 'December 17, 1995 03:00:00', b: 28 },
			{ a: 'December 17, 1995 09:00:00', b: 30 },
			{ a: 'December 17, 1995 15:00:00', b: 30 }
		])
		.encode(
			vl
				.x()
				.timeUnit('hours')
				.field('a')
				.scale({ domain: [{ hours: 0 }, { hours: 24 }] }),
			vl.y().fieldQ('b')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Customizing time scale domain.",
  "data": {
    "values": [
      {"a": "December 17, 1995 03:00:00", "b": 28},
      {"a": "December 17, 1995 09:00:00", "b": 30},
      {"a": "December 17, 1995 15:00:00", "b": 30}
    ]
  },
  "mark": "bar",
  "encoding": {
    "x": {
      "timeUnit": "hours",
      "field": "a",
      "scale": {
        "domain": [{"hours": 0}, {"hours": 24}]
      }
    },
    "y": {"field": "b", "type": "quantitative"}
  }
}
*/
