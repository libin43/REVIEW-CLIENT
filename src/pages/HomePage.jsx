import React from 'react'
import { NavBar } from '../components/NavBar'
import { Link } from 'react-router-dom';

export const HomePage = () => {
  return (
    <div>
      <NavBar />
      <div className="container mt-5">
        <h1>Welcome to the Review Application</h1>
        <p>This is your starting point for submitting reviews.</p>
        <Link to="/review" className="btn btn-primary">
          Get Started
        </Link>
      </div>
    </div>
  )
}
