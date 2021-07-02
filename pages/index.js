import React from 'react';
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button } from '@material-ui/core';
import Card from '../components/Card'

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

      <div className={styles.feed}>
        <Card
          img='https://opengraph.githubassets.com/d3470dfcd1e48a27c76b539aca1f431a90d1aaf3a74e73392fb3be8297c0f36e/chomeProgramming/yourf1'
          link='https://github.com/chomeProgramming/yourf1'
          name='YourF1'
        />

        <Card
          img='https://opengraph.githubassets.com/28297101fcc67d8d3ccf6f5f59c13ca88c4294b331d827c0bc09039b89e99ebe/chomeProgramming/clipable'
          link='https://github.com/chomeProgramming/clipable'
          name='Clipable'
        />

        <Card
          img='https://opengraph.githubassets.com/3ed4a58c755d137f043bd887f0afaa7e3d3a073a2cc14ad3fc530b5511cdcbd0/chomeProgramming/chome-speech-recognition'
          link='https://github.com/chomeProgramming/chome-speech-recognition'
          name='Voice Assistant'
        />

        <Card
          img='https://opengraph.githubassets.com/489e3bf4fef925895059fdcf065bbcc5105c7e4c3ff6a5a191c140a678f8ee24/chomeProgramming/quickstart'
          link='https://github.com/chomeProgramming/quickstart'
          name='Quickstart'
        />
      </div>
    </div>
  )
}