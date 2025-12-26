import React from "react";
import { RiDeleteBin7Fill } from "react-icons/ri";
import { useDispatch } from "react-redux";
import {toast } from "react-hot-toast"
import { remove } from "../redux/Slices/CartSlice";


const CartItem = ({ item, itemIndex }) => {


  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item removed")
  }
  return (
    <div className="flex border-b-2 border-black   justify-center items-center mt-[30px] ">
      <div className=" flex gap-4  mb-6">
        <div>
          <img className="w-[200px] " src={item.image} />
        </div>
        <div className="flex flex-col  ">
          <h1 className="text-[20px]  font-semibold leading-relaxed ">{item.title}</h1>
          <p className="mt-[30px] font-normal " >{item.description.split(" ").slice(0, 10).join(" ") }</p>

          <div className="flex gap-x-[60%] mt-6 font-bold text-green-600 items-center ">
            <p>{item.price}</p>

            <div className="items-center cursor-pointer py-2 px-2 bg-red-200 text-[25px] rounded-full hover:bg-red-900 text-pink-green" onClick={removeFromCart}>
              <RiDeleteBin7Fill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
