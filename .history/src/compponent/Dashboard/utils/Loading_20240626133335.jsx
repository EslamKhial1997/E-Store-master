// import LoadingButton from "@mui/lab/LoadingButton";
import SaveIcon from "@mui/icons-material/Save";
// import error400 from "../../image/400-status-code.png"
const Loading = ({ loading, children }) => {
  const handleClone = () => {
    if (children.type === "button") {
      console.log("button");
      return (
        <div>
          {loading ? (
            <div className="w-100">
           
                <span>{children.props.children}</span>
              </LoadingButton>
            </div>
          ) : (
            children
          )}
        </div>
      );
    }
    return <div>{children}</div>;
  };
  return handleClone();
};

export default Loading;
