import { useState } from "react";
import Radio from "@mui/material/Radio";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Loading from "../../utils/Loading";
import { getDataByID } from "../../../Store/store";
import { useParams } from "react-router-dom";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import error400 from "../image/400-status-code.png";
import { Button } from "@mui/material";
import UserCharts from "./Charts/UserCharts";
import Purchases from "./Charts/Purchases";
import UserStatus from "./UserStatus";
const UserInfo = () => {
  const dispatch = useDispatch();
  const params = useParams();
  const { dataById, isLoading, isError } = useSelector(
    (state) => state.StoreSlice
  );

  useEffect(() => {
    dispatch(getDataByID({ title: "users", id: params.id }));
  }, [dispatch, params]);
  console.log(dataById);
  return (
    <div className=" w-100">
      {isLoading ? (
        <Loading />
      ) : isError ? (
        <img src={error400} />
      ) : dataById === null ? (
        <img src={error400} />
      ) : (
        <div className="bg-light col-lg-10 col-md-12 col-sm-12 m-auto  pt-5  mt-5 border rounded">
          <div className="w-100 justify-content-center border p-2 rounded col-lg-10 col-md-12 col-sm-12 ">
            <div className="row container justify-content-around">
              {" "}
              <div className="flex-wrap d-flex justify-content-around align-items-center col-lg-11 col-md-12 col-sm-12  mb-2">
                <div className="col-lg-6 col-md-11 col-sm-10 bg-white border text-start rounded p-2 flex-wrap">
                  <span className="d-block">
                    <strong>UserID</strong>:{dataById._id}
                  </span>
                  <span className="d-block">
                    <strong>LastTimeLogged</strong>:{Date.now()}
                  </span>
                </div>

                <div className="col-lg-3 col-md-8 col-sm-8 bg-white border text-start p-2 rounded flex-wrap">
                  <span className="d-block">
                    <strong>createdAt</strong>:
                    {`${new Date(dataById.createdAt).toLocaleTimeString()}`}
                  </span>
                  <span className="d-block">
                    <strong>updatedAt</strong>:
                    {`${new Date(dataById.updatedAt).toLocaleTimeString()}`}
                  </span>
                </div>
                <div className="col-2">
                  <Button className="rounded border">
                    <DeleteIcon className="text-danger" />
                  </Button>
                  <Button className="rounded border">
                    <EditIcon />
                  </Button>
                </div>
              </div>
              <hr />
              <div className="col-lg-10 justify-content-around col-md-12 col-sm-12">
                <div>
                  {" "}
                  <div className="d-flex flex-wrap justify-content-between align-items-center">
                    <div className="col-lg-8 col-md-9 col-sm-12">
                      {" "}
                      <h5 className="mt-3 fw-bold ">
                        <strong>UserName:</strong>
                        {dataById.name}
                      </h5>
                      <h5 className="mt-3 fw-bold ">
                        <strong>E-Mail:</strong>
                        {dataById.email}
                      </h5>
                      <h5 className="mt-3 fw-bold ">
                        <strong>Phone:</strong>
                        {dataById.phone}
                      </h5>
                      <h5 className="mt-3 fw-bold ">
                        <strong>PasswordUpdated:</strong>
                        {dataById.phone}
                      </h5>
                    </div>
                    <div className="col-lg-3 col-md-3 col-sm-8" >
                      <img
                        className="w-100 border rounded"
                        src={dataById.imageProfile}
                        style={{ maxHeight: "150px" }}
                      />
                    </div>
                  </div>
                  <hr />
                 <div className="mt-5 text-center"> <UserStatus /></div>
                </div>
                <hr />
                <div className=" col-12   my-3 py-2 bg-white border rounded">
                  <h2 className="fw-bold text-lg-start text-center w-100">Adresses</h2>
                  <div className="d-flex justify-content-center flex-wrap col-lg-12 col-md-12 col-sm-12">
                    {" "}
                    <div className="row col-12 justify-content-between ">
                      {" "}
                      <h6 className="col-lg-6 col-md-12 col-sm-12 mt-3 fw-bold ">
                        <strong>Alias:</strong>
                        {dataById.name}
                      </h6>
                      <h6 className="col-lg-6 col-md-12 col-sm-12 mt-3 fw-bold text-wrap text-break">
                        <strong>Details:</strong>
                        {dataById.email}
                      </h6>
                    </div>
                    <div className="row col-12 justify-content-between">
                      {" "}
                      <h6 className="col-lg-6 col-md-12 col-sm-12 mt-3 fw-bold ">
                        <strong>Phone:</strong>
                        {dataById.phone}
                      </h6>
                      <h6 className="col-lg-6 col-md-12 col-sm-12 mt-3 fw-bold ">
                        <strong>City:</strong>
                        {dataById.phone}
                      </h6>
                    </div>
                    <div className="row col-12 justify-content-between">
                      {" "}
                      <h6 className="col-lg-6 col-md-12 col-sm-12 mt-3 fw-bold ">
                        <strong>Postal:</strong>
                        {dataById.phone}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex flex-wrap">
            <UserCharts />

            <Purchases />
          </div>
        </div>
      )}
    </div>
  );
};

export default UserInfo;
