import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";
import axios from "axios";
import { toast } from "react-toastify";

const UserUpdate = () => {
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
            const response = await axios.get(`http://localhost:8080/api/admin/users/${params.id}`, {
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

    const handleInput = (e) => {
        const {name, value} = e.target;
        // console.log(name, value);
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.log(data);
        // console.log(params.id);
        try {
            const response = await axios.patch(`http://localhost:8080/api/admin//users/update/${params.id}`, data, {
                headers: {
                    Authorization: AuthorizationToken,
                    "Content-Type": 'application/json',
                }
            })
            if(response.statusText === "OK") {
                // console.log("update user response", response);
                toast.success("update user sucessfully");
            }
        } catch (error) {
            console.log(error);
            toast.error("update user unsuccessful");
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-update admin">
                        <div className="container">
                            <h1>
                                update user data
                            </h1>
                        </div>
                        {/* data container */}
                        <div className="container">
                            {/* data form */}
                            <div className="update-form">
                                <form onSubmit={handleSubmit}>
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

export default UserUpdate;