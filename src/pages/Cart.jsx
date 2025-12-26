


import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cart } = useSelector((state) => state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    setTotalAmount(
      cart.reduce((acc, curr) => acc + curr.price, 0)
    );
  }, [cart]);

  return (
    <div className=" flex justify-center items-center  w-[45%] mx-[15%] ">
      {cart.length > 0 ? (
        <div className=" flex flex-row  " >
          {/* Cart Items */}
          <div className="" >
            {cart.map((item, index) => (
              <CartItem
                key={item.id}
                item={item}
                itemIndex={index}
              />
            ))}
          </div>

          {/* Summary */}
          <div className=" ml-[10%] mt-[8%] ">
            <div className="  ml-4">
              <h3 className=" text-green-700 text-[20px] font-semibold -mb-[10px]">Your Cart</h3>
              <h2 className="text-green-700 text-[35px] font-bold ">Summary</h2>
              <p className="font-medium">Total Items: {cart.length}</p>
            </div>

            <div className=" flex flex-col mt-[200%] ml-4  w-full ">
              <p className="font-semibold">Total Amount: ${totalAmount}</p>
              <button className=" text-white bg-green-700 font-bold rounded-lg  w-full transition-all duration-200 hover:bg-green-500 py-2 ">CheckOut Now</button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col justify-center items-center ml-[50%] mt-[50%]">
          <h1 className="font-semibold text-[20px]">Cart Empty</h1>
          <Link to="/">
            <button className="text-white bg-green-700 font-bold  py-2  px-3 rounded-md  w-full transition-all duration-200 hover:bg-green-500 ">Shop Now</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
