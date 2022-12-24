
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from "react";
import { dateToArrayString } from "../utils/time";
import useInterval from "../hooks/useInterval";
import Clock from "../components/Clock";

const Home: NextPage = () => {
  const [time, setTime] = useState(dateToArrayString(new Date()));

  const tick = () => {
    setTime(dateToArrayString(new Date()));
  };

  useInterval(tick, 1000);

  return (
    <div>
      <Head>
        <title>A Clock Made Of Clocks 🕦</title>
        <meta name="description" content="A Clock Made Of Clocks 🕦" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Clock time={time} />
      </main>
    </div>
  );
};

export default Home
