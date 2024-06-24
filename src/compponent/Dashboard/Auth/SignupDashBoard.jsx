
import { NavLink, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { Auth } from "../../Store/store";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import Loading from "../utils/Loading";

const createCategorySchema = Yup.object().shape({
  passwordDB: Yup.string()

    .min(2, "Password Too Short!")

    .max(6, "Password Too Long!")

    .required("Password Is Required"),
  error: Yup.string(),
});
const SignUpDashBoard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.StoreSlice);
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
          return (formik.errors.error = "InCorrect E-Mail or Password")
        });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
    <div className="form-outline border border-primary rounded mb-4">
      <input
        type="password"
        className="w-100"
        onChange={formik.handleChange}
        name="passwordDB"
        id="passwordDB"
        value={formik.values.passwordDB}
        placeholder="Create Password Dashboard ( min length 6 characters )"
      />
    </div>
    <span className="text-danger  col-12">
      {formik.errors.error !== undefined
        ? formik.errors.error
        : formik.errors.passwordDB}
    </span>
   
    <Loading loading={isLoading} error={isError}>
      <button
        type="submit"
        className="btn btn-primary btn-block mb-4"
      >
        Create Password
      </button>
    </Loading>

    <div className="text-center d-flex justify-content-center">
      <div className="row">
      <NavLink
          className=" fw-bold col-12"
          to={"/dashboard/Auth"}
        >
          Login ?
        </NavLink>
        <NavLink className=" fw-bold col-12">
          Back To Home?
        </NavLink>
        <NavLink className=" fw-bold col-12">
          Go To Settings?
        </NavLink>
        <NavLink className=" fw-bold col-12">LogOut?</NavLink>
      </div>
    </div>
  </form>
  );
};

export default SignUpDashBoard;
