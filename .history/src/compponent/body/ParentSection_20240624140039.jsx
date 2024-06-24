
import SectionLeft from "./SectionLeft/SectionLeft";
import SectionCenter from "./SectionCenter/SectionCenter";
import SectionRight from "./SectionRight/SectionRight";

const ParentSection = () => {
  return (
    <div className="d-flex justify-content-around flex-wrap bg-gray-100">
      <div className="col-lg-2 mt-3  col-sm-12 col-md-3 col-12 lg:sticky top-0 overflow-y-scroll overflow-x-hidden SideBarProduct" style={{maxHeight:"100vh"}}>
        {" "}
        <SectionLeft />
      </div>
      <div className="col-12 col-lg-7 col-md-7 col-sm-12 "  >
        {" "}
        <SectionCenter />
      </div>
      <div className="col-2 d-lg-block d-none">
        <SectionRight />
      </div>
    </div>
  );
};

export default ParentSection;
