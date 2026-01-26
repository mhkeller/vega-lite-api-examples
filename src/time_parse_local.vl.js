import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markPoint()
		.description('Non-ISO time strings are parsed as local time.')
		.data({
			values: [
				{ date: '10 Oct 2011 22:48:00' },
				{ date: '11 Oct 2022 23:00:00' }
			]
		})
		.encode(
			vl.y().timeUnit('hoursminutes').fieldO('date').title('time')
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Non-ISO time strings are parsed as local time.",
  "data": {
    "values": [
      {"date": "10 Oct 2011 22:48:00"},
      {"date": "11 Oct 2022 23:00:00"}
    ]
  },
  "mark": "point",
  "encoding": {
    "y": {
      "timeUnit": "hoursminutes",
      "field": "date",
      "type": "ordinal",
      "title": "time"
    }
  }
}
*/
