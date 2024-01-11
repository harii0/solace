import { useNavigate } from "react-router-dom";
const PublicRoute = (props) => {
  const navigate = useNavigate();
  if (localStorage.getItem("token")) {
    return navigate("/dashboard");
  } else {
    // eslint-disable-next-line react/prop-types
    return props.children;
  }
};

export default PublicRoute;
