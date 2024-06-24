import { getAuth, onAuthStateChanged } from "firebase/auth";
import  { useEffect } from "react";
import { useDispatch } from "react-redux";

import { useLocation, useNavigate } from "react-router-dom";
import { setuid } from "../../Store/Store";

const RequireAuth = ({ children }) => {
  const auth = getAuth();
  const Navigate = useNavigate();
  const dispatch = useDispatch();
  let location = useLocation();


  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        Navigate(location.pathname);
      } else {
        Navigate("/Login");
      }
    });
  }, [auth, Navigate , dispatch, location.pathname ]);
  return children;
};

export default RequireAuth;
