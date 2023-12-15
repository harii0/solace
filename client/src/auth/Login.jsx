import { Toaster } from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { validate } from '../helper/validate'
import googleIcon from '../assets/images/google.svg'
import './login.css'
const Login = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validate: validate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            resetForm();
        }
    })
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 overflow-hidden">
            <Toaster position='top-center' reverseOrder='false'></Toaster>
            <div
                className=" w-full h-screen relative flex flex-col space-y-8 bg-white  md:flex-row md:space-y-0"
            >

                <form className=" lg:w-1/2 md:w-full flex flex-col justify-center p-8 md:p-14 sha" onSubmit={formik.handleSubmit}>
                    <span className="mb-3 text-4xl font-bold">Welcome back</span>
                    <span className="font-light text-gray-400 mb-8">
                        Please enter your details
                    </span>
                    <div className="py-4">
                        <span className="mb-2 text-base">Email</span>
                        <input
                            {...formik.getFieldProps('email')}
                            type="email"
                            className="w-full p-3 border-0 border-b-2   placeholder:font-light placeholder:text-gray-500"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className="py-4">
                        <span className="mb-2 text-base">Password</span>
                        <input
                            {...formik.getFieldProps('password')}

                            type="password"
                            name="password"
                            id="pass"
                            placeholder='enter password'
                            className="w-full p-3 border-0 border-b-2 border-gray-300 placeholder:font-light placeholder:text-gray-500"
                        />
                    </div>
                    <div className="flex justify-between w-full py-4">
                        <div className="mr-24">
                            <input type="checkbox" name="ch" id="ch" className="mr-2" />
                            <span className="text-xs">Remember me</span>
                        </div>
                        <span className="font-bold text-sm">Forgot password</span>
                    </div>
                    <button
                        type='submit'
                        className="w-full bg-black text-white p-3 rounded-lg mb-6 hover:bg-gray-800"
                    >
                        Sign in
                    </button>
                    <button
                        className="w-full  text-md p-2 rounded-lg mb-6 flex items-center justify-center "
                    >
                        <img src={googleIcon} alt="img" className="w-6 h-6 inline mr-2" />
                        Sign in with Google
                    </button>
                    <div className="text-center text-sm text-gray-400">
                        Dont have an account?
                        <Link className=" font-bold text-black text-sm p-1" to='/register'>Register</Link>
                    </div>
                </form>

                <div className="relative hidden md:block login_image lg:w-full h-screen">
                </div>
            </div>
        </div>
    )
}

export default Login