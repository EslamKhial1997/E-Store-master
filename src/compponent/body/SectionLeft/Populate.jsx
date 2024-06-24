import React, { useEffect } from "react";
import { Skeleton } from "@mui/material";
import axios from "axios";
const Populate = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/v1/products`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch(() => {
        setisLoading(true);
      })
      .finally(() => setisLoading(false));
  }, []);

  const populate = data.map((ele) =>
    isLoading ? (
      <div
        className="d-flex justify-content-around border-bottom my-2"
        key={ele._id}
      >
        <div className="row col-6">
          {" "}
          <Skeleton variant="rounded" height={80} />
        </div>
        <div className="row col-5">
          <Skeleton variant="rounded" height={20} />
          <Skeleton variant="rounded" height={20} />
          <Skeleton variant="rounded" height={20} />
        </div>
      </div>
    ) : (
      <div
        className="d-flex justify-content-around border-bottom m-2"
        key={ele._id}
      >
        <div className="row col-6">
          {" "}
          <img
            src={ele.images[0]}
            style={{ width: "100%", height: "100%" }}
            className="border rounded bg-danger px-0 "
          />
        </div>
        <div className="row col-6">
          <span className="fw-bold text-break">Zoom</span>
          <small className="text-secondary text-decoration-line-through">
            {ele.price}
          </small>
          <strong className="text-warning">{ele.priceAfterDiscount}L.E</strong>
        </div>
      </div>
    )
  );
  return (
    <div className="d-none d-lg-block d-md-block d-sm-none">
      <h6
        className="m-3 fw-bolder"
        style={{ color: "#072541", cursor: "pointer" }}
      >
        Popular
      </h6>

      {populate}
    </div>
  );
};

export default Populate;
