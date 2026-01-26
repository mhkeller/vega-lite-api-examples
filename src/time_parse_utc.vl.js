import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markPoint()
		.description('Parsing a date in utc and outputting utc.')
		.data({
			values: [{ date: '2011-10-10' }, { date: '2011-10-12' }]
		})
		.encode(vl.y().timeUnit('utchours').fieldO('date').title('time'))
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Parsing a date in utc and outputting utc.",
  "data": {
    "values": [
      {"date": "2011-10-10"},
      {"date": "2011-10-12"}
    ]
  },
  "mark": "point",
  "encoding": {
    "y": {
      "timeUnit": "utchours",
      "field": "date",
      "type": "ordinal",
      "title": "time"
    }
  }
}
*/
