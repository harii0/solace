
import { Toaster, toast } from 'react-hot-toast'
import { useState } from "react";
import { FiEdit, FiX } from "react-icons/fi";
import { useFormik } from "formik";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { showLoading, hideLoading } from "../../redux/alertSlice";
import { setUser } from "../../redux/userSlice";

const Profile = () => {
  const dispatch = useDispatch();
  const [showForm, setShowForm] = useState(false);
  const Image = {
    img: 'https://picsum.photos/200',
  }
  // storing user data
  const userData = useSelector((state) => state.user);
  const username = userData?.user?.username || '';
  const email = userData?.user?.email || '';
  const age = userData?.user?.age || '';
  const gender = userData?.user?.gender || '';
  console.log(userData);

  //formik
  const formik = useFormik({
    initialValues: {
      username: username,
      email: email,
      age: age,
      gender: gender,

    },


    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values, { resetForm }) => {

      try {
        dispatch(showLoading());

        const res = await axios.post('http://localhost:3000/updateprofile', values);
        const user = res.data.updatedUser;

        if (res.status === 200) {
          dispatch(setUser(user));
          setShowForm(false);
          toast.success('User updated successfully');
        } else {
          console.log('Error updating user');
        }
      } catch (err) {
        console.error(err);
        toast.error('Error updating user');
      } finally {
        resetForm();
        dispatch(hideLoading());
      }
    }
  })

  const handleEditClick = () => {
    dispatch(showLoading())
    setShowForm(true); // Show the form when the edit button is clicked
    dispatch(hideLoading())
  };


  const handleCloseClick = () => {
    dispatch(showLoading())
    setShowForm(false); // Hide the form when the close button is clicked
    toast('User update cancelled');
    dispatch(hideLoading())
  };

  return (
    <div className="rounded-sm w-full h-screen flex flex-col bg-white shadow-md py-1 ">
      <Toaster position='top-center' reverseOrder='false'></Toaster>
      <div className="flex justify-between items-center px-5 py-1 ">
        <h1 className="font-bold text-xl">Profile</h1>
      </div>
      <div className=" rounded-md mx-5 my-3 profile flex h-20 justify-between items-center border-solid border-2 border-slate-100 px-4 py-2">
        <div className="flex items-center ">
          <img src={Image.img} alt="User avatar" className="w-20 rounded-full" />
          <div className="flex flex-col ml-4 gap-1">
            <span className="font-medium text-md">{username}</span>
            <span className="font-normal text-xs text-slate-500">{email}</span>

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
              <span className="font-normal text-sm text-slate-500 ">{username}</span>
            </div>
            <span className=" text-sm">Age</span>
            <div className="px-2 py-2 bg-slate-100 rounded-sm">
              <span className="font-normal text-sm text-slate-500 ">{age}</span>
            </div>

          </div>
          <div className="flex flex-col w-1/2 px-5 py-3 gap-5">
            <span className=" text-sm">Email</span>
            <div className="px-2 py-2 bg-slate-100 rounded-sm">
              <span className="font-normal text-sm text-slate-500 ">{email}</span>
            </div>
            <span className=" text-sm">Gender</span>
            <div className="px-2 py-2 bg-slate-100 rounded-sm">
              <span className="font-normal text-sm text-slate-500 ">{gender}</span>
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
                className=" bg-white hover:bg-red-100 px-3 mx-2 rounded-sm "
                onClick={handleCloseClick} // Call handleCloseClick function when the close button is clicked
              >
                <FiX size={18} />
              </button>
            </div>
            <form action="post" className="w-full flex flex-col " onSubmit={formik.handleSubmit}>
              <div className="flex flex-col  px-7 py-2 gap-4">
                <span className="font-medium text-sm">Full name</span>
                <input
                  {...formik.getFieldProps('username')}
                  type="text"
                  className="  active:border-none text-gray-500 px-2 py-2 bg-slate-100 rounded-sm outline-none border-none"


                />
                <span className="text-sm">Email</span>
                <input
                  {...formik.getFieldProps('email')}
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
                <div className="flex gap-4">
                  <label className="text-sm">
                    <input
                      type="radio"
                      value="Male"
                      {...formik.getFieldProps('gender')}
                      checked={formik.values.gender === 'Male'}
                      onChange={() => formik.setFieldValue('gender', 'Male')}
                      className="mr-1"
                    />
                    Male
                  </label>
                  <label className="text-sm">
                    <input
                      type="radio"
                      value="Female"
                      {...formik.getFieldProps('gender')}
                      checked={formik.values.gender === 'Female'}
                      onChange={() => formik.setFieldValue('gender', 'Female')}
                      className="mr-1"
                    />
                    Female
                  </label>
                </div>
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
      {/* End of popup form */}
      <div className="profile w-full my-2">
        <h4 className="font-medium text-lg mx-5">Achivements</h4>
      </div>
    </div>
  );
};

export default Profile;
