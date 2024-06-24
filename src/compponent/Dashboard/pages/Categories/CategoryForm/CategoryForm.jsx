import upload from "../../../../image/upload.png";
import Loading from "../../../utils/Loading";
import Style from "../../../Dashboard.module.css";
import { useDispatch, useSelector } from "react-redux";
import { createUsers, setDialog } from "../../../../Store/store";
import * as Yup from "yup";
import { useFormik } from "formik";
import SendIcon from "@mui/icons-material/Send";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

const createCategorySchema = Yup.object().shape({
  name: Yup.string()

    .min(2, "Category Too Short!")

    .max(50, "Category Too Long!")

    .required("Category Name Is Required"),
  error: Yup.string(),
});

const CategoryForm = (id) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      name: "",
      api: "categories",
    },
    validationSchema: createCategorySchema,
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
  const handleClose = () => {
    dispatch(setDialog(false));
  };
  const { isLoading, isError, dialog } = useSelector(
    (state) => state.StoreSlice
  );
  return (
    <div className="d-flex flex-column justify-content-center align-items-center ">
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={dialog}
      >
        <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
          {id === null ? "Create Category" : "Edit Category"}
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
            className="d-flex flex-wrap justify-content-center col-lg-10 col-md-10 col-sm-10 border card "
            onSubmit={formik.handleSubmit}
          >
            <div className="col-12 px-2">
              {" "}
              <input
                type="text"
                className="w-100 p-2 mt-2 border rounded"
                placeholder="Category Name"
                onChange={formik.handleChange}
                name="name"
                id="name"
                value={formik.values.name}
              />
              <span className="text-danger">
                {formik.errors.error !== undefined
                  ? formik.errors.error
                  : formik.errors.name}
              </span>
            </div>
            <div className={`${Style.upload} px-2 col-12 pt-3`}>
              {" "}
              <input
                type="file"
                name="image"
                id="image"
                onChange={(event) => {
                  formik.setFieldValue("image", event.currentTarget.files[0]);
                }}
              />
              <label htmlFor="upload" className="w-100 ">
                <img
                  src={upload}
                  className="w-100 "
                  style={{ maxHeight: "125px" }}
                />
              </label>
            </div>
            <Loading loading={isLoading} error={isError}>
              <button className="btn btn-primary btn-sm m-2" type="submit">
                <span>
                  Save <SendIcon />
                </span>
              </button>
            </Loading>
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
          severity="success"
          variant="filled"
          sx={{ width: "100%" }}
        >
          Created is a success
        </Alert>
      </Snackbar>
    </div>
  );
};
export default CategoryForm;
