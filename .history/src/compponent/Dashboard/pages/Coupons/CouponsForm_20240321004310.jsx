import React, { useEffect } from "react";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { useDispatch, useSelector } from "react-redux";
import { createUsers, setDialog, setOpen } from "../../../Store/store";
import { styled } from "@mui/material/styles";



import Loading from "../../utils/Loading";
import { useFormik } from "formik";
import * as Yup from "yup";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const CouponsForm = (id) => {
  // const initState = {
  //   name: "",
  //   discount: "",
  //   expires:"",

  //   api: "coupon",
  // };
  // const [State, setState] = React.useState(initState);
  // const [getDataCat, setGetDataCat] = React.useState([]);

  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);
  // const handleClick = (event) => {
  //   axios
  //     .get(`http://localhost:8008/api/v1/coupon`)
  //     .then((e) => {
  //       setGetDataCat(e.data.data);
  //     })
  //     .catch(() => {});
  //   setAnchorEl(event.currentTarget);
  // };
  // const handleCloseOption = ({ target }) => {
  //   setCategory(target.getAttribute("value"));
  //   setAnchorEl(null);
  // };
  // const fromData = (e) => {
  //   setState((Preve) => ({ ...Preve, [e.target.name]: e.target.value }));
  // };
  // const selector = useSelector((state) => state.StoreSlice);
  const { isLoading, isError, dialog } = useSelector(
    (state) => state.StoreSlice
  );
  const dispatch = useDispatch();
  const handleClose = () => {
    dispatch(setDialog(false));
  };
  // const submit = (e) => {
  //   const data = new FormData();
  //   data.append("name", State.name);
  //   data.append("expires", expire);
  //   data.append("id", id);
  //   data.append("discount", discount);
  //   data.append("api", State.api);
  //   e.preventDefault();

  //   if (id === null || id === undefined || id === "") {
  //     dispatch(createUsers(data));
  //   } else {
  //     dispatch(editUsers(data));
  //   }
  //   handleClose();
  // };
  const createCouponSchema = Yup.object().shape({
    name: Yup.string()

      .min(2, "Coupon Too Short!")

      .max(50, "Coupon Too Long!")

      .required("Coupon Name Is Required"),
    discount: Yup.string()
    .required("Discount Value Is Required"),
    expires: Yup.string()
    .required("Expire Date Is Required"),
    error: Yup.string(),
  });
  const formik = useFormik({
    initialValues: {
      name: "",
      discount: "",
      expires: "",
      api: "categories",
    },
    validationSchema: createCouponSchema,
    onSubmit: async (values) => {
      await dispatch(createUsers(values))
        .unwrap()
        .then(() => {
          setOpen(true);
        })
        .catch((err) => {
          return (formik.errors.error = err.map((e) => e.msg));
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
  useEffect(() => {}, []);
  return (
    <div>
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={dialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {id === null ? "Create New Brand" : "Edit Brand"}
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
            <div className="d-flex align-items-center justify-content-around flex-wrap col-12 mt-2 px-2">
              {" "}
              <div className="col-6">
                {" "}
                <input
                  type="text"
                  className="w-100 p-2  border rounded"
                  placeholder="Coupon Name"
                  onChange={formik.handleChange}
                  name="name"
                  id="name"
                  value={formik.values.name}
                />
              </div>
              <div className="col-5 d-flex align-items-center">
                <input
                  type="text"
                  className="w-100 p-2  border rounded"
                  placeholder="Discount"
                  onChange={formik.handleChange}
                  name="discount"
                  id="discount"
                  value={formik.values.discount}
                />
                <span className="bg-danger p-2 rounded text-light">%</span>
              </div>
              <div className="col-8 d-flex align-items-center p-2">
                <strong>Expires Date</strong>
              
              </div>
            </div>

            <Loading loading={isLoading} error={isError}>
              <button className="btn btn-primary btn-sm m-2" type="submit">
                Save changes
              </button>
            </Loading>
          </form>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
};
export default CouponsForm;
