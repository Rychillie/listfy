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
        <link rel="shortcut icon" href="/assets/favicon.ico" />
        <link
          href="/assets/unicorn-apple.png"
          rel="apple-touch-icon"
          sizes="160x160"
        />
        <link
          href="/assets/unicorn.png"
          rel="icon"
          sizes="160x160"
          type="image/png"
        />

        <meta name="theme-color" content="#f9fafb" />

        <meta name="msapplication-TileColor" content="#f9fafb" />

        <meta name="robots" content="noindex" />
      </Head>

      <LayoutGroup>
        <Component {...pageProps} />
      </LayoutGroup>
    </>
  );
}

export default MyApp;
