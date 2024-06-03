import { Link } from "react-router-dom";
import { useAuth } from "../../store/auth";
import axios from "axios";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";

const ManageService = () => {
    const { services, AuthorizationToken } = useAuth();
    const [allService, setAllService] = useState([]);

    useEffect(() => {
        setAllService(services);
    }, [services]);
    //delete service
    const deleteService = async (id) => {
        try {
            const response = await axios.delete(`http://localhost:8080/api/admin//services/delete/${id}`, {
                headers: {
                    Authorization: AuthorizationToken
                }
            })
            if(response.statusText === "OK") {
                // console.log("delete service", response);
                toast.success("delete service sucessful");
                
                setAllService(prevServices => prevServices.filter(service => service._id != id));
            }
        } catch (error) {
            console.log(error);
            toast.error("delete service unsucessful");
        }
    }

    return (
        <>
            <section className="admin admin-service-section">
                <div className="container">
                    <h1>Admin Users Data</h1>
                    <Link to={'/admin/services/create'}>
                        <i><FaPlus /></i>
                    </Link>
                </div>
                <div className="container admin-container admin-services">
                    <table>
                        <thead>
                            <tr>
                                <th>Service</th>
                                <th>Description</th>
                                <th>Provider</th>
                                <th>Price</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                allService.map((curService, index) => {
                                    const { _id, provider, price, service, description } = curService;
                                    return (
                                        <tr key={index}>
                                            <td>{service}</td>
                                            <td>{`${description.slice(0, 20)}...`}</td>
                                            <td>{provider}</td>
                                            <td>{price}</td>
                                            <td>
                                                <button>
                                                    <Link to={`/admin/services/${_id}/edit`}>Edit</Link>
                                                </button>
                                            </td>
                                            <td>
                                                <button onClick={() => deleteService(_id)}>Delete</button>
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

export default ManageService;