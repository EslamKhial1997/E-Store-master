import { Favorite, ShoppingCart } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect } from "react";

const Products = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/v1/products`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch(() => {
        setisLoading(false);
      })
      .finally(() => setisLoading(false));
  }, []);
  console.log(data);
  const products = data.map((ele) =>
    isLoading ? (
      <div className="" key={ele._id}></div>
    ) : (
      <div className=" col-12 p-3 col-lg-3" key={ele._id}>
     <Suspa
      </div>
    )
  );
  return <div className="d-flex flex-wrap content-between">{products}</div>;
};

export default Products;
