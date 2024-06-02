import { Outlet } from "react-router-dom";
import AdminDashboard from "../admin/AdminDashboard";

const AdminLayout = () => {
    return (
        <>
            <AdminDashboard />
            <Outlet />
        </>
    );
}

export default AdminLayout;