import { useFormik } from "formik"
import axios from "axios"
import { toast, Toaster } from "react-hot-toast"
import { useState } from "react"
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";

const ResetPassword = () => {
    const validate = (value) => {
        const error = {};
        if (!value.password) {
            error.password = toast.error("Password is required");
        } else if (value.password.length < 6) {
            error.password = toast.error("Password must be 6 or more characters");
        }
    }

    const formik = useFormik({
        initialValues: {
            password: '',
        },
        validate: validate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (value, { resetForm }) => {
            try {
                const { password } = value;
                const token = window.location.pathname.split("/").pop(); // Extract token from the URL

                const res = await axios.post(`http://localhost:3000/resetpassword/${token}`, { password })
                console.log(value)
                const status = res.status;
                if (status === 200) {

                    toast.success('Password reset successful');

                    window.location.href = '/login';
                } else {
                    toast.loading('failed');
                }

            }
            catch (err) {
                toast.error('Invalid credentials');
                console.log(err)
            }
            resetForm();
        },
    })
    const [show, setShow] = useState(false)

    return (
        <div className="flex items-center justify-center min-h-screen h-screen bg-gray-100 overflow-hidden ">
            <Toaster position='top-center' reverseOrder='false'></Toaster>
            <div className=" w-full h-screen relative flex flex-col space-y-1 bg-white md:h-screen md:flex-row md:space-y-0">
                <form className=" lg:w-1/2 md:w-full flex flex-col justify-center p-8 md:p-14 shadow-2xl gap-5" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col">
                        <span className="mb-3 text-3xl font-bold">Create a new password</span>
                        <span className="font-light text-sm text-gray-400 mb-8">
                            Please enter your password
                        </span>
                    </div>
                    <div className="py-4">
                        <span className="mb-2 text-sm">Password</span>
                        <input
                            {...formik.getFieldProps('password')}

                            type={show ? "text" : "password"}
                            name="password"
                            id="pass"
                            placeholder='enter your password'
                            className="w-full p-3 border-0 border-b-2 border-gray-300 placeholder:font-light placeholder:text-gray-400"
                        />
                        <div className=' absolute right-0 bottom-7 text-gray-500 cursor-pointer' >
                            {show ? <FaRegEye onClick={() => setShow(!show)} /> : <FaRegEyeSlash onClick={() => setShow(!show)} />}
                        </div>
                    </div>
                    <button
                        type='submit'
                        className="w-full bg-black text-white p-3 rounded-lg mb-6 hover:bg-gray-800"
                    >
                        submit
                    </button>

                </form>


                <div className="relative hidden md:block login_image lg:w-full h-screen">
                </div>
            </div>
        </div>
    )
}

export default ResetPassword