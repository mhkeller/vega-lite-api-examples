import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
	return vl
		.markPoint({ tooltip: true })
		.description('Testing global number formatting config')
		.width(150)
		.height(150)
		.data('data/cars.json')
		.encode(
			vl.x().fieldT('Year'),
			vl.y().fieldQ('Miles_per_Gallon'),
			vl.color().fieldQ('Acceleration'),
			vl.size().field('Displacement').bin(true).type('quantitative'),
			vl.facet().field('Weight_in_lbs').bin({ maxbins: 4 }).columns(3)
		)
		.config({
			numberFormat: '1.0',
			numberFormatType: 'pow',
			customFormatTypes: true
		})
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Testing global number formatting config",
  "width": 150,
  "height": 150,
  "data": {"url": "data/cars.json"},
  "mark": {"type": "point", "tooltip": true},
  "encoding": {
    "x": {"field": "Year", "type": "temporal"},
    "y": {"field": "Miles_per_Gallon", "type": "quantitative"},
    "color": {"field": "Acceleration", "type": "quantitative"},
    "size": {"bin": true, "field": "Displacement", "type": "quantitative"},
    "facet": {"bin": {"maxbins": 4}, "field": "Weight_in_lbs", "columns": 3}
  },
  "config": {
    "numberFormat": "1.0",
    "numberFormatType": "pow",
    "customFormatTypes": true
  }
}
*/
