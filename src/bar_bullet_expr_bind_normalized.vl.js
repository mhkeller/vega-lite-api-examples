import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart() {
	return vl
		.data([
			{
				title: 'Revenue',
				subtitle: 'US$, in thousands',
				ranges: [150, 225, 300],
				measures: [220, 270],
				markers: [250]
			}
		])
		.config({ tick: { thickness: 2 } })
		.params([
			{
				name: 'height',
				value: 20,
				bind: { input: 'range', min: 1, max: 100, step: 1 }
			},
			{ name: 'innerBarSize', expr: 'height/2' }
		])
		.layer([
			vl
				.markBar({
					color: '#eee',
					size: { expr: 'height' }
				})
				.encode(
					vl
						.x()
						.fieldQ('ranges[2]')
						.scale({ nice: false })
						.title(null)
				),
			vl
				.markBar({
					color: '#ddd',
					size: { expr: 'height' }
				})
				.encode(
					vl
						.x()
						.fieldQ('ranges[1]')
						.scale({ nice: false })
						.title(null)
				),
			vl
				.markBar({
					color: '#ccc',
					size: { expr: 'height' }
				})
				.encode(
					vl
						.x()
						.fieldQ('ranges[0]')
						.scale({ nice: false })
						.title(null)
				),
			vl
				.markBar({
					color: 'lightsteelblue',
					size: { expr: 'innerBarSize' }
				})
				.encode(
					vl
						.x()
						.fieldQ('measures[1]')
						.scale({ nice: false })
						.title(null)
				),
			vl
				.markBar({
					color: 'steelblue',
					size: { expr: 'innerBarSize' }
				})
				.encode(
					vl
						.x()
						.fieldQ('measures[0]')
						.scale({ nice: false })
						.title(null)
				),
			vl
				.markTick({
					color: 'black',
					thickness: 2,
					size: { expr: 'height' }
				})
				.encode(
					vl
						.x()
						.fieldQ('markers[0]')
						.scale({ nice: false })
						.title(null)
				)
		])
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {
        "title": "Revenue",
        "subtitle": "US$, in thousands",
        "ranges": [150, 225, 300],
        "measures": [220, 270],
        "markers": [250]
      }
    ]
  },
  "params": [
    {
      "name": "height",
      "value": 20,
      "bind": {"input": "range", "min": 1, "max": 100, "step": 1}
    },
    {"name": "innerBarSize", "expr": "height/2"}
  ],
  "layer": [
    {
      "mark": {"type": "bar", "color": "#eee", "size": {"expr": "height"}},
      "encoding": {
        "x": {
          "type": "quantitative",
          "scale": {"nice": false},
          "title": null,
          "field": "ranges[2]"
        }
      }
    },
    {
      "mark": {"type": "bar", "color": "#ddd", "size": {"expr": "height"}},
      "encoding": {
        "x": {
          "type": "quantitative",
          "scale": {"nice": false},
          "title": null,
          "field": "ranges[1]"
        }
      }
    },
    {
      "mark": {"type": "bar", "color": "#ccc", "size": {"expr": "height"}},
      "encoding": {
        "x": {
          "type": "quantitative",
          "scale": {"nice": false},
          "title": null,
          "field": "ranges[0]"
        }
      }
    },
    {
      "mark": {
        "type": "bar",
        "color": "lightsteelblue",
        "size": {"expr": "innerBarSize"}
      },
      "encoding": {
        "x": {
          "type": "quantitative",
          "scale": {"nice": false},
          "title": null,
          "field": "measures[1]"
        }
      }
    },
    {
      "mark": {
        "type": "bar",
        "color": "steelblue",
        "size": {"expr": "innerBarSize"}
      },
      "encoding": {
        "x": {
          "type": "quantitative",
          "scale": {"nice": false},
          "title": null,
          "field": "measures[0]"
        }
      }
    },
    {
      "mark": {"type": "tick", "color": "black", "size": {"expr": "height"}},
      "encoding": {
        "x": {
          "type": "quantitative",
          "scale": {"nice": false},
          "title": null,
          "field": "markers[0]"
        }
      }
    }
  ],
  "config": {"tick": {"thickness": 2}}
}
*/
