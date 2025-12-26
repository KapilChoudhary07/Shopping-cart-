import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { add, remove } from "../redux/Slices/CartSlice";

const Product = ({ post }) => {
  const { cart } = useSelector((state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(add(post));
    toast.success("Item added from the cart");
  };

  const removeFromCart = () => {
    dispatch(remove(post.id));
    toast.error("Item remove from the cart");
  };

  return (
    <div className="flex flex-col items-center justify-center hover:scale-110 transition-all duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
      <div>
        <p className="text-gray-700 font-bold text-lg text-left truncate w-40 -mb-[8px]">
          {post.title}
        </p>
      </div>
      <div>
        <p className="text-gray-400 w-40 font-normal text-[12px] text-left  ">
          {post.description.split(" ").slice(0, 10).join(" ") + "..."}
        </p>
      </div>
      <div className="h-[180px]">
        <img src={post.image} className="h-full w-full items-center w-full " />
      </div>
      <div className="flex justify-between mt-5 gap-12">
        <div>
          <p className="text-green-600 font-bold">${post.price}</p>
        </div>
        {cart.some((p) => p.id == post.id) ? (
          <button
            className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[13px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in"
            onClick={removeFromCart}
          >
            Remove Item
          </button>
        ) : (
          <button className="text-gray-700 border-2 border-gray-700 rounded-full font-semibold text-[13px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white transition-all duration-300 ease-in" onClick={addToCart}>Add to Cart</button>
        )}
      </div>
    </div>
  );
};

export default Product;
