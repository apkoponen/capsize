import React, { ReactElement, createContext } from 'react';
import {
  ThemeProvider,
  ColorModeProvider,
  CSSReset,
  theme,
} from '@chakra-ui/core';
import siteFonts from '../siteFonts.json';

const fontContext = createContext(siteFonts[0]);
export default fontContext;

interface SiteFontProviderProps {
  children: ReactElement;
}

const siteFont = siteFonts[2];

const siteTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    brand: {
      900: '#18b6b9',
      800: '#18a7b9',
    },
  },
};

export function SiteProvider({ children }: SiteFontProviderProps) {
  return (
    <ThemeProvider theme={siteTheme}>
      <ColorModeProvider value="light">
        <CSSReset />
        <fontContext.Provider value={siteFont}>
          <link
            href={`https://fonts.googleapis.com/css2?family=Roboto`}
            rel="stylesheet"
          />
          <link
            href={`https://fonts.googleapis.com/css2?family=${siteFont.familyName
              .split(' ')
              .join('+')}`}
            rel="stylesheet"
          />
          {children}
        </fontContext.Provider>
      </ColorModeProvider>
    </ThemeProvider>
  );
}
