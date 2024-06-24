import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepContent from "@mui/material/StepContent";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { forgotPassword, restCode, restNewPassword } from "../Store/store";
import { Alert, Snackbar } from "@mui/material";
import { Email } from "@mui/icons-material";

const ForgetPassword = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const [email, setEmail] = React.useState("");
  const [digitCode, setdigitCode] = React.useState("");
  const [newPassword, setNewPassowrd] = React.useState("");
  const dispatch = useDispatch();
  const selector = useSelector((state) => state.StoreSlice);
  console.log(selector);
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const sendRestCode = () => {
    dispatch(forgotPassword({ email }));

    handleNext();
  };
  const restEmailCode = () => {
    dispatch(restCode({ restCode: digitCode }));

    handleNext();
  };
  const restNewpassword = () => {
    dispatch(restNewPassword({ email, restNewPassword: newPassword }));

    handleNext();
  };
  let username = 'Max Brown';
  // Set a Cookie
  function setCookie(cName, cValue, ) {
          
          document.cookie = cName + "=" + cValue ; 
  }
  // Apply setCookie
  setCookie('username', username);
  return (
    <div className="d-flex justify-content-center align-items-center m-auto">
      <Stepper
        className="col-lg-6 col-md-8 col-sm-12  bg-light border rounded p-3"
        activeStep={activeStep}
        orientation="vertical"
      >
        <Step>
          <StepLabel>Find Your Account</StepLabel>
          <StepContent>
            {" "}
            <StepContent>
              <Typography>
                <div className="bg-light py-3">
                  <h3 className="border-bottom">Find Your Account</h3>
                  <p>
                    Please enter your email address or mobile number to search
                    for your account.
                  </p>
                  <input
                    placeholder="Enter Your Email Or Mobile Phone"
                    className="w-100 p-3 rounded border"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={sendRestCode}
                    sx={{ mt: 0, mr: 1 }}
                  >
                    Send Via Code
                  </Button>
                  <NavLink to={"/login"} sx={{ mt: 1, mr: 1 }}>
                    <Button
                      type="button"
                      className="btn border border-primary text-primary p-1"
                    >
                      Login
                    </Button>
                  </NavLink>
                </div>
              </Box>
            </StepContent>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>Via Code</StepLabel>
          <StepContent>
            {" "}
            <StepContent>
              <Typography>
                {" "}
                <div className="bg-light py-3">
                  <h3 className="border-bottom">Reast Via Code</h3>
                  <p>Please enter your Via Code To Rest Password,</p>
                  <input
                    placeholder="Enter Via Code"
                    className="w-100 p-3 rounded border"
                    value={digitCode}
                    onChange={(e) => {
                      setdigitCode(e.target.value);
                    }}
                  />
                </div>
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={restEmailCode}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Rest Code
                  </Button>
                  <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </StepContent>
        </Step>
        <Step>
          <StepLabel>New Password</StepLabel>
          <StepContent>
            {" "}
            <StepContent>
              <Typography>
                <div className="bg-light py-3">
                  <h3 className="border-bottom">Enter A New Password</h3>

                  <input
                    placeholder="Enter Your Email Or Phone Number"
                    className="w-100 my-2 p-3 rounded border"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                  <input
                    placeholder="Enter A New Password"
                    className="w-100 my-2 p-3 rounded border"
                    value={newPassword}
                    onChange={(e) => {
                      setNewPassowrd(e.target.value);
                    }}
                  />
                </div>
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={restNewpassword}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Submit
                  </Button>
                  <Button onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </StepContent>
        </Step>

        {activeStep === 3 && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>
              All steps completed - you&apos;re finished Your Password Is
              Changed
            </Typography>
            <NavLink to={"/login"} sx={{ mt: 1, mr: 1 }}>
              <Button
                type="button"
                className="btn border border-primary text-primary "
              >
                Login
              </Button>
            </NavLink>
          </Paper>
        )}
      </Stepper>
      <Box sx={{ width: 500 }}>
        <Snackbar open={selector.islLoading} autoHideDuration={6000}>
          <Alert
            severity={
              selector.create === "Send Code Successfully"|| selector.create === "Password Changed" ? "success" : "error"
            }
            sx={{ width: "100%" }}
          >
            {selector.create}
          </Alert>
        </Snackbar>
      </Box>
    </div>
  );
};
export default ForgetPassword;
