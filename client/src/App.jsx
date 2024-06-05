import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//pages
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
//Auth
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
//Layout
import AdminLayout from "./layouts/AdminLayout";
//Admin
import ManageUsers from "./admin/manage-users/ManageUsers";
import UserUpdate from "./admin/manage-users/UserUpdate";
import ManageService from "./admin/manage-services/ManageService";
import ServiceAdd from "./admin/manage-services/ServiceAdd";
import ServiceUpdate from "./admin/manage-services/ServiceUpdate";
import ManageContacts from "./admin/manage-contact/MangeContacts";
//Error
import { ClientError } from "./Error/ClientError";


const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { path: "", element: <Home/> },
      { path: "about", element: <About/> },
      { path: "contact", element: <Contact /> },
      { path: "services", element: <Services /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
      { path: "logout", element: <Logout /> },
    ],
  },
  { path: "/*", element: <ClientError /> },
  {
    path: "admin", element: <AdminLayout />,
    children: [
      //service
      { path: "services", element: <ManageService /> },
      { path: "services/create", element: <ServiceAdd /> },
      { path: "services/:id/edit", element: <ServiceUpdate /> },
      //user
      { path: "users", element: <ManageUsers /> },
      { path: "users/:id/edit", element: <UserUpdate /> },
      //contact
      { path: "contacts", element: <ManageContacts /> },
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;