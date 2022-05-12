import React from 'react';
import { FcGoogle} from 'react-icons/fc';
import { BsFacebook} from 'react-icons/bs';
import { useSignInWithGoogle,  useSignInWithFacebook } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import {toast} from 'react-toastify';
import Loading from '../../Shared/Loading/Loading';
import { useLocation, useNavigate } from 'react-router-dom';

const SocialLogin = () => {
const navigate = useNavigate();
const location = useLocation();
let from = location.state?.from?.pathname || "/";
const [signInWithGoogle, Guser, Gloading, Gerror] = useSignInWithGoogle(auth);
const [signInWithFacebook, Fuser, Floading, Ferror] =  useSignInWithFacebook(auth);
let socialLoginError;
if (Gerror || Ferror) {
      socialLoginError = ( Gerror?.message || Ferror?.message)
  }
  if (Gloading || Floading) {
    return <Loading />
  }
  
  if (Guser || Fuser) {
     navigate(from, { replace: true });
    return toast.success('Thank You for Joining Us!')

  }
    return (
        <div>
          <p className="text-red-500 mb-3">{socialLoginError}</p>
            <button className="btn btn-block gap-2 mb-5" type='button'  onClick={() => signInWithGoogle()}><span className='text-xl'><FcGoogle /></span>Continue with Google</button>
            <button className="btn btn-block gap-2" type='button' onClick={() => signInWithFacebook()}><span className='text-xl text-white'><BsFacebook/></span>Continue With Facebook</button>
        </div>
    );
};

export default SocialLogin;