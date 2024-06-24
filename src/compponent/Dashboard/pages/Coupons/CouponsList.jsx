import { deleteUsers, setDialog } from "../../../Store/store";
import { useDispatch } from "react-redux";
import Confirm from "../Categories/CategoryForm/Confirm";
import {
  MaterialReactTable,
  useMaterialReactTable,
} from "material-react-table";
import { useMemo } from "react";
import { Button } from "@mui/material";
const CouponList = ({ data, loading }) => {
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
            accessorKey: "discount", //access nested data with dot notation
            header: " discount",
    
            muiTableBodyCellProps: {
              align: "center",
            },
            muiTableHeadCellProps: {
              align: "center",
            },
            Cell: ({ cell }) => (
              <span src={cell.row.original.discount} style={{ maxHeight: "50px" }}>
                {`${cell.row.original.discount}%`}
              </span>
            ),
          },
          {
            accessorKey: "expires", //access nested data with dot notation
            header: " Expires Date",
    
            muiTableBodyCellProps: {
              align: "center",
            },
            muiTableHeadCellProps: {
              align: "center",
            },
            Cell: ({ cell }) => (
              <span src={cell.row.original.expires} style={{ maxHeight: "50px" }}>
                {new Date(cell.row.original.expires).toDateString()}
              </span>
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
                details={"Do you want to Delete This Coupon?"}
                dispatcher={() =>
                  dispatch(deleteUsers({ api: "coupons", id: cell.row.id }))
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
        Create New Coupon
      </Button>
    ),
    state: {
      showProgressBars: loading, //or showSkeletons
    },
  });

  return <MaterialReactTable table={table} />;
};

export default CouponList;

