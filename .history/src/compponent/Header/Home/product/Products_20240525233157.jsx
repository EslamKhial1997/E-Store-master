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
      <div
        className="max-w-sm lg:max-w-60 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        key={ele._id}
      >
        <img className="rounded-t-lg" src={ele.images[0]} alt="" />

        <div className="p-2">
          
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-center text-gray-900 dark:text-dark">
              {ele.title}
            </h5>
         
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
           {ele.d}
          </p>
          <a
            href="#"
            className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Read more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    )
  );
  return <div className="d-flex">{products}</div>;
};

export default Products;
