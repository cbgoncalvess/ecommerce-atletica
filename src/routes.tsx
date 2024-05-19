import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import ForgotPassword from './pages/forgot-password';
import Register from './pages/register';

export default function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </Router>
    );
}
