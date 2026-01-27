import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Using format parse to parsing of input time data as utc time.",
  "data": {
    "values": [
      {"date": "10 Oct 2011 22:48:00"},
      {"date": "11 Oct 2022 23:00:00"}
    ],
    "format": {
      "parse": {"date": "utc:'%d %b %Y %H:%M:%S'"}
    }
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

export default function chart() {
	return {
		$schema: 'https://vega.github.io/schema/vega-lite/v5.json',
		description: 'Using format parse to parsing of input time data as utc time.',
		data: {
			values: [
				{ date: '10 Oct 2011 22:48:00' },
				{ date: '11 Oct 2022 23:00:00' }
			],
			format: { parse: { date: "utc:'%d %b %Y %H:%M:%S'" } }
		},
		mark: { type: 'point' },
		encoding: {
			y: { timeUnit: 'hoursminutes', field: 'date', type: 'ordinal', title: 'time' }
		}
	};
}
