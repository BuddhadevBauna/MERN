import axios from "axios";
import { useEffect, useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const ManageContacts = () => {
    const [contacts, setContacts] = useState([]);
    const { AuthorizationToken } = useAuth();
    const getAllContacts = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/api/admin/contacts`, {
                headers: {
                    Authorization: AuthorizationToken
                }
            })
            if (response.statusText === "OK") {
                // console.log("all contacts", response);
                setContacts(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllContacts();
    }, []);
    const deleteContact = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/admin/contacts/delete/${id}`, {
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            if (response.statusText === "OK") {
                // console.log("deleted contact sucessfull", response);
                toast.success("deleted contact sucessfully");
                getAllContacts();
            }
        } catch (error) {
            console.log(error);
            toast.success("delete contact unsucessful");
        }
    }

    return (
        <>
            <section className="admin admin-contacts-section">
                <div className="container">
                    <h1>All conatcts Data</h1>
                </div>
                <div className="container admin-container admin-contacts">
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                contacts.map((curContact, index) => {
                                    const { _id, username, email, message } = curContact;
                                    return (
                                        <tr key={index}>
                                            <td>{username}</td>
                                            <td>{email}</td>
                                            <td>{message}</td>
                                            <td className="admin-btn">
                                                <button onClick={() => deleteContact(_id)}>Delete</button>
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

export default ManageContacts;