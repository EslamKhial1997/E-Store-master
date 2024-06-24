
import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getData, setDialog } from "../../../Store/store";

import Loading from "../../utils/Loading";
import CouponsForm from "./CouponsForm";
import CouponList from "./CouponsList";


const DashBoardCoupons = () => {
  const { data, isLoading, isError } = useSelector((state) => state.StoreSlice);
  const dispatch = useDispatch();
  const [id, setid] = useState("");
  const handleDeleteClick = (id) => {
    dispatch(deleteUsers({ id: id, api: "categories" }));
  };
  const getID = (id) => {
    setid(id);
    dispatch(setDialog(true));
  };

  useEffect(() => {
    dispatch(getData("coupon"));
  }, [dispatch]);

  return (
    <div className="container">
    <CouponsForm />
    <Loading loading={isLoading} error={isError}>
      <div className="border " style={{ marginTop: "100px" }}>
      <CouponList
      data={data}
      Pinding={isLoading}
      error={isError}
      getID={getID}
    />
      </div>
    </Loading>
  </div>


   
  );
};
export default DashBoardCoupons;

