import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getData, setDialog } from "../../../Store/store";

import Loading from "../../utils/Loading";
import { Button } from "@mui/material";
import { Add } from "@mui/icons-material";
import SubCategoryForm from "./SubCategoryForm";
import SubCategoryList from "./SubCategoryList";
const dashBoardSubCategory = () => {
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
    dispatch(getData("Subcategories"));
  }, [dispatch]);

  return (
    <div className="container">
    <SubCategoryForm />
    <Loading loading={isLoading} error={isError}>
      <div className="border " style={{ marginTop: "100px" }}>
      <SubCategoryList
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
export default dashBoardSubCategory;
