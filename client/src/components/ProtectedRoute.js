
const Protectedroute = (props) => {
  if (localStorage.getItem("token")) {
    // eslint-disable-next-line react/prop-types
    return props.children;
  } else {
    return window.location.replace("/login");
  }
};

export default Protectedroute;
