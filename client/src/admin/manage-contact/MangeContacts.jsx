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
            if(response.statusText === "OK") {
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
            <section className="admin-contacts-section">
                <h1>Admin Contact Data</h1>
                <div className="container admin-users">
                    {
                        contacts.map((curContact, index) => {
                            const {_id, username, email, message } = curContact;
                            return (
                                <div key={index}>
                                    <p>{username}</p>
                                    <p>{email}</p>
                                    <p>{message}</p>
                                    <button className="btn" onClick={() => deleteContact(_id)}>delete</button>
                                </div>
                            )
                        })
                    }
                </div>
            </section>
        </>
    );
}

export default ManageContacts;