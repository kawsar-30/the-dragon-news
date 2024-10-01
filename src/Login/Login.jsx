import React, { useContext, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navabar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import { sendPasswordResetEmail, } from 'firebase/auth';
import { getAuth } from 'firebase/auth';
import { app } from '../firebase/firebase.config';
import Footer from '../Footer/Footer';


const Login = () => {
  const {logIn,forget} =useContext(AuthContext)
  const navigate = useNavigate()
  const location = useLocation()
  const emailRef =useRef(null)
  console.log(location)
  const auth =getAuth(app)


  const handleLogin=e=>{
    e.preventDefault()
    const form =  new FormData(e.currentTarget)
   

    const email = form.get('email')
    const password = form.get('password')

    logIn(email,password)
    .then(result =>{
      console.log(result.user)
      navigate(location?.state ? location.state : '/' )
  })
  .catch(error =>{
      console.error(error)
  })
  }
  const handleForgatePassWord=()=>{
   const email =emailRef.current.value
   console.log(email)

   sendPasswordResetEmail(auth,email)
    .then(()=>{
      console.log('check your email')
    })
    .catch(error =>{
      console.error(error)
    })
  }
    return (
        <>
        <Navabar></Navabar>
        <div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
      <h1 className="text-5xl font-bold">Login now!</h1>
      <p className="py-6">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <form onSubmit={handleLogin} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" placeholder="email" ref={emailRef} name='email' className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type="password" placeholder="password" name='password' className="input input-bordered" required />
          <label className="label">
            <a href="#" onClick={handleForgatePassWord} className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
          <p>New to this website?<Link to='/register' className='text-blue-500'>Pleas Resigter</Link></p>
        </div>
        
      </form>
      
    </div>
  </div>
</div>
<Footer></Footer>
        </>
    );
};

export default Login;