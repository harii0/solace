import toast from "react-hot-toast";

export async function profileValidate(values) {
  const errors = ProfileVerify({}, values);
  return errors;
}

function ProfileVerify(error = {}, values) {
    //username
    if (!values.username) {
        error.username = toast.error("Username is required");
    }
    //email
    if (!values.email) {
        error.email = toast.error("Email address is required");
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
        error.email = toast.error("Email address is invalid");
    }
    
    return error;
    }