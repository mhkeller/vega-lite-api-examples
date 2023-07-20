import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markArea()
    .width(300)
    .height(200)
    .data('data/unemployment-across-industries.json')
    .encode(
      vl.x().timeUnit('yearmonth').field('date').axis({format: '%Y'}),
      vl.y().aggregate('sum').field('count').title('count')
    )
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "width": 300,
  "height": 200,
  "data": {"url": "data/unemployment-across-industries.json"},
  "mark": "area",
  "encoding": {
    "x": {
      "timeUnit": "yearmonth", "field": "date",
      "axis": {"format": "%Y"}
    },
    "y": {
      "aggregate": "sum", "field": "count",
      "title": "count"
    }
  }
}
*/
