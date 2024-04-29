import React from "react";

const Estate = ({ estate }) => {
  const { image, estate_title, location, description, facilities } = estate;
  //console.log(image);
  return (
    <div className="max-w-lg p-4 shadow-md bg-sky-400 text-gray-600">
      <div className="flex justify-between pb-4 border-bottom">
        <div className="flex items-center">
          <a
            rel="noopener noreferrer"
            href="#"
            className="mb-0 capitalize text-gray-600 text-2xl font-bold"
          >
            {estate_title}
          </a>
        </div>
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <img
            src={image}
            alt=""
            className="block object-cover object-center w-full rounded-md h-72 bg-gray-500"
          />
          <div className="flex items-center text-xs">{location}</div>
        </div>
        <div className="space-y-2 ">
          <p className="leading-snug  text-gray-600 font-bold">{description}</p>
          {facilities.map((facatlity) => (
            <button className="btn btn-info mx-1 uppercase hover:none">
              {facatlity}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Estate;
