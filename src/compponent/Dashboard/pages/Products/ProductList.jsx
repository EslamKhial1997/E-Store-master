// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
// import { Box } from "@mui/material";
// import { deleteUsers, setDialog } from "../../../Store/store";
// import { useDispatch } from "react-redux";
// import { ArrowRightAlt } from "@mui/icons-material";
// import { NavLink } from "react-router-dom";
// const ProductList = (listItems) => {
//   const dispatch = useDispatch();
//   const drawerWidth = 240;
//   const getID = () => {
//     dispatch(setDialog(true));
//   };
//   const handleDeleteClick = (id) => {
//     dispatch(deleteUsers({ id: id, api: "categories" }));
//   };
//   const columnss = [
//     { field: "title", headerName: "Name" },
//     { field: "description", headerName: "description" },
//     { field: "sold", headerName: "Sold" },
//     { field: "price", headerName: "Price" },
//     { field: "priceAfterDiscount", headerName: "priceAfterDiscount" },
//     { field: "colors", headerName: "colors" },
//     { field: "ratings", headerName: "Ratings" },
//     { field: "ratingQuantity", headerName: "ratingQuantity" },
//     { field: "category", headerName: "description" },

//     {
//       field: "category",

//       headerName: "category",
//       renderCell: (params) => (
//         <span  className="w-100 h-100 rounded" >{params.row.category.name}</span>
//       ),
//     },
//     {
//       field: "subCategory",
//       headerName: "subCategory",
//       renderCell: (params) => (
//         <img src={params.row.subCategory[0]} className="w-100 h-100 rounded" />
//       ),
//     },
//     {
//       field: "image",
//       headerName: "Image",
//       renderCell: (params) => (
//         <img src={params.row.images[0]} className="w-100 h-100 rounded" />
//       ),
//     },
//     {
//       field: "image",
//       headerName: "Image",
//       renderCell: (params) => (
//         <img src={params.row.imageCover} className="w-100 h-100 rounded" />
//       ),
//     },
//     {
//       accessorKey: "createdAt", //access nested data with dot notation
//       header: " createdAt",

//       muiTableBodyCellProps: {
//         align: "center",
//       },
//       muiTableHeadCellProps: {
//         align: "center",
//       },
//       Cell: ({ cell }) => (
//         <span src={cell.row.original.image} style={{ maxHeight: "50px" }}>
//           {new Date(cell.row.original.createdAt).toDateString()}
//         </span>
//       ),
//     },
//     {
//       accessorKey: "updatedAt", //access nested data with dot notation
//       header: " updatedAt",

//       muiTableBodyCellProps: {
//         align: "center",
//       },
//       muiTableHeadCellProps: {
//         align: "center",
//       },
//       Cell: ({ cell }) => (
//         <span src={cell.row.original.image} style={{ maxHeight: "50px" }}>
//           {new Date(cell.row.original.updatedAt).toDateString()}
//         </span>
//       ),
//     },
//     {
//       field: "actions",
//       type: "actions",
//       headerName: "Actions",
//       flex: 1,
//       cellClassName: "actions",
//       getActions: ({ id }) => {
//         return [
//           <GridActionsCellItem
//             key={id}
//             icon={<EditIcon />}
//             label="Edit"
//             color="primary"
//             onClick={() => {
//               getID(id);
//             }}
//           />,
//           <GridActionsCellItem
//             key={id}
//             icon={<DeleteIcon />}
//             label="Delete"
//             className="text-danger"
//             color="danger"
//             onClick={() => {
//               handleDeleteClick(id);
//             }}
//           />,
//           <GridActionsCellItem
//             key={id}
//             icon={<NavLink to={""}><ArrowRightAlt /></NavLink>}
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
//   return (
//     <Box
//       component="main"
//       sx={{
//         flexGrow: 1,
//         p: 3,
//         width: { sm: `calc(100% - ${drawerWidth}px)` },
//         overflowX: "scroll",
//         height: "100%",
//       }}
//     >
//       <DataGrid
//         getRowId={(row) => row._id}
//         rows={listItems.data}
//         columns={columnss}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10 , 15 , 20]}
//         rowSelection={false}
//       />
//     </Box>
//   );
// };

