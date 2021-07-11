import React, {useState} from 'react'
import styles from '../styles/Signup.module.css'
import axios from 'axios'
// import NextCors from 'nextjs-cors'
const { createProxyMiddleware } = require('http-proxy-middleware')

export default function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const signin = async (e) => {
        e.preventDefault()
        // const data = {
        //     username: username,
        //     password: password
        // }
        
        // axios.post("https://chome-backend.herokuapp.com/user/signin", data)
        //     .then(response => console.log(response.data))
        // await NextCors(req, res, {
        //     // Options
        //     methods: ['GET', 'HEAD', 'PUT', 'PATCH', 'POST', 'DELETE'],
        //     origin: '*',
        //     optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
        // })
        // fetch ("https://chome-backend.herokuapp.com/user/signin", {
        // fetch ("http://8.tcp.ngrok.io:15848/user/signin", {
        console.log( await fetch ("https://localhost:8000/user/signin", {
            headers: {"Content-Type": "application/x-www-form-urlencoded"},
            method: "POST",
            body: JSON.stringify({
                email_username: username,
                password: password,
            }),
        }) )
            // .then(response => response.json())
            // .then(response => console.log(response))
    }

    return (
        <div className={styles.backgroundGradient}>
            <div id="body_container" className="container justify-content-center">
                <section className={styles.container}>
                    <div className="row d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                        <div className="col-md-5">
                            <div className="box shadow bg-white p-4 rounded">
                                <h3 className="mb-4 text-center fs-1">Sign Up</h3>
                                <form action="/login" method="POST" className="mb-3">
                                    <h9 style={{color: "red", textAlign: "center"}}>errMessage</h9>
                                    <h9 style={{color: "green", textAlign: "center"}}>okMessage</h9>
                                    <div className="form-floating mb-3">
                                        {/* <input type="text" id="login_username_email" value="{{inputData.username_email}}" className="form-control rounded-0" placeholder="Username/Email" /> */}
                                        <input type="text" className="form-control rounded-0" placeholder="Username/Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                                        <label>Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control rounded-0" placeholder="Password" value={username} onChange={(e) => setUsername(e.target.value)}/>
                                        <label>Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control rounded-0" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        <label>Password</label>
                                    </div>
                                    <div className="d-grid gap-2 mb-3">
                                        <button type="submit" className="btn btn-dark border-0 rounded-0" onClick={signin}>Sign Up</button>
                                    </div>
                                </form>
                                <div className="forgot-password-link mb-3 text-center" style={{textAlign: "center"}}>
                                    <a href="/signup" title="Sign Up" className="text-decoration-none">Already Have An Account?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
