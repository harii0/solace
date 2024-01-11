import { Toaster, toast } from 'react-hot-toast'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import { validate } from '../helper/validate'
import { GoogleLogin } from '@react-oauth/google';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { hideLoading, showLoading } from '../redux/alertSlice';



//login component

const Login = () => {
    const dispatch = useDispatch();
    //formik
    const formik = useFormik({

        initialValues: {
            email: '',
            password: '',
        },
        validate: validate,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (value, { resetForm }) => {

            dispatch(showLoading());
            try {
                const res = await axios.post('http://localhost:3000/login', value)


                const status = res.status;
                if (status === 200) {
                    toast.success('Login successful');
                    localStorage.setItem('token', res.data.token);
                    // if (res.data.loginUser.role === 'admin') {
                    //     window.location.href = '/admin/dashboard';
                    // }
                    window.location.href = '/dashboard';
                    dispatch(hideLoading());
                }
                else if (status === !200) {
                    toast.error('Invalid credentialss');
                    console.log('Invalid credentials')
                }

            }
            catch (err) {
                dispatch(hideLoading());
                toast.error('Invalid credentials');
                console.log(err)
            }
            resetForm();
        },
    })
    //show/hide password
    const [show, setShow] = useState(false);

    return (
        <div className="flex items-center justify-center min-h-screen h-screen bg-gray-100 overflow-hidden">
            <Toaster position='top-center' reverseOrder='false'></Toaster>
            <div className=" w-full h-full relative flex flex-col  bg-white md:h-screen md:flex-row ">
                <form className=" lg:w-1/2 md:w-full flex flex-col justify-center p-8 md:p-14 md:shadow-2xl " onSubmit={formik.handleSubmit}>
                    <span className="mb-3 text-3xl font-bold">Welcome back</span>
                    <span className="font-light text-sm text-gray-400 mb-8">
                        Please enter your details
                    </span>
                    <div className="py-4">
                        <span className="mb-2 text-sm">Email</span>
                        <input
                            {...formik.getFieldProps('email')}
                            type="email"
                            placeholder='enter your email'
                            className="w-full p-3 border-0 border-gray-300 border-b-2 border-solid focus:border-black outline-none placeholder:font-light placeholder:text-gray-400"
                            name="email"
                            id="email"
                        />
                    </div>
                    <div className="py-4 relative">
                        <span className="mb-2 text-sm">Password</span>
                        <input
                            {...formik.getFieldProps('password')}

                            type={show ? "text" : "password"}
                            name="password"
                            id="pass"
                            placeholder='enter your password'
                            className="w-full p-3  border-0 border-b-2 border-solid focus:border-black outline-none border-gray-300 placeholder:font-light placeholder:text-gray-400"
                        />
                        <div className=' absolute right-0 bottom-7 text-gray-500 cursor-pointer' >
                            {show ? <FaRegEye onClick={() => setShow(!show)} /> : <FaRegEyeSlash onClick={() => setShow(!show)} />}
                        </div>
                    </div>
                    <div className="flex justify-between w-full py-4">
                        <div className="mr-24 flex items-center">
                            <input type="checkbox" name="ch" id="ch" className="mr-2" />
                            <span className="text-xs">Remember me</span>
                        </div>
                        <Link className="font-medium text-sm" to='/forgetpassword'>Forgot password</Link>
                    </div>
                    <div className='flex flex-col justify-center items-center w-full'>
                        <button
                            type='submit'
                            className="w-full bg-black text-white p-3 rounded-lg mb-6 hover:bg-gray-800"
                        >
                            Sign in
                        </button>

                        <GoogleLogin width='400' />
                    </div>



                    <div className="text-center text-sm text-gray-400 mt-8 ">
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