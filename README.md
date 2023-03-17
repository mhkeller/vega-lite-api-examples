Vega-Lite API Examples
===

A repository containing [Vega-Lite-API](https://vega.github.io/vega-lite-api/) implementations of all of the examples in the [Vega-Lite gallery](https://vega.github.io/vega-lite/examples/).

Contributions welcome!

## Usage

Test that all of the chart modules in `src/` return their matching JSON spec defined in `specs/`.

```
npm test
```

## Getting started

See the [`bar_aggregate.vl.js`](./src/bar_aggregate.vl.js) file as an example.

If you want to write an implementation, go to the spec's corresponding JavaScript file in the `src/` folder and begin. To test it, grab the associated test file from `test/todo/` and drop it into the `test` folder (its parent directory). Then run `npm test`.

## Notes

As described in [this issue](https://github.com/vega/vega-lite-api/issues/440), the `mark` field may not match the spec.
