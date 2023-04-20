import { IoIosBed, IoIosWifi } from "react-icons/io";
import { GiBathtub, GiCookingPot } from "react-icons/gi";

import { db } from "../firbaseService/config";
import { collection } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const Facility = ({ features }) => {
  const { Bathroom, Bunkedbed, Kitchen, Wardrobe, Wifi } = features ?? {};

  return (
    <div className="grid grid-cols-3 gap-4 md:gap-2 mt-4 sm:mt-6">
      <div
        className={
          Wifi
            ? "flex items-center  bg-gray-100 min-w-[50px] p-[6px] text-gray-500"
            : "hidden"
        }
      >
        <IoIosWifi size={15} />
        <p className="text-[0.6rem] font-medium ml-1">Wifi</p>
      </div>
      <div
        className="flex items-center  bg-gray-100 min-w-[50px] p-[6px] text-gray-500
            "
      >
        <IoIosWifi size={15} />
        <p className="text-[0.6rem] font-medium ml-1">
          {Bunkedbed ? "Bunkedbed" : "bed"}
        </p>
      </div>

      <div
        className={
          Bathroom
            ? "flex items-center  bg-gray-100 min-w-[50px] p-[6px] text-gray-500"
            : "hidden"
        }
      >
        <IoIosWifi size={15} />
        <p className="text-[0.6rem] font-medium ml-1">Bathroom</p>
      </div>

      <div
        className={
          Wardrobe
            ? "flex items-center  bg-gray-100 min-w-[50px] p-[6px] text-gray-500"
            : "hidden"
        }
      >
        <IoIosWifi size={15} />
        <p className="text-[0.6rem] font-medium ml-1">Walldrobe</p>
      </div>

      <div
        className={
          Kitchen
            ? "flex items-center  bg-gray-100 min-w-[50px] p-[6px] text-gray-500"
            : "hidden"
        }
      >
        <IoIosWifi size={15} />
        <p className="text-[0.6rem] font-medium ml-1">Kitchen</p>
      </div>
    </div>
  );
};

export default Facility;
