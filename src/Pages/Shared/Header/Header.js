import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user, loading, error] = useAuthState(auth);
  const logout = () => {
    signOut(auth);
    localStorage.removeItem('accessToken');
  };
    const menuItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/appointment">Appointment</Link></li>
        <li><Link to="/reviews">Reviews</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {
          user && <li><Link to="/deshboard">Deshboard</Link></li>
        }
        {
          user ? <li><button onClick={logout}>Logout</button></li>
          : <li><Link to="/login">Login/Reg</Link></li>
        }
    </>
    return (
      <div className='sticky top-0 z-30  bg-white'>
       <div className="navbar bg-base-100 container mx-auto ">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex="0" className="lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex="0" className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
       {menuItems}
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl" href='..'>Doctor Portal</a>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal p-0">
     {menuItems}
    </ul>
  </div>
  <div className="navbar-end lg:w-0">
      <div className="flex-none lg:hidden">
        <label htmlFor="deshboard-sidebar" className="btn btn-square btn-ghost">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
        </label>
      </div>
  </div>
</div>
</div>
    );
};

export default Header;