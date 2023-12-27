import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { signupUser } from '../services/authService';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const dispatch = useDispatch();
    const loading = useSelector((state) => state.auth.loading);
    const error = useSelector((state) => state.auth.error);
    const navigate = useNavigate();

    const [data, setData] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        role: '',
        password: '',
        confirmPassword: ''
    })

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(data);
        dispatch(signupUser(data, navigate));
    }

    const changeHandler = (e) => {
        console.log(e.target.value)
        setData({
            ...data,
            [e.target.name]: e.target.value,
        })
    }   

  return (
    <div className="w-[100%] h-screen">
    
            <div className="max-w-[500px] mx-auto h-[450px] relative top-[30%] rounded-lg border flex flex-col items-center gap-3 text-white text-1xl ">
                <div className=" mt-10 text-3xl font-semibold"> 
                    <h1>Signup</h1>
                </div>
                <form onSubmit={submitHandler} >
                    
                    <div className="flex gap-4 mb-3">
                        <div className="">
                            <input type="text" name="firstname" placeholder="First name" className="p-2 rounded" onChange={changeHandler} value={data.firstname}/>
                        </div>

                        <div>
                            <input type="text" name="lastname" placeholder="Last name" className="p-2 rounded" onChange={changeHandler} value={data.lastname}/>
                        </div>
                    </div>

                    <div className="flex mb-3">
                        <input type="email" name="email" placeholder="Email Address" className="w-[100%] p-2 rounded" onChange={changeHandler} value={data.email}/>
                    </div>

                    <div className="flex gap-4 mb-3">
                        <div>
                            <input type="phone" name="phone" placeholder="Phone number" className="p-2 rounded" onChange={changeHandler} value={data.phone}/>
                        </div> 

                        <select name="role" className="rounded p-2" onChange={changeHandler} value={data.role}>
                            <option>
                                Select Role
                            </option>   
                            <option>
                                Admin
                            </option>
                            <option>
                                Co ordinator
                            </option>
                        </select>
                                              
                    </div>

                    <div className="flex gap-4 mb-3" >
                        <div className="">
                            <input type="password" name="password" placeholder="Password" className="p-2 rounded" onChange={changeHandler} value={data.password}/>
                        </div>

                        <div>
                            <input type="password" name="confirmPassword" placeholder="Confirm password" className="p-2 rounded" onChange={changeHandler} value={data.confirmPassword}/>
                        </div>
                    </div>

                    {error && <p>{error}</p>}

                    <div className="flex justify-center">
                       <button type="submit" className="p-2 bg-slate-500 rounded" disabled={loading}>
                        {loading ? 'Loading...' : 'Signup'}
                        </button>
                    </div>     
                </form>
            </div>
        
    </div>
  )
}

export default Signup
