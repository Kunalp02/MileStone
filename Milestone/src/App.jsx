import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard/Dashboard';
import Events from './pages/Dashboard/Events'; 
import ManageEvent from './pages/Dashboard/ManageEvent';
import Transactions from './pages/Dashboard/Transactions';
import ManageUsers from './pages/Dashboard/ManageUsers';
import RegistrationForm from './pages/RegistrationForm';



function App() {

  return (
    <div className='w-full max-w-maxContent text-black h-full relative bg-black flex flex-col justify-center overflow-x-hidden'>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/registration-form' element={<RegistrationForm />} />
        <Route path='/login' element={<Login />} />
      
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dashboard/create-events' element={<Events/>} />
        <Route path='/dashboard/manage-events' element={<ManageEvent/>} />
        <Route path='/dashboard/manage-users' element={<ManageUsers/>} />
        <Route path='/dashboard/transactions' element={<Transactions/>} />
      </Routes>
    </div>
  );
}

export default App;
