import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { ArrowRightAlt } from "@mui/icons-material";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "San Francisco – Oakland Bay Bridge, United States",
    imgPath:
      "https://images.unsplash.com/photo-1537944434965-cf4679d1a598?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bird",
    imgPath:
      "https://images.unsplash.com/photo-1538032746644-0212e812a9e7?auto=format&fit=crop&w=400&h=250&q=60",
  },
  {
    label: "Bali, Indonesia",
    imgPath:
      "https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&h=250",
  },
  {
    label: "Goč, Serbia",
    imgPath:
      "https://images.unsplash.com/photo-1512341689857-198e7e2f3ca8?auto=format&fit=crop&w=400&h=250&q=60",
  },
];

function Sale() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <div className="container-fluid">
    <h1 className='text-center w-100 fst-italic text-decoration-underline p-lg-4 p-md-2 p-sm-1'>Our Sale</h1>
    <div className="d-flex">
      <div className="row">
        <div className="col-lg-8 col-md-6 col-sm-12">
          <Box>
          
            <AutoPlaySwipeableViews
              axis={theme.direction === "rtl" ? "x-reverse" : "x"}
              index={activeStep}
              onChangeIndex={handleStepChange}
              enableMouseEvents
            >
              {images.map((step, index) => (
                <div key={step.label}>
                  {Math.abs(activeStep - index) <= 2 ? (
                    <Box
                      component="img"
                      sx={{
                        height: 255,
                        display: "block",
                        maxWidth: "100%",
                        overflow: "hidden",
                        width: "100%",
                      }}
                      src={step.imgPath}
                      alt={step.label}
                    />
                  ) : null}
                </div>
              ))}
            </AutoPlaySwipeableViews>
            <Paper
            square
            elevation={0}
            sx={{
              display: "flex",
              alignItems: "center",
              height: 50,
              pl: 2,
              bgcolor: "background.default",
            }}
          >
            <Typography>{images[activeStep].label}</Typography>
          </Paper>
            <MobileStepper
              steps={maxSteps}
              position="static"
              activeStep={activeStep}
              nextButton={
                <Button
                  size="small"
                  onClick={handleNext}
                  disabled={activeStep === maxSteps - 1}
                >
                  Next
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowLeft />
                  ) : (
                    <KeyboardArrowRight />
                  )}
                </Button>
              }
              backButton={
                <Button
                  size="small"
                  onClick={handleBack}
                  disabled={activeStep === 0}
                >
                  {theme.direction === "rtl" ? (
                    <KeyboardArrowRight />
                  ) : (
                    <KeyboardArrowLeft />
                  )}
                  Back
                </Button>
              }
            />
          </Box>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12 d-flex">
         
        <div className="card p-0 m-0 col-6">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
          className="card-img-top"
          alt="Fissure in Sandstone"
        />
        <div className="card-body p-1">
          <h5 className="card-title">Card title</h5>
          <p className="card-text p-1">
            Some quick example text to build on the card title and make up
            the bulk of the card's content.
          </p>
          <div className="d-flex col-12 justify-content-center flex-wrap m-auto p-2">
            <div className="col-12">
              {" "}
              <ShoppingCartIcon className="mx-2" />
              <FavoriteBorderIcon className="mx-2" />
              <ArrowRightAlt className="mx-2" />
            </div>
            <div>
              <Stack spacing={1} className="col-12 pt-3">
                <Rating name="size-medium" defaultValue={2} />
              </Stack>
            </div>
          </div>
        </div>
      </div>
      <div className="card p-0 m-0 col-6">
      <img
        src="https://mdbcdn.b-cdn.net/img/new/standard/nature/184.webp"
        className="card-img-top"
        alt="Fissure in Sandstone"
      />
      <div className="card-body p-1">
        <h5 className="card-title">Card title</h5>
        <p className="card-text p-1">
          Some quick example text to build on the card title and make up
          the bulk of the card's content.
        </p>
        <div className="d-flex col-12 justify-content-center flex-wrap m-auto p-2">
          <div className="col-12">
            {" "}
            <ShoppingCartIcon className="mx-2" />
            <FavoriteBorderIcon className="mx-2" />
            <ArrowRightAlt className="mx-2" />
          </div>
          <div>
            <Stack spacing={1} className="col-12 pt-3">
              <Rating name="size-medium" defaultValue={2} />
            </Stack>
          </div>
        </div>
      </div>
    </div>
          </div>
        </div>
     
    </div>
    </div>
  );
}

export default Sale;
