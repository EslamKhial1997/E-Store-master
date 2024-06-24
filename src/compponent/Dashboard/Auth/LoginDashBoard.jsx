import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Auth, getData } from "../../Store/store";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Loading from "../utils/Loading";
import { useEffect } from "react";

const createCategorySchema = Yup.object().shape({
  passwordDB: Yup.string()

    .min(2, "Password Too Short!")

    .max(6, "Password Too Long!")

    .required("Password Is Required"),
  error: Yup.string(),
});
const LoginDashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useSelector((state) => state.StoreSlice);
  const formik = useFormik({
    initialValues: {
      passwordDB: "",
      api: "users/loginDashboard",
    },
    validationSchema: createCategorySchema,
    onSubmit: async (values) => {
      await dispatch(Auth(values))
        .unwrap()
        .then(() => {
          navigate("/dashboard");
        })
        .catch((err) => {
          console.log(err);
          return (formik.errors.error = "InCorrect E-Mail or Password");
        });
    },
  });

  useEffect(() => {
    dispatch(getData("users/getMe"));
  }, []);
  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="form-outline border border-primary rounded mb-4">
        <input
          type="password"
          className="form-control"
          onChange={formik.handleChange}
          name="passwordDB"
          id="passwordDB"
          value={formik.values.passwordDB}
        />
      </div>
      <span className="text-danger  col-12">
        {formik.errors.error !== undefined
          ? formik.errors.error
          : formik.errors.passwordDB}
      </span>
      <div className="form-check d-flex justify-content-center mb-4">
        <input
          className="form-check-input me-2"
          type="checkbox"
          value=""
          id="form2Example33"
          defaultChecked
        />
        <label className="form-check-label text-light" htmlFor="form2Example33">
          Save Password ?
        </label>
      </div>
      <Loading loading={isLoading} error={isError}>
        <button
          type="submit"
          className="btn btn-primary btn-block mb-4"
          disabled={
            data.role === "admin" || data.role === "manger" ? false : true
          }
        >
          Login
        </button>
      </Loading>

      <div className="text-center d-flex justify-content-center">
        <div className="row">
          <NavLink
            className=" fw-bold col-12"
            to={"/dashboard/Auth/ForgetPasswordDashBoard"}
          >
            ForgetPassword?
          </NavLink>
          <NavLink
            className=" fw-bold col-12"
            to={"/dashboard/Auth/SignUpDashboard"}
          >
            Create Password?
          </NavLink>
          <NavLink className=" fw-bold col-12">Back To Home?</NavLink>
          <NavLink className=" fw-bold col-12">Go To Settings?</NavLink>
          <NavLink className=" fw-bold col-12">LogOut?</NavLink>
        </div>
      </div>
    </form>
  );
};

export default LoginDashBoard;
