import axios from "axios";
import React, { useEffect } from "react";



const Products = () => {
  const [data, setData] = React.useState([]);
  const [isLoading, setisLoading] = React.useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:8008/api/v1/brands`)
      .then((e) => {
        setData(e.data.data);
      })
      .catch(() => {
        setisLoading(false);
      })
      .finally(() => setisLoading(false));
  }, []);
  return (
  
    <div id="default-styled-tab-content">
      <div
        className="hidden p-4  bg-gray-50 dark:bg-gray-800 "
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
        className="hidden p-4  bg-gray-50 dark:bg-gray-800"
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
        className="hidden p-4  bg-gray-50 dark:bg-gray-800"
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
        className="hidden p-4  bg-gray-50 dark:bg-gray-800"
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
