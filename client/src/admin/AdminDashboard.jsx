import { NavLink } from "react-router-dom";
import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../store/auth";
import { ClientError } from "../Error/ClientError";

const AdminDashboard = () => {
    const { user, isLoading } = useAuth();
    // console.log("Admin layout", user, isLoading);
    if (isLoading) {
        return <h1>Loading...</h1>
    } else if (!user.isAdmin) {
        return <ClientError />
    }
    return (
        <>
            <header>
                <div className="container admin-dashboard-container">
                    <nav>
                        <ul>
                            <li><NavLink to={'/'}><i><FaHome /></i>Home</NavLink></li>
                            <li><NavLink to={'/admin/services'}><i><FaRegListAlt /></i>services</NavLink></li>
                            <li><NavLink to={'/admin/users'}><i><FaUser /></i>users</NavLink></li>
                            <li><NavLink to={'/admin/contacts'}><i><FaMessage /></i>contacts</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default AdminDashboard;