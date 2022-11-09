import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';
import loginImg from '../../assests/man-min.png'
import { AuthProvider } from '../../Contexts/AuthContext';

const Login = () => {
    const {signIn} = useContext(AuthProvider);
    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result => {
            const user = result.user;
            toast.success('Login Successfully')
            console.log(user);
        })
        .catch(error => console.error(error))
    }
    return (
        <div className='p-7 mx-auto'>
            <div className="hero min-h-screen bg-base-200  rounded-lg">
            <div className="hero-content lg:justify-end flex">
                <div className="hidden lg:flex">
                    <img className='h-[500px] w-[600px]' src={loginImg} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">
                        <h2 className='text-center text-5xl'>Login</h2>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" />
                        </div>
                        <div className="form-control mt-6">
                            <button type='submit' className="btn btn-primary">Login</button>
                        </div>
                        <p className='text-lg'>New to GetJustice? <Link className='link link-primary' to='/signup'>Sign Up Now.</Link></p>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;