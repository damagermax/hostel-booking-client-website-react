import React from "react";
import { BsGenderMale, BsGenderFemale } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import GenderContext from "../GenderContext";

const GenderPage = () => {
  const navigate = useNavigate();
  const { setSelectedGender } = React.useContext(GenderContext);

  function handleGenderSelect(gender) {
    setSelectedGender(gender);
    navigate(`/home/${gender}`);
  }
  return (
    <div>
      <img
        src="https://cdn.shopify.com/s/files/1/0181/1795/products/HeavyDutyMetalBunk_0001_Left.jpg?v=1619602610"
        alt=""
        className=" w-screen h-screen fixed top-0 bottom-0"
      />
      <>
        <div className="modal w-screen h-screen  fixed  z-10 top-0 bottom-0 flex items-center justify-center">
          <div className=" bg-white w-[600px]  shadow-sm rounded-sm">
            <p className="text-2xl text-center py-4  ">You are ?</p>
            <hr />
            <div className="flex justify-center items-center gap-24 my-8">
              <div
                onClick={() => {
                  handleGenderSelect("male");
                }}
                className="flex items-center flex-col w-[150px] h-[150px]  justify-center rounded-full gap-4 bg-blue-500 shadow-lg p-4  hover:shadow-blue-400 cursor-pointer"
              >
                <BsGenderMale size={50} className=" text-gray-100" />
                <p className=" text-white font-medium">Male</p>
              </div>

              <div
                onClick={() => {
                  handleGenderSelect("female");
                }}
                className="flex items-center flex-col w-[150px] h-[150px]  justify-center rounded-full gap-4 bg-pink-500 shadow-lg p-4 hover:shadow-pink-400 cursor-pointer"
              >
                <BsGenderFemale size={50} className=" text-gray-100" />
                <p className=" text-white font-medium">Female</p>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
};

export default GenderPage;
