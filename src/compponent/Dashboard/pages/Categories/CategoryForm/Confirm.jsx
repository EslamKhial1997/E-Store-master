import { Box, IconButton, Tooltip } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

import DeleteIcon from "@mui/icons-material/Delete";
import { setDialog } from "../../../../Store/store";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
export function fireSwal(details, confirmButtonText, func) {
  Swal.fire({
    title: details,
    showDenyButton: true,
    showCancelButton: true,
    confirmButtonText,
    denyButtonText: `Don't ${confirmButtonText}`,
  }).then((result) => {
    if (result.isConfirmed) {
      func();
    } else if (result.isDenied) {
      Swal.fire("Changes are not Saved", "", "info");
    }
  });
}
const Confirm = ({ id, details, dispatcher }) => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const navigation = (id) => {
  //   navigate(`/${id}`);
  //   dispatch(setDialog(true));
  // };
  return (
    <Box>
      <Tooltip
        title="Edit"
        onClick={() => {
          dispatch(setDialog(true));
        }}
      >
        <IconButton>
          <EditIcon />
        </IconButton>
      </Tooltip>

      <Tooltip
        title="Delete"
        onClick={() => {
          fireSwal(details, "Delete", () => {
            dispatcher()
              .unwrap()
              .then(() => {
                Swal.fire("Deleted!", "", "success");
              })
              .catch(() => {
                Swal.fire("Delete are not", "", "info");
              });
          });
        }}
      >
        <IconButton color="error">
          <DeleteIcon />
        </IconButton>
      </Tooltip>
    </Box>
  );
};

export default Confirm;
