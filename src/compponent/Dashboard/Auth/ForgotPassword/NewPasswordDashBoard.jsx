import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { restNewPassword, setTaps } from "../../../Store/store";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../../utils/Loading";

const createCategorySchema = Yup.object().shape({
  email: Yup.string().nullable().email().required(),
  restNewPassword: Yup.string()
    .min(5, "Password Too Short!")

    .max(20, "Password Too Long!")

    .required("New Is Required"),
  error: Yup.string(),
});

const NewPasswordDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.StoreSlice);
  const formik = useFormik({
    initialValues: {
      email: "",

      restNewPassword: "",

      api: "auth/restNewPassword",
      // api: "users/restNewPasswordDashboard",
    },
    validationSchema: createCategorySchema,
    onSubmit: async (values) => {
      await dispatch(restNewPassword(values))
        .unwrap()
        .then(() => {
          navigate("/dashboard/Auth");
        })
        .catch(() => {
          return (formik.errors.error = "Invaild E-Mail or NewPassword");
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        className="border rounded w-100 p-2 my-2"
        placeholder="Enter Your E-Mail"
        onChange={formik.handleChange}
        name="email"
        id="email"
        value={formik.values.email}
      />
      <span className="text-danger d-block mt-1">
        {formik.errors.email ? formik.errors.email : formik.errors.error}
      </span>
      <input
        className="border border-primary rounded w-100 p-2"
        placeholder="Enter Your New Password"
        onChange={formik.handleChange}
        name="restNewPassword"
        id="restNewPassword"
        value={formik.values.restNewPassword}
      />
      <span className="text-danger d-block mt-1">
        {formik.errors.restNewPassword}
      </span>
      <div className="d-flex justify-content-between align-items-center flex-wrap">
        {" "}
        <NavLink
        onClick={()=>{ dispatch(setTaps(1))}}
          className="mt-3 col-lg-2 col-md-4 col-sm-4"
        >
          {" "}
          <Button variant="outlined" className="mt-3" type="submit">
            Back
          </Button>
        </NavLink>
        <div className="mt-3 col-lg-7 col-md-7 col-sm-7">
          {" "}
          <Loading loading={isLoading} error={isError}>
            <button className="mt-3 btn btn-primary btn-block " type="submit">
              Change Password
            </button>
          </Loading>
        </div>
      
      </div>
    </form>
  );
};

export default NewPasswordDashboard;
