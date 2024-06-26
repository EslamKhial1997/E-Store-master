import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { getData, getDataByID } from "../../../Store/store";

import { FavoriteBorderOutlined, ShoppingCart } from "@mui/icons-material";
const Products = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.StoreSlice);

  const productId = (e) => {
    dispatch(getDataByID("products"));
  };
  useEffect(() => {
    dispatch(getData("products"));
  }, [dispatch]);
  return (
  
    <div id="default-styled-tab-content">
      <div
        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800 "
        id="styled-profile"
        role="tabpanel"
        aria-labelledby="profile-tab"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong className="font-medium text-gray-800 dark:text-white">
            Profile tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="styled-dashboard"
        role="tabpanel"
        aria-labelledby="dashboard-tab"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong className="font-medium text-gray-800 dark:text-white">
            Dashboard tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="styled-settings"
        role="tabpanel"
        aria-labelledby="settings-tab"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong className="font-medium text-gray-800 dark:text-white">
            Settings tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
      <div
        className="hidden p-4 rounded-lg bg-gray-50 dark:bg-gray-800"
        id="styled-contacts"
        role="tabpanel"
        aria-labelledby="contacts-tab"
      >
        <p className="text-sm text-gray-500 dark:text-gray-400">
          This is some placeholder content the
          <strong className="font-medium text-gray-800 dark:text-white">
            Contacts tab's associated content
          </strong>
          . Clicking another tab will toggle the visibility of this one for the
          next. The tab JavaScript swaps classes to control the content
          visibility and styling.
        </p>
      </div>
    </div>
  );
};

export default Products;
