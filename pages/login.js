import React, {useState} from 'react'
import styles from '../styles/Login.module.css'
import axios from 'axios'

export default function login() {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const login = (e) => {
        e.preventDefault()
        const data = {
            username: username,
            password: password
        }
        
        axios.post("https://chome-backend.herokuapp.com/signin", data)
            .then(response => console.log(response.data))
    }

    return (
        <div className={styles.backgroundGradient}>
            <div id="body_container" className="container justify-content-center">
                <section className={styles.container}>
                    <div className="row d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
                        <div className="col-md-5">
                            <div className="box shadow bg-white p-4">
                                <h3 className="mb-4 text-center fs-1">Sign In</h3>
                                <form action="/login" method="POST" className="mb-3">
                                    <h9 style={{color: "red", textAlign: "center"}}>errMessage</h9>
                                    <h9 style={{color: "green", textAlign: "center"}}>okMessage</h9>
                                    <div className="form-floating mb-3">
                                        {/* <input type="text" id="login_username_email" value="{{inputData.username_email}}" className="form-control rounded-0" placeholder="Username/Email" /> */}
                                        <input type="text" id="login_username_email" className="form-control rounded-0" placeholder="Username/Email" value={username} onChange={(e) => setUsername(e.target.value)} />
                                        <label for="username">Username / Email</label>
                                    </div>
                                    <div className="form-floating mb-3">
                                        <input type="password" id="login_password" className="form-control rounded-0" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                                        <label for="password">Password</label>
                                    </div>
                                    <div className="d-grid gap-2 mb-3">
                                        <button type="submit" className="btn btn-dark border-0 rounded-0" onClick={login}>Sign In</button>
                                    </div>
                                    <div className="forgot-password-link mb-3 text-right" style={{textAlign: "right"}}>
                                        <a href="#" title="Forgot Password" className="text-decoration-none">Forgot Password?</a>
                                    </div>
                                </form>
                                <div className="forgot-password-link mb-3 text-center" style={{textAlign: "center"}}>
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
