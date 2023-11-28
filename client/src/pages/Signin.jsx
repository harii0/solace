import Logo from '../assets/images/logo.svg';
import './Register.css';

const Signin = () => {
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
        <form action="#" onSubmit={handleSubmit} className='form_reg lg:p-5 md:gap-1 gap-2 justify-center items-center overflow-hidden' autoComplete='off'>
          <div>
            <div className='logo py-0'><img src={Logo} alt="" /></div>
            <h1 className='text-2xl font-bold'>welcome back!</h1>
          </div>
          <div className='flex-col flex py-4'>
            <label className='px-4 m-0 py-0' htmlFor="email">Email</label>
            <input type="email" name='email' id='email' placeholder='Enter your email address ' />
          </div>
          <div className='flex-col flex py-3'>
            <label className='px-4 m-0 py-0' htmlFor="pasword">Password</label>
            <input type="password" name='password' id='password' placeholder='Enter your password ' />
          </div>
          <button type="submit" className='m-4 cursor-pointer'>Login</button>
        </form>
        <p>or</p>
        <div className='flex justify-center text-center items-center gap-1 m-7 md:m-1 md:0'>
          <p className='text-xs'>Dont have an account?</p>
          <a href="/sign-up" className='text-black text-sm'>Register</a>
        </div>
      </div>
    </div>
  );
}

export default Signin;
