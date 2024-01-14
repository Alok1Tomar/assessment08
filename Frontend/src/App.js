// src/App.js
import React from 'react';
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Checkout from './components/Checkout';
import OrderHistory from './components/OrderHistory';
import AdminDashboard from './components/AdminDashboard';


function App() {
  return (
    <div>
    <Routes>
        <Route path="/" exact component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/checkout" component={Checkout} />
        <Route path="/order-history" component={OrderHistory} />
        <Route path="/admin-dashboard" component={AdminDashboard} />
        
     
    </Routes>
    </div>
  );
}

export default App;
