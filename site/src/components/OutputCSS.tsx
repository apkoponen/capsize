import React from 'react';
import { Tabs, TabList, Tab, TabPanels, TabPanel, Box } from '@chakra-ui/core';

import { useAppState } from './AppStateContext';
import tabStyles from '../tabStyles';
import Code from './Code';

function ConfigCode({
  fontFamily,
  metrics: { familyName, subfamilyName, xHeight, ...baselineMetrics },
}) {
  let metricLines = Object.entries(baselineMetrics).map(([key, value]) => {
    return `            ${key}: ${value}`;
  });
  const code = `const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        ${fontFamily}: ["${familyName}", ...defaultTheme.fontFamily.${fontFamily}],
      },
      baseline: {
        fonts: {
          ${fontFamily}: {
${metricLines.join('\n')}
          },
        },
      },
    },
  },
  plugins: [require("tailwind-baseline")],
};`;
  return <Code language="js">{code}</Code>;
}

const OutputCSS = () => {
  const { state } = useAppState();

  const { metrics } = state;

  const fontFamilies = ['sans', 'serif', 'mono'];

  return (
    <Tabs {...tabStyles.tabs}>
      <TabList>
        {fontFamilies.map((fontFamily) => (
          <Tab key={fontFamily} {...tabStyles.tab}>
            {fontFamily}
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {fontFamilies.map((fontFamily) => (
          <TabPanel key={fontFamily}>
            <Box padding={4} paddingTop={8}>
              <Box overflow="auto">
                <ConfigCode fontFamily={fontFamily} metrics={metrics} />
              </Box>
            </Box>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
};

export default OutputCSS;
