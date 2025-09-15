import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserDetails from './pages/UserDetails'

export default function App() {
  return (
    <div className="container py-4">
      <header className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="h3">User Dashboard</h1>
        <nav><Link to="/" className="btn btn-outline-primary btn-sm">Dashboard</Link></nav>
      </header>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/user/:id" element={<UserDetails />} />
      </Routes>
    </div>
  )
}
