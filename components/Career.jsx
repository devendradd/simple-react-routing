import React from 'react'
import { useLocation } from 'react-router-dom'

function Career() {
  const location = useLocation();
  const data = location.state || {};
  return (
    <div>
      <h2>Career Opportunities</h2>
      <p>Explore our job openings and join our team!</p>
      <h1> {data?.message}</h1>
    </div>
  )
}

export default Career
