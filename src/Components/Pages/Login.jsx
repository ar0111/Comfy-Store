import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import UserContext, { AuthContext } from '../Context/UserContext';
import { toast } from 'react-toastify';

const Login = () => {
    const navigate = useNavigate();
    const {signIn} = useContext(AuthContext);

    const handleLogin = (event)=>{
        event.preventDefault();
        // console.log("HandleLogin Clicked");
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
        .then(result=>{
            const user = result.user;
            console.log(user);
            toast.success('User Login Successfully Done');
            navigate('/');
            form.reset();
        })
        .catch(error => console.log(error))
    }


    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                    <h1 className="text-3xl font-bold">Please Login!</h1>
                </div>
                <div className="card flex-shrink-0 w-96 max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleLogin} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />

                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>

                            <label className="label">
                                <Link to='/register' className="label-text-alt link link-hover">New User in Website? Please Sign Up</Link>
                            </label>
                        </div>

                        <div className="form-control mt-6">
                            <input type='submit' className="btn btn-primary" value='Login'/>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    );
};

export default Login;