// export default ProductList;
import { deleteUsers, setDialog } from "../../../Store/store";
import { useDispatch } from "react-redux";
import Confirm from "../Categories/CategoryForm/Confirm";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";
import { Button } from "@mui/material";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
const ProductList = ({ data, loading }) => {
  const dispatch = useDispatch();
  const columns = useMemo(
    () => [
      {
        accessorKey: "title", //access nested data with dot notation
        header: " Name",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "description", //access nested data with dot notation
        header: " Description",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "sold", //access nested data with dot notation
        header: " Sold",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "price", //access nested data with dot notation
        header: " Price",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "priceAfterDiscount", //access nested data with dot notation
        header: " priceAfterDiscount",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "ratings", //access nested data with dot notation
        header: " Ratings",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "ratingQuantity", //access nested data with dot notation
        header: " RatingQuantity",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
      },
      {
        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        header: "Image",

        Cell: ({ cell }) => (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            style={{ height: "50px", width: "100px" }}
          >
            {cell.row.images !== undefined && cell.row.images.length > 0 
              ? cell.row.original.images.map((e, inx) => (
                  <SwiperSlide key={inx}>
                    <img src={e} />
                  </SwiperSlide>
                ))
              : ""}
          </Swiper>
        ),
      },
      {
        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        header: "imageCover",

        Cell: ({ cell }) => (
          <img
            src={cell.row.original.imageCover}
            style={{ maxHeight: "50px", width: "100px" }}
            className="border rounded"
          />
        ),
      },

      {
        accessorKey: "category", //access nested data with dot notation
        header: " category",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        Cell: ({ cell }) => (
          <span style={{ maxHeight: "50px" }}>
            {cell.row.original.category === undefined || cell.row.original.category ===null
              ? "-  -  -  -  -  -  -  -"
              : cell.row.original.category.name}
          </span>
        ),
      },
      {
        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        header: "SubCategory",

        Cell: ({ cell }) => (
          <Swiper
            slidesPerView={1}
            spaceBetween={10}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Autoplay, Pagination]}
            style={{ height: "50px", width: "100px" }}
          >
            <SwiperSlide >
              {cell.row.original.subCategory!==undefined  &&
              cell.row.original.subCategory.length > 0
                ? cell.row.original.subCategory.map((e, inx) => 
                    <span style={{ maxHeight: "50px" }} key={inx}>{e.name}</span>
                  )
                : "-  -  -  -  -  -  -  -"}
            </SwiperSlide>
            )
          </Swiper>
        ),
      },
      {
        accessorKey: "createdAt", //access nested data with dot notation
        header: " createdAt",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        Cell: ({ cell }) => (
          <span src={cell.row.original.image} style={{ maxHeight: "50px" }}>
            {new Date(cell.row.original.createdAt).toDateString()}
          </span>
        ),
      },
      {
        accessorKey: "updatedAt", //access nested data with dot notation
        header: " updatedAt",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        Cell: ({ cell }) => (
          <span src={cell.row.original.image} style={{ maxHeight: "50px" }}>
            {new Date(cell.row.original.updatedAt).toDateString()}
          </span>
        ),
      },
      {
        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        header: "Actions",

        Cell: ({ cell }) => (
          <Confirm
            id={cell}
            details={"Do you want to Delete This Product?"}
            dispatcher={() =>
              dispatch(deleteUsers({ api: "products", id: cell.row.id }))
            }
          />
        ),
      },
    ],
    [dispatch]
  );

  const table = useMaterialReactTable({
    columns,
    data,
    getRowId: (row) => row._id,
    renderTopToolbarCustomActions: () => (
      <Button
        variant="contained"
        onClick={() => {
          dispatch(setDialog(true));
        }}
      >
        Create New Product
      </Button>
    ),
    state: {
      showProgressBars: loading, //or showSkeletons
    },
  });

  return <MaterialReactTable table={table} />;
};

export default ProductList;
