import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { Auth, setTaps } from "../../../Store/store";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../../utils/Loading";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import { useState } from "react";
const createCategorySchema = Yup.object().shape({
  email: Yup.string().nullable().email().required("E-Mail Is Required"),
  error: Yup.string(),
});

const EmailForm = () => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.StoreSlice);
  const formik = useFormik({
    initialValues: {
      email: "",
      error: "",
      api: "users/forgetPassword",
    },
    validationSchema: createCategorySchema,
    onSubmit: async (values) => {
      console.log(values);

      await dispatch(Auth(values))
        .unwrap()
        .then(() => {
          setOpen(true);
          dispatch(setTaps(1))
        })
        .catch(() => {
          return (formik.errors.error = "InCorrect E-Mail");
        });
    },
  });
  return (
    <div>
      <form onSubmit={formik.handleSubmit}>
        <input
          className="border border-primary rounded w-100 p-2"
          placeholder="Enter Your E-Mail"
          onChange={formik.handleChange}
          name="email"
          id="email"
          value={formik.values.email}
        />
        <span className="text-danger d-block mt-1">
          {formik.errors.email ? formik.errors.email : formik.errors.error}
        </span>
        <div className="d-flex justify-content-between align-items-center flex-wrap">
          <NavLink
            className=" col-lg-2 col-md-4 col-sm-4"
            to={"/dashboard/Auth"}
          >
            <Button variant="outlined" className="mt-5" type="submit">
              Login?
            </Button>
          </NavLink>
          <div className="mt-5 col-lg-4 col-md-7 col-sm-7 ">
            {" "}
            <Loading loading={isLoading} error={isError}>
              <button  type="submit" className="btn btn-primary btn-block ">
                Next Step
              </button>
            </Loading>
          </div>
        </div>
      </form>
      <Snackbar open={open} autoHideDuration={6000}>
        <Alert severity="success" variant="filled" sx={{ width: "100%" }}>
          Rest Code Is Send To Your E-Mail
        </Alert>
      </Snackbar>
    </div>
  );
};

export default EmailForm;
