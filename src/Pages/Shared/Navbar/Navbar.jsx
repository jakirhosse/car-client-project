import React, { useContext } from "react";
import image from '../../../assets/assets/images/services/tesla.png'
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
const Navbar = () => {
  const {user,logout} = useContext(AuthContext)

  const handleLogout = event => {
    logout()
    .then(() => {})
    .catch(error => console.log(error))
  }
  const navOption = (
    <>
     <li> <Link to="/">Home</Link></li>
     <li> <Link to="/about">About</Link></li>
    { user?.email? <>
      <li> <Link to="/booking">my booking</Link></li>
      <li><button onClick={handleLogout}>Log out</button> </li>
    </> 

       :<li> <Link to="/login">Login</Link></li>
      
    }
    </>
  );

  return (
    <div className="navbar bg-white, bg-slate-200 text-2xl shadow-lg sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navOption}
          </ul>
        </div>
        <a
          href="#home"
          className="btn btn-ghost text-xl font-bold text-blue-600"
        >
        </a>
        <img className="h-12 w-auto" src={image} alt="" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4">{navOption}</ul>
      </div>
      <div className="navbar-end">
      <button className="btn btn-warning">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
