import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../store/auth";
import axios from "axios";

const AdminUpdate = () => {
    const [data, setData] = useState({
        username: "",
        email: "",
        phone: "",
    })
    const params = useParams();
    // console.log("params single user", params);
    const { AuthorizationToken } = useAuth();
    const getSingleUserData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/admin//users/${params.id}`, {
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            // console.log("fetch single user", response);
            setData(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getSingleUserData();
    }, [])
    const handleInput = () => {

    }

    return (
        <>
            <section>
                <main>
                    <div className="section-contact">
                        <div className="contact-content container">
                            <h1 className="main-heading">
                                update user data
                            </h1>
                        </div>
                        {/* data container */}
                        <div className="container grid grid-col-2">
                            {/* data form */}
                            <div className="contact-form">
                                <form>
                                    <div>
                                        <label htmlFor="username">username</label>
                                        <input
                                            type="text"
                                            placeholder="enter your usename"
                                            id="username"
                                            autoComplete="off"
                                            required
                                            name="username"
                                            value={data.username}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="phone">Mobile</label>
                                        <input
                                            type="phone"
                                            placeholder="enter your phone"
                                            id="phone"
                                            autoComplete="off"
                                            required
                                            name="phone"
                                            value={data.phone}
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
                                            value={data.email}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit">
                                            Update
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>
    )
}

export default AdminUpdate;