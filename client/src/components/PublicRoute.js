const PublicRoute = (props) => {
  if (localStorage.getItem("token")) {
    return (window.location.href = "/dashboard");
  } else {
    // eslint-disable-next-line react/prop-types
    return props.children;
  }
};

export default PublicRoute;
