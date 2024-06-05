import { Outlet, useLocation } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";
import ServerError from "../Error/ServerError";
import { useAuth } from "../store/auth";

const AdminLayout = () => {
    const {serverIssue} = useAuth();
    const location = useLocation();

    const isAdminRoute = location.pathname.startsWith('/admin');
    
    if(serverIssue) {
        return <ServerError />;
    }
    return (
        <>
            <AdminDashboard />
            {isAdminRoute && <h1 className="admin-section-header">Welcome! to admin section</h1>}
            <Outlet />
        </>
    );
}

export default AdminLayout;