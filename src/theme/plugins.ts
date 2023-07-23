import plugin from 'tailwindcss/plugin';

const plugins = plugin(({ matchUtilities }) => {
  matchUtilities({
    'box-size': value => ({
      height: value,
      width: value
    }),
    'bg-gradient': value => ({
      backgroundImage: `linear-gradient(${value}, var(--tw-gradient-stops));`
    })
  });
});

export default plugins;
