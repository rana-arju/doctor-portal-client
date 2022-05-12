import React from 'react';
import { Link } from 'react-router-dom';
import SocialLogin from './SocialMedia/SocialLogin';

const Login = () => {
    return (
        <div className='container flex h-1/2 md:h-screen justify-center items-center'>
            <div className="card w-full md:w-2/5 bg-base-100 shadow-xl">
            <div className="card-body">
                <h2 className="text-center text-xl font-bold mb-5">Please Login</h2>
                   <form>
                    <div>
                        <input type="email" placeholder="Enter Your Eamil" className="input input-bordered w-full  block mb-5" />
                    </div>                    
                    <div>
                        <input type="password" placeholder="Password" className="input form-control input-bordered w-full  block mb-5" />
                    </div>
                    <div className='text-center'>
                        <button className="btn btn-block btn-primary bg-gradient-to-r from-primary to-secondary text-white" type='submit'>Login</button>
                    </div>
                    <p className='my-2 text-lg'>New user on Doctor Portal? <span className='link'><Link to="/register">Please Register</Link></span></p>
                </form>
                  <div className="divider">OR</div>

               <SocialLogin />
            </div>
            </div>
        </div>
    );
};

export default Login;