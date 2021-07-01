import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '@material-ui/core';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chome</title>
        <meta name="description" content="This is the official site of chomeProgramming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.header}>
        <div className={styles.menuBar}>
          <a href="/projects">PROJECTS</a>
          <a href="/standings">GITHUB</a>
          <a href="/about">ABOUT US</a>
        </div>

        <div className={styles.login}>
          <Button>LOGIN</Button>
          <Button>SING UP</Button>
        </div>

        <div className={styles.hamburger}>
          <div className={styles.hamburgerRow}></div>
          <div className={styles.hamburgerRow}></div>
          <div className={styles.hamburgerRow}></div>
        </div>
      </div>
    </div>
  )
}
