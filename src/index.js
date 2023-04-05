import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Login } from './pages/login/Login';
import { Register } from './pages/Register';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './pages/Homepage';
import ForgotPassword from './pages/ForgotPassword';
import { PersonalDetails } from './pages/PersonalDetails';
import { BankDetailsFillup } from './pages/BankDetailsFillup';

const root = ReactDOM.createRoot(document.getElementById('root'));



root.render(
  <React.StrictMode>
    {/* <App /> */}
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Homepage />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forgot-password' element={<ForgotPassword />} />
        <Route path='/personaldetails' element={<PersonalDetails />} />
        <Route path='/bankdetails' element={<BankDetailsFillup />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
