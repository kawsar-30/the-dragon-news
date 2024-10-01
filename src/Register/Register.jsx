
import { useContext } from 'react';
import Navabar from '../Shared/Navbar/Navbar';
import { AuthContext } from '../provider/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import { sendEmailVerification } from 'firebase/auth';
import Footer from '../Footer/Footer';

const Register = () => {
  const {createUser,emailverification} =useContext(AuthContext)
  const navigate = useNavigate()

  const handleRegister = e =>{

    e.preventDefault()
    const form =  new FormData(e.currentTarget)

    const email = form.get('email')
    const photoUrl = form.get('photoUrl')
    const name = form.get('name')
    const password = form.get('password')

    createUser(email,password)
    .then(result =>{
      console.log(result.user)
      navigate('/')
      sendEmailVerification(result.user)
      .then(resut=>{
       alert('check your email ')
        console.log(result.user)
      })
      .catch(error =>{
        console.error(error)
      })

    })
    .catch(error =>{
      console.error(error)
      

    })

   

 

    
  }

    return (
      <>
      <Navabar></Navabar>
      <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4 sm:px-0">
      <form
        onSubmit={handleRegister}
        className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md"
      >
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-6">Register your account</h2>

        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700">Your Name</label>
          <input
            type="text"
            name="name"
            id="name"
            
            placeholder="Enter your name"
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="photoUrl" className="block text-gray-700">Photo URL</label>
          <input
            type="text"
            name="photoUrl"
            id="photoUrl"
            
            placeholder="Enter photo URL"
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700">Email</label>
          <input
            type="email"
            name="email"
            id="email"
            
            placeholder="Enter your email address"
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="password" className="block text-gray-700">Password</label>
          <input
            type="password"
            name="password"
            id="password"
            
            placeholder="Enter your password"
            className="w-full px-3 py-2 border rounded-lg bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="mb-4 flex items-center">
          <input
            type="checkbox"
            name="termsAccepted"
            id="termsAccepted"
            
            className="h-4 w-4 text-blue-600"
          />
          <label htmlFor="termsAccepted" className="ml-2 text-gray-700">
            Accept <span className="text-blue-600 cursor-pointer">Terms & Conditions</span>
          </label>
        </div>

        <button
     
          type="submit"
          className="w-full bg-gray-800 text-white py-2 rounded-lg hover:bg-gray-700 transition-colors"
        >
          Register
        </button>
        <p className='mt-4 text-start'>Already have an account?<Link to='/login' className='text-blue-500 mt-4'>Please Login</Link></p>
      </form>
      
    </div>
    <Footer></Footer>
      </>
    );
};

export default Register;