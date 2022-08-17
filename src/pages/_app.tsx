import { useEffect } from "react";
import Head from "next/head";
import type { AppProps } from "next/app";
import { LayoutGroup } from "framer-motion";
import { globalStyles } from "@styles/global";
import "@styles/styles.css";

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();

  // useEffect(() => {
  //   if ("serviceWorker" in navigator) {
  //     window.addEventListener("load", function () {
  //       navigator.serviceWorker.register("/sw.js").then(
  //         function (registration) {
  //           console.log(
  //             "Service Worker registration successful with scope: ",
  //             registration.scope
  //           );
  //         },
  //         function (err) {
  //           console.log("Service Worker registration failed: ", err);
  //         }
  //       );
  //     });
  //   }
  // }, []);

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
