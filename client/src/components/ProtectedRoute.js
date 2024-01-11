// ProtectedRoute.js
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUser } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const ProtectedRoute = (props) => {
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const dispatch = useDispatch();

  const fetchUser = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }
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
    navigate("/login");
  }
};

export default ProtectedRoute;
