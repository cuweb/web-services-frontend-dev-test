import * as React from "react";
import Head from "next/head";
import { AppProps } from "next/app";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { SWRConfig } from "swr";

import theme from "../utils/theme";
import emotionCache from "../utils/emotion-cache";

const clientSideEmotionCache = emotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SWRConfig
          value={{
            fetcher: (resource, init) => fetch(resource, init).then((res) => res.json()),
          }}
        >
          <Component {...pageProps} />
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}
