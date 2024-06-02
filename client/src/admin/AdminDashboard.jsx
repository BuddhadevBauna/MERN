import { NavLink } from "react-router-dom";
import { FaHome, FaRegListAlt, FaUser } from "react-icons/fa";
import { FaMessage } from "react-icons/fa6";
import { useAuth } from "../store/auth";
import { Error } from "../pages/Error";

const AdminDashboard = () => {
    const { user, isLoading } = useAuth();
    // console.log("Admin layout", user, isLoading);
    if (isLoading) {
        return <h1>Loading...</h1>
    } else if (!user.isAdmin) {
        return <Error />
    }
    return (
        <>
            <header>
                <div className="container">
                    <nav>
                        <ul>
                            <li><NavLink to={'/'}><FaHome />Home</NavLink></li>
                            <li><NavLink to={'/admin/services'}><FaRegListAlt />services</NavLink></li>
                            <li><NavLink to={'/admin/users'}><FaUser />users</NavLink></li>
                            <li><NavLink to={'/admin/contacts'}><FaMessage />contacts</NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
}

export default AdminDashboard;