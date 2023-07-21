import plugin from 'tailwindcss/plugin';

const plugins = plugin(({ matchUtilities, addUtilities, theme }) => {
  const tablet = theme('screens.tablet', {}) as string;
  const desktop = theme('screens.desktop', {}) as string;

  addUtilities({
    'grid-system': {
      '--grid-columns': '4',
      '--grid-column-width': '56px',
      '--grid-gutter-width': '16px',
      display: 'grid',
      gridTemplateColumns: 'repeat(var(--grid-columns), minmax(0, 1fr))',
      gridColumnGap: 'var(--grid-gutter-width)',
      with: '100%',
      height: '100%',
      maxWidth:
        'calc(var(--grid-column-width) * var(--grid-columns) + var(--grid-gutter-width) * (var(--grid-columns) - 1)',
      margin: '0 auto',
      [`@media (min-width: ${tablet})`]: {
        '--grid-columns': '8',
        '--grid-column-width': '56px',
        '--grid-gutter-width': '32px'
      },
      [`@media (min-width: ${desktop})`]: {
        '--grid-columns': '12',
        '--grid-column-width': '72px',
        '--grid-gutter-width': '32px'
      }
    }
  });

  matchUtilities({
    'grid-column': value => ({
      gridColumn: `span ${value}`
    }),
    'box-size': value => ({
      height: value,
      width: value
    })
  });
});

export default plugins;
