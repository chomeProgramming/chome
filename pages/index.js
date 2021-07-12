import React, { useState, useEffect } from 'react'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Button, Input } from '@material-ui/core'
import Card from '../components/Card'
import { makeStyles } from '@material-ui/core/styles'
import Modal from '@material-ui/core/Modal'
import cookie from 'react-cookie'

function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  }
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: '85%',
    maxWidth: '400px',
    backgroundColor: theme.palette.background.paper,
    border: '2px solid black',
    borderRadius: '5px',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}))

export default function Home() {
  const classes = useStyles()
  const [modalStyle] = useState(getModalStyle)
  const [open, setOpen] = useState(false)
  const [open2, setOpen2] = useState(false)

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [username, setUsername] = useState('')

  const sign2log = () => {
    setOpen(true)
    setOpen2(false)
  }

  const log2sign = () => {
    setOpen(false)
    setOpen2(true)
  }

  const consolelog = () => {
    console.log(email)
    console.log(password)
    console.log(username)
  }

  const signup = () => {
    // fetch("http://6.tcp.ngrok.io:16093/user/signup", {
    //   method: "POST",
    //   headers: { "content-type": "application/json" },
    //   body: JSON.stringify({
    //     email: "",
    //     username: "",
    //     password: ""
    //   })
    // })
    //   .then(result => result.json())
    //   .then(result => console.log("signup request", result))
  }

  const openSignIn = () => {
    window.open("/signin", "", "width=400,height=500");
  }

  const openSignUp = () => {
    window.open("/signup", "", "width=400,height=500");
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Chome</title>
        <meta name="description" content="This is the official site of chomeProgramming" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className={styles.modalHeader}>
            <h2>LOGIN</h2>
            <Button onClick={log2sign}>SIGN UP INSTEAD</Button>
          </div>

          <div className={styles.modalInfo}>
            <Input
              placeholder='USERNAME'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder='PASSOWORD'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button onClick={() => setCookie(60)}>LOGIN</Button>
          </div>
        </div>
      </Modal>

      <Modal
        open={open2}
        onClose={() => setOpen2(false)}
      >
        <div style={modalStyle} className={classes.paper}>
          <div className={styles.modalHeader}>
            <h2>SIGN UP</h2>
            <Button onClick={sign2log}>LOGIN INSTEAD</Button>
          </div>

          <div className={styles.modalInfo}>
            <Input
              placeholder='EMAIL'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Input
              placeholder='USERNAME'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <Input
              placeholder='PASSOWORD'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* <Button onClick={() => signup()}>SIGN UP</Button> */}
            <form action="http://6.tcp.ngrok.io:16093/user/signup" method="POST">
              <input type="email" name="email"></input>
              <input name="username"></input>
              <input name="password"></input>
              <input type="submit" value="Sign Up"></input>
            </form>
          </div>
        </div>
      </Modal>

      <main>
        <div className={styles.header}>
          <div className={styles.menuBar}>
            <a href="/hireus">HIRE US</a>
            <a href="/about">ABOUT US</a>
          </div>

          <div className={styles.login}>
            <Button onClick={openSignIn}>LOGIN</Button>
            <Button onClick={openSignUp}>SIGN UP</Button>
          </div>

          <div className={styles.hamburger}>
            <div className={styles.hamburgerRow1}></div>
            <div className={styles.hamburgerRow2}></div>
            <div className={styles.hamburgerRow3}></div>
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
      </main>
    </div>
  )
}