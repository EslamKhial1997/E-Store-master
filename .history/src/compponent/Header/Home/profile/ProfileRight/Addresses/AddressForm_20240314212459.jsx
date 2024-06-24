import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

import { DatePicker } from "@mui/x-date-pickers/DatePicker";
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const AddressForm = ({ open, setOpen }) => {
  const handleClose = () => setOpen(false);

  return (
    <React.Fragment>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle style={{color:"#072541"}}>{"Add A New Address"}</DialogTitle>
        <DialogContent>
        <form className="row g-3">
      
     
       

        <div className="col-md-2">
          <label htmlFor="inputAddress" className="form-label text-dark">
          Alias
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="alias"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputAddress" className="form-label text-dark">
            Address
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="Enter Your Main Address"
          />
        </div>
        <div className="col-md-4">
        <label htmlFor="inputCity" className="form-label text-dark">
          City
        </label>
        <input
          type="text"
          className="form-control"
          id="inputCity"
          placeholder="Enter Your City"
        />
      </div>
        <div className="col-md-5">
          <label htmlFor="inputAddress2" className="form-label text-dark">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="Enter Your Phone Number"
          />
        </div>
       
        <div className="col-md-3">
          <label htmlFor="inputState" className="form-label text-dark">
            Gender
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose Gender...</option>
            <option>Male</option>
            <option>Female</option>
          </select>
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label text-dark">
            PostalCode
          </label>
          <input
          type="text"
          className="form-control"
          id="inputAddress2"
          placeholder="Enter Your Phone Number"
        />
        </div>     
        <DialogActions>
          <button
            className="p-2 border-0 rounded my-3"
            onClick={handleClose}
            style={{
              backgroundColor: "#072541",
              color: "#FFFFFF",
            }}
          >
            Cancle
          </button>
          <button
            className="p-2 border-0 rounded my-3"
            style={{
              backgroundColor: "#072541",
              color: "#FFFFFF",
            }}
          >
            Sumbit
          </button>
        </DialogActions>
      </form>
        </DialogContent>
      </Dialog>
    </React.Fragment>
  );
};

export default AddressForm;
