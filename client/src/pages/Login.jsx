import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [user, setUser] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate();
    const handleInput = (e) => {
        const { name, value } = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        try {
            const response = await axios.post(`http://localhost:8080/api/auth/login`, user, {
                headers: {
                    "Content-Type": 'application/json'
                }
            })
            // console.log(response);
            if(response.statusText === 'OK') {
                const res_data = await response.data;
                // console.log("Response from server : ", res_data);
                localStorage.setItem('token',res_data.token);
                setUser({
                    email: "",
                    password: ""
                })
                navigate('/');
            }
        } catch (error) {
            console.log("Login Error", error);
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-login">
                        <div className="container grid grid-col-2">
                            <div className="login-img">
                                <img
                                    src="/images/login.png"
                                    alt="login-img"
                                    width="400" height="400"
                                />
                            </div>
                            {/* login form */}
                            <div className="login-form">
                                <h1 className="main-heading mb-3">login form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="email">email</label>
                                        <input
                                            type="email"
                                            placeholder="enter your email"
                                            id="email"
                                            autoComplete="off"
                                            required
                                            name="email"
                                            value={user.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="password">password</label>
                                        <input
                                            type="password"
                                            placeholder="enter your password"
                                            id="password"
                                            autoComplete="off"
                                            required
                                            name="password"
                                            value={user.password}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <br />
                                    <button type="submit" className="btn btn-submit">
                                        Login Now
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    );
}

export default Login;