import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Navbar = () => {

  const {cart} = useSelector((state) => (state))
  return (
    <div>
      <nav className="flex items-center justify-between h-20 max-w-6xl mx-auto ">
        <NavLink to="/">
          <div className="">
            <img
              className="h-[60px]"
              src="https://cdn-icons-png.flaticon.com/512/5566/5566915.png"
            />
          </div>
        </NavLink>

        <div className="flex items-center text-white font-medium space-x-6 mr-5">
          <NavLink to="/">
            {" "}
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div className="relative">
              {" "}
              <FaShoppingCart className="text-2xl" />
              {
                cart.length > 0 &&
                  <span className="absolute -top-1 -right-2 text-xs w-4 h-4 bg-green-600 flex justify-center animate-bounce rounded-full text-white">{cart.length}</span>
              }
            
            </div>
          </NavLink>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
