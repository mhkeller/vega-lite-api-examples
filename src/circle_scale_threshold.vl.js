import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markCircle()
    .data({
      values: [
        {a: 'A', b: 28},
        {a: 'B', b: 55},
        {a: 'C', b: 43},
        {a: 'D', b: 91},
        {a: 'E', b: 81},
        {a: 'F', b: 53},
        {a: 'G', b: 19},
        {a: 'H', b: 87},
        {a: 'I', b: 52}
      ]
    })
    .encode(
      vl.y().fieldN('b').axis({ticks: false, domain: false, title: null}).sort(null),
      vl.size().fieldQ('b')
        .scale({type: 'threshold', type: 'threshold', domain: [30, 70], range: [80, 200, 320]}),
      vl.color().fieldQ('b')
        .scale({type: 'threshold', domain: [30, 70], scheme: 'viridis'})
        .legend({title: 'Threshold'})
    )
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"a": "A", "b": 28}, {"a": "B", "b": 55}, {"a": "C", "b": 43},
      {"a": "D", "b": 91}, {"a": "E", "b": 81}, {"a": "F", "b": 53},
      {"a": "G", "b": 19}, {"a": "H", "b": 87}, {"a": "I", "b": 52}
    ]
  },
  "mark": "circle",
  "encoding": {
    "y": {
      "field": "b",
      "type": "nominal",
      "sort": null,
      "axis": {
        "ticks": false,
        "domain": false,
        "title": null
      }
    },
    "size": {
      "field": "b",
      "type": "quantitative",
      "scale": {
        "type": "threshold",
        "domain": [30, 70],
        "range": [80, 200, 320]
      }
    },
    "color": {
      "field": "b",
      "type": "quantitative",
      "scale": {
        "type": "threshold",
        "domain": [30, 70],
        "scheme": "viridis"
      },
      "legend": {
        "title": "Threshold"
      }
    }
  }
}
*/
