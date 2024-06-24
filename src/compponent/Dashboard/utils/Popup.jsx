import { Box ,Snackbar,Alert} from "@mui/material";
import { useSelector } from "react-redux";

const Popup = ()=>{
  const selector = useSelector((state)=>state)
    return (
        <Box sx={{ width: 500 }}>
        <Snackbar open={selector.islLoading} autoHideDuration={6000}>
          <Alert
            severity={
              selector.create === "Something wont wrong" ? "error" : "success"
            }
            sx={{ width: "100%" }}
          >
            {selector.create}
          </Alert>
        </Snackbar>
      </Box>
    )
}
export default Popup;