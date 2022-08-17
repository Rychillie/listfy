import Head from "next/head";
import type { AppProps } from "next/app";
import { LayoutGroup } from "framer-motion";
import { globalStyles } from "@styles/global";
import "@styles/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  return (
    <>
      <Head>
        <link rel="icon" href="/icons/favicon.ico" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />

        <meta name="robots" content="noindex" />
      </Head>

      <LayoutGroup>
        <Component {...pageProps} />
      </LayoutGroup>
    </>
  );
}

export default MyApp;
