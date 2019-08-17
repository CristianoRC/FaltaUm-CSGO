import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>bem vindo ao falta um</h1>
      <Link to="/login">Login</Link>
    </div>
  )
}

export default Home
