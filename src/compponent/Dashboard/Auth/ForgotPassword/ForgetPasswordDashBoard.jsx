import { Outlet } from "react-router-dom";
import EmailForm from "./EmailFormDashBoard";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";
import RestCode from "./RestCodeDashBoard";
import NewPasswordDashboard from "./NewPasswordDashBoard";
import { useSelector } from "react-redux";

const ForgetPasswordDashBoard = () => {
  const { tabs } = useSelector((state) => state.StoreSlice);

  function CustomTabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }

  return (
    <Box sx={{ width: "100%" }}>
      <CustomTabPanel value={tabs} index={0}>
        <EmailForm />
      </CustomTabPanel>
      <CustomTabPanel value={tabs} index={1}>
        <RestCode />
      </CustomTabPanel>
      <CustomTabPanel value={tabs} index={2}>
        <NewPasswordDashboard />
      </CustomTabPanel>
    </Box>
  );
};
export default ForgetPasswordDashBoard;
