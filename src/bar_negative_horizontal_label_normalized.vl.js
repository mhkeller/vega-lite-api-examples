import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function () {
  const layer1 = vl
    .markBar()
    .encode(
      vl.y().fieldN('a').axis({
				domain: false,
				ticks: false,
				labelAngle: 0,
				labelPadding: 4,
			}),
      vl.x().fieldQ('b').axis({
        gridColor: { 
          condition: { test: 'datum.value === 0', value: 'black'},
          value: '#ddd'
        }
      }).scale({padding: 20})
    );

  const layer2 = vl
    .markText({
      align: {expr: `datum.b < 0 ? 'right' : 'left'`},
      dx: {expr: 'datum.b < 0 ? -2 : 2'}
    })
    .encode(
      vl.y().fieldN('a').axis({
				domain: false,
				ticks: false,
				labelAngle: 0,
				labelPadding: 4,
			}),
      vl.x().fieldQ('b').axis({
        gridColor: { 
          condition: { test: 'datum.value === 0', value: 'black'},
          value: '#ddd'
        }
      }).scale({padding: 20}),
      vl.text().fieldQ('b')
    );

  return vl
    .layer(layer1, layer2)
    .data({
      values: [
        {a: 'A', b: -28},
        {a: 'B', b: 55},
        {a: 'C', b: -33},
        {a: 'D', b: 91},
        {a: 'E', b: 81},
        {a: 'F', b: 53},
        {a: 'G', b: -19},
        {a: 'H', b: 87},
        {a: 'I', b: 52},
      ]
    })
    .description('A bar chart with negative values. We can hide the axis domain line, and instead use a conditional grid color to draw a zero baseline.')
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A bar chart with negative values. We can hide the axis domain line, and instead use a conditional grid color to draw a zero baseline.",
  "data": {
    "values": [
      {"a": "A", "b": -28},
      {"a": "B", "b": 55},
      {"a": "C", "b": -33},
      {"a": "D", "b": 91},
      {"a": "E", "b": 81},
      {"a": "F", "b": 53},
      {"a": "G", "b": -19},
      {"a": "H", "b": 87},
      {"a": "I", "b": 52}
    ]
  },
  "layer": [
    {
      "mark": "bar",
      "encoding": {
        "y": {
          "field": "a",
          "type": "nominal",
          "axis": {
            "domain": false,
            "ticks": false,
            "labelAngle": 0,
            "labelPadding": 4
          }
        },
        "x": {
          "field": "b",
          "type": "quantitative",
          "scale": {"padding": 20},
          "axis": {
            "gridColor": {
              "condition": {"test": "datum.value === 0", "value": "black"},
              "value": "#ddd"
            }
          }
        }
      }
    },
    {
      "mark": {
        "type": "text",
        "align": {"expr": "datum.b < 0 ? 'right' : 'left'"},
        "dx": {"expr": "datum.b < 0 ? -2 : 2"}
      },
      "encoding": {
        "y": {
          "field": "a",
          "type": "nominal",
          "axis": {
            "domain": false,
            "ticks": false,
            "labelAngle": 0,
            "labelPadding": 4
          }
        },
        "x": {
          "field": "b",
          "type": "quantitative",
          "scale": {"padding": 20},
          "axis": {
            "gridColor": {
              "condition": {"test": "datum.value === 0", "value": "black"},
              "value": "#ddd"
            }
          }
        },
        "text": {"field": "b", "type": "quantitative"}
      }
    }
  ]
}
*/
