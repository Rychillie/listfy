import { useCallback, useEffect, useState } from "react";
import type { NextPage } from "next";
import Head from "next/head";
import { AppLayout } from "@layouts/app";
import Welcome from "@components/Welcome";

const Home: NextPage = () => {
  const [targetReached, setTargetReached] = useState(false);

  const updateTarget = useCallback((e) => {
    if (e.matches) {
      setTargetReached(true);
    } else {
      setTargetReached(false);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const media = window.matchMedia("(display-mode: standalone)");
      media.addListener(updateTarget);

      if (media.matches) {
        setTargetReached(true);
      }

      return () => media.removeListener(updateTarget);
    }
  }, [updateTarget]);

  if (targetReached) {
    // if installed
    return (
      <AppLayout>
        <Head>
          <title>Hello World</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>

        <span style={{ fontWeight: 700 }}>Hello</span>
        <span style={{ fontWeight: 700 }}>What are your plans for today?</span>
        <span>Status: {targetReached ? "on device" : "not on device"}</span>
      </AppLayout>
    );
  } else {
    // if not installed
    return (
      <>
        <Head>
          <title>Hello World</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/assets/favicon.ico" />
        </Head>

        {Welcome()}
      </>
    );
  }
};

export default Home;
