import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../Loading/Loading';
import useAdmin from '../../../hooks/useAdmin';
import { signOut } from 'firebase/auth';
const RequireAdmin = ({children}) => {
    const [admin, adminLoading] = useAdmin()
  const [user, loading, error] = useAuthState(auth);
  let location = useLocation();
   if (loading || adminLoading) {
    return <div className='h-40 mt-10'>{<Loading />}</div>
  }
  if (!user || !admin) {
      signOut(auth);
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default RequireAdmin;