import React from "react";

import { Link, useNavigate } from "react-router-dom";
import Facility from "./Facility";

const RoomCard = ({
  capacity,
  bedsleft,
  hostel,
  floor,
  gender,
  id,
  number,
  price,
  features,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white w-full   rounded-sm border p-4">
      <div className="flex items-center gap-2 ">
        <div className="sm:w-[10px] w-[8px] sm:h-[10px] h-[8px] bg-red-600 rounded-full "></div>
        <p className=" text-[0.9rem]">
          {`${hostel} - RM ${number} - ${floor}`}{" "}
        </p>
      </div>

      <p className="text-[0.6rem] font-medium  text-gray-500 mt-1 ">
        Room type: <span>{`${capacity} in a room - ${gender}`}</span>
      </p>
      <p className="text-[0.6rem] font-medium  text-gray-500  ">
        Bedsleft: <span>{`${bedsleft}`} </span>
      </p>

      <Facility key={id} features={features} />

      <div className="mt-6 sm:mt-8 flex justify-between items-center">
        <p className=" font-semibold text-lg">
          {`GH₵ ${price} `}
          <span className="text-gray-400 text-[0.7rem]  font-medium">/SEM</span>
        </p>

        <button
          className="bg-blue-100 border border-blue-200 py-2 md:py-[6px] px-4 text-[0.75rem] rounded-sm hover:bg-blue-200  hover:text-blue-700 text-blue-600"
          onClick={() => {
            navigate(`/detail/${id}`);
          }}
        >
          Book now
        </button>
      </div>
    </div>
  );
};

export default RoomCard;
