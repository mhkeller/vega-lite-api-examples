import * as vl from 'vega-lite-api';



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
	return vl
		.markPoint()
		.description('Using format parse to parsing of input time data as utc time.')
		.data({
			values: [
				{ date: '10 Oct 2011 22:48:00' },
				{ date: '11 Oct 2022 23:00:00' }
			],
			format: { parse: { date: "utc:'%d %b %Y %H:%M:%S'" } }
		})
		.encode(
			vl.y().timeUnit('hoursminutes').field('date').type('ordinal').title('time')
		)
		.toSpec();
}
