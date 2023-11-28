import Logo from '../assets/images/logo.svg';
import './Register.css';

export const Signup = () => {
  //submti form
  const handleSubmit = (e) => {
    e.preventDefault();
    e.target.reset()
    console.log(e.target.name.value);
    console.log(e.target.password.value);
    console.log(e.target.email.value);
  }

  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='container flex-col shadow-xl bg-white rounded-xl md:py-0 py-5 '>
        <form action="#" onSubmit={handleSubmit }  className='form_reg lg:p-5 md:gap-1 gap-2 justify-center items-center overflow-hidden'>
          <div>
            <div className='logo py-0'><img src={Logo} alt="" /></div>
            <h1 className='text-2xl font-bold'>Sign Up</h1>
          </div>
          <div className='flex-col flex py-2'>
            <label className='px-4 m-0 py-0' htmlFor="name">Name</label>
            <input type="text" name='name' id='name' placeholder='Enter your name  ' />
          </div>
          <div className='flex-col flex py-2'>
            <label className='px-4 m-0 py-0' htmlFor="email">Email</label>
            <input type="email" name='email' id='email' placeholder='Enter your email address ' />
          </div>
          <div className='flex-col flex py-2'>
            <label className='px-4 m-0 py-0' htmlFor="password">Password</label>
            <input type="password" name='password' id='password' placeholder='create a new password ' />
          </div>
          <button type="submit" className='m-4 cursor-pointer'>Register</button>
        </form>

        <p>or</p>
        <div className='flex justify-center text-center items-center gap-1 m-3 md:m-1 md:0'>
          <p className='text-xs'>Already have an account?</p>
          <a href="/sign-in" className='text-black text-sm'>Login</a>
        </div>
      </div>
    </div>
  );
}
