import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
//pages
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Services from "./pages/Services";
import { Error } from "./pages/Error";
//Auth
import Register from "./Auth/Register";
import Login from "./Auth/Login";
import Logout from "./Auth/Logout";
//Layout
import AdminLayout from "./layouts/AdminLayout";
//Admin
import ManageUsers from "./admin/manage-users/ManageUsers";
import ManageContacts from "./admin/manage-contact/MangeContacts";
import UserUpdate from "./admin/manage-users/UserUpdate";


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
  { path: "/*", element: <Error /> },
  {
    path: "admin", element: <AdminLayout />,
    children: [
      { path: "users", element: <ManageUsers /> },
      { path: "users/:id/edit", element: <UserUpdate /> },
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