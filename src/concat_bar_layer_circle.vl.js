import * as vl from 'vega-lite-api';

export default function chart() {
  return vl
    .data({ url: 'data/movies.json' })
    .vconcat(
      vl.layer(
        vl.markCircle({ opacity: 0.4 })
          .encode(
            vl.x().bin({ maxbins: 10 }).field('IMDB Rating'),
            vl.y().bin({ maxbins: 10 }).field('Rotten Tomatoes Rating'),
            vl.size().aggregate('count').title('All Movies Count')
          )
          .transform(vl.filter({ param: 'pts' })),
        vl.markCircle()
          .encode(
            vl.x().bin({ maxbins: 10 }).field('IMDB Rating'),
            vl.y().bin({ maxbins: 10 }).field('Rotten Tomatoes Rating'),
            vl.size().aggregate('count').title('Selected Category Count')
          )
      ).resolve(vl.legend({ size: 'independent' })),
      vl.layer(
        vl.markBar({ width: 330, height: 120 })
          .encode(
            vl.x().field('Major Genre').axis({ labelAngle: -40 }),
            vl.y().aggregate('count'),
            vl.color().condition(
              { param: 'pts', value: 'steelblue' },
              vl.value('grey')
            )
          )
      )
    )
    .toSpec();
}
