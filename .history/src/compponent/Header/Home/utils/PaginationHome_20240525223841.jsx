import React from 'react'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationHome = () => {
  return (
    <Stack spacing={2} className="p-2 w-100 align-contnet-center bg-gradient-to-r from-cyan-500 to-blue-500" color="danger">
    <Pagination
      count={10}
      variant="outlined"
      shape="rounded"
      color="warning"
      className="text-light"
    />
  </Stack>
  )
}

export default PaginationHome
