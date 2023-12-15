import { Toaster } from 'react-hot-toast'
import { useFormik } from 'formik'
import { validate } from '../helper/validate'
// import bgImage from '../assets/images/image1.png'
import googleIcon from '../assets/images/google.svg'
import './login.css'
import { Link } from 'react-router-dom'

const Register = () => {

    const formik = useFormik({
        initialValues: {
            fullname: '',
            email: '',
            password: '',
            userType: '',
        },
        validate: (values) => validate(values, true),
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: (values) => {
            console.log(values)
            if (formik.values.userType === 'psychologist') {
                window.location.href = '/mentor'
            }
        }
    })

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

                    <div className=' lg:flex lg:flex-row lg:w-full lg:flex-wrap lg:gap-5'>


                        <div className="py-4 lg:w-1/3">
                            <span className="mb-2 text-base">Full Name</span>
                            <input
                                {...formik.getFieldProps('fullname')}
                                type="text"
                                className="w-full p-3 border-0 border-b-2   placeholder:font-light placeholder:text-gray-500"
                                name="fullname"
                                id="fullname"
                            />
                        </div>
                        <div className="py-4 lg:w-1/2">
                            <span className="mb-2 text-base ">Email</span>
                            <input
                                {...formik.getFieldProps('email')}
                                type="text"
                                className="w-full p-3 border-0 border-b-2   placeholder:font-light placeholder:text-gray-500"
                                name="email"
                                id="email"
                            />
                        </div>
                        <div className="py-4 lg:w-1/2">
                            <span className="mb-2 text-base">Password</span>
                            <input
                                {...formik.getFieldProps('password')}
                                type="password"
                                name="password"
                                id="password"
                                className="w-full p-3 border-0 border-b-2 border-gray-300 placeholder:font-light placeholder:text-gray-500"
                            />
                        </div>
                        <div className="py-4 w-1/3">
                            <span className="mb-2 text-sm">Register as</span>
                            <select
                                {...formik.getFieldProps('userType')}
                                className="w-full p-3 border-0 border-b-2 bg-white border-gray-300 placeholder:font-light placeholder:text-gray-500"
                                name="userType"
                                id="userType"
                            >
                                <option selected className=' text-gray-400' value="none">user</option>
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
                        className="w-full  bg-black text-white p-3 rounded-lg mb-6 hover:bg-gray-800"
                    >
                        Register
                    </button>
                    <button
                        className="w-full  text-md p-2 rounded-lg mb-6 flex items-center justify-center "
                    >
                        <img src={googleIcon} alt="img" className="w-6 h-6 inline mr-2" />
                        Register with Google
                    </button>
                    <div className="text-center text-sm text-gray-400">
                        Already have an account?
                        <Link className=" font-bold text-black text-sm p-1" to='/login'>Login</Link>


                    </div>
                </form>

                {/*<div className="relative">
                    <img
                        src={bgImage}
                        alt="img"
                        className="w-[400px] h-full hidden rounded-r-2xl md:block object-cover"
                    />
    </div>*/}
            </div>
        </div>
    )
}

export default Register
