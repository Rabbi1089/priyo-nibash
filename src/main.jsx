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
import PrivateRoute from "./privateRoute/PrivateRoute.jsx";
import EstateDetails from "./estateDetails/EstateDetails.jsx";
import ErrorPage from "./ErrorPage/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
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
        element: (
          <PrivateRoute>
            <UserProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <Registration />,
      },
      {
        path: "/estate/:id",
        element: <EstateDetails></EstateDetails>,
        loader: () => fetch("/Estate.json"),
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
