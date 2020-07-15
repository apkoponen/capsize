import React, { ReactNode } from 'react';
// import { Link } from 'gatsby';
import { Stack, Box } from '@chakra-ui/core';

import { AppStateProvider } from '../components/AppStateContext';
import { SiteProvider } from '../components/SiteProvider';
import Seo from '../components/Seo';
import Layout from '../components/Layout';
import FontSelector from '../components/FontSelector';
import OutputCSS from '../components/OutputCSS';
import Logo from '../components/Logo';
import MetricsPreview from '../components/MetricsPreview';
import ContentBlock from '../components/ContentBlock';
import Heading from '../components/Heading';
import fontSizes from '../fontSizes';
import Code from '../components/Code';

const Step = ({
  number,
  title,
  children,
}: {
  number?: number;
  title?: string;
  children: ReactNode;
}) => (
  <Stack spacing={10}>
    {title && (
      <Box>
        <ContentBlock>
          <Heading as="h2" size="2">
            <Box as="span" color="pink.400" fontSize={['1.2em', '1.4em']}>
              {number}.{' '}
            </Box>
            {title}
          </Heading>
        </ContentBlock>
      </Box>
    )}
    <Box>{children}</Box>
  </Stack>
);

const logoSize = fontSizes['1'].map((size, i) => `${size * 1.8}px`);

const IndexPage = () => (
  <AppStateProvider>
    <SiteProvider>
      <Layout>
        <Seo />
        <Stack spacing={[10, 20, 20, 20, 24]}>
          <Box bg="gray.50" paddingY={[10, 20, 20, 20, 40]}>
            <ContentBlock>
              <Stack spacing={8}>
                <Box
                  d="flex"
                  flexDirection={['column', 'column', 'row']}
                  alignItems="center"
                >
                  <Box
                    marginRight={[0, 0, 6]}
                    marginBottom={[4, 4, 0]}
                    w={logoSize}
                    h={logoSize}
                  >
                    <Logo />
                  </Box>
                  <Heading size="1">Tailwind Baseline</Heading>
                </Box>

                <Heading as="div" size="3" align={['center', 'center', 'left']}>
                  <Box paddingX={[4, 4, 0]}>
                    <Box as="span" whiteSpace="nowrap">
                      Easily align text to baseline
                    </Box>{' '}
                    <Box as="span" whiteSpace="nowrap">
                      in Tailwind CSS.
                    </Box>
                  </Box>
                </Heading>
              </Stack>
            </ContentBlock>
          </Box>

          <Box>
            <Stack spacing={[10, 10, 10, 20]}>
              <Box>
                <Step number={1} title="Install the plugin">
                  <ContentBlock>
                    <Code language="bash">npm install tailwind-baseline</Code>
                  </ContentBlock>
                </Step>
              </Box>

              <Box>
                <Step number={2} title="Choose a font">
                  <ContentBlock>
                    <Stack spacing={6}>
                      <Box>
                        <FontSelector />
                      </Box>
                      <Box>
                        <MetricsPreview />
                      </Box>
                    </Stack>
                  </ContentBlock>
                </Step>
              </Box>

              <Box>
                <Step
                  number={3}
                  title="Copy the configuration to tailwind.config.js"
                >
                  <ContentBlock>
                    <OutputCSS />
                  </ContentBlock>
                </Step>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Layout>
    </SiteProvider>
  </AppStateProvider>
);

export default IndexPage;
