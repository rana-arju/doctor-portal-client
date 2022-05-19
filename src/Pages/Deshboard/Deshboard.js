import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
const Deshboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    return (
        <div>
        <div className="drawer drawer-mobile">
            <input id="deshboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl text-primary font-bold'>Deshboard</h2>
                    <Outlet />
            
            </div> 
            <div className="drawer-side">
                <label htmlFor="deshboard-sidebar" className="drawer-overlay"></label> 
                <ul className="menu gap-1 p-4 overflow-y-auto w-4/5 lg:w-80 bg-base-100 text-base-content">
                
                <li><Link to='/deshboard'>Deshboard</Link></li>
                <li><Link to="/deshboard/review">My Review</Link></li>
                <li><Link to="history">My History</Link></li>
                {admin && <>
                <li><Link to="users">All User</Link></li>
                 <li><Link to="adddoctor">Add Doctor</Link></li>
                 <li><Link to="manage">manage Doctor</Link></li>
                </>}
               
                </ul>
            
            </div>
            </div>
        </div>
    );
};

export default Deshboard;