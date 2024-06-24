import React from 'react'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationHome = () => {
  return (
    <Stack spacing={2} className="p-2 align-contnet-center bg-gradient-to-r from-gray-500 to-blue-500" color="danger">
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
