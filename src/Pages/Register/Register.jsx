import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import image from '../../assets/assets/images/login/login.svg';
import { AuthContext } from '../../Provider/AuthProvider';

const Register = () => {
    const { createUser } = useContext(AuthContext);

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error);
                alert('Error: ' + error.message);  // Improved error handling
            });
    };

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="">
                    <img src={image} alt="img" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                        <h1 className="text-2xl text-center font-bold">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required /> 
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Register" />
                        </div>
                    </form>
                    <p className="my-4 text-center">Create a new account <Link to="/login" className="text-orange-500">Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;
