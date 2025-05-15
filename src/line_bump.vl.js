import * as vl from 'vega-lite-api';

/**
 * Write a Node.JS function that uses the vega-lite-api library to
 * generate and return the vega-lite JSON spec below.
 */

export default function chart() {
  return vl
    .markLine({ point: true })
    .data({
      values: [
        { build: 1, result: 'PASSED' },
        { build: 2, result: 'PASSED' },
        { build: 3, result: 'FAILED' },
        { build: 4, result: 'FAILED' },
        { build: 5, result: 'SKIPPED' },
        { build: 6, result: 'PASSED' },
        { build: 7, result: 'PASSED' },
        { build: 8, result: 'FAILED' },
        { build: 9, result: 'PASSED' },
        { build: 10, result: 'PASSED' },
        { build: 11, result: 'SKIPPED' },
        { build: 12, result: 'PASSED' },
        { build: 13, result: 'PASSED' },
        { build: 14, result: 'FAILED' },
        { build: 15, result: 'PASSED' },
        { build: 16, result: 'SKIPPED' }
      ]
    })
    .description('Bump chart')
    .encode(
      vl.x().fieldQ('build'),
      vl.y().fieldN('result'),
      vl.order().fieldQ('build')
    )
    .toSpec();
}
