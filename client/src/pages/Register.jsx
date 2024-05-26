import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";

const Register = () => {
    const [user, setUser] = useState({
        username: "",
        email: "",
        phone: "",
        password: "",
    });
    const navigate = useNavigate();
    const { storeTokenInLS } = useAuth();

    const handleInput = (e) => {
        let {name, value} = e.target;
        setUser({
            ...user,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(user);
        try {
            const response = await axios.post(`http://localhost:8080/api/auth/register`, user, {
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            // console.log(response);

            const res_data = await response.data;
            console.log("Response from server : ", res_data);
            if(response.statusText === "Created") {
                storeTokenInLS(res_data.token);
                setUser({
                    username: "",
                    email: "",
                    phone: "",
                    password: ""
                })
                toast.success("Registration sucessful.");
                navigate('/login');
            }
        } catch (err) {
            console.log("Registration Error", err);
            // console.log(err.response.data);
            const msg1 = err.response.data.extraDetails;
            const error = msg1 ? msg1 : err.response.data.message;
            toast.error(error);
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-registration">
                        <div className="container grid grid-col-2">
                            <div className="registration-img">
                                <img 
                                    src="/images/register.png" 
                                    alt="registration-img" 
                                    width="400" height="400"
                                />
                            </div>
                            {/* registration form */}
                            <div className="registration-form">
                                <h1 className="main-heading mb-3">registration form</h1>
                                <br />
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input 
                                            type="text"
                                            placeholder="enter your username" 
                                            id="username" 
                                            autoComplete="off"
                                            required 
                                            name="username" 
                                            value={user.username}
                                            onChange={handleInput}
                                        />
                                    </div>
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
                                        <label htmlFor="phone">phone</label>
                                        <input 
                                            type="number" 
                                            id="phone" 
                                            placeholder="enter your phone" 
                                            autoComplete="off"
                                            required
                                            name="phone" 
                                            value={user.phone}
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
                                        Register Now
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

export default Register;