import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart () {
	return vl
		.markCircle({
			opacity: 0.8,
			stroke: 'black',
			strokeWidth: 1
		})
		.width(600)
		.height(400)
		.data('data/disasters.csv')
		.transform(vl.filter(`datum.Entity !== 'All natural disasters'`))
		.encode(
			vl.x().fieldT('Year').axis({ grid: false }),
			vl.y().fieldN('Entity').axis({ title: '' }),
			vl.size().fieldQ('Deaths').title('Annual Global Deaths')
				.legend({ clipHeight: 30 }).scale({ rangeMax: 5000 }),
			vl.color().fieldN('Entity').legend(null)
		)
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "url": "data/disasters.csv"
  },
  "width": 600,
  "height": 400,
  "transform": [
    {"filter": "datum.Entity !== 'All natural disasters'"}
  ],
  "mark": {
    "type": "circle",
    "opacity": 0.8,
    "stroke": "black",
    "strokeWidth": 1
  },
  "encoding": {
    "x": {
      "field": "Year",
      "type": "temporal",
      "axis": {"grid": false}
    },
    "y": {"field": "Entity", "type": "nominal", "axis": {"title": ""}},
    "size": {
      "field": "Deaths",
      "type": "quantitative",
      "title": "Annual Global Deaths",
      "legend": {"clipHeight": 30},
      "scale": {"rangeMax": 5000}
    },
    "color": {"field": "Entity", "type": "nominal", "legend": null}
  }
}
*/
