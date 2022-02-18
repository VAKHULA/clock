
import type { NextPage } from 'next'
import Head from 'next/head'
import { useState } from 'react';
import styles from '../styles/Home.module.css'
import Clock from '../components/Clock'
import useInterval from '../hooks/useInterval'
import {dateToArrayString} from '../utils/time'


const Home: NextPage = () => {
  const [time, setTime] = useState(["0","0","0","0","0","0"])

  const tick = () => {
    setTime(dateToArrayString(new Date()))
  }

  useInterval(tick, 1000)

  return (
    <div className={styles.container}>
      <Head>
        <title>🕦 A Clock Made Of Clocks</title>
        <meta name="description" content="🕦 A Clock Made Of Clocks" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
	      <Clock time={time} />
      </main>

      <footer className={styles.footer}>
	  <p className="inspiration-text">Inspired by&nbsp;<a href="https://twitter.com/latestengineer/status/1429761388591960065" target="_top">this tweet</a></p>
      </footer>
    </div>
  )
}

export default Home
