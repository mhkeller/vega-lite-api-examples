Vega-Lite API Examples
===
[![tests](https://github.com/mhkeller/vega-lite-api-examples/actions/workflows/node.js.yml/badge.svg)](https://github.com/mhkeller/vega-lite-api-examples/actions/workflows/node.js.yml)

> Examples completed: TK_TESTS / TK_TOTAL

- [Usage](#usage)
- [Getting started](#getting-started)
- [Notes](#notes)
- [Example list (Completed: TK\_TESTS / TK\_TOTAL)](#example-list-completed-tk_tests--tk_total)

A repository containing [Vega-Lite-API](https://vega.github.io/vega-lite-api/) implementations of all of the examples in the [Vega-Lite gallery](https://vega.github.io/vega-lite/examples/).

Contributions welcome!

## Usage

Test that all of the chart modules in `src/` return their matching JSON spec defined in `specs/`.

```
npm test
```

## Getting started

See the [`bar_aggregate.vl.js`](./src/bar_aggregate.vl.js) file as an example.

If you want to write an implementation, go to a file in the `src/` folder and create a default function that exports a vega-lite spec. To test it, run `npm test`.

Tests are automatically generated when you run `npm test`. See the list below for which examples have already been created.

## Notes

1. As described in [this issue](https://github.com/vega/vega-lite-api/issues/440), the `mark` field may not match the spec.
2. In the [`arc_pie_pyramid`](src/arc_pie_pyramid.vl.js) file, the ordinal `type` field is added but is not present in the spec: 

```json
"order": {
  "field": "order",
  "type": "ordinal"
}
```

## Example list (Completed: TK_TESTS / TK_TOTAL)
