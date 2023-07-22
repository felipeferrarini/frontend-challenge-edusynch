import plugin from 'tailwindcss/plugin';

const plugins = plugin(({ matchUtilities }) => {
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
