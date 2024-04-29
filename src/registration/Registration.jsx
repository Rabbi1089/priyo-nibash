import React, { useContext, useState } from "react";
import { AuthContext } from "../provider/AuthProvider";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import NavBar from "../shared/NavBar";
import { updateProfile } from "firebase/auth";
import { FaEye, FaEyeSlash } from "react-icons/fa";

const Registration = () => {
  const { createUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const [regError, setRegError] = useState("");

  const handleRegistration = (e) => {
    e.preventDefault();
    setRegError(" ");

    const form = new FormData(e.currentTarget);
    const name = form.get("name");
    const email = form.get("email");
    const photoURL = form.get("photoURL");
    const password = form.get("password");

    if (password.length < 6) {
      setRegError("Password must be 6 character");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegError("USe at lest one uppercase letter");
      return;
    } else if (!/[a-z]/.test(password)) {
      setRegError("USe at lest one lowerCase letter");
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        // update profile
        updateProfile(result.user, {
          displayName: name,
          photoURL: photoURL,
        })
          .then(() => console.log("profile updated"))
          .catch();
        Swal.fire({
          title: "Good job!",
          text: "User Created successfully",
          icon: "success",
        });
        if (user) {
          navigate("/login");
        }
      })
      .catch((error) => {
        console.error(error, error.message);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: `${error.message}`,
        });
      });
  };
  return (
    <div className="">
      <div className="hero max-w-6xl min-h-[550px]">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-5xl font-bold">Register now!</h1>
          </div>
          <div className="card shrink-0 max-w-lg shadow-2xl bg-base-100">
            <form onSubmit={handleRegistration} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="name"
                  name="name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">photoURL</span>
                </label>
                <input
                  type="text"
                  name="photoURL"
                  placeholder="photoURL"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  className="input input-bordered"
                  required
                />

                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-info">Register</button>
              </div>
            </form>
            {regError && (
              <p className=" text-red-700 font-bold bg-red-100">{regError}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
