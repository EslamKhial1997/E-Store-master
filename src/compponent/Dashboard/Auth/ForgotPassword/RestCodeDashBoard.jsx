import { useDispatch, useSelector } from "react-redux";
import { useFormik } from "formik";
import Button from "@mui/material/Button";
import * as Yup from "yup";
import { Auth, setTaps } from "../../../Store/store";
import { NavLink, useNavigate } from "react-router-dom";
import Loading from "../../utils/Loading";

const createCategorySchema = Yup.object().shape({
  restCode: Yup.string()

    .min(5, "Password Too Short!")

    .max(20, "Password Too Long!")

    .required("Rest Code Is Required"),
  error: Yup.string(),
});

const RestCode = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, isError } = useSelector((state) => state.StoreSlice);
  const formik = useFormik({
    initialValues: {
      restCode: "",
      error: "",
      api: "users/restCode",
    },
    validationSchema: createCategorySchema,
    onSubmit: async (values) => {
      await dispatch(Auth(values))
        .unwrap()
        .then(() => {
          dispatch(setTaps(2));
        })
        .catch(() => {
          return (formik.errors.error = "Invalid Rest Code");
        });
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <input
        className="border border-primary rounded w-100 p-2"
        placeholder="Enter Your Rest Code ( 6 digits )"
        onChange={formik.handleChange}
        name="restCode"
        id="restCode"
        value={formik.values.restCode}
      />
      <span className="text-danger d-block mt-1">
        {formik.errors.restCode ? formik.errors.restCode : formik.errors.error}
      </span>
      <div className="d-flex justify-content-between align-items-center">
        {" "}
        <NavLink
    onClick={()=>{ dispatch(setTaps(0))}}
          className="mt-5"
        >
          {" "}
          <Button variant="outlined" className="mt-3" type="submit">
            Back
          </Button>
        </NavLink>
        <div className="mt-5">
          {" "}
          <Loading loading={isLoading} error={isError}>
            {" "}
            <button className="mt-3 btn btn-primary btn-block " type="submit">
              Next Step
            </button>
          </Loading>
        </div>
       
      </div>
    </form>
  );
};

export default RestCode;
