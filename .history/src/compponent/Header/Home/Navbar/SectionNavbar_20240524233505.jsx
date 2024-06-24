import * as React from "react";
import { NavLink } from "react-router-dom";

import { useDispatch } from "react-redux";
import { useEffect } from "react";

import axios from "axios";
import { setOpen,setCreate } from "../../../Store/store";

export default function SectionNavbar() {
  const [data, setData] = React.useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/v1/categories`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch((err) => {
        dispatch(setOpen(true));
        dispatch(setCreate("Something wont wrong"));
      });
  }, []);
  return (
    <div
      className="d-flex justify-content-around mt-3 align-items-center  bg-light"
      style={{ width: "100%", height: "100%", overflowX: "scroll" }}
    >
      {data.length > 0
        ? data.map((e) => (
            <NavLink
              className="col-lg-1 col-md-3 col-sm-4 col-3 d-flex justify-content-center m-auto border rounded text-dark fw-bold text-decoration-none"
              style={{ height: "100%" }}
              key={e.id}
            >
              <div className="w-100 p-2 " style={{ height: "100%" }}>
                <img
                  src={e.image}
                  className="w-100 rounded"
                  style={{ height: "60px" }}
                  alt="green iguana"
                />

                <small className="text-center w-100 d-block">{e.name}</small>
              </div>
            </NavLink>
          ))
        : ""}
    </div>
  );
}
