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
      <div className="flex flex-wrap justify-around " key={ele._id}>
      <div className="col-4">
      <img src={ele.images[0]}/>
      </div>
      </div>
    )
  );
  return <div className="d-flex">{products}</div>;
};

export default Products;
