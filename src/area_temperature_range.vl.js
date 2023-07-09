import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markArea()
    .width(600)
    .height(300)
    .data('data/seattle-weather.csv')
    .title(`Seattle Temperature Range, 2012-2015`)
    .encode(
      vl.x().field('date').title('Date').axis({format: '%b'}).timeUnit('monthdate'),
      vl.y().field('temp_max').aggregate('max').title('Daily Temperature Range (C)'),
      vl.y2().field('temp_min').aggregate('min'),
      vl.opacity().value(0.7)
    )
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "title": "Seattle Temperature Range, 2012-2015",
  "data": {
    "url": "data/seattle-weather.csv"
  },
  "width": 600,
  "height": 300,
  "mark": "area",
  "encoding": {
    "x": {
      "axis": {"format": "%b"},
      "title": "Date",
      "field": "date",
      "timeUnit": "monthdate"
    },
    "y": {
      "title": "Daily Temperature Range (C)",
      "aggregate": "max",
      "field": "temp_max"
    },
    "y2": {"aggregate": "min", "field": "temp_min"},
    "opacity": { "value": 0.7 }
  }
}
*/
