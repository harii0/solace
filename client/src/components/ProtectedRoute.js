// ProtectedRoute.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import axios from "axios";

const ProtectedRoute = (props) => {
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const fetchUser = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3000/get-user",
        { token },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (res.data.userData) {
        dispatch(setUser(res.data.userData));
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!user) {
      fetchUser();
    }
  }, [user]);

  if (localStorage.getItem("token")) {
    // eslint-disable-next-line react/prop-types
    return props.children;
  } else {
    return window.location.replace("/login");
  }
};

export default ProtectedRoute;
