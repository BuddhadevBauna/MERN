import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const ServiceUpdate = () => {
    const [data, setData] = useState({
        service: "",
        description: "",
        provider: "",
        price: ""
    });
    const params = useParams();
    const { AuthorizationToken } = useAuth();

    //get current service data
    const getCurentServiceData = async () => {
        try {
            const id = params.id;
            const response = await axios.get(`http://localhost:8080/api/admin//services/${id}`, {
                headers: {
                    Authorization: AuthorizationToken
                }
            });
            if(response.statusText === "OK") {
                // console.log("single service", response);
                setData(response.data);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getCurentServiceData();
    }, []);

    const handleInput = (e) => {
        const { name, value } = e.target;
        setData({
            ...data,
            [name]: value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const id = params.id;
            const response = await axios.patch(`http://localhost:8080/api/admin/services/update/${id}`, data, {
                headers: {
                    Authorization: AuthorizationToken,
                    "Content-Type": "application/json"
                }
            });
            if(response.statusText === "OK") {
                // console.log("update service", response);
                toast.success("update service sucessful");
            }
        } catch (error) {
            console.log(error);
            toast.error("update service unsucessful")
        }
    }

    return (
        <>
            <section>
                <main>
                    <div className="section-update admin">
                        <div className="container">
                            <h1>
                                update service data
                            </h1>
                        </div>
                        <div className="container">
                            <div className="update-form">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="service">service</label>
                                        <input
                                            type="text"
                                            placeholder="enter product name"
                                            id="service"
                                            autoComplete="off"
                                            required
                                            name="service"
                                            value={data.service}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="description">description</label>
                                        <input
                                            type="text"
                                            placeholder="enter product description"
                                            id="description"
                                            autoComplete="off"
                                            required
                                            name="description"
                                            value={data.description}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="provider">provider</label>
                                        <input
                                            type="text"
                                            placeholder="enter provider name"
                                            id="provider"
                                            autoComplete="off"
                                            required
                                            name="provider"
                                            value={data.provider}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <label htmlFor="price">price</label>
                                        <input 
                                            type="text" 
                                            placeholder="enter price of product"
                                            id="price"
                                            autoComplete="off"
                                            required
                                            name="price"
                                            value={data.price}
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

export default ServiceUpdate;