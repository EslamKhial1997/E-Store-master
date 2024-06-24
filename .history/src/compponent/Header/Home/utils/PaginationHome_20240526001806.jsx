import React from 'react'
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const PaginationHome = () => {
  return (
    <Stack spacing={2} className="p-2 text-li align-contnet-center bg-gradient-to-r from-cyan-600 " color="danger">
    <Pagination
      count={10}
      variant="outlined"
      shape="rounded"
      color="standard"
    
    />
  </Stack>
  )
}

export default PaginationHome
