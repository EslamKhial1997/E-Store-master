import { useMemo } from "react";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { Button } from "@mui/material";

import { useDispatch } from "react-redux";
import { deleteUsers, setDialog } from "../../../Store/store";
import Confirm from "./CategoryForm/Confirm";

//nested data is ok, see accessorKeys in ColumnDef below

const CategoryList = ({ data, loading }) => {
  //should be memoized or stable
  const dispatch = useDispatch();
  const columns = useMemo(
    () => [
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
        muiTableBodyCellProps: {
          align: "center",
        },
        muiTableHeadCellProps: {
          align: "center",
        },
        header: "Image",

        Cell: ({ cell }) => (
          <img
            src={cell.row.original.image}
            style={{ maxHeight: "50px" }}
            className="border rounded"
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
            details={"Do you want to Delete This Category?"}
            dispatcher={() =>
              dispatch(deleteUsers({ api: "categories", id: cell.row.id }))
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
  });

  return <MaterialReactTable table={table} />;
};

export default CategoryList;
