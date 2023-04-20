import { useState } from "react";
import RoomCard from "../components/RoomCard";
import Select from "react-select";
import { useParams } from "react-router-dom";

import { db } from "../firbaseService/config";
import { collection, where, query } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const HomePage = () => {
  const [floorOptions, setFloorOption] = useState([]);
  const [selectedFloor, setSelectedFloor] = useState();
  const { gender } = useParams();

  const [hostelDocs, loading, error] = useCollectionData(
    collection(db, "hostels")
  );

  const [roomDocs, roomLoading, roomError] = useCollectionData(
    collection(db, "rooms")
  );

  const hostelsOption = [
    hostelDocs?.map((data) => ({
      value: data.name,
      label: data.name,
    })),
  ];

  const getFloors = (chioce) => {
    setFloorOption(null);
    setSelectedFloor(null);
    const currentHostel = hostelDocs?.filter(
      (hostel) => hostel.name === chioce
    );

    const floors = currentHostel?.map((hostel) => hostel.floors);
    const option = generateHostelFloors(floors[0]);
    setFloorOption(option);
  };

  // generate hostel floors with ordinal position [st, nd,rd th]
  const generateHostelFloors = (numOfFloors) => {
    if (numOfFloors === 0) {
      return [
        {
          value: "Ground floor",
          label: "Ground floor",
        },
      ];
    }

    const suffixes = {
      0: "Ground ",
      1: "st ",
      2: "nd ",
      3: "rd  ",
    };
    const arr = [""];
    const result = [];
    for (let i = 0; i < numOfFloors; i++) {
      arr.push(i + 1);
      const num = arr[i];
      const suffix = suffixes[i + 0] || "th  ";
      result.push(`${num}${suffix} floor`);
    }

    return result.map((d) => ({ value: d, label: d }));
  };

  return (
    <>
      <div className="w-screen  pt-2 px-[1rem] md:px-[2rem] ">
        <div className="max-w-[1300px] mx-auto">
          <section className="grid sm:grid-cols-2 gap-4 mt-2 ">
            <Select
              options={hostelsOption[0]}
              loading={loading}
              placeholder="Select Block..."
              onChange={(choice) => {
                getFloors(choice.value);
              }}
            />
            <Select
              options={floorOptions}
              value={selectedFloor}
              placeholder="Select Floor..."
              onChange={(choice) => {
                setSelectedFloor({ value: choice.value, label: choice.value });
              }}
            />
          </section>
          <section className=" mt-4 grid grid-cols-1 items-center  md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-2 md:gap-4">
            {roomDocs?.map((data) => (
              <RoomCard key={data.id} {...data} />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};
export default HomePage;

// 10290907
// #Gsinc2020
