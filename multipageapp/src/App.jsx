// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Checkout from './Checkout';
import Login from './Login';
import Logout from './Logout';
import { UserProvider } from './context/UserContext';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Homepage from './pages/Homepage';
// import Dashboard from './pages/Dashboard';
// import Nav from './Nav';
// import Profile from './pages/Profile';
// import Settings from './pages/Settings';
// import Products from './pages/Products';


function App() {
  return (
      <div>
        <UserProvider>
          <Login />
          <Checkout />
          <Logout />
        </UserProvider>          
      </div>

    /*
    <BrowserRouter>
    <Nav />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/products/:id' element={<Products />} />
        <Route path='/dashboard' element={<Dashboard />}>
          <Route path='profile' element={<Profile />} />
          <Route path='settings' element={<Settings />} />
        </Route>
      </Routes>
    </BrowserRouter>
    */
  );
}

export default App
