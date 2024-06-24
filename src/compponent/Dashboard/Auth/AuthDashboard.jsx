import { Outlet } from "react-router-dom";

const AuthDashboard = () => {
  return (
    <section className="background-radial-gradient overflow-hidden section align-items-center justify-content-center">
      <div className="container h-100 ">
        <div className="row gx-lg-5 justify-content-center align-items-center mt-5">
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div
              id="radius-shape-1"
              className="position-absolute rounded-circle shadow-5-strong"
            ></div>
            <div
              id="radius-shape-2"
              className="position-absolute shadow-5-strong"
            ></div>

            <div className=" bg-glass ">
              <div className="card-body px-4 py-5 px-md-5">
                <Outlet />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AuthDashboard;
