// import React, { Fragment, useEffect, useState } from "react";

// import { useDispatch, useSelector } from "react-redux";
// import { deleteUsers, getData, setDialog } from "../../../Store/store";

// import error400 from "../image/400-status-code.png";
// import Loading from "../../utils/Loading";
// import { Button } from "@mui/material";
// import { Add } from "@mui/icons-material";
// import UserList from "./UserList";
// import UserForm from "./UserForm";
// // import ProductList from "./ProductList";
// // import ProductForm from "./ProductForm";
// const DashBoardUser = () => {
//   const { data, isLoading, isError } = useSelector((state) => state.StoreSlice);
//   const dispatch = useDispatch();
//   const [id, setid] = useState("");
//   const handleDeleteClick = (id) => {
//     dispatch(deleteUsers({ id: id, api: "categories" }));
//   };
//   const getID = (id) => {
//     setid(id);
//     dispatch(setDialog(true));
//   };

//   useEffect(() => {
//     dispatch(getData("users"));
//   }, [dispatch]);
// console.log(data);
//   return (
//     <div className="container">
//       {isLoading ? (
//         <Loading />
//       ) : isError ? (
//         <div className="w-100 d-flex justify-content-center align-items-center">
//           <img className="w-100 h-100" src={error400} />
//         </div>
//       ) : (
//         <div
//           className="border w-100 d-flex flex-wrap justify-content-center"
//           style={{ marginTop: "100px" }}
//         >
//           <div className="d-flex col-10  m-auto text-center justify-content-between  align-items-center">
//             <Button variant="outlined" onClick={getID}>
//               <Add />
//               Add User
//             </Button>
//             <UserForm />
//             <span className="text-primary fw-bold">User List {data.length}</span>
//           </div>
//           <UserList
//             data={data}
//             Pinding={isLoading}
//             error={isError}
//             getID={getID}
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default DashBoardUser;
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getData } from "../../../Store/store";

import Loading from "../../utils/Loading";

import UserList from "./UserList";
import UserForm from "./UserForm";
const DashBoardUser = () => {
  const { data, isLoading, isError } = useSelector((state) => state.StoreSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData("users"));
  }, []);

  return (
    <div className="container">
      <UserForm />
      <Loading loading={isLoading} error={isError}>
        <div className="border " style={{ marginTop: "100px" }}>
          <UserList data={data} loading={isLoading} error={isError} />
        </div>
      </Loading>
    </div>
  );
};
export default DashBoardUser;
