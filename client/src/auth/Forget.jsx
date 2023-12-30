import { useFormik } from "formik"
import axios from "axios"
import { toast, Toaster } from "react-hot-toast"
const Forget = () => {
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
                const res = await axios.post('http://localhost:3000/forgetpassword', value)
                const status = res.status;
                if (status === 200) {
                    toast.success('link send to your email');
                } else {
                    toast.error('Email not Found')
                }

            }
            catch (err) {
                toast.error('Invalid credentials');
                console.log(err)
            }
            resetForm();
        },
    })
    return (
        <div className="flex items-center justify-center min-h-screen h-screen bg-gray-100 overflow-hidden ">
            <Toaster position='top-center' reverseOrder='false'></Toaster>
            <div className=" w-full h-screen relative flex flex-col space-y-1 bg-white md:h-screen md:flex-row md:space-y-0">
                <form className=" lg:w-1/2 md:w-full flex flex-col justify-center p-8 md:p-14 shadow-2xl gap-5" onSubmit={formik.handleSubmit}>
                    <div className="flex flex-col">
                        <span className="mb-3 text-3xl font-bold">Forget password</span>
                        <span className="font-light text-sm text-gray-400 mb-8">
                            Please enter your email
                        </span>
                    </div>
                    <div className="py-4">
                        <span className="mb-2 text-sm">Email</span>
                        <input
                            {...formik.getFieldProps('email')}
                            type="email"
                            placeholder='enter your email'
                            className="w-full p-3 border-0 border-b-2   placeholder:font-light placeholder:text-gray-400"
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