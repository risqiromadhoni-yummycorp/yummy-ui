// @ts-nocheck
import plugin from 'tailwindcss/plugin';
import twYummyPlugin from './plugin';
import colors from '../colors';

const yummyPlugin = plugin(twYummyPlugin, {
  content: [
    { raw: '' },
  ],
  theme: {
    extend: { colors }
  },
});

export default yummyPlugin;
