import React, { useState, useEffect } from 'react'
import styles from '../styles/Signin.module.css'
const { createProxyMiddleware } = require('http-proxy-middleware')

export default function Signin() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const signin = (e) => {
        e.preventDefault()
        var details = {
            email_username: username,
            password: password
        }
        var formBody = []
        for (var property in details) {
            var encodedKey = encodeURIComponent(property)
            var encodedValue = encodeURIComponent(details[property])
            formBody.push(encodedKey + "=" + encodedValue)
        }
        formBody = formBody.join("&")

        fetch("http://localhost:8000/user/signin", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                'Accept': 'application/json'
            },
            body: formBody,
        })
            .then(response => response.json())
            .then(response => {
                if (response.success == true) {
                    document.cookie = `accessToken=${response.accessToken};`
                    window.close()
                } else {
                    console.log(response.msg)
                    document.getElementById("errMessage").innerHTML = response.msg
                }
            })
            .catch(err => {
                console.log(err)
            })
    }
    useEffect(() => {
        if (username == "" || password == "") {
            document.getElementById("submit-button").disabled = true;
        } else {
            document.getElementById("submit-button").disabled = false;
        }
    }, [username, password])

    return (
        <div className={styles.backgroundGradient}>
            <div id="body_container" className="container justify-content-center">
                <section className={styles.container}>
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <div className="col-md-5">
                            <div className="box shadow bg-white p-4 rounded">
                                <h3 className="mb-4 text-center fs-1">Sign In</h3>
                                <form action="/login" method="POST" className="mb-3">
                                    <h9 style={{ color: "red", textAlign: "center" }}  id="errMessage">errMessage</h9>
                                    {/* <h9 style={{ color: "green", textAlign: "center" }}>okMessage</h9> */}
                                    <div className="form-floating mb-3">
                                        {/* <input type="text" id="login_username_email" value="{{inputData.username_email}}" className="form-control rounded-0" placeholder="Username/Email" /> */}
                                        <input type="text" id="login_username_email" className="form-control rounded-0" placeholder="Username/Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        <label>Username / Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" id="login_password" className="form-control rounded-0" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                                        <label>Password</label>
                                    </div>
                                    <div className="d-grid gap-2 mb-3">
                                        <button type="submit" className="btn btn-dark border-0 rounded-0" id="submit-button" onClick={signin}>Sign In</button>
                                    </div>
                                    <div className="forgot-password-link mb-3 text-right" style={{ textAlign: "right" }}>
                                        <a href="#" title="Forgot Password" className="text-decoration-none">Forgot Password?</a>
                                    </div>
                                </form>
                                <div className="forgot-password-link mb-3 text-center" style={{ textAlign: "center" }}>
                                    <a href="/signup" title="Sign Up" className="text-decoration-none">No Account yet?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
