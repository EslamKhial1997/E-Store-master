
import SectionLeft from "./SectionLeft/SectionLeft";
import SectionCenter from "./SectionCenter/SectionCenter";
import SectionRight from "./SectionRight/SectionRight";

const ParentSection = () => {
  return (
    <div className="d-flex justify-content-around flex-wrap ">
      <div className="col-lg-2  col-sm-12 col-md-3 col-12">
        {" "}
        <SectionLeft />
      </div>
      <div className="col-12 col-lg-7 col-md-7 col-sm-12" >
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
