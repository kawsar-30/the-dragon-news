import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import userProfile from '../../assets/user.png';
import logo from '../../assets/logo.png';
import { AuthContext } from '../../provider/AuthProvider';

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);

  const handleLogOut = () => {
    logout()
      .then(() => {
        alert('Logout successful');
      })
      .catch(error => {
        console.error(error);
      });
  };

  const links = (
    <>
      <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-orange-500 font-bold' : 'mr-4')} to="/">
        Home
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-orange-500 font-bold' : 'mr-4')} to="/about">
        About
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-orange-500 font-bold' : 'mr-4')} to="/carrear">
        Career
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-orange-500 font-bold' : 'mr-4')} to="/login">
        Login
      </NavLink>
      <NavLink className={({ isActive }) => (isActive ? 'mr-4 text-orange-500 font-bold' : 'mr-4')} to="/register">
        Registration
      </NavLink>
    </>
  );

  return (
    <div className="navbar sticky top-0 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            {links}
            <div className="w-10 h-10 rounded-full overflow-hidden">
              <img
                className='object-cover'
                alt="User Profile"
                src={userProfile} />
            </div>
          </ul>
        </div>

        <div>
          <img className="btn btn-ghost w-3/4 text-xl" src={logo} alt="Dragon News Logo" />
        </div>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {links}
        </ul>
      </div>

      <div className="navbar-end">
        <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
          <img
            className='object-cover'
            alt="User Profile"
            src={userProfile} />
        </div>
        {user ? (
          <button onClick={handleLogOut} className="btn">Sign Out</button>
        ) : (
          <Link className="btn" to='/login'>Login</Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;





























// import React, { useContext } from 'react';
// import { Link, NavLink } from 'react-router-dom';
// import userProfile from '../../assets/user.png'
// import logo from '../../assets/logo.png'
// import { AuthContext } from '../../provider/AuthProvider';

// const Navabar = () => {
//   const {user,logout} =useContext(AuthContext)

//   const handleLogOut = ()=>{
//     logout()
//     .then(()=>{
//       alert('logout success full')
//     })
//     .catch(error =>{
//       console.error(error)
//     })
    
//   }
//     const links = <>
//                    <NavLink className='mr-4' to='/'>Home</NavLink>
//                    <NavLink className='mr-4' to='/about'>About</NavLink>
//                    <NavLink className='mr-4' to='/carrear'>Carrear</NavLink>
//                    <NavLink className='mr-4' to='/login'>Login</NavLink>
//                    <NavLink className='mr-4' to='/register'>Registration</NavLink>
//                  </>
//     return (
//         <div className="navbar sticky top-0 bg-base-100">
//   <div className="navbar-start">
//     <div className="dropdown">
//       <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           className="h-5 w-5"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor">
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h8m-8 6h16" />
//         </svg>
//       </div>
//       <ul
//         tabIndex={0}
//         className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
//      {
//         links
//      }
//      <div className="w-10 h-10 rounded-full overflow-hidden">
//           <img
//           className='object-cover'
//             alt="Tailwind CSS Navbar component"
//             src={userProfile} />
//         </div>
//       </ul>
      
//     </div>
    
//     <div>
//     <img className="btn btn-ghost w-3/4 text-xl" src={logo}></img>
//     </div>
//   </div>
//   <div className="navbar-center  hidden lg:flex">
//     <ul className="menu menu-horizontal px-1">
//       {links}
//     </ul>
//   </div>
  
//   <div className="navbar-end">
//   <div className="w-10 h-10 rounded-full mr-3 overflow-hidden">
//           <img
//           className='object-cover'
//             alt="Tailwind CSS Navbar component"
//             src={userProfile} />
//         </div>
//     { user ? 
//      <button onClick={handleLogOut} className="btn" >Sign Out</button>:
//      <Link  className="btn" to='/login'>Login</Link>}
//   </div>
// </div>
//     );
// };

// export default Navabar;