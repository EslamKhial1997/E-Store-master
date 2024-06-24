import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import { useSelector } from "react-redux";
const UserStatus = () => {
  const { dataById } = useSelector((state) => state.StoreSlice);
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("");

  const handleChangeRole = (event) => {
    setRole(event.target.value);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
  };

  return (
    <div className="d-flex justify-content-between align-items-center">
      <div className="col-lg-4 col-md-5 col-sm-5 col-5">
        <h2 className="fw-bold">Role</h2>
        <div>
          {" "}
          <FormControl fullWidth>
            <InputLabel
              id="demo-simple-select-label"
              className="fw-bold text-dark"
            >
              {dataById.role}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={role}
              label={dataById.role}
              onChange={handleChangeRole}
              className="border border-primary"
            >
              <MenuItem value={"manger"}>Manger</MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"user"}>User</MenuItem>
            </Select>
            <Button className="col-2" variant="outlined">
              Save
            </Button>
          </FormControl>
        </div>
      </div>
      <div className="col-lg-4 col-md-5 col-sm-5 col-5">
        <h2 className="fw-bold">Status</h2>
        <div>
          {" "}
          <FormControl fullWidth>
            <InputLabel
              className={` ${
                dataById.active !== "active" ? "text-danger" : "text-success"
              } color-light`}
              id="demo-simple-select-label"
            >
              {dataById.active}
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={status}
              label="Age"
              color={dataById.active !== "active" ? "error" : "success"}
              onChange={handleChangeStatus}
              className={`border  ${
                dataById.active !== "active"
                  ? ("text-danger", "border-danger")
                  : ("text-success", "border-success")
              } color-light`}
            >
              <MenuItem value={"active"}>Active</MenuItem>
              <MenuItem value={"inactive"}>Inactive</MenuItem>
            </Select>
            <Button
              className={` ${
                dataById.active !== "active" ? "text-danger" : "text-success"
              } col-2`}
              variant="outlined"
              color={dataById.active !== "active" ? "error" : "success"}
            >
              Save
            </Button>
          </FormControl>
        </div>
      </div>
    </div>
  );
};

export default UserStatus;
