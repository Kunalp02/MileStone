import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: '',
    password: '',
    role: ''
  });

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(loginUser(data.email, data.password, navigate));
  };

  return (
    <div className="w-[100%] h-screen">
      <div className="max-w-[500px] mx-auto h-[450px] relative top-[30%] rounded-lg border flex flex-col justify-center items-center gap-3 text-white text-1xl">
        <div className="text-3xl font-semibold">
          <h1>Login</h1>
        </div>
        <form onSubmit={submitHandler} className="flex flex-col justify-center items-center w-[100%] text-1xl">
          <div className="flex w-[100%] mb-3 justify-center">
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              placeholder="Email Address"
              className="w-[60%] p-2 rounded"
            />
          </div>

          <div className="flex w-[100%] mb-3 justify-center">
            <input
              type="password"
              name="password"
              value={data.password}
              onChange={handleChange}
              placeholder="Password"
              className="w-[60%] p-2 rounded"
            />
          </div>

          <div className="flex w-[100%] mb-3 justify-center ">
            <select
              name="role"
              value={data.role}
              onChange={handleChange}
              className="w-[60%] rounded p-[10px]"
              id="role"
            >
              <option value="">Select role</option>
              <option value="Admin">Admin</option>
              <option value="Co-ordinator">Co-ordinator</option>
            </select>
          </div>

          {error && <p>{error}</p>}

          <div className="border px-3 py-2 rounded">
            <button type="submit" disabled={loading}>
              {loading ? 'Loading..': 'Login'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
