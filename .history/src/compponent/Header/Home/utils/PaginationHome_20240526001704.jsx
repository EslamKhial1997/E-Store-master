import React from 'react'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationHome = () => {
  return (
    <Stack spacing={2} className="p-2 align-contnet-center bg-gradient-to-r from-cyan-100 " color="danger">
    <Pagination
      count={10}
      variant="outlined"
      shape="rounded"
      color="primary"
      className="text-light"
    />
  </Stack>
  )
}

export default PaginationHome
