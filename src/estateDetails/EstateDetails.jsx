import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { LuMapPin } from "react-icons/lu";

const EstateDetails = () => {
  const estatesed = useLoaderData();

  const { id } = useParams();
  const IdInt = parseInt(id);
  const estate = estatesed.find((e) => e.id === IdInt);
  //console.log(estate);
  const {
    image,
    estate_title,
    location,
    description,
    facilities,
    segment_name,
    area,
    status,
    price,
  } = estate;
  return (
    <div className="">
      <div className="flex flex-col max-w-lg p-6 space-y-6 overflow-hidden rounded-lg shadow-md bg-sky-200 text-gray-600 mx-auto">
        <img src={image} alt="" srcset="" />
        <div>
          <h2 className="mb-1 text-xl font-semibold">{estate_title}</h2>
          <p className="text-sm text-gray-700">{description}</p>
        </div>
        <div className="flex justify-between">
          <p className="text-sm text-gray-700">Segment :{segment_name}</p>
          <p className="text-sm text-gray-700">Area :{area}</p>
          <div className="flex items-center gap-1">
            <LuMapPin />
            <p className="text-sm text-gray-700">{location}</p>
          </div>
        </div>
        <div className="">
          {facilities.map((facatlity) => (
            <p className="btn btn-info mx-1 text-sm hover:none">{facatlity}</p>
          ))}
        </div>
        <div className="flex justify-between">
          <p className="text-xl font-bold font-mono  text-gray-700">
            Status : {status}
          </p>
          <p className="text-xl font-bold font-mono  text-gray-700">
            Price : {price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default EstateDetails;
