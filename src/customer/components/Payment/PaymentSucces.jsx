import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useSearchParams } from "react-router-dom";
import { getOrderById } from "../../../state/Order/Action";
import { updatePayment } from "../../../state/Payment/Action";
import { Alert, AlertTitle, Grid } from "@mui/material";
import OrderTracker from "../Order/OrderTracker";
import AddressCard from "../AddressCard/AddressCard";

const PaymentSucces = () => {
  const [paymentId, setPaymentId] = useState();
  const [referenceId, setReferenceId] = useState();
  const [paymentStatus, setPaymentStatus] = useState();
  const { orderId } = useParams();

  const dispatch = useDispatch();
  const { order } = useSelector((store) => store.order);



useEffect(() => {
  const urlParam = new URLSearchParams(window.location.search);
  const pid = urlParam.get("razorpay_payment_id");
  const pstatus = urlParam.get("razorpay_payment_link_status");

  if (pid) {
    setPaymentId(pid);
    setPaymentStatus(pstatus);
    dispatch(updatePayment({ orderId, paymentId: pid }));
    dispatch(getOrderById(orderId));
  }
}, [orderId]);


  return (
    <>
      <div className="px-5 lg:px-36">
        <div className="flex flex-col justify-center items-center">
          <Alert
            variant="filled"
            severity="success"
            sx={{ mb: 6, width: "fit-content" }}
          >
            <AlertTitle>Payment Success</AlertTitle>
            Congratulation Your Order Get Placed
          </Alert>
        </div>
        <OrderTracker activeStep={1} />
        {order?.orderItem?.map((elem, i) => {
          return (
            <Grid key={i} container className="space-y-5 py-5 pt-20 ">
              <Grid
                container
                item
                className="shadow-xl rounded-md p-5"
                sx={{ alignItems: "center", justifyContent: "space-between" }}
              >
                <Grid item size={{ xs: 6 }}>
                  <div className="flex item-center">
                    <img
                      className="w-[5rem] h-[5rem] object-cover object-top"
                      src="https://rukminim1.flixcart.com/image/612/612/xif0q/kurta/6/y/v/m-sksh-dt1105-black-fubar-original-imag4cpwzmhbufg4-bb.jpeg?q=70"
                    />
                    <div className="ml-5 space-y-5">
                      <p>{elem?.product?.title}</p>
                      <div className="opacity-50 text-xs font-semibold space-x-s">
                        <span>Color: {elem?.color}</span>
                        <span>Size: {elem?.size}</span>
                      </div>
                      <p>Seller : {elem?.product?.brand}</p>
                      <p>₹ {elem?.price}</p>
                    </div>
                  </div>
                </Grid>
                <Grid item>

                  <AddressCard address={order?.shipingAddress} />
                </Grid>
              </Grid>
            </Grid>
          );
        })}
      </div>
    </>
  );
};

export default PaymentSucces;
