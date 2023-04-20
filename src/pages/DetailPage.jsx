import React from "react";

import { useParams } from "react-router-dom";
import { useCurrentUser } from "../firbaseService/UserContext";
import Facility from "../components/Facility";
import Select from "react-select";

import { db } from "../firbaseService/config";
import { collection, query, where } from "firebase/firestore";
import { useCollectionData } from "react-firebase-hooks/firestore";

const RoomDetail = ({
  beds,
  bedsleft,
  block,
  floor,
  gender,
  id,
  number,
  price,
  features,
}) => {
  return (
    <div>
      <h2 className="text-[1rem] bg-blue-100  text-blue-600 rounded-sm p-2">
        Room Details
      </h2>
      <div className="my-6 grid gap-1">
        <div className=" grid grid-cols-2 items-end">
          <p>Block :</p>
          <p>{`${block || ""}`}</p>
        </div>

        <div className=" grid grid-cols-2 items-end">
          <p>Floor :</p>
          <p>{`${floor || ""}`}</p>
        </div>

        <div className=" grid grid-cols-2 items-end">
          <p>Number :</p>
          <p> {`${number || ""}`}</p>
        </div>

        <div className=" grid grid-cols-2 items-end">
          <p>Gender :</p>
          <p>{`${gender || ""}`}</p>
        </div>

        <div className=" grid grid-cols-2 items-end">
          <p>Type :</p>
          <p>{beds && `${beds} in a room`}</p>
        </div>

        <div className=" grid grid-cols-2 items-end">
          <p>Price :</p>
          <p>
            {price && `GH₵ ${price}`}
            <span className="text-[0.65rem] text-gray-500">
              {price && " /SEM"}
            </span>
          </p>
        </div>
        <div className=" grid grid-cols-2 items-end">
          <p>Beds Left :</p>
          <p>{`${bedsleft || ""}`}</p>
        </div>
      </div>
      {id && <Facility features={features} />}
    </div>
  );
};

const HostelFeatures = () => {
  return (
    <div>
      <h2 className="text-[1rem] bg-blue-100 p-2 text-blue-600 rounded-sm ">
        Hostel Features
      </h2>

      <ul className=" grid gap-1 mt-6 list-disc ml-3">
        <li>Free Water</li>
        <li>Study Room</li>
        <li>Mini Mart</li>
        <li>24hr Wifi</li>
        <li>24hr Security</li>
      </ul>
    </div>
  );
};

const PersonalDetails = () => {
  const { curentUser } = useCurrentUser();
  console.log(curentUser?.photoURL);

  const { email, displayName } = curentUser ? { ...curentUser } : {};

  const options = [
    { value: "chocolate", label: "University of Professional Studies, Accra" },
    { value: "strawberry", label: "University of Ghana Legon" },
    { value: "vanilla", label: "Other" },
  ];
  return (
    <div className=" bg-white border rounded-sm p-6 text-[0.85rem]">
      <h2 className="text-[1rem] bg-blue-100  text-blue-600 rounded-sm p-2">
        Personal Information
      </h2>

      <div className="mt-6">
        <div className="grid md:grid-cols-2  gap-4  ">
          <div>
            <p>Full Name :</p>
            <input
              type="text"
              value={displayName || ""}
              className="border p-[7px] px-3 w-full rounded-[4px] border-gray-300 mt-1"
              disabled={true}
            />
          </div>

          <div>
            <p>Email :</p>
            <input
              type="text"
              value={email || ""}
              className="border p-[7px] px-3 w-full rounded-[4px] border-gray-300 mt-1"
              disabled={true}
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2  gap-4 mt-4 md:mt-6">
          <div>
            <p>Contact :</p>
            <input
              type="text"
              placeholder="(+233)"
              className="border p-[7px] px-3 w-full rounded-[4px] border-gray-300 mt-1"
            />
          </div>

          <div>
            <p>University :</p>
            <Select
              options={options}
              placeholder="Choose University"
              className="mt-1"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const DetailPage = () => {
  const { id } = useParams();

  const roomRef = query(collection(db, "rooms"), where("id", "==", `${id}`));

  const [roomDocs, loading, error] = useCollectionData(roomRef);

  const room = roomDocs ? roomDocs[0] : {};

  return (
    <section className="w-screen  bg-gray-100 pt-2 px-[1rem] md:px-[2rem] text-black">
      <div className="  max-w-[1300px] mx-auto  mt-4 flex  flex-col  md:flex-row justify-between">
        <aside className=" md:w-[30%] lg:w-[24%]  bg-white p-6 border rounded-sm text-[0.8rem] grid gap-6 ">
          <RoomDetail {...room} />
          <hr />
          <HostelFeatures />
        </aside>

        <div className="md:w-[68%] lg:w-[74%] flex flex-col mt-2 md:mt-0  mb-8 gap-2 md:gap-4">
          <PersonalDetails />
          <div className=" bg-white border rounded-sm p-6 ">
            <input type="checkbox" value={false} name="agree" />
            <label htmlFor="agree" className="ml-2">
              I Agree
            </label>
            <button className="w-full bg-blue-700 text-white p-2 rounded-sm font-normal hover:bg-blue-800 mt-4">
              Book now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailPage;
