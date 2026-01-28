import * as vl from 'vega-lite-api';



/*
{
  "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
  "description": "Anscombe's Quartet",
  "data": {"url": "data/anscombe.json"},
  "mark": "circle",
  "params": [
    {
      "name": "brush",
      "select": {
        "type": "interval",
        "encodings": ["x"],
        "resolve": "intersect",
        "on": "[mousedown[event.shiftKey], mouseup] > mousemove",
        "translate": "[mousedown[event.shiftKey], mouseup] > mousemove"
      }
    },
    {
      "name": "grid",
      "select": {
        "type": "interval",
        "resolve": "global",
        "translate": "[mousedown[!event.shiftKey], mouseup] > mousemove"
      },
      "bind": "scales"
    },
    {
      "name": "xenc",
      "select": {
        "type": "point",
        "fields": ["X"],
        "resolve": "global",
        "on": "mouseover",
        "nearest": true
      },
      "bind": {"input": "number"}
    }
  ],
  "encoding": {
    "column": {"field": "Series"},
    "x": {
      "field": "X",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "y": {
      "field": "Y",
      "type": "quantitative",
      "scale": {"zero": false}
    },
    "size": {
      "value": 100,
      "condition": {"param": "brush", "value": 250}
    },
    "color": {
      "value": "steelblue",
      "condition": {
        "param": "xenc",
        "value": "red"
      }
    },
    "opacity": {"value": 1}
  }
}
*/

export default function chart() {
	const brush = vl.selectInterval('brush')
		.encodings('x')
		.resolve('intersect')
		.on('[mousedown[event.shiftKey], mouseup] > mousemove')
		.translate('[mousedown[event.shiftKey], mouseup] > mousemove');

	const grid = vl.selectInterval('grid')
		.resolve('global')
		.translate('[mousedown[!event.shiftKey], mouseup] > mousemove')
		.bind('scales');

	const xenc = vl.selectPoint('xenc')
		.fields('X')
		.resolve('global')
		.on('mouseover')
		.nearest(true)
		.bind({ input: 'number' });

	return vl
		.markCircle()
		.description("Anscombe's Quartet")
		.data('data/anscombe.json')
		.params(brush, grid, xenc)
		.encode(
			vl.column().field('Series'),
			vl.x().fieldQ('X').scale({ zero: false }),
			vl.y().fieldQ('Y').scale({ zero: false }),
			vl.size().value(100).condition({ param: 'brush', value: 250 }),
			vl.color().value('steelblue').condition({ param: 'xenc', value: 'red' }),
			vl.opacity().value(1)
		)
		.toSpec();
}
