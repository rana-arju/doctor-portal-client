import React from 'react';
import { FcGoogle} from 'react-icons/fc';
import { BsFacebook} from 'react-icons/bs';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
  import {toast} from 'react-toastify';

const SocialLogin = () => {
const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
if (error) {
    return (
      toast.error(error.message)
      
    );
  }
  if (loading) {
    return toast(<p>Loading...</p>);
  }
  if (user) {
    return (
        toast.success('Thank You for Joining Us!')
    );
  }
    return (
        <div>
            <button className="btn btn-block gap-2 mb-5" type='button'><span className='text-xl' onClick={() => signInWithGoogle()}><FcGoogle /></span>Continue with Google</button>
            <button className="btn btn-block gap-2" type='button'><span className='text-xl text-white'><BsFacebook/></span>Continue With Facebook</button>
        </div>
    );
};

export default SocialLogin;