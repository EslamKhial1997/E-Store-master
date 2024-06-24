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

          <div className="flex items-center content-between">
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>
            <svg
              className="w-4 h-4 text-yellow-300 me-1"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 22 20"
            >
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
            </svg>

            <span className="w-1 h-1 mx-1.5 bg-gray-500 rounded-full dark:bg-gray-400"></span>
            <a
              href="#"
              className="text-sm font-medium text-gray-900 underline hover:no-underline dark:text-dark"
            >
              73 reviews
            </a>
          </div>




          
          <div className="flex content-around items-center">
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-gray-500 to-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <ShoppingCart />
            </a>
            <a
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-gradient-to-r from-gray-500 to-blue-500 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <Favorite />
            </a>
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
