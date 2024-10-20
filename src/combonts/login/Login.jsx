import React from 'react'
import './login.css'
const Login = () => {
  return (
    <div className='log'>
      <input type="email" placeholder='Your email' />
      <input type="password" placeholder='Password' />
      <button>Login </button>
    </div>
  )
}

export default Login