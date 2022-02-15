
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import styles from '../styles/Home.module.css'
const digits = {
	0: [
		[90, 180],
		[90, 270],
		[90, 270],
		[180, 270],

		[0, 180],
		[90, 180],
		[180, 270],
		[0, 180],

		[0, 180],
		[0, 180],
		[0, 180],
		[0, 180],

		[0, 180],
		[0, 180],
		[0, 180],
		[0, 180],

		[0, 180],
		[0, 90],
		[0, 270],
		[0, 180],

		[0, 90],
		[90, 270],
		[90, 270],
		[0, 270]
	],
	1: [
		[90, 180],
		[90, 270],
		[180, 270],
		[225, 225],
		[0, 90],
		[180, 270],
		[180, 0],
		[225, 225],
		[225, 225],
		[180, 0],
		[180, 0],
		[225, 225],
		[225, 225],
		[180, 0],
		[180, 0],
		[225, 225],
		[90, 180],
		[270, 0],
		[0, 90],
		[180, 270],
		[90, 0],
		[90, 270],
		[270, 90],
		[0, 270]
	],
	2: [
		[180, 90],
		[90, 270],
		[90, 270],
		[270, 180],
		[0, 90],
		[90, 270],
		[270, 180],
		[180, 0],
		[180, 90],
		[270, 90],
		[0, 270],
		[180, 0],
		[0, 180],
		[180, 90],
		[270, 90],
		[270, 0],
		[180, 0],
		[0, 90],
		[270, 90],
		[180, 270],
		[0, 90],
		[270, 90],
		[270, 90],
		[270, 0]
	],
	3: [
		[180, 90],
		[90, 270],
		[90, 270],
		[270, 180],
		[0, 90],
		[90, 270],
		[270, 180],
		[180, 0],
		[180, 90],
		[270, 90],
		[0, 270],
		[180, 0],
		[90, 0],
		[270, 90],
		[180, 270],
		[180, 0],
		[90, 180],
		[270, 90],
		[0, 270],
		[180, 0],
		[0, 90],
		[270, 90],
		[270, 90],
		[270, 0]
	],
	4: [
		[180, 90],
		[180, 270],
		[225, 225],
		[225, 225],
		[0, 180],
		[180, 0],
		[225, 225],
		[225, 225],
		[0, 180],
		[180, 0],
		[180, 90],
		[180, 270],
		[0, 180],
		[0, 90],
		[0, 270],
		[180, 0],
		[0, 90],
		[270, 90],
		[180, 270],
		[180, 0],
		[225, 225],
		[225, 225],
		[0, 90],
		[270, 0]
	],
	5: [
		[180, 90],
		[90, 270],
		[90, 270],
		[270, 180],
		[180, 0],
		[180, 90],
		[90, 270],
		[270, 0],
		[0, 180],
		[0, 90],
		[90, 270],
		[270, 180],
		[0, 90],
		[90, 270],
		[270, 180],
		[180, 0],
		[180, 90],
		[270, 90],
		[0, 270],
		[180, 0],
		[0, 90],
		[270, 90],
		[270, 90],
		[270, 0]
	],
	6: [
		[180, 90],
		[90, 270],
		[90, 270],
		[270, 180],
		[0, 180],
		[90, 180],
		[270, 90],
		[0, 270],
		[180, 0],
		[0, 90],
		[270, 90],
		[180, 270],
		[180, 0],
		[90, 180],
		[270, 180],
		[0, 180],
		[0, 180],
		[0, 90],
		[270, 0],
		[180, 0],
		[0, 90],
		[270, 90],
		[270, 90],
		[270, 0]
	],
	7: [
		[180, 90],
		[270, 90],
		[270, 90],
		[270, 180],
		[90, 0],
		[270, 90],
		[270, 225],
		[225, 0],
		[225, 225],
		[45, 180],
		[45, 180],
		[225, 225],
		[225, 225],
		[0, 180],
		[0, 180],
		[225, 225],
		[225, 225],
		[0, 180],
		[0, 180],
		[225, 225],
		[225, 225],
		[0, 90],
		[0, 270],
		[225, 225]
	],
	8: [
		[180, 90],
		[90, 270],
		[90, 270],
		[270, 180],
		[180, 0],
		[90, 180],
		[270, 180],
		[180, 0],
		[180, 0],
		[90, 0],
		[0, 270],
		[180, 0],
		[0, 180],
		[180, 90],
		[180, 270],
		[0, 180],
		[180, 0],
		[90, 0],
		[270, 0],
		[180, 0],
		[0, 90],
		[90, 270],
		[270, 90],
		[270, 0]
	],
	9: [
		[180, 90],
		[90, 270],
		[90, 270],
		[270, 180],
		[0, 180],
		[90, 180],
		[270, 180],
		[180, 0],
		[180, 0],
		[0, 90],
		[0, 270],
		[180, 0],
		[0, 90],
		[90, 270],
		[180, 270],
		[0, 180],
		[90, 180],
		[90, 270],
		[0, 270],
		[180, 0],
		[0, 90],
		[270, 90],
		[270, 90],
		[270, 0]
	]
};



const useInterval = (callback: () => void, delay: number | null) => {
  const savedCallback = useRef(callback)

  // Remember the latest callback if it changes.
  useLayoutEffect(() => {
    savedCallback.current = callback
  }, [callback])

  // Set up the interval.
  useEffect(() => {
    // Don't schedule if no delay is specified.
    // Note: 0 is a valid value for delay.
    if (!delay && delay !== 0) {
      return
    }

    const id = setInterval(() => savedCallback.current(), delay)

    return () => clearInterval(id)
  }, [delay])

}
const Home: NextPage = () => {
  const [time, setTime] = useState([])


  const update = () => {

    const date = new Date();
	const [h1, h2] = date.getHours().toString().padStart(2, "0");
	const [m1, m2] = date.getMinutes().toString().padStart(2, "0");
  const [s1, s2] = date.getSeconds().toString().padStart(2, "0");

	const time = [h1, h2, m1, m2, s1, s2];

  setTime(time)
  }

  useInterval(update, 1000)

  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className="watch-container">
      {[...Array(time.length)].map((x, idx1) => (
          <div key={idx1} className="watch-circle-container" >
          {[...Array(24)].map((y, idx2) => (
            <span key={idx2} style={{
              "--angle-1":  `${digits[time[idx1]][idx2][0]}deg`,
              "--angle-2":  `${digits[time[idx1]][idx2][1]}deg`,
              }}
              />
          ))}
      </div>
        ))}
    

  </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
