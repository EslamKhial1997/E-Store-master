import { Favorite, ShoppingCart } from "@mui/icons-material";
import axios from "axios";
import React, { useEffect } from "react";

const Products = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);
  const [iseError, setError] = React.useState(null);

  useEffect(() => {
    setisLoading(true);
    axios
      .get(`http://localhost:8008/api/v1/products`)
      .then((e) => {
        setData(e.data.data);
        setisLoading(false);
      })
      .catch(() => {
        setisLoading(false);
        setError("Ops Somethings Failed");
      })
      .finally(() => setisLoading(false));
  }, []);
  console.log(isLoading);
  const products = data.map((ele) => (
    <div className=" col-12 p-3 col-lg-3" key={ele._id}>
      <div className="col-12   bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <img className="rounded-t-lg" src={ele.images[0]} alt="" />

        <div className="p-2 ">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-dark">
            {ele.title}
          </h5>

          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {ele.description}
          </p>

          <div className="flex items-center justify-content-between">
           
           
         <div>{ele.price}L.E</div>

           <div> <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
           <a
             href="#"
             className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-dark"
           >
             73 reviews
           </a></div>
          </div>





          <div className="flex content-around items-center py-3">
          
          
          
          <Favorite color="error"/>
          <ShoppingCart />
          
          </div>
        </div>
      </div>
    </div>
  ));
  return (
    <div className="d-flex flex-wrap content-between">
      {isLoading ? (
        <div className="col-12 justify-center  p-3 ">
          <div className="">
            <div className="container flex-wrap ">
              <div className="yellow ball"></div>
              <div className="red ball"></div>
              <div className="blue ball"></div>
              <div className="violet ball"></div>
              <h2 className="col-12 text-center text-light">Loading...</h2>
            </div>
          </div>
        </div>
      ) : iseError === null ? (
        products
      ) : (
        <div className="col-12 justify-center  p-3 ">
          <div className="">
            <div className="container flex-wrap ">
              <div className="yellow ball"></div>
              <div className="red ball"></div>
              <div className="blue ball"></div>
              <div className="violet ball"></div>
              <h1 className="col-12 text-center text-danger">{iseError}</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Products;
