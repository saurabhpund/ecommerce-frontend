import React, { useState } from "react";
import RemoveCircleIcon from "@mui/icons-material/RemoveCircle";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import IconButton from "@mui/material/IconButton";
import { Button } from "@mui/material";
import { useDispatch } from "react-redux";
import { getCart, removeCartItem, updateCartItem } from "../../../state/Cart/Action";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(item?.quantity || 1);
  const handleUpdateCartItem = async (num) => {
  const newQuantity = quantity + num;
  if (newQuantity < 1) return;

  setQuantity(newQuantity);

  const data = {
    id: item?.id,
    data: { quantity: newQuantity },
  };

  await dispatch(updateCartItem(data));  
  dispatch(getCart());                    
};

  
 const handleRemoveCartItem = async () => {
  await dispatch(removeCartItem({ id: item?.id })); 
  dispatch(getCart());                              
};

  return (
    <div className="p-5 shadow-lg border-md">
      <div className="flex">
        {/* Image */}
        <div className="w-[5rem] h-[5rem] lg:w-[9rem] lg:h-[9rem]">
          <img
            className="w-full h-full object-cover object-top"
            src={item?.product?.imageUrl}
            alt=""
          />
        </div>

        {/* Details + Price in Column */}
        <div className="ml-5 flex flex-col justify-between">
          <div className=" space-y-1">
            <p className="font-semibold">{item?.product?.title}</p>
            <p className="opacity-70">
              Size" {item?.size}, {item?.color}
            </p>
            <p className="opacity-70 mt-2">Seller: {item?.product?.brand}</p>
          </div>

          <div className=" flex items-center pt-6 space-x-5 text-gray-900">
            <p className=" font-semibold">₹{item?.product?.discountedPrice}</p>
            <p className="opacity-50 line-through">₹{item?.product?.price}</p>
            <p className="font-semibold text-green-600">
              {item?.product?.discountPercentage}% Off
            </p>
          </div>
        </div>
      </div>

      <div className="lg:flex items-center lg:space-x-10 pt-4">
        <div className="flex items-center space-x-2">
          <IconButton
            onClick={() => handleUpdateCartItem(-1)}
            disabled={quantity === 1}
          >
            <RemoveCircleIcon />
          </IconButton>

          <span className="py-1 px-7 border rounded-sm">{quantity}</span>
          <IconButton
            sx={{ color: "RGB(145 85 253" }}
            onClick={() => handleUpdateCartItem(1)}
          >
            <AddCircleIcon />
          </IconButton>
        </div>

        <div>
          <Button
            onClick={handleRemoveCartItem}
            sx={{ color: "RGB(145 85 253)" }}
          >
            Remove
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
