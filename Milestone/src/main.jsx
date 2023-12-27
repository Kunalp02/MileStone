import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import rootReducer from './reducer/index';
import { configureStore } from '@reduxjs/toolkit';
import { ToastContainer } from 'react-toastify';


const store = configureStore({
  reducer: rootReducer,
})


ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <BrowserRouter>
    <ToastContainer /> {/* Add this line */}
      <App />
    </BrowserRouter>
  </Provider> 
)
