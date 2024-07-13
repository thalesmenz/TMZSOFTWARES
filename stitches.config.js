import { createStitches } from '@stitches/react';

export const { styled, getCssText, globalCss } = createStitches({
  theme: {
    colors: {
      primary: '#0070f3',
      secondary: '#1db954',
      hiContrast: 'black',
      loContrast: 'white',
    },
    fonts: {
      system: 'system-ui, sans-serif',
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
    },
  },
  media: {
    bp1: '(min-width: 480px)',
    bp2: '(min-width: 768px)',
    bp3: '(min-width: 1024px)',
  },
  utils: {
    marginX: (value) => ({ marginLeft: value, marginRight: value }),
    paddingX: (value) => ({ paddingLeft: value, paddingRight: value }),
  },
});

