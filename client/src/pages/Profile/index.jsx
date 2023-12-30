// import axios from "axios";
import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { useFormik } from "formik";
import axios from "axios";

const Profile = () => {
  const [showForm, setShowForm] = useState(false);
  const Image = {
    img: 'https://picsum.photos/200',
  }
  // storing user data
  let storedUser = sessionStorage.getItem("user");
  let userData = JSON.parse(storedUser);
  if (storedUser === null) {
    fetch('http://localhost:3000/profile', {
      
    })
  }
  //formik
  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      age: '',
      gender: '',

    },


    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (value, { resetForm }) => {
      try {
        const res = await axios.post('http://localhost:3000/profile/update', value)
        console.log(res);
      }
      catch (err) {
        console.log(err)
      }
      resetForm();
    },
  })
  const handleEditClick = () => {
    setShowForm(true); // Show the form when the edit button is clicked
  };

  const handleCloseClick = () => {
    setShowForm(false); // Hide the form when the close button is clicked
  };

  return (
    <div className="rounded-sm w-full h-screen flex flex-col bg-white shadow-md py-1 ">
      <div className="flex justify-between items-center px-5 py-1 ">
        <h1 className="font-bold text-xl">Profile</h1>
      </div>
      <div className=" rounded-md mx-5 my-3 profile flex h-20 justify-between items-center border-solid border-2 border-slate-100 px-4 py-2">
        <div className="flex items-center ">
          <img src={Image.img} alt="User avatar" className="w-20 rounded-full" />
          <div className="flex flex-col ml-4 gap-1">
            <span className="font-medium text-md">{userData.username}</span>
            <span className="font-normal text-xs text-slate-500">{userData.email}</span>
          </div>
        </div>
        <button
          type="button"
          className="bg-black text-white w-20 h-9 flex items-center justify-center gap-1 rounded-md cursor-pointer"
          onClick={handleEditClick} // Call handleEditClick function when the button is clicked
        >
          <FiEdit />
          edit
        </button>
      </div>
      <div className="personal">
        <div className="flex justify-between items-center px-5 py-1 ">
          <h4 className="font-medium text-lg">Personal information</h4>
        </div>
        <div className="flex w-full gap-4">
          <div className="flex flex-col w-1/2 px-5 py-2 gap-5">
            <span className="font-medium text-sm">Full name</span>
            <div className="px-2 py-2 bg-slate-100 rounded-sm">
              <span className="font-normal text-sm text-slate-500 ">{userData.username}</span>
            </div>
            <span className=" text-sm">Age</span>
            <div className="px-2 py-2 bg-slate-100 rounded-sm">
              <span className="font-normal text-sm text-slate-500 ">{20}</span>
            </div>
            <span className=" text-sm">Gender</span>
            <div className="px-2 py-2 bg-slate-100 rounded-sm">
              <span className="font-normal text-sm text-slate-500 ">{'Male'}</span>
            </div>
          </div>
          <div className="flex flex-col w-1/2 px-5 py-3 gap-5">
            <span className=" text-sm">Email</span>
            <div className="px-2 py-2 bg-slate-100 rounded-sm">
              <span className="font-normal text-sm text-slate-500 ">{userData.email}</span>
            </div>
            <span className=" text-sm ">Location</span>
            <div className="px-2 py-2 bg-slate-100 rounded-sm">
              <span className="font-normal text-sm text-slate-500 ">{"location"}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Popup form */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className=" justify-center bg-white flex flex-col sm:w-[45vw] sm:h-[85vh] md:w-[45vw] md:h-[90vh] rounded-md">
            <div className="flex justify-between   mb-4 w-full h-10">
              <h2 className="text-lg font-medium px-3">Edit Profile</h2>
              <button
                type="button"
                className="text-gray-500 hover:bg-red-300 hover:text-white px-3 rounded-sm"
                onClick={handleCloseClick} // Call handleCloseClick function when the close button is clicked
              >
                <FiX size={15} />
              </button>
            </div>
            <form action="post" className="w-full flex flex-col " onSubmit={formik.handleSubmit}>
              <div className="flex flex-col  px-7 py-2 gap-4">
                <span className="font-medium text-sm">Full name</span>
                <input
                  {...formik.getFieldProps('email')}
                  type="text"
                  className=" text-gray-500 px-2 py-2 bg-slate-100 rounded-sm outline-none border-none"


                />
                <span className="text-sm">Email</span>
                <input
                  type="email"
                  className="  text-gray-500 px-2 py-2 bg-slate-100 rounded-sm outline-none border-none focus:outline-none"

                />
                <span className="text-sm">Age</span>
                <input
                  {...formik.getFieldProps('age')}
                  type="number"
                  className=" text-sm px-2 py-2 bg-slate-100 rounded-sm outline-none border-none focus:outline-none"

                />
                <span className="text-sm">Gender</span>
                <select
                  {...formik.getFieldProps('gender')}
                  className="px-2 py-2 bg-slate-100 outline-none  border-none rounded-sm"

                >
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                <span className="text-sm">Profile Image</span>
                <input
                  type="file"
                  className="px-2 py-2 bg-slate-100 rounded-sm"
                />



              </div>
              <div className="flex m-3 gap-5 items-center px-5 py-1">
                <button
                  type="submit"
                  className="bg-black text-white text-xs py-2 px-4 rounded cursor-pointer"

                >
                  Save Changes
                </button>
                <button
                  type="button"
                  className="bg-red-500 text-white text-xs  py-2 px-4 rounded cursor-pointer"
                  onClick={handleCloseClick} // Call handleCloseClick function when the cancel button is clicked
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
