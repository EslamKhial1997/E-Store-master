import { useState } from "react";
import Style from "../../Dashboard.module.css";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import {
  Autocomplete,
  TextField,
  Snackbar,
  Alert,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { styled } from "@mui/material/styles";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import {
  createUsers,
  setDialog,
} from "../../../Store/store";
import { useFormik } from "formik";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const createCategorySchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "User Too Short!")
    .max(50, "User Too Long!")
    .required("User Name Is Required"),
  email: Yup.string().email().required("E-Mail Is Required"),
  phone: Yup.string().matches(phoneRegExp, 'Phone number is not valid'),
  password: Yup.string()
    .min(2, "Password Too Short!")
    .max(50, "Password Too Long!")
    .required("Password Is Required"),
  passwordConfirm: Yup.string()
    .oneOf([Yup.ref("password"), null], " Passwords  Must Match")
    .required("Password Confirm Is Required"),
});

const UserForm = (id) => {
  const options = ["user", "admin", "manger"];
  const status = ["active", "inactive"];
  const [open, setOpen] = useState(false);
  const selector = useSelector((state) => state.StoreSlice);
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setDialog(false));
  };
 
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      passwordConfirm: "",
      phone: "",
      role: "",
      imageProfile: "",
      status: "",
      api: "users",
    },
    validationSchema: createCategorySchema,
    onSubmit: async (values) => {
      
    Object.keys(values).forEach(key => {
        if (values[key] === null ||values[key] === "") {
          delete values[key];
        }
      });
      console.log(values);
   
      await dispatch(createUsers(values))
        .unwrap()
        .then(() => {
          setOpen(true);
        })
        .catch((err) => {
          setOpen(true);
          return (formik.errors.error = err.map((e) => {return `--:${ e.msg}`}));
        });
      // : await dispatch(editUsers(values))
      //     .unwrap()
      //     .then(() => {
      //       setOpen(true);
      //     })
      //     .catch((err) => {
      //       return (formik.errors.error = err);
      //     });
    },
  });
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={selector.dialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {!id === null || !id === undefined ? "Create User" : "Edit User"}
        </DialogTitle>
        <IconButton
          aria-label="close"
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
        <DialogContent dividers>
          <form
            className="d-flex flex-wrap justify-content-center card"
            onSubmit={formik.handleSubmit}
          >
            <div className="col-12  px-2">
              {" "}
              <div className="d-flex flex-wrap justify-content-around align-items-center">
                {" "}
                <div className="col-lg-5 col-md-5 col-12 col-sm-12 mt-3">
                  <label
                    className={`col-12 ${
                      formik.errors.name ? " text-danger" : "text-dark"
                    } `}
                  >
                    Name
                  </label>{" "}
                  <input
                    type="text"
                    className={`p-2 col-12 border rounded ${
                      formik.errors.name ? "border-danger text-danger" : ""
                    } `}
                    placeholder={
                      formik.errors.name ? formik.errors.name : "User Name"
                    }
                    onChange={formik.handleChange}
                    name="name"
                    id="name"
                    value={formik.values.name}
                  />
                  <span className="text-danger">{formik.errors.name}</span>
                </div>
                <div className="col-lg-5 col-md-5 col-12 col-sm-12 mt-3">
                  {" "}
                  <label
                    className={`col-12 ${
                      formik.errors.email ? " text-danger" : "text-dark"
                    } `}
                  >
                    E-Mail
                  </label>{" "}
                  <input
                    type="text"
                    className={`p-2 col-12 border rounded ${
                      formik.errors.email ? "border-danger text-danger" : ""
                    } `}
                    placeholder={
                      formik.errors.email ? formik.errors.email : "User E-Mail"
                    }
                    onChange={formik.handleChange}
                    name="email"
                    id="email"
                    value={formik.values.email}
                  />
                  <span className="text-danger">{formik.errors.email}</span>
                </div>
                <div className="col-lg-5 col-md-5 col-12 col-sm-12 mt-3">
                  {" "}
                  <label
                    className={`col-12 ${
                      formik.errors.password ? " text-danger" : "text-dark"
                    } `}
                  >
                    Password
                  </label>{" "}
                  <input
                    type="text"
                    className={`p-2 col-12 border rounded ${
                      formik.errors.password ? "border-danger text-danger" : ""
                    } `}
                    placeholder={
                      formik.errors.password
                        ? formik.errors.password
                        : "User password"
                    }
                    onChange={formik.handleChange}
                    name="password"
                    id="password"
                    value={formik.values.password}
                  />
                  <span className="text-danger">{formik.errors.password}</span>
                </div>
                <div className="col-lg-5 col-md-5 col-12 col-sm-12 mt-3">
                  {" "}
                  <label
                    className={`col-12 ${
                      formik.errors.passwordConfirm
                        ? " text-danger"
                        : "text-dark"
                    } `}
                  >
                    Confirm Password
                  </label>{" "}
                  <input
                    type="text"
                    className={`p-2 col-12 border rounded ${
                      formik.errors.passwordConfirm
                        ? "border-danger text-danger"
                        : ""
                    } `}
                    placeholder={
                      formik.errors.passwordConfirm
                        ? formik.errors.passwordConfirm
                        : "Password Confirm"
                    }
                    onChange={formik.handleChange}
                    name="passwordConfirm"
                    id="passwordConfirm"
                    value={formik.values.passwordConfirm}
                  />
                  <span className="text-danger">
                    {formik.errors.passwordConfirm}
                  </span>
                </div>
                <div className="col-lg-5 col-md-5 col-12 col-sm-12 mt-3">
                  <label
                    className={`col-12 ${
                      formik.errors.phone ? " text-danger" : "text-dark"
                    } `}
                  >
                    Phone
                  </label>{" "}
                  <input
                    type="text"
                    className={`p-2 col-12 border rounded ${
                      formik.errors.phone ? "border-danger text-danger" : ""
                    } `}
                    placeholder={
                      formik.errors.phone ? formik.errors.phone : "Phone Number"
                    }
                    onChange={formik.handleChange}
                    name="phone"
                    id="phone"
                    value={formik.values.phone}
                  />
                  <span>{formik.errors.phone}</span>
                </div>
                <div className="col-lg-5  col-md-5 col-12 col-sm-12 mt-3">
                  <label className="col-12">User Role</label>
                  <Autocomplete
                    value={formik.values.role}
                    onChange={(event, newValue) => {
                      formik.setFieldValue("role", newValue);
                    }}
                    // inputValue={State.role}
                    // onInputChange={(event, newInputValue) => {
                    //   State.role = newInputValue;
                    // }}
                    className="col-12"
                    id="controllable-states-demo"
                    options={options}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="User Role" />
                    )}
                  />
                </div>
                <div className="col-lg-5  col-md-5 col-12 col-sm-12 mt-3">
                  <label className="col-12">User Status</label>
                  <Autocomplete
                    value={formik.values.status}
                    onChange={(event, newValue) => {
                      formik.setFieldValue("status", newValue);
                    }}
                    // inputValue={State.role}
                    // onInputChange={(event, newInputValue) => {
                    //   State.role = newInputValue;
                    // }}
                    className="col-12"
                    id="controllable-states-demo"
                    options={status}
                    renderInput={(params) => (
                      <TextField {...params} placeholder="User Role" />
                    )}
                  />
                </div>
                <div className={`${Style.upload} px-2 col-5 pt-3`}>
                  {" "}
                  <input
                    className="w-100"
                    type="file"
                    name="imageProfile"
                    id="imageProfile"
                    onChange={(event) => {
                      formik.setFieldValue(
                        "imageProfile",
                        event.currentTarget.files[0]
                      );
                    }}
                    accept="image/*"
                  />
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary m-3">
              Save
            </button>
          </form>
        </DialogContent>
      </BootstrapDialog>
      <Snackbar
        open={open}
        autoHideDuration={3000}
        onClose={() => {
          setOpen(false);
        }}
      >
        <Alert
          onClose={handleClose}
          severity={formik.errors.error ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {formik.errors.error ? formik.errors.error : "Created is a success"}
        </Alert>
      </Snackbar>
    </div>
  );
};
export default UserForm;
