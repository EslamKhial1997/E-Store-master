// import React, { useEffect, useState } from "react";

// import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
// import MailIcon from "@mui/icons-material/Mail";
// import Toolbar from "@mui/material/Toolbar";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import EditBrands from "./EditBrands"
// import { useDispatch, useSelector } from "react-redux";
// import { deleteUsers, getData, setID, setDialog } from "../../../Store/store";
// import { Box } from "@mui/material";

// const DashBoardBrands = () => {
//   const selector = useSelector((state) => state.StoreSlice);
//   const dispatch = useDispatch();
//   const [id , setid]=useState("")
//   const handleDeleteClick = (id) => {
//     dispatch(deleteUsers({ id: id, api: "brands" }));
//   };
//   const getID = (id) => {
//     setid(id)
//     dispatch(setDialog(true));
//   };
 
//   const columnss = [
  
//     { field: "name", headerName: "Name" },
//     {
//       field: "image",
//       headerName: "Image",
//       headerAlign: "center",
//       renderCell: (params)=> <img src={params.value} className="w-100 h-100 rounded"/>
//     },

//     { field: "createdAt", headerName: "CreateAT", headerAlign: "center" },
//     { field: "updatedAt", headerName: "UpdateAT", headerAlign: "center" },
//     {
//       field: "_id",
//       headerName: "ID",
//       headerAlign: "center",
//     },
//     {
//       field: "actions",
//       type: "actions",
//       headerName: "Actions",
//       width: 100,
//       cellClassName: "actions",
//       getActions: ({ id }) => {
//         return [
//           <GridActionsCellItem
//             icon={<EditIcon />}
//             label="Edit"
//             color="primary"
//             onClick={() => {
//               getID(id)
//             }}
//           />,
//           <GridActionsCellItem
//             icon={<DeleteIcon />}
//             label="Delete"
//             className="text-danger"
//             color="danger"
//             onClick={() => {
//               handleDeleteClick(id);
//             }}
//           />,
//         ];
//       },
//     },
//   ];
//   useEffect(() => {
//     dispatch(getData({ title: "brands" }));
//   }, []);
//   return (
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         p: 3,
//         width:"100%",
//         overflowX:"scroll",
//         height:"100%"
//       }}
//     >
//       <Toolbar />
//       <DataGrid
//         getRowId={(row) => row._id}
//         rows={selector.getData}
//         columns={columnss}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//       {EditBrands(id)}
//     </Box>
//   );
// };
// export default DashBoardBrands;
import React, { Fragment, useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteUsers, getData, setDialog } from "../../../Store/store";

import Loading from "../../utils/Loading";

import BrandsForm from "./BrandsForm";
import BrandList from "./BrandList";
const DashBoardBrands = () => {
  const { data, isLoading, isError } = useSelector((state) => state.StoreSlice);
  const dispatch = useDispatch();
  const [id, setid] = useState("");
  const handleDeleteClick = (id) => {
    dispatch(deleteUsers({ id: id, api: "categories" }));
  };
  const getID = (id) => {
    setid(id);
    dispatch(setDialog(true));
  };

  useEffect(() => {
    dispatch(getData("brands"));
  }, [dispatch]);

  return (
    <div className="container">
    <BrandsForm />
    <Loading loading={isLoading} error={isError}>
      <div className="border " style={{ marginTop: "100px" }}>
      <BrandList
      data={data}
      Pinding={isLoading}
      error={isError}
      getID={getID}
    />
      </div>
    </Loading>
  </div>


   
  );
};
export default DashBoardBrands;

