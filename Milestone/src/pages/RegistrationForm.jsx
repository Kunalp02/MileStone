
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from "react-google-recaptcha";
import { FaArrowLeftLong } from "react-icons/fa6";
import  {NavLink} from 'react-router-dom';

const RegistrationForm = () => {
 

function onChange(value) {
  console.log("Captcha value:", value);
}




  return (
    <div className="w-[100%] h-screen text-slate-50 flex flex-col items-start mx-auto">
        
        <p className='lg:w-[900px] mt-[5rem] mx-auto text-4xl font-sans font-bold flex justify-start'>
          <NavLink to={'/'} className='mr-[30%]'>
            <span ><FaArrowLeftLong /></span>
          </NavLink>
          <p>Event Registration</p>
        </p>
        <form className='mx-auto text-2xl rounded p-5'> 

            <div className='flex justify-center gap-2 '>
              <div className='flex flex-col w-[50%] gap-y-2'>
                <label htmlFor='event'>Event selection</label>
                <select name="event" id="event" className='rounded-sm px-1 py-1' required>
                  <option value="none">Select Event</option>
                </select>
              </div>

              <div className='flex flex-col gap-y-2 '>
                <label htmlFor="eventname">No of Participant</label>
                <input type='text' name='firstname' className='rounded-sm px-1 py-1' placeholder='1 or 2' min={1} max={2} required/>
              </div>
            </div>

            <div className='flex justify-center gap-2 mt-3'>
              <div className='flex flex-col gap-y-2'>
                <label htmlFor="eventname">First Participant</label>
                <input type='text' name='firstname' className='rounded-sm px-1 py-1' />
              </div>

              <div className='flex flex-col gap-y-2'>
                <label htmlFor="eventname">Phone</label>
                <input type='text' name='firstname' className='rounded-sm px-1 py-1' placeholder=''/>
              </div>
            </div>


            <div className='flex justify-start gap-2 mt-3'>
              <div className='flex flex-col gap-y-2'>
                  <label htmlFor="eventname">Email Address</label>
                  <input type='text' name='firstname' className='rounded-sm px-1 py-1' placeholder=''/>
              </div>
            </div>


            <div className='flex justify-center gap-2 mt-3'>
              <div className='flex flex-col gap-y-2'>
                <label htmlFor="eventname">Second Participant</label>
                <input type='text' name='firstname' className='rounded-sm px-1 py-1' placeholder='optional'/>
              </div>

              <div className='flex flex-col gap-y-2'>
                <label htmlFor="eventname">Phone</label>
                <input type='text' name='firstname' className='rounded-sm px-1 py-1' placeholder=''/>
              </div>
            </div>


            <div className='flex justify-start gap-2 mt-3 mb-3'>
              <div className='flex flex-col gap-y-2'>
                  <label htmlFor="eventname">Email Address</label>
                  <input type='text' name='firstname' className='rounded-sm px-1 py-1' placeholder=''/>
              </div>
            </div>

            <ReCAPTCHA
              sitekey={"6Lf3S3UnAAAAAD7sA3n3WmnYvZDo6bBb7HVLklnx"}
              onChange={onChange}
              
            />

            <div className='flex mt-5 justify-center'>
              <button className='bg-indigo-900 px-2 py-2 rounded-lg'>Make Payment</button>
            </div>
            
        </form>
    </div>
  )
}

export default RegistrationForm
