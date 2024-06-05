import axios from "axios";
import { useState } from "react";
import { useAuth } from "../../store/auth";
import { toast } from "react-toastify";

const ServiceAdd = () => {
    const { AuthorizationToken} = useAuth();
    const [data, setData] = useState({
        service: "",
        description: "",
        provider: "",
        price: ""
    });

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
            const response = await axios.post(`http://localhost:8080/api/admin/service/add`, data, {
                headers: {
                    Authorization: AuthorizationToken
                }
            })
            if(response.statusText === "Created") {
                // console.log("add service", response);
                toast.success("Service add sucessful");
                setData({
                    service: "",
                    description: "",
                    provider: "",
                    price: ""
                });
            }
        } catch (error) {
            console.log(error);
            toast.error("Service add unsucessful");
        }
    }
    
    return (
        <>
            <section>
                <main>
                    <div className="section-add admin">
                        <div className="container">
                            <h1>
                                add service
                            </h1>
                        </div>
                        <div className="container">
                            <div className="add-form">
                                <form onSubmit={handleSubmit}>
                                    <div>
                                        <label htmlFor="service">service</label>
                                        <input
                                            type="text"
                                            placeholder="enter product name"
                                            id="service"
                                            // autoComplete="off"
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
                                            // autoComplete="off"
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
                                            // autoComplete="off"
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
                                            // autoComplete="off"
                                            required
                                            name="price"
                                            value={data.price}
                                            onChange={handleInput}
                                        />
                                    </div>
                                    <div>
                                        <button type="submit">
                                            Submit
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

export default ServiceAdd;