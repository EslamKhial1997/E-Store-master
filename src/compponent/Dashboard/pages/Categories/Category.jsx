import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../Store/store";
import CategoryList from "./CategoryList";
import Loading from "../../utils/Loading";
import CategoryForm from "./CategoryForm/CategoryForm";
const dashBoardCategory = () => {
  const { data, isLoading, isError } = useSelector((state) => state.StoreSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("categories"));
  }, [dispatch]);

  return (
    <div className="container">
      <CategoryForm />
      <Loading loading={isLoading} error={isError}>
        <div className="border " style={{ marginTop: "100px" }}>
          <CategoryList data={data} loading={isLoading} error={isError} />
        </div>
      </Loading>
    </div>
  );
};
export default dashBoardCategory;
