import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Register from './Pages/Register';
import Home from './Pages/Home';
import Login from './Pages/Login';
import Landingpage from './Pages/Landingpage';
import ForgotPassword from './Pages/ForgotPassword';
import ResetPassword from './Pages/ResetPassword';
import Emailsent from './Pages/Emailsent';

const App = () => {
  return (
    <div>
      
      <BrowserRouter>
      <Routes>
        <Route path='/' element ={<Home/>}/>
        <Route path='/register' element = {<Register/>}/>
        <Route path='/login' element = {<Login/>}/>
        <Route path='/home' element = {<Landingpage/>}/>
        <Route path='/forgot_password' element = {<ForgotPassword/>} />
        <Route path='/reset_password/:id/:email' element = {<ResetPassword/>}/>
        <Route path = '/email_sent' element = {<Emailsent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;