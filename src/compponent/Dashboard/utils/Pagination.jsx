import React from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const BasicPagination = () => {
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <Stack spacing={2} className="m-3">
      <Pagination
        count={10}
        color="primary"
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
};

export default BasicPagination;
