import toast from "react-hot-toast";

export async function validate(values, isRegister) {
  const errors = loginVerify({}, values, isRegister);
  return errors;
}

function loginVerify(error = {}, values, isRegister) {
  //username
  if (isRegister&&!values.username) {
    error.username = toast.error("Username is required");
  }
  //email
  if (!values.email) {
    error.email = toast.error("Email address is required");
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    error.email = toast.error("Email address is invalid");
  }
  //password
  if (!values.password) {
    error.password = toast.error("Password is required");
  } else if (values.password.length < 6) {
    error.password = toast.error("Password must be 6 or more characters");
  }
  //userType

  return error;
}
