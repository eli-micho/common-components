import ThemeKnobWrapper from '../decorators/ThemeKnob';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    expanded: true,
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  layout: 'fullscreen',
};

export const decorators = [
  (Story) => (
    <ThemeKnobWrapper>
      <Story />
    </ThemeKnobWrapper>
  ),
];
