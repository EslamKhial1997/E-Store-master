import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddressForm from "./AddressForm";
const Addresses = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <div className="container flex-wrap">
      <div className="col-12">
        <h2 className="fw-bolder my-3 text-light" >
          Welcome <span>Eslam Ahmed</span>
        </h2>
      </div>
      <div className="d-flex container flex-wrap bg-gray-900 text-light border mt-3 rounded">
        <div className="d-flex  col-12 justify-content-between ">
          <h1 className="fw-bold text-light">Home</h1>
          <div style={{ cursor: "pointer" }}>
            <EditIcon color="primary" /> <DeleteIcon color="error" />
          </div>
        </div>
        <div>
          <div>
            <span className="d-block">
              El-Arish Noth-Sina Next to the new parking lot
            </span>
          </div>

          <div className="d-block">
            {" "}
            <span className="fw-bold">Phone:</span>
            <small>01098648010</small>{" "}
          </div>
          <div className="d-block">
            {" "}
            <span className="fw-bold">Gander:</span>
            <small>Male</small>{" "}
          </div>
          <div className="d-block">
            {" "}
            <span className="fw-bold">postalCode:</span>
            <small>068</small>{" "}
          </div>
        </div>
      </div>
      <div className="d-flex container flex-wrap bg-gray-900 text-light border mt-3 rounded">
        <div className="d-flex  col-12 justify-content-between ">
          <h1 className="fw-bold text-light">Home</h1>
          <div style={{ cursor: "pointer" }}>
            <EditIcon color="primary" /> <DeleteIcon color="error" />
          </div>
        </div>
        <div>
          <div>
            <span className="d-block">
              El-Arish Noth-Sina Next to the new parking lot
            </span>
          </div>

          <div className="d-block">
            {" "}
            <span className="fw-bold">Phone:</span>
            <small>01098648010</small>{" "}
          </div>
          <div className="d-block">
            {" "}
            <span className="fw-bold">Gander:</span>
            <small>Male</small>{" "}
          </div>
          <div className="d-block">
            {" "}
            <span className="fw-bold">postalCode:</span>
            <small>068</small>{" "}
          </div>
        </div>
      </div>
     
      <div>
        <button
          className="p-2 border-0 rounded my-3"
          onClick={handleClickOpen}
        
        >
          Add New Address{" "}
        </button>
        <AddressForm
          open={open}
          setOpen={() => {
            setOpen();
          }}
        />
      </div>
    </div>
  );
};

export default Addresses;
