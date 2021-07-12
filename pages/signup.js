import React, { useState, useEffect } from 'react'
import styles from '../styles/Signup.module.css'
import axios from 'axios'
// import NextCors from 'nextjs-cors'
const { createProxyMiddleware } = require('http-proxy-middleware')

export default function Signup() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
    const [email, setEmail] = useState("")

    const signup = async (e) => {
        e.preventDefault()
        var details = {
            email,
            username,
            password,
            confirmPassword
        }
        var formBody = []
        for (var property in details) {
            var encodedKey = encodeURIComponent(property)
            var encodedValue = encodeURIComponent(details[property])
            formBody.push(encodedKey + "=" + encodedValue)
        }
        formBody = formBody.join("&")

        fetch("http://localhost:8000/user/signup", {
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
                    window.open("/verify", "", "width=400,height=500")
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
        if (!email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) || email == "" || username == "" || password == "" || password.length < 8 || confirmPassword !== password) {
            document.getElementById("submit-button").disabled = true;
        } else {
            document.getElementById("submit-button").disabled = false;
        }
    }, [username, email, password])

    // document.getElementById("email").validity.valid

    return (
        <div className={styles.backgroundGradient}>
            <div id="body_container" className="container justify-content-center">
                <section className={styles.container}>
                    <div className="row d-flex justify-content-center align-items-center" style={{ height: "100vh" }}>
                        <div className="col-md-5">
                            <div className="box shadow bg-white p-4 rounded">
                                <h3 className="mb-4 text-center fs-1">Sign Up</h3>
                                <form action="/login" method="POST" className="mb-3">
                                    <h9 style={{ color: "red", textAlign: "center" }} id="errMessage"></h9>
                                    {/* <h9 style={{ color: "green", textAlign: "center" }}>okMessage</h9> */}
                                    <div className="form-floating mb-3">
                                        {/* <input type="text" id="login_username_email" value="{{inputData.username_email}}" className="form-control rounded-0" placeholder="Username/Email" /> */}
                                        <input type="email" className="form-control rounded-0" placeholder="Username/Email" value={email} onChange={(e) => setEmail(e.target.value)} id="email" />
                                        <label>Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="text" className="form-control rounded-0" placeholder="Password" value={username} onChange={(e) => setUsername(e.target.value)} id="username" />
                                        <label>Username</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control rounded-0" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} id="password" />
                                        <label>Password</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" className="form-control rounded-0" placeholder="Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} id="confirm_password" />
                                        <label>Cofirm Password</label>
                                    </div>
                                    <div className="d-grid gap-2 mb-3">
                                        <button type="submit" className="btn btn-dark border-0 rounded-0" onClick={signup} id="submit-button">Sign Up</button>
                                    </div>
                                </form>
                                <div className="forgot-password-link mb-3 text-center" style={{ textAlign: "center" }}>
                                    <a href="/signin" title="Sign Up" className="text-decoration-none">Already Have An Account?</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}
