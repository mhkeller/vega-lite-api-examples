import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */
export default function chart () {
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
		.encode(
			vl.x().type('quantitative').scale({ nice: false }).title(null)
		)
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
				.markBar({ color: '#eee', size: { expr: 'height' } })
				.encode(vl.x().field('ranges[2]')),
			vl
				.markBar({ color: '#ddd', size: { expr: 'height' } })
				.encode(vl.x().field('ranges[1]')),
			vl
				.markBar({ color: '#ccc', size: { expr: 'height' } })
				.encode(vl.x().field('ranges[0]')),
			vl
				.markBar({ color: 'lightsteelblue', size: { expr: 'innerBarSize' } })
				.encode(vl.x().field('measures[1]')),
			vl
				.markBar({ color: 'steelblue', size: { expr: 'innerBarSize' } })
				.encode(vl.x().field('measures[0]')),
			vl
				.markTick({ color: 'black', thickness: 2, size: { expr: 'height' } })
				.encode(vl.x().field('markers[0]'))
		])
		.toSpec();
}

/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "data": {
    "values": [
      {"title":"Revenue", "subtitle":"US$, in thousands", "ranges":[150,225,300],"measures":[220,270],"markers":[250]}
    ]
  },
  "params": [{
    "name": "height",
    "value": 20,
    "bind": {"input": "range", "min": 1, "max": 100, "step": 1}
  },{
    "name": "innerBarSize",
    "expr": "height/2"
  }],
  "encoding": {
    "x": {
      "type": "quantitative",
      "scale": {"nice": false},
      "title": null
    }
  },
  "layer": [{
    "mark": {"type": "bar", "color": "#eee", "size": {"expr": "height"}},
    "encoding": {"x": {"field": "ranges[2]"}}
  },{
    "mark": {"type": "bar", "color": "#ddd", "size": {"expr": "height"}},
    "encoding": {"x": {"field": "ranges[1]"}}
  },{
    "mark": {"type": "bar", "color": "#ccc", "size": {"expr": "height"}},
    "encoding": {"x": {"field": "ranges[0]"}}
  },{
    "mark": {"type": "bar", "color": "lightsteelblue", "size": {"expr": "innerBarSize"}},
    "encoding": {"x": {"field": "measures[1]"}}
  },{
    "mark": {"type": "bar", "color": "steelblue", "size": {"expr": "innerBarSize"}},
    "encoding": {"x": {"field": "measures[0]"}}
  },{
    "mark": {"type": "tick", "color": "black", "size": {"expr": "height"}},
    "encoding": {"x": {"field": "markers[0]"}}
  }],
  "config": {"tick": {"thickness": 2}}
}
*/
