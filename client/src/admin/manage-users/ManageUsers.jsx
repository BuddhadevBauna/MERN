import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ManageUsers = () => {
    const [users, setUsers] = useState([]);
    const { AuthorizationToken } = useAuth();
    const getAllUsersData = async (req, res) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/admin/users`, {
                headers: {
                    Authorization: AuthorizationToken
                }
            })
            // console.log("users data", response);
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllUsersData();
    }, []);
    const deleteUser = async (id) => {
        // console.log(id);
        try {
            const response = await axios.delete(`http://localhost:8080/api/admin//users/delete/${id}`, {
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            if(response.statusText === "OK") {
                // console.log("users delete", response);
                toast.success("deleted user sucessfully");
                getAllUsersData();
            }
        } catch (error) {
            console.log(error);
            toast.error("delete user unsucessfull");
        }
    }

    return (
        <>
            <section className="admin-users-section">
                <div className="container">
                    <h1>Admin Users Data</h1>
                </div>
                <div className="container admin-users">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((curUser, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{curUser.username}</td>
                                            <td>{curUser.email}</td>
                                            <td>{curUser.phone}</td>
                                            <td>
                                                <Link to={`/admin/users/${curUser._id}/edit`}>Edit</Link>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteUser(curUser._id)}>Delete</button>
                                            </td>
                                        </tr>
                                    );
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}

export default ManageUsers;