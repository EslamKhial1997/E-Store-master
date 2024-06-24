import React, { useEffect } from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import DensitySmallSharpIcon from "@mui/icons-material/DensitySmallSharp";
import { Skeleton } from "@mui/material";
import Populate from "./Populate";
import Cloud from "./Cloud";
import axios from "axios";
const SectionLeft = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/v1/categories`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch(() => {
        setisLoading(true);
      })
      .finally(() => setisLoading(false));
  }, []);
  const Category = data.map((ele) =>
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
        className="d-flex justify-content-between my-2 align-items-center border-bottom"
        key={ele._id}
      >
        <img
          src={ele.image}
          alt="Categoty image"
          className="rounded"
          style={{ width: "50px", height: "50px" }}
        />
        <span>{ele.name}</span>
      </div>
    )
  );
  return (
    <div className="sticky-top mt-3 h-screen">
      <div className=" rounded bg-white">
        <div className="d-flex align-items-center ">
          <Accordion className="col-12">
            <AccordionSummary
              expandIcon={<ArrowDownwardIcon color="warning" />}
              aria-controls="panel1-content"
              id="panel1-header"
              style={{ backgroundColor: "#072541", cursor: "pointer" }}
            >
              <Typography className="text-light fw-bolder">
                <DensitySmallSharpIcon />
                Category
              </Typography>
            </AccordionSummary>
            <AccordionDetails
              className="SideBarProduct"
              style={{ maxHeight: "400px", overflowY: "scroll" }}
            >
              {Category}
            </AccordionDetails>
          </Accordion>
        </div>

        <Populate />
      </div>

      <Cloud />
    </div>
  );
};

export default SectionLeft;
