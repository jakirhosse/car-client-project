import React, { useContext, useState } from 'react';
import image from '../../assets/assets/images/login/login.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Provider/AuthProvider';
import axios from 'axios';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const [error, setError] = useState('');

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      const result = await signIn(email, password);
      const loggedUser = result.user;
      const user = { email };

      axios.post('http://localhost:5000/jwt', user)
        .then((res) => {
          console.log(res.data);
          if (res.data.success) {
            navigate(location.state?.from?.pathname || '/');
          }
        })
        .catch((error) => {
          if (error.response && error.response.status === 401) {
            setError('Invalid email or password');
          } else {
            setError('An unexpected error occurred');
          }
        });
    } catch (error) {
      console.error('Error during signIn:', error);
      setError('An unexpected error occurred');
    }
  };

  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row">
        <div className="">
          <img src={image} alt="img" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className='text-2xl text-center font-bold'>Login</h1>
            {error && <div className="text-red-500">{error}</div>}
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
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Login" />
            </div>
          </form>
          <p className='my-4 text-center'>Don't have an account? <Link to="/register" className='text-orange-500'>Register</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
