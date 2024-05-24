import React from "react";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "./pages/Root";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Service from "./pages/Service";
import { Error } from "./pages/Error";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { path: "", element: <Home/> },
      { path: "/about", element: <About/> },
      { path: "/contact", element: <Contact /> },
      { path: "/services", element: <Service /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> },
      { path: "*", element: <Error /> }
    ],
  },
]);

const App = () => {
  return (
    <RouterProvider router={router} />
  )
}

export default App;