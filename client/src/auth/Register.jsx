import toast, { Toaster } from 'react-hot-toast'
import { useState } from 'react'
import { useFormik } from 'formik'
import { validate } from '../helper/validate'
import axios from 'axios'
import googleIcon from '../assets/svg/google.svg'
import { FaRegEyeSlash } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import './login.css'
import { Link } from 'react-router-dom'

const Register = () => {

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
        },
        validate: (value) => validate(value, true),
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (value, { resetForm }) => {
            resetForm();
            try {
                const res = await axios.post('http://localhost:3000/register', value, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    }

                })
                const status = res.data.success;
                console.log(status)
                if (status === true) {
                    toast.success(' account created');
                    window.location.href = '/login';
                }
                else if (status === false) {
                    toast.error('Email already exists');
                }
                console.log(res)
            }
            catch (err) {
                console.log(err)
            }
            console.log('Response:', value);


        },
    })
    //show/hide password
    const [show, setShow] = useState(false);
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">
            <Toaster position='top-center' reverseOrder='false'></Toaster>
            <div
                className="relative flex flex-col space-y-8  bg-white md:flex-row md:space-y-0"
            >

                <form className="flex flex-col justify-center p-8 md:p-14" onSubmit={formik.handleSubmit}>
                    <span className="mb-3 md:text-4xl sm:text-lg font-bold ">Create an account</span>
                    <span className="font-light text-gray-400 mb-4 lg:mb-8 text-sm sm:text-xs">
                        Please fill in the required information
                    </span>

                    <div className=' lg:flex lg:flex-row lg:w-full lg:flex-wrap lg:gap-4'>


                        <div className=" py-4 lg:w-1/3">
                            <span className="mb-2 text-base">Username</span>
                            <input
                                {...formik.getFieldProps('username')}
                                type="text"
                                placeholder='Enter your full name'
                                className="w-full p-3 border-0 border-b-2   placeholder:font-light placeholder:text-gray-500"
                                name="username"
                                id="username"
                            />
                        </div>
                        <div className="lg:mx-5 py-4 lg:w-1/2">
                            <span className="mb-2 text-base ">Email</span>
                            <input
                                placeholder='Enter your email'
                                {...formik.getFieldProps('email')}
                                type="text"
                                className="w-full p-3 border-0 border-b-2   placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="py-4 lg:w-1/2 relative">
                            <span className="mb-2 text-base">Password</span>
                            <input
                                placeholder='create a new password'
                                {...formik.getFieldProps('password')}
                                type={show ? 'text' : 'password'}
                                name="password"
                                id="password"
                                className=" relative w-full p-3 border-0 border-b-2 border-gray-300 placeholder:font-light placeholder:text-gray-500"
                            />
                            <div className=' absolute right-0 bottom-7 text-gray-500 cursor-pointer' >
                                {show ? <FaRegEye onClick={() => setShow(!show)} /> : <FaRegEyeSlash onClick={() => setShow(!show)} />}
                            </div>
                        </div>

                        <div className="  lg:mx-5 py-4 w-1/3">
                            <span className="mb-2 text-sm">Register as</span>
                            <select
                                {...formik.getFieldProps('userType')}
                                className="w-full p-3 border-0 border-b-2 bg-white border-gray-300 placeholder:font-light placeholder:text-gray-500"
                                name="userType"
                                id="userType"
                            >
                                <option defaultValue={'user'} className=' text-gray-400' value="user">user</option>
                                <option className=' text-gray-400' value="psychologist">Mentor</option>
                            </select>
                        </div>
                        <div className="flex justify-between w-full py-4">
                            <div className="mr-24">
                                <span className=" text-gray-500 text-xs ">* Change the register if you are a health proffesional </span>
                            </div>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className="w-full  bg-black text-white p-3 rounded-lg mb-6 hover:bg-gray-800"
                    >
                        Register
                    </button>

                    <button className="w-full  text-md p-2 rounded-lg mb-6 flex items-center justify-center ">
                        <img src={googleIcon} alt="img" className="w-6 h-6 inline mr-2" />
                        Register with Google
                    </button>
                    <div className="text-center text-sm text-gray-400">
                        Already have an account?
                        <Link className=" font-bold text-black text-sm p-1" to='/login'>Login</Link>


                    </div>
                </form>


            </div>
        </div>
    )
}

export default Register
