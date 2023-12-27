
import axios from 'axios';
import { loginStart, loginSuccess, loginFailure, logout,
    logoutSuccess, signupFailure, signupStart, signupSuccess } from '../slices/authSlice';
import { toast } from 'react-toastify';

const BASE_URL = 'http://localhost:5000/api/v1';

export const loginUser = (email, password, navigate) => {
    return async(dispatch) => {
    
        try {
            dispatch(loginStart());
            const res = await axios.post(`${BASE_URL}/login`, {
                email,
                password,
            });
            dispatch(loginSuccess(res.data));
            navigate('/dashboard');
            toast.success('Login successful!');
        } catch (err) {
            dispatch(loginFailure(err.response.data.message));
        }
    }
}

export const signupUser = (userInfo, navigate) => {
    return async(dispatch) => {

        try{
            dispatch(signupStart());

            const response = await axios.post(`${BASE_URL}/signup`, userInfo);
            dispatch(signupSuccess(response.data));
            toast.success('Signup successful!'); // Add this line
            navigate('/login');
        }
        catch(err){
            dispatch(signupFailure(err.response.data.message));
        }
    }
}

export const logoutUser = (navigate) => {
    return async(dispatch) => {
        try{
            dispatch(logout());
            const response = await axios.post(`${BASE_URL}/logout`);
            console.log(response);
            dispatch(logoutSuccess(response.data));
            navigate('/');
        }
        catch(err){
            dispatch(loginFailure(err.response.data.message));
        }
    }
}
    
