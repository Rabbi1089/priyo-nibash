import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Pages/home/Home.jsx";
import Root from "./layout/root/Root.jsx";
import Registration from "./registration/Registration.jsx";
import AuthProvider from "./provider/AuthProvider.jsx";
import Login from "./login/Login.jsx";
import UpdateProfile from "./Pages/UpdateProfile/UpdateProfile.jsx";
import UserProfile from "./Pages/userProfile/UserProfile.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },

      {
        path: "/updateProfile",
        element: <UpdateProfile />,
      },
      {
        path: "/userProfile",
        element: <UserProfile />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Registration />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router}></RouterProvider>
    </AuthProvider>
  </React.StrictMode>
);
