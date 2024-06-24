// import { Box } from "@mui/material";
// import { DataGrid, GridActionsCellItem } from "@mui/x-data-grid";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/DeleteOutlined";
// import { setDialog } from "../../../Store/store";
// import { useDispatch } from "react-redux";
// import { ArrowRightAlt } from "@mui/icons-material";
// const drawerWidth = 240;
// const UserList = (listItems) => {
//   const dispatch = useDispatch();
//   const handleDeleteClick = (id) => {
//     dispatch(deleteUsers({ id: id, api: "categories" }));
//   };
//   const getID = () => {
//     dispatch(setDialog(true));
//   };
//   const columns = [
//     { field: "name", headerName: "UserName", flex: 2 },
//     { field: "email", headerName: "E-Mail", flex: 2 },

//     {
//       field: "actions",
//       type: "actions",
//       headerName: "Actions",
//       flex: 2,
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
//             icon={<ArrowRightAlt />}
//             label="Delete"
//             className="text-dark"
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
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10, 15, 20]}
//         rowSelection={false}
//       />
//     </Box>
//   );
// };

// export default UserList;
import { useMemo, useState } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import {
  Box,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch } from "react-redux";
import { deleteUsers, editUsers, setDialog } from "../../../Store/store";
import Confirm, { fireSwal } from "../Categories/CategoryForm/Confirm";
import { Swiper, SwiperSlide } from "swiper/react";
import Swal from "sweetalert2";
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
//nested data is ok, see accessorKeys in ColumnDef below

const UserList = ({ data, loading }) => {
  const [role, setRole] = useState("");
  const [toggleRole, setToggleRole] = useState(true);
  const [status, setStatus] = useState("");
  const [toggleStatus, setToggleStatus] = useState(true);

  const handleChangeRole = (event) => {
    setRole(event.target.value);
    setToggleRole(false);
  };
  const handleChangeStatus = (event) => {
    setStatus(event.target.value);
    setToggleStatus(false);
  };
  const dispatch = useDispatch();
  const columns = useMemo(
    () => [
      {
        accessorKey: "_id", //access nested data with dot notation
        header: " ID",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "name", //access nested data with dot notation
        header: " Name",

        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
      },
      {
        accessorKey: "email", //access nested data with dot notation
        header: " E-Mail",

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
        header: "Address",

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
            style={{ height: "100%", width: "100px" }}
          >
            {cell.row.original.addresses !== undefined &&
            cell.row.original.addresses.length > 0
              ? cell.row.original.addresses.map((e, inx) => (
                  <SwiperSlide key={inx}>
                    <span
                      className="d-block fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {e.alias}
                    </span>
                    <span
                      className="d-block fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {e.details}
                    </span>
                    <span
                      className="d-block fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {e.phone}
                    </span>
                    <span
                      className="d-block fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {e.city}
                    </span>
                    <span
                      className="d-block fw-bold"
                      style={{ fontSize: "12px" }}
                    >
                      {e.postalCode}
                    </span>
                  </SwiperSlide>
                ))
              : "-  -  -  -  -  -  -  -"}
          </Swiper>
        ),
      },

      {
        accessorKey: "phone",
        header: "Phone",

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
        header: "imageProfile",

        Cell: ({ cell }) => (
          <img
            src={cell.row.original.imageProfile}
            style={{ maxHeight: "50px" }}
          />
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
            details={"Do you want to Delete This User?"}
            dispatcher={() =>
              dispatch(deleteUsers({ api: "users", id: cell.row.id }))
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
        Create New User
      </Button>
    ),
    state: {
      showProgressBars: loading, //or showSkeletons
    },
    renderDetailPanel: ({ row }) => (
      <Box
        sx={{
          display: "flex",

          justifyContent: "start",

          width: "100%",
        }}
      >
        <FormControl
          className="col-1 col-lg-2 col-md-2"
          sx={{ m: 1, minWidth: 80 }}
        >
          <InputLabel id="demo-simple-select-label">Status</InputLabel>
          <div className="d-flex align-items-center">
            {" "}
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
              onChange={handleChangeStatus}
              defaultValue={row.original.status}
            >
              <MenuItem value={"active"}>Active</MenuItem>
              <MenuItem value={"inactive"}>inactive</MenuItem>
            </Select>
            <button
              className={`btn text-primary mx-2 ${
                toggleStatus || row.original.status === status
                  ? "d-none"
                  : "d-flex"
              }`}
              onClick={() => {
                fireSwal("Are You Sure Edit Status User ?", "Edit", () => {
                  dispatch(
                    editUsers({
                      id: row.original._id,
                      api: "users",
                      status,
                    })
                  )
                    .unwrap()
                    .then(() => {
                      Swal.fire("Edited!", "", "success");
                    })
                    .catch(() => {
                      Swal.fire("Edited are not", "", "info");
                    });
                });
              }}
            >
              <EditIcon />
            </button>
          </div>
        </FormControl>
        <FormControl
          className="col-1 col-lg-2 col-md-2"
          sx={{ m: 1, minWidth: 80 }}
        >
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <div className="d-flex align-items-center">
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Role"
              onChange={handleChangeRole}
              defaultValue={row.original.role}
            >
              <MenuItem value={"user"}>User</MenuItem>
              <MenuItem value={"admin"}>Admin</MenuItem>
              <MenuItem value={"manger"}>Manger</MenuItem>
            </Select>
            <button
              className={`btn text-primary mx-2 ${
                toggleRole || row.original.role === role ? "d-none" : "d-flex"
              }`}
              onClick={() => {
                fireSwal("Are You Sure Edit Role User ?", "Edit", () => {
                  dispatch(
                    editUsers({
                      id: row.original._id,
                      api: "users",
                      role: role,
                    })
                  )
                    .unwrap()
                    .then(() => {
                      Swal.fire("Edited!", "", "success");
                    })
                    .catch(() => {
                      Swal.fire("Edited are not", "", "info");
                    });
                });
              }}
            >
              {" "}
              <EditIcon />
            </button>
          </div>
        </FormControl>
      </Box>
    ),
    // initialState: {

    //   expanded: true,

    // },
  });

  return <MaterialReactTable table={table} />;
};

export default UserList;
