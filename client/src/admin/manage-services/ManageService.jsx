import { useAuth } from "../../store/auth";

const ManageService = () => {
    const { services } = useAuth();
    return (
        <>
            <section className="admin admin-service-section">
                <div className="container">
                    <h1>Admin Users Data</h1>
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
                                services.map((curService, index) => {
                                    const { provider, price, service, description } = curService;
                                    return (
                                        <tr key={index}>
                                            <td>{service}</td>
                                            <td>{`${description.slice(0, 20)}...`}</td>
                                            <td>{provider}</td>
                                            <td>{price}</td>
                                            <td>
                                                <button>
                                                    {/* <Link>Edit</Link> */}
                                                    Edit
                                                </button>
                                            </td>
                                            <td>
                                                <button>Delete</button>
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