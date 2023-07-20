import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  const layer1 = vl
    .markBar({size: 20, color: '#ccc'})
    .encode(
      vl.x().fieldO('id').axis({
        domain: false,
        ticks: false,
        labels: false,
        title: null,
        titlePadding: 25,
        orient: 'top'
      }),
      vl.y().fieldQ('record.low').scale({domain: [10, 70]}).axis({title: 'Temperature (F)'}).type('quantitative'),
      vl.y2().field('record.high')
    );

  const layer2 = vl
    .markBar({size: 20, color: '#999'})
    .encode(
      vl.x().fieldO('id').axis({
        domain: false,
        ticks: false,
        labels: false,
        title: null,
        titlePadding: 25,
        orient: 'top'
      }),
      vl.y().field('normal.low').scale({domain: [10, 70]}).axis({title: 'Temperature (F)'}).type('quantitative'),
      vl.y2().field('normal.high')
    );

  const layer3 = vl
    .markBar({size: 12, color: '#000'})
    .encode(
      vl.x().fieldO('id').axis({
        domain: false,
        ticks: false,
        labels: false,
        title: null,
        titlePadding: 25,
        orient: 'top'
      }),
      vl.y().field('actual.low').scale({domain: [10, 70]}).axis({title: 'Temperature (F)'}).type('quantitative'),
      vl.y2().field('actual.high')
    );

  const layer4 = vl
    .markBar({size: 12, color: '#000'})
    .encode(
      vl.x().fieldO('id').axis({
        domain: false,
        ticks: false,
        labels: false,
        title: null,
        titlePadding: 25,
        orient: 'top'
      }),
      vl.y().field('forecast.low.low').scale({domain: [10, 70]}).axis({title: 'Temperature (F)'}).type('quantitative'),
      vl.y2().field('forecast.low.high')
    );
  
  const layer5 = vl
    .markBar({size: 3, color: '#000'})
    .encode(
      vl.x().fieldO('id').axis({
        domain: false,
        ticks: false,
        labels: false,
        title: null,
        titlePadding: 25,
        orient: 'top'
      }),
      vl.y().field('forecast.low.high').scale({domain: [10, 70]}).axis({title: 'Temperature (F)'}).type('quantitative'),
      vl.y2().field('forecast.high.low')
    );

  const layer6 = vl
    .markBar({size: 12, color: '#000'})
    .encode(
      vl.x().fieldO('id').axis({
        domain: false,
        ticks: false,
        labels: false,
        title: null,
        titlePadding: 25,
        orient: 'top'
      }),
      vl.y().field('forecast.high.low').scale({domain: [10, 70]}).axis({title: 'Temperature (F)'}).type('quantitative'),
      vl.y2().field('forecast.high.high')
    );

  const layer7 = vl
    .markText({align: 'center', baseline: 'bottom', y: -5})
    .encode(
      vl.x().fieldO('id').axis({
        domain: false,
        ticks: false,
        labels: false,
        title: null,
        titlePadding: 25,
        orient: 'top'
      }),
      vl.text().field('day')
    );

  return vl
    .layer(layer1, layer2, layer3, layer4, layer5, layer6, layer7)
    .width(250)
    .height(200)
    .data('data/weather.json')
    .description('A layered bar chart with floating bars representing weekly weather data')
    .title({
      text: ['Weekly Weather', 'Observations and Predictions'],
      frame: 'group'
    })
    .config({ style: { hilo: { size: 20 } } })
    .toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "A layered bar chart with floating bars representing weekly weather data",
  "config": {"style": {"hilo": {"size": 20}}},
  "title": {
    "text": ["Weekly Weather", "Observations and Predictions"],
    "frame": "group"
  },
  "data": {"url": "data/weather.json"},
  "width": 250,
  "height": 200,
  "layer": [
    {
      "mark": {"type": "bar", "size": 20, "color": "#ccc"},
      "encoding": {
        "x": {
          "field": "id",
          "type": "ordinal",
          "axis": {
            "domain": false,
            "ticks": false,
            "labels": false,
            "title": null,
            "titlePadding": 25,
            "orient": "top"
          }
        },
        "y": {
          "type": "quantitative",
          "scale": {"domain": [10, 70]},
          "axis": {"title": "Temperature (F)"},
          "field": "record.low"
        },
        "y2": {"field": "record.high"}
      }
    },
    {
      "mark": {"type": "bar", "size": 20, "color": "#999"},
      "encoding": {
        "x": {
          "field": "id",
          "type": "ordinal",
          "axis": {
            "domain": false,
            "ticks": false,
            "labels": false,
            "title": null,
            "titlePadding": 25,
            "orient": "top"
          }
        },
        "y": {
          "type": "quantitative",
          "scale": {"domain": [10, 70]},
          "axis": {"title": "Temperature (F)"},
          "field": "normal.low"
        },
        "y2": {"field": "normal.high"}
      }
    },
    {
      "mark": {"type": "bar", "size": 12, "color": "#000"},
      "encoding": {
        "x": {
          "field": "id",
          "type": "ordinal",
          "axis": {
            "domain": false,
            "ticks": false,
            "labels": false,
            "title": null,
            "titlePadding": 25,
            "orient": "top"
          }
        },
        "y": {
          "type": "quantitative",
          "scale": {"domain": [10, 70]},
          "axis": {"title": "Temperature (F)"},
          "field": "actual.low"
        },
        "y2": {"field": "actual.high"}
      }
    },
    {
      "mark": {"type": "bar", "size": 12, "color": "#000"},
      "encoding": {
        "x": {
          "field": "id",
          "type": "ordinal",
          "axis": {
            "domain": false,
            "ticks": false,
            "labels": false,
            "title": null,
            "titlePadding": 25,
            "orient": "top"
          }
        },
        "y": {
          "type": "quantitative",
          "scale": {"domain": [10, 70]},
          "axis": {"title": "Temperature (F)"},
          "field": "forecast.low.low"
        },
        "y2": {"field": "forecast.low.high"}
      }
    },
    {
      "mark": {"type": "bar", "size": 3, "color": "#000"},
      "encoding": {
        "x": {
          "field": "id",
          "type": "ordinal",
          "axis": {
            "domain": false,
            "ticks": false,
            "labels": false,
            "title": null,
            "titlePadding": 25,
            "orient": "top"
          }
        },
        "y": {
          "type": "quantitative",
          "scale": {"domain": [10, 70]},
          "axis": {"title": "Temperature (F)"},
          "field": "forecast.low.high"
        },
        "y2": {"field": "forecast.high.low"}
      }
    },
    {
      "mark": {"type": "bar", "size": 12, "color": "#000"},
      "encoding": {
        "x": {
          "field": "id",
          "type": "ordinal",
          "axis": {
            "domain": false,
            "ticks": false,
            "labels": false,
            "title": null,
            "titlePadding": 25,
            "orient": "top"
          }
        },
        "y": {
          "type": "quantitative",
          "scale": {"domain": [10, 70]},
          "axis": {"title": "Temperature (F)"},
          "field": "forecast.high.low"
        },
        "y2": {"field": "forecast.high.high"}
      }
    },
    {
      "mark": {
        "type": "text",
        "align": "center",
        "baseline": "bottom",
        "y": -5
      },
      "encoding": {
        "x": {
          "field": "id",
          "type": "ordinal",
          "axis": {
            "domain": false,
            "ticks": false,
            "labels": false,
            "title": null,
            "titlePadding": 25,
            "orient": "top"
          }
        },
        "text": {"field": "day"}
      }
    }
  ]
}
*/
