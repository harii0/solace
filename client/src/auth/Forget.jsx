import { useFormik } from "formik"
import axios from "axios"
import { toast, Toaster } from "react-hot-toast"
import { useDispatch } from "react-redux"
import { showLoading } from "../redux/alertSlice"
import { hideLoading } from "../redux/alertSlice"
const Forget = () => {
    const dispatch = useDispatch();
    const validate = value => {
        const errors = {}
        if (!value.email) {
            errors.email = 'Required'
        }
        else if (!/\S+@\S+\.\S+/.test(value.email)) {
            errors.email = 'Invalid email address'
        }
        return errors
    }
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validate: validate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (value, { resetForm }) => {
            try {
                dispatch(showLoading());
                const res = await axios.post('http://localhost:3000/forgetpassword', value)
                dispatch(hideLoading());
                const status = res.status;
                if (status === 200) {
                    toast.success('link send to your email');
                } else if (status === 401) {
                    toast.error('Email not Found')
                } else {
                    toast.error('Something went wrong')
                }

            }
            catch (err) {
                dispatch(hideLoading());
                if (err.response.status === 401) {
                    toast.error('Email not Found')
                }
                else {
                    toast.error('Invalid credentials ');
                }
            }
            resetForm();
        },
    })
    return (
        <div className="flex items-center justify-center min-h-screen h-screen bg-gray-100 overflow-hidden ">
            <Toaster position='top-center' reverseOrder='false'></Toaster>
            <div className=" w-full h-screen relative flex flex-col space-y-1 bg-white md:h-screen md:flex-row md:space-y-0">
                <form className=" lg:w-1/2 md:w-full flex flex-col justify-center p-8 md:p-14 shadow-none md:shadow-2xl gap-5" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col gap-2">
                        <span className="mb-3 text-3xl font-bold">Forget password</span>
                        <span className="font-light text-sm text-gray-400 mb-8">
                            Enter your registered email address
                        </span>
                    </div>
                    <div className="py-4">
                        <span className="mb-2 text-sm">Email</span>
                        <input
                            {...formik.getFieldProps('email')}
                            type="email"
                            placeholder='enter your email'
                            className="w-full p-3 border-0  border-gray-300 border-b-2 border-solid focus:border-black outline-none  placeholder:font-light placeholder:text-gray-400"
                            name="email"
                            id="email"
                        />
                    </div>
                    <button
                        type='submit'
                        className="w-full bg-black text-white p-3 rounded-lg mb-6 hover:bg-gray-800"
                    >
                        Send Link
                    </button>
                    <div><span className=" text-red-500">*</span><p className="text-sm w-full text-gray-400">Please use the link sent to your email to reset your password.</p>
                    </div>
                </form>


                <div className="relative hidden md:block login_image lg:w-full h-screen">
                </div>
            </div>
        </div>
    )
}

export default Forget