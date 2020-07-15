import React, { ReactNode } from 'react';
// import { Link } from 'gatsby';
import { Stack, Box, Link } from '@chakra-ui/core';

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

              <Box textAlign="center">
                <ContentBlock>
                  Tailwind Baseline is built by{' '}
                  <Link color="brand.900" href="https://twitter.com/apkoponen">
                    @apkoponen
                  </Link>
                  .
                  <Box>
                    <a href="https://github.com/apkoponen/tailwind-baseline">
                      <Box display="inline-block" p={4}>
                        <svg height="24" width="24" viewBox="0 0 16 16">
                          <path
                            fill-rule="evenodd"
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
                          ></path>
                        </svg>
                      </Box>
                    </a>
                    <a href="https://www.npmjs.com/package/tailwind-baseline">
                      <Box display="inline-block" p={4}>
                        <svg viewBox="0 0 780 250" height="24" width="24">
                          <path
                            fill="#231F20"
                            d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z"
                          ></path>
                        </svg>
                      </Box>
                    </a>
                  </Box>
                  <Box p={4} color="gray.500" fontSize={12}>
                    This site is based on the wonderfully designed and coded{' '}
                    <Link
                      color="brand.800"
                      href="https://seek-oss.github.io/capsize/"
                    >
                      Capsize site
                    </Link>
                  </Box>
                </ContentBlock>
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Layout>
    </SiteProvider>
  </AppStateProvider>
);

export default IndexPage;
