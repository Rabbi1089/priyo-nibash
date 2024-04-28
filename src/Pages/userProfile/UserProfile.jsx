import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const UserProfile = () => {
  const { user } = useContext(AuthContext);
  //console.log(user);
  return (
    <div>
      <div className="flex flex-col max-w-md p-6 bg-gray-900 text-gray-100 mx-auto my-5 rounded-md">
        <img
          src={`${user.photoURL} ? ${user.photoURL} : "https://ibb.co/64XDKv0"`}
          alt=""
          className="flex-shrink-0 object-cover h-64 rounded-sm sm:h-96 bg-gray-500 aspect-square"
        />
        <div>
          <h2 className="text-xl font-semibold">{user.displayName}</h2>
          <span className="block pb-2 text-sm text-gray-400">
            Priyo Nibash Company Inc.
          </span>
          <p>Phone: 0175******</p>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
