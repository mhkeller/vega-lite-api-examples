import * as vl from 'vega-lite-api';
// import { hconcat } from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  /*
  {
    "title": "Single Arc",
    "data": {"values": [{}]},
    "mark": {
      "type": "arc",
      "radius": {"expr": "radius"},
      "radius2": {"expr": "radius2"},
      "theta": {"expr": "theta_single_arc"},
      "theta2": {"expr": "theta2_single_arc"},
      "cornerRadius": {"expr": "cornerRadius"},
      "padAngle": {"expr": "padAngle"},
      "strokeWidth": {"expr": "strokeWidth"}
    }
    */
  const singleArc = vl
    .markArc(
      {
        radius: {expr: 'radius'},
        radius2: {expr: 'radius2'},
        theta: {expr: 'theta_single_arc'},
        theta2: {expr: 'theta2_single_arc'},
        cornerRadius: {expr: 'cornerRadius'},
        padAngle: {expr: 'padAngle'},
        strokeWidth: {expr: 'strokeWidth'}
      }
    )
    .title('Single Arc')
    .data({values: [{}]})

  const stackedArcs = vl
      .markArc({
        theta: {expr: 'theta'},
        theta2: {expr: 'theta2'},
        radius: {expr: 'radius'},
        radius2: {expr: 'radius2'},
        cornerRadius: {expr: 'cornerRadius'},
        padAngle: {expr: 'padAngle'},
        strokeWidth: {expr: 'strokeWidth'}
      })
      .title('Stacked Arcs')
      .data({
        "values": [
          {"category": 1, "value": 4},
          {"category": 2, "value": 6},
          {"category": 3, "value": 10},
          {"category": 4, "value": 3},
          {"category": 5, "value": 7},
          {"category": 6, "value": 8}
        ]
      })
      .encode(
        vl.theta().fieldQ('value'),
        vl.color().fieldN('category')
      )
  // const z = vl.hconcat()

  return vl
    .hconcat(singleArc, stackedArcs)
    .description('A simple pie chart with embedded data.')
    .params([
      { "name": "radius", "value": 0,
        "bind": {"input": "range", "min": 0, "max": 100, "step": 1} },
      { "name": "radius2", "value": 50,
        "bind": {"input": "range", "min": 0, "max": 100, "step": 1} },
      { "name": "theta_single_arc", "value": -0.73,
        "bind": {"input": "range", "min": -6.28, "max": 6.28} },
      { "name": "theta2_single_arc", "value": 0.73,
        "bind": {"input": "range", "min": -6.28, "max": 6.28} },
      { "name": "cornerRadius", "value": 0,
        "bind": {"input": "range", "min": 0, "max": 50, "step": 1} },
      { "name": "padAngle", "value": 0,
        "bind": {"input": "range", "min": 0, "max": 1.57} },
      { "name": "strokeWidth", "value": 4,
        "bind": {"input": "range", "min": 0, "max": 10, "step": 0.5} }
    ])
    .toSpec();
}
/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A simple pie chart with embedded data.",
  "params": [
    { "name": "radius", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 100, "step": 1} },
    { "name": "radius2", "value": 50,
      "bind": {"input": "range", "min": 0, "max": 100, "step": 1} },
    { "name": "theta_single_arc", "value": -0.73,
      "bind": {"input": "range", "min": -6.28, "max": 6.28} },
    { "name": "theta2_single_arc", "value": 0.73,
      "bind": {"input": "range", "min": -6.28, "max": 6.28} },
    { "name": "cornerRadius", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 50, "step": 1} },
    { "name": "padAngle", "value": 0,
      "bind": {"input": "range", "min": 0, "max": 1.57} },
    { "name": "strokeWidth", "value": 4,
      "bind": {"input": "range", "min": 0, "max": 10, "step": 0.5} }
  ],
  "hconcat": [{
    "title": "Single Arc",
    "data": {"values": [{}]},
    "mark": {
      "type": "arc",
      "radius": {"expr": "radius"},
      "radius2": {"expr": "radius2"},
      "theta": {"expr": "theta_single_arc"},
      "theta2": {"expr": "theta2_single_arc"},
      "cornerRadius": {"expr": "cornerRadius"},
      "padAngle": {"expr": "padAngle"},
      "strokeWidth": {"expr": "strokeWidth"}
    }
  },{
    "title": "Stacked Arcs",
    "data": {
      "values": [
        {"category": 1, "value": 4},
        {"category": 2, "value": 6},
        {"category": 3, "value": 10},
        {"category": 4, "value": 3},
        {"category": 5, "value": 7},
        {"category": 6, "value": 8}
      ]
    },
    "mark": {
      "type": "arc",
      "theta": {"expr": "theta"},
      "theta2": {"expr": "theta2"},
      "radius": {"expr": "radius"},
      "radius2": {"expr": "radius2"},
      "cornerRadius": {"expr": "cornerRadius"},
      "padAngle": {"expr": "padAngle"},
      "strokeWidth": {"expr": "strokeWidth"}
    },
    "encoding": {
      "theta": {"field": "value", "type": "quantitative"},
      "color": {"field": "category", "type": "nominal"}
    }
  }]
}
*/
