import React from "react";
import { FaHouzz } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Footer from "./Footer";
import { signInWithGoogle } from "../firbaseService/Auth";
import { useCurrentUser } from "../firbaseService/UserContext";
import GenderContext from "../GenderContext";

const Navbar = (props) => {
  const { curentUser } = useCurrentUser();

  const { selectedGender } = React.useContext(GenderContext);

  return (
    <>
      <div>
        <div className="w-full shadow-sm  px-[1rem] md:px-[2rem] bg-white ">
          <nav className="max-w-[1300px]   py-4  text-[14px] mx-auto">
            <div className="flex justify-between items-center ">
              <NavLink to="/" className="flex gap-2 items-end">
                <FaHouzz className=" text-slate-700" size={34} />
                <p>Fbi</p>
              </NavLink>

              <div className="flex ">
                <div className="flex gap-8 font-medium items-center">
                  <NavLink
                    to={`/home/${selectedGender}`}
                    className={(isActive) => {
                      return (
                        "py-[6px] block hover:border-b-2  border-b-2  " +
                        (isActive.isActive
                          ? " border-b-blue-700"
                          : " border-b-white  hover:border-b-blue-700")
                      );
                    }}
                  >
                    Home
                  </NavLink>

                  <NavLink
                    to="/contact"
                    className={(isActive) => {
                      return (
                        "py-[6px] block hover:border-b-2  border-b-2  " +
                        (isActive.isActive
                          ? " border-b-blue-700"
                          : " border-b-white  hover:border-b-blue-700")
                      );
                    }}
                  >
                    Contact
                  </NavLink>
                </div>

                <button
                  onClick={signInWithGoogle}
                  className={
                    curentUser
                      ? "hidden"
                      : "py-[6px] px-6 block bg-blue-700 text-white border border-blue-700 hover:bg-blue-800 rounded-sm ml-8"
                  }
                >
                  Sign in
                </button>

                <img
                  src={curentUser?.photoURL}
                  alt="user profil"
                  className={
                    curentUser
                      ? "w-[35px] h-[35px] object-contain ml-8 rounded-full"
                      : "hidden"
                  }
                />
              </div>
            </div>
          </nav>
        </div>

        {props.children}
      </div>
    </>
  );
};

export default Navbar;
