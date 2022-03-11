import "./App.scss";
import React, { useState } from "react";
import { Routes, Route, useNavigate } from 'react-router-dom';
import LoginPage from "./components/LoginPage";
import Homepage from './components/Homepage';
import Bookings from './components/Booking';

function App() {
  const navigate = useNavigate();

  function loginSetter(/* pass in username and password */) {
    // send the user to the /homepage
    // make an axios request to the server, sending both the username and the password (use a post req)
    // upon a success, navigate to /homepage
    // upon a faliure, tell the user that something went wrong
    navigate("/homepage");
  }

  return (
    <div className="App">
      {/* put website header here */}
      <Routes>
        <Route path='/' element={<LoginPage setLoggedIn={loginSetter}/>}/> 
        <Route path='/homepage' element={<Homepage />}/> 
        <Route path='/bookings' element={<Bookings />}/> 
      </Routes>
      {/* put website footer here */}
    </div>
  );
}


export default App;