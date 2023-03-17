import * as vl from 'vega-lite-api';

export default function chart() {
  return vl.markBar()
    .height({ step: 17 })
    .data('data/population.json')
    .transform(
      vl.filter('datum.year == 2000')
    )
    .encode(
      vl.y().field('age'),
      vl.x().aggregate('sum').field('people').title('population')
    )
    .description('A bar chart showing the US population distribution of age groups in 2000.')
    .toSpec();
}
