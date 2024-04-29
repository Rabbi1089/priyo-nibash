import React, { useEffect, useState } from "react";
import Estate from "../estate/Estate";

const Estates = () => {
  const [estates, setEstate] = useState([]);

  useEffect(() => {
    fetch("Estate.json")
      .then((res) => res.json())
      .then((data) => setEstate(data));
  }, []);

  console.log(estates);
  return (
    <div className=" mt-12">
      <div className="text-center"></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 rounded-md shadow-md">
        {estates &&
          estates.map((estate) => (
            <Estate key={estate.id} estate={estate}></Estate>
          ))}
      </div>
    </div>
  );
};

export default Estates;
